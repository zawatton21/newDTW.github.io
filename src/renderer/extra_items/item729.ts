import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 729 アイテム「吉良の財布」を使用した時の効果
async function item729(this: any) {
        Gvar.var_2229 = Adap.rnd(5);
        Gvar.var_2229 = Gvar.var_2229 + 1;
        Gvar.var_2229 = Gvar.var_2229 * 1000;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "財布の中には" + Gvar.var_2229 + "G入っていた！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Adap.DSPLAY(207);
        Gvar.wallet = Gvar.wallet + Gvar.var_2229;
        if (Gvar.wallet > 999999) {
            Gvar.wallet = 999999;
        }
        return;
}

export {item729}