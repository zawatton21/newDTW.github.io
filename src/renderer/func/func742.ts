import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func742(this: any) {
        Adap.dbgprt(742);
        Gvar.var_180 = 1;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ｲｷﾞｰは足元に砂のDIOを潜ませた。";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_768 = 1;
        Gvar.var_1550 = Gvar.var_3128;
        Gvar.var_230 = Gvar.var_3129;
        Gvar.var_2419 = 1;
        await Func.func536();
        Gvar.var_2419 = 0;
        Gvar.var_768 = 0;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func742}
