#!/usr/bin/env node
/**
 * live_feed_loop.js — watch nelisp_runtime/live-loop.el's sequenced frame output
 * (build/frames/frame-NNNNNN.json) and forward every frame in order to the sumi
 * cairo-elisp sprite-bridge
 * (127.0.0.1:9099 by default) over a single persistent TCP connection,
 * reconnecting automatically if the bridge drops.
 *
 * Reuses tools/assemble_map_frame.js's `assemble()` (buffer preamble: sizes +
 * source images + gui-select-buffer 0) so the assembled frame is byte-for-
 * byte the same shape as the existing static one-frame pipeline, just run
 * continuously instead of once from the CLI.
 *
 *   node tools/live_feed_loop.js [--seconds N] [--port 9099] \
 *       [--frames build/frames] [--frame build/frame-current.json] \
 *       [--title-stream sumi-title-stream.json]
 *
 * Polls the directory every 40ms, sends each frame over one persistent TCP
 * connection, and deletes each file only after a successful send. Exits cleanly
 * on SIGINT/SIGTERM, or after --seconds N if given (runs forever otherwise).
 */
'use strict';

const fs = require('fs');
const net = require('net');
const path = require('path');
const { assemble } = require('./assemble_map_frame.js');

const repoRoot = path.resolve(__dirname, '..');
const POLL_MS = 40;

function parseArgs(argv) {
  const opts = {
    seconds: null,
    port: 9099,
    framesDir: path.join(repoRoot, 'build', 'frames'),
    framePath: path.join(repoRoot, 'build', 'frame-current.json'),
    titleStreamPath: path.join(repoRoot, 'sumi-title-stream.json'),
  };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--seconds') opts.seconds = Number(argv[++i]);
    else if (argv[i] === '--port') opts.port = Number(argv[++i]);
    else if (argv[i] === '--frames') opts.framesDir = path.resolve(argv[++i]);
    else if (argv[i] === '--frame') opts.framePath = path.resolve(argv[++i]);
    else if (argv[i] === '--title-stream') opts.titleStreamPath = path.resolve(argv[++i]);
  }
  return opts;
}

function listFrameFiles(framesDir) {
  if (!fs.existsSync(framesDir)) return [];
  return fs.readdirSync(framesDir)
    .filter((name) => /^frame-\d+\.json$/.test(name))
    .map((name) => {
      const match = name.match(/^frame-(\d+)\.json$/);
      return {
        name,
        seq: Number(match[1]),
        path: path.join(framesDir, name),
      };
    })
    .sort((a, b) => a.seq - b.seq);
}

function cleanupStaleFrames(framesDir, sessionStartMs) {
  for (const frame of listFrameFiles(framesDir)) {
    try {
      const stat = fs.statSync(frame.path);
      if (stat.mtimeMs < sessionStartMs) {
        fs.unlinkSync(frame.path);
      }
    } catch (_err) {
      // Another process may be creating/removing files concurrently; retry later.
    }
  }
}

function readFrameRecords(framePath) {
  const raw = fs.readFileSync(framePath, 'utf8');
  const records = JSON.parse(raw);
  if (!Array.isArray(records)) {
    throw new Error(`${framePath} did not parse to a JSON array.`);
  }
  return records;
}

class Sender {
  constructor(port) {
    this.port = port;
    this.socket = null;
    this.connecting = false;
    this.queue = [];
    this.active = null;
    this.closed = false;
  }

  enqueue(item) {
    this.queue.push(item);
    this._pump();
  }

  _pump() {
    if (this.closed || this.active) return;
    if (!this.socket || this.socket.destroyed) {
      this._connect();
      return;
    }
    if (this.queue.length === 0) return;
    this.active = this.queue.shift();
    this.socket.write(this.active.payload, (err) => {
      if (err) {
        console.error(`live_feed_loop: socket write failed for seq ${this.active.seq}: ${err.message}`);
        return;
      }
      const done = this.active;
      this.active = null;
      done.onSent();
      this._pump();
    });
  }

