import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func187(this: any) {
        Adap.dbgprt(187);
        Gvar.var_876 = Adap.sdim(10000);
        Gvar.var_876 = "";
        Gvar.var_883 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_883].Var0;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_876 = Gvar.var_876 + "\n" + Gvar.item_name;
            Gvar.var_883 = Gvar.var_883 + 1;
        }
        return;
}

export {func187}
