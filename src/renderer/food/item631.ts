import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
// No = 631 アイテム「モッツァレラチーズとトマトのサラダ」を使用した時の効果
async function item631(this: any) {
        Gvar.var_360 = 0;
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.var_567 = Gvar.var_567 + 1;
            if (Gvar.var_567 > 999) {
                Gvar.var_567 = 999;
            }
        }
        if (Gvar.var_565 == Gvar.var_566) {
            Gvar.item_message1 = "お腹が膨れた";
        }
        Gvar.var_565 = Gvar.var_566;
        Gvar.var_350 = Gvar.var_350 + 10;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        return;
}

export {item631}
