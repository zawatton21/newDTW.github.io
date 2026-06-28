/**
 * test_scenarios.js — newDTW 自動テストシナリオ集
 *
 * Electronを起動し、シナリオを実行してスクリーンショットを取得。
 * 実行内容は Electron の main プロセスとして動く必要があるため、
 * `npx electron tools/test_scenarios.js <scenario>` で起動する。
 *
 * シナリオ:
 *   smoke    - 起動確認のみ (タイトル画面スクショ)
 *   menu     - システム設定メニュー全項目スクショ (cursor 0-7)
 *   lang     - 言語サブメニューを日本語/英語両方でスクショ
 *   i18n     - 設定メニューを日本語/英語両方でスクショ (i18n動作確認)
 *   nelisp   - generated state-diff bridge smoke in Electron renderer
 *
 * 出力: tools/screenshots/<scenario>_*.png
 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

const SCENARIO = process.argv[2] || 'smoke';
const SCREENSHOT_DIR = path.join(__dirname, 'screenshots');
const INIT_DELAY = 6000; // ゲーム起動 + i18n初期化待ち

if (!fs.existsSync(SCREENSHOT_DIR)) fs.mkdirSync(SCREENSHOT_DIR);

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

/** シナリオの実行結果を保存するヘルパー */
async function shot(win, name) {
    const img = await win.webContents.capturePage();
    const filepath = path.join(SCREENSHOT_DIR, `${SCENARIO}_${name}.png`);
    fs.writeFileSync(filepath, img.toPNG());
    console.log(`  saved: tools/screenshots/${SCENARIO}_${name}.png`);
}

/** ブラウザ側でJSを実行 */
async function exec(win, code) {
    return win.webContents.executeJavaScript(code, true);
}

/** キー押下状態をつくる (HSP由来のpushing_key_list[keyCode]=1方式) */
async function pressKey(win, keyCode, holdMs = 800) {
    await exec(win, `window.debug.gvar.pushing_key_list[${keyCode}] = 1`);
    await sleep(holdMs);
    await exec(win, `window.debug.gvar.pushing_key_list[${keyCode}] = 0`);
    await sleep(300);
}

/**
 * タイトル画面 → ログイン画面 → ゲーム本編フィールドまで進める。
 * 既存セーブデータがある前提 (Z/Aキー連打で「冒険に出る」を選ぶ)。
 */
async function skipToGame(win) {
    // 1st Z: タイトル → ログイン
    await pressKey(win, 90, 1500);
    await sleep(1500);
    // 2nd Z: ログイン → 冒険開始 (フロア紹介画面)
    await pressKey(win, 90, 800);
    await sleep(3000);
    // 3rd Z: フロア紹介 → フィールド
    await pressKey(win, 90, 500);
    await sleep(4000);
    // フィールド画面に到達したか確認
    const state = await exec(win, `({ var_509: window.debug.gvar.var_509, var_70: window.debug.gvar.var_70 })`);
    console.log(`  reached game: ${JSON.stringify(state)}`);
}

// ============ シナリオ定義 ============

/** スモークテスト: 起動確認のみ */
async function scenarioSmoke(win) {
    await sleep(INIT_DELAY);
    await shot(win, 'title');
    const ok = await exec(win, 'typeof window.debug === "object"');
    console.log(`  debug API available: ${ok}`);
}

