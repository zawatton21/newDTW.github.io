import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 124 ムーディー・ブルースの発動処理
async function item124(this: any) {
        if (Gvar.var_407 == 2) {
            Gvar.var_2320 = 0;
            Gvar.var_2321 = Adap.sdim(100, 10);
            for (let cnt3 = 0; cnt3 < 8; ++cnt3) {
                Gvar.var_2321[Gvar.cnt3] = "" + Gvar.var_1070[Gvar.cnt3];
                if (Gvar.var_1069[Gvar.cnt3][4] == 0) {
                    Gvar.var_2321[Gvar.cnt4] = "(no entry)";
                }
                if (Gvar.var_1069[Gvar.cnt3][4] != 0) {
                    Gvar.var_2320++;
                }
            }
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "誰に送りますか？";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Gvar.var_2322 = 0;
            Gvar.var_1210 = 1;
            Gvar.var_2323 = 0;
            Gvar.var_2324 = 8;
            Gvar.var_2325 = Gvar.var_2324 - 1;
            Gvar.var_2326 = Gvar.var_2324 * 20 + 37 + 30;
            Gvar.Y_axis_item_position = 45;
            for (let cnt3 = 0; true; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func080(); // 各キー入力確認
                if (Gvar.key_X_on == 1) {
        
                    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    Gvar.var_2322 = 1;
                    break;
                }
                if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
                    if (Gvar.var_2321[Gvar.var_2323] != "(no entry)") {
                        if (Gvar.var_2321[Gvar.var_2323] != Gvar.var_40) {
                
                            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                            break;
                        }
                    }
                }
                if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
                    if (Gvar.var_2323 != 7) {
                        Gvar.Y_axis_item_position = Gvar.Y_axis_item_position + 22;
                        Gvar.var_2323 = Gvar.var_2323 + 1;
    
                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ関係呼び出し
                        await Func.func337(); // メッセージ関係呼び出し
                        continue;
                    }
                    if (Gvar.var_2323 == 7) {
                        Gvar.Y_axis_item_position = 45;
                        Gvar.var_2323 = 0;
    
                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ関係呼び出し
                        await Func.func337(); // メッセージ関係呼び出し
                        continue;
                    }
                }
                if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
                    if (Gvar.var_2323 != 0) {
                        Gvar.Y_axis_item_position = Gvar.Y_axis_item_position - 22;
                        Gvar.var_2323 = Gvar.var_2323 - 1;
    
                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ関係呼び出し
                        await Func.func337(); // メッセージ関係呼び出し
                        continue;
                    }
                    if (Gvar.var_2323 == 0) {
                        Gvar.Y_axis_item_position = 45 + 7 * 22;
                        Gvar.var_2323 = 7;
    
                        Adap.DSPLAY(100); // アイテム選択時の効果音
                        // await Func.func337(); // メッセージ関係呼び出し
                        await Func.func337(); // メッセージ関係呼び出し
                        continue;
                    }
                }
            }
            Gvar.var_1210 = 0;
            if (Gvar.var_2322 == 0) {
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "どれを送りますか？";
                Gvar.comments_row2 = "";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                for (let cnt4 = 0; cnt4 < 4; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                await Func.func340(); // キー入力による選択処理
                Gvar.var_2300 = Gvar.var_225;
                Gvar.var_2301 = 0;
                if (Gvar.var_220 != 0) {
                    Gvar.var_2301 = 1;
                }
                if (Gvar.var_234 != 0) {
                    Gvar.var_2301 = 2;
                }
                Gvar.var_2007 = 1;
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
        }
        if (Gvar.var_407 == 1 && Gvar.var_536 == 1 && Gvar.dungeon_number == Adap.int(Gvar.var_1068[12])) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "どれを相手に送りますか？";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            Gvar.var_2300 = Gvar.var_225;
            Gvar.var_2301 = 0;
            if (Gvar.var_220 != 0) {
                Gvar.var_2301 = 1;
            }
            if (Gvar.var_234 != 0) {
                Gvar.var_2301 = 2;
            }
            Gvar.var_2007 = 1;
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
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "どれを倉庫に送りますか？";
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
        Gvar.var_2008 = 1;
        Gvar.var_2300 = Gvar.var_225;
        Gvar.var_2301 = 0;
        if (Gvar.var_220 != 0) {
            Gvar.var_2301 = 1;
        }
        if (Gvar.var_234 != 0) {
            Gvar.var_2301 = 2;
        }
        Gvar.var_2007 = 1;
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

export {item124}
