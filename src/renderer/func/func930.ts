import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func930(this: any) {
        Adap.dbgprt(930);
        if (Gvar.var_494[1] != "") {
            Gvar.var_3560 = Gvar.var_494[1];
            await Func.func931();
            Gvar.var_3561 = "" + Gvar.var_3562 + "" + Gvar.var_494[1];
            Adap.tcpput(Gvar.var_3561, Gvar.var_1050);
            Adap.tcpput("\n", Gvar.var_1050);
        }
        if (Gvar.var_494[2] != "") {
            Gvar.var_3560 = Gvar.var_494[2];
            await Func.func931();
            Gvar.var_3563 = "" + Gvar.var_3562 + "" + Gvar.var_494[2];
            Adap.tcpput(Gvar.var_3563, Gvar.var_1050);
            Adap.tcpput("\n", Gvar.var_1050);
        }
        await Func.func929();
        return;
}

export {func930}