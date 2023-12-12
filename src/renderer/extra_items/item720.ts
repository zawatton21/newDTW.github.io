import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 720 アイテム「ときのがくぼう」を使用した時の効果
async function item720(this: any) {
        Gvar.var_163 = 1;
        Gvar.var_164 = 1;
        Gvar.var_153 = 0;
        Gvar.var_114 = 0;
        Gvar.var_463 = 0;
        Gvar.var_464 = 0;
        Gvar.var_461 = 0;
        Gvar.var_462 = 0;
        Adap.DSPLAY(185);
        Gvar.var_271 = 1;
        Gvar.var_1491 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1491++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1491 = 0;
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1952 = 1;
        return;
}

export {item720}
