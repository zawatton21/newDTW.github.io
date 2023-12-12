import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func421(this: any) {
        Adap.dbgprt(421);
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            await Func.func423();
            return;
        }
        Gvar.var_233[Gvar.var_225].Var3 = Gvar.var_233[Gvar.var_225].Var3 - 1;
        if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
            Gvar.var_106 = 1;
            Gvar.count_buying_price = Gvar.count_buying_price + 50;
        }
        Gvar.var_1953 = 0;
        if (Gvar.var_233[Gvar.var_225].Var0 >= 400 && Gvar.var_233[Gvar.var_225].Var0 < 500 && Gvar.var_233[Gvar.var_225].Var3 <= 0) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_1953 = 1;
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.comments_row1 = "" + Gvar.item_name + "は";
            Gvar.comments_row2 = "ｽﾀﾝﾄﾞﾊﾟﾜｰが尽きて消滅した";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
                Gvar.var_106 = 1;
                Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
            }
            if (Gvar.var_479[Gvar.var_225] == 1) {
                await Func.func106(); // BGM選曲呼び出し割り振り
                Gvar.var_479 = Adap.dim(40);
                Gvar.var_250 = 0;
                Gvar.shageki_disc_id = 0;
            }
            await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        }
        return;
}

export {func421}
