import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func791(this: any) {
        Adap.dbgprt(791);
        if (Gvar.nouryoku_disc_id == 115) {
            await Func.func792();
            return;
        }
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「★※○■¶◆ЖΘ！！！」";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[11]; // Ver0.1310で値修正 5 → 11
        Gvar.var_26_x = Gvar.var_26[11]; // Ver0.1310で値修正 5 → 11
        Gvar.var_27_x = Gvar.var_27[11]; // Ver0.1310で値修正 5 → 11
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        if (Gvar.var_211 <= 1) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 280;
            Gvar.var_212 = 1;
        }
        if (Gvar.var_211 >= 2) {
            Gvar.var_211 = 1;
        }
        Gvar.var_389 = 2;

        Adap.DSPLAY(103); // 殴った時の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾃﾞｨｱﾎﾞﾛは酷いダメージを受けた！";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_389 = 0;
        Gvar.var_198 = 0;
        await Func.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func791}
