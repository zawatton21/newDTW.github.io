import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 109 マジシャンズレッドの発動処理
async function item109(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "発動能力がパワーアップしている！";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
        }
        Gvar.var_199 = 2;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_271 = 1;
        Gvar.var_1545 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1545 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1545 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1545 = 4;
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
        Gvar.comments_row1 = "クロスファイヤーハリケーンスペシャル！";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Adap.gsel(19);
        Adap.color(255, 0, 0);

        Adap.boxf(Gvar.left = 0, Gvar.top1 = 0, Gvar.right = 680, Gvar.bottom = 680);
        Adap.gsel(0);
        Gvar.var_529 = 1;

        Adap.DSPLAY(128);
        Gvar.var_1548 = 7;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1548 = 8;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
    
            Adap.DSPLAY(128);
            Gvar.var_1548 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1548 = 2;
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1548 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            for (let cnt3 = 0; cnt3 < 300; ++cnt3) {
                Gvar.var_1550 = Adap.rnd(Gvar.var_33);
                Gvar.var_230 = Adap.rnd(Gvar.var_34);
                if (Gvar.var_71[Gvar.var_1550][Gvar.var_230] == Gvar.var_201 && Gvar.var_82[Gvar.var_1550][Gvar.var_230] != 0 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] != 14) {
                    Gvar.var_421 = Gvar.var_82[Gvar.var_1550][Gvar.var_230];
                    Gvar.var_271 = 1;
                    Gvar.var_1549 = 1;
                    for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                        Gvar.var_1549++;
                    }
                    Gvar.var_1549 = 0;
                    Gvar.var_403 = "クロスファイヤーハリケーンスペシャル！";
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var0;
                    await Func.func626(); // 敵リスト
                    Gvar.var_402 = Gvar.var_421;
                    Gvar.var_314 = Gvar.var_421;
                    Gvar.var_209 = Gvar.var_565 * 5;
                    Gvar.var_2219 = Adap.rnd(3);
                    Gvar.var_209 = Gvar.var_209 + Gvar.var_2219;
                    if (Gvar.var_172 >= 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                        Gvar.var_209 = Gvar.var_209 * 2;
                    }
                    await Func.func705();
                    break;
                }
                if (Gvar.var_71[Gvar.var_1550][Gvar.var_230] == Gvar.var_201 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_65[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_82[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_71[Gvar.var_1550][Gvar.var_230] != 14) {
                    Gvar.var_271 = 1;
                    Gvar.var_1549 = 1;
                    for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                        Gvar.var_1549++;
                    }
                    Gvar.var_1549 = 0;
                    Gvar.var_768 = 1;
                    Gvar.var_2274 = 1;
                    await Func.func536();
                    Gvar.var_1396 = Gvar.var_1550;
                    Gvar.var_1397 = Gvar.var_230;
                    Gvar.var_1547 = 1;
                    Gvar.var_271 = 1;
            
                    Adap.DSPLAY(128);
                    for (let cnt5 = 0; cnt5 < 7; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                        Gvar.var_1547++;
                    }
                    Gvar.var_1547 = 0;
                    Gvar.var_768 = 0;
                    Gvar.var_2274 = 0;
                    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                    break;
                }
            }
        }
        Gvar.var_1545 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1545 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1545 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1545 = 0;
        Gvar.var_271 = 0;
        Gvar.var_529 = 0;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item109}
