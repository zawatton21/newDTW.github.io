// 消費アイテム効果
function func498() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(498);
        if (var_1930 == 1) {
            var_2187 = var_232;
            yield func492();
            var_2188 = var_489;
            if (var_862[var_232][0] == 0) {
                if (var_232 == 567 || var_232 == 590 || var_232 == 565) {
                    var_293 = var_296;
                    var_294 = var_297;
                    var_296 = "なんと" + var_489 + "は";
                    var_862[var_232][0] = 1;
                    if (var_232 == 567) {
                        var_297 = "ｱｳﾞﾄﾞｩﾙのDISCだった！";
                        var_2188 = "ｱｳﾞﾄﾞｩﾙのDISC";
                    }
                    if (var_232 == 590) {
                        var_297 = "ｷﾞｱｯﾁｮのDISCだった！";
                        var_2188 = "ｷﾞｱｯﾁｮのDISC";
                    }
                    if (var_232 == 565) {
                        var_297 = "ﾌﾟｯﾁ神父のDISCだった！";
                        var_2188 = "ﾌﾟｯﾁ神父のDISC";
                    }
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func047();
                    yield func050();
                    for (var cnt4 = 0; cnt4 < 9; ++cnt4) {
                        yield func337();
                    }
                }
            }
            for (var cnt2 = 0; cnt2 < 9; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            var_1214 = 0;
            var_1252 = 0;
            var_1389 = var_66;
            var_1390 = var_67;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "" + var_2188 + "が";
            var_294 = "爆発した！";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_1993 = var_1389 - 1;
            if (var_1993 < 0) {
                var_1993 = 0;
            }
            var_1994 = var_1389 + 1;
            var_1995 = var_1390 + 1;
            var_1996 = var_1390 - 1;
            if (var_1996 < 0) {
                var_1996 = 0;
            }
            if (var_71[var_1993][var_1390] == 0) {
                var_347 = var_1993;
                var_348 = var_1390;
                yield func622();
            }
            if (var_71[var_1994][var_1390] == 0) {
                var_347 = var_1994;
                var_348 = var_1390;
                yield func622();
            }
            if (var_71[var_1389][var_1995] == 0) {
                var_347 = var_1389;
                var_348 = var_1995;
                yield func622();
            }
            if (var_71[var_1389][var_1996] == 0) {
                var_347 = var_1389;
                var_348 = var_1996;
                yield func622();
            }
            if (var_71[var_1993][var_1995] == 0) {
                var_347 = var_1993;
                var_348 = var_1995;
                yield func622();
            }
            if (var_71[var_1994][var_1995] == 0) {
                var_347 = var_1994;
                var_348 = var_1995;
                yield func622();
            }
            if (var_71[var_1993][var_1996] == 0) {
                var_347 = var_1993;
                var_348 = var_1996;
                yield func622();
            }
            if (var_71[var_1994][var_1996] == 0) {
                var_347 = var_1994;
                var_348 = var_1996;
                yield func622();
            }
            if (var_77[var_1389][var_1390] > 0) {
                var_77[var_1389][var_1390] = 0;
                var_2189 = var_77[var_1389][var_1390];
                var_78[var_2189].Var0 = 0;
                var_78[var_2189].Var1 = 0;
                var_78[var_2189].Var2 = 0;
            }
            if (var_77[var_1993][var_1390] > 0) {
                var_77[var_1993][var_1390] = 0;
                var_2189 = var_77[var_2190][var_1390];
                var_78[var_2189].Var0 = 0;
                var_78[var_2189].Var1 = 0;
                var_78[var_2189].Var2 = 0;
            }
            if (var_77[var_1994][var_1390] > 0) {
                var_77[var_1994][var_1390] = 0;
                var_2189 = var_77[var_2191][var_1390];
                var_78[var_2189].Var0 = 0;
                var_78[var_2189].Var1 = 0;
                var_78[var_2189].Var2 = 0;
            }
            if (var_77[var_1389][var_1995] > 0) {
                var_77[var_1389][var_1995] = 0;
                var_2189 = var_77[var_1389][var_2192];
                var_78[var_2189].Var0 = 0;
                var_78[var_2189].Var1 = 0;
                var_78[var_2189].Var2 = 0;
            }
            if (var_77[var_1389][var_1996] > 0) {
                var_77[var_1389][var_1996] = 0;
                var_2189 = var_77[var_1389][var_2193];
                var_78[var_2189].Var0 = 0;
                var_78[var_2189].Var1 = 0;
                var_78[var_2189].Var2 = 0;
            }
            if (var_77[var_1993][var_1995] > 0) {
                var_77[var_1993][var_1995] = 0;
                var_2189 = var_77[var_2190][var_2192];
                var_78[var_2189].Var0 = 0;
                var_78[var_2189].Var1 = 0;
                var_78[var_2189].Var2 = 0;
            }
            if (var_77[var_1994][var_1995] > 0) {
                var_77[var_1994][var_1995] = 0;
                var_2189 = var_77[var_2191][var_2192];
                var_78[var_2189].Var0 = 0;
                var_78[var_2189].Var1 = 0;
                var_78[var_2189].Var2 = 0;
            }
            if (var_77[var_1993][var_1996] > 0) {
                var_77[var_1993][var_1996] = 0;
                var_2189 = var_77[var_2190][var_2193];
                var_78[var_2189].Var0 = 0;
                var_78[var_2189].Var1 = 0;
                var_78[var_2189].Var2 = 0;
            }
            if (var_77[var_1994][var_1996] > 0) {
                var_77[var_1994][var_1996] = 0;
                var_2189 = var_77[var_2191][var_2193];
                var_78[var_2189].Var0 = 0;
                var_78[var_2189].Var1 = 0;
                var_78[var_2189].Var2 = 0;
            }
            DSPLAY(180);
            var_199 = 2;
            var_389 = 2;
            var_1263 = 1;
            var_271 = 1;
            var_1388 = 1;
            for (var cnt2 = 0; cnt2 < 3; ++cnt2) {
                var_585 = 3;
                yield func337();
                var_585 = 0;
                yield func337();
                var_1388++;
            }
            for (var cnt2 = 0; cnt2 < 24; ++cnt2) {
                yield func337();
                if (cnt2 == 25) {
                    var_1263 = 0;
                }
                var_1388++;
            }
            var_271 = 0;
            var_1388 = 0;
            var_1263 = 0;
            var_403 = "";
            var_2194 = 1;
            var_2195 = 1;
            var_2196 = 2;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1389 && var_83[var_2194].Var2 == var_1995) {
                    yield func700();
                }
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1389 && var_83[var_2194].Var2 == var_1996) {
                    yield func700();
                }
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1390) {
                    yield func700();
                }
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1390) {
                    yield func700();
                }
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                    yield func700();
                }
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                    yield func700();
                }
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                    yield func700();
                }
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                    yield func700();
                }
                var_209 = 0;
                var_2194 = var_2194 + 1;
            }
            var_2196 = 0;
            var_2195 = 0;
            if (var_211 == 1) {
                var_211 = 0;
                var_356 = 249;
                for (var cnt3 = 0; cnt3 < 9; ++cnt3) {
                    yield func337();
                }
                var_389 = 0;
                var_2197 = 1;
                var_1936 = 0;
                return;
            }
            if (var_211 > 1) {
                var_2198 = Math.floor(var_211 / 2);
                if (var_156[314] == 1) {
                    var_2198 = Math.floor(var_2198 / 2);
                }
                var_211 = var_211 - var_2198;
                if (var_211 <= 0) {
                    var_211 = 1;
                }
                var_208 = var_2198 + var_208;
            }
            var_389 = 0;
            var_2199 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                if (var_83[var_2199].Var0 == 17 && var_83[var_2199].Var29 == 1) {
                    yield func699();
                    var_2199 = 1;
                    cnt2 = -1;
                    continue;
                }
                var_2199++;
            }
            var_1936 = 0;
            return;
        }
        // 仗助のDISC
        if (var_232 == 560) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_601 = rnd(4);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            if (var_601 == 0) {
                var_293 = "ｱﾝｼﾞｪﾛに けなされた事を思い出した";
                var_294 = "";
            }
            if (var_601 == 1) {
                var_293 = "不良に けなされた事を思い出した";
                var_294 = "";
            }
            if (var_601 == 2) {
                var_293 = "承太郎に けなされた事を思い出した";
                var_294 = "";
            }
            if (var_601 == 3) {
                var_293 = "露伴に けなされた事を思い出した";
                var_294 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
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
            var_139 = 1;
            return;
        }
        if (var_232 == 561) {
            if (var_262 == 1) {
                var_1946 = "しかし何も起こらなかった…";
                return;
            }
            var_2200 = 1;
            var_1845 = 1;
            yield func556();
            var_2200 = 0;
            var_1845 = 0;
            if (var_2110 == 0) {
                var_1946 = "しかし何も起こらなかった…";
            }
            yield func331();
            return;
        }
        if (var_232 == 562) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            if (var_840 >= 99) {
                var_1946 = "これ以上成長できなかった…";
                return;
            }
            DSPLAY(142);
            var_568 = var_948[var_840];
            yield func681();
            var_2201 = 0;
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「うわオッ！」";
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
            var_296 = "「ひょっとして成長したんですかァ！？";
            var_297 = "ぼく！？」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340();
            return;
        }
        if (var_232 == 563) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            var_132 = 1;
            DSPLAY(153);
            return;
        }
        if (var_232 == 564) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「クンクンクン・・・」";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            if (var_262 == 1) {
                var_1946 = "しかし何も起こらなかった…";
                return;
            }
            var_170 = 1;
            DSPLAY(184);
            yield func331();
            return;
        }
        if (var_232 == 566) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(4);
            if (var_1073 == 0) {
                var_293 = "「健康の秘訣は睡眠8時間半と";
                var_294 = "　毎朝一杯の尿療法」";
            }
            if (var_1073 == 1) {
                var_293 = "「40年前";
                var_294 = "　わしは輝いておったんじゃあああああ」";
            }
            if (var_1073 == 2) {
                var_293 = "「教祖復活じゃああああああ";
                var_294 = "　あああああああああああああ」";
            }
            if (var_1073 == 3) {
                var_293 = "「完璧なる【守りの方角】";
                var_294 = "これで極めたって事じゃよのオオ！」";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            DSPLAY(182);
            var_1299 = 8;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_105 = 1;
            return;
        }
        if (var_232 == 567) {
            var_1945 = 1;
            var_1967 = var_225;
            return;
        }
        if (var_232 == 590) {
            var_1945 = 2;
            var_1967 = var_225;
            return;
        }
        if (var_232 == 565) {
            var_1945 = 3;
            var_1967 = var_225;
            return;
        }
        if (var_232 == 568) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(4);
            if (var_1073 == 0) {
                var_293 = "「【筋肉】は信用できない";
                var_294 = "　ライフルは【骨】でささえる」";
            }
            if (var_1073 == 1) {
                var_293 = "「風が【蝿】の動きだ」";
                var_294 = "";
            }
            if (var_1073 == 2) {
                var_293 = "「我が【心】のささえを奪った復讐には";
                var_294 = "決着をつけなくてはならないッ!!」";
            }
            if (var_1073 == 3) {
                var_293 = "「15秒以内に仕留めるッ！」";
                var_294 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            DSPLAY(182);
            var_1299 = 8;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_138 = 1;
            return;
        }
        if (var_232 == 569) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_601 = rnd(5);
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            if (var_601 == 0) {
                var_293 = "ｱﾌﾞﾄﾞｩﾙが死んだ時の事を思い出した。";
                var_294 = "";
            }
            if (var_601 == 1) {
                var_293 = "ｲｷﾞｰが死んだ時の事を思い出した。";
                var_294 = "";
            }
            if (var_601 == 2) {
                var_293 = "ｼｪﾘｰが死んだ時の事を思い出した。";
                var_294 = "";
            }
            if (var_601 == 3) {
                var_293 = "ｱﾌﾞﾄﾞｩﾙが死んだ時の事を思い出した。";
                var_294 = "";
            }
            if (var_601 == 4) {
                var_293 = "階段でDIOに会った時の事を思い出した。";
                var_294 = "";
            }
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
            if (var_601 == 0) {
                var_296 = "「このドグサレがァァ――――ッ!!」";
                var_297 = "";
            }
            if (var_601 == 1) {
                var_296 = "「今のおれには…";
                var_297 = "悲しみで泣いている時間なんかないぜ」";
            }
            if (var_601 == 2) {
                var_296 = "「しかるべき報いを与えてやるッ！」";
                var_297 = "";
            }
            if (var_601 == 3) {
                var_296 = "「やつの気持ちを無駄にはしない";
                var_297 = "　生きるために戦う……！」";
            }
            if (var_601 == 4) {
                var_296 = "このままではまずい…はね返さなくてな…";
                var_297 = "おれに勇気をくれッ！";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340();
            DSPLAY(182);
            var_1299 = 3;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_104 = 1;
            if (var_109 == 1) {
                var_104 = 0;
                var_109 = 0;
            }
            return;
        }
        if (var_232 == 570) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(4);
            if (var_1073 == 0) {
                var_293 = "「ふるえるぞハート！";
                var_294 = "　燃え尽きるほどヒ―――ト！！」";
            }
            if (var_1073 == 1) {
                var_293 = "「刻むぞ　血液のビート！」";
                var_294 = "";
            }
            if (var_1073 == 2) {
                var_293 = "「浄めてやるッ";
                var_294 = "　その穢れたる野望！」";
            }
            if (var_1073 == 3) {
                var_293 = "「たっぷり波紋を流し込んでやるッ！」";
                var_294 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_125 = 1;
            DSPLAY(182);
            var_1299 = 1;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            if (var_130 != 0) {
                var_389 = 2;
                var_134 = 1;
                var_211 = 1;
                var_747 = 1;
                DSPLAY(105);
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "吸血鬼体質で波紋呼吸をしてしまった！";
                var_297 = "";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_1946 = "酷いダメージを受けて回復しない！";
                yield func047();
                for (var cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func337();
                }
                var_389 = 0;
            }
            return;
        }
        if (var_232 == 571) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            var_70 = 0;
            if (var_262 == 1) {
                var_1946 = "しかし何も起こらなかった…";
                return;
            }
            var_1252 = 1;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "あ…新しい予知が…現れた…ぞ…";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            DSPLAY(118);
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「ﾃﾞｨｱﾎﾞﾛはﾀﾞﾝｼﾞｮﾝを歩いていました。";
            var_297 = "すると次の階で…」";
            if (var_62 == 1 && var_91 == 12) {
                var_297 = "するとこの階で…」";
            }
            if (var_62 == 2 && var_91 == 30) {
                var_297 = "するとこの階で…」";
            }
            if (var_62 == 3 && var_91 == 99) {
                var_297 = "するとこの階で…」";
            }
            if (var_62 == 5 && var_91 == var_20) {
                var_297 = "するとこの階で…」";
            }
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            DSPLAY(118);
            var_293 = var_296;
            var_294 = var_297;
            var_2202 = rnd(13);
            if (var_62 == 4) {
                yield func458();
                if (var_69 == 1) {
                    var_2202 = 6;
                }
            }
            var_2203 = var_20 - 1;
            if (var_2202 == 0) {
                var_70 = 1;
                var_296 = "「ﾓﾝｽﾀｰﾊｳｽでﾎﾞｺﾎﾞｺに殴られて";
                var_297 = "リタイアだァーッ！」";
            }
            if (var_2202 == 1) {
                var_70 = 2;
                var_296 = "「養分を吸い取られ";
                var_297 = "餓死してリタイアだァーッ！」";
            }
            if (var_2202 == 2) {
                var_70 = 3;
                var_296 = "「体中の血を吸われて";
                var_297 = "リタイアだァーッ！」";
            }
            if (var_2202 == 3) {
                var_70 = 4;
                var_296 = "「体中を蜂の巣にされて";
                var_297 = "リタイアだァーッ！」";
            }
            if (var_2202 == 4) {
                var_70 = 5;
                var_296 = "「泥棒大成功！";
                var_297 = "ﾃﾞｨｱﾎﾞﾛはほんとにラッキー！」";
            }
            if (var_2202 == 5) {
                var_70 = 6;
                var_296 = "「トニオさんに殴られて";
                var_297 = "リタイアだァーッ！」";
            }
            if (var_2202 == 6) {
                var_70 = 7;
                var_296 = "「大部屋ﾓﾝｽﾀｰﾊｳｽだ！";
                var_297 = "ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。」";
            }
            if (var_2202 == 7) {
                var_70 = 8;
                var_296 = "「ｽﾀﾝﾄﾞﾊｳｽで殺されて";
                var_297 = "リタイアだァーッ！」";
            }
            if (var_2202 == 8) {
                var_70 = 9;
                var_296 = "「輝く黄金の精神に囲まれて";
                var_297 = "リタイアだァーッ！」";
            }
            if (var_2202 == 9) {
                var_70 = 10;
                var_296 = "「囚人の群れに囲まれて";
                var_297 = "リタイアだァーッ！」";
            }
            if (var_2202 == 10) {
                var_70 = 11;
                var_296 = "「広大な砂漠で行き倒れて";
                var_297 = "リタイアだァーッ！」";
            }
            if (var_2202 == 11) {
                var_70 = 12;
                var_296 = "「どこへ行くのかわからなくて";
                var_297 = "リタイアだァーッ！」";
            }
            if (var_2202 == 12) {
                var_70 = 13;
                var_296 = "「俺が最強だぁああああ―――ッ！」";
                var_297 = "";
            }
            if (var_62 == 1 && var_91 == 11) {
                var_296 = "「ベンキを舐めさせられて";
                var_297 = "リタイアだァーッ！」";
                var_70 = 0;
            }
            if (var_62 == 2 && var_91 == 29) {
                var_296 = "「わけもわからず殺されて";
                var_297 = "リタイアだァーッ！」";
                var_70 = 0;
            }
            if (var_62 == 3 && var_91 == 98) {
                var_296 = "「わけもわからず殺されて";
                var_297 = "リタイアだァーッ！」";
                var_70 = 0;
            }
            if (var_62 == 5 && var_91 == var_2203) {
                var_296 = "「わけもわからず殺されて";
                var_297 = "リタイアだァーッ！」";
                var_70 = 0;
            }
            if (var_62 == 1 && var_91 == 12 && var_203 == 0) {
                var_296 = "「ベンキを舐めさせられて";
                var_297 = "リタイアだァーッ！」";
                var_70 = 0;
            }
            if (var_62 == 1 && var_91 == 12 && var_203 == 1) {
                var_296 = "「体中を蜂の巣にされて";
                var_297 = "リタイアだァーッ！」";
                var_70 = 0;
            }
            if (var_62 == 1 && var_91 == 12 && var_203 == 2) {
                var_296 = "「爆発で粉々にされて";
                var_297 = "リタイアだァーッ！」";
                var_70 = 0;
            }
            if (var_62 == 1 && var_91 == 12 && var_203 == 3) {
                var_296 = "「電気で黒焦げにされて";
                var_297 = "リタイアだァーッ！」";
                var_70 = 0;
            }
            if (var_62 == 2 && var_91 == 30) {
                var_296 = "「わけもわからず殺されて";
                var_297 = "リタイアだァーッ！」";
                var_70 = 0;
            }
            if (var_62 == 3 && var_91 == 99) {
                var_296 = "「わけもわからず殺されて";
                var_297 = "リタイアだァーッ！」";
                var_70 = 0;
            }
            if (var_62 == 5 && var_91 == var_20) {
                var_296 = "「わけもわからず殺されて";
                var_297 = "リタイアだァーッ！」";
                var_70 = 0;
            }
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_1252 = 0;
            return;
        }
        if (var_232 == 572) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(4);
            if (var_1073 == 0) {
                var_293 = "「やれやれだぜ・・・」";
                var_294 = "";
            }
            if (var_1073 == 1) {
                var_293 = "「やれやれだぜ・・・」";
                var_294 = "";
            }
            if (var_1073 == 2) {
                var_293 = "「やれやれだぜ・・・」";
                var_294 = "";
            }
            if (var_1073 == 3) {
                var_293 = "「やれやれだぜ・・・」";
                var_294 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            DSPLAY(182);
            var_1299 = 3;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_111 = 1;
            return;
        }
        if (var_232 == 573) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            if (var_262 == 1) {
                var_1946 = "しかし何も起こらなかった…";
                return;
            }
            DSPLAY(184);
            var_100 = 1;
            yield func331();
            return;
        }
        if (var_232 == 574) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            if (var_262 == 1) {
                var_1946 = "しかし何も起こらなかった…";
                return;
            }
            var_126 = 1;
            DSPLAY(134);
            return;
        }
        if (var_232 == 575) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            if (var_156[351] == 1) {
                var_1946 = "装備DISCの効果によって";
                var_1947 = "眠くならなかった！";
                return;
            }
            if (var_120 == 1) {
                var_1946 = "10時間熟睡した気分になっていて";
                var_1947 = "眠くならなかった！";
                return;
            }
            if (var_120 == 0) {
                var_219 = 1;
                DSPLAY(132);
                return;
            }
        }
        if (var_232 == 576) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            var_177 = 1;
            return;
        }
        if (var_232 == 577) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            var_470 = 1;
            for (var cnt2 = 0; cnt2 < 4; ++cnt2) {
                yield func337();
            }
            DSPLAY(123);
            var_470 = 2;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337();
            }
            var_470 = 3;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337();
            }
            var_470 = 4;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337();
            }
            var_470 = 5;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337();
            }
            var_470 = 6;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337();
            }
            var_470 = 7;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337();
            }
            var_470 = 8;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337();
            }
            var_470 = 9;
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            DSPLAY(102);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                var_470 = 10;
                yield func337();
                var_470 = 11;
                yield func337();
            }
            var_470 = 12;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_470 = 13;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_470 = 14;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_470 = 15;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_470 = 16;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_470 = 17;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_470 = 18;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_470 = 19;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            DSPLAY(232);
            var_470 = 20;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_470 = 0;
            var_218 = 1;
            return;
        }
        if (var_232 == 578) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            if (var_133 == 0) {
                var_157 = 1;
                var_158 = 0;
                DSPLAY(154);
            }
            if (var_133 != 0) {
                var_133 = 0;
            }
            return;
        }
        if (var_232 == 579) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            if (var_262 == 1) {
                var_1946 = "しかし何も起こらなかった…";
                return;
            }
            for (var cnt2 = 0; cnt2 < 4; ++cnt2) {
                DSPLAY(219);
                var_1243 = 1;
                yield func337();
                var_1243 = 2;
                yield func337();
                var_1243 = 3;
                yield func337();
                var_1243 = 2;
                yield func337();
            }
            var_1243 = 0;
            DSPLAY(216);
            var_374 = 1;
            var_1264 = 0;
            var_774 = 160;
            var_1576 = 1;
            var_271 = 1;
            for (var cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337();
                var_774 = var_774 - 20;
            }
            var_1576 = 0;
            var_271 = 0;
            var_374 = 0;
            yield func499();
            return;
        }
        if (var_232 == 580) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            if (var_262 == 1) {
                var_1946 = "しかし何も起こらなかった…";
                return;
            }
            var_144 = 1;
            DSPLAY(168);
            var_1584 = 160;
            var_1585 = 160;
            var_271 = 1;
            var_1583 = 1;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
                var_1583++;
            }
            var_271 = 0;
            var_1583 = 0;
            var_116 = 0;
            var_114 = 0;
            var_126 = 0;
            var_134 = 0;
            var_135 = 0;
            var_136 = 0;
            var_137 = 0;
            var_177 = 0;
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
            return;
        }
        if (var_232 == 582) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            var_2204 = 0;
            var_2205 = 1;
            for (var cnt2 = 0; cnt2 < var_224; ++cnt2) {
                if (var_233[var_2205].Var0 == 401) {
                    var_2204 = 1;
                    var_233[var_2205].Var3 = 1;
                }
                var_2205++;
            }
            if (var_2204 == 1) {
                DSPLAY(175);
                var_1584 = 160;
                var_1585 = 160;
                var_271 = 1;
                var_1583 = 1;
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                    var_1583++;
                }
                var_271 = 0;
                var_1583 = 0;
                var_1946 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのDISCの回数が";
                var_1947 = "残り １ になってしまった！！";
            }
            return;
        }
        if (var_232 == 583) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            if (var_262 == 1) {
                var_1946 = "しかし何も起こらなかった…";
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
            var_293 = "ここは「退く」のだ……………";
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
            var_296 = "ここで一時「退く」のは";
            var_297 = "敗北ではない……………！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340();
            var_1946 = "オレは頂点に返り咲ける能力があるッ！";
            var_1947 = "";
            var_1951 = 1;
            return;
        }
        if (var_232 == 584) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            var_601 = rnd(5);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "嫌な記憶がよみがえってきた…";
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
            if (var_601 == 0) {
                var_296 = "「黙って引っ込んでろよ　いいな…」";
                var_297 = "";
            }
            if (var_601 == 1) {
                var_296 = "「よけいなことをしてみろ";
                var_297 = "おれたちが てめーを殺すぜ」";
            }
            if (var_601 == 2) {
                var_296 = "「おとなしく補欠してろヌケサク」";
                var_297 = "";
            }
            if (var_601 == 3) {
                var_296 = "「きさまの能力では";
                var_297 = "ジョースターたちを倒すのは無理だ」";
            }
            if (var_601 == 4) {
                var_296 = "「しょせんきさまはただの吸血鬼」";
                var_297 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340();
            DSPLAY(151);
            var_1299 = 4;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_109 = 1;
            if (var_104 == 1) {
                var_104 = 0;
                var_109 = 0;
            }
            DSPLAY(164);
            return;
        }
        if (var_232 == 585) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(2);
            if (var_1073 == 0) {
                var_293 = "「あっ！　こりゃたまらん！";
                var_294 = "　　ヨダレ　ずびっ！」";
            }
            if (var_1073 == 1) {
                var_293 = "「うわあああああ";
                var_294 = "　はっ　腹が空いていくうよぉ～～っ」";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            DSPLAY(164);
            var_129 = 1;
            var_193 = 0;
            return;
        }
        if (var_232 == 586) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            if (var_840 > 1) {
                for (var cnt3 = 0; cnt3 < 6; ++cnt3) {
                    yield func337();
                }
                var_1264 = 0;
                var_389 = 2;
                yield func094();
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "兄貴ィ～～　もう駄目だァ～～";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                DSPLAY(151);
                var_1299 = 4;
                var_271 = 1;
                var_1297 = 1;
                for (var cnt3 = 0; cnt3 < 20; ++cnt3) {
                    yield func337();
                    var_1297++;
                }
                var_271 = 0;
                var_1297 = 0;
                var_840 = var_840 - 1;
                var_352 = var_352 - 3;
                var_211 = var_211 - 3;
                if (var_352 < 1) {
                    var_352 = 1;
                }
                if (var_211 < 1) {
                    var_211 = 1;
                }
                var_568 = var_948[var_840] - 1;
                var_389 = 0;
                return;
            }
            if (var_840 == 1) {
                for (var cnt3 = 0; cnt3 < 6; ++cnt3) {
                    yield func337();
                }
                var_1264 = 0;
                yield func094();
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "おれはもう「マンモーニ」じゃねえッ！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                DSPLAY(142);
                var_1299 = 9;
                var_271 = 1;
                var_1297 = 1;
                for (var cnt3 = 0; cnt3 < 20; ++cnt3) {
                    yield func337();
                    var_1297++;
                }
                var_271 = 0;
                var_1297 = 0;
                var_568 = var_948[var_840];
                yield func681();
                var_2201 = 0;
                var_1946 = "ディアボロはレベルが上がった！";
                var_1947 = "";
                return;
            }
        }
        if (var_232 == 587) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            var_2206 = 1;
            var_2207 = 0;
            for (var cnt2 = 0; cnt2 < var_224; ++cnt2) {
                if (var_233[var_2206].Var15 == 2) {
                    var_233[var_2206].Var15 = 0;
                    var_2207 = 1;
                }
                var_2206 = var_2206 + 1;
            }
            if (var_2207 == 0) {
                var_474 = 0;
                for (var cnt3 = 0; cnt3 < 50; ++cnt3) {
                    var_475 = rnd(var_224);
                    var_475 = var_475 + 1;
                    if (var_233[var_475].Var0 >= 500 && var_233[var_475].Var0 < 800 && var_233[var_475].Var15 == 0) {
                        var_474 = 1;
                        break;
                    }
                    if (var_233[var_475].Var0 >= 900 && var_233[var_475].Var15 == 0) {
                        var_474 = 1;
                        break;
                    }
                }
                if (var_474 == 1) {
                    var_233[var_475].Var15 = 2;
                }
                yield func340();
                yield func094();
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "何かのｱｲﾃﾑが爆弾になったかも…";
                var_297 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func050();
                yield func340();
                var_1946 = "う～む　どうだったかな……？";
                var_1947 = "自信がない…";
            }
            return;
        }
        if (var_232 == 588) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "Ｊガイルの気分になって大声で叫んだ。";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_2208 = rnd(3);
            var_437 = var_1034;
            if (var_437 == 0) {
                var_437 = 5;
            }
            yield func626();
            var_2209 = var_891;
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            if (var_2208 == 0) {
                var_296 = "「" + var_2209 + "は";
                var_297 = "　おまえらのために死んだ」";
            }
            if (var_2208 == 1) {
                var_296 = "「青春を犠牲にして俺を追い続けたのに";
                var_297 = "　途中で挫折するとは」";
            }
            if (var_2208 == 2) {
                var_296 = "「お前らの仲間にあの世であったら";
                var_297 = "　聞かせてもらうといい…」";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340();
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            if (var_2208 == 0) {
                var_296 = "「おまえらが いなけりゃ";
                var_297 = "　死ななかったかもなぁ！」";
            }
            if (var_2208 == 1) {
                var_296 = "「なんとつまらない・・・";
                var_297 = "　さびしい人生よ！！！」";
            }
            if (var_2208 == 2) {
                var_296 = "「どーやってオレに";
                var_297 = "　殺してもらったかをなぁああ～ッ！」";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "全ての敵が目を覚ました！";
            var_297 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340();
            var_2210 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                if (var_83[var_2210].Var0 != 0 || var_83[var_2210].Var31 != 4 || var_83[var_2210].Var0 != 0) {
                }
                if (var_83[var_2210].Var25 >= 50) {
                    var_83[var_2210].Var25 -= 2;
                    if (var_83[var_2210].Var25 < 50) {
                        var_83[var_2210].Var25 = 0;
                    }
                }
                if (var_83[var_2210].Var25 < 50) {
                    var_83[var_2210].Var25 += 2;
                    if (var_83[var_2210].Var25 >= 50) {
                        var_83[var_2210].Var25 = 49;
                    }
                }
                var_83[var_2210].Var12 = 0;
                var_2210++;
            }
            return;
        }
        if (var_232 == 589) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1264 = 0;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(2);
            if (var_1073 == 0) {
                var_293 = "「ブッ殺す」と心の中で思ったならッ！";
                var_294 = "スデに行動は終わっているんだッ！";
            }
            if (var_1073 == 1) {
                var_293 = "いったん食らい付いたら決して…";
                var_294 = "スタンド能力を解除したりはしねえッ！";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            DSPLAY(182);
            var_1299 = 8;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_172 = 1;
            return;
        }
        if (var_232 == 715) {
            var_271 = 1;
            var_1242 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
            var_271 = 0;
            var_1242 = 0;
            var_360 = 0;
            var_2211 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                var_2211 = 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_350 = var_350 + 30;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            if (var_350 == var_567) {
                var_1946 = "「栄養補給させてもらったぜ！」";
            }
            if (var_2211 == 1) {
                var_1946 = "最大満腹度が" + var_567 + "になった。";
            }
            return;
        }
        if (var_232 == 600) {
            var_360 = 0;
            var_2211 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 2;
                var_2211 = 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_350 = var_350 + 50;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            if (var_350 == var_567) {
                var_1946 = "お腹がいっぱいになった。";
            }
            if (var_2211 == 1) {
                var_1946 = "最大満腹度が" + var_567 + "になった。";
            }
            return;
        }
        if (var_232 == 602) {
            var_360 = 0;
            var_2211 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 4;
                var_2211 = 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_350 = var_350 + 100;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            if (var_350 == var_567) {
                var_1946 = "お腹がいっぱいになった。";
            }
            if (var_2211 == 1) {
                var_1946 = "最大満腹度が" + var_567 + "になった。";
            }
            return;
        }
        if (var_232 == 603 || var_232 == 644 || var_232 == 645 || var_232 == 646) {
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            if (var_270 != 120 && var_270 != 124) {
                var_2212 = rnd(5);
                if (var_840 == 1 && var_2212 == 4) {
                    var_2212 = 3;
                }
                if (var_352 <= 5 && var_2212 == 3) {
                    var_2212 = 0;
                }
                if (var_566 == 0 && var_2212 == 2) {
                    var_2212 = 0;
                }
                if (var_565 == 0 && var_2212 == 0) {
                    var_2212 = 0;
                }
                var_1214 = 0;
                var_389 = 2;
                if (var_2212 != 4) {
                    DSPLAY(164);
                }
                if (var_2212 == 4) {
                    DSPLAY(151);
                }
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                var_389 = 0;
                var_360 = 0;
                var_350 = var_350 + 20;
                if (var_350 > var_567) {
                    var_350 = var_567;
                }
                if (var_2212 == 0) {
                    var_211 = 1;
                    var_1946 = "グエッ！";
                    var_1947 = "ひどいダメージを受けた！";
                }
                if (var_2212 == 1) {
                    var_565 = var_565 - 3;
                    if (var_565 < 0) {
                        var_565 = 0;
                    }
                    var_1946 = "グエッ！";
                    var_1947 = "精神力が下がってしまった！";
                }
                if (var_2212 == 2) {
                    var_566 = var_566 - 1;
                    if (var_566 < 0) {
                        var_566 = 0;
                    }
                    if (var_565 > var_566) {
                        var_565 = var_566;
                    }
                    var_1946 = "グエエエエッ！";
                    var_1947 = "最大精神力が下がってしまった！";
                }
                if (var_2212 == 3) {
                    var_352 = var_352 - 5;
                    if (var_352 <= 0) {
                        var_352 = 1;
                    }
                    var_211 = var_211 - 5;
                    if (var_211 <= 0) {
                        var_211 = 1;
                    }
                    var_1946 = "グエエエエッ！";
                    var_1947 = "最大HPが下がってしまった！";
                }
                if (var_2212 == 4) {
                    var_840 = var_840 - 1;
                    var_352 = var_352 - 3;
                    var_211 = var_211 - 3;
                    if (var_840 < 1) {
                        var_840 = 1;
                    }
                    if (var_352 <= 1) {
                        var_352 = 1;
                    }
                    if (var_211 <= 1) {
                        var_211 = 1;
                    }
                    var_568 = var_948[var_840] - 1;
                    var_1946 = "グエエエエｴｴｴッ！";
                    var_1947 = "レベルが下がってしまった！";
                }
            }
            if (var_270 == 120 || var_270 == 124) {
                var_1214 = 0;
                var_1946 = "「ンまァア～～い！」";
                var_1947 = "";
                var_360 = 0;
                var_350 = var_350 + 20;
                if (var_350 > var_567) {
                    var_350 = var_567;
                }
            }
            return;
        }
        if (var_232 == 604) {
            var_360 = 0;
            var_567 = var_567 + 10;
            if (var_567 > 999) {
                var_567 = 999;
            }
            var_350 = var_567;
            var_1946 = "最大満腹度が" + var_567 + "になった。";
            if (var_156[396] == 0) {
                if (var_157 == 0) {
                    var_133 = 1;
                    var_397 = 0;
                }
                if (var_157 != 0) {
                    var_157 = 0;
                    var_158 = 0;
                }
                var_1947 = "お腹がいっぱいで動きが重い…";
                DSPLAY(162);
            }
            return;
        }
        if (var_232 == 605) {
            var_360 = 0;
            var_2211 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                var_2211 = 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_350 = var_350 + 10;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            if (var_350 == var_567) {
                var_1946 = "お腹がいっぱいになった。";
            }
            if (var_2211 == 1) {
                var_1946 = "最大満腹度が" + var_567 + "になった。";
            }
            return;
        }
        if (var_232 == 630) {
            var_360 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_350 = var_350 + 20;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            var_1223 = 1;
            return;
        }
        if (var_232 == 631) {
            var_360 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            if (var_565 == var_566) {
                var_1946 = "お腹が膨れた";
            }
            var_565 = var_566;
            var_350 = var_350 + 10;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            return;
        }
        if (var_232 == 632) {
            var_360 = 0;
            var_350 = var_350 + 10;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            var_1214 = 0;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                var_1256 = 1;
                yield func337();
                yield func337();
                var_1256 = 2;
                yield func337();
                yield func337();
            }
            var_1256 = 0;
            var_127 = 0;
            var_132 = 0;
            var_119 = 1;
            var_121 = 1;
            var_120 = 1;
            if (var_410 == 401) {
                yield func429();
                if (var_233[var_556].Var3 == 99) {
                    var_1947 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのパワーは全開だ！";
                }
                if (var_233[var_556].Var3 <= 98) {
                    var_233[var_556].Var3 = var_233[var_556].Var3 + 5;
                    if (var_233[var_556].Var3 >= 99) {
                        var_233[var_556].Var3 = 99;
                    }
                    var_1947 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのｴﾈﾙｷﾞｰが増加した！";
                }
            }
            return;
        }
        if (var_232 == 633) {
            var_360 = 0;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
            var_1214 = 0;
            DSPLAY(111);
            var_1255 = 1;
            var_567 = var_567 + 10;
            if (var_567 > 999) {
                var_567 = 999;
            }
            var_350 = var_350 + 20;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            var_1579 = 1;
            var_271 = 1;
            for (var cnt2 = 0; cnt2 < 30; ++cnt2) {
                yield func337();
                var_1579 = var_1579 + 1;
            }
            var_271 = 0;
            var_1579 = 0;
            var_1255 = 0;
            return;
        }
        if (var_232 == 634) {
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            if (var_129 == 0) {
                var_360 = 0;
                if (var_350 == var_567) {
                    var_567 = var_567 + 1;
                    if (var_567 > 999) {
                        var_567 = 999;
                    }
                }
                if (var_133 == 0 && var_126 == 0) {
                    var_1946 = "お腹がちょっと膨れた";
                }
                var_133 = 0;
                var_126 = 0;
                var_350 = var_350 + 10;
                if (var_350 > var_567) {
                    var_350 = var_567;
                }
                return;
            }
            if (var_129 != 0) {
                var_360 = 0;
                if (var_350 == var_567) {
                    var_567 = var_567 + 1;
                    if (var_567 > 999) {
                        var_567 = 999;
                    }
                }
                var_133 = 0;
                var_126 = 0;
                var_350 = var_350 + 10;
                if (var_350 > var_567) {
                    var_350 = var_567;
                }
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "「デザートはプリン～～～？";
                var_297 = "ケッ！　おれは不良だよ…！」";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func050();
                yield func340();
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "「プリンなんて女子供の食う物なんて";
                var_297 = "チャンチャラおかしくて…」";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func050();
                yield func340();
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "「ンまぁ～～い！」";
                var_297 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func050();
                var_1214 = 0;
                for (var cnt3 = 0; cnt3 < 5; ++cnt3) {
                    var_1256 = 1;
                    yield func337();
                    yield func337();
                    var_1256 = 2;
                    yield func337();
                    yield func337();
                }
                var_1256 = 0;
                var_1946 = "このフロアでお腹が減らなくなった！";
                var_193 = 1;
                return;
            }
            return;
        }
        if (var_232 == 635) {
            var_360 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_350 = var_350 + 10;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            if (var_350 == var_567) {
                var_1946 = "お腹がいっぱいになった。";
            }
            return;
        }
        if (var_232 == 636) {
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「ピクニックに来ている気分だね…」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_360 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_350 = var_567;
            var_566 = var_566 + 1;
            var_565 = var_565 + 1;
            if (var_566 > 99) {
                var_566 = 99;
                var_565 = 99;
            }
            return;
        }
        if (var_232 == 639) {
            var_360 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_350 = var_350 + 20;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            if (var_350 == var_567) {
                var_1946 = "お腹がいっぱいになった。";
            }
            return;
        }
        if (var_232 == 640) {
            var_360 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_350 = var_350 + 10;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            if (var_350 == var_567) {
                var_1946 = "お腹がいっぱいになった。";
            }
            return;
        }
        if (var_232 == 641) {
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_1214 = 0;
            var_389 = 2;
            DSPLAY(164);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_389 = 0;
            var_360 = 0;
            var_567 = var_567 - 10;
            if (var_567 < 1) {
                var_567 = 1;
            }
            var_350 = var_350 + 10;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            return;
        }
        if (var_232 == 647) {
            var_360 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_350 = var_350 + 20;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            if (var_350 == var_567) {
                var_1946 = "お腹がいっぱいになった。";
            }
            return;
        }
        if (var_232 == 648) {
            var_360 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_350 = var_350 + 7;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            if (var_350 == var_567) {
                var_1946 = "お腹がいっぱいになった。";
            }
            return;
        }
        if (var_232 == 650) {
            var_360 = 0;
            if (var_211 == var_352) {
                var_352 = var_352 + 1;
                var_1946 = "最大HPが１あがった！";
                if (var_352 > 999) {
                    var_352 = 999;
                    var_1946 = "最大HPは限界まで達した！";
                }
            }
            var_211 = var_211 + 50;
            if (var_211 > var_352) {
                var_211 = var_352;
            }
            var_350 = var_350 + 5;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            return;
        }
        if (var_232 == 651) {
            var_360 = 0;
            if (var_211 == var_352) {
                var_352 = var_352 + 2;
                var_1946 = "最大HPが２あがった！";
                if (var_352 > 999) {
                    var_352 = 999;
                    var_1946 = "最大HPは限界まで達した！";
                }
            }
            var_211 = var_211 + 100;
            if (var_211 > var_352) {
                var_211 = var_352;
            }
            var_350 = var_350 + 10;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            return;
        }
        if (var_232 == 652) {
            var_360 = 0;
            if (var_211 == var_352) {
                var_352 = var_352 + 1;
                var_1946 = "最大HPが１あがった！";
                if (var_352 > 999) {
                    var_352 = 999;
                    var_1946 = "最大HPは限界まで達した！";
                }
            }
            var_211 = var_211 + 20;
            if (var_211 > var_352) {
                var_211 = var_352;
            }
            var_350 = var_350 + 5;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            return;
        }
        if (var_232 == 653) {
            var_360 = 0;
            if (var_211 == var_352) {
                var_352 = var_352 + 5;
                var_1946 = "最大HPが５あがった！";
                if (var_352 > 999) {
                    var_352 = 999;
                    var_1946 = "最大HPは限界まで達した！";
                }
            }
            var_211 = var_352;
            var_350 = var_350 + 20;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            return;
        }
        if (var_232 == 654) {
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
            var_1214 = 0;
            var_1940 = var_199;
            var_199 = 2;
            var_389 = 2;
            var_747 = 1;
            var_209 = 20;
            var_360 = 0;
            var_350 = var_350 + 10;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            var_211 = var_211 - 80;
            if (var_211 <= 0) {
                var_211 = 0;
            }
            var_208 = var_208 + 80;
            if (var_211 <= 0) {
                var_211 = 0;
                var_356 = 260;
            }
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
            var_389 = 0;
            var_199 = var_1940;
            return;
        }
        if (var_232 == 655) {
            var_360 = 0;
            if (var_211 == var_352) {
                var_352 = var_352 + 1;
                var_1946 = "最大HPが１あがった！";
                if (var_352 > 999) {
                    var_352 = 999;
                    var_1946 = "最大HPは限界まで達した！";
                }
            }
            var_211 = var_211 + 10;
            if (var_211 > var_352) {
                var_211 = var_352;
            }
            var_350 = var_350 + 5;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            return;
        }
        if (var_232 == 701) {
            if (var_77[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_73[var_66][var_67] != 0) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "足元のものが邪魔で";
                var_294 = "うまく使えなかった。";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                return;
            }
            var_337 = var_337 + 1;
            var_80[var_66][var_67] = var_337;
            var_81[var_337][0] = 77;
            var_81[var_337][1] = var_66;
            var_81[var_337][2] = var_67;
            var_81[var_337][4] = 1;
            var_81[var_337][5] = var_71[var_66][var_67];
            var_81[var_337][6] = var_487;
            var_437 = var_487;
            yield func626();
            var_2213 = var_891;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "" + var_2213 + "を";
            var_294 = "地面に出して人質にした！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "この上にいれば";
            var_297 = "" + var_2213 + "から攻撃されないぞ";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            return;
        }
        if (var_232 == 9999) {
            if (var_199 == 2) {
                var_2102 = var_66;
                var_2103 = var_67 + 1;
            }
            if (var_199 == 8) {
                var_2102 = var_66;
                var_2103 = var_67 - 1;
            }
            if (var_199 == 4) {
                var_2102 = var_66 - 1;
                var_2103 = var_67;
            }
            if (var_199 == 6) {
                var_2102 = var_66 + 1;
                var_2103 = var_67;
            }
            if (var_199 == 1) {
                var_2102 = var_66 - 1;
                var_2103 = var_67 + 1;
            }
            if (var_199 == 3) {
                var_2102 = var_66 + 1;
                var_2103 = var_67 + 1;
            }
            if (var_199 == 7) {
                var_2102 = var_66 - 1;
                var_2103 = var_67 - 1;
            }
            if (var_199 == 9) {
                var_2102 = var_66 + 1;
                var_2103 = var_67 - 1;
            }
            var_2107 = 0;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "ペラペラに空気を入れた。";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            if (var_71[var_2102][var_2103] == 0 || var_71[var_2102][var_2103] == 13 || var_82[var_2102][var_2103] != 0) {
                var_2108 = 0;
            }
            if (var_71[var_2102][var_2103] != 0 && var_71[var_2102][var_2103] != 13 && var_82[var_2102][var_2103] == 0) {
                var_2108 = 1;
            }
            if (var_2108 == 0) {
                var_2214 = var_487;
                var_1845 = 1;
                yield func556();
                var_2214 = 0;
                var_1845 = 0;
                if (var_2110 == 1) {
                    var_2107 = 1;
                    var_199 = var_2111;
                }
                if (var_2110 == 0) {
                    var_293 = var_296;
                    var_294 = var_297;
                    var_296 = "十分なスペースがないため";
                    var_297 = "うまくいかなかった…";
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    var_231 = 0;
                    var_234 = 0;
                    var_2040 = 0;
                    return;
                }
            }
            if (var_2108 == 1) {
                var_2214 = var_487;
                var_1845 = 4;
                yield func556();
                var_2214 = 0;
                var_1845 = 0;
                var_2107 = 1;
            }
            if (var_2107 == 1) {
                var_1584 = (var_83[var_673].Var1 - var_66 + 4) * 40;
                var_1585 = (var_83[var_673].Var2 - var_67 + 4) * 40;
                var_271 = 1;
                var_1583 = 1;
                DSPLAY(168);
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                    var_198 = 1;
                    var_300 = 0;
                    var_1583++;
                }
                var_271 = 0;
                var_1583 = 0;
            }
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            return;
        }
        if (var_232 == 712) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_211 = var_352;
            var_126 = 1;
            DSPLAY(134);
            return;
        }
        if (var_232 == 713) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            DSPLAY(202);
            var_2215 = 1;
            var_1845 = 1;
            yield func556();
            var_2215 = 0;
            var_1845 = 0;
            for (var cnt2 = 0; cnt2 < 16; ++cnt2) {
                yield func337();
            }
            return;
        }
        if (var_232 == 714) {
            var_2216 = var_199;
            var_199 = 2;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "そして　くらえッ！";
            var_294 = "新しい対吸血鬼兵器！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            DSPLAY(174);
            var_1245 = 1;
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            var_1245 = 2;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_1245 = 3;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_1245 = 4;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_1245 = 7;
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "紫外線照射装置ィィィィィィィィィィ！！";
            var_297 = "";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            DSPLAY(176);
            var_1245 = 6;
            gsel(19);
            color(254, 254, 254);
            boxf(0, 0, 340, 340);
            gsel(0);
            var_529 = 2;
            var_403 = "スカッとするぜーッ！！";
            var_2217 = 1;
            var_2194 = 1;
            var_2196 = 3;
            var_2195 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                var_2218 = 999;
                var_2219 = 0;
                if (var_2194 != var_124) {
                    var_2220 = 0;
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (var cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337();
                        }
                        var_2220 = 1;
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
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
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
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_71[var_2223][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_71[var_2224][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_71[var_2221][var_2225] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_71[var_2221][var_2226] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                    }
                }
                var_2194 = var_2194 + 1;
            }
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            if (var_2220 == 0) {
                for (var cnt3 = 0; cnt3 < 30; ++cnt3) {
                    yield func337();
                }
            }
            var_2196 = 0;
            var_2195 = 0;
            var_529 = 0;
            var_2217 = 0;
            for (var cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337();
            }
            var_1245 = 5;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_1245 = 4;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_1245 = 3;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_1245 = 2;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_1245 = 0;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_199 = var_2216;
            if (var_2220 == 1) {
                var_1946 = "スカッとするぜーッ！！";
            }
            return;
        }
        if (var_232 == 724) {
            var_1251 = 1;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「俺は人間をやめるぞォ――！」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_1251 = 2;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_1251 = 4;
            var_1940 = var_199;
            var_199 = 2;
            var_271 = 1;
            var_1411 = 1;
            for (var cnt2 = 0; cnt2 < 8; ++cnt2) {
                DSPLAY(111);
                yield func337();
                yield func337();
                var_198 = 1;
                var_300 = 0;
                var_1411++;
                yield func337();
                yield func337();
                var_198 = 1;
                var_300 = 0;
                var_1411++;
            }
            for (var cnt2 = 0; cnt2 < 17; ++cnt2) {
                yield func337();
                yield func337();
                var_198 = 1;
                var_300 = 0;
                var_1411++;
                yield func337();
                yield func337();
                var_198 = 1;
                var_300 = 0;
                var_1411++;
            }
            var_1411 = 0;
            var_271 = 0;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_198 = 1;
            var_300 = 0;
            var_130 = 1;
            var_1946 = "吸血鬼体質になった！";
            var_1251 = 0;
            if (var_125 != 0) {
                var_389 = 2;
                var_134 = 1;
                var_211 = 1;
                var_747 = 1;
                DSPLAY(105);
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "吸血鬼体質で波紋呼吸をしてしまった！";
                var_297 = "";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_1946 = "酷いダメージを受けて回復しない！";
                yield func047();
                for (var cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func337();
                }
                var_389 = 0;
            }
            var_199 = var_1940;
            return;
        }
        if (var_232 == 728) {
            var_1251 = 1;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_1251 = 6;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_1251 = 8;
            var_1940 = var_199;
            var_199 = 2;
            var_271 = 1;
            var_1411 = 1;
            var_1413 = 1;
            for (var cnt2 = 0; cnt2 < 8; ++cnt2) {
                DSPLAY(111);
                yield func337();
                yield func337();
                var_198 = 1;
                var_300 = 0;
                var_1411++;
                yield func337();
                yield func337();
                var_198 = 1;
                var_300 = 0;
                var_1411++;
            }
            for (var cnt2 = 0; cnt2 < 17; ++cnt2) {
                yield func337();
                yield func337();
                var_198 = 1;
                var_300 = 0;
                var_1411++;
                yield func337();
                yield func337();
                var_198 = 1;
                var_300 = 0;
                var_1411++;
            }
            var_1411 = 0;
            var_1413 = 0;
            var_271 = 0;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_198 = 1;
            var_300 = 0;
            var_182 = 1;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「究極の生命体ﾃﾞｨｱﾎﾞﾛの誕生だッーっ」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_1251 = 0;
            var_199 = var_1940;
            return;
        }
        if (var_232 == 726) {
            DSPLAY(182);
            var_1299 = 9;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_168 = 1;
            return;
        }
        if (var_232 == 727) {
            DSPLAY(143);
            var_1558 = 160;
            var_1559 = 160;
            var_271 = 1;
            var_1557 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1557++;
                var_198 = 1;
                var_300 = 0;
            }
            var_271 = 0;
            var_1557 = 0;
            var_211 = var_352;
            return;
        }
        if (var_232 == 797) {
            var_352 = 980;
            var_211 = 980;
            return;
        }
        if (var_232 == 798) {
            if (var_357 != 0) {
                yield func426();
                if (var_233[var_553].Var4 <= 89) {
                    var_233[var_553].Var4 = var_233[var_553].Var4 + 10;
                    var_580 = var_580 + 10;
                    var_894 = var_894 + 10;
                }
            }
            if (var_358 != 0) {
                yield func427();
                if (var_233[var_554].Var4 <= 89) {
                    var_233[var_554].Var4 = var_233[var_554].Var4 + 10;
                    var_581 = var_581 + 10;
                    var_895 = var_895 + 10;
                }
            }
            if (var_215 != 0) {
                yield func428();
                if (var_233[var_555].Var4 <= 89) {
                    var_233[var_555].Var4 = var_233[var_555].Var4 + 10;
                }
            }
        }
        if (var_232 == 799) {
            if (var_357 != 0) {
                yield func426();
                var_2227 = 99 - var_233[var_553].Var4;
                var_233[var_553].Var4 = 99;
                var_580 = var_580 + var_2227;
                var_894 = var_894 + var_2227;
            }
            if (var_358 != 0) {
                yield func427();
                var_2227 = 99 - var_233[var_554].Var4;
                var_233[var_554].Var4 = 99;
                var_581 = var_581 + var_2227;
                var_895 = var_895 + var_2227;
            }
            if (var_215 != 0) {
                yield func428();
                var_233[var_555].Var4 = 99;
            }
        }
        if (var_232 == 718) {
            DSPLAY(111);
            var_1257 = 1;
            var_1591 = 1;
            var_271 = 1;
            for (var cnt2 = 0; cnt2 < 30; ++cnt2) {
                yield func337();
                var_1591 = var_1591 + 1;
            }
            var_1257 = 0;
            var_1591 = 0;
            var_271 = 0;
            yield func530();
            return;
        }
        if (var_232 == 719) {
            DSPLAY(111);
            var_1257 = 1;
            var_1591 = 1;
            var_271 = 1;
            for (var cnt2 = 0; cnt2 < 30; ++cnt2) {
                yield func337();
                var_1591 = var_1591 + 1;
            }
            var_1257 = 0;
            var_1591 = 0;
            var_271 = 0;
            var_2228 = 1;
            yield func531();
            if (var_2228 == 0) {
                var_1946 = "" + var_418 + "に";
                var_1947 = "新たな装備効果が発現した！";
            }
            if (var_2228 == 1) {
                var_1946 = "しかしﾃﾞｨｱﾎﾞﾛは";
                var_1947 = "矢に選ばれなかった…";
            }
            return;
        }
        if (var_232 == 720) {
            var_163 = 1;
            var_164 = 1;
            var_153 = 0;
            var_114 = 0;
            var_463 = 0;
            var_464 = 0;
            var_461 = 0;
            var_462 = 0;
            DSPLAY(185);
            var_271 = 1;
            var_1491 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1491++;
            }
            var_271 = 0;
            var_1491 = 0;
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            var_1952 = 1;
            return;
        }
        if (var_232 == 722) {
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「シーザーは今・・・　さっき」";
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
            var_296 = "「ここで死んだ」";
            var_297 = "";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            DSPLAY(134);
            var_126 = 1;
            var_166 = 0;
            return;
        }
        if (var_232 == 716) {
            if (var_62 != 4) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "しかしここでは何も起こらなかった…";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                return;
            }
            var_70 = 99;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "遠くから声が聞こえる…";
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
            var_296 = "「ここに泥棒がいると";
            var_297 = "　電話がかかったですって…？」";
            yield func050();
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
            var_296 = "「ハハハ…";
            var_297 = "　きっとイタズラ電話でしょう」";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            return;
        }
        if (var_232 == 723) {
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            if (var_262 == 1) {
                var_1946 = "しかし何も起こらなかった…";
                return;
            }
            var_1055 = 1;
            return;
        }
        if (var_232 == 729) {
            var_2229 = rnd(5);
            var_2229 = var_2229 + 1;
            var_2229 = var_2229 * 1000;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "財布の中には" + var_2229 + "G入っていた！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            DSPLAY(207);
            var_415 = var_415 + var_2229;
            if (var_415 > 999999) {
                var_415 = 999999;
            }
            return;
        }
        if (var_232 == 730) {
            var_2229 = var_487;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "カバンの中には" + var_2229 + "G入っていた！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            DSPLAY(207);
            var_415 = var_415 + var_2229;
            if (var_415 > 999999) {
                var_415 = 999999;
            }
            return;
        }
        if (var_232 == 731) {
            var_2230 = rnd(5);
            var_2229 = var_487;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "財布の中には" + var_2229 + "G入っていた！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            if (var_2230 != 0) {
                DSPLAY(207);
                var_415 = var_415 + var_2229;
                if (var_415 > 999999) {
                    var_415 = 999999;
                }
            }
            if (var_2230 == 0) {
                yield func340();
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "……と思ったら、はしっこのとこだけ";
                var_297 = "やぶかれたお金だった！";
                yield func050();
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
                var_296 = "「やっ！　野郎ッ！」";
                var_297 = "";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
            }
            return;
        }
        if (var_232 == 900) {
            DSPLAY(118);
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1946 = "チェッ！";
            var_1947 = "やっぱりセナは速ェや…";
            return;
        }
        if (var_232 >= 901 && var_232 <= 905) {
            DSPLAY(118);
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1252 = 3;
            DSPLAY(209);
            var_1299 = 10;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_566 = var_566 + 1;
            var_565 = var_565 + 1;
            if (var_566 > 99) {
                var_566 = 99;
                var_565 = 99;
                var_1946 = "精神力は限界まで達した！";
            }
            return;
        }
        if (var_232 >= 906 && var_232 <= 911) {
            DSPLAY(118);
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1252 = 3;
            DSPLAY(209);
            var_1299 = 10;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_352 = var_352 + 5;
            var_211 = var_211 + 5;
            if (var_352 >= 999) {
                var_352 = 999;
                var_211 = 999;
                var_1946 = "最大HPは限界まで達した！";
            }
            return;
        }
        if (var_232 >= 912 && var_232 <= 928) {
            var_1950 = 3;
            return;
        }
        if (var_232 >= 929 && var_232 <= 947) {
            var_1950 = 4;
            return;
        }
        if (var_232 >= 948 && var_232 <= 963) {
            var_1950 = 5;
            return;
        }
        if (var_232 >= 948 && var_232 <= 980) {
            var_1950 = 6;
            return;
        }
        if (var_232 >= 981 && var_232 <= 986) {
            var_1950 = 7;
            return;
        }
        if (var_232 >= 750 && var_232 <= 770) {
            var_1950 = 7;
            return;
        }
        if (var_232 == 987) {
            DSPLAY(118);
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1252 = 3;
            DSPLAY(209);
            var_1299 = 10;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_352 = var_352 + 10;
            var_211 = var_211 + 10;
            if (var_352 > 999) {
                var_352 = 999;
                var_1946 = "最大HPは限界まで達した！";
            }
            if (var_211 > var_352) {
                var_211 = var_352;
            }
            return;
        }
        if (var_232 == 988) {
            DSPLAY(118);
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1252 = 3;
            DSPLAY(209);
            var_1299 = 10;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_352 = var_352 + 10;
            var_211 = var_211 + 10;
            if (var_352 > 999) {
                var_352 = 999;
                var_1946 = "最大HPは限界まで達した！";
            }
            if (var_211 > var_352) {
                var_211 = var_352;
            }
            return;
        }
        if (var_232 == 989) {
            DSPLAY(118);
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1252 = 3;
            DSPLAY(209);
            var_1299 = 10;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_566 = var_566 + 5;
            var_565 = var_565 + 5;
            if (var_566 > 99) {
                var_566 = 99;
                var_565 = 99;
                var_1946 = "精神力は限界まで達した！";
            }
            return;
        }
        if (var_232 == 990) {
            DSPLAY(118);
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1252 = 3;
            DSPLAY(182);
            var_1299 = 3;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_105 = 1;
            var_111 = 1;
            var_104 = 1;
            return;
        }
        if (var_232 == 991) {
            DSPLAY(118);
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1252 = 3;
            DSPLAY(142);
            var_1299 = 9;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            if (var_840 >= 99) {
                var_1946 = "これ以上成長できなかった…";
                return;
            }
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                if (var_840 <= 98) {
                    var_568 = var_948[var_840];
                    yield func681();
                    var_2201 = 0;
                }
            }
            return;
        }
        if (var_232 == 992) {
            DSPLAY(118);
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1252 = 3;
            DSPLAY(142);
            var_1299 = 9;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            if (var_840 >= 99) {
                var_1946 = "これ以上成長できなかった…";
                return;
            }
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                if (var_840 <= 98) {
                    var_568 = var_948[var_840];
                    yield func681();
                    var_2201 = 0;
                }
            }
            return;
        }
        if (var_232 == 993) {
            var_1950 = 20;
            return;
        }
        if (var_232 == 994) {
            var_1950 = 20;
            return;
        }
        if (var_232 == 995) {
            var_1252 = 0;
            var_1253 = 995;
            var_1254 = 1;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「ﾋﾟﾝｸﾀﾞｰｸの少年」を目の前にかざした。";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "『天国の扉』によって…";
            var_297 = "心の扉は開かれる";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_347 = var_66;
            var_348 = var_67;
            if (var_199 == 4) {
                var_347 = var_347 - 1;
            }
            if (var_199 == 6) {
                var_347 = var_347 + 1;
            }
            if (var_199 == 8) {
                var_348 = var_348 - 1;
            }
            if (var_199 == 2) {
                var_348 = var_348 + 1;
            }
            if (var_199 == 1) {
                var_347 = var_347 - 1;
                var_348 = var_348 + 1;
            }
            if (var_199 == 3) {
                var_347 = var_347 + 1;
                var_348 = var_348 + 1;
            }
            if (var_199 == 7) {
                var_347 = var_347 - 1;
                var_348 = var_348 - 1;
            }
            if (var_199 == 9) {
                var_347 = var_347 + 1;
                var_348 = var_348 - 1;
            }
            if (var_82[var_347][var_348] != 0) {
                var_2231 = var_82[var_347][var_348];
                var_2232 = 0;
                if (var_83[var_2231].Var23 == 0) {
                    var_2232 = 1;
                }
                if (var_83[var_2231].Var23 != 0) {
                    var_2232 = 2;
                }
                if (var_83[var_2231].Var0 == 50) {
                    var_2232 = 0;
                }
                if (var_83[var_2231].Var0 == 118) {
                    var_2232 = 1;
                }
                if (var_2232 == 1) {
                    DSPLAY(161);
                    var_1324 = (var_83[var_2231].Var1 - var_66 + 4) * 40;
                    var_1325 = (var_83[var_2231].Var2 - var_67 + 4) * 40 - 10;
                    var_271 = 1;
                    var_1323 = 1;
                    for (var cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                        var_1323++;
                    }
                    var_83[var_2231].Var8 = 1;
                    for (var cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                        var_1323++;
                    }
                    var_271 = 0;
                    var_1323 = 0;
                    var_2233 = var_1038 + 1;
                    var_2234 = 0;
                    for (var cnt4 = 0; cnt4 < var_2233; ++cnt4) {
                        if (var_989[cnt4] == var_83[var_2231].Var0) {
                            var_2234 = 1;
                            var_1610 = cnt4;
                            break;
                        }
                    }
                    if (var_2234 == 0) {
                        var_1038 = var_1038 + 1;
                        var_989[var_1038] = var_83[var_2231].Var0;
                        var_1610 = var_1038;
                    }
                    var_198 = 0;
                    var_1609 = 1;
                    var_1949 = 1;
                    return;
                }
                if (var_2232 == 2) {
                    DSPLAY(161);
                    var_1324 = (var_83[var_2231].Var1 - var_66 + 4) * 40;
                    var_1325 = (var_83[var_2231].Var2 - var_67 + 4) * 40 - 10;
                    var_271 = 1;
                    var_1323 = 1;
                    for (var cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                        var_1323++;
                    }
                    for (var cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                        var_1323++;
                    }
                    var_271 = 0;
                    var_1323 = 0;
                    var_293 = var_296;
                    var_294 = var_297;
                    var_296 = "見えてなくて効かなかった…";
                    var_297 = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    yield func050();
                }
            }
            var_1254 = 0;
            return;
        }
        if (var_232 == 9999) {
            DSPLAY(118);
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1252 = 3;
            DSPLAY(142);
            var_1299 = 9;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            if (var_840 >= 99) {
                var_1946 = "これ以上成長できなかった…";
                return;
            }
            for (var cnt2 = 0; cnt2 < 3; ++cnt2) {
                if (var_840 <= 98) {
                    var_568 = var_948[var_840];
                    yield func681();
                    var_2201 = 0;
                }
            }
            return;
        }
        if (var_232 == 996) {
            DSPLAY(118);
            for (var cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337();
            }
            var_1252 = 3;
            DSPLAY(142);
            var_1299 = 9;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            if (var_840 >= 99) {
                var_1946 = "これ以上成長できなかった…";
                return;
            }
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                if (var_840 <= 98) {
                    var_568 = var_948[var_840];
                    yield func681();
                    var_2201 = 0;
                }
            }
            return;
        }
        if (var_232 == 997) {
            return;
        }
        if (var_232 == 998) {
            return;
        }
        if (var_232 == 999) {
            return;
        }
        return;
    });
}