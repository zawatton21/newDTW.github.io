import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 712 アイテム「やばいクスリ」を使用した時の効果
async function item712(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_211 = Gvar.var_352;
        Gvar.var_126 = 1;

        Adap.DSPLAY(134);
        return;
}

export {item712}
