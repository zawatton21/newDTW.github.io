import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func194(this: any) {
        Adap.dbgprt(194);
        if (Gvar.var_686 == 30) {
            Gvar.var_906 = 0;
        }
        if (Gvar.var_686 == 40) {
            Gvar.var_906 = 1;
        }
        if (Gvar.var_686 == 50) {
            Gvar.var_906 = 2;
        }
        if (Gvar.var_686 == 60) {
            Gvar.var_906 = 3;
        }
        if (Gvar.var_686 == 70) {
            Gvar.var_906 = 4;
        }
        await Func.func195();
}

export {func194}
