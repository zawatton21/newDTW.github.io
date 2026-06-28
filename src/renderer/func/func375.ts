/**
 * func375 — func375 不明
 *
 * (org原典: newDTW_func3)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

async function func375(this: any) {
    if (shouldUseGeneratedGameFunction('func375')) {
        await runGeneratedGameFunction('func375', { thisArg: this });
        return;
    }

        Adap.dbgprt(375);
        Gvar.var_1693 = 0;
        await Func.func376();
}

export {func375}
