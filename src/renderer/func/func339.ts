import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func339(this: any) {
        Adap.dbgprt(339);
        await Adap.wait(1);
        if (Gvar.var_407 >= 1) {
            Gvar.var_1230 = await Adap.ginfo(3);
            if (Gvar.var_407 == 1) {
                await Func.func899();
            }
            if (Gvar.var_407 == 2) {
                await Func.func926();
            }
            Adap.gsel(Gvar.var_1230);
        }
        return;
}

export {func339}
