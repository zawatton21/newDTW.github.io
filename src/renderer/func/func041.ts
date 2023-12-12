import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func041(this: any) {
        Adap.dbgprt(41);
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.comments_row1 = "ﾄﾞｯﾋﾟｵ「とぅるるるるるるるるるる」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾄﾞｯﾋﾟｵ「ボスからの電話だッ！」";
        Gvar.comments_row2a = "";
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_144 = 91;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾄﾞｯﾋﾟｵ「もしもし」";
        Gvar.comments_row2a = "";
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾄﾞｯﾋﾟｵ「早く来てください！ボス！」";
        Gvar.comments_row2a = "";
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾄﾞｯﾋﾟｵ「・・・・・・・・」";
        Gvar.comments_row2a = "";
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_192 = Adap.rnd(4);
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾄﾞｯﾋﾟｵ「わかりました！";
        if (Gvar.var_192 == 0) {
            Gvar.comments_row2a = "       １０ターン後ですねッ！」";
        }
        if (Gvar.var_192 == 1) {
            Gvar.comments_row2a = "       ２０ターン後ですねッ！」";
        }
        if (Gvar.var_192 == 2) {
            Gvar.comments_row2a = "       ３０ターン後ですねッ！」";
        }
        if (Gvar.var_192 == 3) {
            Gvar.comments_row2a = "   すぐ来てくれるんですねッ！」";
        }
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_144 = 92;
        return;
}

export {func041}
