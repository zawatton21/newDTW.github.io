import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func047(this: any) {
        Adap.dbgprt(47);
        Gvar.var_494[39] = Gvar.var_494[37];
        Gvar.var_494[40] = Gvar.var_494[38];
        Gvar.var_494[37] = Gvar.var_494[35];
        Gvar.var_494[38] = Gvar.var_494[36];
        Gvar.var_494[35] = Gvar.var_494[33];
        Gvar.var_494[36] = Gvar.var_494[34];
        Gvar.var_494[33] = Gvar.var_494[31];
        Gvar.var_494[34] = Gvar.var_494[32];
        Gvar.var_494[31] = Gvar.var_494[29];
        Gvar.var_494[32] = Gvar.var_494[30];
        Gvar.var_494[29] = Gvar.var_494[27];
        Gvar.var_494[30] = Gvar.var_494[28];
        Gvar.var_494[27] = Gvar.var_494[25];
        Gvar.var_494[28] = Gvar.var_494[26];
        Gvar.var_494[25] = Gvar.var_494[23];
        Gvar.var_494[26] = Gvar.var_494[24];
        Gvar.var_494[23] = Gvar.var_494[21];
        Gvar.var_494[24] = Gvar.var_494[22];
        Gvar.var_494[21] = Gvar.var_494[19];
        Gvar.var_494[22] = Gvar.var_494[20];
        Gvar.var_494[19] = Gvar.var_494[17];
        Gvar.var_494[20] = Gvar.var_494[18];
        Gvar.var_494[17] = Gvar.var_494[15];
        Gvar.var_494[18] = Gvar.var_494[16];
        Gvar.var_494[15] = Gvar.var_494[13];
        Gvar.var_494[16] = Gvar.var_494[14];
        Gvar.var_494[13] = Gvar.var_494[11];
        Gvar.var_494[14] = Gvar.var_494[12];
        Gvar.var_494[11] = Gvar.var_494[9];
        Gvar.var_494[12] = Gvar.var_494[10];
        Gvar.var_494[9] = Gvar.var_494[7];
        Gvar.var_494[10] = Gvar.var_494[8];
        Gvar.var_494[7] = Gvar.var_494[5];
        Gvar.var_494[8] = Gvar.var_494[6];
        Gvar.var_494[5] = Gvar.var_494[3];
        Gvar.var_494[6] = Gvar.var_494[4];
        Gvar.var_494[3] = "";
        Gvar.var_494[4] = "";
        Gvar.var_494[3] = Gvar.var_494[1];
        Gvar.var_494[4] = Gvar.var_494[2];
        Gvar.var_495 = 1;
        Gvar.var_494[1] = "";
        Gvar.var_494[2] = "";
        if (Gvar.comments_row1 != "" && Gvar.comments_row1a == "" && Gvar.comments_row2a == "") {
            Gvar.var_494[Gvar.var_495] = Gvar.comments_row1;
            Gvar.var_495++;
        }
        if (Gvar.comments_row2 != "" && Gvar.comments_row1a == "" && Gvar.comments_row2a == "") {
            Gvar.var_494[Gvar.var_495] = Gvar.comments_row2;
            Gvar.var_495++;
        }
        if (Gvar.var_295 != "") {
            Gvar.var_494[Gvar.var_495] = Gvar.var_295;
            Gvar.var_495++;
        }
        if (Gvar.comments_row1a != "") {
            Gvar.var_494[Gvar.var_495] = Gvar.comments_row1a;
            Gvar.var_495++;
        }
        if (Gvar.comments_row2a != "") {
            Gvar.var_494[Gvar.var_495] = Gvar.comments_row2a;
            Gvar.var_495++;
        }
        if (Gvar.var_298 != "") {
            Gvar.var_494[Gvar.var_495] = Gvar.var_298;
            Gvar.var_495++;
        }
        if (Gvar.var_407 == 1) {
            await Func.func902();
        }
        if (Gvar.var_407 == 2) {
            await Func.func930();
        }
        return;
}

export {func047}
