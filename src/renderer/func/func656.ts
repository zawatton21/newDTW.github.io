import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func656(this: any) {
        Adap.dbgprt(656);
        Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        if (Gvar.var_1637 == 1) { // 攻撃モーションにスタンド像を付与するフラグがONの場合
            Gvar.var_743 = 1; //スタンド像付与フラグON
        }
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        if (Gvar.var_2868 == 1) {
            Gvar.var_2869 = Gvar.var_199;
        }
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_672 = Gvar.var_83[Gvar.var_673].Var0;
        await Func.func093();
        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
            if (Gvar.var_2868 == 1) {
                if (Gvar.var_199 == 1) {
                    Gvar.var_2870 = 2;
                }
                if (Gvar.var_199 == 2) {
                    Gvar.var_2870 = 3;
                }
                if (Gvar.var_199 == 3) {
                    Gvar.var_2870 = 6;
                }
                if (Gvar.var_199 == 6) {
                    Gvar.var_2870 = 9;
                }
                if (Gvar.var_199 == 9) {
                    Gvar.var_2870 = 8;
                }
                if (Gvar.var_199 == 8) {
                    Gvar.var_2870 = 7;
                }
                if (Gvar.var_199 == 7) {
                    Gvar.var_2870 = 4;
                }
                if (Gvar.var_199 == 4) {
                    Gvar.var_2870 = 1;
                }
                Gvar.var_199 = Gvar.var_2870;
                if (cnt1 >= 6) {
                    Gvar.var_199 = Gvar.var_2869;
                }
            }
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_389 = 0;
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        Gvar.var_240 = 0;
        return;
}

export {func656}
