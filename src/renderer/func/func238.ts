import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func238(this: any) {
        Adap.dbgprt(238);
        await Func.func337(); // メッセージ関係呼び出し
        if (Gvar.var_1061 == 1) {
            Gvar.conf_keyon = Adap.getkey(89); // Yキー入力確認
            if (Gvar.conf_keyon == 1) {
                Gvar.var_198 = 0;
                await Func.func237();
                return;
            }
        }
        if (Gvar.var_1061 == 2) {
            //Gvar.conf_keyon = Adap.getkey(192); 192は各キーボードのメーカーが、キーボードごとに割り当てる。@キー
            Gvar.conf_keyon = Adap.getkey(75); // Kキー入力確認
            if (Gvar.conf_keyon == 1) {
                Gvar.var_198 = 0;
                Gvar.var_211 = 0;
                Gvar.var_356 = 305;
                Gvar.var_1061 = 3;
                await Func.func239(); // ダンジョンを抜け出す際の動作処理の実行
                return;
            }
        }
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_X_on == 1) {
            Gvar.var_198 = 0;
            Gvar.var_1061 = 0;
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func238();
        return;
}

export {func238}
