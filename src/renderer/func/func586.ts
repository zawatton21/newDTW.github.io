import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func586(this: any) {
        Adap.dbgprt(586);
        Gvar.var_1192 = 0;
        if (Gvar.var_83[Gvar.var_673].Var0 == 47 || Gvar.var_83[Gvar.var_673].Var0 == 67) {
            return;
        }
        Gvar.var_2819 = Gvar.var_673;
        Gvar.var_402 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
        Gvar.enemy_list = Gvar.var_83[Gvar.var_402].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_971 = Gvar.enemy_defence;
        Gvar.enemy_list = Gvar.var_83[Gvar.var_2819].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_2820 = Gvar.enemy_power;
        if (Gvar.var_83[Gvar.var_402].Var0 == 53) {
            Gvar.var_971 = Gvar.enemy_defence;
        }
        if (Gvar.var_83[Gvar.var_2819].Var39 >= 2) {
            Gvar.var_2820 = Math.floor(Gvar.var_2820 * (Gvar.var_83[Gvar.var_2819].Var39 * 2 + 10) / 10);
        }
        if (Gvar.var_83[Gvar.var_402].Var39 >= 2) {
            if (Gvar.var_83[Gvar.var_402].Var31 == 4 || Gvar.var_83[Gvar.var_402].Var31 == 5) {
                Gvar.var_971 = Math.floor(Gvar.var_971 * (Gvar.var_83[Gvar.var_402].Var39 * 2 + 10) / 10);
            }
        }
        if (Gvar.var_83[Gvar.var_2819].Var25 >= 1 && Gvar.var_83[Gvar.var_2819].Var25 <= 50) {
            Gvar.var_2820 = Gvar.var_2820 + Gvar.var_83[Gvar.var_2819].Var25;
        }
        if (Gvar.var_83[Gvar.var_2819].Var25 >= 51 && Gvar.var_83[Gvar.var_2819].Var25 < 99) {
            Gvar.var_2820 = Gvar.enemy_power - (Gvar.var_83[Gvar.var_2819].Var25 - 50);
            if (Gvar.var_2820 <= 1) {
                Gvar.var_2820 = 1;
            }
        }
        Gvar.var_949 = Math.floor(Gvar.var_2820 * (Gvar.var_2820 + Gvar.var_2820) / 16) + Gvar.var_2820;
        for (let cnt1 = 0; cnt1 < Gvar.var_971; ++cnt1) {
            Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
        }
        Gvar.var_2817 = Adap.rnd(33);
        Gvar.var_2817 = Gvar.var_2817 + 111;
        Gvar.var_209 = Math.floor(Gvar.var_949 * Gvar.var_2817 / 128) + 1;
        if (Gvar.var_83[Gvar.var_673].Var0 == 141) {
            Gvar.var_2821 = 1;
        }
        Gvar.var_402 = Gvar.var_82[Gvar.var_455][Gvar.var_456];
        Gvar.var_403 = "";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_2196 = 1;
        await Func.func705();
        Gvar.var_2821 = 0;
        Gvar.var_2196 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        return;
}

export {func586}
