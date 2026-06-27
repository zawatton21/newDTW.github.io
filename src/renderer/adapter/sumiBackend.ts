// Bridge to the external sumi GUI library (sumi-canvas).
//
// The game's draw adapters delegate their pixel operations to sumi. sumi *shares
// the game's existing canvases*: each buffer is registered into sumi's buffer map
// so sumi draws straight onto the same `Gvar.canvases[id]` the game displays.
//
// It also optionally *records* the command stream (set SUMI_RECORD=1 in an
// Electron run): every command — buffer creation, image load, draw, present — is
// captured so it can be replayed natively by sumi-gtk4-native (the model-A bridge
// that renders the webview game's frames on GTK4/Cairo).
import { CanvasBackend } from 'sumi-canvas';
import * as Sumi from 'sumi-canvas';
import { Gvar } from '../variable';

const backend = new CanvasBackend((w: number, h: number) => {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
});

// ----- command-stream recording (native GTK4 bridge) ------------------------
type Rec = { name: string; nums: number[]; text?: string };
const recording: boolean =
  typeof process !== 'undefined' && !!(process as any).env && !!(process as any).env.SUMI_RECORD;
const recorded: Rec[] = [];
const seenBuffers = new Set<number>();

function rec(name: string, nums: number[], text?: string): void {
  if (recording) recorded.push(text != null ? { name, nums, text } : { name, nums });
}

// register a buffer with sumi the first time it's seen, recording a screen op
function ensure(id: number, recordScreen: boolean): void {
  if (!backend.buffers.has(id) && Gvar.canvases[id] && Gvar.contexts[id]) {
    backend.buffers.set(id, { canvas: Gvar.canvases[id], ctx: Gvar.contexts[id] });
  }
  if (recordScreen && !seenBuffers.has(id) && Gvar.canvases[id]) {
    seenBuffers.add(id);
    rec('gui-screen', [id, Gvar.canvases[id].width, Gvar.canvases[id].height]);
  }
}

/** Make `id` sumi's current draw target — the mirror of the game's `gsel`. */
export function sumiSelectBuffer(id: number): void {
  backend.current = id;
  ensure(id, true);
  rec('gui-select-buffer', [id]);
}

/** Register a blit SOURCE buffer without changing the current draw target. */
export function sumiEnsureBuffer(id: number): void {
  ensure(id, true);
}

/** Apply one sumi draw command through the external library, and record it. */
export function sumiApply(name: string, nums: number[], text: string | null = null): void {
  const cmd = Sumi.parse(name, nums, text);
  if (cmd) backend.apply(cmd);
  rec(name, nums, text ?? undefined);
}

/** Record that `imgName`.png was loaded into buffer `id` (for native replay). */
export function sumiRecordLoadImage(id: number, imgName: string): void {
  if (!recording) return;
  seenBuffers.add(id);
  rec('gui-load-image', [id], imgName);
}

/** Record a frame boundary (the game's redraw/present). */
export function sumiRecordPresent(): void {
  rec('gui-present', []);
}

// expose the recorded stream to a capture harness
if (recording) {
  (globalThis as any).__SUMI_STREAM_DUMP__ = (): Rec[] => recorded;
}
