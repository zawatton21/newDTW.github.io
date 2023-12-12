import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func071(this: any) {
        Adap.dbgprt(71);
        if (Gvar.var_361 <= 3) {
            Adap.DSPLAY(129);
        }
        Gvar.var_240 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_361 == 1) {
            Gvar.comments_row1 = "お腹が減ってきた…";
        }
        if (Gvar.var_361 == 2) {
            Gvar.comments_row1 = "ハラペコで目が回ってきた…";
        }
        if (Gvar.var_361 == 3) {
            Gvar.comments_row1 = "だめだ！　もう倒れそうだ！";
        }
        if (Gvar.var_361 == 4) {
            Gvar.comments_row1 = "早く…　何か食べないと…";
        }
        if (Gvar.var_361 == 5) {
            Gvar.comments_row1 = "飢え死にしてしまう！";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func071}
