import * as Adap from '../adapter/index'

// @ts-expect-error TS(2345): Argument of type 'null[]' is not assignable to par... Remove this comment to see the full error message
function clrobj(data0 = null, data1 = null) { Adap.undef_func("clrobj", [data0, data1]); }

export {clrobj}