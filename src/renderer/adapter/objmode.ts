import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function objmode(data0, data1) { Adap.undef_func("objmode", [data0, data1]); }

export {objmode}