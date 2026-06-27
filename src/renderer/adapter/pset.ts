import { sumiApply } from './sumiBackend'

// Delegated to the external sumi library (draw-point on the shared canvas).
function pset(pos_x: number, pos_y: number) {
    sumiApply('gui-draw-point', [pos_x, pos_y]);
}

export {pset}
