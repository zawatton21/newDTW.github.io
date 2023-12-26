import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func608(this: any) {
        Adap.dbgprt(608);
        if (Gvar.var_83[Gvar.var_673].Var12 >= 1 || Gvar.var_83[Gvar.var_673].Var13 == 1 || Gvar.var_83[Gvar.var_673].Var17 == 1 || Gvar.var_83[Gvar.var_673].Var23 == 1) {
            return;
        }
        Gvar.var_2751 = Adap.rnd(30); // 敵が特殊攻撃をしてくる確率
        // Gvar.var_2751 敵が特殊攻撃をしてくる確率
        if (Gvar.var_2751 == 1) {
            Gvar.var_747 = 1;
            Gvar.var_389 = 2;
            Gvar.var_271 = 1;
            Gvar.var_1490 = 1;
            Gvar.var_209 = Gvar.var_1022;
    
            Adap.DSPLAY(176);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1490++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1490 = 0;
            Gvar.var_389 = 0;
            Gvar.var_2852 = Gvar.var_1022;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "太陽から発射されたレーザーで";
            Gvar.comments_row2 = "" + Gvar.var_2852 + "のダメージをうけた！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            if (Gvar.to_freeze >= 1) {
                await Main.func023();
            }
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 207;
            }
            Gvar.var_240 = 0;
        }
        // Gvar.var_2751 敵が特殊攻撃をしてくる確率
        if (Gvar.var_2751 == 2) {
            Adap.gsel(19);
            Adap.color(255, 0, 0);
            Adap.boxf(0, 0, 680, 680);
            Adap.gsel(0);
            Gvar.var_1165 = 1;
            Gvar.var_2875 = Adap.rnd(2);
            Gvar.var_2875 = Gvar.var_2875 + 1;
            Gvar.var_1022 = Gvar.var_1022 + Gvar.var_2875;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "周りの気温が" + Gvar.var_2875 + "度 上がった！";
            Gvar.comments_row2 = "太陽のエネルギーがアップした！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_1165 = 0;
            Gvar.var_240 = 0;
        }
        return;
}

export {func608}
