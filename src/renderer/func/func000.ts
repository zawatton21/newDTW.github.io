import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

async function makepal() {
    Gvar.var_0 = 0;
    Gvar.var_1 = 0;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        Gvar.var_2 = cnt1 * 32;
        for (let cnt2 = 0; cnt2 < 120; ++cnt2) {
            Gvar.var_3 = Adap.limit(cnt2 % 5 * 64 + Gvar.var_2, 0, 255);
            Gvar.var_4 = Adap.limit(Math.floor(cnt2 / 5) % 5 * 64 + Gvar.var_2, 0, 255); // Math.floor は対象の値の小数点以下を切り捨て
            Gvar.var_5 = Adap.limit(Math.floor(cnt2 / 25) % 5 * 64 + Gvar.var_2, 0, 255); // Math.floor は対象の値の小数点以下を切り捨て
            if (Gvar.var_3 == Gvar.var_4 && Gvar.var_4 == Gvar.var_5 && Gvar.var_5 == Gvar.var_3) {
                Adap.palette(Gvar.data0 = Gvar.var_1, Gvar.data1 = Gvar.var_3, Gvar.var_4, Gvar.var_5, Gvar.data4 = null)
                Gvar.var_1++;
            }
        }
    }
    for (let cnt3 = Gvar.var_1; cnt3 < 15 + Gvar.var_1; ++cnt3) {
        Adap.palette(Gvar.data0 = cnt3, Gvar.data1 = Gvar.var_0, Gvar.var_0, Gvar.var_0, Gvar.data4 = 254);
        Gvar.var_0 += 16;
    }
    return;
}

export {makepal}

async function imeset(prm_2546: any) {

    Gvar.var_6 = Adap.ImmGetContext(Gvar.hwnd);
    Adap.ImmSetOpenStatus(Gvar.var_6, prm_2546);

    Adap.ImmReleaseContext(Gvar.hwnd, Gvar.var_6);
    return;
}

export {imeset}

async function imeget() {
    Gvar.var_6 = Adap.ImmGetContext(Gvar.hwnd);
    Gvar.var_7 = Adap.ImmGetOpenStatus(Gvar.var_6);
    Adap.ImmReleaseContext(Gvar.hwnd, Gvar.var_6);
    return Gvar.var_7;
}

export {imeget}
