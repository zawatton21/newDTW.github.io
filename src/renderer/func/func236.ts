import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func236(this: any) {
        Adap.dbgprt(236);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "今回の冒険を諦めますか？";
        Gvar.comments_row2 = "諦めるならば「Y」キーを押してください";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func051();
        Gvar.var_1061 = 1;
        await Func.func238();
        return;
}

export {func236}
