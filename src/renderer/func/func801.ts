import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func801(this: any) {
        Adap.dbgprt(801);
        Adap.DSPLAY(211);
        Gvar.var_783 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 4;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 3;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 2;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 1;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 0;
        return;
}

export {func801}
