import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func524(this: any) {
        Adap.dbgprt(524);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        if (Gvar.var_233[Gvar.var_225].Var0 != 600 && Gvar.var_233[Gvar.var_225].Var0 != 602 && Gvar.var_233[Gvar.var_225].Var0 != 604 && Gvar.var_233[Gvar.var_225].Var0 != 630 && Gvar.var_233[Gvar.var_225].Var0 != 631 && Gvar.var_233[Gvar.var_225].Var0 != 632 && Gvar.var_233[Gvar.var_225].Var0 != 633 && Gvar.var_233[Gvar.var_225].Var0 != 634 && Gvar.var_233[Gvar.var_225].Var0 != 636 && Gvar.var_233[Gvar.var_225].Var0 != 639) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "「コンナモン食エネーヨッ！」";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051();
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.var_2004 = 0;
        if (Gvar.var_225 < Gvar.var_2300 && Gvar.var_2301 == 0) {
            Gvar.var_2300 = Gvar.var_2300 - 1;
        }
        if (Gvar.var_225 < Gvar.var_2256 && Gvar.var_2301 == 1) {
            Gvar.var_2256 = Gvar.var_2256 - 1;
        }
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1289 = Gvar.var_233[Gvar.var_225].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.strengthen_item_name = Gvar.item_name;
        if (Gvar.var_233[Gvar.var_225].Var0 == 600) {
            Gvar.var_2371 = 4;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 602) {
            Gvar.var_2371 = 6;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 604) {
            Gvar.var_2371 = 8;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 630) {
            Gvar.var_2371 = 4;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 631) {
            Gvar.var_2371 = 3;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 632) {
            Gvar.var_2371 = 3;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 633) {
            Gvar.var_2371 = 6;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 634) {
            Gvar.var_2371 = 3;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 636) {
            Gvar.var_2371 = 6;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 639) {
            Gvar.var_2371 = 3;
        }
        Gvar.var_1571 = Gvar.var_233[Gvar.var_225].Var0;
        if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
            Gvar.var_106 = 1;
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_482 = 0;
            Gvar.var_482 = (Gvar.var_233[Gvar.var_225].Var3 + Gvar.var_233[Gvar.var_225].Var4) * 50;
            if (Gvar.var_233[Gvar.var_225].Var19 > 1) {
                Gvar.var_482 = Gvar.var_233[Gvar.var_225].Var19 * 500 + Gvar.var_482;
            }
            Gvar.buying_price = Gvar.buying_price + Gvar.var_482;
            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
        }
        await Func.func430();
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "アギャギャ――――！";
        Gvar.comments_row2 = "クレクレ―――ッ！！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        if (Gvar.var_2301 == 0) {
            Gvar.var_233[Gvar.var_2300].Var3 = Gvar.var_233[Gvar.var_2300].Var3 + Gvar.var_2371;
            if (Gvar.var_233[Gvar.var_2300].Var3 >= 99) {
                Gvar.var_233[Gvar.var_2300].Var3 = 99;
            }
        }
        if (Gvar.var_2301 == 1) {
            Gvar.var_486[Gvar.var_682][Gvar.var_2300][3] = Gvar.var_486[Gvar.var_682][Gvar.var_2300][3] + Gvar.var_2371;
            if (Gvar.var_486[Gvar.var_682][Gvar.var_2300][3] >= 99) {
                Gvar.var_486[Gvar.var_682][Gvar.var_2300][3] = 99;
            }
        }
        if (Gvar.var_2301 == 2) {
            Gvar.var_2372 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
            Gvar.var_78[Gvar.var_2372].Var3 = Gvar.var_78[Gvar.var_2372].Var3 + Gvar.var_2371;
            if (Gvar.var_78[Gvar.var_2372].Var3 >= 99) {
                Gvar.var_78[Gvar.var_2372].Var3 = 99;
            }
        }
        Gvar.var_271 = 1;
        Gvar.var_1570 = 1;
        Gvar.var_1241 = 1;
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_1570++;
        }
        Gvar.var_1241 = 0;
        Gvar.var_271 = 0;
        Gvar.var_1570 = 0;
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        if (Gvar.var_233[Gvar.var_2300].Var3 < 99) {
            Gvar.comments_row1a = "エネルギーが " + Gvar.var_2371 + "増えた！";
        }
        if (Gvar.var_233[Gvar.var_2300].Var3 >= 99) {
            Gvar.comments_row1a = "エネルギーが満タンになった！";
        }
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func524}
