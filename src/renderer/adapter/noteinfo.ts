import * as Adap from '../adapter/index'

// @ts-expect-error TS(7006): Parameter 'info_type' implicitly has an 'any' type... Remove this comment to see the full error message
function noteinfo(info_type) {
    if (info_type == 0) {
        return Adap.note.note_data[Adap.note.selected_note].length;
    }
    else if (info_type == 1) {
        const sum = 0;
        for (let i in Adap.note.note_data[Adap.note.selected_note]) {
            // @ts-expect-error TS(7005): Variable 'note_data' implicitly has an 'any[]' typ... Remove this comment to see the full error message
            sum += note_data[selected_note][i].length + 1;
        }
        return sum;
    }
}

export {noteinfo}