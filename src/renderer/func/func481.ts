import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func481(this: any) { // Ver0.1309にて使用しないように変更。
        Adap.dbgprt(481);
        Gvar.var_233[0] = Gvar.var_78[Gvar.var_2044];
        Gvar.var_78[Gvar.var_2044].Var0 = 1234123;
        console.log(Gvar.var_233[0].Var0);
        return;
}

export {func481}
