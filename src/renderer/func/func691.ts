import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func691(this: any) {
        Adap.dbgprt(691);
        await Func.func340(); // キー入力による選択処理
        Gvar.var_3096 = Gvar.var_673;
        Gvar.var_1845 = 4;
        Gvar.var_2102 = Gvar.var_347;
        Gvar.var_2103 = Gvar.var_348;
        await Func.func556();
        Gvar.var_2531 = 0;
        Gvar.var_1845 = 0;
        Gvar.var_673 = Gvar.var_3096;
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "中からﾌﾞﾁｬﾗﾃｨが現れた！";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        await Func.func050();
        Gvar.var_2538 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func691}
