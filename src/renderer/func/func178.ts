import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func178(this: any) {
        Adap.dbgprt(178);
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            await Adap.wait(3);
            await Func.func080(); // 各キー入力確認
            if (Gvar.key_Z_on == 0 && Gvar.key_X_on == 0 && Gvar.key_A_on == 0) {
                break;
            }
        }
        return;
}

export {func178}
