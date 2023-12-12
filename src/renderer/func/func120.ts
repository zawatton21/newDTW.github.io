import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func120(this: any) {
        Adap.dbgprt(120);
        Gvar.bgm_list_id = 978;
        Gvar.var_681 = 978;
        await Func.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
}

export {func120}
