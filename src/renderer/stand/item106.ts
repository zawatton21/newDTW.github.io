import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 106 クレイジーDの発動処理
async function item106(this: any) {
        if (Gvar.var_220 == 0 && Gvar.var_234 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.var_570 = Gvar.var_233[Gvar.var_225].Var13;
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.var_570 = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
        }
        if (Gvar.var_234 == 1) {
            Gvar.var_570 = Gvar.var_78[Gvar.var_321].Var13;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ベースとなるアイテムを選んでください";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.var_2286 = Gvar.var_225;
        Gvar.var_198 = 0;
        Gvar.var_1240 = 1;
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.var_2287 = 1;
        }
        Gvar.item_page_number = 1;
        Gvar.Y_axis_item_position = 45;
        Gvar.var_225 = 1;
        Gvar.var_223 = Gvar.var_224 + 10;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        await Func.func051();
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
}

export {item106}


async function func522(this: any) {
        Adap.dbgprt(522);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func426();
        await Func.func427();
        await Func.func428();
        if (Gvar.var_553 == Gvar.var_225 || Gvar.var_554 == Gvar.var_225 || Gvar.var_555 == Gvar.var_225) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "装備しているDISCは";
            Gvar.comments_row2 = "はずさないと合成できません。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051();
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_225 == Gvar.var_2286 && Gvar.var_2287 == 0 && Gvar.var_234 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "そのDISCは合成するために使用中です";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051();
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 < 100 || Gvar.var_233[Gvar.var_225].Var0 >= 400) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "それを合成することはできません。";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051();
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_2090 = Gvar.var_225;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "合成させるアイテムを選んでください";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.var_198 = 0;
        Gvar.var_1240 = 2; 
        Gvar.item_page_number = 1;
        Gvar.Y_axis_item_position = 45;
        Gvar.var_225 = 1;
        Gvar.var_223 = Gvar.var_224 + 10;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func051();
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
}

export {func522}


