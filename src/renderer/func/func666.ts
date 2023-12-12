import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func666(this: any) {
        Adap.dbgprt(666);

        Adap.DSPLAY(126);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ジェントリー・ウィープス！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        Adap.gsel(19);
        Adap.color(255, 255, 255);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_311 = 255;
        Gvar.var_312 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_312 = 0;
        Gvar.var_1415 = 1;
        Gvar.var_271 = 1;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1415 = Gvar.var_1415 + 1;
        }
        Gvar.var_1415 = 0;
        Gvar.var_1423 = 1;
        Adap.DSPLAY(215);
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1423 = Gvar.var_1423 + 1;
        }
        Gvar.var_1423 = 0;
        Gvar.var_1270 = 0;
        Gvar.var_340 = 0;
        Gvar.var_1424 = 0;
        for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1424 = Gvar.var_1424 + 20;
        }
        Gvar.var_1424 = 0;
        Gvar.var_271 = 0;
        Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0;
        await Func.func626(); // 敵リスト
        if (Gvar.var_83[Gvar.var_314].Var39 >= 2) {
            Gvar.enemy_power = Math.floor(Gvar.enemy_power * (Gvar.var_83[Gvar.var_314].Var39 * 2 + 10) / 10);
        }
        if (Gvar.var_83[Gvar.var_314].Var25 >= 1 && Gvar.var_83[Gvar.var_314].Var25 <= 50) {
            Gvar.enemy_power = Gvar.enemy_power + Gvar.var_83[Gvar.var_314].Var25;
        }
        if (Gvar.var_83[Gvar.var_314].Var25 >= 51 && Gvar.var_83[Gvar.var_314].Var25 < 99) {
            Gvar.enemy_power = Gvar.enemy_power - (Gvar.var_83[Gvar.var_314].Var25 - 50);
            if (Gvar.enemy_power <= 1) {
                Gvar.enemy_power = 1;
            }
        }
        Gvar.var_949 = Math.floor(Gvar.enemy_power * (Gvar.enemy_power + Gvar.enemy_power - 8) / 16) + Gvar.enemy_power;
        for (let cnt1 = 0; cnt1 < Gvar.var_581; ++cnt1) {
            Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
        }
        Gvar.var_2817 = Adap.rnd(33);
        Gvar.var_2817 = Gvar.var_2817 + 111;
        Gvar.var_209 = Math.floor(Gvar.var_949 * Gvar.var_2817 / 128);
        if (Gvar.var_209 <= 1) {
            Gvar.var_209 = 1;
        }
        Gvar.var_209 = Math.floor(Gvar.var_209 / 2);
        if (Gvar.var_209 <= 1) {
            Gvar.var_209 = 1;
        }

        Adap.DSPLAY(105);
        Gvar.var_747 = 1;
        Gvar.var_389 = 2;
        Gvar.var_211 = Gvar.var_211 - Gvar.var_209;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2455;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 223;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "氷の塊を喰らった！";
        Gvar.comments_row2 = "" + Gvar.var_209 + "のダメージ！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_389 = 0;
        Gvar.var_747 = 0;
        return;
}

export {func666}
