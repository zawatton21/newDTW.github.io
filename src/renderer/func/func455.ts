import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func455(this: any) {
        Adap.dbgprt(455);
        Gvar.var_1992 = 1;
        Gvar.var_1993 = Gvar.var_66 - 1;
        Gvar.var_1994 = Gvar.var_66 + 1;
        Gvar.var_1995 = Gvar.var_67 + 1;
        Gvar.var_1996 = Gvar.var_67 - 1;
        Gvar.var_1997 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1995) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 99;
                Gvar.var_1997 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1996) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 99;
                Gvar.var_1997 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 99;
                Gvar.var_1997 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 99;
                Gvar.var_1997 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1995) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 99;
                Gvar.var_1997 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1995) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 99;
                Gvar.var_1997 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1996) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 99;
                Gvar.var_1997 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1996) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var13 = 99;
                Gvar.var_1997 = 1;
            }
            Gvar.var_1992 = Gvar.var_1992 + 1;
        }
        if (Gvar.var_1997 == 1) {
            Adap.DSPLAY(126);
        }
        Gvar.var_114 = 0;
        Gvar.var_463 = 0;
        Gvar.var_464 = 0;
        Gvar.var_461 = 0;
        Gvar.var_462 = 0;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func455}
