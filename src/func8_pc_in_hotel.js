/*
ヴェネチアホテルに設置してあるPC設定
口座、アイテム手配等
*/ 
function func802() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(802);
        var_243 = 0;
        DSPLAY(210);
        var_783 = 1;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 2;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 3;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 4;
        for (var cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337();
        }
        var_783 = 5;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 6;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 7;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 5;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 8;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 9;
        if (var_1014 == 0) {
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "ﾍﾟﾘｰｺﾛ「ボス…　私です。ﾍﾟﾘｰｺﾛです」";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「私ならば、今のボスのお力に";
            var_297 = "　なれるでしょう…";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「私が手に入れられるｱｲﾃﾑの情報を";
            var_297 = "　そのパソコンに送信します。";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「少々費用はかかりますが、";
            var_297 = "　必ず手に入れてみせます。";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「ｱｲﾃﾑはダンジョンの１階に";
            var_297 = "　届けておきましょう」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            var_1014 = 1;
        }
        if (var_991[0][1] == 0) {
            var_1013 = 0;
        }
        yield func094();
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        if (var_1013 != 0) {
            var_293 = "ﾍﾟﾘｰｺﾛ「ボス…何を仕入れてきましょう」";
            var_294 = "";
        }
        if (var_1013 == 0) {
            var_293 = "ﾍﾟﾘｰｺﾛ「ボス…まだ何も手に入りません」";
            var_294 = "";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (var cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337();
        }
        if (var_1013 == 0) {
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func801();
            yield func009();
            return;
        }
        yield func340();
        yield func051();
        var_198 = 0;
        var_1206 = 1;
        var_1881 = var_1013 * 20 + 37 + 30;
        var_228 = 45;
        var_225 = 1;
        yield func803();
        return;
    });
}
function func803() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(803);
        yield func337();
        yield func080();
        if (var_239 == 1) {
            var_1206 = 0;
            var_783 = 0;
            DSPLAY(212);
            yield func801();
            yield func051();
            yield func009();
            return;
        }
        if (var_242 == 1 || var_244 == 1) {
            DSPLAY(212);
            yield func051();
            yield func805();
            return;
        }
        if (var_259 == 1) {
            if (var_225 != var_1013) {
                var_228 = var_228 + 22;
                var_225 = var_225 + 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func803();
                return;
            }
            if (var_225 == var_1013) {
                var_228 = 45;
                var_225 = 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func803();
                return;
            }
        }
        if (var_255 == 1) {
            if (var_225 != 1) {
                var_228 = var_228 - 22;
                var_225 = var_225 - 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func803();
                return;
            }
            if (var_225 == 1) {
                var_228 = 45 + (var_1013 - 1) * 22;
                var_225 = var_1013;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func803();
                return;
            }
        }
        yield func803();
        return;
    });
}
function func804() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(804);
        color(0, 0, 0);
        gmode(4, null, null, 100);
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
        for (var cnt1 = 0; cnt1 < var_1013; ++cnt1) {
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
            var_232 = var_2010;
            var_487 = var_2017;
            yield func492();
            if (var_2010 > 0) {
                font("ＭＳ Ｐゴシック", 16, 1);
                color(255, 255, 255);
                pos(40, var_230);
                if (var_232 >= 100 && var_232 < 400) {
                    color(0, 255, 0);
                    mes(var_489);
                }
                if (var_232 >= 400 && var_232 < 500) {
                    color(225, 195, 145);
                    mes("" + var_489 + "(" + var_2011 + ")");
                }
                if (var_232 >= 500 && var_232 < 800) {
                    color(255, 255, 255);
                    mes(var_489);
                }
                if (var_232 >= 800 && var_232 < 900) {
                    color(0, 255, 255);
                    mes("" + var_489 + "(" + var_2014 + ")");
                }
                if (var_232 >= 900 && var_232 < 1000) {
                    color(255, 255, 255);
                    mes(var_489);
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
        }
        var_2023 = var_991[0][var_225][0];
        var_2024 = var_991[0][var_225][5];
        var_2025 = var_991[0][var_225][12];
        var_2026 = var_991[0][var_225][13];
        var_2027 = var_991[0][var_225][14];
        var_2028 = var_991[0][var_225][15];
        var_2029 = var_991[0][var_225][16];
        var_232 = var_2023;
        var_487 = var_2026;
        yield func492();
        font("ＭＳ Ｐゴシック", 14, 1);
        pos(15, 283);
        color(255, 255, 255);
        if (var_232 < 100 || var_232 >= 400) {
            mes(var_806);
        }
        if (var_232 >= 100 && var_232 < 400 && var_2027 == 0) {
            mes("" + var_806);
        }
        if (var_232 >= 100 && var_232 < 400 && var_2027 == 1) {
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
        font("ＭＳ Ｐゴシック", 16, 1);
        pos(15, var_228);
        mes(">");
        pos(16, var_228);
        mes(">");
        pos(17, var_228);
        mes(">");
        return;
    });
}

