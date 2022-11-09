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
function func900() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(900);
            if (var_3517 != "") {
                var_3517 = "話文" + var_3517;
                tcpput(var_3517, var_1050);
                tcpput("\n", var_1050);
                gsel(30);
                objprm(0, "");
                gsel(0);
            }
            return [2 /*return*/];
        });
    });
}
function func901() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(901);
                    if (ginfo(2) != 30) {
                        return [2 /*return*/];
                    }
                    if (!(wparam == 13)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func900()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function func902() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(902);
                    if (!(var_494[1] != "")) return [3 /*break*/, 2];
                    var_3560 = var_494[1];
                    return [4 /*yield*/, func903()];
                case 1:
                    _a.sent();
                    var_3561 = "" + var_3562 + "" + var_494[1];
                    tcpput(var_3561, var_1050);
                    tcpput("\n", var_1050);
                    _a.label = 2;
                case 2:
                    if (!(var_494[2] != "")) return [3 /*break*/, 4];
                    var_3560 = var_494[2];
                    return [4 /*yield*/, func903()];
                case 3:
                    _a.sent();
                    var_3563 = "" + var_3562 + "" + var_494[2];
                    tcpput(var_3563, var_1050);
                    tcpput("\n", var_1050);
                    _a.label = 4;
                case 4: return [4 /*yield*/, func907()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func903() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(903);
            var_3562 = "行白";
            if (instr(var_3560, 0, "やっつけた") != (-1)) {
                var_3562 = "行水";
            }
            if (instr(var_3560, 0, "ﾃﾞｨｱﾎﾞﾛはﾚﾍﾞﾙ") != (-1)) {
                var_3562 = "行青";
            }
            if (instr(var_3560, 0, "モンスターハウスだ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "ﾊﾞｯﾄﾞ･ｶﾝﾊﾟﾆｰ･ﾊｳｽ だ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "ﾊｲｳｪｲｽﾀｰ･ﾙｰﾑ だ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "吸血鬼ハウスだ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "スタンドハウスだ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "杜王町ハウスだ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "水族館だ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "ファイトクラブだッ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "広大な砂漠だ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "幻覚の迷宮だ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "を踏んだ") != (-1)) {
                var_3562 = "行茶";
            }
            if (instr(var_3560, 0, "地面に何か書いてある。") != (-1)) {
                var_3562 = "行茶";
            }
            if (instr(var_3560, 0, "ﾃﾞｨｱﾎﾞﾛ　再起不能") != (-1)) {
                var_3562 = "行赤";
            }
            if (instr(var_3560, 0, "ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。") != (-1)) {
                var_3562 = "行赤";
            }
            if (instr(var_3560, 0, "さびしいよォォォォ……ボス") != (-1)) {
                var_3562 = "行赤";
            }
            if (instr(var_3560, 0, "電話ください………") != (-1)) {
                var_3562 = "行赤";
            }
            if (instr(var_3560, 0, "」は") != (-1)) {
                var_3562 = "行緑";
            }
            if (instr(var_3560, 0, "手で運ばれていった") != (-1)) {
                var_3562 = "行緑";
            }
            if (instr(var_3560, 0, "「イヒヒヒヒ") != (-1)) {
                var_3562 = "行緑";
            }
            if (instr(var_3560, 0, "注文しておいたよッ！」") != (-1)) {
                var_3562 = "行緑";
            }
            if (instr(var_3560, 0, "ディアボロはここよーッ！") != (-1)) {
                var_3562 = "行緑";
            }
            if (instr(var_3560, 0, "ここにいるわよォ～～～ッ！") != (-1)) {
                var_3562 = "行緑";
            }
            return [2 /*return*/];
        });
    });
}
function func904() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(904);
                    var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + var_91 + "階に降りた";
                    if (var_73[var_66][var_67] == 2) {
                        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + var_91 + "階に上った";
                    }
                    tcpput(var_3561, var_1050);
                    tcpput("\n", var_1050);
                    return [4 /*yield*/, func907()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func905() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(905);
                    if (var_62 == 1) {
                        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはホテルの外に出た";
                    }
                    if (var_62 == 2) {
                        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはレクイエムの大迷宮に入った";
                    }
                    if (var_62 == 3) {
                        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはさらなる試練に向かった";
                    }
                    if (var_62 == 4) {
                        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは一巡後の世界へ進んだ";
                    }
                    if (var_62 == 5) {
                        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + var_21 + "に入った";
                    }
                    tcpput(var_3561, var_1050);
                    tcpput("\n", var_1050);
                    return [4 /*yield*/, func907()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func906() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(906);
                    if (!(var_408 >= 1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func914()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(var_3564 == 1)) return [3 /*break*/, 4];
                    var_3564 = 0;
                    return [4 /*yield*/, func919()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (!(var_3565 == 1)) return [3 /*break*/, 6];
                    var_3565 = 0;
                    return [4 /*yield*/, func923()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!(var_1046 >= 1)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func917()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    });
}
function func907() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(907);
                    return [4 /*yield*/, func426()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func427()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func428()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func429()];
                case 4:
                    _a.sent();
                    if (var_270 == 135) {
                        if (var_358 == 122) {
                            var_357 = 101;
                        }
                        if (var_358 == 101) {
                            var_357 = 122;
                        }
                    }
                    var_3516 = dim(30);
                    var_3516[0] = var_410;
                    var_3516[1] = var_840;
                    var_3516[2] = var_352;
                    var_3516[3] = var_211;
                    var_3516[4] = var_566;
                    var_3516[5] = var_565;
                    var_3516[6] = var_567;
                    var_3516[7] = var_350;
                    var_3516[8] = var_91;
                    var_3516[9] = var_415;
                    var_3516[10] = var_62;
                    var_3516[11] = var_357;
                    var_3516[12] = var_233[var_553].Var4;
                    var_3516[13] = var_580;
                    var_3516[14] = var_358;
                    var_3516[15] = var_233[var_554].Var4;
                    var_3516[16] = var_581;
                    var_3516[17] = var_215;
                    var_3516[18] = var_233[var_555].Var4;
                    var_3516[19] = var_233[var_556].Var3;
                    var_3566 = 0;
                    var_3567 = "捨送";
                    for (cnt1_1 = 0; cnt1_1 < 20; ++cnt1_1) {
                        var_3567 = "" + var_3567 + "," + var_3516[var_3566];
                        var_3566++;
                    }
                    var_3567 = "" + var_3567 + "," + var_1170;
                    tcpput(var_3567, var_1050);
                    tcpput("\n", var_1050);
                    return [2 /*return*/];
            }
        });
    });
}
function func908() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_2;
        return __generator(this, function (_a) {
            dbgprt(908);
            var_3568 = 0;
            var_3569 = 0;
            for (cnt1_2 = 0; cnt1_2 < 22; ++cnt1_2) {
                getstr(var_1068[var_3569], var_3543, var_3568, 44);
                var_3568 = var_3568 + strsize;
                var_3569++;
            }
            var_3570 = var_3568;
            getstr(var_1068[25], var_3543, var_3568, 44);
            if (var_3525 == "相手の情報") {
                var_3525 = "" + var_1068[0] + "さんの情報";
                gsel(33);
                title(var_3525);
                gsel(0);
            }
            return [2 /*return*/];
        });
    });
}
function func909() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_1, cnt2_2, cnt2_3, cnt2_4, cnt2_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(909);
                    var_3571 = 0;
                    if (!(var_407 != 2)) return [3 /*break*/, 2];
                    var_3572 = 0;
                    var_3573 = int(var_1068[10]);
                    if (var_91 < var_3573) {
                        var_3572 = var_3573 - var_91;
                    }
                    if (var_91 > var_3573) {
                        var_3572 = var_91 - var_3573;
                    }
                    if (var_91 == var_3573) {
                        var_3572 = 0;
                    }
                    if (!(var_407 == 0 || var_3572 >= 3 || var_536 == 0 || var_62 == 0 || var_62 != int(var_1068[12]))) return [3 /*break*/, 2];
                    return [4 /*yield*/, func910()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    if (!(var_407 == 2)) return [3 /*break*/, 4];
                    var_3574 = 0;
                    if (var_3575 == "具０") {
                        var_3574 = 0;
                    }
                    if (var_3575 == "具１") {
                        var_3574 = 1;
                    }
                    if (var_3575 == "具２") {
                        var_3574 = 2;
                    }
                    if (var_3575 == "具３") {
                        var_3574 = 3;
                    }
                    if (var_3575 == "具４") {
                        var_3574 = 4;
                    }
                    if (var_3575 == "具５") {
                        var_3574 = 5;
                    }
                    if (var_3575 == "具６") {
                        var_3574 = 6;
                    }
                    if (var_3575 == "具７") {
                        var_3574 = 7;
                    }
                    var_3572 = 0;
                    var_3573 = var_1069[var_3574][10];
                    if (var_91 < var_3573) {
                        var_3572 = var_3573 - var_91;
                    }
                    if (var_91 > var_3573) {
                        var_3572 = var_91 - var_3573;
                    }
                    if (var_91 == var_3573) {
                        var_3572 = 0;
                    }
                    if (!(var_407 == 0 || var_3572 >= 5 || var_62 == 0 || var_62 != var_1069[var_3574][12])) return [3 /*break*/, 4];
                    return [4 /*yield*/, func910()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    if (var_3572 == 0) {
                        var_2164 = var_66;
                        var_2165 = var_67;
                        var_3571 = 1;
                    }
                    if (var_3572 == 1 || var_3571 == 0) {
                        for (cnt2_1 = 0; cnt2_1 < 500; ++cnt2_1) {
                            var_1550 = rnd(var_33);
                            var_230 = rnd(var_34);
                            if (var_71[var_1550][var_230] == var_201 && var_77[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0) {
                                var_2164 = var_1550;
                                var_2165 = var_230;
                                var_3571 = 1;
                                break;
                            }
                            if (var_94 == 8 && var_71[var_1550][var_230] == 14 && var_77[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0) {
                                var_2164 = var_1550;
                                var_2165 = var_230;
                                var_3571 = 1;
                                break;
                            }
                        }
                    }
                    if (var_3572 >= 2 || var_3571 == 0) {
                        for (cnt2_2 = 0; cnt2_2 < 500; ++cnt2_2) {
                            var_1550 = rnd(var_33);
                            var_230 = rnd(var_34);
                            if (var_71[var_1550][var_230] != 0 && var_71[var_1550][var_230] <= 12 && var_77[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_72[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0) {
                                var_2164 = var_1550;
                                var_2165 = var_230;
                                var_3571 = 1;
                                break;
                            }
                        }
                    }
                    if (var_3571 == 0) {
                        for (cnt2_3 = 0; cnt2_3 < 500; ++cnt2_3) {
                            var_1550 = rnd(var_33);
                            var_230 = rnd(var_34);
                            if (var_71[var_1550][var_230] == 14 && var_77[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_72[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0) {
                                var_2164 = var_1550;
                                var_2165 = var_230;
                                var_3571 = 1;
                                break;
                            }
                        }
                    }
                    if (var_3571 == 0) {
                        return [2 /*return*/];
                    }
                    var_2166 = var_2164 - 1;
                    if (var_2166 < 0) {
                        var_2166 = 0;
                    }
                    var_2167 = var_2164 + 1;
                    if (var_2167 > var_33) {
                        var_2167 = var_33;
                    }
                    var_2168 = var_2165 + 1;
                    if (var_2168 > var_34) {
                        var_2168 = var_34;
                    }
                    var_2169 = var_2165 - 1;
                    if (var_2169 < 0) {
                        var_2169 = 0;
                    }
                    var_2170 = 0;
                    if (var_2170 == 0 && var_77[var_2164][var_2165] == 0 && var_80[var_2164][var_2165] == 0 && var_73[var_2164][var_2165] == 0 && var_71[var_2164][var_2165] != 0 && var_71[var_2164][var_2165] != 13) {
                        var_2170 = 1;
                        var_1512 = var_2164;
                        var_1513 = var_2165;
                    }
                    if (var_2170 == 0 && var_77[var_2164][var_2168] == 0 && var_80[var_2164][var_2168] == 0 && var_73[var_2164][var_2168] == 0 && var_71[var_2164][var_2168] != 0 && var_71[var_2164][var_2168] != 13) {
                        var_2170 = 1;
                        var_1512 = var_2164;
                        var_1513 = var_2168;
                    }
                    if (var_2170 == 0 && var_77[var_2166][var_2165] == 0 && var_80[var_2166][var_2165] == 0 && var_73[var_2166][var_2165] == 0 && var_71[var_2166][var_2165] != 0 && var_71[var_2166][var_2165] != 13) {
                        var_2170 = 1;
                        var_1512 = var_2166;
                        var_1513 = var_2165;
                    }
                    if (var_2170 == 0 && var_77[var_2167][var_2165] == 0 && var_80[var_2167][var_2165] == 0 && var_73[var_2167][var_2165] == 0 && var_71[var_2167][var_2165] != 0 && var_71[var_2167][var_2165] != 13) {
                        var_2170 = 1;
                        var_1512 = var_2167;
                        var_1513 = var_2165;
                    }
                    if (var_2170 == 0 && var_77[var_2164][var_2169] == 0 && var_80[var_2164][var_2169] == 0 && var_73[var_2164][var_2169] == 0 && var_71[var_2164][var_2169] != 0 && var_71[var_2164][var_2169] != 13) {
                        var_2170 = 1;
                        var_1512 = var_2164;
                        var_1513 = var_2169;
                    }
                    if (var_2170 == 0 && var_77[var_2166][var_2168] == 0 && var_80[var_2166][var_2168] == 0 && var_73[var_2166][var_2168] == 0 && var_71[var_2166][var_2168] != 0 && var_71[var_2166][var_2168] != 13) {
                        var_2170 = 1;
                        var_1512 = var_2166;
                        var_1513 = var_2168;
                    }
                    if (var_2170 == 0 && var_77[var_2167][var_2168] == 0 && var_80[var_2167][var_2168] == 0 && var_73[var_2167][var_2168] == 0 && var_71[var_2167][var_2168] != 0 && var_71[var_2167][var_2168] != 13) {
                        var_2170 = 1;
                        var_1512 = var_2167;
                        var_1513 = var_2168;
                    }
                    if (var_2170 == 0 && var_77[var_2166][var_2169] == 0 && var_80[var_2166][var_2169] == 0 && var_73[var_2166][var_2169] == 0 && var_71[var_2166][var_2169] != 0 && var_71[var_2166][var_2169] != 13) {
                        var_2170 = 1;
                        var_1512 = var_2166;
                        var_1513 = var_2169;
                    }
                    if (var_2170 == 0 && var_77[var_2167][var_2169] == 0 && var_80[var_2167][var_2169] == 0 && var_73[var_2167][var_2169] == 0 && var_71[var_2167][var_2169] != 0 && var_71[var_2167][var_2169] != 13) {
                        var_2170 = 1;
                        var_1512 = var_2167;
                        var_1513 = var_2169;
                    }
                    if (var_2170 == 0 && var_77[var_2164][var_2165] == 0 && var_80[var_2164][var_2165] == 0 && var_73[var_2164][var_2165] == 0 && var_71[var_2164][var_2165] != 0 && var_71[var_2164][var_2165] != 13) {
                        var_2170 = 1;
                        var_1512 = var_2164;
                        var_1513 = var_2165;
                    }
                    if (!(var_2170 == 1)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func724()];
                case 5:
                    _a.sent();
                    var_2171 = var_854;
                    var_1385 = var_2171;
                    var_1386 = var_3518[1][0];
                    var_1249 = var_3518[1][13];
                    if (var_3518[1][0] == 0) {
                        var_3518[1][0] = 641;
                        var_1386 = 641;
                    }
                    DSPLAY(audio_id = 107);
                    var_271 = 1;
                    var_1511 = 1;
                    cnt2_4 = 0;
                    _a.label = 6;
                case 6:
                    if (!(cnt2_4 < 10)) return [3 /*break*/, 9];
                    return [4 /*yield*/, func337()];
                case 7:
                    _a.sent();
                    var_1511++;
                    _a.label = 8;
                case 8:
                    ++cnt2_4;
                    return [3 /*break*/, 6];
                case 9:
                    var_1511 = 0;
                    var_271 = 0;
                    var_77[var_1512][var_1513] = var_2171;
                    var_731 = 0;
                    for (cnt2_5 = 0; cnt2_5 < 30; ++cnt2_5) {
                        var_78[var_2171][var_731] = var_3518[1][var_731];
                        var_731++;
                    }
                    var_78[var_2171].Var1 = var_1512;
                    var_78[var_2171].Var2 = var_1513;
                    var_78[var_2171].Var9 = var_71[var_1512][var_1513];
                    var_78[var_2171].Var10 = 1;
                    var_78[var_2171].Var14 = 0;
                    if (!(var_78[var_2171].Var0 >= 800 && var_78[var_2171].Var0 < 900)) return [3 /*break*/, 11];
                    return [4 /*yield*/, func395()];
                case 10:
                    _a.sent();
                    var_78[var_2171].Var6 = var_858;
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
                    _a.label = 11;
                case 11: return [4 /*yield*/, func910()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func331()];
                case 13:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func910() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_6, cnt3_1;
        return __generator(this, function (_a) {
            dbgprt(910);
            var_408 = var_408 - 1;
            if (var_408 >= 1) {
                var_3576 = 1;
                var_3577 = 2;
                for (cnt2_6 = 0; cnt2_6 < var_408; ++cnt2_6) {
                    var_3578 = 0;
                    for (cnt3_1 = 0; cnt3_1 < 30; ++cnt3_1) {
                        var_3518[var_3576][var_3578] = var_3518[var_3577][var_3578];
                        var_3518[var_3577][var_3578] = 0;
                        var_3578++;
                    }
                    var_3576++;
                    var_3577++;
                }
            }
            return [2 /*return*/];
        });
    });
}
function func911() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_3, cnt1_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(911);
                    var_3519 = dim(30);
                    var_3519[0] = var_233[var_225].Var0;
                    if (var_62 == 3 && var_3519[0] == 112) {
                        if (var_91 >= 60 && var_91 <= 66) {
                            var_3519[0] = 394;
                        }
                    }
                    var_3519[1] = 0;
                    var_3519[2] = 0;
                    var_3519[3] = var_233[var_225].Var3;
                    var_3519[4] = var_233[var_225].Var4;
                    var_3519[5] = var_233[var_225].Var5;
                    var_3519[6] = var_233[var_225].Var6;
                    var_3519[7] = var_233[var_225].Var7;
                    var_3519[8] = 0;
                    var_3519[9] = var_233[var_225].Var9;
                    var_3519[10] = var_233[var_225].Var10;
                    var_3519[11] = 0;
                    var_3519[12] = var_233[var_225].Var12;
                    var_3519[13] = var_233[var_225].Var13;
                    var_3519[14] = var_233[var_225].Var14;
                    var_3519[15] = var_233[var_225].Var15;
                    var_3519[16] = var_233[var_225].Var16;
                    var_3519[17] = var_233[var_225].Var17;
                    var_3519[18] = var_233[var_225].Var18;
                    var_3519[19] = var_233[var_225].Var19;
                    var_3519[20] = var_233[var_225].Var20;
                    var_3519[21] = var_233[var_225].Var21;
                    var_3519[22] = var_233[var_225].Var22;
                    var_3519[23] = var_233[var_225].Var23;
                    var_3519[24] = var_233[var_225].Var24;
                    var_3519[25] = var_233[var_225].Var25;
                    var_3519[26] = var_233[var_225].Var26;
                    var_3519[27] = var_233[var_225].Var27;
                    var_3519[28] = var_233[var_225].Var28;
                    var_3519[29] = var_233[var_225].Var29;
                    var_1459 = var_233[var_225].Var0;
                    var_1249 = var_233[var_225].Var13;
                    var_3566 = 0;
                    var_3579 = "送具";
                    if (var_407 == 2) {
                        if (var_2323 == 0) {
                            var_3579 = "具０";
                        }
                        if (var_2323 == 1) {
                            var_3579 = "具１";
                        }
                        if (var_2323 == 2) {
                            var_3579 = "具２";
                        }
                        if (var_2323 == 3) {
                            var_3579 = "具３";
                        }
                        if (var_2323 == 4) {
                            var_3579 = "具４";
                        }
                        if (var_2323 == 5) {
                            var_3579 = "具５";
                        }
                        if (var_2323 == 6) {
                            var_3579 = "具６";
                        }
                        if (var_2323 == 7) {
                            var_3579 = "具７";
                        }
                    }
                    for (cnt1_3 = 0; cnt1_3 < 30; ++cnt1_3) {
                        var_3579 = "" + var_3579 + "," + var_3519[var_3566];
                        var_3566++;
                    }
                    item_list = var_233[var_225].Var0;
                    var_487 = var_233[var_225].Var13;
                    return [4 /*yield*/, func492()];
                case 1:
                    _a.sent();
                    var_3580 = item_name;
                    if (!(var_233[var_225].Var11 == 1)) return [3 /*break*/, 3];
                    var_106 = 1;
                    item_list = var_233[var_225].Var0;
                    return [4 /*yield*/, func492()];
                case 2:
                    _a.sent();
                    var_482 = 0;
                    var_482 = (var_233[var_225].Var3 + var_233[var_225].Var4) * 50;
                    if (var_233[var_225].Var19 > 1) {
                        var_482 = var_233[var_225].Var19 * 500 + var_482;
                    }
                    var_483 = var_483 + var_482;
                    var_107 = var_107 + var_483;
                    _a.label = 3;
                case 3:
                    var_1977 = 0;
                    if (!(var_553 == var_225)) return [3 /*break*/, 5];
                    var_476 = dim(40);
                    var_580 = var_580 - var_894;
                    var_894 = 0;
                    var_357 = 0;
                    return [4 /*yield*/, func494()];
                case 4:
                    _a.sent();
                    var_1977 = 1;
                    _a.label = 5;
                case 5:
                    if (!(var_554 == var_225)) return [3 /*break*/, 7];
                    var_477 = dim(40);
                    var_581 = var_581 - var_895;
                    var_895 = 0;
                    var_358 = 0;
                    return [4 /*yield*/, func494()];
                case 6:
                    _a.sent();
                    var_1977 = 1;
                    _a.label = 7;
                case 7:
                    if (!(var_555 == var_225)) return [3 /*break*/, 9];
                    var_478 = dim(40);
                    var_215 = 0;
                    return [4 /*yield*/, func494()];
                case 8:
                    _a.sent();
                    var_1977 = 1;
                    _a.label = 9;
                case 9:
                    if (var_556 == var_225) {
                        var_479 = dim(40);
                        var_410 = 0;
                        var_250 = 0;
                        var_1977 = 1;
                    }
                    if (!(var_1977 == 1)) return [3 /*break*/, 11];
                    item_list = var_233[var_225].Var0;
                    return [4 /*yield*/, func106()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11: return [4 /*yield*/, func430()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func433()];
                case 13:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「" + var_3580 + "」は";
                    comments_row2 = "ﾑｰﾃﾞｨｰﾌﾞﾙｰｽの手で運ばれていった";
                    var_198 = 1;
                    var_300 = 0;
                    tcpput(var_3579, var_1050);
                    tcpput("\n", var_1050);
                    return [4 /*yield*/, func047()];
                case 14:
                    _a.sent();
                    var_198 = 0;
                    var_300 = 0;
                    var_1457 = var_66;
                    var_1458 = var_67;
                    var_271 = 1;
                    var_1460 = 1;
                    cnt1_4 = 0;
                    _a.label = 15;
                case 15:
                    if (!(cnt1_4 < 12)) return [3 /*break*/, 18];
                    return [4 /*yield*/, func337()];
                case 16:
                    _a.sent();
                    var_1460++;
                    _a.label = 17;
                case 17:
                    ++cnt1_4;
                    return [3 /*break*/, 15];
                case 18:
                    var_271 = 0;
                    var_1460 = 0;
                    if (var_225 < var_2300 && var_2301 == 0) {
                        var_2300 = var_2300 - 1;
                    }
                    if (var_225 < var_2256 && var_2301 == 1) {
                        var_2256 = var_2256 - 1;
                    }
                    var_225 = var_2300;
                    if (var_2301 == 1) {
                        var_220 = 1;
                    }
                    if (var_2301 == 2) {
                        var_234 = 1;
                    }
                    item_list = var_2258;
                    return [4 /*yield*/, func506()];
                case 19:
                    _a.sent();
                    if (!(var_2254 == 1)) return [3 /*break*/, 21];
                    var_2254 = 0;
                    return [4 /*yield*/, func508()];
                case 20:
                    _a.sent();
                    _a.label = 21;
                case 21:
                    var_217 = 1;
                    return [4 /*yield*/, func019()];
                case 22:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func912() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_5;
        return __generator(this, function (_a) {
            dbgprt(912);
            var_3519 = dim(30);
            var_3519[0] = var_233[var_225].Var0;
            var_3519[1] = 0;
            var_3519[2] = 0;
            var_3519[3] = var_233[var_225].Var3;
            var_3519[4] = var_233[var_225].Var4;
            var_3519[5] = var_233[var_225].Var5;
            var_3519[6] = var_233[var_225].Var6;
            var_3519[7] = var_233[var_225].Var7;
            var_3519[8] = 0;
            var_3519[9] = var_233[var_225].Var9;
            var_3519[10] = var_233[var_225].Var10;
            var_3519[11] = 0;
            var_3519[12] = var_233[var_225].Var12;
            var_3519[13] = var_233[var_225].Var13;
            var_3519[14] = var_233[var_225].Var14;
            var_3519[15] = var_233[var_225].Var15;
            var_3519[16] = var_233[var_225].Var16;
            var_3519[17] = var_233[var_225].Var17;
            var_3519[18] = var_233[var_225].Var18;
            var_3519[19] = var_233[var_225].Var19;
            var_3519[20] = var_233[var_225].Var20;
            var_3519[21] = var_233[var_225].Var21;
            var_3519[22] = var_233[var_225].Var22;
            var_3519[23] = var_233[var_225].Var23;
            var_3519[24] = var_233[var_225].Var24;
            var_3519[25] = var_233[var_225].Var25;
            var_3519[26] = var_233[var_225].Var26;
            var_3519[27] = var_233[var_225].Var27;
            var_3519[28] = var_233[var_225].Var28;
            var_3519[29] = var_233[var_225].Var29;
            var_1459 = var_233[var_225].Var0;
            var_1249 = var_233[var_225].Var13;
            var_3566 = 0;
            var_3579 = "送具";
            for (cnt1_5 = 0; cnt1_5 < 20; ++cnt1_5) {
                var_3579 = "" + var_3579 + "," + var_3519[var_3566];
                var_3566++;
            }
            tcpput(var_3579, var_1050);
            tcpput("\n", var_1050);
            return [2 /*return*/];
        });
    });
}
function func913() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_6, cnt1_7;
        return __generator(this, function (_a) {
            dbgprt(913);
            var_408++;
            var_3568 = 0;
            var_3569 = 0;
            for (cnt1_6 = 0; cnt1_6 < 29; ++cnt1_6) {
                getstr(var_3521[var_3569], var_3537, var_3568, 44);
                var_3568 = var_3568 + strsize;
                var_3569++;
            }
            var_3569 = 1;
            var_3581 = 0;
            for (cnt1_7 = 0; cnt1_7 < 30; ++cnt1_7) {
                var_3518[var_408][var_3581] = int(var_3521[var_3569]);
                var_3569++;
                var_3581++;
            }
            return [2 /*return*/];
        });
    });
}
function func914() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(914);
                    return [4 /*yield*/, func909()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func915() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(915);
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
                    comments_row1 = "ディアボロはここよーッ！";
                    comments_row2 = "ここにいるわよォ～～～ッ！";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 2:
                    _a.sent();
                    var_3561 = "女帝";
                    tcpput(var_3561, var_1050);
                    tcpput("\n", var_1050);
                    return [4 /*yield*/, func340()];
                case 3:
                    _a.sent();
                    if (!(var_2254 == 1)) return [3 /*break*/, 5];
                    var_2254 = 0;
                    return [4 /*yield*/, func508()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    var_217 = 1;
                    return [4 /*yield*/, func019()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func916() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_8;
        return __generator(this, function (_a) {
            dbgprt(916);
            if (var_1046 >= 29) {
                return [2 /*return*/];
            }
            var_1046++;
            var_3582 = "";
            var_3568 = 0;
            var_3569 = 0;
            for (cnt1_8 = 0; cnt1_8 < 11; ++cnt1_8) {
                getstr(var_3582, var_3543, var_3568, 44);
                var_1058[var_1046][var_3569] = int(var_3582);
                var_3568 = var_3568 + strsize;
                var_3569++;
            }
            return [2 /*return*/];
        });
    });
}
function func917() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(917);
                    var_3583 = 1;
                    cnt1_9 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_9 < var_1046)) return [3 /*break*/, 8];
                    var_2535 = var_1058[var_3583][0];
                    var_2551 = var_1058[var_3583][1];
                    var_2552 = var_1058[var_3583][2];
                    var_2553 = var_1058[var_3583][3];
                    var_2554 = var_1058[var_3583][4];
                    var_2555 = var_1058[var_3583][5];
                    var_2556 = var_1058[var_3583][6];
                    var_2557 = var_1058[var_3583][7];
                    var_2558 = var_1058[var_3583][8];
                    var_2559 = var_1058[var_3583][9];
                    var_2560 = var_1058[var_3583][10];
                    if (var_2535 == 0) {
                        var_2535 = 168;
                        var_2554 = 1;
                        var_2552 = 70;
                    }
                    var_1845 = 1;
                    return [4 /*yield*/, func556()];
                case 2:
                    _a.sent();
                    if (!(var_2110 == 0)) return [3 /*break*/, 4];
                    var_1845 = 5;
                    var_2519 = var_201;
                    return [4 /*yield*/, func556()];
                case 3:
                    _a.sent();
                    var_2519 = 0;
                    _a.label = 4;
                case 4:
                    if (!(var_2110 == 0)) return [3 /*break*/, 6];
                    var_1845 = 0;
                    return [4 /*yield*/, func556()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    var_1845 = 0;
                    var_2535 = 0;
                    var_3583++;
                    _a.label = 7;
                case 7:
                    ++cnt1_9;
                    return [3 /*break*/, 1];
                case 8:
                    var_1046 = 0;
                    var_1058 = dim(30, 30);
                    return [4 /*yield*/, func331()];
                case 9:
                    _a.sent();
                    comments_row1 = "敵が集まってしまった！";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func918() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(918);
            var_3564 = 1;
            return [2 /*return*/];
        });
    });
}
function func919() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_7, cnt1_10, cnt2_8, cnt2_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(919);
                    var_3572 = 0;
                    var_3573 = int(var_1068[10]);
                    if (var_91 < var_3573) {
                        var_3572 = var_3573 - var_91;
                    }
                    if (var_91 > var_3573) {
                        var_3572 = var_91 - var_3573;
                    }
                    if (var_91 == var_3573) {
                        var_3572 = 0;
                    }
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "遠くから声が聞こえる。";
                    comments_row2 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 2:
                    _a.sent();
                    if (!(var_3572 >= 4)) return [3 /*break*/, 9];
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "しかしよく聞こえなかった…";
                    var_297 = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func050()];
                case 3:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 4:
                    _a.sent();
                    cnt2_7 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt2_7 < 10)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    ++cnt2_7;
                    return [3 /*break*/, 5];
                case 8:
                    var_1046 = 0;
                    var_1058 = dim(30, 30);
                    return [2 /*return*/];
                case 9: return [4 /*yield*/, func094()];
                case 10:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「ディアボロはここよッ！";
                    var_297 = "　ここにいるわよォ～～ッ！」";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func050()];
                case 11:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 13:
                    _a.sent();
                    var_3584 = 0;
                    var_2194 = 1;
                    cnt1_10 = 0;
                    _a.label = 14;
                case 14:
                    if (!(cnt1_10 < var_97)) return [3 /*break*/, 42];
                    var_2220 = 0;
                    if (!(var_2194 != var_124)) return [3 /*break*/, 40];
                    if (!(var_83[var_2194].Var0 != 0 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12)) return [3 /*break*/, 16];
                    return [4 /*yield*/, func920()];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16:
                    if (!(var_2220 == 0)) return [3 /*break*/, 32];
                    var_1993 = var_66 - 1;
                    if (var_1993 < 0) {
                        var_1993 = 0;
                    }
                    var_1994 = var_66 + 1;
                    if (var_1994 > var_33) {
                        var_1994 = var_33;
                    }
                    var_1995 = var_67 + 1;
                    if (var_1995 > var_34) {
                        var_1995 = var_34;
                    }
                    var_1996 = var_67 - 1;
                    if (var_1996 < 0) {
                        var_1996 = 0;
                    }
                    if (!(var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995)) return [3 /*break*/, 18];
                    return [4 /*yield*/, func920()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    if (!(var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996)) return [3 /*break*/, 20];
                    return [4 /*yield*/, func920()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    if (!(var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func920()];
                case 21:
                    _a.sent();
                    _a.label = 22;
                case 22:
                    if (!(var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67)) return [3 /*break*/, 24];
                    return [4 /*yield*/, func920()];
                case 23:
                    _a.sent();
                    _a.label = 24;
                case 24:
                    if (!(var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995)) return [3 /*break*/, 26];
                    return [4 /*yield*/, func920()];
                case 25:
                    _a.sent();
                    _a.label = 26;
                case 26:
                    if (!(var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995)) return [3 /*break*/, 28];
                    return [4 /*yield*/, func920()];
                case 27:
                    _a.sent();
                    _a.label = 28;
                case 28:
                    if (!(var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996)) return [3 /*break*/, 30];
                    return [4 /*yield*/, func920()];
                case 29:
                    _a.sent();
                    _a.label = 30;
                case 30:
                    if (!(var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996)) return [3 /*break*/, 32];
                    return [4 /*yield*/, func920()];
                case 31:
                    _a.sent();
                    _a.label = 32;
                case 32:
                    if (!(var_2220 == 0 && var_201 <= 12 && var_201 != 0)) return [3 /*break*/, 40];
                    var_2221 = var_83[var_2194].Var1;
                    var_2222 = var_83[var_2194].Var2;
                    var_2223 = var_83[var_2194].Var1 - 1;
                    if (var_2223 < 0) {
                        var_2223 = 0;
                    }
                    var_2224 = var_83[var_2194].Var1 + 1;
                    if (var_2224 > var_33) {
                        var_2224 = var_33;
                    }
                    var_2225 = var_83[var_2194].Var2 + 1;
                    if (var_2225 > var_34) {
                        var_2225 = var_34;
                    }
                    var_2226 = var_83[var_2194].Var2 - 1;
                    if (var_2226 < 0) {
                        var_2226 = 0;
                    }
                    if (!(var_83[var_2194].Var0 != 0 && var_71[var_2223][var_2222] == var_201)) return [3 /*break*/, 34];
                    return [4 /*yield*/, func920()];
                case 33:
                    _a.sent();
                    _a.label = 34;
                case 34:
                    if (!(var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201)) return [3 /*break*/, 36];
                    return [4 /*yield*/, func920()];
                case 35:
                    _a.sent();
                    _a.label = 36;
                case 36:
                    if (!(var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201)) return [3 /*break*/, 38];
                    return [4 /*yield*/, func920()];
                case 37:
                    _a.sent();
                    _a.label = 38;
                case 38:
                    if (!(var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201)) return [3 /*break*/, 40];
                    return [4 /*yield*/, func920()];
                case 39:
                    _a.sent();
                    _a.label = 40;
                case 40:
                    var_2194 = var_2194 + 1;
                    _a.label = 41;
                case 41:
                    ++cnt1_10;
                    return [3 /*break*/, 14];
                case 42: return [4 /*yield*/, func331()];
                case 43:
                    _a.sent();
                    if (!(var_3584 == 1)) return [3 /*break*/, 49];
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "周囲の敵は声に誘われて";
                    var_297 = "去っていった";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func050()];
                case 44:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 45:
                    _a.sent();
                    cnt2_8 = 0;
                    _a.label = 46;
                case 46:
                    if (!(cnt2_8 < 10)) return [3 /*break*/, 49];
                    return [4 /*yield*/, func337()];
                case 47:
                    _a.sent();
                    _a.label = 48;
                case 48:
                    ++cnt2_8;
                    return [3 /*break*/, 46];
                case 49:
                    if (!(var_3584 == 0)) return [3 /*break*/, 56];
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "しかし何も起こらなかった";
                    var_297 = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func050()];
                case 50:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 51:
                    _a.sent();
                    cnt2_9 = 0;
                    _a.label = 52;
                case 52:
                    if (!(cnt2_9 < 10)) return [3 /*break*/, 55];
                    return [4 /*yield*/, func337()];
                case 53:
                    _a.sent();
                    _a.label = 54;
                case 54:
                    ++cnt2_9;
                    return [3 /*break*/, 52];
                case 55:
                    var_1046 = 0;
                    var_1058 = dim(30, 30);
                    _a.label = 56;
                case 56: return [2 /*return*/];
            }
        });
    });
}
function func920() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(920);
            if (var_83[var_2194].Var31 == 4 || var_83[var_2194].Var31 == 5 || var_83[var_2194].Var13 != 0 || var_151 != 0 || var_163 != 0) {
                return [2 /*return*/];
            }
            if (var_83[var_2194].Var0 == 20 || var_83[var_2194].Var0 == 132 || var_83[var_2194].Var0 == 143 || var_83[var_2194].Var0 == 90 || var_83[var_2194].Var0 == 96 || var_83[var_2194].Var0 == 91 || var_83[var_2194].Var0 == 92) {
                return [2 /*return*/];
            }
            var_3585 = "" + var_83[var_2194].Var0 + "," + var_83[var_2194].Var39 + "," + var_83[var_2194].Var3 + "," + var_83[var_2194].Var14 + "," + var_83[var_2194].Var15 + "," + var_83[var_2194].Var17 + "," + var_83[var_2194].Var19 + "," + var_83[var_2194].Var20 + "," + var_83[var_2194].Var23 + "," + var_83[var_2194].Var24 + "," + var_83[var_2194].Var30;
            var_3561 = "倒敵" + var_3585;
            tcpput(var_3561, var_1050);
            tcpput("\n", var_1050);
            var_3586 = var_83[var_2194].Var1;
            var_3587 = var_83[var_2194].Var2;
            var_82[var_3586][var_3587] = 0;
            var_83[var_2194].Var0 = 0;
            var_83[var_2194].Var1 = 0;
            var_83[var_2194].Var2 = 0;
            var_3584 = 1;
            return [2 /*return*/];
        });
    });
}
function func921() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_11, cnt1_12, cnt1_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(921);
                    DSPLAY(audio_id = 234);
                    cnt1_11 = 0;
                    _a.label = 1;
                case 1:
                    if (!(cnt1_11 < 20)) return [3 /*break*/, 4];
                    return [4 /*yield*/, func337()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    ++cnt1_11;
                    return [3 /*break*/, 1];
                case 4:
                    var_271 = 1;
                    var_1321 = 1;
                    cnt1_12 = 0;
                    _a.label = 5;
                case 5:
                    if (!(cnt1_12 < 10)) return [3 /*break*/, 8];
                    return [4 /*yield*/, func337()];
                case 6:
                    _a.sent();
                    var_1321 = var_1321 + 1;
                    _a.label = 7;
                case 7:
                    ++cnt1_12;
                    return [3 /*break*/, 5];
                case 8: return [4 /*yield*/, func094()];
                case 9:
                    _a.sent();
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「イヒヒヒヒ";
                    comments_row2 = "　注文しておいたよッ！」";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func047()];
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
                    var_296 = "「ピッツァ３枚で３００Ｇ」";
                    var_297 = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
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
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 16:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「もちろんお釣りはいらないよねッ！」";
                    var_297 = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func050()];
                case 17:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, func340()];
                case 19:
                    _a.sent();
                    DSPLAY(audio_id = 139);
                    var_415 = 0;
                    cnt1_13 = 0;
                    _a.label = 20;
                case 20:
                    if (!(cnt1_13 < 10)) return [3 /*break*/, 23];
                    return [4 /*yield*/, func337()];
                case 21:
                    _a.sent();
                    var_1321 = var_1321 + 1;
                    _a.label = 22;
                case 22:
                    ++cnt1_13;
                    return [3 /*break*/, 20];
                case 23:
                    var_271 = 0;
                    var_1321 = 0;
                    var_3561 = "喋背";
                    tcpput(var_3561, var_1050);
                    tcpput("\n", var_1050);
                    if (!(var_2254 == 1)) return [3 /*break*/, 25];
                    var_2254 = 0;
                    return [4 /*yield*/, func508()];
                case 24:
                    _a.sent();
                    _a.label = 25;
                case 25:
                    var_217 = 1;
                    return [4 /*yield*/, func019()];
                case 26:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func922() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(922);
            var_3565 = 1;
            return [2 /*return*/];
        });
    });
}
function func923() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_14, cnt1_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(923);
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
                    comments_row1 = "「おまたせしましたァ――ッ";
                    comments_row2 = "　デリバリーピッザですーっ」";
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
                    return [4 /*yield*/, func094()];
                case 4:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「こんにちは――っ";
                    var_297 = "　どちらですかーっ」";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
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
                    _a.sent();
                    return [4 /*yield*/, func094()];
                case 8:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "「どちらへ運びましょうか――ッ！？」";
                    var_297 = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
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
                    _a.sent();
                    DSPLAY(audio_id = 133);
                    var_1756 = 1;
                    var_452 = 1;
                    cnt1_14 = 0;
                    _a.label = 12;
                case 12:
                    if (!(cnt1_14 < 3)) return [3 /*break*/, 15];
                    return [4 /*yield*/, func384()];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14:
                    ++cnt1_14;
                    return [3 /*break*/, 12];
                case 15:
                    var_1756 = 0;
                    var_452 = 0;
                    return [4 /*yield*/, func331()];
                case 16:
                    _a.sent();
                    comments_row1 = var_296;
                    comments_row2 = var_297;
                    var_296 = "ピザ屋はその辺に置いて帰ったようだ。";
                    var_297 = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    return [4 /*yield*/, func050()];
                case 17:
                    _a.sent();
                    var_198 = 1;
                    var_300 = 0;
                    return [4 /*yield*/, func047()];
                case 18:
                    _a.sent();
                    cnt1_15 = 0;
                    _a.label = 19;
                case 19:
                    if (!(cnt1_15 < 10)) return [3 /*break*/, 22];
                    return [4 /*yield*/, func337()];
                case 20:
                    _a.sent();
                    _a.label = 21;
                case 21:
                    ++cnt1_15;
                    return [3 /*break*/, 19];
                case 22: return [2 /*return*/];
            }
        });
    });
}
function func924() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(924);
            var_3559 = "";
            if (var_3558 == 100) {
                var_3559 = "ｽﾀｰ･ﾌﾟﾗﾁﾅのDISC";
            }
            if (var_3558 == 101) {
                var_3559 = "ｼﾙﾊﾞｰﾁｬﾘｵｯﾂのDISC";
            }
            if (var_3558 == 102) {
                var_3559 = "ｷﾝｸﾞ･ｸﾘﾑｿﾞﾝのDISC";
            }
            if (var_3558 == 103) {
                var_3559 = "ｴｺｰｽﾞACT3のDISC";
            }
            if (var_3558 == 104) {
                var_3559 = "ｻﾞ･ﾊﾝﾄﾞのDISC";
            }
            if (var_3558 == 105) {
                var_3559 = "ﾁﾘﾍﾟｯﾊﾟｰのDISC";
            }
            if (var_3558 == 106) {
                var_3559 = "ｸﾚｲｼﾞｰ･DのDISC";
            }
            if (var_3558 == 107) {
                var_3559 = "ﾃﾞｽ･13のDISC";
            }
            if (var_3558 == 108) {
                var_3559 = "ｽﾃｨｯｷｰﾌｨﾝｶﾞｰｽﾞのDISC";
            }
            if (var_3558 == 109) {
                var_3559 = "ﾏｼﾞｼｬﾝｽﾞﾚｯﾄﾞのDISC";
            }
            if (var_3558 == 110) {
                var_3559 = "ｽﾃｨｯｷｰﾌｨﾝｶﾞｰｽﾞのDISC";
            }
            if (var_3558 == 111) {
                var_3559 = "ｻﾞ･ﾜｰﾙﾄﾞのDISC";
            }
            if (var_3558 == 112) {
                var_3559 = "ｷﾗｰ･ｸｨｰﾝのDISC";
            }
            if (var_3558 == 113) {
                var_3559 = "ｸﾗｯｼｭのDISC";
            }
            if (var_3558 == 114) {
                var_3559 = "ﾎﾜｲﾄｽﾈｲｸのDISC";
            }
            if (var_3558 == 115) {
                var_3559 = "G･ｴｸｽﾍﾟﾘｴﾝｽのDISC";
            }
            if (var_3558 == 116) {
                var_3559 = "ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙのDISC";
            }
            if (var_3558 == 117) {
                var_3559 = "ﾀﾞｰｸﾌﾞﾙｰﾑｰﾝのDISC";
            }
            if (var_3558 == 118) {
                var_3559 = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝのDISC";
            }
            if (var_3558 == 119) {
                var_3559 = "ｽﾊﾟｲｽ･ｶﾞｰﾙのDISC";
            }
            if (var_3558 == 120) {
                var_3559 = "ｽﾄｰﾝ･ﾌﾘｰのDISC";
            }
            if (var_3558 == 121) {
                var_3559 = "ﾊﾟｰﾌﾟﾙ･ﾍｲｽﾞのDISC";
            }
            if (var_3558 == 122) {
                var_3559 = "ｱﾇﾋﾞｽ神のDISC";
            }
            if (var_3558 == 123) {
                var_3559 = "ｸﾘｰﾑのDISC";
            }
            if (var_3558 == 124) {
                var_3559 = "ﾑｰﾃﾞｨｰﾌﾞﾙｰｽのDISC";
            }
            if (var_3558 == 200) {
                var_3559 = "ｽｰﾊﾟｰﾌﾗｲのDISC";
            }
            if (var_3558 == 201) {
                var_3559 = "ｲｴﾛｰﾃﾝﾊﾟﾗﾝｽのDISC";
            }
            if (var_3558 == 202) {
                var_3559 = "ﾎﾜｲﾄｱﾙﾊﾞﾑのDISC";
            }
            if (var_3558 == 203) {
                var_3559 = "ｻﾞ･ﾌｰﾙのDISC";
            }
            if (var_3558 == 204) {
                var_3559 = "ｼｱｰﾊｰﾄｱﾀｯｸのDISC";
            }
            if (var_3558 == 205) {
                var_3559 = "ｸﾗﾌﾄﾜｰｸのDISC";
            }
            if (var_3558 == 206) {
                var_3559 = "ｵｱｼｽのDISC";
            }
            if (var_3558 == 207) {
                var_3559 = "ｸﾞﾚｲﾄﾌﾙ･ﾃﾞｯﾄﾞのDISC";
            }
            if (var_3558 == 300) {
                var_3559 = "ﾊﾟｰﾙ･ｼﾞｬﾑのDISC";
            }
            if (var_3558 == 301) {
                var_3559 = "ﾊｰｳﾞｪｽﾄのDISC";
            }
            if (var_3558 == 302) {
                var_3559 = "ﾊｲｳｪｲ･ﾄｩ･ﾍﾙのDISC";
            }
            if (var_3558 == 303) {
                var_3559 = "ﾄﾞﾗｺﾞﾝｽﾞﾄﾞﾘｰﾑのDISC";
            }
            if (var_3558 == 304) {
                var_3559 = "ｳｪｻﾞｰﾘﾎﾟｰﾄのDISC";
            }
            if (var_3558 == 305) {
                var_3559 = "ｼﾝﾃﾞﾚﾗのDISC";
            }
            if (var_3558 == 306) {
                var_3559 = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰのDISC";
            }
            if (var_3558 == 308) {
                var_3559 = "ｴﾎﾞﾆｰ･ﾃﾞﾋﾞﾙのDISC";
            }
            if (var_3558 == 309) {
                var_3559 = "ｿﾌﾄ･ﾏｼｰﾝのDISC";
            }
            if (var_3558 == 310) {
                var_3559 = "ｴﾝﾌﾟﾚｽのDISC";
            }
            if (var_3558 == 311) {
                var_3559 = "ﾁｰﾌﾟ･ﾄﾘｯｸのDISC";
            }
            if (var_3558 == 312) {
                var_3559 = "ｴｱﾛｽﾐｽのDISC";
            }
            if (var_3558 == 313) {
                var_3559 = "ﾊｲｳｪｲ･ｽﾀｰのDISC";
            }
            if (var_3558 == 314) {
                var_3559 = "ｽﾄﾚｲ･ｷｬｯﾄのDISC";
            }
            if (var_3558 == 315) {
                var_3559 = "ｴﾋﾟﾀﾌのDISC";
            }
            if (var_3558 == 316) {
                var_3559 = "ｻﾊﾞｲﾊﾞｰのDISC";
            }
            if (var_3558 == 317) {
                var_3559 = "ｷｯｽのDISC";
            }
            if (var_3558 == 318) {
                var_3559 = "ｼﾞｬﾝﾋﾟﾝJﾌﾗｯｼｭのDISC";
            }
            if (var_3558 == 319) {
                var_3559 = "ﾎﾞｰｲIIﾏﾝのDISC";
            }
            if (var_3558 == 320) {
                var_3559 = "ﾒﾀﾘｶのDISC";
            }
            if (var_3558 == 393) {
                var_3559 = "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨのDISC";
            }
            if (var_3558 == 394) {
                var_3559 = "ｷﾗｰﾀｲｶﾞｰｸｲｰﾝのDISC";
            }
            if (var_3558 == 395) {
                var_3559 = "ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISC";
            }
            if (var_3558 == 396) {
                var_3559 = "ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝのDISC";
            }
            if (var_3558 == 397) {
                var_3559 = "ﾍﾋﾞｰ･ｳｪｻﾞｰのDISC";
            }
            if (var_3558 == 398) {
                var_3559 = "ｽﾀﾌﾟﾗｻﾞﾜｰﾙﾄﾞのDISC";
            }
            if (var_3558 == 399) {
                var_3559 = "G･E･ﾚｸｲｴﾑのDISC";
            }
            if (var_3558 == 400) {
                var_3559 = "ﾊｲｴﾛﾌｧﾝﾄｸﾞﾘｰﾝのDISC";
            }
            if (var_3558 == 401) {
                var_3559 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのDISC";
            }
            if (var_3558 == 402) {
                var_3559 = "ｴﾝﾍﾟﾗｰのDISC";
            }
            if (var_3558 == 403) {
                var_3559 = "ｾｯｸｽﾋﾟｽﾄﾙｽﾞのDISC";
            }
            if (var_3558 == 404) {
                var_3559 = "ﾎﾙｽ神のDISC";
            }
            if (var_3558 == 405) {
                var_3559 = "ｴｺｰｽﾞACT2のDISC";
            }
            if (var_3558 == 406) {
                var_3559 = "ｴｺｰｽﾞACT1のDISC";
            }
            if (var_3558 == 407) {
                var_3559 = "ﾊｲｴﾛﾌｧﾝﾄｴﾒﾗﾙﾄﾞのDISC";
            }
            if (var_3558 == 408) {
                var_3559 = "ﾏﾝ･ｲﾝ･ｻﾞ･ﾐﾗｰのDISC";
            }
            if (var_3558 == 409) {
                var_3559 = "ﾗﾊﾞｰｽﾞのDISC";
            }
            if (var_3558 == 411) {
                var_3559 = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰのDISC";
            }
            if (var_3558 == 412) {
                var_3559 = "ﾍﾌﾞﾝｽﾞﾄﾞｱｰのDISC";
            }
            if (var_3558 == 414) {
                var_3559 = "ﾀｽｸのDISC";
            }
            return [2 /*return*/];
        });
    });
}
function func925() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(925);
                    if (!(var_407 >= 1)) return [3 /*break*/, 2];
                    var_407 = 0;
                    onkey(0);
                    netclose(var_1050);
                    gsel(window_id = 33, window_mode = -1);
                    gsel(window_id = 30, window_mode = -1);
                    gsel(window_id = 0, window_mode = 1);
                    return [4 /*yield*/, func193()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    if (!(var_407 == 0)) return [3 /*break*/, 4];
                    var_509 = 0;
                    var_499 = 0;
                    return [4 /*yield*/, func894()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    stop();
                    return [2 /*return*/];
            }
        });
    });
}
function func926() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt2_10, cnt6_1, cnt7_1, cnt6_2, cnt5_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(926);
                    netfail(var_1050);
                    if (!stat) return [3 /*break*/, 6];
                    var_407 = 0;
                    netclose(var_1050);
                    gsel(window_id = 33, window_mode = -1);
                    gsel(window_id = 30, window_mode = -1);
                    gsel(window_id = 0, window_mode = 1);
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
                    cnt2_10 = 0;
                    _a.label = 2;
                case 2:
                    if (!(cnt2_10 < 5)) return [3 /*break*/, 5];
                    return [4 /*yield*/, func337()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    ++cnt2_10;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/];
                case 6:
                    tcpcount(var_3538, var_1050);
                    if (!(var_3538 != 0)) return [3 /*break*/, 48];
                    var_3537 = sdim(1024);
                    var_3539 = sdim(1024);
                    tcpgetl(var_3537, 1024, var_1050);
                    var_3539 = var_3537;
                    var_3540 = 0;
                    var_3541 = 0;
                    var_3542 = "";
                    var_3588 = "";
                    if (!(stat != 0)) return [3 /*break*/, 48];
                    var_3542 = strmid(var_3537, 0, 4);
                    var_3543 = strmid(var_3537, 4, 250);
                    if (var_3542 == "字水") {
                        var_3539 = "" + var_3543;
                        var_3544 = 0;
                        var_3540 = 1;
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
                        var_3540 = 0;
                        return [2 /*return*/];
                    }
                    if (!(var_3542 == "具０" || var_3542 == "具１" || var_3542 == "具２" || var_3542 == "具３" || var_3542 == "具４" || var_3542 == "具５" || var_3542 == "具６" || var_3542 == "具７")) return [3 /*break*/, 8];
                    var_3575 = "" + var_3542;
                    return [4 /*yield*/, func913()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
                case 8:
                    var_3589 = 99;
                    if (!(var_3542 == "捨０")) return [3 /*break*/, 10];
                    var_3589 = 0;
                    return [4 /*yield*/, func927()];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    if (!(var_3542 == "捨１")) return [3 /*break*/, 12];
                    var_3589 = 1;
                    return [4 /*yield*/, func927()];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    if (!(var_3542 == "捨２")) return [3 /*break*/, 14];
                    var_3589 = 2;
                    return [4 /*yield*/, func927()];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14:
                    if (!(var_3542 == "捨３")) return [3 /*break*/, 16];
                    var_3589 = 3;
                    return [4 /*yield*/, func927()];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16:
                    if (!(var_3542 == "捨４")) return [3 /*break*/, 18];
                    var_3589 = 4;
                    return [4 /*yield*/, func927()];
                case 17:
                    _a.sent();
                    _a.label = 18;
                case 18:
                    if (!(var_3542 == "捨５")) return [3 /*break*/, 20];
                    var_3589 = 5;
                    return [4 /*yield*/, func927()];
                case 19:
                    _a.sent();
                    _a.label = 20;
                case 20:
                    if (!(var_3542 == "捨６")) return [3 /*break*/, 22];
                    var_3589 = 6;
                    return [4 /*yield*/, func927()];
                case 21:
                    _a.sent();
                    _a.label = 22;
                case 22:
                    if (!(var_3542 == "捨７")) return [3 /*break*/, 24];
                    var_3589 = 7;
                    return [4 /*yield*/, func927()];
                case 23:
                    _a.sent();
                    _a.label = 24;
                case 24:
                    if (!(instr(var_3537, 0, "さんが接続しました") != (-1))) return [3 /*break*/, 26];
                    var_3544 = 6;
                    return [4 /*yield*/, func929()];
                case 25:
                    _a.sent();
                    _a.label = 26;
                case 26:
                    var_3544 = 0;
                    var_3588 = strmid(var_3537, 0, 2);
                    var_3590 = 0;
                    if (var_3588 == "白") {
                        var_3539 = "" + var_3543;
                        var_3544 = 0;
                        var_3590 = 1;
                    }
                    if (var_3588 == "赤") {
                        var_3539 = "" + var_3543;
                        var_3544 = 1;
                        var_3590 = 1;
                    }
                    if (var_3588 == "青") {
                        var_3539 = "" + var_3543;
                        var_3544 = 2;
                        var_3590 = 1;
                    }
                    if (var_3588 == "黄") {
                        var_3539 = "" + var_3543;
                        var_3544 = 3;
                        var_3590 = 1;
                    }
                    if (var_3588 == "水") {
                        var_3539 = "" + var_3543;
                        var_3544 = 4;
                        var_3590 = 1;
                    }
                    if (var_3588 == "緑") {
                        var_3539 = "" + var_3543;
                        var_3544 = 5;
                        var_3590 = 1;
                    }
                    if (var_3588 == "橙") {
                        var_3539 = "" + var_3543;
                        var_3544 = 6;
                        var_3590 = 1;
                    }
                    if (var_3588 == "紫") {
                        var_3539 = "" + var_3543;
                        var_3544 = 7;
                        var_3590 = 1;
                    }
                    if (var_3588 == "茶") {
                        var_3539 = "" + var_3543;
                        var_3544 = 8;
                        var_3590 = 1;
                    }
                    var_3591 = 0;
                    if (var_3590 == 1) {
                        var_3592 = strmid(var_3537, 2, 2);
                        if (var_3592 == "０" && var_624 == 1) {
                            var_3591 = 1;
                        }
                        if (var_3592 == "１" && var_624 == 2) {
                            var_3591 = 1;
                        }
                        if (var_3592 == "２" && var_624 == 3) {
                            var_3591 = 1;
                        }
                        if (var_3592 == "３" && var_624 == 4) {
                            var_3591 = 1;
                        }
                        if (var_3592 == "４" && var_624 == 5) {
                            var_3591 = 1;
                        }
                        if (var_3592 == "５" && var_624 == 6) {
                            var_3591 = 1;
                        }
                        if (var_3592 == "６" && var_624 == 7) {
                            var_3591 = 1;
                        }
                        if (var_3592 == "７" && var_624 == 8) {
                            var_3591 = 1;
                        }
                    }
                    if (!(var_3540 == 0)) return [3 /*break*/, 47];
                    var_3545 = 33;
                    var_3546 = 220;
                    var_3547 = 420;
                    var_3548 = 440;
                    var_3549 = 125;
                    gsel(33);
                    redraw(0);
                    if (!(var_624 >= 1)) return [3 /*break*/, 37];
                    if (!(var_625 == 1)) return [3 /*break*/, 28];
                    var_3545 = 33;
                    var_3546 = 220;
                    var_3547 = 420;
                    var_3548 = 440;
                    var_3549 = 125;
                    color(1, 1, 1);
                    boxf(0, var_3549, 320, 500);
                    var_625 = 0;
                    var_3593 = 0;
                    var_3594 = var_624 - 1;
                    if (var_1070[var_3594] == var_40) {
                        var_3593 = 1;
                    }
                    if (var_1070[var_3594] == "") {
                        var_3593 = 1;
                    }
                    if (!(var_3593 == 0)) return [3 /*break*/, 28];
                    return [4 /*yield*/, func934()];
                case 27:
                    _a.sent();
                    _a.label = 28;
                case 28:
                    font("MS ゴシック", 12);
                    var_3595 = 0;
                    var_3596 = 58;
                    var_3597 = var_624 - 1;
                    var_3598 = var_3597 + 1;
                    if (!(var_1069[var_3597][4] != 0 && var_624 >= 1 && var_3593 == 0)) return [3 /*break*/, 37];
                    if (var_3591 == 1) {
                        var_3545 = 33;
                        var_3546 = 220;
                        var_3547 = 420;
                        var_3548 = 440;
                        var_3549 = 125;
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
                    color(0, 0, 80);
                    boxf(left = 0, top1 = 0, right = 440, bottom = 124);
                    var_3233 = 5;
                    var_3550 = 3;
                    var_3231 = 30;
                    var_3232 = 18;
                    color(0, 0, 0);
                    boxf(left = var_3231 - 1, top1 = var_3232 - 1, right = 9 * var_3233 + var_3232 + 1, bottom = 9 * var_3233 + var_3232 + 1);
                    gmode(2);
                    color(255, 255, 255);
                    line(var_3231 - 1, var_3232 - 1, var_3231 - 1, 9 * var_3233 + var_3232 + 1);
                    line(var_3231 - 2, var_3232 - 1, 9 * var_3233 + var_3231 + 1, var_3232 - 1);
                    line(9 * var_3233 + var_3231 + 1, var_3232 - 1, 9 * var_3233 + var_3231 + 1, 9 * var_3233 + var_3232 + 1);
                    line(var_3231 - 1, 9 * var_3233 + var_3232 + 1, 9 * var_3233 + var_3231 + 1, 9 * var_3233 + var_3232 + 1);
                    var_3551 = 0;
                    var_449 = 0;
                    for (cnt6_1 = 0; cnt6_1 < 9; ++cnt6_1) {
                        var_447 = 0;
                        for (cnt7_1 = 0; cnt7_1 < 9; ++cnt7_1) {
                            if (peek(var_1071[var_3597], var_3551) == 48) {
                                color(0, 0, 0);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3233, var_447 * var_3233 + var_3232 + var_3233);
                            }
                            if (peek(var_1071[var_3597], var_3551) == 49) {
                                color(0, 0, 255);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3233, var_447 * var_3233 + var_3232 + var_3233);
                            }
                            if (peek(var_1071[var_3597], var_3551) == 55) {
                                color(0, 0, 150);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3233, var_447 * var_3233 + var_3232 + var_3233);
                            }
                            if (peek(var_1071[var_3597], var_3551) == 50) {
                                color(255, 0, 255);
                                line(var_449 * var_3233 + var_3231 - 1, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231 + 4, var_447 * var_3233 + var_3232 + 4);
                                line(var_449 * var_3233 + var_3231 + 5, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232 + 4);
                            }
                            if (peek(var_1071[var_3597], var_3551) == 51) {
                                color(0, 255, 255);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                            }
                            if (peek(var_1071[var_3597], var_3551) == 52) {
                                color(255, 0, 0);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                            }
                            if (peek(var_1071[var_3597], var_3551) == 53) {
                                color(0, 255, 255);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                                color(0, 0, 255);
                                boxf(var_449 * var_3233 + var_3231 + 1, var_447 * var_3233 + var_3232 + 1, var_449 * var_3233 + var_3231 + 2, var_447 * var_3233 + var_3232 + 2);
                            }
                            if (peek(var_1071[var_3597], var_3551) == 54) {
                                color(255, 255, 255);
                                pset(var_449 * var_3233 + var_3231 + 1, var_447 * var_3233 + var_3232);
                                pset(var_449 * var_3233 + var_3231 + 2, var_447 * var_3233 + var_3232);
                                pset(var_449 * var_3233 + var_3231 + 3, var_447 * var_3233 + var_3232);
                                pset(var_449 * var_3233 + var_3231 + 1, var_447 * var_3233 + var_3232 + 4);
                                pset(var_449 * var_3233 + var_3231 + 2, var_447 * var_3233 + var_3232 + 4);
                                pset(var_449 * var_3233 + var_3231 + 3, var_447 * var_3233 + var_3232 + 4);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232 + 1, var_449 * var_3233 + var_3231 + 4, var_447 * var_3233 + var_3232 + 3);
                            }
                            if (peek(var_1071[var_3597], var_3551) == 56) {
                                color(255, 255, 0);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                            }
                            if (peek(var_1071[var_3597], var_3551) == 57) {
                                color(0, 255, 255);
                                line(var_449 * var_3233 + var_3231 - 1, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231 + 4, var_447 * var_3233 + var_3232 + 4);
                                line(var_449 * var_3233 + var_3231 + 5, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232 + 4);
                            }
                            var_3551++;
                            var_447++;
                        }
                        var_449++;
                    }
                    var_1631 = 115;
                    var_1632 = 15;
                    var_1633 = 50;
                    var_1634 = 50;
                    var_1635 = 0;
                    var_1636 = 0;
                    var_3556 = var_1631;
                    for (cnt6_2 = 0; cnt6_2 < 3; ++cnt6_2) {
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
                    var_3599 = 27;
                    pos(var_3556 + 5, var_1632 + 5);
                    var_575 = var_1069[var_3597][13];
                    return [4 /*yield*/, func070()];
                case 29:
                    _a.sent();
                    if (var_1069[var_3597][24] == 0) {
                        var_576 = 11;
                    }
                    if (var_1069[var_3597][24] == 1) {
                        var_576 = 1;
                    }
                    if (var_1069[var_3597][24] == 2) {
                        var_576 = 16;
                    }
                    if (var_1069[var_3597][24] == 3) {
                        var_576 = 29;
                    }
                    if (var_575 != 0) {
                        gcopy(var_576, var_577, var_578, 40, 40);
                    }
                    color(1, 1, 1);
                    pos(var_3556 + 1 + var_3599, var_1632 + 5 + 30);
                    mes("[攻]");
                    pos(var_3556 + 3 + var_3599, var_1632 + 5 + 30);
                    mes("[攻]");
                    pos(var_3556 + 2 + var_3599, var_1632 + 5 + 29);
                    mes("[攻]");
                    pos(var_3556 + 2 + var_3599, var_1632 + 5 + 31);
                    mes("[攻]");
                    color(255, 255, 0);
                    pos(var_3556 + 2 + var_3599, var_1632 + 5 + 30);
                    mes("[攻]");
                    var_3599 = var_3599 + 55;
                    pos(var_3556 + 60, var_1632 + 5);
                    var_575 = var_1069[var_3597][16];
                    return [4 /*yield*/, func070()];
                case 30:
                    _a.sent();
                    if (var_1069[var_3597][26] == 0) {
                        var_576 = 11;
                    }
                    if (var_1069[var_3597][26] == 1) {
                        var_576 = 1;
                    }
                    if (var_1069[var_3597][26] == 2) {
                        var_576 = 16;
                    }
                    if (var_1069[var_3597][26] == 3) {
                        var_576 = 29;
                    }
                    if (var_575 != 0) {
                        gcopy(var_576, var_577, var_578, 40, 40);
                    }
                    color(1, 1, 1);
                    pos(var_3556 + 1 + var_3599, var_1632 + 5 + 30);
                    mes("[防]");
                    pos(var_3556 + 3 + var_3599, var_1632 + 5 + 30);
                    mes("[防]");
                    pos(var_3556 + 2 + var_3599, var_1632 + 5 + 29);
                    mes("[防]");
                    pos(var_3556 + 2 + var_3599, var_1632 + 5 + 31);
                    mes("[防]");
                    color(255, 180, 90);
                    pos(var_3556 + 2 + var_3599, var_1632 + 5 + 30);
                    mes("[防]");
                    var_3599 = var_3599 + 55;
                    pos(var_3556 + 115, var_1632 + 5);
                    var_575 = var_1069[var_3597][19];
                    return [4 /*yield*/, func070()];
                case 31:
                    _a.sent();
                    if (var_1069[var_3597][28] == 0) {
                        var_576 = 11;
                    }
                    if (var_1069[var_3597][28] == 1) {
                        var_576 = 1;
                    }
                    if (var_1069[var_3597][28] == 2) {
                        var_576 = 16;
                    }
                    if (var_1069[var_3597][28] == 3) {
                        var_576 = 29;
                    }
                    if (var_575 != 0) {
                        gcopy(var_576, var_577, var_578, 40, 40);
                    }
                    color(1, 1, 1);
                    pos(var_3556 + 1 + var_3599, var_1632 + 5 + 30);
                    mes("[能]");
                    pos(var_3556 + 3 + var_3599, var_1632 + 5 + 30);
                    mes("[能]");
                    pos(var_3556 + 2 + var_3599, var_1632 + 5 + 29);
                    mes("[能]");
                    pos(var_3556 + 2 + var_3599, var_1632 + 5 + 31);
                    mes("[能]");
                    color(240, 0, 240);
                    pos(var_3556 + 2 + var_3599, var_1632 + 5 + 30);
                    mes("[能]");
                    var_3557 = 0;
                    color(0, 255, 0);
                    pos(10, var_3595);
                    mes("[" + var_3598 + "] " + var_1070[var_3597]);
                    color(255, 255, 255);
                    pos(210, var_3595);
                    var_3600 = var_1069[var_3597][12];
                    return [4 /*yield*/, func928()];
                case 32:
                    _a.sent();
                    mes("" + var_3601);
                    pos(280, var_3595);
                    if (var_3600 != 0) {
                        mes("" + var_1069[var_3597][10] + " 階");
                    }
                    pos(10, var_3595 + 12 + var_3596);
                    mes("Lv " + var_1069[var_3597][3]);
                    color(255, 255, 255);
                    pos(60, var_3595 + 12 + var_3596);
                    mes("" + var_1069[var_3597][11] + " G");
                    pos(10, var_3595 + 24 + var_3596);
                    mes("HP " + var_1069[var_3597][5] + "/" + var_1069[var_3597][4]);
                    color(255, 255, 255);
                    pos(10, var_3595 + 36 + var_3596);
                    mes("精神 " + var_1069[var_3597][7] + "/" + var_1069[var_3597][6]);
                    color(255, 255, 255);
                    if (var_1069[var_3597][8] >= 1) {
                        color(255, 0, 0);
                    }
                    pos(10, var_3595 + 48 + var_3596);
                    mes("死亡 " + var_1069[var_3597][8]);
                    color(255, 255, 255);
                    if (var_1069[var_3597][9] >= 1) {
                        color(0, 255, 255);
                    }
                    pos(60, var_3595 + 48 + var_3596);
                    mes("クリア " + var_1069[var_3597][9]);
                    color(255, 255, 255);
                    pos(0, var_3595 + 60 + 56);
                    mes("―――――――――――――――――――――――――――");
                    pos(115, var_3595 + 12 + 58);
                    color(255, 255, 0);
                    var_3558 = var_1069[var_3597][13];
                    return [4 /*yield*/, func924()];
                case 33:
                    _a.sent();
                    if (var_1069[var_3597][13] == 0) {
                        var_3559 = "なし";
                    }
                    if (var_1069[var_3597][13] != 0) {
                        if (var_1069[var_3597][14] != 0) {
                            var_3559 = var_3559 + "+" + var_1069[var_3597][14];
                        }
                        if (var_1069[var_3597][23] >= 2) {
                            var_3559 = var_3559 + " ★" + var_1069[var_3597][23];
                        }
                        if (var_1069[var_3597][24] >= 1) {
                            var_3559 = "☆" + var_3559;
                        }
                    }
                    var_3559 = "[攻]" + var_3559;
                    mes(var_3559);
                    color(255, 180, 90);
                    var_3558 = var_1069[var_3597][16];
                    return [4 /*yield*/, func924()];
                case 34:
                    _a.sent();
                    if (var_1069[var_3597][16] == 0) {
                        var_3559 = "なし";
                    }
                    if (var_1069[var_3597][16] != 0) {
                        if (var_1069[var_3597][17] != 0) {
                            var_3559 = var_3559 + "+" + var_1069[var_3597][17];
                        }
                        if (var_1069[var_3597][25] >= 2) {
                            var_3559 = var_3559 + " ★" + var_1069[var_3597][25];
                        }
                        if (var_1069[var_3597][26] >= 1) {
                            var_3559 = "☆" + var_3559;
                        }
                    }
                    var_3559 = "[防]" + var_3559;
                    mes(var_3559);
                    color(240, 0, 240);
                    var_3558 = var_1069[var_3597][19];
                    return [4 /*yield*/, func924()];
                case 35:
                    _a.sent();
                    if (var_1069[var_3597][19] == 0) {
                        var_3559 = "なし";
                    }
                    if (var_1069[var_3597][19] != 0) {
                        if (var_1069[var_3597][20] != 0) {
                            var_3559 = var_3559 + "+" + var_1069[var_3597][20];
                        }
                        if (var_1069[var_3597][27] >= 2) {
                            var_3559 = var_3559 + " ★" + var_1069[var_3597][27];
                        }
                        if (var_1069[var_3597][28] >= 1) {
                            var_3559 = "☆" + var_3559;
                        }
                    }
                    var_3559 = "[能]" + var_3559;
                    mes(var_3559);
                    color(225, 195, 145);
                    var_3558 = var_1069[var_3597][21];
                    return [4 /*yield*/, func924()];
                case 36:
                    _a.sent();
                    if (var_1069[var_3597][21] == 0) {
                        var_3559 = "なし";
                    }
                    if (var_1069[var_3597][21] != 0) {
                        var_3559 = var_3559 + "+" + var_1069[var_3597][22];
                    }
                    var_3559 = "[射]" + var_3559;
                    mes(var_3559);
                    _a.label = 37;
                case 37:
                    if (!(var_3593 == 1)) return [3 /*break*/, 39];
                    var_3593 = 0;
                    var_624 = 0;
                    return [4 /*yield*/, func934()];
                case 38:
                    _a.sent();
                    _a.label = 39;
                case 39:
                    if (!(var_624 == 0)) return [3 /*break*/, 47];
                    color(1, 1, 1);
                    boxf();
                    font("MS ゴシック", 12);
                    var_3595 = 0;
                    var_3597 = 0;
                    cnt5_1 = 0;
                    _a.label = 40;
                case 40:
                    if (!(cnt5_1 < 8)) return [3 /*break*/, 47];
                    if (!(var_1069[var_3597][4] != 0)) return [3 /*break*/, 45];
                    var_3598 = var_3597 + 1;
                    color(0, 255, 0);
                    pos(10, var_3595);
                    mes("[" + var_3598 + "] " + var_1070[var_3597]);
                    color(255, 255, 255);
                    pos(210, var_3595);
                    var_3600 = var_1069[var_3597][12];
                    return [4 /*yield*/, func928()];
                case 41:
                    _a.sent();
                    mes("" + var_3601);
                    pos(280, var_3595);
                    if (var_3600 != 0) {
                        mes("" + var_1069[var_3597][10] + " 階");
                    }
                    pos(10, var_3595 + 12);
                    mes("Lv " + var_1069[var_3597][3]);
                    color(255, 255, 255);
                    pos(60, var_3595 + 12);
                    mes("" + var_1069[var_3597][11] + " G");
                    pos(10, var_3595 + 24);
                    mes("HP " + var_1069[var_3597][5] + "/" + var_1069[var_3597][4]);
                    color(255, 255, 255);
                    pos(10, var_3595 + 36);
                    mes("精神 " + var_1069[var_3597][7] + "/" + var_1069[var_3597][6]);
                    color(255, 255, 255);
                    pos(0, var_3595 + 46);
                    mes("―――――――――――――――――――――――――――");
                    pos(115, var_3595 + 12);
                    color(255, 255, 0);
                    var_3558 = var_1069[var_3597][13];
                    return [4 /*yield*/, func924()];
                case 42:
                    _a.sent();
                    if (var_1069[var_3597][13] == 0) {
                        var_3559 = "なし";
                    }
                    if (var_1069[var_3597][13] != 0) {
                        if (var_1069[var_3597][14] != 0) {
                            var_3559 = var_3559 + "+" + var_1069[var_3597][14];
                        }
                        if (var_1069[var_3597][23] >= 2) {
                            var_3559 = var_3559 + " ★" + var_1069[var_3597][23];
                        }
                        if (var_1069[var_3597][24] >= 1) {
                            var_3559 = "☆" + var_3559;
                        }
                    }
                    var_3559 = "[攻]" + var_3559;
                    mes(var_3559);
                    color(255, 180, 90);
                    var_3558 = var_1069[var_3597][16];
                    return [4 /*yield*/, func924()];
                case 43:
                    _a.sent();
                    if (var_1069[var_3597][16] == 0) {
                        var_3559 = "なし";
                    }
                    if (var_1069[var_3597][16] != 0) {
                        if (var_1069[var_3597][17] != 0) {
                            var_3559 = var_3559 + "+" + var_1069[var_3597][17];
                        }
                        if (var_1069[var_3597][25] >= 2) {
                            var_3559 = var_3559 + " ★" + var_1069[var_3597][25];
                        }
                        if (var_1069[var_3597][26] >= 1) {
                            var_3559 = "☆" + var_3559;
                        }
                    }
                    var_3559 = "[防]" + var_3559;
                    mes(var_3559);
                    color(240, 0, 240);
                    var_3558 = var_1069[var_3597][19];
                    return [4 /*yield*/, func924()];
                case 44:
                    _a.sent();
                    if (var_1069[var_3597][19] == 0) {
                        var_3559 = "なし";
                    }
                    if (var_1069[var_3597][19] != 0) {
                        if (var_1069[var_3597][20] != 0) {
                            var_3559 = var_3559 + "+" + var_1069[var_3597][20];
                        }
                        if (var_1069[var_3597][27] >= 2) {
                            var_3559 = var_3559 + " ★" + var_1069[var_3597][27];
                        }
                        if (var_1069[var_3597][28] >= 1) {
                            var_3559 = "☆" + var_3559;
                        }
                    }
                    var_3559 = "[能]" + var_3559;
                    mes(var_3559);
                    var_3595 = var_3595 + 58;
                    _a.label = 45;
                case 45:
                    var_3597++;
                    _a.label = 46;
                case 46:
                    ++cnt5_1;
                    return [3 /*break*/, 40];
                case 47:
                    redraw(1);
                    _a.label = 48;
                case 48: return [2 /*return*/];
            }
        });
    });
}
function func927() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_16;
        return __generator(this, function (_a) {
            dbgprt(927);
            var_3568 = 0;
            var_3569 = 0;
            var_3541 = 1;
            for (cnt1_16 = 0; cnt1_16 < 30; ++cnt1_16) {
                getstr(var_1068[var_3569], var_3543, var_3568, 44);
                if (cnt1_16 == 0) {
                    var_1070[var_3589] = "" + var_1068[cnt1_16];
                }
                if (cnt1_16 != 0 && cnt1_16 != 29) {
                    var_1069[var_3589][cnt1_16] = int(var_1068[cnt1_16]);
                }
                if (cnt1_16 == 29) {
                    var_1071[var_3589] = var_1068[cnt1_16];
                }
                var_3568 = var_3568 + strsize;
                var_3569++;
            }
            return [2 /*return*/];
        });
    });
}
function func928() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(928);
            if (var_3600 == 0) {
                var_3601 = "地上";
            }
            if (var_3600 == 1) {
                var_3601 = "ホテル外 ";
            }
            if (var_3600 == 2) {
                var_3601 = "大迷宮 ";
            }
            if (var_3600 == 3) {
                var_3601 = "試練　";
            }
            if (var_3600 == 4) {
                var_3601 = "一巡後 ";
            }
            if (var_3600 == 5) {
                var_3601 = "鉄獄 ";
            }
            if (var_3600 >= 6) {
                var_3601 = "";
            }
            return [2 /*return*/];
        });
    });
}
function func929() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(929);
                    return [4 /*yield*/, func426()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, func427()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, func428()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, func429()];
                case 4:
                    _a.sent();
                    if (var_270 == 135) {
                        if (var_358 == 122) {
                            var_357 = 101;
                        }
                        if (var_358 == 101) {
                            var_357 = 122;
                        }
                    }
                    var_3516 = dim(30);
                    var_3516[1] = var_840;
                    var_3516[2] = var_352;
                    var_3516[3] = var_211;
                    var_3516[4] = var_566;
                    var_3516[5] = var_565;
                    var_3516[6] = var_3079;
                    var_3516[7] = var_534;
                    var_3516[8] = var_91;
                    var_3516[9] = var_415;
                    var_3516[10] = var_62;
                    var_3516[11] = var_357;
                    var_3516[12] = var_233[var_553].Var4;
                    var_3516[13] = var_580;
                    var_3516[14] = var_358;
                    var_3516[15] = var_233[var_554].Var4;
                    var_3516[16] = var_581;
                    var_3516[17] = var_215;
                    var_3516[18] = var_233[var_555].Var4;
                    var_3516[19] = var_410;
                    var_3516[20] = var_233[var_556].Var3;
                    var_3516[21] = var_233[var_553].Var19;
                    var_3516[22] = var_233[var_553].Var13;
                    var_3516[23] = var_233[var_554].Var19;
                    var_3516[24] = var_233[var_554].Var13;
                    var_3516[25] = var_233[var_555].Var19;
                    var_3516[26] = var_233[var_555].Var13;
                    var_3566 = 0;
                    var_3567 = "捨送";
                    for (cnt1_17 = 0; cnt1_17 < 27; ++cnt1_17) {
                        var_3567 = "" + var_3567 + "," + var_3516[var_3566];
                        var_3566++;
                    }
                    var_3567 = "" + var_3567 + "," + var_1170;
                    tcpput(var_3567, var_1050);
                    tcpput("\n", var_1050);
                    return [2 /*return*/];
            }
        });
    });
}
function func930() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(930);
                    if (!(var_494[1] != "")) return [3 /*break*/, 2];
                    var_3560 = var_494[1];
                    return [4 /*yield*/, func931()];
                case 1:
                    _a.sent();
                    var_3561 = "" + var_3562 + "" + var_494[1];
                    tcpput(var_3561, var_1050);
                    tcpput("\n", var_1050);
                    _a.label = 2;
                case 2:
                    if (!(var_494[2] != "")) return [3 /*break*/, 4];
                    var_3560 = var_494[2];
                    return [4 /*yield*/, func931()];
                case 3:
                    _a.sent();
                    var_3563 = "" + var_3562 + "" + var_494[2];
                    tcpput(var_3563, var_1050);
                    tcpput("\n", var_1050);
                    _a.label = 4;
                case 4: return [4 /*yield*/, func929()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func931() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(931);
            var_3562 = "行白";
            if (instr(var_3560, 0, "やっつけた") != (-1)) {
                var_3562 = "行水";
            }
            if (instr(var_3560, 0, "ﾃﾞｨｱﾎﾞﾛはﾚﾍﾞﾙ") != (-1)) {
                var_3562 = "行青";
            }
            if (instr(var_3560, 0, "モンスターハウスだ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "ﾊﾞｯﾄﾞ･ｶﾝﾊﾟﾆｰ･ﾊｳｽ だ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "ﾊｲｳｪｲｽﾀｰ･ﾙｰﾑ だ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "吸血鬼ハウスだ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "スタンドハウスだ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "杜王町ハウスだ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "水族館だ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "ファイトクラブだッ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "広大な砂漠だ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "幻覚の迷宮だ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "西戸ハウスだ！") != (-1)) {
                var_3562 = "行黄";
            }
            if (instr(var_3560, 0, "を踏んだ") != (-1)) {
                var_3562 = "行茶";
            }
            if (instr(var_3560, 0, "地面に何か書いてある。") != (-1)) {
                var_3562 = "行茶";
            }
            if (instr(var_3560, 0, "ﾃﾞｨｱﾎﾞﾛ　再起不能") != (-1)) {
                var_3562 = "行赤";
            }
            if (instr(var_3560, 0, "ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。") != (-1)) {
                var_3562 = "行赤";
            }
            if (instr(var_3560, 0, "さびしいよォォォォ……ボス") != (-1)) {
                var_3562 = "行赤";
            }
            if (instr(var_3560, 0, "電話ください………") != (-1)) {
                var_3562 = "行赤";
            }
            if (instr(var_3560, 0, "」は") != (-1)) {
                var_3562 = "行緑";
            }
            if (instr(var_3560, 0, "手で運ばれていった") != (-1)) {
                var_3562 = "行緑";
            }
            return [2 /*return*/];
        });
    });
}
function func932() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(932);
                    var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + var_91 + "階に降りた";
                    if (var_73[var_66][var_67] == 2) {
                        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + var_91 + "階に上った";
                    }
                    tcpput(var_3561, var_1050);
                    tcpput("\n", var_1050);
                    return [4 /*yield*/, func929()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func933() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dbgprt(933);
                    if (var_62 == 1) {
                        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはホテルの外に出た";
                    }
                    if (var_62 == 2) {
                        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはレクイエムの大迷宮に入った";
                    }
                    if (var_62 == 3) {
                        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはさらなる試練に向かった";
                    }
                    if (var_62 == 4) {
                        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは一巡後の世界へ進んだ";
                    }
                    if (var_62 == 5) {
                        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + var_21 + "に入った";
                    }
                    tcpput(var_3561, var_1050);
                    tcpput("\n", var_1050);
                    return [4 /*yield*/, func929()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function func934() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dbgprt(934);
            if (var_624 == 0) {
                var_3602 = "０";
            }
            if (var_624 == 1) {
                var_3602 = "１";
            }
            if (var_624 == 2) {
                var_3602 = "２";
            }
            if (var_624 == 3) {
                var_3602 = "３";
            }
            if (var_624 == 4) {
                var_3602 = "４";
            }
            if (var_624 == 5) {
                var_3602 = "５";
            }
            if (var_624 == 6) {
                var_3602 = "６";
            }
            if (var_624 == 7) {
                var_3602 = "７";
            }
            if (var_624 == 8) {
                var_3602 = "８";
            }
            var_3603 = "窓数" + var_3602;
            tcpput(var_3603, var_1050);
            tcpput("\n", var_1050);
            return [2 /*return*/];
        });
    });
}
function func935() {
    return __awaiter(this, void 0, void 0, function () {
        var cnt1_18;
        return __generator(this, function (_a) {
            dbgprt(935);
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(5, 35);
            gcopy(12, 0, 0, 332, var_2326 - 30);
            color(255, 255, 255);
            line(9, 37, 330, 37);
            line(9, var_2326, 330, var_2326);
            line(8, 38, 8, var_2326 - 2);
            line(332, 38, 332, var_2326 - 2);
            pset(9, 38);
            pset(331, 38);
            pset(9, var_2326 - 1);
            pset(331, var_2326 - 1);
            var_230 = 45;
            for (cnt1_18 = 0; cnt1_18 < var_2324; ++cnt1_18) {
                font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                pos(40, var_230);
                color(255, 255, 255);
                var_3572 = 0;
                var_3573 = var_1069[cnt1_18][10];
                if (var_91 < var_3573) {
                    var_3572 = var_3573 - var_91;
                }
                if (var_91 > var_3573) {
                    var_3572 = var_91 - var_3573;
                }
                if (var_91 == var_3573) {
                    var_3572 = 0;
                }
                if (var_62 == 0) {
                    color(255, 0, 0);
                }
                if (var_62 != var_1069[cnt1_18][12]) {
                    color(255, 0, 0);
                }
                if (var_3572 >= 5) {
                    color(255, 0, 0);
                }
                if (var_3572 >= 2 && var_3572 <= 4) {
                    color(255, 255, 0);
                }
                if (var_3572 == 1) {
                    color(0, 255, 255);
                }
                if (var_3572 == 0) {
                    color(0, 255, 255);
                }
                if (var_2321[cnt1_18] == var_40) {
                    color(150, 150, 150);
                }
                if (var_2321[cnt1_18] == "(no entry)") {
                    color(150, 150, 150);
                }
                mes("" + var_2321[cnt1_18]);
                var_230 = var_230 + 22;
            }
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
//# sourceMappingURL=func9.js.map