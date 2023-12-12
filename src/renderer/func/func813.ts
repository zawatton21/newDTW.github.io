import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func813(this: any) {
        Adap.dbgprt(813);
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
        Gvar.var_783 = 14;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 15;
        if (Gvar.var_830 == 0) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "「はい…こちらはSPW財団です」";
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
            Gvar.comments_row1a = "「前回の冒険でやられた敵の";
            Gvar.comments_row2a = "　能力を調べることができます」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「調査費用は1000Gです」";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.var_198 = 0;
            await Func.func817();
            return;
        }
        Gvar.enemy_list = Gvar.var_830;
        await Func.func626();
        Gvar.var_3194 = "" + Gvar.enemy_name;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「はい…こちらはSPW財団です」";
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
        Gvar.comments_row1a = "「" + Gvar.var_3194 + "に";
        Gvar.comments_row2a = "　やられてしまったようですね？」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「1000Gの調査費で";
        Gvar.comments_row2a = "　敵の能力を調べられます」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3195 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func813}
