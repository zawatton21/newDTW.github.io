import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func650(this: any) {
        Adap.dbgprt(650);
        Gvar.var_1396 = Gvar.var_455;
        Gvar.var_1397 = Gvar.var_456;
        Gvar.var_3000 = Gvar.var_455;
        Gvar.var_3001 = Gvar.var_456;
        Gvar.var_3004 = Gvar.var_3001 + 8;
        if (Gvar.var_3001 > Gvar.var_3004) {
            Gvar.var_3001 = 8;
        }
        Gvar.var_1195 = 0;
        Gvar.var_3005 = Adap.dim(300);
        Gvar.var_3006 = 1;
        Gvar.var_3007 = 0;
        Gvar.var_3008 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_3011 = 0;
            Gvar.var_3012 = 0;
            if (Gvar.var_201 != 0 && Gvar.var_201 != 13 && Gvar.var_201 != 14) {
                if (Gvar.var_83[Gvar.var_3006].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_3006].Var0 != 0 && Gvar.var_83[Gvar.var_3006].Var0 != 50 && Gvar.var_83[Gvar.var_3006].Var31 != 4 && Gvar.var_83[Gvar.var_3006].Var31 != 5) {
                    Gvar.var_3005[Gvar.var_3007] = Gvar.var_3006;
                    Gvar.var_3007++;
                    Gvar.var_3008++;
                }
                if (Gvar.var_83[Gvar.var_3006].Var10 == 14 && Gvar.var_83[Gvar.var_3006].Var0 != 0 && Gvar.var_83[Gvar.var_3006].Var0 != 50 && Gvar.var_83[Gvar.var_3006].Var31 != 4 && Gvar.var_83[Gvar.var_3006].Var31 != 5) {
                    Gvar.var_2747 = Gvar.var_83[Gvar.var_3006].Var1;
                    Gvar.var_2748 = Gvar.var_83[Gvar.var_3006].Var2;
                    Gvar.var_1993 = Gvar.var_83[Gvar.var_3006].Var1 - 1;
                    if (Gvar.var_1993 < 0) {
                        Gvar.var_1993 = 0;
                    }
                    Gvar.var_1994 = Gvar.var_83[Gvar.var_3006].Var1 + 1;
                    if (Gvar.var_1994 > Gvar.var_33) {
                        Gvar.var_1994 = Gvar.var_33;
                    }
                    Gvar.var_1995 = Gvar.var_83[Gvar.var_3006].Var2 + 1;
                    if (Gvar.var_1995 > Gvar.var_34) {
                        Gvar.var_1995 = Gvar.var_34;
                    }
                    Gvar.var_1996 = Gvar.var_83[Gvar.var_3006].Var2 - 1;
                    if (Gvar.var_1996 < 0) {
                        Gvar.var_1996 = 0;
                    }
                    if (Gvar.var_71[Gvar.var_1993][Gvar.var_2748] == Gvar.var_201) {
                        Gvar.var_3005[Gvar.var_3007] = Gvar.var_3006;
                        Gvar.var_3007++;
                        Gvar.var_3008++;
                    }
                    if (Gvar.var_71[Gvar.var_1994][Gvar.var_2748] == Gvar.var_201) {
                        Gvar.var_3005[Gvar.var_3007] = Gvar.var_3006;
                        Gvar.var_3007++;
                        Gvar.var_3008++;
                    }
                    if (Gvar.var_71[Gvar.var_2747][Gvar.var_1995] == Gvar.var_201) {
                        Gvar.var_3005[Gvar.var_3007] = Gvar.var_3006;
                        Gvar.var_3007++;
                        Gvar.var_3008++;
                    }
                    if (Gvar.var_71[Gvar.var_2747][Gvar.var_1996] == Gvar.var_201) {
                        Gvar.var_3005[Gvar.var_3007] = Gvar.var_3006;
                        Gvar.var_3007++;
                        Gvar.var_3008++;
                    }
                }
            }
            if (Gvar.var_201 == 0 || Gvar.var_201 == 13 || Gvar.var_201 == 14) {
                Gvar.var_2332 = Gvar.var_66;
                Gvar.var_2333 = Gvar.var_67;
                Gvar.var_2334 = Gvar.var_66 - 1;
                if (Gvar.var_2334 <= 0) {
                    Gvar.var_2334 = 0;
                }
                Gvar.var_2335 = Gvar.var_66 + 1;
                if (Gvar.var_2335 >= Gvar.var_33) {
                    Gvar.var_2335 = Gvar.var_33;
                }
                Gvar.var_2336 = Gvar.var_67 - 1;
                if (Gvar.var_2336 <= 0) {
                    Gvar.var_2336 = 0;
                }
                Gvar.var_2337 = Gvar.var_67 + 1;
                if (Gvar.var_2337 >= Gvar.var_34) {
                    Gvar.var_2337 = Gvar.var_34;
                }
                if (Gvar.var_71[Gvar.var_2334][Gvar.var_2333] >= 1 && Gvar.var_71[Gvar.var_2334][Gvar.var_2333] <= 12) {
                    Gvar.var_3011 = 1;
                    Gvar.var_3013 = Gvar.var_71[Gvar.var_2334][Gvar.var_2333];
                }
                if (Gvar.var_71[Gvar.var_2335][Gvar.var_2333] >= 1 && Gvar.var_71[Gvar.var_2335][Gvar.var_2333] <= 12) {
                    Gvar.var_3011 = 1;
                    Gvar.var_3013 = Gvar.var_71[Gvar.var_2335][Gvar.var_2333];
                }
                if (Gvar.var_71[Gvar.var_2332][Gvar.var_2337] >= 1 && Gvar.var_71[Gvar.var_2332][Gvar.var_2337] <= 12) {
                    Gvar.var_3011 = 1;
                    Gvar.var_3013 = Gvar.var_71[Gvar.var_2332][Gvar.var_2337];
                }
                if (Gvar.var_71[Gvar.var_2332][Gvar.var_2336] >= 1 && Gvar.var_71[Gvar.var_2332][Gvar.var_2336] <= 12) {
                    Gvar.var_3011 = 1;
                    Gvar.var_3013 = Gvar.var_71[Gvar.var_2332][Gvar.var_2336];
                }
                if (Gvar.var_83[Gvar.var_3006].Var1 == Gvar.var_2334 && Gvar.var_83[Gvar.var_3006].Var2 == Gvar.var_2333) {
                    Gvar.var_3012 = 1;
                }
                if (Gvar.var_83[Gvar.var_3006].Var1 == Gvar.var_2335 && Gvar.var_83[Gvar.var_3006].Var2 == Gvar.var_2333) {
                    Gvar.var_3012 = 1;
                }
                if (Gvar.var_83[Gvar.var_3006].Var1 == Gvar.var_2332 && Gvar.var_83[Gvar.var_3006].Var2 == Gvar.var_2337) {
                    Gvar.var_3012 = 1;
                }
                if (Gvar.var_83[Gvar.var_3006].Var1 == Gvar.var_2332 && Gvar.var_83[Gvar.var_3006].Var2 == Gvar.var_2336) {
                    Gvar.var_3012 = 1;
                }
                if (Gvar.var_3011 == 1 && Gvar.var_83[Gvar.var_3006].Var0 != 0 && Gvar.var_83[Gvar.var_3006].Var10 == Gvar.var_3013 && Gvar.var_83[Gvar.var_3006].Var0 != 50 && Gvar.var_83[Gvar.var_3006].Var31 != 4 && Gvar.var_83[Gvar.var_3006].Var31 != 5) {
                    Gvar.var_3005[Gvar.var_3007] = Gvar.var_3006;
                    Gvar.var_3007++;
                    Gvar.var_3008++;
                }
                if (Gvar.var_3012 == 1 && Gvar.var_83[Gvar.var_3006].Var0 != 0 && Gvar.var_83[Gvar.var_3006].Var0 != 50 && Gvar.var_83[Gvar.var_3006].Var31 != 4 && Gvar.var_83[Gvar.var_3006].Var31 != 5) {
                    Gvar.var_3005[Gvar.var_3007] = Gvar.var_3006;
                    Gvar.var_3007++;
                    Gvar.var_3008++;
                }
            }
            Gvar.var_3006++;
        }
        if (Gvar.var_3008 != 0) {
            Gvar.var_2994 = 1;
        }
        Gvar.var_3002 = 0;
        Gvar.var_3003 = 0;
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Gvar.var_2994 = 0;
        }
        if (Gvar.var_2994 == 1) {
            Gvar.var_3009 = Adap.rnd(Gvar.var_3008);
            Gvar.var_3010 = Gvar.var_3005[Gvar.var_3009];
            Gvar.var_455 = Gvar.var_83[Gvar.var_3010].Var1;
            Gvar.var_456 = Gvar.var_83[Gvar.var_3010].Var2;
            Gvar.var_3002 = Gvar.var_455;
            Gvar.var_3003 = Gvar.var_456;
        }
        Gvar.var_1195 = 1;
        Gvar.var_2999 = 1;
        for (let cnt1 = 0; cnt1 < 24; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_2999++;
        }
        Gvar.var_2999 = 0;
        Gvar.var_1195 = 0;
        if (Gvar.var_2994 == 0) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾋﾟｽﾄﾙｽﾞ「ウェエエエ――ン";
            Gvar.comments_row2 = "　　　　当テル相手ガ ミツカラナイヨ―ッ」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        return;
}

export {func650}
