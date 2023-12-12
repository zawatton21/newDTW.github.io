import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func838(this: any) {
        Adap.dbgprt(838);
        Gvar.var_271 = 1;
        Gvar.var_1470 = 1;
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_1056].Var0;
            Gvar.var_1471 = Gvar.var_233[Gvar.var_1056].Var0;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_1056].Var13;
            Gvar.var_1249 = Gvar.var_233[Gvar.var_1056].Var13;
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
            Gvar.var_1471 = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
            Gvar.disc_rarity = Gvar.var_486[Gvar.var_485][Gvar.var_484][13];
            Gvar.var_1249 = Gvar.var_486[Gvar.var_485][Gvar.var_484][13];
        }
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_3207 = Gvar.item_name;
        Gvar.var_225 = Gvar.var_3205;
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            await Func.func430();
        }
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        if (Gvar.var_3204 == 0) {
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        if (Gvar.var_3204 == 1) {
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_3204 == 0) {
            Gvar.comments_row1 = "ﾏﾘﾘﾝﾏﾝｿﾝ「店ノ売リ物ヲ持ッテイルナ？」";
        }
        if (Gvar.var_3204 == 1) {
            Gvar.comments_row1 = "ﾏﾘﾘﾝﾏﾝｿﾝ「マダ持ッテイルナ？」";
        }
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾏﾘﾘﾝﾏﾝｿﾝ「返シテモラウ！」";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        await Func.func050();
        Gvar.var_389 = 2;
        Gvar.var_199 = 6;
        Gvar.var_1470 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_747 = 1;
        Gvar.var_1470 = 3;
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_389 = 0;
        Gvar.var_1470 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1470 = 1;
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "" + Gvar.var_3207 + "を奪われた";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func838}
