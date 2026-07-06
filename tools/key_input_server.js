#!/usr/bin/env node
'use strict';
/**
 * key_input_server.js -- terminal-driven input source for the live newDTW
 * pipeline.  Run this in its own terminal alongside the rest of the live
 * stack (bridge / live_feed_loop / the emacs live-loop with
 * `gr-live-input-mode' t / the sumi-sprite-live window).  Every mapped
 * keypress atomically writes build/key-state.txt in this format:
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
 * Controls: arrows, Home/PageUp/End/PageDown, Z/X/A/S/C/F/Space, or q /
 * Ctrl-C to quit (the terminal is restored to cooked/line mode on exit
 * either way).
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

const KEY_SPECS = {
  up: { token: 'UP', keyCode: 38 },
  down: { token: 'DOWN', keyCode: 40 },
  left: { token: 'LEFT', keyCode: 37 },
  right: { token: 'RIGHT', keyCode: 39 },
  home: { token: 'HOME', keyCode: 36 },
  pageup: { token: 'PAGEUP', keyCode: 33 },
  end: { token: 'END', keyCode: 35 },
  pagedown: { token: 'PAGEDOWN', keyCode: 34 },
  z: { token: 'Z', keyCode: 90 },
  x: { token: 'X', keyCode: 88 },
  a: { token: 'A', keyCode: 65 },
  s: { token: 'S', keyCode: 83 },
  c: { token: 'C', keyCode: 67 },
  f: { token: 'F', keyCode: 70 },
  space: { token: 'SPACE', keyCode: 32 },
  w: { token: 'W', keyCode: 87 },
  d: { token: 'D', keyCode: 68 },
};
const SHIFT_KEY_CODE = 16;

let seq = 0;
let shuttingDown = false;
const heldKeyCodes = new Set();
const heldReleaseTimers = new Map();
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

function clearHeldReleaseTimers() {
  for (const timer of heldReleaseTimers.values()) {
    clearTimeout(timer);
  }
  heldReleaseTimers.clear();
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

function releaseHeldKey(keyCode) {
  heldReleaseTimers.delete(keyCode);
  if (!heldKeyCodes.delete(keyCode)) return;
  if (heldKeyCodes.size === 0) {
    clearRefreshTimer();
    emitKeyState('IDLE', 0);
    return;
  }
  emitKeyState(activeToken, activeKeyCode);
}

function ensureRefreshLoop() {
  if (refreshTimer) return;
  refreshTimer = setInterval(() => {
    try {
      refreshHeldState();
    } catch (error) {
      console.error(`key_input_server: held refresh failed: ${error.message}`);
    }
  }, REFRESH_MS);
}

function scheduleHeldRelease(keyCode) {
  const previous = heldReleaseTimers.get(keyCode);
  if (previous) clearTimeout(previous);
  heldKeyCodes.add(keyCode);
  heldReleaseTimers.set(keyCode, setTimeout(() => {
    releaseHeldKey(keyCode);
  }, HOLD_MS));
  ensureRefreshLoop();
}

function printLegend() {
  console.log('key_input_server: controls -- arrows, Home/PageUp/End/PageDown, Z/X/A/S/C/F/Space, q / Ctrl-C to quit.');
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
  clearHeldReleaseTimers();
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
  const spec = KEY_SPECS[key.name];
  if (!spec) return; // unmapped key: ignored, no write
  activeToken = spec.token;
  activeKeyCode = spec.keyCode;
  scheduleHeldRelease(spec.keyCode);
  if (key.shift) scheduleHeldRelease(SHIFT_KEY_CODE);
  emitKeyState(spec.token, spec.keyCode);
  clearReleaseTimer();
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
