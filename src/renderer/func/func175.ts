import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func175(this: any) {
        Adap.dbgprt(175);
        Gvar.var_793 = Gvar.dungeon_number;
        if (Gvar.var_793 == 5) {
            Gvar.var_793 = 0;
        }
        Gvar.var_792[Gvar.var_793][0][0] = Gvar.var_338;
        Gvar.var_792[Gvar.var_793][0][1] = Gvar.current_floor;
        Gvar.var_792[Gvar.var_793][0][2] = Gvar.var_356;
        Gvar.var_792[Gvar.var_793][0][3] = Gvar.var_838;
        Gvar.var_792[Gvar.var_793][0][4] = 0;
        Gvar.var_792[Gvar.var_793][0][5] = 0;
        Gvar.var_792[Gvar.var_793][0][6] = 0;
        Gvar.var_792[Gvar.var_793][0][7] = 0;
        Gvar.var_792[Gvar.var_793][0][8] = 0;
        Gvar.var_792[Gvar.var_793][0][9] = 0;
        Gvar.var_792[Gvar.var_793][0][10] = 0;
        Gvar.var_792[Gvar.var_793][0][11] = 0;
        Gvar.var_792[Gvar.var_793][0][12] = 0;
        Gvar.var_792[Gvar.var_793][0][13] = Gvar.dungeon_number;
        Gvar.var_792[Gvar.var_793][0][14] = Gvar.current_level;
        Gvar.var_792[Gvar.var_793][0][15] = Gvar.var_352;
        Gvar.var_792[Gvar.var_793][0][16] = Gvar.var_566;
        Gvar.var_792[Gvar.var_793][0][17] = Gvar.var_565;
        Gvar.var_792[Gvar.var_793][0][18] = Gvar.var_567;
        Gvar.var_792[Gvar.var_793][0][50] = Adap.gettime(0); // now.getFullYear();// 年（year）。｢20**｣という数値が返る。
        Gvar.var_792[Gvar.var_793][0][51] = Adap.gettime(1); // now.getMonth()+1;// 月（month）。「1～12」の範囲の数値が返る。
        Gvar.var_792[Gvar.var_793][0][52] = Adap.gettime(3); // now.getDate();// 日（day）。「1～31」の範囲の数値が返る。
        Gvar.var_792[Gvar.var_793][0][19] = 0;
        if (Gvar.kougeki_disc_id  != 0) {
            await Func.func426();
            Gvar.var_792[Gvar.var_793][0][4] = Gvar.kougeki_disc_id ;
            if (Gvar.var_233[Gvar.var_553].Var13 == 1) {
                Gvar.var_792[Gvar.var_793][0][4] = Gvar.kougeki_disc_id  + 1000;
            }
            if (Gvar.var_233[Gvar.var_553].Var13 == 2) {
                Gvar.var_792[Gvar.var_793][0][4] = Gvar.kougeki_disc_id  + 2000;
            }
            if (Gvar.var_233[Gvar.var_553].Var13 == 3) {
                Gvar.var_792[Gvar.var_793][0][4] = Gvar.kougeki_disc_id  + 3000;
            }
            Gvar.var_792[Gvar.var_793][0][5] = Gvar.var_233[Gvar.var_553].Var4;
            Gvar.var_792[Gvar.var_793][0][6] = Gvar.var_233[Gvar.var_553].Var19;
            Gvar.var_792[Gvar.var_793][0][20] = Gvar.var_233[Gvar.var_553].Var20;
            Gvar.var_792[Gvar.var_793][0][21] = Gvar.var_233[Gvar.var_553].Var21;
            Gvar.var_792[Gvar.var_793][0][22] = Gvar.var_233[Gvar.var_553].Var22;
            Gvar.var_792[Gvar.var_793][0][23] = Gvar.var_233[Gvar.var_553].Var23;
            Gvar.var_792[Gvar.var_793][0][24] = Gvar.var_233[Gvar.var_553].Var24;
            Gvar.var_792[Gvar.var_793][0][25] = Gvar.var_233[Gvar.var_553].Var25;
            Gvar.var_792[Gvar.var_793][0][26] = Gvar.var_233[Gvar.var_553].Var26;
            Gvar.var_792[Gvar.var_793][0][27] = Gvar.var_233[Gvar.var_553].Var27;
            Gvar.var_792[Gvar.var_793][0][28] = Gvar.var_233[Gvar.var_553].Var28;
            Gvar.var_792[Gvar.var_793][0][29] = Gvar.var_233[Gvar.var_553].Var29;
            Gvar.var_792[Gvar.var_793][0][53] = Gvar.var_233[Gvar.var_553].Var5;
            Gvar.var_792[Gvar.var_793][0][56] = Gvar.var_233[Gvar.var_553].Var12;
        }
        if (Gvar.bougyo_disc_id != 0) {
            await Func.func427();
            Gvar.var_792[Gvar.var_793][0][7] = Gvar.bougyo_disc_id;
            if (Gvar.var_233[Gvar.var_554].Var13 == 1) {
                Gvar.var_792[Gvar.var_793][0][7] = Gvar.bougyo_disc_id + 1000;
            }
            if (Gvar.var_233[Gvar.var_554].Var13 == 2) {
                Gvar.var_792[Gvar.var_793][0][7] = Gvar.bougyo_disc_id + 2000;
            }
            if (Gvar.var_233[Gvar.var_554].Var13 == 3) {
                Gvar.var_792[Gvar.var_793][0][7] = Gvar.bougyo_disc_id + 3000;
            }
            Gvar.var_792[Gvar.var_793][0][8] = Gvar.var_233[Gvar.var_554].Var4;
            Gvar.var_792[Gvar.var_793][0][9] = Gvar.var_233[Gvar.var_554].Var19;
            Gvar.var_792[Gvar.var_793][0][30] = Gvar.var_233[Gvar.var_554].Var20;
            Gvar.var_792[Gvar.var_793][0][31] = Gvar.var_233[Gvar.var_554].Var21;
            Gvar.var_792[Gvar.var_793][0][32] = Gvar.var_233[Gvar.var_554].Var22;
            Gvar.var_792[Gvar.var_793][0][33] = Gvar.var_233[Gvar.var_554].Var23;
            Gvar.var_792[Gvar.var_793][0][34] = Gvar.var_233[Gvar.var_554].Var24;
            Gvar.var_792[Gvar.var_793][0][35] = Gvar.var_233[Gvar.var_554].Var25;
            Gvar.var_792[Gvar.var_793][0][36] = Gvar.var_233[Gvar.var_554].Var26;
            Gvar.var_792[Gvar.var_793][0][37] = Gvar.var_233[Gvar.var_554].Var27;
            Gvar.var_792[Gvar.var_793][0][38] = Gvar.var_233[Gvar.var_554].Var28;
            Gvar.var_792[Gvar.var_793][0][39] = Gvar.var_233[Gvar.var_554].Var29;
            Gvar.var_792[Gvar.var_793][0][54] = Gvar.var_233[Gvar.var_554].Var5;
            Gvar.var_792[Gvar.var_793][0][57] = Gvar.var_233[Gvar.var_554].Var12;
        }
        if (Gvar.nouryoku_disc_id != 0) {
            await Func.func428();
            Gvar.var_792[Gvar.var_793][0][10] = Gvar.nouryoku_disc_id;
            if (Gvar.var_233[Gvar.var_555].Var13 == 1) {
                Gvar.var_792[Gvar.var_793][0][10] = Gvar.nouryoku_disc_id + 1000;
            }
            if (Gvar.var_233[Gvar.var_555].Var13 == 2) {
                Gvar.var_792[Gvar.var_793][0][10] = Gvar.nouryoku_disc_id + 2000;
            }
            if (Gvar.var_233[Gvar.var_555].Var13 == 3) {
                Gvar.var_792[Gvar.var_793][0][10] = Gvar.nouryoku_disc_id + 3000;
            }
            Gvar.var_792[Gvar.var_793][0][11] = Gvar.var_233[Gvar.var_555].Var4;
            Gvar.var_792[Gvar.var_793][0][12] = Gvar.var_233[Gvar.var_555].Var19;
            Gvar.var_792[Gvar.var_793][0][40] = Gvar.var_233[Gvar.var_555].Var20;
            Gvar.var_792[Gvar.var_793][0][41] = Gvar.var_233[Gvar.var_555].Var21;
            Gvar.var_792[Gvar.var_793][0][42] = Gvar.var_233[Gvar.var_555].Var22;
            Gvar.var_792[Gvar.var_793][0][43] = Gvar.var_233[Gvar.var_555].Var23;
            Gvar.var_792[Gvar.var_793][0][44] = Gvar.var_233[Gvar.var_555].Var24;
            Gvar.var_792[Gvar.var_793][0][45] = Gvar.var_233[Gvar.var_555].Var25;
            Gvar.var_792[Gvar.var_793][0][46] = Gvar.var_233[Gvar.var_555].Var26;
            Gvar.var_792[Gvar.var_793][0][47] = Gvar.var_233[Gvar.var_555].Var27;
            Gvar.var_792[Gvar.var_793][0][48] = Gvar.var_233[Gvar.var_555].Var28;
            Gvar.var_792[Gvar.var_793][0][49] = Gvar.var_233[Gvar.var_555].Var29;
            Gvar.var_792[Gvar.var_793][0][55] = Gvar.var_233[Gvar.var_555].Var5;
            Gvar.var_792[Gvar.var_793][0][58] = Gvar.var_233[Gvar.var_555].Var12;
        }
        return;
}

export {func175}
