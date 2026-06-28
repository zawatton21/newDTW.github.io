/**
 * func386 — func386  床に落ちているアイテムを「消し炭」にする
 *
 * (org原典: newDTW_dungeon_main / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'
async function func386(this: any) {
        if (shouldUseGeneratedGameFunction('func386')) {
                await runGeneratedGameFunction('func386', { thisArg: this });
                return;
        }

        Adap.dbgprt(386);
        Gvar.var_78[Gvar.var_866].Var0 = 641;
        return;
}

export {func386}
