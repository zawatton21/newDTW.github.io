import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func934(this: any) {
        Adap.dbgprt(934);
        if (Gvar.var_624 == 0) {
            Gvar.var_3602 = "０";
        }
        if (Gvar.var_624 == 1) {
            Gvar.var_3602 = "１";
        }
        if (Gvar.var_624 == 2) {
            Gvar.var_3602 = "２";
        }
        if (Gvar.var_624 == 3) {
            Gvar.var_3602 = "３";
        }
        if (Gvar.var_624 == 4) {
            Gvar.var_3602 = "４";
        }
        if (Gvar.var_624 == 5) {
            Gvar.var_3602 = "５";
        }
        if (Gvar.var_624 == 6) {
            Gvar.var_3602 = "６";
        }
        if (Gvar.var_624 == 7) {
            Gvar.var_3602 = "７";
        }
        if (Gvar.var_624 == 8) {
            Gvar.var_3602 = "８";
        }
        Gvar.var_3603 = "窓数" + Gvar.var_3602;
        Adap.tcpput(Gvar.var_3603, Gvar.var_1050);
        Adap.tcpput("\n", Gvar.var_1050);
        return;
}

export {func934}
