import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func446(this: any) {
        Adap.dbgprt(446);
        Gvar.var_1253 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1252 = 2;
        Adap.DSPLAY(225);
        Gvar.var_1299 = 2;
        Gvar.var_271 = 1;
        Gvar.var_1297 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1297 = 0;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.strengthen_item_name = "" + Gvar.item_name;
        Gvar.var_1989 = 0;
        if (Gvar.var_1989 == 0 && Gvar.var_233[Gvar.var_225].Var13 == 0) {
            Gvar.var_1990 = Adap.rnd(3);
            Gvar.var_1990++;
            Gvar.var_233[Gvar.var_225].Var13 = Gvar.var_1990;
            Gvar.var_1989 = 1;
        }
        if (Gvar.var_1989 == 0 && Gvar.var_233[Gvar.var_225].Var13 == 1) {
            Gvar.var_233[Gvar.var_225].Var13 = 2;
            Gvar.var_1989 = 1;
        }
        if (Gvar.var_1989 == 0 && Gvar.var_233[Gvar.var_225].Var13 == 2) {
            Gvar.var_233[Gvar.var_225].Var13 = 3;
            Gvar.var_1989 = 1;
        }
        if (Gvar.var_1989 == 0 && Gvar.var_233[Gvar.var_225].Var13 == 3) {
            Gvar.var_233[Gvar.var_225].Var13 = 1;
            Gvar.var_1989 = 1;
        }
        Adap.DSPLAY(112);　// 刀の切れる音 or 強化した時のシャキーン 効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "" + Gvar.strengthen_item_name + "の";
        Gvar.comments_row2a = "雰囲気がちょっと変わったようだ。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        await Func.func437();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1252 = 0;
        Gvar.var_1950 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func446}
