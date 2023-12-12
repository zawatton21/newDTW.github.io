import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 636 アイテム「サンドイッチ」を使用した時の効果
async function item636(this: any) {
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「ピクニックに来ている気分だね…」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_360 = 0;
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.var_567 = Gvar.var_567 + 1;
            if (Gvar.var_567 > 999) {
                Gvar.var_567 = 999;
            }
        }
        Gvar.var_350 = Gvar.var_567;
        Gvar.var_566 = Gvar.var_566 + 1;
        Gvar.var_565 = Gvar.var_565 + 1;
        if (Gvar.var_566 > 99) {
            Gvar.var_566 = 99;
            Gvar.var_565 = 99;
        }
        return;
}

export {item636}
