import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// 装備したdiscを投げる時(取り外す際)の動作処理
async function func410(this: any) {
        Adap.dbgprt(410);
        Gvar.var_1846 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1837 = Gvar.var_233[Gvar.var_225].Var3;
        Gvar.var_1835 = Gvar.var_233[Gvar.var_225].Var4;
        Gvar.var_1847 = Gvar.var_233[Gvar.var_225].Var5;
        Gvar.var_1848 = Gvar.var_233[Gvar.var_225].Var6;
        Gvar.var_1838 = Gvar.var_233[Gvar.var_225].Var7;
        Gvar.var_1849 = Gvar.var_233[Gvar.var_225].Var8;
        Gvar.var_1850 = Gvar.var_233[Gvar.var_225].Var11;
        Gvar.var_1851 = Gvar.var_233[Gvar.var_225].Var12;
        Gvar.var_1833 = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.var_1834 = Gvar.var_233[Gvar.var_225].Var14;
        Gvar.var_1852 = Gvar.var_233[Gvar.var_225].Var15;
        Gvar.var_1853 = Gvar.var_233[Gvar.var_225].Var16;
        Gvar.var_1854 = Gvar.var_233[Gvar.var_225].Var17;
        Gvar.var_1855 = Gvar.var_233[Gvar.var_225].Var18;
        Gvar.var_1836 = Gvar.var_233[Gvar.var_225].Var19;
        Gvar.var_1856 = Gvar.var_233[Gvar.var_225].Var20;
        Gvar.var_1857 = Gvar.var_233[Gvar.var_225].Var21;
        Gvar.var_1858 = Gvar.var_233[Gvar.var_225].Var22;
        Gvar.var_1859 = Gvar.var_233[Gvar.var_225].Var23;
        Gvar.var_1860 = Gvar.var_233[Gvar.var_225].Var24;
        Gvar.var_1861 = Gvar.var_233[Gvar.var_225].Var25;
        Gvar.var_1862 = Gvar.var_233[Gvar.var_225].Var26;
        Gvar.var_1863 = Gvar.var_233[Gvar.var_225].Var27;
        Gvar.var_1864 = Gvar.var_233[Gvar.var_225].Var28;
        Gvar.var_1865 = Gvar.var_233[Gvar.var_225].Var29;
        if (Gvar.var_233[Gvar.var_225].Var12 == 1 && Gvar.var_234 == 0) {
            await Func.func426();
            await Func.func427();
            await Func.func428();
            if (Gvar.var_225 == Gvar.var_553 || Gvar.var_225 == Gvar.var_554 || Gvar.var_225 == Gvar.var_555) {
                Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                Gvar.var_1866 = 0;
                Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "呪われていて外せない！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_217 = 1;
                await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                return;
            }
        }
        Gvar.var_340 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1887 = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.var_1888 = Math.floor(Gvar.var_233[Gvar.var_225].Var13 / 10);
        if (Gvar.var_234 == 1) {
            await Func.func479();
            Gvar.var_234 = 0;
        }
        await Func.func411(); // アイテムを投げた時の動作処理
}

export {func410}
