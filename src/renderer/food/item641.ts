import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 641 アイテム「消し炭」を使用した時の効果
async function item641(this: any) {
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1214 = 0;
        Gvar.var_389 = 2;

        Adap.DSPLAY(164);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_389 = 0;
        Gvar.var_360 = 0;
        Gvar.var_567 = Gvar.var_567 - 10;
        if (Gvar.var_567 < 1) {
            Gvar.var_567 = 1;
        }
        Gvar.var_350 = Gvar.var_350 + 10;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        return;
}

export {item641}
