import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ディアボロの試練解放後、岸辺露伴に話しかけた時のメッセージ処理
async function func783(this: any) {
        Adap.dbgprt(783);
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「ﾎﾞﾍﾐｱﾝ･ﾗﾌﾟｿﾃﾞｨのDISC」だ。";
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
        Gvar.comments_row1a = "ぼくが行けりゃあ";
        Gvar.comments_row2a = "すぐに手に入るんだがな…";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "あいにく、";
        Gvar.comments_row2a = "まだ死にたくないんだ。";
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

export {func783}
