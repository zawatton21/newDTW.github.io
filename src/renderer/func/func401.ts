import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 射撃discを拾った際、同じものを既に所持していた時にまとめる動作処理
async function func401(this: any) {
        Adap.dbgprt(401);
        Gvar.var_1839 = 0;
        Gvar.var_1841 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_1841].Var0 == Gvar.var_78[Gvar.var_321].Var0 && Gvar.var_233[Gvar.var_1841].Var11 == 0 && Gvar.var_78[Gvar.var_321].Var11 == 0) {
                Gvar.var_1839 = 1;
                Gvar.var_233[Gvar.var_1841].Var3 = Gvar.var_233[Gvar.var_1841].Var3 + Gvar.var_78[Gvar.var_321].Var3;
                if (Gvar.var_233[Gvar.var_1841].Var3 >= 99) {
                    Gvar.var_233[Gvar.var_1841].Var3 = 99;
                }
                break;
            }
            Gvar.var_1841 = Gvar.var_1841 + 1;
        }
        if (Gvar.var_1839 == 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "" + Gvar.item_name + "(" + Gvar.var_78[Gvar.var_321].Var3 + ")を拾った";
            Gvar.comments_row2 = "回数をまとめた";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            Gvar.var_77[Gvar.var_66][Gvar.var_67] = 0;
            Gvar.var_78[Gvar.var_321].Var0 = 0;
            Gvar.var_78[Gvar.var_321].Var1 = 0;
            Gvar.var_78[Gvar.var_321].Var2 = 0;
        }
        if (Gvar.var_1839 == 1) {
            Adap.DSPLAY(108); // アイテムを拾った時の効果音
        }
        return;
}

export {func401}
