import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 12 敵エコーズACT2の特殊能力
async function enemy012(this: any) {
        Gvar.var_2830 = Adap.rnd(3);
        if (Gvar.var_2830 == 0 && Gvar.var_133 == 0) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Adap.DSPLAY(122);
            if (Gvar.enemy_list == 145 || Gvar.enemy_list == 150) {
                Gvar.var_743 = 1; //スタンド像付与フラグON
            }
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "「エコーズ ３ FREEZE ！」";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            if (Gvar.equip_disc[396] == 0) {
                if (Gvar.var_157 == 0) { // Gvar.var_157 倍速移動フラグOFFであれば
                    Gvar.var_133 = 1;
                    Gvar.var_397 = 0;
                }
                if (Gvar.var_157 != 0) { // Gvar.var_157 倍速移動フラグがOFFでなければ
                    Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
                    Gvar.var_158 = 0;
                }
            }
            await Func.func619();
            Adap.DSPLAY(162);
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "体が重くなってしまった！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            if (Gvar.equip_disc[396] == 1) {
                await Func.func340(); // キー入力による選択処理
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "しかし装備スタンドの効果で";
                Gvar.comments_row2a = "速度は遅くならない！";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
            }
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy012}
