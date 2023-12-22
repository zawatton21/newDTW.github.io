import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func690(this: any) {
        Adap.dbgprt(690);
        if (Gvar.var_2957 != 1) {
            Gvar.var_3095 = Adap.rnd(8);
        }
        if (Gvar.var_2957 == 1) {
            Gvar.var_3095 = 1;
            if (Gvar.var_2958 == 2) {
                Gvar.var_3095 = 0;
            }
        }
        if (Gvar.var_2957 == 2) {
            Gvar.var_3095 = 0;
        }
        if (Gvar.var_2957 == 3) {
            Gvar.var_3095 = 0;
        }
        if (Gvar.var_2959 == 1) {
            Gvar.var_3095 = 0;
        }
        if (Gvar.var_2959 == 2) {
            Gvar.var_3095 = 1;
        }
        Gvar.var_2959 = 0;
        if (Gvar.dungeon_number == 99) {
            if (Gvar.var_2957 == 4 || Gvar.var_2957 == 5) {
                Gvar.var_3095 = 1;
            }
        }
        if (Gvar.var_3095 == 0) {
            if (Gvar.var_2957 == 1) {
                Gvar.var_2531 = 1;
            }
            if (Gvar.var_2957 == 2) {
                Gvar.var_2531 = 4;
            }
            if (Gvar.var_2957 == 3) {
                Gvar.var_2531 = 5;
            }
            if (Gvar.var_2957 == 4) {
                Gvar.var_2531 = 2;
            }
            if (Gvar.var_2957 == 5) {
                Gvar.var_2531 = 3;
            }
            await Func.func340(); // キー入力による選択処理
            Gvar.var_3096 = Gvar.var_673;
            Gvar.var_1845 = 4;
            Gvar.var_2102 = Gvar.var_347;
            Gvar.var_2103 = Gvar.var_348;
            await Func.func556(); // 敵をフロアへ出現させる処理
            Gvar.var_2531 = 0;
            Gvar.var_1845 = 0;
            Gvar.var_673 = Gvar.var_3096;
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            if (Gvar.var_2957 == 1) {
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "ｴｺｰｽﾞの卵はｴｺｰｽﾞACT1に成長した！";
            }
            if (Gvar.var_2957 == 2) {
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "ｴｺｰｽﾞはACT2に成長した！";
            }
            if (Gvar.var_2957 == 3) {
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "ｴｺｰｽﾞはACT3に成長した！";
            }
            if (Gvar.var_2957 == 4) {
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "ｴｺｰｽﾞACT1はさなぎになった！";
            }
            if (Gvar.var_2957 == 5) {
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "ｴｺｰｽﾞACT2はさなぎになった！";
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            await Func.func050();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        Gvar.var_2957 = 0;
        return;
}

export {func690}
