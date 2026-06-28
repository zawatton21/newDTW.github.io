import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func914
async function func0973(this: any) {
    if (shouldUseGeneratedGameFunction('func0973')) {
        await runGeneratedGameFunction('func0973', { thisArg: this });
        return;
    }

    await Func.func0968();
    return;
}

export {func0973}
