import { Gvar } from '../variable'


function reset_input(x: any, y: any) {
    // 37:← (左矢印), 38:↑ (上矢印), 39:→ (右矢印), 40:↓ (下矢印)
    Gvar.pushing_key_list[37] = Gvar.pushing_key_list[38] = Gvar.pushing_key_list[39] = Gvar.pushing_key_list[40] = 0;
    // 88:X, 90:Z
    if (Gvar.pushing_key_list[88] == 1 && Gvar.pushing_key_list[90] == 1) { // 88:Xキー, 90:Zキー
        Gvar.pushing_key_list[88] = Gvar.pushing_key_list[90] = 0; // 88:Xキー, 90:Zキー
        document.getElementById("XH").style.border = '';
    }
    if ((x <= 5) || (y <= 5) || (x >= Gvar.canvasSize - 5) || (y >= Gvar.canvasSize - 5)) {
        Gvar.pre_pos = [0, 0];
        return;
    }
    const b1 = Gvar.canvasSize / 3;
    const b2 = Gvar.canvasSize / 3 * 2;
    if (x < b1) {
        Gvar.pushing_key_list[37] = 1; // 37:← (左矢印)
    }
    if (x > b2) {
        Gvar.pushing_key_list[39] = 1; // 38:↑ (上矢印)
    }
    if (y < b1) {
        Gvar.pushing_key_list[38] = 1; // 39:→ (右矢印)
    }
    if (y > b2) {
        Gvar.pushing_key_list[40] = 1; // 40:↓ (下矢印)
    }
    if (b1 < x && x < b2 && b1 < y && y < b2) {
        Gvar.pushing_key_list[88] = Gvar.pushing_key_list[90] = 1; // 88:Xキー, 90:Zキー
    }
    Gvar.pre_pos = [x, y];
}

export {reset_input}