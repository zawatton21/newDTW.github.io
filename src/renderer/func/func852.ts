import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func852(this: any) {
        Adap.dbgprt(852);
        Adap.redraw(0);
        await Func.func855();
        await Func.func860();
        await Func.func861();
        await Func.func853();
        if (Gvar.var_3294 != 0) {
            await Func.func867();
        }
        Adap.redraw(1);
        await Adap.wait(1);
        return;
}

export {func852}
