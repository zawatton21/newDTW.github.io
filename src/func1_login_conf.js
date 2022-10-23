// ログイン画面
function func146() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(146);
        var_738 = 0;
        gmode(2);
        var_727 = 0;
        var_728 = 400;
        for (var cnt1 = 0; cnt1 < 9; ++cnt1) {
            var_729 = 0;
            var_730 = 0;
            for (var cnt2 = 0; cnt2 < 9; ++cnt2) {
                pos(var_729, var_727);
                gcopy(3, var_730, var_728, 40, 40);
                var_729 = var_729 + 40;
                var_730 = var_730 + 40;
            }
            var_727 = var_727 + 40;
            var_728 = var_728 + 40;
        }
        gmode(4, null, null, 100);
        var_727 = 0;
        var_728 = 0;
        for (var cnt1 = 0; cnt1 < 9; ++cnt1) {
            var_729 = 0;
            var_730 = 0;
            for (var cnt2 = 0; cnt2 < 9; ++cnt2) {
                pos(var_729, var_727);
                gcopy(12, var_730, var_728, 40, 40);
                var_729 = var_729 + 40;
                var_730 = var_730 + 40;
            }
            var_727 = var_727 + 40;
            var_728 = var_728 + 40;
        }
        color(0, 0, 0);
        gmode(4, null, null, 150);
        pos(7, 20);
        gcopy(12, 0, 0, 160, 130 - var_738);
        color(255, 255, 255);
        line(10, 21, 163, 21);
        line(10, 149 - var_738, 163, 149 - var_738);
        line(9, 22, 9, 147 - var_738);
        line(165, 22, 165, 147 - var_738);
        pset(10, 22);
        pset(164, 22);
        pset(10, 148 - var_738);
        pset(164, 148 - var_738);
        font("ＭＳ　Ｐゴシック", 16, 1);
        pos(45, 40);
        color(255, 255, 255);
        mes("冒険に出る");
        pos(45, 60);
        color(255, 255, 255);
        mes("ボス日記を消す");
        pos(45, 80);
        color(255, 255, 255);
        mes("魔少年の問題");
        pos(45, 100);
        color(155, 155, 155);
        mes("配布サイトへ");
        pos(45, 120);
        color(255, 255, 255);
        mes("終了");
        if (var_64 == 0) {
            pos(12, 37);
        }
        if (var_64 == 1) {
            pos(12, 57);
        }
        if (var_64 == 2) {
            pos(12, 77);
        }
        if (var_64 == 3) {
            pos(12, 97);
        }
        if (var_64 == 4) {
            pos(12, 117);
        }
        gmode(2);
        if (var_725 == 0 && var_509 == 0) {
            gcopy(8, 70, 50, 25, 20);
        }
        pos(240, 320);
        color(255, 255, 255);
        font("ＭＳ　Ｐゴシック", 12);
        if (var_12 == 0) {
            mes("version　" + var_13);
        }
        if (var_12 == 1) {
            mes("Version　" + var_13);
        }
        return;
    });
}

