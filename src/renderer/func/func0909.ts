import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func850
async function func0909(this: any) {
    if (shouldUseGeneratedGameFunction('func0909')) {
        await runGeneratedGameFunction('func0909', { thisArg: this });
        return;
    }

    await Func.func0910();
    return;
}

export {func0909}
