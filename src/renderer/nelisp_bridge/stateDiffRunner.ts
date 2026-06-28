import { Gvar } from '../variable';
import * as Adap from '../adapter/index';
import * as Func from '../func/index';
import * as Menu from '../menu/MenuController';
import * as Configs from '../menu/menuConfigs';
import * as Items from '../items/registry';
import * as I18n from '../i18n';
import * as Class from '../classes';
import * as Music from '../music/index';

export type StateSlot = number | string;
export type StateDiff = [StateSlot, unknown];
export type StateDiffEvent = [string, ...unknown[]];
export type StateDiffEntry = StateDiff | StateDiffEvent | StateDiffEntry[] | null | undefined;

export interface StateDiffRunnerHost {
    globals?: Record<string, unknown>;
    onControl?: (kind: string, args: unknown[]) => unknown | Promise<unknown>;
}

// Thrown by a `nelisp-break` entry to unwind the nearest enclosing `nelisp-loop`.
class NelispBreak extends Error {}

const EVENT_NAMES = new Set([
    'catch',
    'core-call',
    'array-is-array',
    'array-create',
    'array-from',
    'base64-to-bytes',
    'buffer-from',
    'bytes-to-base64',
    'bitwise-and',
    'bitwise-or',
    'bitwise-xor',
    'charactor-info-dim',
    'charactor-info-load',
    'canvas-clear-rect',
    'canvas-get-context',
    'canvas-get-image-data',
    'collection-get',
    'collection-has',
    'calc-sell-price',
    'control',
    'control-stop',
    'nelisp-loop',
    'nelisp-if',
    'nelisp-break',
    'nelisp-lambda',
    'nelisp-eq',
    'nelisp-lt',
    'nelisp-gt',
    'nelisp-le',
    'nelisp-ge',
    'nelisp-not',
    'window-add-event-listener',
    'method-send',
    'date-now',
    'date-get-date',
    'date-get-full-year',
    'date-get-month',
    'dtw-create-buffer',
    'dtw-debug-print',
    'dtw-dir-info',
    'dtw-dim',
    'dtw-draw-line',
    'dtw-draw-image',
    'dtw-draw-point',
    'dtw-draw-text',
    'dtw-fill-rect',
    'dtw-file-exists',
    'dtw-get-info',
    'dtw-get-time',
    'dtw-ime-get-context',
    'dtw-ime-get-open-status',
    'dtw-is-changed',
    'dtw-limit',
    'dtw-load-file',
    'dtw-load-image',
    'dtw-load-sound-memory',
    'dtw-note-get',
    'dtw-note-info',
    'dtw-parse-int',
    'dtw-peek-char',
    'dtw-play-sound',
    'dtw-random',
    'dtw-read-key-state',
    'dtw-read-file',
    'dtw-read-stick',
    'dtw-tcp-put',
    'dtw-undefined-adapter',
    'dtw-object-size',
    'dtw-draw-image-scaled',
    'dtw-combo-box',
    'dtw-button',
    'dtw-note-select',
    'dtw-object-select',
    'dtw-resize-window',
    'dtw-clear-objects',
    'dtw-dialog',
    'dtw-on-exit',
    'dtw-set-title',
    'dtw-change-directory',
    'dtw-await',
    'dtw-note-add',
    'dtw-on-key',
    'dtw-get-string',
    'dtw-network-close',
    'dtw-reset-input',
    'dtw-screen',
    'dtw-send-message',
    'dtw-end',
    'dtw-note-load',
    'dtw-set-window-long',
    'dtw-change-display',
    'dtw-input',
    'dtw-object-parameter',
    'dtw-poke',
    'dtw-reset-key',
    'dtw-set-color-index',
    'dtw-delete-file',
    'dtw-set-sound-volume',
    'dtw-note-save',
    'dtw-tcp-get-line',
    'dtw-clear-screen',
    'dtw-background-screen',
    'dtw-check-box',
    'dtw-check-joystick',
    'dtw-dir-list',
    'dtw-music-init',
    'dtw-music-load-memory',
    'dtw-music-play',
    'dtw-music-stop',
    'dtw-set-master-sound-volume',
    'dtw-draw-image-rotated',
    'dtw-ime-release-context',
    'dtw-list-box',
    'dtw-network-fail',
    'dtw-note-delete',
    'dtw-on-command-gosub',
    'dtw-tcp-count',
    'dtw-get-master-sound-volume',
    'dtw-get-window-long',
    'dtw-hmm-init',
    'dtw-ime-set-open-status',
    'dtw-message-box',
    'dtw-make-directory',
    'dtw-object-mode',
    'dtw-randomize',
    'dtw-set-window-position',
    'dtw-show-window',
    'dtw-tcp-is-connected',
    'dtw-tcp-open',
    'dtw-redraw',
    'dtw-save-file',
    'dtw-select-buffer',
    'dtw-set-blend-mode',
    'dtw-set-color',
    'dtw-set-font',
    'dtw-set-palette',
    'dtw-set-position',
    'dtw-string-dim',
    'dtw-string-mid',
    'dtw-string-search',
    'dtw-object-info',
    'dtw-wait',
    'dynamic-call',
    'dom-create-element',
    'dom-get-element-by-id',
    'dom-get-elements-by-tag-name',
    'effect-call',
    'alert-call',
    'base64-decode-string',
    'base64-encode-string',
    'fetch-call',
    'game-animate-message',
    'game-auto-draw',
    'game-draw-frame',
    'game-draw-sparkle',
    'game-set-message',
    'game-wait-key-release',
    'format-item-name',
    'func-ime-set',
    'func-make-palette',
    'fs-exists-helper',
    'fs-mkdir-async',
    'fs-read-file-async',
    'fs-read-file-sync',
    'fs-stat-async',
    'fs-write-file-async',
    'fs-ls-available',
    'fs-ls-revive',
    'fs-is-dir-path',
    'index-ref',
    'index-set',
    'in',
    'instanceof',
    'i18n-format',
    'i18n-get-language',
    'i18n-load-language',
    'i18n-set-language',
    'i18n-translate',
    'item-info-dim',
    'item-info-load',
    'item-apply',
    'item-get-def',
    'item-is-migrated',
    'item-pick',
    'item-post-process',
    'json-parse',
    'json-stringify',
    'logical-and',
    'logical-or',
    'math-abs',
    'math-add',
    'math-floor',
    'math-max',
    'math-min',
    'math-mul',
    'math-random',
    'math-round',
    'math-trunc',
    'method-join',
    'method-map',
    'method-contains',
    'method-enabled',
    'method-every',
    'method-find',
    'method-apply',
    'method-bind',
    'method-is-destroyed',
    'method-save',
    'method-pop',
    'method-slice',
    'method-subarray',
    'music-call',
    'menu-render',
    'menu-run',
    'menu-item-enter',
    'menu-current-mode',
    'menu-find-category',
    'menu-load-cursor',
    'new',
    'nullish',
    'object-assign',
    'path-basename',
    'path-dirname',
    'path-extname',
    'path-join',
    'path-resolve',
    'process-cwd',
    'promise-all',
    'promise-catch',
    'promise-reject',
    'promise-resolve',
    'promise-then',
    'module-require',
    'prop-ref',
    'prop-set',
    'reflect-construct',
    'response-json',
    'storage-get-item',
    'storage-key',
    'collection-keys',
    'input-buffer-full',
    'local-helper-call',
    'console-log',
    'console-error',
    'console-warn',
    'method-send',
    'window-add-event-listener',
    'dom-append-child',
    'event-prevent-default',
    'location-reload',
    'method-for-each',
    'collection-set',
    'collection-push',
    'collection-splice',
    'function-call',
    'node-callback',
    'ipc-once',
    'storage-clear',
    'storage-set-item',
    'object-define-property',
    'window-close',
    'window-move-to',
    'window-resize-to',
    'fs-unlink-sync',
    'fs-watch',
    'callback-before',
    'callback-next',
    'config-on-confirm',
    'config-save-value',
    'canvas-arc',
    'canvas-fill',
    'canvas-fill-rect',
    'canvas-fill-text',
    'canvas-line-to',
    'canvas-move-to',
    'canvas-put-image-data',
    'canvas-rotate',
    'canvas-stroke',
    'canvas-draw-image',
    'canvas-begin-path',
    'canvas-translate',
    'canvas-set-transform',
    'canvas-save',
    'canvas-restore',
    'media-play',
    'media-pause',
    'media-load',
    'msgpack-decode',
    'msgpack-encode',
    'typeof',
    'to-string',
    'timer-set-timeout',
    'string-char-code-at',
    'string-concat',
    'state-slot-ref',
    'state-string-concat',
    'string-includes',
    'string-last-index-of',
    'string-replace',
    'string-split',
    'string-starts-with',
    'value-call',
]);

