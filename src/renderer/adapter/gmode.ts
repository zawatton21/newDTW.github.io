import { Gvar } from '../variable'
import { sumiRecordRaw } from './sumiBackend'

// @ts-expect-error TS(7006): Parameter 'mode' implicitly has an 'any' type.
function gmode(mode, data2 = null, data3 = null, alpha = null) {
    Gvar.alpha_mode = mode;
    switch (mode) {
        case 2:
            Gvar.alpha_color = "#000000";
        default:
            Gvar.context.globalAlpha = 1;
            break;
        case 4:
            Gvar.alpha_color = Gvar.context.fillStyle;
        case 3:
            Gvar.context.globalAlpha = alpha / 255;
    }
    // mirror the resulting global alpha to the native sumi renderer (0..255),
    // so translucent blits (gmode 3/4) render with the same alpha natively.
    sumiRecordRaw('gui-set-alpha', [Math.round(Gvar.context.globalAlpha * 255)]);
}

export {gmode}