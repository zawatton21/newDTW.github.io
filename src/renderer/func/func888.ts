import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func888(this: any) {
        Adap.dbgprt(888);
        Gvar.var_874 = Adap.sdim(10000);
        Gvar.var_3322 = Adap.sdim(10000);
        Gvar.var_884 = Adap.dim(10000);
        Gvar.var_874 = "アイテム";
        Gvar.var_3322 = "eeeeeeeeee";
        Gvar.var_883 = 1;
        for (let cnt1 = 0; cnt1 < 150; ++cnt1) {
            await Func.func889();
            Gvar.var_874 = Gvar.var_874 + "\n" + Gvar.item_name;
            if (Gvar.belongings_item_list < 10) {
                Gvar.var_3322 = Gvar.var_3322 + "\np" + Gvar.belongings_item_list + "eeeeeeee";
            }
            if (Gvar.belongings_item_list >= 10 && Gvar.belongings_item_list < 100) {
                Gvar.var_3322 = Gvar.var_3322 + "\np" + Gvar.belongings_item_list + "eeeeeee";
            }
            if (Gvar.belongings_item_list >= 100) {
                Gvar.var_3322 = Gvar.var_3322 + "\np" + Gvar.belongings_item_list + "eeeeee";
            }
            Gvar.var_884[Gvar.var_883] = Gvar.belongings_item_list;
            if (Gvar.belongings_item_list == 1) {
                break;
            }
            Gvar.var_883++;
        }
        return;
}

export {func888}
