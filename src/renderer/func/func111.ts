import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func111(this: any) {
        Adap.dbgprt(111);
        Gvar.var_678 = 1;
        Gvar.bgm_list_id = 0;
        await Func.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        Gvar.var_678 = 0;
        Gvar.var_681 = 0;
        return;
}

export {func111}
