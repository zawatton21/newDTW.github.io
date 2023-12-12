import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
// No = 600 アイテム「ピッツァ」を使用した時の効果
async function item600(this: any) {
        Gvar.var_360 = 0;
        Gvar.var_2211 = 0;
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.var_567 = Gvar.var_567 + 2;
            Gvar.var_2211 = 1;
            if (Gvar.var_567 > 999) {
                Gvar.var_567 = 999;
            }
        }
        Gvar.var_350 = Gvar.var_350 + 50;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.item_message1 = "お腹がいっぱいになった。";
        }
        if (Gvar.var_2211 == 1) {
            Gvar.item_message1 = "最大満腹度が" + Gvar.var_567 + "になった。";
        }
        return;
}

export {item600}
