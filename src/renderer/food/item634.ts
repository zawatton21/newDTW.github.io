import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 634 アイテム「プリン」を使用した時の効果
async function item634(this: any) {
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_129 == 0) {
            Gvar.var_360 = 0;
            if (Gvar.var_350 == Gvar.var_567) {
                Gvar.var_567 = Gvar.var_567 + 1;
                if (Gvar.var_567 > 999) {
                    Gvar.var_567 = 999;
                }
            }
            if (Gvar.var_133 == 0 && Gvar.var_126 == 0) {
                Gvar.item_message1 = "お腹がちょっと膨れた";
            }
            Gvar.var_133 = 0;
            Gvar.var_126 = 0;
            Gvar.var_350 = Gvar.var_350 + 10;
            if (Gvar.var_350 > Gvar.var_567) {
                Gvar.var_350 = Gvar.var_567;
            }
            return;
        }
        if (Gvar.var_129 != 0) {
            Gvar.var_360 = 0;
            if (Gvar.var_350 == Gvar.var_567) {
                Gvar.var_567 = Gvar.var_567 + 1;
                if (Gvar.var_567 > 999) {
                    Gvar.var_567 = 999;
                }
            }
            Gvar.var_133 = 0;
            Gvar.var_126 = 0;
            Gvar.var_350 = Gvar.var_350 + 10;
            if (Gvar.var_350 > Gvar.var_567) {
                Gvar.var_350 = Gvar.var_567;
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「デザートはプリン～～～？";
            Gvar.comments_row2a = "ケッ！　おれは不良だよ…！」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「プリンなんて女子供の食う物なんて";
            Gvar.comments_row2a = "チャンチャラおかしくて…」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「ンまぁ～～い！」";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func050();
            Gvar.var_1214 = 0;
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                Gvar.var_1256 = 1;
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1256 = 2;
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_1256 = 0;
            Gvar.item_message1 = "このフロアでお腹が減らなくなった！";
            Gvar.var_193 = 1;
            return;
        }
        return;
}

export {item634}
