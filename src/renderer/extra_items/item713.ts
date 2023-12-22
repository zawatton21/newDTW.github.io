import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 713 アイテム「ﾎﾟﾙﾎﾟのﾗｲﾀｰ」を使用した時の効果
async function item713(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_2215 = 1;
        Gvar.var_1845 = 1;
        await Func.func556(); // 敵をフロアへ出現させる処理
        Gvar.var_2215 = 0;
        Gvar.var_1845 = 0;
        for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {item713}
