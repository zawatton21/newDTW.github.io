import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 575 マニッシュボーイのdiscの効果
async function item575(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        if (Gvar.equip_disc[351] == 1) {
            Gvar.item_message1 = "装備DISCの効果によって";
            Gvar.item_message2 = "眠くならなかった！";
            return;
        }
        if (Gvar.var_120 == 1) {
            Gvar.item_message1 = "10時間熟睡した気分になっていて";
            Gvar.item_message2 = "眠くならなかった！";
            return;
        }
        if (Gvar.var_120 == 0) {
            Gvar.var_219 = 1;
    
            Adap.DSPLAY(132);
            return;
        }
}

export {item575}
