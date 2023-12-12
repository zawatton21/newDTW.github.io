import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func904(this: any) {
        Adap.dbgprt(904);
        Gvar.var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + Gvar.current_floor + "階に降りた";
        if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 2) {
            Gvar.var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + Gvar.current_floor + "階に上った";
        }
        Adap.tcpput(Gvar.var_3561, Gvar.var_1050);
        Adap.tcpput("\n", Gvar.var_1050);
        await Func.func907();
        return;
}

export {func904}
