import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func847
async function func0906(this: any) {
    if (shouldUseGeneratedGameFunction('func0906')) {
        await runGeneratedGameFunction('func0906', { thisArg: this });
        return;
    }

    Gvar.var_3574 = 0;
    Adap.objsize(1);
    Adap.pos(800, 800);
    Adap.button("ダミー", Func.func0909);
    return;
}

export {func0906}
