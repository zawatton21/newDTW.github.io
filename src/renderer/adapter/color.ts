import { Gvar } from '../variable'

function color(red: number, green: number, blue: number) {
    Gvar.context.strokeStyle = "rgb(" + red + ", " + green + ", " + blue + ")";
    Gvar.context.fillStyle = "rgb(" + red + ", " + green + ", " + blue + ")";
}

export {color}