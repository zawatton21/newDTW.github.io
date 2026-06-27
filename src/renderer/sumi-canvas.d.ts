// Ambient types for the external sumi GUI library (sumi-canvas), which is plain
// ESM JavaScript. tsc resolves the import through this declaration; webpack
// resolves the actual module via a `resolve.alias` to the local sumi checkout
// (see webpack.config.cjs). When sumi is published to npm this file can be
// dropped in favour of the package's own types.
declare module 'sumi-canvas' {
  export type Command = unknown;

  export function parse(name: string, nums?: number[], text?: string | null): Command | null;

  export function parseFrame(
    entries: Array<{ name: string; nums?: number[]; text?: string | null }>,
  ): Command[];

  export class CanvasBackend {
    constructor(createCanvas: (w: number, h: number) => HTMLCanvasElement);
    buffers: Map<number, { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D }>;
    current: number;
    apply(cmd: Command): void;
    applyAll(frame: Command[]): void;
    surface(id: number): HTMLCanvasElement | undefined;
  }
}
