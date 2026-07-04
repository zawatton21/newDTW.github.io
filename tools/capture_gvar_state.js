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
 * One exception: class-instance data records (CharactorInfo in var_83 --
 * enemies, ItemInfo in var_78 -- floor items; see src/renderer/classes.ts)
 * ARE exported, because the transpiled draw path (func396/func397 for
 * items, func565/func626/func566/func567 for enemies -- see
 * tools/generate_nelisp_conditional_runtime.js emitTarget/emitValue) reads
 * their fields via plain property access (`Gvar.var_83[i].Var1`), which the
 * transpiler lowers to `(gr-prop-ref (gr-index-ref (gr-get 83) i) "Var1")`.
 * game-runner.el's gr-prop-ref already resolves "VarN" against a vector by
 * numeric index N (no interpreter change needed), so each record is
 * serialized as a vector [Var0 Var1 ... VarN] in strict numeric order --
 * exactly CharactorInfo/ItemInfo's own Save() layout.
 *
 * Boots the same way tools/test_scenarios.js does (public/index.html in a
 * hidden BrowserWindow), then reuses its `skipToGame` key-injection sequence
 * (Z key three times: title -> login -> floor intro -> field) so the capture
 * happens on a real, in-progress dungeon floor rather than synthetic state.
 *
 *   electron tools/capture_gvar_state.js
 *
 * --dungeon mode: after skipToGame lands in the town/hub (dungeon_number 0,
 * the skipToGame flow never leaves town), calls the new
 * `window.debug.enterDungeon(n)` hook (src/renderer/debug.ts) to drive the
 * SAME self-contained per-dungeon initializer the real "walk to the
 * hotel-exterior door + confirm dialog" UI flow would call (func0898 ->
 * Func.func825() for dungeon 1, etc. -- see debug.ts's `enterDungeon` doc
 * comment for the full call chain). That initializer ends in Func.func006(),
 * which chains into the real ASCII-template floor-generation pipeline and
 * populates var_71/var_72/var_65/var_73/var_76/var_84/var_79/var_80 etc.
 * with a genuinely generated floor (hundreds of walkable floor-family cells
 * across rooms/corridors) and a real (non-forced) dungeon_number >= 1 --
 * no synthetic seedEncounter() call in this mode, the floor's own enemies/
 * items (if any spawned naturally) are captured as-is. Requires `npm run
 * build` first so the compiled renderer bundle includes the new debug hook.
 *
 *   electron tools/capture_gvar_state.js --dungeon [--dungeon-number N]
 *
 * Writes nelisp_runtime/gamedata-state-dungeon.el instead of the default
 * gamedata-state.el (same `gr-seed-state` contract -- file choice at
 * concatenation time selects which captured scene gr-seed-state seeds).
 * Verifies dungeon_number>=1, a real floor (>=200 var_71 floor-family cells,
 * well above the ~94-cell synthetic fallback room), and reports enemy/item
 * counts before writing; aborts (exit 1, no file written) if the floor looks
 * synthetic/ungenerated.
 */
'use strict';

const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

const CLI_ARGS = process.argv.slice(2);
const DUNGEON_MODE = CLI_ARGS.includes('--dungeon');
function argValue(flag, fallback) {
  const idx = CLI_ARGS.indexOf(flag);
  return (idx >= 0 && CLI_ARGS[idx + 1] !== undefined) ? CLI_ARGS[idx + 1] : fallback;
}
const DUNGEON_NUMBER = parseInt(argValue('--dungeon-number', '1'), 10);
// Real generated floors run to the low thousands of floor-family cells on a
// 70x70 grid; the synthetic town/new-game fallback room the default (non
// --dungeon) capture mode forces dungeon_number=1 onto is ~94 cells. 200 is
// comfortably above the fallback and comfortably below a real floor.
const MIN_REAL_FLOOR_CELLS = 200;

const INIT_DELAY = 6000; // game boot + i18n init, matches test_scenarios.js
const OUT_PATH = path.join(
  __dirname, '..', 'nelisp_runtime',
  DUNGEON_MODE ? 'gamedata-state-dungeon.el' : 'gamedata-state.el',
);

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

