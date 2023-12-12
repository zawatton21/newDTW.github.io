const { ipcRenderer } = require('electron');
import { Gvar } from '../variable'


// Ver 0.1310で追加。カラーパレットを表示。
// function dialog(data0, data1, data2 = null) { Adap.undef_func("dialog", [data0, data1]); }
// @ts-ignore
function dialog(data0: string, data1: number, data2: string = null) { 
    if (data1 == 32) {
        if (Gvar.isColorPickerShown == false) {
            // カラーピッカーがまだ表示されていない場合のみ表示
            ipcRenderer.send('show-color-picker'); 
            console.log("dialog関数が呼び出されました。data1の値:", data1);

            // カラーピッカーが表示されたのでフラグをtrueに設定
            Gvar.isColorPickerShown = true;
        //}
        // Add an event listener to listen for the 'colorPickerClosed' event
        //window.addEventListener('colorPickerClosed', function() {
        // Close the current window using ipcRenderer
        //ipcRenderer.send('close-color-picker');
        //});
        //if (Gvar.isColorPickerShown == true) {
            // カラーピッカーウィンドウが閉じられたときに発生するイベントをリッスンする
            ipcRenderer.once('color-picker-closed', () => {
                // カラーピッカーウィンドウが閉じられたのでフラグをfalseに設定
                ipcRenderer.send('close-color-picker'); 
                Gvar.isColorPickerShown = false;
                Gvar.stat = 0;
                //Gvar.key_Z_on = 0;
                //Gvar.key_A_on = 0;
                //console.log(isColorPickerShown);
            });
        }
    }
    return;
}


export {dialog}
