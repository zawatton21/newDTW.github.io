import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func725(this: any) {
        Adap.dbgprt(725);
        Gvar.var_243 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_3125 = Adap.rnd(5);
        if (Gvar.var_3125 == 0) {
            Gvar.comments_row1 = "…おまえ｢パーマン｣知らねーのか？";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_3125 == 1) {
            Gvar.comments_row1 = "この人形の｢スタンド｣の名は";
            Gvar.comments_row2 = "『ＳＵＲＦＡＣＥ（うわっ面）』…";
        }
        if (Gvar.var_3125 == 2) {
            Gvar.comments_row1 = "おれの体力はオマエの";
            Gvar.comments_row2 = "最大体力と同じだぜ。";
        }
        if (Gvar.var_3125 == 3) {
            Gvar.comments_row1 = "同じ価値観を持った者同士…";
            Gvar.comments_row2 = "それが『仲間』っつーもんだ";
        }
        if (Gvar.var_3125 == 4) {
            Gvar.comments_row1 = "おれの防御力はオマエの";
            Gvar.comments_row2 = "防御力と同じだぜ。";
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

export {func725}
