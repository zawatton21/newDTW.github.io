import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func898(this: any) {
        Adap.dbgprt(898);
        if (Gvar.var_3535 == 0) {
            Gvar.var_3536 = "初水";
        }
        if (Gvar.var_3535 == 1) {
            Gvar.var_3536 = "初赤";
        }
        if (Gvar.var_3535 == 2) {
            Gvar.var_3536 = "初青";
        }
        if (Gvar.var_3535 == 3) {
            Gvar.var_3536 = "初黄";
        }
        Adap.tcpput("" + Gvar.var_3536 + "" + Gvar.var_40, Gvar.var_1050);
        Adap.tcpput("\n", Gvar.var_1050);
        Gvar.var_3530 = 0;
        Gvar.var_3531 = 0;
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_3537 = Adap.sdim(1024);
            Adap.tcpgetl(Gvar.var_3537, 1024, Gvar.var_1050);
            if (Gvar.stat != 0 && Gvar.var_3537 == "o2") {
                Gvar.var_3531 = 1;
                break;
            }
            if (Gvar.stat != 0 && Gvar.var_3537 == "ok") {
                Gvar.var_3531 = 0;
                break;
            }
            if (Gvar.stat != 0 && Gvar.var_3537 == "man") {
                Gvar.var_3530 = 1;
                break;
            }
            await Adap.wait(1);
        }
        return;
}

export {func898}
