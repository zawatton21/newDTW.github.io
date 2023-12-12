import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func844(this: any) {
        Adap.dbgprt(844);
        Adap.clrobj(Gvar.data0 = 9, Gvar.data1 = 9);
        Adap.objsize(60);
        Adap.pos(680 - 76, Gvar.var_3226 + 22);
        Adap.combox(Gvar.var_3256, 100, "金額\n100G\n200G\n300G\n400G\n500G\n600G\n700G\n800G\n900G");
        return;
}

export {func844}
