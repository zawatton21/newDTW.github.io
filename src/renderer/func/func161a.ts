import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func161a(this: any) {
        Adap.dbgprt(161);
        Gvar.var_243 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "酒場に入った";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func114b(); // 酒場の選曲(BGM "")
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
        Gvar.var_66 = 25; // X軸 ok25 前21
        Gvar.var_67 = 32; // Y軸　ok31 前32
        await Func.func016();
        Gvar.var_595 = 2; // Gvar.dungeon_number = 0 での場所確認。2 = 酒場
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func161a}
