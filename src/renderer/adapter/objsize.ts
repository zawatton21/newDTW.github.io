import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function objsize(data0, data1 = null) { Adap.undef_func("objsize", [data0, data1]); }

export {objsize}