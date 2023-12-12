import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function dirlist(data0, data1, data2 = null) { Adap.undef_func("dirlist", [data0, data1, data2]); }

export {dirlist}