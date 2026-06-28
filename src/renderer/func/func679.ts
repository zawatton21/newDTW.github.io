/**
 * func679 — func679 不明
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
async function func679(this: any) {
        if (shouldUseGeneratedGameFunction('func679')) {
                await runGeneratedGameFunction('func679', { thisArg: this });
                return;
        }
        Adap.dbgprt(679);
        Gvar.var_950 = Gvar.current_level * 2 + 3;
        return;
}

export {func679}
