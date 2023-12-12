import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func543(this: any) {
        Adap.dbgprt(543);
        if (Gvar.var_140 >= 6) {
            return;
        }
        Gvar.var_140 = Gvar.var_140 + 1;
        Gvar.var_141 = 1;

        Adap.DSPLAY(120);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "磁力がさらに強くなったようだ…";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
        Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
        Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
        await Func.func047();
        return;
}

export {func543}
