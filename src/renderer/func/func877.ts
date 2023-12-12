import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Class from '../classes'

async function func877(this: any) {
        Adap.dbgprt(877);
        Gvar.var_983 = Adap.sdim(3000);
        Gvar.var_71 = Adap.dim(70, 70, null, null);

        Gvar.var_65 = Adap.dim(70, 70, null, null);

        Gvar.var_82 = Adap.dim(70, 70, null, null);

        Gvar.var_77 = Adap.dim(70, 70, null, null);

        Gvar.var_80 = Adap.dim(70, 70, null, null);

        Gvar.var_73 = Adap.dim(70, 70, null, null);
        Gvar.var_986 = Adap.dim(100);

        Gvar.var_486 = Adap.dim(80, 21, 30, null);

        Gvar.var_76 = Adap.dim(100, 5, 3, null);

        Gvar.var_74 = Adap.dim(70, 70, null, null);
        Gvar.var_75 = Adap.dim(20);
        Gvar.var_83 = Class.CharactorInfo.dim(300);
        Gvar.var_78 = Class.ItemInfo.dim(300);

        Gvar.var_81 = Adap.dim(300, 7, null, null);
        await Func.func881();
        await Func.func870();
        await Func.func878();
        Gvar.var_3474 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_3474].Var10 == Gvar.var_201) {
                if (Gvar.var_83[Gvar.var_3474].Var0 != 101 && Gvar.var_83[Gvar.var_3474].Var0 != 102 && Gvar.var_83[Gvar.var_3474].Var0 != 103 && Gvar.var_83[Gvar.var_3474].Var0 != 104) {
                    Gvar.var_83[Gvar.var_3474].Var12 = 0;
                }
            }
            Gvar.var_3474++;
        }
        return;
}

export {func877}
