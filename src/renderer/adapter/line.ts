import { Gvar } from '../variable'

// @ts-expect-error TS(7006): Parameter 'start_x' implicitly has an 'any' type.
function line(start_x, start_y, end_x, end_y) {
    Gvar.context.beginPath();
    Gvar.context.moveTo(start_x, start_y);
    Gvar.context.lineTo(end_x, end_y);
    Gvar.context.stroke();
}

export {line}