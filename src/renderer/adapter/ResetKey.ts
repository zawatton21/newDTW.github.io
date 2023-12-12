import { Gvar } from '../variable'

function ResetKey(key_id: any) {
    Gvar.pushing_key_list[key_id] = 0;
}

export {ResetKey}