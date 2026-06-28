import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func916
async function func0975(this: any) {
    if (shouldUseGeneratedGameFunction('func0975')) {
        await runGeneratedGameFunction('func0975', { thisArg: this });
        return;
    }

    if (Gvar.var_1046 >= 29) {
        return;
    }
    Gvar.var_1046++;
    Gvar.var_3885 = "";
    Gvar.var_3871 = 0;
    Gvar.var_3872 = 0;
    for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
        Adap.getstr(Gvar.var_3885, Gvar.var_3846, Gvar.var_3871, 44);
        Gvar.var_1058[Gvar.var_1046][Gvar.var_3872] = Adap.int(Gvar.var_3885);
        Gvar.var_3871 = Gvar.var_3871 + Gvar.strsize;
        Gvar.var_3872++;
    }
    return;
}

export {func0975}
