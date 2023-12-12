import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 69 ブラフォードの特殊能力
async function enemy069(this: any) {
        if (Gvar.var_128 != 0 || Gvar.var_219 != 0) {
            return;
        }
        Gvar.var_2893 = Adap.rnd(3);
        if (Gvar.dungeon_number == 99 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
            Gvar.var_2893 = 1;
        }
        if (Gvar.var_2893 == 0) {
            return;
        }
        if (Gvar.var_114 == 0) {
            await Func.func619();
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_463 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_464 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_114 = Gvar.var_673;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾌﾞﾗﾌｫｰﾄﾞに髪の毛で掴まれた！";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Adap.DSPLAY(136);
            Gvar.var_1382 = 1;
            Gvar.var_271 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1382++;
            }
            Gvar.var_1382 = 0;
            Gvar.var_271 = 0;
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            Gvar.var_461 = Gvar.var_66;
            Gvar.var_462 = Gvar.var_67;
            Gvar.var_2197 = 1;
            return;
        }
        if (Gvar.var_114 == Gvar.var_673) {
            Gvar.var_2893 = Adap.rnd(3);
            if (Gvar.var_2893 == 0) {
                return;
            }
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "髪の毛から血を吸い取られている！";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            Adap.DSPLAY(123);
            Gvar.var_389 = 2;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                Gvar.var_1273 = 1;
                for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_1273 = 2;
                for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_1273 = 3;
                for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
            }
            Gvar.var_1273 = 0;
            Adap.DSPLAY(129);
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            if (Gvar.equip_disc[352] == 0) {
                Gvar.comments_row1a = "満腹度が急激に下がった！";
                Gvar.comments_row2a = "";
                Adap.DSPLAY(129);
                Gvar.var_350 = Gvar.var_350 - 20;
                if (Gvar.var_350 < 0) {
                    Gvar.var_350 = 0;
                }
            }
            if (Gvar.equip_disc[352] == 1) {
                Gvar.comments_row1a = "しかし装備DISCの効果によって";
                Gvar.comments_row2a = "腹ヘリを防いだ！";
            }
            await Func.func047();
            await Func.func050();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_389 = 0;
            Gvar.var_2197 = 1;
            return;
        }
        return;
}

export {enemy069}
