// Bridge to the external sumi GUI library (sumi-canvas).
//
// The game's draw adapters delegate their pixel operations to sumi instead of
// carrying their own Canvas-2D code. sumi *shares the game's existing canvases*:
// each game buffer is registered into sumi's buffer map, so sumi draws straight
// onto the same `Gvar.canvases[id]` the game displays — no extra compositing.
//
// Migration status: Stage 1 routes the pure primitives (set-color, draw-line,
// draw-point, fill-rect). The game-specific adapters (mes/font/gcopy/gzoom/gmode
// /picload …) still live game-side because they carry HSP/game semantics
// (i18n, cursor advance, special buffers, alpha modes) that the general sumi
// vocabulary intentionally does not. They move here as the migration to sumi
// completes (the eventual goal: the game draws entirely through sumi).
import { CanvasBackend } from 'sumi-canvas';
import * as Sumi from 'sumi-canvas';
import { Gvar } from '../variable';

// createCanvas is only used if sumi creates a buffer itself; we register the
// game's canvases directly (see sumiSelectBuffer), so this is just a safe default.
const backend = new CanvasBackend((w: number, h: number) => {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
});

/**
 * Make `id` sumi's current draw target — the mirror of the game's `gsel`.
 * Lazily registers the buffer from `Gvar` so sumi shares the game's canvas.
 */
export function sumiSelectBuffer(id: number): void {
  backend.current = id;
  if (!backend.buffers.has(id) && Gvar.canvases[id] && Gvar.contexts[id]) {
    backend.buffers.set(id, { canvas: Gvar.canvases[id], ctx: Gvar.contexts[id] });
  }
}

/**
 * Ensure a buffer is registered with sumi from `Gvar` *without* changing the
 * current draw target — used to register a blit SOURCE buffer before drawing.
 */
export function sumiEnsureBuffer(id: number): void {
  if (!backend.buffers.has(id) && Gvar.canvases[id] && Gvar.contexts[id]) {
    backend.buffers.set(id, { canvas: Gvar.canvases[id], ctx: Gvar.contexts[id] });
  }
}

/**
 * Apply one sumi draw command (e.g. `'gui-fill-rect'`) through the external
 * library. No-ops safely if the current buffer isn't registered yet.
 */
export function sumiApply(name: string, nums: number[], text: string | null = null): void {
  const cmd = Sumi.parse(name, nums, text);
  if (cmd) backend.apply(cmd);
}
