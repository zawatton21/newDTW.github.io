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

// ----- command-stream recording + live TCP streaming (native GTK4 bridge) ---
type Rec = { name: string; nums: number[]; text?: string };
const env: any = typeof process !== 'undefined' ? (process as any).env : undefined;
const recording: boolean = !!env && !!env.SUMI_RECORD;
const recorded: Rec[] = [];
const seenBuffers = new Set<number>();

// live mode: stream each frame to sumi-live over TCP (set SUMI_STREAM_TCP=port)
const liveTcpPort: number | null = env && env.SUMI_STREAM_TCP ? Number(env.SUMI_STREAM_TCP) || 9099 : null;
let sock: any = null;
let frameBuf: Rec[] = [];
let liveConnected = false;
let liveFlushes = 0;
let liveError = '';
if (liveTcpPort != null) {
  try {
    const req = (globalThis as any).require;
    const net = req ? req('net') : null;
    if (!net) {
      liveError = 'no require(net)';
    } else {
      sock = net.connect(liveTcpPort, '127.0.0.1');
      sock.on('connect', () => { liveConnected = true; });
      sock.on('error', (e: any) => { liveError = String(e && e.message || e); sock = null; });
      // flush on a timer so streaming doesn't depend on the game calling redraw
      setInterval(() => sumiFlushFrame(), 60);
    }
  } catch (e) {
    liveError = String((e as any) && (e as any).message || e);
    sock = null;
  }
  (globalThis as any).__SUMI_LIVE_STATUS__ = () => ({
    port: liveTcpPort, connected: liveConnected, hasSock: !!sock,
    flushes: liveFlushes, bufLen: frameBuf.length, error: liveError,
  });
}

function rec(name: string, nums: number[], text?: string): void {
  if (!recording && !sock) return;
  const r: Rec = text != null ? { name, nums, text } : { name, nums };
  if (recording) recorded.push(r);
  if (sock) frameBuf.push(r);
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
  if (!recording && !sock) return;
  seenBuffers.add(id);
  rec('gui-load-image', [id], imgName);
}

/** Record a frame boundary (the game's redraw/present). */
export function sumiRecordPresent(): void {
  rec('gui-present', []);
}

/** Flush the buffered frame to the live native renderer (called on redraw). */
export function sumiFlushFrame(): void {
  if (sock && frameBuf.length) {
    try {
      sock.write(JSON.stringify(frameBuf) + '\n');
      liveFlushes++;
    } catch (_e) {
      /* drop frame on backpressure/error */
    }
    frameBuf = [];
  }
}

// expose the recorded stream to a capture harness
if (recording) {
  (globalThis as any).__SUMI_STREAM_DUMP__ = (): Rec[] => recorded;
}
