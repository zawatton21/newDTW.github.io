import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func440(this: any) {
        Adap.dbgprt(440);
        Gvar.var_1945 = 0;
        Gvar.var_1966 = 0;
        Gvar.var_1971 = Gvar.var_199;
        Gvar.var_199 = 2;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「YES！ I am！」";
        Gvar.comments_row2 = "";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "持ち物すべてが識別された！";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        Gvar.var_1972 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_1972].Var0;
            Gvar.var_862[Gvar.belongings_item_list][0] = 1;
            Gvar.var_233[Gvar.var_1972].Var14 = 1;
            Gvar.var_1972++;
        }
        if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
            Gvar.var_1968 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
            Gvar.var_78[Gvar.var_1968].Var14 = 1;
            Gvar.belongings_item_list = Gvar.var_78[Gvar.var_1968].Var0;
            Gvar.var_862[Gvar.belongings_item_list][0] = 1;
        }
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_199 = Gvar.var_1971;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func440}
