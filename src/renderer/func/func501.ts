import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func501(this: any) {
        Adap.dbgprt(501);
        Gvar.var_271 = 1;
        Gvar.var_1515 = 1;
        Gvar.var_2244 = Adap.rnd(3);
        Gvar.var_2244 = Gvar.var_2244 + 3;
        Gvar.var_389 = 2;
        Gvar.var_747 = 1;

        Adap.DSPLAY(103); // 殴られた時の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "電気のエネルギーが散っている！";
        Gvar.comments_row2 = "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを受けた";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[11]; // Ver0.1310で値修正 5 → 11
        Gvar.var_26_x = Gvar.var_26[11]; // Ver0.1310で値修正 5 → 11
        Gvar.var_27_x = Gvar.var_27[11]; // Ver0.1310で値修正 5 → 11
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1515 = Gvar.var_1515 + 1;
        }
        Gvar.var_389 = 0;
        Gvar.var_271 = 0;
        Gvar.var_1515 = 0;
        Gvar.var_211 = Gvar.var_211 - Gvar.var_2244;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2244;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 229;
        }
        return;
}

export {func501}
