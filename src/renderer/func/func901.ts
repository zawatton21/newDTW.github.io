import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func901(this: any) {
        Adap.dbgprt(901);
        if (await Adap.ginfo(2) != 30) {
            return;
        }

        if (Gvar.wparam == 13) {
            await Func.func900();
        }
        return;
}

export {func901}
