import { Gvar } from '../variable'


function ginfo(data_id: any) {
    switch (data_id) {
        case 2: // アクティブなウィンドウID
            return Gvar.target_window_id;
        case 4: // ウィンドウの左上X座標
            return 0;
        case 5: // ウィンドウの左上Y座標
            return 0;
        case 16: // Ver0.1310にて追加。現在設定されているカラーコード(R)
            return Math.round((document.getElementById("return_r") as any).value);
        case 17: // Ver0.1310にて追加。現在設定されているカラーコード(G)
            return Math.round((document.getElementById("return_g") as any).value);
        case 18: // Ver0.1310にて追加。現在設定されているカラーコード(B)
            return Math.round((document.getElementById("return_b") as any).value);
        case 20: // デスクトップ全体のXサイズ(画面解像度)
            return Gvar.disp_width;//return 340;
        case 21: //デスクトップ全体のYサイズ(画面解像度)
            return Gvar.disp_height; //return 340;
        case 22: // カレントポジションのX座標
            return Gvar.position[0];
        case 23: // カレントポジションのY座標
            return Gvar.position[1];
        default:
            throw "未実装だ! - " + data_id;
    }
}

export {ginfo}