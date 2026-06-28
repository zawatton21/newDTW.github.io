/**
 * func287 — func287 不明
 *
 * ダンジョンで読み込まれるランダムマップ。
 *
 * (org原典: newDTW_dungeon_map)
 * // @org-injected
 */
import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'
async function func287(this: any) {
        if (shouldUseGeneratedGameFunction('func287')) {
                await runGeneratedGameFunction('func287', { thisArg: this });
                return;
        }
        Adap.dbgprt(287);
        Gvar.var_1096 = 1;
        Gvar.var_1098 = 1;
        Gvar.var_1100 = 1;
        Gvar.var_1102 = 1;
        Gvar.var_1082 = 9;
        Gvar.var_1084 = 9;
        Gvar.var_983 = "####9####";
        Gvar.var_983 = Gvar.var_983 + "#..jkl..#";
        Gvar.var_983 = Gvar.var_983 + "#.......#";
        Gvar.var_983 = Gvar.var_983 + "#d.III.g#";
        Gvar.var_983 = Gvar.var_983 + "5e.III.h7";
        Gvar.var_983 = Gvar.var_983 + "#f.III.i#";
        Gvar.var_983 = Gvar.var_983 + "#.......#";
        Gvar.var_983 = Gvar.var_983 + "#..abc..#";
        Gvar.var_983 = Gvar.var_983 + "####3####";
        return;
}

export {func287}
