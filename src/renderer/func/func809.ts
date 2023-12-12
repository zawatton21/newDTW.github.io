import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func809(this: any) {
        Adap.dbgprt(809);
        Adap.DSPLAY(210);
        Gvar.var_783 = 1;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 2;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 3;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 4;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 6;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 7;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 12;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 13;
        if (Gvar.var_1039 == 0) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾎﾟﾙﾎﾟ「ブフゥ～～～～…」";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「ボス…ダンジョンの一人旅は危険です」";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「ダンジョン内で仲間と出会えれば";
            Gvar.comments_row2a = "　冒険がグッと楽になるでしょう…」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「ブフゥ～～～…」";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「しかし問題は、";
            Gvar.comments_row2a = "　毎回必ず出会えるわけではないところ」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「私ならば、有能な人材を";
            Gvar.comments_row2a = "　あらかじめ１階に呼ぶことが可能です」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「そのための費用として";
            Gvar.comments_row2a = "　2000Gかかってしまいますが…」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「ブフゥ～～～…」";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.var_1039 = 1;
        }
        if (Gvar.var_1040 == 1) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾎﾟﾙﾎﾟ「ﾚｸｲｴﾑの大迷宮１階に";
            Gvar.comments_row2 = "　　　ヒマなやつを呼んであります」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.var_198 = 0;
            await Func.func812();
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
        Gvar.comments_row1 = "ﾎﾟﾙﾎﾟ「ボス…　2000Gで";
        Gvar.comments_row2 = "　　　仲間を１階に呼んでおきますか？」";
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
        Gvar.var_3193 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func809}
