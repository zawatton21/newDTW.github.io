import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func050(this: any) {
        Adap.dbgprt(50);
        Gvar.var_299 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_299 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_299 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_299 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_299 = 4;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_299 = 5;
        await Func.func337(); // メッセージ関係呼び出し
        return;
}

export {func050}
