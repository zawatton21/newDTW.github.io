var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function func800() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(800);
        var_3186 = 10;
        var_3187 = 120;
        color(0, 0, 0);
        gmode(4, null, null, 100);
        pos(var_3186 - 3, 37);
        gcopy(12, 0, 0, var_3187 + 7, 53);
        color(255, 255, 255);
        line(var_3186, 39, var_3186 + var_3187, 39);
        line(var_3186, 86, var_3186 + var_3187, 86);
        line(var_3186 - 1, 40, var_3186 - 1, 84);
        line(var_3186 + var_3187 + 2, 40, var_3186 + var_3187 + 2, 84);
        pset(var_3186, 40);
        pset(var_3186 + var_3187 + 1, 40);
        pset(var_3186, 85);
        pset(var_3186 + var_3187 + 1, 85);
        font("ＭＳ ゴシック", 20, 1);
        color(255, 255, 255);
        pos(var_3186 + 10, 53);
        mes("" + var_3175);
        pos(var_3186 + 10 + 15, 53);
        mes("" + var_3174);
        pos(var_3186 + 10 + 30, 53);
        mes("" + var_3173);
        pos(var_3186 + 10 + 45, 53);
        mes("" + var_3172);
        pos(var_3186 + 10 + 60, 53);
        mes("" + var_3171);
        pos(var_3186 + 10 + 75, 53);
        mes("" + var_3170);
        font("ＭＳ Ｐゴシック", 16, 1);
        pos(var_3186 + 10 + 90, 55);
        mes("G");
        font("ＭＳ ゴシック", 20, 1);
        color(0, 255, 0);
        pos(var_3180, 55);
        mes("_");
        return;
    });
}
function func801() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(801);
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
        return;
    });
}


