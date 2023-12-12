import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func602(this: any) {
        Adap.dbgprt(602);
        Gvar.var_2856 = Gvar.var_83[Gvar.var_673].Var0;
        Gvar.var_2749 = Gvar.var_83[Gvar.var_673].Var18;
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.var_2747 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2748 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_1993 = Gvar.var_83[Gvar.var_673].Var1 - 1;
        if (Gvar.var_1993 < 0) {
            Gvar.var_1993 = 0;
        }
        Gvar.var_1994 = Gvar.var_83[Gvar.var_673].Var1 + 1;
        if (Gvar.var_1994 > Gvar.var_33) {
            Gvar.var_1994 = Gvar.var_33;
        }
        Gvar.var_1995 = Gvar.var_83[Gvar.var_673].Var2 + 1;
        if (Gvar.var_1995 > Gvar.var_34) {
            Gvar.var_1995 = Gvar.var_34;
        }
        Gvar.var_1996 = Gvar.var_83[Gvar.var_673].Var2 - 1;
        if (Gvar.var_1996 < 0) {
            Gvar.var_1996 = 0;
        }
        Gvar.var_2857 = 0;
        if (Gvar.var_82[Gvar.var_2747][Gvar.var_1995] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 2;
            }
        }
        if (Gvar.var_82[Gvar.var_2747][Gvar.var_1996] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 8;
            }
        }
        if (Gvar.var_82[Gvar.var_1993][Gvar.var_2748] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 4;
            }
        }
        if (Gvar.var_82[Gvar.var_1994][Gvar.var_2748] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 6;
            }
        }
        if (Gvar.var_82[Gvar.var_1993][Gvar.var_1995] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 1;
            }
        }
        if (Gvar.var_82[Gvar.var_1993][Gvar.var_1996] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 7;
            }
        }
        if (Gvar.var_82[Gvar.var_1994][Gvar.var_1995] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 3;
            }
        }
        if (Gvar.var_82[Gvar.var_1994][Gvar.var_1996] == Gvar.var_2749) {
            Gvar.var_2646 = Gvar.var_2749;
            await Func.func578();
            if (Gvar.var_2647 >= 1) {
                Gvar.var_2857 = 1;
                Gvar.var_83[Gvar.var_673].Var5 = 9;
            }
        }
        if (Gvar.var_2857 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.var_2856 == 134) {
                Gvar.comments_row1 = "ｼﾞｮﾘｰﾝは仲間を心配している。";
            }
            if (Gvar.var_2856 == 35) {
                Gvar.comments_row1 = "仗助は仲間を心配している。";
            }
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_2856 == 134) {
            Gvar.comments_row1 = "「ストーンフリー」！！";
        }
        if (Gvar.var_2856 == 35) {
            Gvar.comments_row1 = "「クレイジー・ダイヤモンド」！！";
        }
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        if (Gvar.var_2856 == 134) {
            Gvar.var_1558 = (Gvar.var_83[Gvar.var_2749].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1559 = (Gvar.var_83[Gvar.var_2749].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                Gvar.var_411 = 1;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                Gvar.var_411 = 2;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                Gvar.var_411 = 3;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                Gvar.var_411 = 4;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                Gvar.var_411 = 5;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                Gvar.var_411 = 6;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                Gvar.var_411 = 7;
            }
            if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                Gvar.var_411 = 8;
            }

            Adap.DSPLAY(136);
            Gvar.var_271 = 1;
            Gvar.var_1557 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1557++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1557 = 0;
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_673].Var21 = 0;
        }
        if (Gvar.var_2856 == 35) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_743 = 1; //スタンド像付与フラグON
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }

            Adap.DSPLAY(143);
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                Gvar.var_83[Gvar.var_2749].Var8 = 1;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_83[Gvar.var_2749].Var8 = 0;
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_742 = 0;
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
        }
        Gvar.enemy_list = Gvar.var_83[Gvar.var_2749].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_83[Gvar.var_2749].Var3 = Gvar.var_83[Gvar.var_2749].Var3 + 50;
        if (Gvar.var_83[Gvar.var_2749].Var3 > Gvar.var_2792) {
            Gvar.var_83[Gvar.var_2749].Var3 = Gvar.var_2792;
        }
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "" + Gvar.enemy_name + "の";
        Gvar.comments_row2a = "傷がふさがった。";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func602}
