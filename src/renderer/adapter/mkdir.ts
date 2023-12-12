import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function mkdir(data0) { Adap.undef_func("mkdir", [data0]); }

export {mkdir}