const MODULES: Record<string, unknown> = {
    Adap,
    Configs,
    Class,
    Func,
    Gvar,
    I18n,
    Items,
    Menu,
    Music,
    Array,
    ArrayBuffer,
    Date,
    Error,
    JSON,
    Map,
    Math,
    Object,
    Promise,
    String,
    Uint8Array,
    console,
};

function hostModule<T>(host: StateDiffRunnerHost, name: string, fallback: T): T {
    return (host.globals && name in host.globals ? host.globals[name] : fallback) as T;
}

export async function runStateDiffResult(result: StateDiffEntry, host: StateDiffRunnerHost = {}): Promise<unknown[]> {
    const outputs: unknown[] = [];
    await visitEntry(result, host, outputs);
    return outputs;
}

export function applyStateDiff(diff: StateDiff): void {
    writeStateSlot(diff[0], diff[1]);
}

export async function executeStateDiffEvent(event: StateDiffEvent, host: StateDiffRunnerHost = {}): Promise<unknown> {
    const [kind, ...args] = event;
    if (kind === 'promise-then') {
        const target = Array.isArray(args[0])
            ? await evalPromiseTarget(args[0], host)
            : args[0];
        const onFulfilled = await evalStateDiffValue(args[1], host);
        const onRejected = await evalStateDiffValue(args[2], host);
        return (target as Promise<unknown> | undefined)?.then?.(onFulfilled as any, onRejected as any);
    }
    if (kind === 'promise-catch') {
        const target = Array.isArray(args[0])
            ? await evalPromiseTarget(args[0], host)
            : args[0];
        const onRejected = await evalStateDiffValue(args[1], host);
        return (target as Promise<unknown> | undefined)?.catch?.(onRejected as any);
    }
    // control-flow ops keep their bodies/branches UNEVALUATED until needed
    if (kind === 'nelisp-break') {
        throw new NelispBreak();
    }
    if (kind === 'nelisp-loop') {
        const body = args[0] as StateDiffEntry;
        for (let i = 0; i < 5_000_000; i++) {
            try {
                await visitEntry(body, host, []);
            } catch (error) {
                if (error instanceof NelispBreak) return undefined;
                throw error;
            }
        }
        return undefined;
    }
    if (kind === 'nelisp-if') {
        const cond = await evalStateDiffValue(args[0], host);
        if (cond) await visitEntry(args[1] as StateDiffEntry, host, []);
        else if (args[2] != null) await visitEntry(args[2] as StateDiffEntry, host, []);
        return undefined;
    }
    if (kind === 'nelisp-lambda') {
        const body = args[0] as StateDiffEntry;
        return () => { void visitEntry(body, host, []); };
    }
    const values = await Promise.all(args.map((arg) => evalStateDiffValue(arg, host)));
    (globalThis as any).__NELISP_STATE_DIFF_EVENT_TRACE__?.({ kind, args: values });
    switch (kind) {
        case 'value-call':
            return callByName(String(args[0]), values.slice(1), host);
        case 'effect-call':
            await callByName(String(args[0]), values.slice(1), host);
            return undefined;
        case 'core-call':
            return typeof values[0] === 'string'
                ? callByName(String(values[0]), values.slice(1), host)
                : callCoreByName(values[0], String(values[1]), values.slice(2), host);
        case 'dynamic-call':
            return callDynamic(values[0], values.slice(1), host);
        case 'function-call':
        case 'node-callback':
        case 'promise-resolve':
        case 'promise-reject':
            return callDynamic(values[0], values.slice(1), host);
        case 'timer-set-timeout':
            return globalThis.setTimeout(values[0] as TimerHandler, Number(values[1] ?? 0));
        case 'module-require': {
            const requireFn = host.globals?.require ?? (globalThis as any).require;
            return typeof requireFn === 'function' ? requireFn(String(values[0])) : undefined;
        }
        case 'control-stop':
            return typeof host.globals?.stop === 'function'
                ? (host.globals.stop as () => unknown)()
                : undefined;
        case 'fetch-call':
            return globalThis.fetch?.(String(values[0]));
        case 'alert-call':
            return globalThis.alert?.(String(values[0]));
        case 'base64-decode-string':
            return typeof globalThis.atob === 'function'
                ? globalThis.atob(String(values[0]))
                : Buffer.from(String(values[0]), 'base64').toString('binary');
        case 'base64-encode-string':
            return typeof globalThis.btoa === 'function'
                ? globalThis.btoa(String(values[0]))
                : Buffer.from(String(values[0]), 'binary').toString('base64');
        case 'dtw-draw-image':
            return hostModule<typeof Adap>(host, 'Adap', Adap).gcopy(...(values as Parameters<typeof Adap.gcopy>));
        case 'dtw-select-buffer':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).gsel?.(...values);
        case 'dtw-set-palette':
            return Adap.palette(...(values as Parameters<typeof Adap.palette>));
        case 'dtw-play-sound':
            return hostModule<typeof Adap>(host, 'Adap', Adap).DSPLAY(...(values as Parameters<typeof Adap.DSPLAY>));
        case 'dtw-create-buffer':
            return Adap.buffer(...(values as Parameters<typeof Adap.buffer>));
        case 'dtw-load-image':
            return Adap.picload(...(values as Parameters<typeof Adap.picload>));
        case 'dtw-set-position':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).pos?.(...values);
        case 'dtw-set-color':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).color?.(...values);
        case 'dtw-set-font':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).font?.(...values);
        case 'dtw-draw-text':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).mes?.(...values);
        case 'dtw-draw-line':
            return Adap.line(...(values as Parameters<typeof Adap.line>));
        case 'dtw-fill-rect':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).boxf?.(...values);
        case 'dtw-draw-point':
            return Adap.pset(...(values as Parameters<typeof Adap.pset>));
        case 'dtw-set-blend-mode':
            return hostModule<typeof Adap>(host, 'Adap', Adap).gmode(...(values as Parameters<typeof Adap.gmode>));
        case 'dtw-random':
            return hostModule<typeof Adap>(host, 'Adap', Adap).rnd(...(values as Parameters<typeof Adap.rnd>));
        case 'dtw-parse-int':
            return Adap.int(...(values as Parameters<typeof Adap.int>));
        case 'dtw-dim':
            return hostModule<typeof Adap>(host, 'Adap', Adap).dim(...(values as Parameters<typeof Adap.dim>));
        case 'dtw-string-dim':
            return hostModule<typeof Adap>(host, 'Adap', Adap).sdim(...(values as Parameters<typeof Adap.sdim>));
        case 'dtw-peek-char':
            return Adap.peek(...(values as Parameters<typeof Adap.peek>));
        case 'dtw-get-info':
            return Adap.ginfo(...(values as Parameters<typeof Adap.ginfo>));
        case 'dtw-read-key-state':
            return hostModule<typeof Adap>(host, 'Adap', Adap).getkey(...(values as Parameters<typeof Adap.getkey>));
        case 'dtw-ime-get-context':
            return (Adap as any).ImmGetContext?.(...values);
        case 'dtw-ime-get-open-status':
            return (Adap as any).ImmGetOpenStatus?.(...values);
        case 'dtw-object-info':
            return (Adap as any).objinfo?.(...values);
        case 'dtw-read-file':
            return (Adap as any).readFile?.(...values);
        case 'dtw-read-stick':
            return (Adap as any).stick?.(...values);
        case 'dtw-tcp-put':
            return (Adap as any).tcpput?.(...values);
        case 'dtw-undefined-adapter':
            return (Adap as any).undef_func?.(...values);
        case 'dtw-object-size':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).objsize?.(...values);
        case 'dtw-draw-image-scaled':
            return (Adap as any).gzoom?.(...values);
        case 'dtw-combo-box':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).combox?.(...values);
        case 'dtw-button':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).button?.(...values);
        case 'dtw-note-select':
            return (Adap as any).notesel?.(...values);
        case 'dtw-object-select':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).objsel?.(...values);
        case 'dtw-resize-window':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).width?.(...values);
        case 'dtw-clear-objects':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).clrobj?.(...values);
        case 'dtw-dialog':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).dialog?.(...values);
        case 'dtw-on-exit':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).onexit?.(...values);
        case 'dtw-set-title':
            return (Adap as any).title?.(...values);
        case 'dtw-change-directory':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).chdir?.(...values);
        case 'dtw-await':
            return (Adap as any).await_?.(...values);
        case 'dtw-note-add':
            return (Adap as any).noteadd?.(...values);
        case 'dtw-on-key':
            return (Adap as any).onkey?.(...values);
        case 'dtw-get-string':
            return (Adap as any).getstr?.(...values);
        case 'dtw-network-close':
            return (Adap as any).netclose?.(...values);
        case 'dtw-reset-input':
            return (Adap as any).reset_input?.(...values);
        case 'dtw-screen':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).screen_?.(...values);
        case 'dtw-send-message':
            return (Adap as any).sendmsg?.(...values);
        case 'dtw-end':
            return (Adap as any).end?.(...values);
        case 'dtw-note-load':
            return (Adap as any).noteload?.(...values);
        case 'dtw-set-window-long':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).SetWindowLongA?.(...values);
        case 'dtw-change-display':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).chgdisp?.(...values);
        case 'dtw-input':
            return (Adap as any).input?.(...values);
        case 'dtw-object-parameter':
            return (Adap as any).objprm?.(...values);
        case 'dtw-poke':
            return (Adap as any).poke?.(...values);
        case 'dtw-reset-key':
            return (Adap as any).ResetKey?.(...values);
        case 'dtw-set-color-index':
            return (Adap as any).color1?.(...values);
        case 'dtw-delete-file':
            return (Adap as any).delete_?.(...values);
        case 'dtw-set-sound-volume':
            return (Adap as any).DSSETVOLUME?.(...values);
        case 'dtw-note-save':
            return (Adap as any).notesave?.(...values);
        case 'dtw-tcp-get-line':
            return (Adap as any).tcpgetl?.(...values);
        case 'dtw-clear-screen':
            return (Adap as any).cls?.(...values);
        case 'dtw-background-screen':
            return (Adap as any).bgscr?.(...values);
        case 'dtw-check-box':
            return (Adap as any).chkbox?.(...values);
        case 'dtw-check-joystick':
            return (Adap as any).ck_joystick?.(...values);
        case 'dtw-dir-list':
            return (Adap as any).dirlist?.(...values);
        case 'dtw-music-init':
            return (Adap as any).DMINIT?.(...values);
        case 'dtw-music-load-memory':
            return (Adap as any).DMLOADMEMORY?.(...values);
        case 'dtw-music-play':
            return (Adap as any).DMPLAY?.(...values);
        case 'dtw-music-stop':
            return (Adap as any).DMSTOP?.(...values);
        case 'dtw-set-master-sound-volume':
            return (Adap as any).DSSETMASTERVOLUME?.(...values);
        case 'dtw-draw-image-rotated':
            return (Adap as any).grotate?.(...values);
        case 'dtw-ime-release-context':
            return (Adap as any).ImmReleaseContext?.(...values);
        case 'dtw-list-box':
            return (Adap as any).listbox?.(...values);
        case 'dtw-network-fail':
            return (Adap as any).netfail?.(...values);
        case 'dtw-note-delete':
            return (Adap as any).notedel?.(...values);
        case 'dtw-on-command-gosub':
            return (Adap as any).oncmd_gosub?.(...values);
        case 'dtw-tcp-count':
            return (Adap as any).tcpcount?.(...values);
        case 'dtw-get-master-sound-volume':
            return (Adap as any).DSGETMASTERVOLUME?.(...values);
        case 'dtw-get-window-long':
            return (Adap as any).GetWindowLongA?.(...values);
        case 'dtw-hmm-init':
            return (Adap as any).HMMINIT?.(...values);
        case 'dtw-ime-set-open-status':
            return (Adap as any).ImmSetOpenStatus?.(...values);
        case 'dtw-message-box':
            return (Adap as any).mesbox?.(...values);
        case 'dtw-make-directory':
            return (Adap as any).mkdir?.(...values);
        case 'dtw-object-mode':
            return (Adap as any).objmode?.(...values);
        case 'dtw-randomize':
            return (Adap as any).randomize?.(...values);
        case 'dtw-set-window-position':
            return (Adap as any).SetWindowPos?.(...values);
        case 'dtw-show-window':
            return (hostModule<typeof Adap>(host, 'Adap', Adap) as any).ShowWindow?.(...values);
        case 'dtw-tcp-is-connected':
            return (Adap as any).tcpiscon?.(...values);
        case 'dtw-tcp-open':
            return (Adap as any).tcpopen?.(...values);
        case 'dtw-get-time':
            return Adap.gettime(...(values as Parameters<typeof Adap.gettime>));
        case 'dtw-debug-print':
            return Adap.dbgprt(...(values as Parameters<typeof Adap.dbgprt>));
        case 'func-ime-set':
            return Func.imeset(...(values as Parameters<typeof Func.imeset>));
        case 'func-make-palette':
            return Func.makepal(...(values as Parameters<typeof Func.makepal>));
        case 'dtw-load-file':
            return Adap.bload(...(values as Parameters<typeof Adap.bload>));
        case 'dtw-save-file':
            return hostModule<typeof Adap>(host, 'Adap', Adap).bsave(...(values as Parameters<typeof Adap.bsave>));
        case 'dtw-file-exists':
            return Adap.exist(...(values as Parameters<typeof Adap.exist>));
        case 'dtw-string-search':
            return Adap.instr(...(values as Parameters<typeof Adap.instr>));
        case 'dtw-string-mid':
            return Adap.strmid(...(values as Parameters<typeof Adap.strmid>));
        case 'dtw-note-info':
            return Adap.noteinfo(...(values as Parameters<typeof Adap.noteinfo>));
        case 'dtw-limit':
            return Adap.limit(...(values as Parameters<typeof Adap.limit>));
        case 'dtw-dir-info':
            return Adap.dirinfo(...(values as Parameters<typeof Adap.dirinfo>));
        case 'dtw-is-changed':
            return Adap.is_changed(...(values as Parameters<typeof Adap.is_changed>));
        case 'dtw-wait':
            return hostModule<typeof Adap>(host, 'Adap', Adap).wait(...(values as Parameters<typeof Adap.wait>));
        case 'dtw-redraw':
            return hostModule<typeof Adap>(host, 'Adap', Adap).redraw(...(values as Parameters<typeof Adap.redraw>));
        case 'dtw-load-sound-memory':
            return Adap.DSLOADMEMORY(...(values as Parameters<typeof Adap.DSLOADMEMORY>));
        case 'dtw-note-get':
            return Adap.noteget(...(values as Parameters<typeof Adap.noteget>));
        case 'game-set-message':
            return hostModule<typeof Func>(host, 'Func', Func).setMessage(...(values as Parameters<typeof Func.setMessage>));
        case 'game-auto-draw':
            return hostModule<typeof Func>(host, 'Func', Func).AutoDraw(...(values as Parameters<typeof Func.AutoDraw>));
        case 'game-animate-message':
            return Func.func050(...(values as Parameters<typeof Func.func050>));
        case 'game-wait-key-release':
            return Func.func051(...(values as Parameters<typeof Func.func051>));
        case 'game-draw-frame':
            return hostModule<typeof Func>(host, 'Func', Func).func337(...(values as Parameters<typeof Func.func337>));
        case 'game-draw-sparkle':
            return hostModule<typeof Func>(host, 'Func', Func).func354(...(values as Parameters<typeof Func.func354>));
        case 'music-call':
            return callByName(String(values[0]), values.slice(1), host);
        case 'prop-ref':
            return readPath(String(values[0]), host);
        case 'prop-set':
            writePath(String(values[0]), values[1], host);
            return values[1];
        case 'index-ref':
            return (values[0] as any)?.[values[1] as any];
        case 'index-set':
            writeIndex(values[0], values[1], values[2]);
            return values[2];
        case 'in':
            return toPropertyKey(values[0]) in Object(values[1]);
        case 'i18n-translate':
            return I18n.t(...(values as Parameters<typeof I18n.t>));
        case 'i18n-format':
            return I18n.tf(...(values as Parameters<typeof I18n.tf>));
        case 'i18n-get-language':
            return I18n.getLanguage();
        case 'i18n-load-language':
            return I18n.loadLanguage(...(values as Parameters<typeof I18n.loadLanguage>));
        case 'i18n-set-language':
            return I18n.setLanguage(...(values as Parameters<typeof I18n.setLanguage>));
        case 'fs-ls-available':
            return typeof globalThis.localStorage !== 'undefined';
        case 'bytes-to-base64':
            return Buffer.from(values[0] as any).toString('base64');
        case 'base64-to-bytes':
            return new Uint8Array(Buffer.from(String(values[0]), 'base64'));
        case 'fs-ls-revive':
            return typeof host.globals?._lsRevive === 'function'
                ? (host.globals._lsRevive as (payload: unknown) => unknown)(values[0])
                : values[0];
        case 'fs-exists-helper': {
            const existsFn = host.globals?.exists;
            return typeof existsFn === 'function' ? existsFn(values[0]) : false;
        }
        case 'fs-read-file-sync': {
            const fsMod = host.globals?.fs as { readFileSync?: (...args: unknown[]) => unknown } | undefined;
            return fsMod?.readFileSync?.(...values) ?? '';
        }
        case 'fs-mkdir-async':
            return callByName('mkdir1', values, host);
        case 'fs-read-file-async':
            return callByName('readFile', values, host);
        case 'fs-stat-async':
            return callByName('stat1', values, host);
        case 'fs-write-file-async':
            return callByName('writeFile', values, host);
        case 'input-buffer-full':
            return typeof host.globals?.inputBufferFull === 'function'
                ? (host.globals.inputBufferFull as () => unknown)()
                : false;
        case 'local-helper-call':
            return callByName(String(values[0]), values.slice(1), host);
        case 'format-item-name': {
            let name = String(values[0]);
            if (Number(values[1]) > 0) name += `+${Number(values[1])}`;
            if (Number(values[2]) > 1) name += ` ★${Number(values[2])}`;
            return name;
        }
        case 'calc-sell-price': {
            const abilities = Number(values[2]);
            let price = (Number(values[0]) + Number(values[1])) * 50;
            if (abilities > 1) price += abilities * 500;
            return price;
        }
        case 'fs-is-dir-path': {
            const memFs = host.globals?._memFs;
            const norm = String(values[0]).replace(/[\\/]+$/, '');
            if (memFs && typeof (memFs as Map<string, unknown>).keys === 'function') {
                for (const key of (memFs as Map<string, unknown>).keys()) {
                    if (key === norm || key.startsWith(`${norm}/`) || key.startsWith(`${norm}\\`)) return true;
                }
            }
            return false;
        }
        case 'math-floor':
            return Math.floor(...(values as Parameters<typeof Math.floor>));
        case 'math-abs':
            return Math.abs(...(values as Parameters<typeof Math.abs>));
        case 'math-add':
            return values.reduce((sum, value) => Number(sum) + Number(value), 0);
        case 'math-max':
            return Math.max(...(values as Parameters<typeof Math.max>));
        case 'math-min':
            return Math.min(...(values as Parameters<typeof Math.min>));
        case 'math-mul':
            return values.reduce((product, value) => Number(product) * Number(value), 1);
        case 'math-div':
            return Number(values[0]) / Number(values[1]);
        case 'math-mod':
            return Number(values[0]) % Number(values[1]);
        case 'math-random':
            return Math.random();
        case 'math-round':
            return Math.round(...(values as Parameters<typeof Math.round>));
        case 'math-trunc':
            return Math.trunc(...(values as Parameters<typeof Math.trunc>));
        case 'date-now':
            return Date.now();
        case 'date-get-full-year':
            return (values[0] as Date).getFullYear();
        case 'date-get-month':
            return (values[0] as Date).getMonth();
        case 'date-get-date':
            return (values[0] as Date).getDate();
        case 'json-parse':
            return JSON.parse(String(values[0]));
        case 'json-stringify':
            return JSON.stringify(values[0]);
        case 'object-assign':
            return Object.assign(values[0], values[1], values[2], values[3]);
        case 'array-is-array':
            return Array.isArray(values[0]);
        case 'array-create':
            return Array.from(values);
        case 'array-from':
            return Array.from(values[0] as Iterable<unknown> | ArrayLike<unknown>);
        case 'buffer-from':
            return Buffer.from(values[0] as any);
        case 'dom-get-element-by-id':
            return (host.globals?.document as Document | undefined)?.getElementById(String(values[0]))
                ?? globalThis.document?.getElementById(String(values[0]));
        case 'dom-create-element':
            return ((host.globals?.document as Document | undefined) ?? globalThis.document)?.createElement(String(values[0]));
        case 'dom-get-elements-by-tag-name':
            return ((host.globals?.document as Document | undefined) ?? globalThis.document)?.getElementsByTagName(String(values[0]));
        case 'storage-get-item':
            return globalThis.localStorage?.getItem(String(values[0]));
        case 'storage-key':
            return globalThis.localStorage?.key(Number(values[0]));
        case 'msgpack-decode':
            return (host.globals?.msgpack as any)?.decode?.(values[0]) ?? values[0];
        case 'msgpack-encode':
            return (host.globals?.msgpack as any)?.encode?.(values[0]) ?? values[0];
        case 'promise-all':
            return Promise.all(values[0] as Iterable<unknown>);
        case 'process-cwd':
            return typeof process !== 'undefined' ? process.cwd() : '';
        case 'reflect-construct':
            return Reflect.construct(values[0] as new (...args: unknown[]) => unknown, (values[1] as unknown[]) ?? []);
        case 'to-string':
            return values[1] === undefined
                ? String(values[0])
                : (values[0] as any)?.toString?.(String(values[1]));
        case 'string-split':
            return String(values[0]).split(String(values[1]));
        case 'string-starts-with':
            return String(values[0]).startsWith(String(values[1]), values[2] === undefined ? undefined : Number(values[2]));
        case 'string-includes':
            return String(values[0]).includes(String(values[1]), values[2] === undefined ? undefined : Number(values[2]));
        case 'string-last-index-of':
            return String(values[0]).lastIndexOf(String(values[1]), values[2] === undefined ? undefined : Number(values[2]));
        case 'string-replace':
            return String(values[0]).replace(values[1] as string | RegExp, String(values[2]));
        case 'string-char-code-at':
            return String(values[0]).charCodeAt(Number(values[1]));
        case 'string-concat':
            return values.map((value) => String(value)).join('');
        case 'state-slot-ref':
            return readStateSlot(values[0] as StateSlot);
        case 'state-string-concat': {
            const beforeCount = Number(values[1] ?? 0);
            const parts = values.slice(2).map((value) => String(value));
            return `${parts.slice(0, beforeCount).join('')}${String(readStateSlot(values[0] as StateSlot) ?? '')}${parts.slice(beforeCount).join('')}`;
        }
        case 'method-slice':
            return (values[0] as any)?.slice?.(...values.slice(1));
        case 'method-subarray':
            return (values[0] as any)?.subarray?.(...values.slice(1));
        case 'method-join':
            return (values[0] as any)?.join?.(values[1]);
        case 'method-pop':
            return (values[0] as any)?.pop?.();
        case 'method-map':
            return (values[0] as any)?.map?.(values[1] as any);
        case 'method-every':
            return (values[0] as any)?.every?.(values[1] as any);
        case 'method-find':
            return (values[0] as any)?.find?.(values[1] as any);
        case 'method-apply':
            return (values[0] as any)?.apply?.(values[1], values[2]);
        case 'method-bind':
            return (values[0] as any)?.bind?.(values[1]);
        case 'method-save':
            return (values[0] as any)?.Save?.();
        case 'method-enabled':
            return (values[0] as any)?.enabled?.();
        case 'menu-load-cursor':
            return (values[0] as any)?.loadCursor?.();
        case 'method-contains':
            return (values[0] as any)?.contains?.(values[1]);
        case 'method-is-destroyed':
            return (values[0] as any)?.isDestroyed?.();
        case 'console-log':
            return (values[0] as Console | undefined)?.log?.(...values.slice(1));
        case 'console-error':
            return (values[0] as Console | undefined)?.error?.(...values.slice(1));
        case 'console-warn':
            return (values[0] as Console | undefined)?.warn?.(...values.slice(1));
        case 'method-send':
            return (values[0] as any)?.send?.(...values.slice(1));
        case 'window-add-event-listener':
            return (values[0] as Window | undefined)?.addEventListener?.(String(values[1]), values[2] as EventListener, values[3] as any);
        case 'dom-append-child':
            return (values[0] as Node | undefined)?.appendChild?.(values[1] as Node);
        case 'event-prevent-default':
            return (values[0] as Event | undefined)?.preventDefault?.();
        case 'location-reload':
            return (values[0] as Location | undefined)?.reload?.();
        case 'method-for-each':
            return (values[0] as any)?.forEach?.(values[1] as any);
        case 'collection-set':
            return (values[0] as any)?.set?.(values[1], values[2]);
        case 'collection-push':
            return (values[0] as any)?.push?.(...values.slice(1));
        case 'collection-splice':
            return (values[0] as any)?.splice?.(...values.slice(1));
        case 'ipc-once':
            return (values[0] as any)?.once?.(...values.slice(1));
        case 'storage-clear':
            return (values[0] as Storage | undefined)?.clear?.();
        case 'storage-set-item':
            return (values[0] as Storage | undefined)?.setItem?.(String(values[1]), String(values[2]));
        case 'object-define-property':
            return Object.defineProperty(values[0] as object, values[1] as PropertyKey, values[2] as PropertyDescriptor);
        case 'window-close':
            return (values[0] as Window | undefined)?.close?.();
        case 'window-move-to':
            return (values[0] as Window | undefined)?.moveTo?.(Number(values[1]), Number(values[2]));
        case 'window-resize-to':
            return (values[0] as Window | undefined)?.resizeTo?.(Number(values[1]), Number(values[2]));
        case 'fs-unlink-sync':
            return (values[0] as any)?.unlinkSync?.(...values.slice(1));
        case 'fs-watch':
            return (values[0] as any)?.watch?.(...values.slice(1));
        case 'callback-before':
            return (values[0] as any)?.before?.(...values.slice(1));
        case 'callback-next':
            return (values[0] as any)?.next?.(...values.slice(1));
        case 'config-on-confirm':
            return (values[0] as any)?.onConfirm?.(...values.slice(1));
        case 'config-save-value':
            return (values[0] as any)?.saveValue?.(...values.slice(1));
        case 'canvas-draw-image':
            return (values[0] as any)?.drawImage?.(...values.slice(1));
        case 'canvas-arc':
            return (values[0] as CanvasRenderingContext2D | undefined)?.arc?.(...(values.slice(1) as [number, number, number, number, number, boolean?]));
        case 'canvas-fill':
            return (values[0] as CanvasRenderingContext2D | undefined)?.fill?.(...(values.slice(1) as []));
        case 'canvas-fill-rect':
            return (values[0] as CanvasRenderingContext2D | undefined)?.fillRect?.(Number(values[1]), Number(values[2]), Number(values[3]), Number(values[4]));
        case 'canvas-fill-text':
            return (values[0] as CanvasRenderingContext2D | undefined)?.fillText?.(String(values[1]), Number(values[2]), Number(values[3]), values[4] === undefined ? undefined : Number(values[4]));
        case 'canvas-line-to':
            return (values[0] as CanvasRenderingContext2D | undefined)?.lineTo?.(Number(values[1]), Number(values[2]));
        case 'canvas-move-to':
            return (values[0] as CanvasRenderingContext2D | undefined)?.moveTo?.(Number(values[1]), Number(values[2]));
        case 'canvas-put-image-data':
            return (values[0] as any)?.putImageData?.(...values.slice(1));
        case 'canvas-rotate':
            return (values[0] as CanvasRenderingContext2D | undefined)?.rotate?.(Number(values[1]));
        case 'canvas-stroke':
            return (values[0] as CanvasRenderingContext2D | undefined)?.stroke?.();
        case 'canvas-begin-path':
            return (values[0] as CanvasRenderingContext2D | undefined)?.beginPath?.();
        case 'canvas-translate':
            return (values[0] as CanvasRenderingContext2D | undefined)?.translate?.(Number(values[1]), Number(values[2]));
        case 'canvas-set-transform':
            return (values[0] as CanvasRenderingContext2D | undefined)?.setTransform?.(...(values.slice(1) as any));
        case 'canvas-save':
            return (values[0] as CanvasRenderingContext2D | undefined)?.save?.();
        case 'canvas-restore':
            return (values[0] as CanvasRenderingContext2D | undefined)?.restore?.();
        case 'media-play':
            return (values[0] as HTMLMediaElement | undefined)?.play?.();
        case 'media-pause':
            return (values[0] as HTMLMediaElement | undefined)?.pause?.();
        case 'media-load':
            return (values[0] as HTMLMediaElement | undefined)?.load?.();
        case 'canvas-get-context':
            return (values[0] as HTMLCanvasElement | undefined)?.getContext?.(String(values[1]), values[2] as any);
        case 'canvas-get-image-data':
            return (values[0] as CanvasRenderingContext2D | undefined)?.getImageData?.(...(values.slice(1) as [number, number, number, number]));
        case 'canvas-clear-rect':
            return (values[0] as CanvasRenderingContext2D | undefined)?.clearRect?.(...(values.slice(1) as [number, number, number, number]));
        case 'response-json':
            return (values[0] as Response | undefined)?.json?.();
        case 'collection-has':
            return typeof (values[0] as any)?.has === 'function'
                ? (values[0] as any).has(values[1])
                : toPropertyKey(values[1]) in Object(values[0]);
        case 'collection-get':
            return typeof (values[0] as any)?.get === 'function'
                ? (values[0] as any).get(values[1])
                : (values[0] as any)?.[values[1] as any];
        case 'collection-keys':
            return typeof (values[0] as any)?.keys === 'function'
                ? Array.from((values[0] as any).keys())
                : Object.keys(Object(values[0]));
        case 'menu-run':
            return hostModule<typeof Menu>(host, 'Menu', Menu).run(readPath(String(values[0]), host) as Menu.SimpleMenuConfig);
        case 'menu-render':
            hostModule<typeof Menu>(host, 'Menu', Menu).render(readPath(String(values[0]), host) as Menu.SimpleMenuConfig);
            return undefined;
        case 'menu-item-enter':
            return typeof host.globals?.menuItemEnter === 'function'
                ? (host.globals.menuItemEnter as () => unknown)()
                : undefined;
        case 'menu-current-mode':
            return typeof host.globals?.currentMode === 'function'
                ? (host.globals.currentMode as () => unknown)()
                : undefined;
        case 'menu-find-category':
            return typeof host.globals?.findCategory === 'function'
                ? (host.globals.findCategory as (id: unknown) => unknown)(values[0])
                : undefined;
        case 'item-get-def':
            return Items.getItemDef(Number(values[0]));
        case 'item-is-migrated':
            return Items.isMigrated(Number(values[0]));
        case 'item-pick':
            return pickLocalized(values[0]);
        case 'item-apply':
            return Items.applyItem(Number(values[0]));
        case 'item-post-process':
            Items.postProcessItem(Number(values[0]));
            return undefined;
        case 'item-info-dim':
            return hostModule<typeof Class>(host, 'Class', Class).ItemInfo.dim(Number(values[0]));
        case 'item-info-load':
            return hostModule<typeof Class>(host, 'Class', Class).ItemInfo.Load(values[0]);
        case 'charactor-info-dim':
            return hostModule<typeof Class>(host, 'Class', Class).CharactorInfo.dim(Number(values[0]));
        case 'charactor-info-load':
            return hostModule<typeof Class>(host, 'Class', Class).CharactorInfo.Load(values[0]);
        case 'path-join':
        case 'path-resolve':
            return values.flat().map(String).join('/');
        case 'path-dirname':
            return String(values[0]).split('/').slice(0, -1).join('/');
        case 'path-basename':
            return String(values[0]).split('/').pop() || '';
        case 'path-extname': {
            const match = String(values[0]).match(/\.\w+$/);
            return match ? match[0] : '';
        }
        case 'new':
            return constructByName(String(values[0]), values.slice(1), host);
        case 'typeof':
            return typeof values[0];
        case 'nullish':
            return values[0] ?? values[1];
        case 'logical-and':
            return values[0] && values[1];
        case 'logical-or':
            return values[0] || values[1];
        case 'bitwise-and':
            return Number(values[0] ?? 0) & Number(values[1] ?? 0);
        case 'bitwise-or':
            return Number(values[0] ?? 0) | Number(values[1] ?? 0);
        case 'bitwise-xor':
            return Number(values[0] ?? 0) ^ Number(values[1] ?? 0);
        case 'instanceof':
            return values[0] instanceof (values[1] as any);
        case 'catch':
            return { kind: 'catch', name: values[0], body: values[1] };
        case 'control':
            return host.onControl ? host.onControl(String(values[0]), values.slice(1)) : { kind: values[0], args: values.slice(1) };
        case 'nelisp-eq':
            return Number(values[0]) === Number(values[1]);
        case 'nelisp-lt':
            return Number(values[0]) < Number(values[1]);
        case 'nelisp-gt':
            return Number(values[0]) > Number(values[1]);
        case 'nelisp-le':
            return Number(values[0]) <= Number(values[1]);
        case 'nelisp-ge':
            return Number(values[0]) >= Number(values[1]);
        case 'nelisp-not':
            return !values[0];
        case 'window-add-event-listener':
            (values[0] as { addEventListener?: (e: string, h: unknown) => void } | undefined)
                ?.addEventListener?.(String(values[1]), values[2]);
            return undefined;
        case 'method-send':
            return (values[0] as { send?: (...a: unknown[]) => unknown } | undefined)?.send?.(...values.slice(1));
        default:
            throw new Error(`Unknown state-diff event: ${kind}`);
    }
}

