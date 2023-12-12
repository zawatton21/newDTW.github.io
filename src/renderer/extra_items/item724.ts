import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 724 石仮面を使用した時の効果
async function item724(this: any) {
        Gvar.var_1251 = 1;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「俺は人間をやめるぞォ――！」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_1251 = 2;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1251 = 4;
        Gvar.var_1940 = Gvar.var_199;
        Gvar.var_199 = 2;
        Gvar.var_271 = 1;
        Gvar.var_1411 = 1;
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
            Adap.DSPLAY(111);
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_1411++;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_1411++;
        }
        for (let cnt2 = 0; cnt2 < 17; ++cnt2) {
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_1411++;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_1411++;
        }
        Gvar.var_1411 = 0;
        Gvar.var_271 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_130 = 1;
        Gvar.item_message1 = "吸血鬼体質になった！";
        Gvar.var_1251 = 0;
        if (Gvar.var_125 != 0) {
            Gvar.var_389 = 2;
            Gvar.var_134 = 1;
            Gvar.var_211 = 1;
            Gvar.var_747 = 1;
            Adap.DSPLAY(105);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "吸血鬼体質で波紋呼吸をしてしまった！";
            Gvar.comments_row2a = "";
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.item_message1 = "酷いダメージを受けて回復しない！";
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_389 = 0;
        }
        Gvar.var_199 = Gvar.var_1940;
        return;
}

export {item724}
