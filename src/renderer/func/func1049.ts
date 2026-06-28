import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

async function func1049(this: any) {
    if (shouldUseGeneratedGameFunction('func1049')) {
        await runGeneratedGameFunction('func1049', { thisArg: this });
        return;
    }

        Adap.dbgprt(1049);
        await Func.func626();
        return;
}

export {func1049}
