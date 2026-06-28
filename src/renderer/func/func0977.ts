import { Gvar } from '../variable'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func918
async function func0977(this: any) {
    if (shouldUseGeneratedGameFunction('func0977')) {
        await runGeneratedGameFunction('func0977', { thisArg: this });
        return;
    }

    Gvar.var_3867 = 1;
    return;
}

export {func0977}
