import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func843(this: any) {
        Adap.dbgprt(843);
        Adap.clrobj(Gvar.data0 = 9, Gvar.data1 = 9);
        Adap.objsize(60);
        Adap.pos(680 - 76, Gvar.var_3226 + 22);
        Adap.combox(Gvar.var_3255, 100, "回数\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10");
        return;
}

export {func843}
