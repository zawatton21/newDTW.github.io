import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func916(this: any) {
        Adap.dbgprt(916);
        if (Gvar.var_1046 >= 29) {
            return;
        }
        Gvar.var_1046++;
        Gvar.var_3582 = "";
        Gvar.var_3568 = 0;
        Gvar.var_3569 = 0;
        for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
            Adap.getstr(Gvar.var_3582, Gvar.var_3543, Gvar.var_3568, 44);
            Gvar.var_1058[Gvar.var_1046][Gvar.var_3569] = Adap.int(Gvar.var_3582);
    
            Gvar.var_3568 = Gvar.var_3568 + Gvar.strsize;
            Gvar.var_3569++;
        }
        return;
}

export {func916}
