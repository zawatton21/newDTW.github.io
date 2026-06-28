import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

async function func023(this: any) {
        if (shouldUseGeneratedGameFunction('func023')) {
            await runGeneratedGameFunction('func023', { thisArg: this });
            return;
        }

        Adap.dbgprt(23);
        Gvar.var_459 = 0;
        if (Gvar.var_459 == 0) {
            Gvar.var_128 = 0;
        }
        return;
}

export {func023}
