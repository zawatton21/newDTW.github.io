var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// 機能不明
function dbgprt(num) {
}

// 機能不明
function undef_func(str, arg = null) {
}
// 機能不明
function data_update_for_debug(e) {
    var_404 = 1;
    var_704[88] = 1;
    var_704[34] = 1;
    var_704[93] = 2;
    var_526 = 2;
    var_993 = 1;
    var_704[218] = 1;
    var_704[235] = 1;
    var_704[221] = 2;
    var_523 = 1;
    var_524 = 1;
    var_759 = 2;
}
var stat = 0;
var strsize;
var wparam;
var hwnd;
var mousex;
var mousey;
var refstr;
var position = [0, 0];
var canvases = [];
var canvases_position = [];
var contexts = [];
var context;
var target_window_id = 0;
var line_size;
var pre_render_canvas = document.createElement('canvas');
var pushing_key_list = [];
var alpha_mode = 0;
var alpha_color = "#ffffff";
var files = {};
var se = [];
var isClick = false;
var canvasSize = 0;
var pre_pos = [0, 0];

function is_changed(x, y) {
    if (pre_pos[0] == 0 && pre_pos[1] == 0) {
        return true;
    }
    var b1 = canvasSize / 3;
    var b2 = canvasSize / 3 * 2;
    if (((pre_pos[0] - b1) * (x - b1) < 0) ||
        ((pre_pos[0] - b2) * (x - b2) < 0) ||
        ((pre_pos[1] - b2) * (y - b2) < 0) ||
        ((pre_pos[1] - b2) * (y - b2) < 0)) {
        return true;
    }
    return false;
}

function reset_input(x, y) {
    pushing_key_list[37] = pushing_key_list[38] = pushing_key_list[39] = pushing_key_list[40] = 0;
    if (pushing_key_list[88] == 1 && pushing_key_list[90] == 1) {
        pushing_key_list[88] = pushing_key_list[90] = 0;
        document.getElementById("XH").style.border = '';
    }
    if ((x <= 5) || (y <= 5) || (x >= canvasSize - 5) || (y >= canvasSize - 5)) {
        pre_pos = [0, 0];
        return;
    }
    var b1 = canvasSize / 3;
    var b2 = canvasSize / 3 * 2;
    if (x < b1) {
        pushing_key_list[37] = 1;
    }
    if (x > b2) {
        pushing_key_list[39] = 1;
    }
    if (y < b1) {
        pushing_key_list[38] = 1;
    }
    if (y > b2) {
        pushing_key_list[40] = 1;
    }
    if (b1 < x && x < b2 && b1 < y && y < b2) {
        pushing_key_list[88] = pushing_key_list[90] = 1;
    }
    pre_pos = [x, y];
}

/* 
セーブデータ削除機能
HTML5から導入されたJavascriptを使ってブラウザにデータを保存できるlocalStorage機能
データは永続的に保存される為、Local Storageのデータを削除する処理が必ず必要
*/
function ResetDataAndReload(e) {
    localStorage.clear();
    location.reload();
}

function InitInput() {
    var canv = document.getElementById("c0");
    document.onkeydown = function (e) {
        pushing_key_list[e.keyCode] = 1;
        e.preventDefault();
    };
    document.onkeyup = function (e) {
        pushing_key_list[e.keyCode] = 0;
        e.preventDefault();
    };
    /* ブラウザ版でのコントロールやデバッグボタン機能　使わないのでコメントアウト
    コメントアウトしたが重要機能っぽい。
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; ++i) {
        if (buttons[i].id == "reset_data") {
            buttons[i].onmouseup = ResetDataAndReload;
            buttons[i].ontouchend = ResetDataAndReload;
            continue;
        }
        if (buttons[i].id == "debug_data") {
            buttons[i].onmouseup = data_update_for_debug;
            buttons[i].ontouchend = data_update_for_debug;
            continue;
        }
        if (buttons[i].id == "XH") {
            buttons[i].onmousedown = function (e) {
                if (pushing_key_list[88] > 0) {
                    pushing_key_list[88] = 0;
                    this.style.border = 'inset 2px';
                }
                else {
                    pushing_key_list[88] = 1;
                    this.style.border = '';
                }
            };
            buttons[i].ontouchstart = function (e) {
                if (pushing_key_list[88] > 0) {
                    console.log(e);
                    pushing_key_list[88] = 0;
                    this["style"].border = 'inset 2px';
                }
                else {
                    pushing_key_list[88] = 1;
                    this["style"].border = '';
                }
            };
            continue;
        }
        buttons[i].onmousedown = function (e) {
            pushing_key_list[this.id] = 1;
        };
        buttons[i].onmouseup = function (e) {
            pushing_key_list[this.id] = 0;
        };
        buttons[i].ontouchstart = function (e) {
            pushing_key_list[this.id] = 1;
        };
        buttons[i].ontouchend = function (e) {
            pushing_key_list[this.id] = 0;
        };
    }
    ;*/
    canv.onmousedown = function (e) {
        reset_input(e.x, e.y);
        isClick = true;
    };
    canv.onmousemove = function (e) {
        if (isClick && is_changed(e.x, e.y)) {
            reset_input(e.x, e.y);
        }
    };
    canv.onmouseup = function (e) {
        reset_input(0, 0);
        isClick = false;
    };
    canv.ontouchstart = function (e) {
        reset_input(e.touches[0].clientX, e.touches[0].clientY);
        isClick = true;
    };
    canv.ontouchmove = function (e) {
        if (isClick && is_changed(e.touches[0].clientX, e.touches[0].clientY)) {
            reset_input(e.touches[0].clientX, e.touches[0].clientY);
        }
    };
    canv.ontouchend = function (e) {
        reset_input(0, 0);
        isClick = false;
    };
}

