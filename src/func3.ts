
function func323(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(323);
        var_764 = 0;
        var_1075 = 6;
        for (let cnt1 = 0; cnt1 < 38; ++cnt1) {
            var_1076 = 6;
            for (let cnt2 = 0; cnt2 < 56; ++cnt2) {
                if (peek(var_983, var_764) == 35) {
                    var_71[var_1076][var_1075] = 0;
                }
                if (peek(var_983, var_764) == 46) {
                    var_71[var_1076][var_1075] = 1;
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
                if (peek(var_983, var_764) == 97) {
                    var_71[var_1076][var_1075] = 10;
                }
                if (peek(var_983, var_764) == 98) {
                    var_71[var_1076][var_1075] = 11;
                }
                if (peek(var_983, var_764) == 99) {
                    var_71[var_1076][var_1075] = 12;
                }
                if (peek(var_983, var_764) == 94) {
                    var_71[var_1076][var_1075] = 13;
                }
                if (peek(var_983, var_764) == 45) {
                    var_71[var_1076][var_1075] = 14;
                }
                var_1076 = var_1076 + 1;
                var_764 = var_764 + 1;
            }
            var_1075 = var_1075 + 1;
        }
        if (var_1141 == 1) {
    
            var_73 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
            yield func045();
        }
        if (var_1142 == 1) {
            yield func383(); // アイテムの出現数を増やす動作処理
        }
        if (var_1143 == 1) {
            yield func555();
        }
        if (var_1144 == 1) {
            var_65 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
            yield func046();
        }
        var_74 = dim(length1= 70, length2 = 70, length3 = null, length4 = null);
        var_75 = dim(20);
        var_493 = dim(20);
        if (var_1144 == 2) {
            var_201 = 1;
            var_75[var_201] = 1;
        }
        var_1143 = 0;
        var_1142 = 0;
        var_1144 = 0;
        var_1141 = 0;
        return;
    });
}
function func324(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(324);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        var_1145 = 0;
        if (var_585 == 1) {
            var_1145 = 2;
        }
        if (var_585 == 2) {
            var_1145 = 5;
        }
        if (var_585 == 3) {
            var_1145 = 10;
        }
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
        var_449 = var_67 - 5;
        var_763 = -1;
        if (var_449 < 0) {
            var_449 = 0;
        }
        for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
            var_447 = var_66 - 5;
            var_764 = -1;
            if (var_447 < 0) {
                var_447 = 0;
            }
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
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
                pos(var_1150, var_1151);
                if (var_71[var_447][var_449] != 0 && var_71[var_447][var_449] <= 12) {
                    if (var_87[var_447][var_449] <= 4) {
                        gcopy(5, 0, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_87[var_447][var_449] >= 5 && var_87[var_447][var_449] <= 7) {
                        gcopy(5, 40, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_87[var_447][var_449] == 8 || var_87[var_447][var_449] == 9) {
                        gcopy(5, 80, y_axis_map_image * 40, 40, 40);
                    }
                }
                if (var_71[var_447][var_449] == 14) {
                    if (var_87[var_447][var_449] <= 4) {
                        gcopy(5, 120, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_87[var_447][var_449] >= 5 && var_87[var_447][var_449] <= 7) {
                        gcopy(5, 160, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_87[var_447][var_449] == 8 || var_87[var_447][var_449] == 9) {
                        gcopy(5, 200, y_axis_map_image * 40, 40, 40);
                    }
                }
                if (var_349 >= 1 && var_71[var_447][var_449] != 0 && var_71[var_447][var_449] != 13 && var_71[var_447][var_449] <= 14) {
                    var_1152 = 0;
                    if (var_346[0][1] == var_447 && var_346[0][2] == var_449) {
                        var_1152 = 1;
                    }
                    if (var_346[1][1] == var_447 && var_346[1][2] == var_449) {
                        var_1152 = 1;
                    }
                    if (var_346[2][1] == var_447 && var_346[2][2] == var_449) {
                        var_1152 = 1;
                    }
                    if (var_346[3][1] == var_447 && var_346[3][2] == var_449) {
                        var_1152 = 1;
                    }
                    if (var_346[4][1] == var_447 && var_346[4][2] == var_449) {
                        var_1152 = 1;
                    }
                    if (var_346[6][1] == var_447 && var_346[6][2] == var_449) {
                        var_1152 = 1;
                    }
                    if (var_346[7][1] == var_447 && var_346[7][2] == var_449) {
                        var_1152 = 1;
                    }
                    if (var_346[8][1] == var_447 && var_346[8][2] == var_449) {
                        var_1152 = 1;
                    }
                    if (var_346[9][1] == var_447 && var_346[9][2] == var_449) {
                        var_1152 = 1;
                    }
                    if (var_1152 == 1) {
                        if (var_349 == 1) {
                            gcopy(3, 1320, 160, 40, 40);
                        }
                        if (var_349 == 2) {
                            gcopy(3, 1360, 160, 40, 40);
                        }
                        if (var_349 == 3) {
                            gcopy(3, 1400, 160, 40, 40);
                        }
                        if (var_349 == 4) {
                            gcopy(3, 1440, 160, 40, 40);
                        }
                        if (var_349 == 5) {
                            gcopy(3, 1480, 160, 40, 40);
                        }
                    }
                }
                if (var_71[var_447][var_449] == 0) {
                    if (var_87[var_447][var_449] <= 5) {
                        gcopy(5, 240, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_87[var_447][var_449] == 6 || var_87[var_447][var_449] == 7) {
                        gcopy(5, 280, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_87[var_447][var_449] == 8 || var_87[var_447][var_449] == 9) {
                        gcopy(5, 320, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_1146][var_1148] != 0 && var_71[var_1146][var_1148] <= 14 && var_71[var_1146][var_449] == 0 && var_71[var_447][var_1148] == 0) {
                        gcopy(5, 760, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_1147][var_1148] != 0 && var_71[var_1147][var_1148] <= 14 && var_71[var_1147][var_449] == 0 && var_71[var_447][var_1148] == 0) {
                        gcopy(5, 800, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_1146][var_1149] != 0 && var_71[var_1146][var_1149] <= 14 && var_71[var_447][var_1149] == 0 && var_71[var_1146][var_449] == 0) {
                        gcopy(5, 840, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_1147][var_1149] != 0 && var_71[var_1147][var_1149] <= 14 && var_71[var_447][var_1149] == 0 && var_71[var_1147][var_449] == 0) {
                        gcopy(5, 880, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 14 && var_71[var_447][var_1149] == 0 && var_71[var_447][var_1148] == 0) {
                        gcopy(5, 520, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 14 && var_71[var_447][var_1149] == 0 && var_71[var_447][var_1148] == 0) {
                        gcopy(5, 560, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 14 && var_71[var_1146][var_449] == 0 && var_71[var_1147][var_449] == 0) {
                        gcopy(5, 480, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 14 && var_71[var_1146][var_449] == 0 && var_71[var_1147][var_449] == 0) {
                        if (var_87[var_447][var_449] <= 3) {
                            gcopy(5, 360, y_axis_map_image * 40, 40, 40);
                        }
                        if (var_87[var_447][var_449] == 4 || var_87[var_447][var_449] == 5) {
                            gcopy(5, 400, y_axis_map_image * 40, 40, 40);
                        }
                        if (var_87[var_447][var_449] == 6 || var_87[var_447][var_449] == 7) {
                            gcopy(5, 440, y_axis_map_image * 40, 40, 40);
                        }
                        if (var_87[var_447][var_449] == 8 || var_87[var_447][var_449] == 9) {
                            if (var_1153 == 0 || var_1153 == 1 || var_1153 == 8) {
                                gcopy(5, 1240, y_axis_map_image * 40, 40, 40);
                            }
                            if (var_1153 == 2 || var_1153 == 3 || var_1153 == 9) {
                                gcopy(5, 1280, y_axis_map_image * 40, 40, 40);
                            }
                            if (var_1153 == 4 || var_1153 == 5 || var_1153 == 10) {
                                gcopy(5, 1320, y_axis_map_image * 40, 40, 40);
                            }
                            if (var_1153 == 6 || var_1153 == 7 || var_1153 == 11) {
                                gcopy(5, 1360, y_axis_map_image * 40, 40, 40);
                            }
                        }
                    }
                    if (var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 14 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 14 && var_71[var_447][var_1149] == 0 && var_71[var_1147][var_449] == 0) {
                        gcopy(5, 600, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 14 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 14 && var_71[var_447][var_1149] == 0 && var_71[var_1146][var_449] == 0) {
                        gcopy(5, 640, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 14 && var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 14 && var_71[var_447][var_1148] == 0 && var_71[var_1147][var_449] == 0) {
                        gcopy(5, 680, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 14 && var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 14 && var_71[var_447][var_1148] == 0 && var_71[var_1146][var_449] == 0) {
                        gcopy(5, 720, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 14 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 14 && var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 14 && var_71[var_447][var_1149] == 0) {
                        gcopy(5, 1000, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 14 && var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 14 && var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 14 && var_71[var_447][var_1148] == 0) {
                        gcopy(5, 1040, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 14 && var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 14 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 14 && var_71[var_1147][var_449] == 0) {
                        gcopy(5, 1080, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 14 && var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 14 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 14 && var_71[var_1146][var_449] == 0) {
                        gcopy(5, 1120, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 14 && var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 14 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 14 && var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 14) {
                        gcopy(5, 1160, y_axis_map_image * 40, 40, 40);
                    }
                }
                if (var_71[var_447][var_449] == 13) {
                    if (var_1153 == 0 || var_1153 == 1 || var_1153 == 2 || var_1153 == 3) {
                        gcopy(5, 1520, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_1153 == 4 || var_1153 == 5 || var_1153 == 6 || var_1153 == 7) {
                        gcopy(5, 1560, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_1153 == 8 || var_1153 == 9 || var_1153 == 10 || var_1153 == 11) {
                        gcopy(5, 1600, y_axis_map_image * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1148] != 13) {
                        if (var_71[var_1146][var_449] != 13 && var_71[var_1147][var_449] != 13) {
                            pos(var_1150 + 8, var_1151);
                            gcopy(5, 1400 + 8, y_axis_map_image * 40, 24, 4);
                        }
                        if (var_71[var_1146][var_449] != 13 && var_71[var_1147][var_449] == 13) {
                            pos(var_1150 + 8, var_1151);
                            gcopy(5, 1400 + 8, y_axis_map_image * 40, 32, 4);
                        }
                        if (var_71[var_1146][var_449] == 13 && var_71[var_1147][var_449] != 13) {
                            pos(var_1150, var_1151);
                            gcopy(5, 1400, y_axis_map_image * 40, 32, 4);
                        }
                        if (var_71[var_1146][var_449] == 13 && var_71[var_1147][var_449] == 13) {
                            pos(var_1150, var_1151);
                            gcopy(5, 1400, y_axis_map_image * 40, 40, 4);
                        }
                    }
                    if (var_71[var_447][var_1149] != 13) {
                        if (var_71[var_1146][var_449] != 13 && var_71[var_1147][var_449] != 13) {
                            pos(var_1150 + 8, var_1151 + 36);
                            gcopy(5, 1400 + 8, y_axis_map_image * 40 + 36, 24, 4);
                        }
                        if (var_71[var_1146][var_449] != 13 && var_71[var_1147][var_449] == 13) {
                            pos(var_1150 + 8, var_1151 + 36);
                            gcopy(5, 1400 + 8, y_axis_map_image * 40 + 36, 32, 4);
                        }
                        if (var_71[var_1146][var_449] == 13 && var_71[var_1147][var_449] != 13) {
                            pos(var_1150, var_1151 + 36);
                            gcopy(5, 1400, y_axis_map_image * 40 + 36, 32, 4);
                        }
                        if (var_71[var_1146][var_449] == 13 && var_71[var_1147][var_449] == 13) {
                            pos(var_1150, var_1151 + 36);
                            gcopy(5, 1400, y_axis_map_image * 40 + 36, 40, 4);
                        }
                    }
                    if (var_71[var_1146][var_449] != 13) {
                        if (var_71[var_447][var_1149] != 13 && var_71[var_447][var_1148] != 13) {
                            pos(var_1150, var_1151 + 8);
                            gcopy(5, 1440, y_axis_map_image * 40 + 8, 4, 24);
                        }
                        if (var_71[var_447][var_1149] != 13 && var_71[var_447][var_1148] == 13) {
                            pos(var_1150, var_1151);
                            gcopy(5, 1440, y_axis_map_image * 40, 4, 32);
                        }
                        if (var_71[var_447][var_1149] == 13 && var_71[var_447][var_1148] != 13) {
                            pos(var_1150, var_1151 + 8);
                            gcopy(5, 1440, y_axis_map_image * 40 + 8, 4, 32);
                        }
                        if (var_71[var_447][var_1149] == 13 && var_71[var_447][var_1148] == 13) {
                            pos(var_1150, var_1151);
                            gcopy(5, 1440, y_axis_map_image * 40, 4, 40);
                        }
                    }
                    if (var_71[var_1147][var_449] != 13) {
                        if (var_71[var_447][var_1149] != 13 && var_71[var_447][var_1148] != 13) {
                            pos(var_1150 + 36, var_1151 + 8);
                            gcopy(5, 1440 + 36, y_axis_map_image * 40 + 8, 4, 24);
                        }
                        if (var_71[var_447][var_1149] != 13 && var_71[var_447][var_1148] == 13) {
                            pos(var_1150 + 36, var_1151);
                            gcopy(5, 1440 + 36, y_axis_map_image * 40, 4, 32);
                        }
                        if (var_71[var_447][var_1149] == 13 && var_71[var_447][var_1148] != 13) {
                            pos(var_1150 + 36, var_1151 + 8);
                            gcopy(5, 1440 + 36, y_axis_map_image * 40 + 8, 4, 32);
                        }
                        if (var_71[var_447][var_1149] == 13 && var_71[var_447][var_1148] == 13) {
                            pos(var_1150 + 36, var_1151);
                            gcopy(5, 1440 + 36, y_axis_map_image * 40, 4, 40);
                        }
                    }
                    if (var_71[var_447][var_1148] != 13 && var_71[var_1146][var_449] != 13) {
                        pos(var_1150, var_1151);
                        gcopy(5, 1480, y_axis_map_image * 40, 8, 8);
                    }
                    if (var_71[var_447][var_1149] != 13 && var_71[var_1146][var_449] != 13) {
                        pos(var_1150, var_1151 + 32);
                        gcopy(5, 1480, y_axis_map_image * 40 + 32, 8, 8);
                    }
                    if (var_71[var_447][var_1148] != 13 && var_71[var_1147][var_449] != 13) {
                        pos(var_1150 + 32, var_1151);
                        gcopy(5, 1480 + 32, y_axis_map_image * 40, 8, 8);
                    }
                    if (var_71[var_447][var_1149] != 13 && var_71[var_1147][var_449] != 13) {
                        pos(var_1150 + 32, var_1151 + 32);
                        gcopy(5, 1480 + 32, y_axis_map_image * 40 + 32, 8, 8);
                    }
                    if (var_71[var_447][var_1148] == 13 && var_71[var_1146][var_449] == 13 && var_71[var_1146][var_1148] != 13) {
                        pos(var_1150, var_1151);
                        gcopy(5, 1480 + 16, y_axis_map_image * 40 + 16, 4, 4);
                    }
                    if (var_71[var_447][var_1148] == 13 && var_71[var_1147][var_449] == 13 && var_71[var_1147][var_1148] != 13) {
                        pos(var_1150 + 37, var_1151);
                        gcopy(5, 1480 + 21, y_axis_map_image * 40 + 16, 4, 4);
                    }
                    if (var_71[var_447][var_1149] == 13 && var_71[var_1146][var_449] == 13 && var_71[var_1146][var_1149] != 13) {
                        pos(var_1150 - 1, var_1151 + 37);
                        gcopy(5, 1480 + 15, y_axis_map_image * 40 + 22, 4, 4);
                    }
                    if (var_71[var_447][var_1149] == 13 && var_71[var_1147][var_449] == 13 && var_71[var_1147][var_1149] != 13) {
                        pos(var_1150 + 37, var_1151 + 37);
                        gcopy(5, 1480 + 21, y_axis_map_image * 40 + 22, 4, 4);
                    }
                }
                var_764++;
                var_447++;
            }
            var_763++;
            var_449++;
        }
        // Ver0.1403にて修正。
        if (var_262 == 1 && var_595 != 2) { // var_262 == 1 なので、dangeon_number = 0 であれば
            yield func163(); // ヴェネチアホテルのアイテム配置
        }
        // Ver0.1403にて追加。
        if (var_262 == 1 && var_595 == 2) { // var_262 == 1 なので、dangeon_number = 0 であれば
            yield func163b(); // 酒場の配置(マップ読み込み)
        }
        if (special_floor == 9) { // 幽霊部屋
            yield func164(); // 幽霊部屋の配置(マップ読み込み)
        }
        gsel(36);
        if (var_163 == 0 && var_151 == 0) {
            var_1154 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                var_1155 = 0;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    pos(var_1155, var_1154);
                    gcopy(0, var_1155, var_1154, 40, 40);
                    var_1155 = var_1155 + 40;
                }
                var_1154 = var_1154 + 40;
            }
            gsel(0);
            return;
        }
        if (var_163 == 1 || var_151 >= 1) {
            var_1154 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                var_1155 = 0;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    pos(var_1155, var_1154);
                    gcopy(24, var_1155, var_1154, 40, 40);
                    var_1155 = var_1155 + 40;
                }
                var_1154 = var_1154 + 40;
            }
            gsel(24);
            return;
        }
        return;
    });
}
function func325(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(325);
        if (var_490 == 1) {
            color(0, 0, 0);
    
            boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        }
        if (var_262 == 1) { // var_262 == 1 なので、dangeon_number = 0 であれば
            return;
        }
        if (special_floor == 7 && var_132 == 0) { // 広大な砂漠
            if (var_490 == 1) {
                pos(70, 150);
        
                font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                color(255, 255, 255);
                mes("ここでは地図が役に立たない！");
            }
            return;
        }
        if (var_501 == 0 || var_490 == 1) {
            color(0, 0, 0);
            var_1156 = 10;
            var_1157 = 0;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                var_1158 = 0;
                var_1159 = 15;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    pos(var_1158, var_1156);
                    gmode(4, null, null, var_690);
                    if (y_axis_map_image == 7 || y_axis_map_image == 13 || y_axis_map_image == 19 || y_axis_map_image == 24) {
                        var_1160 = var_690 + 20;
                        if (var_1160 >= 255) {
                            var_1160 = 255;
                        }
                        gmode(4, null, null, var_1160);
                    }
                    if (var_490 == 1) {
                        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    }
                    gcopy(4, var_1159, var_1157, 40, 40);
            
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                    if (var_490 == 1) {
                        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    }
                    gcopy(7, var_1159, var_1157, 40, 40);
                    var_1159 = var_1159 + 40;
                    var_1158 = var_1158 + 40;
                }
                var_1157 = var_1157 + 40;
                var_1156 = var_1156 + 40;
            }
        }
        return;
    });
}
function func326(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(326);
        var_449 = var_67 - 5;
        for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
            var_447 = var_66 - 5;
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                if (var_73[var_447][var_449] >= 1) {
                    yield func553();
                }
                if (var_127 == 0 && var_132 == 0) {
                    if (var_77[var_447][var_449] != 0) {
                        // Ver0.1403にて修正。
                        if (dangeon_number != 0) {
                            yield func396(); // 床のアイテム表示処理
                        }
                        if (dangeon_number == 0 && var_595 == 1) {
                            yield func396(); // 床のアイテム表示処理
                        }
                    }
                    if (var_80[var_447][var_449] != 0) {
                        yield func538();
                    }
                    if (var_65[var_447][var_449] == 1) {
                        yield func344();
                    }
                    if (var_82[var_447][var_449] != 0) {
                        var_1161 = 1;
                        yield func565();
                        var_1161 = 0;
                    }
                }
                var_447++;
            }
            var_449++;
        }
        if (var_1162 == 1 && var_127 == 0 && var_132 == 0) {
            yield func621();
        }
        var_449 = var_67 - 5;
        for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
            var_447 = var_66 - 5;
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                if (var_65[var_447][var_449] == 1) {
                    yield func345();
                }
                if (var_82[var_447][var_449] != 0 && var_127 == 0 && var_132 == 0) {
                    yield func565();
                }
                if (var_146 >= 1) {
                    yield func327(); // スーパーフライの鉄塔描写処理
                }
                var_447++;
            }
            var_449++;
        }
        return;
    });
}
// スーパーフライの鉄塔描写処理
function func327(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(327);
        if (var_447 == var_147 && var_449 == var_148) {
            if (var_199 == 4) {
                pos((var_147 - var_66 + 4) * 40 - var_778, (var_148 - var_67 + 4) * 40 - 40 + var_1145);
            }
            if (var_199 == 6) {
                pos((var_147 - var_66 + 4) * 40 + var_778, (var_148 - var_67 + 4) * 40 - 40 + var_1145);
            }
            if (var_199 == 8) {
                pos((var_147 - var_66 + 4) * 40, (var_148 - var_67 + 4) * 40 - 40 - var_778 + var_1145);
            }
            if (var_199 == 2) {
                pos((var_147 - var_66 + 4) * 40, (var_148 - var_67 + 4) * 40 - 40 + var_778 + var_1145);
            }
            if (var_199 == 1) {
                pos((var_147 - var_66 + 4) * 40 - var_778, (var_148 - var_67 + 4) * 40 - 40 + var_778 + var_1145);
            }
            if (var_199 == 3) {
                pos((var_147 - var_66 + 4) * 40 + var_778, (var_148 - var_67 + 4) * 40 - 40 + var_778 + var_1145);
            }
            if (var_199 == 7) {
                pos((var_147 - var_66 + 4) * 40 - var_778, (var_148 - var_67 + 4) * 40 - 40 - var_778 + var_1145);
            }
            if (var_199 == 9) {
                pos((var_147 - var_66 + 4) * 40 + var_778, (var_148 - var_67 + 4) * 40 - 40 - var_778 + var_1145);
            }
            if (var_217 == 1) {
                pos((var_147 - var_66 + 4) * 40, (var_148 - var_67 + 4) * 40 - 40);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(3, 800, 200, 40, 80); // buffer(3)は"img_mychara.gif" スーパーフライの鉄塔
        }
        return;
    });
}
function func328(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(328);
        if (var_747 >= 1) {
            yield func351();
        }
        if (var_1163 == 1) { // 敵エンヤ婆の能力発動フラグONの場合
            color(0, 0, 0);
            if (var_1164 == 0) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
            }
            if (var_1164 == 1) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
            }
            if (var_1164 == 2) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 90);
            }
            if (var_1164 == 3) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
            }
            if (var_1164 == 4) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 90);
            }
            if (var_1164 == 5) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
            }
            // buffer(8)は"img1.gif"。X座標0、Y座標800から切り取り長さ X方向340、Y方向340
            // 絵:スタンドジャッジメントの発動？エンヤ婆の能力が発動した時の絵と思われる。
            gcopy(8, 0, 800, 340, 340);
        }
        if (var_312 == 1) {
            color(0, 0, 0);
            gmode(4, null, null, var_311);
            pos(0, 0);
            gcopy(19, 0, 0, 340, 340);
        }
        if (var_1165 == 1) {
            color(0, 0, 0);
            if (var_1164 == 0) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 10);
            }
            if (var_1164 == 1) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
            }
            if (var_1164 == 2) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
            }
            if (var_1164 == 3) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 90);
            }
            if (var_1164 == 4) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
            }
            if (var_1164 == 5) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
            }
            gcopy(19, 0, 0, 340, 340);
        }
        // Ver0.1403にて削除。亀の中から外へ出る場所の光表示処理。func163へ移動。
        return;
    });
}
// 画面全体に黒いブラインドをかける処理
function func329(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(329);
        color(0, 0, 0);
        gmode(mode = 4, data2 = null, data3 = null, alpha = 200); // 255で完全コピー。200なので少し透明になる
        var_763 = 0;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            var_764 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                pos(var_764 * var_35, var_763 * var_36);
                // buffer(8)は"img1.gif"。X座標760、Y座標880から切り取り長さ X方向40、Y方向40
                // 絵:黒い四角いマス
                gcopy(8, 760, 880, 40, 40);
                var_764++; // こうすることで、9回ループした時には9 * 40 = 360となる
            }
            var_763++; // こうすることで、9回ループした時には9 * 40 = 360となる
        }
        return;
    });
}

function func330(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(330);
        if (var_529 == 1) {
            color(0, 0, 0);
            if (var_1164 == 0) {
                pos(0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 10);
            }
            if (var_1164 == 1) {
                pos(0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
            }
            if (var_1164 == 2) {
                pos(0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
            }
            if (var_1164 == 3) {
                pos(0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 90);
            }
            if (var_1164 == 4) {
                pos(0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
            }
            if (var_1164 == 5) {
                pos(0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
            }
            gcopy(19, 0, 0, 340, 340);
        }
        if (var_529 == 2) {
            color(0, 0, 0);
            if (var_1164 == 0) {
                pos(0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
            }
            if (var_1164 == 1) {
                pos(0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 0);
            }
            if (var_1164 == 2) {
                pos(0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
            }
            if (var_1164 == 3) {
                pos(0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 0);
            }
            if (var_1164 == 4) {
                pos(0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
            }
            if (var_1164 == 5) {
                pos(0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 0);
            }
            gcopy(19, 0, 0, 340, 340);
        }
        if (var_127 == 1 || var_132 >= 1) {
            return;
        }
        if (var_103 == 1 || var_262 == 1) { // var_262 == 1 なので、dangeon_number = 0 であれば
            gsel(0);
            if (var_163 == 1 || var_151 >= 1) {
                gsel(24);
            }
            return;
        }
        gsel(36);
        // var_201 == 14 幻惑の迷宮、0 通常ダンジョン、
        if (var_201 == 14 || var_201 == 0 || var_201 == 13) {
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            var_1166 = 0;
            var_1167 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                var_1168 = 0;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    if (var_1166 != 30 && var_1166 != 31 && var_1166 != 32 && var_1166 != 39 && var_1166 != 40 && var_1166 != 41 && var_1166 != 48 && var_1166 != 49 && var_1166 != 50) {
                        pos(var_1168, var_1167);
                        // buffer(8)は"img1.gif"。X座標760、Y座標880から切り取り長さ X方向40、Y方向40
                        // 絵:黒い四角いマス
                        gcopy(8, 760, 880, 40, 40);
                    }
                    var_1166++;
                    var_1168 = var_1168 + 40;
                }
                var_1167 = var_1167 + 40;
            }
            pos(120, 120);
            gcopy(8, 520, 840, 60, 60);
            pos(180, 120);
            gcopy(8, 580, 840, 60, 60);
            pos(120, 180);
            gcopy(8, 520, 900, 60, 60);
            pos(180, 180);
            gcopy(8, 580, 900, 60, 60);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(120, 120);
            gcopy(8, 520, 120, 60, 60);
            pos(180, 120);
            gcopy(8, 580, 120, 60, 60);
            pos(120, 180);
            gcopy(8, 520, 180, 60, 60);
            pos(180, 180);
            gcopy(8, 580, 180, 60, 60);
            gsel(0);
            if (var_163 == 1 || var_151 >= 1) {
                gsel(24);
            }
            color(250, 255, 255);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 255);
            var_1167 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                var_1168 = 0;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    pos(var_1168, var_1167);
                    gcopy(36, var_1168, var_1167, 40, 40);
                    var_1168 = var_1168 + 40;
                }
                var_1167 = var_1167 + 40;
            }
            return;
        }
        if (var_201 >= 1 && var_201 <= 12) {
            var_449 = var_67 - 5;
            var_763 = -1;
            if (var_449 < 0) {
                var_449 = 0;
            }
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                var_447 = var_66 - 5;
                var_764 = -1;
                if (var_447 < 0) {
                    var_447 = 0;
                }
                for (let cnt3 = 0; cnt3 < 11; ++cnt3) {
                    var_1146 = var_447 - 1;
                    if (var_1146 < 0) {
                        var_1146 = 0;
                    }
                    var_1147 = var_447 + 1;
                    var_1149 = var_449 + 1;
                    var_1148 = var_449 - 1;
                    if (var_1148 < 0) {
                        var_1148 = 0;
                    }
                    if (var_409 == 0) {
                        var_1169 = 0;
                    }
                    if (var_409 == 1) {
                        var_1169 = 10;
                    }
                    if (var_409 == 2) {
                        var_1169 = 20;
                    }
                    if (var_409 == 3) {
                        var_1169 = 30;
                    }
                    if (var_71[var_447][var_449] != var_201) {
                        color(0, 0, 0);
                
                        gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                        pos(var_764 * var_35, var_763 * var_36);
                        if (var_217 == 0) {
                            if (var_199 == 4) {
                                pos(var_764 * var_35 - var_1169, var_763 * var_36);
                            }
                            if (var_199 == 6) {
                                pos(var_764 * var_35 + var_1169, var_763 * var_36);
                            }
                            if (var_199 == 8) {
                                pos(var_764 * var_35, var_763 * var_36 - var_1169);
                            }
                            if (var_199 == 2) {
                                pos(var_764 * var_35, var_763 * var_36 + var_1169);
                            }
                            if (var_199 == 1) {
                                pos(var_764 * var_35 - var_1169, var_763 * var_36 + var_1169);
                            }
                            if (var_199 == 3) {
                                pos(var_764 * var_35 + var_1169, var_763 * var_36 + var_1169);
                            }
                            if (var_199 == 7) {
                                pos(var_764 * var_35 - var_1169, var_763 * var_36 - var_1169);
                            }
                            if (var_199 == 9) {
                                pos(var_764 * var_35 + var_1169, var_763 * var_36 - var_1169);
                            }
                        }
                        gcopy(8, 760, 880, 40, 40);
                    }
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    if (var_71[var_1146][var_449] == 0 || var_71[var_1146][var_449] == 13) {
                        if (var_71[var_1146][var_1148] == var_201 && var_71[var_1146][var_1149] == var_201) {
                            pos(var_764 * var_35, var_763 * var_36);
                            if (var_217 == 0) {
                                if (var_199 == 4) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36);
                                }
                                if (var_199 == 6) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36);
                                }
                                if (var_199 == 8) {
                                    pos(var_764 * var_35, var_763 * var_36 - var_1169);
                                }
                                if (var_199 == 2) {
                                    pos(var_764 * var_35, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 1) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 3) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 7) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - var_1169);
                                }
                                if (var_199 == 9) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - var_1169);
                                }
                            }
                            gcopy(8, 760, 920, 40, 40);
                        }
                    }
                    if (var_71[var_1147][var_449] == 0 || var_71[var_1147][var_449] == 13) {
                        if (var_71[var_1147][var_1148] == var_201 && var_71[var_1147][var_1149] == var_201) {
                            pos(var_764 * var_35, var_763 * var_36);
                            if (var_217 == 0) {
                                if (var_199 == 4) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36);
                                }
                                if (var_199 == 6) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36);
                                }
                                if (var_199 == 8) {
                                    pos(var_764 * var_35, var_763 * var_36 - var_1169);
                                }
                                if (var_199 == 2) {
                                    pos(var_764 * var_35, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 1) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 3) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 7) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - var_1169);
                                }
                                if (var_199 == 9) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - var_1169);
                                }
                            }
                            gcopy(8, 760, 920, 40, 40);
                        }
                    }
                    if (var_71[var_447][var_1148] == 0 || var_71[var_447][var_1148] == 13) {
                        if (var_71[var_1146][var_1148] == var_201 && var_71[var_1147][var_1148] == var_201) {
                            pos(var_764 * var_35, var_763 * var_36 - 10);
                            if (var_217 == 0) {
                                if (var_199 == 4) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - 10);
                                }
                                if (var_199 == 6) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - 10);
                                }
                                if (var_199 == 8) {
                                    pos(var_764 * var_35, var_763 * var_36 - var_1169 - 10);
                                }
                                if (var_199 == 2) {
                                    pos(var_764 * var_35, var_763 * var_36 + var_1169 - 10);
                                }
                                if (var_199 == 1) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 + var_1169 - 10);
                                }
                                if (var_199 == 3) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 + var_1169 - 10);
                                }
                                if (var_199 == 7) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - var_1169 - 10);
                                }
                                if (var_199 == 9) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - var_1169 - 10);
                                }
                            }
                            gcopy(8, 760, 920, 40, 40);
                        }
                    }
                    if (var_71[var_447][var_1149] == 0 || var_71[var_447][var_1149] == 13) {
                        if (var_71[var_1146][var_1149] == var_201 && var_71[var_1147][var_1149] == var_201) {
                            pos(var_764 * var_35, var_763 * var_36);
                            if (var_217 == 0) {
                                if (var_199 == 4) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36);
                                }
                                if (var_199 == 6) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36);
                                }
                                if (var_199 == 8) {
                                    pos(var_764 * var_35, var_763 * var_36 - var_1169);
                                }
                                if (var_199 == 2) {
                                    pos(var_764 * var_35, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 1) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 3) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 7) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - var_1169);
                                }
                                if (var_199 == 9) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - var_1169);
                                }
                            }
                            gcopy(8, 760, 920, 40, 40);
                        }
                    }
                    if (var_71[var_447][var_449] == var_201 || var_71[var_1146][var_449] == var_201 || var_71[var_1147][var_449] == var_201 || var_71[var_447][var_1149] == var_201 || var_71[var_447][var_1148] == var_201) {
                        if (var_71[var_447][var_1148] == var_201) {
                            pos(var_764 * var_35, var_763 * var_36 - 10);
                            if (var_217 == 0) {
                                if (var_199 == 4) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - 10);
                                }
                                if (var_199 == 6) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - 10);
                                }
                                if (var_199 == 8) {
                                    pos(var_764 * var_35, var_763 * var_36 - var_1169 - 10);
                                }
                                if (var_199 == 2) {
                                    pos(var_764 * var_35, var_763 * var_36 + var_1169 - 10);
                                }
                                if (var_199 == 1) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 + var_1169 - 10);
                                }
                                if (var_199 == 3) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 + var_1169 - 10);
                                }
                                if (var_199 == 7) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - var_1169 - 10);
                                }
                                if (var_199 == 9) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - var_1169 - 10);
                                }
                            }
                        }
                        if (var_71[var_447][var_449] == var_201 || var_71[var_1146][var_449] == var_201 || var_71[var_1147][var_449] == var_201 || var_71[var_447][var_1149] == var_201) {
                            pos(var_764 * var_35, var_763 * var_36);
                            if (var_217 == 0) {
                                if (var_199 == 4) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36);
                                }
                                if (var_199 == 6) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36);
                                }
                                if (var_199 == 8) {
                                    pos(var_764 * var_35, var_763 * var_36 - var_1169);
                                }
                                if (var_199 == 2) {
                                    pos(var_764 * var_35, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 1) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 3) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 7) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - var_1169);
                                }
                                if (var_199 == 9) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - var_1169);
                                }
                            }
                        }
                        gcopy(8, 760, 920, 40, 40);
                    }
                    if (var_71[var_447][var_449] != var_201) {
                        if (var_71[var_1147][var_1149] == var_201 && var_71[var_1147][var_449] != var_201 && var_71[var_447][var_1149] != var_201 && var_71[var_1146][var_1149] != var_201 && var_71[var_1147][var_1148] != var_201) {
                            pos(var_764 * var_35, var_763 * var_36);
                            if (var_217 == 0) {
                                if (var_199 == 4) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36);
                                }
                                if (var_199 == 6) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36);
                                }
                                if (var_199 == 8) {
                                    pos(var_764 * var_35, var_763 * var_36 - var_1169);
                                }
                                if (var_199 == 2) {
                                    pos(var_764 * var_35, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 1) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 3) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 7) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - var_1169);
                                }
                                if (var_199 == 9) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - var_1169);
                                }
                            }
                            gcopy(8, 750, 0, 40, 40);
                        }
                        if (var_71[var_1146][var_1149] == var_201 && var_71[var_1146][var_449] != var_201 && var_71[var_447][var_1149] != var_201 && var_71[var_1147][var_1149] != var_201 && var_71[var_1146][var_1148] != var_201) {
                            pos(var_764 * var_35, var_763 * var_36);
                            if (var_217 == 0) {
                                if (var_199 == 4) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36);
                                }
                                if (var_199 == 6) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36);
                                }
                                if (var_199 == 8) {
                                    pos(var_764 * var_35, var_763 * var_36 - var_1169);
                                }
                                if (var_199 == 2) {
                                    pos(var_764 * var_35, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 1) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 3) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 + var_1169);
                                }
                                if (var_199 == 7) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - var_1169);
                                }
                                if (var_199 == 9) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - var_1169);
                                }
                            }
                            gcopy(8, 750, 40, 40, 40);
                        }
                        if (var_71[var_1146][var_1148] == var_201 && var_71[var_1146][var_449] != var_201 && var_71[var_447][var_1148] != var_201 && var_71[var_1146][var_1149] != var_201 && var_71[var_1147][var_1148] != var_201) {
                            pos(var_764 * var_35, var_763 * var_36 - 10);
                            if (var_217 == 0) {
                                if (var_199 == 4) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - 10);
                                }
                                if (var_199 == 6) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - 10);
                                }
                                if (var_199 == 8) {
                                    pos(var_764 * var_35, var_763 * var_36 - var_1169 - 10);
                                }
                                if (var_199 == 2) {
                                    pos(var_764 * var_35, var_763 * var_36 + var_1169 - 10);
                                }
                                if (var_199 == 1) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 + var_1169 - 10);
                                }
                                if (var_199 == 3) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 + var_1169 - 10);
                                }
                                if (var_199 == 7) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - var_1169 - 10);
                                }
                                if (var_199 == 9) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - var_1169 - 10);
                                }
                            }
                            gcopy(8, 750, 80, 41, 40);
                        }
                        if (var_71[var_1147][var_1148] == var_201 && var_71[var_1147][var_449] != var_201 && var_71[var_447][var_1148] != var_201 && var_71[var_1147][var_1149] != var_201 && var_71[var_1146][var_1148] != var_201) {
                            pos(var_764 * var_35, var_763 * var_36 - 10);
                            if (var_217 == 0) {
                                if (var_199 == 4) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - 10);
                                }
                                if (var_199 == 6) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - 10);
                                }
                                if (var_199 == 8) {
                                    pos(var_764 * var_35, var_763 * var_36 - var_1169 - 10);
                                }
                                if (var_199 == 2) {
                                    pos(var_764 * var_35, var_763 * var_36 + var_1169 - 10);
                                }
                                if (var_199 == 1) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 + var_1169 - 10);
                                }
                                if (var_199 == 3) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 + var_1169 - 10);
                                }
                                if (var_199 == 7) {
                                    pos(var_764 * var_35 - var_1169, var_763 * var_36 - var_1169 - 10);
                                }
                                if (var_199 == 9) {
                                    pos(var_764 * var_35 + var_1169, var_763 * var_36 - var_1169 - 10);
                                }
                            }
                            gcopy(8, 750, 120, 40, 40);
                        }
                    }
                    var_764++;
                    var_447++;
                }
                var_763++;
                var_449++;
            }
            gsel(0);
            if (var_163 == 1 || var_151 >= 1) {
                gsel(24);
            }
            color(250, 255, 255);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 255);
            var_1167 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                var_1168 = 0;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    pos(var_1168, var_1167);
                    gcopy(36, var_1168, var_1167, 40, 40);
                    var_1168 = var_1168 + 40;
                }
                var_1167 = var_1167 + 40;
            }
            return;
        }
        return;
    });
}
// 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
// 消費アイテムを使った時のエフェクト等 (正方形が重なってピンク色にピカピカ光る)
// ハーヴェストやエアロスミス等アイテム、敵の位置が表示
function func331(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(331);
        var_1170 = "";
        if (var_176 >= 1) {
            yield func333();
            return;
        }
        if (var_175 >= 1) {
            yield func332();
            return;
        }
        gsel(4);
        color(0, 0, 0);
        boxf(left = 0, top1 = 0, right = 680, bottom = 300);
        var_1171 = 0;
        const map_elem_size = 6;

        for (let cnt1 = 0; cnt1 < var_31 + 1; ++cnt1) {
            var_1172 = 0;
            for (let cnt2 = 0; cnt2 < var_32 + 1; ++cnt2) {
                color(var_687, var_688, var_689);
                if (var_71[var_1171][var_1172] != 0 && var_71[var_1171][var_1172] != 13) {
                    if (var_74[var_1171][var_1172] == 1 || var_102 == 1) {

                        boxf(var_1171 * var_37, var_1172 * var_38, var_1171 * var_37 + map_elem_size, var_1172 * var_38 + map_elem_size);
                    }
                }
                var_1173 = 1;
                for (let cnt3 = 0; cnt3 < 12; ++cnt3) {
                    if (var_71[var_1171][var_1172] == var_1173) {
                        if (var_74[var_1171][var_1172] == 0 && (var_75[var_1173] == 1 || var_102 == 1)) {
    
                            boxf(var_1171 * var_37, var_1172 * var_38, var_1171 * var_37 + map_elem_size, var_1172 * var_38 + map_elem_size);
                        }
                    }
                    var_1173 = var_1173 + 1;
                }
                color(240, 240, 20);
                if (var_71[var_1171][var_1172] != 0 && var_71[var_1171][var_1172] != 13) {
                    if (var_74[var_1171][var_1172] == 2) {

                        boxf(var_1171 * var_37, var_1172 * var_38, var_1171 * var_37 + map_elem_size, var_1172 * var_38 + map_elem_size);
                    }
                }
                var_1172 = var_1172 + 1;
            }
            var_1171 = var_1171 + 1;
        }
        gsel(7);
        var_1174 = var_66 - 4;
        var_1175 = var_66 + 4;
        var_1176 = var_67 - 4;
        var_1177 = var_67 + 4;
        color(0, 0, 0);
        boxf(left = 0, top1 = 0, right = 680, bottom = 300);
        var_1171 = 0;
        for (let cnt1 = 0; cnt1 < var_31 + 1; ++cnt1) {
            var_1172 = 0;
            for (let cnt2 = 0; cnt2 < var_32 + 1; ++cnt2) {
                var_1178 = var_82[var_1171][var_1172];
                var_1179 = 0;
                if (var_71[var_1171][var_1172] != 0 && var_71[var_1171][var_1172] != 13) {
                    var_1179 = 1;
                }
                if (var_73[var_1171][var_1172] == 1 && var_127 == 0 && var_132 == 0) {
                    // No = 365 ★階段感知の能力discを装備している時
                    if (var_102 == 1 || var_98 == 1 || equip_disc[365] == 1) {
                        color(0, 255, 255);

                        boxf(var_1171 * var_37, var_1172 * var_38, var_1171 * var_37 + 4, var_1172 * var_38 + 4);
                        color(0, 0, 0);

                        boxf(var_1171 * var_37 + 1, var_1172 * var_38 + 1, var_1171 * var_37 + 3, var_1172 * var_38 + 3);
                        var_1179 = 5;
                    }
                }
                if (var_73[var_1171][var_1172] == 2 && var_127 == 0 && var_132 == 0) {
                    // No = 365 ★階段感知の能力discを装備している時
                    if (var_102 == 1 || var_99 == 1 || equip_disc[365] == 1) {
                        color(0, 255, 255);

                        boxf(var_1171 * var_37, var_1172 * var_38, var_1171 * var_37 + 4, var_1172 * var_38 + 4);
                        color(0, 0, 0);

                        boxf(var_1171 * var_37 + 1, var_1172 * var_38 + 1, var_1171 * var_37 + 3, var_1172 * var_38 + 3);
                        var_1179 = 5;
                    }
                }
                if (var_77[var_1171][var_1172] > 0 && var_127 == 0 && var_132 == 0) {
                    var_1180 = var_77[var_1171][var_1172];
                    // No = 301 ハーヴェストを装備している時
                    if (var_100 == 1 || equip_disc[301] == 1 || var_78[var_1180].Var10 == 1) {
                        color(0, 255, 255);
                        boxf(var_1171 * var_37, var_1172 * var_38, var_1171 * var_37 + 4, var_1172 * var_38 + 4);
                        var_1179 = 3;
                    }
                }
                if (var_80[var_1171][var_1172] > 0 && var_127 == 0 && var_132 == 0) {
                    var_1181 = var_80[var_1171][var_1172];
                    // No = 303 ドラゴンズ・ドリームのdiscを装備している時 or  // var_170 罠が見えるようになるフラグON(あくまでMAP上に見えるだけ。噴上裕也のDISC限定) or var_121 罠が見えるようになるフラグON
                    if (var_81[var_1181][4] == 1 || var_170 == 1 || var_121 == 1 || equip_disc[303] == 1) {
                        color(255, 0, 255);
                        var_1182 = 0;
                        if (var_81[var_1181][0] == 82 || var_81[var_1181][0] == 86 || var_81[var_1181][0] == 87 || var_81[var_1181][0] == 88 || var_81[var_1181][0] == 90 || var_81[var_1181][0] == 91 || var_81[var_1181][0] == 92 || var_81[var_1181][0] == 93 || var_81[var_1181][0] == 94 || var_81[var_1181][0] == 99 || var_81[var_1181][0] == 79 || var_81[var_1181][0] == 80 || var_81[var_1181][0] == 81 || var_81[var_1181][0] == 78 || var_81[var_1181][0] == 77) {
                            color(0, 255, 255);
                            var_1182 = 1;
                        }
                        line(var_1171 * var_37 - 1, var_1172 * var_38 - 1, var_1171 * var_37 + 4, var_1172 * var_38 + 4);
                        line(var_1171 * var_37 + 5, var_1172 * var_38 - 1, var_1171 * var_37, var_1172 * var_38 + 4);
                        var_1179 = 2;
                        if (var_1182 == 1) {
                            var_1179 = 9;
                        }
                    }
                }
                if (var_65[var_1171][var_1172] == 1) {
                    color(255, 255, 255);
                    pset(var_1171 * var_37 + 1, var_1172 * var_38);
                    pset(var_1171 * var_37 + 2, var_1172 * var_38);
                    pset(var_1171 * var_37 + 3, var_1172 * var_38);
                    pset(var_1171 * var_37 + 1, var_1172 * var_38 + 4);
                    pset(var_1171 * var_37 + 2, var_1172 * var_38 + 4);
                    pset(var_1171 * var_37 + 3, var_1172 * var_38 + 4);

                    boxf(var_1171 * var_37, var_1172 * var_38 + 1, var_1171 * var_37 + 4, var_1172 * var_38 + 3);
                    var_1179 = 6;
                }
                if (var_82[var_1171][var_1172] > 0 && var_83[var_1178].Var0 != 50) {
                    var_1183 = 1;
                    if (var_83[var_1178].Var30 != 0) {
                        var_1183 = 0;
                        if (var_119 == 1) {
                            var_1183 = 1;
                        }
                        if (var_132 >= 1) { // 記憶DISC「ンドゥール」の効果発動フラグON
                            var_1183 = 1;
                        }
                        if (var_83[var_1178].Var0 == 85) {
                            // No = 320 メタリカを装備している時
                            if (var_140 != 0 || equip_disc[320] == 1) {
                                var_1183 = 1;
                            }
                        }
                        // No = 312 エアロスミスを装備している時
                        if (equip_disc[312] == 1) {
                            var_1183 = 1;
                        }
                    }
                    if (sympathy_id == 166) {
                        var_1183 = 1;
                    }
                    if (var_127 != 0 && var_119 == 0) {
                        var_1183 = 0;
                    }
                    if (var_127 != 0 && var_132 >= 1) { // 瞼が落ちていたり目が切り裂かれている場合 & 記憶DISC「ンドゥール」の効果発動フラグON
                        var_1183 = 1;
                    }
                    if (var_391 == 1) {
                        var_1183 = 1;
                    }
                    if (var_1183 == 1) {
                        color(255, 0, 0);
                        var_1184 = 0;
                        if (var_83[var_1178].Var31 == 4 || var_83[var_1178].Var31 == 5) {
                            if (var_83[var_1178].Var0 != 33 && var_83[var_1178].Var0 != 130 && var_83[var_1178].Var0 != 61) {
                                color(255, 255, 0);
                                var_1184 = 1;
                            }
                        }
                        if (var_83[var_1178].Var10 == var_201 && var_201 != 14) {
    
                            boxf(var_1171 * var_37, var_1172 * var_38, var_1171 * var_37 + 4, var_1172 * var_38 + 4);
                            var_1179 = 4;
                            if (var_1184 == 1) {
                                var_1179 = 8;
                            }
                        }
                        var_1185 = var_1171 - 1;
                        if (var_1185 < 0) {
                            var_1185 = var_1171;
                        }
                        var_1186 = var_1171 + 1;
                        if (var_1186 > var_33) {
                            var_1186 = var_1171;
                        }
                        var_1187 = var_1172 - 1;
                        if (var_1187 < 0) {
                            var_1187 = var_1172;
                        }
                        var_1188 = var_1172 + 1;
                        if (var_1188 > var_34) {
                            var_1188 = var_1172;
                        }
                        if (var_201 != 14 && var_201 != 0 && var_201 != 13) {
                            if (var_71[var_1185][var_1172] == var_201 || var_71[var_1186][var_1172] == var_201 || var_71[var_1171][var_1187] == var_201 || var_71[var_1171][var_1188] == var_201 || var_71[var_1185][var_1187] == var_201 || var_71[var_1185][var_1188] == var_201 || var_71[var_1186][var_1187] == var_201 || var_71[var_1186][var_1188] == var_201) {
        
                                boxf(var_1171 * var_37, var_1172 * var_38, var_1171 * var_37 + 4, var_1172 * var_38 + 4);
                                var_1179 = 4;
                                if (var_1184 == 1) {
                                    var_1179 = 8;
                                }
                            }
                        }
                        if (var_65[var_1185][var_1172] == 1 || var_65[var_1186][var_1172] == 1 || var_65[var_1171][var_1187] == 1 || var_65[var_1171][var_1188] == 1 || var_65[var_1185][var_1187] == 1 || var_65[var_1185][var_1188] == 1 || var_65[var_1186][var_1187] == 1 || var_65[var_1186][var_1188] == 1) {
    
                            boxf(var_1171 * var_37, var_1172 * var_38, var_1171 * var_37 + 4, var_1172 * var_38 + 4);
                            var_1179 = 4;
                            if (var_1184 == 1) {
                                var_1179 = 8;
                            }
                        }
                        // No = 312 エアロスミスのdiscを装備している時
                        if (var_101 == 1 || equip_disc[312] == 1 || var_132 >= 1 || var_391 == 1) {
    
                            boxf(var_1171 * var_37, var_1172 * var_38, var_1171 * var_37 + 4, var_1172 * var_38 + 4);
                            var_1179 = 4;
                            if (var_1184 == 1) {
                                var_1179 = 8;
                            }
                        }
                    }
                }
                if (var_407 >= 1 && var_1171 >= var_1174 && var_1171 <= var_1175 && var_1172 >= var_1176 && var_1172 <= var_1177) {
                    var_1170 = var_1170 + "" + var_1179;
                }
                var_1172 = var_1172 + 1;
            }
            if (var_407 >= 1 && var_1171 >= var_1174 && var_1171 <= var_1175 && var_1172 >= var_1176 && var_1172 <= var_1177) {
                if (var_67 == 35) {
                    var_1170 = var_1170 + "" + 0;
                }
                if (var_67 == 36) {
                    var_1170 = var_1170 + "" + 0;
                    var_1170 = var_1170 + "" + 0;
                }
                if (var_67 == 37) {
                    var_1170 = var_1170 + "" + 0;
                    var_1170 = var_1170 + "" + 0;
                    var_1170 = var_1170 + "" + 0;
                }
            }
            var_1171 = var_1171 + 1;
        }
        gsel(0);
        return;
    });
}
function func332(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(332);
        gsel(4);
        color(0, 0, 0);

        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        pos(110, 90);
        gcopy(17, 0, 360, 160, 180);
        gsel(7);
        color(0, 0, 0);

        boxf(left = 0, top1 = 0, right = 680, bottom = 300);
        gsel(0);
        if (var_407 >= 1) {
            for (let cnt2 = 0; cnt2 < 81; ++cnt2) {
                var_1170 = var_1170 + "" + 0;
            }
        }
        return;
    });
}
function func333(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(333);
        gsel(4);
        color(0, 0, 0);

        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        pos(110, 90);
        gcopy(17, 160, 360, 160, 180);
        gsel(7);
        color(0, 0, 0);

        boxf(left = 0, top1 = 0, right = 680, bottom = 300);
        gsel(0);
        if (var_407 >= 1) {
            for (let cnt2 = 0; cnt2 < 81; ++cnt2) {
                var_1170 = var_1170 + "" + 0;
            }
        }
        return;
    });
}
function func334(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(334);
        color(1, 1, 1);
        if (var_755 == 10) {
    
            boxf(left = 0, top1 = 0, right = 680, bottom = 40);
    
            boxf(left = 0, top1 = 230, right = 680, bottom = 680);
        }
        if (var_755 == 9) {
    
            boxf(left = 0, top1 = 0, right = 680, bottom = 39);
    
            boxf(left = 0, top1 = 232, right = 680, bottom = 680);
        }
        if (var_755 == 8) {
    
            boxf(left = 0, top1 = 0, right = 680, bottom = 37);
    
            boxf(left = 0, top1 = 235, right = 680, bottom = 680);
        }
        if (var_755 == 7) {
    
            boxf(left = 0, top1 = 0, right = 680, bottom = 35);
    
            boxf(left = 0, top1 = 240, right = 680, bottom = 680);
        }
        if (var_755 == 6) {
    
            boxf(left = 0, top1 = 0, right = 680, bottom = 30);
    
            boxf(left = 0, top1 = 250, right = 680, bottom = 680);
        }
        if (var_755 == 5) {
            boxf(left = 0, top1 = 0, right = 680, bottom = 25);
            boxf(left = 0, top1 = 265, right = 680, bottom = 680);
        }
        if (var_755 == 4) {
            boxf(left = 0, top1 = 0, right = 680, bottom = 20);
            boxf(left = 0, top1 = 280, right = 680, bottom = 680);
        }
        if (var_755 == 3) {
            boxf(left = 0, top1 = 0, right = 680, bottom = 15);
            boxf(left = 0, top1 = 295, right = 680, bottom = 680);
        }
        if (var_755 == 2) {
            boxf(left = 0, top1 = 0, right = 680, bottom = 10);
            boxf(left = 0, top1 = 310, right = 680, bottom = 680);
        }
        if (var_755 == 1) {
            boxf(left = 0, top1 = 0, right = 680, bottom = 5);
            boxf(left = 0, top1 = 330, right = 680, bottom = 680);
        }
        return;
    });
}
function func335(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(335);
        var_755 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 4;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 5;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 6;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 7;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 8;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 9;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 10;
        return;
    });
}
function func336(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(336);
        var_198 = 0;
        var_755 = 9;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 8;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 7;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 6;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 5;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 4;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_755 = 0;
        yield func337(); // メッセージ関係呼び出し
        return;
    });
}

// メッセージ関係呼び出し
function func337(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(337);
        yield await_(var_686);
        redraw(2);
        if (var_163 == 1 || var_151 >= 1) {
            gsel(24);
        }
        yield func324();
        yield func326();
        if (var_772 == 1) {
            yield func353();
        }
        yield func330();
        yield func328();
        if (var_243 >= 1) {
            yield func352();
        }
        if (var_1189 >= 1) {
            yield func355();
        }
        if (var_271 == 1) {
            yield func354();
        }
        if (var_1190 >= 1) {
            yield func413();
        }
        if (var_1191 == 1) {
            yield func412(); // アイテムを投げて床に落ちた時のアイテム表示処理
        }
        if (var_1192 >= 1) {
            yield func583(); // 敵の射撃攻撃モーション処理(ドット絵座標設定等)
        }
        if (var_1193 >= 1) {
            yield func348();
        }
        if (var_1194 == 1) {
            yield func347();
        }
        if (var_1195 == 1) {
            yield func648();
        }
        if (var_1196 == 1) {
            yield func671();
        }
        if (var_1197 > 0) {
            yield func350();
        }
        if (var_1198 > 0) {
            yield func582();
        }
        // var_127 = 1 瞼が落ちていたり目が見えない状態 & 記憶DISC「ンドゥール」の効果発動フラグON
        if (var_127 == 1 || var_132 >= 1) {
            yield func329(); // 画面全体に黒いブラインドをかける処理
        }
        yield func325();
        yield func342();
        yield func343();
        if (var_163 == 1) {
            gsel(25);
            pos(0, 0);
            gcopy(24, 0, 0, 340, 340);
            gsel(0);
            pos(0, 0);
            gmode(mode = 0, data2 = null, data3 = null, alpha = null);
            gcopy(25, 0, 0, 340, 340);
            if (var_490 == 0 && var_502 != 6) {
                yield func345();
            }
            if (var_243 >= 1) {
                yield func352();
            }
        }
        if (var_151 >= 1) {
            gsel(25);
            pos(0, 0);
            gcopy(24, 0, 0, 340, 340);
            gsel(0);
            pos(0, 0);
            gmode(mode = 0, data2 = null, data3 = null, alpha = null);
            gcopy(25, 0, 0, 340, 340);
            if (var_127 == 0 && var_132 == 0) {
                if (var_154 >= 1) {
                    yield func345();
                    if (var_243 >= 1) {
                        yield func352();
                    }
                }
                var_1199 = 1;
                yield func565();
                var_1199 = 0;
            }
        }
        if (var_755 >= 1) {
            yield func334();
        }
        if (var_1200 == 1) {
            yield func674();
        }
        if (var_198 == 1) {
            yield func048();
        }
        if (var_634 >= 10 || var_635 >= 1 || var_636 >= 1 || var_633 >= 1 || var_632 >= 1 || var_1201 >= 1) {
            yield func102(); // 各ボリューム調整キーを押した時の表示
        }
        if (open_item_menue == 1) { // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            yield func460(); // 道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具)
        }
        if (var_1202 == 1) {
            yield func714(); // 店での購入時のメッセージ表示
        }
        if (var_1203 == 1) {
            yield func485();
        }
        if (var_195 == 1) {
            yield func068();
            yield func069();
        }
        if (var_196 == 1) { // Mフラグ:メニュー画面 func054
            yield func054(); // メニュー画面を開いた時の表示(道具、足元、状態、設定)
        }
        if (var_405 == 1) {
            yield func063();
        }
        if (var_548 == 1) { // 選択肢処理フラグONであれば
            yield func840(); // 選択肢処理(はい、いいえ & 買う、やめる等)
        }
        if (var_1204 == 1) {
            yield func823();
        }
        if (var_1205 >= 1) {
            yield func800();
        }
        if (var_1206 == 1) {
            yield func804();
        }
        if (var_499 == 1) { // Mフラグ:設定画面 func056
            yield func056(); // メニュー画面の"設定"の表示 (マップON、履歴、資料、システム、終了)
        }
        if (var_1207 == 1) {
            yield func449(); // 魔法のランプでジャッジメントを召喚した時のメッセージ
        }
        if (var_765 == 1) {
            if (var_766 == 0 || var_766 == 1 || var_766 == 2) {
                yield func341();
            }
        }
        if (var_508 == 1) { // Mフラグ:資料(設定画面) func058
            yield func058(); // メニュー画面の設定からいける"資料"の表示
        }
        if (var_502 == 1) {
            yield func363();
        }
        if (var_502 == 3) {
            yield func373();
        }
        if (var_502 == 5) {
            yield func377();
        }
        if (var_502 == 6) {
            yield func379();
        }
        if (var_511 >= 1) {
            yield func360();
        }
        if (var_1208 == 1) {
            yield func528();
        }
        if (var_498 == 1) {
            yield func382();
        }
        if (var_1209 == 1) {
            yield func367(); // アイテムの名前や説明表示
        }
        if (var_68 == 1) {
            yield func077();
        }
        if (var_373 >= 1) {
            yield func078();
        }
        if (var_509 == 1) {
            yield func197();
        }
        if (var_900 == 1) {
            yield func196();
        }
        if (var_901 == 1) {
            yield func204();
        }
        if (var_904 == 1) {
            yield func207();
        }
        if (var_905 == 1) {
            yield func200();
        }
        if (var_902 == 1) {
            yield func210();
        }
        if (var_903 == 1) {
            yield func219();
        }
        if (var_630 >= 1) {
            yield func228();
        }
        if (var_1210 == 1) {
            yield func935();
        }
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        if (var_243 > 0) {
            var_243 = var_243 + 1;
            if (var_243 == 12) {
                var_243 = 0;
            }
        }
        if (var_1211 > 0) {
            var_1211 = var_1211 + 1;
            if (var_1211 >= 15) {
                var_1211 = 0;
            }
        }
        if (var_742 > 0) {
            var_742 = var_742 + 1;
            if (var_742 >= 15) {
                var_742 = 0;
            }
        }
        if (var_747 > 0) {
            var_747 = var_747 + 1;
            if (var_747 == 15) {
                var_747 = 0;
                var_1212 = 0;
            }
        }
        if (var_1197 > 0) {
            var_1197 = var_1197 + 1;
            if (var_1197 == 10) {
                var_1197 = 0;
            }
        }
        if (var_1198 > 0) {
            var_1198 = var_1198 + 1;
            if (var_1198 == 10) {
                var_1198 = 0;
            }
        }
        if (var_1189 > 0) {
            var_1189++;
            if (var_1189 == 10) {
                var_1189 = 0;
                var_1213 = 0;
            }
        }
        if (var_68 == 1) {
            var_599 = var_599 + 1;
            if (var_599 == 20) {
                var_599 = 0;
                var_68 = 0;
            }
        }
        var_784 = var_784 + 1;
        if (var_784 == 6) {
            var_784 = 0;
        }
        if (var_163 == 0 && var_151 == 0) {
            var_1153 = var_1153 + 1;
            if (var_1153 == 12) {
                var_1153 = 0;
            }
        }
        if (var_163 == 0 && var_151 == 0) {
            var_1164 = var_1164 + 1;
            if (var_1164 == 6) {
                var_1164 = 0;
            }
        }
        if (var_1214 >= 1) {
            var_1215 = var_1215 + 1;
            if (var_1215 == 6) {
                var_1215 = 0;
            }
        }
        if (var_108 == 1) {
            var_1216 = var_1216 + 1;
        }
        if (var_1196 == 1) {
            var_1217 = var_1217 + 1;
            if (var_1217 == 10) {
                var_1217 = 0;
                var_1196 = 0;
            }
        }
        if (var_1190 >= 1) {
            var_1190++;
            if (var_1190 >= 10) {
                var_1190 = 0;
            }
        }
        if (var_1218 >= 1) {
            var_1219 = var_1219 + 1;
            if (var_1219 == 26) {
                var_1219 = 0;
            }
        }
        if (var_1220 == 1) {
            var_1221 = var_1221 + 1;
            if (var_1221 >= 8) {
                var_1222 = 1;
            }
            if (var_1221 == 10) {
                var_1221 = 0;
                var_1220 = 0;
                var_1222 = 0;
                if (var_1223 == 1) {
                    var_1223 = 0;
                }
            }
        }
        if (var_1224 >= 1) {
            var_1225 = var_1225 + 1;
            if (var_1224 != 10 && var_1225 >= 10) {
                var_1225 = 0;
            }
        }
        if (var_634 >= 1) {
            var_634++;
            var_632 = 0;
            var_633 = 0;
            if (var_634 == 100) {
                var_634 = 0;
            }
        }
        if (var_632 >= 1) {
            var_632++;
            if (var_632 >= 30) {
                var_632 = 0;
            }
        }
        if (var_633 >= 1) {
            var_633++;
            if (var_633 >= 30) {
                var_633 = 0;
            }
        }
        if (var_635 >= 1) {
            var_635++;
            if (var_635 == 30) {
                var_635 = 0;
            }
        }
        if (var_636 >= 1) {
            var_636++;
            if (var_636 == 30) {
                var_636 = 0;
            }
        }
        if (var_630 >= 1) {
            var_630++;
            if (var_630 == 30) {
                var_630 = 0;
            }
        }
        if (var_151 == 0) {
            var_1226 = var_1226 + 1;
            if (var_1226 == 12) {
                var_1226 = 0;
            }
        }
        if (var_163 == 0) {
            var_1227 = 1;
            for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
                if (var_83[var_1227].Var0 != 0) {
                    if (var_151 != 0 && var_152 == var_1227) {
                        var_83[var_1227].Var32 = var_83[var_1227].Var32 + 1;
                        if (var_83[var_1227].Var32 >= 12) {
                            var_83[var_1227].Var32 = 0;
                        }
                    }
                    if (var_151 == 0) {
                        var_83[var_1227].Var32 = var_83[var_1227].Var32 + 1;
                        if (var_83[var_1227].Var32 >= 12) {
                            var_83[var_1227].Var32 = 0;
                        }
                    }
                }
                var_1227 = var_1227 + 1;
            }
        }
        if (var_765 == 0) {
            var_300 = var_300 + 1;
            if (var_300 > 40) {
                var_300 = 0;
                var_198 = 0;
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
            }
        }
        var_1228 = var_1228 + 1;
        if (var_1228 == 2) {
            var_1228 = 0;
            if (var_1229 > 0) {
                var_1229 = var_1229 + 1;
                if (var_1229 > 5) {
                    var_1229 = 0;
                }
            }
        }
        if (var_407 >= 1) {
            var_1230 = ginfo(3);
            if (var_407 == 1) {
                yield func899();
            }
            if (var_407 == 2) {
                yield func926();
            }
            gsel(var_1230);
        }
        return;
    });
}


function func338(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(338);
        if (var_637 < 2) {
            gsel(26);
            gmode(mode = 0, data2 = 680, data3 = 680, alpha = null);
            pos(340, 340);
            grotate(0, 0, 0, 0, 340, 340);
            gsel(0);
            gmode(mode = 0, data2 = null, data3 = null, alpha = null);
            pos(0, 0);
            gcopy(26, 0, 0, 340, 340);
            gmode(mode = 0, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_637 >= 2) {
            gsel(26);
            gmode(mode = 0, data2 = 680, data3 = 680, alpha = null);
            pos(Math.floor(var_643 / 2), Math.floor(var_644 / 2));
            grotate(0, 0, 0, 0, var_643, var_644);
            gsel(0);
            gmode(mode = 0, data2 = null, data3 = null, alpha = null);
            pos(0, 0);
            gcopy(26, 0, 0, var_643, var_644);
            gmode(mode = 0, data2 = null, data3 = null, alpha = null);
            return;
        }
        return;
    });
}
function func339(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(339);
        yield wait(1);
        if (var_407 >= 1) {
            var_1230 = ginfo(3);
            if (var_407 == 1) {
                yield func899();
            }
            if (var_407 == 2) {
                yield func926();
            }
            gsel(var_1230);
        }
        return;
    });
}
// キー入力による選択処理
function func340(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(680);
        var_765 = 1;
        var_766 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func080(); // 各キー入力確認
            if (key_Z_on == 0 && key_X_on == 0 && key_A_on == 0 && key_C_on == 0) {
                break;
            }
            yield func337(); // メッセージ関係呼び出し
            var_300 = 1;
            var_198 = 1;
            var_766++;
            if (var_766 == 6) {
                var_766 = 0;
            }
        }
        var_766 = 0;
        for (let cnt1 = 0; true; ++cnt1) {
            yield func080(); // 各キー入力確認
            if (key_Z_on == 1) { // キーZ入力確認
                break;
            }
            if (key_X_on == 1) {
                break;
            }
            if (key_A_on == 1) { // キーA入力確認
                break;
            }
            if (key_S_on == 1) { // キーS入力確認
                break;
            }
            if (key_Shift_on == 1) { // キーShift入力確認
                break;
            }
            if (key_C_on == 1) { // キーC入力確認
                break;
            }
            if (key_F_on == 1) { // Ver0.1401にて追加。キーF入力確認
                break;
            }
            yield func337(); // メッセージ関係呼び出し
            var_300 = 1;
            var_198 = 1;
            var_766++;
            if (var_766 == 6) {
                var_766 = 0;
            }
        }
        var_766 = 0;
        var_765 = 0;
        return;
    });
}
function func341(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(341);
        font("ＭＳ ゴシック", 12);
        color(255, 255, 255);
        pos(170, 300);
        mes("▼");
        return;
    });
}
function func342(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(342);
        if (var_1233 == 1) {
            return;
        }
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);

        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        color(1, 1, 1);
        if (var_350 <= 0) {
            color(255, 255, 0);
        }
        if (current_floor >= 100) {
            var_44 = 45;
        }
        if (current_floor < 100) {
            var_44 = 35;
        }
        pos(var_44, var_41 + 2);
        mes("F");
        pos(var_45, var_41 + 2);
        mes("Lv");
        pos(var_47, var_41 + 2);
        mes("HP");
        pos(var_51, var_41 + 2);
        mes("/");
        pos(var_59, var_41 + 2);
        mes("G");
        pos(var_44, var_41 + 4);
        mes("F");
        pos(var_45, var_41 + 4);
        mes("Lv");
        pos(var_47, var_41 + 4);
        mes("HP");
        pos(var_51, var_41 + 4);
        mes("/");
        pos(var_59, var_41 + 4);
        mes("G");
        pos(var_44 - 1, var_41 + 3);
        mes("F");
        pos(var_45 - 1, var_41 + 3);
        mes("Lv");
        pos(var_47 - 1, var_41 + 3);
        mes("HP");
        pos(var_51 - 1, var_41 + 3);
        mes("/");
        pos(var_59 - 1, var_41 + 3);
        mes("G");
        pos(var_44 + 1, var_41 + 3);
        mes("F");
        pos(var_45 + 1, var_41 + 3);
        mes("Lv");
        pos(var_47 + 1, var_41 + 3);
        mes("HP");
        pos(var_51 + 1, var_41 + 3);
        mes("/");
        pos(var_59 + 1, var_41 + 3);
        mes("G");
        color(95, 160, 200);
        pos(var_44, var_41 + 3);
        mes("F");
        pos(var_45, var_41 + 3);
        mes("Lv");
        pos(var_47, var_41 + 3);
        mes("HP");
        pos(var_51, var_41 + 3);
        mes("/");
        pos(var_59, var_41 + 3);
        mes("G");

        font("ＭＳ Ｐゴシック", 20, 1);
        color(1, 1, 1);
        if (current_floor < 10) {
            pos(var_42 - 1, var_41);
        }
        if (current_floor >= 10) {
            pos(var_43 - 1, var_41);
        }
        if (var_262 == 0) { // var_262 == 0 なので、dangeon_number = 0 でなければ
            // current_floorは数値なので、toString() を使って文字列へ変換
            mes(current_floor.toString());
        }
        if (var_262 == 1) { // var_262 == 1 なので、dangeon_number = 0 であれば
            mes("1");
        }
        pos(var_46 - 1, var_41);
        mes(current_level.toString());
        if (var_211 < 10) {
            pos(var_48 - 1, var_41);
        }
        if (var_211 >= 10) {
            pos(var_49 - 1, var_41);
        }
        if (var_211 >= 100) {
            pos(var_50 - 1, var_41);
        }
        mes(var_211);
        pos(var_52 - 1, var_41);
        mes(var_352);
        if (wallet < 10) {
            pos(var_53 - 1, var_41);
        }
        if (wallet >= 10) {
            pos(var_54 - 1, var_41);
        }
        if (wallet >= 100) {
            pos(var_55 - 1, var_41);
        }
        if (wallet >= 1000) {
            pos(var_56 - 1, var_41);
        }
        if (wallet >= 10000) {
            pos(var_57 - 1, var_41);
        }
        if (wallet >= 100000) {
            pos(var_58 - 1, var_41);
        }
        // walletは数値なので、toString() を使って文字列へ変換
        mes(wallet.toString());
        if (current_floor < 10) {
            pos(var_42 + 2, var_41);
        }
        if (current_floor >= 10) {
            pos(var_43 + 2, var_41);
        }
        if (var_262 == 0) { // var_262 == 0 なので、dangeon_number = 0 でなければ
            // current_floorは数値なので、toString() を使って文字列へ変換
            mes(current_floor.toString());
        }
        if (var_262 == 1) { // var_262 == 1 なので、dangeon_number = 0 であれば
            mes("1");
        }
        pos(var_46 + 2, var_41);
        mes(current_level.toString());
        if (var_211 < 10) {
            pos(var_48 + 2, var_41);
        }
        if (var_211 >= 10) {
            pos(var_49 + 2, var_41);
        }
        if (var_211 >= 100) {
            pos(var_50 + 2, var_41);
        }
        mes(var_211);
        pos(var_52 + 2, var_41);
        mes(var_352);
        if (wallet < 10) {
            pos(var_53 + 2, var_41);
        }
        if (wallet >= 10) {
            pos(var_54 + 2, var_41);
        }
        if (wallet >= 100) {
            pos(var_55 + 2, var_41);
        }
        if (wallet >= 1000) {
            pos(var_56 + 2, var_41);
        }
        if (wallet >= 10000) {
            pos(var_57 + 2, var_41);
        }
        if (wallet >= 100000) {
            pos(var_58 + 2, var_41);
        }
        // walletは数値なので、toString() を使って文字列へ変換
        mes(wallet.toString());
        if (current_floor < 10) {
            pos(var_42, var_41 - 1);
        }
        if (current_floor >= 10) {
            pos(var_43, var_41 - 1);
        }
        if (var_262 == 0) { // var_262 == 0 なので、dangeon_number = 0 でなければ
            // current_floorは数値なので、toString() を使って文字列へ変換
            mes(current_floor.toString());
        }
        if (var_262 == 1) { // var_262 == 1 なので、dangeon_number = 0 であれば
            mes("1");
        }
        pos(var_46, var_41 - 1);
        mes(current_level.toString());
        if (var_211 < 10) {
            pos(var_48, var_41 - 1);
        }
        if (var_211 >= 10) {
            pos(var_49, var_41 - 1);
        }
        if (var_211 >= 100) {
            pos(var_50, var_41 - 1);
        }
        mes(var_211);
        pos(var_52, var_41 - 1);
        mes(var_352);
        if (wallet < 10) {
            pos(var_53, var_41 - 1);
        }
        if (wallet >= 10) {
            pos(var_54, var_41 - 1);
        }
        if (wallet >= 100) {
            pos(var_55, var_41 - 1);
        }
        if (wallet >= 1000) {
            pos(var_56, var_41 - 1);
        }
        if (wallet >= 10000) {
            pos(var_57, var_41 - 1);
        }
        if (wallet >= 100000) {
            pos(var_58, var_41 - 1);
        }
        // walletは数値なので、toString() を使って文字列へ変換
        mes(wallet.toString());
        if (current_floor < 10) {
            pos(var_42, var_41 + 1);
        }
        if (current_floor >= 10) {
            pos(var_43, var_41 + 1);
        }
        if (var_262 == 0) { // var_262 == 0 なので、dangeon_number = 0 でなければ
            // current_floorは数値なので、toString() を使って文字列へ変換
            mes(current_floor.toString());
        }
        if (var_262 == 1) { // var_262 == 1 なので、dangeon_number = 0 であれば
            mes("1");
        }
        pos(var_46, var_41 + 1);
        mes(current_level.toString());
        if (var_211 < 10) {
            pos(var_48, var_41 + 1);
        }
        if (var_211 >= 10) {
            pos(var_49, var_41 + 1);
        }
        if (var_211 >= 100) {
            pos(var_50, var_41 + 1);
        }
        mes(var_211);
        pos(var_52, var_41 + 1);
        mes(var_352);
        if (wallet < 10) {
            pos(var_53, var_41 + 1);
        }
        if (wallet >= 10) {
            pos(var_54, var_41 + 1);
        }
        if (wallet >= 100) {
            pos(var_55, var_41 + 1);
        }
        if (wallet >= 1000) {
            pos(var_56, var_41 + 1);
        }
        if (wallet >= 10000) {
            pos(var_57, var_41 + 1);
        }
        if (wallet >= 100000) {
            pos(var_58, var_41 + 1);
        }
        // walletは数値なので、toString() を使って文字列へ変換
        mes(wallet.toString());
        if (current_floor < 10) {
            pos(var_42 + 1, var_41 + 1);
        }
        if (current_floor >= 10) {
            pos(var_43 + 1, var_41 + 1);
        }
        if (var_262 == 0) { // var_262 == 0 なので、dangeon_number = 0 でなければ
            // current_floorは数値なので、toString() を使って文字列へ変換
            mes(current_floor.toString());
        }
        if (var_262 == 1) { // var_262 == 1 なので、dangeon_number = 0 であれば
            mes("1");
        }
        pos(var_46 + 1, var_41 + 1);
        mes(current_level.toString());
        if (var_211 < 10) {
            pos(var_48 + 2, var_41 + 1);
        }
        if (var_211 >= 10) {
            pos(var_49 + 2, var_41 + 1);
        }
        if (var_211 >= 100) {
            pos(var_50 + 2, var_41 + 1);
        }
        mes(var_211);
        pos(var_52 + 1, var_41 + 1);
        mes(var_352);
        if (wallet < 10) {
            pos(var_53 + 1, var_41 + 1);
        }
        if (wallet >= 10) {
            pos(var_54 + 1, var_41 + 1);
        }
        if (wallet >= 100) {
            pos(var_55 + 1, var_41 + 1);
        }
        if (wallet >= 1000) {
            pos(var_56 + 1, var_41 + 1);
        }
        if (wallet >= 10000) {
            pos(var_57 + 1, var_41 + 1);
        }
        if (wallet >= 100000) {
            pos(var_58 + 1, var_41 + 1);
        }
        // walletは数値なので、toString() を使って文字列へ変換
        mes(wallet.toString());
        if (current_floor < 10) {
            pos(var_42 + 1, var_41 - 1);
        }
        if (current_floor >= 10) {
            pos(var_43 + 1, var_41 - 1);
        }
        if (var_262 == 0) { // var_262 == 0 なので、dangeon_number = 0 でなければ
            // current_floorは数値なので、toString() を使って文字列へ変換
            mes(current_floor.toString());
        }
        if (var_262 == 1) { // var_262 == 1 なので、dangeon_number = 0 であれば
            mes("1");
        }
        pos(var_46 + 1, var_41 - 1);
        mes(current_level.toString());
        if (var_211 < 10) {
            pos(var_48 + 2, var_41 - 1);
        }
        if (var_211 >= 10) {
            pos(var_49 + 2, var_41 - 1);
        }
        if (var_211 >= 100) {
            pos(var_50 + 2, var_41 - 1);
        }
        mes(var_211);
        pos(var_52 + 1, var_41 - 1);
        mes(var_352);
        if (wallet < 10) {
            pos(var_53 + 1, var_41 - 1);
        }
        if (wallet >= 10) {
            pos(var_54 + 1, var_41 - 1);
        }
        if (wallet >= 100) {
            pos(var_55 + 1, var_41 - 1);
        }
        if (wallet >= 1000) {
            pos(var_56 + 1, var_41 - 1);
        }
        if (wallet >= 10000) {
            pos(var_57 + 1, var_41 - 1);
        }
        if (wallet >= 100000) {
            pos(var_58 + 1, var_41 - 1);
        }
        // walletは数値なので、toString() を使って文字列へ変換
        mes(wallet.toString());
        color(255, 255, 255);
        if (current_floor < 10) {
            pos(var_42, var_41);
        }
        if (current_floor >= 10) {
            pos(var_43, var_41);
        }
        if (var_262 == 0) { // var_262 == 0 なので、dangeon_number = 0 でなければ
            // current_floorは数値なので、toString() を使って文字列へ変換
            mes(current_floor.toString());
        }
        if (var_262 == 1) { // var_262 == 1 なので、dangeon_number = 0 であれば
            mes("1");
        }
        pos(var_46, var_41);
        mes(current_level.toString());
        if (var_211 < 10) {
            pos(var_48, var_41);
        }
        if (var_211 >= 10) {
            pos(var_49, var_41);
        }
        if (var_211 >= 100) {
            pos(var_50, var_41);
        }
        if (var_211 > 0) {
            var_1234 = Math.floor(var_352 / var_211);
        }
        if (var_1234 < 2) {
            color(255, 255, 255);
        }
        if (var_1234 >= 2 || var_211 < 1) {
            color(220, 0, 0);
        }
        mes(var_211);
        pos(var_52, var_41);
        if (var_1234 < 2) {
            color(255, 255, 255);
        }
        if (var_1234 >= 2) {
            color(220, 0, 0);
        }
        mes(var_352);
        if (wallet < 10) {
            pos(var_53, var_41);
        }
        if (wallet >= 10) {
            pos(var_54, var_41);
        }
        if (wallet >= 100) {
            pos(var_55, var_41);
        }
        if (wallet >= 1000) {
            pos(var_56, var_41);
        }
        if (wallet >= 10000) {
            pos(var_57, var_41);
        }
        if (wallet >= 100000) {
            pos(var_58, var_41);
        }
        color(255, 255, 255);
        // walletは数値なので、toString() を使って文字列へ変換
        mes(wallet.toString());
        color(255, 255, 255);
        if (current_floor < 10) {
            pos(var_42 + 1, var_41);
        }
        if (current_floor >= 10) {
            pos(var_43 + 1, var_41);
        }
        if (var_262 == 0) { // var_262 == 0 なので、dangeon_number = 0 でなければ
            // current_floorは数値なので、toString() を使って文字列へ変換
            mes(current_floor.toString());
        }
        if (var_262 == 1) { // var_262 == 1 なので、dangeon_number = 0 であれば
            mes("1");
        }
        pos(var_46 + 1, var_41);
        mes(current_level.toString());
        if (var_211 < 10) {
            pos(var_48 + 1, var_41);
        }
        if (var_211 >= 10) {
            pos(var_49 + 1, var_41);
        }
        if (var_211 >= 100) {
            pos(var_50 + 1, var_41);
        }
        if (var_211 > 0) {
            var_1234 = Math.floor(var_352 / var_211);
        }
        if (var_1234 < 2) {
            color(255, 255, 255);
        }
        if (var_1234 >= 2 || var_211 < 1) {
            color(220, 0, 0);
        }
        mes(var_211);
        pos(var_52 + 1, var_41);
        if (var_1234 < 2) {
            color(255, 255, 255);
        }
        if (var_1234 >= 2) {
            color(220, 0, 0);
        }
        mes(var_352);
        if (wallet < 10) {
            pos(var_53 + 1, var_41);
        }
        if (wallet >= 10) {
            pos(var_54 + 1, var_41);
        }
        if (wallet >= 100) {
            pos(var_55 + 1, var_41);
        }
        if (wallet >= 1000) {
            pos(var_56 + 1, var_41);
        }
        if (wallet >= 10000) {
            pos(var_57 + 1, var_41);
        }
        if (wallet >= 100000) {
            pos(var_58 + 1, var_41);
        }
        color(255, 255, 255);
        // walletは数値なので、toString() を使って文字列へ変換
        mes(wallet.toString());
        return;
    });
}
function func343(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(343);
        if (var_1233 == 1) {
            return;
        }
        var_1235 = 130;
        if (var_352 > 200 && var_352 < 300) {
            var_1236 = var_352 - 200;
            var_1235 = 130 - var_1236;
        }
        if (var_352 >= 300) {
            var_1235 = 30;
        }
        color(255, 255, 255);
        boxf(var_1235 - 1, 24, var_352 + var_1235 + 1, 31);
        color(255, 0, 0);
        boxf(var_1235, 25, var_352 + var_1235, 30);
        color(255, 0, 0);
        boxf(var_1235, 25, var_352 + var_1235, 30);
        if (var_211 > 0) {
            color(255, 255, 255);
            boxf(var_1235, 25, var_211 + var_1235 + 1, 30);
            color(0, 255, 0);
            if (var_130 >= 1) {
                color(0, 0, 255);
            }
            if (var_134 >= 1 || var_135 >= 1 || var_136 >= 1 || var_137 >= 1) {
                color(255, 0, 255);
            }
            boxf(var_1235, 25, var_211 + var_1235, 30);
        }
        font("MS ゴシック", 11);
        color(255, 255, 255);
        pos(var_1235 - 18, 24);
        mes("HP");
        return;
    });
}
function func344(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(344);
        if (var_374 == 1) {
            return;
        }
        var_764 = 4;
        var_763 = 4;
        pos(var_764 * var_35, var_763 * var_36 - 10);
        if (var_243 > 0) {
            if (var_243 == 1 || var_243 == 2 || var_243 >= 8) {
                var_1237 = 2;
            }
            if (var_243 == 3) {
                var_1237 = 4;
            }
            if (var_243 >= 4 || var_243 < 8) {
                var_1237 = 6;
            }
            if (var_199 == 4) {
                pos(var_764 * var_35 - var_1237, var_763 * var_36 - 10);
            }
            if (var_199 == 6) {
                pos(var_764 * var_35 + var_1237, var_763 * var_36 - 10);
            }
            if (var_199 == 2) {
                pos(var_764 * var_35, var_763 * var_36 - 10 + var_1237);
            }
            if (var_199 == 8) {
                pos(var_764 * var_35, var_763 * var_36 - 10 - var_1237);
            }
            if (var_199 == 1) {
                pos(var_764 * var_35 - var_1237, var_763 * var_36 - 10 + var_1237);
            }
            if (var_199 == 3) {
                pos(var_764 * var_35 + var_1237, var_763 * var_36 - 10 + var_1237);
            }
            if (var_199 == 7) {
                pos(var_764 * var_35 - var_1237, var_763 * var_36 - 10 - var_1237);
            }
            if (var_199 == 9) {
                pos(var_764 * var_35 + var_1237, var_763 * var_36 - 10 - var_1237);
            }
        }
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        if (var_71[var_66][var_67] != 13 && var_71[var_66][var_67] != 0 && var_1238 == 0 && var_159 == 0) {
            gcopy(3, 1560, 0, 40, 45);
        }
        if (var_1238 > 0) {
            if (var_1238 < 5 || var_1238 > 83) {
                gcopy(3, 1560, 0, 40, 45);
            }
        }
        if (var_71[var_66][var_67] == 13) {
            if (var_125 == 0) {
                if (nouryoku_disc_id == 202) {
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    gcopy(3, 1520, 0, 40, 45);
                }
                if (nouryoku_disc_id == 117) {
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                    if (var_784 == 0 || var_784 == 1 || var_784 == 2) {
                        gcopy(3, 1320, 0, 40, 45);
                    }
                    if (var_784 == 3 || var_784 == 4 || var_784 == 5) {
                        gcopy(3, 1360, 0, 40, 45);
                    }
                }
            }
            if (var_125 != 0) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                if (var_784 == 0 || var_784 == 1) {
                    gcopy(3, 1440, 80, 40, 45);
                }
                if (var_784 == 2 || var_784 == 3) {
                    gcopy(3, 1480, 80, 40, 45);
                }
                if (var_784 == 4 || var_784 == 5) {
                    gcopy(3, 1520, 80, 40, 45);
                }
            }
        }
        if (var_159 != 0 && var_71[var_66][var_67] != 13) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_784 == 0 || var_784 == 1 || var_784 == 2) {
                gcopy(3, 1320, 80, 40, 45);
            }
            if (var_784 == 3 || var_784 == 4 || var_784 == 5) {
                gcopy(3, 1360, 80, 40, 45);
            }
        }
        return;
    });
}
function func345(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(345);
        if (var_123 >= 1) {

            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            var_1239 = 1;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
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
                var_764 = var_393[var_1239][1] - var_66 + 4;
                var_763 = var_393[var_1239][2] - var_67 + 4;
                if (var_199 == 4) {
                    var_1150 = var_764 * var_35 - var_778;
                    var_1151 = var_763 * var_36 - 10;
                }
                if (var_199 == 6) {
                    var_1150 = var_764 * var_35 + var_778;
                    var_1151 = var_763 * var_36 - 10;
                }
                if (var_199 == 8) {
                    var_1150 = var_764 * var_35;
                    var_1151 = var_763 * var_36 - var_778 - 10;
                }
                if (var_199 == 2) {
                    var_1150 = var_764 * var_35;
                    var_1151 = var_763 * var_36 + var_778 - 10;
                }
                if (var_199 == 1) {
                    var_1150 = var_764 * var_35 - var_778;
                    var_1151 = var_763 * var_36 + var_778 - 10;
                }
                if (var_199 == 3) {
                    var_1150 = var_764 * var_35 + var_778;
                    var_1151 = var_763 * var_36 + var_778 - 10;
                }
                if (var_199 == 7) {
                    var_1150 = var_764 * var_35 - var_778;
                    var_1151 = var_763 * var_36 - var_778 - 10;
                }
                if (var_199 == 9) {
                    var_1150 = var_764 * var_35 + var_778;
                    var_1151 = var_763 * var_36 - var_778 - 10;
                }
                if (var_217 == 1) {
                    var_1150 = var_764 * var_35;
                    var_1151 = var_763 * var_36 - 10;
                }
                pos(var_1150, var_1151);
                if (var_393[var_1239][0] == 2) {
                    gcopy(3, 80, 40, 40, 40);
                }
                if (var_393[var_1239][0] == 4) {
                    gcopy(3, 200, 40, 40, 40);
                }
                if (var_393[var_1239][0] == 8) {
                    gcopy(3, 320, 40, 40, 40);
                }
                if (var_393[var_1239][0] == 6) {
                    gcopy(3, 440, 40, 40, 40);
                }
                if (var_393[var_1239][0] == 1) {
                    gcopy(3, 560, 40, 40, 40);
                }
                if (var_393[var_1239][0] == 3) {
                    gcopy(3, 800, 40, 40, 40);
                }
                if (var_393[var_1239][0] == 7) {
                    gcopy(3, 680, 40, 40, 40);
                }
                if (var_393[var_1239][0] == 9) {
                    gcopy(3, 920, 40, 40, 40);
                }
                var_1239++;
            }
        }
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        if (var_71[var_66][var_67] == 0) {
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
        }
        if (var_131 >= 1) {
            color(0, 0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        }
        var_764 = 4;
        var_763 = 4;
        pos(var_764 * var_35, var_763 * var_36 - 10);
        if (var_243 > 0) {
            if (var_243 == 1 || var_243 == 2 || var_243 >= 8) {
                var_1237 = 2;
            }
            if (var_243 == 3) {
                var_1237 = 4;
            }
            if (var_243 >= 4 || var_243 < 8) {
                var_1237 = 6;
            }
            if (var_199 == 4) {
                pos(var_764 * var_35 - var_1237, var_763 * var_36 - 10);
            }
            if (var_199 == 6) {
                pos(var_764 * var_35 + var_1237, var_763 * var_36 - 10);
            }
            if (var_199 == 2) {
                pos(var_764 * var_35, var_763 * var_36 - 10 + var_1237);
            }
            if (var_199 == 8) {
                pos(var_764 * var_35, var_763 * var_36 - 10 - var_1237);
            }
            if (var_199 == 1) {
                pos(var_764 * var_35 - var_1237, var_763 * var_36 - 10 + var_1237);
            }
            if (var_199 == 3) {
                pos(var_764 * var_35 + var_1237, var_763 * var_36 - 10 + var_1237);
            }
            if (var_199 == 7) {
                pos(var_764 * var_35 - var_1237, var_763 * var_36 - 10 - var_1237);
            }
            if (var_199 == 9) {
                pos(var_764 * var_35 + var_1237, var_763 * var_36 - 10 - var_1237);
            }
        }
        if (var_1201 == 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(4 * var_35 + 10, 2 * var_36);
            gcopy(3, 480, 400, 40, 80);
            pos(3 * var_35 + 12, 2 * var_36 - 17);
            if (var_784 >= 0 && var_784 < 2) {
                gcopy(3, 520, 400, 40, 40);
            }
            if (var_784 >= 2 && var_784 < 4) {
                gcopy(3, 560, 400, 40, 40);
            }
            if (var_784 >= 4 && var_784 < 6) {
                gcopy(3, 600, 400, 40, 40);
            }
            return;
        }
        if (var_374 == 1) {
            return;
        }
        if (var_211 == 0 && var_218 >= 30) {
            pos(160, 160);
            gcopy(3, 280, 880, 40, 40);
            return;
        }
        if (var_211 == 0 && var_218 >= 1 && var_218 < 30) {
            gcopy(3, 0, 880, 40, 40);
            return;
        }
        if (var_211 == 0 && var_1061 == 3 && var_1054 == 0 && var_144 != 0) {
            gcopy(3, 1120, 1200, 40, 40);
            return;
        }
        if (var_211 == 0 && var_1061 == 0 && var_1054 == 0) {
            if (var_199 == 2) {
                gcopy(3, 960, 0, 40, 40);
            }
            if (var_199 == 4) {
                gcopy(3, 1000, 0, 40, 40);
            }
            if (var_199 == 8) {
                gcopy(3, 1040, 0, 40, 40);
            }
            if (var_199 == 6) {
                gcopy(3, 1080, 0, 40, 40);
            }
            if (var_199 == 1) {
                gcopy(3, 1120, 0, 40, 40);
            }
            if (var_199 == 3) {
                gcopy(3, 1200, 0, 40, 40);
            }
            if (var_199 == 7) {
                gcopy(3, 1160, 0, 40, 40);
            }
            if (var_199 == 9) {
                gcopy(3, 1240, 0, 40, 40);
            }
            return;
        }
        if (var_144 == 91) {
            gcopy(3, 960, 1200, 40, 40);
            return;
        }
        if (var_472 == 1) {
            if (var_784 >= 0 && var_784 < 2) {
                gcopy(3, 1000, 1200, 40, 40);
            }
            if (var_784 >= 2 && var_784 < 4) {
                gcopy(3, 1040, 1200, 40, 40);
            }
            if (var_784 >= 4 && var_784 < 6) {
                gcopy(3, 1080, 1200, 40, 40);
            }
            return;
        }
        if (var_758 == 1) {
            gcopy(3, 440, 1080, 40, 40);
            return;
        }
        if (var_758 == 2) {
            gcopy(3, 480, 1080, 40, 40);
            return;
        }
        if (var_1240 == 3) {
            gcopy(3, 40, 0, 40, 40);
            return;
        }
        if (var_1241 == 1) {
            gcopy(3, 40, 0, 40, 40);
            return;
        }
        if (var_1242 >= 1) {
            gcopy(3, 1280, 160, 40, 40);
            return;
        }
        if (var_1054 == 1) {
            gcopy(3, 1240, 40, 40, 40);
            return;
        }
        if (var_1054 == 2) {
            gcopy(3, 1160, 40, 40, 40);
            return;
        }
        if (var_1054 == 3) {
            gcopy(3, 1200, 40, 40, 40);
            return;
        }
        if (var_1243 == 1) {
            gcopy(3, 1240, 240, 40, 40);
            return;
        }
        if (var_1243 == 2) {
            gcopy(3, 1280, 240, 40, 40);
            return;
        }
        if (var_1243 == 3) {
            gcopy(3, 1320, 240, 40, 40);
            return;
        }
        if (var_1244 >= 1) {
            gcopy(3, 1120, 120, 40, 40);
            return;
        }
        if (var_1245 >= 1) {
            if (var_1245 == 1) {
                gcopy(3, 0, 1080, 40, 40);
                return;
            }
            if (var_1245 == 2) {
                gcopy(3, 40, 1080, 40, 40);
                return;
            }
            if (var_1245 == 3) {
                gcopy(3, 80, 1080, 40, 40);
                return;
            }
            if (var_1245 == 4) {
                gcopy(3, 120, 1080, 40, 40);
                return;
            }
            if (var_1245 == 5) {
                gcopy(3, 160, 1080, 40, 40);
                var_1245 = 6;
                return;
            }
            if (var_1245 == 6) {
                gcopy(3, 200, 1080, 40, 40);
                var_1245 = 5;
                return;
            }
            if (var_1245 == 7) {
                gcopy(3, 160, 1080, 40, 40);
                return;
            }
        }
        if (var_1246 >= 1) { // アイテムを投げた時のフラグON
            belongings_item_list = var_1247;
            var_1248 = var_1249;
            if (var_199 == 2) {
                pos(160, 150);
                gcopy(3, 480, 0, 40, 40);
                pos(145, 140);
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_199 == 8) {
                pos(160, 150);
                gcopy(3, 920, 0, 40, 40);
                pos(175, 150);
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_199 == 4) {
                pos(160, 150);
                gcopy(3, 560, 0, 40, 40);
                pos(175, 150);
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_199 == 6) {
                pos(160, 150);
                gcopy(3, 720, 0, 40, 40);
                pos(145, 150);
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_199 == 1) {
                pos(150, 140);
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(160, 150);
                gcopy(3, 120, 0, 40, 40);
            }
            if (var_199 == 3) {
                pos(170, 140);
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(160, 150);
                gcopy(3, 440, 0, 40, 40);
            }
            if (var_199 == 7) {
                pos(160, 150);
                gcopy(3, 200, 0, 40, 40);
                pos(160, 160);
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_199 == 9) {
                pos(160, 150);
                gcopy(3, 360, 0, 40, 40);
                pos(160, 160);
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            return;
        }
        if (var_1250 == 1) {
            gcopy(3, 440, 80, 40, 40);
            return;
        }
        if (var_1251 == 1) {
            gcopy(3, 480, 1160, 40, 40);
            return;
        }
        if (var_1251 == 2) {
            gcopy(3, 520, 1160, 40, 40);
            return;
        }
        if (var_1251 == 3) {
            gcopy(3, 560, 1160, 40, 40);
            return;
        }
        if (var_1251 == 4) {
            gcopy(3, 600, 1160, 40, 40);
            return;
        }
        if (var_1251 == 5) {
            gcopy(3, 480, 1040, 40, 40);
            return;
        }
        if (var_1251 == 6) {
            gcopy(3, 520, 1040, 40, 40);
            return;
        }
        if (var_1251 == 7) {
            gcopy(3, 560, 1040, 40, 40);
            return;
        }
        if (var_1251 == 8) {
            gcopy(3, 600, 1040, 40, 40);
            return;
        }
        if (var_1252 == 1) {
            if (var_784 >= 0 && var_784 < 3) {
                gcopy(3, 1160, 160, 40, 40);
            }
            if (var_784 >= 3 && var_784 < 7) {
                gcopy(3, 1200, 160, 40, 40);
            }
            return;
        }
        if (var_1252 == 2) {
            gcopy(3, 1240, 160, 40, 40);
            pos(175, 135);
            belongings_item_list = var_1253;
            yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            return;
        }
        if (var_1252 == 3) {
            gcopy(3, 1240, 160, 40, 40);
            return;
        }
        if (var_1254 == 1) {
            gcopy(3, 1280, 160, 40, 40);
            pos(175, 135);
            belongings_item_list = var_1253;
            yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            return;
        }
        if (var_1255 == 1) {
            gcopy(3, 520, 80, 40, 40);
            return;
        }
        if (var_1256 == 1) {
            gcopy(3, 640, 80, 40, 40);
            return;
        }
        if (var_1256 == 2) {
            gcopy(3, 680, 80, 40, 40);
            return;
        }
        if (var_1257 == 1) {
            gcopy(3, 560, 80, 40, 40);
            return;
        }
        if (var_1258 == 1) {
            gcopy(3, 720, 80, 40, 40);
            return;
        }
        if (var_1258 == 2) {
            gcopy(3, 760, 80, 40, 40);
            return;
        }
        if (var_1258 == 3) {
            gcopy(3, 800, 80, 40, 40);
            return;
        }
        if (var_218 >= 1 && var_218 < 30) {
            gcopy(3, 0, 880, 40, 40);
            return;
        }
        if (var_470 == 1) {
            gcopy(3, 0, 960, 40, 40);
            return;
        }
        if (var_470 == 2) {
            gcopy(3, 40, 960, 40, 40);
            return;
        }
        if (var_470 == 3) {
            gcopy(3, 80, 960, 40, 40);
            return;
        }
        if (var_470 == 4) {
            gcopy(3, 120, 960, 40, 40);
            return;
        }
        if (var_470 == 5) {
            gcopy(3, 160, 960, 40, 40);
            return;
        }
        if (var_470 == 6) {
            gcopy(3, 200, 960, 40, 40);
            return;
        }
        if (var_470 == 7) {
            gcopy(3, 240, 960, 40, 40);
            return;
        }
        if (var_470 == 8) {
            gcopy(3, 280, 960, 40, 40);
            return;
        }
        if (var_470 == 9) {
            gcopy(3, 320, 960, 40, 40);
            return;
        }
        if (var_470 == 10) {
            gcopy(3, 360, 960, 40, 40);
            return;
        }
        if (var_470 == 11) {
            gcopy(3, 400, 960, 40, 40);
            return;
        }
        if (var_470 == 12) {
            gcopy(3, 440, 960, 40, 40);
            return;
        }
        if (var_470 == 13) {
            gcopy(3, 480, 960, 40, 40);
            return;
        }
        if (var_470 == 14) {
            gcopy(3, 520, 960, 40, 40);
            return;
        }
        if (var_470 == 15) {
            gcopy(3, 560, 960, 40, 40);
            return;
        }
        if (var_470 == 16) {
            gcopy(3, 600, 960, 40, 40);
            return;
        }
        if (var_470 == 17) {
            gcopy(3, 0, 920, 40, 40);
            return;
        }
        if (var_470 == 18) {
            gcopy(3, 40, 920, 40, 40);
            return;
        }
        if (var_470 == 19) {
            gcopy(3, 80, 920, 40, 40);
            return;
        }
        if (var_470 == 20) {
            gcopy(3, 120, 920, 40, 40);
            return;
        }
        if (var_218 >= 30) {
            pos(160, 160);
            gcopy(3, 280, 880, 40, 40);
            return;
        }
        if (var_471 == 1) {
            gcopy(3, 40, 880, 40, 40);
            return;
        }
        if (var_471 == 2) {
            gcopy(3, 80, 880, 40, 40);
            return;
        }
        if (var_471 == 3) {
            pos(160, 120);
            gcopy(3, 120, 880, 40, 40);
            return;
        }
        if (var_471 == 4) {
            pos(160, 125);
            gcopy(3, 160, 880, 40, 40);
            return;
        }
        if (var_471 == 5) {
            pos(160, 130);
            gcopy(3, 200, 880, 40, 40);
            return;
        }
        if (var_471 == 6) {
            pos(160, 135);
            gcopy(3, 240, 880, 40, 40);
            return;
        }
        if (var_471 == 7) {
            pos(160, 140);
            gcopy(3, 120, 880, 40, 40);
            return;
        }
        if (var_471 == 8) {
            pos(160, 150);
            gcopy(3, 160, 880, 40, 40);
            return;
        }
        if (var_471 == 9) {
            pos(160, 160);
            gcopy(3, 160, 880, 40, 40);
            return;
        }
        if (var_471 == 10) {
            pos(160, 160);
            gcopy(3, 120, 880, 40, 40);
            return;
        }
        if (var_1259 == 1) {
            gcopy(3, 1160, 80, 40, 40);
            return;
        }
        if (var_1259 == 2) {
            gcopy(3, 1200, 80, 40, 40);
            return;
        }
        if (var_1259 == 3) {
            gcopy(3, 1240, 80, 40, 40);
            return;
        }
        if (var_1260 >= 1) {
            gcopy(3, 480, 80, 40, 40);
            return;
        }
        if (var_1261 == 1) {
            gcopy(3, 360, 80, 40, 40);
            return;
        }
        if (var_1261 == 2) {
            gcopy(3, 1040, 40, 40, 40);
            return;
        }
        if (var_1261 == 3) {
            gcopy(3, 1080, 40, 40, 40);
            return;
        }
        if (var_1262 == 1) {
            pos(160, 150);
            gcopy(3, 960, 40, 40, 40);
            return;
        }
        if (var_1262 == 2) {
            pos(160, 152);
            gcopy(3, 960, 40, 40, 40);
            return;
        }
        if (var_1262 == 3) {
            pos(160, 150);
            gcopy(3, 1000, 40, 40, 40);
            return;
        }
        if (var_1262 == 4) {
            pos(160, 152);
            gcopy(3, 1000, 40, 40, 40);
            return;
        }
        if (var_1263 == 1) {
            gcopy(3, 1080, 120, 40, 40);
            return;
        }
        if (var_1224 == 10) {
            pos(120, 140);
            if (var_1225 == 5) {
                gcopy(3, 1000, 200, 80, 40);
            }
            if (var_1225 == 6) {
                gcopy(3, 1080, 200, 80, 40);
            }
            if (var_1225 == 7) {
                gcopy(3, 1000, 240, 80, 40);
            }
            if (var_1225 == 8) {
                gcopy(3, 1080, 240, 80, 40);
            }
            pos(160, 150);
            gcopy(3, 880, 80, 40, 40);
            return;
        }
        if (var_1264 == 1) {
            if (var_784 >= 0 && var_784 < 2) {
                gcopy(3, 0, 80, 40, 40);
            }
            if (var_784 >= 2 && var_784 < 4) {
                gcopy(3, 40, 80, 40, 40);
            }
            if (var_784 >= 4 && var_784 < 6) {
                gcopy(3, 80, 80, 40, 40);
            }
            yield func349();
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_1214 == 1) {
            if (var_1215 >= 0 && var_1215 < 2) {
                gcopy(3, 120, 80, 40, 40);
            }
            if (var_1215 >= 2 && var_1215 < 3) {
                gcopy(3, 160, 80, 40, 40);
            }
            if (var_1215 >= 3 && var_1215 < 6) {
                gcopy(3, 200, 80, 40, 40);
            }
            yield func349();
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_1265 >= 1) {
            gcopy(3, 1000, 400, 40, 40);
            return;
        }
        if (var_1214 == 2) {
            if (var_1215 >= 0 && var_1215 < 2) {
                gcopy(3, 240, 80, 40, 40);
            }
            if (var_1215 >= 2 && var_1215 < 3) {
                gcopy(3, 280, 80, 40, 40);
            }
            if (var_1215 >= 3 && var_1215 < 6) {
                gcopy(3, 320, 80, 40, 40);
            }
            yield func349();
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_1214 == 3) {
            if (var_1215 >= 0 && var_1215 < 2) {
                gcopy(3, 1160, 200, 40, 40);
            }
            if (var_1215 >= 2 && var_1215 < 3) {
                gcopy(3, 1200, 200, 40, 40);
            }
            if (var_1215 >= 3 && var_1215 < 6) {
                gcopy(3, 1240, 200, 40, 40);
            }
            yield func349();
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_1218 == 1) {
            if (var_1219 <= 4) {
                gcopy(3, 40, 0, 40, 40);
            }
            if (var_1219 >= 5 && var_1219 <= 6) {
                gcopy(3, 0, 240, 40, 40);
            }
            if (var_1219 >= 7 && var_1219 <= 8) {
                gcopy(3, 40, 240, 40, 40);
            }
            if (var_1219 >= 9 && var_1219 <= 10) {
                gcopy(3, 80, 240, 40, 40);
            }
            if (var_1219 >= 11 && var_1219 <= 12) {
                gcopy(3, 120, 240, 40, 40);
            }
            if (var_1219 >= 13 && var_1219 <= 14) {
                gcopy(3, 160, 240, 40, 40);
            }
            if (var_1219 >= 15 && var_1219 <= 16) {
                gcopy(3, 200, 240, 40, 40);
            }
            if (var_1219 >= 17 && var_1219 <= 20) {
            }
            if (var_1219 == 21) {
                gcopy(3, 240, 240, 40, 40);
            }
            if (var_1219 == 22) {
                gcopy(3, 280, 240, 40, 40);
            }
            if (var_1219 >= 23) {
                gcopy(3, 320, 240, 40, 40);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_1218 == 2) {
            if (var_1219 >= 15) {
                gcopy(3, 0, 240, 40, 40);
            }
            if (var_1219 == 14) {
                gcopy(3, 40, 240, 40, 40);
            }
            if (var_1219 == 13) {
                gcopy(3, 80, 240, 40, 40);
            }
            if (var_1219 == 12) {
                gcopy(3, 120, 240, 40, 40);
            }
            if (var_1219 == 11) {
                gcopy(3, 160, 240, 40, 40);
            }
            if (var_1219 == 10) {
                gcopy(3, 200, 240, 40, 40);
            }
            if (var_1219 >= 6 && var_1219 <= 9) {
            }
            if (var_1219 == 5) {
                gcopy(3, 240, 240, 40, 40);
            }
            if (var_1219 == 4) {
                gcopy(3, 280, 240, 40, 40);
            }
            if (var_1219 <= 3) {
                gcopy(3, 320, 240, 40, 40);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_1218 == 3) {
            gcopy(3, 320, 240, 40, 40);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_1238 >= 5 && var_1238 < 83) {
            if (var_1238 >= 5 && var_1238 < 10) {
                gcopy(3, 920, 360, 40, 40);
            }
            if (var_1238 == 10) {
                gcopy(3, 960, 360, 40, 40);
            }
            if (var_1238 == 11) {
                gcopy(3, 1000, 360, 40, 40);
            }
            if (var_1238 >= 12 && var_1238 < 76) {
                gcopy(3, 880, 360, 40, 40);
            }
            if (var_1238 == 76) {
                gcopy(3, 1000, 360, 40, 40);
            }
            if (var_1238 == 77) {
                gcopy(3, 960, 360, 40, 40);
            }
            if (var_1238 >= 78 && var_1238 < 83) {
                gcopy(3, 920, 360, 40, 40);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_219 >= 1 || var_1061 == 3) {
            gcopy(3, 1280, 0, 40, 40);
            if (var_1061 == 0) {
                if (var_784 >= 0 && var_784 < 2) {
                    gcopy(3, 360, 320, 40, 40);
                }
                if (var_784 >= 2 && var_784 < 4) {
                    gcopy(3, 400, 320, 40, 40);
                }
                if (var_784 >= 4 && var_784 < 6) {
                    gcopy(3, 440, 320, 40, 40);
                }
            }
            yield func349();
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_128 >= 1) {
            gcopy(3, 960, 0, 40, 40);
            color(0, 0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 170);
            gcopy(3, 40, 360, 40, 40);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_243 == 1 || var_243 == 2 || var_243 >= 10) {
            if (var_199 == 2) {
                gcopy(3, 0, 40, 40, 40);
            }
            if (var_199 == 4) {
                gcopy(3, 120, 40, 40, 40);
            }
            if (var_199 == 8) {
                gcopy(3, 240, 40, 40, 40);
            }
            if (var_199 == 6) {
                gcopy(3, 360, 40, 40, 40);
            }
            if (var_199 == 1) {
                gcopy(3, 480, 40, 40, 40);
            }
            if (var_199 == 3) {
                gcopy(3, 720, 40, 40, 40);
            }
            if (var_199 == 7) {
                gcopy(3, 600, 40, 40, 40);
            }
            if (var_199 == 9) {
                gcopy(3, 840, 40, 40, 40);
            }
            yield func349();
        }
        if (var_243 == 3) {
            if (var_199 == 2) {
                gcopy(3, 40, 40, 40, 40);
            }
            if (var_199 == 4) {
                gcopy(3, 160, 40, 40, 40);
            }
            if (var_199 == 8) {
                gcopy(3, 280, 40, 40, 40);
            }
            if (var_199 == 6) {
                gcopy(3, 400, 40, 40, 40);
            }
            if (var_199 == 1) {
                gcopy(3, 520, 40, 40, 40);
            }
            if (var_199 == 3) {
                gcopy(3, 760, 40, 40, 40);
            }
            if (var_199 == 7) {
                gcopy(3, 640, 40, 40, 40);
            }
            if (var_199 == 9) {
                gcopy(3, 880, 40, 40, 40);
            }
            yield func349();
        }
        if (var_243 >= 4 && var_243 < 10) {
            if (var_199 == 2) {
                gcopy(3, 80, 40, 40, 40);
            }
            if (var_199 == 4) {
                gcopy(3, 200, 40, 40, 40);
            }
            if (var_199 == 8) {
                gcopy(3, 320, 40, 40, 40);
            }
            if (var_199 == 6) {
                gcopy(3, 440, 40, 40, 40);
            }
            if (var_199 == 1) {
                gcopy(3, 560, 40, 40, 40);
            }
            if (var_199 == 3) {
                gcopy(3, 800, 40, 40, 40);
            }
            if (var_199 == 7) {
                gcopy(3, 680, 40, 40, 40);
            }
            if (var_199 == 9) {
                gcopy(3, 920, 40, 40, 40);
            }
            yield func349();
        }
        if (var_583 == 1) {
            gcopy(3, 400, 80, 40, 40);
            yield func349();
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_389 == 1) {
            if (var_83[var_673].Var30 == 1 || var_127 != 0 || var_132 != 0) {
                if (var_199 == 2) {
                    gcopy(3, 960, 0, 40, 40);
                }
                if (var_199 == 4) {
                    gcopy(3, 1000, 0, 40, 40);
                }
                if (var_199 == 8) {
                    gcopy(3, 1040, 0, 40, 40);
                }
                if (var_199 == 6) {
                    gcopy(3, 1080, 0, 40, 40);
                }
                if (var_199 == 1) {
                    gcopy(3, 1120, 0, 40, 40);
                }
                if (var_199 == 3) {
                    gcopy(3, 1200, 0, 40, 40);
                }
                if (var_199 == 7) {
                    gcopy(3, 1160, 0, 40, 40);
                }
                if (var_199 == 9) {
                    gcopy(3, 1240, 0, 40, 40);
                }
                yield func349();
                return;
            }
            if (var_83[var_673].Var30 == 0 && var_127 == 0 && var_132 == 0) {
                if (var_83[var_673].Var5 == 4) {
                    gcopy(3, 1080, 0, 40, 40);
                    var_199 = 6;
                }
                if (var_83[var_673].Var5 == 6) {
                    gcopy(3, 1000, 0, 40, 40);
                    var_199 = 4;
                }
                if (var_83[var_673].Var5 == 8) {
                    gcopy(3, 960, 0, 40, 40);
                    var_199 = 2;
                }
                if (var_83[var_673].Var5 == 2) {
                    gcopy(3, 1040, 0, 40, 40);
                    var_199 = 8;
                }
                if (var_83[var_673].Var5 == 1) {
                    gcopy(3, 1240, 0, 40, 40);
                    var_199 = 9;
                }
                if (var_83[var_673].Var5 == 3) {
                    gcopy(3, 1160, 0, 40, 40);
                    var_199 = 7;
                }
                if (var_83[var_673].Var5 == 7) {
                    gcopy(3, 1200, 0, 40, 40);
                    var_199 = 3;
                }
                if (var_83[var_673].Var5 == 9) {
                    gcopy(3, 1120, 0, 40, 40);
                    var_199 = 1;
                }
                yield func349();
                return;
            }
        }
        if (var_389 == 2 || var_1223 == 1 || var_178 >= 1) {
            if (var_199 == 2) {
                gcopy(3, 960, 0, 40, 40);
            }
            if (var_199 == 4) {
                gcopy(3, 1000, 0, 40, 40);
            }
            if (var_199 == 8) {
                gcopy(3, 1040, 0, 40, 40);
            }
            if (var_199 == 6) {
                gcopy(3, 1080, 0, 40, 40);
            }
            if (var_199 == 1) {
                gcopy(3, 1120, 0, 40, 40);
            }
            if (var_199 == 3) {
                gcopy(3, 1200, 0, 40, 40);
            }
            if (var_199 == 7) {
                gcopy(3, 1160, 0, 40, 40);
            }
            if (var_199 == 9) {
                gcopy(3, 1240, 0, 40, 40);
            }
            yield func349();
            return;
        }
        if (var_1220 == 1 || var_1191 == 1 || var_1190 >= 1 || var_1266 >= 1) {
            if (var_1267 != 1) {
                if (var_199 == 2) {
                    gcopy(3, 80, 40, 40, 40);
                }
                if (var_199 == 4) {
                    gcopy(3, 200, 40, 40, 40);
                }
                if (var_199 == 8) {
                    gcopy(3, 320, 40, 40, 40);
                }
                if (var_199 == 6) {
                    gcopy(3, 440, 40, 40, 40);
                }
                if (var_199 == 1) {
                    gcopy(3, 560, 40, 40, 40);
                }
                if (var_199 == 3) {
                    gcopy(3, 800, 40, 40, 40);
                }
                if (var_199 == 7) {
                    gcopy(3, 680, 40, 40, 40);
                }
                if (var_199 == 9) {
                    gcopy(3, 920, 40, 40, 40);
                }
                if (var_1220 == 1 || var_1191 == 1 || var_1266 >= 1) {
                    yield func346(); // 射撃discの攻撃時に表示されるスタンド本体ドット絵設定
                }
                return;
            }
        }
        if (var_108 == 1) {
            gcopy(3, 960, 0, 40, 40);
            yield func349();
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        if (var_1220 == 0 && var_1191 == 0 && var_243 == 0) {
            if (var_157 == 0 && var_240 == 0) {
                for (let cnt3 = 0; cnt3 < 12; ++cnt3) {
                    var_1067[cnt3] = cnt3;
                }
            }
            if (var_157 >= 1 || var_240 == 1) {
                var_1067[0] = 0;
                var_1067[1] = 1;
                var_1067[2] = 6;
                var_1067[3] = 7;
                var_1067[4] = 2;
                var_1067[5] = 5;
                var_1067[6] = 3;
                var_1067[7] = 4;
                var_1067[8] = 9;
                var_1067[9] = 10;
                var_1067[10] = 8;
                var_1067[11] = 11;
            }
            if (var_144 == 0 && var_1268 == 0) {
                if (var_199 == 8) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 240, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 280, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 320, 0, 40, 40);
                    }
                }
                if (var_199 == 2) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 0, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 40, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 80, 0, 40, 40);
                    }
                }
                if (var_199 == 4) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 120, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 160, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 200, 0, 40, 40);
                    }
                }
                if (var_199 == 6) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 360, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 400, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 440, 0, 40, 40);
                    }
                }
                if (var_199 == 1) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 480, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 520, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 560, 0, 40, 40);
                    }
                }
                if (var_199 == 7) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 600, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 640, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 680, 0, 40, 40);
                    }
                }
                if (var_199 == 9) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 840, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 880, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 920, 0, 40, 40);
                    }
                }
                if (var_199 == 3) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 720, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 760, 0, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 800, 0, 40, 40);
                    }
                }
                yield func349();
            }
            if (var_144 >= 1) {
                if (var_199 == 8) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 240, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 280, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 320, 1200, 40, 40);
                    }
                }
                if (var_199 == 2) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 0, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 40, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 80, 1200, 40, 40);
                    }
                }
                if (var_199 == 4) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 120, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 160, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 200, 1200, 40, 40);
                    }
                }
                if (var_199 == 6) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 360, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 400, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 440, 1200, 40, 40);
                    }
                }
                if (var_199 == 1) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 480, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 520, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 560, 1200, 40, 40);
                    }
                }
                if (var_199 == 7) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 600, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 640, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 680, 1200, 40, 40);
                    }
                }
                if (var_199 == 9) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 840, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 880, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 920, 1200, 40, 40);
                    }
                }
                if (var_199 == 3) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 720, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 760, 1200, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 800, 1200, 40, 40);
                    }
                }
            }
            if (var_1268 >= 1) {
                if (var_199 == 8) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 240, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 280, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 320, 1240, 40, 40);
                    }
                }
                if (var_199 == 2) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 0, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 40, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 80, 1240, 40, 40);
                    }
                }
                if (var_199 == 4) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 120, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 160, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 200, 1240, 40, 40);
                    }
                }
                if (var_199 == 6) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 360, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 400, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 440, 1240, 40, 40);
                    }
                }
                if (var_199 == 1) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 480, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 520, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 560, 1240, 40, 40);
                    }
                }
                if (var_199 == 7) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 600, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 640, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 680, 1240, 40, 40);
                    }
                }
                if (var_199 == 9) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 840, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 880, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 920, 1240, 40, 40);
                    }
                }
                if (var_199 == 3) {
                    if (var_1226 == var_1067[0] || var_1226 == var_1067[1] || var_1226 == var_1067[2] || var_1226 == var_1067[3]) {
                        gcopy(3, 720, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[4] || var_1226 == var_1067[5] || var_1226 == var_1067[10] || var_1226 == var_1067[11]) {
                        gcopy(3, 760, 1240, 40, 40);
                    }
                    if (var_1226 == var_1067[6] || var_1226 == var_1067[7] || var_1226 == var_1067[8] || var_1226 == var_1067[9]) {
                        gcopy(3, 800, 1240, 40, 40);
                    }
                }
            }
        }
        var_1269 = var_199;
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        return;
    });
}
// 射撃discの攻撃時に表示されるスタンド本体ドット絵設定
function func346(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(346);
        if (var_1270 >= 1 || var_1190 >= 1) {
            return;
        }
        var_1271 = 1;
        if (var_199 == 4) {
            pos(var_764 * var_35 - 20, var_763 * var_36 - 10);
        }
        if (var_199 == 6) {
            pos(var_764 * var_35 + 20, var_763 * var_36 - 10);
        }
        if (var_199 == 2) {
            pos(var_764 * var_35, var_763 * var_36 - 10 + 20);
        }
        if (var_199 == 8) {
            pos(var_764 * var_35, var_763 * var_36 - 10 - 20);
        }
        if (var_199 == 1) {
            pos(var_764 * var_35 - 20, var_763 * var_36 - 10 + 20);
        }
        if (var_199 == 3) {
            pos(var_764 * var_35 + 20, var_763 * var_36 - 10 + 20);
        }
        if (var_199 == 7) {
            pos(var_764 * var_35 - 20, var_763 * var_36 - 10 - 20);
        }
        if (var_199 == 9) {
            pos(var_764 * var_35 + 20, var_763 * var_36 - 10 - 20);
        }
        if (var_340 == 400 || var_340 == 407) { // No = 400 ハイエロファントグリーン、No = 407 ハイエロファントエメラルド
            var_1271 = 400;
        }
        if (var_340 == 401) { // No = 401 フー・ファイターズ
            var_1271 = 720;
        }
        if (var_340 == 402 || var_340 == 490) { // No = 402 エンペラー、No = 490 不明
            var_1271 = 0;
        }
        if (var_340 == 403) { // No = 403 セックス・ピストルズ
            var_1271 = 560;
        }
        if (var_340 == 404) { // No = 404 ホルス神
            var_1271 = 520;
        }
        if (var_340 == 405) { // No = 405 エコーズACT2
            var_1271 = 800;
        }
        if (var_340 == 406) { // No = 406 エコーズACT1
            var_1271 = 640;
        }
        if (var_340 == 414) { // No = 414 タスクact2
            var_1271 = 1240;
        }
        if (var_340 == 415) { // Ver0.1401にて追加。No = 415 タスクact1
            var_1271 = 1240;
        }
        if (var_340 == 416) { // Ver0.1401にて追加。No = 416 タスクact3
            var_1271 = 1240;
        }
        if (var_340 == 417) { // Ver0.1401にて追加。No = 417 ラット
            var_1271 = 1200;
        }
        if (var_1271 == 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            return;
        }
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        if (var_1266 == 1) {
            color(0, 0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
        }
        if (var_1266 == 2) {
            color(0, 0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
        }
        if (var_1266 == 3) {
            color(0, 0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        }
        if (var_1266 == 4) {
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
        }
        if (var_1266 == 5) {
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
        }
        if (var_1266 == 6) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        }
        if (var_340 != 405 && var_340 != 406) {
            if (var_199 == 2) {
                gcopy(34, 0, var_1271, 40, 40);
            }
            if (var_199 == 4) {
                gcopy(34, 40, var_1271, 40, 40);
            }
            if (var_199 == 8) {
                gcopy(34, 80, var_1271, 40, 40);
            }
            if (var_199 == 6) {
                gcopy(34, 120, var_1271, 40, 40);
            }
            if (var_199 == 1) {
                gcopy(34, 160, var_1271, 40, 40);
            }
            if (var_199 == 3) {
                gcopy(34, 240, var_1271, 40, 40);
            }
            if (var_199 == 7) {
                gcopy(34, 200, var_1271, 40, 40);
            }
            if (var_199 == 9) {
                gcopy(34, 280, var_1271, 40, 40);
            }
        }
        if (var_340 == 405) {
            if (var_199 == 2) {
                gcopy(21, 0, 1040, 40, 40);
            }
            if (var_199 == 4) {
                gcopy(21, 120, 1040, 40, 40);
            }
            if (var_199 == 8) {
                gcopy(21, 240, 1040, 40, 40);
            }
            if (var_199 == 6) {
                gcopy(21, 360, 1040, 40, 40);
            }
            if (var_199 == 1) {
                gcopy(21, 480, 1040, 40, 40);
            }
            if (var_199 == 7) {
                gcopy(21, 600, 1040, 40, 40);
            }
            if (var_199 == 3) {
                gcopy(21, 720, 1040, 40, 40);
            }
            if (var_199 == 9) {
                gcopy(21, 840, 1040, 40, 40);
            }
        }
        if (var_340 == 406) {
            if (var_199 == 2) {
                gcopy(21, 0, 1080, 40, 40);
            }
            if (var_199 == 4) {
                gcopy(21, 120, 1080, 40, 40);
            }
            if (var_199 == 8) {
                gcopy(21, 240, 1080, 40, 40);
            }
            if (var_199 == 6) {
                gcopy(21, 360, 1080, 40, 40);
            }
            if (var_199 == 1) {
                gcopy(21, 480, 1080, 40, 40);
            }
            if (var_199 == 7) {
                gcopy(21, 600, 1080, 40, 40);
            }
            if (var_199 == 3) {
                gcopy(21, 720, 1080, 40, 40);
            }
            if (var_199 == 9) {
                gcopy(21, 840, 1080, 40, 40);
            }
        }
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        return;
    });
}
function func347(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(347);
        if (var_243 >= 1 && var_243 < 11) {
            if (kougeki_disc_id == 122) {
                var_1272 = 1120;
            }
            if (kougeki_disc_id == 123) {
                var_1272 = 1280;
            }
            if (kougeki_disc_id == 0) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 200) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 202) {
                var_1272 = 640;
            }
            if (kougeki_disc_id == 204) {
                var_1272 = 640;
            }
            if (kougeki_disc_id == 206) {
                var_1272 = 640;
            }
            if (kougeki_disc_id == 300) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 301) {
                var_1272 = 600;
            }
            if (kougeki_disc_id == 302) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 303) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 306) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 308) {
                var_1272 = 640;
            }
            if (kougeki_disc_id == 310) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 311) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 312) {
                var_1272 = 600;
            }
            if (kougeki_disc_id == 314) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 315) {
                var_1272 = 2120;
            }
            if (kougeki_disc_id == 316) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 320) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 393) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 395) {
                var_1272 = 0;
            }
            if (kougeki_disc_id == 396) {
                var_1272 = 0;
            }
            if (var_1272 != 0) {
                gsel(32);
                color(0, 0, 0);
                boxf(left = 0, top1 = 0, right = 160, bottom = 160);
                if (var_243 == 1) {
                    pos(0, 0);
                    gzoom(160, 160, 11, 960, var_1272, 40, 40, 1);
                }
                if (var_243 == 2) {
                    pos(60, 60);
                    gzoom(40, 40, 11, 960, var_1272, 40, 40, 1);
                }
                if (var_243 == 3) {
                    pos(0, 0);
                    gzoom(160, 160, 11, 960, var_1272, 40, 40, 1);
                }
                if (var_243 == 4) {
                    pos(5, 5);
                    gzoom(150, 150, 11, 960, var_1272, 40, 40, 1);
                }
                if (var_243 == 5) {
                    pos(10, 10);
                    gzoom(140, 140, 11, 960, var_1272, 40, 40, 1);
                }
                if (var_243 == 6) {
                    pos(20, 20);
                    gzoom(120, 120, 11, 960, var_1272, 40, 40, 1);
                }
                if (var_243 == 7) {
                    pos(15, 15);
                    gzoom(130, 130, 11, 960, var_1272, 40, 40, 1);
                }
                if (var_243 == 8) {
                    pos(20, 20);
                    gzoom(120, 120, 11, 960, var_1272, 40, 40, 1);
                }
                if (var_243 == 9) {
                    pos(35, 35);
                    gzoom(110, 110, 11, 960, var_1272, 40, 40, 1);
                }
                if (var_243 == 10) {
                    pos(30, 30);
                    gzoom(100, 100, 11, 960, var_1272, 40, 40, 1);
                }
                gsel(0);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                if (var_199 == 4) {
                    pos(100 + 40, 100 - 80);
                }
                if (var_199 == 6) {
                    pos(100 - 40, 100 - 80);
                }
                if (var_199 == 2) {
                    pos(100 + 40, 100 - 80);
                }
                if (var_199 == 8) {
                    pos(100 + 40, 100 - 80);
                }
                if (var_199 == 1) {
                    pos(100 - 40, 100 - 80);
                }
                if (var_199 == 3) {
                    pos(100 + 40, 100 - 80);
                }
                if (var_199 == 7) {
                    pos(100 + 40, 100 - 80);
                }
                if (var_199 == 9) {
                    pos(100 - 40, 100 - 80);
                }
                gcopy(32, 0, 0, 160, 160);
            }
            if (var_1272 == 0) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                if (var_243 == 1 || var_243 == 3 || var_243 == 5 || var_243 == 7 || var_243 == 9) {
                    if (var_199 == 4) {
                        pos(160 - 40, 160 - 40);
                    }
                    if (var_199 == 6) {
                        pos(160 + 40, 160 - 40);
                    }
                    if (var_199 == 2) {
                        pos(160 + 20, 160);
                    }
                    if (var_199 == 8) {
                        pos(160 + 20, 160 - 40);
                    }
                    if (var_199 == 1) {
                        pos(160 - 40, 160);
                    }
                    if (var_199 == 3) {
                        pos(160 + 40, 160);
                    }
                    if (var_199 == 7) {
                        pos(160 - 20, 160 - 40);
                    }
                    if (var_199 == 9) {
                        pos(160 + 20, 160 - 40);
                    }
                }
                if (var_243 == 2 || var_243 == 4 || var_243 == 6 || var_243 == 8 || var_243 == 10) {
                    if (var_199 == 4) {
                        pos(160 - 40 + 2, 160 - 40);
                    }
                    if (var_199 == 6) {
                        pos(160 + 40 + 2, 160 - 40);
                    }
                    if (var_199 == 2) {
                        pos(160 + 20 + 2, 160);
                    }
                    if (var_199 == 8) {
                        pos(160 + 20 + 2, 160 - 40);
                    }
                    if (var_199 == 1) {
                        pos(160 - 40 + 2, 160);
                    }
                    if (var_199 == 3) {
                        pos(160 + 40 + 2, 160);
                    }
                    if (var_199 == 7) {
                        pos(160 - 20 + 2, 160 - 40);
                    }
                    if (var_199 == 9) {
                        pos(160 + 20 + 2, 160 - 40);
                    }
                }
                gcopy(11, 1000, 80, 40, 40);
            }
        }
        return;
    });
}
function func348(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(348);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        pos((var_83[var_314].Var1 - var_66 + 4) * 40, (var_83[var_314].Var2 - var_67 + 4) * 40 - 10);
        if (var_1193 == 1) {
            gcopy(3, 1320, 200, 40, 40);
    
            DSPLAY(audio_id = 123);
        }
        if (var_1193 == 2) {
            gcopy(3, 1360, 200, 40, 40);
        }
        if (var_1193 == 3) {
            gcopy(3, 1400, 200, 40, 40);
        }
        if (var_1193 == 4) {
            gcopy(3, 1440, 200, 40, 40);
        }
        if (var_1193 == 5) {
            gcopy(3, 1480, 200, 40, 40);
        }
        var_1193++;
        if (var_1193 >= 6) {
            var_1193 = 0;
        }
        return;
    });
}
function func349(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(349);
        if (var_114 >= 1) {
            if (var_83[var_114].Var0 == 119) {
                gcopy(3, 120, 120, 40, 40);
            }
            if (var_83[var_114].Var0 == 158) {
                gcopy(3, 40, 120, 40, 40);
            }
            if (var_83[var_114].Var0 == 78) {
                gcopy(3, 720, 120, 40, 40);
            }
            if (var_83[var_114].Var0 == 69) {
                if (var_1273 == 0) {
                    gcopy(3, 40, 120, 40, 40);
                }
                if (var_1273 == 1) {
                    gcopy(3, 1040, 400, 40, 40);
                }
                if (var_1273 == 2) {
                    gcopy(3, 1080, 400, 40, 40);
                }
                if (var_1273 == 3) {
                    gcopy(3, 1120, 400, 40, 40);
                }
            }
        }
        if (var_133 == 1) {
            if (var_784 >= 0 && var_784 < 2) {
                gcopy(3, 120, 320, 40, 40);
            }
            if (var_784 >= 2 && var_784 < 4) {
                gcopy(3, 160, 320, 40, 40);
            }
            if (var_784 >= 4 && var_784 < 6) {
                gcopy(3, 200, 320, 40, 40);
            }
        }
        if (var_126 == 1) {
            if (var_784 >= 0 && var_784 < 2) {
                gcopy(3, 240, 320, 40, 40);
            }
            if (var_784 >= 2 && var_784 < 4) {
                gcopy(3, 280, 320, 40, 40);
            }
            if (var_784 >= 4 && var_784 < 6) {
                gcopy(3, 320, 320, 40, 40);
            }
        }
        if (var_134 >= 1) {
            if (var_784 >= 0 && var_784 < 2) {
                gcopy(3, 840, 320, 40, 40);
            }
            if (var_784 >= 2 && var_784 < 4) {
                gcopy(3, 880, 320, 40, 40);
            }
            if (var_784 >= 4 && var_784 < 6) {
                gcopy(3, 920, 320, 40, 40);
            }
        }
        if (var_135 >= 1) {
            if (var_784 >= 0 && var_784 < 2) {
                gcopy(3, 400, 280, 40, 40);
            }
            if (var_784 >= 2 && var_784 < 4) {
                gcopy(3, 440, 280, 40, 40);
            }
            if (var_784 >= 4 && var_784 < 6) {
                gcopy(3, 480, 280, 40, 40);
            }
        }
        if (var_136 >= 1) {
            if (var_784 >= 0 && var_784 < 2) {
                gcopy(3, 520, 280, 40, 40);
            }
            if (var_784 >= 2 && var_784 < 4) {
                gcopy(3, 560, 280, 40, 40);
            }
            if (var_784 >= 4 && var_784 < 6) {
                gcopy(3, 600, 280, 40, 40);
            }
        }
        if (var_137 >= 1) {
            if (var_784 >= 0 && var_784 < 2) {
                gcopy(3, 480, 240, 40, 40);
            }
            if (var_784 >= 2 && var_784 < 4) {
                gcopy(3, 520, 240, 40, 40);
            }
            if (var_784 >= 4 && var_784 < 6) {
                gcopy(3, 560, 240, 40, 40);
            }
        }
        if (var_178 >= 1) {
            if (var_784 == 0 || var_784 == 3) {
                gcopy(3, 560, 200, 40, 40);
            }
            if (var_784 == 1 || var_784 == 4) {
                gcopy(3, 600, 200, 40, 40);
            }
            if (var_784 == 2 || var_784 == 5) {
                gcopy(3, 640, 200, 40, 40);
            }
        }
        if (var_139 >= 1) {
            if (var_784 == 1) {
                gcopy(3, 1040, 360, 40, 40);
            }
            if (var_784 == 2) {
                gcopy(3, 1080, 360, 40, 40);
            }
            if (var_784 == 4) {
                gcopy(3, 1120, 360, 40, 40);
            }
            if (var_784 == 5) {
                gcopy(3, 1160, 360, 40, 40);
            }
        }
        if (var_177 >= 1) {
    
            font("MS ゴシック", 16, 1);
            var_1274 = ginfo(22) + 16;
            var_1275 = ginfo(23) - 10;
            var_1276 = 11 - var_177;
            if (var_1276 == 10) {
                var_1274 = var_1274 - 5;
            }
            color(255, 255, 255);
            pos(var_1274 - 1, var_1275);
            mes("" + var_1276);
            pos(var_1274 + 1, var_1275);
            mes("" + var_1276);
            pos(var_1274, var_1275 - 1);
            mes("" + var_1276);
            pos(var_1274, var_1275 + 1);
            mes("" + var_1276);
            color(255, 0, 0);
            pos(var_1274, var_1275);
            mes("" + var_1276);
        }
        return;
    });
}
// おそらく射撃攻撃のモーション設定
function func350(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(350);
        if (var_340 == 405 || var_340 == 406 || var_340 == 408 || var_340 == 409 || var_340 == 411 || var_340 == 412 || var_340 == 698) {
            return;
        }
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        if (var_199 == 4) {
            pos(4 * var_35 - 20, 4 * var_36 - 10);
        }
        if (var_199 == 6) {
            pos(4 * var_35 + 20, 4 * var_36 - 10);
        }
        if (var_199 == 2) {
            pos(4 * var_35, 4 * var_36 + 20 - 10);
        }
        if (var_199 == 8) {
            pos(4 * var_35, 4 * var_36 - 20 - 10);
        }
        if (var_199 == 1) {
            pos(4 * var_35 - 20, 4 * var_36 + 20 - 10);
        }
        if (var_199 == 3) {
            pos(4 * var_35 + 20, 4 * var_36 + 20 - 10);
        }
        if (var_199 == 7) {
            pos(4 * var_35 - 20, 4 * var_36 - 20 - 10);
        }
        if (var_199 == 9) {
            pos(4 * var_35 + 20, 4 * var_36 - 20 - 10);
        }
        if (var_340 == 403) {
            pos(4 * var_35 + 20, 4 * var_36 - 30);
        }
        if (var_340 == 401 || var_340 == 402 || var_340 == 490) {
            if (var_199 == 2) {
                pos(4 * var_35 - 10, 4 * var_36 + 20 - 10);
            }
            if (var_199 == 8) {
                pos(4 * var_35 + 15, 4 * var_36 - 20 - 10);
            }
        }
        if (var_340 == 400 || var_340 == 407 || var_340 == 404) {
            if (var_199 == 4) {
                pos(4 * var_35 - 30, 4 * var_36 - 10);
            }
            if (var_199 == 6) {
                pos(4 * var_35 + 30, 4 * var_36 - 10);
            }
            if (var_199 == 2) {
                pos(4 * var_35, 4 * var_36 + 30 - 10);
            }
            if (var_199 == 8) {
                pos(4 * var_35, 4 * var_36 - 30 - 10);
            }
            if (var_199 == 1) {
                pos(4 * var_35 - 30, 4 * var_36 + 30 - 10);
            }
            if (var_199 == 3) {
                pos(4 * var_35 + 30, 4 * var_36 + 30 - 10);
            }
            if (var_199 == 7) {
                pos(4 * var_35 - 30, 4 * var_36 - 30 - 10);
            }
            if (var_199 == 9) {
                pos(4 * var_35 + 30, 4 * var_36 - 30 - 10);
            }
        }
        // タスクの射撃モーション設定。
        if (var_340 == 414 || var_340 == 415 || var_340 == 416) { // Ver0.14にて修正。415、416を追加。
            if (var_199 == 4) {
                pos(4 * var_35 - 20, 4 * var_36 - 10 + 10);
            }
            if (var_199 == 6) {
                pos(4 * var_35 + 20, 4 * var_36 - 10 + 10);
            }
            if (var_199 == 2) {
                pos(4 * var_35 - 10, 4 * var_36 + 20 - 10);
            }
            if (var_199 == 8) {
                pos(4 * var_35 + 15, 4 * var_36 - 20 - 10);
            }
            if (var_199 == 1) {
                pos(4 * var_35 - 20, 4 * var_36 + 20 - 10);
            }
            if (var_199 == 3) {
                pos(4 * var_35 + 20, 4 * var_36 + 20 - 10);
            }
            if (var_199 == 7) {
                pos(4 * var_35 - 20, 4 * var_36 - 20 - 10);
            }
            if (var_199 == 9) {
                pos(4 * var_35 + 20, 4 * var_36 - 20 - 10);
            }
        }
        if (var_340 == 400 || var_340 == 407) {
            if (var_1197 == 1) {
                gcopy(3, 360, 240, 40, 40);
            }
            if (var_1197 == 2) {
                gcopy(3, 400, 240, 40, 40);
            }
            if (var_1197 == 3) {
                gcopy(3, 440, 240, 40, 40);
            }
            return;
        }
        if (var_340 == 404) {
            if (var_1197 == 1) {
                gcopy(3, 280, 280, 40, 40);
            }
            if (var_1197 == 2) {
                gcopy(3, 320, 280, 40, 40);
            }
            if (var_1197 == 3) {
                gcopy(3, 360, 280, 40, 40);
            }
            return;
        }
        if (var_340 == 401) {
            if (var_1197 == 1) {
                gcopy(3, 600, 320, 40, 40);
            }
            if (var_1197 == 2) {
                gcopy(3, 640, 320, 40, 40);
            }
            if (var_1197 == 3) {
                gcopy(3, 680, 320, 40, 40);
            }
            return;
        }
        if (var_1197 == 1) {
            gcopy(3, 0, 320, 40, 40);
        }
        if (var_1197 == 2) {
            gcopy(3, 40, 320, 40, 40);
        }
        if (var_1197 == 3) {
            gcopy(3, 80, 320, 40, 40);
        }
        return;
    });
}
function func351(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(351);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        if (var_340 == 698) {
            if (var_747 > 0 || var_389 >= 1) {
                if (var_747 > 0 && var_750 == 1) {
                    pos(var_748 * var_35 - 12, var_749 * var_36 - 10 - 12 - 10);
                }
                if (var_389 >= 1) {
                    pos(4 * var_35 - 12, 4 * var_36 - 10 - 12 - 10);
                }
                if (var_747 == 1) {
                    gcopy(35, 0, 704, 64, 64);
                }
                if (var_747 == 2 || var_747 == 3) {
                    gcopy(35, 64, 704, 64, 64);
                }
                if (var_747 == 4 || var_747 == 5) {
                    gcopy(35, 128, 704, 64, 64);
                }
                if (var_747 == 6 || var_747 == 7) {
                    gcopy(35, 192, 704, 64, 64);
                }
                if (var_747 == 8) {
                    gcopy(35, 256, 704, 64, 64);
                }
                if (var_747 == 9) {
                    gcopy(35, 320, 704, 64, 64);
                }
                if (var_747 == 10) {
                    gcopy(35, 384, 704, 64, 64);
                }
                if (var_747 == 11) {
                    gcopy(35, 448, 704, 64, 64);
                }
            }
            return;
        }
        if (var_1212 == 1 || var_108 == 1) {
            if (var_747 > 0 && var_750 == 0) {
                if (var_199 == 4) {
                    pos(4 * var_35 - 40, 4 * var_36 - 10);
                }
                if (var_199 == 6) {
                    pos(4 * var_35 + 40, 4 * var_36 - 10);
                }
                if (var_199 == 2) {
                    pos(4 * var_35, 4 * var_36 + 40 - 10);
                }
                if (var_199 == 8) {
                    pos(4 * var_35, 4 * var_36 - 40 - 10);
                }
                if (var_199 == 1) {
                    pos(4 * var_35 - 40, 4 * var_36 + 40 - 10);
                }
                if (var_199 == 3) {
                    pos(4 * var_35 + 40, 4 * var_36 + 40 - 10);
                }
                if (var_199 == 7) {
                    pos(4 * var_35 - 40, 4 * var_36 - 40 - 10);
                }
                if (var_199 == 9) {
                    pos(4 * var_35 + 40, 4 * var_36 - 40 - 10);
                }
            }
            if (var_747 > 0 && var_750 == 1) {
                pos(var_748 * var_35, var_749 * var_36 - 10);
            }
            if (var_389 >= 1 || var_108 == 1) {
                pos(4 * var_35, 4 * var_36 - 10);
            }
            if (var_747 > 0 || var_389 >= 1) {
                if (var_747 == 1) {
                    gcopy(3, 0, 320, 40, 40);
                }
                if (var_747 == 2) {
                    gcopy(3, 40, 320, 40, 40);
                }
                if (var_747 == 3) {
                    gcopy(3, 80, 320, 40, 40);
                }
            }
            return;
        }
        if (var_747 > 0 && var_750 == 0) {
            if (var_199 == 4) {
                pos(4 * var_35 - 40 - 12, 4 * var_36 - 10 - 12);
                var_1277 = var_66 - 1;
                var_1278 = var_67;
            }
            if (var_199 == 6) {
                pos(4 * var_35 + 40 - 12, 4 * var_36 - 10 - 12);
                var_1277 = var_66 + 1;
                var_1278 = var_67;
            }
            if (var_199 == 2) {
                pos(4 * var_35 - 12, 4 * var_36 + 40 - 10 - 12);
                var_1277 = var_66;
                var_1278 = var_67 + 1;
            }
            if (var_199 == 8) {
                pos(4 * var_35 - 12, 4 * var_36 - 40 - 10 - 12);
                var_1277 = var_66;
                var_1278 = var_67 - 1;
            }
            if (var_199 == 1) {
                pos(4 * var_35 - 40 - 12, 4 * var_36 + 40 - 10 - 12);
                var_1277 = var_66 - 1;
                var_1278 = var_67 + 1;
            }
            if (var_199 == 3) {
                pos(4 * var_35 + 40 - 12, 4 * var_36 + 40 - 10 - 12);
                var_1277 = var_66 + 1;
                var_1278 = var_67 + 1;
            }
            if (var_199 == 7) {
                pos(4 * var_35 - 40 - 12, 4 * var_36 - 40 - 10 - 12);
                var_1277 = var_66 - 1;
                var_1278 = var_67 - 1;
            }
            if (var_199 == 9) {
                pos(4 * var_35 + 40 - 12, 4 * var_36 - 40 - 10 - 12);
                var_1277 = var_66 + 1;
                var_1278 = var_67 - 1;
            }
        }
        if (var_747 > 0 && var_750 == 1) {
            pos(var_748 * var_35 - 12, var_749 * var_36 - 10 - 12);
            var_1277 = var_748 - 4 + var_66;
            var_1278 = var_749 - 4 + var_67;
        }
        if (var_389 >= 1) {
            pos(4 * var_35 - 12, 4 * var_36 - 10 - 12);
            var_1277 = var_66;
            var_1278 = var_67;
        }
        if (var_1279 == 0 && var_209 >= 41) {
            if (var_747 > 0 || var_389 >= 1) {
                if (var_747 == 1) {
                    gcopy(35, 0, 832, 64, 64);
                }
                if (var_747 == 2) {
                    gcopy(35, 64, 832, 64, 64);
                }
                if (var_747 == 3) {
                    gcopy(35, 128, 832, 64, 64);
                }
                if (var_747 == 4) {
                    gcopy(35, 192, 832, 64, 64);
                }
                if (var_747 == 5) {
                    gcopy(35, 256, 832, 64, 64);
                }
                if (var_747 == 6) {
                    gcopy(35, 320, 832, 64, 64);
                }
                if (var_747 == 7) {
                    gcopy(35, 384, 832, 64, 64);
                }
                if (var_747 == 8) {
                    gcopy(35, 448, 832, 64, 64);
                }
            }
        }
        if (var_1279 == 0 && var_209 >= 15 && var_209 < 41) {
            if (var_747 > 0 || var_389 >= 1) {
                if (var_747 == 1) {
                    gcopy(35, 0, 896, 64, 64);
                }
                if (var_747 == 2) {
                    gcopy(35, 64, 896, 64, 64);
                }
                if (var_747 == 3) {
                    gcopy(35, 128, 896, 64, 64);
                }
                if (var_747 == 4) {
                    gcopy(35, 192, 896, 64, 64);
                }
                if (var_747 == 5) {
                    gcopy(35, 256, 896, 64, 64);
                }
                if (var_747 == 6) {
                    gcopy(35, 320, 896, 64, 64);
                }
                if (var_747 == 7) {
                    gcopy(35, 384, 896, 64, 64);
                }
                if (var_747 == 8) {
                    gcopy(35, 448, 896, 64, 64);
                }
            }
        }
        if (var_1279 == 0 && var_209 < 15) {
            if (var_747 > 0 || var_389 >= 1) {
                if (var_747 == 1) {
                    gcopy(35, 0, 960, 64, 64);
                }
                if (var_747 == 2) {
                    gcopy(35, 64, 960, 64, 64);
                }
                if (var_747 == 3) {
                    gcopy(35, 128, 960, 64, 64);
                }
                if (var_747 == 4) {
                    gcopy(35, 192, 960, 64, 64);
                }
                if (var_747 == 5) {
                    gcopy(35, 256, 960, 64, 64);
                }
                if (var_747 == 6) {
                    gcopy(35, 320, 960, 64, 64);
                }
                if (var_747 == 7) {
                    gcopy(35, 384, 960, 64, 64);
                }
                if (var_747 == 8) {
                    gcopy(35, 448, 960, 64, 64);
                }
            }
        }
        if (var_340 == 400 || var_340 == 407) {
            if (var_747 > 0 || var_389 >= 1) {
                if (var_747 > 0 && var_750 == 1) {
                    pos(var_748 * var_35 - 12, var_749 * var_36 - 10 - 12);
                }
                if (var_389 >= 1) {
                    pos(4 * var_35 - 12, 4 * var_36 - 10 - 12);
                }
                if (var_747 == 1) {
                    gcopy(35, 512, 704, 64, 64);
                }
                if (var_747 == 2) {
                    gcopy(35, 576, 704, 64, 64);
                }
                if (var_747 == 3) {
                    gcopy(35, 640, 704, 64, 64);
                }
                if (var_747 == 4) {
                    gcopy(35, 704, 704, 64, 64);
                }
                if (var_747 == 5) {
                    gcopy(35, 768, 704, 64, 64);
                }
                if (var_747 == 6) {
                    gcopy(35, 832, 704, 64, 64);
                }
                if (var_747 == 7) {
                    gcopy(35, 896, 704, 64, 64);
                }
                if (var_747 == 8) {
                    gcopy(35, 960, 704, 64, 64);
                }
            }
            return;
        }
        if (var_340 == 401) {
            if (var_747 > 0 || var_389 >= 1) {
                if (var_747 > 0 && var_750 == 1) {
                    pos(var_748 * var_35 - 12, var_749 * var_36 - 10 - 12);
                }
                if (var_389 >= 1) {
                    pos(4 * var_35 - 12, 4 * var_36 - 10 - 12);
                }
                if (var_747 == 1) {
                    gcopy(35, 0, 768, 64, 64);
                }
                if (var_747 == 2) {
                    gcopy(35, 64, 768, 64, 64);
                }
                if (var_747 == 3) {
                    gcopy(35, 128, 768, 64, 64);
                }
                if (var_747 == 4) {
                    gcopy(35, 192, 768, 64, 64);
                }
                if (var_747 == 5) {
                    gcopy(35, 256, 768, 64, 64);
                }
                if (var_747 == 6) {
                    gcopy(35, 320, 768, 64, 64);
                }
                if (var_747 == 7) {
                    gcopy(35, 384, 768, 64, 64);
                }
                if (var_747 == 8) {
                    gcopy(35, 448, 768, 64, 64);
                }
            }
            return;
        }
        return;
    });
}
// 装備disc攻撃モーションドット座標指定
function func352(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(352);
        if (kougeki_disc_id > 0 && var_1280 == 0 && kougeki_disc_id != 122) {
            var_1281 = 0;
            if (var_243 == 1) {
                var_1281 = 8;
            }
            if (var_243 == 2) {
                var_1281 = 4;
            }
            if (var_243 == 3) {
                var_1281 = 2;
            }
            if (var_243 == 8) {
                var_1281 = 2;
            }
            if (var_243 == 9) {
                var_1281 = 3;
            }
            if (var_199 == 4) {
                pos(160 - 30 + var_1281, 150);
            }
            if (var_199 == 6) {
                pos(160 + 30 - var_1281, 150);
            }
            if (var_199 == 2) {
                pos(160, 150 + 30 - var_1281);
            }
            if (var_199 == 8) {
                pos(160, 150 - 30 + var_1281);
            }
            if (var_199 == 1) {
                pos(160 - 30 + var_1281, 150 + 30 - var_1281);
            }
            if (var_199 == 3) {
                pos(160 + 30 - var_1281, 150 + 30 - var_1281);
            }
            if (var_199 == 7) {
                pos(160 - 30 + var_1281, 150 - 30 + var_1281);
            }
            if (var_199 == 9) {
                pos(160 + 30 - var_1281, 150 - 30 + var_1281);
            }
            if (kougeki_disc_id == 315) {
                if (var_199 == 4) {
                    var_1282 = 12;
                    pos(160 - 30 + var_1281 + var_1282, 150 - 3);
                }
                if (var_199 == 6) {
                    var_1282 = 12;
                    pos(160 + 30 - var_1281 - var_1282, 150 - 3);
                }
                if (var_199 == 7) {
                    var_1282 = 15;
                    pos(160 - 30 + var_1281 + var_1282, 150 - 30 + var_1281 + var_1282 - 5);
                }
                if (var_199 == 9) {
                    var_1282 = 15;
                    pos(160 + 30 - var_1281 - var_1282, 150 - 30 + var_1281 + var_1282 - 5);
                }
                if (var_199 == 8) {
                    var_1282 = 5;
                    pos(160, 150 - 30 + var_1281 + var_1282);
                }
                if (var_199 == 2) {
                    var_1282 = 13;
                    pos(160, 150 + 30 - var_1281 - var_1282);
                }
                if (var_199 == 3) {
                    var_1282 = 15;
                    pos(160 + 30 - var_1281 - var_1282, 150 + 30 - var_1281 - var_1282 + 5);
                }
                if (var_199 == 1) {
                    var_1282 = 15;
                    pos(160 - 30 + var_1281 + var_1282, 150 + 30 - var_1281 - var_1282 + 5);
                }
            }
            var_1272 = 0;
            if (kougeki_disc_id == 100) {
                var_1272 = 200;
            }
            if (kougeki_disc_id == 101) {
                var_1272 = 160;
            }
            if (kougeki_disc_id == 102) {
                var_1272 = 120;
            }
            if (kougeki_disc_id == 103) {
                var_1272 = 80;
            }
            if (kougeki_disc_id == 104) {
                var_1272 = 240;
            }
            if (kougeki_disc_id == 105) {
                var_1272 = 360;
            }
            if (kougeki_disc_id == 106) {
                var_1272 = 320;
            }
            if (kougeki_disc_id == 107) {
                var_1272 = 280;
            }
            if (kougeki_disc_id == 108) {
                var_1272 = 440;
            }
            if (kougeki_disc_id == 109) {
                var_1272 = 480;
            }
            if (kougeki_disc_id == 110) {
                var_1272 = 400;
            }
            if (kougeki_disc_id == 111) {
                var_1272 = 520;
            }
            if (kougeki_disc_id == 112 || kougeki_disc_id == 395) {
                var_1272 = 560;
            }
            if (kougeki_disc_id == 113) {
                var_1272 = 600;
            }
            if (kougeki_disc_id == 114) {
                var_1272 = 640;
            }
            if (kougeki_disc_id == 115) {
                var_1272 = 680;
            }
            if (kougeki_disc_id == 116) {
                var_1272 = 720;
            }
            if (kougeki_disc_id == 117) {
                var_1272 = 880;
            }
            if (kougeki_disc_id == 118) {
                var_1272 = 920;
            }
            if (kougeki_disc_id == 119) {
                var_1272 = 1000;
            }
            if (kougeki_disc_id == 120) {
                var_1272 = 1040;
            }
            if (kougeki_disc_id == 121) {
                var_1272 = 1080;
            }
            if (kougeki_disc_id == 123) {
                var_1272 = 1280;
            }
            if (kougeki_disc_id == 124) {
                var_1272 = 1320;
            }
            if (kougeki_disc_id == 201) {
                var_1272 = 1360;
            }
            if (kougeki_disc_id == 203) {
                var_1272 = 1440;
            }
            if (kougeki_disc_id == 204) {
                var_1272 = 2000;
            }
            if (kougeki_disc_id == 205) {
                var_1272 = 1200;
            }
            if (kougeki_disc_id == 207) {
                var_1272 = 1240;
            }
            if (kougeki_disc_id == 208) { // Ver0.1401にて追加。C-MOON
                var_1272 = 2280;
            }
            if (kougeki_disc_id == 252) { // Ver0.1401にて追加。クリーム・スターター
                var_1272 = 2360;
            }
            if (kougeki_disc_id == 255) { // Ver0.1401にて追加。イン・ア・サイレント・ウェイ
                var_1272 = 2440;
            }
            if (kougeki_disc_id == 261) { // Ver0.1401にて追加。D4C
                var_1272 = 2400;
            }
            if (kougeki_disc_id == 301) {
                var_1272 = 1920;
            }
            if (kougeki_disc_id == 304) {
                var_1272 = 1400;
            }
            if (kougeki_disc_id == 305) {
                var_1272 = 2160;
            }
            if (kougeki_disc_id == 307) {
                var_1272 = 1520;
            }
            if (kougeki_disc_id == 308) {
                var_1272 = 1880;
            }
            if (kougeki_disc_id == 309) {
                var_1272 = 2040;
            }
            if (kougeki_disc_id == 312) {
                var_1272 = 1960;
            }
            if (kougeki_disc_id == 313) {
                var_1272 = 1560;
            }
            if (kougeki_disc_id == 315) {
                var_1272 = 2120;
            }
            if (kougeki_disc_id == 317) {
                var_1272 = 1640;
            }
            if (kougeki_disc_id == 318) {
                var_1272 = 1520;
            }
            if (kougeki_disc_id == 318) {
                var_1272 = 1680;
            }
            if (kougeki_disc_id == 319) {
                var_1272 = 1720;
            }
            if (kougeki_disc_id == 394) {
                var_1272 = 760;
            }
            if (kougeki_disc_id == 397) {
                var_1272 = 1840;
            }
            if (kougeki_disc_id == 398) {
                var_1272 = 1600;
            }
            if (kougeki_disc_id == 399) {
                var_1272 = 1480;
            }
            if (var_1272 == 0 && var_243 != 0) {
                return;
            }
            if (var_1283 == 0) {
                bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
                yield func426();
                var_570 = var_233[var_553].Var13;
                if (var_341 == 2) {
                    yield func427();
                    var_570 = var_233[var_554].Var13;
                }
                if (var_570 == 0) {
                    bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
                }
                if (var_570 == 1) {
                    bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
                }
                if (var_570 == 2) {
                    bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
                }
                if (var_570 == 3) {
                    bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
                }
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_243 == 1 || var_243 == 7 || var_243 == 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_243 == 9) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_243 == 1 || var_243 == 2) {
                if (var_199 == 2) {
                    gcopy(bufferid_stand_disc, 0, var_1272, 40, 40);
                }
                if (var_199 == 4) {
                    gcopy(bufferid_stand_disc, 120, var_1272, 40, 40);
                }
                if (var_199 == 8) {
                    gcopy(bufferid_stand_disc, 240, var_1272, 40, 40);
                }
                if (var_199 == 6) {
                    gcopy(bufferid_stand_disc, 360, var_1272, 40, 40);
                }
                if (var_199 == 1) {
                    gcopy(bufferid_stand_disc, 480, var_1272, 40, 40);
                }
                if (var_199 == 3) {
                    gcopy(bufferid_stand_disc, 720, var_1272, 40, 40);
                }
                if (var_199 == 7) {
                    gcopy(bufferid_stand_disc, 600, var_1272, 40, 40);
                }
                if (var_199 == 9) {
                    gcopy(bufferid_stand_disc, 840, var_1272, 40, 40);
                }
            }
            if (var_243 == 3) {
                if (var_199 == 2) {
                    gcopy(bufferid_stand_disc, 40, var_1272, 40, 40);
                }
                if (var_199 == 4) {
                    gcopy(bufferid_stand_disc, 160, var_1272, 40, 40);
                }
                if (var_199 == 8) {
                    gcopy(bufferid_stand_disc, 280, var_1272, 40, 40);
                }
                if (var_199 == 6) {
                    gcopy(bufferid_stand_disc, 400, var_1272, 40, 40);
                }
                if (var_199 == 1) {
                    gcopy(bufferid_stand_disc, 520, var_1272, 40, 40);
                }
                if (var_199 == 3) {
                    gcopy(bufferid_stand_disc, 760, var_1272, 40, 40);
                }
                if (var_199 == 7) {
                    gcopy(bufferid_stand_disc, 640, var_1272, 40, 40);
                }
                if (var_199 == 9) {
                    gcopy(bufferid_stand_disc, 880, var_1272, 40, 40);
                }
            }
            if (var_243 >= 4 && var_243 < 10) {
                if (var_199 == 2) {
                    gcopy(bufferid_stand_disc, 80, var_1272, 40, 40);
                }
                if (var_199 == 4) {
                    gcopy(bufferid_stand_disc, 200, var_1272, 40, 40);
                }
                if (var_199 == 8) {
                    gcopy(bufferid_stand_disc, 320, var_1272, 40, 40);
                }
                if (var_199 == 6) {
                    gcopy(bufferid_stand_disc, 440, var_1272, 40, 40);
                }
                if (var_199 == 1) {
                    gcopy(bufferid_stand_disc, 560, var_1272, 40, 40);
                }
                if (var_199 == 3) {
                    gcopy(bufferid_stand_disc, 800, var_1272, 40, 40);
                }
                if (var_199 == 7) {
                    gcopy(bufferid_stand_disc, 680, var_1272, 40, 40);
                }
                if (var_199 == 9) {
                    gcopy(bufferid_stand_disc, 920, var_1272, 40, 40);
                }
            }
            if (kougeki_disc_id == 110) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                if (var_243 == 1 || var_243 == 7 || var_243 == 8) {
                    color(0, 0, 0);

                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                }
                if (var_243 == 9) {
                    color(0, 0, 0);
    
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                }
                var_1281 = 0;
                if (var_243 == 1) {
                    var_1281 = 8;
                }
                if (var_243 == 2) {
                    var_1281 = 4;
                }
                if (var_243 == 3) {
                    var_1281 = 2;
                }
                if (var_243 == 8) {
                    var_1281 = 2;
                }
                if (var_243 == 9) {
                    var_1281 = 3;
                }
                if (var_199 == 2 && var_243 == 3) {
                    pos(160 + 5, 160 + 60 - var_1281);
                    gcopy(bufferid_stand_disc, 1000, 400, 13, 40);
                }
                if (var_199 == 2 && var_243 == 4) {
                    pos(160 + 5, 160 + 60);
                    gcopy(bufferid_stand_disc, 1013, 400, 13, 40);
                }
                if (var_199 == 2 && var_243 >= 5 && var_243 < 10 && var_243 != 8 && var_243 != 9) {
                    pos(160 + 5, 160 + 60);
                    gcopy(bufferid_stand_disc, 1026, 400, 13, 40);
                }
                if (var_199 == 2 && var_243 == 8) {
                    pos(160 + 5, 160 + 60 - var_1281);
                    gcopy(bufferid_stand_disc, 1026, 400, 13, 40);
                }
                if (var_199 == 2 && var_243 == 9) {
                    pos(160 + 5, 160 + 60 - var_1281);
                    gcopy(bufferid_stand_disc, 1026, 400, 13, 40);
                }
                if (var_199 == 8 && var_243 == 3) {
                    pos(160 + 18, 160 - 80 + var_1281);
                    gcopy(bufferid_stand_disc, 1080, 400, 13, 40);
                }
                if (var_199 == 8 && var_243 == 4) {
                    pos(160 + 18, 160 - 80);
                    gcopy(bufferid_stand_disc, 1093, 400, 13, 40);
                }
                if (var_199 == 8 && var_243 >= 5 && var_243 < 10 && var_243 != 8 && var_243 != 9) {
                    pos(160 + 18, 160 - 80);
                    gcopy(bufferid_stand_disc, 1106, 400, 13, 40);
                }
                if (var_199 == 8 && var_243 == 8) {
                    pos(160 + 18, 160 - 80 + var_1281);
                    gcopy(bufferid_stand_disc, 1106, 400, 13, 40);
                }
                if (var_199 == 8 && var_243 == 9) {
                    pos(160 + 18, 160 - 80 + var_1281);
                    gcopy(bufferid_stand_disc, 1106, 400, 13, 40);
                }
                if (var_199 == 4 && var_243 == 3) {
                    pos(160 - 70 + var_1281, 160 + 4);
                    gcopy(bufferid_stand_disc, 1040, 400, 40, 13);
                }
                if (var_199 == 4 && var_243 == 4) {
                    pos(160 - 70, 160 + 4);
                    gcopy(bufferid_stand_disc, 1040, 413, 40, 13);
                }
                if (var_199 == 4 && var_243 >= 5 && var_243 < 10 && var_243 != 8 && var_243 != 9) {
                    pos(160 - 70, 160 + 4);
                    gcopy(bufferid_stand_disc, 1040, 426, 40, 13);
                }
                if (var_199 == 4 && var_243 == 8) {
                    pos(160 - 70 + var_1281, 160 + 4);
                    gcopy(bufferid_stand_disc, 1040, 426, 40, 13);
                }
                if (var_199 == 4 && var_243 == 9) {
                    pos(160 - 70 + var_1281, 160 + 4);
                    gcopy(bufferid_stand_disc, 1040, 426, 40, 13);
                }
                if (var_199 == 6 && var_243 == 3) {
                    pos(160 + 70 - var_1281, 160 + 4);
                    gcopy(bufferid_stand_disc, 1120, 400, 40, 13);
                }
                if (var_199 == 6 && var_243 == 4) {
                    pos(160 + 70, 160 + 4);
                    gcopy(bufferid_stand_disc, 1120, 413, 40, 13);
                }
                if (var_199 == 6 && var_243 >= 5 && var_243 < 10 && var_243 != 8 && var_243 != 9) {
                    pos(160 + 70, 160 + 4);
                    gcopy(bufferid_stand_disc, 1120, 426, 40, 13);
                }
                if (var_199 == 6 && var_243 == 8) {
                    pos(160 + 70 - var_1281, 160 + 4);
                    gcopy(bufferid_stand_disc, 1120, 426, 40, 13);
                }
                if (var_199 == 6 && var_243 == 9) {
                    pos(160 + 70 - var_1281, 160 + 4);
                    gcopy(bufferid_stand_disc, 1120, 426, 40, 13);
                }
                if (var_199 == 1 && var_243 == 3) {
                    pos(160 - 69 + var_1281, 160 + 59 - var_1281);
                    gcopy(bufferid_stand_disc, 1160, 400, 40, 40);
                }
                if (var_199 == 1 && var_243 == 4) {
                    pos(160 - 69, 160 + 59);
                    gcopy(bufferid_stand_disc, 1200, 400, 40, 40);
                }
                if (var_199 == 1 && var_243 >= 5 && var_243 < 10 && var_243 != 8 && var_243 != 9) {
                    pos(160 - 69, 160 + 59);
                    gcopy(bufferid_stand_disc, 1240, 400, 40, 40);
                }
                if (var_199 == 1 && var_243 == 8) {
                    pos(160 - 69 + var_1281, 160 + 59 - var_1281);
                    gcopy(bufferid_stand_disc, 1240, 400, 40, 40);
                }
                if (var_199 == 1 && var_243 == 9) {
                    pos(160 - 69 + var_1281, 160 + 59 - var_1281);
                    gcopy(bufferid_stand_disc, 1240, 400, 40, 40);
                }
                if (var_199 == 3 && var_243 == 3) {
                    pos(160 + 69 - var_1281, 160 + 59 - var_1281);
                    gcopy(bufferid_stand_disc, 1160, 440, 40, 40);
                }
                if (var_199 == 3 && var_243 == 4) {
                    pos(160 + 69, 160 + 59);
                    gcopy(bufferid_stand_disc, 1200, 440, 40, 40);
                }
                if (var_199 == 3 && var_243 >= 5 && var_243 < 10 && var_243 != 8 && var_243 != 9) {
                    pos(160 + 69, 160 + 59);
                    gcopy(bufferid_stand_disc, 1240, 440, 40, 40);
                }
                if (var_199 == 3 && var_243 == 8) {
                    pos(160 + 69 - var_1281, 160 + 59 - var_1281);
                    gcopy(bufferid_stand_disc, 1240, 440, 40, 40);
                }
                if (var_199 == 3 && var_243 == 9) {
                    pos(160 + 69 - var_1281, 160 + 59 - var_1281);
                    gcopy(bufferid_stand_disc, 1240, 440, 40, 40);
                }
                if (var_199 == 7 && var_243 == 3) {
                    pos(160 - 69 + var_1281, 160 - 80 + var_1281);
                    gcopy(bufferid_stand_disc, 1040, 360, 40, 40);
                }
                if (var_199 == 7 && var_243 == 4) {
                    pos(160 - 69, 160 - 80);
                    gcopy(bufferid_stand_disc, 1080, 360, 40, 40);
                }
                if (var_199 == 7 && var_243 >= 5 && var_243 < 10 && var_243 != 8 && var_243 != 9) {
                    pos(160 - 69, 160 - 80);
                    gcopy(bufferid_stand_disc, 1120, 360, 40, 40);
                }
                if (var_199 == 7 && var_243 == 8) {
                    pos(160 - 69 + var_1281, 160 - 80 + var_1281);
                    gcopy(bufferid_stand_disc, 1120, 360, 40, 40);
                }
                if (var_199 == 7 && var_243 == 9) {
                    pos(160 - 69 + var_1281, 160 - 80 + var_1281);
                    gcopy(bufferid_stand_disc, 1120, 360, 40, 40);
                }
                if (var_199 == 9 && var_243 == 3) {
                    pos(160 + 69 - var_1281, 160 - 80 + var_1281);
                    gcopy(bufferid_stand_disc, 1160, 360, 40, 40);
                }
                if (var_199 == 9 && var_243 == 4) {
                    pos(160 + 69, 160 - 80);
                    gcopy(bufferid_stand_disc, 1200, 360, 40, 40);
                }
                if (var_199 == 9 && var_243 >= 5 && var_243 < 10 && var_243 != 8 && var_243 != 9) {
                    pos(160 + 69, 160 - 80);
                    gcopy(bufferid_stand_disc, 1240, 360, 40, 40);
                }
                if (var_199 == 9 && var_243 == 8) {
                    pos(160 + 69 - var_1281, 160 - 80 + var_1281);
                    gcopy(bufferid_stand_disc, 1240, 360, 40, 40);
                }
                if (var_199 == 9 && var_243 == 9) {
                    pos(160 + 69 - var_1281, 160 - 80 + var_1281);
                    gcopy(bufferid_stand_disc, 1240, 360, 40, 40);
                }
            }
        }
        if (kougeki_disc_id == 122) {
            yield func426();
            var_570 = var_233[var_553].Var13;
            if (var_341 == 2) {
                yield func427();
                var_570 = var_233[var_554].Var13;
            }
            if (var_570 == 0) {
                bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
            }
            if (var_570 == 1) {
                bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
            }
            if (var_570 == 2) {
                bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
            }
            if (var_570 == 3) {
                bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_243 == 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_243 == 9) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_199 == 2) {
                pos(160, 150);
            }
            if (var_199 == 4) {
                pos(160 - 30, 150);
            }
            if (var_199 == 8) {
                pos(160 + 5, 150 - 30);
            }
            if (var_199 == 6) {
                pos(160 - 10, 150);
            }
            if (var_199 == 1) {
                pos(160 - 10, 150);
            }
            if (var_199 == 3) {
                pos(160 + 10, 150);
            }
            if (var_199 == 7) {
                pos(160 - 10, 150 - 20);
            }
            if (var_199 == 9) {
                pos(160 + 10, 150 - 20);
            }
            if (var_243 == 1 || var_243 == 2) {
                if (var_199 == 2) {
                    gcopy(bufferid_stand_disc, 0, 1120, 40, 80);
                }
                if (var_199 == 4) {
                    gcopy(bufferid_stand_disc, 240, 1120, 80, 40);
                }
                if (var_199 == 8) {
                    gcopy(bufferid_stand_disc, 120, 1120, 40, 80);
                }
                if (var_199 == 6) {
                    gcopy(bufferid_stand_disc, 320, 1160, 40, 40);
                }
                if (var_199 == 1) {
                    gcopy(bufferid_stand_disc, 0, 1120, 40, 80);
                }
                if (var_199 == 3) {
                    gcopy(bufferid_stand_disc, 520, 1120, 40, 80);
                }
                if (var_199 == 7) {
                    gcopy(bufferid_stand_disc, 560, 1120, 40, 80);
                }
                if (var_199 == 9) {
                    gcopy(bufferid_stand_disc, 120, 1120, 40, 80);
                }
            }
            if (var_243 == 3) {
                if (var_199 == 2) {
                    gcopy(bufferid_stand_disc, 40, 1120, 40, 80);
                }
                if (var_199 == 4) {
                    gcopy(bufferid_stand_disc, 240, 1160, 80, 40);
                }
                if (var_199 == 8) {
                    gcopy(bufferid_stand_disc, 160, 1120, 40, 80);
                }
                if (var_199 == 6) {
                    gcopy(bufferid_stand_disc, 360, 1160, 40, 40);
                }
                if (var_199 == 1) {
                    gcopy(bufferid_stand_disc, 40, 1120, 40, 80);
                }
                if (var_199 == 3) {
                    gcopy(bufferid_stand_disc, 480, 1120, 40, 80);
                }
                if (var_199 == 7) {
                    gcopy(bufferid_stand_disc, 600, 1120, 40, 80);
                }
                if (var_199 == 9) {
                    gcopy(bufferid_stand_disc, 160, 1120, 40, 80);
                }
            }
            if (var_243 >= 4 && var_243 < 10) {
                if (var_199 == 2) {
                    gcopy(bufferid_stand_disc, 80, 1120, 40, 80);
                }
                if (var_199 == 4) {
                    gcopy(bufferid_stand_disc, 320, 1120, 40, 40);
                }
                if (var_199 == 8) {
                    gcopy(bufferid_stand_disc, 200, 1120, 40, 80);
                }
                if (var_199 == 6) {
                    gcopy(bufferid_stand_disc, 360, 1120, 80, 40);
                }
                if (var_199 == 1) {
                    gcopy(bufferid_stand_disc, 80, 1120, 40, 80);
                }
                if (var_199 == 3) {
                    gcopy(bufferid_stand_disc, 440, 1120, 40, 80);
                }
                if (var_199 == 7) {
                    gcopy(bufferid_stand_disc, 640, 1120, 40, 80);
                }
                if (var_199 == 9) {
                    gcopy(bufferid_stand_disc, 200, 1120, 40, 80);
                }
            }
        }
        if (var_1280 == 1) {
            yield func426();
            var_570 = var_233[var_553].Var13;
            if (var_570 == 0) {
                bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
            }
            if (var_570 == 1) {
                bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
            }
            if (var_570 == 2) {
                bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
            }
            if (var_570 == 3) {
                bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
            }
            var_1285 = 0;
            if (kougeki_disc_id == 398) {
                var_1285 = 1760;
            }
            if (var_243 == 1 || var_243 >= 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            else {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            }
            if (var_199 == 4) {
                pos(160 - 50, 160 - 25);
                if (var_243 == 1 || var_243 == 3 || var_243 == 5 || var_243 == 7 || var_243 == 9) {
                    gcopy(bufferid_stand_disc, 480, var_1285, 80, 80);
                }
                if (var_243 == 2 || var_243 == 4 || var_243 == 6 || var_243 == 8 || var_243 == 10) {
                    gcopy(bufferid_stand_disc, 560, var_1285, 80, 80);
                }
            }
            if (var_199 == 6) {
                pos(160 + 10, 160 - 25);
                if (var_243 == 1 || var_243 == 3 || var_243 == 5 || var_243 == 7 || var_243 == 9) {
                    gcopy(bufferid_stand_disc, 320, var_1285, 80, 80);
                }
                if (var_243 == 2 || var_243 == 4 || var_243 == 6 || var_243 == 8 || var_243 == 10) {
                    gcopy(bufferid_stand_disc, 400, var_1285, 80, 80);
                }
            }
            if (var_199 == 3) {
                pos(160 + 10, 160 + 5);
                if (var_243 == 1 || var_243 == 3 || var_243 == 5 || var_243 == 7 || var_243 == 9) {
                    gcopy(bufferid_stand_disc, 0, var_1285, 80, 80);
                }
                if (var_243 == 2 || var_243 == 4 || var_243 == 6 || var_243 == 8 || var_243 == 10) {
                    gcopy(bufferid_stand_disc, 80, var_1285, 80, 80);
                }
            }
            if (var_199 == 1) {
                pos(160 - 50, 160 + 5);
                if (var_243 == 1 || var_243 == 3 || var_243 == 5 || var_243 == 7 || var_243 == 9) {
                    gcopy(bufferid_stand_disc, 160, var_1285, 80, 80);
                }
                if (var_243 == 2 || var_243 == 4 || var_243 == 6 || var_243 == 8 || var_243 == 10) {
                    gcopy(bufferid_stand_disc, 240, var_1285, 80, 80);
                }
            }
            if (var_199 == 7) {
                pos(160 - 50, 160 - 60);
                if (var_243 == 1 || var_243 == 3 || var_243 == 5 || var_243 == 7 || var_243 == 9) {
                    gcopy(bufferid_stand_disc, 640, var_1285, 80, 80);
                }
                if (var_243 == 2 || var_243 == 4 || var_243 == 6 || var_243 == 8 || var_243 == 10) {
                    gcopy(bufferid_stand_disc, 720, var_1285, 80, 80);
                }
            }
            if (var_199 == 9) {
                pos(160 + 10, 160 - 60);
                if (var_243 == 1 || var_243 == 3 || var_243 == 5 || var_243 == 7 || var_243 == 9) {
                    gcopy(bufferid_stand_disc, 800, var_1285, 80, 80);
                }
                if (var_243 == 2 || var_243 == 4 || var_243 == 6 || var_243 == 8 || var_243 == 10) {
                    gcopy(bufferid_stand_disc, 880, var_1285, 80, 80);
                }
            }
            if (var_199 == 2) {
                pos(160 - 20, 160 + 5);
                if (var_243 == 1 || var_243 == 3 || var_243 == 5 || var_243 == 7 || var_243 == 9) {
                    gcopy(bufferid_stand_disc, 960, var_1285, 80, 80);
                }
                if (var_243 == 2 || var_243 == 4 || var_243 == 6 || var_243 == 8 || var_243 == 10) {
                    gcopy(bufferid_stand_disc, 1040, var_1285, 80, 80);
                }
            }
            if (var_199 == 8) {
                pos(160 - 20, 160 - 70);
                if (var_243 == 1 || var_243 == 3 || var_243 == 5 || var_243 == 7 || var_243 == 9) {
                    gcopy(bufferid_stand_disc, 1120, var_1285, 80, 80);
                }
                if (var_243 == 2 || var_243 == 4 || var_243 == 6 || var_243 == 8 || var_243 == 10) {
                    gcopy(bufferid_stand_disc, 1200, var_1285, 80, 80);
                }
            }
        }
        return;
    });
}
function func353(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(353);
        pos(var_1286, var_1287);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        if (var_1288 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_83[var_314].Var1 - var_66 + 4) * 40, (var_83[var_314].Var2 - var_67 + 4) * 40 - 50);
            gcopy(15, 1080, 360, 40, 40); // buffer(15)は "img_enemy1b.gif" ブチュルブチュの文字？？
            pos((var_83[var_314].Var1 - var_66 + 4) * 40, (var_83[var_314].Var2 - var_67 + 4) * 40 - 10);
            belongings_item_list = var_1289;
            var_1248 = var_1249;
            if (var_1270 == 1) {
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
        }
        if (var_773 >= 1 && var_773 <= 6) {
            pos(160, var_774);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(3, 40, 0, 40, 40);
        }
        if (var_773 >= 7 && var_773 <= 15) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_773 == 7) {
                pos(160, 110);
            }
            if (var_773 == 8) {
                pos(160, 112);
            }
            if (var_773 == 9) {
                pos(160, 110);
            }
            if (var_773 == 10) {
                pos(160, 100);
            }
            if (var_773 == 11) {
                pos(160, 105);
            }
            if (var_773 == 12) {
                pos(160, 110);
            }
            if (var_773 == 13) {
                pos(160, 120);
            }
            if (var_773 == 14) {
                pos(160, 130);
            }
            if (var_773 == 15) {
                pos(160, 160);
            }
            gcopy(3, 40, 0, 40, 40);
        }
        if (var_777 >= 1 && var_777 <= 6) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_777 == 1) {
                pos(160, 120);
            }
            if (var_777 == 2) {
                pos(160, 100);
            }
            if (var_777 == 3) {
                pos(160, 90);
            }
            if (var_777 == 4) {
                pos(160, 85);
            }
            if (var_777 == 5) {
                pos(160, 100);
            }
            if (var_777 == 6) {
                pos(160, 100);
            }
            gcopy(3, 240, 0, 40, 40);
        }
        if (var_777 >= 7 && var_777 <= 12) {
            pos(160, var_774);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(3, 240, 0, 40, 40);
        }
        if (var_1290 >= 1 && var_127 == 0) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1290 == 1 || var_1290 == 7 || var_1290 == 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1290 == 9) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            var_1291 = 10;  // 敵キャラの攻撃モーション用スタンドのドット絵選択
            if (var_1292 == 4) {
                pos(var_1293 - 20, var_1294 - 10);
            }
            if (var_1292 == 6) {
                pos(var_1293 + 20, var_1294 - 10);
            }
            if (var_1292 == 2) {
                pos(var_1293, var_1294 + 20 - 10);
            }
            if (var_1292 == 8) {
                pos(var_1293, var_1294 - 20 - 10);
            }
            if (var_1292 == 1) {
                pos(var_1293 - 20, var_1294 + 20 - 10);
            }
            if (var_1292 == 3) {
                pos(var_1293 + 20, var_1294 + 20 - 10);
            }
            if (var_1292 == 7) {
                pos(var_1293 - 20, var_1294 - 20 - 10);
            }
            if (var_1292 == 9) {
                pos(var_1293 + 20, var_1294 - 20 - 10);
            }
            if (var_1290 == 1 || var_1290 == 2) {
                if (var_1292 == 2) {
                    gcopy(11, 0, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 4) {
                    gcopy(11, 120, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 8) {
                    gcopy(11, 240, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 6) {
                    gcopy(11, 360, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 1) {
                    gcopy(11, 480, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 3) {
                    gcopy(11, 720, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 7) {
                    gcopy(11, 600, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 9) {
                    gcopy(11, 840, var_1291 * 40, 40, 40);
                }
            }
            if (var_1290 == 3) {
                if (var_1292 == 2) {
                    gcopy(11, 40, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 4) {
                    gcopy(11, 160, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 8) {
                    gcopy(11, 280, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 6) {
                    gcopy(11, 400, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 1) {
                    gcopy(11, 520, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 3) {
                    gcopy(11, 760, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 7) {
                    gcopy(11, 640, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 9) {
                    gcopy(11, 880, var_1291 * 40, 40, 40);
                }
            }
            if (var_1290 >= 4) {
                if (var_1292 == 2) {
                    gcopy(11, 80, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 4) {
                    gcopy(11, 200, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 8) {
                    gcopy(11, 320, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 6) {
                    gcopy(11, 440, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 1) {
                    gcopy(11, 560, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 3) {
                    gcopy(11, 800, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 7) {
                    gcopy(11, 680, var_1291 * 40, 40, 40);
                }
                if (var_1292 == 9) {
                    gcopy(11, 920, var_1291 * 40, 40, 40);
                }
            }
            var_1281 = 0;
            if (var_1292 == 2 && var_1290 == 3) {
                pos(var_1293 + 5, var_1294 + 50);
                gcopy(11, 1000, 400, 13, 40);
            }
            if (var_1292 == 2 && var_1290 == 4) {
                pos(var_1293 + 2, var_1294 + 50);
                gcopy(11, 1013, 400, 13, 40);
            }
            if (var_1292 == 2 && var_1290 >= 5 && var_1290 < 10 && var_1290 != 8 && var_1290 != 9) {
                pos(var_1293 + 5, var_1294 + 50);
                gcopy(11, 1026, 400, 13, 40);
            }
            if (var_1292 == 2 && var_1290 == 8) {
                pos(var_1293 + 5, var_1294 + 50);
                gcopy(11, 1026, 400, 13, 40);
            }
            if (var_1292 == 2 && var_1290 == 9) {
                pos(var_1293 + 5, var_1294 + 50);
                gcopy(11, 1026, 400, 13, 40);
            }
            if (var_1292 == 8 && var_1290 == 3) {
                pos(var_1293 + 18, var_1294 - 70);
                gcopy(11, 1080, 400, 13, 40);
            }
            if (var_1292 == 8 && var_1290 == 4) {
                pos(var_1293 + 18, var_1294 - 70);
                gcopy(11, 1093, 400, 13, 40);
            }
            if (var_1292 == 8 && var_1290 >= 5 && var_1290 < 10 && var_1290 != 8 && var_1290 != 9) {
                pos(var_1293 + 18, var_1294 - 70);
                gcopy(11, 1106, 400, 13, 40);
            }
            if (var_1292 == 8 && var_1290 == 8) {
                pos(var_1293 + 18, var_1294 - 70);
                gcopy(11, 1106, 400, 13, 40);
            }
            if (var_1292 == 8 && var_1290 == 9) {
                pos(var_1293 + 18, var_1294 - 70);
                gcopy(11, 1106, 400, 13, 40);
            }
            if (var_1292 == 4 && var_1290 == 3) {
                pos(var_1293 - 60, var_1294 + 4);
                gcopy(11, 1040, 400, 40, 13);
            }
            if (var_1292 == 4 && var_1290 == 4) {
                pos(var_1293 - 60, var_1294 + 4);
                gcopy(11, 1040, 413, 40, 13);
            }
            if (var_1292 == 4 && var_1290 >= 5 && var_1290 < 10 && var_1290 != 8 && var_1290 != 9) {
                pos(var_1293 - 60, var_1294 + 4);
                gcopy(11, 1040, 426, 40, 13);
            }
            if (var_1292 == 4 && var_1290 == 8) {
                pos(var_1293 - 60, var_1294 + 4);
                gcopy(11, 1040, 426, 40, 13);
            }
            if (var_1292 == 4 && var_1290 == 9) {
                pos(var_1293 - 60, var_1294 + 4);
                gcopy(11, 1040, 426, 40, 13);
            }
            if (var_1292 == 6 && var_1290 == 3) {
                pos(var_1293 + 60, var_1294 + 4);
                gcopy(11, 1120, 400, 40, 13);
            }
            if (var_1292 == 6 && var_1290 == 4) {
                pos(var_1293 + 60, var_1294 + 4);
                gcopy(11, 1120, 413, 40, 13);
            }
            if (var_1292 == 6 && var_1290 >= 5 && var_1290 < 10 && var_1290 != 8 && var_1290 != 9) {
                pos(var_1293 + 60, var_1294 + 4);
                gcopy(11, 1120, 426, 40, 13);
            }
            if (var_1292 == 6 && var_1290 == 8) {
                pos(var_1293 + 60, var_1294 + 4);
                gcopy(11, 1120, 426, 40, 13);
            }
            if (var_1292 == 6 && var_1290 == 9) {
                pos(var_1293 + 60, var_1294 + 4);
                gcopy(11, 1120, 426, 40, 13);
            }
            if (var_1292 == 1 && var_1290 == 3) {
                pos(var_1293 - 59, var_1294 + 49);
                gcopy(11, 1160, 400, 40, 40);
            }
            if (var_1292 == 1 && var_1290 == 4) {
                pos(var_1293 - 59, var_1294 + 49);
                gcopy(11, 1200, 400, 40, 40);
            }
            if (var_1292 == 1 && var_1290 >= 5 && var_1290 < 10 && var_1290 != 8 && var_1290 != 9) {
                pos(var_1293 - 59, var_1294 + 49);
                gcopy(11, 1240, 400, 40, 40);
            }
            if (var_1292 == 1 && var_1290 == 8) {
                pos(var_1293 - 59, var_1294 + 49);
                gcopy(11, 1240, 400, 40, 40);
            }
            if (var_1292 == 1 && var_1290 == 9) {
                pos(var_1293 - 59, var_1294 + 49);
                gcopy(11, 1240, 400, 40, 40);
            }
            if (var_1292 == 3 && var_1290 == 3) {
                pos(var_1293 + 59, var_1294 + 49);
                gcopy(11, 1160, 440, 40, 40);
            }
            if (var_1292 == 3 && var_1290 == 4) {
                pos(var_1293 + 59, var_1294 + 49);
                gcopy(11, 1200, 440, 40, 40);
            }
            if (var_1292 == 3 && var_1290 >= 5 && var_1290 < 10 && var_1290 != 8 && var_1290 != 9) {
                pos(var_1293 + 59, var_1294 + 49);
                gcopy(11, 1240, 440, 40, 40);
            }
            if (var_1292 == 3 && var_1290 == 8) {
                pos(var_1293 + 59, var_1294 + 49);
                gcopy(11, 1240, 440, 40, 40);
            }
            if (var_1292 == 3 && var_1290 == 9) {
                pos(var_1293 + 59, var_1294 + 49);
                gcopy(11, 1240, 440, 40, 40);
            }
            if (var_1292 == 7 && var_1290 == 3) {
                pos(var_1293 - 59, var_1294 - 70);
                gcopy(11, 1040, 360, 40, 40);
            }
            if (var_1292 == 7 && var_1290 == 4) {
                pos(var_1293 - 59, var_1294 - 70);
                gcopy(11, 1080, 360, 40, 40);
            }
            if (var_1292 == 7 && var_1290 >= 5 && var_1290 < 10 && var_1290 != 8 && var_1290 != 9) {
                pos(var_1293 - 59, var_1294 - 70);
                gcopy(11, 1120, 360, 40, 40);
            }
            if (var_1292 == 7 && var_1290 == 8) {
                pos(var_1293 - 59, var_1294 - 70);
                gcopy(11, 1120, 360, 40, 40);
            }
            if (var_1292 == 7 && var_1290 == 9) {
                pos(var_1293 - 59, var_1294 - 70);
                gcopy(11, 1120, 360, 40, 40);
            }
            if (var_1292 == 9 && var_1290 == 3) {
                pos(var_1293 + 59, var_1294 - 70);
                gcopy(11, 1160, 360, 40, 40);
            }
            if (var_1292 == 9 && var_1290 == 4) {
                pos(var_1293 + 59, var_1294 - 70);
                gcopy(11, 1200, 360, 40, 40);
            }
            if (var_1292 == 9 && var_1290 >= 5 && var_1290 < 10 && var_1290 != 8 && var_1290 != 9) {
                pos(var_1293 + 59, var_1294 - 70);
                gcopy(11, 1240, 360, 40, 40);
            }
            if (var_1292 == 9 && var_1290 == 8) {
                pos(var_1293 + 59, var_1294 - 70);
                gcopy(11, 1240, 360, 40, 40);
            }
            if (var_1292 == 9 && var_1290 == 9) {
                pos(var_1293 + 59, var_1294 - 70);
                gcopy(11, 1240, 360, 40, 40);
            }
        }
        if (var_1295 >= 1 && var_127 == 0) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1292 == 2 && var_1295 == 4) {
                pos(var_1293 + 5, var_1294 + 33);
                gcopy(34, 1000, 480, 13, 40);
            }
            if (var_1292 == 2 && var_1295 == 5) {
                pos(var_1293 + 5, var_1294 + 33);
                gcopy(34, 1013, 480, 13, 40);
            }
            if (var_1292 == 2) {
                if (var_1295 == 6 || var_1295 == 7) {
                    pos(var_1293 + 5, var_1294 + 43);
                    gcopy(34, 1026, 480, 13, 40);
                }
            }
            if (var_1292 == 2 && var_1295 == 8) {
                pos(var_1293 + 5, var_1294 + 43);
                gcopy(34, 1013, 480, 13, 40);
            }
            if (var_1292 == 2 && var_1295 == 9) {
                pos(var_1293 + 5, var_1294 + 33);
                gcopy(34, 1000, 480, 13, 40);
            }
            if (var_1292 == 8 && var_1295 == 4) {
                pos(var_1293 + 20, var_1294 - 52);
                gcopy(34, 1080, 480, 13, 40);
            }
            if (var_1292 == 8 && var_1295 == 5) {
                pos(var_1293 + 20, var_1294 - 52);
                gcopy(34, 1093, 480, 13, 40);
            }
            if (var_1292 == 8) {
                if (var_1295 == 6 || var_1295 == 7) {
                    pos(var_1293 + 20, var_1294 - 62);
                    gcopy(34, 1106, 480, 13, 40);
                }
            }
            if (var_1292 == 8 && var_1295 == 8) {
                pos(var_1293 + 20, var_1294 - 62);
                gcopy(34, 1093, 480, 13, 40);
            }
            if (var_1292 == 8 && var_1295 == 9) {
                pos(var_1293 + 20, var_1294 - 52);
                gcopy(34, 1080, 480, 13, 40);
            }
            if (var_1292 == 4 && var_1295 == 4) {
                pos(var_1293 - 43, var_1294 + 6);
                gcopy(34, 1040, 480, 40, 13);
            }
            if (var_1292 == 4 && var_1295 == 5) {
                pos(var_1293 - 43, var_1294 + 6);
                gcopy(34, 1040, 493, 40, 13);
            }
            if (var_1292 == 4) {
                if (var_1295 == 6 || var_1295 == 7) {
                    pos(var_1293 - 53, var_1294 + 6);
                    gcopy(34, 1040, 506, 40, 13);
                }
            }
            if (var_1292 == 4 && var_1295 == 8) {
                pos(var_1293 - 53, var_1294 + 6);
                gcopy(34, 1040, 493, 40, 13);
            }
            if (var_1292 == 4 && var_1295 == 9) {
                pos(var_1293 - 43, var_1294 + 6);
                gcopy(34, 1040, 480, 40, 13);
            }
            if (var_1292 == 6 && var_1295 == 4) {
                pos(var_1293 + 43, var_1294 + 6);
                gcopy(34, 1120, 480, 40, 13);
            }
            if (var_1292 == 6 && var_1295 == 5) {
                pos(var_1293 + 43, var_1294 + 6);
                gcopy(34, 1120, 493, 40, 13);
            }
            if (var_1292 == 6) {
                if (var_1295 == 6 || var_1295 == 7) {
                    pos(var_1293 + 53, var_1294 + 6);
                    gcopy(34, 1120, 506, 40, 13);
                }
            }
            if (var_1292 == 6 && var_1295 == 8) {
                pos(var_1293 + 53, var_1294 + 6);
                gcopy(34, 1120, 493, 40, 13);
            }
            if (var_1292 == 6 && var_1295 == 9) {
                pos(var_1293 + 43, var_1294 + 6);
                gcopy(34, 1120, 480, 40, 13);
            }
            if (var_1292 == 1 && var_1295 == 4) {
                pos(var_1293 - 44, var_1294 + 32);
                gcopy(34, 1160, 480, 40, 40);
            }
            if (var_1292 == 1 && var_1295 == 5) {
                pos(var_1293 - 44, var_1294 + 32);
                gcopy(34, 1200, 480, 40, 40);
            }
            if (var_1292 == 1 && var_1295 == 6) {
                pos(var_1293 - 54, var_1294 + 42);
                gcopy(34, 1240, 480, 40, 40);
            }
            if (var_1292 == 1 && var_1295 == 7) {
                pos(var_1293 - 59, var_1294 + 47);
                gcopy(34, 1240, 480, 40, 40);
            }
            if (var_1292 == 1 && var_1295 == 8) {
                pos(var_1293 - 54, var_1294 + 42);
                gcopy(34, 1200, 480, 40, 40);
            }
            if (var_1292 == 1 && var_1295 == 9) {
                pos(var_1293 - 44, var_1294 + 32);
                gcopy(34, 1160, 480, 40, 40);
            }
            if (var_1292 == 3 && var_1295 == 4) {
                pos(var_1293 + 44, var_1294 + 32);
                gcopy(34, 1160, 520, 40, 40);
            }
            if (var_1292 == 3 && var_1295 == 5) {
                pos(var_1293 + 44, var_1294 + 32);
                gcopy(34, 1200, 520, 40, 40);
            }
            if (var_1292 == 3 && var_1295 == 6) {
                pos(var_1293 + 54, var_1294 + 42);
                gcopy(34, 1240, 520, 40, 40);
            }
            if (var_1292 == 3 && var_1295 == 7) {
                pos(var_1293 + 59, var_1294 + 47);
                gcopy(34, 1240, 520, 40, 40);
            }
            if (var_1292 == 3 && var_1295 == 8) {
                pos(var_1293 + 54, var_1294 + 42);
                gcopy(34, 1200, 520, 40, 40);
            }
            if (var_1292 == 3 && var_1295 == 9) {
                pos(var_1293 + 44, var_1294 + 32);
                gcopy(34, 1160, 520, 40, 40);
            }
            if (var_1292 == 7 && var_1295 == 4) {
                pos(var_1293 - 44, var_1294 - 54);
                gcopy(34, 1040, 440, 40, 40);
            }
            if (var_1292 == 7 && var_1295 == 5) {
                pos(var_1293 - 44, var_1294 - 54);
                gcopy(34, 1080, 440, 40, 40);
            }
            if (var_1292 == 7 && var_1295 == 6) {
                pos(var_1293 - 54, var_1294 - 64);
                gcopy(34, 1120, 440, 40, 40);
            }
            if (var_1292 == 7 && var_1295 == 7) {
                pos(var_1293 - 59, var_1294 - 69);
                gcopy(34, 1120, 440, 40, 40);
            }
            if (var_1292 == 7 && var_1295 == 8) {
                pos(var_1293 - 54, var_1294 - 64);
                gcopy(34, 1080, 440, 40, 40);
            }
            if (var_1292 == 7 && var_1295 == 9) {
                pos(var_1293 - 44, var_1294 - 54);
                gcopy(34, 1040, 440, 40, 40);
            }
            if (var_1292 == 9 && var_1295 == 4) {
                pos(var_1293 + 44, var_1294 - 54);
                gcopy(34, 1040, 520, 40, 40);
            }
            if (var_1292 == 9 && var_1295 == 5) {
                pos(var_1293 + 44, var_1294 - 54);
                gcopy(34, 1080, 520, 40, 40);
            }
            if (var_1292 == 9 && var_1295 == 6) {
                pos(var_1293 + 54, var_1294 - 64);
                gcopy(34, 1120, 520, 40, 40);
            }
            if (var_1292 == 9 && var_1295 == 7) {
                pos(var_1293 + 59, var_1294 - 69);
                gcopy(34, 1120, 520, 40, 40);
            }
            if (var_1292 == 9 && var_1295 == 8) {
                pos(var_1293 + 54, var_1294 - 64);
                gcopy(34, 1080, 520, 40, 40);
            }
            if (var_1292 == 9 && var_1295 == 9) {
                pos(var_1293 + 44, var_1294 - 54);
                gcopy(34, 1040, 520, 40, 40);
            }
        }
        if (var_1296 >= 1 && var_127 == 0) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1292 == 2 && var_1296 == 4) {
                pos(var_1293 - 2, var_1294 + 40);
                gcopy(34, 1000, 600, 13, 40);
            }
            if (var_1292 == 2 && var_1296 == 5) {
                pos(var_1293 - 1, var_1294 + 40);
                gcopy(34, 1013, 600, 13, 40);
            }
            if (var_1292 == 2) {
                if (var_1296 == 6 || var_1296 == 7) {
                    pos(var_1293, var_1294 + 50);
                    gcopy(34, 1026, 600, 13, 40);
                }
            }
            if (var_1292 == 2 && var_1296 == 8) {
                pos(var_1293, var_1294 + 50);
                gcopy(34, 1026, 600, 13, 40);
            }
            if (var_1292 == 2 && var_1296 == 9) {
                pos(var_1293, var_1294 + 40);
                gcopy(34, 1026, 600, 13, 40);
            }
            if (var_1292 == 8 && var_1296 == 4) {
                pos(var_1293 + 10, var_1294 - 58);
                gcopy(34, 1080, 600, 13, 40);
            }
            if (var_1292 == 8 && var_1296 == 5) {
                pos(var_1293 + 10, var_1294 - 58);
                gcopy(34, 1093, 600, 13, 40);
            }
            if (var_1292 == 8) {
                if (var_1296 == 6 || var_1296 == 7) {
                    pos(var_1293 + 10, var_1294 - 68);
                    gcopy(34, 1106, 600, 13, 40);
                }
            }
            if (var_1292 == 8 && var_1296 == 8) {
                pos(var_1293 + 10, var_1294 - 68);
                gcopy(34, 1106, 600, 13, 40);
            }
            if (var_1292 == 8 && var_1296 == 9) {
                pos(var_1293 + 10, var_1294 - 58);
                gcopy(34, 1106, 600, 13, 40);
            }
            if (var_1292 == 4 && var_1296 == 4) {
                pos(var_1293 - 50, var_1294 + 6);
                gcopy(34, 1040, 600, 40, 13);
            }
            if (var_1292 == 4 && var_1296 == 5) {
                pos(var_1293 - 50, var_1294 + 7);
                gcopy(34, 1040, 613, 40, 13);
            }
            if (var_1292 == 4) {
                if (var_1296 == 6 || var_1296 == 7) {
                    pos(var_1293 - 60, var_1294 + 8);
                    gcopy(34, 1040, 626, 40, 13);
                }
            }
            if (var_1292 == 4 && var_1296 == 8) {
                pos(var_1293 - 60, var_1294 + 8);
                gcopy(34, 1040, 626, 40, 13);
            }
            if (var_1292 == 4 && var_1296 == 9) {
                pos(var_1293 - 50, var_1294 + 8);
                gcopy(34, 1040, 626, 40, 13);
            }
            if (var_1292 == 6 && var_1296 == 4) {
                pos(var_1293 + 51, var_1294 + 6);
                gcopy(34, 1120, 600, 40, 13);
            }
            if (var_1292 == 6 && var_1296 == 5) {
                pos(var_1293 + 51, var_1294 + 7);
                gcopy(34, 1120, 613, 40, 13);
            }
            if (var_1292 == 6) {
                if (var_1296 == 6 || var_1296 == 7) {
                    pos(var_1293 + 61, var_1294 + 8);
                    gcopy(34, 1120, 626, 40, 13);
                }
            }
            if (var_1292 == 6 && var_1296 == 8) {
                pos(var_1293 + 61, var_1294 + 8);
                gcopy(34, 1120, 626, 40, 13);
            }
            if (var_1292 == 6 && var_1296 == 9) {
                pos(var_1293 + 51, var_1294 + 8);
                gcopy(34, 1120, 626, 40, 13);
            }
            if (var_1292 == 1 && var_1296 == 4) {
                pos(var_1293 - 44, var_1294 + 32);
                gcopy(34, 1160, 600, 40, 40);
            }
            if (var_1292 == 1 && var_1296 == 5) {
                pos(var_1293 - 44, var_1294 + 32);
                gcopy(34, 1200, 600, 40, 40);
            }
            if (var_1292 == 1 && var_1296 == 6) {
                pos(var_1293 - 54, var_1294 + 42);
                gcopy(34, 1240, 600, 40, 40);
            }
            if (var_1292 == 1 && var_1296 == 7) {
                pos(var_1293 - 59, var_1294 + 47);
                gcopy(34, 1240, 600, 40, 40);
            }
            if (var_1292 == 1 && var_1296 == 8) {
                pos(var_1293 - 54, var_1294 + 42);
                gcopy(34, 1240, 600, 40, 40);
            }
            if (var_1292 == 1 && var_1296 == 9) {
                pos(var_1293 - 44, var_1294 + 32);
                gcopy(34, 1240, 600, 40, 40);
            }
            if (var_1292 == 3 && var_1296 == 4) {
                pos(var_1293 + 44, var_1294 + 32);
                gcopy(34, 1160, 640, 40, 40);
            }
            if (var_1292 == 3 && var_1296 == 5) {
                pos(var_1293 + 44, var_1294 + 32);
                gcopy(34, 1200, 640, 40, 40);
            }
            if (var_1292 == 3 && var_1296 == 6) {
                pos(var_1293 + 54, var_1294 + 42);
                gcopy(34, 1240, 640, 40, 40);
            }
            if (var_1292 == 3 && var_1296 == 7) {
                pos(var_1293 + 59, var_1294 + 47);
                gcopy(34, 1240, 640, 40, 40);
            }
            if (var_1292 == 3 && var_1296 == 8) {
                pos(var_1293 + 54, var_1294 + 42);
                gcopy(34, 1240, 640, 40, 40);
            }
            if (var_1292 == 3 && var_1296 == 9) {
                pos(var_1293 + 44, var_1294 + 32);
                gcopy(34, 1240, 640, 40, 40);
            }
            if (var_1292 == 7 && var_1296 == 4) {
                pos(var_1293 - 44, var_1294 - 54);
                gcopy(34, 1040, 560, 40, 40);
            }
            if (var_1292 == 7 && var_1296 == 5) {
                pos(var_1293 - 44, var_1294 - 54);
                gcopy(34, 1080, 560, 40, 40);
            }
            if (var_1292 == 7 && var_1296 == 6) {
                pos(var_1293 - 54, var_1294 - 64);
                gcopy(34, 1120, 560, 40, 40);
            }
            if (var_1292 == 7 && var_1296 == 7) {
                pos(var_1293 - 59, var_1294 - 69);
                gcopy(34, 1120, 560, 40, 40);
            }
            if (var_1292 == 7 && var_1296 == 8) {
                pos(var_1293 - 54, var_1294 - 64);
                gcopy(34, 1120, 560, 40, 40);
            }
            if (var_1292 == 7 && var_1296 == 9) {
                pos(var_1293 - 44, var_1294 - 54);
                gcopy(34, 1120, 560, 40, 40);
            }
            if (var_1292 == 9 && var_1296 == 4) {
                pos(var_1293 + 44, var_1294 - 54);
                gcopy(34, 1040, 640, 40, 40);
            }
            if (var_1292 == 9 && var_1296 == 5) {
                pos(var_1293 + 44, var_1294 - 54);
                gcopy(34, 1080, 640, 40, 40);
            }
            if (var_1292 == 9 && var_1296 == 6) {
                pos(var_1293 + 54, var_1294 - 64);
                gcopy(34, 1120, 640, 40, 40);
            }
            if (var_1292 == 9 && var_1296 == 7) {
                pos(var_1293 + 59, var_1294 - 69);
                gcopy(34, 1120, 640, 40, 40);
            }
            if (var_1292 == 9 && var_1296 == 8) {
                pos(var_1293 + 54, var_1294 - 64);
                gcopy(34, 1120, 640, 40, 40);
            }
            if (var_1292 == 9 && var_1296 == 9) {
                pos(var_1293 + 44, var_1294 - 54);
                gcopy(34, 1120, 640, 40, 40);
            }
        }
        return;
    });
}

function func354(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(354);
        pos(var_1286, var_1287);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        if (var_1297 >= 1) {
            var_1298 = var_1299 * 64;
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(148, 138);
            if (var_1299 == 0) {
                pos(148, 98);
            }
            if (var_1299 == 1) {
                pos(148, 128);
            }
            if (var_1299 == 2) {
                pos(165, 125);
            }
            if (var_1299 == 3) {
                pos(148, 128);
            }
            if (var_1299 == 4) {
                pos(148, 128);
            }
            if (var_1299 == 5) {
                pos(148, 128);
            }
            if (var_1299 == 8) {
                pos(148, 128);
            }
            if (var_1299 == 9) {
                pos(148, 128);
            }
            if (var_1299 == 10) {
                pos(148, 128);
            }
            if (var_1297 == 1) {
                gcopy(35, 0, var_1298, 64, 64);
            }
            if (var_1297 == 2) {
                gcopy(35, 64, var_1298, 64, 64);
            }
            if (var_1297 == 3) {
                gcopy(35, 128, var_1298, 64, 64);
            }
            if (var_1297 == 4) {
                gcopy(35, 192, var_1298, 64, 64);
            }
            if (var_1297 == 5) {
                gcopy(35, 256, var_1298, 64, 64);
            }
            if (var_1297 == 6) {
                gcopy(35, 320, var_1298, 64, 64);
            }
            if (var_1297 == 7) {
                gcopy(35, 384, var_1298, 64, 64);
            }
            if (var_1297 == 8) {
                gcopy(35, 448, var_1298, 64, 64);
            }
            if (var_1297 == 9) {
                gcopy(35, 512, var_1298, 64, 64);
            }
            if (var_1297 == 10) {
                gcopy(35, 576, var_1298, 64, 64);
            }
            if (var_1297 == 11) {
                gcopy(35, 640, var_1298, 64, 64);
            }
            if (var_1297 == 12) {
                gcopy(35, 704, var_1298, 64, 64);
            }
            if (var_1297 == 13) {
                gcopy(35, 768, var_1298, 64, 64);
            }
            if (var_1297 == 14) {
                gcopy(35, 832, var_1298, 64, 64);
            }
            if (var_1297 == 15) {
                gcopy(35, 896, var_1298, 64, 64);
            }
            if (var_1297 == 16) {
                gcopy(35, 960, var_1298, 64, 64);
            }
            if (var_1297 == 17) {
                gcopy(35, 1024, var_1298, 64, 64);
            }
            if (var_1297 == 18) {
                gcopy(35, 1088, var_1298, 64, 64);
            }
            if (var_1297 == 19) {
                gcopy(35, 1152, var_1298, 64, 64);
            }
            if (var_1297 == 20) {
                gcopy(35, 1216, var_1298, 64, 64);
            }
        }
        if (var_1300 == 1) {
            color(0, 0, 0);
    
            gmode(4, null, null, 180);
            pos(160, 150);
            gcopy(14, 40, 280, 40, 40);
        }
        if (var_1300 == 2) {
            color(0, 0, 0);
    
            gmode(4, null, null, 180);
            pos(160, 150);
            gcopy(14, 160, 440, 40, 40);
        }
        if (var_1301 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1302, var_1303);
            if (var_1304 == 0) {
                if (var_1301 == 1) {
                    gcopy(34, 720, 280, 40, 40);
                }
                if (var_1301 == 2) {
                    gcopy(34, 680, 280, 40, 40);
                }
                if (var_1301 == 3) {
                    gcopy(34, 640, 280, 40, 40);
                }
                if (var_1301 >= 4) {
                    gcopy(34, 600, 280, 40, 40);
                }
            }
            if (var_1304 == 1) {
                if (var_1301 == 1) {
                    gcopy(34, 720, 320, 40, 40);
                }
                if (var_1301 == 2) {
                    gcopy(34, 680, 320, 40, 40);
                }
                if (var_1301 == 3) {
                    gcopy(34, 640, 320, 40, 40);
                }
                if (var_1301 >= 4) {
                    gcopy(34, 600, 320, 40, 40);
                }
            }
            if (var_1304 == 2) {
                if (var_1301 == 1) {
                    gcopy(34, 720, 360, 40, 40);
                }
                if (var_1301 == 2) {
                    gcopy(34, 680, 360, 40, 40);
                }
                if (var_1301 == 3) {
                    gcopy(34, 640, 360, 40, 40);
                }
                if (var_1301 >= 4) {
                    gcopy(34, 600, 360, 40, 40);
                }
            }
        }
        if (var_1305 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160 - 12, 150 - 12 - 10);
            if (var_1305 == 1) {
                gcopy(35, 0, 704, 64, 64);
            }
            if (var_1305 == 2 || var_1305 == 3) {
                gcopy(35, 64, 704, 64, 64);
            }
            if (var_1305 == 4 || var_1305 == 5) {
                gcopy(35, 128, 704, 64, 64);
            }
            if (var_1305 == 6 || var_1305 == 7) {
                gcopy(35, 192, 704, 64, 64);
            }
            if (var_1305 == 8) {
                gcopy(35, 256, 704, 64, 64);
            }
            if (var_1305 == 9) {
                gcopy(35, 320, 704, 64, 64);
            }
            if (var_1305 == 10) {
                gcopy(35, 384, 704, 64, 64);
            }
            if (var_1305 == 11) {
                gcopy(35, 448, 704, 64, 64);
            }
        }
        if (var_1306 >= 1) {
            if (var_1306 == 5) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            gcopy(3, 80, 360, 40, 40);
        }
        if (var_1307 >= 1) {
            if (var_1307 == 8) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1307 == 9) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1308 == 1) {
                gcopy(3, 680, 200, 40, 40);
            }
            if (var_1308 == 2) {
                gcopy(3, 720, 200, 40, 40);
            }
        }
        if (var_1309 >= 1) {
            if (var_1309 <= 2 || var_1309 >= 14) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            gcopy(11, 960, 280, 40, 40);
        }
        if (var_1310 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 150);
            if (var_1310 == 1 || var_1310 == 2) {
                gcopy(15, 960, 360, 40, 40);
            }
            if (var_1310 == 3 || var_1310 == 4) {
                gcopy(15, 1000, 360, 40, 40);
            }
            if (var_1310 == 5 || var_1310 == 6) {
                gcopy(15, 1040, 360, 40, 40);
            }
            pos(160, 110);
            gcopy(15, 1080, 360, 40, 40);
        }
        if (var_1311 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 160);
            gcopy(34, 320, 920, 40, 40);
        }
        if (var_1312 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1312 == 26) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            }
            if (var_1312 == 27) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1312 == 28) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1312 == 29) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
            }
            if (var_1312 == 30) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
            }
            pos(145, 100);
            if (var_1312 == 11 || var_1312 == 13 || var_1312 == 15) {
                pos(145, 102);
            }
            if (var_1312 == 1) {
                gcopy(14, 80, 480, 64, 64);
            }
            if (var_1312 == 2) {
                gcopy(14, 144, 480, 64, 64);
            }
            if (var_1312 == 3) {
                gcopy(14, 208, 480, 64, 64);
            }
            if (var_1312 == 4) {
                gcopy(14, 272, 480, 64, 64);
            }
            if (var_1312 == 5) {
                gcopy(14, 336, 480, 64, 64);
            }
            if (var_1312 >= 6 && var_1312 <= 10) {
                gcopy(14, 400, 480, 64, 64);
            }
            if (var_1312 >= 11 && var_1312 <= 20) {
                gcopy(14, 464, 480, 64, 64);
            }
            if (var_1312 == 21) {
                gcopy(14, 528, 480, 64, 64);
            }
            if (var_1312 == 22) {
                gcopy(14, 80, 544, 64, 64);
            }
            if (var_1312 == 23) {
                gcopy(14, 144, 544, 64, 64);
            }
            if (var_1312 == 24) {
                gcopy(14, 208, 544, 64, 64);
            }
            if (var_1312 >= 25) {
                gcopy(14, 272, 544, 64, 64);
            }
        }
        if (var_744 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_744 == 2) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_744 == 3) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            pos(var_745, var_746);
            gcopy(17, 0, 1120, 40, 40);
        }
        if (var_1313 >= 1) {
            if (var_83[var_1314].Var0 == 121 || var_83[var_1314].Var0 == 126) {
                var_1315 = 400;
            }
            if (var_83[var_1314].Var0 == 151 || var_83[var_1314].Var0 == 172) {
                var_1315 = 1200;
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1313 == 1) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
            }
            if (var_1313 == 2) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
            }
            if (var_1313 == 3) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1313 == 4) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1313 == 5) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            }
            pos((var_455 - var_66 + 4) * 40, (var_456 - var_67 + 4) * 40 - 10);
            if (var_83[var_1314].Var5 == 2) {
                gcopy(34, 0, var_1315, 40, 40);
            }
            if (var_83[var_1314].Var5 == 4) {
                gcopy(34, 40, var_1315, 40, 40);
            }
            if (var_83[var_1314].Var5 == 8) {
                gcopy(34, 80, var_1315, 40, 40);
            }
            if (var_83[var_1314].Var5 == 6) {
                gcopy(34, 120, var_1315, 40, 40);
            }
            if (var_83[var_1314].Var5 == 1) {
                gcopy(34, 160, var_1315, 40, 40);
            }
            if (var_83[var_1314].Var5 == 7) {
                gcopy(34, 200, var_1315, 40, 40);
            }
            if (var_83[var_1314].Var5 == 3) {
                gcopy(34, 240, var_1315, 40, 40);
            }
            if (var_83[var_1314].Var5 == 9) {
                gcopy(34, 280, var_1315, 40, 40);
            }
        }
        if (var_1316 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            var_1317 = 0;
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                if (cnt2 == 0) {
                    var_1318 = 0;
                }
                if (cnt2 == 1) {
                    var_1318 = 8;
                }
                if (cnt2 == 2) {
                    var_1318 = 3;
                }
                if (cnt2 == 3) {
                    var_1318 = 5;
                }
                if (var_1316 == 1) {
                    pos(var_1319 + var_1318, var_1320 - 5 + var_1317);
                }
                if (var_1316 == 2) {
                    pos(var_1319 + var_1318, var_1320 - 10 + var_1317);
                }
                if (var_1316 == 3) {
                    pos(var_1319 + var_1318, var_1320 - 15 + var_1317);
                }
                if (var_1316 == 4) {
                    pos(var_1319 + var_1318, var_1320 - 18 + var_1317);
                }
                if (var_1316 == 5) {
                    pos(var_1319 + var_1318, var_1320 - 20 + var_1317);
                }
                if (var_1316 == 6) {
                    pos(var_1319 + var_1318, var_1320 - 10 + var_1317);
                }
                if (var_1316 == 7) {
                    pos(var_1319 + var_1318, var_1320 + var_1317);
                }
                if (var_1316 == 8) {
                    pos(var_1319 + var_1318, var_1320 + 10 + var_1317);
                }
                if (var_1316 == 9) {
                    pos(var_1319 + var_1318, var_1320 + 20 + var_1317);
                }
                if (var_1316 == 10) {
                    pos(var_1319 + var_1318, var_1320 + 30 + var_1317);
                }
                gcopy(9, 120, 40, 40, 40);
                var_1317 = var_1317 + 20;
            }
        }
        if (var_584 >= 1) {
            for (let cnt2 = 0; cnt2 < 100; ++cnt2) {
                pos(var_587[cnt2][1], var_587[cnt2][2]);
                if (var_587[cnt2][3] == 0 && var_587[cnt2][0] == 0) {
                    gcopy(3, 560, 160, 20, 20);
                }
                if (var_587[cnt2][3] == 1 && var_587[cnt2][0] == 0) {
                    gcopy(3, 580, 160, 20, 20);
                }
                if (var_587[cnt2][3] == 2 && var_587[cnt2][0] == 0) {
                    gcopy(3, 560, 180, 20, 20);
                }
                if (var_587[cnt2][3] == 3 && var_587[cnt2][0] == 0) {
                    gcopy(3, 580, 180, 20, 20);
                }
                if (var_587[cnt2][3] == 0 && var_587[cnt2][0] == 1) {
                    gcopy(3, 600, 160, 20, 20);
                }
                if (var_587[cnt2][3] == 1 && var_587[cnt2][0] == 1) {
                    gcopy(3, 620, 160, 20, 20);
                }
                if (var_587[cnt2][3] == 2 && var_587[cnt2][0] == 1) {
                    gcopy(3, 600, 180, 20, 20);
                }
                if (var_587[cnt2][3] == 3 && var_587[cnt2][0] == 1) {
                    gcopy(3, 620, 180, 20, 20);
                }
                if (var_587[cnt2][3] == 0 && var_587[cnt2][0] == 2) {
                    gcopy(3, 640, 160, 40, 40);
                }
                if (var_587[cnt2][3] == 1 && var_587[cnt2][0] == 2) {
                    gcopy(3, 680, 160, 40, 40);
                }
                if (var_587[cnt2][3] == 2 && var_587[cnt2][0] == 2) {
                    gcopy(3, 720, 160, 40, 40);
                }
                if (var_587[cnt2][3] == 3 && var_587[cnt2][0] == 2) {
                    gcopy(3, 760, 160, 40, 40);
                }
                var_587[cnt2][1] = var_587[cnt2][1] - var_587[cnt2][4];
                var_587[cnt2][2] = var_587[cnt2][2] + var_587[cnt2][5];
                var_587[cnt2][3] = var_587[cnt2][3] + 1;
                if (var_587[cnt2][3] == 4) {
                    var_587[cnt2][3] = 0;
                }
            }
        }
        if (var_586 >= 1) {
            if (var_586 == 1) {
                pos(105, 0);
            }
            if (var_586 == 2) {
                pos(105, 50);
            }
            if (var_586 == 3) {
                pos(105, 80);
            }
            if (var_586 == 4) {
                pos(105, 105);
            }
            if (var_586 == 5) {
                pos(105, 110);
            }
            if (var_586 == 6) {
                pos(105, 105);
            }
            if (var_586 == 7) {
                pos(105, 110);
            }
            if (var_586 >= 8) {
                pos(105, 105);
            }
            gcopy(3, 840, 160, 160, 120);
        }
        if (var_1321 >= 1) {
            if (var_1321 <= 3 || var_1321 > 13) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            else {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            }
            if (var_1321 == 1) {
                pos(160, 155);
            }
            if (var_1321 == 2) {
                pos(160, 150);
            }
            if (var_1321 == 3) {
                pos(160, 145);
            }
            if (var_1321 == 4) {
                pos(160, 140);
            }
            if (var_1321 == 5) {
                pos(160, 135);
            }
            if (var_1321 >= 6) {
                pos(160, 130);
            }
            gcopy(3, 80, 120, 40, 40);
        }
        if (var_1322 >= 1) {
            pos((var_347 - var_66 + 4) * 40, (var_348 - var_67 + 4) * 40 - 10);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1322 == 1 || var_1322 == 2) {
                gcopy(3, 360, 240, 40, 40);
            }
            if (var_1322 == 3 || var_1322 == 4) {
                gcopy(3, 400, 240, 40, 40);
            }
            if (var_1322 == 5 || var_1322 == 6) {
                gcopy(3, 440, 240, 40, 40);
            }
        }
        if (var_1323 >= 1) {
            if (var_1323 >= 11) {
                pos(var_1324, var_1325);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(3, 720, 520, 40, 40);
            }
            if (var_1323 <= 10) {
                gsel(32);
                color(0, 0, 0);
                boxf(left = 0, top1 = 0, right = 160, bottom = 160);
                if (var_1323 == 1) {
                    pos(0, 0);
                    gzoom(160, 160, 3, 720, 520, 40, 40, 1);
                    var_1326 = 80;
                    var_1327 = var_1326;
                }
                if (var_1323 == 2) {
                    pos(0, 0);
                    gzoom(150, 150, 3, 720, 520, 40, 40, 1);
                    var_1326 = 75;
                    var_1327 = var_1326;
                }
                if (var_1323 == 3) {
                    pos(0, 0);
                    gzoom(140, 140, 3, 720, 520, 40, 40, 1);
                    var_1326 = 70;
                    var_1327 = var_1326;
                }
                if (var_1323 == 4) {
                    pos(0, 0);
                    gzoom(130, 130, 3, 720, 520, 40, 40, 1);
                    var_1326 = 65;
                    var_1327 = var_1326;
                }
                if (var_1323 == 5) {
                    pos(0, 0);
                    gzoom(120, 120, 3, 720, 520, 40, 40, 1);
                    var_1326 = 60;
                    var_1327 = var_1326;
                }
                if (var_1323 == 6) {
                    pos(0, 0);
                    gzoom(110, 110, 3, 720, 520, 40, 40, 1);
                    var_1326 = 55;
                    var_1327 = var_1326;
                }
                if (var_1323 == 7) {
                    pos(0, 0);
                    gzoom(100, 100, 3, 720, 520, 40, 40, 1);
                    var_1326 = 50;
                    var_1327 = var_1326;
                }
                if (var_1323 == 8) {
                    pos(0, 0);
                    gzoom(80, 80, 3, 720, 520, 40, 40, 1);
                    var_1326 = 40;
                    var_1327 = var_1326;
                }
                if (var_1323 == 9) {
                    pos(0, 0);
                    gzoom(60, 60, 3, 720, 520, 40, 40, 1);
                    var_1326 = 30;
                    var_1327 = var_1326;
                }
                if (var_1323 >= 10) {
                    pos(0, 0);
                    gzoom(40, 40, 3, 720, 520, 40, 40, 1);
                    var_1326 = 20;
                    var_1327 = var_1326;
                }
                gsel(0);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                if (var_1323 == 1) {
                    pos(var_1324 - var_1326 + 20, var_1325 - var_1327 + 20);
                }
                if (var_1323 == 2) {
                    pos(var_1324 - var_1326 + 20, var_1325 - var_1327 + 20);
                }
                if (var_1323 == 3) {
                    pos(var_1324 - var_1326 + 20, var_1325 - var_1327 + 20);
                }
                if (var_1323 == 4) {
                    pos(var_1324 - var_1326 + 20, var_1325 - var_1327 + 20);
                }
                if (var_1323 == 5) {
                    pos(var_1324 - var_1326 + 20, var_1325 - var_1327 + 20);
                }
                if (var_1323 == 6) {
                    pos(var_1324 - var_1326 + 20, var_1325 - var_1327 + 20);
                }
                if (var_1323 == 7) {
                    pos(var_1324 - var_1326 + 20, var_1325 - var_1327 + 20);
                }
                if (var_1323 == 8) {
                    pos(var_1324 - var_1326 + 20, var_1325 - var_1327 + 20);
                }
                if (var_1323 == 9) {
                    pos(var_1324 - var_1326 + 20, var_1325 - var_1327 + 20);
                }
                if (var_1323 >= 10) {
                    pos(var_1324 - var_1326 + 20, var_1325 - var_1327 + 20);
                }
                gcopy(32, 0, 0, 160, 160);
            }
        }
        if (var_594 >= 1) {
            var_1328 = var_594 % 2;
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_594 == 37) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            }
            if (var_594 == 38) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_594 == 39) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_594 == 40) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1328 == 0) {
                pos(30, 20);
            }
            if (var_1328 == 1) {
                pos(32, 20);
            }
            gcopy(8, 400, 1040, 80, 80);
            if (var_1328 == 0) {
                pos(50, 60);
            }
            if (var_1328 == 1) {
                pos(52, 60);
            }
            gcopy(8, 400, 1120, 80, 80);
            if (var_1328 == 0) {
                pos(200, 20);
            }
            if (var_1328 == 1) {
                pos(202, 20);
            }
            gcopy(8, 480, 1040, 80, 80);
            if (var_1328 == 0) {
                pos(30, 150);
            }
            if (var_1328 == 1) {
                pos(32, 150);
            }
            gcopy(8, 480, 1040, 80, 80);
            if (var_1328 == 0) {
                pos(230, 120);
            }
            if (var_1328 == 1) {
                pos(232, 120);
            }
            gcopy(8, 400, 1120, 80, 80);
            if (var_1328 == 0) {
                pos(250, 170);
            }
            if (var_1328 == 1) {
                pos(252, 170);
            }
            gcopy(8, 400, 1040, 80, 80);
        }
        if (var_1329 >= 1) {
            var_1330 = var_1329 % 2;
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1329 == 37) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            }
            if (var_1329 == 38) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1329 == 39) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1329 == 40) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1330 == 0) {
                pos(30, 20);
            }
            if (var_1330 == 1) {
                pos(32, 20);
            }
            gcopy(8, 560, 1040, 80, 80);
            if (var_1330 == 0) {
                pos(50, 60);
            }
            if (var_1330 == 1) {
                pos(52, 60);
            }
            gcopy(8, 560, 1120, 80, 80);
            if (var_1330 == 0) {
                pos(200, 20);
            }
            if (var_1330 == 1) {
                pos(202, 20);
            }
            gcopy(8, 640, 1040, 80, 80);
            if (var_1330 == 0) {
                pos(30, 150);
            }
            if (var_1330 == 1) {
                pos(32, 150);
            }
            gcopy(8, 640, 1040, 80, 80);
            if (var_1330 == 0) {
                pos(230, 120);
            }
            if (var_1330 == 1) {
                pos(232, 120);
            }
            gcopy(8, 560, 1120, 80, 80);
            if (var_1330 == 0) {
                pos(250, 170);
            }
            if (var_1330 == 1) {
                pos(252, 170);
            }
            gcopy(8, 560, 1040, 80, 80);
        }
        if (var_469 >= 1) {
            if (var_469 >= 1 && var_469 < 4) {
                pos(4 * var_35 + 10, 4 * var_36 - 20);
            }
            if (var_469 >= 4 && var_469 < 7) {
                pos(4 * var_35 + 20, 4 * var_36 - 10);
            }
            if (var_469 >= 7 && var_469 < 10) {
                pos(4 * var_35 + 20, 4 * var_36);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(3, 240, 360, 40, 40);
        }
        if (var_272 == 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_199 == 8) {
                pos(4 * var_35, 3 * var_36 - 10);
                gcopy(3, 280, 360, 40, 40);
            }
            if (var_199 == 4) {
                pos(3 * var_35, 4 * var_36 - 10);
                gcopy(3, 320, 360, 40, 40);
            }
            if (var_199 == 2) {
                pos(4 * var_35, 5 * var_36 - 10);
                gcopy(3, 360, 360, 40, 40);
            }
            if (var_199 == 6) {
                pos(5 * var_35, 4 * var_36 - 10);
                gcopy(3, 400, 360, 40, 40);
            }
            if (var_199 == 1) {
                pos(3 * var_35, 5 * var_36 - 10);
                gcopy(3, 440, 360, 40, 40);
            }
            if (var_199 == 7) {
                pos(3 * var_35, 3 * var_36 - 10);
                gcopy(3, 480, 360, 40, 40);
            }
            if (var_199 == 3) {
                pos(5 * var_35, 5 * var_36 - 10);
                gcopy(3, 520, 360, 40, 40);
            }
            if (var_199 == 9) {
                pos(5 * var_35, 3 * var_36 - 10);
                gcopy(3, 560, 360, 40, 40);
            }
            if (equip_disc[316] == 1 && var_268 != 0 && var_127 == 0) {
                enemy_list = var_83[var_268].Var0;
                yield func626();
                var_1331 = enemy_hp;
                if (var_83[var_268].Var39 >= 2) {
                    var_1331 = Math.floor(enemy_hp * (var_83[var_268].Var39 + 10) / 10);
                    if (var_1331 >= 999) {
                        var_1331 = 999;
                    }
                }
                var_1332 = Math.floor(var_83[var_268].Var3 * 100 / var_1331);
                color(0, 255, 0);
                font("MS ゴシック", 12);
                var_1333 = "" + var_1332 + " %";
                if (var_83[var_268].Var0 == 36 || var_83[var_268].Var0 == 105 || var_83[var_268].Var0 == 106 || var_83[var_268].Var0 == 107 || var_83[var_268].Var0 == 108) {
                    var_1333 = var_1333 + "  EXP : " + var_83[var_268].Var16;
                }
                mes(var_1333);
            }
            if (equip_disc[315] == 999 && var_268 != 0 && var_127 == 0) {
                enemy_list = var_83[var_268].Var0;
                if (enemy_list != 46 && enemy_list != 30 && enemy_list != 124 && enemy_list != 85 && enemy_list != 99 && enemy_list == 153) {
                    yield func626();
                    if (var_83[var_268].Var39 >= 2) {
                        enemy_power = Math.floor(enemy_power * (var_83[var_268].Var39 * 2 + 10) / 10);
                    }
                    if (var_83[var_268].Var25 >= 1 && var_83[var_268].Var25 <= 50) {
                        enemy_power = enemy_power + var_83[var_268].Var25;
                    }
                    if (var_83[var_268].Var25 >= 51 && var_83[var_268].Var25 <= 99) {
                        enemy_power = enemy_power - (var_83[var_268].Var25 - 50);
                        if (enemy_power <= 1) {
                            enemy_power = 1;
                        }
                    }
                    var_949 = Math.floor(enemy_power * (enemy_power + enemy_power - 8) / 16) + enemy_power;
                    for (let cnt4 = 0; cnt4 < var_581; ++cnt4) {
                        var_949 = Math.floor(var_949 * 15 / 16);
                    }
                    var_1334 = 111;
                    var_1335 = 143;
                    var_1336 = Math.floor(var_949 * var_1334 / 128);
                    // 波紋使い関係??
                    if (var_130 != 0) {
                        var_1337 = var_83[var_268].Var0;
                        if (var_1337 == 147 || var_1337 == 73 || var_1337 == 119 || var_1337 == 136 || var_1337 == 135 || var_1337 == 139 || var_1337 == 140 || var_1337 == 105) {
                            var_1336 = Math.floor(var_1336 * 3 / 2);
                        }
                    }

                    if (var_182 == 1) {
                        var_1336 = Math.floor(var_1336 / 2);
                    }
                    if (var_1336 <= 1) {
                        var_1336 = 1;
                    }
                    var_1338 = Math.floor(var_949 * var_1335 / 128);
                    if (var_130 != 0) {
                        var_1337 = var_83[var_268].Var0;
                        if (var_1337 == 147 || var_1337 == 73 || var_1337 == 119 || var_1337 == 136 || var_1337 == 135 || var_1337 == 139 || var_1337 == 140 || var_1337 == 105) {
                            var_1338 = Math.floor(var_1338 * 3 / 2);
                        }
                    }
                    if (var_182 == 1) {
                        var_1338 = Math.floor(var_1338 / 2);
                    }
                    if (var_1338 <= 1) {
                        var_1338 = 1;
                    }
                    if (var_83[var_268].Var0 == 14 || var_83[var_268].Var0 == 66 || var_83[var_268].Var0 == 47 || var_83[var_268].Var0 == 120 || var_83[var_268].Var0 == 160 || var_83[var_268].Var0 == 67) {
                        var_83[var_268].Var20 = 0;
                        var_1338 = Math.floor(var_1338 * 3 / 2);
                    }
                    color(0, 255, 0);
                    font("MS ゴシック", 12);
                    mes("" + var_1336 + " ～ " + var_1338);
                }
                if (enemy_list == 46 || enemy_list == 30 || enemy_list == 124 || enemy_list == 85 || enemy_list == 99 || enemy_list == 153) {
                    if (enemy_list == 46) {
                        var_1336 = 15;
                        var_1338 = 15;
                    }
                    if (enemy_list == 30) {
                        var_1336 = 15;
                        var_1338 = 90;
                    }
                    if (enemy_list == 124) {
                        var_1336 = 30;
                        var_1338 = 30;
                    }
                    if (enemy_list == 85) {
                        var_1336 = 10;
                        var_1338 = 16;
                    }
                    if (enemy_list == 99) {
                        var_1336 = 10;
                        var_1338 = 10;
                    }
                    if (enemy_list == 153) {
                        var_1336 = 20;
                        var_1338 = 20;
                    }
                    if (var_83[var_268].Var39 >= 2) {
                        var_1336 = (var_83[var_268].Var39 - 1) * 2 + var_1336;
                        var_1338 = (var_83[var_268].Var39 - 1) * 2 + var_1338;
                    }
                    if (equip_disc[205] == 1) {
                        var_1336 = Math.floor(var_1336 * 2 / 3);
                        var_1338 = Math.floor(var_1338 * 2 / 3);
                    }
                    // アイテム「鉄球」を使用して射撃攻撃ダメージがアップしている場合
                    if (var_168 == 1) {
                        var_1336 = Math.floor(var_1336 * 2 / 3);
                        var_1338 = Math.floor(var_1338 * 2 / 3);
                    }
                    color(0, 255, 0);
                    font("MS ゴシック", 12);
                    mes("" + var_1336 + " ～ " + var_1338);
                }
            }
        }
        if (var_1339 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1340, var_1341);
            if (var_862[851][0] == 1) {
                gcopy(9, 320, 280, 40, 40);
            }
            if (var_862[851][0] == 0) {
                gcopy(9, 360, 280, 40, 40);
            }
        }
        if (var_1342 >= 1) {
            pos((var_1343 - var_66 + 4) * 40 - 15, (var_1344 - var_67 + 4) * 40 - 20);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(15, 960, 680, 40, 40);
        }
        if (var_1345 >= 1) {
            if (var_1345 >= 1 && var_1345 < 15) {
                pos((var_83[var_412].Var1 - var_66 + 4) * 40, (var_83[var_412].Var2 - var_67 + 4) * 40 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(3, 1440, 0, 40, 45);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1345 >= 1 && var_1345 < 15) {
                pos((var_83[var_412].Var1 - var_66 + 4) * 40 + 40, (var_83[var_412].Var2 - var_67 + 4) * 40 - 10 - 40);
                gcopy(3, 600, 360, 40, 40);
            }
            if (var_1345 >= 1 && var_1345 < 15) {
                pos((var_83[var_412].Var1 - var_66 + 4) * 40, (var_83[var_412].Var2 - var_67 + 4) * 40 - 10);
            }
            if (var_1345 == 15) {
                pos((var_83[var_412].Var1 - var_66 + 4) * 40, (var_83[var_412].Var2 - var_67 + 4) * 40 - 10 - 40);
            }
            if (var_1345 == 16) {
                pos((var_83[var_412].Var1 - var_66 + 4) * 40, (var_83[var_412].Var2 - var_67 + 4) * 40 - 10 - 80);
            }
            if (var_1345 == 17) {
                pos((var_83[var_412].Var1 - var_66 + 4) * 40, (var_83[var_412].Var2 - var_67 + 4) * 40 - 10 - 120);
            }
            if (var_1345 == 18) {
                pos((var_83[var_412].Var1 - var_66 + 4) * 40, (var_83[var_412].Var2 - var_67 + 4) * 40 - 10 - 160);
            }
            if (var_1345 == 19) {
                pos((var_83[var_412].Var1 - var_66 + 4) * 40, (var_83[var_412].Var2 - var_67 + 4) * 40 - 10 - 200);
            }
            if (var_1345 == 20) {
                pos((var_83[var_412].Var1 - var_66 + 4) * 40, (var_83[var_412].Var2 - var_67 + 4) * 40 - 10 - 240);
            }
            gcopy(6, 40, 1040, 40, 40);
            if (var_1345 >= 1 && var_1345 < 15) {
                pos((var_83[var_412].Var1 - var_66 + 4) * 40 - 10, (var_83[var_412].Var2 - var_67 + 4) * 40 - 10 - 10);
                belongings_item_list = var_417;
                var_1248 = var_1249;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
        }
        if (var_1346 >= 1) {
            if (var_1346 >= 1 && var_1346 < 15) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                pos((var_1347 - var_66 + 4) * 40, (var_1348 - var_67 + 4) * 40 - 10);
                gcopy(3, 1440, 0, 40, 45);
            }
            if (var_1346 >= 1 && var_1346 < 15) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                pos((var_1347 - var_66 + 4) * 40 + 40, (var_1348 - var_67 + 4) * 40 - 10 - 40);
                gcopy(3, 600, 360, 40, 40);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1349 == 1) {
                if (var_1346 >= 1 && var_1346 < 15) {
                    pos((var_1347 - var_66 + 4) * 40, (var_1348 - var_67 + 4) * 40 - 10);
                }
                if (var_1346 == 15) {
                    pos((var_1347 - var_66 + 4) * 40, (var_1348 - var_67 + 4) * 40 - 10 - 40);
                }
                if (var_1346 == 16) {
                    pos((var_1347 - var_66 + 4) * 40, (var_1348 - var_67 + 4) * 40 - 10 - 80);
                }
                if (var_1346 == 17) {
                    pos((var_1347 - var_66 + 4) * 40, (var_1348 - var_67 + 4) * 40 - 10 - 120);
                }
                if (var_1346 == 18) {
                    pos((var_1347 - var_66 + 4) * 40, (var_1348 - var_67 + 4) * 40 - 10 - 160);
                }
                if (var_1346 == 19) {
                    pos((var_1347 - var_66 + 4) * 40, (var_1348 - var_67 + 4) * 40 - 10 - 200);
                }
                if (var_1346 == 20) {
                    pos((var_1347 - var_66 + 4) * 40, (var_1348 - var_67 + 4) * 40 - 10 - 240);
                }
            }
            if (var_1349 == 0) {
                pos((var_1347 - var_66 + 4) * 40, (var_1348 - var_67 + 4) * 40 - 10);
            }
            gcopy(6, 40, 1040, 40, 40);
            if (var_1346 >= 1 && var_1346 < 15) {
                pos((var_1347 - var_66 + 4) * 40 - 10, (var_1348 - var_67 + 4) * 40 - 10 - 10);
                belongings_item_list = var_417;
                var_1248 = var_1249;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
        }
        if (var_1350 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1350 >= 1 && var_1350 < 5) {
                pos((var_83[var_1351].Var1 - var_66 + 4) * 40, (var_83[var_1351].Var2 - var_67 + 4) * 40 - 10);
            }
            if (var_1350 == 5) {
                pos((var_83[var_1351].Var1 - var_66 + 4) * 40, (var_83[var_1351].Var2 - var_67 + 4) * 40 - 10 - 40);
            }
            if (var_1350 == 6) {
                pos((var_83[var_1351].Var1 - var_66 + 4) * 40, (var_83[var_1351].Var2 - var_67 + 4) * 40 - 10 - 80);
            }
            if (var_1350 == 7) {
                pos((var_83[var_1351].Var1 - var_66 + 4) * 40, (var_83[var_1351].Var2 - var_67 + 4) * 40 - 10 - 120);
            }
            if (var_1350 == 8) {
                pos((var_83[var_1351].Var1 - var_66 + 4) * 40, (var_83[var_1351].Var2 - var_67 + 4) * 40 - 10 - 160);
            }
            if (var_1350 == 9) {
                pos((var_83[var_1351].Var1 - var_66 + 4) * 40, (var_83[var_1351].Var2 - var_67 + 4) * 40 - 10 - 200);
            }
            if (var_1350 == 10) {
                pos((var_83[var_1351].Var1 - var_66 + 4) * 40, (var_83[var_1351].Var2 - var_67 + 4) * 40 - 10 - 240);
            }
            if (var_83[var_1351].Var0 < 50) {
                var_965 = 6; // buffer(6)は"img_enemy1a.gif"
                var_1352 = var_83[var_1351].Var0;
            }
            if (var_83[var_1351].Var0 >= 50 && var_83[var_1351].Var0 < 100) {
                var_965 = 21; // buffer(21)は"img_enemy2a.gif"
                var_1352 = var_83[var_1351].Var0 - 50;
            }
            if (var_83[var_1351].Var0 >= 100 && var_83[var_1351].Var0 < 150) {
                var_965 = 27; // buffer(27)は"img_enemy3a.gif"
                var_1352 = var_83[var_1351].Var0 - 100;
            }
            if (var_83[var_1351].Var0 >= 150 && var_83[var_1351].Var0 < 200) {
                var_965 = 13; // buffer(13)は"img_enemy4a.gif"
                var_1352 = var_83[var_1351].Var0 - 150; // ロッコ・バロッコ所長はenemy_list = 173。173 - 150 = 23。23 * 40 = 920となり、Y軸920で合致する。
            }
            gcopy(var_965, 40, var_1352 * 40, 40, 40);
        }
        if (var_1353 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1353 == 1) {
                pos(170, 155);
            }
            if (var_1353 == 2) {
                pos(172, 156);
            }
            belongings_item_list = var_1354;
            var_1248 = var_1249;
            yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            pos(160, 150);
            if (var_1353 == 1) {
                gcopy(3, 1160, 120, 40, 40);
            }
            if (var_1353 == 2) {
                gcopy(3, 1200, 120, 40, 40);
            }
            if (var_1353 == 1) {
                pos(120, 120);
            }
            if (var_1353 == 2) {
                pos(122, 122);
            }
            gcopy(3, 1160, 240, 40, 40);
            if (var_1353 == 1) {
                pos(147, 102);
            }
            if (var_1353 == 2) {
                pos(145, 100);
            }
            gcopy(3, 1200, 240, 40, 40);
            if (var_1353 == 1) {
                pos(180, 110);
            }
            if (var_1353 == 2) {
                pos(182, 112);
            }
            gcopy(3, 1160, 240, 40, 40);
            if (var_1353 == 1) {
                pos(212, 142);
            }
            if (var_1353 == 2) {
                pos(210, 140);
            }
            gcopy(3, 1200, 240, 40, 40);
        }
        if (var_756 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_756 <= 10) {
                pos(240, 200);
                // buffer(18)は"img4.gif"
                // 絵: 床のタイル
                gcopy(18, 1440, 1160, 40, 40);
            }
            if (var_756 >= 11 && var_756 < 16) {
                pos(220, 170);
                // buffer(18)は"img4.gif" 
                // 絵: ディアボロが帰還して床を壊した際の破片1
                gcopy(18, 0, 800, 80, 80);
            }
            if (var_756 == 16) {
                pos(220, 170);
                gcopy(18, 0, 880, 80, 80);
            }
            if (var_756 == 17) {
                pos(220, 170);
                // buffer(18)は"img4.gif" 
                // 絵: ディアボロが帰還して床を壊した際の破片2
                gcopy(18, 0, 960, 80, 80);
            }
            if (var_756 == 18) {
                pos(220, 170);
                // buffer(18)は"img4.gif" 
                // 絵: ディアボロが帰還して床を壊した際の破片3
                gcopy(18, 0, 1040, 80, 80);
            }
            if (var_756 == 19) {
                pos(220, 170);
                // buffer(18)は"img4.gif" 
                // 絵: ディアボロが帰還して床を壊した際の破片4
                gcopy(18, 0, 1120, 80, 80);
            }
        }
        if (var_757 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_757 == 1) {
                pos(240, 0);
            }
            if (var_757 == 2) {
                pos(240, 20);
            }
            if (var_757 == 3) {
                pos(240, 40);
            }
            if (var_757 == 4) {
                pos(240, 60);
            }
            if (var_757 == 5) {
                pos(240, 80);
            }
            if (var_757 == 6) {
                pos(240, 100);
            }
            if (var_757 == 7) {
                pos(240, 120);
            }
            if (var_757 == 8) {
                pos(240, 140);
            }
            if (var_757 == 9) {
                pos(240, 160);
            }
            if (var_757 == 10) {
                pos(240, 187);
            }
            if (var_757 == 11) {
                pos(240, 190);
            }
            if (var_757 == 12) {
                pos(240, 187);
            }
            if (var_757 == 13) {
                pos(240, 190);
            }
            if (var_757 == 14) {
                pos(240, 187);
            }
            if (var_757 == 15) {
                pos(240, 190);
            }
            if (var_757 == 16) {
                pos(235, 180);
            }
            if (var_757 == 17) {
                pos(230, 170);
            }
            if (var_757 == 18) {
                pos(225, 165);
            }
            if (var_757 == 19) {
                pos(220, 163);
            }
            if (var_757 == 20) {
                pos(215, 165);
            }
            if (var_757 == 21) {
                pos(210, 170);
            }
            if (var_757 == 22) {
                pos(200, 177);
            }
            if (var_757 == 23) {
                pos(200, 180);
            }
            if (var_757 == 24) {
                pos(200, 177);
            }
            if (var_757 == 25) {
                pos(200, 180);
            }
            if (var_757 == 26) {
                pos(195, 160);
            }
            if (var_757 == 27) {
                pos(180, 150);
            }
            if (var_757 == 28) {
                pos(175, 145);
            }
            if (var_757 == 29) {
                pos(170, 143);
            }
            if (var_757 == 30) {
                pos(165, 145);
            }
            if (var_757 == 31) {
                pos(160, 150);
            }
            if (var_757 == 32) {
                pos(160, 157);
            }
            if (var_757 == 33) {
                pos(160, 160);
            }
            if (var_757 == 34) {
                pos(160, 157);
            }
            if (var_757 >= 35) {
                pos(160, 160);
            }
            if (var_757 <= 35) {
                gcopy(3, 360, 1080, 40, 40);
            }
            if (var_757 == 36) {
                gcopy(3, 400, 1080, 40, 40);
            }
            if (var_757 == 37) {
                gcopy(3, 280, 1080, 40, 40);
            }
        }
        if (var_1355 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1355 == 1) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 230);
            }
            if (var_1355 == 2) {
                color(0, 0, 0);
        
                gmode(4, null, null, 220);
            }
            if (var_1355 == 3) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 210);
            }
            if (var_1355 == 4) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 190);
            }
            if (var_1355 == 5) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 170);
            }
            if (var_1355 == 6) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1355 == 7) {
                color(0, 0, 0);
        
                gmode(4, null, null, 130);
            }
            if (var_1355 == 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 110);
            }
            if (var_1355 == 9) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 90);
            }
            if (var_1355 == 10) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 70);
            }
            if (var_1355 == 11) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1355 == 12) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
            }
            if (var_1355 == 13) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 10);
            }
            pos(160, 0);
            if (var_1355 >= 1 && var_1355 < 5) {
                gcopy(8, 120, 525, 40, 240);
            }
            if (var_1355 >= 5 && var_1355 < 7) {
                gcopy(8, 160, 525, 40, 240);
            }
            if (var_1355 >= 7 && var_1355 < 9) {
                gcopy(8, 200, 525, 40, 240);
            }
            if (var_1355 >= 9 && var_1355 < 11) {
                gcopy(8, 240, 525, 40, 240);
            }
            if (var_1355 >= 11 && var_1355 < 13) {
                gcopy(8, 280, 525, 40, 240);
            }
        }
        if (var_1356 >= 1) {
            if (var_1356 == 0 || var_1356 == 2 || var_1356 == 4 || var_1356 == 6 || var_1356 == 8 || var_1356 == 10) {
                pos(var_748 * var_35 + 5, var_749 * var_36 - 10);
            }
            if (var_1356 == 1 || var_1356 == 3 || var_1356 == 5 || var_1356 == 7 || var_1356 == 9) {
                pos(var_748 * var_35, var_749 * var_36 - 10);
            }
            if (var_1356 >= 0 && var_1356 < 8) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            }
            if (var_1356 == 8) {
                color(0, 0, 0);
        
                gmode(4, null, null, 180);
            }
            if (var_1356 == 9) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1356 == 10) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            gcopy(11, 960, 240, 40, 40);
        }
        if (var_1357 >= 1) {
            if (var_1357 == 0 || var_1357 == 2 || var_1357 == 4 || var_1357 == 6 || var_1357 == 8 || var_1357 == 10) {
                pos(var_748 + 5, var_749 - 40);
            }
            if (var_1357 == 1 || var_1357 == 3 || var_1357 == 5 || var_1357 == 7 || var_1357 == 9) {
                pos(var_748, var_749 - 40);
            }
            if (var_1357 >= 0 && var_1357 < 8) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            }
            if (var_1357 == 8) {
                color(0, 0, 0);
        
                gmode(4, null, null, 180);
            }
            if (var_1357 == 9) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1357 == 10) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            gcopy(11, 960, 240, 40, 40);
        }
        if (var_1358 >= 1) {
            if (var_1359 == 1) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                if (var_1358 == 2 || var_1358 == 19) {
                    color(0, 0, 0);

                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                }
                if (var_1358 == 1 || var_1358 == 20) {
                    color(0, 0, 0);
    
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                }
                pos((var_1360 - var_66 + 4) * 40, (var_1361 - var_67 + 4) * 40 - 10);
                if (var_83[var_314].Var5 == 2) {
                    gcopy(34, 0, 520, 40, 40);
                }
                if (var_83[var_314].Var5 == 4) {
                    gcopy(34, 40, 520, 40, 40);
                }
                if (var_83[var_314].Var5 == 8) {
                    gcopy(34, 80, 520, 40, 40);
                }
                if (var_83[var_314].Var5 == 6) {
                    gcopy(34, 120, 520, 40, 40);
                }
                if (var_83[var_314].Var5 == 1) {
                    gcopy(34, 160, 520, 40, 40);
                }
                if (var_83[var_314].Var5 == 7) {
                    gcopy(34, 200, 520, 40, 40);
                }
                if (var_83[var_314].Var5 == 3) {
                    gcopy(34, 240, 520, 40, 40);
                }
                if (var_83[var_314].Var5 == 9) {
                    gcopy(34, 280, 520, 40, 40);
                }
            }
            var_1362 = var_1358 % 2;
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            pos(4 * 40, 4 * 40 - 10);
            if (var_1362 == 0) {
                gcopy(3, 640, 520, 40, 40);
            }
            if (var_1362 == 1) {
                gcopy(3, 680, 520, 40, 40);
            }
        }
        if (var_1363 >= 1) {
            var_1362 = var_1363 % 2;
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            pos((var_1360 - var_66 + 4) * 40, (var_1361 - var_67 + 4) * 40 - 10);
            if (var_1362 == 0) {
                gcopy(3, 640, 520, 40, 40);
            }
            if (var_1362 == 1) {
                gcopy(3, 680, 520, 40, 40);
            }
        }
        if (var_1364 >= 1) {
            if (var_1365 == 4) {
                var_1366 = var_1366 - var_1367;
                var_1368 = var_1368;
            }
            if (var_1365 == 6) {
                var_1366 = var_1366 + var_1367;
                var_1368 = var_1368;
            }
            if (var_1365 == 2) {
                var_1366 = var_1366;
                var_1368 = var_1368 + var_1367;
            }
            if (var_1365 == 8) {
                var_1366 = var_1366;
                var_1368 = var_1368 - var_1367;
            }
            if (var_1365 == 1) {
                var_1366 = var_1366 - var_1367;
                var_1368 = var_1368 + var_1367;
            }
            if (var_1365 == 3) {
                var_1366 = var_1366 + var_1367;
                var_1368 = var_1368 + var_1367;
            }
            if (var_1365 == 7) {
                var_1366 = var_1366 - var_1367;
                var_1368 = var_1368 - var_1367;
            }
            if (var_1365 == 9) {
                var_1366 = var_1366 + var_1367;
                var_1368 = var_1368 - var_1367;
            }
            pos(var_1369 * var_35 + var_1366, var_1370 * var_36 - 10 + var_1368);
            if (var_1371 == 1) {
                var_1372 = 13;
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1365 == 4) {
                gcopy(6, 1080, var_1372 * 40, 40, 40);
            }
            if (var_1365 == 6) {
                gcopy(6, 1000, var_1372 * 40, 40, 40);
            }
            if (var_1365 == 8) {
                gcopy(6, 960, var_1372 * 40, 40, 40);
            }
            if (var_1365 == 2) {
                gcopy(6, 1040, var_1372 * 40, 40, 40);
            }
            if (var_1365 == 1) {
                gcopy(6, 1240, var_1372 * 40, 40, 40);
            }
            if (var_1365 == 3) {
                gcopy(6, 1160, var_1372 * 40, 40, 40);
            }
            if (var_1365 == 7) {
                gcopy(6, 1200, var_1372 * 40, 40, 40);
            }
            if (var_1365 == 9) {
                gcopy(6, 1120, var_1372 * 40, 40, 40);
            }
        }
        if (var_1373 >= 1) {
            if (var_1365 == 4) {
                var_1366 = var_1366 - var_1367;
                var_1368 = var_1368;
            }
            if (var_1365 == 6) {
                var_1366 = var_1366 + var_1367;
                var_1368 = var_1368;
            }
            if (var_1365 == 2) {
                var_1366 = var_1366;
                var_1368 = var_1368 + var_1367;
            }
            if (var_1365 == 8) {
                var_1366 = var_1366;
                var_1368 = var_1368 - var_1367;
            }
            if (var_1365 == 1) {
                var_1366 = var_1366 - var_1367;
                var_1368 = var_1368 + var_1367;
            }
            if (var_1365 == 3) {
                var_1366 = var_1366 + var_1367;
                var_1368 = var_1368 + var_1367;
            }
            if (var_1365 == 7) {
                var_1366 = var_1366 - var_1367;
                var_1368 = var_1368 - var_1367;
            }
            if (var_1365 == 9) {
                var_1366 = var_1366 + var_1367;
                var_1368 = var_1368 - var_1367;
            }
            pos(var_1369 * var_35 + var_1366, var_1370 * var_36 - 10 + var_1368);
            if (var_1374 < 50) {
                var_1375 = 6; // buffer(6)は"img_enemy1a.gif"
                var_1376 = var_1374;
            }
            if (var_1374 >= 50 && var_1374 < 100) {
                var_1375 = 21; // buffer(21)は"img_enemy2a.gif"
                var_1376 = var_1374 - 50;
            }
            if (var_1374 >= 100 && var_1374 < 150) {
                var_1375 = 27; // buffer(27)は"img_enemy3a.gif"
                var_1376 = var_1374 - 100;
            }
            if (var_1374 >= 150 && var_1374 < 200) {
                var_1375 = 13; // buffer(13)は"img_enemy4a.gif"
                var_1376 = var_1374 - 150; // ロッコ・バロッコ所長はenemy_list = 173。173 - 150 = 23。23 * 40 = 920となり、Y軸920で合致する。
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1365 == 4) {
                gcopy(var_1375, 1080, var_1376 * 40, 40, 40);
            }
            if (var_1365 == 6) {
                gcopy(var_1375, 1000, var_1376 * 40, 40, 40);
            }
            if (var_1365 == 8) {
                gcopy(var_1375, 960, var_1376 * 40, 40, 40);
            }
            if (var_1365 == 2) {
                gcopy(var_1375, 1040, var_1376 * 40, 40, 40);
            }
            if (var_1365 == 1) {
                gcopy(var_1375, 1240, var_1376 * 40, 40, 40);
            }
            if (var_1365 == 3) {
                gcopy(var_1375, 1160, var_1376 * 40, 40, 40);
            }
            if (var_1365 == 7) {
                gcopy(var_1375, 1200, var_1376 * 40, 40, 40);
            }
            if (var_1365 == 9) {
                gcopy(var_1375, 1120, var_1376 * 40, 40, 40);
            }
        }
        if (var_1377 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1378, var_1379);
            if (var_1377 == 1 || var_1377 == 2) {
                gcopy(28, 960, 840, 40, 40);
            }
            if (var_1377 == 3 || var_1377 == 4) {
                gcopy(28, 1000, 840, 40, 40);
            }
            if (var_1377 == 5 || var_1377 == 6) {
                gcopy(28, 1040, 840, 40, 40);
            }
            if (var_1377 == 7 || var_1377 == 8) {
                gcopy(28, 1080, 840, 40, 40);
            }
            if (var_1377 == 9 || var_1377 == 10) {
                gcopy(28, 1120, 840, 40, 40);
            }
        }
        if (var_1242 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(165, 140);
            gcopy(9, 200, 120, 40, 40);
        }
        if (var_1380 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1380 == 1 || var_1380 == 3 || var_1380 == 5 || var_1380 == 7) {
                pos(160, 150);
            }
            if (var_1380 == 2 || var_1380 == 4 || var_1380 == 6 || var_1380 == 8) {
                pos(162, 150);
            }
            if (var_1380 <= 8) {
                gcopy(3, 720, 120, 40, 40);
            }
        }
        if (var_1381 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1381 == 1 || var_1381 == 3 || var_1381 == 5 || var_1381 == 7) {
                pos(160, 150);
            }
            if (var_1381 == 2 || var_1381 == 4 || var_1381 == 6 || var_1381 == 8) {
                pos(162, 150);
            }
            if (var_1381 <= 8) {
                gcopy(3, 120, 120, 40, 40);
            }
        }
        if (var_1382 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1382 == 1 || var_1382 == 3 || var_1382 == 5 || var_1382 == 7) {
                pos(160, 150);
            }
            if (var_1382 == 2 || var_1382 == 4 || var_1382 == 6 || var_1382 == 8) {
                pos(162, 150);
            }
            if (var_1382 <= 8) {
                gcopy(3, 40, 120, 40, 40);
            }
        }
        if (var_1383 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 150);
            if (var_1383 == 1) {
                gcopy(3, 440, 120, 40, 40);
            }
            if (var_1383 == 2) {
                gcopy(3, 480, 120, 40, 40);
            }
            if (var_1383 == 3 || var_1383 == 5) {
                gcopy(3, 520, 120, 40, 40);
            }
            if (var_1383 == 4 || var_1383 == 6) {
                gcopy(3, 560, 120, 40, 40);
            }
            if (var_1383 == 7) {
                gcopy(3, 600, 120, 40, 40);
            }
            if (var_1383 == 8) {
                gcopy(3, 640, 120, 40, 40);
            }
            if (var_1383 == 9) {
                gcopy(3, 680, 120, 40, 40);
            }
        }
        if (var_444 >= 1) {
            if (var_444 >= 1 && var_444 < 20) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                if (var_444 == 15) {
                    color(0, 0, 0);
            
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                }
                if (var_444 == 16) {
                    color(0, 0, 0);
            
                    gmode(4, null, null, 180);
                }
                if (var_444 == 17) {
                    color(0, 0, 0);
            
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                }
                if (var_444 == 18) {
                    color(0, 0, 0);

                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                }
                if (var_444 == 19) {
                    color(0, 0, 0);
    
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                }
                pos((var_440 - var_66 + 4) * 40, (var_441 - var_67 + 4) * 40 - 10);
                gcopy(15, 960, 1960, 40, 40);
            }
            if (var_444 >= 15 && var_444 < 26) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                if (var_444 == 15) {
                    color(0, 0, 0);
    
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                }
                if (var_444 == 16) {
                    color(0, 0, 0);

                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                }
                if (var_444 == 17) {
                    color(0, 0, 0);
            
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                }
                if (var_444 == 18) {
                    color(0, 0, 0);
            
                    gmode(4, null, null, 180);
                }
                if (var_444 == 19) {
                    color(0, 0, 0);
            
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                }
                pos((var_440 - var_66 + 4) * 40, (var_441 - var_67 + 4) * 40 - 10);
                gcopy(15, 1080, 1960, 40, 40);
            }
        }
        if (var_1384 == 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_83[var_1385].Var0 < 50) {
                var_1375 = 6; // buffer(6)は"img_enemy1a.gif"
                var_1376 = var_1386;
            }
            if (var_83[var_1385].Var0 >= 50 && var_83[var_1385].Var0 < 100) {
                var_1375 = 21; // buffer(21)は"img_enemy2a.gif"
                var_1376 = var_1386 - 50;
            }
            if (var_83[var_1385].Var0 >= 100 && var_83[var_1385].Var0 < 150) {
                var_1375 = 27; // buffer(27)は"img_enemy3a.gif"
                var_1376 = var_1386 - 100;
            }
            if (var_83[var_1385].Var0 >= 150 && var_83[var_1385].Var0 < 200) {
                var_1375 = 13; // buffer(13)は"img_enemy4a.gif"
                var_1376 = var_1386 - 150; // ロッコ・バロッコ所長はenemy_list = 173。173 - 150 = 23。23 * 40 = 920となり、Y軸920で合致する。
            }
            if (var_199 == 4) {
                pos((var_455 - var_66 + 4) * 40 + 20, (var_456 - var_67 + 4) * 40 - 10);
                gcopy(var_1375, 1080, var_1376 * 40, 40, 40);
            }
            if (var_199 == 6) {
                pos((var_455 - var_66 + 4) * 40 - 20, (var_456 - var_67 + 4) * 40 - 10);
                gcopy(var_1375, 1000, var_1376 * 40, 40, 40);
            }
            if (var_199 == 8) {
                pos((var_455 - var_66 + 4) * 40, (var_456 - var_67 + 4) * 40 - 10 + 20);
                gcopy(var_1375, 960, var_1376 * 40, 40, 40);
            }
            if (var_199 == 2) {
                pos((var_455 - var_66 + 4) * 40, (var_456 - var_67 + 4) * 40 - 10 - 20);
                gcopy(var_1375, 1040, var_1376 * 40, 40, 40);
            }
            if (var_199 == 1) {
                pos((var_455 - var_66 + 4) * 40 + 20, (var_456 - var_67 + 4) * 40 - 10 - 20);
                gcopy(var_1375, 1240, var_1376 * 40, 40, 40);
            }
            if (var_199 == 3) {
                pos((var_455 - var_66 + 4) * 40 - 20, (var_456 - var_67 + 4) * 40 - 10 - 20);
                gcopy(var_1375, 1160, var_1376 * 40, 40, 40);
            }
            if (var_199 == 7) {
                pos((var_455 - var_66 + 4) * 40 + 20, (var_456 - var_67 + 4) * 40 - 10 + 20);
                gcopy(var_1375, 1200, var_1376 * 40, 40, 40);
            }
            if (var_199 == 9) {
                pos((var_455 - var_66 + 4) * 40 - 20, (var_456 - var_67 + 4) * 40 - 10 + 20);
                gcopy(var_1375, 1120, var_1376 * 40, 40, 40);
            }
        }
        if (var_1387 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_83[var_314].Var1 - var_66 + 4) * 40, (var_83[var_314].Var2 - var_67 + 4) * 40 - 10);
            if (var_1387 == 1 || var_1387 == 4 || var_1387 == 7 || var_1387 == 10) {
                gcopy(15, 1240, 1760, 40, 40);
            }
            if (var_1387 == 2 || var_1387 == 5 || var_1387 == 8) {
                gcopy(15, 1160, 1760, 40, 40);
            }
            if (var_1387 == 3 || var_1387 == 6 || var_1387 == 9) {
                gcopy(15, 1200, 1760, 40, 40);
            }
        }
        if (var_1388 >= 1 && var_1388 <= 20) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1388 == 20) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            pos((var_1389 - var_66 + 4) * 40 - 43, (var_1390 - var_67 + 4) * 40 - 70);
            if (var_1388 == 1 || var_1388 == 2) {
                var_1391 = 0;
            }
            if (var_1388 == 3 || var_1388 == 4) {
                var_1391 = 128;
            }
            if (var_1388 == 5 || var_1388 == 6) {
                var_1391 = 256;
            }
            if (var_1388 == 7 || var_1388 == 8) {
                var_1391 = 384;
            }
            if (var_1388 == 9 || var_1388 == 10) {
                var_1391 = 512;
            }
            if (var_1388 == 11 || var_1388 == 12) {
                var_1391 = 640;
            }
            if (var_1388 == 13 || var_1388 == 14) {
                var_1391 = 768;
            }
            if (var_1388 == 15 || var_1388 == 16) {
                var_1391 = 896;
            }
            if (var_1388 == 17 || var_1388 == 18) {
                var_1391 = 1024;
            }
            if (var_1388 == 19 || var_1388 == 20) {
                var_1391 = 1152;
            }
            gcopy(35, var_1391, 384, 128, 128);
        }
        if (var_751 >= 1 && var_751 <= 20) {
            color(0, 0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 255);
            pos(20, 210);
            if (var_751 == 1 || var_751 == 2) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 250);
            }
            if (var_751 == 3 || var_751 == 4) {
                color(0, 0, 0);
        
                gmode(4, null, null, 220);
            }
            if (var_751 == 5 || var_751 == 6) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 190);
            }
            if (var_751 == 7 || var_751 == 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
            }
            if (var_751 == 9 || var_751 == 10) {
                color(0, 0, 0);
        
                gmode(4, null, null, 130);
            }
            if (var_751 == 11 || var_751 == 12) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_751 == 13 || var_751 == 14) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 70);
            }
            if (var_751 == 15 || var_751 == 16) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_751 == 17 || var_751 == 18) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
            }
            if (var_751 == 19 || var_751 == 20) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 10);
            }
            gcopy(3, 960, 0, 40, 40);
            pos(20, 210);
            if (var_751 == 1 || var_751 == 2) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
                gcopy(3, 840, 560, 40, 40);
            }
            if (var_751 == 3 || var_751 == 4) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
                gcopy(3, 880, 560, 40, 40);
            }
            if (var_751 == 5 || var_751 == 6) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
                gcopy(3, 920, 560, 40, 40);
            }
            if (var_751 == 7 || var_751 == 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
                gcopy(3, 960, 560, 40, 40);
            }
            if (var_751 == 9 || var_751 == 10) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
                gcopy(3, 1000, 560, 40, 40);
            }
            if (var_751 == 11 || var_751 == 12) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
                gcopy(3, 960, 560, 40, 40);
            }
            if (var_751 == 13 || var_751 == 14) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(3, 920, 560, 40, 40);
            }
            if (var_751 == 15 || var_751 == 16) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
                gcopy(3, 880, 560, 40, 40);
            }
            if (var_751 == 17 || var_751 == 18) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
                gcopy(3, 840, 560, 40, 40);
            }
        }
        if (var_1392 >= 1) {
            pos((var_83[var_1393].Var1 - var_66 + 4) * 40, (var_83[var_1393].Var2 - var_67 + 4) * 40);
            if (var_1392 == 3 || var_1392 == 28) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 20);
                gcopy(11, 80, 1240, 40, 40);
            }
            if (var_1392 == 4 || var_1392 == 27) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
                gcopy(11, 80, 1240, 40, 40);
            }
            if (var_1392 == 5 || var_1392 == 26) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
                gcopy(11, 80, 1240, 40, 40);
            }
            if (var_1392 == 6 || var_1392 == 25) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
                gcopy(11, 80, 1240, 40, 40);
            }
            if (var_1392 == 7 || var_1392 == 24) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
                gcopy(11, 80, 1240, 40, 40);
            }
            if (var_1392 == 8 || var_1392 == 23) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                gcopy(11, 80, 1240, 40, 40);
            }
            if (var_1392 == 9 || var_1392 == 22) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 230);
                gcopy(11, 80, 1240, 40, 40);
            }
            if (var_1392 >= 10 && var_1392 < 22) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(11, 80, 1240, 40, 40);
            }
            pos((var_83[var_1393].Var1 - var_66 + 4) * 40 - 120, (var_83[var_1393].Var2 - var_67 + 4) * 40 - 20);
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
            if (var_1392 == 11 || var_1392 == 12) {
                gcopy(3, 1160, 400, 280, 80);
            }
            if (var_1392 == 13 || var_1392 == 14) {
                gcopy(3, 1160, 480, 280, 80);
            }
            if (var_1392 == 15 || var_1392 == 16) {
                gcopy(3, 1160, 560, 280, 80);
            }
            if (var_1392 == 17 || var_1392 == 18) {
                gcopy(3, 1160, 640, 280, 80);
            }
            if (var_1392 == 19 || var_1392 == 20) {
                gcopy(3, 1160, 720, 280, 80);
            }
        }
        if (var_1394 >= 1) {
            pos(160, 160);
            if (var_1394 == 3 || var_1394 == 28) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 20);
                gcopy(bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (var_1394 == 4 || var_1394 == 27) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
                gcopy(bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (var_1394 == 5 || var_1394 == 26) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
                gcopy(bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (var_1394 == 6 || var_1394 == 25) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
                gcopy(bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (var_1394 == 7 || var_1394 == 24) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
                gcopy(bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (var_1394 == 8 || var_1394 == 23) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                gcopy(bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (var_1394 == 9 || var_1394 == 22) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 230);
                gcopy(bufferid_stand_disc, 80, 1240, 40, 40);
            }
            if (var_1394 >= 10 && var_1394 < 22) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 80, 1240, 40, 40);
            }
            pos(40, 150);
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
            if (var_1394 == 11 || var_1394 == 12) {
                gcopy(3, 1160, 400, 280, 80);
            }
            if (var_1394 == 13 || var_1394 == 14) {
                gcopy(3, 1160, 480, 280, 80);
            }
            if (var_1394 == 15 || var_1394 == 16) {
                gcopy(3, 1160, 560, 280, 80);
            }
            if (var_1394 == 17 || var_1394 == 18) {
                gcopy(3, 1160, 640, 280, 80);
            }
            if (var_1394 == 19 || var_1394 == 20) {
                gcopy(3, 1160, 720, 280, 80);
            }
        }
        if (var_1395 >= 1) {
            pos((var_1396 - var_66 + 4) * 40 - 10, (var_1397 - var_67 + 4) * 40 - 30);
            if (var_1395 == 1) {
                gcopy(3, 1040, 1080, 40, 40);
            }
            if (var_1395 == 2) {
                gcopy(3, 1080, 1080, 40, 40);
            }
            if (var_1395 == 3) {
                gcopy(3, 1120, 1080, 40, 40);
            }
            if (var_1395 == 4) {
                gcopy(3, 1160, 1080, 40, 40);
            }
        }
        if (var_1398 >= 1) {
            pos(var_1399 - 40, var_1400 - 50);
            if (var_1398 == 3) {
                gcopy(20, 1160, 720, 40, 40);
                var_1398 = 0;
            }
            if (var_1398 == 2) {
                gcopy(20, 1120, 720, 40, 40);
                var_1398++;
            }
            if (var_1398 == 1) {
                gcopy(20, 1080, 720, 40, 40);
                var_1398++;
            }
            pos(var_1399 + 30, var_1400 + 30);
            if (var_1398 == 3) {
                gcopy(20, 1160, 720, 40, 40);
                var_1398 = 0;
            }
            if (var_1398 == 2) {
                gcopy(20, 1120, 720, 40, 40);
                var_1398++;
            }
            if (var_1398 == 1) {
                gcopy(20, 1080, 720, 40, 40);
                var_1398++;
            }
        }
        if (var_1401 >= 1) {
            pos(var_1399 - 50, var_1400 + 40);
            if (var_1401 == 3) {
                gcopy(20, 1160, 720, 40, 40);
                var_1401 = 0;
            }
            if (var_1401 == 2) {
                gcopy(20, 1120, 720, 40, 40);
                var_1401++;
            }
            if (var_1401 == 1) {
                gcopy(20, 1080, 720, 40, 40);
                var_1401++;
            }
            pos(var_1399 + 60, var_1400 - 20);
            if (var_1401 == 3) {
                gcopy(20, 1160, 720, 40, 40);
                var_1401 = 0;
            }
            if (var_1401 == 2) {
                gcopy(20, 1120, 720, 40, 40);
                var_1401++;
            }
            if (var_1401 == 1) {
                gcopy(20, 1080, 720, 40, 40);
                var_1401++;
            }
        }
        if (var_1402 >= 1) {
            pos(var_1399 - 60, var_1400 - 40);
            if (var_1402 == 3) {
                gcopy(20, 1160, 720, 40, 40);
                var_1402 = 0;
            }
            if (var_1402 == 2) {
                gcopy(20, 1120, 720, 40, 40);
                var_1402++;
            }
            if (var_1402 == 1) {
                gcopy(20, 1080, 720, 40, 40);
                var_1402++;
            }
            pos(var_1399 + 30, var_1400 + 50);
            if (var_1402 == 3) {
                gcopy(20, 1160, 720, 40, 40);
                var_1402 = 0;
            }
            if (var_1402 == 2) {
                gcopy(20, 1120, 720, 40, 40);
                var_1402++;
            }
            if (var_1402 == 1) {
                gcopy(20, 1080, 720, 40, 40);
                var_1402++;
            }
        }
        if (var_1403 >= 1) {
            pos(var_1399 + 50, var_1400 - 30);
            if (var_1403 == 3) {
                gcopy(20, 1160, 720, 40, 40);
                var_1403 = 0;
            }
            if (var_1403 == 2) {
                gcopy(20, 1120, 720, 40, 40);
                var_1403++;
            }
            if (var_1403 == 1) {
                gcopy(20, 1080, 720, 40, 40);
                var_1403++;
            }
            pos(var_1399 - 40, var_1400 + 30);
            if (var_1403 == 3) {
                gcopy(20, 1160, 720, 40, 40);
                var_1403 = 0;
            }
            if (var_1403 == 2) {
                gcopy(20, 1120, 720, 40, 40);
                var_1403++;
            }
            if (var_1403 == 1) {
                gcopy(20, 1080, 720, 40, 40);
                var_1403++;
            }
        }
        if (var_1404 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(140, 140);
            if (var_1404 == 1 || var_1404 == 3) {
                var_1391 = 0;
            }
            if (var_1404 == 3 || var_1404 == 4) {
                var_1391 = 80;
            }
            if (var_1404 == 5 || var_1404 == 6) {
                var_1391 = 160;
            }
            if (var_1404 == 7 || var_1404 == 8) {
                var_1391 = 240;
            }
            if (var_1404 == 9 || var_1404 == 10) {
                var_1391 = 320;
            }
            if (var_1404 == 11 || var_1404 == 12) {
                var_1391 = 400;
            }
            if (var_1404 == 13 || var_1404 == 14) {
                var_1391 = 480;
            }
            if (var_1404 >= 1 && var_1404 < 15) {
                gcopy(3, var_1391, 160, 80, 80);
            }
            if (var_1404 == 15) {
                pos(0, 0);
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
            }
            if (var_1404 == 16) {
                pos(0, 0);
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
            }
            if (var_1404 == 17) {
                pos(0, 0);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 90);
            }
            if (var_1404 == 18) {
                pos(0, 0);
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
            }
            if (var_1404 == 19) {
                pos(0, 0);
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1404 == 20) {
                pos(0, 0);
                color(0, 0, 0);
        
                gmode(4, null, null, 180);
            }
            if (var_1404 == 21) {
                pos(0, 0);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 210);
            }
            if (var_1404 == 22) {
                pos(0, 0);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 240);
            }
            if (var_1404 >= 23) {
                pos(0, 0);
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 255);
            }
            if (var_1404 >= 15) {
                gcopy(19, 0, 0, 340, 340);
            }
        }
        if (var_1405 >= 1) {
            if (var_1405 == 1) {
                pos(160, 280);
            }
            if (var_1405 == 2) {
                pos(160, 240);
            }
            if (var_1405 == 3) {
                pos(160, 200);
            }
            if (var_1405 == 4) {
                pos(160, 160);
            }
            if (var_1405 == 5) {
                pos(160, 165);
            }
            if (var_1405 == 6) {
                pos(160, 160);
            }
            if (var_1405 == 7) {
                pos(160, 165);
            }
            if (var_1405 >= 8) {
                pos(160, 160);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1405 >= 1 && var_1405 < 20) {
                gcopy(14, 120, 360, 40, 40);
            }
        }
        if (var_1406 >= 1) {
            if (var_1407 == 0) {
                if (var_1406 == 1) {
                    pos(160, 280);
                }
                if (var_1406 == 2) {
                    pos(160, 240);
                }
                if (var_1406 == 3) {
                    pos(160, 200);
                }
                if (var_1406 == 4) {
                    pos(160, 160);
                }
                if (var_1406 == 5) {
                    pos(160, 165);
                }
                if (var_1406 == 6) {
                    pos(160, 160);
                }
                if (var_1406 == 7) {
                    pos(160, 165);
                }
                if (var_1406 >= 8) {
                    pos(160, 160);
                }
            }
            if (var_1407 == 1) {
                if (var_1406 == 1) {
                    pos(40, 150);
                }
                if (var_1406 == 2) {
                    pos(80, 150);
                }
                if (var_1406 == 3) {
                    pos(120, 150);
                }
                if (var_1406 == 4) {
                    pos(150, 150);
                }
                if (var_1406 == 5) {
                    pos(155, 150);
                }
                if (var_1406 == 6) {
                    pos(150, 150);
                }
                if (var_1406 == 7) {
                    pos(155, 150);
                }
                if (var_1406 >= 8) {
                    pos(150, 150);
                }
            }
            if (var_1407 == 2) {
                if (var_1406 == 1) {
                    pos(280, 150);
                }
                if (var_1406 == 2) {
                    pos(240, 150);
                }
                if (var_1406 == 3) {
                    pos(200, 150);
                }
                if (var_1406 == 4) {
                    pos(170, 150);
                }
                if (var_1406 == 5) {
                    pos(175, 150);
                }
                if (var_1406 == 6) {
                    pos(170, 150);
                }
                if (var_1406 == 7) {
                    pos(175, 150);
                }
                if (var_1406 >= 8) {
                    pos(170, 150);
                }
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1408 == 1 && var_1406 >= 1 && var_1406 < 20) {
                gcopy(14, 160, 360, 40, 40);
            }
            if (var_1408 == 2 && var_1406 >= 1 && var_1406 < 20) {
                gcopy(14, 200, 360, 40, 40);
            }
            if (var_1408 == 3 && var_1406 >= 1 && var_1406 < 20) {
                gcopy(14, 200, 320, 40, 40);
            }
            if (var_1408 == 4 && var_1406 >= 1 && var_1406 < 20) {
                gcopy(14, 200, 280, 40, 40);
            }
            if (var_1408 == 5 && var_1406 >= 1 && var_1406 < 20) {
                gcopy(14, 320, 160, 40, 40);
            }
        }
        if (var_1409 >= 1) {
            if (var_1409 == 1) {
                pos(140, 0);
            }
            if (var_1409 == 2) {
                pos(140, 40);
            }
            if (var_1409 == 3) {
                pos(140, 80);
            }
            if (var_1409 == 4) {
                pos(140, 120);
            }
            if (var_1409 == 5) {
                pos(140, 125);
            }
            if (var_1409 == 6) {
                pos(140, 120);
            }
            if (var_1409 == 7) {
                pos(140, 125);
            }
            if (var_1409 >= 8) {
                pos(140, 120);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1409 >= 1 && var_1409 < 20) {
                gcopy(14, 320, 80, 80, 80);
            }
        }
        if (var_1410 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1410 == 1) {
                pos(10, 130);
            }
            if (var_1410 == 2) {
                pos(50, 130);
            }
            if (var_1410 == 3) {
                pos(90, 130);
            }
            if (var_1410 == 4) {
                pos(120, 130);
            }
            if (var_1410 == 5) {
                pos(125, 130);
            }
            if (var_1410 == 6) {
                pos(120, 130);
            }
            if (var_1410 == 7) {
                pos(125, 130);
            }
            if (var_1410 >= 8) {
                pos(120, 130);
            }
            if (var_1410 >= 1 && var_1410 < 30) {
                gcopy(14, 440, 0, 80, 80);
            }
            if (var_1410 == 1) {
                pos(280, 130);
            }
            if (var_1410 == 2) {
                pos(240, 130);
            }
            if (var_1410 == 3) {
                pos(200, 130);
            }
            if (var_1410 == 4) {
                pos(170, 130);
            }
            if (var_1410 == 5) {
                pos(175, 130);
            }
            if (var_1410 == 6) {
                pos(170, 130);
            }
            if (var_1410 == 7) {
                pos(175, 130);
            }
            if (var_1410 >= 8) {
                pos(170, 130);
            }
            if (var_1410 >= 1 && var_1410 < 30) {
                gcopy(14, 520, 0, 80, 80);
            }
        }
        if (var_1411 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 150);
            var_1412 = 0;
            if (var_1413 == 1) {
                var_1412 = 120;
            }
            if (var_1411 == 1) {
                gcopy(3, 40, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 2) {
                gcopy(3, 80, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 3) {
                gcopy(3, 120, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 4) {
                gcopy(3, 160, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 5) {
                gcopy(3, 200, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 6) {
                gcopy(3, 240, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 7) {
                gcopy(3, 280, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 8) {
                gcopy(3, 320, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 9) {
                gcopy(3, 360, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 10) {
                gcopy(3, 400, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 11) {
                gcopy(3, 440, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 12) {
                gcopy(3, 480, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 13) {
                gcopy(3, 520, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 14) {
                gcopy(3, 560, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 15) {
                gcopy(3, 600, 1120 - var_1412, 40, 40);
            }
            if (var_1411 == 16) {
                gcopy(3, 0, 1160 - var_1412, 40, 40);
            }
            if (var_1411 == 17) {
                gcopy(3, 40, 1160 - var_1412, 40, 40);
            }
            if (var_1411 >= 18 && var_1411 <= 28) {
                gcopy(3, 80, 1160 - var_1412, 40, 40);
            }
            if (var_1411 == 29) {
                gcopy(3, 120, 1160 - var_1412, 40, 40);
            }
            if (var_1411 == 30) {
                gcopy(3, 160, 1160 - var_1412, 40, 40);
            }
            if (var_1411 == 31) {
                gcopy(3, 200, 1160 - var_1412, 40, 40);
            }
            if (var_1411 >= 32 && var_1411 <= 35) {
                gcopy(3, 240, 1160 - var_1412, 40, 40);
            }
            if (var_1411 == 36) {
                gcopy(3, 200, 1160 - var_1412, 40, 40);
            }
            if (var_1411 == 37) {
                gcopy(3, 160, 1160 - var_1412, 40, 40);
            }
            if (var_1411 == 38) {
                gcopy(3, 120, 1160 - var_1412, 40, 40);
            }
            if (var_1411 >= 39 && var_1411 <= 45) {
                gcopy(3, 80, 1160 - var_1412, 40, 40);
            }
            if (var_1411 == 46) {
                gcopy(3, 280, 1160 - var_1412, 40, 40);
            }
            if (var_1411 == 47) {
                gcopy(3, 320, 1160 - var_1412, 40, 40);
            }
            if (var_1411 == 48) {
                gcopy(3, 360, 1160 - var_1412, 40, 40);
            }
            if (var_1411 == 49) {
                gcopy(3, 400, 1160 - var_1412, 40, 40);
            }
        }
        if (var_1414 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(180, 150);
            if (var_1414 >= 0 && var_1414 < 1) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(11, 0, 320, 40, 40);
            }
            if (var_1414 >= 1 && var_1414 < 2) {
                gcopy(11, 0, 320, 40, 40);
            }
            if (var_1414 >= 2 && var_1414 < 3) {
                gcopy(11, 40, 320, 40, 40);
            }
            if (var_1414 >= 3 && var_1414 < 4) {
                gcopy(11, 80, 320, 40, 40);
            }
            if (var_1414 >= 4 && var_1414 < 5) {
                gcopy(11, 80, 320, 40, 40);
            }
            if (var_1414 >= 5 && var_1414 < 6) {
                gcopy(11, 80, 320, 40, 40);
            }
            if (var_1414 >= 6 && var_1414 < 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(11, 80, 320, 40, 40);
            }
            if (var_1414 >= 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(11, 80, 320, 40, 40);
            }
        }
        if (var_1415 >= 1) {
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            pos((var_83[var_1393].Var1 - var_66 + 3) * 40, (var_83[var_1393].Var2 - var_67 + 3) * 40 - 10);
            gcopy(3, 760, 400, 120, 120);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            var_1416 = rnd(8);
            var_1416 = var_1416 * 40 + 40;
            var_1417 = rnd(2);
            var_1418 = rnd(2);
            var_1419 = rnd(40);
            var_1420 = rnd(40);
            pos((var_83[var_1393].Var1 - var_66 + 3 + var_1417) * 40 + var_1419, (var_83[var_1393].Var2 - var_67 + 3 + var_1418) * 40 - 10 + var_1420);
            if (var_1270 != 0) {
                belongings_item_list = var_1421;
                var_1248 = var_1249;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1270 == 0) {
                if (var_340 == 400) {
                    gcopy(34, 320 + var_1416, 400, 40, 40);
                }
                if (var_340 == 401) {
                    gcopy(34, 320 + var_1416, 720, 40, 40);
                }
                if (var_340 == 402) {
                    gcopy(34, 320 + var_1416, 0, 40, 40);
                }
                if (var_340 == 403) {
                    gcopy(34, 320 + var_1416, 560, 40, 40);
                }
                if (var_340 == 404) {
                    gcopy(34, 320 + var_1416, 520, 40, 40);
                }
                if (var_340 == 405) {
                    gcopy(34, 320 + var_1416, 800, 40, 40);
                }
                if (var_340 == 406) {
                    gcopy(34, 320 + var_1416, 640, 40, 40);
                }
                if (var_340 == 407) {
                    gcopy(34, 320 + var_1416, 400, 40, 40);
                }
                if (var_340 == 408) {
                    gcopy(34, 320 + var_1416, 840, 40, 40);
                }
                if (var_340 == 409) {
                    gcopy(3, 680, 280, 40, 40);
                }
                if (var_340 == 410) {
                    gcopy(34, 320 + var_1416, 1080, 40, 40);
                }
                if (var_340 == 411) {
                    gcopy(34, 320 + var_1416, 1120, 40, 40);
                }
                if (var_340 == 412) {
                    gcopy(3, 720, 520, 40, 40);
                }
                if (var_340 == 413) {
                    gcopy(15, 960, 1960, 40, 40);
                }
                if (var_340 == 414) {
                    gcopy(34, 320 + var_1416, 1240, 40, 40);
                }
                if (var_340 == 415) { // Ver0.1401にて追加。タスクact1
                    gcopy(34, 320 + var_1416, 1240, 40, 40);
                }
                if (var_340 == 416) { // Ver0.1401にて追加。タスクact3
                    gcopy(34, 320 + var_1416, 1240, 40, 40);
                }
                if (var_340 == 417) { // Ver0.1401にて追加。No = 417 ラット
                    gcopy(34, 320 + var_1416, 1200, 40, 40);
                }
                if (var_340 == 489) {
                    color(0, 0, 0);
            
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                    gcopy(32, 320 + var_1416, 680, 40, 40);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                }
                if (var_340 == 488) {
                    color(0, 0, 0);
            
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                    gcopy(32, 320 + var_1416, 680, 40, 40);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                }
                if (var_340 == 487) {
                    color(0, 0, 0);
            
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                    gcopy(32, 320 + var_1416, 680, 40, 40);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                }
                if (var_340 == 490) {
                    gcopy(34, 320 + var_1416, 0, 40, 40);
                }
                if (var_340 == 699) {
                    gcopy(34, 320 + var_1416, 880, 40, 40);
                }
                if (var_340 == 698) {
                    gcopy(34, 320 + var_1416, 440, 40, 40);
                }
            }
            if (var_1415 >= 10) {
                pos((var_83[var_1393].Var1 - var_66 + 3 + var_1417) * 40 + var_1419, (var_83[var_1393].Var2 - var_67 + 3 + var_1418) * 40 - 10 + var_1420);
                color(0, 0, 0);
                var_1422 = (var_1415 - 10) * 20;
                if (var_1422 >= 255) {
                    var_1422 = 255;
                }
                gmode(4, null, null, var_1422);
                gcopy(3, 720, 400, 40, 40);
            }
            return;
        }
        if (var_1423 >= 1) {
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            if (var_1423 == 17) {

                gmode(mode = 4, data2 = null, data3 = null, alpha = 110);
            }
            if (var_1423 == 18) {

                gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
            }
            if (var_1423 == 19) {

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1423 == 20) {

                gmode(mode = 4, data2 = null, data3 = null, alpha = 20);
            }
            pos((var_83[var_1393].Var1 - var_66 + 3) * 40, (var_83[var_1393].Var2 - var_67 + 3) * 40 - 10);
            gcopy(3, 760, 400, 120, 120);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_83[var_1393].Var1 - var_66 + 4) * 40, (var_83[var_1393].Var2 - var_67 + 4) * 40 - var_1423 * 20);
            var_1416 = 80;
            pos((var_83[var_1393].Var1 - var_66 + 4) * 40, (var_83[var_1393].Var2 - var_67 + 4) * 40 - var_1423 * 20);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(3, 720, 400, 40, 40);
            return;
        }
        if (var_1424 >= 1) {
            pos(160, var_1424);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(3, 720, 400, 40, 40);
            return;
        }
        if (var_1425 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1426 == 0) {
                pos(var_1427, var_1428);
                gcopy(34, 320, 560, 40, 40);
            }
            if (var_1426 == 1) {
                pos(var_1427, var_1428);
                gcopy(34, 560, 560, 40, 40);
            }
            if (var_1426 == 2) {
                pos(var_1427, var_1428);
                gcopy(34, 480, 560, 40, 40);
            }
        }
        if (var_1429 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1430 - var_66 + 4) * 40, (var_1431 - var_67 + 4 - var_1429) * 40);
            gcopy(34, 400, 560, 40, 40);
        }
        if (var_1432 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1426 == 0) {
                pos(var_1427, var_1428);
                gcopy(34, 320, 600, 40, 40);
            }
            if (var_1426 == 1) {
                pos(var_1427, var_1428);
                gcopy(34, 560, 600, 40, 40);
            }
            if (var_1426 == 2) {
                pos(var_1427, var_1428);
                gcopy(34, 480, 600, 40, 40);
            }
        }
        if (var_1433 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1430 - var_66 + 4) * 40, (var_1431 - var_67 + 4 - var_1433) * 40);
            gcopy(34, 400, 600, 40, 40);
        }
        if (var_1434 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1426 == 0) {
                pos(var_1427, var_1428);
                gcopy(34, 320, 0, 40, 40);
            }
            if (var_1426 == 1) {
                pos(var_1427, var_1428);
                gcopy(34, 560, 0, 40, 40);
            }
            if (var_1426 == 2) {
                pos(var_1427, var_1428);
                gcopy(34, 480, 0, 40, 40);
            }
        }
        if (var_1435 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1430 - var_66 + 4) * 40, (var_1431 - var_67 + 4 - var_1435) * 40);
            gcopy(34, 400, 0, 40, 40);
        }
        if (var_1436 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1437, var_1438);
            gcopy(34, 320, 160, 40, 40);
        }
        if (var_1439 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1430 - var_66 + 4) * 40, (var_1431 - var_67 + 4 - var_1439) * 40);
            gcopy(34, 400, 160, 40, 40);
        }
        if (var_1439 >= 1 || var_1436 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1430 - var_66 + 4) * 40, (var_1431 - var_67 + 4 - 10) * 40);
            gcopy(8, 320, 480, 40, 240);
        }
        if (var_1440 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1440 == 5 && var_1441 == 0) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1440 == 6 && var_1441 == 0) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1440 == 7 && var_1441 == 0) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 0);
            }
            if (var_1442 == 0) {
                pos(var_1427, var_1428);
                gcopy(3, 720, 560, 80, 80);
            }
            if (var_1442 == 1) {
                pos(var_1427, var_1428);
                gcopy(3, 640, 560, 80, 80);
            }
        }
        if (var_1443 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1443 < 14) {
                pos(150, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(170, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 14) {
                pos(150, 172);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(170, 172);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 15) {
                pos(150, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(170, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 16) {
                pos(150, 172);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(170, 172);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 > 16 && var_1443 < 25) {
                pos(150, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(170, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 25 || var_1443 == 26) {
                pos(152, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(168, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 27 || var_1443 == 28) {
                pos(154, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(166, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 29 || var_1443 == 30) {
                pos(156, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(164, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 31 || var_1443 == 32) {
                pos(158, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(162, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 33 || var_1443 == 34) {
                pos(160, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(160, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 35 || var_1443 == 36) {
                pos(160, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(160, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 37 || var_1443 == 38) {
                pos(160, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                pos(160, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 39 || var_1443 == 40) {
                pos(160, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                pos(160, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 41 || var_1443 == 42) {
                pos(160, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                pos(160, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 43 || var_1443 == 44) {
                pos(160, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                pos(160, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 45 || var_1443 == 46) {
                pos(160, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                pos(160, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 == 47 || var_1443 == 48) {
                pos(160, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
                pos(160, 170);
                belongings_item_list = with_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1443 > 48 || var_1443 == 60) {
                pos(160, 170);
                belongings_item_list = base_disc_list;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            pos(170, 150);
            if (var_1443 >= 10 && var_1443 < 11) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 0, 320, 40, 40);
            }
            if (var_1443 >= 11 && var_1443 < 12) {
                gcopy(bufferid_stand_disc, 0, 320, 40, 40);
            }
            if (var_1443 >= 12 && var_1443 < 13) {
                gcopy(bufferid_stand_disc, 40, 320, 40, 40);
            }
            if (var_1443 >= 13 && var_1443 < 14) {
                gcopy(bufferid_stand_disc, 80, 320, 40, 40);
            }
            if (var_1443 >= 14 && var_1443 < 15) {
                gcopy(bufferid_stand_disc, 80, 320, 40, 40);
            }
            if (var_1443 >= 15 && var_1443 < 25) {
                gcopy(bufferid_stand_disc, 80, 320, 40, 40);
            }
            if (var_1443 >= 26 && var_1443 < 28) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 80, 320, 40, 40);
            }
            if (var_1443 >= 28 && var_1443 < 30) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(bufferid_stand_disc, 80, 320, 40, 40);
            }
        }
        
        if (var_1446 == 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 157);
            gcopy(9, 160, 80, 40, 40);
        }
        if (var_1447 >= 1) {
            if (var_1448 == 0) {
                if (var_1449 == 6) {
                    pos(var_1450 - 30, var_1451);
                }
                if (var_1449 == 4) {
                    pos(var_1450 + 30, var_1451);
                }
                if (var_1449 == 8) {
                    pos(var_1450, var_1451 + 30);
                }
                if (var_1449 == 2) {
                    pos(var_1450, var_1451 - 30);
                }
                if (var_1449 == 9) {
                    pos(var_1450 - 30, var_1451 + 30);
                }
                if (var_1449 == 7) {
                    pos(var_1450 + 30, var_1451 + 30);
                }
                if (var_1449 == 3) {
                    pos(var_1450 - 30, var_1451 - 30);
                }
                if (var_1449 == 1) {
                    pos(var_1450 + 30, var_1451 - 30);
                }
            }
            if (var_1448 == 1) {
                if (var_1449 == 4) {
                    pos(var_1450 - 10, var_1451);
                }
                if (var_1449 == 6) {
                    pos(var_1450 + 10, var_1451);
                }
                if (var_1449 == 2) {
                    pos(var_1450, var_1451 + 10);
                }
                if (var_1449 == 8) {
                    pos(var_1450, var_1451 - 10);
                }
                if (var_1449 == 1) {
                    pos(var_1450 - 10, var_1451 + 10);
                }
                if (var_1449 == 3) {
                    pos(var_1450 + 10, var_1451 + 10);
                }
                if (var_1449 == 7) {
                    pos(var_1450 - 10, var_1451 - 10);
                }
                if (var_1449 == 9) {
                    pos(var_1450 + 10, var_1451 - 10);
                }
                bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
            }
            var_1272 = 920;
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1447 == 1 || var_1447 == 7) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1447 == 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1447 == 1 || var_1447 == 2) {
                if (var_1449 == 8) {
                    gcopy(bufferid_stand_disc, 0, var_1272, 40, 40);
                }
                if (var_1449 == 6) {
                    gcopy(bufferid_stand_disc, 120, var_1272, 40, 40);
                }
                if (var_1449 == 2) {
                    gcopy(bufferid_stand_disc, 240, var_1272, 40, 40);
                }
                if (var_1449 == 4) {
                    gcopy(bufferid_stand_disc, 360, var_1272, 40, 40);
                }
                if (var_1449 == 9) {
                    gcopy(bufferid_stand_disc, 480, var_1272, 40, 40);
                }
                if (var_1449 == 7) {
                    gcopy(bufferid_stand_disc, 720, var_1272, 40, 40);
                }
                if (var_1449 == 3) {
                    gcopy(bufferid_stand_disc, 600, var_1272, 40, 40);
                }
                if (var_1449 == 1) {
                    gcopy(bufferid_stand_disc, 840, var_1272, 40, 40);
                }
            }
            if (var_1447 == 3) {
                if (var_1449 == 8) {
                    gcopy(bufferid_stand_disc, 40, var_1272, 40, 40);
                }
                if (var_1449 == 6) {
                    gcopy(bufferid_stand_disc, 160, var_1272, 40, 40);
                }
                if (var_1449 == 2) {
                    gcopy(bufferid_stand_disc, 280, var_1272, 40, 40);
                }
                if (var_1449 == 4) {
                    gcopy(bufferid_stand_disc, 400, var_1272, 40, 40);
                }
                if (var_1449 == 9) {
                    gcopy(bufferid_stand_disc, 520, var_1272, 40, 40);
                }
                if (var_1449 == 7) {
                    gcopy(bufferid_stand_disc, 760, var_1272, 40, 40);
                }
                if (var_1449 == 3) {
                    gcopy(bufferid_stand_disc, 640, var_1272, 40, 40);
                }
                if (var_1449 == 1) {
                    gcopy(bufferid_stand_disc, 880, var_1272, 40, 40);
                }
            }
            if (var_1447 >= 4 && var_1447 < 10) {
                if (var_1449 == 8) {
                    gcopy(bufferid_stand_disc, 80, var_1272, 40, 40);
                }
                if (var_1449 == 6) {
                    gcopy(bufferid_stand_disc, 200, var_1272, 40, 40);
                }
                if (var_1449 == 2) {
                    gcopy(bufferid_stand_disc, 320, var_1272, 40, 40);
                }
                if (var_1449 == 4) {
                    gcopy(bufferid_stand_disc, 440, var_1272, 40, 40);
                }
                if (var_1449 == 9) {
                    gcopy(bufferid_stand_disc, 560, var_1272, 40, 40);
                }
                if (var_1449 == 7) {
                    gcopy(bufferid_stand_disc, 800, var_1272, 40, 40);
                }
                if (var_1449 == 3) {
                    gcopy(bufferid_stand_disc, 680, var_1272, 40, 40);
                }
                if (var_1449 == 1) {
                    gcopy(bufferid_stand_disc, 920, var_1272, 40, 40);
                }
            }
        }
        yield func354X();
    });
}
function func354X(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_1452 >= 1) {
            if (var_1449 == 6) {
                pos(var_1450 - 30, var_1451);
            }
            if (var_1449 == 4) {
                pos(var_1450 + 30, var_1451);
            }
            if (var_1449 == 8) {
                pos(var_1450, var_1451 + 30);
            }
            if (var_1449 == 2) {
                pos(var_1450, var_1451 - 30);
            }
            if (var_1449 == 9) {
                pos(var_1450 - 30, var_1451 + 30);
            }
            if (var_1449 == 7) {
                pos(var_1450 + 30, var_1451 + 30);
            }
            if (var_1449 == 3) {
                pos(var_1450 - 30, var_1451 - 30);
            }
            if (var_1449 == 1) {
                pos(var_1450 + 30, var_1451 - 30);
            }
            var_1272 = 600;
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1452 == 1 || var_1452 == 7 || var_1452 == 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1452 == 9) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1452 == 1 || var_1452 == 2) {
                if (var_1449 == 8) {
                    gcopy(bufferid_stand_disc, 0, var_1272, 40, 40);
                }
                if (var_1449 == 6) {
                    gcopy(bufferid_stand_disc, 120, var_1272, 40, 40);
                }
                if (var_1449 == 2) {
                    gcopy(bufferid_stand_disc, 240, var_1272, 40, 40);
                }
                if (var_1449 == 4) {
                    gcopy(bufferid_stand_disc, 360, var_1272, 40, 40);
                }
                if (var_1449 == 9) {
                    gcopy(bufferid_stand_disc, 480, var_1272, 40, 40);
                }
                if (var_1449 == 7) {
                    gcopy(bufferid_stand_disc, 720, var_1272, 40, 40);
                }
                if (var_1449 == 3) {
                    gcopy(bufferid_stand_disc, 600, var_1272, 40, 40);
                }
                if (var_1449 == 1) {
                    gcopy(bufferid_stand_disc, 840, var_1272, 40, 40);
                }
            }
            if (var_1452 == 3) {
                if (var_1449 == 8) {
                    gcopy(bufferid_stand_disc, 40, var_1272, 40, 40);
                }
                if (var_1449 == 6) {
                    gcopy(bufferid_stand_disc, 160, var_1272, 40, 40);
                }
                if (var_1449 == 2) {
                    gcopy(bufferid_stand_disc, 280, var_1272, 40, 40);
                }
                if (var_1449 == 4) {
                    gcopy(bufferid_stand_disc, 400, var_1272, 40, 40);
                }
                if (var_1449 == 9) {
                    gcopy(bufferid_stand_disc, 520, var_1272, 40, 40);
                }
                if (var_1449 == 7) {
                    gcopy(bufferid_stand_disc, 760, var_1272, 40, 40);
                }
                if (var_1449 == 3) {
                    gcopy(bufferid_stand_disc, 640, var_1272, 40, 40);
                }
                if (var_1449 == 1) {
                    gcopy(bufferid_stand_disc, 880, var_1272, 40, 40);
                }
            }
            if (var_1452 >= 4 && var_1452 < 10) {
                if (var_1449 == 8) {
                    gcopy(bufferid_stand_disc, 80, var_1272, 40, 40);
                }
                if (var_1449 == 6) {
                    gcopy(bufferid_stand_disc, 200, var_1272, 40, 40);
                }
                if (var_1449 == 2) {
                    gcopy(bufferid_stand_disc, 320, var_1272, 40, 40);
                }
                if (var_1449 == 4) {
                    gcopy(bufferid_stand_disc, 440, var_1272, 40, 40);
                }
                if (var_1449 == 9) {
                    gcopy(bufferid_stand_disc, 560, var_1272, 40, 40);
                }
                if (var_1449 == 7) {
                    gcopy(bufferid_stand_disc, 800, var_1272, 40, 40);
                }
                if (var_1449 == 3) {
                    gcopy(bufferid_stand_disc, 680, var_1272, 40, 40);
                }
                if (var_1449 == 1) {
                    gcopy(bufferid_stand_disc, 920, var_1272, 40, 40);
                }
            }
        }
        if (var_1453 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1453 == 1) {
                pos(var_1286, var_1287 - 170);
            }
            if (var_1453 == 2) {
                pos(var_1286, var_1287 - 140);
            }
            if (var_1453 == 3) {
                pos(var_1286, var_1287 - 110);
            }
            if (var_1453 == 4) {
                pos(var_1286, var_1287 - 80);
            }
            if (var_1453 == 5) {
                pos(var_1286, var_1287 - 60);
            }
            if (var_1453 == 6) {
                pos(var_1286, var_1287 - 40);
            }
            if (var_1453 == 7) {
                pos(var_1286, var_1287 - 20);
            }
            if (var_1453 == 8) {
                pos(var_1286, var_1287 - 10);
            }
            if (var_1453 == 9) {
                pos(var_1286, var_1287 - 5);
            }
            gcopy(6, 80, 600, 40, 40);
        }
        if (var_1454 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 112);
            gcopy(3, 880, 400, 40, 40);
            font("ＭＳ ゴシック", 7);
            color(0, 255, 0);
            pos(176, 117);
            if (var_1455 >= 10) {
                mes("0" + var_1455);
            }
            if (var_1455 <= 9) {
                mes("00" + var_1455);
            }
        }
        if (var_1456 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1456 == 1) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 20);
            }
            if (var_1456 == 2) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 40);
            }
            if (var_1456 == 3) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 60);
            }
            if (var_1456 == 4) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 80);
            }
            if (var_1456 == 5) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 100);
            }
            if (var_1456 == 6) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 120);
            }
            if (var_1456 == 7) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 140);
            }
            if (var_1456 == 8) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 160);
            }
            if (var_1456 == 9) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 180);
            }
            if (var_1456 == 10) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 200);
            }
            if (var_1456 == 11) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 220);
            }
            if (var_1456 == 12) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 240);
            }
            belongings_item_list = var_1459;
            var_1248 = var_1249;
            yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            gcopy(21, 0, 960, 40, 40);
        }
        if (var_1460 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1460 == 1) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 20);
            }
            if (var_1460 == 2) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 40);
            }
            if (var_1460 == 3) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 60);
            }
            if (var_1460 == 4) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 80);
            }
            if (var_1460 == 5) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 100);
            }
            if (var_1460 == 6) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 120);
            }
            if (var_1460 == 7) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 140);
            }
            if (var_1460 == 8) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 160);
            }
            if (var_1460 == 9) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 180);
            }
            if (var_1460 == 10) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 200);
            }
            if (var_1460 == 11) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 220);
            }
            if (var_1460 == 12) {
                pos((var_1457 - var_66 + 4) * 40, (var_1458 - var_67 + 4) * 40 - 10 - 240);
            }
            belongings_item_list = var_1459;
            var_1248 = var_1249;
            yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            gcopy(3, 920, 400, 40, 40);
        }
        if (var_1461 >= 1 && var_1461 <= 7) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1461 == 3) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            }
            if (var_1461 == 4) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1461 == 5) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1461 == 6) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1461 == 7) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 20);
            }
            pos(var_1462, var_1463);
            if (var_1464 == 0 || var_1464 == 3) {
                gcopy(3, 1040, 440, 40, 40);
            }
            if (var_1464 == 1 || var_1464 == 4) {
                gcopy(3, 1080, 440, 40, 40);
            }
        }
        if (var_1465 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1465 == 1) {
                var_1466 = Math.floor((var_1462 + var_1467) / 5) * 1;
                var_1468 = 160 - Math.floor((var_1463 + var_1469) / 5) * 1;
            }
            if (var_1465 == 2) {
                var_1466 = Math.floor((var_1462 + var_1467) / 5) * 2;
                var_1468 = 160 - Math.floor((var_1463 + var_1469) / 5) * 2;
            }
            if (var_1465 == 3) {
                var_1466 = Math.floor((var_1462 + var_1467) / 5) * 3;
                var_1468 = 160 - Math.floor((var_1463 + var_1469) / 5) * 3;
            }
            if (var_1465 == 4) {
                var_1466 = Math.floor((var_1462 + var_1467) / 5) * 4;
                var_1468 = 160 - Math.floor((var_1463 + var_1469) / 5) * 4;
            }
            if (var_1465 >= 5) {
                var_1466 = var_1467;
                var_1468 = var_1469;
            }
            if (var_1465 >= 5) {
                pos(var_1466, var_1468);
                if (var_1464 == 0) {
                    gcopy(3, 1120, 440, 40, 40);
                }
                if (var_1464 == 1) {
                    gcopy(3, 1120, 480, 40, 40);
                }
                if (var_1464 == 2) {
                    gcopy(3, 1120, 520, 40, 40);
                }
                if (var_1464 == 3) {
                    gcopy(3, 1120, 560, 40, 40);
                }
            }
            pos(var_1466, var_1468);
            if (var_1464 == 0) {
                gcopy(3, 1040, 480, 40, 40);
            }
            if (var_1464 == 1) {
                gcopy(3, 1080, 480, 40, 40);
            }
            if (var_1464 == 2) {
                gcopy(3, 1040, 520, 40, 40);
            }
            if (var_1464 == 3) {
                gcopy(3, 1080, 520, 40, 40);
            }
        }
        if (var_1470 >= 1) {
            if (var_1470 == 1) {
                pos(200, 150);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(3, 1560, 0, 40, 45);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                pos(200, 150);
                gcopy(3, 600, 240, 40, 40);
            }
            if (var_1470 == 2) {
                pos(190, 150);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(3, 1560, 0, 40, 45);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                pos(190, 150);
                gcopy(3, 640, 240, 40, 40);
            }
            if (var_1470 == 3) {
                pos(180, 150);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(3, 1560, 0, 40, 45);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                pos(180, 150);
                gcopy(3, 680, 240, 40, 40);
            }
            if (var_1470 == 4) {
                pos(190, 150);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(3, 1560, 0, 40, 45);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                pos(190, 150);
                gcopy(3, 680, 240, 40, 40);
            }
            if (var_1470 == 5) {
                pos(200, 150);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(3, 1560, 0, 40, 45);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                pos(200, 150);
                gcopy(3, 720, 240, 40, 40);
            }
            if (var_1470 == 6) {
                pos(200, 150);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(3, 1560, 0, 40, 45);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                pos(200, 150);
                gcopy(3, 760, 240, 40, 40);
            }
            if (var_1470 == 3) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                pos(160, 130);
                belongings_item_list = var_1471;
                var_1248 = var_1249;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1470 == 4) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                pos(160, 120);
                belongings_item_list = var_1471;
                var_1248 = var_1249;
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
        }
        if (var_1472 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 150);
            if (var_1472 <= 2) {
                gcopy(3, 880, 280, 40, 40);
            }
            if (var_1472 >= 3) {
                gcopy(3, 920, 280, 40, 40);
            }
        }
        if (var_1473 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 150);
            if (var_1473 <= 2) {
                gcopy(3, 960, 280, 40, 40);
            }
            if (var_1473 >= 3) {
                gcopy(3, 1000, 280, 40, 40);
            }
        }
        if (var_1474 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 150);
            if (var_1474 <= 2) {
                gcopy(3, 1040, 280, 40, 40);
            }
            if (var_1474 >= 3) {
                gcopy(3, 1080, 280, 40, 40);
            }
        }
        if (var_1475 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1476, var_1477 + 10);
            if (var_1475 <= 2) {
                gcopy(3, 880, 280, 40, 40);
            }
            if (var_1475 >= 3) {
                gcopy(3, 920, 280, 40, 40);
            }
        }
        if (var_1478 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1476 + 10, var_1477);
            if (var_1478 <= 2) {
                gcopy(3, 960, 280, 40, 40);
            }
            if (var_1478 >= 3) {
                gcopy(3, 1000, 280, 40, 40);
            }
        }
        if (var_1479 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1476, var_1477 + 10);
            if (var_1479 <= 2) {
                gcopy(3, 1040, 280, 40, 40);
            }
            if (var_1479 >= 3) {
                gcopy(3, 1080, 280, 40, 40);
            }
        }
        if (var_1480 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(95, 125);
            if (var_1480 == 1) {
                gcopy(3, 640, 1080, 200, 120);
            }
            if (var_1480 == 2) {
                gcopy(3, 840, 1080, 200, 120);
            }
            if (var_1480 == 3) {
                gcopy(3, 640, 960, 200, 120);
            }
            if (var_1480 == 4) {
                gcopy(3, 840, 960, 200, 120);
            }
            if (var_1480 == 5) {
                gcopy(3, 640, 840, 200, 120);
            }
            if (var_1480 == 6) {
                gcopy(3, 840, 840, 200, 120);
            }
            if (var_1480 == 7) {
                gcopy(3, 640, 720, 200, 120);
            }
            if (var_1480 == 8) {
                gcopy(3, 840, 720, 200, 120);
            }
            if (var_1480 == 9) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                gcopy(3, 640, 720, 200, 120);
            }
            if (var_1480 == 10) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                gcopy(3, 840, 720, 200, 120);
            }
            if (var_1480 == 11) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(3, 640, 720, 200, 120);
            }
            if (var_1480 == 12) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(3, 840, 720, 200, 120);
            }
        }
        if (var_1265 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_784 == 0 || var_784 == 2 || var_784 == 4) {
                pos(160, 155);
            }
            if (var_784 == 1 || var_784 == 3 || var_784 == 5) {
                pos(160, 157);
            }
            gcopy(3, 960, 400, 40, 40);
            if (var_1265 >= 1 && var_1265 < 30) {
                if (var_784 == 0 || var_784 == 2 || var_784 == 4) {
                    pos(50, 20);
                }
                if (var_784 == 1 || var_784 == 3 || var_784 == 5) {
                    pos(50, 23);
                }
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                if (var_1265 == 26) {
                    color(0, 0, 0);
            
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                }
                if (var_1265 == 27) {
                    color(0, 0, 0);
            
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                }
                if (var_1265 == 28) {
                    color(0, 0, 0);

                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                }
                if (var_1265 == 29) {
                    color(0, 0, 0);
    
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                }
                gcopy(17, 360, 550, 250, 145);
            }
        }
        if (var_1481 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 140);
            if (var_1481 == 1) {
                gcopy(3, 1160, 800, 50, 50);
            }
            if (var_1481 == 2) {
                gcopy(3, 1210, 800, 50, 50);
            }
            if (var_1481 == 3) {
                gcopy(3, 1260, 800, 50, 50);
            }
            if (var_1481 == 4) {
                gcopy(3, 1310, 800, 50, 50);
            }
            if (var_1481 == 5 || var_1481 == 7 || var_1481 == 9 || var_1481 == 11 || var_1481 == 13) {
                gcopy(3, 1360, 800, 50, 50);
            }
            if (var_1481 == 6 || var_1481 == 8 || var_1481 == 10 || var_1481 == 12 || var_1481 == 14 || var_1481 == 15) {
                gcopy(3, 1410, 800, 50, 50);
            }
            if (var_1481 == 16 || var_1481 == 17) {
                gcopy(3, 1460, 800, 50, 50);
            }
            if (var_1481 == 18) {
                gcopy(3, 1510, 800, 50, 50);
            }
            if (var_1481 == 19) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(3, 1510, 800, 50, 50);
            }
        }
        if (var_1482 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 20);
            if (var_1482 == 1) {
                gcopy(3, 1160, 800, 50, 50);
            }
            if (var_1482 == 2) {
                gcopy(3, 1210, 800, 50, 50);
            }
            if (var_1482 == 3) {
                gcopy(3, 1260, 800, 50, 50);
            }
            if (var_1482 == 4) {
                gcopy(3, 1310, 800, 50, 50);
            }
            if (var_1482 == 5 || var_1482 == 7 || var_1482 == 9 || var_1482 == 11 || var_1482 == 13) {
                gcopy(3, 1360, 800, 50, 50);
            }
            if (var_1482 == 6 || var_1482 == 8 || var_1482 == 10 || var_1482 == 12 || var_1482 == 14 || var_1482 == 15) {
                gcopy(3, 1410, 800, 50, 50);
            }
            if (var_1482 == 16 || var_1482 == 17) {
                gcopy(3, 1460, 800, 50, 50);
            }
            if (var_1482 == 18) {
                gcopy(3, 1510, 800, 50, 50);
            }
            if (var_1482 == 19) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(3, 1510, 800, 50, 50);
            }
        }
        if (var_1483 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            var_1484 = var_1483;
            var_1485 = 1;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                if (var_1485 == 1) {
                    var_1486 = 300 - var_1483 * 10;
                    if (var_1486 < 160) {
                        var_1486 = 160;
                    }
                    var_1487 = 50 + var_1483 * var_1484;
                    if (var_1487 >= 150) {
                        var_1487 = 150;
                    }
                    var_1488 = 120;
                }
                if (var_1485 == 2) {
                    var_1486 = 20 + var_1483 * 10;
                    if (var_1486 >= 160) {
                        var_1486 = 160;
                    }
                    var_1487 = 50 + var_1483 * var_1484;
                    if (var_1487 >= 150) {
                        var_1487 = 150;
                    }
                    var_1488 = 360;
                }
                if (var_1485 == 3) {
                    var_1486 = 320 - var_1483 * var_1484;
                    if (var_1486 < 160) {
                        var_1486 = 160;
                    }
                    var_1487 = 0 + var_1483 * var_1484 - 20;
                    if (var_1487 >= 150) {
                        var_1487 = 150;
                    }
                    var_1488 = 480;
                }
                if (var_1485 == 4) {
                    var_1486 = 0 + var_1483 * var_1484;
                    if (var_1486 >= 160) {
                        var_1486 = 160;
                    }
                    var_1487 = 0 + var_1483 * var_1484 - 20;
                    if (var_1487 >= 150) {
                        var_1487 = 150;
                    }
                    var_1488 = 720;
                }
                if (var_1485 == 5) {
                    var_1486 = 160;
                    var_1487 = 0 + var_1483 * var_1484 - 40;
                    if (var_1487 >= 150) {
                        var_1487 = 150;
                    }
                    var_1488 = 40;
                }
                pos(var_1486, var_1487);
                gcopy(6, var_1488, 1040, 40, 40);
                var_1485++;
            }
        }
        if (var_1489 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(190, 120);
            gcopy(3, 600, 360, 40, 40);
        }
        if (var_1490 >= 1) {
            pos(170, 0);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1490 == 1) {
                gcopy(17, 360, 360, 120, 180);
            }
            if (var_1490 == 2) {
                gcopy(17, 480, 360, 120, 180);
            }
            if (var_1490 == 3) {
                gcopy(17, 600, 360, 120, 180);
            }
        }
        if (var_1491 >= 1) {
            var_1492 = var_1491 % 2;
            if (var_1492 == 0) {
                pos(60, 50);
            }
            if (var_1492 == 1) {
                pos(60, 52);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1491 == 16) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            }
            if (var_1491 == 17) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1491 == 18) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1491 == 19) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
            }
            if (var_1491 == 20) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
            }
            gcopy(17, 0, 710, 255, 112);
        }
        if (var_1493 >= 1) {
            var_1494 = var_1493 % 2;
            if (var_1494 == 0) {
                pos(190, 50);
            }
            if (var_1494 == 1) {
                pos(190, 52);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1493 == 16) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            }
            if (var_1493 == 17) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1493 == 18) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1493 == 19) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
            }
            if (var_1493 == 20) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
            }
            gcopy(17, 150, 850, 130, 150);
        }
        if (var_531 >= 1) {
            var_1494 = var_531 % 2;
            if (var_1494 == 0) {
                pos(200, 30);
            }
            if (var_1494 == 1) {
                pos(200, 32);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_531 == 16) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            }
            if (var_531 == 17) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_531 == 18) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_531 == 19) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
            }
            if (var_531 == 20) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
            }
            gcopy(17, 150, 1000, 130, 150);
        }
        if (var_1495 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 150);
            if (var_1495 >= 1 && var_1495 < 3) {
                gcopy(14, 40, 0, 40, 40);
            }
            if (var_1495 >= 3 && var_1495 < 5) {
                gcopy(14, 80, 0, 40, 40);
            }
            if (var_1495 >= 5 && var_1495 < 10) {
                gcopy(14, 120, 0, 40, 40);
            }
            if (var_1495 >= 10 && var_1495 < 12) {
                gcopy(14, 80, 0, 40, 40);
            }
            if (var_1495 >= 12 && var_1495 < 14) {
                gcopy(14, 40, 0, 40, 40);
            }
        }
        if (var_1496 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 140);
            if (var_1496 == 1) {
                gcopy(34, 800, 1240, 40, 40);
            }
            if (var_1496 == 2) {
                gcopy(34, 840, 1240, 40, 40);
            }
            if (var_1496 == 3) {
                gcopy(34, 880, 1240, 40, 40);
            }
            if (var_1496 == 4) {
                gcopy(34, 920, 1240, 40, 40);
            }
            if (var_1496 == 5) {
                gcopy(34, 960, 1240, 40, 40);
            }
            if (var_1496 == 6) {
                gcopy(34, 1000, 1240, 40, 40);
            }
            if (var_1496 >= 7 && var_1496 <= 10) {
                gcopy(34, 1040, 1240, 40, 40);
            }
            if (var_1496 == 11) {
                gcopy(34, 1080, 1240, 40, 40);
            }
            if (var_1496 == 12) {
                gcopy(34, 1120, 1240, 40, 40);
            }
            if (var_1496 == 13) {
                gcopy(34, 1160, 1240, 40, 40);
            }
            if (var_1496 == 14) {
                gcopy(34, 1200, 1240, 40, 40);
            }
            if (var_1496 == 15) {
                gcopy(34, 1240, 1240, 40, 40);
            }
            if (var_1496 == 16) {
                gcopy(34, 1280, 1240, 40, 40);
            }
            if (var_1496 == 17) {
                gcopy(34, 1320, 1240, 40, 40);
            }
            if (var_1496 >= 18) {
                gcopy(34, 1360, 1240, 40, 40);
            }
        }
        if (var_1497 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 150);
            gcopy(3, 120, 120, 40, 40);
        }
        if (var_1498 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1498 == 1) {
                pos(160, 150);
            }
            if (var_1498 == 2) {
                pos(160, 152);
            }
            gcopy(3, 840, 120, 40, 40);
        }
        if (var_364 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 160);
            gcopy(3, 200, 360, 40, 40);
        }
        if (var_1499 >= 4 && var_1499 <= 9) {
            pos(160, 150);
            if (var_1499 == 4) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            }
            if (var_1499 == 5) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            }
            if (var_1499 == 6) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            }
            if (var_1499 == 7) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1499 == 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1499 == 9) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            gcopy(3, 1040, 120, 40, 40);
        }
        if (var_1500 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1437 - var_66 + 4) * 40 - 5, (var_1438 - var_67 + 4) * 40 - 50);
            if (var_1500 == 1) {
                gcopy(17, 760, 880, 40, 80);
            }
            if (var_1500 == 2) {
                gcopy(17, 800, 880, 40, 80);
            }
            if (var_1500 == 3) {
                gcopy(17, 840, 880, 40, 80);
            }
            if (var_1500 == 4) {
                gcopy(17, 880, 880, 40, 80);
            }
            if (var_1500 >= 5) {
                pos((var_1437 - var_66 + 4) * 40 + 2, (var_1438 - var_67 + 4) * 40 - 50);
                gcopy(17, 920, 880, 40, 80);
                if (var_1500 == 5) {
                    gcopy(34, 680, 160, 40, 40);
                }
            }
        }
        if (var_1501 >= 1) {
            if (var_1501 <= 62) {
                var_1502 = var_1501 % 13;
                color(230, 230, 230);
                if (var_1502 == 0 || var_1502 == 1 || var_1502 == 2 || var_1502 == 3) {
                    line((var_1437 - var_66 + 4) * 40 - 18 + 40, (var_1438 - var_67 + 4) * 40 - 10 - 40, (var_1437 - var_66 + 4) * 40 - 18 - 40 + 40, (var_1438 - var_67 + 4) * 40 - 10 + 280);
                }
                if (var_1502 == 4 || var_1502 == 13) {
                    line((var_1437 - var_66 + 4) * 40 - 18 + 40, (var_1438 - var_67 + 4) * 40 - 10 - 40, (var_1437 - var_66 + 4) * 40 - 18 - 20 + 40, (var_1438 - var_67 + 4) * 40 - 10 + 280);
                }
                if (var_1502 == 5 || var_1502 == 12) {
                    line((var_1437 - var_66 + 4) * 40 - 18 + 40, (var_1438 - var_67 + 4) * 40 - 10 - 40, (var_1437 - var_66 + 4) * 40 - 18 + 40, (var_1438 - var_67 + 4) * 40 - 10 + 280);
                }
                if (var_1502 == 6 || var_1502 == 11) {
                    line((var_1437 - var_66 + 4) * 40 - 18 + 40, (var_1438 - var_67 + 4) * 40 - 10 - 40, (var_1437 - var_66 + 4) * 40 - 18 + 20 + 40, (var_1438 - var_67 + 4) * 40 - 10 + 280);
                }
                if (var_1502 == 7 || var_1502 == 8 || var_1502 == 9 || var_1502 == 10) {
                    line((var_1437 - var_66 + 4) * 40 - 18 + 40, (var_1438 - var_67 + 4) * 40 - 10 - 40, (var_1437 - var_66 + 4) * 40 - 18 + 40 + 40, (var_1438 - var_67 + 4) * 40 - 10 + 280);
                }
            }
            if (var_1501 >= 100) {
                var_1503 = (var_1437 - var_66 + 4) * 40;
                var_1504 = (var_1438 - var_67 + 4) * 40;
                if (var_1501 == 100) {
                    var_1503 = var_1503;
                    var_1504 = var_1504 + 80;
                }
                if (var_1501 == 101) {
                    var_1503 = var_1503;
                    var_1504 = var_1504 + 40;
                }
                if (var_1501 == 102) {
                    var_1503 = var_1503;
                    var_1504 = var_1504;
                }
                color(230, 230, 230);
                line((var_1437 - var_66 + 4) * 40 - 18 + 40, (var_1438 - var_67 + 4) * 40 - 10 - 40, var_1503 + 20, var_1504);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                pos(var_1503, var_1504);
                gcopy(34, 680, 160, 40, 40);
            }
            if (var_1501 >= 63 && var_1501 < 100) {
                if (var_1505 <= 2) {
                    var_1506 = var_83[var_1385].Var0;
                    if (var_83[var_1385].Var0 == 97 && var_83[var_1385].Var31 >= 11) {
                        var_1506 = var_83[var_1385].Var31;
                        var_1386 = var_83[var_1385].Var31;
                    }
                    if (var_1506 < 50) {
                        var_1375 = 6; // buffer(6)は"img_enemy1a.gif"
                        var_1376 = var_1386;
                    }
                    if (var_1506 >= 50 && var_1506 < 100) {
                        var_1375 = 21; // buffer(21)は"img_enemy2a.gif"
                        var_1376 = var_1386 - 50;
                    }
                    if (var_1506 >= 100 && var_1506 < 150) {
                        var_1375 = 27; // buffer(27)は"img_enemy3a.gif"
                        var_1376 = var_1386 - 100;
                    }
                    if (var_1506 >= 150 && var_1506 < 200) {
                        var_1375 = 13; // buffer(13)は"img_enemy4a.gif"
                        var_1376 = var_1386 - 150; // ロッコ・バロッコ所長はenemy_list = 173。173 - 150 = 23。23 * 40 = 920となり、Y軸920で合致する。
                    }
                }
                var_1503 = (var_1437 - var_66 + 4) * 40;
                var_1504 = (var_1438 - var_67 + 4) * 40;
                var_1503 = var_1503;
                var_1504 = var_1504;
                if (var_1501 == 61) {
                    var_1503 = var_1503 + 160;
                    var_1504 = var_1504 + 240;
                }
                if (var_1501 == 62) {
                    var_1503 = var_1503 + 130;
                    var_1504 = var_1504 + 200;
                }
                if (var_1501 == 63) {
                    var_1503 = var_1503 + 100;
                    var_1504 = var_1504 + 160;
                }
                if (var_1501 == 64) {
                    var_1503 = var_1503 + 70;
                    var_1504 = var_1504 + 120;
                }
                if (var_1501 == 65) {
                    var_1503 = var_1503 + 40;
                    var_1504 = var_1504 + 100;
                }
                if (var_1501 == 66) {
                    var_1503 = var_1503 + 10;
                    var_1504 = var_1504 + 80;
                }
                if (var_1501 == 67) {
                    var_1503 = var_1503 - 10;
                    var_1504 = var_1504 + 60;
                }
                if (var_1501 == 68) {
                    var_1503 = var_1503 - 30;
                    var_1504 = var_1504 + 40;
                }
                if (var_1501 == 69) {
                    var_1503 = var_1503 - 50;
                    var_1504 = var_1504 + 20;
                }
                if (var_1501 == 70) {
                    var_1503 = var_1503 - 70;
                    var_1504 = var_1504;
                }
                if (var_1501 == 71) {
                    var_1503 = var_1503 - 90;
                    var_1504 = var_1504 - 20;
                }
                if (var_1501 == 72) {
                    var_1503 = var_1503 - 100;
                    var_1504 = var_1504 - 40;
                }
                if (var_1501 == 73) {
                    var_1503 = var_1503 - 80;
                    var_1504 = var_1504 - 60;
                }
                if (var_1501 == 74) {
                    var_1503 = var_1503 - 60;
                    var_1504 = var_1504 - 70;
                }
                if (var_1501 == 75) {
                    var_1503 = var_1503 - 40;
                    var_1504 = var_1504 - 75;
                }
                if (var_1501 == 76) {
                    var_1503 = var_1503 - 30;
                    var_1504 = var_1504 - 72;
                }
                if (var_1501 == 77) {
                    var_1503 = var_1503 - 25;
                    var_1504 = var_1504 - 70;
                }
                if (var_1501 == 78) {
                    var_1503 = var_1503 - 21;
                    var_1504 = var_1504 - 72;
                }
                if (var_1501 == 79) {
                    var_1503 = var_1503 - 15;
                    var_1504 = var_1504 - 75;
                }
                if (var_1501 == 80) {
                    var_1503 = var_1503 - 10;
                    var_1504 = var_1504 - 70;
                }
                if (var_1501 == 81) {
                    var_1503 = var_1503 - 6;
                    var_1504 = var_1504 - 60;
                }
                if (var_1501 == 82) {
                    var_1503 = var_1503 - 3;
                    var_1504 = var_1504 - 40;
                }
                color(230, 230, 230);
                line((var_1437 - var_66 + 4) * 40 - 18 + 40, (var_1438 - var_67 + 4) * 40 - 10 - 40, var_1503 + 20, var_1504 + 20);
                pos(var_1503, var_1504);
                if (var_1505 <= 2) {
                    if (var_83[var_1385].Var30 != 0) {
                        color(0, 0, 0);
                
                        gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                    }
                    gcopy(var_1375, 960, var_1376 * 40, 40, 40);
                    gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                }
                if (var_1505 == 3) {
                    belongings_item_list = var_1386;
                    var_1248 = var_1249;
                    yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
                }
            }
            if (var_1501 < 61) {
                var_1507 = var_1501 % 2;
                if (var_1507 == 0) {
                    pos((var_1508 - var_66 + 4) * 40, (var_1509 - var_67 + 4) * 40 - 10);
                }
                if (var_1507 == 1) {
                    pos((var_1508 - var_66 + 4) * 40, (var_1509 - var_67 + 4) * 40 - 10 - 2);
                }
                gcopy(34, 640, 160, 40, 40);
            }
        }
        if (var_1510 >= 1) {
            var_1503 = (14 - var_66 + 4) * 40;
            var_1504 = (8 - var_67 + 4) * 40;
            if (var_1510 == 1) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 240;
            }
            if (var_1510 == 2) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 200;
            }
            if (var_1510 == 3) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 160;
            }
            if (var_1510 == 4) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 120;
            }
            if (var_1510 == 5) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 100;
            }
            if (var_1510 == 6) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 80;
            }
            if (var_1510 == 7) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 60;
            }
            if (var_1510 == 8) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 40;
            }
            if (var_1510 == 9) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 20;
            }
            if (var_1510 == 10) {
                var_1503 = var_1503;
                var_1504 = var_1504;
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1503, var_1504);
            belongings_item_list = var_1386;
            var_1248 = var_1249;
            yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
        }
        if (var_1511 >= 1) {
            var_1503 = (var_1512 - var_66 + 4) * 40;
            var_1504 = (var_1513 - var_67 + 4) * 40;
            if (var_1511 == 1) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 240;
            }
            if (var_1511 == 2) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 200;
            }
            if (var_1511 == 3) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 160;
            }
            if (var_1511 == 4) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 120;
            }
            if (var_1511 == 5) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 100;
            }
            if (var_1511 == 6) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 80;
            }
            if (var_1511 == 7) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 60;
            }
            if (var_1511 == 8) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 40;
            }
            if (var_1511 == 9) {
                var_1503 = var_1503;
                var_1504 = var_1504 - 20;
            }
            if (var_1511 == 10) {
                var_1503 = var_1503;
                var_1504 = var_1504;
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1503, var_1504);
            belongings_item_list = var_1386;
            var_1248 = var_1249;
            yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
        }
        if (var_1514 >= 1) {
            if (var_1514 == 0 || var_1514 == 2 || var_1514 == 4 || var_1514 == 6 || var_1514 == 8) {
                pos(160 + 5, 130);
            }
            if (var_1514 == 1 || var_1514 == 3 || var_1514 == 5 || var_1514 == 7 || var_1514 == 9) {
                pos(160, 130);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(3, 840, 80, 40, 40);
        }
        if (var_1515 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 150);
            if (var_1515 == 0 || var_1515 == 2 || var_1515 == 4 || var_1515 == 6 || var_1515 == 8) {
                gcopy(3, 800, 160, 40, 40);
            }
            if (var_1515 == 1 || var_1515 == 3 || var_1515 == 5 || var_1515 == 7 || var_1515 == 9) {
                gcopy(3, 800, 120, 40, 40);
            }
        }
        if (var_1224 >= 1) {
            if (var_1225 == 0 && var_1224 != 10 && var_1224 != 11) {
                var_1516 = rnd(8);
                if (var_1516 == 0) {
                    var_1224 = 4;
                    var_1517 = 680;
                    var_1518 = rnd(280);
                }
                if (var_1516 == 1) {
                    var_1224 = 6;
                    var_1517 = 0;
                    var_1518 = rnd(280);
                }
                if (var_1516 == 2) {
                    var_1224 = 2;
                    var_1517 = rnd(300);
                    var_1518 = 0;
                }
                if (var_1516 == 3) {
                    var_1224 = 8;
                    var_1517 = rnd(300);
                    var_1518 = 680;
                }
                if (var_1516 == 4) {
                    var_1224 = 1;
                    var_1517 = rnd(200);
                    var_1517 = var_1517 + 100;
                    var_1518 = 0;
                }
                if (var_1516 == 5) {
                    var_1224 = 3;
                    var_1517 = rnd(300);
                    var_1517 = var_1517 - 100;
                    var_1518 = 0;
                }
                if (var_1516 == 6) {
                    var_1224 = 7;
                    var_1517 = rnd(200);
                    var_1517 = var_1517 + 100;
                    var_1518 = 680;
                }
                if (var_1516 == 7) {
                    var_1224 = 9;
                    var_1517 = rnd(300);
                    var_1517 = var_1517 - 100;
                    var_1518 = 680;
                }
            }
            if (var_1224 == 4 || var_1224 == 10) {
                var_1517 = var_1517 - 40;
                var_1518 = var_1518 + 0;
            }
            if (var_1224 == 6) {
                var_1517 = var_1517 + 40;
                var_1518 = var_1518 + 0;
            }
            if (var_1224 == 2) {
                var_1517 = var_1517 + 0;
                var_1518 = var_1518 + 40;
            }
            if (var_1224 == 8) {
                var_1517 = var_1517 + 0;
                var_1518 = var_1518 - 40;
            }
            if (var_1224 == 1) {
                var_1517 = var_1517 - 40;
                var_1518 = var_1518 + 40;
            }
            if (var_1224 == 3) {
                var_1517 = var_1517 + 40;
                var_1518 = var_1518 + 40;
            }
            if (var_1224 == 7) {
                var_1517 = var_1517 - 40;
                var_1518 = var_1518 - 40;
            }
            if (var_1224 == 9) {
                var_1517 = var_1517 + 40;
                var_1518 = var_1518 - 40;
            }
            if (var_1225 <= 9) {
                if (var_1224 == 10 && var_1225 >= 5) {
                    return;
                }
                pos(var_1517, var_1518);
                if (var_1224 == 4 || var_1224 == 10) {
                    gcopy(6, 120, 1920, 40, 40);
                    pos(var_1517 - 20, var_1518 + 20);
                }
                if (var_1224 == 6) {
                    gcopy(6, 360, 1920, 40, 40);
                    pos(var_1517 + 20, var_1518 + 20);
                }
                if (var_1224 == 2) {
                    gcopy(6, 40, 1920, 40, 40);
                    pos(var_1517, var_1518 + 20);
                }
                if (var_1224 == 8) {
                    gcopy(6, 320, 1920, 40, 40);
                    pos(var_1517, var_1518 - 60);
                }
                if (var_1224 == 1) {
                    gcopy(6, 480, 1920, 40, 40);
                    pos(var_1517 - 20, var_1518 + 20);
                }
                if (var_1224 == 3) {
                    gcopy(6, 720, 1920, 40, 40);
                    pos(var_1517 + 20, var_1518 + 20);
                }
                if (var_1224 == 7) {
                    gcopy(6, 600, 1920, 40, 40);
                    pos(var_1517 - 20, var_1518 - 60);
                }
                if (var_1224 == 9) {
                    gcopy(6, 840, 1920, 40, 40);
                    pos(var_1517 + 20, var_1518 - 60);
                }
                if (var_1224 < 10) {
                    if (var_1153 == 0 || var_1153 == 4 || var_1153 == 8) {
                        gcopy(3, 1000, 160, 40, 40);
                    }
                    if (var_1153 == 1 || var_1153 == 5 || var_1153 == 9) {
                        gcopy(3, 1040, 160, 40, 40);
                    }
                    if (var_1153 == 2 || var_1153 == 6 || var_1153 == 10) {
                        gcopy(3, 1080, 160, 40, 40);
                    }
                    if (var_1153 == 3 || var_1153 == 7 || var_1153 == 11) {
                        gcopy(3, 1120, 160, 40, 40);
                    }
                }
            }
        }
        if (var_1519 >= 1) {
            pos((var_347 - var_66 + 4) * 40, (var_348 - var_67 + 4) * 40 - 10);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1519 >= 0 && var_1519 < 1) {
                gcopy(14, 40, 160, 40, 40);
            }
            if (var_1519 >= 1 && var_1519 < 2) {
                gcopy(14, 80, 160, 40, 40);
            }
            if (var_1519 >= 2 && var_1519 < 3) {
                gcopy(14, 120, 160, 40, 40);
            }
            if (var_1519 >= 3 && var_1519 < 4) {
                gcopy(14, 122, 160, 38, 40);
            }
            if (var_1519 >= 4 && var_1519 < 5) {
                gcopy(14, 120, 160, 40, 40);
            }
            if (var_1519 >= 5 && var_1519 < 8) {
                gcopy(14, 122, 160, 38, 40);
            }
            if (var_1519 >= 8 && var_1519 < 9) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(14, 120, 160, 40, 40);
            }
            if (var_1519 >= 9 && var_1519 < 11) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(14, 120, 160, 40, 40);
            }
        }
        if (var_1520 >= 10) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1520 == 19) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 230);
            }
            if (var_1520 == 20) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            }
            if (var_1520 == 21) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
            }
            if (var_1520 == 22) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
            }
            if (var_1520 == 23) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
            }
            if (var_1520 == 24) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1520 == 25) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 30);
            }
            if (var_1520 == 26) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 10);
            }
            pos(160, 160 - (var_1520 - 2) * 5);
            gcopy(bufferid_stand_disc, 1080, 160, 40, 40);
            pos(160, 160 + (var_1520 - 4) * 5);
            gcopy(bufferid_stand_disc, 1080, 160, 40, 40);
            pos(160 - (var_1520 - 3) * 5, 160);
            gcopy(bufferid_stand_disc, 1080, 160, 40, 40);
            pos(160 + (var_1520 - 2) * 5, 160);
            gcopy(bufferid_stand_disc, 1080, 160, 40, 40);
            pos(160 - (var_1520 - 3) * 5, 160 - (var_1520 - 3) * 5);
            gcopy(bufferid_stand_disc, 1080, 160, 40, 40);
            pos(160 + (var_1520 - 1) * 5, 160 - (var_1520 - 1) * 5);
            gcopy(bufferid_stand_disc, 1080, 160, 40, 40);
            pos(160 - (var_1520 - 4) * 5, 160 + (var_1520 - 4) * 5);
            gcopy(bufferid_stand_disc, 1080, 160, 40, 40);
            pos(160 + (var_1520 - 3) * 5, 160 + (var_1520 - 3) * 5);
            gcopy(bufferid_stand_disc, 1080, 160, 40, 40);
        }
        if (var_1521 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40);
            if (var_862[var_1522][0] == 0 && dangeon_number >= 2) {
                var_1523 = 0;
            }
            if (var_862[var_1522][0] == 1 && dangeon_number >= 2) {
                var_1523 = 1;
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 || var_262 == 1) { // var_262 == 1 なので、dangeon_number = 0 であれば
                var_1523 = 1;
            }
            if (var_1522 >= 801 && var_1522 <= 804) {
                var_1523 = 1;
            }
            if (var_1521 == 1 || var_1521 == 2) {
                if (var_1523 == 0) {
                    gcopy(9, 360, 280, 40, 40);
                }
                if (var_1523 == 1) {
                    if (var_1522 == 800) {
                        gcopy(9, 760, 280, 40, 40);
                    }
                    if (var_1522 == 801) {
                        gcopy(9, 520, 280, 40, 40);
                    }
                    if (var_1522 == 804) {
                        gcopy(9, 560, 280, 40, 40);
                    }
                    if (var_1522 == 802) {
                        gcopy(9, 600, 280, 40, 40);
                    }
                    if (var_1522 == 803) {
                        gcopy(9, 640, 280, 40, 40);
                    }
                    if (var_1522 == 815) {
                        gcopy(9, 40, 280, 40, 40);
                    }
                    if (var_1522 == 808) {
                        gcopy(9, 80, 280, 40, 40);
                    }
                    if (var_1522 == 805) {
                        gcopy(9, 120, 280, 40, 40);
                    }
                    if (var_1522 == 807) {
                        gcopy(9, 160, 280, 40, 40);
                    }
                    if (var_1522 == 806) {
                        gcopy(9, 200, 280, 40, 40);
                    }
                    if (var_1522 == 809) {
                        gcopy(9, 0, 280, 40, 40);
                    }
                    if (var_1522 == 816) {
                        gcopy(9, 240, 280, 40, 40);
                    }
                    if (var_1522 == 850) {
                        gcopy(9, 280, 280, 40, 40);
                    }
                    if (var_1522 == 851) {
                        gcopy(9, 320, 280, 40, 40);
                    }
                    if (var_1522 == 817) {
                        gcopy(9, 440, 280, 40, 40);
                    }
                    if (var_1522 == 818) {
                        gcopy(9, 480, 280, 40, 40);
                    }
                    if (var_1522 == 852) {
                        gcopy(9, 400, 280, 40, 40);
                    }
                    if (var_1522 == 853) {
                        gcopy(9, 680, 280, 40, 40);
                    }
                    if (var_1522 == 854) {
                        gcopy(9, 720, 280, 40, 40);
                    }
                }
            }
            if (var_1521 == 3 || var_1521 == 4) {
                if (var_1523 == 0) {
                    gcopy(9, 360, 320, 40, 40);
                }
                if (var_1523 == 1) {
                    if (var_1522 == 800) {
                        gcopy(9, 760, 320, 40, 40);
                    }
                    if (var_1522 == 801) {
                        gcopy(9, 520, 320, 40, 40);
                    }
                    if (var_1522 == 804) {
                        gcopy(9, 560, 320, 40, 40);
                    }
                    if (var_1522 == 802) {
                        gcopy(9, 600, 320, 40, 40);
                    }
                    if (var_1522 == 803) {
                        gcopy(9, 640, 320, 40, 40);
                    }
                    if (var_1522 == 815) {
                        gcopy(9, 40, 320, 40, 40);
                    }
                    if (var_1522 == 808) {
                        gcopy(9, 80, 320, 40, 40);
                    }
                    if (var_1522 == 805) {
                        gcopy(9, 120, 320, 40, 40);
                    }
                    if (var_1522 == 807) {
                        gcopy(9, 160, 320, 40, 40);
                    }
                    if (var_1522 == 806) {
                        gcopy(9, 200, 320, 40, 40);
                    }
                    if (var_1522 == 809) {
                        gcopy(9, 0, 320, 40, 40);
                    }
                    if (var_1522 == 816) {
                        gcopy(9, 240, 320, 40, 40);
                    }
                    if (var_1522 == 850) {
                        gcopy(9, 280, 320, 40, 40);
                    }
                    if (var_1522 == 851) {
                        gcopy(9, 320, 320, 40, 40);
                    }
                    if (var_1522 == 817) {
                        gcopy(9, 440, 320, 40, 40);
                    }
                    if (var_1522 == 818) {
                        gcopy(9, 480, 320, 40, 40);
                    }
                    if (var_1522 == 852) {
                        gcopy(9, 400, 320, 40, 40);
                    }
                    if (var_1522 == 853) {
                        gcopy(9, 680, 320, 40, 40);
                    }
                    if (var_1522 == 854) {
                        gcopy(9, 720, 320, 40, 40);
                    }
                }
            }
            if (var_1521 == 5 || var_1521 == 6) {
                if (var_1523 == 0) {
                    gcopy(9, 360, 360, 40, 40);
                }
                if (var_1523 == 1) {
                    if (var_1522 == 800) {
                        gcopy(9, 760, 360, 40, 40);
                    }
                    if (var_1522 == 801) {
                        gcopy(9, 520, 360, 40, 40);
                    }
                    if (var_1522 == 804) {
                        gcopy(9, 560, 360, 40, 40);
                    }
                    if (var_1522 == 802) {
                        gcopy(9, 600, 360, 40, 40);
                    }
                    if (var_1522 == 803) {
                        gcopy(9, 640, 360, 40, 40);
                    }
                    if (var_1522 == 815) {
                        gcopy(9, 40, 360, 40, 40);
                    }
                    if (var_1522 == 808) {
                        gcopy(9, 80, 360, 40, 40);
                    }
                    if (var_1522 == 805) {
                        gcopy(9, 120, 360, 40, 40);
                    }
                    if (var_1522 == 807) {
                        gcopy(9, 160, 360, 40, 40);
                    }
                    if (var_1522 == 806) {
                        gcopy(9, 200, 360, 40, 40);
                    }
                    if (var_1522 == 809) {
                        gcopy(9, 0, 360, 40, 40);
                    }
                    if (var_1522 == 816) {
                        gcopy(9, 240, 360, 40, 40);
                    }
                    if (var_1522 == 850) {
                        gcopy(9, 280, 360, 40, 40);
                    }
                    if (var_1522 == 851) {
                        gcopy(9, 320, 360, 40, 40);
                    }
                    if (var_1522 == 817) {
                        gcopy(9, 440, 360, 40, 40);
                    }
                    if (var_1522 == 818) {
                        gcopy(9, 480, 360, 40, 40);
                    }
                    if (var_1522 == 852) {
                        gcopy(9, 400, 360, 40, 40);
                    }
                    if (var_1522 == 853) {
                        gcopy(9, 680, 360, 40, 40);
                    }
                    if (var_1522 == 854) {
                        gcopy(9, 720, 360, 40, 40);
                    }
                }
            }
            if (var_1521 == 7) {
                gcopy(9, 280, 240, 40, 40);
            }
        }
        if (var_1524 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 10);
            if (var_1524 >= 1 && var_1524 <= 2) {
                gcopy(3, 640, 480, 40, 40);
            }
            if (var_1524 >= 3 && var_1524 <= 4) {
                gcopy(3, 680, 480, 40, 40);
            }
            if (var_1524 >= 5 && var_1524 <= 8) {
                gcopy(3, 720, 480, 40, 40);
            }
        }
        if (var_1525 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 10);
            if (var_1525 == 1 || var_1525 == 4 || var_1525 == 7) {
                gcopy(3, 840, 320, 40, 40);
            }
            if (var_1525 == 2 || var_1525 == 5 || var_1525 == 8) {
                gcopy(3, 880, 320, 40, 40);
            }
            if (var_1525 == 3 || var_1525 == 6 || var_1525 == 9) {
                gcopy(3, 920, 320, 40, 40);
            }
        }
        if (var_1526 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 10);
            if (var_1526 == 1 || var_1526 == 4 || var_1526 == 7) {
                gcopy(3, 720, 320, 40, 40);
            }
            if (var_1526 == 2 || var_1526 == 5 || var_1526 == 8) {
                gcopy(3, 760, 320, 40, 40);
            }
            if (var_1526 == 3 || var_1526 == 6 || var_1526 == 9) {
                gcopy(3, 800, 320, 40, 40);
            }
        }
        if (var_1527 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1527 == 5) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1527 == 6) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 10 - 240);
            if (var_1527 == 1 || var_1527 == 4) {
                gcopy(8, 0, 480, 40, 280);
            }
            if (var_1527 == 2 || var_1527 == 5) {
                gcopy(8, 40, 480, 40, 280);
            }
            if (var_1527 == 3 || var_1527 == 6) {
                gcopy(8, 80, 480, 40, 280);
            }
        }
        if (var_1528 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1528 == 10) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1528 == 11) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1528 == 12) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1528 >= 13) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 0);
            }
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 10);
            if (var_1528 == 1 || var_1528 == 3 || var_1528 == 5) {
                pos((var_1396 - var_66 + 4) * 40 + 1, (var_1397 - var_67 + 4) * 40 - 10);
            }
            if (var_1528 == 2 || var_1528 == 4 || var_1528 == 6) {
                pos((var_1396 - var_66 + 4) * 40 - 1, (var_1397 - var_67 + 4) * 40 - 10);
            }
            gcopy(3, 120, 120, 40, 40);
        }
        if (var_1529 == 1 && var_1530 == 0) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 150);
            belongings_item_list = var_233[var_1531].Var0;
            var_1248 = var_233[var_1531].Var13;
            yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            pos(160, 0);
            gcopy(14, 400, 0, 40, 200);
        }
        if (var_1529 >= 2 && var_1530 == 0) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, var_774 - 10);
            belongings_item_list = var_233[var_1531].Var0;
            var_1248 = var_233[var_1531].Var13;
            yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            pos(160, var_774 - 160);
            gcopy(14, 400, 0, 40, 200);
        }
        if (var_1529 == 1 && var_1530 == 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(170, 0);
            gcopy(14, 400, 0, 40, 200);
        }
        if (var_1529 >= 2 && var_1530 == 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, var_774 + 10);
            gcopy(3, 960, 0, 40, 40);
            pos(170, var_774 - 150);
            gcopy(14, 400, 0, 40, 200);
        }
        if (var_1532 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 10);
            if (var_1532 >= 1 && var_1532 < 2) {
                gcopy(14, 80, 640, 40, 40);
            }
            if (var_1532 >= 2 && var_1532 < 3) {
                gcopy(14, 120, 640, 40, 40);
            }
            if (var_1532 >= 3 && var_1532 < 4) {
                gcopy(14, 160, 640, 40, 40);
            }
            if (var_1532 >= 4 && var_1532 < 8) {
                gcopy(14, 200, 640, 40, 40);
            }
            if (var_1532 >= 8 && var_1532 < 12) {
                gcopy(14, 240, 640, 40, 40);
            }
            if (var_1532 >= 12 && var_1532 < 13) {
                gcopy(14, 280, 640, 40, 40);
            }
            if (var_1532 >= 13 && var_1532 < 14) {
                gcopy(14, 280, 639, 40, 40);
            }
            if (var_1532 >= 14 && var_1532 < 15) {
                gcopy(14, 280, 640, 40, 40);
            }
            if (var_1532 >= 15 && var_1532 < 16) {
                gcopy(14, 280, 639, 40, 40);
            }
            if (var_1532 >= 16 && var_1532 < 19) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(14, 280, 640, 40, 40);
            }
            if (var_1532 >= 19) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(14, 280, 640, 40, 40);
            }
        }
        if (var_1533 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 10);
            if (var_1533 >= 1 && var_1533 < 2) {
                gcopy(14, 40, 80, 40, 40);
            }
            if (var_1533 >= 2 && var_1533 < 3) {
                gcopy(14, 80, 80, 40, 40);
            }
            if (var_1533 >= 3 && var_1533 < 4) {
                gcopy(14, 120, 80, 40, 40);
            }
            if (var_1533 >= 4 && var_1533 < 5) {
                gcopy(14, 119, 80, 40, 40);
            }
            if (var_1533 >= 5 && var_1533 < 6) {
                gcopy(14, 120, 80, 40, 40);
            }
            if (var_1533 >= 6 && var_1533 < 7) {
                gcopy(14, 119, 80, 40, 40);
            }
            if (var_1533 >= 7 && var_1533 < 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(14, 120, 80, 40, 40);
            }
            if (var_1533 >= 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(14, 120, 80, 40, 40);
            }
        }
        if (var_1534 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 10);
            if (var_1534 >= 1 && var_1534 < 2) {
                gcopy(14, 480, 120, 40, 40);
            }
            if (var_1534 >= 2 && var_1534 < 3) {
                gcopy(14, 520, 120, 40, 40);
            }
            if (var_1534 >= 3 && var_1534 < 4) {
                gcopy(14, 560, 120, 40, 40);
            }
            if (var_1534 >= 4 && var_1534 < 5) {
                gcopy(14, 559, 120, 40, 40);
            }
            if (var_1534 >= 5 && var_1534 < 6) {
                gcopy(14, 560, 120, 40, 40);
            }
            if (var_1534 >= 6 && var_1534 < 7) {
                gcopy(14, 559, 120, 40, 40);
            }
            if (var_1534 >= 7 && var_1534 < 8) {
                gcopy(14, 440, 160, 40, 40);
            }
            if (var_1534 >= 8 && var_1534 < 9) {
                gcopy(14, 480, 160, 40, 40);
            }
            if (var_1534 >= 9 && var_1534 < 10) {
                gcopy(14, 520, 160, 40, 40);
            }
            if (var_1534 >= 10 && var_1534 < 11) {
                gcopy(14, 560, 160, 40, 40);
            }
        }
        if (var_1535 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1535 == 1) {
                pos(4 * var_35 - 20, 30);
                gcopy(14, 200, 0, 80, 80);
            }
            if (var_1535 == 2) {
                pos(4 * var_35 - 20, 70);
                gcopy(14, 200, 0, 80, 80);
            }
            if (var_1535 == 3) {
                pos(4 * var_35 - 20, 110);
                gcopy(14, 200, 0, 80, 80);
            }
            if (var_1535 == 4) {
                pos(4 * var_35 - 20, 130);
                gcopy(14, 200, 0, 80, 80);

                DSPLAY(audio_id = 137);
            }
            if (var_1535 == 5) {
                pos(4 * var_35 - 20, 125);
                gcopy(14, 200, 0, 80, 80);
            }
            if (var_1535 == 6) {
                pos(4 * var_35 - 20, 130);
                gcopy(14, 200, 0, 80, 80);
            }
            if (var_1535 == 7) {
                pos(4 * var_35 - 20, 125);
                gcopy(14, 200, 0, 80, 80);
            }
            if (var_1535 == 8) {
                pos(4 * var_35 - 20, 130);
                gcopy(14, 200, 0, 80, 80);
            }
            if (var_1535 == 9 || var_1535 == 10 || var_1535 == 12 || var_1535 == 13) {
                pos(4 * var_35 - 20, 130);
                gcopy(14, 280, 0, 80, 80);
            }
        }
        if (var_1536 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1536 == 1) {
                pos(4 * var_35 - 60, 0);
                gcopy(14, 240, 240, 160, 160);
            }
            if (var_1536 == 2) {
                pos(4 * var_35 - 60, 30);
                gcopy(14, 240, 240, 160, 160);
            }
            if (var_1536 == 3) {
                pos(4 * var_35 - 60, 50);
                gcopy(14, 240, 240, 160, 160);
            }
            if (var_1536 == 4) {
                pos(4 * var_35 - 60, 75);
                gcopy(14, 240, 240, 160, 160);
    
                DSPLAY(audio_id = 138);
            }
            if (var_1536 == 5) {
                pos(4 * var_35 - 60, 70);
                gcopy(14, 240, 240, 160, 160);
            }
            if (var_1536 == 6) {
                pos(4 * var_35 - 60, 75);
                gcopy(14, 240, 240, 160, 160);
            }
            if (var_1536 == 7) {
                pos(4 * var_35 - 60, 70);
                gcopy(14, 240, 240, 160, 160);
            }
            if (var_1536 == 8) {
                pos(4 * var_35 - 60, 75);
                gcopy(14, 240, 240, 160, 160);
            }
            if (var_1536 == 9 || var_1536 == 10 || var_1536 == 12 || var_1536 == 13) {
                pos(4 * var_35 - 60, 70);
                gcopy(14, 240, 240, 160, 160);
            }
        }
        if (var_1537 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1537 == 1) {
                pos(310, 150);
                gcopy(14, 80, 240, 80, 40);
            }
            if (var_1537 == 2) {
                pos(240, 150);
                gcopy(14, 80, 240, 80, 40);
            }
            if (var_1537 == 3) {
                pos(160, 150);
                gcopy(14, 80, 240, 80, 40);
            }
            if (var_1537 == 4) {
                pos(80, 150);
                gcopy(14, 80, 240, 80, 40);
            }
            if (var_1537 == 5) {
                pos(0, 150);
                gcopy(14, 80, 240, 80, 40);
            }
            if (var_1537 == 6) {
            }
            if (var_1537 == 7) {
                pos(0, 170);
                gcopy(14, 160, 240, 80, 40);
            }
            if (var_1537 == 8) {
                pos(80, 170);
                gcopy(14, 160, 240, 80, 40);
            }
            if (var_1537 == 9) {
                pos(160, 170);
                gcopy(14, 160, 240, 80, 40);
            }
            if (var_1537 == 10) {
                pos(240, 170);
                gcopy(14, 160, 240, 80, 40);
            }
            if (var_1537 == 11) {
                pos(310, 170);
                gcopy(14, 160, 240, 80, 40);
            }
        }
        if (var_1538 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 150);
            if (var_1538 == 1 || var_1538 == 2) {
                gcopy(14, 80, 320, 40, 40);
            }
            if (var_1538 == 3 || var_1538 == 4) {
                gcopy(14, 120, 320, 40, 40);
            }
            if (var_1538 == 5 || var_1538 == 6) {
                gcopy(14, 160, 320, 40, 40);
            }
        }
        if (var_1539 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 160);
            if (var_1539 >= 0 && var_1539 < 1) {
                gcopy(14, 280, 400, 40, 40);
            }
            if (var_1539 >= 1 && var_1539 < 2) {
                gcopy(14, 320, 400, 40, 40);
            }
            if (var_1539 >= 2 && var_1539 < 3) {
                gcopy(14, 360, 400, 40, 40);
            }
            if (var_1539 >= 3 && var_1539 < 4) {
                gcopy(14, 359, 400, 40, 40);
            }
            if (var_1539 >= 4 && var_1539 < 5) {
                gcopy(14, 360, 400, 40, 40);
            }
            if (var_1539 >= 5 && var_1539 < 11) {
                gcopy(14, 359, 400, 40, 40);
            }
            if (var_1539 >= 11 && var_1539 < 12) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                gcopy(14, 360, 400, 40, 40);
            }
            if (var_1539 >= 12 && var_1539 < 13) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
                gcopy(14, 360, 400, 40, 40);
            }
            if (var_1539 >= 13 && var_1539 < 14) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(14, 360, 400, 40, 40);
            }
            if (var_1539 >= 14) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(14, 360, 400, 40, 40);
            }
        }
        if (var_1540 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1540 == 1) {
                pos(4 * var_35, 280);
                gcopy(14, 200, 80, 40, 40);
            }
            if (var_1540 == 2) {
                pos(4 * var_35, 240);
                gcopy(14, 200, 80, 40, 40);
            }
            if (var_1540 == 3) {
                pos(4 * var_35, 200);
                gcopy(14, 200, 80, 40, 40);
            }
            if (var_1540 == 4) {
                pos(4 * var_35, 160);
                gcopy(14, 200, 80, 40, 40);
            }
            if (var_1540 == 5) {
                pos(4 * var_35, 165);
                gcopy(14, 200, 80, 40, 40);
            }
            if (var_1540 == 6) {
                pos(4 * var_35, 160);
                gcopy(14, 200, 80, 40, 40);
            }
            if (var_1540 == 7) {
                pos(4 * var_35, 165);
                gcopy(14, 200, 80, 40, 40);
            }
            if (var_1540 >= 8) {
                pos(4 * var_35, 160);
                gcopy(14, 200, 80, 40, 40);
            }
        }
        if (var_1541 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1541 == 1) {
                pos(4 * var_35, 280);
                gcopy(34, 400, 1200, 40, 40);
            }
            if (var_1541 == 2) {
                pos(4 * var_35, 240);
                gcopy(34, 400, 1200, 40, 40);
            }
            if (var_1541 == 3) {
                pos(4 * var_35, 200);
                gcopy(34, 400, 1200, 40, 40);
            }
            if (var_1541 == 4) {
                pos(4 * var_35, 160);
                gcopy(34, 400, 1200, 40, 40);
            }
            if (var_1541 == 5) {
                pos(4 * var_35, 165);
                gcopy(34, 400, 1200, 40, 40);
            }
            if (var_1541 == 6) {
                pos(4 * var_35, 160);
                gcopy(34, 400, 1200, 40, 40);
            }
            if (var_1541 == 7) {
                pos(4 * var_35, 165);
                gcopy(34, 400, 1200, 40, 40);
            }
            if (var_1541 >= 8) {
                pos(4 * var_35, 160);
                gcopy(34, 400, 1200, 40, 40);
            }
        }
        if (var_1542 >= 1 && var_127 == 0 && var_132 == 0) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            color(0, 0, 0);
            if (var_1542 == 1) {

                gmode(mode = 4, data2 = null, data3 = null, alpha = 10);
            }
            if (var_1542 == 2) {

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1542 == 3) {

                gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
            }
            if (var_1542 == 4) {
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
            }
            if (var_1542 == 5) {
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1542 == 6) {
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            }
            if (var_1542 >= 7 && var_1542 >= 15) {
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 255);
            }
            if (var_1542 == 16) {
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1542 == 17) {

                gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
            }
            if (var_1542 == 18) {

                gmode(mode = 4, data2 = null, data3 = null, alpha = 10);
            }
            if (var_1542 >= 1 && var_1542 < 19) {
                pos(160 - 20, 160 - 40);
                gcopy(14, 160, 120, 80, 80);
            }
            if (var_1542 >= 21 && var_1542 < 27) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                pos(160, 160 - 40);
                if (var_1542 == 21 || var_1542 == 23 || var_1542 == 25 || var_1542 == 27) {
                    pos(160, 160 - 43);
                }
                gcopy(14, 160, 280, 40, 40);
            }
        }
        if (var_1543 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 160);
            if (var_1543 == 5) {
                gcopy(14, 280, 200, 40, 40);
            }
            if (var_1543 == 6) {
                gcopy(14, 320, 200, 40, 40);
            }
            if (var_1543 >= 7 && var_1543 < 14) {
                gcopy(14, 360, 200, 40, 40);
            }
            if (var_1543 >= 15 && var_1543 < 17) {
                gcopy(14, 400, 200, 40, 40);
                var_374 = 1;
            }
        }
        if (var_1544 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1544 == 22) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1544 == 23) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1544 == 24) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            pos(160, 130);
            if (var_1544 == 1 || var_1544 == 4 || var_1544 == 7 || var_1544 == 10 || var_1544 == 13 || var_1544 == 16 || var_1544 == 19 || var_1544 == 22) {
                gcopy(6, 80, 120, 40, 30);
            }
            if (var_1544 == 2 || var_1544 == 5 || var_1544 == 8 || var_1544 == 11 || var_1544 == 14 || var_1544 == 17 || var_1544 == 20 || var_1544 == 23) {
                gcopy(6, 40, 121, 40, 30);
            }
            if (var_1544 == 3 || var_1544 == 6 || var_1544 == 9 || var_1544 == 12 || var_1544 == 15 || var_1544 == 18 || var_1544 == 21 || var_1544 == 24) {
                gcopy(6, 0, 122, 40, 30);
            }
        }
        if (var_1545 >= 1) {
            pos(160, 130);
            if (var_1545 == 4) {
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            }
            if (var_1545 == 3) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
            }
            if (var_1545 == 2) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1545 == 1) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            gcopy(34, 0, 440, 40, 40);
        }
        if (var_1546 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 10 - 40);
            if (var_1546 == 1) {
                gcopy(14, 440, 280, 40, 80);
            }
            if (var_1546 == 2) {
                gcopy(14, 480, 280, 40, 80);
            }
            if (var_1546 == 3) {
                gcopy(14, 520, 280, 40, 80);
            }
            if (var_1546 == 4) {
                gcopy(14, 560, 280, 40, 80);
            }
            if (var_1546 == 5) {
                gcopy(14, 560, 280, 40, 80);
            }
            if (var_1546 == 6) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                gcopy(14, 560, 280, 40, 80);
            }
            if (var_1546 == 7) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(14, 560, 280, 40, 80);
            }
            if (var_1546 == 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(14, 560, 280, 40, 80);
            }
        }
        if (var_1547 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40);
            if (var_1547 == 1) {
                gcopy(14, 480, 360, 40, 40);
            }
            if (var_1547 == 2) {
                gcopy(14, 480, 360, 40, 40);
            }
            if (var_1547 == 3) {
                gcopy(14, 520, 360, 40, 40);
            }
            if (var_1547 == 4) {
                gcopy(14, 520, 360, 40, 40);
            }
            if (var_1547 == 5) {
                gcopy(14, 560, 360, 40, 40);
            }
            if (var_1547 == 6) {
                gcopy(14, 560, 360, 40, 40);
            }
        }
        if (var_1548 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(120, 0);
            if (var_1548 == 1) {
                gcopy(3, 1040, 880, 120, 160);
            }
            if (var_1548 == 2) {
                gcopy(3, 1160, 880, 120, 160);
            }
            if (var_1548 == 7) {
                gcopy(3, 1280, 880, 120, 160);
            }
            if (var_1548 == 8) {
                gcopy(3, 1400, 880, 120, 160);
            }
        }
        if (var_1549 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1550 - var_66 + 4) * 40, (var_230 - var_67 + 4 - 5) * 40 + var_1549 * 20);
            gcopy(34, 320, 440, 40, 40);
        }
        if (var_1551 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1551 == 14) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            }
            if (var_1551 == 15) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1551 == 16) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1551 >= 17) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 0);
            }
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 20);
            if (var_1551 == 1 || var_1551 == 5 || var_1551 == 9 || var_1551 == 13) {
                gcopy(3, 760, 520, 40, 40);
            }
            if (var_1551 == 2 || var_1551 == 6 || var_1551 == 10 || var_1551 == 14) {
                gcopy(3, 800, 520, 40, 40);
            }
            if (var_1551 == 3 || var_1551 == 7 || var_1551 == 11 || var_1551 == 15) {
                gcopy(3, 840, 520, 40, 40);
            }
            if (var_1551 == 4 || var_1551 == 8 || var_1551 == 12 || var_1551 == 16) {
                gcopy(3, 800, 520, 40, 40);
            }
        }
        if (var_1552 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 10);
            if (var_1552 == 1 || var_1552 == 4 || var_1552 == 7 || var_1552 == 10 || var_1552 == 13 || var_1552 == 16) {
                gcopy(3, 560, 200, 40, 40);
            }
            if (var_1552 == 2 || var_1552 == 5 || var_1552 == 8 || var_1552 == 11 || var_1552 == 14 || var_1552 == 17) {
                gcopy(3, 600, 200, 40, 40);
            }
            if (var_1552 == 3 || var_1552 == 6 || var_1552 == 9 || var_1552 == 12 || var_1552 == 15 || var_1552 == 18) {
                gcopy(3, 640, 200, 40, 40);
            }
        }
        if (var_1553 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1554, 16 * 20 + var_1555 - var_1553 * 20);
            gcopy(34, 400, 400, 40, 40);
        }
        if (var_1556 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1554, 16 * 20 + var_1555 - var_1556 * 20);
            gcopy(34, 400, 1200, 40, 40);
        }
        if (var_1557 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1558, var_1559 - 10);
            if (var_1557 == 1) {
                gcopy(3, 800, 600, 40, 40);
            }
            if (var_1557 == 2) {
                gcopy(3, 840, 600, 40, 40);
            }
            if (var_1557 == 3) {
                gcopy(3, 880, 600, 40, 40);
            }
            if (var_1557 == 4) {
                gcopy(3, 920, 600, 40, 40);
            }
            if (var_1557 == 5) {
                gcopy(3, 960, 600, 40, 40);
            }
            if (var_1557 == 6) {
                gcopy(3, 1000, 600, 40, 40);
            }
            if (var_1557 >= 7 && var_1557 <= 13) {
                gcopy(3, 1040, 600, 40, 40);
            }
            if (var_1557 == 14 || var_1557 == 16 || var_1557 == 18) {
                gcopy(3, 1080, 600, 40, 40);
            }
            if (var_1557 == 15 || var_1557 == 17 || var_1557 == 19) {
                gcopy(3, 1120, 600, 40, 40);
            }
        }
        if (var_1560 >= 1) {
            var_1561 = var_1560 % 16;
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1561 == 0) {
                pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 10);
            }
            if (var_1561 == 1) {
                pos((var_1396 - var_66 + 4) * 40 - 2, (var_1397 - var_67 + 4) * 40 - 12);
            }
            if (var_1561 == 2) {
                pos((var_1396 - var_66 + 4) * 40 - 4, (var_1397 - var_67 + 4) * 40 - 14);
            }
            if (var_1561 == 3) {
                pos((var_1396 - var_66 + 4) * 40 - 6, (var_1397 - var_67 + 4) * 40 - 16);
            }
            if (var_1561 == 4) {
                pos((var_1396 - var_66 + 4) * 40 - 8, (var_1397 - var_67 + 4) * 40 - 18);
            }
            if (var_1561 == 5) {
                pos((var_1396 - var_66 + 4) * 40 - 6, (var_1397 - var_67 + 4) * 40 - 20);
            }
            if (var_1561 == 6) {
                pos((var_1396 - var_66 + 4) * 40 - 4, (var_1397 - var_67 + 4) * 40 - 22);
            }
            if (var_1561 == 7) {
                pos((var_1396 - var_66 + 4) * 40 - 2, (var_1397 - var_67 + 4) * 40 - 24);
            }
            if (var_1561 == 8) {
                pos((var_1396 - var_66 + 4) * 40, (var_1397 - var_67 + 4) * 40 - 26);
            }
            if (var_1561 == 9) {
                pos((var_1396 - var_66 + 4) * 40 + 2, (var_1397 - var_67 + 4) * 40 - 24);
            }
            if (var_1561 == 10) {
                pos((var_1396 - var_66 + 4) * 40 + 4, (var_1397 - var_67 + 4) * 40 - 22);
            }
            if (var_1561 == 11) {
                pos((var_1396 - var_66 + 4) * 40 + 6, (var_1397 - var_67 + 4) * 40 - 20);
            }
            if (var_1561 == 12) {
                pos((var_1396 - var_66 + 4) * 40 + 8, (var_1397 - var_67 + 4) * 40 - 18);
            }
            if (var_1561 == 13) {
                pos((var_1396 - var_66 + 4) * 40 + 6, (var_1397 - var_67 + 4) * 40 - 16);
            }
            if (var_1561 == 14) {
                pos((var_1396 - var_66 + 4) * 40 + 4, (var_1397 - var_67 + 4) * 40 - 14);
            }
            if (var_1561 == 15) {
                pos((var_1396 - var_66 + 4) * 40 + 2, (var_1397 - var_67 + 4) * 40 - 12);
            }
            gcopy(11, 1040, 200, 40, 40);
        }
        if (var_1562 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1563 - var_66 + 4) * 40, (var_1564 - var_67 + 4) * 40 - var_1562 * 20);
            gcopy(3, 1000, 320, 40, 40);
            if (var_1565 >= 2) {
                pos((var_1563 - var_66 + 4) * 40 + var_1562 * 10, (var_1564 - var_67 + 4) * 40 - var_1562 * 20);
                gcopy(3, 1000, 320, 40, 40);
            }
            if (var_1565 >= 3) {
                pos((var_1563 - var_66 + 4) * 40 - var_1562 * 10, (var_1564 - var_67 + 4) * 40 - var_1562 * 20);
                gcopy(3, 1000, 320, 40, 40);
            }
            if (var_1565 >= 4) {
                pos((var_1563 - var_66 + 4) * 40 + var_1562 * 15, (var_1564 - var_67 + 4) * 40 - var_1562 * 20);
                gcopy(3, 1000, 320, 40, 40);
            }
            if (var_1565 >= 5) {
                pos((var_1563 - var_66 + 4) * 40 - var_1562 * 15, (var_1564 - var_67 + 4) * 40 - var_1562 * 20);
                gcopy(3, 1000, 320, 40, 40);
            }
        }
        if (var_1566 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            var_1567 = 1;
            for (let cnt2 = 0; cnt2 < var_1565; ++cnt2) {
                pos((var_1568[var_1567][1] - var_66 + 4) * 40, (var_1568[var_1567][2] - var_67 + 4 - 5) * 40 + var_1566 * 20);
                gcopy(3, 1000, 320, 40, 40);
                var_1567++;
            }
        }
        if (var_1569 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 150);
            if (var_1569 == 1 || var_1569 == 5 || var_1569 == 9 || var_1569 == 13 || var_1569 == 17) {
                gcopy(3, 640, 640, 40, 40);
            }
            if (var_1569 == 2 || var_1569 == 6 || var_1569 == 10 || var_1569 == 14 || var_1569 == 18) {
                gcopy(3, 680, 640, 40, 40);
            }
            if (var_1569 == 3 || var_1569 == 7 || var_1569 == 11 || var_1569 == 15 || var_1569 == 19) {
                gcopy(3, 720, 640, 40, 40);
            }
            if (var_1569 == 4 || var_1569 == 8 || var_1569 == 12 || var_1569 == 16 || var_1569 == 20) {
                gcopy(3, 680, 640, 40, 40);
            }
        }
        if (var_1570 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(160, 120);
            belongings_item_list = var_1571;
            yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            pos(160, 130);
            if (var_1570 == 1 || var_1570 == 5 || var_1570 == 9 || var_1570 == 13 || var_1570 == 17) {
                gcopy(3, 640, 680, 40, 40);
            }
            if (var_1570 == 2 || var_1570 == 6 || var_1570 == 10 || var_1570 == 14 || var_1570 == 18) {
                gcopy(3, 340, 340, 40, 40);
            }
            if (var_1570 == 3 || var_1570 == 7 || var_1570 == 11 || var_1570 == 15 || var_1570 == 19) {
                gcopy(3, 640, 680, 40, 40);
            }
            if (var_1570 == 4 || var_1570 == 8 || var_1570 == 12 || var_1570 == 16 || var_1570 == 20) {
                gcopy(3, 340, 340, 40, 40);
            }
        }
        if (var_1572 >= 1) {
            pos(140, 110);
            color(0, 0, 0);
    
            gmode(4, null, null, 130);
            if (var_1572 == 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
            }
            if (var_1572 == 9) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            if (var_1572 == 10) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 20);
            }
            if (var_1572 == 1 || var_1572 == 5 || var_1572 == 9 || var_1572 == 13 || var_1572 == 17) {
                gcopy(3, 1120, 280, 80, 80);
            }
            if (var_1572 == 2 || var_1572 == 6 || var_1572 == 10 || var_1572 == 14 || var_1572 == 18) {
                gcopy(3, 1200, 280, 80, 80);
            }
            if (var_1572 == 3 || var_1572 == 7 || var_1572 == 11 || var_1572 == 15 || var_1572 == 19) {
                gcopy(3, 1280, 280, 80, 80);
            }
            if (var_1572 == 4 || var_1572 == 8 || var_1572 == 12 || var_1572 == 16 || var_1572 == 20) {
                gcopy(3, 1360, 280, 80, 80);
            }
        }
        if (var_1573 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_1389 - var_66 + 4) * 40 - 20, (var_1390 - var_67 + 4) * 40 - 30);
            if (var_1573 == 1 || var_1573 == 3) {
                var_1391 = 0;
            }
            if (var_1573 == 3 || var_1573 == 4) {
                var_1391 = 80;
            }
            if (var_1573 == 5 || var_1573 == 6) {
                var_1391 = 160;
            }
            if (var_1573 == 7 || var_1573 == 8) {
                var_1391 = 240;
            }
            if (var_1573 == 9 || var_1573 == 10) {
                var_1391 = 320;
            }
            if (var_1573 == 11 || var_1573 == 12) {
                var_1391 = 400;
            }
            if (var_1573 == 13 || var_1573 == 14) {
                var_1391 = 480;
            }
            gcopy(3, var_1391, 160, 80, 80);
        }
        if (var_1574 >= 1) {
            pos(120, var_774);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1574 == 1) {
                gcopy(bufferid_stand_disc, 1120, 1440, 120, 80);
            }
            if (var_1574 == 2) {
                gcopy(bufferid_stand_disc, 1000, 1520, 120, 80);
            }
            if (var_1574 == 3) {
                gcopy(bufferid_stand_disc, 1120, 1520, 120, 80);
            }
            if (var_1574 == 4) {
                pos(120, var_774 + 20);
                gcopy(bufferid_stand_disc, 1000, 1600, 120, 80);
            }
            if (var_1574 == 5) {
                pos(120, var_774 + 20);
                gcopy(bufferid_stand_disc, 1120, 1600, 120, 80);
            }
        }
        if (var_1575 >= 1) {
            pos(160, var_774);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(3, 40, 0, 40, 40);
            pos(120, var_774 - 20);
            gcopy(bufferid_stand_disc, 1000, 1440, 120, 40);
        }
        if (var_1576 >= 1) {
            pos(160, var_774);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(3, 40, 0, 40, 40);
        }
        if (var_1577 >= 1) {
            pos(160, var_774);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1577 == 1 || var_1577 == 5) {
                gcopy(3, 960, 0, 40, 40);
            }
            if (var_1577 == 2 || var_1577 == 6) {
                gcopy(3, 1000, 0, 40, 40);
            }
            if (var_1577 == 3 || var_1577 == 7) {
                gcopy(3, 1040, 0, 40, 40);
            }
            if (var_1577 == 4 || var_1577 == 8) {
                gcopy(3, 1080, 0, 40, 40);
            }
        }
        if (var_1578 >= 1) {
            pos(160, var_774);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(3, 40, 0, 40, 40);
        }
        if (var_1579 >= 1 && var_1579 < 8) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(180, 120);
            if (var_1579 == 1 || var_1579 == 3 || var_1579 == 5 || var_1579 == 7) {
                pos(180, 125);
            }
            gcopy(14, 160, 280, 40, 40);
        }
        if (var_1580 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_199 == 2) {
                pos(160, 140 - 10);
                gcopy(3, 960, 0, 40, 40);
            }
            if (var_199 == 4) {
                pos(180, 160 - 10);
                gcopy(3, 1000, 0, 40, 40);
            }
            if (var_199 == 8) {
                pos(160, 180 - 10);
                gcopy(3, 1040, 0, 40, 40);
            }
            if (var_199 == 6) {
                pos(140, 160 - 10);
                gcopy(3, 1080, 0, 40, 40);
            }
            if (var_199 == 1) {
                pos(180, 140 - 10);
                gcopy(3, 1120, 0, 40, 40);
            }
            if (var_199 == 3) {
                pos(140, 140 - 10);
                gcopy(3, 1200, 0, 40, 40);
            }
            if (var_199 == 7) {
                pos(180, 180 - 10);
                gcopy(3, 1160, 0, 40, 40);
            }
            if (var_199 == 9) {
                pos(140, 180 - 10);
                gcopy(3, 1240, 0, 40, 40);
            }
        }
        if (var_414 >= 1) {
            pos(159, 160);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_414 >= 0 && var_414 < 1) {
                gcopy(14, 40, 160, 40, 40);
            }
            if (var_414 >= 1 && var_414 < 2) {
                gcopy(14, 80, 160, 40, 40);
            }
            if (var_414 >= 2 && var_414 < 3) {
                gcopy(14, 120, 160, 40, 40);
            }
            if (var_414 >= 3 && var_414 < 4) {
                pos(157, 160);
                gcopy(14, 120, 160, 40, 40);
            }
            if (var_414 >= 4 && var_414 < 5) {
                gcopy(14, 120, 160, 40, 40);
            }
            if (var_414 >= 5 && var_414 < 20) {
                pos(157, 160);
                gcopy(14, 120, 160, 40, 40);
            }
            if (var_414 >= 21 && var_414 < 22) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(14, 120, 160, 40, 40);
            }
            if (var_414 >= 22 && var_414 < 23) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(14, 120, 160, 40, 40);
            }
        }
        if (var_1238 >= 1) {
            if (var_1238 >= 22 && var_1238 < 35) {
                pos((var_83[var_314].Var1 - var_66 + 4) * 40, (var_83[var_314].Var2 - var_67 + 4) * 40 - 10);
                gcopy(3, 800, 360, 40, 40);
            }
            if (var_1238 == 35 || var_1238 == 37) {
                pos((var_83[var_314].Var1 - var_66 + 4) * 40, (var_83[var_314].Var2 - var_67 + 4) * 40 - 10);
                gcopy(3, 760, 360, 40, 40);
            }
            if (var_1238 == 36 || var_1238 == 38) {
                pos((var_83[var_314].Var1 - var_66 + 4) * 40, (var_83[var_314].Var2 - var_67 + 4) * 40 - 10);
                gcopy(3, 720, 360, 40, 40);
            }
            if (var_1238 >= 62 && var_1238 < 75) {
                pos((var_83[var_314].Var1 - var_66 + 4) * 40, (var_83[var_314].Var2 - var_67 + 4) * 40 - 10);
                gcopy(3, 840, 360, 40, 40);
            }
        }
        if (var_1581 >= 1) {
            if (var_1581 >= 1 && var_1581 < 15) {
                pos((var_83[var_421].Var1 - var_66 + 4) * 40, (var_83[var_421].Var2 - var_67 + 4) * 40 - 10);
                gcopy(3, 800, 360, 40, 40);
            }
            if (var_1581 == 15 || var_1581 == 17) {
                pos((var_83[var_421].Var1 - var_66 + 4) * 40, (var_83[var_421].Var2 - var_67 + 4) * 40 - 10);
                gcopy(3, 760, 360, 40, 40);
            }
            if (var_1581 == 16 || var_1581 == 18) {
                pos((var_83[var_421].Var1 - var_66 + 4) * 40, (var_83[var_421].Var2 - var_67 + 4) * 40 - 10);
                gcopy(3, 720, 360, 40, 40);
            }
            if (var_1581 >= 40 && var_1581 < 75) {
                pos((var_83[var_421].Var1 - var_66 + 4) * 40, (var_83[var_421].Var2 - var_67 + 4) * 40 - 10);
                gcopy(3, 840, 360, 40, 40);
            }
        }
        if (var_1582 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            if (var_1582 == 1) {
                pos(160, 100);
                if (var_1153 == 0 || var_1153 == 1 || var_1153 == 2) {
                    gcopy(6, 0, 1120, 40, 40);
                }
                if (var_1153 == 3 || var_1153 == 4 || var_1153 == 5) {
                    gcopy(6, 40, 1120, 40, 40);
                }
                if (var_1153 == 6 || var_1153 == 7 || var_1153 == 8) {
                    gcopy(6, 80, 1120, 40, 40);
                }
                if (var_1153 == 9 || var_1153 == 10 || var_1153 == 11) {
                    gcopy(6, 40, 1120, 40, 40);
                }
            }
            if (var_1582 == 2) {
                pos(160, 100);
                gcopy(15, 0, 1120, 40, 40);
            }
            if (var_1582 == 3) {
                pos(160, 100);
                gcopy(15, 0, 1120, 40, 40);
            }
            if (var_1582 == 4) {
                pos(160, 110);
                gcopy(15, 40, 1120, 40, 40);
            }
            if (var_1582 == 5) {
                pos(160, 120);
                gcopy(15, 40, 1120, 40, 40);
            }
            if (var_1582 == 6) {
                pos(160, 135);
                gcopy(15, 80, 1120, 40, 40);
            }
            if (var_1582 == 7) {
                pos(160, 130);
                gcopy(15, 80, 1120, 40, 40);
            }
            if (var_1582 == 8) {
                pos(160, 135);
                gcopy(15, 80, 1120, 40, 40);
            }
            if (var_1582 == 9) {
                pos(160, 120);
                gcopy(15, 40, 1120, 40, 40);
            }
            if (var_1582 == 10) {
                pos(160, 110);
                gcopy(15, 40, 1120, 40, 40);
            }
        }
        if (var_458 >= 1) {
            pos(160, 150);
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            if (var_458 == 1 || var_458 == 2) {
                gcopy(3, 760, 280, 40, 40);
            }
            if (var_458 == 3 || var_458 == 4) {
                gcopy(3, 800, 280, 40, 40);
            }
            if (var_458 == 5 || var_458 == 6) {
                gcopy(3, 840, 280, 40, 40);
            }
        }
        if (var_1583 >= 1) {
            pos(var_1584, var_1585);
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            if (var_1583 == 1 || var_1583 == 2) {
                gcopy(3, 760, 280, 40, 40);
            }
            if (var_1583 == 3 || var_1583 == 4) {
                gcopy(3, 800, 280, 40, 40);
            }
            if (var_1583 == 5 || var_1583 == 6) {
                gcopy(3, 840, 280, 40, 40);
            }
        }
        if (var_1586 >= 1) {
            pos(var_1584, var_1585);
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            if (var_1586 == 1 || var_1586 == 2) {
                gcopy(3, 760, 280, 40, 40);
            }
            if (var_1586 == 3 || var_1586 == 4) {
                gcopy(3, 800, 280, 40, 40);
            }
            if (var_1586 == 5 || var_1586 == 6) {
                gcopy(3, 840, 280, 40, 40);
            }
            pos(var_1587, var_1588);
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            if (var_1586 == 1 || var_1586 == 2) {
                gcopy(3, 760, 280, 40, 40);
            }
            if (var_1586 == 3 || var_1586 == 4) {
                gcopy(3, 800, 280, 40, 40);
            }
            if (var_1586 == 5 || var_1586 == 6) {
                gcopy(3, 840, 280, 40, 40);
            }
            pos(var_1589, var_1590);
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            if (var_1586 == 1 || var_1586 == 2) {
                gcopy(3, 760, 280, 40, 40);
            }
            if (var_1586 == 3 || var_1586 == 4) {
                gcopy(3, 800, 280, 40, 40);
            }
            if (var_1586 == 5 || var_1586 == 6) {
                gcopy(3, 840, 280, 40, 40);
            }
        }
        if (var_1591 >= 1 && var_1591 < 8) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(180, 120);
            if (var_1591 == 1 || var_1591 == 3 || var_1591 == 5 || var_1591 == 7) {
                pos(180, 125);
            }
            gcopy(3, 600, 80, 40, 40);
        }
        if (var_1592 >= 1) {
            pos(160, 160 - 10);
            if (var_1592 == 3 || var_1592 == 32) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 20);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 4 || var_1592 == 31) {
                color(0, 0, 0);
    
                gmode(mode = 4, data2 = null, data3 = null, alpha = 60);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 5 || var_1592 == 30) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 6 || var_1592 == 29) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 120);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 7 || var_1592 == 28) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 160);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 8 || var_1592 == 27) {
                color(0, 0, 0);
        
                gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 9 || var_1592 == 26) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 230);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 10) {
                pos(160, 160 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(160, 180 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 11) {
                pos(160, 180 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(160, 200 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 12) {
                pos(160, 200 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(140, 200 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 13) {
                pos(140, 200 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(120, 180 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 14) {
                pos(120, 180 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(120, 160 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 15) {
                pos(120, 160 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(120, 140 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 16) {
                pos(120, 140 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(140, 120 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 17) {
                pos(140, 120 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(160, 120 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 18) {
                pos(160, 120 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(180, 120 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 19) {
                pos(180, 120 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(200, 140 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 20) {
                pos(200, 140 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(200, 160 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 21) {
                pos(200, 160 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(200, 180 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 22) {
                pos(200, 180 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(180, 200 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 23) {
                pos(180, 200 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(160, 200 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 24) {
                pos(160, 200 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(160, 180 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
            if (var_1592 == 25) {
                pos(160, 180 - 10);
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
                pos(160, 160 - 10);
                gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                gcopy(bufferid_stand_disc, 200, 280, 40, 40);
            }
        }
        if (var_1593 >= 1) {
            pos(160, 160);
            if (var_1593 >= 0 && var_1593 < 2) {
                gcopy(14, 40, 0, 40, 40);
            }
            if (var_1593 >= 2 && var_1593 < 4) {
                gcopy(14, 80, 0, 40, 40);
            }
            if (var_1593 >= 4 && var_1593 < 6) {
                gcopy(14, 120, 0, 40, 40);
            }
            if (var_1593 >= 6 && var_1593 < 8) {
                gcopy(14, 80, 0, 40, 40);
            }
            if (var_1593 >= 8 && var_1593 < 10) {
                gcopy(14, 40, 0, 40, 40);
            }
        }
        if (var_1594 >= 1) {
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                var_1595 = rnd(680);
                var_1596 = rnd(280);
                var_1597 = rnd(100);
                var_1597 = var_1597 + 100;
                color(80, 80, 80);
                line(var_1595, var_1596, var_1595, var_1596 + var_1597);
            }
        }
        if (var_1598 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(170, 150);
            if (var_1598 >= 1 && var_1598 < 1) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(11, 0, 1200, 40, 40);
            }
            if (var_1598 >= 1 && var_1598 < 2) {
                gcopy(11, 0, 1200, 40, 40);
            }
            if (var_1598 >= 2 && var_1598 < 3) {
                gcopy(11, 40, 1200, 40, 40);
            }
            if (var_1598 >= 3 && var_1598 < 4) {
                gcopy(11, 80, 1200, 40, 40);
            }
            if (var_1598 >= 4 && var_1598 < 5) {
                gcopy(11, 80, 1200, 40, 40);
            }
            if (var_1598 >= 5 && var_1598 < 15) {
                gcopy(11, 80, 1200, 40, 40);
            }
            if (var_1598 >= 16 && var_1598 < 18) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(11, 80, 1200, 40, 40);
            }
            if (var_1598 >= 18 && var_1598 < 20) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(11, 80, 1200, 40, 40);
            }
        }
        if (var_1599 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(170, 150);
            if (var_1599 >= 1 && var_1599 < 1) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 0, 1480, 40, 40);
            }
            if (var_1599 >= 1 && var_1599 < 2) {
                gcopy(bufferid_stand_disc, 0, 1480, 40, 40);
            }
            if (var_1599 >= 2 && var_1599 < 3) {
                gcopy(bufferid_stand_disc, 40, 1480, 40, 40);
            }
            if (var_1599 >= 3 && var_1599 < 4) {
                gcopy(bufferid_stand_disc, 80, 1480, 40, 40);
            }
            if (var_1599 >= 4 && var_1599 < 5) {
                gcopy(bufferid_stand_disc, 80, 1480, 40, 40);
            }
            if (var_1599 >= 5 && var_1599 < 15) {
                gcopy(bufferid_stand_disc, 80, 1480, 40, 40);
            }
            if (var_1599 >= 16 && var_1599 < 18) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 80, 1480, 40, 40);
            }
            if (var_1599 >= 18 && var_1599 < 20) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(bufferid_stand_disc, 80, 1480, 40, 40);
            }
        }
        if (var_1600 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(170, 150);
            if (var_1600 >= 1 && var_1600 < 1) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 0, 440, 40, 40);
            }
            if (var_1600 >= 1 && var_1600 < 2) {
                gcopy(bufferid_stand_disc, 0, 440, 40, 40);
            }
            if (var_1600 >= 2 && var_1600 < 3) {
                gcopy(bufferid_stand_disc, 40, 440, 40, 40);
            }
            if (var_1600 >= 3 && var_1600 < 4) {
                gcopy(bufferid_stand_disc, 80, 440, 40, 40);
            }
            if (var_1600 >= 4 && var_1600 < 5) {
                gcopy(bufferid_stand_disc, 80, 440, 40, 40);
            }
            if (var_1600 >= 5 && var_1600 < 15) {
                gcopy(bufferid_stand_disc, 80, 440, 40, 40);
            }
            if (var_1600 >= 16 && var_1600 < 18) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                gcopy(bufferid_stand_disc, 80, 440, 40, 40);
            }
            if (var_1600 >= 18 && var_1600 < 20) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
                gcopy(bufferid_stand_disc, 80, 440, 40, 40);
            }
        }
        if (var_1601 >= 1) {
            var_1602 = 250 - var_1601;
            color(0, 0, 0);
            gmode(4, null, null, var_1602);
            pos(200, 100 - var_1601);
            gcopy(3, 920, 80, 40, 40);
            pos(120, 180 - var_1601);
            gcopy(3, 960, 80, 40, 40);
            pos(200, 200 - var_1601);
            gcopy(3, 1000, 80, 40, 40);
            pos(230, 220 - var_1601);
            gcopy(3, 1040, 80, 40, 40);
            pos(160, 160 - var_1601);
            gcopy(3, 1080, 80, 40, 40);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(0, 0);
            gcopy(8, 0, 100, 340, 340);
        }
        if (var_1603 >= 1) {
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos((var_455 - var_66 + 4) * 40, (var_456 - var_67 + 4) * 40 - 10);
            gcopy(3, 720, 520, 40, 40);
        }
        if (var_1604 >= 1) {
            if (var_1604 == 0 || var_1604 == 2 || var_1604 == 4 || var_1604 == 6 || var_1604 == 8 || var_1604 == 10) {
                pos(var_1605 + 5, var_1606);
            }
            if (var_1604 == 1 || var_1604 == 3 || var_1604 == 5 || var_1604 == 7 || var_1604 == 9 || var_1604 == 11) {
                pos(var_1605, var_1606);
            }
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(3, 840, 80, 40, 40);
        }
        return;
    });
}
function func355(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(355);
        pos(160, 150);
        if (var_1213 == 1) {
            if (var_199 == 2) {
                pos(160, 170);
            }
            if (var_199 == 8) {
                pos(160, 120);
            }
            if (var_199 == 4) {
                pos(130, 150);
            }
            if (var_199 == 6) {
                pos(190, 150);
            }
            if (var_199 == 1) {
                pos(130, 170);
            }
            if (var_199 == 3) {
                pos(190, 170);
            }
            if (var_199 == 7) {
                pos(130, 120);
            }
            if (var_199 == 9) {
                pos(190, 120);
            }
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
            if (var_1189 == 1 || var_1189 == 2) {
                gcopy(3, 760, 280, 40, 40);
            }
            if (var_1189 == 3 || var_1189 == 4) {
                gcopy(3, 800, 280, 40, 40);
            }
            if (var_1189 == 5 || var_1189 == 6) {
                gcopy(3, 840, 280, 40, 40);
            }
        }
        return;
    });
}

function func356(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(356);
        var_1607 = 1;
        var_1608 = 1;
        if (var_1609 == 1) {
            var_1607 = var_1610;
        }
        yield func366();
        if (var_1038 == 0) {
            yield func362();
            return;
        }
        yield func361();
        return;
    });
}

function func357(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(357);
        var_511 = 1;
        var_1611 = 19;
        var_1612 = 45;
        var_1613 = 1;
        yield func358();
        return;
    });
}
function func358(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(358);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (var_255 == 1 && var_1613 > 1) {

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            var_1613 = var_1613 - 1;
            var_1612 = var_1612 - 16;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func358();
            return;
        }
        if (var_255 == 1 && var_1613 == 1) {

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            var_1613 = 7;
            var_1612 = 141;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func358();
            return;
        }
        if (var_259 == 1 && var_1613 < 7) {

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            var_1613 = var_1613 + 1;
            var_1612 = var_1612 + 16;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func358();
            return;
        }
        if (var_259 == 1 && var_1613 == 7) {

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            var_1613 = 1;
            var_1612 = 45;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func358();
            return;
        }
        if (key_Z_on == 1 || key_A_on == 1) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func359();
            yield func051();
            if (var_1614 == 0) {
                var_1615 = 1;
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_1615 = 0;
                yield func358();
                return;
            }
            var_508 = 0; // Mフラグ:資料(設定画面) func058
            var_499 = 0; // Mフラグ:設定画面 func056
            var_511 = 0;
            var_502 = 1;
            yield func361();
            return;
        }
        if (key_X_on == 1) {
            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            var_502 = 0;
            var_508 = 1; // Mフラグ:資料(設定画面) func058
            var_499 = 1; // Mフラグ:設定画面 func056
            var_511 = 0;
            yield func051();
            yield func057();
            return;
        }
        yield func358();
        return;
    });
}
// 敵図鑑の並び処理
function func359(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(359);
        var_1616 = dim(300);
        var_1614 = 0;
        var_1617 = 1;
        var_1618 = 1;
        for (let cnt1 = 0; cnt1 < var_1038; ++cnt1) {
            enemy_list = var_989[var_1618];
            yield func626();
            if (var_1613 == 1 && var_1619 >= 100 && var_1619 < 200) {
                var_1616[var_1617] = var_989[var_1618];
                var_1614++;
                var_1617++;
            }
            if (var_1613 == 2 && var_1619 >= 200 && var_1619 < 300) {
                var_1616[var_1617] = var_989[var_1618];
                var_1614++;
                var_1617++;
            }
            if (var_1613 == 3 && var_1619 >= 300 && var_1619 < 400) {
                var_1616[var_1617] = var_989[var_1618];
                var_1614++;
                var_1617++;
            }
            if (var_1613 == 4 && var_1619 >= 400 && var_1619 < 500) {
                var_1616[var_1617] = var_989[var_1618];
                var_1614++;
                var_1617++;
            }
            if (var_1613 == 5 && var_1619 >= 500 && var_1619 < 600) {
                var_1616[var_1617] = var_989[var_1618];
                var_1614++;
                var_1617++;
            }
            if (var_1613 == 6 && var_1619 >= 600 && var_1619 < 700) {
                var_1616[var_1617] = var_989[var_1618];
                var_1614++;
                var_1617++;
            }
            if (var_1613 == 7 && var_1619 >= 800 && var_1619 < 900) {
                var_1616[var_1617] = var_989[var_1618];
                var_1614++;
                var_1617++;
            }
            var_1618++;
        }
        if (var_1614 == 0) {
            return;
        }
        if (var_1614 >= 2) {
            var_1620 = var_1614;
            var_1621 = var_1614 - 1;
            var_1622 = 0;
            for (let cnt2 = 0; cnt2 < var_1614; ++cnt2) {
                var_1620 = var_1614;
                var_1621 = var_1614 - 1;
                for (let cnt3 = 0; cnt3 < var_1614; ++cnt3) {
                    var_1623 = 0;
                    enemy_list = var_1616[var_1620];
                    yield func626();
                    var_1624 = var_1619;
                    enemy_list = var_1616[var_1621];
                    yield func626();
                    var_1625 = var_1619;
                    if (var_1624 < var_1625) {
                        var_1626 = var_1616[var_1620];
                        var_1616[var_1620] = var_1616[var_1621];
                        var_1616[var_1621] = var_1626;
                    }
                    var_1620 = var_1620 - 1;
                    var_1621 = var_1621 - 1;
                    if (var_1621 <= 0 || var_1620 <= 0) {
                        break;
                    }
                }
                var_1622++;
                if (var_1622 > var_1614) {
                    break;
                }
            }
        }
        var_1607 = 1;
        var_1608 = 1;
        yield func365();
        return;
    });
}
// 敵図鑑機能
function func360(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(360);
        var_1627 = 30;
        var_1628 = 40;
        var_1629 = 35;
        var_1630 = 80;
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(12 + var_1629, 37 + var_1630);
        gcopy(12, 0, 0, 213 + var_1628, 103 + var_1627);
        color(255, 255, 255);
        line(15 + var_1629, 39 + var_1630, 220 + var_1628 + var_1629, 39 + var_1630);
        line(15 + var_1629, 136 + var_1627 + var_1630, 220 + var_1628 + var_1629, 136 + var_1627 + var_1630);
        line(14 + var_1629, 40 + var_1630, 14 + var_1629, 134 + var_1627 + var_1630);
        line(222 + var_1628 + var_1629, 40 + var_1630, 222 + var_1628 + var_1629, 134 + var_1627 + var_1630);
        pset(15 + var_1629, 40 + var_1630);
        pset(221 + var_1628 + var_1629, 40 + var_1630);
        pset(15 + var_1629, 135 + var_1627 + var_1630);
        pset(221 + var_1628 + var_1629, 135 + var_1627 + var_1630);

        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        color(255, 255, 255);
        pos(33 + var_1629, 47 + var_1630);
        mes("第一部　ﾌｧﾝﾄﾑ･ﾌﾞﾗｯﾄﾞ");
        mes("第二部　戦闘潮流");
        mes("第三部　ｽﾀｰﾀﾞｽﾄ･ｸﾙｾｲﾀﾞｰｽ");
        mes("第四部　ﾀﾞｲﾔﾓﾝﾄﾞは砕けない");
        mes("第五部　黄金の風");
        mes("第六部　ｽﾄｰﾝ･ｵｰｼｬﾝ");
        mes("その他");
        color(255, 255, 255);

        font("MS ゴシック", 16, 1);
        pos(var_1611 + var_1629, var_1612 + var_1630);
        mes(">");
        pos(var_1611 + 1 + var_1629, var_1612 + var_1630);
        mes(">");
        pos(var_1611 + 2 + var_1629, var_1612 + var_1630);
        mes(">");
        if (var_1615 == 1) {
            var_1631 = 40;
            var_1632 = 260;
            var_1633 = 260;
            var_1634 = 20;
            var_1635 = 10;
            var_1636 = 10;
            color(0, 0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(var_1631 - var_1635 - 3, var_1632 - var_1636 - 2);
            gcopy(12, 0, 0, var_1633 + var_1635 + var_1635 + 8, var_1634 + var_1636 + var_1636 + 5);
            color(255, 255, 255);
            line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
            line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
            line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
            line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
            pset(var_1631 - var_1635, var_1632 - var_1636);
            pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
            pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
            pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
            pos(var_1631 + 10, var_1632 + 5);
            color(255, 0, 0);
    
            font("ＭＳ Ｐゴシック", 14, 1);
            mes("登録されているキャラクターがいません");
        }
        return;
    });
}
function func361(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(361);
        yield func080(); // 各キー入力確認
        if (var_12 == 1) {
            conf_keyon = getkey(121); // キーF10入力確認
            if (conf_keyon == 1) {
                var_1038 = 200;
                for (let cnt3 = 0; cnt3 < 200; ++cnt3) {
                    var_989[cnt3] = cnt3;
                }
                var_1610 = 1;
                var_1607 = 1;
                var_1608 = 1;
                yield func365();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func361();
                return;
            }
            conf_keyon = getkey(122); // キーF11入力確認
            if (conf_keyon == 1) {
                var_1038 = 1;
                for (let cnt3 = 0; cnt3 < 200; ++cnt3) {
                    var_989[cnt3] = 0;
                }
                var_989[1] = 1;
                var_1610 = 1;
                var_1607 = 1;
                var_1608 = 1;
                yield func365();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func361();
                return;
            }
        }
        if (var_1609 == 0) {
            if (var_254 == 1 && var_1607 > 1) {

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                var_1607 = var_1607 - 1;
                var_1608 = 1;
                yield func365();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func361();
                return;
            }
            if (var_254 == 1 && var_1607 == 1) {

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                var_1607 = var_1614;
                var_1608 = 1;
                yield func365();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func361();
                return;
            }
            if (var_257 == 1 && var_1607 < var_1614) {

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                var_1607 = var_1607 + 1;
                var_1608 = 1;
                yield func365();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func361();
                return;
            }
            if (var_257 == 1 && var_1607 >= var_1614) {

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                var_1607 = 1;
                var_1608 = 1;
                yield func365();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func361();
                return;
            }
        }
        if (key_X_on == 1 && var_1609 == 0) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            var_502 = 0;
            var_508 = 1; // Mフラグ:資料(設定画面) func058
            var_499 = 1; // Mフラグ:設定画面 func056
            var_511 = 1;
            yield func051();
            yield func358();
            return;
        }
        if (key_X_on == 1 && var_1609 == 1) {
            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            var_502 = 0;
            var_1609 = 0;
            yield func513(); // 射撃discヘブンズドアーの発動時メッセージ
            return;
        }
        if (key_A_on == 1) {
            var_83[299].Var8 = 1;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[299].Var8 = 0;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func361();
            return;
        }
        if (key_Z_on == 1 || key_A_on == 1) {
            enemy_list = var_83[299].Var0;
            yield func626();
            var_743 = 0; //スタンド像付与フラグOFF
            if (var_1637 == 1) { // 攻撃モーションにスタンド像を付与するフラグがONの場合
                var_743 = 1; //スタンド像付与フラグON
            }
            if (enemy_list == 30 || enemy_list == 46) {
                var_83[299].Var21 = 1;
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    var_411 = 2;
                    yield func337(); // メッセージ関係呼び出し
                    var_411 = 3;
                    yield func337(); // メッセージ関係呼び出し
                }
                var_411 = 1;
                yield func337(); // メッセージ関係呼び出し
                var_83[299].Var21 = 0;
                var_411 = 0;
            }
            var_742 = 1;
            var_764 = 2;
            var_763 = 4;
            var_83[299].Var7 = 1;
            if (enemy_list == 93 || enemy_list == 7 || enemy_list == 141 || enemy_list == 99 || enemy_list == 56 || enemy_list == 48 || enemy_list == 46 || enemy_list == 30 || enemy_list == 21 || enemy_list == 121 || enemy_list == 155 || enemy_list == 151 || enemy_list == 124 || enemy_list == 126 || enemy_list == 40 || enemy_list == 41 || enemy_list == 42) {
                var_83[299].Var18 = 1;
            }
            if (enemy_list == 79 || enemy_list == 91 || enemy_list == 92 || enemy_list == 19 || enemy_list == 90 || enemy_list == 53 || enemy_list == 23 || enemy_list == 65) {
                var_83[299].Var18 = 1;
            }
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_83[299].Var0 == 22 || var_83[299].Var0 == 17 || var_83[299].Var0 == 71) {
                for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
            }
            var_83[299].Var7 = 0;
            var_83[299].Var18 = 0;
            var_743 = 0; //スタンド像付与フラグOFF
            var_742 = 0;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func361();
            return;
        }
        yield func337(); // メッセージ関係呼び出し
        var_83[299].Var32 = var_83[299].Var32 + 1;
        if (var_83[299].Var32 == 12) {
            var_83[299].Var32 = 0;
        }
        var_1608++;
        if (var_1608 == 240) {
            var_1608 = 0;
        }
        yield func361();
        return;
    });
}
function func362(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(362);
        yield func080(); // 各キー入力確認
        if (key_X_on == 1) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            var_502 = 0;
            var_508 = 1; // Mフラグ:資料(設定画面) func058
            var_499 = 1; // Mフラグ:設定画面 func056
            yield func051();
            yield func057();
            return;
        }
        yield func337(); // メッセージ関係呼び出し
        yield func362();
        return;
    });
}

function func363(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(363);
        if (var_1038 == 0) {
            yield func364();
            return;
        }
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(5, 35);
        gcopy(12, 0, 0, 332, 295);
        color(255, 255, 255);
        line(9, 37, 330, 37);
        line(9, 327, 161, 327);
        line(195, 327, 330, 327);
        line(8, 38, 8, 325);
        line(332, 38, 332, 325);
        pset(9, 38);
        pset(331, 38);
        pset(9, 326);
        pset(331, 326);
        pos(170, 320);
        if (var_1607 < 10) {
            pos(175, 320);
        }
        if (var_1607 >= 100) {
            pos(165, 320);
        }
        color(255, 255, 255);

        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        mes(var_1607);
        color(255, 255, 255);
        line(19, 127, 320, 127);
        line(19, 297, 320, 297);
        line(18, 128, 18, 295);
        line(322, 128, 322, 295);
        pset(19, 128);
        pset(321, 128);
        pset(19, 296);
        pset(321, 296);
        line(118, 155, 118, 195);
        line(218, 155, 218, 175);
        line(18, 155, 320, 155);
        line(18, 175, 320, 175);
        line(18, 195, 320, 195);
        line(18, 215, 320, 215);
        if (var_1609 == 0) {
            color(255, 255, 255);
    
            font("ＭＳ ゴシック", 12, 1);
            pos(20, 43);
            if (var_1613 == 1) {
                mes("第一部　ﾌｧﾝﾄﾑ･ﾌﾞﾗｯﾄﾞ");
                mes("" + var_1614 + "/15");
            }
            if (var_1613 == 2) {
                mes("第二部　戦闘潮流");
                mes("" + var_1614 + "/15");
            }
            if (var_1613 == 3) {
                mes("第三部　ｽﾀｰﾀﾞｽﾄ･ｸﾙｾｲﾀﾞｰｽ");
                mes("" + var_1614 + "/41");
            }
            if (var_1613 == 4) {
                mes("第四部　ﾀﾞｲﾔﾓﾝﾄﾞは砕けない");
                mes("" + var_1614 + "/39");
            }
            if (var_1613 == 5) {
                mes("第五部　黄金の風");
                mes("" + var_1614 + "/24");
            }
            if (var_1613 == 6) {
                mes("第六部　ｽﾄｰﾝ･ｵｰｼｬﾝ");
                mes("" + var_1614 + "/23");
            }
            if (var_1613 == 7) {
                mes("その他");
                mes("" + var_1614 + "/4");
            }
        }
        gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        if (var_1608 >= 0 && var_1608 < 30) {
            var_83[299].Var5 = 2;
        }
        if (var_1608 >= 30 && var_1608 < 60) {
            var_83[299].Var5 = 1;
        }
        if (var_1608 >= 60 && var_1608 < 90) {
            var_83[299].Var5 = 4;
        }
        if (var_1608 >= 90 && var_1608 < 120) {
            var_83[299].Var5 = 7;
        }
        if (var_1608 >= 120 && var_1608 < 150) {
            var_83[299].Var5 = 8;
        }
        if (var_1608 >= 150 && var_1608 < 180) {
            var_83[299].Var5 = 9;
        }
        if (var_1608 >= 180 && var_1608 < 210) {
            var_83[299].Var5 = 6;
        }
        if (var_1608 >= 210 && var_1608 < 240) {
            var_83[299].Var5 = 3;
        }
        var_1640 = var_83[299].Var5;
        var_1641 = 299;
        var_1642 = 1;
        var_764 = 4;
        var_763 = 2;
        var_1161 = 1;
        yield func566();
        var_1161 = 0;
        yield func566();
        pos(35, 135);
        color(0, 255, 0);

        font("ＭＳ Ｐゴシック", 14, 1);
        mes("【 " + var_1643 + " 】");
        color(255, 255, 255);

        font("ＭＳ ゴシック", 12, 1);
        pos(35, 160);
        mes("体力　：" + var_1644);
        pos(135, 160);
        mes("攻撃力：" + var_1645);
        pos(235, 160);
        mes("防御力：" + var_1646);
        pos(35, 180);
        mes("経験値：" + var_1647);
        pos(135, 180);
        mes("アイテム所持率：" + var_1648);
        pos(235, 180);
        mes("");
        pos(35, 200);
        mes("タイプ：" + var_1649);
        pos(35, 223);
        mes("能力");
        pos(35, 240);
        mes("" + var_1650);
        mes("" + var_1651);
        mes("" + var_1652);
        mes("" + var_1653);
        pos(25, 305);
        if (var_1038 <= 1 || var_1609 != 0) {
            mes("【Ｚ：攻撃】【Ａ：やられ】");
        }
        if (var_1038 >= 2 && var_1609 == 0) {
            mes("【Ｚ：攻撃】【Ａ：やられ】【←・→：次の敵】");
        }
        return;
    });
}
function func364(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(364);
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(5, 35);
        gcopy(12, 0, 0, 332, 295);
        color(255, 255, 255);
        line(9, 37, 330, 37);
        line(9, 327, 330, 327);
        line(8, 38, 8, 325);
        line(332, 38, 332, 325);
        pset(9, 38);
        pset(331, 38);
        pset(9, 326);
        pset(331, 326);
        pos(55, 150);
        color(255, 255, 255);

        font("ＭＳ Ｐゴシック", 14, 1);
        mes("敵の情報は、まだひとつもありません。");
        mes("「ﾍﾌﾞﾝｽﾞ･ﾄﾞｱｰのDISC」の発動能力を");
        mes("使うと、目の前にいる敵の情報が");
        mes("敵図鑑に追加されます。");
        mes("");
        return;
    });
}
function func365(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(365);
        var_83[299].Var0 = var_1616[var_1607];
        enemy_list = var_1616[var_1607];
        yield func626();
        var_83[299].Var15 = 0;
        // 倍速移動敵の選択
        if (enemy_list == 20 || enemy_list == 39 || enemy_list == 60 || enemy_list == 64 || enemy_list == 101 || enemy_list == 102 || enemy_list == 103 || enemy_list == 104 || enemy_list == 117 || enemy_list == 111 || enemy_list == 96 || enemy_list == 68 || enemy_list == 151 || enemy_list == 168) {
            var_83[299].Var15 = 1;
        }
        var_1643 = enemy_name;
        var_1645 = enemy_power;
        var_1646 = enemy_defence;
        var_1647 = enemy_exp_point;
        var_1644 = enemy_hp;
        var_1648 = "";
        if (var_1654 == 20) {
            var_1648 = "普通";
        }
        if (var_1654 == 999) {
            var_1648 = "かなり低い";
        }
        if (var_1654 == 10) {
            var_1648 = "高い";
        }
        if (var_1654 > 1 && var_1654 < 10) {
            var_1648 = "かなり高い";
        }
        if (var_1654 == 1) {
            var_1648 = "必ず落とす";
        }
        if (var_972 == 0) {
            var_1649 = "無し";
        }
        if (var_972 == 1) {
            var_1649 = "人間";
        }
        if (var_972 == 2) {
            var_1649 = "吸血鬼";
        }
        if (var_972 == 3) {
            var_1649 = "スタンド";
        }
        if (var_972 == 4) {
            var_1649 = "味方";
        }
        if (var_972 == 5) {
            var_1649 = "味方";
        }
        if (var_972 == 6) {
            var_1649 = "動物・杜王町住人";
        }
        if (var_972 == 7) {
            var_1649 = "人間・杜王町住人";
        }
        if (var_972 == 8) {
            var_1649 = "スタンド・杜王町住人";
        }
        if (var_972 == 9) {
            var_1649 = "人間・裏切り者";
        }
        if (var_972 == 10) {
            var_1649 = "スタンド・裏切り者";
        }
        if (enemy_list == 131 || enemy_list == 132) { // No = 131 ジョルノ、No = 132 レクイエムジョルノ
            var_1649 = var_1649 + "・新入り";
        }
        // No = 132 レクイエムジョルノ
        // Ver0.1403にて追加。No = 171 離婚した承太郎
        if (enemy_list == 147 || enemy_list == 134 || enemy_list == 119 || enemy_list == 35 || enemy_list == 135 || enemy_list == 120 || enemy_list == 128 || enemy_list == 140 || enemy_list == 68 || enemy_list == 131 || enemy_list == 132 || enemy_list == 171) {
            var_1649 = var_1649 + "・ｼﾞｮｰｽﾀｰ";
        }
        if (enemy_list == 141 || enemy_list == 134 || enemy_list == 99 || enemy_list == 72 || enemy_list == 80 || enemy_list == 148 || enemy_list == 153 || enemy_list == 154 || enemy_list == 156 || enemy_list == 157 || enemy_list == 159 || enemy_list == 93 || enemy_list == 96 || enemy_list == 98) {
            var_1649 = var_1649 + "・囚人";
        }
        if (enemy_list == 15) {
            var_1649 = "鳥公";
        }
        if (enemy_list == 89) {
            var_1649 = "猿";
        }
        if (enemy_list == 37) {
            var_1649 = "猫";
        }
        if (enemy_list == 90) {
            var_1649 = "岩";
        }
        if (enemy_list == 31) {
            var_1649 = "幽霊・杜王町住人";
        }
        if (enemy_list == 6 || enemy_list == 22) {
            var_1649 = "人形";
        }
        if (enemy_list == 8 || enemy_list == 24 || enemy_list == 25 || enemy_list == 23) {
            var_1649 = "死体";
        }
        if (enemy_list == 62 || enemy_list == 63 || enemy_list == 85 || enemy_list == 64 || enemy_list == 106 || enemy_list == 107) {
            var_1649 = var_1649 + "・暗殺ﾁｰﾑ";
        }
        if (enemy_list == 27 || enemy_list == 97 || enemy_list == 58 || enemy_list == 14 || enemy_list == 15 || enemy_list == 38 || enemy_list == 155 || enemy_list == 129) {
            var_1649 = var_1649 + "・九柱神";
        }
        var_1650 = enemy_description;
        var_1651 = var_1656;
        var_1652 = var_1657;
        var_1653 = var_1658;
        return;
    });
}
// 敵図鑑(各敵の分類)
function func366(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(366);
        var_83[299].Var0 = var_989[var_1607];
        enemy_list = var_989[var_1607];
        yield func626();
        var_83[299].Var15 = 0;
        // 倍速移動敵の選択
        if (enemy_list == 20 || enemy_list == 39 || enemy_list == 60 || enemy_list == 64 || enemy_list == 101 || enemy_list == 102 || enemy_list == 103 || enemy_list == 104 || enemy_list == 117 || enemy_list == 111 || enemy_list == 96 || enemy_list == 68 || enemy_list == 151 || enemy_list == 168) {
            var_83[299].Var15 = 1;
        }
        var_1643 = enemy_name;
        var_1645 = enemy_power;
        var_1646 = enemy_defence;
        var_1647 = enemy_exp_point;
        var_1644 = enemy_hp;
        var_1648 = "";
        if (var_1654 == 20) {
            var_1648 = "普通";
        }
        if (var_1654 == 999) {
            var_1648 = "かなり低い";
        }
        if (var_1654 == 10) {
            var_1648 = "高い";
        }
        if (var_1654 > 1 && var_1654 < 10) {
            var_1648 = "かなり高い";
        }
        if (var_1654 == 1) {
            var_1648 = "必ず落とす";
        }
        if (var_972 == 0) {
            var_1649 = "無し";
        }
        if (var_972 == 1) {
            var_1649 = "人間";
        }
        if (var_972 == 2) {
            var_1649 = "吸血鬼";
        }
        if (var_972 == 3) {
            var_1649 = "スタンド";
        }
        if (var_972 == 4) {
            var_1649 = "味方";
        }
        if (var_972 == 5) {
            var_1649 = "味方";
        }
        if (var_972 == 6) {
            var_1649 = "動物・杜王町住人";
        }
        if (var_972 == 7) {
            var_1649 = "人間・杜王町住人";
        }
        if (var_972 == 8) {
            var_1649 = "スタンド・杜王町住人";
        }
        if (var_972 == 9) {
            var_1649 = "人間・裏切り者";
        }
        if (var_972 == 10) {
            var_1649 = "スタンド・裏切り者";
        }
        if (enemy_list == 131 || enemy_list == 132) { // No = 131 ジョルノ、No = 132 レクイエムジョルノ
            var_1649 = var_1649 + "・新入り";
        }
        // No = 132 レクイエムジョルノ
        // Ver0.1403にて追加。No = 171 離婚した承太郎
        if (enemy_list == 147 || enemy_list == 134 || enemy_list == 119 || enemy_list == 35 || enemy_list == 135 || enemy_list == 120 || enemy_list == 128 || enemy_list == 140 || enemy_list == 68 || enemy_list == 131 || enemy_list == 132 || enemy_list == 171) {
            var_1649 = var_1649 + "・ｼﾞｮｰｽﾀｰ";
        }
        if (enemy_list == 141 || enemy_list == 134 || enemy_list == 99 || enemy_list == 72 || enemy_list == 80 || enemy_list == 148 || enemy_list == 153 || enemy_list == 154 || enemy_list == 156 || enemy_list == 157 || enemy_list == 159 || enemy_list == 93 || enemy_list == 96 || enemy_list == 98) {
            var_1649 = var_1649 + "・囚人";
        }
        if (enemy_list == 15) {
            var_1649 = "鳥公";
        }
        if (enemy_list == 89) {
            var_1649 = "猿";
        }
        if (enemy_list == 37) {
            var_1649 = "猫";
        }
        if (enemy_list == 90) {
            var_1649 = "岩";
        }
        if (enemy_list == 31) {
            var_1649 = "幽霊・杜王町住人";
        }
        if (enemy_list == 6 || enemy_list == 22) {
            var_1649 = "人形";
        }
        if (enemy_list == 8 || enemy_list == 24 || enemy_list == 25 || enemy_list == 23) {
            var_1649 = "死体";
        }
        var_1650 = enemy_description;
        var_1651 = var_1656;
        var_1652 = var_1657;
        var_1653 = var_1658;
        return;
    });
}


function func367(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(367);
        color(0, 0, 0);
        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(5, 35);
        gcopy(12, 0, 0, 332, var_801 - 30);
        color(255, 255, 255);
        line(9, 37, 330, 37);
        line(9, var_801, 330, var_801);
        line(8, 38, 8, var_801 - 2);
        line(332, 38, 332, var_801 - 2);
        pset(9, 38);
        pset(331, 38);
        pset(9, var_801 - 1);
        pset(331, var_801 - 1);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        var_1659 = 0;
        if (var_802 >= 100 && var_802 < 600) {
            var_1659 = 1;
        }
        if (var_802 == 700) {
            var_1659 = 1;
        }
        if (var_1659 == 1) {
            pos(285, 45);
            gcopy(9, 360, 0, 40, 20);
        }
        if (var_802 == 100 || var_802 == 108 || var_802 == 110 || var_802 == 113 || var_802 == 118 || var_802 == 123 || var_802 == 398) {
            if (var_862[var_802][0] != 0) {
                pos(285, 70);
                gcopy(9, 360, 20, 40, 20);
            }
        }
        pos(20, 45);
        belongings_item_list = var_802;
        disc_rarity = var_1660;
        var_1248 = var_1660;
        yield func492(); // アイテムリスト呼び出し
        if (var_802 < 100 || var_802 >= 400) {
            yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
        }
        if (var_802 >= 100 && var_802 < 400) {
            if (var_1661 == 0) {
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            if (var_1661 == 1) {
                item_icon_id = var_802;
                yield func070(); // アイテムの表示用アイコン座標指定
                if (var_1660 == 0) {
                    buffer_id = 11; // buffer(11)は"img_stand0.gif"
                }
                if (var_1660 == 1) {
                    buffer_id = 1; // buffer(1)は"img_stand1.gif"
                }
                if (var_1660 == 2) {
                    buffer_id = 16;  // buffer(16)は"img_stand2.gif"
                }
                if (var_1660 == 3) {
                    buffer_id = 29; // buffer(29)は"img_stand3.gif"
                }
                pos(20, 50);
                // 各スタンドごとのアイコン表示を指定 func070
                gcopy(buffer_id, buffer_x_axis, buffer_y_axis, 40, 40);
            }
        }
        pos(70, 65);
        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        if (var_802 == 1) {
            color(255, 255, 255);
            mes("" + var_1660 + "G");
        }
        if (var_802 >= 100 && var_802 < 400) {
            if (var_1661 == 0) {
                color(0, 190, 0);
                mes(item_name);
            }
            if (var_1661 == 1) {
                color(0, 255, 0);
                if (item_modified_value == 0 && number_of_abilities <= 1) {
                    mes(item_name);
                }
                if (item_modified_value == 0 && number_of_abilities > 1) {
                    mes("" + item_name + " ★" + number_of_abilities);
                }
                if (item_modified_value > 0 && number_of_abilities <= 1) {
                    mes("" + item_name + "+" + item_modified_value);
                }
                if (item_modified_value > 0 && number_of_abilities > 1) {
                    mes("" + item_name + "+" + item_modified_value + " ★" + number_of_abilities);
                }
            }
        }
        if (var_802 >= 400 && var_802 < 500) {
            color(225, 195, 145);
            mes("" + item_name + "(" + var_1662 + ")");
        }
        if (var_802 >= 500 && var_802 < 600) {
            color(255, 255, 255);
            if (var_862[var_802][0] == 0 && dangeon_number != 0 && dangeon_number != 1 && dangeon_number != 99) {
                color(200, 200, 200);
            }
            mes(item_name);
        }
        if (var_802 >= 600 && var_802 < 700) {
            color(255, 255, 255);
            mes(item_name);
        }
        if (var_802 >= 700 && var_802 < 750) {
            color(255, 255, 255);
            mes(item_name);
        }
        if (var_802 >= 800 && var_802 < 900) {
            color(0, 255, 255);
            if (var_862[var_802][0] == 0 && dangeon_number != 0 && dangeon_number != 1 && dangeon_number != 99) {
                color(0, 170, 170);
            }
            mes("" + item_name + "(" + var_1663 + ")");
        }
        if (var_802 >= 750 && var_802 < 800) {
            color(255, 255, 255);
            mes(item_name);
        }
        if (var_802 >= 900 && var_802 < 1000) {
            color(255, 255, 255);
            mes(item_name);
        }
        if (var_805 == 1 && var_1661 == 1) {
            pos(62, 73);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(8, 40, 50, 10, 10);
        }
        if (var_805 == 2 && var_1661 == 1) {
            pos(61, 74);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            gcopy(8, 40, 80, 10, 10);
        }
        color(255, 255, 255);
        font(font_type = "ＭＳ Ｐゴシック", font_size = 14, font_style = 1);
        pos(30, 100);

        if (var_802 < 100 || var_802 >= 400) {
            mes(item_description1);
        }
        if (var_802 >= 100 && var_802 < 400 && var_862[var_802][0] == 1) {
            if (var_1661 == 0) {
                mes("" + item_description1);
            }
            if (var_1661 == 1) {
                mes("" + item_description1 + "　空き容量 " + free_space_value);
            }
        }
        // 装備、射撃disc
        if (var_802 >= 100 && var_802 < 400 && var_862[var_802][0] == 0) {
            mes("" + item_description1);
        }
        pos(30, 120);
        mes(effects_message);

        if (var_802 < 100 || var_802 >= 400) {
            pos(30, 140);
            color(255, 255, 255);
            mes(item_ability_description);
        }

        if (var_802 >= 100 && var_802 < 400 && var_862[var_802][0] != 0) {
            var_1664 = 0;
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (dangeon_number == 5 && var_1661 == 0 && var_1660 >= 1) {
                var_1664 = 1;
            }
            track_number = 1;
            for (let cnt2 = 0; cnt2 < var_810 + free_space_value; ++cnt2) {
                pos(30, track_number * 20 + 120);
                color(255, 255, 255);
                font("MS UI ゴシック", 12, 1);
                mes("Track" + track_number + ":");
                track_number = track_number + 1;
            }
            track_number = 1;
            var_1665 = 0;
            for (let cnt2 = 0; cnt2 < var_810 + free_space_value; ++cnt2) {
                pos(30 + 50, track_number * 20 + 120);
                belongings_item_list = var_811[track_number];
                yield func492(); // アイテムリスト呼び出し
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
                if (var_813[track_number] == "こわれるぞ。") {
                    color(255, 255, 255);
                    if (var_1666 >= 10 && var_1666 <= 15) {
                        color(255, 150, 150);
                    }
                    if (var_1666 >= 16 && var_1666 <= 21) {
                        color(255, 100, 100);
                    }
                    if (var_1666 >= 22 && var_1666 <= 24) {
                        color(255, 50, 50);
                    }
                    if (var_1666 >= 25 && var_1666 <= 27) {
                        color(255, 0, 0);
                    }
                    if (var_1666 >= 28 && var_1666 <= 30) {
                        color(200, 0, 0);
                    }
                    if (var_1666 >= 31) {
                        color(150, 0, 0);
                    }
                }
        
                font("ＭＳ ゴシック", 14, 1);
                if (var_1664 == 0) {
                    if (var_813[track_number] != "") {
                        mes("" + var_813[track_number]);
                    }
                    if (var_813[track_number] == "") {
                        mes("空き");
                    }
                }
                if (var_1664 == 1) {
                    if (track_number == 1) {
                        mes("" + var_813[track_number]);
                    }
                    if (track_number != 1) {
                        color(255, 255, 255);
                        mes("？？？？？？？？？");
                    }
                }
                track_number = track_number + 1;
            }
        }
        return;
    });
}

// アイテム欄の呼び出し関数
function func368(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(368);
        var_1667 = belongings_item_list;
        var_1668 = var_220;
        var_1669 = var_231;
        var_802 = belongings_item_list;
        var_1670 = var_225;
        yield func492(); // アイテムリスト呼び出し

        // アイテム欄を開いていなければ？
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            var_814 = var_233[var_225].Var0;
            var_1662 = var_233[var_225].Var3;
            item_modified_value = var_233[var_225].Var4;
            free_space_value = var_233[var_225].Var5;
            var_1671 = var_233[var_225].Var6;
            var_1663 = var_233[var_225].Var7;
            var_1672 = var_233[var_225].Var11;
            var_805 = var_233[var_225].Var12;
            var_1660 = var_233[var_225].Var13;
            var_1661 = var_233[var_225].Var14;
            var_1673 = var_233[var_225].Var15;
            var_1674 = var_233[var_225].Var16;
            var_1675 = var_233[var_225].Var17;
            var_1666 = var_233[var_225].Var18;
            var_810 = var_233[var_225].Var19;
            var_815 = var_233[var_225].Var20;
            var_816 = var_233[var_225].Var21;
            var_817 = var_233[var_225].Var22;
            var_818 = var_233[var_225].Var23;
            var_819 = var_233[var_225].Var24;
            var_820 = var_233[var_225].Var25;
            var_821 = var_233[var_225].Var26;
            var_822 = var_233[var_225].Var27;
            var_823 = var_233[var_225].Var28;
            var_824 = var_233[var_225].Var29;
        }
        // アイテム欄を開いていれば？
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            var_814 = var_486[var_682][var_225][0];
            var_1662 = var_486[var_682][var_225][3];
            item_modified_value = var_486[var_682][var_225][4];
            free_space_value = var_486[var_682][var_225][5];
            var_1671 = var_486[var_682][var_225][6];
            var_1663 = var_486[var_682][var_225][7];
            var_1672 = var_486[var_682][var_225][11];
            var_805 = var_486[var_682][var_225][12];
            var_1660 = var_486[var_682][var_225][13];
            var_1661 = var_486[var_682][var_225][14];
            var_1673 = var_486[var_682][var_225][15];
            var_1674 = var_486[var_682][var_225][16];
            var_1675 = var_486[var_682][var_225][17];
            var_1666 = var_486[var_682][var_225][18];
            var_810 = var_486[var_682][var_225][19];
            var_815 = var_486[var_682][var_225][20];
            var_816 = var_486[var_682][var_225][21];
            var_817 = var_486[var_682][var_225][22];
            var_818 = var_486[var_682][var_225][23];
            var_819 = var_486[var_682][var_225][24];
            var_820 = var_486[var_682][var_225][25];
            var_821 = var_486[var_682][var_225][26];
            var_822 = var_486[var_682][var_225][27];
            var_823 = var_486[var_682][var_225][28];
            var_824 = var_486[var_682][var_225][29];
        }

        number_of_abilities = var_810;
        if (var_814 >= 100 && var_814 < 400) {
            yield func370();
        }
        belongings_item_list = var_802;
        yield func492(); // アイテムリスト呼び出し
        var_801 = 170;
        if (var_814 == 104) {
            var_801 = 190;
        }
        if (var_814 >= 100 && var_814 < 400) {
            var_801 = (var_810 + free_space_value - 2) * 19 + 190;
        }
        if (var_862[var_814][0] == 0) {
            var_801 = 170;
        }
        if (var_1208 == 2) {
            var_1208 = 1;
            yield func527();
            return;
        }
        yield func369();
    });
}


function func369(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(369);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (key_X_on == 1) {
            var_1209 = 0;
            open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            var_221 = 1;

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func462(); // アイテムidごとに区分分け関数
            return;
        }
        if (var_802 == 9999 && var_802 >= 100 && var_802 < 400 && var_1661 == 1) {
            if (var_257 == 1) {
                var_1660++;
                if (var_1660 > 3) {
                    var_1660 = 0;
                }
                if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    var_233[var_225].Var13 = var_1660;
                    if (var_225 == 0) {
                        var_1676 = var_77[var_66][var_67];
                        var_78[var_1676].Var13 = var_1660;
                    }
                }
                if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                    var_486[var_682][var_225][13] = var_1660;
                }

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func369();
                return;
            }
            if (var_254 == 1) {
                var_1660--;
                if (var_1660 < 0) {
                    var_1660 = 3;
                }
                if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    var_233[var_225].Var13 = var_1660;
                    if (var_225 == 0) {
                        var_1676 = var_77[var_66][var_67];
                        var_78[var_1676].Var13 = var_1660;
                    }
                }
                if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                    var_486[var_682][var_225][13] = var_1660;
                }

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func369();
                return;
            }
        }
        yield func369();
        return;
    });
}


function func370(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(370);
        var_1677 = 1;
        var_813 = sdim(length1 = 64, length2 = 20, length3 = null)
        var_811 = dim(100);
        var_825 = 20;
        var_826 = 1;
        var_827 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            var_813[var_826] = "";
            if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                belongings_item_list = var_233[var_1670]["Var" + var_825];
            }
            if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                belongings_item_list = var_486[var_682][var_1670][var_825];
            }
            if (belongings_item_list == 104) {
                var_827 = 1;
            }
            if (var_1208 == 2) {
                var_827 = 0;
            }
            yield func492(); // アイテムリスト呼び出し
            if (item_ability_description == "") {
                var_826 = var_826 - 1;
                break;
            }
            var_813[var_826] = "" + item_ability_description;
            var_811[var_826] = belongings_item_list;
            var_826 = var_826 + 1;
            var_825 = var_825 + 1;
        }
        if (var_827 == 1) {
            var_826 = var_826 + 1;
            var_813[var_826] = "こわれるぞ。";
            var_811[var_826] = 199;
            var_810 = var_810 + 1;
        }
        var_1677 = 0;
        return;
    });
}

function func371(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(371);
        if (var_833 == 0) {
            var_1678 = 1;
        }
        if (var_833 >= 1) {
            var_1678 = Math.floor(var_833 / 10) + 1;
        }
        var_1679 = 1;
        yield func372();
    });
}
function func372(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(372);
        yield func080(); // 各キー入力確認
        if (var_254 == 1 && var_1679 >= 2) {
            var_1679 = var_1679 - 1;

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func372();
            return;
        }
        if (var_257 == 1 && var_1679 < var_1678) {
            var_1679 = var_1679 + 1;

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func372();
            return;
        }
        if (key_X_on == 1) {
            var_502 = 0;
            var_508 = 1; // Mフラグ:資料(設定画面) func058
            var_499 = 1; // Mフラグ:設定画面 func056

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func051();
            yield func057();
            return;
        }
        yield func337(); // メッセージ関係呼び出し
        yield func372();
        return;
    });
}
function func373(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(373);
        var_1680 = 9;
        var_1681 = 330;
        var_1682 = 37;
        var_1683 = 320;
        var_1684 = 0;
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(5, 35);
        gcopy(12, 0, 0, 332, 305);
        color(255, 255, 255);
        line(var_1680, var_1682 + var_1684, var_1681, var_1682 + var_1684);
        line(var_1680, var_1683 + var_1684, 166, var_1683 + var_1684);
        line(190, var_1683 + var_1684, var_1681, var_1683 + var_1684);
        line(var_1680 - 1, var_1682 + 1 + var_1684, var_1680 - 1, var_1683 - 2 + var_1684);
        line(var_1681 + 2, var_1682 + 1 + var_1684, var_1681 + 2, var_1683 - 2 + var_1684);
        pset(var_1680, var_1682 + 1 + var_1684);
        pset(var_1681 + 1, var_1682 + 1 + var_1684);
        pset(var_1680, var_1683 - 1 + var_1684);
        pset(var_1681 + 1, var_1683 - 1 + var_1684);
        pos(170, 310);
        if (var_1679 <= 9) {
            pos(175, 310);
        }
        color(255, 255, 255);

        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        mes(var_1679);
        var_1685 = 0;
        var_1686 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            var_1687 = (var_1679 - 1) * 10 + var_1686;
            var_356 = var_835[var_1687];
            if (var_835[var_1687] == 0) {
                var_1688 = "";
            }
            if (var_835[var_1687] != 0) {
                yield func177(); // 死因原因
                var_1688 = var_798;
            }
            pos(var_1680 + 10, var_1682 + var_1685 + 20);
            color(255, 255, 255);
    
            font(font_type = "ＭＳ Ｐゴシック", font_size = 14, font_style = 1);
            if (var_1687 == 0) {
                color(0, 255, 0);
                mes("　死因リスト");
            }
            if (var_1687 != 0) {
                if (var_835[var_1687] == 0) {
                    mes("");
                }
                if (var_835[var_1687] != 0) {
                    mes("" + var_1687 + "：" + var_1688);
                }
            }
            var_1686 = var_1686 + 1;
            var_1685 = var_1685 + 25;
        }
        return;
    });
}
function func374(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(374);
        yield func080(); // 各キー入力確認
        if (key_X_on == 1) {
            var_502 = 0;
            var_508 = 1; // Mフラグ:資料(設定画面) func058
            var_499 = 1; // Mフラグ:設定画面 func056
            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func051();
            yield func057();
            return;
        }
        yield func337(); // メッセージ関係呼び出し
        yield func374();
        return;
    });
}
function func375(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(375);
        var_1693 = 0;
        yield func376();
    });
}
function func376(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(376);
        yield func080(); // 各キー入力確認
        if (var_254 == 1) {
            var_1693 = var_1693 - 1;
            if (var_1693 < 0) {
                var_1693 = 17;
            }

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            // yield func337(); // メッセージ関係呼び出し
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_257 == 1) {
            var_1693 = var_1693 + 1;
            if (var_1693 > 17) {
                var_1693 = 0;
            }

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            // yield func337(); // メッセージ関係呼び出し
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        if (key_X_on == 1) {
            var_502 = 0;
            var_508 = 1; // Mフラグ:資料(設定画面) func058
            var_499 = 1; // Mフラグ:設定画面 func056

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func051();
            yield func057();
            return;
        }
        yield func337(); // メッセージ関係呼び出し
        yield func376();
        return;
    });
}
function func377(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(377);
        var_1680 = 9;
        var_1681 = 330;
        var_1682 = 37;
        var_1683 = 77;
        var_1684 = 0;
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(5, 35);
        gcopy(12, 0, 0, 332, 295);
        var_1694 = 901;
        var_1695 = 6;
        if (var_1693 == 15) {
            var_1695 = 5;
        }
        if (var_1693 == 17) {
            var_1695 = 4;
        }
        for (let cnt1 = 0; cnt1 < var_1695; ++cnt1) {
            color(0, 255, 0);
            line(var_1680, var_1682 + var_1684, var_1681, var_1682 + var_1684);
            line(var_1680, var_1683 + var_1684, var_1681, var_1683 + var_1684);
            line(var_1680 - 1, var_1682 + 1 + var_1684, var_1680 - 1, var_1683 - 2 + var_1684);
            line(var_1681 + 2, var_1682 + 1 + var_1684, var_1681 + 2, var_1683 - 2 + var_1684);
            pset(var_1680, var_1682 + 1 + var_1684);
            pset(var_1681 + 1, var_1682 + 1 + var_1684);
            pset(var_1680, var_1683 - 1 + var_1684);
            pset(var_1681 + 1, var_1683 - 1 + var_1684);
            belongings_item_list = var_1693 * 6 + var_1694;
            if (belongings_item_list >= 987 && belongings_item_list <= 995) {
                belongings_item_list = belongings_item_list - 237;
            }
            if (belongings_item_list >= 996) {
                belongings_item_list = belongings_item_list - 10;
            }
            yield func492(); // アイテムリスト呼び出し
            var_1696 = item_name;
            pos(var_1680 + 10, var_1682 + var_1684 - 3);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            var_1697 = belongings_item_list - 900;
            if (belongings_item_list >= 750 && belongings_item_list <= 770) {
                var_1697 = belongings_item_list + 250 - 900;
            }
            if (var_988[var_1697] >= 1) {
                yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
            }
            pos(var_1680 + 80, var_1682 + 13 + var_1684);
    
            font(font_type = "ＭＳ Ｐゴシック", font_size = 14, font_style = 1);
            if (var_988[var_1697] >= 1) {
                color(255, 255, 255);
            }
            if (var_988[var_1697] == 0) {
                color(150, 150, 150);
            }
            if (var_988[var_1697] >= 1) {
                mes(var_1696);
            }
            if (var_988[var_1697] == 0) {
                if (belongings_item_list >= 750 && belongings_item_list <= 770) {
                    mes(var_1696);
                }
                if (belongings_item_list >= 900 && belongings_item_list <= 986) {
                    mes(var_1696);
                }
                if (belongings_item_list >= 987 && belongings_item_list <= 999) {
                    mes("？？？？？？");
                }
            }
            var_1694 = var_1694 + 1;
            var_1684 = var_1684 + 46;
        }
        pos(140, 315);
        var_1698 = var_1693 + 1;
        color(255, 255, 255);
        mes("← " + var_1698 + " →");
        return;
    });
}
function func378(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(378);
        yield func080(); // 各キー入力確認
        if (key_X_on == 1) {
            var_502 = 0;
            var_499 = 1; // Mフラグ:設定画面 func056
            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func051();
            yield func055();
            return;
        }
        if (var_255 == 1 && var_503 < 31) {
            var_503 = var_503 + 2;
            var_504 = var_504 + 2;

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            // yield func337(); // メッセージ関係呼び出し
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func378();
            return;
        }
        if (var_259 == 1 && var_503 >= 3) {
            var_503 = var_503 - 2;
            var_504 = var_504 - 2;

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            // yield func337(); // メッセージ関係呼び出し
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func378();
            return;
        }
        yield func337(); // メッセージ関係呼び出し
        yield func378();
        return;
    });
}
function func379(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(379);
        var_1699 = var_503;
        var_1700 = var_504;
        var_1701 = 23;
        var_1702 = 325;
        var_1703 = 280;
        var_1704 = 330;
        var_1705 = 278;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            color(0, 0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(20, var_1705);
            gcopy(12, 0, 0, 310, 54);
            color(255, 255, 255);
            line(var_1701, var_1703, var_1702, var_1703);
            line(var_1701, var_1704, var_1702, var_1704);
            line(var_1701 - 1, var_1703 + 1, var_1701 - 1, var_1704 - 2);
            line(var_1702 + 2, var_1703 + 1, var_1702 + 2, var_1704 - 2);
            pset(var_1701, var_1703 + 1);
            pset(var_1702 + 1, var_1703 + 1);
            pset(var_1701, var_1704 - 1);
            pset(var_1702 + 1, var_1704 - 1);
    
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            color(255, 255, 255);
            pos(var_1701 + 5, var_1703 + 7);
            mes(var_494[var_1699]);
            mes(var_494[var_1700]);
            if (cnt1 != 0) {
                font("ＭＳ ゴシック", 12);
                color(255, 255, 255);
                pos(var_1701 + 150, var_1704);
                mes("▼");
            }
            if (cnt1 == 0 && var_503 != 1) {
                font("ＭＳ ゴシック", 12);
                color(255, 255, 255);
                pos(var_1701 + 150, var_1704);
                mes("▼");
            }
            var_1699 += 2;
            var_1700 += 2;
            var_1701 = 23;
            var_1702 = 325;
            var_1703 = var_1703 - 60;
            var_1704 = var_1704 - 60;
            var_1705 = var_1705 - 60;
        }
        if (var_503 < 31) {
            font("ＭＳ ゴシック", 12);
            color(255, 255, 255);
            pos(var_1701 + 150, var_1704);
            mes("▼");
        }
        return;
    });
}
// 状態異常確認呼び出し
function func380(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(380);

        var_1706 = sdim(1000, 70, 3);
        var_1677 = 1;
        var_1707 = 1;
        var_1708 = 100;
        for (let cnt1 = 0; cnt1 < 300; ++cnt1) {
            if (equip_disc[var_1708] == 1) {
                belongings_item_list = var_1708;
                yield func492(); // アイテムリスト呼び出し
                // No = 204:ｼｱｰﾊｰﾄｱﾀｯｸのDISC
                if (var_1708 == 204) {
                    item_ability_description = "最大HPが" + var_1047 + "上がっているぞ";
                }
                var_1706[var_1707][1] = "" + item_ability_description;
                if (var_812 == 1) {
                    var_1706[var_1707][2] = "1";
                }
                if (var_812 == 2) {
                    var_1706[var_1707][2] = "2";
                }
                if (var_812 == 3) {
                    var_1706[var_1707][2] = "3";
                }
                if (var_812 == 4) {
                    var_1706[var_1707][2] = "4";
                }
                var_1707++;
            }
            var_1708++;
        }
        var_1677 = 0;
        if (var_127 != 0 || var_132 != 0) {
            var_1706[var_1707][2] = "5";
            var_1706[var_1707][1] = "目が見えないぞ";
            var_1707++;
        }
        if (var_126 != 0) {
            var_1706[var_1707][2] = "5";
            var_1706[var_1707][1] = "混乱しているぞ";
            var_1707++;
        }
        if (var_133 != 0) {
            var_1706[var_1707][2] = "5";
            var_1706[var_1707][1] = "鈍足になっているぞ";
            var_1707++;
        }
        if (var_134 != 0) {
            var_1706[var_1707][2] = "5";
            var_1706[var_1707][1] = "波紋の毒で自然回復しないぞ";
            var_1707++;
        }
        if (var_135 != 0 || var_136 != 0 || var_137 != 0) {
            var_1706[var_1707][2] = "5";
            var_1706[var_1707][1] = "肉片が貼りついているぞ";
            var_1707++;
        }
        if (var_140 != 0) {
            var_1706[var_1707][2] = "5";
            var_1706[var_1707][1] = "体に磁力を帯びているぞ";
            var_1707++;
        }
        if (var_130 != 0 || var_129 != 0) {
            if (var_193 == 0) {
                var_1706[var_1707][2] = "5";
                var_1706[var_1707][1] = "お腹が減りやすくなっているぞ";
                var_1707++;
            }
        }
        if (var_130 != 0) {
            var_1706[var_1707][2] = "5";
            var_1706[var_1707][1] = "波紋使いからダメージを多く喰らうぞ";
            var_1707++;
        }
        if (var_109 != 0) {
            var_1706[var_1707][2] = "5";
            var_1706[var_1707][1] = "攻撃力が下がっているぞ";
            var_1707++;
        }
        if (var_171 != 0) {
            var_1706[var_1707][2] = "5";
            var_1706[var_1707][1] = "射撃やｱｲﾃﾑを投げようとすると…";
            var_1707++;
        }
        if (var_175 != 0 || var_176 != 0) {
            var_1706[var_1707][2] = "5";
            var_1706[var_1707][1] = "変な物を念写してﾐﾆﾏｯﾌﾟが見えないぞ";
            var_1707++;
        }
        if (equip_disc[396] == 1) {
            var_1706[var_1707][2] = "5";
            var_1706[var_1707][1] = "アイテムが朽ちるぞ";
            var_1707++;
        }
        if (equip_disc[396] == 1) {
            var_1706[var_1707][2] = "5";
            var_1706[var_1707][1] = "時間の経過が早いぞ";
            var_1707++;
        }
        if (var_193 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "お腹が減らないぞ";
            var_1707++;
        }
        if (var_157 != 0) { // var_157 倍速移動フラグOFFでなければ
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "体の動きが速いぞ";
            var_1707++;
        }
        if (var_132 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "敵の位置がわかるぞ";
            var_1707++;
        }
        if (var_104 != 0) { // var_104 攻撃力が上がるフラグがOFFでなければ
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "攻撃力が上がっているぞ";
            var_1707++;
        }
        if (var_105 != 0) { // var_105 攻撃を躱わしやすくなるフラグがOFFでなければ
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "攻撃をかわしやすいぞ";
            var_1707++;
        }
        if (var_111 != 0) { // var_111 命中率を上げるフラグがOFFでなければ
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "命中率が上がっているぞ";
            var_1707++;
        }
        if (var_119 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "見えないものが見えているぞ";
            var_1707++;
        }
        if (var_1709 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "ピンチの時に時間が戻るぞ";
            var_1707++;
        }
        if (var_120 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "目が冴えているぞ";
            var_1707++;
        }
        if (var_121 != 0) { // var_121 罠が見えるようになるフラグがOFFでなければ
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "罠が見えているぞ";
            var_1707++;
        }
        if (var_123 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "時間が消し飛んでいるぞ";
            var_1707++;
        }
        if (var_125 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "波紋を帯びた攻撃をするぞ";
            var_1707++;
        }
        if (var_125 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "水の上を歩けるぞ";
            var_1707++;
        }
        if (var_130 != 0 || var_182 == 1) {
            if (var_134 == 0) {
                var_1706[var_1707][2] = "0";
                var_1706[var_1707][1] = "回復力がアップしているぞ";
                var_1707++;
            }
        }
        if (var_131 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "透明になっているぞ";
            var_1707++;
        }
        if (var_111 != 0 || var_138 != 0) { // var_111 命中率を上げるフラグがOFFでなければ
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "投げたアイテムが必ず当たるぞ";
            var_1707++;
        }
        if (var_168 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "射撃ダメージが少なくなっているぞ";
            var_1707++;
        }
        if (var_168 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "爪の回転がアップするぞ";
            var_1707++;
        }
        if (var_142 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "攻撃を喰らうとお金を奪うぞ";
            var_1707++;
        }
        if (var_143 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "同じ敵に攻撃するほど強いぞ";
            var_1707++;
        }
        if (var_145 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "敵が罠に触れるとﾀﾞﾒｰｼﾞをうけるぞ";
            var_1707++;
        }
        if (var_149 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "狙撃衛星で弾丸を送るぞ";
            var_1707++;
        }
        if (var_150 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "攻撃を喰らうと後ろに弾むぞ";
            var_1707++;
        }
        if (var_151 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "時間が止まっているぞ";
            var_1707++;
        }
        if (var_155 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "弾丸を必ず止めるぞ";
            var_1707++;
        }
        if (var_159 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "壁の中を移動できるぞ";
            var_1707++;
        }
        if (var_113 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "防御力が上がっているぞ";
            var_1707++;
        }
        if (var_161 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "自分の「状態」がよくわかるぞ";
            var_1707++;
        }
        if (var_162 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "会心の一撃が出やすいぞ";
            var_1707++;
        }
        if (var_160 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "経験値が多く得られるぞ";
            var_1707++;
        }
        if (var_172 != 0) { // var_172 発動効果が向上するフラグがOFFでなければ
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "発動の効果が上がっているぞ";
            var_1707++;
        }
        if (var_173 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "冷やされるのと燃やされるのに強いぞ";
            var_1707++;
        }
        if (var_138 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "射撃ﾀﾞﾒｰｼﾞが上がっているぞ";
            var_1707++;
        }
        if (var_182 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "与えるダメージが２倍になっているぞ";
            var_1707++;
        }
        if (var_182 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "喰らうダメージが半分になっているぞ";
            var_1707++;
        }
        if (var_174 != 0 || var_120 != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "ﾌｰﾌｧｲﾀｰｽﾞのﾀﾞﾒｰｼﾞが上がっているぞ";
            var_1707++;
        }
        if (equip_disc[308] == 1 && var_831 != 0) {
            enemy_list = var_831;
            yield func626();
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "" + enemy_name + "に恨みがあるぞ";
            var_1707++;
        }
        // Ver0.1401にて追加。タスクact1を発動したかどうかの確認フラグがONの時
        if (taskact1_on != 0) {
            var_1706[var_1707][2] = "0";
            var_1706[var_1707][1] = "素手でのダメージが増えるぞ";
            var_1707++;
        }        
        if (equip_disc[117] == 1) {
            var_1710 = 0;
            var_1711 = var_66;
            var_1712 = var_67;
            var_1713 = var_66 - 1;
            var_1714 = var_66 + 1;
            var_1715 = var_67 + 1;
            var_1716 = var_67 - 1;
            if (var_1713 < 0) {
                var_1713 = 0;
            }
            if (var_1716 < 0) {
                var_1716 = 0;
            }
            if (var_1714 > var_33) {
                var_1714 = var_33;
            }
            if (var_1715 > var_34) {
                var_1715 = var_34;
            }
            if (var_71[var_1711][var_1712] == 13) {
                var_1710 = var_1710 + 1;
            }
            if (var_71[var_1713][var_1712] == 13) {
                var_1710 = var_1710 + 1;
            }
            if (var_71[var_1714][var_1712] == 13) {
                var_1710 = var_1710 + 1;
            }
            if (var_71[var_1711][var_1715] == 13) {
                var_1710 = var_1710 + 1;
            }
            if (var_71[var_1711][var_1716] == 13) {
                var_1710 = var_1710 + 1;
            }
            if (var_71[var_1713][var_1715] == 13) {
                var_1710 = var_1710 + 1;
            }
            if (var_71[var_1714][var_1715] == 13) {
                var_1710 = var_1710 + 1;
            }
            if (var_71[var_1713][var_1716] == 13) {
                var_1710 = var_1710 + 1;
            }
            if (var_71[var_1714][var_1716] == 13) {
                var_1710 = var_1710 + 1;
            }
            var_1717 = Math.floor((var_565 + 1) / 2);
            var_1718 = var_1717 * var_1710;
            if (var_1710 != 0) {
                var_1706[var_1707][2] = "0";
                var_1706[var_1707][1] = "水の近くでダメージ＋" + var_1718;
                var_1707++;
            }
        }
        if (sympathy_id == 1) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 101) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で射撃攻撃力が上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 102) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 103) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 104) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で最大HPが" + var_1048 + "上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 105) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で防御力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 106) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で時々敵を感知するぞ";
            var_1707++;
        }
        if (sympathy_id == 107) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 108) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で攻撃力が３上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 109) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で射撃攻撃力が上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 110) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 111) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 112) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で攻撃力が３上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 113) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で防御力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 114) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で時々敵を感知するぞ";
            var_1707++;
        }
        if (sympathy_id == 115) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 116) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で攻撃力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 117) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 118) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 119) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で落ちてるお金の金額が増えるぞ";
            var_1707++;
        }
        if (sympathy_id == 120) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で腐った物でもおいしく食べるぞ";
            var_1707++;
        }
        if (sympathy_id == 121) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で時々敵を感知するぞ";
            var_1707++;
        }
        if (sympathy_id == 122) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 123) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で落ちてるお金の金額が増えるぞ";
            var_1707++;
        }
        if (sympathy_id == 124) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で腐った物でもおいしく食べるぞ";
            var_1707++;
        }
        if (sympathy_id == 125) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 126) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 127) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 128) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が２上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 129) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 130) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 131) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 132) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 133) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 134) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が２上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 135) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で攻撃力が３上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 135) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "二刀流で連続攻撃ができるぞ";
            var_1707++;
        }
        if (sympathy_id == 136) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で射撃命中率が上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 137) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 138) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が２上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 139) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で罠にかからないぞ";
            var_1707++;
        }
        if (sympathy_id == 140) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が２上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 141) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が３上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 142) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が２上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 143) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が２上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 144) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で防御力が２上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 145) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で最大HPが" + var_1048 + "上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 146) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で最大HPが" + var_1048 + "上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 147) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が２上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 148) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が２上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 149) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 150) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 151) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 152) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 153) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 154) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で攻撃力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 155) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で攻撃力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 156) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で攻撃力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 157) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が２上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 158) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 159) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で最大HPが" + var_1048 + "上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 160) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で攻撃力が２上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 161) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で最大HPが" + var_1048 + "上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 162) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で最大HPが" + var_1048 + "上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 163) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で攻撃力が２上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 164) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で攻撃力が３上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 165) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で攻撃力が３上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 166) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で透明なものが見えるぞ";
            var_1707++;
        }
        if (sympathy_id == 167) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (sympathy_id == 168) {
            var_1706[var_1707][2] = "6";
            var_1706[var_1707][1] = "共鳴で精神力が１上がっているぞ";
            var_1707++;
        }
        if (kougeki_disc_id == 104) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "会心の一撃かミスしか出ないぞ";
            var_1707++;
        }
        if (kougeki_disc_id == 106) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "ﾌﾟｯﾂﾝ状態だと強いぞ";
            var_1707++;
        }
        if (equip_disc[105] == 1 && var_1030 >= 2) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "反省しているぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 100 || nouryoku_disc_id == 111 || nouryoku_disc_id == 398) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "時間停止攻撃を防ぐぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 100 || nouryoku_disc_id == 111 || nouryoku_disc_id == 398) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "DIOが近くにいても階段を降りられるぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 202 || shageki_disc_id == 404) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "老化攻撃を防ぐぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 202 || shageki_disc_id == 404 || nouryoku_disc_id == 109) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "冷凍攻撃を防ぐぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 120) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "裏返り攻撃を防ぐぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 116) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "波紋を流されないぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 202 || nouryoku_disc_id == 117) {
            if (var_125 == 0) {
                var_1706[var_1707][2] = "7";
                var_1706[var_1707][1] = "水の上を歩けるぞ";
                var_1707++;
            }
        }
        if (nouryoku_disc_id == 112 || nouryoku_disc_id == 204 || nouryoku_disc_id == 394 || nouryoku_disc_id == 395) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "親父の写真に閉じ込められないぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 112 || nouryoku_disc_id == 204 || nouryoku_disc_id == 394 || nouryoku_disc_id == 395) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "爆弾を見分けられるぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 112 || nouryoku_disc_id == 394) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "爆弾ｱｲﾃﾑを投げると爆発するぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 109) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "火炎による特殊攻撃を防ぐぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 100 || nouryoku_disc_id == 398) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "ﾛｰﾄﾞﾛｰﾗｰの罠のﾀﾞﾒｰｼﾞを半減するぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 113) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "ﾄｰｷﾝｸﾞﾍｯﾄﾞの罠を防ぐぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 115) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "歯をクラゲに変えられるぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 202) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "アイテムのカエル化を防ぐぞ";
            var_1707++;
        }
        if (nouryoku_disc_id == 206 || nouryoku_disc_id == 108 || var_130 != 0) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "ｸﾞﾘｰﾝﾃﾞｨがいても低いところに降りられるぞ";
            var_1707++;
        }
        if (shageki_disc_id == 400 || shageki_disc_id == 407) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "夢の世界に引き込まれるのを防ぐぞ";
            var_1707++;
        }
        if (shageki_disc_id == 401) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "ﾎﾜｲﾄｽﾈｲｸの罠でF･Fが優先的に外されるぞ";
            var_1707++;
        }
        if (shageki_disc_id == 402) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "鏡を踏んでもﾊﾝｸﾞﾄﾞﾏﾝに刺されないぞ";
            var_1707++;
        }
        if (shageki_disc_id == 403) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "ﾛｰﾘﾝｸﾞｽﾄｰﾝの罠のﾀﾞﾒｰｼﾞを半減するぞ";
            var_1707++;
        }
        if (shageki_disc_id == 405) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "装備中のDISCに由花子の呪いがかからないぞ";
            var_1707++;
        }
        if (shageki_disc_id == 406) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "カツアゲに負けない自信がつくぞ";
            var_1707++;
        }
        if (shageki_disc_id == 408) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "殺人ｳｲﾙｽのﾀﾞﾒｰｼﾞを半減するぞ";
            var_1707++;
        }
        if (shageki_disc_id == 409) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "敵のﾗﾊﾞｰｽﾞがｳｼﾞｭｳｼﾞｭ増えないぞ";
            var_1707++;
        }
        if (shageki_disc_id == 411) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "落とし穴に落ちないぞ";
            var_1707++;
        }
        if (shageki_disc_id == 412) {
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "ﾍﾌﾞﾝｽﾞﾄﾞｱｰの罠を書き換えるぞ";
            var_1707++;
        }
        if (shageki_disc_id == 415) { // Ver0.1401にて修正。414 → 415 タスクact1へ変更。
            var_1706[var_1707][2] = "7";
            var_1706[var_1707][1] = "ﾜｲｱｰﾄﾞの罠で自分が釣られるぞ";
            var_1707++;
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (dangeon_number == 5) {
            var_1719 = 0;
            var_1720 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                if (var_992[var_1720] != 0) {
                    var_1719++;
                }
                var_1720++;
            }
            var_1706[var_1707][2] = "8";
            if (var_1719 >= 1) {
                var_1706[var_1707][1] = "残りの特別な敵　" + var_1719 + " 体";
            }
            if (var_1719 == 0) {
                var_1706[var_1707][1] = "特別な敵を全て倒しているぞ";
            }
            var_1707++;
        }
        var_1721 = 1;
        yield func381();
    });
}

function func381(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(381);
        yield func080(); // 各キー入力確認
        if (var_254 == 1) {
            if (var_1721 == 1) {
                var_1721 = 1;
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func381();
                return;
            }
            if (var_1721 == 2) {
                var_1721 = 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func381();
                return;
            }
            if (var_1721 == 3) {
                var_1721 = 2;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func381();
                return;
            }
            if (var_1721 == 4) {
                var_1721 = 3;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func381();
                return;
            }
            if (var_1721 == 5) {
                var_1721 = 4;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func381();
                return;
            }
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_257 == 1) {
            if (var_1721 == 4 && var_1707 >= 54) {
                var_1721 = 5;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func381();
                return;
            }
            if (var_1721 == 3 && var_1707 >= 41) {
                var_1721 = 4;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func381();
                return;
            }
            if (var_1721 == 2 && var_1707 >= 28) {
                var_1721 = 3;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func381();
                return;
            }
            if (var_1721 == 1 && var_1707 >= 15) {
                var_1721 = 2;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func381();
                return;
            }
            yield func337(); // メッセージ関係呼び出し
        }
        if (key_X_on == 1) {
            var_498 = 0;

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        yield func337(); // メッセージ関係呼び出し
        yield func381();
        return;
    });
}
function func382(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(382);
        var_1680 = 9;
        var_1681 = 330;
        var_1682 = 37;
        var_1683 = 320;
        var_1684 = 0;
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(5, 35);
        gcopy(12, 0, 0, 332, 290);
        color(255, 255, 255);
        line(var_1680, var_1682 + var_1684, var_1681, var_1682 + var_1684);
        line(var_1680, var_1683 + var_1684, 166, var_1683 + var_1684);
        line(190, var_1683 + var_1684, var_1681, var_1683 + var_1684);
        line(var_1680 - 1, var_1682 + 1 + var_1684, var_1680 - 1, var_1683 - 2 + var_1684);
        line(var_1681 + 2, var_1682 + 1 + var_1684, var_1681 + 2, var_1683 - 2 + var_1684);
        pset(var_1680, var_1682 + 1 + var_1684);
        pset(var_1681 + 1, var_1682 + 1 + var_1684);
        pset(var_1680, var_1683 - 1 + var_1684);
        pset(var_1681 + 1, var_1683 - 1 + var_1684);
        pos(173, 310);
        color(255, 255, 255);

        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        if (var_1707 >= 15) {
            mes(var_1721);
        }
        if (var_1707 < 15) {
            line(165, var_1683 + var_1684, 191, var_1683 + var_1684);
        }
        color(0, 255, 0);

        font(font_type = "ＭＳ Ｐゴシック", font_size = 14, font_style = 1);
        if (var_1721 == 1) {
            var_1722 = 1;
        }
        if (var_1721 == 2) {
            var_1722 = 14;
        }
        if (var_1721 == 3) {
            var_1722 = 27;
        }
        if (var_1721 == 4) {
            var_1722 = 40;
        }
        if (var_1721 == 5) {
            var_1722 = 53;
        }
        for (let cnt1 = 0; cnt1 < 13; ++cnt1) {
            pos(20, cnt1 * 20 + 50);
            if (var_1706[var_1722][2] == "0") {
                color(255, 255, 255);
            }
            if (var_1706[var_1722][2] == "1") {
                color(255, 255, 0);
            }
            if (var_1706[var_1722][2] == "2") {
                color(255, 180, 90);
            }
            if (var_1706[var_1722][2] == "3") {
                color(0, 255, 0);
            }
            if (var_1706[var_1722][2] == "4") {
                color(240, 0, 240);
            }
            if (var_1706[var_1722][2] == "5") {
                color(255, 0, 0);
            }
            if (var_1706[var_1722][2] == "6") {
                color(255, 80, 255);
            }
            if (var_1706[var_1722][2] == "7") {
                color(200, 200, 200);
            }
            if (var_1706[var_1722][2] == "8") {
                color(0, 255, 255);
            }
            mes("" + var_1706[var_1722][1]);
            var_1722++;
        }
        return;
    });
}
// アイテムの出現数を増やす動作処理
function func383(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(383);
        var_336 = rnd(3);
        var_336 = var_336 + 4;
        // シンデレラの効果が発動していたら、+6個
        if (var_1024 == 1) { // 次の階の出現アイテム数＋6個するフラグがONであれば
            var_1024 = 0; // 次の階の出現アイテム数＋6個するフラグOFF
            var_336 = var_336 + 6;
        }
        var_1727 = 0;
        yield func384();
    });
}

function func384(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(384);
        if (var_336 >= 200) {
            return;
        }
        if (var_452 == 1 || var_1728 == 1) {
            yield func724();
            var_866 = var_854;
        }
        if (var_452 == 0 && var_1728 == 0) {
            var_866 = 1;
        }
        let loopCount = 1;
        if (var_452 == 0 && var_1728 == 0) {
            loopCount = var_336;
        }
        for (let cnt1 = 0; cnt1 < loopCount; ++cnt1) {
            if (var_1729 == 0) {
                if (var_453 == 0 && var_1728 == 0) {
                    for (let cnt4 = 0; true; ++cnt4) {
                        var_1550 = rnd(var_33);
                        var_230 = rnd(var_34);
                        if (var_71[var_1550][var_230] != 0 && var_71[var_1550][var_230] <= 12 && var_77[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_72[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0) {
                            break;
                        }
                        if (var_1142 == 1 && var_71[var_1550][var_230] == 14 && var_77[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_72[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0) {
                            break;
                        }
                        // 幻覚の迷宮
                        if (special_floor == 8 && var_71[var_1550][var_230] == 14 && var_77[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0) {
                            break;
                        }
                    }
                }
                if (var_453 == 1 && var_1728 == 0) {
                    var_1550 = var_447;
                    var_230 = var_449;
                    var_80[var_1550][var_230] = 0;
                }
                if (var_453 == 0 && var_1728 == 1) {
                    var_1730 = rnd(10);
                    var_1731 = 0;
                    for (let cnt4 = 0; cnt4 < 500; ++cnt4) {
                        var_1550 = rnd(var_33);
                        var_230 = rnd(var_34);
                        if (var_1730 <= 5 && var_71[var_1550][var_230] == var_204 && var_77[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0) {
                            var_1731 = 1;
                            break;
                        }
                        if (var_1730 >= 6 && var_71[var_1550][var_230] == var_204 && var_77[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0) {
                            var_768 = 1;
                            yield func536();
                            var_768 = 0;
                            break;
                        }
                    }
                    if (var_1731 == 0) {
                        return;
                    }
                }
            }
            if (var_1729 == 1) {
                var_1550 = var_1076;
                var_230 = var_1075;
            }
            if (var_1732 >= 1) {
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    var_78[var_866]["Var" + cnt3] = var_991[1][var_1732][cnt3];
                }
                var_78[var_866].Var1 = var_1550;
                var_78[var_866].Var2 = var_230;
                var_78[var_866].Var9 = var_71[var_1550][var_230];
                var_77[var_1550][var_230] = var_866;
                var_1733 = var_78[var_866].Var0;
                var_862[var_1733][0] = 1;
                return;
            }
            if (var_1734 == 1) {
                if (var_1093 == 0) {
                    var_1735 = 1;
                }
                if (var_1093 == 1) {
                    var_1735 = 3;
                }
                if (var_1093 == 2) {
                    var_1735 = 5;
                }
                if (var_1093 == 3) {
                    var_1735 = 10;
                }
                // No = 1 なので、ホテルの外
                if (dangeon_number == 1) {
                    var_1093 = 4;
                }
                if (var_1093 >= 4) {
                    var_1736 = rnd(12);
                    // No = 1 なので、ホテルの外
                    if (dangeon_number == 1) {
                        var_1736 = rnd(11);
                    }
                    if (var_1736 == 0) {
                        var_1735 = 1;
                    }
                    if (var_1736 == 1) {
                        var_1735 = 1;
                    }
                    if (var_1736 == 2) {
                        var_1735 = 3;
                    }
                    if (var_1736 == 3) {
                        var_1735 = 3;
                    }
                    if (var_1736 == 4) {
                        var_1735 = 5;
                    }
                    if (var_1736 == 5) {
                        var_1735 = 5;
                    }
                    if (var_1736 == 6) {
                        var_1735 = 6;
                    }
                    if (var_1736 == 7) {
                        var_1735 = 6;
                    }
                    if (var_1736 == 8) {
                        var_1735 = 4;
                    }
                    if (var_1736 == 9) {
                        var_1735 = 4;
                    }
                    if (var_1736 == 10) {
                        var_1735 = 9;
                    }
                    if (var_1736 == 11) {
                        var_1735 = 10;
                    }
                }
            }
            if (var_1734 == 0) {
                var_1736 = rnd(100);
                if (var_1736 >= 0 && var_1736 < 22) {
                    var_1735 = 0;
                }
                if (var_1736 >= 22 && var_1736 < 28) {
                    var_1735 = 6;
                }
                if (var_1736 >= 28 && var_1736 < 41) {
                    var_1735 = 1;
                }
                if (var_1736 >= 41 && var_1736 < 67) {
                    var_1735 = 5;
                }
                if (var_1736 >= 67 && var_1736 < 80) {
                    var_1735 = 3;
                }
                if (var_1736 >= 80 && var_1736 < 85) {
                    var_1735 = 4;
                }
                if (var_1736 >= 85 && var_1736 < 94) {
                    var_1735 = 9;
                }
                if (var_1736 >= 94 && var_1736 < 98) {
                    var_1735 = 10;
                }
                if (var_1736 >= 98 && var_1736 < 100) {
                    var_1735 = 0;
                }
                if (equip_disc[393] == 1 && var_1736 < 5) {
                    var_1735 = 9;
                }
                if (dangeon_number == 1 && var_1735 == 10) {
                    var_1736 = rnd(8);
                    if (var_1736 == 0) {
                        var_1735 = 0;
                    }
                    if (var_1736 == 1) {
                        var_1735 = 0;
                    }
                    if (var_1736 == 2) {
                        var_1735 = 0;
                    }
                    if (var_1736 == 3) {
                        var_1735 = 1;
                    }
                    if (var_1736 == 4) {
                        var_1735 = 3;
                    }
                    if (var_1736 == 5) {
                        var_1735 = 5;
                    }
                    if (var_1736 == 6) {
                        var_1735 = 4;
                    }
                    if (var_1736 == 7) {
                        var_1735 = 9;
                    }
                }
                if (var_1737 == 1) {
                    var_1735 = 9;
                }
                if (var_1738 == 1) {
                    var_1735 = 10;
                }
                if (var_1739 == 1) {
                    var_1735 = 10;
                }
                if (var_1740 >= 1) {
                    var_1735 = 9;
                }
                if (var_1741 == 1) {
                    var_1735 = 9;
                }
                if (var_1742 == 1) {
                    var_1735 = 9;
                }
                if (var_1743 == 1) {
                    var_1735 = 9;
                }
                if (var_1744 == 1) {
                    var_1735 = 10;
                }
                if (var_1745 == 1) {
                    var_1735 = 10;
                }
                if (var_1746 == 1) { // 倒された後にNo = 399 G・E・レクイエムを落とすフラグがONの場合
                    var_1735 = 1;
                }
                if (var_1747 == 1) {
                    var_1735 = 4;
                }
                if (var_1748 == 1) {
                    var_1735 = 5;
                }
                if (var_1749 == 1) {
                    var_1735 = 5;
                }
                if (var_1750 == 1) { // 倒された後にNo = 393 ボヘミアンラプソディを落とすフラグがONの場合
                    var_1735 = 1;
                }
                if (var_1751 == 1) {
                    var_1735 = 9;
                }
                if (var_1752 == 1) {
                    var_1735 = 9;
                }
                if (var_1753 == 1) {
                    var_1735 = 9;
                }
                if (var_1754 == 1) {
                    var_1735 = 9;
                }
                if (var_1755 == 1) {
                    var_1735 = 9;
                }
                if (var_1756 == 1) {
                    var_1735 = 9;
                }
                if (var_1757 == 1) {
                    var_1735 = 9;
                }
                if (var_1758 == 1) {
                    var_1735 = 9;
                }
                if (dangeon_number == 99) {
                    var_1735 = 9;
                }
                if (var_1759 == 1) {
                    var_1735 = 0;
                }
                if (var_1760 >= 1) {
                    var_1735 = 9;
                }
                if (var_454 == 1) {
                    var_1735 = 9;
                }
                if (var_1761 >= 1) {
                    var_1735 = 9;
                }
                if (var_1762 >= 1) {
                    var_1735 = 9;
                }
                if (var_1763 == 1) {
                    var_1764 = rnd(6);
                    if (var_1764 == 0 || var_1764 == 1 || var_1764 == 2) {
                        var_1735 = 5;
                    }
                    if (var_1764 == 3 || var_1764 == 4) {
                        var_1735 = 3;
                    }
                    if (var_1764 == 5) {
                        var_1735 = 1;
                    }
                }
                if (var_1765 == 1) {
                    var_1735 = 1;
                }
                if (var_1766 == 1) {
                    var_1735 = 1;
                }
            }
            var_77[var_1550][var_230] = var_866;
            if (var_1767 == 0) {
                yield func385(); // 各ダンジョンごとの出現アイテム&出現確率管理
            }
            var_78[var_866].Var1 = var_1550;
            var_78[var_866].Var2 = var_230;
            var_78[var_866].Var9 = var_71[var_1550][var_230];
            if (var_451 == 1) {
                var_78[var_866].Var10 = 1;
            }
            if (dangeon_number != 5) {
                if (var_452 == 0 && current_floor >= 15 && current_floor <= 18 && var_1734 == 0 && special_floor == 0) {
                    var_1768 = rnd(5);
                    if (var_1768 == 0) {
                        var_78[var_866].Var15 = 1;
                    }
                }
                if (var_452 == 0 && current_floor >= 25 && current_floor <= 35 && var_1734 == 0 && special_floor == 0) {
                    var_1768 = rnd(8);
                    if (var_1768 == 0) {
                        var_78[var_866].Var15 = 1;
                    }
                }
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (dangeon_number == 5) {
                if (var_452 == 0 && current_floor >= 6 && current_floor <= 30 && var_1734 == 0 && special_floor == 0) {
                    var_1768 = rnd(20);
                    if (var_1768 == 0) {
                        var_78[var_866].Var15 = 1;
                    }
                }
            }
            if (var_1734 == 1) {
                var_78[var_866].Var11 = 1;
                // No >= 2 なので、レクイエムの大迷宮、ディアボロの試練、一巡後の世界
                if (dangeon_number >= 2 && var_1727 == 0) {
                    var_1768 = rnd(9);
                    // No = 2 なので、レクイエムの大迷宮
                    if (dangeon_number == 2 && current_floor < 10) {
                        var_1768 = 1;
                    }
                    if (var_1768 == 0) {
                        var_78[var_866].Var15 = 1;
                        var_1727 = 1;
                    }
                }
            }
            if (var_78[var_866].Var0 >= 801 && var_78[var_866].Var0 <= 804 && var_1767 == 0) {
                yield func390();
            }
            if (var_1767 == 1) {
                var_78[var_866].Var0 = var_1769;
                var_78[var_866].Var3 = 0;
                var_78[var_866].Var4 = 0;
                var_78[var_866].Var5 = 0;
                var_78[var_866].Var6 = 0;
                var_78[var_866].Var7 = 0;
                var_78[var_866].Var8 = 0;
                var_78[var_866].Var10 = 0;
                var_78[var_866].Var11 = 0;
                var_78[var_866].Var12 = 0;
                var_78[var_866].Var13 = 0;
                var_78[var_866].Var14 = 0;
                var_78[var_866].Var15 = 0;
                var_78[var_866].Var16 = 0;
                var_78[var_866].Var17 = 0;
                var_78[var_866].Var18 = 0;
                var_78[var_866].Var19 = 0;
                var_78[var_866].Var20 = 0;
                var_78[var_866].Var21 = 0;
                var_78[var_866].Var22 = 0;
                var_78[var_866].Var23 = 0;
                var_78[var_866].Var24 = 0;
                var_78[var_866].Var25 = 0;
                var_78[var_866].Var26 = 0;
                var_78[var_866].Var27 = 0;
                var_78[var_866].Var28 = 0;
                var_78[var_866].Var29 = 0;
                if (var_78[var_866].Var0 >= 100 && var_78[var_866].Var0 < 400) {
                    var_78[var_866].Var19 = 1;
                    var_78[var_866].Var20 = var_78[var_866].Var0;
                    var_78[var_866].Var5 = 2;
                }
                if (var_78[var_866].Var0 >= 400 && var_78[var_866].Var0 < 500) {
                    var_78[var_866].Var3 = 6;
                }
                if (var_1770 >= 800 && var_1770 < 900) {
                    yield func395();
                    var_78[var_866].Var6 = var_858;
                    var_78[var_866].Var7 = 6;
                    var_78[var_866].Var8 = 0;
                }
                if (var_78[var_866].Var0 >= 400 && var_78[var_866].Var0 < 500) {
                    var_1771 = var_78[var_866].Var0;
                    var_862[var_1771][0] = 1;
                }
                if (var_78[var_866].Var0 >= 600 && var_78[var_866].Var0 < 700) {
                    var_1771 = var_78[var_866].Var0;
                    var_862[var_1771][0] = 1;
                }
                if (var_78[var_866].Var0 >= 750 && var_78[var_866].Var0 < 800) {
                    var_1771 = var_78[var_866].Var0;
                    var_862[var_1771][0] = 1;
                }
                if (var_78[var_866].Var0 >= 900 && var_78[var_866].Var0 < 1000) {
                    var_1771 = var_78[var_866].Var0;
                    var_862[var_1771][0] = 1;
                }
            }
            if (var_452 == 0 && var_1728 == 0) {
                var_866 = var_866 + 1;
            }
        }
        return;
    });
}
// 各ダンジョンごとの出現アイテム&出現確率管理(合成の空き容量もここで設定している)
function func385(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(385);
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            var_78[var_866]["Var" + cnt1] = 0;
        }
        if (var_1735 == 1) {
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1) {
                var_1772 = rnd(100); // 確率調整:100の中からランダムで数字を一つ
                if (var_1772 >= 0 && var_1772 < 45) { // 出現確率: 15/100*100 = 15%
                    var_78[var_866].Var0 = 116; // No = 116 ハーミットパープル
                    var_78[var_866].Var16 = 10; 
                    var_78[var_866].Var5 = 4; // 合成空き容量: 4
                }
                if (var_1772 >= 15 && var_1772 < 30) { // 出現確率: 15/100*100 = 15%
                    var_78[var_866].Var0 = 103; // No = 103 エコーズACT3
                    var_78[var_866].Var16 = 20;
                    var_78[var_866].Var5 = 5; // 合成空き容量: 5
                }
                if (var_1772 >= 30 && var_1772 < 45) { // 出現確率: 15/100*100 = 15%
                    var_78[var_866].Var0 = 107; // No = 107 デス・13
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 >= 45 && var_1772 < 60) { // 出現確率: 15/100*100 = 15%
                    var_78[var_866].Var0 = 300; // No = 300 パール・ジャム
                    var_78[var_866].Var16 = 5;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 >= 60 && var_1772 < 65) { // 出現確率: 5/100*100 = 5%
                    var_78[var_866].Var0 = 306; // No = 306 マンハッタントランスファー
                    var_78[var_866].Var16 = 5;
                    var_78[var_866].Var5 = 4; // 合成空き容量: 4
                }
                if (var_1772 >= 65 && var_1772 < 70) { // 出現確率: 5/100*100 = 5%
                    var_78[var_866].Var0 = 201; // No = 201 イエローテンパラス
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 >= 70 && var_1772 < 75) { // 出現確率: 5/100*100 = 5%
                    var_78[var_866].Var0 = 105; // No = 105 チリペッパー
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 >= 75 && var_1772 < 77) { // 出現確率: 2/100*100 = 2%
                    var_78[var_866].Var0 = 207; // No = 207 グレイトフル・デッド
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 >= 77 && var_1772 < 79) { // 出現確率: 2/100*100 = 2%
                    var_78[var_866].Var0 = 201; // No = 201 イエローテンパラス
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3;
                }
                if (var_1772 >= 79 && var_1772 < 81) { // 出現確率: 2/100*100 = 2%
                    var_78[var_866].Var0 = 105; // No = 105 チリペッパー
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 >= 81 && var_1772 < 83) { // 出現確率: 2/100*100 = 2%
                    var_78[var_866].Var0 = 104; // No = 104 ザ・ハンド
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 >= 83 && var_1772 < 85) { // 出現確率: 2/100*100 = 2%
                    var_78[var_866].Var0 = 117; // No = 117 ダーク・ブルームーン
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 >= 85 && var_1772 < 87) { // 出現確率: 2/100*100 = 2%
                    var_78[var_866].Var0 = 119; // No = 119 スパイス・ガール
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3;
                }
                if (var_1772 >= 87 && var_1772 < 89) { // 出現確率: 2/100*100 = 2%
                    var_78[var_866].Var0 = 203; // No = 203 ザ・フール
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 >= 89 && var_1772 < 91) { // 出現確率: 2/100*100 = 2%
                    var_78[var_866].Var0 = 113; // No = 113 クラッシュ
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 >= 91 && var_1772 < 93) { // 出現確率: 2/100*100 = 2%
                    var_78[var_866].Var0 = 306; // No = 306 マンハッタントランスファー
                    var_78[var_866].Var16 = 5;
                    var_78[var_866].Var5 = 4; // 合成空き容量: 4
                }
                if (var_1772 >= 93 && var_1772 < 95) { // 出現確率: 2/100*100 = 2%
                    var_78[var_866].Var0 = 316; // No = 316 サバイバー
                    var_78[var_866].Var16 = 5;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 == 95) { // 出現確率: 1/100*100 = 1%
                    var_78[var_866].Var0 = 121; // No = 121 パープルヘイズ
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 4; // 合成空き容量: 4
                }
                if (var_1772 == 96) { // 出現確率: 1/100*100 = 1%
                    var_78[var_866].Var0 = 320; // No = 320 メタリカ
                    var_78[var_866].Var16 = 5;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 == 97) { // 出現確率: 1/100*100 = 1%
                    var_78[var_866].Var0 = 205; // No = 205 クラフトワーク
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
                if (var_1772 == 98) { // 出現確率: 1/100*100 = 1%
                    var_78[var_866].Var0 = 317; // No = 317 キッス
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 4;
                }
                if (var_1772 == 99) { // 出現確率: 1/100*100 = 1%
                    var_78[var_866].Var0 = 115; // No = 115 G・エクスペリエンス
                    var_78[var_866].Var16 = 10;
                    var_78[var_866].Var5 = 3; // 合成空き容量: 3
                }
            }
            // No = 1 なので、ホテルの外以外
            if (dangeon_number != 1) {
                var_1773 = rnd(100); // 確率調整:100の中からランダムで数字を一つ
                if (var_1773 >= 0 && var_1773 < 50) {
                    var_1772 = rnd(100);
                    if (var_1772 >= 0 && var_1772 < 20) {
                        var_78[var_866].Var0 = 116; // No = 116 ハーミットパープル
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 4; // 合成空き容量: 4
                    }
                    if (var_1772 >= 20 && var_1772 < 40) {
                        var_78[var_866].Var0 = 124; // No = 124 ムーディー・ブルース
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 4; // 合成空き容量: 4
                    }
                    if (var_1772 >= 40 && var_1772 < 60) {
                        var_78[var_866].Var0 = 103; // No = 103 エコーズACT3
                        var_78[var_866].Var16 = 20;
                        var_78[var_866].Var5 = 5; // 合成空き容量: 5
                    }
                    if (var_1772 >= 60 && var_1772 < 80) {
                        var_78[var_866].Var0 = 107; // No = 107 デス・13
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 80 && var_1772 < 85) {
                        var_78[var_866].Var0 = 207;
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 85 && var_1772 < 90) {
                        var_78[var_866].Var0 = 201; // No = 201 イエローテンパラス
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 90 && var_1772 < 95) {
                        var_78[var_866].Var0 = 105; // No = 105 チリペッパー
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 95 && var_1772 < 100) {
                        var_78[var_866].Var0 = 104; // No = 104 ザ・ハンド
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                }
                if (var_1773 >= 50 && var_1773 < 68) {
                    var_1772 = rnd(100);
                    if (var_1772 >= 0 && var_1772 < 15) {
                        var_78[var_866].Var0 = 106; // No = 106 クレイジー・D
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 15 && var_1772 < 20) {
                        var_78[var_866].Var0 = 114; // No = 114 ホワイトスネイク
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 4; // 合成空き容量: 4
                    }
                    if (var_1772 >= 20 && var_1772 < 31) {
                        var_78[var_866].Var0 = 113; // No = 113 クラッシュ
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 31 && var_1772 < 42) {
                        var_78[var_866].Var0 = 122; // No = 122 アヌビス神
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 5; // 合成空き容量: 5
                    }
                    if (var_1772 >= 42 && var_1772 < 53) {
                        var_78[var_866].Var0 = 117; // No = 117 ダークブルームーン
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 53 && var_1772 < 64) {
                        var_78[var_866].Var0 = 121; // No = 121 パープルヘイズ
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 4; // 合成空き容量: 4
                    }
                    if (var_1772 >= 64 && var_1772 < 75) {
                        var_78[var_866].Var0 = 318; // No = 318 ジャンピンJフラッシュ
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 75 && var_1772 < 80) {
                        var_78[var_866].Var0 = 118; // No = 118 ダイバーダウン
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 2; // 合成空き容量: 2
                    }
                    if (var_1772 >= 80 && var_1772 < 85) {
                        var_78[var_866].Var0 = 317; // No = 317 キッス
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 4; // 合成空き容量: 4
                    }
                    if (var_1772 >= 85 && var_1772 < 90) {
                        var_78[var_866].Var0 = 319; // No = 319 ボーイⅡマン
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 90 && var_1772 < 95) {
                        var_78[var_866].Var0 = 115; // No = 115 G・エクスペリエンス
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 95 && var_1772 < 100) {
                        var_78[var_866].Var0 = 313; // No = 313 ハイウェイ・スター
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                }
                if (var_1773 >= 68 && var_1773 < 80) {
                    var_1772 = rnd(100);
                    if (var_1772 >= 0 && var_1772 < 20) {
                        var_78[var_866].Var0 = 119; // No = 119 スパイスガール
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 20 && var_1772 < 40) {
                        var_78[var_866].Var0 = 203; // No = 203 ザ・フール
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 40 && var_1772 < 60) {
                        var_78[var_866].Var0 = 200; // No = 200 スーパーフライ
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 60 && var_1772 < 75) {
                        var_78[var_866].Var0 = 205; // No = 205 クラフトワーク
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 75 && var_1772 < 80) {
                        var_78[var_866].Var0 = 206; // No = 206 オアシス
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 80 && var_1772 < 85) {
                        var_78[var_866].Var0 = 304; // No = 304 ウェザー・リポート
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 85 && var_1772 < 90) {
                        var_78[var_866].Var0 = 120; // No = 120 ストーン・フリー
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 2; // 合成空き容量: 2
                    }
                    if (var_1772 >= 90 && var_1772 < 95) {
                        var_78[var_866].Var0 = 202; // No = 202 ホワイトアルバム
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 2; // 合成空き容量: 2
                    }
                    if (var_1772 >= 95 && var_1772 < 100) {
                        var_78[var_866].Var0 = 204; // No = 204 シアハートアタック
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 2; // 合成空き容量: 2
                    }
                }
                if (var_1773 >= 80 && var_1773 < 98) {
                    var_1772 = rnd(100);
                    if (var_1772 >= 0 && var_1772 < 20) {
                        var_78[var_866].Var0 = 306; // No = 306 マンハッタントランスファー
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 4; // 合成空き容量: 4
                    }
                    if (var_1772 >= 20 && var_1772 < 40) {
                        var_78[var_866].Var0 = 300; // No = 300 パール・ジャム
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 40 && var_1772 < 50) {
                        var_78[var_866].Var0 = 311; // No = 311 チープトリック
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 5; // 合成空き容量: 5
                    }
                    if (var_1772 >= 50 && var_1772 < 60) {
                        var_78[var_866].Var0 = 310; // No = 310 エンプレス
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 5; // 合成空き容量: 5
                    }
                    if (var_1772 >= 60 && var_1772 < 70) {
                        var_78[var_866].Var0 = 302; // No = 302 ハイウェイ・トゥ・ヘル
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 70 && var_1772 < 80) {
                        var_78[var_866].Var0 = 320; // No = 320 メタリカ
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 80 && var_1772 < 89) {
                        var_78[var_866].Var0 = 316; // No = 316 サバイバー
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 89 && var_1772 < 91) {
                        var_78[var_866].Var0 = 314; // No = 314 ストレイ・キャット
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 >= 91 && var_1772 < 93) {
                        var_78[var_866].Var0 = 308; // No = 308 エボニー・デビル
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 2; // 合成空き容量: 2
                    }
                    if (var_1772 >= 93 && var_1772 < 95) {
                        var_78[var_866].Var0 = 395; // No = 395 バイツァ・ダストのDISC
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 3; // 合成空き容量: 3
                    }
                    if (var_1772 == 95) {
                        var_78[var_866].Var0 = 315; // No = 315 エピタフ
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (var_1772 == 96) {
                        var_78[var_866].Var0 = 303; // No = 303 ドラゴンズドリーム
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (var_1772 == 97) {
                        var_78[var_866].Var0 = 305; // No = 305 シンデレラ
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (var_1772 == 98) {
                        var_78[var_866].Var0 = 301; // No = 301 ハーヴェスト
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (var_1772 == 99) {
                        var_78[var_866].Var0 = 312; // No = 312 エアロスミス
                        var_78[var_866].Var16 = 5;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                }
                if (var_1773 >= 98 && var_1773 < 100) {
                    var_1772 = rnd(8);
                    if (var_1772 == 0) {
                        var_78[var_866].Var0 = 123; // No = 123 クリーム
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (var_1772 == 1) {
                        var_78[var_866].Var0 = 109; // No = 109 マジシャンズレッド
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (var_1772 == 2) {
                        var_78[var_866].Var0 = 112; // No = 112 キラー・クィーン
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (var_1772 == 3) {
                        var_78[var_866].Var0 = 101; // No = 101 シルバーチャリオッツ
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (var_1772 == 4) {
                        var_78[var_866].Var0 = 108; // No = 108 スティッキーフィンガーズ
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (var_1772 == 5) {
                        var_78[var_866].Var0 = 100; // No = 100 スタープラチナ
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (var_1772 == 6) {
                        var_78[var_866].Var0 = 111; // No = 111 ザ・ワールド
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                    if (var_1772 == 7) {
                        var_78[var_866].Var0 = 102; // No = 102 キング・クリムゾン
                        var_78[var_866].Var16 = 10;
                        var_78[var_866].Var5 = 1; // 合成空き容量: 1
                    }
                }
            }
            yield func387();
            if (var_1746 == 1) { // 倒された後にNo = 399 G・E・レクイエムを落とすフラグがONの場合
                var_78[var_866].Var0 = 399; // No = 399 G・E・レクイエム
                var_78[var_866].Var16 = 10;
                var_78[var_866].Var5 = 1; // 合成空き容量: 1
                var_78[var_866].Var4 = 3;
                var_78[var_866].Var14 = 1;
                var_78[var_866].Var12 = 0;
                var_862[399][0] = 1;
                var_1746 = 0; // 倒された後にNo = 399 G・E・レクイエムを落とすフラグOFF
            }
            if (var_1750 == 1) { // 倒された後にNo = 393 ボヘミアンラプソディを落とすフラグがONの場合
                var_78[var_866].Var0 = 393; // No = 393 ボヘミアンラプソディ
                var_78[var_866].Var16 = 10;
                var_78[var_866].Var5 = 1; // 合成空き容量: 1
                var_78[var_866].Var4 = 3;
                var_78[var_866].Var14 = 1;
                var_78[var_866].Var12 = 0;
                var_862[393][0] = 1;
                var_1750 = 0; // 倒された後にNo = 393 ボヘミアンラプソディを落とすフラグOFF
            }
            // No = 1 & 2 & 99 & 4 なので、ホテルの外、レクイエムの大迷宮、？、一巡後の世界        
            if (dangeon_number == 1 || dangeon_number == 2 || dangeon_number == 99 || dangeon_number == 4) {
                var_1771 = var_78[var_866].Var0;
                var_862[var_1771][0] = 1;
            }
            var_78[var_866].Var18 = 0;
            if (var_78[var_866].Var0 >= 100 && var_78[var_866].Var0 < 400) {
                var_78[var_866].Var19 = 1;
            }
            var_78[var_866].Var20 = var_78[var_866].Var0;
            // No = 3 なので、ディアボロの試練
            if (dangeon_number == 3) {
                yield func388();
            }
        }
        // 射撃discの出現確率
        if (var_1735 == 3 && dangeon_number != 5) { // Ver0.1402にて修正。射撃discはダンジョン「鉄獄」以外で出現するように。
            var_1774 = rnd(5);
            if (var_1774 <= 2) {
                var_1773 = rnd(100);
                if (var_1773 >= 0 && var_1773 < 70) {
                    var_78[var_866].Var0 = 401; // No = 401 フー・ファイターズの射撃DISC
                }
                if (var_1773 >= 70 && var_1773 < 85) {
                    var_78[var_866].Var0 = 400; // No = 400 ハイエロファントグリーンの射撃DISC
                }
                if (var_1773 >= 85 && var_1773 < 90) {
                    var_78[var_866].Var0 = 411; // No = 411 タワー・オブ・グレーの射撃DISC
                }
                if (var_1773 >= 90 && var_1773 < 95) {
                    var_78[var_866].Var0 = 403; // No = 403 セックス・ピストルズの射撃DISC
                }
                if (var_1773 >= 95 && var_1773 < 100) {
                    var_78[var_866].Var0 = 402; // No = 402 エンペラーの射撃DISC
                }
            }
            if (var_1774 >= 3) {
                var_1773 = rnd(100);
                if (var_1773 >= 0 && var_1773 < 25) {
                    var_78[var_866].Var0 = 409; // No = 409 ラバーズの射撃DISC
                }
                if (var_1773 >= 25 && var_1773 < 50) {
                    var_78[var_866].Var0 = 405; // No = 405 エコーズAct2の射撃DISC
                }
                if (var_1773 >= 50 && var_1773 < 70) {
                    var_78[var_866].Var0 = 408; // No = 408 マン・イン・ザ・ミラーの射撃DISC
                }
                if (var_1773 >= 70 && var_1773 < 80) {
                    var_78[var_866].Var0 = 406; // No = 406 エコーズAct1の射撃DISC
                }
                if (var_1773 >= 80 && var_1773 < 90) {
                    var_78[var_866].Var0 = 404; // No = 404 ホルス神の射撃DISC
                }
                if (var_1773 >= 90 && var_1773 < 100) {
                    var_78[var_866].Var0 = 412; // No = 412 ヘブンズドアーの射撃DISC
                }
            }
            var_1772 = rnd(3);
            var_78[var_866].Var3 = var_1772 + 3;
            if (var_78[var_866].Var0 == 400) { // No = 400 ハイエロファントグリーンの射撃DISC
                var_1775 = rnd(100); // 100分の1の確率でハイエロファントエメラルドにする
                if (var_1775 == 1) {
                    var_78[var_866].Var0 = 407; // No = 407 ハイエロファントエメラルドの射撃DISC
                }
            }
            var_1771 = var_78[var_866].Var0;
            var_862[var_1771][0] = 1;
        }
        if (var_1735 == 3 && dangeon_number == 5) { // Ver0.1402にて追加。射撃discをカエルへ。
            var_1774 = rnd(100);
            if (var_1773 >= 0 && var_1773 < 64) {
                var_78[var_866].Var0 = 650; // No = 650 カエル
            }
            if (var_1773 >= 64 && var_1773 < 100) {
                var_78[var_866].Var0 = 651; // No = 651 大きいカエル
            }
        }
        // 消費アイテムの出現確率
        if (var_1735 == 5) {
            var_1773 = rnd(25);
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1) {
                var_1773 = rnd(16);
            }
            // No >= 3 なので、ディアボロの試練、一巡後の世界
            if (dangeon_number >= 3) {
                var_1773 = rnd(30);
            }
            if (var_1773 == 0) {
                var_78[var_866].Var0 = 575; // No = 575 マニッシュボーイのDISC
            }
            if (var_1773 == 1) {
                var_78[var_866].Var0 = 563; // No = 563 ンドゥールのDISC
            }
            if (var_1773 == 2) {
                var_78[var_866].Var0 = 566; // No = 566 ケンゾーのDISC
            }
            if (var_1773 == 3) {
                var_78[var_866].Var0 = 574; // No = 574 エンポリオのDISC
            }
            if (var_1773 == 4) {
                var_78[var_866].Var0 = 569; // No = 569 ポルナレフのDISC
            }
            if (var_1773 == 5) {
                var_78[var_866].Var0 = 572; // No = 572 承太郎のDISC
            }
            if (var_1773 == 6) {
                var_78[var_866].Var0 = 573; // No = 573 重ちーのDISC
            }
            if (var_1773 == 7) {
                var_78[var_866].Var0 = 570; // No = 570 ジョナサンのDISC
            }
            if (var_1773 == 8) {
                var_78[var_866].Var0 = 577; // No = 577 ミキタカのDISC
            }
            if (var_1773 == 9) {
                var_78[var_866].Var0 = 578; // No = 578 サンドマンのDISC
            }
            if (var_1773 == 10) {
                var_78[var_866].Var0 = 579; // No = 579 ペットショップのDISC
            }
            if (var_1773 == 11) {
                var_78[var_866].Var0 = 568; // No = 568 ジョンガリ・AのDISC
            }
            if (var_1773 == 12) {
                var_78[var_866].Var0 = 564; // No = 564 噴上裕也のDISC
            }
            if (var_1773 == 13) {
                var_78[var_866].Var0 = 565; // No = 565 プッチ神父のDISC
            }
            if (var_1773 == 14) {
                var_78[var_866].Var0 = 580; // No = 580 ドッピオのDISC
            }
            if (var_1773 == 15) {
                var_78[var_866].Var0 = 589; // No = 589 プロシュートの兄貴のDISC
            }
            if (var_1773 == 16) {
                var_78[var_866].Var0 = 567; // No = 567 アヴドゥルのDISC
            }
            if (var_1773 == 17) {
                var_78[var_866].Var0 = 567; // No = 567 アヴドゥルのDISC
            }
            if (var_1773 == 18) {
                var_78[var_866].Var0 = 567; // No = 567 アヴドゥルのDISC
            }
            if (var_1773 == 19) {
                var_78[var_866].Var0 = 567; // No = 567 アヴドゥルのDISC
            }
            if (var_1773 == 20) {
                var_78[var_866].Var0 = 585; // No = 585 億泰のDISC
            }
            if (var_1773 == 21) {
                var_78[var_866].Var0 = 582; // No = 582 水が熱湯になるDISC
            }
            if (var_1773 == 22) {
                var_78[var_866].Var0 = 584; // No = 584 ヌケサクのDISC
            }
            if (var_1773 == 23) {
                var_78[var_866].Var0 = 587; // No = 587 吉良吉影のDISC
            }
            if (var_1773 == 24) {
                var_1776 = rnd(3);
                if (var_1776 == 0) {
                    var_78[var_866].Var0 = 562; // No = 562 康一のDISC
                }
                if (var_1776 == 1) {
                    var_78[var_866].Var0 = 586; // No = 586 ペッシのDISC
                }
                if (var_1776 == 2) {
                    var_78[var_866].Var0 = 583; // No = 583 ディアボロのDISC
                }
            }
            if (var_1773 == 25) {
                var_78[var_866].Var0 = 588; // No = 588 J・ガイルのDISC
            }
            if (var_1773 == 26) {
                var_78[var_866].Var0 = 571; // No = 571 ボインゴのDISC
            }
            if (var_1773 == 27) {
                var_78[var_866].Var0 = 560; // No = 560 仗助のDISC
            }
            if (var_1773 == 28) {
                var_78[var_866].Var0 = 590; // No = 590 ギアッチョのDISC
            }
            if (var_1773 == 29) {
                var_78[var_866].Var0 = 576; // No = 576 破裂するDISC
            }
            if (var_1749 == 1) {
                var_78[var_866].Var0 = 571; // No = 571 ボインゴのDISC
            }
            if (var_1748 == 1) {
                var_78[var_866].Var0 = 583; // No = 583 ディアボロのDISC
            }
            if (dangeon_number <= 1 || dangeon_number == 99 || dangeon_number == 4) {
                var_1771 = var_78[var_866].Var0;
                var_862[var_1771][0] = 1;
            }
            if (var_78[var_866].Var0 == 583) { // No = 583 ディアボロのDISC
                var_1771 = var_78[var_866].Var0;
                var_862[var_1771][0] = 1;
            }
        }
        // 
        if (var_1735 == 4) {
            var_1773 = rnd(100);
            if (var_1773 == 0) {
                var_78[var_866].Var0 = 647; // No = 647 オレンジ
            }
            if (var_1773 == 1) {
                var_78[var_866].Var0 = 655; // No = 655 ザリガニ
            }
            if (var_1773 == 2) {
                var_78[var_866].Var0 = 654; // No = 654 ヤドクガエル
            }
            if (var_1773 == 3) {
                var_78[var_866].Var0 = 653; // No = 653 超巨大なカエル
            }
            if (var_1773 >= 4 && var_1773 < 64) {
                var_78[var_866].Var0 = 650; // No = 650 カエル
            }
            if (var_1773 >= 64 && var_1773 < 100) {
                var_78[var_866].Var0 = 651; // No = 651 大きいカエル
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && var_1773 < 3) {
                var_78[var_866].Var0 = 650; // No = 650 カエル
                var_78[var_866].Var15 = 0;
            }
            if (var_1747 == 1) {
                var_78[var_866].Var0 = 647; // No = 647 オレンジ
            }
            if (var_78[var_866].Var0 == 647) { // No = 647 オレンジ
                var_78[var_866].Var15 = 2;
            }
            var_1771 = var_78[var_866].Var0;
            var_862[var_1771][0] = 1;
        }
        // 
        if (var_1735 == 6) {
            var_1777 = rnd(10);
            if (var_1777 < 7) {
                var_1773 = rnd(100);
                if (var_1773 >= 0 && var_1773 < 50) {
                    var_78[var_866].Var0 = 600; // No = 600 ピッツァ
                }
                if (var_1778 == 1) {
                    if (var_1773 >= 0 && var_1773 < 5) {
                        var_78[var_866].Var0 = 721; // No = 721 彼女の手首
                    }
                    if (var_1773 >= 5 && var_1773 < 30) {
                        var_78[var_866].Var0 = 636; // No = 636 オレンジ
                    }
                }
                if (var_1773 >= 50 && var_1773 < 80) {
                    var_78[var_866].Var0 = 602; // No = 602 ネアポリスのピッツァ
                }
                if (var_1773 >= 80 && var_1773 < 95) {
                    var_78[var_866].Var0 = 603; // No = 603 くさったピッツァ
                }
                if (var_1773 >= 95 && var_1773 < 100) {
                    var_78[var_866].Var0 = 604; // No = 604 ポルポのピッツァ
                }
                if (var_1734 == 1 && var_78[var_866].Var0 == 603) { // No = 603 くさったピッツァ
                    var_78[var_866].Var0 = 600; // No = 600 ピッツァ
                }
            }
            if (var_1777 >= 7) {
                var_1773 = rnd(5);
                if (var_1773 == 0) {
                    var_78[var_866].Var0 = 630; // No = 630 娼婦風スパゲッティ
                }
                if (var_1773 == 1) {
                    var_78[var_866].Var0 = 631; // No = 631 モッツァレラチーズとトマトのサラダ
                }
                if (var_1773 == 2) {
                    var_78[var_866].Var0 = 632; // No = 632 キリマンジャロの雪解け水
                }
                if (var_1773 == 3) {
                    var_78[var_866].Var0 = 633; // No = 633 子羊背肉のリンゴソースかけ
                }
                if (var_1773 == 4) {
                    var_78[var_866].Var0 = 634; // No = 634 プリン
                }
            }
            var_1771 = var_78[var_866].Var0;
            var_862[var_1771][0] = 1;
        }
        // コミックの出現率
        if (var_1735 == 9) {
            var_1773 = rnd(100);
            if (var_1773 >= 0 && var_1773 <= 6) {
                var_1779 = rnd(5);
                var_1779 = var_1779 + 901;
                var_78[var_866].Var0 = var_1779;
            }
            if (var_1773 >= 7 && var_1773 <= 13) {
                var_1779 = rnd(6);
                var_1779 = var_1779 + 906;
                var_78[var_866].Var0 = var_1779;
            }
            if (var_1773 >= 13 && var_1773 <= 30) {
                var_1779 = rnd(17);
                var_1779 = var_1779 + 912;
                var_78[var_866].Var0 = var_1779;
            }
            if (var_1773 >= 31 && var_1773 <= 48) {
                var_1779 = rnd(19);
                var_1779 = var_1779 + 929;
                var_78[var_866].Var0 = var_1779;
            }
            if (var_1773 >= 49 && var_1773 <= 66) {
                var_1779 = rnd(16);
                var_1779 = var_1779 + 948;
                var_78[var_866].Var0 = var_1779;
            }
            if (var_1773 >= 67 && var_1773 <= 82) {
                var_1779 = rnd(17);
                var_1779 = var_1779 + 964;
                var_78[var_866].Var0 = var_1779;
            }
            if (var_1773 >= 83 && var_1773 <= 89) {
                var_1779 = rnd(15);
                if (var_1779 == 0) {
                    var_78[var_866].Var0 = 981;
                }
                if (var_1779 == 1) {
                    var_78[var_866].Var0 = 982;
                }
                if (var_1779 == 2) {
                    var_78[var_866].Var0 = 983;
                }
                if (var_1779 == 3) {
                    var_78[var_866].Var0 = 984;
                }
                if (var_1779 == 4) {
                    var_78[var_866].Var0 = 985;
                }
                if (var_1779 == 5) {
                    var_78[var_866].Var0 = 986;
                }
                if (var_1779 == 6) {
                    var_78[var_866].Var0 = 750;
                }
                if (var_1779 == 7) {
                    var_78[var_866].Var0 = 751;
                }
                if (var_1779 == 8) {
                    var_78[var_866].Var0 = 752;
                }
                if (var_1779 == 9) {
                    var_78[var_866].Var0 = 753;
                }
                if (var_1779 == 10) {
                    var_78[var_866].Var0 = 754;
                }
                if (var_1779 == 11) {
                    var_78[var_866].Var0 = 755;
                }
                if (var_1779 == 12) {
                    var_78[var_866].Var0 = 756;
                }
                if (var_1779 == 13) {
                    var_78[var_866].Var0 = 757;
                }
                if (var_1779 == 14) {
                    var_78[var_866].Var0 = 758;
                }
            }
            // その他消費アイテムの出現率
            if (var_1773 >= 90 && var_1773 <= 100) {
                // Ver0.1401にて修正。ベルトのバックルを追加したので 6 → 7へ変更。
                // Ver0.1403にて修正。ポコロコのDISCを追加したので7 → 8へ変更。ポコロコのDISCは効果が強すぎるのでこちらへ。
                var_1073 = rnd(8);
                if (var_1073 == 0) {
                    var_78[var_866].Var0 = 727; // No = 727 ゾンビ馬
                }
                if (var_1073 == 1) {
                    var_78[var_866].Var0 = 726; // No = 726 鉄球
                }
                if (var_1073 == 2) {
                    var_78[var_866].Var0 = 724; // No = 724 石仮面
                }
                if (var_1073 == 3) {
                    var_78[var_866].Var0 = 723; // No = 723 魔法のランプ
                }
                if (var_1073 == 4) {
                    var_78[var_866].Var0 = 714; // No = 714 紫外線照射装置
                }
                if (var_1073 == 5) {
                    var_1780 = rnd(100);
                    if (var_1780 == 0) {
                        var_78[var_866].Var0 = 987; // No = 987 バオー来訪者 1巻
                    }
                    if (var_1780 == 1) {
                        var_78[var_866].Var0 = 988; // No = 988 バオー来訪者 2巻
                    }
                    if (var_1780 == 2) {
                        var_78[var_866].Var0 = 989; // No = 989 魔少年ビーティー
                    }
                    if (var_1780 == 3) {
                        var_78[var_866].Var0 = 990; // No = 990 ゴージャス☆アイリン
                    }
                    if (var_1780 == 4) {
                        var_78[var_866].Var0 = 991; // No = 991 死刑執行中脱獄進行中
                    }
                    if (var_1780 == 5) {
                        var_78[var_866].Var0 = 992; // No = 992 変人偏屈列伝
                    }
                    if (var_1780 == 6) {
                        var_78[var_866].Var0 = 993; // No = 993 JOJO 6251
                    }
                    if (var_1780 == 7) {
                        var_78[var_866].Var0 = 994; // No = 994 JOJO A GOGO
                    }
                    if (var_1780 >= 8) {
                        var_78[var_866].Var0 = 718; // No = 718 聖なる弓矢
                    }
                }
                if (var_1073 == 6) {
                    var_78[var_866].Var0 = 732; // Ver0.1401にて追加。No = 732 ベルトのバックル
                }
                if (var_1073 == 7) {
                    var_78[var_866].Var0 = 591; // Ver0.1403にて追加。No = 591 ポコロコのDISC
                }
            }
            if (var_78[var_866].Var0 == 724 && var_11 == 1) {
                var_1073 = rnd(2);
                if (var_1073 == 0) {
                    var_78[var_866].Var0 = 728; // No = 728 赤石つき石仮面
                }
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && var_1773 >= 90) {
                var_78[var_866].Var0 = 650; // No = 650 カエル
            }
            if (var_1753 == 1) {
                var_78[var_866].Var0 = 713; // No = 713 ポルポのライター
            }
            if (var_1737 == 1) {
                var_78[var_866].Var0 = 718; // No = 718 聖なる弓矢
            }
            if (var_1752 == 1) {
                var_78[var_866].Var0 = 725; // No = 725 オレッちのコート
            }
            if (var_1742 == 1) {
                var_78[var_866].Var0 = 720; // No = 720 ときのがくぼう
            }
            if (var_1743 == 1) {
                var_78[var_866].Var0 = 900; // No = 900 GB BOY
            }
            if (var_1751 == 1) {
                var_78[var_866].Var0 = 996; // No = 996 ヒロヒコのサイン色紙
            }
            if (var_1754 == 1) {
                var_78[var_866].Var0 = 712; // No = 712 やばいクスリ
            }
            if (var_1755 == 1) {
                var_78[var_866].Var0 = 715; // No = 715 点滴
            }
            if (var_1756 == 1) {
                var_78[var_866].Var0 = 600; // No = 600 ピッツァ
            }
            if (var_1757 == 1) {
                var_78[var_866].Var0 = 716; // No = 716 恐竜の化石
            }
            if (var_1758 == 1) {
                var_78[var_866].Var0 = 729;  // No = 729 吉良の財布
                var_78[var_866].Var15 = 2;
            }
            if (var_1762 >= 1) {
                var_78[var_866].Var0 = 700; // No = 700 不明
                var_78[var_866].Var13 = var_1762;
            }
            if (var_1761 >= 1) {
                var_78[var_866].Var0 = 701; // No = 701 不明
                var_78[var_866].Var13 = var_1761;
            }
            if (var_1778 == 1 && var_1773 >= 90) {
                var_1773 = rnd(10);
                if (var_1773 == 0 || var_1773 == 1) {
                    var_1779 = rnd(17);
                    var_1779 = var_1779 + 912;
                    var_78[var_866].Var0 = var_1779;
                }
                if (var_1773 == 2 || var_1773 == 3) {
                    var_1779 = rnd(19);
                    var_1779 = var_1779 + 929;
                    var_78[var_866].Var0 = var_1779;
                }
                if (var_1773 == 4 || var_1773 == 5) {
                    var_1779 = rnd(16);
                    var_1779 = var_1779 + 948;
                    var_78[var_866].Var0 = var_1779;
                }
                if (var_1773 == 6 || var_1773 == 7) {
                    var_1779 = rnd(17);
                    var_1779 = var_1779 + 964;
                    var_78[var_866].Var0 = var_1779;
                }
                if (var_1773 == 8 || var_1773 == 9) {
                    var_78[var_866].Var0 = 995;
                }
            }
            if (dangeon_number == 99) {
                var_78[var_866].Var0 = 641; // No = 641 消し炭
            }
            if (var_454 == 1) {
                var_78[var_866].Var0 = 717; // No = 717 コピー人形の破片
            }
            if (var_1760 == 1) {
                var_78[var_866].Var0 = 644; // No = 644 猫バーガー
            }
            if (var_1760 == 2) {
                var_78[var_866].Var0 = 645; // No = 645 猫ステーキ
            }
            if (var_1760 == 3) {
                var_78[var_866].Var0 = 646; // No = 646 猫ジュース
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            // Ver0.1402にてコメントアウト。
            /*
            if (dangeon_number == 5) {
                if (var_78[var_866].Var0 >= 900 && var_78[var_866].Var0 < 1000) {
                    yield func386(); // 床に落ちているアイテムを「消し炭」にする
                }
                if (var_78[var_866].Var0 >= 750 && var_78[var_866].Var0 < 800) {
                    yield func386(); // 床に落ちているアイテムを「消し炭」にする
                }
            }*/
            var_1771 = var_78[var_866].Var0;
            var_862[var_1771][0] = 1;
        }
        if (var_1735 == 10) {
            yield func395();
            var_1773 = rnd(100);
            var_1781 = rnd(4);
            if (var_1773 == 0) {
                var_78[var_866].Var0 = 803; // No = 803 サンジェルマンの紙袋
            }
            if (var_1773 == 1) {
                var_78[var_866].Var0 = 804; // No = 804 露伴のカバン
            }
            if (var_1773 == 2) {
                var_78[var_866].Var0 = 802; // No = 802 トラクターのタイヤ
            }
            if (var_1773 == 3) {
                var_78[var_866].Var0 = 801; // No = 801 形兆のDISCケース
            }
            if (var_1773 == 4 || var_1773 == 5) {
                var_78[var_866].Var0 = 815; // No = 815 エルメェスのあれ
            }
            if (var_1773 >= 6 && var_1773 < 10) {
                var_78[var_866].Var0 = 800; // No = 800 エニグマの紙
            }
            if (var_1773 >= 10 && var_1773 < 15) {
                var_78[var_866].Var0 = 817; // No = 817 乳母車
            }
            if (var_1773 >= 15 && var_1773 < 20) {
                var_78[var_866].Var0 = 805; // No = 805 グッチョの死体
            }
            if (var_1773 >= 20 && var_1773 < 25) {
                var_78[var_866].Var0 = 806; // No = 806 カルネの死体
            }
            if (var_1773 >= 25 && var_1773 < 30) {
                var_78[var_866].Var0 = 852; // No = 852 ランドセル
            }
            if (var_1773 >= 30 && var_1773 < 36) {
                var_78[var_866].Var0 = 809; // No = 809 聖人の左腕
            }
            if (var_1773 >= 36 && var_1773 < 42) {
                var_78[var_866].Var0 = 853; // No = 853 サーフィス人形
            }
            if (var_1773 >= 42 && var_1773 < 48) {
                var_78[var_866].Var0 = 851; // No = 851 ホルマジオのビン
            }
            if (var_1773 >= 48 && var_1773 < 55) {
                var_78[var_866].Var0 = 850; // No = 850 波紋のツボ
            }
            if (var_1773 >= 55 && var_1773 < 62) {
                var_78[var_866].Var0 = 854; // No = 854 聖人の脊髄
            }
            if (var_1773 >= 62 && var_1773 < 69) {
                var_78[var_866].Var0 = 807; // No = 807 DIOの骨
            }
            if (var_1773 >= 69 && var_1773 < 77) {
                var_78[var_866].Var0 = 816; // No = 816 ミキタカのカバン
            }
            if (var_1773 >= 77 && var_1773 < 85) {
                var_78[var_866].Var0 = 808; // No = 808 聖人の眼球
            }
            if (var_1773 >= 85 && var_1773 < 100) {
                var_78[var_866].Var0 = 800; // No = 800 エニグマの紙
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1) {
                if (var_78[var_866].Var0 == 807) { // No = 807 DIOの骨
                    var_78[var_866].Var0 = 800; // No = 800 エニグマの紙
                }
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            // Ver0.1402にてコメントアウト。
            /*
            if (dangeon_number == 5) {
                if (var_78[var_866].Var0 == 807) {
                    yield func386(); // 床に落ちているアイテムを「消し炭」にする
                }
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (dangeon_number == 5) {
                if (var_78[var_866].Var0 == 804) {
                    yield func386(); // 床に落ちているアイテムを「消し炭」にする
                }
            }*/
            if (dangeon_number != 4) { // 一巡後の世界以外では No = 815 エルメェスのあれ を　No = 800 エニグマの紙へ置き換える
                if (var_78[var_866].Var0 == 815) { // No = 815 エルメェスのあれ
                    var_78[var_866].Var0 = 800; // No = 800 エニグマの紙
                }
            }
            if (var_1734 == 1 && var_1773 < 7) {
                var_78[var_866].Var0 = 800; // No = 800 エニグマの紙
            }
            if (var_1738 == 1) {
                var_78[var_866].Var0 = 803; // No = 803 サンジェルマンの紙袋
            }
            if (var_1739 == 1) {
                var_78[var_866].Var0 = 801; // No = 801 形兆のDISCケース
            }
            if (var_1744 == 1) {
                var_78[var_866].Var0 = 807; // No = 807 DIOの骨
            }
            if (var_1745 == 1) {
                var_78[var_866].Var0 = 816; // No = 816 ミキタカのカバン
            }
            var_78[var_866].Var6 = var_858;
            var_78[var_866].Var7 = var_1781 + 3;
            if (var_78[var_866].Var0 == 802) { // No = 802 トラクターのタイヤ
                var_78[var_866].Var7 = 10;
            }
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
            if (var_78[var_866].Var0 == 851) { // No = 851 ホルマジオのビン
                var_78[var_866].Var7 = var_78[var_866].Var7 - 1;
                var_78[var_866].Var8 = 1;
                var_893 = rnd(2);
                if (var_893 == 0) {
                    var_486[var_858][1][15] = 37;
                }
                if (var_893 == 1) {
                    var_486[var_858][1][15] = 48;
                }
            }
            if (var_78[var_866].Var0 == 800) { // No = 800 エニグマの紙
                var_1782 = rnd(100);
                if (var_1782 == 0) {
                    var_486[var_858][1][0] = 648;
                    if (var_1734 == 1) {
                        var_486[var_858][1][11] = 1;
                    }
                    var_78[var_866].Var7 = var_78[var_866].Var7 - 1;
                    var_78[var_866].Var8 = 1;
                }
            }
            // No = 801 形兆のDISCケース or No = 802 トラクターのタイヤ or No = 803 サンジェルマンの紙袋 or No = 804 露伴のカバン
            if (var_78[var_866].Var0 == 801 || var_78[var_866].Var0 == 802 || var_78[var_866].Var0 == 803 || var_78[var_866].Var0 == 804) {
                var_1771 = var_78[var_866].Var0;
                var_862[var_1771][0] = 1;
            }
            // No = 1 & 99 & 4 なので、ホテルの外、?、一巡後の世界
            if (dangeon_number == 1 || dangeon_number == 99 || dangeon_number == 4) {
                var_1771 = var_78[var_866].Var0;
                var_862[var_1771][0] = 1;
            }
        }
        if (var_1735 == 0) {
            var_78[var_866].Var0 = 1;
            yield func436();
            var_78[var_866].Var13 = var_1783;
        }
        return;
    });
}
// 床に落ちているアイテムを「消し炭」にする
function func386(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(386);
        var_78[var_866].Var0 = 641;
        return;
    });
}
function func387(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(387);
        var_1784 = rnd(100);
        if (var_1784 >= 0 && var_1784 < 65) {
            var_78[var_866].Var4 = 0;
        }
        if (var_1784 >= 65 && var_1784 < 90) {
            var_78[var_866].Var4 = 1;
        }
        if (var_1784 >= 90 && var_1784 < 97) {
            var_78[var_866].Var4 = 2;
        }
        if (var_1784 >= 97 && var_1784 < 100) {
            var_78[var_866].Var4 = 3;
        }
        if (equip_disc[354] == 1 && var_1784 >= 85) {
            var_78[var_866].Var4 = 0;
        }
        var_1785 = rnd(100);
        if (var_1734 == 1) {
            var_1785 = 99;
        }
        if (var_1785 < 7) {
            var_78[var_866].Var4 = 0;
            var_78[var_866].Var12 = 1;
        }
        if (equip_disc[353] == 1 && var_1785 < 20) {
            var_78[var_866].Var4 = 0;
            var_78[var_866].Var12 = 1;
        }
        if (var_78[var_866].Var0 == 310 || var_78[var_866].Var0 == 311 || var_78[var_866].Var0 == 122 || var_78[var_866].Var0 == 200 || var_78[var_866].Var0 == 302) {
            var_78[var_866].Var4 = 0;
            var_78[var_866].Var12 = 1;
        }
        return;
    });
}
// おそらくレアdiscの出現確率設定??
function func388(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(388);
        var_1786 = 1;
        if (current_floor >= 1 && current_floor <= 9) {
            var_1786 = rnd(100);
        }
        if (current_floor >= 10 && current_floor <= 19) {
            var_1786 = rnd(90);
        }
        if (current_floor >= 20 && current_floor <= 29) {
            var_1786 = rnd(80);
        }
        if (current_floor >= 30 && current_floor <= 39) {
            var_1786 = rnd(70);
        }
        if (current_floor >= 40 && current_floor <= 49) {
            var_1786 = rnd(60);
        }
        if (current_floor >= 50 && current_floor <= 59) {
            var_1786 = rnd(50);
        }
        if (current_floor >= 60 && current_floor <= 69) {
            var_1786 = rnd(40);
        }
        if (current_floor >= 70 && current_floor <= 79) {
            var_1786 = rnd(30);
        }
        if (current_floor >= 80 && current_floor <= 89) {
            var_1786 = rnd(20);
        }
        if (current_floor >= 90 && current_floor <= 98) {
            var_1786 = rnd(10);
        }
        if (current_floor >= 99) {
            var_1786 = rnd(100);
        }
        if (var_1786 == 0 || var_1766 == 1) {
            var_78[var_866].Var13 = rnd(3);
            var_78[var_866].Var13++;
            var_1787 = rnd(10);
            if (var_1787 == 1) {
                var_78[var_866].Var12 = 2;
            }
            var_78[var_866].Var4 = rnd(5);
            var_78[var_866].Var4 = var_78[var_866].Var4 + 1;
            var_1788 = 0;
            if (current_floor >= 1 && current_floor <= 9) {
                var_1789 = 1;
            }
            if (current_floor >= 10 && current_floor <= 19) {
                var_1789 = 1;
            }
            if (current_floor >= 20 && current_floor <= 29) {
                var_1789 = 1;
            }
            if (current_floor >= 30 && current_floor <= 39) {
                var_1789 = 2;
            }
            if (current_floor >= 40 && current_floor <= 49) {
                var_1789 = 2;
            }
            if (current_floor >= 50 && current_floor <= 59) {
                var_1789 = 2;
            }
            if (current_floor >= 60 && current_floor <= 69) {
                var_1789 = 3;
            }
            if (current_floor >= 70 && current_floor <= 79) {
                var_1789 = 3;
            }
            if (current_floor >= 80 && current_floor <= 89) {
                var_1789 = 4;
            }
            if (current_floor >= 90 && current_floor <= 100) {
                var_1789 = 5;
            }
            var_1790 = rnd(100);
            if (var_1790 >= 0 && var_1790 < 4) {
                var_1788 = var_1789 - 3;
                if (var_1788 < var_1789) {
                    var_1788 = 1;
                }
            }
            if (var_1790 >= 4 && var_1790 < 9) {
                var_1788 = var_1789 - 3;
                if (var_1788 < var_1789) {
                    var_1788 = 1;
                }
            }
            if (var_1790 >= 9 && var_1790 < 15) {
                var_1788 = var_1789 - 3;
                if (var_1788 < var_1789) {
                    var_1788 = 1;
                }
            }
            if (var_1790 >= 15 && var_1790 < 23) {
                var_1788 = var_1789 - 2;
                if (var_1788 < var_1789) {
                    var_1788 = 2;
                }
            }
            if (var_1790 >= 23 && var_1790 < 33) {
                var_1788 = var_1789 - 2;
                if (var_1788 < var_1789) {
                    var_1788 = 2;
                }
            }
            if (var_1790 >= 33 && var_1790 < 44) {
                var_1788 = var_1789 - 1;
                if (var_1788 < var_1789) {
                    var_1788 = 2;
                }
            }
            if (var_1790 >= 44 && var_1790 < 56) {
                var_1788 = var_1789 - 1;
                if (var_1788 < var_1789) {
                    var_1788 = 2;
                }
            }
            if (var_1790 >= 56 && var_1790 < 70) {
                var_1788 = var_1789 - 1;
                if (var_1788 < var_1789) {
                    var_1788 = 2;
                }
            }
            if (var_1790 >= 70 && var_1790 < 86) {
                var_1788 = var_1789;
            }
            if (var_1790 >= 86 && var_1790 < 90) {
                var_1788 = var_1789 + 1;
            }
            if (var_1790 >= 90 && var_1790 < 93) {
                var_1788 = var_1789 + 1;
            }
            if (var_1790 >= 93 && var_1790 < 95) {
                var_1788 = var_1789 + 2;
            }
            if (var_1790 >= 95 && var_1790 < 96) {
                var_1788 = var_1789 + 2;
            }
            if (var_1790 >= 96 && var_1790 < 97) {
                var_1788 = var_1789 + 2;
            }
            if (var_1790 >= 97 && var_1790 < 98) {
                var_1788 = var_1789 + 3;
            }
            if (var_1790 >= 98 && var_1790 < 99) {
                var_1788 = var_1789 + 3;
            }
            if (var_1790 >= 99 && var_1790 < 100) {
                var_1788 = var_1789 + 4;
            }
            if (var_1788 >= 7) {
                var_1788 = 7;
            }
            var_78[var_866].Var19 = var_1788 + 1;
            var_78[var_866].Var5 = var_78[var_866].Var5 - var_1788;
            if (var_78[var_866].Var5 < 0) {
                var_78[var_866].Var5 = 0;
            }
            var_1791 = 21;
            var_1792 = 0;
            for (let cnt2 = 0; cnt2 < var_1788; ++cnt2) {
                yield func389();
                var_1793 = 20;
                var_1794 = 0;
                for (let cnt3 = 0; cnt3 < var_1788 + 1; ++cnt3) {
                    if (var_78[var_866]["Var" + var_1793] == var_1795) {
                        var_1794 = 1;
                        break;
                    }
                    var_1793++;
                }
                if (var_1794 == 1) {
                    cnt2 = var_1792 - 1;
                    continue;
                }
                var_78[var_866][var_1791] = var_1795;
                var_1792++;
                var_1791++;
            }
        }
        return;
    });
}

function func389(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(389);
        var_1795 = 103;
        var_1796 = rnd(31);
        if (var_1796 == 0) {
            var_1797 = rnd(11);
            if (var_1797 == 0) {
                var_1795 = 109;
            }
            if (var_1797 == 1) {
                var_1795 = 301;
            }
            if (var_1797 == 2) {
                var_1795 = 303;
            }
            if (var_1797 == 3) {
                var_1795 = 305;
            }
            if (var_1797 == 4) {
                var_1795 = 306;
            }
            if (var_1797 == 5) {
                var_1795 = 312;
            }
            if (var_1797 == 6) {
                var_1795 = 315;
            }
            if (var_1797 == 7) {
                var_1795 = 395;
            }
            if (var_1797 == 8) {
                var_1795 = 101;
            }
            if (var_1797 == 9) {
                var_1795 = 365;
            }
            if (var_1797 == 10) {
                var_1795 = 368;
            }
        }
        if (var_1796 >= 1 && var_1796 <= 5) {
            var_1797 = rnd(13);
            if (var_1797 == 0) {
                var_1795 = 102;
            }
            if (var_1797 == 1) {
                var_1795 = 111;
            }
            if (var_1797 == 2) {
                var_1795 = 112;
            }
            if (var_1797 == 3) {
                var_1795 = 114;
            }
            if (var_1797 == 4) {
                var_1795 = 116;
            }
            if (var_1797 == 5) {
                var_1795 = 124;
            }
            if (var_1797 == 6) {
                var_1795 = 366;
            }
            if (var_1797 == 7) {
                var_1795 = 103;
            }
            if (var_1797 == 8) {
                var_1795 = 202;
            }
            if (var_1797 == 9) {
                var_1795 = 313;
            }
            if (var_1797 == 10) {
                var_1795 = 319;
            }
            if (var_1797 == 11) {
                var_1795 = 369;
            }
            if (var_1797 == 12) {
                var_1795 = 370;
            }
        }
        if (var_1796 >= 6 && var_1796 <= 10) {
            var_1797 = rnd(19);
            if (var_1797 == 0) {
                var_1795 = 104;
            }
            if (var_1797 == 1) {
                var_1795 = 121;
            }
            if (var_1797 == 2) {
                var_1795 = 302;
            }
            if (var_1797 == 3) {
                var_1795 = 310;
            }
            if (var_1797 == 4) {
                var_1795 = 311;
            }
            if (var_1797 == 5) {
                var_1795 = 122;
            }
            if (var_1797 == 6) {
                var_1795 = 350;
            }
            if (var_1797 == 7) {
                var_1795 = 353;
            }
            if (var_1797 == 8) {
                var_1795 = 354;
            }
            if (var_1797 == 9) {
                var_1795 = 355;
            }
            if (var_1797 == 10) {
                var_1795 = 356;
            }
            if (var_1797 == 11) {
                var_1795 = 357;
            }
            if (var_1797 == 12) {
                var_1795 = 358;
            }
            if (var_1797 == 13) {
                var_1795 = 359;
            }
            if (var_1797 == 14) {
                var_1795 = 363;
            }
            if (var_1797 == 15) {
                var_1795 = 364;
            }
            if (var_1797 == 16) {
                var_1795 = 317;
            }
            if (var_1797 == 17) {
                var_1795 = 318;
            }
            if (var_1797 == 18) {
                var_1795 = 367;
            }
        }
        if (var_1796 >= 10 && var_1796 <= 20) {
            var_1797 = rnd(12);
            if (var_1797 == 0) {
                var_1795 = 105;
            }
            if (var_1797 == 1) {
                var_1795 = 106;
            }
            if (var_1797 == 2) {
                var_1795 = 117;
            }
            if (var_1797 == 3) {
                var_1795 = 120;
            }
            if (var_1797 == 4) {
                var_1795 = 206;
            }
            if (var_1797 == 5) {
                var_1795 = 308;
            }
            if (var_1797 == 6) {
                var_1795 = 107;
            }
            if (var_1797 == 7) {
                var_1795 = 300;
            }
            if (var_1797 == 8) {
                var_1795 = 316;
            }
            if (var_1797 == 9) {
                var_1795 = 361;
            }
            if (var_1797 == 10) {
                var_1795 = 362;
            }
            if (var_1797 == 11) {
                var_1795 = 352;
            }
        }
        if (var_1796 >= 20 && var_1796 <= 30) {
            var_1797 = rnd(13);
            if (var_1797 == 0) {
                var_1795 = 115;
            }
            if (var_1797 == 1) {
                var_1795 = 119;
            }
            if (var_1797 == 2) {
                var_1795 = 200;
            }
            if (var_1797 == 3) {
                var_1795 = 201;
            }
            if (var_1797 == 4) {
                var_1795 = 314;
            }
            if (var_1797 == 5) {
                var_1795 = 351;
            }
            if (var_1797 == 6) {
                var_1795 = 360;
            }
            if (var_1797 == 7) {
                var_1795 = 204;
            }
            if (var_1797 == 8) {
                var_1795 = 207;
            }
            if (var_1797 == 9) {
                var_1795 = 320;
            }
            if (var_1797 == 10) {
                var_1795 = 203;
            }
            if (var_1797 == 11) {
                var_1795 = 205;
            }
            if (var_1797 == 12) {
                var_1795 = 304;
            }
        }
        return;
    });
}
function func390(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(390);
        var_1778 = 1;
        var_1798 = var_866;
        var_1799 = var_78[var_866].Var0;
        var_1800 = var_78[var_866].Var6;
        var_1801 = var_78[var_866].Var7;
        var_1802 = var_78[var_866].Var8;
        var_1803 = 1;
        for (let cnt1 = 0; cnt1 < var_1801; ++cnt1) {
            var_866 = 0;
            if (var_1799 == 801 || var_1799 == 802) {
                var_1736 = rnd(100);
                if (var_1736 >= 0 && var_1736 < 20) {
                    var_1735 = 1;
                }
                if (var_1736 >= 20 && var_1736 < 80) {
                    var_1735 = 5;
                }
                if (var_1736 >= 80 && var_1736 < 100) {
                    var_1735 = 3;
                }
            }
            if (var_1799 == 803) {
                var_1736 = rnd(100);
                if (var_1736 >= 0 && var_1736 < 50) {
                    var_1735 = 6;
                }
                if (var_1736 >= 50 && var_1736 < 100) {
                    var_1735 = 4;
                }
            }
            if (var_1799 == 804) {
                var_1735 = 9;
            }
            yield func385(); // 各ダンジョンごとの出現アイテム&出現確率管理
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                var_486[var_1800][var_1803][cnt2] = var_78[var_866]["Var" + cnt2];
            }
            var_1803++;
        }
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            var_78[0]["Var" + cnt1] = 0;
        }
        var_1778 = 0;
        var_866 = var_1798;
        var_78[var_866].Var7 = 0;
        var_78[var_866].Var8 = var_1801;
        return;
    });
}
function func391(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(391);
        var_452 = 1;
        var_453 = 1;
        var_1734 = 1;
        var_449 = 0;
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_447 = 0;
            for (let cnt2 = 0; cnt2 < var_31; ++cnt2) {
                if (var_79[var_447][var_449] == 1) {
                    yield func384();
                }
                if (var_79[var_447][var_449] == 2) {
                    var_1734 = 0;
                    yield func384();
                    var_1734 = 1;
                }
                var_447 = var_447 + 1;
            }
            var_449 = var_449 + 1;
        }
        var_452 = 0;
        var_453 = 0;
        var_1734 = 0;
        return;
    });
}
function func392(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(392);
        var_1728 = 1;
        if (var_96 == 2) {
            var_1804 = 1;
        }
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func384();
        }
        var_1728 = 0;
        var_1804 = 0;
        return;
    });
}
function func393(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(393);
        if (current_floor == 20 && dangeon_number != 5) {
            var_452 = 1;
            var_1748 = 1;
            yield func384();
            var_1748 = 0;
            var_452 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (dangeon_number == 2 && current_floor == 1 && var_1037 != 0) {
            var_1732 = 1;
            var_452 = 1;
            for (let cnt2 = 0; cnt2 < var_1037; ++cnt2) {
                yield func384();
                var_1732++;
            }
            var_452 = 0;
            var_1732 = 0;
            var_1037 = 0;
        }
        // No = 3 なので、ディアボロの試練
        if (dangeon_number == 3 && current_floor == 99 && var_537 >= 1) {
            var_452 = 1;
            var_1766 = 1;
            yield func384();
            var_1766 = 0;
            var_452 = 0;
        }
        // No = 4 なので、一巡後の世界
        if (dangeon_number == 4 && current_floor == 99) {
            var_452 = 1;
            var_1751 = 1;
            yield func384();
            var_1751 = 0;
            var_452 = 0;
        }
        return;
    });
}
function func394(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(394);
        var_1805 = 0;
        var_855 = dim(100);
        var_1806 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_1806].Var0 >= 800 && var_233[var_1806].Var0 < 900) {
                var_1807 = var_233[var_1806].Var6;
                var_855[var_1807]++;
            }
            var_1806++;
        }
        var_1808 = 1;
        for (let cnt1 = 0; cnt1 < 99; ++cnt1) {
            if (var_855[var_1808] >= 2) {
                var_1809 = 1;
                for (let cnt3 = 0; cnt3 < var_224; ++cnt3) {
                    if (var_233[var_1809].Var0 >= 800 && var_233[var_1809].Var0 < 900 && var_233[var_1809].Var6 == var_1808) {
                        yield func395();
                        var_233[var_1809].Var6 = var_858;
                        var_233[var_1809].Var7 = var_233[var_1809].Var7 + var_233[var_1809].Var8;
                        if (var_233[var_1809].Var7 > 11) {
                            var_233[var_1809].Var7 = 10;
                        }
                        var_233[var_1809].Var8 = 0;
                        var_1805 = 1;
                    }
                    var_1809++;
                }
            }
            var_1808++;
        }
        return;
    });
}
function func395(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(395);
        var_986 = dim(100);
        var_1806 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_1806].Var0 >= 800 && var_233[var_1806].Var0 < 900) {
                var_1807 = var_233[var_1806].Var6;
                var_986[var_1807] = 1;
            }
            var_1806 = var_1806 + 1;
        }
        var_1806 = 1;
        for (let cnt1 = 0; cnt1 < 299; ++cnt1) {
            if (var_78[var_1806].Var0 >= 800 && var_78[var_1806].Var0 < 900) {
                var_1807 = var_78[var_1806].Var6;
                var_986[var_1807] = 1;
            }
            var_1806 = var_1806 + 1;
        }
        var_1806 = 1;
        for (let cnt1 = 0; cnt1 < 49; ++cnt1) {
            if (var_853[var_1806][0] >= 800 && var_853[var_1806][0] < 900) {
                var_1807 = var_853[var_1806][6];
                var_986[var_1807] = 1;
            }
            var_1806 = var_1806 + 1;
        }
        var_1810 = 1;
        for (let cnt1 = 0; cnt1 < 79; ++cnt1) {
            if (var_986[var_1810] == 0) {
                var_1811 = 0;
                for (let cnt3 = 0; cnt3 < 11; ++cnt3) {
                    var_1812 = 0;
                    for (let cnt4 = 0; cnt4 < 30; ++cnt4) {
                        var_486[var_1810][var_1811][var_1812] = 0;
                        var_1812++;
                    }
                    var_1811++;
                }
                var_990[var_1810] = 0;
            }
            var_1810 = var_1810 + 1;
        }
        var_858 = 1;
        for (let cnt1 = 0; cnt1 < 79; ++cnt1) {
            if (var_986[var_858] == 0) {
                var_986[var_858] = 1;
                break;
            }
            var_858 = var_858 + 1;
            if (var_858 > 79) {
                var_858 = 0;
                dialog("ヤバイもの警告", 1);
            }
        }
        return;
    });
}
// 床のアイテム表示処理
function func396(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(396);
        var_1813 = var_77[var_447][var_449];
        if (var_103 == 0 && var_78[var_1813].Var10 == 0) {
            return;
        }
        var_1814 = var_66 - 1;
        if (var_1814 < 0) {
            var_1814 = 0;
        }
        var_1815 = var_66 + 1;
        if (var_1815 > var_33) {
            var_1815 = var_33;
        }
        var_1816 = var_67 + 1;
        if (var_1816 > var_34) {
            var_1816 = var_34;
        }
        var_1817 = var_67 - 1;
        if (var_1817 < 0) {
            var_1817 = 0;
        }
        var_1818 = var_78[var_1813].Var1 - var_66 + 4;
        var_1819 = var_78[var_1813].Var2 - var_67 + 4;
        var_1820 = var_78[var_1813].Var1;
        var_1821 = var_78[var_1813].Var2;
        belongings_item_list = var_78[var_1813].Var0;
        var_1248 = var_78[var_1813].Var13;
        if (var_409 == 0) {
            var_1822 = 0;
        }
        if (var_409 == 1) {
            var_1822 = 10;
        }
        if (var_409 == 2) {
            var_1822 = 20;
        }
        if (var_409 == 3) {
            var_1822 = 30;
        }
        if (var_409 == 4) {
            var_1822 = 40;
        }
        var_1823 = 0;
        if (equip_disc[368] == 1 && var_78[var_1813].Var15 == 1) {
            if (var_1153 >= 0 && var_1153 <= 8) {
                var_1823 = 0;
            }
            if (var_1153 == 9) {
                var_1823 = 1;
            }
            if (var_1153 == 10) {
                var_1823 = 0;
            }
            if (var_1153 == 11) {
                var_1823 = 1;
            }
        }
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        if (var_1824 == 0) {
            if (var_199 == 4) {
                pos(var_1818 * var_35 - var_1822 + var_1823, var_1819 * var_36);
            }
            if (var_199 == 6) {
                pos(var_1818 * var_35 + var_1822 + var_1823, var_1819 * var_36);
            }
            if (var_199 == 8) {
                pos(var_1818 * var_35 + var_1823, var_1819 * var_36 - var_1822);
            }
            if (var_199 == 2) {
                pos(var_1818 * var_35 + var_1823, var_1819 * var_36 + var_1822);
            }
            if (var_199 == 1) {
                pos(var_1818 * var_35 - var_1822 + var_1823, var_1819 * var_36 + var_1822);
            }
            if (var_199 == 3) {
                pos(var_1818 * var_35 + var_1822 + var_1823, var_1819 * var_36 + var_1822);
            }
            if (var_199 == 7) {
                pos(var_1818 * var_35 - var_1822 + var_1823, var_1819 * var_36 - var_1822);
            }
            if (var_199 == 9) {
                pos(var_1818 * var_35 + var_1822 + var_1823, var_1819 * var_36 - var_1822);
            }
            if (var_217 == 1) {
                pos(var_1818 * var_35 + var_1823, var_1819 * var_36);
            }
        }
        if (var_1824 == 1) {
            if (var_199 == 4) {
                pos(var_1818 * var_35 - 20 + 20, var_1819 * var_36);
            }
            if (var_199 == 6) {
                pos(var_1818 * var_35 + 20 - 20, var_1819 * var_36);
            }
            if (var_199 == 8) {
                pos(var_1818 * var_35, var_1819 * var_36 - 20 + 20);
            }
            if (var_199 == 2) {
                pos(var_1818 * var_35, var_1819 * var_36 + 20 - 20);
            }
            if (var_199 == 1) {
                pos(var_1818 * var_35 - 20 + 20, var_1819 * var_36 + 20 - 20);
            }
            if (var_199 == 3) {
                pos(var_1818 * var_35 + 20 - 20, var_1819 * var_36 + 20 - 20);
            }
            if (var_199 == 7) {
                pos(var_1818 * var_35 - 20 + 20, var_1819 * var_36 - 20 + 20);
            }
            if (var_199 == 9) {
                pos(var_1818 * var_35 + 20 - 20, var_1819 * var_36 - 20 + 20);
            }
        }
        yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
    });
}

// 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
function func397(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(397);
        if (belongings_item_list == 1) {
            // buffer(9)は"img_item.gif"。X座標0、Y座標0から切り取り長さ X方向40、Y方向40
            // 絵:お金。
            gcopy(9, 0, 0, 40, 40);
        }
        if (belongings_item_list >= 100 && belongings_item_list < 400) {
            // buffer(9)は"img_item.gif"。X座標40、Y座標0から切り取り長さ X方向40、Y方向40
            // 絵:disc(黄色)、身識別、床に落ちている装備disc
            gcopy(9, 40, 0, 40, 40);
        }
        if (belongings_item_list >= 400 && belongings_item_list < 450) {
            // buffer(9)は"img_item.gif"。X座標240、Y座標0から切り取り長さ X方向40、Y方向40
            // 絵:disc(銅色))、所持または床に落ちている射撃disc
            gcopy(9, 240, 0, 40, 40);
        }
        if (belongings_item_list >= 450 && belongings_item_list < 500) {
            gcopy(9, 120, 0, 40, 40);
        }
        if (belongings_item_list >= 500 && belongings_item_list < 600) {
            gcopy(9, 280, 0, 40, 40);
        }
        if (belongings_item_list >= 600 && belongings_item_list < 630) {
            gcopy(9, 0, 40, 40, 40);
        }
        if (belongings_item_list >= 650 && belongings_item_list < 654 && belongings_item_list != 652) {
            gcopy(9, 120, 40, 40, 40);
        }
        if (belongings_item_list == 652) {
            gcopy(9, 80, 40, 40, 40);
        }
        if (belongings_item_list == 654) {
            gcopy(14, 160, 0, 40, 40);
        }
        if (belongings_item_list == 655) {
            gcopy(9, 320, 200, 40, 40);
        }
        if (belongings_item_list == 630) {
            gcopy(9, 0, 200, 40, 40);
        }
        if (belongings_item_list == 631) {
            gcopy(9, 40, 200, 40, 40);
        }
        if (belongings_item_list == 632) {
            gcopy(9, 160, 200, 40, 40);
        }
        if (belongings_item_list == 633) {
            gcopy(9, 80, 200, 40, 40);
        }
        if (belongings_item_list == 634) {
            gcopy(9, 120, 200, 40, 40);
        }
        if (belongings_item_list == 635) {
            gcopy(9, 200, 240, 40, 40);
        }
        if (belongings_item_list == 636) {
            gcopy(9, 240, 240, 40, 40);
        }
        if (belongings_item_list == 639) {
            gcopy(9, 0, 240, 40, 40);
        }
        if (belongings_item_list == 640) {
            gcopy(9, 200, 240, 40, 40);
        }
        if (belongings_item_list == 641) {
            gcopy(9, 120, 120, 40, 40);
        }
        if (belongings_item_list == 644) {
            gcopy(9, 240, 160, 40, 40);
        }
        if (belongings_item_list == 645) {
            gcopy(9, 280, 160, 40, 40);
        }
        if (belongings_item_list == 646) {
            gcopy(9, 320, 160, 40, 40);
        }
        if (belongings_item_list == 647) {
            gcopy(9, 360, 240, 40, 40);
        }
        if (belongings_item_list == 648) {
            gcopy(9, 80, 240, 40, 40);
        }
        if (belongings_item_list >= 800 && belongings_item_list < 900) {
            if (var_862[belongings_item_list][0] == 0 && dangeon_number >= 2) {
                var_1825 = 0;
            }
            if (var_862[belongings_item_list][0] == 1 && dangeon_number >= 2) {
                var_1825 = 1;
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1) {
                var_1825 = 1;
            }
            if (var_262 == 1) { // var_262 == 1 なので、dangeon_number = 0 であれば
                var_1825 = 1;
            }
            if (belongings_item_list >= 801 && belongings_item_list <= 804) {
                var_1825 = 1;
            }
            if (var_626 == 1) {
                var_1825 = 1;
            }
            if (var_1825 == 0) {
                gcopy(9, 360, 280, 40, 40);
            }
            if (var_1825 == 1) {
                if (belongings_item_list == 800) {
                    gcopy(9, 760, 280, 40, 40);
                }
                if (belongings_item_list == 801) {
                    gcopy(9, 520, 280, 40, 40);
                }
                if (belongings_item_list == 802) {
                    gcopy(9, 600, 280, 40, 40);
                }
                if (belongings_item_list == 803) {
                    gcopy(9, 640, 280, 40, 40);
                }
                if (belongings_item_list == 804) {
                    gcopy(9, 560, 280, 40, 40);
                }
                if (belongings_item_list == 815) {
                    gcopy(9, 40, 280, 40, 40);
                }
                if (belongings_item_list == 808) {
                    gcopy(9, 80, 280, 40, 40);
                }
                if (belongings_item_list == 805) {
                    gcopy(9, 120, 280, 40, 40);
                }
                if (belongings_item_list == 807) {
                    gcopy(9, 160, 280, 40, 40);
                }
                if (belongings_item_list == 806) {
                    gcopy(9, 200, 280, 40, 40);
                }
                if (belongings_item_list == 809) {
                    gcopy(9, 0, 280, 40, 40);
                }
                if (belongings_item_list == 816) {
                    gcopy(9, 240, 280, 40, 40);
                }
                if (belongings_item_list == 850) {
                    gcopy(9, 280, 280, 40, 40);
                }
                if (belongings_item_list == 851) {
                    gcopy(9, 320, 280, 40, 40);
                }
                if (belongings_item_list == 817) {
                    gcopy(9, 440, 280, 40, 40);
                }
                if (belongings_item_list == 818) {
                    gcopy(9, 480, 280, 40, 40);
                }
                if (belongings_item_list == 852) {
                    gcopy(9, 400, 280, 40, 40);
                }
                if (belongings_item_list == 853) {
                    gcopy(9, 680, 280, 40, 40);
                }
                if (belongings_item_list == 854) {
                    gcopy(9, 720, 280, 40, 40);
                }
            }
        }
        // No = 700 没アイテム? マンホールのような見た目 
        if (belongings_item_list == 700) {
            gcopy(9, 0, 80, 40, 40); // buffer(9)は"img_item.gif"
        }
        // No = 701 没アイテム「ソフト・マシーンの発動によって罠にした敵」
        if (belongings_item_list == 701) {
            if (var_1248 < 50) {
                var_965 = 6; // buffer(6)は"img_enemy1a.gif"
                var_1826 = 15;
                var_966 = var_1248 * 40;
            }
            if (var_1248 >= 50 && var_1248 < 100) {
                var_965 = 21; // buffer(21)は"img_enemy2a.gif"
                var_1826 = 22;
                var_966 = (var_1248 - 50) * 40;
            }
            if (var_1248 >= 100 && var_1248 < 150) {
                var_965 = 27; // buffer(27)は"img_enemy3a.gif"
                var_1826 = 28;
                var_966 = (var_1248 - 100) * 40;
            }
            if (var_1248 >= 150 && var_1248 < 200) {
                var_965 = 13; // buffer(13)は"img_enemy4a.gif"
                var_1826 = 20;
                var_966 = (var_1248 - 150) * 40; // ロッコ・バロッコ所長はenemy_list = 173。173 - 150 = 23。23 * 40 = 920となり、Y軸920で合致する。
            }
            var_1827 = ginfo(22);
            var_1828 = ginfo(23);
            gsel(32);
            color(0, 0, 0);
            boxf(left = 0, top1 = 0, right = 50, bottom = 50);
            pos(1, 1);
            gzoom(40, 30, var_965, 960, var_966, 40, 40, 1);
            gsel(0);
            gmode(mode = 6, data2 = null, data3 = null, alpha = 255)
            pos(var_1827, var_1828 + 5 + 2);
            gcopy(32, 0, 0, 42, 42);
            pos(var_1827, var_1828 + 5 + 1);
            gcopy(32, 0, 0, 42, 42);
            pos(var_1827, var_1828 + 5 - 1);
            gcopy(32, 0, 0, 42, 42);
            pos(var_1827 - 1, var_1828 + 5);
            gcopy(32, 0, 0, 42, 42);
            pos(var_1827 + 1, var_1828 + 5);
            gcopy(32, 0, 0, 42, 42);
            gmode(mode = 2, data2 = null, data3 = null, alpha = null);
            pos(var_1827, var_1828 + 5);
            gcopy(32, 0, 0, 40, 40);
        }
        if (belongings_item_list == 711) {
            gcopy(9, 360, 160, 40, 40); // buffer(9)は"img_item.gif"
        }
        // No = 712 やばいクスリ
        if (belongings_item_list == 712) {
            gcopy(9, 40, 40, 40, 40); // buffer(9)は"img_item.gif"
        }
        // No = 713 ポルポのライター
        if (belongings_item_list == 713) {
            gcopy(9, 200, 40, 40, 40); // buffer(9)は"img_item.gif"
        }
        // No = 714 紫外線照射装置
        if (belongings_item_list == 714) {
            gcopy(9, 80, 120, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 715) {
            gcopy(9, 160, 120, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 716) {
            gcopy(9, 320, 120, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 717) {
            gcopy(9, 120, 80, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 718) {
            gcopy(9, 160, 80, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 719) {
            gcopy(9, 160, 80, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 720) {
            gcopy(9, 120, 160, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 721) {
            gcopy(9, 240, 80, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 722) {
            gcopy(9, 320, 40, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 723) {
            gcopy(9, 200, 160, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 724) {
            gcopy(9, 0, 120, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 725) {
            gcopy(9, 160, 40, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 726) {
            gcopy(9, 360, 80, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 727) {
            gcopy(9, 280, 120, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 728) {
            gcopy(9, 40, 120, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 729) {
            gcopy(9, 360, 120, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 730) {
            gcopy(9, 400, 120, 40, 40); // buffer(9)は"img_item.gif"
        }
        if (belongings_item_list == 731) {
            gcopy(9, 440, 120, 40, 40); // buffer(9)は"img_item.gif"
        }
        // Ver0.14にて追加。No = 732 ベルトのバックル
        if (belongings_item_list == 732) {
            gcopy(9, 400, 80, 40, 40); // buffer(9)は"img_item.gif"
        }
        // No = 900 コミック「GB BOY」
        if (belongings_item_list == 900) {
            gcopy(23, 360, 360, 40, 40); // buffer(9)は"img_item.gif"
        }
        // 
        if (belongings_item_list >= 901 && belongings_item_list < 1000) {
            if (belongings_item_list >= 901 && belongings_item_list <= 910) {
                var_1829 = (belongings_item_list - 901) * 40;
                var_1830 = 0;
            }
            if (belongings_item_list >= 911 && belongings_item_list <= 920) {
                var_1829 = (belongings_item_list - 911) * 40;
                var_1830 = 1 * 40;
            }
            if (belongings_item_list >= 921 && belongings_item_list <= 930) {
                var_1829 = (belongings_item_list - 921) * 40;
                var_1830 = 2 * 40;
            }
            if (belongings_item_list >= 931 && belongings_item_list <= 940) {
                var_1829 = (belongings_item_list - 931) * 40;
                var_1830 = 3 * 40;
            }
            if (belongings_item_list >= 941 && belongings_item_list <= 950) {
                var_1829 = (belongings_item_list - 941) * 40;
                var_1830 = 4 * 40;
            }
            if (belongings_item_list >= 951 && belongings_item_list <= 960) {
                var_1829 = (belongings_item_list - 951) * 40;
                var_1830 = 5 * 40;
            }
            if (belongings_item_list >= 961 && belongings_item_list <= 970) {
                var_1829 = (belongings_item_list - 961) * 40;
                var_1830 = 6 * 40;
            }
            if (belongings_item_list >= 971 && belongings_item_list <= 980) {
                var_1829 = (belongings_item_list - 971) * 40;
                var_1830 = 7 * 40;
            }
            if (belongings_item_list >= 981 && belongings_item_list <= 990) {
                var_1829 = (belongings_item_list - 981) * 40;
                var_1830 = 8 * 40;
            }
            if (belongings_item_list >= 991 && belongings_item_list <= 999) {
                var_1829 = (belongings_item_list - 991) * 40;
                var_1830 = 9 * 40;
            }
            gcopy(23, var_1829, var_1830, 40, 40);
        }
        if (belongings_item_list >= 750 && belongings_item_list < 800) {
            if (belongings_item_list >= 750 && belongings_item_list <= 759) {
                var_1829 = (belongings_item_list - 750) * 40;
                var_1830 = 10 * 40;
            }
            gcopy(23, var_1829, var_1830, 40, 40);
        }
        return;
    });
}


function func398(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(398);
        disp_item_name = "error";
        if (belongings_item_list == 1) {
            disp_item_name = "" + var_78[var_321].Var13 + " G";
        }
        // 装備discの表示
        if (belongings_item_list >= 100 && belongings_item_list < 400) {
            if (var_78[var_321].Var14 == 0) {
                disp_item_name = item_name;
            }
            if (var_78[var_321].Var14 == 1) {
                if (var_78[var_321].Var4 == 0 && var_78[var_321].Var19 <= 1) {
                    disp_item_name = item_name;
                }
                if (var_78[var_321].Var4 == 0 && var_78[var_321].Var19 > 1) {
                    disp_item_name = "" + item_name + " ★" + var_78[var_321].Var19;
                }
                if (var_78[var_321].Var4 > 0 && var_78[var_321].Var19 <= 1) {
                    disp_item_name = "" + item_name + "+" + var_78[var_321].Var4;
                }
                if (var_78[var_321].Var4 > 0 && var_78[var_321].Var19 > 1) {
                    disp_item_name = "" + item_name + "+" + var_78[var_321].Var4 + " ★" + var_78[var_321].Var19;
                }
            }
        }
        if (belongings_item_list >= 400 && belongings_item_list < 500) {
            disp_item_name = "" + item_name + "(" + var_78[var_321].Var3 + ")";
        }
        if (belongings_item_list >= 500 && belongings_item_list < 800) {
            disp_item_name = item_name;
        }
        if (belongings_item_list >= 800 && belongings_item_list < 900) {
            disp_item_name = "" + item_name + "(" + var_78[var_321].Var7 + ")";
        }
        if (belongings_item_list >= 900 && belongings_item_list < 1000) {
            disp_item_name = item_name;
        }
        return;
    });
}


function func399(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(399);
        var_1832 = "error";
        if (belongings_item_list == 1) {
            var_1832 = "" + var_1833 + " G";
        }
        if (belongings_item_list >= 100 && belongings_item_list < 400) {
            if (var_1834 == 0) {
                var_1832 = item_name;
            }
            if (var_1834 == 1) {
                if (var_1835 == 0 && var_1836 <= 1) {
                    var_1832 = item_name;
                }
                if (var_1835 == 0 && var_1836 > 1) {
                    var_1832 = "" + item_name + " ★" + var_1836;
                }
                if (var_1835 > 0 && var_1836 <= 1) {
                    var_1832 = "" + item_name + "+" + var_1835;
                }
                if (var_1835 > 0 && var_1836 > 1) {
                    var_1832 = "" + item_name + "+" + var_1835 + " ★" + var_1836;
                }
            }
        }
        if (belongings_item_list >= 400 && belongings_item_list < 500) {
            var_1832 = "" + item_name + "(" + var_1837 + ")";
        }
        if (belongings_item_list >= 500 && belongings_item_list < 800) {
            var_1832 = item_name;
        }
        if (belongings_item_list >= 800 && belongings_item_list < 900) {
            var_1832 = "" + item_name + "(" + var_1838 + ")";
        }
        if (belongings_item_list >= 900 && belongings_item_list < 1000) {
            var_1832 = item_name;
        }
        return;
    });
}