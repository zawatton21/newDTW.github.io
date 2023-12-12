import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func615(this: any) {
        Adap.dbgprt(615);
        Gvar.var_83[Gvar.var_673].Var30 = 0;
        Gvar.var_83[Gvar.var_673].Var21 = 1;
        Gvar.var_411 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 5;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 4;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 5;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 4;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_2705 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2706 = Gvar.var_83[Gvar.var_673].Var2;
        if (Gvar.var_66 < Gvar.var_2705 && Gvar.var_67 > Gvar.var_2706) {
            Gvar.var_83[Gvar.var_673].Var5 = 1;
        }
        if (Gvar.var_66 > Gvar.var_2705 && Gvar.var_67 > Gvar.var_2706) {
            Gvar.var_83[Gvar.var_673].Var5 = 3;
        }
        if (Gvar.var_66 < Gvar.var_2705 && Gvar.var_67 < Gvar.var_2706) {
            Gvar.var_83[Gvar.var_673].Var5 = 7;
        }
        if (Gvar.var_66 > Gvar.var_2705 && Gvar.var_67 < Gvar.var_2706) {
            Gvar.var_83[Gvar.var_673].Var5 = 9;
        }
        if (Gvar.var_66 == Gvar.var_2705 && Gvar.var_67 > Gvar.var_2706) {
            Gvar.var_83[Gvar.var_673].Var5 = 2;
        }
        if (Gvar.var_66 == Gvar.var_2705 && Gvar.var_67 < Gvar.var_2706) {
            Gvar.var_83[Gvar.var_673].Var5 = 8;
        }
        if (Gvar.var_67 == Gvar.var_2706 && Gvar.var_66 < Gvar.var_2705) {
            Gvar.var_83[Gvar.var_673].Var5 = 4;
        }
        if (Gvar.var_67 == Gvar.var_2706 && Gvar.var_66 > Gvar.var_2705) {
            Gvar.var_83[Gvar.var_673].Var5 = 6;
        }
        Gvar.var_411 = 0;
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        Gvar.var_83[Gvar.var_673].Var30 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func615}
