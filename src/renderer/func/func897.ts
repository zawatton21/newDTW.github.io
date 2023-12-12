import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func897(this: any) {
        Adap.dbgprt(897);

        if (Gvar.wparam == 8) {
            Adap.ShowWindow(Gvar.var_15, 7);
            return (0);
        }
        else {
            return;
        }
}

export {func897}