/**
 * Place one enemy and one item on the current floor, within the 11x11 window
 * func326 walks around the player (var_66/var_67), so the seeded state has a
 * real record for the func396/func565 draw path to pick up.
 *
 * debug.spawnEnemy()/debug.placeItem() (src/renderer/debug.ts) already do
 * almost this, but they write the occupancy flag to the wrong grid: var_84
 * and var_88 respectively, which nothing in the draw path reads. func326
 * reads var_82[x][y] (enemy slot id) and var_77[x][y] (item-record index) --
 * see src/renderer/variable.ts:162-164 and func396.ts/func565.ts. This seeds
 * the same CharactorInfo/ItemInfo record shape debug.ts uses, but writes the
 * occupancy grids the transpiled game-runner actually reads.
 *
 * Also forces dungeon_number to 1: skipToGame's Z-mash lands in the town/
 * hotel hub (dungeon_number 0), and func326's floor-item branch only calls
 * func396 when dungeon_number != 0 (or var_595 == 1, a rare hub-only flag)
 * -- see func326.ts's `if (Gvar.dungeon_number != 0) { await Func.func396() }`
 * guard. Without this the seeded item is real but never drawn, matching
 * real gameplay (the hub genuinely hides floor items outside a dungeon).
 */
async function seedEncounter(win) {
  const result = await exec(win, `(function () {
    var g = window.debug.gvar;
    g.dungeon_number = 1; // enter "dungeon 1" so func326 draws floor items (see above)
    var px = g.var_66, py = g.var_67;

    var ex = px - 1, ey = py; // one cell left of the player
    if (!g.var_83[1]) g.var_83[1] = {};
    g.var_83[1].Var0 = 1;   // enemy_list id 1 (ordinary human grunt; see func626 data table) -- avoids func567's special-cased ids
    g.var_83[1].Var1 = ex;
    g.var_83[1].Var2 = ey;
    g.var_83[1].Var3 = 4;   // hp
    g.var_83[1].Var5 = 2;   // facing (numpad-style; 2 = down)
    g.var_83[1].Var10 = g.dungeon_number || 0;
    g.var_83[1].Var12 = 12; // speed
    g.var_83[1].Var13 = 0;
    g.var_82[ex][ey] = 1;   // enemy-occupied grid: slot id (what func326/func565 read)
    if (!(g.var_107 >= 1)) g.var_107 = 1;

    var ix = px + 1, iy = py; // one cell right of the player
    if (!g.var_78[1]) g.var_78[1] = {};
    g.var_78[1].Var0 = 1;   // belongings_item_list id 1 (money icon; see func397)
    g.var_78[1].Var1 = ix;
    g.var_78[1].Var2 = iy;
    g.var_78[1].Var10 = 1;  // force-visible regardless of var_103
    g.var_78[1].Var13 = 0;
    g.var_77[ix][iy] = 1;   // floor-item grid: index into var_78 (what func396 reads)

    return { px: px, py: py, enemy: [ex, ey], item: [ix, iy] };
  })()`);
  console.log(`  seeded encounter: ${JSON.stringify(result)}`);
  return result;
}

/**
 * --dungeon mode: drive a REAL natural dungeon-floor entry via the
 * `window.debug.enterDungeon(n)` hook added to src/renderer/debug.ts.
 *
 * Fires enterDungeon() *without* awaiting its returned promise directly in
 * executeJavaScript (a page-side .then()/.catch() instead flips
 * window.__enterDungeonDone/__enterDungeonError) and polls Gvar snapshots on
 * a bounded budget instead. This is deliberately more defensive than a fixed
 * sleep: a hidden (show:false) BrowserWindow's timers can be background-
 * throttled, and func825-class initializers chain through func006() into
 * the real floor-generation pipeline, which is real game code with data-
 * dependent loop counts -- worth observing progress rather than guessing a
 * constant. Logs a progress line every `pollMs` so a slow-but-progressing
 * run is visible, and reports (without throwing) if it never finishes
 * within `maxWaitMs`, so the caller's verification step gets a clear
 * "still dungeon_number 0" signal instead of a silent indefinite hang.
 */
async function enterDungeonNaturally(win, dungeonNumber, { maxWaitMs = 20000, pollMs = 1500 } = {}) {
  await exec(win, `(function () {
    window.__enterDungeonDone = false;
    window.__enterDungeonError = null;
    window.debug.enterDungeon(${dungeonNumber})
      .then(function () { window.__enterDungeonDone = true; })
      .catch(function (e) { window.__enterDungeonError = String((e && e.stack) || e); window.__enterDungeonDone = true; });
    return true;
  })()`);

  const start = Date.now();
  let snap = null;
  while (Date.now() - start < maxWaitMs) {
    await sleep(pollMs);
    snap = await exec(win, `({
      done: window.__enterDungeonDone, error: window.__enterDungeonError,
      dungeon_number: window.debug.gvar.dungeon_number, current_floor: window.debug.gvar.current_floor,
      var_66: window.debug.gvar.var_66, var_67: window.debug.gvar.var_67
    })`);
    console.log(`  enterDungeon progress @${Date.now() - start}ms: ${JSON.stringify(snap)}`);
    if (snap.done) break;
  }
  if (!snap || !snap.done) {
    console.error(`  enterDungeon did NOT settle within ${maxWaitMs}ms -- proceeding to capture/verify whatever state exists now.`);
  } else if (snap.error) {
    console.error(`  enterDungeon threw: ${snap.error}`);
  } else {
    console.log(`  entered dungeon naturally: ${JSON.stringify(snap)}`);
  }
  return snap;
}

