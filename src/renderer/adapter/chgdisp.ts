import * as Adap from '../adapter/index'

function chgdisp(p1: number = 0, p2: number = 640, p3: number = 480): number {
    // 解像度の変更
    Adap.buffer(0, p2, p3, p1);

    // モードに基づいた処理を行い、適切なstatを返す。
    // 実際のAdap.bufferの動作を知らないため、ここでは仮の処理を示します。
    // 以下は例示的なものであり、実際の実装に合わせて修正する必要があります。
    
    // 仮の戻り値を返す
    if (p1 == 0) {
        return 0; // 例: 最初の状態に復帰
    } else if (p1 == 1) {
        return 0; // 例: フルカラーモードに正常に設定
    } else {
        return 2; // 解像度の変更ができなかった
    }
}

export {chgdisp}