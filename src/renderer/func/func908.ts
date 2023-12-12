import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func908(this: any) {
        Adap.dbgprt(908);
        Gvar.var_3568 = 0;
        Gvar.var_3569 = 0;
        for (let cnt1 = 0; cnt1 < 22; ++cnt1) {
            Adap.getstr(Gvar.var_1068[Gvar.var_3569], Gvar.var_3543, Gvar.var_3568, 44);
    
            Gvar.var_3568 = Gvar.var_3568 + Gvar.strsize;
            Gvar.var_3569++;
        }
        Gvar.var_3570 = Gvar.var_3568;
        Adap.getstr(Gvar.var_1068[25], Gvar.var_3543, Gvar.var_3568, 44);
        if (Gvar.var_3525 == "相手の情報") {
            Gvar.var_3525 = "" + Gvar.var_1068[0] + "さんの情報";
            Adap.gsel(33);
            Adap.title(Gvar.var_3525);
            Adap.gsel(0);
        }
        return;
}

export {func908}
