import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 130 敵マリリンマンソンの特殊能力
async function enemy130(this: any) {
        if (Gvar.wallet == 0 || Gvar.var_169 <= 0 || Gvar.var_169 == 999999) {
            Gvar.var_2197 = 1;
            return;
        }
        Gvar.var_2888 = 500;
        if (Gvar.var_169 < 500) {
            Gvar.var_2888 = Gvar.var_169;
        }
        if (Gvar.wallet < 500) {
            Gvar.var_2888 = Gvar.wallet;
        }
        if (Gvar.var_2888 > Gvar.wallet) {
            Gvar.var_2888 = Gvar.wallet;
        }
        if (Gvar.var_169 < Gvar.var_2888) {
            Gvar.var_2888 = Gvar.var_169;
        }
        Gvar.var_169 = Gvar.var_169 - Gvar.var_2888;
        if (Gvar.var_169 <= 0) {
            Gvar.var_169 = 0;
        }
        if (Gvar.var_169 == 0) {
            Gvar.var_169 = 999999;
        }
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        await Func.func619();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.wallet = Gvar.wallet - Gvar.var_2888;
        if (Gvar.wallet < 0) {
            Gvar.wallet = 0;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.var_2888 + " G奪われた！";
        Gvar.comments_row2 = "";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_2197 = 1;
        return;
}

export {enemy130}
