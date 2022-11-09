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
function func800() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(800);
            var_3186 = 10;
            var_3187 = 120;
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(var_3186 - 3, 37);
            gcopy(12, 0, 0, var_3187 + 7, 53);
            color(255, 255, 255);
            line(var_3186, 39, var_3186 + var_3187, 39);
            line(var_3186, 86, var_3186 + var_3187, 86);
            line(var_3186 - 1, 40, var_3186 - 1, 84);
            line(var_3186 + var_3187 + 2, 40, var_3186 + var_3187 + 2, 84);
            pset(var_3186, 40);
            pset(var_3186 + var_3187 + 1, 40);
            pset(var_3186, 85);
            pset(var_3186 + var_3187 + 1, 85);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 20, font_style = 1);
            color(255, 255, 255);
            pos(var_3186 + 10, 53);
            mes("" + var_3175);
            pos(var_3186 + 10 + 15, 53);
            mes("" + var_3174);
            pos(var_3186 + 10 + 30, 53);
            mes("" + var_3173);
            pos(var_3186 + 10 + 45, 53);
            mes("" + var_3172);
            pos(var_3186 + 10 + 60, 53);
            mes("" + var_3171);
            pos(var_3186 + 10 + 75, 53);
            mes("" + var_3170);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(var_3186 + 10 + 90, 55);
            mes("G");
            font(font_type = "ＭＳ Ｐゴシック", font_size = 20, font_style = 1);
            color(0, 255, 0);
            pos(var_3180, 55);
            mes("_");
            return [2 /*return*/];
        });
    });
}
function func801() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_1, cnt1_2, cnt1_3, cnt1_4, cnt1_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(801);
                    DSPLAY(audio_id = 211);
                    var_783 = 5;
                    cnt1_1 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_1 < 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_1;
                    return [3 /*break*/, 1];
                case 4:
                    var_783 = 4;
                    cnt1_2 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_2 < 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    ++cnt1_2;
                    return [3 /*break*/, 5];
                case 8:
                    var_783 = 3;
                    cnt1_3 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_3 < 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    ++cnt1_3;
                    return [3 /*break*/, 9];
                case 12:
                    var_783 = 2;
                    cnt1_4 = 0;
                    _a.label = 13;
                case 13:
                    if (!(cnt1_4 < 1)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    ++cnt1_4;
                    return [3 /*break*/, 13];
                case 16:
                    var_783 = 1;
                    cnt1_5 = 0;
                    _a.label = 17;
                case 17:
                    if (!(cnt1_5 < 1)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    ++cnt1_5;
                    return [3 /*break*/, 17];
                case 20:
                    var_783 = 0;
                    return [2 /*return*/];
            }
        });
    });
} /*
ヴェネチアホテルに設置してあるPC設定
口座、アイテム手配等
*/
function func802() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_6, cnt1_7, cnt1_8, cnt1_9, cnt1_10, cnt1_11, cnt1_12, cnt1_13, cnt1_14, cnt1_15, cnt2_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(802);
                    var_243 = 0;
                    DSPLAY(audio_id = 210);
                    var_783 = 1;
                    cnt1_6 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_6 < 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_6;
                    return [3 /*break*/, 1];
                case 4:
                    var_783 = 2;
                    cnt1_7 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_7 < 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    ++cnt1_7;
                    return [3 /*break*/, 5];
                case 8:
                    var_783 = 3;
                    cnt1_8 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_8 < 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    ++cnt1_8;
                    return [3 /*break*/, 9];
                case 12:
                    var_783 = 4;
                    cnt1_9 = 0;
                    _a.label = 13;
                case 13:
                    if (!(cnt1_9 < 5)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    ++cnt1_9;
                    return [3 /*break*/, 13];
                case 16:
                    var_783 = 5;
                    cnt1_10 = 0;
                    _a.label = 17;
                case 17:
                    if (!(cnt1_10 < 1)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    ++cnt1_10;
                    return [3 /*break*/, 17];
                case 20:
                    var_783 = 6;
                    cnt1_11 = 0;
                    _a.label = 21;
                case 21:
                    if (!(cnt1_11 < 1)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent();
                    _a.label = 23;
                case 23:
                    ++cnt1_11;
                    return [3 /*break*/, 21];
                case 24:
                    var_783 = 7;
                    cnt1_12 = 0;
                    _a.label = 25;
                case 25:
                    if (!(cnt1_12 < 1)) return [3 /*break*/, 28];
                    return [4 /*yield*/, func337()];
                case 26:
                    _a.sent();
                    _a.label = 27;
                case 27:
                    ++cnt1_12;
                    return [3 /*break*/, 25];
                case 28:
                    var_783 = 5;
                    cnt1_13 = 0;
                    _a.label = 29;
                case 29:
                    if (!(cnt1_13 < 1)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func337()];
                case 30:
                    _a.sent();
                    _a.label = 31;
                case 31:
                    ++cnt1_13;
                    return [3 /*break*/, 29];
                case 32:
                    var_783 = 8;
                    cnt1_14 = 0;
                    _a.label = 33;
                case 33:
                    if (!(cnt1_14 < 1)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func337()];
                case 34:
                    _a.sent();
                    _a.label = 35;
                case 35:
                    ++cnt1_14;
                    return [3 /*break*/, 33];
                case 36:
                    var_783 = 9;
                    if (!(var_1014 == 0)) return [3 /*break*/, 56];
                    return [4 /*yield*/, func094()];
                case 37:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾍﾟﾘｰｺﾛ「ボス…　私です。ﾍﾟﾘｰｺﾛです」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 38:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 39:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 40:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「私ならば、今のボスのお力に";
                    var_297 = "　なれるでしょう…";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 41:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 42:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 43:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 44:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「私が手に入れられるｱｲﾃﾑの情報を";
                    var_297 = "　そのパソコンに送信します。";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 45:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 46:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 47:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 48:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「少々費用はかかりますが、";
                    var_297 = "　必ず手に入れてみせます。";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 49:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 50:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 51:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 52:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「ｱｲﾃﾑはダンジョンの１階に";
                    var_297 = "　届けておきましょう」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 53:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 54:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 55:
                    _a.sent();
                    var_1014 = 1;
                    _a.label = 56;
                case 56:
                    if (var_991[0][1] == 0) {
                        var_1013 = 0;
                    }
                    return [4 /*yield*/, func094()];
                case 57:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    if (var_1013 != 0) {
                        comments_row1 = "ﾍﾟﾘｰｺﾛ「ボス…何を仕入れてきましょう」";
                        comments_row2 = "";
                    }
                    if (var_1013 == 0) {
                        comments_row1 = "ﾍﾟﾘｰｺﾛ「ボス…まだ何も手に入りません」";
                        comments_row2 = "";
                    }
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 58:
                    _a.sent();
                    cnt1_15 = 0;
                    _a.label = 59;
                case 59:
                    if (!(cnt1_15 < 5)) return [3 /*break*/, 62];
                    return [4 /*yield*/, func337()];
                case 60:
                    _a.sent();
                    _a.label = 61;
                case 61:
                    ++cnt1_15;
                    return [3 /*break*/, 59];
                case 62:
                    if (!(var_1013 == 0)) return [3 /*break*/, 69];
                    cnt2_1 = 0;
                    _a.label = 63;
                case 63:
                    if (!(cnt2_1 < 10)) return [3 /*break*/, 66];
                    return [4 /*yield*/, func337()];
                case 64:
                    _a.sent();
                    _a.label = 65;
                case 65:
                    ++cnt2_1;
                    return [3 /*break*/, 63];
                case 66: return [4 /*yield*/, func801()];
                case 67:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 68:
                    _a.sent();
                    return [2 /*return*/];
                case 69: return [4 /*yield*/, func340()];
                case 70:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 71:
                    _a.sent();
                    var_198 = 0;
                    var_1206 = 1;
                    var_1881 = var_1013 * 20 + 37 + 30;
                    var_228 = 45;
                    var_225 = 1;
                    return [4 /*yield*/, func803()];
                case 72:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func803() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(803);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent();
                    if (!(var_239 == 1)) return [3 /*break*/, 6];
                    var_1206 = 0;
                    var_783 = 0;
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func801()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
                case 6:
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 9];
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func051()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, func805()];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
                case 9:
                    if (!(var_259 == 1)) return [3 /*break*/, 17];
                    if (!(var_225 != var_1013)) return [3 /*break*/, 13];
                    var_228 = var_228 + 22;
                    var_225 = var_225 + 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, func803()];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
                case 13:
                    if (!(var_225 == var_1013)) return [3 /*break*/, 17];
                    var_228 = 45;
                    var_225 = 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, func803()];
                case 16:
                    _a.sent();
                    return [2 /*return*/];
                case 17:
                    if (!(var_255 == 1)) return [3 /*break*/, 25];
                    if (!(var_225 != 1)) return [3 /*break*/, 21];
                    var_228 = var_228 - 22;
                    var_225 = var_225 - 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, func803()];
                case 20:
                    _a.sent();
                    return [2 /*return*/];
                case 21:
                    if (!(var_225 == 1)) return [3 /*break*/, 25];
                    var_228 = 45 + (var_1013 - 1) * 22;
                    var_225 = var_1013;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, func803()];
                case 24:
                    _a.sent();
                    return [2 /*return*/];
                case 25: return [4 /*yield*/, func803()];
                case 26:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func804() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(804);
                    color(0, 0, 0);
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(5, 35);
                    gcopy(12, 0, 0, 332, var_1881 - 30);
                    pos(5, 273);
                    gcopy(12, 0, 0, 332, 62);
                    color(255, 255, 255);
                    line(9, 37, 330, 37);
                    line(9, var_1881, 330, var_1881);
                    line(8, 38, 8, var_1881 - 2);
                    line(332, 38, 332, var_1881 - 2);
                    pset(9, 38);
                    pset(331, 38);
                    pset(9, var_1881 - 1);
                    pset(331, var_1881 - 1);
                    line(9, 275, 330, 275);
                    line(9, 332, 330, 332);
                    line(8, 276, 8, 330);
                    line(332, 276, 332, 330);
                    pset(9, 276);
                    pset(331, 276);
                    pset(9, 331);
                    pset(331, 331);
                    var_1620 = 1;
                    var_230 = 45;
                    cnt1_16 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_16 < var_1013)) return [3 /*break*/, 4];
                    var_2010 = var_991[0][var_1620][0];
                    var_2011 = var_991[0][var_1620][3];
                    var_2012 = var_991[0][var_1620][4];
                    var_2013 = var_991[0][var_1620][5];
                    var_1922 = var_991[0][var_1620][6];
                    var_2014 = var_991[0][var_1620][7];
                    var_2015 = var_991[0][var_1620][11];
                    var_2016 = var_991[0][var_1620][12];
                    var_2017 = var_991[0][var_1620][13];
                    var_2018 = var_991[0][var_1620][14];
                    var_2019 = var_991[0][var_1620][16];
                    var_2020 = var_991[0][var_1620][19];
                    item_list = var_2010;
                    var_487 = var_2017;
                    return [4 /*yield*/, func492()];
                case 2:
                    _a.sent();
                    if (var_2010 > 0) {
                        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                        color(255, 255, 255);
                        pos(40, var_230);
                        if (item_list >= 100 && item_list < 400) {
                            color(0, 255, 0);
                            mes(item_name);
                        }
                        if (item_list >= 400 && item_list < 500) {
                            color(225, 195, 145);
                            mes("" + item_name + "(" + var_2011 + ")");
                        }
                        if (item_list >= 500 && item_list < 800) {
                            color(255, 255, 255);
                            mes(item_name);
                        }
                        if (item_list >= 800 && item_list < 900) {
                            color(0, 255, 255);
                            mes("" + item_name + "(" + var_2014 + ")");
                        }
                        if (item_list >= 900 && item_list < 1000) {
                            color(255, 255, 255);
                            mes(item_name);
                        }
                        if (var_2015 == 1) {
                            var_1925 = 0;
                            pos(260, var_230);
                            color(0, 255, 0);
                            var_482 = 0;
                            var_482 = (var_2011 + var_2012) * 50;
                            var_1925 = var_483 + var_482;
                            var_1925 = var_1925 * var_1036;
                            mes(var_1925);
                        }
                    }
                    var_1620 = var_1620 + 1;
                    var_230 = var_230 + 22;
                    _a.label = 3;
                case 3:
                    ++cnt1_16;
                    return [3 /*break*/, 1];
                case 4:
                    var_2023 = var_991[0][var_225][0];
                    var_2024 = var_991[0][var_225][5];
                    var_2025 = var_991[0][var_225][12];
                    var_2026 = var_991[0][var_225][13];
                    var_2027 = var_991[0][var_225][14];
                    var_2028 = var_991[0][var_225][15];
                    var_2029 = var_991[0][var_225][16];
                    item_list = var_2023;
                    var_487 = var_2026;
                    return [4 /*yield*/, func492()];
                case 5:
                    _a.sent();
                    font("ＭＳ Ｐゴシック", 14, 1);
                    pos(15, 283);
                    color(255, 255, 255);
                    if (item_list < 100 || item_list >= 400) {
                        mes(var_806);
                    }
                    if (item_list >= 100 && item_list < 400 && var_2027 == 0) {
                        mes("" + var_806);
                    }
                    if (item_list >= 100 && item_list < 400 && var_2027 == 1) {
                        mes("" + var_806 + "　空き容量 " + var_2024);
                    }
                    color(255, 255, 255);
                    mes(var_808);
                    color(255, 255, 255);
                    if (var_812 == 1) {
                        color(255, 255, 0);
                    }
                    if (var_812 == 2) {
                        color(255, 180, 90);
                    }
                    if (var_812 == 3) {
                        color(0, 255, 0);
                    }
                    if (var_812 == 4) {
                        color(240, 0, 240);
                    }
                    mes(var_828);
                    color(255, 255, 255);
                    font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                    pos(15, var_228);
                    mes(">");
                    pos(16, var_228);
                    mes(">");
                    pos(17, var_228);
                    mes(">");
                    return [2 /*return*/];
            }
        });
    });
}
function func805() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(805);
                    var_1206 = 0;
                    item_list = var_991[0][var_225][0];
                    var_487 = var_991[0][var_225][13];
                    return [4 /*yield*/, func492()];
                case 1:
                    _a.sent();
                    var_3188 = item_name;
                    var_482 = 0;
                    var_482 = (var_991[0][var_225][3] + var_991[0][var_225][4]) * 50;
                    var_1925 = var_483 + var_482;
                    var_1925 = var_1925 * var_1036;
                    var_3189 = var_1925;
                    if (!(var_415 < var_3189)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func094()];
                case 2:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "それを買うには お金が足りません。";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_3190 = var_3189 - var_415;
                    if (!(var_3190 <= var_1032)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func340()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 4:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "口座のお金を足して買いますか？";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 6:
                    _a.sent();
                    var_245 = 19;
                    var_246 = 45;
                    var_546 = 1;
                    var_3191 = 1;
                    var_548 = 1;
                    return [4 /*yield*/, func839()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
                case 8: return [4 /*yield*/, func340()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 10:
                    _a.sent();
                    var_198 = 0;
                    var_1206 = 1;
                    return [4 /*yield*/, func803()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12: return [4 /*yield*/, func094()];
                case 13:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "【" + var_3188 + "】は";
                    comments_row2 = "" + var_3189 + "G です。";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 15:
                    _a.sent();
                    var_245 = 19;
                    var_246 = 45;
                    var_546 = 1;
                    var_3192 = 1;
                    var_548 = 1;
                    return [4 /*yield*/, func839()];
                case 16:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func806() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(806);
                    var_415 = var_415 - var_3189;
                    return [4 /*yield*/, func807()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func807() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_17, cnt1_18, cnt3_1, cnt3_2, cnt1_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(807);
                    var_1206 = 0;
                    item_list = var_991[0][var_225][0];
                    var_487 = var_991[0][var_225][13];
                    return [4 /*yield*/, func492()];
                case 1:
                    _a.sent();
                    var_3188 = item_name;
                    var_1037 = var_1037 + 1;
                    for (cnt1_17 = 0; cnt1_17 < 30; ++cnt1_17) {
                        var_991[1][var_1037][cnt1_17] = var_991[0][var_225][cnt1_17];
                    }
                    var_991[1][var_1037][11] = 0;
                    var_991[0][var_225][0] = 0;
                    var_1957 = 0;
                    var_447 = 1;
                    var_449 = 2;
                    for (cnt1_18 = 0; cnt1_18 < var_1013; ++cnt1_18) {
                        if (var_991[0][var_447][0] == 0) {
                            for (cnt3_1 = 0; cnt3_1 < 30; ++cnt3_1) {
                                var_991[0][var_447][cnt3_1] = var_991[0][var_449][cnt3_1];
                            }
                            var_1957 = 1;
                        }
                        if (var_1957 == 1) {
                            for (cnt3_2 = 0; cnt3_2 < 30; ++cnt3_2) {
                                var_991[0][var_447][cnt3_2] = var_991[0][var_449][cnt3_2];
                            }
                        }
                        var_447 = var_447 + 1;
                        var_449 = var_449 + 1;
                    }
                    var_1013 = var_1013 - 1;
                    DSPLAY(audio_id = 207);
                    return [4 /*yield*/, func094()];
                case 2:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "" + var_3188 + "ですね…";
                    comments_row2 = "ﾚｸｲｴﾑの大迷宮１階に必ず届けます。";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 3:
                    _a.sent();
                    cnt1_19 = 0;
                    _a.label = 4;
                case 4:
                    if (!(cnt1_19 < 10)) return [3 /*break*/, 7];
                    return [4 /*yield*/, func337()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    ++cnt1_19;
                    return [3 /*break*/, 4];
                case 7: return [4 /*yield*/, func801()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func808() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_20, cnt2_2, cnt2_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(808);
                    var_836 = var_62;
                    var_837 = current_floor;
                    if (var_837 <= 3) {
                        var_1013 = 0;
                    }
                    if (var_837 >= 4) {
                        var_1013 = 1;
                    }
                    if (var_837 >= 8) {
                        var_1013 = 2;
                    }
                    if (var_837 >= 12) {
                        var_1013 = 3;
                    }
                    if (var_837 >= 15) {
                        var_1013 = 4;
                    }
                    if (var_837 >= 18) {
                        var_1013 = 5;
                    }
                    if (var_837 >= 20) {
                        var_1013 = 6;
                    }
                    if (var_837 >= 22) {
                        var_1013 = 7;
                    }
                    if (var_837 >= 25) {
                        var_1013 = 8;
                    }
                    var_1036 = rnd(3);
                    var_1036 = var_1036 + 2;
                    var_683 = 1;
                    cnt1_20 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_20 < 10)) return [3 /*break*/, 4];
                    for (cnt2_2 = 0; cnt2_2 < 30; ++cnt2_2) {
                        var_991[0][var_683][cnt2_2] = 0;
                    }
                    var_866 = 0;
                    var_1736 = rnd(100);
                    if (var_1736 >= 0 && var_1736 < 5) {
                        var_1735 = 6;
                    }
                    if (var_1736 >= 5 && var_1736 < 10) {
                        var_1735 = 4;
                    }
                    if (var_1736 >= 10 && var_1736 < 60) {
                        var_1735 = 1;
                    }
                    if (var_1736 >= 60 && var_1736 < 70) {
                        var_1735 = 5;
                    }
                    if (var_1736 >= 70 && var_1736 < 85) {
                        var_1735 = 3;
                    }
                    if (var_1736 >= 85 && var_1736 < 100) {
                        var_1735 = 9;
                    }
                    if (var_262 == 1) {
                        var_62 = 2;
                    }
                    return [4 /*yield*/, func385()];
                case 2:
                    _a.sent();
                    if (var_262 == 1) {
                        var_62 = 0;
                    }
                    for (cnt2_3 = 0; cnt2_3 < 30; ++cnt2_3) {
                        var_991[0][var_683][cnt2_3] = var_78[var_866]["Var" + cnt2_3];
                    }
                    var_991[0][var_683][11] = 1;
                    var_991[0][var_683][12] = 0;
                    var_991[0][var_683][14] = 0;
                    var_991[0][var_683][15] = 0;
                    var_683 = var_683 + 1;
                    _a.label = 3;
                case 3:
                    ++cnt1_20;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function func809() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_21, cnt1_22, cnt1_23, cnt1_24, cnt1_25, cnt1_26, cnt1_27, cnt1_28, cnt1_29;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(809);
                    DSPLAY(audio_id = 210);
                    var_783 = 1;
                    cnt1_21 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_21 < 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_21;
                    return [3 /*break*/, 1];
                case 4:
                    var_783 = 2;
                    cnt1_22 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_22 < 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    ++cnt1_22;
                    return [3 /*break*/, 5];
                case 8:
                    var_783 = 3;
                    cnt1_23 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_23 < 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    ++cnt1_23;
                    return [3 /*break*/, 9];
                case 12:
                    var_783 = 4;
                    cnt1_24 = 0;
                    _a.label = 13;
                case 13:
                    if (!(cnt1_24 < 5)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    ++cnt1_24;
                    return [3 /*break*/, 13];
                case 16:
                    var_783 = 5;
                    cnt1_25 = 0;
                    _a.label = 17;
                case 17:
                    if (!(cnt1_25 < 1)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    ++cnt1_25;
                    return [3 /*break*/, 17];
                case 20:
                    var_783 = 6;
                    cnt1_26 = 0;
                    _a.label = 21;
                case 21:
                    if (!(cnt1_26 < 1)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent();
                    _a.label = 23;
                case 23:
                    ++cnt1_26;
                    return [3 /*break*/, 21];
                case 24:
                    var_783 = 7;
                    cnt1_27 = 0;
                    _a.label = 25;
                case 25:
                    if (!(cnt1_27 < 1)) return [3 /*break*/, 28];
                    return [4 /*yield*/, func337()];
                case 26:
                    _a.sent();
                    _a.label = 27;
                case 27:
                    ++cnt1_27;
                    return [3 /*break*/, 25];
                case 28:
                    var_783 = 5;
                    cnt1_28 = 0;
                    _a.label = 29;
                case 29:
                    if (!(cnt1_28 < 1)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func337()];
                case 30:
                    _a.sent();
                    _a.label = 31;
                case 31:
                    ++cnt1_28;
                    return [3 /*break*/, 29];
                case 32:
                    var_783 = 12;
                    cnt1_29 = 0;
                    _a.label = 33;
                case 33:
                    if (!(cnt1_29 < 1)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func337()];
                case 34:
                    _a.sent();
                    _a.label = 35;
                case 35:
                    ++cnt1_29;
                    return [3 /*break*/, 33];
                case 36:
                    var_783 = 13;
                    if (!(var_1039 == 0)) return [3 /*break*/, 68];
                    return [4 /*yield*/, func094()];
                case 37:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾎﾟﾙﾎﾟ「ブフゥ～～～～…」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 38:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 39:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 40:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「ボス…ダンジョンの一人旅は危険です」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 41:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 42:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 43:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 44:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「ダンジョン内で仲間と出会えれば";
                    var_297 = "　冒険がグッと楽になるでしょう…」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 45:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 46:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 47:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 48:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「ブフゥ～～～…」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 49:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 50:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 51:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 52:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「しかし問題は、";
                    var_297 = "　毎回必ず出会えるわけではないところ」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 53:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 54:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 55:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 56:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「私ならば、有能な人材を";
                    var_297 = "　あらかじめ１階に呼ぶことが可能です」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 57:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 58:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 59:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 60:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「そのための費用として";
                    var_297 = "　2000Gかかってしまいますが…」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 61:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 62:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 63:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 64:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「ブフゥ～～～…」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 65:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 66:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 67:
                    _a.sent();
                    var_1039 = 1;
                    _a.label = 68;
                case 68:
                    if (!(var_1040 == 1)) return [3 /*break*/, 73];
                    return [4 /*yield*/, func094()];
                case 69:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾎﾟﾙﾎﾟ「ﾚｸｲｴﾑの大迷宮１階に";
                    comments_row2 = "　　　ヒマなやつを呼んであります」";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 70:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 71:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func812()];
                case 72:
                    _a.sent();
                    return [2 /*return*/];
                case 73: return [4 /*yield*/, func094()];
                case 74:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾎﾟﾙﾎﾟ「ボス…　2000Gで";
                    comments_row2 = "　　　仲間を１階に呼んでおきますか？」";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 75:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 76:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 77:
                    _a.sent();
                    var_245 = 19;
                    var_246 = 45;
                    var_546 = 1;
                    var_3193 = 1;
                    var_548 = 1;
                    return [4 /*yield*/, func839()];
                case 78:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func810() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(810);
                    if (!(var_415 >= 2000)) return [3 /*break*/, 5];
                    DSPLAY(audio_id = 207);
                    var_415 = var_415 - 2000;
                    var_1040 = 1;
                    return [4 /*yield*/, func094()];
                case 1:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「わかりました…。手の空いている者を";
                    comments_row2 = "　ﾚｸｲｴﾑの大迷宮１階に呼んでおきます」";
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
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func812()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
                case 5:
                    if (!(var_415 < 2000)) return [3 /*break*/, 15];
                    return [4 /*yield*/, func094()];
                case 6:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「おっと…";
                    comments_row2 = "　お金が足りないようですな」";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 8:
                    _a.sent();
                    var_3190 = 2000 - var_415;
                    if (!(var_3190 <= var_1032)) return [3 /*break*/, 13];
                    return [4 /*yield*/, func094()];
                case 9:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「口座のお金を足しますか？」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 11:
                    _a.sent();
                    var_245 = 19;
                    var_246 = 45;
                    var_546 = 1;
                    var_3193 = 2;
                    var_548 = 1;
                    return [4 /*yield*/, func839()];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
                case 13:
                    var_198 = 0;
                    return [4 /*yield*/, func812()];
                case 14:
                    _a.sent();
                    return [2 /*return*/];
                case 15: return [4 /*yield*/, func811()];
                case 16:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func811() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(811);
                    var_415 = 0;
                    var_1032 = var_1032 - var_3190;
                    var_1040 = 1;
                    DSPLAY(audio_id = 207);
                    return [4 /*yield*/, func094()];
                case 1:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「わかりました…。手の空いている者を";
                    comments_row2 = "　ﾚｸｲｴﾑの大迷宮１階に呼んでおきます」";
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
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func812()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func812() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_30, cnt1_31, cnt1_32, cnt1_33, cnt1_34;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(812);
                    var_198 = 0;
                    DSPLAY(audio_id = 211);
                    var_783 = 5;
                    cnt1_30 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_30 < 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_30;
                    return [3 /*break*/, 1];
                case 4:
                    var_783 = 4;
                    cnt1_31 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_31 < 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    ++cnt1_31;
                    return [3 /*break*/, 5];
                case 8:
                    var_783 = 3;
                    cnt1_32 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_32 < 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    ++cnt1_32;
                    return [3 /*break*/, 9];
                case 12:
                    var_783 = 2;
                    cnt1_33 = 0;
                    _a.label = 13;
                case 13:
                    if (!(cnt1_33 < 1)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    ++cnt1_33;
                    return [3 /*break*/, 13];
                case 16:
                    var_783 = 1;
                    cnt1_34 = 0;
                    _a.label = 17;
                case 17:
                    if (!(cnt1_34 < 1)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    ++cnt1_34;
                    return [3 /*break*/, 17];
                case 20:
                    var_783 = 0;
                    return [4 /*yield*/, func009()];
                case 21:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func813() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_35, cnt1_36, cnt1_37, cnt1_38, cnt1_39, cnt1_40, cnt1_41, cnt1_42, cnt1_43;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(813);
                    DSPLAY(audio_id = 210);
                    var_783 = 1;
                    cnt1_35 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_35 < 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_35;
                    return [3 /*break*/, 1];
                case 4:
                    var_783 = 2;
                    cnt1_36 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_36 < 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    ++cnt1_36;
                    return [3 /*break*/, 5];
                case 8:
                    var_783 = 3;
                    cnt1_37 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_37 < 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    ++cnt1_37;
                    return [3 /*break*/, 9];
                case 12:
                    var_783 = 4;
                    cnt1_38 = 0;
                    _a.label = 13;
                case 13:
                    if (!(cnt1_38 < 5)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    ++cnt1_38;
                    return [3 /*break*/, 13];
                case 16:
                    var_783 = 5;
                    cnt1_39 = 0;
                    _a.label = 17;
                case 17:
                    if (!(cnt1_39 < 1)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    ++cnt1_39;
                    return [3 /*break*/, 17];
                case 20:
                    var_783 = 6;
                    cnt1_40 = 0;
                    _a.label = 21;
                case 21:
                    if (!(cnt1_40 < 1)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent();
                    _a.label = 23;
                case 23:
                    ++cnt1_40;
                    return [3 /*break*/, 21];
                case 24:
                    var_783 = 7;
                    cnt1_41 = 0;
                    _a.label = 25;
                case 25:
                    if (!(cnt1_41 < 1)) return [3 /*break*/, 28];
                    return [4 /*yield*/, func337()];
                case 26:
                    _a.sent();
                    _a.label = 27;
                case 27:
                    ++cnt1_41;
                    return [3 /*break*/, 25];
                case 28:
                    var_783 = 5;
                    cnt1_42 = 0;
                    _a.label = 29;
                case 29:
                    if (!(cnt1_42 < 1)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func337()];
                case 30:
                    _a.sent();
                    _a.label = 31;
                case 31:
                    ++cnt1_42;
                    return [3 /*break*/, 29];
                case 32:
                    var_783 = 14;
                    cnt1_43 = 0;
                    _a.label = 33;
                case 33:
                    if (!(cnt1_43 < 1)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func337()];
                case 34:
                    _a.sent();
                    _a.label = 35;
                case 35:
                    ++cnt1_43;
                    return [3 /*break*/, 33];
                case 36:
                    var_783 = 15;
                    if (!(var_830 == 0)) return [3 /*break*/, 49];
                    return [4 /*yield*/, func094()];
                case 37:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「はい…こちらはSPW財団です」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 38:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 39:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 40:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「前回の冒険でやられた敵の";
                    var_297 = "　能力を調べることができます」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 41:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 42:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 43:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 44:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「調査費用は1000Gです」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 45:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 46:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 47:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func817()];
                case 48:
                    _a.sent();
                    return [2 /*return*/];
                case 49:
                    var_437 = var_830;
                    return [4 /*yield*/, func626()];
                case 50:
                    _a.sent();
                    var_3194 = "" + var_891;
                    return [4 /*yield*/, func094()];
                case 51:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「はい…こちらはSPW財団です」";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 52:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 53:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 54:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「" + var_3194 + "に";
                    var_297 = "　やられてしまったようですね？」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 55:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 56:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 57:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 58:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「1000Gの調査費で";
                    var_297 = "　敵の能力を調べられます」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 59:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 60:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 61:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 62:
                    _a.sent();
                    var_245 = 19;
                    var_246 = 45;
                    var_546 = 1;
                    var_3195 = 1;
                    var_548 = 1;
                    return [4 /*yield*/, func839()];
                case 63:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func814() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(814);
                    if (!(var_415 >= 1000)) return [3 /*break*/, 2];
                    DSPLAY(audio_id = 207);
                    var_415 = var_415 - 1000;
                    var_198 = 0;
                    return [4 /*yield*/, func816()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    if (!(var_415 < 1000)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func094()];
                case 3:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「おや…";
                    comments_row2 = "　お金が足りないようです」";
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
                    _a.sent();
                    var_3190 = 1000 - var_415;
                    if (!(var_3190 <= var_1032)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func094()];
                case 6:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「口座のお金を足しますか？」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 8:
                    _a.sent();
                    var_245 = 19;
                    var_246 = 45;
                    var_546 = 1;
                    var_3195 = 2;
                    var_548 = 1;
                    return [4 /*yield*/, func839()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
                case 10:
                    var_198 = 0;
                    return [4 /*yield*/, func817()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12: return [4 /*yield*/, func815()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func815() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(815);
                    var_415 = 0;
                    DSPLAY(audio_id = 207);
                    var_1032 = var_1032 - var_3190;
                    var_198 = 0;
                    return [4 /*yield*/, func816()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func816() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_44;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(816);
                    var_2233 = var_1038 + 1;
                    var_2234 = 0;
                    for (cnt1_44 = 0; cnt1_44 < var_2233; ++cnt1_44) {
                        if (var_989[cnt1_44] == var_830) {
                            var_2234 = 1;
                            var_1610 = cnt1_44;
                            break;
                        }
                    }
                    if (var_2234 == 0) {
                        var_1038 = var_1038 + 1;
                        var_989[var_1038] = var_830;
                        var_1610 = var_1038;
                    }
                    var_830 = 0;
                    var_1609 = 1;
                    var_2357 = 1;
                    DSPLAY(audio_id = 212);
                    var_502 = 1;
                    return [4 /*yield*/, func356()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func817() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_45, cnt1_46, cnt1_47, cnt1_48, cnt1_49;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(817);
                    var_2357 = 0;
                    var_198 = 0;
                    DSPLAY(audio_id = 211);
                    var_783 = 5;
                    cnt1_45 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_45 < 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_45;
                    return [3 /*break*/, 1];
                case 4:
                    var_783 = 4;
                    cnt1_46 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_46 < 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    ++cnt1_46;
                    return [3 /*break*/, 5];
                case 8:
                    var_783 = 3;
                    cnt1_47 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_47 < 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    ++cnt1_47;
                    return [3 /*break*/, 9];
                case 12:
                    var_783 = 2;
                    cnt1_48 = 0;
                    _a.label = 13;
                case 13:
                    if (!(cnt1_48 < 1)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    ++cnt1_48;
                    return [3 /*break*/, 13];
                case 16:
                    var_783 = 1;
                    cnt1_49 = 0;
                    _a.label = 17;
                case 17:
                    if (!(cnt1_49 < 1)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    ++cnt1_49;
                    return [3 /*break*/, 17];
                case 20:
                    var_783 = 0;
                    return [4 /*yield*/, func009()];
                case 21:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func818() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(818);
                    var_243 = 0;
                    DSPLAY(audio_id = 212);
                    if (!(var_404 == 0)) return [3 /*break*/, 5];
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "パソコンが置いてある。";
                    comments_row2 = "まだ使えないようだ…";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func340()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 3:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
                case 5:
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "何をしますか？";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 6:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    var_245 = 19;
                    var_246 = 45;
                    var_3196 = 0;
                    var_1204 = 1;
                    return [4 /*yield*/, func051()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, func819()];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func819() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(819);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent();
                    if (!(var_404 >= 1)) return [3 /*break*/, 18];
                    if (!(var_259 == 1 && var_3196 != 4)) return [3 /*break*/, 6];
                    var_246 = var_246 + 16;
                    var_3196 = var_3196 + 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, func819()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
                case 6:
                    if (!(var_259 == 1 && var_3196 == 4)) return [3 /*break*/, 10];
                    var_246 = 45;
                    var_3196 = 0;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, func819()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
                case 10:
                    if (!(var_255 == 1 && var_3196 != 0)) return [3 /*break*/, 14];
                    var_246 = var_246 - 16;
                    var_3196 = var_3196 - 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func819()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
                case 14:
                    if (!(var_255 == 1 && var_3196 == 0)) return [3 /*break*/, 18];
                    var_246 = 109;
                    var_3196 = 4;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, func819()];
                case 17:
                    _a.sent();
                    return [2 /*return*/];
                case 18:
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 33];
                    if (!(var_3196 == 0)) return [3 /*break*/, 21];
                    var_1204 = 0;
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func051()];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, func796()];
                case 20:
                    _a.sent();
                    return [2 /*return*/];
                case 21:
                    if (!(var_3196 == 1)) return [3 /*break*/, 24];
                    var_1204 = 0;
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func051()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, func797()];
                case 23:
                    _a.sent();
                    return [2 /*return*/];
                case 24:
                    if (!(var_3196 == 2)) return [3 /*break*/, 27];
                    var_1204 = 0;
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func051()];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, func802()];
                case 26:
                    _a.sent();
                    return [2 /*return*/];
                case 27:
                    if (!(var_3196 == 3)) return [3 /*break*/, 30];
                    var_1204 = 0;
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func051()];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, func809()];
                case 29:
                    _a.sent();
                    return [2 /*return*/];
                case 30:
                    if (!(var_3196 == 4)) return [3 /*break*/, 33];
                    var_1204 = 0;
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func051()];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, func813()];
                case 32:
                    _a.sent();
                    return [2 /*return*/];
                case 33:
                    if (!(var_239 == 1)) return [3 /*break*/, 36];
                    var_1204 = 0;
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func051()];
                case 34:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 35:
                    _a.sent();
                    return [2 /*return*/];
                case 36: return [4 /*yield*/, func819()];
                case 37:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func820() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(820);
                    var_3197 = 0;
                    if (var_523 >= 1) {
                        var_3197++;
                    }
                    if (var_524 >= 1) {
                        var_3197++;
                    }
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent();
                    if (!(var_259 == 1)) return [3 /*break*/, 34];
                    if (!(var_3197 == 2 && var_513 != 5)) return [3 /*break*/, 6];
                    var_516 = var_516 + 16;
                    var_513 = var_513 + 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
                case 6:
                    if (!(var_3197 == 2 && var_513 == 5)) return [3 /*break*/, 10];
                    var_516 = 88;
                    var_513 = 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
                case 10:
                    if (!(var_3197 == 1 && var_513 != 4)) return [3 /*break*/, 14];
                    var_516 = var_516 + 16;
                    var_513 = var_513 + 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
                case 14:
                    if (!(var_3197 == 1 && var_513 == 4)) return [3 /*break*/, 18];
                    var_516 = 88;
                    var_513 = 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 17:
                    _a.sent();
                    return [2 /*return*/];
                case 18:
                    if (!(var_526 >= 1 && var_513 != 3)) return [3 /*break*/, 22];
                    var_516 = var_516 + 16;
                    var_513 = var_513 + 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 21:
                    _a.sent();
                    return [2 /*return*/];
                case 22:
                    if (!(var_526 >= 1 && var_513 == 3)) return [3 /*break*/, 26];
                    var_516 = 88;
                    var_513 = 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 25:
                    _a.sent();
                    return [2 /*return*/];
                case 26:
                    if (!(var_404 >= 1 && var_513 != 2)) return [3 /*break*/, 30];
                    var_516 = var_516 + 16;
                    var_513 = var_513 + 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 29:
                    _a.sent();
                    return [2 /*return*/];
                case 30:
                    if (!(var_404 >= 1 && var_513 == 2)) return [3 /*break*/, 34];
                    var_516 = 88;
                    var_513 = 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 33:
                    _a.sent();
                    return [2 /*return*/];
                case 34:
                    if (!(var_255 == 1)) return [3 /*break*/, 66];
                    if (!(var_3197 == 2 && var_513 != 1)) return [3 /*break*/, 38];
                    var_516 = var_516 - 16;
                    var_513 = var_513 - 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 35:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 36:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 37:
                    _a.sent();
                    return [2 /*return*/];
                case 38:
                    if (!(var_3197 == 2 && var_513 == 1)) return [3 /*break*/, 42];
                    var_516 = 152;
                    var_513 = 5;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 39:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 40:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 41:
                    _a.sent();
                    return [2 /*return*/];
                case 42:
                    if (!(var_3197 == 1 && var_513 != 1)) return [3 /*break*/, 46];
                    var_516 = var_516 - 16;
                    var_513 = var_513 - 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 43:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 44:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 45:
                    _a.sent();
                    return [2 /*return*/];
                case 46:
                    if (!(var_3197 == 1 && var_513 == 1)) return [3 /*break*/, 50];
                    var_516 = 136;
                    var_513 = 4;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 47:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 48:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 49:
                    _a.sent();
                    return [2 /*return*/];
                case 50:
                    if (!(var_526 >= 1 && var_513 != 1)) return [3 /*break*/, 54];
                    var_516 = var_516 - 16;
                    var_513 = var_513 - 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 51:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 52:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 53:
                    _a.sent();
                    return [2 /*return*/];
                case 54:
                    if (!(var_526 >= 1 && var_513 == 1)) return [3 /*break*/, 58];
                    var_516 = 120;
                    var_513 = 3;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 55:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 56:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 57:
                    _a.sent();
                    return [2 /*return*/];
                case 58:
                    if (!(var_404 >= 1 && var_513 != 1)) return [3 /*break*/, 62];
                    var_516 = var_516 - 16;
                    var_513 = var_513 - 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 59:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 60:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 61:
                    _a.sent();
                    return [2 /*return*/];
                case 62:
                    if (!(var_404 >= 1 && var_513 == 1)) return [3 /*break*/, 66];
                    var_516 = 104;
                    var_513 = 2;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 63:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 64:
                    _a.sent();
                    return [4 /*yield*/, func820()];
                case 65:
                    _a.sent();
                    return [2 /*return*/];
                case 66:
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 87];
                    if (!(var_513 == 1)) return [3 /*break*/, 69];
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    var_793 = 1;
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    var_629 = 1;
                    return [4 /*yield*/, func821()];
                case 67:
                    _a.sent();
                    return [4 /*yield*/, func166()];
                case 68:
                    _a.sent();
                    return [2 /*return*/];
                case 69:
                    if (!(var_513 == 2)) return [3 /*break*/, 72];
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    var_793 = 2;
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    var_629 = 1;
                    return [4 /*yield*/, func821()];
                case 70:
                    _a.sent();
                    return [4 /*yield*/, func166()];
                case 71:
                    _a.sent();
                    return [2 /*return*/];
                case 72:
                    if (!(var_513 == 3)) return [3 /*break*/, 75];
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    var_793 = 3;
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    var_629 = 1;
                    return [4 /*yield*/, func821()];
                case 73:
                    _a.sent();
                    return [4 /*yield*/, func166()];
                case 74:
                    _a.sent();
                    return [2 /*return*/];
                case 75:
                    if (!(var_513 == 4)) return [3 /*break*/, 84];
                    if (!(var_524 == 0 && var_523 >= 1)) return [3 /*break*/, 78];
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    var_793 = 4;
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    var_629 = 1;
                    return [4 /*yield*/, func821()];
                case 76:
                    _a.sent();
                    return [4 /*yield*/, func166()];
                case 77:
                    _a.sent();
                    return [2 /*return*/];
                case 78:
                    if (!(var_524 >= 1 && var_523 == 0)) return [3 /*break*/, 81];
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    var_793 = 0;
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    var_629 = 1;
                    return [4 /*yield*/, func821()];
                case 79:
                    _a.sent();
                    return [4 /*yield*/, func166()];
                case 80:
                    _a.sent();
                    return [2 /*return*/];
                case 81:
                    if (!(var_524 >= 1 && var_523 >= 1)) return [3 /*break*/, 84];
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    var_793 = 0;
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    var_629 = 1;
                    return [4 /*yield*/, func821()];
                case 82:
                    _a.sent();
                    return [4 /*yield*/, func166()];
                case 83:
                    _a.sent();
                    return [2 /*return*/];
                case 84:
                    if (!(var_513 == 5)) return [3 /*break*/, 87];
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    var_793 = 4;
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    var_629 = 1;
                    return [4 /*yield*/, func821()];
                case 85:
                    _a.sent();
                    return [4 /*yield*/, func166()];
                case 86:
                    _a.sent();
                    return [2 /*return*/];
                case 87:
                    if (!(var_239 == 1)) return [3 /*break*/, 90];
                    var_198 = 0;
                    DSPLAY(audio_id = 212);
                    var_512 = 0;
                    return [4 /*yield*/, func051()];
                case 88:
                    _a.sent();
                    return [4 /*yield*/, func057()];
                case 89:
                    _a.sent();
                    return [2 /*return*/];
                case 90: return [4 /*yield*/, func820()];
                case 91:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func821() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_50, cnt1_51, cnt1_52;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(821);
                    var_508 = 0;
                    var_499 = 0;
                    var_980 = 1;
                    gsel(19);
                    color(1, 1, 1);
                    boxf(left = 0, top1 = 0, right = 680, bottom = 680);
                    gsel(0);
                    var_311 = 0;
                    var_312 = 1;
                    cnt1_50 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_50 < 10)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    var_311 = var_311 + 25;
                    if (var_311 >= 255) {
                        var_311 = 255;
                    }
                    _a.label = 3;
                case 3:
                    ++cnt1_50;
                    return [3 /*break*/, 1];
                case 4:
                    cnt1_51 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_51 < 4)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    ++cnt1_51;
                    return [3 /*break*/, 5];
                case 8:
                    var_311 = 255;
                    var_312 = 0;
                    cnt1_52 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_52 < 10)) return [3 /*break*/, 15];
                    redraw(0);
                    return [4 /*yield*/, func168()];
                case 10:
                    _a.sent();
                    color(0, 0, 0);
                    gmode(4, null, null, var_311);
                    pos(0, 0);
                    gcopy(19, 0, 0, 680, 680);
                    if (!(var_10 >= 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func338()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    redraw(1);
                    return [4 /*yield*/, await_(var_686)];
                case 13:
                    _a.sent();
                    var_311 = var_311 - 25;
                    if (var_311 <= 0) {
                        var_311 = 0;
                    }
                    _a.label = 14;
                case 14:
                    ++cnt1_52;
                    return [3 /*break*/, 9];
                case 15: return [2 /*return*/];
            }
        });
    });
}
function func822() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_53, cnt1_54, cnt1_55;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(822);
                    gsel(19);
                    color(1, 1, 1);
                    boxf(left = 0, top1 = 0, right = 680, bottom = 680);
                    gsel(0);
                    var_311 = 0;
                    cnt1_53 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_53 < 10)) return [3 /*break*/, 7];
                    redraw(0);
                    return [4 /*yield*/, func168()];
                case 2:
                    _a.sent();
                    color(0, 0, 0);
                    gmode(4, null, null, var_311);
                    pos(0, 0);
                    gcopy(19, 0, 0, 680, 680);
                    if (!(var_10 >= 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func338()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    redraw(1);
                    return [4 /*yield*/, await_(var_686)];
                case 5:
                    _a.sent();
                    var_311 = var_311 + 25;
                    if (var_311 >= 255) {
                        var_311 = 255;
                    }
                    _a.label = 6;
                case 6:
                    ++cnt1_53;
                    return [3 /*break*/, 1];
                case 7:
                    var_311 = 255;
                    var_312 = 1;
                    cnt1_54 = 0;
                    _a.label = 8;
                case 8:
                    if (!(cnt1_54 < 4)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func337()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    ++cnt1_54;
                    return [3 /*break*/, 8];
                case 11:
                    cnt1_55 = 0;
                    _a.label = 12;
                case 12:
                    if (!(cnt1_55 < 10)) return [3 /*break*/, 15];
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent();
                    var_311 = var_311 - 25;
                    if (var_311 <= 0) {
                        var_311 = 0;
                    }
                    _a.label = 14;
                case 14:
                    ++cnt1_55;
                    return [3 /*break*/, 12];
                case 15:
                    var_311 = 0;
                    var_312 = 0;
                    var_508 = 1;
                    var_499 = 1;
                    var_980 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func823() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(823);
            var_1627 = 0;
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(12, 37);
            gcopy(12, 0, 0, 213, 103 + var_1627);
            color(255, 255, 255);
            if (var_512 == 1) {
                color(150, 150, 150);
            }
            line(15, 39, 220, 39);
            line(15, 136 + var_1627, 220, 136 + var_1627);
            line(14, 40, 14, 134 + var_1627);
            line(222, 40, 222, 134 + var_1627);
            pset(15, 40);
            pset(221, 40);
            pset(15, 135 + var_1627);
            pset(221, 135 + var_1627);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            color(255, 255, 255);
            pos(33, 47);
            mes("口座に入金する");
            mes("口座から引き出す");
            mes("ペリーコロと通信");
            mes("ポルポと通信");
            mes("ＳＰＷ財団と通信");
            color(255, 255, 255);
            if (var_512 == 1) {
                color(150, 150, 150);
            }
            font("MS ゴシック", 16, 1);
            pos(var_245, var_246);
            mes(">");
            pos(var_245 + 1, var_246);
            mes(">");
            pos(var_245 + 2, var_246);
            mes(">");
            return [2 /*return*/];
        });
    });
}
// 各ダンジョンへの入り口設定
function func824() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(824);
                    DSPLAY(audio_id = 212);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ホテルの外へ出ますか？";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    var_245 = 19;
                    var_246 = 45;
                    var_546 = 1;
                    var_3198 = 1;
                    var_548 = 1;
                    return [4 /*yield*/, func839()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func825() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_56, cnt1_57, cnt1_58, cnt1_59, cnt1_60, cnt1_61;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(825);
                    var_68 = 0;
                    return [4 /*yield*/, func723()];
                case 1:
                    _a.sent();
                    var_203 = 0;
                    if (var_3121 >= 1) {
                        var_203 = rnd(4);
                    }
                    var_62 = 1;
                    current_floor = 1;
                    if (current_floor > var_376) {
                        var_376 = current_floor;
                    }
                    if (var_62 == 1 && current_floor > var_377) {
                        var_377 = current_floor;
                    }
                    if (var_62 == 2 && current_floor > var_378) {
                        var_378 = current_floor;
                    }
                    if (var_62 == 3 && current_floor > var_379) {
                        var_379 = current_floor;
                    }
                    var_405 = 0;
                    var_344 = 0;
                    return [4 /*yield*/, func111()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func182()];
                case 3:
                    _a.sent();
                    if (!(var_224 != 20)) return [3 /*break*/, 5];
                    // アイテム追加関数
                    return [4 /*yield*/, func062()];
                case 4:
                    // アイテム追加関数
                    _a.sent();
                    _a.label = 5;
                case 5: return [4 /*yield*/, func502()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, func504()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, func505()];
                case 8:
                    _a.sent();
                    var_373 = 5;
                    cnt1_56 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_56 < 2)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    ++cnt1_56;
                    return [3 /*break*/, 9];
                case 12:
                    var_373 = 4;
                    cnt1_57 = 0;
                    _a.label = 13;
                case 13:
                    if (!(cnt1_57 < 2)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    ++cnt1_57;
                    return [3 /*break*/, 13];
                case 16:
                    var_373 = 3;
                    cnt1_58 = 0;
                    _a.label = 17;
                case 17:
                    if (!(cnt1_58 < 2)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    ++cnt1_58;
                    return [3 /*break*/, 17];
                case 20:
                    var_373 = 2;
                    cnt1_59 = 0;
                    _a.label = 21;
                case 21:
                    if (!(cnt1_59 < 2)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent();
                    _a.label = 23;
                case 23:
                    ++cnt1_59;
                    return [3 /*break*/, 21];
                case 24:
                    var_373 = 1;
                    cnt1_60 = 0;
                    _a.label = 25;
                case 25:
                    if (!(cnt1_60 < 10)) return [3 /*break*/, 28];
                    return [4 /*yield*/, func337()];
                case 26:
                    _a.sent();
                    _a.label = 27;
                case 27:
                    ++cnt1_60;
                    return [3 /*break*/, 25];
                case 28:
                    var_373 = 0;
                    var_262 = 0;
                    if (!(var_407 == 1)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func905()];
                case 29:
                    _a.sent();
                    _a.label = 30;
                case 30:
                    if (!(var_407 == 2)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func933()];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32: return [4 /*yield*/, func076()];
                case 33:
                    _a.sent();
                    cnt1_61 = 0;
                    _a.label = 34;
                case 34:
                    if (!(cnt1_61 < 80)) return [3 /*break*/, 37];
                    return [4 /*yield*/, func339()];
                case 35:
                    _a.sent();
                    _a.label = 36;
                case 36:
                    ++cnt1_61;
                    return [3 /*break*/, 34];
                case 37:
                    DSPLAY(audio_id = 101);
                    return [4 /*yield*/, func006()];
                case 38:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func826() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(826);
                    DSPLAY(audio_id = 212);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "レクイエムの大迷宮へ向かいますか？";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    var_245 = 19;
                    var_246 = 45;
                    var_546 = 1;
                    var_3199 = 1;
                    var_548 = 1;
                    return [4 /*yield*/, func839()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func827() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_62, cnt1_63, cnt1_64, cnt1_65, cnt1_66, cnt1_67;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(827);
                    var_68 = 0;
                    var_535 = 0;
                    return [4 /*yield*/, func723()];
                case 1:
                    _a.sent();
                    if (var_3121 == 0 && var_1037 == 0 && var_415 == 0 && var_1040 == 0) {
                        var_535 = 1;
                    }
                    var_62 = 2;
                    current_floor = 1;
                    if (current_floor > var_376) {
                        var_376 = current_floor;
                    }
                    if (var_62 == 1 && current_floor > var_377) {
                        var_377 = current_floor;
                    }
                    if (var_62 == 2 && current_floor > var_378) {
                        var_378 = current_floor;
                    }
                    if (var_62 == 3 && current_floor > var_379) {
                        var_379 = current_floor;
                    }
                    var_405 = 0;
                    var_344 = 0;
                    var_373 = 5;
                    cnt1_62 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_62 < 2)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++cnt1_62;
                    return [3 /*break*/, 2];
                case 5:
                    var_373 = 4;
                    cnt1_63 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt1_63 < 2)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    ++cnt1_63;
                    return [3 /*break*/, 6];
                case 9:
                    var_373 = 3;
                    cnt1_64 = 0;
                    _a.label = 10;
                case 10:
                    if (!(cnt1_64 < 2)) return [3 /*break*/, 13];
                    return [4 /*yield*/, func337()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    ++cnt1_64;
                    return [3 /*break*/, 10];
                case 13:
                    var_373 = 2;
                    cnt1_65 = 0;
                    _a.label = 14;
                case 14:
                    if (!(cnt1_65 < 2)) return [3 /*break*/, 17];
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16:
                    ++cnt1_65;
                    return [3 /*break*/, 14];
                case 17:
                    var_373 = 1;
                    cnt1_66 = 0;
                    _a.label = 18;
                case 18:
                    if (!(cnt1_66 < 10)) return [3 /*break*/, 21];
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    ++cnt1_66;
                    return [3 /*break*/, 18];
                case 21:
                    var_373 = 0;
                    var_262 = 0;
                    return [4 /*yield*/, func111()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, func182()];
                case 23:
                    _a.sent();
                    if (!(var_224 != 20)) return [3 /*break*/, 25];
                    // アイテム追加関数
                    return [4 /*yield*/, func062()];
                case 24:
                    // アイテム追加関数
                    _a.sent();
                    _a.label = 25;
                case 25: return [4 /*yield*/, func502()];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, func504()];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, func505()];
                case 28:
                    _a.sent();
                    if (!(var_407 == 1)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func905()];
                case 29:
                    _a.sent();
                    _a.label = 30;
                case 30:
                    if (!(var_407 == 2)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func933()];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32: return [4 /*yield*/, func076()];
                case 33:
                    _a.sent();
                    cnt1_67 = 0;
                    _a.label = 34;
                case 34:
                    if (!(cnt1_67 < 80)) return [3 /*break*/, 37];
                    return [4 /*yield*/, func339()];
                case 35:
                    _a.sent();
                    _a.label = 36;
                case 36:
                    ++cnt1_67;
                    return [3 /*break*/, 34];
                case 37:
                    DSPLAY(audio_id = 101);
                    return [4 /*yield*/, func006()];
                case 38:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func828() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(828);
                    DSPLAY(audio_id = 212);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "さらなる試練へ向かいますか？";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    var_245 = 19;
                    var_246 = 45;
                    var_546 = 1;
                    var_3200 = 1;
                    var_548 = 1;
                    return [4 /*yield*/, func839()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func829() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_68, cnt1_69, cnt1_70, cnt1_71, cnt1_72, cnt1_73;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(829);
                    return [4 /*yield*/, func723()];
                case 1:
                    _a.sent();
                    if (!(var_3121 >= 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func831()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
                case 3:
                    var_68 = 0;
                    var_62 = 3;
                    current_floor = 1;
                    if (current_floor > var_376) {
                        var_376 = current_floor;
                    }
                    if (var_62 == 1 && current_floor > var_377) {
                        var_377 = current_floor;
                    }
                    if (var_62 == 2 && current_floor > var_378) {
                        var_378 = current_floor;
                    }
                    if (var_62 == 3 && current_floor > var_379) {
                        var_379 = current_floor;
                    }
                    var_405 = 0;
                    var_344 = 0;
                    var_373 = 5;
                    cnt1_68 = 0;
                    _a.label = 4;
                case 4:
                    if (!(cnt1_68 < 2)) return [3 /*break*/, 7];
                    return [4 /*yield*/, func337()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    ++cnt1_68;
                    return [3 /*break*/, 4];
                case 7:
                    var_373 = 4;
                    cnt1_69 = 0;
                    _a.label = 8;
                case 8:
                    if (!(cnt1_69 < 2)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func337()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    ++cnt1_69;
                    return [3 /*break*/, 8];
                case 11:
                    var_373 = 3;
                    cnt1_70 = 0;
                    _a.label = 12;
                case 12:
                    if (!(cnt1_70 < 2)) return [3 /*break*/, 15];
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14:
                    ++cnt1_70;
                    return [3 /*break*/, 12];
                case 15:
                    var_373 = 2;
                    cnt1_71 = 0;
                    _a.label = 16;
                case 16:
                    if (!(cnt1_71 < 2)) return [3 /*break*/, 19];
                    return [4 /*yield*/, func337()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    ++cnt1_71;
                    return [3 /*break*/, 16];
                case 19:
                    var_373 = 1;
                    cnt1_72 = 0;
                    _a.label = 20;
                case 20:
                    if (!(cnt1_72 < 10)) return [3 /*break*/, 23];
                    return [4 /*yield*/, func337()];
                case 21:
                    _a.sent();
                    _a.label = 22;
                case 22:
                    ++cnt1_72;
                    return [3 /*break*/, 20];
                case 23:
                    var_373 = 0;
                    var_262 = 0;
                    return [4 /*yield*/, func111()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, func182()];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, func062()];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, func502()];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, func504()];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, func505()];
                case 29:
                    _a.sent();
                    var_415 = 0;
                    var_350 = 100;
                    var_567 = 100;
                    var_352 = 15;
                    var_211 = 15;
                    var_840 = 1;
                    var_568 = 0;
                    var_565 = 8;
                    var_566 = 8;
                    if (var_759 == 1) {
                        var_759 = 2;
                    }
                    if (!(var_407 == 1)) return [3 /*break*/, 31];
                    return [4 /*yield*/, func905()];
                case 30:
                    _a.sent();
                    _a.label = 31;
                case 31:
                    if (!(var_407 == 2)) return [3 /*break*/, 33];
                    return [4 /*yield*/, func933()];
                case 32:
                    _a.sent();
                    _a.label = 33;
                case 33:
                    var_205 = 1;
                    return [4 /*yield*/, func231()];
                case 34:
                    _a.sent();
                    return [4 /*yield*/, func076()];
                case 35:
                    _a.sent();
                    cnt1_73 = 0;
                    _a.label = 36;
                case 36:
                    if (!(cnt1_73 < 80)) return [3 /*break*/, 39];
                    return [4 /*yield*/, func339()];
                case 37:
                    _a.sent();
                    _a.label = 38;
                case 38:
                    ++cnt1_73;
                    return [3 /*break*/, 36];
                case 39:
                    DSPLAY(audio_id = 101);
                    return [4 /*yield*/, func006()];
                case 40:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func830() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_74, cnt1_75, cnt1_76, cnt1_77, cnt1_78, cnt1_79;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(830);
                    var_373 = 5;
                    cnt1_74 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_74 < 2)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_74;
                    return [3 /*break*/, 1];
                case 4:
                    var_373 = 4;
                    cnt1_75 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_75 < 2)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    ++cnt1_75;
                    return [3 /*break*/, 5];
                case 8:
                    var_373 = 3;
                    cnt1_76 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt1_76 < 2)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    ++cnt1_76;
                    return [3 /*break*/, 9];
                case 12:
                    var_373 = 2;
                    cnt1_77 = 0;
                    _a.label = 13;
                case 13:
                    if (!(cnt1_77 < 2)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    ++cnt1_77;
                    return [3 /*break*/, 13];
                case 16:
                    var_373 = 1;
                    cnt1_78 = 0;
                    _a.label = 17;
                case 17:
                    if (!(cnt1_78 < 10)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    ++cnt1_78;
                    return [3 /*break*/, 17];
                case 20:
                    var_373 = 0;
                    var_262 = 0;
                    return [4 /*yield*/, func111()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, func233()];
                case 22:
                    _a.sent();
                    var_350 = 100;
                    var_567 = 100;
                    var_352 = 15;
                    var_211 = 15;
                    var_840 = 1;
                    var_568 = 0;
                    var_565 = 8;
                    var_566 = 8;
                    var_68 = 0;
                    var_62 = 3;
                    current_floor = 1;
                    if (current_floor > var_376) {
                        var_376 = current_floor;
                    }
                    if (var_62 == 1 && current_floor > var_377) {
                        var_377 = current_floor;
                    }
                    if (var_62 == 2 && current_floor > var_378) {
                        var_378 = current_floor;
                    }
                    if (var_62 == 3 && current_floor > var_379) {
                        var_379 = current_floor;
                    }
                    var_405 = 0;
                    var_344 = 0;
                    if (!(var_224 != 20)) return [3 /*break*/, 24];
                    // アイテム数追加関数
                    return [4 /*yield*/, func062()];
                case 23:
                    // アイテム数追加関数
                    _a.sent();
                    _a.label = 24;
                case 24: return [4 /*yield*/, func502()];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, func504()];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, func505()];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, func076()];
                case 28:
                    _a.sent();
                    cnt1_79 = 0;
                    _a.label = 29;
                case 29:
                    if (!(cnt1_79 < 80)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func339()];
                case 30:
                    _a.sent();
                    _a.label = 31;
                case 31:
                    ++cnt1_79;
                    return [3 /*break*/, 29];
                case 32:
                    DSPLAY(audio_id = 101);
                    return [4 /*yield*/, func006()];
                case 33:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func831() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_80;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(831);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "アイテムを持っていくことはできません";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    cnt1_80 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_80 < 10)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++cnt1_80;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, func009()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// NPC プッチ神父
