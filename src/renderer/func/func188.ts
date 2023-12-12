import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func188(this: any) {
        Adap.dbgprt(188);
        Gvar.var_874 = Adap.sdim(10000);
        Gvar.var_884 = Adap.dim(10000);
        Gvar.var_874 = "アイテム";
        Gvar.var_883 = 1;
        Gvar.var_885 = 1;
        for (let cnt1 = 0; cnt1 < 1000; ++cnt1) {
            Gvar.belongings_item_list = Gvar.var_883;
            await Func.func492(); // アイテムリスト呼び出し
            if (Gvar.buying_price != 0) {
                Gvar.var_874 = Gvar.var_874 + "\n" + "" + Gvar.item_name;
                Gvar.var_884[Gvar.var_885] = Gvar.belongings_item_list;
                Gvar.var_885 = Gvar.var_885 + 1;
            }
            Gvar.var_883 = Gvar.var_883 + 1;
        }
        return;
}

export {func188}
