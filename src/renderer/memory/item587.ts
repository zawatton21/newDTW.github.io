import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 587 吉良吉影のdiscの効果
async function item587(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        Gvar.var_2206 = 1;
        Gvar.var_2207 = 0;
        for (let cnt2 = 0; cnt2 < Gvar.var_224; ++cnt2) {
            if (Gvar.var_233[Gvar.var_2206].Var15 == 2) {
                Gvar.var_233[Gvar.var_2206].Var15 = 0;
                Gvar.var_2207 = 1;
            }
            Gvar.var_2206 = Gvar.var_2206 + 1;
        }
        if (Gvar.var_2207 == 0) {
            Gvar.var_474 = 0;
            for (let cnt3 = 0; cnt3 < 50; ++cnt3) {
                Gvar.var_475 = Adap.rnd(Gvar.var_224);
                Gvar.var_475 = Gvar.var_475 + 1;
                if (Gvar.var_233[Gvar.var_475].Var0 >= 500 && Gvar.var_233[Gvar.var_475].Var0 < 800 && Gvar.var_233[Gvar.var_475].Var15 == 0) {
                    Gvar.var_474 = 1;
                    break;
                }
                if (Gvar.var_233[Gvar.var_475].Var0 >= 900 && Gvar.var_233[Gvar.var_475].Var15 == 0) {
                    Gvar.var_474 = 1;
                    break;
                }
            }
            if (Gvar.var_474 == 1) {
                Gvar.var_233[Gvar.var_475].Var15 = 2;
            }
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "何かのｱｲﾃﾑが爆弾になったかも…";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.item_message1 = "う～む　どうだったかな……？";
            Gvar.item_message2 = "自信がない…";
        }
        return;
}

export {item587}
