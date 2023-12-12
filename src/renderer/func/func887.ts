import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func887(this: any) {
        Adap.dbgprt(887);
        Gvar.var_3504 = Gvar.var_3336;
        await Adap.exist(Gvar.var_3504);

        Gvar.var_3505 = Gvar.strsize;
        if (Gvar.var_3505 < 0) {
            Gvar.var_3505 = 10000;
        }
        Gvar.var_254 = "lナ2";
        Gvar.var_3506 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_3505 - 1; ++cnt1) {
            Gvar.var_3507 = Adap.peek(Gvar.var_3472, Gvar.var_3506);
            Gvar.conf_keyon = Adap.peek(Gvar.var_254, Gvar.var_3506 % 4);
            Gvar.var_3508 = Gvar.var_3507 ^ Gvar.conf_keyon;
            Gvar.conf_keyon = Gvar.conf_keyon + 57 && 255;
            Adap.poke(Gvar.var_254, Gvar.var_3506 % 4, Gvar.conf_keyon);
            Adap.poke(Gvar.var_3472, Gvar.var_3506, Gvar.var_3508);
            Gvar.var_3506++;
        }
        return;
}

export {func887}
