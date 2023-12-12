import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 723 アイテム「魔法のランプ」を使用した時の効果
async function item723(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Gvar.item_message1 = "しかし何も起こらなかった…";
            return;
        }
        Gvar.var_1055 = 1;
        return;
}

export {item723}
