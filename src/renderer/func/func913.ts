import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func913(this: any) {
        Adap.dbgprt(913);
        Gvar.var_408++;
        Gvar.var_3568 = 0;
        Gvar.var_3569 = 0;
        for (let cnt1 = 0; cnt1 < 29; ++cnt1) {
            Adap.getstr(Gvar.var_3521[Gvar.var_3569], Gvar.var_3537, Gvar.var_3568, 44);
    
            Gvar.var_3568 = Gvar.var_3568 + Gvar.strsize;
            Gvar.var_3569++;
        }
        Gvar.var_3569 = 1;
        Gvar.var_3581 = 0;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            Gvar.var_3518[Gvar.var_408][Gvar.var_3581] = Adap.int(Gvar.var_3521[Gvar.var_3569]);
            Gvar.var_3569++;
            Gvar.var_3581++;
        }
        return;
}

export {func913}
