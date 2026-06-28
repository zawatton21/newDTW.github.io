import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {
    runGeneratedGameFunction,
    shouldUseGeneratedGameFunction,
} from '../nelisp_bridge'

async function func0999(this: any) {
    if (shouldUseGeneratedGameFunction('func0999')) {
        await runGeneratedGameFunction('func0999', { thisArg: this });
        return;
    }

        Adap.dbgprt(999);
        await Adap.wait(1);
        Gvar.var_3920 = Adap.getkey(Gvar.var_727);
        Gvar.var_3921 = Gvar.var_3920;
        Gvar.var_3916 = Gvar.var_3920 ^ Gvar.var_3922 & Gvar.var_3920;
        Gvar.var_3923 = Gvar.var_3920 ^ Gvar.var_3922 & Gvar.var_3922;
        Gvar.var_3922 = Gvar.var_3920;
        return;
}

export {func0999}