async function scenarioNelisp(win) {
    await sleep(INIT_DELAY);
    const result = await exec(win, `window.debug.runNelispGeneratedSmoke()`);
    console.log(`  nelisp generated functions: ${JSON.stringify(result)}`);
    const func265Map = '#88888#4.....64.#.#.64.....6#22222#';
    const func0966Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 15, 17, 18, 18, 19];
    const func0966Text = `捨送,${func0966Array.join(',')},tail`;
    if (
        result.var_459 !== 0 ||
        result.var_128 !== 0 ||
        result.func024?.var_83_2_13 !== 0 ||
        result.func024?.var_83_2_Var13 !== 0 ||
        result.func062?.var_224 !== 1 ||
        result.func062?.var_233_1_0 !== 602 ||
        result.func062?.var_233_1_Var0 !== 602 ||
        result.var_471 !== 0 ||
        result.var_240 !== 0 ||
        result.var_221 !== 0 ||
        result.open_item_menue !== 0 ||
        result.var_231 !== 0 ||
        result.var_234 !== 0 ||
        result.var_233_0_is_var_78_4 !== true ||
        result.var_78_4_0 !== 1234123 ||
        result.var_78_4_Var0 !== 1234123 ||
        result.var_983 !== func265Map ||
        result.var_1082 !== 7 ||
        result.var_1084 !== 5 ||
        result.var_1096 !== 5 ||
        result.var_1098 !== 5 ||
        result.var_1100 !== 3 ||
        result.var_1102 !== 3 ||
        JSON.stringify(result.var_664) !== JSON.stringify({ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, Var1: 1, Var2: 2, Var3: 3, Var4: 4, Var5: 5, Var6: 6, Var7: 7, Var8: 8, Var9: 9, Var10: 10 }) ||
        result.var_755 !== 0 ||
        result.var_198 !== 0 ||
        result.var_950 !== 11 ||
        result.func386?.var_78_5_0 !== 641 ||
        result.func386?.var_78_5_Var0 !== 641 ||
        result.func256?.var_1082 !== 12 ||
        result.func256?.var_1084 !== 10 ||
        result.func256?.var_1096 !== 1 ||
        result.func256?.var_1098 !== 1 ||
        result.func256?.var_1100 !== 1 ||
        result.func256?.var_1102 !== 1 ||
        result.func256?.var_983 !== '#'.repeat(120) ||
        result.func259?.var_1082 !== 9 ||
        result.func259?.var_1084 !== 9 ||
        result.func259?.var_1096 !== 7 ||
        result.func259?.var_1098 !== 7 ||
        result.func259?.var_1100 !== 7 ||
        result.func259?.var_1102 !== 7 ||
        result.func259?.var_983 !== '#8888888#4.......64.#.#.#.64.......64.#.#.#.64.......64.#.#.#.64.......6#2222222#' ||
        result.var_1678 !== 3 ||
        result.var_1679 !== 1 ||
        result.data0 !== 13 ||
        result.data1 !== 13 ||
        result.var_3574 !== 0 ||
        result.var_3575 !== 'ﾀﾞﾝｼﾞｮﾝと同じ\n必ず生まれる\n生まれない' ||
        result.var_3576 !== 1 ||
        result.var_3560 !== 0 ||
        result.var_3562 !== 2 ||
        result.y_axis_map_image !== 2 ||
        result.var_3573 !== 0 ||
        result.var_3820 !== '話文abc' ||
        result.func0948?.var_3812 !== 138 ||
        result.func0948?.belongings_item_list !== 122 ||
        result.func0948?.buying_price !== 1000 ||
        result.func0948?.item_name !== 'ｱﾇﾋﾞｽ神のDISC' ||
        result.func0950?.var_3812 !== 28 ||
        result.func0950?.var_888 !== 1 ||
        !['ｾﾄ神の罠', 'Seth Trap'].includes(result.func0950?.var_889) ||
        result.func0952?.var_3812 !== 81 ||
        result.func0952?.enemy_list !== 79 ||
        !['ｴｺｰｽﾞの卵', 'Echoes Egg'].includes(result.func0952?.enemy_name) ||
        result.var_3862 !== 'G･E･ﾚｸｲｴﾑのDISC' ||
        JSON.stringify(result.var_3819) !== JSON.stringify(func0966Array) ||
        result.var_3869 !== 20 ||
        result.var_3870 !== func0966Text ||
        result.var_3867 !== 1 ||
        result.var_3868 !== 1 ||
        result.var_217 !== 1 ||
        result.var_3864 !== '行橙ﾃﾞｨｱﾎﾞﾛは絶頂の世界に向かった' ||
        result.var_3904 !== '絶頂' ||
        result.func0984?.var_509 !== 0 ||
        result.func0984?.var_499 !== 0 ||
        result.func0961?.var_3864 !== '行水やっつけた' ||
        result.func0961?.var_3866 !== '行黄モンスターハウスだ！' ||
        result.func0962?.var_3865 !== '行緑' ||
        result.func0963?.var_3864 !== '行橙ﾃﾞｨｱﾎﾞﾛは14階に上った' ||
        result.func0933?.var_3766 !== 14 ||
        result.func0979?.var_3888 !== '31,39,13,14,15,17,19,20,23,24,30' ||
        result.func0979?.var_3864 !== '倒敵31,39,13,14,15,17,19,20,23,24,30' ||
        result.func0979?.var_82_11_12 !== 0 ||
        result.func0979?.var_83_7_Var0 !== 0 ||
        result.func0979?.var_83_7_Var1 !== 0 ||
        result.func0979?.var_83_7_Var2 !== 0 ||
        result.func0979?.var_3887 !== 1 ||
        result.func0989?.var_3864 !== '行水やっつけた' ||
        result.func0989?.var_3866 !== '行黄西戸ハウスだ！' ||
        result.func0990?.var_3865 !== '行黄' ||
        result.var_3905 !== '７' ||
        result.var_3906 !== '窓数７' ||
        result.func0999?.var_3920 !== 10 ||
        result.func0999?.var_3921 !== 10 ||
        result.func0999?.var_3916 !== 2 ||
        result.func0999?.var_3923 !== 6 ||
        result.func0999?.var_3922 !== 10 ||
        result.func0900?.var_3510 !== 353 ||
        result.func0900?.var_3542 !== 545 ||
        result.func0900?.var_3543 !== 198 ||
        result.func0900?.var_3562 !== 2 ||
        result.func0900?.var_3565 !== 6 ||
        result.func0900?.var_3544 !== 1 ||
        result.func0900?.var_626 !== 1 ||
        result.func0928?.var_199 !== 2 ||
        result.func0928?.var_66 !== 44 ||
        result.func0928?.var_67 !== 55 ||
        result.func0928?.var_3572 !== 1 ||
        result.func0928?.var_83_len !== 300 ||
        result.func0928?.var_78_len !== 300
    ) {
        throw new Error(`generated state diff was not applied: ${JSON.stringify(result)}`);
    }
    for (const name of ['func023', 'func024', 'func062', 'func027', 'func028', 'func029', 'func030', 'func031', 'func033', 'func034', 'func035', 'func036', 'func037', 'func038', 'func039', 'func040', 'func042', 'func071', 'func163b', 'func243', 'func245', 'func265', 'func293', 'func294', 'func295', 'func296', 'func297', 'func298', 'func299', 'func300', 'func301', 'func302', 'func303', 'func304', 'func305', 'func306', 'func307', 'func308', 'func309', 'func310', 'func311', 'func312', 'func313', 'func314', 'func315', 'func316', 'func317', 'func318', 'func319', 'func320', 'func321', 'func322', 'func371', 'func0900', 'func0901', 'func0902', 'func0903', 'func0904', 'func0905', 'func0906', 'func0907', 'func0909', 'func0911', 'func0915', 'func0916', 'func0917', 'func0920', 'func0924', 'func0926', 'func0927', 'func0928', 'func0933', 'func0979', 'func0939', 'func0948', 'func0950', 'func0952', 'func0955', 'func0956', 'func0959', 'func0961', 'func0962', 'func0963', 'func0964', 'func0965', 'func0966', 'func0973', 'func0974', 'func0977', 'func0981', 'func0983', 'func0984', 'func0987', 'func0989', 'func0990', 'func0991', 'func0992', 'func0993', 'func0999', 'func1005', 'func205', 'func206', 'func207', 'func217', 'func431', 'func335', 'func336', 'func258', 'func260', 'func261', 'func262', 'func263', 'func264', 'func266', 'func267', 'func268', 'func269', 'func270', 'func271', 'func272', 'func273', 'func274', 'func275', 'func276', 'func277', 'func278', 'func279', 'func280', 'func281', 'func282', 'func283', 'func284', 'func285', 'func286', 'func287', 'func679', 'func386', 'func256', 'func259', 'func194', 'func195', 'func196', 'func477', 'func481']) {
        if (!result.traces.includes(name)) {
            throw new Error(`${name} generated bridge was not traced: ${JSON.stringify(result)}`);
        }
        const expectedCount = name === 'func0962' ? 3 : name === 'func0990' ? 3 : 1;
        if (result.stats?.byName?.[name] !== expectedCount) {
            throw new Error(`${name} generated bridge stats were not recorded: ${JSON.stringify(result)}`);
        }
    }
    if (result.stats?.total !== 148 || result.stats?.lastName !== 'func0900') {
        throw new Error(`generated bridge stats summary was not recorded: ${JSON.stringify(result)}`);
    }
    for (const eventName of ['dtw-debug-print', 'dtw-play-sound', 'game-set-message', 'game-auto-draw', 'game-draw-frame', 'dtw-clear-objects', 'dtw-object-size', 'dtw-set-position', 'dtw-combo-box', 'dtw-button', 'dtw-redraw', 'dtw-wait', 'dtw-read-key-state', 'dtw-dialog', 'music-call', 'dtw-on-exit', 'dtw-set-blend-mode', 'dtw-draw-image', 'dtw-set-color', 'dtw-fill-rect', 'dtw-set-font', 'dtw-draw-text', 'dtw-object-select', 'dtw-show-window', 'dtw-dim', 'dtw-string-dim', 'charactor-info-dim', 'item-info-dim', 'index-set', 'state-string-concat', 'dtw-tcp-put', 'dtw-select-buffer', 'dtw-object-parameter', 'dtw-resize-window', 'menu-run', 'menu-render', 'console-log']) {
        if (!result.events.includes(eventName)) {
            throw new Error(`${eventName} adapter event was not dispatched: ${JSON.stringify(result)}`);
        }
    }
}

