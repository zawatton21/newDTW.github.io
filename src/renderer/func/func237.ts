import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func237(this: any) {
        Adap.dbgprt(237);
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "確認のため「K」キーを押してください";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        Gvar.var_1061 = 2;
        await Func.func238();
}

export {func237}
