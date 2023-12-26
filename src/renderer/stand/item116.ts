import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 116 ハーミットパープルの発動能力
async function item116(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_1940 = Gvar.var_199;
        Gvar.var_199 = 2;
        Gvar.var_1258 = 3;
        Adap.DSPLAY(127);
        Gvar.var_271 = 1;
        Gvar.var_1480 = 1;
        for (let cnt2 = 0; cnt2 < 14; ++cnt2) {
            Gvar.var_1480++;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_271 = 0;
        Gvar.var_1480 = 0;
        Gvar.var_1258 = 0;
        Gvar.var_175 = 0;
        Gvar.var_176 = 0;
        Gvar.var_2268 = 0;
        Gvar.var_2269 = 0;
        Gvar.var_2270 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            // Gvar.enemy_list = 113 DIO
            if (Gvar.var_83[Gvar.var_2270].Var0 == 113) {
                Gvar.var_2271 = Adap.rnd(20);
                if (Gvar.var_2271 >= 10) {
                    Gvar.var_2269 = Gvar.var_2270;
                    break;
                }
            }
            // Gvar.enemy_list = 115 アクア・ネックレス
            if (Gvar.var_83[Gvar.var_2270].Var0 == 115) {
                Gvar.var_2271 = Adap.rnd(20);
                if (Gvar.var_2271 >= 10) {
                    Gvar.var_2268 = Gvar.var_2270;
                    break;
                }
            }
            Gvar.var_2270++;
        }
        if (Gvar.var_2268 == 0 && Gvar.var_2269 == 0) {
            Adap.DSPLAY(184);
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "この階の地図を念写した！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            Gvar.var_102 = 1;
        }
        if (Gvar.var_2269 >= 1) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "「きさま、見ているなッ！！」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.var_176 = Gvar.var_2269;
            Gvar.var_198 = 0;
        }
        if (Gvar.var_2268 >= 1) {
            Adap.DSPLAY(184);
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "この階のｱｸｱ･ﾈｯｸﾚｽを念写した！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.var_175 = Gvar.var_2268;
            Gvar.var_198 = 0;
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_199 = Gvar.var_1940;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item116}

// 幻覚の迷宮でハーミットパープルを発動したときの処理
async function func325(this: any) {
    Adap.dbgprt(325);
    if (Gvar.var_490 == 1) {
        Adap.color(0, 0, 0);

        Adap.boxf(0, 0, 680, 680);
    }
    if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
        return;
    }
    if (Gvar.special_floor == 7 && Gvar.var_132 == 0) { // 広大な砂漠
        if (Gvar.var_490 == 1) {
            Adap.pos(70, 150);
    
            Adap.font(Gvar.font_type = "ＭＳ Ｐゴシック", Gvar.font_size = 16, Gvar.font_style = 1);
            Adap.color(255, 255, 255);
            Adap.mes("ここでは地図が役に立たない！");
        }
        return;
    }
    if (Gvar.var_501 == 0 || Gvar.var_490 == 1) {
        Adap.color(0, 0, 0);
        Gvar.var_1156 = 10;
        Gvar.var_1157 = 0;
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
            Gvar.var_1158 = 0;
            Gvar.var_1159 = 15;
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                Adap.pos(Gvar.var_1158, Gvar.var_1156);
                Adap.gmode(4, null, null, Gvar.var_690);
                if (Gvar.y_axis_map_image == 7 || Gvar.y_axis_map_image == 13 || Gvar.y_axis_map_image == 19 || Gvar.y_axis_map_image == 24) {
                    Gvar.var_1160 = Gvar.var_690 + 20;
                    if (Gvar.var_1160 >= 255) {
                        Gvar.var_1160 = 255;
                    }
                    Adap.gmode(4, null, null, Gvar.var_1160);
                }
                if (Gvar.var_490 == 1) {
                    Adap.gmode(2, null, null, null);
                }
                Adap.gcopy(4, Gvar.var_1159, Gvar.var_1157, 40, 40);
        
                Adap.gmode(4, null, null, 200);
                if (Gvar.var_490 == 1) {
                    Adap.gmode(2, null, null, null);
                }
                Adap.gcopy(7, Gvar.var_1159, Gvar.var_1157, 40, 40);
                Gvar.var_1159 = Gvar.var_1159 + 40;
                Gvar.var_1158 = Gvar.var_1158 + 40;
            }
            Gvar.var_1157 = Gvar.var_1157 + 40;
            Gvar.var_1156 = Gvar.var_1156 + 40;
        }
    }
    return;
}

export {func325}

// ハーミットパープルを発動後、地図作成を防がれた相手を倒した時の処理
async function func703(this: any) {
    Adap.dbgprt(703);
    if (Gvar.var_175 >= 1 && Gvar.var_314 == Gvar.var_175) {
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "やっつけたｱｸｱ･ﾈｯｸﾚｽは";
        Gvar.comments_row2a = "念写したヤツだったようだ。";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        Gvar.var_175 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    }
    if (Gvar.var_176 >= 1 && Gvar.var_314 == Gvar.var_176) {
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "やっつけたDIOは";
        Gvar.comments_row2a = "念写したヤツだったようだ。";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        Gvar.var_176 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    }
    return;
}

export {func703}
