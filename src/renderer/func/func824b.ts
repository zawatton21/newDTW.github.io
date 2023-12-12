import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// Ver0.1403にて追加。// 酒場 or ホテルの外の入り口へ入ろうとした際のメッセージ処理
async function func824b(this: any) {
        Adap.dbgprt(824);
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "どこへ行きますか？";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3198 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func824b}
