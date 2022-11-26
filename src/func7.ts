function func700(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(700);
        var_402 = var_2194;
        if (var_83[var_2194].Var0 == 132 || var_83[var_2194].Var0 == 143) {
            var_209 = 10;
            var_2195 = 0;
            var_2196 = 0;
            yield func705();
            var_2196 = 2;
            var_2195 = 1;
            return;
        }
        if (var_3083 == 0) {
            if (var_83[var_2194].Var0 == 33 || var_83[var_2194].Var0 == 34 || var_83[var_2194].Var0 == 32 || var_83[var_2194].Var0 == 21 || var_83[var_2194].Var0 == 137) {
                var_209 = 10;
                var_2195 = 0;
                var_2196 = 0;
                yield func705();
                var_2196 = 2;
                var_2195 = 1;
                return;
            }
            if (var_83[var_2194].Var0 == 17) {
                var_83[var_2194].Var3 = 5;
                var_83[var_2194].Var8 = 1;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_83[var_2194].Var8 = 0;
                var_83[var_2194].Var29 = 1;
                return;
            }
        }
        var_209 = 999;
        var_2217 = 1;
        yield func705();
        var_2217 = 0;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
    });
}

function func701(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(701);
        var_1389 = var_66;
        var_1390 = var_67;
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
        var_389 = 2;

        DSPLAY(audio_id = 180);
        var_271 = 1;
        var_1388 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            var_585 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_585 = 0;
            yield func337(); // メッセージ関係呼び出し
            var_1388++;
        }
        for (let cnt1 = 0; cnt1 < 14; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1388++;
        }
        var_271 = 0;
        var_1388 = 0;
        var_403 = "";
        var_2194 = 1;
        var_2195 = 1;
        var_2196 = 2;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
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
            var_356 = 248;
            if (var_177 == 12) {
                var_356 = 266;
            }
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
            var_2197 = 1;
            return;
        }
        if (var_211 > 1) {
            var_2198 = Math.floor(var_211 / 2);
            if (equip_disc[314] == 1) {
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
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_2199].Var0 == 17 && var_83[var_2199].Var29 == 1) {
                yield func699();
                var_2199 = 1;
                cnt1 = 0;
                continue;
            }
            var_2199++;
        }
        return;
    });
}

// 
function func702(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(702);
        var_3102 = dim(10);
        var_3103 = 0;
        if (var_2946 == 101) {
            if (var_82[var_2947][var_2948] != 0) {
                var_433 = var_82[var_2947][var_2948];
                if (var_83[var_433].Var0 == 101) {
                    var_83[var_433].Var12 = 0;
                    var_3102[1] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                }
            }
            if (var_82[var_2949][var_2948] != 0) {
                var_433 = var_82[var_2949][var_2948];
                if (var_83[var_433].Var0 == 102 && var_83[var_433].Var12 == 99) {
                    var_83[var_433].Var12 = 0;
                    var_3102[2] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                    var_3103 = 1;
                }
            }
            if (var_82[var_2947][var_2950] != 0) {
                var_433 = var_82[var_2947][var_2950];
                if (var_83[var_433].Var0 == 103 && var_83[var_433].Var12 == 99) {
                    var_83[var_433].Var12 = 0;
                    var_3102[3] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                    var_3103 = 1;
                }
            }
            if (var_82[var_2949][var_2950] != 0) {
                var_433 = var_82[var_2949][var_2950];
                if (var_83[var_433].Var0 == 104 && var_83[var_433].Var12 == 99) {
                    var_83[var_433].Var12 = 0;
                    var_3102[4] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                    var_3103 = 1;
                }
            }
        }
        if (var_2946 == 102) {
            if (var_82[var_2947][var_2948] != 0) {
                var_433 = var_82[var_2947][var_2948];
                if (var_83[var_433].Var0 == 102) {
                    var_83[var_433].Var12 = 0;
                    var_3102[2] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                }
            }
            if (var_82[var_2951][var_2948] != 0) {
                var_433 = var_82[var_2951][var_2948];
                if (var_83[var_433].Var0 == 101 && var_83[var_433].Var12 == 99) {
                    var_83[var_433].Var12 = 0;
                    var_3102[1] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                    var_3103 = 1;
                }
            }
            if (var_82[var_2951][var_2950] != 0) {
                var_433 = var_82[var_2951][var_2950];
                if (var_83[var_433].Var0 == 103 && var_83[var_433].Var12 == 99) {
                    var_83[var_433].Var12 = 0;
                    var_3102[3] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                    var_3103 = 1;
                }
            }
            if (var_82[var_2947][var_2950] != 0) {
                var_433 = var_82[var_2947][var_2950];
                if (var_83[var_433].Var0 == 104 && var_83[var_433].Var12 == 99) {
                    var_83[var_433].Var12 = 0;
                    var_3102[4] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                    var_3103 = 1;
                }
            }
        }
        if (var_2946 == 103) {
            if (var_82[var_2947][var_2948] != 0) {
                var_433 = var_82[var_2947][var_2948];
                if (var_83[var_433].Var0 == 103) {
                    var_83[var_433].Var12 = 0;
                    var_3102[3] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                }
            }
            if (var_82[var_2947][var_2952] != 0) {
                var_433 = var_82[var_2947][var_2952];
                if (var_83[var_433].Var0 == 101 && var_83[var_433].Var12 == 99) {
                    var_83[var_433].Var12 = 0;
                    var_3102[1] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                    var_3103 = 1;
                }
            }
            if (var_82[var_2949][var_2952] != 0) {
                var_433 = var_82[var_2949][var_2952];
                if (var_83[var_433].Var0 == 102 && var_83[var_433].Var12 == 99) {
                    var_83[var_433].Var12 = 0;
                    var_3102[2] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                    var_3103 = 1;
                }
            }
            if (var_82[var_2949][var_2948] != 0) {
                var_433 = var_82[var_2949][var_2948];
                if (var_83[var_433].Var0 == 104 && var_83[var_433].Var12 == 99) {
                    var_83[var_433].Var12 = 0;
                    var_3102[4] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                    var_3103 = 1;
                }
            }
        }
        if (var_2946 == 104) {
            if (var_82[var_2947][var_2948] != 0) {
                var_433 = var_82[var_2947][var_2948];
                if (var_83[var_433].Var0 == 104) {
                    var_83[var_433].Var12 = 0;
                    var_3102[4] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                }
            }
            if (var_82[var_2951][var_2952] != 0) {
                var_433 = var_82[var_2951][var_2952];
                if (var_83[var_433].Var0 == 101 && var_83[var_433].Var12 == 99) {
                    var_83[var_433].Var12 = 0;
                    var_3102[1] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                    var_3103 = 1;
                }
            }
            if (var_82[var_2947][var_2952] != 0) {
                var_433 = var_82[var_2947][var_2952];
                if (var_83[var_433].Var0 == 102 && var_83[var_433].Var12 == 99) {
                    var_83[var_433].Var12 = 0;
                    var_3102[2] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                    var_3103 = 1;
                }
            }
            if (var_82[var_2951][var_2948] != 0) {
                var_433 = var_82[var_2951][var_2948];
                if (var_83[var_433].Var0 == 103 && var_83[var_433].Var12 == 99) {
                    var_83[var_433].Var12 = 0;
                    var_3102[3] = 1;
                    var_434 = var_83[var_433].Var1;
                    var_435 = var_83[var_433].Var2;
                    yield func704();
                    var_3103 = 1;
                }
            }
        }
        var_2946 = 0;
        if (var_1280 == 0 && var_2217 == 0 && var_3103 == 1) {
            if (var_3102[1] == 1 || var_3102[2] == 1 || var_3102[3] == 1 || var_3102[4] == 1) {
                var_198 = 1;
                var_300 = 0;
                var_3104 = "";
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                if (var_3102[1] == 1) {
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    var_3104 = "おれの名は";
                    comments_row1a = "「" + var_3104 + "ペイジ」";
                    comments_row2a = "";
                    yield func047();
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                }
                if (var_3102[2] == 1) {
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "「ジョーンズ」";
                    if (var_3104 == "") {
                        var_3104 = "おれの名は";
                        comments_row1a = "「" + var_3104 + "ジョーンズ」";
                    }
                    comments_row2a = "";
                    yield func047();
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                }
                if (var_3102[3] == 1) {
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "「プラント」";
                    if (var_3104 == "") {
                        var_3104 = "おれの名は";
                        comments_row1a = "「" + var_3104 + "プラント」";
                    }
                    comments_row2a = "";
                    yield func047();
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                }
                if (var_3102[4] == 1) {
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "「ボーンナム」";
                    if (var_3104 == "") {
                        var_3104 = "おれの名は";
                        comments_row1a = "「" + var_3104 + "ボーンナム」";
                    }
                    comments_row2a = "";
                    yield func047();
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                }
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_198 = 1;
                var_300 = 0;
                yield func094();
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "「血管針攻撃！！！」";
                comments_row2a = "";
                yield func047();
                yield func050();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
            }
        }
        return;
    });
}

