import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func122(this: any) {
        Adap.dbgprt(122);
        Gvar.bgm_list_id = 999;
        await Func.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        Gvar.var_634 = 0;
        return;
}

export {func122}
