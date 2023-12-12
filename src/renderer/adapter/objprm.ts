import * as Adap from '../adapter/index'

// もっぱらアイテム欄行の更新に使用されている。アイテムを使用した時や、捨てた際にアイテム欄の各行に格納されているアイテム表示を更新する 
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function objprm(data0, data1) { Adap.undef_func("objprm", [data0, data1]); }

export {objprm}