import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func584(this: any) {
        Adap.dbgprt(584);
        Gvar.var_2803 = 0;
        if (Gvar.var_155 == 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "弾丸を止めた！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_240 = 0;
            Gvar.var_2803 = 1;
            Gvar.var_2804 = 0;
            return;
        }
        if (Gvar.equip_disc[397] == 1) {
            Gvar.var_2805 = Adap.rnd(2);
            if (Gvar.var_2805 == 0) {
                Adap.DSPLAY(175);
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "弾丸は燃え尽きて届かなかった";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                Gvar.var_1584 = 160;
                Gvar.var_1585 = 150;
                Gvar.var_1583 = 1;
                Gvar.var_271 = 1;
                for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1583++;
                }
                Gvar.var_1583 = 0;
                Gvar.var_271 = 0;
                Gvar.var_2803 = 1;
                Gvar.var_240 = 0;
                Gvar.var_2804 = 0;
                return;
            }
        }
        if (Gvar.equip_disc[304] == 1) {
            Gvar.var_2805 = Adap.rnd(4);
            if (Gvar.var_2805 == 0) {
                Adap.DSPLAY(175);
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "弾丸は燃え尽きて届かなかった";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                Gvar.var_1584 = 160;
                Gvar.var_1585 = 150;
                Gvar.var_1583 = 1;
                Gvar.var_271 = 1;
                for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1583++;
                }
                Gvar.var_1583 = 0;
                Gvar.var_271 = 0;
                Gvar.var_2803 = 1;
                Gvar.var_240 = 0;
                Gvar.var_2804 = 0;
                return;
            }
        }
        return;
}

export {func584}
