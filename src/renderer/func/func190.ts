import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func190(this: any) {
        Adap.dbgprt(190);
        Gvar.var_890 = Adap.sdim(10000);
        Gvar.var_890 = "敵";
        Gvar.var_887 = 1;
        for (let cnt1 = 0; cnt1 < 100; ++cnt1) {
            Gvar.enemy_list = Gvar.var_887;
            await Func.func626();
            Gvar.var_890 = Gvar.var_890 + "\n" + Gvar.enemy_list + " " + Gvar.enemy_name;
            Gvar.var_887 = Gvar.var_887 + 1;
        }
        return;
}

export {func190}
