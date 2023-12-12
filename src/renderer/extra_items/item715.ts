import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 715 アイテム「点滴」を使用した時の効果
async function item715(this: any) {
        Gvar.var_271 = 1;
        Gvar.var_1242 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_271 = 0;
        Gvar.var_1242 = 0;
        Gvar.var_360 = 0;
        Gvar.var_2211 = 0;
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.var_567 = Gvar.var_567 + 1;
            Gvar.var_2211 = 1;
            if (Gvar.var_567 > 999) {
                Gvar.var_567 = 999;
            }
        }
        Gvar.var_350 = Gvar.var_350 + 30;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.item_message1 = "「栄養補給させてもらったぜ！」";
        }
        if (Gvar.var_2211 == 1) {
            Gvar.item_message1 = "最大満腹度が" + Gvar.var_567 + "になった。";
        }
        return;
}

export {item715}
