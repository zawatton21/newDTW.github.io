import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func792(this: any) {
        Adap.dbgprt(792);
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「うっ！」";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[11]; // Ver0.1310で値修正 5 → 11
        Gvar.var_26_x = Gvar.var_26[11]; // Ver0.1310で値修正 5 → 11
        Gvar.var_27_x = Gvar.var_27[11]; // Ver0.1310で値修正 5 → 11
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "しかし G･ｴｸｽﾍﾟﾘｴﾝｽの能力で";
        Gvar.comments_row2a = "歯を一本 クラゲに変えて吸い取らせた";
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
// ↑ここまでアバッキオの設定

export {func792}
