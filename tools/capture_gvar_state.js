/**
 * capture_gvar_state.js — capture live Gvar runtime state from the Electron
 * game and export it as nelisp_runtime/gamedata-state.el, a `gr-seed-state`
 * defun the NeLisp game-runner can call before dumping a func337 frame.
 *
 * The slot mapping mirrors src/renderer/nelisp_bridge/stateDiffRunner.ts
 * readStateSlot/writeStateSlot exactly:
 *   - numeric slot N  -> Gvar.var_N
 *   - string slot S   -> Gvar[S]           (named field)
 *
 * Only plain data is exported: numbers, strings, booleans, null/undefined,
 * and arrays (recursively) of those -- never functions, canvases, contexts,
 * or other DOM/class objects. Those are legitimately out of scope for the
 * NeLisp interpreter, which only understands vectors/numbers/strings.
 *
 * Boots the same way tools/test_scenarios.js does (public/index.html in a
 * hidden BrowserWindow), then reuses its `skipToGame` key-injection sequence
 * (Z key three times: title -> login -> floor intro -> field) so the capture
 * happens on a real, in-progress dungeon floor rather than synthetic state.
 *
 *   electron tools/capture_gvar_state.js
 */
'use strict';

const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

const INIT_DELAY = 6000; // game boot + i18n init, matches test_scenarios.js
const OUT_PATH = path.join(__dirname, '..', 'nelisp_runtime', 'gamedata-state.el');

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

async function exec(win, code) {
  return win.webContents.executeJavaScript(code, true);
}

/** Key press state (HSP-derived pushing_key_list[keyCode] = 1/0 convention). */
async function pressKey(win, keyCode, holdMs = 800) {
  await exec(win, `window.debug.gvar.pushing_key_list[${keyCode}] = 1`);
  await sleep(holdMs);
  await exec(win, `window.debug.gvar.pushing_key_list[${keyCode}] = 0`);
  await sleep(300);
}

/**
 * Title -> login -> floor-intro -> field, same sequence as
 * tools/test_scenarios.js skipToGame(). Assumes existing save data (Z/A
 * repeatedly picks "continue the adventure").
 */
async function skipToGame(win) {
  await pressKey(win, 90, 1500); // title -> login
  await sleep(1500);
  await pressKey(win, 90, 800); // login -> floor intro
  await sleep(3000);
  await pressKey(win, 90, 500); // floor intro -> field
  await sleep(4000);
  const state = await exec(win, `({ var_509: window.debug.gvar.var_509, var_70: window.debug.gvar.var_70, dungeon_number: window.debug.gvar.dungeon_number })`);
  console.log(`  reached game: ${JSON.stringify(state)}`);
  return state;
}

// In-page serializer: walks every own property of Gvar (enumerable or not --
// some fields like var_236 are re-defined as non-enumerable accessors by
// debug.ts) and keeps only JSON-plain values: number/string/boolean/null and
// arrays (recursively) of those. Anything else (canvases, 2D contexts,
// functions, class instances such as CharactorInfo/ItemInfo records) is
// skipped and counted, never partially serialized.
const SERIALIZE_SRC = `(function () {
  function isPlainArrayDeep(v, depth) {
    if (depth > 8) return false;
    if (v === null || v === undefined) return true;
    var t = typeof v;
    if (t === 'number' || t === 'string' || t === 'boolean') return true;
    if (Array.isArray(v)) {
      for (var i = 0; i < v.length; i++) {
        if (!isPlainArrayDeep(v[i], depth + 1)) return false;
      }
      return true;
    }
    return false;
  }
  function convert(v) {
    if (v === null || v === undefined) return null;
    if (Array.isArray(v)) return v.map(convert);
    return v;
  }
  var out = { numeric: {}, named: {}, skipped: [], arrayRejected: [] };
  var names = Object.getOwnPropertyNames(window.debug.gvar);
  for (var i = 0; i < names.length; i++) {
    var key = names[i];
    var value;
    try { value = window.debug.gvar[key]; } catch (e) { out.skipped.push(key); continue; }
    if (value === undefined) continue;
    if (typeof value === 'function') { out.skipped.push(key); continue; }
    if (Array.isArray(value)) {
      if (!isPlainArrayDeep(value, 0)) { out.arrayRejected.push(key); continue; }
    } else if (typeof value === 'object' && value !== null) {
      out.skipped.push(key);
      continue;
    }
    var converted = convert(value);
    var m = /^var_(\\d+)$/.exec(key);
    if (m) out.numeric[m[1]] = converted;
    else out.named[key] = converted;
  }
  return JSON.stringify(out);
})()`;

