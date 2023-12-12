import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func192(this: any) {
        Adap.dbgprt(192);
        if (Gvar.var_875 <= 0) {
            stop();
        }
        if (Gvar.var_875 > Gvar.var_224) {
            stop();
        }
        Gvar.var_476 = Adap.dim(40);
        Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
        Gvar.var_894 = 0;
        Gvar.kougeki_disc_id  = 0;
        Gvar.var_477 = Adap.dim(40);
        Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
        Gvar.var_895 = 0;
        Gvar.bougyo_disc_id = 0;
        Gvar.var_479 = Adap.dim(40);
        Gvar.var_250 = 0;
        Gvar.shageki_disc_id = 0;
        Gvar.var_478 = Adap.dim(40);
        Gvar.nouryoku_disc_id = 0;
        Gvar.var_896 = 0;
        Gvar.var_897 = 0;
        Gvar.var_898 = 0;
        Gvar.var_225 = Gvar.var_875;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_875].Var0;
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        await Func.func494();
        Gvar.var_869 = 1;
        await Func.func187();
        Gvar.var_869 = 0;
        Adap.objprm(3, Gvar.var_876); // アイテム欄行更新 Gvar.var_876はアイテム欄の行に格納されているアイテム(表示のみ)
        stop();
}

export {func192}