function func832() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(832);
                    var_243 = 0;
                    if (!(var_523 == 0)) return [3 /*break*/, 18];
                    return [4 /*yield*/, func094()];
                case 1:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾌﾟｯﾁ神父「【天国に行く方法】…";
                    comments_row2 = "それには必要なものがある」";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 2:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func340()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 4:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "我がスタンド";
                    var_297 = "「ホワイトスネイク」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 8:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「４つのカブト虫」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 12:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "そして";
                    var_297 = "「親友DIOの骨」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 16:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 17:
                    _a.sent();
                    return [2 /*return*/];
                case 18:
                    if (!(var_523 >= 1)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func094()];
                case 19:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾌﾟｯﾁ神父「【一巡後の世界】に";
                    comments_row2 = "　　　　挑戦してみるか？」";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 20:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func340()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 22:
                    _a.sent();
                    DSPLAY(audio_id = 212);
                    var_245 = 19;
                    var_246 = 45;
                    var_546 = 1;
                    var_3201 = 1;
                    var_548 = 1;
                    return [4 /*yield*/, func839()];
                case 23:
                    _a.sent();
                    return [2 /*return*/];
                case 24: return [4 /*yield*/, func833()];
                case 25:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// NPC DIO
function func833() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_4, cnt4_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(833);
                    var_243 = 0;
                    if (!(var_523 == 0)) return [3 /*break*/, 19];
                    var_3202 = 0;
                    var_480 = 1;
                    for (cnt2_4 = 0; cnt2_4 < var_224; ++cnt2_4) {
                        if (var_233[var_480].Var0 == 396) {
                            var_3202 = 1;
                        }
                        if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
                            var_484 = 1;
                            var_485 = var_233[var_480].Var6;
                            for (cnt4_1 = 0; cnt4_1 < 10; ++cnt4_1) {
                                if (var_486[var_485][var_484][0] == 396) {
                                    var_3202 = 1;
                                }
                                var_484 = var_484 + 1;
                            }
                        }
                        var_480 = var_480 + 1;
                    }
                    if (!(var_3202 == 1)) return [3 /*break*/, 19];
                    return [4 /*yield*/, func094()];
                case 1:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "DIO「それは【ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝのDISC】！";
                    comments_row2 = "手に入れたのか…」";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 2:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    var_523 = 1;
                    return [4 /*yield*/, func340()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 4:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "DIO「ﾌﾟｯﾁよ、これで";
                    var_297 = "天国への扉は開かれたぞ！」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 7:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "";
                    var_297 = "【一巡後の世界】に行けるようになった！";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 11:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "DIO「この先へは";
                    var_297 = "親友ﾌﾟｯﾁが導いてくれるだろう」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 15:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "DIO「そうそう…";
                    var_297 = "ひとつ忠告しておこう」";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 18:
                    _a.sent();
                    _a.label = 19;
                case 19:
                    if (!(var_523 == 0)) return [3 /*break*/, 25];
                    return [4 /*yield*/, func094()];
                case 20:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "DIO「我々は【天国に行く方法】を";
                    comments_row2 = "　　　探している…」";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 21:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func340()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 23:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 24:
                    _a.sent();
                    return [2 /*return*/];
                case 25:
                    if (!(var_523 >= 1)) return [3 /*break*/, 35];
                    return [4 /*yield*/, func094()];
                case 26:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "DIO「【一巡後の世界】は";
                    comments_row2 = "無限に続く終わりのないダンジョンだ」";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 27:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func340()];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 29:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "DIO「死ぬつもりで挑戦した方が良い」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 30:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 33:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 34:
                    _a.sent();
                    return [2 /*return*/];
                case 35: return [4 /*yield*/, func834()];
                case 36:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func834() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_81, cnt1_82, cnt1_83, cnt1_84, cnt1_85, cnt1_86;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(834);
                    var_68 = 0;
                    return [4 /*yield*/, func723()];
                case 1:
                    _a.sent();
                    var_62 = 4;
                    current_floor = 1;
                    if (current_floor > var_376) {
                        var_376 = current_floor;
                    }
                    if (var_62 == 4 && current_floor > var_380) {
                        var_380 = current_floor;
                    }
                    var_405 = 0;
                    var_344 = 0;
                    var_373 = 5;
                    cnt1_81 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_81 < 2)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++cnt1_81;
                    return [3 /*break*/, 2];
                case 5:
                    var_373 = 4;
                    cnt1_82 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt1_82 < 2)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    ++cnt1_82;
                    return [3 /*break*/, 6];
                case 9:
                    var_373 = 3;
                    cnt1_83 = 0;
                    _a.label = 10;
                case 10:
                    if (!(cnt1_83 < 2)) return [3 /*break*/, 13];
                    return [4 /*yield*/, func337()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    ++cnt1_83;
                    return [3 /*break*/, 10];
                case 13:
                    var_373 = 2;
                    cnt1_84 = 0;
                    _a.label = 14;
                case 14:
                    if (!(cnt1_84 < 2)) return [3 /*break*/, 17];
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16:
                    ++cnt1_84;
                    return [3 /*break*/, 14];
                case 17:
                    var_373 = 1;
                    cnt1_85 = 0;
                    _a.label = 18;
                case 18:
                    if (!(cnt1_85 < 10)) return [3 /*break*/, 21];
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    ++cnt1_85;
                    return [3 /*break*/, 18];
                case 21:
                    var_373 = 0;
                    var_262 = 0;
                    return [4 /*yield*/, func111()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, func182()];
                case 23:
                    _a.sent();
                    if (!(var_224 != 20)) return [3 /*break*/, 25];
                    // アイテム数追加関数
                    return [4 /*yield*/, func062()];
                case 24:
                    // アイテム数追加関数
                    _a.sent();
                    _a.label = 25;
                case 25: return [4 /*yield*/, func504()];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, func505()];
                case 27:
                    _a.sent();
                    if (!(var_407 == 1)) return [3 /*break*/, 29];
                    return [4 /*yield*/, func905()];
                case 28:
                    _a.sent();
                    _a.label = 29;
                case 29:
                    if (!(var_407 == 2)) return [3 /*break*/, 31];
                    return [4 /*yield*/, func933()];
                case 30:
                    _a.sent();
                    _a.label = 31;
                case 31: return [4 /*yield*/, func076()];
                case 32:
                    _a.sent();
                    cnt1_86 = 0;
                    _a.label = 33;
                case 33:
                    if (!(cnt1_86 < 80)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func339()];
                case 34:
                    _a.sent();
                    _a.label = 35;
                case 35:
                    ++cnt1_86;
                    return [3 /*break*/, 33];
                case 36:
                    DSPLAY(audio_id = 101);
                    return [4 /*yield*/, func006()];
                case 37:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// NPC ロッコ・バロッコ所長
