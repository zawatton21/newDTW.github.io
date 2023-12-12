import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func593(this: any) {
        Adap.dbgprt(593);
        Gvar.var_2352 = Adap.rnd(5);
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "康一「たいへんなんだ…";
        Gvar.comments_row2 = "　　とにかくすぐ来てッ！」";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_2352 == 0) {
            Gvar.var_2533 = 147;
        }
        if (Gvar.var_2352 == 1) {
            Gvar.var_2533 = 128;
        }
        if (Gvar.var_2352 == 2) {
            Gvar.var_2533 = 158;
        }
        if (Gvar.var_2352 == 3) {
            Gvar.var_2533 = 67;
        }
        if (Gvar.var_2352 == 4) {
            Gvar.var_2533 = 68;
        }
        Gvar.var_1845 = 1;
        Gvar.var_2353 = Gvar.var_673;
        await Func.func556();
        Gvar.var_2457 = Gvar.var_673;
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_2533 = 0;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 == 1) {
            Gvar.var_1584 = (Gvar.var_83[Gvar.var_2457].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1585 = (Gvar.var_83[Gvar.var_2457].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_271 = 1;
            Gvar.var_1583 = 1;
    
            Adap.DSPLAY(168);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1583++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1583 = 0;
        }
        if (Gvar.var_2110 == 0) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "しかし仲間は来なかった…";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_2197 = 1;
            return;
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func593}
