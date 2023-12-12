import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func805(this: any) {
        Adap.dbgprt(805);
        Gvar.var_1206 = 0;
        Gvar.belongings_item_list = Gvar.var_991[0][Gvar.var_225][0];
        Gvar.disc_rarity = Gvar.var_991[0][Gvar.var_225][13];
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_3188 = Gvar.item_name;
        Gvar.var_482 = 0;
        Gvar.var_482 = (Gvar.var_991[0][Gvar.var_225][3] + Gvar.var_991[0][Gvar.var_225][4]) * 50;
        Gvar.var_1925 = Gvar.buying_price + Gvar.var_482;
        Gvar.var_1925 = Gvar.var_1925 * Gvar.var_1036;
        Gvar.var_3189 = Gvar.var_1925;
        if (Gvar.wallet < Gvar.var_3189) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "それを買うには お金が足りません。";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_3190 = Gvar.var_3189 - Gvar.wallet;
            if (Gvar.var_3190 <= Gvar.var_1032) {
                await Func.func340(); // キー入力による選択処理
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "口座のお金を足して買いますか？";
                Gvar.comments_row2a = "";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func050();
                Gvar.var_245 = 19;
                Gvar.var_246 = 45;
                Gvar.var_546 = 1;
                Gvar.var_3191 = 1;
                Gvar.var_548 = 1; // 選択肢処理フラグON
                await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
                return;
            }
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Gvar.var_198 = 0;
            Gvar.var_1206 = 1;
            await Func.func803();
            return;
        }
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "【" + Gvar.var_3188 + "】は";
        Gvar.comments_row2 = "" + Gvar.var_3189 + "G です。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func051();
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3192 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func805}
