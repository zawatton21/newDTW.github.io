import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 573 重ちーのdiscの効果
async function item573(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Gvar.item_message1 = "しかし何も起こらなかった…"; // Gvar.var_262 = 1でなければ "ｱｲﾃﾑの場所がわかった！"
            return;
        }
        Adap.DSPLAY(184);
        Gvar.var_100 = 1;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
}

export {item573}
