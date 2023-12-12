import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// お金を拾った時の動作処理
async function func435(this: any) {
        Adap.dbgprt(435);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.var_78[Gvar.var_321].Var13 + " Gを拾った";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.wallet = Gvar.wallet + Gvar.var_78[Gvar.var_321].Var13;
        if (Gvar.wallet > 999999) {
            Gvar.wallet = 999999;
        }
        Gvar.var_77[Gvar.var_66][Gvar.var_67] = 0;
        Gvar.var_78[Gvar.var_321].Var0 = 0;
        Gvar.var_78[Gvar.var_321].Var1 = 0;
        Gvar.var_78[Gvar.var_321].Var2 = 0;
        Gvar.var_78[Gvar.var_321].Var3 = 0;
        Gvar.var_78[Gvar.var_321].Var4 = 0;
        Gvar.var_78[Gvar.var_321].Var5 = 0;
        Gvar.var_78[Gvar.var_321].Var6 = 0;
        Gvar.var_78[Gvar.var_321].Var13 = 0;
        Gvar.var_78[Gvar.var_321].Var14 = 0;
        Gvar.var_78[Gvar.var_321].Var15 = 0;
        Gvar.var_78[Gvar.var_321].Var16 = 0;
        return;
}

export {func435}
