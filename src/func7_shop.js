// トニオさんの店 レストラン・トラサルディーの設定
function func706() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(706);
        var_281 = var_66 - 1;
        if (var_281 < 0) {
            var_281 = 0;
        }
        var_282 = var_66 + 1;
        if (var_282 > var_33) {
            var_282 = var_33;
        }
        var_283 = var_67 - 1;
        if (var_283 < 0) {
            var_283 = 0;
        }
        var_284 = var_67 + 1;
        if (var_284 > var_34) {
            var_284 = var_34;
        }
        var_3112 = 0;
        var_286 = 1;
        for (var cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_286].Var0 == 33) {
                var_3113 = var_83[var_286].Var1;
                var_3114 = var_83[var_286].Var2;
                if (var_71[var_3113][var_3114] >= 1 && var_71[var_3113][var_3114] == var_201) {
                    var_3112 = 1;
                    break;
                }
            }
            var_286 = var_286 + 1;
        }
        if (var_3112 == 1 && var_83[var_286].Var12 == 0 && var_83[var_286].Var13 == 0) {
            var_83[var_286].Var5 = 2;
            if (var_83[var_286].Var1 < var_66) {
                var_83[var_286].Var5 = 6;
            }
            if (var_83[var_286].Var1 > var_66) {
                var_83[var_286].Var5 = 4;
            }
            if (var_83[var_286].Var2 < var_67) {
                var_83[var_286].Var5 = 2;
            }
            if (var_83[var_286].Var2 > var_67) {
                var_83[var_286].Var5 = 8;
            }
            yield func094();
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "レストラン・トラサルディーへようこそ！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func136();
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337();
            }
            var_210 = 1;
        }
        return;
    });
}
function func707() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(707);
        var_243 = 0;
        var_1009 = 0;
        var_449 = 0;
        for (var cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_447 = 0;
            for (var cnt2 = 0; cnt2 < var_31; ++cnt2) {
                if (var_72[var_447][var_449] == 1 && var_77[var_447][var_449] > 0) {
                    var_3115 = var_77[var_447][var_449];
                    if (var_78[var_3115].Var11 == 0) {
                        var_232 = var_78[var_3115].Var0;
                        yield func492();
                        var_2476 = Math.floor(var_483 / 2);
                        var_482 = 0;
                        var_482 = (var_78[var_3115].Var3 + var_78[var_3115].Var4) * 50;
                        if (var_78[var_3115].Var0 != 800) {
                            var_482 = var_78[var_3115].Var7 * 100 + var_482;
                        }
                        if (var_78[var_3115].Var19 > 1) {
                            var_482 = var_78[var_3115].Var19 * 500 + var_482;
                        }
                        var_1009 = var_1009 + var_2476 + var_482;
                    }
                    if (var_78[var_3115].Var0 >= 800 && var_78[var_3115].Var0 < 900) {
                        var_484 = 1;
                        var_485 = var_78[var_3115].Var6;
                        for (var cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 0) {
                                var_232 = var_486[var_485][var_484][0];
                                yield func492();
                                var_2476 = Math.floor(var_483 / 2);
                                var_482 = 0;
                                var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
                                if (var_486[var_485][var_484][19] > 1) {
                                    var_482 = var_486[var_485][var_484][19] * 500 + var_482;
                                }
                                var_1009 = var_1009 + var_2476 + var_482;
                            }
                            var_484 = var_484 + 1;
                        }
                    }
                }
                var_447 = var_447 + 1;
            }
            var_449 = var_449 + 1;
        }
        var_480 = 1;
        var_481 = 0;
        for (var cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_480].Var11 == 1) {
                var_232 = var_233[var_480].Var0;
                yield func492();
                var_482 = 0;
                var_482 = (var_233[var_480].Var3 + var_233[var_480].Var4) * 50;
                if (var_233[var_480].Var0 != 800) {
                    var_482 = var_233[var_480].Var7 * 100 + var_482;
                }
                if (var_233[var_480].Var19 > 1) {
                    var_482 = var_233[var_480].Var19 * 500 + var_482;
                }
                var_481 = var_481 + var_483 + var_482;
            }
            if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
                var_484 = 1;
                var_485 = var_233[var_480].Var6;
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1) {
                        var_232 = var_486[var_485][var_484][0];
                        yield func492();
                        var_482 = 0;
                        var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
                        if (var_486[var_485][var_484][19] > 1) {
                            var_482 = var_486[var_485][var_484][19] * 500 + var_482;
                        }
                        var_481 = var_481 + var_483 + var_482;
                    }
                    var_484 = var_484 + 1;
                }
            }
            var_480 = var_480 + 1;
        }
        var_449 = 0;
        for (var cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_447 = 0;
            for (var cnt2 = 0; cnt2 < var_31; ++cnt2) {
                if (var_77[var_447][var_449] > 0 && var_72[var_447][var_449] == 0) {
                    var_3115 = var_77[var_447][var_449];
                    if (var_78[var_3115].Var11 == 1) {
                        var_232 = var_78[var_3115].Var0;
                        yield func492();
                        var_482 = 0;
                        var_482 = (var_78[var_3115].Var3 + var_78[var_3115].Var4) * 50;
                        if (var_78[var_3115].Var0 != 800) {
                            var_482 = var_78[var_3115].Var7 * 100 + var_482;
                        }
                        if (var_78[var_3115].Var19 > 1) {
                            var_482 = var_78[var_3115].Var19 * 500 + var_482;
                        }
                        var_481 = var_481 + var_483 + var_482;
                    }
                    if (var_78[var_3115].Var0 >= 800 && var_78[var_3115].Var0 < 900) {
                        var_484 = 1;
                        var_485 = var_78[var_3115].Var6;
                        for (var cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1) {
                                var_232 = var_486[var_485][var_484][0];
                                yield func492();
                                var_482 = 0;
                                var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
                                if (var_486[var_485][var_484][19] > 1) {
                                    var_482 = var_486[var_485][var_484][19] * 500 + var_482;
                                }
                                var_481 = var_481 + var_483 + var_482;
                            }
                            var_484 = var_484 + 1;
                        }
                    }
                }
                var_447 = var_447 + 1;
            }
            var_449 = var_449 + 1;
        }
        var_481 = var_481 + var_107;
        var_3116 = var_82[var_1000][var_1001];
        if (var_83[var_3116].Var12 == 1 || var_83[var_3116].Var13 == 1) {
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "・・・・・・・・";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (var cnt2 = 0; cnt2 < 6; ++cnt2) {
                yield func337();
            }
            var_217 = 1;
            yield func019();
            return;
        }
        if (var_1009 > 0) {
            yield func708();
            return;
        }
        if (var_481 > 0) {
            yield func709();
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
        var_293 = "レストラン・トラサルディーへようこそ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (var cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337();
        }
        var_217 = 1;
        yield func019();
        return;
    });
}
function func708() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(708);
        yield func094();
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        var_293 = "店内に置いたアイテムを";
        var_294 = "" + var_1009 + "G で引き取りマス";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (var cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337();
        }
        var_1202 = 1;
        var_3117 = 1;
        yield func712();
        return;
    });
}
function func709() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(709);
        yield func094();
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        var_293 = "お買い物金額の合計は";
        var_294 = "" + var_481 + "G になりマス";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (var cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337();
        }
        var_1202 = 1;
        var_3117 = 2;
        yield func710();
        return;
    });
}
function func710() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(710);
        var_3118 = 1;
        var_515 = 19;
        var_516 = 45;
        yield func711();
    });
}
function func711() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(711);
        yield func337();
        yield func080();
        if (var_259 == 1 && var_3118 == 1) {
            var_516 = var_516 + 19;
            var_3118 = 0;
            yield func337();
        }
        if (var_255 == 1 && var_3118 == 0) {
            var_516 = var_516 - 19;
            var_3118 = 1;
            yield func337();
        }
        if (var_242 == 1 || var_244 == 1) {
            if (var_3118 == 1) {
                yield func051();
                yield func716();
                return;
            }
            if (var_3118 == 0) {
                yield func051();
                yield func717();
                return;
            }
        }
        if (var_239 == 1) {
            yield func051();
            yield func717();
            return;
        }
        var_198 = 1;
        var_300 = 0;
        yield func711();
        return;
    });
}
function func712() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(712);
        var_3118 = 1;
        var_515 = 19;
        var_516 = 45;
        yield func713();
    });
}
function func713() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(713);
        yield func337();
        yield func080();
        if (var_259 == 1 && var_3118 == 1) {
            var_516 = var_516 + 19;
            var_3118 = 0;
            yield func337();
        }
        if (var_255 == 1 && var_3118 == 0) {
            var_516 = var_516 - 19;
            var_3118 = 1;
            yield func337();
        }
        if (var_242 == 1 || var_244 == 1) {
            if (var_3118 == 1) {
                yield func051();
                yield func715();
                return;
            }
            if (var_3118 == 0 && var_481 > 0) {
                yield func051();
                var_198 = 0;
                var_1202 = 0;
                for (var cnt3 = 0; cnt3 < 6; ++cnt3) {
                    yield func337();
                }
                yield func709();
                return;
            }
            if (var_3118 == 0) {
                yield func051();
                yield func717();
                return;
            }
        }
        if (var_239 == 1 && var_481 > 0) {
            yield func051();
            var_198 = 0;
            var_1202 = 0;
            for (var cnt2 = 0; cnt2 < 6; ++cnt2) {
                yield func337();
            }
            yield func709();
            return;
        }
        if (var_239 == 1) {
            yield func051();
            yield func717();
            return;
        }
        var_198 = 1;
        var_300 = 0;
        yield func713();
        return;
    });
}
function func714() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(714);
        color(0, 0, 0);
        gmode(4, null, null, 100);
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
        font("ＭＳ Ｐゴシック", 16, 1);
        color(255, 255, 255);
        pos(33, 47);
        if (var_3117 == 1) {
            mes("売る");
        }
        if (var_3117 == 2) {
            mes("買う");
        }
        mes("やめる");
        color(255, 255, 255);
        font("MS ゴシック", 16, 1);
        pos(var_515, var_516);
        mes(">");
        pos(var_515 + 1, var_516);
        mes(">");
        pos(var_515 + 2, var_516);
        mes(">");
        gmode(2);
        return;
    });
}
function func715() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(715);
        var_415 = var_415 + var_1009;
        if (var_415 > 999999) {
            var_415 = 999999;
        }
        var_1009 = 0;
        var_449 = 0;
        for (var cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_447 = 0;
            for (var cnt2 = 0; cnt2 < var_31; ++cnt2) {
                if (var_72[var_447][var_449] == 1 && var_77[var_447][var_449] > 0) {
                    var_3115 = var_77[var_447][var_449];
                    if (var_78[var_3115].Var0 > 1) {
                        var_78[var_3115].Var11 = 1;
                    }
                    if (var_78[var_3115].Var0 >= 800 && var_78[var_3115].Var0 < 900) {
                        var_484 = 1;
                        var_485 = var_78[var_3115].Var6;
                        for (var cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (var_486[var_485][var_484][0] > 1) {
                                var_486[var_485][var_484][11] = 1;
                            }
                            var_484 = var_484 + 1;
                        }
                    }
                }
                var_447 = var_447 + 1;
            }
            var_449 = var_449 + 1;
        }
        DSPLAY(139);
        yield func718();
        return;
    });
}
function func716() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(716);
        var_3119 = var_415;
        var_415 = var_415 - var_481;
        if (var_415 < 0) {
            var_415 = var_3119;
            yield func719();
            return;
        }
        var_481 = 0;
        yield func720();
        var_106 = 0;
        var_107 = 0;
        DSPLAY(139);
        yield func718();
        return;
    });
}
function func717() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(717);
        var_198 = 0;
        var_300 = 0;
        var_1202 = 0;
        var_217 = 1;
        yield func019();
        return;
    });
}
function func718() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(718);
        yield func094();
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        var_293 = "ありがとうございました";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        var_1202 = 0;
        for (var cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337();
        }
        if (var_481 > 0) {
            yield func709();
            return;
        }
        var_217 = 1;
        yield func019();
        return;
    });
}
function func719() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(719);
        yield func094();
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        var_293 = "お金が足りませんヨ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        var_1202 = 0;
        for (var cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337();
        }
        var_217 = 1;
        yield func019();
        return;
    });
}
function func720() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(720);
        var_480 = 1;
        for (var cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_480].Var11 == 1) {
                var_233[var_480].Var11 = 0;
            }
            if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
                var_484 = 1;
                var_485 = var_233[var_480].Var6;
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_486[var_485][var_484][11] == 1) {
                        var_486[var_485][var_484][11] = 0;
                    }
                    var_484 = var_484 + 1;
                }
            }
            var_480 = var_480 + 1;
        }
        var_449 = 0;
        for (var cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_447 = 0;
            for (var cnt2 = 0; cnt2 < var_31; ++cnt2) {
                if (var_77[var_447][var_449] > 0 && var_72[var_447][var_449] == 0) {
                    var_3115 = var_77[var_447][var_449];
                    if (var_78[var_3115].Var11 == 1) {
                        var_78[var_3115].Var11 = 0;
                    }
                    if (var_78[var_3115].Var0 >= 800 && var_78[var_3115].Var0 < 900) {
                        var_484 = 1;
                        var_485 = var_78[var_3115].Var6;
                        for (var cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (var_486[var_485][var_484][11] == 1) {
                                var_486[var_485][var_484][11] = 0;
                            }
                            var_484 = var_484 + 1;
                        }
                    }
                }
                var_447 = var_447 + 1;
            }
            var_449 = var_449 + 1;
        }
        return;
    });
}
function func721() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(721);
        var_480 = 1;
        var_1008 = 0;
        if (var_107 >= 1) {
            var_1008 = 1;
        }
        for (var cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_480].Var11 == 1) {
                var_1008 = var_1008 + 1;
            }
            if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
                var_484 = 1;
                var_485 = var_233[var_480].Var6;
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1) {
                        var_1008 = var_1008 + 1;
                    }
                    var_484 = var_484 + 1;
                }
            }
            var_480 = var_480 + 1;
        }
        var_449 = 0;
        for (var cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_447 = 0;
            for (var cnt2 = 0; cnt2 < var_31; ++cnt2) {
                if (var_77[var_447][var_449] > 0 && var_72[var_447][var_449] == 0) {
                    var_3115 = var_77[var_447][var_449];
                    if (var_78[var_3115].Var11 == 1) {
                        var_1008 = var_1008 + 1;
                    }
                    if (var_78[var_3115].Var0 >= 800 && var_78[var_3115].Var0 < 900) {
                        var_484 = 1;
                        var_485 = var_78[var_3115].Var6;
                        for (var cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1) {
                                var_1008 = var_1008 + 1;
                            }
                            var_484 = var_484 + 1;
                        }
                    }
                }
                var_447 = var_447 + 1;
            }
            var_449 = var_449 + 1;
        }
        return;
    });
}
function func722() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(722);
        yield func137();
        if (var_72[var_66][var_67] >= 1) {
            return;
        }
        if (var_85 == 1) {
            return;
        }
        yield func721();
        if (var_1008 == 0) {
            return;
        }
        var_1010 = 0;
        var_3120 = 1;
        for (var cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_3120].Var0 == 33) {
                var_83[var_3120].Var0 = 34;
                var_83[var_3120].Var12 = 0;
                var_83[var_3120].Var13 = 0;
                var_83[var_3120].Var31 = 1;
                var_1010 = 1;
            }
            if (var_83[var_3120].Var0 == 34) {
                var_83[var_3120].Var12 = 0;
                var_83[var_3120].Var13 = 0;
                var_1010 = 1;
            }
            var_3120 = var_3120 + 1;
        }
        if (var_1010 == 0) {
            return;
        }
        var_85 = 1;
        DSPLAY(150);
        yield func132();
        yield func094();
        var_293 = "";
        var_294 = "";
        var_295 = "";
        var_296 = "";
        var_297 = "";
        var_298 = "";
        var_299 = 0;
        var_293 = "ドロボーーー！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[3];
        var_26_x = var_26[3];
        var_27_x = var_27[3];
        yield func047();
        yield func340();
        yield func094();
        var_293 = var_296;
        var_294 = var_297;
        var_296 = "ただじゃあおきませンッ！";
        var_297 = "";
        var_25_x = var_25[3];
        var_26_x = var_26[3];
        var_27_x = var_27[3];
        yield func047();
        yield func050();
        var_198 = 1;
        var_300 = 0;
        for (var cnt1 = 0; cnt1 < 12; ++cnt1) {
            yield func556();
        }
        for (var cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337();
        }
        return;
    });
}