import { Gvar } from '../variable'

function DSPLAY(audio_id:any = null) {
    Gvar.se[audio_id].currentTime = 0;
    Gvar.se[audio_id].play();
}

export {DSPLAY}