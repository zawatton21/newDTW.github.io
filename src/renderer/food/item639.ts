import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
// No = 639 アイテム「カエルの丸焼き」を使用した時の効果
async function item639(this: any) {
        Gvar.var_360 = 0;
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.var_567 = Gvar.var_567 + 1;
            if (Gvar.var_567 > 999) {
                Gvar.var_567 = 999;
            }
        }
        Gvar.var_350 = Gvar.var_350 + 20;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.item_message1 = "お腹がいっぱいになった。";
        }
        return;
}

export {item639}