// 時間取得？
var last_wait_time = new Date();
function await_(time) {
    var wait_time = Math.max(time - Math.max(0, new Date().getMilliseconds() - last_wait_time.getMilliseconds()), 0);
    last_wait_time = new Date();
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), wait_time);
    });
}

// HSP言語 bgscr命令
// ウィンドウIDを初期化して枠のないウィンドウを作成する。
// 参照元: http://lhsp.s206.xrea.com/manual/i_graph.html#bgscr
// bgscr p1,p2,p3,p4,p5,p6,p7,p8
/*
p1=0～(0)  : ウィンドウID
p2,p3      : 初期化する画面サイズX,Y（1ドット単位）
p4=0～1(0) : 初期化する画面モード
p5,p6(0,0) : ウィンドウの配置X,Y（1ドット単位）
p7,p8      : ウィンドウのサイズX,Y（1ドット単位）
*/
function bgscr(data0, data1, data2, data3, data4, data5, data6 = null, data7 = null) { undef_func("bgscr", [data0, data1, data2, data3, data4, data5, data6, data7]); }

/*
各データファイルの読み込み
音源ファイル、セーブデータ等
*/
function bload(file_name, data_size = null, offset = null) {
    // 効果音の読み込み
    if (file_name.split(".")[1] == "wav") {
        var audio = new Audio("../data/se/" + file_name);
        audio.autoplay = false;
        audio.loop = false;
        return audio;
    }
    // BGMの読み込み
    if (file_name.split(".")[1] == "mp3") {
        //var music = new Audio("bgm/" + file_name);
        return file_name;
        //music.autoplay = false;
        //music.loop = false;
        //return music;
    }
    // datファイルの読み込み。おそらくオミットされている？
    if (file_name.split(".")[1] != "dat") {
        return [];
    }
    // セーブデータ読み込み
    if (files[file_name] == undefined) {
        var load_data = window.localStorage.getItem(file_name);
        if (load_data != null) {
            files[file_name] = JSON.parse(load_data);
        }
        else {
            return;
        }
    }
    if (offset != null) {
        return files[file_name][offset];
    }
    else {
        return files[file_name][0];
    }
}

/* 
HSP言語 boxf命令
画面に四角形を描くための関数。
参照元: 
http://lhsp.s206.xrea.com/manual/i_graph.html#boxf 
https://hsp3.web.fc2.com/lecture7.html
*/
function boxf(left = null, top = null, right = null, bottom = null) {
    left = left || 0;
    top = top || 0;
    right = right || 340;
    bottom = bottom || 340;
    if ((target_window_id == 4 || target_window_id == 7 || target_window_id == 10 || target_window_id == 32) && left == 0 && top == 0) {
        return context.clearRect(left, top, right - left, bottom - top);
    }
    var ga = context.globalAlpha;
    context.globalAlpha = 1;
    context.fillRect(left, top, right - left, bottom - top);
    context.globalAlpha = ga;
}

