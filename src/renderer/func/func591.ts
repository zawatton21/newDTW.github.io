import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func591(this: any) {
        Adap.dbgprt(591);
        if (Gvar.var_97 >= 100) {
            return;
        }
        Gvar.var_2838 = 0;
        Gvar.var_2519 = Gvar.var_83[Gvar.var_673].Var10;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            Gvar.var_2540 = 1;
            Gvar.var_1845 = 5;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556(); // 敵をフロアへ出現させる処理
            Gvar.var_2457 = Gvar.var_673;
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_2540 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 1) {
                Gvar.var_1584 = (Gvar.var_83[Gvar.var_2457].Var1 - Gvar.var_66 + 4) * 40;
                Gvar.var_1585 = (Gvar.var_83[Gvar.var_2457].Var2 - Gvar.var_67 + 4) * 40;
                Gvar.var_271 = 1;
                Gvar.var_1583 = 1;
        
                Adap.DSPLAY(168);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1583++;
                }
                Gvar.var_271 = 0;
                Gvar.var_1583 = 0;
                Gvar.var_2838 = 1;
            }
        }
        if (Gvar.var_2838 == 1) {
            Gvar.var_2197 = 1;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ウェザーは無意識にカタツムリを呼んだ";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        return;
}

export {func591}
