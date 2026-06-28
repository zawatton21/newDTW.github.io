import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func040
async function func040(this: any) {
        if (shouldUseGeneratedGameFunction('func040')) {
                await runGeneratedGameFunction('func040', { thisArg: this });
                return;
        }

        Adap.dbgprt(40);
        await Func.setMessage("鉄塔が消滅した。", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func040}
