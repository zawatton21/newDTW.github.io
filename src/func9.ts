function func900(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(900);
        if (var_3517 != "") {
            var_3517 = "話文" + var_3517;
            tcpput(var_3517, var_1050);
            tcpput("\n", var_1050);
            gsel(30);
            objprm(0, "");
            gsel(0);
        }
        return;
    });
}
function func901(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(901);
        if (ginfo(2) != 30) {
            return;
        }

        if (wparam == 13) {
            yield func900();
        }
        return;
    });
}
function func902(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(902);
        if (var_494[1] != "") {
            var_3560 = var_494[1];
            yield func903();
            var_3561 = "" + var_3562 + "" + var_494[1];
            tcpput(var_3561, var_1050);
            tcpput("\n", var_1050);
        }
        if (var_494[2] != "") {
            var_3560 = var_494[2];
            yield func903();
            var_3563 = "" + var_3562 + "" + var_494[2];
            tcpput(var_3563, var_1050);
            tcpput("\n", var_1050);
        }
        yield func907();
        return;
    });
}
function func903(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        return;
    });
}
function func904(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(904);
        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + current_floor + "階に降りた";
        if (var_73[var_66][var_67] == 2) {
            var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + current_floor + "階に上った";
        }
        tcpput(var_3561, var_1050);
        tcpput("\n", var_1050);
        yield func907();
        return;
    });
}
function func905(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(905);
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1) {
            var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはホテルの外に出た";
        }
        // No = 2 なので、レクイエムの第迷宮
        if (dangeon_number == 2) {
            var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはレクイエムの大迷宮に入った";
        }
        // No = 3 なので、ディアボロの試練
        if (dangeon_number == 3) {
            var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはさらなる試練に向かった";
        }
        // No = 4 なので、一巡後の世界
        if (dangeon_number == 4) {
            var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは一巡後の世界へ進んだ";
        }
        if (dangeon_number == 5) {
            var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + var_21 + "に入った";
        }
        tcpput(var_3561, var_1050);
        tcpput("\n", var_1050);
        yield func907();
        return;
    });
}
function func906(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(906);
        if (var_408 >= 1) {
            yield func914();
        }
        if (var_3564 == 1) {
            var_3564 = 0;
            yield func919();
        }
        if (var_3565 == 1) {
            var_3565 = 0;
            yield func923();
        }
        if (var_1046 >= 1) {
            yield func917();
        }
        return;
    });
}
function func907(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(907);
        yield func426();
        yield func427();
        yield func428();
        yield func429();
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
        var_3516[8] = current_floor;
        var_3516[9] = wallet;
        var_3516[10] = dangeon_number;
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
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            var_3567 = "" + var_3567 + "," + var_3516[var_3566];
            var_3566++;
        }
        var_3567 = "" + var_3567 + "," + var_1170;
        tcpput(var_3567, var_1050);
        tcpput("\n", var_1050);
        return;
    });
}
function func908(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(908);
        var_3568 = 0;
        var_3569 = 0;
        for (let cnt1 = 0; cnt1 < 22; ++cnt1) {
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
        return;
    });
}
function func909(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(909);
        var_3571 = 0;
        if (var_407 != 2) {
            var_3572 = 0;
            var_3573 = int(var_1068[10]);
            if (current_floor < var_3573) {
                var_3572 = var_3573 - current_floor;
            }
            if (current_floor > var_3573) {
                var_3572 = current_floor - var_3573;
            }
            if (current_floor == var_3573) {
                var_3572 = 0;
            }
            if (var_407 == 0 || var_3572 >= 3 || var_536 == 0 || dangeon_number == 0 || dangeon_number != int(var_1068[12])) {
                yield func910();
                return;
            }
        }
        if (var_407 == 2) {
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
            if (current_floor < var_3573) {
                var_3572 = var_3573 - current_floor;
            }
            if (current_floor > var_3573) {
                var_3572 = current_floor - var_3573;
            }
            if (current_floor == var_3573) {
                var_3572 = 0;
            }
            // No = 0 なので、拠点(ホテル、亀、)
            if (var_407 == 0 || var_3572 >= 5 || dangeon_number == 0 || dangeon_number != var_1069[var_3574][12]) {
                yield func910();
                return;
            }
        }
        if (var_3572 == 0) {
            var_2164 = var_66;
            var_2165 = var_67;
            var_3571 = 1;
        }
        if (var_3572 == 1 || var_3571 == 0) {
            for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
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
            for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
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
            for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
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
            return;
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
        if (var_2170 == 1) {
            yield func724();
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
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
                var_1511++;
            }
            var_1511 = 0;
            var_271 = 0;
            var_77[var_1512][var_1513] = var_2171;
            var_731 = 0;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                var_78[var_2171][var_731] = var_3518[1][var_731];
                var_731++;
            }
            var_78[var_2171].Var1 = var_1512;
            var_78[var_2171].Var2 = var_1513;
            var_78[var_2171].Var9 = var_71[var_1512][var_1513];
            var_78[var_2171].Var10 = 1;
            var_78[var_2171].Var14 = 0;
            if (var_78[var_2171].Var0 >= 800 && var_78[var_2171].Var0 < 900) {
                yield func395();
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
            }
        }
        yield func910();
        yield func331();
        return;
    });
}
function func910(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(910);
        var_408 = var_408 - 1;
        if (var_408 >= 1) {
            var_3576 = 1;
            var_3577 = 2;
            for (let cnt2 = 0; cnt2 < var_408; ++cnt2) {
                var_3578 = 0;
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    var_3518[var_3576][var_3578] = var_3518[var_3577][var_3578];
                    var_3518[var_3577][var_3578] = 0;
                    var_3578++;
                }
                var_3576++;
                var_3577++;
            }
        }
        return;
    });
}
function func911(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(911);
        var_3519 = dim(30);
        var_3519[0] = var_233[var_225].Var0;
        if (dangeon_number == 3 && var_3519[0] == 112) {
            if (current_floor >= 60 && current_floor <= 66) {
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
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            var_3579 = "" + var_3579 + "," + var_3519[var_3566];
            var_3566++;
        }
        item_list = var_233[var_225].Var0;
        disc_rarity = var_233[var_225].Var13;
        yield func492(); // アイテムリスト呼び出し
        var_3580 = item_name;
        if (var_233[var_225].Var11 == 1) {
            var_106 = 1;
            item_list = var_233[var_225].Var0;
            yield func492(); // アイテムリスト呼び出し
            var_482 = 0;
            var_482 = (var_233[var_225].Var3 + var_233[var_225].Var4) * 50;
            if (var_233[var_225].Var19 > 1) {
                var_482 = var_233[var_225].Var19 * 500 + var_482;
            }
            buying_price = buying_price + var_482;
            var_107 = var_107 + buying_price;
        }
        var_1977 = 0;
        if (var_553 == var_225) {
            var_476 = dim(40);
            var_580 = var_580 - var_894;
            var_894 = 0;
            var_357 = 0;
            yield func494();
            var_1977 = 1;
        }
        if (var_554 == var_225) {
            var_477 = dim(40);
            var_581 = var_581 - var_895;
            var_895 = 0;
            var_358 = 0;
            yield func494();
            var_1977 = 1;
        }
        if (var_555 == var_225) {
            var_478 = dim(40);
            var_215 = 0;
            yield func494();
            var_1977 = 1;
        }
        if (var_556 == var_225) {
            var_479 = dim(40);
            var_410 = 0;
            var_250 = 0;
            var_1977 = 1;
        }
        if (var_1977 == 1) {
            item_list = var_233[var_225].Var0;
            yield func106();
        }
        yield func430();
        yield func433(); // アイテム配列の "数" 増減？関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「" + var_3580 + "」は";
        comments_row2 = "ﾑｰﾃﾞｨｰﾌﾞﾙｰｽの手で運ばれていった";
        var_198 = 1;
        var_300 = 0;
        tcpput(var_3579, var_1050);
        tcpput("\n", var_1050);
        yield func047();
        var_198 = 0;
        var_300 = 0;
        var_1457 = var_66;
        var_1458 = var_67;
        var_271 = 1;
        var_1460 = 1;
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            yield func337();
            var_1460++;
        }
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
        yield func506();
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の関数
        }
        var_217 = 1;
        yield func019();
        return;
    });
}
function func912(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            var_3579 = "" + var_3579 + "," + var_3519[var_3566];
            var_3566++;
        }
        tcpput(var_3579, var_1050);
        tcpput("\n", var_1050);
        return;
    });
}
function func913(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(913);
        var_408++;
        var_3568 = 0;
        var_3569 = 0;
        for (let cnt1 = 0; cnt1 < 29; ++cnt1) {
            getstr(var_3521[var_3569], var_3537, var_3568, 44);
    
            var_3568 = var_3568 + strsize;
            var_3569++;
        }
        var_3569 = 1;
        var_3581 = 0;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            var_3518[var_408][var_3581] = int(var_3521[var_3569]);
            var_3569++;
            var_3581++;
        }
        return;
    });
}
function func914(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(914);
        yield func909();
        return;
    });
}
function func915(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(915);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ディアボロはここよーッ！";
        comments_row2 = "ここにいるわよォ～～～ッ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        var_3561 = "女帝";
        tcpput(var_3561, var_1050);
        tcpput("\n", var_1050);
        yield func340();
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の関数
        }
        var_217 = 1;
        yield func019();
        return;
    });
}
function func916(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(916);
        if (var_1046 >= 29) {
            return;
        }
        var_1046++;
        var_3582 = "";
        var_3568 = 0;
        var_3569 = 0;
        for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
            getstr(var_3582, var_3543, var_3568, 44);
            var_1058[var_1046][var_3569] = int(var_3582);
    
            var_3568 = var_3568 + strsize;
            var_3569++;
        }
        return;
    });
}
function func917(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(917);
        var_3583 = 1;
        for (let cnt1 = 0; cnt1 < var_1046; ++cnt1) {
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
            yield func556();
            if (var_2110 == 0) {
                var_1845 = 5;
                var_2519 = var_201;
                yield func556();
                var_2519 = 0;
            }
            if (var_2110 == 0) {
                var_1845 = 0;
                yield func556();
            }
            var_1845 = 0;
            var_2535 = 0;
            var_3583++;
        }
        var_1046 = 0;

        var_1058 = dim(30, 30);
        yield func331();
        comments_row1 = "敵が集まってしまった！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        return;
    });
}
function func918(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(918);
        var_3564 = 1;
        return;
    });
}
function func919(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(919);
        var_3572 = 0;
        var_3573 = int(var_1068[10]);
        if (current_floor < var_3573) {
            var_3572 = var_3573 - current_floor;
        }
        if (current_floor > var_3573) {
            var_3572 = current_floor - var_3573;
        }
        if (current_floor == var_3573) {
            var_3572 = 0;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "遠くから声が聞こえる。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340();
        if (var_3572 >= 4) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "しかしよく聞こえなかった…";
            comments_row2a = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_1046 = 0;
    
            var_1058 = dim(30, 30);
            return;
        }
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ディアボロはここよッ！";
        comments_row2a = "　ここにいるわよォ～～ッ！」";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340();
        var_3584 = 0;
        var_2194 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            var_2220 = 0;
            if (var_2194 != var_124) {
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                    yield func920();
                }
                if (var_2220 == 0) {
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
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                        yield func920();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        yield func920();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        yield func920();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        yield func920();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        yield func920();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        yield func920();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        yield func920();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        yield func920();
                    }
                }
                if (var_2220 == 0 && var_201 <= 12 && var_201 != 0) {
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
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                        yield func920();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                        yield func920();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                        yield func920();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                        yield func920();
                    }
                }
            }
            var_2194 = var_2194 + 1;
        }
        yield func331();
        if (var_3584 == 1) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "周囲の敵は声に誘われて";
            comments_row2a = "去っていった";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
        }
        if (var_3584 == 0) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "しかし何も起こらなかった";
            comments_row2a = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_1046 = 0;
    
            var_1058 = dim(30, 30);
        }
        return;
    });
}
function func920(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(920);
        if (var_83[var_2194].Var31 == 4 || var_83[var_2194].Var31 == 5 || var_83[var_2194].Var13 != 0 || var_151 != 0 || var_163 != 0) {
            return;
        }
        if (var_83[var_2194].Var0 == 20 || var_83[var_2194].Var0 == 132 || var_83[var_2194].Var0 == 143 || var_83[var_2194].Var0 == 90 || var_83[var_2194].Var0 == 96 || var_83[var_2194].Var0 == 91 || var_83[var_2194].Var0 == 92) {
            return;
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
        return;
    });
}
function func921(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(921);
        DSPLAY(audio_id = 234);
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337();
        }
        var_271 = 1;
        var_1321 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337();
            var_1321 = var_1321 + 1;
        }
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「イヒヒヒヒ";
        comments_row2 = "　注文しておいたよッ！」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340();
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ピッツァ３枚で３００Ｇ」";
        comments_row2a = "";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340();
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「もちろんお釣りはいらないよねッ！」";
        comments_row2a = "";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340();
        DSPLAY(audio_id = 139);
        wallet = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337();
            var_1321 = var_1321 + 1;
        }
        var_271 = 0;
        var_1321 = 0;
        var_3561 = "喋背";
        tcpput(var_3561, var_1050);
        tcpput("\n", var_1050);
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の関数
        }
        var_217 = 1;
        yield func019();
        return;
    });
}
function func922(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(922);
        var_3565 = 1;
        return;
    });
}
function func923(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(923);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「おまたせしましたァ――ッ";
        comments_row2 = "　デリバリーピッザですーっ」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340();
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「こんにちは――っ";
        comments_row2a = "　どちらですかーっ」";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340();
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「どちらへ運びましょうか――ッ！？」";
        comments_row2a = "";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340();
        DSPLAY(audio_id = 133); // アイテムを置いた時の効果音
        var_1756 = 1;
        var_452 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func384();
        }
        var_1756 = 0;
        var_452 = 0;
        yield func331();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ピザ屋はその辺に置いて帰ったようだ。";
        comments_row2a = "";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337();
        }
        return;
    });
}
function func924(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        return;
    });
}
function func925(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(925);
        if (var_407 >= 1) {
            var_407 = 0;
            onkey(0);
            netclose(var_1050);
            gsel(window_id = 33, window_mode = -1);
            gsel(window_id = 30, window_mode = -1);
            gsel(window_id = 0, window_mode = 1);
            yield func193();
            return;
        }
        if (var_407 == 0) {
            var_509 = 0;
            var_499 = 0;
            yield func894();
            return;
        }
        stop();
    });
}
function func926(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(926);
        netfail(var_1050);
        if (stat) {
            var_407 = 0;
            netclose(var_1050);
            gsel(window_id = 33, window_mode = -1);
            gsel(window_id = 30, window_mode = -1);
            gsel(window_id = 0, window_mode = 1);           
            onkey(0);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "接続が切断された。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            return;
        }
        tcpcount(var_3538, var_1050);
        if (var_3538 != 0) {
            var_3537 = sdim(1024);
            var_3539 = sdim(1024);
            tcpgetl(var_3537, 1024, var_1050);
            var_3539 = var_3537;
            var_3540 = 0;
            var_3541 = 0;
            var_3542 = "";
            var_3588 = "";
            if (stat != 0) {
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
                    return;
                }
                if (var_3542 == "具０" || var_3542 == "具１" || var_3542 == "具２" || var_3542 == "具３" || var_3542 == "具４" || var_3542 == "具５" || var_3542 == "具６" || var_3542 == "具７") {
                    var_3575 = "" + var_3542;
                    yield func913();
                    return;
                }
                var_3589 = 99;
                if (var_3542 == "捨０") {
                    var_3589 = 0;
                    yield func927();
                }
                if (var_3542 == "捨１") {
                    var_3589 = 1;
                    yield func927();
                }
                if (var_3542 == "捨２") {
                    var_3589 = 2;
                    yield func927();
                }
                if (var_3542 == "捨３") {
                    var_3589 = 3;
                    yield func927();
                }
                if (var_3542 == "捨４") {
                    var_3589 = 4;
                    yield func927();
                }
                if (var_3542 == "捨５") {
                    var_3589 = 5;
                    yield func927();
                }
                if (var_3542 == "捨６") {
                    var_3589 = 6;
                    yield func927();
                }
                if (var_3542 == "捨７") {
                    var_3589 = 7;
                    yield func927();
                }
                if (instr(var_3537, 0, "さんが接続しました") != (-1)) {
                    var_3544 = 6;
                    yield func929();
                }
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
                if (var_3540 == 0) {
                    var_3545 = 33;
                    var_3546 = 220;
                    var_3547 = 420;
                    var_3548 = 440;
                    var_3549 = 125;
                    gsel(33);
                    redraw(0);
                    if (var_624 >= 1) {
                        if (var_625 == 1) {
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
                            if (var_3593 == 0) {
                                yield func934();
                            }
                        }
                        font("MS ゴシック", 12);
                        var_3595 = 0;
                        var_3596 = 58;
                        var_3597 = var_624 - 1;
                        var_3598 = var_3597 + 1;
                        if (var_1069[var_3597][4] != 0 && var_624 >= 1 && var_3593 == 0) {
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
                            for (let cnt6 = 0; cnt6 < 9; ++cnt6) {
                                var_447 = 0;
                                for (let cnt7 = 0; cnt7 < 9; ++cnt7) {
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
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
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
                            yield func070();
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
                            yield func070();
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
                            yield func070();
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
                            yield func928();
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
                            yield func924();
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
                            yield func924();
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
                            yield func924();
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
                            yield func924();
                            if (var_1069[var_3597][21] == 0) {
                                var_3559 = "なし";
                            }
                            if (var_1069[var_3597][21] != 0) {
                                var_3559 = var_3559 + "+" + var_1069[var_3597][22];
                            }
                            var_3559 = "[射]" + var_3559;
                            mes(var_3559);
                        }
                    }
                    if (var_3593 == 1) {
                        var_3593 = 0;
                        var_624 = 0;
                        yield func934();
                    }
                    if (var_624 == 0) {
                        color(1, 1, 1);
                        boxf();
                        font("MS ゴシック", 12);
                        var_3595 = 0;
                        var_3597 = 0;
                        for (let cnt5 = 0; cnt5 < 8; ++cnt5) {
                            if (var_1069[var_3597][4] != 0) {
                                var_3598 = var_3597 + 1;
                                color(0, 255, 0);
                                pos(10, var_3595);
                                mes("[" + var_3598 + "] " + var_1070[var_3597]);
                                color(255, 255, 255);
                                pos(210, var_3595);
                                var_3600 = var_1069[var_3597][12];
                                yield func928();
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
                                yield func924();
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
                                yield func924();
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
                                yield func924();
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
                            }
                            var_3597++;
                        }
                    }
                }
                redraw(1);
            }
        }
        return;
    });
}
function func927(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(927);
        var_3568 = 0;
        var_3569 = 0;
        var_3541 = 1;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            getstr(var_1068[var_3569], var_3543, var_3568, 44);
            if (cnt1 == 0) {
                var_1070[var_3589] = "" + var_1068[cnt1];
            }
            if (cnt1 != 0 && cnt1 != 29) {
                var_1069[var_3589][cnt1] = int(var_1068[cnt1]);
            }
            if (cnt1 == 29) {
                var_1071[var_3589] = var_1068[cnt1];
            }
    
            var_3568 = var_3568 + strsize;
            var_3569++;
        }
        return;
    });
}
function func928(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        return;
    });
}
function func929(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(929);
        yield func426();
        yield func427();
        yield func428();
        yield func429();
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
        var_3516[8] = current_floor;
        var_3516[9] = wallet;
        var_3516[10] = dangeon_number;
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
        for (let cnt1 = 0; cnt1 < 27; ++cnt1) {
            var_3567 = "" + var_3567 + "," + var_3516[var_3566];
            var_3566++;
        }
        var_3567 = "" + var_3567 + "," + var_1170;
        tcpput(var_3567, var_1050);
        tcpput("\n", var_1050);
        return;
    });
}
function func930(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(930);
        if (var_494[1] != "") {
            var_3560 = var_494[1];
            yield func931();
            var_3561 = "" + var_3562 + "" + var_494[1];
            tcpput(var_3561, var_1050);
            tcpput("\n", var_1050);
        }
        if (var_494[2] != "") {
            var_3560 = var_494[2];
            yield func931();
            var_3563 = "" + var_3562 + "" + var_494[2];
            tcpput(var_3563, var_1050);
            tcpput("\n", var_1050);
        }
        yield func929();
        return;
    });
}
function func931(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        return;
    });
}
function func932(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(932);
        var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + current_floor + "階に降りた";
        if (var_73[var_66][var_67] == 2) {
            var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + current_floor + "階に上った";
        }
        tcpput(var_3561, var_1050);
        tcpput("\n", var_1050);
        yield func929();
        return;
    });
}
function func933(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(933);
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1) {
            var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはホテルの外に出た";
        }
        // No = 2 なので、レクイエムの第迷宮
        if (dangeon_number == 2) {
            var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはレクイエムの大迷宮に入った";
        }
        // No = 3 なので、ディアボロの試練
        if (dangeon_number == 3) {
            var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはさらなる試練に向かった";
        }
        // No = 4 なので、一巡後の世界
        if (dangeon_number == 4) {
            var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは一巡後の世界へ進んだ";
        }
        if (dangeon_number == 5) {
            var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + var_21 + "に入った";
        }
        tcpput(var_3561, var_1050);
        tcpput("\n", var_1050);
        yield func929();
        return;
    });
}
function func934(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        return;
    });
}
function func935(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        for (let cnt1 = 0; cnt1 < var_2324; ++cnt1) {
    
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(40, var_230);
            color(255, 255, 255);
            var_3572 = 0;
            var_3573 = var_1069[cnt1][10];
            if (current_floor < var_3573) {
                var_3572 = var_3573 - current_floor;
            }
            if (current_floor > var_3573) {
                var_3572 = current_floor - var_3573;
            }
            if (current_floor == var_3573) {
                var_3572 = 0;
            }
            // No = 0 なので、拠点(ホテル、亀、)
            if (dangeon_number == 0) {
                color(255, 0, 0);
            }
            if (dangeon_number != var_1069[cnt1][12]) {
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
            if (var_2321[cnt1] == var_40) {
                color(150, 150, 150);
            }
            if (var_2321[cnt1] == "(no entry)") {
                color(150, 150, 150);
            }
            mes("" + var_2321[cnt1]);
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
        return;
    });
}
