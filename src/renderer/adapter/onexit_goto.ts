import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'func' implicitly has an 'any' type.
function onexit_goto(func) {
    window.onbeforeunload = func;
}

export {onexit_goto}