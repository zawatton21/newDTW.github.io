import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function listbox(data0, data1, data2) { Adap.undef_func("listbox", [data0, data1, data2]); }

export {listbox}