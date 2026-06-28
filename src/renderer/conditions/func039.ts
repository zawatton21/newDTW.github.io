import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func039
async function func039(this: any) {
        if (shouldUseGeneratedGameFunction('func039')) {
                await runGeneratedGameFunction('func039', { thisArg: this });
                return;
        }

        Adap.dbgprt(39);
        await Func.AutoDraw(9);
        await Func.setMessage("錠前のショックで",
                                "正気に戻った。", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func039}