function func805() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(805);
        var_1206 = 0;
        var_232 = var_991[0][var_225][0];
        var_487 = var_991[0][var_225][13];
        yield func492();
        var_3188 = var_489;
        var_482 = 0;
        var_482 = (var_991[0][var_225][3] + var_991[0][var_225][4]) * 50;
        var_1925 = var_483 + var_482;
        var_1925 = var_1925 * var_1036;
        var_3189 = var_1925;
        if (var_415 < var_3189) {
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "それを買うには お金が足りません。";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_3190 = var_3189 - var_415;
            if (var_3190 <= var_1032) {
                yield func340();
                yield func094();
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "口座のお金を足して買いますか？";
                var_297 = "";
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                var_245 = 19;
                var_246 = 45;
                var_546 = 1;
                var_3191 = 1;
                var_548 = 1;
                yield func839();
                return;
            }
            yield func340();
            yield func051();
            var_198 = 0;
            var_1206 = 1;
            yield func803();
            return;
        }
        yield func094();
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        var_293 = "【" + var_3188 + "】は";
        var_294 = "" + var_3189 + "G です。";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3192 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func806() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(806);
        var_415 = var_415 - var_3189;
        yield func807();
    });
}
function func807() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(807);
        var_1206 = 0;
        var_232 = var_991[0][var_225][0];
        var_487 = var_991[0][var_225][13];
        yield func492();
        var_3188 = var_489;
        var_1037 = var_1037 + 1;
        for (var cnt1 = 0; cnt1 < 30; ++cnt1) {
            var_991[1][var_1037][cnt1] = var_991[0][var_225][cnt1];
        }
        var_991[1][var_1037][11] = 0;
        var_991[0][var_225][0] = 0;
        var_1957 = 0;
        var_447 = 1;
        var_449 = 2;
        for (var cnt1 = 0; cnt1 < var_1013; ++cnt1) {
            if (var_991[0][var_447][0] == 0) {
                for (var cnt3 = 0; cnt3 < 30; ++cnt3) {
                    var_991[0][var_447][cnt3] = var_991[0][var_449][cnt3];
                }
                var_1957 = 1;
            }
            if (var_1957 == 1) {
                for (var cnt3 = 0; cnt3 < 30; ++cnt3) {
                    var_991[0][var_447][cnt3] = var_991[0][var_449][cnt3];
                }
            }
            var_447 = var_447 + 1;
            var_449 = var_449 + 1;
        }
        var_1013 = var_1013 - 1;
        DSPLAY(207);
        yield func094();
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        var_293 = "" + var_3188 + "ですね…";
        var_294 = "ﾚｸｲｴﾑの大迷宮１階に必ず届けます。";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (var cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337();
        }
        yield func801();
        yield func009();
        return;
    });
}
function func808() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(808);
        var_836 = var_62;
        var_837 = var_91;
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
        for (var cnt1 = 0; cnt1 < 10; ++cnt1) {
            for (var cnt2 = 0; cnt2 < 30; ++cnt2) {
                var_991[0][var_683][cnt2] = 0;
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
            yield func385();
            if (var_262 == 1) {
                var_62 = 0;
            }
            for (var cnt2 = 0; cnt2 < 30; ++cnt2) {
                var_991[0][var_683][cnt2] = var_78[var_866]["Var" + cnt2];
            }
            var_991[0][var_683][11] = 1;
            var_991[0][var_683][12] = 0;
            var_991[0][var_683][14] = 0;
            var_991[0][var_683][15] = 0;
            var_683 = var_683 + 1;
        }
        return;
    });
}
function func809() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(809);
        DSPLAY(210);
        var_783 = 1;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 2;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 3;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 4;
        for (var cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337();
        }
        var_783 = 5;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 6;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 7;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 5;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 12;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 13;
        if (var_1039 == 0) {
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "ﾎﾟﾙﾎﾟ「ブフゥ～～～～…」";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「ボス…ダンジョンの一人旅は危険です」";
            var_297 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「ダンジョン内で仲間と出会えれば";
            var_297 = "　冒険がグッと楽になるでしょう…」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「ブフゥ～～～…」";
            var_297 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「しかし問題は、";
            var_297 = "　毎回必ず出会えるわけではないところ」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「私ならば、有能な人材を";
            var_297 = "　あらかじめ１階に呼ぶことが可能です」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「そのための費用として";
            var_297 = "　2000Gかかってしまいますが…」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「ブフゥ～～～…」";
            var_297 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            var_1039 = 1;
        }
        if (var_1040 == 1) {
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "ﾎﾟﾙﾎﾟ「ﾚｸｲｴﾑの大迷宮１階に";
            var_294 = "　　　ヒマなやつを呼んであります」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_198 = 0;
            yield func812();
            return;
        }
        yield func094();
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        var_293 = "ﾎﾟﾙﾎﾟ「ボス…　2000Gで";
        var_294 = "　　　仲間を１階に呼んでおきますか？」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340();
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3193 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func810() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(810);
        if (var_415 >= 2000) {
            DSPLAY(207);
            var_415 = var_415 - 2000;
            var_1040 = 1;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「わかりました…。手の空いている者を";
            var_294 = "　ﾚｸｲｴﾑの大迷宮１階に呼んでおきます」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_198 = 0;
            yield func812();
            return;
        }
        if (var_415 < 2000) {
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「おっと…";
            var_294 = "　お金が足りないようですな」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_3190 = 2000 - var_415;
            if (var_3190 <= var_1032) {
                yield func094();
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "「口座のお金を足しますか？」";
                var_297 = "";
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                var_245 = 19;
                var_246 = 45;
                var_546 = 1;
                var_3193 = 2;
                var_548 = 1;
                yield func839();
                return;
            }
            var_198 = 0;
            yield func812();
            return;
        }
        yield func811();
    });
}
function func811() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(811);
        var_415 = 0;
        var_1032 = var_1032 - var_3190;
        var_1040 = 1;
        DSPLAY(207);
        yield func094();
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        var_293 = "「わかりました…。手の空いている者を";
        var_294 = "　ﾚｸｲｴﾑの大迷宮１階に呼んでおきます」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340();
        var_198 = 0;
        yield func812();
        return;
    });
}
function func812() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(812);
        var_198 = 0;
        DSPLAY(211);
        var_783 = 5;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 4;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 3;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 2;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 1;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 0;
        yield func009();
        return;
    });
}
function func813() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(813);
        DSPLAY(210);
        var_783 = 1;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 2;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 3;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 4;
        for (var cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337();
        }
        var_783 = 5;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 6;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 7;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 5;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 14;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 15;
        if (var_830 == 0) {
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「はい…こちらはSPW財団です」";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「前回の冒険でやられた敵の";
            var_297 = "　能力を調べることができます」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「調査費用は1000Gです」";
            var_297 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            var_198 = 0;
            yield func817();
            return;
        }
        var_437 = var_830;
        yield func626();
        var_3194 = "" + var_891;
        yield func094();
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        var_293 = "「はい…こちらはSPW財団です」";
        var_294 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340();
        yield func094();
        var_293 = var_296;
        var_294 = var_297;
        var_296 = "「" + var_3194 + "に";
        var_297 = "　やられてしまったようですね？」";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340();
        yield func094();
        var_293 = var_296;
        var_294 = var_297;
        var_296 = "「1000Gの調査費で";
        var_297 = "　敵の能力を調べられます」";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340();
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3195 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func814() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(814);
        if (var_415 >= 1000) {
            DSPLAY(207);
            var_415 = var_415 - 1000;
            var_198 = 0;
            yield func816();
            return;
        }
        if (var_415 < 1000) {
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「おや…";
            var_294 = "　お金が足りないようです」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_3190 = 1000 - var_415;
            if (var_3190 <= var_1032) {
                yield func094();
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "「口座のお金を足しますか？」";
                var_297 = "";
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                var_245 = 19;
                var_246 = 45;
                var_546 = 1;
                var_3195 = 2;
                var_548 = 1;
                yield func839();
                return;
            }
            var_198 = 0;
            yield func817();
            return;
        }
        yield func815();
    });
}
function func815() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(815);
        var_415 = 0;
        DSPLAY(207);
        var_1032 = var_1032 - var_3190;
        var_198 = 0;
        yield func816();
        return;
    });
}
function func816() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(816);
        var_2233 = var_1038 + 1;
        var_2234 = 0;
        for (var cnt1 = 0; cnt1 < var_2233; ++cnt1) {
            if (var_989[cnt1] == var_830) {
                var_2234 = 1;
                var_1610 = cnt1;
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
        DSPLAY(212);
        var_502 = 1;
        yield func356();
        return;
    });
}
function func817() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(817);
        var_2357 = 0;
        var_198 = 0;
        DSPLAY(211);
        var_783 = 5;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 4;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 3;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 2;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 1;
        for (var cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337();
        }
        var_783 = 0;
        yield func009();
        return;
    });
}
function func818() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(818);
        var_243 = 0;
        DSPLAY(212);
        if (var_404 == 0) {
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "パソコンが置いてある。";
            var_294 = "まだ使えないようだ…";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_198 = 1;
            var_300 = 0;
            yield func340();
            yield func051();
            var_198 = 0;
            yield func009();
            return;
        }
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        var_293 = "何をしますか？";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        var_198 = 1;
        var_300 = 0;
        var_245 = 19;
        var_246 = 45;
        var_3196 = 0;
        var_1204 = 1;
        yield func051();
        yield func819();
    });
}
function func819() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(819);
        yield func337();
        yield func080();
        if (var_404 >= 1) {
            if (var_259 == 1 && var_3196 != 4) {
                var_246 = var_246 + 16;
                var_3196 = var_3196 + 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func819();
                return;
            }
            if (var_259 == 1 && var_3196 == 4) {
                var_246 = 45;
                var_3196 = 0;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func819();
                return;
            }
            if (var_255 == 1 && var_3196 != 0) {
                var_246 = var_246 - 16;
                var_3196 = var_3196 - 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func819();
                return;
            }
            if (var_255 == 1 && var_3196 == 0) {
                var_246 = 109;
                var_3196 = 4;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func819();
                return;
            }
        }
        if (var_242 == 1 || var_244 == 1) {
            if (var_3196 == 0) {
                var_1204 = 0;
                var_198 = 0;
                DSPLAY(212);
                yield func051();
                yield func796();
                return;
            }
            if (var_3196 == 1) {
                var_1204 = 0;
                var_198 = 0;
                DSPLAY(212);
                yield func051();
                yield func797();
                return;
            }
            if (var_3196 == 2) {
                var_1204 = 0;
                var_198 = 0;
                DSPLAY(212);
                yield func051();
                yield func802();
                return;
            }
            if (var_3196 == 3) {
                var_1204 = 0;
                var_198 = 0;
                DSPLAY(212);
                yield func051();
                yield func809();
                return;
            }
            if (var_3196 == 4) {
                var_1204 = 0;
                var_198 = 0;
                DSPLAY(212);
                yield func051();
                yield func813();
                return;
            }
        }
        if (var_239 == 1) {
            var_1204 = 0;
            var_198 = 0;
            DSPLAY(212);
            yield func051();
            yield func009();
            return;
        }
        yield func819();
        return;
    });
}
function func820() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(820);
        var_3197 = 0;
        if (var_523 >= 1) {
            var_3197++;
        }
        if (var_524 >= 1) {
            var_3197++;
        }
        yield func337();
        yield func080();
        if (var_259 == 1) {
            if (var_3197 == 2 && var_513 != 5) {
                var_516 = var_516 + 16;
                var_513 = var_513 + 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_3197 == 2 && var_513 == 5) {
                var_516 = 88;
                var_513 = 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_3197 == 1 && var_513 != 4) {
                var_516 = var_516 + 16;
                var_513 = var_513 + 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_3197 == 1 && var_513 == 4) {
                var_516 = 88;
                var_513 = 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_526 >= 1 && var_513 != 3) {
                var_516 = var_516 + 16;
                var_513 = var_513 + 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_526 >= 1 && var_513 == 3) {
                var_516 = 88;
                var_513 = 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_404 >= 1 && var_513 != 2) {
                var_516 = var_516 + 16;
                var_513 = var_513 + 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_404 >= 1 && var_513 == 2) {
                var_516 = 88;
                var_513 = 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
        }
        if (var_255 == 1) {
            if (var_3197 == 2 && var_513 != 1) {
                var_516 = var_516 - 16;
                var_513 = var_513 - 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_3197 == 2 && var_513 == 1) {
                var_516 = 152;
                var_513 = 5;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_3197 == 1 && var_513 != 1) {
                var_516 = var_516 - 16;
                var_513 = var_513 - 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_3197 == 1 && var_513 == 1) {
                var_516 = 136;
                var_513 = 4;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_526 >= 1 && var_513 != 1) {
                var_516 = var_516 - 16;
                var_513 = var_513 - 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_526 >= 1 && var_513 == 1) {
                var_516 = 120;
                var_513 = 3;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_404 >= 1 && var_513 != 1) {
                var_516 = var_516 - 16;
                var_513 = var_513 - 1;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
            if (var_404 >= 1 && var_513 == 1) {
                var_516 = 104;
                var_513 = 2;
                DSPLAY(100);
                yield func337();
                yield func337();
                yield func820();
                return;
            }
        }
        if (var_242 == 1 || var_244 == 1) {
            if (var_513 == 1) {
                var_198 = 0;
                DSPLAY(212);
                var_793 = 1;
                var_785 = 1;
                var_786 = 1;
                var_787 = 1;
                var_629 = 1;
                yield func821();
                yield func166();
                return;
            }
            if (var_513 == 2) {
                var_198 = 0;
                DSPLAY(212);
                var_793 = 2;
                var_785 = 1;
                var_786 = 1;
                var_787 = 1;
                var_629 = 1;
                yield func821();
                yield func166();
                return;
            }
            if (var_513 == 3) {
                var_198 = 0;
                DSPLAY(212);
                var_793 = 3;
                var_785 = 1;
                var_786 = 1;
                var_787 = 1;
                var_629 = 1;
                yield func821();
                yield func166();
                return;
            }
            if (var_513 == 4) {
                if (var_524 == 0 && var_523 >= 1) {
                    var_198 = 0;
                    DSPLAY(212);
                    var_793 = 4;
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    var_629 = 1;
                    yield func821();
                    yield func166();
                    return;
                }
                if (var_524 >= 1 && var_523 == 0) {
                    var_198 = 0;
                    DSPLAY(212);
                    var_793 = 0;
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    var_629 = 1;
                    yield func821();
                    yield func166();
                    return;
                }
                if (var_524 >= 1 && var_523 >= 1) {
                    var_198 = 0;
                    DSPLAY(212);
                    var_793 = 0;
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    var_629 = 1;
                    yield func821();
                    yield func166();
                    return;
                }
            }
            if (var_513 == 5) {
                var_198 = 0;
                DSPLAY(212);
                var_793 = 4;
                var_785 = 1;
                var_786 = 1;
                var_787 = 1;
                var_629 = 1;
                yield func821();
                yield func166();
                return;
            }
        }
        if (var_239 == 1) {
            var_198 = 0;
            DSPLAY(212);
            var_512 = 0;
            yield func051();
            yield func057();
            return;
        }
        yield func820();
        return;
    });
}
function func821() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(821);
        var_508 = 0;
        var_499 = 0;
        var_980 = 1;
        gsel(19);
        color(1, 1, 1);
        boxf(0, 0, 340, 340);
        gsel(0);
        var_311 = 0;
        var_312 = 1;
        for (var cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337();
            var_311 = var_311 + 25;
            if (var_311 >= 255) {
                var_311 = 255;
            }
        }
        for (var cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337();
        }
        var_311 = 255;
        var_312 = 0;
        for (var cnt1 = 0; cnt1 < 10; ++cnt1) {
            redraw(0);
            yield func168();
            color(0, 0, 0);
            gmode(4, null, null, var_311);
            pos(0, 0);
            gcopy(19, 0, 0, 340, 340);
            if (var_10 >= 1) {
                yield func338();
            }
            redraw(1);
            yield await_(var_686);
            var_311 = var_311 - 25;
            if (var_311 <= 0) {
                var_311 = 0;
            }
        }
        return;
    });
}
function func822() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(822);
        gsel(19);
        color(1, 1, 1);
        boxf(0, 0, 340, 340);
        gsel(0);
        var_311 = 0;
        for (var cnt1 = 0; cnt1 < 10; ++cnt1) {
            redraw(0);
            yield func168();
            color(0, 0, 0);
            gmode(4, null, null, var_311);
            pos(0, 0);
            gcopy(19, 0, 0, 340, 340);
            if (var_10 >= 1) {
                yield func338();
            }
            redraw(1);
            yield await_(var_686);
            var_311 = var_311 + 25;
            if (var_311 >= 255) {
                var_311 = 255;
            }
        }
        var_311 = 255;
        var_312 = 1;
        for (var cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337();
        }
        for (var cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337();
            var_311 = var_311 - 25;
            if (var_311 <= 0) {
                var_311 = 0;
            }
        }
        var_311 = 0;
        var_312 = 0;
        var_508 = 1;
        var_499 = 1;
        var_980 = 0;
        return;
    });
}


function func823() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(823);
        var_1627 = 0;
        color(0, 0, 0);
        gmode(4, null, null, 100);
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
        font("ＭＳ Ｐゴシック", 16, 1);
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
        return;
    });
}