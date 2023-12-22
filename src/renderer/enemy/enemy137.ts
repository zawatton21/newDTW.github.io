import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 137 成長した吉良の特殊能力
async function enemy137(this: any) {
        Gvar.var_2830 = Adap.rnd(6);
        if (Gvar.var_2830 == 1) {
            if (Gvar.var_224 == 0) {
                return;
            }
            Gvar.var_474 = 0;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
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
                Gvar.var_742 = 1;
                Gvar.var_83[Gvar.var_673].Var7 = 1;
                Gvar.var_743 = 1; //スタンド像付与フラグON
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_743 = 0; //スタンド像付与フラグOFF
                Gvar.var_742 = 0;
                Gvar.var_83[Gvar.var_673].Var7 = 0;
                Gvar.var_233[Gvar.var_475].Var15 = 2;
                Adap.DSPLAY(181);
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "何かが爆弾にされた！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                await Func.func047();
                for (let cnt4 = 0; cnt4 < 15; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_2197 = 1;
            }
        }
        if (Gvar.var_2830 == 0 && Gvar.var_83[Gvar.var_673].Var10 == Gvar.var_201 && Gvar.var_201 != 14 && Gvar.var_201 != 13 && Gvar.var_201 != 0) {
            Gvar.var_1920 = 2;
            Gvar.var_1914 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_1915 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_1845 = 3;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556(); // 敵をフロアへ出現させる処理
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_1920 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 0) {
                return;
            }
            Gvar.var_2273 = Gvar.var_97;
            Gvar.var_83[Gvar.var_2273].Var7 = 1;
            Gvar.var_83[Gvar.var_2273].Var5 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_83[Gvar.var_2273].Var5 = 6;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_83[Gvar.var_2273].Var5 = 9;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_83[Gvar.var_2273].Var5 = 8;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_83[Gvar.var_2273].Var5 = 7;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_83[Gvar.var_2273].Var5 = 4;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_83[Gvar.var_2273].Var5 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_83[Gvar.var_2273].Var5 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_83[Gvar.var_2273].Var7 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            Gvar.var_1073 = Adap.rnd(3);
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.var_1073 == 0) {
                Gvar.comments_row1 = "こォ～～ろォ～～すゥ～～っ！";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_1073 == 1) {
                Gvar.comments_row1 = "カワイイおまえを守ってやるよ…";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_1073 == 2) {
                Gvar.comments_row1 = "吉影や…";
                Gvar.comments_row2 = "";
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "写真の親父が吉良を助けに来た！";
            Gvar.comments_row2a = "";
            await Func.func047();
            await Func.func050();
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy137}
