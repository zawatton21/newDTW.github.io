import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func929(this: any) {
        Adap.dbgprt(929);
        await Func.func426();
        await Func.func427();
        await Func.func428();
        await Func.func429();
        if (Gvar.sympathy_id == 135) {
            if (Gvar.bougyo_disc_id == 122) {
                Gvar.kougeki_disc_id  = 101;
            }
            if (Gvar.bougyo_disc_id == 101) {
                Gvar.kougeki_disc_id  = 122;
            }
        }
        Gvar.var_3516 = Adap.dim(30);
        Gvar.var_3516[1] = Gvar.current_level;
        Gvar.var_3516[2] = Gvar.var_352;
        Gvar.var_3516[3] = Gvar.var_211;
        Gvar.var_3516[4] = Gvar.var_566;
        Gvar.var_3516[5] = Gvar.var_565;
        Gvar.var_3516[6] = Gvar.var_3079;
        Gvar.var_3516[7] = Gvar.var_534;
        Gvar.var_3516[8] = Gvar.current_floor;
        Gvar.var_3516[9] = Gvar.wallet;
        Gvar.var_3516[10] = Gvar.dungeon_number;
        Gvar.var_3516[11] = Gvar.kougeki_disc_id ;
        Gvar.var_3516[12] = Gvar.var_233[Gvar.var_553].Var4;
        Gvar.var_3516[13] = Gvar.var_580;
        Gvar.var_3516[14] = Gvar.bougyo_disc_id;
        Gvar.var_3516[15] = Gvar.var_233[Gvar.var_554].Var4;
        Gvar.var_3516[16] = Gvar.var_581;
        Gvar.var_3516[17] = Gvar.nouryoku_disc_id;
        Gvar.var_3516[18] = Gvar.var_233[Gvar.var_555].Var4;
        Gvar.var_3516[19] = Gvar.shageki_disc_id;
        Gvar.var_3516[20] = Gvar.var_233[Gvar.var_556].Var3;
        Gvar.var_3516[21] = Gvar.var_233[Gvar.var_553].Var19;
        Gvar.var_3516[22] = Gvar.var_233[Gvar.var_553].Var13;
        Gvar.var_3516[23] = Gvar.var_233[Gvar.var_554].Var19;
        Gvar.var_3516[24] = Gvar.var_233[Gvar.var_554].Var13;
        Gvar.var_3516[25] = Gvar.var_233[Gvar.var_555].Var19;
        Gvar.var_3516[26] = Gvar.var_233[Gvar.var_555].Var13;
        Gvar.var_3566 = 0;
        Gvar.var_3567 = "捨送";
        for (let cnt1 = 0; cnt1 < 27; ++cnt1) {
            Gvar.var_3567 = "" + Gvar.var_3567 + "," + Gvar.var_3516[Gvar.var_3566];
            Gvar.var_3566++;
        }
        Gvar.var_3567 = "" + Gvar.var_3567 + "," + Gvar.var_1170;
        Adap.tcpput(Gvar.var_3567, Gvar.var_1050);
        Adap.tcpput("\n", Gvar.var_1050);
        return;
}

export {func929}
