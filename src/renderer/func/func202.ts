import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

 // メッセージ色設定処理(デバッグ処理)
async function func202(this: any) {
        Adap.dbgprt(202);
        await Func.func203(); // メッセージ色設定処理
}

export {func202}
