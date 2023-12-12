import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 578 サンドマンのdiscの効果
async function item578(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        if (Gvar.var_133 == 0) {
            Gvar.var_157 = 1; // Gvar.var_157 倍速移動フラグON
            Gvar.var_158 = 0;
    
            Adap.DSPLAY(154);
        }
        if (Gvar.var_133 != 0) {
            Gvar.var_133 = 0;
        }
        return;
}

export {item578}
