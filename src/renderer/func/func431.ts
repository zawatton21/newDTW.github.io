/**
 * func431 — func431 BGM選曲関数呼び出し
 *
 * (org原典: newDTW_func4)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Music from '../music/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

async function func431(this: any) {
        if (shouldUseGeneratedGameFunction('func431')) {
                await runGeneratedGameFunction('func431', { thisArg: this });
                return;
        }

        Adap.dbgprt(431);
        await Music.func106(); // BGM選曲呼び出し割り振り
        return;
}

export {func431}
