/**
 * func256 — func256 不明
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
async function func256(this: any) {
        if (shouldUseGeneratedGameFunction('func256')) {
                await runGeneratedGameFunction('func256', { thisArg: this });
                return;
        }

        Adap.dbgprt(256);
        Gvar.var_1096 = 1;
        Gvar.var_1098 = 1;
        Gvar.var_1100 = 1;
        Gvar.var_1102 = 1;
        Gvar.var_1082 = 12;
        Gvar.var_1084 = 10;
        Gvar.var_983 = "############";
        Gvar.var_983 = Gvar.var_983 + "############";
        Gvar.var_983 = Gvar.var_983 + "############";
        Gvar.var_983 = Gvar.var_983 + "############";
        Gvar.var_983 = Gvar.var_983 + "############";
        Gvar.var_983 = Gvar.var_983 + "############";
        Gvar.var_983 = Gvar.var_983 + "############";
        Gvar.var_983 = Gvar.var_983 + "############";
        Gvar.var_983 = Gvar.var_983 + "############";
        Gvar.var_983 = Gvar.var_983 + "############";
        return;
}

export {func256}
