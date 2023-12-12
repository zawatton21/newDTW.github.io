import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'func' implicitly has an 'any' type.
function oncmd_gosub(func, event_id) { Adap.undef_func("oncmd_gosub", [func, event_id]); }

export {oncmd_gosub}