function func703(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(703);
        if (var_175 >= 1 && var_314 == var_175) {
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "やっつけたｱｸｱ･ﾈｯｸﾚｽは";
            comments_row2a = "念写したヤツだったようだ。";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_175 = 0;
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        if (var_176 >= 1 && var_314 == var_176) {
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "やっつけたDIOは";
            comments_row2a = "念写したヤツだったようだ。";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_176 = 0;
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        return;
    });
}
function func704(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(704);
        if (var_434 == var_66 && var_435 > var_67) {
            var_83[var_433].Var5 = 8;
        }
        if (var_434 == var_66 && var_435 < var_67) {
            var_83[var_433].Var5 = 2;
        }
        if (var_434 < var_66 && var_435 == var_67) {
            var_83[var_433].Var5 = 6;
        }
        if (var_434 > var_66 && var_435 == var_67) {
            var_83[var_433].Var5 = 4;
        }
        if (var_434 > var_66 && var_435 > var_67) {
            var_83[var_433].Var5 = 7;
        }
        if (var_434 < var_66 && var_435 > var_67) {
            var_83[var_433].Var5 = 9;
        }
        if (var_434 > var_66 && var_435 < var_67) {
            var_83[var_433].Var5 = 1;
        }
        if (var_434 < var_66 && var_435 < var_67) {
            var_83[var_433].Var5 = 3;
        }
        return;
    });
}
function func705(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(705);
        var_2942 = var_83[var_402].Var5;
        var_214 = 1;
        enemy_list = var_83[var_402].Var0;
        yield func626();
        if (var_83[var_402].Var0 == 33 && var_2196 != 0) {
            var_209 = 0;
            if (var_2307 >= 10) {
                var_2307 = var_2307 - 10;
            }
        }
        if (var_83[var_402].Var0 == 73 && var_83[var_402].Var13 >= 1 && var_83[var_402].Var13 != 99) {
            var_209 = 999;
        }
        if (var_83[var_402].Var31 == 5 && var_83[var_402].Var0 == 17) {
            var_209 = 1;
        }
        if (var_2821 == 1) {
            if (var_83[var_402].Var31 == 4 || var_83[var_402].Var31 == 5) {
                var_2821 = 0;
            }
        }
        if (var_2821 == 0) {
            var_83[var_402].Var3 = var_83[var_402].Var3 - var_209;
        }
        if (var_2821 == 1) {
            var_83[var_402].Var3 = var_83[var_402].Var3 + 20;
            var_2792 = enemy_hp;
            if (var_83[var_402].Var39 >= 2) {
                var_2792 = Math.floor(enemy_hp * (var_83[var_402].Var39 + 10) / 10);
                if (var_83[var_402].Var3 >= 999) {
                    var_83[var_402].Var3 = 999;
                }
            }
            if (var_2792 < var_83[var_402].Var3) {
                var_83[var_402].Var3 = var_2792;
            }
        }
        var_748 = var_83[var_402].Var1 - var_66 + 4;
        var_749 = var_83[var_402].Var2 - var_67 + 4;
        if (var_2196 == 0 && var_83[var_402].Var0 != 79 && var_83[var_402].Var23 == 0) {
            if (var_83[var_402].Var1 == var_66 && var_83[var_402].Var2 > var_67) {
                var_83[var_402].Var5 = 8;
            }
            if (var_83[var_402].Var1 == var_66 && var_83[var_402].Var2 < var_67) {
                var_83[var_402].Var5 = 2;
            }
            if (var_83[var_402].Var1 < var_66 && var_83[var_402].Var2 == var_67) {
                var_83[var_402].Var5 = 6;
            }
            if (var_83[var_402].Var1 > var_66 && var_83[var_402].Var2 == var_67) {
                var_83[var_402].Var5 = 4;
            }
            if (var_83[var_402].Var1 > var_66 && var_83[var_402].Var2 > var_67) {
                var_83[var_402].Var5 = 7;
            }
            if (var_83[var_402].Var1 < var_66 && var_83[var_402].Var2 > var_67) {
                var_83[var_402].Var5 = 9;
            }
            if (var_83[var_402].Var1 > var_66 && var_83[var_402].Var2 < var_67) {
                var_83[var_402].Var5 = 1;
            }
            if (var_83[var_402].Var1 < var_66 && var_83[var_402].Var2 < var_67) {
                var_83[var_402].Var5 = 3;
            }
            if (var_83[var_402].Var5 == 2) {
                var_83[var_402].Var33 = 4;
            }
            if (var_83[var_402].Var5 == 8) {
                var_83[var_402].Var33 = 6;
            }
            if (var_83[var_402].Var5 == 4) {
                var_83[var_402].Var33 = 8;
            }
            if (var_83[var_402].Var5 == 6) {
                var_83[var_402].Var33 = 2;
            }
        }
        if (var_2196 == 0) {
            var_83[var_402].Var8 = 1;
        }
        if (var_2196 == 1) {
            var_83[var_402].Var8 = 2;
        }
        if (var_2196 == 2) {
            var_83[var_402].Var8 = 2;
        }
        if (var_2196 == 3) {
            var_83[var_402].Var8 = 2;
        }
        if (var_2195 == 0) {
            var_747 = 1;
            var_750 = 1;
            if (var_2196 == 0) {
                yield func098();
            }
            if (var_2196 == 1) {
                var_672 = var_83[var_673].Var0;
                yield func092();
            }
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            enemy_list = var_83[var_402].Var0;
            yield func626();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = var_403;
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            if (var_2196 == 1 && var_83[var_2819].Var31 != 5) {
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
            }
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            enemy_list = var_83[var_402].Var0;
            if (var_83[var_402].Var0 == 97 && var_83[var_402].Var31 >= 11) {
                enemy_list = var_83[var_402].Var31;
            }
            yield func626();
            if (var_127 != 0 || var_132 != 0) {
                enemy_name = "何者か";
            }
            if (var_119 == 0 && sympathy_id != 166 && var_83[var_402].Var30 != 0) {
                enemy_name = "何者か";
            }
            if (var_2821 == 0) {
                comments_row2 = "" + enemy_name + "に" + var_209 + "のダメージ！";
            }
            if (var_209 == 999) {
                comments_row2 = "" + enemy_name + "に致命的なダメージ！";
            }
            if (var_2821 == 1) {
                comments_row2 = "" + enemy_name + "の傷が埋められた";
            }
            var_198 = 1;
            var_300 = 0;
            yield func047();
        }
        if (var_83[var_402].Var0 == 159 && var_83[var_402].Var20 == 0 && var_2821 == 0) {
            var_1550 = var_83[var_402].Var1;
            var_230 = var_83[var_402].Var2;
            var_768 = 1;
            var_2434 = 1;
            var_2413 = 1;
            yield func536();
            var_2413 = 0;
            var_768 = 0;
            var_2434 = 0;
        }
        if (var_340 == 698) {
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        if (var_83[var_402].Var28 >= 1) {
            var_83[var_402].Var28 = var_83[var_402].Var28 - 1;
        }
        if (var_83[var_402].Var0 == 101 || var_83[var_402].Var0 == 102 || var_83[var_402].Var0 == 103 || var_83[var_402].Var0 == 104) {
            var_2946 = var_83[var_402].Var0;
            var_2947 = var_83[var_402].Var1;
            var_2948 = var_83[var_402].Var2;
            var_2949 = var_83[var_402].Var1 + 1;
            var_2950 = var_83[var_402].Var2 + 1;
            var_2951 = var_83[var_402].Var1 - 1;
            var_2952 = var_83[var_402].Var2 - 1;
        }
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_83[var_402].Var3 <= 0) {
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && var_83[var_402].Var0 == 20) {
                yield func685();
            }
            // No = 2 なので、レクイエムの大迷宮
            if (dangeon_number == 2 && var_83[var_402].Var0 == 132) {
                yield func686();
            }
            // No = 3 なので、ディアボロの試練
            if (dangeon_number == 3 && var_83[var_402].Var0 == 143) {
                yield func687();
            }
            if (dangeon_number == 5 && var_83[var_402].Var16 >= 1000) {
                var_2921 = var_83[var_402].Var0;
                yield func633();
            }
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                var_83[var_402].Var11 = 1;
                yield func337(); // メッセージ関係呼び出し
                var_83[var_402].Var11 = 0;
                if (var_2196 == 0) {
                    var_83[var_402].Var8 = 1;
                }
                if (var_2196 == 1) {
                    var_83[var_402].Var8 = 2;
                }
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_83[var_402].Var31 == 5) {
                if (var_83[var_402].Var0 == 105 || var_83[var_402].Var0 == 106 || var_83[var_402].Var0 == 108 || var_83[var_402].Var0 == 36 || var_83[var_402].Var0 == 107) {
                    if (var_681 == 0) {
                        yield func111();
                    }
                    if (var_681 != 0) {
                        var_684 = 0;
                    }
                }
            }
            var_83[var_402].Var11 = 1;
            if (var_83[var_402].Var27 != 0) {
                var_2954 = var_83[var_402].Var27;
                var_83[var_2954].Var28 = 0;
            }
            var_442 = var_83[var_402].Var1;
            var_443 = var_83[var_402].Var2;
            var_347 = var_83[var_402].Var1;
            var_348 = var_83[var_402].Var2;
            var_83[var_402].Var1 = 0;
            var_83[var_402].Var2 = 0;
            var_83[var_402].Var6 = 0;
            var_83[var_402].Var7 = 0;
            var_83[var_402].Var8 = 0;
            var_83[var_402].Var9 = 0;
            var_83[var_402].Var18 = 0;
            var_83[var_402].Var19 = 0;
            var_83[var_402].Var27 = 0;
            var_83[var_402].Var28 = 0;
            if (var_83[var_402].Var0 == 73 && var_83[var_402].Var20 == 0) {
                var_1550 = var_442;
                var_230 = var_443;
                if (var_77[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0) {
                    var_768 = 1;
                    var_2416 = 1;
                    yield func536();
                    var_768 = 0;
                    var_2416 = 0;
                }
            }
            if (var_114 >= 1 && var_402 == var_114) {
                var_114 = 0;
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && var_83[var_402].Var0 == 20) {
                yield func689();
            }
            if (var_94 == 1 && var_83[var_402].Var0 == 65) {
                yield func688();
            }
            // No = 3 なので、ディアボロの試練
            if (dangeon_number == 3 && var_83[var_402].Var0 == 143) {
                yield func689();
            }
            // No = 2 なので、レクイエムの大迷宮
            if (dangeon_number == 2 && var_83[var_402].Var0 == 132) {
                yield func689();
            }
            if (var_83[var_402].Var0 == 53 && var_2196 != 0) {
                var_3105 = 1;
            }
            if (var_83[var_402].Var20 == 0) {
                if (var_83[var_402].Var0 == 79) {
                    var_2957 = 1;
                    var_2958 = var_83[var_402].Var5;
                }
                if (var_83[var_402].Var0 == 91) {
                    var_2957 = 2;
                }
                if (var_83[var_402].Var0 == 92) {
                    var_2957 = 3;
                }
                if (var_83[var_402].Var0 == 77) {
                    var_2957 = 4;
                }
                if (var_83[var_402].Var0 == 76) {
                    var_2957 = 5;
                }
                if (var_83[var_402].Var0 == 76 || var_83[var_402].Var0 == 77) {
                    if (dangeon_number == 99) {
                        var_2959 = 0;
                        if (var_83[var_402].Var16 == 1) {
                            var_2959 = 1;
                        }
                        if (var_83[var_402].Var16 == 2) {
                            var_2959 = 2;
                        }
                    }
                }
                if (var_83[var_402].Var0 == 163) {
                    var_2538 = var_83[var_402].Var5;
                }
                if (var_83[var_402].Var0 == 6 && var_83[var_402].Var31 != 5) {
                    var_186 = 165;
                    yield func692();
                }
                if (var_83[var_402].Var0 == 87) {
                    var_186 = 164;
                    yield func692();
                }
            }
            yield func676();
            if (var_2196 == 0) {
                yield func340(); // キー入力による選択処理
                enemy_list = var_83[var_402].Var0;
                yield func626();
                var_2956 = var_954;
                if (var_83[var_402].Var39 >= 2) {
                    var_2956 = Math.floor(var_2956 * (var_83[var_402].Var39 + 10) / 10);
                }
                if (var_160 == 1) {
                    var_2956 = Math.floor(var_2956 * 3 / 2);
                }
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                if (var_127 != 0 || var_132 != 0) {
                    enemy_name = "何者か";
                }
                if (var_119 == 0 && sympathy_id != 166 && var_83[var_402].Var30 != 0) {
                    enemy_name = "何者か";
                }
                comments_row1a = "" + enemy_name + "をやっつけた";
                comments_row2a = "" + var_2956 + "の経験値を手に入れた";
                var_2945 = enemy_list;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_568 = var_568 + var_2956;
                yield func680();
                if (var_175 >= 1 || var_176 >= 1) {
                    var_314 = var_402;
                    yield func703();
                }
            }
            if (var_2196 == 1 && var_83[var_673].Var31 == 5 && var_3106 == 0 && var_3107 == 0) {
                var_83[var_673].Var7 = 0;
                yield func340(); // キー入力による選択処理
                var_2571 = var_83[var_402].Var0;
                enemy_list = var_83[var_673].Var0;
                yield func626();
                var_3108 = enemy_name;
                enemy_list = var_83[var_402].Var0;
                yield func626();
                var_2956 = var_954;
                if (var_83[var_402].Var39 >= 2) {
                    var_2956 = Math.floor(var_2956 * (var_83[var_402].Var39 + 10) / 10);
                }
                if (var_160 == 1) {
                    var_2956 = Math.floor(var_2956 * 3 / 2);
                }
                var_3109 = Math.floor(var_2956 / 2);
                if (var_3109 == 0) {
                    var_3109 = 1;
                }
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                if (var_127 != 0 || var_132 != 0) {
                    enemy_name = "何者か";
                }
                if (var_119 == 0 && sympathy_id != 166 && var_83[var_402].Var30 != 0) {
                    enemy_name = "何者か";
                }
                comments_row1a = "" + var_3108 + "は";
                comments_row2a = "" + enemy_name + "をやっつけた";
                var_2945 = enemy_list;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "ディアボロは";
                if (var_83[var_673].Var0 == 36 || var_83[var_673].Var0 == 105 || var_83[var_673].Var0 == 106 || var_83[var_673].Var0 == 107 || var_83[var_673].Var0 == 108) {
                    comments_row1a = "ディアボロ達は";
                }
                comments_row2a = "" + var_3109 + "の経験値を手に入れた";
                var_2945 = enemy_list;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_568 = var_568 + var_3109;
                yield func680();
                var_83[var_673].Var16 = var_83[var_673].Var16 + var_3109;
                if (var_83[var_673].Var0 == 36 || var_83[var_673].Var0 == 105 || var_83[var_673].Var0 == 106 || var_83[var_673].Var0 == 107 || var_83[var_673].Var0 == 108) {
                    yield func683();
                }
                if (var_175 >= 1 || var_176 >= 1) {
                    var_314 = var_402;
                    yield func703();
                }
            }
            if (var_3110 != 0) {
                var_83[var_402].Var7 = 0;
                yield func340(); // キー入力による選択処理
                enemy_list = var_83[var_402].Var0;
                yield func626();
                var_2956 = var_954;
                if (var_83[var_402].Var39 >= 2) {
                    var_2956 = Math.floor(var_2956 * (var_83[var_402].Var39 + 10) / 10);
                }
                if (var_160 == 1) {
                    var_2956 = Math.floor(var_2956 * 3 / 2);
                }
                var_3109 = Math.floor(var_2956 / 2);
                if (var_3109 == 0) {
                    var_3109 = 1;
                }
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "ディアボロは";
                comments_row2a = "" + var_3109 + "の経験値を手に入れた";
                var_2945 = enemy_list;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_568 = var_568 + var_3109;
                yield func680();
                if (var_175 >= 1 || var_176 >= 1) {
                    var_314 = var_402;
                    yield func703();
                }
            }
            if (var_2196 == 1 && var_83[var_673].Var0 != 0 && var_83[var_673].Var31 != 5 && var_83[var_673].Var31 != 4 && var_3105 == 0 && var_3110 == 0 && var_3106 == 0 && var_3107 == 0) {
                var_83[var_673].Var7 = 0;
                var_3111 = 0;
                if (var_83[var_673].Var0 == 113) {
                    if (var_83[var_402].Var0 != 119) {
                        var_3111 = 0;
                    }
                    if (var_83[var_402].Var0 == 119) {
                        var_3111 = 1;
                        yield func340(); // キー入力による選択処理
                        var_83[var_673].Var0 = 114;
                        enemy_list = var_83[var_673].Var0;
                        yield func626();
                        var_83[var_673].Var3 = enemy_hp;
                        yield func094();
                        comments_row1 = comments_row1a;
                        comments_row2 = comments_row2a;
                        comments_row1a = "DIO「なじむ　　実に！　　なじむぞ";
                        comments_row2a = "　　フハフハフハ フハフハ フハフハハ」";
                        var_25_x = var_25[2];
                        var_26_x = var_26[2];
                        var_27_x = var_27[2];
                        yield func050();
                        var_198 = 1;
                        var_300 = 0;
                        yield func047();
                        var_83[var_673].Var21 = 1;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            var_411 = 1;
                            yield func337(); // メッセージ関係呼び出し
                            var_411 = 2;
                            yield func337(); // メッセージ関係呼び出し
                            var_411 = 3;
                            yield func337(); // メッセージ関係呼び出し
                            var_411 = 2;
                            yield func337(); // メッセージ関係呼び出し
                            var_198 = 1;
                            var_300 = 0;
                        }
                        var_411 = 0;
                        var_83[var_673].Var21 = 0;
                        yield func094();
                        comments_row1 = comments_row1a;
                        comments_row2 = comments_row2a;
                        comments_row1a = "DIO「最高に『ハイ！』ってやつだアアアア";
                        comments_row2a = "　　　アハハハハハハハハハハハーッ」";
                        var_25_x = var_25[2];
                        var_26_x = var_26[2];
                        var_27_x = var_27[2];
                        yield func050();
                        var_198 = 1;
                        var_300 = 0;
                        yield func047();
                        for (let cnt5 = 0; cnt5 < 3; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                }
                if (var_3111 == 0) {
                    yield func340(); // キー入力による選択処理
                    var_83[var_673].Var39 = var_83[var_673].Var39 + 1;
                    if (var_83[var_673].Var39 == 1) {
                        var_83[var_673].Var39 = 2;
                    }
                    enemy_list = var_83[var_673].Var0;
                    if (var_83[var_673].Var0 == 97 && var_83[var_673].Var31 >= 11) {
                        enemy_list = var_83[var_673].Var31;
                    }
                    yield func626();
                    var_83[var_673].Var3 = Math.floor(enemy_hp * (var_83[var_673].Var39 + 10) / 10);
                    if (var_83[var_673].Var3 >= 999) {
                        var_83[var_673].Var3 = 999;
                    }
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
            
                    DSPLAY(audio_id = 142);
                    if (var_127 != 0 || var_132 != 0) {
                        enemy_name = "何者か";
                    }
                    comments_row1a = "" + enemy_name + "は";
                    comments_row2a = "レベルが上がった！";
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    if (var_175 >= 1 || var_176 >= 1) {
                        var_314 = var_402;
                        yield func703();
                    }
                }
            }
            if (var_2196 == 1) {
                var_83[var_673].Var28 = 0;
            }
            var_82[var_347][var_348] = 0;
            var_83[var_402].Var0 = 0;
            var_83[var_402].Var9 = 0;
            var_83[var_402].Var18 = 0;
            if (var_2957 >= 1) {
                yield func690();
            }
            if (var_2538 >= 1) {
                yield func691();
            }
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        if (var_83[var_402].Var0 == 33 && var_2196 == 0) {
            var_83[var_402].Var0 = 34;
            var_83[var_402].Var31 = 1;
        }
        if (var_83[var_402].Var20 == 0 && var_83[var_402].Var12 == 0 && var_83[var_402].Var13 == 0 && var_83[var_402].Var17 == 0 && var_163 == 0 && var_123 == 0 && var_151 == 0) {
            if (var_83[var_402].Var0 == 121 && var_83[var_402].Var29 == 1) {
                var_314 = var_402;
                yield func658();
            }
            if (var_83[var_402].Var0 == 6 || var_83[var_402].Var0 == 44 || var_83[var_402].Var0 == 14 || var_83[var_402].Var0 == 120 || var_83[var_402].Var0 == 133 || var_83[var_402].Var0 == 118 || var_83[var_402].Var0 == 84) {
                var_314 = var_402;
                yield func658();
            }
            if (var_83[var_402].Var0 == 129 || var_83[var_402].Var0 == 161 || var_83[var_402].Var0 == 137 || var_83[var_402].Var0 == 143 || var_83[var_402].Var0 == 109) {
                var_314 = var_402;
                yield func658();
            }
            if (var_83[var_402].Var0 == 153) {
                if (var_2196 == 0) {
                    var_314 = var_402;
                    yield func658();
                }
            }
            if (var_2937 == 1 && var_83[var_402].Var0 == 61) {
                if (var_2196 == 0) {
                    var_314 = var_402;
                    yield func658();
                }
            }
            if (var_83[var_402].Var0 == 116 && var_2196 == 0) {
                var_314 = var_402;
                yield func657();
            }
            if (var_83[var_402].Var0 == 17 && var_83[var_402].Var3 < 2) {
                var_2890 = var_402;
                yield func698();
            }
            if (var_83[var_402].Var0 == 164 || var_83[var_402].Var0 == 165) {
                var_1073 = rnd(3);
                if (var_1073 == 0) {
                    var_2965 = 1;
                    var_314 = var_402;
                    yield func669();
                }
            }
        }
        if (var_83[var_402].Var0 == 132 || var_83[var_402].Var0 == 143) {
            var_314 = var_402;
            yield func659();
        }
        var_83[var_402].Var8 = 0;
        if (var_83[var_402].Var13 != 0) {
            var_460 = var_402;
            yield func024();
        }
        if (var_83[var_402].Var12 == 99) {
            var_83[var_402].Var12 = 0;
        }
        if (var_2946 == 101 || var_2946 == 102 || var_2946 == 103 || var_2946 == 104) {
            if (var_83[var_402].Var20 == 0 && var_2217 == 0 && var_2196 == 0) {
                if (var_83[var_402].Var12 != 1 && var_83[var_402].Var12 != 2 && var_83[var_402].Var12 != 3 && var_83[var_402].Var12 != 4 && var_83[var_402].Var12 != 5) {
                    yield func702();
                }
            }
        }
        var_750 = 0;
        if (var_3105 == 1 && var_2196 == 1) {
            var_3101 = var_402;
            var_402 = var_673;
            var_3110 = var_402;
            var_3105 = 0;
            yield func696();
            var_3110 = 0;
            var_402 = var_3101;
        }
        if (var_83[var_402].Var0 > 0 && var_83[var_402].Var4 == 6) {
            var_83[var_402].Var5 = var_2942;
        }
        if (var_83[var_402].Var0 == 164 || var_83[var_402].Var0 == 165) {
            var_83[var_402].Var5 = var_2942;
        }
        var_2965 = 0;
        return;
    });
}
// トニオさんの店 レストラン・トラサルディーの設定
function func706(this: any) {
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
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
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
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "レストラン・トラサルディーへようこそ！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func136();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_210 = 1;
        }
        return;
    });
}
function func707(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(707);
        var_243 = 0;
        var_1009 = 0;
        var_449 = 0;
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_447 = 0;
            for (let cnt2 = 0; cnt2 < var_31; ++cnt2) {
                if (var_72[var_447][var_449] == 1 && var_77[var_447][var_449] > 0) {
                    var_3115 = var_77[var_447][var_449];
                    if (var_78[var_3115].Var11 == 0) {
                        belongings_item_list = var_78[var_3115].Var0;
                        yield func492(); // アイテムリスト呼び出し
                        var_2476 = Math.floor(buying_price / 2);
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
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (var_486[var_485][var_484].Var0 > 0 && var_486[var_485][var_484].Var11 == 0) {
                                belongings_item_list = var_486[var_485][var_484].Var0;
                                yield func492(); // アイテムリスト呼び出し
                                var_2476 = Math.floor(buying_price / 2);
                                var_482 = 0;
                                var_482 = (var_486[var_485][var_484].Var3 + var_486[var_485][var_484].Var4) * 50;
                                if (var_486[var_485][var_484].Var19 > 1) {
                                    var_482 = var_486[var_485][var_484].Var19 * 500 + var_482;
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
        payment_amount = 0;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_480].Var11 == 1) {
                belongings_item_list = var_233[var_480].Var0;
                yield func492(); // アイテムリスト呼び出し
                var_482 = 0;
                var_482 = (var_233[var_480].Var3 + var_233[var_480].Var4) * 50;
                if (var_233[var_480].Var0 != 800) {
                    var_482 = var_233[var_480].Var7 * 100 + var_482;
                }
                if (var_233[var_480].Var19 > 1) {
                    var_482 = var_233[var_480].Var19 * 500 + var_482;
                }
                payment_amount = payment_amount + buying_price + var_482;
            }
            if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
                var_484 = 1;
                var_485 = var_233[var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_486[var_485][var_484].Var0 > 0 && var_486[var_485][var_484].Var11 == 1) {
                        belongings_item_list = var_486[var_485][var_484].Var0;
                        yield func492(); // アイテムリスト呼び出し
                        var_482 = 0;
                        var_482 = (var_486[var_485][var_484].Var3 + var_486[var_485][var_484].Var4) * 50;
                        if (var_486[var_485][var_484].Var19 > 1) {
                            var_482 = var_486[var_485][var_484].Var19 * 500 + var_482;
                        }
                        payment_amount = payment_amount + buying_price + var_482;
                    }
                    var_484 = var_484 + 1;
                }
            }
            var_480 = var_480 + 1;
        }
        var_449 = 0;
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_447 = 0;
            for (let cnt2 = 0; cnt2 < var_31; ++cnt2) {
                if (var_77[var_447][var_449] > 0 && var_72[var_447][var_449] == 0) {
                    var_3115 = var_77[var_447][var_449];
                    if (var_78[var_3115].Var11 == 1) {
                        belongings_item_list = var_78[var_3115].Var0;
                        yield func492(); // アイテムリスト呼び出し
                        var_482 = 0;
                        var_482 = (var_78[var_3115].Var3 + var_78[var_3115].Var4) * 50;
                        if (var_78[var_3115].Var0 != 800) {
                            var_482 = var_78[var_3115].Var7 * 100 + var_482;
                        }
                        if (var_78[var_3115].Var19 > 1) {
                            var_482 = var_78[var_3115].Var19 * 500 + var_482;
                        }
                        payment_amount = payment_amount + buying_price + var_482;
                    }
                    if (var_78[var_3115].Var0 >= 800 && var_78[var_3115].Var0 < 900) {
                        var_484 = 1;
                        var_485 = var_78[var_3115].Var6;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (var_486[var_485][var_484].Var0 > 0 && var_486[var_485][var_484].Var11 == 1) {
                                belongings_item_list = var_486[var_485][var_484].Var0;
                                yield func492(); // アイテムリスト呼び出し
                                var_482 = 0;
                                var_482 = (var_486[var_485][var_484].Var3 + var_486[var_485][var_484].Var4) * 50;
                                if (var_486[var_485][var_484].Var19 > 1) {
                                    var_482 = var_486[var_485][var_484].Var19 * 500 + var_482;
                                }
                                payment_amount = payment_amount + buying_price + var_482;
                            }
                            var_484 = var_484 + 1;
                        }
                    }
                }
                var_447 = var_447 + 1;
            }
            var_449 = var_449 + 1;
        }
        payment_amount = payment_amount + count_buying_price;
        var_3116 = var_82[var_1000][var_1001];
        if (var_83[var_3116].Var12 == 1 || var_83[var_3116].Var13 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "・・・・・・・・";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_217 = 1;
            yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        if (var_1009 > 0) {
            yield func708();
            return;
        }
        if (payment_amount > 0) {
            yield func709();
            return;
        }
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "レストラン・トラサルディーへようこそ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func708(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(708);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "店内に置いたアイテムを";
        comments_row2 = "" + var_1009 + "G で引き取りマス";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1202 = 1;
        var_3117 = 1;
        yield func712();
        return;
    });
}
function func709(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(709);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "お買い物金額の合計は";
        comments_row2 = "" + payment_amount + "G になりマス";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1202 = 1;
        var_3117 = 2;
        yield func710();
        return;
    });
}
function func710(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(710);
        var_3118 = 1;
        var_515 = 19;
        var_516 = 45;
        yield func711();
    });
}
function func711(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(711);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (var_259 == 1 && var_3118 == 1) {
            var_516 = var_516 + 19;
            var_3118 = 0;
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_255 == 1 && var_3118 == 0) {
            var_516 = var_516 - 19;
            var_3118 = 1;
            yield func337(); // メッセージ関係呼び出し
        }
        if (key_Z_on == 1 || key_A_on == 1) {
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
        if (key_X_on == 1) {
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
function func712(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(712);
        var_3118 = 1;
        var_515 = 19;
        var_516 = 45;
        yield func713();
    });
}
function func713(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(713);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (var_259 == 1 && var_3118 == 1) {
            var_516 = var_516 + 19;
            var_3118 = 0;
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_255 == 1 && var_3118 == 0) {
            var_516 = var_516 - 19;
            var_3118 = 1;
            yield func337(); // メッセージ関係呼び出し
        }
        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_3118 == 1) {
                yield func051();
                yield func715();
                return;
            }
            if (var_3118 == 0 && payment_amount > 0) {
                yield func051();
                var_198 = 0;
                var_1202 = 0;
                for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
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
        if (key_X_on == 1 && payment_amount > 0) {
            yield func051();
            var_198 = 0;
            var_1202 = 0;
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func709();
            return;
        }
        if (key_X_on == 1) {
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
// 店での購入時のメッセージ表示
function func714(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(714);
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
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
        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
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
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        return;
    });
}
function func715(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(715);
        wallet = wallet + var_1009;
        if (wallet > 999999) {
            wallet = 999999;
        }
        var_1009 = 0;
        var_449 = 0;
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_447 = 0;
            for (let cnt2 = 0; cnt2 < var_31; ++cnt2) {
                if (var_72[var_447][var_449] == 1 && var_77[var_447][var_449] > 0) {
                    var_3115 = var_77[var_447][var_449];
                    if (var_78[var_3115].Var0 > 1) {
                        var_78[var_3115].Var11 = 1;
                    }
                    if (var_78[var_3115].Var0 >= 800 && var_78[var_3115].Var0 < 900) {
                        var_484 = 1;
                        var_485 = var_78[var_3115].Var6;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (var_486[var_485][var_484].Var0 > 1) {
                                var_486[var_485][var_484].Var11 = 1;
                            }
                            var_484 = var_484 + 1;
                        }
                    }
                }
                var_447 = var_447 + 1;
            }
            var_449 = var_449 + 1;
        }
        DSPLAY(audio_id = 139);
        yield func718();
        return;
    });
}
function func716(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(716);
        var_3119 = wallet;
        wallet = wallet - payment_amount;
        if (wallet < 0) {
            wallet = var_3119;
            yield func719();
            return;
        }
        payment_amount = 0;
        yield func720();
        var_106 = 0;
        count_buying_price = 0;
        DSPLAY(audio_id = 139);
        yield func718();
        return;
    });
}
function func717(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(717);
        var_198 = 0;
        var_300 = 0;
        var_1202 = 0;
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func718(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(718);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ありがとうございました";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        var_1202 = 0;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (payment_amount > 0) {
            yield func709();
            return;
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func719(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(719);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "お金が足りませんヨ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        var_1202 = 0;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func720(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(720);
        var_480 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_480].Var11 == 1) {
                var_233[var_480].Var11 = 0;
            }
            if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
                var_484 = 1;
                var_485 = var_233[var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_486[var_485][var_484].Var11 == 1) {
                        var_486[var_485][var_484].Var11 = 0;
                    }
                    var_484 = var_484 + 1;
                }
            }
            var_480 = var_480 + 1;
        }
        var_449 = 0;
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_447 = 0;
            for (let cnt2 = 0; cnt2 < var_31; ++cnt2) {
                if (var_77[var_447][var_449] > 0 && var_72[var_447][var_449] == 0) {
                    var_3115 = var_77[var_447][var_449];
                    if (var_78[var_3115].Var11 == 1) {
                        var_78[var_3115].Var11 = 0;
                    }
                    if (var_78[var_3115].Var0 >= 800 && var_78[var_3115].Var0 < 900) {
                        var_484 = 1;
                        var_485 = var_78[var_3115].Var6;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (var_486[var_485][var_484].Var11 == 1) {
                                var_486[var_485][var_484].Var11 = 0;
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
function func721(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(721);
        var_480 = 1;
        var_1008 = 0;
        if (count_buying_price >= 1) {
            var_1008 = 1;
        }
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_480].Var11 == 1) {
                var_1008 = var_1008 + 1;
            }
            if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
                var_484 = 1;
                var_485 = var_233[var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_486[var_485][var_484].Var0 > 0 && var_486[var_485][var_484].Var11 == 1) {
                        var_1008 = var_1008 + 1;
                    }
                    var_484 = var_484 + 1;
                }
            }
            var_480 = var_480 + 1;
        }
        var_449 = 0;
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_447 = 0;
            for (let cnt2 = 0; cnt2 < var_31; ++cnt2) {
                if (var_77[var_447][var_449] > 0 && var_72[var_447][var_449] == 0) {
                    var_3115 = var_77[var_447][var_449];
                    if (var_78[var_3115].Var11 == 1) {
                        var_1008 = var_1008 + 1;
                    }
                    if (var_78[var_3115].Var0 >= 800 && var_78[var_3115].Var0 < 900) {
                        var_484 = 1;
                        var_485 = var_78[var_3115].Var6;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (var_486[var_485][var_484].Var0 > 0 && var_486[var_485][var_484].Var11 == 1) {
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
function func722(this: any) {
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
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
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

        DSPLAY(audio_id = 150);
        yield func132();
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ドロボーーー！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[3];
        var_26_x = var_26[3];
        var_27_x = var_27[3];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ただじゃあおきませンッ！";
        comments_row2a = "";
        var_25_x = var_25[3];
        var_26_x = var_26[3];
        var_27_x = var_27[3];
        yield func047();
        yield func050();
        var_198 = 1;
        var_300 = 0;
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            yield func556();
        }
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func723(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(723);
        var_862 = dim(length1 = 1000, length2 = 4, length3 = null, length4 = null);
        var_480 = 1;
        var_3121 = 0;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_480].Var0 != 0) {
                var_3121++;
                var_3122 = var_233[var_480].Var0;
                var_862[var_3122][0] = 1;
                var_233[var_480].Var14 = 1;
            }
            if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
                var_484 = 1;
                var_485 = var_233[var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_486[var_485][var_484].Var0 != 0) {
                        var_3121++;
                        var_3122 = var_486[var_485][var_484].Var0;
                        var_862[var_3122][0] = 1;
                        var_486[var_485][var_484].Var14 = 1;
                    }
                    var_484 = var_484 + 1;
                }
            }
            var_480 = var_480 + 1;
        }
        return;
    });
}
function func724(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(724);
        var_3123 = 0;
        var_3124 = 1;
        for (let cnt1 = 0; cnt1 < 299; ++cnt1) {
            if (var_78[var_3124].Var0 == 0) {
                var_854 = var_3124;
                var_3123 = 1;
                break;
            }
            var_3124++;
        }
        if (var_3123 == 1) {
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                var_78[var_854]["Var" + cnt2] = 0;
            }
            if (var_336 < var_854) {
                var_336 = var_854;
            }
            var_194 = var_854;
        }
        return;
    });
}
function func725(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(725);
        var_243 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_3125 = rnd(5);
        if (var_3125 == 0) {
            comments_row1 = "…おまえ｢パーマン｣知らねーのか？";
            comments_row2 = "";
        }
        if (var_3125 == 1) {
            comments_row1 = "この人形の｢スタンド｣の名は";
            comments_row2 = "『ＳＵＲＦＡＣＥ（うわっ面）』…";
        }
        if (var_3125 == 2) {
            comments_row1 = "おれの体力はオマエの";
            comments_row2 = "最大体力と同じだぜ。";
        }
        if (var_3125 == 3) {
            comments_row1 = "同じ価値観を持った者同士…";
            comments_row2 = "それが『仲間』っつーもんだ";
        }
        if (var_3125 == 4) {
            comments_row1 = "おれの防御力はオマエの";
            comments_row2 = "防御力と同じだぜ。";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func726(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(726);
        var_243 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_3125 = rnd(7);
        if (var_3125 == 0) {
            comments_row1 = "ぶばはははははあ";
            comments_row2 = "";
        }
        if (var_3125 == 1) {
            comments_row1 = "バギィイ――ッ";
            comments_row2 = "";
        }
        if (var_3125 == 2) {
            comments_row1 = "ぶきィィィーッ";
            comments_row2 = "";
        }
        if (var_3125 == 3) {
            comments_row1 = "ノシェーーーッ";
            comments_row2 = "";
        }
        if (var_3125 == 4) {
            comments_row1 = "アギ　　アギ";
            comments_row2 = "　　アギッ　アギッ　アギィィ―――ッ";
        }
        if (var_3125 == 5) {
            comments_row1 = "ウケッウケッウケッ";
            comments_row2 = "ケケケケケケ――――――ッ";
        }
        if (var_3125 == 6) {
            comments_row1 = "ガルルルルーッ";
            comments_row2 = "";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func727(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(727);
        var_243 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_3125 = rnd(2);
        if (var_3125 == 0) {
            comments_row1 = "キュルキュルキュルキュル";
            comments_row2 = "";
        }
        if (var_3125 == 1) {
            comments_row1 = "ギャルギャルギャルギャル";
            comments_row2 = "";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func728(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(728);
        var_243 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_3125 = rnd(5);
        if (var_3125 == 0) {
            comments_row1 = "こんなところ　はやく出よう･･･";
            comments_row2 = "";
        }
        if (var_3125 == 1) {
            comments_row1 = "こんなところ　はやく出よう･･･";
            comments_row2 = "";
        }
        if (var_3125 == 2) {
            comments_row1 = "こんなところ　はやく出よう･･･";
            comments_row2 = "";
        }
        if (var_3125 == 3) {
            comments_row1 = "こんなところ　はやく出よう･･･";
            comments_row2 = "";
        }
        if (var_3125 == 4) {
            comments_row1 = "こんなところ　はやく出よう･･･";
            comments_row2 = "";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func729(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(729);
        enemy_list = var_83[var_3072].Var0;
        yield func626();
        var_1331 = enemy_hp;
        if (var_83[var_3072].Var39 >= 2) {
            var_1331 = Math.floor(enemy_hp * (var_83[var_3072].Var39 + 10) / 10);
            if (var_1331 >= 999) {
                var_1331 = 999;
            }
        }
        var_1332 = Math.floor(var_83[var_3072].Var3 * 100 / var_1331);
        return;
    });
}
function func730(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(730);
        var_243 = 0;
        var_3072 = var_314;
        if (var_83[var_3072].Var31 == 5) {
            yield func733();
            return;
        }
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "おれぁ おせっかい焼きのｽﾋﾟｰﾄﾞﾜｺﾞﾝ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "あまちゃんのあんたが好きだから";
        comments_row2a = "くっついて行ってもいいぜ！";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3126 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func731(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(731);
        var_83[var_3072].Var31 = 5;
        var_83[var_3072].Var14 = 0;
        var_1033 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｽﾋﾟｰﾄﾞﾜｺﾞﾝが仲間になった！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func125();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "よろしくなッ！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func732(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(732);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｽﾋﾟｰﾄﾞﾜｺﾞﾝはｸｰﾙに去るぜ";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func733(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(733);
        yield func729();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_3125 = rnd(3);
        if (var_2571 == 0) {
            var_3125 = rnd(2);
        }
        if (var_3125 == 0) {
            if (var_1332 < 10) {
                comments_row1 = "うう…このキズは…急所だ…！";
                comments_row2 = "";
            }
            if (var_1332 >= 10 && var_1332 < 30) {
                comments_row1 = "やめりゃあよかった!こんなﾀﾌｶﾞｲに";
                comments_row2 = "ケンカふっかけるのはよォ！";
            }
            if (var_1332 >= 30 && var_1332 < 60) {
                comments_row1 = "こんなもんカスリ傷だぜッ！";
                comments_row2 = "…イ、イデーイデー！つ…杖！";
            }
            if (var_1332 >= 60 && var_1332 < 80) {
                comments_row1 = "ここまで首をつっこんだんだ！";
                comments_row2 = "黙っているのは性分じゃねえからな";
            }
            if (var_1332 >= 80 && var_1332 < 100) {
                comments_row1 = "俺は物を盗むが";
                comments_row2 = "こいつらは命を盗む！許せねえ！";
            }
            if (var_1332 >= 100) {
                comments_row1 = "この紳士に手を出すことは…";
                comments_row2 = "このスピードワゴンが許さねえ！";
            }
        }
        if (var_3125 == 1) {
            var_3088 = var_83[var_3072].Var16;
            var_3089 = var_83[var_3072].Var39;
            yield func682();
            if (var_3073 < 99999) {
                comments_row1 = "あと" + var_3073 + "くらいで";
                comments_row2 = "もっと強くなれる気がするぜ！";
            }
            if (var_3073 >= 99999) {
                comments_row1 = "おれの強さはこれが限界だ！";
                comments_row2 = "";
            }
            yield func125();
        }
        if (var_3125 == 2) {
            enemy_list = var_2571;
            yield func626();
            var_3125 = rnd(3);
            if (var_3125 == 0) {
                comments_row1 = "" + enemy_name + "は死んだッ！";
                comments_row2 = "大げさかもしれんが世界は救われたッ！";
            }
            if (var_3125 == 1) {
                comments_row1 = "" + enemy_name + "は臭えーッ！";
                comments_row2 = "ゲロ以下のニオイがﾌﾟﾝﾌﾟﾝするぜーッ！";
            }
            if (var_3125 == 2) {
                comments_row1 = "気をつけな！";
                comments_row2 = "" + enemy_name + "はこすずるいぜ！";
            }
        }
        if (var_83[var_3072].Var3 == 1) {
            comments_row1 = "礼は　戦いが終わって";
            comments_row2 = "生きのびてから言えってんだ…";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func094();
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func734(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(734);
        var_243 = 0;
        var_3072 = var_314;
        enemy_list = var_83[var_3072].Var0;
        yield func626();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + enemy_name + "「・・・・」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func735(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(735);
        var_243 = 0;
        var_3072 = var_314;
        enemy_list = var_83[var_3072].Var0;
        yield func626();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + enemy_name + "は";
        comments_row2 = "話せる状態ではないようだ…";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func736(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(736);
        var_374 = 1;
        var_772 = 1;
        var_777 = 1;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_777++;
        }
        var_777 = 0;
        var_772 = 0;
        var_1201 = 1;
        yield func737();
    });
}
function func737(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(737);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (var_259 == 1 || key_Z_on == 1 || key_X_on == 1 || key_A_on == 1 || key_C_on == 1) {
            var_1201 = 0;
            var_374 = 1;
            var_772 = 1;
            var_773 = 7;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_773++;
            }
            var_773 = 0;
            var_772 = 0;
            var_374 = 0;
            var_199 = 2;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        yield func737();
        return;
    });
}
function func738(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(738);
        var_243 = 0;
        var_3072 = var_314;
        if (var_83[var_3072].Var31 == 5) {
            yield func741();
            return;
        }
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「イギー」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "（しょうがないからついて行ってやるか）";
        comments_row2a = "と考えているようだ。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3127 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func739(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(739);
        var_83[var_3072].Var31 = 5;
        var_83[var_3072].Var14 = 0;
        var_1033 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "イギーが仲間になった！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func128();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "（もたもたするなッ！マヌケ！！）";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func740(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(740);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「フン！」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func741(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(741);
        yield func729();
        var_3128 = var_83[var_3072].Var1;
        var_3129 = var_83[var_3072].Var2;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_3130 = 0;
        var_3125 = rnd(4);
        if (var_2571 == 0) {
            var_3125 = rnd(3);
        }
        if (var_3125 == 0) {
            if (var_180 == 0 && var_73[var_3128][var_3129] == 0 && var_80[var_3128][var_3129] == 0 && var_77[var_3128][var_3129] == 0) {
                comments_row1 = "ここに砂のDIOを潜ませてやろうか？";
                comments_row2 = "";
                var_3130 = 1;
            }
            if (var_3130 == 0) {
                var_3125 = rnd(3);
                if (var_2571 == 0) {
                    var_3125 = rnd(2);
                }
                var_3125 = var_3125 + 1;
            }
        }
        if (var_3125 == 1) {
            if (var_1332 < 10) {
                comments_row1 = "(ガフッ…ググ…ニヤリ)";
                comments_row2 = "";
            }
            if (var_1332 >= 10 && var_1332 < 30) {
                comments_row1 = "(な…なんのトラブルもない人生を送る";
                comments_row2 = "ハズだったのに…ミスったぜ…)";
            }
            if (var_1332 >= 30 && var_1332 < 60) {
                comments_row1 = "(クソー、手加減なしの凶暴なヤツだ…)";
                comments_row2 = "";
            }
            if (var_1332 >= 60 && var_1332 < 80) {
                comments_row1 = "(やれやれ…犬好きは見殺しには";
                comments_row2 = "できねーぜッ！)";
            }
            if (var_1332 >= 80 && var_1332 < 100) {
                comments_row1 = "(うるせーな、犬の俺に聞くな！)";
                comments_row2 = "";
            }
            if (var_1332 >= 100) {
                comments_row1 = "(くるなら来いッ！ブッ殺してやる！)";
                comments_row2 = "";
            }
        }
        if (var_3125 == 2) {
            var_3088 = var_83[var_3072].Var16;
            var_3089 = var_83[var_3072].Var39;
            yield func682();
            if (var_3073 < 99999) {
                comments_row1 = "(あと" + var_3073 + "くらいで";
                comments_row2 = "もっと強くなれる気がするぜ！)";
            }
            if (var_3073 >= 99999) {
                comments_row1 = "(おれの強さはこれが限界だ！)";
                comments_row2 = "";
            }
            yield func128();
        }
        if (var_3125 == 3) {
            enemy_list = var_2571;
            yield func626();
            var_3125 = rnd(3);
            if (var_3125 == 0) {
                comments_row1 = "や…やった、やっつけたぞ";
                comments_row2 = "" + enemy_name + "め…";
            }
            if (var_3125 == 1) {
                comments_row1 = "かかってきやがれ";
                comments_row2 = "" + enemy_name + "め！";
            }
            if (var_3125 == 2) {
                comments_row1 = "やり～！" + enemy_name + "め";
                comments_row2 = "頭悪いぜッ！";
            }
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func094();
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        if (var_3130 == 0) {
            var_198 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3131 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func742(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(742);
        var_180 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｲｷﾞｰは足元に砂のDIOを潜ませた。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        var_768 = 1;
        var_1550 = var_3128;
        var_230 = var_3129;
        var_2419 = 1;
        yield func536();
        var_2419 = 0;
        var_768 = 0;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func743(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(743);
        var_243 = 0;
        var_3072 = var_314;
        if (var_83[var_3072].Var31 == 5) {
            yield func746();
            return;
        }
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "わたしはツェペリ男爵だ。";
        comments_row2 = "勇気だけでは勝てんよォ――";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "そして私は味方だ。";
        comments_row2a = "ディアボロ君。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3132 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func744(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(744);
        var_83[var_3072].Var31 = 5;
        var_83[var_3072].Var14 = 0;
        var_1033 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾂｪﾍﾟﾘさんが仲間になった！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func124();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "君は｢仙道｣を学ばなければならんッ！";
        comments_row2a = "さもないと死ぬッ！";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func745(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(745);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ハブショッ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func746(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(746);
        yield func729();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_3133 = 0;
        var_3125 = rnd(4);
        if (var_2571 == 0) {
            var_3125 = rnd(3);
        }
        if (var_3125 == 0) {
            if (var_130 == 0) {
                comments_row1 = "軽い波紋を作れるようにしてやろうか？";
                comments_row2 = "";
                var_3133 = 1;
            }
            if (var_130 != 0) {
                var_3125 = rnd(3);
                if (var_2571 == 0) {
                    var_3125 = rnd(2);
                }
                var_3125 = var_3125 + 1;
            }
        }
        if (var_3125 == 1) {
            if (var_1332 < 10) {
                comments_row1 = "ま…まるで親友と息子を同時に";
                comments_row2 = "持ったような気持ちだぞ…";
            }
            if (var_1332 >= 10 && var_1332 < 30) {
                comments_row1 = "ついに　ついにきたか";
                comments_row2 = "あの予言の時が…";
            }
            if (var_1332 >= 30 && var_1332 < 60) {
                comments_row1 = "やれやれ…こいつらの魂を";
                comments_row2 = "解き放つのは骨が折れそうじゃわい";
            }
            if (var_1332 >= 60 && var_1332 < 80) {
                comments_row1 = "戦いの思考２！勇気とは怖さを知る事！";
                comments_row2 = "恐怖を我が物とすることじゃあッ！";
            }
            if (var_1332 >= 80 && var_1332 < 100) {
                comments_row1 = "戦いの思考１！相手の立場になって";
                comments_row2 = "考える…これは大事じゃぞ！";
            }
            if (var_1332 >= 100) {
                comments_row1 = "ゆくぞディアボロ君！";
                comments_row2 = "ところでコルク抜きもってなぁい？";
            }
        }
        if (var_3125 == 2) {
            var_3088 = var_83[var_3072].Var16;
            var_3089 = var_83[var_3072].Var39;
            yield func682();
            if (var_3073 < 99999) {
                comments_row1 = "あと" + var_3073 + "くらいで";
                comments_row2 = "もっと強くなれるだろう";
            }
            if (var_3073 >= 99999) {
                comments_row1 = "私の強さはこれが限界のようだ。";
                comments_row2 = "";
            }
            yield func124();
        }
        if (var_3125 == 3) {
            enemy_list = var_2571;
            yield func626();
            var_3125 = rnd(3);
            if (var_3125 == 0) {
                comments_row1 = "" + enemy_name + "なんぞ";
                comments_row2 = "ノミと同類よォー！";
            }
            if (var_3125 == 1) {
                comments_row1 = "波紋エネルギーをぶつければ";
                comments_row2 = "吸血鬼どもは砕け散るッ！！";
            }
            if (var_3125 == 2) {
                comments_row1 = "どうだディアボロ君";
                comments_row2 = "これが「仙道」だ！";
            }
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func094();
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        if (var_3133 == 0) {
            var_198 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3134 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func747(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(747);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "パウッ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        var_742 = 1;
        var_83[var_3072].Var7 = 1;
        var_271 = 1;
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            if (cnt1 == 3) {
                var_1514 = 1;
                var_747 = 1;
                var_389 = 2;
            }
            if (cnt1 >= 3) {
                var_1514++;
            }
        }
        var_1514 = 0;
        var_271 = 0;
        var_83[var_3072].Var7 = 0;
        var_389 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_3135 = rnd(2);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_3135 == 0) {
            comments_row1 = "ちょいとミスった";
            comments_row2 = "指がスベっちゃった　いやごめん！";
            var_211 = Math.floor(var_211 / 2) + 1;
        }
        if (var_3135 == 1) {
            comments_row1 = "しばらく呼吸はできん……";
            comments_row2 = "が……心配はいらん";
            var_125 = 1;
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func094();
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func748(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(748);
        var_243 = 0;
        var_3072 = var_314;
        if (var_181 == 1) {
            yield func750();
            return;
        }
        if (var_83[var_3072].Var31 == 5) {
            yield func752();
            return;
        }
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "あっ！兄貴ィ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "おれも連れてってくれよ！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3136 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func749(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(749);
        var_181 = 1;
        var_243 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_747 = 1;
        yield func091();
        var_2937 = 1;
        var_455 = var_347;
        var_456 = var_348;
        yield func660();
        var_2937 = 0;
        var_347 = var_1894;
        var_348 = var_1895;
        var_243 = 0;
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func750(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(750);
        var_181 = 0;
        var_83[var_3072].Var31 = 5;
        var_83[var_3072].Var14 = 0;
        var_1033 = 1;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "な！？";
        comments_row2 = "なんでイキナリ殴るんだよォ――";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "はッ！";
        comments_row2a = "・・・そ、そうか！";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "兄貴はオレの事を思って殴ったんだね？";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "さすが兄貴だあッ！";
        comments_row2a = "どこまでも ついてきますぜッ！";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func126();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func751(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(751);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "そッ！　そんなッ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func752(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(752);
        yield func729();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_3130 = 0;
        var_3125 = rnd(4);
        if (var_2571 == 0) {
            var_3125 = rnd(3);
        }
        if (var_3125 == 0) {
            if (var_191 == 0) {
                comments_row1 = "兄貴ィ！";
                comments_row2 = "釣りでもしてみますかい？";
                var_3130 = 1;
            }
            if (var_191 != 0) {
                comments_row1 = "また釣りかい？";
                comments_row2 = "少し休ませてくれよ…";
            }
        }
        if (var_3125 == 1) {
            if (var_1332 < 10) {
                comments_row1 = "ゴメンよ兄貴…";
                comments_row2 = "俺、やっぱ足手まといだったなぁ…";
            }
            if (var_1332 >= 10 && var_1332 < 30) {
                comments_row1 = "うわぁぁん！";
                comments_row2 = "い、痛ぇーーー！";
            }
            if (var_1332 >= 30 && var_1332 < 60) {
                comments_row1 = "兄貴ィ～、痛ェよ～";
                comments_row2 = "回復してくれよォ～";
            }
            if (var_1332 >= 60 && var_1332 < 80) {
                comments_row1 = "兄貴ィ～…あ、あてにしねーでくれよ";
                comments_row2 = "俺なんかの勘をよォー";
            }
            if (var_1332 >= 80 && var_1332 < 100) {
                comments_row1 = "あ、兄貴ィ～";
                comments_row2 = "本当に行くのかい？";
            }
            if (var_1332 >= 100) {
                comments_row1 = "ブッ殺してやるッ！！";
                comments_row2 = "";
            }
        }
        if (var_3125 == 2) {
            var_3088 = var_83[var_3072].Var16;
            var_3089 = var_83[var_3072].Var39;
            yield func682();
            if (var_3073 < 99999) {
                comments_row1 = "あと" + var_3073 + "くらいで";
                comments_row2 = "もっと強くなれるよ兄貴ィッ！";
            }
            if (var_3073 >= 99999) {
                comments_row1 = "俺の強さはこれが限界だァ～";
                comments_row2 = "";
            }
            yield func126();
        }
        if (var_3125 == 3) {
            enemy_list = var_2571;
            yield func626();
            var_3125 = rnd(2);
            if (var_3125 == 0) {
                comments_row1 = "" + enemy_name + "を";
                comments_row2 = "｢ブッ殺した｣！";
            }
            if (var_3125 == 1) {
                comments_row1 = "俺でも何とか";
                comments_row2 = "" + enemy_name + "を倒せたぜ！";
            }
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func094();
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        if (var_3130 == 0) {
            var_198 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3137 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func753(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(753);
        var_243 = 0;
        var_3072 = var_314;
        yield func729();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_3130 = 0;
        var_3125 = rnd(4);
        if (var_2571 == 0) {
            var_3125 = rnd(3);
        }
        if (var_3125 == 0) {
            if (var_191 == 0) {
                comments_row1 = "兄貴ィ！";
                comments_row2 = "釣りでもしてみますかい？";
                var_3130 = 1;
            }
            if (var_191 != 0) {
                comments_row1 = "また釣りかい？";
                comments_row2 = "少し休ませてくれよ…";
            }
        }
        if (var_3125 == 1) {
            if (var_1332 < 10) {
                comments_row1 = "落ちてくだけるのはウヒャハハハ";
                comments_row2 = "俺だぁぁーーーッ！！！";
            }
            if (var_1332 >= 10 && var_1332 < 30) {
                comments_row1 = "ガブッ…負けた…のか…";
                comments_row2 = "俺は死ぬ…死ぬのか…";
            }
            if (var_1332 >= 30 && var_1332 < 60) {
                comments_row1 = "栄光は…俺にある…！";
                comments_row2 = "兄貴…見守っていてくれ…！";
            }
            if (var_1332 >= 60 && var_1332 < 80) {
                comments_row1 = "グッ…落ち着くんだ！";
                comments_row2 = "疑心暗鬼は心の弱さだ…！";
            }
            if (var_1332 >= 80 && var_1332 < 100) {
                comments_row1 = "兄貴と同じ苦しみを味わうんだなァーッ！";
                comments_row2 = "";
            }
            if (var_1332 >= 100) {
                comments_row1 = "償わせてやるぜッ！";
                comments_row2 = "兄貴の意志はオイラがとげるッ！";
            }
        }
        if (var_3125 == 2) {
            var_3088 = var_83[var_3072].Var16;
            var_3089 = var_83[var_3072].Var39;
            yield func682();
            if (var_3073 < 99999) {
                comments_row1 = "あと" + var_3073 + "くらいで";
                comments_row2 = "もっと強くなれるぜ！";
            }
            if (var_3073 >= 99999) {
                comments_row1 = "俺の強さはこれが限界だぜ！";
                comments_row2 = "";
            }
            yield func127();
        }
        if (var_3125 == 3) {
            enemy_list = var_2571;
            yield func626();
            var_3125 = rnd(3);
            if (var_3125 == 0) {
                comments_row1 = "" + enemy_name + "をやっちまった～♪";
                comments_row2 = "でも思ったよりたいしたことないな";
            }
            if (var_3125 == 1) {
                comments_row1 = "これで俺に向かってマンモーニだなんて";
                comments_row2 = "言えるヤツは　誰一人いねー…";
            }
            if (var_3125 == 2) {
                comments_row1 = "" + enemy_name + "の";
                comments_row2 = "心臓えぐりとってやったぜ…";
            }
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func094();
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        if (var_3130 == 0) {
            var_198 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3137 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func754(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(754);
        var_191 = 1;
        var_1437 = var_83[var_3072].Var1;
        var_1438 = var_83[var_3072].Var2;
        var_1505 = 0;
        var_3138 = rnd(8);
        if (var_3138 == 0 || var_3138 == 1 || var_3138 == 2 || var_3138 == 3 || var_3138 == 4) {
            var_1505 = 1;
        }
        if (var_3138 == 5) {
            var_1505 = 2;
        }
        if (var_3138 == 6 || var_3138 == 7) {
            var_1505 = 3;
        }
        if (var_1505 == 1) {
            var_2171 = 0;
            var_3139 = var_97 + 1;
            for (let cnt2 = 0; cnt2 < 1000; ++cnt2) {
                var_3140 = rnd(var_3139);
                if (var_3140 != 0 && var_83[var_3140].Var0 != 0 && var_83[var_3140].Var10 != var_83[var_3072].Var10 && var_83[var_3140].Var31 != 4 && var_83[var_3140].Var31 != 5) {
                    var_1508 = var_83[var_3140].Var1;
                    var_1509 = var_83[var_3140].Var2;
                    var_2171 = var_3140;
                    break;
                }
            }
        }
        if (var_1505 == 2) {
            var_97 = var_97 + 1;
            var_2171 = var_97;
            var_83[var_2171].Var0 = 123;
            var_83[var_2171].Var31 = 9;
            var_83[var_2171].Var5 = 2;
            var_83[var_2171].Var3 = 60;
        }
        if (var_1505 <= 2 && var_2171 != 0) {
            var_1385 = var_2171;
            var_1386 = var_83[var_1385].Var0;
            var_2164 = var_1437;
            var_2165 = var_1438;
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
            if (var_2170 == 0 && var_65[var_2164][var_2168] == 0 && var_82[var_2164][var_2168] == 0 && var_71[var_2164][var_2168] != 0 && var_71[var_2164][var_2168] != 13) {
                var_2170 = 1;
                var_1512 = var_2164;
                var_1513 = var_2168;
            }
            if (var_2170 == 0 && var_65[var_2166][var_2165] == 0 && var_82[var_2166][var_2165] == 0 && var_71[var_2166][var_2165] != 0 && var_71[var_2166][var_2165] != 13) {
                var_2170 = 1;
                var_1512 = var_2166;
                var_1513 = var_2165;
            }
            if (var_2170 == 0 && var_65[var_2167][var_2165] == 0 && var_82[var_2167][var_2165] == 0 && var_71[var_2167][var_2165] != 0 && var_71[var_2167][var_2165] != 13) {
                var_2170 = 1;
                var_1512 = var_2167;
                var_1513 = var_2165;
            }
            if (var_2170 == 0 && var_65[var_2164][var_2169] == 0 && var_82[var_2164][var_2169] == 0 && var_71[var_2164][var_2169] != 0 && var_71[var_2164][var_2169] != 13) {
                var_2170 = 1;
                var_1512 = var_2164;
                var_1513 = var_2169;
            }
            if (var_2170 == 0 && var_65[var_2166][var_2168] == 0 && var_82[var_2166][var_2168] == 0 && var_71[var_2166][var_2168] != 0 && var_71[var_2166][var_2168] != 13) {
                var_2170 = 1;
                var_1512 = var_2166;
                var_1513 = var_2168;
            }
            if (var_2170 == 0 && var_65[var_2167][var_2168] == 0 && var_82[var_2167][var_2168] == 0 && var_71[var_2167][var_2168] != 0 && var_71[var_2167][var_2168] != 13) {
                var_2170 = 1;
                var_1512 = var_2167;
                var_1513 = var_2168;
            }
            if (var_2170 == 0 && var_65[var_2166][var_2169] == 0 && var_82[var_2166][var_2169] == 0 && var_71[var_2166][var_2169] != 0 && var_71[var_2166][var_2169] != 13) {
                var_2170 = 1;
                var_1512 = var_2166;
                var_1513 = var_2169;
            }
            if (var_2170 == 0 && var_65[var_2167][var_2169] == 0 && var_82[var_2167][var_2169] == 0 && var_71[var_2167][var_2169] != 0 && var_71[var_2167][var_2169] != 13) {
                var_2170 = 1;
                var_1512 = var_2167;
                var_1513 = var_2169;
            }
            if (var_1505 == 2 && var_2170 == 0) {
                var_83[var_2171].Var0 = 0;
                var_83[var_2171].Var31 = 0;
                var_83[var_2171].Var3 = 0;
                var_97 = var_97 - 1;
            }
        }
        if (var_1505 == 3) {
            var_2171 = 0;
            var_3141 = var_336 + 1;
            for (let cnt2 = 0; cnt2 < 1000; ++cnt2) {
                var_3140 = rnd(var_3141);
                if (var_3140 != 0 && var_78[var_3140].Var0 != 0 && var_78[var_3140].Var9 != var_83[var_3072].Var10) {
                    var_1508 = var_78[var_3140].Var1;
                    var_1509 = var_78[var_3140].Var2;
                    var_2171 = var_3140;
                    break;
                }
            }
        }
        if (var_1505 == 3 && var_2171 != 0) {
            var_1385 = var_2171;
            var_1386 = var_78[var_1385].Var0;
            var_1249 = var_78[var_1385].Var13;
            var_2164 = var_1437;
            var_2165 = var_1438;
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
        }
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾍﾟｯｼ「ビーチ・ボーイッ」！！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[4];
        var_26_x = var_26[4];
        var_27_x = var_27[4];
        yield func047();
        var_83[var_3072].Var21 = 1;
        var_411 = 1;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_271 = 1;
        var_1500 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_198 = 1;
            var_300 = 0;
            var_1500++;
        }
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
        }
        var_1500 = 5;
        var_411 = 2;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
        }
        var_1500 = 6;
        var_1501 = 102;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1501 = var_1501 - 1;
        }
        var_1501 = 5;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
        }
        if (var_1505 <= 2 && var_2170 != 0) {
            var_83[var_2171].Var8 = 1;
            var_83[var_2171].Var12 = 0;
            var_83[var_2171].Var13 = 0;
        }
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾍﾟｯｼ「きたッ！」";
        comments_row2a = "";
        yield func047();
        yield func050();
        var_83[var_3072].Var21 = 1;
        for (let cnt1 = 0; cnt1 < 28; ++cnt1) {
            var_411 = 2;
            var_1501++;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 3;
            var_1501++;
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
        }
        if (var_2170 == 0 || var_2171 == 0) {
            var_1501 = 100;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                var_411 = 2;
                var_1501++;
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
            }
            var_271 = 0;
            var_1501 = 0;
            var_1500 = 0;
            var_411 = 0;
            var_83[var_3072].Var21 = 0;
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ﾍﾟｯｼ「ちっ！　おしい…」";
            comments_row2a = "";
            yield func047();
            yield func050();
            var_198 = 1;
            var_300 = 0;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_217 = 1;
            yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾍﾟｯｼ「かかったァ――ッ！」";
        if (var_1505 == 2) {
            comments_row1a = "ﾍﾟｯｼ「大物釣り上げたァ――――ッ！！」";
        }
        comments_row2a = "";
        yield func047();
        yield func050();
        for (let cnt1 = 0; cnt1 < 22; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1501++;
            var_198 = 1;
            var_300 = 0;
        }
        var_411 = 0;
        var_83[var_3072].Var21 = 0;
        var_271 = 0;
        var_1501 = 0;
        var_1500 = 0;
        if (var_1505 <= 2) {
            var_82[var_1508][var_1509] = 0;
            var_82[var_1512][var_1513] = var_2171;
            var_83[var_2171].Var1 = var_1512;
            var_83[var_2171].Var2 = var_1513;
            var_83[var_2171].Var10 = var_71[var_1512][var_1513];
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        if (var_1505 == 3) {
            var_77[var_1508][var_1509] = 0;
            var_77[var_1512][var_1513] = var_2171;
            var_78[var_2171].Var1 = var_1512;
            var_78[var_2171].Var2 = var_1513;
            var_78[var_2171].Var9 = var_71[var_1512][var_1513];
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_1505 <= 2) {
            var_83[var_2171].Var8 = 0;
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func755(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(755);
        var_243 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "SPW財団の男「ひとつ情報があります」";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「SPW財団の調査によると、次の階では";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        var_3142 = sdim(length1 = 50, length2 = 20, length3 = null); 
        var_3143 = current_floor;
        current_floor = current_floor + 1;
        yield func627();
        var_3144 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            if (var_977[var_3144] == 0) {
                break;
            }
            enemy_list = var_977[var_3144];
            yield func626();
            var_3142[var_3144] = enemy_name;
            var_3144 = var_3144 + 1;
        }
        current_floor = var_3143;
        var_3145 = 0;
        for (let cnt1 = 0; cnt1 < var_3144; ++cnt1) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + var_3142[var_3145];
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func094();
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            var_3145 = var_3145 + 1;
        }
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "が出現するようです。";
        comments_row2a = "お気をつけて」";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func756(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(756);
        var_243 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾎﾟﾙﾅﾚﾌ「亀の中はなかなか快適だな」";
        comments_row2 = "";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾎﾟﾙﾅﾚﾌ「ところでそこのジッパー…」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾎﾟﾙﾅﾚﾌ「自分が入ったら";
        comments_row2a = "　　　　　　どこに行くんだろうな？」";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func757(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(757);
        var_243 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「……」";
        comments_row2 = "";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「……」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func758(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(758);
        var_243 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ボインゴ「新しいページが現れたぞ…」";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ディアボロは次の階で…";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        var_3143 = current_floor;
        current_floor = current_floor + 1;
        yield func627();
        var_356 = var_977[var_2569];
        yield func177(); // 死因原因
        current_floor = var_3143;
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "" + var_849;
        comments_row2a = "リタイアだァ―ッ！」";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｳｸｹｺ ｳﾋｺ ｳｹｹｹ ｳｹｺｹｺｹﾛｵ ";
        comments_row2a = "ｳｹﾛｵｵｵﾌﾊﾎｯ！";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func759(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(759);
        var_243 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_2877 = rnd(8);
        if (var_2877 == 0) {
            comments_row1 = "ﾖｰﾖｰﾏｯ「もっとおお わたしを叱ってええ」";
        }
        if (var_2877 == 1) {
            comments_row1 = "ﾖｰﾖｰﾏｯ「わたしが おくつを磨きましょう」";
        }
        if (var_2877 == 2) {
            comments_row1 = "ﾖｰﾖｰﾏｯ「マンガお読みになられますか」";
        }
        if (var_2877 == 3) {
            comments_row1 = "ﾖｰﾖｰﾏｯ「マッチ棒パズルやります？」";
        }
        if (var_2877 == 4) {
            comments_row1 = "ﾖｰﾖｰﾏｯ「黄色い花はヘビイチゴ」";
        }
        if (var_2877 == 5) {
            comments_row1 = "ﾖｰﾖｰﾏｯ「だんな様あああ～」";
        }
        if (var_2877 == 6) {
            comments_row1 = "ﾖｰﾖｰﾏｯ「お逃げになりますか？」";
        }
        if (var_2877 == 7) {
            comments_row1 = "ﾖｰﾖｰﾏｯ「おっしゃるとおりに いたします」";
        }
        var_3146 = var_77[var_347][var_348];
        if (var_78[var_3146].Var0 == 650 || var_78[var_3146].Var0 == 651 || var_78[var_3146].Var0 == 652 || var_78[var_3146].Var0 == 653) {
            comments_row1 = "ﾖｰﾖｰﾏｯ「のっかりてぇ―のっかりてェ―」";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3147 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func760(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(760);
        var_243 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「タリナイゾ…";
        comments_row2 = "　残り" + var_169 + " G！」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func761(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(761);
        yield func762();
    });
}
function func762(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(762);
        yield func763();
    });
}
function func763(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(763);
        yield func764();
    });
}
function func764(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(764);
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func765(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(765);
        var_243 = 0;
        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "地球儀が置いてある。";
        if (var_523 >= 1) {
            comments_row1 = "地球儀がすごい速度で回転している。";
        }
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func766(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(766);
        var_243 = 0;
        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ベッドの上に本が置いてある。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func767(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(767);
        var_243 = 0;
        if (var_526 >= 1 && var_993 >= 1) {
            yield func051();
            yield func828();
            return;
        }
        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
        if (var_526 >= 1 && var_993 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "壁に穴が開いている。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func051();
            var_198 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "壁に写真や資料が貼り付いている。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func768(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(768);
        var_243 = 0;
        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ベッドの下で何か動いている気配がする。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func769(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(769);
        var_243 = 0;
        var_3148 = var_314;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "サヴェジガーデン作戦だ！";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        var_198 = 1;
        var_300 = 0;
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "アイテムを倉庫に送りますか？";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_3149 = 0;
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3150 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func770(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(770);
        var_2000 = 1;
        item_page_number = 1;
        Y_axis_item_position = 45;
        var_225 = 1;
        var_223 = var_224 + 10;
        var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        yield func051();
        open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    });
}
 // ムーディーブルース以外でアイテムを送る手段(サウェッジガーデン？アバッキオ？)
function func771(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(771);
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        if (var_233[var_225].Var0 >= 800 && var_233[var_225].Var0 < 900 && var_233[var_225].Var8 != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "中に何か入っているアイテムは";
            comments_row2 = "送ることはできない。";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            yield func051();
            open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        yield func426();
        yield func427();
        yield func428();
        yield func429();
        var_2116 = 0;
        if (var_553 == var_225 && var_896 != 0) {
            var_2116 = 1;
        }
        if (var_554 == var_225 && var_897 != 0) {
            var_2116 = 1;
        }
        if (var_555 == var_225 && var_898 != 0) {
            var_2116 = 1;
        }
        if (var_2116 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "呪われていて外せない！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            yield func051();
            open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        yield func772();
    });
}

function func772(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(772);
        var_2000 = 0;
        var_2401 = 0;
        var_2402 = 0;
        if (var_559 == 0 && var_864 >= 19) {
            var_2402 = 1;
        }
        if (var_559 == 1 && var_864 >= 26) {
            var_2402 = 1;
        }
        if (var_559 == 2 && var_864 >= 33) {
            var_2402 = 1;
        }
        if (var_559 == 3 && var_864 >= 39) {
            var_2402 = 1;
        }
        if (var_559 == 4 && var_864 >= 45) {
            var_2402 = 1;
        }
        if (var_2402 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "倉庫にはもう置ける場所がないようだ";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            var_198 = 0;
            var_300 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_449 = 21;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            var_447 = 10;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                if (var_863[var_447][var_449] == 0) {
                    var_2403 = 0;
                    if (var_559 <= 3) {
                        if (var_447 == 10 && var_449 == 21) {
                            var_2403 = 1;
                        }
                        if (var_447 == 10 && var_449 == 22) {
                            var_2403 = 1;
                        }
                        if (var_447 == 10 && var_449 == 23) {
                            var_2403 = 1;
                        }
                        if (var_447 == 10 && var_449 == 24) {
                            var_2403 = 1;
                        }
                        if (var_447 == 10 && var_449 == 25) {
                            var_2403 = 1;
                        }
                        if (var_447 == 10 && var_449 == 26) {
                            var_2403 = 1;
                        }
                    }
                    if (var_559 <= 2) {
                        if (var_447 == 11 && var_449 == 21) {
                            var_2403 = 1;
                        }
                        if (var_447 == 11 && var_449 == 22) {
                            var_2403 = 1;
                        }
                        if (var_447 == 11 && var_449 == 23) {
                            var_2403 = 1;
                        }
                        if (var_447 == 11 && var_449 == 24) {
                            var_2403 = 1;
                        }
                        if (var_447 == 11 && var_449 == 25) {
                            var_2403 = 1;
                        }
                        if (var_447 == 11 && var_449 == 26) {
                            var_2403 = 1;
                        }
                    }
                    if (var_447 == 12 && var_449 == 21) {
                        var_2403 = 1;
                    }
                    if (var_447 == 13 && var_449 == 21) {
                        var_2403 = 1;
                    }
                    if (var_447 == 14 && var_449 == 21) {
                        var_2403 = 1;
                    }
                    if (var_447 == 15 && var_449 == 21) {
                        var_2403 = 1;
                    }
                    if (var_447 == 12 && var_449 == 22) {
                        var_2403 = 1;
                    }
                    if (var_447 == 13 && var_449 == 22) {
                        var_2403 = 1;
                    }
                    if (var_447 == 14 && var_449 == 22) {
                        var_2403 = 1;
                    }
                    if (var_447 == 15 && var_449 == 22) {
                        var_2403 = 1;
                    }
                    if (var_447 == 13 && var_449 == 23) {
                        var_2403 = 1;
                    }
                    if (var_2403 == 0) {
                        var_1459 = var_233[var_225].Var0;
                        var_1249 = var_233[var_225].Var13;
                        var_864 = var_864 + 1;
                        var_863[var_447][var_449] = var_864;
                        var_866 = var_864;
                        var_853[var_866][0] = var_233[var_225].Var0;
                        var_853[var_866][1] = var_447;
                        var_853[var_866][2] = var_449;
                        var_853[var_866][3] = var_233[var_225].Var3;
                        var_853[var_866][4] = var_233[var_225].Var4;
                        var_853[var_866][5] = var_233[var_225].Var5;
                        var_853[var_866][6] = var_233[var_225].Var6;
                        var_853[var_866][7] = var_233[var_225].Var7;
                        var_853[var_866][8] = var_233[var_225].Var8;
                        var_853[var_866][9] = var_233[var_225].Var9;
                        var_853[var_866][10] = var_233[var_225].Var10;
                        var_853[var_866][11] = 0;
                        var_853[var_866][12] = var_233[var_225].Var12;
                        var_853[var_866][13] = var_233[var_225].Var13;
                        var_853[var_866][14] = var_233[var_225].Var14;
                        var_853[var_866][15] = var_233[var_225].Var15;
                        var_853[var_866][16] = var_233[var_225].Var16;
                        var_853[var_866][17] = var_233[var_225].Var17;
                        var_853[var_866][18] = var_233[var_225].Var18;
                        var_853[var_866][19] = var_233[var_225].Var19;
                        var_853[var_866][20] = var_233[var_225].Var20;
                        var_853[var_866][21] = var_233[var_225].Var21;
                        var_853[var_866][22] = var_233[var_225].Var22;
                        var_853[var_866][23] = var_233[var_225].Var23;
                        var_853[var_866][24] = var_233[var_225].Var24;
                        var_853[var_866][25] = var_233[var_225].Var25;
                        var_853[var_866][26] = var_233[var_225].Var26;
                        var_853[var_866][27] = var_233[var_225].Var27;
                        var_853[var_866][28] = var_233[var_225].Var28;
                        var_853[var_866][29] = var_233[var_225].Var29;
                        if (var_233[var_225].Var11 == 1) {
                            var_106 = 1;
                            belongings_item_list = var_233[var_225].Var0;
                            yield func492(); // アイテムリスト呼び出し
                            var_482 = 0;
                            var_482 = (var_233[var_225].Var3 + var_233[var_225].Var4) * 50;
                            if (var_233[var_225].Var0 != 800) {
                                var_482 = var_233[var_225].Var7 * 100 + var_482;
                            }
                            if (var_233[var_225].Var19 > 1) {
                                var_482 = var_233[var_225].Var19 * 500 + var_482;
                            }
                            buying_price = buying_price + var_482;
                            count_buying_price = count_buying_price + buying_price;
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
                            belongings_item_list = var_233[var_225].Var0;
                            yield func106(); // BGM選曲呼び出し割り振り
                        }
                        var_2401 = 1;
                        yield func430();
                        yield func433(); // アイテム配列(所持アイテム)初期化関数
                        break;
                    }
                }
                var_447 = var_447 + 1;
            }
            if (var_2401 == 1) {
                break;
            }
            var_449 = var_449 + 1;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_2401 == 1) {
            comments_row1 = "サヴェジガーデンはアイテムを持って";
            comments_row2 = "飛び去っていった。";
        }
        if (var_2401 == 0) {
            comments_row1 = "倉庫にはもう置ける場所がないようだ";
            comments_row2 = "";
        }
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        var_198 = 0;
        var_300 = 0;
        if (var_2401 == 1) {
            var_1457 = var_83[var_3148].Var1;
            var_1458 = var_83[var_3148].Var2;
            var_83[var_3148].Var11 = 1;
            var_271 = 1;
            var_1456 = 1;
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1456++;
            }
            var_271 = 0;
            var_1456 = 0;
            var_82[var_1457][var_1458] = 0;
            var_83[var_3148].Var0 = 0;
            var_83[var_3148].Var1 = 0;
            var_83[var_3148].Var2 = 0;
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

// 鮮血のシャボン玉の機能
function func773(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(773);
        var_243 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "鮮血のｼｬﾎﾞﾝが浮かんでいる…";
        comments_row2 = "";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        if (var_987[0] == 0) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "中には何も入っていないようだ。";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "何か入れますか？";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func051();
            var_245 = 19;
            var_246 = 45;
            var_546 = 1;
            var_3151 = 1;
            var_548 = 1;
            yield func839();
            return;
        }
        if (var_987[0] != 0) {
            belongings_item_list = var_987[0];
            disc_rarity = var_987[13];
            yield func492(); // アイテムリスト呼び出し
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + item_name + "が";
            comments_row2a = "入っているようだ。";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "取り出しますか？";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func051();
            var_245 = 19;
            var_246 = 45;
            var_546 = 1;
            var_3152 = 1;
            var_548 = 1;
            yield func839();
            return;
        }
        yield func774();
    });
}

function func774(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(774);
        var_2001 = 1;
        item_page_number = 1;
        Y_axis_item_position = 45;
        var_225 = 1;
        var_223 = var_224 + 10;
        var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        yield func051();
        open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    });
}
// ムーディーブルース以外でアイテムを送る手段(サウェッジガーデン？)
function func775(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(775);
        var_2001 = 0;
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        if (var_233[var_225].Var0 >= 800 && var_233[var_225].Var0 < 900 && var_233[var_225].Var8 != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "中に何か入っているアイテムは";
            comments_row2 = "送ることはできない。";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func051();
            var_2001 = 1;
            item_page_number = 1;
            Y_axis_item_position = 45;
            var_225 = 1;
            var_223 = var_224 + 10;
            var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        yield func426();
        yield func427();
        yield func428();
        yield func429();
        var_2116 = 0;
        if (var_553 == var_225 && var_896 != 0) {
            var_2116 = 1;
        }
        if (var_554 == var_225 && var_897 != 0) {
            var_2116 = 1;
        }
        if (var_555 == var_225 && var_898 != 0) {
            var_2116 = 1;
        }
        if (var_2116 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "呪われていて外せない！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func051();
            var_2001 = 1;
            item_page_number = 1;
            Y_axis_item_position = 45;
            var_225 = 1;
            var_223 = var_224 + 10;
            var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        yield func776();
    });
}
// ヤバいものへアイテムを入れた時の動作処理
function func776(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(776);
        belongings_item_list = var_233[var_225].Var0;
        disc_rarity = var_233[var_225].Var13;
        yield func492(); // アイテムリスト呼び出し
        var_3153 = item_name;
        var_866 = var_864;
        var_987[0] = var_233[var_225].Var0;
        var_987[1] = 0;
        var_987[2] = 0;
        var_987[3] = var_233[var_225].Var3;
        var_987[4] = var_233[var_225].Var4;
        var_987[5] = var_233[var_225].Var5;
        var_987[6] = var_233[var_225].Var6;
        var_987[7] = var_233[var_225].Var7 + var_233[var_225].Var8;
        var_987[8] = 0;
        var_987[9] = var_233[var_225].Var9;
        var_987[10] = var_233[var_225].Var10;
        var_987[11] = var_233[var_225].Var11;
        var_987[12] = var_233[var_225].Var12;
        var_987[13] = var_233[var_225].Var13;
        var_987[14] = var_233[var_225].Var14;
        var_987[15] = var_233[var_225].Var15;
        var_987[16] = var_233[var_225].Var16;
        var_987[17] = var_233[var_225].Var17;
        var_987[18] = var_233[var_225].Var18;
        var_987[19] = var_233[var_225].Var19;
        var_987[20] = var_233[var_225].Var20;
        var_987[21] = var_233[var_225].Var21;
        var_987[22] = var_233[var_225].Var22;
        var_987[23] = var_233[var_225].Var23;
        var_987[24] = var_233[var_225].Var24;
        var_987[25] = var_233[var_225].Var25;
        var_987[26] = var_233[var_225].Var26;
        var_987[27] = var_233[var_225].Var27;
        var_987[28] = var_233[var_225].Var28;
        var_987[29] = var_233[var_225].Var29;
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
            belongings_item_list = var_233[var_225].Var0;
            yield func106(); // BGM選曲呼び出し割り振り
        }
        yield func430();
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + var_3153 + "を入れた。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
// ヤバいものからアイテムを取り出す時の動作処理
function func777(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(777);
        // 所持アイテム数が20個以上になる場合
        if (var_224 >= 20) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "持ち物がいっぱいで出せない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func051();
            var_198 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        belongings_item_list = var_987[0];
        disc_rarity = var_987[13];
        yield func492(); // アイテムリスト呼び出し
        var_3153 = item_name;
        if (belongings_item_list >= 800 && belongings_item_list < 900) {
            var_1806 = 1;
            for (let cnt2 = 0; cnt2 < var_224; ++cnt2) {
                if (var_233[var_1806].Var0 >= 800 && var_233[var_1806].Var0 < 900) {
                    var_1807 = var_233[var_1806].Var6;
                    var_986[var_1807] = 1;
                }
                var_1806 = var_1806 + 1;
            }
            var_1806 = 1;
            for (let cnt2 = 0; cnt2 < var_336; ++cnt2) {
                if (var_78[var_1806].Var0 >= 800 && var_78[var_1806].Var0 < 900) {
                    var_1807 = var_78[var_1806].Var6;
                    var_986[var_1807] = 1;
                }
                var_1806 = var_1806 + 1;
            }
            var_858 = 1;
            for (let cnt2 = 0; cnt2 < 80; ++cnt2) {
                if (var_986[var_858] == 0) {
                    var_1811 = 0;
                    for (let cnt4 = 0; cnt4 < 11; ++cnt4) {
                        var_1812 = 0;
                        for (let cnt5 = 0; cnt5 < 30; ++cnt5) {
                            var_486[var_858][var_1811][var_1812] = 0;
                            var_1812++;
                        }
                        var_1811++;
                    }
                    var_986[var_858] = 1;
                    break;
                }
                var_858 = var_858 + 1;
            }
        }
        var_224 = var_224 + 1;
        var_233[var_224].Var0 = var_987[0];
        var_233[var_224].Var3 = var_987[3];
        var_233[var_224].Var4 = var_987[4];
        var_233[var_224].Var5 = var_987[5];
        var_233[var_224].Var6 = 0;
        if (belongings_item_list >= 800 && belongings_item_list < 900) {
            var_233[var_224].Var6 = var_858;
        }
        var_233[var_224].Var7 = var_987[7];
        var_233[var_224].Var8 = var_987[8];
        var_233[var_224].Var11 = var_987[11];
        var_233[var_224].Var12 = var_987[12];
        var_233[var_224].Var13 = var_987[13];
        var_233[var_224].Var14 = var_987[14];
        var_233[var_224].Var15 = var_987[15];
        var_233[var_224].Var16 = var_987[16];
        var_233[var_224].Var17 = var_987[17];
        var_233[var_224].Var18 = var_987[18];
        var_233[var_224].Var19 = var_987[19];
        var_233[var_224].Var20 = var_987[20];
        var_233[var_224].Var21 = var_987[21];
        var_233[var_224].Var22 = var_987[22];
        var_233[var_224].Var23 = var_987[23];
        var_233[var_224].Var24 = var_987[24];
        var_233[var_224].Var25 = var_987[25];
        var_233[var_224].Var26 = var_987[26];
        var_233[var_224].Var27 = var_987[27];
        var_233[var_224].Var28 = var_987[28];
        var_233[var_224].Var29 = var_987[29];
        var_987[0] = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + var_3153 + "を出した。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
// ↑おそらくここまで鮮血のシャボン玉の機能

// 岸辺露伴の設定
function func778(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(778);
        var_243 = 0;
        var_3154 = 0;
        var_3155 = 0;
        var_480 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_480].Var0 == 393) {
                var_3154 = 1;
            }
            if (var_233[var_480].Var0 == 995) {
                var_3155 = 1;
            }
            if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
                var_484 = 1;
                var_485 = var_233[var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_486[var_485][var_484].Var0 == 393) {
                        var_3154 = 1;
                    }
                    if (var_486[var_485][var_484].Var0 == 995) {
                        var_3155 = 1;
                    }
                    var_484 = var_484 + 1;
                }
            }
            var_480 = var_480 + 1;
        }
        if (var_3154 == 1) {
            yield func781();
            return;
        }
        if (var_3155 == 1) {
            yield func784();
            return;
        }
        if (var_993 == 1) {
            yield func783();
            return;
        }
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "さて、どうしたものかな…";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ん？何か用かい？";
        comments_row2a = "用も無いのに話しかけないで欲しいな…";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "いやまてよ、ひょっとして君も";
        comments_row2a = "奇妙なﾀﾞﾝｼﾞｮﾝを探索してるのかい？";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "それはちょうど良かった！";
        comments_row2a = "ひとつ頼まれてくれないかな。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "このﾀﾞﾝｼﾞｮﾝのどこかに、";
        comments_row2a = "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨｰっていう";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "マンガを現実にするスタンドが";
        comments_row2a = "あるそうなんだ。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "僕はそのスタンドをずっと";
        comments_row2a = "探していてね。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "さっきのヤギが怪しいんだが、";
        comments_row2a = "いつも良いところで逃げられてしまう。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "どうやらそこの壁の穴が、";
        comments_row2a = "やつらの住処のようだが…";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "どうだろう、代わりに取ってきて";
        comments_row2a = "もらえないかな？";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3156 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func779(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(779);
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "グッド！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "よろしく頼むよ。";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        var_993 = 1;
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func780(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(780);
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "この岸部露伴が頭下げて";
        comments_row2a = "頼んでるのに…";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ふぅ～～ん";
        comments_row2a = "そうかい！";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "君は、ちょいと深い所まで行って";
        comments_row2a = "帰ってくるだけのことを断るのか…";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "念のためもう一度聞くが、";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "どうだろう、代わりに取ってきて";
        comments_row2a = "もらえないかな？";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3156 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func781(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(781);
        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "露伴に「ﾎﾞﾍﾐｱﾝ･ﾗﾌﾟｿﾃﾞｨのDISC」を";
        comments_row2 = "見せてあげますか？";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3157 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func782(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(782);
        var_97 = var_97 + 1;
        var_762 = var_97;
        var_82[0][0] = var_97;
        var_83[var_97].Var0 = 56;
        var_83[var_97].Var1 = 0;
        var_83[var_97].Var2 = 0;
        var_83[var_97].Var3 = 999;
        var_83[var_97].Var4 = 0;
        var_83[var_97].Var5 = 2;
        var_83[var_97].Var10 = 1;
        var_83[var_97].Var31 = 4;
        var_83[var_97].Var32 = rnd(6);
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func335();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "おおっ！君が持っているのは";
        comments_row2 = "「ﾎﾞﾍﾐｱﾝ･ﾗﾌﾟｿﾃﾞｨのDISC」！！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "よし、お礼に…";
        comments_row2a = "君が主役のマンガを描いてやろう";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "なになに、組織のボスだった頃の";
        comments_row2a = "絶頂だった自分を描いて欲しい？";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ちょっと待っててくれよ。";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        var_83[var_761].Var21 = 1;
        var_411 = 1;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_411 = 2;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ズババッ！";
        comments_row2a = "ジャキィン！　シュバッ！";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            DSPLAY(audio_id = 127);
            var_411 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 4;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 5;
            yield func337(); // メッセージ関係呼び出し
            DSPLAY(audio_id = 0);
            var_411 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 4;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 5;
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 2;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_411 = 1;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_83[var_761].Var21 = 0;
        var_411 = 0;
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "できたぜ。";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "タイトル？タイトルは";
        comments_row2a = "別に決めてないな…";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        var_198 = 0;
        var_217 = 1;
        DSPLAY(audio_id = 228);
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_3158 = 10;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            if (var_82[var_3158][8] != 0) {
                var_3159 = var_82[var_3158][8];
                var_83[var_3159].Var6 = 1;
                var_83[var_3159].Var1 = var_3158;
                var_83[var_3159].Var2 = 9;
                var_82[var_3158][8] = 0;
                var_82[var_3158][9] = var_3159;
                var_83[var_3159].Var5 = 2;
                var_409 = 3;
                yield func337(); // メッセージ関係呼び出し
                var_409 = 2;
                yield func337(); // メッセージ関係呼び出し
                var_409 = 1;
                yield func337(); // メッセージ関係呼び出し
                var_409 = 0;
                yield func337(); // メッセージ関係呼び出し
                var_83[var_3159].Var6 = 0;
            }
            var_3158++;
        }
        var_83[var_771].Var6 = 0;
        var_83[var_762].Var6 = 1;
        var_83[var_762].Var1 = 10;
        var_83[var_762].Var2 = 8;
        var_82[0][0] = 0;
        var_82[10][8] = var_762;
        var_83[var_762].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_762].Var1 = 11;
        var_83[var_762].Var2 = 8;
        var_82[10][8] = 0;
        var_82[11][8] = var_762;
        var_83[var_762].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_762].Var1 = 12;
        var_83[var_762].Var2 = 8;
        var_82[11][8] = 0;
        var_82[12][8] = var_762;
        var_83[var_762].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_762].Var1 = 13;
        var_83[var_762].Var2 = 8;
        var_82[12][8] = 0;
        var_82[13][8] = var_762;
        var_83[var_762].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        var_83[var_762].Var1 = 14;
        var_83[var_762].Var2 = 8;
        var_82[13][8] = 0;
        var_82[14][8] = var_762;
        var_83[var_762].Var5 = 6;
        var_409 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_409 = 0;
        yield func337(); // メッセージ関係呼び出し
        var_199 = 4;
        if (var_65[15][8] == 0) {
            var_83[var_762].Var1 = 15;
            var_83[var_762].Var2 = 8;
            var_82[14][8] = 0;
            var_82[15][8] = var_762;
            var_83[var_762].Var5 = 6;
            var_409 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_409 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_409 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_409 = 0;
            yield func337(); // メッセージ関係呼び出し
            var_199 = 4;
        }
        var_83[var_762].Var6 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "このシュトロハイムが";
        comments_row2 = "名づけ親(ｺﾞｯﾄﾞﾌｧｰｻﾞｰ)になってやるッ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "そうだな…不思議のダンジョンに";
        comments_row2a = "挑戦するディアボロ！という意味の";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ディアボロの大冒険！というのは";
        comments_row2a = "どうかな！？";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        var_198 = 0;
        yield func785();
        return;
    });
}
function func783(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(783);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「ﾎﾞﾍﾐｱﾝ･ﾗﾌﾟｿﾃﾞｨのDISC」だ。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ぼくが行けりゃあ";
        comments_row2a = "すぐに手に入るんだがな…";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "あいにく、";
        comments_row2a = "まだ死にたくないんだ。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func784(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(784);
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "おやっ？君が持っているのは";
        comments_row2 = "僕のマンガじゃあないか。";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "僕のマンガが好きなのかい？";
        comments_row2a = "【波調が合う】…ってことかな。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        var_198 = 0;
        var_1261 = 1;

        DSPLAY(audio_id = 103); // 殴った時の効果音
        var_271 = 1;
        var_1542 = 21;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1542++;
        }
        DSPLAY(audio_id = 118);
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1261 = 0;
        var_271 = 0;
        var_1542 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "冗談！冗談だよ";
        comments_row2 = "嫌だなあ～";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func785(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(785);
        var_199 = 2;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }

        DSPLAY(audio_id = 117);
        var_1264 = 1;
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        var_1233 = 1;
        yield func123();

        DSPLAY(audio_id = 192);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「ボヘミアン・ラプソディ！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        gsel(19);
        color(255, 255, 255);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_311 = 255;
        var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 - 5;
        }
        gsel(19);
        color(1, 1, 1);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_311 = 0;
        var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 + 5;
        }
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func336();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "こうしてﾃﾞｨｱﾎﾞﾛは、露伴の描いた漫画を";
        comments_row2 = "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨの能力で現実化させ";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "かつての絶頂の日々に";
        comments_row2a = "戻ることができたのです…";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "　　　　　【ディアボロの大冒険】";
        comments_row2a = "　　　　　　　　　　　完";
        var_198 = 1;
        var_300 = 0;
        yield func050();
        for (let cnt1 = 0; true; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            yield func080(); // 各キー入力確認
        }
    });
}
// ↑ここまで岸辺露伴の設定

// 亀の倉庫の取説
function func786(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(786);
        var_243 = 0;
        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "【亀の倉庫　使い方】";
        comments_row2 = "";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "この部屋にはアイテムを保管することが";
        comments_row2a = "できます。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "部屋から出たい時は、テーブルの上に";
        comments_row2a = "乗ると出ることができます。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "いらないアイテムは、左にあるジッパー";
        comments_row2a = "から捨てることができます。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ジッパーの上で「足元」コマンドを選ぶと";
        comments_row2a = "持ち物全てを捨てられます。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "たぶん亀は平気でしょう。";
        comments_row2a = "けっこう栄養にするかも。";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}

// アバッキオ
function func787(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(787);
        var_243 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｱﾊﾞｯｷｫ「おれのｽﾀﾝﾄﾞ【ﾑｰﾃﾞｨｰﾌﾞﾙｰｽ】";
        comments_row2 = "　　　　　のﾘﾌﾟﾚｲ能力を使えば、」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｱﾊﾞｯｷｫ「このﾀﾞﾝｼﾞｮﾝから脱出も可能だ」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｱﾊﾞｯｷｫ「地上まで帰還するか？」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3163 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func788(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(788);
        var_532 = 1;
        var_1454 = 1;
        var_271 = 1;
        var_1455 = current_floor;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｱﾊﾞｯｷｫ「ムーディー・ブルース！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        var_3164 = 1;
        for (let cnt1 = 0; cnt1 < current_floor + 60; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_3165 = rnd(2);
            if (var_3165 == 0) {
                var_3166 = rnd(100);
                var_3166 = var_3166 + 150;
                for (let cnt3 = 0; cnt3 < var_3166; ++cnt3) {
                    var_3167 = rnd(680);
                    var_3167 = var_3167 - 10;
                    var_3168 = rnd(680);
                    var_3169 = rnd(30);
                    var_3169 = var_3169 + 5;
                    color(150, 150, 150);
                    line(var_3167, var_3168, var_3167 + var_3169, var_3168);
                    line(var_3167, var_3168 + 1, var_3167 + var_3169, var_3168 + 1);
                    line(var_3167, var_3168 + 30, var_3167 + var_3169, var_3168 + 30);
                    color(0, 0, 0);
                    line(var_3167, var_3168 + 2, var_3167 + var_3169, var_3168 + 2);
                }
            }
            if (cnt1 > 10) {
                var_1455 = var_1455 - 1;
                if (var_1455 < 0) {
                    var_1455 = 0;
                }
            }
            var_1454 = var_1454 + 1;
            var_3164 = var_3164 + 1;
            var_198 = 1;
            var_300 = 0;
        }
        var_1454 = 0;
        var_271 = 0;
        var_356 = 311;
        var_217 = 0;
        yield func173();
        return;
    });
}
function func789(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(789);
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｱﾊﾞｯｷｫ「ところで…茶でも飲むか？」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3163 = 2;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func790(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(790);
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｱﾊﾞｯｷｫ「ヌルイから飲むのは いやか？」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3163 = 3;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func791(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(791);
        if (var_215 == 115) {
            yield func792();
            return;
        }
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「★※○■¶◆ЖΘ！！！」";
        comments_row2a = "";
        var_25_x = var_25[5];
        var_26_x = var_26[5];
        var_27_x = var_27[5];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        if (var_211 <= 1) {
            var_211 = 0;
            var_356 = 280;
            var_212 = 1;
        }
        if (var_211 >= 2) {
            var_211 = 1;
        }
        var_389 = 2;

        DSPLAY(audio_id = 103); // 殴った時の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛは酷いダメージを受けた！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_389 = 0;
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func792(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(792);
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「うっ！」";
        comments_row2a = "";
        var_25_x = var_25[5];
        var_26_x = var_26[5];
        var_27_x = var_27[5];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "しかし G･ｴｸｽﾍﾟﾘｴﾝｽの能力で";
        comments_row2a = "歯を一本 クラゲに変えて吸い取らせた";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
// ↑ここまでアバッキオの設定


function func793(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(793);
        var_243 = 0;
        if (var_1042 == 0) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "間田「ジョジョも面白いけどさ、";
            comments_row2 = "なんと言っても一番なのは」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "間田「岸辺露伴先生の";
            comments_row2a = "【ピンクダークの少年】だね」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
        }
        if (var_1042 == 1) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "間田「遠距離ｽﾀﾝﾄﾞも、ｺﾐｯｸｽで";
            comments_row2 = "強化できるって知ってたかい？」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "間田「残り回数が増えるから、";
            comments_row2a = "無くなる前に増やした方がいいよ」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
        }
        if (var_1042 == 2) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "間田「ｺﾐｯｸｽを読んで";
            comments_row2 = "装備DISCを強化した時に、";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "間田「まれに、いつもの３倍";
            comments_row2a = "強化されることがあるぞ」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
        }
        if (var_1042 == 3) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "間田「【ヤバイもの】も、";
            comments_row2 = "ｺﾐｯｸｽで回数を増やせるぜ」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "間田「当然、関連のある部の";
            comments_row2a = "ｺﾐｯｸｽが必要だけどな」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
        }
        if (var_1042 == 4) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "間田「ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙは3部でも4部でも";
            comments_row2 = "登場するｽﾀﾝﾄﾞだ」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "間田「ｺﾐｯｸｽで強化するときも、";
            comments_row2a = "両方の部が使えるぞ。」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
        }
        if (var_1042 == 5) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "間田「忘れがちなことだが、";
            comments_row2 = "ｺﾐｯｸｽで呪いを解くことができる」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "間田「もったいぶらずに";
            comments_row2a = "さっさと使っておいた方が良いぜ」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
        }
        if (var_1042 == 6) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "間田「露伴先生のカバンの中には、";
            comments_row2 = "漫画の資料が入っているらしい」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "間田「自分の漫画の原稿も入ってたり";
            comments_row2a = "するのかなぁ～」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
        }
        yield func051();
        var_198 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}

// ヤク中の少年
function func794(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(794);
        var_243 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾔｸ中の少年がフラフラと歩いている。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3147 = 1;
        var_548 = 1;
        yield func839();
        return;
    });
}
function func795(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(795);
        var_198 = 0;
        var_243 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_747 = 1;
        yield func091();
        var_2937 = 1;
        var_455 = var_347;
        var_456 = var_348;
        yield func660();
        var_2937 = 0;
        var_347 = var_1894;
        var_348 = var_1895;
        var_243 = 0;
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

// 銀行口座の設定
function func796(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(796);
        var_1205 = 1;
        var_3170 = 0;
        var_3171 = 0;
        var_3172 = 0;
        var_3173 = 0;
        var_3174 = 0;
        var_3175 = 0;
        var_3176 = 0;
        var_3177 = 0;
        var_3178 = 0;
        var_3179 = 1;
        var_3180 = 95;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + var_1032 + "G 入っています。";
        comments_row2 = "何G 口座に入れますか？";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func798();
        return;
    });
}