/*
HSP言語 bsave命令
メモリバッファの内容をファイルに書き出す。
参照元: 

bsave "filename",p1,p2,p3		[バッファをファイルにセーブ]
"filename" : セーブするファイル名
p1=変数    : 変数名
p2=0～(-1) : セーブするサイズ(Byte単位)
p3=0～(-1) : ファイルのオフセット

ファイルのオフセット値を指定すると、その値だけファイルの先頭からずらし
た場所からが操作の対象になります。
bsave命令でオフセットを指定すると、 ファイルの先頭から任意のサイズを過
ぎた場所からセーブを行なうことが可能です。
これにより、大きなファイルの一部だけを更新することや、分割して処理する
ことなどが可能になります。

テキストファイルを保存する場合には、専用のnotesave命令を使用することを
推奨します
*/
function bsave(file_name, data, data_size = null, offset = null) {
    offset = offset == null ? 0 : offset;
    data_size = data_size == null ? 0 : data_size;
    if (!files[file_name]) {
        files[file_name] = {};
    }
    files[file_name][offset] = data;

    /*
    データセーブ機能
    HTHL5から導入されたJavascriptを使ってブラウザにデータを保存できるlocalStorage機能
    データは永続的に保存される為、Local Storageのデータを削除する処理が必ず必要
    */
    localStorage.setItem(file_name, JSON.stringify(files[file_name]));
}

/*
HSP言語 buffer命令
参照元: 

screen命令と同じく、指定したウィンドウIDを初期化して使用できるようにし
ます。初期化する画面サイズと、画面モードはscreen命令と変わりませんが、
buffer命令では、メモリ上に仮想画面が作られるだけで、実際の画面には表示
されません

buffer p1,p2,p3,p4		[ウィンドウIDを初期化]
p1=0～ (0) : ウィンドウID
p2,p3      : 初期化する画面サイズX,Y（1ドット単位）
p4=0～1(0) : 初期化する画面モード

*/
function buffer(id, disp_width = null, disp_height = null, mode = null) {
    target_window_id = id;
    var render_canvas;
    if (id != 0) {
        render_canvas = document.createElement('canvas');
        render_canvas.id = "c" + id;
    }
    else {
        render_canvas = document.getElementById("c0");
    }
    if (disp_width && disp_height) {
        render_canvas.width = disp_width;
        render_canvas.height = disp_height;
    }
    canvases[id] = render_canvas;
    contexts[id] = render_canvas.getContext('2d');
    gsel(id, target_window_id);
}

/* HSP言語 button命令
参照元: http://lhsp.s206.xrea.com/manual/

カレントポジションにオブジェクトとして押しボタンを配置します。
ボタンには、"name"で指定された文字列が書かれ、マウスでボタンをクリック
すると、*labelで指定した場所にプログラムの制御が移ります。

button goto/gosub "name",*label		[ボタン表示]
"name" : ボタンの名前
*label : 押した時にジャンプするラベル名
*/
function button(data0, data1) { undef_func("button", [data0, data1]); }

/*
HSP言語 cls命令
参照元: http://lhsp.s206.xrea.com/manual/

ウィンドウ内の情報をすべてクリアします。
p1でクリアする５種類の色を指定することができます。
色の指定値 :
 ( 0=白 / 1=明るい灰色 / 2=灰色 / 3=暗い灰色 / 4=黒 )

cls p1		[画面クリア]
p1=0～4(0) : クリアする時の色
*/
function cls(id) {
    contexts[id].fillStyle = ["#fff", "#ccc", "888", "444", "#000"][id];
    contexts[id].fillRect(0, 0, 340, 340);
}

/*
HSP言語 chdir命令
参照元: http://lhsp.s206.xrea.com/manual/

"dirname"で指定した名前のディレクトリに移動します。

chdir "dirname"		[ディレクトリ移動]
"dirname" : 移動先ディレクトリ名
*/
function chdir(data0) { undef_func("chdir", [data0]); }


// 機能不明
function chgdisp(data0 = null, data1 = null, data2 = null) { undef_func("chgdisp", [data0, data1, data2]); }

/*
HSP言語 chkbox命令
参照元: http://lhsp.s206.xrea.com/manual/

カレントポジションにオブジェクトとしてチェックボックスを配置します。
チェックボックスには、"strings"で指定した文字列の左側に、カーソルで
ON/OFFを切り替えることのできるスイッチがついたオブジェクトです。

chkbox "strings",p1		[チェックボックス表示]
"strings" : チェックボックスの内容表示文字列
p1=変数   : チェックボックスの状態を保持する変数
*/
function chkbox(data0, data1) { undef_func("chkbox", [data0, data1]); }

