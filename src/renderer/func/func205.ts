import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func205(this: any) {
        Adap.dbgprt(205);
        if (Gvar.var_10 == 0) {
            Gvar.var_910 = 0;
        }
        if (Gvar.var_10 == 1) {
            Gvar.var_910 = 1;
        }
        await Func.func206();
}

export {func205}
