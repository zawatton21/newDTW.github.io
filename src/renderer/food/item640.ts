import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
// No = 640 アイテム「焦げた食べ物」を使用した時の効果
async function item640(this: any) {
        Gvar.var_360 = 0;
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.var_567 = Gvar.var_567 + 1;
            if (Gvar.var_567 > 999) {
                Gvar.var_567 = 999;
            }
        }
        Gvar.var_350 = Gvar.var_350 + 10;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.item_message1 = "お腹がいっぱいになった。";
        }
        return;
}

export {item640}
