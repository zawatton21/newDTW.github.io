import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func667(this: any) {
        Adap.dbgprt(667);
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1195 = 0;
        Gvar.var_1914 = Gvar.var_1894;
        Gvar.var_1915 = Gvar.var_1895;
        Gvar.var_1845 = 3;
        Gvar.var_2109 = 1;
        await Func.func556();
        Gvar.var_1845 = 0;
        Gvar.var_2109 = 0;
        Gvar.var_748 = Gvar.var_1914 - Gvar.var_66 + 4;
        Gvar.var_749 = Gvar.var_1915 - Gvar.var_67 + 4;
        if (Gvar.var_2110 == 1) {
            Gvar.var_439 = Gvar.var_673;
            Gvar.var_83[Gvar.var_439].Var11 = 1;
            Gvar.var_83[Gvar.var_439].Var5 = 2;
            Gvar.var_271 = 1;
            Gvar.var_444 = 1;
            for (let cnt2 = 0; cnt2 < 25; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_444 = Gvar.var_444 + 1;
            }
            Gvar.var_271 = 0;
            Gvar.var_444 = 0;
            Gvar.var_83[Gvar.var_439].Var11 = 0;
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func667}
