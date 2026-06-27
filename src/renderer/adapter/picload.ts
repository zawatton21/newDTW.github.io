import { Gvar } from '../variable'
import { sumiEnsureBuffer, sumiRecordLoadImage } from './sumiBackend'

async function picload(img_name: any) {
    const img = new Image();
    return new Promise((resolve, reject) => {
        // @ts-expect-error TS(2794): Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
        img.onload = () => resolve();
        img.onerror = reject;
        //img.src = __dirname + "../data/img/" + img_name + ".png";
        img.src = "../assets/img/" + img_name + ".png";
    }).then(() => {
        Gvar.canvases[Gvar.target_window_id].width = img.width;
        Gvar.canvases[Gvar.target_window_id].height = img.height;
        Gvar.contexts[Gvar.target_window_id] = Gvar.canvases[Gvar.target_window_id].getContext("2d", { willReadFrequently: true });
        Gvar.contexts[Gvar.target_window_id].drawImage(img, 0, 0); // canvasの一番左上へ描画
        // share the loaded asset buffer with sumi + record it for native replay
        sumiEnsureBuffer(Gvar.target_window_id);
        sumiRecordLoadImage(Gvar.target_window_id, img_name);
    }).catch(() => {
        alert("データの読み込みに失敗しました。");
    });
}

export {picload}