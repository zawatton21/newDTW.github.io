import { Gvar } from '../variable'

function getkey(key_id: any) {
    return Gvar.pushing_key_list[key_id] || 0;
}

export {getkey}