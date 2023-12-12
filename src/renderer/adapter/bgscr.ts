import * as Adap from '../adapter/index'
import { Gvar } from '../variable'

function bgscr(p1: number = 0, p2: number, p3: number, p4: number = 0, p5: number = 0, p6: number = 0, p7: number = null, p8: number = null) {
    // ウィンドウIDに基づいてCanvasを取得して初期化する
    Adap.buffer(p1, p2, p3, p4);

    // ウィンドウの配置とサイズを設定
    const canvas = Gvar.canvases[p1];
    canvas.style.position = "absolute";
    canvas.style.left = `${p5}px`;
    canvas.style.top = `${p6}px`;

    if (p7 !== null && p8 !== null) {
        canvas.width = p7;
        canvas.height = p8;
    } else {
        canvas.width = p2;
        canvas.height = p3;
    }

    // ウィンドウを非表示にする（HSPの動作と同じか確認が必要）
    canvas.style.display = "none";
    document.body.appendChild(canvas);
}

export {bgscr}