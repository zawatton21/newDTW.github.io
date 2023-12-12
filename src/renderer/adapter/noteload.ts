import * as Adap from '../adapter/index'

// Ver0.1405にて非同期関数化 (直接ファイルを確認する為)
// @ts-expect-error TS(7006): Parameter 'file_name' implicitly has an 'any' type... Remove this comment to see the full error message
async function noteload(file_name) {
    Adap.note.note_data[Adap.note.selected_note] = await Adap.bload(file_name);
}

export {noteload}