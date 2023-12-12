import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// アイテムに乗った時の動作処理
async function func419(this: any) {
        Adap.dbgprt(419);
        if (Gvar.var_342 == 1) {
            return;
        }
        Gvar.var_240 = 0;
        Gvar.var_321 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
        Gvar.belongings_item_list = Gvar.var_78[Gvar.var_321].Var0;
        Gvar.disc_rarity = Gvar.var_78[Gvar.var_321].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        await Func.func398(); // 道具(メニュー画面/道具)へ直接表示されるアイテム表示
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_78[Gvar.var_321].Var11 == 0) {
            Gvar.comments_row1 = "" + Gvar.disp_item_name + "に乗った";
            if (Gvar.belongings_item_list == 800) {
                Gvar.var_1922 = Gvar.var_78[Gvar.var_321].Var6;
                if (Gvar.var_862[800][0] == 1 && Gvar.var_990[Gvar.var_1922] == 1) {
                    Gvar.var_1923 = Gvar.var_1922;
                    await Func.func490();
                    if (Gvar.var_1924 != "") {
                        Gvar.comments_row2 = "【" + Gvar.var_1924 + "】";
                    }
                }
            }
        }

        if (Gvar.var_78[Gvar.var_321].Var11 == 1) { // お店で発動した場合？
            Gvar.var_1925 = 0;
            Gvar.var_482 = 0;
            Gvar.var_482 = (Gvar.var_78[Gvar.var_321].Var3 + Gvar.var_78[Gvar.var_321].Var4) * 50;
            if (Gvar.var_78[Gvar.var_321].Var0 != 800) {
                Gvar.var_482 = Gvar.var_78[Gvar.var_321].Var7 * 100 + Gvar.var_482;
            }
            if (Gvar.var_78[Gvar.var_321].Var19 > 1) {
                Gvar.var_482 = Gvar.var_78[Gvar.var_321].Var19 * 500 + Gvar.var_482;
            }
            Gvar.var_1925 = Gvar.buying_price + Gvar.var_482;
            if (Gvar.var_78[Gvar.var_321].Var0 >= 800 && Gvar.var_78[Gvar.var_321].Var0 < 900) {
                Gvar.var_484 = 0;
                Gvar.var_485 = Gvar.var_78[Gvar.var_321].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1) {
                        Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                        await Func.func492(); // アイテムリスト呼び出し
                        Gvar.var_482 = 0;
                        Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                        if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                            Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                        }
                        Gvar.var_1925 = Gvar.var_1925 + Gvar.buying_price + Gvar.var_482;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            Gvar.comments_row1 = "" + Gvar.disp_item_name;
            Gvar.comments_row2 = "値段 " + Gvar.var_1925 + " G";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func419}
