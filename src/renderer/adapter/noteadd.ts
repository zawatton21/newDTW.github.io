export const note = {
    selected_note: 0 as any,
    note_data: [] as any
};

//export const selected_note: any = 0;

//export const note_data: any = [];

// @ts-expect-error TS(7006): Parameter 'data' implicitly has an 'any' type.
function noteadd(data, line_num, add_type) {
    if (add_type != 1) {
        throw "ERROR @ noteadd";
    }
    note.note_data[note.selected_note][line_num] = data;
}

export {noteadd}