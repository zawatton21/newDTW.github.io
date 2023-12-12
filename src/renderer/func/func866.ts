import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func866(this: any) {
        Adap.dbgprt(866);
        if (Gvar.var_3266 == 2 || Gvar.var_3266 == 3 || Gvar.var_3266 == 4 || Gvar.var_3266 == 6 || Gvar.var_3266 == 7) {
            if (Gvar.var_65[Gvar.var_3315][Gvar.var_3316] == 1) {
        
                Gvar.var_65 = Adap.dim(70, 70, null, null);
            }
            if (Gvar.var_82[Gvar.var_3315][Gvar.var_3316] != 0) {
                Gvar.var_3335 = Gvar.var_82[Gvar.var_3315][Gvar.var_3316];
                Gvar.var_83[Gvar.var_3335].Var0 = 0;
                Gvar.var_83[Gvar.var_3335].Var16 = 0;
                Gvar.var_82[Gvar.var_3315][Gvar.var_3316] = 0;
            }
        }
        if (Gvar.var_3266 == 2 || Gvar.var_3266 == 3 || Gvar.var_3266 == 4 || Gvar.var_3266 == 8 || Gvar.var_3266 == 9) {
            if (Gvar.var_73[Gvar.var_3315][Gvar.var_3316] == 1) {
        
                Gvar.var_73 = Adap.dim(70, 70, null, null);
            }
            if (Gvar.var_77[Gvar.var_3315][Gvar.var_3316] != 0) {
                Gvar.var_3335 = Gvar.var_77[Gvar.var_3315][Gvar.var_3316];
                Gvar.var_78[Gvar.var_3335].Var0 = 0;
                Gvar.var_78[Gvar.var_3335].Var1 = 0;
                Gvar.var_78[Gvar.var_3335].Var2 = 0;
                Gvar.var_78[Gvar.var_3335].Var3 = 0;
                Gvar.var_77[Gvar.var_3315][Gvar.var_3316] = 0;
            }
            if (Gvar.var_80[Gvar.var_3315][Gvar.var_3316] != 0) {
                Gvar.var_3335 = Gvar.var_80[Gvar.var_3315][Gvar.var_3316];
                Gvar.var_81[Gvar.var_3335][0] = 0;
                Gvar.var_80[Gvar.var_3315][Gvar.var_3316] = 0;
            }
        }
        return;
}

export {func866}
