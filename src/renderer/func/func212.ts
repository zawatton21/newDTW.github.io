/**
 * func212 — func212 キーコンフィグ設定の方向キー
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

async function func212(this: any) {
    if (shouldUseGeneratedGameFunction('func212')) {
        await runGeneratedGameFunction('func212', { thisArg: this });
        return;
    }

        Adap.dbgprt(212);
        Gvar.var_921 = "[ 方向キー ]";
        Gvar.var_919 = Gvar.var_655;
        await Func.func211();
        Gvar.var_913 = Gvar.var_920;
        Gvar.var_919 = Gvar.var_656;
        await Func.func211();
        Gvar.var_914 = Gvar.var_920;
        Gvar.var_919 = Gvar.var_657;
        await Func.func211();
        Gvar.var_915 = Gvar.var_920;
        Gvar.var_919 = Gvar.var_658;
        await Func.func211();
        Gvar.var_916 = Gvar.var_920;
        Gvar.var_919 = Gvar.var_659;
        await Func.func211();
        Gvar.var_918 = Gvar.var_920;
        Gvar.var_919 = Gvar.var_660;
        await Func.func211();
        Gvar.var_917 = Gvar.var_920;
        return;
}

export {func212}
