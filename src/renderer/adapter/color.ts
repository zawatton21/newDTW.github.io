import { sumiApply } from './sumiBackend'

// Delegated to the external sumi library: sets the current buffer's
// fillStyle/strokeStyle (same effect as before, now via sumi).
function color(red: number, green: number, blue: number) {
    sumiApply('gui-set-color', [red, green, blue]);
}

export {color}
