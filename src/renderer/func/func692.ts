/**
 * func692 — func692 不明
 *
 * (org原典: newDTW_func6)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'
async function func692(this: any) {
    if (shouldUseGeneratedGameFunction('func692')) {
        await runGeneratedGameFunction('func692', { thisArg: this });
        return;
    }

        Adap.dbgprt(692);
        if (Gvar.var_183 != 0) {
            return;
        }
        Gvar.var_184 = Gvar.var_347;
        Gvar.var_185 = Gvar.var_348;
        Gvar.var_183 = 1;
        return;
}

export {func692}
