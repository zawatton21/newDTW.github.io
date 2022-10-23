// discの発動効果 (スタンド能力)
function func511() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(511);
        var_2257 = 0;
        if (var_220 == 0 && var_234 == 0) {
            var_2258 = var_233[var_225].Var0;
            if (var_862[var_2258][0] == 1 && var_233[var_225].Var12 == 1 && var_233[var_225].Var14 == 1) {
                var_2257 = 1;
            }
        }
        if (var_220 == 1) {
            var_2256 = var_1876;
            var_2258 = var_486[var_682][var_225][0];
            if (var_862[var_2258][0] == 1 && var_486[var_682][var_225][12] == 1 && var_486[var_682][var_225][14] == 1) {
                var_2257 = 1;
            }
        }
        if (var_234 == 1) {
            var_2258 = var_78[var_321].Var0;
            if (var_862[var_2258][0] == 1 && var_78[var_321].Var12 == 1 && var_78[var_321].Var14 == 1) {
                var_2257 = 1;
            }
        }
        if (var_262 == 1) {
            yield func509();
            return;
        }
        if (var_2257 == 1) {
            yield func510();
            return;
        }
        if (var_862[var_2258][0] == 0 && var_2258 >= 100 && var_2258 < 400) {
            var_232 = var_2258;
            yield func492();
            var_2259 = var_489;
            var_862[var_2258][0] = 1;
            yield func492();
            var_2260 = var_489;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "なんと" + var_2259 + "は";
            var_294 = "" + var_2260 + "だった！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
        }
        if (var_2258 == 100) {
            yield func506();
            var_155 = 1;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "射撃攻撃を防げるようになった！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
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
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 103) {
            yield func506();
            if (var_570 == 0) {
                var_1284 = 11;
            }
            if (var_570 == 1) {
                var_1284 = 1;
            }
            if (var_570 == 2) {
                var_1284 = 16;
            }
            if (var_570 == 3) {
                var_1284 = 29;
            }
            var_1283 = 1;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "ACT ３ FREEZE　！！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_2261 = var_357;
            var_357 = 103;
            var_243 = 1;
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
            DSPLAY(122);
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337();
            }
            if (var_82[var_347][var_348] != 0) {
                var_2231 = var_82[var_347][var_348];
                if (var_83[var_2231].Var0 != 50) {
                    if (var_83[var_2231].Var12 == 99) {
                        var_83[var_2231].Var12 = 0;
                    }
                    var_83[var_2231].Var13 = 0;
                    if (var_83[var_2231].Var15 == 0) {
                        var_83[var_2231].Var14 = 1;
                        DSPLAY(162);
                    }
                    if (var_83[var_2231].Var15 != 0) {
                        var_83[var_2231].Var14 = 0;
                        var_83[var_2231].Var15 = 0;
                    }
                    var_747 = 1;
                }
            }
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_1283 = 0;
            var_357 = var_2261;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 114) {
            yield func506();
            if (var_570 == 0) {
                var_1284 = 11;
            }
            if (var_570 == 1) {
                var_1284 = 1;
            }
            if (var_570 == 2) {
                var_1284 = 16;
            }
            if (var_570 == 3) {
                var_1284 = 29;
            }
            var_1283 = 1;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「一手」 遅カッタ…ナ…！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_2261 = var_357;
            var_357 = 114;
            var_243 = 1;
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
                if (var_83[var_2231].Var0 != 50 && var_83[var_2231].Var0 != 33 && var_83[var_2231].Var0 != 34 && var_83[var_2231].Var0 != 132 && var_83[var_2231].Var0 != 143) {
                    var_747 = 1;
                    var_83[var_2231].Var12 = 99;
                }
            }
            for (var cnt2 = 0; cnt2 < 30; ++cnt2) {
                yield func337();
            }
            gsel(19);
            color(255, 255, 255);
            boxf(0, 0, 340, 340);
            gsel(0);
            var_311 = 0;
            var_312 = 1;
            for (var cnt2 = 0; cnt2 < 51; ++cnt2) {
                yield func337();
                var_311 = var_311 + 5;
            }
            if (var_82[var_347][var_348] != 0) {
                DSPLAY(123);
                var_2231 = var_82[var_347][var_348];
                if (var_83[var_2231].Var0 != 50 && var_83[var_2231].Var0 != 33 && var_83[var_2231].Var0 != 34 && var_83[var_2231].Var0 != 132 && var_83[var_2231].Var0 != 143) {
                    var_402 = var_2231;
                    var_209 = 999;
                    var_2195 = 1;
                    var_2196 = 2;
                    var_2262 = 1;
                    yield func705();
                    var_2262 = 0;
                    var_2196 = 0;
                    var_2195 = 0;
                }
            }
            for (var cnt2 = 0; cnt2 < 51; ++cnt2) {
                yield func337();
                var_311 = var_311 - 5;
            }
            var_312 = 0;
            var_1283 = 0;
            var_357 = var_2261;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 307) {
            yield func506();
            if (var_570 == 0) {
                var_1284 = 11;
            }
            if (var_570 == 1) {
                var_1284 = 1;
            }
            if (var_570 == 2) {
                var_1284 = 16;
            }
            if (var_570 == 3) {
                var_1284 = 29;
            }
            var_1283 = 1;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "お前は敗北を認めた！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_2261 = var_357;
            var_357 = 307;
            var_243 = 1;
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
                DSPLAY(123);
                var_2231 = var_82[var_347][var_348];
                if (var_83[var_2231].Var0 != 50 && var_83[var_2231].Var0 != 33 && var_83[var_2231].Var0 != 34 && var_83[var_2231].Var0 != 132 && var_83[var_2231].Var0 != 143) {
                    var_402 = var_2231;
                    var_209 = 999;
                    var_2195 = 1;
                    var_2196 = 2;
                    var_2263 = var_83[var_2231].Var0;
                    yield func705();
                    var_2263 = 0;
                    var_2196 = 0;
                    var_2195 = 0;
                }
            }
            var_1283 = 0;
            var_357 = var_2261;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 207) {
            yield func506();
            if (var_570 == 0) {
                var_1284 = 11;
            }
            if (var_570 == 1) {
                var_1284 = 1;
            }
            if (var_570 == 2) {
                var_1284 = 16;
            }
            if (var_570 == 3) {
                var_1284 = 29;
            }
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「グレイトフル・デッド！！」";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_2264 = 0;
            var_1940 = var_199;
            var_199 = 2;
            var_271 = 1;
            var_1394 = 1;
            for (var cnt2 = 0; cnt2 < 30; ++cnt2) {
                yield func337();
                if (var_1394 == 11) {
                    DSPLAY(161);
                }
                var_1394++;
            }
            var_271 = 0;
            var_1394 = 0;
            var_2265 = 0;
            var_2194 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                var_2266 = 0;
                if (var_83[var_2194].Var0 != 0) {
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
                    if (var_2266 == 0 && var_2194 != var_124 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                        yield func519();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                        yield func519();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        yield func519();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        yield func519();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        yield func519();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        yield func519();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        yield func519();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        yield func519();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        yield func519();
                        var_2266 = 1;
                    }
                    if (var_201 <= 12 && var_201 != 0) {
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
                        if (var_2266 == 0 && var_83[var_2194].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                            yield func519();
                            var_2266 = 1;
                        }
                        if (var_2266 == 0 && var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                            yield func519();
                            var_2266 = 1;
                        }
                        if (var_2266 == 0 && var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                            yield func519();
                            var_2266 = 1;
                        }
                        if (var_2266 == 0 && var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                            yield func519();
                            var_2266 = 1;
                        }
                    }
                    if (var_2266 == 0 && var_172 >= 1) {
                        yield func519();
                        var_2266 = 1;
                    }
                }
                if (var_2266 == 1) {
                    var_2265 = 1;
                }
                var_2194 = var_2194 + 1;
            }
            if (var_2265 == 1 || var_172 >= 1) {
                var_293 = var_296;
                var_294 = var_297;
                if (var_172 == 0) {
                    var_296 = "近くにいる敵は急激に老化して";
                    var_297 = "攻撃力が下がった！";
                }
                if (var_172 >= 1) {
                    var_296 = "この階にいる全ての敵は";
                    var_297 = "急激に老化して攻撃力が下がった！";
                }
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
            }
            var_199 = var_1940;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 122) {
            yield func506();
            var_2267 = dim(10);
            var_143 = 1;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「どの程度の ふみ込みまで";
            var_294 = "　耐えられるか 憶えるゼ！」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            DSPLAY(140);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 113) {
            yield func506();
            if (var_570 == 0) {
                var_1284 = 11;
            }
            if (var_570 == 1) {
                var_1284 = 1;
            }
            if (var_570 == 2) {
                var_1284 = 16;
            }
            if (var_570 == 3) {
                var_1284 = 29;
            }
            var_1283 = 1;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「クラッシュ！くらいつけッ！」";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_2261 = var_357;
            var_357 = 113;
            var_243 = 1;
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
            DSPLAY(104);
            if (var_82[var_347][var_348] != 0) {
                var_314 = var_82[var_347][var_348];
                if (var_83[var_314].Var0 != 50) {
                    var_747 = 1;
                    for (var cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337();
                    }
                    yield func669();
                }
            }
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_1283 = 0;
            var_357 = var_2261;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 105) {
            yield func506();
            gsel(19);
            color(255, 255, 255);
            boxf(0, 0, 340, 340);
            gsel(0);
            var_311 = 255;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "限界なく明るくなるッ！！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            DSPLAY(161);
            var_312 = 1;
            for (var cnt2 = 0; cnt2 < 51; ++cnt2) {
                yield func337();
                var_311 = var_311 - 5;
            }
            var_312 = 0;
            var_103 = 1;
            var_121 = 1;
            var_2194 = 1;
            for (var cnt2 = 0; cnt2 < var_336; ++cnt2) {
                if (var_78[var_2194].Var0 != 0) {
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
                    if (var_78[var_2194].Var9 == var_201 && var_201 > 0 && var_201 <= 12) {
                        yield func512();
                    }
                    if (var_78[var_2194].Var1 == var_66 && var_78[var_2194].Var2 == var_1995) {
                        yield func512();
                    }
                    if (var_78[var_2194].Var1 == var_66 && var_78[var_2194].Var2 == var_1996) {
                        yield func512();
                    }
                    if (var_78[var_2194].Var1 == var_1993 && var_78[var_2194].Var2 == var_67) {
                        yield func512();
                    }
                    if (var_78[var_2194].Var1 == var_1994 && var_78[var_2194].Var2 == var_67) {
                        yield func512();
                    }
                    if (var_78[var_2194].Var1 == var_1993 && var_78[var_2194].Var2 == var_1995) {
                        yield func512();
                    }
                    if (var_78[var_2194].Var1 == var_1994 && var_78[var_2194].Var2 == var_1995) {
                        yield func512();
                    }
                    if (var_78[var_2194].Var1 == var_1993 && var_78[var_2194].Var2 == var_1996) {
                        yield func512();
                    }
                    if (var_78[var_2194].Var1 == var_1994 && var_78[var_2194].Var2 == var_1996) {
                        yield func512();
                    }
                    if (var_201 <= 12 && var_201 != 0) {
                        var_2221 = var_78[var_2194].Var1;
                        var_2222 = var_78[var_2194].Var2;
                        var_2223 = var_78[var_2194].Var1 - 1;
                        if (var_2223 < 0) {
                            var_2223 = 0;
                        }
                        var_2224 = var_78[var_2194].Var1 + 1;
                        if (var_2224 > var_33) {
                            var_2224 = var_33;
                        }
                        var_2225 = var_78[var_2194].Var2 + 1;
                        if (var_2225 > var_34) {
                            var_2225 = var_34;
                        }
                        var_2226 = var_78[var_2194].Var2 - 1;
                        if (var_2226 < 0) {
                            var_2226 = 0;
                        }
                        if (var_78[var_2194].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                            yield func512();
                        }
                        if (var_78[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                            yield func512();
                        }
                        if (var_78[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                            yield func512();
                        }
                        if (var_78[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                            yield func512();
                        }
                    }
                }
                var_2194 = var_2194 + 1;
            }
            var_2194 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                if (var_83[var_2194].Var0 != 0) {
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
                    if (var_2194 != var_124 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                        var_83[var_2194].Var23 = 1;
                        if (var_83[var_2194].Var0 == 97) {
                            var_83[var_2194].Var31 = 0;
                        }
                    }
                    if (var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                        var_83[var_2194].Var23 = 1;
                        if (var_83[var_2194].Var0 == 97) {
                            var_83[var_2194].Var31 = 0;
                        }
                    }
                    if (var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        var_83[var_2194].Var23 = 1;
                        if (var_83[var_2194].Var0 == 97) {
                            var_83[var_2194].Var31 = 0;
                        }
                    }
                    if (var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        var_83[var_2194].Var23 = 1;
                        if (var_83[var_2194].Var0 == 97) {
                            var_83[var_2194].Var31 = 0;
                        }
                    }
                    if (var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        var_83[var_2194].Var23 = 1;
                        if (var_83[var_2194].Var0 == 97) {
                            var_83[var_2194].Var31 = 0;
                        }
                    }
                    if (var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        var_83[var_2194].Var23 = 1;
                        if (var_83[var_2194].Var0 == 97) {
                            var_83[var_2194].Var31 = 0;
                        }
                    }
                    if (var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        var_83[var_2194].Var23 = 1;
                        if (var_83[var_2194].Var0 == 97) {
                            var_83[var_2194].Var31 = 0;
                        }
                    }
                    if (var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        var_83[var_2194].Var23 = 1;
                        if (var_83[var_2194].Var0 == 97) {
                            var_83[var_2194].Var31 = 0;
                        }
                    }
                    if (var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        var_83[var_2194].Var23 = 1;
                        if (var_83[var_2194].Var0 == 97) {
                            var_83[var_2194].Var31 = 0;
                        }
                    }
                    if (var_201 <= 12 && var_201 != 0) {
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
                            var_83[var_2194].Var23 = 1;
                            if (var_83[var_2194].Var0 == 97) {
                                var_83[var_2194].Var31 = 0;
                            }
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                            var_83[var_2194].Var23 = 1;
                            if (var_83[var_2194].Var0 == 97) {
                                var_83[var_2194].Var31 = 0;
                            }
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                            var_83[var_2194].Var23 = 1;
                            if (var_83[var_2194].Var0 == 97) {
                                var_83[var_2194].Var31 = 0;
                            }
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                            var_83[var_2194].Var23 = 1;
                            if (var_83[var_2194].Var0 == 97) {
                                var_83[var_2194].Var31 = 0;
                            }
                        }
                    }
                }
                var_2194 = var_2194 + 1;
            }
            var_114 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        // ハーミットパープルの発動能力
        if (var_2258 == 116) {
            yield func506();
            var_1940 = var_199;
            var_199 = 2;
            var_1258 = 3;
            DSPLAY(127);
            var_271 = 1;
            var_1480 = 1;
            for (var cnt2 = 0; cnt2 < 14; ++cnt2) {
                var_1480++;
                yield func337();
                yield func337();
            }
            var_271 = 0;
            var_1480 = 0;
            var_1258 = 0;
            var_175 = 0;
            var_176 = 0;
            var_2268 = 0;
            var_2269 = 0;
            var_2270 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                if (var_83[var_2270].Var0 == 113) {
                    var_2271 = rnd(20);
                    if (var_2271 >= 10) {
                        var_2269 = var_2270;
                        break;
                    }
                }
                if (var_83[var_2270].Var0 == 115) {
                    var_2271 = rnd(20);
                    if (var_2271 >= 10) {
                        var_2268 = var_2270;
                        break;
                    }
                }
                var_2270++;
            }
            if (var_2268 == 0 && var_2269 == 0) {
                DSPLAY(184);
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "この階の地図を念写した！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                var_102 = 1;
            }
            if (var_2269 >= 1) {
                yield func094();
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "「きさま、見ているなッ！！」";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
                var_176 = var_2269;
                var_198 = 0;
            }
            if (var_2268 >= 1) {
                DSPLAY(184);
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "この階のｱｸｱ･ﾈｯｸﾚｽを念写した！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
                var_175 = var_2268;
                var_198 = 0;
            }
            yield func331();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_199 = var_1940;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        // デス13の発動能力
        if (var_2258 == 107) {
            yield func506();
            if (var_570 == 0) {
                var_1284 = 11;
            }
            if (var_570 == 1) {
                var_1284 = 1;
            }
            if (var_570 == 2) {
                var_1284 = 16;
            }
            if (var_570 == 3) {
                var_1284 = 29;
            }
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            DSPLAY(131);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「ラリホ～～～～～っ！」";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_1940 = var_199;
            var_199 = 2;
            var_271 = 1;
            var_1592 = 1;
            for (var cnt2 = 0; cnt2 < 34; ++cnt2) {
                yield func337();
                var_1592++;
            }
            var_271 = 0;
            var_1592 = 0;
            var_2265 = 0;
            var_2194 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                var_2266 = 0;
                if (var_83[var_2194].Var0 != 0) {
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
                    if (var_2266 == 0 && var_2194 != var_124 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12 && var_172 == 1) {
                        yield func520();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                        yield func520();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        yield func520();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        yield func520();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        yield func520();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        yield func520();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        yield func520();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        yield func520();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        yield func520();
                        var_2266 = 1;
                    }
                    if (var_201 <= 12 && var_201 != 0 && var_172 == 1) {
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
                        if (var_2266 == 0 && var_83[var_2194].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                            yield func520();
                            var_2266 = 1;
                        }
                        if (var_2266 == 0 && var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                            yield func520();
                            var_2266 = 1;
                        }
                        if (var_2266 == 0 && var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                            yield func520();
                            var_2266 = 1;
                        }
                        if (var_2266 == 0 && var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                            yield func520();
                            var_2266 = 1;
                        }
                    }
                }
                if (var_2266 == 1) {
                    var_2265 = 1;
                }
                var_2194 = var_2194 + 1;
            }
            var_114 = 0;
            if (var_2265 == 1) {
                DSPLAY(132);
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
            }
            var_199 = var_1940;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 115) {
            yield func506();
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "生まれろ…　新しい生命…";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 16; ++cnt2) {
                var_300 = 0;
                yield func337();
            }
            for (var cnt2 = 0; cnt2 < 8; ++cnt2) {
                var_2272 = 1;
                var_1845 = 1;
                yield func556();
                var_2272 = 0;
                var_1845 = 0;
                if (var_2110 != 0) {
                    var_2273 = var_97;
                    var_83[var_2273].Var21 = 1;
                    var_411 = 1;
                    for (var cnt4 = 0; cnt4 < 3; ++cnt4) {
                        var_300 = 0;
                        yield func337();
                    }
                    var_411 = 2;
                    for (var cnt4 = 0; cnt4 < 3; ++cnt4) {
                        var_300 = 0;
                        yield func337();
                    }
                    var_411 = 3;
                    for (var cnt4 = 0; cnt4 < 3; ++cnt4) {
                        var_300 = 0;
                        yield func337();
                    }
                    var_411 = 4;
                    for (var cnt4 = 0; cnt4 < 3; ++cnt4) {
                        var_300 = 0;
                        yield func337();
                    }
                    var_411 = 0;
                    var_83[var_2273].Var21 = 0;
                    var_83[var_2273].Var5 = 2;
                }
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        // 
        if (var_2258 == 109) {
            yield func506();
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            var_199 = 2;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_271 = 1;
            var_1545 = 1;
            yield func337();
            var_1545 = 2;
            yield func337();
            var_1545 = 3;
            yield func337();
            var_1545 = 4;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "クロスファイヤーハリケーンスペシャル！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            gsel(19);
            color(255, 0, 0);
            boxf(0, 0, 340, 340);
            gsel(0);
            var_529 = 1;
            DSPLAY(128);
            var_1548 = 7;
            yield func337();
            yield func337();
            var_1548 = 8;
            yield func337();
            yield func337();
            for (var cnt2 = 0; cnt2 < 15; ++cnt2) {
                DSPLAY(128);
                var_1548 = 1;
                yield func337();
                var_1548 = 2;
                yield func337();
            }
            var_1548 = 0;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                for (var cnt3 = 0; cnt3 < 300; ++cnt3) {
                    var_1550 = rnd(var_33);
                    var_230 = rnd(var_34);
                    if (var_71[var_1550][var_230] == var_201 && var_82[var_1550][var_230] != 0 && var_71[var_1550][var_230] != 14) {
                        var_421 = var_82[var_1550][var_230];
                        var_271 = 1;
                        var_1549 = 1;
                        for (var cnt5 = 0; cnt5 < 10; ++cnt5) {
                            yield func337();
                            var_1549++;
                        }
                        var_1549 = 0;
                        var_403 = "クロスファイヤーハリケーンスペシャル！";
                        var_437 = var_83[var_421].Var0;
                        yield func626();
                        var_402 = var_421;
                        var_314 = var_421;
                        var_209 = var_565 * 5;
                        var_2219 = rnd(3);
                        var_209 = var_209 + var_2219;
                        if (var_172 >= 1) {
                            var_209 = var_209 * 2;
                        }
                        yield func705();
                        break;
                    }
                    if (var_71[var_1550][var_230] == var_201 && var_77[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_65[var_1550][var_230] == 0 && var_82[var_1550][var_230] == 0 && var_71[var_1550][var_230] != 14) {
                        var_271 = 1;
                        var_1549 = 1;
                        for (var cnt5 = 0; cnt5 < 10; ++cnt5) {
                            yield func337();
                            var_1549++;
                        }
                        var_1549 = 0;
                        var_768 = 1;
                        var_2274 = 1;
                        yield func536();
                        var_1396 = var_1550;
                        var_1397 = var_230;
                        var_1547 = 1;
                        var_271 = 1;
                        DSPLAY(128);
                        for (var cnt5 = 0; cnt5 < 7; ++cnt5) {
                            yield func337();
                            var_1547++;
                        }
                        var_1547 = 0;
                        var_768 = 0;
                        var_2274 = 0;
                        yield func331();
                        break;
                    }
                }
            }
            var_1545 = 3;
            yield func337();
            var_1545 = 2;
            yield func337();
            var_1545 = 1;
            yield func337();
            var_1545 = 0;
            var_271 = 0;
            var_529 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 301) {
            yield func506();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "アイテムを取って来いッ！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_1483 = 1;
            var_271 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1483++;
            }
            var_1483 = 0;
            var_271 = 0;
            var_2275 = var_66 - 1;
            if (var_2275 < 0) {
                var_2275 = 0;
            }
            var_2276 = var_66 + 1;
            if (var_2276 > var_33) {
                var_2276 = var_33;
            }
            var_2277 = var_67 - 1;
            if (var_2277 < 0) {
                var_2277 = 0;
            }
            var_2278 = var_67 + 1;
            if (var_2278 > var_34) {
                var_2278 = var_34;
            }
            var_347 = var_66;
            var_348 = var_67;
            var_2279 = 0;
            var_2280 = 1;
            for (var cnt2 = 0; cnt2 < var_336; ++cnt2) {
                var_2281 = 0;
                if (var_78[var_2280].Var0 != 0 && var_78[var_2280].Var11 == 0) {
                    var_2282 = var_78[var_2280].Var1;
                    var_2283 = var_78[var_2280].Var2;
                    if (var_2281 == 0 && var_77[var_347][var_348] == 0 && var_80[var_347][var_348] == 0 && var_71[var_347][var_348] != 0 && var_71[var_347][var_348] != 13 && var_73[var_347][var_348] == 0) {
                        var_2284 = var_347;
                        var_2285 = var_348;
                        var_2281 = 1;
                    }
                    if (var_2281 == 0 && var_77[var_2275][var_348] == 0 && var_80[var_2275][var_348] == 0 && var_71[var_2275][var_348] != 0 && var_71[var_2275][var_348] != 13 && var_73[var_2275][var_348] == 0) {
                        var_2284 = var_2275;
                        var_2285 = var_348;
                        var_2281 = 1;
                    }
                    if (var_2281 == 0 && var_77[var_2276][var_348] == 0 && var_80[var_2276][var_348] == 0 && var_71[var_2276][var_348] != 0 && var_71[var_2276][var_348] != 13 && var_73[var_2276][var_348] == 0) {
                        var_2284 = var_2276;
                        var_2285 = var_348;
                        var_2281 = 1;
                    }
                    if (var_2281 == 0 && var_77[var_347][var_2278] == 0 && var_80[var_347][var_2278] == 0 && var_71[var_347][var_2278] != 0 && var_71[var_347][var_2278] != 13 && var_73[var_347][var_2278] == 0) {
                        var_2284 = var_347;
                        var_2285 = var_2278;
                        var_2281 = 1;
                    }
                    if (var_2281 == 0 && var_77[var_347][var_2277] == 0 && var_80[var_347][var_2277] == 0 && var_71[var_347][var_2277] != 0 && var_71[var_347][var_2277] != 13 && var_73[var_347][var_2277] == 0) {
                        var_2284 = var_347;
                        var_2285 = var_2277;
                        var_2281 = 1;
                    }
                    if (var_2281 == 0 && var_77[var_2275][var_2278] == 0 && var_80[var_2275][var_2278] == 0 && var_71[var_2275][var_2278] != 0 && var_71[var_2275][var_2278] != 13 && var_73[var_2275][var_2278] == 0) {
                        var_2284 = var_2275;
                        var_2285 = var_2278;
                        var_2281 = 1;
                    }
                    if (var_2281 == 0 && var_77[var_2276][var_2278] == 0 && var_80[var_2276][var_2278] == 0 && var_71[var_2276][var_2278] != 0 && var_71[var_2276][var_2278] != 13 && var_73[var_2276][var_2278] == 0) {
                        var_2284 = var_2276;
                        var_2285 = var_2278;
                        var_2281 = 1;
                    }
                    if (var_2281 == 0 && var_77[var_2275][var_2277] == 0 && var_80[var_2275][var_2277] == 0 && var_71[var_2275][var_2277] != 0 && var_71[var_2275][var_2277] != 13 && var_73[var_2275][var_2277] == 0) {
                        var_2284 = var_2275;
                        var_2285 = var_2277;
                        var_2281 = 1;
                    }
                    if (var_2281 == 0 && var_77[var_2276][var_2277] == 0 && var_80[var_2276][var_2277] == 0 && var_71[var_2276][var_2277] != 0 && var_71[var_2276][var_2277] != 13 && var_73[var_2276][var_2277] == 0) {
                        var_2284 = var_2276;
                        var_2285 = var_2277;
                        var_2281 = 1;
                    }
                    if (var_2281 == 1) {
                        var_77[var_2284][var_2285] = var_77[var_2282][var_2283];
                        var_78[var_2280].Var1 = var_2284;
                        var_78[var_2280].Var2 = var_2285;
                        var_78[var_2280].Var9 = var_71[var_2284][var_2285];
                        var_78[var_2280].Var10 = 1;
                        var_77[var_2282][var_2283] = 0;
                        var_2279++;
                    }
                    if (var_2281 == 0) {
                        break;
                    }
                }
                var_2280 = var_2280 + 1;
            }
            yield func331();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            if (var_2279 == 0) {
                var_293 = "１個も拾ってこなかったど！";
            }
            if (var_2279 >= 1) {
                var_293 = "" + var_2279 + "個　拾ってきた。";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            if (var_2279 >= 1) {
                var_1489 = 1;
                var_271 = 1;
                for (var cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func337();
                }
                var_1489 = 0;
                var_271 = 0;
            }
            if (var_2279 == 0) {
                for (var cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func337();
                }
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 106) {
            if (var_220 == 0 && var_234 == 0) {
                var_570 = var_233[var_225].Var13;
            }
            if (var_220 == 1) {
                var_570 = var_486[var_682][var_225][13];
            }
            if (var_234 == 1) {
                var_570 = var_78[var_321].Var13;
            }
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "ベースとなるアイテムを選んでください";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 4; ++cnt2) {
                yield func337();
            }
            yield func340();
            var_2286 = var_225;
            var_198 = 0;
            var_1240 = 1;
            if (var_220 == 1) {
                var_2287 = 1;
            }
            var_227 = 1;
            var_228 = 45;
            var_225 = 1;
            var_223 = var_224 + 10;
            var_220 = 0;
            yield func051();
            var_197 = 1;
            yield func461();
            return;
        }
        if (var_2258 == 300) {
            yield func506();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "パールジャムを食べた。";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_1214 = 1;
            DSPLAY(119);
            for (var cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337();
            }
            yield func340();
            var_1214 = 0;
            var_360 = 0;
            var_2211 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                var_2211 = 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_350 = var_350 + 50;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "お腹が少し膨らんだ";
            var_297 = "";
            if (var_350 == var_567) {
                var_296 = "お腹がいっぱいになった。";
                var_297 = "";
            }
            if (var_2211 == 1) {
                var_296 = "最大満腹度が" + var_567 + "になった。";
                var_297 = "";
            }
            yield func047();
            yield func050();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 108) {
            yield func506();
            if (var_570 == 0) {
                var_1284 = 11;
            }
            if (var_570 == 1) {
                var_1284 = 1;
            }
            if (var_570 == 2) {
                var_1284 = 16;
            }
            if (var_570 == 3) {
                var_1284 = 29;
            }
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "こいつ自身に見せつけるしかねえッ！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_199 = 2;
            var_1600 = 1;
            var_271 = 1;
            for (var cnt2 = 0; cnt2 < 30; ++cnt2) {
                yield func337();
                if (var_1600 == 3) {
                    var_389 = 2;
                    DSPLAY(105);
                    var_747 = 1;
                }
                var_1600++;
            }
            var_1600 = 0;
            var_271 = 0;
            var_389 = 0;
            var_471 = 2;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func051();
            DSPLAY(148);
            var_747 = 1;
            var_1212 = 1;
            var_108 = 1;
            var_471 = 3;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_471 = 4;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_471 = 5;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_471 = 6;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337();
            }
            var_471 = 7;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337();
            }
            var_471 = 8;
            for (var cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337();
            }
            var_471 = 0;
            var_1212 = 0;
            var_108 = 0;
            var_218 = 30;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「覚悟」ってのはこういうことだぜ…";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 104) {
            yield func506();
            if (var_570 == 0) {
                var_1284 = 11;
            }
            if (var_570 == 1) {
                var_1284 = 1;
            }
            if (var_570 == 2) {
                var_1284 = 16;
            }
            if (var_570 == 3) {
                var_1284 = 29;
            }
            var_1283 = 1;
            var_2261 = var_357;
            var_357 = 104;
            var_243 = 1;
            var_1194 = 1;
            DSPLAY(121);
            for (var cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337();
            }
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "空間をけずりとる！ ";
            var_294 = "……するとお～～～～っ！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            yield func340();
            var_455 = var_66;
            var_456 = var_67;
            if (var_199 == 4) {
                var_455 = var_455 - 1;
            }
            if (var_199 == 6) {
                var_455 = var_455 + 1;
            }
            if (var_199 == 8) {
                var_456 = var_456 - 1;
            }
            if (var_199 == 2) {
                var_456 = var_456 + 1;
            }
            if (var_199 == 1) {
                var_455 = var_455 - 1;
                var_456 = var_456 + 1;
            }
            if (var_199 == 3) {
                var_455 = var_455 + 1;
                var_456 = var_456 + 1;
            }
            if (var_199 == 7) {
                var_455 = var_455 - 1;
                var_456 = var_456 - 1;
            }
            if (var_199 == 9) {
                var_455 = var_455 + 1;
                var_456 = var_456 - 1;
            }
            var_2289 = var_455;
            var_2290 = var_456;
            var_2291 = var_66;
            var_2292 = var_67;
            var_455 = var_66;
            var_456 = var_67;
            for (var cnt2 = 0; cnt2 < 40; ++cnt2) {
                var_1894 = var_455;
                var_1895 = var_456;
                if (var_199 == 4) {
                    var_455 = var_455 - 1;
                }
                if (var_199 == 6) {
                    var_455 = var_455 + 1;
                }
                if (var_199 == 8) {
                    var_456 = var_456 - 1;
                }
                if (var_199 == 2) {
                    var_456 = var_456 + 1;
                }
                if (var_199 == 1) {
                    var_455 = var_455 - 1;
                    var_456 = var_456 + 1;
                }
                if (var_199 == 3) {
                    var_455 = var_455 + 1;
                    var_456 = var_456 + 1;
                }
                if (var_199 == 7) {
                    var_455 = var_455 - 1;
                    var_456 = var_456 - 1;
                }
                if (var_199 == 9) {
                    var_455 = var_455 + 1;
                    var_456 = var_456 - 1;
                }
                if (var_455 < 5 || var_455 > var_33 || var_456 < 5 || var_456 > var_34) {
                    var_455 = var_1894;
                    var_456 = var_1895;
                }
                if (var_71[var_455][var_456] == 0) {
                    break;
                }
                if (var_82[var_455][var_456] > 0 || var_77[var_455][var_456] > 0) {
                    if (var_82[var_455][var_456] > 0) {
                        var_2293 = var_82[var_455][var_456];
                        var_82[var_455][var_456] = 0;
                        if (var_71[var_2289][var_2290] == 13) {
                            var_2294 = var_2289 - 1;
                            if (var_2294 < 0) {
                                var_2294 = 0;
                            }
                            var_2295 = var_2289 + 1;
                            if (var_2295 > var_33) {
                                var_2295 = var_33;
                            }
                            var_2296 = var_2290 + 1;
                            if (var_2296 > var_34) {
                                var_2296 = var_34;
                            }
                            var_2297 = var_2290 - 1;
                            if (var_2297 < 0) {
                                var_2297 = 0;
                            }
                            var_2298 = 0;
                            if (var_2298 == 0 && var_71[var_2294][var_2296] != 0 && var_71[var_2294][var_2296] != 13 && var_82[var_2294][var_2296] == 0 && var_65[var_2294][var_2296] == 0) {
                                var_2289 = var_2294;
                                var_2290 = var_2296;
                                var_2298 = 1;
                            }
                            if (var_2298 == 0 && var_71[var_2295][var_2296] != 0 && var_71[var_2295][var_2296] != 13 && var_82[var_2295][var_2296] == 0 && var_65[var_2295][var_2296] == 0) {
                                var_2289 = var_2295;
                                var_2290 = var_2296;
                                var_2298 = 1;
                            }
                            if (var_2298 == 0 && var_71[var_2294][var_2297] != 0 && var_71[var_2294][var_2297] != 13 && var_82[var_2294][var_2297] == 0 && var_65[var_2294][var_2297] == 0) {
                                var_2289 = var_2294;
                                var_2290 = var_2297;
                                var_2298 = 1;
                            }
                            if (var_2298 == 0 && var_71[var_2295][var_2297] != 0 && var_71[var_2295][var_2297] != 13 && var_82[var_2295][var_2297] == 0 && var_65[var_2295][var_2297] == 0) {
                                var_2289 = var_2295;
                                var_2290 = var_2297;
                                var_2298 = 1;
                            }
                            if (var_2298 == 0 && var_71[var_2294][var_1895] != 0 && var_71[var_2294][var_1895] != 13 && var_82[var_2294][var_1895] == 0 && var_65[var_2294][var_1895] == 0) {
                                var_2289 = var_2294;
                                var_2298 = 1;
                            }
                            if (var_2298 == 0 && var_71[var_2295][var_1895] != 0 && var_71[var_2295][var_1895] != 13 && var_82[var_2295][var_1895] == 0 && var_65[var_2295][var_1895] == 0) {
                                var_2289 = var_2295;
                                var_2298 = 1;
                            }
                            if (var_2298 == 0 && var_71[var_1894][var_2296] != 0 && var_71[var_1894][var_2296] != 13 && var_82[var_1894][var_2296] == 0 && var_65[var_1894][var_2296] == 0) {
                                var_2290 = var_2296;
                                var_2298 = 1;
                            }
                            if (var_2298 == 0 && var_71[var_1894][var_2297] != 0 && var_71[var_1894][var_2297] != 13 && var_82[var_1894][var_2297] == 0 && var_65[var_1894][var_2297] == 0) {
                                var_2290 = var_2297;
                                var_2298 = 1;
                            }
                        }
                        var_83[var_2293].Var1 = var_2289;
                        var_83[var_2293].Var2 = var_2290;
                        var_82[var_2289][var_2290] = var_2293;
                    }
                    if (var_77[var_455][var_456] > 0) {
                        if (var_73[var_2291][var_2292] >= 1 || var_77[var_2291][var_2292] != 0) {
                            if (var_199 == 4) {
                                var_2291 = var_2291 - 1;
                            }
                            if (var_199 == 6) {
                                var_2291 = var_2291 + 1;
                            }
                            if (var_199 == 8) {
                                var_2292 = var_2292 - 1;
                            }
                            if (var_199 == 2) {
                                var_2292 = var_2292 + 1;
                            }
                            if (var_199 == 1) {
                                var_2291 = var_2291 - 1;
                                var_2292 = var_456 + 1;
                            }
                            if (var_199 == 3) {
                                var_2291 = var_2291 + 1;
                                var_2292 = var_456 + 1;
                            }
                            if (var_199 == 7) {
                                var_2291 = var_2291 - 1;
                                var_2292 = var_456 - 1;
                            }
                            if (var_199 == 9) {
                                var_2291 = var_2291 + 1;
                                var_2292 = var_456 - 1;
                            }
                        }
                        var_2293 = var_77[var_455][var_456];
                        var_77[var_455][var_456] = 0;
                        var_78[var_2293].Var1 = var_2291;
                        var_78[var_2293].Var2 = var_2292;
                        var_77[var_2291][var_2292] = var_2293;
                    }
                    var_198 = 0;
                    for (var cnt4 = 0; cnt4 < 20; ++cnt4) {
                        yield func337();
                    }
                    break;
                }
            }
            var_1283 = 0;
            var_357 = var_2261;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            if (var_72[var_66][var_67] == 0 && var_85 == 0 && var_163 == 0) {
                yield func722();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 101) {
            if (var_420 != 0) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "チャリオッツは分身中だ。";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337();
                }
                var_234 = 0;
                var_220 = 0;
                yield func009();
                return;
            }
            var_2299 = 1;
            var_1845 = 1;
            yield func556();
            var_83[var_673].Var11 = 1;
            var_2299 = 0;
            var_1845 = 0;
            if (var_2110 == 0) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "チャリオッツを出せる場所が無いぞ。";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337();
                }
                var_234 = 0;
                var_220 = 0;
                yield func009();
                return;
            }
            yield func506();
            for (var cnt2 = 0; cnt2 < 7; ++cnt2) {
                var_2299 = 1;
                var_1845 = 1;
                yield func556();
                var_83[var_673].Var11 = 1;
                var_2299 = 0;
                var_1845 = 0;
            }
            var_420 = 7;
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "ブラボー！";
            var_294 = "おお…　ブラボー！！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                var_1259 = 1;
                yield func337();
                yield func337();
                var_1259 = 2;
                yield func337();
                yield func337();
                var_1259 = 3;
                yield func337();
                yield func337();
                yield func337();
                yield func337();
                var_1259 = 2;
                yield func337();
                yield func337();
                var_1259 = 1;
                yield func337();
                yield func337();
            }
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "フフフ･･･";
            var_297 = "感覚の目でよーく見てろ！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                var_1259 = 1;
                yield func337();
                yield func337();
                var_1259 = 2;
                yield func337();
                yield func337();
                var_1259 = 3;
                yield func337();
                yield func337();
                yield func337();
                yield func337();
                var_1259 = 2;
                yield func337();
                yield func337();
                var_1259 = 1;
                yield func337();
                yield func337();
            }
            var_1259 = 0;
            var_199 = 2;
            yield func337();
            for (var cnt2 = 0; cnt2 < var_97 + 1; ++cnt2) {
                if (var_83[cnt2][0] == 146 && var_83[cnt2][31] == 5) {
                    var_83[cnt3][11] = 0;
                }
            }
            DSPLAY(112);
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "これだ！　甲冑を外したスタンド";
            var_297 = "「シルバー・チャリオッツ」！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func331();
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 319) {
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "能力を消すDISCを選んでください";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 4; ++cnt2) {
                yield func337();
            }
            yield func340();
            var_2300 = var_225;
            var_2301 = 0;
            if (var_220 != 0) {
                var_2301 = 1;
            }
            if (var_234 != 0) {
                var_2301 = 2;
            }
            var_198 = 0;
            var_2006 = 1;
            var_227 = 1;
            var_228 = 45;
            var_225 = 1;
            var_223 = var_224 + 10;
            var_220 = 0;
            yield func051();
            var_197 = 1;
            yield func461();
            return;
        }
        // 時止め能力 (ザ・ワールド & スタプラ・ザワールドの発動能力)
        if (var_2258 == 111 || var_2258 == 398) {
            yield func506();
            var_163 = 1;
            var_164 = 1;
            var_153 = 0;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            if (var_2258 == 111) {
                var_293 = "「ザ・ワールド」！！";
            }
            if (var_2258 == 398) {
                var_293 = "「スタープラチナ・ザ・ワールド」！！";
            }
            var_294 = "時よ止まれ！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
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
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            yield func009();
            return;
        }
        if (var_2258 == 201) {
            yield func506();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "このオレのスタンド「黄の節制」に";
            var_294 = "弱点はない！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            DSPLAY(123);
            var_271 = 1;
            var_1310 = 1;
            var_374 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1310++;
                if (var_1310 == 7) {
                    var_1310 = 1;
                }
                var_300 = 0;
            }
            var_374 = 0;
            var_271 = 0;
            var_1310 = 0;
            if (var_114 != 0) {
                if (var_83[var_114].Var0 == 78) {
                    var_114 = 0;
                }
            }
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "このフロアで熱と冷気に強くなった！";
            var_297 = "";
            yield func047();
            yield func050();
            yield func340();
            var_173 = 1;
            for (var cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 310) {
            yield func506();
            if (var_407 == 1 && var_536 == 1 && var_62 == int(var_1068[12])) {
                yield func915();
                return;
            }
            var_1845 = 1;
            yield func556();
            var_1845 = 0;
            if (var_2110 != 0) {
                for (var cnt3 = 0; cnt3 < 3; ++cnt3) {
                    var_1845 = 1;
                    yield func556();
                    var_1845 = 0;
                }
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "敵が集まってしまった！";
                var_297 = "";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
            for (var cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 403) {
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "どれを食べますか？";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_2300 = var_225;
            var_2301 = 0;
            if (var_220 != 0) {
                var_2301 = 1;
            }
            if (var_234 != 0) {
                var_2301 = 2;
            }
            var_198 = 0;
            var_2004 = 1;
            var_227 = 1;
            var_228 = 45;
            var_225 = 1;
            var_223 = var_224 + 10;
            var_220 = 0;
            yield func051();
            var_197 = 1;
            yield func461();
            return;
        }
        if (var_2258 == 120) {
            yield func506();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "『ストーンフリーーッ！』";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
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
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "傷口を縫って体力が回復した。";
            var_297 = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 200) {
            if (var_73[var_66][var_67] != 0) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "ここには鉄塔を建てられない。";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337();
                }
                yield func009();
                return;
            }
            yield func506();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「スーパーフライ！」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_147 = var_66;
            var_148 = var_67;
            var_146 = 1;
            DSPLAY(188);
            var_114 = 0;
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "鉄塔を建てた！";
            var_297 = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 205) {
            yield func506();
            if (var_570 == 0) {
                var_1284 = 11;
            }
            if (var_570 == 1) {
                var_1284 = 1;
            }
            if (var_570 == 2) {
                var_1284 = 16;
            }
            if (var_570 == 3) {
                var_1284 = 29;
            }
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_1992 = 1;
            var_2302 = 0;
            var_1993 = var_66 - 1;
            var_1994 = var_66 + 1;
            var_1995 = var_67 + 1;
            var_1996 = var_67 - 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                if (var_83[var_1992].Var1 == var_66 && var_83[var_1992].Var2 == var_1995) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 99;
                    var_2302 = 1;
                }
                if (var_83[var_1992].Var1 == var_66 && var_83[var_1992].Var2 == var_1996) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 99;
                    var_2302 = 1;
                }
                if (var_83[var_1992].Var1 == var_1993 && var_83[var_1992].Var2 == var_67) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 99;
                    var_2302 = 1;
                }
                if (var_83[var_1992].Var1 == var_1994 && var_83[var_1992].Var2 == var_67) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 99;
                    var_2302 = 1;
                }
                if (var_83[var_1992].Var1 == var_1993 && var_83[var_1992].Var2 == var_1995) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 99;
                    var_2302 = 1;
                }
                if (var_83[var_1992].Var1 == var_1994 && var_83[var_1992].Var2 == var_1995) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 99;
                    var_2302 = 1;
                }
                if (var_83[var_1992].Var1 == var_1993 && var_83[var_1992].Var2 == var_1996) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 99;
                    var_2302 = 1;
                }
                if (var_83[var_1992].Var1 == var_1994 && var_83[var_1992].Var2 == var_1996) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 99;
                    var_2302 = 1;
                }
                if (var_172 >= 1) {
                    if (var_83[var_1992].Var10 == var_201 && var_201 != 14) {
                        var_83[var_1992].Var13 = 99;
                        var_2302 = 1;
                    }
                    if (var_201 <= 12 && var_201 != 0) {
                        var_2221 = var_83[var_1992].Var1;
                        var_2222 = var_83[var_1992].Var2;
                        var_2223 = var_83[var_1992].Var1 - 1;
                        if (var_2223 < 0) {
                            var_2223 = 0;
                        }
                        var_2224 = var_83[var_1992].Var1 + 1;
                        if (var_2224 > var_33) {
                            var_2224 = var_33;
                        }
                        var_2225 = var_83[var_1992].Var2 + 1;
                        if (var_2225 > var_34) {
                            var_2225 = var_34;
                        }
                        var_2226 = var_83[var_1992].Var2 - 1;
                        if (var_2226 < 0) {
                            var_2226 = 0;
                        }
                        if (var_83[var_1992].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                            var_83[var_1992].Var13 = 99;
                            var_2302 = 1;
                        }
                        if (var_83[var_1992].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                            var_83[var_1992].Var13 = 99;
                            var_2302 = 1;
                        }
                        if (var_83[var_1992].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                            var_83[var_1992].Var13 = 99;
                            var_2302 = 1;
                        }
                        if (var_83[var_1992].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                            var_83[var_1992].Var13 = 99;
                            var_2302 = 1;
                        }
                    }
                }
                var_1992 = var_1992 + 1;
            }
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            if (var_2302 == 1) {
                var_293 = "その場所に固定するッ！";
                DSPLAY(126);
            }
            if (var_2302 == 0) {
                var_293 = "しかし何も起こらなかった…";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            if (var_2302 == 1) {
                var_114 = 0;
                var_463 = 0;
                var_464 = 0;
                var_461 = 0;
                var_462 = 0;
            }
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 206) {
            yield func506();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "周囲がドロドロになってきた…";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_159 = 1;
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
            var_346 = dim(10, 10);
            if (var_71[var_66][var_67] == 0) {
                var_347 = var_66;
                var_348 = var_67;
                yield func622();
                var_345 = 1;
                var_346[0][1] = var_347;
                var_346[0][2] = var_348;
            }
            if (var_71[var_289][var_67] == 0) {
                var_347 = var_289;
                var_348 = var_67;
                yield func622();
                var_345 = 1;
                var_346[4][1] = var_347;
                var_346[4][2] = var_348;
            }
            if (var_71[var_290][var_67] == 0) {
                var_347 = var_290;
                var_348 = var_67;
                yield func622();
                var_345 = 1;
                var_346[6][1] = var_347;
                var_346[6][2] = var_348;
            }
            if (var_71[var_66][var_291] == 0) {
                var_347 = var_66;
                var_348 = var_291;
                yield func622();
                var_345 = 1;
                var_346[2][1] = var_347;
                var_346[2][2] = var_348;
            }
            if (var_71[var_66][var_292] == 0) {
                var_347 = var_66;
                var_348 = var_292;
                yield func622();
                var_345 = 1;
                var_346[8][1] = var_347;
                var_346[8][2] = var_348;
            }
            if (var_71[var_289][var_291] == 0) {
                var_347 = var_289;
                var_348 = var_291;
                yield func622();
                var_345 = 1;
                var_346[1][1] = var_347;
                var_346[1][2] = var_348;
            }
            if (var_71[var_290][var_291] == 0) {
                var_347 = var_290;
                var_348 = var_291;
                yield func622();
                var_345 = 1;
                var_346[3][1] = var_347;
                var_346[3][2] = var_348;
            }
            if (var_71[var_289][var_292] == 0) {
                var_347 = var_289;
                var_348 = var_292;
                yield func622();
                var_345 = 1;
                var_346[7][1] = var_347;
                var_346[7][2] = var_348;
            }
            if (var_71[var_290][var_292] == 0) {
                var_347 = var_290;
                var_348 = var_292;
                yield func622();
                var_345 = 1;
                var_346[9][1] = var_347;
                var_346[9][2] = var_348;
            }
            if (var_345 == 1) {
                DSPLAY(123);
                for (var cnt3 = 0; cnt3 < 5; ++cnt3) {
                    var_349++;
                    yield func337();
                    yield func337();
                }
                var_349 = 0;
                var_346 = dim(10, 10);
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 304) {
            yield func506();
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            gsel(19);
            color(1, 1, 1);
            boxf(0, 0, 340, 340);
            gsel(0);
            var_311 = 0;
            DSPLAY(178);
            var_312 = 1;
            for (var cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337();
                var_311 = var_311 + 5;
            }
            var_174 = 1;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "雨が降ってきた。";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_1594 = 1;
            var_271 = 1;
            for (var cnt2 = 0; cnt2 < 40; ++cnt2) {
                yield func337();
            }
            var_403 = "雷が落ちた！";
            var_2217 = 1;
            var_2194 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                var_2218 = var_565 * 3;
                var_2219 = rnd(3);
                var_2218 = var_2218 + var_2219;
                if (var_172 >= 1) {
                    var_2218 = var_2218 * 2;
                }
                if (var_2194 != var_124) {
                    var_2220 = 0;
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func518();
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
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func518();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func518();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func518();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func518();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func518();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func518();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func518();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func518();
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
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func518();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func518();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func518();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func518();
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
            var_2217 = 0;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "";
            var_294 = "　――――　雨があがった　――――";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_1594 = 0;
            var_271 = 0;
            for (var cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337();
                var_311 = var_311 - 5;
            }
            var_311 = 0;
            var_312 = 0;
            yield func340();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "地面が洗い流され、";
            var_297 = "罠が見えるようになった。";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func050();
            yield func047();
            var_121 = 1;
            yield func331();
            yield func340();
            var_2303 = 0;
            var_2304 = 0;
            var_2305 = 0;
            var_2205 = 1;
            for (var cnt2 = 0; cnt2 < var_336; ++cnt2) {
                if (var_78[var_2205].Var0 == 651) {
                    var_78[var_2205].Var0 = 653;
                    var_2303 = 1;
                }
                if (var_78[var_2205].Var0 == 650) {
                    var_78[var_2205].Var0 = 651;
                    var_2303 = 1;
                }
                var_2205++;
            }
            var_2205 = 1;
            for (var cnt2 = 0; cnt2 < var_224; ++cnt2) {
                if (var_233[var_2205].Var0 == 401) {
                    var_2304 = 1;
                }
                var_2205++;
            }
            var_2205 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                if (var_83[var_2205].Var0 == 115 || var_83[var_2205].Var0 == 27 || var_83[var_2205].Var0 == 21) {
                    var_2305 = 1;
                    var_83[var_2205].Var39 = var_83[var_2205].Var39 + 1;
                    if (var_83[var_2205].Var39 == 1) {
                        var_83[var_2205].Var39 = 2;
                    }
                    var_437 = var_83[var_2205].Var0;
                    yield func626();
                    var_83[var_2205].Var3 = Math.floor(var_438 * (var_83[var_2205].Var39 + 10) / 10);
                    if (var_83[var_2205].Var3 >= 999) {
                        var_83[var_2205].Var3 = 999;
                    }
                }
                var_2205++;
            }
            if (var_2304 == 1) {
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "フー・ファイターズの威力がアップした！";
                var_297 = "";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func050();
                yield func047();
                yield func340();
            }
            if (var_2303 == 1) {
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "地面のカエルが成長したようだ。";
                var_297 = "";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func050();
                yield func047();
                yield func340();
            }
            if (var_2305 == 1) {
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "パワーアップした敵がいるようだ…";
                var_297 = "";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func050();
                yield func047();
                yield func340();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 102) {
            yield func506();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「キング・クリムゾン」！！";
            var_294 = "我以外の時間は消し飛ぶ！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_393 = dim(10, 10);
            if (var_123 == 0) {
                var_396 = var_92;
            }
            var_123 = 1;
            var_92 = 17;
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
            var_2306 = 1;
            var_1845 = 4;
            var_2102 = var_66;
            var_2103 = var_67;
            var_347 = var_66;
            var_348 = var_67;
            yield func556();
            var_2306 = 0;
            var_1845 = 0;
            var_124 = var_97;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 121) {
            yield func506();
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            gsel(19);
            color(150, 0, 150);
            boxf(0, 0, 340, 340);
            gsel(0);
            var_529 = 1;
            var_403 = "ウイルスが敵の体を蝕んでいる！";
            var_2217 = 1;
            var_2194 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                var_2218 = var_565 * 4;
                var_2219 = rnd(3);
                var_2218 = var_2218 + var_2219;
                if (var_172 >= 1) {
                    var_2218 = var_2218 * 2;
                }
                if (var_2194 != var_124) {
                    var_2220 = 0;
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
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
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
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
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
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
            var_529 = 0;
            var_2217 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 318) {
            yield func506();
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            gsel(19);
            color(250, 250, 250);
            boxf(0, 0, 340, 340);
            gsel(0);
            var_529 = 1;
            var_403 = "血液が沸騰している！";
            var_2217 = 1;
            var_2194 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                var_2218 = var_565 * 3;
                var_2219 = rnd(3);
                var_2218 = var_2218 + var_2219;
                if (var_172 >= 1) {
                    var_2218 = var_2218 * 2;
                }
                if (var_2194 != var_124) {
                    var_2220 = 0;
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func517();
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
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func517();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func517();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func517();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func517();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func517();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func517();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func517();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func517();
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
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func517();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func517();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func517();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func517();
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
            var_529 = 0;
            var_2217 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 117) {
            yield func506();
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            gsel(19);
            color(0, 0, 150);
            boxf(0, 0, 340, 340);
            gsel(0);
            var_2307 = 0;
            var_529 = 1;
            var_403 = "フジツボでエネルギーを吸い取っている！";
            var_2217 = 1;
            var_2194 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                var_2308 = var_565 * 2;
                var_2219 = rnd(3);
                var_2308 = var_2308 + var_2219;
                if (var_172 >= 1) {
                    var_2308 = var_2308 * 2;
                }
                if (var_2194 != var_124) {
                    var_2220 = 0;
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func515();
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
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func515();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func515();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func515();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func515();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func515();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func515();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func515();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func515();
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
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func515();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func515();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func515();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func515();
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
            var_529 = 0;
            if (var_2307 != 0) {
                DSPLAY(143);
                var_1299 = 0;
                var_271 = 1;
                var_1297 = 1;
                for (var cnt3 = 0; cnt3 < 20; ++cnt3) {
                    yield func337();
                    var_1297++;
                }
                var_271 = 0;
                var_1297 = 0;
                var_211 = var_211 + var_2307;
                if (var_211 > var_352) {
                    var_211 = var_352;
                }
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "合計 " + var_2307 + " のエネルギーを吸収した。";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
            }
            var_2217 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 313) {
            yield func506();
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            var_2307 = 0;
            var_403 = "養分を吸い取っている！";
            var_2217 = 1;
            var_2194 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                var_2308 = var_565 * 2;
                var_2219 = rnd(3);
                var_2308 = var_2308 + var_2219;
                if (var_172 >= 1) {
                    var_2308 = var_2308 * 2;
                }
                if (var_2194 != var_124) {
                    var_2220 = 0;
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func514();
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
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func514();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func514();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func514();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func514();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func514();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func514();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func514();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func514();
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
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func514();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func514();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func514();
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func514();
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
            if (var_2307 != 0) {
                DSPLAY(143);
                var_1299 = 0;
                var_271 = 1;
                var_1297 = 1;
                for (var cnt3 = 0; cnt3 < 20; ++cnt3) {
                    yield func337();
                    var_1297++;
                }
                var_271 = 0;
                var_1297 = 0;
                var_360 = 0;
                var_350 = var_350 + var_2307;
                if (var_350 > var_567) {
                    var_350 = var_567;
                }
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "合計 " + var_2307 + " の養分を吸収した。";
                if (var_350 == var_567) {
                    var_294 = "満腹度が完全回復した。";
                }
                if (var_350 < var_567) {
                    var_294 = "満腹度が回復した。";
                }
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 12; ++cnt3) {
                    yield func337();
                }
            }
            var_2217 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 308) {
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
            if (var_71[var_2102][var_2103] == 0 || var_71[var_2102][var_2103] == 13 || var_82[var_2102][var_2103] != 0) {
                var_2108 = 0;
            }
            if (var_71[var_2102][var_2103] != 0 && var_71[var_2102][var_2103] != 13 && var_82[var_2102][var_2103] == 0) {
                var_2108 = 1;
            }
            if (var_2108 == 0) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "そこには人形を出せないぞ。";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337();
                }
                var_234 = 0;
                var_220 = 0;
                yield func009();
                return;
            }
            var_2309 = 1;
            var_1845 = 4;
            yield func556();
            var_2309 = 0;
            var_1845 = 0;
            var_1584 = (var_83[var_673].Var1 - var_66 + 4) * 40;
            var_1585 = (var_83[var_673].Var2 - var_67 + 4) * 40;
            var_271 = 1;
            var_1583 = 1;
            DSPLAY(168);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
                var_198 = 1;
                var_300 = 0;
                var_1583++;
            }
            var_271 = 0;
            var_1583 = 0;
            var_232 = 308;
            yield func506();
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "うけけけけけけけけけけッ！！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 203) {
            yield func506();
            if (var_570 == 0) {
                var_1284 = 11;
            }
            if (var_570 == 1) {
                var_1284 = 1;
            }
            if (var_570 == 2) {
                var_1284 = 16;
            }
            if (var_570 == 3) {
                var_1284 = 29;
            }
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「アッフォオオ―――――ン！」";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_374 = 1;
            var_1575 = 1;
            var_271 = 1;
            var_774 = 160;
            yield func337();
            var_774 = 150;
            yield func337();
            var_774 = 140;
            yield func337();
            var_774 = 130;
            yield func337();
            var_774 = 120;
            yield func337();
            var_774 = 110;
            yield func337();
            var_774 = 100;
            yield func337();
            for (var cnt2 = 0; cnt2 < 3; ++cnt2) {
                var_774 = 102;
                for (var cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_774 = 104;
                for (var cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_774 = 106;
                for (var cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_774 = 108;
                for (var cnt3 = 0; cnt3 < 4; ++cnt3) {
                    yield func337();
                }
                var_774 = 106;
                for (var cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_774 = 104;
                for (var cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_774 = 102;
                for (var cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337();
                }
                var_774 = 100;
                var_1574 = 1;
                for (var cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337();
                    var_1574++;
                }
                var_1574 = 0;
            }
            for (var cnt2 = 0; cnt2 < 16; ++cnt2) {
                yield func337();
                var_774 = var_774 - 10;
            }
            var_1575 = 0;
            var_271 = 0;
            var_2265 = 0;
            var_2194 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                var_2266 = 0;
                if (var_83[var_2194].Var0 != 0) {
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
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                        yield func521();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        yield func521();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        yield func521();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        yield func521();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        yield func521();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        yield func521();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        yield func521();
                        var_2266 = 1;
                    }
                    if (var_2266 == 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        yield func521();
                        var_2266 = 1;
                    }
                }
                if (var_2266 == 1) {
                    var_2265 = 1;
                }
                var_2194 = var_2194 + 1;
            }
            if (var_2265 == 1) {
                DSPLAY(153);
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "周りの敵は目に砂が入って";
                var_297 = "盲目になってしまった！";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func050();
                yield func047();
                yield func340();
            }
            var_374 = 0;
            yield func499();
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 112 || var_2258 == 394) {
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
            if (var_71[var_2102][var_2103] == 0 || var_71[var_2102][var_2103] == 13 || var_82[var_2102][var_2103] != 0) {
                var_2108 = 0;
            }
            if (var_71[var_2102][var_2103] != 0 && var_71[var_2102][var_2103] != 13 && var_82[var_2102][var_2103] == 0) {
                var_2108 = 1;
            }
            if (var_2108 == 0) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "そこには出せないぞ。";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337();
                }
                var_234 = 0;
                var_220 = 0;
                yield func009();
                return;
            }
            var_2310 = 1;
            var_1845 = 4;
            yield func556();
            var_2310 = 0;
            var_1845 = 0;
            var_1584 = (var_83[var_673].Var1 - var_66 + 4) * 40;
            var_1585 = (var_83[var_673].Var2 - var_67 + 4) * 40;
            var_271 = 1;
            var_1583 = 1;
            DSPLAY(168);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
                var_198 = 1;
                var_300 = 0;
                var_1583++;
            }
            var_271 = 0;
            var_1583 = 0;
            var_232 = var_2258;
            yield func506();
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「シアー・ハート・アタック」！！";
            var_294 = "狙った標的は必ず仕留める…";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 204) {
            yield func506();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            DSPLAY(165);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "カチリ";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            for (var cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337();
            }
            var_1389 = var_66;
            var_1390 = var_67;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
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
            }
            if (var_77[var_1993][var_1390] > 0) {
                var_77[var_1993][var_1390] = 0;
            }
            if (var_77[var_1994][var_1390] > 0) {
                var_77[var_1994][var_1390] = 0;
            }
            if (var_77[var_1389][var_1995] > 0) {
                var_77[var_1389][var_1995] = 0;
            }
            if (var_77[var_1389][var_1996] > 0) {
                var_77[var_1389][var_1996] = 0;
            }
            if (var_77[var_1993][var_1995] > 0) {
                var_77[var_1993][var_1995] = 0;
            }
            if (var_77[var_1994][var_1995] > 0) {
                var_77[var_1994][var_1995] = 0;
            }
            if (var_77[var_1993][var_1996] > 0) {
                var_77[var_1993][var_1996] = 0;
            }
            if (var_77[var_1994][var_1996] > 0) {
                var_77[var_1994][var_1996] = 0;
            }
            var_199 = 2;
            var_389 = 2;
            var_1263 = 1;
            DSPLAY(180);
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
            var_403 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
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
                var_356 = 209;
                for (var cnt3 = 0; cnt3 < 9; ++cnt3) {
                    yield func337();
                }
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
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 312) {
            yield func506();
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            var_2311 = dim(300);
            var_271 = 1;
            var_1224 = var_199;
            var_1225 = 5;
            var_1517 = 160;
            var_1518 = 140;
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            var_1224 = 1;
            var_1225 = 0;
            for (var cnt2 = 0; cnt2 < 80; ++cnt2) {
                yield func337();
            }
            var_1224 = 10;
            var_1225 = 0;
            var_1517 = 340;
            var_1518 = 160;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
            var_271 = 0;
            var_1224 = 0;
            var_403 = "ｴｱﾛｽﾐｽの弾丸が直撃！";
            var_2217 = 1;
            var_2312 = var_97 + 1;
            var_2313 = 0;
            for (var cnt2 = 0; cnt2 < 200; ++cnt2) {
                var_2194 = rnd(var_2312);
                if (var_2194 != var_124 && var_83[var_2194].Var0 != 0 && var_2311[var_2194] == 0) {
                    var_2308 = var_565 * 5;
                    var_2219 = rnd(3);
                    var_2308 = var_2308 + var_2219;
                    if (var_172 >= 1) {
                        var_2308 = var_2308 * 2;
                    }
                    var_209 = var_2308;
                    var_402 = var_2194;
                    yield func705();
                    for (var cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337();
                    }
                    var_2311[var_2194] = 1;
                    var_2313 = var_2313 + 1;
                }
                if (var_2313 == 10) {
                    break;
                }
            }
            var_2313 = 0;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_2217 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 316) {
            yield func506();
            if (var_570 == 0) {
                var_1284 = 11;
            }
            if (var_570 == 1) {
                var_1284 = 1;
            }
            if (var_570 == 2) {
                var_1284 = 16;
            }
            if (var_570 == 3) {
                var_1284 = 29;
            }
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            if (var_174 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "地面が濡れて伝達力が上がっている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            var_271 = 1;
            var_1520 = 1;
            DSPLAY(161);
            for (var cnt2 = 0; cnt2 < 26; ++cnt2) {
                yield func337();
                var_1520++;
            }
            var_1520 = 0;
            var_271 = 0;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_1992 = 1;
            var_1993 = var_66 - 1;
            var_1994 = var_66 + 1;
            var_1995 = var_67 + 1;
            var_1996 = var_67 - 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                if (var_83[var_1992].Var10 == var_201 && var_201 != 14) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var17 = 1;
                }
                if (var_201 <= 12 && var_201 != 0) {
                    var_2221 = var_83[var_1992].Var1;
                    var_2222 = var_83[var_1992].Var2;
                    var_2223 = var_83[var_1992].Var1 - 1;
                    if (var_2223 < 0) {
                        var_2223 = 0;
                    }
                    var_2224 = var_83[var_1992].Var1 + 1;
                    if (var_2224 > var_33) {
                        var_2224 = var_33;
                    }
                    var_2225 = var_83[var_1992].Var2 + 1;
                    if (var_2225 > var_34) {
                        var_2225 = var_34;
                    }
                    var_2226 = var_83[var_1992].Var2 - 1;
                    if (var_2226 < 0) {
                        var_2226 = 0;
                    }
                    if (var_83[var_1992].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                        var_83[var_1992].Var12 = 0;
                        var_83[var_1992].Var17 = 1;
                    }
                    if (var_83[var_1992].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                        var_83[var_1992].Var12 = 0;
                        var_83[var_1992].Var17 = 1;
                    }
                    if (var_83[var_1992].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                        var_83[var_1992].Var12 = 0;
                        var_83[var_1992].Var17 = 1;
                    }
                    if (var_83[var_1992].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                        var_83[var_1992].Var12 = 0;
                        var_83[var_1992].Var17 = 1;
                    }
                }
                if (var_83[var_1992].Var1 == var_66 && var_83[var_1992].Var2 == var_1995) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var17 = 1;
                }
                if (var_83[var_1992].Var1 == var_66 && var_83[var_1992].Var2 == var_1996) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var17 = 1;
                }
                if (var_83[var_1992].Var1 == var_1993 && var_83[var_1992].Var2 == var_67) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var17 = 1;
                }
                if (var_83[var_1992].Var1 == var_1994 && var_83[var_1992].Var2 == var_67) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var17 = 1;
                }
                if (var_83[var_1992].Var1 == var_1993 && var_83[var_1992].Var2 == var_1995) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var17 = 1;
                }
                if (var_83[var_1992].Var1 == var_1994 && var_83[var_1992].Var2 == var_1995) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var17 = 1;
                }
                if (var_83[var_1992].Var1 == var_1993 && var_83[var_1992].Var2 == var_1996) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var17 = 1;
                }
                if (var_83[var_1992].Var1 == var_1994 && var_83[var_1992].Var2 == var_1996) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var17 = 1;
                }
                if (var_172 == 1 || var_174 == 1) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var17 = 1;
                }
                var_1992 = var_1992 + 1;
            }
            yield func135();
            var_114 = 0;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "ファイトクラブだっ！！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 202) {
            yield func506();
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "低温世界で動ける物質はなにもなくなる";
            var_294 = "全てを止められる！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            gsel(19);
            color(255, 255, 255);
            boxf(0, 0, 340, 340);
            gsel(0);
            DSPLAY(126);
            var_529 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
            var_1992 = 1;
            var_1993 = var_66 - 1;
            var_1994 = var_66 + 1;
            var_1995 = var_67 + 1;
            var_1996 = var_67 - 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                if (var_83[var_1992].Var10 == var_201 && var_201 != 14) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 1;
                    if (var_114 == var_1992) {
                        var_114 = 0;
                    }
                }
                if (var_83[var_1992].Var1 == var_66 && var_83[var_1992].Var2 == var_1995) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 1;
                    if (var_114 == var_1992) {
                        var_114 = 0;
                    }
                }
                if (var_83[var_1992].Var1 == var_66 && var_83[var_1992].Var2 == var_1996) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 1;
                    if (var_114 == var_1992) {
                        var_114 = 0;
                    }
                }
                if (var_83[var_1992].Var1 == var_1993 && var_83[var_1992].Var2 == var_67) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 1;
                    if (var_114 == var_1992) {
                        var_114 = 0;
                    }
                }
                if (var_83[var_1992].Var1 == var_1994 && var_83[var_1992].Var2 == var_67) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 1;
                    if (var_114 == var_1992) {
                        var_114 = 0;
                    }
                }
                if (var_83[var_1992].Var1 == var_1993 && var_83[var_1992].Var2 == var_1995) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 1;
                    if (var_114 == var_1992) {
                        var_114 = 0;
                    }
                }
                if (var_83[var_1992].Var1 == var_1994 && var_83[var_1992].Var2 == var_1995) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 1;
                    if (var_114 == var_1992) {
                        var_114 = 0;
                    }
                }
                if (var_83[var_1992].Var1 == var_1993 && var_83[var_1992].Var2 == var_1996) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 1;
                    if (var_114 == var_1992) {
                        var_114 = 0;
                    }
                }
                if (var_83[var_1992].Var1 == var_1994 && var_83[var_1992].Var2 == var_1996) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 1;
                    if (var_114 == var_1992) {
                        var_114 = 0;
                    }
                }
                if (var_201 <= 12 && var_201 != 0) {
                    var_2221 = var_83[var_1992].Var1;
                    var_2222 = var_83[var_1992].Var2;
                    var_2223 = var_83[var_1992].Var1 - 1;
                    if (var_2223 < 0) {
                        var_2223 = 0;
                    }
                    var_2224 = var_83[var_1992].Var1 + 1;
                    if (var_2224 > var_33) {
                        var_2224 = var_33;
                    }
                    var_2225 = var_83[var_1992].Var2 + 1;
                    if (var_2225 > var_34) {
                        var_2225 = var_34;
                    }
                    var_2226 = var_83[var_1992].Var2 - 1;
                    if (var_2226 < 0) {
                        var_2226 = 0;
                    }
                    if (var_83[var_1992].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                        var_83[var_1992].Var12 = 0;
                        var_83[var_1992].Var13 = 1;
                        if (var_114 == var_1992) {
                            var_114 = 0;
                        }
                    }
                    if (var_83[var_1992].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                        var_83[var_1992].Var12 = 0;
                        var_83[var_1992].Var13 = 1;
                        if (var_114 == var_1992) {
                            var_114 = 0;
                        }
                    }
                    if (var_83[var_1992].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                        var_83[var_1992].Var12 = 0;
                        var_83[var_1992].Var13 = 1;
                        if (var_114 == var_1992) {
                            var_114 = 0;
                        }
                    }
                    if (var_83[var_1992].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                        var_83[var_1992].Var12 = 0;
                        var_83[var_1992].Var13 = 1;
                        if (var_114 == var_1992) {
                            var_114 = 0;
                        }
                    }
                }
                if (var_172 >= 1) {
                    var_83[var_1992].Var12 = 0;
                    var_83[var_1992].Var13 = 1;
                    var_114 = 0;
                }
                var_1992 = var_1992 + 1;
            }
            var_114 = 0;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_529 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 395) {
            yield func506();
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "キラークィーン【第３の爆弾】";
            var_294 = "「BITE THE DUST」（負けて死ね）！！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_198 = 1;
            var_300 = 0;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_198 = 1;
                var_300 = 0;
            }
            var_2314 = 0;
            var_2194 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                if (var_2194 != var_124 && var_83[var_2194].Var0 != 132 && var_83[var_2194].Var0 != 143 && var_83[var_2194].Var0 != 34 && var_83[var_2194].Var31 != 4 && var_83[var_2194].Var31 != 5) {
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                        var_83[var_2194].Var12 = 0;
                        var_83[var_2194].Var13 = 0;
                        var_83[var_2194].Var24 = 3;
                        var_2314 = 1;
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
                            var_83[var_2194].Var12 = 0;
                            var_83[var_2194].Var13 = 0;
                            var_83[var_2194].Var24 = 3;
                            var_2314 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                            var_83[var_2194].Var12 = 0;
                            var_83[var_2194].Var13 = 0;
                            var_83[var_2194].Var24 = 3;
                            var_2314 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                            var_83[var_2194].Var12 = 0;
                            var_83[var_2194].Var13 = 0;
                            var_83[var_2194].Var24 = 3;
                            var_2314 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                            var_83[var_2194].Var12 = 0;
                            var_83[var_2194].Var13 = 0;
                            var_83[var_2194].Var24 = 3;
                            var_2314 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                            var_83[var_2194].Var12 = 0;
                            var_83[var_2194].Var13 = 0;
                            var_83[var_2194].Var24 = 3;
                            var_2314 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                            var_83[var_2194].Var12 = 0;
                            var_83[var_2194].Var13 = 0;
                            var_83[var_2194].Var24 = 3;
                            var_2314 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                            var_83[var_2194].Var12 = 0;
                            var_83[var_2194].Var13 = 0;
                            var_83[var_2194].Var24 = 3;
                            var_2314 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                            var_83[var_2194].Var12 = 0;
                            var_83[var_2194].Var13 = 0;
                            var_83[var_2194].Var24 = 3;
                            var_2314 = 1;
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
                            var_83[var_2194].Var12 = 0;
                            var_83[var_2194].Var13 = 0;
                            var_83[var_2194].Var24 = 3;
                            var_2314 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                            var_83[var_2194].Var12 = 0;
                            var_83[var_2194].Var13 = 0;
                            var_83[var_2194].Var24 = 3;
                            var_2314 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                            var_83[var_2194].Var12 = 0;
                            var_83[var_2194].Var13 = 0;
                            var_83[var_2194].Var24 = 3;
                            var_2314 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                            var_83[var_2194].Var12 = 0;
                            var_83[var_2194].Var13 = 0;
                            var_83[var_2194].Var24 = 3;
                            var_2314 = 1;
                        }
                    }
                }
                var_2194 = var_2194 + 1;
            }
            if (var_2314 == 1) {
                yield func340();
                yield func094();
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "すでに「瞳」の中に入っている！";
                var_297 = "";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
            }
            if (var_2314 == 0) {
                yield func340();
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "しかし何もおこらなかった…";
                var_297 = "";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 302) {
            yield func506();
            if (var_172 == 1) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "発動能力がパワーアップしている！";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func340();
            }
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "オレって情けねえよなあ～～～。";
            var_294 = "死にたくなった･･･";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
            var_1054 = 1;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            DSPLAY(136);
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                var_1054 = 2;
                yield func337();
                var_1054 = 3;
                yield func337();
            }
            if (var_211 == 1) {
                var_211 = 0;
                var_212 = 1;
                var_356 = 247;
                var_199 = 2;
                for (var cnt3 = 0; cnt3 < 20; ++cnt3) {
                    yield func337();
                }
                yield func009();
                return;
            }
            if (var_211 > 1) {
                var_211 = Math.floor(var_211 / 2);
                var_208 = Math.floor(var_211 / 2) + var_208;
            }
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
            var_2307 = 0;
            var_403 = "道連れにしている！";
            var_2217 = 1;
            var_2194 = 1;
            for (var cnt2 = 0; cnt2 < var_97; ++cnt2) {
                var_2308 = var_565 * 2;
                var_2219 = rnd(3);
                var_2308 = var_2308 + var_2219;
                if (var_172 >= 1) {
                    var_2308 = var_2308 * 2;
                }
                if (var_2194 != var_124) {
                    var_2220 = 0;
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
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
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
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
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2223][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
                            yield func705();
                            for (var cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337();
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2308;
                            var_2307 = var_2307 + var_2308;
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
            var_1054 = 0;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_2217 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 303) {
            yield func506();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "攻撃をかわしやすくなった！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
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
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 413) {
            var_2109 = 1;
            var_1845 = 1;
            yield func556();
            var_2109 = 0;
            var_1845 = 0;
            if (var_2110 == 0) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "人形を置く場所が無いぞ。";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337();
                }
                var_234 = 0;
                var_220 = 0;
                yield func009();
                return;
            }
            yield func506();
            var_439 = var_673;
            var_83[var_439].Var11 = 1;
            var_83[var_439].Var5 = 2;
            var_271 = 1;
            var_444 = 1;
            for (var cnt2 = 0; cnt2 < 25; ++cnt2) {
                yield func337();
                var_444 = var_444 + 1;
            }
            var_271 = 0;
            var_444 = 0;
            var_83[var_439].Var11 = 0;
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 320) {
            yield func506();
            var_131 = 1;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "砂鉄を吸い寄せて透明になった。";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 305) {
            yield func506();
            var_1024 = 1;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "幸運な顔のメイクをしてみた。";
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
            var_296 = "次のフロアでアイテムがたくさん";
            var_297 = "出現する気がする…！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 396) {
            yield func506();
            DSPLAY(154);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "自分だけ速く動けるようになった！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            if (var_133 == 0) {
                var_157 = 1;
                var_158 = 0;
            }
            if (var_133 != 0) {
                var_133 = 0;
            }
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 119) {
            yield func506();
            DSPLAY(152);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "体にゴムのような弾力がついた！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_150 = 1;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 123) {
            yield func506();
            var_340 = 123;
            var_1264 = 0;
            var_1218 = 1;
            var_1219 = 0;
            for (var cnt2 = 0; cnt2 < 25; ++cnt2) {
                yield func337();
            }
            var_455 = var_66;
            var_456 = var_67;
            var_1220 = 1;
            var_198 = 0;
            var_1222 = 1;
            yield func337();
            var_1222 = 0;
            if (var_199 == 4) {
                var_1416 = 40;
            }
            if (var_199 == 6) {
                var_1416 = 120;
            }
            if (var_199 == 8) {
                var_1416 = 80;
            }
            if (var_199 == 2) {
                var_1416 = 0;
            }
            if (var_199 == 1) {
                var_1416 = 160;
            }
            if (var_199 == 3) {
                var_1416 = 240;
            }
            if (var_199 == 7) {
                var_1416 = 200;
            }
            if (var_199 == 9) {
                var_1416 = 280;
            }
            var_2315 = 10;
            var_232 = var_233[var_225].Var0;
            yield func492();
            var_1218 = 3;
            var_1195 = 1;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                var_1894 = var_455;
                var_1895 = var_456;
                if (var_199 == 4) {
                    var_455 = var_455 - 1;
                }
                if (var_199 == 6) {
                    var_455 = var_455 + 1;
                }
                if (var_199 == 8) {
                    var_456 = var_456 - 1;
                }
                if (var_199 == 2) {
                    var_456 = var_456 + 1;
                }
                if (var_199 == 1) {
                    var_455 = var_455 - 1;
                    var_456 = var_456 + 1;
                }
                if (var_199 == 3) {
                    var_455 = var_455 + 1;
                    var_456 = var_456 + 1;
                }
                if (var_199 == 7) {
                    var_455 = var_455 - 1;
                    var_456 = var_456 - 1;
                }
                if (var_199 == 9) {
                    var_455 = var_455 + 1;
                    var_456 = var_456 - 1;
                }
                if (var_94 == 9 && var_71[var_455][var_456] == 0) {
                    break;
                }
                if (var_455 < 5 || var_455 > var_33 || var_456 < 5 || var_456 > var_34) {
                    var_455 = var_1894;
                    var_456 = var_1895;
                }
                var_66 = var_455;
                var_67 = var_456;
                var_236 = var_1894;
                var_237 = var_1895;
                yield func016();
                if (var_72[var_236][var_237] >= 1 && var_72[var_66][var_67] == 0 && var_85 == 0) {
                    yield func722();
                }
                if (var_71[var_455][var_456] == 0) {
                    var_71[var_455][var_456] = 14;
                }
                if (var_77[var_455][var_456] > 0) {
                    var_77[var_455][var_456] = 0;
                }
                if (var_94 != 9) {
                    if (var_199 == 1 || var_199 == 3 || var_199 == 7 || var_199 == 9) {
                        var_2316 = var_455 - 1;
                        if (var_2316 < 5) {
                            var_2316 = 5;
                        }
                        var_2317 = var_455 + 1;
                        if (var_2317 > var_33) {
                            var_2317 = var_33;
                        }
                        var_2318 = var_456 + 1;
                        if (var_2318 > var_34) {
                            var_2318 = var_34;
                        }
                        var_2319 = var_456 - 1;
                        if (var_2319 < 5) {
                            var_2319 = 5;
                        }
                        if (var_71[var_2316][var_456] == 0) {
                            var_71[var_2316][var_456] = 14;
                        }
                        if (var_71[var_2317][var_456] == 0) {
                            var_71[var_2317][var_456] = 14;
                        }
                        if (var_71[var_455][var_2318] == 0) {
                            var_71[var_455][var_2318] = 14;
                        }
                        if (var_71[var_455][var_2319] == 0) {
                            var_71[var_455][var_2319] = 14;
                        }
                    }
                }
                if (var_82[var_455][var_456] > 0) {
                    yield func660();
                }
                yield func337();
                yield func331();
            }
            var_1195 = 0;
            var_1218 = 2;
            var_1219 = 0;
            yield func016();
            for (var cnt2 = 0; cnt2 < 16; ++cnt2) {
                yield func337();
            }
            var_1218 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 124) {
            if (var_407 == 2) {
                var_2320 = 0;
                var_2321 = sdim(100, 10);
                for (var cnt3 = 0; cnt3 < 8; ++cnt3) {
                    var_2321[cnt3] = "" + var_1070[cnt3];
                    if (var_1069[cnt3][4] == 0) {
                        var_2321[cnt4] = "(no entry)";
                    }
                    if (var_1069[cnt3][4] != 0) {
                        var_2320++;
                    }
                }
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "誰に送りますか？";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 4; ++cnt3) {
                    yield func337();
                }
                yield func340();
                yield func051();
                var_2322 = 0;
                var_1210 = 1;
                var_2323 = 0;
                var_2324 = 8;
                var_2325 = var_2324 - 1;
                var_2326 = var_2324 * 20 + 37 + 30;
                var_228 = 45;
                for (var cnt3 = 0; true; ++cnt3) {
                    yield func337();
                    yield func080();
                    if (var_239 == 1) {
                        DSPLAY(212);
                        var_2322 = 1;
                        break;
                    }
                    if (var_242 == 1 || var_244 == 1) {
                        if (var_2321[var_2323] != "(no entry)") {
                            if (var_2321[var_2323] != var_40) {
                                DSPLAY(212);
                                break;
                            }
                        }
                    }
                    if (var_259 == 1) {
                        if (var_2323 != 7) {
                            var_228 = var_228 + 22;
                            var_2323 = var_2323 + 1;
                            DSPLAY(100);
                            yield func337();
                            yield func337();
                            continue;
                        }
                        if (var_2323 == 7) {
                            var_228 = 45;
                            var_2323 = 0;
                            DSPLAY(100);
                            yield func337();
                            yield func337();
                            continue;
                        }
                    }
                    if (var_255 == 1) {
                        if (var_2323 != 0) {
                            var_228 = var_228 - 22;
                            var_2323 = var_2323 - 1;
                            DSPLAY(100);
                            yield func337();
                            yield func337();
                            continue;
                        }
                        if (var_2323 == 0) {
                            var_228 = 45 + 7 * 22;
                            var_2323 = 7;
                            DSPLAY(100);
                            yield func337();
                            yield func337();
                            continue;
                        }
                    }
                }
                var_1210 = 0;
                if (var_2322 == 0) {
                    var_293 = "";
                    var_294 = "";
                    var_295 = "";
                    var_296 = "";
                    var_297 = "";
                    var_298 = "";
                    var_299 = 0;
                    var_293 = "どれを送りますか？";
                    var_294 = "";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func047();
                    for (var cnt4 = 0; cnt4 < 4; ++cnt4) {
                        yield func337();
                    }
                    yield func340();
                    var_2300 = var_225;
                    var_2301 = 0;
                    if (var_220 != 0) {
                        var_2301 = 1;
                    }
                    if (var_234 != 0) {
                        var_2301 = 2;
                    }
                    var_2007 = 1;
                    var_227 = 1;
                    var_228 = 45;
                    var_225 = 1;
                    var_223 = var_224 + 10;
                    var_220 = 0;
                    yield func051();
                    var_197 = 1;
                    yield func461();
                    return;
                }
            }
            if (var_407 == 1 && var_536 == 1 && var_62 == int(var_1068[12])) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                var_293 = "どれを相手に送りますか？";
                var_294 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 4; ++cnt3) {
                    yield func337();
                }
                yield func340();
                var_2300 = var_225;
                var_2301 = 0;
                if (var_220 != 0) {
                    var_2301 = 1;
                }
                if (var_234 != 0) {
                    var_2301 = 2;
                }
                var_2007 = 1;
                var_227 = 1;
                var_228 = 45;
                var_225 = 1;
                var_223 = var_224 + 10;
                var_220 = 0;
                yield func051();
                var_197 = 1;
                yield func461();
                return;
            }
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "どれを倉庫に送りますか？";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 4; ++cnt2) {
                yield func337();
            }
            yield func340();
            var_2008 = 1;
            var_2300 = var_225;
            var_2301 = 0;
            if (var_220 != 0) {
                var_2301 = 1;
            }
            if (var_234 != 0) {
                var_2301 = 2;
            }
            var_2007 = 1;
            var_227 = 1;
            var_228 = 45;
            var_225 = 1;
            var_223 = var_224 + 10;
            var_220 = 0;
            yield func051();
            var_197 = 1;
            yield func461();
            return;
        }
        if (var_2258 == 311) {
            yield func506();
            if (var_407 == 1 && var_536 == 1 && var_62 == int(var_1068[12]) && var_415 >= 300) {
                yield func921();
                return;
            }
            var_271 = 1;
            var_1321 = 1;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
                var_1321 = var_1321 + 1;
            }
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「おんぶして」　「ねっ！」";
            var_294 = "　　　　「おんぶして…」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「あなたが今のぼくの本体なんです！」";
            var_297 = "　「わかる？」　「ね？」";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「ぼくの能力は人に囁くだけ」";
            var_297 = "　　「ね？」「誰か助け呼ぶの？」";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「イヒヒ！」　「ねっ！」";
            var_297 = "　　　「イヒヒヒヒ」";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「ポコチンまで干からびさせて";
            var_297 = "　　死ぬのはおまえだッ！」";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「どこへ行こうとも…";
            var_297 = "　　疲れるだけだよ」」";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「疲労とダメージで";
            var_297 = "　　ぶっ倒れるのが先か」";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            yield func094();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「精神がまいっちまって";
            var_297 = "　　自滅するのが先か…」";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
                var_1321 = var_1321 + 1;
            }
            DSPLAY(164);
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "最大精神力が１下がってしまった！";
            var_297 = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_566 = var_566 - 1;
            if (var_566 <= 0) {
                var_566 = 0;
            }
            var_565 = var_565 - 1;
            if (var_565 < 0) {
                var_565 = 0;
            }
            var_271 = 0;
            var_1321 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 397) {
            yield func506();
            var_2327 = 1;
            var_768 = 1;
            for (var cnt2 = 0; cnt2 < 30; ++cnt2) {
                yield func536();
                if (var_2328 == 1) {
                    break;
                }
            }
            var_768 = 0;
            var_2327 = 0;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「悪魔の虹」が大量にあらわれた！！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 314) {
            yield func506();
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
            }
            var_2329 = 0;
            DSPLAY(159);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「うにゃあ」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_2106 = 1;
            yield func647();
            return;
        }
        if (var_2258 == 405 || var_2258 == 406 || var_2258 == 408 || var_2258 == 409 || var_2258 == 410 || var_2258 == 404 || var_2258 == 400 || var_2258 == 317 || var_2258 == 414 || var_2258 == 309) {
            if (var_73[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_77[var_66][var_67] != 0) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                if (var_2258 == 409 || var_2258 == 406 || var_2258 == 410 || var_2258 == 309) {
                    var_293 = "ここには潜ませられない。";
                    var_294 = "";
                }
                if (var_2258 == 404 || var_2258 == 400 || var_2258 == 405 || var_2258 == 408) {
                    var_293 = "ここには仕掛けられない。";
                    var_294 = "";
                }
                if (var_2258 == 317) {
                    var_293 = "ここには貼れない。";
                    var_294 = "";
                }
                if (var_2258 == 414) {
                    var_293 = "ここには撃てない。";
                    var_294 = "";
                }
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337();
                }
                yield func009();
                return;
            }
            if (var_2258 == 414) {
                var_271 = 1;
                var_1496 = 1;
                for (var cnt3 = 0; cnt3 < 25; ++cnt3) {
                    yield func337();
                    var_1496++;
                }
                var_271 = 0;
                var_1496 = 0;
                var_1971 = var_199;
                var_199 = 2;
                var_1197 = 1;
                var_1220 = 1;
                DSPLAY(109);
            }
            var_337 = var_337 + 1;
            var_2330 = var_337;
            var_80[var_66][var_67] = var_2330;
            if (var_2258 == 309) {
                var_81[var_2330][0] = 78;
            }
            if (var_2258 == 410) {
                var_81[var_2330][0] = 89;
            }
            if (var_2258 == 406) {
                var_81[var_2330][0] = 87;
            }
            if (var_2258 == 408) {
                var_81[var_2330][0] = 88;
            }
            if (var_2258 == 405) {
                var_81[var_2330][0] = 90;
            }
            if (var_2258 == 409) {
                var_81[var_2330][0] = 91;
            }
            if (var_2258 == 404) {
                var_81[var_2330][0] = 93;
            }
            if (var_2258 == 400) {
                var_81[var_2330][0] = 92;
            }
            if (var_2258 == 317) {
                var_81[var_2330][0] = 81;
            }
            if (var_2258 == 414) {
                var_81[var_2330][0] = 79;
            }
            var_81[var_2330][1] = var_66;
            var_81[var_2330][2] = var_67;
            var_81[var_2330][4] = 1;
            var_81[var_2330][5] = var_201;
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            if (var_2258 == 309) {
                var_293 = "地面にｿﾌﾄ･ﾏｼｰﾝを潜ませた。";
                var_294 = "";
            }
            if (var_2258 == 406) {
                var_293 = "地面に文字を貼り付けた。";
                var_294 = "";
            }
            if (var_2258 == 408) {
                var_293 = "足元に鏡を仕掛けた。";
                var_294 = "";
            }
            if (var_2258 == 405) {
                var_293 = "地面に文字を貼り付けた。";
                var_294 = "";
            }
            if (var_2258 == 409) {
                var_293 = "こっそりラバーズを潜ませた。";
                var_294 = "";
            }
            if (var_2258 == 404) {
                var_293 = "足元に氷の罠を仕掛けた。";
                var_294 = "";
            }
            if (var_2258 == 410) {
                var_293 = "ﾊｲｳｪｲ･ｽﾀｰを潜ませた。";
                var_294 = "";
            }
            if (var_2258 == 400 || var_2258 == 407) {
                var_293 = "法王の結界を仕掛けた。";
                var_294 = "";
            }
            if (var_2258 == 317) {
                var_293 = "シールを貼った。";
                var_294 = "";
            }
            if (var_2258 == 414) {
                var_293 = "地面に穴を開けた。";
                var_294 = "";
            }
            if (var_2258 != 414) {
                DSPLAY(165);
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            if (var_2258 == 414) {
                for (var cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337();
                }
                var_199 = var_1971;
                var_1220 = 0;
                var_1197 = 0;
            }
            var_232 = var_2258;
            yield func506();
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 118 || var_2258 == 407) {
            var_2331 = 0;
            var_2332 = var_66;
            var_2333 = var_67;
            var_2334 = var_66 - 1;
            if (var_2334 <= 0) {
                var_2334 = 0;
            }
            var_2335 = var_66 + 1;
            if (var_2335 >= var_33) {
                var_2335 = var_33;
            }
            var_2336 = var_67 - 1;
            if (var_2336 <= 0) {
                var_2336 = 0;
            }
            var_2337 = var_67 + 1;
            if (var_2337 >= var_34) {
                var_2337 = var_34;
            }
            if (var_2258 == 118) {
                var_2338 = 94;
            }
            if (var_2258 == 407) {
                var_2338 = 92;
            }
            if (var_71[var_2332][var_2333] != 0 && var_71[var_2332][var_2333] != 13 && var_73[var_2332][var_2333] == 0 && var_77[var_2332][var_2333] == 0 && var_80[var_2332][var_2333] == 0) {
                var_337 = var_337 + 1;
                var_80[var_2332][var_2333] = var_337;
                var_81[var_337][0] = var_2338;
                var_81[var_337][1] = var_2332;
                var_81[var_337][2] = var_2333;
                var_81[var_337][4] = 1;
                var_81[var_337][5] = var_71[var_2332][var_2333];
                var_2331 = 1;
            }
            if (var_71[var_2334][var_2333] != 0 && var_71[var_2334][var_2333] != 13 && var_73[var_2334][var_2333] == 0 && var_77[var_2334][var_2333] == 0 && var_80[var_2334][var_2333] == 0) {
                var_2339 = var_2334;
                var_2340 = var_2333;
                var_337 = var_337 + 1;
                var_80[var_2339][var_2340] = var_337;
                var_81[var_337][0] = var_2338;
                var_81[var_337][1] = var_2339;
                var_81[var_337][2] = var_2340;
                var_81[var_337][4] = 1;
                var_81[var_337][5] = var_71[var_2339][var_2340];
                var_2331 = 1;
            }
            if (var_71[var_2335][var_2333] != 0 && var_71[var_2335][var_2333] != 13 && var_73[var_2335][var_2333] == 0 && var_77[var_2335][var_2333] == 0 && var_80[var_2335][var_2333] == 0) {
                var_2339 = var_2335;
                var_2340 = var_2333;
                var_337 = var_337 + 1;
                var_80[var_2339][var_2340] = var_337;
                var_81[var_337][0] = var_2338;
                var_81[var_337][1] = var_2339;
                var_81[var_337][2] = var_2340;
                var_81[var_337][4] = 1;
                var_81[var_337][5] = var_71[var_2339][var_2340];
                var_2331 = 1;
            }
            if (var_71[var_2332][var_2337] != 0 && var_71[var_2332][var_2337] != 13 && var_73[var_2332][var_2337] == 0 && var_77[var_2332][var_2337] == 0 && var_80[var_2332][var_2337] == 0) {
                var_2339 = var_2332;
                var_2340 = var_2337;
                var_337 = var_337 + 1;
                var_80[var_2339][var_2340] = var_337;
                var_81[var_337][0] = var_2338;
                var_81[var_337][1] = var_2339;
                var_81[var_337][2] = var_2340;
                var_81[var_337][4] = 1;
                var_81[var_337][5] = var_71[var_2339][var_2340];
                var_2331 = 1;
            }
            if (var_71[var_2332][var_2336] != 0 && var_71[var_2332][var_2336] != 13 && var_73[var_2332][var_2336] == 0 && var_77[var_2332][var_2336] == 0 && var_80[var_2332][var_2336] == 0) {
                var_2339 = var_2332;
                var_2340 = var_2336;
                var_337 = var_337 + 1;
                var_80[var_2339][var_2340] = var_337;
                var_81[var_337][0] = var_2338;
                var_81[var_337][1] = var_2339;
                var_81[var_337][2] = var_2340;
                var_81[var_337][4] = 1;
                var_81[var_337][5] = var_71[var_2339][var_2340];
                var_2331 = 1;
            }
            if (var_71[var_2334][var_2337] != 0 && var_71[var_2334][var_2337] != 13 && var_73[var_2334][var_2337] == 0 && var_77[var_2334][var_2337] == 0 && var_80[var_2334][var_2337] == 0) {
                var_2339 = var_2334;
                var_2340 = var_2337;
                var_337 = var_337 + 1;
                var_80[var_2339][var_2340] = var_337;
                var_81[var_337][0] = var_2338;
                var_81[var_337][1] = var_2339;
                var_81[var_337][2] = var_2340;
                var_81[var_337][4] = 1;
                var_81[var_337][5] = var_71[var_2339][var_2340];
                var_2331 = 1;
            }
            if (var_71[var_2334][var_2336] != 0 && var_71[var_2334][var_2336] != 13 && var_73[var_2334][var_2336] == 0 && var_77[var_2334][var_2336] == 0 && var_80[var_2334][var_2336] == 0) {
                var_2339 = var_2334;
                var_2340 = var_2336;
                var_337 = var_337 + 1;
                var_80[var_2339][var_2340] = var_337;
                var_81[var_337][0] = var_2338;
                var_81[var_337][1] = var_2339;
                var_81[var_337][2] = var_2340;
                var_81[var_337][4] = 1;
                var_81[var_337][5] = var_71[var_2339][var_2340];
                var_2331 = 1;
            }
            if (var_71[var_2335][var_2337] != 0 && var_71[var_2335][var_2337] != 13 && var_73[var_2335][var_2337] == 0 && var_77[var_2335][var_2337] == 0 && var_80[var_2335][var_2337] == 0) {
                var_2339 = var_2335;
                var_2340 = var_2337;
                var_337 = var_337 + 1;
                var_80[var_2339][var_2340] = var_337;
                var_81[var_337][0] = var_2338;
                var_81[var_337][1] = var_2339;
                var_81[var_337][2] = var_2340;
                var_81[var_337][4] = 1;
                var_81[var_337][5] = var_71[var_2339][var_2340];
                var_2331 = 1;
            }
            if (var_71[var_2335][var_2336] != 0 && var_71[var_2335][var_2336] != 13 && var_73[var_2335][var_2336] == 0 && var_77[var_2335][var_2336] == 0 && var_80[var_2335][var_2336] == 0) {
                var_2339 = var_2335;
                var_2340 = var_2336;
                var_337 = var_337 + 1;
                var_80[var_2339][var_2340] = var_337;
                var_81[var_337][0] = var_2338;
                var_81[var_337][1] = var_2339;
                var_81[var_337][2] = var_2340;
                var_81[var_337][4] = 1;
                var_81[var_337][5] = var_71[var_2339][var_2340];
                var_2331 = 1;
            }
            if (var_2331 == 0) {
                var_293 = "";
                var_294 = "";
                var_295 = "";
                var_296 = "";
                var_297 = "";
                var_298 = "";
                var_299 = 0;
                if (var_2258 == 118) {
                    var_293 = "この辺りには潜ませられない。";
                    var_294 = "";
                }
                if (var_2258 == 407) {
                    var_293 = "この辺りには仕掛けられない。";
                    var_294 = "";
                }
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (var cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337();
                }
                yield func009();
                return;
            }
            DSPLAY(165);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            if (var_2258 == 118) {
                var_293 = "地面にダイバーダウンを潜ませた。";
                var_294 = "";
            }
            if (var_2258 == 407) {
                var_293 = "法王の結界を仕掛けた。";
                var_294 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            var_232 = var_2258;
            yield func506();
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 401) {
            var_2341 = 0;
            var_211 = var_211 + 20;
            if (var_120 == 1 || var_174 == 1) {
                var_211 = var_211 + 20;
            }
            if (var_211 >= var_352) {
                var_211 = var_352;
                var_2341 = 1;
            }
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "傷口にプランクトンを詰めた。";
            if (var_120 == 1 || var_174 == 1) {
                var_294 = "いつもより多く回復した。";
            }
            if (var_2341 == 1) {
                var_294 = "体力が完全に回復した。";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            DSPLAY(143);
            var_1299 = 5;
            var_271 = 1;
            var_1297 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_232 = var_2258;
            yield func506();
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 402) {
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「エンペラー」！！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_232 = var_2258;
            yield func506();
            var_2342 = 1;
            yield func647();
            return;
        }
        if (var_2258 == 411) {
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_114 = 0;
            var_463 = 0;
            var_464 = 0;
            var_461 = 0;
            var_462 = 0;
            var_2343 = var_66;
            var_2344 = var_67;
            var_2345 = var_66 - 5;
            if (var_2345 < 0) {
                var_2345 = 0;
            }
            var_2346 = var_66 + 5;
            if (var_2346 > var_33) {
                var_2346 = var_33;
            }
            var_2347 = var_67 + 5;
            if (var_2347 > var_34) {
                var_2347 = var_34;
            }
            var_2348 = var_67 - 5;
            if (var_2348 < 0) {
                var_2348 = 0;
            }
            var_2349 = 0;
            for (var cnt2 = 0; cnt2 < 10000; ++cnt2) {
                var_2350 = rnd(var_33);
                var_2351 = rnd(var_34);
                if (var_2350 == var_2343 && var_2351 == var_2344) {
                    continue;
                }
                if (var_2350 > var_2345 && var_2350 < var_2346 && var_2351 > var_2348 && var_2351 < var_2347 && var_82[var_2350][var_2351] == 0 && var_71[var_2350][var_2351] != 0 && var_71[var_2350][var_2351] != 13) {
                    var_2349 = 1;
                    break;
                }
            }
            var_199 = 2;
            if (var_2349 == 1) {
                var_66 = var_2350;
                var_67 = var_2351;
                yield func016();
                if (var_201 != 14) {
                    yield func017();
                }
                yield func018();
                if (var_200 == var_201 && var_94 != 8) {
                    var_98 = 1;
                }
                if (var_202 == var_201 && var_94 != 8) {
                    var_99 = 1;
                }
                yield func331();
            }
            if (var_2349 == 0) {
                var_66 = var_236;
                var_67 = var_237;
            }
            var_1286 = 170;
            var_1287 = 140;
            var_271 = 1;
            var_1306 = 1;
            DSPLAY(190);
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
                var_1306++;
            }
            var_271 = 0;
            var_1306 = 0;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_232 = var_2258;
            yield func506();
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 412) {
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「ヘブンズドアーッ」！！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_2261 = var_357;
            var_357 = 0;
            var_243 = 1;
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
                    DSPLAY(100);
                    var_502 = 1;
                    DSPLAY(118);
                    yield func356();
                    return;
                }
                if (var_2232 == 2) {
                    var_1324 = (var_83[var_2231].Var1 - var_66 + 4) * 40;
                    var_1325 = (var_83[var_2231].Var2 - var_67 + 4) * 40 - 10;
                    var_271 = 1;
                    var_1323 = 1;
                    for (var cnt4 = 0; cnt4 < 20; ++cnt4) {
                        yield func337();
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
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_357 = var_2261;
            var_232 = var_2258;
            yield func506();
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 306) {
            yield func506();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「気流……」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            gsel(19);
            color(10, 10, 10);
            boxf(0, 0, 340, 340);
            gsel(0);
            var_311 = 0;
            var_312 = 1;
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_311 = var_311 + 10;
                var_198 = 1;
                var_300 = 0;
            }
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「このフロアの空気の流れを読む…！」";
            var_297 = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            DSPLAY(184);
            var_119 = 1;
            var_101 = 1;
            yield func331();
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
            }
            for (var cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337();
                var_311 = var_311 - 10;
                var_198 = 1;
                var_300 = 0;
            }
            var_312 = 0;
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "敵の行動がわかるようになった！";
            var_297 = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 315) {
            yield func506();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「エピタフ！」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_119 = 1;
            var_121 = 1;
            var_101 = 1;
            DSPLAY(184);
            yield func331();
            gsel(19);
            color(10, 10, 10);
            boxf(0, 0, 340, 340);
            gsel(0);
            var_311 = 255;
            var_312 = 1;
            for (var cnt2 = 0; cnt2 < 51; ++cnt2) {
                yield func337();
                var_311 = var_311 - 5;
                var_198 = 1;
                var_300 = 0;
            }
            var_312 = 0;
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "「迫り来る危険を感知できる…！」";
            var_297 = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "見えないものが見えるようになった！";
            var_297 = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 393) {
            yield func506();
            var_2352 = rnd(6);
            if (var_97 >= 50) {
                var_2352 = 10;
            }
            DSPLAY(118);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            if (var_2352 == 0) {
                var_293 = "ﾃﾞｨｱﾎﾞﾛは";
                var_294 = "「ﾌｧﾝﾄﾑ･ﾌﾞﾗｯﾄﾞ」を読んだ";
            }
            if (var_2352 == 1) {
                var_293 = "ﾃﾞｨｱﾎﾞﾛは";
                var_294 = "「戦闘潮流」を読んだ";
            }
            if (var_2352 == 2) {
                var_293 = "ﾃﾞｨｱﾎﾞﾛは";
                var_294 = "「ｽﾀｰﾀﾞｽﾄ･ｸﾙｾｲﾀﾞｰｽ」を読んだ";
            }
            if (var_2352 == 3) {
                var_293 = "ﾃﾞｨｱﾎﾞﾛは";
                var_294 = "「ダイヤモンドは砕けない」を読んだ";
            }
            if (var_2352 == 4) {
                var_293 = "ﾃﾞｨｱﾎﾞﾛは";
                var_294 = "「黄金の風」を読んだ";
            }
            if (var_2352 == 5) {
                var_293 = "ﾃﾞｨｱﾎﾞﾛは";
                var_294 = "「ｽﾄｰﾝ･ｵｰｼｬﾝ」を読んだ";
            }
            if (var_2352 == 6) {
                var_293 = "ﾃﾞｨｱﾎﾞﾛ「これからはおれの時代だッ！」";
                var_294 = "";
            }
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 16; ++cnt2) {
                var_300 = 0;
                yield func337();
            }
            if (var_2352 == 6) {
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
                if (var_2254 == 1) {
                    var_2254 = 0;
                    yield func508();
                }
                var_217 = 1;
                yield func019();
                return;
            }
            var_1584 = 0;
            var_1585 = 0;
            var_1587 = 0;
            var_1588 = 0;
            var_1589 = 0;
            var_1590 = 0;
            yield func625();
            var_1845 = 1;
            var_2353 = var_673;
            yield func556();
            var_2354 = 0;
            var_1584 = (var_83[var_673].Var1 - var_66 + 4) * 40;
            var_1585 = (var_83[var_673].Var2 - var_67 + 4) * 40;
            var_673 = var_2353;
            var_1845 = 0;
            if (var_2110 == 0) {
                var_293 = var_296;
                var_294 = var_297;
                var_296 = "しかし何も起こらなかった…";
                var_297 = "";
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    var_300 = 0;
                    yield func337();
                }
                var_2355 = 0;
                if (var_2254 == 1) {
                    var_2254 = 0;
                    yield func508();
                }
                var_217 = 1;
                yield func019();
                return;
            }
            yield func625();
            var_1845 = 1;
            var_2353 = var_673;
            yield func556();
            var_2354 = 0;
            var_1587 = (var_83[var_673].Var1 - var_66 + 4) * 40;
            var_1588 = (var_83[var_673].Var2 - var_67 + 4) * 40;
            var_673 = var_2353;
            var_1845 = 0;
            yield func625();
            var_1845 = 1;
            var_2353 = var_673;
            yield func556();
            var_2354 = 0;
            var_1589 = (var_83[var_673].Var1 - var_66 + 4) * 40;
            var_1590 = (var_83[var_673].Var2 - var_67 + 4) * 40;
            var_673 = var_2353;
            var_1845 = 0;
            DSPLAY(168);
            var_271 = 1;
            var_1586 = 1;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                var_300 = 0;
                yield func337();
                var_1586++;
            }
            var_271 = 0;
            var_1586 = 0;
            yield func331();
            var_293 = var_296;
            var_294 = var_297;
            var_296 = "マンガのキャラクターが現れた！";
            var_297 = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                var_300 = 0;
                yield func337();
                var_2355 = 0;
            }
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_2258 == 399) {
            yield func506();
            if (var_570 == 0) {
                var_1284 = 11;
            }
            if (var_570 == 1) {
                var_1284 = 1;
            }
            if (var_570 == 2) {
                var_1284 = 16;
            }
            if (var_570 == 3) {
                var_1284 = 29;
            }
            var_199 = 2;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "「ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ」！！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func108();
            var_1599 = 1;
            var_271 = 1;
            for (var cnt2 = 0; cnt2 < 30; ++cnt2) {
                yield func337();
                if (var_1599 == 3) {
                    var_389 = 2;
                    var_747 = 1;
                    var_211 = 0;
                    DSPLAY(105);
                }
                var_1599++;
            }
            var_1599 = 0;
            var_271 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508();
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337();
                }
            }
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "死に続ける能力が解除された！";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340();
            var_389 = 0;
            var_103 = 1;
            var_311 = 255;
            var_374 = 1;
            var_1601 = 1;
            var_271 = 1;
            var_501 = 1;
            gsel(19);
            color(255, 255, 255);
            boxf(0, 0, 340, 340);
            gsel(0);
            var_312 = 1;
            for (var cnt2 = 0; cnt2 < 51; ++cnt2) {
                yield func337();
                var_311 = var_311 - 5;
                var_1601 = var_1601 + 2;
            }
            var_312 = 0;
            yield func122();
            for (var cnt2 = 0; cnt2 < 100; ++cnt2) {
                yield func337();
                var_1601 = var_1601 + 2;
            }
            yield func532();
            return;
        }
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        var_293 = "しかし何も起こらなかった";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        var_234 = 0;
        var_220 = 0;
        var_217 = 1;
        yield func019();
        return;
    });
}