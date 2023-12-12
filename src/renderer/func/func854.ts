import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func854(this: any) {
        Adap.dbgprt(854);
        Adap.color(255, 255, 255);
        Adap.line(Gvar.var_3239, Gvar.var_3240, Gvar.var_3239 + Gvar.var_3241, Gvar.var_3240);
        Adap.line(Gvar.var_3239, Gvar.var_3240, Gvar.var_3239, Gvar.var_3240 + Gvar.var_3242);
        Adap.color(100, 100, 100);
        Adap.line(Gvar.var_3239, Gvar.var_3240 + Gvar.var_3242, Gvar.var_3239 + Gvar.var_3241, Gvar.var_3240 + Gvar.var_3242);
        Adap.line(Gvar.var_3239, Gvar.var_3240 + Gvar.var_3242 + 1, Gvar.var_3239 + Gvar.var_3241, Gvar.var_3240 + Gvar.var_3242 + 1);
        Adap.line(Gvar.var_3239 + Gvar.var_3241, Gvar.var_3240, Gvar.var_3239 + Gvar.var_3241, Gvar.var_3240 + Gvar.var_3242);
        Adap.line(Gvar.var_3239 + Gvar.var_3241 - 1, Gvar.var_3240, Gvar.var_3239 + Gvar.var_3241 - 1, Gvar.var_3240 + Gvar.var_3242);
        Gvar.var_1149 = 4;
        Gvar.var_449 = 2;
        Gvar.var_3302 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_3238; ++cnt1) {
            Gvar.var_3303 = 4;
            Gvar.var_447 = 2;
            Gvar.var_3304 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_3237; ++cnt2) {
                if (Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 0) {
                    Adap.color(0, 0, 0);
                    Adap.boxf(Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3233, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3233);
                }
                if (Gvar.var_3303 == 4 || Gvar.var_1149 == 4 || Gvar.var_3304 == Gvar.var_3237 || Gvar.var_3302 == Gvar.var_3238) {
                    Adap.color(130, 130, 130);
                    Adap.boxf(Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3233, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3233);
                }
                if (Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 13) {
                    Adap.color(0, 0, 0);
                    Adap.boxf(Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3233, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3233);
                }
                if (Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 14 || Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 21 || Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 22 || Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 23 || Gvar.var_71[Gvar.var_3303][Gvar.var_1149] == 24) {
                    Adap.color(0, 0, 255);
                    Adap.boxf(Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3233, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3233);
                }
                if (Gvar.var_71[Gvar.var_3303][Gvar.var_1149] > 0 && Gvar.var_71[Gvar.var_3303][Gvar.var_1149] <= 12) {
                    Adap.color(0, 0, 255);
                    Adap.boxf(Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3233, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3233);
                }
                if (Gvar.var_80[Gvar.var_3303][Gvar.var_1149] >= 1) {
                    Adap.color(255, 0, 255);
                    Adap.boxf(Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3234, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3234);
                }
                if (Gvar.var_77[Gvar.var_3303][Gvar.var_1149] >= 1) {
                    Adap.color(0, 255, 255);
                    Adap.boxf(Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3234, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3234);
                }
                if (Gvar.var_73[Gvar.var_3303][Gvar.var_1149] == 1) {
                    Adap.color(0, 255, 255);
                    Adap.boxf(Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3233, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3233);
                    Adap.color(0, 0, 255);
                    Adap.pset(Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231 + 1, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232 + 1);
                }
                if (Gvar.var_82[Gvar.var_3303][Gvar.var_1149] >= 1) {
                    Adap.color(255, 0, 0);
                    Adap.boxf(Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3234, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3234);
                }
                if (Gvar.var_65[Gvar.var_3303][Gvar.var_1149] == 1) {
                    Adap.color(255, 255, 255);
                    Adap.boxf(Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232, Gvar.var_447 * Gvar.var_3233 + Gvar.var_3231 + Gvar.var_3234, Gvar.var_449 * Gvar.var_3233 + Gvar.var_3232 + Gvar.var_3234);
                }
                Gvar.var_447++;
                Gvar.var_3303++;
                Gvar.var_3304++;
            }
            Gvar.var_449++;
            Gvar.var_1149++;
            Gvar.var_3302++;
        }
        Adap.color(255, 255, 0);
        Adap.line((Gvar.var_66 - 1) * Gvar.var_3233 + Gvar.var_3231 - 1, (Gvar.var_67 - 1) * Gvar.var_3233 + Gvar.var_3232, (Gvar.var_66 + 7) * Gvar.var_3233 + Gvar.var_3231, (Gvar.var_67 - 1) * Gvar.var_3233 + Gvar.var_3232);
        Adap.line((Gvar.var_66 - 1) * Gvar.var_3233 + Gvar.var_3231, (Gvar.var_67 - 1) * Gvar.var_3233 + Gvar.var_3232, (Gvar.var_66 - 1) * Gvar.var_3233 + Gvar.var_3231, (Gvar.var_67 + 7) * Gvar.var_3233 + Gvar.var_3232);
        Adap.line((Gvar.var_66 + 7) * Gvar.var_3233 + Gvar.var_3231, (Gvar.var_67 - 1) * Gvar.var_3233 + Gvar.var_3232, (Gvar.var_66 + 7) * Gvar.var_3233 + Gvar.var_3231, (Gvar.var_67 + 7) * Gvar.var_3233 + Gvar.var_3232);
        Adap.line((Gvar.var_66 - 1) * Gvar.var_3233 + Gvar.var_3231, (Gvar.var_67 + 7) * Gvar.var_3233 + Gvar.var_3232, (Gvar.var_66 + 7) * Gvar.var_3233 + Gvar.var_3231, (Gvar.var_67 + 7) * Gvar.var_3233 + Gvar.var_3232);
        return;
}

export {func854}
