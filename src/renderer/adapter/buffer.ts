import * as Adap from '../adapter/index'
import { Gvar } from '../variable'

// @ts-ignore
function buffer(id: any, disp_width: any = null, disp_height: any = null, mode: any = null) {
    Gvar.target_window_id = id;
    let render_canvas;
    if (id != 0) {
        render_canvas = document.createElement('canvas');
        render_canvas.id = "c" + id;
    }
    else {
        render_canvas = document.getElementById("c0");
    }
    if (disp_width && disp_height) {
        (render_canvas as any).width = disp_width;
        (render_canvas as any).height = disp_height;
    }
    Gvar.canvases[id] = render_canvas;
    Gvar.contexts[id] = (render_canvas as any).getContext("2d", { willReadFrequently: true });
    Adap.gsel(id, Gvar.target_window_id);
}

export {buffer}
