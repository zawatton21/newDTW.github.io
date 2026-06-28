import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'
async function func024(this: any) {
        if (shouldUseGeneratedGameFunction('func024')) {
                await runGeneratedGameFunction('func024', { thisArg: this });
                return;
        }
        Adap.dbgprt(24);
        Gvar.var_459 = 0;
        if (Gvar.var_459 == 0) {
            Gvar.var_83[Gvar.var_460].Var13 = 0;
        }
        return;
}

export {func024}