function func835() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(835);
                    var_243 = 0;
                    if (!(var_524 >= 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func094()];
                case 1:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ﾛｯｺ･ﾊﾞﾛｯｺ所長";
                    comments_row2 = "「『鉄の牢獄』に挑戦してみますか？」";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 2:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    _a.label = 3;
                case 3:
                    if (!(var_524 == 0)) return [3 /*break*/, 70];
                    return [4 /*yield*/, func094()];
                case 4:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「私はｸﾞﾘｰﾝ･ﾄﾞﾙﾌｨﾝ･ｽﾄﾘｰﾄ刑務所の";
                    comments_row2 = "　所長、ﾛｯｺ･ﾊﾞﾛｯｺです。";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 5:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func340()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 7:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "私の隣にいるこの彼女はぁー";
                    var_297 = "ｱｼｽﾀﾝﾄの『ｼｬｰﾛｯﾄ』です。";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 11:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "つい先日の話ですが…";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 15:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ｸﾞﾘｰﾝ･ﾄﾞﾙﾌｨﾝ･ｽﾄﾘｰﾄ刑務所から";
                    var_297 = "囚人が何人も脱獄してしまうという";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 19:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "困った事件がおきてしまいました。";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 23:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "誰であろーと逃げられないように";
                    var_297 = "対策はとってあったのですが";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 27:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "どうやら不十分だったようです";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 29:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 30:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 31:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "そこで私は、絶対に誰にも脱獄されない";
                    var_297 = "牢獄を作る事にしたのです。";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 33:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 34:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 35:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "『石作り』では生温いようでしたので";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 36:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 37:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 38:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 39:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "名づけて、『鉄の牢獄』！";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 40:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 41:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 42:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 43:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "そこであなたにお願いですが、";
                    var_297 = "この牢獄がどれほど強固か";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 44:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 45:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 46:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 47:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ぜひ試していただきたいのです。";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 48:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 49:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 50:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 51:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "【ここでYes/No選択】";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 52:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 53:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 54:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 55:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "それではｼｬｰﾛｯﾄ、新しく入る";
                    var_297 = "みなさんに『心構え』を";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 56:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 57:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 58:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 59:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "説明してください。";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 60:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 61:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 62:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 63:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "【ここでダンジョンの説明】";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 64:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 65:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 66:
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 67:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "それでは…　『鉄の牢獄』に";
                    var_297 = "挑戦してみますか？";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 68:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 69:
                    _a.sent();
                    var_524 = 1;
                    _a.label = 70;
                case 70: return [4 /*yield*/, func340()];
                case 71:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 72:
                    _a.sent();
                    DSPLAY(audio_id = 212);
                    var_245 = 19;
                    var_246 = 45;
                    var_546 = 1;
                    var_3203 = 1;
                    var_548 = 1;
                    return [4 /*yield*/, func839()];
                case 73:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func836() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_87, cnt1_88, cnt1_89, cnt1_90, cnt1_91, cnt1_92;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(836);
                    return [4 /*yield*/, func723()];
                case 1:
                    _a.sent();
                    if (!(var_3121 >= 1)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func831()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
                case 3:
                    var_68 = 0;
                    var_62 = 5;
                    current_floor = 1;
                    if (current_floor > var_376) {
                        var_376 = current_floor;
                    }
                    if (current_floor > var_381) {
                        var_381 = current_floor;
                    }
                    var_405 = 0;
                    var_344 = 0;
                    var_373 = 5;
                    cnt1_87 = 0;
                    _a.label = 4;
                case 4:
                    if (!(cnt1_87 < 2)) return [3 /*break*/, 7];
                    return [4 /*yield*/, func337()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    ++cnt1_87;
                    return [3 /*break*/, 4];
                case 7:
                    var_373 = 4;
                    cnt1_88 = 0;
                    _a.label = 8;
                case 8:
                    if (!(cnt1_88 < 2)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func337()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    ++cnt1_88;
                    return [3 /*break*/, 8];
                case 11:
                    var_373 = 3;
                    cnt1_89 = 0;
                    _a.label = 12;
                case 12:
                    if (!(cnt1_89 < 2)) return [3 /*break*/, 15];
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14:
                    ++cnt1_89;
                    return [3 /*break*/, 12];
                case 15:
                    var_373 = 2;
                    cnt1_90 = 0;
                    _a.label = 16;
                case 16:
                    if (!(cnt1_90 < 2)) return [3 /*break*/, 19];
                    return [4 /*yield*/, func337()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    ++cnt1_90;
                    return [3 /*break*/, 16];
                case 19:
                    var_373 = 1;
                    cnt1_91 = 0;
                    _a.label = 20;
                case 20:
                    if (!(cnt1_91 < 10)) return [3 /*break*/, 23];
                    return [4 /*yield*/, func337()];
                case 21:
                    _a.sent();
                    _a.label = 22;
                case 22:
                    ++cnt1_91;
                    return [3 /*break*/, 20];
                case 23:
                    var_373 = 0;
                    var_262 = 0;
                    return [4 /*yield*/, func111()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, func182()];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, func062()];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, func502()];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, func504()];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, func505()];
                case 29:
                    _a.sent();
                    return [4 /*yield*/, func632()];
                case 30:
                    _a.sent();
                    var_415 = 0;
                    var_350 = 100;
                    var_567 = 100;
                    var_352 = 15;
                    var_211 = 15;
                    var_840 = 1;
                    var_568 = 0;
                    var_565 = 8;
                    var_566 = 8;
                    if (!(var_407 == 1)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func905()];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32:
                    if (!(var_407 == 2)) return [3 /*break*/, 34];
                    return [4 /*yield*/, func933()];
                case 33:
                    _a.sent();
                    _a.label = 34;
                case 34:
                    var_524 = 1;
                    var_205 = 1;
                    return [4 /*yield*/, func231()];
                case 35:
                    _a.sent();
                    return [4 /*yield*/, func076()];
                case 36:
                    _a.sent();
                    cnt1_92 = 0;
                    _a.label = 37;
                case 37:
                    if (!(cnt1_92 < 80)) return [3 /*break*/, 40];
                    return [4 /*yield*/, func339()];
                case 38:
                    _a.sent();
                    _a.label = 39;
                case 39:
                    ++cnt1_92;
                    return [3 /*break*/, 37];
                case 40:
                    DSPLAY(audio_id = 101);
                    return [4 /*yield*/, func006()];
                case 41:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// NPC マリリン・マンソン ?
function func837() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_93, cnt3_3, cnt2_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(837);
                    var_3204 = 0;
                    var_1056 = 1;
                    cnt1_93 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_93 < 20)) return [3 /*break*/, 10];
                    if (!(var_233[var_1056].Var0 >= 800 && var_233[var_1056].Var0 < 900)) return [3 /*break*/, 6];
                    var_484 = 1;
                    var_485 = var_233[var_1056].Var6;
                    cnt3_3 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt3_3 < 10)) return [3 /*break*/, 6];
                    if (!(var_486[var_485][var_484][11] == 1 && var_486[var_485][var_484][0] != 0)) return [3 /*break*/, 4];
                    var_3205 = var_484;
                    var_220 = 1;
                    var_682 = var_485;
                    var_1876 = var_1056;
                    return [4 /*yield*/, func838()];
                case 3:
                    _a.sent();
                    var_3204 = 1;
                    var_220 = 0;
                    var_484 = 1;
                    cnt3_3 = -1;
                    return [3 /*break*/, 5];
                case 4:
                    var_484 = var_484 + 1;
                    _a.label = 5;
                case 5:
                    ++cnt3_3;
                    return [3 /*break*/, 2];
                case 6:
                    if (!(var_233[var_1056].Var11 == 1 && var_233[var_1056].Var0 != 0)) return [3 /*break*/, 8];
                    var_3205 = var_1056;
                    return [4 /*yield*/, func838()];
                case 7:
                    _a.sent();
                    var_3204 = 1;
                    var_1056 = 1;
                    var_3206 = 1;
                    cnt1_93 = -1;
                    return [3 /*break*/, 9];
                case 8:
                    var_1056 = var_1056 + 1;
                    _a.label = 9;
                case 9:
                    ++cnt1_93;
                    return [3 /*break*/, 1];
                case 10:
                    if (!(var_3204 == 1)) return [3 /*break*/, 20];
                    var_3204 = 0;
                    return [4 /*yield*/, func094()];
                case 11:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾏﾘﾘﾝﾏﾝｿﾝ「また 会オウ！」";
                    var_297 = "";
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 14:
                    _a.sent();
                    var_1470 = 5;
                    return [4 /*yield*/, func337()];
                case 15:
                    _a.sent();
                    var_1470 = 6;
                    cnt2_5 = 0;
                    _a.label = 16;
                case 16:
                    if (!(cnt2_5 < 2)) return [3 /*break*/, 19];
                    return [4 /*yield*/, func337()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    ++cnt2_5;
                    return [3 /*break*/, 16];
                case 19:
                    var_198 = 0;
                    _a.label = 20;
                case 20:
                    var_271 = 0;
                    var_1470 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func838() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_6, cnt2_7, cnt1_94, cnt1_95, cnt1_96, cnt1_97, cnt1_98;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(838);
                    var_271 = 1;
                    var_1470 = 1;
                    if (var_220 == 0) {
                        item_list = var_233[var_1056].Var0;
                        var_1471 = var_233[var_1056].Var0;
                        var_487 = var_233[var_1056].Var13;
                        var_1249 = var_233[var_1056].Var13;
                    }
                    if (var_220 == 1) {
                        item_list = var_486[var_485][var_484][0];
                        var_1471 = var_486[var_485][var_484][0];
                        var_487 = var_486[var_485][var_484][13];
                        var_1249 = var_486[var_485][var_484][13];
                    }
                    return [4 /*yield*/, func492()];
                case 1:
                    _a.sent();
                    var_3207 = item_name;
                    var_225 = var_3205;
                    if (!(var_220 == 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, func430()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [4 /*yield*/, func433()];
                case 4:
                    _a.sent();
                    if (!(var_3204 == 0)) return [3 /*break*/, 8];
                    cnt2_6 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt2_6 < 20)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    ++cnt2_6;
                    return [3 /*break*/, 5];
                case 8:
                    if (!(var_3204 == 1)) return [3 /*break*/, 12];
                    cnt2_7 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt2_7 < 5)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    ++cnt2_7;
                    return [3 /*break*/, 9];
                case 12: return [4 /*yield*/, func094()];
                case 13:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    if (var_3204 == 0) {
                        comments_row1 = "ﾏﾘﾘﾝﾏﾝｿﾝ「店ノ売リ物ヲ持ッテイルナ？」";
                    }
                    if (var_3204 == 1) {
                        comments_row1 = "ﾏﾘﾘﾝﾏﾝｿﾝ「マダ持ッテイルナ？」";
                    }
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
                    return [4 /*yield*/, func047()];
                case 14:
                    _a.sent();
                    cnt1_94 = 0;
                    _a.label = 15;
                case 15:
                    if (!(cnt1_94 < 15)) return [3 /*break*/, 18];
                    return [4 /*yield*/, func337()];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17:
                    ++cnt1_94;
                    return [3 /*break*/, 15];
                case 18: return [4 /*yield*/, func094()];
                case 19:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ﾏﾘﾘﾝﾏﾝｿﾝ「返シテモラウ！」";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
                    return [4 /*yield*/, func047()];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 21:
                    _a.sent();
                    var_389 = 2;
                    var_199 = 6;
                    var_1470 = 2;
                    cnt1_95 = 0;
                    _a.label = 22;
                case 22:
                    if (!(cnt1_95 < 2)) return [3 /*break*/, 25];
                    return [4 /*yield*/, func337()];
                case 23:
                    _a.sent();
                    _a.label = 24;
                case 24:
                    ++cnt1_95;
                    return [3 /*break*/, 22];
                case 25:
                    var_747 = 1;
                    var_1470 = 3;
                    cnt1_96 = 0;
                    _a.label = 26;
                case 26:
                    if (!(cnt1_96 < 15)) return [3 /*break*/, 29];
                    return [4 /*yield*/, func337()];
                case 27:
                    _a.sent();
                    _a.label = 28;
                case 28:
                    ++cnt1_96;
                    return [3 /*break*/, 26];
                case 29:
                    var_389 = 0;
                    var_1470 = 4;
                    cnt1_97 = 0;
                    _a.label = 30;
                case 30:
                    if (!(cnt1_97 < 2)) return [3 /*break*/, 33];
                    return [4 /*yield*/, func337()];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32:
                    ++cnt1_97;
                    return [3 /*break*/, 30];
                case 33:
                    var_1470 = 1;
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "" + var_3207 + "を奪われた";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
                    return [4 /*yield*/, func047()];
                case 34:
                    _a.sent();
                    return [4 /*yield*/, func050()];
                case 35:
                    _a.sent();
                    cnt1_98 = 0;
                    _a.label = 36;
                case 36:
                    if (!(cnt1_98 < 10)) return [3 /*break*/, 39];
                    return [4 /*yield*/, func337()];
                case 37:
                    _a.sent();
                    _a.label = 38;
                case 38:
                    ++cnt1_98;
                    return [3 /*break*/, 36];
                case 39: return [2 /*return*/];
            }
        });
    });
}
function func839() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(839);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent();
                    if (!(var_259 == 1 && var_546 == 1)) return [3 /*break*/, 4];
                    var_246 = var_246 + 19;
                    var_546 = 0;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(var_255 == 1 && var_546 == 0)) return [3 /*break*/, 6];
                    var_246 = var_246 - 19;
                    var_546 = 1;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 97];
                    if (!(var_546 == 1)) return [3 /*break*/, 97];
                    DSPLAY(audio_id = 212);
                    if (!(var_3208 == 1)) return [3 /*break*/, 9];
                    var_3208 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, func762()];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
                case 9:
                    if (!(var_3209 == 1)) return [3 /*break*/, 12];
                    var_3209 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, func763()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12:
                    if (!(var_3150 == 1)) return [3 /*break*/, 15];
                    var_3150 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, func770()];
                case 14:
                    _a.sent();
                    return [2 /*return*/];
                case 15:
                    if (!(var_3150 == 2)) return [3 /*break*/, 18];
                    var_3150 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, func772()];
                case 17:
                    _a.sent();
                    return [2 /*return*/];
                case 18:
                    if (!(var_3151 == 1)) return [3 /*break*/, 21];
                    var_3151 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, func774()];
                case 20:
                    _a.sent();
                    return [2 /*return*/];
                case 21:
                    if (!(var_3151 == 2)) return [3 /*break*/, 24];
                    var_3151 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, func776()];
                case 23:
                    _a.sent();
                    return [2 /*return*/];
                case 24:
                    if (!(var_3152 == 1)) return [3 /*break*/, 27];
                    var_3152 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, func777()];
                case 26:
                    _a.sent();
                    return [2 /*return*/];
                case 27:
                    if (!(var_3163 == 1)) return [3 /*break*/, 30];
                    var_3163 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, func788()];
                case 29:
                    _a.sent();
                    return [2 /*return*/];
                case 30:
                    if (!(var_3163 == 2)) return [3 /*break*/, 33];
                    var_3163 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, func791()];
                case 32:
                    _a.sent();
                    return [2 /*return*/];
                case 33:
                    if (!(var_3163 == 3)) return [3 /*break*/, 36];
                    var_3163 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 34:
                    _a.sent();
                    return [4 /*yield*/, func791()];
                case 35:
                    _a.sent();
                    return [2 /*return*/];
                case 36:
                    if (!(var_3126 == 1)) return [3 /*break*/, 39];
                    var_3126 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 37:
                    _a.sent();
                    return [4 /*yield*/, func731()];
                case 38:
                    _a.sent();
                    return [2 /*return*/];
                case 39:
                    if (!(var_3132 == 1)) return [3 /*break*/, 42];
                    var_3132 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 40:
                    _a.sent();
                    return [4 /*yield*/, func744()];
                case 41:
                    _a.sent();
                    return [2 /*return*/];
                case 42:
                    if (!(var_3134 == 1)) return [3 /*break*/, 45];
                    var_3134 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 43:
                    _a.sent();
                    return [4 /*yield*/, func747()];
                case 44:
                    _a.sent();
                    return [2 /*return*/];
                case 45:
                    if (!(var_3127 == 1)) return [3 /*break*/, 48];
                    var_3127 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 46:
                    _a.sent();
                    return [4 /*yield*/, func739()];
                case 47:
                    _a.sent();
                    return [2 /*return*/];
                case 48:
                    if (!(var_3136 == 1)) return [3 /*break*/, 51];
                    var_3136 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 49:
                    _a.sent();
                    return [4 /*yield*/, func749()];
                case 50:
                    _a.sent();
                    return [2 /*return*/];
                case 51:
                    if (!(var_547 == 1)) return [3 /*break*/, 54];
                    var_547 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 52:
                    _a.sent();
                    return [4 /*yield*/, func067()];
                case 53:
                    _a.sent();
                    return [2 /*return*/];
                case 54:
                    if (!(var_2494 == 1)) return [3 /*break*/, 57];
                    var_2494 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 55:
                    _a.sent();
                    return [4 /*yield*/, func549()];
                case 56:
                    _a.sent();
                    return [2 /*return*/];
                case 57:
                    if (!(var_2495 == 1)) return [3 /*break*/, 60];
                    var_3210 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 58:
                    _a.sent();
                    return [4 /*yield*/, func552()];
                case 59:
                    _a.sent();
                    return [2 /*return*/];
                case 60:
                    if (!(var_3198 == 1)) return [3 /*break*/, 62];
                    var_3198 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func825()];
                case 61:
                    _a.sent();
                    return [2 /*return*/];
                case 62:
                    if (!(var_3199 == 1)) return [3 /*break*/, 64];
                    var_3199 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func827()];
                case 63:
                    _a.sent();
                    return [2 /*return*/];
                case 64:
                    if (!(var_3200 == 1)) return [3 /*break*/, 66];
                    var_3200 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func829()];
                case 65:
                    _a.sent();
                    return [2 /*return*/];
                case 66:
                    if (!(var_3201 == 1)) return [3 /*break*/, 68];
                    var_3201 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func834()];
                case 67:
                    _a.sent();
                    return [2 /*return*/];
                case 68:
                    if (!(var_3203 == 1)) return [3 /*break*/, 70];
                    var_3203 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func836()];
                case 69:
                    _a.sent();
                    return [2 /*return*/];
                case 70:
                    if (!(var_3192 == 1)) return [3 /*break*/, 73];
                    var_3192 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 71:
                    _a.sent();
                    return [4 /*yield*/, func806()];
                case 72:
                    _a.sent();
                    return [2 /*return*/];
                case 73:
                    if (!(var_3191 == 1)) return [3 /*break*/, 76];
                    var_3191 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 74:
                    _a.sent();
                    var_1032 = var_1032 - var_3190;
                    var_415 = 0;
                    return [4 /*yield*/, func807()];
                case 75:
                    _a.sent();
                    return [2 /*return*/];
                case 76:
                    if (!(var_3147 == 1)) return [3 /*break*/, 78];
                    var_3147 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func795()];
                case 77:
                    _a.sent();
                    return [2 /*return*/];
                case 78:
                    if (!(var_3193 == 1)) return [3 /*break*/, 80];
                    var_3193 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func810()];
                case 79:
                    _a.sent();
                    return [2 /*return*/];
                case 80:
                    if (!(var_3193 == 2)) return [3 /*break*/, 82];
                    var_3193 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func811()];
                case 81:
                    _a.sent();
                    return [2 /*return*/];
                case 82:
                    if (!(var_3195 == 1)) return [3 /*break*/, 84];
                    var_3195 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func814()];
                case 83:
                    _a.sent();
                    return [2 /*return*/];
                case 84:
                    if (!(var_3195 == 2)) return [3 /*break*/, 86];
                    var_3195 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func815()];
                case 85:
                    _a.sent();
                    return [2 /*return*/];
                case 86:
                    if (!(var_3131 == 1)) return [3 /*break*/, 88];
                    var_3131 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func742()];
                case 87:
                    _a.sent();
                    return [2 /*return*/];
                case 88:
                    if (!(var_3137 == 1)) return [3 /*break*/, 90];
                    var_3137 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func754()];
                case 89:
                    _a.sent();
                    return [2 /*return*/];
                case 90:
                    if (!(var_3156 == 1)) return [3 /*break*/, 92];
                    var_3156 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func779()];
                case 91:
                    _a.sent();
                    return [2 /*return*/];
                case 92:
                    if (!(var_3157 == 1)) return [3 /*break*/, 94];
                    var_3157 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func782()];
                case 93:
                    _a.sent();
                    return [2 /*return*/];
                case 94:
                    if (!(var_563 == 1)) return [3 /*break*/, 97];
                    var_563 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 95:
                    _a.sent();
                    return [4 /*yield*/, func830()];
                case 96:
                    _a.sent();
                    return [2 /*return*/];
                case 97:
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 191];
                    if (!(var_546 == 0)) return [3 /*break*/, 191];
                    DSPLAY(audio_id = 212);
                    if (!(var_3208 == 1)) return [3 /*break*/, 100];
                    var_3208 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    return [4 /*yield*/, func051()];
                case 98:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 99:
                    _a.sent();
                    return [2 /*return*/];
                case 100:
                    if (!(var_3209 == 1)) return [3 /*break*/, 103];
                    var_3209 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 101:
                    _a.sent();
                    return [4 /*yield*/, func764()];
                case 102:
                    _a.sent();
                    return [2 /*return*/];
                case 103:
                    if (!(var_3150 >= 1)) return [3 /*break*/, 106];
                    var_3150 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    return [4 /*yield*/, func051()];
                case 104:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 105:
                    _a.sent();
                    return [2 /*return*/];
                case 106:
                    if (!(var_3151 >= 1)) return [3 /*break*/, 109];
                    var_3151 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    return [4 /*yield*/, func051()];
                case 107:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 108:
                    _a.sent();
                    return [2 /*return*/];
                case 109:
                    if (!(var_3152 == 1)) return [3 /*break*/, 112];
                    var_3152 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    return [4 /*yield*/, func051()];
                case 110:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 111:
                    _a.sent();
                    return [2 /*return*/];
                case 112:
                    if (!(var_3163 == 1)) return [3 /*break*/, 115];
                    var_3163 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 113:
                    _a.sent();
                    return [4 /*yield*/, func789()];
                case 114:
                    _a.sent();
                    return [2 /*return*/];
                case 115:
                    if (!(var_3163 == 2)) return [3 /*break*/, 118];
                    var_3163 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 116:
                    _a.sent();
                    return [4 /*yield*/, func790()];
                case 117:
                    _a.sent();
                    return [2 /*return*/];
                case 118:
                    if (!(var_3163 == 3)) return [3 /*break*/, 121];
                    var_3163 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    return [4 /*yield*/, func051()];
                case 119:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 120:
                    _a.sent();
                    return [2 /*return*/];
                case 121:
                    if (!(var_3126 == 1)) return [3 /*break*/, 124];
                    var_3126 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 122:
                    _a.sent();
                    return [4 /*yield*/, func732()];
                case 123:
                    _a.sent();
                    return [2 /*return*/];
                case 124:
                    if (!(var_3132 == 1)) return [3 /*break*/, 127];
                    var_3132 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 125:
                    _a.sent();
                    return [4 /*yield*/, func745()];
                case 126:
                    _a.sent();
                    return [2 /*return*/];
                case 127:
                    if (!(var_3134 == 1)) return [3 /*break*/, 130];
                    var_3134 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 128:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 129:
                    _a.sent();
                    return [2 /*return*/];
                case 130:
                    if (!(var_3127 == 1)) return [3 /*break*/, 133];
                    var_3127 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 131:
                    _a.sent();
                    return [4 /*yield*/, func740()];
                case 132:
                    _a.sent();
                    return [2 /*return*/];
                case 133:
                    if (!(var_3136 == 1)) return [3 /*break*/, 136];
                    var_3136 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 134:
                    _a.sent();
                    return [4 /*yield*/, func751()];
                case 135:
                    _a.sent();
                    return [2 /*return*/];
                case 136:
                    if (!(var_547 == 1)) return [3 /*break*/, 139];
                    var_547 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 137:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 138:
                    _a.sent();
                    return [2 /*return*/];
                case 139:
                    if (!(var_2494 == 1)) return [3 /*break*/, 142];
                    var_2494 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 140:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 141:
                    _a.sent();
                    return [2 /*return*/];
                case 142:
                    if (!(var_2495 == 1)) return [3 /*break*/, 145];
                    var_2495 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 143:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 144:
                    _a.sent();
                    return [2 /*return*/];
                case 145:
                    if (!(var_3198 == 1)) return [3 /*break*/, 148];
                    var_3198 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 146:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 147:
                    _a.sent();
                    return [2 /*return*/];
                case 148:
                    if (!(var_3199 == 1)) return [3 /*break*/, 151];
                    var_3199 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 149:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 150:
                    _a.sent();
                    return [2 /*return*/];
                case 151:
                    if (!(var_3200 == 1)) return [3 /*break*/, 154];
                    var_3200 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 152:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 153:
                    _a.sent();
                    return [2 /*return*/];
                case 154:
                    if (!(var_3201 == 1)) return [3 /*break*/, 157];
                    var_3201 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 155:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 156:
                    _a.sent();
                    return [2 /*return*/];
                case 157:
                    if (!(var_3203 == 1)) return [3 /*break*/, 160];
                    var_3203 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 158:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 159:
                    _a.sent();
                    return [2 /*return*/];
                case 160:
                    if (!(var_3192 == 1)) return [3 /*break*/, 163];
                    var_3192 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    var_1206 = 1;
                    return [4 /*yield*/, func051()];
                case 161:
                    _a.sent();
                    return [4 /*yield*/, func803()];
                case 162:
                    _a.sent();
                    return [2 /*return*/];
                case 163:
                    if (!(var_3191 == 1)) return [3 /*break*/, 166];
                    var_3191 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    var_1206 = 1;
                    return [4 /*yield*/, func051()];
                case 164:
                    _a.sent();
                    return [4 /*yield*/, func803()];
                case 165:
                    _a.sent();
                    return [2 /*return*/];
                case 166:
                    if (!(var_3147 == 1)) return [3 /*break*/, 169];
                    var_3147 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 167:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 168:
                    _a.sent();
                    return [2 /*return*/];
                case 169:
                    if (!(var_3193 == 1)) return [3 /*break*/, 171];
                    var_3193 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func812()];
                case 170:
                    _a.sent();
                    return [2 /*return*/];
                case 171:
                    if (!(var_3193 == 2)) return [3 /*break*/, 173];
                    var_3193 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func812()];
                case 172:
                    _a.sent();
                    return [2 /*return*/];
                case 173:
                    if (!(var_3195 == 1)) return [3 /*break*/, 175];
                    var_3195 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func817()];
                case 174:
                    _a.sent();
                    return [2 /*return*/];
                case 175:
                    if (!(var_3195 == 2)) return [3 /*break*/, 177];
                    var_3195 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func817()];
                case 176:
                    _a.sent();
                    return [2 /*return*/];
                case 177:
                    if (!(var_3131 == 1)) return [3 /*break*/, 180];
                    var_3131 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 178:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 179:
                    _a.sent();
                    return [2 /*return*/];
                case 180:
                    if (!(var_3137 == 1)) return [3 /*break*/, 183];
                    var_3137 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 181:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 182:
                    _a.sent();
                    return [2 /*return*/];
                case 183:
                    if (!(var_3156 == 1)) return [3 /*break*/, 185];
                    var_3156 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func780()];
                case 184:
                    _a.sent();
                    return [2 /*return*/];
                case 185:
                    if (!(var_3157 == 1)) return [3 /*break*/, 188];
                    var_3157 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 186:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 187:
                    _a.sent();
                    return [2 /*return*/];
                case 188:
                    if (!(var_563 == 1)) return [3 /*break*/, 191];
                    var_563 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 189:
                    _a.sent();
                    return [4 /*yield*/, func066()];
                case 190:
                    _a.sent();
                    return [2 /*return*/];
                case 191:
                    if (!(var_239 == 1)) return [3 /*break*/, 285];
                    DSPLAY(audio_id = 212);
                    if (!(var_3208 == 1)) return [3 /*break*/, 194];
                    var_3208 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    return [4 /*yield*/, func051()];
                case 192:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 193:
                    _a.sent();
                    return [2 /*return*/];
                case 194:
                    if (!(var_3209 == 1)) return [3 /*break*/, 197];
                    var_3209 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 195:
                    _a.sent();
                    return [4 /*yield*/, func764()];
                case 196:
                    _a.sent();
                    return [2 /*return*/];
                case 197:
                    if (!(var_3150 >= 1)) return [3 /*break*/, 200];
                    var_3150 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    return [4 /*yield*/, func051()];
                case 198:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 199:
                    _a.sent();
                    return [2 /*return*/];
                case 200:
                    if (!(var_3151 >= 1)) return [3 /*break*/, 203];
                    var_3151 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    return [4 /*yield*/, func051()];
                case 201:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 202:
                    _a.sent();
                    return [2 /*return*/];
                case 203:
                    if (!(var_3152 == 1)) return [3 /*break*/, 206];
                    var_3152 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    return [4 /*yield*/, func051()];
                case 204:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 205:
                    _a.sent();
                    return [2 /*return*/];
                case 206:
                    if (!(var_3163 == 1)) return [3 /*break*/, 209];
                    var_3163 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 207:
                    _a.sent();
                    return [4 /*yield*/, func789()];
                case 208:
                    _a.sent();
                    return [2 /*return*/];
                case 209:
                    if (!(var_3163 == 2)) return [3 /*break*/, 212];
                    var_3163 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 210:
                    _a.sent();
                    return [4 /*yield*/, func790()];
                case 211:
                    _a.sent();
                    return [2 /*return*/];
                case 212:
                    if (!(var_3163 == 3)) return [3 /*break*/, 215];
                    var_3163 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    return [4 /*yield*/, func051()];
                case 213:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 214:
                    _a.sent();
                    return [2 /*return*/];
                case 215:
                    if (!(var_3126 == 1)) return [3 /*break*/, 218];
                    var_3126 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 216:
                    _a.sent();
                    return [4 /*yield*/, func732()];
                case 217:
                    _a.sent();
                    return [2 /*return*/];
                case 218:
                    if (!(var_3132 == 1)) return [3 /*break*/, 221];
                    var_3132 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 219:
                    _a.sent();
                    return [4 /*yield*/, func745()];
                case 220:
                    _a.sent();
                    return [2 /*return*/];
                case 221:
                    if (!(var_3127 == 1)) return [3 /*break*/, 224];
                    var_3127 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 222:
                    _a.sent();
                    return [4 /*yield*/, func740()];
                case 223:
                    _a.sent();
                    return [2 /*return*/];
                case 224:
                    if (!(var_3134 == 1)) return [3 /*break*/, 227];
                    var_3134 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 225:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 226:
                    _a.sent();
                    return [2 /*return*/];
                case 227:
                    if (!(var_3136 == 1)) return [3 /*break*/, 230];
                    var_3136 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 228:
                    _a.sent();
                    return [4 /*yield*/, func751()];
                case 229:
                    _a.sent();
                    return [2 /*return*/];
                case 230:
                    if (!(var_547 == 1)) return [3 /*break*/, 233];
                    var_547 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 231:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 232:
                    _a.sent();
                    return [2 /*return*/];
                case 233:
                    if (!(var_2494 == 1)) return [3 /*break*/, 236];
                    var_2494 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 234:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 235:
                    _a.sent();
                    return [2 /*return*/];
                case 236:
                    if (!(var_2495 == 1)) return [3 /*break*/, 239];
                    var_2495 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 237:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 238:
                    _a.sent();
                    return [2 /*return*/];
                case 239:
                    if (!(var_3198 == 1)) return [3 /*break*/, 242];
                    var_3198 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 240:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 241:
                    _a.sent();
                    return [2 /*return*/];
                case 242:
                    if (!(var_3199 == 1)) return [3 /*break*/, 245];
                    var_3199 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 243:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 244:
                    _a.sent();
                    return [2 /*return*/];
                case 245:
                    if (!(var_3200 == 1)) return [3 /*break*/, 248];
                    var_3200 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 246:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 247:
                    _a.sent();
                    return [2 /*return*/];
                case 248:
                    if (!(var_3201 == 1)) return [3 /*break*/, 251];
                    var_3201 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 249:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 250:
                    _a.sent();
                    return [2 /*return*/];
                case 251:
                    if (!(var_3203 == 1)) return [3 /*break*/, 254];
                    var_3203 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 252:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 253:
                    _a.sent();
                    return [2 /*return*/];
                case 254:
                    if (!(var_3192 == 1)) return [3 /*break*/, 257];
                    var_3192 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    var_1206 = 1;
                    return [4 /*yield*/, func051()];
                case 255:
                    _a.sent();
                    return [4 /*yield*/, func803()];
                case 256:
                    _a.sent();
                    return [2 /*return*/];
                case 257:
                    if (!(var_3191 == 1)) return [3 /*break*/, 260];
                    var_3191 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    var_1206 = 1;
                    return [4 /*yield*/, func051()];
                case 258:
                    _a.sent();
                    return [4 /*yield*/, func803()];
                case 259:
                    _a.sent();
                    return [2 /*return*/];
                case 260:
                    if (!(var_3147 == 1)) return [3 /*break*/, 263];
                    var_3147 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 261:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 262:
                    _a.sent();
                    return [2 /*return*/];
                case 263:
                    if (!(var_3193 == 1)) return [3 /*break*/, 265];
                    var_3193 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func812()];
                case 264:
                    _a.sent();
                    return [2 /*return*/];
                case 265:
                    if (!(var_3193 == 2)) return [3 /*break*/, 267];
                    var_3193 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func812()];
                case 266:
                    _a.sent();
                    return [2 /*return*/];
                case 267:
                    if (!(var_3195 == 1)) return [3 /*break*/, 269];
                    var_3195 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func817()];
                case 268:
                    _a.sent();
                    return [2 /*return*/];
                case 269:
                    if (!(var_3195 == 2)) return [3 /*break*/, 271];
                    var_3195 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func817()];
                case 270:
                    _a.sent();
                    return [2 /*return*/];
                case 271:
                    if (!(var_3131 == 1)) return [3 /*break*/, 274];
                    var_3131 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 272:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 273:
                    _a.sent();
                    return [2 /*return*/];
                case 274:
                    if (!(var_3137 == 1)) return [3 /*break*/, 277];
                    var_3137 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 275:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 276:
                    _a.sent();
                    return [2 /*return*/];
                case 277:
                    if (!(var_3156 == 1)) return [3 /*break*/, 279];
                    var_3156 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func780()];
                case 278:
                    _a.sent();
                    return [2 /*return*/];
                case 279:
                    if (!(var_3157 == 1)) return [3 /*break*/, 282];
                    var_3157 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 280:
                    _a.sent();
                    var_198 = 0;
                    return [4 /*yield*/, func009()];
                case 281:
                    _a.sent();
                    return [2 /*return*/];
                case 282:
                    if (!(var_563 == 1)) return [3 /*break*/, 285];
                    var_563 = 0;
                    var_548 = 0;
                    return [4 /*yield*/, func051()];
                case 283:
                    _a.sent();
                    return [4 /*yield*/, func066()];
                case 284:
                    _a.sent();
                    return [2 /*return*/];
                case 285:
                    if (var_198 == 1) {
                        var_198 = 1;
                        var_300 = 1;
                    }
                    return [4 /*yield*/, func839()];
                case 286:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func840() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(840);
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(12, 37);
            gcopy(12, 0, 0, 113, 53);
            color(255, 255, 255);
            line(15, 39, 120, 39);
            line(15, 86, 120, 86);
            line(14, 40, 14, 84);
            line(122, 40, 122, 84);
            pset(15, 40);
            pset(121, 40);
            pset(15, 85);
            pset(121, 85);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            color(255, 255, 255);
            pos(33, 47);
            if (var_3192 == 0 && var_3147 == 0 && var_3136 == 0 && var_3163 != 2 && var_3163 != 3) {
                mes("はい");
                mes("いいえ");
            }
            if (var_3192 == 1) {
                mes("買う");
                mes("やめる");
            }
            if (var_3147 == 1 || var_3136 == 1) {
                mes("ﾌﾞﾝ殴る");
                mes("放っとく");
            }
            if (var_3163 >= 2) {
                mes("いただく");
                mes("断る");
            }
            color(255, 255, 255);
            font("MS ゴシック", 16, 1);
            pos(var_245, var_246);
            mes(">");
            pos(var_245 + 1, var_246);
            mes(">");
            pos(var_245 + 2, var_246);
            mes(">");
            return [2 /*return*/];
        });
    });
}
function func841() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(841);
                    if (var_637 >= 1) {
                        var_637 = 0;
                        gsel(window_id = 37, window_mode = -1);
                        screen_(0, 680, 680, 2);
                        SetWindowLongA(hwnd, -8, var_15);
                        if (var_640 == 0) {
                            var_10 = 0;
                            width(680, 680);
                        }
                        if (var_640 == 1) {
                            var_640 = 0;
                            var_10 = 1;
                            width(680, 680);
                        }
                        gsel(window_id = 0, window_mode = 2);
                        chgdisp();
                    }
                    onexit(0);
                    var_3211 = 353;
                    var_3212 = 50;
                    var_3213 = var_3211;
                    var_3214 = var_3212 + 44;
                    var_3215 = var_3211;
                    var_3216 = var_3214 + 44;
                    var_3217 = var_3213 + 44;
                    var_3218 = var_3214;
                    var_3219 = var_3215 + 44;
                    var_3220 = var_3216;
                    var_3221 = var_3219 + 44;
                    var_3222 = var_3220;
                    var_3223 = var_3217 + 44;
                    var_3224 = var_3218;
                    var_3225 = var_3223 + 44;
                    var_3226 = var_3224;
                    var_3227 = var_3221 + 44;
                    var_3228 = var_3222;
                    var_3229 = var_3225;
                    var_3230 = var_3226 - 44;
                    var_3231 = var_3211;
                    var_3232 = var_3216 + 60;
                    var_3233 = 3;
                    var_3234 = 2;
                    var_3235 = var_31 - 3;
                    var_3236 = var_32 - 4;
                    var_3237 = var_31 - 2;
                    var_3238 = var_32 - 3;
                    var_3239 = var_3231 - 5;
                    var_3240 = var_3232 - 2;
                    var_3241 = 185;
                    var_3242 = 135;
                    var_3243 = var_3225 + 40 + 20;
                    var_3244 = var_3216 + 60;
                    var_869 = 1;
                    return [4 /*yield*/, func888()];
                case 1:
                    _a.sent();
                    var_869 = 0;
                    return [4 /*yield*/, func890()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func892()];
                case 3:
                    _a.sent();
                    objsize(1);
                    pos(800, 800);
                    button("ダミー", func850);
                    objsize(50);
                    pos(var_3211 + 45, var_3212);
                    combox(var_3245, 100, "部屋\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12");
                    var_3246 = 0;
                    var_3247 = 0;
                    var_873 = 0;
                    var_3248 = 0;
                    var_3249 = 0;
                    var_3250 = 0;
                    var_3251 = 0;
                    var_3252 = 0;
                    objsize(135);
                    pos(var_3229 + 44, var_3230);
                    combox(var_3246, 100, var_890);
                    pos(var_3225 + 44, var_3226);
                    combox(var_873, 100, var_874);
                    pos(var_3227 + 44, var_3228);
                    combox(var_3249, 100, var_886);
                    objsize(60);
                    pos(var_3243, var_3244 + 28);
                    button("読込", func868);
                    pos(var_3243, var_3244 + 56);
                    button("保存", func872);
                    pos(var_3243, var_3244);
                    button("実行", func871);
                    objsize(100);
                    pos(var_3243, var_3244 + 114);
                    var_3253 = 0;
                    combox(var_3253, 100, "フラグ変更\n未クリア(白)\nクリア済(黄)\n製作中(赤)\n完成(水色)");
                    var_3254 = 0;
                    var_3255 = 0;
                    var_3256 = 0;
                    var_3257 = 0;
                    var_3258 = 0;
                    var_3259 = 0;
                    return [4 /*yield*/, func846()];
                case 4:
                    _a.sent();
                    objsize(60);
                    pos(var_3243 + 70, var_3244 + 56);
                    button("戻る", func849);
                    pos(var_3243 + 70, var_3244 + 28);
                    button("初期化", func865);
                    var_3260 = 0;
                    var_3261 = 0;
                    var_3262 = 0;
                    return [4 /*yield*/, func856()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, func847()];
                case 6:
                    _a.sent();
                    width(680, 680);
                    var_92 = 2;
                    var_3263 = var_92;
                    var_3264 = 1;
                    var_3265 = 1;
                    var_3266 = 6;
                    var_3245 = 1;
                    var_3267 = 1;
                    var_3268 = 0;
                    var_3269 = 0;
                    var_3270 = 1;
                    var_3271 = 0;
                    var_3272 = "";
                    var_626 = 1;
                    if (!(var_3273 == 1)) return [3 /*break*/, 8];
                    var_3274 = 1;
                    return [4 /*yield*/, func869()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
                case 8:
                    if (!(var_3273 == 0)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func875()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10: return [4 /*yield*/, func851()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func842() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(842);
            clrobj(data0 = 9, data1 = 9);
            objsize(60);
            pos(680 - 76, var_3226 + 22);
            combox(var_3254, 100, "修正値\n+1\n+2\n+3\n+4\n+5\n+6\n+7\n+8\n+9\n+10\n呪い");
            return [2 /*return*/];
        });
    });
}
function func843() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(843);
            clrobj(data0 = 9, data1 = 9);
            objsize(60);
            pos(680 - 76, var_3226 + 22);
            combox(var_3255, 100, "回数\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10");
            return [2 /*return*/];
        });
    });
}
function func844() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(844);
            clrobj(data0 = 9, data1 = 9);
            objsize(60);
            pos(680 - 76, var_3226 + 22);
            combox(var_3256, 100, "金額\n100G\n200G\n300G\n400G\n500G\n600G\n700G\n800G\n900G");
            return [2 /*return*/];
        });
    });
}
function func845() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(845);
            clrobj(data0 = 9, data1 = 9);
            objsize(1);
            pos(800, 800);
            button("ダミー", func850);
            return [2 /*return*/];
        });
    });
}
function func846() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(846);
            objsize(1);
            pos(800, 800);
            button("ダミー", func850);
            return [2 /*return*/];
        });
    });
}
function func847() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(847);
            var_3275 = 0;
            objsize(1);
            pos(800, 800);
            button("ダミー", func850);
            return [2 /*return*/];
        });
    });
}
function func848() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(848);
            clrobj(data0 = 13, data1 = 13);
            var_3276 = "";
            var_3277 = 0;
            if (var_3278 == 79) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず生まれる\n生まれない";
            }
            if (var_3278 == 94) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先";
            }
            if (var_3278 == 119) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先";
            }
            if (var_3278 == 69) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先";
            }
            if (var_3278 == 160) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先";
            }
            if (var_3278 == 27) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先";
            }
            if (var_3278 == 78) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先";
            }
            if (var_3278 == 93) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 7) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 141) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 56) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 136) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 48) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 95) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 15) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 80) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 21) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 121) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 155) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 151) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 126) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 40) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 41) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 42) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
            }
            if (var_3278 == 47) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず引き寄せ";
            }
            if (var_3278 == 67) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず引き寄せ";
            }
            if (var_3278 == 157) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず潜水攻撃";
            }
            if (var_3278 == 109) {
                var_3277 = 1;
                var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n透明\n透明ではない";
            }
            if (var_3277 == 1) {
                objsize(100);
                pos(680 - 116, var_3230 + 22);
                combox(var_3275, 100, var_3276);
            }
            if (var_3277 == 0) {
                objsize(1);
                pos(800, 800);
                button("ダミー", func850);
            }
            return [2 /*return*/];
        });
    });
}
function func849() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(849);
                    dialog(data0 = "メニュー画面に戻りますか？", data1 = 2, data2 = "");
                    if (!(stat == 7)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func851()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    clrobj();
                    if (var_10 == 0) {
                        width(680, 680);
                    }
                    if (var_10 == 1) {
                        width(680, 680);
                    }
                    var_626 = 0;
                    var_3273 = 0;
                    if (dirinfo(0) == var_30) {
                        chdir("問題");
                    }
                    return [4 /*yield*/, func883()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func850() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(850);
                    return [4 /*yield*/, func851()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func851() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_8, cnt2_9, cnt2_10, cnt2_11, cnt3_4, cnt3_5, cnt3_6, cnt3_7, cnt2_12, cnt2_13, cnt2_14, cnt2_15, cnt2_16, cnt2_17, cnt2_18, cnt2_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(851);
                    if (mousex > 10 && mousex < 330 && mousey > 10 && mousey < 330) {
                        var_3264 = Math.floor((mousex - 10) / 40);
                        var_3265 = Math.floor((mousey - 10) / 40);
                    }
                    else {
                        var_3264 = 20;
                        var_3265 = 20;
                    }
                    var_3279 = var_66 + var_3264 + 1;
                    var_3280 = var_67 + var_3265 + 1;
                    var_3281 = Math.floor((ginfo(10) - ginfo(12)) / 2);
                    var_3282 = var_3281;
                    var_3283 = ginfo(11) - 680 - var_3282;
                    var_3284 = ginfo(4) + var_3281 + 10;
                    var_3285 = ginfo(5) + var_3283 + 10;
                    var_3286 = var_3284 + 320;
                    var_3287 = var_3285 + 320;
                    var_3288 = ginfo(4) + var_3281;
                    var_3289 = ginfo(5) + var_3283;
                    var_3290 = var_3288 + 680;
                    var_3291 = var_3289 + 680;
                    return [4 /*yield*/, func080()];
                case 1:
                    _a.sent();
                    if (!(var_254 == 1 && var_66 > 3)) return [3 /*break*/, 5];
                    var_199 = 4;
                    var_66 = var_66 - 1;
                    var_3279 = var_66 + var_3264 + 1;
                    cnt2_8 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt2_8 < 2)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func852()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++cnt2_8;
                    return [3 /*break*/, 2];
                case 5:
                    if (!(var_257 == 1 && var_66 < 49)) return [3 /*break*/, 9];
                    var_199 = 6;
                    var_66 = var_66 + 1;
                    var_3279 = var_66 + var_3264 + 1;
                    cnt2_9 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt2_9 < 2)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func852()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    ++cnt2_9;
                    return [3 /*break*/, 6];
                case 9:
                    if (!(var_255 == 1 && var_67 > 3)) return [3 /*break*/, 13];
                    var_199 = 8;
                    var_67 = var_67 - 1;
                    var_3280 = var_67 + var_3265 + 1;
                    cnt2_10 = 0;
                    _a.label = 10;
                case 10:
                    if (!(cnt2_10 < 2)) return [3 /*break*/, 13];
                    return [4 /*yield*/, func852()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    ++cnt2_10;
                    return [3 /*break*/, 10];
                case 13:
                    if (!(var_259 == 1 && var_67 < 30)) return [3 /*break*/, 17];
                    var_199 = 2;
                    var_67 = var_67 + 1;
                    var_3280 = var_67 + var_3265 + 1;
                    cnt2_11 = 0;
                    _a.label = 14;
                case 14:
                    if (!(cnt2_11 < 2)) return [3 /*break*/, 17];
                    return [4 /*yield*/, func852()];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16:
                    ++cnt2_11;
                    return [3 /*break*/, 14];
                case 17:
                    if (!(ginfo(2) != (-1) && ginfo(0) > var_3288 && ginfo(0) < var_3290 && ginfo(1) > var_3289 && ginfo(1) < var_3291)) return [3 /*break*/, 33];
                    if (!(mousex >= 0 && mousex <= 10 && var_66 > 3)) return [3 /*break*/, 21];
                    var_199 = 4;
                    var_66 = var_66 - 1;
                    var_3279 = var_66 + var_3264 + 1;
                    cnt3_4 = 0;
                    _a.label = 18;
                case 18:
                    if (!(cnt3_4 < 2)) return [3 /*break*/, 21];
                    return [4 /*yield*/, func852()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    ++cnt3_4;
                    return [3 /*break*/, 18];
                case 21:
                    if (!(mousex >= 330 && mousex <= 680 && var_66 < 49)) return [3 /*break*/, 25];
                    var_199 = 6;
                    var_66 = var_66 + 1;
                    var_3279 = var_66 + var_3264 + 1;
                    cnt3_5 = 0;
                    _a.label = 22;
                case 22:
                    if (!(cnt3_5 < 2)) return [3 /*break*/, 25];
                    return [4 /*yield*/, func852()];
                case 23:
                    _a.sent();
                    _a.label = 24;
                case 24:
                    ++cnt3_5;
                    return [3 /*break*/, 22];
                case 25:
                    if (!(mousey >= 0 && mousey <= 10 && var_67 > 3)) return [3 /*break*/, 29];
                    var_199 = 8;
                    var_67 = var_67 - 1;
                    var_3280 = var_67 + var_3265 + 1;
                    cnt3_6 = 0;
                    _a.label = 26;
                case 26:
                    if (!(cnt3_6 < 2)) return [3 /*break*/, 29];
                    return [4 /*yield*/, func852()];
                case 27:
                    _a.sent();
                    _a.label = 28;
                case 28:
                    ++cnt3_6;
                    return [3 /*break*/, 26];
                case 29:
                    if (!(mousey >= 330 && mousey <= 680 && var_67 < 30)) return [3 /*break*/, 33];
                    var_199 = 2;
                    var_67 = var_67 + 1;
                    var_3280 = var_67 + var_3265 + 1;
                    cnt3_7 = 0;
                    _a.label = 30;
                case 30:
                    if (!(cnt3_7 < 2)) return [3 /*break*/, 33];
                    return [4 /*yield*/, func852()];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32:
                    ++cnt3_7;
                    return [3 /*break*/, 30];
                case 33:
                    conf_keyon = getkey(1);
                    if (!(conf_keyon == 1)) return [3 /*break*/, 35];
                    return [4 /*yield*/, func863()];
                case 34:
                    _a.sent();
                    return [2 /*return*/];
                case 35:
                    conf_keyon = stick(null, 1);
                    if (!(conf_keyon == 512)) return [3 /*break*/, 37];
                    return [4 /*yield*/, func862()];
                case 36:
                    _a.sent();
                    return [2 /*return*/];
                case 37:
                    if (!(var_3246 != var_3247)) return [3 /*break*/, 42];
                    var_3278 = var_3292[var_3246];
                    var_3275 = 0;
                    var_3293 = 0;
                    return [4 /*yield*/, func848()];
                case 38:
                    _a.sent();
                    var_3247 = var_3246;
                    var_3266 = 7;
                    objsel(0);
                    cnt2_12 = 0;
                    _a.label = 39;
                case 39:
                    if (!(cnt2_12 < 10)) return [3 /*break*/, 42];
                    return [4 /*yield*/, func852()];
                case 40:
                    _a.sent();
                    _a.label = 41;
                case 41:
                    ++cnt2_12;
                    return [3 /*break*/, 39];
                case 42:
                    if (!(var_3275 != var_3293)) return [3 /*break*/, 46];
                    var_3293 = var_3275;
                    var_3266 = 7;
                    objsel(0);
                    cnt2_13 = 0;
                    _a.label = 43;
                case 43:
                    if (!(cnt2_13 < 10)) return [3 /*break*/, 46];
                    return [4 /*yield*/, func852()];
                case 44:
                    _a.sent();
                    _a.label = 45;
                case 45:
                    ++cnt2_13;
                    return [3 /*break*/, 43];
                case 46:
                    if (!(var_873 != var_3248)) return [3 /*break*/, 60];
                    var_3251 = 0;
                    if (var_884[var_873] >= 100 && var_884[var_873] < 400) {
                        var_3251 = 1;
                    }
                    if (var_884[var_873] >= 400 && var_884[var_873] < 500) {
                        var_3251 = 2;
                    }
                    if (var_884[var_873] >= 800 && var_884[var_873] < 900) {
                        var_3251 = 3;
                    }
                    if (var_884[var_873] == 1) {
                        var_3251 = 4;
                    }
                    if (!(var_3252 != var_3251 && var_3251 == 0)) return [3 /*break*/, 48];
                    return [4 /*yield*/, func845()];
                case 47:
                    _a.sent();
                    _a.label = 48;
                case 48:
                    if (!(var_3252 != var_3251 && var_3251 == 1)) return [3 /*break*/, 50];
                    return [4 /*yield*/, func842()];
                case 49:
                    _a.sent();
                    _a.label = 50;
                case 50:
                    if (!(var_3252 != var_3251 && var_3251 == 2)) return [3 /*break*/, 52];
                    return [4 /*yield*/, func843()];
                case 51:
                    _a.sent();
                    _a.label = 52;
                case 52:
                    if (!(var_3252 != var_3251 && var_3251 == 3)) return [3 /*break*/, 54];
                    return [4 /*yield*/, func843()];
                case 53:
                    _a.sent();
                    _a.label = 54;
                case 54:
                    if (!(var_3252 != var_3251 && var_3251 == 4)) return [3 /*break*/, 56];
                    return [4 /*yield*/, func844()];
                case 55:
                    _a.sent();
                    _a.label = 56;
                case 56:
                    var_3252 = var_3251;
                    var_3248 = var_873;
                    if (var_884[var_873] != 0) {
                        var_3266 = 8;
                    }
                    objsel(0);
                    cnt2_14 = 0;
                    _a.label = 57;
                case 57:
                    if (!(cnt2_14 < 10)) return [3 /*break*/, 60];
                    return [4 /*yield*/, func852()];
                case 58:
                    _a.sent();
                    _a.label = 59;
                case 59:
                    ++cnt2_14;
                    return [3 /*break*/, 57];
                case 60:
                    if (!(var_3254 != var_3257)) return [3 /*break*/, 64];
                    var_3257 = var_3254;
                    var_3266 = 8;
                    objsel(0);
                    cnt2_15 = 0;
                    _a.label = 61;
                case 61:
                    if (!(cnt2_15 < 10)) return [3 /*break*/, 64];
                    return [4 /*yield*/, func852()];
                case 62:
                    _a.sent();
                    _a.label = 63;
                case 63:
                    ++cnt2_15;
                    return [3 /*break*/, 61];
                case 64:
                    if (!(var_3255 != var_3258)) return [3 /*break*/, 68];
                    var_3258 = var_3255;
                    var_3266 = 8;
                    objsel(0);
                    cnt2_16 = 0;
                    _a.label = 65;
                case 65:
                    if (!(cnt2_16 < 10)) return [3 /*break*/, 68];
                    return [4 /*yield*/, func852()];
                case 66:
                    _a.sent();
                    _a.label = 67;
                case 67:
                    ++cnt2_16;
                    return [3 /*break*/, 65];
                case 68:
                    if (!(var_3256 != var_3259)) return [3 /*break*/, 72];
                    var_3259 = var_3256;
                    var_3266 = 8;
                    objsel(0);
                    cnt2_17 = 0;
                    _a.label = 69;
                case 69:
                    if (!(cnt2_17 < 10)) return [3 /*break*/, 72];
                    return [4 /*yield*/, func852()];
                case 70:
                    _a.sent();
                    _a.label = 71;
                case 71:
                    ++cnt2_17;
                    return [3 /*break*/, 69];
                case 72:
                    if (!(var_3249 != var_3250)) return [3 /*break*/, 76];
                    var_3250 = var_3249;
                    var_3266 = 9;
                    objsel(0);
                    cnt2_18 = 0;
                    _a.label = 73;
                case 73:
                    if (!(cnt2_18 < 10)) return [3 /*break*/, 76];
                    return [4 /*yield*/, func852()];
                case 74:
                    _a.sent();
                    _a.label = 75;
                case 75:
                    ++cnt2_18;
                    return [3 /*break*/, 73];
                case 76:
                    if (!(var_3245 != var_3267)) return [3 /*break*/, 81];
                    var_3267 = var_3245;
                    var_3270 = var_3245;
                    var_3266 = 0;
                    objsel(0);
                    cnt2_19 = 0;
                    _a.label = 77;
                case 77:
                    if (!(cnt2_19 < 10)) return [3 /*break*/, 80];
                    return [4 /*yield*/, func852()];
                case 78:
                    _a.sent();
                    _a.label = 79;
                case 79:
                    ++cnt2_19;
                    return [3 /*break*/, 77];
                case 80:
                    if (var_3270 == 0) {
                        var_3270 = 1;
                    }
                    _a.label = 81;
                case 81:
                    if (!(var_3260 != var_3262)) return [3 /*break*/, 83];
                    var_3262 = var_3260;
                    return [4 /*yield*/, func857()];
                case 82:
                    _a.sent();
                    _a.label = 83;
                case 83: return [4 /*yield*/, func852()];
                case 84:
                    _a.sent();
                    return [4 /*yield*/, func851()];
                case 85:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func852() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(852);
                    redraw(0);
                    return [4 /*yield*/, func855()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func860()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func861()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func853()];
                case 4:
                    _a.sent();
                    if (!(var_3294 != 0)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func867()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    redraw(1);
                    return [4 /*yield*/, wait(1)];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func853() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(853);
                    gmode(2);
                    font("ＭＳ Ｐゴシック", 12);
                    color(236, 233, 216);
                    boxf(left = 680, top1 = 0, right = 680, bottom = 680);
                    if (!(var_3279 <= var_31 && var_3280 <= var_32)) return [3 /*break*/, 7];
                    var_3295 = var_3279 - 5;
                    var_3296 = var_3280 - 5;
                    var_3297 = "x:" + var_3295;
                    var_3298 = "y:" + var_3296;
                    var_3272 = "";
                    if (!(var_82[var_3279][var_3280] >= 1)) return [3 /*break*/, 2];
                    var_2501 = var_82[var_3279][var_3280];
                    var_437 = var_83[var_2501].Var0;
                    return [4 /*yield*/, func626()];
                case 1:
                    _a.sent();
                    var_3299 = var_891;
                    var_3272 = var_3272 + "  " + var_3299;
                    _a.label = 2;
                case 2:
                    if (var_65[var_3279][var_3280] == 1) {
                        var_3272 = var_3272 + "  " + "開始地点";
                    }
                    if (!(var_77[var_3279][var_3280] >= 1)) return [3 /*break*/, 4];
                    var_2501 = var_77[var_3279][var_3280];
                    item_list = var_78[var_2501].Var0;
                    var_2176 = 1;
                    return [4 /*yield*/, func492()];
                case 3:
                    _a.sent();
                    var_2176 = 0;
                    var_3299 = item_name;
                    if (var_78[var_2501].Var4 >= 1 && var_78[var_2501].Var4 <= 10) {
                        var_3299 = var_3299 + "" + "+" + var_78[var_2501].Var4;
                    }
                    if (var_78[var_2501].Var4 == 11 || var_78[var_2501].Var12 == 1) {
                        var_3299 = var_3299 + "" + "[呪]";
                    }
                    if (var_78[var_2501].Var3 >= 1) {
                        var_3299 = var_3299 + "" + "(" + var_78[var_2501].Var3 + ")";
                    }
                    if (var_78[var_2501].Var7 >= 1) {
                        var_3299 = var_3299 + "" + "(" + var_78[var_2501].Var7 + ")";
                    }
                    if (var_78[var_2501].Var13 >= 1) {
                        var_3299 = var_3299 + " " + var_78[var_2501].Var13 + "G";
                    }
                    var_3272 = var_3272 + "  " + var_3299;
                    _a.label = 4;
                case 4:
                    if (!(var_80[var_3279][var_3280] >= 1)) return [3 /*break*/, 6];
                    var_2501 = var_80[var_3279][var_3280];
                    var_888 = var_81[var_2501][0];
                    return [4 /*yield*/, func554()];
                case 5:
                    _a.sent();
                    var_3299 = var_889;
                    var_3272 = var_3272 + "  " + var_3299;
                    _a.label = 6;
                case 6:
                    if (var_73[var_3279][var_3280] == 1) {
                        var_3272 = var_3272 + "  " + "階段";
                    }
                    _a.label = 7;
                case 7:
                    color(0, 0, 0);
                    boxf(left = var_3239 + 10, top1 = var_3240 + var_3242 - 20, right = var_3239 + 80 + 10, bottom = var_3240 + var_3242 - 5);
                    color(255, 255, 0);
                    pos(var_3239 + 20, var_3240 + var_3242 - 18);
                    mes("" + var_3297);
                    pos(var_3239 + 20 + 35, var_3240 + var_3242 - 18);
                    mes("" + var_3298);
                    color(0, 0, 0);
                    boxf(left = 350, top1 = 10, right = 670, bottom = 30);
                    color(255, 255, 255);
                    pos(355, 15);
                    mes("" + var_3272);
                    color(80, 80, 80);
                    boxf(var_3211, var_3212, var_3211 + 40, var_3212 + 40);
                    boxf(var_3213, var_3214, var_3213 + 40, var_3214 + 40);
                    boxf(var_3215, var_3216, var_3215 + 40, var_3216 + 40);
                    boxf(var_3217, var_3218, var_3217 + 40, var_3218 + 40);
                    boxf(var_3219, var_3220, var_3219 + 40, var_3220 + 40);
                    boxf(var_3221, var_3222, var_3221 + 40, var_3222 + 40);
                    boxf(var_3223, var_3224, var_3223 + 40, var_3224 + 40);
                    boxf(var_3229, var_3230, var_3229 + 40, var_3230 + 40);
                    boxf(var_3225, var_3226, var_3225 + 40, var_3226 + 40);
                    boxf(var_3227, var_3228, var_3227 + 40, var_3228 + 40);
                    pos(var_3211, var_3212);
                    gcopy(5, 0, var_3263 * 40, 40, 40);
                    pos(var_3213, var_3214);
                    gcopy(5, 120, var_3263 * 40, 40, 40);
                    pos(var_3215, var_3216);
                    gcopy(5, 240, var_3263 * 40, 40, 40);
                    pos(var_3217, var_3218);
                    gcopy(5, 1520, var_3263 * 40, 40, 40);
                    pos(var_3219, var_3220);
                    gcopy(3, 280, 120, 40, 40);
                    pos(var_3221, var_3222);
                    gcopy(5, 1200, var_3263 * 40, 40, 40);
                    pos(var_3223, var_3224);
                    gcopy(3, 40, 0, 40, 40);
                    pos(var_3229, var_3230);
                    var_1642 = 1;
                    var_83[0].Var0 = var_3292[var_3246];
                    var_83[0].Var5 = 2;
                    var_1641 = 0;
                    var_1640 = 2;
                    return [4 /*yield*/, func567()];
                case 8:
                    _a.sent();
                    var_1642 = 0;
                    gmode(2);
                    pos(var_3225, var_3226);
                    var_78[0].Var0 = var_884[var_873];
                    item_list = var_78[0].Var0;
                    return [4 /*yield*/, func397()];
                case 9:
                    _a.sent();
                    gmode(2);
                    pos(var_3227, var_3228);
                    var_888 = var_3300[var_3249];
                    return [4 /*yield*/, func539()];
                case 10:
                    _a.sent();
                    gmode(2);
                    font("ＭＳ Ｐゴシック", 11);
                    color(255, 255, 255);
                    var_3301 = var_3245;
                    if (var_3301 == 0) {
                        var_3301 = 1;
                    }
                    if (var_3301 < 10) {
                        pos(var_3211 + 3, var_3212 + 25);
                        mes("部屋" + " " + var_3301);
                    }
                    if (var_3301 >= 10) {
                        pos(var_3211 + 3, var_3212 + 25);
                        mes("部屋" + "" + var_3301);
                    }
                    pos(var_3213 + 3, var_3214 + 25);
                    mes("通路");
                    pos(var_3215 + 3, var_3216 + 25);
                    mes("壁");
                    pos(var_3211, var_3212);
                    if (var_3266 == 0) {
                        gcopy(3, 240, 120, 40, 40);
                    }
                    else {
                        gcopy(3, 160, 120, 40, 40);
                    }
                    pos(var_3213, var_3214);
                    if (var_3266 == 1) {
                        gcopy(3, 240, 120, 40, 40);
                    }
                    else {
                        gcopy(3, 160, 120, 40, 40);
                    }
                    pos(var_3215, var_3216);
                    if (var_3266 == 2) {
                        gcopy(3, 240, 120, 40, 40);
                    }
                    else {
                        gcopy(3, 160, 120, 40, 40);
                    }
                    pos(var_3217, var_3218);
                    if (var_3266 == 3) {
                        gcopy(3, 240, 120, 40, 40);
                    }
                    else {
                        gcopy(3, 160, 120, 40, 40);
                    }
                    pos(var_3219, var_3220);
                    if (var_3266 == 4) {
                        gcopy(3, 240, 120, 40, 40);
                    }
                    else {
                        gcopy(3, 160, 120, 40, 40);
                    }
                    pos(var_3221, var_3222);
                    if (var_3266 == 5) {
                        gcopy(3, 240, 120, 40, 40);
                    }
                    else {
                        gcopy(3, 160, 120, 40, 40);
                    }
                    pos(var_3223, var_3224);
                    if (var_3266 == 6) {
                        gcopy(3, 240, 120, 40, 40);
                    }
                    else {
                        gcopy(3, 160, 120, 40, 40);
                    }
                    pos(var_3229, var_3230);
                    if (var_3266 == 7) {
                        gcopy(3, 240, 120, 40, 40);
                    }
                    else {
                        gcopy(3, 160, 120, 40, 40);
                    }
                    pos(var_3225, var_3226);
                    if (var_3266 == 8) {
                        gcopy(3, 240, 120, 40, 40);
                    }
                    else {
                        gcopy(3, 160, 120, 40, 40);
                    }
                    pos(var_3227, var_3228);
                    if (var_3266 == 9) {
                        gcopy(3, 240, 120, 40, 40);
                    }
                    else {
                        gcopy(3, 160, 120, 40, 40);
                    }
                    color(255, 255, 255);
                    line(var_3211 - 5, var_3212 - 10, 673, var_3212 - 10);
                    line(var_3211 - 5, var_3212 - 10, var_3211 - 5, var_3216 + 48);
                    color(100, 100, 100);
                    line(var_3211 - 5, var_3216 + 48, 673, var_3216 + 48);
                    line(var_3211 - 5, var_3216 + 48 + 1, 673, var_3216 + 48 + 1);
                    line(673, var_3212 - 10, 673, var_3216 + 48);
                    line(673 - 1, var_3212 - 10, 673 - 1, var_3216 + 48);
                    color(0, 0, 0);
                    boxf(left = 0, top1 = 0, right = 680, bottom = 10);
                    boxf(left = 0, top1 = 330, right = 680, bottom = 680);
                    boxf(left = 0, top1 = 0, right = 10, bottom = 680);
                    boxf(left = 330, top1 = 0, right = 680, bottom = 680);
                    return [4 /*yield*/, func854()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func854() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_99, cnt2_20;
        return __generator(this, function (_a) {
            dbgprt(854);
            color(255, 255, 255);
            line(var_3239, var_3240, var_3239 + var_3241, var_3240);
            line(var_3239, var_3240, var_3239, var_3240 + var_3242);
            color(100, 100, 100);
            line(var_3239, var_3240 + var_3242, var_3239 + var_3241, var_3240 + var_3242);
            line(var_3239, var_3240 + var_3242 + 1, var_3239 + var_3241, var_3240 + var_3242 + 1);
            line(var_3239 + var_3241, var_3240, var_3239 + var_3241, var_3240 + var_3242);
            line(var_3239 + var_3241 - 1, var_3240, var_3239 + var_3241 - 1, var_3240 + var_3242);
            var_1149 = 4;
            var_449 = 2;
            var_3302 = 1;
            for (cnt1_99 = 0; cnt1_99 < var_3238; ++cnt1_99) {
                var_3303 = 4;
                var_447 = 2;
                var_3304 = 1;
                for (cnt2_20 = 0; cnt2_20 < var_3237; ++cnt2_20) {
                    if (var_71[var_3303][var_1149] == 0) {
                        color(0, 0, 0);
                        boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3233, var_449 * var_3233 + var_3232 + var_3233);
                    }
                    if (var_3303 == 4 || var_1149 == 4 || var_3304 == var_3237 || var_3302 == var_3238) {
                        color(130, 130, 130);
                        boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3233, var_449 * var_3233 + var_3232 + var_3233);
                    }
                    if (var_71[var_3303][var_1149] == 13) {
                        color(0, 0, 0);
                        boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3233, var_449 * var_3233 + var_3232 + var_3233);
                    }
                    if (var_71[var_3303][var_1149] == 14 || var_71[var_3303][var_1149] == 21 || var_71[var_3303][var_1149] == 22 || var_71[var_3303][var_1149] == 23 || var_71[var_3303][var_1149] == 24) {
                        color(0, 0, 255);
                        boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3233, var_449 * var_3233 + var_3232 + var_3233);
                    }
                    if (var_71[var_3303][var_1149] > 0 && var_71[var_3303][var_1149] <= 12) {
                        color(0, 0, 255);
                        boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3233, var_449 * var_3233 + var_3232 + var_3233);
                    }
                    if (var_80[var_3303][var_1149] >= 1) {
                        color(255, 0, 255);
                        boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3234, var_449 * var_3233 + var_3232 + var_3234);
                    }
                    if (var_77[var_3303][var_1149] >= 1) {
                        color(0, 255, 255);
                        boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3234, var_449 * var_3233 + var_3232 + var_3234);
                    }
                    if (var_73[var_3303][var_1149] == 1) {
                        color(0, 255, 255);
                        boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3233, var_449 * var_3233 + var_3232 + var_3233);
                        color(0, 0, 255);
                        pset(var_447 * var_3233 + var_3231 + 1, var_449 * var_3233 + var_3232 + 1);
                    }
                    if (var_82[var_3303][var_1149] >= 1) {
                        color(255, 0, 0);
                        boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3234, var_449 * var_3233 + var_3232 + var_3234);
                    }
                    if (var_65[var_3303][var_1149] == 1) {
                        color(255, 255, 255);
                        boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3234, var_449 * var_3233 + var_3232 + var_3234);
                    }
                    var_447++;
                    var_3303++;
                    var_3304++;
                }
                var_449++;
                var_1149++;
                var_3302++;
            }
            color(255, 255, 0);
            line((var_66 - 1) * var_3233 + var_3231 - 1, (var_67 - 1) * var_3233 + var_3232, (var_66 + 7) * var_3233 + var_3231, (var_67 - 1) * var_3233 + var_3232);
            line((var_66 - 1) * var_3233 + var_3231, (var_67 - 1) * var_3233 + var_3232, (var_66 - 1) * var_3233 + var_3231, (var_67 + 7) * var_3233 + var_3232);
            line((var_66 + 7) * var_3233 + var_3231, (var_67 - 1) * var_3233 + var_3232, (var_66 + 7) * var_3233 + var_3231, (var_67 + 7) * var_3233 + var_3232);
            line((var_66 - 1) * var_3233 + var_3231, (var_67 + 7) * var_3233 + var_3232, (var_66 + 7) * var_3233 + var_3231, (var_67 + 7) * var_3233 + var_3232);
            return [2 /*return*/];
        });
    });
}
function func855() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_100, cnt2_21;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(855);
                    gmode(2);
                    var_449 = var_67;
                    var_763 = -1;
                    if (var_449 < 0) {
                        var_449 = 0;
                    }
                    for (cnt1_100 = 0; cnt1_100 < 11; ++cnt1_100) {
                        var_447 = var_66;
                        var_764 = -1;
                        if (var_447 < 0) {
                            var_447 = 0;
                        }
                        for (cnt2_21 = 0; cnt2_21 < 11; ++cnt2_21) {
                            if (var_447 < 5 || var_447 > 56 || var_449 < 5 || var_449 > 37) {
                                var_92 = 6;
                            }
                            else {
                                var_92 = var_3263;
                            }
                            var_1146 = var_447 - 1;
                            if (var_1146 < 0) {
                                var_1146 = 0;
                            }
                            var_1147 = var_447 + 1;
                            var_1148 = var_449 - 1;
                            if (var_1148 < 0) {
                                var_1148 = 0;
                            }
                            var_1149 = var_449 + 1;
                            var_1145 = 0;
                            if (var_409 == 0) {
                                var_778 = 0;
                            }
                            if (var_409 == 1) {
                                var_778 = 10;
                            }
                            if (var_409 == 2) {
                                var_778 = 20;
                            }
                            if (var_409 == 3) {
                                var_778 = 30;
                            }
                            if (var_409 == 4) {
                                var_778 = 40;
                            }
                            if (var_217 == 1) {
                                var_778 = 0;
                            }
                            if (var_199 == 4) {
                                var_1150 = var_764 * var_35 - var_778;
                                var_1151 = var_763 * var_36 + var_1145;
                            }
                            if (var_199 == 6) {
                                var_1150 = var_764 * var_35 + var_778;
                                var_1151 = var_763 * var_36 + var_1145;
                            }
                            if (var_199 == 8) {
                                var_1150 = var_764 * var_35;
                                var_1151 = var_763 * var_36 - var_778 + var_1145;
                            }
                            if (var_199 == 2) {
                                var_1150 = var_764 * var_35;
                                var_1151 = var_763 * var_36 + var_778 + var_1145;
                            }
                            if (var_199 == 1) {
                                var_1150 = var_764 * var_35 - var_778;
                                var_1151 = var_763 * var_36 + var_778 + var_1145;
                            }
                            if (var_199 == 3) {
                                var_1150 = var_764 * var_35 + var_778;
                                var_1151 = var_763 * var_36 + var_778 + var_1145;
                            }
                            if (var_199 == 7) {
                                var_1150 = var_764 * var_35 - var_778;
                                var_1151 = var_763 * var_36 - var_778 + var_1145;
                            }
                            if (var_199 == 9) {
                                var_1150 = var_764 * var_35 + var_778;
                                var_1151 = var_763 * var_36 - var_778 + var_1145;
                            }
                            var_1150 = var_1150 + 10;
                            var_1151 = var_1151 + 10;
                            pos(var_1150, var_1151);
                            if (var_71[var_447][var_449] >= 1 && var_71[var_447][var_449] <= 12) {
                                gcopy(5, 0, var_92 * 40, 40, 40);
                                pos(var_1150 + 3, var_1151 + 30);
                                font("ＭＳ Ｐゴシック", 11);
                                color(155, 155, 155);
                                mes(var_71[var_447][var_449]);
                            }
                            if (var_73[var_447][var_449] == 1) {
                                gcopy(5, 0, var_92 * 40, 40, 40);
                            }
                            if (var_71[var_447][var_449] == 14 || var_71[var_447][var_449] == 21 || var_71[var_447][var_449] == 22 || var_71[var_447][var_449] == 23 || var_71[var_447][var_449] == 24) {
                                gcopy(5, 120, var_92 * 40, 40, 40);
                            }
                            if (var_71[var_447][var_449] == 0) {
                                if (var_87[var_447][var_449] <= 5) {
                                    gcopy(5, 240, var_92 * 40, 40, 40);
                                }
                                if (var_87[var_447][var_449] == 6 || var_87[var_447][var_449] == 7) {
                                    gcopy(5, 280, var_92 * 40, 40, 40);
                                }
                                if (var_87[var_447][var_449] == 8 || var_87[var_447][var_449] == 9) {
                                    gcopy(5, 320, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_1146][var_1148] != 0 && var_71[var_1146][var_1148] <= 24 && var_71[var_1146][var_449] == 0 && var_71[var_447][var_1148] == 0) {
                                    gcopy(5, 760, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_1147][var_1148] != 0 && var_71[var_1147][var_1148] <= 24 && var_71[var_1147][var_449] == 0 && var_71[var_447][var_1148] == 0) {
                                    gcopy(5, 800, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_1146][var_1149] != 0 && var_71[var_1146][var_1149] <= 24 && var_71[var_447][var_1149] == 0 && var_71[var_1146][var_449] == 0) {
                                    gcopy(5, 840, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_1147][var_1149] != 0 && var_71[var_1147][var_1149] <= 24 && var_71[var_447][var_1149] == 0 && var_71[var_1147][var_449] == 0) {
                                    gcopy(5, 880, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24 && var_71[var_447][var_1149] == 0 && var_71[var_447][var_1148] == 0) {
                                    gcopy(5, 520, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1149] == 0 && var_71[var_447][var_1148] == 0) {
                                    gcopy(5, 560, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_1146][var_449] == 0 && var_71[var_1147][var_449] == 0) {
                                    gcopy(5, 480, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1146][var_449] == 0 && var_71[var_1147][var_449] == 0) {
                                    if (var_87[var_447][var_449] <= 3) {
                                        gcopy(5, 360, var_92 * 40, 40, 40);
                                    }
                                    if (var_87[var_447][var_449] == 4 || var_87[var_447][var_449] == 5) {
                                        gcopy(5, 400, var_92 * 40, 40, 40);
                                    }
                                    if (var_87[var_447][var_449] == 6 || var_87[var_447][var_449] == 7) {
                                        gcopy(5, 440, var_92 * 40, 40, 40);
                                    }
                                    if (var_87[var_447][var_449] == 8 || var_87[var_447][var_449] == 9) {
                                        if (var_1153 == 0 || var_1153 == 1) {
                                            gcopy(5, 1240, var_92 * 40, 40, 40);
                                        }
                                        if (var_1153 == 2 || var_1153 == 3) {
                                            gcopy(5, 1280, var_92 * 40, 40, 40);
                                        }
                                        if (var_1153 == 4 || var_1153 == 5) {
                                            gcopy(5, 1320, var_92 * 40, 40, 40);
                                        }
                                        if (var_1153 == 6 || var_1153 == 7) {
                                            gcopy(5, 1360, var_92 * 40, 40, 40);
                                        }
                                    }
                                }
                                if (var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_447][var_1149] == 0 && var_71[var_1147][var_449] == 0) {
                                    gcopy(5, 600, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_447][var_1149] == 0 && var_71[var_1146][var_449] == 0) {
                                    gcopy(5, 640, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24 && var_71[var_447][var_1148] == 0 && var_71[var_1147][var_449] == 0) {
                                    gcopy(5, 680, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1148] == 0 && var_71[var_1146][var_449] == 0) {
                                    gcopy(5, 720, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1149] == 0) {
                                    gcopy(5, 1000, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24 && var_71[var_447][var_1148] == 0) {
                                    gcopy(5, 1040, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_1147][var_449] == 0) {
                                    gcopy(5, 1080, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_1146][var_449] == 0) {
                                    gcopy(5, 1120, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24) {
                                    gcopy(5, 1160, var_92 * 40, 40, 40);
                                }
                            }
                            if (var_71[var_447][var_449] == 13) {
                                if (var_1153 == 0 || var_1153 == 1 || var_1153 == 2 || var_1153 == 3) {
                                    gcopy(5, 1520, var_92 * 40, 40, 40);
                                }
                                if (var_1153 == 4 || var_1153 == 5 || var_1153 == 6 || var_1153 == 7) {
                                    gcopy(5, 1560, var_92 * 40, 40, 40);
                                }
                                if (var_1153 == 8 || var_1153 == 9 || var_1153 == 10 || var_1153 == 11) {
                                    gcopy(5, 1600, var_92 * 40, 40, 40);
                                }
                                if (var_71[var_447][var_1148] != 13) {
                                    if (var_71[var_1146][var_449] != 13 && var_71[var_1147][var_449] != 13) {
                                        pos(var_1150 + 8, var_1151);
                                        gcopy(5, 1400 + 8, var_92 * 40, 24, 4);
                                    }
                                    if (var_71[var_1146][var_449] != 13 && var_71[var_1147][var_449] == 13) {
                                        pos(var_1150 + 8, var_1151);
                                        gcopy(5, 1400 + 8, var_92 * 40, 32, 4);
                                    }
                                    if (var_71[var_1146][var_449] == 13 && var_71[var_1147][var_449] != 13) {
                                        pos(var_1150, var_1151);
                                        gcopy(5, 1400, var_92 * 40, 32, 4);
                                    }
                                    if (var_71[var_1146][var_449] == 13 && var_71[var_1147][var_449] == 13) {
                                        pos(var_1150, var_1151);
                                        gcopy(5, 1400, var_92 * 40, 40, 4);
                                    }
                                }
                                if (var_71[var_447][var_1149] != 13) {
                                    if (var_71[var_1146][var_449] != 13 && var_71[var_1147][var_449] != 13) {
                                        pos(var_1150 + 8, var_1151 + 36);
                                        gcopy(5, 1400 + 8, var_92 * 40 + 36, 24, 4);
                                    }
                                    if (var_71[var_1146][var_449] != 13 && var_71[var_1147][var_449] == 13) {
                                        pos(var_1150 + 8, var_1151 + 36);
                                        gcopy(5, 1400 + 8, var_92 * 40 + 36, 32, 4);
                                    }
                                    if (var_71[var_1146][var_449] == 13 && var_71[var_1147][var_449] != 13) {
                                        pos(var_1150, var_1151 + 36);
                                        gcopy(5, 1400, var_92 * 40 + 36, 32, 4);
                                    }
                                    if (var_71[var_1146][var_449] == 13 && var_71[var_1147][var_449] == 13) {
                                        pos(var_1150, var_1151 + 36);
                                        gcopy(5, 1400, var_92 * 40 + 36, 40, 4);
                                    }
                                }
                                if (var_71[var_1146][var_449] != 13) {
                                    if (var_71[var_447][var_1149] != 13 && var_71[var_447][var_1148] != 13) {
                                        pos(var_1150, var_1151 + 8);
                                        gcopy(5, 1440, var_92 * 40 + 8, 4, 24);
                                    }
                                    if (var_71[var_447][var_1149] != 13 && var_71[var_447][var_1148] == 13) {
                                        pos(var_1150, var_1151);
                                        gcopy(5, 1440, var_92 * 40, 4, 32);
                                    }
                                    if (var_71[var_447][var_1149] == 13 && var_71[var_447][var_1148] != 13) {
                                        pos(var_1150, var_1151 + 8);
                                        gcopy(5, 1440, var_92 * 40 + 8, 4, 32);
                                    }
                                    if (var_71[var_447][var_1149] == 13 && var_71[var_447][var_1148] == 13) {
                                        pos(var_1150, var_1151);
                                        gcopy(5, 1440, var_92 * 40, 4, 40);
                                    }
                                }
                                if (var_71[var_1147][var_449] != 13) {
                                    if (var_71[var_447][var_1149] != 13 && var_71[var_447][var_1148] != 13) {
                                        pos(var_1150 + 36, var_1151 + 8);
                                        gcopy(5, 1440 + 36, var_92 * 40 + 8, 4, 24);
                                    }
                                    if (var_71[var_447][var_1149] != 13 && var_71[var_447][var_1148] == 13) {
                                        pos(var_1150 + 36, var_1151);
                                        gcopy(5, 1440 + 36, var_92 * 40, 4, 32);
                                    }
                                    if (var_71[var_447][var_1149] == 13 && var_71[var_447][var_1148] != 13) {
                                        pos(var_1150 + 36, var_1151 + 8);
                                        gcopy(5, 1440 + 36, var_92 * 40 + 8, 4, 32);
                                    }
                                    if (var_71[var_447][var_1149] == 13 && var_71[var_447][var_1148] == 13) {
                                        pos(var_1150 + 36, var_1151);
                                        gcopy(5, 1440 + 36, var_92 * 40, 4, 40);
                                    }
                                }
                                if (var_71[var_447][var_1148] != 13 && var_71[var_1146][var_449] != 13) {
                                    pos(var_1150, var_1151);
                                    gcopy(5, 1480, var_92 * 40, 8, 8);
                                }
                                if (var_71[var_447][var_1149] != 13 && var_71[var_1146][var_449] != 13) {
                                    pos(var_1150, var_1151 + 32);
                                    gcopy(5, 1480, var_92 * 40 + 32, 8, 8);
                                }
                                if (var_71[var_447][var_1148] != 13 && var_71[var_1147][var_449] != 13) {
                                    pos(var_1150 + 32, var_1151);
                                    gcopy(5, 1480 + 32, var_92 * 40, 8, 8);
                                }
                                if (var_71[var_447][var_1149] != 13 && var_71[var_1147][var_449] != 13) {
                                    pos(var_1150 + 32, var_1151 + 32);
                                    gcopy(5, 1480 + 32, var_92 * 40 + 32, 8, 8);
                                }
                                if (var_71[var_447][var_1148] == 13 && var_71[var_1146][var_449] == 13 && var_71[var_1146][var_1148] != 13) {
                                    pos(var_1150, var_1151);
                                    gcopy(5, 1480 + 16, var_92 * 40 + 16, 4, 4);
                                }
                                if (var_71[var_447][var_1148] == 13 && var_71[var_1147][var_449] == 13 && var_71[var_1147][var_1148] != 13) {
                                    pos(var_1150 + 37, var_1151);
                                    gcopy(5, 1480 + 21, var_92 * 40 + 16, 4, 4);
                                }
                                if (var_71[var_447][var_1149] == 13 && var_71[var_1147][var_449] == 13 && var_71[var_1147][var_1149] != 13) {
                                    pos(var_1150 - 1, var_1151 + 37);
                                    gcopy(5, 1480 + 15, var_92 * 40 + 22, 4, 4);
                                }
                                if (var_71[var_447][var_1149] == 13 && var_71[var_1147][var_449] == 13 && var_71[var_1147][var_1149] != 13) {
                                    pos(var_1150 + 37, var_1151 + 37);
                                    gcopy(5, 1480 + 21, var_92 * 40 + 22, 4, 4);
                                }
                            }
                            if (var_71[var_447][var_449] >= 21 && var_71[var_447][var_449] <= 24) {
                                pos(var_1150 + 3, var_1151 + 20);
                                font("ＭＳ Ｐゴシック", 11);
                                color(155, 155, 155);
                                if (var_71[var_447][var_449] == 21) {
                                    mes("上出口");
                                }
                                if (var_71[var_447][var_449] == 22) {
                                    mes("下出口");
                                }
                                if (var_71[var_447][var_449] == 23) {
                                    mes("左出口");
                                }
                                if (var_71[var_447][var_449] == 24) {
                                    mes("右出口");
                                }
                            }
                            var_764 = var_764 + 1;
                            var_447 = var_447 + 1;
                        }
                        var_763 = var_763 + 1;
                        var_449 = var_449 + 1;
                    }
                    return [4 /*yield*/, func859()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func856() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(856);
            objsize(100);
            pos(var_3243, var_3244 + 86);
            combox(var_3260, 100, "茶色迷宮\n青色迷宮\n黄色迷宮\n茶色洞窟\n青色洞窟\n黄色洞窟\n溶岩洞窟\n霧の館\n虹村屋敷\n吉良屋敷\nポンペイ\n下水道\n森(明)\n浜辺(明)\n砂漠(明)\n水の都(明)");
            return [2 /*return*/];
        });
    });
}
function func857() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(857);
                    return [4 /*yield*/, func858()];
                case 1:
                    _a.sent();
                    var_92 = var_3261;
                    var_3263 = var_92;
                    objsel(0);
                    return [4 /*yield*/, func852()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func858() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(858);
            if (var_3260 == 0) {
                var_3261 = 2;
            }
            if (var_3260 == 1) {
                var_3261 = 6;
            }
            if (var_3260 == 2) {
                var_3261 = 9;
            }
            if (var_3260 == 3) {
                var_3261 = 5;
            }
            if (var_3260 == 4) {
                var_3261 = 4;
            }
            if (var_3260 == 5) {
                var_3261 = 24;
            }
            if (var_3260 == 6) {
                var_3261 = 12;
            }
            if (var_3260 == 7) {
                var_3261 = 13;
            }
            if (var_3260 == 8) {
                var_3261 = 8;
            }
            if (var_3260 == 9) {
                var_3261 = 14;
            }
            if (var_3260 == 10) {
                var_3261 = 18;
            }
            if (var_3260 == 11) {
                var_3261 = 3;
            }
            if (var_3260 == 12) {
                var_3261 = 19;
            }
            if (var_3260 == 13) {
                var_3261 = 11;
            }
            if (var_3260 == 14) {
                var_3261 = 23;
            }
            if (var_3260 == 15) {
                var_3261 = 15;
            }
            return [2 /*return*/];
        });
    });
}
function func859() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_101, cnt2_22;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(859);
                    var_449 = var_67;
                    cnt1_101 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_101 < 11)) return [3 /*break*/, 12];
                    var_447 = var_66;
                    cnt2_22 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt2_22 < 11)) return [3 /*break*/, 10];
                    pos((var_447 - var_66 - 1) * 40 + 10, (var_449 - var_67 - 1) * 40 + 10);
                    gmode(2);
                    if (var_73[var_447][var_449] == 1) {
                        gcopy(5, 1200, var_92 * 40, 40, 40);
                    }
                    if (!(var_77[var_447][var_449] != 0)) return [3 /*break*/, 4];
                    var_3305 = var_77[var_447][var_449];
                    item_list = var_78[var_3305].Var0;
                    return [4 /*yield*/, func397()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(var_80[var_447][var_449] != 0)) return [3 /*break*/, 6];
                    var_3306 = var_80[var_447][var_449];
                    var_888 = var_81[var_3306][0];
                    return [4 /*yield*/, func539()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (var_65[var_447][var_449] == 1) {
                        gcopy(3, 40, 0, 40, 40);
                    }
                    if (!(var_82[var_447][var_449] != 0)) return [3 /*break*/, 8];
                    var_1642 = 1;
                    var_3307 = var_82[var_447][var_449];
                    var_83[0].Var0 = var_83[var_3307].Var0;
                    var_1641 = 0;
                    var_83[0].Var5 = 2;
                    var_1640 = 2;
                    return [4 /*yield*/, func567()];
                case 7:
                    _a.sent();
                    var_1642 = 0;
                    _a.label = 8;
                case 8:
                    var_447 = var_447 + 1;
                    _a.label = 9;
                case 9:
                    ++cnt2_22;
                    return [3 /*break*/, 2];
                case 10:
                    var_449 = var_449 + 1;
                    _a.label = 11;
                case 11:
                    ++cnt1_101;
                    return [3 /*break*/, 1];
                case 12: return [2 /*return*/];
            }
        });
    });
}
function func860() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_102, cnt1_103;
        return __generator(this, function (_a) {
            dbgprt(860);
            color(155, 155, 155);
            var_3308 = 0;
            var_3309 = 680;
            var_3310 = 10;
            var_3311 = 10;
            for (cnt1_102 = 0; cnt1_102 < 9; ++cnt1_102) {
                line(var_3308, var_3310, var_3309, var_3311);
                var_3310 = var_3310 + 40;
                var_3311 = var_3311 + 40;
            }
            var_3308 = 10;
            var_3309 = 10;
            var_3310 = 0;
            var_3311 = 680;
            for (cnt1_103 = 0; cnt1_103 < 9; ++cnt1_103) {
                line(var_3308, var_3310, var_3309, var_3311);
                var_3308 = var_3308 + 40;
                var_3309 = var_3309 + 40;
            }
            return [2 /*return*/];
        });
    });
}
function func861() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(861);
                    gmode(2);
                    pos(var_3264 * 40 + 10, var_3265 * 40 + 10);
                    gcopy(3, 240, 120, 40, 40);
                    pos(mousex - 3, mousey - 3);
                    if (var_3266 == 0) {
                        gcopy(5, 0, var_3263 * 40, 40, 40);
                    }
                    if (var_3266 == 1) {
                        gcopy(5, 120, var_3263 * 40, 40, 40);
                    }
                    if (var_3266 == 2) {
                        gcopy(5, 240, var_3263 * 40, 40, 40);
                    }
                    if (var_3266 == 3) {
                        gcopy(5, 1520, var_3263 * 40, 40, 40);
                    }
                    if (var_3266 == 4) {
                        gcopy(3, 280, 120, 40, 40);
                    }
                    if (var_3266 == 5) {
                        gcopy(5, 1200, var_3263 * 40, 40, 40);
                    }
                    if (var_3266 == 6) {
                        gcopy(3, 40, 0, 40, 40);
                    }
                    if (!(var_3266 == 7)) return [3 /*break*/, 2];
                    var_1642 = 1;
                    var_83[0].Var0 = var_3292[var_3246];
                    var_83[0].Var5 = 2;
                    var_1641 = 0;
                    var_3312 = var_3292[var_3246];
                    var_1640 = 2;
                    return [4 /*yield*/, func567()];
                case 1:
                    _a.sent();
                    var_1642 = 0;
                    _a.label = 2;
                case 2:
                    if (!(var_3266 == 8)) return [3 /*break*/, 4];
                    var_78[0].Var0 = var_884[var_873];
                    item_list = var_78[0].Var0;
                    var_3313 = item_list;
                    return [4 /*yield*/, func397()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(var_3266 == 9)) return [3 /*break*/, 6];
                    var_888 = var_3300[var_3249];
                    var_3314 = var_888;
                    return [4 /*yield*/, func539()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (var_3266 == 0) {
                        pos(mousex + 3, mousey + 20 + 10 - 5);
                        font("ＭＳ Ｐゴシック", 11);
                        color(255, 255, 255);
                        if (var_3270 < 10) {
                            mes("部屋 " + var_3270);
                        }
                        if (var_3270 >= 10) {
                            mes("部屋" + var_3270);
                        }
                    }
                    if (var_3266 == 1) {
                        pos(mousex + 3, mousey + 20 + 10 - 5);
                        font("ＭＳ Ｐゴシック", 11);
                        color(255, 255, 255);
                        mes("通路");
                    }
                    if (var_3266 == 2) {
                        pos(mousex + 3, mousey + 20 + 10 - 5);
                        font("ＭＳ Ｐゴシック", 11);
                        color(255, 255, 255);
                        mes("壁");
                    }
                    if (var_3266 == 3) {
                        pos(mousex + 3, mousey + 20 + 10 - 5);
                        font("ＭＳ Ｐゴシック", 11);
                        color(255, 255, 255);
                        mes("水");
                    }
                    pos(mousex - 3, mousey - 3);
                    if (var_3266 >= 0 && var_3266 <= 3) {
                        gcopy(3, 160, 120, 40, 40);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function func862() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(862);
                    if (!(mousex < 330 && mousex > 10 && mousey > 10 && mousey < 330 && ginfo(2) == 0 && ginfo(0) > var_3284 && ginfo(0) < var_3286 && ginfo(1) > var_3285 && ginfo(1) < var_3287)) return [3 /*break*/, 31];
                    var_3315 = var_3279;
                    var_3316 = var_3280;
                    if (!(var_3315 < 5 || var_3315 > 56 || var_3316 < 5 || var_3316 > 37)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func851()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    if (!(var_82[var_3315][var_3316] != 0)) return [3 /*break*/, 5];
                    var_3266 = 7;
                    var_3140 = var_82[var_3315][var_3316];
                    var_437 = var_83[var_3140].Var0;
                    var_3317 = "p" + var_437 + "e";
                    var_3318 = instr(var_3319, 0, var_3317);
                    var_3320 = Math.floor(var_3318 / 12);
                    var_3246 = var_3320;
                    var_3247 = var_3246;
                    clrobj(data0 = 2, data1 = 2);
                    objsize(135);
                    pos(var_3229 + 44, var_3230);
                    combox(var_3246, 100, var_890);
                    var_3275 = var_83[var_3140].Var16;
                    var_3293 = var_3275;
                    var_3278 = var_3292[var_3246];
                    return [4 /*yield*/, func848()];
                case 3:
                    _a.sent();
                    var_3247 = var_3246;
                    var_3266 = 7;
                    objsel(0);
                    return [4 /*yield*/, func851()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
                case 5:
                    if (!(var_65[var_3315][var_3316] != 0)) return [3 /*break*/, 7];
                    var_3266 = 6;
                    return [4 /*yield*/, func851()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
                case 7:
                    if (!(var_77[var_3315][var_3316] != 0)) return [3 /*break*/, 19];
                    var_3266 = 8;
                    var_3140 = var_77[var_3315][var_3316];
                    var_3321 = var_78[var_3140].Var0;
                    var_3317 = "p" + var_3321 + "e";
                    var_3318 = instr(var_3322, 0, var_3317);
                    var_3320 = Math.floor(var_3318 / 12);
                    var_873 = var_3320;
                    var_3248 = var_873;
                    clrobj(data0 = 3, data1 = 3);
                    objsize(135);
                    pos(var_3225 + 44, var_3226);
                    combox(var_873, 100, var_874);
                    var_3251 = 0;
                    if (var_3321 >= 100 && var_3321 < 400) {
                        var_3251 = 1;
                        var_3254 = var_78[var_3140].Var4;
                        var_3257 = var_3254;
                    }
                    if (var_3321 >= 400 && var_3321 < 500) {
                        var_3251 = 2;
                        var_3255 = var_78[var_3140].Var3;
                        var_3258 = var_3255;
                    }
                    if (var_3321 >= 800 && var_3321 < 900) {
                        var_3251 = 3;
                        var_3255 = var_78[var_3140].Var7;
                        var_3258 = var_3255;
                    }
                    if (var_3321 == 1) {
                        var_3251 = 4;
                        var_3256 = Math.floor(var_78[var_3140].Var13 / 100);
                        var_3259 = var_3256;
                    }
                    if (!(var_3251 == 0)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func845()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    if (!(var_3251 == 1)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func842()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    if (!(var_3251 == 2)) return [3 /*break*/, 13];
                    return [4 /*yield*/, func843()];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    if (!(var_3251 == 3)) return [3 /*break*/, 15];
                    return [4 /*yield*/, func843()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    if (!(var_3251 == 4)) return [3 /*break*/, 17];
                    return [4 /*yield*/, func844()];
                case 16:
                    _a.sent();
                    _a.label = 17;
                case 17:
                    var_3252 = var_3251;
                    return [4 /*yield*/, func851()];
                case 18:
                    _a.sent();
                    return [2 /*return*/];
                case 19:
                    if (!(var_80[var_3315][var_3316] != 0)) return [3 /*break*/, 21];
                    var_3266 = 9;
                    var_3140 = var_80[var_3315][var_3316];
                    var_3323 = var_81[var_3140][0];
                    var_3317 = "p" + var_3323 + "e";
                    var_3318 = instr(var_3324, 0, var_3317);
                    var_3320 = Math.floor(var_3318 / 12);
                    var_3249 = var_3320;
                    var_3250 = var_3249;
                    clrobj(data0 = 4, data1 = 4);
                    objsize(135);
                    pos(var_3227 + 44, var_3228);
                    combox(var_3249, 100, var_886);
                    return [4 /*yield*/, func851()];
                case 20:
                    _a.sent();
                    return [2 /*return*/];
                case 21:
                    if (!(var_73[var_3315][var_3316] != 0)) return [3 /*break*/, 23];
                    var_3266 = 5;
                    return [4 /*yield*/, func851()];
                case 22:
                    _a.sent();
                    return [2 /*return*/];
                case 23:
                    if (!(var_71[var_3315][var_3316] == 14 || var_71[var_3315][var_3316] == 21 || var_71[var_3315][var_3316] == 22 || var_71[var_3315][var_3316] == 23 || var_71[var_3315][var_3316] == 24)) return [3 /*break*/, 25];
                    var_3266 = 1;
                    return [4 /*yield*/, func851()];
                case 24:
                    _a.sent();
                    return [2 /*return*/];
                case 25:
                    if (!(var_71[var_3315][var_3316] == 0)) return [3 /*break*/, 27];
                    var_3266 = 2;
                    return [4 /*yield*/, func851()];
                case 26:
                    _a.sent();
                    return [2 /*return*/];
                case 27:
                    if (!(var_71[var_3315][var_3316] == 13)) return [3 /*break*/, 29];
                    var_3266 = 3;
                    return [4 /*yield*/, func851()];
                case 28:
                    _a.sent();
                    return [2 /*return*/];
                case 29:
                    if (!(var_71[var_3315][var_3316] != 0 && var_71[var_3315][var_3316] <= 12)) return [3 /*break*/, 31];
                    var_3266 = 0;
                    var_3270 = var_71[var_3315][var_3316];
                    var_3245 = var_3270;
                    var_3267 = var_3245;
                    clrobj(1, 1);
                    objsize(50);
                    pos(var_3211 + 45, var_3212);
                    combox(var_3245, 100, "部屋\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12");
                    return [4 /*yield*/, func851()];
                case 30:
                    _a.sent();
                    return [2 /*return*/];
                case 31: return [4 /*yield*/, func851()];
                case 32:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func863() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_23, cnt2_24, cnt2_25, cnt2_26, cnt2_27, cnt2_28, cnt2_29, cnt2_30, cnt2_31, cnt2_32, cnt4_2, cnt3_8, cnt4_3, cnt3_9, cnt4_4, cnt3_10, cnt4_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(863);
                    if (!(mousex >= var_3211 && mousex <= var_3211 + 40 && mousey >= var_3212 && mousey <= var_3212 + 40)) return [3 /*break*/, 6];
                    var_3266 = 0;
                    cnt2_23 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt2_23 < 10)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func852()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt2_23;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, func851()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
                case 6:
                    if (!(mousex >= var_3213 && mousex <= var_3213 + 40 && mousey >= var_3214 && mousey <= var_3214 + 40)) return [3 /*break*/, 12];
                    var_3266 = 1;
                    cnt2_24 = 0;
                    _a.label = 7;
                case 7:
                    if (!(cnt2_24 < 10)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func852()];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    ++cnt2_24;
                    return [3 /*break*/, 7];
                case 10: return [4 /*yield*/, func851()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12:
                    if (!(mousex >= var_3215 && mousex <= var_3215 + 40 && mousey >= var_3216 && mousey <= var_3216 + 40)) return [3 /*break*/, 18];
                    var_3266 = 2;
                    cnt2_25 = 0;
                    _a.label = 13;
                case 13:
                    if (!(cnt2_25 < 10)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func852()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    ++cnt2_25;
                    return [3 /*break*/, 13];
                case 16: return [4 /*yield*/, func851()];
                case 17:
                    _a.sent();
                    return [2 /*return*/];
                case 18:
                    if (!(mousex >= var_3217 && mousex <= var_3217 + 40 && mousey >= var_3218 && mousey <= var_3218 + 40)) return [3 /*break*/, 24];
                    var_3266 = 3;
                    cnt2_26 = 0;
                    _a.label = 19;
                case 19:
                    if (!(cnt2_26 < 10)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func852()];
                case 20:
                    _a.sent();
                    _a.label = 21;
                case 21:
                    ++cnt2_26;
                    return [3 /*break*/, 19];
                case 22: return [4 /*yield*/, func851()];
                case 23:
                    _a.sent();
                    return [2 /*return*/];
                case 24:
                    if (!(mousex >= var_3219 && mousex <= var_3219 + 40 && mousey >= var_3220 && mousey <= var_3220 + 40)) return [3 /*break*/, 30];
                    var_3266 = 4;
                    cnt2_27 = 0;
                    _a.label = 25;
                case 25:
                    if (!(cnt2_27 < 10)) return [3 /*break*/, 28];
                    return [4 /*yield*/, func852()];
                case 26:
                    _a.sent();
                    _a.label = 27;
                case 27:
                    ++cnt2_27;
                    return [3 /*break*/, 25];
                case 28: return [4 /*yield*/, func851()];
                case 29:
                    _a.sent();
                    return [2 /*return*/];
                case 30:
                    if (!(mousex >= var_3221 && mousex <= var_3221 + 40 && mousey >= var_3222 && mousey <= var_3222 + 40)) return [3 /*break*/, 36];
                    var_3266 = 5;
                    cnt2_28 = 0;
                    _a.label = 31;
                case 31:
                    if (!(cnt2_28 < 10)) return [3 /*break*/, 34];
                    return [4 /*yield*/, func852()];
                case 32:
                    _a.sent();
                    _a.label = 33;
                case 33:
                    ++cnt2_28;
                    return [3 /*break*/, 31];
                case 34: return [4 /*yield*/, func851()];
                case 35:
                    _a.sent();
                    return [2 /*return*/];
                case 36:
                    if (!(mousex >= var_3223 && mousex <= var_3223 + 40 && mousey >= var_3224 && mousey <= var_3224 + 40)) return [3 /*break*/, 42];
                    var_3266 = 6;
                    cnt2_29 = 0;
                    _a.label = 37;
                case 37:
                    if (!(cnt2_29 < 10)) return [3 /*break*/, 40];
                    return [4 /*yield*/, func852()];
                case 38:
                    _a.sent();
                    _a.label = 39;
                case 39:
                    ++cnt2_29;
                    return [3 /*break*/, 37];
                case 40: return [4 /*yield*/, func851()];
                case 41:
                    _a.sent();
                    return [2 /*return*/];
                case 42:
                    if (!(mousex >= var_3229 && mousex <= var_3229 + 40 && mousey >= var_3230 && mousey <= var_3230 + 40)) return [3 /*break*/, 48];
                    var_3266 = 7;
                    cnt2_30 = 0;
                    _a.label = 43;
                case 43:
                    if (!(cnt2_30 < 10)) return [3 /*break*/, 46];
                    return [4 /*yield*/, func852()];
                case 44:
                    _a.sent();
                    _a.label = 45;
                case 45:
                    ++cnt2_30;
                    return [3 /*break*/, 43];
                case 46: return [4 /*yield*/, func851()];
                case 47:
                    _a.sent();
                    return [2 /*return*/];
                case 48:
                    if (!(mousex >= var_3225 && mousex <= var_3225 + 40 && mousey >= var_3226 && mousey <= var_3226 + 40)) return [3 /*break*/, 54];
                    var_3266 = 8;
                    cnt2_31 = 0;
                    _a.label = 49;
                case 49:
                    if (!(cnt2_31 < 10)) return [3 /*break*/, 52];
                    return [4 /*yield*/, func852()];
                case 50:
                    _a.sent();
                    _a.label = 51;
                case 51:
                    ++cnt2_31;
                    return [3 /*break*/, 49];
                case 52: return [4 /*yield*/, func851()];
                case 53:
                    _a.sent();
                    return [2 /*return*/];
                case 54:
                    if (!(mousex >= var_3227 && mousex <= var_3227 + 40 && mousey >= var_3228 && mousey <= var_3228 + 40)) return [3 /*break*/, 60];
                    var_3266 = 9;
                    cnt2_32 = 0;
                    _a.label = 55;
                case 55:
                    if (!(cnt2_32 < 10)) return [3 /*break*/, 58];
                    return [4 /*yield*/, func852()];
                case 56:
                    _a.sent();
                    _a.label = 57;
                case 57:
                    ++cnt2_32;
                    return [3 /*break*/, 55];
                case 58: return [4 /*yield*/, func851()];
                case 59:
                    _a.sent();
                    return [2 /*return*/];
                case 60:
                    if (!(mousex >= 362 && mousex <= 517 && mousey >= 206 && mousey <= 304)) return [3 /*break*/, 63];
                    var_3325 = Math.floor((mousex - 362) / 3);
                    var_3326 = Math.floor((mousey - 206) / 3);
                    var_66 = var_3325;
                    var_67 = var_3326;
                    if (var_66 < 3) {
                        var_66 = 3;
                    }
                    if (var_66 > 49) {
                        var_66 = 49;
                    }
                    if (var_67 < 3) {
                        var_67 = 3;
                    }
                    if (var_67 > 30) {
                        var_67 = 30;
                    }
                    return [4 /*yield*/, func852()];
                case 61:
                    _a.sent();
                    return [4 /*yield*/, func851()];
                case 62:
                    _a.sent();
                    return [2 /*return*/];
                case 63:
                    if (!(mousex < 330 && mousex > 10 && mousey > 10 && mousey < 330 && ginfo(2) != (-1) && ginfo(0) > var_3284 && ginfo(0) < var_3286 && ginfo(1) > var_3285 && ginfo(1) < var_3287)) return [3 /*break*/, 111];
                    var_3315 = var_3279;
                    var_3316 = var_3280;
                    if (!(var_3315 < 5 || var_3315 > 56 || var_3316 < 5 || var_3316 > 37)) return [3 /*break*/, 65];
                    return [4 /*yield*/, func851()];
                case 64:
                    _a.sent();
                    return [2 /*return*/];
                case 65:
                    if (!(var_3266 == 0)) return [3 /*break*/, 67];
                    var_71[var_3315][var_3316] = var_3270;
                    return [4 /*yield*/, func864()];
                case 66:
                    _a.sent();
                    _a.label = 67;
                case 67:
                    if (!(var_3266 == 1)) return [3 /*break*/, 69];
                    var_71[var_3315][var_3316] = 14;
                    return [4 /*yield*/, func864()];
                case 68:
                    _a.sent();
                    _a.label = 69;
                case 69:
                    if (!(var_3266 == 2)) return [3 /*break*/, 72];
                    if (!(var_71[var_3315][var_3316] != 0)) return [3 /*break*/, 72];
                    return [4 /*yield*/, func866()];
                case 70:
                    _a.sent();
                    var_71[var_3315][var_3316] = 0;
                    return [4 /*yield*/, func864()];
                case 71:
                    _a.sent();
                    _a.label = 72;
                case 72:
                    if (!(var_3266 == 3)) return [3 /*break*/, 75];
                    if (!(var_71[var_3315][var_3316] != 13)) return [3 /*break*/, 75];
                    return [4 /*yield*/, func866()];
                case 73:
                    _a.sent();
                    var_71[var_3315][var_3316] = 13;
                    return [4 /*yield*/, func864()];
                case 74:
                    _a.sent();
                    _a.label = 75;
                case 75:
                    if (!(var_3266 == 4)) return [3 /*break*/, 77];
                    if (!(var_73[var_3315][var_3316] != 0 || var_65[var_3315][var_3316] != 0 || var_82[var_3315][var_3316] != 0 || var_77[var_3315][var_3316] != 0 || var_80[var_3315][var_3316] != 0)) return [3 /*break*/, 77];
                    return [4 /*yield*/, func866()];
                case 76:
                    _a.sent();
                    _a.label = 77;
                case 77:
                    if (!(var_3266 >= 5)) return [3 /*break*/, 83];
                    if (!(var_71[var_3315][var_3316] == 0 || var_71[var_3315][var_3316] == 13)) return [3 /*break*/, 83];
                    var_3294 = 2;
                    cnt4_2 = 0;
                    _a.label = 78;
                case 78:
                    if (!(cnt4_2 < 10)) return [3 /*break*/, 81];
                    return [4 /*yield*/, func852()];
                case 79:
                    _a.sent();
                    _a.label = 80;
                case 80:
                    ++cnt4_2;
                    return [3 /*break*/, 78];
                case 81:
                    var_3294 = 0;
                    return [4 /*yield*/, func851()];
                case 82:
                    _a.sent();
                    return [2 /*return*/];
                case 83:
                    if (!(var_3266 == 5)) return [3 /*break*/, 85];
                    if (!(var_73[var_3315][var_3316] == 0)) return [3 /*break*/, 85];
                    return [4 /*yield*/, func866()];
                case 84:
                    _a.sent();
                    var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_73[var_3315][var_3316] = 1;
                    var_3327 = var_3315;
                    var_3328 = var_3316;
                    _a.label = 85;
                case 85:
                    if (!(var_3266 == 6)) return [3 /*break*/, 87];
                    if (!(var_65[var_3315][var_3316] == 0)) return [3 /*break*/, 87];
                    return [4 /*yield*/, func866()];
                case 86:
                    _a.sent();
                    var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_65[var_3315][var_3316] = 1;
                    var_3329 = var_3315;
                    var_3330 = var_3316;
                    _a.label = 87;
                case 87:
                    if (!(var_3266 == 7 && var_3292[var_3246] != 0)) return [3 /*break*/, 95];
                    var_3331 = 0;
                    if (var_82[var_3315][var_3316] != 0) {
                        var_3332 = var_82[var_3315][var_3316];
                        var_3331 = var_83[var_3332].Var0;
                    }
                    return [4 /*yield*/, func866()];
                case 88:
                    _a.sent();
                    var_3333 = 1;
                    var_3334 = 0;
                    for (cnt3_8 = 0; cnt3_8 < 20; ++cnt3_8) {
                        if (var_83[var_3333].Var0 == 0) {
                            var_3334 = 1;
                            break;
                        }
                        var_3333++;
                    }
                    if (!(var_3334 == 0 && var_82[var_3315][var_3316] == 0)) return [3 /*break*/, 94];
                    var_3294 = 1;
                    cnt4_3 = 0;
                    _a.label = 89;
                case 89:
                    if (!(cnt4_3 < 10)) return [3 /*break*/, 92];
                    return [4 /*yield*/, func852()];
                case 90:
                    _a.sent();
                    _a.label = 91;
                case 91:
                    ++cnt4_3;
                    return [3 /*break*/, 89];
                case 92:
                    var_3294 = 0;
                    return [4 /*yield*/, func851()];
                case 93:
                    _a.sent();
                    return [2 /*return*/];
                case 94:
                    var_97 = var_3333;
                    var_82[var_3315][var_3316] = var_97;
                    var_83[var_97].Var0 = var_3312;
                    var_83[var_97].Var1 = var_3315;
                    var_83[var_97].Var2 = var_3316;
                    var_83[var_97].Var16 = var_3275;
                    _a.label = 95;
                case 95:
                    if (!(var_3266 == 8 && var_884[var_873] != 0)) return [3 /*break*/, 103];
                    var_3331 = 0;
                    if (var_77[var_3315][var_3316] != 0) {
                        var_3332 = var_77[var_3315][var_3316];
                        var_3331 = var_78[var_3332].Var0;
                    }
                    return [4 /*yield*/, func866()];
                case 96:
                    _a.sent();
                    var_3333 = 1;
                    var_3334 = 0;
                    for (cnt3_9 = 0; cnt3_9 < 20; ++cnt3_9) {
                        if (var_78[var_3333].Var0 == 0) {
                            var_3334 = 1;
                            break;
                        }
                        var_3333++;
                    }
                    if (!(var_3334 == 0 && var_77[var_3315][var_3316] == 0)) return [3 /*break*/, 102];
                    var_3294 = 1;
                    cnt4_4 = 0;
                    _a.label = 97;
                case 97:
                    if (!(cnt4_4 < 10)) return [3 /*break*/, 100];
                    return [4 /*yield*/, func852()];
                case 98:
                    _a.sent();
                    _a.label = 99;
                case 99:
                    ++cnt4_4;
                    return [3 /*break*/, 97];
                case 100:
                    var_3294 = 0;
                    return [4 /*yield*/, func851()];
                case 101:
                    _a.sent();
                    return [2 /*return*/];
                case 102:
                    var_336 = var_3333;
                    var_77[var_3315][var_3316] = var_336;
                    var_78[var_336].Var0 = var_3313;
                    var_78[var_336].Var1 = var_3315;
                    var_78[var_336].Var2 = var_3316;
                    if (var_78[var_336].Var0 >= 100 && var_78[var_336].Var0 < 400) {
                        var_78[var_336].Var4 = var_3254;
                    }
                    if (var_78[var_336].Var0 >= 400 && var_78[var_336].Var0 < 500) {
                        var_78[var_336].Var3 = var_3255;
                        if (var_78[var_336].Var3 == 0) {
                            var_78[var_336].Var3 = 1;
                        }
                    }
                    if (var_78[var_336].Var0 >= 800 && var_78[var_336].Var0 < 900) {
                        var_78[var_336].Var7 = var_3255;
                    }
                    if (var_78[var_336].Var0 == 1) {
                        if (var_3256 == 0) {
                            var_78[var_336].Var13 = 1;
                        }
                        if (var_3256 >= 1) {
                            var_78[var_336].Var13 = var_3256 * 100;
                        }
                    }
                    _a.label = 103;
                case 103:
                    if (!(var_3266 == 9 && var_3300[var_3249] != 0)) return [3 /*break*/, 111];
                    var_3331 = 0;
                    if (var_80[var_3315][var_3316] != 0) {
                        var_3332 = var_80[var_3315][var_3316];
                        var_3331 = var_81[var_3332][0];
                    }
                    return [4 /*yield*/, func866()];
                case 104:
                    _a.sent();
                    var_3333 = 1;
                    var_3334 = 0;
                    for (cnt3_10 = 0; cnt3_10 < 10; ++cnt3_10) {
                        if (var_81[var_3333][0] == 0) {
                            var_3334 = 1;
                            break;
                        }
                        var_3333++;
                    }
                    if (!(var_3334 == 0 && var_80[var_3315][var_3316] == 0)) return [3 /*break*/, 110];
                    var_3294 = 1;
                    cnt4_5 = 0;
                    _a.label = 105;
                case 105:
                    if (!(cnt4_5 < 10)) return [3 /*break*/, 108];
                    return [4 /*yield*/, func852()];
                case 106:
                    _a.sent();
                    _a.label = 107;
                case 107:
                    ++cnt4_5;
                    return [3 /*break*/, 105];
                case 108:
                    var_3294 = 0;
                    return [4 /*yield*/, func851()];
                case 109:
                    _a.sent();
                    return [2 /*return*/];
                case 110:
                    var_337 = var_3333;
                    var_80[var_3315][var_3316] = var_337;
                    var_81[var_337][0] = var_3314;
                    var_81[var_337][1] = var_3315;
                    var_81[var_337][2] = var_3316;
                    _a.label = 111;
                case 111: return [4 /*yield*/, func852()];
                case 112:
                    _a.sent();
                    var_3294 = 0;
                    return [4 /*yield*/, func851()];
                case 113:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func864() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_104, cnt2_33;
        return __generator(this, function (_a) {
            dbgprt(864);
            var_1075 = 0;
            for (cnt1_104 = 0; cnt1_104 < var_32; ++cnt1_104) {
                var_1076 = 0;
                for (cnt2_33 = 0; cnt2_33 < 57; ++cnt2_33) {
                    if (var_71[var_1076][var_1075] == 14 || var_71[var_1076][var_1075] == 21 || var_71[var_1076][var_1075] == 22 || var_71[var_1076][var_1075] == 23 || var_71[var_1076][var_1075] == 24) {
                        var_71[var_1076][var_1075] = 14;
                        var_1077 = var_1076;
                        var_1078 = var_1075 + 1;
                        var_1079 = var_71[var_1077][var_1078];
                        if (var_1079 >= 1 && var_1079 <= 12) {
                            var_71[var_1076][var_1075] = 21;
                        }
                        var_1077 = var_1076;
                        var_1078 = var_1075 - 1;
                        var_1079 = var_71[var_1077][var_1078];
                        if (var_1079 >= 1 && var_1079 <= 12) {
                            var_71[var_1076][var_1075] = 22;
                        }
                        var_1077 = var_1076 + 1;
                        var_1078 = var_1075;
                        var_1079 = var_71[var_1077][var_1078];
                        if (var_1079 >= 1 && var_1079 <= 12) {
                            var_71[var_1076][var_1075] = 23;
                        }
                        var_1077 = var_1076 - 1;
                        var_1078 = var_1075;
                        var_1079 = var_71[var_1077][var_1078];
                        if (var_1079 >= 1 && var_1079 <= 12) {
                            var_71[var_1076][var_1075] = 24;
                        }
                    }
                    var_1076++;
                }
                var_1075++;
            }
            return [2 /*return*/];
        });
    });
}
function func865() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(865);
                    dialog(data0 = "画面を初期化しますか？", data1 = 2, data2 = "");
                    if (!(stat == 7)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func851()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    var_983 = sdim(3000);
                    var_71 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_80 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_986 = dim(100);
                    var_486 = dim(length1 = 80, length2 = 21, length3 = 30, length4 = null);
                    var_76 = dim(length1 = 100, length2 = 5, length3 = 3, length4 = null);
                    var_74 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_75 = dim(20);
                    var_83 = CharactorInfo.dim(300);
                    var_78 = ItemInfo.dim(300);
                    var_81 = dim(length1 = 300, length2 = 7, length3 = null, length4 = null);
                    return [4 /*yield*/, func875()];
                case 3:
                    _a.sent();
                    var_199 = 2;
                    var_66 = 26;
                    var_67 = 15;
                    var_3273 = 0;
                    var_3294 = 0;
                    return [4 /*yield*/, func852()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, func851()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func866() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(866);
            if (var_3266 == 2 || var_3266 == 3 || var_3266 == 4 || var_3266 == 6 || var_3266 == 7) {
                if (var_65[var_3315][var_3316] == 1) {
                    var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                }
                if (var_82[var_3315][var_3316] != 0) {
                    var_3335 = var_82[var_3315][var_3316];
                    var_83[var_3335].Var0 = 0;
                    var_83[var_3335].Var16 = 0;
                    var_82[var_3315][var_3316] = 0;
                }
            }
            if (var_3266 == 2 || var_3266 == 3 || var_3266 == 4 || var_3266 == 8 || var_3266 == 9) {
                if (var_73[var_3315][var_3316] == 1) {
                    var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                }
                if (var_77[var_3315][var_3316] != 0) {
                    var_3335 = var_77[var_3315][var_3316];
                    var_78[var_3335].Var0 = 0;
                    var_78[var_3335].Var1 = 0;
                    var_78[var_3335].Var2 = 0;
                    var_78[var_3335].Var3 = 0;
                    var_77[var_3315][var_3316] = 0;
                }
                if (var_80[var_3315][var_3316] != 0) {
                    var_3335 = var_80[var_3315][var_3316];
                    var_81[var_3335][0] = 0;
                    var_80[var_3315][var_3316] = 0;
                }
            }
            return [2 /*return*/];
        });
    });
}
function func867() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(867);
            color(0, 0, 0);
            boxf(left = 50, top1 = 200, right = 330, bottom = 250);
            font("ＭＳ Ｐゴシック", 12);
            color(255, 255, 255);
            pos(60, 210);
            if (var_3294 == 1) {
                mes("これ以上は増やせません");
            }
            if (var_3294 == 2) {
                mes("ここには配置できません");
            }
            if (var_3294 == 3) {
                mes("これ以上個室を増やせません");
            }
            return [2 /*return*/];
        });
    });
}
function func868() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(868);
                    var_3274 = 0;
                    return [4 /*yield*/, func869()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func869() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(869);
                    if (!(var_3274 == 0)) return [3 /*break*/, 3];
                    dialog(data0 = "btq", data1 = 16, data2 = "魔少年の問題ファイル");
                    if (!(stat == 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func851()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    var_3336 = refstr;
                    _a.label = 3;
                case 3:
                    chdir(var_30);
                    var_983 = sdim(3000);
                    var_71 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_80 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_986 = dim(100);
                    var_486 = dim(length1 = 80, length2 = 21, length3 = 30, length4 = null);
                    var_76 = dim(length1 = 100, length2 = 5, length3 = 3, length4 = null);
                    var_74 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_75 = dim(20);
                    var_83 = CharactorInfo.dim(300);
                    var_78 = ItemInfo.dim(300);
                    var_81 = dim(length1 = 300, length2 = 7, length3 = null, length4 = null);
                    return [4 /*yield*/, func881()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, func870()];
                case 5:
                    _a.sent();
                    clrobj(data0 = 12, data1 = null);
                    return [4 /*yield*/, func856()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, func857()];
                case 7:
                    _a.sent();
                    objsel(0);
                    var_199 = 2;
                    var_66 = 26;
                    var_67 = 15;
                    if (var_3274 == 1) {
                        var_66 = var_3337;
                        var_67 = var_3338;
                    }
                    var_3273 = 1;
                    return [4 /*yield*/, func851()];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func870() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_105, cnt2_34, cnt1_106, cnt2_35, cnt1_107, cnt2_36;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(870);
                    var_1729 = 1;
                    var_452 = 1;
                    var_768 = 1;
                    var_336 = 0;
                    var_337 = 0;
                    var_764 = 0;
                    var_1075 = 0;
                    cnt1_105 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_105 < var_32)) return [3 /*break*/, 66];
                    var_1076 = 0;
                    cnt2_34 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt2_34 < 57)) return [3 /*break*/, 64];
                    if (peek(var_983, var_764) == 35) {
                        var_71[var_1076][var_1075] = 0;
                    }
                    if (peek(var_983, var_764) == 46) {
                        var_71[var_1076][var_1075] = 14;
                    }
                    if (peek(var_983, var_764) == 87) {
                        var_71[var_1076][var_1075] = 14;
                    }
                    if (peek(var_983, var_764) == 88) {
                        var_71[var_1076][var_1075] = 14;
                    }
                    if (peek(var_983, var_764) == 89) {
                        var_71[var_1076][var_1075] = 14;
                    }
                    if (peek(var_983, var_764) == 90) {
                        var_71[var_1076][var_1075] = 14;
                    }
                    if (peek(var_983, var_764) == 49) {
                        var_71[var_1076][var_1075] = 1;
                    }
                    if (peek(var_983, var_764) == 50) {
                        var_71[var_1076][var_1075] = 2;
                    }
                    if (peek(var_983, var_764) == 51) {
                        var_71[var_1076][var_1075] = 3;
                    }
                    if (peek(var_983, var_764) == 52) {
                        var_71[var_1076][var_1075] = 4;
                    }
                    if (peek(var_983, var_764) == 53) {
                        var_71[var_1076][var_1075] = 5;
                    }
                    if (peek(var_983, var_764) == 54) {
                        var_71[var_1076][var_1075] = 6;
                    }
                    if (peek(var_983, var_764) == 55) {
                        var_71[var_1076][var_1075] = 7;
                    }
                    if (peek(var_983, var_764) == 56) {
                        var_71[var_1076][var_1075] = 8;
                    }
                    if (peek(var_983, var_764) == 57) {
                        var_71[var_1076][var_1075] = 9;
                    }
                    if (peek(var_983, var_764) == 120) {
                        var_71[var_1076][var_1075] = 10;
                    }
                    if (peek(var_983, var_764) == 121) {
                        var_71[var_1076][var_1075] = 11;
                    }
                    if (peek(var_983, var_764) == 122) {
                        var_71[var_1076][var_1075] = 12;
                    }
                    if (peek(var_983, var_764) == 94) {
                        var_71[var_1076][var_1075] = 13;
                    }
                    if (peek(var_983, var_764) == 62) {
                        var_73[var_1076][var_1075] = 1;
                        var_71[var_1076][var_1075] = var_3339;
                        var_200 = var_3339;
                        var_3327 = var_1076;
                        var_3328 = var_1075;
                    }
                    if (!(peek(var_983, var_764) == 97)) return [3 /*break*/, 4];
                    var_71[var_1076][var_1075] = var_3340;
                    var_1770 = var_3341;
                    var_3342 = var_3343;
                    return [4 /*yield*/, func879()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(peek(var_983, var_764) == 98)) return [3 /*break*/, 6];
                    var_71[var_1076][var_1075] = var_3344;
                    var_1770 = var_3345;
                    var_3342 = var_3346;
                    return [4 /*yield*/, func879()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(peek(var_983, var_764) == 99)) return [3 /*break*/, 8];
                    var_71[var_1076][var_1075] = var_3347;
                    var_1770 = var_3348;
                    var_3342 = var_3349;
                    return [4 /*yield*/, func879()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    if (!(peek(var_983, var_764) == 100)) return [3 /*break*/, 10];
                    var_71[var_1076][var_1075] = var_3350;
                    var_1770 = var_3351;
                    var_3342 = var_3352;
                    return [4 /*yield*/, func879()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    if (!(peek(var_983, var_764) == 101)) return [3 /*break*/, 12];
                    var_71[var_1076][var_1075] = var_3353;
                    var_1770 = var_3354;
                    var_3342 = var_3355;
                    return [4 /*yield*/, func879()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    if (!(peek(var_983, var_764) == 102)) return [3 /*break*/, 14];
                    var_71[var_1076][var_1075] = var_3356;
                    var_1770 = var_3357;
                    var_3342 = var_3358;
                    return [4 /*yield*/, func879()];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14:
                    if (!(peek(var_983, var_764) == 103)) return [3 /*break*/, 16];
                    var_71[var_1076][var_1075] = var_3359;
                    var_1770 = var_3360;
                    var_3342 = var_3361;
                    return [4 /*yield*/, func879()];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16:
                    if (!(peek(var_983, var_764) == 104)) return [3 /*break*/, 18];
                    var_71[var_1076][var_1075] = var_3362;
                    var_1770 = var_3363;
                    var_3342 = var_3364;
                    return [4 /*yield*/, func879()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    if (!(peek(var_983, var_764) == 105)) return [3 /*break*/, 20];
                    var_71[var_1076][var_1075] = var_3365;
                    var_1770 = var_3366;
                    var_3342 = var_3367;
                    return [4 /*yield*/, func879()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    if (!(peek(var_983, var_764) == 106)) return [3 /*break*/, 22];
                    var_71[var_1076][var_1075] = var_3368;
                    var_1770 = var_3369;
                    var_3342 = var_3370;
                    return [4 /*yield*/, func879()];
                case 21:
                    _a.sent();
                    _a.label = 22;
                case 22:
                    if (!(peek(var_983, var_764) == 85)) return [3 /*break*/, 24];
                    var_71[var_1076][var_1075] = var_3371;
                    var_1770 = var_3372;
                    var_3342 = var_3373;
                    return [4 /*yield*/, func879()];
                case 23:
                    _a.sent();
                    _a.label = 24;
                case 24:
                    if (!(peek(var_983, var_764) == 86)) return [3 /*break*/, 26];
                    var_71[var_1076][var_1075] = var_3374;
                    var_1770 = var_3375;
                    var_3342 = var_3376;
                    return [4 /*yield*/, func879()];
                case 25:
                    _a.sent();
                    _a.label = 26;
                case 26:
                    if (!(peek(var_983, var_764) == 117)) return [3 /*break*/, 28];
                    var_71[var_1076][var_1075] = var_3377;
                    var_1770 = var_3378;
                    var_3342 = var_3379;
                    return [4 /*yield*/, func879()];
                case 27:
                    _a.sent();
                    _a.label = 28;
                case 28:
                    if (!(peek(var_983, var_764) == 118)) return [3 /*break*/, 30];
                    var_71[var_1076][var_1075] = var_3380;
                    var_1770 = var_3381;
                    var_3342 = var_3382;
                    return [4 /*yield*/, func879()];
                case 29:
                    _a.sent();
                    _a.label = 30;
                case 30:
                    if (!(peek(var_983, var_764) == 119)) return [3 /*break*/, 32];
                    var_71[var_1076][var_1075] = var_3383;
                    var_1770 = var_3384;
                    var_3342 = var_3385;
                    return [4 /*yield*/, func879()];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32:
                    if (!(peek(var_983, var_764) == 91)) return [3 /*break*/, 34];
                    var_71[var_1076][var_1075] = var_3386;
                    var_1770 = var_3387;
                    var_3342 = var_3388;
                    return [4 /*yield*/, func879()];
                case 33:
                    _a.sent();
                    _a.label = 34;
                case 34:
                    if (!(peek(var_983, var_764) == 93)) return [3 /*break*/, 36];
                    var_71[var_1076][var_1075] = var_3389;
                    var_1770 = var_3390;
                    var_3342 = var_3391;
                    return [4 /*yield*/, func879()];
                case 35:
                    _a.sent();
                    _a.label = 36;
                case 36:
                    if (!(peek(var_983, var_764) == 63)) return [3 /*break*/, 38];
                    var_71[var_1076][var_1075] = var_3392;
                    var_1770 = var_3393;
                    var_3342 = var_3394;
                    return [4 /*yield*/, func879()];
                case 37:
                    _a.sent();
                    _a.label = 38;
                case 38:
                    if (!(peek(var_983, var_764) == 37)) return [3 /*break*/, 40];
                    var_71[var_1076][var_1075] = var_3395;
                    var_1770 = var_3396;
                    var_3342 = var_3397;
                    return [4 /*yield*/, func879()];
                case 39:
                    _a.sent();
                    _a.label = 40;
                case 40:
                    if (!(peek(var_983, var_764) == 124)) return [3 /*break*/, 42];
                    var_71[var_1076][var_1075] = var_3398;
                    var_1770 = var_3399;
                    var_3342 = var_3400;
                    return [4 /*yield*/, func879()];
                case 41:
                    _a.sent();
                    _a.label = 42;
                case 42:
                    if (!(peek(var_983, var_764) == 107)) return [3 /*break*/, 44];
                    var_71[var_1076][var_1075] = var_3401;
                    var_2422 = var_3402;
                    return [4 /*yield*/, func536()];
                case 43:
                    _a.sent();
                    _a.label = 44;
                case 44:
                    if (!(peek(var_983, var_764) == 108)) return [3 /*break*/, 46];
                    var_71[var_1076][var_1075] = var_3403;
                    var_2422 = var_3404;
                    return [4 /*yield*/, func536()];
                case 45:
                    _a.sent();
                    _a.label = 46;
                case 46:
                    if (!(peek(var_983, var_764) == 109)) return [3 /*break*/, 48];
                    var_71[var_1076][var_1075] = var_3405;
                    var_2422 = var_3406;
                    return [4 /*yield*/, func536()];
                case 47:
                    _a.sent();
                    _a.label = 48;
                case 48:
                    if (!(peek(var_983, var_764) == 110)) return [3 /*break*/, 50];
                    var_71[var_1076][var_1075] = var_3407;
                    var_2422 = var_3408;
                    return [4 /*yield*/, func536()];
                case 49:
                    _a.sent();
                    _a.label = 50;
                case 50:
                    if (!(peek(var_983, var_764) == 111)) return [3 /*break*/, 52];
                    var_71[var_1076][var_1075] = var_3409;
                    var_2422 = var_3410;
                    return [4 /*yield*/, func536()];
                case 51:
                    _a.sent();
                    _a.label = 52;
                case 52:
                    if (!(peek(var_983, var_764) == 112)) return [3 /*break*/, 54];
                    var_71[var_1076][var_1075] = var_3411;
                    var_2422 = var_3412;
                    return [4 /*yield*/, func536()];
                case 53:
                    _a.sent();
                    _a.label = 54;
                case 54:
                    if (!(peek(var_983, var_764) == 113)) return [3 /*break*/, 56];
                    var_71[var_1076][var_1075] = var_3413;
                    var_2422 = var_3414;
                    return [4 /*yield*/, func536()];
                case 55:
                    _a.sent();
                    _a.label = 56;
                case 56:
                    if (!(peek(var_983, var_764) == 114)) return [3 /*break*/, 58];
                    var_71[var_1076][var_1075] = var_3415;
                    var_2422 = var_3416;
                    return [4 /*yield*/, func536()];
                case 57:
                    _a.sent();
                    _a.label = 58;
                case 58:
                    if (!(peek(var_983, var_764) == 115)) return [3 /*break*/, 60];
                    var_71[var_1076][var_1075] = var_3417;
                    var_2422 = var_3418;
                    return [4 /*yield*/, func536()];
                case 59:
                    _a.sent();
                    _a.label = 60;
                case 60:
                    if (!(peek(var_983, var_764) == 116)) return [3 /*break*/, 62];
                    var_71[var_1076][var_1075] = var_3419;
                    var_2422 = var_3420;
                    return [4 /*yield*/, func536()];
                case 61:
                    _a.sent();
                    _a.label = 62;
                case 62:
                    var_1076 = var_1076 + 1;
                    var_764 = var_764 + 1;
                    _a.label = 63;
                case 63:
                    ++cnt2_34;
                    return [3 /*break*/, 2];
                case 64:
                    var_1075 = var_1075 + 1;
                    _a.label = 65;
                case 65:
                    ++cnt1_105;
                    return [3 /*break*/, 1];
                case 66:
                    var_1729 = 0;
                    var_452 = 0;
                    var_768 = 0;
                    var_1729 = 1;
                    var_97 = 0;
                    var_1075 = 0;
                    cnt1_106 = 0;
                    _a.label = 67;
                case 67:
                    if (!(cnt1_106 < var_32)) return [3 /*break*/, 112];
                    var_1076 = 0;
                    cnt2_35 = 0;
                    _a.label = 68;
                case 68:
                    if (!(cnt2_35 < 57)) return [3 /*break*/, 110];
                    if (peek(var_983, var_764) == 64) {
                        var_65[var_1076][var_1075] = 1;
                        var_71[var_1076][var_1075] = var_201;
                        var_66 = var_1076;
                        var_67 = var_1075;
                        var_3329 = var_1076;
                        var_3330 = var_1075;
                    }
                    if (!(peek(var_983, var_764) == 65)) return [3 /*break*/, 70];
                    var_2548 = var_3421;
                    var_2547 = var_3422;
                    return [4 /*yield*/, func556()];
                case 69:
                    _a.sent();
                    _a.label = 70;
                case 70:
                    if (!(peek(var_983, var_764) == 66)) return [3 /*break*/, 72];
                    var_2548 = var_3423;
                    var_2547 = var_3424;
                    return [4 /*yield*/, func556()];
                case 71:
                    _a.sent();
                    _a.label = 72;
                case 72:
                    if (!(peek(var_983, var_764) == 67)) return [3 /*break*/, 74];
                    var_2548 = var_3425;
                    var_2547 = var_3426;
                    return [4 /*yield*/, func556()];
                case 73:
                    _a.sent();
                    _a.label = 74;
                case 74:
                    if (!(peek(var_983, var_764) == 68)) return [3 /*break*/, 76];
                    var_2548 = var_3427;
                    var_2547 = var_3428;
                    return [4 /*yield*/, func556()];
                case 75:
                    _a.sent();
                    _a.label = 76;
                case 76:
                    if (!(peek(var_983, var_764) == 69)) return [3 /*break*/, 78];
                    var_2548 = var_3429;
                    var_2547 = var_3430;
                    return [4 /*yield*/, func556()];
                case 77:
                    _a.sent();
                    _a.label = 78;
                case 78:
                    if (!(peek(var_983, var_764) == 70)) return [3 /*break*/, 80];
                    var_2548 = var_3431;
                    var_2547 = var_3432;
                    return [4 /*yield*/, func556()];
                case 79:
                    _a.sent();
                    _a.label = 80;
                case 80:
                    if (!(peek(var_983, var_764) == 71)) return [3 /*break*/, 82];
                    var_2548 = var_3433;
                    var_2547 = var_3434;
                    return [4 /*yield*/, func556()];
                case 81:
                    _a.sent();
                    _a.label = 82;
                case 82:
                    if (!(peek(var_983, var_764) == 72)) return [3 /*break*/, 84];
                    var_2548 = var_3435;
                    var_2547 = var_3436;
                    return [4 /*yield*/, func556()];
                case 83:
                    _a.sent();
                    _a.label = 84;
                case 84:
                    if (!(peek(var_983, var_764) == 73)) return [3 /*break*/, 86];
                    var_2548 = var_3437;
                    var_2547 = var_3438;
                    return [4 /*yield*/, func556()];
                case 85:
                    _a.sent();
                    _a.label = 86;
                case 86:
                    if (!(peek(var_983, var_764) == 74)) return [3 /*break*/, 88];
                    var_2548 = var_3439;
                    var_2547 = var_3440;
                    return [4 /*yield*/, func556()];
                case 87:
                    _a.sent();
                    _a.label = 88;
                case 88:
                    if (!(peek(var_983, var_764) == 75)) return [3 /*break*/, 90];
                    var_2548 = var_3441;
                    var_2547 = var_3442;
                    return [4 /*yield*/, func556()];
                case 89:
                    _a.sent();
                    _a.label = 90;
                case 90:
                    if (!(peek(var_983, var_764) == 76)) return [3 /*break*/, 92];
                    var_2548 = var_3443;
                    var_2547 = var_3444;
                    return [4 /*yield*/, func556()];
                case 91:
                    _a.sent();
                    _a.label = 92;
                case 92:
                    if (!(peek(var_983, var_764) == 77)) return [3 /*break*/, 94];
                    var_2548 = var_3445;
                    var_2547 = var_3446;
                    return [4 /*yield*/, func556()];
                case 93:
                    _a.sent();
                    _a.label = 94;
                case 94:
                    if (!(peek(var_983, var_764) == 78)) return [3 /*break*/, 96];
                    var_2548 = var_3447;
                    var_2547 = var_3448;
                    return [4 /*yield*/, func556()];
                case 95:
                    _a.sent();
                    _a.label = 96;
                case 96:
                    if (!(peek(var_983, var_764) == 79)) return [3 /*break*/, 98];
                    var_2548 = var_3449;
                    var_2547 = var_3450;
                    return [4 /*yield*/, func556()];
                case 97:
                    _a.sent();
                    _a.label = 98;
                case 98:
                    if (!(peek(var_983, var_764) == 80)) return [3 /*break*/, 100];
                    var_2548 = var_3451;
                    var_2547 = var_3452;
                    return [4 /*yield*/, func556()];
                case 99:
                    _a.sent();
                    _a.label = 100;
                case 100:
                    if (!(peek(var_983, var_764) == 81)) return [3 /*break*/, 102];
                    var_2548 = var_3453;
                    var_2547 = var_3454;
                    return [4 /*yield*/, func556()];
                case 101:
                    _a.sent();
                    _a.label = 102;
                case 102:
                    if (!(peek(var_983, var_764) == 82)) return [3 /*break*/, 104];
                    var_2548 = var_3455;
                    var_2547 = var_3456;
                    return [4 /*yield*/, func556()];
                case 103:
                    _a.sent();
                    _a.label = 104;
                case 104:
                    if (!(peek(var_983, var_764) == 83)) return [3 /*break*/, 106];
                    var_2548 = var_3457;
                    var_2547 = var_3458;
                    return [4 /*yield*/, func556()];
                case 105:
                    _a.sent();
                    _a.label = 106;
                case 106:
                    if (!(peek(var_983, var_764) == 84)) return [3 /*break*/, 108];
                    var_2548 = var_3459;
                    var_2547 = var_3460;
                    return [4 /*yield*/, func556()];
                case 107:
                    _a.sent();
                    _a.label = 108;
                case 108:
                    var_1076 = var_1076 + 1;
                    var_764 = var_764 + 1;
                    _a.label = 109;
                case 109:
                    ++cnt2_35;
                    return [3 /*break*/, 68];
                case 110:
                    var_1075 = var_1075 + 1;
                    _a.label = 111;
                case 111:
                    ++cnt1_106;
                    return [3 /*break*/, 67];
                case 112:
                    var_1729 = 0;
                    var_764 = 0;
                    var_1075 = 0;
                    for (cnt1_107 = 0; cnt1_107 < var_32; ++cnt1_107) {
                        var_1076 = 0;
                        for (cnt2_36 = 0; cnt2_36 < 57; ++cnt2_36) {
                            if (peek(var_983, var_764) == 87) {
                                var_1077 = var_1076;
                                var_1078 = var_1075 + 1;
                                var_1079 = var_71[var_1077][var_1078];
                                var_76[var_1079][1][1] = var_1076;
                                var_76[var_1079][1][2] = var_1075;
                                var_71[var_1076][var_1075] = 21;
                            }
                            if (peek(var_983, var_764) == 88) {
                                var_1077 = var_1076;
                                var_1078 = var_1075 - 1;
                                var_1079 = var_71[var_1077][var_1078];
                                var_76[var_1079][4][1] = var_1076;
                                var_76[var_1079][4][2] = var_1075;
                                var_71[var_1076][var_1075] = 22;
                            }
                            if (peek(var_983, var_764) == 89) {
                                var_1077 = var_1076 + 1;
                                var_1078 = var_1075;
                                var_1079 = var_71[var_1077][var_1078];
                                var_76[var_1079][2][1] = var_1076;
                                var_76[var_1079][2][2] = var_1075;
                                var_71[var_1076][var_1075] = 23;
                            }
                            if (peek(var_983, var_764) == 90) {
                                var_1077 = var_1076 - 1;
                                var_1078 = var_1075;
                                var_1079 = var_71[var_1077][var_1078];
                                var_76[var_1079][3][1] = var_1076;
                                var_76[var_1079][3][2] = var_1075;
                                var_71[var_1076][var_1075] = 24;
                            }
                            if (var_71[var_1076][var_1075] >= 1 && var_71[var_1076][var_1075] <= 12) {
                                var_3461 = var_71[var_1076][var_1075];
                                var_493[var_3461] = 1;
                            }
                            var_1076 = var_1076 + 1;
                            var_764 = var_764 + 1;
                        }
                        var_1075 = var_1075 + 1;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function func871() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(871);
                    var_3337 = var_66;
                    var_3338 = var_67;
                    if (!(var_3273 == 0)) return [3 /*break*/, 3];
                    dialog(data0 = "btq", data1 = 17, data2 = "魔少年の問題ファイル");
                    if (!(stat == 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func851()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    var_3336 = refstr;
                    if (instr(var_3336, 0, ".btq") == (-1)) {
                        var_3336 = "" + var_3336 + ".btq";
                    }
                    var_3273 = 1;
                    _a.label = 3;
                case 3: return [4 /*yield*/, func873()];
                case 4:
                    _a.sent();
                    chdir(var_30);
                    objsel(0);
                    clrobj();
                    return [4 /*yield*/, func233()];
                case 5:
                    _a.sent();
                    if (var_10 == 0) {
                        width(680, 680);
                    }
                    if (var_10 == 1) {
                        width(680, 680);
                    }
                    var_3462 = 1;
                    return [4 /*yield*/, func876()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func872() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(872);
                    dialog(data0 = "btq", data1 = 17, data2 = "魔少年の問題ファイル");
                    if (!(stat == 0)) return [3 /*break*/, 2];
                    chdir(var_30);
                    return [4 /*yield*/, func851()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    var_3336 = refstr;
                    if (instr(var_3336, 0, ".btq") == (-1)) {
                        var_3336 = "" + var_3336 + ".btq";
                    }
                    var_3273 = 1;
                    return [4 /*yield*/, func873()];
                case 3:
                    _a.sent();
                    chdir(var_30);
                    objsel(0);
                    return [4 /*yield*/, func851()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func873() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_108, cnt2_37, cnt1_109, cnt2_38, cnt1_110, cnt1_111, cnt1_112, cnt1_113;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(873);
                    var_3463 = "";
                    var_3463 = var_3463 + "" + var_3253 + "\n";
                    var_3464 = 0;
                    for (cnt1_108 = 0; cnt1_108 < 38; ++cnt1_108) {
                        var_3465 = 0;
                        for (cnt2_37 = 0; cnt2_37 < 59; ++cnt2_37) {
                            if (cnt2_37 == 57) {
                                var_3463 = var_3463 + "\n";
                                break;
                            }
                            if (var_71[var_3465][var_3464] == 0) {
                                var_3466 = "#";
                            }
                            if (var_71[var_3465][var_3464] >= 1 && var_71[var_3465][var_3464] <= 9) {
                                var_3466 = "" + var_71[var_3465][var_3464];
                            }
                            if (var_71[var_3465][var_3464] == 10) {
                                var_3466 = "x";
                            }
                            if (var_71[var_3465][var_3464] == 11) {
                                var_3466 = "y";
                            }
                            if (var_71[var_3465][var_3464] == 12) {
                                var_3466 = "z";
                            }
                            if (var_71[var_3465][var_3464] == 13) {
                                var_3466 = "^";
                            }
                            if (var_71[var_3465][var_3464] == 14) {
                                var_3466 = ".";
                            }
                            if (var_71[var_3465][var_3464] == 21) {
                                var_3466 = "W";
                            }
                            if (var_71[var_3465][var_3464] == 22) {
                                var_3466 = "X";
                            }
                            if (var_71[var_3465][var_3464] == 23) {
                                var_3466 = "Y";
                            }
                            if (var_71[var_3465][var_3464] == 24) {
                                var_3466 = "Z";
                            }
                            if (var_73[var_3465][var_3464] == 1) {
                                var_3466 = ">";
                            }
                            if (var_77[var_3465][var_3464] == 1) {
                                var_3466 = "a";
                            }
                            if (var_77[var_3465][var_3464] == 2) {
                                var_3466 = "b";
                            }
                            if (var_77[var_3465][var_3464] == 3) {
                                var_3466 = "c";
                            }
                            if (var_77[var_3465][var_3464] == 4) {
                                var_3466 = "d";
                            }
                            if (var_77[var_3465][var_3464] == 5) {
                                var_3466 = "e";
                            }
                            if (var_77[var_3465][var_3464] == 6) {
                                var_3466 = "f";
                            }
                            if (var_77[var_3465][var_3464] == 7) {
                                var_3466 = "g";
                            }
                            if (var_77[var_3465][var_3464] == 8) {
                                var_3466 = "h";
                            }
                            if (var_77[var_3465][var_3464] == 9) {
                                var_3466 = "i";
                            }
                            if (var_77[var_3465][var_3464] == 10) {
                                var_3466 = "j";
                            }
                            if (var_77[var_3465][var_3464] == 11) {
                                var_3466 = "U";
                            }
                            if (var_77[var_3465][var_3464] == 12) {
                                var_3466 = "V";
                            }
                            if (var_77[var_3465][var_3464] == 13) {
                                var_3466 = "u";
                            }
                            if (var_77[var_3465][var_3464] == 14) {
                                var_3466 = "v";
                            }
                            if (var_77[var_3465][var_3464] == 15) {
                                var_3466 = "w";
                            }
                            if (var_77[var_3465][var_3464] == 16) {
                                var_3466 = "[";
                            }
                            if (var_77[var_3465][var_3464] == 17) {
                                var_3466 = "]";
                            }
                            if (var_77[var_3465][var_3464] == 18) {
                                var_3466 = "?";
                            }
                            if (var_77[var_3465][var_3464] == 19) {
                                var_3466 = "%";
                            }
                            if (var_77[var_3465][var_3464] == 20) {
                                var_3466 = "|";
                            }
                            if (var_80[var_3465][var_3464] == 1) {
                                var_3466 = "k";
                            }
                            if (var_80[var_3465][var_3464] == 2) {
                                var_3466 = "l";
                            }
                            if (var_80[var_3465][var_3464] == 3) {
                                var_3466 = "m";
                            }
                            if (var_80[var_3465][var_3464] == 4) {
                                var_3466 = "n";
                            }
                            if (var_80[var_3465][var_3464] == 5) {
                                var_3466 = "o";
                            }
                            if (var_80[var_3465][var_3464] == 6) {
                                var_3466 = "p";
                            }
                            if (var_80[var_3465][var_3464] == 7) {
                                var_3466 = "q";
                            }
                            if (var_80[var_3465][var_3464] == 8) {
                                var_3466 = "r";
                            }
                            if (var_80[var_3465][var_3464] == 9) {
                                var_3466 = "s";
                            }
                            if (var_80[var_3465][var_3464] == 10) {
                                var_3466 = "t";
                            }
                            var_3463 = var_3463 + var_3466;
                            var_3465++;
                        }
                        var_3464++;
                    }
                    var_3464 = 0;
                    for (cnt1_109 = 0; cnt1_109 < 38; ++cnt1_109) {
                        var_3465 = 0;
                        for (cnt2_38 = 0; cnt2_38 < 59; ++cnt2_38) {
                            if (cnt2_38 == 57) {
                                var_3463 = var_3463 + "\n";
                                break;
                            }
                            if (var_71[var_3465][var_3464] == 0) {
                                var_3466 = " ";
                            }
                            if (var_71[var_3465][var_3464] >= 1 && var_71[var_3465][var_3464] <= 9) {
                                var_3466 = " ";
                            }
                            if (var_71[var_3465][var_3464] == 10) {
                                var_3466 = " ";
                            }
                            if (var_71[var_3465][var_3464] == 11) {
                                var_3466 = " ";
                            }
                            if (var_71[var_3465][var_3464] == 12) {
                                var_3466 = " ";
                            }
                            if (var_71[var_3465][var_3464] == 13) {
                                var_3466 = " ";
                            }
                            if (var_71[var_3465][var_3464] == 14) {
                                var_3466 = " ";
                            }
                            if (var_71[var_3465][var_3464] == 21) {
                                var_3466 = " ";
                            }
                            if (var_71[var_3465][var_3464] == 22) {
                                var_3466 = " ";
                            }
                            if (var_71[var_3465][var_3464] == 23) {
                                var_3466 = " ";
                            }
                            if (var_71[var_3465][var_3464] == 24) {
                                var_3466 = " ";
                            }
                            if (var_65[var_3465][var_3464] == 1) {
                                var_3466 = "@";
                            }
                            if (var_82[var_3465][var_3464] == 1) {
                                var_3466 = "A";
                            }
                            if (var_82[var_3465][var_3464] == 2) {
                                var_3466 = "B";
                            }
                            if (var_82[var_3465][var_3464] == 3) {
                                var_3466 = "C";
                            }
                            if (var_82[var_3465][var_3464] == 4) {
                                var_3466 = "D";
                            }
                            if (var_82[var_3465][var_3464] == 5) {
                                var_3466 = "E";
                            }
                            if (var_82[var_3465][var_3464] == 6) {
                                var_3466 = "F";
                            }
                            if (var_82[var_3465][var_3464] == 7) {
                                var_3466 = "G";
                            }
                            if (var_82[var_3465][var_3464] == 8) {
                                var_3466 = "H";
                            }
                            if (var_82[var_3465][var_3464] == 9) {
                                var_3466 = "I";
                            }
                            if (var_82[var_3465][var_3464] == 10) {
                                var_3466 = "J";
                            }
                            if (var_82[var_3465][var_3464] == 11) {
                                var_3466 = "K";
                            }
                            if (var_82[var_3465][var_3464] == 12) {
                                var_3466 = "L";
                            }
                            if (var_82[var_3465][var_3464] == 13) {
                                var_3466 = "M";
                            }
                            if (var_82[var_3465][var_3464] == 14) {
                                var_3466 = "N";
                            }
                            if (var_82[var_3465][var_3464] == 15) {
                                var_3466 = "O";
                            }
                            if (var_82[var_3465][var_3464] == 16) {
                                var_3466 = "P";
                            }
                            if (var_82[var_3465][var_3464] == 17) {
                                var_3466 = "Q";
                            }
                            if (var_82[var_3465][var_3464] == 18) {
                                var_3466 = "R";
                            }
                            if (var_82[var_3465][var_3464] == 19) {
                                var_3466 = "S";
                            }
                            if (var_82[var_3465][var_3464] == 20) {
                                var_3466 = "T";
                            }
                            var_3463 = var_3463 + var_3466;
                            var_3465++;
                        }
                        var_3464++;
                    }
                    var_3467 = var_71[var_3329][var_3330];
                    if (var_71[var_3329][var_3330] == 21) {
                        var_3467 = 14;
                    }
                    if (var_71[var_3329][var_3330] == 22) {
                        var_3467 = 14;
                    }
                    if (var_71[var_3329][var_3330] == 23) {
                        var_3467 = 14;
                    }
                    if (var_71[var_3329][var_3330] == 24) {
                        var_3467 = 14;
                    }
                    var_3463 = var_3463 + "" + var_3467 + "\n";
                    var_3467 = var_71[var_3327][var_3328];
                    if (var_71[var_3327][var_3328] == 21) {
                        var_3467 = 14;
                    }
                    if (var_71[var_3327][var_3328] == 22) {
                        var_3467 = 14;
                    }
                    if (var_71[var_3327][var_3328] == 23) {
                        var_3467 = 14;
                    }
                    if (var_71[var_3327][var_3328] == 24) {
                        var_3467 = 14;
                    }
                    var_3463 = var_3463 + "" + var_3467 + "\n";
                    var_3468 = 1;
                    for (cnt1_110 = 0; cnt1_110 < 20; ++cnt1_110) {
                        var_3463 = var_3463 + "" + var_83[var_3468].Var0 + "\n";
                        var_3467 = 0;
                        var_3467 = var_83[var_3468].Var16;
                        var_3463 = var_3463 + "" + var_3467 + "\n";
                        var_3468++;
                    }
                    var_3468 = 1;
                    cnt1_111 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_111 < 20)) return [3 /*break*/, 4];
                    var_3463 = var_3463 + "" + var_78[var_3468].Var0 + "\n";
                    var_3469 = var_78[var_3468].Var1;
                    var_3470 = var_78[var_3468].Var2;
                    return [4 /*yield*/, func874()];
                case 2:
                    _a.sent();
                    var_3463 = var_3463 + "" + var_3467 + "\n";
                    var_3471 = 0;
                    if (var_78[var_3468].Var0 >= 100 && var_78[var_3468].Var0 < 400) {
                        var_3471 = var_78[var_3468].Var4;
                        if (var_78[var_3468].Var12 == 1) {
                            var_3471 = 11;
                        }
                    }
                    if (var_78[var_3468].Var0 >= 400 && var_78[var_3468].Var0 < 500) {
                        var_3471 = var_78[var_3468].Var3;
                    }
                    if (var_78[var_3468].Var0 >= 800 && var_78[var_3468].Var0 < 900) {
                        var_3471 = var_78[var_3468].Var7;
                    }
                    if (var_78[var_3468].Var0 == 1) {
                        var_3471 = var_78[var_3468].Var13;
                    }
                    var_3463 = var_3463 + "" + var_3471 + "\n";
                    var_3468++;
                    _a.label = 3;
                case 3:
                    ++cnt1_111;
                    return [3 /*break*/, 1];
                case 4:
                    var_3468 = 1;
                    cnt1_112 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_112 < 10)) return [3 /*break*/, 8];
                    var_3463 = var_3463 + "" + var_81[var_3468][0] + "\n";
                    var_3469 = var_81[var_3468][1];
                    var_3470 = var_81[var_3468][2];
                    return [4 /*yield*/, func874()];
                case 6:
                    _a.sent();
                    var_3463 = var_3463 + "" + var_3467 + "\n";
                    var_3468++;
                    _a.label = 7;
                case 7:
                    ++cnt1_112;
                    return [3 /*break*/, 5];
                case 8:
                    var_3463 = var_3463 + "" + var_3260 + "\n";
                    notesel(var_3463);
                    var_3472 = sdim(10000);
                    for (cnt1_113 = 0; cnt1_113 < 200; ++cnt1_113) {
                        var_3473 = noteget(cnt1_113);
                        var_3472 = var_3472 + var_3473 + "\n";
                    }
                    return [4 /*yield*/, func887()];
                case 9:
                    _a.sent();
                    bsave(file_name = var_3336, data = var_3472, data_size = null, offset = null);
                    return [2 /*return*/];
            }
        });
    });
}
function func874() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(874);
            var_3467 = var_71[var_3469][var_3470];
            if (var_71[var_3469][var_3470] == 21) {
                var_3467 = 14;
            }
            if (var_71[var_3469][var_3470] == 22) {
                var_3467 = 14;
            }
            if (var_71[var_3469][var_3470] == 23) {
                var_3467 = 14;
            }
            if (var_71[var_3469][var_3470] == 24) {
                var_3467 = 14;
            }
            return [2 /*return*/];
        });
    });
}
function func875() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_114, cnt2_39;
        return __generator(this, function (_a) {
            dbgprt(875);
            var_983 = sdim(3000);
            var_71 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_983 = "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "############################111111#######################";
            var_983 = var_983 + "############################111111#######################";
            var_983 = var_983 + "############################111111#######################";
            var_983 = var_983 + "############################111111#######################";
            var_983 = var_983 + "############################111111#######################";
            var_983 = var_983 + "############################111111#######################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_983 = var_983 + "#########################################################";
            var_764 = 0;
            var_1075 = 0;
            for (cnt1_114 = 0; cnt1_114 < var_32; ++cnt1_114) {
                var_1076 = 0;
                for (cnt2_39 = 0; cnt2_39 < 57; ++cnt2_39) {
                    if (peek(var_983, var_764) == 35) {
                        var_71[var_1076][var_1075] = 0;
                    }
                    if (peek(var_983, var_764) == 49) {
                        var_71[var_1076][var_1075] = 1;
                    }
                    var_1076 = var_1076 + 1;
                    var_764 = var_764 + 1;
                }
                var_1075 = var_1075 + 1;
            }
            var_66 = 26;
            var_67 = 15;
            var_199 = 2;
            objsel(0);
            return [2 /*return*/];
        });
    });
}
// 魔少年の問題機能?? ver0.12から追加されている
function func876() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_115;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(876);
                    return [4 /*yield*/, func233()];
                case 1:
                    _a.sent();
                    var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_62 = 99;
                    var_375 = 1;
                    var_336 = 0;
                    var_97 = 0;
                    var_337 = 0;
                    return [4 /*yield*/, func877()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func858()];
                case 3:
                    _a.sent();
                    var_92 = var_3261;
                    if (var_92 == 15 || var_92 == 19 || var_92 == 22 || var_92 == 11 || var_92 == 23) {
                        var_103 = 1;
                    }
                    var_199 = 2;
                    var_74[var_66][var_67] = 1;
                    var_75[var_201] = 1;
                    return [4 /*yield*/, func017()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, func018()];
                case 5:
                    _a.sent();
                    if (var_200 == var_201) {
                        var_98 = 1;
                    }
                    chdir(var_30);
                    onexit(1);
                    var_626 = 0;
                    return [4 /*yield*/, func111()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, func076()];
                case 7:
                    _a.sent();
                    cnt1_115 = 0;
                    _a.label = 8;
                case 8:
                    if (!(cnt1_115 < 80)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func339()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    ++cnt1_115;
                    return [3 /*break*/, 8];
                case 11:
                    var_68 = 1;
                    return [4 /*yield*/, func331()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func877() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_116;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(877);
                    var_983 = sdim(3000);
                    var_71 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_80 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_986 = dim(100);
                    var_486 = dim(length1 = 80, length2 = 21, length3 = 30, length4 = null);
                    var_76 = dim(length1 = 100, length2 = 5, length3 = 3, length4 = null);
                    var_74 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_75 = dim(20);
                    var_83 = CharactorInfo.dim(300);
                    var_78 = ItemInfo.dim(300);
                    var_81 = dim(length1 = 300, length2 = 7, length3 = null, length4 = null);
                    return [4 /*yield*/, func881()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func870()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func878()];
                case 3:
                    _a.sent();
                    var_3474 = 1;
                    for (cnt1_116 = 0; cnt1_116 < var_97; ++cnt1_116) {
                        if (var_83[var_3474].Var10 == var_201) {
                            if (var_83[var_3474].Var0 != 101 && var_83[var_3474].Var0 != 102 && var_83[var_3474].Var0 != 103 && var_83[var_3474].Var0 != 104) {
                                var_83[var_3474].Var12 = 0;
                            }
                        }
                        var_3474++;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function func878() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_117, cnt2_40;
        return __generator(this, function (_a) {
            dbgprt(878);
            var_764 = 0;
            var_1075 = 0;
            for (cnt1_117 = 0; cnt1_117 < var_32; ++cnt1_117) {
                var_1076 = 0;
                for (cnt2_40 = 0; cnt2_40 < 57; ++cnt2_40) {
                    if (var_71[var_1076][var_1075] == 21 || var_71[var_1076][var_1075] == 22 || var_71[var_1076][var_1075] == 23 || var_71[var_1076][var_1075] == 24) {
                        var_71[var_1076][var_1075] = 14;
                    }
                    var_1076 = var_1076 + 1;
                    var_764 = var_764 + 1;
                }
                var_1075 = var_1075 + 1;
            }
            return [2 /*return*/];
        });
    });
}
function func879() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(879);
                    var_336++;
                    var_866 = var_336;
                    var_77[var_1076][var_1075] = var_866;
                    var_78[var_866].Var0 = var_1770;
                    var_78[var_866].Var1 = var_1076;
                    var_78[var_866].Var2 = var_1075;
                    var_78[var_866].Var9 = var_71[var_1076][var_1075];
                    if (var_1770 == 1) {
                        var_78[var_866].Var13 = var_3342;
                    }
                    if (var_1770 >= 100 && var_1770 < 400) {
                        var_78[var_866].Var19 = 1;
                        var_78[var_866].Var20 = var_78[var_866].Var0;
                        var_78[var_866].Var5 = 8;
                        var_78[var_866].Var4 = var_3342;
                        var_78[var_866].Var14 = 1;
                        if (var_3342 == 11) {
                            var_78[var_866].Var4 = 0;
                            var_78[var_866].Var12 = 1;
                        }
                    }
                    if (var_1770 >= 400 && var_1770 < 500) {
                        var_78[var_866].Var3 = var_3342;
                    }
                    if (!(var_1770 >= 800 && var_1770 < 900)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func395()];
                case 1:
                    _a.sent();
                    var_78[var_866].Var6 = var_858;
                    var_78[var_866].Var7 = var_3342;
                    var_78[var_866].Var8 = 0;
                    var_486[var_858][1][0] = 0;
                    var_486[var_858][2][0] = 0;
                    var_486[var_858][3][0] = 0;
                    var_486[var_858][4][0] = 0;
                    var_486[var_858][5][0] = 0;
                    var_486[var_858][6][0] = 0;
                    var_486[var_858][7][0] = 0;
                    var_486[var_858][8][0] = 0;
                    var_486[var_858][9][0] = 0;
                    var_486[var_858][10][0] = 0;
                    _a.label = 2;
                case 2:
                    var_1771 = var_78[var_866].Var0;
                    var_862[var_1771][0] = 1;
                    return [2 /*return*/];
            }
        });
    });
}
function func880() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(880);
                    return [4 /*yield*/, func108()];
                case 1:
                    _a.sent();
                    var_3462 = 0;
                    var_375 = 0;
                    return [4 /*yield*/, func235()];
                case 2:
                    _a.sent();
                    onexit(0);
                    if (!(var_3475 == 1)) return [3 /*break*/, 4];
                    chdir("問題");
                    if (var_539 != 0) {
                        var_3476 = "2";
                        bsave(file_name = var_3336, data = var_3476, data_size = 1, offset = 0);
                    }
                    var_539 = 0;
                    var_3475 = 0;
                    return [4 /*yield*/, func883()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    var_539 = 0;
                    return [4 /*yield*/, func841()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func881() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_118, cnt1_119;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(881);
                    notesel(var_3477);
                    var_3472 = sdim(10000);
                    var_3472 = bload(var_3336);
                    return [4 /*yield*/, func886()];
                case 1:
                    _a.sent();
                    noteadd(var_3472, 0, 1);
                    var_983 = "";
                    var_3478 = 1;
                    for (cnt1_118 = 0; cnt1_118 < 38; ++cnt1_118) {
                        var_3479 = noteget(var_3478);
                        var_983 = var_983 + var_3479;
                        var_3478 = var_3478 + 1;
                    }
                    for (cnt1_119 = 0; cnt1_119 < 38; ++cnt1_119) {
                        var_3479 = noteget(var_3478);
                        var_983 = var_983 + var_3479;
                        var_3478 = var_3478 + 1;
                    }
                    var_3480 = 39 + 38;
                    var_3253 = noteget(0);
                    var_201 = noteget(var_3480);
                    var_3480++;
                    var_3339 = noteget(var_3480);
                    var_3480++;
                    var_3422 = noteget(var_3480);
                    var_3480++;
                    var_3421 = noteget(var_3480);
                    var_3480++;
                    var_3424 = noteget(var_3480);
                    var_3480++;
                    var_3423 = noteget(var_3480);
                    var_3480++;
                    var_3426 = noteget(var_3480);
                    var_3480++;
                    var_3425 = noteget(var_3480);
                    var_3480++;
                    var_3428 = noteget(var_3480);
                    var_3480++;
                    var_3427 = noteget(var_3480);
                    var_3480++;
                    var_3430 = noteget(var_3480);
                    var_3480++;
                    var_3429 = noteget(var_3480);
                    var_3480++;
                    var_3432 = noteget(var_3480);
                    var_3480++;
                    var_3431 = noteget(var_3480);
                    var_3480++;
                    var_3434 = noteget(var_3480);
                    var_3480++;
                    var_3433 = noteget(var_3480);
                    var_3480++;
                    var_3436 = noteget(var_3480);
                    var_3480++;
                    var_3435 = noteget(var_3480);
                    var_3480++;
                    var_3438 = noteget(var_3480);
                    var_3480++;
                    var_3437 = noteget(var_3480);
                    var_3480++;
                    var_3440 = noteget(var_3480);
                    var_3480++;
                    var_3439 = noteget(var_3480);
                    var_3480++;
                    var_3442 = noteget(var_3480);
                    var_3480++;
                    var_3441 = noteget(var_3480);
                    var_3480++;
                    var_3444 = noteget(var_3480);
                    var_3480++;
                    var_3443 = noteget(var_3480);
                    var_3480++;
                    var_3446 = noteget(var_3480);
                    var_3480++;
                    var_3445 = noteget(var_3480);
                    var_3480++;
                    var_3448 = noteget(var_3480);
                    var_3480++;
                    var_3447 = noteget(var_3480);
                    var_3480++;
                    var_3450 = noteget(var_3480);
                    var_3480++;
                    var_3449 = noteget(var_3480);
                    var_3480++;
                    var_3452 = noteget(var_3480);
                    var_3480++;
                    var_3451 = noteget(var_3480);
                    var_3480++;
                    var_3454 = noteget(var_3480);
                    var_3480++;
                    var_3453 = noteget(var_3480);
                    var_3480++;
                    var_3456 = noteget(var_3480);
                    var_3480++;
                    var_3455 = noteget(var_3480);
                    var_3480++;
                    var_3458 = noteget(var_3480);
                    var_3480++;
                    var_3457 = noteget(var_3480);
                    var_3480++;
                    var_3460 = noteget(var_3480);
                    var_3480++;
                    var_3459 = noteget(var_3480);
                    var_3480++;
                    var_3341 = noteget(var_3480);
                    var_3480++;
                    var_3340 = noteget(var_3480);
                    var_3480++;
                    var_3343 = noteget(var_3480);
                    var_3480++;
                    var_3345 = noteget(var_3480);
                    var_3480++;
                    var_3344 = noteget(var_3480);
                    var_3480++;
                    var_3346 = noteget(var_3480);
                    var_3480++;
                    var_3348 = noteget(var_3480);
                    var_3480++;
                    var_3347 = noteget(var_3480);
                    var_3480++;
                    var_3349 = noteget(var_3480);
                    var_3480++;
                    var_3351 = noteget(var_3480);
                    var_3480++;
                    var_3350 = noteget(var_3480);
                    var_3480++;
                    var_3352 = noteget(var_3480);
                    var_3480++;
                    var_3354 = noteget(var_3480);
                    var_3480++;
                    var_3353 = noteget(var_3480);
                    var_3480++;
                    var_3355 = noteget(var_3480);
                    var_3480++;
                    var_3357 = noteget(var_3480);
                    var_3480++;
                    var_3356 = noteget(var_3480);
                    var_3480++;
                    var_3358 = noteget(var_3480);
                    var_3480++;
                    var_3360 = noteget(var_3480);
                    var_3480++;
                    var_3359 = noteget(var_3480);
                    var_3480++;
                    var_3361 = noteget(var_3480);
                    var_3480++;
                    var_3363 = noteget(var_3480);
                    var_3480++;
                    var_3362 = noteget(var_3480);
                    var_3480++;
                    var_3364 = noteget(var_3480);
                    var_3480++;
                    var_3366 = noteget(var_3480);
                    var_3480++;
                    var_3365 = noteget(var_3480);
                    var_3480++;
                    var_3367 = noteget(var_3480);
                    var_3480++;
                    var_3369 = noteget(var_3480);
                    var_3480++;
                    var_3368 = noteget(var_3480);
                    var_3480++;
                    var_3370 = noteget(var_3480);
                    var_3480++;
                    var_3372 = noteget(var_3480);
                    var_3480++;
                    var_3371 = noteget(var_3480);
                    var_3480++;
                    var_3373 = noteget(var_3480);
                    var_3480++;
                    var_3375 = noteget(var_3480);
                    var_3480++;
                    var_3374 = noteget(var_3480);
                    var_3480++;
                    var_3376 = noteget(var_3480);
                    var_3480++;
                    var_3378 = noteget(var_3480);
                    var_3480++;
                    var_3377 = noteget(var_3480);
                    var_3480++;
                    var_3379 = noteget(var_3480);
                    var_3480++;
                    var_3381 = noteget(var_3480);
                    var_3480++;
                    var_3380 = noteget(var_3480);
                    var_3480++;
                    var_3382 = noteget(var_3480);
                    var_3480++;
                    var_3384 = noteget(var_3480);
                    var_3480++;
                    var_3383 = noteget(var_3480);
                    var_3480++;
                    var_3385 = noteget(var_3480);
                    var_3480++;
                    var_3387 = noteget(var_3480);
                    var_3480++;
                    var_3386 = noteget(var_3480);
                    var_3480++;
                    var_3388 = noteget(var_3480);
                    var_3480++;
                    var_3390 = noteget(var_3480);
                    var_3480++;
                    var_3389 = noteget(var_3480);
                    var_3480++;
                    var_3391 = noteget(var_3480);
                    var_3480++;
                    var_3393 = noteget(var_3480);
                    var_3480++;
                    var_3392 = noteget(var_3480);
                    var_3480++;
                    var_3394 = noteget(var_3480);
                    var_3480++;
                    var_3396 = noteget(var_3480);
                    var_3480++;
                    var_3395 = noteget(var_3480);
                    var_3480++;
                    var_3397 = noteget(var_3480);
                    var_3480++;
                    var_3399 = noteget(var_3480);
                    var_3480++;
                    var_3398 = noteget(var_3480);
                    var_3480++;
                    var_3400 = noteget(var_3480);
                    var_3480++;
                    var_3402 = noteget(var_3480);
                    var_3480++;
                    var_3401 = noteget(var_3480);
                    var_3480++;
                    var_3404 = noteget(var_3480);
                    var_3480++;
                    var_3403 = noteget(var_3480);
                    var_3480++;
                    var_3406 = noteget(var_3480);
                    var_3480++;
                    var_3405 = noteget(var_3480);
                    var_3480++;
                    var_3408 = noteget(var_3480);
                    var_3480++;
                    var_3407 = noteget(var_3480);
                    var_3480++;
                    var_3410 = noteget(var_3480);
                    var_3480++;
                    var_3409 = noteget(var_3480);
                    var_3480++;
                    var_3412 = noteget(var_3480);
                    var_3480++;
                    var_3411 = noteget(var_3480);
                    var_3480++;
                    var_3414 = noteget(var_3480);
                    var_3480++;
                    var_3413 = noteget(var_3480);
                    var_3480++;
                    var_3416 = noteget(var_3480);
                    var_3480++;
                    var_3415 = noteget(var_3480);
                    var_3480++;
                    var_3418 = noteget(var_3480);
                    var_3480++;
                    var_3417 = noteget(var_3480);
                    var_3480++;
                    var_3420 = noteget(var_3480);
                    var_3480++;
                    var_3419 = noteget(var_3480);
                    var_3480++;
                    var_3260 = noteget(var_3480);
                    var_3480++;
                    var_3253 = int(var_3253);
                    var_201 = int(var_201);
                    var_3339 = int(var_3339);
                    var_3422 = int(var_3422);
                    var_3421 = int(var_3421);
                    var_3424 = int(var_3424);
                    var_3423 = int(var_3423);
                    var_3426 = int(var_3426);
                    var_3425 = int(var_3425);
                    var_3428 = int(var_3428);
                    var_3427 = int(var_3427);
                    var_3430 = int(var_3430);
                    var_3429 = int(var_3429);
                    var_3432 = int(var_3432);
                    var_3431 = int(var_3431);
                    var_3434 = int(var_3434);
                    var_3433 = int(var_3433);
                    var_3436 = int(var_3436);
                    var_3435 = int(var_3435);
                    var_3438 = int(var_3438);
                    var_3437 = int(var_3437);
                    var_3440 = int(var_3440);
                    var_3439 = int(var_3439);
                    var_3442 = int(var_3442);
                    var_3441 = int(var_3441);
                    var_3444 = int(var_3444);
                    var_3443 = int(var_3443);
                    var_3446 = int(var_3446);
                    var_3445 = int(var_3445);
                    var_3448 = int(var_3448);
                    var_3447 = int(var_3447);
                    var_3450 = int(var_3450);
                    var_3449 = int(var_3449);
                    var_3452 = int(var_3452);
                    var_3451 = int(var_3451);
                    var_3454 = int(var_3454);
                    var_3453 = int(var_3453);
                    var_3456 = int(var_3456);
                    var_3455 = int(var_3455);
                    var_3458 = int(var_3458);
                    var_3457 = int(var_3457);
                    var_3460 = int(var_3460);
                    var_3459 = int(var_3459);
                    var_3341 = int(var_3341);
                    var_3340 = int(var_3340);
                    var_3343 = int(var_3343);
                    var_3345 = int(var_3345);
                    var_3344 = int(var_3344);
                    var_3346 = int(var_3346);
                    var_3348 = int(var_3348);
                    var_3347 = int(var_3347);
                    var_3349 = int(var_3349);
                    var_3351 = int(var_3351);
                    var_3350 = int(var_3350);
                    var_3352 = int(var_3352);
                    var_3354 = int(var_3354);
                    var_3353 = int(var_3353);
                    var_3355 = int(var_3355);
                    var_3357 = int(var_3357);
                    var_3356 = int(var_3356);
                    var_3358 = int(var_3358);
                    var_3360 = int(var_3360);
                    var_3359 = int(var_3359);
                    var_3361 = int(var_3361);
                    var_3363 = int(var_3363);
                    var_3362 = int(var_3362);
                    var_3364 = int(var_3364);
                    var_3366 = int(var_3366);
                    var_3365 = int(var_3365);
                    var_3367 = int(var_3367);
                    var_3369 = int(var_3369);
                    var_3368 = int(var_3368);
                    var_3370 = int(var_3370);
                    var_3372 = int(var_3372);
                    var_3371 = int(var_3371);
                    var_3373 = int(var_3373);
                    var_3375 = int(var_3375);
                    var_3374 = int(var_3374);
                    var_3376 = int(var_3376);
                    var_3378 = int(var_3378);
                    var_3377 = int(var_3377);
                    var_3379 = int(var_3379);
                    var_3381 = int(var_3381);
                    var_3380 = int(var_3380);
                    var_3382 = int(var_3382);
                    var_3384 = int(var_3384);
                    var_3383 = int(var_3383);
                    var_3385 = int(var_3385);
                    var_3387 = int(var_3387);
                    var_3386 = int(var_3386);
                    var_3388 = int(var_3388);
                    var_3390 = int(var_3390);
                    var_3389 = int(var_3389);
                    var_3391 = int(var_3391);
                    var_3393 = int(var_3393);
                    var_3392 = int(var_3392);
                    var_3394 = int(var_3394);
                    var_3396 = int(var_3396);
                    var_3395 = int(var_3395);
                    var_3397 = int(var_3397);
                    var_3399 = int(var_3399);
                    var_3398 = int(var_3398);
                    var_3400 = int(var_3400);
                    var_3402 = int(var_3402);
                    var_3401 = int(var_3401);
                    var_3404 = int(var_3404);
                    var_3403 = int(var_3403);
                    var_3406 = int(var_3406);
                    var_3405 = int(var_3405);
                    var_3408 = int(var_3408);
                    var_3407 = int(var_3407);
                    var_3410 = int(var_3410);
                    var_3409 = int(var_3409);
                    var_3412 = int(var_3412);
                    var_3411 = int(var_3411);
                    var_3414 = int(var_3414);
                    var_3413 = int(var_3413);
                    var_3416 = int(var_3416);
                    var_3415 = int(var_3415);
                    var_3418 = int(var_3418);
                    var_3417 = int(var_3417);
                    var_3420 = int(var_3420);
                    var_3419 = int(var_3419);
                    var_3260 = int(var_3260);
                    var_3262 = var_3260;
                    return [2 /*return*/];
            }
        });
    });
}
function func882() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(882);
                    return [4 /*yield*/, func108()];
                case 1:
                    _a.sent();
                    var_3481 = 26;
                    var_3482 = 106;
                    var_3483 = var_3482;
                    var_3484 = 57;
                    var_3485 = 110;
                    var_3486 = 1;
                    var_3487 = 1;
                    var_3488 = 1;
                    var_3489 = 0;
                    if (var_709 != 0 || var_716 != 0 || var_723 != 0) {
                        var_3489 = 1;
                        var_3486 = 0;
                    }
                    if (var_710 != 0 || var_717 != 0 || var_724 != 0) {
                        var_3489 = 2;
                        var_3486 = 0;
                    }
                    var_3490 = sdim(10000);
                    dirlist(var_3490, "問題", 5);
                    if (stat == 0) {
                        mkdir("問題");
                    }
                    chdir("問題");
                    return [4 /*yield*/, func883()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func883() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_120;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(883);
                    var_627 = 1;
                    var_3490 = sdim(10000);
                    dirlist(var_3490, "*.btq");
                    notesel(var_3490);
                    var_3491 = 0;
                    var_3491 = noteinfo(0);
                    var_3492 = Math.floor(var_3491 / 10) + 1;
                    var_3493 = dim(var_3491);
                    var_3494 = 0;
                    var_3495 = "";
                    for (cnt1_120 = 0; cnt1_120 < var_3491; ++cnt1_120) {
                        var_3496 = noteget(var_3494);
                        var_3495 = bload(var_3496, 1);
                        if (var_3495 == "0" || var_3495 == "1") {
                            var_3493[var_3494] = 0;
                        }
                        if (var_3495 == "2") {
                            var_3493[var_3494] = 1;
                        }
                        if (var_3495 == "3") {
                            var_3493[var_3494] = 2;
                        }
                        if (var_3495 == "4") {
                            var_3493[var_3494] = 3;
                        }
                        var_3494++;
                    }
                    return [4 /*yield*/, func884()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func884() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(884);
                    var_3497 = var_3487 * 10 - 10;
                    var_3498 = var_3491 - var_3497;
                    if (var_3498 >= 10) {
                        var_3498 = 10;
                    }
                    return [4 /*yield*/, func080()];
                case 1:
                    _a.sent();
                    if (!(var_3491 > 0)) return [3 /*break*/, 41];
                    if (!(var_259 == 1)) return [3 /*break*/, 13];
                    if (!(var_3489 >= 1 && var_3486 == 0)) return [3 /*break*/, 5];
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func885()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func884()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
                case 5:
                    if (!(var_3488 < 10 && var_3488 < var_3498)) return [3 /*break*/, 9];
                    var_3482 = var_3482 + 20;
                    var_3488++;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func885()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, func884()];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
                case 9:
                    if (!(var_3488 == 10 || var_3488 >= var_3498)) return [3 /*break*/, 13];
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func885()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, func884()];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
                case 13:
                    if (!(var_255 == 1)) return [3 /*break*/, 25];
                    if (!(var_3489 >= 1 && var_3488 == 1)) return [3 /*break*/, 17];
                    var_3486 = 0;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func885()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, func884()];
                case 16:
                    _a.sent();
                    return [2 /*return*/];
                case 17:
                    if (!(var_3488 > 1)) return [3 /*break*/, 21];
                    var_3482 = var_3482 - 20;
                    var_3488--;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func885()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, func884()];
                case 20:
                    _a.sent();
                    return [2 /*return*/];
                case 21:
                    if (!(var_3488 <= 1)) return [3 /*break*/, 25];
                    var_3482 = var_3483 + 20 * var_3498 - 20;
                    var_3488 = var_3498;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func885()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, func884()];
                case 24:
                    _a.sent();
                    return [2 /*return*/];
                case 25:
                    if (!(var_257 == 1 && var_3486 != 0)) return [3 /*break*/, 33];
                    if (!(var_3487 < var_3492)) return [3 /*break*/, 29];
                    var_3487++;
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3497 = var_3487 * 10 - 10;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func885()];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, func884()];
                case 28:
                    _a.sent();
                    return [2 /*return*/];
                case 29:
                    if (!(var_3487 >= var_3492)) return [3 /*break*/, 33];
                    var_3487 = 1;
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3497 = var_3487 * 10 - 10;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func885()];
                case 30:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, func884()];
                case 32:
                    _a.sent();
                    return [2 /*return*/];
                case 33:
                    if (!(var_254 == 1 && var_3486 != 0)) return [3 /*break*/, 41];
                    if (!(var_3487 > 1)) return [3 /*break*/, 37];
                    var_3487--;
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3497 = var_3487 * 10 - 10;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func885()];
                case 34:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 35:
                    _a.sent();
                    return [4 /*yield*/, func884()];
                case 36:
                    _a.sent();
                    return [2 /*return*/];
                case 37:
                    if (!(var_3487 <= 1)) return [3 /*break*/, 41];
                    var_3487 = var_3492;
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3497 = var_3487 * 10 - 10;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func885()];
                case 38:
                    _a.sent();
                    return [4 /*yield*/, wait(10)];
                case 39:
                    _a.sent();
                    return [4 /*yield*/, func884()];
                case 40:
                    _a.sent();
                    return [2 /*return*/];
                case 41:
                    if (!(var_242 == 1)) return [3 /*break*/, 47];
                    DSPLAY(audio_id = 212);
                    if (!(var_3486 == 0)) return [3 /*break*/, 45];
                    return [4 /*yield*/, func178()];
                case 42:
                    _a.sent();
                    return [4 /*yield*/, func233()];
                case 43:
                    _a.sent();
                    onexit(0);
                    return [4 /*yield*/, func841()];
                case 44:
                    _a.sent();
                    return [2 /*return*/];
                case 45:
                    if (!(var_3491 > 0)) return [3 /*break*/, 47];
                    var_3499 = var_3486 - 1;
                    var_1643 = noteget(var_3499);
                    var_3336 = var_1643;
                    var_3475 = 1;
                    var_375 = 1;
                    return [4 /*yield*/, func876()];
                case 46:
                    _a.sent();
                    return [2 /*return*/];
                case 47:
                    if (!(var_239 == 1)) return [3 /*break*/, 50];
                    var_627 = 0;
                    return [4 /*yield*/, func178()];
                case 48:
                    _a.sent();
                    DSPLAY(audio_id = 212);
                    chdir(var_30);
                    return [4 /*yield*/, func142()];
                case 49:
                    _a.sent();
                    return [2 /*return*/];
                case 50: return [4 /*yield*/, func885()];
                case 51:
                    _a.sent();
                    return [4 /*yield*/, wait(5)];
                case 52:
                    _a.sent();
                    return [4 /*yield*/, func884()];
                case 53:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func885() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_121;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(885);
                    redraw(0);
                    gmode(2);
                    pos(0, 0);
                    gcopy(3, 0, 400, 680, 680);
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(0, 0);
                    gcopy(12, 0, 0, 680, 680);
                    var_1631 = 20;
                    var_1632 = 10;
                    var_1633 = 300;
                    var_1634 = 30;
                    var_1635 = 0;
                    var_1636 = 0;
                    color(0, 0, 0);
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(var_1631 - 3, var_1632 - 3);
                    gcopy(12, 0, 0, var_1633 + 5, var_1634 + 5);
                    gmode(2);
                    color(255, 255, 255);
                    line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                    line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                    line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                    line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                    pset(var_1631 - var_1635, var_1632 - var_1636);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                    pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                    font("ＭＳ　Ｐゴシック", 16, 1);
                    pos(var_1631 + 105, var_1632 + 8);
                    mes("魔少年の問題");
                    if (var_3489 >= 1) {
                        var_1631 = 20;
                        var_1632 = 55;
                        var_1633 = 115;
                        var_1634 = 30;
                        var_1635 = 0;
                        var_1636 = 0;
                        color(0, 0, 0);
                        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                        pos(var_1631 - 3, var_1632 - 3);
                        gcopy(12, 0, 0, var_1633 + 5, var_1634 + 5);
                        gmode(2);
                        color(255, 255, 255);
                        line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                        line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                        line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                        line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                        pset(var_1631 - var_1635, var_1632 - var_1636);
                        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                        pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                        font("ＭＳ　Ｐゴシック", 16, 1);
                        pos(var_1631 + 38, var_1632 + 8);
                        mes("問題作成");
                    }
                    var_1631 = 20;
                    var_1632 = 100;
                    var_1633 = 300;
                    var_1634 = 220;
                    var_1635 = 0;
                    var_1636 = 0;
                    color(0, 0, 0);
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(var_1631 - 3, var_1632 - 3);
                    gcopy(12, 0, 0, var_1633 + 5, 220 + 5);
                    gmode(2);
                    color(255, 255, 255);
                    line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                    line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635 - 170, var_1632 + var_1634 + var_1636);
                    line(var_1631 - var_1635 + 175, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                    line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                    line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                    pset(var_1631 - var_1635, var_1632 - var_1636);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                    pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                    font("ＭＳ　Ｐゴシック", 16, 1);
                    if (var_3487 < 10) {
                        pos(var_1631 - var_1635 + 150, var_1632 + var_1634 + var_1636 - 8);
                        mes("" + var_3487);
                    }
                    if (var_3487 >= 10) {
                        pos(var_1631 - var_1635 + 145, var_1632 + var_1634 + var_1636 - 8);
                        mes("" + var_3487);
                    }
                    color(255, 255, 255);
                    var_3500 = var_3485;
                    var_3494 = var_3487 * 10 - 10;
                    var_3501 = var_3491 - var_3494;
                    if (var_3501 >= 10) {
                        var_3501 = 10;
                    }
                    for (cnt1_121 = 0; cnt1_121 < var_3501; ++cnt1_121) {
                        var_3502 = noteget(var_3494);
                        getstr(var_3503, var_3502, 0, 46);
                        pos(var_3484, var_3500);
                        color(255, 255, 255);
                        if (var_3493[var_3494] == 1) {
                            color(255, 255, 0);
                        }
                        if (var_3493[var_3494] == 2) {
                            color(255, 0, 0);
                        }
                        if (var_3493[var_3494] == 3) {
                            color(0, 255, 255);
                        }
                        mes("" + var_3503);
                        var_3494++;
                        var_3500 = var_3500 + 20;
                    }
                    gmode(2);
                    pos(var_3481, var_3482);
                    if (var_3486 == 0) {
                        pos(var_3481, 59);
                    }
                    gcopy(8, 70, 50, 25, 20);
                    color(0, 0, 0);
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(290, 50);
                    gcopy(3, 1560, 0, 40, 45);
                    gmode(2);
                    pos(290, 48);
                    gcopy(3, 760, 120, 40, 40);
                    pos(150, 32);
                    gcopy(17, 0, 920, 160, 80);
                    font("ＭＳ　Ｐゴシック", 12, 1);
                    color(0, 0, 0);
                    pos(175, 62);
                    if (var_3491 > 0) {
                        mes("問題を選びな！");
                    }
                    if (var_3491 == 0) {
                        mes("問題がないぜ");
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
function func886() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_122;
        return __generator(this, function (_a) {
            dbgprt(886);
            var_3504 = var_3336;
            exist(var_3504);
            var_3505 = strsize;
            var_254 = "lナ2";
            var_3506 = 1;
            for (cnt1_122 = 0; cnt1_122 < var_3505 - 1; ++cnt1_122) {
                var_3507 = peek(var_3472, var_3506);
                conf_keyon = peek(var_254, var_3506 % 4);
                var_3508 = var_3507 ^ conf_keyon;
                conf_keyon = conf_keyon + 57 && 255;
                poke(var_254, var_3506 % 4, conf_keyon);
                poke(var_3472, var_3506, var_3508);
                var_3506++;
            }
            return [2 /*return*/];
        });
    });
}
function func887() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_123;
        return __generator(this, function (_a) {
            dbgprt(887);
            var_3504 = var_3336;
            exist(var_3504);
            var_3505 = strsize;
            if (var_3505 < 0) {
                var_3505 = 10000;
            }
            var_254 = "lナ2";
            var_3506 = 1;
            for (cnt1_123 = 0; cnt1_123 < var_3505 - 1; ++cnt1_123) {
                var_3507 = peek(var_3472, var_3506);
                conf_keyon = peek(var_254, var_3506 % 4);
                var_3508 = var_3507 ^ conf_keyon;
                conf_keyon = conf_keyon + 57 && 255;
                poke(var_254, var_3506 % 4, conf_keyon);
                poke(var_3472, var_3506, var_3508);
                var_3506++;
            }
            return [2 /*return*/];
        });
    });
}
function func888() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_124;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(888);
                    var_874 = sdim(10000);
                    var_3322 = sdim(10000);
                    var_884 = dim(10000);
                    var_874 = "アイテム";
                    var_3322 = "eeeeeeeeee";
                    var_883 = 1;
                    cnt1_124 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_124 < 150)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func889()];
                case 2:
                    _a.sent();
                    var_874 = var_874 + "\n" + item_name;
                    if (item_list < 10) {
                        var_3322 = var_3322 + "\np" + item_list + "eeeeeeee";
                    }
                    if (item_list >= 10 && item_list < 100) {
                        var_3322 = var_3322 + "\np" + item_list + "eeeeeee";
                    }
                    if (item_list >= 100) {
                        var_3322 = var_3322 + "\np" + item_list + "eeeeee";
                    }
                    var_884[var_883] = item_list;
                    if (item_list == 1) {
                        return [3 /*break*/, 4];
                    }
                    var_883++;
                    _a.label = 3;
                case 3:
                    ++cnt1_124;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
