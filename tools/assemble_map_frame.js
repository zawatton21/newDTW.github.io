#!/usr/bin/env node
/**
 * assemble_map_frame.js — combine a NeLisp-dumped sumi frame (from
 * nelisp_runtime/run-map-dump.el via gr-dump-sumi, one JSON array line plus a
 * "SUMI-DUMP-OK ..." marker) with the buffer-registration preamble the native
 * sumi renderer (sumi-gtk4-native / cairo-elisp sprite-bridge) needs before it
 * can paint any pixels:
 *
 *   1. gui-screen   records (buffer id -> canvas size)
 *   2. gui-load-image records (buffer id -> source PNG), for buffers that are
 *      backed by a loaded image rather than a blank/work canvas
 *   3. a gui-select-buffer 0 (make buffer 0 -- the 340x340 screen -- current)
 *   4. ...then the dumped frame's own records.
 *
 * Buffer sizes/images are looked up from sumi-title-stream.json at the repo
 * root (a real capture from the game's title screen, recorded by
 * tools/sumi_capture_stream.js) which is the authoritative id -> {size,image}
 * table for this game build. Buffers 0/4/7 always get a fixed gui-screen size
 * regardless of what the title-stream table says for them, per spec (they are
 * dynamically resized to 680x680 for certain overlay effects at runtime, and
 * the title-stream capture only observed their smaller title-screen size).
 * Any other buffer id the dumped frame's gui-draw-image-scaled/gui-select-
 * buffer records touch gets its size (and image, if any) from the table.
 *
 *   node tools/assemble_map_frame.js <dumped-frame.json> [out.json] [--title-stream path]
 *
 * `assemble(records, titleStreamPath)` is also exported so other tools (see
 * tools/live_feed_loop.js) can reuse the exact same preamble-building logic
 * on in-memory records instead of shelling out to this CLI per frame.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');

function usage() {
  console.error('Usage: node tools/assemble_map_frame.js <dumped-frame.json> [out.json] [--title-stream path]');
  process.exit(1);
}

/** Read the first JSON array line out of a dump file (ignores marker/log lines). */
function readFrameRecords(pathname) {
  const input = fs.readFileSync(pathname, 'utf8');
  const line = input.split(/\r?\n/).find((entry) => entry.trim().startsWith('['));
  if (!line) throw new Error(`No JSON array line found in ${pathname}`);
  const records = JSON.parse(line);
  if (!Array.isArray(records)) throw new Error(`Parsed JSON in ${pathname} is not an array.`);
  return records;
}

// Buffers that always need a fixed gui-screen size in the assembled frame,
// regardless of what the dumped body references or what the title-stream
// capture observed for them (they get resized at runtime for overlay effects
// -- see build/combined-frame.json from an earlier increment, which recorded
// buffers 4/7 at 680x680 during a full-screen confirm-dialog scene).
const ALWAYS_SCREENS = new Map([
  [0, [340, 340]],
  [4, [680, 680]],
  [7, [680, 680]],
]);

function loadTitleStreamTable(titleStreamPath) {
  const raw = JSON.parse(fs.readFileSync(titleStreamPath, 'utf8'));
  const screenSizes = new Map(); // buffer id -> [w, h]
  const loadImages = new Map(); // buffer id -> image file name
  for (const rec of raw) {
    if (!rec || typeof rec !== 'object' || !Array.isArray(rec.nums)) continue;
    if (rec.name === 'gui-screen' && rec.nums.length >= 3 && !screenSizes.has(rec.nums[0])) {
      screenSizes.set(rec.nums[0], [rec.nums[1], rec.nums[2]]);
    }
    if (rec.name === 'gui-load-image' && rec.nums.length >= 1 && typeof rec.text === 'string' && !loadImages.has(rec.nums[0])) {
      loadImages.set(rec.nums[0], rec.text);
    }
  }
  return { screenSizes, loadImages };
}

/** Every buffer id the dumped body reads from (blit source) or selects as a draw target. */
function referencedBuffers(records) {
  const ids = new Set();
  for (const rec of records) {
    if (!rec || typeof rec !== 'object' || !Array.isArray(rec.nums) || rec.nums.length < 1) continue;
    if (rec.name === 'gui-draw-image-scaled') ids.add(rec.nums[0]);
    if (rec.name === 'gui-select-buffer') ids.add(rec.nums[0]);
  }
  return ids;
}

