import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func726(this: any) {
        Adap.dbgprt(726);
        Gvar.var_243 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_3125 = Adap.rnd(7);
        if (Gvar.var_3125 == 0) {
            Gvar.comments_row1 = "ぶばはははははあ";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_3125 == 1) {
            Gvar.comments_row1 = "バギィイ――ッ";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_3125 == 2) {
            Gvar.comments_row1 = "ぶきィィィーッ";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_3125 == 3) {
            Gvar.comments_row1 = "ノシェーーーッ";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_3125 == 4) {
            Gvar.comments_row1 = "アギ　　アギ";
            Gvar.comments_row2 = "　　アギッ　アギッ　アギィィ―――ッ";
        }
        if (Gvar.var_3125 == 5) {
            Gvar.comments_row1 = "ウケッウケッウケッ";
            Gvar.comments_row2 = "ケケケケケケ――――――ッ";
        }
        if (Gvar.var_3125 == 6) {
            Gvar.comments_row1 = "ガルルルルーッ";
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
        await Func.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func726}
