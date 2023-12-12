import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function input(data0, data1, data2, data3) { Adap.undef_func("input", [data0, data1, data2, data3]); }

export {input}