import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 28 敵ジャッジメントの特殊能力
async function enemy028(this: any) {
        Gvar.var_2830 = Adap.rnd(3);
        if (Gvar.var_2830 == 0) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "HAIL 2 U !!";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 16; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_2524 = 1;
            Gvar.var_1845 = 1;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_2524 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 0) {
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "お前の願いを言え！";
                Gvar.comments_row2a = "";
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                Gvar.var_2197 = 1;
                return;
            }
            Adap.DSPLAY(166);
            Gvar.var_2273 = Gvar.var_97;
            Gvar.var_83[Gvar.var_2273].Var21 = 1;
            Gvar.var_411 = 1;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 2;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 3;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 4;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_2273].Var21 = 0;
            Gvar.var_83[Gvar.var_2273].Var5 = 2;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "地面から 土人形 が現れた！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy028}
