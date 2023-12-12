import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 39 敵ハイウェイスターの特殊能力
async function enemy039(this: any) {
        Gvar.var_2830 = Adap.rnd(4);
        if (Gvar.var_2830 == 0 && Gvar.var_350 >= 11) {
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                Gvar.var_411 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                Gvar.var_411 = 2;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                Gvar.var_411 = 3;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                Gvar.var_411 = 4;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                Gvar.var_411 = 5;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                Gvar.var_411 = 6;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                Gvar.var_411 = 7;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                Gvar.var_411 = 8;
            }
            Gvar.var_389 = 2;
            Gvar.var_271 = 1;
            Gvar.var_1481 = 1;
            Adap.DSPLAY(161);
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1481++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1481 = 0;
            Gvar.var_389 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.equip_disc[352] == 0) {
                Gvar.comments_row1 = "養分を吸われて満腹度が下がった！";
                Gvar.comments_row2 = "";
                Adap.DSPLAY(129);
                Gvar.var_350 = Gvar.var_350 - 10;
                if (Gvar.var_350 < 0) {
                    Gvar.var_350 = 0;
                }
            }
            if (Gvar.equip_disc[352] == 1) {
                Gvar.comments_row1 = "しかし装備DISCの効果によって";
                Gvar.comments_row2 = "腹ヘリを防いだ！";
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            await Func.func619();
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_673].Var21 = 0;
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy039}
