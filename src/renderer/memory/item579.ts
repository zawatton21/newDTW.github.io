import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 579 ペットショップのdiscの効果
async function item579(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Gvar.item_message1 = "しかし何も起こらなかった…";
            return;
        }
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            Adap.DSPLAY(219);
            Gvar.var_1243 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1243 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1243 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1243 = 2;
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1243 = 0;
        Adap.DSPLAY(216); // ワープして逃げる時の効果音
        Gvar.var_374 = 1;
        Gvar.var_1264 = 0;
        Gvar.var_774 = 160;
        Gvar.var_1576 = 1;
        Gvar.var_271 = 1;
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_774 = Gvar.var_774 - 20;
        }
        Gvar.var_1576 = 0;
        Gvar.var_271 = 0;
        Gvar.var_374 = 0;
        await Func.func499(); // ダンジョン動作処理?
        return;
}

export {item579}
