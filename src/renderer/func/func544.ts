import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func544(this: any) {
        Adap.dbgprt(544);
        Gvar.var_2478 = 10;
        Gvar.var_211 = Gvar.var_211 - 10;
        Gvar.var_208 = Gvar.var_2478 + Gvar.var_208;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 235;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "自分の撃った弾丸が脳天に命中！";
        Gvar.comments_row2 = "" + Gvar.var_2478 + "のダメージを喰らった。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
        Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
        Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
        await Func.func047();
        Gvar.var_108 = 1;
        Gvar.var_747 = 1;

        Adap.DSPLAY(105);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_108 = 0;
        return;
}

export {func544}