function func839() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(839);
        yield func337();
        yield func080();
        if (var_259 == 1 && var_546 == 1) {
            var_246 = var_246 + 19;
            var_546 = 0;
            DSPLAY(100);
            yield func337();
        }
        if (var_255 == 1 && var_546 == 0) {
            var_246 = var_246 - 19;
            var_546 = 1;
            DSPLAY(100);
            yield func337();
        }
        if (var_242 == 1 || var_244 == 1) {
            if (var_546 == 1) {
                DSPLAY(212);
                if (var_3208 == 1) {
                    var_3208 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func762();
                    return;
                }
                if (var_3209 == 1) {
                    var_3209 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func763();
                    return;
                }
                if (var_3150 == 1) {
                    var_3150 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func770();
                    return;
                }
                if (var_3150 == 2) {
                    var_3150 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func772();
                    return;
                }
                if (var_3151 == 1) {
                    var_3151 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func774();
                    return;
                }
                if (var_3151 == 2) {
                    var_3151 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func776();
                    return;
                }
                if (var_3152 == 1) {
                    var_3152 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func777();
                    return;
                }
                if (var_3163 == 1) {
                    var_3163 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func788();
                    return;
                }
                if (var_3163 == 2) {
                    var_3163 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func791();
                    return;
                }
                if (var_3163 == 3) {
                    var_3163 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func791();
                    return;
                }
                if (var_3126 == 1) {
                    var_3126 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func731();
                    return;
                }
                if (var_3132 == 1) {
                    var_3132 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func744();
                    return;
                }
                if (var_3134 == 1) {
                    var_3134 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func747();
                    return;
                }
                if (var_3127 == 1) {
                    var_3127 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func739();
                    return;
                }
                if (var_3136 == 1) {
                    var_3136 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func749();
                    return;
                }
                if (var_547 == 1) {
                    var_547 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func067();
                    return;
                }
                if (var_2494 == 1) {
                    var_2494 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func549();
                    return;
                }
                if (var_2495 == 1) {
                    var_3210 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func552();
                    return;
                }
                if (var_3198 == 1) {
                    var_3198 = 0;
                    var_548 = 0;
                    yield func825();
                    return;
                }
                if (var_3199 == 1) {
                    var_3199 = 0;
                    var_548 = 0;
                    yield func827();
                    return;
                }
                if (var_3200 == 1) {
                    var_3200 = 0;
                    var_548 = 0;
                    yield func829();
                    return;
                }
                if (var_3201 == 1) {
                    var_3201 = 0;
                    var_548 = 0;
                    yield func834();
                    return;
                }
                if (var_3203 == 1) {
                    var_3203 = 0;
                    var_548 = 0;
                    yield func836();
                    return;
                }
                if (var_3192 == 1) {
                    var_3192 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func806();
                    return;
                }
                if (var_3191 == 1) {
                    var_3191 = 0;
                    var_548 = 0;
                    yield func051();
                    var_1032 = var_1032 - var_3190;
                    var_415 = 0;
                    yield func807();
                    return;
                }
                if (var_3147 == 1) {
                    var_3147 = 0;
                    var_548 = 0;
                    yield func795();
                    return;
                }
                if (var_3193 == 1) {
                    var_3193 = 0;
                    var_548 = 0;
                    yield func810();
                    return;
                }
                if (var_3193 == 2) {
                    var_3193 = 0;
                    var_548 = 0;
                    yield func811();
                    return;
                }
                if (var_3195 == 1) {
                    var_3195 = 0;
                    var_548 = 0;
                    yield func814();
                    return;
                }
                if (var_3195 == 2) {
                    var_3195 = 0;
                    var_548 = 0;
                    yield func815();
                    return;
                }
                if (var_3131 == 1) {
                    var_3131 = 0;
                    var_548 = 0;
                    yield func742();
                    return;
                }
                if (var_3137 == 1) {
                    var_3137 = 0;
                    var_548 = 0;
                    yield func754();
                    return;
                }
                if (var_3156 == 1) {
                    var_3156 = 0;
                    var_548 = 0;
                    yield func779();
                    return;
                }
                if (var_3157 == 1) {
                    var_3157 = 0;
                    var_548 = 0;
                    yield func782();
                    return;
                }
                if (var_563 == 1) {
                    var_563 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func830();
                    return;
                }
            }
        }
        if (var_242 == 1 || var_244 == 1) {
            if (var_546 == 0) {
                DSPLAY(212);
                if (var_3208 == 1) {
                    var_3208 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    yield func051();
                    yield func009();
                    return;
                }
                if (var_3209 == 1) {
                    var_3209 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func764();
                    return;
                }
                if (var_3150 >= 1) {
                    var_3150 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    yield func051();
                    yield func009();
                    return;
                }
                if (var_3151 >= 1) {
                    var_3151 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    yield func051();
                    yield func009();
                    return;
                }
                if (var_3152 == 1) {
                    var_3152 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    yield func051();
                    yield func009();
                    return;
                }
                if (var_3163 == 1) {
                    var_3163 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func789();
                    return;
                }
                if (var_3163 == 2) {
                    var_3163 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func790();
                    return;
                }
                if (var_3163 == 3) {
                    var_3163 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    yield func051();
                    yield func009();
                    return;
                }
                if (var_3126 == 1) {
                    var_3126 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func732();
                    return;
                }
                if (var_3132 == 1) {
                    var_3132 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func745();
                    return;
                }
                if (var_3134 == 1) {
                    var_3134 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_3127 == 1) {
                    var_3127 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func740();
                    return;
                }
                if (var_3136 == 1) {
                    var_3136 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func751();
                    return;
                }
                if (var_547 == 1) {
                    var_547 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_2494 == 1) {
                    var_2494 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_2495 == 1) {
                    var_2495 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_3198 == 1) {
                    var_3198 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_3199 == 1) {
                    var_3199 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_3200 == 1) {
                    var_3200 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_3201 == 1) {
                    var_3201 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_3203 == 1) {
                    var_3203 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_3192 == 1) {
                    var_3192 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    var_1206 = 1;
                    yield func051();
                    yield func803();
                    return;
                }
                if (var_3191 == 1) {
                    var_3191 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    var_1206 = 1;
                    yield func051();
                    yield func803();
                    return;
                }
                if (var_3147 == 1) {
                    var_3147 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_3193 == 1) {
                    var_3193 = 0;
                    var_548 = 0;
                    yield func812();
                    return;
                }
                if (var_3193 == 2) {
                    var_3193 = 0;
                    var_548 = 0;
                    yield func812();
                    return;
                }
                if (var_3195 == 1) {
                    var_3195 = 0;
                    var_548 = 0;
                    yield func817();
                    return;
                }
                if (var_3195 == 2) {
                    var_3195 = 0;
                    var_548 = 0;
                    yield func817();
                    return;
                }
                if (var_3131 == 1) {
                    var_3131 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_3137 == 1) {
                    var_3137 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_3156 == 1) {
                    var_3156 = 0;
                    var_548 = 0;
                    yield func780();
                    return;
                }
                if (var_3157 == 1) {
                    var_3157 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009();
                    return;
                }
                if (var_563 == 1) {
                    var_563 = 0;
                    var_548 = 0;
                    yield func051();
                    yield func066();
                    return;
                }
            }
        }
        if (var_239 == 1) {
            DSPLAY(212);
            if (var_3208 == 1) {
                var_3208 = 0;
                var_548 = 0;
                var_198 = 0;
                yield func051();
                yield func009();
                return;
            }
            if (var_3209 == 1) {
                var_3209 = 0;
                var_548 = 0;
                yield func051();
                yield func764();
                return;
            }
            if (var_3150 >= 1) {
                var_3150 = 0;
                var_548 = 0;
                var_198 = 0;
                yield func051();
                yield func009();
                return;
            }
            if (var_3151 >= 1) {
                var_3151 = 0;
                var_548 = 0;
                var_198 = 0;
                yield func051();
                yield func009();
                return;
            }
            if (var_3152 == 1) {
                var_3152 = 0;
                var_548 = 0;
                var_198 = 0;
                yield func051();
                yield func009();
                return;
            }
            if (var_3163 == 1) {
                var_3163 = 0;
                var_548 = 0;
                yield func051();
                yield func789();
                return;
            }
            if (var_3163 == 2) {
                var_3163 = 0;
                var_548 = 0;
                yield func051();
                yield func790();
                return;
            }
            if (var_3163 == 3) {
                var_3163 = 0;
                var_548 = 0;
                var_198 = 0;
                yield func051();
                yield func009();
                return;
            }
            if (var_3126 == 1) {
                var_3126 = 0;
                var_548 = 0;
                yield func051();
                yield func732();
                return;
            }
            if (var_3132 == 1) {
                var_3132 = 0;
                var_548 = 0;
                yield func051();
                yield func745();
                return;
            }
            if (var_3127 == 1) {
                var_3127 = 0;
                var_548 = 0;
                yield func051();
                yield func740();
                return;
            }
            if (var_3134 == 1) {
                var_3134 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_3136 == 1) {
                var_3136 = 0;
                var_548 = 0;
                yield func051();
                yield func751();
                return;
            }
            if (var_547 == 1) {
                var_547 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_2494 == 1) {
                var_2494 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_2495 == 1) {
                var_2495 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_3198 == 1) {
                var_3198 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_3199 == 1) {
                var_3199 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_3200 == 1) {
                var_3200 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_3201 == 1) {
                var_3201 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_3203 == 1) {
                var_3203 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_3192 == 1) {
                var_3192 = 0;
                var_548 = 0;
                var_198 = 0;
                var_1206 = 1;
                yield func051();
                yield func803();
                return;
            }
            if (var_3191 == 1) {
                var_3191 = 0;
                var_548 = 0;
                var_198 = 0;
                var_1206 = 1;
                yield func051();
                yield func803();
                return;
            }
            if (var_3147 == 1) {
                var_3147 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_3193 == 1) {
                var_3193 = 0;
                var_548 = 0;
                yield func812();
                return;
            }
            if (var_3193 == 2) {
                var_3193 = 0;
                var_548 = 0;
                yield func812();
                return;
            }
            if (var_3195 == 1) {
                var_3195 = 0;
                var_548 = 0;
                yield func817();
                return;
            }
            if (var_3195 == 2) {
                var_3195 = 0;
                var_548 = 0;
                yield func817();
                return;
            }
            if (var_3131 == 1) {
                var_3131 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_3137 == 1) {
                var_3137 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_3156 == 1) {
                var_3156 = 0;
                var_548 = 0;
                yield func780();
                return;
            }
            if (var_3157 == 1) {
                var_3157 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009();
                return;
            }
            if (var_563 == 1) {
                var_563 = 0;
                var_548 = 0;
                yield func051();
                yield func066();
                return;
            }
        }
        if (var_198 == 1) {
            var_198 = 1;
            var_300 = 1;
        }
        yield func839();
        return;
    });
}
function func840() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(840);
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
        if (var_3192 == 0 && var_3147 == 0 && var_3136 == 0 && var_3163 != 2 && var_3163 != 3) {
            mes("はい");
            mes("いいえ");
        }
        if (var_3192 == 1) {
            mes("買う");
            mes("やめる");
        }
        if (var_3147 == 1 || var_3136 == 1) {
            mes("ﾌﾞﾝ殴る");
            mes("放っとく");
        }
        if (var_3163 >= 2) {
            mes("いただく");
            mes("断る");
        }
        color(255, 255, 255);
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
function func841() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(841);
        if (var_637 >= 1) {
            var_637 = 0;
            gsel(37, -1);
            screen_(0, 680, 680, 2);
            SetWindowLongA(hwnd, -8, var_15);
            if (var_640 == 0) {
                var_10 = 0;
                width(340, 340);
            }
            if (var_640 == 1) {
                var_640 = 0;
                var_10 = 1;
                width(680, 680);
            }
            gsel(0, 2);
            chgdisp();
        }
        onexit(0);
        var_3211 = 353;
        var_3212 = 50;
        var_3213 = var_3211;
        var_3214 = var_3212 + 44;
        var_3215 = var_3211;
        var_3216 = var_3214 + 44;
        var_3217 = var_3213 + 44;
        var_3218 = var_3214;
        var_3219 = var_3215 + 44;
        var_3220 = var_3216;
        var_3221 = var_3219 + 44;
        var_3222 = var_3220;
        var_3223 = var_3217 + 44;
        var_3224 = var_3218;
        var_3225 = var_3223 + 44;
        var_3226 = var_3224;
        var_3227 = var_3221 + 44;
        var_3228 = var_3222;
        var_3229 = var_3225;
        var_3230 = var_3226 - 44;
        var_3231 = var_3211;
        var_3232 = var_3216 + 60;
        var_3233 = 3;
        var_3234 = 2;
        var_3235 = var_31 - 3;
        var_3236 = var_32 - 4;
        var_3237 = var_31 - 2;
        var_3238 = var_32 - 3;
        var_3239 = var_3231 - 5;
        var_3240 = var_3232 - 2;
        var_3241 = 185;
        var_3242 = 135;
        var_3243 = var_3225 + 40 + 20;
        var_3244 = var_3216 + 60;
        var_869 = 1;
        yield func888();
        var_869 = 0;
        yield func890();
        yield func892();
        objsize(1);
        pos(800, 800);
        button("ダミー", func850);
        objsize(50);
        pos(var_3211 + 45, var_3212);
        combox(var_3245, 100, "部屋\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12");
        var_3246 = 0;
        var_3247 = 0;
        var_873 = 0;
        var_3248 = 0;
        var_3249 = 0;
        var_3250 = 0;
        var_3251 = 0;
        var_3252 = 0;
        objsize(135);
        pos(var_3229 + 44, var_3230);
        combox(var_3246, 100, var_890);
        pos(var_3225 + 44, var_3226);
        combox(var_873, 100, var_874);
        pos(var_3227 + 44, var_3228);
        combox(var_3249, 100, var_886);
        objsize(60);
        pos(var_3243, var_3244 + 28);
        button("読込", func868);
        pos(var_3243, var_3244 + 56);
        button("保存", func872);
        pos(var_3243, var_3244);
        button("実行", func871);
        objsize(100);
        pos(var_3243, var_3244 + 114);
        var_3253 = 0;
        combox(var_3253, 100, "フラグ変更\n未クリア(白)\nクリア済(黄)\n製作中(赤)\n完成(水色)");
        var_3254 = 0;
        var_3255 = 0;
        var_3256 = 0;
        var_3257 = 0;
        var_3258 = 0;
        var_3259 = 0;
        yield func846();
        objsize(60);
        pos(var_3243 + 70, var_3244 + 56);
        button("戻る", func849);
        pos(var_3243 + 70, var_3244 + 28);
        button("初期化", func865);
        var_3260 = 0;
        var_3261 = 0;
        var_3262 = 0;
        yield func856();
        yield func847();
        width(680, 340);
        var_92 = 2;
        var_3263 = var_92;
        var_3264 = 1;
        var_3265 = 1;
        var_3266 = 6;
        var_3245 = 1;
        var_3267 = 1;
        var_3268 = 0;
        var_3269 = 0;
        var_3270 = 1;
        var_3271 = 0;
        var_3272 = "";
        var_626 = 1;
        if (var_3273 == 1) {
            var_3274 = 1;
            yield func869();
            return;
        }
        if (var_3273 == 0) {
            yield func875();
        }
        yield func851();
        return;
    });
}
function func842() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(842);
        clrobj(9, 9);
        objsize(60);
        pos(680 - 76, var_3226 + 22);
        combox(var_3254, 100, "修正値\n+1\n+2\n+3\n+4\n+5\n+6\n+7\n+8\n+9\n+10\n呪い");
        return;
    });
}
function func843() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(843);
        clrobj(9, 9);
        objsize(60);
        pos(680 - 76, var_3226 + 22);
        combox(var_3255, 100, "回数\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10");
        return;
    });
}
function func844() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(844);
        clrobj(9, 9);
        objsize(60);
        pos(680 - 76, var_3226 + 22);
        combox(var_3256, 100, "金額\n100G\n200G\n300G\n400G\n500G\n600G\n700G\n800G\n900G");
        return;
    });
}
function func845() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(845);
        clrobj(9, 9);
        objsize(1);
        pos(800, 800);
        button("ダミー", func850);
        return;
    });
}
function func846() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(846);
        objsize(1);
        pos(800, 800);
        button("ダミー", func850);
        return;
    });
}
function func847() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(847);
        var_3275 = 0;
        objsize(1);
        pos(800, 800);
        button("ダミー", func850);
        return;
    });
}
function func848() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(848);
        clrobj(13, 13);
        var_3276 = "";
        var_3277 = 0;
        if (var_3278 == 79) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず生まれる\n生まれない";
        }
        if (var_3278 == 94) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先";
        }
        if (var_3278 == 119) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先";
        }
        if (var_3278 == 69) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先";
        }
        if (var_3278 == 160) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先";
        }
        if (var_3278 == 27) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先";
        }
        if (var_3278 == 78) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n掴み優先";
        }
        if (var_3278 == 93) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 7) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 141) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 56) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 136) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 48) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 95) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 15) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 80) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 21) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 121) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 155) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 151) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 126) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 40) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 41) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 42) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず射撃";
        }
        if (var_3278 == 47) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず引き寄せ";
        }
        if (var_3278 == 67) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず引き寄せ";
        }
        if (var_3278 == 157) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n必ず潜水攻撃";
        }
        if (var_3278 == 109) {
            var_3277 = 1;
            var_3276 = "ﾀﾞﾝｼﾞｮﾝと同じ\n透明\n透明ではない";
        }
        if (var_3277 == 1) {
            objsize(100);
            pos(680 - 116, var_3230 + 22);
            combox(var_3275, 100, var_3276);
        }
        if (var_3277 == 0) {
            objsize(1);
            pos(800, 800);
            button("ダミー", func850);
        }
        return;
    });
}
function func849() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(849);
        dialog("メニュー画面に戻りますか？", 2, "");
        if (stat == 7) {
            yield func851();
            return;
        }
        clrobj();
        if (var_10 == 0) {
            width(340, 340);
        }
        if (var_10 == 1) {
            width(680, 680);
        }
        var_626 = 0;
        var_3273 = 0;
        if (dirinfo(0) == var_30) {
            chdir("問題");
        }
        yield func883();
        return;
    });
}
function func850() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(850);
        yield func851();
        return;
    });
}
function func851() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(851);
        if (mousex > 10 && mousex < 330 && mousey > 10 && mousey < 330) {
            var_3264 = Math.floor((mousex - 10) / 40);
            var_3265 = Math.floor((mousey - 10) / 40);
        }
        else {
            var_3264 = 20;
            var_3265 = 20;
        }
        var_3279 = var_66 + var_3264 + 1;
        var_3280 = var_67 + var_3265 + 1;
        var_3281 = Math.floor((ginfo(10) - ginfo(12)) / 2);
        var_3282 = var_3281;
        var_3283 = ginfo(11) - 340 - var_3282;
        var_3284 = ginfo(4) + var_3281 + 10;
        var_3285 = ginfo(5) + var_3283 + 10;
        var_3286 = var_3284 + 320;
        var_3287 = var_3285 + 320;
        var_3288 = ginfo(4) + var_3281;
        var_3289 = ginfo(5) + var_3283;
        var_3290 = var_3288 + 340;
        var_3291 = var_3289 + 340;
        yield func080();
        if (var_254 == 1 && var_66 > 3) {
            var_199 = 4;
            var_66 = var_66 - 1;
            var_3279 = var_66 + var_3264 + 1;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func852();
            }
        }
        if (var_257 == 1 && var_66 < 49) {
            var_199 = 6;
            var_66 = var_66 + 1;
            var_3279 = var_66 + var_3264 + 1;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func852();
            }
        }
        if (var_255 == 1 && var_67 > 3) {
            var_199 = 8;
            var_67 = var_67 - 1;
            var_3280 = var_67 + var_3265 + 1;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func852();
            }
        }
        if (var_259 == 1 && var_67 < 30) {
            var_199 = 2;
            var_67 = var_67 + 1;
            var_3280 = var_67 + var_3265 + 1;
            for (var cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func852();
            }
        }
        if (ginfo(2) != (-1) && ginfo(0) > var_3288 && ginfo(0) < var_3290 && ginfo(1) > var_3289 && ginfo(1) < var_3291) {
            if (mousex >= 0 && mousex <= 10 && var_66 > 3) {
                var_199 = 4;
                var_66 = var_66 - 1;
                var_3279 = var_66 + var_3264 + 1;
                for (var cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func852();
                }
            }
            if (mousex >= 330 && mousex <= 340 && var_66 < 49) {
                var_199 = 6;
                var_66 = var_66 + 1;
                var_3279 = var_66 + var_3264 + 1;
                for (var cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func852();
                }
            }
            if (mousey >= 0 && mousey <= 10 && var_67 > 3) {
                var_199 = 8;
                var_67 = var_67 - 1;
                var_3280 = var_67 + var_3265 + 1;
                for (var cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func852();
                }
            }
            if (mousey >= 330 && mousey <= 340 && var_67 < 30) {
                var_199 = 2;
                var_67 = var_67 + 1;
                var_3280 = var_67 + var_3265 + 1;
                for (var cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func852();
                }
            }
        }
        var_235 = getkey(1);
        if (var_235 == 1) {
            yield func863();
            return;
        }
        var_235 = stick(null, 1);
        if (var_235 == 512) {
            yield func862();
            return;
        }
        if (var_3246 != var_3247) {
            var_3278 = var_3292[var_3246];
            var_3275 = 0;
            var_3293 = 0;
            yield func848();
            var_3247 = var_3246;
            var_3266 = 7;
            objsel(0);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_3275 != var_3293) {
            var_3293 = var_3275;
            var_3266 = 7;
            objsel(0);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_873 != var_3248) {
            var_3251 = 0;
            if (var_884[var_873] >= 100 && var_884[var_873] < 400) {
                var_3251 = 1;
            }
            if (var_884[var_873] >= 400 && var_884[var_873] < 500) {
                var_3251 = 2;
            }
            if (var_884[var_873] >= 800 && var_884[var_873] < 900) {
                var_3251 = 3;
            }
            if (var_884[var_873] == 1) {
                var_3251 = 4;
            }
            if (var_3252 != var_3251 && var_3251 == 0) {
                yield func845();
            }
            if (var_3252 != var_3251 && var_3251 == 1) {
                yield func842();
            }
            if (var_3252 != var_3251 && var_3251 == 2) {
                yield func843();
            }
            if (var_3252 != var_3251 && var_3251 == 3) {
                yield func843();
            }
            if (var_3252 != var_3251 && var_3251 == 4) {
                yield func844();
            }
            var_3252 = var_3251;
            var_3248 = var_873;
            if (var_884[var_873] != 0) {
                var_3266 = 8;
            }
            objsel(0);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_3254 != var_3257) {
            var_3257 = var_3254;
            var_3266 = 8;
            objsel(0);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_3255 != var_3258) {
            var_3258 = var_3255;
            var_3266 = 8;
            objsel(0);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_3256 != var_3259) {
            var_3259 = var_3256;
            var_3266 = 8;
            objsel(0);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_3249 != var_3250) {
            var_3250 = var_3249;
            var_3266 = 9;
            objsel(0);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_3245 != var_3267) {
            var_3267 = var_3245;
            var_3270 = var_3245;
            var_3266 = 0;
            objsel(0);
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            if (var_3270 == 0) {
                var_3270 = 1;
            }
        }
        if (var_3260 != var_3262) {
            var_3262 = var_3260;
            yield func857();
        }
        yield func852();
        yield func851();
        return;
    });
}
function func852() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(852);
        redraw(0);
        yield func855();
        yield func860();
        yield func861();
        yield func853();
        if (var_3294 != 0) {
            yield func867();
        }
        redraw(1);
        yield wait(1);
        return;
    });
}
function func853() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(853);
        gmode(2);
        font("ＭＳ Ｐゴシック", 12);
        color(236, 233, 216);
        boxf(340, 0, 680, 340);
        if (var_3279 <= var_31 && var_3280 <= var_32) {
            var_3295 = var_3279 - 5;
            var_3296 = var_3280 - 5;
            var_3297 = "x:" + var_3295;
            var_3298 = "y:" + var_3296;
            var_3272 = "";
            if (var_82[var_3279][var_3280] >= 1) {
                var_2501 = var_82[var_3279][var_3280];
                var_437 = var_83[var_2501].Var0;
                yield func626();
                var_3299 = var_891;
                var_3272 = var_3272 + "  " + var_3299;
            }
            if (var_65[var_3279][var_3280] == 1) {
                var_3272 = var_3272 + "  " + "開始地点";
            }
            if (var_77[var_3279][var_3280] >= 1) {
                var_2501 = var_77[var_3279][var_3280];
                var_232 = var_78[var_2501].Var0;
                var_2176 = 1;
                yield func492();
                var_2176 = 0;
                var_3299 = var_489;
                if (var_78[var_2501].Var4 >= 1 && var_78[var_2501].Var4 <= 10) {
                    var_3299 = var_3299 + "" + "+" + var_78[var_2501].Var4;
                }
                if (var_78[var_2501].Var4 == 11 || var_78[var_2501].Var12 == 1) {
                    var_3299 = var_3299 + "" + "[呪]";
                }
                if (var_78[var_2501].Var3 >= 1) {
                    var_3299 = var_3299 + "" + "(" + var_78[var_2501].Var3 + ")";
                }
                if (var_78[var_2501].Var7 >= 1) {
                    var_3299 = var_3299 + "" + "(" + var_78[var_2501].Var7 + ")";
                }
                if (var_78[var_2501].Var13 >= 1) {
                    var_3299 = var_3299 + " " + var_78[var_2501].Var13 + "G";
                }
                var_3272 = var_3272 + "  " + var_3299;
            }
            if (var_80[var_3279][var_3280] >= 1) {
                var_2501 = var_80[var_3279][var_3280];
                var_888 = var_81[var_2501][0];
                yield func554();
                var_3299 = var_889;
                var_3272 = var_3272 + "  " + var_3299;
            }
            if (var_73[var_3279][var_3280] == 1) {
                var_3272 = var_3272 + "  " + "階段";
            }
        }
        color(0, 0, 0);
        boxf(var_3239 + 10, var_3240 + var_3242 - 20, var_3239 + 80 + 10, var_3240 + var_3242 - 5);
        color(255, 255, 0);
        pos(var_3239 + 20, var_3240 + var_3242 - 18);
        mes("" + var_3297);
        pos(var_3239 + 20 + 35, var_3240 + var_3242 - 18);
        mes("" + var_3298);
        color(0, 0, 0);
        boxf(350, 10, 670, 30);
        color(255, 255, 255);
        pos(355, 15);
        mes("" + var_3272);
        color(80, 80, 80);
        boxf(var_3211, var_3212, var_3211 + 40, var_3212 + 40);
        boxf(var_3213, var_3214, var_3213 + 40, var_3214 + 40);
        boxf(var_3215, var_3216, var_3215 + 40, var_3216 + 40);
        boxf(var_3217, var_3218, var_3217 + 40, var_3218 + 40);
        boxf(var_3219, var_3220, var_3219 + 40, var_3220 + 40);
        boxf(var_3221, var_3222, var_3221 + 40, var_3222 + 40);
        boxf(var_3223, var_3224, var_3223 + 40, var_3224 + 40);
        boxf(var_3229, var_3230, var_3229 + 40, var_3230 + 40);
        boxf(var_3225, var_3226, var_3225 + 40, var_3226 + 40);
        boxf(var_3227, var_3228, var_3227 + 40, var_3228 + 40);
        pos(var_3211, var_3212);
        gcopy(5, 0, var_3263 * 40, 40, 40);
        pos(var_3213, var_3214);
        gcopy(5, 120, var_3263 * 40, 40, 40);
        pos(var_3215, var_3216);
        gcopy(5, 240, var_3263 * 40, 40, 40);
        pos(var_3217, var_3218);
        gcopy(5, 1520, var_3263 * 40, 40, 40);
        pos(var_3219, var_3220);
        gcopy(3, 280, 120, 40, 40);
        pos(var_3221, var_3222);
        gcopy(5, 1200, var_3263 * 40, 40, 40);
        pos(var_3223, var_3224);
        gcopy(3, 40, 0, 40, 40);
        pos(var_3229, var_3230);
        var_1642 = 1;
        var_83[0].Var0 = var_3292[var_3246];
        var_83[0].Var5 = 2;
        var_1641 = 0;
        var_1640 = 2;
        yield func567();
        var_1642 = 0;
        gmode(2);
        pos(var_3225, var_3226);
        var_78[0].Var0 = var_884[var_873];
        var_232 = var_78[0].Var0;
        yield func397();
        gmode(2);
        pos(var_3227, var_3228);
        var_888 = var_3300[var_3249];
        yield func539();
        gmode(2);
        font("ＭＳ Ｐゴシック", 11);
        color(255, 255, 255);
        var_3301 = var_3245;
        if (var_3301 == 0) {
            var_3301 = 1;
        }
        if (var_3301 < 10) {
            pos(var_3211 + 3, var_3212 + 25);
            mes("部屋" + " " + var_3301);
        }
        if (var_3301 >= 10) {
            pos(var_3211 + 3, var_3212 + 25);
            mes("部屋" + "" + var_3301);
        }
        pos(var_3213 + 3, var_3214 + 25);
        mes("通路");
        pos(var_3215 + 3, var_3216 + 25);
        mes("壁");
        pos(var_3211, var_3212);
        if (var_3266 == 0) {
            gcopy(3, 240, 120, 40, 40);
        }
        else {
            gcopy(3, 160, 120, 40, 40);
        }
        pos(var_3213, var_3214);
        if (var_3266 == 1) {
            gcopy(3, 240, 120, 40, 40);
        }
        else {
            gcopy(3, 160, 120, 40, 40);
        }
        pos(var_3215, var_3216);
        if (var_3266 == 2) {
            gcopy(3, 240, 120, 40, 40);
        }
        else {
            gcopy(3, 160, 120, 40, 40);
        }
        pos(var_3217, var_3218);
        if (var_3266 == 3) {
            gcopy(3, 240, 120, 40, 40);
        }
        else {
            gcopy(3, 160, 120, 40, 40);
        }
        pos(var_3219, var_3220);
        if (var_3266 == 4) {
            gcopy(3, 240, 120, 40, 40);
        }
        else {
            gcopy(3, 160, 120, 40, 40);
        }
        pos(var_3221, var_3222);
        if (var_3266 == 5) {
            gcopy(3, 240, 120, 40, 40);
        }
        else {
            gcopy(3, 160, 120, 40, 40);
        }
        pos(var_3223, var_3224);
        if (var_3266 == 6) {
            gcopy(3, 240, 120, 40, 40);
        }
        else {
            gcopy(3, 160, 120, 40, 40);
        }
        pos(var_3229, var_3230);
        if (var_3266 == 7) {
            gcopy(3, 240, 120, 40, 40);
        }
        else {
            gcopy(3, 160, 120, 40, 40);
        }
        pos(var_3225, var_3226);
        if (var_3266 == 8) {
            gcopy(3, 240, 120, 40, 40);
        }
        else {
            gcopy(3, 160, 120, 40, 40);
        }
        pos(var_3227, var_3228);
        if (var_3266 == 9) {
            gcopy(3, 240, 120, 40, 40);
        }
        else {
            gcopy(3, 160, 120, 40, 40);
        }
        color(255, 255, 255);
        line(var_3211 - 5, var_3212 - 10, 673, var_3212 - 10);
        line(var_3211 - 5, var_3212 - 10, var_3211 - 5, var_3216 + 48);
        color(100, 100, 100);
        line(var_3211 - 5, var_3216 + 48, 673, var_3216 + 48);
        line(var_3211 - 5, var_3216 + 48 + 1, 673, var_3216 + 48 + 1);
        line(673, var_3212 - 10, 673, var_3216 + 48);
        line(673 - 1, var_3212 - 10, 673 - 1, var_3216 + 48);
        color(0, 0, 0);
        boxf(0, 0, 340, 10);
        boxf(0, 330, 340, 340);
        boxf(0, 0, 10, 340);
        boxf(330, 0, 340, 340);
        yield func854();
        return;
    });
}
function func854() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(854);
        color(255, 255, 255);
        line(var_3239, var_3240, var_3239 + var_3241, var_3240);
        line(var_3239, var_3240, var_3239, var_3240 + var_3242);
        color(100, 100, 100);
        line(var_3239, var_3240 + var_3242, var_3239 + var_3241, var_3240 + var_3242);
        line(var_3239, var_3240 + var_3242 + 1, var_3239 + var_3241, var_3240 + var_3242 + 1);
        line(var_3239 + var_3241, var_3240, var_3239 + var_3241, var_3240 + var_3242);
        line(var_3239 + var_3241 - 1, var_3240, var_3239 + var_3241 - 1, var_3240 + var_3242);
        var_1149 = 4;
        var_449 = 2;
        var_3302 = 1;
        for (var cnt1 = 0; cnt1 < var_3238; ++cnt1) {
            var_3303 = 4;
            var_447 = 2;
            var_3304 = 1;
            for (var cnt2 = 0; cnt2 < var_3237; ++cnt2) {
                if (var_71[var_3303][var_1149] == 0) {
                    color(0, 0, 0);
                    boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3233, var_449 * var_3233 + var_3232 + var_3233);
                }
                if (var_3303 == 4 || var_1149 == 4 || var_3304 == var_3237 || var_3302 == var_3238) {
                    color(130, 130, 130);
                    boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3233, var_449 * var_3233 + var_3232 + var_3233);
                }
                if (var_71[var_3303][var_1149] == 13) {
                    color(0, 0, 0);
                    boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3233, var_449 * var_3233 + var_3232 + var_3233);
                }
                if (var_71[var_3303][var_1149] == 14 || var_71[var_3303][var_1149] == 21 || var_71[var_3303][var_1149] == 22 || var_71[var_3303][var_1149] == 23 || var_71[var_3303][var_1149] == 24) {
                    color(0, 0, 255);
                    boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3233, var_449 * var_3233 + var_3232 + var_3233);
                }
                if (var_71[var_3303][var_1149] > 0 && var_71[var_3303][var_1149] <= 12) {
                    color(0, 0, 255);
                    boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3233, var_449 * var_3233 + var_3232 + var_3233);
                }
                if (var_80[var_3303][var_1149] >= 1) {
                    color(255, 0, 255);
                    boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3234, var_449 * var_3233 + var_3232 + var_3234);
                }
                if (var_77[var_3303][var_1149] >= 1) {
                    color(0, 255, 255);
                    boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3234, var_449 * var_3233 + var_3232 + var_3234);
                }
                if (var_73[var_3303][var_1149] == 1) {
                    color(0, 255, 255);
                    boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3233, var_449 * var_3233 + var_3232 + var_3233);
                    color(0, 0, 255);
                    pset(var_447 * var_3233 + var_3231 + 1, var_449 * var_3233 + var_3232 + 1);
                }
                if (var_82[var_3303][var_1149] >= 1) {
                    color(255, 0, 0);
                    boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3234, var_449 * var_3233 + var_3232 + var_3234);
                }
                if (var_65[var_3303][var_1149] == 1) {
                    color(255, 255, 255);
                    boxf(var_447 * var_3233 + var_3231, var_449 * var_3233 + var_3232, var_447 * var_3233 + var_3231 + var_3234, var_449 * var_3233 + var_3232 + var_3234);
                }
                var_447++;
                var_3303++;
                var_3304++;
            }
            var_449++;
            var_1149++;
            var_3302++;
        }
        color(255, 255, 0);
        line((var_66 - 1) * var_3233 + var_3231 - 1, (var_67 - 1) * var_3233 + var_3232, (var_66 + 7) * var_3233 + var_3231, (var_67 - 1) * var_3233 + var_3232);
        line((var_66 - 1) * var_3233 + var_3231, (var_67 - 1) * var_3233 + var_3232, (var_66 - 1) * var_3233 + var_3231, (var_67 + 7) * var_3233 + var_3232);
        line((var_66 + 7) * var_3233 + var_3231, (var_67 - 1) * var_3233 + var_3232, (var_66 + 7) * var_3233 + var_3231, (var_67 + 7) * var_3233 + var_3232);
        line((var_66 - 1) * var_3233 + var_3231, (var_67 + 7) * var_3233 + var_3232, (var_66 + 7) * var_3233 + var_3231, (var_67 + 7) * var_3233 + var_3232);
        return;
    });
}
function func855() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(855);
        gmode(2);
        var_449 = var_67;
        var_763 = -1;
        if (var_449 < 0) {
            var_449 = 0;
        }
        for (var cnt1 = 0; cnt1 < 11; ++cnt1) {
            var_447 = var_66;
            var_764 = -1;
            if (var_447 < 0) {
                var_447 = 0;
            }
            for (var cnt2 = 0; cnt2 < 11; ++cnt2) {
                if (var_447 < 5 || var_447 > 56 || var_449 < 5 || var_449 > 37) {
                    var_92 = 6;
                }
                else {
                    var_92 = var_3263;
                }
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
                var_1145 = 0;
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
                var_1150 = var_1150 + 10;
                var_1151 = var_1151 + 10;
                pos(var_1150, var_1151);
                if (var_71[var_447][var_449] >= 1 && var_71[var_447][var_449] <= 12) {
                    gcopy(5, 0, var_92 * 40, 40, 40);
                    pos(var_1150 + 3, var_1151 + 30);
                    font("ＭＳ Ｐゴシック", 11);
                    color(155, 155, 155);
                    mes(var_71[var_447][var_449]);
                }
                if (var_73[var_447][var_449] == 1) {
                    gcopy(5, 0, var_92 * 40, 40, 40);
                }
                if (var_71[var_447][var_449] == 14 || var_71[var_447][var_449] == 21 || var_71[var_447][var_449] == 22 || var_71[var_447][var_449] == 23 || var_71[var_447][var_449] == 24) {
                    gcopy(5, 120, var_92 * 40, 40, 40);
                }
                if (var_71[var_447][var_449] == 0) {
                    if (var_87[var_447][var_449] <= 5) {
                        gcopy(5, 240, var_92 * 40, 40, 40);
                    }
                    if (var_87[var_447][var_449] == 6 || var_87[var_447][var_449] == 7) {
                        gcopy(5, 280, var_92 * 40, 40, 40);
                    }
                    if (var_87[var_447][var_449] == 8 || var_87[var_447][var_449] == 9) {
                        gcopy(5, 320, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_1146][var_1148] != 0 && var_71[var_1146][var_1148] <= 24 && var_71[var_1146][var_449] == 0 && var_71[var_447][var_1148] == 0) {
                        gcopy(5, 760, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_1147][var_1148] != 0 && var_71[var_1147][var_1148] <= 24 && var_71[var_1147][var_449] == 0 && var_71[var_447][var_1148] == 0) {
                        gcopy(5, 800, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_1146][var_1149] != 0 && var_71[var_1146][var_1149] <= 24 && var_71[var_447][var_1149] == 0 && var_71[var_1146][var_449] == 0) {
                        gcopy(5, 840, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_1147][var_1149] != 0 && var_71[var_1147][var_1149] <= 24 && var_71[var_447][var_1149] == 0 && var_71[var_1147][var_449] == 0) {
                        gcopy(5, 880, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24 && var_71[var_447][var_1149] == 0 && var_71[var_447][var_1148] == 0) {
                        gcopy(5, 520, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1149] == 0 && var_71[var_447][var_1148] == 0) {
                        gcopy(5, 560, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_1146][var_449] == 0 && var_71[var_1147][var_449] == 0) {
                        gcopy(5, 480, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1146][var_449] == 0 && var_71[var_1147][var_449] == 0) {
                        if (var_87[var_447][var_449] <= 3) {
                            gcopy(5, 360, var_92 * 40, 40, 40);
                        }
                        if (var_87[var_447][var_449] == 4 || var_87[var_447][var_449] == 5) {
                            gcopy(5, 400, var_92 * 40, 40, 40);
                        }
                        if (var_87[var_447][var_449] == 6 || var_87[var_447][var_449] == 7) {
                            gcopy(5, 440, var_92 * 40, 40, 40);
                        }
                        if (var_87[var_447][var_449] == 8 || var_87[var_447][var_449] == 9) {
                            if (var_1153 == 0 || var_1153 == 1) {
                                gcopy(5, 1240, var_92 * 40, 40, 40);
                            }
                            if (var_1153 == 2 || var_1153 == 3) {
                                gcopy(5, 1280, var_92 * 40, 40, 40);
                            }
                            if (var_1153 == 4 || var_1153 == 5) {
                                gcopy(5, 1320, var_92 * 40, 40, 40);
                            }
                            if (var_1153 == 6 || var_1153 == 7) {
                                gcopy(5, 1360, var_92 * 40, 40, 40);
                            }
                        }
                    }
                    if (var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_447][var_1149] == 0 && var_71[var_1147][var_449] == 0) {
                        gcopy(5, 600, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_447][var_1149] == 0 && var_71[var_1146][var_449] == 0) {
                        gcopy(5, 640, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24 && var_71[var_447][var_1148] == 0 && var_71[var_1147][var_449] == 0) {
                        gcopy(5, 680, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1148] == 0 && var_71[var_1146][var_449] == 0) {
                        gcopy(5, 720, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1149] == 0) {
                        gcopy(5, 1000, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24 && var_71[var_447][var_1148] == 0) {
                        gcopy(5, 1040, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_1147][var_449] == 0) {
                        gcopy(5, 1080, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_1146][var_449] == 0) {
                        gcopy(5, 1120, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1149] != 0 && var_71[var_447][var_1149] <= 24 && var_71[var_1147][var_449] != 0 && var_71[var_1147][var_449] <= 24 && var_71[var_447][var_1148] != 0 && var_71[var_447][var_1148] <= 24 && var_71[var_1146][var_449] != 0 && var_71[var_1146][var_449] <= 24) {
                        gcopy(5, 1160, var_92 * 40, 40, 40);
                    }
                }
                if (var_71[var_447][var_449] == 13) {
                    if (var_1153 == 0 || var_1153 == 1 || var_1153 == 2 || var_1153 == 3) {
                        gcopy(5, 1520, var_92 * 40, 40, 40);
                    }
                    if (var_1153 == 4 || var_1153 == 5 || var_1153 == 6 || var_1153 == 7) {
                        gcopy(5, 1560, var_92 * 40, 40, 40);
                    }
                    if (var_1153 == 8 || var_1153 == 9 || var_1153 == 10 || var_1153 == 11) {
                        gcopy(5, 1600, var_92 * 40, 40, 40);
                    }
                    if (var_71[var_447][var_1148] != 13) {
                        if (var_71[var_1146][var_449] != 13 && var_71[var_1147][var_449] != 13) {
                            pos(var_1150 + 8, var_1151);
                            gcopy(5, 1400 + 8, var_92 * 40, 24, 4);
                        }
                        if (var_71[var_1146][var_449] != 13 && var_71[var_1147][var_449] == 13) {
                            pos(var_1150 + 8, var_1151);
                            gcopy(5, 1400 + 8, var_92 * 40, 32, 4);
                        }
                        if (var_71[var_1146][var_449] == 13 && var_71[var_1147][var_449] != 13) {
                            pos(var_1150, var_1151);
                            gcopy(5, 1400, var_92 * 40, 32, 4);
                        }
                        if (var_71[var_1146][var_449] == 13 && var_71[var_1147][var_449] == 13) {
                            pos(var_1150, var_1151);
                            gcopy(5, 1400, var_92 * 40, 40, 4);
                        }
                    }
                    if (var_71[var_447][var_1149] != 13) {
                        if (var_71[var_1146][var_449] != 13 && var_71[var_1147][var_449] != 13) {
                            pos(var_1150 + 8, var_1151 + 36);
                            gcopy(5, 1400 + 8, var_92 * 40 + 36, 24, 4);
                        }
                        if (var_71[var_1146][var_449] != 13 && var_71[var_1147][var_449] == 13) {
                            pos(var_1150 + 8, var_1151 + 36);
                            gcopy(5, 1400 + 8, var_92 * 40 + 36, 32, 4);
                        }
                        if (var_71[var_1146][var_449] == 13 && var_71[var_1147][var_449] != 13) {
                            pos(var_1150, var_1151 + 36);
                            gcopy(5, 1400, var_92 * 40 + 36, 32, 4);
                        }
                        if (var_71[var_1146][var_449] == 13 && var_71[var_1147][var_449] == 13) {
                            pos(var_1150, var_1151 + 36);
                            gcopy(5, 1400, var_92 * 40 + 36, 40, 4);
                        }
                    }
                    if (var_71[var_1146][var_449] != 13) {
                        if (var_71[var_447][var_1149] != 13 && var_71[var_447][var_1148] != 13) {
                            pos(var_1150, var_1151 + 8);
                            gcopy(5, 1440, var_92 * 40 + 8, 4, 24);
                        }
                        if (var_71[var_447][var_1149] != 13 && var_71[var_447][var_1148] == 13) {
                            pos(var_1150, var_1151);
                            gcopy(5, 1440, var_92 * 40, 4, 32);
                        }
                        if (var_71[var_447][var_1149] == 13 && var_71[var_447][var_1148] != 13) {
                            pos(var_1150, var_1151 + 8);
                            gcopy(5, 1440, var_92 * 40 + 8, 4, 32);
                        }
                        if (var_71[var_447][var_1149] == 13 && var_71[var_447][var_1148] == 13) {
                            pos(var_1150, var_1151);
                            gcopy(5, 1440, var_92 * 40, 4, 40);
                        }
                    }
                    if (var_71[var_1147][var_449] != 13) {
                        if (var_71[var_447][var_1149] != 13 && var_71[var_447][var_1148] != 13) {
                            pos(var_1150 + 36, var_1151 + 8);
                            gcopy(5, 1440 + 36, var_92 * 40 + 8, 4, 24);
                        }
                        if (var_71[var_447][var_1149] != 13 && var_71[var_447][var_1148] == 13) {
                            pos(var_1150 + 36, var_1151);
                            gcopy(5, 1440 + 36, var_92 * 40, 4, 32);
                        }
                        if (var_71[var_447][var_1149] == 13 && var_71[var_447][var_1148] != 13) {
                            pos(var_1150 + 36, var_1151 + 8);
                            gcopy(5, 1440 + 36, var_92 * 40 + 8, 4, 32);
                        }
                        if (var_71[var_447][var_1149] == 13 && var_71[var_447][var_1148] == 13) {
                            pos(var_1150 + 36, var_1151);
                            gcopy(5, 1440 + 36, var_92 * 40, 4, 40);
                        }
                    }
                    if (var_71[var_447][var_1148] != 13 && var_71[var_1146][var_449] != 13) {
                        pos(var_1150, var_1151);
                        gcopy(5, 1480, var_92 * 40, 8, 8);
                    }
                    if (var_71[var_447][var_1149] != 13 && var_71[var_1146][var_449] != 13) {
                        pos(var_1150, var_1151 + 32);
                        gcopy(5, 1480, var_92 * 40 + 32, 8, 8);
                    }
                    if (var_71[var_447][var_1148] != 13 && var_71[var_1147][var_449] != 13) {
                        pos(var_1150 + 32, var_1151);
                        gcopy(5, 1480 + 32, var_92 * 40, 8, 8);
                    }
                    if (var_71[var_447][var_1149] != 13 && var_71[var_1147][var_449] != 13) {
                        pos(var_1150 + 32, var_1151 + 32);
                        gcopy(5, 1480 + 32, var_92 * 40 + 32, 8, 8);
                    }
                    if (var_71[var_447][var_1148] == 13 && var_71[var_1146][var_449] == 13 && var_71[var_1146][var_1148] != 13) {
                        pos(var_1150, var_1151);
                        gcopy(5, 1480 + 16, var_92 * 40 + 16, 4, 4);
                    }
                    if (var_71[var_447][var_1148] == 13 && var_71[var_1147][var_449] == 13 && var_71[var_1147][var_1148] != 13) {
                        pos(var_1150 + 37, var_1151);
                        gcopy(5, 1480 + 21, var_92 * 40 + 16, 4, 4);
                    }
                    if (var_71[var_447][var_1149] == 13 && var_71[var_1147][var_449] == 13 && var_71[var_1147][var_1149] != 13) {
                        pos(var_1150 - 1, var_1151 + 37);
                        gcopy(5, 1480 + 15, var_92 * 40 + 22, 4, 4);
                    }
                    if (var_71[var_447][var_1149] == 13 && var_71[var_1147][var_449] == 13 && var_71[var_1147][var_1149] != 13) {
                        pos(var_1150 + 37, var_1151 + 37);
                        gcopy(5, 1480 + 21, var_92 * 40 + 22, 4, 4);
                    }
                }
                if (var_71[var_447][var_449] >= 21 && var_71[var_447][var_449] <= 24) {
                    pos(var_1150 + 3, var_1151 + 20);
                    font("ＭＳ Ｐゴシック", 11);
                    color(155, 155, 155);
                    if (var_71[var_447][var_449] == 21) {
                        mes("上出口");
                    }
                    if (var_71[var_447][var_449] == 22) {
                        mes("下出口");
                    }
                    if (var_71[var_447][var_449] == 23) {
                        mes("左出口");
                    }
                    if (var_71[var_447][var_449] == 24) {
                        mes("右出口");
                    }
                }
                var_764 = var_764 + 1;
                var_447 = var_447 + 1;
            }
            var_763 = var_763 + 1;
            var_449 = var_449 + 1;
        }
        yield func859();
        return;
    });
}
function func856() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(856);
        objsize(100);
        pos(var_3243, var_3244 + 86);
        combox(var_3260, 100, "茶色迷宮\n青色迷宮\n黄色迷宮\n茶色洞窟\n青色洞窟\n黄色洞窟\n溶岩洞窟\n霧の館\n虹村屋敷\n吉良屋敷\nポンペイ\n下水道\n森(明)\n浜辺(明)\n砂漠(明)\n水の都(明)");
        return;
    });
}
function func857() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(857);
        yield func858();
        var_92 = var_3261;
        var_3263 = var_92;
        objsel(0);
        yield func852();
        return;
    });
}
function func858() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(858);
        if (var_3260 == 0) {
            var_3261 = 2;
        }
        if (var_3260 == 1) {
            var_3261 = 6;
        }
        if (var_3260 == 2) {
            var_3261 = 9;
        }
        if (var_3260 == 3) {
            var_3261 = 5;
        }
        if (var_3260 == 4) {
            var_3261 = 4;
        }
        if (var_3260 == 5) {
            var_3261 = 24;
        }
        if (var_3260 == 6) {
            var_3261 = 12;
        }
        if (var_3260 == 7) {
            var_3261 = 13;
        }
        if (var_3260 == 8) {
            var_3261 = 8;
        }
        if (var_3260 == 9) {
            var_3261 = 14;
        }
        if (var_3260 == 10) {
            var_3261 = 18;
        }
        if (var_3260 == 11) {
            var_3261 = 3;
        }
        if (var_3260 == 12) {
            var_3261 = 19;
        }
        if (var_3260 == 13) {
            var_3261 = 11;
        }
        if (var_3260 == 14) {
            var_3261 = 23;
        }
        if (var_3260 == 15) {
            var_3261 = 15;
        }
        return;
    });
}
function func859() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(859);
        var_449 = var_67;
        for (var cnt1 = 0; cnt1 < 11; ++cnt1) {
            var_447 = var_66;
            for (var cnt2 = 0; cnt2 < 11; ++cnt2) {
                pos((var_447 - var_66 - 1) * 40 + 10, (var_449 - var_67 - 1) * 40 + 10);
                gmode(2);
                if (var_73[var_447][var_449] == 1) {
                    gcopy(5, 1200, var_92 * 40, 40, 40);
                }
                if (var_77[var_447][var_449] != 0) {
                    var_3305 = var_77[var_447][var_449];
                    var_232 = var_78[var_3305].Var0;
                    yield func397();
                }
                if (var_80[var_447][var_449] != 0) {
                    var_3306 = var_80[var_447][var_449];
                    var_888 = var_81[var_3306][0];
                    yield func539();
                }
                if (var_65[var_447][var_449] == 1) {
                    gcopy(3, 40, 0, 40, 40);
                }
                if (var_82[var_447][var_449] != 0) {
                    var_1642 = 1;
                    var_3307 = var_82[var_447][var_449];
                    var_83[0].Var0 = var_83[var_3307].Var0;
                    var_1641 = 0;
                    var_83[0].Var5 = 2;
                    var_1640 = 2;
                    yield func567();
                    var_1642 = 0;
                }
                var_447 = var_447 + 1;
            }
            var_449 = var_449 + 1;
        }
        return;
    });
}
function func860() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(860);
        color(155, 155, 155);
        var_3308 = 0;
        var_3309 = 340;
        var_3310 = 10;
        var_3311 = 10;
        for (var cnt1 = 0; cnt1 < 9; ++cnt1) {
            line(var_3308, var_3310, var_3309, var_3311);
            var_3310 = var_3310 + 40;
            var_3311 = var_3311 + 40;
        }
        var_3308 = 10;
        var_3309 = 10;
        var_3310 = 0;
        var_3311 = 340;
        for (var cnt1 = 0; cnt1 < 9; ++cnt1) {
            line(var_3308, var_3310, var_3309, var_3311);
            var_3308 = var_3308 + 40;
            var_3309 = var_3309 + 40;
        }
        return;
    });
}
function func861() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(861);
        gmode(2);
        pos(var_3264 * 40 + 10, var_3265 * 40 + 10);
        gcopy(3, 240, 120, 40, 40);
        pos(mousex - 3, mousey - 3);
        if (var_3266 == 0) {
            gcopy(5, 0, var_3263 * 40, 40, 40);
        }
        if (var_3266 == 1) {
            gcopy(5, 120, var_3263 * 40, 40, 40);
        }
        if (var_3266 == 2) {
            gcopy(5, 240, var_3263 * 40, 40, 40);
        }
        if (var_3266 == 3) {
            gcopy(5, 1520, var_3263 * 40, 40, 40);
        }
        if (var_3266 == 4) {
            gcopy(3, 280, 120, 40, 40);
        }
        if (var_3266 == 5) {
            gcopy(5, 1200, var_3263 * 40, 40, 40);
        }
        if (var_3266 == 6) {
            gcopy(3, 40, 0, 40, 40);
        }
        if (var_3266 == 7) {
            var_1642 = 1;
            var_83[0].Var0 = var_3292[var_3246];
            var_83[0].Var5 = 2;
            var_1641 = 0;
            var_3312 = var_3292[var_3246];
            var_1640 = 2;
            yield func567();
            var_1642 = 0;
        }
        if (var_3266 == 8) {
            var_78[0].Var0 = var_884[var_873];
            var_232 = var_78[0].Var0;
            var_3313 = var_232;
            yield func397();
        }
        if (var_3266 == 9) {
            var_888 = var_3300[var_3249];
            var_3314 = var_888;
            yield func539();
        }
        if (var_3266 == 0) {
            pos(mousex + 3, mousey + 20 + 10 - 5);
            font("ＭＳ Ｐゴシック", 11);
            color(255, 255, 255);
            if (var_3270 < 10) {
                mes("部屋 " + var_3270);
            }
            if (var_3270 >= 10) {
                mes("部屋" + var_3270);
            }
        }
        if (var_3266 == 1) {
            pos(mousex + 3, mousey + 20 + 10 - 5);
            font("ＭＳ Ｐゴシック", 11);
            color(255, 255, 255);
            mes("通路");
        }
        if (var_3266 == 2) {
            pos(mousex + 3, mousey + 20 + 10 - 5);
            font("ＭＳ Ｐゴシック", 11);
            color(255, 255, 255);
            mes("壁");
        }
        if (var_3266 == 3) {
            pos(mousex + 3, mousey + 20 + 10 - 5);
            font("ＭＳ Ｐゴシック", 11);
            color(255, 255, 255);
            mes("水");
        }
        pos(mousex - 3, mousey - 3);
        if (var_3266 >= 0 && var_3266 <= 3) {
            gcopy(3, 160, 120, 40, 40);
        }
        return;
    });
}
function func862() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(862);
        if (mousex < 330 && mousex > 10 && mousey > 10 && mousey < 330 && ginfo(2) == 0 && ginfo(0) > var_3284 && ginfo(0) < var_3286 && ginfo(1) > var_3285 && ginfo(1) < var_3287) {
            var_3315 = var_3279;
            var_3316 = var_3280;
            if (var_3315 < 5 || var_3315 > 56 || var_3316 < 5 || var_3316 > 37) {
                yield func851();
                return;
            }
            if (var_82[var_3315][var_3316] != 0) {
                var_3266 = 7;
                var_3140 = var_82[var_3315][var_3316];
                var_437 = var_83[var_3140].Var0;
                var_3317 = "p" + var_437 + "e";
                var_3318 = instr(var_3319, 0, var_3317);
                var_3320 = Math.floor(var_3318 / 12);
                var_3246 = var_3320;
                var_3247 = var_3246;
                clrobj(2, 2);
                objsize(135);
                pos(var_3229 + 44, var_3230);
                combox(var_3246, 100, var_890);
                var_3275 = var_83[var_3140].Var16;
                var_3293 = var_3275;
                var_3278 = var_3292[var_3246];
                yield func848();
                var_3247 = var_3246;
                var_3266 = 7;
                objsel(0);
                yield func851();
                return;
            }
            if (var_65[var_3315][var_3316] != 0) {
                var_3266 = 6;
                yield func851();
                return;
            }
            if (var_77[var_3315][var_3316] != 0) {
                var_3266 = 8;
                var_3140 = var_77[var_3315][var_3316];
                var_3321 = var_78[var_3140].Var0;
                var_3317 = "p" + var_3321 + "e";
                var_3318 = instr(var_3322, 0, var_3317);
                var_3320 = Math.floor(var_3318 / 12);
                var_873 = var_3320;
                var_3248 = var_873;
                clrobj(3, 3);
                objsize(135);
                pos(var_3225 + 44, var_3226);
                combox(var_873, 100, var_874);
                var_3251 = 0;
                if (var_3321 >= 100 && var_3321 < 400) {
                    var_3251 = 1;
                    var_3254 = var_78[var_3140].Var4;
                    var_3257 = var_3254;
                }
                if (var_3321 >= 400 && var_3321 < 500) {
                    var_3251 = 2;
                    var_3255 = var_78[var_3140].Var3;
                    var_3258 = var_3255;
                }
                if (var_3321 >= 800 && var_3321 < 900) {
                    var_3251 = 3;
                    var_3255 = var_78[var_3140].Var7;
                    var_3258 = var_3255;
                }
                if (var_3321 == 1) {
                    var_3251 = 4;
                    var_3256 = Math.floor(var_78[var_3140].Var13 / 100);
                    var_3259 = var_3256;
                }
                if (var_3251 == 0) {
                    yield func845();
                }
                if (var_3251 == 1) {
                    yield func842();
                }
                if (var_3251 == 2) {
                    yield func843();
                }
                if (var_3251 == 3) {
                    yield func843();
                }
                if (var_3251 == 4) {
                    yield func844();
                }
                var_3252 = var_3251;
                yield func851();
                return;
            }
            if (var_80[var_3315][var_3316] != 0) {
                var_3266 = 9;
                var_3140 = var_80[var_3315][var_3316];
                var_3323 = var_81[var_3140][0];
                var_3317 = "p" + var_3323 + "e";
                var_3318 = instr(var_3324, 0, var_3317);
                var_3320 = Math.floor(var_3318 / 12);
                var_3249 = var_3320;
                var_3250 = var_3249;
                clrobj(4, 4);
                objsize(135);
                pos(var_3227 + 44, var_3228);
                combox(var_3249, 100, var_886);
                yield func851();
                return;
            }
            if (var_73[var_3315][var_3316] != 0) {
                var_3266 = 5;
                yield func851();
                return;
            }
            if (var_71[var_3315][var_3316] == 14 || var_71[var_3315][var_3316] == 21 || var_71[var_3315][var_3316] == 22 || var_71[var_3315][var_3316] == 23 || var_71[var_3315][var_3316] == 24) {
                var_3266 = 1;
                yield func851();
                return;
            }
            if (var_71[var_3315][var_3316] == 0) {
                var_3266 = 2;
                yield func851();
                return;
            }
            if (var_71[var_3315][var_3316] == 13) {
                var_3266 = 3;
                yield func851();
                return;
            }
            if (var_71[var_3315][var_3316] != 0 && var_71[var_3315][var_3316] <= 12) {
                var_3266 = 0;
                var_3270 = var_71[var_3315][var_3316];
                var_3245 = var_3270;
                var_3267 = var_3245;
                clrobj(1, 1);
                objsize(50);
                pos(var_3211 + 45, var_3212);
                combox(var_3245, 100, "部屋\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12");
                yield func851();
                return;
            }
        }
        yield func851();
        return;
    });
}
function func863() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(863);
        if (mousex >= var_3211 && mousex <= var_3211 + 40 && mousey >= var_3212 && mousey <= var_3212 + 40) {
            var_3266 = 0;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }
        if (mousex >= var_3213 && mousex <= var_3213 + 40 && mousey >= var_3214 && mousey <= var_3214 + 40) {
            var_3266 = 1;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }
        if (mousex >= var_3215 && mousex <= var_3215 + 40 && mousey >= var_3216 && mousey <= var_3216 + 40) {
            var_3266 = 2;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }
        if (mousex >= var_3217 && mousex <= var_3217 + 40 && mousey >= var_3218 && mousey <= var_3218 + 40) {
            var_3266 = 3;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }
        if (mousex >= var_3219 && mousex <= var_3219 + 40 && mousey >= var_3220 && mousey <= var_3220 + 40) {
            var_3266 = 4;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }
        if (mousex >= var_3221 && mousex <= var_3221 + 40 && mousey >= var_3222 && mousey <= var_3222 + 40) {
            var_3266 = 5;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }
        if (mousex >= var_3223 && mousex <= var_3223 + 40 && mousey >= var_3224 && mousey <= var_3224 + 40) {
            var_3266 = 6;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }
        if (mousex >= var_3229 && mousex <= var_3229 + 40 && mousey >= var_3230 && mousey <= var_3230 + 40) {
            var_3266 = 7;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }
        if (mousex >= var_3225 && mousex <= var_3225 + 40 && mousey >= var_3226 && mousey <= var_3226 + 40) {
            var_3266 = 8;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }
        if (mousex >= var_3227 && mousex <= var_3227 + 40 && mousey >= var_3228 && mousey <= var_3228 + 40) {
            var_3266 = 9;
            for (var cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }
        if (mousex >= 362 && mousex <= 517 && mousey >= 206 && mousey <= 304) {
            var_3325 = Math.floor((mousex - 362) / 3);
            var_3326 = Math.floor((mousey - 206) / 3);
            var_66 = var_3325;
            var_67 = var_3326;
            if (var_66 < 3) {
                var_66 = 3;
            }
            if (var_66 > 49) {
                var_66 = 49;
            }
            if (var_67 < 3) {
                var_67 = 3;
            }
            if (var_67 > 30) {
                var_67 = 30;
            }
            yield func852();
            yield func851();
            return;
        }
        if (mousex < 330 && mousex > 10 && mousey > 10 && mousey < 330 && ginfo(2) != (-1) && ginfo(0) > var_3284 && ginfo(0) < var_3286 && ginfo(1) > var_3285 && ginfo(1) < var_3287) {
            var_3315 = var_3279;
            var_3316 = var_3280;
            if (var_3315 < 5 || var_3315 > 56 || var_3316 < 5 || var_3316 > 37) {
                yield func851();
                return;
            }
            if (var_3266 == 0) {
                var_71[var_3315][var_3316] = var_3270;
                yield func864();
            }
            if (var_3266 == 1) {
                var_71[var_3315][var_3316] = 14;
                yield func864();
            }
            if (var_3266 == 2) {
                if (var_71[var_3315][var_3316] != 0) {
                    yield func866();
                    var_71[var_3315][var_3316] = 0;
                    yield func864();
                }
            }
            if (var_3266 == 3) {
                if (var_71[var_3315][var_3316] != 13) {
                    yield func866();
                    var_71[var_3315][var_3316] = 13;
                    yield func864();
                }
            }
            if (var_3266 == 4) {
                if (var_73[var_3315][var_3316] != 0 || var_65[var_3315][var_3316] != 0 || var_82[var_3315][var_3316] != 0 || var_77[var_3315][var_3316] != 0 || var_80[var_3315][var_3316] != 0) {
                    yield func866();
                }
            }
            if (var_3266 >= 5) {
                if (var_71[var_3315][var_3316] == 0 || var_71[var_3315][var_3316] == 13) {
                    var_3294 = 2;
                    for (var cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func852();
                    }
                    var_3294 = 0;
                    yield func851();
                    return;
                }
            }
            if (var_3266 == 5) {
                if (var_73[var_3315][var_3316] == 0) {
                    yield func866();
                    var_73 = dim(70, 70);
                    var_73[var_3315][var_3316] = 1;
                    var_3327 = var_3315;
                    var_3328 = var_3316;
                }
            }
            if (var_3266 == 6) {
                if (var_65[var_3315][var_3316] == 0) {
                    yield func866();
                    var_65 = dim(70, 70);
                    var_65[var_3315][var_3316] = 1;
                    var_3329 = var_3315;
                    var_3330 = var_3316;
                }
            }
            if (var_3266 == 7 && var_3292[var_3246] != 0) {
                var_3331 = 0;
                if (var_82[var_3315][var_3316] != 0) {
                    var_3332 = var_82[var_3315][var_3316];
                    var_3331 = var_83[var_3332].Var0;
                }
                yield func866();
                var_3333 = 1;
                var_3334 = 0;
                for (var cnt3 = 0; cnt3 < 20; ++cnt3) {
                    if (var_83[var_3333].Var0 == 0) {
                        var_3334 = 1;
                        break;
                    }
                    var_3333++;
                }
                if (var_3334 == 0 && var_82[var_3315][var_3316] == 0) {
                    var_3294 = 1;
                    for (var cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func852();
                    }
                    var_3294 = 0;
                    yield func851();
                    return;
                }
                var_97 = var_3333;
                var_82[var_3315][var_3316] = var_97;
                var_83[var_97].Var0 = var_3312;
                var_83[var_97].Var1 = var_3315;
                var_83[var_97].Var2 = var_3316;
                var_83[var_97].Var16 = var_3275;
            }
            if (var_3266 == 8 && var_884[var_873] != 0) {
                var_3331 = 0;
                if (var_77[var_3315][var_3316] != 0) {
                    var_3332 = var_77[var_3315][var_3316];
                    var_3331 = var_78[var_3332].Var0;
                }
                yield func866();
                var_3333 = 1;
                var_3334 = 0;
                for (var cnt3 = 0; cnt3 < 20; ++cnt3) {
                    if (var_78[var_3333].Var0 == 0) {
                        var_3334 = 1;
                        break;
                    }
                    var_3333++;
                }
                if (var_3334 == 0 && var_77[var_3315][var_3316] == 0) {
                    var_3294 = 1;
                    for (var cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func852();
                    }
                    var_3294 = 0;
                    yield func851();
                    return;
                }
                var_336 = var_3333;
                var_77[var_3315][var_3316] = var_336;
                var_78[var_336].Var0 = var_3313;
                var_78[var_336].Var1 = var_3315;
                var_78[var_336].Var2 = var_3316;
                if (var_78[var_336].Var0 >= 100 && var_78[var_336].Var0 < 400) {
                    var_78[var_336].Var4 = var_3254;
                }
                if (var_78[var_336].Var0 >= 400 && var_78[var_336].Var0 < 500) {
                    var_78[var_336].Var3 = var_3255;
                    if (var_78[var_336].Var3 == 0) {
                        var_78[var_336].Var3 = 1;
                    }
                }
                if (var_78[var_336].Var0 >= 800 && var_78[var_336].Var0 < 900) {
                    var_78[var_336].Var7 = var_3255;
                }
                if (var_78[var_336].Var0 == 1) {
                    if (var_3256 == 0) {
                        var_78[var_336].Var13 = 1;
                    }
                    if (var_3256 >= 1) {
                        var_78[var_336].Var13 = var_3256 * 100;
                    }
                }
            }
            if (var_3266 == 9 && var_3300[var_3249] != 0) {
                var_3331 = 0;
                if (var_80[var_3315][var_3316] != 0) {
                    var_3332 = var_80[var_3315][var_3316];
                    var_3331 = var_81[var_3332][0];
                }
                yield func866();
                var_3333 = 1;
                var_3334 = 0;
                for (var cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_81[var_3333][0] == 0) {
                        var_3334 = 1;
                        break;
                    }
                    var_3333++;
                }
                if (var_3334 == 0 && var_80[var_3315][var_3316] == 0) {
                    var_3294 = 1;
                    for (var cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func852();
                    }
                    var_3294 = 0;
                    yield func851();
                    return;
                }
                var_337 = var_3333;
                var_80[var_3315][var_3316] = var_337;
                var_81[var_337][0] = var_3314;
                var_81[var_337][1] = var_3315;
                var_81[var_337][2] = var_3316;
            }
        }
        yield func852();
        var_3294 = 0;
        yield func851();
        return;
    });
}
function func864() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(864);
        var_1075 = 0;
        for (var cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_1076 = 0;
            for (var cnt2 = 0; cnt2 < 57; ++cnt2) {
                if (var_71[var_1076][var_1075] == 14 || var_71[var_1076][var_1075] == 21 || var_71[var_1076][var_1075] == 22 || var_71[var_1076][var_1075] == 23 || var_71[var_1076][var_1075] == 24) {
                    var_71[var_1076][var_1075] = 14;
                    var_1077 = var_1076;
                    var_1078 = var_1075 + 1;
                    var_1079 = var_71[var_1077][var_1078];
                    if (var_1079 >= 1 && var_1079 <= 12) {
                        var_71[var_1076][var_1075] = 21;
                    }
                    var_1077 = var_1076;
                    var_1078 = var_1075 - 1;
                    var_1079 = var_71[var_1077][var_1078];
                    if (var_1079 >= 1 && var_1079 <= 12) {
                        var_71[var_1076][var_1075] = 22;
                    }
                    var_1077 = var_1076 + 1;
                    var_1078 = var_1075;
                    var_1079 = var_71[var_1077][var_1078];
                    if (var_1079 >= 1 && var_1079 <= 12) {
                        var_71[var_1076][var_1075] = 23;
                    }
                    var_1077 = var_1076 - 1;
                    var_1078 = var_1075;
                    var_1079 = var_71[var_1077][var_1078];
                    if (var_1079 >= 1 && var_1079 <= 12) {
                        var_71[var_1076][var_1075] = 24;
                    }
                }
                var_1076++;
            }
            var_1075++;
        }
        return;
    });
}
function func865() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(865);
        dialog("画面を初期化しますか？", 2, "");
        if (stat == 7) {
            yield func851();
            return;
        }
        var_983 = sdim(3000);
        var_71 = dim(70, 70);
        var_65 = dim(70, 70);
        var_82 = dim(70, 70);
        var_77 = dim(70, 70);
        var_80 = dim(70, 70);
        var_73 = dim(70, 70);
        var_986 = dim(100);
        var_486 = dim(80, 21, 30);
        var_76 = dim(100, 5, 3);
        var_74 = dim(70, 70);
        var_75 = dim(20);
        var_83 = CharactorInfo.dim(300);
        var_78 = ItemInfo.dim(300);
        var_81 = dim(300, 7);
        yield func875();
        var_199 = 2;
        var_66 = 26;
        var_67 = 15;
        var_3273 = 0;
        var_3294 = 0;
        yield func852();
        yield func851();
        return;
    });
}
function func866() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(866);
        if (var_3266 == 2 || var_3266 == 3 || var_3266 == 4 || var_3266 == 6 || var_3266 == 7) {
            if (var_65[var_3315][var_3316] == 1) {
                var_65 = dim(70, 70);
            }
            if (var_82[var_3315][var_3316] != 0) {
                var_3335 = var_82[var_3315][var_3316];
                var_83[var_3335].Var0 = 0;
                var_83[var_3335].Var16 = 0;
                var_82[var_3315][var_3316] = 0;
            }
        }
        if (var_3266 == 2 || var_3266 == 3 || var_3266 == 4 || var_3266 == 8 || var_3266 == 9) {
            if (var_73[var_3315][var_3316] == 1) {
                var_73 = dim(70, 70);
            }
            if (var_77[var_3315][var_3316] != 0) {
                var_3335 = var_77[var_3315][var_3316];
                var_78[var_3335].Var0 = 0;
                var_78[var_3335].Var1 = 0;
                var_78[var_3335].Var2 = 0;
                var_78[var_3335].Var3 = 0;
                var_77[var_3315][var_3316] = 0;
            }
            if (var_80[var_3315][var_3316] != 0) {
                var_3335 = var_80[var_3315][var_3316];
                var_81[var_3335][0] = 0;
                var_80[var_3315][var_3316] = 0;
            }
        }
        return;
    });
}
function func867() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(867);
        color(0, 0, 0);
        boxf(50, 200, 300, 250);
        font("ＭＳ Ｐゴシック", 12);
        color(255, 255, 255);
        pos(60, 210);
        if (var_3294 == 1) {
            mes("これ以上は増やせません");
        }
        if (var_3294 == 2) {
            mes("ここには配置できません");
        }
        if (var_3294 == 3) {
            mes("これ以上個室を増やせません");
        }
        return;
    });
}
function func868() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(868);
        var_3274 = 0;
        yield func869();
    });
}
function func869() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(869);
        if (var_3274 == 0) {
            dialog("btq", 16, "魔少年の問題ファイル");
            if (stat == 0) {
                yield func851();
                return;
            }
            var_3336 = refstr;
        }
        chdir(var_30);
        var_983 = sdim(3000);
        var_71 = dim(70, 70);
        var_65 = dim(70, 70);
        var_82 = dim(70, 70);
        var_77 = dim(70, 70);
        var_80 = dim(70, 70);
        var_73 = dim(70, 70);
        var_986 = dim(100);
        var_486 = dim(80, 21, 30);
        var_76 = dim(100, 5, 3);
        var_74 = dim(70, 70);
        var_75 = dim(20);
        var_83 = CharactorInfo.dim(300);
        var_78 = ItemInfo.dim(300);
        var_81 = dim(300, 7);
        yield func881();
        yield func870();
        clrobj(12);
        yield func856();
        yield func857();
        objsel(0);
        var_199 = 2;
        var_66 = 26;
        var_67 = 15;
        if (var_3274 == 1) {
            var_66 = var_3337;
            var_67 = var_3338;
        }
        var_3273 = 1;
        yield func851();
        return;
    });
}
function func870() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(870);
        var_1729 = 1;
        var_452 = 1;
        var_768 = 1;
        var_336 = 0;
        var_337 = 0;
        var_764 = 0;
        var_1075 = 0;
        for (var cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_1076 = 0;
            for (var cnt2 = 0; cnt2 < 57; ++cnt2) {
                if (peek(var_983, var_764) == 35) {
                    var_71[var_1076][var_1075] = 0;
                }
                if (peek(var_983, var_764) == 46) {
                    var_71[var_1076][var_1075] = 14;
                }
                if (peek(var_983, var_764) == 87) {
                    var_71[var_1076][var_1075] = 14;
                }
                if (peek(var_983, var_764) == 88) {
                    var_71[var_1076][var_1075] = 14;
                }
                if (peek(var_983, var_764) == 89) {
                    var_71[var_1076][var_1075] = 14;
                }
                if (peek(var_983, var_764) == 90) {
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
                }
                if (peek(var_983, var_764) == 94) {
                    var_71[var_1076][var_1075] = 13;
                }
                if (peek(var_983, var_764) == 62) {
                    var_73[var_1076][var_1075] = 1;
                    var_71[var_1076][var_1075] = var_3339;
                    var_200 = var_3339;
                    var_3327 = var_1076;
                    var_3328 = var_1075;
                }
                if (peek(var_983, var_764) == 97) {
                    var_71[var_1076][var_1075] = var_3340;
                    var_1770 = var_3341;
                    var_3342 = var_3343;
                    yield func879();
                }
                if (peek(var_983, var_764) == 98) {
                    var_71[var_1076][var_1075] = var_3344;
                    var_1770 = var_3345;
                    var_3342 = var_3346;
                    yield func879();
                }
                if (peek(var_983, var_764) == 99) {
                    var_71[var_1076][var_1075] = var_3347;
                    var_1770 = var_3348;
                    var_3342 = var_3349;
                    yield func879();
                }
                if (peek(var_983, var_764) == 100) {
                    var_71[var_1076][var_1075] = var_3350;
                    var_1770 = var_3351;
                    var_3342 = var_3352;
                    yield func879();
                }
                if (peek(var_983, var_764) == 101) {
                    var_71[var_1076][var_1075] = var_3353;
                    var_1770 = var_3354;
                    var_3342 = var_3355;
                    yield func879();
                }
                if (peek(var_983, var_764) == 102) {
                    var_71[var_1076][var_1075] = var_3356;
                    var_1770 = var_3357;
                    var_3342 = var_3358;
                    yield func879();
                }
                if (peek(var_983, var_764) == 103) {
                    var_71[var_1076][var_1075] = var_3359;
                    var_1770 = var_3360;
                    var_3342 = var_3361;
                    yield func879();
                }
                if (peek(var_983, var_764) == 104) {
                    var_71[var_1076][var_1075] = var_3362;
                    var_1770 = var_3363;
                    var_3342 = var_3364;
                    yield func879();
                }
                if (peek(var_983, var_764) == 105) {
                    var_71[var_1076][var_1075] = var_3365;
                    var_1770 = var_3366;
                    var_3342 = var_3367;
                    yield func879();
                }
                if (peek(var_983, var_764) == 106) {
                    var_71[var_1076][var_1075] = var_3368;
                    var_1770 = var_3369;
                    var_3342 = var_3370;
                    yield func879();
                }
                if (peek(var_983, var_764) == 85) {
                    var_71[var_1076][var_1075] = var_3371;
                    var_1770 = var_3372;
                    var_3342 = var_3373;
                    yield func879();
                }
                if (peek(var_983, var_764) == 86) {
                    var_71[var_1076][var_1075] = var_3374;
                    var_1770 = var_3375;
                    var_3342 = var_3376;
                    yield func879();
                }
                if (peek(var_983, var_764) == 117) {
                    var_71[var_1076][var_1075] = var_3377;
                    var_1770 = var_3378;
                    var_3342 = var_3379;
                    yield func879();
                }
                if (peek(var_983, var_764) == 118) {
                    var_71[var_1076][var_1075] = var_3380;
                    var_1770 = var_3381;
                    var_3342 = var_3382;
                    yield func879();
                }
                if (peek(var_983, var_764) == 119) {
                    var_71[var_1076][var_1075] = var_3383;
                    var_1770 = var_3384;
                    var_3342 = var_3385;
                    yield func879();
                }
                if (peek(var_983, var_764) == 91) {
                    var_71[var_1076][var_1075] = var_3386;
                    var_1770 = var_3387;
                    var_3342 = var_3388;
                    yield func879();
                }
                if (peek(var_983, var_764) == 93) {
                    var_71[var_1076][var_1075] = var_3389;
                    var_1770 = var_3390;
                    var_3342 = var_3391;
                    yield func879();
                }
                if (peek(var_983, var_764) == 63) {
                    var_71[var_1076][var_1075] = var_3392;
                    var_1770 = var_3393;
                    var_3342 = var_3394;
                    yield func879();
                }
                if (peek(var_983, var_764) == 37) {
                    var_71[var_1076][var_1075] = var_3395;
                    var_1770 = var_3396;
                    var_3342 = var_3397;
                    yield func879();
                }
                if (peek(var_983, var_764) == 124) {
                    var_71[var_1076][var_1075] = var_3398;
                    var_1770 = var_3399;
                    var_3342 = var_3400;
                    yield func879();
                }
                if (peek(var_983, var_764) == 107) {
                    var_71[var_1076][var_1075] = var_3401;
                    var_2422 = var_3402;
                    yield func536();
                }
                if (peek(var_983, var_764) == 108) {
                    var_71[var_1076][var_1075] = var_3403;
                    var_2422 = var_3404;
                    yield func536();
                }
                if (peek(var_983, var_764) == 109) {
                    var_71[var_1076][var_1075] = var_3405;
                    var_2422 = var_3406;
                    yield func536();
                }
                if (peek(var_983, var_764) == 110) {
                    var_71[var_1076][var_1075] = var_3407;
                    var_2422 = var_3408;
                    yield func536();
                }
                if (peek(var_983, var_764) == 111) {
                    var_71[var_1076][var_1075] = var_3409;
                    var_2422 = var_3410;
                    yield func536();
                }
                if (peek(var_983, var_764) == 112) {
                    var_71[var_1076][var_1075] = var_3411;
                    var_2422 = var_3412;
                    yield func536();
                }
                if (peek(var_983, var_764) == 113) {
                    var_71[var_1076][var_1075] = var_3413;
                    var_2422 = var_3414;
                    yield func536();
                }
                if (peek(var_983, var_764) == 114) {
                    var_71[var_1076][var_1075] = var_3415;
                    var_2422 = var_3416;
                    yield func536();
                }
                if (peek(var_983, var_764) == 115) {
                    var_71[var_1076][var_1075] = var_3417;
                    var_2422 = var_3418;
                    yield func536();
                }
                if (peek(var_983, var_764) == 116) {
                    var_71[var_1076][var_1075] = var_3419;
                    var_2422 = var_3420;
                    yield func536();
                }
                var_1076 = var_1076 + 1;
                var_764 = var_764 + 1;
            }
            var_1075 = var_1075 + 1;
        }
        var_1729 = 0;
        var_452 = 0;
        var_768 = 0;
        var_1729 = 1;
        var_97 = 0;
        var_1075 = 0;
        for (var cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_1076 = 0;
            for (var cnt2 = 0; cnt2 < 57; ++cnt2) {
                if (peek(var_983, var_764) == 64) {
                    var_65[var_1076][var_1075] = 1;
                    var_71[var_1076][var_1075] = var_201;
                    var_66 = var_1076;
                    var_67 = var_1075;
                    var_3329 = var_1076;
                    var_3330 = var_1075;
                }
                if (peek(var_983, var_764) == 65) {
                    var_2548 = var_3421;
                    var_2547 = var_3422;
                    yield func556();
                }
                if (peek(var_983, var_764) == 66) {
                    var_2548 = var_3423;
                    var_2547 = var_3424;
                    yield func556();
                }
                if (peek(var_983, var_764) == 67) {
                    var_2548 = var_3425;
                    var_2547 = var_3426;
                    yield func556();
                }
                if (peek(var_983, var_764) == 68) {
                    var_2548 = var_3427;
                    var_2547 = var_3428;
                    yield func556();
                }
                if (peek(var_983, var_764) == 69) {
                    var_2548 = var_3429;
                    var_2547 = var_3430;
                    yield func556();
                }
                if (peek(var_983, var_764) == 70) {
                    var_2548 = var_3431;
                    var_2547 = var_3432;
                    yield func556();
                }
                if (peek(var_983, var_764) == 71) {
                    var_2548 = var_3433;
                    var_2547 = var_3434;
                    yield func556();
                }
                if (peek(var_983, var_764) == 72) {
                    var_2548 = var_3435;
                    var_2547 = var_3436;
                    yield func556();
                }
                if (peek(var_983, var_764) == 73) {
                    var_2548 = var_3437;
                    var_2547 = var_3438;
                    yield func556();
                }
                if (peek(var_983, var_764) == 74) {
                    var_2548 = var_3439;
                    var_2547 = var_3440;
                    yield func556();
                }
                if (peek(var_983, var_764) == 75) {
                    var_2548 = var_3441;
                    var_2547 = var_3442;
                    yield func556();
                }
                if (peek(var_983, var_764) == 76) {
                    var_2548 = var_3443;
                    var_2547 = var_3444;
                    yield func556();
                }
                if (peek(var_983, var_764) == 77) {
                    var_2548 = var_3445;
                    var_2547 = var_3446;
                    yield func556();
                }
                if (peek(var_983, var_764) == 78) {
                    var_2548 = var_3447;
                    var_2547 = var_3448;
                    yield func556();
                }
                if (peek(var_983, var_764) == 79) {
                    var_2548 = var_3449;
                    var_2547 = var_3450;
                    yield func556();
                }
                if (peek(var_983, var_764) == 80) {
                    var_2548 = var_3451;
                    var_2547 = var_3452;
                    yield func556();
                }
                if (peek(var_983, var_764) == 81) {
                    var_2548 = var_3453;
                    var_2547 = var_3454;
                    yield func556();
                }
                if (peek(var_983, var_764) == 82) {
                    var_2548 = var_3455;
                    var_2547 = var_3456;
                    yield func556();
                }
                if (peek(var_983, var_764) == 83) {
                    var_2548 = var_3457;
                    var_2547 = var_3458;
                    yield func556();
                }
                if (peek(var_983, var_764) == 84) {
                    var_2548 = var_3459;
                    var_2547 = var_3460;
                    yield func556();
                }
                var_1076 = var_1076 + 1;
                var_764 = var_764 + 1;
            }
            var_1075 = var_1075 + 1;
        }
        var_1729 = 0;
        var_764 = 0;
        var_1075 = 0;
        for (var cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_1076 = 0;
            for (var cnt2 = 0; cnt2 < 57; ++cnt2) {
                if (peek(var_983, var_764) == 87) {
                    var_1077 = var_1076;
                    var_1078 = var_1075 + 1;
                    var_1079 = var_71[var_1077][var_1078];
                    var_76[var_1079][1][1] = var_1076;
                    var_76[var_1079][1][2] = var_1075;
                    var_71[var_1076][var_1075] = 21;
                }
                if (peek(var_983, var_764) == 88) {
                    var_1077 = var_1076;
                    var_1078 = var_1075 - 1;
                    var_1079 = var_71[var_1077][var_1078];
                    var_76[var_1079][4][1] = var_1076;
                    var_76[var_1079][4][2] = var_1075;
                    var_71[var_1076][var_1075] = 22;
                }
                if (peek(var_983, var_764) == 89) {
                    var_1077 = var_1076 + 1;
                    var_1078 = var_1075;
                    var_1079 = var_71[var_1077][var_1078];
                    var_76[var_1079][2][1] = var_1076;
                    var_76[var_1079][2][2] = var_1075;
                    var_71[var_1076][var_1075] = 23;
                }
                if (peek(var_983, var_764) == 90) {
                    var_1077 = var_1076 - 1;
                    var_1078 = var_1075;
                    var_1079 = var_71[var_1077][var_1078];
                    var_76[var_1079][3][1] = var_1076;
                    var_76[var_1079][3][2] = var_1075;
                    var_71[var_1076][var_1075] = 24;
                }
                if (var_71[var_1076][var_1075] >= 1 && var_71[var_1076][var_1075] <= 12) {
                    var_3461 = var_71[var_1076][var_1075];
                    var_493[var_3461] = 1;
                }
                var_1076 = var_1076 + 1;
                var_764 = var_764 + 1;
            }
            var_1075 = var_1075 + 1;
        }
        return;
    });
}
function func871() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(871);
        var_3337 = var_66;
        var_3338 = var_67;
        if (var_3273 == 0) {
            dialog("btq", 17, "魔少年の問題ファイル");
            if (stat == 0) {
                yield func851();
                return;
            }
            var_3336 = refstr;
            if (instr(var_3336, 0, ".btq") == (-1)) {
                var_3336 = "" + var_3336 + ".btq";
            }
            var_3273 = 1;
        }
        yield func873();
        chdir(var_30);
        objsel(0);
        clrobj();
        yield func233();
        if (var_10 == 0) {
            width(340, 340);
        }
        if (var_10 == 1) {
            width(680, 680);
        }
        var_3462 = 1;
        yield func876();
        return;
    });
}
function func872() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(872);
        dialog("btq", 17, "魔少年の問題ファイル");
        if (stat == 0) {
            chdir(var_30);
            yield func851();
            return;
        }
        var_3336 = refstr;
        if (instr(var_3336, 0, ".btq") == (-1)) {
            var_3336 = "" + var_3336 + ".btq";
        }
        var_3273 = 1;
        yield func873();
        chdir(var_30);
        objsel(0);
        yield func851();
        return;
    });
}
function func873() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(873);
        var_3463 = "";
        var_3463 = var_3463 + "" + var_3253 + "\n";
        var_3464 = 0;
        for (var cnt1 = 0; cnt1 < 38; ++cnt1) {
            var_3465 = 0;
            for (var cnt2 = 0; cnt2 < 59; ++cnt2) {
                if (cnt2 == 57) {
                    var_3463 = var_3463 + "\n";
                    break;
                }
                if (var_71[var_3465][var_3464] == 0) {
                    var_3466 = "#";
                }
                if (var_71[var_3465][var_3464] >= 1 && var_71[var_3465][var_3464] <= 9) {
                    var_3466 = "" + var_71[var_3465][var_3464];
                }
                if (var_71[var_3465][var_3464] == 10) {
                    var_3466 = "x";
                }
                if (var_71[var_3465][var_3464] == 11) {
                    var_3466 = "y";
                }
                if (var_71[var_3465][var_3464] == 12) {
                    var_3466 = "z";
                }
                if (var_71[var_3465][var_3464] == 13) {
                    var_3466 = "^";
                }
                if (var_71[var_3465][var_3464] == 14) {
                    var_3466 = ".";
                }
                if (var_71[var_3465][var_3464] == 21) {
                    var_3466 = "W";
                }
                if (var_71[var_3465][var_3464] == 22) {
                    var_3466 = "X";
                }
                if (var_71[var_3465][var_3464] == 23) {
                    var_3466 = "Y";
                }
                if (var_71[var_3465][var_3464] == 24) {
                    var_3466 = "Z";
                }
                if (var_73[var_3465][var_3464] == 1) {
                    var_3466 = ">";
                }
                if (var_77[var_3465][var_3464] == 1) {
                    var_3466 = "a";
                }
                if (var_77[var_3465][var_3464] == 2) {
                    var_3466 = "b";
                }
                if (var_77[var_3465][var_3464] == 3) {
                    var_3466 = "c";
                }
                if (var_77[var_3465][var_3464] == 4) {
                    var_3466 = "d";
                }
                if (var_77[var_3465][var_3464] == 5) {
                    var_3466 = "e";
                }
                if (var_77[var_3465][var_3464] == 6) {
                    var_3466 = "f";
                }
                if (var_77[var_3465][var_3464] == 7) {
                    var_3466 = "g";
                }
                if (var_77[var_3465][var_3464] == 8) {
                    var_3466 = "h";
                }
                if (var_77[var_3465][var_3464] == 9) {
                    var_3466 = "i";
                }
                if (var_77[var_3465][var_3464] == 10) {
                    var_3466 = "j";
                }
                if (var_77[var_3465][var_3464] == 11) {
                    var_3466 = "U";
                }
                if (var_77[var_3465][var_3464] == 12) {
                    var_3466 = "V";
                }
                if (var_77[var_3465][var_3464] == 13) {
                    var_3466 = "u";
                }
                if (var_77[var_3465][var_3464] == 14) {
                    var_3466 = "v";
                }
                if (var_77[var_3465][var_3464] == 15) {
                    var_3466 = "w";
                }
                if (var_77[var_3465][var_3464] == 16) {
                    var_3466 = "[";
                }
                if (var_77[var_3465][var_3464] == 17) {
                    var_3466 = "]";
                }
                if (var_77[var_3465][var_3464] == 18) {
                    var_3466 = "?";
                }
                if (var_77[var_3465][var_3464] == 19) {
                    var_3466 = "%";
                }
                if (var_77[var_3465][var_3464] == 20) {
                    var_3466 = "|";
                }
                if (var_80[var_3465][var_3464] == 1) {
                    var_3466 = "k";
                }
                if (var_80[var_3465][var_3464] == 2) {
                    var_3466 = "l";
                }
                if (var_80[var_3465][var_3464] == 3) {
                    var_3466 = "m";
                }
                if (var_80[var_3465][var_3464] == 4) {
                    var_3466 = "n";
                }
                if (var_80[var_3465][var_3464] == 5) {
                    var_3466 = "o";
                }
                if (var_80[var_3465][var_3464] == 6) {
                    var_3466 = "p";
                }
                if (var_80[var_3465][var_3464] == 7) {
                    var_3466 = "q";
                }
                if (var_80[var_3465][var_3464] == 8) {
                    var_3466 = "r";
                }
                if (var_80[var_3465][var_3464] == 9) {
                    var_3466 = "s";
                }
                if (var_80[var_3465][var_3464] == 10) {
                    var_3466 = "t";
                }
                var_3463 = var_3463 + var_3466;
                var_3465++;
            }
            var_3464++;
        }
        var_3464 = 0;
        for (var cnt1 = 0; cnt1 < 38; ++cnt1) {
            var_3465 = 0;
            for (var cnt2 = 0; cnt2 < 59; ++cnt2) {
                if (cnt2 == 57) {
                    var_3463 = var_3463 + "\n";
                    break;
                }
                if (var_71[var_3465][var_3464] == 0) {
                    var_3466 = " ";
                }
                if (var_71[var_3465][var_3464] >= 1 && var_71[var_3465][var_3464] <= 9) {
                    var_3466 = " ";
                }
                if (var_71[var_3465][var_3464] == 10) {
                    var_3466 = " ";
                }
                if (var_71[var_3465][var_3464] == 11) {
                    var_3466 = " ";
                }
                if (var_71[var_3465][var_3464] == 12) {
                    var_3466 = " ";
                }
                if (var_71[var_3465][var_3464] == 13) {
                    var_3466 = " ";
                }
                if (var_71[var_3465][var_3464] == 14) {
                    var_3466 = " ";
                }
                if (var_71[var_3465][var_3464] == 21) {
                    var_3466 = " ";
                }
                if (var_71[var_3465][var_3464] == 22) {
                    var_3466 = " ";
                }
                if (var_71[var_3465][var_3464] == 23) {
                    var_3466 = " ";
                }
                if (var_71[var_3465][var_3464] == 24) {
                    var_3466 = " ";
                }
                if (var_65[var_3465][var_3464] == 1) {
                    var_3466 = "@";
                }
                if (var_82[var_3465][var_3464] == 1) {
                    var_3466 = "A";
                }
                if (var_82[var_3465][var_3464] == 2) {
                    var_3466 = "B";
                }
                if (var_82[var_3465][var_3464] == 3) {
                    var_3466 = "C";
                }
                if (var_82[var_3465][var_3464] == 4) {
                    var_3466 = "D";
                }
                if (var_82[var_3465][var_3464] == 5) {
                    var_3466 = "E";
                }
                if (var_82[var_3465][var_3464] == 6) {
                    var_3466 = "F";
                }
                if (var_82[var_3465][var_3464] == 7) {
                    var_3466 = "G";
                }
                if (var_82[var_3465][var_3464] == 8) {
                    var_3466 = "H";
                }
                if (var_82[var_3465][var_3464] == 9) {
                    var_3466 = "I";
                }
                if (var_82[var_3465][var_3464] == 10) {
                    var_3466 = "J";
                }
                if (var_82[var_3465][var_3464] == 11) {
                    var_3466 = "K";
                }
                if (var_82[var_3465][var_3464] == 12) {
                    var_3466 = "L";
                }
                if (var_82[var_3465][var_3464] == 13) {
                    var_3466 = "M";
                }
                if (var_82[var_3465][var_3464] == 14) {
                    var_3466 = "N";
                }
                if (var_82[var_3465][var_3464] == 15) {
                    var_3466 = "O";
                }
                if (var_82[var_3465][var_3464] == 16) {
                    var_3466 = "P";
                }
                if (var_82[var_3465][var_3464] == 17) {
                    var_3466 = "Q";
                }
                if (var_82[var_3465][var_3464] == 18) {
                    var_3466 = "R";
                }
                if (var_82[var_3465][var_3464] == 19) {
                    var_3466 = "S";
                }
                if (var_82[var_3465][var_3464] == 20) {
                    var_3466 = "T";
                }
                var_3463 = var_3463 + var_3466;
                var_3465++;
            }
            var_3464++;
        }
        var_3467 = var_71[var_3329][var_3330];
        if (var_71[var_3329][var_3330] == 21) {
            var_3467 = 14;
        }
        if (var_71[var_3329][var_3330] == 22) {
            var_3467 = 14;
        }
        if (var_71[var_3329][var_3330] == 23) {
            var_3467 = 14;
        }
        if (var_71[var_3329][var_3330] == 24) {
            var_3467 = 14;
        }
        var_3463 = var_3463 + "" + var_3467 + "\n";
        var_3467 = var_71[var_3327][var_3328];
        if (var_71[var_3327][var_3328] == 21) {
            var_3467 = 14;
        }
        if (var_71[var_3327][var_3328] == 22) {
            var_3467 = 14;
        }
        if (var_71[var_3327][var_3328] == 23) {
            var_3467 = 14;
        }
        if (var_71[var_3327][var_3328] == 24) {
            var_3467 = 14;
        }
        var_3463 = var_3463 + "" + var_3467 + "\n";
        var_3468 = 1;
        for (var cnt1 = 0; cnt1 < 20; ++cnt1) {
            var_3463 = var_3463 + "" + var_83[var_3468].Var0 + "\n";
            var_3467 = 0;
            var_3467 = var_83[var_3468].Var16;
            var_3463 = var_3463 + "" + var_3467 + "\n";
            var_3468++;
        }
        var_3468 = 1;
        for (var cnt1 = 0; cnt1 < 20; ++cnt1) {
            var_3463 = var_3463 + "" + var_78[var_3468].Var0 + "\n";
            var_3469 = var_78[var_3468].Var1;
            var_3470 = var_78[var_3468].Var2;
            yield func874();
            var_3463 = var_3463 + "" + var_3467 + "\n";
            var_3471 = 0;
            if (var_78[var_3468].Var0 >= 100 && var_78[var_3468].Var0 < 400) {
                var_3471 = var_78[var_3468].Var4;
                if (var_78[var_3468].Var12 == 1) {
                    var_3471 = 11;
                }
            }
            if (var_78[var_3468].Var0 >= 400 && var_78[var_3468].Var0 < 500) {
                var_3471 = var_78[var_3468].Var3;
            }
            if (var_78[var_3468].Var0 >= 800 && var_78[var_3468].Var0 < 900) {
                var_3471 = var_78[var_3468].Var7;
            }
            if (var_78[var_3468].Var0 == 1) {
                var_3471 = var_78[var_3468].Var13;
            }
            var_3463 = var_3463 + "" + var_3471 + "\n";
            var_3468++;
        }
        var_3468 = 1;
        for (var cnt1 = 0; cnt1 < 10; ++cnt1) {
            var_3463 = var_3463 + "" + var_81[var_3468][0] + "\n";
            var_3469 = var_81[var_3468][1];
            var_3470 = var_81[var_3468][2];
            yield func874();
            var_3463 = var_3463 + "" + var_3467 + "\n";
            var_3468++;
        }
        var_3463 = var_3463 + "" + var_3260 + "\n";
        notesel(var_3463);
        var_3472 = sdim(10000);
        for (var cnt1 = 0; cnt1 < 200; ++cnt1) {
            var_3473 = noteget(cnt1);
            var_3472 = var_3472 + var_3473 + "\n";
        }
        yield func887();
        bsave(var_3336, var_3472);
        return;
    });
}
function func874() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(874);
        var_3467 = var_71[var_3469][var_3470];
        if (var_71[var_3469][var_3470] == 21) {
            var_3467 = 14;
        }
        if (var_71[var_3469][var_3470] == 22) {
            var_3467 = 14;
        }
        if (var_71[var_3469][var_3470] == 23) {
            var_3467 = 14;
        }
        if (var_71[var_3469][var_3470] == 24) {
            var_3467 = 14;
        }
        return;
    });
}
function func875() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(875);
        var_983 = sdim(3000);
        var_71 = dim(70, 70);
        var_65 = dim(70, 70);
        var_983 = "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "############################111111#######################";
        var_983 = var_983 + "############################111111#######################";
        var_983 = var_983 + "############################111111#######################";
        var_983 = var_983 + "############################111111#######################";
        var_983 = var_983 + "############################111111#######################";
        var_983 = var_983 + "############################111111#######################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_983 = var_983 + "#########################################################";
        var_764 = 0;
        var_1075 = 0;
        for (var cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_1076 = 0;
            for (var cnt2 = 0; cnt2 < 57; ++cnt2) {
                if (peek(var_983, var_764) == 35) {
                    var_71[var_1076][var_1075] = 0;
                }
                if (peek(var_983, var_764) == 49) {
                    var_71[var_1076][var_1075] = 1;
                }
                var_1076 = var_1076 + 1;
                var_764 = var_764 + 1;
            }
            var_1075 = var_1075 + 1;
        }
        var_66 = 26;
        var_67 = 15;
        var_199 = 2;
        objsel(0);
        return;
    });
}