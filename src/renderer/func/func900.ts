import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func900(this: any) {
        Adap.dbgprt(900);
        if (Gvar.var_3517 != "") {
            Gvar.var_3517 = "話文" + Gvar.var_3517;
            Adap.tcpput(Gvar.var_3517, Gvar.var_1050);
            Adap.tcpput("\n", Gvar.var_1050);
            Adap.gsel(30);
            Adap.objprm(0, "");
            Adap.gsel(0);
        }
        return;
}

export {func900}
