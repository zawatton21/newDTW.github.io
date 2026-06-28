import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func922
async function func0981(this: any) {
    if (shouldUseGeneratedGameFunction('func0981')) {
        await runGeneratedGameFunction('func0981', { thisArg: this });
        return;
    }

    Gvar.var_3868 = 1;
    return;
}

export {func0981}
