import * as Adap from '../adapter/index'
import { Gvar } from '../variable'


function InitInput() {
    const canv = document.getElementById("c0");
    // キーボードを押したときに実行されるイベント
    document.onkeydown = function (e) {
        Gvar.pushing_key_list[e.keyCode] = 1;
        e.preventDefault();
    };
    // キーボードを離したときに実行されるイベント
    document.onkeyup = function (e) {
        Gvar.pushing_key_list[e.keyCode] = 0;
        e.preventDefault();
    };
    // ブラウザ版でのコントロールやデバッグボタン機能 使わないのでコメントアウト
    //コメントアウトしたが重要機能っぽい。
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; ++i) {
        if (buttons[i].id == "reset_data") {
            buttons[i].onmouseup = Adap.ResetDataAndReload;
            buttons[i].ontouchend = Adap.ResetDataAndReload;
            continue;
        }
        if (buttons[i].id == "debug_data") {
            buttons[i].onmouseup = Adap.data_update_for_debug;
            buttons[i].ontouchend = Adap.data_update_for_debug;
            continue;
        }
        if (buttons[i].id == "XH") {
            // @ts-ignore
            buttons[i].onmousedown = function (e) {
    if (Gvar.pushing_key_list[88] > 0) { // 88:Xキー
        Gvar.pushing_key_list[88] = 0; // 88:Xキー
        (this as any).style.border = 'inset 2px';
    }
    else {
        Gvar.pushing_key_list[88] = 1;
        (this as any).style.border = '';
    }
};
            buttons[i].ontouchstart = function (e) {
                if (Gvar.pushing_key_list[88] > 0) { // 88:Xキー
                    console.log(e);
                    Gvar.pushing_key_list[88] = 0; // 88:Xキー
                    // @ts-ignore
                    this["style"].border = 'inset 2px';
                }
                else {
                    Gvar.pushing_key_list[88] = 1; // 88:Xキー
                    // @ts-ignore
                    this["style"].border = '';
                }
            };
            continue;
        }
        // @ts-ignore
        buttons[i].onmousedown = function (e) {
    Gvar.pushing_key_list[(this as any).id] = 1;
};
// @ts-ignore
        buttons[i].onmouseup = function (e) {
    Gvar.pushing_key_list[(this as any).id] = 0;
};
// @ts-ignore
        buttons[i].ontouchstart = function (e) {
    Gvar.pushing_key_list[(this as any).id] = 1;
};      
    // @ts-ignore
        buttons[i].ontouchend = function (e) {
    Gvar.pushing_key_list[(this as any).id] = 0;
};
    };
    canv.onmousedown = function (e) {
        Adap.reset_input(e.x, e.y);
        Gvar.isClick = true;
    };
    canv.onmousemove = function (e) {
        if (Gvar.isClick && Adap.is_changed(e.x, e.y)) {
            Adap.reset_input(e.x, e.y);
        }
    };
    // @ts-ignore
    canv.onmouseup = function (e) {
        Adap.reset_input(0, 0);
        Gvar.isClick = false;
    };
    canv.ontouchstart = function (e) {
        Adap.reset_input(e.touches[0].clientX, e.touches[0].clientY);
        Gvar.isClick = true;
    };
    canv.ontouchmove = function (e) {
        if (Gvar.isClick && Adap.is_changed(e.touches[0].clientX, e.touches[0].clientY)) {
            Adap.reset_input(e.touches[0].clientX, e.touches[0].clientY);
        }
    };
    // @ts-ignore
    canv.ontouchend = function (e) {
        Adap.reset_input(0, 0);
        Gvar.isClick = false;
    };
}

export {InitInput}