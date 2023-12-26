import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 580 ドッピオのdiscの効果
async function item580(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Gvar.item_message1 = "しかし何も起こらなかった…";
            return;
        }
        Gvar.var_144 = 1;
        Adap.DSPLAY(168);
        Gvar.var_1584 = 160;
        Gvar.var_1585 = 160;
        Gvar.var_271 = 1;
        Gvar.var_1583 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1583++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1583 = 0;
        Gvar.var_116 = 0;
        Gvar.var_114 = 0;
        Gvar.var_126 = 0;
        Gvar.var_134 = 0;
        Gvar.var_135 = 0;
        Gvar.var_136 = 0;
        Gvar.var_137 = 0;
        Gvar.var_177 = 0;
        if (Gvar.var_199 == 1) {
            Gvar.var_199 = 4;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_199 = 8;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_199 = 6;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_199 = 2;
        }
        return;
}

export {item580}

// ドッピオの変身が解除された時の表示
async function func031(this: any) {
    Adap.dbgprt(31);
    Adap.DSPLAY(123);
    Gvar.var_470 = 19;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_470 = 9;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_470 = 8;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_470 = 7;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_470 = 6;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_470 = 5;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_470 = 4;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_470 = 3;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_470 = 2;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_470 = 1;
    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_470 = 0;
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "変身が解除された";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func031}


// 記憶DISC「ドッピオ」を使用して一定のターンが経過した時のボスからの電話の処理
async function func041(this: any) {
    Adap.dbgprt(41);
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "ﾄﾞｯﾋﾟｵ「とぅるるるるるるるるるる」";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    await Func.func340(); // キー入力による選択処理
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "ﾄﾞｯﾋﾟｵ「ボスからの電話だッ！」";
    Gvar.comments_row2a = "";
    await Func.func050();
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    await Func.func340(); // キー入力による選択処理
    Gvar.var_144 = 91;
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "ﾄﾞｯﾋﾟｵ「もしもし」";
    Gvar.comments_row2a = "";
    await Func.func050();
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    await Func.func340(); // キー入力による選択処理
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "ﾄﾞｯﾋﾟｵ「早く来てください！ボス！」";
    Gvar.comments_row2a = "";
    await Func.func050();
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    await Func.func340(); // キー入力による選択処理
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "ﾄﾞｯﾋﾟｵ「・・・・・・・・」";
    Gvar.comments_row2a = "";
    await Func.func050();
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    await Func.func340(); // キー入力による選択処理
    Gvar.var_192 = Adap.rnd(4);
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "ﾄﾞｯﾋﾟｵ「わかりました！";
    if (Gvar.var_192 == 0) {
        Gvar.comments_row2a = "       １０ターン後ですねッ！」";
    }
    if (Gvar.var_192 == 1) {
        Gvar.comments_row2a = "       ２０ターン後ですねッ！」";
    }
    if (Gvar.var_192 == 2) {
        Gvar.comments_row2a = "       ３０ターン後ですねッ！」";
    }
    if (Gvar.var_192 == 3) {
        Gvar.comments_row2a = "   すぐ来てくれるんですねッ！」";
    }
    await Func.func050();
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_144 = 92;
    return;
}

export {func041}

// 記憶DISC「ドッピオ」を使用してドッピオに変身した時の処理s
async function func042(this: any) {
    Adap.dbgprt(42);
    Gvar.var_472 = 1;
    for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_472 = 0;
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "ﾄﾞｯﾋﾟｵと交代した。";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    Gvar.var_144 = 0;
    Gvar.var_199 = 2;
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func042}


