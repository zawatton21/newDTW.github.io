import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func721(this: any) {
        Adap.dbgprt(721);
        Gvar.var_480 = 1;
        Gvar.var_1008 = 0;
        if (Gvar.count_buying_price >= 1) {
            Gvar.var_1008 = 1;
        }
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_480].Var11 == 1) {
                Gvar.var_1008 = Gvar.var_1008 + 1;
            }
            if (Gvar.var_233[Gvar.var_480].Var0 >= 800 && Gvar.var_233[Gvar.var_480].Var0 < 900) {
                Gvar.var_484 = 1;
                Gvar.var_485 = Gvar.var_233[Gvar.var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1) {
                        Gvar.var_1008 = Gvar.var_1008 + 1;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            Gvar.var_480 = Gvar.var_480 + 1;
        }
        Gvar.var_449 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_447 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Gvar.var_77[Gvar.var_447][Gvar.var_449] > 0 && Gvar.var_72[Gvar.var_447][Gvar.var_449] == 0) {
                    Gvar.var_3115 = Gvar.var_77[Gvar.var_447][Gvar.var_449];
                    if (Gvar.var_78[Gvar.var_3115].Var11 == 1) {
                        Gvar.var_1008 = Gvar.var_1008 + 1;
                    }
                    if (Gvar.var_78[Gvar.var_3115].Var0 >= 800 && Gvar.var_78[Gvar.var_3115].Var0 < 900) {
                        Gvar.var_484 = 1;
                        Gvar.var_485 = Gvar.var_78[Gvar.var_3115].Var6;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1) {
                                Gvar.var_1008 = Gvar.var_1008 + 1;
                            }
                            Gvar.var_484 = Gvar.var_484 + 1;
                        }
                    }
                }
                Gvar.var_447 = Gvar.var_447 + 1;
            }
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        return;
}

export {func721}
