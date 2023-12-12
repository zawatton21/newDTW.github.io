import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func044(this: any) {
        Adap.dbgprt(44);
        Gvar.var_490 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_261 == 0) {
            Gvar.var_490 = 0;
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        await Func.func044();
        return;
}

export {func044}
