import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 586 ペッシのdiscの効果
async function item586(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        if (Gvar.current_level > 1) {
            for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_1264 = 0;
            Gvar.var_389 = 2;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "兄貴ィ～～　もう駄目だァ～～";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Adap.DSPLAY(151);
            Gvar.var_1299 = 4;
            Gvar.var_271 = 1;
            Gvar.var_1297 = 1;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1297++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1297 = 0;
            Gvar.current_level = Gvar.current_level - 1;
            Gvar.var_352 = Gvar.var_352 - 3;
            Gvar.var_211 = Gvar.var_211 - 3;
            if (Gvar.var_352 < 1) {
                Gvar.var_352 = 1;
            }
            if (Gvar.var_211 < 1) {
                Gvar.var_211 = 1;
            }
            Gvar.var_568 = Gvar.var_948[Gvar.current_level] - 1;
            Gvar.var_389 = 0;
            return;
        }
        if (Gvar.current_level == 1) {
            for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_1264 = 0;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "おれはもう「マンモーニ」じゃねえッ！";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Adap.DSPLAY(142); // レベルアップした時の効果音
            Gvar.var_1299 = 9;
            Gvar.var_271 = 1;
            Gvar.var_1297 = 1;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1297++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1297 = 0;
            Gvar.var_568 = Gvar.var_948[Gvar.current_level];
            await Func.func681();
            Gvar.var_2201 = 0;
            Gvar.item_message1 = "ディアボロはレベルが上がった！";
            Gvar.item_message2 = "";
            return;
        }
}

export {item586}
