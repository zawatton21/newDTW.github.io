import { Gvar } from '../variable'

function redraw(mode: any) {
    mode = 1;
    if (mode == 1 && Gvar.pre_render_canvas) {
        Gvar.context = Gvar.contexts[Gvar.target_window_id];
        Gvar.context.drawImage(Gvar.pre_render_canvas, 0, 0);
    }
    else {
        Gvar.pre_render_canvas = document.createElement('canvas');
        Gvar.pre_render_canvas.id = "pre";
        Gvar.pre_render_canvas.width = 340;
        Gvar.pre_render_canvas.height = 340;
        Gvar.context = Gvar.pre_render_canvas.getContext("2d", { willReadFrequently: true });
    }
}

export {redraw}