//アイテムの購入金額の値
function func889() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(889);
            item_name = "";
            var_483 = 0;
            var_3509 = 0;
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 0;
                var_483 = 1;
                item_name = "------------------";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 122;
                var_483 = 1000;
                item_name = "ｱﾇﾋﾞｽ神のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 201;
                var_483 = 900;
                item_name = "ｲｴﾛｰﾃﾝﾊﾟﾗﾝｽのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 304;
                var_483 = 1900;
                item_name = "ｳｪｻﾞｰﾘﾎﾟｰﾄのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 312;
                var_483 = 8200;
                item_name = "ｴｱﾛｽﾐｽのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 103;
                var_483 = 650;
                item_name = "ｴｺｰｽﾞACT3のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 315;
                var_483 = 2500;
                item_name = "ｴﾋﾟﾀﾌのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 308;
                var_483 = 2200;
                item_name = "ｴﾎﾞﾆｰ･ﾃﾞﾋﾞﾙのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 310;
                var_483 = 1000;
                item_name = "ｴﾝﾌﾟﾚｽのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 206;
                var_483 = 2200;
                item_name = "ｵｱｼｽのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 317;
                var_483 = 2300;
                item_name = "ｷｯｽのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 112;
                var_483 = 11700;
                item_name = "ｷﾗｰ･ｸｨｰﾝのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 102;
                var_483 = 19000;
                item_name = "ｷﾝｸﾞ･ｸﾘﾑｿﾞﾝのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 113;
                var_483 = 2100;
                item_name = "ｸﾗｯｼｭのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 205;
                var_483 = 2500;
                item_name = "ｸﾗﾌﾄﾜｰｸのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 123;
                var_483 = 11000;
                item_name = "ｸﾘｰﾑのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 207;
                var_483 = 850;
                item_name = "ｸﾞﾚｲﾄﾌﾙ･ﾃﾞｯﾄﾞのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 106;
                var_483 = 4600;
                item_name = "ｸﾚｲｼﾞｰ･DのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 115;
                var_483 = 5200;
                item_name = "G･ｴｸｽﾍﾟﾘｴﾝｽのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 104;
                var_483 = 650;
                item_name = "ｻﾞ･ﾊﾝﾄﾞのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 203;
                var_483 = 1400;
                item_name = "ｻﾞ･ﾌｰﾙのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 111;
                var_483 = 15600;
                item_name = "ｻﾞ･ﾜｰﾙﾄﾞのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 316;
                var_483 = 1000;
                item_name = "ｻﾊﾞｲﾊﾞｰのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 204;
                var_483 = 5300;
                item_name = "ｼｱｰﾊｰﾄｱﾀｯｸのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 318;
                var_483 = 1000;
                item_name = "ｼﾞｬﾝﾋﾟﾝJﾌﾗｯｼｭのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 101;
                var_483 = 14000;
                item_name = "ｼﾙﾊﾞｰﾁｬﾘｵｯﾂのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 200;
                var_483 = 1800;
                item_name = "ｽｰﾊﾟｰﾌﾗｲのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 100;
                var_483 = 17000;
                item_name = "ｽﾀｰ･ﾌﾟﾗﾁﾅのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 108;
                var_483 = 16000;
                item_name = "ｽﾃｨｯｷｰﾌｨﾝｶﾞｰｽﾞのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 120;
                var_483 = 1700;
                item_name = "ｽﾄｰﾝ･ﾌﾘｰのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 314;
                var_483 = 1200;
                item_name = "ｽﾄﾚｲ･ｷｬｯﾄのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 119;
                var_483 = 1350;
                item_name = "ｽﾊﾟｲｽ･ｶﾞｰﾙのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 117;
                var_483 = 1800;
                item_name = "ﾀﾞｰｸﾌﾞﾙｰﾑｰﾝのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 118;
                var_483 = 1300;
                item_name = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 311;
                var_483 = 1000;
                item_name = "ﾁｰﾌﾟ･ﾄﾘｯｸのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 105;
                var_483 = 950;
                item_name = "ﾁﾘﾍﾟｯﾊﾟｰのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 107;
                var_483 = 750;
                item_name = "ﾃﾞｽ･13のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 303;
                var_483 = 7400;
                item_name = "ﾄﾞﾗｺﾞﾝｽﾞﾄﾞﾘｰﾑのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 116;
                var_483 = 700;
                item_name = "ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 301;
                var_483 = 8800;
                item_name = "ﾊｰｳﾞｪｽﾄのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 121;
                var_483 = 1000;
                item_name = "ﾊﾟｰﾌﾟﾙ･ﾍｲｽﾞのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 300;
                var_483 = 1300;
                item_name = "ﾊﾟｰﾙ･ｼﾞｬﾑのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 313;
                var_483 = 5200;
                item_name = "ﾊｲｳｪｲ･ｽﾀｰのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 302;
                var_483 = 800;
                item_name = "ﾊｲｳｪｲ･ﾄｩ･ﾍﾙのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 395;
                var_483 = 4700;
                item_name = "ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 319;
                var_483 = 3400;
                item_name = "ﾎﾞｰｲIIﾏﾝのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 202;
                var_483 = 3900;
                item_name = "ﾎﾜｲﾄｱﾙﾊﾞﾑのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 109;
                var_483 = 13200;
                item_name = "ﾏｼﾞｼｬﾝｽﾞﾚｯﾄﾞのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 306;
                var_483 = 4400;
                item_name = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 320;
                var_483 = 2000;
                item_name = "ﾒﾀﾘｶのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 0;
                var_483 = 1;
                item_name = "------------------";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 406;
                var_483 = 550;
                item_name = "ｴｺｰｽﾞACT1のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 405;
                var_483 = 450;
                item_name = "ｴｺｰｽﾞACT2のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 402;
                var_483 = 800;
                item_name = "ｴﾝﾍﾟﾗｰのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 403;
                var_483 = 700;
                item_name = "ｾｯｸｽﾋﾟｽﾄﾙｽﾞのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 411;
                var_483 = 1300;
                item_name = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 400;
                var_483 = 900;
                item_name = "ﾊｲｴﾛﾌｧﾝﾄｸﾞﾘｰﾝのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 401;
                var_483 = 500;
                item_name = "ﾌｰ･ﾌｧｲﾀｰｽﾞのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 412;
                var_483 = 1600;
                item_name = "ﾍﾌﾞﾝｽﾞﾄﾞｱｰのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 404;
                var_483 = 1100;
                item_name = "ﾎﾙｽ神のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 408;
                var_483 = 750;
                item_name = "ﾏﾝ･ｲﾝ･ｻﾞ･ﾐﾗｰのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 409;
                var_483 = 550;
                item_name = "ﾗﾊﾞｰｽﾞのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 0;
                var_483 = 1;
                item_name = "------------------";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 570;
                var_483 = 500;
                item_name = "ｼﾞｮﾅｻﾝのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 572;
                var_483 = 500;
                item_name = "承太郎のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 569;
                var_483 = 500;
                item_name = "ﾎﾟﾙﾅﾚﾌのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 588;
                var_483 = 400;
                item_name = "J･ｶﾞｲﾙのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 575;
                var_483 = 500;
                item_name = "ﾏﾆｯｼｭﾎﾞｰｲのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 563;
                var_483 = 400;
                item_name = "ﾝﾄﾞｩｰﾙのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 571;
                var_483 = 500;
                item_name = "ﾎﾞｲﾝｺﾞのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 579;
                var_483 = 1500;
                item_name = "ﾍﾟｯﾄｼｮｯﾌﾟのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 584;
                var_483 = 500;
                item_name = "ﾇｹｻｸのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 560;
                var_483 = 400;
                item_name = "仗助のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 562;
                var_483 = 1500;
                item_name = "康一のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 585;
                var_483 = 500;
                item_name = "億泰のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 573;
                var_483 = 400;
                item_name = "重ちーのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 564;
                var_483 = 500;
                item_name = "噴上裕也のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 577;
                var_483 = 900;
                item_name = "ﾐｷﾀｶのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 587;
                var_483 = 500;
                item_name = "吉良吉影のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 589;
                var_483 = 500;
                item_name = "ﾌﾟﾛｼｭｰﾄ兄貴のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 586;
                var_483 = 900;
                item_name = "ペッシのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 590;
                var_483 = 400;
                item_name = "ｷﾞｱｯﾁｮのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 580;
                var_483 = 1500;
                item_name = "ﾄﾞｯﾋﾟｵのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 565;
                var_483 = 400;
                item_name = "ﾌﾟｯﾁ神父のDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 574;
                var_483 = 500;
                item_name = "ｴﾝﾎﾟﾘｵのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 568;
                var_483 = 500;
                item_name = "ｼﾞｮﾝｶﾞﾘ･AのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 566;
                var_483 = 500;
                item_name = "ｹﾝｿﾞｰのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 576;
                var_483 = 400;
                item_name = "破裂するDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 582;
                var_483 = 300;
                item_name = "水が熱湯になるDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 578;
                var_483 = 1500;
                item_name = "ｻﾝﾄﾞﾏﾝのDISC";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 0;
                var_483 = 1;
                item_name = "------------------";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 600;
                var_483 = 100;
                item_name = "ﾋﾟｯﾂｧ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 602;
                var_483 = 400;
                item_name = "ﾈｱﾎﾟﾘｽのﾋﾟｯﾂｧ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 604;
                var_483 = 800;
                item_name = "ﾎﾟﾙﾎﾟのﾋﾟｯﾂｧ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 630;
                var_483 = 600;
                item_name = "娼婦風ｽﾊﾟｹﾞｯﾃｨ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 631;
                var_483 = 600;
                item_name = "ﾓｯﾂｧﾚﾗﾁｰｽﾞとﾄﾏﾄのｻﾗﾀﾞ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 632;
                var_483 = 600;
                item_name = "ｷﾘﾏﾝｼﾞｬﾛの雪解け水";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 633;
                var_483 = 600;
                item_name = "子羊背肉のﾘﾝｺﾞｿｰｽかけ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 634;
                var_483 = 600;
                item_name = "ﾌﾟﾘﾝ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 650;
                var_483 = 200;
                item_name = "ｶｴﾙ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 651;
                var_483 = 500;
                item_name = "大きいｶｴﾙ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 653;
                var_483 = 1000;
                item_name = "超巨大なｶｴﾙ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 654;
                var_483 = 100;
                item_name = "ﾔﾄﾞｸｶﾞｴﾙ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 655;
                var_483 = 100;
                item_name = "ｻﾞﾘｶﾞﾆ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 0;
                var_483 = 1;
                item_name = "------------------";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 800;
                var_483 = 2400;
                item_name = "ｴﾆｸﾞﾏの紙";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 806;
                var_483 = 4600;
                item_name = "ｶﾙﾈの死体";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 807;
                var_483 = 4600;
                item_name = "DIOの骨";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 817;
                var_483 = 4600;
                item_name = "乳母車";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 850;
                var_483 = 2700;
                item_name = "波紋のツボ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 851;
                var_483 = 2500;
                item_name = "ﾎﾙﾏｼﾞｵのﾋﾞﾝ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 852;
                var_483 = 2600;
                item_name = "ランドセル";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 853;
                var_483 = 2800;
                item_name = "ｻｰﾌｨｽ人形";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 854;
                var_483 = 2900;
                item_name = "聖人の脊椎";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 801;
                var_483 = 400;
                item_name = "形兆のDISCｹｰｽ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 802;
                var_483 = 400;
                item_name = "ﾄﾗｸﾀｰのﾀｲﾔ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 803;
                var_483 = 400;
                item_name = "ｻﾝｼﾞｪﾙﾏﾝの紙袋";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 804;
                var_483 = 400;
                item_name = "露伴のカバン";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 0;
                var_483 = 1;
                item_name = "------------------";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 724;
                var_483 = 1500;
                item_name = "石仮面";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 714;
                var_483 = 2000;
                item_name = "紫外線照射装置";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 723;
                var_483 = 1500;
                item_name = "魔法のランプ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 726;
                var_483 = 1000;
                item_name = "鉄球";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 727;
                var_483 = 1000;
                item_name = "ｿﾞﾝﾋﾞ馬";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 0;
                var_483 = 1;
                item_name = "------------------";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 901;
                var_483 = 360;
                item_name = "一部のコミックス";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 906;
                var_483 = 360;
                item_name = "二部のコミックス";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 913;
                var_483 = 390;
                item_name = "三部のコミックス";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 929;
                var_483 = 390;
                item_name = "四部のコミックス";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 948;
                var_483 = 388;
                item_name = "五部のコミックス";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 964;
                var_483 = 390;
                item_name = "ストーンオーシャン";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 981;
                var_483 = 390;
                item_name = "STEEL BALL RUN";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 0;
                var_483 = 1;
                item_name = "------------------";
            }
            var_3509++;
            if (var_883 == var_3509) {
                item_list = 1;
                var_483 = 1;
                item_name = "お金";
            }
            var_3510 = var_3509;
            return [2 /*return*/];
        });
    });
}
function func890() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_125;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(890);
                    var_886 = sdim(10000);
                    var_3324 = sdim(10000);
                    var_3300 = dim(10000);
                    var_886 = "罠";
                    var_3324 = "eeeeeeeeee";
                    var_883 = 1;
                    cnt1_125 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_125 < 32)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func891()];
                case 2:
                    _a.sent();
                    var_886 = var_886 + "\n" + var_889;
                    if (var_888 < 10) {
                        var_3324 = var_3324 + "\np" + var_888 + "eeeeeeee";
                    }
                    if (var_888 >= 10 && var_888 < 100) {
                        var_3324 = var_3324 + "\np" + var_888 + "eeeeeee";
                    }
                    if (var_888 >= 100) {
                        var_3324 = var_3324 + "\np" + var_888 + "eeeeee";
                    }
                    var_3300[var_883] = var_888;
                    if (var_888 == 98) {
                        return [3 /*break*/, 4];
                    }
                    var_883++;
                    _a.label = 3;
                case 3:
                    ++cnt1_125;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function func891() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(891);
            var_3509 = 0;
            var_889 = "";
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 0;
                var_889 = "------------------";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 1;
                var_889 = "ｾﾄ神の罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 3;
                var_889 = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 5;
                var_889 = "猫袋";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 6;
                var_889 = "ﾀﾞｰﾋﾞｰ弟の落とし穴";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 7;
                var_889 = "ﾛｰﾘﾝｸﾞｽﾄｰﾝｽﾞの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 8;
                var_889 = "ﾎﾜｲﾄｱﾙﾊﾞﾑの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 9;
                var_889 = "ｴｺｰｽﾞACT2の罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 10;
                var_889 = "ｸﾗﾌﾄﾜｰｸの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 11;
                var_889 = "ﾜﾑｳの影";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 12;
                var_889 = "DIOの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 13;
                var_889 = "ｽｶｲ･ﾊｲの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 14;
                var_889 = "ｴｺｰｽﾞACT2の罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 15;
                var_889 = "ﾍﾌﾞﾝｽﾞ･ﾄﾞｱｰの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 16;
                var_889 = "ﾄｰｷﾝｸﾞ･ﾍｯﾄﾞの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 17;
                var_889 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰの地雷";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 18;
                var_889 = "ﾊﾞｽﾃﾄ女神の罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 19;
                var_889 = "ラクガキの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 20;
                var_889 = "ｴｺｰｽﾞACT2の罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 21;
                var_889 = "ｴﾝﾌﾟﾚｽの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 22;
                var_889 = "ﾊｲｳｪｲ･ｽﾀｰの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 23;
                var_889 = "ﾜｲｱｰﾄﾞの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 25;
                var_889 = "ネズミ捕りの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 26;
                var_889 = "ﾎﾜｲﾄｽﾈｲｸの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 28;
                var_889 = "ｵｴｺﾓﾊﾞの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 95;
                var_889 = "ﾀﾞｲｱｰさんの罠";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_888 = 98;
                var_889 = "ｶﾞﾗｽの破片";
            }
            return [2 /*return*/];
        });
    });
}
function func892() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_126;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(892);
                    var_890 = sdim(10000);
                    var_3319 = sdim(10000);
                    var_3292 = dim(10000);
                    var_890 = "敵";
                    var_3319 = "eeeeeeeeee";
                    var_883 = 1;
                    cnt1_126 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_126 < 126)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func893()];
                case 2:
                    _a.sent();
                    var_890 = var_890 + "\n" + var_891;
                    if (var_437 < 10) {
                        var_3319 = var_3319 + "\np" + var_437 + "eeeeeeee";
                    }
                    if (var_437 >= 10 && var_437 < 100) {
                        var_3319 = var_3319 + "\np" + var_437 + "eeeeeee";
                    }
                    if (var_437 >= 100) {
                        var_3319 = var_3319 + "\np" + var_437 + "eeeeee";
                    }
                    var_3292[var_883] = var_437;
                    if (var_437 == 37) {
                        return [3 /*break*/, 4];
                    }
                    var_883++;
                    _a.label = 3;
                case 3:
                    ++cnt1_126;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// 
