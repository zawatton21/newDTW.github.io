import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 714 アイテム「紫外線照射装置」を使用した時の効果
async function item714(this: any) {
        Gvar.var_2216 = Gvar.var_199;
        Gvar.var_199 = 2;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "そして　くらえッ！";
        Gvar.comments_row2 = "新しい対吸血鬼兵器！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Adap.DSPLAY(174);
        Gvar.var_1245 = 1;
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1245 = 2;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1245 = 3;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1245 = 4;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1245 = 7;
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "紫外線照射装置ィィィィィィィィィィ！！";
        Gvar.comments_row2a = "";
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Adap.DSPLAY(176);
        Gvar.var_1245 = 6;
        Adap.gsel(19);
        Adap.color(254, 254, 254);
        Adap.boxf(Gvar.left = 0, Gvar.top1 = 0, Gvar.right = 680, Gvar.bottom = 680);
        Adap.gsel(0);
        Gvar.var_529 = 2;
        Gvar.var_403 = "スカッとするぜーッ！！";
        Gvar.var_2217 = 1;
        Gvar.var_2194 = 1;
        Gvar.var_2196 = 3;
        Gvar.var_2195 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            Gvar.var_2218 = 999;
            Gvar.var_2219 = 0;
            if (Gvar.var_2194 != Gvar.var_124) {
                Gvar.var_2220 = 0;
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2218;
                    await Func.func516();
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
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func516();
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
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_71[Gvar.var_2223][Gvar.var_2222] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var31 == 2 && Gvar.var_83[Gvar.var_2194].Var0 != 111 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func516();
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
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_2220 == 0) {
            for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        Gvar.var_2196 = 0;
        Gvar.var_2195 = 0;
        Gvar.var_529 = 0;
        Gvar.var_2217 = 0;
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1245 = 5;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1245 = 4;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1245 = 3;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1245 = 2;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1245 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_199 = Gvar.var_2216;
        if (Gvar.var_2220 == 1) {
            Gvar.item_message1 = "スカッとするぜーッ！！";
        }
        return;
}

export {item714}
