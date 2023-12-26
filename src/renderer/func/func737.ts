import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func737(this: any) {
        Adap.dbgprt(737);
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func080(); // 各キー入力確認
        // var_259:入力判定[↓]
        if (Gvar.var_259 == 1 || Gvar.key_Z_on == 1 || Gvar.key_X_on == 1 || Gvar.key_A_on == 1 || Gvar.key_C_on == 1) {
            Gvar.var_1201 = 0;
            Gvar.var_374 = 1;
            Gvar.var_772 = 1;
            Gvar.var_773 = 7;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_773++;
            }
            Gvar.var_773 = 0;
            Gvar.var_772 = 0;
            Gvar.var_374 = 0;
            Gvar.var_199 = 2;
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        await Func.func737();
        return;
}

export {func737}
