import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func665(this: any) {
        Adap.dbgprt(665);
        if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
            Gvar.var_83[Gvar.var_314].Var12 = 0;
        }
        Gvar.var_83[Gvar.var_314].Var13 = 0;
        Adap.DSPLAY(175);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ウェザーに届く寸前で燃え尽きた。";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        Gvar.var_1584 = (Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1585 = (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10;
        Gvar.var_1583 = 1;
        Gvar.var_271 = 1;
        for (let cnt1 = 0; cnt1 < 16; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1583++;
        }
        Gvar.var_1583 = 0;
        Gvar.var_271 = 0;
        return;
}

export {func665}
