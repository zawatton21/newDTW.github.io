import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func846
async function func0905(this: any) {
    if (shouldUseGeneratedGameFunction('func0905')) {
        await runGeneratedGameFunction('func0905', { thisArg: this });
        return;
    }

    Adap.objsize(1);
    Adap.pos(800, 800);
    Adap.button("ダミー", Func.func0909);
    return;
}

export {func0905}
