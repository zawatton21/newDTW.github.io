import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Stand from '../stand/index'
import * as Main from '../newdtw/index'

// No = 108 スティッキー・フィンガーズの発動処理
async function item108(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_570 == 0) {
            Gvar.bufferid_stand_disc = 11; //Adap.buffer(11)は"img_stand0.gif"
        }
        if (Gvar.var_570 == 1) {
            Gvar.bufferid_stand_disc = 1; // Adap.buffer(1)は"img_stand1.gif"
        }
        if (Gvar.var_570 == 2) {
            Gvar.bufferid_stand_disc = 16; // Adap.buffer(16)は"img_stand2.gif"
        }
        if (Gvar.var_570 == 3) {
            Gvar.bufferid_stand_disc = 29; // Adap.buffer(29)は"img_stand3.gif"
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "こいつ自身に見せつけるしかねえッ！";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_199 = 2;
        Gvar.var_1600 = 1;
        Gvar.var_271 = 1;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_1600 == 3) {
                Gvar.var_389 = 2;

                Adap.DSPLAY(105);
                Gvar.var_747 = 1;
            }
            Gvar.var_1600++;
        }
        Gvar.var_1600 = 0;
        Gvar.var_271 = 0;
        Gvar.var_389 = 0;
        Gvar.var_471 = 2;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func051();
        Adap.DSPLAY(148);
        Gvar.var_747 = 1;
        Gvar.var_1212 = 1;
        Gvar.var_108 = 1;
        Gvar.var_471 = 3;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_471 = 4;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_471 = 5;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_471 = 6;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_471 = 7;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_471 = 8;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_471 = 0;
        Gvar.var_1212 = 0;
        Gvar.var_108 = 0;
        Gvar.var_218 = 30;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「覚悟」ってのはこういうことだぜ…";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item108}

// スティッキーフィンガーズの発動効果持続中の動作処理
async function func032(this: any) {
    Adap.dbgprt(32);
    await Func.func080(); // 各キー入力確認
    // Ver0.1401にて「Gvar.key_F_on == 1」を追加
    if (Gvar.key_Z_on == 1 || Gvar.key_X_on == 1 || Gvar.key_A_on == 1 || Gvar.key_S_on == 1 || Gvar.key_F_on == 1) {
        Gvar.var_218 = 0;
        await Stand.func033(); // スティッキーフィンガーズの発動効果が切れた時の表示
        return;
    }
    if (Gvar.var_218 == 51) {
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
        Gvar.comments_row1 = "意識が…　ヤバクなって来た…";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
    }
    if (Gvar.var_218 >= 51) {
        Gvar.var_211 = Gvar.var_211 - 1;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 283;
            return;
        }
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            await Func.func080(); // 各キー入力確認
            // Ver0.1401にて「Gvar.key_F_on == 1」を追加
            if (Gvar.key_Z_on == 1 || Gvar.key_X_on == 1 || Gvar.key_A_on == 1 || Gvar.key_S_on == 1 || Gvar.key_F_on == 1) {
                Gvar.var_218 = 0;
                await Stand.func033(); // スティッキーフィンガーズの発動効果が切れた時の表示
                break;
            }
        }
    }
    if (Gvar.var_218 >= 51 && Gvar.shageki_disc_id == 403 && Gvar.var_211 == 2) {
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
        Gvar.comments_row1 = "ﾋﾟｽﾄﾙｽﾞ「早く【ジッパー】デ";
        Gvar.comments_row2 = "　　　　体ヲ元ニ戻スンダ――――ッ！」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
    }
    return;
}

export {func032}

// スティッキーフィンガーズの発動効果が切れた時の表示
async function func033(this: any) {
    Adap.dbgprt(33);
    Gvar.var_471 = 9;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_471 = 10;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_471 = 2;
    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_471 = 1;
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
    Gvar.comments_row1 = "元通りくっついた";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_471 = 0;
    return;
}

export {func033}
