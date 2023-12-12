import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 18 ブラック・サバスの行動
async function enemy018(this: any) {
        Gvar.var_2830 = Adap.rnd(8);
        if (Gvar.var_2830 == 0) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "「チャンスをやろう…";
            Gvar.comments_row2 = "　向かうべき『２つの道』を……！」";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func619();
            Adap.DSPLAY(103); // 殴った時の効果音
            Gvar.var_747 = 1;
            Gvar.var_209 = 20;
            Gvar.var_389 = 2;
            Adap.DSPLAY(111);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_2228 = 1;
            await Func.func531();
            if (Gvar.var_2228 == 0) {
                await Func.func340(); // キー入力による選択処理
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "" + Gvar.target_item_name + "に";
                Gvar.comments_row2a = "新たな装備効果が発現した！";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func050();
            }
            if (Gvar.var_2228 == 1) {
                await Func.func340(); // キー入力による選択処理
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "「この【魂】　選ばれるものでは…」";
                Gvar.comments_row2a = "";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func050();
                await Func.func340(); // キー入力による選択処理
                Gvar.var_2891 = Math.floor(Gvar.var_211 / 2);
                Gvar.var_211 = Gvar.var_211 - Gvar.var_2891;
                if (Gvar.var_211 <= 1) {
                    Gvar.var_211 = 1;
                }
                Gvar.var_208 = Gvar.var_208 + Gvar.var_2891;
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "「なかった！」";
                Gvar.comments_row2a = "";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func050();
                await Func.func340(); // キー入力による選択処理
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "HPが半分になった。";
                Gvar.comments_row2a = "";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func050();
            }
            Gvar.var_389 = 0;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy018}
