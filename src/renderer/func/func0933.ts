import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func874
async function func0933(this: any) {
    if (shouldUseGeneratedGameFunction('func0933')) {
        await runGeneratedGameFunction('func0933', { thisArg: this });
        return;
    }

    Gvar.var_3766 = Gvar.var_71[Gvar.var_3768][Gvar.var_3769];
    if (Gvar.var_71[Gvar.var_3768][Gvar.var_3769] == 21) {
        Gvar.var_3766 = 14;
    }
    if (Gvar.var_71[Gvar.var_3768][Gvar.var_3769] == 22) {
        Gvar.var_3766 = 14;
    }
    if (Gvar.var_71[Gvar.var_3768][Gvar.var_3769] == 23) {
        Gvar.var_3766 = 14;
    }
    if (Gvar.var_71[Gvar.var_3768][Gvar.var_3769] == 24) {
        Gvar.var_3766 = 14;
    }
    return;
}

export {func0933}