function func147() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(147);
        var_599 = 0;
        if (var_64 == 0) {
            yield func178();
            var_726 = 1;
            var_725 = 1;
            yield func144();
            return;
        }
        if (var_64 == 1) {
            yield func178();
            var_726 = 1;
            var_725 = 1;
            var_734 = 1;
            yield func144();
            return;
        }
        if (var_64 == 2) {
            yield func178();
            onexit(0);
            yield func882();
            return;
        }
        if (var_64 == 4) {
            end();
        }
        yield func142();
        return;
    });
}
function func148() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(148);
        color(0, 0, 0);
        gmode(4, null, null, 150);
        var_739 = 50;
        var_740 = 70;
        var_741 = var_740;
        for (var cnt1 = 0; cnt1 < 3; ++cnt1) {
            pos(50, var_740);
            gcopy(12, 0, 0, 251, 60);
            color(255, 255, 255);
            line(var_739 + 2, var_740 + 1, var_739 + 247, var_740 + 1);
            line(var_739 + 2, var_740 + 59, var_739 + 247, var_740 + 59);
            line(var_739 + 1, var_740 + 2, var_739 + 1, var_740 + 57);
            line(var_739 + 249, var_740 + 2, var_739 + 249, var_740 + 57);
            pset(var_739 + 2, var_740 + 2);
            pset(var_739 + 248, var_740 + 2);
            pset(var_739 + 2, var_740 + 58);
            pset(var_739 + 248, var_740 + 58);
            var_740 = var_740 + 70;
        }
        font("ＭＳ　Ｐゴシック", 16, 1);
        color(255, 255, 255);
        if (var_703 != 0) {
            pos(80, var_741 + 15);
            mes("１：" + var_705);
            pos(150, var_741 + 35);
            if (var_706 > 0) {
                mes("" + var_706 + "階");
            }
            pos(200, var_741 + 35);
            mes("" + var_707 + "回死亡");
            if (var_708 >= 1) {
                pos(80, var_741 + 35);
                gmode(2);
                gcopy(8, 100, 82, 17, 17);
            }
            if (var_709 >= 1) {
                pos(102, var_741 + 35);
                gmode(2);
                gcopy(8, 120, 82, 17, 17);
            }
            if (var_710 >= 1) {
                pos(124, var_741 + 35);
                gmode(2);
                gcopy(8, 140, 82, 17, 17);
            }
        }
        if (var_703 == 0) {
            pos(80, var_741 + 15);
            mes("１： ボス日記を作る");
        }
        if (var_711 != 0) {
            pos(80, var_741 + 85);
            mes("２：" + var_712);
            pos(150, var_741 + 105);
            if (var_713 > 0) {
                mes("" + var_713 + "階");
            }
            pos(200, var_741 + 105);
            mes("" + var_714 + "回死亡");
            if (var_715 >= 1) {
                pos(80, var_741 + 105);
                gmode(2);
                gcopy(8, 100, 82, 17, 17);
            }
            if (var_716 >= 1) {
                pos(102, var_741 + 105);
                gmode(2);
                gcopy(8, 120, 82, 17, 17);
            }
            if (var_717 >= 1) {
                pos(124, var_741 + 105);
                gmode(2);
                gcopy(8, 140, 82, 17, 17);
            }
        }
        if (var_711 == 0) {
            pos(80, var_741 + 85);
            mes("２： ボス日記を作る");
        }
        if (var_718 != 0) {
            pos(80, var_741 + 155);
            mes("３：" + var_719);
            pos(150, var_741 + 175);
            if (var_720 > 0) {
                mes("" + var_720 + "階");
            }
            pos(200, var_741 + 175);
            mes("" + var_721 + "回死亡");
            if (var_722 >= 1) {
                pos(80, var_741 + 175);
                gmode(2);
                gcopy(8, 100, 82, 17, 17);
            }
            if (var_723 >= 1) {
                pos(102, var_741 + 175);
                gmode(2);
                gcopy(8, 120, 82, 17, 17);
            }
            if (var_724 >= 1) {
                pos(124, var_741 + 175);
                gmode(2);
                gcopy(8, 140, 82, 17, 17);
            }
        }
        if (var_718 == 0) {
            pos(80, var_741 + 155);
            mes("３： ボス日記を作る");
        }
        if (var_726 == 1) {
            pos(53, var_741 + 12);
        }
        if (var_726 == 2) {
            pos(53, var_741 + 70 + 12);
        }
        if (var_726 == 3) {
            pos(53, var_741 + 140 + 12);
        }
        gmode(2);
        gcopy(8, 70, 50, 25, 20);
        return;
    });
}
function func149() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(149);
        if (var_726 == 1) {
            var_739 = 70;
            var_740 = 70 + 15 + 20;
        }
        if (var_726 == 2) {
            var_739 = 70;
            var_740 = 70 + 85 + 20;
        }
        if (var_726 == 3) {
            var_739 = 70;
            var_740 = 70 + 155 + 20;
        }
        color(0, 0, 0);
        gmode(4, null, null, 150);
        pos(70, var_740);
        gcopy(12, 0, 0, 251, 60);
        color(255, 0, 0);
        line(var_739 + 2, var_740 + 1, var_739 + 247, var_740 + 1);
        line(var_739 + 2, var_740 + 59, var_739 + 247, var_740 + 59);
        line(var_739 + 1, var_740 + 2, var_739 + 1, var_740 + 57);
        line(var_739 + 249, var_740 + 2, var_739 + 249, var_740 + 57);
        pset(var_739 + 2, var_740 + 2);
        pset(var_739 + 248, var_740 + 2);
        pset(var_739 + 2, var_740 + 58);
        pset(var_739 + 248, var_740 + 58);
        font("ＭＳ　Ｐゴシック", 16, 1);
        pos(var_739 + 15, var_740 + 15);
        color(255, 0, 0);
        if (var_726 == 1 && var_703 == 0) {
            mes("データはありません");
            return;
        }
        if (var_726 == 2 && var_711 == 0) {
            mes("データはありません");
            return;
        }
        if (var_726 == 3 && var_718 == 0) {
            mes("データはありません");
            return;
        }
        mes("このデータを消去しますか？");
        mes("「Y」キーを押すと消去されます。");
        return;
    });
}