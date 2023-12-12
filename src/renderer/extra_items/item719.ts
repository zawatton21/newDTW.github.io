import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 719 アイテム「吉良の弓矢」を使用した時の効果
async function item719(this: any) {
    Adap.DSPLAY(111);
    Gvar.var_1257 = 1;
    Gvar.var_1591 = 1;
    Gvar.var_271 = 1;
    for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1591 = Gvar.var_1591 + 1;
    }
    Gvar.var_1257 = 0;
    Gvar.var_1591 = 0;
    Gvar.var_271 = 0;
    Gvar.var_2228 = 1;
    await Func.func531();
    if (Gvar.var_2228 == 0) {
        Gvar.item_message1 = "" + Gvar.target_item_name + "に";
        Gvar.item_message2 = "新たな装備効果が発現した！";
    }
    if (Gvar.var_2228 == 1) {
        Gvar.item_message1 = "しかしﾃﾞｨｱﾎﾞﾛは";
        Gvar.item_message2 = "矢に選ばれなかった…";
    }
    return;
}

export {item719}
