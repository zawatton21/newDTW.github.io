/**
 * func572 — func572 不明
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'
async function func572(this: any) {
    if (shouldUseGeneratedGameFunction('func572')) {
        await runGeneratedGameFunction('func572', { thisArg: this });
        return;
    }

        Adap.dbgprt(572);
        if (Gvar.var_83[Gvar.var_2611].Var5 == 2) {
            Gvar.var_83[Gvar.var_2611].Var33 = 4;
        }
        if (Gvar.var_83[Gvar.var_2611].Var5 == 8) {
            Gvar.var_83[Gvar.var_2611].Var33 = 6;
        }
        if (Gvar.var_83[Gvar.var_2611].Var5 == 4) {
            Gvar.var_83[Gvar.var_2611].Var33 = 8;
        }
        if (Gvar.var_83[Gvar.var_2611].Var5 == 6) {
            Gvar.var_83[Gvar.var_2611].Var33 = 2;
        }
        if (Gvar.var_83[Gvar.var_2611].Var5 == 1) {
            Gvar.var_83[Gvar.var_2611].Var33 = 4;
        }
        if (Gvar.var_83[Gvar.var_2611].Var5 == 3) {
            Gvar.var_83[Gvar.var_2611].Var33 = 2;
        }
        if (Gvar.var_83[Gvar.var_2611].Var5 == 7) {
            Gvar.var_83[Gvar.var_2611].Var33 = 8;
        }
        if (Gvar.var_83[Gvar.var_2611].Var5 == 9) {
            Gvar.var_83[Gvar.var_2611].Var33 = 6;
        }
        return;
}

export {func572}
