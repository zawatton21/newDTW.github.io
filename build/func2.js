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
function func200() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(200);
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(42, 237);
            gcopy(12, 0, 0, 213, 82);
            color(255, 255, 255);
            line(45, 239, 250, 239);
            line(45, 316, 250, 316);
            line(44, 240, 44, 314);
            line(252, 240, 252, 314);
            pset(45, 240);
            pset(251, 240);
            pset(45, 315);
            pset(251, 315);
            font("ＭＳ　Ｐゴシック", 16, 1);
            color(255, 255, 255);
            pos(85, 250);
            mes("マップの色を変更");
            pos(85, 270);
            mes("透明度を変更");
            pos(85, 290);
            mes("初期設定に戻す");
            if (var_908 == 0) {
                pos(50, 247);
            }
            if (var_908 == 1) {
                pos(50, 267);
            }
            if (var_908 == 2) {
                pos(50, 287);
            }
            gmode(2);
            gcopy(8, 70, 50, 25, 20);
            if (var_909 == 1) {
                pos(220, 270);
                if (var_690 == 10) {
                    mes("1");
                }
                if (var_690 == 20) {
                    mes("2");
                }
                if (var_690 == 30) {
                    mes("3");
                }
                if (var_690 == 40) {
                    mes("4");
                }
                if (var_690 == 50) {
                    mes("5");
                }
                if (var_690 == 60) {
                    mes("6");
                }
                if (var_690 == 70) {
                    mes("7");
                }
                if (var_690 == 80) {
                    mes("8");
                }
                if (var_690 == 90) {
                    mes("9");
                }
                if (var_690 != 10) {
                    pos(205, 270);
                    mes("<");
                    pos(206, 270);
                    mes("<");
                    pos(207, 270);
                    mes("<");
                }
                if (var_690 != 90) {
                    pos(235, 270);
                    mes(">");
                    pos(236, 270);
                    mes(">");
                    pos(237, 270);
                    mes(">");
                }
            }
            return [2 /*return*/];
        });
    });
}
function func201() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(201);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent();
                    if (!(var_254 == 1)) return [3 /*break*/, 6];
                    DSPLAY(audio_id = 100);
                    if (var_690 != 10) {
                        var_690 = var_690 - 10;
                    }
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, func201()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
                case 6:
                    if (!(var_257 == 1)) return [3 /*break*/, 10];
                    DSPLAY(audio_id = 100);
                    if (var_690 != 90) {
                        var_690 = var_690 + 10;
                    }
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, func201()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
                case 10:
                    if (!(var_242 == 1 || var_239 == 1 || var_244 == 1)) return [3 /*break*/, 14];
                    DSPLAY(audio_id = 212);
                    var_909 = 0;
                    var_25[14] = var_690;
                    bsave("00.dat", var_25, null, 200);
                    return [4 /*yield*/, func337()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func199()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
                case 14: return [4 /*yield*/, func201()];
                case 15:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func202() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(202);
                    return [4 /*yield*/, func203()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func203() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(203);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent();
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 24];
                    DSPLAY(audio_id = 212);
                    if (!(var_702 == 0 || var_702 == 1)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func051()];
                case 3:
                    _a.sent();
                    if (var_702 == 0) {
                        var_25[1] = 255;
                        var_26[1] = 255;
                        var_27[1] = 255;
                        var_25[2] = 255;
                        var_26[2] = 255;
                        var_27[2] = 255;
                        var_25[3] = 255;
                        var_26[3] = 255;
                        var_27[3] = 255;
                        var_25[4] = 255;
                        var_26[4] = 255;
                        var_27[4] = 255;
                        var_25[5] = 255;
                        var_26[5] = 255;
                        var_27[5] = 255;
                        var_25[6] = 255;
                        var_26[6] = 255;
                        var_27[6] = 255;
                    }
                    if (var_702 == 1) {
                        var_25[1] = var_25[7];
                        var_26[1] = var_26[7];
                        var_27[1] = var_27[7];
                        var_25[2] = var_25[8];
                        var_26[2] = var_26[8];
                        var_27[2] = var_27[8];
                        var_25[3] = var_25[9];
                        var_26[3] = var_26[9];
                        var_27[3] = var_27[9];
                        var_25[4] = var_25[10];
                        var_26[4] = var_26[10];
                        var_27[4] = var_27[10];
                        var_25[5] = var_25[11];
                        var_26[5] = var_26[11];
                        var_27[5] = var_27[11];
                        var_25[6] = var_25[12];
                        var_26[6] = var_26[12];
                        var_27[6] = var_27[12];
                    }
                    bsave(file_name = "00.dat", data = var_702, data_size = null, offset = 100);
                    bsave(file_name = "00.dat", data = var_25, data_size = null, offset = 200);
                    bsave(file_name = "00.dat", data = var_26, data_size = null, offset = 300);
                    bsave(file_name = "00.dat", data = var_27, data_size = null, offset = 400);
                    var_901 = 0;
                    return [4 /*yield*/, func193()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
                case 5:
                    if (!(var_702 == 2)) return [3 /*break*/, 8];
                    dialog("", 32);
                    if (!(stat == 0)) return [3 /*break*/, 7];
                    return [4 /*yield*/, func203()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
                case 7:
                    var_25[7] = ginfo(16);
                    var_26[7] = ginfo(17);
                    var_27[7] = ginfo(18);
                    _a.label = 8;
                case 8:
                    if (!(var_702 == 3)) return [3 /*break*/, 11];
                    dialog("", 32);
                    if (!(stat == 0)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func203()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
                case 10:
                    var_25[8] = ginfo(16);
                    var_26[8] = ginfo(17);
                    var_27[8] = ginfo(18);
                    _a.label = 11;
                case 11:
                    if (!(var_702 == 4)) return [3 /*break*/, 14];
                    dialog("", 32);
                    if (!(stat == 0)) return [3 /*break*/, 13];
                    return [4 /*yield*/, func203()];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
                case 13:
                    var_25[12] = ginfo(16);
                    var_26[12] = ginfo(17);
                    var_27[12] = ginfo(18);
                    _a.label = 14;
                case 14:
                    if (!(var_702 == 5)) return [3 /*break*/, 17];
                    dialog("", 32);
                    if (!(stat == 0)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func203()];
                case 15:
                    _a.sent();
                    return [2 /*return*/];
                case 16:
                    var_25[9] = ginfo(16);
                    var_26[9] = ginfo(17);
                    var_27[9] = ginfo(18);
                    _a.label = 17;
                case 17:
                    if (!(var_702 == 6)) return [3 /*break*/, 20];
                    dialog("", 32);
                    if (!(stat == 0)) return [3 /*break*/, 19];
                    return [4 /*yield*/, func203()];
                case 18:
                    _a.sent();
                    return [2 /*return*/];
                case 19:
                    var_25[10] = ginfo(16);
                    var_26[10] = ginfo(17);
                    var_27[10] = ginfo(18);
                    _a.label = 20;
                case 20:
                    if (!(var_702 == 7)) return [3 /*break*/, 23];
                    dialog("", 32);
                    if (!(stat == 0)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func203()];
                case 21:
                    _a.sent();
                    return [2 /*return*/];
                case 22:
                    var_25[11] = ginfo(16);
                    var_26[11] = ginfo(17);
                    var_27[11] = ginfo(18);
                    _a.label = 23;
                case 23:
                    if (var_702 == 8) {
                        var_25[7] = 255;
                        var_26[7] = 255;
                        var_27[7] = 255;
                        var_25[8] = 255;
                        var_26[8] = 150;
                        var_27[8] = 255;
                        var_25[9] = 255;
                        var_26[9] = 0;
                        var_27[9] = 0;
                        var_25[10] = 130;
                        var_26[10] = 255;
                        var_27[10] = 130;
                        var_25[11] = 100;
                        var_26[11] = 160;
                        var_27[11] = 190;
                        var_25[12] = 255;
                        var_26[12] = 255;
                        var_27[12] = 0;
                    }
                    _a.label = 24;
                case 24:
                    if (!(var_239 == 1)) return [3 /*break*/, 27];
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func051()];
                case 25:
                    _a.sent();
                    var_901 = 0;
                    return [4 /*yield*/, func193()];
                case 26:
                    _a.sent();
                    return [2 /*return*/];
                case 27:
                    if (!(var_255 == 1)) return [3 /*break*/, 30];
                    DSPLAY(audio_id = 100);
                    var_702 = var_702 - 1;
                    if (var_702 < 0) {
                        var_702 = 0;
                    }
                    return [4 /*yield*/, func337()];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 29:
                    _a.sent();
                    _a.label = 30;
                case 30:
                    if (!(var_259 == 1)) return [3 /*break*/, 33];
                    DSPLAY(audio_id = 100);
                    var_702 = var_702 + 1;
                    if (var_702 == 9) {
                        var_702 = 8;
                    }
                    return [4 /*yield*/, func337()];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 32:
                    _a.sent();
                    _a.label = 33;
                case 33: return [4 /*yield*/, func203()];
                case 34:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func204() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(204);
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(42, 97);
            gcopy(12, 0, 0, 213, 203);
            color(255, 255, 255);
            line(45, 99, 250, 99);
            line(45, 296, 250, 296);
            line(44, 100, 44, 294);
            line(252, 100, 252, 294);
            pset(45, 100);
            pset(251, 100);
            pset(45, 295);
            pset(251, 295);
            font("ＭＳ　Ｐゴシック", 16, 1);
            color(255, 255, 255);
            pos(85, 110);
            mes("色設定を使用しない");
            pos(85, 130);
            mes("以下の色設定を使用");
            pos(85, 150);
            color(var_25[7], var_26[7], var_27[7]);
            mes("　　【ﾃﾞｨｱﾎﾞﾛの行動】");
            pos(85, 170);
            color(var_25[8], var_26[8], var_27[8]);
            mes("　　【敵の行動】");
            pos(85, 190);
            color(var_25[12], var_26[12], var_27[12]);
            mes("　　【会心の一撃】");
            pos(85, 210);
            color(var_25[9], var_26[9], var_27[9]);
            mes("　　【痛恨の一撃】");
            pos(85, 230);
            color(var_25[10], var_26[10], var_27[10]);
            mes("　　【罠メッセージ】");
            pos(85, 250);
            color(var_25[11], var_26[11], var_27[11]);
            mes("　　【状態変化等】");
            pos(85, 270);
            color(255, 255, 255);
            mes("　　初期設定に戻す");
            if (var_702 == 0) {
                pos(50, 107);
            }
            if (var_702 == 1) {
                pos(50, 127);
            }
            if (var_702 == 2) {
                pos(75, 147);
            }
            if (var_702 == 3) {
                pos(75, 167);
            }
            if (var_702 == 4) {
                pos(75, 187);
            }
            if (var_702 == 5) {
                pos(75, 207);
            }
            if (var_702 == 6) {
                pos(75, 227);
            }
            if (var_702 == 7) {
                pos(75, 247);
            }
            if (var_702 == 8) {
                pos(75, 267);
            }
            gmode(2);
            gcopy(8, 70, 50, 25, 20);
            return [2 /*return*/];
        });
    });
}
function func205() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(205);
                    if (var_10 == 0) {
                        var_910 = 0;
                    }
                    if (var_10 == 1) {
                        var_910 = 1;
                    }
                    return [4 /*yield*/, func206()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func206() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(206);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent();
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 5];
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func051()];
                case 3:
                    _a.sent();
                    if (var_910 == 0) {
                        var_10 = 0;
                        width(680, 680);
                    }
                    if (var_910 == 1) {
                        var_10 = 1;
                        width(680, 680);
                    }
                    bsave(file_name = "00.dat", data = var_10, data_size = null, offset = 20);
                    bsave(file_name = "00.dat", data = var_11, data_size = null, offset = 80);
                    var_904 = 0;
                    return [4 /*yield*/, func193()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
                case 5:
                    if (!(var_239 == 1)) return [3 /*break*/, 8];
                    DSPLAY(audio_id = 212);
                    return [4 /*yield*/, func051()];
                case 6:
                    _a.sent();
                    var_904 = 0;
                    return [4 /*yield*/, func193()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
                case 8:
                    if (!(var_255 == 1)) return [3 /*break*/, 16];
                    DSPLAY(audio_id = 100);
                    if (!(var_910 == 0)) return [3 /*break*/, 12];
                    var_910 = 1;
                    return [4 /*yield*/, func337()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, func206()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12:
                    if (!(var_910 == 1)) return [3 /*break*/, 16];
                    var_910 = 0;
                    return [4 /*yield*/, func337()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, func206()];
                case 15:
                    _a.sent();
                    return [2 /*return*/];
                case 16:
                    if (!(var_259 == 1)) return [3 /*break*/, 24];
                    DSPLAY(audio_id = 100);
                    if (!(var_910 == 1)) return [3 /*break*/, 20];
                    var_910 = 0;
                    return [4 /*yield*/, func337()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, func206()];
                case 19:
                    _a.sent();
                    return [2 /*return*/];
                case 20:
                    if (!(var_910 == 0)) return [3 /*break*/, 24];
                    var_910 = 1;
                    return [4 /*yield*/, func337()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, func206()];
                case 23:
                    _a.sent();
                    return [2 /*return*/];
                case 24: return [4 /*yield*/, func206()];
                case 25:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func207() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(207);
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(42, 137);
            gcopy(12, 0, 0, 123, 63);
            color(255, 255, 255);
            line(45, 139, 160, 139);
            line(45, 196, 160, 196);
            line(44, 140, 44, 194);
            line(162, 140, 162, 194);
            pset(45, 140);
            pset(161, 140);
            pset(45, 195);
            pset(161, 195);
            font("ＭＳ　Ｐゴシック", 16, 1);
            color(255, 255, 255);
            pos(85, 150);
            mes("680×680");
            pos(85, 170);
            mes("680×680");
            if (var_910 == 0) {
                pos(50, 147);
            }
            if (var_910 == 1) {
                pos(50, 167);
            }
            gmode(2);
            gcopy(8, 70, 50, 25, 20);
            return [2 /*return*/];
        });
    });
}
function func208() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(208);
                    var_228 = 55;
                    var_911 = 1;
                    return [4 /*yield*/, func212()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func209()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func209() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_1, cnt2_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(209);
                    return [4 /*yield*/, func080()];
                case 1:
                    _a.sent();
                    if (!(var_259 == 1)) return [3 /*break*/, 4];
                    var_228 = var_228 + 20;
                    var_911 = var_911 + 1;
                    if (var_911 == 9) {
                        var_228 = 55;
                        var_911 = 1;
                    }
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(var_255 == 1)) return [3 /*break*/, 7];
                    var_228 = var_228 - 20;
                    var_911 = var_911 - 1;
                    if (var_911 == 0) {
                        var_228 = 195;
                        var_911 = 8;
                    }
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 13];
                    if (!(var_911 == 7)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func214()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    if (!(var_911 == 8)) return [3 /*break*/, 13];
                    DSPLAY(audio_id = 212);
                    var_691[1] = var_655;
                    var_691[2] = var_656;
                    var_691[3] = var_657;
                    var_691[4] = var_658;
                    var_691[5] = var_659;
                    var_691[6] = var_660;
                    bsave(file_name = "00.dat", data = var_691, data_size = null, offset = 1000);
                    return [4 /*yield*/, func051()];
                case 11:
                    _a.sent();
                    var_902 = 0;
                    return [4 /*yield*/, func193()];
                case 12:
                    _a.sent();
                    return [2 /*return*/];
                case 13:
                    if (!(var_911 >= 1 && var_911 <= 6)) return [3 /*break*/, 47];
                    var_447 = 48;
                    cnt2_1 = 0;
                    _a.label = 14;
                case 14:
                    if (!(cnt2_1 < 10)) return [3 /*break*/, 21];
                    conf_keyon = getkey(var_447);
                    if (!(conf_keyon == 1)) return [3 /*break*/, 19];
                    var_912 = var_447;
                    return [4 /*yield*/, func213()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, func212()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 18:
                    _a.sent();
                    return [3 /*break*/, 21];
                case 19:
                    var_447++;
                    _a.label = 20;
                case 20:
                    ++cnt2_1;
                    return [3 /*break*/, 14];
                case 21:
                    var_447 = 65;
                    cnt2_2 = 0;
                    _a.label = 22;
                case 22:
                    if (!(cnt2_2 < 26)) return [3 /*break*/, 29];
                    conf_keyon = getkey(var_447);
                    if (!(conf_keyon == 1)) return [3 /*break*/, 27];
                    var_912 = var_447;
                    return [4 /*yield*/, func213()];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, func212()];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 26:
                    _a.sent();
                    return [3 /*break*/, 29];
                case 27:
                    var_447++;
                    _a.label = 28;
                case 28:
                    ++cnt2_2;
                    return [3 /*break*/, 22];
                case 29:
                    conf_keyon = getkey(16);
                    if (!(conf_keyon == 1)) return [3 /*break*/, 35];
                    var_912 = 16;
                    return [4 /*yield*/, func213()];
                case 30:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, func212()];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 33:
                    _a.sent();
                    return [4 /*yield*/, func209()];
                case 34:
                    _a.sent();
                    return [2 /*return*/];
                case 35:
                    conf_keyon = getkey(13);
                    if (!(conf_keyon == 1)) return [3 /*break*/, 41];
                    var_912 = 13;
                    return [4 /*yield*/, func213()];
                case 36:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 37:
                    _a.sent();
                    return [4 /*yield*/, func212()];
                case 38:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 39:
                    _a.sent();
                    return [4 /*yield*/, func209()];
                case 40:
                    _a.sent();
                    return [2 /*return*/];
                case 41:
                    conf_keyon = getkey(17);
                    if (!(conf_keyon == 1)) return [3 /*break*/, 47];
                    var_912 = 17;
                    return [4 /*yield*/, func213()];
                case 42:
                    _a.sent();
                    return [4 /*yield*/, func051()];
                case 43:
                    _a.sent();
                    return [4 /*yield*/, func212()];
                case 44:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 45:
                    _a.sent();
                    return [4 /*yield*/, func209()];
                case 46:
                    _a.sent();
                    return [2 /*return*/];
                case 47: return [4 /*yield*/, func337()];
                case 48:
                    _a.sent();
                    return [4 /*yield*/, func209()];
                case 49:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func210() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(210);
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(5, 35);
            gcopy(12, 0, 0, 332, 205);
            color(255, 255, 255);
            line(9, 37, 330, 37);
            line(9, 237, 330, 237);
            line(8, 38, 8, 235);
            line(332, 38, 332, 235);
            pset(9, 38);
            pset(331, 38);
            pset(9, 236);
            pset(331, 236);
            pos(5, 243);
            gcopy(12, 0, 0, 332, 92);
            line(9, 245, 330, 245);
            line(9, 332, 330, 332);
            line(8, 246, 8, 330);
            line(332, 246, 332, 330);
            pset(9, 246);
            pset(331, 246);
            pset(9, 331);
            pset(331, 331);
            font("ＭＳ ゴシック", 16, 1);
            color(255, 255, 255);
            if (var_911 == 1) {
                color(0, 255, 0);
            }
            pos(40, 55);
            mes("攻撃・決定");
            pos(220, 55);
            mes(var_913);
            color(255, 255, 255);
            if (var_911 == 2) {
                color(0, 255, 0);
            }
            pos(40, 75);
            mes("ダッシュ・キャンセル");
            pos(220, 75);
            mes(var_914);
            color(255, 255, 255);
            if (var_911 == 3) {
                color(0, 255, 0);
            }
            pos(40, 95);
            mes("コマンドウィンドウ");
            pos(220, 95);
            mes(var_915);
            color(255, 255, 255);
            if (var_911 == 4) {
                color(0, 255, 0);
            }
            pos(40, 115);
            mes("射撃");
            pos(220, 115);
            mes(var_916);
            color(255, 255, 255);
            if (var_911 == 5) {
                color(0, 255, 0);
            }
            pos(40, 135);
            mes("向き変更");
            pos(220, 135);
            mes(var_917);
            color(255, 255, 255);
            if (var_911 == 6) {
                color(0, 255, 0);
            }
            pos(40, 155);
            mes("斜め移動");
            pos(220, 155);
            mes(var_918);
            color(255, 255, 255);
            if (var_911 == 7) {
                color(0, 255, 0);
            }
            pos(40, 175);
            mes("初期設定に戻す");
            color(255, 255, 255);
            if (var_911 == 8) {
                color(0, 255, 0);
            }
            pos(40, 195);
            mes("ゲームに戻る");
            font("ＭＳ Ｐゴシック", 12, 1);
            color(255, 255, 255);
            pos(20, 250);
            mes("※0～9・A～Z・ENTER・SHIFT・CTRL");
            mes("　を使用することができます。");
            mes("※キーボードにより、３つボタン同時押しが");
            mes("　無効となることがあるため、斜め移動は");
            mes("　SHIFTキーのままをお勧めします。");
            color(255, 255, 255);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(15, var_228);
            mes(">");
            pos(16, var_228);
            mes(">");
            pos(17, var_228);
            mes(">");
            return [2 /*return*/];
        });
    });
}
function func211() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(211);
            if (var_919 == 48) {
                var_920 = "[ 0 ]";
            }
            if (var_919 == 49) {
                var_920 = "[ 1 ]";
            }
            if (var_919 == 50) {
                var_920 = "[ 2 ]";
            }
            if (var_919 == 51) {
                var_920 = "[ 3 ]";
            }
            if (var_919 == 52) {
                var_920 = "[ 4 ]";
            }
            if (var_919 == 53) {
                var_920 = "[ 5 ]";
            }
            if (var_919 == 54) {
                var_920 = "[ 6 ]";
            }
            if (var_919 == 55) {
                var_920 = "[ 7 ]";
            }
            if (var_919 == 56) {
                var_920 = "[ 8 ]";
            }
            if (var_919 == 57) {
                var_920 = "[ 9 ]";
            }
            if (var_919 == 65) {
                var_920 = "[ A ]";
            }
            if (var_919 == 66) {
                var_920 = "[ B ]";
            }
            if (var_919 == 67) {
                var_920 = "[ C ]";
            }
            if (var_919 == 68) {
                var_920 = "[ D ]";
            }
            if (var_919 == 69) {
                var_920 = "[ E ]";
            }
            if (var_919 == 70) {
                var_920 = "[ F ]";
            }
            if (var_919 == 71) {
                var_920 = "[ G ]";
            }
            if (var_919 == 72) {
                var_920 = "[ H ]";
            }
            if (var_919 == 73) {
                var_920 = "[ I ]";
            }
            if (var_919 == 74) {
                var_920 = "[ J ]";
            }
            if (var_919 == 75) {
                var_920 = "[ K ]";
            }
            if (var_919 == 76) {
                var_920 = "[ L ]";
            }
            if (var_919 == 77) {
                var_920 = "[ M ]";
            }
            if (var_919 == 78) {
                var_920 = "[ N ]";
            }
            if (var_919 == 79) {
                var_920 = "[ O ]";
            }
            if (var_919 == 80) {
                var_920 = "[ P ]";
            }
            if (var_919 == 81) {
                var_920 = "[ Q ]";
            }
            if (var_919 == 82) {
                var_920 = "[ R ]";
            }
            if (var_919 == 83) {
                var_920 = "[ S ]";
            }
            if (var_919 == 84) {
                var_920 = "[ T ]";
            }
            if (var_919 == 85) {
                var_920 = "[ U ]";
            }
            if (var_919 == 86) {
                var_920 = "[ V ]";
            }
            if (var_919 == 87) {
                var_920 = "[ W ]";
            }
            if (var_919 == 88) {
                var_920 = "[ X ]";
            }
            if (var_919 == 89) {
                var_920 = "[ Y ]";
            }
            if (var_919 == 90) {
                var_920 = "[ Z ]";
            }
            if (var_919 == 13) {
                var_920 = "[ ENTER ]";
            }
            if (var_919 == 17) {
                var_920 = "[ CTRL ]";
            }
            if (var_919 == 16) {
                var_920 = "[ SHIFT ]";
            }
            return [2 /*return*/];
        });
    });
}
function func212() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(212);
                    var_921 = "[ 方向キー ]";
                    var_919 = var_655;
                    return [4 /*yield*/, func211()];
                case 1:
                    _a.sent();
                    var_913 = var_920;
                    var_919 = var_656;
                    return [4 /*yield*/, func211()];
                case 2:
                    _a.sent();
                    var_914 = var_920;
                    var_919 = var_657;
                    return [4 /*yield*/, func211()];
                case 3:
                    _a.sent();
                    var_915 = var_920;
                    var_919 = var_658;
                    return [4 /*yield*/, func211()];
                case 4:
                    _a.sent();
                    var_916 = var_920;
                    var_919 = var_659;
                    return [4 /*yield*/, func211()];
                case 5:
                    _a.sent();
                    var_918 = var_920;
                    var_919 = var_660;
                    return [4 /*yield*/, func211()];
                case 6:
                    _a.sent();
                    var_917 = var_920;
                    return [2 /*return*/];
            }
        });
    });
}
function func213() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_1;
        return __generator(this, function (_a) {
            dbgprt(213);
            var_922 = dim(10);
            var_922[1] = var_655;
            var_922[2] = var_656;
            var_922[3] = var_657;
            var_922[4] = var_658;
            var_922[5] = var_660;
            var_922[6] = var_659;
            var_923 = var_922[var_911];
            var_922[var_911] = var_912;
            var_924 = 1;
            for (cnt1_1 = 0; cnt1_1 < 6; ++cnt1_1) {
                if (var_922[var_924] == var_912 && var_911 != var_924) {
                    if (var_924 == 1) {
                        var_655 = var_923;
                    }
                    if (var_924 == 2) {
                        var_656 = var_923;
                    }
                    if (var_924 == 3) {
                        var_657 = var_923;
                    }
                    if (var_924 == 4) {
                        var_658 = var_923;
                    }
                    if (var_924 == 6) {
                        var_659 = var_923;
                    }
                    if (var_924 == 5) {
                        var_660 = var_923;
                    }
                }
                var_924++;
            }
            if (var_911 == 1) {
                var_655 = var_922[var_911];
            }
            if (var_911 == 2) {
                var_656 = var_922[var_911];
            }
            if (var_911 == 3) {
                var_657 = var_922[var_911];
            }
            if (var_911 == 4) {
                var_658 = var_922[var_911];
            }
            if (var_911 == 5) {
                var_660 = var_922[var_911];
            }
            if (var_911 == 6) {
                var_659 = var_922[var_911];
            }
            return [2 /*return*/];
        });
    });
}
function func214() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(214);
                    var_655 = 90;
                    var_656 = 88;
                    var_657 = 65;
                    var_658 = 83;
                    var_659 = 16;
                    var_660 = 67;
                    return [4 /*yield*/, func212()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func215() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(215);
                    var_228 = 140;
                    var_925 = 1;
                    var_926 = 0;
                    var_927 = 0;
                    var_928 = 140;
                    return [4 /*yield*/, func216()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func216() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt3_1, cnt3_2, cnt3_3, cnt3_4, cnt3_5, cnt3_6, cnt3_7, cnt3_8, cnt3_9, cnt3_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(216);
                    return [4 /*yield*/, func080()];
                case 1:
                    _a.sent();
                    if (!(var_259 == 1)) return [3 /*break*/, 4];
                    var_228 = var_228 + 20;
                    var_925 = var_925 + 1;
                    if (var_925 == 10) {
                        var_228 = 140;
                        var_925 = 1;
                    }
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(var_255 == 1)) return [3 /*break*/, 7];
                    var_228 = var_228 - 20;
                    var_925 = var_925 - 1;
                    if (var_925 == 0) {
                        var_228 = 300;
                        var_925 = 9;
                    }
                    DSPLAY(audio_id = 100);
                    return [4 /*yield*/, func337()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    if (!(var_925 >= 1 && var_925 <= 7)) return [3 /*break*/, 87];
                    ck_joystick(var_929, var_662);
                    if (!(var_929 == 8192)) return [3 /*break*/, 15];
                    if (var_925 == 1) {
                        var_926 = var_692;
                        var_692 = 8192;
                        var_927 = 8192;
                    }
                    if (var_925 == 2) {
                        var_926 = var_693;
                        var_693 = 8192;
                        var_927 = 8192;
                    }
                    if (var_925 == 3) {
                        var_926 = var_694;
                        var_694 = 8192;
                        var_927 = 8192;
                    }
                    if (var_925 == 4) {
                        var_926 = var_695;
                        var_695 = 8192;
                        var_927 = 8192;
                    }
                    if (var_925 == 5) {
                        var_926 = var_696;
                        var_696 = 8192;
                        var_927 = 8192;
                    }
                    if (var_925 == 6) {
                        var_926 = var_697;
                        var_697 = 8192;
                        var_927 = 8192;
                    }
                    if (var_925 == 7) {
                        var_926 = var_698;
                        var_698 = 8192;
                        var_927 = 8192;
                    }
                    return [4 /*yield*/, func217()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, func218()];
                case 9:
                    _a.sent();
                    cnt3_1 = 0;
                    _a.label = 10;
                case 10:
                    if (!(cnt3_1 < 2)) return [3 /*break*/, 13];
                    return [4 /*yield*/, func337()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    ++cnt3_1;
                    return [3 /*break*/, 10];
                case 13: return [4 /*yield*/, func216()];
                case 14:
                    _a.sent();
                    return [2 /*return*/];
                case 15:
                    if (!(var_929 == 2048)) return [3 /*break*/, 23];
                    if (var_925 == 1) {
                        var_926 = var_692;
                        var_692 = 2048;
                        var_927 = 2048;
                    }
                    if (var_925 == 2) {
                        var_926 = var_693;
                        var_693 = 2048;
                        var_927 = 2048;
                    }
                    if (var_925 == 3) {
                        var_926 = var_694;
                        var_694 = 2048;
                        var_927 = 2048;
                    }
                    if (var_925 == 4) {
                        var_926 = var_695;
                        var_695 = 2048;
                        var_927 = 2048;
                    }
                    if (var_925 == 5) {
                        var_926 = var_696;
                        var_696 = 2048;
                        var_927 = 2048;
                    }
                    if (var_925 == 6) {
                        var_926 = var_697;
                        var_697 = 2048;
                        var_927 = 2048;
                    }
                    if (var_925 == 7) {
                        var_926 = var_698;
                        var_698 = 2048;
                        var_927 = 2048;
                    }
                    return [4 /*yield*/, func217()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, func218()];
                case 17:
                    _a.sent();
                    cnt3_2 = 0;
                    _a.label = 18;
                case 18:
                    if (!(cnt3_2 < 2)) return [3 /*break*/, 21];
                    return [4 /*yield*/, func337()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    ++cnt3_2;
                    return [3 /*break*/, 18];
                case 21: return [4 /*yield*/, func216()];
                case 22:
                    _a.sent();
                    return [2 /*return*/];
                case 23:
                    if (!(var_929 == 4096)) return [3 /*break*/, 31];
                    if (var_925 == 1) {
                        var_926 = var_692;
                        var_692 = 4096;
                        var_927 = 4096;
                    }
                    if (var_925 == 2) {
                        var_926 = var_693;
                        var_693 = 4096;
                        var_927 = 4096;
                    }
                    if (var_925 == 3) {
                        var_926 = var_694;
                        var_694 = 4096;
                        var_927 = 4096;
                    }
                    if (var_925 == 4) {
                        var_926 = var_695;
                        var_695 = 4096;
                        var_927 = 4096;
                    }
                    if (var_925 == 5) {
                        var_926 = var_696;
                        var_696 = 4096;
                        var_927 = 4096;
                    }
                    if (var_925 == 6) {
                        var_926 = var_697;
                        var_697 = 4096;
                        var_927 = 4096;
                    }
                    if (var_925 == 7) {
                        var_926 = var_698;
                        var_698 = 4096;
                        var_927 = 4096;
                    }
                    return [4 /*yield*/, func217()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, func218()];
                case 25:
                    _a.sent();
                    cnt3_3 = 0;
                    _a.label = 26;
                case 26:
                    if (!(cnt3_3 < 2)) return [3 /*break*/, 29];
                    return [4 /*yield*/, func337()];
                case 27:
                    _a.sent();
                    _a.label = 28;
                case 28:
                    ++cnt3_3;
                    return [3 /*break*/, 26];
                case 29: return [4 /*yield*/, func216()];
                case 30:
                    _a.sent();
                    return [2 /*return*/];
                case 31:
                    if (!(var_929 == 32768)) return [3 /*break*/, 39];
                    if (var_925 == 1) {
                        var_926 = var_692;
                        var_692 = 32768;
                        var_927 = 32768;
                    }
                    if (var_925 == 2) {
                        var_926 = var_693;
                        var_693 = 32768;
                        var_927 = 32768;
                    }
                    if (var_925 == 3) {
                        var_926 = var_694;
                        var_694 = 32768;
                        var_927 = 32768;
                    }
                    if (var_925 == 4) {
                        var_926 = var_695;
                        var_695 = 32768;
                        var_927 = 32768;
                    }
                    if (var_925 == 5) {
                        var_926 = var_696;
                        var_696 = 32768;
                        var_927 = 32768;
                    }
                    if (var_925 == 6) {
                        var_926 = var_697;
                        var_697 = 32768;
                        var_927 = 32768;
                    }
                    if (var_925 == 7) {
                        var_926 = var_698;
                        var_698 = 32768;
                        var_927 = 32768;
                    }
                    return [4 /*yield*/, func217()];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, func218()];
                case 33:
                    _a.sent();
                    cnt3_4 = 0;
                    _a.label = 34;
                case 34:
                    if (!(cnt3_4 < 2)) return [3 /*break*/, 37];
                    return [4 /*yield*/, func337()];
                case 35:
                    _a.sent();
                    _a.label = 36;
                case 36:
                    ++cnt3_4;
                    return [3 /*break*/, 34];
                case 37: return [4 /*yield*/, func216()];
                case 38:
                    _a.sent();
                    return [2 /*return*/];
                case 39:
                    if (!(var_929 == 65536)) return [3 /*break*/, 47];
                    if (var_925 == 1) {
                        var_926 = var_692;
                        var_692 = 65536;
                        var_927 = 65536;
                    }
                    if (var_925 == 2) {
                        var_926 = var_693;
                        var_693 = 65536;
                        var_927 = 65536;
                    }
                    if (var_925 == 3) {
                        var_926 = var_694;
                        var_694 = 65536;
                        var_927 = 65536;
                    }
                    if (var_925 == 4) {
                        var_926 = var_695;
                        var_695 = 65536;
                        var_927 = 65536;
                    }
                    if (var_925 == 5) {
                        var_926 = var_696;
                        var_696 = 65536;
                        var_927 = 65536;
                    }
                    if (var_925 == 6) {
                        var_926 = var_697;
                        var_697 = 65536;
                        var_927 = 65536;
                    }
                    if (var_925 == 7) {
                        var_926 = var_698;
                        var_698 = 65536;
                        var_927 = 65536;
                    }
                    return [4 /*yield*/, func217()];
                case 40:
                    _a.sent();
                    return [4 /*yield*/, func218()];
                case 41:
                    _a.sent();
                    cnt3_5 = 0;
                    _a.label = 42;
                case 42:
                    if (!(cnt3_5 < 2)) return [3 /*break*/, 45];
                    return [4 /*yield*/, func337()];
                case 43:
                    _a.sent();
                    _a.label = 44;
                case 44:
                    ++cnt3_5;
                    return [3 /*break*/, 42];
                case 45: return [4 /*yield*/, func216()];
                case 46:
                    _a.sent();
                    return [2 /*return*/];
                case 47:
                    if (!(var_929 == 16384)) return [3 /*break*/, 55];
                    if (var_925 == 1) {
                        var_926 = var_692;
                        var_692 = 16384;
                        var_927 = 16384;
                    }
                    if (var_925 == 2) {
                        var_926 = var_693;
                        var_693 = 16384;
                        var_927 = 16384;
                    }
                    if (var_925 == 3) {
                        var_926 = var_694;
                        var_694 = 16384;
                        var_927 = 16384;
                    }
                    if (var_925 == 4) {
                        var_926 = var_695;
                        var_695 = 16384;
                        var_927 = 16384;
                    }
                    if (var_925 == 5) {
                        var_926 = var_696;
                        var_696 = 16384;
                        var_927 = 16384;
                    }
                    if (var_925 == 6) {
                        var_926 = var_697;
                        var_697 = 16384;
                        var_927 = 16384;
                    }
                    if (var_925 == 7) {
                        var_926 = var_698;
                        var_698 = 16384;
                        var_927 = 16384;
                    }
                    return [4 /*yield*/, func217()];
                case 48:
                    _a.sent();
                    return [4 /*yield*/, func218()];
                case 49:
                    _a.sent();
                    cnt3_6 = 0;
                    _a.label = 50;
                case 50:
                    if (!(cnt3_6 < 2)) return [3 /*break*/, 53];
                    return [4 /*yield*/, func337()];
                case 51:
                    _a.sent();
                    _a.label = 52;
                case 52:
                    ++cnt3_6;
                    return [3 /*break*/, 50];
                case 53: return [4 /*yield*/, func216()];
                case 54:
                    _a.sent();
                    return [2 /*return*/];
                case 55:
                    if (!(var_929 == 262144)) return [3 /*break*/, 63];
                    if (var_925 == 1) {
                        var_926 = var_692;
                        var_692 = 262144;
                        var_927 = 262144;
                    }
                    if (var_925 == 2) {
                        var_926 = var_693;
                        var_693 = 262144;
                        var_927 = 262144;
                    }
                    if (var_925 == 3) {
                        var_926 = var_694;
                        var_694 = 262144;
                        var_927 = 262144;
                    }
                    if (var_925 == 4) {
                        var_926 = var_695;
                        var_695 = 262144;
                        var_927 = 262144;
                    }
                    if (var_925 == 5) {
                        var_926 = var_696;
                        var_696 = 262144;
                        var_927 = 262144;
                    }
                    if (var_925 == 6) {
                        var_926 = var_697;
                        var_697 = 262144;
                        var_927 = 262144;
                    }
                    if (var_925 == 7) {
                        var_926 = var_698;
                        var_698 = 262144;
                        var_927 = 262144;
                    }
                    return [4 /*yield*/, func217()];
                case 56:
                    _a.sent();
                    return [4 /*yield*/, func218()];
                case 57:
                    _a.sent();
                    cnt3_7 = 0;
                    _a.label = 58;
                case 58:
                    if (!(cnt3_7 < 2)) return [3 /*break*/, 61];
                    return [4 /*yield*/, func337()];
                case 59:
                    _a.sent();
                    _a.label = 60;
                case 60:
                    ++cnt3_7;
                    return [3 /*break*/, 58];
                case 61: return [4 /*yield*/, func216()];
                case 62:
                    _a.sent();
                    return [2 /*return*/];
                case 63:
                    if (!(var_929 == 524288)) return [3 /*break*/, 71];
                    if (var_925 == 1) {
                        var_926 = var_692;
                        var_692 = 524288;
                        var_927 = 524288;
                    }
                    if (var_925 == 2) {
                        var_926 = var_693;
                        var_693 = 524288;
                        var_927 = 524288;
                    }
                    if (var_925 == 3) {
                        var_926 = var_694;
                        var_694 = 524288;
                        var_927 = 524288;
                    }
                    if (var_925 == 4) {
                        var_926 = var_695;
                        var_695 = 524288;
                        var_927 = 524288;
                    }
                    if (var_925 == 5) {
                        var_926 = var_696;
                        var_696 = 524288;
                        var_927 = 524288;
                    }
                    if (var_925 == 6) {
                        var_926 = var_697;
                        var_697 = 524288;
                        var_927 = 524288;
                    }
                    if (var_925 == 7) {
                        var_926 = var_698;
                        var_698 = 524288;
                        var_927 = 524288;
                    }
                    return [4 /*yield*/, func217()];
                case 64:
                    _a.sent();
                    return [4 /*yield*/, func218()];
                case 65:
                    _a.sent();
                    cnt3_8 = 0;
                    _a.label = 66;
                case 66:
                    if (!(cnt3_8 < 2)) return [3 /*break*/, 69];
                    return [4 /*yield*/, func337()];
                case 67:
                    _a.sent();
                    _a.label = 68;
                case 68:
                    ++cnt3_8;
                    return [3 /*break*/, 66];
                case 69: return [4 /*yield*/, func216()];
                case 70:
                    _a.sent();
                    return [2 /*return*/];
                case 71:
                    if (!(var_929 == 1048576)) return [3 /*break*/, 79];
                    if (var_925 == 1) {
                        var_926 = var_692;
                        var_692 = 1048576;
                        var_927 = 1048576;
                    }
                    if (var_925 == 2) {
                        var_926 = var_693;
                        var_693 = 1048576;
                        var_927 = 1048576;
                    }
                    if (var_925 == 3) {
                        var_926 = var_694;
                        var_694 = 1048576;
                        var_927 = 1048576;
                    }
                    if (var_925 == 4) {
                        var_926 = var_695;
                        var_695 = 1048576;
                        var_927 = 1048576;
                    }
                    if (var_925 == 5) {
                        var_926 = var_696;
                        var_696 = 1048576;
                        var_927 = 1048576;
                    }
                    if (var_925 == 6) {
                        var_926 = var_697;
                        var_697 = 1048576;
                        var_927 = 1048576;
                    }
                    if (var_925 == 7) {
                        var_926 = var_698;
                        var_698 = 1048576;
                        var_927 = 1048576;
                    }
                    return [4 /*yield*/, func217()];
                case 72:
                    _a.sent();
                    return [4 /*yield*/, func218()];
                case 73:
                    _a.sent();
                    cnt3_9 = 0;
                    _a.label = 74;
                case 74:
                    if (!(cnt3_9 < 2)) return [3 /*break*/, 77];
                    return [4 /*yield*/, func337()];
                case 75:
                    _a.sent();
                    _a.label = 76;
                case 76:
                    ++cnt3_9;
                    return [3 /*break*/, 74];
                case 77: return [4 /*yield*/, func216()];
                case 78:
                    _a.sent();
                    return [2 /*return*/];
                case 79:
                    if (!(var_929 == 131072)) return [3 /*break*/, 87];
                    if (var_925 == 1) {
                        var_926 = var_692;
                        var_692 = 131072;
                        var_927 = 131072;
                    }
                    if (var_925 == 2) {
                        var_926 = var_693;
                        var_693 = 131072;
                        var_927 = 131072;
                    }
                    if (var_925 == 3) {
                        var_926 = var_694;
                        var_694 = 131072;
                        var_927 = 131072;
                    }
                    if (var_925 == 4) {
                        var_926 = var_695;
                        var_695 = 131072;
                        var_927 = 131072;
                    }
                    if (var_925 == 5) {
                        var_926 = var_696;
                        var_696 = 131072;
                        var_927 = 131072;
                    }
                    if (var_925 == 6) {
                        var_926 = var_697;
                        var_697 = 131072;
                        var_927 = 131072;
                    }
                    if (var_925 == 7) {
                        var_926 = var_698;
                        var_698 = 131072;
                        var_927 = 131072;
                    }
                    return [4 /*yield*/, func217()];
                case 80:
                    _a.sent();
                    return [4 /*yield*/, func218()];
                case 81:
                    _a.sent();
                    cnt3_10 = 0;
                    _a.label = 82;
                case 82:
                    if (!(cnt3_10 < 2)) return [3 /*break*/, 85];
                    return [4 /*yield*/, func337()];
                case 83:
                    _a.sent();
                    _a.label = 84;
                case 84:
                    ++cnt3_10;
                    return [3 /*break*/, 82];
                case 85: return [4 /*yield*/, func216()];
                case 86:
                    _a.sent();
                    return [2 /*return*/];
                case 87:
                    if (!(var_925 == 8)) return [3 /*break*/, 91];
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 91];
                    DSPLAY(audio_id = 212);
                    var_692 = 8192;
                    var_693 = 2048;
                    var_694 = 4096;
                    var_695 = 16384;
                    var_696 = 65536;
                    var_697 = 32768;
                    var_698 = 131072;
                    var_699 = 262144;
                    var_700 = 524288;
                    var_701 = 1048576;
                    return [4 /*yield*/, func217()];
                case 88:
                    _a.sent();
                    return [4 /*yield*/, func337()];
                case 89:
                    _a.sent();
                    return [4 /*yield*/, func216()];
                case 90:
                    _a.sent();
                    return [2 /*return*/];
                case 91:
                    if (!(var_925 == 9)) return [3 /*break*/, 94];
                    if (!(var_242 == 1 || var_244 == 1)) return [3 /*break*/, 94];
                    DSPLAY(audio_id = 212);
                    var_664[1] = var_692;
                    var_664[2] = var_693;
                    var_664[3] = var_694;
                    var_664[4] = var_695;
                    var_664[5] = var_696;
                    var_664[6] = var_697;
                    var_664[7] = var_698;
                    var_664[8] = var_699;
                    var_664[9] = var_700;
                    var_664[10] = var_701;
                    bsave(file_name = "00.dat", data = var_664, data_size = null, offset = 1500);
                    var_903 = 0;
                    return [4 /*yield*/, func051()];
                case 92:
                    _a.sent();
                    return [4 /*yield*/, func193()];
                case 93:
                    _a.sent();
                    return [2 /*return*/];
                case 94: return [4 /*yield*/, func337()];
                case 95:
                    _a.sent();
                    return [4 /*yield*/, func216()];
                case 96:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func217() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(217);
            var_664[1] = var_692;
            var_664[2] = var_693;
            var_664[3] = var_694;
            var_664[4] = var_695;
            var_664[5] = var_696;
            var_664[6] = var_697;
            var_664[7] = var_698;
            var_664[8] = var_699;
            var_664[9] = var_700;
            var_664[10] = var_701;
            return [2 /*return*/];
        });
    });
}
function func218() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(218);
            if (var_692 == var_927 && var_925 != 1) {
                var_692 = var_926;
            }
            if (var_693 == var_927 && var_925 != 2) {
                var_693 = var_926;
            }
            if (var_694 == var_927 && var_925 != 3) {
                var_694 = var_926;
            }
            if (var_695 == var_927 && var_925 != 4) {
                var_695 = var_926;
            }
            if (var_696 == var_927 && var_925 != 5) {
                var_696 = var_926;
            }
            if (var_697 == var_927 && var_925 != 6) {
                var_697 = var_926;
            }
            if (var_698 == var_927 && var_925 != 7) {
                var_698 = var_926;
            }
            if (var_699 == var_927 && var_925 != 8) {
                var_699 = var_926;
            }
            if (var_700 == var_927 && var_925 != 9) {
                var_700 = var_926;
            }
            if (var_701 == var_927 && var_925 != 10) {
                var_701 = var_926;
            }
            return [2 /*return*/];
        });
    });
}
function func219() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(219);
                    color(0, 0, 0);
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(5, 35);
                    gcopy(12, 0, 0, 332, 85);
                    color(255, 255, 255);
                    line(9, 37, 330, 37);
                    line(9, 117, 330, 117);
                    line(8, 38, 8, 115);
                    line(332, 38, 332, 115);
                    pset(9, 38);
                    pset(331, 38);
                    pset(9, 116);
                    pset(331, 116);
                    pos(5, 123);
                    gcopy(12, 0, 0, 332, 212);
                    line(9, 125, 330, 125);
                    line(9, 332, 330, 332);
                    line(8, 126, 8, 330);
                    line(332, 126, 332, 330);
                    pset(9, 126);
                    pset(331, 126);
                    pset(9, 331);
                    pset(331, 331);
                    pos(120, 45);
                    gmode(2);
                    gcopy(17, 0, 850, 110, 65);
                    font("ＭＳ ゴシック", 16, 1);
                    color(255, 255, 255);
                    pos(200, var_928);
                    color(255, 255, 255);
                    mes("【　　　　　】");
                    pos(40, var_928);
                    color(255, 255, 255);
                    mes("攻撃・決定");
                    pos(170, var_928);
                    color(255, 255, 255);
                    mes("…");
                    pos(235, var_928);
                    var_930 = 1;
                    return [4 /*yield*/, func220()];
                case 1:
                    _a.sent();
                    pos(200, var_928 + 20);
                    color(255, 255, 255);
                    mes("【　　　　　】");
                    pos(40, var_928 + 20);
                    color(255, 255, 255);
                    mes("ﾀﾞｯｼｭ・ｷｬﾝｾﾙ");
                    pos(170, var_928 + 20);
                    color(255, 255, 255);
                    mes("…");
                    pos(235, var_928 + 20);
                    var_930 = 2;
                    return [4 /*yield*/, func220()];
                case 2:
                    _a.sent();
                    pos(200, var_928 + 40);
                    color(255, 255, 255);
                    mes("【　　　　　】");
                    pos(40, var_928 + 40);
                    color(255, 255, 255);
                    mes("コマンド");
                    pos(170, var_928 + 40);
                    color(255, 255, 255);
                    mes("…");
                    pos(235, var_928 + 40);
                    var_930 = 3;
                    return [4 /*yield*/, func220()];
                case 3:
                    _a.sent();
                    pos(200, var_928 + 60);
                    color(255, 255, 255);
                    mes("【　　　　　】");
                    pos(40, var_928 + 60);
                    color(255, 255, 255);
                    mes("方向転換");
                    pos(170, var_928 + 60);
                    color(255, 255, 255);
                    mes("…");
                    pos(235, var_928 + 60);
                    var_930 = 4;
                    return [4 /*yield*/, func220()];
                case 4:
                    _a.sent();
                    pos(200, var_928 + 80);
                    color(255, 255, 255);
                    mes("【　　　　　】");
                    pos(40, var_928 + 80);
                    color(255, 255, 255);
                    mes("斜め移動");
                    pos(170, var_928 + 80);
                    color(255, 255, 255);
                    mes("…");
                    pos(235, var_928 + 80);
                    var_930 = 5;
                    return [4 /*yield*/, func220()];
                case 5:
                    _a.sent();
                    pos(200, var_928 + 100);
                    color(255, 255, 255);
                    mes("【　　　　　】");
                    pos(40, var_928 + 100);
                    color(255, 255, 255);
                    mes("射撃");
                    pos(170, var_928 + 100);
                    color(255, 255, 255);
                    mes("…");
                    pos(235, var_928 + 100);
                    var_930 = 6;
                    return [4 /*yield*/, func220()];
                case 6:
                    _a.sent();
                    pos(200, var_928 + 120);
                    color(255, 255, 255);
                    mes("【　　　　　】");
                    pos(40, var_928 + 120);
                    color(255, 255, 255);
                    mes("マップ");
                    pos(170, var_928 + 120);
                    color(255, 255, 255);
                    mes("…");
                    pos(235, var_928 + 120);
                    var_930 = 7;
                    return [4 /*yield*/, func220()];
                case 7:
                    _a.sent();
                    pos(40, var_928 + 140);
                    color(255, 255, 255);
                    mes("初期設定に戻す");
                    pos(40, var_928 + 160);
                    color(255, 255, 255);
                    mes("ゲームに戻る");
                    color(255, 255, 255);
                    font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                    pos(25, var_228);
                    mes(">");
                    pos(26, var_228);
                    mes(">");
                    pos(27, var_228);
                    mes(">");
                    return [2 /*return*/];
            }
        });
    });
}
function func220() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(220);
            if (var_930 == 1) {
                var_931 = var_692;
            }
            if (var_930 == 2) {
                var_931 = var_693;
            }
            if (var_930 == 3) {
                var_931 = var_694;
            }
            if (var_930 == 4) {
                var_931 = var_695;
            }
            if (var_930 == 5) {
                var_931 = var_696;
            }
            if (var_930 == 6) {
                var_931 = var_697;
            }
            if (var_930 == 7) {
                var_931 = var_698;
            }
            if (var_930 == 8) {
                var_931 = var_699;
            }
            if (var_930 == 9) {
                var_931 = var_700;
            }
            if (var_930 == 10) {
                var_931 = var_701;
            }
            if (var_931 == 4096) {
                color(255, 255, 255);
                mes("Cボタン");
            }
            if (var_931 == 2048) {
                color(255, 255, 255);
                mes("Bボタン");
            }
            if (var_931 == 8192) {
                color(255, 255, 255);
                mes("Aボタン");
            }
            if (var_931 == 16384) {
                color(255, 255, 255);
                mes("Dボタン");
            }
            if (var_931 == 65536) {
                color(255, 255, 255);
                mes("Eボタン");
            }
            if (var_931 == 32768) {
                color(255, 255, 255);
                mes("Fボタン");
            }
            if (var_931 == 131072) {
                color(255, 255, 255);
                mes("Gボタン");
            }
            if (var_931 == 262144) {
                color(255, 255, 255);
                mes("Hボタン");
            }
            if (var_931 == 524288) {
                color(255, 255, 255);
                mes("Iボタン");
            }
            if (var_931 == 1048576) {
                color(255, 255, 255);
                mes("Jボタン");
            }
            return [2 /*return*/];
        });
    });
}
function func221() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(221);
                    var_932 = 0;
                    var_933 = 1;
                    var_934 = 0;
                    var_935 = 0;
                    var_936 = 0;
                    var_937 = 8;
                    var_938 = 15;
                    var_63 = 1;
                    var_939 = 0;
                    var_940 = 0;
                    var_941 = 0;
                    var_942 = 1;
                    var_943 = 1;
                    return [4 /*yield*/, func223()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func222()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func222() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(222);
                    return [4 /*yield*/, wait(5)];
                case 1:
                    _a.sent();
                    redraw(0);
                    color(0, 0, 0);
                    boxf();
                    font("ＭＳ ゴシック", 16);
                    color(255, 255, 255);
                    pos(70, 20);
                    mes("---ディアボロ-----");
                    pos(70, 40);
                    mes("レベル　" + var_933);
                    pos(70, 60);
                    mes("攻撃力　" + var_935);
                    pos(70, 80);
                    mes("防御力　" + var_936);
                    pos(70, 100);
                    mes("精神力　" + var_937);
                    pos(70, 120);
                    mes("HP　" + var_938);
                    pos(70, 140);
                    mes("-------敵---------");
                    pos(70, 160);
                    mes("攻撃力　" + var_942);
                    pos(70, 180);
                    mes("防御力　" + var_943);
                    pos(70, 200);
                    mes("------------------");
                    pos(70, 220);
                    color(255, 255, 0);
                    mes("与えるダメージ　" + var_944 + "　～　" + var_945);
                    pos(70, 240);
                    color(255, 0, 0);
                    mes("食らうダメージ　" + var_946 + "　～　" + var_947);
                    pos(70, 260);
                    color(255, 255, 255);
                    mes("------------------");
                    pos(70, 280);
                    mes("階層　" + var_63);
                    pos(70, 300);
                    mes("次exp　" + var_941);
                    pos(70, 320);
                    color(0, 255, 0);
                    mes("exp：　合計　" + var_939 + "　平均　" + var_940);
                    if (var_932 == 0) {
                        pos(50, 40);
                    }
                    if (var_932 == 1) {
                        pos(50, 60);
                    }
                    if (var_932 == 2) {
                        pos(50, 80);
                    }
                    if (var_932 == 3) {
                        pos(50, 100);
                    }
                    if (var_932 == 4) {
                        pos(50, 160);
                    }
                    if (var_932 == 5) {
                        pos(50, 180);
                    }
                    if (var_932 == 6) {
                        pos(50, 280);
                    }
                    color(255, 255, 255);
                    mes(">");
                    redraw(1);
                    return [4 /*yield*/, func080()];
                case 2:
                    _a.sent();
                    if (!(var_239 == 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func140()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    if (!(var_259 == 1 && var_932 != 6)) return [3 /*break*/, 7];
                    var_932 = var_932 + 1;
                    return [4 /*yield*/, wait(5)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, func222()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
                case 7:
                    if (!(var_259 == 1 && var_932 == 6)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func223()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, wait(5)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, func222()];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
                case 11:
                    if (!(var_255 == 1 && var_932 != 0)) return [3 /*break*/, 14];
                    var_932 = var_932 - 1;
                    return [4 /*yield*/, wait(5)];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func222()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
                case 14:
                    if (!(var_257 == 1)) return [3 /*break*/, 18];
                    if (var_932 == 0 && var_933 < 99) {
                        var_933++;
                        var_938 = var_933 * 4 + 11;
                    }
                    if (var_932 == 1 && var_935 < 130) {
                        var_935++;
                    }
                    if (var_932 == 2 && var_936 < 130) {
                        var_936++;
                    }
                    if (var_932 == 3 && var_937 < 99) {
                        var_937++;
                    }
                    if (var_932 == 4 && var_942 < 9999) {
                        var_942++;
                    }
                    if (var_932 == 5 && var_943 < 9999) {
                        var_943++;
                    }
                    if (var_932 == 6 && var_63 < 999) {
                        var_63++;
                    }
                    return [4 /*yield*/, func223()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, wait(5)];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, func222()];
                case 17:
                    _a.sent();
                    return [2 /*return*/];
                case 18:
                    if (!(var_254 == 1)) return [3 /*break*/, 22];
                    if (var_932 == 0 && var_933 > 1) {
                        var_933--;
                        var_938 = var_933 * 4 + 11;
                    }
                    if (var_932 == 1 && var_935 > 0) {
                        var_935--;
                    }
                    if (var_932 == 2 && var_936 > 0) {
                        var_936--;
                    }
                    if (var_932 == 3 && var_937 > 0) {
                        var_937--;
                    }
                    if (var_932 == 4 && var_942 > 0) {
                        var_942--;
                    }
                    if (var_932 == 5 && var_943 > 0) {
                        var_943--;
                    }
                    if (var_932 == 6 && var_63 > 1) {
                        var_63--;
                    }
                    if (var_932 == 1 && var_935 == 0) {
                        var_935 = 130;
                    }
                    if (var_932 == 2 && var_936 == 0) {
                        var_936 = 130;
                    }
                    if (var_932 == 3 && var_937 == 0) {
                        var_937 = 99;
                    }
                    if (var_932 == 4 && var_942 == 0) {
                        var_942 = 999;
                    }
                    if (var_932 == 5 && var_943 == 0) {
                        var_943 = 999;
                    }
                    if (var_932 == 6 && var_63 == 1) {
                        var_63 = 99;
                    }
                    return [4 /*yield*/, func223()];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, wait(5)];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, func222()];
                case 21:
                    _a.sent();
                    return [2 /*return*/];
                case 22: return [4 /*yield*/, func222()];
                case 23:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func223() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_2, cnt1_3, cnt1_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(223);
                    var_934 = var_933 - 1;
                    var_941 = var_948[var_933] - var_948[var_934];
                    var_840 = var_933;
                    return [4 /*yield*/, func679()];
                case 1:
                    _a.sent();
                    var_949 = Math.floor(var_950 * (var_935 + var_937 - 8) / 16) + var_950;
                    var_951 = var_949;
                    for (cnt1_2 = 0; cnt1_2 < var_943; ++cnt1_2) {
                        var_949 = Math.floor(var_949 * 15 / 16);
                    }
                    var_944 = Math.floor(var_949 * 111 / 128);
                    var_945 = Math.floor(var_949 * 143 / 128);
                    var_949 = Math.floor(var_942 * (var_942 + var_942 - 8) / 16) + var_942;
                    for (cnt1_3 = 0; cnt1_3 < var_936; ++cnt1_3) {
                        var_949 = Math.floor(var_949 * 15 / 16);
                    }
                    var_946 = Math.floor(var_949 * 111 / 128);
                    var_947 = Math.floor(var_949 * 143 / 128);
                    var_91 = var_63;
                    var_939 = 0;
                    var_952 = 1;
                    if (var_91 >= 1 && var_91 < 6) {
                        var_952 = var_952 + 4;
                    }
                    if (var_91 >= 6 && var_91 < 13) {
                        var_952 = var_952 + 5;
                    }
                    if (var_91 >= 13 && var_91 < 20) {
                        var_952 = var_952 + 6;
                    }
                    if (var_91 >= 20 && var_91 < 30) {
                        var_952 = var_952 + 7;
                    }
                    if (var_91 >= 30) {
                        var_952 = var_952 + 7;
                    }
                    var_62 = 2;
                    cnt1_4 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_4 < var_952)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func627()];
                case 3:
                    _a.sent();
                    var_437 = var_953;
                    return [4 /*yield*/, func626()];
                case 4:
                    _a.sent();
                    var_939 = var_939 + var_954;
                    _a.label = 5;
                case 5:
                    ++cnt1_4;
                    return [3 /*break*/, 2];
                case 6:
                    var_940 = Math.floor(var_939 / var_952);
                    return [2 /*return*/];
            }
        });
    });
}
function func224() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(224);
                    var_932 = 0;
                    var_955 = 1;
                    var_956 = 1;
                    var_957 = 1;
                    var_958 = dim(200);
                    return [4 /*yield*/, func226()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func225()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func225() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_5, cnt2_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(225);
                    return [4 /*yield*/, wait(5)];
                case 1:
                    _a.sent();
                    redraw(0);
                    color(0, 0, 0);
                    boxf();
                    font("ＭＳ ゴシック", 14);
                    color(255, 255, 255);
                    gmode(2);
                    pos(10, 10);
                    if (var_956 == 1) {
                        mes("ホテルの外");
                    }
                    if (var_956 == 2) {
                        mes("レクイエムの大迷宮");
                    }
                    if (var_956 == 3) {
                        mes("ディアボロの試練");
                    }
                    if (var_956 == 4) {
                        mes("一巡後の世界");
                    }
                    if (var_956 == 5) {
                        mes("" + var_21);
                    }
                    var_959 = 0;
                    var_960 = 0;
                    var_961 = 0;
                    var_962 = var_955;
                    var_963 = 30;
                    cnt1_5 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt1_5 < 10)) return [3 /*break*/, 9];
                    font("ＭＳ ゴシック", 14);
                    color(255, 255, 255);
                    pos(10, var_963);
                    mes("" + var_962 + " 階");
                    var_964 = 60;
                    cnt2_3 = 0;
                    _a.label = 3;
                case 3:
                    if (!(cnt2_3 < 9)) return [3 /*break*/, 7];
                    var_961 = var_959 + var_960;
                    if (var_958[var_961] < 50) {
                        var_965 = 6;
                        var_966 = var_958[var_961];
                    }
                    if (var_958[var_961] >= 50 && var_958[var_961] < 100) {
                        var_965 = 21;
                        var_966 = var_958[var_961] - 50;
                    }
                    if (var_958[var_961] >= 100 && var_958[var_961] < 150) {
                        var_965 = 27;
                        var_966 = var_958[var_961] - 100;
                    }
                    if (var_958[var_961] >= 150 && var_958[var_961] < 200) {
                        var_965 = 13;
                        var_966 = var_958[var_961] - 150;
                    }
                    pos(var_964, var_963);
                    if (!(var_958[var_961] != 0)) return [3 /*break*/, 5];
                    color(0, 100, 0);
                    boxf(var_964, var_963, var_964 + 55, var_963 + 54);
                    gcopy(var_965, 40, var_966 * 40, 40, 40);
                    var_437 = var_958[var_961];
                    return [4 /*yield*/, func626()];
                case 4:
                    _a.sent();
                    font("ＭＳ ゴシック", 12);
                    if (var_957 <= 1) {
                        pos(var_964, var_963 + 42);
                        color(255, 255, 255);
                        mes("" + var_438);
                        pos(var_964 + 20, var_963 + 42);
                        color(255, 255, 0);
                        mes("" + var_967);
                        pos(var_964 + 40, var_963 + 42);
                        color(255, 180, 90);
                        mes("" + var_968);
                    }
                    if (var_957 >= 2) {
                        var_969 = Math.floor(var_438 * (var_957 + 10) / 10);
                        var_970 = Math.floor(var_967 * (var_957 * 2 + 10) / 10);
                        var_971 = var_968;
                        if (var_972 == 4 || var_972 == 5) {
                            var_971 = Math.floor(var_968 * (var_957 * 2 + 10) / 10);
                        }
                        pos(var_964, var_963);
                        color(255, 0, 0);
                        mes("LV:" + var_957);
                        pos(var_964, var_963 + 42);
                        color(255, 255, 255);
                        mes("" + var_969);
                        pos(var_964 + 20, var_963 + 42);
                        color(255, 255, 0);
                        mes("" + var_970);
                        pos(var_964 + 40, var_963 + 42);
                        color(255, 180, 90);
                        mes("" + var_971);
                    }
                    _a.label = 5;
                case 5:
                    var_964 = var_964 + 60;
                    var_959++;
                    _a.label = 6;
                case 6:
                    ++cnt2_3;
                    return [3 /*break*/, 3];
                case 7:
                    var_963 = var_963 + 60;
                    var_959 = 0;
                    var_960 = var_960 + 10;
                    var_962++;
                    _a.label = 8;
                case 8:
                    ++cnt1_5;
                    return [3 /*break*/, 2];
                case 9:
                    redraw(1);
                    return [4 /*yield*/, func080()];
                case 10:
                    _a.sent();
                    if (!(var_239 == 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func140()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12:
                    if (!(var_259 == 1 && var_955 != 90)) return [3 /*break*/, 16];
                    var_955 = var_955 + 1;
                    return [4 /*yield*/, func226()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, wait(5)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, func225()];
                case 15:
                    _a.sent();
                    return [2 /*return*/];
                case 16:
                    if (!(var_255 == 1 && var_955 != 1)) return [3 /*break*/, 20];
                    var_955 = var_955 - 1;
                    return [4 /*yield*/, func226()];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, wait(5)];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, func225()];
                case 19:
                    _a.sent();
                    return [2 /*return*/];
                case 20:
                    if (!(var_257 == 1 && var_956 != 5)) return [3 /*break*/, 24];
                    var_956 = var_956 + 1;
                    return [4 /*yield*/, func226()];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, wait(15)];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, func225()];
                case 23:
                    _a.sent();
                    return [2 /*return*/];
                case 24:
                    if (!(var_254 == 1 && var_956 != 1)) return [3 /*break*/, 28];
                    var_956 = var_956 - 1;
                    return [4 /*yield*/, func226()];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, wait(15)];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, func225()];
                case 27:
                    _a.sent();
                    return [2 /*return*/];
                case 28:
                    if (!(var_249 == 1 && var_957 < 99)) return [3 /*break*/, 32];
                    var_957 = var_957 + 1;
                    return [4 /*yield*/, func226()];
                case 29:
                    _a.sent();
                    return [4 /*yield*/, wait(15)];
                case 30:
                    _a.sent();
                    return [4 /*yield*/, func225()];
                case 31:
                    _a.sent();
                    return [2 /*return*/];
                case 32:
                    if (!(var_244 == 1 && var_957 >= 2)) return [3 /*break*/, 36];
                    var_957 = var_957 - 1;
                    return [4 /*yield*/, func226()];
                case 33:
                    _a.sent();
                    return [4 /*yield*/, wait(15)];
                case 34:
                    _a.sent();
                    return [4 /*yield*/, func225()];
                case 35:
                    _a.sent();
                    return [2 /*return*/];
                case 36: return [4 /*yield*/, func225()];
                case 37:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func226() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_6, cnt2_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(226);
                    var_62 = var_956;
                    var_973 = 0;
                    var_974 = 0;
                    var_975 = 0;
                    var_976 = var_955;
                    cnt1_6 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_6 < 10)) return [3 /*break*/, 7];
                    cnt2_4 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt2_4 < 9)) return [3 /*break*/, 5];
                    var_975 = var_973 + var_974;
                    var_91 = var_976;
                    return [4 /*yield*/, func627()];
                case 3:
                    _a.sent();
                    var_958[var_975] = var_977[var_973];
                    var_973 = var_973 + 1;
                    _a.label = 4;
                case 4:
                    ++cnt2_4;
                    return [3 /*break*/, 2];
                case 5:
                    var_973 = 0;
                    var_974 = var_974 + 10;
                    var_976++;
                    _a.label = 6;
                case 6:
                    ++cnt1_6;
                    return [3 /*break*/, 1];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function func227() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_5, cnt2_6, cnt2_7, cnt1_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(227);
                    var_978 = "disc.txt";
                    var_979 = "";
                    var_979 = var_979 + "ディアボロがやられた時、またはＦ６キーを押した時に" + "\n";
                    var_979 = var_979 + "装備しているDISCの情報が自動的に記録されます。" + "\n";
                    var_979 = var_979 + "" + "\n";
                    var_980 = 1;
                    var_979 = var_979 + "■■■攻撃ｽﾀﾝﾄﾞ■■■■■■■■■■■■■■" + "\n";
                    if (!(var_357 != 0)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func426()];
                case 1:
                    _a.sent();
                    item_list = var_233[var_553].Var0;
                    var_487 = var_233[var_553].Var13;
                    return [4 /*yield*/, func492()];
                case 2:
                    _a.sent();
                    if (var_233[var_553].Var4 == 0 && var_233[var_553].Var19 <= 1) {
                        var_981 = "" + item_name;
                    }
                    if (var_233[var_553].Var4 == 0 && var_233[var_553].Var19 > 1) {
                        var_981 = "" + item_name + " ★" + var_233[var_553].Var19;
                    }
                    if (var_233[var_553].Var4 > 0 && var_233[var_553].Var19 <= 1) {
                        var_981 = "" + item_name + "+" + var_233[var_553].Var4;
                    }
                    if (var_233[var_553].Var4 > 0 && var_233[var_553].Var19 > 1) {
                        var_981 = "" + item_name + "+" + var_233[var_553].Var4 + " ★" + var_233[var_553].Var19;
                    }
                    var_979 = var_979 + "" + var_981 + "\n";
                    var_982 = 20;
                    cnt2_5 = 0;
                    _a.label = 3;
                case 3:
                    if (!(cnt2_5 < var_233[var_553].Var19)) return [3 /*break*/, 6];
                    item_list = var_233[var_553]["Var" + var_982];
                    return [4 /*yield*/, func492()];
                case 4:
                    _a.sent();
                    if (var_812 == 1) {
                        var_979 = var_979 + "　[攻]" + var_828 + "\n";
                    }
                    if (var_812 == 2) {
                        var_979 = var_979 + "　[防]" + var_828 + "\n";
                    }
                    if (var_812 == 3) {
                        var_979 = var_979 + "　[－]" + var_828 + "\n";
                    }
                    if (var_812 == 4) {
                        var_979 = var_979 + "　[能]" + var_828 + "\n";
                    }
                    var_982++;
                    _a.label = 5;
                case 5:
                    ++cnt2_5;
                    return [3 /*break*/, 3];
                case 6:
                    var_979 = var_979 + "" + "\n";
                    var_979 = var_979 + "■■■防御ｽﾀﾝﾄﾞ■■■■■■■■■■■■■■" + "\n";
                    if (!(var_358 != 0)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func427()];
                case 7:
                    _a.sent();
                    item_list = var_233[var_554].Var0;
                    var_487 = var_233[var_554].Var13;
                    return [4 /*yield*/, func492()];
                case 8:
                    _a.sent();
                    if (var_233[var_554].Var4 == 0 && var_233[var_554].Var19 <= 1) {
                        var_981 = "" + item_name;
                    }
                    if (var_233[var_554].Var4 == 0 && var_233[var_554].Var19 > 1) {
                        var_981 = "" + item_name + " ★" + var_233[var_554].Var19;
                    }
                    if (var_233[var_554].Var4 > 0 && var_233[var_554].Var19 <= 1) {
                        var_981 = "" + item_name + "+" + var_233[var_554].Var4;
                    }
                    if (var_233[var_554].Var4 > 0 && var_233[var_554].Var19 > 1) {
                        var_981 = "" + item_name + "+" + var_233[var_554].Var4 + " ★" + var_233[var_554].Var19;
                    }
                    var_979 = var_979 + "" + var_981 + "\n";
                    var_982 = 20;
                    cnt2_6 = 0;
                    _a.label = 9;
                case 9:
                    if (!(cnt2_6 < var_233[var_554].Var19)) return [3 /*break*/, 12];
                    item_list = var_233[var_554]["Var" + var_982];
                    return [4 /*yield*/, func492()];
                case 10:
                    _a.sent();
                    if (var_812 == 1) {
                        var_979 = var_979 + "　[攻]" + var_828 + "\n";
                    }
                    if (var_812 == 2) {
                        var_979 = var_979 + "　[防]" + var_828 + "\n";
                    }
                    if (var_812 == 3) {
                        var_979 = var_979 + "　[－]" + var_828 + "\n";
                    }
                    if (var_812 == 4) {
                        var_979 = var_979 + "　[能]" + var_828 + "\n";
                    }
                    var_982++;
                    _a.label = 11;
                case 11:
                    ++cnt2_6;
                    return [3 /*break*/, 9];
                case 12:
                    var_979 = var_979 + "" + "\n";
                    var_979 = var_979 + "■■■能力ｽﾀﾝﾄﾞ■■■■■■■■■■■■■■" + "\n";
                    if (!(var_215 != 0)) return [3 /*break*/, 18];
                    return [4 /*yield*/, func428()];
                case 13:
                    _a.sent();
                    item_list = var_233[var_555].Var0;
                    var_487 = var_233[var_555].Var13;
                    return [4 /*yield*/, func492()];
                case 14:
                    _a.sent();
                    if (var_233[var_555].Var4 == 0 && var_233[var_555].Var19 <= 1) {
                        var_981 = "" + item_name;
                    }
                    if (var_233[var_555].Var4 == 0 && var_233[var_555].Var19 > 1) {
                        var_981 = "" + item_name + " ★" + var_233[var_555].Var19;
                    }
                    if (var_233[var_555].Var4 > 0 && var_233[var_555].Var19 <= 1) {
                        var_981 = "" + item_name + "+" + var_233[var_555].Var4;
                    }
                    if (var_233[var_555].Var4 > 0 && var_233[var_555].Var19 > 1) {
                        var_981 = "" + item_name + "+" + var_233[var_555].Var4 + " ★" + var_233[var_555].Var19;
                    }
                    var_979 = var_979 + "" + var_981 + "\n";
                    var_982 = 20;
                    cnt2_7 = 0;
                    _a.label = 15;
                case 15:
                    if (!(cnt2_7 < var_233[var_555].Var19)) return [3 /*break*/, 18];
                    item_list = var_233[var_555]["Var" + var_982];
                    return [4 /*yield*/, func492()];
                case 16:
                    _a.sent();
                    if (var_812 == 1) {
                        var_979 = var_979 + "　[攻]" + var_828 + "\n";
                    }
                    if (var_812 == 2) {
                        var_979 = var_979 + "　[防]" + var_828 + "\n";
                    }
                    if (var_812 == 3) {
                        var_979 = var_979 + "　[－]" + var_828 + "\n";
                    }
                    if (var_812 == 4) {
                        var_979 = var_979 + "　[能]" + var_828 + "\n";
                    }
                    var_982++;
                    _a.label = 17;
                case 17:
                    ++cnt2_7;
                    return [3 /*break*/, 15];
                case 18:
                    var_980 = 0;
                    for (cnt1_7 = 0; cnt1_7 < 40; ++cnt1_7) {
                        var_979 = var_979 + "" + "\n";
                    }
                    bsave(file_name = var_978, data = var_979, data_size = null, offset = null);
                    return [2 /*return*/];
            }
        });
    });
}
function func228() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(228);
            color(255, 255, 255);
            pos(12, 300);
            font("MS UI Gothic", 12);
            mes("装備品の情報を出力しました。");
            return [2 /*return*/];
        });
    });
}
// セーブファイルからデータ読み出し関数
function func229() {
    return __awaiter(this, void 0, void 0, function () {
        var data_1, data_2, data_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(229);
                    var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_79 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_72 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_80 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_983 = sdim(3000);
                    var_792 = dim(length1 = 5, length2 = 25, length3 = 70, length4 = null);
                    var_704 = dim(300);
                    var_977 = dim(20);
                    var_91 = 1;
                    var_376 = 1;
                    var_840 = 1;
                    var_352 = 15;
                    var_211 = 15;
                    var_568 = 0;
                    var_567 = 100;
                    var_350 = 100;
                    var_565 = 8;
                    var_566 = 8;
                    var_580 = 0;
                    var_581 = 0;
                    var_415 = 0;
                    var_212 = 0;
                    var_134 = 0;
                    var_135 = 0;
                    var_136 = 0;
                    var_137 = 0;
                    var_219 = 0;
                    var_126 = 0;
                    var_133 = 0;
                    var_397 = 0;
                    var_127 = 0;
                    var_104 = 0;
                    var_109 = 0;
                    var_110 = 0;
                    var_111 = 0;
                    var_105 = 0;
                    var_129 = 0;
                    var_218 = 0;
                    var_374 = 0;
                    var_128 = 0;
                    var_389 = 0;
                    var_357 = 0;
                    var_358 = 0;
                    var_215 = 0;
                    var_410 = 0;
                    var_250 = 0;
                    var_839 = 0;
                    var_586 = 0;
                    var_140 = 0;
                    var_123 = 0;
                    var_124 = 0;
                    var_125 = 0;
                    var_138 = 0;
                    var_420 = 0;
                    var_169 = 0;
                    var_170 = 0;
                    var_172 = 0;
                    var_233 = ItemInfo.dim(100);
                    var_476 = dim(40);
                    var_477 = dim(40);
                    var_479 = dim(40);
                    var_478 = dim(40);
                    var_156 = dim(400);
                    var_984 = 0;
                    var_862 = dim(length1 = 1000, length2 = 4, length3 = null, length4 = null);
                    var_501 = 0;
                    return [4 /*yield*/, func505()];
                case 1:
                    _a.sent();
                    if (var_726 == 1) {
                        var_735 = "01.dat";
                    }
                    if (var_726 == 2) {
                        var_735 = "02.dat";
                    }
                    if (var_726 == 3) {
                        var_735 = "03.dat";
                    }
                    var_985 = 0;
                    var_704 = bload(var_735, null, var_985);
                    var_985 = var_985 + 1200;
                    {
                        var_233 = [];
                        data_1 = bload(var_735, null, var_985);
                        data_1.forEach(function (d) {
                            var_233.push(ItemInfo.Load(d));
                        });
                    }
                    var_985 = var_985 + 12000;
                    var_476 = bload(var_735, null, var_985);
                    var_985 = var_985 + 160;
                    var_477 = bload(var_735, null, var_985);
                    var_985 = var_985 + 160;
                    var_479 = bload(var_735, null, var_985);
                    var_985 = var_985 + 160;
                    var_478 = bload(var_735, null, var_985);
                    var_985 = var_985 + 160;
                    var_862 = bload(var_735, null, var_985);
                    var_985 = var_985 + 16000;
                    var_71 = bload(var_735, null, var_985);
                    var_985 = var_985 + 19600;
                    var_72 = bload(var_735, null, var_985);
                    var_985 = var_985 + 19600;
                    var_65 = bload(var_735, null, var_985);
                    var_985 = var_985 + 19600;
                    var_73 = bload(var_735, null, var_985);
                    var_985 = var_985 + 19600;
                    var_74 = bload(var_735, null, var_985);
                    var_985 = var_985 + 19600;
                    var_75 = bload(var_735, null, var_985);
                    var_985 = var_985 + 80;
                    var_76 = bload(var_735, null, var_985);
                    var_985 = var_985 + 6000;
                    var_79 = bload(var_735, null, var_985);
                    var_985 = var_985 + 19600;
                    var_80 = bload(var_735, null, var_985);
                    var_985 = var_985 + 19600;
                    var_84 = bload(var_735, null, var_985);
                    var_985 = var_985 + 19600;
                    var_77 = bload(var_735, null, var_985);
                    var_985 = var_985 + 19600;
                    {
                        var_78 = [];
                        data_2 = bload(var_735, null, var_985);
                        data_2.forEach(function (d) {
                            var_78.push(ItemInfo.Load(d));
                        });
                    }
                    var_985 = var_985 + 36000;
                    var_81 = bload(var_735, null, var_985);
                    var_985 = var_985 + 8400;
                    var_82 = bload(var_735, null, var_985);
                    var_985 = var_985 + 19600;
                    {
                        var_83 = [];
                        data_3 = bload(var_735, null, var_985);
                        data_3.forEach(function (d) {
                            var_83.push(CharactorInfo.Load(d));
                        });
                    }
                    var_985 = var_985 + 48000;
                    var_493 = bload(var_735, null, var_985);
                    var_985 = var_985 + 80;
                    var_983 = bload(var_735, null, var_985);
                    var_985 = var_985 + 12000;
                    var_792 = bload(var_735, null, var_985);
                    var_985 = var_985 + 35000;
                    var_863 = bload(var_735, null, var_985);
                    var_985 = var_985 + 19600;
                    var_853 = bload(var_735, null, var_985);
                    var_985 = var_985 + 6000;
                    var_986 = bload(var_735, null, var_985);
                    var_985 = var_985 + 400;
                    var_486 = bload(var_735, null, var_985);
                    var_985 = var_985 + 201600;
                    var_156 = bload(var_735, null, var_985);
                    var_985 = var_985 + 1600;
                    var_987 = bload(var_735, null, var_985);
                    var_985 = var_985 + 120;
                    var_988 = bload(var_735, null, var_985);
                    var_985 = var_985 + 480;
                    var_835 = bload(var_735, null, var_985);
                    var_985 = var_985 + 4000;
                    var_87 = bload(var_735, null, var_985);
                    var_985 = var_985 + 19600;
                    var_989 = bload(var_735, null, var_985);
                    var_985 = var_985 + 1600;
                    var_990 = bload(var_735, null, var_985);
                    var_985 = var_985 + 400;
                    var_991 = bload(var_735, null, var_985);
                    var_985 = var_985 + 7560;
                    var_992 = bload(var_735, null, var_985);
                    var_985 = var_985 + 120;
                    var_91 = var_704[1];
                    var_376 = var_704[2];
                    var_840 = var_704[3];
                    var_352 = var_704[4];
                    var_211 = var_704[5];
                    var_568 = var_704[6];
                    var_567 = var_704[7];
                    var_350 = var_704[8];
                    var_565 = var_704[9];
                    var_566 = var_704[10];
                    var_580 = var_704[11];
                    var_581 = var_704[12];
                    var_415 = var_704[13];
                    var_212 = var_704[14];
                    var_134 = var_704[15];
                    var_135 = var_704[16];
                    var_136 = var_704[17];
                    var_219 = var_704[18];
                    var_535 = var_704[19];
                    var_126 = var_704[20];
                    var_133 = var_704[21];
                    var_397 = var_704[22];
                    var_127 = var_704[23];
                    var_104 = var_704[24];
                    var_109 = var_704[25];
                    var_110 = var_704[26];
                    var_111 = var_704[27];
                    var_105 = var_704[28];
                    var_559 = var_704[29];
                    var_129 = var_704[30];
                    var_218 = var_704[31];
                    var_374 = var_704[32];
                    var_128 = var_704[33];
                    var_993 = var_704[34];
                    var_357 = var_704[35];
                    var_358 = var_704[36];
                    var_215 = var_704[37];
                    var_410 = var_704[38];
                    var_250 = var_704[39];
                    var_224 = var_704[40];
                    var_66 = var_704[41];
                    var_67 = var_704[42];
                    var_201 = var_704[43];
                    var_199 = var_704[44];
                    var_336 = var_704[45];
                    var_97 = var_704[46];
                    var_337 = var_704[47];
                    var_92 = var_704[48];
                    var_96 = var_704[49];
                    var_95 = var_704[50];
                    var_994 = var_704[51];
                    var_995 = var_704[52];
                    var_996 = var_704[53];
                    var_85 = var_704[54];
                    var_997 = var_704[55];
                    var_338 = var_704[56];
                    var_106 = var_704[57];
                    var_262 = var_704[58];
                    var_839 = var_704[59];
                    var_998 = var_704[60];
                    var_62 = var_704[61];
                    var_98 = var_704[62];
                    var_896 = var_704[63];
                    var_897 = var_704[64];
                    var_898 = var_704[65];
                    var_999 = var_704[66];
                    var_1000 = var_704[67];
                    var_1001 = var_704[68];
                    var_894 = var_704[69];
                    var_895 = var_704[70];
                    var_356 = var_704[71];
                    var_1002 = var_704[72];
                    var_1003 = var_704[73];
                    var_420 = var_704[74];
                    var_204 = var_704[75];
                    var_1004 = var_704[76];
                    var_1005 = var_704[77];
                    var_1006 = var_704[78];
                    var_1007 = var_704[79];
                    var_1008 = var_704[80];
                    var_481 = var_704[81];
                    var_1009 = var_704[82];
                    var_107 = var_704[83];
                    var_1010 = var_704[84];
                    var_1011 = var_704[85];
                    var_1012 = var_704[86];
                    var_864 = var_704[87];
                    var_404 = var_704[88];
                    var_112 = var_704[89];
                    var_200 = var_704[90];
                    var_113 = var_704[91];
                    var_102 = var_704[92];
                    var_526 = var_704[93];
                    var_537 = var_704[94];
                    var_386 = var_704[95];
                    var_103 = var_704[96];
                    var_100 = var_704[97];
                    var_101 = var_704[98];
                    var_114 = var_704[99];
                    var_116 = var_704[100];
                    var_115 = var_704[101];
                    var_461 = var_704[102];
                    var_462 = var_704[103];
                    var_157 = var_704[104];
                    var_158 = var_704[105];
                    var_177 = var_704[106];
                    var_117 = var_704[107];
                    var_998 = var_704[108];
                    var_1013 = var_704[109];
                    var_118 = var_704[110];
                    var_119 = var_704[111];
                    var_131 = var_704[112];
                    var_169 = var_704[113];
                    var_140 = var_704[114];
                    var_1014 = var_704[115];
                    var_121 = var_704[116];
                    var_595 = var_704[117];
                    var_172 = var_704[118];
                    var_1015 = var_704[119];
                    var_159 = var_704[120];
                    var_163 = var_704[121];
                    var_164 = var_704[122];
                    var_132 = var_704[123];
                    var_120 = var_704[124];
                    var_1016 = var_704[125];
                    var_1017 = var_704[126];
                    var_1018 = var_704[127];
                    var_1019 = var_704[128];
                    var_1020 = var_704[129];
                    var_1021 = var_704[130];
                    var_122 = var_704[131];
                    var_463 = var_704[132];
                    var_464 = var_704[133];
                    var_141 = var_704[134];
                    var_123 = var_704[135];
                    var_124 = var_704[136];
                    var_396 = var_704[137];
                    var_550 = var_704[138];
                    var_125 = var_704[139];
                    var_138 = var_704[140];
                    var_1022 = var_704[141];
                    var_175 = var_704[142];
                    var_139 = var_704[143];
                    var_168 = var_704[144];
                    var_322 = var_704[145];
                    var_70 = var_704[146];
                    var_1023 = var_704[147];
                    var_1024 = var_704[148];
                    var_142 = var_704[149];
                    var_143 = var_704[150];
                    var_144 = var_704[151];
                    var_1025 = var_704[152];
                    var_1026 = var_704[153];
                    var_1027 = var_704[154];
                    var_1028 = var_704[155];
                    var_1029 = var_704[156];
                    var_145 = var_704[157];
                    var_1030 = var_704[158];
                    var_146 = var_704[159];
                    var_147 = var_704[160];
                    var_148 = var_704[161];
                    var_149 = var_704[162];
                    var_377 = var_704[163];
                    var_378 = var_704[164];
                    var_379 = var_704[165];
                    var_387 = var_704[166];
                    var_150 = var_704[167];
                    var_270 = var_704[168];
                    var_151 = var_704[169];
                    var_152 = var_704[170];
                    var_154 = var_704[171];
                    var_155 = var_704[172];
                    var_174 = var_704[173];
                    var_160 = var_704[174];
                    var_161 = var_704[175];
                    var_162 = var_704[176];
                    var_130 = var_704[177];
                    var_170 = var_704[178];
                    var_380 = var_704[179];
                    var_1031 = var_704[180];
                    var_165 = var_704[181];
                    var_166 = var_704[182];
                    var_167 = var_704[183];
                    var_153 = var_704[184];
                    var_1032 = var_704[185];
                    var_677 = var_704[186];
                    var_94 = var_704[187];
                    var_1033 = var_704[188];
                    var_681 = var_704[189];
                    var_684 = var_704[190];
                    var_178 = var_704[191];
                    var_1034 = var_704[192];
                    var_367 = var_704[193];
                    var_833 = var_704[194];
                    var_137 = var_704[195];
                    var_1035 = var_704[196];
                    var_173 = var_704[197];
                    var_1036 = var_704[198];
                    var_1037 = var_704[199];
                    var_1038 = var_704[200];
                    var_1039 = var_704[201];
                    var_1040 = var_704[202];
                    var_207 = var_704[203];
                    var_830 = var_704[204];
                    var_179 = var_704[205];
                    var_180 = var_704[206];
                    var_181 = var_704[207];
                    var_182 = var_704[208];
                    var_176 = var_704[209];
                    var_183 = var_704[210];
                    var_184 = var_704[211];
                    var_185 = var_704[212];
                    var_186 = var_704[213];
                    var_187 = var_704[214];
                    var_188 = var_704[215];
                    var_189 = var_704[216];
                    var_190 = var_704[217];
                    var_523 = var_704[218];
                    var_755 = var_704[219];
                    var_1041 = var_704[220];
                    var_759 = var_704[221];
                    var_1042 = var_704[222];
                    var_1043 = var_704[223];
                    var_1044 = var_704[224];
                    var_191 = var_704[225];
                    var_192 = var_704[226];
                    var_193 = var_704[227];
                    var_1045 = var_704[228];
                    var_536 = var_704[229];
                    var_1046 = var_704[230];
                    var_831 = var_704[231];
                    var_203 = var_704[232];
                    var_194 = var_704[233];
                    var_381 = var_704[234];
                    var_524 = var_704[235];
                    var_538 = var_704[236];
                    var_99 = var_704[237];
                    var_202 = var_704[238];
                    var_1047 = var_704[239];
                    var_1048 = var_704[240];
                    if (var_726 == 1) {
                        var_752 = "01e.dat";
                    }
                    if (var_726 == 2) {
                        var_752 = "02e.dat";
                    }
                    if (var_726 == 3) {
                        var_752 = "03e.dat";
                    }
                    exist(var_752);
                    if (!(strsize == (-1))) return [3 /*break*/, 3];
                    return [4 /*yield*/, func230()];
                case 2:
                    _a.sent();
                    bsave(file_name = var_752, data = var_753, data_size = null, offset = null);
                    _a.label = 3;
                case 3:
                    notesel(var_754);
                    noteload(var_752);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    var_198 = 0;
                    var_300 = 0;
                    var_765 = 0;
                    var_374 = 0;
                    var_755 = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function func230() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_8, cnt1_9;
        return __generator(this, function (_a) {
            dbgprt(230);
            var_753 = "";
            for (cnt1_8 = 0; cnt1_8 < 100; ++cnt1_8) {
                var_753 = var_753 + "" + "\n";
            }
            var_753 = var_753 + "ほぞん" + "\n";
            var_753 = var_753 + "しきべつ" + "\n";
            var_753 = var_753 + "へんげ" + "\n";
            var_753 = var_753 + "ごうせい" + "\n";
            var_753 = var_753 + "かいふく" + "\n";
            var_753 = var_753 + "みがわり" + "\n";
            var_753 = var_753 + "たかとび" + "\n";
            var_753 = var_753 + "とじこめ" + "\n";
            var_753 = var_753 + "やりすごし" + "\n";
            var_753 = var_753 + "おはらい" + "\n";
            var_753 = var_753 + "ジョジョって" + "\n";
            var_753 = var_753 + "かっけーなー" + "\n";
            var_753 = var_753 + "だけど" + "\n";
            var_753 = var_753 + "スピードワゴンが" + "\n";
            var_753 = var_753 + "ストレイツォに" + "\n";
            var_753 = var_753 + "ころされていった" + "\n";
            var_753 = var_753 + "いどうなるだろう" + "\n";
            var_753 = var_753 + "ジョジョは" + "\n";
            var_753 = var_753 + "オレの" + "\n";
            var_753 = var_753 + "ともダチ" + "\n";
            for (cnt1_9 = 0; cnt1_9 < 100; ++cnt1_9) {
                var_753 = var_753 + "" + "\n";
            }
            return [2 /*return*/];
        });
    });
}
// プレイデータを保存するセーブ機能
function func231() {
    return __awaiter(this, void 0, void 0, function () {
        var save_83;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(231);
                    var_8 = ginfo(4);
                    var_9 = ginfo(5);
                    bsave(file_name = "00.dat", data = var_8, data_size = null, offset = 40);
                    bsave(file_name = "00.dat", data = var_9, data_size = null, offset = 60);
                    if (var_62 == 99) {
                        end();
                    }
                    if (!(var_262 == 1 && var_1049 == 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func182()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(var_212 == 1)) return [3 /*break*/, 4];
                    var_262 = 1;
                    return [4 /*yield*/, func233()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(var_767 == 1)) return [3 /*break*/, 6];
                    var_262 = 1;
                    return [4 /*yield*/, func233()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, func232()];
                case 7:
                    _a.sent();
                    if (var_726 == 1) {
                        var_735 = "01.dat";
                    }
                    if (var_726 == 2) {
                        var_735 = "02.dat";
                    }
                    if (var_726 == 3) {
                        var_735 = "03.dat";
                    }
                    var_704[1] = var_91;
                    var_704[2] = var_376;
                    var_704[3] = var_840;
                    var_704[4] = var_352;
                    var_704[5] = var_211;
                    var_704[6] = var_568;
                    var_704[7] = var_567;
                    var_704[8] = var_350;
                    var_704[9] = var_565;
                    var_704[10] = var_566;
                    var_704[11] = var_580;
                    var_704[12] = var_581;
                    var_704[13] = var_415;
                    var_704[14] = var_212;
                    var_704[15] = var_134;
                    var_704[16] = var_135;
                    var_704[17] = var_136;
                    var_704[18] = var_219;
                    var_704[19] = var_535;
                    var_704[20] = var_126;
                    var_704[21] = var_133;
                    var_704[22] = var_397;
                    var_704[23] = var_127;
                    var_704[24] = var_104;
                    var_704[25] = var_109;
                    var_704[26] = var_110;
                    var_704[27] = var_111;
                    var_704[28] = var_105;
                    var_704[29] = var_559;
                    var_704[30] = var_129;
                    var_704[31] = var_218;
                    var_704[32] = var_374;
                    var_704[33] = var_128;
                    var_704[34] = var_993;
                    var_704[35] = var_357;
                    var_704[36] = var_358;
                    var_704[37] = var_215;
                    var_704[38] = var_410;
                    var_704[39] = var_250;
                    var_704[40] = var_224;
                    var_704[41] = var_66;
                    var_704[42] = var_67;
                    var_704[43] = var_201;
                    var_704[44] = var_199;
                    var_704[45] = var_336;
                    var_704[46] = var_97;
                    var_704[47] = var_337;
                    var_704[48] = var_92;
                    var_704[49] = var_96;
                    var_704[50] = var_95;
                    var_704[51] = var_994;
                    var_704[52] = var_995;
                    var_704[53] = var_996;
                    var_704[54] = var_85;
                    var_704[55] = var_997;
                    var_704[56] = var_338;
                    var_704[57] = var_106;
                    var_704[58] = var_262;
                    var_704[59] = var_839;
                    var_704[60] = var_998;
                    var_704[61] = var_62;
                    var_704[62] = var_98;
                    var_704[63] = var_896;
                    var_704[64] = var_897;
                    var_704[65] = var_898;
                    var_704[66] = var_999;
                    var_704[67] = var_1000;
                    var_704[68] = var_1001;
                    var_704[69] = var_894;
                    var_704[70] = var_895;
                    var_704[71] = var_356;
                    var_704[72] = var_1002;
                    var_704[73] = var_1003;
                    var_704[74] = var_420;
                    var_704[75] = var_204;
                    var_704[76] = var_1004;
                    var_704[77] = var_1005;
                    var_704[78] = var_1006;
                    var_704[79] = var_1007;
                    var_704[80] = var_1008;
                    var_704[81] = var_481;
                    var_704[82] = var_1009;
                    var_704[83] = var_107;
                    var_704[84] = var_1010;
                    var_704[85] = var_1011;
                    var_704[86] = var_1012;
                    var_704[87] = var_864;
                    var_704[88] = var_404;
                    var_704[89] = var_112;
                    var_704[90] = var_200;
                    var_704[91] = var_113;
                    var_704[92] = var_102;
                    var_704[93] = var_526;
                    var_704[94] = var_537;
                    var_704[95] = var_386;
                    var_704[96] = var_103;
                    var_704[97] = var_100;
                    var_704[98] = var_101;
                    var_704[99] = var_114;
                    var_704[100] = var_116;
                    var_704[101] = var_115;
                    var_704[102] = var_461;
                    var_704[103] = var_462;
                    var_704[104] = var_157;
                    var_704[105] = var_158;
                    var_704[106] = var_177;
                    var_704[107] = var_117;
                    var_704[108] = var_998;
                    var_704[109] = var_1013;
                    var_704[110] = var_118;
                    var_704[111] = var_119;
                    var_704[112] = var_131;
                    var_704[113] = var_169;
                    var_704[114] = var_140;
                    var_704[115] = var_1014;
                    var_704[116] = var_121;
                    var_704[117] = var_595;
                    var_704[118] = var_172;
                    var_704[119] = var_1015;
                    var_704[120] = var_159;
                    var_704[121] = var_163;
                    var_704[122] = var_164;
                    var_704[123] = var_132;
                    var_704[124] = var_120;
                    var_704[125] = var_1016;
                    var_704[126] = var_1017;
                    var_704[127] = var_1018;
                    var_704[128] = var_1019;
                    var_704[129] = var_1020;
                    var_704[130] = var_1021;
                    var_704[131] = var_122;
                    var_704[132] = var_463;
                    var_704[133] = var_464;
                    var_704[134] = var_141;
                    var_704[135] = var_123;
                    var_704[136] = var_124;
                    var_704[137] = var_396;
                    var_704[138] = var_550;
                    var_704[139] = var_125;
                    var_704[140] = var_138;
                    var_704[141] = var_1022;
                    var_704[142] = var_175;
                    var_704[143] = var_139;
                    var_704[144] = var_168;
                    var_704[145] = var_322;
                    var_704[146] = var_70;
                    var_704[147] = var_1023;
                    var_704[148] = var_1024;
                    var_704[149] = var_142;
                    var_704[150] = var_143;
                    var_704[151] = var_144;
                    var_704[152] = var_1025;
                    var_704[153] = var_1026;
                    var_704[154] = var_1027;
                    var_704[155] = var_1028;
                    var_704[156] = var_1029;
                    var_704[157] = var_145;
                    var_704[158] = var_1030;
                    var_704[159] = var_146;
                    var_704[160] = var_147;
                    var_704[161] = var_148;
                    var_704[162] = var_149;
                    var_704[163] = var_377;
                    var_704[164] = var_378;
                    var_704[165] = var_379;
                    var_704[166] = var_387;
                    var_704[167] = var_150;
                    var_704[168] = var_270;
                    var_704[169] = var_151;
                    var_704[170] = var_152;
                    var_704[171] = var_154;
                    var_704[172] = var_155;
                    var_704[173] = var_174;
                    var_704[174] = var_160;
                    var_704[175] = var_161;
                    var_704[176] = var_162;
                    var_704[177] = var_130;
                    var_704[178] = var_170;
                    var_704[179] = var_380;
                    var_704[180] = var_1031;
                    var_704[181] = var_165;
                    var_704[182] = var_166;
                    var_704[183] = var_167;
                    var_704[184] = var_153;
                    var_704[185] = var_1032;
                    var_704[186] = var_677;
                    var_704[187] = var_94;
                    var_704[188] = var_1033;
                    var_704[189] = var_681;
                    var_704[190] = var_684;
                    var_704[191] = var_178;
                    var_704[192] = var_1034;
                    var_704[193] = var_367;
                    var_704[194] = var_833;
                    var_704[195] = var_137;
                    var_704[196] = var_1035;
                    var_704[197] = var_173;
                    var_704[198] = var_1036;
                    var_704[199] = var_1037;
                    var_704[200] = var_1038;
                    var_704[201] = var_1039;
                    var_704[202] = var_1040;
                    var_704[203] = var_207;
                    var_704[204] = var_830;
                    var_704[205] = var_179;
                    var_704[206] = var_180;
                    var_704[207] = var_181;
                    var_704[208] = var_182;
                    var_704[209] = var_176;
                    var_704[210] = var_183;
                    var_704[211] = var_184;
                    var_704[212] = var_185;
                    var_704[213] = var_186;
                    var_704[214] = var_187;
                    var_704[215] = var_188;
                    var_704[216] = var_189;
                    var_704[217] = var_190;
                    var_704[218] = var_523;
                    var_704[219] = var_755;
                    var_704[220] = var_1041;
                    var_704[221] = var_759;
                    var_704[222] = var_1042;
                    var_704[223] = var_1043;
                    var_704[224] = var_1044;
                    var_704[225] = var_191;
                    var_704[226] = var_192;
                    var_704[227] = var_193;
                    var_704[228] = var_1045;
                    var_704[229] = var_536;
                    var_704[230] = var_1046;
                    var_704[231] = var_831;
                    var_704[232] = var_203;
                    var_704[233] = var_194;
                    var_704[234] = var_381;
                    var_704[235] = var_524;
                    var_704[236] = var_538;
                    var_704[237] = var_99;
                    var_704[238] = var_202;
                    var_704[239] = var_1047;
                    var_704[240] = var_1048;
                    var_704[241] = 0;
                    var_704[242] = 0;
                    var_704[243] = 0;
                    var_704[244] = 0;
                    var_704[245] = 0;
                    var_704[246] = 0;
                    var_704[247] = 0;
                    var_704[248] = 0;
                    var_704[249] = 0;
                    var_704[250] = 0;
                    var_704[251] = 0;
                    var_704[252] = 0;
                    var_704[253] = 0;
                    var_704[254] = 0;
                    var_704[255] = 0;
                    var_704[256] = 0;
                    var_704[257] = 0;
                    var_704[258] = 0;
                    var_704[259] = 0;
                    var_704[260] = 0;
                    var_704[261] = 0;
                    var_704[262] = 0;
                    var_704[263] = 0;
                    var_704[264] = 0;
                    var_704[265] = 0;
                    var_704[266] = 0;
                    var_704[267] = 0;
                    var_704[268] = 0;
                    var_704[269] = 0;
                    var_985 = 0;
                    bsave(file_name = var_735, data = var_704, data_size = null, offset = var_985);
                    var_985 = var_985 + 1200;
                    bsave(file_name = var_735, data = var_233, data_size = null, offset = var_985);
                    var_985 = var_985 + 12000;
                    bsave(file_name = var_735, data = var_476, data_size = null, offset = var_985);
                    var_985 = var_985 + 160;
                    bsave(file_name = var_735, data = var_477, data_size = null, offset = var_985);
                    var_985 = var_985 + 160;
                    bsave(file_name = var_735, data = var_479, data_size = null, offset = var_985);
                    var_985 = var_985 + 160;
                    bsave(file_name = var_735, data = var_478, data_size = null, offset = var_985);
                    var_985 = var_985 + 160;
                    bsave(file_name = var_735, data = var_862, data_size = null, offset = var_985);
                    var_985 = var_985 + 16000;
                    bsave(file_name = var_735, data = var_71, data_size = null, offset = var_985);
                    var_985 = var_985 + 19600;
                    bsave(file_name = var_735, data = var_72, data_size = null, offset = var_985);
                    var_985 = var_985 + 19600;
                    bsave(file_name = var_735, data = var_65, data_size = null, offset = var_985);
                    var_985 = var_985 + 19600;
                    bsave(file_name = var_735, data = var_73, data_size = null, offset = var_985);
                    var_985 = var_985 + 19600;
                    bsave(file_name = var_735, data = var_74, data_size = null, offset = var_985);
                    var_985 = var_985 + 19600;
                    bsave(file_name = var_735, data = var_75, data_size = null, offset = var_985);
                    var_985 = var_985 + 80;
                    bsave(file_name = var_735, data = var_76, data_size = null, offset = var_985);
                    var_985 = var_985 + 6000;
                    bsave(file_name = var_735, data = var_79, data_size = null, offset = var_985);
                    var_985 = var_985 + 19600;
                    bsave(file_name = var_735, data = var_80, data_size = null, offset = var_985);
                    var_985 = var_985 + 19600;
                    bsave(file_name = var_735, data = var_84, data_size = null, offset = var_985);
                    var_985 = var_985 + 19600;
                    bsave(file_name = var_735, data = var_77, data_size = null, offset = var_985);
                    var_985 = var_985 + 19600;
                    bsave(file_name = var_735, data = var_78, data_size = null, offset = var_985);
                    var_985 = var_985 + 36000;
                    bsave(file_name = var_735, data = var_81, data_size = null, offset = var_985);
                    var_985 = var_985 + 8400;
                    bsave(file_name = var_735, data = var_82, data_size = null, offset = var_985);
                    var_985 = var_985 + 19600;
                    save_83 = Array();
                    var_83.forEach(function (save) {
                        save_83.push(save.Save());
                    });
                    bsave(var_735, save_83, null, var_985);
                    var_985 = var_985 + 48000;
                    bsave(var_735, var_493, null, var_985);
                    var_985 = var_985 + 80;
                    bsave(var_735, var_983, null, var_985);
                    var_985 = var_985 + 12000;
                    bsave(var_735, var_792, null, var_985);
                    var_985 = var_985 + 35000;
                    bsave(var_735, var_863, null, var_985);
                    var_985 = var_985 + 19600;
                    bsave(var_735, var_853, null, var_985);
                    var_985 = var_985 + 6000;
                    bsave(var_735, var_986, null, var_985);
                    var_985 = var_985 + 400;
                    bsave(var_735, var_486, null, var_985);
                    var_985 = var_985 + 201600;
                    bsave(var_735, var_156, null, var_985);
                    var_985 = var_985 + 1600;
                    bsave(var_735, var_987, null, var_985);
                    var_985 = var_985 + 120;
                    bsave(var_735, var_988, null, var_985);
                    var_985 = var_985 + 480;
                    bsave(var_735, var_835, null, var_985);
                    var_985 = var_985 + 4000;
                    bsave(var_735, var_87, null, var_985);
                    var_985 = var_985 + 19600;
                    bsave(var_735, var_989, null, var_985);
                    var_985 = var_985 + 1600;
                    bsave(var_735, var_990, null, var_985);
                    var_985 = var_985 + 400;
                    bsave(var_735, var_991, null, var_985);
                    var_985 = var_985 + 7560;
                    bsave(var_735, var_992, null, var_985);
                    var_985 = var_985 + 120;
                    if (var_205 == 1) {
                        var_205 = 0;
                        return [2 /*return*/];
                    }
                    if (var_407 >= 1) {
                        netclose(var_1050);
                    }
                    if (var_637 >= 1) {
                        chgdisp();
                    }
                    end();
                    return [2 /*return*/];
            }
        });
    });
}
function func232() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_10;
        return __generator(this, function (_a) {
            dbgprt(232);
            var_389 = 0;
            var_1051 = 1;
            for (cnt1_10 = 0; cnt1_10 < var_97; ++cnt1_10) {
                var_83[var_1051].Var7 = 0;
                var_83[var_1051].Var8 = 0;
                var_83[var_1051].Var11 = 0;
                var_83[var_1051].Var21 = 0;
                var_1051 = var_1051 + 1;
            }
            return [2 /*return*/];
        });
    });
}
function func233() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_8, cnt4_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(233);
                    var_79 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_72 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_84 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_983 = sdim(3000);
                    var_704 = dim(300);
                    var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_78 = ItemInfo.dim(300);
                    var_80 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_81 = dim(length1 = 300, length2 = 7, length3 = null, length4 = null);
                    var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_83 = CharactorInfo.dim(300);
                    var_992 = dim(30);
                    var_95 = 0;
                    var_994 = 0;
                    var_1052 = 0;
                    var_96 = 0;
                    var_112 = 0;
                    var_586 = 0;
                    var_271 = 0;
                    var_585 = 0;
                    var_195 = 0;
                    var_196 = 0;
                    var_197 = 0;
                    var_198 = 0;
                    var_163 = 0;
                    var_164 = 0;
                    var_159 = 0;
                    var_91 = 0;
                    var_840 = 1;
                    var_352 = 15;
                    var_211 = 15;
                    var_568 = 0;
                    var_567 = 100;
                    var_350 = 100;
                    var_565 = 8;
                    var_566 = 8;
                    var_580 = 0;
                    var_581 = 0;
                    var_894 = 0;
                    var_895 = 0;
                    var_212 = 0;
                    var_134 = 0;
                    var_135 = 0;
                    var_136 = 0;
                    var_219 = 0;
                    var_1053 = 0;
                    var_126 = 0;
                    var_133 = 0;
                    var_397 = 0;
                    var_127 = 0;
                    var_104 = 0;
                    var_109 = 0;
                    var_110 = 0;
                    var_111 = 0;
                    var_105 = 0;
                    var_129 = 0;
                    var_218 = 0;
                    var_374 = 0;
                    var_128 = 0;
                    var_389 = 0;
                    var_357 = 0;
                    var_358 = 0;
                    var_215 = 0;
                    var_410 = 0;
                    var_250 = 0;
                    var_896 = 0;
                    var_897 = 0;
                    var_898 = 0;
                    var_999 = 0;
                    var_112 = 0;
                    var_62 = 0;
                    var_386 = 0;
                    var_387 = 0;
                    var_116 = 0;
                    var_114 = 0;
                    var_157 = 0;
                    var_118 = 0;
                    var_119 = 0;
                    var_131 = 0;
                    var_586 = 0;
                    var_140 = 0;
                    var_141 = 0;
                    var_121 = 0;
                    var_132 = 0;
                    var_120 = 0;
                    var_122 = 0;
                    var_123 = 0;
                    var_124 = 0;
                    var_125 = 0;
                    var_138 = 0;
                    var_139 = 0;
                    var_70 = 0;
                    var_142 = 0;
                    var_143 = 0;
                    var_144 = 0;
                    var_145 = 0;
                    var_1054 = 0;
                    var_146 = 0;
                    var_147 = 0;
                    var_148 = 0;
                    var_149 = 0;
                    var_150 = 0;
                    var_270 = 0;
                    var_151 = 0;
                    var_152 = 0;
                    var_154 = 0;
                    var_155 = 0;
                    var_174 = 0;
                    var_159 = 0;
                    var_113 = 0;
                    var_160 = 0;
                    var_161 = 0;
                    var_162 = 0;
                    var_130 = 0;
                    var_157 = 0;
                    var_158 = 0;
                    var_1031 = 0;
                    var_166 = 0;
                    var_167 = 0;
                    var_153 = 0;
                    var_94 = 0;
                    var_420 = 0;
                    var_168 = 0;
                    var_169 = 0;
                    var_108 = 0;
                    var_170 = 0;
                    var_103 = 0;
                    var_1030 = 0;
                    var_1055 = 0;
                    var_595 = 0;
                    var_217 = 0;
                    var_171 = 0;
                    var_1034 = 0;
                    var_172 = 0;
                    var_137 = 0;
                    var_1035 = 0;
                    var_173 = 0;
                    var_271 = 0;
                    var_1037 = 0;
                    var_535 = 0;
                    var_338 = 0;
                    var_175 = 0;
                    var_177 = 0;
                    var_1033 = 0;
                    var_178 = 0;
                    var_179 = 0;
                    var_180 = 0;
                    var_181 = 0;
                    var_182 = 0;
                    var_1022 = 3;
                    var_176 = 0;
                    var_183 = 0;
                    var_184 = 0;
                    var_185 = 0;
                    var_186 = 0;
                    var_187 = 0;
                    var_188 = 0;
                    var_189 = 0;
                    var_190 = 0;
                    var_1042 = 0;
                    var_191 = 0;
                    var_192 = 0;
                    var_193 = 0;
                    var_1045 = 0;
                    var_536 = 0;
                    var_203 = 0;
                    var_194 = 0;
                    var_98 = 0;
                    var_200 = 0;
                    var_99 = 0;
                    var_202 = 0;
                    var_862 = dim(length1 = 1000, length2 = 4, length3 = null, length4 = null);
                    if (var_532 == 0) {
                        var_233 = ItemInfo.dim(100);
                        var_224 = 0;
                        var_415 = 0;
                    }
                    if (var_532 == 1) {
                        var_1056 = 1;
                        for (cnt2_8 = 0; cnt2_8 < 20; ++cnt2_8) {
                            if (var_233[var_1056].Var0 != 0) {
                                var_233[var_1056].Var14 = 1;
                                var_1057 = var_233[var_1056].Var0;
                                var_862[var_1057][0] = 1;
                            }
                            if (var_233[var_1056].Var0 >= 800 && var_233[var_1056].Var0 < 900) {
                                var_484 = 1;
                                var_485 = var_233[var_1056].Var6;
                                for (cnt4_1 = 0; cnt4_1 < 10; ++cnt4_1) {
                                    if (var_486[var_485][var_484][0] != 0) {
                                        var_486[var_485][var_484][14] = 1;
                                        var_1057 = var_486[var_485][var_484][0];
                                        var_862[var_1057][0] = 1;
                                    }
                                    var_484 = var_484 + 1;
                                }
                            }
                            var_1056 = var_1056 + 1;
                        }
                    }
                    var_532 = 0;
                    var_476 = dim(40);
                    var_477 = dim(40);
                    var_479 = dim(40);
                    var_478 = dim(40);
                    var_156 = dim(400);
                    var_1058 = dim(30, 30);
                    var_1046 = 0;
                    var_1059 = 1;
                    return [4 /*yield*/, func494()];
                case 1:
                    _a.sent();
                    var_1059 = 0;
                    var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_66 = 15;
                    var_67 = 8;
                    var_65[var_66][var_67] = 1;
                    var_501 = 0;
                    return [4 /*yield*/, func502()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func234() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(234);
                    var_205 = 1;
                    return [4 /*yield*/, func231()];
                case 1:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "セーブして終了します。";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func340()];
                case 2:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_198 = 0;
                    var_300 = 0;
                    if (var_407 == 1) {
                        netclose(var_1050);
                    }
                    end();
                    return [2 /*return*/];
            }
        });
    });
}
function func235() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(235);
            var_233 = ItemInfo.dim(100);
            var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_862 = dim(length1 = 1000, length2 = 4, length3 = null, length4 = null);
            var_494 = sdim(length1 = 100, length2 = 50, length3 = null);
            var_792 = dim(length1 = 5, length2 = 25, length3 = 70, length4 = null);
            var_989 = dim(400);
            var_990 = dim(100);
            var_726 = 0;
            var_271 = 0;
            var_91 = 0;
            var_376 = 0;
            var_840 = 0;
            var_352 = 0;
            var_211 = 0;
            var_568 = 0;
            var_567 = 0;
            var_350 = 0;
            var_565 = 0;
            var_566 = 0;
            var_580 = 0;
            var_581 = 0;
            var_415 = 0;
            var_212 = 0;
            var_134 = 0;
            var_135 = 0;
            var_136 = 0;
            var_219 = 0;
            var_126 = 0;
            var_133 = 0;
            var_397 = 0;
            var_127 = 0;
            var_104 = 0;
            var_109 = 0;
            var_110 = 0;
            var_111 = 0;
            var_105 = 0;
            var_559 = 0;
            var_129 = 0;
            var_218 = 0;
            var_374 = 0;
            var_128 = 0;
            var_389 = 0;
            var_357 = 0;
            var_358 = 0;
            var_215 = 0;
            var_410 = 0;
            var_250 = 0;
            var_224 = 0;
            var_66 = 0;
            var_67 = 0;
            var_201 = 0;
            var_199 = 0;
            var_336 = 0;
            var_97 = 0;
            var_337 = 0;
            var_92 = 0;
            var_96 = 0;
            var_95 = 0;
            var_994 = 0;
            var_995 = 0;
            var_996 = 0;
            var_85 = 0;
            var_997 = 0;
            var_106 = 0;
            var_262 = 0;
            var_839 = 0;
            var_998 = 0;
            var_62 = 0;
            var_98 = 0;
            var_896 = 0;
            var_897 = 0;
            var_898 = 0;
            var_999 = 0;
            var_1000 = 0;
            var_1001 = 0;
            var_894 = 0;
            var_895 = 0;
            var_356 = 0;
            var_1002 = 0;
            var_1003 = 0;
            var_420 = 0;
            var_204 = 0;
            var_1004 = 0;
            var_1005 = 0;
            var_1006 = 0;
            var_1007 = 0;
            var_1008 = 0;
            var_481 = 0;
            var_1009 = 0;
            var_107 = 0;
            var_1010 = 0;
            var_1011 = 0;
            var_1012 = 0;
            var_864 = 0;
            var_404 = 0;
            var_112 = 0;
            var_200 = 0;
            var_113 = 0;
            var_102 = 0;
            var_526 = 0;
            var_537 = 0;
            var_386 = 0;
            var_103 = 0;
            var_100 = 0;
            var_101 = 0;
            var_114 = 0;
            var_116 = 0;
            var_115 = 0;
            var_461 = 0;
            var_462 = 0;
            var_157 = 0;
            var_158 = 0;
            var_117 = 0;
            var_998 = 0;
            var_118 = 0;
            var_119 = 0;
            var_131 = 0;
            var_169 = 0;
            var_140 = 0;
            var_121 = 0;
            var_595 = 0;
            var_172 = 0;
            var_1015 = 0;
            var_159 = 0;
            var_163 = 0;
            var_164 = 0;
            var_132 = 0;
            var_120 = 0;
            var_1016 = 0;
            var_1017 = 0;
            var_1018 = 0;
            var_1019 = 0;
            var_1020 = 0;
            var_1021 = 0;
            var_122 = 0;
            var_463 = 0;
            var_464 = 0;
            var_141 = 0;
            var_123 = 0;
            var_124 = 0;
            var_396 = 0;
            var_550 = 0;
            var_125 = 0;
            var_138 = 0;
            var_1022 = 3;
            var_139 = 0;
            var_168 = 0;
            var_322 = 0;
            var_70 = 0;
            var_1023 = 0;
            var_1024 = 0;
            var_142 = 0;
            var_143 = 0;
            var_144 = 0;
            var_1025 = 0;
            var_1026 = 0;
            var_1027 = 0;
            var_1028 = 0;
            var_1029 = 0;
            var_145 = 0;
            var_1030 = 0;
            var_146 = 0;
            var_147 = 0;
            var_148 = 0;
            var_149 = 0;
            var_377 = 0;
            var_378 = 0;
            var_379 = 0;
            var_387 = 0;
            var_150 = 0;
            var_270 = 0;
            var_151 = 0;
            var_152 = 0;
            var_154 = 0;
            var_155 = 0;
            var_174 = 0;
            var_160 = 0;
            var_161 = 0;
            var_162 = 0;
            var_130 = 0;
            var_170 = 0;
            var_380 = 0;
            var_1031 = 0;
            var_165 = 0;
            var_166 = 0;
            var_167 = 0;
            var_153 = 0;
            var_1032 = 0;
            var_677 = 0;
            var_94 = 0;
            var_1060 = 0;
            var_684 = 0;
            var_171 = 0;
            var_1034 = 0;
            var_367 = 0;
            var_833 = 0;
            var_137 = 0;
            var_1035 = 0;
            var_173 = 0;
            var_1013 = 0;
            var_1036 = 0;
            var_1037 = 0;
            var_535 = 0;
            var_338 = 0;
            var_790 = 0;
            var_767 = 0;
            var_789 = 0;
            var_788 = 0;
            var_1014 = 0;
            var_207 = 0;
            var_993 = 0;
            var_175 = 0;
            var_177 = 0;
            var_1033 = 0;
            var_178 = 0;
            var_1038 = 0;
            var_1040 = 0;
            var_207 = 0;
            var_830 = 0;
            var_179 = 0;
            var_180 = 0;
            var_181 = 0;
            var_182 = 0;
            var_176 = 0;
            var_183 = 0;
            var_184 = 0;
            var_185 = 0;
            var_186 = 0;
            var_187 = 0;
            var_188 = 0;
            var_189 = 0;
            var_190 = 0;
            var_523 = 0;
            var_755 = 0;
            var_1041 = 0;
            var_759 = 0;
            var_1042 = 0;
            var_1043 = 0;
            var_1044 = 0;
            var_191 = 0;
            var_192 = 0;
            var_193 = 0;
            var_1045 = 0;
            var_203 = 0;
            var_194 = 0;
            var_524 = 0;
            var_538 = 0;
            var_99 = 0;
            var_202 = 0;
            return [2 /*return*/];
        });
    });
}
function func236() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(236);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "今回の冒険を諦めますか？";
                    comments_row2 = "諦めるならば「Y」キーを押してください";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func051()];
                case 1:
                    _a.sent();
                    var_1061 = 1;
                    return [4 /*yield*/, func238()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func237() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(237);
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "確認のため「K」キーを押してください";
                    var_297 = "";
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func050()];
                case 1:
                    _a.sent();
                    var_1061 = 2;
                    return [4 /*yield*/, func238()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ダンジョン攻略中に冒険を諦める関数
function func238() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(238);
                    return [4 /*yield*/, func337()];
                case 1:
                    _a.sent();
                    if (!(var_1061 == 1)) return [3 /*break*/, 3];
                    conf_keyon = getkey(89); // Yキー入力確認
                    if (!(conf_keyon == 1)) return [3 /*break*/, 3];
                    var_198 = 0;
                    return [4 /*yield*/, func237()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
                case 3:
                    if (!(var_1061 == 2)) return [3 /*break*/, 5];
                    //conf_keyon = getkey(192); 192は各キーボードのメーカーが、キーボードごとに割り当てる。
                    conf_keyon = getkey(75); // Kキー入力確認
                    if (!(conf_keyon == 1)) return [3 /*break*/, 5];
                    var_198 = 0;
                    var_211 = 0;
                    var_356 = 305;
                    var_1061 = 3;
                    return [4 /*yield*/, func239()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
                case 5: return [4 /*yield*/, func080()];
                case 6:
                    _a.sent();
                    if (!(var_239 == 1)) return [3 /*break*/, 8];
                    var_198 = 0;
                    var_1061 = 0;
                    return [4 /*yield*/, func009()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
                case 8:
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func238()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func239() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(239);
                    var_212 = 1;
                    return [4 /*yield*/, func672()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func240() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(240);
                    if (var_726 == 1) {
                        var_1062 = "01.dat";
                        var_1063 = "01n.dat";
                        var_1064 = "01e.dat";
                        var_703 = 0;
                    }
                    if (var_726 == 2) {
                        var_1062 = "02.dat";
                        var_1063 = "02n.dat";
                        var_1064 = "02e.dat";
                        var_711 = 0;
                    }
                    if (var_726 == 3) {
                        var_1062 = "03.dat";
                        var_1063 = "03n.dat";
                        var_1064 = "03e.dat";
                        var_718 = 0;
                    }
                    exist(var_1062);
                    if (strsize >= 1) {
                        delete_(var_1062);
                    }
                    exist(var_1063);
                    if (strsize >= 1) {
                        delete_(var_1063);
                    }
                    exist(var_1064);
                    if (strsize >= 1) {
                        delete_(var_1064);
                    }
                    return [4 /*yield*/, func242()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func241() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(241);
            var_948 = dim(100);
            var_948[0] = 0;
            var_948[1] = 8;
            var_948[2] = 20;
            var_948[3] = 50;
            var_948[4] = 100;
            var_948[5] = 180;
            var_948[6] = 290;
            var_948[7] = 500;
            var_948[8] = 800;
            var_948[9] = 1200;
            var_948[10] = 1800;
            var_948[11] = 2500;
            var_948[12] = 3300;
            var_948[13] = 4100;
            var_948[14] = 5000;
            var_948[15] = 6100;
            var_948[16] = 7300;
            var_948[17] = 8600;
            var_948[18] = 10000;
            var_948[19] = 11500;
            var_948[20] = 14000;
            var_948[21] = 17000;
            var_948[22] = 20000;
            var_948[23] = 24000;
            var_948[24] = 29000;
            var_948[25] = 35000;
            var_948[26] = 42000;
            var_948[27] = 50000;
            var_948[28] = 60000;
            var_948[29] = 70000;
            var_948[30] = 85000;
            var_948[31] = 100000;
            var_948[32] = 120000;
            var_948[33] = 140000;
            var_948[34] = 160000;
            var_948[35] = 180000;
            var_948[36] = 200000;
            var_948[37] = 230000;
            var_948[38] = 260000;
            var_948[39] = 290000;
            var_948[40] = 330000;
            var_948[41] = 370000;
            var_948[42] = 410000;
            var_948[43] = 460000;
            var_948[44] = 510000;
            var_948[45] = 560000;
            var_948[46] = 620000;
            var_948[47] = 680000;
            var_948[48] = 750000;
            var_948[49] = 820000;
            var_948[50] = 900000;
            var_948[51] = 1000000;
            var_948[52] = 1100000;
            var_948[53] = 1200000;
            var_948[54] = 1300000;
            var_948[55] = 1400000;
            var_948[56] = 1500000;
            var_948[57] = 1600000;
            var_948[58] = 1700000;
            var_948[59] = 1800000;
            var_948[60] = 1900000;
            var_948[61] = 2000000;
            var_948[62] = 2100000;
            var_948[63] = 2200000;
            var_948[64] = 2300000;
            var_948[65] = 2400000;
            var_948[66] = 2500000;
            var_948[67] = 2600000;
            var_948[68] = 2700000;
            var_948[69] = 2800000;
            var_948[70] = 2900000;
            var_948[71] = 3100000;
            var_948[72] = 3300000;
            var_948[73] = 3500000;
            var_948[74] = 3700000;
            var_948[75] = 3900000;
            var_948[76] = 4100000;
            var_948[77] = 4300000;
            var_948[78] = 4500000;
            var_948[79] = 4700000;
            var_948[80] = 4900000;
            var_948[81] = 5100000;
            var_948[82] = 5300000;
            var_948[83] = 5500000;
            var_948[84] = 5700000;
            var_948[85] = 5900000;
            var_948[86] = 6100000;
            var_948[87] = 6300000;
            var_948[88] = 6500000;
            var_948[89] = 6700000;
            var_948[90] = 6900000;
            var_948[91] = 7100000;
            var_948[92] = 7300000;
            var_948[93] = 7500000;
            var_948[94] = 7700000;
            var_948[95] = 7900000;
            var_948[96] = 8400000;
            var_948[97] = 9000000;
            var_948[98] = 9999999;
            return [2 /*return*/];
        });
    });
}
function func242() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(242);
            var_704 = dim(300);
            var_233 = ItemInfo.dim(100);
            var_476 = dim(40);
            var_477 = dim(40);
            var_479 = dim(40);
            var_478 = dim(40);
            var_862 = dim(length1 = 1000, length2 = 4, length3 = null, length4 = null);
            var_71 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_72 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_74 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_75 = dim(20);
            var_76 = dim(length1 = 100, length2 = 5, length3 = 3, length4 = null);
            var_79 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_80 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_84 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_78 = ItemInfo.dim(300);
            var_81 = dim(length1 = 300, length2 = 7, length3 = null, length4 = null);
            var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_83 = CharactorInfo.dim(300);
            var_493 = dim(20);
            var_983 = sdim(3000);
            var_792 = dim(length1 = 5, length2 = 25, length3 = 70, length4 = null);
            var_863 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_853 = dim(length1 = 50, length2 = 30, length3 = null, length4 = null);
            var_986 = dim(100);
            var_486 = dim(length1 = 80, length2 = 21, length3 = 30, length4 = null);
            var_156 = dim(400);
            var_987 = dim(30);
            var_991 = dim(3, 21, 30);
            var_87 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_988 = dim(120);
            var_835 = dim(1000);
            var_989 = dim(400);
            var_990 = dim(100);
            var_393 = dim(length1 = 10, length2 = 10, length3 = null, length4 = null);
            var_977 = dim(20);
            var_495 = 1;
            var_1065 = 1;
            var_494 = sdim(length1 = 100, length2 = 50, length3 = null);
            var_1066 = sdim(length1 = 1000, length2 = 1000, length3 = null);
            var_1067 = dim(20);
            var_1068 = sdim(300, 30);
            var_1069 = dim(length1 = 10, length2 = 40, length3 = null, length4 = null);
            var_1070 = sdim(length1 = 100, length2 = 10, length3 = null);
            var_1071 = sdim(length1 = 100, length2 = 10, length3 = null);
            var_376 = 0;
            var_998 = 0;
            var_839 = 0;
            var_1015 = 0;
            var_992 = dim(30);
            return [2 /*return*/];
        });
    });
}
function func243() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(243);
            var_86 = rnd(12);
            if (var_91 < 4) {
                var_86 = 1;
            }
            if (var_94 >= 1) {
                var_70 = 0;
            }
            if (var_62 == 1) {
                var_86 = 1;
            }
            if (var_70 != 0) {
                var_86 = 0;
            }
            if (var_62 == 1 && var_91 == 12) {
                var_86 = 0;
            }
            if (var_62 == 2 && var_91 == 30) {
                var_86 = 0;
            }
            if (var_62 == 3 && var_91 == 99) {
                var_86 = 0;
            }
            if (var_62 == 5 && var_91 == var_20) {
                var_86 = 1;
            }
            if (var_94 == 1) {
                var_86 = 0;
            }
            if (var_94 == 2) {
                var_86 = 0;
            }
            if (var_94 == 3) {
                var_86 = 0;
            }
            if (var_94 == 4) {
                var_86 = 1;
            }
            if (var_94 == 5) {
                var_86 = 0;
            }
            if (var_94 == 6) {
                var_86 = 0;
            }
            if (var_94 == 7) {
                var_86 = 0;
            }
            if (var_94 == 8) {
                var_86 = 0;
            }
            if (var_94 == 9) {
                var_86 = 0;
            }
            return [2 /*return*/];
        });
    });
}
function func244() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_11, cnt2_9, cnt1_12, cnt2_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(244);
                    var_95 = 0;
                    var_994 = 0;
                    var_1052 = 0;
                    var_96 = 0;
                    var_1072 = rnd(11);
                    if (var_62 == 3) {
                        var_1072 = rnd(14);
                    }
                    if (var_62 == 1 && var_91 == 12) {
                        var_1072 = 111;
                    }
                    if (var_62 == 2 && var_91 == 30) {
                        var_1072 = 121;
                    }
                    if (var_62 == 3 && var_91 == 99) {
                        var_1072 = 120;
                    }
                    if (var_94 == 1) {
                        var_1072 = 114;
                    }
                    if (var_94 == 2) {
                        var_1072 = 112;
                    }
                    if (var_94 == 3) {
                        var_1072 = 115;
                    }
                    if (var_94 == 5) {
                        var_1072 = 116;
                    }
                    if (var_94 == 6) {
                        var_1072 = 117;
                    }
                    if (var_94 == 7) {
                        var_1072 = 113;
                    }
                    if (var_94 == 8) {
                        var_1072 = 118;
                    }
                    if (var_94 == 9) {
                        var_1072 = 119;
                    }
                    if (var_70 == 5) {
                        var_1072 = 6;
                    }
                    if (var_70 == 6) {
                        var_1072 = 3;
                    }
                    if (var_70 == 7) {
                        var_1072 = 0;
                    }
                    if (var_70 == 11) {
                        var_1072 = 11;
                    }
                    if (var_70 == 12) {
                        var_1072 = 12;
                    }
                    if (var_70 == 99) {
                        var_1072 = 122;
                    }
                    if (var_70 == 1 || var_70 == 2 || var_70 == 3 || var_70 == 4 || var_70 == 8 || var_70 == 9 || var_70 == 10 || var_70 == 13) {
                        var_1073 = rnd(4);
                        if (var_1073 == 0) {
                            var_1072 = 1;
                        }
                        if (var_1073 == 1) {
                            var_1072 = 2;
                        }
                        if (var_1073 == 2) {
                            var_1072 = 9;
                        }
                        if (var_1073 == 3) {
                            var_1072 = 10;
                        }
                    }
                    if (!(var_1072 == 0)) return [3 /*break*/, 4];
                    var_1073 = rnd(3);
                    if (!(var_1073 == 0 || var_1073 == 1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func300()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(var_1073 == 2)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func301()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(var_1072 == 1)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func303()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(var_1072 == 2)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func304()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    if (!(var_1072 == 3)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func305()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    if (!(var_1072 == 4)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func306()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    if (!(var_1072 == 5)) return [3 /*break*/, 14];
                    return [4 /*yield*/, func307()];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14:
                    if (!(var_1072 == 6)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func319()];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16:
                    if (!(var_1072 == 7)) return [3 /*break*/, 18];
                    return [4 /*yield*/, func308()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    if (!(var_1072 == 8)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func318()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    if (!(var_1072 == 9)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func320()];
                case 21:
                    _a.sent();
                    _a.label = 22;
                case 22:
                    if (!(var_1072 == 10)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func321()];
                case 23:
                    _a.sent();
                    _a.label = 24;
                case 24:
                    if (!(var_62 != 5)) return [3 /*break*/, 30];
                    if (!(var_1072 == 11)) return [3 /*break*/, 26];
                    return [4 /*yield*/, func311()];
                case 25:
                    _a.sent();
                    var_94 = 7;
                    _a.label = 26;
                case 26:
                    if (!(var_1072 == 12)) return [3 /*break*/, 28];
                    return [4 /*yield*/, func302()];
                case 27:
                    _a.sent();
                    var_94 = 8;
                    _a.label = 28;
                case 28:
                    if (!(var_1072 == 13)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func316()];
                case 29:
                    _a.sent();
                    var_94 = 9;
                    _a.label = 30;
                case 30:
                    if (!(var_1072 == 111)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func309()];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32:
                    if (!(var_1072 == 112)) return [3 /*break*/, 34];
                    return [4 /*yield*/, func310()];
                case 33:
                    _a.sent();
                    _a.label = 34;
                case 34:
                    if (!(var_1072 == 113)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func311()];
                case 35:
                    _a.sent();
                    _a.label = 36;
                case 36:
                    if (!(var_1072 == 114)) return [3 /*break*/, 38];
                    return [4 /*yield*/, func312()];
                case 37:
                    _a.sent();
                    _a.label = 38;
                case 38:
                    if (!(var_1072 == 115)) return [3 /*break*/, 40];
                    return [4 /*yield*/, func313()];
                case 39:
                    _a.sent();
                    _a.label = 40;
                case 40:
                    if (!(var_1072 == 116)) return [3 /*break*/, 42];
                    return [4 /*yield*/, func314()];
                case 41:
                    _a.sent();
                    _a.label = 42;
                case 42:
                    if (!(var_1072 == 117)) return [3 /*break*/, 44];
                    return [4 /*yield*/, func315()];
                case 43:
                    _a.sent();
                    _a.label = 44;
                case 44:
                    if (!(var_1072 == 118)) return [3 /*break*/, 46];
                    return [4 /*yield*/, func302()];
                case 45:
                    _a.sent();
                    _a.label = 46;
                case 46:
                    if (!(var_1072 == 119)) return [3 /*break*/, 48];
                    return [4 /*yield*/, func316()];
                case 47:
                    _a.sent();
                    _a.label = 48;
                case 48:
                    if (!(var_1072 == 120)) return [3 /*break*/, 50];
                    return [4 /*yield*/, func317()];
                case 49:
                    _a.sent();
                    _a.label = 50;
                case 50:
                    if (!(var_1072 == 121)) return [3 /*break*/, 52];
                    return [4 /*yield*/, func322()];
                case 51:
                    _a.sent();
                    _a.label = 52;
                case 52:
                    if (!(var_1072 == 122)) return [3 /*break*/, 54];
                    return [4 /*yield*/, func300()];
                case 53:
                    _a.sent();
                    _a.label = 54;
                case 54:
                    if (var_1072 == 0) {
                        var_204 = 1;
                        var_96 = 1;
                    }
                    if (!(var_1072 == 1)) return [3 /*break*/, 56];
                    var_1074 = rnd(2);
                    var_1074 = var_1074 + 1;
                    var_204 = var_1074;
                    return [4 /*yield*/, func245()];
                case 55:
                    _a.sent();
                    _a.label = 56;
                case 56:
                    if (!(var_1072 == 2)) return [3 /*break*/, 58];
                    var_1074 = rnd(4);
                    var_1074 = var_1074 + 1;
                    var_204 = var_1074;
                    return [4 /*yield*/, func245()];
                case 57:
                    _a.sent();
                    _a.label = 58;
                case 58:
                    if (!(var_1072 == 9)) return [3 /*break*/, 60];
                    var_1074 = rnd(6);
                    var_1074 = var_1074 + 1;
                    var_204 = var_1074;
                    return [4 /*yield*/, func245()];
                case 59:
                    _a.sent();
                    _a.label = 60;
                case 60:
                    if (!(var_1072 == 10)) return [3 /*break*/, 62];
                    var_1074 = rnd(3);
                    var_1074 = var_1074 + 1;
                    var_204 = var_1074;
                    return [4 /*yield*/, func245()];
                case 61:
                    _a.sent();
                    _a.label = 62;
                case 62:
                    if (var_1072 == 122) {
                        var_204 = 1;
                        var_96 = 9;
                    }
                    var_70 = 0;
                    var_764 = 0;
                    var_1075 = 0;
                    for (cnt1_11 = 0; cnt1_11 < var_32; ++cnt1_11) {
                        var_1076 = 0;
                        for (cnt2_9 = 0; cnt2_9 < var_31; ++cnt2_9) {
                            if (peek(var_983, var_764) == 35) {
                                var_71[var_1076][var_1075] = 0;
                            }
                            if (peek(var_983, var_764) == 46) {
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
                                var_72[var_1076][var_1075] = 1;
                            }
                            if (peek(var_983, var_764) == 94) {
                                var_71[var_1076][var_1075] = 13;
                            }
                            if (peek(var_983, var_764) == 73) {
                                var_71[var_1076][var_1075] = 12;
                                var_79[var_1076][var_1075] = 1;
                                var_72[var_1076][var_1075] = 1;
                            }
                            if (peek(var_983, var_764) == 74) {
                                var_71[var_1076][var_1075] = 12;
                                var_79[var_1076][var_1075] = 2;
                            }
                            if (peek(var_983, var_764) == 76) {
                                var_71[var_1076][var_1075] = 1;
                                var_79[var_1076][var_1075] = 3;
                            }
                            if (peek(var_983, var_764) == 77) {
                                var_71[var_1076][var_1075] = 2;
                                var_79[var_1076][var_1075] = 3;
                            }
                            if (peek(var_983, var_764) == 78) {
                                var_71[var_1076][var_1075] = 3;
                                var_79[var_1076][var_1075] = 3;
                            }
                            if (peek(var_983, var_764) == 79) {
                                var_71[var_1076][var_1075] = 4;
                                var_79[var_1076][var_1075] = 3;
                            }
                            if (peek(var_983, var_764) == 80) {
                                var_71[var_1076][var_1075] = 5;
                                var_79[var_1076][var_1075] = 3;
                            }
                            if (peek(var_983, var_764) == 81) {
                                var_71[var_1076][var_1075] = 6;
                                var_79[var_1076][var_1075] = 3;
                            }
                            if (peek(var_983, var_764) == 82) {
                                var_71[var_1076][var_1075] = 7;
                                var_79[var_1076][var_1075] = 3;
                            }
                            if (peek(var_983, var_764) == 83) {
                                var_71[var_1076][var_1075] = 8;
                                var_79[var_1076][var_1075] = 3;
                            }
                            if (peek(var_983, var_764) == 84) {
                                var_71[var_1076][var_1075] = 9;
                                var_79[var_1076][var_1075] = 3;
                            }
                            if (peek(var_983, var_764) == 85) {
                                var_71[var_1076][var_1075] = 10;
                                var_79[var_1076][var_1075] = 3;
                            }
                            if (peek(var_983, var_764) == 86) {
                                var_71[var_1076][var_1075] = 11;
                                var_79[var_1076][var_1075] = 3;
                            }
                            if (peek(var_983, var_764) == 87) {
                                var_71[var_1076][var_1075] = 12;
                                var_79[var_1076][var_1075] = 3;
                            }
                            if (peek(var_983, var_764) == 97) {
                                var_71[var_1076][var_1075] = 12;
                                var_72[var_1076][var_1075] = 2;
                                var_1016 = var_1076;
                                var_1017 = var_1075;
                                var_84[var_1076][var_1075] = 1;
                                var_995 = 12;
                                var_996 = var_1005;
                            }
                            if (peek(var_983, var_764) == 98) {
                                var_71[var_1076][var_1075] = 12;
                                var_72[var_1076][var_1075] = 3;
                                var_1018 = var_1076;
                                var_1019 = var_1075;
                            }
                            if (peek(var_983, var_764) == 99) {
                                var_71[var_1076][var_1075] = 12;
                                var_72[var_1076][var_1075] = 4;
                                var_1020 = var_1076;
                                var_1021 = var_1075;
                            }
                            if (peek(var_983, var_764) == 100) {
                                var_71[var_1076][var_1075] = 14;
                            }
                            if (peek(var_983, var_764) == 101) {
                                var_71[var_1076][var_1075] = 14;
                            }
                            if (peek(var_983, var_764) == 102) {
                                var_71[var_1076][var_1075] = 14;
                            }
                            if (peek(var_983, var_764) == 103) {
                                var_71[var_1076][var_1075] = 14;
                            }
                            var_1076 = var_1076 + 1;
                            var_764 = var_764 + 1;
                        }
                        var_1075 = var_1075 + 1;
                    }
                    var_764 = 0;
                    var_1075 = 0;
                    for (cnt1_12 = 0; cnt1_12 < var_32; ++cnt1_12) {
                        var_1076 = 0;
                        for (cnt2_10 = 0; cnt2_10 < var_31; ++cnt2_10) {
                            if (peek(var_983, var_764) == 103) {
                                var_1077 = var_1076;
                                var_1078 = var_1075 + 1;
                                var_1079 = var_71[var_1077][var_1078];
                                var_76[var_1079][1][1] = var_1076;
                                var_76[var_1079][1][2] = var_1075;
                            }
                            if (peek(var_983, var_764) == 101) {
                                var_1077 = var_1076 + 1;
                                var_1078 = var_1075;
                                var_1079 = var_71[var_1077][var_1078];
                                var_76[var_1079][2][1] = var_1076;
                                var_76[var_1079][2][2] = var_1075;
                            }
                            if (peek(var_983, var_764) == 102) {
                                var_1077 = var_1076 - 1;
                                var_1078 = var_1075;
                                var_1079 = var_71[var_1077][var_1078];
                                var_76[var_1079][3][1] = var_1076;
                                var_76[var_1079][3][2] = var_1075;
                            }
                            if (peek(var_983, var_764) == 100) {
                                var_1077 = var_1076;
                                var_1078 = var_1075 - 1;
                                var_1079 = var_71[var_1077][var_1078];
                                var_76[var_1079][4][1] = var_1076;
                                var_76[var_1079][4][2] = var_1075;
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
function func245() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(245);
            var_1080 = rnd(14);
            if (var_62 <= 2) {
                var_1080 = 0;
            }
            if (var_62 == 5) {
                var_1080 = 0;
            }
            if (var_1080 <= 6) {
                var_96 = 1;
            }
            if (var_1080 == 7) {
                var_96 = 2;
            }
            if (var_1080 == 8) {
                var_96 = 3;
            }
            if (var_1080 == 9) {
                var_96 = 4;
            }
            if (var_1080 == 10) {
                var_96 = 5;
            }
            if (var_1080 == 11) {
                var_96 = 6;
            }
            if (var_1080 == 12) {
                var_96 = 7;
            }
            if (var_1080 == 13) {
                var_96 = 8;
            }
            if (var_70 == 1) {
                var_96 = 1;
            }
            if (var_70 == 2) {
                var_96 = 3;
            }
            if (var_70 == 3) {
                var_96 = 4;
            }
            if (var_70 == 4) {
                var_96 = 2;
            }
            if (var_70 == 8) {
                var_96 = 5;
            }
            if (var_70 == 9) {
                var_96 = 6;
            }
            if (var_70 == 10) {
                var_96 = 7;
            }
            if (var_70 == 13) {
                var_96 = 8;
            }
            if (var_70 == 99) {
                var_96 = 9;
            }
            return [2 /*return*/];
        });
    });
}
function func246() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(246);
                    var_95 = 0;
                    var_994 = 0;
                    return [4 /*yield*/, func293()];
                case 1:
                    _a.sent();
                    var_1052 = 0;
                    var_96 = 0;
                    var_1052 = rnd(6);
                    if (var_62 == 3) {
                        var_1052 = rnd(5);
                    }
                    if (var_62 == 5) {
                        var_1052 = rnd(5);
                    }
                    if (var_156[364] == 1) {
                        var_1052 = rnd(4);
                    }
                    if (!(var_1052 == 0)) return [3 /*break*/, 3];
                    var_204 = rnd(12);
                    var_204 = var_204 + 1;
                    return [4 /*yield*/, func245()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    if (var_91 < 4) {
                        var_96 = 0;
                    }
                    if (var_62 == 1) {
                        var_96 = 0;
                    }
                    if (var_62 == 2 && var_91 == 30) {
                        var_96 = 0;
                    }
                    if (var_62 == 3 && var_91 == 99) {
                        var_96 = 0;
                    }
                    if (var_62 == 5 && var_91 == var_20) {
                        var_96 = 0;
                    }
                    if (var_94 >= 1) {
                        var_96 = 0;
                    }
                    var_560 = 1;
                    var_561 = 5;
                    var_562 = 5;
                    cnt1_13 = 0;
                    _a.label = 4;
                case 4:
                    if (!(cnt1_13 < 12)) return [3 /*break*/, 8];
                    var_1004 = 0;
                    return [4 /*yield*/, func247()];
                case 5:
                    _a.sent();
                    if (var_560 == 1) {
                        var_1081 = 18 - var_1082;
                        var_1083 = 16 - var_1084;
                    }
                    if (var_560 == 2) {
                        var_1081 = 31 - var_1082;
                        var_1083 = 16 - var_1084;
                    }
                    if (var_560 == 3) {
                        var_1081 = 44 - var_1082;
                        var_1083 = 16 - var_1084;
                    }
                    if (var_560 == 4) {
                        var_1081 = 57 - var_1082;
                        var_1083 = 16 - var_1084;
                    }
                    if (var_560 == 5) {
                        var_1081 = 18 - var_1082;
                        var_1083 = 27 - var_1084;
                    }
                    if (var_560 == 6) {
                        var_1081 = 31 - var_1082;
                        var_1083 = 27 - var_1084;
                    }
                    if (var_560 == 7) {
                        var_1081 = 44 - var_1082;
                        var_1083 = 27 - var_1084;
                    }
                    if (var_560 == 8) {
                        var_1081 = 57 - var_1082;
                        var_1083 = 27 - var_1084;
                    }
                    if (var_560 == 9) {
                        var_1081 = 18 - var_1082;
                        var_1083 = 38 - var_1084;
                    }
                    if (var_560 == 10) {
                        var_1081 = 31 - var_1082;
                        var_1083 = 38 - var_1084;
                    }
                    if (var_560 == 11) {
                        var_1081 = 44 - var_1082;
                        var_1083 = 38 - var_1084;
                    }
                    if (var_560 == 12) {
                        var_1081 = 57 - var_1082;
                        var_1083 = 38 - var_1084;
                    }
                    var_1085 = 13 - var_1082;
                    var_1086 = 11 - var_1084;
                    var_1087 = rnd(var_1085);
                    var_1088 = rnd(var_1086);
                    var_562 = var_1081 - var_1087;
                    var_561 = var_1083 - var_1088;
                    return [4 /*yield*/, func248()];
                case 6:
                    _a.sent();
                    var_560 = var_560 + 1;
                    _a.label = 7;
                case 7:
                    ++cnt1_13;
                    return [3 /*break*/, 4];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function func247() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(247);
                    var_1089 = rnd(100);
                    if (var_1089 >= 0 && var_1089 < 30) {
                        var_1090 = 0;
                        if (var_204 == var_560) {
                            var_96 = 0;
                        }
                    }
                    else {
                        var_1091 = rnd(100);
                        if (var_1091 >= 0 && var_1091 < 75) {
                            var_1090 = 1;
                        }
                        if (var_1091 >= 75 && var_1091 < 85) {
                            var_1090 = 2;
                            if (var_204 == var_560) {
                                var_96 = 0;
                            }
                        }
                        if (var_1091 >= 85 && var_1091 < 98) {
                            var_1090 = 3;
                            if (var_204 == var_560) {
                                var_96 = 0;
                            }
                        }
                        if (var_1091 >= 98 && var_1091 < 100) {
                            var_1090 = 4;
                            if (var_204 == var_560) {
                                var_96 = 0;
                            }
                        }
                    }
                    if (!(var_1090 == 0)) return [3 /*break*/, 2];
                    var_493[var_560] = 0;
                    return [4 /*yield*/, func256()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(var_1090 == 2)) return [3 /*break*/, 28];
                    var_493[var_560] = 1;
                    var_1092 = rnd(13);
                    if (!(var_1092 == 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func258()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(var_1092 == 1)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func259()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(var_1092 == 2)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func260()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    if (!(var_1092 == 3)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func261()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    if (!(var_1092 == 4)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func262()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    if (!(var_1092 == 5)) return [3 /*break*/, 14];
                    return [4 /*yield*/, func263()];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14:
                    if (!(var_1092 == 6)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func264()];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16:
                    if (!(var_1092 == 7)) return [3 /*break*/, 18];
                    return [4 /*yield*/, func265()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    if (!(var_1092 == 8)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func266()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    if (!(var_1092 == 9)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func267()];
                case 21:
                    _a.sent();
                    _a.label = 22;
                case 22:
                    if (!(var_1092 == 10)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func268()];
                case 23:
                    _a.sent();
                    _a.label = 24;
                case 24:
                    if (!(var_1092 == 11)) return [3 /*break*/, 26];
                    return [4 /*yield*/, func269()];
                case 25:
                    _a.sent();
                    _a.label = 26;
                case 26:
                    if (!(var_1092 == 12)) return [3 /*break*/, 28];
                    return [4 /*yield*/, func270()];
                case 27:
                    _a.sent();
                    _a.label = 28;
                case 28:
                    if (!(var_1090 == 3)) return [3 /*break*/, 60];
                    var_493[var_560] = 1;
                    var_1092 = rnd(16);
                    if (var_62 == 1) {
                        var_1092 = rnd(15);
                    }
                    if (!(var_1092 == 0)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func271()];
                case 29:
                    _a.sent();
                    _a.label = 30;
                case 30:
                    if (!(var_1092 == 1)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func272()];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32:
                    if (!(var_1092 == 2)) return [3 /*break*/, 34];
                    return [4 /*yield*/, func273()];
                case 33:
                    _a.sent();
                    _a.label = 34;
                case 34:
                    if (!(var_1092 == 3)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func274()];
                case 35:
                    _a.sent();
                    _a.label = 36;
                case 36:
                    if (!(var_1092 == 4)) return [3 /*break*/, 38];
                    return [4 /*yield*/, func275()];
                case 37:
                    _a.sent();
                    _a.label = 38;
                case 38:
                    if (!(var_1092 == 5)) return [3 /*break*/, 40];
                    return [4 /*yield*/, func276()];
                case 39:
                    _a.sent();
                    _a.label = 40;
                case 40:
                    if (!(var_1092 == 6)) return [3 /*break*/, 42];
                    return [4 /*yield*/, func277()];
                case 41:
                    _a.sent();
                    _a.label = 42;
                case 42:
                    if (!(var_1092 == 7)) return [3 /*break*/, 44];
                    return [4 /*yield*/, func278()];
                case 43:
                    _a.sent();
                    _a.label = 44;
                case 44:
                    if (!(var_1092 == 8)) return [3 /*break*/, 46];
                    return [4 /*yield*/, func279()];
                case 45:
                    _a.sent();
                    _a.label = 46;
                case 46:
                    if (!(var_1092 == 9)) return [3 /*break*/, 48];
                    return [4 /*yield*/, func280()];
                case 47:
                    _a.sent();
                    _a.label = 48;
                case 48:
                    if (!(var_1092 == 10)) return [3 /*break*/, 50];
                    return [4 /*yield*/, func281()];
                case 49:
                    _a.sent();
                    _a.label = 50;
                case 50:
                    if (!(var_1092 == 11)) return [3 /*break*/, 52];
                    return [4 /*yield*/, func282()];
                case 51:
                    _a.sent();
                    _a.label = 52;
                case 52:
                    if (!(var_1092 == 12)) return [3 /*break*/, 54];
                    return [4 /*yield*/, func283()];
                case 53:
                    _a.sent();
                    _a.label = 54;
                case 54:
                    if (!(var_1092 == 13)) return [3 /*break*/, 56];
                    return [4 /*yield*/, func284()];
                case 55:
                    _a.sent();
                    _a.label = 56;
                case 56:
                    if (!(var_1092 == 14)) return [3 /*break*/, 58];
                    return [4 /*yield*/, func285()];
                case 57:
                    _a.sent();
                    _a.label = 58;
                case 58:
                    if (!(var_1092 == 15)) return [3 /*break*/, 60];
                    return [4 /*yield*/, func286()];
                case 59:
                    _a.sent();
                    _a.label = 60;
                case 60:
                    if (!(var_1090 == 4)) return [3 /*break*/, 63];
                    if (!(var_994 == 1 || var_94 == 8 || var_560 == 2 || var_560 == 3 || var_560 == 6 || var_560 == 7 || var_560 == 10 || var_560 == 11)) return [3 /*break*/, 61];
                    var_1090 = 1;
                    return [3 /*break*/, 63];
                case 61:
                    var_493[var_560] = 2;
                    return [4 /*yield*/, func287()];
                case 62:
                    _a.sent();
                    var_1004 = 1;
                    var_994 = 1;
                    var_95 = var_560;
                    var_1093 = rnd(20);
                    if (var_560 == 1) {
                        var_1094 = rnd(2);
                        if (var_1094 == 0) {
                            var_1005 = 0;
                        }
                        if (var_1094 == 1) {
                            var_1005 = 2;
                        }
                    }
                    if (var_560 == 4) {
                        var_1094 = rnd(2);
                        if (var_1094 == 0) {
                            var_1005 = 0;
                        }
                        if (var_1094 == 1) {
                            var_1005 = 1;
                        }
                    }
                    if (var_560 == 5) {
                        var_1094 = rnd(3);
                        if (var_1094 == 0) {
                            var_1005 = 0;
                        }
                        if (var_1094 == 1) {
                            var_1005 = 2;
                        }
                        if (var_1094 == 2) {
                            var_1005 = 3;
                        }
                    }
                    if (var_560 == 8) {
                        var_1094 = rnd(3);
                        if (var_1094 == 0) {
                            var_1005 = 0;
                        }
                        if (var_1094 == 1) {
                            var_1005 = 1;
                        }
                        if (var_1094 == 2) {
                            var_1005 = 3;
                        }
                    }
                    if (var_560 == 9) {
                        var_1094 = rnd(2);
                        if (var_1094 == 0) {
                            var_1005 = 2;
                        }
                        if (var_1094 == 1) {
                            var_1005 = 3;
                        }
                    }
                    if (var_560 == 12) {
                        var_1094 = rnd(2);
                        if (var_1094 == 0) {
                            var_1005 = 1;
                        }
                        if (var_1094 == 1) {
                            var_1005 = 3;
                        }
                    }
                    _a.label = 63;
                case 63:
                    if (!(var_1090 == 1)) return [3 /*break*/, 65];
                    var_493[var_560] = 1;
                    return [4 /*yield*/, func257()];
                case 64:
                    _a.sent();
                    _a.label = 65;
                case 65: return [2 /*return*/];
            }
        });
    });
}
function func248() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_14, cnt2_11;
        return __generator(this, function (_a) {
            dbgprt(248);
            var_1095 = rnd(var_1096);
            var_1095 = var_1095 + 1;
            var_1097 = rnd(var_1098);
            var_1097 = var_1097 + 1;
            var_1099 = rnd(var_1100);
            var_1099 = var_1099 + 1;
            var_1101 = rnd(var_1102);
            var_1101 = var_1101 + 1;
            var_1103 = 0;
            var_1104 = 0;
            var_1105 = 0;
            var_1106 = 0;
            var_1107 = 0;
            var_764 = 0;
            var_1075 = var_561;
            for (cnt1_14 = 0; cnt1_14 < var_1084; ++cnt1_14) {
                var_1108 = 0;
                var_1076 = var_562;
                for (cnt2_11 = 0; cnt2_11 < var_1082; ++cnt2_11) {
                    if (peek(var_983, var_764) == 35) {
                    }
                    if (peek(var_983, var_764) == 46) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1004 == 1) {
                            var_72[var_1076][var_1075] = 1;
                        }
                    }
                    if (peek(var_983, var_764) == 50) {
                        var_1103 = var_1103 + 1;
                        if (var_1097 == var_1103 && var_560 != 9 && var_560 != 10 && var_560 != 11 && var_560 != 12) {
                            var_71[var_1076][var_1075] = 14;
                            var_76[var_560][4][1] = var_1076;
                            var_76[var_560][4][2] = var_1075;
                        }
                        else {
                            var_71[var_1076][var_1075] = 0;
                        }
                    }
                    if (peek(var_983, var_764) == 52) {
                        var_1104 = var_1104 + 1;
                        if (var_1099 == var_1104 && var_560 != 1 && var_560 != 5 && var_560 != 9) {
                            var_71[var_1076][var_1075] = 14;
                            var_76[var_560][2][1] = var_1076;
                            var_76[var_560][2][2] = var_1075;
                        }
                        else {
                            var_71[var_1076][var_1075] = 0;
                        }
                    }
                    if (peek(var_983, var_764) == 54) {
                        var_1105 = var_1105 + 1;
                        if (var_1101 == var_1105 && var_560 != 4 && var_560 != 8 && var_560 != 12) {
                            var_71[var_1076][var_1075] = 14;
                            var_76[var_560][3][1] = var_1076;
                            var_76[var_560][3][2] = var_1075;
                        }
                        else {
                            var_71[var_1076][var_1075] = 0;
                        }
                    }
                    if (peek(var_983, var_764) == 56) {
                        var_1106 = var_1106 + 1;
                        if (var_1095 == var_1106 && var_560 != 1 && var_560 != 2 && var_560 != 3 && var_560 != 4) {
                            var_71[var_1076][var_1075] = 14;
                            var_76[var_560][1][1] = var_1076;
                            var_76[var_560][1][2] = var_1075;
                        }
                        else {
                            var_71[var_1076][var_1075] = 0;
                        }
                    }
                    if (peek(var_983, var_764) == 94) {
                        var_71[var_1076][var_1075] = 13;
                    }
                    if (peek(var_983, var_764) == 45) {
                        var_71[var_1076][var_1075] = 14;
                    }
                    if (peek(var_983, var_764) == 51) {
                        if (var_1005 == 0) {
                            var_71[var_1076][var_1075] = 14;
                            var_76[var_560][4][1] = var_1076;
                            var_76[var_560][4][2] = var_1075;
                        }
                        else {
                            var_71[var_1076][var_1075] = 0;
                            var_76[var_560][4][1] = 0;
                            var_76[var_560][4][2] = 0;
                        }
                    }
                    if (peek(var_983, var_764) == 53) {
                        if (var_1005 == 1) {
                            var_71[var_1076][var_1075] = 14;
                            var_76[var_560][2][1] = var_1076;
                            var_76[var_560][2][2] = var_1075;
                        }
                        else {
                            var_71[var_1076][var_1075] = 0;
                            var_76[var_560][2][1] = 0;
                            var_76[var_560][2][2] = 0;
                        }
                    }
                    if (peek(var_983, var_764) == 55) {
                        if (var_1005 == 2) {
                            var_71[var_1076][var_1075] = 14;
                            var_76[var_560][3][1] = var_1076;
                            var_76[var_560][3][2] = var_1075;
                        }
                        else {
                            var_71[var_1076][var_1075] = 0;
                            var_76[var_560][3][1] = 0;
                            var_76[var_560][3][2] = 0;
                        }
                    }
                    if (peek(var_983, var_764) == 57) {
                        if (var_1005 == 3) {
                            var_71[var_1076][var_1075] = 14;
                            var_76[var_560][1][1] = var_1076;
                            var_76[var_560][1][2] = var_1075;
                        }
                        else {
                            var_71[var_1076][var_1075] = 0;
                            var_76[var_560][1][1] = 0;
                            var_76[var_560][1][2] = 0;
                        }
                    }
                    if (peek(var_983, var_764) == 73) {
                        var_71[var_1076][var_1075] = var_560;
                        var_79[var_1076][var_1075] = 1;
                        var_72[var_1076][var_1075] = 1;
                    }
                    if (peek(var_983, var_764) == 74) {
                        var_71[var_1076][var_1075] = var_560;
                        var_79[var_1076][var_1075] = 2;
                    }
                    if (peek(var_983, var_764) == 66) {
                        var_71[var_1076][var_1075] = var_560;
                        var_79[var_1076][var_1075] = 3;
                    }
                    if (peek(var_983, var_764) == 97) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1005 == 0) {
                            var_72[var_1076][var_1075] = 2;
                            var_1016 = var_1076;
                            var_1017 = var_1075;
                            var_84[var_1076][var_1075] = 1;
                            var_995 = var_560;
                        }
                        else {
                            var_71[var_1076][var_1075] = var_560;
                            var_72[var_1076][var_1075] = 1;
                            var_996 = var_1005;
                        }
                    }
                    if (peek(var_983, var_764) == 98) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1005 == 0) {
                            var_72[var_1076][var_1075] = 3;
                            var_1018 = var_1076;
                            var_1019 = var_1075;
                        }
                        else {
                            var_72[var_1076][var_1075] = 1;
                        }
                    }
                    if (peek(var_983, var_764) == 99) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1005 == 0) {
                            var_72[var_1076][var_1075] = 4;
                            var_1020 = var_1076;
                            var_1021 = var_1075;
                        }
                        else {
                            var_72[var_1076][var_1075] = 1;
                        }
                    }
                    if (peek(var_983, var_764) == 100) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1005 == 1) {
                            var_72[var_1076][var_1075] = 2;
                            var_1016 = var_1076;
                            var_1017 = var_1075;
                            var_84[var_1076][var_1075] = 1;
                            var_995 = var_560;
                        }
                        else {
                            var_71[var_1076][var_1075] = var_560;
                            var_72[var_1076][var_1075] = 1;
                            var_996 = var_1005;
                        }
                    }
                    if (peek(var_983, var_764) == 101) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1005 == 1) {
                            var_72[var_1076][var_1075] = 3;
                            var_1018 = var_1076;
                            var_1019 = var_1075;
                        }
                        else {
                            var_72[var_1076][var_1075] = 1;
                        }
                    }
                    if (peek(var_983, var_764) == 102) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1005 == 1) {
                            var_72[var_1076][var_1075] = 4;
                            var_1020 = var_1076;
                            var_1021 = var_1075;
                        }
                        else {
                            var_72[var_1076][var_1075] = 1;
                        }
                    }
                    if (peek(var_983, var_764) == 103) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1005 == 2) {
                            var_72[var_1076][var_1075] = 2;
                            var_1016 = var_1076;
                            var_1017 = var_1075;
                            var_84[var_1076][var_1075] = 1;
                            var_995 = var_560;
                        }
                        else {
                            var_71[var_1076][var_1075] = var_560;
                            var_72[var_1076][var_1075] = 1;
                            var_996 = var_1005;
                        }
                    }
                    if (peek(var_983, var_764) == 104) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1005 == 2) {
                            var_72[var_1076][var_1075] = 3;
                            var_1018 = var_1076;
                            var_1019 = var_1075;
                        }
                        else {
                            var_72[var_1076][var_1075] = 1;
                        }
                    }
                    if (peek(var_983, var_764) == 105) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1005 == 2) {
                            var_72[var_1076][var_1075] = 4;
                            var_1020 = var_1076;
                            var_1021 = var_1075;
                        }
                        else {
                            var_72[var_1076][var_1075] = 1;
                        }
                    }
                    if (peek(var_983, var_764) == 106) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1005 == 3) {
                            var_72[var_1076][var_1075] = 2;
                            var_1016 = var_1076;
                            var_1017 = var_1075;
                            var_1016 = var_1076;
                            var_1017 = var_1075;
                            var_84[var_1076][var_1075] = 1;
                            var_995 = var_560;
                        }
                        else {
                            var_71[var_1076][var_1075] = var_560;
                            var_72[var_1076][var_1075] = 1;
                            var_996 = var_1005;
                        }
                    }
                    if (peek(var_983, var_764) == 107) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1005 == 3) {
                            var_72[var_1076][var_1075] = 3;
                            var_1018 = var_1076;
                            var_1019 = var_1075;
                        }
                        else {
                            var_72[var_1076][var_1075] = 1;
                        }
                    }
                    if (peek(var_983, var_764) == 108) {
                        var_71[var_1076][var_1075] = var_560;
                        if (var_1005 == 3) {
                            var_72[var_1076][var_1075] = 4;
                            var_1020 = var_1076;
                            var_1021 = var_1075;
                        }
                        else {
                            var_72[var_1076][var_1075] = 1;
                        }
                    }
                    var_1076 = var_1076 + 1;
                    var_1108 = var_1108 + 1;
                    var_764 = var_764 + 1;
                }
                var_1107 = var_1107 + 1;
                var_1075 = var_1075 + 1;
            }
            return [2 /*return*/];
        });
    });
}
function func249() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_15, cnt1_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(249);
                    var_1109 = 1;
                    cnt1_15 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_15 < 12)) return [3 /*break*/, 4];
                    if (var_1109 == 1) {
                        var_1110 = 2;
                        var_1111 = 3;
                        var_1112 = 99;
                        var_1113 = 99;
                    }
                    if (var_1109 == 2) {
                        var_1110 = 3;
                        var_1111 = 4;
                        var_1112 = 1;
                        var_1113 = 99;
                    }
                    if (var_1109 == 3) {
                        var_1110 = 4;
                        var_1111 = 0;
                        var_1112 = 1;
                        var_1113 = 2;
                    }
                    if (var_1109 == 4) {
                        var_1110 = 0;
                        var_1111 = 0;
                        var_1112 = 2;
                        var_1113 = 3;
                    }
                    if (var_1109 == 5) {
                        var_1110 = 6;
                        var_1111 = 7;
                        var_1112 = 99;
                        var_1113 = 99;
                    }
                    if (var_1109 == 6) {
                        var_1110 = 7;
                        var_1111 = 8;
                        var_1112 = 5;
                        var_1113 = 99;
                    }
                    if (var_1109 == 7) {
                        var_1110 = 8;
                        var_1111 = 0;
                        var_1112 = 5;
                        var_1113 = 6;
                    }
                    if (var_1109 == 8) {
                        var_1110 = 0;
                        var_1111 = 0;
                        var_1112 = 6;
                        var_1113 = 7;
                    }
                    if (var_1109 == 9) {
                        var_1110 = 10;
                        var_1111 = 11;
                        var_1112 = 99;
                        var_1113 = 99;
                    }
                    if (var_1109 == 10) {
                        var_1110 = 11;
                        var_1111 = 12;
                        var_1112 = 9;
                        var_1113 = 99;
                    }
                    if (var_1109 == 11) {
                        var_1110 = 12;
                        var_1111 = 0;
                        var_1112 = 9;
                        var_1113 = 10;
                    }
                    if (var_1109 == 12) {
                        var_1110 = 0;
                        var_1111 = 0;
                        var_1112 = 10;
                        var_1113 = 11;
                    }
                    return [4 /*yield*/, func250()];
                case 2:
                    _a.sent();
                    var_1109 = var_1109 + 1;
                    _a.label = 3;
                case 3:
                    ++cnt1_15;
                    return [3 /*break*/, 1];
                case 4:
                    var_1109 = 1;
                    cnt1_16 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_16 < 12)) return [3 /*break*/, 8];
                    if (var_1109 == 1) {
                        var_1110 = 5;
                        var_1111 = 9;
                        var_1112 = 99;
                        var_1113 = 99;
                    }
                    if (var_1109 == 2) {
                        var_1110 = 6;
                        var_1111 = 10;
                        var_1112 = 99;
                        var_1113 = 99;
                    }
                    if (var_1109 == 3) {
                        var_1110 = 7;
                        var_1111 = 11;
                        var_1112 = 99;
                        var_1113 = 99;
                    }
                    if (var_1109 == 4) {
                        var_1110 = 8;
                        var_1111 = 12;
                        var_1112 = 99;
                        var_1113 = 99;
                    }
                    if (var_1109 == 5) {
                        var_1110 = 9;
                        var_1111 = 0;
                        var_1112 = 1;
                        var_1113 = 99;
                    }
                    if (var_1109 == 6) {
                        var_1110 = 10;
                        var_1111 = 0;
                        var_1112 = 2;
                        var_1113 = 99;
                    }
                    if (var_1109 == 7) {
                        var_1110 = 11;
                        var_1111 = 0;
                        var_1112 = 3;
                        var_1113 = 99;
                    }
                    if (var_1109 == 8) {
                        var_1110 = 12;
                        var_1111 = 0;
                        var_1112 = 4;
                        var_1113 = 99;
                    }
                    if (var_1109 == 9) {
                        var_1110 = 0;
                        var_1111 = 0;
                        var_1112 = 5;
                        var_1113 = 1;
                    }
                    if (var_1109 == 10) {
                        var_1110 = 0;
                        var_1111 = 0;
                        var_1112 = 6;
                        var_1113 = 2;
                    }
                    if (var_1109 == 11) {
                        var_1110 = 0;
                        var_1111 = 0;
                        var_1112 = 7;
                        var_1113 = 3;
                    }
                    if (var_1109 == 12) {
                        var_1110 = 0;
                        var_1111 = 0;
                        var_1112 = 8;
                        var_1113 = 4;
                    }
                    return [4 /*yield*/, func251()];
                case 6:
                    _a.sent();
                    var_1109 = var_1109 + 1;
                    _a.label = 7;
                case 7:
                    ++cnt1_16;
                    return [3 /*break*/, 5];
                case 8: return [4 /*yield*/, func252()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func250() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_17, cnt1_18, cnt1_19;
        return __generator(this, function (_a) {
            dbgprt(250);
            var_1114 = var_76[var_1109][3][1];
            var_1115 = var_76[var_1109][3][2];
            var_1116 = var_76[var_1110][2][1];
            var_1117 = var_76[var_1110][2][2];
            var_1118 = var_76[var_1109][2][1];
            var_1119 = var_76[var_1109][2][2];
            if (var_1109 == 2 || var_1109 == 6 || var_1109 == 10) {
                if (var_493[var_1112] == 0) {
                    var_71[var_1118][var_1119] = 0;
                    var_76[var_1109][2][1] = 0;
                    var_76[var_1109][2][2] = 0;
                }
            }
            if (var_1109 == 3 || var_1109 == 4 || var_1109 == 7 || var_1109 == 8 || var_1109 == 11 || var_1109 == 12) {
                if (var_493[var_1112] == 0 && var_493[var_1113] == 0) {
                    var_71[var_1118][var_1119] = 0;
                    var_76[var_1109][2][1] = 0;
                    var_76[var_1109][2][2] = 0;
                }
            }
            if (var_1114 == 0 || var_1115 == 0) {
                return [2 /*return*/];
            }
            if (var_1110 == var_95 && var_1005 != 1) {
                var_71[var_1114][var_1115] = 0;
                var_71[var_1116][var_1117] = 0;
                var_76[var_1109][3][1] = 0;
                var_76[var_1109][3][2] = 0;
                return [2 /*return*/];
            }
            if (var_1116 == 0 || var_1117 == 0) {
                var_1116 = var_76[var_1111][2][1];
                var_1117 = var_76[var_1111][2][2];
                if (var_1111 == var_95 && var_1005 != 1) {
                    var_71[var_1114][var_1115] = 0;
                    var_71[var_1116][var_1117] = 0;
                    var_76[var_1109][3][1] = 0;
                    var_76[var_1109][3][2] = 0;
                    return [2 /*return*/];
                }
                if (var_1116 == 0 || var_1117 == 0) {
                    var_71[var_1114][var_1115] = 0;
                    var_71[var_1116][var_1117] = 0;
                    var_76[var_1109][3][1] = 0;
                    var_76[var_1109][3][2] = 0;
                    return [2 /*return*/];
                }
            }
            var_1120 = var_1114;
            var_1121 = var_1115;
            var_1122 = var_1116 - var_1114 - 1;
            var_1123 = rnd(var_1122);
            var_1123 = var_1123 + 1;
            for (cnt1_17 = 0; cnt1_17 < var_1123; ++cnt1_17) {
                var_71[var_1120][var_1121] = 14;
                var_1120 = var_1120 + 1;
            }
            if (var_1115 == var_1117) {
                var_1124 = 0;
            }
            if (var_1115 > var_1117) {
                var_1124 = 1;
            }
            if (var_1115 < var_1117) {
                var_1124 = 2;
            }
            for (cnt1_18 = 0; cnt1_18 < 10; ++cnt1_18) {
                var_71[var_1120][var_1121] = 14;
                if (var_1121 == var_1117) {
                    break;
                }
                if (var_1124 == 1) {
                    var_1121 = var_1121 - 1;
                    if (var_1121 < 0) {
                        var_1121 = 0;
                    }
                }
                if (var_1124 == 2) {
                    var_1121 = var_1121 + 1;
                }
            }
            for (cnt1_19 = 0; cnt1_19 < 30; ++cnt1_19) {
                var_71[var_1120][var_1121] = 14;
                if (var_1120 == var_1116) {
                    break;
                }
                var_1120 = var_1120 + 1;
            }
            return [2 /*return*/];
        });
    });
}
function func251() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_20, cnt1_21, cnt1_22;
        return __generator(this, function (_a) {
            dbgprt(251);
            var_1114 = var_76[var_1109][4][1];
            var_1115 = var_76[var_1109][4][2];
            var_1116 = var_76[var_1110][1][1];
            var_1117 = var_76[var_1110][1][2];
            var_1118 = var_76[var_1109][1][1];
            var_1119 = var_76[var_1109][1][2];
            if (var_1109 == 5 || var_1109 == 6 || var_1109 == 7 || var_1109 == 8) {
                if (var_493[var_1112] == 0) {
                    var_71[var_1118][var_1119] = 0;
                    var_76[var_1109][1][1] = 0;
                    var_76[var_1109][1][2] = 0;
                }
            }
            if (var_1109 == 9 || var_1109 == 10 || var_1109 == 11 || var_1109 == 12) {
                if (var_493[var_1112] == 0 && var_493[var_1113] == 0) {
                    var_71[var_1118][var_1119] = 0;
                    var_76[var_1109][1][1] = 0;
                    var_76[var_1109][1][2] = 0;
                }
            }
            if (var_1114 == 0 || var_1115 == 0) {
                return [2 /*return*/];
            }
            if (var_1110 == var_95 && var_1005 != 3) {
                var_71[var_1114][var_1115] = 0;
                var_71[var_1116][var_1117] = 0;
                var_76[var_1109][4][1] = 0;
                var_76[var_1109][4][2] = 0;
                return [2 /*return*/];
            }
            if (var_1116 == 0 || var_1117 == 0) {
                var_1116 = var_76[var_1111][1][1];
                var_1117 = var_76[var_1111][1][2];
                if (var_1111 == var_95 && var_1005 != 3) {
                    var_71[var_1114][var_1115] = 0;
                    var_71[var_1116][var_1117] = 0;
                    var_76[var_1109][4][1] = 0;
                    var_76[var_1109][4][2] = 0;
                    return [2 /*return*/];
                }
                if (var_1116 == 0 || var_1117 == 0) {
                    var_71[var_1114][var_1115] = 0;
                    var_71[var_1116][var_1117] = 0;
                    var_76[var_1109][4][1] = 0;
                    var_76[var_1109][4][2] = 0;
                    return [2 /*return*/];
                }
            }
            if (var_1114 == 0 || var_1115 == 0) {
                return [2 /*return*/];
            }
            if (var_1110 == var_95 && var_1005 != 3) {
                return [2 /*return*/];
            }
            if (var_1116 == 0 || var_1117 == 0) {
                var_1116 = var_76[var_1111][1][1];
                var_1117 = var_76[var_1111][1][2];
                if (var_1111 == var_95 && var_1005 != 3) {
                    return [2 /*return*/];
                }
                if (var_1116 == 0 || var_1117 == 0) {
                    var_71[var_1114][var_1115] = 0;
                    var_71[var_1116][var_1117] = 0;
                    return [2 /*return*/];
                }
            }
            var_1120 = var_1114;
            var_1121 = var_1115;
            var_1125 = var_1117 - var_1115 - 1;
            var_1126 = rnd(var_1125);
            var_1126 = var_1126 + 1;
            for (cnt1_20 = 0; cnt1_20 < var_1126; ++cnt1_20) {
                var_71[var_1120][var_1121] = 14;
                var_1121 = var_1121 + 1;
            }
            if (var_1114 == var_1116) {
                var_1124 = 0;
            }
            if (var_1114 > var_1116) {
                var_1124 = 1;
            }
            if (var_1114 < var_1116) {
                var_1124 = 2;
            }
            for (cnt1_21 = 0; cnt1_21 < 10; ++cnt1_21) {
                var_71[var_1120][var_1121] = 14;
                if (var_1120 == var_1116) {
                    break;
                }
                if (var_1124 == 1) {
                    var_1120 = var_1120 - 1;
                    if (var_1120 < 0) {
                        var_1120 = 0;
                    }
                }
                if (var_1124 == 2) {
                    var_1120 = var_1120 + 1;
                }
            }
            for (cnt1_22 = 0; cnt1_22 < 30; ++cnt1_22) {
                var_71[var_1120][var_1121] = 14;
                if (var_1121 == var_1117) {
                    break;
                }
                var_1121 = var_1121 + 1;
            }
            return [2 /*return*/];
        });
    });
}
function func252() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_23, cnt2_12;
        return __generator(this, function (_a) {
            dbgprt(252);
            var_1128 = 1;
            for (cnt1_23 = 0; cnt1_23 < var_32; ++cnt1_23) {
                var_1129 = 1;
                for (cnt2_12 = 0; cnt2_12 < var_31; ++cnt2_12) {
                    if (var_71[var_1129][var_1128] == 14) {
                        var_1130 = var_1129 - 1;
                        if (var_1130 < 0) {
                            var_1130 = 0;
                        }
                        var_1131 = var_1129 + 1;
                        if (var_1131 > var_31) {
                            var_1131 = var_31;
                        }
                        var_1132 = var_1128 - 1;
                        if (var_1132 < 0) {
                            var_1132 = 0;
                        }
                        var_1133 = var_1128 + 1;
                        if (var_1133 > var_32) {
                            var_1133 = var_32;
                        }
                        if (var_71[var_1130][var_1128] != 14 && var_71[var_1131][var_1128] != 14 && var_71[var_1129][var_1132] != 14 && var_71[var_1129][var_1133] != 14) {
                            var_71[var_1129][var_1128] = 0;
                        }
                    }
                    var_1129 = var_1129 + 1;
                }
                var_1128 = var_1128 + 1;
            }
            return [2 /*return*/];
        });
    });
}
function func253() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_24;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(253);
                    var_1134 = 0;
                    var_447 = 1;
                    for (cnt1_24 = 0; cnt1_24 < 12; ++cnt1_24) {
                        if (var_493[var_447] == 1) {
                            var_1134 = var_1134 + 1;
                        }
                        var_447 = var_447 + 1;
                    }
                    if (!(var_1134 < 6)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func007()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    if (!(var_493[1] == 1)) return [3 /*break*/, 4];
                    if (!(var_493[2] == 0 || var_493[3] == 0 || var_493[4] == 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func007()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    if (!(var_493[5] == 1)) return [3 /*break*/, 6];
                    if (!(var_493[6] == 0 || var_493[7] == 0 || var_493[8] == 1)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func007()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
                case 6:
                    if (!(var_493[9] == 1)) return [3 /*break*/, 8];
                    if (!(var_493[10] == 0 || var_493[11] == 0 || var_493[12] == 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func007()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
                case 8:
                    if (!(var_95 == 1 && var_1005 == 2)) return [3 /*break*/, 10];
                    if (!(var_493[2] != 1 && var_493[3] != 1)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func007()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
                case 10:
                    if (!(var_95 == 1 && var_1005 == 0)) return [3 /*break*/, 12];
                    if (!(var_493[5] != 1 && var_493[9] != 1)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func007()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
                case 12:
                    if (!(var_95 == 4 && var_1005 == 1)) return [3 /*break*/, 14];
                    if (!(var_493[2] != 1 && var_493[3] != 1)) return [3 /*break*/, 14];
                    return [4 /*yield*/, func007()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
                case 14:
                    if (!(var_95 == 4 && var_1005 == 0)) return [3 /*break*/, 16];
                    if (!(var_493[8] != 1 && var_493[12] != 1)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func007()];
                case 15:
                    _a.sent();
                    return [2 /*return*/];
                case 16:
                    if (!(var_95 == 5 && var_1005 == 2)) return [3 /*break*/, 18];
                    if (!(var_493[6] != 1 && var_493[7] != 1)) return [3 /*break*/, 18];
                    return [4 /*yield*/, func007()];
                case 17:
                    _a.sent();
                    return [2 /*return*/];
                case 18:
                    if (!(var_95 == 5 && var_1005 == 0)) return [3 /*break*/, 20];
                    if (!(var_493[9] != 1)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func007()];
                case 19:
                    _a.sent();
                    return [2 /*return*/];
                case 20:
                    if (!(var_95 == 5 && var_1005 == 3)) return [3 /*break*/, 22];
                    if (!(var_493[1] != 1)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func007()];
                case 21:
                    _a.sent();
                    return [2 /*return*/];
                case 22:
                    if (!(var_95 == 8 && var_1005 == 1)) return [3 /*break*/, 24];
                    if (!(var_493[6] != 1 && var_493[7] != 1)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func007()];
                case 23:
                    _a.sent();
                    return [2 /*return*/];
                case 24:
                    if (!(var_95 == 8 && var_1005 == 0)) return [3 /*break*/, 26];
                    if (!(var_493[12] != 1)) return [3 /*break*/, 26];
                    return [4 /*yield*/, func007()];
                case 25:
                    _a.sent();
                    return [2 /*return*/];
                case 26:
                    if (!(var_95 == 8 && var_1005 == 3)) return [3 /*break*/, 28];
                    if (!(var_493[4] != 1)) return [3 /*break*/, 28];
                    return [4 /*yield*/, func007()];
                case 27:
                    _a.sent();
                    return [2 /*return*/];
                case 28:
                    if (!(var_95 == 9 && var_1005 == 2)) return [3 /*break*/, 30];
                    if (!(var_493[10] != 1 && var_493[11] != 1)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func007()];
                case 29:
                    _a.sent();
                    return [2 /*return*/];
                case 30:
                    if (!(var_95 == 9 && var_1005 == 3)) return [3 /*break*/, 32];
                    if (!(var_493[1] != 1 && var_493[5] != 1)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func007()];
                case 31:
                    _a.sent();
                    return [2 /*return*/];
                case 32:
                    if (!(var_95 == 12 && var_1005 == 1)) return [3 /*break*/, 34];
                    if (!(var_493[10] != 1 && var_493[11] != 1)) return [3 /*break*/, 34];
                    return [4 /*yield*/, func007()];
                case 33:
                    _a.sent();
                    return [2 /*return*/];
                case 34:
                    if (!(var_95 == 12 && var_1005 == 3)) return [3 /*break*/, 36];
                    if (!(var_493[4] != 1 && var_493[8] != 1)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func007()];
                case 35:
                    _a.sent();
                    return [2 /*return*/];
                case 36:
                    if (!(var_95 == 5 && var_493[1] == 1)) return [3 /*break*/, 38];
                    if (!(var_493[2] == 0 && var_493[3] == 0 && var_493[4] == 0)) return [3 /*break*/, 38];
                    return [4 /*yield*/, func007()];
                case 37:
                    _a.sent();
                    return [2 /*return*/];
                case 38:
                    if (!(var_95 == 5 && var_493[9] == 1)) return [3 /*break*/, 40];
                    if (!(var_493[10] == 0 && var_493[11] == 0 && var_493[12] == 0)) return [3 /*break*/, 40];
                    return [4 /*yield*/, func007()];
                case 39:
                    _a.sent();
                    return [2 /*return*/];
                case 40:
                    if (!(var_95 == 8 && var_493[4] == 1)) return [3 /*break*/, 42];
                    if (!(var_493[1] == 0 && var_493[2] == 0 && var_493[3] == 0)) return [3 /*break*/, 42];
                    return [4 /*yield*/, func007()];
                case 41:
                    _a.sent();
                    return [2 /*return*/];
                case 42:
                    if (!(var_95 == 8 && var_493[12] == 1)) return [3 /*break*/, 44];
                    if (!(var_493[9] == 0 && var_493[10] == 0 && var_493[11] == 0)) return [3 /*break*/, 44];
                    return [4 /*yield*/, func007()];
                case 43:
                    _a.sent();
                    return [2 /*return*/];
                case 44:
                    if (!(var_493[1] == 1)) return [3 /*break*/, 47];
                    if (!(var_493[2] == 1 || var_493[3] == 1 || var_493[5] == 1 || var_493[9] == 1)) return [3 /*break*/, 45];
                    var_1135 = 1;
                    return [3 /*break*/, 47];
                case 45: return [4 /*yield*/, func007()];
                case 46:
                    _a.sent();
                    return [2 /*return*/];
                case 47:
                    if (!(var_493[2] == 1)) return [3 /*break*/, 50];
                    if (!(var_493[1] == 1 || var_493[3] == 1 || var_493[4] == 1 || var_493[6] == 1 || var_493[10] == 1)) return [3 /*break*/, 48];
                    var_1135 = 1;
                    return [3 /*break*/, 50];
                case 48: return [4 /*yield*/, func007()];
                case 49:
                    _a.sent();
                    return [2 /*return*/];
                case 50:
                    if (!(var_493[3] == 1)) return [3 /*break*/, 53];
                    if (!(var_493[1] == 1 || var_493[2] == 1 || var_493[4] == 1 || var_493[7] == 1 || var_493[11] == 1)) return [3 /*break*/, 51];
                    var_1135 = 1;
                    return [3 /*break*/, 53];
                case 51: return [4 /*yield*/, func007()];
                case 52:
                    _a.sent();
                    return [2 /*return*/];
                case 53:
                    if (!(var_493[4] == 1)) return [3 /*break*/, 56];
                    if (!(var_493[2] == 1 || var_493[3] == 1 || var_493[8] == 1 || var_493[12] == 1)) return [3 /*break*/, 54];
                    var_1135 = 1;
                    return [3 /*break*/, 56];
                case 54: return [4 /*yield*/, func007()];
                case 55:
                    _a.sent();
                    return [2 /*return*/];
                case 56:
                    if (!(var_493[5] == 1)) return [3 /*break*/, 59];
                    if (!(var_493[1] == 1 || var_493[6] == 1 || var_493[7] == 1 || var_493[9] == 1)) return [3 /*break*/, 57];
                    var_1135 = 1;
                    return [3 /*break*/, 59];
                case 57: return [4 /*yield*/, func007()];
                case 58:
                    _a.sent();
                    return [2 /*return*/];
                case 59:
                    if (!(var_493[6] == 1)) return [3 /*break*/, 62];
                    if (!(var_493[2] == 1 || var_493[7] == 1 || var_493[8] == 1 || var_493[10] == 1)) return [3 /*break*/, 60];
                    var_1135 = 1;
                    return [3 /*break*/, 62];
                case 60: return [4 /*yield*/, func007()];
                case 61:
                    _a.sent();
                    return [2 /*return*/];
                case 62:
                    if (!(var_493[7] == 1)) return [3 /*break*/, 65];
                    if (!(var_493[3] == 1 || var_493[5] == 1 || var_493[6] == 1 || var_493[11] == 1)) return [3 /*break*/, 63];
                    var_1135 = 1;
                    return [3 /*break*/, 65];
                case 63: return [4 /*yield*/, func007()];
                case 64:
                    _a.sent();
                    return [2 /*return*/];
                case 65:
                    if (!(var_493[8] == 1)) return [3 /*break*/, 68];
                    if (!(var_493[4] == 1 || var_493[6] == 1 || var_493[7] == 1 || var_493[12] == 1)) return [3 /*break*/, 66];
                    var_1135 = 1;
                    return [3 /*break*/, 68];
                case 66: return [4 /*yield*/, func007()];
                case 67:
                    _a.sent();
                    return [2 /*return*/];
                case 68:
                    if (!(var_493[9] == 1)) return [3 /*break*/, 71];
                    if (!(var_493[1] == 1 || var_493[5] == 1 || var_493[10] == 1 || var_493[11] == 1)) return [3 /*break*/, 69];
                    var_1135 = 1;
                    return [3 /*break*/, 71];
                case 69: return [4 /*yield*/, func007()];
                case 70:
                    _a.sent();
                    return [2 /*return*/];
                case 71:
                    if (!(var_493[10] == 1)) return [3 /*break*/, 74];
                    if (!(var_493[2] == 1 || var_493[6] == 1 || var_493[9] == 1 || var_493[11] == 1 || var_493[12] == 1)) return [3 /*break*/, 72];
                    var_1135 = 1;
                    return [3 /*break*/, 74];
                case 72: return [4 /*yield*/, func007()];
                case 73:
                    _a.sent();
                    return [2 /*return*/];
                case 74:
                    if (!(var_493[11] == 1)) return [3 /*break*/, 77];
                    if (!(var_493[3] == 1 || var_493[7] == 1 || var_493[9] == 1 || var_493[10] == 1 || var_493[12] == 1)) return [3 /*break*/, 75];
                    var_1135 = 1;
                    return [3 /*break*/, 77];
                case 75: return [4 /*yield*/, func007()];
                case 76:
                    _a.sent();
                    return [2 /*return*/];
                case 77:
                    if (!(var_493[12] == 1)) return [3 /*break*/, 80];
                    if (!(var_493[4] == 1 || var_493[8] == 1 || var_493[10] == 1 || var_493[11] == 1)) return [3 /*break*/, 78];
                    var_1135 = 1;
                    return [3 /*break*/, 80];
                case 78: return [4 /*yield*/, func007()];
                case 79:
                    _a.sent();
                    return [2 /*return*/];
                case 80: return [4 /*yield*/, func008()];
                case 81:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func254() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_25, cnt2_13, cnt1_26, cnt2_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(254);
                    return [4 /*yield*/, func294()];
                case 1:
                    _a.sent();
                    var_764 = 0;
                    var_1075 = 0;
                    for (cnt1_25 = 0; cnt1_25 < var_32; ++cnt1_25) {
                        var_1076 = 0;
                        for (cnt2_13 = 0; cnt2_13 < var_31; ++cnt2_13) {
                            if (peek(var_1136, var_764) == 35) {
                                var_1137[var_1076][var_1075] = 0;
                            }
                            if (peek(var_1136, var_764) == 94) {
                                var_1137[var_1076][var_1075] = 13;
                            }
                            var_1076 = var_1076 + 1;
                            var_764 = var_764 + 1;
                        }
                        var_1075 = var_1075 + 1;
                    }
                    var_1128 = 1;
                    for (cnt1_26 = 0; cnt1_26 < var_32; ++cnt1_26) {
                        var_1129 = 1;
                        for (cnt2_14 = 0; cnt2_14 < var_31; ++cnt2_14) {
                            if (var_71[var_1129][var_1128] == 0 && var_1137[var_1129][var_1128] == 13) {
                                var_71[var_1129][var_1128] = 13;
                            }
                            var_1129 = var_1129 + 1;
                        }
                        var_1128 = var_1128 + 1;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function func255() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_27, cnt2_15, cnt1_28, cnt2_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(255);
                    if (!(var_90 == 2)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func295()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(var_90 == 3)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func296()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(var_90 == 4)) return [3 /*break*/, 6];
                    return [4 /*yield*/, func297()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(var_90 == 5)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func298()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    if (!(var_90 == 6)) return [3 /*break*/, 10];
                    return [4 /*yield*/, func299()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    if (!(var_90 == 99)) return [3 /*break*/, 12];
                    return [4 /*yield*/, func299()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    var_764 = 0;
                    var_1075 = 0;
                    for (cnt1_27 = 0; cnt1_27 < var_32; ++cnt1_27) {
                        var_1076 = 0;
                        for (cnt2_15 = 0; cnt2_15 < var_31; ++cnt2_15) {
                            if (peek(var_1136, var_764) == 35) {
                                var_1137[var_1076][var_1075] = 0;
                            }
                            if (peek(var_1136, var_764) == 94) {
                                var_1137[var_1076][var_1075] = 13;
                            }
                            var_1076 = var_1076 + 1;
                            var_764 = var_764 + 1;
                        }
                        var_1075 = var_1075 + 1;
                    }
                    var_1128 = 1;
                    for (cnt1_28 = 0; cnt1_28 < var_32; ++cnt1_28) {
                        var_1129 = 1;
                        for (cnt2_16 = 0; cnt2_16 < var_31; ++cnt2_16) {
                            if (var_71[var_1129][var_1128] == 0 && var_1137[var_1129][var_1128] == 13) {
                                var_71[var_1129][var_1128] = 13;
                            }
                            var_1129 = var_1129 + 1;
                        }
                        var_1128 = var_1128 + 1;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function func256() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(256);
            var_1096 = 1;
            var_1098 = 1;
            var_1100 = 1;
            var_1102 = 1;
            var_1082 = 12;
            var_1084 = 10;
            var_983 = "############";
            var_983 = var_983 + "############";
            var_983 = var_983 + "############";
            var_983 = var_983 + "############";
            var_983 = var_983 + "############";
            var_983 = var_983 + "############";
            var_983 = var_983 + "############";
            var_983 = var_983 + "############";
            var_983 = var_983 + "############";
            var_983 = var_983 + "############";
            return [2 /*return*/];
        });
    });
}
function func257() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_29, cnt2_17;
        return __generator(this, function (_a) {
            dbgprt(257);
            var_1082 = rnd(4);
            var_1082 = var_1082 + 5;
            var_1084 = rnd(4);
            var_1084 = var_1084 + 5;
            var_1096 = var_1082 - 2;
            var_1098 = var_1082 - 2;
            var_1100 = var_1084 - 2;
            var_1102 = var_1084 - 2;
            var_983 = "";
            var_1138 = 1;
            for (cnt1_29 = 0; cnt1_29 < var_1084; ++cnt1_29) {
                var_1139 = 1;
                for (cnt2_17 = 0; cnt2_17 < var_1082; ++cnt2_17) {
                    if (var_1138 == 1 || var_1138 == var_1084) {
                        if (var_1139 == 1 || var_1139 == var_1082) {
                            var_983 = var_983 + "#";
                        }
                    }
                    if (var_1138 != 1 && var_1138 != var_1084) {
                        if (var_1139 != 1 && var_1139 != var_1082) {
                            var_983 = var_983 + ".";
                        }
                    }
                    if (var_1138 == 1 && var_1139 != 1 && var_1139 != var_1082) {
                        var_983 = var_983 + "8";
                    }
                    if (var_1138 == var_1084 && var_1139 != 1 && var_1139 != var_1082) {
                        var_983 = var_983 + "2";
                    }
                    if (var_1139 == 1 && var_1138 != 1 && var_1138 != var_1084) {
                        var_983 = var_983 + "4";
                    }
                    if (var_1139 == var_1082 && var_1138 != 1 && var_1138 != var_1084) {
                        var_983 = var_983 + "6";
                    }
                    var_1139 = var_1139 + 1;
                }
                var_1138 = var_1138 + 1;
            }
            return [2 /*return*/];
        });
    });
}
function func258() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(258);
            var_1096 = 8;
            var_1098 = 8;
            var_1100 = 3;
            var_1102 = 3;
            var_1082 = 10;
            var_1084 = 5;
            var_983 = "#88888888#";
            var_983 = var_983 + "4........6";
            var_983 = var_983 + "4...##...6";
            var_983 = var_983 + "4........6";
            var_983 = var_983 + "#22222222#";
            return [2 /*return*/];
        });
    });
}
function func259() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(259);
            var_1096 = 7;
            var_1098 = 7;
            var_1100 = 7;
            var_1102 = 7;
            var_1082 = 9;
            var_1084 = 9;
            var_983 = "#8888888#";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.#.#.#.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.#.#.#.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.#.#.#.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "#2222222#";
            return [2 /*return*/];
        });
    });
}
function func260() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(260);
            var_1096 = 8;
            var_1098 = 8;
            var_1100 = 3;
            var_1102 = 3;
            var_1082 = 10;
            var_1084 = 5;
            var_983 = "#88888888#";
            var_983 = var_983 + "4........6";
            var_983 = var_983 + "4..#..#..6";
            var_983 = var_983 + "4........6";
            var_983 = var_983 + "#22222222#";
            return [2 /*return*/];
        });
    });
}
function func261() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(261);
            var_1096 = 2;
            var_1098 = 2;
            var_1100 = 2;
            var_1102 = 2;
            var_1082 = 9;
            var_1084 = 8;
            var_983 = "##8###8##";
            var_983 = var_983 + "#.......#";
            var_983 = var_983 + "#...#...#";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "#...#...#";
            var_983 = var_983 + "#.......#";
            var_983 = var_983 + "##2###2##";
            return [2 /*return*/];
        });
    });
}
function func262() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(262);
            var_1096 = 2;
            var_1098 = 2;
            var_1100 = 2;
            var_1102 = 2;
            var_1082 = 10;
            var_1084 = 8;
            var_983 = "####88####";
            var_983 = var_983 + "#........#";
            var_983 = var_983 + "#..#..#..#";
            var_983 = var_983 + "4........6";
            var_983 = var_983 + "4........6";
            var_983 = var_983 + "#..#..#..#";
            var_983 = var_983 + "#........#";
            var_983 = var_983 + "####22####";
            return [2 /*return*/];
        });
    });
}
function func263() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(263);
            var_1096 = 2;
            var_1098 = 2;
            var_1100 = 2;
            var_1102 = 2;
            var_1082 = 10;
            var_1084 = 8;
            var_983 = "####88####";
            var_983 = var_983 + "#........#";
            var_983 = var_983 + "#........#";
            var_983 = var_983 + "4...##...6";
            var_983 = var_983 + "4...##...6";
            var_983 = var_983 + "#........#";
            var_983 = var_983 + "#........#";
            var_983 = var_983 + "####22####";
            return [2 /*return*/];
        });
    });
}
function func264() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(264);
            var_1096 = 7;
            var_1098 = 7;
            var_1100 = 5;
            var_1102 = 5;
            var_1082 = 9;
            var_1084 = 7;
            var_983 = "#8888888#";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.#.#.#.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.#.#.#.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "#2222222#";
            return [2 /*return*/];
        });
    });
}
function func265() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(265);
            var_1096 = 5;
            var_1098 = 5;
            var_1100 = 3;
            var_1102 = 3;
            var_1082 = 7;
            var_1084 = 5;
            var_983 = "#88888#";
            var_983 = var_983 + "4.....6";
            var_983 = var_983 + "4.#.#.6";
            var_983 = var_983 + "4.....6";
            var_983 = var_983 + "#22222#";
            return [2 /*return*/];
        });
    });
}
function func266() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(266);
            var_1096 = 5;
            var_1098 = 5;
            var_1100 = 3;
            var_1102 = 3;
            var_1082 = 7;
            var_1084 = 5;
            var_983 = "#88888#";
            var_983 = var_983 + "4.....6";
            var_983 = var_983 + "4..#..6";
            var_983 = var_983 + "4.....6";
            var_983 = var_983 + "#22222#";
            return [2 /*return*/];
        });
    });
}
function func267() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(267);
            var_1096 = 5;
            var_1098 = 5;
            var_1100 = 4;
            var_1102 = 4;
            var_1082 = 7;
            var_1084 = 6;
            var_983 = "#88888#";
            var_983 = var_983 + "4.....6";
            var_983 = var_983 + "4.#...6";
            var_983 = var_983 + "4...#.6";
            var_983 = var_983 + "4.....6";
            var_983 = var_983 + "#22222#";
            return [2 /*return*/];
        });
    });
}
function func268() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(268);
            var_1096 = 5;
            var_1098 = 5;
            var_1100 = 4;
            var_1102 = 4;
            var_1082 = 7;
            var_1084 = 6;
            var_983 = "#88888#";
            var_983 = var_983 + "4.....6";
            var_983 = var_983 + "4...#.6";
            var_983 = var_983 + "4.#...6";
            var_983 = var_983 + "4.....6";
            var_983 = var_983 + "#22222#";
            return [2 /*return*/];
        });
    });
}
function func269() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(269);
            var_1096 = 7;
            var_1098 = 7;
            var_1100 = 7;
            var_1102 = 7;
            var_1082 = 9;
            var_1084 = 9;
            var_983 = "#8888888#";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.#.#...6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4...##..6";
            var_983 = var_983 + "4.#.....6";
            var_983 = var_983 + "4...#.#.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "#2222222#";
            return [2 /*return*/];
        });
    });
}
function func270() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(270);
            var_1096 = 7;
            var_1098 = 7;
            var_1100 = 7;
            var_1102 = 7;
            var_1082 = 9;
            var_1084 = 9;
            var_983 = "#8888888#";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4..#..#.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.#.....6";
            var_983 = var_983 + "4....##.6";
            var_983 = var_983 + "4..#....6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "#2222222#";
            return [2 /*return*/];
        });
    });
}
function func271() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(271);
            var_1096 = 7;
            var_1098 = 7;
            var_1100 = 5;
            var_1102 = 5;
            var_1082 = 9;
            var_1084 = 7;
            var_983 = "#8888888#";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.^^.^^.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.^^.^^.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "#2222222#";
            return [2 /*return*/];
        });
    });
}
function func272() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(272);
            var_1096 = 7;
            var_1098 = 7;
            var_1100 = 6;
            var_1102 = 6;
            var_1082 = 9;
            var_1084 = 8;
            var_983 = "#8888888#";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.^^....6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4....^^.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "#2222222#";
            return [2 /*return*/];
        });
    });
}
function func273() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(273);
            var_1096 = 8;
            var_1098 = 8;
            var_1100 = 7;
            var_1102 = 7;
            var_1082 = 10;
            var_1084 = 9;
            var_983 = "#88888888#";
            var_983 = var_983 + "4........6";
            var_983 = var_983 + "4..^..^..6";
            var_983 = var_983 + "4.^....^.6";
            var_983 = var_983 + "4........6";
            var_983 = var_983 + "4.^....^.6";
            var_983 = var_983 + "4..^..^..6";
            var_983 = var_983 + "4........6";
            var_983 = var_983 + "#22222222#";
            return [2 /*return*/];
        });
    });
}
function func274() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(274);
            var_1096 = 6;
            var_1098 = 6;
            var_1100 = 4;
            var_1102 = 4;
            var_1082 = 8;
            var_1084 = 6;
            var_983 = "#888888#";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "4..^.^.6";
            var_983 = var_983 + "4.^.^..6";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "#222222#";
            return [2 /*return*/];
        });
    });
}
function func275() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(275);
            var_1096 = 6;
            var_1098 = 6;
            var_1100 = 4;
            var_1102 = 4;
            var_1082 = 8;
            var_1084 = 6;
            var_983 = "#888888#";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "4.^..^.6";
            var_983 = var_983 + "4.^..^.6";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "#222222#";
            return [2 /*return*/];
        });
    });
}
function func276() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(276);
            var_1096 = 6;
            var_1098 = 6;
            var_1100 = 4;
            var_1102 = 4;
            var_1082 = 8;
            var_1084 = 6;
            var_983 = "#888888#";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "4.^^...6";
            var_983 = var_983 + "4...^^.6";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "#222222#";
            return [2 /*return*/];
        });
    });
}
function func277() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(277);
            var_1096 = 8;
            var_1098 = 8;
            var_1100 = 3;
            var_1102 = 3;
            var_1082 = 10;
            var_1084 = 5;
            var_983 = "#88888888#";
            var_983 = var_983 + "4........6";
            var_983 = var_983 + "4..^..^..6";
            var_983 = var_983 + "4........6";
            var_983 = var_983 + "#22222222#";
            return [2 /*return*/];
        });
    });
}
function func278() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(278);
            var_1096 = 7;
            var_1098 = 7;
            var_1100 = 7;
            var_1102 = 7;
            var_1082 = 9;
            var_1084 = 9;
            var_983 = "#8888888#";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.^...^.6";
            var_983 = var_983 + "4..^.^..6";
            var_983 = var_983 + "4.^.^.^.6";
            var_983 = var_983 + "4..^.^..6";
            var_983 = var_983 + "4...^.^.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "#2222222#";
            return [2 /*return*/];
        });
    });
}
function func279() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(279);
            var_1096 = 7;
            var_1098 = 7;
            var_1100 = 7;
            var_1102 = 7;
            var_1082 = 9;
            var_1084 = 9;
            var_983 = "#8888888#";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4.^.^...6";
            var_983 = var_983 + "4..^.^..6";
            var_983 = var_983 + "4.^.^.^.6";
            var_983 = var_983 + "4..^....6";
            var_983 = var_983 + "4.^..^^.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "#2222222#";
            return [2 /*return*/];
        });
    });
}
function func280() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(280);
            var_1096 = 7;
            var_1098 = 7;
            var_1100 = 7;
            var_1102 = 7;
            var_1082 = 9;
            var_1084 = 9;
            var_983 = "#8888888#";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "4...^.^.6";
            var_983 = var_983 + "4..^.^..6";
            var_983 = var_983 + "4.^.^.^.6";
            var_983 = var_983 + "4..^.^..6";
            var_983 = var_983 + "4.^...^.6";
            var_983 = var_983 + "4.......6";
            var_983 = var_983 + "#2222222#";
            return [2 /*return*/];
        });
    });
}
function func281() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(281);
            var_1096 = 6;
            var_1098 = 6;
            var_1100 = 4;
            var_1102 = 4;
            var_1082 = 8;
            var_1084 = 6;
            var_983 = "#888888#";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "4....^.6";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "#222222#";
            return [2 /*return*/];
        });
    });
}
function func282() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(282);
            var_1096 = 6;
            var_1098 = 6;
            var_1100 = 4;
            var_1102 = 4;
            var_1082 = 8;
            var_1084 = 6;
            var_983 = "#888888#";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "4..^...6";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "#222222#";
            return [2 /*return*/];
        });
    });
}
function func283() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(283);
            var_1096 = 6;
            var_1098 = 6;
            var_1100 = 4;
            var_1102 = 4;
            var_1082 = 8;
            var_1084 = 6;
            var_983 = "#888888#";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "4...^^.6";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "#222222#";
            return [2 /*return*/];
        });
    });
}
function func284() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(284);
            var_1096 = 6;
            var_1098 = 6;
            var_1100 = 4;
            var_1102 = 4;
            var_1082 = 8;
            var_1084 = 6;
            var_983 = "#888888#";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "4.^....6";
            var_983 = var_983 + "4.^....6";
            var_983 = var_983 + "4......6";
            var_983 = var_983 + "#222222#";
            return [2 /*return*/];
        });
    });
}
function func285() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(285);
            var_1096 = 2;
            var_1098 = 2;
            var_1100 = 2;
            var_1102 = 2;
            var_1082 = 6;
            var_1084 = 6;
            var_983 = "##88##";
            var_983 = var_983 + "#^..^#";
            var_983 = var_983 + "4....6";
            var_983 = var_983 + "4....6";
            var_983 = var_983 + "#^..^#";
            var_983 = var_983 + "##22##";
            return [2 /*return*/];
        });
    });
}
function func286() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(286);
            var_1096 = 4;
            var_1098 = 4;
            var_1100 = 4;
            var_1102 = 4;
            var_1082 = 6;
            var_1084 = 6;
            var_983 = "#8888#";
            var_983 = var_983 + "4....6";
            var_983 = var_983 + "4.^^.6";
            var_983 = var_983 + "4.^^.6";
            var_983 = var_983 + "4....6";
            var_983 = var_983 + "#2222#";
            return [2 /*return*/];
        });
    });
}
function func287() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(287);
            var_1096 = 1;
            var_1098 = 1;
            var_1100 = 1;
            var_1102 = 1;
            var_1082 = 9;
            var_1084 = 9;
            var_983 = "####9####";
            var_983 = var_983 + "#..jkl..#";
            var_983 = var_983 + "#.......#";
            var_983 = var_983 + "#d.III.g#";
            var_983 = var_983 + "5e.III.h7";
            var_983 = var_983 + "#f.III.i#";
            var_983 = var_983 + "#.......#";
            var_983 = var_983 + "#..abc..#";
            var_983 = var_983 + "####3####";
            return [2 /*return*/];
        });
    });
}
function func288() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(288);
            var_1096 = 1;
            var_1098 = 1;
            var_1100 = 1;
            var_1102 = 1;
            var_1082 = 30;
            var_1084 = 23;
            var_983 = "###################^^^########";
            var_983 = var_983 + "##########.########^^^111111##";
            var_983 = var_983 + "##########...######^^^111111##";
            var_983 = var_983 + "######........#####^^^111111##";
            var_983 = var_983 + "#######.......#####^^^111111##";
            var_983 = var_983 + "#######.......#####^^^111111##";
            var_983 = var_983 + "###################^^^111111##";
            var_983 = var_983 + "###################^^^111111##";
            var_983 = var_983 + "###################^^^111111##";
            var_983 = var_983 + "###################^^^111111##";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##########....################";
            var_983 = var_983 + "#########^#...################";
            var_983 = var_983 + "#######.#.....################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            return [2 /*return*/];
        });
    });
}
function func289() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(289);
            var_1096 = 1;
            var_1098 = 1;
            var_1100 = 1;
            var_1102 = 1;
            var_1082 = 30;
            var_1084 = 23;
            var_983 = "##############################";
            var_983 = var_983 + "##########.###################";
            var_983 = var_983 + "##########...#################";
            var_983 = var_983 + "######........################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##########....################";
            var_983 = var_983 + "#########^#...################";
            var_983 = var_983 + "#######.#.....################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            return [2 /*return*/];
        });
    });
}
function func290() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(290);
            var_1096 = 1;
            var_1098 = 1;
            var_1100 = 1;
            var_1102 = 1;
            var_1082 = 30;
            var_1084 = 23;
            var_983 = "##############################";
            var_983 = var_983 + "##########.###################";
            var_983 = var_983 + "##########...#################";
            var_983 = var_983 + "######........################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##########....################";
            var_983 = var_983 + "#########^#...################";
            var_983 = var_983 + "#######.#.....################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "##############################";
            return [2 /*return*/];
        });
    });
}
function func291() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(291);
            var_1096 = 1;
            var_1098 = 1;
            var_1100 = 1;
            var_1102 = 1;
            var_1082 = 30;
            var_1084 = 23;
            var_983 = "##############################";
            var_983 = var_983 + "##########.###################";
            var_983 = var_983 + "##########...#################";
            var_983 = var_983 + "######........################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "######.###....################";
            var_983 = var_983 + "######.##^#...################";
            var_983 = var_983 + "######..#.....################";
            var_983 = var_983 + "######........################";
            var_983 = var_983 + "######........################";
            var_983 = var_983 + "######........################";
            var_983 = var_983 + "##############################";
            return [2 /*return*/];
        });
    });
}
function func292() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(292);
            var_1096 = 1;
            var_1098 = 1;
            var_1100 = 1;
            var_1102 = 1;
            var_1082 = 30;
            var_1084 = 23;
            var_983 = "##############################";
            var_983 = var_983 + "##########.###################";
            var_983 = var_983 + "##########...#################";
            var_983 = var_983 + "######........################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "#######.......################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "##############################";
            var_983 = var_983 + "#####..###....################";
            var_983 = var_983 + "#####..##^#...################";
            var_983 = var_983 + "#####...#.....################";
            var_983 = var_983 + "#####.........################";
            var_983 = var_983 + "#####.........################";
            var_983 = var_983 + "#####.........################";
            var_983 = var_983 + "##############################";
            return [2 /*return*/];
        });
    });
}
function func293() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(293);
                    var_983 = sdim(3000);
                    var_71 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_983 = "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    var_983 = var_983 + "########################################################";
                    return [4 /*yield*/, func323()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func294() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(294);
            var_1136 = sdim(3000);
            var_1137 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_1136 = "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "########################################################";
            return [2 /*return*/];
        });
    });
}
function func295() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(295);
            var_1136 = sdim(3000);
            var_1137 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_1136 = "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "###############^^^^^^^^^################################";
            var_1136 = var_1136 + "#######################^^^^^^^^^^#######################";
            var_1136 = var_1136 + "####################^^^^########^^^^^^^^^^^#############";
            var_1136 = var_1136 + "################^^^^^#####################^^^^^^^^^^####";
            var_1136 = var_1136 + "##########^^^^^^^##################################^^^^#";
            var_1136 = var_1136 + "######^^^^^#############################################";
            var_1136 = var_1136 + "##########^^^###########################################";
            var_1136 = var_1136 + "############^^^^########################################";
            var_1136 = var_1136 + "###############^^^^^^###################################";
            var_1136 = var_1136 + "####################^^^^^^##############################";
            var_1136 = var_1136 + "#########################^^^^^^^########################";
            var_1136 = var_1136 + "###############################^^^^^^^##################";
            var_1136 = var_1136 + "#####################################^^^^^^#############";
            var_1136 = var_1136 + "##########################################^^^^^#########";
            var_1136 = var_1136 + "#########################################^^###^^^^^^^^^#";
            var_1136 = var_1136 + "####################################^^^^^^##############";
            var_1136 = var_1136 + "##################################^^^###################";
            var_1136 = var_1136 + "#################################^^#####################";
            var_1136 = var_1136 + "################################^^######################";
            var_1136 = var_1136 + "###########################^^^^^^#######################";
            var_1136 = var_1136 + "#####################^^^^^^^############################";
            var_1136 = var_1136 + "###############^^^^^^^#####^^^^^########################";
            var_1136 = var_1136 + "########^^^^^^^^###############^^^^^^###################";
            var_1136 = var_1136 + "######^^^###########################^^##################";
            var_1136 = var_1136 + "#####################################^^#################";
            var_1136 = var_1136 + "######################################^^^^^#############";
            var_1136 = var_1136 + "##########################################^^^^^#########";
            var_1136 = var_1136 + "##############################################^^^^^^^^^#";
            var_1136 = var_1136 + "###########################################^^^^#########";
            var_1136 = var_1136 + "######################################^^^^^^############";
            var_1136 = var_1136 + "################################^^^^^^^#################";
            var_1136 = var_1136 + "########################################################";
            return [2 /*return*/];
        });
    });
}
function func296() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(296);
            var_1136 = sdim(3000);
            var_1137 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_1136 = "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "###########################################^^^^^########";
            var_1136 = var_1136 + "##########################################^^^^^^^#######";
            var_1136 = var_1136 + "####################################^^^^^^^^^^^^^#######";
            var_1136 = var_1136 + "#################################^^^^#####^^^^^^^#######";
            var_1136 = var_1136 + "#############################^^^^^#########^^^^^########";
            var_1136 = var_1136 + "############################^^##########################";
            var_1136 = var_1136 + "########################^^^^^###########################";
            var_1136 = var_1136 + "######################^^^^^^^^^#########################";
            var_1136 = var_1136 + "#####################^^^^^^^^^^^########################";
            var_1136 = var_1136 + "#####################^^^^^^^^^^^^^^^^^##################";
            var_1136 = var_1136 + "#####################^^^^^^^^^^^#####^^^^^##############";
            var_1136 = var_1136 + "######################^^^^^^^^^##########^^^^^##########";
            var_1136 = var_1136 + "########################^^^^^################^^^^^^^^###";
            var_1136 = var_1136 + "#########################^###################^######^^^#";
            var_1136 = var_1136 + "#########################^^#################^^##########";
            var_1136 = var_1136 + "##########################^^###############^^###########";
            var_1136 = var_1136 + "###########################^^##############^############";
            var_1136 = var_1136 + "#####################^^^^^^^^^###########^^^############";
            var_1136 = var_1136 + "###################^^^#######^^^^^^#####^^^^^###########";
            var_1136 = var_1136 + "#################^^^##############^^^^^^^^^^^###########";
            var_1136 = var_1136 + "###############^^^#######################^^^############";
            var_1136 = var_1136 + "##############^^########################################";
            var_1136 = var_1136 + "#############^^^^#######################################";
            var_1136 = var_1136 + "############^^^^^^######################################";
            var_1136 = var_1136 + "############^^^^^^######################################";
            var_1136 = var_1136 + "############^^^^^^######################################";
            var_1136 = var_1136 + "#############^^^^#######################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            return [2 /*return*/];
        });
    });
}
function func297() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(297);
            var_1136 = sdim(3000);
            var_1137 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_1136 = "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "###############################################^^#######";
            var_1136 = var_1136 + "#############################################^^^########";
            var_1136 = var_1136 + "##########################################^^^^##########";
            var_1136 = var_1136 + "#######################################^^^^#############";
            var_1136 = var_1136 + "#################################^^^^^^^################";
            var_1136 = var_1136 + "#############################^^^^^######################";
            var_1136 = var_1136 + "#######################^^^^^^^##########################";
            var_1136 = var_1136 + "#################^^^^^^^################################";
            var_1136 = var_1136 + "###########^^^^^^^##^###################################";
            var_1136 = var_1136 + "######^^^^^^########^^##################################";
            var_1136 = var_1136 + "#####################^^^################################";
            var_1136 = var_1136 + "#######################^^^##############################";
            var_1136 = var_1136 + "#########################^^#############################";
            var_1136 = var_1136 + "##########################^^^^^#########################";
            var_1136 = var_1136 + "##############################^^^#######################";
            var_1136 = var_1136 + "################################^^^^####################";
            var_1136 = var_1136 + "###################################^^^^^################";
            var_1136 = var_1136 + "#######################################^^^##############";
            var_1136 = var_1136 + "#########################################^^^^^##########";
            var_1136 = var_1136 + "########################################^^###^^^^^^#####";
            var_1136 = var_1136 + "######################################^^^#########^^^^^#";
            var_1136 = var_1136 + "###################################^^^^#################";
            var_1136 = var_1136 + "##############################^^^^^^####################";
            var_1136 = var_1136 + "#########################^^^^^^#########################";
            var_1136 = var_1136 + "#####################^^^^^##############################";
            var_1136 = var_1136 + "#################^^^^^##################################";
            var_1136 = var_1136 + "##############^^^^######################################";
            var_1136 = var_1136 + "#############^^#########################################";
            var_1136 = var_1136 + "############^^##########################################";
            var_1136 = var_1136 + "###########^^###########################################";
            var_1136 = var_1136 + "##########^^############################################";
            var_1136 = var_1136 + "########################################################";
            return [2 /*return*/];
        });
    });
}
function func298() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(298);
            var_1136 = sdim(3000);
            var_1137 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_1136 = "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "#################################################^^^^^^#";
            var_1136 = var_1136 + "#############################################^^^^^^^^^^#";
            var_1136 = var_1136 + "##########################################^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#######################################^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#################################^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#############################^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "############################^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "############################^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "###########################^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "###########################^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "###########################^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "############################^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "###############################^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "#################################^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "####################################^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "######################################^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "##########################################^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "############################################^^^^^^^^^^^#";
            var_1136 = var_1136 + "############################################^^^^^^^^^^^#";
            var_1136 = var_1136 + "#############################################^^^^^^^^^^#";
            var_1136 = var_1136 + "##############################################^^^^^^^^^#";
            var_1136 = var_1136 + "##################################################^^^^^#";
            var_1136 = var_1136 + "#####################################################^^#";
            var_1136 = var_1136 + "######################################################^#";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            return [2 /*return*/];
        });
    });
}
function func299() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(299);
            var_1136 = sdim(3000);
            var_1137 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
            var_1136 = "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "########################################################";
            var_1136 = var_1136 + "######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "######^####^######^^^^^^^^^^#####^^^######^^^^^^##^^^^^#";
            var_1136 = var_1136 + "######^####^######^^^######^#####^^^######^^##^^##^^^^^#";
            var_1136 = var_1136 + "######^^^^^^######^^^######^^^^^^^^^######^^##^^##^^^^^#";
            var_1136 = var_1136 + "######^^##^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^##^^^^^^^^^#";
            var_1136 = var_1136 + "######^^##^########^#####^^^^^^^^^^^^####^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "######^^##^########^#####^^^^^^^^^#######^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "######^^^^^########^#####^^^^^^^^^#######^^^######^^^^^#";
            var_1136 = var_1136 + "######^^^^^########^^^^^^^^^^^^^^^^^^^^^^^^^######^^^^^#";
            var_1136 = var_1136 + "######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#####^^^^^#";
            var_1136 = var_1136 + "######^^^^^^^^^^#####^^^^^##^^^^^^^^^^###^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "######^##^####^^#####^^^^^##^^^^^^^^^^###^^#####^^^^^^^#";
            var_1136 = var_1136 + "######^##^####^^#####^^^^^^^^^^^^^^^^^^^^^^#####^^^^^^^#";
            var_1136 = var_1136 + "######^^^^^^^^^^^^^^^^^^^^^^^^^^^^#####^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "######^###^^^^^^^^^^^^^^^^^^^###^^#####^^####^^^^^^^^^^#";
            var_1136 = var_1136 + "######^###^^####^^^#####^^^^^###^^#####^^####^####^^^^^#";
            var_1136 = var_1136 + "######^###^^####^^^#####^^^^^###^^#####^^^^^^^####^^^^^#";
            var_1136 = var_1136 + "######^^^^^^^^^^^^^#####^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "######^^^#####^^^^^#####^^^^^^^^^^^^^^^^^^^^######^^^^^#";
            var_1136 = var_1136 + "######^^^#####^^^^^^^^^^^^^^^^^^^^^#####^^^^######^^^^^#";
            var_1136 = var_1136 + "######^^^#####^^^^^^^^^^^^^^^^^^^^^#####^^^^^#####^^^^^#";
            var_1136 = var_1136 + "######^^^^^^^^^^^^^^####^^^^^#####^^^^^^^^^^^#####^^^^^#";
            var_1136 = var_1136 + "######^###^^^^^^^^######^###^#####^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "######^###^^^^^^^^######^###^#####^#######^#####^^^^^^^#";
            var_1136 = var_1136 + "######^#####^^^^^^^^^^^^^^^^^^^^^^^#######^#####^^^^^^^#";
            var_1136 = var_1136 + "######^#####^^^^^^^^^^^^^^^^^^^^^^^#####^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "######^#####^^^^^^^^^^^^^^^^^##^^^^^^^^^^^^^^^^###^^^^^#";
            var_1136 = var_1136 + "######^^^^^^^^^^#####^^^^^^^^##^^^^^^^^^^^^^^^^###^^^^^#";
            var_1136 = var_1136 + "######^^^^^^^^^^#####^^^^^^^^##^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "######^^^^^^^^^^#####^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "######^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^#";
            var_1136 = var_1136 + "########################################################";
            return [2 /*return*/];
        });
    });
}
//# sourceMappingURL=func2.js.map