/**
 * Read a PNG's real pixel size straight from its IHDR chunk (width/height are
 * big-endian uint32 at byte offsets 16/20 of any valid PNG). Used because
 * src/renderer/adapter/picload.ts resizes the destination canvas to the
 * loaded image's real dimensions -- but sumiBackend.ts's `ensure()` only
 * records a buffer's gui-screen size the *first* time that buffer id is seen,
 * so if the id was pre-registered at a smaller placeholder size (as happens
 * for buffer 5 / img_map.gif, first seen at 300x150 before the real
 * 1680x1160 tile sheet loads into it) the title-stream capture's gui-screen
 * entry is stale. Reading the PNG directly sidesteps that.
 */
function readPngSize(pngPath) {
  const fd = fs.openSync(pngPath, 'r');
  try {
    const header = Buffer.alloc(24);
    fs.readSync(fd, header, 0, 24, 0);
    if (header.readUInt32BE(0) !== 0x89504e47) return null; // not a PNG
    return [header.readUInt32BE(16), header.readUInt32BE(20)];
  } catch {
    return null;
  } finally {
    fs.closeSync(fd);
  }
}

function assemble(records, titleStreamPath) {
  const { screenSizes, loadImages } = loadTitleStreamTable(titleStreamPath);
  const assetsDir = path.join(repoRoot, 'assets', 'img');

  const ids = new Set(ALWAYS_SCREENS.keys());
  for (const id of referencedBuffers(records)) ids.add(id);
  const sortedIds = [...ids].sort((a, b) => a - b);

  const screenRecords = [];
  const loadRecords = [];
  const missingSizes = [];
  const buffersWithoutImage = [];

  for (const id of sortedIds) {
    const image = loadImages.get(id);
    let size = ALWAYS_SCREENS.get(id);
    if (!size && image) {
      const pngPath = path.join(assetsDir, `${image}.png`);
      if (fs.existsSync(pngPath)) size = readPngSize(pngPath);
    }
    if (!size) size = screenSizes.get(id);
    if (!size) {
      missingSizes.push(id);
    } else {
      screenRecords.push({ name: 'gui-screen', nums: [id, size[0], size[1]] });
    }
    if (image) {
      loadRecords.push({ name: 'gui-load-image', nums: [id], text: image });
    } else {
      buffersWithoutImage.push(id);
    }
  }

  const combined = [
    ...screenRecords,
    ...loadRecords,
    { name: 'gui-select-buffer', nums: [0] },
    ...records,
  ];
  return { combined, sortedIds, missingSizes, buffersWithoutImage };
}

function main() {
  const rawArgs = process.argv.slice(2);
  const positional = [];
  let titleStreamPath = path.join(repoRoot, 'sumi-title-stream.json');
  for (let i = 0; i < rawArgs.length; i++) {
    if (rawArgs[i] === '--title-stream') {
      titleStreamPath = path.resolve(rawArgs[++i]);
    } else {
      positional.push(rawArgs[i]);
    }
  }
  const [framePath, outArg] = positional;
  if (!framePath) usage();
  const outPath = outArg ? path.resolve(outArg) : path.join(repoRoot, 'build', 'combined-map-frame.json');

  const records = readFrameRecords(path.resolve(framePath));
  const { combined, sortedIds, missingSizes, buffersWithoutImage } = assemble(records, titleStreamPath);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(combined), 'utf8');

  const kinds = {};
  for (const rec of combined) kinds[rec.name] = (kinds[rec.name] || 0) + 1;

  console.log(`assembled ${combined.length} records (${records.length} from the dump) -> ${path.relative(repoRoot, outPath)}`);
  console.log(`buffers referenced: ${JSON.stringify(sortedIds)}`);
  console.log(`op histogram: ${JSON.stringify(kinds)}`);
  console.log('first 10 records:');
  for (const rec of combined.slice(0, 10)) console.log(`  ${JSON.stringify(rec)}`);
  if (missingSizes.length) {
    console.log(`WARNING: no known gui-screen size for buffers (native renderer may reject these): ${JSON.stringify(missingSizes)}`);
  }
  if (buffersWithoutImage.length) {
    console.log(`note: buffers with no gui-load-image (blank work/composite canvas, expected for e.g. 0/4/7/24/25/36): ${JSON.stringify(buffersWithoutImage)}`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { assemble, loadTitleStreamTable, referencedBuffers, readPngSize, ALWAYS_SCREENS };
