import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func663(this: any) {
        Adap.dbgprt(663);
        if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
            Gvar.var_83[Gvar.var_314].Var12 = 0;
        }
        Gvar.var_83[Gvar.var_314].Var13 = 0;
        Gvar.belongings_item_list = Gvar.var_340;
        Gvar.disc_rarity = Gvar.var_1833;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_83[Gvar.var_314].Var21 = 1;
        Gvar.var_772 = 1;
        Gvar.var_1288 = 1;
        Gvar.var_1289 = Gvar.var_340;
        if (Gvar.var_1270 == 0) {
            Gvar.item_name = "弾丸";
        }
        Adap.DSPLAY(123);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_83[Gvar.var_314].Var0 == 9) {
            Gvar.comments_row1 = "「" + Gvar.item_name + "喰って";
            Gvar.comments_row2 = "　パワーアップッ！」";
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 10) {
            Gvar.comments_row1 = "" + Gvar.item_name + "を";
            Gvar.comments_row2 = "吸収している！！";
        }
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        Gvar.var_411 = 1;
        for (let cnt1 = 0; cnt1 < 16; ++cnt1) {
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = Gvar.var_411 + 1;
            if (Gvar.var_411 == 4) {
                Gvar.var_411 = 1;
            }
            Gvar.var_300 = 0;
        }
        Gvar.var_772 = 0;
        Gvar.var_1288 = 0;
        Gvar.var_411 = 0;
        Gvar.var_83[Gvar.var_314].Var21 = 0;
        Adap.DSPLAY(142); // レベルアップした時の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        if (Gvar.var_83[Gvar.var_314].Var0 == 9) {
            Gvar.comments_row1a = "ﾗﾊﾞｰｿｳﾙはレベルが上がった！";
            Gvar.comments_row2a = "";
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 10) {
            Gvar.comments_row1a = "ﾉﾄｰﾘｱｽBIGはレベルが上がった！";
            Gvar.comments_row2a = "";
        }
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        Gvar.var_83[Gvar.var_314].Var39 = Gvar.var_83[Gvar.var_314].Var39 + 1;
        if (Gvar.var_83[Gvar.var_314].Var39 == 1) {
            Gvar.var_83[Gvar.var_314].Var39 = 2;
        }
        Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_83[Gvar.var_314].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_314].Var39 + 10) / 10);
        if (Gvar.var_83[Gvar.var_314].Var3 >= 999) {
            Gvar.var_83[Gvar.var_314].Var3 = 999;
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func663}
