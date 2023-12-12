import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func683(this: any) {
        Adap.dbgprt(683);
        Gvar.var_2201 = 0;
        if (Gvar.var_83[Gvar.var_673].Var16 >= 999999) {
            Gvar.var_83[Gvar.var_673].Var16 = 999999;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 36) {
            Gvar.var_1025 = Gvar.var_83[Gvar.var_673].Var16;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 105) {
            Gvar.var_1026 = Gvar.var_83[Gvar.var_673].Var16;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 106) {
            Gvar.var_1027 = Gvar.var_83[Gvar.var_673].Var16;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 107) {
            Gvar.var_1027 = Gvar.var_83[Gvar.var_673].Var16;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 108) {
            Gvar.var_1029 = Gvar.var_83[Gvar.var_673].Var16;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 >= 10) {
            return;
        }
        Gvar.var_3090 = 0;
        if (Gvar.var_83[Gvar.var_673].Var39 <= 1 && Gvar.var_83[Gvar.var_673].Var16 >= 50) {
            Gvar.var_3090 = 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 2 && Gvar.var_83[Gvar.var_673].Var16 >= 200) {
            Gvar.var_3090 = 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 3 && Gvar.var_83[Gvar.var_673].Var16 >= 500) {
            Gvar.var_3090 = 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 4 && Gvar.var_83[Gvar.var_673].Var16 >= 1000) {
            Gvar.var_3090 = 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 5 && Gvar.var_83[Gvar.var_673].Var16 >= 2000) {
            Gvar.var_3090 = 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 6 && Gvar.var_83[Gvar.var_673].Var16 >= 4000) {
            Gvar.var_3090 = 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 7 && Gvar.var_83[Gvar.var_673].Var16 >= 10000) {
            Gvar.var_3090 = 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 8 && Gvar.var_83[Gvar.var_673].Var16 >= 20000) {
            Gvar.var_3090 = 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 == 9 && Gvar.var_83[Gvar.var_673].Var16 >= 40000) {
            Gvar.var_3090 = 1;
        }
        if (Gvar.var_3090 == 1) {
            Gvar.var_83[Gvar.var_673].Var39 = Gvar.var_83[Gvar.var_673].Var39 + 1;
            if (Gvar.var_83[Gvar.var_673].Var39 == 1) {
                Gvar.var_83[Gvar.var_673].Var39 = 2;
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
            await Func.func626(); // 敵リスト
            Gvar.var_3091 = Gvar.enemy_name;
            Gvar.var_83[Gvar.var_673].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_673].Var39 + 10) / 10);
            if (Gvar.var_83[Gvar.var_673].Var3 >= 999) {
                Gvar.var_83[Gvar.var_673].Var3 = 999;
            }
            Gvar.var_2201 = 1;
        }
        if (Gvar.var_2201 == 1) {
            await Func.func340(); // キー入力による選択処理
            Adap.DSPLAY(142); // レベルアップした時の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "" + Gvar.var_3091 + "は";
            Gvar.comments_row2a = "レベルが上がった！";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
        }
        Gvar.var_2201 = 0;
        return;
}

export {func683}
