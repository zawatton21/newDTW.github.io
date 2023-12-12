import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func817(this: any) {
        Adap.dbgprt(817);
        Gvar.var_2357 = 0;
        Gvar.var_198 = 0;
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
        await Func.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func817}
