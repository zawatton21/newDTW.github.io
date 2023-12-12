import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 603 「腐ったピッツァ」を使用した時の効果
async function item603(this: any) {
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.sympathy_id != 120 && Gvar.sympathy_id != 124) {
            Gvar.var_2212 = Adap.rnd(5);
            if (Gvar.current_level == 1 && Gvar.var_2212 == 4) {
                Gvar.var_2212 = 3;
            }
            if (Gvar.var_352 <= 5 && Gvar.var_2212 == 3) {
                Gvar.var_2212 = 0;
            }
            if (Gvar.var_566 == 0 && Gvar.var_2212 == 2) {
                Gvar.var_2212 = 0;
            }
            if (Gvar.var_565 == 0 && Gvar.var_2212 == 0) {
                Gvar.var_2212 = 0;
            }
            Gvar.var_1214 = 0;
            Gvar.var_389 = 2;
            if (Gvar.var_2212 != 4) {
                Adap.DSPLAY(164);
            }
            if (Gvar.var_2212 == 4) {
                Adap.DSPLAY(151);
            }
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_389 = 0;
            Gvar.var_360 = 0;
            Gvar.var_350 = Gvar.var_350 + 20;
            if (Gvar.var_350 > Gvar.var_567) {
                Gvar.var_350 = Gvar.var_567;
            }
            if (Gvar.var_2212 == 0) {
                Gvar.var_211 = 1;
                Gvar.item_message1 = "グエッ！";
                Gvar.item_message2 = "ひどいダメージを受けた！";
            }
            if (Gvar.var_2212 == 1) {
                Gvar.var_565 = Gvar.var_565 - 3;
                if (Gvar.var_565 < 0) {
                    Gvar.var_565 = 0;
                }
                Gvar.item_message1 = "グエッ！";
                Gvar.item_message2 = "精神力が下がってしまった！";
            }
            if (Gvar.var_2212 == 2) {
                Gvar.var_566 = Gvar.var_566 - 1;
                if (Gvar.var_566 < 0) {
                    Gvar.var_566 = 0;
                }
                if (Gvar.var_565 > Gvar.var_566) {
                    Gvar.var_565 = Gvar.var_566;
                }
                Gvar.item_message1 = "グエエエエッ！";
                Gvar.item_message2 = "最大精神力が下がってしまった！";
            }
            if (Gvar.var_2212 == 3) {
                Gvar.var_352 = Gvar.var_352 - 5;
                if (Gvar.var_352 <= 0) {
                    Gvar.var_352 = 1;
                }
                Gvar.var_211 = Gvar.var_211 - 5;
                if (Gvar.var_211 <= 0) {
                    Gvar.var_211 = 1;
                }
                Gvar.item_message1 = "グエエエエッ！";
                Gvar.item_message2 = "最大HPが下がってしまった！";
            }
            if (Gvar.var_2212 == 4) {
                Gvar.current_level = Gvar.current_level - 1;
                Gvar.var_352 = Gvar.var_352 - 3;
                Gvar.var_211 = Gvar.var_211 - 3;
                if (Gvar.current_level < 1) {
                    Gvar.current_level = 1;
                }
                if (Gvar.var_352 <= 1) {
                    Gvar.var_352 = 1;
                }
                if (Gvar.var_211 <= 1) {
                    Gvar.var_211 = 1;
                }
                Gvar.var_568 = Gvar.var_948[Gvar.current_level] - 1;
                Gvar.item_message1 = "グエエエエｴｴｴッ！";
                Gvar.item_message2 = "レベルが下がってしまった！";
            }
        }
        if (Gvar.sympathy_id == 120 || Gvar.sympathy_id == 124) {
            Gvar.var_1214 = 0;
            Gvar.item_message1 = "「ンまァア～～い！」";
            Gvar.item_message2 = "";
            Gvar.var_360 = 0;
            Gvar.var_350 = Gvar.var_350 + 20;
            if (Gvar.var_350 > Gvar.var_567) {
                Gvar.var_350 = Gvar.var_567;
            }
        }
        return;
}

export {item603}