// In-page serializer: walks every own property of Gvar (enumerable or not --
// some fields like var_236 are re-defined as non-enumerable accessors by
// debug.ts) and keeps only JSON-plain values: number/string/boolean/null and
// arrays (recursively) of those. Anything else (canvases, 2D contexts,
// functions, class instances such as CharactorInfo/ItemInfo records) is
// skipped and counted, never partially serialized.
const SERIALIZE_SRC = `(function () {
  // CharactorInfo (var_83, enemies) / ItemInfo (var_78, floor items) are
  // plain-data class instances whose only own-enumerable keys are Var0..VarN
  // (see src/renderer/classes.ts). Recognize them structurally (no class
  // import needed in the page context) and flatten to a [Var0..VarN] array,
  // matching each class's own Save() order -- this is exactly what the
  // transpiled draw path's (gr-prop-ref RECORD "VarN") expects to index.
  function isVarRecord(v) {
    if (v === null || typeof v !== 'object' || Array.isArray(v)) return false;
    var keys = Object.keys(v);
    if (keys.length === 0) return false;
    for (var i = 0; i < keys.length; i++) {
      if (!/^Var\\d+$/.test(keys[i])) return false;
    }
    return true;
  }
  function varRecordToArray(v) {
    var keys = Object.keys(v);
    var maxIdx = -1;
    for (var i = 0; i < keys.length; i++) {
      var n = parseInt(keys[i].slice(3), 10);
      if (n > maxIdx) maxIdx = n;
    }
    var arr = [];
    for (var j = 0; j <= maxIdx; j++) {
      var val = v['Var' + j];
      arr.push(val === undefined ? 0 : val);
    }
    return arr;
  }
  function isPlainArrayDeep(v, depth) {
    if (depth > 8) return false;
    if (v === null || v === undefined) return true;
    var t = typeof v;
    if (t === 'number' || t === 'string' || t === 'boolean') return true;
    if (isVarRecord(v)) return isPlainArrayDeep(varRecordToArray(v), depth + 1);
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
    if (isVarRecord(v)) return convert(varRecordToArray(v));
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

/**
 * --dungeon mode verification stats: a real generated floor should have
 * hundreds of var_71 floor-family (1..12) cells (vs. ~94 for the synthetic
 * town/new-game fallback room) and a genuinely non-forced dungeon_number.
 * Enemy/item counts come from var_83/var_78 (CharactorInfo/ItemInfo records,
 * already flattened to [Var0 Var1 ...] vectors by the in-page serializer) --
 * Var0 (index 0) non-zero means an active/occupied slot.
 */
function computeDungeonStats(payload) {
  const grid71 = payload.numeric['71'] || [];
  let floorCellCount = 0;
  let totalCells = 0;
  for (const row of grid71) {
    if (!Array.isArray(row)) continue;
    for (const cell of row) {
      totalCells += 1;
      if (typeof cell === 'number' && cell >= 1 && cell <= 12) floorCellCount += 1;
    }
  }
  const countActive = (records) => (Array.isArray(records)
    ? records.filter((r) => Array.isArray(r) && r.length > 0 && r[0] !== 0).length
    : 0);
  return {
    dungeonNumber: payload.named.dungeon_number,
    currentFloor: payload.named.current_floor,
    floorCellCount,
    totalCells,
    enemyCount: countActive(payload.numeric['83']),
    itemCount: countActive(payload.numeric['78']),
  };
}

function writeGamedataState(payload) {
  const numericKeys = Object.keys(payload.numeric).map(Number).sort((a, b) => a - b);
  const namedKeys = Object.keys(payload.named).sort();

  const fileBase = DUNGEON_MODE ? 'gamedata-state-dungeon.el' : 'gamedata-state.el';
  const captureNote = DUNGEON_MODE
    ? `;; (title -> login -> field via skipToGame, then window.debug.enterDungeon(${DUNGEON_NUMBER})`
    : ';; (title -> login -> field, see skipToGame). Mirrors the slot mapping in';
  const lines = [
    `;;; ${fileBase} --- captured live Gvar runtime state (do not edit) -*- coding: utf-8; -*-`,
    ';; Generated by tools/capture_gvar_state.js from a live Electron game session',
    captureNote,
    ...(DUNGEON_MODE
      ? [';;  -- src/renderer/debug.ts -- to force natural entry into a REAL',
        ';;  generated dungeon floor). Mirrors the slot mapping in']
      : []),
    ';; src/renderer/nelisp_bridge/stateDiffRunner.ts readStateSlot/writeStateSlot:',
    ';;   numeric slot N -> Gvar.var_N, string slot S -> Gvar[S] (named field).',
    ';; Only plain data (number/string/boolean/null/array) is captured; canvases,',
    ';; contexts, and functions are out of scope and skipped. CharactorInfo',
    ';; (var_83, enemies) / ItemInfo (var_78, floor items) class-instance',
    ';; records ARE captured, flattened to [Var0 Var1 ... VarN] vectors (see',
    ';; isVarRecord/varRecordToArray above) so gr-prop-ref can read "VarN"',
    ';; fields exactly the way the transpiled draw path expects.',
    '',
    '(defun gr-seed-state ()',
    '  "Seed gr-state with a real captured dungeon-floor snapshot."',
  ];
  for (const k of numericKeys) lines.push(`  (gr-set ${k} ${toElisp(payload.numeric[String(k)])})`);
  for (const k of namedKeys) lines.push(`  (gr-set "${escElisp(k)}" ${toElisp(payload.named[k])})`);
  const provideSym = DUNGEON_MODE ? 'gamedata-state-dungeon' : 'gamedata-state';
  lines.push(')', '', `(provide '${provideSym})`, '');

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, lines.join('\n'), 'utf8');
  return { numericCount: numericKeys.length, namedCount: namedKeys.length };
}

