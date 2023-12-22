import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func722(this: any) {
        Adap.dbgprt(722);
        await Func.func137();
        if (Gvar.var_72[Gvar.var_66][Gvar.var_67] >= 1) {
            return;
        }
        if (Gvar.var_85 == 1) {
            return;
        }
        await Func.func721();
        if (Gvar.var_1008 == 0) {
            return;
        }
        Gvar.var_1010 = 0;
        Gvar.var_3120 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_3120].Var0 == 33) {
                Gvar.var_83[Gvar.var_3120].Var0 = 34;
                Gvar.var_83[Gvar.var_3120].Var12 = 0;
                Gvar.var_83[Gvar.var_3120].Var13 = 0;
                Gvar.var_83[Gvar.var_3120].Var31 = 1;
                Gvar.var_1010 = 1;
            }
            if (Gvar.var_83[Gvar.var_3120].Var0 == 34) {
                Gvar.var_83[Gvar.var_3120].Var12 = 0;
                Gvar.var_83[Gvar.var_3120].Var13 = 0;
                Gvar.var_1010 = 1;
            }
            Gvar.var_3120 = Gvar.var_3120 + 1;
        }
        if (Gvar.var_1010 == 0) {
            return;
        }
        Gvar.var_85 = 1;

        Adap.DSPLAY(150);
        await Func.func132();
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ドロボーーー！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[9]; // Ver0.1310で値修正 3 → 9
        Gvar.var_26_x = Gvar.var_26[9]; // Ver0.1310で値修正 3 → 9
        Gvar.var_27_x = Gvar.var_27[9]; // Ver0.1310で値修正 3 → 9
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ただじゃあおきませンッ！";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[9]; // Ver0.1310で値修正 3 → 9
        Gvar.var_26_x = Gvar.var_26[9]; // Ver0.1310で値修正 3 → 9
        Gvar.var_27_x = Gvar.var_27[9]; // Ver0.1310で値修正 3 → 9
        await Func.func047();
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            await Func.func556(); // 敵をフロアへ出現させる処理
        }
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func722}
