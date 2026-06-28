import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import { runGeneratedGameFunction, shouldUseGeneratedGameFunction } from '../nelisp_bridge'

// 旧 func027
async function func027(this: any) {
        if (shouldUseGeneratedGameFunction('func027')) {
                await runGeneratedGameFunction('func027', { thisArg: this });
                return;
        }
        Adap.dbgprt(27);
        await Func.setMessage("動けるようになった。", "", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func027}