/** システム設定メニュー全項目のカーソル位置 */
async function scenarioMenu(win) {
    await sleep(INIT_DELAY);
    await skipToGame(win);
    await exec(win, `window.debug.openSystemMenu(0)`);
    await sleep(1500);
    for (let i = 0; i <= 7; i++) {
        await exec(win, `window.debug.setMenuCursor(${i})`);
        await sleep(500);
        await shot(win, `cursor_${i}`);
    }
}

/** 言語サブメニュー (日本語/英語) */
async function scenarioLang(win) {
    await sleep(INIT_DELAY);
    await skipToGame(win);
    // 日本語
    await exec(win, `window.debug.setLang('ja')`);
    await sleep(300);
    await exec(win, `window.debug.openLangMenu(0)`);
    await sleep(1500);
    await shot(win, 'ja');
    // 英語
    await exec(win, `window.debug.setLang('en')`);
    await sleep(500);
    await exec(win, `window.debug.openLangMenu(0)`);
    await sleep(1500);
    await shot(win, 'en');
}

/** i18n動作確認: 設定メニューを両言語でスクショ */
async function scenarioI18n(win) {
    await sleep(INIT_DELAY);
    await skipToGame(win);
    // 日本語
    await exec(win, `window.debug.setLang('ja')`);
    await sleep(300);
    await exec(win, `window.debug.openSystemMenu(0)`);
    await sleep(1500);
    await shot(win, 'menu_ja');
    // 英語に切替
    await exec(win, `window.debug.setLang('en')`);
    await sleep(500);
    await exec(win, `window.debug.openSystemMenu(0)`);
    await sleep(1500);
    await shot(win, 'menu_en');
}

