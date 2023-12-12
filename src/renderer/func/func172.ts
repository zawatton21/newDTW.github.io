import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func172(this: any) {
        Adap.dbgprt(172);
        Adap.redraw(0);
        await Func.func170(); // 装備discの説明欄 (合成した能力などの表示)
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func339();
        }
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {
            Gvar.var_800 = 0;
            await Func.func178(); // 処理確認タイマー(3m秒)
            await Func.func169();
            return;
        }
        await Func.func172();
        return;
}

export {func172}
