import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

async function func198(this: any) {
    if (shouldUseGeneratedGameFunction('func198')) {
        await runGeneratedGameFunction('func198', { thisArg: this });
        return;
    }

        Adap.dbgprt(198);
        Gvar.var_908 = 0;
        await Func.func199();
}

export {func198}
