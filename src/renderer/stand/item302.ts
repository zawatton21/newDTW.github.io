import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 302 ハイウェイ・トゥ・ヘルの発動処理
async function item302(this: any) {
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
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "オレって情けねえよなあ～～～。";
        Gvar.comments_row2 = "死にたくなった･･･";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1054 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Adap.DSPLAY(136);
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            Gvar.var_1054 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1054 = 3;
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_211 == 1) {
            Gvar.var_211 = 0;
            Gvar.var_212 = 1;
            Gvar.var_356 = 247;
            Gvar.var_199 = 2;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        if (Gvar.var_211 > 1) {
            Gvar.var_211 = Math.floor(Gvar.var_211 / 2);
            Gvar.var_208 = Math.floor(Gvar.var_211 / 2) + Gvar.var_208;
        }
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_2307 = 0;
        Gvar.var_403 = "道連れにしている！";
        Gvar.var_2217 = 1;
        Gvar.var_2194 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            Gvar.var_2308 = Gvar.var_565 * 2;
            Gvar.var_2219 = Adap.rnd(3);
            Gvar.var_2308 = Gvar.var_2308 + Gvar.var_2219;
            if (Gvar.var_172 >= 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.var_2308 = Gvar.var_2308 * 2;
            }
            if (Gvar.var_2194 != Gvar.var_124) {
                Gvar.var_2220 = 0;
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
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
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
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
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2308;
                        Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                }
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        Gvar.var_1054 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_2217 = 0;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item302}


// ハイウェイ・トゥ・ヘルの発動処理(移動中の自動発動)
async function func534(this: any) {
    Adap.dbgprt(534);
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "オレって情けねえよなあ～～～。";
    Gvar.comments_row2 = "死にたくなった･･･";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_1054 = 1;
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Adap.DSPLAY(136);
    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
        Gvar.var_1054 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1054 = 3;
        await Func.func337(); // メッセージ関係呼び出し
    }
    if (Gvar.var_211 == 1) {
        Gvar.var_211 = 0;
        Gvar.var_212 = 1;
        Gvar.var_356 = 247;
        Gvar.var_199 = 2;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    if (Gvar.var_211 > 1) {
        Gvar.var_211 = Math.floor(Gvar.var_211 / 2);
        Gvar.var_208 = Math.floor(Gvar.var_211 / 2) + Gvar.var_208;
    }
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_2307 = 0;
    Gvar.var_403 = "道連れにしている！";
    Gvar.var_2217 = 1;
    Gvar.var_2194 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
        Gvar.var_2308 = Gvar.var_565 * 2;
        Gvar.var_2219 = Adap.rnd(3);
        Gvar.var_2308 = Gvar.var_2308 + Gvar.var_2219;
        if (Gvar.var_172 >= 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
            Gvar.var_2308 = Gvar.var_2308 * 2;
        }
        if (Gvar.var_2194 != Gvar.var_124) {
            Gvar.var_2220 = 0;
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                Gvar.var_402 = Gvar.var_2194;
                Gvar.var_209 = Gvar.var_2308;
                Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                await Func.func705();
                for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_2220 = 1;
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
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
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
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2308;
                    Gvar.var_2307 = Gvar.var_2307 + Gvar.var_2308;
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
            }
        }
        Gvar.var_2194 = Gvar.var_2194 + 1;
    }
    Gvar.var_1054 = 0;
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_2217 = 0;
    return;
}

export {func534}
