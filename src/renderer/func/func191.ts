import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func191(this: any) {
        Adap.dbgprt(191);
        if (Gvar.var_873 <= 0) {
            stop();
        }
        if (Gvar.var_224 >= 20) {
            stop();
        }
        Gvar.var_224 = Gvar.var_224 + 1;
        Gvar.var_233[Gvar.var_224].Var0 = Gvar.var_884[Gvar.var_873];
        //var_233[Gvar.var_224].Var0 = JSON.parse(JSON.stringify(Gvar.var_884[Gvar.var_873]));

        Gvar.item_list_array = Gvar.var_233[Gvar.var_224].Var0;

        // [Gvar.var_224].Var0はアイテム配列。100～400未満は装備discなので、装備discであれば
        if (Gvar.var_233[Gvar.var_224].Var0 >= 100 && Gvar.var_233[Gvar.var_224].Var0 < 400) {
            Gvar.var_233[Gvar.var_224].Var16 = 10;
            Gvar.var_233[Gvar.var_224].Var14 = 1;
            Gvar.var_233[Gvar.var_224].Var5 = 5;
            Gvar.var_233[Gvar.var_224].Var19 = 1;
        }
        // [Gvar.var_224].Var0はアイテム配列。400～500未満は射撃discなので、射撃discであれば
        Gvar.var_233[Gvar.var_224].Var20 = Gvar.var_233[Gvar.var_224].Var0;
        //var_233[Gvar.var_224].Var20 = JSON.parse(JSON.stringify(Gvar.var_233[Gvar.var_224].Var0));
        if (Gvar.item_list_array >= 400 && Gvar.item_list_array < 500) {
            Gvar.var_233[Gvar.var_224].Var3 = 10;
        }
        if (Gvar.var_878 == 1) {
            Gvar.var_862[Gvar.item_list_array][0] = 0;
        }
        if (Gvar.var_878 == 0) {
            Gvar.var_862[Gvar.item_list_array][0] = 1;
        }
        // 122 = ｽﾄｰﾝ･ﾌﾘｰのDISC、200 = ｽｰﾊﾟｰﾌﾗｲのDISC、311 = ﾁｰﾌﾟ･ﾄﾘｯｸのDISC、310 = ｴﾝﾌﾟﾚｽのDISC
        if (Gvar.var_233[Gvar.var_224].Var0 == 122 || Gvar.var_233[Gvar.var_224].Var0 == 200 || Gvar.var_233[Gvar.var_224].Var0 == 311 || Gvar.var_233[Gvar.var_224].Var0 == 310) {
            Gvar.var_233[Gvar.var_224].Var12 = 1;
        }
        // [Gvar.var_224].Var0はアイテム配列。100～400未満は装備discなので、装備discであれば
        if (Gvar.var_233[Gvar.var_224].Var0 >= 100 && Gvar.var_233[Gvar.var_224].Var0 < 400) {
            if (Gvar.var_879 == 0) {
                Gvar.var_233[Gvar.var_224].Var13 = 0;
            }
            if (Gvar.var_879 == 1) {
                Gvar.var_233[Gvar.var_224].Var13 = 0;
            }
            if (Gvar.var_879 == 2) {
                Gvar.var_233[Gvar.var_224].Var13 = 1;
            }
            if (Gvar.var_879 == 3) {
                Gvar.var_233[Gvar.var_224].Var13 = 2;
            }
            if (Gvar.var_879 == 4) {
                Gvar.var_233[Gvar.var_224].Var13 = 3;
            }
        }
        // [Gvar.var_224].Var0はアイテム配列。800～900未満はヤバイものなので、ヤバイものであれば
        if (Gvar.var_233[Gvar.var_224].Var0 >= 800 && Gvar.var_233[Gvar.var_224].Var0 < 900) {
            await Func.func395();
            Gvar.var_233[Gvar.var_224].Var6 = Gvar.var_858;
            Gvar.var_233[Gvar.var_224].Var7 = 6;
            // 802 = ﾄﾗｸﾀｰのﾀｲﾔ
            if (Gvar.var_233[Gvar.var_224].Var0 == 802) {
                Gvar.var_233[Gvar.var_224].Var7 = 10;
            }
            Gvar.var_233[Gvar.var_224].Var8 = 0;
            // 851 = ﾎﾙﾏｼﾞｵのﾋﾞﾝ
            if (Gvar.var_233[Gvar.var_224].Var0 == 851) {
                Gvar.var_233[Gvar.var_224].Var7 = Gvar.var_233[Gvar.var_224].Var7 - 1;
                Gvar.var_233[Gvar.var_224].Var8 = 1;
                Gvar.var_893 = Adap.rnd(2);
                if (Gvar.var_893 == 0) {
                    Gvar.var_486[Gvar.var_858][1][15] = 37;
                }
                if (Gvar.var_893 == 1) {
                    Gvar.var_486[Gvar.var_858][1][15] = 48;
                }
            }
        }
        Gvar.var_869 = 1;
        await Func.func187();
        Gvar.var_869 = 0;
        Adap.objprm(3, Gvar.var_876); // アイテム欄行更新 Gvar.var_876はアイテム欄の行に格納されているアイテム(表示のみ)
        stop();
}

export {func191}
