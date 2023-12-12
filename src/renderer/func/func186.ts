import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func186(this: any) {
        Adap.dbgprt(186);
        Adap.gsel( Gvar.window_id = 31, Gvar.window_mode = -1);
        Adap.gsel(0, 1);
        await Func.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func186}
