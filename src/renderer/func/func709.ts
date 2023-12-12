import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func709(this: any) {
        Adap.dbgprt(709);
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "お買い物金額の合計は";
        Gvar.comments_row2 = "" + Gvar.payment_amount + "G になりマス";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1202 = 1;
        Gvar.var_3117 = 2;
        await Func.func710();
        return;
}

export {func709}
