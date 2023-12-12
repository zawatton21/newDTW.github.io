import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func165(this: any) {
        Adap.dbgprt(165);
        Gvar.var_785 = 1;
        Gvar.var_786 = 1;
        Gvar.var_787 = 1;
        if (Gvar.var_788 != 0) {
            if (Gvar.var_788 <= 5) {
                Gvar.var_785 = 1;
                Gvar.var_787 = Gvar.var_788;
            }
            if (Gvar.var_788 >= 6 && Gvar.var_788 <= 10) {
                Gvar.var_785 = 2;
                Gvar.var_787 = Gvar.var_788 - 5;
            }
            if (Gvar.var_788 >= 11 && Gvar.var_788 <= 15) {
                Gvar.var_785 = 3;
                Gvar.var_787 = Gvar.var_788 - 10;
            }
            if (Gvar.var_788 >= 16 && Gvar.var_788 <= 20) {
                Gvar.var_785 = 4;
                Gvar.var_787 = Gvar.var_788 - 15;
            }
            Gvar.var_786 = Gvar.var_788;
        }
        if (Gvar.var_789 == 1) {
            Gvar.var_785 = 4;
            Gvar.var_786 = 0;
            Gvar.var_787 = 5;
        }
        Gvar.var_629 = 1;
        Gvar.var_599 = 0;
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
            Gvar.var_599 = Gvar.var_599 + 1;
        }
        Gvar.var_599 = 0;
        await Func.func166();
}

export {func165}
