#!/usr/bin/env node
'use strict';
/**
 * key_input_server.js -- terminal-driven input source for the live newDTW
 * pipeline.  Run this in its own terminal alongside the rest of the live
 * stack (bridge / live_feed_loop / the emacs live-loop with
 * `gr-live-input-mode' t / the sumi-sprite-live window).  Every arrow-key or
 * WASD keypress atomically writes ONE line to build/key-state.txt:
 *
 *   <TOKEN> <SEQ>\n
 *
 * where TOKEN is one of UP / DOWN / LEFT / RIGHT and SEQ is a per-process
 * monotonically increasing counter (one increment per keypress).  The elisp
 * side (nelisp_runtime/live-loop.el, `gr-live-step-player-input') polls this
 * file once per simulation tick and only acts on a SEQ it has not consumed
 * yet, so one keypress == one grid step regardless of how long a tick takes
 * to notice it, and holding no key (or an unmapped key) leaves the player
 * standing still.
 *
 * The write is atomic (write build/key-state.txt.tmp, then rename over the
 * real path) so the elisp reader never observes a half-written line.
 *
 *   node tools/key_input_server.js
 *
 * Controls: arrow keys or WASD to move, q or Ctrl-C to quit (the terminal is
 * restored to cooked/line mode on exit either way).
 *
 * Non-interactive note: this reads keypresses via Node's `readline`
 * keypress-event parser (readline.emitKeypressEvents), which works whether
 * or not stdin is a real TTY -- raw mode (immediate, unbuffered delivery) is
 * only enabled when stdin.isTTY, so piping synthetic input in still parses
 * into the same key events (useful for a non-interactive smoke test), just
 * without the "as you type" latency a real terminal gives.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const repoRoot = path.resolve(__dirname, '..');
const outPath = path.join(repoRoot, 'build', 'key-state.txt');
const tmpPath = `${outPath}.tmp`;

// Arrow keys and WASD both map to the same four direction tokens; readline's
// keypress `key.name` is already lowercase for both ('up'/'down'/'left'/
// 'right' for arrows, 'w'/'a'/'s'/'d' for letters regardless of Shift).
const KEY_TOKENS = {
  up: 'UP', down: 'DOWN', left: 'LEFT', right: 'RIGHT',
  w: 'UP', s: 'DOWN', a: 'LEFT', d: 'RIGHT',
};

let seq = 0;
let shuttingDown = false;

function ensureBuildDir() {
  const dir = path.dirname(outPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeKeyState(token) {
  seq += 1;
  fs.writeFileSync(tmpPath, `${token} ${seq}\n`, 'utf8');
  fs.renameSync(tmpPath, outPath);
  return seq;
}

function printLegend() {
  console.log('key_input_server: controls -- arrow keys or WASD to move, q / Ctrl-C to quit.');
  console.log(`key_input_server: writing "<TOKEN> <SEQ>" lines to ${outPath}`);
}

function restoreTerminal() {
  if (process.stdin.isTTY) process.stdin.setRawMode(false);
  process.stdin.pause();
}

function shutdown(code) {
  if (shuttingDown) return;
  shuttingDown = true;
  restoreTerminal();
  console.log(`key_input_server: exiting after ${seq} keypress(es) sent, terminal restored.`);
  process.exit(code);
}

function onKeypress(str, key) {
  if (!key) return;
  if (key.ctrl && key.name === 'c') { shutdown(0); return; }
  if (key.name === 'q') { shutdown(0); return; }
  const token = KEY_TOKENS[key.name];
  if (!token) return; // unmapped key: ignored, no write
  const n = writeKeyState(token);
  console.log(`${token} (seq ${n})`);
}

function main() {
  ensureBuildDir();
  printLegend();

  if (!process.stdin.isTTY) {
    console.error('key_input_server: stdin is not a TTY -- raw interactive capture is '
      + 'unavailable, but piped input is still parsed into keypress events.');
  }

  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) process.stdin.setRawMode(true);
  process.stdin.resume();

  process.stdin.on('keypress', onKeypress);
  process.stdin.on('close', () => shutdown(0));
  process.stdin.on('end', () => shutdown(0));
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

main();