/** メインメニュー (2x2 道具/足元/状態/設定) の全位置 */
async function scenarioMain(win) {
    await sleep(INIT_DELAY);
    await skipToGame(win);
    const labels = { 1: 'items', 2: 'ground', 3: 'status', 4: 'settings' };
    for (let i = 1; i <= 4; i++) {
        await exec(win, `window.debug.closeMenu(); window.debug.openMainMenu(${i})`);
        await sleep(1200);
        await shot(win, `main_${i}_${labels[i]}`);
    }
}

/** 設定サブメニュー全項目 (マップ/履歴/資料/システム/終了) */
async function scenarioSettings(win) {
    await sleep(INIT_DELAY);
    await skipToGame(win);
    const labels = { 0: 'map', 1: 'history', 2: 'library', 3: 'system', 4: 'exit' };
    for (let i = 0; i <= 4; i++) {
        await exec(win, `window.debug.closeMenu(); window.debug.openSettingsMenu(${i})`);
        await sleep(1200);
        await shot(win, `settings_${i}_${labels[i]}`);
    }
}

/** 資料サブメニュー全項目 (ハイスコア/コミックス/死因/敵図鑑) */
async function scenarioLibrary(win) {
    await sleep(INIT_DELAY);
    await skipToGame(win);
    const labels = { 0: 'highscore', 1: 'comics', 2: 'deathlist', 3: 'enemybook' };
    for (let i = 0; i <= 3; i++) {
        await exec(win, `window.debug.closeMenu(); window.debug.openLibraryMenu(${i})`);
        await sleep(1200);
        await shot(win, `library_${i}_${labels[i]}`);
    }
}

