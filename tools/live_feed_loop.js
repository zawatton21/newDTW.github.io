#!/usr/bin/env node
/**
 * live_feed_loop.js — watch nelisp_runtime/live-loop.el's live frame output
 * (build/frame-current.json, rewritten atomically every simulation tick) and
 * forward each new frame to the sumi cairo-elisp sprite-bridge
 * (127.0.0.1:9099 by default) over a single persistent TCP connection,
 * reconnecting automatically if the bridge drops.
 *
 * Reuses tools/assemble_map_frame.js's `assemble()` (buffer preamble: sizes +
 * source images + gui-select-buffer 0) so the assembled frame is byte-for-
 * byte the same shape as the existing static one-frame pipeline, just run
 * continuously instead of once from the CLI.
 *
 *   node tools/live_feed_loop.js [--seconds N] [--port 9099] \
 *       [--frame build/frame-current.json] [--title-stream sumi-title-stream.json]
 *
 * Polls every 40ms via fs.statSync mtime/size (cheap; avoids re-reading the
 * file when nothing changed). Exits cleanly on SIGINT/SIGTERM, or after
 * --seconds N if given (runs forever otherwise).
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
    framePath: path.join(repoRoot, 'build', 'frame-current.json'),
    titleStreamPath: path.join(repoRoot, 'sumi-title-stream.json'),
  };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--seconds') opts.seconds = Number(argv[++i]);
    else if (argv[i] === '--port') opts.port = Number(argv[++i]);
    else if (argv[i] === '--frame') opts.framePath = path.resolve(argv[++i]);
    else if (argv[i] === '--title-stream') opts.titleStreamPath = path.resolve(argv[++i]);
  }
  return opts;
}

function readFrameRecords(framePath) {
  const raw = fs.readFileSync(framePath, 'utf8');
  const records = JSON.parse(raw);
  if (!Array.isArray(records)) {
    throw new Error(`${framePath} did not parse to a JSON array.`);
  }
  return records;
}

/** Single persistent TCP connection to the bridge; reconnects lazily the
 * next time a frame needs sending after a drop/error, and only ever holds
 * the latest not-yet-sent frame (older ones are superseded, not queued). */
class Sender {
  constructor(port) {
    this.port = port;
    this.socket = null;
    this.connecting = false;
    this.pending = null;
    this.closed = false;
  }

  send(payload) {
    this.pending = payload;
    if (this.socket && !this.socket.destroyed) {
      this._flush();
    } else {
      this._connect();
    }
  }

  _flush() {
    if (this.pending === null || !this.socket) return;
    const payload = this.pending;
    this.pending = null;
    this.socket.write(payload);
  }

  _connect() {
    if (this.connecting || this.closed) return;
    this.connecting = true;
    const socket = net.createConnection({ host: '127.0.0.1', port: this.port });
    socket.on('connect', () => {
      this.connecting = false;
      this.socket = socket;
      this._flush();
    });
    socket.on('error', (err) => {
      console.error(`live_feed_loop: socket error: ${err.message}`);
    });
    socket.on('close', () => {
      if (this.socket === socket) this.socket = null;
      this.connecting = false;
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
  let lastMtimeMs = 0;
  let lastSize = -1;
  let frameCount = 0;
  let stopped = false;
  let interval = null;

  function pollOnce() {
    let stat;
    try {
      stat = fs.statSync(opts.framePath);
    } catch (err) {
      return; // frame file not written yet
    }
    if (stat.mtimeMs === lastMtimeMs && stat.size === lastSize) return;
    lastMtimeMs = stat.mtimeMs;
    lastSize = stat.size;

    let records;
    try {
      records = readFrameRecords(opts.framePath);
    } catch (err) {
      // Likely caught mid-write despite the tmp+rename dance; try again next tick.
      console.error(`live_feed_loop: skipping unreadable frame: ${err.message}`);
      return;
    }

    let combined;
    try {
      ({ combined } = assemble(records, opts.titleStreamPath));
    } catch (err) {
      console.error(`live_feed_loop: assemble failed: ${err.message}`);
      return;
    }

    const payload = `${JSON.stringify(combined)}\n`;
    sender.send(payload);
    frameCount += 1;
    console.log(`live_feed_loop: sent frame ${frameCount} (${combined.length} records, ${payload.length} bytes)`);
  }

  function shutdown() {
    if (stopped) return;
    stopped = true;
    if (interval) clearInterval(interval);
    sender.destroy();
    console.log(`live_feed_loop: exiting after ${frameCount} frame(s) sent.`);
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
