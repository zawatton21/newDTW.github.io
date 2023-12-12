import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function onexit(data0) { Adap.undef_func("onexit", [data0]); }

export {onexit}