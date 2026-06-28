import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func038
async function func038(this: any) {
        if (shouldUseGeneratedGameFunction('func038')) {
                await runGeneratedGameFunction('func038', { thisArg: this });
                return;
        }

        Adap.dbgprt(38);
        await Func.AutoDraw(9);
        await Func.setMessage("ﾖｰﾖｰﾏｯ「もっとおおおおおお",
                                "  私を叱ってええええええ」", 7, true, false, true);
        await Func.AutoDraw(4);
        await Func.setMessage("ﾖｰﾖｰﾏｯのあまりの臭さで",
                                "正気に戻った。", 7, false, false, false);
        await Func.AutoDraw(9);
        return;
}

export {func038}