app.whenReady().then(async () => {
  const win = new BrowserWindow({
    width: 340,
    height: 340,
    // backgroundThrottling: false -- a hidden (show:false) window would
    // otherwise have its timers/rAF throttled by Chromium, which matters
    // here because --dungeon mode's func825-class initializers chain
    // through a handful of real Adap.wait()/AutoDraw() setTimeout-based
    // delays before settling.
    webPreferences: { contextIsolation: false, nodeIntegration: true, devTools: false, backgroundThrottling: false },
    show: false,
  });

  const errors = [];
  win.webContents.on('console-message', (_e, level, msg) => {
    if (level >= 2 && !msg.includes('Insecure Content-Security-Policy')) errors.push(`[L${level}] ${msg.slice(0, 200)}`);
    if (msg.includes('[debug]')) console.log(`  page> ${msg.slice(0, 300)}`);
  });

  win.loadFile(path.join(__dirname, '..', 'public', 'index.html'));

  await sleep(INIT_DELAY);

  try {
    await skipToGame(win);
    if (DUNGEON_MODE) {
      await enterDungeonNaturally(win, DUNGEON_NUMBER);
    } else {
      await seedEncounter(win);
    }
  } catch (e) {
    console.error('skipToGame/enterDungeon/seedEncounter failed:', e && (e.stack || e.message) || e);
  }

  let payload = null;
  try {
    const json = await exec(win, SERIALIZE_SRC);
    payload = JSON.parse(json);
  } catch (e) {
    console.error('capture failed:', e && (e.stack || e.message) || e);
  }

  if (payload && DUNGEON_MODE) {
    const stats = computeDungeonStats(payload);
    console.log(`dungeon verification: dungeon_number=${stats.dungeonNumber} current_floor=${stats.currentFloor} `
      + `floor-cells=${stats.floorCellCount}/${stats.totalCells} enemies=${stats.enemyCount} items=${stats.itemCount}`);
    if (!(stats.dungeonNumber >= 1) || stats.floorCellCount < MIN_REAL_FLOOR_CELLS) {
      console.error(`ABORT: dungeon verification failed (need dungeon_number>=1 and >=${MIN_REAL_FLOOR_CELLS} real `
        + `floor-family cells in var_71; got dungeon_number=${stats.dungeonNumber}, floor-cells=${stats.floorCellCount}) `
        + `-- NOT writing ${path.relative(path.join(__dirname, '..'), OUT_PATH)}`);
      payload = null; // suppress the write below; app.exit(1) at the bottom reflects the failure
    } else if (stats.enemyCount === 0) {
      console.log('note: no naturally spawned enemy near/around spawn on this floor (capturing anyway, per spec).');
    }
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
