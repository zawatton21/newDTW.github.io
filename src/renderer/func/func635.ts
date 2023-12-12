import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func635(this: any) {
        Adap.dbgprt(635);
        if (Gvar.kougeki_disc_id  == 110) {
            Gvar.kougeki_disc_id  = 108;
        }
        Gvar.var_2923 = Gvar.kougeki_disc_id ;
        if (Gvar.equip_disc[101] == 1 && Gvar.var_2924 == 0) {
            Gvar.var_2925 = Adap.rnd(2);
        }
        Gvar.var_2926 = 1;
        Gvar.var_2927 = 0;
        if (Gvar.sympathy_id == 135) {
            Gvar.var_341 = 1;
        }
        if (Gvar.equip_disc[105] == 0) {
            Gvar.var_1030 = 0;
        }
        await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
}

export {func635}
