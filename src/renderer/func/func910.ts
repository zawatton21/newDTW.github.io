import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func910(this: any) {
        Adap.dbgprt(910);
        Gvar.var_408 = Gvar.var_408 - 1;
        if (Gvar.var_408 >= 1) {
            Gvar.var_3576 = 1;
            Gvar.var_3577 = 2;
            for (let cnt2 = 0; cnt2 < Gvar.var_408; ++cnt2) {
                Gvar.var_3578 = 0;
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    Gvar.var_3518[Gvar.var_3576][Gvar.var_3578] = Gvar.var_3518[Gvar.var_3577][Gvar.var_3578];
                    Gvar.var_3518[Gvar.var_3577][Gvar.var_3578] = 0;
                    Gvar.var_3578++;
                }
                Gvar.var_3576++;
                Gvar.var_3577++;
            }
        }
        return;
}

export {func910}
