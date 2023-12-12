import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 17 シアハートアタックの特殊能力
async function enemy017(this: any) {
        if (Gvar.var_83[Gvar.var_673].Var3 == 2) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "「コッチヲ見ロォ～」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            Gvar.var_2197 = 1;
            return;
        }
        if (Gvar.var_83[Gvar.var_673].Var3 == 1) {
            Gvar.var_2890 = Gvar.var_673;
            await Func.func698();
            Gvar.var_2197 = 1;
            return;
        }
}

export {enemy017}
