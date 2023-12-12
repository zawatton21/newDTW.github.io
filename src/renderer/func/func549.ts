import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func549(this: any) {
        Adap.dbgprt(549);
        Adap.DSPLAY(101); // 階段を昇るor降りる時の効果音
        Gvar.var_373 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 0;
        Gvar.special_floor = 0;
        Gvar.var_532 = 1;
        Gvar.var_356 = 300;
        await Func.func173();
        return;
}

export {func549}
