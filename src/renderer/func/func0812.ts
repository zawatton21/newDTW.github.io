/**
 * func0812 — func812 不明
 *
 * ヴェネチアホテルや亀、酒場の設定
 *
 * (org原典: newDTW_dungeon0 / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

async function func0812(this: any) {
    if (shouldUseGeneratedGameFunction('func0812')) {
        await runGeneratedGameFunction('func0812', { thisArg: this });
        return;
    }

    Adap.dbgprt(812);
    Gvar.var_223 = 0;
    Gvar.var_1797 = 0;
    await Func.func0009(); return;
}

export { func0812 }
