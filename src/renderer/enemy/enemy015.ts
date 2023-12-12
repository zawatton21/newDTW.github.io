import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 15 敵ペットショップ & No = 64 敵ギアッチョの特殊能力
async function enemy015(this: any) {
        Gvar.var_2830 = Adap.rnd(4);
        if (Gvar.var_2830 == 0 && Gvar.var_128 == 0 && Gvar.var_219 == 0) {
            Gvar.var_1359 = 0;
            if (Gvar.enemy_list == 15) {
                Gvar.var_1359 = 1;
            }
            Gvar.var_314 = Gvar.var_673;
            Gvar.var_1360 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_1361 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_271 = 1;
            Gvar.var_1358 = 1;
            Adap.DSPLAY(215);
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1358 = Gvar.var_1358 + 1;
            }
            Gvar.var_1358 = 0;
            Gvar.var_271 = 0;
            if (Gvar.var_173 == 1) {
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "冷やされる攻撃に強くなっていて";
                Gvar.comments_row2 = "冷凍攻撃を防いだ！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_2197 = 1;
                return;
            }
            if (Gvar.nouryoku_disc_id == 109 || Gvar.shageki_disc_id == 404 || Gvar.nouryoku_disc_id == 202) {
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "装備中のDISCの効果で";
                Gvar.comments_row2 = "冷凍攻撃を防いだ！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_2197 = 1;
                return;
            }
            Gvar.var_128 = 1;
            Adap.DSPLAY(126);
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "体を凍らされてしまった！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_2197 = 1;
        }
        return;                
}

export {enemy015}
