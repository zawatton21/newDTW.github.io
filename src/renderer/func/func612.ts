import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func612(this: any) {
        Adap.dbgprt(612);
        if (Gvar.var_83[Gvar.var_673].Var12 >= 1 || Gvar.var_83[Gvar.var_673].Var13 == 1 || Gvar.var_83[Gvar.var_673].Var17 == 1 || Gvar.var_83[Gvar.var_673].Var23 == 1 || Gvar.var_178 != 0) {
            Gvar.var_83[Gvar.var_673].Var18 = 0;
            return;
        }
        Gvar.var_1393 = Gvar.var_673;
        Gvar.var_178 = 1;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ウワハハハハハハーッ！！";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        Gvar.var_1399 = (Gvar.var_83[Gvar.var_1393].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1400 = (Gvar.var_83[Gvar.var_1393].Var2 - Gvar.var_67 + 4) * 40 - 10;
        Gvar.var_271 = 1;
        Gvar.var_83[Gvar.var_1393].Var21 = 1;
        Gvar.var_959 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            if (Gvar.var_959 == 0 || Gvar.var_959 == 4 || Gvar.var_959 == 8) {
                Gvar.var_1398 = 1;
            }
            if (Gvar.var_959 == 1 || Gvar.var_959 == 5 || Gvar.var_959 == 9) {
                Gvar.var_1401 = 1;
            }
            if (Gvar.var_959 == 2 || Gvar.var_959 == 6) {
                Gvar.var_1402 = 1;
            }
            if (Gvar.var_959 == 3 || Gvar.var_959 == 7) {
                Gvar.var_1403 = 1;
            }
            Gvar.var_411 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_959++;
        }
        Gvar.var_83[Gvar.var_1393].Var21 = 0;
        Gvar.var_271 = 0;
        Gvar.var_1398 = 0;
        Gvar.var_1401 = 0;
        Gvar.var_1402 = 0;
        Gvar.var_1403 = 0;
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "西戸の嘲笑は";
        Gvar.comments_row2a = "ﾃﾞｨｱﾎﾞﾛを恐怖で呪縛した！";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ぼくをチェーンで殴る気だッ！";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        await Func.func047();
        Gvar.var_240 = 0;
        Gvar.var_83[Gvar.var_1393].Var6 = 1;
        Gvar.var_83[Gvar.var_1393].Var18 = 0;
        Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
        Gvar.var_2197 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func612}
