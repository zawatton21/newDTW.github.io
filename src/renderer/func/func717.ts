import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func717(this: any) {
        Adap.dbgprt(717);
        Gvar.var_198 = 0;
        Gvar.var_300 = 0;
        Gvar.var_1202 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func717}
