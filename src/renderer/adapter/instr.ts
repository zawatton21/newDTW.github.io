import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function instr(data0, data1, data2) { Adap.undef_func("instr", [data0, data1, data2]); return 0; }

export {instr}