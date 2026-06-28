import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func034
async function func034(this: any) {
        if (shouldUseGeneratedGameFunction('func034')) {
                await runGeneratedGameFunction('func034', { thisArg: this });
                return;
        }

        Adap.dbgprt(34);
        if (Gvar.var_132 != 0) {
            return;
        }
        await Func.setMessage("盲目状態が治った", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func034}
