import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func489(this: any) {
        Adap.dbgprt(489);
        Gvar.var_2153 = "";
        if (Gvar.var_2142 == 0) {
            Gvar.var_2152 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                Gvar.var_2153 = "" + Gvar.var_2153 + "" + Gvar.var_2133[Gvar.var_2152];
                Gvar.var_2152++;
            }
        }
        if (Gvar.var_2142 == 1) {
            Gvar.var_2153 = Gvar.var_2144;
        }
        Gvar.var_2122 = "" + Gvar.var_2153;
        Gvar.var_2161 = Gvar.var_233[Gvar.var_2042].Var6;
        Gvar.var_990[Gvar.var_2161] = 1;
        if (Gvar.var_726 == 1) {
            Gvar.var_735 = "01e.dat";
        }
        if (Gvar.var_726 == 2) {
            Gvar.var_735 = "02e.dat";
        }
        if (Gvar.var_726 == 3) {
            Gvar.var_735 = "03e.dat";
        }
        await Adap.exist(Gvar.var_735);

        if (Gvar.strsize == (-1)) {
            await Func.func230();
            await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_753, null, null);
        }
        Adap.notesel(Gvar.var_754);
        await Adap.noteload(Gvar.var_735);
        Adap.noteadd(Gvar.var_2122, Gvar.var_2161, 1);
        if (Gvar.var_2122 != "") {
            if (Gvar.var_2142 == 0) {
                Gvar.var_2157 = 118;
                Gvar.var_2158 = 119;
                for (let cnt3 = 0; cnt3 < 19; ++cnt3) {
                    Gvar.var_2159 = Adap.noteget(Gvar.var_2157);
                    Adap.noteadd(Gvar.var_2159, Gvar.var_2158, 1);
                    Gvar.var_2157--;
                    Gvar.var_2158--;
                }
            }
            if (Gvar.var_2142 == 1) {
                Gvar.var_2157 = Gvar.var_2143 - 1;
                Gvar.var_2158 = Gvar.var_2143;
                Gvar.var_2160 = Gvar.var_2143 - 100;
                for (let cnt3 = 0; cnt3 < Gvar.var_2160; ++cnt3) {
                    Gvar.var_2159 = Adap.noteget(Gvar.var_2157);
                    Adap.noteadd(Gvar.var_2159, Gvar.var_2158, 1);
                    Gvar.var_2157--;
                    Gvar.var_2158--;
                }
            }
            Adap.noteadd(Gvar.var_2122, 100, 1);
        }
        await Adap.notesave(Gvar.var_735);
        Gvar.var_2142 = 0;
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_1203 = 0;
        await Func.func463();
        return;
}

export {func489}
