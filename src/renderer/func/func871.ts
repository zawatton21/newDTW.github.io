import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func871(this: any) {
        Adap.dbgprt(871);
        Gvar.var_3337 = Gvar.var_66;
        Gvar.var_3338 = Gvar.var_67;
        if (Gvar.var_3273 == 0) {
            Adap.dialog(Gvar.data0 = "btq", Gvar.data1 = 17, "魔少年の問題ファイル");
            if (Gvar.stat == 0) {
                await Func.func851();
                return;
            }
            Gvar.var_3336 = Gvar.refstr;
            if (Adap.instr(Gvar.var_3336, 0, ".btq") == (-1)) {
                Gvar.var_3336 = "" + Gvar.var_3336 + ".btq";
            }
            Gvar.var_3273 = 1;
        }
        await Func.func873();
        Adap.chdir(Gvar.var_30);
        Adap.objsel(0);
        Adap.clrobj();
        await Func.func233();
        if (Gvar.var_10 == 0) {
            Adap.width(340, 340);
        }
        if (Gvar.var_10 == 1) {
            Adap.width(680, 680);
        }
        Gvar.var_3462 = 1;
        await Func.func876();
        return;
}

export {func871}
