import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func184(this: any) {
        Adap.dbgprt(184);
        Gvar.var_869 = 1;
        await Func.func187();
        Gvar.var_869 = 0;
        Adap.gsel(31, 1);
        Adap.objprm(3, Gvar.var_876); // アイテム欄行更新 Gvar.var_876はアイテム欄の行に格納されているアイテム(表示のみ)
        stop();
}

export {func184}
