import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func857
async function func0916(this: any) {
    if (shouldUseGeneratedGameFunction('func0916')) {
        await runGeneratedGameFunction('func0916', { thisArg: this });
        return;
    }

    await Func.func0917();
    Gvar.y_axis_map_image = Gvar.var_3560;
    Gvar.var_3562 = Gvar.y_axis_map_image;
    Adap.objsel(0);
    await Func.func0911();
    return;
}

export {func0916}
