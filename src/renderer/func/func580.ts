import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func580(this: any) {
        Adap.dbgprt(580);
        Gvar.var_2797 = Adap.rnd(5);
        if (Gvar.dungeon_number == 99) {
            Gvar.var_2797 = 1;
        }
        if (Gvar.var_2797 == 0) {
            if (Gvar.var_83[Gvar.var_673].Var0 == 91) {
                Gvar.var_2798 = 2;
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 92) {
                Gvar.var_2798 = 3;
            }
            if (Gvar.var_2798 == 2) {
                Gvar.var_83[Gvar.var_673].Var0 = 76;
                Gvar.var_83[Gvar.var_673].Var3 = 25;
                Gvar.var_83[Gvar.var_673].Var4 = 3;
            }
            if (Gvar.var_2798 == 3) {
                Gvar.var_83[Gvar.var_673].Var0 = 12;
                Gvar.var_83[Gvar.var_673].Var3 = 45;
                Gvar.var_83[Gvar.var_673].Var4 = 3;
            }
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "";
            if (Gvar.var_2798 == 2) {
                Gvar.comments_row2 = "ｴｺｰｽﾞはACT2に成長した！";
            }
            if (Gvar.var_2798 == 3) {
                Gvar.comments_row2 = "ｴｺｰｽﾞはACT3に成長した！";
            }
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
        }
        return;
}

export {func580}
