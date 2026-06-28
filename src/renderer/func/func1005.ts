import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

async function func1005(this: any) {
        if (shouldUseGeneratedGameFunction('func1005')) {
                await runGeneratedGameFunction('func1005', { thisArg: this });
                return;
        }

        Adap.dbgprt(1005);
        return;
}

export {func1005}
