import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 582 水が熱湯になるdiscの効果
async function item582(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        Gvar.var_2204 = 0;
        Gvar.var_2205 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_224; ++cnt2) {
            if (Gvar.var_233[Gvar.var_2205].Var0 == 401) {
                Gvar.var_2204 = 1;
                Gvar.var_233[Gvar.var_2205].Var3 = 1;
            }
            Gvar.var_2205++;
        }
        if (Gvar.var_2204 == 1) {
    
            Adap.DSPLAY(175);
            Gvar.var_1584 = 160;
            Gvar.var_1585 = 160;
            Gvar.var_271 = 1;
            Gvar.var_1583 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1583++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1583 = 0;
            Gvar.item_message1 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのDISCの回数が";
            Gvar.item_message2 = "残り １ になってしまった！！";
        }
        return;
}

export {item582}