async function visitEntry(entry: StateDiffEntry, host: StateDiffRunnerHost, outputs: unknown[]): Promise<void> {
    if (entry == null) return;
    if (!Array.isArray(entry)) return;
    if (isEvent(entry)) {
        outputs.push(await executeStateDiffEvent(entry as StateDiffEvent, host));
        return;
    }
    if (isStateDiff(entry)) {
        const diff = entry as StateDiff;
        writeStateSlot(diff[0], await evalStateDiffValue(diff[1], host));
        return;
    }
    for (const child of entry) {
        await visitEntry(child as StateDiffEntry, host, outputs);
    }
}

function isEvent(value: unknown[]): boolean {
    return typeof value[0] === 'string' && EVENT_NAMES.has(value[0]);
}

function isStateDiff(value: unknown[]): boolean {
    if (value.length !== 2) return false;
    if (typeof value[0] === 'number') return true;
    return typeof value[0] === 'string' && !EVENT_NAMES.has(value[0]);
}

async function evalStateDiffValue(value: unknown, host: StateDiffRunnerHost): Promise<unknown> {
    if (!Array.isArray(value)) return value;
    if (isEvent(value)) return executeStateDiffEvent(value as StateDiffEvent, host);
    if (value.length === 1 && Array.isArray(value[0]) && isEvent(value[0] as unknown[])) {
        return executeStateDiffEvent(value[0] as StateDiffEvent, host);
    }
    const out: unknown[] = [];
    for (const item of value) {
        out.push(await evalStateDiffValue(item, host));
    }
    return out;
}

