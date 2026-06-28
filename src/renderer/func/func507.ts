/**
 * func507 — func507 スタンドパワーが力尽きて消滅した時の表示
 *
 * (org原典: newDTW_func5)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { tf } from '../i18n'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// スタンドパワーが力尽きて消滅した時の表示
async function func507(this: any) {
    if (shouldUseGeneratedGameFunction('func507')) {
        await runGeneratedGameFunction('func507', { thisArg: this });
        return;
    }

        Adap.dbgprt(507);
        await Func.AutoDraw(10);
        await Func.setMessage(tf("{0}は", Gvar.var_2255), "ｽﾀﾝﾄﾞﾊﾟﾜｰが尽きて消滅した", 7, false, false, false);
        await Func.AutoDraw(10);
        return;
}

export {func507}