/**
 * 全メニュー回帰テスト: 主要メニューを順に開き、エラーが起きないことを確認。
 * リファクタの安全網 (各メニューが描画できれば成功とみなす)。
 */
async function scenarioAll(win) {
    await sleep(INIT_DELAY);
    await skipToGame(win);
    const steps = [
        { name: 'main_items',    cmd: `window.debug.closeMenu(); window.debug.openMainMenu(1)` },
        { name: 'main_settings', cmd: `window.debug.closeMenu(); window.debug.openMainMenu(4)` },
        { name: 'settings_map',  cmd: `window.debug.closeMenu(); window.debug.openSettingsMenu(0)` },
        { name: 'settings_lib',  cmd: `window.debug.closeMenu(); window.debug.openSettingsMenu(2)` },
        { name: 'settings_sys',  cmd: `window.debug.closeMenu(); window.debug.openSettingsMenu(3)` },
        { name: 'system_speed',  cmd: `window.debug.closeMenu(); window.debug.openSystemMenu(0)` },
        { name: 'system_lang',   cmd: `window.debug.closeMenu(); window.debug.openSystemMenu(7)` },
        { name: 'library_hs',    cmd: `window.debug.closeMenu(); window.debug.openLibraryMenu(0)` },
        { name: 'lang_en',       cmd: `window.debug.setLang('en'); window.debug.closeMenu(); window.debug.openSystemMenu(0)` },
        { name: 'lang_ja',       cmd: `window.debug.setLang('ja'); window.debug.closeMenu(); window.debug.openSystemMenu(0)` },
    ];
    for (const step of steps) {
        await exec(win, step.cmd);
        await sleep(900);
        await shot(win, step.name);
    }
}

const scenarios = {
    smoke: scenarioSmoke,
    nelisp: scenarioNelisp,
    menu: scenarioMenu,
    lang: scenarioLang,
    i18n: scenarioI18n,
    main: scenarioMain,
    settings: scenarioSettings,
    library: scenarioLibrary,
    all: scenarioAll,
};

// ============ Electron起動 ============

app.whenReady().then(async () => {
    const fn = scenarios[SCENARIO];
    if (!fn) {
        console.error(`unknown scenario: ${SCENARIO}`);
        console.error(`available: ${Object.keys(scenarios).join(', ')}`);
        app.exit(1);
        return;
    }

    const win = new BrowserWindow({
        width: 340, height: 340,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            devTools: false,
        },
        show: false,
    });

    const errors = [];
    win.webContents.on('console-message', (_e, level, msg) => {
        if (level >= 2 && !msg.includes('Error in exist function')) {
            errors.push(`[L${level}] ${msg.substring(0, 200)}`);
        }
    });

    win.loadFile(path.join(__dirname, '..', 'public', 'index.html'));

    console.log(`[TEST] Running scenario: ${SCENARIO}`);
    try {
        await fn(win);
    } catch (e) {
        console.error(`[TEST] scenario error:`, e && (e.stack || e.message) || e);
    }

    if (errors.length) {
        console.log(`\n[TEST] Errors caught (${errors.length}):`);
        errors.slice(-10).forEach(e => console.log(`  ${e}`));
    }

    console.log(`[TEST] Done.`);
    app.exit(0);
});
