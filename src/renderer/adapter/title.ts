import { Gvar } from '../variable'

function title(window_name: any) {
    if (Gvar.target_window_id == 0) {
        document.title = window_name;
    }
}

export {title}