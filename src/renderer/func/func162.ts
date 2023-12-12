import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func162(this: any) {
        Adap.dbgprt(162);
        Gvar.var_775 = Gvar.var_83[Gvar.var_771].Var1;
        Gvar.var_776 = Gvar.var_83[Gvar.var_771].Var2;
        Gvar.var_82[Gvar.var_775][Gvar.var_776] = 0;
        Gvar.var_82[13][9] = Gvar.var_771;
        Gvar.var_83[Gvar.var_771].Var1 = 13;
        Gvar.var_83[Gvar.var_771].Var2 = 9;
        Gvar.var_374 = 1;
        Gvar.var_772 = 1;
        Gvar.var_777 = 1;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_777++;
        }
        Gvar.var_774 = 60;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_777++;
            Gvar.var_774 = Gvar.var_774 - 20;
        }
        Gvar.var_777 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
        Gvar.var_66 = 13;
        Gvar.var_67 = 10;
        await Func.func016();
        Gvar.var_595 = 0; // Gvar.dungeon_number = 0 での場所確認。0 = ヴェネチアホテル
        Gvar.var_773 = 7;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_773++;
        }
        Gvar.var_773 = 0;
        Gvar.var_772 = 0;
        Gvar.var_374 = 0;
        Gvar.var_199 = 2;
        await Func.func113(); // ヴェネチアホテルのBGMを選曲
        await Func.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func162}
