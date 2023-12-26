import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func637(this: any) {
        Adap.dbgprt(637);
        Gvar.var_217 = 1;
        Gvar.var_2965 = 0;
        // No = 101 シルバーチャリオッツのDISCを装備している場合
        if (Gvar.equip_disc[101] == 1 && Gvar.var_2925 == 0 && Gvar.var_83[Gvar.var_314].Var0 > 0 && Gvar.var_2924 == 0 && Gvar.var_2965 == 0 && Gvar.to_freeze == 0 && Gvar.var_178 == 0) {
            Gvar.var_2966 = Gvar.var_83[Gvar.var_314].Var1;
            Gvar.var_2967 = Gvar.var_83[Gvar.var_314].Var2;
            if (Gvar.var_82[Gvar.var_2966][Gvar.var_2967] != 0) {
                Gvar.var_2925 = 1;
                Gvar.var_243 = 1;
                await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                return;
            }
        }
        if (Gvar.sympathy_id == 135 && Gvar.var_341 == 1 && Gvar.var_83[Gvar.var_314].Var0 > 0 && Gvar.var_2924 == 0 && Gvar.var_2965 == 0 && Gvar.to_freeze == 0 && Gvar.var_178 == 0) {
            Gvar.var_2966 = Gvar.var_83[Gvar.var_314].Var1;
            Gvar.var_2967 = Gvar.var_83[Gvar.var_314].Var2;
            if (Gvar.var_82[Gvar.var_2966][Gvar.var_2967] != 0) {
                if (Gvar.kougeki_disc_id  == 101) { // No = 101 シルバーチャリオッツのDISCを攻撃装備している場合
                    Gvar.var_341 = 2;
                    Gvar.var_243 = 1;
                    Gvar.kougeki_disc_id  = 122; // No = 122 アヌビス神のDISCを攻撃装備している場合
                    await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                    return;
                }
                if (Gvar.kougeki_disc_id  == 122) { // No = 122 アヌビス神のDISCを攻撃装備している場合
                    Gvar.var_341 = 2;
                    Gvar.var_243 = 1;
                    Gvar.kougeki_disc_id  = 101; // No = 101 シルバーチャリオッツのDISCを攻撃装備している場合
                    await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                    return;
                }
            }
        }
        if (Gvar.kougeki_disc_id  == 122 || Gvar.kougeki_disc_id  == 101) {
            Gvar.kougeki_disc_id  = Gvar.var_2923;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 > 0 && Gvar.var_83[Gvar.var_314].Var4 == 6) {
            Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2942;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 164 || Gvar.var_83[Gvar.var_314].Var0 == 165) {
            Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2942;
        }
        if (Gvar.equip_disc[120] == 1 && Gvar.var_2926 == 1 && Gvar.to_freeze == 0 && Gvar.var_178 == 0) {
            Gvar.var_2926 = 0;
            await Func.func642();
            if (Gvar.var_2968 == 1) {
                Gvar.var_2968 = 0;
                Gvar.var_243 = 1;
                await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                return;
            }
        }
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func637}
