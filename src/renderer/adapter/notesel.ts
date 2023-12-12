import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'note_id' implicitly has an 'any' type.
function notesel(note_id) {
    if (note_id == 0) {
        throw "ERROR @ notesel";
    }
    Adap.note.selected_note = note_id;
}

export {notesel}