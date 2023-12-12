import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

/*
ヴェネチアホテルに設置してあるPC設定
口座、アイテム手配等
*/ 
async function func802(this: any) {
        Adap.dbgprt(802);
        Gvar.var_243 = 0;
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
        Gvar.var_783 = 8;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_783 = 9;
        if (Gvar.var_1014 == 0) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾍﾟﾘｰｺﾛ「ボス…　私です。ﾍﾟﾘｰｺﾛです」";
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
            Gvar.comments_row1a = "「私ならば、今のボスのお力に";
            Gvar.comments_row2a = "　なれるでしょう…";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「私が手に入れられるｱｲﾃﾑの情報を";
            Gvar.comments_row2a = "　そのパソコンに送信します。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「少々費用はかかりますが、";
            Gvar.comments_row2a = "　必ず手に入れてみせます。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「ｱｲﾃﾑはダンジョンの１階に";
            Gvar.comments_row2a = "　届けておきましょう」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.var_1014 = 1;
        }
        if (Gvar.var_991[0][1] == 0) {
            Gvar.var_1013 = 0;
        }
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_1013 != 0) {
            Gvar.comments_row1 = "ﾍﾟﾘｰｺﾛ「ボス…何を仕入れてきましょう」";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_1013 == 0) {
            Gvar.comments_row1 = "ﾍﾟﾘｰｺﾛ「ボス…まだ何も手に入りません」";
            Gvar.comments_row2 = "";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_1013 == 0) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func801();
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_198 = 0;
        Gvar.var_1206 = 1;
        Gvar.var_1881 = Gvar.var_1013 * 20 + 37 + 30;
        Gvar.Y_axis_item_position = 45;
        Gvar.var_225 = 1;
        await Func.func803();
        return;
}

export {func802}
