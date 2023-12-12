import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func759(this: any) {
        Adap.dbgprt(759);
        Gvar.var_243 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_2877 = Adap.rnd(8);
        if (Gvar.var_2877 == 0) {
            Gvar.comments_row1 = "ﾖｰﾖｰﾏｯ「もっとおお わたしを叱ってええ」";
        }
        if (Gvar.var_2877 == 1) {
            Gvar.comments_row1 = "ﾖｰﾖｰﾏｯ「わたしが おくつを磨きましょう」";
        }
        if (Gvar.var_2877 == 2) {
            Gvar.comments_row1 = "ﾖｰﾖｰﾏｯ「マンガお読みになられますか」";
        }
        if (Gvar.var_2877 == 3) {
            Gvar.comments_row1 = "ﾖｰﾖｰﾏｯ「マッチ棒パズルやります？」";
        }
        if (Gvar.var_2877 == 4) {
            Gvar.comments_row1 = "ﾖｰﾖｰﾏｯ「黄色い花はヘビイチゴ」";
        }
        if (Gvar.var_2877 == 5) {
            Gvar.comments_row1 = "ﾖｰﾖｰﾏｯ「だんな様あああ～」";
        }
        if (Gvar.var_2877 == 6) {
            Gvar.comments_row1 = "ﾖｰﾖｰﾏｯ「お逃げになりますか？」";
        }
        if (Gvar.var_2877 == 7) {
            Gvar.comments_row1 = "ﾖｰﾖｰﾏｯ「おっしゃるとおりに いたします」";
        }
        Gvar.var_3146 = Gvar.var_77[Gvar.var_347][Gvar.var_348];
        if (Gvar.var_78[Gvar.var_3146].Var0 == 650 || Gvar.var_78[Gvar.var_3146].Var0 == 651 || Gvar.var_78[Gvar.var_3146].Var0 == 652 || Gvar.var_78[Gvar.var_3146].Var0 == 653) {
            Gvar.comments_row1 = "ﾖｰﾖｰﾏｯ「のっかりてぇ―のっかりてェ―」";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3147 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func759}
