import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func189(this: any) {
        Adap.dbgprt(189);
        Gvar.var_886 = Adap.sdim(10000);
        Gvar.var_886 = "罠";
        Gvar.var_887 = 1;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            Gvar.var_888 = Gvar.var_887;
            await Func.func554();
            Gvar.var_886 = Gvar.var_886 + "\n" + Gvar.var_888 + " " + Gvar.var_889;
            Gvar.var_887 = Gvar.var_887 + 1;
        }
        return;
}

export {func189}
