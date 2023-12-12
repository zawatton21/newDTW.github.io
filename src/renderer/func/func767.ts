import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ディアボロの試練の入り口(フラグ前は壁)へ話しかけた時の動作処理
async function func767(this: any) {
        Adap.dbgprt(767);
        Gvar.var_243 = 0;
        // Gvar.var_526 >= 1 ディアボロの試練解放フラグがON
        if (Gvar.var_526 >= 1 && Gvar.var_993 >= 1) { // Gvar.var_993 >= 1 ディアボロの試練解放フラグがONなら
            await Func.func051();
            await Func.func828(); // ディアボロの試練の入り口へ入ろうとした際のメッセージ処理
            return;
        }
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音

        // ディアボロの試練解放フラグがON
        if (Gvar.var_526 >= 1 && Gvar.var_993 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "壁に穴が開いている。";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
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
        Gvar.comments_row1 = "壁に写真や資料が貼り付いている。";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_198 = 0;
        await Func.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func767}
