import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func873(this: any) {
        Adap.dbgprt(873);
        Gvar.var_3463 = "";
        Gvar.var_3463 = Gvar.var_3463 + "" + Gvar.var_3253 + "\n";
        Gvar.var_3464 = 0;
        for (let cnt1 = 0; cnt1 < 38; ++cnt1) {
            Gvar.var_3465 = 0;
            for (let cnt2 = 0; cnt2 < 59; ++cnt2) {
                if (cnt2 == 57) {
                    Gvar.var_3463 = Gvar.var_3463 + "\n";
                    break;
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 0) {
                    Gvar.var_3466 = "#";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] >= 1 && Gvar.var_71[Gvar.var_3465][Gvar.var_3464] <= 9) {
                    Gvar.var_3466 = "" + Gvar.var_71[Gvar.var_3465][Gvar.var_3464];
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 10) {
                    Gvar.var_3466 = "x";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 11) {
                    Gvar.var_3466 = "y";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 12) {
                    Gvar.var_3466 = "z";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 13) {
                    Gvar.var_3466 = "^";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 14) {
                    Gvar.var_3466 = ".";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 21) {
                    Gvar.var_3466 = "W";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 22) {
                    Gvar.var_3466 = "X";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 23) {
                    Gvar.var_3466 = "Y";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 24) {
                    Gvar.var_3466 = "Z";
                }
                if (Gvar.var_73[Gvar.var_3465][Gvar.var_3464] == 1) {
                    Gvar.var_3466 = ">";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 1) {
                    Gvar.var_3466 = "a";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 2) {
                    Gvar.var_3466 = "b";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 3) {
                    Gvar.var_3466 = "c";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 4) {
                    Gvar.var_3466 = "d";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 5) {
                    Gvar.var_3466 = "e";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 6) {
                    Gvar.var_3466 = "f";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 7) {
                    Gvar.var_3466 = "g";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 8) {
                    Gvar.var_3466 = "h";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 9) {
                    Gvar.var_3466 = "i";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 10) {
                    Gvar.var_3466 = "j";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 11) {
                    Gvar.var_3466 = "U";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 12) {
                    Gvar.var_3466 = "V";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 13) {
                    Gvar.var_3466 = "u";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 14) {
                    Gvar.var_3466 = "v";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 15) {
                    Gvar.var_3466 = "w";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 16) {
                    Gvar.var_3466 = "[";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 17) {
                    Gvar.var_3466 = "]";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 18) {
                    Gvar.var_3466 = "?";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 19) {
                    Gvar.var_3466 = "%";
                }
                if (Gvar.var_77[Gvar.var_3465][Gvar.var_3464] == 20) {
                    Gvar.var_3466 = "|";
                }
                if (Gvar.var_80[Gvar.var_3465][Gvar.var_3464] == 1) {
                    Gvar.var_3466 = "k";
                }
                if (Gvar.var_80[Gvar.var_3465][Gvar.var_3464] == 2) {
                    Gvar.var_3466 = "l";
                }
                if (Gvar.var_80[Gvar.var_3465][Gvar.var_3464] == 3) {
                    Gvar.var_3466 = "m";
                }
                if (Gvar.var_80[Gvar.var_3465][Gvar.var_3464] == 4) {
                    Gvar.var_3466 = "n";
                }
                if (Gvar.var_80[Gvar.var_3465][Gvar.var_3464] == 5) {
                    Gvar.var_3466 = "o";
                }
                if (Gvar.var_80[Gvar.var_3465][Gvar.var_3464] == 6) {
                    Gvar.var_3466 = "p";
                }
                if (Gvar.var_80[Gvar.var_3465][Gvar.var_3464] == 7) {
                    Gvar.var_3466 = "q";
                }
                if (Gvar.var_80[Gvar.var_3465][Gvar.var_3464] == 8) {
                    Gvar.var_3466 = "r";
                }
                if (Gvar.var_80[Gvar.var_3465][Gvar.var_3464] == 9) {
                    Gvar.var_3466 = "s";
                }
                if (Gvar.var_80[Gvar.var_3465][Gvar.var_3464] == 10) {
                    Gvar.var_3466 = "t";
                }
                Gvar.var_3463 = Gvar.var_3463 + Gvar.var_3466;
                Gvar.var_3465++;
            }
            Gvar.var_3464++;
        }
        Gvar.var_3464 = 0;
        for (let cnt1 = 0; cnt1 < 38; ++cnt1) {
            Gvar.var_3465 = 0;
            for (let cnt2 = 0; cnt2 < 59; ++cnt2) {
                if (cnt2 == 57) {
                    Gvar.var_3463 = Gvar.var_3463 + "\n";
                    break;
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 0) {
                    Gvar.var_3466 = " ";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] >= 1 && Gvar.var_71[Gvar.var_3465][Gvar.var_3464] <= 9) {
                    Gvar.var_3466 = " ";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 10) {
                    Gvar.var_3466 = " ";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 11) {
                    Gvar.var_3466 = " ";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 12) {
                    Gvar.var_3466 = " ";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 13) {
                    Gvar.var_3466 = " ";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 14) {
                    Gvar.var_3466 = " ";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 21) {
                    Gvar.var_3466 = " ";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 22) {
                    Gvar.var_3466 = " ";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 23) {
                    Gvar.var_3466 = " ";
                }
                if (Gvar.var_71[Gvar.var_3465][Gvar.var_3464] == 24) {
                    Gvar.var_3466 = " ";
                }
                if (Gvar.var_65[Gvar.var_3465][Gvar.var_3464] == 1) {
                    Gvar.var_3466 = "@";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 1) {
                    Gvar.var_3466 = "A";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 2) {
                    Gvar.var_3466 = "B";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 3) {
                    Gvar.var_3466 = "C";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 4) {
                    Gvar.var_3466 = "D";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 5) {
                    Gvar.var_3466 = "E";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 6) {
                    Gvar.var_3466 = "F";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 7) {
                    Gvar.var_3466 = "G";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 8) {
                    Gvar.var_3466 = "H";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 9) {
                    Gvar.var_3466 = "I";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 10) {
                    Gvar.var_3466 = "J";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 11) {
                    Gvar.var_3466 = "K";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 12) {
                    Gvar.var_3466 = "L";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 13) {
                    Gvar.var_3466 = "M";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 14) {
                    Gvar.var_3466 = "N";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 15) {
                    Gvar.var_3466 = "O";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 16) {
                    Gvar.var_3466 = "P";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 17) {
                    Gvar.var_3466 = "Q";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 18) {
                    Gvar.var_3466 = "R";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 19) {
                    Gvar.var_3466 = "S";
                }
                if (Gvar.var_82[Gvar.var_3465][Gvar.var_3464] == 20) {
                    Gvar.var_3466 = "T";
                }
                Gvar.var_3463 = Gvar.var_3463 + Gvar.var_3466;
                Gvar.var_3465++;
            }
            Gvar.var_3464++;
        }
        Gvar.var_3467 = Gvar.var_71[Gvar.var_3329][Gvar.var_3330];
        if (Gvar.var_71[Gvar.var_3329][Gvar.var_3330] == 21) {
            Gvar.var_3467 = 14;
        }
        if (Gvar.var_71[Gvar.var_3329][Gvar.var_3330] == 22) {
            Gvar.var_3467 = 14;
        }
        if (Gvar.var_71[Gvar.var_3329][Gvar.var_3330] == 23) {
            Gvar.var_3467 = 14;
        }
        if (Gvar.var_71[Gvar.var_3329][Gvar.var_3330] == 24) {
            Gvar.var_3467 = 14;
        }
        Gvar.var_3463 = Gvar.var_3463 + "" + Gvar.var_3467 + "\n";
        Gvar.var_3467 = Gvar.var_71[Gvar.var_3327][Gvar.var_3328];
        if (Gvar.var_71[Gvar.var_3327][Gvar.var_3328] == 21) {
            Gvar.var_3467 = 14;
        }
        if (Gvar.var_71[Gvar.var_3327][Gvar.var_3328] == 22) {
            Gvar.var_3467 = 14;
        }
        if (Gvar.var_71[Gvar.var_3327][Gvar.var_3328] == 23) {
            Gvar.var_3467 = 14;
        }
        if (Gvar.var_71[Gvar.var_3327][Gvar.var_3328] == 24) {
            Gvar.var_3467 = 14;
        }
        Gvar.var_3463 = Gvar.var_3463 + "" + Gvar.var_3467 + "\n";
        Gvar.var_3468 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            Gvar.var_3463 = Gvar.var_3463 + "" + Gvar.var_83[Gvar.var_3468].Var0 + "\n";
            Gvar.var_3467 = 0;
            Gvar.var_3467 = Gvar.var_83[Gvar.var_3468].Var16;
            Gvar.var_3463 = Gvar.var_3463 + "" + Gvar.var_3467 + "\n";
            Gvar.var_3468++;
        }
        Gvar.var_3468 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            Gvar.var_3463 = Gvar.var_3463 + "" + Gvar.var_78[Gvar.var_3468].Var0 + "\n";
            Gvar.var_3469 = Gvar.var_78[Gvar.var_3468].Var1;
            Gvar.var_3470 = Gvar.var_78[Gvar.var_3468].Var2;
            await Func.func874();
            Gvar.var_3463 = Gvar.var_3463 + "" + Gvar.var_3467 + "\n";
            Gvar.var_3471 = 0;
            if (Gvar.var_78[Gvar.var_3468].Var0 >= 100 && Gvar.var_78[Gvar.var_3468].Var0 < 400) {
                Gvar.var_3471 = Gvar.var_78[Gvar.var_3468].Var4;
                if (Gvar.var_78[Gvar.var_3468].Var12 == 1) {
                    Gvar.var_3471 = 11;
                }
            }
            if (Gvar.var_78[Gvar.var_3468].Var0 >= 400 && Gvar.var_78[Gvar.var_3468].Var0 < 500) {
                Gvar.var_3471 = Gvar.var_78[Gvar.var_3468].Var3;
            }
            if (Gvar.var_78[Gvar.var_3468].Var0 >= 800 && Gvar.var_78[Gvar.var_3468].Var0 < 900) {
                Gvar.var_3471 = Gvar.var_78[Gvar.var_3468].Var7;
            }
            if (Gvar.var_78[Gvar.var_3468].Var0 == 1) {
                Gvar.var_3471 = Gvar.var_78[Gvar.var_3468].Var13;
            }
            Gvar.var_3463 = Gvar.var_3463 + "" + Gvar.var_3471 + "\n";
            Gvar.var_3468++;
        }
        Gvar.var_3468 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_3463 = Gvar.var_3463 + "" + Gvar.var_81[Gvar.var_3468][0] + "\n";
            Gvar.var_3469 = Gvar.var_81[Gvar.var_3468][1];
            Gvar.var_3470 = Gvar.var_81[Gvar.var_3468][2];
            await Func.func874();
            Gvar.var_3463 = Gvar.var_3463 + "" + Gvar.var_3467 + "\n";
            Gvar.var_3468++;
        }
        Gvar.var_3463 = Gvar.var_3463 + "" + Gvar.var_3260 + "\n";
        Adap.notesel(Gvar.var_3463);
        Gvar.var_3472 = Adap.sdim(10000);
        for (let cnt1 = 0; cnt1 < 200; ++cnt1) {
            Gvar.var_3473 = Adap.noteget(cnt1);
            Gvar.var_3472 = Gvar.var_3472 + Gvar.var_3473 + "\n";
        }
        await Func.func887();
        await Adap.bsave(Gvar.var_3336, Gvar.data = Gvar.var_3472, null, null);
        return;
}

export {func873}
