/**
 * func392 — func392 不明
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

async function func392(this: any) {
    if (shouldUseGeneratedGameFunction('func392')) {
        await runGeneratedGameFunction('func392', { thisArg: this });
        return;
    }

        Adap.dbgprt(392);
        Gvar.var_1728 = 1;
        if (Gvar.var_96 == 2) {
            Gvar.var_1804 = 1;
        }
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func384();
        }
        Gvar.var_1728 = 0;
        Gvar.var_1804 = 0;
        return;
}

export {func392}
