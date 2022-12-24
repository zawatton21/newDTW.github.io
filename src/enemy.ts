function enemy001(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy002(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy003(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 4 敵デス・13の特殊能力
function enemy004(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(5);
        if (var_2830 == 0 && var_219 == 0 && var_128 == 0) {
            DSPLAY(audio_id = 131);
            var_83[var_673].Var21 = 1;
            var_271 = 1;
            var_1286 = var_83[var_673].Var1 - var_66 + 4 * 40;
            var_1287 = var_83[var_673].Var2 - var_67 + 4 * 40 - 50;
            var_1309 = 1;
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                if (var_83[var_673].Var5 == 1 || var_83[var_673].Var5 == 2 || var_83[var_673].Var5 == 3) {
                    var_411 = 1;
                }
                if (var_83[var_673].Var5 == 7 || var_83[var_673].Var5 == 8 || var_83[var_673].Var5 == 9) {
                    var_411 = 2;
                }
                if (var_83[var_673].Var5 == 4) {
                    var_411 = 3;
                }
                if (var_83[var_673].Var5 == 6) {
                    var_411 = 4;
                }
                var_1309 = var_1309 + 1;
                yield func337(); // メッセージ関係呼び出し
            }
            var_271 = 0;
            var_1309 = 0;
            var_83[var_673].Var21 = 0;
            yield func619();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_120 == 0) {
                comments_row1 = "ﾃﾞｨｱﾎﾞﾛは眠ってしまった！";
                var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
                var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
                var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        
                DSPLAY(audio_id = 132);
                var_219 = 1;
            }
            if (var_120 == 1) {
                comments_row1 = "10時間熟睡した気分になっていて";
                comments_row2 = "眠くならなかった！";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                var_219 = 0;
            }
            if (equip_disc[351] == 1) {
                comments_row1 = "装備DISCの効果によって";
                comments_row2 = "眠くならなかった！";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                var_219 = 0;
            }
            if (shageki_disc_id == 400 || shageki_disc_id == 407) {
                comments_row1 = "装備DISCの効果によって";
                comments_row2 = "眠らずにすんだ！";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                var_219 = 0;
            }
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
        }
        return;
    });
}

function enemy005(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy006(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy007(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy008(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy009(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy010(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy011(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 12 敵エコーズACT2の特殊能力
function enemy012(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(3);
        if (var_2830 == 0 && var_133 == 0) {
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            DSPLAY(audio_id = 122);
            if (enemy_list == 145 || enemy_list == 150) {
                var_743 = 1;
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「エコーズ ３ FREEZE ！」";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            var_743 = 0;
            if (var_128 >= 1) {
                yield func023();
            }
            if (equip_disc[396] == 0) {
                if (var_157 == 0) {
                    var_133 = 1;
                    var_397 = 0;
                }
                if (var_157 != 0) {
                    var_157 = 0;
                    var_158 = 0;
                }
            }
            yield func619();
            DSPLAY(audio_id = 162);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "体が重くなってしまった！";
            comments_row2a = "";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            if (equip_disc[396] == 1) {
                yield func340(); // キー入力による選択処理
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "しかし装備スタンドの効果で";
                comments_row2a = "速度は遅くならない！";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
        }
        return;
    });
}

function enemy013(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy014(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

// No = 15 敵ペットショップ & No = 64 敵ギアッチョの特殊能力
function enemy015(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(4);
        if (var_2830 == 0 && var_128 == 0 && var_219 == 0) {
            var_1359 = 0;
            if (enemy_list == 15) {
                var_1359 = 1;
            }
            var_314 = var_673;
            var_1360 = var_83[var_673].Var1;
            var_1361 = var_83[var_673].Var2;
            var_271 = 1;
            var_1358 = 1;
            DSPLAY(audio_id = 215);
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1358 = var_1358 + 1;
            }
            var_1358 = 0;
            var_271 = 0;
            if (var_173 == 1) {
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "冷やされる攻撃に強くなっていて";
                comments_row2 = "冷凍攻撃を防いだ！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func047();
                for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
                return;
            }
            if (nouryoku_disc_id == 109 || shageki_disc_id == 404 || nouryoku_disc_id == 202) {
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "装備中のDISCの効果で";
                comments_row2 = "冷凍攻撃を防いだ！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func047();
                for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
                return;
            }
            var_128 = 1;
            DSPLAY(audio_id = 126);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "体を凍らされてしまった！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
        }
        return;                
    });
}

function enemy016(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 17 シアハートアタックの特殊能力
function enemy017(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_83[var_673].Var3 == 2) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「コッチヲ見ロォ～」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            var_2197 = 1;
            return;
        }
        if (var_83[var_673].Var3 == 1) {
            var_2890 = var_673;
            yield func698();
            var_2197 = 1;
            return;
        }
    });
}
// No = 18 ブラック・サバスの行動
function enemy018(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(8);
        if (var_2830 == 0) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「チャンスをやろう…";
            comments_row2 = "　向かうべき『２つの道』を……！」";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func619();
            DSPLAY(audio_id = 103); // 殴った時の効果音
            var_747 = 1;
            var_209 = 20;
            var_389 = 2;
            DSPLAY(audio_id = 111);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2228 = 1;
            yield func531();
            if (var_2228 == 0) {
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "" + target_item_name + "に";
                comments_row2a = "新たな装備効果が発現した！";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                var_198 = 1;
                var_300 = 0;
                yield func050();
            }
            if (var_2228 == 1) {
                yield func340(); // キー入力による選択処理
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "「この【魂】　選ばれるものでは…」";
                comments_row2a = "";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                var_198 = 1;
                var_300 = 0;
                yield func050();
                yield func340(); // キー入力による選択処理
                var_2891 = Math.floor(var_211 / 2);
                var_211 = var_211 - var_2891;
                if (var_211 <= 1) {
                    var_211 = 1;
                }
                var_208 = var_208 + var_2891;
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "「なかった！」";
                comments_row2a = "";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                var_198 = 1;
                var_300 = 0;
                yield func050();
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "HPが半分になった。";
                comments_row2a = "";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                var_198 = 1;
                var_300 = 0;
                yield func050();
            }
            var_389 = 0;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
        }
        return;
    });
}

