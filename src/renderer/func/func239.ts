import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func239(this: any) {
        Adap.dbgprt(239);
        Gvar.var_212 = 1;
        await Func.func672(); // ダンジョンを抜け出す際の動作処理
        return;
}

export {func239}
