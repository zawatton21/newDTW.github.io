/**
 * debug.ts — Runtime debug API for newDTW development
 *
 * Accessible via DevTools console as `debug.*` or via Puppeteer.
 * All functions manipulate live game state through Gvar.
 */
import { Gvar } from './variable'
import * as Adap from './adapter/index'
import { setLanguage, loadLanguage, getLanguage } from './i18n'
import * as Func from './func/index'
import * as Music from './music/index'
import * as Menu from './menu/MenuController'
import * as Class from './classes'
import { getGeneratedGameFunctionStats, resetGeneratedGameFunctionStats } from './nelisp_bridge'

const debug = {
    // ========== Player Stats ==========

    /** Set current HP. Use Infinity for invincibility. */
    setHP(value: number) {
        Gvar.var_236 = value;
        console.log(`[debug] HP = ${value}`);
    },

    /** Set max HP. */
    setMaxHP(value: number) {
        Gvar.var_383 = value;
        console.log(`[debug] MaxHP = ${value}`);
    },

    /** Enable god mode: HP won't decrease. */
    godMode(on: boolean = true) {
        (window as any).__godMode = on;
        if (on) {
            Gvar.var_236 = 9999;
            Gvar.var_383 = 9999;
            Gvar.var_350 = 200;  // satiety
            Gvar.var_567 = 200;  // max satiety
        }
        console.log(`[debug] God mode: ${on ? 'ON' : 'OFF'}`);
    },

    /** Set satiety (hunger). */
    setSatiety(current: number, max?: number) {
        Gvar.var_350 = current;
        if (max !== undefined) Gvar.var_567 = max;
        console.log(`[debug] Satiety = ${current}/${max ?? Gvar.var_567}`);
    },

    /** Set player level. */
    setLevel(level: number) {
        Gvar.var_647 = level;
        console.log(`[debug] Level = ${level}`);
    },

    /** Set player gold. */
    setGold(amount: number) {
        Gvar.var_237 = amount;
        console.log(`[debug] Gold = ${amount}`);
    },

    // ========== Position & Map ==========

    /** Get current player position. */
    getPos() {
        console.log(`[debug] Player at (${Gvar.var_74}, ${Gvar.var_75}), Floor ${Gvar.var_70}`);
        return { x: Gvar.var_74, y: Gvar.var_75, floor: Gvar.var_70 };
    },

    /** Teleport player to coordinates. */
    teleport(x: number, y: number) {
        Gvar.var_74 = x;
        Gvar.var_75 = y;
        console.log(`[debug] Teleported to (${x}, ${y})`);
    },

    // ========== Dungeon Entry ==========

    /**
     * Force natural entry into a real generated dungeon floor, bypassing the
     * in-game "walk to the hotel-exterior door tile + confirm dialog" flow
     * (func019 field handler -> func0881/func0880 -> func0898 -> func825).
     *
     * Calls the same self-contained per-dungeon initializer the real UI flow
     * calls. Each one sets dungeon_number/current_floor = 1 itself and ends
     * in Func.func006(), which chains into Func.func243() -> Func.func007()
     * -> Func.func244()/Func.func246() -> the ASCII-template floor-generation
     * pipeline that decodes a real dungeon layout into var_71 (terrain),
     * var_72/var_65/var_73/var_76/var_84/var_79/var_80 etc. -- a genuine
     * generated floor (hundreds of walkable floor-family cells across many
     * rooms/corridors), not the ~94-cell synthetic room the town/new-game
     * fallback state has. No other debug call is required first.
     *
     * dungeonNumber: 1 = Hotel Outside (default -- earliest, simplest dungeon),
     * 2 = Requiem's Labyrinth, 3 = Diavolo's Trial, 4 = World After One Loop,
     * 5 = Iron Prison. See src/renderer/dungeon{1..5}/func0*.ts.
     */
    async enterDungeon(dungeonNumber: number = 1) {
        switch (dungeonNumber) {
            case 1: await Func.func825(); break;
            case 2: await Func.func0886(); break;
            case 3: await Func.func0888(); break;
            case 4: await Func.func0893(); break;
            case 5: await Func.func0895(); break;
            default:
                console.error(`[debug] enterDungeon: unknown dungeon number ${dungeonNumber}`);
                return;
        }
        console.log(`[debug] entered dungeon ${dungeonNumber}: dungeon_number=${Gvar.dungeon_number}, current_floor=${Gvar.current_floor}`);
    },

    // ========== Enemies ==========

    /** Spawn an enemy in front of the player. */
    spawnEnemy(enemyId: number) {
        // Find an empty enemy slot
        let slot = -1;
        for (let i = 1; i <= Gvar.var_107; i++) {
            if (Gvar.var_83[i]?.Var0 === 0) { slot = i; break; }
        }
        if (slot === -1) {
            Gvar.var_107++;
            slot = Gvar.var_107;
            if (!Gvar.var_83[slot]) Gvar.var_83[slot] = {};
        }
        // Place in front of player (based on facing direction)
        const dirs: Record<number, [number, number]> = {
            0: [0, -1], 1: [0, 1], 2: [-1, 0], 3: [1, 0],
            4: [-1, -1], 5: [1, -1], 6: [-1, 1], 7: [1, 1]
        };
        const [dx, dy] = dirs[Gvar.var_224] || [0, -1];
        const ex = Gvar.var_74 + dx;
        const ey = Gvar.var_75 + dy;

        Gvar.var_83[slot].Var0 = enemyId;
        Gvar.var_83[slot].Var1 = ex;
        Gvar.var_83[slot].Var2 = ey;
        Gvar.var_83[slot].Var3 = 0;  // HP
        Gvar.var_83[slot].Var5 = 2;  // state
        Gvar.var_83[slot].Var10 = Gvar.var_226; // floor
        Gvar.var_83[slot].Var12 = 12; // speed
        Gvar.var_83[slot].Var13 = 0;
        Gvar.var_84[ex][ey] = slot;  // map entity reference

        console.log(`[debug] Spawned enemy ${enemyId} at (${ex}, ${ey}), slot ${slot}`);
    },

    /** Kill all enemies on the current floor. */
    killAllEnemies() {
        let killed = 0;
        for (let i = 1; i <= Gvar.var_107; i++) {
            if (Gvar.var_83[i]?.Var0 !== 0) {
                Gvar.var_83[i].Var0 = 0;
                killed++;
            }
        }
        console.log(`[debug] Killed ${killed} enemies`);
    },

    // ========== Items ==========

    /** Give an item to the player's inventory. */
    giveItem(itemId: number) {
        // Find empty inventory slot
        for (let i = 1; i <= 20; i++) {
            if (Gvar.var_494[i] === 0 || Gvar.var_494[i] === undefined) {
                Gvar.var_494[i] = itemId;
                Gvar.var_249 = Math.max(Gvar.var_249 || 0, i);
                console.log(`[debug] Gave item ${itemId} to slot ${i}`);
                return;
            }
        }
        console.log(`[debug] Inventory full!`);
    },

    /** Place an item on the ground in front of the player. */
    placeItem(itemId: number) {
        const dirs: Record<number, [number, number]> = {
            0: [0, -1], 1: [0, 1], 2: [-1, 0], 3: [1, 0],
        };
        const [dx, dy] = dirs[Gvar.var_224] || [0, -1];
        const ix = Gvar.var_74 + dx;
        const iy = Gvar.var_75 + dy;
        Gvar.var_88[ix][iy] = itemId;
        console.log(`[debug] Placed item ${itemId} at (${ix}, ${iy})`);
    },

    /** List inventory contents. */
    listInventory() {
        const items: string[] = [];
        for (let i = 1; i <= 20; i++) {
            if (Gvar.var_494[i] && Gvar.var_494[i] !== 0) {
                items.push(`  Slot ${i}: item ${Gvar.var_494[i]}`);
            }
        }
        console.log(`[debug] Inventory:\n${items.join('\n') || '  (empty)'}`);
        return items;
    },

    // ========== Language ==========

    /** Switch language. */
    async setLang(lang: string) {
        await loadLanguage(lang);
        setLanguage(lang);
        console.log(`[debug] Language set to: ${lang}`);
    },

    /** Get current language. */
    getLang() {
        return getLanguage();
    },

    // ========== Game State ==========

    /** Show current game state summary. */
    status() {
        const s = {
            hp: `${Gvar.var_236}/${Gvar.var_383}`,
            satiety: `${Gvar.var_350}/${Gvar.var_567}`,
            level: Gvar.var_647,
            gold: Gvar.var_237,
            floor: Gvar.var_70,
            pos: `(${Gvar.var_74}, ${Gvar.var_75})`,
            facing: Gvar.var_224,
            enemies: Gvar.var_107,
            lang: getLanguage(),
        };
        console.table(s);
        return s;
    },

    /** Direct access to Gvar for advanced debugging. */
    get gvar() { return Gvar; },

    /** Set any Gvar variable by number. */
    setVar(num: number, value: any) {
        (Gvar as any)[`var_${num}`] = value;
        console.log(`[debug] var_${num} = ${value}`);
    },

    /** Get any Gvar variable by number. */
    getVar(num: number) {
        const v = (Gvar as any)[`var_${num}`];
        console.log(`[debug] var_${num} = ${v}`);
        return v;
    },

    nelispStateDiffStats() {
        const stats = getGeneratedGameFunctionStats();
        console.table(stats.byName);
        console.log(`[debug] generated state-diff total = ${stats.total}`);
        return stats;
    },

    resetNelispStateDiffStats() {
        const stats = resetGeneratedGameFunctionStats();
        console.log('[debug] generated state-diff stats reset');
        return stats;
    },

    async runNelispGeneratedSmoke() {
        const win = window as any;
        const previousFlags = win.__NELISP_STATE_DIFF_FLAGS__;
        const previousHostGlobals = win.__NELISP_STATE_DIFF_HOST_GLOBALS__;
        const previousTrace = win.__NELISP_STATE_DIFF_TRACE__;
        const previousEventTrace = win.__NELISP_STATE_DIFF_EVENT_TRACE__;
        const traces: any[] = [];
        const events: any[] = [];
        try {
            Gvar.var_459 = 9;
            Gvar.var_128 = 9;
            Gvar.var_224 = 0;
            (Gvar as any).var_233 = { 1: { 0: 0, Var0: 0 }, 2: { 0: 0, Var0: 0 } };
            Gvar.var_471 = 99;
            Gvar.var_240 = 9;
            Gvar.var_221 = 9;
            Gvar.open_item_menue = 1;
            Gvar.var_231 = 9;
            Gvar.var_234 = 9;
            Gvar.var_361 = 3;
            Gvar.var_833 = 25;
            Gvar.var_1678 = 0;
            Gvar.var_1679 = 0;
            Gvar.var_3867 = 0;
            Gvar.var_3868 = 0;
            Gvar.var_1050 = 7;
            Gvar.var_2254 = 1;
            Gvar.var_217 = 0;
            Gvar.var_408 = 1;
            Gvar.var_1046 = 1;
            Gvar.var_3542 = 30;
            Gvar.var_3543 = 40;
            Gvar.var_3559 = 8;
            Gvar.var_3560 = 0;
            Gvar.var_3562 = 0;
            Gvar.y_axis_map_image = 0;
            Gvar.var_3573 = 9;
            Gvar.font_type = 'smoke-font';
            Gvar.var_3593 = 2;
            Gvar.wparam = 8;
            Gvar.var_15 = 123;
            Gvar.data0 = 0;
            Gvar.data1 = 0;
            Gvar.var_3525 = 10;
            Gvar.var_3529 = 10;
            Gvar.var_3553 = 3;
            Gvar.var_3554 = 4;
            Gvar.var_3555 = 5;
            Gvar.var_3574 = 9;
            Gvar.var_3575 = "";
            Gvar.var_3576 = 0;
            Gvar.var_3577 = 79;
            Gvar.var_3820 = "abc";
            Gvar.var_3861 = 399;
            Gvar.var_3862 = '';
            Gvar.var_1050 = 7;
            Gvar.var_1170 = "tail";
            Gvar.var_211 = 4;
            (Gvar as any).var_233 = {
                1: { 4: 13, Var4: 13 },
                2: { 4: 15, Var4: 15 },
                3: { 4: 18, Var4: 18 },
                4: { 3: 19, Var3: 19 },
            };
            Gvar.var_350 = 8;
            Gvar.var_352 = 3;
            Gvar.var_553 = 1;
            Gvar.var_554 = 2;
            Gvar.var_555 = 3;
            Gvar.var_556 = 4;
            Gvar.var_565 = 6;
            Gvar.var_566 = 5;
            Gvar.var_567 = 7;
            Gvar.var_580 = 14;
            Gvar.var_581 = 17;
            Gvar.bougyo_disc_id = 16;
            Gvar.current_floor = 9;
            Gvar.current_level = 2;
            Gvar.dungeon_number = 11;
            Gvar.kougeki_disc_id = 12;
            Gvar.nouryoku_disc_id = 18;
            Gvar.shageki_disc_id = 1;
            Gvar.sympathy_id = 0;
            Gvar.wallet = 10;
            win.__NELISP_STATE_DIFF_FLAGS__ = {
                func023: true,
                func024: true,
                func027: true,
                func028: true,
                func029: true,
                func030: true,
                func031: true,
                func033: true,
                func034: true,
                func035: true,
                func036: true,
                func037: true,
                func038: true,
                func039: true,
                func040: true,
                func042: true,
                func062: true,
                func071: true,
                func163b: true,
                func243: true,
                func245: true,
                func293: true,
                func294: true,
                func295: true,
                func296: true,
                func297: true,
                func298: true,
                func299: true,
                func300: true,
                func301: true,
                func302: true,
                func303: true,
                func304: true,
                func305: true,
                func306: true,
                func307: true,
                func308: true,
                func309: true,
                func310: true,
                func311: true,
                func312: true,
                func313: true,
                func314: true,
                func315: true,
                func316: true,
                func317: true,
                func318: true,
                func319: true,
                func320: true,
                func321: true,
                func322: true,
                func265: true,
                func371: true,
                func0900: true,
                func0901: true,
                func0902: true,
                func0903: true,
                func0904: true,
                func0905: true,
                func0906: true,
                func0907: true,
                func0909: true,
                func0911: true,
                func0915: true,
                func0916: true,
                func0917: true,
                func0920: true,
                func0924: true,
                func0926: true,
                func0927: true,
                func0928: true,
                func0933: true,
                func0939: true,
                func0948: true,
                func0950: true,
                func0952: true,
                func0955: true,
                func0956: true,
                func0959: true,
                func0961: true,
                func0962: true,
                func0963: true,
                func0964: true,
                func0965: true,
                func0966: true,
                func0973: true,
                func0974: true,
                func0977: true,
                func0979: true,
                func0981: true,
                func0983: true,
                func0984: true,
                func0987: true,
                func0989: true,
                func0990: true,
                func0991: true,
                func0992: true,
                func0993: true,
                func0999: true,
                func1005: true,
                func205: true,
                func206: true,
                func207: true,
                func217: true,
                func431: true,
                func335: true,
                func336: true,
                func258: true,
                func260: true,
                func261: true,
                func262: true,
                func263: true,
                func264: true,
                func266: true,
                func267: true,
                func268: true,
                func269: true,
                func270: true,
                func271: true,
                func272: true,
                func273: true,
                func274: true,
                func275: true,
                func276: true,
                func277: true,
                func278: true,
                func279: true,
                func280: true,
                func281: true,
                func282: true,
                func283: true,
                func284: true,
                func285: true,
                func286: true,
                func287: true,
                func679: true,
                func386: true,
                func256: true,
                func259: true,
                func194: true,
                func195: true,
                func196: true,
                func477: true,
                func481: true,
            };
            win.__NELISP_STATE_DIFF_HOST_GLOBALS__ = {
                Adap: Object.assign({}, Adap, {
                    DSPLAY: (): void => undefined,
                    ShowWindow: (): void => undefined,
                    boxf: (): void => undefined,
                    clrobj: (): void => undefined,
                    color: (): void => undefined,
                    combox: (): void => undefined,
                    dialog: (): void => undefined,
                    dim: (length1: number, length2?: number | null, length3?: number | null): unknown[] => {
                        const make = (length: number, next?: () => unknown): unknown[] =>
                            Array.from({ length }, () => next ? next() : null);
                        if (typeof length3 === 'number') return make(length1, () => make(Number(length2 || 0), () => make(length3)));
                        if (typeof length2 === 'number') return make(length1, () => make(length2));
                        return make(length1);
                    },
                    font: (): void => undefined,
                    gcopy: (): void => undefined,
                    gmode: (): void => undefined,
                    getkey: (): number => 10,
                    gsel: (): void => undefined,
                    mes: (): void => undefined,
                    objsel: (): void => undefined,
                    pos: (): void => undefined,
                    redraw: (): void => undefined,
                    screen_: (): void => undefined,
                    sdim: (): string => '',
                    SetWindowLongA: (): void => undefined,
                    wait: async (): Promise<void> => undefined,
                    onexit: (): void => undefined,
                    chgdisp: (): void => undefined,
                    chdir: (): void => undefined,
                    bsave: async (): Promise<void> => undefined,
                    width: (): void => undefined,
                }),
                Func: Object.assign({}, Func, {
                    setMessage: async (): Promise<void> => undefined,
                    AutoDraw: async (): Promise<void> => undefined,
                    func337: async (): Promise<void> => undefined,
                    func009: async (): Promise<void> => undefined,
                    func372: async (): Promise<void> => undefined,
                    func0905: async (): Promise<void> => undefined,
                    func0906: async (): Promise<void> => undefined,
                    func0917: async (): Promise<void> => undefined,
                    func0911: async (): Promise<void> => undefined,
                    func0912: async (): Promise<void> => undefined,
                    func0914: async (): Promise<void> => undefined,
                    func0915: async (): Promise<void> => undefined,
                    func0916: async (): Promise<void> => undefined,
                    func0919: async (): Promise<void> => undefined,
                    func0920: async (): Promise<void> => undefined,
                    func0929: async (): Promise<void> => undefined,
                    func0934: async (): Promise<void> => undefined,
                    func0940: async (): Promise<void> => undefined,
                    func0947: async (): Promise<void> => undefined,
                    func0949: async (): Promise<void> => undefined,
                    func0951: async (): Promise<void> => undefined,
                    func235: async (): Promise<void> => undefined,
                    func0942: async (): Promise<void> => undefined,
                    func0900: async (): Promise<void> => undefined,
                    func426: async (): Promise<void> => undefined,
                    func427: async (): Promise<void> => undefined,
                    func428: async (): Promise<void> => undefined,
                    func429: async (): Promise<void> => undefined,
                    func0966: async (): Promise<void> => undefined,
                    func0968: async (): Promise<void> => undefined,
                    func0973: async (): Promise<void> => undefined,
                    func0974: async (): Promise<void> => undefined,
                    func0976: async (): Promise<void> => undefined,
                    func0978: async (): Promise<void> => undefined,
                    func0982: async (): Promise<void> => undefined,
                    func0988: async (): Promise<void> => undefined,
                    func340: async (): Promise<void> => undefined,
                    func508: async (): Promise<void> => undefined,
                    func019: async (): Promise<void> => undefined,
                    func0910: async (): Promise<void> => undefined,
                    func0928: async (): Promise<void> => undefined,
                    func0953: async (): Promise<void> => undefined,
                }),
                Menu: Object.assign({}, Menu, {
                    run: async (): Promise<void> => undefined,
                    render: (): void => undefined,
                }),
                Music: Object.assign({}, Music, {
                    func106: async (): Promise<void> => undefined,
                    func108: async (): Promise<void> => undefined,
                }),
                Class: Object.assign({}, Class, {
                    CharactorInfo: Object.assign({}, Class.CharactorInfo, {
                        dim: (size: number): unknown[] => Array.from({ length: size }, () => null),
                    }),
                    ItemInfo: Object.assign({}, Class.ItemInfo, {
                        dim: (size: number): unknown[] => Array.from({ length: size }, () => null),
                    }),
                }),
            };
            win.__NELISP_STATE_DIFF_TRACE__ = (entry: any) => traces.push(entry);
            win.__NELISP_STATE_DIFF_EVENT_TRACE__ = (entry: any) => events.push(entry);
            resetGeneratedGameFunctionStats();
            await Func.func023();
            (Gvar as any).var_83 = { 2: { 13: 9, Var13: 9 } };
            Gvar.var_460 = 2;
            await Func.func024();
            const func024State = {
                var_83_2_13: (Gvar as any).var_83[2][13],
                var_83_2_Var13: (Gvar as any).var_83[2].Var13,
            };
            await Func.func062();
            const func062State = {
                var_224: Gvar.var_224,
                var_233_1_0: (Gvar as any).var_233[1][0],
                var_233_1_Var0: (Gvar as any).var_233[1].Var0,
            };
            (Gvar as any).var_233 = { 0: { 0: 0, Var0: 0 } };
            (Gvar as any).var_78 = { 4: { 0: 321, Var0: 321 } };
            Gvar.var_2044 = 4;
            await Func.func027();
            await Func.func028();
            await Func.func029();
            await Func.func030();
            await Func.func031();
            await Func.func033();
            Gvar.var_132 = 0;
            await Func.func034();
            await Func.func035();
            await Func.func036();
            await Func.func037();
            await Func.func038();
            await Func.func039();
            await Func.func040();
            Gvar.var_144 = 9;
            Gvar.var_199 = 9;
            await Func.func042();
            Gvar.var_409 = 2;
            Gvar.var_66 = 3;
            Gvar.var_67 = 4;
            Gvar.var_35 = 40;
            Gvar.var_36 = 50;
            Gvar.var_217 = 0;
            Gvar.var_199 = 3;
            await Func.func163b();
            Gvar.current_floor = 3;
            Gvar.special_floor = 0;
            Gvar.dungeon_number = 4;
            Gvar.var_70 = 0;
            Gvar.var_20 = 9;
            await Func.func243();
            Gvar.dungeon_number = 1;
            Gvar.var_70 = 0;
            await Func.func245();
            await Func.func293();
            await Func.func294();
            await Func.func295();
            await Func.func296();
            await Func.func297();
            await Func.func298();
            await Func.func299();
            Gvar.var_493 = {};
            await Func.func300();
            await Func.func301();
            await Func.func302();
            await Func.func303();
            await Func.func304();
            await Func.func305();
            await Func.func306();
            await Func.func307();
            await Func.func308();
            await Func.func309();
            await Func.func310();
            await Func.func311();
            await Func.func312();
            await Func.func313();
            await Func.func314();
            await Func.func315();
            await Func.func316();
            await Func.func317();
            await Func.func318();
            await Func.func319();
            await Func.func320();
            await Func.func321();
            await Func.func322();
            Gvar.dungeon_number = 11;
            Gvar.current_floor = 9;
            Gvar.var_70 = 9;
            await Func.func071();
            await Func.func265();
            await Func.func371();
            await Func.func0901();
            await Func.func0902();
            await Func.func0903();
            await Func.func0904();
            await Func.func0905();
            await Func.func0906();
            await Func.func0907();
            await Func.func0909();
            Gvar.var_3593 = 0;
            await Func.func0911();
            Gvar.var_3593 = 2;
            await Func.func0915();
            await Func.func0917();
            await Func.func0916();
            await Func.func0926();
            await Func.func0927();
            Gvar.var_3563 = 2;
            Gvar.var_3564 = 3;
            Gvar.mousex = 50;
            Gvar.mousey = 60;
            Gvar.var_3565 = 0;
            Gvar.var_3562 = 8;
            Gvar.font_type = 'smoke-font';
            Gvar.var_3569 = 3;
            await Func.func0920();
            Gvar.stat = 7;
            await Func.func0924();
            Gvar.data0 = 13;
            Gvar.data1 = 13;
            Gvar.var_3774 = 0;
            Gvar.var_539 = 2;
            await Func.func0939();
            await Func.func0955();
            await Func.func0956();
            await Func.func0959();
            Gvar.var_883 = 2;
            await Func.func0948();
            const func0948State = {
                var_3812: Gvar.var_3812,
                belongings_item_list: Gvar.belongings_item_list,
                buying_price: Gvar.buying_price,
                item_name: Gvar.item_name,
            };
            Gvar.var_883 = 2;
            await Func.func0950();
            const func0950State = {
                var_3812: Gvar.var_3812,
                var_888: Gvar.var_888,
                var_889: Gvar.var_889,
            };
            Gvar.var_883 = 2;
            Gvar.var_3788 = 0;
            await Func.func0952();
            const func0952State = {
                var_3812: Gvar.var_3812,
                enemy_list: Gvar.enemy_list,
                enemy_name: Gvar.enemy_name,
            };
            Gvar.dungeon_number = 7;
            Gvar.var_3864 = '';
            await Func.func0964();
            await Func.func0973();
            Gvar.dungeon_number = 11;
            (Gvar as any).var_233 = {
                1: { 4: 13, Var4: 13 },
                2: { 4: 15, Var4: 15 },
                3: { 4: 18, Var4: 18 },
                4: { 3: 19, Var3: 19 },
            };
            await Func.func0966();
            Gvar.var_3867 = 1;
            Gvar.var_3868 = 1;
            await Func.func0965();
            await Func.func0974();
            await Func.func0977();
            await Func.func0981();
            await Func.func0983();
            Gvar.var_407 = 0;
            Gvar.var_509 = 9;
            Gvar.var_499 = 9;
            await Func.func0984();
            const func0984State = {
                var_509: Gvar.var_509,
                var_499: Gvar.var_499,
            };
            Gvar.var_3863 = 'ディアボロはここよーッ！';
            await Func.func0962();
            const func0962Color = Gvar.var_3865;
            Gvar.var_3863 = '西戸ハウスだ！';
            await Func.func0990();
            const func0990Color = Gvar.var_3865;
            Gvar.current_floor = 14;
            Gvar.var_66 = 3;
            Gvar.var_67 = 4;
            (Gvar as any).var_73 = { 3: { 4: 2, Var4: 2 } };
            await Func.func0963();
            const func0963Message = Gvar.var_3864;
            Gvar.var_494 = { 1: 'やっつけた', 2: 'モンスターハウスだ！' };
            await Func.func0961();
            const func0961State = {
                var_3864: Gvar.var_3864,
                var_3866: Gvar.var_3866,
            };
            Gvar.var_494 = { 1: 'やっつけた', 2: '西戸ハウスだ！' };
            await Func.func0989();
            const func0989State = {
                var_3864: Gvar.var_3864,
                var_3866: Gvar.var_3866,
            };
            Gvar.var_71 = { 5: { 6: 23, Var6: 23 } };
            Gvar.var_3768 = 5;
            Gvar.var_3769 = 6;
            await Func.func0933();
            const func0933State = {
                var_3766: Gvar.var_3766,
            };
            const beforeFunc0979 = {
                var_2194: Gvar.var_2194,
                var_1050: Gvar.var_1050,
                var_82: (Gvar as any).var_82,
                var_83: (Gvar as any).var_83,
                time_paused: Gvar.time_paused,
                time_paused_count: Gvar.time_paused_count,
                var_3864: Gvar.var_3864,
            };
            Gvar.var_2194 = 7;
            Gvar.var_1050 = 7;
            Gvar.time_paused_count = 0;
            Gvar.time_paused = 0;
            (Gvar as any).var_82 = { 11: { 12: 7, Var12: 7 } };
            (Gvar as any).var_83 = {
                7: {
                    0: 31, Var0: 31,
                    1: 11, Var1: 11,
                    2: 12, Var2: 12,
                    3: 13, Var3: 13,
                    13: 0, Var13: 0,
                    14: 14, Var14: 14,
                    15: 15, Var15: 15,
                    17: 17, Var17: 17,
                    19: 19, Var19: 19,
                    20: 20, Var20: 20,
                    23: 23, Var23: 23,
                    24: 24, Var24: 24,
                    30: 30, Var30: 30,
                    31: 0, Var31: 0,
                    39: 39, Var39: 39,
                },
            };
            await Func.func0979();
            const func0979State = {
                var_3888: Gvar.var_3888,
                var_3864: Gvar.var_3864,
                var_82_11_12: (Gvar as any).var_82[11][12],
                var_83_7_Var0: (Gvar as any).var_83[7].Var0,
                var_83_7_Var1: (Gvar as any).var_83[7].Var1,
                var_83_7_Var2: (Gvar as any).var_83[7].Var2,
                var_3887: Gvar.var_3887,
            };
            Gvar.var_2194 = beforeFunc0979.var_2194;
            Gvar.var_1050 = beforeFunc0979.var_1050;
            (Gvar as any).var_82 = beforeFunc0979.var_82;
            (Gvar as any).var_83 = beforeFunc0979.var_83;
            Gvar.time_paused = beforeFunc0979.time_paused;
            Gvar.time_paused_count = beforeFunc0979.time_paused_count;
            Gvar.var_3864 = beforeFunc0979.var_3864;
            Gvar.var_3903 = 7;
            Gvar.var_3904 = 'old';
            await Func.func0987();
            Gvar.current_floor = 12;
            Gvar.var_66 = 3;
            Gvar.var_67 = 4;
            (Gvar as any).var_73 = { 3: { 4: 2, Var4: 2 } };
            Gvar.var_3864 = '';
            await Func.func0991();
            Gvar.dungeon_number = 7;
            Gvar.var_3864 = '';
            await Func.func0992();
            Gvar.var_624 = 7;
            Gvar.var_3905 = '';
            Gvar.var_3906 = '';
            await Func.func0993();
            Gvar.var_727 = 90;
            Gvar.var_3922 = 12;
            await Func.func0999();
            await Func.func194();
            await Func.func195();
            await Func.func196();
            await Func.func477();
            await Func.func481();
            const savedVar78 = (Gvar as any).var_78;
            const savedVar83 = (Gvar as any).var_83;
            const savedVar233 = (Gvar as any).var_233;
            const savedMapState = {
                var_983: Gvar.var_983,
                var_1082: Gvar.var_1082,
                var_1084: Gvar.var_1084,
                var_1096: Gvar.var_1096,
                var_1098: Gvar.var_1098,
                var_1100: Gvar.var_1100,
                var_1102: Gvar.var_1102,
            };
            await Func.func1005();
            await Func.func205();
            await Func.func206();
            await Func.func207();
            Gvar.var_664 = {};
            Gvar.var_692 = 1;
            Gvar.var_693 = 2;
            Gvar.var_694 = 3;
            Gvar.var_695 = 4;
            Gvar.var_696 = 5;
            Gvar.var_697 = 6;
            Gvar.var_698 = 7;
            Gvar.var_699 = 8;
            Gvar.var_700 = 9;
            Gvar.var_701 = 10;
            await Func.func217();
            await Func.func431();
            await Func.func335();
            await Func.func336();
            await Func.func258();
            await Func.func260();
            await Func.func261();
            await Func.func262();
            await Func.func263();
            await Func.func264();
            await Func.func266();
            await Func.func267();
            await Func.func268();
            await Func.func269();
            await Func.func270();
            await Func.func271();
            await Func.func272();
            await Func.func273();
            await Func.func274();
            await Func.func275();
            await Func.func276();
            await Func.func277();
            await Func.func278();
            await Func.func279();
            await Func.func280();
            await Func.func281();
            await Func.func282();
            await Func.func283();
            await Func.func284();
            await Func.func285();
            await Func.func286();
            await Func.func287();
            Gvar.current_level = 4;
            await Func.func679();
            (Gvar as any).var_78 = { 5: { 0: 0, Var0: 0 } };
            Gvar.var_866 = 5;
            await Func.func386();
            const func386State = {
                var_78_5_0: (Gvar as any).var_78[5][0],
                var_78_5_Var0: (Gvar as any).var_78[5].Var0,
            };
            await Func.func256();
            const func256State = {
                var_1082: Gvar.var_1082,
                var_1084: Gvar.var_1084,
                var_1096: Gvar.var_1096,
                var_1098: Gvar.var_1098,
                var_1100: Gvar.var_1100,
                var_1102: Gvar.var_1102,
                var_983: Gvar.var_983,
            };
            await Func.func259();
            const func259State = {
                var_1082: Gvar.var_1082,
                var_1084: Gvar.var_1084,
                var_1096: Gvar.var_1096,
                var_1098: Gvar.var_1098,
                var_1100: Gvar.var_1100,
                var_1102: Gvar.var_1102,
                var_983: Gvar.var_983,
            };
            Gvar.var_3573 = 1;
            Gvar.var_3636 = 44;
            Gvar.var_3637 = 55;
            Gvar.var_30 = 'smoke-dir';
            await Func.func0928();
            const func0928State = {
                var_199: Gvar.var_199,
                var_66: Gvar.var_66,
                var_67: Gvar.var_67,
                var_3572: Gvar.var_3572,
                var_83_len: Array.isArray((Gvar as any).var_83) ? (Gvar as any).var_83.length : -1,
                var_78_len: Array.isArray((Gvar as any).var_78) ? (Gvar as any).var_78.length : -1,
            };
            (Gvar as any).var_78 = savedVar78;
            (Gvar as any).var_83 = savedVar83;
            (Gvar as any).var_233 = savedVar233;
            Object.assign(Gvar, savedMapState);
            Gvar.var_3573 = 0;
            Gvar.data0 = 13;
            Gvar.data1 = 13;
            Gvar.var_31 = 11;
            Gvar.var_32 = 12;
            Gvar.var_637 = 0;
            Gvar.var_640 = 0;
            Gvar.var_3544 = 3;
            Gvar.var_3572 = 0;
            Gvar.var_890 = 'enemy-list';
            Gvar.var_874 = 'item-list';
            Gvar.var_886 = 'trap-list';
            await Func.func0900();
            const func0900State = {
                var_3510: Gvar.var_3510,
                var_3542: Gvar.var_3542,
                var_3543: Gvar.var_3543,
                var_3562: Gvar.var_3562,
                var_3565: Gvar.var_3565,
                var_3544: Gvar.var_3544,
                var_626: Gvar.var_626,
            };
            return {
                var_459: Gvar.var_459,
                var_128: Gvar.var_128,
                func024: func024State,
                func062: func062State,
                var_471: Gvar.var_471,
                var_240: Gvar.var_240,
                var_221: Gvar.var_221,
                open_item_menue: Gvar.open_item_menue,
                var_231: Gvar.var_231,
                var_234: Gvar.var_234,
                var_233_0_is_var_78_4: (Gvar as any).var_233[0] === (Gvar as any).var_78[4],
                var_78_4_0: (Gvar as any).var_78[4][0],
                var_78_4_Var0: (Gvar as any).var_78[4].Var0,
                var_983: Gvar.var_983,
                var_1082: Gvar.var_1082,
                var_1084: Gvar.var_1084,
                var_1096: Gvar.var_1096,
                var_1098: Gvar.var_1098,
                var_1100: Gvar.var_1100,
                var_1102: Gvar.var_1102,
                var_664: (Gvar as any).var_664,
                var_755: Gvar.var_755,
                var_198: Gvar.var_198,
                var_950: Gvar.var_950,
                func386: func386State,
                func256: func256State,
                func259: func259State,
                var_1678: Gvar.var_1678,
                var_1679: Gvar.var_1679,
                data0: Gvar.data0,
                data1: Gvar.data1,
                var_3574: Gvar.var_3574,
                var_3575: Gvar.var_3575,
                var_3576: Gvar.var_3576,
                var_3560: Gvar.var_3560,
                var_3562: Gvar.var_3562,
                y_axis_map_image: Gvar.y_axis_map_image,
                var_3573: Gvar.var_3573,
                var_3820: Gvar.var_3820,
                func0948: func0948State,
                func0950: func0950State,
                func0952: func0952State,
                var_3862: Gvar.var_3862,
                var_3819: Gvar.var_3819.slice(0, 20),
                var_3869: Gvar.var_3869,
                var_3870: Gvar.var_3870,
                var_3867: Gvar.var_3867,
                var_3868: Gvar.var_3868,
                var_217: Gvar.var_217,
                var_3864: Gvar.var_3864,
                var_3904: Gvar.var_3904,
                func0984: func0984State,
                func0961: func0961State,
                func0962: { var_3865: func0962Color },
                func0963: { var_3864: func0963Message },
                func0933: func0933State,
                func0979: func0979State,
                func0989: func0989State,
                func0990: { var_3865: func0990Color },
                var_3905: Gvar.var_3905,
                var_3906: Gvar.var_3906,
                func0999: {
                    var_3920: Gvar.var_3920,
                    var_3921: Gvar.var_3921,
                    var_3916: Gvar.var_3916,
                    var_3923: Gvar.var_3923,
                    var_3922: Gvar.var_3922,
                },
                func0900: func0900State,
                func0928: func0928State,
                traces: traces.map((entry) => entry.name),
                events: events.map((entry) => entry.kind),
                stats: getGeneratedGameFunctionStats(),
            };
        } finally {
            win.__NELISP_STATE_DIFF_FLAGS__ = previousFlags;
            win.__NELISP_STATE_DIFF_HOST_GLOBALS__ = previousHostGlobals;
            win.__NELISP_STATE_DIFF_TRACE__ = previousTrace;
            win.__NELISP_STATE_DIFF_EVENT_TRACE__ = previousEventTrace;
        }
    },

    async runNelispFunc023Smoke() {
        return this.runNelispGeneratedSmoke();
    },

    // ========== UI Render Helpers (for testing) ==========

    /** Open system settings menu inside game loop. cursor: 0-7 (var_899) */
    openSystemMenu(cursor: number = 0) {
        Gvar.var_899 = cursor;
        Gvar.var_900 = 0; Gvar.var_901 = 0; Gvar.var_902 = 0;
        Gvar.var_903 = 0; Gvar.var_904 = 0; Gvar.var_905 = 0;
        Gvar.lang_menu_open = 0;
        Gvar.var_509 = 1;
        // Fire-and-forget: jump into func193 which is the menu input loop
        Func.func193().catch(e => console.error('[debug] func193 error:', e));
        console.log(`[debug] system settings menu opened, cursor=${cursor}`);
    },

    /** Set the system menu cursor (var_899) directly while menu is open. */
    setMenuCursor(cursor: number) {
        Gvar.var_899 = cursor;
        console.log(`[debug] var_899 = ${cursor}`);
    },

    /** Open language sub-menu directly. cursor: 0=ja, 1=en */
    openLangMenu(cursor: number = 0) {
        Gvar.var_509 = 1;
        Gvar.var_899 = 7;
        Gvar.lang_menu_open = 1;
        Gvar.lang_cursor = cursor;
        Func.funcLangConfig().catch(e => console.error('[debug] funcLangConfig error:', e));
        console.log(`[debug] lang sub-menu opened, cursor=${cursor}`);
    },

    /** Close any open menu (back to game). */
    closeMenu() {
        Gvar.var_509 = 0;
        Gvar.var_499 = 0;
        Gvar.var_508 = 0;
        Gvar.var_195 = 0;
        Gvar.var_196 = 0;
        Gvar.lang_menu_open = 0;
        Gvar.var_900 = 0; Gvar.var_901 = 0; Gvar.var_902 = 0;
        Gvar.var_903 = 0; Gvar.var_904 = 0; Gvar.var_905 = 0;
        console.log(`[debug] menu closed`);
    },

    /**
     * Open main menu (2x2: 道具/足元/状態/設定).
     * itemId: 1=道具, 2=足元, 3=状態, 4=設定
     */
    openMainMenu(itemId: number = 1) {
        Gvar.var_195 = 1;
        Gvar.var_196 = 1; // Mフラグ:メニュー画面 Func.func054
        // itemId → (col, row) 逆算
        Gvar.var_247 = itemId <= 2 ? 1 : 2;  // 1,2:左 / 3,4:右
        Gvar.var_248 = itemId % 2 === 1 ? 1 : 2;  // 1,3:上 / 2,4:下
        Gvar.var_245 = Gvar.var_247 === 1 ? 19 : 19 + 48;
        Gvar.var_246 = Gvar.var_248 === 1 ? 45 : 45 + 18;
        Gvar.var_497 = itemId;
        Func.func053().catch(e => console.error('[debug] func053 error:', e));
        console.log(`[debug] main menu opened, item=${itemId}`);
    },

    /**
     * Open settings sub-menu (5項目: マップ/履歴/資料/システム/終了).
     * cursor: 0-4
     */
    openSettingsMenu(cursor: number = 0) {
        Gvar.var_499 = 1;
        Gvar.var_500 = cursor;
        Gvar.var_245 = 19;
        Gvar.var_246 = 45 + cursor * 16;
        Func.func055().catch(e => console.error('[debug] func055 error:', e));
        console.log(`[debug] settings menu opened, cursor=${cursor}`);
    },

    /**
     * Open library sub-menu (4項目: ハイスコア/コミックス/死因リスト/敵図鑑).
     * cursor: 0-3
     */
    openLibraryMenu(cursor: number = 0) {
        Gvar.var_508 = 1;
        Gvar.var_505 = cursor;
        Gvar.var_506 = 19;
        Gvar.var_507 = 45 + cursor * 16;
        Func.func057().catch(e => console.error('[debug] func057 error:', e));
        console.log(`[debug] library menu opened, cursor=${cursor}`);
    },

    // ========== Help ==========
    help() {
        console.log(`
=== newDTW Debug API ===
  debug.status()              - Show game state
  debug.godMode(true/false)   - Toggle invincibility
  debug.setHP(n)              - Set HP
  debug.setMaxHP(n)           - Set max HP
  debug.setSatiety(cur, max)  - Set hunger
  debug.setLevel(n)           - Set level
  debug.setGold(n)            - Set gold
  debug.getPos()              - Get position
  debug.teleport(x, y)        - Move player
  debug.enterDungeon(n)       - Force natural entry into real dungeon n (1-5)
  debug.spawnEnemy(id)        - Spawn enemy in front
  debug.killAllEnemies()      - Kill all enemies
  debug.giveItem(id)          - Add item to inventory
  debug.placeItem(id)         - Place item on ground
  debug.listInventory()       - Show inventory
  debug.setLang('en'/'ja')    - Switch language
  debug.setVar(num, value)    - Set any Gvar variable
  debug.getVar(num)           - Get any Gvar variable
  debug.gvar                  - Direct Gvar access
        `);
    },
};

// God mode hook: prevent HP from decreasing
const originalHP = Object.getOwnPropertyDescriptor(Gvar, 'var_236');
if (originalHP) {
    let _hp = Gvar.var_236;
    Object.defineProperty(Gvar, 'var_236', {
        get() { return _hp; },
        set(v) {
            if ((window as any).__godMode && v < _hp) return; // Block HP decrease
            _hp = v;
        },
        configurable: true,
    });
}

// Expose globally
(window as any).debug = debug;

export { debug };