async function func523(this: any) {
    Adap.dbgprt(523);
    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
    await Func.func426();
    await Func.func427();
    await Func.func428();
    if (Gvar.var_553 == Gvar.var_225 || Gvar.var_554 == Gvar.var_225 || Gvar.var_555 == Gvar.var_225) {
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "装備しているDISCは";
        Gvar.comments_row2 = "はずさないと合成できません。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func051();
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    }
    if (Gvar.var_225 == Gvar.var_2286 && Gvar.var_2287 == 0 && Gvar.var_234 == 0) {
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "そのDISCは合成するために使用中です";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    }
    if (Gvar.var_225 == Gvar.var_2090) {
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "それはベースに選んだアイテムです。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func051();
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    }
    if (Gvar.var_233[Gvar.var_225].Var0 < 100 || Gvar.var_233[Gvar.var_225].Var0 >= 400) {
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "それを合成することはできません。";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func051();
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    }
    // ベースオンリーのDiscをベースとして合成しない時の処理
    if (Gvar.var_233[Gvar.var_225].Var0 == 100 || Gvar.var_233[Gvar.var_225].Var0 == 398 || Gvar.var_233[Gvar.var_225].Var0 == 108 || Gvar.var_233[Gvar.var_225].Var0 == 110 || Gvar.var_233[Gvar.var_225].Var0 == 113 || Gvar.var_233[Gvar.var_225].Var0 == 118 || Gvar.var_233[Gvar.var_225].Var0 == 123) {
    // if (Gvar.var_233[Gvar.var_225].Var0 == 398 || Gvar.var_233[Gvar.var_225].Var0 == 108 || Gvar.var_233[Gvar.var_225].Var0 == 110 || Gvar.var_233[Gvar.var_225].Var0 == 113 || Gvar.var_233[Gvar.var_225].Var0 == 118 || Gvar.var_233[Gvar.var_225].Var0 == 123) { // デバッグ用 ベースオンリーのdiscも合成できる
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "そのDISCはベースにしかできません";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func051();
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    }
    Gvar.var_2091 = Gvar.var_225;
    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
    Gvar.var_1240 = 3;
    Gvar.base_disc_list = Gvar.var_233[Gvar.var_2090].Var0;
    Gvar.with_disc_list = Gvar.var_233[Gvar.var_2091].Var0;
    Gvar.belongings_item_list = Gvar.var_233[Gvar.var_2090].Var0;
    await Func.func492(); // アイテムリスト呼び出し
    Gvar.var_2092 = Gvar.var_233[Gvar.var_2091].Var19;
    Gvar.var_2093 = 20;
    if (Gvar.var_233[Gvar.var_2090].Var5 != 0) {
        for (let cnt2 = 0; cnt2 < Gvar.var_2092; ++cnt2) {
            Gvar.var_2094 = 20;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                Gvar.var_2095 = 0;
                if (Gvar.var_233[Gvar.var_2090]["Var" + Gvar.var_2094] == Gvar.var_233[Gvar.var_2091]["Var" + Gvar.var_2093]) {
                    Gvar.var_2095 = 1;
                    break;
                }
                if (Gvar.var_233[Gvar.var_2090]["Var" + Gvar.var_2094] == 0) {
                    Gvar.var_2096 = Gvar.var_2094;
                    break;
                }
                Gvar.var_2094 = Gvar.var_2094 + 1;
            }
            if (Gvar.var_2095 == 0) {
                Gvar.var_233[Gvar.var_2090]["Var" + Gvar.var_2096] = Gvar.var_233[Gvar.var_2091]["Var" + Gvar.var_2093];
                Gvar.var_233[Gvar.var_2090].Var19 = Gvar.var_233[Gvar.var_2090].Var19 + 1;
                Gvar.var_233[Gvar.var_2090].Var5 = Gvar.var_233[Gvar.var_2090].Var5 - 1;
            }
            if (Gvar.var_233[Gvar.var_2090].Var5 == 0) {
                break;
            }
            Gvar.var_2093 = Gvar.var_2093 + 1;
        }
    }
    if (Gvar.dungeon_number != 5) {
        Gvar.var_233[Gvar.var_2090].Var4 = Gvar.var_233[Gvar.var_2090].Var4 + Gvar.var_233[Gvar.var_2091].Var4;
        if (Gvar.var_233[Gvar.var_2090].Var4 >= 99) {
            Gvar.var_233[Gvar.var_2090].Var4 = 99;
        }
    }
    if (Gvar.var_233[Gvar.var_2091].Var12 == 1 || Gvar.var_233[Gvar.var_2090].Var12 == 1) {
        Gvar.var_233[Gvar.var_2090].Var12 = 1;
    }
    if (Gvar.var_233[Gvar.var_2091].Var12 == 2 || Gvar.var_233[Gvar.var_2090].Var12 == 2) {
        Gvar.var_233[Gvar.var_2090].Var12 = 2;
    }
    if (Gvar.var_233[Gvar.var_2091].Var11 == 1) {
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_2091].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_106 = 1;
        Gvar.var_482 = 0;
        Gvar.var_482 = (Gvar.var_233[Gvar.var_2091].Var3 + Gvar.var_233[Gvar.var_2091].Var4) * 50;
        if (Gvar.var_233[Gvar.var_2091].Var19 > 1) {
            Gvar.var_482 = Gvar.var_233[Gvar.var_2091].Var19 * 500 + Gvar.var_482;
        }
        Gvar.buying_price = Gvar.buying_price + Gvar.var_482;
        Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
    }
    Gvar.var_233[Gvar.var_2090].Var14 = 1;
    Gvar.belongings_item_list = Gvar.var_233[Gvar.var_2090].Var0;
    Gvar.disc_rarity = Gvar.var_233[Gvar.var_2090].Var13;
    Gvar.var_2365 = 0;
    if (Gvar.disc_rarity >= 1) {
        Gvar.var_2365 = 1;
    }
    await Func.func492(); // アイテムリスト呼び出し
    Gvar.var_2366 = Gvar.item_name;
    Gvar.belongings_item_list = Gvar.var_233[Gvar.var_2091].Var0;
    Gvar.disc_rarity = Gvar.var_233[Gvar.var_2091].Var13;
    await Func.func492(); // アイテムリスト呼び出し
    Gvar.var_2367 = Gvar.item_name;
    if (Gvar.var_2368 == 1) {
        await Func.func427();
        if (Gvar.var_554 == Gvar.var_2091 || Gvar.var_554 == Gvar.var_2090) {
            Gvar.var_477 = Adap.dim(40);
            Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
            Gvar.var_895 = 0;
            Gvar.bougyo_disc_id = 0;
        }
    }
    Gvar.var_2097 = 0;
    // No = 100:ｽﾀｰ･ﾌﾟﾗﾁﾅのDISC、No = 111:ｻﾞ･ﾜｰﾙﾄﾞのDISC
    if (Gvar.base_disc_list == 100 && Gvar.with_disc_list == 111) {
        Gvar.var_2097 = 1;
        // No = 398:ｽﾀﾌﾟﾗｻﾞﾜｰﾙﾄﾞのDISC
        Gvar.var_233[Gvar.var_2090].Var0 = 398;
        Gvar.var_862[398][0] = 1;
    }
    // No = 112:ｷﾗｰ･ｸｨｰﾝのDISC、No = 204:ｼｱｰﾊｰﾄｱﾀｯｸのDISC
    if (Gvar.base_disc_list == 112 && Gvar.with_disc_list == 204) {
        Gvar.var_2097 = 2;
        // No = 395:ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISC
        Gvar.var_233[Gvar.var_2090].Var0 = 395;
        Gvar.var_862[395][0] = 1;
        Gvar.var_233[Gvar.var_2090].Var20 = 395;
    }
    // No = 304:ｳｪｻﾞｰﾘﾎﾟｰﾄのDISC、No = 114:ﾎﾜｲﾄｽﾈｲｸのDISC
    if (Gvar.base_disc_list == 304 && Gvar.with_disc_list == 114) {
        Gvar.var_2097 = 4;
        // No = 397:ﾍﾋﾞｰ･ｳｪｻﾞｰのDISC
        Gvar.var_233[Gvar.var_2090].Var0 = 397;
        Gvar.var_862[397][0] = 1;
        Gvar.var_233[Gvar.var_2090].Var20 = 397;
    }
    Gvar.var_225 = Gvar.var_2091;
    await Func.func430();
    await Func.func433(); // アイテム配列(所持アイテム)初期化関数
    if (Gvar.var_570 == 0) {
        Gvar.bufferid_stand_disc = 11; //Adap.buffer(11)は"img_stand0.gif"
    }
    if (Gvar.var_570 == 1) {
        Gvar.bufferid_stand_disc = 1; // Adap.buffer(1)は"img_stand1.gif"
    }
    if (Gvar.var_570 == 2) {
        Gvar.bufferid_stand_disc = 16; // Adap.buffer(16)は"img_stand2.gif"
    }
    if (Gvar.var_570 == 3) {
        Gvar.bufferid_stand_disc = 29; // Adap.buffer(29)は"img_stand3.gif"
    }
    Gvar.var_271 = 1;
    Gvar.var_1443 = 1;
    for (let cnt1 = 0; cnt1 < 60; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1443 = Gvar.var_1443 + 1;
        if (Gvar.var_1443 == 10) {
            Adap.DSPLAY(105);
        }
    }
    Gvar.var_271 = 0;
    Gvar.var_1443 = 0;
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "" + Gvar.var_2366 + "と";
    Gvar.comments_row2 = "" + Gvar.var_2367 + "を合成した";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    await Func.func340(); // キー入力による選択処理
    if (Gvar.var_2097 == 1) {
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "なんと！　ｽﾀｰ･ﾌﾟﾗﾁﾅのDISCは";
        Gvar.comments_row2a = "ｽﾀﾌﾟﾗｻﾞﾜｰﾙﾄﾞのDISCになった！";
        if (Gvar.var_2365 == 1) {
            Gvar.comments_row1a = "なんと！　☆ｽﾀｰ･ﾌﾟﾗﾁﾅのDISCは";
            Gvar.comments_row2a = "☆ｽﾀﾌﾟﾗｻﾞﾜｰﾙﾄﾞのDISCになった！";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
    }
    if (Gvar.var_2097 == 2) {
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "なんと！　ｷﾗｰ･ｸｨｰﾝのDISCは";
        Gvar.comments_row2a = "ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISCになった！";
        if (Gvar.var_2365 == 1) {
            Gvar.comments_row1a = "なんと！　☆ｷﾗｰ･ｸｨｰﾝのDISCは";
            Gvar.comments_row2a = "☆ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISCになった！";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
    }
    if (Gvar.var_2097 == 3) {
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "なんと！　ｷﾗｰ･ｸｨｰﾝのDISCは";
        Gvar.comments_row2a = "ｷﾗｰﾀｲｶﾞｰｸｨｰﾝのDISCになった！";
        if (Gvar.var_2365 == 1) {
            Gvar.comments_row1a = "なんと！　☆ｷﾗｰ･ｸｨｰﾝのDISCは";
            Gvar.comments_row2a = "☆ｷﾗｰﾀｲｶﾞｰｸｨｰﾝのDISCになった！";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
    }
    if (Gvar.var_2097 == 4) {
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "なんと！　ｳｪｻﾞｰ･ﾘﾎﾟｰﾄのDISCは";
        Gvar.comments_row2a = "ﾍﾋﾞｰ･ｳｪｻﾞｰのDISCになった！";
        if (Gvar.var_2365 == 1) {
            Gvar.comments_row1a = "なんと！　☆ｳｪｻﾞｰ･ﾘﾎﾟｰﾄのDISCは";
            Gvar.comments_row2a = "☆ﾍﾋﾞｰ･ｳｪｻﾞｰのDISCになった！";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
    }
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "ｸﾚｲｼﾞｰ･DのDISCは、合成によって";
    Gvar.comments_row2a = "スタンドパワーを失い 消滅した。";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func050();
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    if (Gvar.var_2287 == 0 && Gvar.var_234 == 0) {
        if (Gvar.var_2286 > Gvar.var_2091) {
            Gvar.var_2286 = Gvar.var_2286 - 1;
        }
        if (Gvar.var_233[Gvar.var_2286].Var11 == 1) {
            Gvar.var_106 = 1;
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_2286].Var0;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_482 = 0;
            Gvar.var_482 = (Gvar.var_233[Gvar.var_2286].Var3 + Gvar.var_233[Gvar.var_2286].Var4) * 50;
            if (Gvar.var_233[Gvar.var_2286].Var19 > 1) {
                Gvar.var_482 = Gvar.var_233[Gvar.var_2286].Var19 * 500 + Gvar.var_482;
            }
            Gvar.buying_price = Gvar.buying_price + Gvar.var_482;
            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
        }
        Gvar.var_225 = Gvar.var_2286;
        if (Gvar.kougeki_disc_id  == 106) {
            Gvar.var_896 = 0;
            await Func.func430();
        }
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
    }
    if (Gvar.var_2287 == 1) {
        if (Gvar.var_1876 > Gvar.var_2091) {
            Gvar.var_1876 = Gvar.var_1876 - 1;
        }
        if (Gvar.var_486[Gvar.var_682][Gvar.var_2286][11] == 1) {
            Gvar.var_106 = 1;
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_2286][0];
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_482 = 0;
            Gvar.var_482 = (Gvar.var_486[Gvar.var_682][Gvar.var_2286][3] + Gvar.var_486[Gvar.var_682][Gvar.var_2286][4]) * 50;
            if (Gvar.var_486[Gvar.var_682][Gvar.var_2286][19] > 1) {
                Gvar.var_482 = Gvar.var_486[Gvar.var_682][Gvar.var_2286][19] * 500 + Gvar.var_482;
            }
            Gvar.buying_price = Gvar.buying_price + Gvar.var_482;
            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
        }
        Gvar.var_225 = Gvar.var_2286;
        await Func.func434();
        Gvar.var_2287 = 0;
    }
    if (Gvar.var_234 == 1) {
        if (Gvar.var_233[0].Var11 == 1) {
            Gvar.var_106 = 1;
            Gvar.belongings_item_list = Gvar.var_233[0].Var0;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_482 = 0;
            Gvar.var_482 = (Gvar.var_233[0].Var3 + Gvar.var_233[0].Var4) * 50;
            if (Gvar.var_233[0].Var19 > 1) {
                Gvar.var_482 = Gvar.var_233[0].Var19 * 500 + Gvar.var_482;
            }
            Gvar.buying_price = Gvar.buying_price + Gvar.var_482;
            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
        }
        Gvar.var_2369 = Gvar.var_78[Gvar.var_321].Var1;
        Gvar.var_2370 = Gvar.var_78[Gvar.var_321].Var2;
        Gvar.var_77[Gvar.var_2369][Gvar.var_2370] = 0;
        Gvar.var_78[Gvar.var_321].Var0 = 0;
        Gvar.var_78[Gvar.var_321].Var1 = 0;
        Gvar.var_78[Gvar.var_321].Var2 = 0;
        Gvar.var_234 = 0;
    }
    await Func.func494();
    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    Gvar.var_1240 = 0;
    Gvar.var_199 = 2;
    Gvar.var_217 = 1;
    await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
    return;
}

export {func523}
