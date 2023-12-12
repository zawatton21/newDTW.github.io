import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function onkey(data0) { Adap.undef_func("onkey", [data0]); }

export {onkey}