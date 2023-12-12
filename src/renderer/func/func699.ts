import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func699(this: any) {
        Adap.dbgprt(699);
        Gvar.var_2890 = Gvar.var_2199;

        Adap.DSPLAY(165);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "カチリ";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        Gvar.var_1343 = Gvar.var_83[Gvar.var_2890].Var1;
        Gvar.var_1344 = Gvar.var_83[Gvar.var_2890].Var2;
        Gvar.var_1342 = 1;
        Gvar.var_271 = 1;
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1342 = 0;
        Gvar.var_271 = 0;
        Gvar.var_1389 = Gvar.var_83[Gvar.var_2890].Var1;
        Gvar.var_1390 = Gvar.var_83[Gvar.var_2890].Var2;
        Gvar.var_82[Gvar.var_1389][Gvar.var_1390] = 0;
        Gvar.var_83[Gvar.var_2890].Var0 = 0;
        Gvar.var_83[Gvar.var_2890].Var1 = 0;
        Gvar.var_83[Gvar.var_2890].Var2 = 0;
        Gvar.var_83[Gvar.var_2890].Var6 = 0;
        Gvar.var_83[Gvar.var_2890].Var7 = 0;
        Gvar.var_83[Gvar.var_2890].Var8 = 0;
        Gvar.var_83[Gvar.var_2890].Var9 = 0;
        Gvar.var_83[Gvar.var_2890].Var18 = 0;
        Gvar.var_83[Gvar.var_2890].Var19 = 0;
        Gvar.var_83[Gvar.var_2890].Var27 = 0;
        Gvar.var_83[Gvar.var_2890].Var28 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        Gvar.var_1993 = Gvar.var_1389 - 1;
        if (Gvar.var_1993 < 0) {
            Gvar.var_1993 = 0;
        }
        Gvar.var_1994 = Gvar.var_1389 + 1;
        Gvar.var_1995 = Gvar.var_1390 + 1;
        Gvar.var_1996 = Gvar.var_1390 - 1;
        if (Gvar.var_1996 < 0) {
            Gvar.var_1996 = 0;
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1390] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1390;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1390] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1390;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1389][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1389;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1389][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1389;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1390] = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1390] = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1390] = 0;
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1995] = 0;
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1996] = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1995] = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1995] = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1996] = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1996] = 0;
        }

        Adap.DSPLAY(180);
        Gvar.var_271 = 1;
        Gvar.var_1388 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            Gvar.var_585 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_585 = 0;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1388++;
        }
        for (let cnt1 = 0; cnt1 < 14; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1388++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1388 = 0;
        if (Gvar.var_65[Gvar.var_1993][Gvar.var_1390] == 1 || Gvar.var_65[Gvar.var_1994][Gvar.var_1390] == 1 || Gvar.var_65[Gvar.var_1389][Gvar.var_1995] == 1 || Gvar.var_65[Gvar.var_1389][Gvar.var_1996] == 1 || Gvar.var_65[Gvar.var_1993][Gvar.var_1995] == 1 || Gvar.var_65[Gvar.var_1994][Gvar.var_1995] == 1 || Gvar.var_65[Gvar.var_1993][Gvar.var_1996] == 1 || Gvar.var_65[Gvar.var_1994][Gvar.var_1996] == 1) {
            Gvar.var_389 = 2;
    
            Adap.DSPLAY(105);
            if (Gvar.var_211 == 1) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 209;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_389 = 0;
                Gvar.var_2197 = 1;
                return;
            }
            if (Gvar.var_211 > 1) {
                Gvar.var_2198 = Math.floor(Gvar.var_211 / 2);
                if (Gvar.equip_disc[314] == 1) {
                    Gvar.var_2198 = Math.floor(Gvar.var_2198 / 2);
                }
                Gvar.var_211 = Gvar.var_211 - Gvar.var_2198;
                if (Gvar.var_211 <= 0) {
                    Gvar.var_211 = 1;
                }
                Gvar.var_208 = Gvar.var_2198 + Gvar.var_208;
            }
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_389 = 0;
        }
        Gvar.var_403 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
        Gvar.var_2194 = 1;
        Gvar.var_2195 = 1;
        Gvar.var_2196 = 2;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            Gvar.var_209 = 0;
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        Gvar.var_2196 = 0;
        Gvar.var_2195 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
}

export {func699}