function func797(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(797);
        var_1205 = 2;
        var_3170 = 0;
        var_3171 = 0;
        var_3172 = 0;
        var_3173 = 0;
        var_3174 = 0;
        var_3175 = 0;
        var_3176 = 0;
        var_3177 = 0;
        var_3178 = 0;
        var_3179 = 1;
        var_3180 = 95;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + var_1032 + "G 入っています。";
        comments_row2 = "何G 口座から出しますか？";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func798();
        return;
    });
}
function func798(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(798);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (key_X_on == 1) {
            var_1205 = 0;
            yield func799(); // 口座へ入金、口座から出金した時の表示
        }
        if (var_254 == 1 && var_3179 != 6) {

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            var_3179 = var_3179 + 1;
            var_3180 = var_3180 - 15;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_257 == 1 && var_3179 != 1) {

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            var_3179 = var_3179 - 1;
            var_3180 = var_3180 + 15;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_255 == 1) {

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            if (var_3179 == 1) {
                var_3170 = var_3170 + 1;
                if (var_3170 == 10) {
                    var_3170 = 0;
                }
            }
            if (var_3179 == 2) {
                var_3171 = var_3171 + 1;
                if (var_3171 == 10) {
                    var_3171 = 0;
                }
            }
            if (var_3179 == 3) {
                var_3172 = var_3172 + 1;
                if (var_3172 == 10) {
                    var_3172 = 0;
                }
            }
            if (var_3179 == 4) {
                var_3173 = var_3173 + 1;
                if (var_3173 == 10) {
                    var_3173 = 0;
                }
            }
            if (var_3179 == 5) {
                var_3174 = var_3174 + 1;
                if (var_3174 == 10) {
                    var_3174 = 0;
                }
            }
            if (var_3179 == 6) {
                var_3175 = var_3175 + 1;
                if (var_3175 == 10) {
                    var_3175 = 0;
                }
            }
            var_3176 = var_3175 * 100000 + var_3174 * 10000 + var_3173 * 1000 + var_3172 * 100 + var_3171 * 10 + var_3170;
            if (var_1205 == 1 && var_3176 > wallet) {
                var_3181 = Math.floor(wallet / 100000);
                var_3182 = Math.floor((wallet - var_3181 * 100000) / 10000);
                var_3183 = Math.floor((wallet - var_3181 * 100000 - var_3182 * 10000) / 1000);
                var_3184 = Math.floor((wallet - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000) / 100);
                var_3185 = Math.floor((wallet - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100) / 10);
                var_598 = wallet - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100 - var_3185 * 10;
                var_3170 = var_598;
                var_3171 = var_3185;
                var_3172 = var_3184;
                var_3173 = var_3183;
                var_3174 = var_3182;
                var_3175 = var_3181;
                var_3176 = wallet;
            }
            var_3177 = var_1032 + var_3176;
            if (var_1205 == 1 && var_3177 >= 999999) {
                var_3178 = 999999 - var_1032;
                var_3181 = Math.floor(var_3178 / 100000);
                var_3182 = Math.floor((var_3178 - var_3181 * 100000) / 10000);
                var_3183 = Math.floor((var_3178 - var_3181 * 100000 - var_3182 * 10000) / 1000);
                var_3184 = Math.floor((var_3178 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000) / 100);
                var_3185 = Math.floor((var_3178 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100) / 10);
                var_598 = var_3178 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100 - var_3185 * 10;
                var_3170 = var_598;
                var_3171 = var_3185;
                var_3172 = var_3184;
                var_3173 = var_3183;
                var_3174 = var_3182;
                var_3175 = var_3181;
                var_3176 = var_3178;
            }
            if (var_1205 == 2 && var_3176 > var_1032) {
                var_3181 = Math.floor(var_1032 / 100000);
                var_3182 = Math.floor((var_1032 - var_3181 * 100000) / 10000);
                var_3183 = Math.floor((var_1032 - var_3181 * 100000 - var_3182 * 10000) / 1000);
                var_3184 = Math.floor((var_1032 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000) / 100);
                var_3185 = Math.floor((var_1032 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100) / 10);
                var_598 = var_1032 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100 - var_3185 * 10;
                var_3170 = var_598;
                var_3171 = var_3185;
                var_3172 = var_3184;
                var_3173 = var_3183;
                var_3174 = var_3182;
                var_3175 = var_3181;
                var_3176 = var_1032;
            }
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_259 == 1) {

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            if (var_3179 == 1) {
                var_3170 = var_3170 - 1;
                if (var_3170 < 0) {
                    var_3170 = 9;
                }
            }
            if (var_3179 == 2) {
                var_3171 = var_3171 - 1;
                if (var_3171 < 0) {
                    var_3171 = 9;
                }
            }
            if (var_3179 == 3) {
                var_3172 = var_3172 - 1;
                if (var_3172 < 0) {
                    var_3172 = 9;
                }
            }
            if (var_3179 == 4) {
                var_3173 = var_3173 - 1;
                if (var_3173 < 0) {
                    var_3173 = 9;
                }
            }
            if (var_3179 == 5) {
                var_3174 = var_3174 - 1;
                if (var_3174 < 0) {
                    var_3174 = 9;
                }
            }
            if (var_3179 == 6) {
                var_3175 = var_3175 - 1;
                if (var_3175 < 0) {
                    var_3175 = 9;
                }
            }
            var_3176 = var_3175 * 100000 + var_3174 * 10000 + var_3173 * 1000 + var_3172 * 100 + var_3171 * 10 + var_3170;
            if (var_1205 == 1 && var_3176 > wallet) {
                var_3181 = Math.floor(wallet / 100000);
                var_3182 = Math.floor((wallet - var_3181 * 100000) / 10000);
                var_3183 = Math.floor((wallet - var_3181 * 100000 - var_3182 * 10000) / 1000);
                var_3184 = Math.floor((wallet - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000) / 100);
                var_3185 = Math.floor((wallet - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100) / 10);
                var_598 = wallet - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100 - var_3185 * 10;
                var_3170 = var_598;
                var_3171 = var_3185;
                var_3172 = var_3184;
                var_3173 = var_3183;
                var_3174 = var_3182;
                var_3175 = var_3181;
                var_3176 = wallet;
            }
            var_3177 = var_1032 + var_3176;
            if (var_1205 == 1 && var_3177 >= 999999) {
                var_3178 = 999999 - var_1032;
                var_3181 = Math.floor(var_3178 / 100000);
                var_3182 = Math.floor((var_3178 - var_3181 * 100000) / 10000);
                var_3183 = Math.floor((var_3178 - var_3181 * 100000 - var_3182 * 10000) / 1000);
                var_3184 = Math.floor((var_3178 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000) / 100);
                var_3185 = Math.floor((var_3178 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100) / 10);
                var_598 = var_3178 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100 - var_3185 * 10;
                var_3170 = var_598;
                var_3171 = var_3185;
                var_3172 = var_3184;
                var_3173 = var_3183;
                var_3174 = var_3182;
                var_3175 = var_3181;
                var_3176 = var_3178;
            }
            if (var_1205 == 2 && var_3176 > var_1032) {
                var_3181 = Math.floor(var_1032 / 100000);
                var_3182 = Math.floor((var_1032 - var_3181 * 100000) / 10000);
                var_3183 = Math.floor((var_1032 - var_3181 * 100000 - var_3182 * 10000) / 1000);
                var_3184 = Math.floor((var_1032 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000) / 100);
                var_3185 = Math.floor((var_1032 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100) / 10);
                var_598 = var_1032 - var_3181 * 100000 - var_3182 * 10000 - var_3183 * 1000 - var_3184 * 100 - var_3185 * 10;
                var_3170 = var_598;
                var_3171 = var_3185;
                var_3172 = var_3184;
                var_3173 = var_3183;
                var_3174 = var_3182;
                var_3175 = var_3181;
                var_3176 = var_1032;
            }
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_1205 == 1) {
                var_1032 = var_1032 + var_3176;
                wallet = wallet - var_3176;
                yield func799(); // 口座へ入金、口座から出金した時の表示
                return;
            }
            if (var_1205 == 2) {
                var_1032 = var_1032 - var_3176;
                wallet = wallet + var_3176;
                if (wallet > 999999) {
                    wallet = 999999;
                }
                yield func799(); // 口座へ入金、口座から出金した時の表示
                return;
            }
        }
        yield func798();
        return;
    });
}
// 口座へ入金、口座から出金した時の表示
function func799(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(799);
        if (var_1205 != 0) {
    
            DSPLAY(audio_id = 207);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_1205 == 1) {
                comments_row1 = "" + var_3176 + "G 口座に入れた。";
                var_1205 = 0;
            }
            if (var_1205 == 2) {
                comments_row1 = "" + var_3176 + "G 口座から出した。";
                var_1205 = 0;
            }
            comments_row2 = "　　　　";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
// ↑ここまで口座設定