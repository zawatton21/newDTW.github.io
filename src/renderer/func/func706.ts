import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func706(this: any) {
        Adap.dbgprt(706);
        Gvar.var_281 = Gvar.var_66 - 1;
        if (Gvar.var_281 < 0) {
            Gvar.var_281 = 0;
        }
        Gvar.var_282 = Gvar.var_66 + 1;
        if (Gvar.var_282 > Gvar.var_33) {
            Gvar.var_282 = Gvar.var_33;
        }
        Gvar.var_283 = Gvar.var_67 - 1;
        if (Gvar.var_283 < 0) {
            Gvar.var_283 = 0;
        }
        Gvar.var_284 = Gvar.var_67 + 1;
        if (Gvar.var_284 > Gvar.var_34) {
            Gvar.var_284 = Gvar.var_34;
        }
        Gvar.var_3112 = 0;
        Gvar.var_286 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_286].Var0 == 33) {
                Gvar.var_3113 = Gvar.var_83[Gvar.var_286].Var1;
                Gvar.var_3114 = Gvar.var_83[Gvar.var_286].Var2;
                if (Gvar.var_71[Gvar.var_3113][Gvar.var_3114] >= 1 && Gvar.var_71[Gvar.var_3113][Gvar.var_3114] == Gvar.var_201) {
                    Gvar.var_3112 = 1;
                    break;
                }
            }
            Gvar.var_286 = Gvar.var_286 + 1;
        }
        if (Gvar.var_3112 == 1 && Gvar.var_83[Gvar.var_286].Var12 == 0 && Gvar.var_83[Gvar.var_286].Var13 == 0) {
            Gvar.var_83[Gvar.var_286].Var5 = 2;
            if (Gvar.var_83[Gvar.var_286].Var1 < Gvar.var_66) {
                Gvar.var_83[Gvar.var_286].Var5 = 6;
            }
            if (Gvar.var_83[Gvar.var_286].Var1 > Gvar.var_66) {
                Gvar.var_83[Gvar.var_286].Var5 = 4;
            }
            if (Gvar.var_83[Gvar.var_286].Var2 < Gvar.var_67) {
                Gvar.var_83[Gvar.var_286].Var5 = 2;
            }
            if (Gvar.var_83[Gvar.var_286].Var2 > Gvar.var_67) {
                Gvar.var_83[Gvar.var_286].Var5 = 8;
            }
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "レストラン・トラサルディーへようこそ！";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func136();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_210 = 1;
        }
        return;
}

export {func706}
