import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func852
async function func0911(this: any) {
    if (shouldUseGeneratedGameFunction('func0911')) {
        await runGeneratedGameFunction('func0911', { thisArg: this });
        return;
    }

    Adap.redraw(0);
    await Func.func0914();
    await Func.func0919();
    await Func.func0920();
    await Func.func0912();
    if (Gvar.var_3593 != 0) {
        await Func.func0926();
    }
    Adap.redraw(1);
    await Adap.wait(1);
    return;
}

export {func0911}
