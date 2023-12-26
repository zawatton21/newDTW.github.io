import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 395 バイツァ・ダストの発動処理
async function item395(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "キラークィーン【第３の爆弾】";
        Gvar.comments_row2 = "「BITE THE DUST」（負けて死ね）！！";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
        }
        Gvar.var_2314 = 0;
        Gvar.var_2194 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            // No = 132 レクイエムジョルノ、No = 143 ウンガロでなければ
            // Ver0.1403にて追加。No = 171 離婚した承太郎
            if (Gvar.var_2194 != Gvar.var_124 && Gvar.var_83[Gvar.var_2194].Var0 != 132 && Gvar.var_83[Gvar.var_2194].Var0 != 143 && Gvar.var_83[Gvar.var_2231].Var0 != 171 && Gvar.var_83[Gvar.var_2194].Var0 != 34 && Gvar.var_83[Gvar.var_2194].Var31 != 4 && Gvar.var_83[Gvar.var_2194].Var31 != 5) {
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                    Gvar.var_83[Gvar.var_2194].Var12 = 0;
                    Gvar.var_83[Gvar.var_2194].Var13 = 0;
                    Gvar.var_83[Gvar.var_2194].Var24 = 3;
                    Gvar.var_2314 = 1;
                }
                if (Gvar.var_2220 == 0) {
                    Gvar.var_1993 = Gvar.var_66 - 1;
                    if (Gvar.var_1993 < 0) {
                        Gvar.var_1993 = 0;
                    }
                    Gvar.var_1994 = Gvar.var_66 + 1;
                    if (Gvar.var_1994 > Gvar.var_33) {
                        Gvar.var_1994 = Gvar.var_33;
                    }
                    Gvar.var_1995 = Gvar.var_67 + 1;
                    if (Gvar.var_1995 > Gvar.var_34) {
                        Gvar.var_1995 = Gvar.var_34;
                    }
                    Gvar.var_1996 = Gvar.var_67 - 1;
                    if (Gvar.var_1996 < 0) {
                        Gvar.var_1996 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                }
                if (Gvar.var_2220 == 0 && Gvar.var_201 <= 12 && Gvar.var_201 != 0) {
                    Gvar.var_2221 = Gvar.var_83[Gvar.var_2194].Var1;
                    Gvar.var_2222 = Gvar.var_83[Gvar.var_2194].Var2;
                    Gvar.var_2223 = Gvar.var_83[Gvar.var_2194].Var1 - 1;
                    if (Gvar.var_2223 < 0) {
                        Gvar.var_2223 = 0;
                    }
                    Gvar.var_2224 = Gvar.var_83[Gvar.var_2194].Var1 + 1;
                    if (Gvar.var_2224 > Gvar.var_33) {
                        Gvar.var_2224 = Gvar.var_33;
                    }
                    Gvar.var_2225 = Gvar.var_83[Gvar.var_2194].Var2 + 1;
                    if (Gvar.var_2225 > Gvar.var_34) {
                        Gvar.var_2225 = Gvar.var_34;
                    }
                    Gvar.var_2226 = Gvar.var_83[Gvar.var_2194].Var2 - 1;
                    if (Gvar.var_2226 < 0) {
                        Gvar.var_2226 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2223][Gvar.var_2222] == Gvar.var_201) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                        Gvar.var_83[Gvar.var_2194].Var12 = 0;
                        Gvar.var_83[Gvar.var_2194].Var13 = 0;
                        Gvar.var_83[Gvar.var_2194].Var24 = 3;
                        Gvar.var_2314 = 1;
                    }
                }
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        if (Gvar.var_2314 == 1) {
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "すでに「瞳」の中に入っている！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        if (Gvar.var_2314 == 0) {
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "しかし何もおこらなかった…";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item395}