function func893() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(893);
            var_3509 = 0;
            var_891 = "";
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 0;
                var_891 = "------------------";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 79;
                var_891 = "ｴｺｰｽﾞの卵";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 1;
                var_891 = "ﾔｸ中のｺﾞﾛﾂｷ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 5;
                var_891 = "小汚い浮浪者";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 147;
                var_891 = "ｼﾞｮｾﾌ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 2;
                var_891 = "ヌケサク";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 93;
                var_891 = "ｴﾝﾎﾟﾘｵ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 3;
                var_891 = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 94;
                var_891 = "ブルりん";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 77;
                var_891 = "ｴｺｰｽﾞACT1";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 51;
                var_891 = "ﾜﾝﾁｪﾝ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 7;
                var_891 = "運命の車輪";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 9;
                var_891 = "ﾗﾊﾞｰｿｳﾙ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 39;
                var_891 = "ﾊｲｳｪｲｽﾀｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 26;
                var_891 = "ﾊｰｳﾞｪｽﾄ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 76;
                var_891 = "ｴｺｰｽﾞACT2";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 6;
                var_891 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙの人形";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 165;
                var_891 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 52;
                var_891 = "ｼﾞｬｯｸ･ｻﾞ･ﾘﾊﾟｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 141;
                var_891 = "F・F";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 134;
                var_891 = "ｼﾞｮﾘｰﾝ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 4;
                var_891 = "ﾃﾞｽ･13";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 13;
                var_891 = "ﾗﾊﾞｰｽﾞ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 101;
                var_891 = "ﾍﾟｲｼﾞ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 102;
                var_891 = "ｼﾞｮｰﾝｽﾞ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 103;
                var_891 = "ﾌﾟﾗﾝﾄ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 104;
                var_891 = "ﾎﾞｰﾝﾅﾑ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 119;
                var_891 = "ｼﾞｮｾﾌ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 99;
                var_891 = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 71;
                var_891 = "ﾄﾞｩｰﾋﾞｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 12;
                var_891 = "ｴｺｰｽﾞACT3";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 56;
                var_891 = "ｼｭﾄﾛﾊｲﾑ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 28;
                var_891 = "ｼﾞｬｯｼﾞﾒﾝﾄ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 22;
                var_891 = "ｱｳﾞﾄﾞｩﾙ人形";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 31;
                var_891 = "吉良の親父";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 148;
                var_891 = "ｴﾙﾒｪｽ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 131;
                var_891 = "ｼﾞｮﾙﾉ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 115;
                var_891 = "ｱｸｱ･ﾈｯｸﾚｽ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 11;
                var_891 = "ﾜｲｱｰﾄﾞのﾍﾞｯｸ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 45;
                var_891 = "由花子";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 29;
                var_891 = "ｸﾞﾘｰﾝ･ﾃﾞｨ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 47;
                var_891 = "億泰";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 27;
                var_891 = "ｹﾞﾌﾞ神";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 136;
                var_891 = "ｼｰｻﾞｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 38;
                var_891 = "ｱﾚｯｼｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 48;
                var_891 = "ｴｱﾛｽﾐｽ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 78;
                var_891 = "ｱｳﾞﾄﾞｩﾙさん";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 17;
                var_891 = "ｼｱｰﾊｰﾄｱﾀｯｸ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 46;
                var_891 = "ﾎﾙ･ﾎｰｽ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 125;
                var_891 = "ﾌｰｺﾞ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 14;
                var_891 = "床屋のｶｰﾝ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 69;
                var_891 = "ﾌﾞﾗﾌｫｰﾄﾞ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 59;
                var_891 = "ﾌﾟｯﾁ神父";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 145;
                var_891 = "康一";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 18;
                var_891 = "ﾌﾞﾗｯｸ･ｻﾊﾞｽ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 35;
                var_891 = "仗助";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 135;
                var_891 = "若ｼﾞｮｾﾌ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 10;
                var_891 = "ﾉﾄｰﾘｱｽBIG";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 95;
                var_891 = "ｽﾄﾚｲﾂｫ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 63;
                var_891 = "ﾌﾟﾛｼｭｰﾄ兄貴";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 84;
                var_891 = "ﾁｮｺﾗｰﾀ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 117;
                var_891 = "ﾁｮｺﾗｰﾀの上半身";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 43;
                var_891 = "ｾｯｺ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 85;
                var_891 = "ﾘｿﾞｯﾄ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 32;
                var_891 = "吉良吉影";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 44;
                var_891 = "ﾚｯﾄﾞﾎｯﾄﾁﾘﾍﾟｯﾊﾟｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 72;
                var_891 = "ｹﾝｿﾞｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 66;
                var_891 = "ﾀﾙｶｽ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 113;
                var_891 = "DIO";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 15;
                var_891 = "ﾍﾟｯﾄｼｮｯﾌﾟ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 123;
                var_891 = "ﾌﾞﾁｬﾗﾃｨ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 80;
                var_891 = "ﾗﾝｸﾞ･ﾗﾝｸﾞﾗｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 65;
                var_891 = "虹村形兆";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 40;
                var_891 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 41;
                var_891 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ戦車";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 42;
                var_891 = "ｱﾊﾟｯﾁ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 54;
                var_891 = "ｸﾞﾘｰﾝﾍﾞﾚｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 61;
                var_891 = "ﾖｰﾖｰﾏｯ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 21;
                var_891 = "ｽﾄﾚｲ･ｷｬｯﾄ";
            }
            if (var_3489 == 2) {
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 88;
                    var_891 = "ﾄﾞﾉｳﾞｧﾝ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 138;
                    var_891 = "ﾃﾞｨｵ･ﾌﾞﾗﾝﾄﾞｰ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 140;
                    var_891 = "ｼﾞｮﾅｻﾝ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 73;
                    var_891 = "ﾀﾞｲｱｰさん";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 30;
                    var_891 = "禁煙中ﾎﾙ･ﾎｰｽ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 122;
                    var_891 = "ﾎﾟﾙﾅﾚﾌ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 121;
                    var_891 = "花京院";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 152;
                    var_891 = "ﾄﾘｯｼｭ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 160;
                    var_891 = "ｳｴｽﾄｳｯﾄﾞ看守";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 86;
                    var_891 = "ｻﾝﾀﾅ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 155;
                    var_891 = "ﾏﾗｲｱ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 156;
                    var_891 = "ｳｪｻﾞｰ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 157;
                    var_891 = "ｱﾅｽｲ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 144;
                    var_891 = "川尻浩作";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 128;
                    var_891 = "4部承太郎";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 158;
                    var_891 = "ﾌﾟｯﾂﾝ由花子";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 150;
                    var_891 = "康一act2!!";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 68;
                    var_891 = "ﾌﾞﾁ切れた仗助";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 67;
                    var_891 = "ﾌﾞﾁ切れた億泰";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 172;
                    var_891 = "虫喰いでない";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 151;
                    var_891 = "虫喰い";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 87;
                    var_891 = "ｴｼﾃﾞｨｼ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 164;
                    var_891 = "ｴｼﾃﾞｨｼの脳";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 109;
                    var_891 = "ワムウ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 110;
                    var_891 = "カーズ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 139;
                    var_891 = "ﾘｻﾘｻ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 124;
                    var_891 = "ﾐｽﾀ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 127;
                    var_891 = "C-MOON";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 126;
                    var_891 = "退院した花京院";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 129;
                    var_891 = "ｱﾇﾋﾞｽﾎﾟﾙﾅﾚﾌ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 133;
                    var_891 = "ｳﾞｧﾆﾗｱｲｽ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 64;
                    var_891 = "ｷﾞｱｯﾁｮ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 137;
                    var_891 = "成長した吉良";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 153;
                    var_891 = "ﾏｯｸｲｨｰﾝ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 118;
                    var_891 = "ｸﾘｰﾑ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 114;
                    var_891 = "最高にﾊｲなDIO";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 111;
                    var_891 = "究極カーズ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 120;
                    var_891 = "承太郎";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 60;
                    var_891 = "ｻﾞ･ﾆｭｰ神父";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 98;
                    var_891 = "ｴﾝﾎﾟﾘｵ(ｳｪｻﾞｰ)";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 19;
                    var_891 = "ｱﾗﾋﾞｱﾌｧｯﾂ";
                }
                var_3509++;
                if (var_883 == var_3509) {
                    var_437 = 90;
                    var_891 = "岩";
                }
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 37;
                var_891 = "猫";
            }
            return [2 /*return*/];
        });
    });
}
function func894() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(894);
            var_3511 = 6251;
            var_3512 = ginfo(4);
            if (var_3512 >= 330) {
                var_3513 = ginfo(4) - 320 - 8;
                var_3514 = ginfo(5);
            }
            if (var_3512 < 330) {
                var_3513 = ginfo(4) + 320 + 15;
                if (var_10 == 1) {
                    var_3513 = var_3513 + 200;
                }
                var_3514 = ginfo(5);
            }
            var_3515 = sdim(length1 = 256, length2 = 4, length3 = null);
            var_3516 = dim(30);
            var_1068 = sdim(300, 30);
            var_3517 = sdim(512 + 1);
            var_1058 = dim(30, 30);
            var_3518 = dim(30, 30);
            var_3519 = dim(30);
            var_3520 = sdim(40);
            var_3521 = sdim(length1 = 300, length2 = 40, length3 = null);
            var_1069 = dim(length1 = 10, length2 = 40, length3 = null, length4 = null);
            var_1070 = sdim(length1 = 100, length2 = 10, length3 = null);
            var_1071 = sdim(length1 = 100, length2 = 10, length3 = null);
            var_3522 = "";
            var_3079 = 0;
            var_534 = 0;
            var_624 = 0;
            var_3523 = 0;
            screen_(33, 320, 460, 4, var_3513, var_3514);
            width(320, 200);
            SetWindowLongA(hwnd, -8, var_15);
            var_3524 = (1 && 2) * (-2) - 16;
            gsel(window_id = ginfo(3), window_mode = -1);
            gsel(ginfo(3), 1);
            title("ログイン");
            cls(4);
            gmode(2);
            pos(35, 35);
            gcopy(17, 0, 560, 280, 120);
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
            pos(0, 0);
            gcopy(12, 0, 0, 320, 200);
            font("MS ゴシック", 12);
            color(255, 255, 255);
            pos(10, 10);
            mes("ニックネーム");
            pos(10, 30);
            input(var_40, 110, null, 10);
            pos(10, 60);
            mes("接続先アドレス");
            pos(10, 80);
            input(var_39, 110, null, 20);
            pos(10, 110);
            mes("使用ポート");
            pos(10, 130);
            input(var_3511, 110, null, 5);
            pos(10, 160);
            objsize(data0 = 80, data1 = 24);
            button("接続", func895);
            stop();
            return [2 /*return*/];
        });
    });
}
function func895() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_41, cnt1_127, cnt2_42, cnt2_43;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(895);
                    clrobj();
                    color(0, 0, 0);
                    boxf();
                    gmode(2);
                    pos(35, 35);
                    gcopy(17, 0, 560, 280, 120);
                    color(0, 0, 0);
                    gmode(4, null, null, 80);
                    pos(0, 0);
                    gcopy(12, 0, 0, 320, 200);
                    color(255, 255, 255);
                    pos(10, 20);
                    mes("接続中．．．");
                    pos(10, 40);
                    button("キャンセル", func896);
                    tcpopen(var_1050, var_39, var_3511);
                    if (!stat) return [3 /*break*/, 7];
                    gsel(window_id = 33, window_mode = -1);
                    gsel(0, 1);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "接続に失敗した。";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt2_41 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt2_41 < 5)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++cnt2_41;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, func009()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
                case 7:
                    cnt1_127 = 0;
                    _a.label = 8;
                case 8:
                    if (!true) return [3 /*break*/, 11];
                    tcpiscon(var_1050);
                    if (stat) {
                        return [3 /*break*/, 11];
                    }
                    return [4 /*yield*/, wait(1)];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    ++cnt1_127;
                    return [3 /*break*/, 8];
                case 11:
                    if (!(stat != 1)) return [3 /*break*/, 18];
                    gsel(window_id = 33, window_mode = -1);
                    gsel(0, 1);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "接続に失敗した。";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 12:
                    _a.sent();
                    cnt2_42 = 0;
                    _a.label = 13;
                case 13:
                    if (!(cnt2_42 < 5)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15:
                    ++cnt2_42;
                    return [3 /*break*/, 13];
                case 16: return [4 /*yield*/, func009()];
                case 17:
                    _a.sent();
                    return [2 /*return*/];
                case 18:
                    clrobj();
                    color(0, 0, 0);
                    boxf();
                    title("相手の情報");
                    var_3525 = "相手の情報";
                    width(320, 500);
                    var_3513 = ginfo(4);
                    var_3514 = ginfo(5) + 200;
                    screen_(30, 320, 320, 4, var_3513, var_3514);
                    SetWindowLongA(hwnd, -8, var_15);
                    var_3524 = (1 && 2) * (-2) - 16;
                    gsel(window_id = ginfo(3), window_mode = -1);
                    gsel(ginfo(3), 1);
                    title("チャットウィンドウ");
                    cls(4);
                    color(0, 0, 0);
                    boxf();
                    var_3526 = sdim(10000);
                    var_3526 = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
                    pos(0, 294);
                    input(var_3517, 320, 24, 50);
                    var_3527 = stat;
                    pos(0, 0);
                    mesbox(var_3526, 320, 290, 0);
                    var_3528 = stat;
                    var_3529 = objinfo(var_3528, 2);
                    objsel(var_3527);
                    return [4 /*yield*/, func898()];
                case 19:
                    _a.sent();
                    if (!(var_3530 == 1)) return [3 /*break*/, 26];
                    gsel(window_id = 33, window_mode = -1);
                    gsel(window_id = 30, window_mode = -1);
                    gsel(0, 1);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "ここは満員だ・・・";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 20:
                    _a.sent();
                    cnt2_43 = 0;
                    _a.label = 21;
                case 21:
                    if (!(cnt2_43 < 5)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent();
                    _a.label = 23;
                case 23:
                    ++cnt2_43;
                    return [3 /*break*/, 21];
                case 24: return [4 /*yield*/, func009()];
                case 25:
                    _a.sent();
                    return [2 /*return*/];
                case 26:
                    if (!(var_3531 == 1)) return [3 /*break*/, 31];
                    var_407 = 2;
                    var_536 = 1;
                    var_3532 = sdim(300, 30);
                    var_3533 = sdim(300, 30);
                    var_3534 = sdim(300, 30);
                    onkey(func901);
                    gsel(33, 1);
                    title("みんなの情報");
                    gsel(0, 1);
                    return [4 /*yield*/, func331()];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, func929()];
                case 28:
                    _a.sent();
                    var_3517 = "＃ログイン＃";
                    return [4 /*yield*/, func900()];
                case 29:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 30:
                    _a.sent();
                    return [2 /*return*/];
                case 31:
                    var_407 = 1;
                    onkey(func901);
                    gsel(33, 1);
                    gsel(0, 1);
                    return [4 /*yield*/, func331()];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, func907()];
                case 33:
                    _a.sent();
                    return [4 /*yield*/, func009()];
                case 34:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func896() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(896);
                    gsel(window_id = 33, window_mode = -1);
                    gsel(window_id = 0, window_mode = 1);
                    return [4 /*yield*/, func009()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func897() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(897);
            if (wparam == 8) {
                ShowWindow(var_15, 7);
                return [2 /*return*/, (0)];
            }
            else {
                return [2 /*return*/];
            }
            return [2 /*return*/];
        });
    });
}
function func898() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_128;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(898);
                    if (var_3535 == 0) {
                        var_3536 = "初水";
                    }
                    if (var_3535 == 1) {
                        var_3536 = "初赤";
                    }
                    if (var_3535 == 2) {
                        var_3536 = "初青";
                    }
                    if (var_3535 == 3) {
                        var_3536 = "初黄";
                    }
                    tcpput("" + var_3536 + "" + var_40, var_1050);
                    tcpput("\n", var_1050);
                    var_3530 = 0;
                    var_3531 = 0;
                    cnt1_128 = 0;
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 4];
                    var_3537 = sdim(1024);
                    tcpgetl(var_3537, 1024, var_1050);
                    if (stat != 0 && var_3537 == "o2") {
                        var_3531 = 1;
                        return [3 /*break*/, 4];
                    }
                    if (stat != 0 && var_3537 == "ok") {
                        var_3531 = 0;
                        return [3 /*break*/, 4];
                    }
                    if (stat != 0 && var_3537 == "man") {
                        var_3530 = 1;
                        return [3 /*break*/, 4];
                    }
                    return [4 /*yield*/, wait(1)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_128;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function func899() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_44, cnt4_6, cnt5_1, cnt4_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(899);
                    netfail(var_1050);
                    if (!stat) return [3 /*break*/, 6];
                    var_407 = 0;
                    netclose(var_1050);
                    gsel(window_id = 33, window_mode = -1);
                    gsel(window_id = 30, window_mode = -1);
                    gsel(0, 1);
                    onkey(0);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "接続が切断された。";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    cnt2_44 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt2_44 < 5)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++cnt2_44;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
                case 6:
                    tcpcount(var_3538, var_1050);
                    if (!(var_3538 != 0)) return [3 /*break*/, 27];
                    var_3537 = sdim(1024);
                    var_3539 = sdim(1024);
                    tcpgetl(var_3537, 1024, var_1050);
                    var_3539 = var_3537;
                    var_3540 = 0;
                    var_3541 = 0;
                    if (!(stat != 0)) return [3 /*break*/, 27];
                    var_3542 = strmid(var_3537, 0, 4);
                    var_3543 = strmid(var_3537, 4, 250);
                    if (!(var_3542 == "倒敵")) return [3 /*break*/, 8];
                    return [4 /*yield*/, func916()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
                case 8:
                    if (!(var_3542 == "女帝")) return [3 /*break*/, 10];
                    return [4 /*yield*/, func918()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
                case 10:
                    if (!(var_3542 == "喋背")) return [3 /*break*/, 12];
                    return [4 /*yield*/, func922()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12:
                    if (!(var_3542 == "送具")) return [3 /*break*/, 14];
                    return [4 /*yield*/, func913()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
                case 14:
                    if (!(var_3542 == "捨送")) return [3 /*break*/, 16];
                    return [4 /*yield*/, func908()];
                case 15:
                    _a.sent();
                    var_3541 = 1;
                    _a.label = 16;
                case 16:
                    var_3544 = 0;
                    if (var_3542 == "字水") {
                        var_3539 = "" + var_3543;
                        var_3544 = 0;
                        var_3540 = 1;
                    }
                    if (var_3542 == "字赤") {
                        var_3539 = "" + var_3543;
                        var_3544 = 1;
                        var_3540 = 1;
                    }
                    if (var_3542 == "字青") {
                        var_3539 = "" + var_3543;
                        var_3544 = 2;
                        var_3540 = 1;
                    }
                    if (var_3542 == "字黄") {
                        var_3539 = "" + var_3543;
                        var_3544 = 3;
                        var_3540 = 1;
                    }
                    if (var_3542 == "行白") {
                        var_3539 = "" + var_3543;
                        var_3544 = 0;
                    }
                    if (var_3542 == "行赤") {
                        var_3539 = "" + var_3543;
                        var_3544 = 1;
                    }
                    if (var_3542 == "行青") {
                        var_3539 = "" + var_3543;
                        var_3544 = 2;
                    }
                    if (var_3542 == "行黄") {
                        var_3539 = "" + var_3543;
                        var_3544 = 3;
                    }
                    if (var_3542 == "行水") {
                        var_3539 = "" + var_3543;
                        var_3544 = 4;
                    }
                    if (var_3542 == "行緑") {
                        var_3539 = "" + var_3543;
                        var_3544 = 5;
                    }
                    if (var_3542 == "行橙") {
                        var_3539 = "" + var_3543;
                        var_3544 = 6;
                    }
                    if (var_3542 == "行紫") {
                        var_3539 = "" + var_3543;
                        var_3544 = 7;
                    }
                    if (var_3542 == "行茶") {
                        var_3539 = "" + var_3543;
                        var_3544 = 8;
                    }
                    if (!(instr(var_3537, 0, "さんが接続しました") != (-1))) return [3 /*break*/, 18];
                    var_3544 = 6;
                    return [4 /*yield*/, func907()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    if (instr(var_3537, 0, "さんは切断しました") != (-1)) {
                        gsel(33);
                        var_3525 = "相手の情報";
                        title(var_3525);
                        gsel(0);
                    }
                    if (var_3540 == 1) {
                        notesel(var_3526);
                        var_447 = noteinfo(0);
                        if (var_447 >= 200) {
                            notedel(0);
                        }
                        var_3526 = var_3526 + "\n" + var_3539;
                        sendmsg(var_3529, 12, 0, var_3526);
                        var_447 = noteinfo(0) - 1;
                        var_449 = noteinfo(1);
                        sendmsg(var_3529, 177, var_449, var_449);
                        sendmsg(var_3529, 183, 0, 0);
                        return [2 /*return*/];
                    }
                    if (var_3540 == 0) {
                        var_3545 = 33;
                        var_3546 = 220;
                        var_3547 = 420;
                        var_3548 = 440;
                        var_3549 = 125;
                        gsel(33);
                    }
                    redraw(0);
                    if (var_3541 == 0) {
                        gmode(0);
                        pos(0, var_3549);
                        gcopy(var_3545, 0, var_3549 + 20, var_3546, var_3548);
                        pos(10, var_3547);
                        color(255, 255, 255);
                        if (var_3544 == 1) {
                            color(255, 0, 0);
                        }
                        if (var_3544 == 2) {
                            color(0, 0, 255);
                        }
                        if (var_3544 == 3) {
                            color(255, 255, 0);
                        }
                        if (var_3544 == 4) {
                            color(0, 255, 255);
                        }
                        if (var_3544 == 5) {
                            color(0, 255, 0);
                        }
                        if (var_3544 == 6) {
                            color(255, 180, 90);
                        }
                        if (var_3544 == 7) {
                            color(240, 0, 240);
                        }
                        if (var_3544 == 8) {
                            color(225, 195, 145);
                        }
                        if (var_3544 == 9) {
                            color(255, 255, 255);
                        }
                        font("MS ゴシック", 12);
                        mes(var_3539);
                    }
                    if (!(var_3540 == 0)) return [3 /*break*/, 26];
                    var_3233 = 5;
                    var_3550 = 3;
                    var_3231 = 255;
                    var_3232 = 150;
                    var_1631 = 245;
                    var_1632 = 140;
                    var_1633 = 65;
                    var_1634 = 65;
                    var_1635 = 0;
                    var_1636 = 0;
                    color(0, 0, 0);
                    boxf(left = var_1631 - 3, top1 = var_1632 - 3, right = var_1631 - 3 + var_1633 + 5, bottom = var_1632 - 3 + var_1634 + 7);
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(var_1631 - 3, var_1632 - 3);
                    gcopy(12, 0, 0, var_1633 + 7, var_1634 + 5);
                    gmode(2);
                    color(255, 255, 255);
                    line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                    line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                    line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                    line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                    pset(var_1631 - var_1635, var_1632 - var_1636);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                    pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                    color(255, 255, 255);
                    line(var_3231 - 1, var_3232 - 1, var_3231 - 1, 9 * var_3233 + var_3232 + 1);
                    line(var_3231 - 2, var_3232 - 1, 9 * var_3233 + var_3231 + 1, var_3232 - 1);
                    line(9 * var_3233 + var_3231 + 1, var_3232 - 1, 9 * var_3233 + var_3231 + 1, 9 * var_3233 + var_3232 + 1);
                    line(var_3231 - 1, 9 * var_3233 + var_3232 + 1, 9 * var_3233 + var_3231 + 1, 9 * var_3233 + var_3232 + 1);
                    var_3551 = 0;
                    var_449 = 0;
                    for (cnt4_6 = 0; cnt4_6 < 9; ++cnt4_6) {
                        var_447 = 0;
                        for (cnt5_1 = 0; cnt5_1 < 9; ++cnt5_1) {
                            if (peek(var_1068[25], var_3551) == 48) {
                                color(0, 0, 0);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3233, var_447 * var_3233 + var_3232 + var_3233);
                            }
                            if (peek(var_1068[25], var_3551) == 49) {
                                color(0, 0, 255);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3233, var_447 * var_3233 + var_3232 + var_3233);
                            }
                            if (peek(var_1068[25], var_3551) == 55) {
                                color(0, 0, 150);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3233, var_447 * var_3233 + var_3232 + var_3233);
                            }
                            if (peek(var_1068[25], var_3551) == 50) {
                                color(255, 0, 255);
                                line(var_449 * var_3233 + var_3231 - 1, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231 + 4, var_447 * var_3233 + var_3232 + 4);
                                line(var_449 * var_3233 + var_3231 + 5, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232 + 4);
                            }
                            if (peek(var_1068[25], var_3551) == 51) {
                                color(0, 255, 255);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                            }
                            if (peek(var_1068[25], var_3551) == 52) {
                                color(255, 0, 0);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                            }
                            if (peek(var_1068[25], var_3551) == 53) {
                                color(0, 255, 255);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                                color(0, 0, 255);
                                pset(var_447 * var_3233 + var_3231 + 1, var_449 * var_3233 + var_3232 + 1);
                            }
                            if (peek(var_1068[25], var_3551) == 54) {
                                color(255, 255, 255);
                                pset(var_449 * var_3233 + var_3231 + 1, var_447 * var_3233 + var_3232);
                                pset(var_449 * var_3233 + var_3231 + 2, var_447 * var_3233 + var_3232);
                                pset(var_449 * var_3233 + var_3231 + 3, var_447 * var_3233 + var_3232);
                                pset(var_449 * var_3233 + var_3231 + 1, var_447 * var_3233 + var_3232 + 4);
                                pset(var_449 * var_3233 + var_3231 + 2, var_447 * var_3233 + var_3232 + 4);
                                pset(var_449 * var_3233 + var_3231 + 3, var_447 * var_3233 + var_3232 + 4);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232 + 1, var_449 * var_3233 + var_3231 + 4, var_447 * var_3233 + var_3232 + 3);
                            }
                            if (peek(var_1068[25], var_3551) == 56) {
                                color(255, 255, 0);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                            }
                            if (peek(var_1068[25], var_3551) == 57) {
                                color(0, 255, 255);
                                line(var_449 * var_3233 + var_3231 - 1, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231 + 4, var_447 * var_3233 + var_3232 + 4);
                                line(var_449 * var_3233 + var_3231 + 5, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232 + 4);
                            }
                            var_3551++;
                            var_447++;
                        }
                        var_449++;
                    }
                    if (var_62 == int(var_1068[12]) && var_62 != 0) {
                        var_536 = 1;
                    }
                    else {
                        var_536 = 0;
                    }
                    var_1631 = 10;
                    var_1632 = 10;
                    var_1633 = 300;
                    var_1634 = 110;
                    var_1635 = 0;
                    var_1636 = 0;
                    color(1, 1, 1);
                    boxf(0, 0, 320, 120);
                    color(0, 0, 0);
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(var_1631 - 3, var_1632 - 3);
                    gcopy(12, 0, 0, var_1633 + 7, 110 + 5);
                    gmode(2);
                    color(255, 255, 255);
                    line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                    line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                    line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                    line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                    pset(var_1631 - var_1635, var_1632 - var_1636);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                    pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                    pos(var_1631 + 7, var_1632 + 7);
                    gcopy(3, 40, 0, 40, 40);
                    var_2607 = var_1631 + 7 + 30;
                    var_2608 = var_1631 + 7 + 24;
                    if (int(var_1068[3]) >= 10) {
                        var_2607 = var_2607 - 5;
                    }
                    font("MS ゴシック", 16, 1);
                    color(1, 1, 1);
                    pos(var_2607 - 1, var_2608);
                    mes(var_1068[3]);
                    pos(var_2607 + 1, var_2608);
                    mes(var_1068[3]);
                    pos(var_2607, var_2608 - 1);
                    mes(var_1068[3]);
                    pos(var_2607, var_2608 + 1);
                    mes(var_1068[3]);
                    color(255, 255, 255);
                    pos(var_2607, var_2608);
                    mes(var_1068[3]);
                    font("MS ゴシック", 12);
                    pos(var_1631 + 55, var_1632 + 7);
                    color(255, 255, 255);
                    mes("");
                    if (int(var_1068[12]) == 0) {
                        mes("地上");
                    }
                    if (int(var_1068[12]) == 1) {
                        mes("ホテル外 " + var_1068[10] + "階");
                    }
                    if (int(var_1068[12]) == 2) {
                        mes("大迷宮 " + var_1068[10] + "階");
                    }
                    if (int(var_1068[12]) == 3) {
                        mes("試練　" + var_1068[10] + "階");
                    }
                    if (int(var_1068[12]) == 4) {
                        mes("一巡後 " + var_1068[10] + "階");
                    }
                    if (int(var_1068[12]) >= 5) {
                        mes("");
                    }
                    var_3552 = 0;
                    var_3553 = int(var_1068[10]);
                    var_3552 = current_floor - var_3553;
                    if (var_62 != int(var_1068[12])) {
                        color(150, 150, 150);
                        mes("（別の場所）");
                    }
                    if (var_62 == int(var_1068[12])) {
                        if (var_3552 < (-2)) {
                            color(255, 0, 0);
                            var_3554 = -var_3552;
                            mes("（" + var_3554 + "こ次の階）");
                        }
                        if (var_3552 == (-2)) {
                            color(255, 255, 0);
                            mes("（2こ次の階）");
                        }
                        if (var_3552 == (-1)) {
                            color(0, 255, 255);
                            mes("（次の階）");
                        }
                        if (var_3552 == 0) {
                            color(0, 255, 255);
                            mes("（同じ階）");
                        }
                        if (var_3552 == 1) {
                            color(0, 255, 255);
                            mes("（前の階）");
                        }
                        if (var_3552 == 2) {
                            color(255, 255, 0);
                            mes("（2こ前の階）");
                        }
                        if (var_3552 > 2) {
                            color(255, 0, 0);
                            mes("（" + var_3552 + "こ前の階）");
                        }
                    }
                    pos(var_1631 + 5, var_1632 + 58);
                    color(255, 255, 255);
                    if (int(var_1068[5]) > 0) {
                        var_3555 = Math.floor(int(var_1068[4]) / int(var_1068[5]));
                    }
                    if (var_3555 < 2) {
                        color(255, 255, 255);
                    }
                    if (var_3555 >= 2 || int(var_1068[5]) < 1) {
                        color(220, 0, 0);
                    }
                    if (int(var_1068[5]) == 0) {
                        color(255, 255, 255);
                    }
                    mes("ＨＰ　　" + var_1068[5] + "/" + var_1068[4]);
                    color(255, 255, 255);
                    mes("精神力　" + var_1068[7] + "/" + var_1068[6]);
                    mes("満腹度　" + var_1068[9] + "/" + var_1068[8]);
                    mes("お金　　" + var_1068[11] + " G");
                    var_1631 = var_1631 + 4;
                    var_1632 = var_1632 + 5;
                    var_1633 = 120;
                    var_1634 = 50;
                    var_1635 = 0;
                    var_1636 = 0;
                    color(255, 255, 255);
                    line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                    line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                    line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                    line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                    pset(var_1631 - var_1635, var_1632 - var_1636);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                    pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                    var_1631 = 145;
                    var_1632 = 15;
                    var_1633 = 50;
                    var_1634 = 50;
                    var_1635 = 0;
                    var_1636 = 0;
                    var_3556 = var_1631;
                    for (cnt4_7 = 0; cnt4_7 < 3; ++cnt4_7) {
                        color(255, 255, 255);
                        line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                        line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                        line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                        line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                        pset(var_1631 - var_1635, var_1632 - var_1636);
                        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                        pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                        var_1631 = var_1631 + 55;
                    }
                    var_3557 = 1;
                    pos(var_3556 + 5, var_1632 + 5);
                    var_575 = int(var_1068[13]);
                    return [4 /*yield*/, func070()];
                case 19:
                    _a.sent();
                    if (var_575 != 0) {
                        gcopy(var_576, var_577, var_578, 40, 40);
                    }
                    color(1, 1, 1);
                    pos(var_3556 + 5 + 31, var_1632 + 5 + 30);
                    mes("" + var_1068[15]);
                    pos(var_3556 + 5 + 33, var_1632 + 5 + 30);
                    mes("" + var_1068[15]);
                    pos(var_3556 + 5 + 32, var_1632 + 5 + 29);
                    mes("" + var_1068[15]);
                    pos(var_3556 + 5 + 32, var_1632 + 5 + 31);
                    mes("" + var_1068[15]);
                    color(0, 255, 0);
                    pos(var_3556 + 5 + 32, var_1632 + 5 + 30);
                    mes("" + var_1068[15]);
                    pos(var_3556 + 60, var_1632 + 5);
                    var_575 = int(var_1068[16]);
                    return [4 /*yield*/, func070()];
                case 20:
                    _a.sent();
                    if (var_575 != 0) {
                        gcopy(var_576, var_577, var_578, 40, 40);
                    }
                    color(1, 1, 1);
                    pos(var_3556 + 60 + 31, var_1632 + 5 + 30);
                    mes("" + var_1068[18]);
                    pos(var_3556 + 60 + 33, var_1632 + 5 + 30);
                    mes("" + var_1068[18]);
                    pos(var_3556 + 60 + 32, var_1632 + 5 + 29);
                    mes("" + var_1068[18]);
                    pos(var_3556 + 60 + 32, var_1632 + 5 + 31);
                    mes("" + var_1068[18]);
                    color(0, 255, 0);
                    pos(var_3556 + 60 + 32, var_1632 + 5 + 30);
                    mes("" + var_1068[18]);
                    pos(var_3556 + 115, var_1632 + 5);
                    var_575 = int(var_1068[19]);
                    return [4 /*yield*/, func070()];
                case 21:
                    _a.sent();
                    if (var_575 != 0) {
                        gcopy(var_576, var_577, var_578, 40, 40);
                    }
                    var_3557 = 0;
                    pos(var_3556 - 10, var_1632 + 5 + 50);
                    color(255, 255, 0);
                    var_3558 = int(var_1068[13]);
                    return [4 /*yield*/, func924()];
                case 22:
                    _a.sent();
                    if (int(var_1068[13]) == 0) {
                        mes("[攻] なし");
                    }
                    if (int(var_1068[13]) != 0) {
                        if (int(var_1068[14]) == 0) {
                            mes("[攻] " + var_3559);
                        }
                        if (int(var_1068[14]) != 0) {
                            mes("[攻] " + var_3559 + "+" + var_1068[14]);
                        }
                    }
                    color(255, 180, 90);
                    var_3558 = int(var_1068[16]);
                    return [4 /*yield*/, func924()];
                case 23:
                    _a.sent();
                    if (int(var_1068[16]) == 0) {
                        mes("[防] なし");
                    }
                    if (int(var_1068[16]) != 0) {
                        if (int(var_1068[17]) == 0) {
                            mes("[防] " + var_3559);
                        }
                        if (int(var_1068[17]) != 0) {
                            mes("[防] " + var_3559 + "+" + var_1068[17]);
                        }
                    }
                    color(240, 0, 240);
                    var_3558 = int(var_1068[19]);
                    return [4 /*yield*/, func924()];
                case 24:
                    _a.sent();
                    if (int(var_1068[19]) == 0) {
                        mes("[能] なし");
                    }
                    if (int(var_1068[19]) != 0) {
                        if (int(var_1068[20]) == 0) {
                            mes("[能] " + var_3559);
                        }
                        if (int(var_1068[20]) != 0) {
                            mes("[能] " + var_3559 + "+" + var_1068[20]);
                        }
                    }
                    color(225, 195, 145);
                    var_3558 = int(var_1068[2]);
                    return [4 /*yield*/, func924()];
                case 25:
                    _a.sent();
                    if (int(var_1068[2]) == 0) {
                        mes("[射] なし");
                    }
                    if (int(var_1068[2]) != 0) {
                        if (int(var_1068[21]) == 0) {
                            mes("[射] " + var_3559);
                        }
                        if (int(var_1068[21]) != 0) {
                            mes("[射] " + var_3559 + "(" + var_1068[21] + ")");
                        }
                    }
                    _a.label = 26;
                case 26:
                    redraw(1);
                    _a.label = 27;
                case 27: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=func8.js.map