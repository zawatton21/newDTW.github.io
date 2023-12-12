import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func610(this: any) {
        Adap.dbgprt(610);
        if (Gvar.var_83[Gvar.var_673].Var12 >= 1 || Gvar.var_83[Gvar.var_673].Var13 == 1 || Gvar.var_83[Gvar.var_673].Var17 == 1 || Gvar.var_83[Gvar.var_673].Var23 == 1) {
            return;
        }
        Adap.gsel(19);
        Adap.color(255, 255, 255);

        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_529 = 1;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ｴﾝﾎﾟﾘｵは純粋酸素を大量に集めた！";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_403 = "酸素が細胞組織を破壊している！";
        Gvar.var_2217 = 1;
        Gvar.var_2196 = 1;
        Gvar.var_2194 = 1;
        Gvar.var_2852 = 20;
        if (Gvar.var_83[Gvar.var_673].Var39 >= 2) {
            Gvar.var_2852 = (Gvar.var_83[Gvar.var_673].Var39 - 1) * 2 + Gvar.var_2852;
        }
        Gvar.var_2876 = Gvar.var_2852;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_2194 != Gvar.var_124 && Gvar.var_2194 != Gvar.var_673) {
                Gvar.var_2220 = 0;
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2852;
                    await Func.func516();
                    await Func.func705();
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_2220 == 0) {
                    Gvar.var_1993 = Gvar.var_83[Gvar.var_673].Var1 - 1;
                    if (Gvar.var_1993 < 0) {
                        Gvar.var_1993 = 0;
                    }
                    Gvar.var_1994 = Gvar.var_83[Gvar.var_673].Var1 + 1;
                    if (Gvar.var_1994 > Gvar.var_33) {
                        Gvar.var_1994 = Gvar.var_33;
                    }
                    Gvar.var_1995 = Gvar.var_83[Gvar.var_673].Var2 + 1;
                    if (Gvar.var_1995 > Gvar.var_34) {
                        Gvar.var_1995 = Gvar.var_34;
                    }
                    Gvar.var_1996 = Gvar.var_83[Gvar.var_673].Var2 - 1;
                    if (Gvar.var_1996 < 0) {
                        Gvar.var_1996 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2852;
                        await Func.func516();
                        await Func.func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                    }
                }
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_529 = 0;
        Gvar.var_2196 = 0;
        Gvar.var_2217 = 0;
        Gvar.var_529 = 0;
        Gvar.var_747 = 1;
        Gvar.var_389 = 2;

        Adap.DSPLAY(104);
        Gvar.var_2852 = Gvar.var_2876;
        Gvar.var_209 = Gvar.var_2852;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
        Gvar.comments_row2 = "" + Gvar.var_2852 + "のダメージをうけた！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 251;
        }
        Gvar.var_389 = 0;
        Gvar.var_240 = 0;
        return;
}

export {func610}
