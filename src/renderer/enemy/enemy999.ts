import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 999 没敵の特殊能力
async function enemy999(this: any) {
        Gvar.var_2830 = Adap.rnd(4);
        if (Gvar.var_2830 == 0 && Gvar.var_565 >= 1) {
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            await Func.func619();
            if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                Gvar.var_2889 = 8;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                Gvar.var_2889 = 2;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                Gvar.var_2889 = 6;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                Gvar.var_2889 = 4;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                Gvar.var_2889 = 3;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                Gvar.var_2889 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                Gvar.var_2889 = 9;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                Gvar.var_2889 = 7;
            }
            Gvar.var_83[Gvar.var_673].Var5 = Gvar.var_2889;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_742 = 1;
            }
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "『プ…』";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_389 = 2;
            Gvar.var_271 = 1;
            Gvar.var_458 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_458++;
                Gvar.var_742 = 1;
            }
            Gvar.var_271 = 0;
            Gvar.var_458 = 0;
            Gvar.var_389 = 0;
            Gvar.var_742 = 0;
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_565 = Gvar.var_565 - 1;
            if (Gvar.var_565 <= 0) {
                Gvar.var_565 = 0;
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "精神力が下がってしまった！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
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

export {enemy999}
