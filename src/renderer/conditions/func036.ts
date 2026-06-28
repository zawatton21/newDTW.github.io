import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func036
async function func036(this: any) {
        if (shouldUseGeneratedGameFunction('func036')) {
                await runGeneratedGameFunction('func036', { thisArg: this });
                return;
        }

        Adap.dbgprt(36);
        await Func.setMessage("混乱状態が治った", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func036}
