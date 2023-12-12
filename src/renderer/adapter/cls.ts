import { Gvar } from '../variable'

function cls(id: any) {
    // Ver0.1405にて追加。contexts[id]が存在するかデバッグ処理
    if (!Gvar.contexts[id]) {
        console.error(`Context for id ${id} is not defined.`);
        return;
    }
    // Ver 0.1405にて修正。888, 444へエラー回避のために「#」を追加
    Gvar.contexts[id].fillStyle = ["#fff", "#ccc", "#888", "#444", "#000"][id];
    Gvar.contexts[id].fillRect(0, 0, 340, 340);
}

export {cls}