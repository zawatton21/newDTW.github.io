import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
// No = 630  アイテム「娼婦風スパゲッティ」を使用した時の効果
async function item630(this: any) {
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
        Gvar.var_1223 = 1;
        return;
}

export {item630}
