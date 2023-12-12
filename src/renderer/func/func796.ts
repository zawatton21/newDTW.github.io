import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 銀行口座の設定
async function func796(this: any) {
        Adap.dbgprt(796);
        Gvar.var_1205 = 1;
        Gvar.var_3170 = 0;
        Gvar.var_3171 = 0;
        Gvar.var_3172 = 0;
        Gvar.var_3173 = 0;
        Gvar.var_3174 = 0;
        Gvar.var_3175 = 0;
        Gvar.var_3176 = 0;
        Gvar.var_3177 = 0;
        Gvar.var_3178 = 0;
        Gvar.var_3179 = 1;
        Gvar.var_3180 = 95;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.var_1032 + "G 入っています。";
        Gvar.comments_row2 = "何G 口座に入れますか？";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func798();
        return;
}

export {func796}
