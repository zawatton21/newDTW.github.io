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
var ipcRenderer = require('electron').ipcRenderer;
var myResizeBtn = document.getElementById('resizeBtn');
function makepal() {
    var_0 = 0;
    var_1 = 0;
    for (var cnt1_1 = 0; cnt1_1 < 2; ++cnt1_1) {
        var_2 = cnt1_1 * 32;
        for (var cnt2_1 = 0; cnt2_1 < 120; ++cnt2_1) {
            var_3 = limit(cnt2_1 % 5 * 64 + var_2, 0, 255);
            var_4 = limit(Math.floor(cnt2_1 / 5) % 5 * 64 + var_2, 0, 255); // Math.floor は対象の値の小数点以下を切り捨て
            var_5 = limit(Math.floor(cnt2_1 / 25) % 5 * 64 + var_2, 0, 255); // Math.floor は対象の値の小数点以下を切り捨て
            if (var_3 == var_4 && var_4 == var_5 && var_5 == var_3) {
                palette(data0 = var_1, data1 = var_3, data2 = var_4, data3 = var_5, data4 = null);
                var_1++;
            }
        }
    }
    for (var cnt3_1 = var_1; cnt3_1 < 15 + var_1; ++cnt3_1) {
        palette(data0 = cnt3_1, data1 = var_0, data2 = var_0, data3 = var_0, data4 = 254);
        var_0 += 16;
    }
    return;
}
/*
function func001() {
    dbgprt(1);
    func004();
    return;
}
*/
function imeset(prm_2546) {
    var_6 = ImmGetContext(hwnd);
    ImmSetOpenStatus(var_6, prm_2546);
    ImmReleaseContext(hwnd, var_6);
    return;
}
function imeget() {
    var_6 = ImmGetContext(hwnd);
    var_7 = ImmGetOpenStatus(var_6);
    ImmReleaseContext(hwnd, var_6);
    return var_7;
}
// おそらくイニシャル処理 (datファイル読み込み, 画面サイズ設定, 各画像データ読み込み等)
function func004() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_2, cnt1_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(4);
                    HMMINIT(3);
                    if (stat == 0) {
                        end();
                    }
                    var_8 = 0;
                    var_9 = 0;
                    // 00.datファイルの存在確認
                    exist("00.dat");
                    if (strsize >= 1) {
                        var_10 = bload(file_name = "00.dat", data_size = null, offset = 20);
                        var_8 = bload(file_name = "00.dat", data_size = null, offset = 40);
                        var_9 = bload(file_name = "00.dat", data_size = null, offset = 60);
                        var_11 = bload(file_name = "00.dat", data_size = null, offset = 80);
                    }
                    if (var_11 != 1) {
                        var_11 = 0;
                    }
                    var_12 = 0;
                    version_number = "0.13"; //ログイン時に下に表示される。見えにくいので末尾の数字は削除
                    game_title = "newDTW ver0.1308";
                    buffer(17);
                    return [4 /*yield*/, picload("img3.gif")];
                case 1:
                    _a.sent();
                    buffer(26, 680, 680);
                    screen_(2, 1, 1, 2, -100, -100);
                    title(game_title);
                    oncmd_gosub(func897, 161);
                    GetWindowLongA(hwnd, -16);
                    SetWindowLongA(hwnd, -16, stat || (-2147483648));
                    SetWindowPos(hwnd, 0, 0, 0, 0, 0, 38);
                    var_15 = hwnd;
                    var_16 = var_8 + 150;
                    var_17 = var_9 + 150;
                    if (var_16 >= ginfo(20)) {
                        var_8 = 0;
                    }
                    if (var_17 >= ginfo(21)) {
                        var_9 = 0;
                    }
                    if (var_8 < 0) {
                        var_8 = 0;
                    }
                    if (var_9 < 0) {
                        var_9 = 0;
                    }
                    screen_(0, 680, 680, 2, var_8, var_9);
                    title(game_title);
                    oncmd_gosub(func897, 161);
                    SetWindowLongA(hwnd, -8, var_15);
                    gsel(2, 1);
                    gsel(0, 1);
                    if (var_10 == 0) {
                        width(340, 340);
                    }
                    if (var_10 == 1) {
                        width(680, 680);
                    }
                    color(0, 0, 0);
                    boxf();
                    return [4 /*yield*/, wait(50)];
                case 2:
                    _a.sent();
                    var_18 = 0;
                    cnt1_2 = 0;
                    _a.label = 3;
                case 3:
                    if (!(cnt1_2 < 25)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func138()];
                case 4:
                    _a.sent();
                    var_18 = var_18 + 10;
                    _a.label = 5;
                case 5:
                    ++cnt1_2;
                    return [3 /*break*/, 3];
                case 6:
                    var_18 = 255;
                    return [4 /*yield*/, func138()];
                case 7:
                    _a.sent();
                    var_19 = 0;
                    var_20 = 50;
                    var_21 = "＊＊＊＊";
                    var_22 = "＊＊＊＊";
                    var_23 = 1;
                    var_24 = "＊＊＊＊";
                    randomize();
                    return [4 /*yield*/, wait(1)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, func242()];
                case 9:
                    _a.sent();
                    var_25[1] = 255;
                    var_26[1] = 255;
                    var_27[1] = 255;
                    var_25[2] = 255;
                    var_26[2] = 150;
                    var_27[2] = 255;
                    var_25[3] = 255;
                    var_26[3] = 0;
                    var_27[3] = 0;
                    var_25[4] = 130;
                    var_26[4] = 255;
                    var_27[4] = 130;
                    var_25[5] = 100;
                    var_26[5] = 160;
                    var_27[5] = 190;
                    var_25[6] = 255;
                    var_26[6] = 255;
                    var_27[6] = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_28 = dim(length1 = 10, length2 = 10, length3 = null, length4 = null);
                    var_29 = dim(length1 = 300, length2 = 10, length3 = null, length4 = null);
                    return [4 /*yield*/, func241()];
                case 10:
                    _a.sent();
                    var_30 = dirinfo(0);
                    var_31 = 56;
                    var_32 = 38;
                    var_33 = var_31;
                    var_34 = var_32 - 1;
                    var_35 = 40;
                    var_36 = 40;
                    var_37 = 6;
                    var_38 = 6;
                    var_39 = "";
                    var_40 = "name";
                    var_41 = 3;
                    var_42 = 20;
                    var_43 = 10;
                    var_44 = 35;
                    var_45 = 65;
                    var_46 = 90;
                    var_47 = 130;
                    var_48 = 182;
                    var_49 = 172;
                    var_50 = 162;
                    var_51 = 195;
                    var_52 = 208;
                    var_53 = 306;
                    var_54 = 295;
                    var_55 = 284;
                    var_56 = 272;
                    var_57 = 260;
                    var_58 = 248;
                    var_59 = 320;
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 11:
                    _a.sent();
                    buffer(id = 3, disp_width = null, disp_height = null, mode = null);
                    return [4 /*yield*/, picload("img_mychara.gif")];
                case 12:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 13:
                    _a.sent();
                    buffer(id = 4, disp_width = 340, disp_height = 300, mode = null);
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 14:
                    _a.sent();
                    buffer(id = 5, disp_width = null, disp_height = null, mode = null);
                    return [4 /*yield*/, picload("img_map.gif")];
                case 15:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 16:
                    _a.sent();
                    buffer(id = 6, disp_width = null, disp_height = null, mode = null);
                    return [4 /*yield*/, picload("img_enemy1a.gif")];
                case 17:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 18:
                    _a.sent();
                    buffer(id = 7, disp_width = 340, disp_height = 300, mode = null);
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 19:
                    _a.sent();
                    buffer(id = 8, disp_width = null, disp_height = null, mode = null);
                    return [4 /*yield*/, picload("img1.gif")];
                case 20:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 21:
                    _a.sent();
                    buffer(9);
                    return [4 /*yield*/, picload("img_item.gif")];
                case 22:
                    _a.sent();
                    buffer(id = 10, disp_width = 340, disp_height = 200, mode = null);
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 23:
                    _a.sent();
                    buffer(11);
                    return [4 /*yield*/, picload("img_stand0.gif")];
                case 24:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 25:
                    _a.sent();
                    buffer(id = 12, disp_width = 340, disp_height = 340, mode = null);
                    color(0, 0, 200);
                    boxf(left = 0, top1 = 0, right = 340, bottom = 340);
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 26:
                    _a.sent();
                    buffer(13);
                    return [4 /*yield*/, picload("img_enemy4a.gif")];
                case 27:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 28:
                    _a.sent();
                    buffer(14);
                    return [4 /*yield*/, picload("img_wana.gif")];
                case 29:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 30:
                    _a.sent();
                    buffer(15);
                    return [4 /*yield*/, picload("img_enemy1b.gif")];
                case 31:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 32:
                    _a.sent();
                    buffer(18);
                    return [4 /*yield*/, picload("img4.gif")];
                case 33:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 34:
                    _a.sent();
                    buffer(1);
                    return [4 /*yield*/, picload("img_stand1.gif")];
                case 35:
                    _a.sent();
                    buffer(id = 19, disp_width = 340, disp_height = 340, mode = null);
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 36:
                    _a.sent();
                    buffer(20);
                    return [4 /*yield*/, picload("img_enemy4b.gif")];
                case 37:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 38:
                    _a.sent();
                    buffer(21);
                    return [4 /*yield*/, picload("img_enemy2a.gif")];
                case 39:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 40:
                    _a.sent();
                    buffer(22);
                    return [4 /*yield*/, picload("img_enemy2b.gif")];
                case 41:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 42:
                    _a.sent();
                    buffer(23);
                    return [4 /*yield*/, picload("img_comic.gif")];
                case 43:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 44:
                    _a.sent();
                    buffer(id = 24, disp_width = 340, disp_height = 340, mode = 0);
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 45:
                    _a.sent();
                    buffer(id = 25, disp_width = 340, disp_height = 340, mode = 1);
                    makepal();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 46:
                    _a.sent();
                    buffer(27);
                    return [4 /*yield*/, picload("img_enemy3a.gif")];
                case 47:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 48:
                    _a.sent();
                    buffer(28);
                    return [4 /*yield*/, picload("img_enemy3b.gif")];
                case 49:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 50:
                    _a.sent();
                    buffer(29);
                    return [4 /*yield*/, picload("img_stand3.gif")];
                case 51:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 52:
                    _a.sent();
                    buffer(16);
                    return [4 /*yield*/, picload("img_stand2.gif")];
                case 53:
                    _a.sent();
                    buffer(34);
                    return [4 /*yield*/, picload("img_syageki.gif")];
                case 54:
                    _a.sent();
                    buffer(35);
                    return [4 /*yield*/, picload("img_effect.gif")];
                case 55:
                    _a.sent();
                    var_60++;
                    return [4 /*yield*/, func138()];
                case 56:
                    _a.sent();
                    buffer(id = 36, disp_width = 340, disp_height = 340, mode = null);
                    buffer(32, 200, 200);
                    return [4 /*yield*/, func183()];
                case 57:
                    _a.sent(); // デバックウィンドウ呼び出し？
                    return [4 /*yield*/, func081()];
                case 58:
                    _a.sent(); // 効果音を呼び出す関数(効果音リスト1)
                    return [4 /*yield*/, func082()];
                case 59:
                    _a.sent(); // 効果音を呼び出す関数(効果音リスト2)
                    return [4 /*yield*/, func083()];
                case 60:
                    _a.sent(); // 効果音上限設定処理 (最大値:137)
                    DSGETMASTERVOLUME();
                    bgm_volume = stat;
                    gsel(0);
                    var_18 = 255;
                    cnt1_3 = 0;
                    _a.label = 61;
                case 61:
                    if (!(cnt1_3 < 25)) return [3 /*break*/, 64];
                    return [4 /*yield*/, func138()];
                case 62:
                    _a.sent();
                    var_18 = var_18 - 10;
                    _a.label = 63;
                case 63:
                    ++cnt1_3;
                    return [3 /*break*/, 61];
                case 64:
                    color(0, 0, 0);
                    boxf();
                    return [4 /*yield*/, wait(50)];
                case 65:
                    _a.sent(); // 動作確認タイマ 50ms
                    onexit(func231);
                    gsel(0);
                    return [4 /*yield*/, func139()];
                case 66:
                    _a.sent(); // データ読込み処理(00.datファル、01 ~ 03.datセーブデータ解析処理)
                    return [2 /*return*/];
            }
        });
    });
}
// セーブデータを読み込む前のフラグ確認処理(ホテルのイベントフラグ、BGM再生曲、マップ背景画像)
function func005() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(5);
                    onexit(1);
                    return [4 /*yield*/, func229()];
                case 1:
                    _a.sent(); // セーブファイルからデータ読み出し関数
                    if (!(dangeon_number == 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func159()];
                case 2:
                    _a.sent(); // ヴェネチアホテルでのイベントフラグ管理処理
                    return [2 /*return*/];
                case 3: return [4 /*yield*/, func107()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, func076()];
                case 5:
                    _a.sent(); // マップ背景画像の読込
                    cnt1_4 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt1_4 < 80)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func339()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    ++cnt1_4;
                    return [3 /*break*/, 6];
                case 9:
                    var_63 = 0;
                    if (!(var_64 == 0)) return [3 /*break*/, 12];
                    onexit(1);
                    var_65[var_66][var_67] = 1;
                    var_68 = 1;
                    return [4 /*yield*/, func331()];
                case 10:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    return [4 /*yield*/, func009()];
                case 11:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 12: return [4 /*yield*/, func006()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func006() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(6);
                    if (!(dangeon_number == 4)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func458()];
                case 1:
                    _a.sent(); // 恐竜の化石に関するもの(一巡後の世界のみで効果があるようになっている)
                    if (var_69 == 1 && var_70 == 0) {
                        var_70 = 7;
                    }
                    _a.label = 2;
                case 2: return [4 /*yield*/, func243()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func007()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 配列宣言？？
function func007() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(7);
                    var_71 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_72 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_74 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_75 = dim(20);
                    var_76 = dim(length1 = 100, length2 = 5, length3 = 3, length4 = null);
                    var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_78 = ItemInfo.dim(300);
                    var_79 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_80 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_81 = dim(length1 = 300, length2 = 7, length3 = null, length4 = null);
                    var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_83 = CharactorInfo.dim(300);
                    var_84 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_85 = 0;
                    if (!(var_86 != 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func246()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(var_86 == 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func244()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(var_86 != 0)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func253()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
                case 6: return [4 /*yield*/, func008()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func008() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_5, cnt2_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(8);
                    if (!(var_86 != 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func249()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    var_87 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_88 = 1;
                    for (cnt1_5 = 0; cnt1_5 < var_32; ++cnt1_5) {
                        var_89 = 1;
                        for (cnt2_2 = 0; cnt2_2 < var_31; ++cnt2_2) {
                            var_87[var_89][var_88] = rnd(10);
                            var_89++;
                        }
                        var_88++;
                    }
                    var_90 = rnd(40);
                    if (var_90 == 6) {
                        var_90 = 1;
                    }
                    if (current_floor <= 2) {
                        var_90 = 0;
                    }
                    // No = 1 なので、ホテルの外
                    if (dangeon_number == 1) {
                        if (current_floor <= 2) {
                            var_92 = 15;
                        }
                        if (current_floor >= 3 && current_floor <= 5) {
                            var_92 = 19;
                        }
                        if (current_floor >= 6 && current_floor <= 8) {
                            var_92 = 11;
                        }
                        if (current_floor >= 9 && current_floor <= 11) {
                            var_92 = 4;
                        }
                        if (current_floor == 12) {
                            var_92 = 7;
                            var_90 = 0;
                        }
                    }
                    // No = 2 なので、レクイエムの大迷宮
                    if (dangeon_number == 2) {
                        if (current_floor >= 1 && current_floor <= 5) {
                            var_92 = 3;
                        }
                        if (current_floor >= 5 && current_floor <= 8) {
                            var_92 = 6;
                        }
                        if (current_floor >= 9 && current_floor <= 11) {
                            var_92 = 2;
                        }
                        if (current_floor >= 12 && current_floor <= 14) {
                            var_92 = 5;
                        }
                        if (current_floor >= 15 && current_floor <= 19) {
                            var_92 = 4;
                        }
                        if (current_floor >= 20 && current_floor <= 22) {
                            var_92 = 24;
                        }
                        if (current_floor >= 23 && current_floor <= 25) {
                            var_92 = 20;
                        }
                        if (current_floor >= 26) {
                            var_92 = 12;
                        }
                    }
                    // No = 3 なので、ディアボロの試練、No = 4 なので、一巡後の世界
                    if (dangeon_number == 3 || dangeon_number == 4) {
                        var_93 = rnd(16);
                        if (var_93 == 0) {
                            var_92 = 2;
                        }
                        if (var_93 == 1) {
                            var_92 = 3;
                        }
                        if (var_93 == 2) {
                            var_92 = 6;
                        }
                        if (var_93 == 3) {
                            var_92 = 5;
                        }
                        if (var_93 == 4) {
                            var_92 = 4;
                        }
                        if (var_93 == 5) {
                            var_92 = 8;
                            var_90 = 0;
                        }
                        if (var_93 == 6) {
                            var_92 = 18;
                        }
                        if (var_93 == 7) {
                            var_92 = 13;
                        }
                        if (var_93 == 8) {
                            var_92 = 14;
                        }
                        if (var_93 == 9) {
                            var_92 = 12;
                        }
                        if (var_93 == 10) {
                            var_92 = 21;
                        }
                        if (var_93 == 11) {
                            var_92 = 20;
                        }
                        if (var_93 == 12) {
                            var_92 = 11;
                        }
                        if (var_93 == 13) {
                            var_92 = 13;
                        }
                        if (var_93 == 14) {
                            var_92 = 24;
                        }
                        if (var_93 == 15) {
                            var_92 = 9;
                        }
                        // No = 3 なので、ディアボロの試練
                        if (dangeon_number == 3 && current_floor >= 90) {
                            var_92 = 22;
                        }
                        // No = 3 なので、ディアボロの試練
                        if (dangeon_number == 3 && current_floor == 99) {
                            var_92 = 2;
                        }
                    }
                    if (dangeon_number == 5) {
                        var_93 = rnd(14);
                        if (var_93 == 0) {
                            var_92 = 2;
                        }
                        if (var_93 == 1) {
                            var_92 = 3;
                        }
                        if (var_93 == 2) {
                            var_92 = 6;
                        }
                        if (var_93 == 3) {
                            var_92 = 5;
                        }
                        if (var_93 == 4) {
                            var_92 = 4;
                        }
                        if (var_93 == 5) {
                            var_92 = 8;
                            var_90 = 0;
                        }
                        if (var_93 == 6) {
                            var_92 = 18;
                        }
                        if (var_93 == 7) {
                            var_92 = 13;
                        }
                        if (var_93 == 8) {
                            var_92 = 14;
                        }
                        if (var_93 == 9) {
                            var_92 = 12;
                        }
                        if (var_93 == 10) {
                            var_92 = 21;
                        }
                        if (var_93 == 11) {
                            var_92 = 20;
                        }
                        if (var_93 == 12) {
                            var_92 = 24;
                        }
                        if (var_93 == 13) {
                            var_92 = 9;
                        }
                        var_92 = 22;
                    }
                    if (var_94 == 1) {
                        var_92 = 8;
                        var_90 = 0;
                    }
                    if (var_94 == 2) {
                        var_92 = 25;
                        var_90 = 0;
                    }
                    if (var_94 == 3) {
                        var_92 = 14;
                        var_90 = 0;
                    }
                    if (var_94 == 5) {
                        var_92 = 1;
                        var_90 = 0;
                    }
                    if (var_94 == 6) {
                        var_92 = 3;
                        var_90 = 0;
                    }
                    if (var_94 == 7) {
                        var_92 = 16;
                        var_90 = 0;
                    }
                    if (var_94 == 8) {
                        var_92 = 1;
                        var_90 = 0;
                    }
                    if (var_94 == 9) {
                        var_92 = 7;
                        var_90 = 0;
                    }
                    if (var_86 == 0) {
                        var_90 = 0;
                    }
                    if (!(var_90 == 1 && var_95 != 0)) return [3 /*break*/, 4];
                    var_90 = 0;
                    return [4 /*yield*/, func254()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(dangeon_number == 1 && current_floor <= 2)) return [3 /*break*/, 6];
                    var_90 = 99;
                    return [4 /*yield*/, func255()];
                case 5:
                    _a.sent();
                    var_90 = 0;
                    _a.label = 6;
                case 6:
                    if (!(dangeon_number == 2 && current_floor == 28 && var_86 != 0)) return [3 /*break*/, 8];
                    var_90 = 99;
                    return [4 /*yield*/, func255()];
                case 7:
                    _a.sent();
                    var_90 = 0;
                    _a.label = 8;
                case 8:
                    if (!(dangeon_number == 2 && current_floor == 29 && var_86 != 0)) return [3 /*break*/, 10];
                    var_90 = 99;
                    return [4 /*yield*/, func255()];
                case 9:
                    _a.sent();
                    var_90 = 0;
                    _a.label = 10;
                case 10:
                    if (!(var_90 >= 2 && var_90 <= 6)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func255()];
                case 11:
                    _a.sent();
                    var_90 = 0;
                    _a.label = 12;
                case 12: return [4 /*yield*/, func720()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, func045()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, func383()];
                case 15:
                    _a.sent(); // アイテムの出現数を増やす動作処理
                    return [4 /*yield*/, func393()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, func391()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, func535()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, func537()];
                case 19:
                    _a.sent();
                    if (!(var_96 >= 1)) return [3 /*break*/, 21];
                    return [4 /*yield*/, func392()];
                case 20:
                    _a.sent();
                    _a.label = 21;
                case 21: return [4 /*yield*/, func046()];
                case 22:
                    _a.sent();
                    var_97 = 0;
                    return [4 /*yield*/, func562()];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, func560()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, func563()];
                case 25:
                    _a.sent();
                    if (!(dangeon_number == 5)) return [3 /*break*/, 27];
                    return [4 /*yield*/, func564()];
                case 26:
                    _a.sent();
                    _a.label = 27;
                case 27: return [4 /*yield*/, func555()];
                case 28:
                    _a.sent();
                    if (!(var_96 >= 1)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func561()];
                case 29:
                    _a.sent();
                    _a.label = 30;
                case 30:
                    var_98 = 0;
                    var_99 = 0;
                    var_100 = 0;
                    var_101 = 0;
                    var_102 = 0;
                    var_103 = 0;
                    var_104 = 0;
                    var_105 = 0;
                    var_106 = 0;
                    count_buying_price = 0;
                    var_108 = 0;
                    var_109 = 0;
                    var_110 = 0;
                    var_111 = 0;
                    var_112 = 0;
                    var_113 = 0;
                    var_114 = 0;
                    var_115 = 0;
                    var_116 = 0;
                    var_117 = 0;
                    var_118 = 0;
                    var_119 = 0;
                    var_120 = 0;
                    var_121 = 0;
                    var_122 = 0;
                    var_123 = 0;
                    var_124 = 0;
                    var_125 = 0;
                    var_126 = 0;
                    var_127 = 0;
                    var_128 = 0;
                    var_129 = 0;
                    var_130 = 0;
                    var_131 = 0;
                    var_132 = 0;
                    var_133 = 0;
                    var_134 = 0;
                    var_135 = 0;
                    var_136 = 0;
                    var_137 = 0;
                    var_138 = 0;
                    var_139 = 0;
                    var_140 = 0;
                    var_141 = 0;
                    var_142 = 0;
                    var_143 = 0;
                    var_144 = 0;
                    var_145 = 0;
                    var_146 = 0;
                    var_147 = 0;
                    var_148 = 0;
                    var_149 = 0;
                    var_150 = 0;
                    var_151 = 0;
                    var_152 = 0;
                    var_153 = 0;
                    var_154 = 0;
                    var_155 = 0;
                    if (var_156[396] == 0) {
                        var_157 = 0;
                        var_158 = 0;
                    }
                    var_159 = 0;
                    var_160 = 0;
                    var_161 = 0;
                    var_162 = 0;
                    var_163 = 0;
                    var_164 = 0;
                    var_165 = 0;
                    var_166 = 0;
                    var_167 = 0;
                    var_168 = 0;
                    var_169 = 0;
                    var_170 = 0;
                    var_171 = 0;
                    var_172 = 0;
                    var_173 = 0;
                    var_174 = 0;
                    var_175 = 0;
                    var_176 = 0;
                    var_177 = 0;
                    var_178 = 0;
                    var_179 = 0;
                    var_180 = 0;
                    var_181 = 0;
                    var_182 = 0;
                    var_183 = 0;
                    var_184 = 0;
                    var_185 = 0;
                    var_186 = 0;
                    var_187 = 0;
                    var_188 = 0;
                    var_189 = 0;
                    var_190 = 0;
                    var_191 = 0;
                    var_192 = 0;
                    var_193 = 0;
                    var_194 = 0;
                    var_195 = 0;
                    var_196 = 0; // Mフラグ:メニュー画面 func054
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    var_198 = 0;
                    var_65[var_66][var_67] = 1;
                    var_199 = 2;
                    if (var_92 == 15 || var_92 == 19 || var_92 == 11 || var_92 == 23 || var_92 == 25) {
                        var_103 = 1;
                    }
                    if (var_94 == 5 || var_94 == 7 || var_94 == 9) {
                        var_103 = 1;
                    }
                    if (var_200 == var_201 && var_201 != 14) {
                        var_98 = 1;
                    }
                    if (var_202 == var_201 && var_201 != 14) {
                        var_99 = 1;
                    }
                    var_68 = 1;
                    return [4 /*yield*/, func331()];
                case 31:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    if (!(dangeon_number == 1 && current_floor == 12 && var_203 == 0)) return [3 /*break*/, 33];
                    return [4 /*yield*/, func118()];
                case 32:
                    _a.sent();
                    _a.label = 33;
                case 33:
                    if (!(dangeon_number == 1 && current_floor == 12 && var_203 == 1)) return [3 /*break*/, 35];
                    return [4 /*yield*/, func119()];
                case 34:
                    _a.sent();
                    _a.label = 35;
                case 35:
                    if (!(dangeon_number == 1 && current_floor == 12 && var_203 == 2)) return [3 /*break*/, 37];
                    return [4 /*yield*/, func120()];
                case 36:
                    _a.sent();
                    _a.label = 37;
                case 37:
                    if (!(dangeon_number == 1 && current_floor == 12 && var_203 == 3)) return [3 /*break*/, 39];
                    return [4 /*yield*/, func121()];
                case 38:
                    _a.sent();
                    _a.label = 39;
                case 39:
                    if (!(dangeon_number == 2 && current_floor == 30)) return [3 /*break*/, 41];
                    return [4 /*yield*/, func117()];
                case 40:
                    _a.sent();
                    _a.label = 41;
                case 41:
                    if (!(dangeon_number == 3 && current_floor == 99)) return [3 /*break*/, 43];
                    return [4 /*yield*/, func116()];
                case 42:
                    _a.sent();
                    _a.label = 43;
                case 43:
                    if (!(var_96 >= 1 && var_201 == var_204)) return [3 /*break*/, 45];
                    return [4 /*yield*/, func074()];
                case 44:
                    _a.sent();
                    _a.label = 45;
                case 45:
                    if (!(dangeon_number == 1 && current_floor == 12 && var_203 == 0)) return [3 /*break*/, 47];
                    return [4 /*yield*/, func075()];
                case 46:
                    _a.sent();
                    _a.label = 47;
                case 47:
                    if (!(dangeon_number == 2 && current_floor == 30)) return [3 /*break*/, 49];
                    return [4 /*yield*/, func075()];
                case 48:
                    _a.sent();
                    _a.label = 49;
                case 49:
                    if (!(dangeon_number == 3 && current_floor == 99)) return [3 /*break*/, 51];
                    return [4 /*yield*/, func075()];
                case 50:
                    _a.sent();
                    _a.label = 51;
                case 51:
                    if (!(var_94 >= 1)) return [3 /*break*/, 53];
                    return [4 /*yield*/, func075()];
                case 52:
                    _a.sent();
                    _a.label = 53;
                case 53:
                    var_205 = 1;
                    return [4 /*yield*/, func231()];
                case 54:
                    _a.sent();
                    var_206 = 0;
                    if (!(var_207 == 2)) return [3 /*break*/, 56];
                    var_207 = 0;
                    return [4 /*yield*/, func152()];
                case 55:
                    _a.sent(); // 初めてダンジョンを訪れた際のディアボロの呟き
                    _a.label = 56;
                case 56: return [4 /*yield*/, func009()];
                case 57:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
            }
        });
    });
}
// ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
function func009() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_3, cnt2_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(9);
                    var_208 = 0;
                    var_209 = 0;
                    var_210 = 0;
                    if (var_211 <= 0) {
                        var_212 = 1;
                    }
                    if (!(var_212 == 1)) return [3 /*break*/, 2];
                    var_213 = 0;
                    var_214 = 0;
                    return [4 /*yield*/, func672()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    if (!(var_71[var_66][var_67] == 13 && var_215 != 202 && var_215 != 117 && var_125 == 0)) return [3 /*break*/, 4];
                    var_216 = 1;
                    var_213 = 0;
                    var_214 = 0;
                    DSPLAY(audio_id = 216);
                    return [4 /*yield*/, func499()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(var_71[var_66][var_67] == 0 && var_159 == 0)) return [3 /*break*/, 6];
                    var_216 = 1;
                    var_213 = 0;
                    var_214 = 0;
                    DSPLAY(audio_id = 216);
                    return [4 /*yield*/, func499()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(var_151 >= 1)) return [3 /*break*/, 12];
                    var_217 = 1;
                    var_213 = 0;
                    var_214 = 0;
                    cnt2_3 = 0;
                    _a.label = 7;
                case 7:
                    if (!(cnt2_3 < 10)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func337()];
                case 8:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 9;
                case 9:
                    ++cnt2_3;
                    return [3 /*break*/, 7];
                case 10: return [4 /*yield*/, func019()];
                case 11:
                    _a.sent(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return [2 /*return*/];
                case 12:
                    if (!(var_116 == 2)) return [3 /*break*/, 14];
                    var_116 = 0;
                    var_213 = 0;
                    var_214 = 0;
                    return [4 /*yield*/, func027()];
                case 13:
                    _a.sent(); // 動けるようになった時の表示
                    _a.label = 14;
                case 14: return [4 /*yield*/, func337()];
                case 15:
                    _a.sent(); // メッセージ関係呼び出し
                    if (!(var_218 >= 1 && var_218 < 30)) return [3 /*break*/, 17];
                    var_217 = 1;
                    var_213 = 0;
                    var_214 = 0;
                    return [4 /*yield*/, func019()];
                case 16:
                    _a.sent(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return [2 /*return*/];
                case 17:
                    if (!(var_218 >= 30)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func032()];
                case 18:
                    _a.sent();
                    if (!(var_211 <= 0)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func009()];
                case 19:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 20:
                    if (!(var_218 != 0)) return [3 /*break*/, 22];
                    var_217 = 1;
                    var_213 = 0;
                    var_214 = 0;
                    return [4 /*yield*/, func019()];
                case 21:
                    _a.sent(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return [2 /*return*/];
                case 22:
                    if (!(var_128 >= 1)) return [3 /*break*/, 24];
                    var_213 = 0;
                    var_214 = 0;
                    return [4 /*yield*/, func022()];
                case 23:
                    _a.sent(); // 氷状態の動作処理
                    return [2 /*return*/];
                case 24:
                    if (!(var_219 >= 1)) return [3 /*break*/, 26];
                    var_213 = 0;
                    var_214 = 0;
                    return [4 /*yield*/, func025()];
                case 25:
                    _a.sent(); // 寝ている時の動作処理
                    return [2 /*return*/];
                case 26:
                    if (!(var_178 >= 1)) return [3 /*break*/, 28];
                    var_213 = 0;
                    var_214 = 0;
                    return [4 /*yield*/, func021()];
                case 27:
                    _a.sent(); // 波紋攻撃を喰らって麻痺している状態の動作処理
                    return [2 /*return*/];
                case 28:
                    if (!(var_213 == 1 && var_214 == 0)) return [3 /*break*/, 34];
                    cnt2_4 = 0;
                    _a.label = 29;
                case 29:
                    if (!(cnt2_4 < 5)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func337()];
                case 30:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 31;
                case 31:
                    ++cnt2_4;
                    return [3 /*break*/, 29];
                case 32:
                    var_213 = 0;
                    var_198 = 0;
                    var_195 = 0;
                    var_196 = 0; // Mフラグ:メニュー画面 func054
                    open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    var_221 = 1;
                    var_222 = 1;
                    var_223 = var_224 + 10;
                    var_225 = var_226;
                    // アイテム個数 var_225 が10以下であれば
                    if (var_225 <= 10) {
                        item_page_number = 1;
                        Y_axis_item_position = (var_225 - 1) * 22 + 45;
                        var_229 = 44;
                        var_230 = 45;
                    }
                    // アイテム個数 var_225 が10より多ければ
                    if (var_225 > 10) {
                        item_page_number = 2;
                        Y_axis_item_position = (var_225 - 11) * 22 + 45;
                        var_229 = 44;
                        var_230 = 45;
                    }
                    // アイテム個数 var_225 が0であれば
                    if (var_225 == 0) {
                        item_page_number = 3;
                        Y_axis_item_position = 45;
                        var_229 = 44;
                        var_230 = 45;
                        var_231 = 1;
                        var_222 = 10;
                    }
                    belongings_item_list = var_233[var_225].Var0;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音 
                    return [4 /*yield*/, func462()];
                case 33:
                    _a.sent(); // アイテムidごとに区分分け関数
                    return [2 /*return*/];
                case 34:
                    var_213 = 0;
                    var_214 = 0;
                    var_234 = 0;
                    if (!(var_12 == 1)) return [3 /*break*/, 36];
                    conf_keyon = getkey(122); // キーA入力確認
                    if (!(conf_keyon == 1)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func184()];
                case 35:
                    _a.sent();
                    return [2 /*return*/];
                case 36:
                    var_236 = var_66;
                    var_237 = var_67;
                    if (!(var_139 >= 1)) return [3 /*break*/, 38];
                    return [4 /*yield*/, func079()];
                case 37:
                    _a.sent();
                    return [2 /*return*/];
                case 38:
                    if (!(var_144 >= 1)) return [3 /*break*/, 40];
                    return [4 /*yield*/, func079()];
                case 39:
                    _a.sent();
                    return [2 /*return*/];
                case 40: return [4 /*yield*/, func080(false)];
                case 41:
                    _a.sent(); // 各キー入力確認 OFF?
                    if (!(key_Shift_on == 1)) return [3 /*break*/, 43];
                    return [4 /*yield*/, func013()];
                case 42:
                    _a.sent();
                    return [2 /*return*/];
                case 43:
                    if (!(key_X_on == 1 && var_71[var_66][var_67] != 0)) return [3 /*break*/, 45];
                    return [4 /*yield*/, func014()];
                case 44:
                    _a.sent();
                    return [2 /*return*/];
                case 45:
                    if (key_X_on == 0) {
                        var_240 = 0;
                        var_241 = 0;
                    }
                    if (!(key_Z_on == 1)) return [3 /*break*/, 47];
                    var_243 = 1;
                    return [4 /*yield*/, func635()];
                case 46:
                    _a.sent();
                    return [2 /*return*/];
                case 47:
                    if (!(key_A_on == 1)) return [3 /*break*/, 50];
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    var_195 = 1;
                    var_196 = 1; // Mフラグ:メニュー画面 func054
                    var_245 = 19;
                    var_246 = 45;
                    var_247 = 1;
                    var_248 = 1;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 48:
                    _a.sent();
                    return [4 /*yield*/, func053()];
                case 49:
                    _a.sent(); // メニュー画面呼び出し
                    return [2 /*return*/];
                case 50:
                    if (!(key_S_on == 1)) return [3 /*break*/, 52];
                    var_225 = var_250;
                    var_251 = 1;
                    return [4 /*yield*/, func647()];
                case 51:
                    _a.sent(); // 射撃攻撃動作処理
                    return [2 /*return*/];
                case 52:
                    if (!(key_C_on == 1)) return [3 /*break*/, 55];
                    return [4 /*yield*/, func051()];
                case 53:
                    _a.sent();
                    return [4 /*yield*/, func010()];
                case 54:
                    _a.sent();
                    return [2 /*return*/];
                case 55:
                    if (!(var_253 == 1)) return [3 /*break*/, 57];
                    var_66 = var_66 - 1;
                    var_67 = var_67 - 1;
                    var_199 = 7;
                    return [4 /*yield*/, func015()];
                case 56:
                    _a.sent();
                    return [2 /*return*/];
                case 57:
                    if (!(var_254 == 1 && var_255 == 1)) return [3 /*break*/, 59];
                    var_66 = var_66 - 1;
                    var_67 = var_67 - 1;
                    var_199 = 7;
                    return [4 /*yield*/, func015()];
                case 58:
                    _a.sent();
                    return [2 /*return*/];
                case 59:
                    if (!(var_256 == 1)) return [3 /*break*/, 61];
                    var_66 = var_66 + 1;
                    var_67 = var_67 - 1;
                    var_199 = 9;
                    return [4 /*yield*/, func015()];
                case 60:
                    _a.sent();
                    return [2 /*return*/];
                case 61:
                    if (!(var_257 == 1 && var_255 == 1)) return [3 /*break*/, 63];
                    var_66 = var_66 + 1;
                    var_67 = var_67 - 1;
                    var_199 = 9;
                    return [4 /*yield*/, func015()];
                case 62:
                    _a.sent();
                    return [2 /*return*/];
                case 63:
                    if (!(var_258 == 1)) return [3 /*break*/, 65];
                    var_66 = var_66 - 1;
                    var_67 = var_67 + 1;
                    var_199 = 1;
                    return [4 /*yield*/, func015()];
                case 64:
                    _a.sent();
                    return [2 /*return*/];
                case 65:
                    if (!(var_254 == 1 && var_259 == 1)) return [3 /*break*/, 67];
                    var_66 = var_66 - 1;
                    var_67 = var_67 + 1;
                    var_199 = 1;
                    return [4 /*yield*/, func015()];
                case 66:
                    _a.sent();
                    return [2 /*return*/];
                case 67:
                    if (!(var_260 == 1)) return [3 /*break*/, 69];
                    var_66 = var_66 + 1;
                    var_67 = var_67 + 1;
                    var_199 = 3;
                    return [4 /*yield*/, func015()];
                case 68:
                    _a.sent();
                    return [2 /*return*/];
                case 69:
                    if (!(var_257 == 1 && var_259 == 1)) return [3 /*break*/, 71];
                    var_66 = var_66 + 1;
                    var_67 = var_67 + 1;
                    var_199 = 3;
                    return [4 /*yield*/, func015()];
                case 70:
                    _a.sent();
                    return [2 /*return*/];
                case 71:
                    if (!(var_254 == 1)) return [3 /*break*/, 73];
                    var_66 = var_66 - 1;
                    var_199 = 4;
                    return [4 /*yield*/, func015()];
                case 72:
                    _a.sent();
                    return [2 /*return*/];
                case 73:
                    if (!(var_257 == 1)) return [3 /*break*/, 75];
                    var_66 = var_66 + 1;
                    var_199 = 6;
                    return [4 /*yield*/, func015()];
                case 74:
                    _a.sent();
                    return [2 /*return*/];
                case 75:
                    if (!(var_255 == 1)) return [3 /*break*/, 77];
                    var_67 = var_67 - 1;
                    var_199 = 8;
                    return [4 /*yield*/, func015()];
                case 76:
                    _a.sent();
                    return [2 /*return*/];
                case 77:
                    if (!(var_259 == 1)) return [3 /*break*/, 79];
                    var_67 = var_67 + 1;
                    var_199 = 2;
                    return [4 /*yield*/, func015()];
                case 78:
                    _a.sent();
                    return [2 /*return*/];
                case 79:
                    if (!(var_261 == 1 && var_262 == 0)) return [3 /*break*/, 81];
                    return [4 /*yield*/, func044()];
                case 80:
                    _a.sent();
                    return [2 /*return*/];
                case 81: return [4 /*yield*/, func009()];
                case 82:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
            }
        });
    });
}
function func010() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(10);
                    var_263 = dim(10);
                    var_264 = var_66 - 1;
                    if (var_264 < 0) {
                        var_264 = 0;
                    }
                    var_265 = var_66 + 1;
                    if (var_265 > var_33) {
                        var_265 = var_33;
                    }
                    var_266 = var_67 - 1;
                    if (var_266 < 0) {
                        var_266 = 0;
                    }
                    var_267 = var_67 + 1;
                    if (var_267 > var_34) {
                        var_267 = var_34;
                    }
                    return [4 /*yield*/, func011()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func011() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(11);
                    var_268 = 0;
                    if (!(var_156[316] == 0)) return [3 /*break*/, 2];
                    if (!(var_127 == 0 && var_132 == 0)) return [3 /*break*/, 2];
                    if (var_263[0] == 0 && var_263[1] == 0 && var_82[var_264][var_267] > 0) {
                        var_269 = var_82[var_264][var_267];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                                var_199 = 1;
                                var_263[1] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[2] == 0 && var_82[var_66][var_267] > 0) {
                        var_269 = var_82[var_66][var_267];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                                var_199 = 2;
                                var_263[2] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[3] == 0 && var_82[var_265][var_267] > 0) {
                        var_269 = var_82[var_265][var_267];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                                var_199 = 3;
                                var_263[3] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[4] == 0 && var_82[var_264][var_67] > 0) {
                        var_269 = var_82[var_264][var_67];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                                var_199 = 4;
                                var_263[4] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[6] == 0 && var_82[var_265][var_67] > 0) {
                        var_269 = var_82[var_265][var_67];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                                var_199 = 6;
                                var_263[6] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[7] == 0 && var_82[var_264][var_266] > 0) {
                        var_269 = var_82[var_264][var_266];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                                var_199 = 7;
                                var_263[7] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[8] == 0 && var_82[var_66][var_266] > 0) {
                        var_269 = var_82[var_66][var_266];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                                var_199 = 8;
                                var_263[8] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[9] == 0 && var_82[var_265][var_266] > 0) {
                        var_269 = var_82[var_265][var_266];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var31 != 5 && var_83[var_269].Var0 != 50) {
                                var_199 = 9;
                                var_263[9] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (!(var_263[0] == 0)) return [3 /*break*/, 2];
                    if (!(var_263[1] == 1 || var_263[2] == 1 || var_263[3] == 1 || var_263[4] == 1 || var_263[6] == 1 || var_263[7] == 1 || var_263[8] == 1 || var_263[9] == 1)) return [3 /*break*/, 2];
                    var_268 = 0;
                    var_263 = dim(10);
                    return [4 /*yield*/, func011()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    if (!(var_156[316] == 1)) return [3 /*break*/, 4];
                    if (!(var_127 == 0 && var_132 == 0)) return [3 /*break*/, 4];
                    if (var_263[0] == 0 && var_263[1] == 0 && var_82[var_264][var_267] > 0) {
                        var_269 = var_82[var_264][var_267];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var0 != 50) {
                                var_199 = 1;
                                var_263[1] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[2] == 0 && var_82[var_66][var_267] > 0) {
                        var_269 = var_82[var_66][var_267];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var0 != 50) {
                                var_199 = 2;
                                var_263[2] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[3] == 0 && var_82[var_265][var_267] > 0) {
                        var_269 = var_82[var_265][var_267];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var0 != 50) {
                                var_199 = 3;
                                var_263[3] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[4] == 0 && var_82[var_264][var_67] > 0) {
                        var_269 = var_82[var_264][var_67];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var0 != 50) {
                                var_199 = 4;
                                var_263[4] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[6] == 0 && var_82[var_265][var_67] > 0) {
                        var_269 = var_82[var_265][var_67];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var0 != 50) {
                                var_199 = 6;
                                var_263[6] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[7] == 0 && var_82[var_264][var_266] > 0) {
                        var_269 = var_82[var_264][var_266];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var0 != 50) {
                                var_199 = 7;
                                var_263[7] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[8] == 0 && var_82[var_66][var_266] > 0) {
                        var_269 = var_82[var_66][var_266];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var0 != 50) {
                                var_199 = 8;
                                var_263[8] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_263[0] == 0 && var_263[9] == 0 && var_82[var_265][var_266] > 0) {
                        var_269 = var_82[var_265][var_266];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var0 != 50) {
                                var_199 = 9;
                                var_263[9] = 1;
                                var_263[0] = 1;
                                var_268 = var_269;
                            }
                        }
                    }
                    if (!(var_263[0] == 0)) return [3 /*break*/, 4];
                    if (!(var_263[1] == 1 || var_263[2] == 1 || var_263[3] == 1 || var_263[4] == 1 || var_263[6] == 1 || var_263[7] == 1 || var_263[8] == 1 || var_263[9] == 1)) return [3 /*break*/, 4];
                    var_268 = 0;
                    var_263 = dim(10);
                    return [4 /*yield*/, func011()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, func012()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func012() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(12);
                    var_271 = 1;
                    var_272 = 1;
                    var_273 = 0;
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent(); // 各キー入力確認
                    if (var_254 == 1) {
                        var_199 = 4;
                        var_273 = 1;
                    }
                    if (var_257 == 1) {
                        var_199 = 6;
                        var_273 = 1;
                    }
                    if (var_255 == 1) {
                        var_199 = 8;
                        var_273 = 1;
                    }
                    if (var_259 == 1) {
                        var_199 = 2;
                        var_273 = 1;
                    }
                    if (var_253 == 1) {
                        var_199 = 7;
                        var_273 = 1;
                    }
                    if (var_254 == 1 && var_255 == 1) {
                        var_199 = 7;
                        var_273 = 1;
                    }
                    if (var_256 == 1) {
                        var_199 = 9;
                        var_273 = 1;
                    }
                    if (var_257 == 1 && var_255 == 1) {
                        var_199 = 9;
                        var_273 = 1;
                    }
                    if (var_258 == 1) {
                        var_199 = 1;
                        var_273 = 1;
                    }
                    if (var_254 == 1 && var_259 == 1) {
                        var_199 = 1;
                        var_273 = 1;
                    }
                    if (var_260 == 1) {
                        var_199 = 3;
                        var_273 = 1;
                    }
                    if (var_257 == 1 && var_259 == 1) {
                        var_199 = 3;
                        var_273 = 1;
                    }
                    if (!(var_273 == 1)) return [3 /*break*/, 4];
                    var_268 = 0;
                    if (var_199 == 1 && var_82[var_264][var_267] > 0) {
                        var_269 = var_82[var_264][var_267];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_199 == 2 && var_82[var_66][var_267] > 0) {
                        var_269 = var_82[var_66][var_267];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_199 == 3 && var_82[var_265][var_267] > 0) {
                        var_269 = var_82[var_265][var_267];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_199 == 4 && var_82[var_264][var_67] > 0) {
                        var_269 = var_82[var_264][var_67];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_199 == 6 && var_82[var_265][var_67] > 0) {
                        var_269 = var_82[var_265][var_67];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_199 == 7 && var_82[var_264][var_266] > 0) {
                        var_269 = var_82[var_264][var_266];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_199 == 8 && var_82[var_66][var_266] > 0) {
                        var_269 = var_82[var_66][var_266];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                                var_268 = var_269;
                            }
                        }
                    }
                    if (var_199 == 9 && var_82[var_265][var_266] > 0) {
                        var_269 = var_82[var_265][var_266];
                        if (var_83[var_269].Var30 == 0 || var_119 == 1 || sympathy_id == 166) {
                            if (var_83[var_269].Var29 == 0 && var_83[var_269].Var0 != 50) {
                                var_268 = var_269;
                            }
                        }
                    }
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    if (!(key_C_on == 1)) return [3 /*break*/, 7];
                    return [4 /*yield*/, func051()];
                case 5:
                    _a.sent();
                    var_263[0] = 0;
                    var_268 = 0;
                    return [4 /*yield*/, func011()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
                case 7:
                    if (!(key_X_on == 1)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func051()];
                case 8:
                    _a.sent();
                    var_271 = 0;
                    var_272 = 0;
                    return [4 /*yield*/, func009()];
                case 9:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 10:
                    if (!(key_Z_on == 1)) return [3 /*break*/, 12];
                    var_271 = 0;
                    var_272 = 0;
                    var_243 = 1;
                    return [4 /*yield*/, func635()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12:
                    if (!(key_S_on == 1)) return [3 /*break*/, 14];
                    var_271 = 0;
                    var_272 = 0;
                    var_225 = var_250;
                    var_251 = 1;
                    return [4 /*yield*/, func647()];
                case 13:
                    _a.sent(); // 射撃攻撃動作処理
                    return [2 /*return*/];
                case 14:
                    if (!(key_A_on == 1)) return [3 /*break*/, 17];
                    var_271 = 0;
                    var_272 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    var_195 = 1;
                    var_196 = 1; // Mフラグ:メニュー画面 func054
                    var_245 = 19;
                    var_246 = 45;
                    var_247 = 1;
                    var_248 = 1;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, func053()];
                case 16:
                    _a.sent(); // メニュー画面呼び出し
                    return [2 /*return*/];
                case 17: return [4 /*yield*/, func012()];
                case 18:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func013() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(13);
                    return [4 /*yield*/, func080(false)];
                case 1:
                    _a.sent(); // 各キー入力確認 OFF?
                    if (!(var_253 == 1)) return [3 /*break*/, 3];
                    var_66 = var_66 - 1;
                    var_67 = var_67 - 1;
                    var_199 = 7;
                    return [4 /*yield*/, func015()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
                case 3:
                    if (!(var_254 == 1 && var_255 == 1)) return [3 /*break*/, 5];
                    var_66 = var_66 - 1;
                    var_67 = var_67 - 1;
                    var_199 = 7;
                    return [4 /*yield*/, func015()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
                case 5:
                    if (!(var_256 == 1)) return [3 /*break*/, 7];
                    var_66 = var_66 + 1;
                    var_67 = var_67 - 1;
                    var_199 = 9;
                    return [4 /*yield*/, func015()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
                case 7:
                    if (!(var_257 == 1 && var_255 == 1)) return [3 /*break*/, 9];
                    var_66 = var_66 + 1;
                    var_67 = var_67 - 1;
                    var_199 = 9;
                    return [4 /*yield*/, func015()];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
                case 9:
                    if (!(var_258 == 1)) return [3 /*break*/, 11];
                    var_66 = var_66 - 1;
                    var_67 = var_67 + 1;
                    var_199 = 1;
                    return [4 /*yield*/, func015()];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
                case 11:
                    if (!(var_254 == 1 && var_259 == 1)) return [3 /*break*/, 13];
                    var_66 = var_66 - 1;
                    var_67 = var_67 + 1;
                    var_199 = 1;
                    return [4 /*yield*/, func015()];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
                case 13:
                    if (!(var_260 == 1)) return [3 /*break*/, 15];
                    var_66 = var_66 + 1;
                    var_67 = var_67 + 1;
                    var_199 = 3;
                    return [4 /*yield*/, func015()];
                case 14:
                    _a.sent();
                    return [2 /*return*/];
                case 15:
                    if (!(var_257 == 1 && var_259 == 1)) return [3 /*break*/, 17];
                    var_66 = var_66 + 1;
                    var_67 = var_67 + 1;
                    var_199 = 3;
                    return [4 /*yield*/, func015()];
                case 16:
                    _a.sent();
                    return [2 /*return*/];
                case 17:
                    conf_keyon = getkey(81); // キーQ 入力確認
                    if (!(conf_keyon == 1)) return [3 /*break*/, 19];
                    return [4 /*yield*/, func236()];
                case 18:
                    _a.sent();
                    return [2 /*return*/];
                case 19: return [4 /*yield*/, func009()];
                case 20:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
            }
        });
    });
}
function func014() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_6, cnt3_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(14);
                    return [4 /*yield*/, func080(false)];
                case 1:
                    _a.sent(); // 各キー入力確認 OFF?
                    var_274 = var_66 - 1;
                    if (var_274 < 0) {
                        var_274 = 0;
                    }
                    var_275 = var_66 + 1;
                    if (var_275 > var_33) {
                        var_275 = var_33;
                    }
                    var_276 = var_67 - 1;
                    if (var_276 < 0) {
                        var_276 = 0;
                    }
                    var_277 = var_67 + 1;
                    if (var_277 > var_34) {
                        var_277 = var_34;
                    }
                    var_278 = 0;
                    if (!(var_240 == 1 && key_Z_on == 0 && key_X_on == 1)) return [3 /*break*/, 4];
                    if (var_201 == 14 && var_279 == 14) {
                        if (var_71[var_274][var_67] <= 12 && var_71[var_274][var_67] != 0) {
                            var_278 = 1;
                        }
                        if (var_71[var_275][var_67] <= 12 && var_71[var_275][var_67] != 0) {
                            var_278 = 1;
                        }
                        if (var_71[var_66][var_277] <= 12 && var_71[var_66][var_277] != 0) {
                            var_278 = 1;
                        }
                        if (var_71[var_66][var_276] <= 12 && var_71[var_66][var_276] != 0) {
                            var_278 = 1;
                        }
                    }
                    if (var_201 == 14 && var_71[var_274][var_67] == 14 && var_71[var_275][var_67] == 14 && var_71[var_66][var_277] == 14 && var_71[var_66][var_276] == 14) {
                        if (var_71[var_274][var_277] != 14 && var_71[var_275][var_277] != 14 && var_71[var_274][var_276] != 14 && var_71[var_275][var_276] != 14) {
                            var_278 = 1;
                        }
                    }
                    if (var_201 != 0 && var_201 <= 12) {
                        if (var_73[var_274][var_67] != 0 && var_199 != 6) {
                            var_278 = 1;
                        }
                        if (var_73[var_275][var_67] != 0 && var_199 != 4) {
                            var_278 = 1;
                        }
                        if (var_73[var_66][var_277] != 0 && var_199 != 8) {
                            var_278 = 1;
                        }
                        if (var_73[var_66][var_276] != 0 && var_199 != 2) {
                            var_278 = 1;
                        }
                        if (var_80[var_274][var_67] != 0) {
                            var_280 = var_80[var_274][var_67];
                            if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                                var_278 = 1;
                            }
                        }
                        if (var_80[var_275][var_67] != 0) {
                            var_280 = var_80[var_275][var_67];
                            if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                                var_278 = 1;
                            }
                        }
                        if (var_80[var_66][var_277] != 0) {
                            var_280 = var_80[var_66][var_277];
                            if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                                var_278 = 1;
                            }
                        }
                        if (var_80[var_66][var_276] != 0) {
                            var_280 = var_80[var_66][var_276];
                            if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                                var_278 = 1;
                            }
                        }
                        if (var_80[var_274][var_277] != 0) {
                            var_280 = var_80[var_274][var_277];
                            if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                                var_278 = 1;
                            }
                        }
                        if (var_80[var_275][var_277] != 0) {
                            var_280 = var_80[var_275][var_277];
                            if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                                var_278 = 1;
                            }
                        }
                        if (var_80[var_274][var_276] != 0) {
                            var_280 = var_80[var_274][var_276];
                            if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                                var_278 = 1;
                            }
                        }
                        if (var_80[var_275][var_276] != 0) {
                            var_280 = var_80[var_275][var_276];
                            if (var_81[var_280][4] == 1 || var_121 == 1 || var_156[303] == 1 || var_156[315] == 1) {
                                var_278 = 1;
                            }
                        }
                    }
                    if (var_77[var_274][var_67] != 0 && var_199 != 6) {
                        var_278 = 1;
                    }
                    if (var_77[var_275][var_67] != 0 && var_199 != 4) {
                        var_278 = 1;
                    }
                    if (var_77[var_66][var_277] != 0 && var_199 != 8) {
                        var_278 = 1;
                    }
                    if (var_77[var_66][var_276] != 0 && var_199 != 2) {
                        var_278 = 1;
                    }
                    if (!(var_278 == 1)) return [3 /*break*/, 4];
                    var_240 = 0;
                    return [4 /*yield*/, func179()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 3:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 4:
                    if (!(var_253 == 1)) return [3 /*break*/, 6];
                    var_66 = var_66 - 1;
                    var_67 = var_67 - 1;
                    var_199 = 7;
                    var_240 = 1;
                    return [4 /*yield*/, func015()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
                case 6:
                    if (!(var_254 == 1 && var_255 == 1)) return [3 /*break*/, 8];
                    var_66 = var_66 - 1;
                    var_67 = var_67 - 1;
                    var_199 = 7;
                    var_240 = 1;
                    return [4 /*yield*/, func015()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
                case 8:
                    if (!(var_256 == 1)) return [3 /*break*/, 10];
                    var_66 = var_66 + 1;
                    var_67 = var_67 - 1;
                    var_199 = 9;
                    var_240 = 1;
                    return [4 /*yield*/, func015()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
                case 10:
                    if (!(var_257 == 1 && var_255 == 1)) return [3 /*break*/, 12];
                    var_66 = var_66 + 1;
                    var_67 = var_67 - 1;
                    var_199 = 9;
                    var_240 = 1;
                    return [4 /*yield*/, func015()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12:
                    if (!(var_258 == 1)) return [3 /*break*/, 14];
                    var_66 = var_66 - 1;
                    var_67 = var_67 + 1;
                    var_199 = 1;
                    var_240 = 1;
                    return [4 /*yield*/, func015()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
                case 14:
                    if (!(var_254 == 1 && var_259 == 1)) return [3 /*break*/, 16];
                    var_66 = var_66 - 1;
                    var_67 = var_67 + 1;
                    var_199 = 1;
                    var_240 = 1;
                    return [4 /*yield*/, func015()];
                case 15:
                    _a.sent();
                    return [2 /*return*/];
                case 16:
                    if (!(var_260 == 1)) return [3 /*break*/, 18];
                    var_66 = var_66 + 1;
                    var_67 = var_67 + 1;
                    var_199 = 3;
                    var_240 = 1;
                    return [4 /*yield*/, func015()];
                case 17:
                    _a.sent();
                    return [2 /*return*/];
                case 18:
                    if (!(var_257 == 1 && var_259 == 1)) return [3 /*break*/, 20];
                    var_66 = var_66 + 1;
                    var_67 = var_67 + 1;
                    var_199 = 3;
                    var_240 = 1;
                    return [4 /*yield*/, func015()];
                case 19:
                    _a.sent();
                    return [2 /*return*/];
                case 20:
                    if (!(var_254 == 1)) return [3 /*break*/, 22];
                    var_66 = var_66 - 1;
                    var_199 = 4;
                    var_240 = 1;
                    return [4 /*yield*/, func015()];
                case 21:
                    _a.sent();
                    return [2 /*return*/];
                case 22:
                    if (!(var_257 == 1)) return [3 /*break*/, 24];
                    var_66 = var_66 + 1;
                    var_199 = 6;
                    var_240 = 1;
                    return [4 /*yield*/, func015()];
                case 23:
                    _a.sent();
                    return [2 /*return*/];
                case 24:
                    if (!(var_255 == 1)) return [3 /*break*/, 26];
                    var_67 = var_67 - 1;
                    var_199 = 8;
                    var_240 = 1;
                    return [4 /*yield*/, func015()];
                case 25:
                    _a.sent();
                    return [2 /*return*/];
                case 26:
                    if (!(var_259 == 1)) return [3 /*break*/, 28];
                    var_67 = var_67 + 1;
                    var_199 = 2;
                    var_240 = 1;
                    return [4 /*yield*/, func015()];
                case 27:
                    _a.sent();
                    return [2 /*return*/];
                case 28:
                    var_281 = var_66 - 4;
                    if (var_281 < 0) {
                        var_281 = 0;
                    }
                    var_282 = var_66 + 4;
                    if (var_282 > var_33) {
                        var_282 = var_33;
                    }
                    var_283 = var_67 - 4;
                    if (var_283 < 0) {
                        var_283 = 0;
                    }
                    var_284 = var_67 + 4;
                    if (var_284 > var_34) {
                        var_284 = var_34;
                    }
                    var_285 = 0;
                    var_286 = 1;
                    for (cnt1_6 = 0; cnt1_6 < var_97; ++cnt1_6) {
                        if (var_83[var_286].Var1 > var_281 && var_83[var_286].Var1 < var_282 && var_83[var_286].Var2 > var_283 && var_83[var_286].Var2 < var_284 && var_83[var_286].Var31 != 4 && var_83[var_286].Var31 != 5) {
                            if (var_83[var_286].Var0 != 0 && var_83[var_286].Var0 != 79 && var_83[var_286].Var0 != 94 && var_83[var_286].Var29 == 0 && var_83[var_286].Var12 == 0 && var_83[var_286].Var13 == 0 && var_83[var_286].Var30 == 0) {
                                var_285 = 1;
                                break;
                            }
                        }
                        var_286 = var_286 + 1;
                    }
                    return [4 /*yield*/, func080()];
                case 29:
                    _a.sent(); // 各キー入力確認
                    if (!(var_285 == 1)) return [3 /*break*/, 35];
                    var_240 = 0;
                    if (!(key_Z_on == 1 && key_X_on == 1)) return [3 /*break*/, 35];
                    var_287 = 1;
                    var_241 = 1;
                    cnt3_2 = 0;
                    _a.label = 30;
                case 30:
                    if (!(cnt3_2 < 10)) return [3 /*break*/, 33];
                    return [4 /*yield*/, func337()];
                case 31:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 32;
                case 32:
                    ++cnt3_2;
                    return [3 /*break*/, 30];
                case 33:
                    var_287 = 0;
                    var_241 = 0;
                    var_217 = 1;
                    return [4 /*yield*/, func019()];
                case 34:
                    _a.sent(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return [2 /*return*/];
                case 35:
                    if (!(key_Z_on == 1 && key_X_on == 1)) return [3 /*break*/, 37];
                    var_217 = 1;
                    var_240 = 1;
                    var_241 = 1;
                    return [4 /*yield*/, func019()];
                case 36:
                    _a.sent(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return [2 /*return*/];
                case 37:
                    var_241 = 0;
                    var_240 = 0;
                    return [4 /*yield*/, func009()];
                case 38:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
            }
        });
    });
}
function func015() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt3_3, cnt4_1, cnt6_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(15);
                    if (!(var_116 >= 1 || var_114 >= 1)) return [3 /*break*/, 2];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func026()];
                case 1:
                    _a.sent(); // その場へ固定された時の動作処理
                    return [2 /*return*/];
                case 2:
                    if (var_126 == 1) {
                        var_66 = var_236;
                        var_67 = var_237;
                        var_288 = rnd(8);
                        if (var_288 == 0) {
                            var_66 = var_66 - 1;
                            var_67 = var_67 - 1;
                            var_199 = 7;
                        }
                        if (var_288 == 1) {
                            var_66 = var_66 + 1;
                            var_67 = var_67 - 1;
                            var_199 = 9;
                        }
                        if (var_288 == 2) {
                            var_66 = var_66 - 1;
                            var_67 = var_67 + 1;
                            var_199 = 1;
                        }
                        if (var_288 == 3) {
                            var_66 = var_66 + 1;
                            var_67 = var_67 + 1;
                            var_199 = 3;
                        }
                        if (var_288 == 4) {
                            var_66 = var_66 - 1;
                            var_199 = 4;
                        }
                        if (var_288 == 5) {
                            var_66 = var_66 + 1;
                            var_199 = 6;
                        }
                        if (var_288 == 6) {
                            var_67 = var_67 - 1;
                            var_199 = 8;
                        }
                        if (var_288 == 7) {
                            var_67 = var_67 + 1;
                            var_199 = 2;
                        }
                    }
                    if (!(dangeon_number == 0 && var_66 == 14 && var_67 == 22 && var_236 != 15)) return [3 /*break*/, 4];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func162()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    if (!(dangeon_number == 0 && var_66 == 12 && var_67 == 22 && var_199 == 8)) return [3 /*break*/, 6];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func736()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
                case 6:
                    var_241 = 0;
                    if (!(var_217 == 0)) return [3 /*break*/, 50];
                    if (!(var_66 < 5)) return [3 /*break*/, 8];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func009()];
                case 7:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 8:
                    if (!(var_67 < 5)) return [3 /*break*/, 10];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func009()];
                case 9:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 10:
                    if (!(var_66 > var_33)) return [3 /*break*/, 12];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func009()];
                case 11:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 12:
                    if (!(var_67 > var_34)) return [3 /*break*/, 14];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func009()];
                case 13:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 14:
                    var_289 = var_66 - 1;
                    if (var_289 < 0) {
                        var_289 = 0;
                    }
                    var_290 = var_66 + 1;
                    if (var_290 > var_33) {
                        var_290 = var_33;
                    }
                    var_291 = var_67 + 1;
                    if (var_291 > var_34) {
                        var_291 = var_34;
                    }
                    var_292 = var_67 - 1;
                    if (var_292 < 0) {
                        var_292 = 0;
                    }
                    if (!(var_71[var_66][var_67] == 13 && var_215 != 202 && var_215 != 117 && var_125 == 0)) return [3 /*break*/, 16];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func009()];
                case 15:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 16: return [4 /*yield*/, func080(false)];
                case 17:
                    _a.sent(); // 各キー入力確認 OFF?
                    if (!(var_71[var_66][var_67] == 0 && var_159 == 0)) return [3 /*break*/, 19];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func009()];
                case 18:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 19:
                    if (!(var_71[var_66][var_67] == 0 && key_X_on == 1)) return [3 /*break*/, 21];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func009()];
                case 20:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 21:
                    if (!(var_199 == 1 && var_159 == 0)) return [3 /*break*/, 23];
                    if (!(var_71[var_290][var_67] == 0 || var_71[var_66][var_292] == 0)) return [3 /*break*/, 23];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func009()];
                case 22:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 23:
                    if (!(var_199 == 3 && var_159 == 0)) return [3 /*break*/, 25];
                    if (!(var_71[var_289][var_67] == 0 || var_71[var_66][var_292] == 0)) return [3 /*break*/, 25];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func009()];
                case 24:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 25:
                    if (!(var_199 == 7 && var_159 == 0)) return [3 /*break*/, 27];
                    if (!(var_71[var_290][var_67] == 0 || var_71[var_66][var_291] == 0)) return [3 /*break*/, 27];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func009()];
                case 26:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 27:
                    if (!(var_199 == 9 && var_159 == 0)) return [3 /*break*/, 29];
                    if (!(var_71[var_289][var_67] == 0 || var_71[var_66][var_291] == 0)) return [3 /*break*/, 29];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func009()];
                case 28:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 29:
                    if (!(var_146 >= 1 && var_236 == var_147 && var_237 == var_148 && var_139 == 0 && var_144 == 0 && var_123 == 0 && var_163 == 0)) return [3 /*break*/, 38];
                    if (!(var_82[var_66][var_67] != 0)) return [3 /*break*/, 31];
                    var_66 = var_147;
                    var_67 = var_148;
                    var_236 = var_66;
                    var_237 = var_67;
                    return [4 /*yield*/, func009()];
                case 30:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 31:
                    var_66 = var_147;
                    var_67 = var_148;
                    var_236 = var_66;
                    var_237 = var_67;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "鉄塔からは出られない！";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 32:
                    _a.sent();
                    DSPLAY(audio_id = 188);
                    cnt3_3 = 0;
                    _a.label = 33;
                case 33:
                    if (!(cnt3_3 < 9)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func337()];
                case 34:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 35;
                case 35:
                    ++cnt3_3;
                    return [3 /*break*/, 33];
                case 36: return [4 /*yield*/, func009()];
                case 37:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 38:
                    var_301 = 0;
                    if (!(var_201 != 14 && var_71[var_66][var_67] >= 13 && var_139 == 0 && var_144 == 0 && var_123 == 0 && var_163 == 0)) return [3 /*break*/, 46];
                    if (!(var_215 != 112 && var_215 != 204 && var_215 != 394 && var_215 != 395)) return [3 /*break*/, 46];
                    var_302 = 1;
                    for (cnt4_1 = 0; cnt4_1 < var_97; ++cnt4_1) {
                        if (var_83[var_302].Var0 == 31 && var_83[var_302].Var20 == 0 && var_83[var_302].Var10 == var_201 && var_83[var_302].Var12 == 0 && var_83[var_302].Var13 == 0 && var_83[var_302].Var14 == 0 && var_83[var_302].Var17 == 0 && var_83[var_302].Var23 == 0) {
                            var_301 = 1;
                        }
                        var_302 = var_302 + 1;
                    }
                    if (var_301 == 1 && var_71[var_66][var_67] == 13) {
                        var_303 = var_66;
                        var_304 = var_67;
                        var_305 = var_66 - 1;
                        if (var_305 < 0) {
                            var_305 = 0;
                        }
                        var_306 = var_66 + 1;
                        if (var_306 > var_33) {
                            var_306 = var_33;
                        }
                        var_307 = var_67 + 1;
                        if (var_307 > var_34) {
                            var_307 = var_34;
                        }
                        var_308 = var_67 - 1;
                        if (var_308 < 0) {
                            var_308 = 0;
                        }
                        if (var_71[var_305][var_304] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_306][var_304] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_303][var_307] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_303][var_308] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_305][var_307] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_305][var_308] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_306][var_307] == var_201) {
                            var_301 = 0;
                        }
                        if (var_71[var_306][var_308] == var_201) {
                            var_301 = 0;
                        }
                    }
                    if (!(var_301 == 1)) return [3 /*break*/, 46];
                    var_240 = 0;
                    var_309 = var_66;
                    var_310 = var_67;
                    var_66 = var_236;
                    var_67 = var_237;
                    if (!(var_82[var_309][var_310] == 0)) return [3 /*break*/, 44];
                    gsel(19);
                    color(255, 255, 255);
                    boxf(left = 0, top1 = 0, right = 340, bottom = 340);
                    gsel(0);
                    var_311 = 255;
                    DSPLAY(audio_id = 206);
                    var_312 = 1;
                    return [4 /*yield*/, func337()];
                case 39:
                    _a.sent(); // メッセージ関係呼び出し
                    var_312 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "吉良の親父がいるため";
                    comments_row2 = "この部屋から出ることができない！";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 40:
                    _a.sent();
                    cnt6_1 = 0;
                    _a.label = 41;
                case 41:
                    if (!(cnt6_1 < 9)) return [3 /*break*/, 44];
                    return [4 /*yield*/, func337()];
                case 42:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 43;
                case 43:
                    ++cnt6_1;
                    return [3 /*break*/, 41];
                case 44: return [4 /*yield*/, func009()];
                case 45:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 46:
                    var_313 = 0;
                    if (key_X_on == 1 && var_82[var_66][var_67] != 0 && var_71[var_236][var_237] != 0 && var_71[var_236][var_237] != 13) {
                        var_314 = var_82[var_66][var_67];
                        var_315 = 0;
                        if (var_83[var_314].Var31 == 4) {
                            var_315 = 1;
                        }
                        if (var_83[var_314].Var31 == 5) {
                            var_315 = 1;
                        }
                        if (var_83[var_314].Var0 == 61) {
                            var_315 = 1;
                        }
                        if (var_83[var_314].Var0 == 49) {
                            var_315 = 1;
                        }
                        if (var_83[var_314].Var0 == 116) {
                            var_315 = 1;
                        }
                        if (var_83[var_314].Var20 == 2) {
                            var_315 = 1;
                        }
                        if (var_83[var_314].Var0 == 33) {
                            var_315 = 0;
                        }
                        if (var_83[var_314].Var0 == 142) {
                            var_315 = 0;
                        }
                        if (var_315 == 1) {
                            var_316 = var_83[var_314].Var1;
                            var_317 = var_83[var_314].Var2;
                            var_83[var_314].Var1 = var_236;
                            var_83[var_314].Var2 = var_237;
                            var_82[var_316][var_317] = 0;
                            var_82[var_236][var_237] = var_314;
                            if (var_199 == 4) {
                                var_83[var_314].Var5 = 6;
                            }
                            if (var_199 == 6) {
                                var_83[var_314].Var5 = 4;
                            }
                            if (var_199 == 8) {
                                var_83[var_314].Var5 = 2;
                            }
                            if (var_199 == 2) {
                                var_83[var_314].Var5 = 8;
                            }
                            if (var_199 == 1) {
                                var_83[var_314].Var5 = 9;
                            }
                            if (var_199 == 3) {
                                var_83[var_314].Var5 = 7;
                            }
                            if (var_199 == 7) {
                                var_83[var_314].Var5 = 3;
                            }
                            if (var_199 == 9) {
                                var_83[var_314].Var5 = 1;
                            }
                            var_240 = 0;
                            var_313 = var_314;
                            if (var_83[var_314].Var0 == 116) {
                                var_318 = var_314;
                            }
                        }
                    }
                    if (!(var_82[var_66][var_67] != 0)) return [3 /*break*/, 48];
                    var_319 = var_82[var_66][var_67];
                    if (!(var_83[var_319].Var0 != 50)) return [3 /*break*/, 48];
                    var_66 = var_236;
                    var_67 = var_237;
                    return [4 /*yield*/, func009()];
                case 47:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 48:
                    if (!(var_77[var_66][var_67] != 0 && var_313 == 0)) return [3 /*break*/, 50];
                    var_320 = var_77[var_66][var_67];
                    if (!(var_78[var_320].Var15 == 1)) return [3 /*break*/, 50];
                    var_321 = var_77[var_66][var_67];
                    var_66 = var_236;
                    var_67 = var_237;
                    var_240 = 0;
                    return [4 /*yield*/, func402()];
                case 49:
                    _a.sent();
                    _a.label = 50;
                case 50: return [4 /*yield*/, func019()];
                case 51:
                    _a.sent(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return [2 /*return*/];
            }
        });
    });
}
function func016() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt3_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(16);
                    var_65[var_236][var_237] = 0;
                    var_65[var_66][var_67] = 1;
                    var_303 = var_66;
                    var_304 = var_67;
                    var_305 = var_66 - 1;
                    if (var_305 < 0) {
                        var_305 = 0;
                    }
                    var_306 = var_66 + 1;
                    if (var_306 > var_33) {
                        var_306 = var_33;
                    }
                    var_307 = var_67 + 1;
                    if (var_307 > var_34) {
                        var_307 = var_34;
                    }
                    var_308 = var_67 - 1;
                    if (var_308 < 0) {
                        var_308 = 0;
                    }
                    var_279 = var_201;
                    var_201 = var_71[var_303][var_304];
                    if (var_71[var_303][var_304] == 13) {
                        var_201 = 14;
                        if (var_71[var_305][var_307] != 0 && var_71[var_305][var_307] <= 12) {
                            var_201 = var_71[var_305][var_307];
                        }
                        if (var_71[var_305][var_308] != 0 && var_71[var_305][var_308] <= 12) {
                            var_201 = var_71[var_305][var_308];
                        }
                        if (var_71[var_306][var_307] != 0 && var_71[var_306][var_307] <= 12) {
                            var_201 = var_71[var_306][var_307];
                        }
                        if (var_71[var_306][var_308] != 0 && var_71[var_306][var_308] <= 12) {
                            var_201 = var_71[var_306][var_308];
                        }
                        if (var_71[var_305][var_304] != 0 && var_71[var_305][var_304] <= 12) {
                            var_201 = var_71[var_305][var_304];
                        }
                        if (var_71[var_306][var_304] != 0 && var_71[var_306][var_304] <= 12) {
                            var_201 = var_71[var_306][var_304];
                        }
                        if (var_71[var_303][var_307] != 0 && var_71[var_303][var_307] <= 12) {
                            var_201 = var_71[var_303][var_307];
                        }
                        if (var_71[var_303][var_308] != 0 && var_71[var_303][var_308] <= 12) {
                            var_201 = var_71[var_303][var_308];
                        }
                    }
                    if (!(var_71[var_303][var_304] != 0)) return [3 /*break*/, 4];
                    var_74[var_303][var_304] = 2;
                    if (var_74[var_305][var_304] == 0)
                        var_74[var_305][var_304] = 1;
                    if (var_74[var_306][var_304] == 0)
                        var_74[var_306][var_304] = 1;
                    if (var_74[var_303][var_307] == 0)
                        var_74[var_303][var_307] = 1;
                    if (var_74[var_303][var_308] == 0)
                        var_74[var_303][var_308] = 1;
                    if (var_74[var_305][var_307] == 0)
                        var_74[var_305][var_307] = 1;
                    if (var_74[var_305][var_308] == 0)
                        var_74[var_305][var_308] = 1;
                    if (var_74[var_306][var_307] == 0)
                        var_74[var_306][var_307] = 1;
                    if (var_74[var_306][var_308] == 0)
                        var_74[var_306][var_308] = 1;
                    var_75[var_201] = 1;
                    if (!(var_201 != var_279 && var_201 != 14)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func017()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [4 /*yield*/, func018()];
                case 3:
                    _a.sent();
                    if (var_200 == var_201 && var_201 != 14) {
                        var_98 = 1;
                    }
                    if (var_73[var_66][var_67] == 1) {
                        var_98 = 1;
                    }
                    if (var_202 == var_201 && var_201 != 14) {
                        var_99 = 1;
                    }
                    if (var_73[var_66][var_67] == 2) {
                        var_99 = 1;
                    }
                    _a.label = 4;
                case 4:
                    if (var_201 != var_279 && var_201 != 14) {
                        var_322 = var_199;
                    }
                    if (var_201 == 14 && var_279 != 14) {
                        var_187 = var_279;
                        var_323 = 0;
                        if (var_66 == var_76[var_279][1][1] && var_67 == var_76[var_279][1][2]) {
                            var_323 = 1;
                        }
                        if (var_66 == var_76[var_279][2][1] && var_67 == var_76[var_279][2][2]) {
                            var_323 = 2;
                        }
                        if (var_66 == var_76[var_279][3][1] && var_67 == var_76[var_279][3][2]) {
                            var_323 = 3;
                        }
                        if (var_66 == var_76[var_279][4][1] && var_67 == var_76[var_279][4][2]) {
                            var_323 = 4;
                        }
                        if (var_323 == 0) {
                            var_188 = var_66;
                            var_189 = var_67;
                            var_324 = 1;
                            for (cnt3_4 = 0; cnt3_4 < var_97; ++cnt3_4) {
                                if (var_83[var_324].Var0 != 0 && var_83[var_324].Var10 == var_279) {
                                    var_83[var_324].Var33 = 5;
                                }
                                var_324++;
                            }
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function func017() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_7, cnt2_5;
        return __generator(this, function (_a) {
            dbgprt(17);
            if (var_94 == 8) {
                return [2 /*return*/];
            }
            var_325 = 0;
            for (cnt1_7 = 0; cnt1_7 < var_31; ++cnt1_7) {
                var_326 = 0;
                for (cnt2_5 = 0; cnt2_5 < var_32; ++cnt2_5) {
                    var_327 = var_325 - 1;
                    if (var_327 < 0) {
                        var_327 = 0;
                    }
                    var_328 = var_325 + 1;
                    if (var_328 > var_33) {
                        var_328 = var_33;
                    }
                    var_329 = var_326 + 1;
                    if (var_329 > var_34) {
                        var_329 = var_34;
                    }
                    var_330 = var_326 - 1;
                    if (var_330 < 0) {
                        var_330 = 0;
                    }
                    if (var_71[var_327][var_326] == var_201 || var_71[var_328][var_326] == var_201 || var_71[var_325][var_329] == var_201 || var_71[var_325][var_330] == var_201) {
                        if (var_74[var_325][var_326] == 0)
                            var_74[var_325][var_326] = 1;
                    }
                    var_326 = var_326 + 1;
                }
                var_325 = var_325 + 1;
            }
            return [2 /*return*/];
        });
    });
}
function func018() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_8, cnt1_9;
        return __generator(this, function (_a) {
            dbgprt(18);
            var_331 = var_66 - 1;
            if (var_331 < 0) {
                var_331 = 0;
            }
            var_332 = var_66 + 1;
            if (var_332 > var_33) {
                var_332 = var_33;
            }
            var_333 = var_67 + 1;
            if (var_333 > var_34) {
                var_333 = var_34;
            }
            var_334 = var_67 - 1;
            if (var_334 < 0) {
                var_334 = 0;
            }
            var_335 = 1;
            for (cnt1_8 = 0; cnt1_8 < var_336; ++cnt1_8) {
                if (var_201 != 14 && var_78[var_335].Var9 == var_201) {
                    var_78[var_335].Var10 = 1;
                }
                if (var_78[var_335].Var1 >= var_331 && var_78[var_335].Var1 <= var_332 && var_78[var_335].Var2 <= var_333 && var_78[var_335].Var2 >= var_334) {
                    var_78[var_335].Var10 = 1;
                }
                var_335 = var_335 + 1;
            }
            var_335 = 1;
            for (cnt1_9 = 0; cnt1_9 < var_337; ++cnt1_9) {
                if (var_81[var_335][0] == 31 && var_201 != 14 && var_81[var_335][5] == var_201) {
                    var_81[var_335][4] = 1;
                }
                if (var_81[var_335][0] == 31 && var_81[var_335][1] >= var_331 && var_81[var_335][1] <= var_332 && var_81[var_335][2] <= var_333 && var_81[var_335][2] >= var_334) {
                    var_81[var_335][4] = 1;
                }
                var_335 = var_335 + 1;
            }
            return [2 /*return*/];
        });
    });
}
// 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
function func019() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt3_5, cnt5_1, cnt5_2, cnt3_6, cnt3_7, cnt3_8, cnt3_9, cnt3_10, cnt3_11, cnt4_2, cnt5_3, cnt5_4, cnt3_12, cnt4_3, cnt4_4, cnt3_13, cnt3_14, cnt4_5, cnt3_15, cnt5_5, cnt3_16, cnt3_17, cnt3_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(19);
                    if (dangeon_number != 0) {
                        var_338++;
                    }
                    return [4 /*yield*/, func016()];
                case 1:
                    _a.sent();
                    var_195 = 0;
                    var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    var_234 = 0;
                    var_339 = 0;
                    var_340 = 0;
                    var_341 = 0;
                    if (var_66 != var_236 || var_67 != var_237) {
                        var_342 = 0;
                        var_343 = 0;
                        var_344 = 0;
                    }
                    if (var_66 == var_236 && var_67 == var_237) {
                        if (var_77[var_66][var_67] != 0) {
                            var_342 = 1;
                        }
                        if (var_73[var_66][var_67] != 0) {
                            var_344 = 1;
                        }
                        if (var_80[var_66][var_67] != 0) {
                            var_343 = 1;
                        }
                    }
                    return [4 /*yield*/, func020()];
                case 2:
                    _a.sent();
                    if (!(var_211 <= 0)) return [3 /*break*/, 4];
                    var_211 = 0;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 3:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 4:
                    if (!(var_159 >= 1)) return [3 /*break*/, 28];
                    var_289 = var_66 - 1;
                    if (var_289 < 0) {
                        var_289 = 0;
                    }
                    var_290 = var_66 + 1;
                    if (var_290 > var_33) {
                        var_290 = var_33;
                    }
                    var_291 = var_67 + 1;
                    if (var_291 > var_34) {
                        var_291 = var_34;
                    }
                    var_292 = var_67 - 1;
                    if (var_292 < 0) {
                        var_292 = 0;
                    }
                    var_345 = 0;
                    var_346 = dim(length1 = 10, length2 = 10, length3 = null, length4 = null);
                    if (!(var_71[var_66][var_67] == 0)) return [3 /*break*/, 6];
                    var_347 = var_66;
                    var_348 = var_67;
                    return [4 /*yield*/, func622()];
                case 5:
                    _a.sent();
                    var_345 = 1;
                    var_346[0][1] = var_347;
                    var_346[0][2] = var_348;
                    _a.label = 6;
                case 6:
                    if (!(var_71[var_289][var_67] == 0)) return [3 /*break*/, 8];
                    var_347 = var_289;
                    var_348 = var_67;
                    return [4 /*yield*/, func622()];
                case 7:
                    _a.sent();
                    var_345 = 1;
                    var_346[4][1] = var_347;
                    var_346[4][2] = var_348;
                    _a.label = 8;
                case 8:
                    if (!(var_71[var_290][var_67] == 0)) return [3 /*break*/, 10];
                    var_347 = var_290;
                    var_348 = var_67;
                    return [4 /*yield*/, func622()];
                case 9:
                    _a.sent();
                    var_345 = 1;
                    var_346[6][1] = var_347;
                    var_346[6][2] = var_348;
                    _a.label = 10;
                case 10:
                    if (!(var_71[var_66][var_291] == 0)) return [3 /*break*/, 12];
                    var_347 = var_66;
                    var_348 = var_291;
                    return [4 /*yield*/, func622()];
                case 11:
                    _a.sent();
                    var_345 = 1;
                    var_346[2][1] = var_347;
                    var_346[2][2] = var_348;
                    _a.label = 12;
                case 12:
                    if (!(var_71[var_66][var_292] == 0)) return [3 /*break*/, 14];
                    var_347 = var_66;
                    var_348 = var_292;
                    return [4 /*yield*/, func622()];
                case 13:
                    _a.sent();
                    var_345 = 1;
                    var_346[8][1] = var_347;
                    var_346[8][2] = var_348;
                    _a.label = 14;
                case 14:
                    if (!(var_71[var_289][var_291] == 0)) return [3 /*break*/, 16];
                    var_347 = var_289;
                    var_348 = var_291;
                    return [4 /*yield*/, func622()];
                case 15:
                    _a.sent();
                    var_345 = 1;
                    var_346[1][1] = var_347;
                    var_346[1][2] = var_348;
                    _a.label = 16;
                case 16:
                    if (!(var_71[var_290][var_291] == 0)) return [3 /*break*/, 18];
                    var_347 = var_290;
                    var_348 = var_291;
                    return [4 /*yield*/, func622()];
                case 17:
                    _a.sent();
                    var_345 = 1;
                    var_346[3][1] = var_347;
                    var_346[3][2] = var_348;
                    _a.label = 18;
                case 18:
                    if (!(var_71[var_289][var_292] == 0)) return [3 /*break*/, 20];
                    var_347 = var_289;
                    var_348 = var_292;
                    return [4 /*yield*/, func622()];
                case 19:
                    _a.sent();
                    var_345 = 1;
                    var_346[7][1] = var_347;
                    var_346[7][2] = var_348;
                    _a.label = 20;
                case 20:
                    if (!(var_71[var_290][var_292] == 0)) return [3 /*break*/, 22];
                    var_347 = var_290;
                    var_348 = var_292;
                    return [4 /*yield*/, func622()];
                case 21:
                    _a.sent();
                    var_345 = 1;
                    var_346[9][1] = var_347;
                    var_346[9][2] = var_348;
                    _a.label = 22;
                case 22:
                    if (!(var_345 == 1)) return [3 /*break*/, 28];
                    DSPLAY(audio_id = 123);
                    cnt3_5 = 0;
                    _a.label = 23;
                case 23:
                    if (!(cnt3_5 < 5)) return [3 /*break*/, 27];
                    var_349++;
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 25:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 26;
                case 26:
                    ++cnt3_5;
                    return [3 /*break*/, 23];
                case 27:
                    var_349 = 0;
                    var_346 = dim(length1 = 10, length2 = 10, length3 = null, length4 = null);
                    _a.label = 28;
                case 28:
                    if (!(var_151 == 0)) return [3 /*break*/, 160];
                    if (var_350 > 0 && var_211 >= 1 && var_134 == 0 && var_218 < 30) {
                        var_351 = Math.floor(var_352 * 10 / 150); // Math.floor は対象の値の小数点以下を切り捨て
                        var_353 = var_351 + var_354;
                        if (var_130 == 1 || var_182 == 1) {
                            var_353 = var_353 * 2;
                        }
                        if (var_353 >= 50) {
                            var_353 = 50;
                        }
                        if (var_353 < 10) {
                            var_354 = var_353;
                            var_355 = 0;
                        }
                        if (var_353 >= 10 && var_353 < 20) {
                            var_354 = var_353 - 10;
                            var_355 = 1;
                        }
                        if (var_353 >= 20 && var_353 < 30) {
                            var_354 = var_353 - 20;
                            var_355 = 2;
                        }
                        if (var_353 >= 30 && var_353 < 40) {
                            var_354 = var_353 - 30;
                            var_355 = 3;
                        }
                        if (var_353 >= 40 && var_353 < 50) {
                            var_354 = var_353 - 40;
                            var_355 = 4;
                        }
                        if (var_353 >= 50) {
                            var_354 = var_353 - 50;
                            var_355 = 5;
                        }
                        if (var_354 < 0) {
                            var_354 = 0;
                        }
                        var_211 = var_211 + var_355;
                        if (var_130 == 1 || var_182 == 1) {
                            var_211 = var_211 + var_355;
                        }
                        if (var_211 > var_352) {
                            var_211 = var_352;
                        }
                    }
                    if (!(var_163 == 0)) return [3 /*break*/, 65];
                    if (!(var_135 >= 1)) return [3 /*break*/, 31];
                    var_211 = var_211 - 5;
                    var_135 = var_135 + 1;
                    if (!(var_211 <= 0)) return [3 /*break*/, 30];
                    var_211 = 0;
                    var_356 = 203;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 29:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 30:
                    if (var_135 == 11) {
                        var_135 = 0;
                    }
                    _a.label = 31;
                case 31:
                    if (!(var_136 >= 1)) return [3 /*break*/, 34];
                    var_211 = var_211 - 1;
                    var_136 = var_136 + 1;
                    if (!(var_211 <= 0)) return [3 /*break*/, 33];
                    var_211 = 0;
                    var_356 = 204;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 32:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 33:
                    if (var_136 == 11) {
                        var_136 = 0;
                    }
                    _a.label = 34;
                case 34:
                    if (!(var_137 >= 1)) return [3 /*break*/, 37];
                    var_211 = var_211 - 10;
                    var_137 = var_137 + 1;
                    if (!(var_211 <= 0)) return [3 /*break*/, 36];
                    var_211 = 0;
                    var_356 = 256;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 35:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 36:
                    if (var_137 == 11) {
                        var_137 = 0;
                    }
                    _a.label = 37;
                case 37:
                    if (var_134 >= 1) {
                        var_134 = var_134 + 1;
                        if (var_134 == 30) {
                            var_134 = 0;
                        }
                    }
                    if (!(var_177 >= 1)) return [3 /*break*/, 40];
                    var_177 = var_177 + 1;
                    if (!(var_177 == 11)) return [3 /*break*/, 40];
                    return [4 /*yield*/, func701()];
                case 38:
                    _a.sent();
                    var_177 = 0;
                    if (!(var_211 <= 0)) return [3 /*break*/, 40];
                    var_211 = 0;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 39:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 40:
                    if (!(var_71[var_66][var_67] == 13)) return [3 /*break*/, 43];
                    if (!(var_357 == 105 || var_358 == 105 || var_215 == 105)) return [3 /*break*/, 43];
                    return [4 /*yield*/, func501()];
                case 41:
                    _a.sent();
                    if (!(var_211 <= 0)) return [3 /*break*/, 43];
                    var_211 = 0;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 42:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 43:
                    if (!(var_156[311] == 1 && var_144 == 0 && var_218 == 0)) return [3 /*break*/, 46];
                    return [4 /*yield*/, func500()];
                case 44:
                    _a.sent();
                    if (!(var_211 <= 0)) return [3 /*break*/, 46];
                    var_211 = 0;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 45:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 46:
                    if (!(var_140 >= 1 && var_144 == 0 && var_218 == 0)) return [3 /*break*/, 49];
                    return [4 /*yield*/, func542()];
                case 47:
                    _a.sent();
                    if (!(var_211 <= 0)) return [3 /*break*/, 49];
                    var_211 = 0;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 48:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 49:
                    if (!(var_193 == 0)) return [3 /*break*/, 65];
                    if (!(var_350 < 1)) return [3 /*break*/, 55];
                    var_211 = var_211 - 1;
                    cnt5_1 = 0;
                    _a.label = 50;
                case 50:
                    if (!(cnt5_1 < 3)) return [3 /*break*/, 53];
                    return [4 /*yield*/, func337()];
                case 51:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 52;
                case 52:
                    ++cnt5_1;
                    return [3 /*break*/, 50];
                case 53:
                    if (!(var_211 <= 0)) return [3 /*break*/, 55];
                    var_211 = 0;
                    var_356 = 201;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 54:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 55:
                    var_359 = 0;
                    if (var_129 != 0 || var_130 != 0) {
                        var_359 = 1;
                    }
                    if (var_156[300] != 1 && var_359 == 0) {
                        var_360 = var_360 + 2;
                    }
                    if (var_156[300] == 1 && var_359 == 0) {
                        var_360 = var_360 + 1;
                    }
                    if (var_156[300] != 1 && var_359 == 1) {
                        var_360 = var_360 + 4;
                    }
                    if (var_156[300] == 1 && var_359 == 1) {
                        var_360 = var_360 + 2;
                    }
                    // No = 0 なので、拠点(ホテル、亀、)
                    if (dangeon_number == 0) {
                        var_360 = 0;
                    }
                    if (var_360 >= 20) {
                        var_360 = 0;
                        var_350 = var_350 - 1;
                        if (var_350 < 1) {
                            var_350 = 0;
                        }
                    }
                    if (!(var_350 == 20 && var_360 == 0)) return [3 /*break*/, 57];
                    var_361 = 1;
                    var_362 = 1;
                    return [4 /*yield*/, func071()];
                case 56:
                    _a.sent();
                    _a.label = 57;
                case 57:
                    if (!(var_350 == 10 && var_360 == 0)) return [3 /*break*/, 59];
                    var_361 = 2;
                    var_362 = 1;
                    return [4 /*yield*/, func071()];
                case 58:
                    _a.sent();
                    _a.label = 59;
                case 59:
                    if (var_350 > 1) {
                        var_363 = 0;
                    }
                    if (var_350 == 1 && var_363 == 0) {
                        if (var_156[300] != 1 && var_359 == 0) {
                            if (var_360 > 12) {
                                var_363 = 1;
                            }
                        }
                        if (var_156[300] == 1 && var_359 == 0) {
                            if (var_360 > 16) {
                                var_363 = 1;
                            }
                        }
                        if (var_156[300] != 1 && var_359 == 1) {
                            if (var_360 > 4) {
                                var_363 = 1;
                            }
                        }
                        if (var_156[300] == 1 && var_359 == 1) {
                            if (var_360 > 12) {
                                var_363 = 1;
                            }
                        }
                    }
                    if (!(var_350 == 1 && var_363 == 3)) return [3 /*break*/, 61];
                    var_363 = 4;
                    var_361 = 5;
                    var_362 = 1;
                    return [4 /*yield*/, func071()];
                case 60:
                    _a.sent();
                    _a.label = 61;
                case 61:
                    if (!(var_350 == 1 && var_363 == 2)) return [3 /*break*/, 63];
                    var_363 = 3;
                    var_361 = 4;
                    var_362 = 1;
                    return [4 /*yield*/, func071()];
                case 62:
                    _a.sent();
                    _a.label = 63;
                case 63:
                    if (!(var_350 == 1 && var_363 == 1)) return [3 /*break*/, 65];
                    var_363 = 2;
                    var_361 = 3;
                    var_362 = 1;
                    return [4 /*yield*/, func071()];
                case 64:
                    _a.sent();
                    _a.label = 65;
                case 65:
                    if (!(var_156[315] == 1 && var_144 == 0 && var_262 == 0 && var_218 == 0)) return [3 /*break*/, 70];
                    if (!(var_66 != var_236 || var_67 != var_237)) return [3 /*break*/, 70];
                    var_364 = 0;
                    if (var_80[var_290][var_67] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_290][var_67];
                    }
                    if (var_80[var_289][var_67] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_289][var_67];
                    }
                    if (var_80[var_66][var_291] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_66][var_291];
                    }
                    if (var_80[var_66][var_292] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_66][var_292];
                    }
                    if (var_80[var_290][var_291] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_290][var_291];
                    }
                    if (var_80[var_289][var_291] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_289][var_291];
                    }
                    if (var_80[var_290][var_292] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_290][var_292];
                    }
                    if (var_80[var_289][var_292] != 0) {
                        var_364 = 1;
                        var_365 = var_80[var_289][var_292];
                    }
                    if (var_364 == 1) {
                        var_366 = 0;
                        if (var_81[var_365][4] == 1) {
                            var_366 = 1;
                        }
                        if (var_121 == 1) {
                            var_366 = 1;
                        }
                        if (var_81[var_365][0] >= 70) {
                            var_366 = 1;
                        }
                        if (var_366 == 1) {
                            var_364 = 0;
                        }
                    }
                    if (!(var_364 == 1)) return [3 /*break*/, 70];
                    var_271 = 1;
                    cnt5_2 = 0;
                    _a.label = 66;
                case 66:
                    if (!(cnt5_2 < 10)) return [3 /*break*/, 69];
                    return [4 /*yield*/, func337()];
                case 67:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 68;
                case 68:
                    ++cnt5_2;
                    return [3 /*break*/, 66];
                case 69:
                    var_271 = 0;
                    var_364 = 0;
                    _a.label = 70;
                case 70:
                    if (!(var_126 == 1)) return [3 /*break*/, 72];
                    var_166 = var_166 + 1;
                    if (!(var_166 == 10)) return [3 /*break*/, 72];
                    var_166 = 0;
                    var_126 = 0;
                    var_240 = 0;
                    return [4 /*yield*/, func036()];
                case 71:
                    _a.sent();
                    _a.label = 72;
                case 72:
                    if (!(var_127 == 1)) return [3 /*break*/, 75];
                    var_167 = var_167 + 1;
                    if (!(var_167 == 20)) return [3 /*break*/, 75];
                    var_167 = 0;
                    var_127 = 0;
                    var_240 = 0;
                    return [4 /*yield*/, func331()];
                case 73:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    return [4 /*yield*/, func034()];
                case 74:
                    _a.sent(); // 盲目状態から復帰した時の表示
                    _a.label = 75;
                case 75:
                    if (!(var_132 >= 1)) return [3 /*break*/, 78];
                    var_132 = var_132 + 1;
                    if (!(var_132 >= 20)) return [3 /*break*/, 78];
                    var_132 = 0;
                    var_240 = 0;
                    return [4 /*yield*/, func331()];
                case 76:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    return [4 /*yield*/, func035()];
                case 77:
                    _a.sent();
                    _a.label = 78;
                case 78:
                    if (!(var_159 >= 1)) return [3 /*break*/, 80];
                    var_159 = var_159 + 1;
                    if (!(var_159 >= 22)) return [3 /*break*/, 80];
                    var_159 = 0;
                    var_240 = 0;
                    return [4 /*yield*/, func029()];
                case 79:
                    _a.sent(); // オアシスの壁を溶かす効果が切れた時の表示
                    _a.label = 80;
                case 80:
                    if (!(var_140 >= 1)) return [3 /*break*/, 82];
                    var_141 = var_141 + 1;
                    if (var_156[363] == 1) {
                        var_141 = var_141 + 1;
                    }
                    if (!(var_141 >= 30)) return [3 /*break*/, 82];
                    var_141 = 1;
                    return [4 /*yield*/, func543()];
                case 81:
                    _a.sent();
                    _a.label = 82;
                case 82:
                    if (!(var_131 >= 1)) return [3 /*break*/, 84];
                    var_131 = var_131 + 1;
                    if (!(var_131 == 12)) return [3 /*break*/, 84];
                    var_131 = 0;
                    var_240 = 0;
                    return [4 /*yield*/, func028()];
                case 83:
                    _a.sent(); // メタリカの透明化が切れた時の表示
                    _a.label = 84;
                case 84:
                    if (!(var_218 >= 1 && var_218 < 30)) return [3 /*break*/, 86];
                    var_218 = var_218 + 1;
                    if (!(var_218 == 21)) return [3 /*break*/, 86];
                    var_218 = 0;
                    var_240 = 0;
                    return [4 /*yield*/, func031()];
                case 85:
                    _a.sent();
                    _a.label = 86;
                case 86:
                    if (!(var_218 >= 30)) return [3 /*break*/, 88];
                    var_218 = var_218 + 1;
                    if (!(var_218 == 2000)) return [3 /*break*/, 88];
                    var_218 = 0;
                    var_240 = 0;
                    return [4 /*yield*/, func033()];
                case 87:
                    _a.sent(); // スティッキーフィンガーズの発動効果が切れた時の表示
                    _a.label = 88;
                case 88:
                    if (!(var_139 >= 1)) return [3 /*break*/, 90];
                    var_139 = var_139 + 1;
                    if (!(var_139 >= 50)) return [3 /*break*/, 90];
                    var_139 = 0;
                    var_240 = 0;
                    return [4 /*yield*/, func037()];
                case 89:
                    _a.sent();
                    _a.label = 90;
                case 90:
                    if (!(var_146 >= 1)) return [3 /*break*/, 92];
                    var_146++;
                    if (!(var_146 >= 22)) return [3 /*break*/, 92];
                    var_146 = 0;
                    var_147 = 0;
                    var_148 = 0;
                    var_240 = 0;
                    return [4 /*yield*/, func040()];
                case 91:
                    _a.sent();
                    _a.label = 92;
                case 92:
                    if (!(var_144 >= 1)) return [3 /*break*/, 104];
                    var_144 = var_144 + 1;
                    if (!(var_144 == 45)) return [3 /*break*/, 94];
                    return [4 /*yield*/, func041()];
                case 93:
                    _a.sent();
                    _a.label = 94;
                case 94:
                    if (!(var_192 == 0 && var_144 >= 104)) return [3 /*break*/, 96];
                    return [4 /*yield*/, func042()];
                case 95:
                    _a.sent();
                    _a.label = 96;
                case 96:
                    if (!(var_192 == 1 && var_144 >= 114)) return [3 /*break*/, 98];
                    return [4 /*yield*/, func042()];
                case 97:
                    _a.sent();
                    _a.label = 98;
                case 98:
                    if (!(var_192 == 2 && var_144 >= 124)) return [3 /*break*/, 100];
                    return [4 /*yield*/, func042()];
                case 99:
                    _a.sent();
                    _a.label = 100;
                case 100:
                    if (!(var_192 == 3 && var_144 >= 93)) return [3 /*break*/, 102];
                    return [4 /*yield*/, func042()];
                case 101:
                    _a.sent();
                    _a.label = 102;
                case 102:
                    if (!(var_144 >= 200)) return [3 /*break*/, 104];
                    return [4 /*yield*/, func042()];
                case 103:
                    _a.sent();
                    _a.label = 104;
                case 104:
                    if (var_191 >= 1) {
                        var_191++;
                        if (var_191 == 50) {
                            var_191 = 0;
                        }
                    }
                    if (var_116 == 1 && var_114 == 0) {
                        var_115 = var_115 + 1;
                        if (var_115 == 6) {
                            var_115 = 0;
                            var_116 = 2;
                        }
                    }
                    var_367 = var_367 + 1;
                    if (var_367 >= 20) {
                        var_367 = 0;
                    }
                    if (!(var_77[var_66][var_67] != 0 && var_139 == 0 && var_144 == 0 && var_218 == 0 && var_128 == 0 && var_219 == 0 && var_178 == 0)) return [3 /*break*/, 110];
                    if (!(var_342 == 0 && key_X_on == 0)) return [3 /*break*/, 108];
                    var_368 = var_77[var_66][var_67];
                    if (!(var_78[var_368].Var11 == 1)) return [3 /*break*/, 106];
                    return [4 /*yield*/, func419()];
                case 105:
                    _a.sent(); // アイテムに乗った時の動作処理
                    _a.label = 106;
                case 106:
                    if (!(var_78[var_368].Var11 == 0)) return [3 /*break*/, 108];
                    return [4 /*yield*/, func400()];
                case 107:
                    _a.sent(); // アイテムを拾う際の動作処理
                    _a.label = 108;
                case 108:
                    if (!(key_X_on == 1)) return [3 /*break*/, 110];
                    return [4 /*yield*/, func419()];
                case 109:
                    _a.sent(); // アイテムに乗った時の動作処理
                    _a.label = 110;
                case 110:
                    if (!(var_80[var_66][var_67] > 0 && var_343 == 0 && var_128 == 0 && var_369 == 0 && var_139 == 0 && var_144 == 0 && var_218 == 0 && var_219 == 0 && var_178 == 0)) return [3 /*break*/, 113];
                    var_343 = 0;
                    var_240 = 0;
                    return [4 /*yield*/, func541()];
                case 111:
                    _a.sent();
                    if (!(var_211 <= 0)) return [3 /*break*/, 113];
                    var_211 = 0;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 112:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 113:
                    if (var_369 == 1) {
                        var_369 = 0;
                    }
                    if (!(var_370 == 1)) return [3 /*break*/, 115];
                    var_217 = 0;
                    return [4 /*yield*/, func548()];
                case 114:
                    _a.sent();
                    return [2 /*return*/];
                case 115:
                    if (!(var_371 == 1)) return [3 /*break*/, 117];
                    var_217 = 0;
                    return [4 /*yield*/, func551()];
                case 116:
                    _a.sent();
                    return [2 /*return*/];
                case 117:
                    if (!(var_372 == 1)) return [3 /*break*/, 149];
                    var_373 = 5;
                    cnt3_6 = 0;
                    _a.label = 118;
                case 118:
                    if (!(cnt3_6 < 2)) return [3 /*break*/, 121];
                    return [4 /*yield*/, func337()];
                case 119:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 120;
                case 120:
                    ++cnt3_6;
                    return [3 /*break*/, 118];
                case 121:
                    var_373 = 4;
                    cnt3_7 = 0;
                    _a.label = 122;
                case 122:
                    if (!(cnt3_7 < 2)) return [3 /*break*/, 125];
                    return [4 /*yield*/, func337()];
                case 123:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 124;
                case 124:
                    ++cnt3_7;
                    return [3 /*break*/, 122];
                case 125:
                    var_373 = 3;
                    cnt3_8 = 0;
                    _a.label = 126;
                case 126:
                    if (!(cnt3_8 < 2)) return [3 /*break*/, 129];
                    return [4 /*yield*/, func337()];
                case 127:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 128;
                case 128:
                    ++cnt3_8;
                    return [3 /*break*/, 126];
                case 129:
                    var_373 = 2;
                    cnt3_9 = 0;
                    _a.label = 130;
                case 130:
                    if (!(cnt3_9 < 2)) return [3 /*break*/, 133];
                    return [4 /*yield*/, func337()];
                case 131:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 132;
                case 132:
                    ++cnt3_9;
                    return [3 /*break*/, 130];
                case 133:
                    var_373 = 1;
                    cnt3_10 = 0;
                    _a.label = 134;
                case 134:
                    if (!(cnt3_10 < 10)) return [3 /*break*/, 137];
                    return [4 /*yield*/, func337()];
                case 135:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 136;
                case 136:
                    ++cnt3_10;
                    return [3 /*break*/, 134];
                case 137:
                    var_373 = 0;
                    var_374 = 0;
                    if (!(var_375 == 1)) return [3 /*break*/, 140];
                    var_372 = 0;
                    return [4 /*yield*/, func233()];
                case 138:
                    _a.sent();
                    return [4 /*yield*/, func880()];
                case 139:
                    _a.sent();
                    return [2 /*return*/];
                case 140:
                    current_floor = current_floor + 1;
                    if (current_floor > var_376) {
                        var_376 = current_floor;
                    }
                    // No = 1 なので、ホテルの外
                    if (dangeon_number == 1 && current_floor > dangeon1_floor) {
                        dangeon1_floor = current_floor;
                    }
                    // No = 2 なので、レクイエムの大迷宮
                    if (dangeon_number == 2 && current_floor > dangeon2_floor) {
                        dangeon2_floor = current_floor;
                    }
                    // No = 3 なので、ディアボロの試練
                    if (dangeon_number == 3 && current_floor > dangeon3_floor) {
                        dangeon3_floor = current_floor;
                    }
                    // No = 4 なので、一巡後の世界
                    if (dangeon_number == 4 && current_floor > dangeon4_floor) {
                        dangeon4_floor = current_floor;
                    }
                    if (dangeon_number == 5 && current_floor > dangeon5_floor) {
                        dangeon5_floor = current_floor;
                    }
                    var_94 = 0;
                    return [4 /*yield*/, func059()];
                case 141:
                    _a.sent();
                    var_372 = 0;
                    var_217 = 0;
                    var_205 = 1;
                    return [4 /*yield*/, func231()];
                case 142:
                    _a.sent();
                    return [4 /*yield*/, func076()];
                case 143:
                    _a.sent(); // マップ背景画像の読込
                    cnt3_11 = 0;
                    _a.label = 144;
                case 144:
                    if (!(cnt3_11 < 80)) return [3 /*break*/, 147];
                    return [4 /*yield*/, func339()];
                case 145:
                    _a.sent();
                    _a.label = 146;
                case 146:
                    ++cnt3_11;
                    return [3 /*break*/, 144];
                case 147: return [4 /*yield*/, func006()];
                case 148:
                    _a.sent();
                    return [2 /*return*/];
                case 149:
                    if (!(var_382 == 1)) return [3 /*break*/, 153];
                    var_382 = 0;
                    if (!(var_85 == 0 && var_163 == 0 && var_383 == 0)) return [3 /*break*/, 151];
                    return [4 /*yield*/, func722()];
                case 150:
                    _a.sent();
                    _a.label = 151;
                case 151:
                    var_383 = 0;
                    return [4 /*yield*/, func009()];
                case 152:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 153:
                    if (var_157 != 0) {
                        if (var_157 == 2) {
                            var_384 = 1;
                        }
                        if (var_157 == 1) {
                            var_384 = 2;
                        }
                        if (var_384 == 1) {
                            var_157 = 1;
                        }
                        if (var_384 == 2) {
                            var_157 = 2;
                        }
                    }
                    if (!(var_157 == 1)) return [3 /*break*/, 160];
                    var_158 = var_158 + 1;
                    if (!(var_156[396] == 1)) return [3 /*break*/, 155];
                    var_158 = 0;
                    return [4 /*yield*/, func043()];
                case 154:
                    _a.sent();
                    _a.label = 155;
                case 155:
                    if (!(var_158 == 20)) return [3 /*break*/, 160];
                    var_240 = 0;
                    var_157 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "普通の速さに戻った";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 156:
                    _a.sent();
                    cnt4_2 = 0;
                    _a.label = 157;
                case 157:
                    if (!(cnt4_2 < 9)) return [3 /*break*/, 160];
                    return [4 /*yield*/, func337()];
                case 158:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 159;
                case 159:
                    ++cnt4_2;
                    return [3 /*break*/, 157];
                case 160:
                    if (!(var_163 == 0)) return [3 /*break*/, 197];
                    var_385 = 1;
                    return [4 /*yield*/, func579()];
                case 161:
                    _a.sent();
                    if (!(var_212 == 1)) return [3 /*break*/, 163];
                    return [4 /*yield*/, func009()];
                case 162:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 163:
                    if (!(var_211 <= 0)) return [3 /*break*/, 165];
                    var_211 = 0;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 164:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 165:
                    var_385 = 0;
                    var_217 = 0;
                    if (!(var_151 == 0)) return [3 /*break*/, 197];
                    if (!(var_72[var_66][var_67] >= 1 && var_72[var_236][var_237] == 0 && var_85 == 0 && var_210 == 0)) return [3 /*break*/, 167];
                    if (!(var_66 != var_236 || var_67 != var_237)) return [3 /*break*/, 167];
                    var_240 = 0;
                    return [4 /*yield*/, func706()];
                case 166:
                    _a.sent();
                    _a.label = 167;
                case 167:
                    if (var_262 == 0) {
                        var_112 = var_112 + 1;
                    }
                    if (var_156[396] == 1 && var_112 < 680) {
                        var_112 = var_112 + 2;
                    }
                    if (!(var_112 == 700 || var_112 == 850 || var_112 == 1000)) return [3 /*break*/, 170];
                    var_240 = 0;
                    return [4 /*yield*/, func072()];
                case 168:
                    _a.sent();
                    if (!(var_211 <= 0)) return [3 /*break*/, 170];
                    var_211 = 0;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 169:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 170:
                    if (!(var_72[var_236][var_237] >= 1 && var_72[var_66][var_67] == 0 && var_85 == 0)) return [3 /*break*/, 172];
                    return [4 /*yield*/, func722()];
                case 171:
                    _a.sent();
                    _a.label = 172;
                case 172:
                    var_165 = var_165 + 1;
                    if (var_156[358] == 1) {
                        var_165 = var_165 + 1;
                    }
                    // No = 1 なので、ホテルの外
                    if (dangeon_number == 1 && current_floor == 12 && var_94 == 0 && var_386 == 0) {
                        var_165 = 0;
                    }
                    if (var_190 == 1) {
                        var_165 = 0;
                    }
                    // No = 3 なので、ディアボロの試練
                    if (dangeon_number == 3 && current_floor == 99) {
                        var_165 = 0;
                    }
                    if (var_94 == 1 && var_387 == 0) {
                        var_165 = 0;
                    }
                    if (var_375 == 1) {
                        var_165 = 0;
                    }
                    if (var_94 == 3) {
                        var_165 = 0;
                    }
                    if (var_94 == 5) {
                        var_165 = 0;
                    }
                    if (var_94 == 9) {
                        var_165 = 0;
                    }
                    if (var_262 == 1) {
                        var_165 = 0;
                    }
                    if (!(var_165 >= 64 && var_97 < 50)) return [3 /*break*/, 174];
                    var_165 = 0;
                    return [4 /*yield*/, func556()];
                case 173:
                    _a.sent();
                    _a.label = 174;
                case 174:
                    if (!(var_186 != 0)) return [3 /*break*/, 176];
                    var_183++;
                    if (!(var_183 == 5)) return [3 /*break*/, 176];
                    return [4 /*yield*/, func693()];
                case 175:
                    _a.sent();
                    _a.label = 176;
                case 176:
                    if (!(var_156[302] == 1 && var_262 == 0 && var_144 == 0 && var_218 == 0 && var_128 == 0 && var_219 == 0 && var_178 == 0 && var_139 == 0)) return [3 /*break*/, 182];
                    var_388 = rnd(200);
                    if (!(var_388 == 0)) return [3 /*break*/, 178];
                    var_240 = 0;
                    return [4 /*yield*/, func534()];
                case 177:
                    _a.sent();
                    _a.label = 178;
                case 178:
                    if (!(var_212 == 1)) return [3 /*break*/, 180];
                    return [4 /*yield*/, func009()];
                case 179:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 180:
                    if (!(var_211 <= 0)) return [3 /*break*/, 182];
                    var_211 = 0;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 181:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 182:
                    if (!(var_156[310] == 1 && var_262 == 0 && var_144 == 0 && var_218 == 0 && var_128 == 0 && var_219 == 0 && var_178 == 0 && var_139 == 0)) return [3 /*break*/, 191];
                    var_388 = rnd(200);
                    if (!(var_388 == 0)) return [3 /*break*/, 191];
                    var_240 = 0;
                    return [4 /*yield*/, func094()];
                case 183:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ｴﾝﾌﾟﾚｽ「ﾃﾞｨｱﾎﾞﾛはここよッ！";
                    comments_row2 = "　　　ここにいるわよォ―――ッ」";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[5];
                    var_26_x = var_26[5];
                    var_27_x = var_27[5];
                    var_389 = 2;
                    return [4 /*yield*/, func047()];
                case 184:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 185:
                    _a.sent(); // キー入力による選択処理
                    var_390 = 1;
                    for (cnt5_3 = 0; cnt5_3 < var_97; ++cnt5_3) {
                        var_83[var_390].Var12 = 0;
                        var_390 = var_390 + 1;
                    }
                    var_389 = 0;
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "フロアの敵が全員 目を覚ました！";
                    comments_row2a = "";
                    return [4 /*yield*/, func047()];
                case 186:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 187:
                    _a.sent();
                    cnt5_4 = 0;
                    _a.label = 188;
                case 188:
                    if (!(cnt5_4 < 10)) return [3 /*break*/, 191];
                    return [4 /*yield*/, func337()];
                case 189:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 190;
                case 190:
                    ++cnt5_4;
                    return [3 /*break*/, 188];
                case 191:
                    if (!(sympathy_id == 106 || sympathy_id == 114 || sympathy_id == 121)) return [3 /*break*/, 197];
                    var_388 = rnd(300);
                    if (!(var_388 == 0 && var_144 == 0 && var_218 == 0 && var_128 == 0 && var_219 == 0 && var_178 == 0 && var_139 == 0)) return [3 /*break*/, 197];
                    var_240 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「クンクンクン・・・」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_391 = 1;
                    DSPLAY(audio_id = 184);
                    return [4 /*yield*/, func331()];
                case 192:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    return [4 /*yield*/, func047()];
                case 193:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 194:
                    _a.sent(); // キー入力による選択処理
                    return [4 /*yield*/, func051()];
                case 195:
                    _a.sent();
                    var_391 = 0;
                    return [4 /*yield*/, func331()];
                case 196:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    _a.label = 197;
                case 197:
                    if (var_198 == 0) {
                        comments_row1 = "";
                        comments_row2 = "";
                        var_295 = "";
                        comments_row1a = "";
                        comments_row2a = "";
                        var_298 = "";
                        var_300 = 0;
                    }
                    if (!(var_123 == 0)) return [3 /*break*/, 216];
                    if (!(var_163 == 1)) return [3 /*break*/, 216];
                    DSPLAY(audio_id = 181);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「" + var_164 + "秒経過！」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 198:
                    _a.sent();
                    cnt3_12 = 0;
                    _a.label = 199;
                case 199:
                    if (!(cnt3_12 < 10)) return [3 /*break*/, 202];
                    return [4 /*yield*/, func337()];
                case 200:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 201;
                case 201:
                    ++cnt3_12;
                    return [3 /*break*/, 199];
                case 202:
                    var_164++;
                    var_392 = 0;
                    if (var_164 == 6 && var_130 == 0) {
                        var_392 = 1;
                    }
                    if (var_164 == 6 && var_130 == 1) {
                        var_392 = 2;
                    }
                    if (var_164 == 11 && var_130 == 1) {
                        var_392 = 1;
                    }
                    if (var_164 == 3 && var_153 >= 1) {
                        var_392 = 1;
                    }
                    if (!(var_392 == 2)) return [3 /*break*/, 208];
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "まだまだ止めていられるぞ…";
                    comments_row2a = "";
                    return [4 /*yield*/, func047()];
                case 203:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 204:
                    _a.sent();
                    cnt4_3 = 0;
                    _a.label = 205;
                case 205:
                    if (!(cnt4_3 < 10)) return [3 /*break*/, 208];
                    return [4 /*yield*/, func337()];
                case 206:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 207;
                case 207:
                    ++cnt4_3;
                    return [3 /*break*/, 205];
                case 208:
                    if (!(var_392 == 1)) return [3 /*break*/, 216];
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "そして時は動き出す…";
                    comments_row2a = "";
                    if (var_153 == 1) {
                        comments_row1a = "パンチ一発分が限界か…";
                        comments_row2a = "";
                    }
                    if (var_153 == 2) {
                        comments_row1a = "「時」は動き出す";
                        comments_row2a = "";
                    }
                    return [4 /*yield*/, func047()];
                case 209:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 210:
                    _a.sent();
                    cnt4_4 = 0;
                    _a.label = 211;
                case 211:
                    if (!(cnt4_4 < 10)) return [3 /*break*/, 214];
                    return [4 /*yield*/, func337()];
                case 212:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 213;
                case 213:
                    ++cnt4_4;
                    return [3 /*break*/, 211];
                case 214:
                    var_153 = 0;
                    var_164 = 0;
                    var_163 = 0;
                    if (!(var_72[var_66][var_67] == 0 && var_85 == 0)) return [3 /*break*/, 216];
                    return [4 /*yield*/, func722()];
                case 215:
                    _a.sent();
                    _a.label = 216;
                case 216:
                    if (!(var_123 >= 1)) return [3 /*break*/, 222];
                    var_393[var_123][0] = var_199;
                    if (var_66 == var_393[var_123][1] && var_67 == var_393[var_123][2]) {
                        var_393[var_123][0] = 0;
                    }
                    var_393[var_123][1] = var_66;
                    var_393[var_123][2] = var_67;
                    var_123++;
                    if (!(var_123 > 6)) return [3 /*break*/, 222];
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "時は再び刻み始める…";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 217:
                    _a.sent();
                    cnt3_13 = 0;
                    _a.label = 218;
                case 218:
                    if (!(cnt3_13 < 10)) return [3 /*break*/, 221];
                    return [4 /*yield*/, func337()];
                case 219:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 220;
                case 220:
                    ++cnt3_13;
                    return [3 /*break*/, 218];
                case 221:
                    var_394 = var_83[var_124].Var1;
                    var_395 = var_83[var_124].Var2;
                    var_82[var_394][var_395] = 0;
                    var_83[var_124].Var0 = 0;
                    var_83[var_124].Var1 = 0;
                    var_83[var_124].Var2 = 0;
                    var_123 = 0;
                    var_92 = var_396;
                    _a.label = 222;
                case 222:
                    if (!(var_151 == 0)) return [3 /*break*/, 260];
                    if (!(var_96 >= 1 && var_201 == var_204)) return [3 /*break*/, 224];
                    var_240 = 0;
                    return [4 /*yield*/, func074()];
                case 223:
                    _a.sent();
                    _a.label = 224;
                case 224:
                    if (!(var_133 == 1)) return [3 /*break*/, 234];
                    var_217 = 1;
                    return [4 /*yield*/, func020()];
                case 225:
                    _a.sent();
                    var_385 = 1;
                    return [4 /*yield*/, func579()];
                case 226:
                    _a.sent();
                    if (!(var_212 == 1)) return [3 /*break*/, 228];
                    return [4 /*yield*/, func009()];
                case 227:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 228:
                    if (!(var_211 <= 0)) return [3 /*break*/, 230];
                    var_211 = 0;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 229:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 230:
                    var_385 = 0;
                    var_217 = 0;
                    var_397 = var_397 + 1;
                    if (!(var_397 == 10)) return [3 /*break*/, 232];
                    var_397 = 0;
                    var_133 = 0;
                    var_240 = 0;
                    return [4 /*yield*/, func030()];
                case 231:
                    _a.sent(); // 鈍足状態から復帰した時の表示
                    _a.label = 232;
                case 232: return [4 /*yield*/, func331()];
                case 233:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    _a.label = 234;
                case 234:
                    if (!(var_169 == 999999)) return [3 /*break*/, 241];
                    var_398 = 0;
                    for (cnt3_14 = 0; cnt3_14 < var_97 + 1; ++cnt3_14) {
                        if (var_83[cnt3_14][0] == 130) {
                            var_399 = var_83[cnt4][1];
                            var_400 = var_83[cnt4][2];
                            var_82[var_399][var_400] = 0;
                            var_83[cnt4][0] = 0;
                            var_83[cnt4][1] = 0;
                            var_83[cnt4][2] = 0;
                            var_398 = 1;
                        }
                    }
                    if (!(var_398 == 1)) return [3 /*break*/, 241];
                    return [4 /*yield*/, func094()];
                case 235:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾏﾘﾘﾝﾏﾝｿﾝ「マタ会オウ！」";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 236:
                    _a.sent();
                    var_240 = 0;
                    return [4 /*yield*/, func331()];
                case 237:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    cnt4_5 = 0;
                    _a.label = 238;
                case 238:
                    if (!(cnt4_5 < 20)) return [3 /*break*/, 241];
                    return [4 /*yield*/, func337()];
                case 239:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 240;
                case 240:
                    ++cnt4_5;
                    return [3 /*break*/, 238];
                case 241:
                    if (!(var_208 != 0 && var_211 != 0)) return [3 /*break*/, 250];
                    var_401 = 1;
                    cnt3_15 = 0;
                    _a.label = 242;
                case 242:
                    if (!(cnt3_15 < var_97)) return [3 /*break*/, 250];
                    if (!(var_83[var_401].Var0 != 0 && var_83[var_401].Var19 == 1)) return [3 /*break*/, 248];
                    var_402 = var_401;
                    var_209 = var_208;
                    var_403 = "とりついたﾗﾊﾞｰｽﾞの攻撃！";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_240 = 0;
                    cnt5_5 = 0;
                    _a.label = 243;
                case 243:
                    if (!(cnt5_5 < 5)) return [3 /*break*/, 246];
                    return [4 /*yield*/, func337()];
                case 244:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 245;
                case 245:
                    ++cnt5_5;
                    return [3 /*break*/, 243];
                case 246: return [4 /*yield*/, func705()];
                case 247:
                    _a.sent();
                    _a.label = 248;
                case 248:
                    var_401 = var_401 + 1;
                    _a.label = 249;
                case 249:
                    ++cnt3_15;
                    return [3 /*break*/, 242];
                case 250:
                    if (!(var_212 == 1)) return [3 /*break*/, 252];
                    return [4 /*yield*/, func009()];
                case 251:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 252:
                    if (!(var_211 <= 0)) return [3 /*break*/, 254];
                    var_211 = 0;
                    var_212 = 1;
                    return [4 /*yield*/, func009()];
                case 253:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 254:
                    if (!(dangeon_number == 0 && var_66 == 11 && var_67 == 8)) return [3 /*break*/, 256];
                    if (!(var_66 != var_236 || var_67 != var_237)) return [3 /*break*/, 256];
                    return [4 /*yield*/, func824()];
                case 255:
                    _a.sent();
                    return [2 /*return*/];
                case 256:
                    if (!(dangeon_number == 0 && var_404 >= 1 && var_66 == 17 && var_67 == 9)) return [3 /*break*/, 258];
                    if (!(var_66 != var_236 || var_67 != var_237)) return [3 /*break*/, 258];
                    return [4 /*yield*/, func826()];
                case 257:
                    _a.sent();
                    return [2 /*return*/];
                case 258:
                    if (!(var_73[var_66][var_67] >= 1 && var_344 == 0 && var_139 == 0 && var_144 == 0 && var_128 == 0 && var_219 == 0 && var_114 == 0 && var_178 == 0)) return [3 /*break*/, 260];
                    var_405 = 1;
                    var_245 = 19;
                    var_246 = 45;
                    var_406 = 1;
                    var_240 = 0;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func060()];
                case 259:
                    _a.sent();
                    return [2 /*return*/];
                case 260:
                    if (!(var_151 >= 1)) return [3 /*break*/, 273];
                    var_151 = var_151 - 1;
                    if (!(var_151 == 1)) return [3 /*break*/, 273];
                    cnt3_16 = 0;
                    _a.label = 261;
                case 261:
                    if (!(cnt3_16 < 10)) return [3 /*break*/, 264];
                    return [4 /*yield*/, func337()];
                case 262:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 263;
                case 263:
                    ++cnt3_16;
                    return [3 /*break*/, 261];
                case 264:
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "そして時は動き出す…";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
                    return [4 /*yield*/, func047()];
                case 265:
                    _a.sent();
                    cnt3_17 = 0;
                    _a.label = 266;
                case 266:
                    if (!(cnt3_17 < 10)) return [3 /*break*/, 269];
                    return [4 /*yield*/, func337()];
                case 267:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 268;
                case 268:
                    ++cnt3_17;
                    return [3 /*break*/, 266];
                case 269:
                    var_151 = 0;
                    var_152 = 0;
                    var_154 = 0;
                    cnt3_18 = 0;
                    _a.label = 270;
                case 270:
                    if (!(cnt3_18 < 5)) return [3 /*break*/, 273];
                    return [4 /*yield*/, func337()];
                case 271:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 272;
                case 272:
                    ++cnt3_18;
                    return [3 /*break*/, 270];
                case 273:
                    var_217 = 0;
                    if (!(var_407 >= 1)) return [3 /*break*/, 279];
                    if (!(var_407 == 1)) return [3 /*break*/, 276];
                    return [4 /*yield*/, func907()];
                case 274:
                    _a.sent();
                    return [4 /*yield*/, func906()];
                case 275:
                    _a.sent();
                    _a.label = 276;
                case 276:
                    if (!(var_407 == 2)) return [3 /*break*/, 279];
                    return [4 /*yield*/, func929()];
                case 277:
                    _a.sent();
                    if (!(var_408 >= 1)) return [3 /*break*/, 279];
                    return [4 /*yield*/, func909()];
                case 278:
                    _a.sent();
                    _a.label = 279;
                case 279: return [4 /*yield*/, func009()];
                case 280:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
            }
        });
    });
}
function func020() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_6, cnt2_7, cnt2_8, cnt3_19, cnt3_20, cnt3_21, cnt4_6, cnt1_10, cnt4_7, cnt4_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(20);
                    var_362 = 0;
                    if (!(var_163 == 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func575()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func545()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if (!(var_240 == 0 || var_163 == 1)) return [3 /*break*/, 7];
                    var_409 = 3;
                    return [4 /*yield*/, func337()];
                case 4:
                    _a.sent(); // メッセージ関係呼び出し
                    var_409 = 2;
                    return [4 /*yield*/, func337()];
                case 5:
                    _a.sent(); // メッセージ関係呼び出し
                    var_409 = 1;
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 7;
                case 7:
                    var_409 = 0;
                    return [4 /*yield*/, func331()];
                case 8:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    if (var_163 == 1) {
                        return [2 /*return*/];
                    }
                    if (!(var_318 >= 1 && var_410 == 406)) return [3 /*break*/, 13];
                    var_240 = 0;
                    var_83[var_318].Var21 = 1;
                    if (var_199 == 2) {
                        var_411 = 3;
                    }
                    if (var_199 == 4) {
                        var_411 = 4;
                    }
                    if (var_199 == 8) {
                        var_411 = 1;
                    }
                    if (var_199 == 6) {
                        var_411 = 2;
                    }
                    if (var_199 == 1) {
                        var_411 = 8;
                    }
                    if (var_199 == 7) {
                        var_411 = 7;
                    }
                    if (var_199 == 3) {
                        var_411 = 6;
                    }
                    if (var_199 == 9) {
                        var_411 = 5;
                    }
                    cnt2_6 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt2_6 < 10)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 11;
                case 11:
                    ++cnt2_6;
                    return [3 /*break*/, 9];
                case 12:
                    var_83[var_318].Var21 = 0;
                    var_411 = 0;
                    var_318 = 0;
                    _a.label = 13;
                case 13:
                    if (!(var_318 >= 1 && var_410 != 406)) return [3 /*break*/, 37];
                    var_240 = 0;
                    var_412 = var_318;
                    var_83[var_318].Var21 = 1;
                    if (var_199 == 2) {
                        var_411 = 3;
                    }
                    if (var_199 == 4) {
                        var_411 = 4;
                    }
                    if (var_199 == 8) {
                        var_411 = 1;
                    }
                    if (var_199 == 6) {
                        var_411 = 2;
                    }
                    if (var_199 == 1) {
                        var_411 = 8;
                    }
                    if (var_199 == 7) {
                        var_411 = 7;
                    }
                    if (var_199 == 3) {
                        var_411 = 6;
                    }
                    if (var_199 == 9) {
                        var_411 = 5;
                    }
                    DSPLAY(audio_id = 106);
                    cnt2_7 = 0;
                    _a.label = 14;
                case 14:
                    if (!(cnt2_7 < 10)) return [3 /*break*/, 17];
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 16;
                case 16:
                    ++cnt2_7;
                    return [3 /*break*/, 14];
                case 17:
                    var_389 = 2;
                    var_413 = var_199;
                    var_199 = 2;
                    var_414 = 1;
                    var_271 = 1;
                    DSPLAY(audio_id = 188);
                    cnt2_8 = 0;
                    _a.label = 18;
                case 18:
                    if (!(cnt2_8 < 25)) return [3 /*break*/, 21];
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent(); // メッセージ関係呼び出し
                    var_414++;
                    _a.label = 20;
                case 20:
                    ++cnt2_8;
                    return [3 /*break*/, 18];
                case 21:
                    var_199 = var_413;
                    var_389 = 0;
                    var_414 = 0;
                    var_271 = 0;
                    var_83[var_318].Var21 = 0;
                    var_411 = 0;
                    var_318 = 0;
                    if (!(wallet < 1)) return [3 /*break*/, 31];
                    if (var_156[396] == 0) {
                        if (var_157 == 0) {
                            var_133 = 1;
                            var_397 = 0;
                        }
                        if (var_157 != 0) {
                            var_157 = 0;
                            var_158 = 0;
                        }
                    }
                    DSPLAY(audio_id = 162);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "罪悪感で体が重くなった！";
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 22:
                    _a.sent();
                    if (!(var_156[396] == 1)) return [3 /*break*/, 27];
                    return [4 /*yield*/, func340()];
                case 23:
                    _a.sent(); // キー入力による選択処理
                    return [4 /*yield*/, func094()];
                case 24:
                    _a.sent();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "しかし装備スタンドの効果で";
                    comments_row2a = "速度は遅くならない！";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func050()];
                case 25:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 26:
                    _a.sent();
                    _a.label = 27;
                case 27:
                    cnt3_19 = 0;
                    _a.label = 28;
                case 28:
                    if (!(cnt3_19 < 10)) return [3 /*break*/, 31];
                    return [4 /*yield*/, func337()];
                case 29:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 30;
                case 30:
                    ++cnt3_19;
                    return [3 /*break*/, 28];
                case 31:
                    if (!(wallet >= 1)) return [3 /*break*/, 37];
                    DSPLAY(audio_id = 207);
                    if (wallet <= 500) {
                        stolen_money = wallet;
                    }
                    if (wallet > 500) {
                        stolen_money = Math.floor(wallet / 2); // Math.floor は対象の値の小数点以下を切り捨て
                    }
                    wallet = wallet - stolen_money;
                    var_83[var_412].Var26 = 1;
                    belongings_item_list = 1;
                    var_417 = belongings_item_list;
                    target_item_name = "" + stolen_money + "G"; //現在の所持金表示
                    var_419 = var_412 + 200;
                    var_78[var_419].Var0 = 1;
                    var_78[var_419].Var1 = 0;
                    var_78[var_419].Var2 = 0;
                    var_78[var_419].Var3 = 0;
                    var_78[var_419].Var4 = 0;
                    var_78[var_419].Var5 = 0;
                    var_78[var_419].Var6 = 0;
                    var_78[var_419].Var7 = 0;
                    var_78[var_419].Var8 = 0;
                    var_78[var_419].Var9 = 0;
                    var_78[var_419].Var10 = 0;
                    var_78[var_419].Var11 = 0;
                    var_78[var_419].Var12 = 0;
                    // 0でなければ、もともとの配列に格納されている金額に新たに金額を追加する。var_78[var_419].Var13が金額を格納する配列？
                    if (var_78[var_419].Var13 != 0) {
                        var_78[var_419].Var13 = var_78[var_419].Var13 + stolen_money;
                    }
                    // 0であればそのまま金額を追加する。var_78[var_419].Var13が金額を格納する配列？
                    if (var_78[var_419].Var13 == 0) {
                        var_78[var_419].Var13 = stolen_money;
                    }
                    var_78[var_419].Var14 = 0;
                    var_78[var_419].Var15 = 0;
                    var_78[var_419].Var16 = 0;
                    var_78[var_419].Var17 = 0;
                    var_78[var_419].Var18 = 0;
                    var_78[var_419].Var19 = 0;
                    var_78[var_419].Var20 = 0;
                    var_78[var_419].Var21 = 0;
                    var_78[var_419].Var22 = 0;
                    var_78[var_419].Var23 = 0;
                    var_78[var_419].Var24 = 0;
                    var_78[var_419].Var25 = 0;
                    var_78[var_419].Var26 = 0;
                    var_78[var_419].Var27 = 0;
                    var_78[var_419].Var28 = 0;
                    var_78[var_419].Var29 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "罪悪感で" + target_item_name + " 奪われた！";
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 32:
                    _a.sent();
                    cnt3_20 = 0;
                    _a.label = 33;
                case 33:
                    if (!(cnt3_20 < 20)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func337()];
                case 34:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 35;
                case 35:
                    ++cnt3_20;
                    return [3 /*break*/, 33];
                case 36:
                    var_199 = var_413;
                    _a.label = 37;
                case 37:
                    if (!(var_420 >= 1)) return [3 /*break*/, 43];
                    var_420 = var_420 - 1;
                    if (!(var_420 == 0)) return [3 /*break*/, 43];
                    var_398 = 0;
                    for (cnt3_21 = 0; cnt3_21 < var_97 + 1; ++cnt3_21) {
                        if (var_83[cnt3_21][0] == 146 && var_83[cnt3_21][31] == 5) {
                            var_399 = var_83[cnt4][1];
                            var_400 = var_83[cnt4][2];
                            var_82[var_399][var_400] = 0;
                            var_83[cnt4][0] = 0;
                            var_83[cnt4][1] = 0;
                            var_83[cnt4][2] = 0;
                            var_83[cnt4][6] = 0;
                            var_83[cnt4][7] = 0;
                            var_83[cnt4][8] = 0;
                            var_83[cnt4][9] = 0;
                            var_83[cnt4][15] = 0;
                            var_83[cnt4][18] = 0;
                            var_398 = 1;
                        }
                    }
                    if (!(var_398 == 1)) return [3 /*break*/, 43];
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "残像ﾁｬﾘｵｯﾂは消えた。";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 38:
                    _a.sent();
                    var_240 = 0;
                    return [4 /*yield*/, func331()];
                case 39:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    cnt4_6 = 0;
                    _a.label = 40;
                case 40:
                    if (!(cnt4_6 < 10)) return [3 /*break*/, 43];
                    return [4 /*yield*/, func337()];
                case 41:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 42;
                case 42:
                    ++cnt4_6;
                    return [3 /*break*/, 40];
                case 43:
                    var_421 = 1;
                    var_422 = 0;
                    cnt1_10 = 0;
                    _a.label = 44;
                case 44:
                    if (!(cnt1_10 < var_97)) return [3 /*break*/, 71];
                    if (var_83[var_421].Var0 == 0 || var_83[var_421].Var0 == 50) {
                        var_421++;
                        return [3 /*break*/, 70];
                    }
                    if (var_151 >= 1 && var_421 != var_152) {
                        var_421++;
                        return [3 /*break*/, 70];
                    }
                    var_423 = var_83[var_421].Var1;
                    var_424 = var_83[var_421].Var2;
                    var_425 = var_423 - 1;
                    var_426 = var_423 + 1;
                    var_427 = var_424 + 1;
                    var_428 = var_424 - 1;
                    if (var_425 < 5) {
                        var_425 = 5;
                    }
                    if (var_428 < 5) {
                        var_428 = 5;
                    }
                    if (var_426 > var_33) {
                        var_426 = var_33;
                    }
                    if (var_427 > var_34) {
                        var_427 = var_34;
                    }
                    if (!(var_80[var_423][var_424] != 0)) return [3 /*break*/, 46];
                    return [4 /*yield*/, func547()];
                case 45:
                    _a.sent();
                    _a.label = 46;
                case 46:
                    if (!(var_83[var_421].Var18 == 0 && var_83[var_421].Var4 == 2 && var_83[var_421].Var9 == 0 && var_83[var_421].Var12 == 0 && var_83[var_421].Var13 == 0 && var_83[var_421].Var17 == 0 && var_83[var_421].Var23 == 0 && var_83[var_421].Var31 != 5 && var_83[var_421].Var0 != 164 && var_83[var_421].Var0 != 165)) return [3 /*break*/, 48];
                    var_429 = 0;
                    if (var_82[var_425][var_424] != 0 && var_429 == 0) {
                        var_430 = var_82[var_425][var_424];
                        if (var_83[var_430].Var31 == 5) {
                            var_431 = var_66;
                            var_432 = var_67;
                            var_66 = var_83[var_430].Var1;
                            var_67 = var_83[var_430].Var2;
                            var_429 = 1;
                        }
                    }
                    if (var_82[var_426][var_424] != 0 && var_429 == 0) {
                        var_430 = var_82[var_426][var_424];
                        if (var_83[var_430].Var31 == 5) {
                            var_431 = var_66;
                            var_432 = var_67;
                            var_66 = var_83[var_430].Var1;
                            var_67 = var_83[var_430].Var2;
                            var_429 = 1;
                        }
                    }
                    if (var_82[var_423][var_427] != 0 && var_429 == 0) {
                        var_430 = var_82[var_423][var_427];
                        if (var_83[var_430].Var31 == 5) {
                            var_431 = var_66;
                            var_432 = var_67;
                            var_66 = var_83[var_430].Var1;
                            var_67 = var_83[var_430].Var2;
                            var_429 = 1;
                        }
                    }
                    if (var_82[var_423][var_428] != 0 && var_429 == 0) {
                        var_430 = var_82[var_423][var_428];
                        if (var_83[var_430].Var31 == 5) {
                            var_431 = var_66;
                            var_432 = var_67;
                            var_66 = var_83[var_430].Var1;
                            var_67 = var_83[var_430].Var2;
                            var_429 = 1;
                        }
                    }
                    if (var_82[var_425][var_427] != 0 && var_429 == 0) {
                        var_430 = var_82[var_425][var_427];
                        if (var_83[var_430].Var31 == 5) {
                            var_431 = var_66;
                            var_432 = var_67;
                            var_66 = var_83[var_430].Var1;
                            var_67 = var_83[var_430].Var2;
                            var_429 = 1;
                        }
                    }
                    if (var_82[var_426][var_427] != 0 && var_429 == 0) {
                        var_430 = var_82[var_426][var_427];
                        if (var_83[var_430].Var31 == 5) {
                            var_431 = var_66;
                            var_432 = var_67;
                            var_66 = var_83[var_430].Var1;
                            var_67 = var_83[var_430].Var2;
                            var_429 = 1;
                        }
                    }
                    if (var_82[var_425][var_428] != 0 && var_429 == 0) {
                        var_430 = var_82[var_425][var_428];
                        if (var_83[var_430].Var31 == 5) {
                            var_431 = var_66;
                            var_432 = var_67;
                            var_66 = var_83[var_430].Var1;
                            var_67 = var_83[var_430].Var2;
                            var_429 = 1;
                        }
                    }
                    if (var_82[var_426][var_428] != 0 && var_429 == 0) {
                        var_430 = var_82[var_426][var_428];
                        if (var_83[var_430].Var31 == 5) {
                            var_431 = var_66;
                            var_432 = var_67;
                            var_66 = var_83[var_430].Var1;
                            var_67 = var_83[var_430].Var2;
                            var_429 = 1;
                        }
                    }
                    var_433 = var_421;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    return [4 /*yield*/, func704()];
                case 47:
                    _a.sent();
                    if (var_429 == 1) {
                        var_66 = var_431;
                        var_67 = var_432;
                    }
                    _a.label = 48;
                case 48:
                    if (!(var_83[var_421].Var0 == 26 && var_83[var_421].Var20 == 0 && var_83[var_421].Var26 == 0 && var_83[var_421].Var6 == 0 && var_83[var_421].Var12 == 0 && var_83[var_421].Var13 == 0 && var_83[var_421].Var17 == 0 && var_83[var_421].Var23 == 0 && var_83[var_421].Var28 == 0 && var_97 < 90 && var_336 < 90)) return [3 /*break*/, 52];
                    var_436 = 0;
                    if (!(var_201 != 14 && var_83[var_421].Var10 == var_201)) return [3 /*break*/, 50];
                    return [4 /*yield*/, func573()];
                case 49:
                    _a.sent();
                    var_436 = 1;
                    _a.label = 50;
                case 50:
                    if (!(var_436 == 0 && var_83[var_421].Var10 == 14)) return [3 /*break*/, 52];
                    return [4 /*yield*/, func573()];
                case 51:
                    _a.sent();
                    _a.label = 52;
                case 52:
                    if (!(var_83[var_421].Var31 == 5 && var_367 == 1)) return [3 /*break*/, 54];
                    enemy_list = var_83[var_421].Var0;
                    return [4 /*yield*/, func626()];
                case 53:
                    _a.sent();
                    if (var_83[var_421].Var39 >= 2) {
                        enemy_hp = Math.floor(enemy_hp * (var_83[var_421].Var39 + 10) / 10);
                        if (enemy_hp >= 999) {
                            enemy_hp = 999;
                        }
                    }
                    if (var_83[var_421].Var3 < enemy_hp) {
                        var_83[var_421].Var3 = var_83[var_421].Var3 + 1;
                    }
                    _a.label = 54;
                case 54:
                    if (var_83[var_421].Var12 >= 1 && var_83[var_421].Var12 < 99) {
                        var_83[var_421].Var12 = var_83[var_421].Var12 - 1;
                        if (var_83[var_421].Var12 == 1) {
                            var_83[var_421].Var12 = 99;
                        }
                    }
                    if (var_83[var_421].Var13 > 0 && var_83[var_421].Var13 != 99) {
                        var_83[var_421].Var13 = var_83[var_421].Var13 + 1;
                        if (var_83[var_421].Var13 == 21) {
                            var_83[var_421].Var13 = 0;
                        }
                    }
                    if (var_83[var_421].Var17 > 0) {
                        var_83[var_421].Var17 = var_83[var_421].Var17 + 1;
                        if (var_83[var_421].Var17 == 11) {
                            var_83[var_421].Var17 = 0;
                            var_83[var_421].Var4 = 3;
                        }
                    }
                    if (var_83[var_421].Var23 > 0 && var_83[var_421].Var0 != 118) {
                        var_83[var_421].Var23 = var_83[var_421].Var23 + 1;
                        if (var_83[var_421].Var0 == 109 && var_83[var_421].Var29 == 1) {
                            var_83[var_421].Var23 = 1;
                        }
                        if (var_83[var_421].Var23 == 31) {
                            var_83[var_421].Var23 = 0;
                            var_83[var_421].Var4 = 3;
                        }
                    }
                    if (var_83[var_421].Var14 > 0 && var_157 != 1) {
                        var_83[var_421].Var14 = var_83[var_421].Var14 + 1;
                        if (var_83[var_421].Var14 == 3) {
                            var_83[var_421].Var14 = 1;
                        }
                    }
                    if (!(var_83[var_421].Var0 == 49)) return [3 /*break*/, 67];
                    if (var_83[var_421].Var29 < 10) {
                        var_83[var_421].Var29 = var_83[var_421].Var29 + 1;
                    }
                    if (!(var_83[var_421].Var29 == 10)) return [3 /*break*/, 67];
                    var_240 = 0;
                    var_439 = var_83[var_421].Var0;
                    var_83[var_421].Var5 = 2;
                    var_440 = var_83[var_421].Var1;
                    var_441 = var_83[var_421].Var2;
                    var_442 = var_83[var_421].Var1;
                    var_443 = var_83[var_421].Var2;
                    var_83[var_421].Var11 = 1;
                    var_271 = 1;
                    var_444 = 25;
                    cnt4_7 = 0;
                    _a.label = 55;
                case 55:
                    if (!(cnt4_7 < 25)) return [3 /*break*/, 58];
                    return [4 /*yield*/, func337()];
                case 56:
                    _a.sent(); // メッセージ関係呼び出し
                    var_444 = var_444 - 1;
                    _a.label = 57;
                case 57:
                    ++cnt4_7;
                    return [3 /*break*/, 55];
                case 58:
                    var_271 = 0;
                    var_444 = 0;
                    var_399 = var_83[var_421].Var1;
                    var_400 = var_83[var_421].Var2;
                    var_82[var_399][var_400] = 0;
                    var_83[var_421].Var0 = 0;
                    var_83[var_421].Var1 = 0;
                    var_83[var_421].Var2 = 0;
                    var_445 = 1;
                    return [4 /*yield*/, func405()];
                case 59:
                    _a.sent();
                    var_445 = 0;
                    if (!(var_446 != 0)) return [3 /*break*/, 61];
                    var_447 = var_448;
                    var_449 = var_450;
                    var_451 = 1;
                    var_452 = 1;
                    var_453 = 1;
                    var_454 = 1;
                    return [4 /*yield*/, func384()];
                case 60:
                    _a.sent();
                    var_454 = 0;
                    var_451 = 0;
                    var_452 = 0;
                    var_453 = 0;
                    _a.label = 61;
                case 61:
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "サーフィスは人形に戻った。";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 62:
                    _a.sent();
                    var_240 = 0;
                    return [4 /*yield*/, func331()];
                case 63:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    cnt4_8 = 0;
                    _a.label = 64;
                case 64:
                    if (!(cnt4_8 < 10)) return [3 /*break*/, 67];
                    return [4 /*yield*/, func337()];
                case 65:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 66;
                case 66:
                    ++cnt4_8;
                    return [3 /*break*/, 64];
                case 67:
                    if (!(var_83[var_421].Var24 >= 1)) return [3 /*break*/, 69];
                    var_83[var_421].Var24 = var_83[var_421].Var24 - 1;
                    if (!(var_83[var_421].Var24 == 0)) return [3 /*break*/, 69];
                    var_455 = var_83[var_421].Var1;
                    var_456 = var_83[var_421].Var2;
                    var_83[var_421].Var8 = 1;
                    return [4 /*yield*/, func668()];
                case 68:
                    _a.sent();
                    var_83[var_421].Var8 = 0;
                    _a.label = 69;
                case 69:
                    var_421 = var_421 + 1;
                    _a.label = 70;
                case 70:
                    ++cnt1_10;
                    return [3 /*break*/, 44];
                case 71:
                    if (!(var_262 == 0 && var_151 == 0)) return [3 /*break*/, 73];
                    return [4 /*yield*/, func574()];
                case 72:
                    _a.sent();
                    _a.label = 73;
                case 73: return [2 /*return*/];
            }
        });
    });
}
// 波紋攻撃を喰らって麻痺している状態の動作処理
function func021() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_9, cnt1_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(21);
                    var_178++;
                    if (!(var_178 == 3)) return [3 /*break*/, 7];
                    var_217 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "ﾃﾞｨｱﾎﾞﾛは動けるようになった";
                    var_178 = 0;
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt2_9 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt2_9 < 10)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt2_9;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, func009()];
                case 6:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 7:
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "…痺れていて動けない。";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 8:
                    _a.sent();
                    cnt1_11 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_11 < 10)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 11;
                case 11:
                    ++cnt1_11;
                    return [3 /*break*/, 9];
                case 12:
                    var_217 = 1;
                    return [4 /*yield*/, func019()];
                case 13:
                    _a.sent(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return [2 /*return*/];
            }
        });
    });
}
// 氷状態の動作処理
function func022() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_10, cnt3_22, cnt3_23, cnt2_11, cnt1_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(22);
                    if (!(var_128 >= 1)) return [3 /*break*/, 26];
                    var_281 = var_66 - 1;
                    if (var_281 < 0) {
                        var_281 = 0;
                    }
                    var_282 = var_66 + 1;
                    if (var_282 > var_33) {
                        var_282 = var_33;
                    }
                    var_283 = var_67 - 1;
                    if (var_283 < 0) {
                        var_283 = 0;
                    }
                    var_284 = var_67 + 1;
                    if (var_284 > var_34) {
                        var_284 = var_34;
                    }
                    var_457 = 0;
                    var_286 = 1;
                    for (cnt2_10 = 0; cnt2_10 < var_97; ++cnt2_10) {
                        if (var_83[var_286].Var0 == 36 && var_83[var_286].Var1 >= var_281 && var_83[var_286].Var1 <= var_282 && var_83[var_286].Var2 >= var_283 && var_83[var_286].Var2 <= var_284) {
                            if (var_83[var_286].Var31 == 5 && var_83[var_286].Var23 == 0 && var_83[var_286].Var17 == 0 && var_83[var_286].Var12 == 0 && var_83[var_286].Var13 == 0) {
                                var_457 = 1;
                                break;
                            }
                        }
                        var_286 = var_286 + 1;
                    }
                    if (!(var_457 == 1)) return [3 /*break*/, 26];
                    var_83[var_286].Var3 = 1;
                    return [4 /*yield*/, func094()];
                case 1:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "極寒地にすむエスキモーはよお！";
                    comments_row2 = "凍傷にかかった時！";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 3:
                    _a.sent(); // キー入力による選択処理
                    return [4 /*yield*/, func094()];
                case 4:
                    _a.sent();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "アザラシの肉の体内に入って";
                    comments_row2a = "治していたぜ！";
                    return [4 /*yield*/, func050()];
                case 5:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 7:
                    _a.sent(); // キー入力による選択処理
                    return [4 /*yield*/, func094()];
                case 8:
                    _a.sent();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "これならどうだ――っ！！";
                    comments_row2a = "";
                    return [4 /*yield*/, func050()];
                case 9:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 11:
                    _a.sent(); // キー入力による選択処理
                    DSPLAY(audio_id = 175);
                    var_458 = 1;
                    var_271 = 1;
                    cnt3_22 = 0;
                    _a.label = 12;
                case 12:
                    if (!(cnt3_22 < 10)) return [3 /*break*/, 15];
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent(); // メッセージ関係呼び出し
                    var_458++;
                    _a.label = 14;
                case 14:
                    ++cnt3_22;
                    return [3 /*break*/, 12];
                case 15:
                    var_458 = 0;
                    var_271 = 0;
                    var_128 = 0;
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "ｽﾋﾟｰﾄﾞﾜｺﾞﾝの治療によって";
                    comments_row2a = "ﾃﾞｨｱﾎﾞﾛは動けるようになった";
                    return [4 /*yield*/, func050()];
                case 16:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 18:
                    _a.sent(); // キー入力による選択処理
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "しかしｽﾋﾟｰﾄﾞﾜｺﾞﾝは";
                    comments_row2a = "ひどく憔悴してしまったようだ…";
                    return [4 /*yield*/, func050()];
                case 19:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 20:
                    _a.sent();
                    cnt3_23 = 0;
                    _a.label = 21;
                case 21:
                    if (!(cnt3_23 < 10)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 23;
                case 23:
                    ++cnt3_23;
                    return [3 /*break*/, 21];
                case 24: return [4 /*yield*/, func009()];
                case 25:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 26:
                    var_128++;
                    if (!(var_128 == 10)) return [3 /*break*/, 33];
                    var_217 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "ﾃﾞｨｱﾎﾞﾛは動けるようになった";
                    var_128 = 0;
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 27:
                    _a.sent();
                    cnt2_11 = 0;
                    _a.label = 28;
                case 28:
                    if (!(cnt2_11 < 10)) return [3 /*break*/, 31];
                    return [4 /*yield*/, func337()];
                case 29:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 30;
                case 30:
                    ++cnt2_11;
                    return [3 /*break*/, 28];
                case 31: return [4 /*yield*/, func009()];
                case 32:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 33:
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "…凍っていて動けない。";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 34:
                    _a.sent();
                    cnt1_12 = 0;
                    _a.label = 35;
                case 35:
                    if (!(cnt1_12 < 10)) return [3 /*break*/, 38];
                    return [4 /*yield*/, func337()];
                case 36:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 37;
                case 37:
                    ++cnt1_12;
                    return [3 /*break*/, 35];
                case 38:
                    var_217 = 1;
                    return [4 /*yield*/, func019()];
                case 39:
                    _a.sent(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return [2 /*return*/];
            }
        });
    });
}
function func023() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(23);
            var_459 = 0;
            if (var_459 == 0) {
                var_128 = 0;
            }
            return [2 /*return*/];
        });
    });
}
function func024() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(24);
            var_459 = 0;
            if (var_459 == 0) {
                var_83[var_460].Var13 = 0;
            }
            return [2 /*return*/];
        });
    });
}
// 寝ている時の動作処理
function func025() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_12, cnt1_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(25);
                    var_219++;
                    if (!(var_219 == 5)) return [3 /*break*/, 7];
                    var_217 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "ﾃﾞｨｱﾎﾞﾛは目を覚ました";
                    var_219 = 0;
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt2_12 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt2_12 < 10)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt2_12;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, func009()];
                case 6:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 7:
                    DSPLAY(audio_id = 132);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "…眠くて何もできない。";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 8:
                    _a.sent();
                    cnt1_13 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_13 < 10)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 11;
                case 11:
                    ++cnt1_13;
                    return [3 /*break*/, 9];
                case 12:
                    var_217 = 1;
                    return [4 /*yield*/, func019()];
                case 13:
                    _a.sent(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return [2 /*return*/];
            }
        });
    });
}
// その場へ固定された時の動作処理
function func026() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(26);
                    return [4 /*yield*/, func080()];
                case 1:
                    _a.sent(); // 各キー入力確認
                    if (var_253 == 1) {
                        var_199 = 7;
                    }
                    if (var_254 == 1 && var_255 == 1) {
                        var_199 = 7;
                    }
                    if (var_256 == 1) {
                        var_199 = 9;
                    }
                    if (var_257 == 1 && var_255 == 1) {
                        var_199 = 9;
                    }
                    if (var_258 == 1) {
                        var_199 = 1;
                    }
                    if (var_254 == 1 && var_259 == 1) {
                        var_199 = 1;
                    }
                    if (var_260 == 1) {
                        var_199 = 3;
                    }
                    if (var_257 == 1 && var_259 == 1) {
                        var_199 = 3;
                    }
                    if (var_254 == 1) {
                        var_199 = 4;
                    }
                    if (var_257 == 1) {
                        var_199 = 6;
                    }
                    if (var_255 == 1) {
                        var_199 = 8;
                    }
                    if (var_259 == 1) {
                        var_199 = 2;
                    }
                    if (!(var_116 == 0 && var_114 == 0)) return [3 /*break*/, 3];
                    var_461 = 0;
                    var_462 = 0;
                    return [4 /*yield*/, func009()];
                case 2:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 3:
                    if (!(var_66 != var_461 || var_67 != var_462)) return [3 /*break*/, 5];
                    var_115 = 0;
                    var_116 = 0;
                    var_114 = 0;
                    var_461 = 0;
                    var_462 = 0;
                    return [4 /*yield*/, func009()];
                case 4:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 5:
                    if (!(var_83[var_114].Var0 == 0 && var_116 == 0)) return [3 /*break*/, 7];
                    var_114 = 0;
                    var_461 = 0;
                    var_462 = 0;
                    return [4 /*yield*/, func009()];
                case 6:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 7:
                    if (!(var_83[var_114].Var0 != 0 && var_116 == 0)) return [3 /*break*/, 9];
                    if (!(var_83[var_114].Var1 != var_463 || var_83[var_114].Var2 != var_464)) return [3 /*break*/, 9];
                    var_114 = 0;
                    var_461 = 0;
                    var_462 = 0;
                    return [4 /*yield*/, func009()];
                case 8:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 9:
                    var_465 = var_66 - 1;
                    if (var_465 < 0) {
                        var_465 = 0;
                    }
                    var_466 = var_66 + 1;
                    var_467 = var_67 + 1;
                    var_468 = var_67 - 1;
                    if (var_468 < 0) {
                        var_468 = 0;
                    }
                    if (!(var_199 == 4)) return [3 /*break*/, 11];
                    if (!(var_71[var_465][var_67] == 0 || var_82[var_465][var_67] == 13 || var_82[var_465][var_67] >= 1)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func009()];
                case 10:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 11:
                    if (!(var_199 == 6)) return [3 /*break*/, 13];
                    if (!(var_71[var_466][var_67] == 0 || var_82[var_466][var_67] == 13 || var_82[var_466][var_67] >= 1)) return [3 /*break*/, 13];
                    return [4 /*yield*/, func009()];
                case 12:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 13:
                    if (!(var_199 == 2)) return [3 /*break*/, 15];
                    if (!(var_71[var_66][var_467] == 0 || var_82[var_66][var_467] == 13 || var_82[var_66][var_467] >= 1)) return [3 /*break*/, 15];
                    return [4 /*yield*/, func009()];
                case 14:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 15:
                    if (!(var_199 == 8)) return [3 /*break*/, 17];
                    if (!(var_71[var_66][var_468] == 0 || var_82[var_66][var_468] == 13 || var_82[var_66][var_468] >= 1)) return [3 /*break*/, 17];
                    return [4 /*yield*/, func009()];
                case 16:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 17:
                    if (!(var_199 == 1)) return [3 /*break*/, 19];
                    if (!(var_71[var_465][var_467] == 0 || var_82[var_465][var_467] == 13 || var_82[var_465][var_467] >= 1)) return [3 /*break*/, 19];
                    return [4 /*yield*/, func009()];
                case 18:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 19:
                    if (!(var_199 == 3)) return [3 /*break*/, 21];
                    if (!(var_71[var_466][var_467] == 0 || var_82[var_466][var_467] == 13 || var_82[var_466][var_467] >= 1)) return [3 /*break*/, 21];
                    return [4 /*yield*/, func009()];
                case 20:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 21:
                    if (!(var_199 == 7)) return [3 /*break*/, 23];
                    if (!(var_71[var_465][var_468] == 0 || var_82[var_465][var_468] == 13 || var_82[var_465][var_468] >= 1)) return [3 /*break*/, 23];
                    return [4 /*yield*/, func009()];
                case 22:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 23:
                    if (!(var_199 == 9)) return [3 /*break*/, 25];
                    if (!(var_71[var_466][var_468] == 0 || var_82[var_466][var_468] == 13 || var_82[var_466][var_468] >= 1)) return [3 /*break*/, 25];
                    return [4 /*yield*/, func009()];
                case 24:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 25:
                    var_271 = 1;
                    var_469 = 1;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    if (var_114 == 0) {
                        comments_row1 = "固定されて動けない！";
                    }
                    if (var_114 >= 1) {
                        comments_row1 = "つかまれていて動けない！";
                    }
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 26:
                    _a.sent();
                    cnt1_14 = 0;
                    _a.label = 27;
                case 27:
                    if (!(cnt1_14 < 9)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent(); // メッセージ関係呼び出し
                    var_469 = var_469 + 1;
                    _a.label = 29;
                case 29:
                    ++cnt1_14;
                    return [3 /*break*/, 27];
                case 30:
                    var_271 = 0;
                    var_469 = 0;
                    var_217 = 1;
                    return [4 /*yield*/, func019()];
                case 31:
                    _a.sent(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return [2 /*return*/];
            }
        });
    });
}
// 動けるようになった時の表示
function func027() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(27);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "動けるようになった。";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt1_15 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_15 < 9)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt1_15;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// メタリカの透明化が切れた時の表示
function func028() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(28);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "透明状態ではなくなった";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt1_16 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_16 < 9)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt1_16;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// オアシスの壁を溶かす効果が切れた時の表示
function func029() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(29);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "周囲がドロドロではなくなった";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt1_17 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_17 < 9)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt1_17;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// 鈍足状態から復帰した時の表示
function func030() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(30);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "鈍足状態が治った";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt1_18 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_18 < 9)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt1_18;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// ドッピオの変身が解除された時の表示
function func031() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_19, cnt1_20, cnt1_21, cnt1_22, cnt1_23, cnt1_24, cnt1_25, cnt1_26, cnt1_27, cnt1_28, cnt1_29;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(31);
                    DSPLAY(audio_id = 123);
                    var_470 = 19;
                    cnt1_19 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_19 < 2)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 3;
                case 3:
                    ++cnt1_19;
                    return [3 /*break*/, 1];
                case 4:
                    var_470 = 9;
                    cnt1_20 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_20 < 2)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 7;
                case 7:
                    ++cnt1_20;
                    return [3 /*break*/, 5];
                case 8:
                    var_470 = 8;
                    cnt1_21 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_21 < 2)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 11;
                case 11:
                    ++cnt1_21;
                    return [3 /*break*/, 9];
                case 12:
                    var_470 = 7;
                    cnt1_22 = 0;
                    _a.label = 13;
                case 13:
                    if (!(cnt1_22 < 2)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 15;
                case 15:
                    ++cnt1_22;
                    return [3 /*break*/, 13];
                case 16:
                    var_470 = 6;
                    cnt1_23 = 0;
                    _a.label = 17;
                case 17:
                    if (!(cnt1_23 < 2)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 19;
                case 19:
                    ++cnt1_23;
                    return [3 /*break*/, 17];
                case 20:
                    var_470 = 5;
                    cnt1_24 = 0;
                    _a.label = 21;
                case 21:
                    if (!(cnt1_24 < 2)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 23;
                case 23:
                    ++cnt1_24;
                    return [3 /*break*/, 21];
                case 24:
                    var_470 = 4;
                    cnt1_25 = 0;
                    _a.label = 25;
                case 25:
                    if (!(cnt1_25 < 2)) return [3 /*break*/, 28];
                    return [4 /*yield*/, func337()];
                case 26:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 27;
                case 27:
                    ++cnt1_25;
                    return [3 /*break*/, 25];
                case 28:
                    var_470 = 3;
                    cnt1_26 = 0;
                    _a.label = 29;
                case 29:
                    if (!(cnt1_26 < 2)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func337()];
                case 30:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 31;
                case 31:
                    ++cnt1_26;
                    return [3 /*break*/, 29];
                case 32:
                    var_470 = 2;
                    cnt1_27 = 0;
                    _a.label = 33;
                case 33:
                    if (!(cnt1_27 < 2)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func337()];
                case 34:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 35;
                case 35:
                    ++cnt1_27;
                    return [3 /*break*/, 33];
                case 36:
                    var_470 = 1;
                    cnt1_28 = 0;
                    _a.label = 37;
                case 37:
                    if (!(cnt1_28 < 5)) return [3 /*break*/, 40];
                    return [4 /*yield*/, func337()];
                case 38:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 39;
                case 39:
                    ++cnt1_28;
                    return [3 /*break*/, 37];
                case 40:
                    var_470 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "変身が解除された";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 41:
                    _a.sent();
                    cnt1_29 = 0;
                    _a.label = 42;
                case 42:
                    if (!(cnt1_29 < 9)) return [3 /*break*/, 45];
                    return [4 /*yield*/, func337()];
                case 43:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 44;
                case 44:
                    ++cnt1_29;
                    return [3 /*break*/, 42];
                case 45: return [2 /*return*/];
            }
        });
    });
}
// スティッキーフィンガーズの発動効果持続中の動作処理
function func032() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_13, cnt2_14, cnt2_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(32);
                    return [4 /*yield*/, func080()];
                case 1:
                    _a.sent(); // 各キー入力確認
                    if (!(key_Z_on == 1 || key_X_on == 1 || key_A_on == 1 || key_S_on == 1)) return [3 /*break*/, 3];
                    var_218 = 0;
                    return [4 /*yield*/, func033()];
                case 2:
                    _a.sent(); // スティッキーフィンガーズの発動効果が切れた時の表示
                    return [2 /*return*/];
                case 3:
                    if (!(var_218 == 51)) return [3 /*break*/, 11];
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "意識が…　ヤバクなって来た…";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 4:
                    _a.sent();
                    cnt2_13 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt2_13 < 5)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 7;
                case 7:
                    ++cnt2_13;
                    return [3 /*break*/, 5];
                case 8: return [4 /*yield*/, func340()];
                case 9:
                    _a.sent(); // キー入力による選択処理
                    return [4 /*yield*/, func051()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    if (!(var_218 >= 51)) return [3 /*break*/, 17];
                    var_211 = var_211 - 1;
                    if (var_211 <= 0) {
                        var_211 = 0;
                        var_356 = 283;
                        return [2 /*return*/];
                    }
                    cnt2_14 = 0;
                    _a.label = 12;
                case 12:
                    if (!(cnt2_14 < 5)) return [3 /*break*/, 17];
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func080()];
                case 14:
                    _a.sent(); // 各キー入力確認
                    if (!(key_Z_on == 1 || key_X_on == 1 || key_A_on == 1 || key_S_on == 1)) return [3 /*break*/, 16];
                    var_218 = 0;
                    return [4 /*yield*/, func033()];
                case 15:
                    _a.sent(); // スティッキーフィンガーズの発動効果が切れた時の表示
                    return [3 /*break*/, 17];
                case 16:
                    ++cnt2_14;
                    return [3 /*break*/, 12];
                case 17:
                    if (!(var_218 >= 51 && var_410 == 403 && var_211 == 2)) return [3 /*break*/, 25];
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "ﾋﾟｽﾄﾙｽﾞ「早く【ジッパー】デ";
                    comments_row2 = "　　　　体ヲ元ニ戻スンダ――――ッ！」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 18:
                    _a.sent();
                    cnt2_15 = 0;
                    _a.label = 19;
                case 19:
                    if (!(cnt2_15 < 5)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func337()];
                case 20:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 21;
                case 21:
                    ++cnt2_15;
                    return [3 /*break*/, 19];
                case 22: return [4 /*yield*/, func340()];
                case 23:
                    _a.sent(); // キー入力による選択処理
                    return [4 /*yield*/, func051()];
                case 24:
                    _a.sent();
                    _a.label = 25;
                case 25: return [2 /*return*/];
            }
        });
    });
}
// スティッキーフィンガーズの発動効果が切れた時の表示
function func033() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_30, cnt1_31, cnt1_32, cnt1_33;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(33);
                    var_471 = 9;
                    cnt1_30 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_30 < 2)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 3;
                case 3:
                    ++cnt1_30;
                    return [3 /*break*/, 1];
                case 4:
                    var_471 = 10;
                    cnt1_31 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_31 < 2)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 7;
                case 7:
                    ++cnt1_31;
                    return [3 /*break*/, 5];
                case 8:
                    var_471 = 2;
                    cnt1_32 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_32 < 5)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 11;
                case 11:
                    ++cnt1_32;
                    return [3 /*break*/, 9];
                case 12:
                    var_471 = 1;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "元通りくっついた";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 13:
                    _a.sent();
                    cnt1_33 = 0;
                    _a.label = 14;
                case 14:
                    if (!(cnt1_33 < 9)) return [3 /*break*/, 17];
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 16;
                case 16:
                    ++cnt1_33;
                    return [3 /*break*/, 14];
                case 17:
                    var_471 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
// 盲目状態から復帰した時の表示
function func034() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_34;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(34);
                    if (var_132 != 0) {
                        return [2 /*return*/];
                    }
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "盲目状態が治った";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt1_34 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_34 < 9)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt1_34;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function func035() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_35;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(35);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "ンドゥールの気分が消えた";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt1_35 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_35 < 9)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt1_35;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function func036() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_36;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(36);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "混乱状態が治った";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt1_36 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_36 < 9)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt1_36;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function func037() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_37;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(37);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "冷静になった。";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt1_37 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_37 < 9)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt1_37;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function func038() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_38, cnt1_39, cnt1_40;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(38);
                    cnt1_38 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_38 < 9)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 3;
                case 3:
                    ++cnt1_38;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, func094()];
                case 5:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "ﾖｰﾖｰﾏｯ「もっとおおおおおお";
                    comments_row2 = "　私を叱ってええええええ」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 6:
                    _a.sent();
                    cnt1_39 = 0;
                    _a.label = 7;
                case 7:
                    if (!(cnt1_39 < 4)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func337()];
                case 8:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 9;
                case 9:
                    ++cnt1_39;
                    return [3 /*break*/, 7];
                case 10: return [4 /*yield*/, func340()];
                case 11:
                    _a.sent(); // キー入力による選択処理
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "ﾖｰﾖｰﾏｯのあまりの臭さで";
                    comments_row2a = "正気に戻った。";
                    return [4 /*yield*/, func050()];
                case 12:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 13:
                    _a.sent();
                    cnt1_40 = 0;
                    _a.label = 14;
                case 14:
                    if (!(cnt1_40 < 9)) return [3 /*break*/, 17];
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 16;
                case 16:
                    ++cnt1_40;
                    return [3 /*break*/, 14];
                case 17: return [2 /*return*/];
            }
        });
    });
}
function func039() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_41, cnt1_42;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(39);
                    cnt1_41 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_41 < 9)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 3;
                case 3:
                    ++cnt1_41;
                    return [3 /*break*/, 1];
                case 4:
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "錠前のショックで";
                    comments_row2 = "正気に戻った。";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 5:
                    _a.sent();
                    cnt1_42 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt1_42 < 9)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 8;
                case 8:
                    ++cnt1_42;
                    return [3 /*break*/, 6];
                case 9: return [2 /*return*/];
            }
        });
    });
}
function func040() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_43;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(40);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "鉄塔が消滅した。";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt1_43 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_43 < 9)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt1_43;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function func041() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_44;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(41);
                    return [4 /*yield*/, func094()];
                case 1:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "ﾄﾞｯﾋﾟｵ「とぅるるるるるるるるるる」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 3:
                    _a.sent(); // キー入力による選択処理
                    return [4 /*yield*/, func094()];
                case 4:
                    _a.sent();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "ﾄﾞｯﾋﾟｵ「ボスからの電話だッ！」";
                    comments_row2a = "";
                    return [4 /*yield*/, func050()];
                case 5:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 7:
                    _a.sent(); // キー入力による選択処理
                    var_144 = 91;
                    return [4 /*yield*/, func094()];
                case 8:
                    _a.sent();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "ﾄﾞｯﾋﾟｵ「もしもし」";
                    comments_row2a = "";
                    return [4 /*yield*/, func050()];
                case 9:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 11:
                    _a.sent(); // キー入力による選択処理
                    return [4 /*yield*/, func094()];
                case 12:
                    _a.sent();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "ﾄﾞｯﾋﾟｵ「早く来てください！ボス！」";
                    comments_row2a = "";
                    return [4 /*yield*/, func050()];
                case 13:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 15:
                    _a.sent(); // キー入力による選択処理
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "ﾄﾞｯﾋﾟｵ「・・・・・・・・」";
                    comments_row2a = "";
                    return [4 /*yield*/, func050()];
                case 16:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 18:
                    _a.sent(); // キー入力による選択処理
                    var_192 = rnd(4);
                    return [4 /*yield*/, func094()];
                case 19:
                    _a.sent();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "ﾄﾞｯﾋﾟｵ「わかりました！";
                    if (var_192 == 0) {
                        comments_row2a = "       １０ターン後ですねッ！」";
                    }
                    if (var_192 == 1) {
                        comments_row2a = "       ２０ターン後ですねッ！」";
                    }
                    if (var_192 == 2) {
                        comments_row2a = "       ３０ターン後ですねッ！」";
                    }
                    if (var_192 == 3) {
                        comments_row2a = "   すぐ来てくれるんですねッ！」";
                    }
                    return [4 /*yield*/, func050()];
                case 20:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 21:
                    _a.sent();
                    cnt1_44 = 0;
                    _a.label = 22;
                case 22:
                    if (!(cnt1_44 < 9)) return [3 /*break*/, 25];
                    return [4 /*yield*/, func337()];
                case 23:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 24;
                case 24:
                    ++cnt1_44;
                    return [3 /*break*/, 22];
                case 25:
                    var_144 = 92;
                    return [2 /*return*/];
            }
        });
    });
}
function func042() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_45, cnt1_46;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(42);
                    var_472 = 1;
                    cnt1_45 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_45 < 30)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 3;
                case 3:
                    ++cnt1_45;
                    return [3 /*break*/, 1];
                case 4:
                    var_472 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "ﾄﾞｯﾋﾟｵと交代した。";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 5:
                    _a.sent();
                    var_144 = 0;
                    var_199 = 2;
                    cnt1_46 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt1_46 < 9)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 8;
                case 8:
                    ++cnt1_46;
                    return [3 /*break*/, 6];
                case 9: return [2 /*return*/];
            }
        });
    });
}
// おそらくメイド・イン・ヘブンを装備している際の「アイテムが朽ちていく効果」
function func043() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_47, cnt2_16, cnt1_48;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(43);
                    var_473 = rnd(10);
                    if (var_473 != 0) {
                        return [2 /*return*/];
                    }
                    var_474 = 0;
                    for (cnt1_47 = 0; cnt1_47 < 50; ++cnt1_47) {
                        var_475 = rnd(var_224); // 持っているアイテムの中から乱数を使ってランダムで朽ちさせる？
                        var_475 = var_475 + 1;
                        if (var_476[var_475] == 0 && var_477[var_475] == 0 && var_478[var_475] == 0 && var_479[var_475] == 0) {
                            var_474 = 1;
                            break;
                        }
                    }
                    if (var_474 == 0) {
                        return [2 /*return*/];
                    }
                    var_480 = var_475;
                    payment_amount = 0;
                    if (!(var_233[var_480].Var11 == 1)) return [3 /*break*/, 2];
                    belongings_item_list = var_233[var_480].Var0;
                    return [4 /*yield*/, func492()];
                case 1:
                    _a.sent(); // アイテムリスト呼び出し
                    var_482 = 0;
                    var_482 = (var_233[var_480].Var3 + var_233[var_480].Var4) * 50;
                    if (var_233[var_480].Var0 != 800) {
                        var_482 = var_233[var_480].Var7 * 100 + var_482;
                    }
                    if (var_233[var_480].Var19 > 1) {
                        var_482 = var_233[var_480].Var19 * 500 + var_482;
                    }
                    payment_amount = payment_amount + buying_price + var_482;
                    count_buying_price = count_buying_price + payment_amount;
                    _a.label = 2;
                case 2:
                    if (!(var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900)) return [3 /*break*/, 7];
                    var_484 = 1;
                    var_485 = var_233[var_480].Var6;
                    cnt2_16 = 0;
                    _a.label = 3;
                case 3:
                    if (!(cnt2_16 < 10)) return [3 /*break*/, 7];
                    if (!(var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1)) return [3 /*break*/, 5];
                    belongings_item_list = var_486[var_485][var_484][0];
                    return [4 /*yield*/, func492()];
                case 4:
                    _a.sent(); // アイテムリスト呼び出し
                    var_482 = 0;
                    var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
                    if (var_486[var_485][var_484][19] > 1) {
                        var_482 = var_486[var_485][var_484][19] * 500 + var_482;
                    }
                    payment_amount = payment_amount + buying_price + var_482;
                    count_buying_price = count_buying_price + payment_amount;
                    _a.label = 5;
                case 5:
                    var_484 = var_484 + 1;
                    _a.label = 6;
                case 6:
                    ++cnt2_16;
                    return [3 /*break*/, 3];
                case 7:
                    belongings_item_list = var_233[var_475].Var0;
                    disc_rarity = var_233[var_475].Var13;
                    var_488 = var_233[var_475].Var0;
                    return [4 /*yield*/, func492()];
                case 8:
                    _a.sent(); // アイテムリスト呼び出し
                    target_item_name = item_name;
                    var_225 = var_475;
                    return [4 /*yield*/, func433()];
                case 9:
                    _a.sent(); // アイテム配列の "数" 増減？関数
                    return [4 /*yield*/, func100()];
                case 10:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    comments_row1 = "" + target_item_name + "は";
                    comments_row2 = "朽ち果ててしまった…";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 11:
                    _a.sent();
                    cnt1_48 = 0;
                    _a.label = 12;
                case 12:
                    if (!(cnt1_48 < 9)) return [3 /*break*/, 15];
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 14;
                case 14:
                    ++cnt1_48;
                    return [3 /*break*/, 12];
                case 15: return [2 /*return*/];
            }
        });
    });
}
function func044() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(44);
                    var_490 = 1;
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent(); // 各キー入力確認
                    if (!(var_261 == 0)) return [3 /*break*/, 4];
                    var_490 = 0;
                    return [4 /*yield*/, func009()];
                case 3:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, func044()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func045() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_49, cnt2_17;
        return __generator(this, function (_a) {
            dbgprt(45);
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && current_floor == 12 && var_203 == 0) {
                return [2 /*return*/];
            }
            // No = 2 なので、レクイエムの大迷宮
            if (dangeon_number == 2 && current_floor == 30) {
                return [2 /*return*/];
            }
            // No = 3 なので、ディアボロの試練
            if (dangeon_number == 3 && current_floor == 99) {
                return [2 /*return*/];
            }
            if (dangeon_number == 5 && current_floor == var_20) {
                return [2 /*return*/];
            }
            for (cnt1_49 = 0; true; ++cnt1_49) {
                var_491 = rnd(var_33);
                var_492 = rnd(var_34);
                if (var_491 >= 30 && var_491 <= 35 && var_492 >= 23 && var_492 <= 30) {
                    continue;
                }
                if (var_71[var_491][var_492] != 0 && var_71[var_491][var_492] <= 12 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0 && var_77[var_491][var_492] == 0 && var_73[var_491][var_492] == 0) {
                    break;
                }
                if (var_94 == 8 && var_71[var_491][var_492] == 14 && var_80[var_491][var_492] == 0 && var_77[var_491][var_492] == 0 && var_73[var_491][var_492] == 0) {
                    break;
                }
            }
            if (var_94 == 5) {
                var_491 = 30;
                var_492 = 17;
            }
            if (var_94 == 9) {
                var_491 = 23;
                var_492 = 13;
            }
            var_73[var_491][var_492] = 1;
            var_200 = var_71[var_491][var_492];
            if (dangeon_number == 5 && current_floor != 1) {
                for (cnt2_17 = 0; true; ++cnt2_17) {
                    var_491 = rnd(var_33);
                    var_492 = rnd(var_34);
                    if (var_491 >= 30 && var_491 <= 35 && var_492 >= 23 && var_492 <= 30) {
                        continue;
                    }
                    if (var_71[var_491][var_492] != 0 && var_71[var_491][var_492] <= 12 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0 && var_77[var_491][var_492] == 0 && var_73[var_491][var_492] == 0) {
                        break;
                    }
                    if (var_94 == 8 && var_71[var_491][var_492] == 14 && var_80[var_491][var_492] == 0 && var_77[var_491][var_492] == 0 && var_73[var_491][var_492] == 0) {
                        break;
                    }
                }
                var_73[var_491][var_492] = 2;
                var_202 = var_71[var_491][var_492];
            }
            return [2 /*return*/];
        });
    });
}
function func046() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_50;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(46);
                    for (cnt1_50 = 0; true; ++cnt1_50) {
                        var_491 = rnd(var_33);
                        var_492 = rnd(var_34);
                        if (var_493[1] == 1 && var_71[var_491][var_492] == 1 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                            var_201 = 1;
                            break;
                        }
                        if (var_493[2] == 1 && var_71[var_491][var_492] == 2 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                            var_201 = 2;
                            break;
                        }
                        if (var_493[3] == 1 && var_71[var_491][var_492] == 3 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                            var_201 = 3;
                            break;
                        }
                        if (var_493[4] == 1 && var_71[var_491][var_492] == 4 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                            var_201 = 4;
                            break;
                        }
                        if (var_493[5] == 1 && var_71[var_491][var_492] == 5 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                            var_201 = 5;
                            break;
                        }
                        if (var_493[6] == 1 && var_71[var_491][var_492] == 6 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                            var_201 = 6;
                            break;
                        }
                        if (var_493[7] == 1 && var_71[var_491][var_492] == 7 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                            var_201 = 7;
                            break;
                        }
                        if (var_493[8] == 1 && var_71[var_491][var_492] == 8 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                            var_201 = 8;
                            break;
                        }
                        if (var_493[9] == 1 && var_71[var_491][var_492] == 9 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                            var_201 = 9;
                            break;
                        }
                        if (var_493[10] == 1 && var_71[var_491][var_492] == 10 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                            var_201 = 10;
                            break;
                        }
                        if (var_493[11] == 1 && var_71[var_491][var_492] == 11 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                            var_201 = 11;
                            break;
                        }
                        if (var_493[12] == 1 && var_71[var_491][var_492] == 12 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0) {
                            var_201 = 12;
                            break;
                        }
                        if (var_94 == 8 && var_71[var_491][var_492] == 14 && var_82[var_491][var_492] == 0 && var_73[var_491][var_492] == 0) {
                            var_201 = 14;
                            break;
                        }
                    }
                    if (var_94 == 5) {
                        var_491 = 19;
                        var_492 = 17;
                    }
                    if (var_94 == 9) {
                        var_491 = 21;
                        var_492 = 16;
                    }
                    var_66 = var_491;
                    var_67 = var_492;
                    var_65[var_66][var_67] = 1;
                    var_201 = var_71[var_66][var_67];
                    var_74[var_66][var_67] = 2;
                    var_75[var_201] = 1;
                    if (!(var_94 != 8)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func017()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func018()];
                case 2:
                    _a.sent();
                    if (var_200 == var_201 && var_201 != 14) {
                        var_98 = 1;
                    }
                    if (var_202 == var_201 && var_201 != 14) {
                        var_99 = 1;
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function func047() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(47);
                    var_494[39] = var_494[37];
                    var_494[40] = var_494[38];
                    var_494[37] = var_494[35];
                    var_494[38] = var_494[36];
                    var_494[35] = var_494[33];
                    var_494[36] = var_494[34];
                    var_494[33] = var_494[31];
                    var_494[34] = var_494[32];
                    var_494[31] = var_494[29];
                    var_494[32] = var_494[30];
                    var_494[29] = var_494[27];
                    var_494[30] = var_494[28];
                    var_494[27] = var_494[25];
                    var_494[28] = var_494[26];
                    var_494[25] = var_494[23];
                    var_494[26] = var_494[24];
                    var_494[23] = var_494[21];
                    var_494[24] = var_494[22];
                    var_494[21] = var_494[19];
                    var_494[22] = var_494[20];
                    var_494[19] = var_494[17];
                    var_494[20] = var_494[18];
                    var_494[17] = var_494[15];
                    var_494[18] = var_494[16];
                    var_494[15] = var_494[13];
                    var_494[16] = var_494[14];
                    var_494[13] = var_494[11];
                    var_494[14] = var_494[12];
                    var_494[11] = var_494[9];
                    var_494[12] = var_494[10];
                    var_494[9] = var_494[7];
                    var_494[10] = var_494[8];
                    var_494[7] = var_494[5];
                    var_494[8] = var_494[6];
                    var_494[5] = var_494[3];
                    var_494[6] = var_494[4];
                    var_494[3] = "";
                    var_494[4] = "";
                    var_494[3] = var_494[1];
                    var_494[4] = var_494[2];
                    var_495 = 1;
                    var_494[1] = "";
                    var_494[2] = "";
                    if (comments_row1 != "" && comments_row1a == "" && comments_row2a == "") {
                        var_494[var_495] = comments_row1;
                        var_495++;
                    }
                    if (comments_row2 != "" && comments_row1a == "" && comments_row2a == "") {
                        var_494[var_495] = comments_row2;
                        var_495++;
                    }
                    if (var_295 != "") {
                        var_494[var_495] = var_295;
                        var_495++;
                    }
                    if (comments_row1a != "") {
                        var_494[var_495] = comments_row1a;
                        var_495++;
                    }
                    if (comments_row2a != "") {
                        var_494[var_495] = comments_row2a;
                        var_495++;
                    }
                    if (var_298 != "") {
                        var_494[var_495] = var_298;
                        var_495++;
                    }
                    if (!(var_407 == 1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func902()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(var_407 == 2)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func930()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function func048() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(48);
                    if (var_195 == 1) {
                        var_198 = 0;
                        var_300 = 0;
                        return [2 /*return*/];
                    }
                    color(0, 0, 0);
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(20, 250);
                    gcopy(12, 0, 0, 40, 64);
                    pos(60, 250);
                    gcopy(12, 40, 0, 40, 64);
                    pos(100, 250);
                    gcopy(12, 80, 0, 40, 64);
                    pos(140, 250);
                    gcopy(12, 120, 0, 40, 64);
                    pos(180, 250);
                    gcopy(12, 160, 0, 40, 64);
                    pos(220, 250);
                    gcopy(12, 200, 0, 40, 64);
                    pos(260, 250);
                    gcopy(12, 240, 0, 40, 64);
                    pos(300, 250);
                    gcopy(12, 280, 0, 30, 64);
                    color(255, 255, 255);
                    line(23, 252, 325, 252);
                    line(23, 312, 325, 312);
                    line(22, 253, 22, 310);
                    line(327, 253, 327, 310);
                    pset(23, 253);
                    pset(326, 253);
                    pset(23, 311);
                    pset(326, 311);
                    return [4 /*yield*/, func049()];
                case 1:
                    _a.sent();
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    if (var_299 == 0) {
                        var_496 = 9;
                    }
                    if (var_299 == 1) {
                        var_496 = 18;
                    }
                    if (var_299 == 2) {
                        var_496 = 27;
                    }
                    if (var_299 == 3) {
                        var_496 = 36;
                    }
                    if (var_299 == 4) {
                        var_496 = 45;
                    }
                    if (var_299 == 5) {
                        var_496 = 54;
                    }
                    if (var_299 == 6) {
                        var_496 = 63;
                    }
                    pos(0, 252);
                    gcopy(10, 0, var_496, 40, 60);
                    pos(40, 252);
                    gcopy(10, 40, var_496, 40, 60);
                    pos(80, 252);
                    gcopy(10, 80, var_496, 40, 60);
                    pos(120, 252);
                    gcopy(10, 120, var_496, 40, 60);
                    pos(160, 252);
                    gcopy(10, 160, var_496, 40, 60);
                    pos(200, 252);
                    gcopy(10, 200, var_496, 40, 60);
                    pos(240, 252);
                    gcopy(10, 240, var_496, 40, 60);
                    pos(280, 252);
                    gcopy(10, 280, var_496, 40, 60);
                    pos(320, 252);
                    gcopy(10, 320, var_496, 40, 60);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    return [2 /*return*/];
            }
        });
    });
}
function func049() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(49);
            gsel(10);
            color(0, 0, 0);
            boxf(left = 0, top1 = 0, right = 340, bottom = 200);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(30, 0);
            color(var_25_x, var_26_x, var_27_x);
            mes("");
            mes(comments_row1);
            mes(comments_row2);
            mes(var_295);
            mes(comments_row1a);
            mes(comments_row2a);
            mes(var_298);
            gsel(0);
            return [2 /*return*/];
        });
    });
}
function func050() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(50);
                    var_299 = 0;
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent(); // メッセージ関係呼び出し
                    var_299 = 1;
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent(); // メッセージ関係呼び出し
                    var_299 = 2;
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    var_299 = 3;
                    return [4 /*yield*/, func337()];
                case 4:
                    _a.sent(); // メッセージ関係呼び出し
                    var_299 = 4;
                    return [4 /*yield*/, func337()];
                case 5:
                    _a.sent(); // メッセージ関係呼び出し
                    var_299 = 5;
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent(); // メッセージ関係呼び出し
                    return [2 /*return*/];
            }
        });
    });
}
function func051() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_51;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(51);
                    cnt1_51 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_51 < 50)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func080()];
                case 3:
                    _a.sent(); // 各キー入力確認
                    if (key_Z_on == 0 && key_X_on == 0 && key_A_on == 0 && key_C_on == 0 && key_S_on == 0) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    ++cnt1_51;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function func052() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_52;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(52);
                    cnt1_52 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_52 < 50)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func080()];
                case 3:
                    _a.sent(); // 各キー入力確認
                    if (key_Shift_on == 0) { // キーShift入力確認
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    ++cnt1_52;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// メニュー画面呼び出し
function func053() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(53);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent(); // 各キー入力確認
                    if (!(key_X_on == 1)) return [3 /*break*/, 4];
                    var_195 = 0;
                    var_196 = 0; // Mフラグ:メニュー画面 func054
                    return [4 /*yield*/, func009()];
                case 3:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 4:
                    if (!(var_259 == 1 && var_248 == 1)) return [3 /*break*/, 8];
                    var_246 = 45 + 18;
                    var_248 = 2;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 5:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func053()];
                case 7:
                    _a.sent(); // メニュー画面呼び出し
                    return [2 /*return*/];
                case 8:
                    if (!(var_259 == 1 && var_248 == 2)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func053()];
                case 9:
                    _a.sent(); // メニュー画面呼び出し
                    return [2 /*return*/];
                case 10:
                    if (!(var_255 == 1 && var_248 == 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func053()];
                case 11:
                    _a.sent(); // メニュー画面呼び出し
                    return [2 /*return*/];
                case 12:
                    if (!(var_255 == 1 && var_248 == 2)) return [3 /*break*/, 16];
                    var_246 = 45;
                    var_248 = 1;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func053()];
                case 15:
                    _a.sent(); // メニュー画面呼び出し
                    return [2 /*return*/];
                case 16:
                    if (!(var_254 == 1 && var_247 == 2)) return [3 /*break*/, 20];
                    var_245 = 19;
                    var_247 = 1;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 17:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func053()];
                case 19:
                    _a.sent(); // メニュー画面呼び出し
                    return [2 /*return*/];
                case 20:
                    if (!(var_254 == 1 && var_247 == 1)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func053()];
                case 21:
                    _a.sent(); // メニュー画面呼び出し
                    return [2 /*return*/];
                case 22:
                    if (!(var_257 == 1 && var_247 == 1)) return [3 /*break*/, 26];
                    var_245 = 19 + 48;
                    var_247 = 2;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 23:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func053()];
                case 25:
                    _a.sent(); // メニュー画面呼び出し
                    return [2 /*return*/];
                case 26:
                    if (!(var_257 == 1 && var_247 == 2)) return [3 /*break*/, 28];
                    return [4 /*yield*/, func053()];
                case 27:
                    _a.sent(); // メニュー画面呼び出し
                    return [2 /*return*/];
                case 28:
                    // var_247 列、var_248 行?
                    if (var_247 == 1 && var_248 == 1) {
                        var_497 = 1;
                    }
                    if (var_247 == 1 && var_248 == 2) {
                        var_497 = 2;
                    }
                    if (var_247 == 2 && var_248 == 1) {
                        var_497 = 3;
                    }
                    if (var_247 == 2 && var_248 == 2) {
                        var_497 = 4;
                    }
                    if (!(key_Z_on == 1 || key_A_on == 1)) return [3 /*break*/, 40];
                    if (!(var_497 == 1)) return [3 /*break*/, 31];
                    var_195 = 0;
                    var_196 = 0;
                    item_page_number = 1;
                    Y_axis_item_position = 45;
                    var_225 = 1;
                    var_223 = var_224 + 10;
                    var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    var_230 = 45;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 29:
                    _a.sent();
                    open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    return [4 /*yield*/, func461()];
                case 30:
                    _a.sent(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return [2 /*return*/];
                case 31:
                    if (!(var_497 == 2)) return [3 /*break*/, 34];
                    var_195 = 0;
                    var_196 = 0;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, func064()];
                case 33:
                    _a.sent(); // 足元確認呼び出し
                    return [2 /*return*/];
                case 34:
                    if (!(var_497 == 3)) return [3 /*break*/, 37];
                    var_195 = 0;
                    var_196 = 0;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 35:
                    _a.sent();
                    var_498 = 1;
                    return [4 /*yield*/, func380()];
                case 36:
                    _a.sent(); // 状態異常確認呼び出し
                    return [2 /*return*/];
                case 37:
                    if (!(var_497 == 4)) return [3 /*break*/, 40];
                    var_195 = 0;
                    var_196 = 0;
                    var_499 = 1; // Mフラグ:設定画面 func056
                    var_500 = 0;
                    var_245 = 19;
                    var_246 = 45;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 38:
                    _a.sent();
                    return [4 /*yield*/, func055()];
                case 39:
                    _a.sent(); // 設定画面(メニュー画面)呼び出し
                    return [2 /*return*/];
                case 40: return [4 /*yield*/, func053()];
                case 41:
                    _a.sent(); // メニュー画面呼び出し
                    return [2 /*return*/];
            }
        });
    });
}
// メニュー画面を開いた時の表示(道具、足元、状態、設定)
function func054() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(54);
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(12, 37);
            gcopy(12, 0, 0, 123, 53);
            color(255, 255, 255);
            line(15, 39, 130, 39);
            line(15, 86, 130, 86);
            line(14, 40, 14, 84);
            line(132, 40, 132, 84);
            pset(15, 40);
            pset(131, 40);
            pset(15, 85);
            pset(131, 85);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            color(255, 255, 255);
            pos(33, 47);
            mes("道具　状態");
            mes("足元　設定");
            color(255, 255, 255);
            font("MS ゴシック", 18, 1);
            pos(var_245, var_246);
            mes(">");
            pos(var_245 + 1, var_246);
            mes(">");
            pos(var_245 + 2, var_246);
            mes(">");
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return [2 /*return*/];
        });
    });
}
// 設定画面(メニュー画面)呼び出し
function func055() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(55);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent(); // 各キー入力確認
                    if (!(var_259 == 1 && var_500 == 4)) return [3 /*break*/, 7];
                    var_246 = 45;
                    var_500 = 0;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 4:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 5:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func055()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
                case 7:
                    if (!(var_259 == 1 && var_500 == 3)) return [3 /*break*/, 12];
                    var_246 = var_246 + 16;
                    var_500 = 4;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 8:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 9:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func055()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12:
                    if (!(var_259 == 1 && var_500 == 2)) return [3 /*break*/, 17];
                    var_246 = var_246 + 16;
                    var_500 = 3;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func055()];
                case 16:
                    _a.sent();
                    return [2 /*return*/];
                case 17:
                    if (!(var_259 == 1 && var_500 == 1)) return [3 /*break*/, 22];
                    var_246 = var_246 + 16;
                    var_500 = 2;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 20:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func055()];
                case 21:
                    _a.sent();
                    return [2 /*return*/];
                case 22:
                    if (!(var_259 == 1 && var_500 == 0)) return [3 /*break*/, 27];
                    var_246 = var_246 + 16;
                    var_500 = 1;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 23:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 25:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func055()];
                case 26:
                    _a.sent();
                    return [2 /*return*/];
                case 27:
                    if (!(var_255 == 1 && var_500 == 0)) return [3 /*break*/, 32];
                    var_246 = 109;
                    var_500 = 4;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 29:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 30:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func055()];
                case 31:
                    _a.sent();
                    return [2 /*return*/];
                case 32:
                    if (!(var_255 == 1 && var_500 == 1)) return [3 /*break*/, 37];
                    var_246 = var_246 - 16;
                    var_500 = 0;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 33:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 34:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 35:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func055()];
                case 36:
                    _a.sent();
                    return [2 /*return*/];
                case 37:
                    if (!(var_255 == 1 && var_500 == 2)) return [3 /*break*/, 42];
                    var_246 = var_246 - 16;
                    var_500 = 1;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 38:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 39:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 40:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func055()];
                case 41:
                    _a.sent();
                    return [2 /*return*/];
                case 42:
                    if (!(var_255 == 1 && var_500 == 3)) return [3 /*break*/, 47];
                    var_246 = var_246 - 16;
                    var_500 = 2;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 43:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 44:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 45:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func055()];
                case 46:
                    _a.sent();
                    return [2 /*return*/];
                case 47:
                    if (!(var_255 == 1 && var_500 == 4)) return [3 /*break*/, 52];
                    var_246 = var_246 - 16;
                    var_500 = 3;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 48:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 49:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 50:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func055()];
                case 51:
                    _a.sent();
                    return [2 /*return*/];
                case 52:
                    if (!(key_Z_on == 1 || key_A_on == 1)) return [3 /*break*/, 80];
                    if (!(var_500 == 0 && var_501 == 0)) return [3 /*break*/, 58];
                    var_501 = 1;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 53:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 54:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 55:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 56:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func055()];
                case 57:
                    _a.sent();
                    return [2 /*return*/];
                case 58:
                    if (!(var_500 == 0 && var_501 == 1)) return [3 /*break*/, 64];
                    var_501 = 0;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 59:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 60:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 61:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 62:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func055()];
                case 63:
                    _a.sent();
                    return [2 /*return*/];
                case 64:
                    if (!(var_500 == 1)) return [3 /*break*/, 67];
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 65:
                    _a.sent();
                    var_499 = 0; // Mフラグ:設定画面 func056
                    var_502 = 6;
                    var_503 = 1;
                    var_504 = 2;
                    return [4 /*yield*/, func378()];
                case 66:
                    _a.sent();
                    return [2 /*return*/];
                case 67:
                    if (!(var_500 == 2)) return [3 /*break*/, 70];
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    var_505 = 0;
                    var_506 = 19;
                    var_507 = 45;
                    return [4 /*yield*/, func051()];
                case 68:
                    _a.sent();
                    var_508 = 1; // Mフラグ:資料(設定画面) func058
                    return [4 /*yield*/, func057()];
                case 69:
                    _a.sent();
                    return [2 /*return*/];
                case 70:
                    if (!(var_500 == 3)) return [3 /*break*/, 73];
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 71:
                    _a.sent();
                    var_509 = 1;
                    return [4 /*yield*/, func193()];
                case 72:
                    _a.sent();
                    return [2 /*return*/];
                case 73:
                    if (!(var_500 == 4 && var_375 == 0)) return [3 /*break*/, 76];
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 74:
                    _a.sent();
                    var_499 = 0; // Mフラグ:設定画面 func056
                    return [4 /*yield*/, func234()];
                case 75:
                    _a.sent();
                    return [2 /*return*/];
                case 76:
                    if (!(var_500 == 4 && var_375 == 1)) return [3 /*break*/, 80];
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    var_499 = 0; // Mフラグ:設定画面 func056
                    return [4 /*yield*/, func051()];
                case 77:
                    _a.sent();
                    return [4 /*yield*/, func233()];
                case 78:
                    _a.sent();
                    return [4 /*yield*/, func880()];
                case 79:
                    _a.sent();
                    return [2 /*return*/];
                case 80:
                    if (!(key_X_on == 1)) return [3 /*break*/, 83];
                    var_499 = 0; // Mフラグ:設定画面 func056
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 81:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 82:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 83: return [4 /*yield*/, func055()];
                case 84:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// メニュー画面の"設定"の表示 (マップON、履歴、資料、システム、終了)
function func056() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(56);
            var_510 = 25;
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(12, 37);
            gcopy(12, 0, 0, 113, 130 - var_510);
            color(255, 255, 255);
            // Mフラグ:資料(設定画面) func058
            if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            line(15, 39, 120, 39);
            line(15, 164 - var_510, 120, 164 - var_510);
            line(14, 40, 14, 162 - var_510);
            line(122, 40, 122, 162 - var_510);
            pset(15, 40);
            pset(121, 40);
            pset(15, 163 - var_510);
            pset(121, 163 - var_510);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(33, 47);
            color(255, 255, 255);
            // Mフラグ:資料(設定画面) func058
            if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            if (var_501 == 0) {
                mes("マップ ON ");
            }
            if (var_501 == 1) {
                mes("マップ OFF");
            }
            color(255, 255, 255);
            // Mフラグ:資料(設定画面) func058
            if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            mes("履歴");
            color(255, 255, 255);
            // Mフラグ:資料(設定画面) func058
            if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            mes("資料");
            color(255, 255, 255);
            // Mフラグ:資料(設定画面) func058
            if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            mes("システム");
            color(255, 255, 255);
            // Mフラグ:資料(設定画面) func058
            if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            if (var_375 == 0) {
                mes("終了");
            }
            if (var_375 == 1) {
                mes("ギブアップ");
            }
            color(255, 255, 255);
            if (var_512 >= 1) {
                color(150, 150, 150);
            }
            // Mフラグ:資料(設定画面) func058
            if (var_508 == 1 || var_509 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            font("MS ゴシック", 16, 1);
            pos(var_245, var_246);
            mes(">");
            pos(var_245 + 1, var_246);
            mes(">");
            pos(var_245 + 2, var_246);
            mes(">");
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return [2 /*return*/];
        });
    });
}
function func057() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(57);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent(); // 各キー入力確認
                    if (!(var_259 == 1 && var_505 == 3)) return [3 /*break*/, 7];
                    var_507 = 45;
                    var_505 = 0;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 4:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 5:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func057()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
                case 7:
                    if (!(var_259 == 1 && var_505 == 2)) return [3 /*break*/, 12];
                    var_507 = var_507 + 16;
                    var_505 = 3;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 8:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 9:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func057()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12:
                    if (!(var_259 == 1 && var_505 == 1)) return [3 /*break*/, 17];
                    var_507 = var_507 + 16;
                    var_505 = 2;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func057()];
                case 16:
                    _a.sent();
                    return [2 /*return*/];
                case 17:
                    if (!(var_259 == 1 && var_505 == 0)) return [3 /*break*/, 22];
                    var_507 = var_507 + 16;
                    var_505 = 1;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 20:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func057()];
                case 21:
                    _a.sent();
                    return [2 /*return*/];
                case 22:
                    if (!(var_255 == 1 && var_505 == 0)) return [3 /*break*/, 27];
                    var_507 = 93;
                    var_505 = 3;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 23:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 25:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func057()];
                case 26:
                    _a.sent();
                    return [2 /*return*/];
                case 27:
                    if (!(var_255 == 1 && var_505 == 1)) return [3 /*break*/, 32];
                    var_507 = var_507 - 16;
                    var_505 = 0;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 29:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 30:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func057()];
                case 31:
                    _a.sent();
                    return [2 /*return*/];
                case 32:
                    if (!(var_255 == 1 && var_505 == 2)) return [3 /*break*/, 37];
                    var_507 = var_507 - 16;
                    var_505 = 1;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 33:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 34:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 35:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func057()];
                case 36:
                    _a.sent();
                    return [2 /*return*/];
                case 37:
                    if (!(var_255 == 1 && var_505 == 3)) return [3 /*break*/, 42];
                    var_507 = var_507 - 16;
                    var_505 = 2;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 38:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 39:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 40:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func057()];
                case 41:
                    _a.sent();
                    return [2 /*return*/];
                case 42:
                    if (!(key_Z_on == 1 || key_A_on == 1)) return [3 /*break*/, 54];
                    if (!(var_505 == 0 && var_375 == 0)) return [3 /*break*/, 45];
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 43:
                    _a.sent();
                    var_512 = 1;
                    var_513 = 1;
                    var_514 = 0;
                    var_515 = 131;
                    var_516 = 88;
                    return [4 /*yield*/, func820()];
                case 44:
                    _a.sent();
                    return [2 /*return*/];
                case 45:
                    if (!(var_505 == 1 && var_375 == 0)) return [3 /*break*/, 48];
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 46:
                    _a.sent();
                    var_508 = 0; // Mフラグ:資料(設定画面) func058
                    var_499 = 0; // Mフラグ:設定画面 func056
                    var_502 = 5;
                    return [4 /*yield*/, func375()];
                case 47:
                    _a.sent();
                    return [2 /*return*/];
                case 48:
                    if (!(var_505 == 2 && var_375 == 0)) return [3 /*break*/, 51];
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 49:
                    _a.sent();
                    var_508 = 0; // Mフラグ:資料(設定画面) func058
                    var_499 = 0; // Mフラグ:設定画面 func056
                    var_502 = 3;
                    return [4 /*yield*/, func371()];
                case 50:
                    _a.sent();
                    return [2 /*return*/];
                case 51:
                    if (!(var_505 == 3 && var_375 == 0)) return [3 /*break*/, 54];
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 52:
                    _a.sent();
                    return [4 /*yield*/, func357()];
                case 53:
                    _a.sent();
                    return [2 /*return*/];
                case 54:
                    if (!(key_X_on == 1)) return [3 /*break*/, 57];
                    var_508 = 0; // Mフラグ:資料(設定画面) func058
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    var_499 = 1; // Mフラグ:設定画面 func056
                    return [4 /*yield*/, func051()];
                case 55:
                    _a.sent();
                    return [4 /*yield*/, func055()];
                case 56:
                    _a.sent();
                    return [2 /*return*/];
                case 57: return [4 /*yield*/, func057()];
                case 58:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// メニュー画面の設定からいける"資料"の表示
function func058() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(58);
            var_510 = 45;
            var_517 = 60;
            var_518 = 25;
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(12 + var_517, 37 + var_518);
            gcopy(12, 0, 0, 113, 130 - var_510);
            color(255, 255, 255);
            if (var_512 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            line(15 + var_517, 39 + var_518, 120 + var_517, 39 + var_518);
            line(15 + var_517, 164 - var_510 + var_518, 120 + var_517, 164 - var_510 + var_518);
            line(14 + var_517, 40 + var_518, 14 + var_517, 162 - var_510 + var_518);
            line(122 + var_517, 40 + var_518, 122 + var_517, 162 - var_510 + var_518);
            pset(15 + var_517, 40 + var_518);
            pset(121 + var_517, 40 + var_518);
            pset(15 + var_517, 163 - var_510 + var_518);
            pset(121 + var_517, 163 - var_510 + var_518);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(33 + var_517, 47 + var_518);
            color(255, 255, 255);
            if (var_375 == 1 || var_512 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            mes("ハイスコア");
            color(255, 255, 255);
            if (var_375 == 1 || var_512 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            mes("コミックス");
            color(255, 255, 255);
            if (var_375 == 1 || var_512 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            mes("死因リスト");
            color(255, 255, 255);
            if (var_375 == 1 || var_512 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            mes("敵図鑑");
            color(255, 255, 255);
            if (var_512 == 1 || var_511 >= 1) {
                color(150, 150, 150);
            }
            font("MS ゴシック", 16, 1);
            pos(var_506 + var_517, var_507 + var_518);
            mes(">");
            pos(var_506 + 1 + var_517, var_507 + var_518);
            mes(">");
            pos(var_506 + 2 + var_517, var_507 + var_518);
            mes(">");
            if (var_512 == 1) {
                var_519 = 112;
                var_520 = 43;
                var_521 = 40;
                var_522 = 0;
                if (var_523 >= 1) {
                    var_522++;
                }
                if (var_524 >= 1) {
                    var_522++;
                }
                var_525 = 90;
                if (var_404 >= 1) {
                    var_525 = 70;
                }
                if (var_526 >= 1) {
                    var_525 = 56;
                }
                if (var_522 == 1) {
                    var_525 = 34;
                }
                if (var_522 == 2) {
                    var_525 = 28;
                }
                color(0, 0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                pos(12 + var_519, 37 + var_520);
                gcopy(12, 0, 0, 213, 88 - var_525 + var_521);
                color(255, 255, 255);
                line(15 + var_519, 39 + var_520, 220 + var_519, 39 + var_520);
                line(15 + var_519, 121 + var_520 - var_525 + var_521, 220 + var_519, 121 + var_520 - var_525 + var_521);
                line(14 + var_519, 40 + var_520, 14 + var_519, 119 + var_520 - var_525 + var_521);
                line(222 + var_519, 40 + var_520, 222 + var_519, 119 + var_520 - var_525 + var_521);
                pset(15 + var_519, 40 + var_520);
                pset(221 + var_519, 40 + var_520);
                pset(15 + var_519, 120 + var_520 - var_525 + var_521);
                pset(221 + var_519, 120 + var_520 - var_525 + var_521);
                font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                color(255, 255, 255);
                pos(33 + var_519, 47 + var_520);
                mes("ホテルの外");
                if (var_404 >= 1) {
                    mes("レクイエムの大迷宮");
                }
                if (var_526 >= 1) {
                    mes("ディアボロの試練");
                }
                if (var_524 >= 1) {
                    mes("" + var_21);
                }
                if (var_523 >= 1) {
                    mes("一巡後の世界");
                }
                color(255, 255, 255);
                font("MS ゴシック", 16, 1);
                pos(var_515, var_516);
                mes(">");
                pos(var_515 + 1, var_516);
                mes(">");
                pos(var_515 + 2, var_516);
                mes(">");
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return [2 /*return*/];
        });
    });
}
function func059() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(59);
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && current_floor == 12 && var_203 == 1) {
                var_94 = 1;
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && current_floor == 12 && var_203 == 2) {
                var_94 = 3;
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && current_floor == 12 && var_203 == 3) {
                var_94 = 2;
            }
            return [2 /*return*/];
        });
    });
}
function func060() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt3_24, cnt4_9, cnt4_10, cnt4_11, cnt4_12, cnt4_13, cnt4_14, cnt4_15, cnt4_16, cnt4_17, cnt4_18, cnt4_19, cnt4_20, cnt4_21, cnt4_22, cnt4_23, cnt4_24, cnt4_25, cnt4_26, cnt4_27, cnt4_28, cnt4_29, cnt4_30, cnt4_31, cnt4_32, cnt4_33, cnt4_34, cnt4_35, cnt4_36, cnt4_37, cnt4_38, cnt4_39, cnt4_40, cnt4_41, cnt4_42, cnt4_43, cnt4_44, cnt3_25, cnt3_26, cnt3_27, cnt3_28, cnt3_29, cnt3_30;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(60);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent(); // 各キー入力確認
                    if (!(var_259 == 1 && var_406 == 1)) return [3 /*break*/, 5];
                    var_246 = var_246 + 19;
                    var_406 = 0;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 4:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 5;
                case 5:
                    if (!(var_255 == 1 && var_406 == 0)) return [3 /*break*/, 8];
                    var_246 = var_246 - 19;
                    var_406 = 1;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent(); // メッセージ関係呼び出し
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 8;
                case 8:
                    if (!(key_Z_on == 1 || key_A_on == 1)) return [3 /*break*/, 219];
                    if (!(var_406 == 1)) return [3 /*break*/, 219];
                    var_405 = 0;
                    var_344 = 0;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    var_527 = 0;
                    var_528 = 1;
                    for (cnt3_24 = 0; cnt3_24 < var_97; ++cnt3_24) {
                        if (var_83[var_528].Var0 == 29 && var_83[var_528].Var10 == var_201 && var_201 != 14 && var_83[var_528].Var20 == 0 && var_83[var_528].Var12 == 0 && var_83[var_528].Var13 == 0 && var_83[var_528].Var17 == 0 && var_83[var_528].Var23 == 0) {
                            if (var_215 != 206 && var_215 != 108 && var_130 != 1) {
                                var_527 = 1;
                            }
                            if (var_73[var_66][var_67] == 2) {
                                var_527 = 0;
                            }
                        }
                        if (var_83[var_528].Var0 == 113 && var_83[var_528].Var10 == var_201 && var_201 != 14 && var_83[var_528].Var20 == 0 && var_83[var_528].Var12 == 0 && var_83[var_528].Var13 == 0 && var_83[var_528].Var17 == 0 && var_83[var_528].Var23 == 0) {
                            if (var_215 != 100 && var_215 != 111 && var_215 != 398) {
                                var_527 = 2;
                            }
                        }
                        var_528 = var_528 + 1;
                    }
                    // No = 1 なので、ホテルの外
                    if (dangeon_number == 1 && current_floor == 12) {
                        var_527 = 0;
                    }
                    // No = 2 なので、レクイエムの大迷宮
                    if (dangeon_number == 2 && current_floor == 30) {
                        var_527 = 0;
                    }
                    // No = 3 なので、ディアボロの試練
                    if (dangeon_number == 3 && current_floor == 99) {
                        var_527 = 0;
                    }
                    if (dangeon_number == 5 && current_floor == var_20) {
                        var_527 = 0;
                    }
                    if (!(var_527 == 1)) return [3 /*break*/, 15];
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ｸﾞﾘｰﾝ･ﾃﾞｨが同じ部屋にいるぞ";
                    comments_row2 = "このままでは降りられないぞ";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 9:
                    _a.sent();
                    gsel(19);
                    color(10, 100, 10);
                    boxf(left = 0, top1 = 0, right = 340, bottom = 340);
                    gsel(0);
                    var_529 = 1;
                    cnt4_9 = 0;
                    _a.label = 10;
                case 10:
                    if (!(cnt4_9 < 20)) return [3 /*break*/, 13];
                    return [4 /*yield*/, func337()];
                case 11:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 12;
                case 12:
                    ++cnt4_9;
                    return [3 /*break*/, 10];
                case 13:
                    var_529 = 0;
                    return [4 /*yield*/, func009()];
                case 14:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 15:
                    if (!(var_527 == 2)) return [3 /*break*/, 59];
                    var_373 = 5;
                    cnt4_10 = 0;
                    _a.label = 16;
                case 16:
                    if (!(cnt4_10 < 2)) return [3 /*break*/, 19];
                    return [4 /*yield*/, func337()];
                case 17:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 18;
                case 18:
                    ++cnt4_10;
                    return [3 /*break*/, 16];
                case 19:
                    var_373 = 4;
                    cnt4_11 = 0;
                    _a.label = 20;
                case 20:
                    if (!(cnt4_11 < 2)) return [3 /*break*/, 23];
                    return [4 /*yield*/, func337()];
                case 21:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 22;
                case 22:
                    ++cnt4_11;
                    return [3 /*break*/, 20];
                case 23:
                    var_373 = 3;
                    cnt4_12 = 0;
                    _a.label = 24;
                case 24:
                    if (!(cnt4_12 < 2)) return [3 /*break*/, 27];
                    return [4 /*yield*/, func337()];
                case 25:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 26;
                case 26:
                    ++cnt4_12;
                    return [3 /*break*/, 24];
                case 27:
                    var_373 = 2;
                    cnt4_13 = 0;
                    _a.label = 28;
                case 28:
                    if (!(cnt4_13 < 2)) return [3 /*break*/, 31];
                    return [4 /*yield*/, func337()];
                case 29:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 30;
                case 30:
                    ++cnt4_13;
                    return [3 /*break*/, 28];
                case 31:
                    var_373 = 1;
                    cnt4_14 = 0;
                    _a.label = 32;
                case 32:
                    if (!(cnt4_14 < 10)) return [3 /*break*/, 35];
                    return [4 /*yield*/, func337()];
                case 33:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 34;
                case 34:
                    ++cnt4_14;
                    return [3 /*break*/, 32];
                case 35:
                    DSPLAY(audio_id = 101); // 階段を昇るor降りる時の効果音
                    cnt4_15 = 0;
                    _a.label = 36;
                case 36:
                    if (!(cnt4_15 < 10)) return [3 /*break*/, 39];
                    return [4 /*yield*/, func337()];
                case 37:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 38;
                case 38:
                    ++cnt4_15;
                    return [3 /*break*/, 36];
                case 39:
                    var_373 = 0;
                    if (var_199 == 2) {
                        var_530 = 8;
                    }
                    if (var_199 == 8) {
                        var_530 = 2;
                    }
                    if (var_199 == 4) {
                        var_530 = 6;
                    }
                    if (var_199 == 6) {
                        var_530 = 4;
                    }
                    if (var_199 == 1) {
                        var_530 = 9;
                    }
                    if (var_199 == 3) {
                        var_530 = 7;
                    }
                    if (var_199 == 7) {
                        var_530 = 3;
                    }
                    if (var_199 == 9) {
                        var_530 = 1;
                    }
                    var_199 = var_530;
                    DSPLAY(audio_id = 185);
                    var_271 = 1;
                    var_531 = 1;
                    cnt4_16 = 0;
                    _a.label = 40;
                case 40:
                    if (!(cnt4_16 < 20)) return [3 /*break*/, 43];
                    return [4 /*yield*/, func337()];
                case 41:
                    _a.sent(); // メッセージ関係呼び出し
                    var_531++;
                    _a.label = 42;
                case 42:
                    ++cnt4_16;
                    return [3 /*break*/, 40];
                case 43:
                    var_271 = 0;
                    var_531 = 0;
                    cnt4_17 = 0;
                    _a.label = 44;
                case 44:
                    if (!(cnt4_17 < 10)) return [3 /*break*/, 47];
                    return [4 /*yield*/, func337()];
                case 45:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 46;
                case 46:
                    ++cnt4_17;
                    return [3 /*break*/, 44];
                case 47: return [4 /*yield*/, func094()];
                case 48:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「ありのまま起こったことを話すぜ！」";
                    comments_row2 = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 49:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 50:
                    _a.sent(); // キー入力による選択処理
                    return [4 /*yield*/, func094()];
                case 51:
                    _a.sent();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "「おれは階段を降りたと思ったら";
                    comments_row2a = "　いつの間にか上っていた」";
                    if (var_73[var_66][var_67] == 2) {
                        comments_row1a = "「おれは階段を上ったと思ったら";
                        comments_row2a = "　いつの間にか降りていた」";
                    }
                    return [4 /*yield*/, func050()];
                case 52:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 53:
                    _a.sent();
                    cnt4_18 = 0;
                    _a.label = 54;
                case 54:
                    if (!(cnt4_18 < 10)) return [3 /*break*/, 57];
                    return [4 /*yield*/, func337()];
                case 55:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 56;
                case 56:
                    ++cnt4_18;
                    return [3 /*break*/, 54];
                case 57: return [4 /*yield*/, func009()];
                case 58:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 59:
                    if (!(var_114 >= 1)) return [3 /*break*/, 66];
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "掴まれていて降りられない！";
                    if (var_73[var_66][var_67] == 2) {
                        comments_row1 = "掴まれていて上れない！";
                    }
                    comments_row2 = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 60:
                    _a.sent();
                    cnt4_19 = 0;
                    _a.label = 61;
                case 61:
                    if (!(cnt4_19 < 9)) return [3 /*break*/, 64];
                    return [4 /*yield*/, func337()];
                case 62:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 63;
                case 63:
                    ++cnt4_19;
                    return [3 /*break*/, 61];
                case 64: return [4 /*yield*/, func009()];
                case 65:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 66:
                    if (!(dangeon_number == 1 && current_floor == 12)) return [3 /*break*/, 90];
                    var_373 = 5;
                    cnt4_20 = 0;
                    _a.label = 67;
                case 67:
                    if (!(cnt4_20 < 2)) return [3 /*break*/, 70];
                    return [4 /*yield*/, func337()];
                case 68:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 69;
                case 69:
                    ++cnt4_20;
                    return [3 /*break*/, 67];
                case 70:
                    var_373 = 4;
                    cnt4_21 = 0;
                    _a.label = 71;
                case 71:
                    if (!(cnt4_21 < 2)) return [3 /*break*/, 74];
                    return [4 /*yield*/, func337()];
                case 72:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 73;
                case 73:
                    ++cnt4_21;
                    return [3 /*break*/, 71];
                case 74:
                    var_373 = 3;
                    cnt4_22 = 0;
                    _a.label = 75;
                case 75:
                    if (!(cnt4_22 < 2)) return [3 /*break*/, 78];
                    return [4 /*yield*/, func337()];
                case 76:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 77;
                case 77:
                    ++cnt4_22;
                    return [3 /*break*/, 75];
                case 78:
                    var_373 = 2;
                    cnt4_23 = 0;
                    _a.label = 79;
                case 79:
                    if (!(cnt4_23 < 2)) return [3 /*break*/, 82];
                    return [4 /*yield*/, func337()];
                case 80:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 81;
                case 81:
                    ++cnt4_23;
                    return [3 /*break*/, 79];
                case 82:
                    var_373 = 1;
                    cnt4_24 = 0;
                    _a.label = 83;
                case 83:
                    if (!(cnt4_24 < 10)) return [3 /*break*/, 86];
                    return [4 /*yield*/, func337()];
                case 84:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 85;
                case 85:
                    ++cnt4_24;
                    return [3 /*break*/, 83];
                case 86:
                    var_373 = 0;
                    var_94 = 0;
                    if (var_404 == 0) {
                        var_207 = 3;
                    }
                    var_532 = 1;
                    var_356 = 301;
                    if (var_203 == 1) {
                        var_356 = 321;
                    }
                    if (var_203 == 2) {
                        var_356 = 322;
                    }
                    if (var_203 == 3) {
                        var_356 = 325;
                    }
                    var_533 = 50000;
                    if (var_404 == 0) {
                        var_404 = 1;
                    }
                    if (!(var_407 == 2)) return [3 /*break*/, 88];
                    var_534++;
                    return [4 /*yield*/, func929()];
                case 87:
                    _a.sent();
                    _a.label = 88;
                case 88: return [4 /*yield*/, func173()];
                case 89:
                    _a.sent();
                    return [2 /*return*/];
                case 90:
                    if (!(dangeon_number == 2 && current_floor == 30)) return [3 /*break*/, 114];
                    var_373 = 5;
                    cnt4_25 = 0;
                    _a.label = 91;
                case 91:
                    if (!(cnt4_25 < 2)) return [3 /*break*/, 94];
                    return [4 /*yield*/, func337()];
                case 92:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 93;
                case 93:
                    ++cnt4_25;
                    return [3 /*break*/, 91];
                case 94:
                    var_373 = 4;
                    cnt4_26 = 0;
                    _a.label = 95;
                case 95:
                    if (!(cnt4_26 < 2)) return [3 /*break*/, 98];
                    return [4 /*yield*/, func337()];
                case 96:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 97;
                case 97:
                    ++cnt4_26;
                    return [3 /*break*/, 95];
                case 98:
                    var_373 = 3;
                    cnt4_27 = 0;
                    _a.label = 99;
                case 99:
                    if (!(cnt4_27 < 2)) return [3 /*break*/, 102];
                    return [4 /*yield*/, func337()];
                case 100:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 101;
                case 101:
                    ++cnt4_27;
                    return [3 /*break*/, 99];
                case 102:
                    var_373 = 2;
                    cnt4_28 = 0;
                    _a.label = 103;
                case 103:
                    if (!(cnt4_28 < 2)) return [3 /*break*/, 106];
                    return [4 /*yield*/, func337()];
                case 104:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 105;
                case 105:
                    ++cnt4_28;
                    return [3 /*break*/, 103];
                case 106:
                    var_373 = 1;
                    cnt4_29 = 0;
                    _a.label = 107;
                case 107:
                    if (!(cnt4_29 < 10)) return [3 /*break*/, 110];
                    return [4 /*yield*/, func337()];
                case 108:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 109;
                case 109:
                    ++cnt4_29;
                    return [3 /*break*/, 107];
                case 110:
                    var_373 = 0;
                    var_94 = 0;
                    var_532 = 1;
                    var_356 = 302;
                    var_533 = 100000;
                    if (var_526 == 0) {
                        var_526 = 1;
                        var_207 = 6;
                    }
                    if (var_535 == 1 && var_536 == 0) {
                        var_356 = 312;
                        var_533 = 200000;
                        if (var_526 < 2) {
                            var_526 = 2;
                        }
                        var_11 = 1;
                        bsave(file_name = "00.dat", data = var_11, data_size = null, offset = 80);
                    }
                    if (!(var_407 == 2)) return [3 /*break*/, 112];
                    var_534++;
                    return [4 /*yield*/, func929()];
                case 111:
                    _a.sent();
                    _a.label = 112;
                case 112: return [4 /*yield*/, func173()];
                case 113:
                    _a.sent();
                    return [2 /*return*/];
                case 114:
                    if (!(dangeon_number == 3 && current_floor == 99)) return [3 /*break*/, 138];
                    var_373 = 5;
                    cnt4_30 = 0;
                    _a.label = 115;
                case 115:
                    if (!(cnt4_30 < 2)) return [3 /*break*/, 118];
                    return [4 /*yield*/, func337()];
                case 116:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 117;
                case 117:
                    ++cnt4_30;
                    return [3 /*break*/, 115];
                case 118:
                    var_373 = 4;
                    cnt4_31 = 0;
                    _a.label = 119;
                case 119:
                    if (!(cnt4_31 < 2)) return [3 /*break*/, 122];
                    return [4 /*yield*/, func337()];
                case 120:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 121;
                case 121:
                    ++cnt4_31;
                    return [3 /*break*/, 119];
                case 122:
                    var_373 = 3;
                    cnt4_32 = 0;
                    _a.label = 123;
                case 123:
                    if (!(cnt4_32 < 2)) return [3 /*break*/, 126];
                    return [4 /*yield*/, func337()];
                case 124:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 125;
                case 125:
                    ++cnt4_32;
                    return [3 /*break*/, 123];
                case 126:
                    var_373 = 2;
                    cnt4_33 = 0;
                    _a.label = 127;
                case 127:
                    if (!(cnt4_33 < 2)) return [3 /*break*/, 130];
                    return [4 /*yield*/, func337()];
                case 128:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 129;
                case 129:
                    ++cnt4_33;
                    return [3 /*break*/, 127];
                case 130:
                    var_373 = 1;
                    cnt4_34 = 0;
                    _a.label = 131;
                case 131:
                    if (!(cnt4_34 < 10)) return [3 /*break*/, 134];
                    return [4 /*yield*/, func337()];
                case 132:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 133;
                case 133:
                    ++cnt4_34;
                    return [3 /*break*/, 131];
                case 134:
                    var_373 = 0;
                    var_94 = 0;
                    var_532 = 1;
                    var_356 = 303;
                    var_533 = 1000000;
                    if (var_537 == 0) {
                        var_537 = 1;
                    }
                    if (!(var_407 == 2)) return [3 /*break*/, 136];
                    var_534++;
                    return [4 /*yield*/, func929()];
                case 135:
                    _a.sent();
                    _a.label = 136;
                case 136: return [4 /*yield*/, func173()];
                case 137:
                    _a.sent();
                    return [2 /*return*/];
                case 138:
                    if (!(dangeon_number == 5 && current_floor == var_20 && var_73[var_66][var_67] == 1)) return [3 /*break*/, 162];
                    var_373 = 5;
                    cnt4_35 = 0;
                    _a.label = 139;
                case 139:
                    if (!(cnt4_35 < 2)) return [3 /*break*/, 142];
                    return [4 /*yield*/, func337()];
                case 140:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 141;
                case 141:
                    ++cnt4_35;
                    return [3 /*break*/, 139];
                case 142:
                    var_373 = 4;
                    cnt4_36 = 0;
                    _a.label = 143;
                case 143:
                    if (!(cnt4_36 < 2)) return [3 /*break*/, 146];
                    return [4 /*yield*/, func337()];
                case 144:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 145;
                case 145:
                    ++cnt4_36;
                    return [3 /*break*/, 143];
                case 146:
                    var_373 = 3;
                    cnt4_37 = 0;
                    _a.label = 147;
                case 147:
                    if (!(cnt4_37 < 2)) return [3 /*break*/, 150];
                    return [4 /*yield*/, func337()];
                case 148:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 149;
                case 149:
                    ++cnt4_37;
                    return [3 /*break*/, 147];
                case 150:
                    var_373 = 2;
                    cnt4_38 = 0;
                    _a.label = 151;
                case 151:
                    if (!(cnt4_38 < 2)) return [3 /*break*/, 154];
                    return [4 /*yield*/, func337()];
                case 152:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 153;
                case 153:
                    ++cnt4_38;
                    return [3 /*break*/, 151];
                case 154:
                    var_373 = 1;
                    cnt4_39 = 0;
                    _a.label = 155;
                case 155:
                    if (!(cnt4_39 < 10)) return [3 /*break*/, 158];
                    return [4 /*yield*/, func337()];
                case 156:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 157;
                case 157:
                    ++cnt4_39;
                    return [3 /*break*/, 155];
                case 158:
                    var_373 = 0;
                    var_94 = 0;
                    var_532 = 1;
                    var_356 = 314;
                    var_533 = 1000000;
                    if (var_538 == 0) {
                        var_538 = 1;
                    }
                    if (!(var_407 == 2)) return [3 /*break*/, 160];
                    var_534++;
                    return [4 /*yield*/, func929()];
                case 159:
                    _a.sent();
                    _a.label = 160;
                case 160: return [4 /*yield*/, func173()];
                case 161:
                    _a.sent();
                    return [2 /*return*/];
                case 162:
                    DSPLAY(audio_id = 101); // 階段を昇るor降りる時の効果音
                    if (!(var_375 == 1)) return [3 /*break*/, 185];
                    var_373 = 5;
                    cnt4_40 = 0;
                    _a.label = 163;
                case 163:
                    if (!(cnt4_40 < 2)) return [3 /*break*/, 166];
                    return [4 /*yield*/, func337()];
                case 164:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 165;
                case 165:
                    ++cnt4_40;
                    return [3 /*break*/, 163];
                case 166:
                    var_373 = 4;
                    cnt4_41 = 0;
                    _a.label = 167;
                case 167:
                    if (!(cnt4_41 < 2)) return [3 /*break*/, 170];
                    return [4 /*yield*/, func337()];
                case 168:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 169;
                case 169:
                    ++cnt4_41;
                    return [3 /*break*/, 167];
                case 170:
                    var_373 = 3;
                    cnt4_42 = 0;
                    _a.label = 171;
                case 171:
                    if (!(cnt4_42 < 2)) return [3 /*break*/, 174];
                    return [4 /*yield*/, func337()];
                case 172:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 173;
                case 173:
                    ++cnt4_42;
                    return [3 /*break*/, 171];
                case 174:
                    var_373 = 2;
                    cnt4_43 = 0;
                    _a.label = 175;
                case 175:
                    if (!(cnt4_43 < 2)) return [3 /*break*/, 178];
                    return [4 /*yield*/, func337()];
                case 176:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 177;
                case 177:
                    ++cnt4_43;
                    return [3 /*break*/, 175];
                case 178:
                    var_373 = 1;
                    cnt4_44 = 0;
                    _a.label = 179;
                case 179:
                    if (!(cnt4_44 < 10)) return [3 /*break*/, 182];
                    return [4 /*yield*/, func337()];
                case 180:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 181;
                case 181:
                    ++cnt4_44;
                    return [3 /*break*/, 179];
                case 182:
                    var_373 = 0;
                    var_94 = 0;
                    var_539 = 1;
                    return [4 /*yield*/, func233()];
                case 183:
                    _a.sent();
                    return [4 /*yield*/, func880()];
                case 184:
                    _a.sent();
                    return [2 /*return*/];
                case 185: return [4 /*yield*/, func061()];
                case 186:
                    _a.sent();
                    var_373 = 5;
                    cnt3_25 = 0;
                    _a.label = 187;
                case 187:
                    if (!(cnt3_25 < 2)) return [3 /*break*/, 190];
                    return [4 /*yield*/, func337()];
                case 188:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 189;
                case 189:
                    ++cnt3_25;
                    return [3 /*break*/, 187];
                case 190:
                    var_373 = 4;
                    cnt3_26 = 0;
                    _a.label = 191;
                case 191:
                    if (!(cnt3_26 < 2)) return [3 /*break*/, 194];
                    return [4 /*yield*/, func337()];
                case 192:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 193;
                case 193:
                    ++cnt3_26;
                    return [3 /*break*/, 191];
                case 194:
                    var_373 = 3;
                    cnt3_27 = 0;
                    _a.label = 195;
                case 195:
                    if (!(cnt3_27 < 2)) return [3 /*break*/, 198];
                    return [4 /*yield*/, func337()];
                case 196:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 197;
                case 197:
                    ++cnt3_27;
                    return [3 /*break*/, 195];
                case 198:
                    var_373 = 2;
                    cnt3_28 = 0;
                    _a.label = 199;
                case 199:
                    if (!(cnt3_28 < 2)) return [3 /*break*/, 202];
                    return [4 /*yield*/, func337()];
                case 200:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 201;
                case 201:
                    ++cnt3_28;
                    return [3 /*break*/, 199];
                case 202:
                    var_373 = 1;
                    cnt3_29 = 0;
                    _a.label = 203;
                case 203:
                    if (!(cnt3_29 < 10)) return [3 /*break*/, 206];
                    return [4 /*yield*/, func337()];
                case 204:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 205;
                case 205:
                    ++cnt3_29;
                    return [3 /*break*/, 203];
                case 206:
                    var_373 = 0;
                    if (var_73[var_66][var_67] == 1) {
                        current_floor = current_floor + 1;
                        if (current_floor > var_376) {
                            var_376 = current_floor;
                        }
                        // No = 1 なので、ホテルの外
                        if (dangeon_number == 1 && current_floor > dangeon1_floor) {
                            dangeon1_floor = current_floor;
                        }
                        // No = 2 なので、レクイエムの大迷宮
                        if (dangeon_number == 2 && current_floor > dangeon2_floor) {
                            dangeon2_floor = current_floor;
                        }
                        // No = 3 なので、ディアボロの試練
                        if (dangeon_number == 3 && current_floor > dangeon3_floor) {
                            dangeon3_floor = current_floor;
                        }
                        // No = 4 なので、一巡後の世界
                        if (dangeon_number == 4 && current_floor > dangeon4_floor) {
                            dangeon4_floor = current_floor;
                        }
                        if (dangeon_number == 5 && current_floor > dangeon5_floor) {
                            dangeon5_floor = current_floor;
                        }
                    }
                    if (var_73[var_66][var_67] == 2) {
                        current_floor = current_floor - 1;
                    }
                    var_94 = 0;
                    return [4 /*yield*/, func059()];
                case 207:
                    _a.sent();
                    var_205 = 1;
                    return [4 /*yield*/, func231()];
                case 208:
                    _a.sent();
                    if (!(var_407 == 1)) return [3 /*break*/, 210];
                    return [4 /*yield*/, func904()];
                case 209:
                    _a.sent();
                    _a.label = 210;
                case 210:
                    if (!(var_407 == 2)) return [3 /*break*/, 212];
                    return [4 /*yield*/, func932()];
                case 211:
                    _a.sent();
                    _a.label = 212;
                case 212: return [4 /*yield*/, func076()];
                case 213:
                    _a.sent(); // マップ背景画像の読込
                    cnt3_30 = 0;
                    _a.label = 214;
                case 214:
                    if (!(cnt3_30 < 80)) return [3 /*break*/, 217];
                    return [4 /*yield*/, func339()];
                case 215:
                    _a.sent();
                    _a.label = 216;
                case 216:
                    ++cnt3_30;
                    return [3 /*break*/, 214];
                case 217: return [4 /*yield*/, func006()];
                case 218:
                    _a.sent();
                    return [2 /*return*/];
                case 219:
                    if (!(key_Z_on == 1 || key_A_on == 1)) return [3 /*break*/, 222];
                    if (!(var_406 == 0)) return [3 /*break*/, 222];
                    var_405 = 0;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 220:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 221:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 222:
                    if (!(key_X_on == 1)) return [3 /*break*/, 225];
                    var_405 = 0;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    return [4 /*yield*/, func051()];
                case 223:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 224:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 225: return [4 /*yield*/, func060()];
                case 226:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func061() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_53;
        return __generator(this, function (_a) {
            dbgprt(61);
            var_540 = dim(length1 = 10, length2 = 30, length3 = null, length4 = null);
            var_281 = var_66 - 4;
            if (var_281 < 0) {
                var_281 = 0;
            }
            var_282 = var_66 + 4;
            if (var_282 > var_33) {
                var_282 = var_33;
            }
            var_283 = var_67 - 4;
            if (var_283 < 0) {
                var_283 = 0;
            }
            var_284 = var_67 + 4;
            if (var_284 > var_34) {
                var_284 = var_34;
            }
            var_541 = 0;
            var_286 = 1;
            for (cnt1_53 = 0; cnt1_53 < var_97; ++cnt1_53) {
                var_542 = 0;
                if (var_83[var_286].Var0 == 36 || var_83[var_286].Var0 == 105 || var_83[var_286].Var0 == 106 || var_83[var_286].Var0 == 107 || var_83[var_286].Var0 == 108) {
                    if (var_83[var_286].Var31 == 5 && var_83[var_286].Var1 > var_281 && var_83[var_286].Var1 < var_282 && var_83[var_286].Var2 > var_283 && var_83[var_286].Var2 < var_284) {
                        var_542 = 1;
                    }
                    if (var_83[var_286].Var31 == 5 && var_83[var_286].Var10 == var_201 && var_83[var_286].Var10 != 14) {
                        var_542 = 1;
                    }
                    if (var_542 == 1) {
                        var_541++;
                        var_540[var_541][0] = var_83[var_286].Var0;
                        var_540[var_541][3] = var_83[var_286].Var3;
                        var_540[var_541][4] = var_83[var_286].Var39;
                        var_540[var_541][5] = var_83[var_286].Var16;
                    }
                    if (var_541 == 8) {
                        break;
                    }
                }
                var_286 = var_286 + 1;
            }
            return [2 /*return*/];
        });
    });
}
// ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
// これがアイテム追加の基本プログラムだと思われる。
function func062() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(62);
            var_224 = var_224 + 1;
            var_233[var_224].Var0 = 602; // アイテム「ネアポリスのピッツァ」(belongings_item_list = 602)を追加
            return [2 /*return*/];
        });
    });
}
// ダンジョン内の階段機能
function func063() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(63);
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(12, 37);
            if (var_262 == 0) {
                gcopy(12, 0, 0, 113, 53);
            }
            if (var_262 == 1) {
                gcopy(12, 0, 0, 203, 113);
            }
            if (var_262 == 0) {
                color(255, 255, 255);
                line(15, 39, 120, 39);
                line(15, 86, 120, 86);
                line(14, 40, 14, 84);
                line(122, 40, 122, 84);
                pset(15, 40);
                pset(121, 40);
                pset(15, 85);
                pset(121, 85);
            }
            if (var_262 == 1) {
                color(255, 255, 255);
                line(15, 39, 210, 39);
                line(15, 146, 210, 146);
                line(14, 40, 14, 144);
                line(212, 40, 212, 144);
                pset(15, 40);
                pset(211, 40);
                pset(15, 145);
                pset(211, 145);
            }
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            color(255, 255, 255);
            pos(33, 47);
            if (var_262 == 0) {
                if (var_73[var_66][var_67] == 1) {
                    var_543 = 0;
                    // No = 1 なので、ホテルの外
                    if (dangeon_number == 1 && current_floor == 12) {
                        var_543 = 1;
                    }
                    if (dangeon_number == 2 && current_floor == 30) {
                        var_543 = 1;
                    }
                    // No = 3 なので、ディアボロの試練
                    if (dangeon_number == 3 && current_floor == 99) {
                        var_543 = 1;
                    }
                    if (dangeon_number == 5 && current_floor == var_20) {
                        var_543 = 1;
                    }
                    if (var_543 == 0) {
                        mes("降りる");
                    }
                    if (var_543 == 1) {
                        mes("のぼる");
                    }
                    mes("そのまま");
                }
                if (var_73[var_66][var_67] == 2) {
                    mes("のぼる");
                    mes("そのまま");
                }
            }
            color(255, 255, 255);
            font("MS ゴシック", 16, 1);
            pos(var_245, var_246);
            mes(">");
            pos(var_245 + 1, var_246);
            mes(">");
            pos(var_245 + 2, var_246);
            mes(">");
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return [2 /*return*/];
        });
    });
}
// 足元確認呼び出し
function func064() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(64);
                    var_544 = 0;
                    if (!(dangeon_number == 0 && var_66 == 15 && var_67 == 21)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func065()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    if (!(dangeon_number == 0 && var_404 >= 1 && var_66 == 17 && var_67 == 9)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func826()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    if (!(var_77[var_66][var_67] > 0)) return [3 /*break*/, 7];
                    item_page_number = 3;
                    Y_axis_item_position = 45;
                    var_225 = 0;
                    open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    return [4 /*yield*/, func478()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, func461()];
                case 6:
                    _a.sent(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return [2 /*return*/];
                case 7:
                    if (!(var_80[var_66][var_67] > 0)) return [3 /*break*/, 12];
                    var_544 = 1;
                    var_343 = 1;
                    var_545 = 1;
                    return [4 /*yield*/, func541()];
                case 8:
                    _a.sent();
                    var_545 = 0;
                    if (!(var_382 == 1)) return [3 /*break*/, 10];
                    var_382 = 0;
                    return [4 /*yield*/, func009()];
                case 9:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 10:
                    var_217 = 1;
                    return [4 /*yield*/, func019()];
                case 11:
                    _a.sent(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return [2 /*return*/];
                case 12:
                    if (!(var_73[var_66][var_67] >= 1)) return [3 /*break*/, 14];
                    var_544 = 1;
                    var_405 = 1;
                    var_245 = 19;
                    var_246 = 45;
                    var_406 = 1;
                    return [4 /*yield*/, func060()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
                case 14:
                    if (!(var_544 == 0)) return [3 /*break*/, 16];
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "特に何も無いようだ";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16: return [4 /*yield*/, func009()];
                case 17:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
            }
        });
    });
}
function func065() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(65);
                    return [4 /*yield*/, func066()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 亀の倉庫のジッパー関連機能
function func066() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(66);
                    if (!(var_224 == 0)) return [3 /*break*/, 3];
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "足元にジッパーが付いている。";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 2:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 3:
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "持ち物全てをジッパーに捨てますか？";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 5:
                    _a.sent(); // キー入力による選択処理
                    return [4 /*yield*/, func051()];
                case 6:
                    _a.sent();
                    var_245 = 19;
                    var_246 = 45;
                    var_546 = 1;
                    var_547 = 1;
                    var_548 = 1;
                    return [4 /*yield*/, func839()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 亀のジッパーでアイテムを捨てる動作関数
function func067() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_54, cnt2_18, cnt1_55, cnt2_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(67);
                    var_549 = var_550;
                    var_551 = 0;
                    var_552 = 1;
                    cnt1_54 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_54 < 20)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func426()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func427()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func428()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, func429()];
                case 5:
                    _a.sent();
                    if (!(var_233[var_552].Var0 != 0 && var_552 != var_553 && var_552 != var_554 && var_552 != var_555 && var_552 != var_556)) return [3 /*break*/, 8];
                    belongings_item_list = var_233[var_552].Var0;
                    return [4 /*yield*/, func492()];
                case 6:
                    _a.sent(); // アイテムリスト呼び出し
                    var_550 = var_550 + buying_price;
                    var_225 = var_552;
                    return [4 /*yield*/, func433()];
                case 7:
                    _a.sent(); // アイテム配列の "数" 増減？関数
                    var_551 = 1;
                    cnt1_54 = -1;
                    return [3 /*break*/, 9];
                case 8:
                    var_552++;
                    _a.label = 9;
                case 9:
                    ++cnt1_54;
                    return [3 /*break*/, 1];
                case 10:
                    if (!(var_551 == 0)) return [3 /*break*/, 17];
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "捨てられるものがない。";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 11:
                    _a.sent();
                    cnt2_18 = 0;
                    _a.label = 12;
                case 12:
                    if (!(cnt2_18 < 5)) return [3 /*break*/, 15];
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 14;
                case 14:
                    ++cnt2_18;
                    return [3 /*break*/, 12];
                case 15: return [4 /*yield*/, func009()];
                case 16:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
                case 17:
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "全て捨てた。";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 18:
                    _a.sent();
                    DSPLAY(audio_id = 148);
                    // 亀の倉庫 成長計算式
                    var_557 = 1;
                    cnt1_55 = 0;
                    _a.label = 19;
                case 19:
                    if (!(cnt1_55 < 15)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func337()];
                case 20:
                    _a.sent(); // メッセージ関係呼び出し
                    var_557++;
                    _a.label = 21;
                case 21:
                    ++cnt1_55;
                    return [3 /*break*/, 19];
                case 22:
                    var_557 = 0;
                    if (var_550 > 999999) {
                        var_550 = 999999;
                    }
                    var_558 = 0;
                    // Var_559は亀の成長レベル(拡張レベル)、var_550は投資した栄養の合計
                    if (var_559 == 0 && var_550 >= 5000) {
                        var_559 = 1;
                        var_558 = 1;
                    }
                    if (var_559 == 1 && var_550 >= 10000) {
                        var_559 = 2;
                        var_558 = 1;
                    }
                    if (var_559 == 2 && var_550 >= 20000) {
                        var_559 = 3;
                        var_558 = 1;
                    }
                    if (var_559 == 3 && var_550 >= 40000) {
                        var_559 = 4;
                        var_558 = 1;
                    }
                    if (!(var_558 == 1)) return [3 /*break*/, 40];
                    return [4 /*yield*/, func293()];
                case 23:
                    _a.sent();
                    var_560 = 1;
                    var_561 = 5;
                    var_562 = 5;
                    if (!(var_559 == 0)) return [3 /*break*/, 25];
                    return [4 /*yield*/, func288()];
                case 24:
                    _a.sent();
                    _a.label = 25;
                case 25:
                    if (!(var_559 == 1)) return [3 /*break*/, 27];
                    return [4 /*yield*/, func289()];
                case 26:
                    _a.sent();
                    _a.label = 27;
                case 27:
                    if (!(var_559 == 2)) return [3 /*break*/, 29];
                    return [4 /*yield*/, func290()];
                case 28:
                    _a.sent();
                    _a.label = 29;
                case 29:
                    if (!(var_559 == 3)) return [3 /*break*/, 31];
                    return [4 /*yield*/, func291()];
                case 30:
                    _a.sent();
                    _a.label = 31;
                case 31:
                    if (!(var_559 == 4)) return [3 /*break*/, 33];
                    return [4 /*yield*/, func292()];
                case 32:
                    _a.sent();
                    _a.label = 33;
                case 33: return [4 /*yield*/, func248()];
                case 34:
                    _a.sent();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "亀はアイテムを養分として";
                    comments_row2a = "成長したようだ。";
                    if (var_559 == 4) {
                        comments_row1a = "亀はアイテムを養分として";
                        comments_row2a = "最大まで成長したようだ。";
                    }
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 35:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 36:
                    _a.sent();
                    cnt2_19 = 0;
                    _a.label = 37;
                case 37:
                    if (!(cnt2_19 < 5)) return [3 /*break*/, 40];
                    return [4 /*yield*/, func337()];
                case 38:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 39;
                case 39:
                    ++cnt2_19;
                    return [3 /*break*/, 37];
                case 40: return [4 /*yield*/, func009()];
                case 41:
                    _a.sent(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return [2 /*return*/];
            }
        });
    });
}
function func068() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(68);
            var_564 = 50;
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(20, 250 - var_564);
            gcopy(12, 0, 0, 310, 65 + var_564);
            color(255, 255, 255);
            line(23, 252 - var_564, 325, 252 - var_564);
            line(23, 312, 325, 312);
            line(22, 253 - var_564, 22, 310);
            line(327, 253 - var_564, 327, 310);
            pset(23, 253 - var_564);
            pset(326, 253 - var_564);
            pset(23, 311);
            pset(326, 311);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            font("ＭＳ Ｐゴシック", 18, 1);
            pos(40, 255);
            color(255, 255, 255);
            mes("");
            mes("精神力");
            mes("最深階");
            pos(110, 255);
            color(255, 255, 255);
            mes("");
            mes("" + var_565 + "/" + var_566);
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1) {
                mes("" + dangeon1_floor + "階");
            }
            // No = 2 なので、レクイエムの大迷宮
            if (dangeon_number == 2) {
                mes("" + dangeon2_floor + "階");
            }
            // No = 3 なので、ディアボロの試練
            if (dangeon_number == 3) {
                mes("" + dangeon3_floor + "階");
            }
            // No = 4 なので、一巡後の世界
            if (dangeon_number == 4) {
                mes("" + dangeon4_floor + "階");
            }
            if (dangeon_number == 5) {
                mes("" + dangeon5_floor + "階");
            }
            if (dangeon_number != 1 && dangeon_number != 2 && dangeon_number != 3 && dangeon_number != 4 && dangeon_number != 5) {
                mes("- 階");
            }
            pos(175, 255);
            color(255, 255, 255);
            mes("");
            mes("満腹度");
            mes("経験値");
            pos(255, 255);
            color(255, 255, 255);
            mes("");
            mes("" + var_350 + "/" + var_567);
            mes(var_568);
            return [2 /*return*/];
        });
    });
}
// 現在装備しているdisc表示欄の設定？
function func069() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_56, cnt1_57;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(69);
                    var_569 = 0;
                    if (!(var_410 != 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func429()];
                case 1:
                    _a.sent();
                    var_569 = var_233[var_556].Var3;
                    _a.label = 2;
                case 2:
                    if (!(var_357 != 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func426()];
                case 3:
                    _a.sent();
                    var_570 = var_233[var_553].Var13;
                    _a.label = 4;
                case 4:
                    if (!(var_358 != 0)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func427()];
                case 5:
                    _a.sent();
                    var_571 = var_233[var_554].Var13;
                    _a.label = 6;
                case 6:
                    if (!(var_215 != 0)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func428()];
                case 7:
                    _a.sent();
                    var_572 = var_233[var_555].Var13;
                    _a.label = 8;
                case 8:
                    var_573 = 15;
                    var_574 = 45;
                    for (cnt1_56 = 0; cnt1_56 < 4; ++cnt1_56) {
                        color(255, 255, 255);
                        line(23 + var_573, 252 - var_574, 85 + var_573, 252 - var_574);
                        line(23 + var_573, 312 - var_574, 85 + var_573, 312 - var_574);
                        line(22 + var_573, 253 - var_574, 22 + var_573, 310 - var_574);
                        line(87 + var_573, 253 - var_574, 87 + var_573, 310 - var_574);
                        pset(23 + var_573, 253 - var_574);
                        pset(86 + var_573, 253 - var_574);
                        pset(23 + var_573, 311 - var_574);
                        pset(86 + var_573, 311 - var_574);
                        var_573 = var_573 + 70;
                    }
                    var_573 = 15;
                    var_574 = 45;
                    cnt1_57 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_57 < 4)) return [3 /*break*/, 12];
                    font("ＭＳ Ｐゴシック", 18, 1);
                    color(255, 255, 255);
                    var_575 = 0;
                    if (cnt1_57 == 0) {
                        var_575 = var_357;
                        pos(35 + var_573, 256 - var_574);
                        color(255, 255, 0);
                        mes("攻撃");
                    }
                    if (cnt1_57 == 1) {
                        var_575 = var_358;
                        pos(35 + var_573, 256 - var_574);
                        color(255, 180, 90);
                        mes("防御");
                    }
                    if (cnt1_57 == 2) {
                        var_575 = var_215;
                        pos(35 + var_573, 256 - var_574);
                        color(240, 0, 240);
                        mes("能力");
                    }
                    if (cnt1_57 == 3) {
                        var_575 = var_410;
                        pos(35 + var_573, 256 - var_574);
                        color(225, 195, 145);
                        mes("射撃");
                    }
                    return [4 /*yield*/, func070()];
                case 10:
                    _a.sent();
                    if (var_575 != 0) {
                        pos(23 + var_573 + 10, 250 + 20 - var_574);
                        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                        if (var_575 < 400) {
                            if (cnt1_57 == 0) {
                                if (var_570 == 0) {
                                    var_576 = 11;
                                }
                                if (var_570 == 1) {
                                    var_576 = 1;
                                }
                                if (var_570 == 2) {
                                    var_576 = 16;
                                }
                                if (var_570 == 3) {
                                    var_576 = 29;
                                }
                            }
                            if (cnt1_57 == 1) {
                                if (var_571 == 0) {
                                    var_576 = 11;
                                }
                                if (var_571 == 1) {
                                    var_576 = 1;
                                }
                                if (var_571 == 2) {
                                    var_576 = 16;
                                }
                                if (var_571 == 3) {
                                    var_576 = 29;
                                }
                            }
                            if (cnt1_57 == 2) {
                                if (var_572 == 0) {
                                    var_576 = 11;
                                }
                                if (var_572 == 1) {
                                    var_576 = 1;
                                }
                                if (var_572 == 2) {
                                    var_576 = 16;
                                }
                                if (var_572 == 3) {
                                    var_576 = 29;
                                }
                            }
                        }
                        gcopy(var_576, var_577, var_578, 40, 40);
                    }
                    font("ＭＳ Ｐゴシック", 18, 1);
                    var_579 = 0;
                    if (cnt1_57 == 0 && var_580 < 10) {
                        var_579 = 5;
                    }
                    if (cnt1_57 == 1 && var_581 < 10) {
                        var_579 = 5;
                    }
                    if (cnt1_57 == 3 && var_569 < 10) {
                        var_579 = 5;
                    }
                    if (cnt1_57 == 0 && var_580 > 99) {
                        var_579 = -10;
                    }
                    if (cnt1_57 == 1 && var_581 > 99) {
                        var_579 = -10;
                    }
                    color(1, 1, 1);
                    pos(35 + var_573 + 30 + 1 + var_579, 253 - var_574 + 40);
                    if (cnt1_57 == 0) {
                        mes(var_580);
                    }
                    if (cnt1_57 == 1) {
                        mes(var_581);
                    }
                    if (cnt1_57 == 3 && var_569 != 0) {
                        mes(var_569);
                    }
                    pos(35 + var_573 + 30 - 1 + var_579, 253 - var_574 + 40);
                    if (cnt1_57 == 0) {
                        mes(var_580);
                    }
                    if (cnt1_57 == 1) {
                        mes(var_581);
                    }
                    if (cnt1_57 == 3 && var_569 != 0) {
                        mes(var_569);
                    }
                    pos(35 + var_573 + 30 + var_579, 253 - var_574 + 40 + 1);
                    if (cnt1_57 == 0) {
                        mes(var_580);
                    }
                    if (cnt1_57 == 1) {
                        mes(var_581);
                    }
                    if (cnt1_57 == 3 && var_569 != 0) {
                        mes(var_569);
                    }
                    pos(35 + var_573 + 30 + var_579, 253 - var_574 + 40 - 1);
                    if (cnt1_57 == 0) {
                        mes(var_580);
                    }
                    if (cnt1_57 == 1) {
                        mes(var_581);
                    }
                    if (cnt1_57 == 3 && var_569 != 0) {
                        mes(var_569);
                    }
                    color(0, 255, 0);
                    pos(35 + var_573 + 30 + var_579, 253 - var_574 + 40);
                    if (cnt1_57 == 0) {
                        mes(var_580);
                    }
                    if (cnt1_57 == 1) {
                        mes(var_581);
                    }
                    if (cnt1_57 == 3 && var_569 != 0) {
                        mes(var_569);
                    }
                    var_573 = var_573 + 70;
                    _a.label = 11;
                case 11:
                    ++cnt1_57;
                    return [3 /*break*/, 9];
                case 12: return [2 /*return*/];
            }
        });
    });
}
function func070() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(70);
            var_576 = 11;
            if (var_575 == 100) {
                var_577 = 80;
                var_578 = 200;
            }
            if (var_575 == 101) {
                var_577 = 80;
                var_578 = 160;
            }
            if (var_575 == 102) {
                var_577 = 80;
                var_578 = 120;
            }
            if (var_575 == 103) {
                var_577 = 80;
                var_578 = 80;
            }
            if (var_575 == 104) {
                var_577 = 80;
                var_578 = 240;
            }
            if (var_575 == 105) {
                var_577 = 80;
                var_578 = 360;
            }
            if (var_575 == 106) {
                var_577 = 80;
                var_578 = 320;
            }
            if (var_575 == 107) {
                var_577 = 80;
                var_578 = 280;
            }
            if (var_575 == 108 || var_575 == 110) {
                var_577 = 80;
                var_578 = 440;
            }
            if (var_575 == 109) {
                var_577 = 80;
                var_578 = 480;
            }
            if (var_575 == 111) {
                var_577 = 80;
                var_578 = 520;
            }
            if (var_575 == 112) {
                var_577 = 80;
                var_578 = 560;
            }
            if (var_575 == 113) {
                var_577 = 80;
                var_578 = 600;
            }
            if (var_575 == 114) {
                var_577 = 80;
                var_578 = 640;
            }
            if (var_575 == 115) {
                var_577 = 80;
                var_578 = 680;
            }
            if (var_575 == 116) {
                var_577 = 560;
                var_578 = 720;
            }
            if (var_575 == 117) {
                var_577 = 80;
                var_578 = 880;
            }
            if (var_575 == 118) {
                var_577 = 80;
                var_578 = 920;
            }
            if (var_575 == 119) {
                var_577 = 80;
                var_578 = 1000;
            }
            if (var_575 == 120) {
                var_577 = 80;
                var_578 = 1040;
            }
            if (var_575 == 121) {
                var_577 = 80;
                var_578 = 1080;
            }
            if (var_575 == 122) {
                var_577 = 1040;
                var_578 = 120;
            }
            if (var_575 == 123) {
                var_577 = 40;
                var_578 = 1280;
            }
            if (var_575 == 124) {
                var_577 = 80;
                var_578 = 1320;
            }
            if (var_575 == 200) {
                var_577 = 1040;
                var_578 = 80;
            }
            if (var_575 == 201) {
                var_577 = 1000;
                var_578 = 1360;
            }
            if (var_575 == 202) {
                var_577 = 1240;
                var_578 = 120;
            }
            if (var_575 == 203) {
                var_577 = 80;
                var_578 = 1440;
            }
            if (var_575 == 204) {
                var_577 = 480;
                var_578 = 2000;
            }
            if (var_575 == 205) {
                var_577 = 80;
                var_578 = 1200;
            }
            if (var_575 == 206) {
                var_577 = 1160;
                var_578 = 120;
            }
            if (var_575 == 207) {
                var_577 = 80;
                var_578 = 1240;
            }
            if (var_575 == 300) {
                var_577 = 1040;
                var_578 = 160;
            }
            if (var_575 == 301) {
                var_577 = 0;
                var_578 = 1920;
            }
            if (var_575 == 302) {
                var_577 = 1120;
                var_578 = 160;
            }
            if (var_575 == 303) {
                var_577 = 1160;
                var_578 = 160;
            }
            if (var_575 == 304) {
                var_577 = 80;
                var_578 = 1400;
            }
            if (var_575 == 305) {
                var_577 = 80;
                var_578 = 2160;
            }
            if (var_575 == 306) {
                var_577 = 1040;
                var_578 = 200;
            }
            if (var_575 == 307) {
                var_577 = 80;
                var_578 = 1520;
            }
            if (var_575 == 308) {
                var_577 = 0;
                var_578 = 1880;
            }
            if (var_575 == 309) {
                var_577 = 80;
                var_578 = 2040;
            }
            if (var_575 == 310) {
                var_577 = 1200;
                var_578 = 200;
            }
            if (var_575 == 311) {
                var_577 = 1120;
                var_578 = 80;
            }
            if (var_575 == 312) {
                var_577 = 480;
                var_578 = 1960;
            }
            if (var_575 == 313) {
                var_577 = 80;
                var_578 = 1560;
            }
            if (var_575 == 314) {
                var_577 = 1120;
                var_578 = 120;
            }
            if (var_575 == 315) {
                var_577 = 1160;
                var_578 = 240;
            }
            if (var_575 == 316) {
                var_577 = 1080;
                var_578 = 160;
            }
            if (var_575 == 317) {
                var_577 = 80;
                var_578 = 1640;
            }
            if (var_575 == 318) {
                var_577 = 80;
                var_578 = 1680;
            }
            if (var_575 == 319) {
                var_577 = 80;
                var_578 = 1720;
            }
            if (var_575 == 320) {
                var_577 = 1080;
                var_578 = 200;
            }
            if (var_575 == 321) {
                var_577 = 1160;
                var_578 = 200;
            }
            if (var_575 == 393) {
                var_577 = 1200;
                var_578 = 120;
            }
            if (var_575 == 394) {
                var_577 = 80;
                var_578 = 760;
            }
            if (var_575 == 395) {
                var_577 = 1120;
                var_578 = 240;
            }
            if (var_575 == 396) {
                var_577 = 1080;
                var_578 = 120;
            }
            if (var_575 == 397) {
                var_577 = 80;
                var_578 = 1840;
            }
            if (var_575 == 398) {
                var_577 = 80;
                var_578 = 1600;
            }
            if (var_575 == 399) {
                var_577 = 80;
                var_578 = 1480;
            }
            if (var_575 == 400) {
                var_577 = 40;
                var_578 = 400;
                var_576 = 34;
            }
            if (var_575 == 401) {
                var_577 = 640;
                var_578 = 200;
                var_576 = 34;
            }
            if (var_575 == 402) {
                var_577 = 640;
                var_578 = 0;
                var_576 = 34;
            }
            if (var_575 == 403) {
                var_577 = 480;
                var_578 = 560;
                var_576 = 34;
            }
            if (var_575 == 404) {
                var_577 = 160;
                var_578 = 520;
                var_576 = 34;
            }
            if (var_575 == 405) {
                var_577 = 480;
                var_578 = 1040;
                var_576 = 21;
            }
            if (var_575 == 406) {
                var_577 = 480;
                var_578 = 1080;
                var_576 = 21;
            }
            if (var_575 == 407) {
                var_577 = 40;
                var_578 = 400;
                var_576 = 34;
            }
            if (var_575 == 408) {
                var_577 = 1000;
                var_578 = 440;
                var_576 = 3;
            }
            if (var_575 == 409) {
                var_577 = 480;
                var_578 = 520;
                var_576 = 6;
            }
            if (var_575 == 410) {
                var_577 = 320;
                var_578 = 1080;
                var_576 = 34;
            }
            if (var_575 == 411) {
                var_577 = 320;
                var_578 = 1120;
                var_576 = 34;
            }
            if (var_575 == 412) {
                var_577 = 720;
                var_578 = 520;
                var_576 = 3;
            }
            if (var_575 == 413) {
                var_577 = 960;
                var_578 = 1960;
                var_576 = 15;
            }
            if (var_575 == 414) {
                var_577 = 1480;
                var_578 = 1240;
                var_576 = 34;
            }
            return [2 /*return*/];
        });
    });
}
// 満腹度機能
function func071() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_58;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(71);
                    if (var_361 <= 3) {
                        DSPLAY(audio_id = 129);
                    }
                    var_240 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    if (var_361 == 1) {
                        comments_row1 = "お腹が減ってきた…";
                    }
                    if (var_361 == 2) {
                        comments_row1 = "ハラペコで目が回ってきた…";
                    }
                    if (var_361 == 3) {
                        comments_row1 = "だめだ！　もう倒れそうだ！";
                    }
                    if (var_361 == 4) {
                        comments_row1 = "早く…　何か食べないと…";
                    }
                    if (var_361 == 5) {
                        comments_row1 = "飢え死にしてしまう！";
                    }
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt1_58 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_58 < 10)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt1_58;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// ダンジョンに長居し過ぎた際の神砂嵐
function func072() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_20, cnt1_59, cnt1_60, cnt1_61, cnt2_21, cnt2_22, cnt2_23, cnt2_24;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(72);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "神砂嵐だ！！";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    if (!(var_112 == 1000)) return [3 /*break*/, 8];
                    cnt2_20 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt2_20 < 10)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 4;
                case 4:
                    ++cnt2_20;
                    return [3 /*break*/, 2];
                case 5:
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "真空状態の圧倒的破壊空間は";
                    comments_row2a = "まさに歯車的砂嵐の小宇宙！";
                    return [4 /*yield*/, func050()];
                case 6:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    var_582 = 1;
                    for (cnt1_59 = 0; cnt1_59 < var_97; ++cnt1_59) {
                        var_83[var_582].Var8 = 1;
                        var_83[var_582].Var12 = 0;
                        var_582 = var_582 + 1;
                    }
                    return [4 /*yield*/, func073()];
                case 9:
                    _a.sent();
                    if (var_112 == 700 || var_112 == 1000) {
                        var_389 = 2;
                        if (var_144 != 0) {
                            var_389 = 0;
                        }
                    }
                    if (var_112 == 850 && var_144 == 0) {
                        var_583 = 1;
                    }
                    var_271 = 1;
                    var_584 = 1;
                    if (var_112 == 700) {
                        DSPLAY(audio_id = 144);
                    }
                    if (var_112 == 850) {
                        DSPLAY(audio_id = 145);
                    }
                    if (var_112 == 1000) {
                        DSPLAY(audio_id = 146);
                    }
                    cnt1_60 = 0;
                    _a.label = 10;
                case 10:
                    if (!(cnt1_60 < 15)) return [3 /*break*/, 16];
                    var_585 = 1;
                    if (var_112 == 1000) {
                        var_199 = 2;
                    }
                    return [4 /*yield*/, func337()];
                case 11:
                    _a.sent(); // メッセージ関係呼び出し
                    var_585 = 0;
                    if (var_112 == 1000) {
                        var_199 = 4;
                    }
                    return [4 /*yield*/, func337()];
                case 12:
                    _a.sent(); // メッセージ関係呼び出し
                    var_585 = 1;
                    if (var_112 == 1000) {
                        var_199 = 8;
                    }
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent(); // メッセージ関係呼び出し
                    var_585 = 0;
                    if (var_112 == 1000) {
                        var_199 = 6;
                    }
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 15;
                case 15:
                    ++cnt1_60;
                    return [3 /*break*/, 10];
                case 16:
                    var_271 = 0;
                    var_584 = 0;
                    var_389 = 0;
                    if (var_112 == 1000) {
                        var_389 = 2;
                        var_199 = 2;
                        if (var_144 != 0) {
                            var_389 = 0;
                        }
                    }
                    var_583 = 0;
                    var_582 = 1;
                    for (cnt1_61 = 0; cnt1_61 < var_97; ++cnt1_61) {
                        var_83[var_582].Var8 = 0;
                        var_582 = var_582 + 1;
                    }
                    if (!(var_112 == 700 || var_112 == 850)) return [3 /*break*/, 22];
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    if (var_112 == 700) {
                        comments_row1a = "…風は収まったようだ";
                    }
                    if (var_112 == 850) {
                        comments_row1a = "…さっきより強いぞ";
                    }
                    comments_row2a = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 18:
                    _a.sent();
                    cnt2_21 = 0;
                    _a.label = 19;
                case 19:
                    if (!(cnt2_21 < 10)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func337()];
                case 20:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 21;
                case 21:
                    ++cnt2_21;
                    return [3 /*break*/, 19];
                case 22:
                    if (!(var_112 == 1000)) return [3 /*break*/, 34];
                    cnt2_22 = 0;
                    _a.label = 23;
                case 23:
                    if (!(cnt2_22 < 20)) return [3 /*break*/, 26];
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 25;
                case 25:
                    ++cnt2_22;
                    return [3 /*break*/, 23];
                case 26:
                    var_586 = 1;
                    var_271 = 1;
                    cnt2_23 = 0;
                    _a.label = 27;
                case 27:
                    if (!(cnt2_23 < 8)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent(); // メッセージ関係呼び出し
                    var_586 = var_586 + 1;
                    if (cnt2_23 == 4 || cnt2_23 == 6 || cnt2_23 == 8) {
                        var_585 = 3;
                    }
                    if (cnt2_23 == 5 || cnt2_23 == 7 || cnt2_23 == 9) {
                        var_585 = 0;
                    }
                    if (var_586 == 4) {
                        DSPLAY(audio_id = 138);
                    }
                    _a.label = 29;
                case 29:
                    ++cnt2_23;
                    return [3 /*break*/, 27];
                case 30:
                    var_585 = 0;
                    var_389 = 0;
                    var_211 = 0;
                    var_356 = 210;
                    cnt2_24 = 0;
                    _a.label = 31;
                case 31:
                    if (!(cnt2_24 < 10)) return [3 /*break*/, 34];
                    return [4 /*yield*/, func337()];
                case 32:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 33;
                case 33:
                    ++cnt2_24;
                    return [3 /*break*/, 31];
                case 34:
                    if (var_112 >= 710) {
                        var_101 = 1;
                        var_102 = 1;
                        var_103 = 1;
                    }
                    return [4 /*yield*/, func331()];
                case 35:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    return [2 /*return*/];
            }
        });
    });
}
function func073() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_62;
        return __generator(this, function (_a) {
            dbgprt(73);
            var_587 = dim(length1 = 110, length2 = 6, length3 = null, length4 = null);
            for (cnt1_62 = 0; cnt1_62 < 100; ++cnt1_62) {
                if (var_112 == 700) {
                    var_588 = rnd(1);
                }
                if (var_112 == 850) {
                    var_588 = rnd(2);
                }
                if (var_112 == 1000) {
                    var_588 = rnd(3);
                }
                var_589 = rnd(1000);
                var_590 = rnd(400);
                var_591 = rnd(4);
                var_592 = rnd(30);
                var_593 = rnd(10);
                var_587[cnt1_62][0] = var_588;
                var_587[cnt1_62][1] = 360 + var_589;
                var_587[cnt1_62][2] = 100 - var_590;
                var_587[cnt1_62][3] = var_591;
                var_587[cnt1_62][4] = var_592 + 20;
                var_587[cnt1_62][5] = var_593 + 5;
            }
            return [2 /*return*/];
        });
    });
}
// モンスターハウス設定
function func074() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_63, cnt1_64;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(74);
                    var_101 = 1;
                    return [4 /*yield*/, func331()];
                case 1:
                    _a.sent(); // 消費アイテムを使った時のエフェクト (正方形が重なってピンク色にピカピカ光る)
                    var_390 = 1;
                    for (cnt1_63 = 0; cnt1_63 < var_97; ++cnt1_63) {
                        var_83[var_390].Var12 = 0;
                        if (var_96 == 8 && var_83[var_390].Var10 == var_201 && var_83[var_390].Var31 != 5) {
                            var_83[var_390].Var17 = 1;
                        }
                        var_390 = var_390 + 1;
                    }
                    DSPLAY(audio_id = 150);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    if (!(var_96 == 1)) return [3 /*break*/, 3];
                    comments_row1 = "モンスターハウスだ！";
                    return [4 /*yield*/, func132()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if (!(var_96 == 2)) return [3 /*break*/, 5];
                    comments_row1 = "ﾊﾞｯﾄﾞ･ｶﾝﾊﾟﾆｰ･ﾊｳｽ だ！";
                    return [4 /*yield*/, func130()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    if (!(var_96 == 3)) return [3 /*break*/, 7];
                    comments_row1 = "ﾊｲｳｪｲｽﾀｰ･ﾙｰﾑ だ！";
                    return [4 /*yield*/, func131()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    if (!(var_96 == 4)) return [3 /*break*/, 9];
                    comments_row1 = "吸血鬼ハウスだ！";
                    return [4 /*yield*/, func132()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    if (!(var_96 == 5)) return [3 /*break*/, 11];
                    comments_row1 = "スタンドハウスだ！";
                    return [4 /*yield*/, func132()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    if (!(var_96 == 6)) return [3 /*break*/, 13];
                    comments_row1 = "杜王町ハウスだ！";
                    return [4 /*yield*/, func129()];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    if (!(var_96 == 7)) return [3 /*break*/, 15];
                    comments_row1 = "水族館だ！";
                    return [4 /*yield*/, func133()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    if (!(var_96 == 8)) return [3 /*break*/, 17];
                    comments_row1 = "ファイトクラブだッ！";
                    return [4 /*yield*/, func134()];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17:
                    if (!(var_96 == 9)) return [3 /*break*/, 19];
                    comments_row1 = "西戸ハウスだ！";
                    return [4 /*yield*/, func132()];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 20:
                    _a.sent();
                    cnt1_64 = 0;
                    _a.label = 21;
                case 21:
                    if (!(cnt1_64 < 25)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 23;
                case 23:
                    ++cnt1_64;
                    return [3 /*break*/, 21];
                case 24:
                    var_96 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
// 特別な階層
function func075() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_65, cnt1_66;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(75);
                    var_271 = 1;
                    var_594 = 1;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    // No = 1 なので、ホテルの外
                    if (dangeon_number == 1 && current_floor == 12) {
                        comments_row1 = "注意せよ！ この階は";
                        comments_row2 = "「エンヤ婆」によって守られている！";
                    }
                    // No = 2 なので、レクイエムの大迷宮
                    if (dangeon_number == 2 && current_floor == 30) {
                        comments_row1 = "注意せよ！ この階は";
                        comments_row2 = "「ﾚｸｲｴﾑ･ｼﾞｮﾙﾉ」によって守られている！";
                    }
                    // No = 3 なので、ディアボロの試練
                    if (dangeon_number == 3 && current_floor == 99) {
                        comments_row1 = "注意せよ！ この階は";
                        comments_row2 = "「ウンガロ」によって守られている！";
                    }
                    if (dangeon_number == 5 && current_floor == var_20) {
                        comments_row1 = "注意せよ！ この階は";
                        comments_row2 = "「" + var_24 + "」によって守られている！";
                    }
                    if (var_94 == 1) {
                        comments_row1 = "注意せよ！ この階は";
                        comments_row2 = "「虹村形兆」によって守られている！";
                    }
                    if (var_94 == 2) {
                        comments_row1 = "注意せよ！ この階は";
                        comments_row2 = "「チリペッパー」によって守られている！";
                    }
                    if (var_94 == 3) {
                        comments_row1 = "注意せよ！ この階は";
                        comments_row2 = "「吉良吉影」によって守られている！";
                    }
                    if (var_94 == 4) {
                        comments_row1 = "注意せよ！ この階は";
                        comments_row2 = "「承太郎」によって守られている！";
                    }
                    if (var_94 == 5) {
                        comments_row1 = "注意せよ！ この階は";
                        comments_row2 = "「毒グモ」によって守られている！";
                    }
                    if (var_94 == 6) {
                        comments_row1 = "注意せよ！ この階は";
                        comments_row2 = "「サンタナ」によって守られている！";
                    }
                    if (var_94 == 7) {
                        comments_row1 = "広大な砂漠だ！";
                        comments_row2 = "";
                    }
                    if (var_94 == 8) {
                        comments_row1 = "幻覚の迷宮だ！";
                        comments_row2 = "";
                    }
                    if (var_94 == 9) {
                        comments_row1 = "注意せよ！ この階は";
                        comments_row2 = "「エンポリオ」によって守られている！";
                    }
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    DSPLAY(audio_id = 178);
                    cnt1_65 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_65 < 40)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent(); // メッセージ関係呼び出し
                    var_594 = var_594 + 1;
                    var_198 = 1;
                    var_300 = 0;
                    _a.label = 4;
                case 4:
                    ++cnt1_65;
                    return [3 /*break*/, 2];
                case 5:
                    var_271 = 0;
                    var_594 = 0;
                    cnt1_66 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt1_66 < 5)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 8;
                case 8:
                    ++cnt1_66;
                    return [3 /*break*/, 6];
                case 9: return [2 /*return*/];
            }
        });
    });
}
// マップ背景画像の読込
function func076() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(76);
                    redraw(2);
                    color(1, 1, 1);
                    boxf(left = 0, top1 = 0, right = 360, bottom = 360);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    pos(0, 100);
                    if (var_94 == 0) {
                        // No = 0 なので、拠点(ホテル、亀、)
                        if (dangeon_number == 0) {
                            if (var_595 == 0) {
                                gcopy(34, 640, 760, 340, 40);
                            }
                            if (var_595 == 1) {
                                gcopy(34, 640, 720, 340, 40);
                            }
                            if (var_595 == 3) {
                                gcopy(34, 640, 1200, 340, 40);
                            }
                        }
                        // No = 1 なので、ホテルの外
                        if (dangeon_number == 1) {
                            if (current_floor <= 2) {
                                gcopy(34, 640, 440, 340, 40);
                            }
                            if (current_floor >= 3 && current_floor <= 5) {
                                gcopy(34, 640, 480, 340, 40);
                            }
                            if (current_floor >= 6 && current_floor <= 8) {
                                gcopy(34, 640, 600, 340, 40);
                            }
                            if (current_floor >= 9 && current_floor <= 11) {
                                gcopy(34, 640, 640, 340, 40);
                            }
                            if (current_floor == 12) {
                                gcopy(34, 640, 400, 340, 40);
                            }
                        }
                        // No = 2 なので、レクイエムの大迷宮
                        if (dangeon_number == 2) {
                            if (current_floor != 30) {
                                gcopy(34, 640, 560, 340, 40);
                            }
                            if (current_floor == 30) {
                                gcopy(34, 640, 880, 340, 40);
                            }
                        }
                        // No = 3 なので、ディアボロの試練
                        if (dangeon_number == 3) {
                            if (current_floor != 99) {
                                gcopy(34, 640, 520, 340, 40);
                            }
                            if (current_floor == 99) {
                                gcopy(34, 640, 1160, 340, 40);
                            }
                        }
                        // No = 4 なので、一巡後の世界
                        if (dangeon_number == 4) {
                            gcopy(34, 640, 800, 340, 40);
                        }
                        if (dangeon_number == 5) {
                            if (current_floor != var_20) {
                                gcopy(34, 640, 1040, 340, 40);
                            }
                            if (current_floor == var_20) {
                                gcopy(34, 1000, 760, 340, 40);
                            }
                        }
                        if (dangeon_number == 99) {
                            gcopy(34, 640, 960, 340, 40);
                        }
                    }
                    if (var_94 == 1) {
                        gcopy(34, 640, 840, 340, 40);
                    }
                    if (var_94 == 2) {
                        gcopy(34, 640, 1000, 340, 40);
                    }
                    if (var_94 == 3) {
                        gcopy(34, 640, 680, 340, 40);
                    }
                    if (var_94 == 7) {
                        gcopy(34, 640, 1080, 340, 40);
                    }
                    if (var_94 == 8) {
                        gcopy(34, 640, 1120, 340, 40);
                    }
                    if (var_94 == 9) {
                        gcopy(34, 640, 920, 340, 40);
                    }
                    if (dangeon_number != 0 && dangeon_number != 99 && var_94 == 0) {
                        var_596 = Math.floor(current_floor / 100); // Math.floor は対象の値の小数点以下を切り捨て
                        var_597 = Math.floor((current_floor - var_596 * 100) / 10); // Math.floor は対象の値の小数点以下を切り捨て
                        var_598 = current_floor - var_596 * 100 - var_597 * 10;
                        var_596 = var_596 * 20 + 640;
                        var_597 = var_597 * 20 + 640;
                        var_598 = var_598 * 20 + 640;
                        if (var_597 == 640 && current_floor < 100) {
                            var_597 = 1600;
                        }
                        if (var_596 == 640) {
                            var_596 = 1600;
                        }
                        pos(90, 160);
                        if (current_floor >= 100) {
                            pos(70, 160);
                        }
                        gcopy(34, 880, 80, 80, 40);
                        pos(220, 160);
                        gcopy(34, 880, 120, 40, 40);
                        pos(150, 160);
                        gcopy(34, var_596, 80, 20, 40);
                        pos(170, 160);
                        gcopy(34, var_597, 80, 20, 40);
                        pos(190, 160);
                        if (var_597 == 400) {
                            pos(180, 160);
                        }
                        gcopy(34, var_598, 80, 20, 40);
                    }
                    if (!(var_10 >= 1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func338()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    redraw(1);
                    return [2 /*return*/];
            }
        });
    });
}
function func077() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(77);
            if (var_599 == 0) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 255);
                gcopy(8, 400, 350, 340, 340);
            }
            if (var_599 == 1) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                gcopy(8, 400, 350, 340, 340);
            }
            if (var_599 == 2) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
                gcopy(8, 400, 350, 340, 340);
            }
            if (var_599 == 3) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
                gcopy(8, 400, 350, 340, 340);
            }
            if (var_599 == 4) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 40);
                gcopy(8, 400, 350, 340, 340);
            }
            if (var_599 == 5) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 20);
                gcopy(8, 400, 350, 340, 340);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(0, 100);
            if (var_94 == 0) {
                // No = 0 なので、拠点(ホテル、亀、)
                if (dangeon_number == 0) {
                    if (var_595 == 0) {
                        gcopy(34, 640, 760, 340, 40);
                    }
                    if (var_595 == 1) {
                        gcopy(34, 640, 720, 340, 40);
                    }
                    if (var_595 == 3) {
                        gcopy(34, 640, 1200, 340, 40);
                    }
                }
                // No = 1 なので、ホテルの外
                if (dangeon_number == 1) {
                    if (current_floor <= 2) {
                        gcopy(34, 640, 440, 340, 40);
                    }
                    if (current_floor >= 3 && current_floor <= 5) {
                        gcopy(34, 640, 480, 340, 40);
                    }
                    if (current_floor >= 6 && current_floor <= 8) {
                        gcopy(34, 640, 600, 340, 40);
                    }
                    if (current_floor >= 9 && current_floor <= 11) {
                        gcopy(34, 640, 640, 340, 40);
                    }
                    if (current_floor == 12) {
                        gcopy(34, 640, 400, 340, 40);
                    }
                }
                // No = 2 なので、レクイエムの大迷宮
                if (dangeon_number == 2) {
                    if (current_floor != 30) {
                        gcopy(34, 640, 560, 340, 40);
                    }
                    if (current_floor == 30) {
                        gcopy(34, 640, 880, 340, 40);
                    }
                }
                // No = 3 なので、ディアボロの試練
                if (dangeon_number == 3) {
                    if (current_floor != 99) {
                        gcopy(34, 640, 520, 340, 40);
                    }
                    if (current_floor == 99) {
                        gcopy(34, 640, 1160, 340, 40);
                    }
                }
                // No = 4 なので、一巡後の世界
                if (dangeon_number == 4) {
                    gcopy(34, 640, 800, 340, 40);
                }
                if (dangeon_number == 5) {
                    if (current_floor != var_20) {
                        gcopy(34, 640, 1040, 340, 40);
                    }
                    if (current_floor == var_20) {
                        gcopy(34, 1000, 760, 340, 40);
                    }
                }
                if (dangeon_number == 99) {
                    gcopy(34, 640, 960, 340, 40);
                }
            }
            if (var_94 == 1) {
                gcopy(34, 640, 840, 340, 40);
            }
            if (var_94 == 2) {
                gcopy(34, 640, 1000, 340, 40);
            }
            if (var_94 == 3) {
                gcopy(34, 640, 680, 340, 40);
            }
            if (var_94 == 7) {
                gcopy(34, 640, 1080, 340, 40);
            }
            if (var_94 == 8) {
                gcopy(34, 640, 1120, 340, 40);
            }
            if (var_94 == 9) {
                gcopy(34, 640, 920, 340, 40);
            }
            if (dangeon_number != 0 && dangeon_number != 99 && var_94 == 0) {
                var_596 = Math.floor(current_floor / 100); // Math.floor は対象の値の小数点以下を切り捨て
                var_597 = Math.floor((current_floor - var_596 * 100) / 10); // Math.floor は対象の値の小数点以下を切り捨て
                var_598 = current_floor - var_596 * 100 - var_597 * 10;
                var_596 = var_596 * 20 + 640;
                var_597 = var_597 * 20 + 640;
                var_598 = var_598 * 20 + 640;
                if (var_597 == 640 && current_floor < 100) {
                    var_597 = 1600;
                }
                if (var_596 == 640) {
                    var_596 = 1600;
                }
                pos(90, 160);
                if (current_floor >= 100) {
                    pos(70, 160);
                }
                gcopy(34, 880, 80, 80, 40);
                pos(220, 160);
                gcopy(34, 880, 120, 40, 40);
                pos(150, 160);
                gcopy(34, var_596, 80, 20, 40);
                pos(170, 160);
                gcopy(34, var_597, 80, 20, 40);
                pos(190, 160);
                if (var_597 == 400) {
                    pos(180, 160);
                }
                gcopy(34, var_598, 80, 20, 40);
            }
            return [2 /*return*/];
        });
    });
}
function func078() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(78);
            if (var_373 == 1) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 255);
                gcopy(8, 400, 350, 340, 340);
            }
            if (var_373 == 2) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                gcopy(8, 400, 350, 340, 340);
            }
            if (var_373 == 3) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
                gcopy(8, 400, 350, 340, 340);
            }
            if (var_373 == 4) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 110);
                gcopy(8, 400, 350, 340, 340);
            }
            if (var_373 == 5) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
                gcopy(8, 400, 350, 340, 340);
            }
            if (var_373 == 6) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(8, 400, 350, 340, 340);
            }
            if (var_600 >= 1) {
                color(255, 255, 255);
                font("ＭＳ 明朝", 36, 1);
                pos(160, 150);
                mes("完");
            }
            return [2 /*return*/];
        });
    });
}
// ドッピオ化した際の設定
function func079() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt3_31;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(79);
                    return [4 /*yield*/, func080()];
                case 1:
                    _a.sent(); // 各キー入力確認
                    conf_keyon = getkey(81); // キーQ 入力確認
                    if (!(conf_keyon == 1 && key_Shift_on == 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func236()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
                case 3:
                    if (!(var_139 == 10 || var_139 == 20 || var_139 == 30 || var_139 == 40)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func094()];
                case 4:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    if (var_139 == 10) {
                        if (var_601 == 0) {
                            comments_row1 = "「このヘアースタイルが";
                            comments_row2 = "　チンケな髪だとォ？」";
                        }
                        if (var_601 == 1) {
                            comments_row1 = "「このヘアースタイルが";
                            comments_row2 = "　サザエさんみてェーだとォ？」";
                        }
                        if (var_601 == 2) {
                            comments_row1 = "「このヘアースタイルが";
                            comments_row2 = "　くだらねーだとォ？」";
                        }
                        if (var_601 == 3) {
                            comments_row1 = "「このヘアースタイルが";
                            comments_row2 = "　古くさいセンスだとォ？」";
                        }
                    }
                    if (var_139 == 20) {
                        comments_row1 = "「たしかに聞いたぞ";
                        comments_row2 = "　コラ―――――――ッ！」";
                    }
                    if (var_139 == 30) {
                        comments_row1 = "「どこ隠れやがったあ――――";
                        comments_row2 = "　スッタコがぁ～～～～ッ」";
                    }
                    if (var_139 == 40) {
                        comments_row1 = "「けなすやつあ　ゆるさねえ～～～～";
                        comments_row2 = "　何者ﾝだろーと黙っちゃあいねえッ！」";
                    }
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(var_144 == 10 || var_144 == 15 || var_144 == 20 || var_144 == 25 || var_144 == 30 || var_144 == 35 || var_144 == 40 || var_144 == 45)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func094()];
                case 7:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    if (var_144 == 10) {
                        comments_row1 = "ﾄﾞｯﾋﾟｵ「今 ボスから電話があったんだ…";
                        comments_row2 = "　　　　僕の任務は…」";
                    }
                    if (var_144 == 15) {
                        comments_row1 = "ﾄﾞｯﾋﾟｵ「えーと…　なんだっけ…」";
                        comments_row2 = "";
                    }
                    if (var_144 == 20) {
                        comments_row1 = "ﾄﾞｯﾋﾟｵ「…やばい…！ このままここに";
                        comments_row2 = "　　　　ボケッとしてるのはやばいぞッ！」";
                    }
                    if (var_144 == 25) {
                        comments_row1 = "ﾄﾞｯﾋﾟｵ「すぐにも襲われそうだッ！」";
                        comments_row2 = "";
                    }
                    if (var_144 == 30) {
                        comments_row1 = "ﾄﾞｯﾋﾟｵ「ど…どこにいるんですか？";
                        comments_row2 = "　　　　ボス！！」";
                    }
                    if (var_144 == 35) {
                        comments_row1 = "ﾄﾞｯﾋﾟｵ「オレの近くにいるのですかッ？」";
                        comments_row2 = "";
                    }
                    if (var_144 == 40) {
                        comments_row1 = "ﾄﾞｯﾋﾟｵ「いるならすぐに来て下さい！」";
                        comments_row2 = "";
                    }
                    if (var_144 == 45) {
                        comments_row1 = "ﾄﾞｯﾋﾟｵ「足に力が入らないんです…」";
                        comments_row2 = "";
                    }
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    if (var_201 == 14) {
                        if (var_199 == 1) {
                            var_199 = 4;
                        }
                        if (var_199 == 7) {
                            var_199 = 8;
                        }
                        if (var_199 == 9) {
                            var_199 = 6;
                        }
                        if (var_199 == 3) {
                            var_199 = 2;
                        }
                        if (var_199 == 0) {
                            var_199 = 2;
                        }
                    }
                    var_423 = var_66;
                    var_424 = var_67;
                    var_425 = var_66 - 1;
                    if (var_425 < 0) {
                        var_425 = 0;
                    }
                    var_426 = var_66 + 1;
                    if (var_426 > var_33) {
                        var_426 = var_33;
                    }
                    var_427 = var_67 + 1;
                    if (var_427 > var_34) {
                        var_427 = var_34;
                    }
                    var_428 = var_67 - 1;
                    if (var_428 < 0) {
                        var_428 = 0;
                    }
                    if (!(var_144 == 0)) return [3 /*break*/, 25];
                    if (!(var_82[var_425][var_424] != 0 && var_71[var_425][var_424] != 0)) return [3 /*break*/, 11];
                    var_199 = 4;
                    var_243 = 1;
                    return [4 /*yield*/, func635()];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
                case 11:
                    if (!(var_82[var_426][var_424] != 0 && var_71[var_426][var_424] != 0)) return [3 /*break*/, 13];
                    var_199 = 6;
                    var_243 = 1;
                    return [4 /*yield*/, func635()];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
                case 13:
                    if (!(var_82[var_423][var_427] != 0 && var_71[var_423][var_427] != 0)) return [3 /*break*/, 15];
                    var_199 = 2;
                    var_243 = 1;
                    return [4 /*yield*/, func635()];
                case 14:
                    _a.sent();
                    return [2 /*return*/];
                case 15:
                    if (!(var_82[var_423][var_428] != 0 && var_71[var_423][var_428] != 0)) return [3 /*break*/, 17];
                    var_199 = 8;
                    var_243 = 1;
                    return [4 /*yield*/, func635()];
                case 16:
                    _a.sent();
                    return [2 /*return*/];
                case 17:
                    if (!(var_82[var_425][var_427] != 0 && var_71[var_425][var_427] != 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_427] != 0)) return [3 /*break*/, 19];
                    var_199 = 1;
                    var_243 = 1;
                    return [4 /*yield*/, func635()];
                case 18:
                    _a.sent();
                    return [2 /*return*/];
                case 19:
                    if (!(var_82[var_426][var_427] != 0 && var_71[var_426][var_427] != 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_427] != 0)) return [3 /*break*/, 21];
                    var_199 = 3;
                    var_243 = 1;
                    return [4 /*yield*/, func635()];
                case 20:
                    _a.sent();
                    return [2 /*return*/];
                case 21:
                    if (!(var_82[var_425][var_428] != 0 && var_71[var_425][var_428] != 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_428] != 0)) return [3 /*break*/, 23];
                    var_199 = 7;
                    var_243 = 1;
                    return [4 /*yield*/, func635()];
                case 22:
                    _a.sent();
                    return [2 /*return*/];
                case 23:
                    if (!(var_82[var_426][var_428] != 0 && var_71[var_426][var_428] != 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_428] != 0)) return [3 /*break*/, 25];
                    var_199 = 9;
                    var_243 = 1;
                    return [4 /*yield*/, func635()];
                case 24:
                    _a.sent();
                    return [2 /*return*/];
                case 25:
                    var_602 = 0;
                    var_603 = 0;
                    var_604 = 0;
                    var_605 = 0;
                    var_606 = 0;
                    var_607 = 0;
                    var_608 = 0;
                    var_609 = 0;
                    if (var_71[var_425][var_424] == 0 || var_425 <= 5) {
                        var_602 = 1;
                    }
                    if (var_71[var_426][var_424] == 0 || var_426 >= var_33) {
                        var_603 = 1;
                    }
                    if (var_71[var_423][var_427] == 0 || var_427 >= var_34) {
                        var_604 = 1;
                    }
                    if (var_71[var_423][var_428] == 0 || var_428 <= 5) {
                        var_605 = 1;
                    }
                    if (var_71[var_425][var_427] == 0 || var_425 <= 5 || var_427 >= var_34) {
                        var_606 = 1;
                    }
                    if (var_71[var_425][var_428] == 0 || var_425 <= 5 || var_428 <= 5) {
                        var_607 = 1;
                    }
                    if (var_71[var_426][var_427] == 0 || var_426 >= var_33 || var_427 >= var_34) {
                        var_608 = 1;
                    }
                    if (var_71[var_426][var_428] == 0 || var_426 >= var_33 || var_428 <= 5) {
                        var_609 = 1;
                    }
                    var_610 = 0;
                    var_611 = 0;
                    if (var_201 != 14 && var_612 == 0) {
                        var_613 = var_66;
                        var_614 = var_67;
                        var_615 = var_201;
                        if (var_322 == 0) {
                            var_322 = 2;
                        }
                        if (var_322 == 4) {
                            if (var_76[var_615][4][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][4][1];
                                var_67 = var_76[var_615][4][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                            if (var_76[var_615][2][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][2][1];
                                var_67 = var_76[var_615][2][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                            if (var_76[var_615][1][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][1][1];
                                var_67 = var_76[var_615][1][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                            if (var_76[var_615][3][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][3][1];
                                var_67 = var_76[var_615][3][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                        }
                        if (var_322 == 6) {
                            if (var_76[var_615][1][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][1][1];
                                var_67 = var_76[var_615][1][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                            if (var_76[var_615][3][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][3][1];
                                var_67 = var_76[var_615][3][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                            if (var_76[var_615][4][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][4][1];
                                var_67 = var_76[var_615][4][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                            if (var_76[var_615][2][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][2][1];
                                var_67 = var_76[var_615][2][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                        }
                        if (var_322 == 8) {
                            if (var_76[var_615][2][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][2][1];
                                var_67 = var_76[var_615][2][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                            if (var_76[var_615][1][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][1][1];
                                var_67 = var_76[var_615][1][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                            if (var_76[var_615][3][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][3][1];
                                var_67 = var_76[var_615][3][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                            if (var_76[var_615][4][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][4][1];
                                var_67 = var_76[var_615][4][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                        }
                        if (var_322 == 2) {
                            if (var_76[var_615][3][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][3][1];
                                var_67 = var_76[var_615][3][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                            if (var_76[var_615][4][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][4][1];
                                var_67 = var_76[var_615][4][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                            if (var_76[var_615][2][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][2][1];
                                var_67 = var_76[var_615][2][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                            if (var_76[var_615][1][1] != 0 && var_611 == 0) {
                                var_66 = var_76[var_615][1][1];
                                var_67 = var_76[var_615][1][2];
                                if (var_71[var_66][var_67] != 0) {
                                    var_611 = 1;
                                }
                            }
                        }
                        if (var_144 == 0) {
                            var_616 = 1;
                            for (cnt3_31 = 0; cnt3_31 < var_97; ++cnt3_31) {
                                if (var_83[var_616].Var0 != 0 && var_83[var_616].Var0 != 53 && var_83[var_616].Var30 == 0 && var_201 == var_83[var_616].Var10) {
                                    var_66 = var_83[var_616].Var1;
                                    var_67 = var_83[var_616].Var2;
                                    var_611 = 1;
                                    break;
                                }
                                if (var_83[var_616].Var10 == 14 && var_201 != 14 && var_83[var_616].Var0 != 0 && var_83[var_616].Var0 != 53 && var_83[var_616].Var30 == 0) {
                                    if (var_71[var_425][var_424] == var_201 || var_71[var_426][var_424] == var_201 || var_71[var_423][var_427] == var_201 || var_71[var_423][var_428] == var_201) {
                                        var_66 = var_83[var_616].Var1;
                                        var_67 = var_83[var_616].Var2;
                                        var_611 = 1;
                                        break;
                                    }
                                }
                                var_616++;
                            }
                        }
                        if (var_611 == 1) {
                            if (var_66 < var_423 && var_67 > var_424) {
                                if (var_610 == 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_427] != 0 && var_606 != 1 && var_71[var_425][var_427] != 13 && var_82[var_425][var_427] == 0) {
                                    var_423 = var_423 - 1;
                                    var_424 = var_424 + 1;
                                    var_199 = 1;
                                    var_610 = 1;
                                }
                                if (var_425 == var_66) {
                                    if (var_610 == 0 && var_604 != 1 && var_71[var_423][var_427] != 13 && var_82[var_423][var_427] == 0) {
                                        var_424 = var_424 + 1;
                                        var_199 = 2;
                                        var_610 = 1;
                                    }
                                    if (var_610 == 0 && var_602 != 1 && var_71[var_425][var_424] != 13 && var_82[var_425][var_424] == 0) {
                                        var_423 = var_423 - 1;
                                        var_199 = 4;
                                        var_610 = 1;
                                    }
                                }
                                if (var_427 == var_67) {
                                    if (var_610 == 0 && var_602 != 1 && var_71[var_425][var_424] != 13 && var_82[var_425][var_424] == 0) {
                                        var_423 = var_423 - 1;
                                        var_199 = 4;
                                        var_610 = 1;
                                    }
                                    if (var_610 == 0 && var_604 != 1 && var_71[var_423][var_427] != 13 && var_82[var_423][var_427] == 0) {
                                        var_424 = var_424 + 1;
                                        var_199 = 2;
                                        var_610 = 1;
                                    }
                                }
                                if (var_610 == 0 && var_604 != 1 && var_71[var_423][var_427] != 13 && var_82[var_423][var_427] == 0) {
                                    var_424 = var_424 + 1;
                                    var_199 = 2;
                                    var_610 = 1;
                                }
                                if (var_610 == 0 && var_602 != 1 && var_71[var_425][var_424] != 13 && var_82[var_425][var_424] == 0) {
                                    var_423 = var_423 - 1;
                                    var_199 = 4;
                                    var_610 = 1;
                                }
                            }
                            if (var_66 < var_423 && var_67 < var_424) {
                                if (var_610 == 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_428] != 0 && var_607 != 1 && var_71[var_425][var_428] != 13 && var_82[var_425][var_428] == 0) {
                                    var_423 = var_423 - 1;
                                    var_424 = var_424 - 1;
                                    var_199 = 7;
                                    var_610 = 1;
                                }
                                if (var_425 == var_66) {
                                    if (var_610 == 0 && var_605 != 1 && var_71[var_423][var_428] != 13 && var_82[var_423][var_428] == 0) {
                                        var_424 = var_424 - 1;
                                        var_199 = 8;
                                        var_610 = 1;
                                    }
                                    if (var_610 == 0 && var_602 != 1 && var_71[var_425][var_424] != 13 && var_82[var_425][var_424] == 0) {
                                        var_423 = var_423 - 1;
                                        var_199 = 4;
                                        var_610 = 1;
                                    }
                                }
                                if (var_428 == var_67) {
                                    if (var_610 == 0 && var_602 != 1 && var_71[var_425][var_424] != 13 && var_82[var_425][var_424] == 0) {
                                        var_423 = var_423 - 1;
                                        var_199 = 4;
                                        var_610 = 1;
                                    }
                                    if (var_610 == 0 && var_605 != 1 && var_71[var_423][var_428] != 13 && var_82[var_423][var_428] == 0) {
                                        var_424 = var_424 - 1;
                                        var_199 = 8;
                                        var_610 = 1;
                                    }
                                }
                                if (var_610 == 0 && var_605 != 1 && var_71[var_423][var_428] != 13 && var_82[var_423][var_428] == 0) {
                                    var_424 = var_424 - 1;
                                    var_199 = 8;
                                    var_610 = 1;
                                }
                                if (var_610 == 0 && var_602 != 1 && var_71[var_425][var_424] != 13 && var_82[var_425][var_424] == 0) {
                                    var_423 = var_423 - 1;
                                    var_199 = 4;
                                    var_610 = 1;
                                }
                            }
                            if (var_66 > var_423 && var_67 > var_424) {
                                if (var_610 == 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_427] != 0 && var_608 != 1 && var_71[var_426][var_427] != 13 && var_82[var_426][var_427] == 0) {
                                    var_423 = var_423 + 1;
                                    var_424 = var_424 + 1;
                                    var_199 = 3;
                                    var_610 = 1;
                                }
                                if (var_426 == var_66) {
                                    if (var_610 == 0 && var_604 != 1 && var_71[var_423][var_427] != 13 && var_82[var_423][var_427] == 0) {
                                        var_424 = var_424 + 1;
                                        var_199 = 2;
                                        var_610 = 1;
                                    }
                                    if (var_610 == 0 && var_603 != 1 && var_71[var_426][var_424] != 13 && var_82[var_426][var_424] == 0) {
                                        var_423 = var_423 + 1;
                                        var_199 = 6;
                                        var_610 = 1;
                                    }
                                }
                                if (var_427 == var_67) {
                                    if (var_610 == 0 && var_603 != 1 && var_71[var_426][var_424] != 13 && var_82[var_426][var_424] == 0) {
                                        var_423 = var_423 + 1;
                                        var_199 = 6;
                                        var_610 = 1;
                                    }
                                    if (var_610 == 0 && var_604 != 1 && var_71[var_423][var_427] != 13 && var_82[var_423][var_427] == 0) {
                                        var_424 = var_424 + 1;
                                        var_199 = 2;
                                        var_610 = 1;
                                    }
                                }
                                if (var_610 == 0 && var_604 != 1 && var_71[var_423][var_427] != 13 && var_82[var_423][var_427] == 0) {
                                    var_424 = var_424 + 1;
                                    var_199 = 2;
                                    var_610 = 1;
                                }
                                if (var_610 == 0 && var_603 != 1 && var_71[var_426][var_424] != 13 && var_82[var_426][var_424] == 0) {
                                    var_423 = var_423 + 1;
                                    var_199 = 6;
                                    var_610 = 1;
                                }
                            }
                            if (var_66 > var_423 && var_67 < var_424) {
                                if (var_610 == 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_428] != 0 && var_609 != 1 && var_71[var_426][var_428] != 13 && var_82[var_426][var_428] == 0) {
                                    var_423 = var_423 + 1;
                                    var_424 = var_424 - 1;
                                    var_199 = 9;
                                    var_610 = 1;
                                }
                                if (var_426 == var_66) {
                                    if (var_610 == 0 && var_605 != 1 && var_71[var_423][var_428] != 13 && var_82[var_423][var_428] == 0) {
                                        var_424 = var_424 - 1;
                                        var_199 = 8;
                                        var_610 = 1;
                                    }
                                    if (var_610 == 0 && var_603 != 1 && var_71[var_426][var_424] != 13 && var_82[var_426][var_424] == 0) {
                                        var_423 = var_423 + 1;
                                        var_199 = 6;
                                        var_610 = 1;
                                    }
                                }
                                if (var_428 == var_67) {
                                    if (var_610 == 0 && var_603 != 1 && var_71[var_426][var_424] != 13 && var_82[var_426][var_424] == 0) {
                                        var_423 = var_423 + 1;
                                        var_199 = 6;
                                        var_610 = 1;
                                    }
                                    if (var_610 == 0 && var_605 != 1 && var_71[var_423][var_428] != 13 && var_82[var_423][var_428] == 0) {
                                        var_424 = var_424 - 1;
                                        var_199 = 8;
                                        var_610 = 1;
                                    }
                                }
                                if (var_610 == 0 && var_605 != 1 && var_71[var_423][var_428] != 13 && var_82[var_423][var_428] == 0) {
                                    var_424 = var_424 - 1;
                                    var_199 = 8;
                                    var_610 = 1;
                                }
                                if (var_610 == 0 && var_603 != 1 && var_71[var_426][var_424] != 13 && var_82[var_426][var_424] == 0) {
                                    var_423 = var_423 + 1;
                                    var_199 = 6;
                                    var_610 = 1;
                                }
                            }
                            if (var_66 < var_423 && var_67 == var_424) {
                                if (var_610 == 0 && var_82[var_425][var_424] == 0 && var_602 != 1 && var_71[var_425][var_424] != 13) {
                                    var_423 = var_423 - 1;
                                    var_199 = 4;
                                    var_610 = 1;
                                }
                                if (var_610 == 0 && var_82[var_425][var_428] == 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_428] != 0 && var_607 != 1 && var_71[var_425][var_428] != 13) {
                                    var_423 = var_423 - 1;
                                    var_424 = var_424 - 1;
                                    var_199 = 7;
                                    var_610 = 1;
                                }
                                if (var_610 == 0 && var_82[var_425][var_427] == 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_427] != 0 && var_606 != 1 && var_71[var_425][var_427] != 13) {
                                    var_423 = var_423 - 1;
                                    var_424 = var_424 + 1;
                                    var_199 = 1;
                                    var_610 = 1;
                                }
                            }
                            if (var_66 > var_423 && var_67 == var_424) {
                                if (var_610 == 0 && var_82[var_426][var_424] == 0 && var_603 != 1 && var_71[var_426][var_424] != 13) {
                                    var_423 = var_423 + 1;
                                    var_199 = 6;
                                    var_610 = 1;
                                }
                                if (var_610 == 0 && var_82[var_426][var_427] == 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_427] != 0 && var_608 != 1 && var_71[var_426][var_427] != 13) {
                                    var_423 = var_423 + 1;
                                    var_424 = var_424 + 1;
                                    var_199 = 3;
                                    var_610 = 1;
                                }
                                if (var_610 == 0 && var_82[var_426][var_428] == 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_428] != 0 && var_609 != 1 && var_71[var_426][var_428] != 13) {
                                    var_423 = var_423 + 1;
                                    var_424 = var_424 - 1;
                                    var_199 = 9;
                                    var_610 = 1;
                                }
                            }
                            if (var_66 == var_423 && var_67 < var_424) {
                                if (var_610 == 0 && var_82[var_423][var_428] == 0 && var_605 != 1 && var_71[var_423][var_428] != 13) {
                                    var_424 = var_424 - 1;
                                    var_199 = 8;
                                    var_610 = 1;
                                }
                                if (var_610 == 0 && var_82[var_426][var_428] == 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_428] != 0 && var_609 != 1 && var_71[var_426][var_428] != 13) {
                                    var_423 = var_423 + 1;
                                    var_424 = var_424 - 1;
                                    var_199 = 9;
                                    var_610 = 1;
                                }
                                if (var_610 == 0 && var_82[var_425][var_428] == 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_428] != 0 && var_607 != 1 && var_71[var_425][var_428] != 13) {
                                    var_423 = var_423 - 1;
                                    var_424 = var_424 - 1;
                                    var_199 = 7;
                                    var_610 = 1;
                                }
                            }
                            if (var_66 == var_423 && var_67 > var_424) {
                                if (var_610 == 0 && var_82[var_423][var_427] == 0 && var_604 != 1 && var_71[var_423][var_427] != 13) {
                                    var_424 = var_424 + 1;
                                    var_199 = 2;
                                    var_610 = 1;
                                }
                                if (var_610 == 0 && var_82[var_425][var_427] == 0 && var_71[var_425][var_424] != 0 && var_71[var_423][var_427] != 0 && var_606 != 1 && var_71[var_425][var_427] != 13) {
                                    var_423 = var_423 - 1;
                                    var_424 = var_424 + 1;
                                    var_199 = 1;
                                    var_610 = 1;
                                }
                                if (var_610 == 0 && var_82[var_426][var_427] == 0 && var_71[var_426][var_424] != 0 && var_71[var_423][var_427] != 0 && var_608 != 1 && var_71[var_426][var_427] != 13) {
                                    var_423 = var_423 + 1;
                                    var_424 = var_424 + 1;
                                    var_199 = 3;
                                    var_610 = 1;
                                }
                            }
                            if (var_610 == 0) {
                                var_617 = 0;
                                if (var_617 == 0 && var_322 == 2) {
                                    var_322 = 4;
                                    var_617 = 1;
                                }
                                if (var_617 == 0 && var_322 == 6) {
                                    var_322 = 2;
                                    var_617 = 1;
                                }
                                if (var_617 == 0 && var_322 == 8) {
                                    var_322 = 6;
                                    var_617 = 1;
                                }
                                if (var_617 == 0 && var_322 == 4) {
                                    var_322 = 8;
                                    var_617 = 1;
                                }
                                if (var_617 == 0) {
                                    var_322 = 2;
                                }
                                var_66 = var_423;
                                var_67 = var_424;
                                var_217 = 1;
                            }
                            if (var_610 == 1) {
                                var_66 = var_423;
                                var_67 = var_424;
                            }
                        }
                    }
                    if (!(var_201 == 14 || var_611 == 0)) return [3 /*break*/, 27];
                    if (var_199 == 2 && var_610 == 0) {
                        if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                            var_67 = var_67 + 1;
                            var_199 = 2;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                            var_66 = var_66 + 1;
                            var_199 = 6;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                            var_66 = var_66 - 1;
                            var_199 = 4;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                            var_67 = var_67 - 1;
                            var_199 = 8;
                            var_610 = 1;
                        }
                    }
                    if (var_199 == 4 && var_610 == 0) {
                        if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                            var_66 = var_66 - 1;
                            var_199 = 4;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                            var_67 = var_67 + 1;
                            var_199 = 2;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                            var_67 = var_67 - 1;
                            var_199 = 8;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                            var_66 = var_66 + 1;
                            var_199 = 6;
                            var_610 = 1;
                        }
                    }
                    if (var_199 == 8 && var_610 == 0) {
                        if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                            var_67 = var_67 - 1;
                            var_199 = 8;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                            var_66 = var_66 - 1;
                            var_199 = 4;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                            var_66 = var_66 + 1;
                            var_199 = 6;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                            var_67 = var_67 + 1;
                            var_199 = 2;
                            var_610 = 1;
                        }
                    }
                    if (var_199 == 6 && var_610 == 0) {
                        if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                            var_66 = var_66 + 1;
                            var_199 = 6;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                            var_67 = var_67 - 1;
                            var_199 = 8;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                            var_67 = var_67 + 1;
                            var_199 = 2;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                            var_66 = var_66 - 1;
                            var_199 = 4;
                            var_610 = 1;
                        }
                    }
                    if (var_199 == 3 && var_610 == 0) {
                        if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                            var_67 = var_67 + 1;
                            var_199 = 2;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                            var_66 = var_66 + 1;
                            var_199 = 6;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                            var_66 = var_66 - 1;
                            var_199 = 4;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                            var_67 = var_67 - 1;
                            var_199 = 8;
                            var_610 = 1;
                        }
                    }
                    if (var_199 == 1 && var_610 == 0) {
                        if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                            var_66 = var_66 - 1;
                            var_199 = 4;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                            var_67 = var_67 + 1;
                            var_199 = 2;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                            var_67 = var_67 - 1;
                            var_199 = 8;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                            var_66 = var_66 + 1;
                            var_199 = 6;
                            var_610 = 1;
                        }
                    }
                    if (var_199 == 7 && var_610 == 0) {
                        if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                            var_67 = var_67 - 1;
                            var_199 = 8;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                            var_66 = var_66 - 1;
                            var_199 = 4;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                            var_66 = var_66 + 1;
                            var_199 = 6;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                            var_67 = var_67 + 1;
                            var_199 = 2;
                            var_610 = 1;
                        }
                    }
                    if (var_199 == 9 && var_610 == 0) {
                        if (var_610 == 0 && var_603 == 0 && var_82[var_426][var_424] == 0 && var_71[var_426][var_424] != 13) {
                            var_66 = var_66 + 1;
                            var_199 = 6;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_605 == 0 && var_82[var_423][var_428] == 0 && var_71[var_423][var_428] != 13) {
                            var_67 = var_67 - 1;
                            var_199 = 8;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_604 == 0 && var_82[var_423][var_427] == 0 && var_71[var_423][var_427] != 13) {
                            var_67 = var_67 + 1;
                            var_199 = 2;
                            var_610 = 1;
                        }
                        if (var_610 == 0 && var_602 == 0 && var_82[var_425][var_424] == 0 && var_71[var_425][var_424] != 13) {
                            var_66 = var_66 - 1;
                            var_199 = 4;
                            var_610 = 1;
                        }
                    }
                    if (!(var_610 == 0)) return [3 /*break*/, 27];
                    var_618 = 0;
                    if (var_618 == 0 && var_199 == 2) {
                        var_199 = 8;
                        var_618 = 1;
                    }
                    if (var_618 == 0 && var_199 == 8) {
                        var_199 = 2;
                        var_618 = 1;
                    }
                    if (var_618 == 0 && var_199 == 6) {
                        var_199 = 4;
                        var_618 = 1;
                    }
                    if (var_618 == 0 && var_199 == 4) {
                        var_199 = 6;
                        var_618 = 1;
                    }
                    if (var_618 == 0 && var_199 == 1) {
                        var_199 = 4;
                        var_618 = 1;
                    }
                    if (var_618 == 0 && var_199 == 3) {
                        var_199 = 2;
                        var_618 = 1;
                    }
                    if (var_618 == 0 && var_199 == 7) {
                        var_199 = 8;
                        var_618 = 1;
                    }
                    if (var_618 == 0 && var_199 == 9) {
                        var_199 = 6;
                        var_618 = 1;
                    }
                    var_217 = 1;
                    return [4 /*yield*/, func019()];
                case 26:
                    _a.sent(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return [2 /*return*/];
                case 27: return [4 /*yield*/, func015()];
                case 28:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var change_scale;
function ChangeScale() {
    if (change_scale.percent === window.devicePixelRatio) {
        var scale = document.documentElement.clientWidth;
        scale = scale / change_scale.container;
        scale = "scale(" + scale + ")";
        document.body.style.transform = scale;
    }
    else {
        change_scale.percent = window.devicePixelRatio;
    }
}
// 各キー操作。joystick関数があるので、動作に関するもの？？
// 各キー入力確認
function func080(is_key_reset) {
    if (is_key_reset === void 0) { is_key_reset = true; }
    return __awaiter(this, void 0, void 0, function () {
        var cnt3_32, cnt3_33, cnt3_34, cnt3_35, cnt3_36;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(80);
                    conf_keyon = 0;
                    var_254 = 0;
                    var_257 = 0;
                    var_255 = 0;
                    var_259 = 0;
                    var_253 = 0;
                    var_256 = 0;
                    var_258 = 0;
                    var_260 = 0;
                    key_X_on = 0;
                    key_A_on = 0; // キーA入力初期化
                    key_Z_on = 0; // キーZ入力初期化
                    key_C_on = 0;
                    key_Shift_on = 0; // キーShift入力初期化
                    key_S_on = 0; // キーS入力初期化
                    var_619 = 0;
                    var_620 = 0;
                    var_621 = 0;
                    var_261 = 0;
                    if (!(var_407 >= 1)) return [3 /*break*/, 27];
                    if (ginfo(2) == 30) {
                        if (var_622 == 0) {
                            imeset(1);
                        }
                        var_622 = 30;
                        onkey(1);
                    }
                    if (ginfo(2) == 0) {
                        if (var_622 == 30) {
                            imeset(0);
                        }
                        var_622 = 0;
                    }
                    if (!(ginfo(2) != 30)) return [3 /*break*/, 27];
                    onkey(0);
                    var_623 = getkey(48); // キー0入力確認
                    if (!(var_623 == 1)) return [3 /*break*/, 3];
                    var_624 = 0;
                    var_625 = 0;
                    return [4 /*yield*/, func934()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func929()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    var_623 = getkey(49); // キー1入力確認
                    if (!(var_623 == 1 && var_624 != 1)) return [3 /*break*/, 6];
                    var_624 = 1;
                    var_625 = 1;
                    return [4 /*yield*/, func934()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, func929()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    var_623 = getkey(50); // キー2入力確認
                    if (!(var_623 == 1 && var_624 != 2)) return [3 /*break*/, 9];
                    var_624 = 2;
                    var_625 = 1;
                    return [4 /*yield*/, func934()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, func929()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    var_623 = getkey(51);
                    if (!(var_623 == 1 && var_624 != 3)) return [3 /*break*/, 12];
                    var_624 = 3;
                    var_625 = 1;
                    return [4 /*yield*/, func934()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, func929()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    var_623 = getkey(52); // キー3入力確認
                    if (!(var_623 == 1 && var_624 != 4)) return [3 /*break*/, 15];
                    var_624 = 4;
                    var_625 = 1;
                    return [4 /*yield*/, func934()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, func929()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    var_623 = getkey(53); // キー4入力確認
                    if (!(var_623 == 1 && var_624 != 5)) return [3 /*break*/, 18];
                    var_624 = 5;
                    var_625 = 1;
                    return [4 /*yield*/, func934()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, func929()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    var_623 = getkey(54); // キー5入力確認
                    if (!(var_623 == 1 && var_624 != 6)) return [3 /*break*/, 21];
                    var_624 = 6;
                    var_625 = 1;
                    return [4 /*yield*/, func934()];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, func929()];
                case 20:
                    _a.sent();
                    _a.label = 21;
                case 21:
                    var_623 = getkey(55); // キー6入力確認
                    if (!(var_623 == 1 && var_624 != 7)) return [3 /*break*/, 24];
                    var_624 = 7;
                    var_625 = 1;
                    return [4 /*yield*/, func934()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, func929()];
                case 23:
                    _a.sent();
                    _a.label = 24;
                case 24:
                    var_623 = getkey(56); // キー7入力確認
                    if (!(var_623 == 1 && var_624 != 8)) return [3 /*break*/, 27];
                    var_624 = 8;
                    var_625 = 1;
                    return [4 /*yield*/, func934()];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, func929()];
                case 26:
                    _a.sent();
                    _a.label = 27;
                case 27:
                    if (ginfo(2) == (-1)) {
                        return [2 /*return*/];
                    }
                    if (ginfo(2) != 0 && ginfo(2) != 37) {
                        return [2 /*return*/];
                    }
                    if (!(var_626 == 0)) return [3 /*break*/, 74];
                    conf_keyon = getkey(112); // キーF1入力確認
                    if (!(conf_keyon == 1 && var_10 == 1)) return [3 /*break*/, 35];
                    var_10 = 0;
                    width(340, 340);
                    if (var_627 == 0) {
                        bsave(file_name = "00.dat", data = var_10, data_size = null, offset = 20);
                    }
                    cnt3_32 = 0;
                    _a.label = 28;
                case 28:
                    if (!true) return [3 /*break*/, 34];
                    if (!(var_628 == 0 && var_629 == 0)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func337()];
                case 29:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 30;
                case 30:
                    if (!(var_628 == 1 || var_629 == 1)) return [3 /*break*/, 32];
                    return [4 /*yield*/, wait(2)];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32:
                    conf_keyon = getkey(112); // キーF1入力確認
                    if (conf_keyon == 0) {
                        return [3 /*break*/, 34];
                    }
                    _a.label = 33;
                case 33:
                    ++cnt3_32;
                    return [3 /*break*/, 28];
                case 34: return [2 /*return*/];
                case 35:
                    if (!(conf_keyon == 1 && var_10 == 0)) return [3 /*break*/, 43];
                    var_10 = 1;
                    width(680, 680);
                    if (var_627 == 0) {
                        bsave(file_name = "00.dat", data = var_10, data_size = null, offset = 20);
                    }
                    cnt3_33 = 0;
                    _a.label = 36;
                case 36:
                    if (!true) return [3 /*break*/, 42];
                    if (!(var_628 == 0 && var_629 == 0)) return [3 /*break*/, 38];
                    return [4 /*yield*/, func337()];
                case 37:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 38;
                case 38:
                    if (!(var_628 == 1 || var_629 == 1)) return [3 /*break*/, 40];
                    return [4 /*yield*/, wait(2)];
                case 39:
                    _a.sent();
                    _a.label = 40;
                case 40:
                    conf_keyon = getkey(112); // キーF1入力確認
                    if (conf_keyon == 0) {
                        return [3 /*break*/, 42];
                    }
                    _a.label = 41;
                case 41:
                    ++cnt3_33;
                    return [3 /*break*/, 36];
                case 42: return [2 /*return*/];
                case 43:
                    // F2キーを押した際の動作
                    conf_keyon = getkey(113); // キーF2入力確認
                    if (!(conf_keyon == 1)) return [3 /*break*/, 45];
                    return [4 /*yield*/, func088()];
                case 44:
                    _a.sent(); // 音量を小さくする（ボリュームコントロールのWAVE変更）
                    _a.label = 45;
                case 45:
                    // F3キーを押した際の動作
                    conf_keyon = getkey(114); // キーF3入力確認
                    if (!(conf_keyon == 1)) return [3 /*break*/, 47];
                    return [4 /*yield*/, func087()];
                case 46:
                    _a.sent(); // 音量を大きくする（ボリュームコントロールのWAVE変更）
                    _a.label = 47;
                case 47:
                    // F4キーを押した際の動作
                    conf_keyon = getkey(115); // キーF4入力確認
                    if (!(conf_keyon == 1)) return [3 /*break*/, 49];
                    return [4 /*yield*/, func085()];
                case 48:
                    _a.sent(); // 効果音を小さくする
                    _a.label = 49;
                case 49:
                    // F5キーを押した際の動作
                    conf_keyon = getkey(116); // キーF5入力確認
                    if (!(conf_keyon == 1)) return [3 /*break*/, 51];
                    return [4 /*yield*/, func086()];
                case 50:
                    _a.sent(); // 効果音を大きくする
                    _a.label = 51;
                case 51:
                    // F6キーを押した際の動作　装備品の情報を「disc.txt」に出力する
                    conf_keyon = getkey(117); // キーF6入力確認
                    if (!(conf_keyon == 1 && var_628 == 0 && var_627 == 0 && var_629 == 0)) return [3 /*break*/, 57];
                    return [4 /*yield*/, func227()];
                case 52:
                    _a.sent(); // F6キーを押しての現在ステータスをテキストファイルへ出力
                    var_630 = 1;
                    cnt3_34 = 0;
                    _a.label = 53;
                case 53:
                    if (!true) return [3 /*break*/, 56];
                    return [4 /*yield*/, func337()];
                case 54:
                    _a.sent(); // メッセージ関係呼び出し
                    conf_keyon = getkey(117); // キーF6入力確認
                    if (conf_keyon == 0) {
                        return [3 /*break*/, 56];
                    }
                    _a.label = 55;
                case 55:
                    ++cnt3_34;
                    return [3 /*break*/, 53];
                case 56: return [2 /*return*/];
                case 57:
                    // F7キーを押した際の動作　BGMのオン・オフ（オンにした場合DISC使用時や階段を降りてから再開）
                    conf_keyon = getkey(118); // キーF7入力確認
                    if (!(conf_keyon == 1 && var_631 == 1000)) return [3 /*break*/, 65];
                    DMSTOP(); // BGM停止関数
                    var_631 = 0;
                    var_632 = 1;
                    var_633 = 0;
                    var_634 = 0;
                    var_635 = 0;
                    var_636 = 0;
                    cnt3_35 = 0;
                    _a.label = 58;
                case 58:
                    if (!true) return [3 /*break*/, 64];
                    if (!(var_628 == 0 && var_629 == 0)) return [3 /*break*/, 60];
                    return [4 /*yield*/, func337()];
                case 59:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 60;
                case 60:
                    if (!(var_628 == 1 || var_629 == 1)) return [3 /*break*/, 62];
                    return [4 /*yield*/, wait(2)];
                case 61:
                    _a.sent();
                    _a.label = 62;
                case 62:
                    conf_keyon = getkey(118); // キーF2入力確認
                    if (conf_keyon == 0) {
                        return [3 /*break*/, 64];
                    }
                    _a.label = 63;
                case 63:
                    ++cnt3_35;
                    return [3 /*break*/, 58];
                case 64: return [2 /*return*/];
                case 65:
                    if (!(conf_keyon == 1 && var_631 == 0)) return [3 /*break*/, 73];
                    var_631 = 1000;
                    var_633 = 1;
                    var_632 = 0;
                    var_634 = 0;
                    var_635 = 0;
                    var_636 = 0;
                    cnt3_36 = 0;
                    _a.label = 66;
                case 66:
                    if (!true) return [3 /*break*/, 72];
                    if (!(var_628 == 0 && var_629 == 0)) return [3 /*break*/, 68];
                    return [4 /*yield*/, func337()];
                case 67:
                    _a.sent(); // メッセージ関係呼び出し
                    _a.label = 68;
                case 68:
                    if (!(var_628 == 1 || var_629 == 1)) return [3 /*break*/, 70];
                    return [4 /*yield*/, wait(2)];
                case 69:
                    _a.sent();
                    _a.label = 70;
                case 70:
                    conf_keyon = getkey(118); // キーF7入力確認
                    if (conf_keyon == 0) {
                        return [3 /*break*/, 72];
                    }
                    _a.label = 71;
                case 71:
                    ++cnt3_36;
                    return [3 /*break*/, 66];
                case 72: return [2 /*return*/];
                case 73:
                    // F12キーを押した際の動作　フルスクリーン切り替え
                    conf_keyon = getkey(123); // キーF12入力確認
                    _a.label = 74;
                case 74:
                    var_254 = getkey(var_647); // 入力判定：[←]
                    var_257 = getkey(var_648); // 入力判定：[→]
                    var_255 = getkey(var_649); // 入力判定：[↑]
                    var_259 = getkey(var_650); // 入力判定：[↓]
                    if (is_key_reset) {
                        ResetKey(var_647);
                        ResetKey(var_648);
                        ResetKey(var_649);
                        ResetKey(var_650);
                    }
                    var_253 = getkey(var_651); // 入力判定：? (Home)
                    var_256 = getkey(var_652); // 入力判定：? (PageUp)
                    var_258 = getkey(var_653); // 入力判定：? (End)
                    var_260 = getkey(var_654); // 入力判定：? (PageDown)
                    key_Z_on = getkey(var_655); // 入力判定：攻撃ボタン(Z)
                    key_X_on = getkey(var_656); // 入力判定：ダッシュ・コマンドキャンセル(X)
                    key_A_on = getkey(var_657); // 入力判定：コマンドウィンドウ表示(A)
                    key_S_on = getkey(var_658); // 入力判定：射撃(S)
                    key_Shift_on = getkey(var_659); // 入力判定：押しながらで斜めのみ移動(Shift)
                    key_C_on = getkey(var_660); // 入力判定：その場で向き変更(C)
                    var_261 = getkey(32); // 入力判定：縮小マップのみ表示 (Space)
                    var_661 = 15 + var_662;
                    ck_joystick(var_663, var_661);
                    if (stat != 1 && var_254 == 0 && var_257 == 0 && var_255 == 0 && var_259 == 0 && var_253 == 0 && var_256 == 0 && var_258 == 0 && var_260 == 0 && key_Z_on == 0 && key_X_on == 0 && key_A_on == 0 && key_S_on == 0 && key_Shift_on == 0 && key_C_on == 0 && var_619 == 0 && var_620 == 0 && var_621 == 0 && var_261 == 0) {
                        if (var_663 == 1) {
                            var_254 = 1;
                        }
                        if (var_663 == 4) {
                            var_257 = 1;
                        }
                        if (var_663 == 2) {
                            var_255 = 1;
                        }
                        if (var_663 == 8) {
                            var_259 = 1;
                        }
                        if (var_663 == 3) {
                            var_253 = 1;
                        }
                        if (var_663 == 6) {
                            var_256 = 1;
                        }
                        if (var_663 == 9) {
                            var_258 = 1;
                        }
                        if (var_663 == 12) {
                            var_260 = 1;
                        }
                        if (var_663 == var_664[1]) {
                            key_Z_on = 1;
                        }
                        if (var_663 == var_664[2]) {
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[3]) {
                            key_A_on = 1; // キーA入力確認
                        }
                        if (var_663 == var_664[4]) {
                            key_C_on = 1; // キーC入力確認
                        }
                        if (var_663 == var_664[5]) {
                            key_Shift_on = 1; // キーShift入力確認
                        }
                        if (var_663 == var_664[6]) {
                            key_S_on = 1; // キーS入力確認
                        }
                        if (var_663 == var_664[1] + var_664[2]) {
                            key_Z_on = 1;
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[7]) {
                            var_261 = 1;
                        }
                        if (var_663 == var_664[8]) {
                            var_619 = 1;
                        }
                        if (var_663 == var_664[9]) {
                            var_620 = 1;
                        }
                        if (var_663 == var_664[10]) {
                            var_621 = 1;
                        }
                        if (var_663 == var_664[2] + 1) {
                            var_254 = 1;
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[2] + 4) {
                            var_257 = 1;
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[2] + 2) {
                            var_255 = 1;
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[2] + 8) {
                            var_259 = 1;
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[2] + 3) {
                            var_253 = 1;
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[2] + 6) {
                            var_256 = 1;
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[2] + 9) {
                            var_258 = 1;
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[2] + 12) {
                            var_260 = 1;
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[5] + 3) {
                            var_253 = 1;
                            key_Shift_on = 1; // キーShift入力確認
                        }
                        if (var_663 == var_664[5] + 6) {
                            var_256 = 1;
                            key_Shift_on = 1; // キーShift入力確認
                        }
                        if (var_663 == var_664[5] + 9) {
                            var_258 = 1;
                            key_Shift_on = 1; // キーShift入力確認
                        }
                        if (var_663 == var_664[5] + 12) {
                            var_260 = 1;
                            key_Shift_on = 1; // キーShift入力確認
                        }
                        if (var_663 == var_664[5] + 3 + var_664[2]) {
                            var_253 = 1;
                            key_Shift_on = 1; // キーShift入力確認
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[5] + 6 + var_664[2]) {
                            var_256 = 1;
                            key_Shift_on = 1; // キーShift入力確認
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[5] + 9 + var_664[2]) {
                            var_258 = 1;
                            key_Shift_on = 1; // キーShift入力確認
                            key_X_on = 1;
                        }
                        if (var_663 == var_664[5] + 12 + var_664[2]) {
                            var_260 = 1;
                            key_Shift_on = 1; // キーShift入力確認
                            key_X_on = 1;
                        }
                    }
                    var_663 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
// 効果音呼び出し関数
function func081() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(81);
            /*
            設定画面でカーソルを動かした際の音　「チッ」
            使用する際は DSPLAY(audio_id = 100) で流せる
            */
            bgm_file_name = "100.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 100);
            // 
            bgm_file_name = "101.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 101);
            // 
            bgm_file_name = "102.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 102);
            // 
            bgm_file_name = "103.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 103);
            //
            bgm_file_name = "103.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 104);
            // 
            bgm_file_name = "103.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 105);
            // 
            bgm_file_name = "103.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 106);
            // 
            bgm_file_name = "107.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 107);
            // 
            bgm_file_name = "108.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 108);
            // 
            bgm_file_name = "109.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 109);
            // 
            bgm_file_name = "110.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 110);
            // 
            bgm_file_name = "111.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 111);
            // 
            bgm_file_name = "112.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 112);
            // 
            bgm_file_name = "113.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 113);
            // 
            bgm_file_name = "114.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 114);
            // 
            bgm_file_name = "115.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 115);
            // 
            bgm_file_name = "116.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 116);
            // 
            bgm_file_name = "117.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 117);
            // 
            bgm_file_name = "118.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 118);
            // 
            bgm_file_name = "119.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 119);
            // 
            bgm_file_name = "120.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 120);
            // 
            bgm_file_name = "121.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 121);
            // 
            bgm_file_name = "122.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 122);
            // 
            bgm_file_name = "123.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 123);
            // 
            bgm_file_name = "124.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 124);
            // 
            bgm_file_name = "125.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 125);
            // 
            bgm_file_name = "126.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 126);
            // 
            bgm_file_name = "127.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 127);
            // 
            bgm_file_name = "128.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 128);
            // 
            bgm_file_name = "129.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 129);
            // 
            bgm_file_name = "130.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            // 
            DSLOADMEMORY(var_667, 130);
            bgm_file_name = "131.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 131);
            // 
            bgm_file_name = "132.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 132);
            // 
            bgm_file_name = "133.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 133);
            // 
            bgm_file_name = "134.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 134);
            // 
            bgm_file_name = "135.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 135);
            // 
            bgm_file_name = "136.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 136);
            // 
            bgm_file_name = "137.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 137);
            // 
            bgm_file_name = "138.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 138);
            // 
            bgm_file_name = "139.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 139);
            // 
            bgm_file_name = "140.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 140);
            // 
            bgm_file_name = "141.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 141);
            // 
            bgm_file_name = "142.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 142);
            // 
            bgm_file_name = "143.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 143);
            // 
            bgm_file_name = "144.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 144);
            // 
            bgm_file_name = "145.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 145);
            // 
            bgm_file_name = "146.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 146);
            // 
            bgm_file_name = "147.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 147);
            // 
            bgm_file_name = "148.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 148);
            // 
            bgm_file_name = "149.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 149);
            // 
            bgm_file_name = "150.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 150);
            // 
            bgm_file_name = "151.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 151);
            // 
            bgm_file_name = "152.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 152);
            // 
            bgm_file_name = "153.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 153);
            // 
            bgm_file_name = "154.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 154);
            // 
            bgm_file_name = "155.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 155);
            // 
            bgm_file_name = "156.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 156);
            // 
            bgm_file_name = "157.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 157);
            // 
            bgm_file_name = "158.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 158);
            // 
            bgm_file_name = "159.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 159);
            // 
            bgm_file_name = "160.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 160);
            // 
            bgm_file_name = "161.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 161);
            // 
            bgm_file_name = "162.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 162);
            // 
            bgm_file_name = "143.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 163);
            // 
            bgm_file_name = "164.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 164);
            // 
            bgm_file_name = "165.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 165);
            // 
            bgm_file_name = "166.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 166);
            // 
            bgm_file_name = "167.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 167);
            // 
            bgm_file_name = "168.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 168);
            // 
            bgm_file_name = "169.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 169);
            // 
            bgm_file_name = "170.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 170);
            // 
            bgm_file_name = "171.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 171);
            // 
            bgm_file_name = "172.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 172);
            // 
            bgm_file_name = "173.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 173);
            // 
            bgm_file_name = "174.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 174);
            // 
            bgm_file_name = "175.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 175);
            // 
            bgm_file_name = "176.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 176);
            // 
            bgm_file_name = "121.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 177);
            // 
            bgm_file_name = "178.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 178);
            // 
            bgm_file_name = "179.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 179);
            // 
            bgm_file_name = "180.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 180);
            // 
            bgm_file_name = "181.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 181);
            // 
            bgm_file_name = "182.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 182);
            // 
            bgm_file_name = "183.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 183);
            // 
            bgm_file_name = "184.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 184);
            // 
            bgm_file_name = "153.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 185);
            // 
            bgm_file_name = "186.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 186);
            // 
            bgm_file_name = "187.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 187);
            // 
            bgm_file_name = "188.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 188);
            // 
            bgm_file_name = "121.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 189);
            return [2 /*return*/];
        });
    });
}
function func082() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(82);
            // 
            bgm_file_name = "190.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 190);
            // 
            bgm_file_name = "191.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 191);
            // 
            bgm_file_name = "192.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 192);
            // 
            bgm_file_name = "193.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 193);
            // 
            bgm_file_name = "194.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 194);
            // 
            bgm_file_name = "109.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 195);
            // 
            bgm_file_name = "119.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 196);
            // 
            bgm_file_name = "197.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 197);
            // 
            bgm_file_name = "142.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 198);
            // 
            bgm_file_name = "199.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 199);
            // 
            bgm_file_name = "200.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 200);
            // 
            bgm_file_name = "201.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 201);
            // 
            bgm_file_name = "202.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 202);
            // 
            bgm_file_name = "203.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 203);
            // 
            bgm_file_name = "204.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 204);
            // 
            bgm_file_name = "205.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 205);
            // 
            bgm_file_name = "206.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 206);
            // 
            bgm_file_name = "207.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 207);
            // アイテムを整理する時の効果音
            bgm_file_name = "208.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 208);
            // 
            bgm_file_name = "209.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 209);
            // 
            bgm_file_name = "100.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 210);
            // 
            bgm_file_name = "213.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 211);
            // 
            bgm_file_name = "212.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 212);
            // 
            bgm_file_name = "213.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 213);
            // 
            bgm_file_name = "100.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 214);
            // 
            bgm_file_name = "215.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 215);
            // 
            bgm_file_name = "216.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 216);
            // 
            bgm_file_name = "217.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 217);
            // 
            bgm_file_name = "218.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 218);
            // 
            bgm_file_name = "219.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 219);
            // 
            bgm_file_name = "223.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 220);
            // 
            bgm_file_name = "130.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 221);
            // 
            bgm_file_name = "222.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 222);
            // 
            bgm_file_name = "223.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 223);
            // 
            bgm_file_name = "224.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 224);
            // 
            bgm_file_name = "225.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 225);
            // 
            bgm_file_name = "153.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 226);
            // 
            bgm_file_name = "227.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 227);
            // 
            bgm_file_name = "228.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 228);
            // 
            bgm_file_name = "229.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 229);
            // 
            bgm_file_name = "230.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 230);
            // 
            bgm_file_name = "231.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 231);
            // 
            bgm_file_name = "232.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 232);
            // 
            bgm_file_name = "192.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 233);
            // 
            bgm_file_name = "234.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 234);
            // 
            bgm_file_name = "235.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 235);
            // 
            bgm_file_name = "236.wav";
            exist(bgm_file_name);
            var_666 = strsize;
            var_667 = sdim(var_666);
            var_667 = bload(bgm_file_name, var_666);
            DSLOADMEMORY(var_667, 236);
            return [2 /*return*/];
        });
    });
}
// 効果音上限設定処理 (最大値:137)
function func083() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(83);
                    var_668 = 137;
                    return [4 /*yield*/, func084()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func084() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_67;
        return __generator(this, function (_a) {
            dbgprt(84);
            se_volume = 60;
            var_670 = 100;
            for (cnt1_67 = 0; cnt1_67 < var_668; ++cnt1_67) {
                DSSETVOLUME(var_670, se_volume);
                var_670++;
            }
            return [2 /*return*/];
        });
    });
}
function func085() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_68;
        return __generator(this, function (_a) {
            dbgprt(85);
            se_volume = se_volume - 1;
            if (se_volume <= 0) {
                se_volume = 0;
            }
            var_670 = 100;
            for (cnt1_68 = 0; cnt1_68 < var_668; ++cnt1_68) {
                DSSETVOLUME(var_670, se_volume);
                var_670++;
            }
            var_635 = 1;
            var_636 = 0;
            var_632 = 0;
            var_633 = 0;
            return [2 /*return*/];
        });
    });
}
function func086() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_69;
        return __generator(this, function (_a) {
            dbgprt(86);
            se_volume = se_volume + 1;
            if (se_volume >= 100) {
                se_volume = 100;
            }
            var_670 = 100;
            for (cnt1_69 = 0; cnt1_69 < var_668; ++cnt1_69) {
                DSSETVOLUME(var_670, se_volume);
                var_670++;
            }
            var_635 = 1;
            var_636 = 0;
            var_632 = 0;
            var_633 = 0;
            return [2 /*return*/];
        });
    });
}
function func087() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(87);
            bgm_volume = bgm_volume + 1;
            if (bgm_volume >= 100) {
                bgm_volume = 100;
            }
            DSSETMASTERVOLUME(bgm_volume);
            var_636 = 1;
            var_635 = 0;
            var_632 = 0;
            var_633 = 0;
            return [2 /*return*/];
        });
    });
}
function func088() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(88);
            bgm_volume = bgm_volume - 1;
            if (bgm_volume <= 0) {
                bgm_volume = 0;
            }
            DSSETMASTERVOLUME(bgm_volume);
            var_636 = 1;
            var_635 = 0;
            var_632 = 0;
            var_633 = 0;
            return [2 /*return*/];
        });
    });
}
function func089() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(89);
            var_671 = 102;
            if (var_357 == 0) {
                var_671 = 102;
            }
            if (var_357 == 101) {
                var_671 = 112;
            }
            if (var_357 == 122) {
                var_671 = 112;
            }
            if (var_357 == 113) {
                var_671 = 113;
            }
            if (var_357 == 117) {
                var_671 = 113;
            }
            if (var_357 == 107) {
                var_671 = 113;
            }
            if (var_357 == 105) {
                var_671 = 120;
            }
            if (var_357 == 201) {
                var_671 = 123;
            }
            if (var_357 == 116) {
                var_671 = 127;
            }
            if (var_357 == 109) {
                var_671 = 128;
            }
            if (var_357 == 394) {
                var_671 = 113;
            }
            if (var_357 == 100 || var_357 == 102 || var_357 == 104 || var_357 == 106 || var_357 == 108 || var_357 == 111 || var_357 == 112 || var_357 == 114) {
                var_671 = 121;
            }
            if (var_357 == 115 || var_357 == 118 || var_357 == 119 || var_357 == 120 || var_357 == 121 || var_357 == 203 || var_357 == 304 || var_357 == 123) {
                var_671 = 121;
            }
            if (var_357 == 394 || var_357 == 395 || var_357 == 397 || var_357 == 398 || var_357 == 399) {
                var_671 = 121;
            }
            if (var_357 == 103 || var_357 == 124 || var_357 == 205 || var_357 == 207 || var_357 == 301 || var_357 == 309) {
                var_671 = 122;
            }
            DSPLAY(audio_id = var_671);
            return [2 /*return*/];
        });
    });
}
function func090() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(90);
            DSPLAY(audio_id = 141);
            return [2 /*return*/];
        });
    });
}
function func091() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(91);
            var_671 = 103;
            DSPLAY(audio_id = var_671);
            return [2 /*return*/];
        });
    });
}
function func092() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(92);
            var_671 = 103;
            DSPLAY(audio_id = var_671);
            var_672 = 0;
            return [2 /*return*/];
        });
    });
}
function func093() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(93);
            var_671 = 102;
            if (var_672 == 3 || var_672 == 13) {
                var_671 = 124;
            }
            if (var_672 == 2 || var_672 == 22) {
                var_671 = 114;
            }
            if (var_672 == 9 || var_672 == 10) {
                var_671 = 123;
            }
            if (var_672 == 29) {
                var_671 = 147;
            }
            if (var_672 == 122 || var_672 == 129) {
                var_671 = 112;
            }
            if (var_672 == 14 || var_672 == 66 || var_672 == 110 || var_672 == 162) {
                var_671 = 222;
            }
            if (var_672 == 44) {
                var_671 = 223;
            }
            if (var_672 == 51) {
                var_671 = 224;
            }
            if (var_672 == 17) {
                var_671 = 155;
            }
            DSPLAY(audio_id = var_671);
            var_672 = 0;
            return [2 /*return*/];
        });
    });
}
function func094() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(94);
            DSPLAY(audio_id = 173);
            return [2 /*return*/];
        });
    });
}
function func095() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(95);
            var_671 = 109;
            if (var_83[var_673].Var0 == 93) {
                var_671 = 109;
            }
            if (var_83[var_673].Var0 == 56) {
                var_671 = 110;
            }
            if (var_83[var_673].Var0 == 136) {
                var_671 = 194;
            }
            if (var_83[var_673].Var0 == 21) {
                var_671 = 169;
            }
            if (var_83[var_673].Var0 == 95 || var_83[var_673].Var0 == 121 || var_83[var_673].Var0 == 126) {
                var_671 = 176;
            }
            if (var_83[var_673].Var0 == 113 || var_83[var_673].Var0 == 132) {
                var_671 = 121;
            }
            if (var_83[var_673].Var0 == 47 || var_83[var_673].Var0 == 67) {
                return [2 /*return*/];
            }
            DSPLAY(audio_id = var_671);
            return [2 /*return*/];
        });
    });
}
function func096() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(96);
            var_671 = 103;
            if (var_674 == 151 || var_674 == 171 || var_674 == 132) {
                var_671 = 111;
            }
            if (var_674 == 113) {
                var_671 = 115;
            }
            if (var_674 == 136) {
                var_671 = 195;
            }
            DSPLAY(audio_id = var_671);
            var_674 = 0;
            return [2 /*return*/];
        });
    });
}
function func097() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(97);
            var_671 = 109;
            if (var_340 == 408 || var_340 == 412 || var_340 == 405 || var_340 == 406 || var_340 == 699) {
                var_671 = 107;
            }
            if (var_340 == 411 || var_340 == 409) {
                var_671 = 124;
            }
            if (var_340 == 400 || var_340 == 407) {
                var_671 = 176;
            }
            if (var_340 == 404) {
                var_671 = 215;
            }
            if (var_340 == 698) {
                var_671 = 128;
            }
            if (var_340 == 487 || var_340 == 488 || var_340 == 489) {
                var_671 = 169;
            }
            DSPLAY(audio_id = var_671);
            return [2 /*return*/];
        });
    });
}
function func098() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(98);
            var_671 = 103;
            DSPLAY(audio_id = var_671);
            return [2 /*return*/];
        });
    });
}
function func099() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(99);
            var_671 = 142;
            DSPLAY(audio_id = var_671);
            return [2 /*return*/];
        });
    });
}
//# sourceMappingURL=func0.js.map