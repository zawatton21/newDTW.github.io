import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 585 億泰のdiscの効果
async function item585(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
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
        Gvar.var_1073 = Adap.rnd(2);
        if (Gvar.var_1073 == 0) {
            Gvar.comments_row1 = "「あっ！　こりゃたまらん！";
            Gvar.comments_row2 = "　　ヨダレ　ずびっ！」";
        }
        if (Gvar.var_1073 == 1) {
            Gvar.comments_row1 = "「うわあああああ";
            Gvar.comments_row2 = "　はっ　腹が空いていくうよぉ～～っ」";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理

        Adap.DSPLAY(164);
        Gvar.var_129 = 1;
        Gvar.var_193 = 0;
        return;
}

export {item585}
