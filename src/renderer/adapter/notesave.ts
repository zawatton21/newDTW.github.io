import * as Adap from '../adapter/index'

// Ver0.1405にて非同期関数化 (直接ファイルを確認する為)
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
async function notesave(data0) {
    await Adap.bsave(data0, Adap.note.note_data[Adap.note.selected_note]);
}

export {notesave}