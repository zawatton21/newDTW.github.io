import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func167(this: any) {
        Adap.dbgprt(167);
        Gvar.var_599 = 5;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            Adap.redraw(0);
            await Func.func168(); // ダンジョンクリア時のスコア判定
            await Func.func180(); // ロード中の黒画面処理?
            if (Gvar.var_10 >= 1) {
                await Func.func338();
            }
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func339();
            }
            Adap.redraw(1);
            Gvar.var_599 = Gvar.var_599 - 1;
        }
        Gvar.var_599 = 0;
        return;
}

export {func167}
