import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func872(this: any) {
        Adap.dbgprt(872);
        Adap.dialog(Gvar.data0 = "btq", Gvar.data1 = 17, "魔少年の問題ファイル");
        if (Gvar.stat == 0) {
            Adap.chdir(Gvar.var_30);
            await Func.func851();
            return;
        }
        Gvar.var_3336 = Gvar.refstr;
        if (Adap.instr(Gvar.var_3336, 0, ".btq") == (-1)) {
            Gvar.var_3336 = "" + Gvar.var_3336 + ".btq";
        }
        Gvar.var_3273 = 1;
        await Func.func873();
        Adap.chdir(Gvar.var_30);
        Adap.objsel(0);
        await Func.func851();
        return;
}

export {func872}
