// 敵図鑑機能
function func360() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(360);
        var_1627 = 30;
        var_1628 = 40;
        var_1629 = 35;
        var_1630 = 80;
        color(0, 0, 0);
        gmode(4, null, null, 100);
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
        font("ＭＳ Ｐゴシック", 16, 1);
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
            gmode(4, null, null, 100);
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
function func361() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(361);
        yield func080();
        if (var_12 == 1) {
            var_235 = getkey(121);
            if (var_235 == 1) {
                var_1038 = 200;
                for (var cnt3 = 0; cnt3 < 200; ++cnt3) {
                    var_989[cnt3] = cnt3;
                }
                var_1610 = 1;
                var_1607 = 1;
                var_1608 = 1;
                yield func365();
                for (var cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337();
                }
                yield func361();
                return;
            }
            var_235 = getkey(122);
            if (var_235 == 1) {
                var_1038 = 1;
                for (var cnt3 = 0; cnt3 < 200; ++cnt3) {
                    var_989[cnt3] = 0;
                }
                var_989[1] = 1;
                var_1610 = 1;
                var_1607 = 1;
                var_1608 = 1;
                yield func365();
                for (var cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337();
                }
                yield func361();
                return;
            }
        }
        if (var_1609 == 0) {
            if (var_254 == 1 && var_1607 > 1) {
                DSPLAY(100);
                var_1607 = var_1607 - 1;
                var_1608 = 1;
                yield func365();
                for (var cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337();
                }
                yield func361();
                return;
            }
            if (var_254 == 1 && var_1607 == 1) {
                DSPLAY(100);
                var_1607 = var_1614;
                var_1608 = 1;
                yield func365();
                for (var cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337();
                }
                yield func361();
                return;
            }
            if (var_257 == 1 && var_1607 < var_1614) {
                DSPLAY(100);
                var_1607 = var_1607 + 1;
                var_1608 = 1;
                yield func365();
                for (var cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337();
                }
                yield func361();
                return;
            }
            if (var_257 == 1 && var_1607 >= var_1614) {
                DSPLAY(100);
                var_1607 = 1;
                var_1608 = 1;
                yield func365();
                for (var cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337();
                }
                yield func361();
                return;
            }
        }
        if (var_239 == 1 && var_1609 == 0) {
            DSPLAY(212);
            var_502 = 0;
            var_508 = 1;
            var_499 = 1;
            var_511 = 1;
            yield func051();
            yield func358();
            return;
        }
        if (var_239 == 1 && var_1609 == 1) {
            DSPLAY(212);
            var_502 = 0;
            var_1609 = 0;
            yield func513();
            return;
        }
        if (var_244 == 1) {
            var_83[299].Var8 = 1;
            for (var cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337();
            }
            var_83[299].Var8 = 0;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337();
            }
            yield func361();
            return;
        }
        if (var_242 == 1 || var_244 == 1) {
            var_437 = var_83[299].Var0;
            yield func626();
            var_743 = 0;
            if (var_1637 == 1) {
                var_743 = 1;
            }
            if (var_437 == 30 || var_437 == 46) {
                var_83[299].Var21 = 1;
                for (var cnt3 = 0; cnt3 < 3; ++cnt3) {
                    var_411 = 2;
                    yield func337();
                    var_411 = 3;
                    yield func337();
                }
                var_411 = 1;
                yield func337();
                var_83[299].Var21 = 0;
                var_411 = 0;
            }
            var_742 = 1;
            var_764 = 2;
            var_763 = 4;
            var_83[299].Var7 = 1;
            if (var_437 == 93 || var_437 == 7 || var_437 == 141 || var_437 == 99 || var_437 == 56 || var_437 == 48 || var_437 == 46 || var_437 == 30 || var_437 == 21 || var_437 == 121 || var_437 == 155 || var_437 == 151 || var_437 == 124 || var_437 == 126 || var_437 == 40 || var_437 == 41 || var_437 == 42) {
                var_83[299].Var18 = 1;
            }
            if (var_437 == 79 || var_437 == 91 || var_437 == 92 || var_437 == 19 || var_437 == 90 || var_437 == 53 || var_437 == 23 || var_437 == 65) {
                var_83[299].Var18 = 1;
            }
            for (var cnt2 = 0; cnt2 < 11; ++cnt2) {
                yield func337();
            }
            if (var_83[299].Var0 == 22 || var_83[299].Var0 == 17 || var_83[299].Var0 == 71) {
                for (var cnt3 = 0; cnt3 < 4; ++cnt3) {
                    yield func337();
                }
            }
            var_83[299].Var7 = 0;
            var_83[299].Var18 = 0;
            var_743 = 0;
            var_742 = 0;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337();
            }
            yield func361();
            return;
        }
        yield func337();
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
function func362() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(362);
        yield func080();
        if (var_239 == 1) {
            DSPLAY(212);
            var_502 = 0;
            var_508 = 1;
            var_499 = 1;
            yield func051();
            yield func057();
            return;
        }
        yield func337();
        yield func362();
        return;
    });
}

