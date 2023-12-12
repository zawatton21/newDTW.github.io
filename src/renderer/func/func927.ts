import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func927(this: any) {
        Adap.dbgprt(927);
        Gvar.var_3568 = 0;
        Gvar.var_3569 = 0;
        Gvar.var_3541 = 1;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            Adap.getstr(Gvar.var_1068[Gvar.var_3569], Gvar.var_3543, Gvar.var_3568, 44);
            if (cnt1 == 0) {
                Gvar.var_1070[Gvar.var_3589] = "" + Gvar.var_1068[cnt1];
            }
            if (cnt1 != 0 && cnt1 != 29) {
                Gvar.var_1069[Gvar.var_3589][cnt1] = Adap.int(Gvar.var_1068[cnt1]);
            }
            if (cnt1 == 29) {
                Gvar.var_1071[Gvar.var_3589] = Gvar.var_1068[cnt1];
            }
    
            Gvar.var_3568 = Gvar.var_3568 + Gvar.strsize;
            Gvar.var_3569++;
        }
        return;
}

export {func927}
