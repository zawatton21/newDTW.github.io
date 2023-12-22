import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 9999 没アイテム？
async function item9999(this: any) {
        if (Gvar.var_199 == 2) {
            Gvar.var_2102 = Gvar.var_66;
            Gvar.var_2103 = Gvar.var_67 + 1;
        }
        if (Gvar.var_199 == 8) {
            Gvar.var_2102 = Gvar.var_66;
            Gvar.var_2103 = Gvar.var_67 - 1;
        }
        if (Gvar.var_199 == 4) {
            Gvar.var_2102 = Gvar.var_66 - 1;
            Gvar.var_2103 = Gvar.var_67;
        }
        if (Gvar.var_199 == 6) {
            Gvar.var_2102 = Gvar.var_66 + 1;
            Gvar.var_2103 = Gvar.var_67;
        }
        if (Gvar.var_199 == 1) {
            Gvar.var_2102 = Gvar.var_66 - 1;
            Gvar.var_2103 = Gvar.var_67 + 1;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_2102 = Gvar.var_66 + 1;
            Gvar.var_2103 = Gvar.var_67 + 1;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_2102 = Gvar.var_66 - 1;
            Gvar.var_2103 = Gvar.var_67 - 1;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_2102 = Gvar.var_66 + 1;
            Gvar.var_2103 = Gvar.var_67 - 1;
        }
        Gvar.var_2107 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ペラペラに空気を入れた。";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 0 || Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 13 || Gvar.var_82[Gvar.var_2102][Gvar.var_2103] != 0) {
            Gvar.var_2108 = 0;
        }
        if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 0 && Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 13 && Gvar.var_82[Gvar.var_2102][Gvar.var_2103] == 0) {
            Gvar.var_2108 = 1;
        }
        if (Gvar.var_2108 == 0) {
            Gvar.var_2214 = Gvar.disc_rarity;
            Gvar.var_1845 = 1;
            await Func.func556(); // 敵をフロアへ出現させる処理
            Gvar.var_2214 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 1) {
                Gvar.var_2107 = 1;
                Gvar.var_199 = Gvar.var_2111;
            }
            if (Gvar.var_2110 == 0) {
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "十分なスペースがないため";
                Gvar.comments_row2a = "うまくいかなかった…";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                Gvar.var_231 = 0;
                Gvar.var_234 = 0;
                Gvar.var_2040 = 0;
                return;
            }
        }
        if (Gvar.var_2108 == 1) {
            Gvar.var_2214 = Gvar.disc_rarity;
            Gvar.var_1845 = 4;
            await Func.func556(); // 敵をフロアへ出現させる処理
            Gvar.var_2214 = 0;
            Gvar.var_1845 = 0;
            Gvar.var_2107 = 1;
        }
        if (Gvar.var_2107 == 1) {
            Gvar.var_1584 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1585 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_271 = 1;
            Gvar.var_1583 = 1;
    
            Adap.DSPLAY(168);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_1583++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1583 = 0;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {item9999}
