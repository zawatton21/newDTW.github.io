import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func842
async function func0901(this: any) {
    if (shouldUseGeneratedGameFunction('func0901')) {
        await runGeneratedGameFunction('func0901', { thisArg: this });
        return;
    }

    Adap.clrobj(Gvar.data0 = 9, Gvar.data1 = 9);
    Adap.objsize(60);
    Adap.pos(680 - 76, Gvar.var_3525 + 22);
    Adap.combox(Gvar.var_3553, 100, "修正値\n+1\n+2\n+3\n+4\n+5\n+6\n+7\n+8\n+9\n+10\n呪い");
    return;
}

export {func0901}
