import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'line_num' implicitly has an 'any' type.
function noteget(line_num) {
    return Adap.note.note_data[Adap.note.selected_note][line_num];
}

export {noteget}