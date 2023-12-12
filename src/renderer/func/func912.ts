import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func912(this: any) {
        Adap.dbgprt(912);
        Gvar.var_3519 = Adap.dim(30);
        Gvar.var_3519[0] = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_3519[1] = 0;
        Gvar.var_3519[2] = 0;
        Gvar.var_3519[3] = Gvar.var_233[Gvar.var_225].Var3;
        Gvar.var_3519[4] = Gvar.var_233[Gvar.var_225].Var4;
        Gvar.var_3519[5] = Gvar.var_233[Gvar.var_225].Var5;
        Gvar.var_3519[6] = Gvar.var_233[Gvar.var_225].Var6;
        Gvar.var_3519[7] = Gvar.var_233[Gvar.var_225].Var7;
        Gvar.var_3519[8] = 0;
        Gvar.var_3519[9] = Gvar.var_233[Gvar.var_225].Var9;
        Gvar.var_3519[10] = Gvar.var_233[Gvar.var_225].Var10;
        Gvar.var_3519[11] = 0;
        Gvar.var_3519[12] = Gvar.var_233[Gvar.var_225].Var12;
        Gvar.var_3519[13] = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.var_3519[14] = Gvar.var_233[Gvar.var_225].Var14;
        Gvar.var_3519[15] = Gvar.var_233[Gvar.var_225].Var15;
        Gvar.var_3519[16] = Gvar.var_233[Gvar.var_225].Var16;
        Gvar.var_3519[17] = Gvar.var_233[Gvar.var_225].Var17;
        Gvar.var_3519[18] = Gvar.var_233[Gvar.var_225].Var18;
        Gvar.var_3519[19] = Gvar.var_233[Gvar.var_225].Var19;
        Gvar.var_3519[20] = Gvar.var_233[Gvar.var_225].Var20;
        Gvar.var_3519[21] = Gvar.var_233[Gvar.var_225].Var21;
        Gvar.var_3519[22] = Gvar.var_233[Gvar.var_225].Var22;
        Gvar.var_3519[23] = Gvar.var_233[Gvar.var_225].Var23;
        Gvar.var_3519[24] = Gvar.var_233[Gvar.var_225].Var24;
        Gvar.var_3519[25] = Gvar.var_233[Gvar.var_225].Var25;
        Gvar.var_3519[26] = Gvar.var_233[Gvar.var_225].Var26;
        Gvar.var_3519[27] = Gvar.var_233[Gvar.var_225].Var27;
        Gvar.var_3519[28] = Gvar.var_233[Gvar.var_225].Var28;
        Gvar.var_3519[29] = Gvar.var_233[Gvar.var_225].Var29;
        Gvar.var_1459 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1249 = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.var_3566 = 0;
        Gvar.var_3579 = "送具";
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            Gvar.var_3579 = "" + Gvar.var_3579 + "," + Gvar.var_3519[Gvar.var_3566];
            Gvar.var_3566++;
        }
        Adap.tcpput(Gvar.var_3579, Gvar.var_1050);
        Adap.tcpput("\n", Gvar.var_1050);
        return;
}

export {func912}
