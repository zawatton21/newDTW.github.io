import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 4 敵デス・13の特殊能力
async function enemy004(this: any) {
        Gvar.var_2830 = Adap.rnd(5);
        if (Gvar.var_2830 == 0 && Gvar.var_219 == 0 && Gvar.var_128 == 0) {
            Adap.DSPLAY(131);
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            Gvar.var_271 = 1;
            Gvar.var_1286 = Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4 * 40;
            Gvar.var_1287 = Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4 * 40 - 50;
            Gvar.var_1309 = 1;
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                if (Gvar.var_83[Gvar.var_673].Var5 == 1 || Gvar.var_83[Gvar.var_673].Var5 == 2 || Gvar.var_83[Gvar.var_673].Var5 == 3) {
                    Gvar.var_411 = 1;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 7 || Gvar.var_83[Gvar.var_673].Var5 == 8 || Gvar.var_83[Gvar.var_673].Var5 == 9) {
                    Gvar.var_411 = 2;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                    Gvar.var_411 = 3;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                    Gvar.var_411 = 4;
                }
                Gvar.var_1309 = Gvar.var_1309 + 1;
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_271 = 0;
            Gvar.var_1309 = 0;
            Gvar.var_83[Gvar.var_673].Var21 = 0;
            await Func.func619();
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.var_120 == 0) {
                Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは眠ってしまった！";
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        
                Adap.DSPLAY(132);
                Gvar.var_219 = 1;
            }
            if (Gvar.var_120 == 1) {
                Gvar.comments_row1 = "10時間熟睡した気分になっていて";
                Gvar.comments_row2 = "眠くならなかった！";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_219 = 0;
            }
            if (Gvar.equip_disc[351] == 1) {
                Gvar.comments_row1 = "装備DISCの効果によって";
                Gvar.comments_row2 = "眠くならなかった！";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_219 = 0;
            }
            if (Gvar.shageki_disc_id == 400 || Gvar.shageki_disc_id == 407) {
                Gvar.comments_row1 = "装備DISCの効果によって";
                Gvar.comments_row2 = "眠らずにすんだ！";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_219 = 0;
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy004}
