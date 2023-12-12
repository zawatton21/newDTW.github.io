import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ヴェネチアホテルのPCへ話しかけた時のメッセージ処理
async function func818(this: any) {
        Adap.dbgprt(818);
        Gvar.var_243 = 0;
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        if (Gvar.var_404 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "パソコンが置いてある。";
            Gvar.comments_row2 = "まだ使えないようだ…";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Gvar.var_198 = 0;
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "何をしますか？";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_3196 = 0;
        Gvar.var_1204 = 1;
        await Func.func051();
        await Func.func819();
}

export {func818}
