import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func037
async function func037(this: any) {
        if (shouldUseGeneratedGameFunction('func037')) {
                await runGeneratedGameFunction('func037', { thisArg: this });
                return;
        }

        Adap.dbgprt(37);
        await Func.setMessage("冷静になった。", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func037}
