import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func845
async function func0904(this: any) {
    if (shouldUseGeneratedGameFunction('func0904')) {
        await runGeneratedGameFunction('func0904', { thisArg: this });
        return;
    }

    Adap.clrobj(Gvar.data0 = 9, Gvar.data1 = 9);
    Adap.objsize(1);
    Adap.pos(800, 800);
    Adap.button("ダミー", Func.func0909);
    return;
}

export {func0904}
