import { Gvar } from '../variable'

function DSSETVOLUME(se_id: any, volume: any) {
    Gvar.se[se_id].volume = volume / 1000;
}

export {DSSETVOLUME}