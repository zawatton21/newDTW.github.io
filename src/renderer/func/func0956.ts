import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func897
async function func0956(this: any) {
    if (shouldUseGeneratedGameFunction('func0956')) {
        await runGeneratedGameFunction('func0956', { thisArg: this });
        return;
    }

    if (Gvar.wparam == 8) {
        Adap.ShowWindow(Gvar.var_15, 7);
        return (0);
    }
    else {
        return;
    }
}

export {func0956}
