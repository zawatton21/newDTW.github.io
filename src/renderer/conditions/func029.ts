import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { runGeneratedGameFunction, shouldUseGeneratedGameFunction } from '../nelisp_bridge'

// 旧 func029
async function func029(this: any) {
        if (shouldUseGeneratedGameFunction('func029')) {
                await runGeneratedGameFunction('func029', { thisArg: this });
                return;
        }
        Adap.dbgprt(29);
        await Func.setMessage("周囲がドロドロではなくなった", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func029}
