import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 654 アイテム「ヤドクガエル」を使用した時の効果
async function item654(this: any) {
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1214 = 0;
        Gvar.var_1940 = Gvar.var_199;
        Gvar.var_199 = 2;
        Gvar.var_389 = 2;
        Gvar.var_747 = 1;
        Gvar.var_209 = 20;
        Gvar.var_360 = 0;
        Gvar.var_350 = Gvar.var_350 + 10;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        Gvar.var_211 = Gvar.var_211 - 80;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
        }
        Gvar.var_208 = Gvar.var_208 + 80;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 260;
        }
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_389 = 0;
        Gvar.var_199 = Gvar.var_1940;
        return;
}

export {item654}
