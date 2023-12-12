import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func176(this: any) {
        Adap.dbgprt(176);
        Gvar.var_789 = 0;
        Gvar.var_841 = Gvar.var_792[Gvar.var_793][0][3];
        Gvar.var_842 = 0;
        Gvar.var_843 = 0;
        Gvar.var_844 = 1;
        Gvar.var_845 = Adap.dim(100);
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            Gvar.var_846 = Gvar.var_792[Gvar.var_793][Gvar.var_843][3];
            Gvar.var_847 = Gvar.var_792[Gvar.var_793][Gvar.var_844][3];
            if (Gvar.var_842 == 0 && Gvar.var_841 > Gvar.var_847) {
                Gvar.var_848 = 0;
                for (let cnt3 = 0; cnt3 < 70; ++cnt3) {
                    Gvar.var_845[Gvar.var_848] = Gvar.var_792[Gvar.var_793][Gvar.var_844][Gvar.var_848];
                    Gvar.var_792[Gvar.var_793][Gvar.var_844][Gvar.var_848] = Gvar.var_792[Gvar.var_793][0][Gvar.var_848];
                    Gvar.var_792[Gvar.var_793][0][Gvar.var_848] = Gvar.var_845[Gvar.var_848];
                    Gvar.var_848++;
                }
                Gvar.var_788 = Gvar.var_844;
                Gvar.var_842 = 1;
                Gvar.var_843 = Gvar.var_843 + 1;
                Gvar.var_844 = Gvar.var_844 + 1;
            }
            if (Gvar.var_842 == 1) {
                Gvar.var_848 = 0;
                for (let cnt3 = 0; cnt3 < 70; ++cnt3) {
                    Gvar.var_845[Gvar.var_848] = Gvar.var_792[Gvar.var_793][Gvar.var_844][Gvar.var_848];
                    Gvar.var_792[Gvar.var_793][Gvar.var_844][Gvar.var_848] = Gvar.var_792[Gvar.var_793][0][Gvar.var_848];
                    Gvar.var_792[Gvar.var_793][0][Gvar.var_848] = Gvar.var_845[Gvar.var_848];
                    Gvar.var_848++;
                }
            }
            Gvar.var_843 = Gvar.var_843 + 1;
            Gvar.var_844 = Gvar.var_844 + 1;
        }
        if (Gvar.var_792[Gvar.var_793][0][3] == Gvar.var_838) {
            Gvar.var_789 = 1;
            Gvar.var_788 = 20;
            Gvar.var_785 = 4;
        }
        return;
}

export {func176}