function evalPromiseTarget(value: unknown[], host: StateDiffRunnerHost): Promise<unknown> {
    if (isEvent(value)) return executeStateDiffEvent(value as StateDiffEvent, host);
    return evalStateDiffValue(value, host);
}

function readStateSlot(slot: StateSlot): unknown {
    return (Gvar as any)[typeof slot === 'number' ? `var_${slot}` : slot];
}

function writeStateSlot(slot: StateSlot, value: unknown): void {
    (Gvar as any)[typeof slot === 'number' ? `var_${slot}` : slot] = value;
}

function readPath(name: string, host: StateDiffRunnerHost): unknown {
    const parts = name.split('.');
    let current = resolveRoot(parts[0], host);
    for (const part of parts.slice(1)) {
        current = (current as any)?.[part];
    }
    return current;
}

function writePath(name: string, value: unknown, host: StateDiffRunnerHost): void {
    const parts = name.split('.');
    const last = parts.pop();
    if (!last) throw new Error(`Bad path: ${name}`);
    let current = resolveRoot(parts[0], host);
    for (const part of parts.slice(1)) {
        current = (current as any)[part];
    }
    (current as any)[last] = value;
}

function resolveRoot(name: string, host: StateDiffRunnerHost): unknown {
    if (host.globals && name in host.globals) return host.globals[name];
    if (name in MODULES) return MODULES[name];
    const exported = findExport(name);
    if (exported !== undefined) return exported;
    if (name === 'window' && typeof window !== 'undefined') return window;
    if (name === 'document' && typeof document !== 'undefined') return document;
    return readStateSlot(name);
}

