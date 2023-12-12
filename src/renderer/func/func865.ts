import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Class from '../classes'

async function func865(this: any) {
        Adap.dbgprt(865);
        Adap.dialog(Gvar.data0 = "画面を初期化しますか？", Gvar.data1 = 2, "");
        if (Gvar.stat == 7) {
            await Func.func851();
            return;
        }
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
        await Func.func875();
        Gvar.var_199 = 2;
        Gvar.var_66 = 26;
        Gvar.var_67 = 15;
        Gvar.var_3273 = 0;
        Gvar.var_3294 = 0;
        await Func.func852();
        await Func.func851();
        return;
}

export {func865}
