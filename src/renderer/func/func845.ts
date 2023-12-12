import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func845(this: any) {
        Adap.dbgprt(845);
        Adap.clrobj(Gvar.data0 = 9, Gvar.data1 = 9);
        Adap.objsize(1);
        Adap.pos(800, 800);
        Adap.button("ダミー", Func.func850);
        return;
}

export {func845}
