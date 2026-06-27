import { sumiApply } from './sumiBackend'

// Delegated to the external sumi library (draw-line on the shared canvas).
function line(start_x: number, start_y: number, end_x: number, end_y: number) {
    sumiApply('gui-draw-line', [start_x, start_y, end_x, end_y]);
}

export {line}
