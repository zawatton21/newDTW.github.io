import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func906(this: any) {
        Adap.dbgprt(906);
        if (Gvar.var_408 >= 1) {
            await Func.func914();
        }
        if (Gvar.var_3564 == 1) {
            Gvar.var_3564 = 0;
            await Func.func919();
        }
        if (Gvar.var_3565 == 1) {
            Gvar.var_3565 = 0;
            await Func.func923();
        }
        if (Gvar.var_1046 >= 1) {
            await Func.func917();
        }
        return;
}

export {func906}