function escElisp(s) {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

/** Serialize a JSON-plain value to elisp: arrays -> (vector ...) (nested arrays -> nested (vector ...)). */
function toElisp(v) {
  if (v === null || v === undefined) return 'nil';
  if (typeof v === 'number') return Number.isFinite(v) ? String(v) : '0';
  if (typeof v === 'string') return `"${escElisp(v)}"`;
  if (typeof v === 'boolean') return v ? 't' : 'nil';
  if (Array.isArray(v)) return `(vector ${v.map(toElisp).join(' ')})`;
  return 'nil';
}

function writeGamedataState(payload) {
  const numericKeys = Object.keys(payload.numeric).map(Number).sort((a, b) => a - b);
  const namedKeys = Object.keys(payload.named).sort();

  const lines = [
    ';;; gamedata-state.el --- captured live Gvar runtime state (do not edit) -*- coding: utf-8; -*-',
    ';; Generated by tools/capture_gvar_state.js from a live Electron game session',
    ';; (title -> login -> field, see skipToGame). Mirrors the slot mapping in',
    ';; src/renderer/nelisp_bridge/stateDiffRunner.ts readStateSlot/writeStateSlot:',
    ';;   numeric slot N -> Gvar.var_N, string slot S -> Gvar[S] (named field).',
    ';; Only plain data (number/string/boolean/null/array) is captured; canvases,',
    ';; contexts, functions, and class-instance records (e.g. CharactorInfo/',
    ';; ItemInfo entries in var_78/var_83) are out of scope and skipped.',
    '',
    '(defun gr-seed-state ()',
    '  "Seed gr-state with a real captured dungeon-floor snapshot."',
  ];
  for (const k of numericKeys) lines.push(`  (gr-set ${k} ${toElisp(payload.numeric[String(k)])})`);
  for (const k of namedKeys) lines.push(`  (gr-set "${escElisp(k)}" ${toElisp(payload.named[k])})`);
  lines.push(')', '', "(provide 'gamedata-state)", '');

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, lines.join('\n'), 'utf8');
  return { numericCount: numericKeys.length, namedCount: namedKeys.length };
}

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    width: 340,
    height: 340,
    webPreferences: { contextIsolation: false, nodeIntegration: true, devTools: false },
    show: false,
  });

  const errors = [];
  win.webContents.on('console-message', (_e, level, msg) => {
    if (level >= 2 && !msg.includes('Insecure Content-Security-Policy')) errors.push(`[L${level}] ${msg.slice(0, 200)}`);
  });

  win.loadFile(path.join(__dirname, '..', 'public', 'index.html'));

  await sleep(INIT_DELAY);

  try {
    await skipToGame(win);
  } catch (e) {
    console.error('skipToGame failed:', e && (e.stack || e.message) || e);
  }

  let payload = null;
  try {
    const json = await exec(win, SERIALIZE_SRC);
    payload = JSON.parse(json);
  } catch (e) {
    console.error('capture failed:', e && (e.stack || e.message) || e);
  }

  if (payload) {
    const { numericCount, namedCount } = writeGamedataState(payload);
    console.log(`wrote ${numericCount} numeric + ${namedCount} named slots -> ${path.relative(path.join(__dirname, '..'), OUT_PATH)}`);
    console.log(`skipped (non-plain objects/functions): ${payload.skipped.length}`);
    console.log(`arrayRejected (arrays containing non-plain elements): ${payload.arrayRejected.length}`);
    // A few notable map-relevant slots, for a quick sanity check in the log.
    const notable = ['35', '36', '66', '67', '70', '71', '87', '199', '217', '346', '409', '585'];
    for (const slot of notable) {
      if (slot in payload.numeric) {
        const v = payload.numeric[slot];
        const shape = Array.isArray(v) ? `array[${v.length}]${Array.isArray(v[0]) ? `[${v[0].length}]` : ''}` : JSON.stringify(v);
        console.log(`  var_${slot} = ${shape}`);
      }
    }
    if ('y_axis_map_image' in payload.named) {
      console.log(`  y_axis_map_image = ${JSON.stringify(payload.named.y_axis_map_image)}`);
    }
  }

  if (errors.length) {
    console.log(`errors (${errors.length}):`);
    errors.slice(-10).forEach((e) => console.log('  ', e));
  }

  app.exit(payload ? 0 : 1);
});
