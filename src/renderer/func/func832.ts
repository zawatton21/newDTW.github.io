import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// NPC プッチ神父との会話メッセージ
async function func832(this: any) {
        Adap.dbgprt(832);
        Gvar.var_243 = 0;
        if (Gvar.var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾌﾟｯﾁ神父「【天国に行く方法】…";
            Gvar.comments_row2 = "それには必要なものがある」";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "我がスタンド";
            Gvar.comments_row2a = "「ホワイトスネイク」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「４つのカブト虫」";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "そして";
            Gvar.comments_row2a = "「親友DIOの骨」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Gvar.var_198 = 0;
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        if (Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾌﾟｯﾁ神父「【一巡後の世界】に";
            Gvar.comments_row2 = "　　　　挑戦してみるか？」";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_546 = 1;
            Gvar.var_3201 = 1;
            Gvar.var_548 = 1; // 選択肢処理フラグON
            await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
            return;
        }
        await Func.func833(); // NPC DIOとの会話メッセージ
}

export {func832}
