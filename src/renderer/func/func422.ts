import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func422(this: any) {
        Adap.dbgprt(422);
        Gvar.var_78[Gvar.var_321].Var3 = Gvar.var_78[Gvar.var_321].Var3 - 1;

        if (Gvar.var_78[Gvar.var_321].Var11 == 1) { // お店で発動した場合？
            Gvar.var_106 = 1;
            Gvar.count_buying_price = Gvar.count_buying_price + 50;
        }
        Gvar.var_1953 = 0;
        if (Gvar.var_78[Gvar.var_321].Var0 >= 400 && Gvar.var_78[Gvar.var_321].Var0 < 500 && Gvar.var_78[Gvar.var_321].Var3 <= 0) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_1953 = 1;
            Gvar.belongings_item_list = Gvar.var_78[Gvar.var_321].Var0;
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

            if (Gvar.var_78[Gvar.var_321].Var11 == 1) { // お店で発動した場合？
                Gvar.var_106 = 1;
                Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
            }
            await Func.func479();
        }
        return;
}

export {func422}
