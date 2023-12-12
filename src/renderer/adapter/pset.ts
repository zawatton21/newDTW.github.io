import { Gvar } from '../variable'

function pset(pos_x: any, pos_y: any) {
    Gvar.context.beginPath();
    Gvar.context.arc(pos_x, pos_y, 1, 0, 6.28, false);
    Gvar.context.fill();
}

export {pset}