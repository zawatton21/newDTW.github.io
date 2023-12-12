import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 店のアイテムを購入せずに帰還した際、NPC マリリン・マンソンの登場処理
async function func837(this: any) {
        Adap.dbgprt(837);
        Gvar.var_3204 = 0;
        Gvar.var_1056 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            if (Gvar.var_233[Gvar.var_1056].Var0 >= 800 && Gvar.var_233[Gvar.var_1056].Var0 < 900) {
                Gvar.var_484 = 1;
                Gvar.var_485 = Gvar.var_233[Gvar.var_1056].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1 && Gvar.var_486[Gvar.var_485][Gvar.var_484][0] != 0) {
                        Gvar.var_3205 = Gvar.var_484;
                        Gvar.var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                        Gvar.var_682 = Gvar.var_485;
                        Gvar.var_1876 = Gvar.var_1056;
                        await Func.func838();
                        Gvar.var_3204 = 1;
                        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                        Gvar.var_484 = 1;
                        cnt3 = -1;
                        continue;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            if (Gvar.var_233[Gvar.var_1056].Var11 == 1 && Gvar.var_233[Gvar.var_1056].Var0 != 0) {
                Gvar.var_3205 = Gvar.var_1056;
                await Func.func838();
                Gvar.var_3204 = 1;
                Gvar.var_1056 = 1;
                Gvar.var_3206 = 1;
                cnt1 = -1;
                continue;
            }
            Gvar.var_1056 = Gvar.var_1056 + 1;
        }
        if (Gvar.var_3204 == 1) {
            Gvar.var_3204 = 0;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "ﾏﾘﾘﾝﾏﾝｿﾝ「また 会オウ！」";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.var_1470 = 5;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1470 = 6;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_198 = 0;
        }
        Gvar.var_271 = 0;
        Gvar.var_1470 = 0;
        return;
}

export {func837}
