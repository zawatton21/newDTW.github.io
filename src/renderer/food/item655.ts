import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
// No = 655 アイテム「ザリガニ」を使用した時の効果
async function item655(this: any) {
        Gvar.var_360 = 0;
        if (Gvar.var_211 == Gvar.var_352) {
            Gvar.var_352 = Gvar.var_352 + 1;
            Gvar.item_message1 = "最大HPが１あがった！";
            if (Gvar.var_352 > 999) {
                Gvar.var_352 = 999;
                Gvar.item_message1 = "最大HPは限界まで達した！";
            }
        }
        Gvar.var_211 = Gvar.var_211 + 10;
        if (Gvar.var_211 > Gvar.var_352) {
            Gvar.var_211 = Gvar.var_352;
        }
        Gvar.var_350 = Gvar.var_350 + 5;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        return;
}

export {item655}
