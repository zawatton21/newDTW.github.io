var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 機能不明
function dbgprt(num) {
}
// 機能不明
function undef_func(str, arg) {
    if (arg === void 0) { arg = null; }
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
// 各キーボードキーのリセット 0 = OFF状態
function reset_input(x, y) {
    // 37:← (左矢印), 38:↑ (上矢印), 39:→ (右矢印), 40:↓ (下矢印)
    pushing_key_list[37] = pushing_key_list[38] = pushing_key_list[39] = pushing_key_list[40] = 0;
    // 88:X, 90:Z
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
    // キーボードを押したときに実行されるイベント
    document.onkeydown = function (e) {
        pushing_key_list[e.keyCode] = 1;
        e.preventDefault();
    };
    // キーボードを離したときに実行されるイベント
    document.onkeyup = function (e) {
        pushing_key_list[e.keyCode] = 0;
        e.preventDefault();
    };
    // ブラウザ版でのコントロールやデバッグボタン機能　使わないのでコメントアウト
    //コメントアウトしたが重要機能っぽい。
    /*
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; ++i) {
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
        (this as any).style.border = 'inset 2px';
    }
    else {
        pushing_key_list[88] = 1;
        (this as any).style.border = '';
    }
};
            buttons[i].ontouchstart = function (e) {
                if (pushing_key_list[88] > 0) {
                    console.log(e);
                    pushing_key_list[88] = 0;
                    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                    this["style"].border = 'inset 2px';
                }
                else {
                    pushing_key_list[88] = 1;
                    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                    this["style"].border = '';
                }
            };
            continue;
        }
        buttons[i].onmousedown = function (e) {
    pushing_key_list[(this as any).id] = 1;
};
        buttons[i].onmouseup = function (e) {
    pushing_key_list[(this as any).id] = 0;
};
        buttons[i].ontouchstart = function (e) {
    pushing_key_list[(this as any).id] = 1;
};
        buttons[i].ontouchend = function (e) {
    pushing_key_list[(this as any).id] = 0;
};
    };
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
    */
}
// 時間取得？
var last_wait_time = new Date();
function await_(time) {
    var wait_time = Math.max(time - Math.max(0, new Date().getMilliseconds() - last_wait_time.getMilliseconds()), 0);
    last_wait_time = new Date();
    return new Promise(function (resolve, reject) {
        // @ts-expect-error TS(2794): Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
        setTimeout(function () { return resolve(); }, wait_time);
    });
}
// ↓↓↓ ここからHSPの機能を再現するための関数  ↓↓↓ 
/* HSP言語 bgscr命令
参照元: http://lhsp.s206.xrea.com/manual/i_graph.html#bgscr

ウィンドウIDを初期化して枠のないウィンドウを作成する。
bgscr p1,p2,p3,p4,p5,p6,p7,p8

p1=0～(0)  : ウィンドウID
p2,p3      : 初期化する画面サイズX,Y（1ドット単位）
p4=0～1(0) : 初期化する画面モード
p5,p6(0,0) : ウィンドウの配置X,Y（1ドット単位）
p7,p8      : ウィンドウのサイズX,Y（1ドット単位）
*/
// @ts-expect-error TS(2345): Argument of type 'any[]' is not assignable to para... Remove this comment to see the full error message
function bgscr(data0, data1, data2, data3, data4, data5, data6, data7) {
    if (data6 === void 0) { data6 = null; }
    if (data7 === void 0) { data7 = null; }
    undef_func("bgscr", [data0, data1, data2, data3, data4, data5, data6, data7]);
}
//const Store = require('electron-store')
//const store = new Store()
/* HSP言語 boxf命令
画面に四角形を描くための関数。
参照元:
http://lhsp.s206.xrea.com/manual/i_graph.html#boxf
https://hsp3.web.fc2.com/lecture7.html
*/
function boxf(left, top1, right, bottom) {
    if (left === void 0) { left = null; }
    if (top1 === void 0) { top1 = null; }
    if (right === void 0) { right = null; }
    if (bottom === void 0) { bottom = null; }
    left = left || 0;
    top1 = top1 || 0;
    right = right || 340;
    bottom = bottom || 340;
    if ((target_window_id == 4 || target_window_id == 7 || target_window_id == 10 || target_window_id == 32) && left == 0 && top1 == 0) {
        return context.clearRect(left, top1, right - left, bottom - top1);
    }
    var ga = context.globalAlpha;
    context.globalAlpha = 1;
    context.fillRect(left, top1, right - left, bottom - top1);
    context.globalAlpha = ga;
}
/* HSP言語 bload命令
参照元: http://lhsp.s206.xrea.com/manual/

bload "filename",p1,p2,p3		[バッファにファイルをロード]
"filename" : ロードするファイル名
p1=変数    : 変数名
p2=64～(-1): ロードされるサイズ(Byte単位)
p3=0～(-1) : ファイルのオフセット
ファイルの内容をメモリバッファに読み込みます。
通常は、sdim命令で確保したメモリバッファに対して使用しますが、
それ以外の型を持つ変数や、配列変数に対して使うこともできます。

テキストファイルを読み込むときは noteload命令 推奨

各データファイルの読み込み
音源ファイル、セーブデータ等
*/
function bload(file_name, data_size, offset) {
    if (data_size === void 0) { data_size = null; }
    if (offset === void 0) { offset = null; }
    // 効果音の読み込み
    if (file_name.split(".")[1] == "wav") {
        var audio = new Audio("../assets/se/" + file_name);
        audio.autoplay = false;
        audio.loop = false;
        return audio;
    }
    // BGMの読み込み
    if (file_name.split(".")[1] == "mp3") {
        //const music = new Audio("bgm/" + file_name);
        return file_name;
        //music.autoplay = false;
        //music.loop = false;
        //return music;
    }
    // datファイルでなければ、配列を返す？
    if (file_name.split(".")[1] != "dat") {
        return []; //配列を返す？
    }
    // セーブデータ読み込み
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    if (files[file_name] == undefined) {
        var load_data_1 = window.localStorage.getItem(file_name);
        if (load_data_1 != null) {
            // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            files[file_name] = JSON.parse(load_data_1);
        }
        else {
            return;
        }
    }
    /*
    if (file_name.split(".")[1] = "dat") {
        const load_data = window.localStorage.getItem(file_name);
        if (load_data != null) {
            
            files[file_name] = JSON.parse(load_data);
        }
        else {
            return;
        }
    }
*/
    /*
        //if (files[file_name] == undefined) {
        if (file_name.split(".")[1] = "dat") {
            
            const load_data: any = dreadFile(file_name);
            
            if (load_data != null) {
                files[file_name] = JSON.parse(load_data);
            }
            else {
                return;
            }
        }
    */
    if (offset != null) {
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        return files[file_name][offset];
    }
    else {
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        return files[file_name][0];
    }
}
/* HSP言語 bsave命令
メモリバッファの内容をファイルに書き出す。
参照元: http://lhsp.s206.xrea.com/manual/

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
function bsave(file_name, data, data_size, offset) {
    //const filePath = path.join("../data/", 'config.json');
    if (data_size === void 0) { data_size = null; }
    if (offset === void 0) { offset = null; }
    offset = offset == null ? 0 : offset;
    data_size = data_size == null ? 0 : data_size;
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    if (!files[file_name]) {
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        files[file_name] = {};
    }
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    files[file_name][offset] = data;
    /*
    データセーブ機能
    HTHL5から導入されたJavascriptを使ってブラウザにデータを保存できるlocalStorage機能
    データは永続的に保存される為、Local Storageのデータを削除する処理が必ず必要
    */
    //dsetFile(file_name, data);
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    localStorage.setItem(file_name, JSON.stringify(files[file_name]));
    //store.set(file_name, JSON.stringify(files[file_name]));
    //fs.appendFileSync("../data/" + file_name, JSON.stringify(files[file_name])); // 書き込み
    //store.set(file_name, files[file_name]);
    // const filePath = path.join(dataPath, 'config.json');
}
/* HSP言語 buffer命令
参照元: http://lhsp.s206.xrea.com/manual/

screen命令と同じく、指定したウィンドウIDを初期化して使用できるようにし
ます。初期化する画面サイズと、画面モードはscreen命令と変わりませんが、
buffer命令では、メモリ上に仮想画面が作られるだけで、実際の画面には表示
されません

buffer p1,p2,p3,p4		[ウィンドウIDを初期化]
p1=0～ (0) : ウィンドウID
p2,p3      : 初期化する画面サイズX,Y（1ドット単位）
p4=0～1(0) : 初期化する画面モード

*/
function buffer(id, disp_width, disp_height, mode) {
    if (disp_width === void 0) { disp_width = null; }
    if (disp_height === void 0) { disp_height = null; }
    if (mode === void 0) { mode = null; }
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
/* HSP言語 cls命令
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
/* HSP言語 chdir命令
参照元: http://lhsp.s206.xrea.com/manual/

"dirname"で指定した名前のディレクトリに移動します。

chdir "dirname"		[ディレクトリ移動]
"dirname" : 移動先ディレクトリ名
*/
function chdir(data0) { undef_func("chdir", [data0]); }
/* 現在使用していない HSP言語 chgdisp命令
参照元: http://lhsp.s206.xrea.com/manual/

chgdisp命令
･画面制御命令
chgdisp p1,p2,p3		[画像解像度を変更する]
p1=0～2(0)  : モードの設定
p2=0～(640) : X方向の画像解像度の設定
p3=0～(480) : Y方向の画像解像度の設定
現在の表示解像度を強制的に変更します。
(p2,p3)でX,Y解像度を設定し、p1で変更モードを設定します。
モードは、1がフルカラーモード(32bit)、 2がパレットモード(8bit)となりま
す。変更モードが0の場合は、最初の状態(変更前)に復帰します。

例 :
  chgdisp 1,640,480	; 640x480フルカラーに設定する
 
  stat=0 : 正常に解像度が設定された。
  stat=1 : カラーモードの変更はできなかったが、
           解像度の変更は正常に行なわれた。
  stat=2 : 解像度の変更ができなかった。
*/
function chgdisp(data0, data1, data2) {
    if (data0 === void 0) { data0 = null; }
    if (data1 === void 0) { data1 = null; }
    if (data2 === void 0) { data2 = null; }
    undef_func("chgdisp", [data0, data1, data2]);
}
/* HSP言語 chkbox命令
参照元: http://lhsp.s206.xrea.com/manual/

カレントポジションにオブジェクトとしてチェックボックスを配置します。
チェックボックスには、"strings"で指定した文字列の左側に、カーソルで
ON/OFFを切り替えることのできるスイッチがついたオブジェクトです。

chkbox "strings",p1		[チェックボックス表示]
"strings" : チェックボックスの内容表示文字列
p1=変数   : チェックボックスの状態を保持する変数
*/
function chkbox(data0, data1) { undef_func("chkbox", [data0, data1]); }
/* HSP言語 clrobj命令
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
// @ts-expect-error TS(2345): Argument of type 'null[]' is not assignable to par... Remove this comment to see the full error message
function clrobj(data0, data1) {
    if (data0 === void 0) { data0 = null; }
    if (data1 === void 0) { data1 = null; }
    undef_func("clrobj", [data0, data1]);
}
/* HSP言語 color命令
参照元: http://lhsp.s206.xrea.com/manual/

color p1,p2,p3		[カラー設定]
p1,p2,p3=0～255(0) : 色コード（R,G,Bの輝度）
メッセージ表示、描画などの色を指定した値に設定します。
p1,p2,p3がそれぞれ、R,G,Bの輝度になります。

0が最も暗く、255が最も明るくなります。
color 0,0,0 は黒に、color 255,255,255 は白になります。
*/
function color(red, green, blue) {
    context.strokeStyle = context.fillStyle = "rgb(" + red + ", " + green + ", " + blue + ")";
}
/* 現在使用していない HSP言語 combox命令
参照元: http://lhsp.s206.xrea.com/manual/

combox p1,p2,p3		[コンボボックス表示]
p1=変数      : コンボボックスの状態を保持する数値型変数
p2=0～(100)  : 拡張Yサイズ
p3="strings" : コンボボックスの内容を示す文字列
カレントポジションにオブジェクトとして、コンボボックスを配置します。
コンボボックスは、複数の文字列要素の中から１つを選択させることのできる
入力オブジェクトです。
オブジェクトの大きさは、objsize命令で設定した大きさになります。ただし、
p2パラメータで選択時のリスト表示のためのYサイズを指定しなければなりま
せん。 (通常は100～150程度が適当です)

*/
function combox(data0, data1, data2) { undef_func("combox", [data0, data1, data2]); }
/* 現在使用していない HSP言語 delete命令
参照元: http://lhsp.s206.xrea.com/manual/

delete "filename"		[ファイル削除]
"filename" : 削除するファイル名
"filename"で指定したファイルを削除します。
指定したファイルが存在しないか、書式が間違っている場合は
エラー12(「ファイルが見つからないか無効な名前です」)となります。
delete命令を実行する前に exist命令でファイルの有無を確認するようにしてください。
*/
function delete_(data0) { undef_func("delete_", [data0]); }
/* HSP言語 dim命令
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
// @ts-expect-error TS(7006): Parameter 'length1' implicitly has an 'any' type.
function dim(length1, length2, length3, length4) {
    if (length2 === void 0) { length2 = null; }
    if (length3 === void 0) { length3 = null; }
    if (length4 === void 0) { length4 = null; }
    if (length4 != null) {
        throw "4重配列なんてありませんよ";
    }
    var return_list = [];
    for (var i = 0; i < length1; i++) {
        if (length2 != null) {
            return_list[i] = [];
            for (var j = 0; j < length2; j++) {
                if (length3 != null) {
                    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                    return_list[i][j] = [];
                    for (var k = 0; k < length3; k++) {
                        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                        return_list[i][j][k] = 0;
                    }
                }
                else {
                    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
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
/* 現在使用していない HSP言語 dirinfo命令
参照元: http://lhsp.s206.xrea.com/manual/

dirinfo (p1)		[ディレクトリ情報の取得]
p1=0～4 : 取得するタイプ
p1で指定したタイプのディレクトリ名を返します。
取得するタイプは以下の通りです。

    0 : カレント(現在の)ディレクトリ
    1 : HSPの実行ファイルがあるディレクトリ
    2 : Windowsディレクトリ
    3 : Windowsのシステムディレクトリ
    4 : コマンドライン文字列

p1を省略することはできません。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function dirinfo(data0) { undef_func("dirinfo", [data0]); }
/* 現在使用していない HSP言語 dirlist命令
参照元: http://lhsp.s206.xrea.com/manual/

dirlist p1,"filemask",p2		[ディレクトリ一覧を取得]
p1=変数    : ディレクトリ一覧を格納する文字列型変数
"filemask" : 一覧のためのファイルマスク
p2=0～(0)  : ディレクトリ取得モード
カレントディレクトリのファイル一覧を作成して、変数に代入します。
"filemask"で、一覧を作成するためのファイルマスクを指定します。
ファイルマスクは、「*.*」 のようなワイルドカードの形で指定するパラメー
タです。
たとえば、「*.as」というファイルマスクではasという拡張子を持つファイル
すべての一覧を作成します。カレントディレクトリにあるすべてのファイル一
覧を作成する場合は、「*.*」になります。

モードが省略されている場合は0になります。

  モード :  取得される内容
 ---------------------------------------------------------------------
     0   :  すべてのファイル
     1   :  ディレクトリを除くすべてのファイル
     2   :  隠し属性・システム属性を除くすべてのファイル
     3   :  ディレクトリ・隠し属性・システム属性以外のすべてのファイル
     5   :  ディレクトリのみ
     6   :  隠し属性・システム属性ファイルのみ
     7   :  ディレクトリと隠し属性・システム属性ファイルのみ
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function dirlist(data0, data1, data2) {
    if (data2 === void 0) { data2 = null; }
    undef_func("dirlist", [data0, data1, data2]);
}
/*
HSP命令ない？？

ウィンドウを閉じる = 実質アプリ終了
*/
function end() {
    window.close();
}
/* HSP言語 exist命令
参照元: http://lhsp.s206.xrea.com/manual/

ファイルが存在するかどうか確認
exist "filename"		[ファイルのサイズ取得]
"filename" : サイズを調べるファイルの名前
"filename"で指定したファイルが存在するかをチェックして、そのファイルサ
イズを取得します。exist命令が実行されると、システム変数strsizeに結果が
反映されます。

ファイルが存在する場合は、そのファイルサイズがstrsizeに代入されます。
もしファイルが存在しなかった場合は、-1がstrsizeに代入されます。
*/
// @ts-expect-error TS(7006): Parameter 'file_name' implicitly has an 'any' type... Remove this comment to see the full error message
function exist(file_name) {
    bload(file_name);
    // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    if (files[file_name]) {
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        strsize = Object.keys(files[file_name]).length; // オブジェクトfiles[file_name]の要素数を知る
    }
    else {
        strsize = -1;
    }
}
/* HSP言語 font命令
参照元: http://lhsp.s206.xrea.com/manual/

フォント設定
font "fontname",p1,p2		[フォント設定]
p1=1～99(12) : フォントの大きさ
p2=0～(0)    : フォントのスタイル
mesおよびprint命令などで表示するテキスト書体の設定をします。
"fontname"でフォントの名前を指定します。

フォント名は、"ＭＳ 明朝"、"ＭＳ ゴシック"などのフォント名を直接指定し
てください。
フォントの大きさはドット数に比例した論理サイズで指定します。
数が大きいほど、文字も大きくなります。フォントのスタイルは、

  スタイル 1  : 太文字
  スタイル 2  : イタリック体
  スタイル 4  : 下線
  スタイル 8  : 打ち消し線
  スタイル16  : アンチエイリアス

となります。数値を合計することで複数のスタイルを同時に指定することも可
能です。p2を省略すると、0(通常のスタイル)になります。

スタイル16を指定すると、文字の縁にあるギザギザが消えて滑らかな表示にな
ります。ただし、画面モードがフルカラーで初期化されている必要があるほか、
Windows9X環境はサポートされないのでご注意下さい。
(WindowsXPでは、常にアンチエイリアスが有効になります。)

初期設定やシステム指定のフォントに戻すには、 sysfont命令を使用してくだ
さい。また、オブジェクトのフォントを変更する場合には、 objmode命令でモ
ードの指定を行なう必要があります。

指定されたフォントが発見できなかった場合には、代用のフォントが自動的に検索されます。
代用フォントの検索にも失敗した場合には、システム変数statに-1が代入されます。
フォントが正常に設定された場合には、システム変数statに0が代入されます。
*/
// @ts-expect-error TS(7006): Parameter 'font_type' implicitly has an 'any' type... Remove this comment to see the full error message
function font(font_type, font_size, font_style) {
    if (font_style === void 0) { font_style = null; }
    font_style = font_style || 0;
    var font_style_list = ["", "bold", "italic"];
    context.font = font_style_list[font_style] + " " + font_size + "px '" + font_type + "'";
    line_size = font_size;
}
/* 現在使用していない HSP言語 dialog命令
参照元: http://lhsp.s206.xrea.com/manual/

dialog "message",p1,"option"		[ダイアログを開く]
p1=0～(0) : ダイアログのタイプ設定
Windowsの標準的な各種ダイアログボックスを画面に表示します。
dialog命令で出したダイアログは、 HSPのウィンドウとは別にポップアップし
て現われます。

ユーザーの操作によりダイアログを閉じるまでは、 HSPスクリプトの続きは実
行されません。

ダイアログのタイプは、p1の設定によって変わります。

   タイプ : 内容
 -----------------------------------------------------
     0    : 標準メッセージボックス + [OK]ボタン
     1    : 警告メッセージボックス + [OK]ボタン
     2    : 標準メッセージボックス + [はい][いいえ]ボタン
     3    : 警告メッセージボックス + [はい][いいえ]ボタン
    16    : ファイルOPEN(開く)ダイアログ
    17    : ファイルSAVE(保存)ダイアログ
    32    : カラー選択ダイアログ(固定色)
    33    : カラー選択ダイアログ(RGBを自由に選択)
    64～  : 拡張ダイアログ

タイプ0～3の場合は、"message" で指定した内容を表示するメッセージボック
スが現われます。また、"option"でメッセージボックスのタイトルバー文字列
を指定することができます。(省略した場合はタイトルに何も表示されません)
メッセージボックスが閉じられると、押したボタンの情報がシステム変数stat
に代入されます。この時、変数statの内容は、

  1 :「OK」ボタンが押された
  6 :「はい」ボタンが押された
  7 :「いいえ」ボタンが押された

のようになります。

*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function dialog(data0, data1, data2) {
    if (data2 === void 0) { data2 = null; }
    undef_func("dialog", [data0, data1]);
}
/* HSP言語 gcopy命令
参照元: http://lhsp.s206.xrea.com/manual/

gcopy p1,p2,p3,p4,p5		[画面コピー]
p1=0～(0) : ウィンドウID
p2,p3     : コピー元の左上X,Y座標
p4,p5     : コピーする大きさX,Y（ドット単位）
gcopy命令は、 指定したウィンドウIDの画面の一部を、現在の描画先カレント
ポジションにコピーします。
コピー元のウィンドウIDは、自分のウィンドウIDと同じかまたは、screen命令
やbuffer命令で初期化されたウィンドウIDでなければなりません。

gcopy命令でコピーする場合は、gmode命令によってコピーするモードをいくつ
か選ぶことができます。

gcopy命令でパレットモード画面の画像をコピーする際には注意が必要です。
*/
function gcopy(org_buffer_id, x, y, img_width, img_height) {
    gzoom(img_width, img_height, org_buffer_id, x, y, img_width, img_height, null);
}
/* HSP言語 getkey命令
参照元: http://lhsp.s206.xrea.com/manual/


キーボードの入力確認
getkey p1,p2		[キー入力チェック]
p1=変数   : 読み込むための変数
p2=1～(1) : キーコード
キーボード及びマウスボタンの状態をチェックして変数に代入します。指定し
たボタンが押されていれば、1を代入し、押されていなければ0が代入されます
。キーコードで指定する値の詳細は、以下の通りです。

  キーコード : 実際のキー
 ------------------------------------------
        1    : マウスの左ボタン
        2    : マウスの右ボタン
        3    : キャンセル（[CTRL]+[BREAK]）
        4    : ３ボタンマウスのまん中のボタン
        8    : [BACKSPACE]（PC98の[BS]）
        9    : [TAB]
       13    : [ENTER]
       16    : [SHIFT]
       17    : [CTRL]
       18    : [ALT]（PC98の[GRPH]）
       20    : [CAPSLOCK]
       27    : [ESC]
       32    : スペースキー
       33    : [PAGEUP]（PC98の[ROLLDOWN]）
       34    : [PAGEDOWN]（PC98の[ROLLUP]）
       35    : [END]（PC98の[HELP]）
       36    : [HOME]（PC98の[HOMECLR]）
       37    : カーソルキー[←]
       38    : カーソルキー[↑]
       39    : カーソルキー[→]
       40    : カーソルキー[↓]
   48～57    : [0]～[9]（メインキーボード）
   65～90    : [A]～[Z]
  96～105    : [0]～[9]（テンキー）
 112～121    : ファンクションキー [F1]～[F10]
*/
function getkey(key_id) {
    return pushing_key_list[key_id] || 0;
}
// キー入力の初期化
function ResetKey(key_id) {
    pushing_key_list[key_id] = 0;
}
/* 現在使用していない HSP言語 getstr命令
参照元: http://lhsp.s206.xrea.com/manual/

getstr p1,p2,p3,p4		[バッファから文字列読み出し]
p1=変数   : 内容を読み出す先の変数名
p2=変数   : バッファを割り当てた変数名
p3=0～    : バッファのインデックス(Byte単位)
p4=0～255 : 区切りキャラクタのASCIIコード
p5=0～(1024) : 読み出しを行なう最大文字数
メモリ上のバッファの任意の場所にある内容を文字列として変数に読み出しま
す。文字列は、00というコードか、改行コードがあるまで読み出されます。改
行コードは文字列には含まれません。

また、区切りキャラクタコードを指定することができ任意の文字で区切られた
文字列を取り出すこともできます。

この命令で読み出されたByte数は自動的に strsizeというシステム変数に代入
されます。strsizeは、次のインデックスまでの移動量を得る時に使用します。

たとえば、変数bのバッファに
'A' 'B' 'C' ',' 'D' 'E' 'F' 00(終了コード)
というデータが入っている場合、

getstr a,b,0,','

を実行すると、変数aの内容は、
'A' 'B' 'C' の部分が読み出されて"ABC"という文字列になり、strsize は4に
なります。

*/
function getstr(data0, data1, data2, data3) { undef_func("getstr", [data0, data1, data2, data3]); }
/* HSP言語 gettime命令
参照元: http://lhsp.s206.xrea.com/command/gettime.html

現在時間の取得
func175 クリア時のスコア機能にて使用。

0	年（year）。｢20**｣という数値が返る。
1	月（month）。「1～12」の範囲の数値が返る。
2	曜日（days of the week）。「0～6」の範囲の数値が返る。[ 0=日、1=月、2=火、3=水、4=木、5=金、6=土 ]
3	日（day）。「1～31」の範囲の数値が返る。
4	時（hour）。「0～23」の範囲の数値が返る。
5	分（minute）。「0～59」の範囲の数値が返る。
6	秒（second）。「0～59」の範囲の数値が返る。
7	ミリ秒（milli second）。「0～999」の範囲の数値が返る。[ 1000ミリ秒＝1秒 ]

*/
//function gettime(data0: any) { undef_func("gettime", [data0]); }
function gettime(data0) {
    var now = new Date(); //JavaScript 時間取得関数
    if (data0 == 0) {
        return now.getFullYear(); // 年（year）。｢20**｣という数値が返る。
    }
    if (data0 == 1) {
        return now.getMonth() + 1; // 月（month）。「1～12」の範囲の数値が返る。
    }
    if (data0 == 3) {
        return now.getDate(); // 日（day）。「1～31」の範囲の数値が返る。
    }
    else
        return;
}
/* HSP言語 ginfo命令
参照元: http://lhsp.s206.xrea.com/manual/

ginfo (p1)		[ウィンドウ情報の取得]
p1=0～(0) : 取得するタイプ
p1で指定したタイプのウィンドウ関連情報値を返します。
取得できるタイプは以下の通りです。

  0 : スクリーン上のマウスカーソルX座標
  1 : スクリーン上のマウスカーソルY座標
      スクリーン座標系は、 pos命令などで使用するウィンドウ内の座標では
      なく、デスクトップ画面全体から見た座標になります。

  2 : アクティブなウィンドウID

      現在アクティブになっているウィンドウIDを返します。
      もし、 アクティブになっているウィンドウがHSP以外の場合は-1になり
      ます。

  3 : 操作先ウィンドウID

      gsel命令で指定した画面の操作先ウィンドウIDが代入されます。

  4 : ウィンドウの左上X座標
  5 : ウィンドウの左上Y座標

    スクリーン座標系で現在のウィンドウの左上座標を返します。
    スクリーン座標系は、 pos命令などで使用するウィンドウ内の座標ではなく、
    デスクトップ画面全体から見た座標になります。

  6 : ウィンドウの右下X座標
  7 : ウィンドウの右下Y座標

      スクリーン座標系で現在のウィンドウの右下座標を返します。
      スクリーン座標系は、 pos命令などで使用するウィンドウ内の座標ではなく、
      デスクトップ画面全体から見た座標になります。

  8 : ウィンドウの描画基点X座標
  9 : ウィンドウの描画基点Y座標

      現在の操作先ウィンドウの描画基点座標を返します。
      これは、描画内容をスクロール可能な(初期化サイズよりも表示サイズが
      小さい)ウィンドウにおいて、どれだけスクロールされているかを示す値です。
      スクロールさせていない通常の状態では、(0,0)になります。
      描画基点を設定する場合は、groll命令を使用します。

 10 : ウィンドウ全体のXサイズ
 11 : ウィンドウ全体のYサイズ

      現在の操作先ウィンドウの横幅、縦幅が返されます。
      これは、ウィンドウの枠やタイトルバーなども含めたサイズになります。

 12 : クライアント領域Xサイズ
 13 : クライアント領域Yサイズ

      現在の操作先ウィンドウのクライアント領域サイズが返されます。
      クライアント領域はウィンドウ内に表示されている描画可能な部分を指します。

 14 : メッセージの出力Xサイズ
 15 : メッセージの出力Yサイズ

      最後にmes, print命令により出力されたメッセージのサイズが返されま
      す。サイズは、 X,Y座標にどれだけのドット数で描画されたかを示しま
      す。画面上の絶対座標ではないので注意してください。また、複数行あ
      る文字列を出力した場合は、最後の行にあたるサイズが取得されます。

 16 : 現在設定されているカラーコード(R)
 17 : 現在設定されているカラーコード(G)
 18 : 現在設定されているカラーコード(B)

      color命令などにより指定された色コードが返されます。

 19 : デスクトップのカラーモード

      現在のデスクトップカラーモード(色モード)が返されます。
      フルカラーモードの場合は0が、パレットモードの場合は1が返されます。

 20 : デスクトップ全体のXサイズ
 21 : デスクトップ全体のYサイズ

      デスクトップ全体のサイズ(画面解像度)が返されます。

 22 : カレントポジションのX座標
 23 : カレントポジションのY座標

      pos命令により設定されたカレントポジションのX,Y座標が返されます。

 24 : メッセージ割り込み時のウィンドウID

      oncmd命令により設定されたメッセージ割り込み時のウィンドウIDが返
      されます。

 26 : 画面の初期化Xサイズ
 27 : 画面の初期化Yサイズ

      現在の操作先ウィンドウの初期化サイズが返されます。
      最初にscreen,bgscr,buffer命令で初期化された画面サイズになります。
*/
function ginfo(data_id) {
    switch (data_id) {
        case 2: // アクティブなウィンドウID
            return target_window_id;
        case 4: // ウィンドウの左上X座標
            return 0;
        case 5: // ウィンドウの左上Y座標
            return 0;
        case 20: // デスクトップ全体のXサイズ(画面解像度)
            return disp_width; //return 340;
        case 21: //デスクトップ全体のYサイズ(画面解像度)
            return disp_height; //return 340;
        case 22: // カレントポジションのX座標
            return position[0];
        case 23: // カレントポジションのY座標
            return position[1];
        default:
            throw "未実装だ! - " + data_id;
    }
}
/* HSP言語 gmode命令
参照元: http://lhsp.s206.xrea.com/manual/

gmode命令
･画面制御命令
gmode p1,p2,p3,p4		[画面コピーモード設定]
p1=0～6(0)   : 画面コピーモード
p2,p3        : コピーする大きさX,Y（ドット単位）
p4=0～256(0) : 半透明合成時のブレンド率
gcopyで使用されるモードおよび、サイズ、ブレンド率などを設定します。
それぞれのコピーモード動作は以下の通りです。

・モード0 = 通常のコピー

WindowsのシステムAPI(BitBlt関数)を使った画像コピーを行ないます。
最も標準的なモードです。
多くの場合、他のモードよりも高速に処理されます。

・モード1 = メモリ間コピー

画像バッファ間のメモリコピーを行ないます。
コピー元とコピー先は、同じ画像モード(パレットモード・フルカラーモード)でなければなりません
。
動作は モード0と同じですが、非常に小さいサイズ(16*16ドット以下等)のコピーを
行った際 モード0よりも 若干 高速になる場合があります。

・モード2 = 透明色付きコピー

モード1と同様の方法でコピーを行ないますが、 RGBがすべて0(完全な黒)のド
ットは透明色とみなされコピーされません。

・モード3 = 半透明合成コピー

フルカラーモード時のみ使用することができます。
gmodeの4番目のパラメーターで指定したブレンド率による半透明合成コピーを
行ないます。ブレンド率は0～256の値となり、256で完全なコピーになります。
ブレンド率が0の場合はコピーは実行されません。
また、ブレンド率が256以上はメモリ間コピーが実行されます。

・モード4 = 透明色付き半透明合成コピー

モード3と同様の方法でコピーを行ないますが、RGB値が color命令で設定され
た色と同じドットは透明色とみなされコピーされません。
ブレンド率が0の場合はコピーは実行されません。

・モード5 = 色加算合成コピー

フルカラーモード時のみ使用することができます。
gmodeの4番目のパラメーターで指定したブレンド率による色加算合成コピーを
行ないます。色加算では、コピー先のRGB値に、コピー元のRGB値を加算します。
加算時に輝度が255を越える場合は、255にクランプされます。

・モード6 = 色減算合成コピー

フルカラーモード時のみ使用することができます。
gmodeの4番目のパラメーターで指定したブレンド率による色減算合成コピーを
行ないます。色減算では、コピー先のRGB値から、コピー元のRGB値を減算しま
す。減算時に輝度が0を下回る場合は、0にクランプされます。

・モード7 = ピクセルアルファブレンドコピー

フルカラーモード時のみ使用することができます。
gmodeで指定されたサイズの画像を、元画像の右側に用意しておき、 右側の画
像をアルファブレンド成分として背景合成コピーを行ないます。
アルファブレンド成分が255の場合は、 そのまま元画像のピクセルがコピーさ
れ、255より小さい場合には、そのブレンド率で背景と合成されます。
ピクセルはRGB単位で参照されるため、RGBに異なるブレンド率を設定可能です。
アルファブレンド画像は、通常 (0,0,0)～(255,255,255) のグレースケールで
表現するといいでしょう。

これらのモードは、gzoom命令では使用されません。
あくまでもgcopy命令使用時なので注意してください。
また、gmodeは現在 gsel命令で選択されているウィンドウIDのモードが変更さ
れます。gmodeの設定後に、別なウィンドウIDでgcopy命令を実行しても設定が
反映されないので注意してください。

(p2,p3)はコピーサイズのデフォルトを設定します。この値は、gcopy,gzoom命
令でコピーする大きさの値を省略した場合にデフォルトで使われるサイズです。
*/
// @ts-expect-error TS(7006): Parameter 'mode' implicitly has an 'any' type.
function gmode(mode, data2, data3, alpha) {
    if (data2 === void 0) { data2 = null; }
    if (data3 === void 0) { data3 = null; }
    if (alpha === void 0) { alpha = null; }
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
/* HSP言語 grotate命令
参照元: http://lhsp.s206.xrea.com/manual/

grotate命令
･画面制御命令
grotate p1,p2,p3,p4,p5,p6		[矩形画像を回転してコピー]
p1=0～(0)   : コピー元のウィンドウID
p2=0～(0)   : コピー元の左上X座標
p3=0～(0)   : コピー元の左上Y座標
p4=0～(0.0) : 回転角度(単位はラジアン)
p5=0～(?)   : Xサイズ
p6=0～(?)   : Yサイズ
grotate命令は、gcopy命令に回転を含めた処理を行ないます。
p1で、コピー元のウィンドウIDを指定、(p2,p3) でコピーされる元の画像にあ
たる座標を指定します。(gcopy命令と同様です)
コピー先は、現在の描画先に指定されているウィンドウIDで、 pos命令で設定
された場所を中心とした座標にコピーを行ないます。その際に、p3で回転角度
を実数で指定することができます。
角度の単位は、ラジアン(0から始まって、2πで一周)となります。
(p5,p6)で、コピーされた後のX,Yサイズを指定します。
また、コピー元のX,Yサイズはgmode命令で設定されたデフォルトのコピーサイ
ズが使用されます。
つまり、gmode命令で指定されたサイズよりも大きなサイズを(p5,p6)で指定し
た場合には、拡大されることになります。
(p5,p6) を省略した場合には、コピー元と同じサイズ、つまり等倍でコピーが
行なわれます。

grotate命令は、gmodeで設定されたコピーモードの指定が反映されます。
(モード7のピクセルアルファブレンドコピーは適用されません。)
透明色の設定や、半透明の設定はすべて gcopy命令でコピーした場合と同等に
機能します。(詳しくはgmode命令のリファレンスを参照)

パレットモード時には半透明処理は実行されません。
また、異なる画面モード(パレットモードとフルカラーモード)間でのコピーは
エラーになります。
*/
// @ts-expect-error TS(7006): Parameter 'org_buffer_id' implicitly has an 'any' ... Remove this comment to see the full error message
function grotate(org_buffer_id, x, y, radian, img_width, img_height) {
    context.save();
    context.translate(x, y);
    context.rotate(radian);
    context.translate(-x, -y);
    gcopy(org_buffer_id, x, y, img_width, img_height);
    context.restore();
}
/* HSP言語 gsel命令
参照元: http://lhsp.s206.xrea.com/manual/

gsel命令
･画面制御命令
gsel p1,p2		[描画先指定、ウィンドウ最前面、非表示設定]
p1=0～(0)  : ウィンドウID
p2=0～2(0) : ウィンドウアクティブスイッチ
画面制御命令の描画先を指定したウィンドウIDの画面に変更します。
これ以降は、p1で指定したウィンドウIDの画面に対して、mes命令やpicload命
令などの画面描画に関する命令が実行されるようになります。

p2でオプションのスイッチが指定できます。p2の値が、

  -1 : 指定したウィンドウを非表示にする
   0 : 指定したウィンドウに特に影響はない
   1 : 指定したウィンドウがアクティブになる
   2 : 指定したウィンドウがアクティブになり、さらに常に最前面になる

のようにウィンドウの状態を変更することができます。
p2の指定を省略した場合は、特に何も影響はありません。

p2=-1で非表示にした場合は、 指定したウィンドウが消えますが完全に消去さ
れるわけではありません。再びp2=1か2でアクティブにすると復帰します。
*/
// @ts-expect-error TS(7006): Parameter 'window_id' implicitly has an 'any' type... Remove this comment to see the full error message
function gsel(window_id, window_mode) {
    if (window_mode === void 0) { window_mode = null; }
    if (window_mode == 1) {
        canvases[window_id].style.display = "block";
    }
    if (window_mode == -1) {
        canvases[window_id].style.display = "none";
    }
    context = contexts[window_id];
    target_window_id = window_id;
}
/* HSP言語 gzoom命令
参照元: http://lhsp.s206.xrea.com/manual/

gzoom p1,p2,p3,p4,p5,p6,p7,p8		[変倍して画面コピー]
p1,p2      : 画面にコピーする時の大きさX,Y（ドット単位）
p3=0～(0)  : ウィンドウID
p4,p5      : コピー元の左上X,Y座標
p6,p7      : コピーする大きさX,Y（ドット単位）
p8=0～1(0) : ズームのモード
gzoom命令は、 指定したウィンドウIDの画面の一部を現在の描画先カレントポ
ジションに、任意の大きさに変倍してコピーします。
コピー元のウィンドウIDは、自分のウィンドウIDと同じかまたは、screen命令
やbuffer命令で初期化されたウィンドウIDでなければなりません。

p8でズームのモードを指定することができます。
p8に1を指定した場合には、 拡大縮小時にハーフトーンを使用した高品質な画
像を生成します。(Windows9Xでは動作しません。)

p8が0か、または省略されている場合は、ハーフトーンを使用しませんが、 そ
のぶん高速に画像処理を行なうことができます。
*/
//let ctx: any;
// @ts-expect-error TS(7006): Parameter 'dst_size_x' implicitly has an 'any' typ... Remove this comment to see the full error message
function gzoom(dst_size_x, dst_size_y, org_buffer_id, x, y, img_width, img_height, mode) {
    if (org_buffer_id == 25) { // ウィンドウIDが25の時
        var ctx = canvases[org_buffer_id].getContext('2d');
        //ctx = canvases[org_buffer_id].getContext('2d');
        var imgd = ctx.getImageData(position[0], position[1], img_width, img_height); // canvasに描かれている画像データ情報を取得
        var pix = imgd.data;
        for (var i = 0, n = pix.length; i < n; i += 4) {
            var grayscale = pix[i] * 0.3 + pix[i + 1] * 0.59 + pix[i + 2] * 0.11;
            pix[i] = grayscale;
            pix[i + 1] = grayscale;
            pix[i + 2] = grayscale;
        }
        context.putImageData(imgd, 0, 0); // プレイ画面をCanvasへ直接描画
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
/* 現在使用していない HSP言語 input命令
参照元: http://lhsp.s206.xrea.com/manual/

input p1,p2,p3,p4		[入力ボックス表示]
p1=変数 : 入力のための変数
p2,p3   : メッセージボックスのサイズ（ドット単位）
p4=0～  : 入力できる最大文字数
カレントポジションにオブジェクトとして入力ボックスを配置します。 p2,p3
で大きさを指定して、場所はカレントポジションからになります。 p2,p3が省
略された場合は、objsizeで指定されたサイズになります。

入力ボックスは、キーボードから直接入力することのできる小さな窓です。マ
ウスで入力ボックスをクリックしてカーソルを出した状態で、キーボードから
パラメータを入力することができるようになります。入力した値は、p1で指定
した変数に代入されます。もし、p1の変数が文字列型だった場合には入力した
文字列が、数値型だった場合には入力した値がそのまま変数に反映されます。

入力ボックスは初期状態では、p1で指定した変数に代入されていた値が、ボッ
クス内に表示されます。

p4で、入力できる最大文字数を指定することができます。p4が省略された場合
には、p1で指定された変数に格納できる最大文字数が自動的に割り当てられます。
(変数が文字列型以外だった場合はデフォルトで32文字までとなります。)
p4を0に指定した場合は、そのバージョンのWindowsで扱える最大文字数が
入力可能になります。

入力ボックスを配置すると、カレントポジションは次の行に自動的に移動します。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function input(data0, data1, data2, data3) { undef_func("input", [data0, data1, data2, data3]); }
/* 現在使用していない HSP言語 instr命令
参照元: http://lhsp.s206.xrea.com/manual/

instr (p1,p2,"string")		[文字列の検索をする]
p1=変数名 : 検索される文字列が格納されている文字列型変数名
p2=0～(0) : 検索を始めるインデックス
"string"  : 検索する文字列
p1で指定した文字列型変数の中に、"string"で指定した文字列があるかどうか
調べて、インデックスを返します。

指定した文字列が見つかった場合には、インデックス値が返されます。これは、
文字列の始まり１文字目を0として、   1,2,3...と順番に増えていくものです
(strmid命令で指定するインデックスと同様です)。
１から始まりではないので注意してください。
(p2を指定した場合、インデックスはp2を起点(0)とするものになります。)
もし、指定した文字列が見つからなかった場合には-1が返されます。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function instr(data0, data1, data2) { undef_func("instr", [data0, data1, data2]); return 0; }
/* HSP言語 int命令
参照元: http://lhsp.s206.xrea.com/manual/

int (p1)		[整数値に変換]
p1 : 変換元の値または変数
p1で指定された値を整数にしたものを返します。
値が実数の場合は、小数点以下が切り捨てられます。
値が文字列の場合は、数値文字列の場合はその数値に、 それ以外は0になりま
す。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function int(data0) {
    return parseInt(data0);
}
/* HSP言語 limit命令
参照元: http://lhsp.s206.xrea.com/manual/

limit (p1,p2,p3)		[一定範囲内の整数を返す]
p1 : 対象となる値
p2 : 最小値
p3 : 最大値
p1に指定した値を、p2～p3の範囲内に収まる整数に変換したものを返します。
p1の値がp2よりも小さい場合は、p2の値が返され、p1の値がp3よりも大きい場
合にはp3の値が返されます。
これにより、limit関数が返す値は、必ずp2～p3の範囲内となります。
実数の範囲を求める場合には、limitf関数を使用してください。
*/
// @ts-expect-error TS(7006): Parameter 'val' implicitly has an 'any' type.
function limit(val, min_val, max_val) {
    return Math.max(min_val, Math.min(val, max_val));
}
/* HSP言語 line命令
参照元: http://lhsp.s206.xrea.com/manual/

line p1,p2,p3,p4		[直線を描画]
p1,p2 : ラインの終点X,Y座標
p3,p4 : ラインの始点X,Y座標
画面上に、(p1,p2)と(p3,p4)を結ぶ直線を描画します。
(p3,p4)を省略した場合は、カレントポジションから(p1,p2)まで、現在設定さ
れている色で直線が描画されます。

line命令実行後は、(p1,p2)の座標がカレントポジションになります。
これにより、連続した直線を描画していくことが可能です。
*/
// @ts-expect-error TS(7006): Parameter 'start_x' implicitly has an 'any' type.
function line(start_x, start_y, end_x, end_y) {
    context.beginPath();
    context.moveTo(start_x, start_y);
    context.lineTo(end_x, end_y);
    context.stroke();
}
/* 現在使用していない HSP言語 listbox命令
参照元: http://lhsp.s206.xrea.com/manual/

listbox p1,p2,p3		[リストボックス表示]
p1=変数      : リストボックスの状態を保持する数値型変数
p2=0～(100)  : 拡張Yサイズ
p3="strings" : リストボックスの内容を示す文字列
カレントポジションにオブジェクトとして、リストボックスを配置します。
リストボックスは、複数の文字列要素の中から１つを選択させることのできる
入力オブジェクトです。
オブジェクトの大きさは、objsize命令で設定した大きさになります。ただし、
p2パラメータで選択時のリスト表示のためのYサイズを指定しなければなりま
せん。 (通常は100～150程度が適当です)

「\n」で区切った文字列をp3で指定することで、選択する要素を設定すること
ができます。
たとえば、「APPLE\nORANGE\nGRAPE」という文字列を指定すると、 「APPLE」
「ORANGE」「GRAPE」の中から１つを選択するリストボックスになります。
それぞれの要素には、0から順番にインデックス番号がついています。 前の例
では、「APPLE」はインデックス0、「ORANGE」はインデックス1、「GRAPE」は
インデックス2というふうに番号がついていきます。

この「\n」で区切るというデータ形式は、メモリノートパッド命令で扱う複数
行テキストデータと同じです。メモリノートパッド命令で作成したデータをそ
のままlistbox命令にも使用できます。

ユーザーが選択をすると、p1で指定した数値型変数にインデックス番号が代入
されます。
最初にリストボックスが配置される際には、p1で設定した変数が示すインデッ
クスが選ばれた状態になります。 (インデックス番号が-1の時は非選択の状態
になります)
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function listbox(data0, data1, data2) { undef_func("listbox", [data0, data1, data2]); }
/* HSP言語 mes命令
参照元: http://lhsp.s206.xrea.com/manual/

mes "strings"		[メッセージ表示]
"strings" : 表示するメッセージ、または変数
ウィンドウ内に、指定されたメッセージを表示します。
メッセージは、カレントポジションと呼ばれるウィンドウ上の仮想的なカーソ
ル位置から表示され、カレントポジションが次の行に自動的に移動します。

表示されるメッセージのフォントは、font命令で指定することができます。
表示するメッセージに改行コードが含まれていた場合には、改行され次の行か
ら表示を続けます。
*/
function mes(text) {
    var ga = context.globalAlpha;
    context.globalAlpha = 1;
    context.fillText(text, position[0], position[1] + line_size * 0.9);
    context.globalAlpha = ga;
    position[1] += line_size;
}
/* 現在使用していない HSP言語 mesbox命令
参照元: http://lhsp.s206.xrea.com/manual/

mesbox p1,p2,p3,p4,p5		[メッセージボックス表示]
p1=変数    : 表示メッセージが代入された文字列型変数
p2,p3      : メッセージボックスのサイズ（ドット単位）
p4=0～(1)  : メッセージボックスのスタイル
p5=0～(-1) : 入力できる最大文字数
ウィンドウ上にオブジェクトとして、 メッセージボックス(メッセージ表示用
の窓)を配置します。p2,p3で大きさを指定して、場所はカレントポジションか
らになります。
メッセージボックスのスタイルに設定する値(p4)は、以下の通りになります。

   値 : 対応するキー
 ---------------------------------------------------------------
    0 : スクロール可能なエディットボックス(書き換え不可)
    1 : スクロール可能なエディットボックス(書き換え可能)
    4 : 横スクロールバー付きエディットボックス(書き換え不可)
    5 : 横スクロールバー付きエディットボックス(書き換え可能)

書き換え可能なエディットボックスを作成すると、ユーザーが好きに文字を入
力できる簡単なテキストエディタになります。

p5で、入力できる最大文字数を指定することができます。
p5が0の場合は、そのバージョンのWindowsで扱える最大文字数になります。
p5が省略されるかマイナス値の場合には、p1で指定された変数に格納できる
最大文字数が自動的に割り当てられます。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function mesbox(data0, data1, data2, data3) { undef_func("mesbox", [data0, data1, data2, data3]); }
/* 現在使用していない HSP言語 mkdir命令
参照元: http://lhsp.s206.xrea.com/manual/

mkdir "dirname"		[ディレクトリ作成]
"dirname" : 作成するディレクトリ名
"dirname"で指定した名前でディレクトリを作成します。
ディレクトリは１階層先までしか作成することができません。
作成中にエラーが発生した場合は
エラー12(「ファイルが見つからないか無効な名前です」)となります。
mkdir命令を実行する前に 必ずdirlist命令でフォルダの有無を
確認するようにしてください。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function mkdir(data0) { undef_func("mkdir", [data0]); }
var selected_note = 0;
var note_data = [];
/* HSP言語 noteadd命令
参照元: http://lhsp.s206.xrea.com/manual/

noteadd p1,p2,p3		[指定行の追加・変更]
p1=文字列  : 追加・変更をする文字列または変数名
p2=0～(-1) : 追加するインデックス
p3=0～1(0) : 上書きモード指定(0=追加・1=上書き)
メモリノートパッドの内容を追加・変更します。

p1に追加・変更するための文字列を指定します。p2で、対象となるインデック
スを指定します。
p2パラメータを省略するか、-1を指定すると最終行が対象になります。
p3パラメータで、追加か上書きかを指定します。省略するか、0を指定すると、
追加モードとなり、対象となるインデックス以降が１つづつシフトします。
p3が1の場合は、上書きモードとなり、 対象となるインデックスの内容は消去
され、指定した文字列に置き換えられます。

noteaddは、 変数バッファにsdim命令などであらかじめ確保された容量を超え
て内容を追加しようとした場合でも、自動的に確保容量を増加させて格納しま
す。つまり、「sdim a,64」 で６４文字までしか記憶できないメモリバッファ
であっても、noteadd命令であれば、 追加するサイズに応じて自動的にメモリ
サイズを調節して安全に記憶させることができます。 (通常の代入命令で行な
った場合はバッファオーバーフローのエラーとなります)

メモリノートパッド命令(noteget,noteadd,notedel,noteinfo)を使用するため
には、最初にnotesel命令で対象となるバッファを設定しなければなりません。
*/
// @ts-expect-error TS(7006): Parameter 'data' implicitly has an 'any' type.
function noteadd(data, line_num, add_type) {
    if (add_type != 1) {
        throw "ERROR @ noteadd";
    }
    note_data[selected_note][line_num] = data;
}
/* HSP言語 notedel命令
参照元: http://lhsp.s206.xrea.com/manual/

notedel p1		[行の削除]
p1=0～ : 削除するインデックス
メモリノートパッドの指定したインデックスを削除します。
p1で指定したインデックスの内容は削除され、以降のインデックスが１つづつ
シフトします。

メモリノートパッド命令(noteget,noteadd,notedel,noteinfo)を使用するため
には、最初にnotesel命令で対象となるバッファを設定しなければなりません。
*/
// @ts-expect-error TS(7006): Parameter 'line_num' implicitly has an 'any' type.
function notedel(line_num) {
    note_data[selected_note].splice(line_num, 1);
}
/* HSP言語 noteget命令
参照元: http://lhsp.s206.xrea.com/manual/

noteget p1,p2		[指定行を読み込み]
p1=変数   : 読み出し先の変数名
p2=0～(0) : 読み出すインデックス
メモリノートパッド内の、p2で指定したインデックスの内容をp1で指定された
変数に代入します。メモリノートパッド内の任意の行にある内容を読み出すこ
とができます。

インデックスは0から始まるので注意してください。
p1で指定する変数には、読み出すのに十分なバッファを確保するのを忘れない
でください。また、p1の変数は強制的に文字列型に変更されます。

メモリノートパッド命令(noteget,noteadd,notedel,noteinfo)を使用するため
には、最初にnotesel命令で対象となるバッファを設定しなければなりません。
*/
// @ts-expect-error TS(7006): Parameter 'line_num' implicitly has an 'any' type.
function noteget(line_num) {
    return note_data[selected_note][line_num];
}
/* HSP言語 noteinfo命令
参照元: http://lhsp.s206.xrea.com/manual/

noteinfo (p1)		[メモリノートパッド情報取得]
p1(0) : 情報取得モード
noteinfo関数は、現在対象となっているメモリノートパッドについての情報を
取得します。
p1で情報取得モードを指定します。また、それぞれのモードに対応したマクロ
が定義されています。

   モード : マクロ    内容
 -----------------------------------------------------------
      0   : notemax   全体の行数
      1   : notesize  全体の文字数(バイト数)

notemaxマクロは、 複数行の文字列ですべての行に対して繰り返し処理を行な
いたい場合などに使用します。
全体の行数とは、つまりメモリノートパッド内にある要素の数です。
「APPLE」「ORANGE」「GRAPE」という行がある場合には、3になります。
この場合、インデックスは0～2までになります。

メモリノートパッド命令(noteget,noteadd,notedel,noteinfo)を使用するため
には、最初にnotesel命令で対象となるバッファを設定しなければなりません
*/
// @ts-expect-error TS(7006): Parameter 'info_type' implicitly has an 'any' type... Remove this comment to see the full error message
function noteinfo(info_type) {
    if (info_type == 0) {
        return note_data[selected_note].length;
    }
    else if (info_type == 1) {
        var sum = 0;
        for (var i in note_data[selected_note]) {
            // @ts-expect-error TS(7005): Variable 'note_data' implicitly has an 'any[]' typ... Remove this comment to see the full error message
            sum += note_data[selected_note][i].length + 1;
        }
        return sum;
    }
}
/* HSP言語 noteload命令
参照元: http://lhsp.s206.xrea.com/manual/

noteload "filename",p1		[対象バッファ読み込み]
"filename" : 読み込みファイル名
p1(-1)     : 読み込みサイズの上限値
指定したファイルをメモリノートパッド命令のバッファに読み込みます。
通常は、テキストファイルを読み込み、メモリノートパッド命令で読み出す対
象とします。メモリノートパッド命令のバッファは、自動的にファイルのサイ
ズに従って確保サイズが調節されるため、バッファのサイズをあらかじめ指定
しておく必要はありません。
p1で、読み込むファイルの最大サイズを指定することができます。
指定を省略またはマイナス値にした場合は、どんなサイズでも読み込みます。
テキストファイル以外のファイルを読み込むことも可能です。
必ず最初にnotesel命令で対象となるバッファを設定する必要があるので注意
してください。
*/
// @ts-expect-error TS(7006): Parameter 'file_name' implicitly has an 'any' type... Remove this comment to see the full error message
function noteload(file_name) {
    note_data[selected_note] = bload(file_name);
}
/* HSP言語 notesave命令
参照元: http://lhsp.s206.xrea.com/manual/

notesave "filename"		[対象バッファ保存]
"filename" : 書き込みファイル名
メモリノートパッド命令のバッファの内容を指定したファイルにテキスト
ファイルとして保存します。
必ず最初にnotesel命令で対象となるバッファを設定する必要があるので注意
してください。
notesave命令は、指定バッファに含まれる文字列の長さで保存します。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function notesave(data0) {
    bsave(data0, note_data[selected_note]);
}
/* HSP言語 notesel命令
参照元: http://lhsp.s206.xrea.com/manual/

notesel p1		[対象バッファ指定]
p1=変数 : バッファを割り当てた変数名
p1で指定した変数をメモリノートパッド命令のバッファに設定します。

p1で指定した変数は、強制的に文字列型に変更されます。
他のメモリノートパッド命令(noteget,noteadd,notedel,noteinfo)を使用する
ためには、最初に notesel命令で対象となるバッファを設定しなければなりま
せん。
*/
// @ts-expect-error TS(7006): Parameter 'note_id' implicitly has an 'any' type.
function notesel(note_id) {
    if (note_id == 0) {
        throw "ERROR @ notesel";
    }
    selected_note = note_id;
}
/* 現在使用していない HSP言語 objinfo命令
参照元: http://lhsp.s206.xrea.com/manual/

objinfo (p1,p2)		[ウィンドウオブジェクト情報の取得]
p1=0～ : ウィンドウオブジェクトID
p2=0～ : 取得するタイプ
現在アクティブなウィンドウに配置されている、特定のウィンドウオブジェク
トに関連する情報値を返します。
p1にウィンドウオブジェクトID、p2に取得タイプを指定することで、該当する
情報データが返されます。
取得できるタイプは以下の通りです。

     0  : モード(下位16bit)及びオプションデータ(上位16bit)
     1  : objectが配置されているBMSCR構造体のポインタ
     2  : ウィンドウオブジェクトのハンドル(HWND)
     3  : owid (内部汎用データ)
     4  : owsize (内部汎用データ)
  5～8  : 代入変数の情報
  9～11 : ウィンドウオブジェクトコールバックの情報

ウィンドウオブジェクト情報は、通常の使用では利用する必要はありません。
外部API(DLL)等にウィンドウオブジェクトのハンドル(HWND)を渡す場合など、
特殊な用途に利用することができます。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function objinfo(data0, data1, data2) {
    if (data2 === void 0) { data2 = null; }
    undef_func("objinfo", [data0, data1, data2]);
}
/* 現在使用していない HSP言語 objmode命令
参照元: http://lhsp.s206.xrea.com/manual/

objmode p1,p2		[オブジェクトモード設定]
p1=0～(0) : オブジェクトフォント設定モード指定
p2=0～1   : フォーカス移動キー指定(0=OFF/1=ON)
button,input,mesbox などのオブジェクト制御命令で使用されるスタイル等を
設定するための命令です。
p1でフォント設定及び、スタイルに関するモードを指定することができます。
これにより、以降のオブジェクト配置命令実行時のスタイル設定が変わります。
モードの値と内容は以下の通りです。

   p1 : モード
 ------------------------------------------------------------
    0 : HSP標準フォントを使用
    1 : デフォルトGUIフォントを使用
    2 : font命令で選択されているフォントを使用

ウィンドウが初期化された直後は、モード1に設定されています。

モード2に変更した場合は、 font命令で指定したフォントが使われるようにな
ります。これは、オブジェクト制御命令が実行される時点で、設定されている
フォントが使用されます。 objmode命令が実行された時点のフォントではない
ので注意してください。

p2で、[TAB]キーによるオブジェクトのフォーカス移動モードの ON/OFFを行な
います。 p2を1に指定した場合は、表示されているオブジェクトの入力フォー
カスを[TAB]キーで移動することができます。
p2のモード指定を省略した場合は、以前のモードを引き継ぎます。

  p2 : モード
 --------------------------------------------------------------
  0  : [TAB]を無効にする
  1  : [TAB]キーによるオブジェクトのフォーカス移動可能(標準)
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function objmode(data0, data1) { undef_func("objmode", [data0, data1]); }
/* 現在使用していない HSP言語 objprm命令
参照元: http://lhsp.s206.xrea.com/manual/

objprm p1,p2		[オブジェクトの内容を変更]
p1=0～(0) : オブジェクトID指定
p2        : 変更するパラメータの内容
button命令やinput,mesbox命令などで画面上に配置したオブジェクトの持つ内
容やパラメータを変更します。

p1には、オブジェクトIDを指定します。オブジェクトIDは、 0から順番に画面
上に表示したオブジェクト１つ１つに割り当てられていく番号です。
オブジェクトIDは、オブジェクトを配置する命令実行後にシステム変数statに
代入されています(通常置いた順番に0,1,2…の番号が割り当てられます)。

ここで指定されたオブジェクトをp2で指定したパラメータで変更します。
p2で指定するパラメータはオブジェクトの種類によって異なります。オブジェ
クトによって、文字列を指定するものや、数値を指定するものが分かれていま
す。詳細は下の表を参照してください。

     オブジェクト      : p2の指定
 ----------------------------------------------------------
  ボタン               : ボタン文字列の変更(文字列)
  入力ボックス(数値)   : 入力内容の変更(数値)
  入力ボックス(文字列) : 入力内容の変更(文字列)
  チェックボックス     : チェックのON/OFF(数値)
  コンボボックス       : コンボボックスの内容変更(文字列)
  リストボックス       : リストボックスの内容変更(文字列)

たとえば、チェックボックスを示すIDを指定してから、p2のパラメータに１を
指定
すると、チェックボックスを強制的にONの状態に変更します。この場合、チェ
ックボックスの内容を保持する変数の値も自動的に書き換えられます。

入力ボックスの内容を変更した場合には、自動的に入力ボックスに入力フォー
カスが設定され、ボックス内にカーソルが表示されます。
*/
// もっぱらアイテム欄行の更新に使用されている。アイテムを使用した時や、捨てた際にアイテム欄の各行に格納されているアイテム表示を更新する 
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function objprm(data0, data1) { undef_func("objprm", [data0, data1]); }
/* 現在使用していない HSP言語 objsel命令
参照元: http://lhsp.s206.xrea.com/manual/

objsel p1		[オブジェクトに入力フォーカスを設定]
p1=0～(0) : オブジェクトID指定
p1で指定したオブジェクトIDに入力フォーカスを合わせます。
入力フォーカスを合わせることにより、 mesbox命令やinput命令で配置した入
力ボックスの中に入力カーソル(キャレット)を出すことができます。この命令
は、複数の入力ボックスで任意の場所に入力フォーカスを合わせたい場合や、
次の入力ボックスにキー入力などで移動するような処理を行なうためのもので
す。また、p1に-1を指定した場合は、現在、入力フォーカスが合っているオブ
ジェクトIDをシステム変数statに代入します。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function objsel(data0) { undef_func("objsel", [data0]); }
/* HSP言語 objsize命令
参照元: http://lhsp.s206.xrea.com/manual/

objsize p1,p2,p3		[オブジェクトサイズ設定]
p1=0～(64)  : オブジェクトのX方向のサイズ（ドット単位）
p2=0～(24)  : オブジェクトのY方向のサイズ（ドット単位）
p3=0～(0)   : Y方向の最低確保行サイズ (ドット単位)
ボタンや入力ボックスなどを配置する時のオブジェクトの大きさを設定します。

p3でボタンやメッセージが置かれた後にカレントポジションが移動する最低量
を指定することができます。これにより、ボタンとメッセージを連続して置い
た時に同じ大きさでスペースが空くようになります。

画面がクリアされると、オブジェクトサイズは自動的にデフォルトに戻ります。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function objsize(data0, data1) {
    if (data1 === void 0) { data1 = null; }
    undef_func("objsize", [data0, data1]);
}
/* 現在使用していない HSP言語 oncmd命令
参照元: http://lhsp.s206.xrea.com/command/oncmd.html

指定したウィンドウメッセージがWindowsから通知された際のラベルジャンプ先を指定しておく命令です。命令名の由来は、「on command」から。
*/
// @ts-expect-error TS(7006): Parameter 'func' implicitly has an 'any' type.
function oncmd_gosub(func, event_id) { undef_func("oncmd_gosub", [func, event_id]); }
/* HSP言語 onexit goto命令
参照元: https://docs.hsp.moe/3.6/reference/_builtin/onexit/

クローズボックス(ウィンドウ右上の終了ボタン)を押した時に、自動的にジャンプする場所を指定します。

onexitの後に続けて、 gotoまたはgosubキーワードを指定してからラベルを記述します。
gotoの場合には、単純なプログラムジャンプ。 gosubの場合はサブルーチンジャンプを行ないます。
*/
// @ts-expect-error TS(7006): Parameter 'func' implicitly has an 'any' type.
function onexit_goto(func) {
    window.onbeforeunload = func;
}
/* 現在使用していない HSP言語 onexit命令
参照元: http://lhsp.s206.xrea.com/manual/

クローズボックス(ウィンドウ右上の終了ボタン)を押した時に、自動的にジャンプする場所を指定します。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function onexit(data0) { undef_func("onexit", [data0]); }
/* 現在使用していない HSP言語 onkey命令
参照元: http://lhsp.s206.xrea.com/command/onkey.html

キーボードのキー押し割り込み動作を設定する命令です。
HSPのウィンドウがアクティブ状態である時、キー押しが行われた場合に指定したラベルへジャンプします。
マウスクリックの場合はonclick命令が用意されてます。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function onkey(data0) { undef_func("onkey", [data0]); }
/* 現在使用していない HSP言語 palette命令
参照元: http://lhsp.s206.xrea.com/manual/

palette p1,p2,p3,p4,p5		[パレット設定]
p1=0～255(0)       : パレットコード
p2,p3,p4=0～255(0) : 色コード（R,G,Bの輝度）
p5=0～1(0)         : 更新スイッチ
現在の画面に設定されているパレットの色データを変更します。
p1のパレットコードにp2,p3,p4で指定した輝度のRGBカラーを設定します。
p1の値がマイナスの場合は、設定は無視されます。
p5の値によって、画面上の更新を指定することができます。
p5が0か省略されている時は、パレットに値を設定しますが、 すぐには画面上
に反映されません。
p5が1の時は、設定したパレット全体が画面上にも反映されます。
画面上に反映されるまでには時間がかかるため、パレットをまとめて更新する
場合には、一番最後に更新スイッチを1にするようにしてください。
*/
// @ts-expect-error TS(7006): Parameter 'data0' implicitly has an 'any' type.
function palette(data0, data1, data2, data3, data4) {
    if (data3 === void 0) { data3 = null; }
    if (data4 === void 0) { data4 = null; }
    undef_func("palette", [data0, data1, data2, data3, data4]);
}
/* HSP言語 peek命令
参照元: http://lhsp.s206.xrea.com/manual/

変数に保存されたデータメモリ上の任意の場所にある1バイト(8bit)の内容を
数値として返します。
関数の戻り値は、0～255までの整数値になります。

peek (p1,p2)		[バッファから1byte読み出し]
p1=変数 : 内容を読み出す元の変数名
p2=0～  : バッファのインデックス(Byte単位)
*/
// @ts-expect-error TS(7006): Parameter 'string_data' implicitly has an 'any' ty... Remove this comment to see the full error message
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
/* HSP言語 picload命令
参照元: http://lhsp.s206.xrea.com/manual/

画像ファイルをロードします。通常は、
picload "test.bmp"
とするだけで、"test.bmp"で指定された画像ファイルが現在の画

picload "filename",p1		[画像ファイルをロード]
"filename" : ロードするファイル名
p1=0～1(0) : 画像ロードモード
*/
function picload(img_name) {
    return __awaiter(this, void 0, void 0, function () {
        var img;
        return __generator(this, function (_a) {
            img = new Image();
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    // @ts-expect-error TS(2794): Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
                    img.onload = function () { return resolve(); };
                    img.onerror = reject;
                    //img.src = __dirname + "../data/img/" + img_name + ".png";
                    img.src = "../assets/img/" + img_name + ".png";
                }).then(function () {
                    canvases[target_window_id].width = img.width;
                    canvases[target_window_id].height = img.height;
                    contexts[target_window_id] = canvases[target_window_id].getContext('2d');
                    contexts[target_window_id].drawImage(img, 0, 0); // canvasの一番左上へ描画
                })["catch"](function () {
                    alert("データの読み込みに失敗しました。");
                })];
        });
    });
}
/* HSP言語 poke命令
参照元: http://lhsp.s206.xrea.com/manual/

poke p1,p2,p3		[バッファに1byte書き込み]
p1=変数 : バッファを割り当てた変数名
p2=0～  : バッファのインデックス(Byte単位)
p3(0)   : バッファに書き込む値 または 文字列(Byte単位)
変数に保存されたデータメモリ上の任意の場所にある 1バイトの内容を書き換
えます。

p1で指定した変数のバッファ上で、p2で指定したインデックスの場所にp3の値
を書き込みます。値は0～255までの1バイト(8bit)値になります。

p3に文字列を指定した場合には、文字列データをメモリに展開し、
strsizeに、書き込まれた文字列の長さを返します。
*/
function poke(data0, data1, data2) { undef_func("poke", [data0, data1, data2]); }
/* HSP言語 pos命令
参照元: http://lhsp.s206.xrea.com/manual/

pos p1,p2		[カレントポジション設定]
p1,p2 : カレントポジションのX,Y座標
メッセージ表示、オブジェクトの表示などの基本座標となるカレントポジショ
ンの座標を指定します。

Xは一番左が0に、Yは上が0になり、1ドット単位の指定になります。
パラメータの省略をすると、現在の値が使われます。
*/
function pos(x, y) {
    position = [x, y];
}
/* HSP言語 pset命令
参照元: http://lhsp.s206.xrea.com/manual/

pset p1,p2		[1dotの点を表示]
p1,p2 : 画面上のX,Y座標
画面上に現在設定されている描画色で1ドットの点を描画します。
*/
function pset(pos_x, pos_y) {
    context.beginPath();
    context.arc(pos_x, pos_y, 1, 0, 6.28, false);
    context.fill();
}
/* 現在使用していない HSP言語 randomize命令
参照元: http://lhsp.s206.xrea.com/manual/

randomize p1		[乱数発生の初期化]
p1=0～(不定) : 乱数の初期化パラメーター
rnd関数で発生させる乱数のパターンを初期化します。

p1に同じ値を指定して初期化された乱数は、常に同じパターンで乱数を発生さ
せられます。p1を省略した場合は、 Windowsのタイマから得られた不定な値を
使って初期化します。これによって、毎回まったく違う乱数を発生させること
ができます。
*/
function randomize() { undef_func("randomize"); }
/* HSP言語 redraw命令
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
/* HSP言語 rnd命令
参照元: http://lhsp.s206.xrea.com/command/rnd.html
乱数を発生させる。
rnd(数値)

第１パラメータに乱数発生範囲を指定する。指定できる数値は「1～32768」。
たとえば、１００を指定したならば、「０～９９」の範囲でバラバラな数値が返る。
*/
function rnd(num) {
    return Math.floor(Math.random() * num); // Math.floor は対象の値の小数点以下を切り捨て
}
/* HSP言語 screen命令
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
//let display_width: number = 340;
//let display_height: number = 340;
function screen_(id, display_width, display_height, init_mode, pos_x, pos_y) {
    if (pos_x === void 0) { pos_x = null; }
    if (pos_y === void 0) { pos_y = null; }
    if (id == 0) {
        display_width = 340;
        display_height = 340;
        canvasSize = display_width;
        document.getElementById("pad").style.top = "720px";
    }
    buffer(id, display_width, display_height, init_mode);
    canvases[id].style.top = pos_x;
    canvases[id].style.left = pos_y;
    document.body.appendChild(canvases[id]);
    canvases[id].style.display = "none";
}
/* 現在使用していない HSP言語 sendmsg命令
参照元: http://lhsp.s206.xrea.com/manual/

sendmsg p1,p2,p3,p4,p5		[ウィンドウメッセージの送信]
p1(0) : ウィンドウハンドル
p2(0) : メッセージID
p3(0) : wParam値
p4(0) : lParam値
p5(0) : lParamの取得モード
p1で指定したウィンドウハンドルに対して、 p2のメッセージとp3,p4のパラメ
ーターを送信します。

p1で指定するウィンドウハンドルの値は、 HSPのウィンドウであれば
システム変数hwndを、HSPのウィンドウオブジェクトの場合はobjinfo関数により
取得することができます。

p3をwParam、p4をlParamの情報としてウィンドウメッセージが送信されます。
p3パラメーターは、整数値を指定することが可能です。
p4パラメーターには、整数値、文字列、変数のいずれかを指定することができます。
整数値の場合は、値そのものをlParamとして扱います。
文字列の場合は、文字列ポインタ値をlParamとして扱います。
p4が変数の場合にのみ、扱うモードをp5で指定することができます。
p5が0の場合は、変数の情報が格納されているメモリポインタ値をlParamとして
扱います。p5が0以外の場合には、変数が保存している整数値をlParamとして
扱うことになります。

この命令は、 HSPの命令がサポートしていないウィンドウオブジェクトに対し
てWindowsのメッセージを送信するためのものです。
外部DLLとのやり取りや、 モジュール作成に使用するもので通常覚えておく必
要はありません。
*/
function sendmsg(data0, data1, data2, data3) { undef_func("sendmsg", [data0, data1, data2, data3]); }
/* HSP言語 sdim命令
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
// @ts-expect-error TS(7006): Parameter 'length1' implicitly has an 'any' type.
function sdim(length1, length2, length3) {
    if (length2 === void 0) { length2 = null; }
    if (length3 === void 0) { length3 = null; }
    if (length2 == null) {
        return "";
    }
    var return_list = [];
    for (var i = 0; i < length2; i++) {
        if (length3 != null) {
            return_list[i] = [];
            for (var j = 0; j < length3; j++) {
                // @ts-expect-error TS(2542): Index signature in type 'string | never[]' only pe... Remove this comment to see the full error message
                return_list[i][j] = "";
            }
        }
        else {
            return_list[i] = "";
        }
    }
    return return_list;
}
/* HSP言語 stick命令
参照元: http://lhsp.s206.xrea.com/manual/

stick p1,p2,p3		[キー入力情報取得]
p1=変数    : 読み込むための変数
p2=0～(0)  : 非トリガータイプキー指定
p3=0～1(1) : ウィンドウアクティブチェックON/OFF
よく使われるキーボード及びマウスボタンの状態をまとめてチェックして変数
に代入します。

stick命令が実行されると以下のような複数のボタン情報が１つの数値として、
p1で指定した変数に代入されます。

    1 : カーソルキー左(←)
    2 : カーソルキー上(↑)
    4 : カーソルキー右(→)
    8 : カーソルキー下(↓)
   16 : スペースキー
   32 : Enterキー
   64 : Ctrlキー
  128 : ESCキー
  256 : マウスの左ボタン
  512 : マウスの右ボタン
 1024 : TABキー

何もボタンが押されていない場合には0が代入されます。

もし複数のボタンが同時に押されていた場合には、それらの数値がすべて加算
されます。たとえば、カーソルキーの右とスペースキーが同時に押されている
場合には、4+16の20が変数に読み込まれます。この数値をif命令などでチェッ
クする場合には、演算子「&」が役に立ちます。

例 :
    stick a,0            ; 変数aにキー状態を読み出し
    if a&16 : goto *spc  ; スペースが押されたか?
    if a&32 : goto *ent  ; Enterが押されたか?

このように「変数&キー情報」で複数のボタン情報が入った数値から、 １つだ
けのキー情報を取り出すことができます。

stick命令は、 getkey命令によく似ていますが、最大の違いはボタンが押され
た瞬間だけを検出する点です。つまり、ボタンが押された時に１度だけ押され
ている情報を返し、あとは押されているボタンをはなすまでは、押されている
ことになりません。

ただし、p2の非トリガータイプキー指定により、押しっぱなしであっても情報
を検出することができるようになります。

p2に押しっぱなしでも検出されるキーのコード(上の表にあるコードです。 複
数の場合はそれぞれの数値を加えます)を指定すると、 そのキーだけはボタン
が押されている間ずっと検出されるようになります。

この命令は、非常に複雑に見えますがキーを使ったスクリプトを作る際にとて
も便利な機能となるでしょう。たとえば、シューティングゲームを思い浮かべ
てみてください。自分の機体は上下左右の方向にボタンが押されている間ずっ
と移動しなければなりません。しかし、ミサイルを発射するボタンは１回押し
てはなすまでは次の弾は発射されません。このような場合には、上下左右のキ
ーだけは非トリガータイプのキーに指定して、それ以外は１度だけ押された情
報を返すようにすればいいわけです。

また、p3でウィンドウがアクティブでない場合は入力を無効にする機能をON/OFF
することができます。
p3が1か省略された場合は、HSPウィンドウがアクティブでない場合にはキー入
力が無効になります。
p3が0の場合は、すべての状況下でキー入力を行ないます。
*/
function stick(data0, data1) { undef_func("stick", [data0, data1]); return 0; }
/* 現在使用していない HSP言語 strmid命令
参照元: http://lhsp.s206.xrea.com/manual/

strmid (p1,p2,p3)		[文字列の一部を取り出す]
p1=変数名  : 取り出すもとの文字列が格納されている変数名
p2=-1～(0) : 取り出し始めのインデックス
p3=0～(0)  : 取り出す文字数
p1で指定した文字列型変数の中から、 p2,p3で指定した条件で文字を取り出し
たものを返します。
p2で取り出し始めるインデックスを指定します。これは、文字列の始まり１文
字目を0として、1,2,3...と順番に増えていくものです。
１から始まりではないので注意してください。
p3で取り出す文字数を指定します。実際に格納されている文字数よりも多く指
定した場合は、実際の文字数までが取り出されます。
また、p2に-1を指定すると文字列の右からp3で指定した文字数だけ取り出しま
す。
*/
function strmid(data0, data1, data2) { undef_func("strmid", [data0, data1, data2]); }
/* HSP言語 title命令
参照元: http://lhsp.s206.xrea.com/manual/

title "strings"		[タイトルバー設定]
"strings" : 指定する文字列
p1の指定が省略されている場合には、ウィンドウのタイトルバーキャプション
を、"strings"の内容に設定します。
(タイトルバーキャプションは、「Hot Soup Processor ver3.x」と通常は表示
されている部分のことです)

例 ：
    title "Window Title"

上の例では、「Window Title」という文字をウィンドウのタイトルバーに表示
します。
*/
function title(window_name) {
    if (target_window_id == 0) {
        document.title = window_name;
    }
}
/* HSP言語 wait命令
参照元: https://docs.hsp.moe/3.6/reference/_builtin/wait/

wait p1

p1(100) : 待ち時間(10ms単位)
解説
プログラムの実行を一定時間だけ中断します。

p1に待ち時間の長さを指定します。単位は10ミリ秒になります。(1ミリ秒=1/1000秒)
CPUの速度に関係なく、どんな機種でも同じ待ち時間になります。

await命令を使うとwait命令よりも高精度で細かいウエイトが可能ですが、wait命令よりもCPUのタスクを消費します。
リアルタイムに画像を書き換えるなどの処理でなければ、 wait命令を使用した方がCPU(Windows)の負担が軽くなります。
常にデスクトップに配置するようなアクセサリにはwait命令を、ゲームアプリケーションなどにはawait命令を使うといった使い分けをするといいでしょう。

HSPでは、他のWindowsタスクに処理時間を渡すために長い時間ループが起こる可能性がある場所にはwaitかawait命令を入れることを推奨しています。
waitや await命令がない命令の中を長い時間ループするようなプログラムを実行すると、ウィンドウをドラッグしにくくなったり、他のタスクに移るのに時間がかかったりします。
*/
// @ts-expect-error TS(7006): Parameter 'time' implicitly has an 'any' type.
function wait(time) {
    // @ts-expect-error TS(2794): Expected 1 arguments, but got 0. Did you forget to... Remove this comment to see the full error message
    return new Promise(function (resolve, reject) { setTimeout(function () { return resolve(); }, 10 * time); });
}
/* HSP言語 width命令
参照元: http://lhsp.s206.xrea.com/manual/

width p1,p2,p3,p4		[ウィンドウサイズ設定]
p1,p2 : クライアントエリアのサイズX,Y（1ドット単位）
p3,p4 : ディスプレイ上でのウィンドウX,Y座標（1ドット単位）
ウィンドウのクライアントサイズ(実際に表示される大きさ)とウィンドウ表示
位置を変更します。
クライアントサイズは、screen命令やbuffer,bgscr命令で初期化された画面サ
イズより大きくすることはできません。

p1,p2およびp3,p4パラメータが省略された場合は、現在の設定が使われます。
*/
//function width(data0:any, data1:any) { undef_func("width", [data0, data1]); }
function width(width, height) {
    //screen_(null, width, height, null);
    /*
        mainWindow.resizeTo(width, height);
        if (width == 340) {
            context.scale(1, 1);
        }
        if (width == 680) {
            context.scale(2, 2);
        }
    */
}
/// ↓↓↓ ここからHSP言語のライブラリ機能 ↓↓↓
function HMMINIT(data0) {
    stat = 1;
}
function DSLOADMEMORY(audio_data, audio_id) {
    se[audio_id] = audio_data;
}
function DSPLAY(audio_id) {
    if (audio_id === void 0) { audio_id = null; }
    se[audio_id].currentTime = 0;
    se[audio_id].play();
}
function DSSETVOLUME(se_id, volume) {
    se[se_id].volume = volume / 1000;
}
function DSGETMASTERVOLUME() { }
var bgm_volume = 0.1;
// Ver 0.1307で追加。BGM音量調整関数。
function DSSETMASTERVOLUME(volume_size) {
    bgm_volume = document.getElementById(bgm_source1).volume = volume_size / 1000;
}
// Ver 0.1305で追加
var music_id = "102.mp3";
var bgm_source1;
var bgm_source2;
function DMLOADMEMORY(music_id, data0, data1) {
    // Ver 0.1305で追加
    // bgm音源の更新
    if (bgm_source1 != null) {
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
//const audioElem;
function DMPLAY(data0, data1) {
    // Ver 0.1307で音量調整用に修正。
    document.getElementById(bgm_source1).volume = bgm_volume;
    // Ver 0.1305で追加
    document.getElementById(bgm_source1).play();
}
function DMSTOP() {
    // Ver 0.1305で追加
    document.getElementById(bgm_source1).pause();
    //audioElem.pause();
}
/* youtubeからのbgmリンクを使用しないのでコメントアウト
function DMLOADMEMORY(music_id, data0, data1) {
    const music_list = {
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
    const link_id = music_list[music_id.split(".")[0]];
    if (link_id) {
        const a_tug = (document.getElementById("bgmlink"));
        a_tug.href = "https://www.youtube.com/watch?v=" + link_id;
        const iframe = document.getElementById("bgm");
        iframe.src = "https://www.youtube.com/embed/" + link_id;
    } else {
        const a_tug = (document.getElementById("bgmlink"));
        a_tug.href = "";
        const iframe = document.getElementById("bgm");
        iframe.src = "";
    }
}
*/
function ck_joystick(data0, data1) {
    if (data1 === void 0) { data1 = null; }
    return 0;
}
function netclose(data0, data1, data2, data3) {
    if (data1 === void 0) { data1 = null; }
    if (data2 === void 0) { data2 = null; }
    if (data3 === void 0) { data3 = null; }
}
function netfail(data0, data1, data2, data3) {
    if (data1 === void 0) { data1 = null; }
    if (data2 === void 0) { data2 = null; }
    if (data3 === void 0) { data3 = null; }
}
function netinit(data0, data1, data2, data3) { }
function tcpopen(data0, data1, data2) { }
function tcpiscon(data0) { }
function tcpcount(data0, data1) { }
function tcpgetl(data0, data1, data2) { }
function tcpput(data0, data1) { }
function GetWindowLongA(data1, ata2) { }
function SetWindowLongA(data1, data2, data3) { }
function SetWindowPos(hwnd, data1, data2, data3, data4, data5, data6) { }
function ShowWindow(id, state) { }
function ImmGetContext(arg1) { }
function ImmSetOpenStatus(arg1, arg2) { }
function ImmReleaseContext(arg1, arg2) { }
function ImmGetOpenStatus(arg1) { }
/*
let change_scale: any;

function ChangeScale() {
        if (change_scale.percent === window.devicePixelRatio) {
            let scale: any = document.documentElement.clientWidth;
            scale = scale / change_scale.container;
            scale = "scale(" + scale + ")";
            document.body.style.transform = scale;
        } else {
            change_scale.percent = window.devicePixelRatio;
        }
    }
*/
// この関数をgetkey(123)のところに設ける？
//window.addEventListener("resize", ChangeScale)
//# sourceMappingURL=adapter.js.map