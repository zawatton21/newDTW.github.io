import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func118(this: any) {
        Adap.dbgprt(118);
        Gvar.bgm_list_id = 986;
        Gvar.var_681 = 986;
        await Func.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
}

export {func118}
