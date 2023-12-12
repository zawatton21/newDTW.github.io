import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func611(this: any) {
        Adap.dbgprt(611);
        if (Gvar.var_83[Gvar.var_673].Var12 != 0 || Gvar.var_83[Gvar.var_673].Var13 != 0 || Gvar.var_83[Gvar.var_673].Var17 != 0 || Gvar.var_83[Gvar.var_673].Var23 != 0) {
            return;
        }
        Gvar.var_2877 = Adap.rnd(2);
        if (Gvar.var_2877 == 0) {
            return;
        }
        Gvar.var_2878 = 0;
        Gvar.var_2879 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_2879].Var0 != 0 && Gvar.var_83[Gvar.var_2879].Var10 == Gvar.var_201 && Gvar.var_201 != 14 && Gvar.var_2879 != Gvar.var_673) {
                Gvar.var_2878 = 1;
            }
            Gvar.var_2879 = Gvar.var_2879 + 1;
        }
        if (Gvar.var_2878 == 1) {
            return;
        }
        Gvar.var_2879 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_336; ++cnt1) {
            if (Gvar.var_78[Gvar.var_2879].Var0 == 650 || Gvar.var_78[Gvar.var_2879].Var0 == 651 || Gvar.var_78[Gvar.var_2879].Var0 == 652 || Gvar.var_78[Gvar.var_2879].Var0 == 653) {
                if (Gvar.var_78[Gvar.var_2879].Var9 == Gvar.var_201 && Gvar.var_201 != 14) {
                    Gvar.var_2878 = 1;
                }
            }
            Gvar.var_2879 = Gvar.var_2879 + 1;
        }
        if (Gvar.var_2878 == 1) {
            return;
        }
        Gvar.var_2880 = Adap.rnd(2);
        Gvar.var_2852 = Math.floor(Gvar.var_352 / 15) + Gvar.var_2880;
        Gvar.var_747 = 1;
        Gvar.var_389 = 2;

        Adap.DSPLAY(104);
        Gvar.var_209 = Gvar.var_2852;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_389 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾖｰﾖｰﾏｯの謎の攻撃を喰らった！";
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
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 222;
        }
        Gvar.var_240 = 0;
        return;
}

export {func611}