function enemy019(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 20 エンヤ婆の動作処理
function enemy020(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(3);
        if (var_2830 == 0) {
            DSPLAY(audio_id = 161);
            var_1163 = 1;
            for (let cnt3 = 0; cnt3 < 16; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1163 = 0;
            var_2521 = 1;
            var_1845 = 1;
            var_2353 = var_673;
            var_2471 = rnd(4);
            for (let cnt3 = 0; cnt3 < var_2471 + 1; ++cnt3) {
                yield func556();
            }
            var_673 = var_2353;
            var_2521 = 0;
            var_1845 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ｴﾝﾔ婆は 死体 を呼び寄せた！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            for (let cnt3 = 0; cnt3 < 16; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
        }
        return;
    });
}


function enemy021(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy022(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy023(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy024(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function enemy025(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 26 敵ハーヴェストの特殊能力
function enemy026(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_412 = var_673;
        if (var_83[var_412].Var17 != 0 || var_83[var_412].Var23 != 0 || var_83[var_412].Var26 != 0) {
            var_2197 = 1;
            return;
        }
        if (var_224 == 0 || var_97 > 90 || var_336 > 90) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾊｰｳﾞｪｽﾄは様子をうかがっている…";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        var_474 = 0;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            var_475 = rnd(var_224);
            var_475 = var_475 + 1;
            if (var_476[var_475] == 0 && var_477[var_475] == 0 && var_478[var_475] == 0 && var_479[var_475] == 0 && var_233[var_475].Var11 == 0) {
                var_474 = 1;
                break;
            }
        }
        var_2885 = rnd(3);
        if (var_2885 == 0) {
            var_474 = 0;
        }
        if (var_474 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾊｰｳﾞｪｽﾄは様子をうかがっている…";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        DSPLAY(audio_id = 122);
        var_742 = 1;
        var_83[var_412].Var7 = 1;
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_83[var_412].Var7 = 0;
        var_742 = 0;
        if (equip_disc[362] == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "装備DISCの効果で盗まれなかった。";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        var_83[var_412].Var15 = 1;
        var_83[var_412].Var14 = 0;
        var_83[var_412].Var26 = 1;
        belongings_item_list = var_233[var_475].Var0;
        var_417 = belongings_item_list;
        var_1249 = var_233[var_475].Var13;
        disc_rarity = var_233[var_475].Var13;
        yield func492(); // アイテムリスト呼び出し
        target_item_name = item_name;
        var_419 = var_412 + 200;
        var_78[var_419].Var0 = var_233[var_475].Var0;
        var_78[var_419].Var1 = var_233[var_475].Var1;
        var_78[var_419].Var2 = var_233[var_475].Var2;
        var_78[var_419].Var3 = var_233[var_475].Var3;
        var_78[var_419].Var4 = var_233[var_475].Var4;
        var_78[var_419].Var5 = var_233[var_475].Var5;
        var_78[var_419].Var6 = var_233[var_475].Var6;
        var_78[var_419].Var7 = var_233[var_475].Var7;
        var_78[var_419].Var8 = var_233[var_475].Var8;
        var_78[var_419].Var9 = var_233[var_475].Var9;
        var_78[var_419].Var10 = var_233[var_475].Var10;
        var_78[var_419].Var11 = var_233[var_475].Var11;
        var_78[var_419].Var12 = var_233[var_475].Var12;
        var_78[var_419].Var13 = var_233[var_475].Var13;
        var_78[var_419].Var14 = var_233[var_475].Var14;
        var_78[var_419].Var15 = var_233[var_475].Var15;
        var_78[var_419].Var16 = var_233[var_475].Var16;
        var_78[var_419].Var17 = var_233[var_475].Var17;
        var_78[var_419].Var18 = var_233[var_475].Var18;
        var_78[var_419].Var19 = var_233[var_475].Var19;
        var_78[var_419].Var20 = var_233[var_475].Var20;
        var_78[var_419].Var21 = var_233[var_475].Var21;
        var_78[var_419].Var22 = var_233[var_475].Var22;
        var_78[var_419].Var23 = var_233[var_475].Var23;
        var_78[var_419].Var24 = var_233[var_475].Var24;
        var_78[var_419].Var25 = var_233[var_475].Var25;
        var_78[var_419].Var26 = var_233[var_475].Var26;
        var_78[var_419].Var27 = var_233[var_475].Var27;
        var_78[var_419].Var28 = var_233[var_475].Var28;
        var_78[var_419].Var29 = var_233[var_475].Var29;
        var_225 = var_475;
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + target_item_name + "を盗まれた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        if (var_128 >= 1) {
            yield func023();
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2197 = 1;
        var_2695 = var_83[var_412].Var1;
        var_2696 = var_83[var_412].Var2;
        var_1349 = 0;
        if (var_78[var_419].Var15 == 2) {
            var_78[var_419].Var15 = 0;
            var_83[var_412].Var11 = 1;
            var_271 = 1;
            var_1345 = 1;
            for (let cnt3 = 0; cnt3 < 14; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1345 = var_1345 + 1;
                var_198 = 1;
                var_300 = 0;
            }
            var_271 = 0;
            var_1345 = 0;
            var_83[var_412].Var11 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "なんと" + target_item_name + "は";
            comments_row2 = "爆弾だった！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            var_455 = var_2695;
            var_456 = var_2696;
            var_83[var_412].Var8 = 1; // var_83はCharactorInfo
            yield func668();
            return;
        }
        for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
            var_2350 = rnd(var_33);
            var_2351 = rnd(var_34);
            if (var_65[var_2350][var_2351] == 0 && var_82[var_2350][var_2351] == 0 && var_71[var_2350][var_2351] != 13 && var_71[var_2350][var_2351] != 0 && var_71[var_2350][var_2351] != var_201) {
                var_1349 = 1;
                break;
            }
        }
        if (var_1349 == 0) {
            var_83[var_412].Var11 = 1;
            var_271 = 1;
            var_1345 = 1;
            for (let cnt3 = 0; cnt3 < 14; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1345 = var_1345 + 1;
            }
            var_271 = 0;
            var_1345 = 0;
            var_83[var_412].Var11 = 0;
            return;
        }
        if (var_1349 == 1) {
            var_83[var_412].Var11 = 1;
            var_271 = 1;
            var_1345 = 1;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1345 = var_1345 + 1;
                if (var_1345 == 16) {
        
                    DSPLAY(audio_id = 216);
                }
            }
            var_271 = 0;
            var_1345 = 0;
            var_83[var_412].Var1 = var_2350;
            var_83[var_412].Var2 = var_2351;
            var_82[var_2350][var_2351] = var_82[var_2695][var_2696];
            var_82[var_2695][var_2696] = 0;
            var_83[var_412].Var11 = 0;
            var_83[var_412].Var10 = var_71[var_2350][var_2351];
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        return;
    });
}
// No = 27 敵ゲブ神の特殊能力
function enemy027(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_128 != 0 || var_219 != 0) {
            return;
        }
        var_2893 = rnd(4);
        if (dangeon_number == 99 && var_83[var_673].Var16 == 1) {
            var_2893 = 2;
        }
        if (var_2893 == 1 && var_127 == 0) {
            DSPLAY(audio_id = 140);
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            var_389 = 2;
            var_199 = 2;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "目を切り裂かれた！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            var_271 = 1;
            var_1499 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1499++;
            }
            var_271 = 0;
            var_1499 = 0;
            var_83[var_673].Var7 = 0;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
            var_127 = 1;
            var_167 = 0;
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            var_2197 = 1;
            return;
        }
        if (var_2893 == 0 || var_114 >= 1 || var_128 != 0 || var_219 != 0) {
            return;
        }
        DSPLAY(audio_id = 136);
        var_742 = 1;
        var_83[var_673].Var7 = 1;
        var_463 = var_83[var_673].Var1;
        var_464 = var_83[var_673].Var2;
        var_114 = var_673;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｹﾞﾌﾞ神に足をつかまれた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[var_673].Var7 = 0;
        var_461 = var_66;
        var_462 = var_67;
        yield func619();
        var_2197 = 1;
        return;
    });
}
// No = 28 敵ジャッジメントの特殊能力
function enemy028(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(3);
        if (var_2830 == 0) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "HAIL 2 U !!";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 16; ++cnt3) {
                var_300 = 0;
                yield func337(); // メッセージ関係呼び出し
            }
            var_2524 = 1;
            var_1845 = 1;
            var_2353 = var_673;
            yield func556();
            var_673 = var_2353;
            var_2524 = 0;
            var_1845 = 0;
            if (var_2110 == 0) {
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "お前の願いを言え！";
                comments_row2a = "";
                var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
                var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
                var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                var_2197 = 1;
                return;
            }
            DSPLAY(audio_id = 166);
            var_2273 = var_97;
            var_83[var_2273].Var21 = 1;
            var_411 = 1;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                var_300 = 0;
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 2;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                var_300 = 0;
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 3;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                var_300 = 0;
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 4;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                var_300 = 0;
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 0;
            var_83[var_2273].Var21 = 0;
            var_83[var_2273].Var5 = 2;
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "地面から 土人形 が現れた！";
            comments_row2a = "";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_2197 = 1;
        }
        return;
    });
}
// No = 32 吉良吉影の特殊能力
function enemy032(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(6);
        if (var_2830 == 0) {
            if (var_224 == 0) {
                return;
            }
            var_474 = 0;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
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
                var_742 = 1;
                var_83[var_673].Var7 = 1;
                var_743 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_743 = 0;
                var_742 = 0;
                var_83[var_673].Var7 = 0;
                var_233[var_475].Var15 = 2;
                DSPLAY(audio_id = 181);
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "何かが爆弾にされた！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
                var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
                var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
                yield func047();
                for (let cnt4 = 0; cnt4 < 15; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
            }
        }
        if (var_2830 == 1) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "誰にも私を追うことはできない…";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 16; ++cnt3) {
                var_300 = 0;
                yield func337(); // メッセージ関係呼び出し
            }
            var_2523 = 1;
            var_1845 = 1;
            var_2353 = var_673;
            yield func556();
            var_2457 = var_673;
            var_673 = var_2353;
            var_2523 = 0;
            var_1845 = 0;
            if (var_2110 == 0) {
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "君さえ消えていなくなってくれればね…";
                comments_row2a = "";
                var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
                var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
                var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                var_2197 = 1;
                return;
            }
            var_1584 = (var_83[var_2457].Var1 - var_66 + 4) * 40;
            var_1585 = (var_83[var_2457].Var2 - var_67 + 4) * 40;
            var_271 = 1;
            var_1583 = 1;
            DSPLAY(audio_id = 168);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
                var_1583++;
            }
            var_271 = 0;
            var_1583 = 0;
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "吉良はｼｱｰﾊｰﾄｱﾀｯｸを繰り出した！";
            comments_row2a = "";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_2197 = 1;
        }
        return;
    });
}
// No = 38 アレッシーの特殊能力
function enemy038(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(4);
        if (var_2830 == 0) {
            DSPLAY(audio_id = 156);
            var_83[var_673].Var21 = 1;
            var_411 = 1;
            var_1495 = 1;
            var_271 = 1;
            var_389 = 2;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1495++;
            }
            var_83[var_673].Var21 = 0;
            var_411 = 0;
            var_1495 = 0;
            var_271 = 0;
            var_389 = 0;
            yield func619();
            if (var_128 >= 1) {
                yield func023();
            }
            if (equip_disc[207] == 1) {
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "しかし 装備中のDISCによって";
                comments_row2 = "若返りを防いだ！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
                var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
                var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
                yield func047();
                for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
                return;
            }
            if (current_level > 1) {
                current_level = current_level - 1;
                var_352 = var_352 - 3;
                var_211 = var_211 - 3;
                var_568 = var_948[current_level] - 1;
                if (var_352 < 1) {
                    var_352 = 1;
                }
                if (var_211 < 1) {
                    var_211 = 1;
                }
            }
            if (current_level == 1) {
                DSPLAY(audio_id = 151);
                var_211 = 0;
                var_356 = 213;
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "胎児にまで戻された！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
                var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
                var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
                yield func047();
                for (let cnt4 = 0; cnt4 < 20; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
                return;
            }
            DSPLAY(audio_id = 151);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "レベルが下がってしまった！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
        }
        return;
    });
}
// No = 39 敵ハイウェイスターの特殊能力
function enemy039(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(4);
        if (var_2830 == 0 && var_350 >= 11) {
            var_83[var_673].Var21 = 1;
            if (var_83[var_673].Var5 == 2) {
                var_411 = 1;
            }
            if (var_83[var_673].Var5 == 4) {
                var_411 = 2;
            }
            if (var_83[var_673].Var5 == 8) {
                var_411 = 3;
            }
            if (var_83[var_673].Var5 == 6) {
                var_411 = 4;
            }
            if (var_83[var_673].Var5 == 1) {
                var_411 = 5;
            }
            if (var_83[var_673].Var5 == 7) {
                var_411 = 6;
            }
            if (var_83[var_673].Var5 == 3) {
                var_411 = 7;
            }
            if (var_83[var_673].Var5 == 9) {
                var_411 = 8;
            }
            var_389 = 2;
            var_271 = 1;
            var_1481 = 1;
            DSPLAY(audio_id = 161);
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1481++;
            }
            var_271 = 0;
            var_1481 = 0;
            var_389 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (equip_disc[352] == 0) {
                comments_row1 = "養分を吸われて満腹度が下がった！";
                comments_row2 = "";
                DSPLAY(audio_id = 129);
                var_350 = var_350 - 10;
                if (var_350 < 0) {
                    var_350 = 0;
                }
            }
            if (equip_disc[352] == 1) {
                comments_row1 = "しかし装備DISCの効果によって";
                comments_row2 = "腹ヘリを防いだ！";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            if (var_128 >= 1) {
                yield func023();
            }
            yield func619();
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_673].Var21 = 0;
            var_2197 = 1;
        }
        return;
    });
}
// No = 45 敵由花子 & No = 158 敵プッツン由花子の特殊能力
function enemy045(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_412 = var_673;
        if (var_224 == 0) {
            return;
        }
        var_2885 = rnd(4);
        if (var_2885 != 0) {
            return;
        }
        var_474 = 0;
        for (let cnt2 = 0; cnt2 < 100; ++cnt2) {
            var_475 = rnd(var_224);
            var_475 = var_475 + 1;
            if (var_233[var_475].Var0 >= 100 && var_233[var_475].Var0 < 400 && var_233[var_475].Var12 != 1) {
                var_474 = 1;
                break;
            }
        }
        if (var_474 == 0) {
            return;
        }
        belongings_item_list = var_233[var_475].Var0;
        disc_rarity = var_233[var_475].Var13;
        yield func492(); // アイテムリスト呼び出し
        var_2886 = item_name;
        var_2887 = 0;
        if (var_233[var_475].Var12 != 2) {
            if (shageki_disc_id != 405) {
                var_233[var_475].Var12 = 1;
                var_233[var_475].Var14 = 1;
                yield func426();
                if (var_553 == var_475) {
                    var_896 = 1;
                }
                yield func427();
                if (var_554 == var_475) {
                    var_897 = 1;
                }
                yield func428();
                if (var_555 == var_475) {
                    var_898 = 1;
                }
            }
            if (shageki_disc_id == 405) {
                yield func426();
                yield func427();
                yield func428();
                if (var_553 != var_475 && var_554 != var_475 && var_555 != var_475) {
                    var_233[var_475].Var12 = 1;
                    var_233[var_475].Var14 = 1;
                }
                if (var_553 == var_475 || var_554 == var_475 || var_555 == var_475) {
                    var_2887 = 2;
                }
            }
        }
        if (var_233[var_475].Var12 == 2) {
            var_2887 = 1;
        }
        yield func619();
        var_83[var_412].Var21 = 1;
        if (var_83[var_412].Var5 == 2) {
            var_411 = 1;
        }
        if (var_83[var_412].Var5 == 4) {
            var_411 = 2;
        }
        if (var_83[var_412].Var5 == 8) {
            var_411 = 3;
        }
        if (var_83[var_412].Var5 == 6) {
            var_411 = 4;
        }
        if (var_83[var_412].Var5 == 1) {
            var_411 = 5;
        }
        if (var_83[var_412].Var5 == 7) {
            var_411 = 6;
        }
        if (var_83[var_412].Var5 == 3) {
            var_411 = 7;
        }
        if (var_83[var_412].Var5 == 9) {
            var_411 = 8;
        }
        var_389 = 2;
        DSPLAY(audio_id = 220);
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            var_2578 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_2578 = 0;
            yield func337(); // メッセージ関係呼び出し
        }
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 0;
        var_83[var_412].Var21 = 0;
        var_389 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + var_2886 + "が";
        comments_row2 = "呪われた！";
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        var_198 = 1;
        var_300 = 0;
        yield func047();
        if (var_2887 == 1) {
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "･･･と思ったが、";
            comments_row2a = "漆黒のオーラに守られて無事だった。";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
        }
        if (var_2887 == 2) {
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "･･･と思ったが、";
            comments_row2a = "装備DISCの効果によって呪いを防いだ！";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            var_1073 = rnd(4);
            if (var_1073 == 0) {
                comments_row1a = "君はもう「エコーズact2」の能力に";
                comments_row2a = "勝つことはできない！";
            }
            if (var_1073 == 1) {
                comments_row1a = "「大嫌い」だ！";
                comments_row2a = "";
            }
            if (var_1073 == 2) {
                comments_row1a = "言ったってわからないから";
                comments_row2a = "こんな目に遭ったんだよ！";
            }
            if (var_1073 == 3) {
                comments_row1a = "僕を捕まえることはできない…！";
                comments_row2a = "";
            }
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2197 = 1;
        return;
    });
}
// No = 59 プッチ神父の特殊能力
function enemy059(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_412 = var_673;
        if (var_83[var_412].Var26 == 1) {
            return;
        }
        if (kougeki_disc_id == 0 && bougyo_disc_id == 0 && nouryoku_disc_id == 0) {
            return;
        }
        if (var_72[var_66][var_67] != 0) {
            return;
        }
        var_2830 = rnd(3);
        if (var_2830 == 0) {
            var_742 = 1;
            var_83[var_412].Var7 = 1;
            var_83[var_412].Var21 = 1;
            var_2902 = 1;
            var_743 = 0;
            DSPLAY(audio_id = 122);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                if (cnt3 == 0 || cnt3 == 1 || cnt3 == 9) {
                    if (var_83[var_412].Var5 == 2) {
                        var_411 = 7;
                    }
                    if (var_83[var_412].Var5 == 8) {
                        var_411 = 6;
                    }
                    if (var_83[var_412].Var5 == 4) {
                        var_411 = 5;
                    }
                    if (var_83[var_412].Var5 == 6) {
                        var_411 = 7;
                    }
                    if (var_83[var_412].Var5 == 1) {
                        var_411 = 7;
                    }
                    if (var_83[var_412].Var5 == 3) {
                        var_411 = 1;
                    }
                    if (var_83[var_412].Var5 == 7) {
                        var_411 = 2;
                    }
                    if (var_83[var_412].Var5 == 9) {
                        var_411 = 4;
                    }
                }
                if (cnt3 == 2 || cnt3 == 3 || cnt3 == 8) {
                    if (var_83[var_412].Var5 == 2) {
                        var_411 = 1;
                    }
                    if (var_83[var_412].Var5 == 8) {
                        var_411 = 3;
                    }
                    if (var_83[var_412].Var5 == 4) {
                        var_411 = 2;
                    }
                    if (var_83[var_412].Var5 == 6) {
                        var_411 = 4;
                    }
                    if (var_83[var_412].Var5 == 1) {
                        var_411 = 5;
                    }
                    if (var_83[var_412].Var5 == 3) {
                        var_411 = 7;
                    }
                    if (var_83[var_412].Var5 == 7) {
                        var_411 = 6;
                    }
                    if (var_83[var_412].Var5 == 9) {
                        var_411 = 9;
                    }
                }
                if (cnt3 == 4 || cnt3 == 5 || cnt3 == 6 || cnt3 == 7) {
                    if (var_83[var_412].Var5 == 2) {
                        var_411 = 5;
                    }
                    if (var_83[var_412].Var5 == 8) {
                        var_411 = 8;
                    }
                    if (var_83[var_412].Var5 == 4) {
                        var_411 = 6;
                    }
                    if (var_83[var_412].Var5 == 6) {
                        var_411 = 8;
                    }
                    if (var_83[var_412].Var5 == 1) {
                        var_411 = 2;
                    }
                    if (var_83[var_412].Var5 == 3) {
                        var_411 = 4;
                    }
                    if (var_83[var_412].Var5 == 7) {
                        var_411 = 3;
                    }
                    if (var_83[var_412].Var5 == 9) {
                        var_411 = 3;
                    }
                }
                yield func337(); // メッセージ関係呼び出し
            }
            var_743 = 0;
            var_742 = 0;
            var_83[var_412].Var7 = 0;
            var_83[var_412].Var21 = 0;
            var_411 = 0;
            var_2902 = 0;
            if (var_128 >= 1) {
                yield func023();
            }
            if (equip_disc[361] == 1) {
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "装備スタンドの効果のおかげで";
                comments_row2 = "DISCを抜き取られなかった。";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func047();
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
                return;
            }
            if (kougeki_disc_id != 0 && bougyo_disc_id != 0 && nouryoku_disc_id != 0) {
                var_2396 = rnd(3);
                if (var_2396 == 0) {
                    var_2397 = 0;
                }
                if (var_2396 == 1) {
                    var_2397 = 1;
                }
                if (var_2396 == 2) {
                    var_2397 = 2;
                }
            }
            if (kougeki_disc_id != 0 && bougyo_disc_id != 0 && nouryoku_disc_id == 0) {
                var_2396 = rnd(2);
                if (var_2396 == 0) {
                    var_2397 = 0;
                }
                if (var_2396 == 1) {
                    var_2397 = 1;
                }
            }
            if (kougeki_disc_id != 0 && bougyo_disc_id == 0 && nouryoku_disc_id != 0) {
                var_2396 = rnd(2);
                if (var_2396 == 0) {
                    var_2397 = 0;
                }
                if (var_2396 == 1) {
                    var_2397 = 2;
                }
            }
            if (kougeki_disc_id == 0 && bougyo_disc_id != 0 && nouryoku_disc_id != 0) {
                var_2396 = rnd(2);
                if (var_2396 == 0) {
                    var_2397 = 1;
                }
                if (var_2396 == 1) {
                    var_2397 = 2;
                }
            }
            if (kougeki_disc_id != 0 && bougyo_disc_id == 0 && nouryoku_disc_id == 0) {
                var_2397 = 0;
            }
            if (kougeki_disc_id == 0 && bougyo_disc_id != 0 && nouryoku_disc_id == 0) {
                var_2397 = 1;
            }
            if (kougeki_disc_id == 0 && bougyo_disc_id == 0 && nouryoku_disc_id != 0) {
                var_2397 = 2;
            }
            if (var_2397 == 0) {
                yield func426();
                var_476 = dim(40);
                var_580 = var_580 - var_894;
                var_894 = 0;
                kougeki_disc_id = 0;
                yield func494();
                belongings_item_list = var_233[var_553].Var0;
                disc_rarity = var_233[var_553].Var13;
                var_475 = var_553;
                var_896 = 0;
            }
            if (var_2397 == 1) {
                yield func427();
                var_477 = dim(40);
                var_581 = var_581 - var_895;
                var_895 = 0;
                bougyo_disc_id = 0;
                yield func494();
                belongings_item_list = var_233[var_554].Var0;
                disc_rarity = var_233[var_554].Var13;
                var_475 = var_554;
                var_897 = 0;
            }
            if (var_2397 == 2) {
                yield func428();
                var_478 = dim(40);
                nouryoku_disc_id = 0;
                yield func494();
                belongings_item_list = var_233[var_555].Var0;
                disc_rarity = var_233[var_555].Var13;
                var_475 = var_555;
                var_898 = 0;
            }
            var_83[var_412].Var26 = 1;
            belongings_item_list = var_233[var_475].Var0;
            yield func106(); // BGM選曲呼び出し割り振り
            yield func492(); // アイテムリスト呼び出し
            target_item_name = item_name;
            var_419 = var_412 + 200;
            var_78[var_419].Var0 = var_233[var_475].Var0;
            var_78[var_419].Var1 = var_233[var_475].Var1;
            var_78[var_419].Var2 = var_233[var_475].Var2;
            var_78[var_419].Var3 = var_233[var_475].Var3;
            var_78[var_419].Var4 = var_233[var_475].Var4;
            var_78[var_419].Var5 = var_233[var_475].Var5;
            var_78[var_419].Var6 = var_233[var_475].Var6;
            var_78[var_419].Var7 = var_233[var_475].Var7;
            var_78[var_419].Var8 = var_233[var_475].Var8;
            var_78[var_419].Var9 = var_233[var_475].Var9;
            var_78[var_419].Var10 = var_233[var_475].Var10;
            var_78[var_419].Var11 = var_233[var_475].Var11;
            var_78[var_419].Var12 = var_233[var_475].Var12;
            var_78[var_419].Var13 = var_233[var_475].Var13;
            var_78[var_419].Var14 = var_233[var_475].Var14;
            var_78[var_419].Var15 = var_233[var_475].Var15;
            var_78[var_419].Var16 = var_233[var_475].Var16;
            var_78[var_419].Var17 = var_233[var_475].Var17;
            var_78[var_419].Var18 = var_233[var_475].Var18;
            var_78[var_419].Var19 = var_233[var_475].Var19;
            var_78[var_419].Var20 = var_233[var_475].Var20;
            var_78[var_419].Var21 = var_233[var_475].Var21;
            var_78[var_419].Var22 = var_233[var_475].Var22;
            var_78[var_419].Var23 = var_233[var_475].Var23;
            var_78[var_419].Var24 = var_233[var_475].Var24;
            var_78[var_419].Var25 = var_233[var_475].Var25;
            var_78[var_419].Var26 = var_233[var_475].Var26;
            var_78[var_419].Var27 = var_233[var_475].Var27;
            var_78[var_419].Var28 = var_233[var_475].Var28;
            var_78[var_419].Var29 = var_233[var_475].Var29;
            var_225 = var_475;
            yield func433(); // アイテム配列(所持アイテム)初期化関数
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "装備中の" + target_item_name + "を";
            comments_row2 = "抜き取られてしまった！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            yield func619();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
        }
        return;
    });
}
// No = 63 プロシュート兄貴の特殊能力
function enemy063(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(5);
        if (var_566 <= 0) {
            return;
        }
        if (var_2830 == 0 || var_2830 == 1) {
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            var_743 = 1;
            var_389 = 2;
            DSPLAY(audio_id = 121);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "接触老化攻撃だ！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            yield func619();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_673].Var7 = 0;
            var_743 = 0;
            if (var_128 >= 1) {
                yield func023();
            }
            yield func340(); // キー入力による選択処理
            var_389 = 0;
        }
        if (var_2830 == 0 || var_2830 == 1) {
            if (equip_disc[207] == 1) {
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "しかし 装備中のDISCによって";
                comments_row2a = "老化攻撃を防いだ！";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                var_2197 = 1;
                return;
            }
            if (nouryoku_disc_id == 202 || shageki_disc_id == 404) {
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "しかし 装備中のDISCによって";
                comments_row2a = "体が冷やされ 無事だった！";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                var_2197 = 1;
                return;
            }
        }
        if (var_2830 == 0) {
            var_566 = var_566 - 1;
            if (var_566 < 0) {
                var_566 = 0;
            }
            if (var_565 > var_566) {
                var_565 = var_566;
            }
            DSPLAY(audio_id = 164);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "精神力の最大値が １下がった！";
            comments_row2a = "";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_2197 = 1;
        }
        if (var_2830 == 1) {
            DSPLAY(audio_id = 164);
            var_2903 = rnd(3);
            var_2903 = var_2903 + 3;
            var_352 = var_352 - var_2903;
            if (var_352 < 1) {
                var_352 = 1;
                var_2903 = 0;
            }
            if (var_211 > var_352) {
                var_211 = var_352;
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "最大HPが " + var_2903 + "下がった！";
            comments_row2a = "";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_2197 = 1;
        }
        return;
    });
}
// No = 65 虹村形兆の特殊能力
function enemy065(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(2);
        if (var_2830 == 0) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_2882 = rnd(6);
            if (var_2882 == 0) {
                comments_row1 = "全隊戦闘態勢ッ！";
                comments_row2 = "";
            }
            if (var_2882 == 1) {
                comments_row1 = "お前を殺す決定には変わりはない…";
                comments_row2 = "";
            }
            if (var_2882 == 2) {
                comments_row1 = "几帳面な性格でね―――";
                comments_row2 = "必ずやると言ったらやる！";
            }
            if (var_2882 == 3) {
                comments_row1 = "はたして無事でいられるかなあァ";
                comments_row2 = "―――――――ッ";
            }
            if (var_2882 == 4) {
                comments_row1 = "予告どおりは気分がいい～～～ッ";
                comments_row2 = "";
            }
            if (var_2882 == 5) {
                comments_row1 = "キッカケを与えてやるよォ――ッ";
                comments_row2 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            var_83[var_673].Var21 = 1;
            var_411 = 1;
            for (let cnt3 = 0; cnt3 < 16; ++cnt3) {
                var_300 = 0;
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_673].Var21 = 0;
            var_411 = 0;
            var_2534 = 1;
            var_1845 = 1;
            var_2353 = var_673;
            yield func556();
            var_673 = var_2353;
            var_2534 = 0;
            var_1845 = 0;
            if (var_2110 == 0) {
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "攻撃開始イ―――――ッ！";
                comments_row2a = "";
                var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
                var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
                var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                var_2197 = 1;
                return;
            }
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "グリーンベレーッ！";
            comments_row2a = "やれッ！";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
        }
        var_2197 = 1;
        return;
    });
}
// No = 69 ブラフォードの特殊能力
function enemy069(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_128 != 0 || var_219 != 0) {
            return;
        }
        var_2893 = rnd(3);
        if (dangeon_number == 99 && var_83[var_673].Var16 == 1) {
            var_2893 = 1;
        }
        if (var_2893 == 0) {
            return;
        }
        if (var_114 == 0) {
            yield func619();
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            var_463 = var_83[var_673].Var1;
            var_464 = var_83[var_673].Var2;
            var_114 = var_673;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾌﾞﾗﾌｫｰﾄﾞに髪の毛で掴まれた！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            DSPLAY(audio_id = 136);
            var_1382 = 1;
            var_271 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1382++;
            }
            var_1382 = 0;
            var_271 = 0;
            var_83[var_673].Var7 = 0;
            var_461 = var_66;
            var_462 = var_67;
            var_2197 = 1;
            return;
        }
        if (var_114 == var_673) {
            var_2893 = rnd(3);
            if (var_2893 == 0) {
                return;
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "髪の毛から血を吸い取られている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            DSPLAY(audio_id = 123);
            var_389 = 2;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                var_1273 = 1;
                for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_1273 = 2;
                for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_1273 = 3;
                for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_198 = 1;
                var_300 = 0;
            }
            var_1273 = 0;
            DSPLAY(audio_id = 129);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            if (equip_disc[352] == 0) {
                comments_row1a = "満腹度が急激に下がった！";
                comments_row2a = "";
                DSPLAY(audio_id = 129);
                var_350 = var_350 - 20;
                if (var_350 < 0) {
                    var_350 = 0;
                }
            }
            if (equip_disc[352] == 1) {
                comments_row1a = "しかし装備DISCの効果によって";
                comments_row2a = "腹ヘリを防いだ！";
            }
            yield func047();
            yield func050();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
            var_2197 = 1;
            return;
        }
        return;
    });
}
// No = 77 敵エコーズACT1の特殊能力
function enemy077(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(5);
        if (var_2830 == 0 && var_126 == 0) {
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            DSPLAY(audio_id = 149);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「ドガ！」「バキ！」「ボ！」「ビシ！」";
            comments_row2 = "　　「ボ！」「ドヒュン！」「バキ！」";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            if (var_128 >= 1) {
                yield func023();
            }
            var_126 = 1;
            var_166 = 0;
            DSPLAY(audio_id = 134);
            yield func619();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "頭がおかしくなってしまった！";
            comments_row2a = "";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
        }
        return;
    });
}
// No = 78 アヴドゥルさんの特殊能力
function enemy078(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_128 != 0 || var_219 != 0) {
            return;
        }
        var_2893 = rnd(4);
        if (dangeon_number == 99 && var_83[var_673].Var16 == 1) {
            var_2893 = 0;
        }
        if (var_2893 == 0 && var_114 == 0) {
            yield func619();
            DSPLAY(audio_id = 128);
            var_742 = 1;
            var_743 = 1;
            var_83[var_673].Var7 = 1;
            var_463 = var_83[var_673].Var1;
            var_464 = var_83[var_673].Var2;
            var_114 = var_673;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「ムウン！";
            comments_row2 = "　レッド・バインド」！！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            DSPLAY(audio_id = 136);
            var_1380 = 1;
            var_271 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1380++;
            }
            var_1380 = 0;
            var_271 = 0;
            var_83[var_673].Var7 = 0;
            var_743 = 0;
            if (nouryoku_disc_id == 109 || var_173 == 1) {
                yield func340(); // キー入力による選択処理
                var_114 = 0;
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "装備DISCの効果で平気だった";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func047();
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
                return;
            }
            var_461 = var_66;
            var_462 = var_67;
            var_2473 = 0;
            var_2474 = 0;
            if (kougeki_disc_id != 0 && bougyo_disc_id == 0) {
                yield func426();
                if (var_233[var_553].Var4 != 0) {
                    var_2474 = 1;
                }
            }
            if (kougeki_disc_id == 0 && bougyo_disc_id != 0) {
                yield func427();
                if (var_233[var_554].Var4 != 0) {
                    var_2474 = 2;
                }
            }
            if (kougeki_disc_id != 0 && bougyo_disc_id != 0) {
                yield func426();
                yield func427();
                if (var_233[var_553].Var4 == 0 && var_233[var_554].Var4 == 0) {
                    var_2474 = 0;
                    var_2473 = 0;
                }
                if (var_233[var_553].Var4 != 0 && var_233[var_554].Var4 == 0) {
                    var_2474 = 1;
                }
                if (var_233[var_553].Var4 == 0 && var_233[var_554].Var4 != 0) {
                    var_2474 = 2;
                }
                if (var_233[var_553].Var4 != 0 && var_233[var_554].Var4 != 0) {
                    var_2475 = rnd(2);
                    if (var_2475 == 0) {
                        var_2474 = 1;
                    }
                    if (var_2475 == 1) {
                        var_2474 = 2;
                    }
                }
            }
            if (kougeki_disc_id == 0 && bougyo_disc_id == 0) {
                var_2474 = 0;
                var_2473 = 0;
            }
            if (var_211 <= 0) {
                var_2474 = 0;
                var_2473 = 0;
            }
            if (var_2474 == 1 && var_233[var_553].Var12 == 2) {
                var_2474 = 0;
                var_2473 = 3;
            }
            if (var_2474 == 2 && var_233[var_554].Var12 == 2) {
                var_2474 = 0;
                var_2473 = 3;
            }
            if (var_2474 == 1) {
                yield func426();
                var_233[var_553].Var4 = var_233[var_553].Var4 - 1;
                var_580 = var_580 - 1;
                var_894 = var_894 - 1;
                var_2473 = 1;
                belongings_item_list = kougeki_disc_id;
                disc_rarity = var_233[var_553].Var13;
                yield func492(); // アイテムリスト呼び出し
            }
            if (var_2474 == 2) {
                yield func427();
                var_233[var_554].Var4 = var_233[var_554].Var4 - 1;
                var_581 = var_581 - 1;
                var_895 = var_895 - 1;
                var_2473 = 1;
                belongings_item_list = bougyo_disc_id;
                disc_rarity = var_233[var_554].Var13;
                yield func492(); // アイテムリスト呼び出し
            }
            if (var_2473 == 1) {
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "い・・・息が・・・";
                comments_row2a = "";
                yield func047();
                yield func050();
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "熱で呼吸が苦しくなると";
                comments_row2a = "スタンドは弱まってしまう！";
                yield func047();
                yield func050();
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "" + item_name + "は";
                comments_row2a = "弱くなってしまった…";
                yield func047();
                yield func050();
                yield func340(); // キー入力による選択処理
            }
            if (var_2473 == 3) {
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "スタンドが弱まりそうになったが";
                comments_row2a = "漆黒のオーラに包まれていて無事だった";
                yield func047();
                yield func050();
                yield func340(); // キー入力による選択処理
            }
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        if (var_2893 == 1) {
            var_412 = var_673;
            if (var_83[var_412].Var17 != 0 || var_83[var_412].Var23 != 0) {
                return;
            }
            if (var_224 == 0 || var_97 > 90 || var_336 > 90) {
                return;
            }
            var_474 = 0;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                var_475 = rnd(var_224);
                var_475 = var_475 + 1;
                if (var_476[var_475] == 0 && var_477[var_475] == 0 && var_478[var_475] == 0 && var_479[var_475] == 0 && var_233[var_475].Var11 == 0 && var_233[var_475].Var0 != 641) {
                    var_474 = 1;
                    break;
                }
            }
            if (var_474 == 0) {
                return;
            }
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「消し炭にしてくれる！」";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func619();
            var_742 = 1;
            var_743 = 1;
            var_83[var_412].Var7 = 1;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            DSPLAY(audio_id = 128);
            var_271 = 1;
            for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                var_389 = 2;
                var_1305++;
                yield func337(); // メッセージ関係呼び出し
                var_389 = 0;
                var_1305++;
                yield func337(); // メッセージ関係呼び出し
            }
            var_271 = 0;
            var_1305 = 0;
            var_742 = 0;
            var_743 = 0;
            var_83[var_412].Var7 = 0;
            var_389 = 0;
            if (var_173 == 1) {
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "燃やす攻撃に強くなっていて平気だった";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func047();
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
                return;
            }
            if (nouryoku_disc_id == 109) {
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "装備DISCの効果で燃やされなかった";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func047();
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
                return;
            }
            var_225 = var_475;
            if (var_233[var_225].Var0 >= 800 && var_233[var_225].Var0 < 900) {
                var_455 = var_66;
                var_456 = var_67;
                var_448 = var_66;
                var_450 = var_67;
                var_1903 = 1;
                yield func414(); // ヤバいもの関係の容量設定？？
                var_1903 = 0;
            }
            belongings_item_list = var_233[var_475].Var0;
            disc_rarity = var_233[var_475].Var13;
            yield func492(); // アイテムリスト呼び出し
            target_item_name = item_name;
            for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                var_233[var_475]["Var" + cnt3] = 0;
            }
            var_233[var_475].Var0 = 641;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + target_item_name + "は";
            comments_row2 = "消し炭になった！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            if (var_128 >= 1) {
                yield func023();
            }
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        return;
    });
}
// No = 80 ラング・ラングラーの特殊能力
function enemy080(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(4);
        if (var_2830 == 0 && var_126 == 0) {
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            DSPLAY(audio_id = 161);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾗﾝｸﾞ･ﾗﾝｸﾞﾗｰは無重力を作り出した！";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            if (var_128 >= 1) {
                yield func023();
            }
            var_126 = 1;
            var_166 = 0;
            DSPLAY(audio_id = 134);
            yield func619();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "思うように動けなくなってしまった！";
            comments_row2a = "";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
        }
        return;
    });
}
// No = 87 エシディシの特殊能力
function enemy087(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_412 = var_673;
        if (var_83[var_412].Var17 != 0 || var_83[var_412].Var23 != 0) {
            return;
        }
        if (var_224 == 0 || var_97 > 90 || var_336 > 90) {
            return;
        }
        var_474 = 0;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            var_475 = rnd(var_224);
            var_475 = var_475 + 1;
            if (var_476[var_475] == 0 && var_477[var_475] == 0 && var_478[var_475] == 0 && var_479[var_475] == 0 && var_233[var_475].Var11 == 0 && var_233[var_475].Var0 != 641) {
                var_474 = 1;
                break;
            }
        }
        var_2885 = rnd(3);
        if (var_2885 != 0) {
            var_474 = 0;
        }
        if (var_474 == 0) {
            return;
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "くらってくたばれ";
        comments_row2 = "「怪焔王」の流法！！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_742 = 1;
        var_83[var_412].Var7 = 1;
        var_83[var_412].Var21 = 1;
        var_411 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_411 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_411 = 3;
        DSPLAY(audio_id = 128);
        var_271 = 1;
        for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
            var_389 = 1;
            var_1305++;
            yield func337(); // メッセージ関係呼び出し
            var_389 = 3;
            var_1305++;
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 0;
        var_83[var_412].Var21 = 0;
        var_271 = 0;
        var_1305 = 0;
        var_389 = 0;
        var_83[var_412].Var7 = 0;
        var_742 = 0;
        if (var_173 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "燃やす攻撃に強くなっていて平気だった";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        if (nouryoku_disc_id == 109) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "装備DISCの効果で燃やされなかった";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        var_225 = var_475;
        if (var_233[var_225].Var0 >= 800 && var_233[var_225].Var0 < 900) {
            var_455 = var_66;
            var_456 = var_67;
            var_448 = var_66;
            var_450 = var_67;
            var_1903 = 1;
            yield func414(); // ヤバいもの関係の容量設定？？
            var_1903 = 0;
        }
        belongings_item_list = var_233[var_475].Var0;
        disc_rarity = var_233[var_475].Var13;
        yield func492(); // アイテムリスト呼び出し
        target_item_name = item_name;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            var_233[var_475]["Var" + cnt2] = 0;
        }
        var_233[var_475].Var0 = 641;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + target_item_name + "は";
        comments_row2 = "消し炭になった！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        if (var_128 >= 1) {
            yield func023();
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2197 = 1;
        return;
    });
}
// No = 94 ブルりんの特殊能力
function enemy094(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_114 >= 1 || var_128 != 0 || var_219 != 0) {
            return;
        }
        var_2893 = rnd(3);
        if (dangeon_number == 99 && var_83[var_673].Var16 == 1) {
            var_2893 = 1;
        }
        if (var_2893 == 0) {
            return;
        }
        DSPLAY(audio_id = 136);
        var_742 = 1;
        var_83[var_673].Var7 = 1;
        var_463 = var_83[var_673].Var1;
        var_464 = var_83[var_673].Var2;
        var_114 = var_673;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ブルりんにつかまった！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[var_673].Var7 = 0;
        var_461 = var_66;
        var_462 = var_67;
        yield func619();
        var_2197 = 1;
        return;
    });
}
// No = 119 ジョセフ(3部)の特殊能力
function enemy119(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_114 >= 1 || var_128 != 0 || var_219 != 0) {
            return;
        }
        var_2893 = rnd(3);
        if (dangeon_number == 99 && var_83[var_673].Var16 == 1) {
            var_2893 = 1;
        }
        if (var_2893 == 0) {
            return;
        }
        yield func619();
        var_742 = 1;
        var_743 = 1;
        var_83[var_673].Var7 = 1;
        var_463 = var_83[var_673].Var1;
        var_464 = var_83[var_673].Var2;
        var_114 = var_673;
        DSPLAY(audio_id = 127);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ハーミットパープルが絡みついた！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        DSPLAY(audio_id = 136);
        var_1381 = 1;
        var_271 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1381++;
        }
        var_1381 = 0;
        var_271 = 0;
        var_83[var_673].Var7 = 0;
        var_743 = 0;
        var_461 = var_66;
        var_462 = var_67;
        var_2197 = 1;
        return;
    });
}
// No = 127 敵C-MOONの特殊能力
function enemy127(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(3);
        if (var_2830 == 0) {
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            DSPLAY(audio_id = 147);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "C-MOONの裏返り攻撃！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func619();
            if (nouryoku_disc_id != 120) {
                var_2904 = var_352 - var_211;
                var_211 = var_2904;
                if (var_211 == 0) {
                    var_211 = 1;
                }
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "体力が逆転してしまった！！";
                comments_row2a = "";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
            if (nouryoku_disc_id == 120) {
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "しかしメビウスの輪を作って";
                comments_row2a = "裏返り攻撃を防いだ！";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
            var_2197 = 1;
        }
        return;
    });
}
// No = 130 敵マリリンマンソンの特殊能力
function enemy130(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (wallet == 0 || var_169 <= 0 || var_169 == 999999) {
            var_2197 = 1;
            return;
        }
        var_2888 = 500;
        if (var_169 < 500) {
            var_2888 = var_169;
        }
        if (wallet < 500) {
            var_2888 = wallet;
        }
        if (var_2888 > wallet) {
            var_2888 = wallet;
        }
        if (var_169 < var_2888) {
            var_2888 = var_169;
        }
        var_169 = var_169 - var_2888;
        if (var_169 <= 0) {
            var_169 = 0;
        }
        if (var_169 == 0) {
            var_169 = 999999;
        }
        var_742 = 1;
        var_83[var_673].Var7 = 1;
        if (var_128 >= 1) {
            yield func023();
        }
        yield func619();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[var_673].Var7 = 0;
        wallet = wallet - var_2888;
        if (wallet < 0) {
            wallet = 0;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + var_2888 + " G奪われた！";
        comments_row2 = "";
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2197 = 1;
        return;
    });
}
// No = 131 ジョルノの特殊能力
function enemy131(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_412 = var_673;
        if (var_83[var_412].Var17 != 0 || var_83[var_412].Var23 != 0) {
            return;
        }
        if (var_224 == 0 || var_97 > 90 || var_336 > 90) {
            return;
        }
        var_474 = 0;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            var_475 = rnd(var_224);
            var_475 = var_475 + 1;
            if (var_476[var_475] == 0 && var_477[var_475] == 0 && var_478[var_475] == 0 && var_479[var_475] == 0 && var_233[var_475].Var11 == 0 && var_233[var_475].Var0 != 650 && var_233[var_475].Var0 != 651 && var_233[var_475].Var0 != 653 && var_233[var_475].Var0 != 654) {
                var_474 = 1;
                break;
            }
        }
        var_2885 = rnd(5);
        if (var_2885 != 0) {
            var_474 = 0;
        }
        if (var_474 == 0) {
            return;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「ゴールド・エクスペリエンス！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        DSPLAY(audio_id = 121);
        var_742 = 1;
        var_83[var_412].Var7 = 1;
        var_743 = 1;
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_83[var_412].Var7 = 0;
        var_742 = 0;
        var_743 = 0;
        if (nouryoku_disc_id == 202) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾎﾜｲﾄｱﾙﾊﾞﾑの能力によって";
            comments_row2 = "生命が生まれるのを防いだ！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        if (equip_disc[360] == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "装備DISCの効果で きかなかった";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        var_225 = var_475;
        if (var_233[var_225].Var0 >= 800 && var_233[var_225].Var0 < 900) {
            var_455 = var_66;
            var_456 = var_67;
            var_448 = var_66;
            var_450 = var_67;
            var_1903 = 1;
            yield func414(); // ヤバいもの関係の容量設定？？
            var_1903 = 0;
        }
        belongings_item_list = var_233[var_475].Var0;
        disc_rarity = var_233[var_475].Var13;
        yield func492(); // アイテムリスト呼び出し
        target_item_name = item_name;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            var_233[var_475]["Var" + cnt2] = 0;
        }
        var_2892 = "";
        var_233[var_475].Var0 = 650;
        var_2892 = "ｶｴﾙ";
        DSPLAY(audio_id = 200);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + target_item_name + "は";
        comments_row2 = "" + var_2892 + "に生まれ変わった！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        if (var_128 >= 1) {
            yield func023();
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2197 = 1;
        return;
    });
}
// No = 132 レクイエムジョルノの動作処理
function enemy132(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_146 >= 1 && var_147 == var_66 && var_148 == var_67) {
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            var_743 = 1;
            DSPLAY(audio_id = 121);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ」！";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            var_743 = 0;
            var_146 = 0;
            var_147 = 0;
            var_148 = 0;
            yield func619();
            var_389 = 2;
            var_1320 = 100;
            var_1319 = 155;
            DSPLAY(audio_id = 200);
            var_1316 = 1;
            var_271 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1316++;
            }
            var_1316 = 0;
            var_271 = 0;
            var_1906 = var_66;
            var_1907 = var_67;
            var_1908 = var_66;
            var_1909 = var_67;
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                var_309 = var_66;
                var_310 = var_67;
                var_66 = var_1906;
                var_67 = var_1907;
                yield func405();
                var_66 = var_309;
                var_67 = var_310;
                if (var_446 == 0) {
                    break;
                }
                yield func724();
                var_77[var_448][var_450] = var_854;
                var_78[var_854].Var0 = 650;
                var_78[var_854].Var1 = var_448;
                var_78[var_854].Var2 = var_450;
                var_78[var_854].Var9 = var_71[var_448][var_450];
                var_78[var_854].Var10 = 1;
            }
            yield func018();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "鉄塔がカエルに変化した！";
            comments_row2a = "";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
            var_2197 = 1;
        }
        return;
    });
}
// No = 137 成長した吉良の特殊能力
function enemy137(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(6);
        if (var_2830 == 1) {
            if (var_224 == 0) {
                return;
            }
            var_474 = 0;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
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
                var_742 = 1;
                var_83[var_673].Var7 = 1;
                var_743 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_743 = 0;
                var_742 = 0;
                var_83[var_673].Var7 = 0;
                var_233[var_475].Var15 = 2;
                DSPLAY(audio_id = 181);
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "何かが爆弾にされた！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
                var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
                var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
                yield func047();
                for (let cnt4 = 0; cnt4 < 15; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
            }
        }
        if (var_2830 == 0 && var_83[var_673].Var10 == var_201 && var_201 != 14 && var_201 != 13 && var_201 != 0) {
            var_1920 = 2;
            var_1914 = var_83[var_673].Var1;
            var_1915 = var_83[var_673].Var2;
            var_1845 = 3;
            var_2353 = var_673;
            yield func556();
            var_673 = var_2353;
            var_1920 = 0;
            var_1845 = 0;
            if (var_2110 == 0) {
                return;
            }
            var_2273 = var_97;
            var_83[var_2273].Var7 = 1;
            var_83[var_2273].Var5 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_83[var_2273].Var5 = 6;
            yield func337(); // メッセージ関係呼び出し
            var_83[var_2273].Var5 = 9;
            yield func337(); // メッセージ関係呼び出し
            var_83[var_2273].Var5 = 8;
            yield func337(); // メッセージ関係呼び出し
            var_83[var_2273].Var5 = 7;
            yield func337(); // メッセージ関係呼び出し
            var_83[var_2273].Var5 = 4;
            yield func337(); // メッセージ関係呼び出し
            var_83[var_2273].Var5 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_83[var_2273].Var5 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_83[var_2273].Var7 = 0;
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            var_1073 = rnd(3);
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_1073 == 0) {
                comments_row1 = "こォ～～ろォ～～すゥ～～っ！";
                comments_row2 = "";
            }
            if (var_1073 == 1) {
                comments_row1 = "カワイイおまえを守ってやるよ…";
                comments_row2 = "";
            }
            if (var_1073 == 2) {
                comments_row1 = "吉影や…";
                comments_row2 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                var_300 = 0;
                yield func337(); // メッセージ関係呼び出し
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "写真の親父が吉良を助けに来た！";
            comments_row2a = "";
            yield func047();
            yield func050();
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
        }
        return;
    });
}
// No = 144 川尻浩作の特殊能力
function enemy144(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_412 = var_673;
        if (wallet < 10) {
            return;
        }
        if (var_83[var_412].Var17 != 0 || var_83[var_412].Var23 != 0 || var_83[var_412].Var26 != 0) {
            return;
        }
        var_2885 = rnd(4);
        DSPLAY(audio_id = 122);
        var_742 = 1;
        var_743 = 1;
        var_83[var_412].Var7 = 1;
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_83[var_412].Var7 = 0;
        var_742 = 0;
        var_743 = 0;
        var_83[var_412].Var26 = 1;
        belongings_item_list = 1;
        var_417 = belongings_item_list;
        stolen_money = Math.floor(wallet / 2);
        wallet = wallet - stolen_money;
        if (wallet < 0) {
            wallet = 0;
        }
        target_item_name = "" + stolen_money + "G";
        var_419 = var_412 + 200;
        var_78[var_419].Var0 = 1;
        var_78[var_419].Var1 = 0;
        var_78[var_419].Var2 = 0;
        var_78[var_419].Var3 = 0;
        var_78[var_419].Var4 = 0;
        var_78[var_419].Var5 = 0;
        var_78[var_419].Var6 = 0;
        var_78[var_419].Var7 = 0;
        var_78[var_419].Var8 = 0;
        var_78[var_419].Var9 = 0;
        var_78[var_419].Var10 = 0;
        var_78[var_419].Var11 = 0;
        var_78[var_419].Var12 = 0;
        var_78[var_419].Var13 = stolen_money;
        var_78[var_419].Var14 = 0;
        var_78[var_419].Var15 = 0;
        var_78[var_419].Var16 = 0;
        var_78[var_419].Var17 = 0;
        var_78[var_419].Var18 = 0;
        var_78[var_419].Var19 = 0;
        var_78[var_419].Var20 = 0;
        var_78[var_419].Var21 = 0;
        var_78[var_419].Var22 = 0;
        var_78[var_419].Var23 = 0;
        var_78[var_419].Var24 = 0;
        var_78[var_419].Var25 = 0;
        var_78[var_419].Var26 = 0;
        var_78[var_419].Var27 = 0;
        var_78[var_419].Var28 = 0;
        var_78[var_419].Var29 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "川尻浩作に";
        if (var_127 == 1 || var_132 >= 1) {
            comments_row1 = "何者かに";
        }
        comments_row2 = "" + target_item_name + "を盗まれた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        if (var_128 >= 1) {
            yield func023();
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2197 = 1;
        return;
    });
}
// No = 157 アナスイの特殊能力
function enemy157(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_412 = var_673;
        if (var_83[var_412].Var17 != 0 || var_83[var_412].Var23 != 0) {
            return;
        }
        if (var_224 == 0 || var_97 > 90 || var_336 > 90) {
            return;
        }
        var_474 = 0;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            var_475 = rnd(var_224);
            var_475 = var_475 + 1;
            if (var_233[var_475].Var0 >= 800 && var_233[var_475].Var0 < 900 && var_233[var_475].Var11 == 0) {
                var_474 = 1;
                break;
            }
        }
        var_2885 = rnd(3);
        if (var_2885 != 0) {
            var_474 = 0;
        }
        if (var_474 == 0) {
            return;
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "いいもの持ってるな…";
        comments_row2 = "解体してやる！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        DSPLAY(audio_id = 122);
        var_742 = 1;
        var_83[var_412].Var7 = 1;
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_389 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_83[var_412].Var7 = 0;
        var_742 = 0;
        if (equip_disc[119]) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "破壊されそうになったが";
            comments_row2 = "柔らかくしていて平気だった。";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        var_488 = var_233[var_225].Var0;
        yield func100();
        var_225 = var_475;
        if (var_233[var_225].Var0 >= 800 && var_233[var_225].Var0 < 900) {
            var_455 = var_66;
            var_456 = var_67;
            var_448 = var_66;
            var_450 = var_67;
            var_1903 = 1;
            yield func414(); // ヤバいもの関係の容量設定？？
            var_1903 = 0;
        }
        belongings_item_list = var_233[var_475].Var0;
        yield func492(); // アイテムリスト呼び出し
        target_item_name = item_name;
        var_225 = var_475;
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + target_item_name + "は";
        comments_row2 = "バラバラにされてしまった！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        if (var_128 >= 1) {
            yield func023();
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2197 = 1;
        return;
    });
}
// No = 158 プッツン由花子の特殊能力
function enemy158(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2893 = rnd(3);
        if (var_2893 == 0 || var_114 >= 1 || var_128 != 0 || var_219 != 0) {
            return;
        }
        yield func619();
        var_742 = 1;
        var_83[var_673].Var7 = 1;
        var_463 = var_83[var_673].Var1;
        var_464 = var_83[var_673].Var2;
        var_114 = var_673;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「絶対に逃がさないわッ！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        DSPLAY(audio_id = 136);
        var_1382 = 1;
        var_271 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1382++;
        }
        var_1382 = 0;
        var_271 = 0;
        var_83[var_673].Var7 = 0;
        var_461 = var_66;
        var_462 = var_67;
        var_2197 = 1;
        return;
    });
}
// No = 160 ウェストウッド看守の特殊能力
function enemy160(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_128 != 0 || var_219 != 0) {
            return;
        }
        if (var_114 == 0) {
            var_2893 = rnd(9);
            if (dangeon_number == 99 && var_83[var_673].Var16 == 1) {
                var_2893 = 6;
            }
            if (var_2893 <= 5) {
                return;
            }
            DSPLAY(audio_id = 136);
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            var_463 = var_83[var_673].Var1;
            var_464 = var_83[var_673].Var2;
            var_114 = var_673;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ｳｴｽﾄｳｯﾄﾞ看守「完全に【ロック】したぜ」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_673].Var7 = 0;
            var_461 = var_66;
            var_462 = var_67;
            yield func619();
            var_2197 = 1;
            return;
        }
        if (var_114 != 0 && var_114 == var_673) {
            var_601 = rnd(5);
            for (let cnt3 = 0; cnt3 < 12; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_601 == 0) {
                comments_row1 = "「スカッとキレまくって　はらしてやる！！」";
                comments_row2 = "";
            }
            if (var_601 == 1) {
                comments_row1 = "「カスのくせによォォ～～";
                comments_row2 = "　ええ！　ナメやがって　てめえ」";
            }
            if (var_601 == 2) {
                comments_row1 = "「オレは最強だ！はらしてやる！」";
                comments_row2 = "";
            }
            if (var_601 == 3) {
                comments_row1 = "「お前はもう戦闘不能なんだあああ」";
                comments_row2 = "";
            }
            if (var_601 == 4) {
                comments_row1 = "「とどめが来たぞォ―――ッ！」";
                comments_row2 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            yield func340(); // キー入力による選択処理
            var_601 = rnd(20);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            if (var_601 == 0) {
                comments_row1a = "「ｱｰｽ･ｳｨﾝﾄﾞ･ｱﾝﾄﾞ･ﾌｧｲﾔｰ」！！";
                comments_row2a = "";
            }
            if (var_601 >= 1) {
                comments_row1a = "「プラネット・ウェイブス」！！";
                comments_row2a = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            var_271 = 1;
            var_1440 = 1;
            var_1442 = rnd(2);
            if (var_1442 == 0) {
                var_1427 = 0;
                var_1428 = 0;
            }
            if (var_1442 == 1) {
                var_1427 = 320 - 40;
                var_1428 = 0;
            }
            DSPLAY(audio_id = 201);
            for (let cnt3 = 0; cnt3 < 7; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                if (var_1442 == 0) {
                    var_1427 = var_1427 + 20;
                    var_1428 = var_1428 + 20;
                }
                if (var_1442 == 1) {
                    var_1427 = var_1427 - 20;
                    var_1428 = var_1428 + 20;
                }
                var_1440 = var_1440 + 1;
            }
            var_271 = 0;
            var_1440 = 0;
            yield func584();
            if (var_2803 == 1) {
                var_2197 = 1;
                return;
            }
            var_389 = 2;
            var_209 = 50;
            DSPLAY(audio_id = 115);
            if (var_83[var_673].Var39 >= 2) {
                var_209 = (var_83[var_673].Var39 - 1) * 2 + var_209;
            }
            if (var_128 >= 1) {
                var_209 = Math.floor(var_209 * 3 / 2);
            }
            if (var_128 >= 1) {
                yield func023();
            }
            if (equip_disc[205] == 1) {
                var_209 = Math.floor(var_209 * 2 / 3);
            }
            // アイテム「鉄球」を使用して射撃攻撃ダメージがアップしている場合
            if (var_168 == 1) {
                var_209 = Math.floor(var_209 * 2 / 3);
            }
            var_747 = 1;
            var_389 = 2;
            var_211 = var_211 - var_209;
            var_208 = var_208 + var_209;
            if (var_211 <= 0) {
                var_211 = 0;
                var_356 = 257;
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "隕石が直撃した！";
            comments_row2 = "" + var_209 + "のダメージを喰らった！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                var_585 = 3;
                yield func337(); // メッセージ関係呼び出し
                var_585 = 0;
                yield func337(); // メッセージ関係呼び出し
            }
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
            var_2197 = 1;
            return;
        }
        return;
    });
}
// No = 170 敵カタツムリの特殊能力
function enemy170(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_133 == 0 && var_127 == 0) {
            var_742 = 1;
            var_83[var_673].Var7 = 1;
    
            DSPLAY(audio_id = 123);
            if (var_128 >= 1) {
                yield func023();
            }
            yield func619();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (equip_disc[396] == 0) {
                if (var_157 == 0) {
                    var_133 = 1;
                    var_397 = 0;
                }
                if (var_157 != 0) {
                    var_157 = 0;
                    var_158 = 0;
                }
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "動作がノロくなってしまった！";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (equip_disc[396] == 1) {
                yield func340(); // キー入力による選択処理
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "しかし装備スタンドの効果で";
                comments_row2a = "速度は遅くならない！";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
        }
        var_2197 = 1;
        return;
    });
}
// No = 999 没敵の特殊能力
function enemy999(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(4);
        if (var_2830 == 0 && var_565 >= 1) {
            if (var_128 >= 1) {
                yield func023();
            }
            yield func619();
            if (var_83[var_673].Var5 == 2) {
                var_2889 = 8;
            }
            if (var_83[var_673].Var5 == 8) {
                var_2889 = 2;
            }
            if (var_83[var_673].Var5 == 4) {
                var_2889 = 6;
            }
            if (var_83[var_673].Var5 == 6) {
                var_2889 = 4;
            }
            if (var_83[var_673].Var5 == 7) {
                var_2889 = 3;
            }
            if (var_83[var_673].Var5 == 9) {
                var_2889 = 1;
            }
            if (var_83[var_673].Var5 == 1) {
                var_2889 = 9;
            }
            if (var_83[var_673].Var5 == 3) {
                var_2889 = 7;
            }
            var_83[var_673].Var5 = var_2889;
            var_83[var_673].Var7 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_742 = 1;
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "『プ…』";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_389 = 2;
            var_271 = 1;
            var_458 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_458++;
                var_742 = 1;
            }
            var_271 = 0;
            var_458 = 0;
            var_389 = 0;
            var_742 = 0;
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_565 = var_565 - 1;
            if (var_565 <= 0) {
                var_565 = 0;
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "精神力が下がってしまった！";
            comments_row2a = "";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
        }
        return;
    });
}
// No = 9999 没敵(ジョナサン,ジョセフ等の波紋使い?)の特殊能力
function enemy9999(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2830 = rnd(4);
        if (var_2830 == 0 && var_134 == 0) {
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            if (nouryoku_disc_id != 116 && var_125 == 0) {
                var_134 = 1;
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "オーバードライブ！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (nouryoku_disc_id == 116 || var_125 >= 1) {
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "しかし波紋に強くなっていて平気だった";
                comments_row2a = "";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
            yield func619();
            var_2197 = 1;
        }
        return;
    });
}
// No = 没敵(昇り調子の大柳賢)の特殊能力
function enemy9999a(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_128 != 0 || var_219 != 0) {
            return;
        }
        var_2894 = 0;
        var_2895 = 0;
        var_2896 = var_673;
        if (kougeki_disc_id != 0) {
            yield func426();
            if (var_233[var_553].Var4 != 0) {
                var_2895 = 1;
                var_2897 = var_553;
            }
        }
        if (bougyo_disc_id != 0) {
            yield func427();
            if (var_233[var_554].Var4 != 0) {
                var_2895 = 2;
                var_2897 = var_554;
            }
        }
        if (nouryoku_disc_id != 0) {
            yield func428();
            if (var_233[var_555].Var4 != 0) {
                var_2895 = 4;
                var_2897 = var_555;
            }
        }
        if (shageki_disc_id != 0) {
            var_2895 = 3;
        }
        if (var_2895 >= 1) {
            if (var_83[var_2896].Var5 == 2) {
                var_199 = 8;
            }
            if (var_83[var_2896].Var5 == 8) {
                var_199 = 2;
            }
            if (var_83[var_2896].Var5 == 4) {
                var_199 = 6;
            }
            if (var_83[var_2896].Var5 == 6) {
                var_199 = 4;
            }
            if (var_83[var_2896].Var5 == 1) {
                var_199 = 9;
            }
            if (var_83[var_2896].Var5 == 3) {
                var_199 = 7;
            }
            if (var_83[var_2896].Var5 == 7) {
                var_199 = 3;
            }
            if (var_83[var_2896].Var5 == 9) {
                var_199 = 1;
            }
            var_83[var_2896].Var21 = 1;
            var_411 = 1;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_2898 = rnd(3);
            comments_row1 = "いくぞッ！";
            comments_row2 = "ジャアァ～～～ン　ケン！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            var_2899 = rnd(6);
            if (var_2899 == 0) {
                var_411 = 2;
                var_2894 = 2;
                var_1258 = 3;
            }
            if (var_2899 == 1) {
                var_411 = 2;
                var_2894 = 1;
                var_1258 = 2;
            }
            if (var_2899 == 2) {
                var_411 = 3;
                var_2894 = 2;
                var_1258 = 1;
            }
            if (var_2899 == 3) {
                var_411 = 3;
                var_2894 = 1;
                var_1258 = 3;
            }
            if (var_2899 == 4) {
                var_411 = 4;
                var_2894 = 2;
                var_1258 = 2;
            }
            if (var_2899 == 5) {
                var_411 = 4;
                var_2894 = 1;
                var_1258 = 1;
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "";
            comments_row2a = "『ホイッ！！』";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        if (var_2894 == 1) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "勝ったッ！";
            comments_row2a = "エネルギーをいただくよッ！";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1258 = 0;
            var_389 = 2;
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                var_411 = 5;
                for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_411 = 6;
                for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_411 = 7;
                for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
            }
            var_411 = 8;
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_2896].Var21 = 0;
            var_411 = 0;
            var_389 = 0;
            if (var_2895 == 1 || var_2895 == 2 || var_2895 == 4) {
                if (var_2895 == 1) {
                    var_580 = var_580 - 1;
                    var_894 = var_894 - 1;
                }
                if (var_2895 == 2) {
                    var_581 = var_581 - 1;
                    var_895 = var_895 - 1;
                }
                var_233[var_2897].Var4 = var_233[var_2897].Var4 - 1;
                belongings_item_list = var_233[var_2897].Var0;
                disc_rarity = var_233[var_2897].Var13;
                yield func492(); // アイテムリスト呼び出し
                var_2900 = item_name;
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "" + var_2900 + " の";
                comments_row2a = "エネルギーを １ 吸い取られた！";
                var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
                var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
                var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
                return;
            }
            if (var_2895 == 3) {
                yield func429();
                var_2897 = var_556;
                var_2901 = rnd(5);
                var_2901 = var_2901 + 3;
                var_233[var_2897].Var3 = var_233[var_2897].Var3 - var_2901;
                belongings_item_list = var_233[var_2897].Var0;
                disc_rarity = var_233[var_2897].Var13;
                yield func492(); // アイテムリスト呼び出し
                var_2900 = item_name;
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "" + var_2900 + " の";
                comments_row2a = "エネルギーを " + var_2901 + " 吸い取られた！";
                var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
                var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
                var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                if (var_233[var_2897].Var3 < 1 && var_233[var_2897].Var0 >= 400 && var_233[var_2897].Var0 < 500) {
                    for (let cnt5 = 0; cnt5 < 20; ++cnt5) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "" + var_2900 + "は";
                    comments_row2a = "ｽﾀﾝﾄﾞﾊﾟﾜｰが尽きて消滅した";
                    var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                    var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                    var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    yield func050();
                    var_225 = var_2897;
                    yield func433(); // アイテム配列(所持アイテム)初期化関数
                    var_479 = dim(40);
                    var_250 = 0;
                    shageki_disc_id = 0;
                    yield func494();
                }
                for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
                return;
            }
        }
        if (var_2894 == 2) {
            var_83[var_2896].Var21 = 0;
            var_411 = 0;
            var_1258 = 0;
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ま…　負け…　た";
            comments_row2a = "う～～～う～～～うう～～～";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        if (var_2895 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_2898 = rnd(3);
            if (var_2898 == 0) {
                comments_row1 = "ジャンケンしようよぉ～～";
            }
            if (var_2898 == 1) {
                comments_row1 = "ねえったら～～";
            }
            if (var_2898 == 2) {
                comments_row1 = "ジャンケンがしたいんだよ…";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func047();
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        return;
    });
}