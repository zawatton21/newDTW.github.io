import { Gvar } from '../variable'

function boxf(left:any = null, top1:any = null, right:any = null, bottom:any = null) {
    left = left || 0;
    top1 = top1 || 0;
    right = right || 340;
    bottom = bottom || 340;
    if ((Gvar.target_window_id == 4 || Gvar.target_window_id == 7 || Gvar.target_window_id == 10 || Gvar.target_window_id == 32) && left == 0 && top1 == 0) {
        return Gvar.context.clearRect(left, top1, right - left, bottom - top1);
    }
    const ga = Gvar.context.globalAlpha;
    Gvar.context.globalAlpha = 1;
    Gvar.context.fillRect(left, top1, right - left, bottom - top1);
    Gvar.context.globalAlpha = ga;
}

export {boxf}