/**
 * func202 — func202 不明
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

 // メッセージ色設定処理(デバッグ処理)
async function func202(this: any) {
    if (shouldUseGeneratedGameFunction('func202')) {
        await runGeneratedGameFunction('func202', { thisArg: this });
        return;
    }

        Adap.dbgprt(202);
        await Func.func203(); // メッセージ色設定処理
}

export {func202}
