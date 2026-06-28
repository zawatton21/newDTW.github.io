import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func868
async function func0927(this: any) {
    if (shouldUseGeneratedGameFunction('func0927')) {
        await runGeneratedGameFunction('func0927', { thisArg: this });
        return;
    }

    Gvar.var_3573 = 0;
    await Func.func0928();
}

export {func0927}
