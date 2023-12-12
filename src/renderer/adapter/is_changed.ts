import { Gvar } from '../variable'

function is_changed(x: any, y: any) {
    if (Gvar.pre_pos[0] == 0 && Gvar.pre_pos[1] == 0) {
        return true;
    }
    const b1 = Gvar.canvasSize / 3;
    const b2 = Gvar.canvasSize / 3 * 2;
    if (((Gvar.pre_pos[0] - b1) * (x - b1) < 0) ||
        ((Gvar.pre_pos[0] - b2) * (x - b2) < 0) ||
        ((Gvar.pre_pos[1] - b2) * (y - b2) < 0) ||
        ((Gvar.pre_pos[1] - b2) * (y - b2) < 0)) {
        return true;
    }
    return false;
}

export {is_changed}