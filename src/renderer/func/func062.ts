/**
 * func062 — func062 ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
 *
 * (org原典: newDTW_dungeon_main / DONE)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import { runGeneratedGameFunction, shouldUseGeneratedGameFunction } from '../nelisp_bridge'

// ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
async function func062(this: any) {
        if (shouldUseGeneratedGameFunction('func062')) {
                await runGeneratedGameFunction('func062', { thisArg: this });
                return;
        }
        Adap.dbgprt(62);
        Gvar.var_224 = Gvar.var_224 + 1;
        Gvar.var_233[Gvar.var_224].Var0 = 602; // アイテム「ネアポリスのピッツァ」(Gvar.belongings_item_list = 602)を追加
        return;
}

export {func062}
