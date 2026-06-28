/**
 * func239 — func239 ダンジョンを抜け出す際の動作処理の実行
 *
 * (org原典: newDTW_func2)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

async function func239(this: any) {
    if (shouldUseGeneratedGameFunction('func239')) {
        await runGeneratedGameFunction('func239', { thisArg: this });
        return;
    }

        Adap.dbgprt(239);
        Gvar.var_212 = 1;
        await Func.func672(); // ダンジョンを抜け出す際の動作処理
        return;
}

export {func239}
