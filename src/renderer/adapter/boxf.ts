import { Gvar } from '../variable'
import { sumiApply } from './sumiBackend'

function boxf(left:any = null, top1:any = null, right:any = null, bottom:any = null) {
    left = left || 0;
    top1 = top1 || 0;
    right = right || 340;
    bottom = bottom || 340;
    // Game-specific: certain buffers clear instead of fill at the origin.
    if ((Gvar.target_window_id == 4 || Gvar.target_window_id == 7 || Gvar.target_window_id == 10 || Gvar.target_window_id == 32) && left == 0 && top1 == 0) {
        return Gvar.context.clearRect(left, top1, right - left, bottom - top1);
    }
    // Force an opaque fill (game semantic), then delegate the rectangle to sumi.
    const ga = Gvar.context.globalAlpha;
    Gvar.context.globalAlpha = 1;
    sumiApply('gui-fill-rect', [left, top1, right, bottom]);
    Gvar.context.globalAlpha = ga;
}

export {boxf}