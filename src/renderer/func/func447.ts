import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func447(this: any) {
        Adap.dbgprt(447);
        Gvar.var_1055 = 0;
        Gvar.var_1584 = 160;
        Gvar.var_1585 = 120;
        Gvar.var_1587 = 130;
        Gvar.var_1588 = 100;
        Gvar.var_1589 = 190;
        Gvar.var_1590 = 100;
        Gvar.var_271 = 1;
        Gvar.var_1582 = 1;
        Gvar.var_1586 = 1;
        Adap.DSPLAY(168);
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1586++;
        }
        Gvar.var_1586 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「願い事を ひとつ言え！」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_1207 = 1;
        Gvar.var_1991 = 1;
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        await Func.func448();
}

export {func447}