function func363() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(363);
        if (var_1038 == 0) {
            yield func364();
            return;
        }
        color(0, 0, 0);
        gmode(4, null, null, 100);
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
        font("ＭＳ Ｐゴシック", 16, 1);
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
        gmode(2);
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
function func364() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(364);
        color(0, 0, 0);
        gmode(4, null, null, 100);
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
function func365() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(365);
        var_83[299].Var0 = var_1616[var_1607];
        var_437 = var_1616[var_1607];
        yield func626();
        var_83[299].Var15 = 0;
        if (var_437 == 20 || var_437 == 39 || var_437 == 60 || var_437 == 64 || var_437 == 101 || var_437 == 102 || var_437 == 103 || var_437 == 104 || var_437 == 117 || var_437 == 111 || var_437 == 96 || var_437 == 68 || var_437 == 151 || var_437 == 168) {
            var_83[299].Var15 = 1;
        }
        var_1643 = var_891;
        var_1645 = var_967;
        var_1646 = var_968;
        var_1647 = var_954;
        var_1644 = var_438;
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
        if (var_437 == 131 || var_437 == 132) {
            var_1649 = var_1649 + "・新入り";
        }
        if (var_437 == 147 || var_437 == 134 || var_437 == 119 || var_437 == 35 || var_437 == 135 || var_437 == 120 || var_437 == 128 || var_437 == 140 || var_437 == 68 || var_437 == 131 || var_437 == 132) {
            var_1649 = var_1649 + "・ｼﾞｮｰｽﾀｰ";
        }
        if (var_437 == 141 || var_437 == 134 || var_437 == 99 || var_437 == 72 || var_437 == 80 || var_437 == 148 || var_437 == 153 || var_437 == 154 || var_437 == 156 || var_437 == 157 || var_437 == 159 || var_437 == 93 || var_437 == 96 || var_437 == 98) {
            var_1649 = var_1649 + "・囚人";
        }
        if (var_437 == 15) {
            var_1649 = "鳥公";
        }
        if (var_437 == 89) {
            var_1649 = "猿";
        }
        if (var_437 == 37) {
            var_1649 = "猫";
        }
        if (var_437 == 90) {
            var_1649 = "岩";
        }
        if (var_437 == 31) {
            var_1649 = "幽霊・杜王町住人";
        }
        if (var_437 == 6 || var_437 == 22) {
            var_1649 = "人形";
        }
        if (var_437 == 8 || var_437 == 24 || var_437 == 25 || var_437 == 23) {
            var_1649 = "死体";
        }
        if (var_437 == 62 || var_437 == 63 || var_437 == 85 || var_437 == 64 || var_437 == 106 || var_437 == 107) {
            var_1649 = var_1649 + "・暗殺ﾁｰﾑ";
        }
        if (var_437 == 27 || var_437 == 97 || var_437 == 58 || var_437 == 14 || var_437 == 15 || var_437 == 38 || var_437 == 155 || var_437 == 129) {
            var_1649 = var_1649 + "・九柱神";
        }
        var_1650 = var_1655;
        var_1651 = var_1656;
        var_1652 = var_1657;
        var_1653 = var_1658;
        return;
    });
}
function func366() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(366);
        var_83[299].Var0 = var_989[var_1607];
        var_437 = var_989[var_1607];
        yield func626();
        var_83[299].Var15 = 0;
        if (var_437 == 20 || var_437 == 39 || var_437 == 60 || var_437 == 64 || var_437 == 101 || var_437 == 102 || var_437 == 103 || var_437 == 104 || var_437 == 117 || var_437 == 111 || var_437 == 96 || var_437 == 68 || var_437 == 151 || var_437 == 168) {
            var_83[299].Var15 = 1;
        }
        var_1643 = var_891;
        var_1645 = var_967;
        var_1646 = var_968;
        var_1647 = var_954;
        var_1644 = var_438;
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
        if (var_437 == 131 || var_437 == 132) {
            var_1649 = var_1649 + "・新入り";
        }
        if (var_437 == 147 || var_437 == 134 || var_437 == 119 || var_437 == 35 || var_437 == 135 || var_437 == 120 || var_437 == 128 || var_437 == 140 || var_437 == 68 || var_437 == 131 || var_437 == 132) {
            var_1649 = var_1649 + "・ｼﾞｮｰｽﾀｰ";
        }
        if (var_437 == 141 || var_437 == 134 || var_437 == 99 || var_437 == 72 || var_437 == 80 || var_437 == 148 || var_437 == 153 || var_437 == 154 || var_437 == 156 || var_437 == 157 || var_437 == 159 || var_437 == 93 || var_437 == 96 || var_437 == 98) {
            var_1649 = var_1649 + "・囚人";
        }
        if (var_437 == 15) {
            var_1649 = "鳥公";
        }
        if (var_437 == 89) {
            var_1649 = "猿";
        }
        if (var_437 == 37) {
            var_1649 = "猫";
        }
        if (var_437 == 90) {
            var_1649 = "岩";
        }
        if (var_437 == 31) {
            var_1649 = "幽霊・杜王町住人";
        }
        if (var_437 == 6 || var_437 == 22) {
            var_1649 = "人形";
        }
        if (var_437 == 8 || var_437 == 24 || var_437 == 25 || var_437 == 23) {
            var_1649 = "死体";
        }
        var_1650 = var_1655;
        var_1651 = var_1656;
        var_1652 = var_1657;
        var_1653 = var_1658;
        return;
    });
}