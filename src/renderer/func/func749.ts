import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func749(this: any) {
        Adap.dbgprt(749);
        Gvar.var_181 = 1;
        Gvar.var_243 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_747 = 1;
        await Func.func091();
        Gvar.var_2937 = 1;
        Gvar.var_455 = Gvar.var_347;
        Gvar.var_456 = Gvar.var_348;
        await Func.func660();
        Gvar.var_2937 = 0;
        Gvar.var_347 = Gvar.var_1894;
        Gvar.var_348 = Gvar.var_1895;
        Gvar.var_243 = 0;
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func749}