function findExport(name: string): unknown {
    for (const mod of [Adap, Func, Items, I18n, Menu, Configs, Music, Class]) {
        if (name in mod) return (mod as any)[name];
    }
    return undefined;
}

function callDynamic(target: unknown, args: unknown[], host: StateDiffRunnerHost): unknown {
    if (typeof target === 'function') return Reflect.apply(target, undefined, args);
    return callByName(String(target), args, host);
}

function callByName(name: string, args: unknown[], host: StateDiffRunnerHost): unknown {
    const fn = readPath(name, host);
    if (typeof fn !== 'function') {
        throw new Error(`State-diff call target is not a function: ${name}`);
    }
    const receiverName = name.includes('.') ? name.slice(0, name.lastIndexOf('.')) : '';
    const receiver = receiverName ? readPath(receiverName, host) : undefined;
    return fn.apply(receiver, args);
}

function callCoreByName(state: unknown, name: string, args: unknown[], host: StateDiffRunnerHost): unknown {
    const globals = Object.assign({}, host.globals, { state });
    const nextHost: StateDiffRunnerHost = Object.assign({}, host, { globals });
    return callByName(name, args, nextHost);
}

function constructByName(name: string, args: unknown[], host: StateDiffRunnerHost): unknown {
    const ctor = readPath(name, host);
    if (typeof ctor !== 'function') {
        throw new Error(`State-diff constructor target is not a function: ${name}`);
    }
    return Reflect.construct(ctor as any, args as any[]);
}

function pickLocalized(value: any): string {
    if (!value) return '';
    if (I18n.getLanguage() === 'ja') return value.ja;
    return value.en && value.en.length > 0 ? value.en : value.ja;
}

function toPropertyKey(value: unknown): string | number | symbol {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'symbol') {
        return value;
    }
    return String(value);
}

function writeIndex(target: unknown, key: unknown, value: unknown): void {
    if (target == null) return;
    const object = target as any;
    object[key as any] = value;
    const numericKey = typeof key === 'number'
        ? key
        : typeof key === 'string' && /^\d+$/.test(key)
            ? Number(key)
            : null;
    if (numericKey != null) {
        object[`Var${numericKey}`] = value;
    }
}

export { readStateSlot, writeStateSlot };
