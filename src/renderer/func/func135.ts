import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func135(this: any) {
        Adap.dbgprt(135);
        Gvar.bgm_list_id = 980;
        await Func.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
        return;
}

export {func135}
