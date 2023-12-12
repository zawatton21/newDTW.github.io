import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func860(this: any) {
        Adap.dbgprt(860);
        Adap.color(155, 155, 155);
        Gvar.var_3308 = 0;
        Gvar.var_3309 = 680;
        Gvar.var_3310 = 10;
        Gvar.var_3311 = 10;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            Adap.line(Gvar.var_3308, Gvar.var_3310, Gvar.var_3309, Gvar.var_3311);
            Gvar.var_3310 = Gvar.var_3310 + 40;
            Gvar.var_3311 = Gvar.var_3311 + 40;
        }
        Gvar.var_3308 = 10;
        Gvar.var_3309 = 10;
        Gvar.var_3310 = 0;
        Gvar.var_3311 = 680;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            Adap.line(Gvar.var_3308, Gvar.var_3310, Gvar.var_3309, Gvar.var_3311);
            Gvar.var_3308 = Gvar.var_3308 + 40;
            Gvar.var_3309 = Gvar.var_3309 + 40;
        }
        return;
}

export {func860}
