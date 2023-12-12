import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func672(this: any) {
        Adap.dbgprt(672);
        if (Gvar.equip_disc[395] == 1 && Gvar.var_1061 == 0) {
            await Func.func675();
            return;
        }
        await Func.func110();
        if (Gvar.var_375 == 0) {
            Gvar.var_998 = Gvar.var_998 + 1;
        }
        if (Gvar.var_407 == 2) {
            Gvar.var_3079++;
            await Func.func929();
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_1061 == 0) {
            Gvar.var_374 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_374 = 0;
            Gvar.var_389 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_374 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_374 = 0;
            Gvar.var_389 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_374 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_374 = 0;
            Gvar.var_389 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_374 = 1;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_1061 == 0) {
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛ　再起不能";
            Gvar.var_25_x = Gvar.var_25[9]; // Ver0.1310で値修正 3 → 9
            Gvar.var_26_x = Gvar.var_26[9]; // Ver0.1310で値修正 3 → 9
            Gvar.var_27_x = Gvar.var_27[9]; // Ver0.1310で値修正 3 → 9
        }
        if (Gvar.var_1061 == 3) {
            if (Gvar.var_144 == 0) {
                Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            }
            if (Gvar.var_144 != 0) {
                Gvar.comments_row1 = "さびしいよォォォォ……ボス";
                Gvar.comments_row2 = "電話ください………";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            }
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 40; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1200 = 1;
        Gvar.var_2400 = 345;
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_386 == 1) {
            if (Gvar.var_201 == 4 || Gvar.var_201 == 5 || Gvar.var_201 == 6) {
                Gvar.var_356 = 200;
            }
        }
        if (Gvar.var_151 >= 1) {
            if (Gvar.var_356 == 113) {
                Gvar.var_356 = 259;
            }
            if (Gvar.var_356 == 114) {
                Gvar.var_356 = 284;
            }
        }
        if (Gvar.var_1061 == 3 && Gvar.var_144 != 0) {
            Gvar.var_356 = 279;
        }
        await Func.func673();
}

export {func672}
