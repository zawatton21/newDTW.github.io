import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func181(this: any) {
        Adap.dbgprt(181);
        Gvar.var_336 = 0;
        Gvar.var_852 = 1;
        for (let cnt1 = 0; cnt1 < 48; ++cnt1) {
            if (Gvar.var_853[Gvar.var_852][0] != 0) {
                await Func.func724();
                Gvar.var_447 = Gvar.var_853[Gvar.var_852][1];
                Gvar.var_449 = Gvar.var_853[Gvar.var_852][2];
                Gvar.var_77[Gvar.var_447][Gvar.var_449] = Gvar.var_854;
                Gvar.var_78[Gvar.var_854].Var0 = Gvar.var_853[Gvar.var_852][0];
                Gvar.var_78[Gvar.var_854].Var1 = Gvar.var_853[Gvar.var_852][1];
                Gvar.var_78[Gvar.var_854].Var2 = Gvar.var_853[Gvar.var_852][2];
                Gvar.var_78[Gvar.var_854].Var3 = Gvar.var_853[Gvar.var_852][3];
                Gvar.var_78[Gvar.var_854].Var4 = Gvar.var_853[Gvar.var_852][4];
                Gvar.var_78[Gvar.var_854].Var5 = Gvar.var_853[Gvar.var_852][5];
                Gvar.var_78[Gvar.var_854].Var6 = Gvar.var_853[Gvar.var_852][6];
                Gvar.var_78[Gvar.var_854].Var7 = Gvar.var_853[Gvar.var_852][7];
                Gvar.var_78[Gvar.var_854].Var8 = Gvar.var_853[Gvar.var_852][8];
                if (Gvar.var_78[Gvar.var_854].Var0 >= 800 && Gvar.var_78[Gvar.var_854].Var0 < 900) {
                    Gvar.var_855 = Adap.dim(100);
                    Gvar.var_856 = 1;
                    for (let cnt4 = 0; cnt4 < Gvar.var_224; ++cnt4) {
                        if (Gvar.var_233[Gvar.var_856].Var0 >= 800 && Gvar.var_233[Gvar.var_856].Var0 < 900) {
                            Gvar.var_857 = Gvar.var_233[Gvar.var_856].Var6;
                            Gvar.var_855[Gvar.var_857]++;
                        }
                        Gvar.var_856++;
                    }
                    Gvar.var_856 = 1;
                    for (let cnt4 = 0; cnt4 < 49; ++cnt4) {
                        if (Gvar.var_853[Gvar.var_856][0] >= 800 && Gvar.var_853[Gvar.var_856][0] < 900) {
                            Gvar.var_857 = Gvar.var_853[Gvar.var_856][6];
                            Gvar.var_855[Gvar.var_857]++;
                            if (Gvar.var_855[Gvar.var_857] >= 2) {
                                await Func.func395();
                                Gvar.var_78[Gvar.var_854].Var6 = Gvar.var_858;
                                Gvar.var_78[Gvar.var_854].Var7 = Gvar.var_853[Gvar.var_852][7] + Gvar.var_853[Gvar.var_852][8];
                                Gvar.var_78[Gvar.var_854].Var8 = 0;
                            }
                        }
                        Gvar.var_856++;
                    }
                    Gvar.var_859 = 1;
                    Gvar.var_860 = Gvar.var_78[Gvar.var_854].Var6;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        if (Gvar.var_486[Gvar.var_860][Gvar.var_859][0] != 0) {
                            Gvar.var_486[Gvar.var_860][Gvar.var_859][14] = 1;
                            Gvar.var_861 = Gvar.var_486[Gvar.var_860][Gvar.var_859][0];
                            Gvar.var_862[Gvar.var_861][0] = 1;
                        }
                        Gvar.var_859++;
                    }
                }
                Gvar.var_78[Gvar.var_854].Var9 = Gvar.var_853[Gvar.var_852][9];
                Gvar.var_78[Gvar.var_854].Var10 = 1;
                Gvar.var_78[Gvar.var_854].Var11 = Gvar.var_853[Gvar.var_852][11];
                Gvar.var_78[Gvar.var_854].Var12 = Gvar.var_853[Gvar.var_852][12];
                Gvar.var_78[Gvar.var_854].Var13 = Gvar.var_853[Gvar.var_852][13];
                Gvar.var_78[Gvar.var_854].Var14 = 1;
                Gvar.var_78[Gvar.var_854].Var15 = Gvar.var_853[Gvar.var_852][15];
                Gvar.var_78[Gvar.var_854].Var16 = Gvar.var_853[Gvar.var_852][16];
                Gvar.var_78[Gvar.var_854].Var17 = Gvar.var_853[Gvar.var_852][17];
                Gvar.var_78[Gvar.var_854].Var18 = Gvar.var_853[Gvar.var_852][18];
                Gvar.var_78[Gvar.var_854].Var19 = Gvar.var_853[Gvar.var_852][19];
                Gvar.var_78[Gvar.var_854].Var20 = Gvar.var_853[Gvar.var_852][20];
                Gvar.var_78[Gvar.var_854].Var21 = Gvar.var_853[Gvar.var_852][21];
                Gvar.var_78[Gvar.var_854].Var22 = Gvar.var_853[Gvar.var_852][22];
                Gvar.var_78[Gvar.var_854].Var23 = Gvar.var_853[Gvar.var_852][23];
                Gvar.var_78[Gvar.var_854].Var24 = Gvar.var_853[Gvar.var_852][24];
                Gvar.var_78[Gvar.var_854].Var25 = Gvar.var_853[Gvar.var_852][25];
                Gvar.var_78[Gvar.var_854].Var26 = Gvar.var_853[Gvar.var_852][26];
                Gvar.var_78[Gvar.var_854].Var27 = Gvar.var_853[Gvar.var_852][27];
                Gvar.var_78[Gvar.var_854].Var28 = Gvar.var_853[Gvar.var_852][28];
                Gvar.var_78[Gvar.var_854].Var29 = Gvar.var_853[Gvar.var_852][29];
                Gvar.var_861 = Gvar.var_78[Gvar.var_854].Var0;
                Gvar.var_862[Gvar.var_861][0] = 1;
                Gvar.var_336++;
            }
            Gvar.var_852++;
        }
        return;
}

export {func181}
