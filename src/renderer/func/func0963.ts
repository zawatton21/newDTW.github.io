import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from './index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

// 旧 func904
async function func0963(this: any) {
    if (shouldUseGeneratedGameFunction('func0963')) {
        await runGeneratedGameFunction('func0963', { thisArg: this });
        return;
    }

    Gvar.var_3864 = "行橙ﾃﾞｨｱﾎﾞﾛは" + Gvar.current_floor + "階に降りた";
    if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 2) {
        Gvar.var_3864 = "行橙ﾃﾞｨｱﾎﾞﾛは" + Gvar.current_floor + "階に上った";
    }
    Adap.tcpput(Gvar.var_3864, Gvar.var_1050);
    Adap.tcpput("\n", Gvar.var_1050);
    await Func.func0966();
    return;
}

export {func0963}
