import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function palette(data0, data1, data2, data3 = null, data4 = null) { Adap.undef_func("palette", [data0, data1, data2, data3, data4]); }

export {palette}