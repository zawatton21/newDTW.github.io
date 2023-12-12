import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func052(this: any) {
        Adap.dbgprt(52);
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            await Func.func080(); // 各キー入力確認
            if (Gvar.key_Shift_on == 0) { // キーShift入力確認
                break;
            }
        }
        return;
}

export {func052}
