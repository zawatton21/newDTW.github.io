import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import { runGeneratedGameFunction, shouldUseGeneratedGameFunction } from '../nelisp_bridge'

// 旧 func900
async function func0959(this: any) {
    if (shouldUseGeneratedGameFunction('func0959')) {
        await runGeneratedGameFunction('func0959', { thisArg: this });
        return;
    }
    if (Gvar.var_3820 != "") {
        Gvar.var_3820 = "話文" + Gvar.var_3820;
        Adap.tcpput(Gvar.var_3820, Gvar.var_1050);
        Adap.tcpput("\n", Gvar.var_1050);
        Adap.gsel(30);
        Adap.objprm(0, "");
        Adap.gsel(0);
    }
    return;
}

export {func0959}
