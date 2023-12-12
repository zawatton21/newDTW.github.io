import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 鮮血のシャボンへ話しかけた時のメッセージ処理
async function func773(this: any) {
        Adap.dbgprt(773);
        Gvar.var_243 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "鮮血のｼｬﾎﾞﾝが浮かんでいる…";
        Gvar.comments_row2 = "";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        if (Gvar.var_987[0] == 0) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "中には何も入っていないようだ。";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "何か入れますか？";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_546 = 1;
            Gvar.var_3151 = 1;
            Gvar.var_548 = 1; // 選択肢処理フラグON
            await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
            return;
        }
        if (Gvar.var_987[0] != 0) {
            Gvar.belongings_item_list = Gvar.var_987[0];
            Gvar.disc_rarity = Gvar.var_987[13];
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "" + Gvar.item_name + "が";
            Gvar.comments_row2a = "入っているようだ。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "取り出しますか？";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_546 = 1;
            Gvar.var_3152 = 1;
            Gvar.var_548 = 1; // 選択肢処理フラグON
            await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
            return;
        }
        await Func.func774();
}

export {func773}
