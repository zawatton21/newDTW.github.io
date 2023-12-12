import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func426(this: any) {
        Adap.dbgprt(426);
        Gvar.var_1956 = 1;
        Gvar.var_553 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_476[Gvar.var_1956] == 1) {
                Gvar.var_553 = Gvar.var_1956;
            }
            Gvar.var_1956 = Gvar.var_1956 + 1;
        }
        return;
}

export {func426}
