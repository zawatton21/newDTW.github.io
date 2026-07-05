#!/usr/bin/env node
'use strict';
/**
 * key_input_server.js -- terminal-driven input source for the live newDTW
 * pipeline.  Run this in its own terminal alongside the rest of the live
 * stack (bridge / live_feed_loop / the emacs live-loop with
 * `gr-live-input-mode' t / the sumi-sprite-live window).  Every arrow-key or
 * WASD keypress atomically writes build/key-state.txt in this format:
 *
 *   <TOKEN> <SEQ>\n
 *   <KEYCODE>\n
 *   HELD <KEYCODE...>\n
 *
 * where TOKEN is one of UP / DOWN / LEFT / RIGHT / IDLE and SEQ is a
 * per-process monotonically increasing counter (one increment per write).
 * KEYCODE is the numeric JS keyCode for the triggering key, or 0 for an IDLE
 * release snapshot.  The HELD line lists all currently held numeric keycodes
 * space-separated after the literal "HELD".  A scripted/live key is held only
 * for a bounded window; this tool emits an IDLE snapshot automatically after
 * that window so readers do not latch the last press forever.  The first line
 * is preserved verbatim for the existing token/SEQ readers.
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
const KEY_CODES = {
  up: 38, down: 40, left: 37, right: 39,
  w: 87, s: 83, a: 65, d: 68,
};

let seq = 0;
let shuttingDown = false;
const heldKeyCodes = new Set();
const HOLD_MS = 350;
const REFRESH_MS = 50;
const RETRY_MS = 40;
let releaseTimer = null;
let refreshTimer = null;
let retryTimer = null;
let pendingPayload = null;
let retryWarningPrinted = false;
let activeToken = 'IDLE';
let activeKeyCode = 0;

function ensureBuildDir() {
  const dir = path.dirname(outPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function isRetryableRenameError(error) {
  return error && (error.code === 'EPERM' || error.code === 'EBUSY');
}

function formatKeyState(token, keyCode) {
  const heldLine = `HELD ${[...heldKeyCodes].sort((a, b) => a - b).join(' ')}`.trimEnd();
  return `${token} ${seq}\n${keyCode}\n${heldLine}\n`;
}

function flushPendingWrite() {
  if (pendingPayload === null) return true;
  fs.writeFileSync(tmpPath, pendingPayload, 'utf8');
  try {
    fs.renameSync(tmpPath, outPath);
    pendingPayload = null;
    retryWarningPrinted = false;
    return true;
  } catch (error) {
    if (!isRetryableRenameError(error)) throw error;
    if (!retryWarningPrinted) {
      console.warn('key_input_server: soft retry on EPERM/EBUSY while replacing key-state.txt');
      retryWarningPrinted = true;
    }
    return false;
  }
}

function writeKeyState(token, keyCode) {
  seq += 1;
  pendingPayload = formatKeyState(token, keyCode);
  flushPendingWrite();
  return seq;
}

function clearReleaseTimer() {
  if (releaseTimer) {
    clearTimeout(releaseTimer);
    releaseTimer = null;
  }
}

function clearRefreshTimer() {
  if (refreshTimer) {
    clearInterval(refreshTimer);
    refreshTimer = null;
  }
}

function refreshHeldState() {
  if (heldKeyCodes.size === 0) return;
  writeKeyState(activeToken, activeKeyCode);
}

function scheduleRelease() {
  clearReleaseTimer();
  clearRefreshTimer();
  refreshTimer = setInterval(() => {
    try {
      refreshHeldState();
    } catch (error) {
      console.error(`key_input_server: held refresh failed: ${error.message}`);
    }
  }, REFRESH_MS);
  releaseTimer = setTimeout(() => {
    clearRefreshTimer();
    heldKeyCodes.clear();
    emitKeyState('IDLE', 0);
    releaseTimer = null;
  }, HOLD_MS);
}

function printLegend() {
  console.log('key_input_server: controls -- arrow keys or WASD to move, q / Ctrl-C to quit.');
  console.log(`key_input_server: writing token/seq + keycode + HELD lines to ${outPath}`);
}

function restoreTerminal() {
  if (process.stdin.isTTY) process.stdin.setRawMode(false);
  process.stdin.pause();
}

function shutdown(code) {
  if (shuttingDown) return;
  shuttingDown = true;
  clearReleaseTimer();
  if (retryTimer) {
    clearInterval(retryTimer);
    retryTimer = null;
  }
  clearRefreshTimer();
  restoreTerminal();
  console.log(`key_input_server: exiting after ${seq} keypress(es) sent, terminal restored.`);
  process.exit(code);
}

function emitKeyState(token, keyCode) {
  try {
    const n = writeKeyState(token, keyCode);
    console.log(`${token} keyCode=${keyCode} (seq ${n})`);
  } catch (error) {
    console.error(`key_input_server: write failed: ${error.message}`);
  }
}

function onKeypress(str, key) {
  if (!key) return;
  if (key.ctrl && key.name === 'c') { shutdown(0); return; }
  if (key.name === 'q') { shutdown(0); return; }
  const token = KEY_TOKENS[key.name];
  const keyCode = KEY_CODES[key.name];
  if (!token) return; // unmapped key: ignored, no write
  heldKeyCodes.clear();
  heldKeyCodes.add(keyCode);
  activeToken = token;
  activeKeyCode = keyCode;
  emitKeyState(token, keyCode);
  scheduleRelease();
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
  retryTimer = setInterval(() => {
    try {
      flushPendingWrite();
    } catch (error) {
      console.error(`key_input_server: retry failed: ${error.message}`);
    }
  }, RETRY_MS);

  process.stdin.on('keypress', onKeypress);
  process.stdin.on('close', () => shutdown(0));
  process.stdin.on('end', () => shutdown(0));
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

main();
