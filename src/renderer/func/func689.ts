import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func689(this: any) {
        Adap.dbgprt(689);
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "このダンジョンを制覇した！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[12]; // Ver0.1310で値修正 6 → 12
        Gvar.var_26_x = Gvar.var_26[12]; // Ver0.1310で値修正 6 → 12
        Gvar.var_27_x = Gvar.var_27[12]; // Ver0.1310で値修正 6 → 12
        await Func.func047();
        for (let cnt1 = 0; true; ++cnt1) {
            Gvar.var_491 = Adap.rnd(Gvar.var_33);
            Gvar.var_492 = Adap.rnd(Gvar.var_34);
            if (Gvar.var_491 >= 30 && Gvar.var_491 <= 35 && Gvar.var_492 >= 23 && Gvar.var_492 <= 30) {
                continue;
            }
            if (Gvar.var_71[Gvar.var_491][Gvar.var_492] != 0 && Gvar.var_71[Gvar.var_491][Gvar.var_492] <= 12 && Gvar.var_72[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_71[Gvar.var_491][Gvar.var_492] != Gvar.var_201 && Gvar.var_80[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_77[Gvar.var_491][Gvar.var_492] == 0) {
                break;
            }
            if (Gvar.dungeon_number == 3 && Gvar.var_71[Gvar.var_491][Gvar.var_492] != 0 && Gvar.var_71[Gvar.var_491][Gvar.var_492] <= 12 && Gvar.var_72[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_80[Gvar.var_491][Gvar.var_492] == 0 && Gvar.var_77[Gvar.var_491][Gvar.var_492] == 0) {
                break;
            }
        }
        Gvar.var_73[Gvar.var_491][Gvar.var_492] = 1;
        Gvar.var_200 = Gvar.var_71[Gvar.var_491][Gvar.var_492];
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "どこかに階段が現れたようだ…";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        return;
}

export {func689}
