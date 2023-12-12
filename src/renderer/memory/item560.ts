import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 560 仗助のdiscの効果
async function item560(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_601 = Adap.rnd(4);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_601 == 0) {
            Gvar.comments_row1 = "ｱﾝｼﾞｪﾛに けなされた事を思い出した";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_601 == 1) {
            Gvar.comments_row1 = "不良に けなされた事を思い出した";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_601 == 2) {
            Gvar.comments_row1 = "承太郎に けなされた事を思い出した";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_601 == 3) {
            Gvar.comments_row1 = "露伴に けなされた事を思い出した";
            Gvar.comments_row2 = "";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        if (Gvar.var_199 == 1) {
            Gvar.var_199 = 4;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_199 = 8;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_199 = 6;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_199 = 2;
        }
        Gvar.var_139 = 1;
        return;
}

export {item560}
