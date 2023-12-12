import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func174(this: any) {
        Adap.dbgprt(174);
        Gvar.var_838 = 10;
        Gvar.var_480 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_480].Var11 != 1) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_480].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_482 = 0;
                Gvar.var_482 = (Gvar.var_233[Gvar.var_480].Var3 + Gvar.var_233[Gvar.var_480].Var4) * 50;
                if (Gvar.var_233[Gvar.var_480].Var19 > 1) {
                    Gvar.var_482 = Gvar.var_233[Gvar.var_480].Var19 * 500 + Gvar.var_482;
                }
                Gvar.var_838 = Gvar.var_838 + Gvar.buying_price + Gvar.var_482;
            }
            if (Gvar.var_233[Gvar.var_480].Var0 >= 800 && Gvar.var_233[Gvar.var_480].Var0 < 900) {
                Gvar.var_484 = 1;
                Gvar.var_485 = Gvar.var_233[Gvar.var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] != 1) {
                        Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                        await Func.func492(); // アイテムリスト呼び出し
                        Gvar.var_482 = 0;
                        Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                        if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                            Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                        }
                        Gvar.var_838 = Gvar.var_838 + Gvar.buying_price + Gvar.var_482;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            Gvar.var_480 = Gvar.var_480 + 1;
        }
        if (Gvar.current_floor >= 2) {
            Gvar.var_838 = Gvar.current_floor * 2000 + Gvar.var_838;
        }
        Gvar.var_838 = Gvar.var_839 * 50 + Gvar.var_838;
        Gvar.var_838 = Gvar.var_533 + Gvar.var_838;
        Gvar.var_533 = 0;
        Gvar.var_839 = 0;
        return;
}

export {func174}
