import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'line_num' implicitly has an 'any' type.
function notedel(line_num) {
    Adap.note.note_data[Adap.note.selected_note].splice(line_num, 1);
}

export {notedel}