import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

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
