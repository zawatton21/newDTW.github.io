import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func902(this: any) {
        Adap.dbgprt(902);
        if (Gvar.var_494[1] != "") {
            Gvar.var_3560 = Gvar.var_494[1];
            await Func.func903();
            Gvar.var_3561 = "" + Gvar.var_3562 + "" + Gvar.var_494[1];
            Adap.tcpput(Gvar.var_3561, Gvar.var_1050);
            Adap.tcpput("\n", Gvar.var_1050);
        }
        if (Gvar.var_494[2] != "") {
            Gvar.var_3560 = Gvar.var_494[2];
            await Func.func903();
            Gvar.var_3563 = "" + Gvar.var_3562 + "" + Gvar.var_494[2];
            Adap.tcpput(Gvar.var_3563, Gvar.var_1050);
            Adap.tcpput("\n", Gvar.var_1050);
        }
        await Func.func907();
        return;
}

export {func902}
