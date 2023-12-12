import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 119 ジョセフ(3部)の特殊能力
async function enemy119(this: any) {
        if (Gvar.var_114 >= 1 || Gvar.var_128 != 0 || Gvar.var_219 != 0) {
            return;
        }
        Gvar.var_2893 = Adap.rnd(3);
        if (Gvar.dungeon_number == 99 && Gvar.var_83[Gvar.var_673].Var16 == 1) {
            Gvar.var_2893 = 1;
        }
        if (Gvar.var_2893 == 0) {
            return;
        }
        await Func.func619();
        Gvar.var_742 = 1;
        Gvar.var_743 = 1; //スタンド像付与フラグON
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_463 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_464 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_114 = Gvar.var_673;
        Adap.DSPLAY(127);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ハーミットパープルが絡みついた！";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Adap.DSPLAY(136);
        Gvar.var_1381 = 1;
        Gvar.var_271 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1381++;
        }
        Gvar.var_1381 = 0;
        Gvar.var_271 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        Gvar.var_461 = Gvar.var_66;
        Gvar.var_462 = Gvar.var_67;
        Gvar.var_2197 = 1;
        return;
}

export {enemy119}
