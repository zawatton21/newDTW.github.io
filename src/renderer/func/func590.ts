import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func590(this: any) {
        Adap.dbgprt(590);
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「命」を「運」んでくると書いて";
        Gvar.comments_row2 = "「運命」！";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 16; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1920 = 1;
        Gvar.var_1914 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_1915 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_1845 = 3;
        Gvar.var_2353 = Gvar.var_673;
        await Func.func556(); // 敵をフロアへ出現させる処理
        Gvar.var_2457 = Gvar.var_673;
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_1920 = 0;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 == 0) {
            return;
        }
        Gvar.var_1584 = (Gvar.var_83[Gvar.var_2457].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1585 = (Gvar.var_83[Gvar.var_2457].Var2 - Gvar.var_67 + 4) * 40;
        Gvar.var_271 = 1;
        Gvar.var_1583 = 1;

        Adap.DSPLAY(168);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1583++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1583 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "……フフ";
        Gvar.comments_row2a = "よくぞ言ったものだ";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        return;
}

export {func590}
