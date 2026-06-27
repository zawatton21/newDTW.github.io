import { Gvar } from '../variable'
import { t } from '../i18n'
import { sumiApply } from './sumiBackend'

// Text drawing, delegated to the external sumi library. The game semantics are
// preserved here: i18n translation (t), the alphabetic-baseline offset
// (line_size * 0.9), the opaque-fill guard, and the auto-advance of the draw
// cursor. sumi's draw-text rasterises onto the shared canvas using the ctx font
// (set by `font`) and fill colour (set by `color`).
// @ts-ignore
function mes(text: string, red: number = null, green: number = null, blue: number = null) {
    const ga = Gvar.context.globalAlpha;
    Gvar.context.globalAlpha = 1;
    sumiApply('gui-set-position', [Gvar.position[0], Gvar.position[1] + Gvar.line_size * 0.9]);
    sumiApply('gui-draw-text', [], t(text));
    Gvar.context.globalAlpha = ga;
    Gvar.position[1] += Gvar.line_size;
}

export {mes}