/*
HSP言語 clrobj命令
参照元: http://lhsp.s206.xrea.com/manual/

button命令やmesbox命令などで出したオブジェクトを消去します。

p1,p2を省略して、 clrobjだけを実行させると画面上のオブジェクトがすべて
消去されます。一部のオブジェクトだけを消去したい場合は、p1に最初のID、
p2に最後のIDを指定すればp1～p2までのオブジェクトだけが消去されます。

clrobj p1,p2		[オブジェクトをクリア]
p1=0～(0)  : 消去するオブジェクトID(開始)
p2=0～(-1) : 消去するオブジェクトID(終了)( -1の場合は、 最終のIDが指定
されます )

*/
function clrobj(data0 = null, data1 = null) { undef_func("clrobj", [data0, data1]); }


function color(red, green, blue) {
    context.strokeStyle = context.fillStyle = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function combox(data0, data1, data2) { undef_func("combox", [data0, data1, data2]); }

function delete_(data0) { undef_func("delete_", [data0]); }

/*
HSP言語 dim命令
参照元: http://lhsp.s206.xrea.com/manual/

任意の要素を持つ配列変数を作成します。
例：
	dim a,20
上の例では、変数aの要素を２０個、つまり「a(0)」～「a(19)」までをあらか
じめ確保します。

dim p1,p2...		[配列変数を作成]
p1=変数 : 配列を割り当てる変数名
p2=0～  : 要素の最大
*/
function dim(length1, length2 = null, length3 = null, length4 = null) {
    if (length4 != null) {
        throw "4重配列なんてありませんよ";
    }
    var return_list = [];
    for (var i = 0; i < length1; i++) {
        if (length2 != null) {
            return_list[i] = [];
            for (var j = 0; j < length2; j++) {
                if (length3 != null) {
                    return_list[i][j] = [];
                    for (var k = 0; k < length3; k++) {
                        return_list[i][j][k] = 0;
                    }
                }
                else {
                    return_list[i][j] = 0;
                }
            }
        }
        else {
            return_list[i] = 0;
        }
    }
    return return_list;
}


function dirinfo(data0) { undef_func("dirinfo", [data0]); }

function dirlist(data0, data1, data2 = null) { undef_func("dirlist", [data0, data1, data2]); }

function end() {
    window.close();
}


function exist(file_name) {
    bload(file_name);
    if (files[file_name]) {
        strsize = Object.keys(files[file_name]).length;
    }
    else {
        strsize = -1;
    }
}

// フォント設定
function font(font_type, font_size, font_style = null) {
    font_style = font_style || 0;
    var font_style_list = ["", "bold", "italic"];
    context.font = font_style_list[font_style] + " " + font_size + "px '" + font_type + "'";
    line_size = font_size;
}
function dialog(data0, data1, data2 = null) { undef_func("dialog", [data0, data1]); }
function gcopy(org_buffer_id, x, y, img_width, img_height) {
    gzoom(img_width, img_height, org_buffer_id, x, y, img_width, img_height, null);
}

// キーボードの入力確認
function getkey(key_id) {
    return pushing_key_list[key_id] || 0;
}
function ResetKey(key_id) {
    pushing_key_list[key_id] = 0;
}
function getstr(data0, data1, data2, data3) { undef_func("getstr", [data0, data1, data2, data3]); }
function gettime(data0) { undef_func("gettime", [data0]); }
function ginfo(data_id) {
    switch (data_id) {
        case 2:
            return target_window_id;
        case 4:
            return 0;
        case 5:
            return 0;
        case 20:
            return 340;
        case 21:
            return 340;
        case 22:
            return position[0];
        case 23:
            return position[1];
        default:
            throw "未実装だ! - " + data_id;
    }
}


function gmode(mode, data2 = null, data3 = null, alpha = null) {
    alpha_mode = mode;
    switch (mode) {
        case 2:
            alpha_color = "#000000";
        default:
            context.globalAlpha = 1;
            break;
        case 4:
            alpha_color = context.fillStyle;
        case 3:
            context.globalAlpha = alpha / 255;
    }
}


function grotate(org_buffer_id, x, y, radian, img_width, img_height) {
    context.save();
    context.translate(x, y);
    context.rotate(radian);
    context.translate(-x, -y);
    gcopy(org_buffer_id, x, y, img_width, img_height);
    context.restore();
}


function gsel(window_id, window_mode = null) {
    if (window_mode == 1) {
        canvases[window_id].style.display = "block";
    }
    if (window_mode == -1) {
        canvases[window_id].style.display = "none";
    }
    context = contexts[window_id];
    target_window_id = window_id;
}

/*


*/
function gzoom(dst_size_x, dst_size_y, org_buffer_id, x, y, img_width, img_height, mode) {
    if (org_buffer_id == 25) {
        var ctx = canvases[org_buffer_id].getContext('2d');
        var imgd = ctx.getImageData(position[0], position[1], img_width, img_height);
        var pix = imgd.data;
        for (var i = 0, n = pix.length; i < n; i += 4) {
            var grayscale = pix[i] * 0.3 + pix[i + 1] * 0.59 + pix[i + 2] * 0.11;
            pix[i] = grayscale;
            pix[i + 1] = grayscale;
            pix[i + 2] = grayscale;
        }
        context.putImageData(imgd, 0, 0);
        return;
    }
    else if (org_buffer_id == 8 && (x == 760 && y == 920 || x > 400 && y < 350)) {
        context.globalCompositeOperation = "destination-out";
        context.drawImage(canvases[org_buffer_id], x, y, img_width, img_height, position[0], position[1], dst_size_x, dst_size_y);
        context.globalCompositeOperation = "source-over";
    }
    else {
        context.drawImage(canvases[org_buffer_id], x, y, img_width, img_height, position[0], position[1], dst_size_x, dst_size_y);
    }
}

function input(data0, data1, data2, data3) { undef_func("input", [data0, data1, data2, data3]); }

function instr(data0, data1, data2) { undef_func("instr", [data0, data1, data2]); return 0; }

function int(data0) {
    return parseInt(data0);
}


function limit(val, min_val, max_val) {
    return Math.max(min_val, Math.min(val, max_val));
}

function line(start_x, start_y, end_x, end_y) {
    context.beginPath();
    context.moveTo(start_x, start_y);
    context.lineTo(end_x, end_y);
    context.stroke();
}

function listbox(data0, data1, data2) { undef_func("listbox", [data0, data1, data2]); }

function mes(text) {
    var ga = context.globalAlpha;
    context.globalAlpha = 1;
    context.fillText(text, position[0], position[1] + line_size * 0.9);
    context.globalAlpha = ga;
    position[1] += line_size;
}

function mesbox(data0, data1, data2, data3) { undef_func("mesbox", [data0, data1, data2, data3]); }

function mkdir(data0) { undef_func("mkdir", [data0]); }

var selected_note = 0;
var note_data = [];

/*

*/
function noteadd(data, line_num, add_type) {
    if (add_type != 1) {
        throw "ERROR @ noteadd";
    }
    note_data[selected_note][line_num] = data;
}
/*

*/
function notedel(line_num) {
    note_data[selected_note].splice(line_num, 1);
}
/*

*/
function noteget(line_num) {
    return note_data[selected_note][line_num];
}
/*

*/
function noteinfo(info_type) {
    if (info_type == 0) {
        return note_data[selected_note].length;
    }
    else if (info_type == 1) {
        var sum = 0;
        for (var i in note_data[selected_note]) {
            sum += note_data[selected_note][i].length + 1;
        }
        return sum;
    }
}
/*

*/
function noteload(file_name) {
    note_data[selected_note] = bload(file_name);
}
/*

*/
function notesave(data0) {
    bsave(data0, note_data[selected_note]);
}
/*

*/
function notesel(note_id) {
    if (note_id == 0) {
        throw "ERROR @ notesel";
    }
    selected_note = note_id;
}

function objinfo(data0, data1, data2 = null) { undef_func("objinfo", [data0, data1, data2]); }

function objmode(data0, data1) { undef_func("objmode", [data0, data1]); }

function objprm(data0, data1) { undef_func("objprm", [data0, data1]); }

function objsel(data0) { undef_func("objsel", [data0]); }

function objsize(data0, data1 = null) { undef_func("objsize", [data0, data1]); }

function oncmd_gosub(func, event_id) { undef_func("oncmd_gosub", [func, event_id]); }

function onexit_goto(func) {
    window.onbeforeunload = func;
}

function onexit(data0) { undef_func("onexit", [data0]); }

function onkey(data0) { undef_func("onkey", [data0]); }

function palette(data0, data1, data2, data3 = null, data4 = null) { undef_func("palette", [data0, data1, data2, data3, data4]); }

/*
HSP言語 peek命令
参照元: http://lhsp.s206.xrea.com/manual/

変数に保存されたデータメモリ上の任意の場所にある1バイト(8bit)の内容を
数値として返します。
関数の戻り値は、0～255までの整数値になります。

peek (p1,p2)		[バッファから1byte読み出し]
p1=変数 : 内容を読み出す元の変数名
p2=0～  : バッファのインデックス(Byte単位)
*/
function peek(string_data, index) {
    switch (string_data.split("")[index]) {
        case "1":
            return 49;
        case "2":
            return 50;
        case "3":
            return 51;
        case "4":
            return 52;
        case "5":
            return 53;
        case "6":
            return 54;
        case "7":
            return 55;
        case "8":
            return 56;
        case "9":
            return 57;
        case "x":
            return 120;
        case "y":
            return 121;
        case "z":
            return 122;
        case "#":
            return 35;
        case ".":
            return 46;
        case "^":
            return 94;
        case "I":
            return 73;
        case "a":
            return 97;
        case "b":
            return 98;
        case "c":
            return 99;
        case "d":
            return 100;
        case "e":
            return 101;
        case "f":
            return 102;
        case "g":
            return 103;
        case "h":
            return 104;
        case "i":
            return 105;
        case "j":
            return 106;
        case "k":
            return 107;
        case "l":
            return 108;
        default:
            undef_func("peek", [string_data, index]);
            undef_func("peek", [string_data.split("")[index]]);
            return index;
    }
}

/*
HSP言語 picload命令
参照元: http://lhsp.s206.xrea.com/manual/

画像ファイルをロードします。通常は、
picload "test.bmp"
とするだけで、"test.bmp"で指定された画像ファイルが現在の画

picload "filename",p1		[画像ファイルをロード]
"filename" : ロードするファイル名
p1=0～1(0) : 画像ロードモード
*/
function picload(img_name) {
    return __awaiter(this, void 0, void 0, function* () {
        let img = new Image();
        return new Promise((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = reject;
            img.src = "../data/img/" + img_name + ".png";
        }).then(() => {
            canvases[target_window_id].width = img.width;
            canvases[target_window_id].height = img.height;
            contexts[target_window_id] = canvases[target_window_id].getContext('2d');
            contexts[target_window_id].drawImage(img, 0, 0);
        }).catch(() => {
            alert("データの読み込みに失敗しました。");
        });
    });
}

function poke(data0, data1, data2) { undef_func("poke", [data0, data1, data2]); }

function pos(x, y) {
    position = [x, y];
}

function pset(pos_x, pos_y) {
    context.beginPath();
    context.arc(pos_x, pos_y, 1, 0, 6.28, false);
    context.fill();
}

function randomize() { undef_func("randomize"); }

/*
HSP言語 redraw命令
参照元: http://lhsp.s206.xrea.com/manual/

画面の描画モードを指定します。描画モードとは、

描画モード0:

mes,print,gcopy,gzoom などの画面制御命令が実行されても仮想画面を書き換
えるだけで、実際の画面には反映されません。

描画モード1:

画面制御命令が実行されると、実際の画面にも反映されます。

となっています。通常は描画モード１です。
描画モード0で画面内に画像をコピーしたり、メッセージを表示しておいて、
最後にモード1にすることで画面の書き換えのちらつきをなくしスムーズに見
せることができます。

redraw p1,p2,p3,p4,p5		[再描画の設定]
p1=0～3(1) : 描画モードの設定
p2,p3      : 再描画する左上X,Y座標
p4,p5      : 再描画する大きさX,Y（ドット単位）
*/
function redraw(mode) {
    mode = 1;
    if (mode == 1 && pre_render_canvas) {
        context = contexts[target_window_id];
        context.drawImage(pre_render_canvas, 0, 0);
    }
    else {
        pre_render_canvas = document.createElement('canvas');
        pre_render_canvas.id = "pre";
        pre_render_canvas.width = 340;
        pre_render_canvas.height = 340;
        context = pre_render_canvas.getContext('2d');
    }
}

function rnd(num) {
    return Math.floor(Math.random() * num);
}

/*
HSP言語 screen命令
参照元: http://lhsp.s206.xrea.com/manual/

指定したウィンドウIDを初期化して使用できるようにします。 
HSPの初期状態では、ウィンドウID0の画面しか使用されていませんが、
ウィンドウID1以上を指定することで、新しいウィンドウを作成することができます。
ID1以上のウィンドウは、標準でサイズを自由に変えることが可能なスタイルを
持つことになります。

p4の初期化する画面モードは、以下から選ぶことができます。

   1 : パレットモード(1670万色中256色)で作成する
   2 : 非表示のウィンドウを作成する
   4 : サイズ固定ウィンドウ
   8 : ツールウィンドウ
  16 : 深い縁のあるウィンドウ

screen p1,p2,p3,p4,p5,p6,p7,p8		[ウィンドウIDを初期化]
p1=0～(0)   : ウィンドウID
p2,p3       : 初期化する画面サイズX,Y（1ドット単位）
p4=0～31(0) : 初期化する画面モード
p5,p6       : ウィンドウの配置X,Y（1ドット単位）
p7,p8       : クライアントエリアのサイズX,Y（1ドット単位）

p7,p8のパラメータで、ウィンドウのクライアントサイズ(実際に表示される大
きさ)を指定することができます。
*/
function screen_(id, display_width, display_height, init_mode, pos_x = null, pos_y = null) {
    if (id == 0) {
        display_width = 340;
        display_height = 340;
        canvasSize = display_width;
        document.getElementById("pad").style.top = "360px";
    }
    buffer(id, display_width, display_height, init_mode);
    canvases[id].style.top = pos_x;
    canvases[id].style.left = pos_y;
    document.body.appendChild(canvases[id]);
    canvases[id].style.display = "none";
}

function sendmsg(data0, data1, data2, data3) { undef_func("sendmsg", [data0, data1, data2, data3]); }


/*
HSP言語 sdim命令
参照元: http://lhsp.s206.xrea.com/manual/

文字列型の配列変数を作成します。 dim命令との違いは、  p2のパラメータは
「文字列のデフォルト文字数」、p3のパラメータ以降に実際の配列要素の最大
数を入れるところです。
例 ：
	sdim a,5000 ; 変数aは5000文字ぶんのメモリをあらかじめ確保します

sdim p1,p2,p3...		[文字列型配列変数を作成]
p1=変数 : 配列を割り当てる変数名
p2=1～  : デフォルト文字数
p3=0～  : 要素の最大
    */
function sdim(length1, length2 = null, length3 = null) {
    if (length2 == null) {
        return "";
    }
    var return_list = [];
    for (var i = 0; i < length2; i++) {
        if (length3 != null) {
            return_list[i] = [];
            for (var j = 0; j < length3; j++) {
                return_list[i][j] = "";
            }
        }
        else {
            return_list[i] = "";
        }
    }
    return return_list;
}

function stick(data0, data1) { undef_func("stick", [data0, data1]); return 0; }

function strmid(data0, data1, data2) { undef_func("strmid", [data0, data1, data2]); }

function title(window_name) {
    if (target_window_id == 0) {
        document.title = window_name;
    }
}

function wait(time) {
    return new Promise((resolve, reject) => { setTimeout(() => resolve(), 10 * time); });
}

function width(data0, data1) { undef_func("width", [data0, data1]); }

function HMMINIT(data0) {
    stat = 1;
}

function DSLOADMEMORY(audio_data, audio_id) {
    se[audio_id] = audio_data;
}

function DSPLAY(audio_id = null) {
    se[audio_id].currentTime = 0;
    se[audio_id].play();
}

function DSSETVOLUME(se_id, volume) {
    se[se_id].volume = volume / 1000;
}

function DSGETMASTERVOLUME() { }

function DSSETMASTERVOLUME(data0) { }


// Ver 0.1305で追加
var music_id = "102.mp3";
var bgm_source1;
var bgm_source2;

//var bgm = new Audio();
//var emb = '<audio # autostart="true">';

//const music = document.getElementById("media");

function DMLOADMEMORY(music_id, data0, data1) {
    // Ver 0.1305で追加
    // bgm音源の更新
    if(bgm_source1 != null){
        //alert("init: " + bgm_source1);
        document.getElementById(bgm_source1).pause();
        bgm_source1 = music_id;
    }
    else {
        bgm_source1 = music_id;
    }
    document.getElementById(bgm_source1).load();


}


function DMINIT() {
    //document.getElementById(bgm_source1).pause()
}

//var audioElem;

function DMPLAY(data0, data1) { 

    document.getElementById(bgm_source1).volume = 0.3
    document.getElementById(bgm_source1).play();

}


function DMSTOP() {
    document.getElementById(bgm_source1).pause()
    //audioElem.pause();

 }


/*
//youtubeからのbgmリンクを使用しないのでコメントアウト
function DMLOADMEMORY(music_id, data0, data1) {
    var music_list = {
        "0": "YLCIfDqgDIk",
        "102": "gvCmtHDDuu0",
        "315": "AuA0HQ4Zobc",
        "099": "X_pDwv3tpug",
        "302": "l482T0yNkeo",
        "312": "pL4uESRCnv8",
        "998": "JtmpcQ-hbxI",
        "987": "fCULDFsbA9Y",
        "104": "v3JaosE-gZE",
        "992": "mdt0SOqPJcg",
        "991": "2s4slliAtQU",
        "116": "p6gKe9Fr2ok",
        "201": "vOJRILBRS5o",
        "107": "bSfqNEvykv0",
        "202": "D-dONCnY_Yg",
        "997": "pHa4pvspCqc",
        "412": "rnKbImRPhTE",
        "319": "zDKO6XYXioc",
        "117": "0aU57V6VBW0",
        "122": "-Ro8-ngA8gs",
        "311": "MjMCaw4qzjg",
        "414": "I8JULmUlGDA",
        "305": "6j7E7pvLxmI",
        "113": "bJ9r8LMU9bQ",
        "123": "PE9HvSdcaL4",
        "200": "-cmo6MRYf5g",
        "313": "UAKCR7kQMTQ",
        "985": "9sGy_-p_sVE",
        "308": "56u6g0POvo0",
        "111": "OXqnHLXZugA",
        "120": "Ixrje2rXLMA",
        "411": "iDNtqy0zjJA",
        "988": "EqPtz5qN7HM",
        "986": "kZ8KK8u9dN8",
        "401": "eBG7P-K-r1Y",
        "207": "QV-2EJnfzjY",
        "402": "AYUdldNzLNA",
        "995": "usfiAsWR4qU",
        "203": "hLhN__oEHaw",
        "121": "fjwWjx7Cw8I",
        "317": "iZq3i94mSsQ",
        "205": "KFq2pU21cNU",
        "303": "ZunGXrbS0hQ",
        "994": "ZDwotNLyz10",
        "396": "D9ioyEvdggk",
        "999": "CWzrABouyeE",
        "981": "s__rX_WL100",
        "306": "5ZF6m659-z0",
        "320": "Mrhg66cVPGw",
        "408": "PivWY9wn5ps",
        "101": "1dmt5o0DjaU",
        "124": "cjImFYf2Vzc",
        "301": "pO8kTRv4l3o",
        "310": "La4Dcd1aUcE",
        "206": "bx1Bh8ZvH84",
        "109": "0pyxKqdtrH8",
        "300": "qM0zINtulhM",
        "404": "p3j2NYZ8FKs",
        "978": "UnVBS0ZkARw",
        "103": "HuBqE9xGtiQ",
        "106": "cWGE9Gi0bB0",
        "980": "N3oCS85HvpY",
        "405": "3T1c7GkzRQQ",
        "996": "rblt2EtFfC4",
        "115": "7IQE62Vn4_U",
        "395": "rY0WxgSXdEE",
        "990": "fJ9rUzIMcZQ",
        "112": "2ZBtPf7FOoM",
        "204": "rkHF_JMnB8o",
        "993": "wJzNZ1c5C9c",
        "105": "Mr_uHJPUlO8",
        "108": "Fmfi3UbDPnQ",
        "318": "XCMrXC8D05Q",
        "403": "cBojbjoMttI",
        "309": "WSv2gLT0jkU",
        "119": "gJLIiF15wjQ",
        "409": "pAuPMJlK92s",
        "400": "d27gTrPPAyk",
        "407": "ZuI61cTNbAk",
        "314": "mbAyj1h9vI0",
        "316": "btPJPFnesV4",
        "989": "JB6WZu8IAZg",
        "118": "uZ4PZOfVnP8",
        "304": "Ae0nwSv6cTU",
        "114": "unHzLEA6gvI",
    };
    var link_id = music_list[music_id.split(".")[0]];
    if (link_id) {
        var a_tug = (document.getElementById("bgmlink"));
        a_tug.href = "https://www.youtube.com/watch?v=" + link_id;
        var iframe = document.getElementById("bgm");
        iframe.src = "https://www.youtube.com/embed/" + link_id;
    } else {
        var a_tug = (document.getElementById("bgmlink"));
        a_tug.href = "";
        var iframe = document.getElementById("bgm");
        iframe.src = "";
    }
}
*/

function ck_joystick(data0, data1 = null) {
    return 0;
}
function netclose(data0, data1 = null, data2 = null, data3 = null) { }

function netfail(data0, data1 = null, data2 = null, data3 = null) { }

function netinit(data0, data1, data2, data3) { }

function tcpopen(data0, data1, data2) { }

function tcpiscon(data0) { }

function tcpcount(data0, data1) { }

function tcpgetl(data0, data1, data2) { }

function tcpput(data0, data1) { }

function GetWindowLongA(data1, data2) { }

function SetWindowLongA(data1, data2, data3) { }

function SetWindowPos(hwnd, data1, data2, data3, data4, data5, data6) { }

function ShowWindow(id, state) { }

function ImmGetContext(arg1) { }

function ImmSetOpenStatus(arg1, arg2) { }

function ImmReleaseContext(arg1, arg2) { }

function ImmGetOpenStatus(arg1) { }
