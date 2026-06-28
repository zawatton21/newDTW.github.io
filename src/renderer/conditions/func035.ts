import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func035
async function func035(this: any) {
        if (shouldUseGeneratedGameFunction('func035')) {
                await runGeneratedGameFunction('func035', { thisArg: this });
                return;
        }

        Adap.dbgprt(35);
        await Func.setMessage("ンドゥールの気分が消えた", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func035}
