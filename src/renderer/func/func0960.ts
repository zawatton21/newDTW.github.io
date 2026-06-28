import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func901
// どこからも呼び出されていない？ 消しても良いかも？
async function func0960(this: any) {
    if (shouldUseGeneratedGameFunction('func0960')) {
        await runGeneratedGameFunction('func0960', { thisArg: this });
        return;
    }

    if (await Adap.ginfo(2) != 30) {
        return;
    }
    if (Gvar.wparam == 13) {
        await Func.func0959();
    }
    return;
}

export {func0960}