  _connect() {
    if (this.connecting || this.closed) return;
    this.connecting = true;
    const socket = net.createConnection({ host: '127.0.0.1', port: this.port });
    socket.on('connect', () => {
      this.connecting = false;
      this.socket = socket;
      this._pump();
    });
    socket.on('error', (err) => {
      console.error(`live_feed_loop: socket error: ${err.message}`);
    });
    socket.on('close', () => {
      if (this.socket === socket) this.socket = null;
      this.connecting = false;
      if (this.active) {
        this.queue.unshift(this.active);
        this.active = null;
      }
    });
  }

  destroy() {
    this.closed = true;
    if (this.socket) this.socket.destroy();
  }
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  const sender = new Sender(opts.port);
  const startTime = Date.now();
  let receivedCount = 0;
  let sentCount = 0;
  let lastReceivedSeq = 0;
  let lastSentSeq = 0;
  let receiveGapCount = 0;
  let sendGapCount = 0;
  let stopped = false;
  let interval = null;
  const scheduledPaths = new Set();
  const pendingDeletes = new Map();

  cleanupStaleFrames(opts.framesDir, startTime);

  function noteSeq(kind, seq) {
    if (kind === 'received') {
      if (lastReceivedSeq !== 0 && seq !== lastReceivedSeq + 1) receiveGapCount += 1;
      lastReceivedSeq = seq;
      receivedCount += 1;
      return;
    }
    if (lastSentSeq !== 0 && seq !== lastSentSeq + 1) sendGapCount += 1;
    lastSentSeq = seq;
    sentCount += 1;
  }

  function retryDeletes() {
    for (const [filePath, seq] of pendingDeletes.entries()) {
      try {
        fs.unlinkSync(filePath);
        pendingDeletes.delete(filePath);
        scheduledPaths.delete(filePath);
      } catch (err) {
        if (err.code === 'ENOENT') {
          pendingDeletes.delete(filePath);
          scheduledPaths.delete(filePath);
          continue;
        }
        if (!['EPERM', 'EACCES', 'EBUSY', 'ENOENT'].includes(err.code)) {
          console.error(`live_feed_loop: failed to delete seq ${seq}: ${err.message}`);
          pendingDeletes.delete(filePath);
          scheduledPaths.delete(filePath);
        }
      }
    }
  }

  function pollOnce() {
    retryDeletes();
    for (const frame of listFrameFiles(opts.framesDir)) {
      if (scheduledPaths.has(frame.path) || pendingDeletes.has(frame.path)) continue;
      let records;
      try {
        records = readFrameRecords(frame.path);
      } catch (err) {
        console.error(`live_feed_loop: skipping unreadable seq ${frame.seq}: ${err.message}`);
        continue;
      }

      let combined;
      try {
        ({ combined } = assemble(records, opts.titleStreamPath));
      } catch (err) {
        console.error(`live_feed_loop: assemble failed for seq ${frame.seq}: ${err.message}`);
        continue;
      }

      noteSeq('received', frame.seq);
      scheduledPaths.add(frame.path);
      const payload = `${JSON.stringify(combined)}\n`;
      sender.enqueue({
        seq: frame.seq,
        payload,
        onSent: () => {
          noteSeq('sent', frame.seq);
          pendingDeletes.set(frame.path, frame.seq);
          console.log(`live_feed_loop: sent seq ${frame.seq} (${combined.length} records, ${payload.length} bytes)`);
        },
      });
    }
  }

  function shutdown() {
    if (stopped) return;
    stopped = true;
    if (interval) clearInterval(interval);
    sender.destroy();
    console.log(`live_feed_loop: exiting received=${receivedCount} sent=${sentCount} receive_gaps=${receiveGapCount} send_gaps=${sendGapCount} pending=${scheduledPaths.size}`);
    process.exit(0);
  }

  pollOnce();
  interval = setInterval(() => {
    pollOnce();
    if (opts.seconds !== null && (Date.now() - startTime) / 1000 >= opts.seconds) {
      shutdown();
    }
  }, POLL_MS);

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

main();
