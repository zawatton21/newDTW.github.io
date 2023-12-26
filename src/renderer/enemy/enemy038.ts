import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 38 アレッシーの特殊能力
async function enemy038(this: any) {
        Gvar.var_2830 = Adap.rnd(4);
        if (Gvar.var_2830 == 0) {
            Adap.DSPLAY(156);
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            Gvar.var_411 = 1;
            Gvar.var_1495 = 1;
            Gvar.var_271 = 1;
            Gvar.var_389 = 2;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1495++;
            }
            Gvar.var_83[Gvar.var_673].Var21 = 0;
            Gvar.var_411 = 0;
            Gvar.var_1495 = 0;
            Gvar.var_271 = 0;
            Gvar.var_389 = 0;
            await Func.func619();
            if (Gvar.to_freeze >= 1) {
                await Main.func023();
            }
            if (Gvar.equip_disc[207] == 1) {
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "しかし 装備中のDISCによって";
                Gvar.comments_row2 = "若返りを防いだ！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                await Func.func047();
                for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_2197 = 1;
                return;
            }
            if (Gvar.current_level > 1) {
                Gvar.current_level = Gvar.current_level - 1;
                Gvar.var_352 = Gvar.var_352 - 3;
                Gvar.var_211 = Gvar.var_211 - 3;
                Gvar.var_568 = Gvar.var_948[Gvar.current_level] - 1;
                if (Gvar.var_352 < 1) {
                    Gvar.var_352 = 1;
                }
                if (Gvar.var_211 < 1) {
                    Gvar.var_211 = 1;
                }
            }
            if (Gvar.current_level == 1) {
                Adap.DSPLAY(151);
                Gvar.var_211 = 0;
                Gvar.var_356 = 213;
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "胎児にまで戻された！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                await Func.func047();
                for (let cnt4 = 0; cnt4 < 20; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_2197 = 1;
                return;
            }
            Adap.DSPLAY(151);
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "レベルが下がってしまった！";
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

export {enemy038}
