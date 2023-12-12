import { Gvar } from '../variable'

//let ctx: any;
// @ts-expect-error TS(7006): Parameter 'dst_size_x' implicitly has an 'any' typ... Remove this comment to see the full error message
function gzoom(dst_size_x, dst_size_y, org_buffer_id, x: any, y, img_width, img_height, mode) {
    
    // widthとheightがそれぞれ0deないかのデバッグ処理
    const sourceCanvas = Gvar.canvases[org_buffer_id];
    if (!sourceCanvas || sourceCanvas.width === 0 || sourceCanvas.height === 0) {
        console.error('Source canvas is not initialized or has a size of 0.');
        return;
    }

    if (org_buffer_id == 25) { // ウィンドウIDが25の時
        const ctx = Gvar.canvases[org_buffer_id].getContext("2d", { willReadFrequently: true });
        //ctx = Gvar.canvases[org_buffer_id].getContext('2d');
        const imgd = ctx.getImageData(Gvar.position[0], Gvar.position[1], img_width, img_height); // canvasに描かれている画像データ情報を取得
        const pix = imgd.data;
        for (let i = 0, n = pix.length; i < n; i += 4) {
            const grayscale = pix[i] * 0.3 + pix[i + 1] * 0.59 + pix[i + 2] * 0.11;
            pix[i] = grayscale;
            pix[i + 1] = grayscale;
            pix[i + 2] = grayscale;
        }
        Gvar.context.putImageData(imgd, 0, 0); // プレイ画面をCanvasへ直接描画
        return;
    }
    else if (org_buffer_id == 8 && (x == 760 && y == 920 || x > 400 && y < 350)) {
        Gvar.context.globalCompositeOperation = "destination-out";
        Gvar.context.drawImage(Gvar.canvases[org_buffer_id], x, y, img_width, img_height, Gvar.position[0], Gvar.position[1], dst_size_x, dst_size_y);
        Gvar.context.globalCompositeOperation = "source-over";
    }
    else {
        Gvar.context.drawImage(Gvar.canvases[org_buffer_id], x, y, img_width, img_height, Gvar.position[0], Gvar.position[1], dst_size_x, dst_size_y);
    }
}

export {gzoom}