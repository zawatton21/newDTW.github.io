import * as Adap from '../adapter/index'
import { Gvar } from '../variable'

// @ts-expect-error TS(7006): Parameter 'org_buffer_id' implicitly has an 'any' ... Remove this comment to see the full error message
function grotate(org_buffer_id, x: any, y, radian, img_width, img_height) {
    Gvar.context.save();
    Gvar.context.translate(x, y);
    Gvar.context.rotate(radian);
    Gvar.context.translate(-x, -y);
    Adap.gcopy(org_buffer_id, x, y, img_width, img_height);
    Gvar.context.restore();
}

export {grotate}