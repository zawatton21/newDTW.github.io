import { Gvar } from '../variable'

// @ts-expect-error TS(7006): Parameter 'window_id' implicitly has an 'any' type... Remove this comment to see the full error message
function gsel(window_id, window_mode = null) {
    if (window_mode == 1) {
        Gvar.canvases[window_id].style.display = "block";
    }
    if (window_mode == -1) {
        Gvar.canvases[window_id].style.display = "none";
    }
    Gvar.context = Gvar.contexts[window_id];
    Gvar.target_window_id = window_id;
}

export {gsel}