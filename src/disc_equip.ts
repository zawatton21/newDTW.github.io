// No = 100 スタープラチナの発動能力
function stand100(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_155 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "射撃攻撃を防げるようになった！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        DSPLAY(audio_id = 182);
        var_1299 = 8;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 101 シルバーチャリオッツの発動処理
function stand101(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_420 != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "チャリオッツは分身中だ。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_234 = 0;
            var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_2299 = 1;
        var_1845 = 1;
        yield func556();
        var_83[var_673].Var11 = 1;
        var_2299 = 0;
        var_1845 = 0;
        if (var_2110 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "チャリオッツを出せる場所が無いぞ。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_234 = 0;
            var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        for (let cnt2 = 0; cnt2 < 7; ++cnt2) {
            var_2299 = 1;
            var_1845 = 1;
            yield func556();
            var_83[var_673].Var11 = 1;
            var_2299 = 0;
            var_1845 = 0;
        }
        var_420 = 7;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ブラボー！";
        comments_row2 = "おお…　ブラボー！！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            var_1259 = 1;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_1259 = 2;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_1259 = 3;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_1259 = 2;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_1259 = 1;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "フフフ･･･";
        comments_row2a = "感覚の目でよーく見てろ！";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            var_1259 = 1;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_1259 = 2;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_1259 = 3;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_1259 = 2;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_1259 = 1;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        var_1259 = 0;
        var_199 = 2;
        yield func337(); // メッセージ関係呼び出し
        for (let cnt2 = 0; cnt2 < var_97 + 1; ++cnt2) {
            if (var_83[cnt2][0] == 146 && var_83[cnt2][31] == 5) {
                var_83[cnt3][11] = 0;
            }
        }
        DSPLAY(audio_id = 112); // 刀の切れる音 or 強化した時のシャキーン 効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "これだ！　甲冑を外したスタンド";
        comments_row2a = "「シルバー・チャリオッツ」！";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 102 キングクリムゾンの発動処理
function stand102(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「キング・クリムゾン」！！";
        comments_row2 = "我以外の時間は消し飛ぶ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        var_393 = dim(10, 10);
        if (var_123 == 0) {
            var_396 = y_axis_map_image; // map.gifのy軸座標指定。gcopy(5)
        }
        var_123 = 1;
        y_axis_map_image = 17; // map.gifのy軸座標指定。gcopy(5)
        var_114 = 0;
        var_463 = 0;
        var_464 = 0;
        var_461 = 0;
        var_462 = 0;
        DSPLAY(audio_id = 185);
        var_271 = 1;
        var_1491 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
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
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 103 エコーズAct3の発動能力
function stand103(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_570 == 0) {
            bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
        }
        if (var_570 == 1) {
            bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
        }
        if (var_570 == 2) {
            bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
        }
        if (var_570 == 3) {
            bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
        }
        var_1283 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ACT ３ FREEZE　！！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_2261 = kougeki_disc_id;
        kougeki_disc_id = 103;
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
        DSPLAY(audio_id = 122);
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
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
            
                    DSPLAY(audio_id = 162);
                }
                if (var_83[var_2231].Var15 != 0) {
                    var_83[var_2231].Var14 = 0;
                    var_83[var_2231].Var15 = 0;
                }
                var_747 = 1;
            }
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1283 = 0;
        kougeki_disc_id = var_2261;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 104 ザ・ハンドの発動処理
function stand104(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_570 == 0) {
            bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
        }
        if (var_570 == 1) {
            bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
        }
        if (var_570 == 2) {
            bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
        }
        if (var_570 == 3) {
            bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
        }
        var_1283 = 1;
        var_2261 = kougeki_disc_id;
        kougeki_disc_id = 104;
        var_243 = 1;
        var_1194 = 1;

        DSPLAY(audio_id = 121);
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "空間をけずりとる！ ";
        comments_row2 = "……するとお～～～～っ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
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
        for (let cnt2 = 0; cnt2 < 40; ++cnt2) {
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
                for (let cnt4 = 0; cnt4 < 20; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                break;
            }
        }
        var_1283 = 0;
        kougeki_disc_id = var_2261;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        if (var_72[var_66][var_67] == 0 && var_85 == 0 && var_163 == 0) {
            yield func722(); // アイテムを所持した状態で店から出た際の動作処理(泥棒状態認定)
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 105 チリペッパーの発動処理
function stand105(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        gsel(19);
        color(255, 255, 255);

        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_311 = 255;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "限界なく明るくなるッ！！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();

        DSPLAY(audio_id = 161);
        var_312 = 1;
        for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 - 5;
        }
        var_312 = 0;
        var_103 = 1;
        var_121 = 1;
        var_2194 = 1;
        for (let cnt2 = 0; cnt2 < var_336; ++cnt2) {
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
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 106 クレイジーDの発動処理
function stand106(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_220 == 0 && var_234 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            var_570 = var_233[var_225].Var13;
        }
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            var_570 = var_486[var_682][var_225][13];
        }
        if (var_234 == 1) {
            var_570 = var_78[var_321].Var13;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ベースとなるアイテムを選んでください";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        var_2286 = var_225;
        var_198 = 0;
        var_1240 = 1;
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            var_2287 = 1;
        }
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
// No = 107 デス13の発動能力
function stand107(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_570 == 0) {
            bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
        }
        if (var_570 == 1) {
            bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
        }
        if (var_570 == 2) {
            bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
        }
        if (var_570 == 3) {
            bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
        }
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        DSPLAY(audio_id = 131);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「ラリホ～～～～～っ！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_1940 = var_199;
        var_199 = 2;
        var_271 = 1;
        var_1592 = 1;
        for (let cnt2 = 0; cnt2 < 34; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1592++;
        }
        var_271 = 0;
        var_1592 = 0;
        var_2265 = 0;
        var_2194 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
                // var_172 == 1 プロシュートの兄貴のDISCを使用して発動能力がUPしている場合
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
    
            DSPLAY(audio_id = 132);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_199 = var_1940;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 108 スティッキー・フィンガーズの発動処理
function stand108(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_570 == 0) {
            bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
        }
        if (var_570 == 1) {
            bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
        }
        if (var_570 == 2) {
            bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
        }
        if (var_570 == 3) {
            bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "こいつ自身に見せつけるしかねえッ！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_199 = 2;
        var_1600 = 1;
        var_271 = 1;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            if (var_1600 == 3) {
                var_389 = 2;

                DSPLAY(audio_id = 105);
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
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func051();
        DSPLAY(audio_id = 148);
        var_747 = 1;
        var_1212 = 1;
        var_108 = 1;
        var_471 = 3;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_471 = 4;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_471 = 5;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_471 = 6;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_471 = 7;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_471 = 8;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_471 = 0;
        var_1212 = 0;
        var_108 = 0;
        var_218 = 30;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「覚悟」ってのはこういうことだぜ…";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 109 マジシャンズレッドの発動処理
function stand109(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        var_199 = 2;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_271 = 1;
        var_1545 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_1545 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_1545 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_1545 = 4;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "クロスファイヤーハリケーンスペシャル！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        gsel(19);
        color(255, 0, 0);

        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_529 = 1;

        DSPLAY(audio_id = 128);
        var_1548 = 7;
        // yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_1548 = 8;
        // yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
    
            DSPLAY(audio_id = 128);
            var_1548 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_1548 = 2;
            yield func337(); // メッセージ関係呼び出し
        }
        var_1548 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            for (let cnt3 = 0; cnt3 < 300; ++cnt3) {
                var_1550 = rnd(var_33);
                var_230 = rnd(var_34);
                if (var_71[var_1550][var_230] == var_201 && var_82[var_1550][var_230] != 0 && var_71[var_1550][var_230] != 14) {
                    var_421 = var_82[var_1550][var_230];
                    var_271 = 1;
                    var_1549 = 1;
                    for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                        yield func337(); // メッセージ関係呼び出し
                        var_1549++;
                    }
                    var_1549 = 0;
                    var_403 = "クロスファイヤーハリケーンスペシャル！";
                    enemy_list = var_83[var_421].Var0;
                    yield func626(); // 敵リスト
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
                    for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                        yield func337(); // メッセージ関係呼び出し
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
            
                    DSPLAY(audio_id = 128);
                    for (let cnt5 = 0; cnt5 < 7; ++cnt5) {
                        yield func337(); // メッセージ関係呼び出し
                        var_1547++;
                    }
                    var_1547 = 0;
                    var_768 = 0;
                    var_2274 = 0;
                    yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                    break;
                }
            }
        }
        var_1545 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_1545 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_1545 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_1545 = 0;
        var_271 = 0;
        var_529 = 0;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 110 B･D･ザ･ハウスのDISCの発動の処理
function stand110(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 111 ザ・ワールドの発動能力
function stand111(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_163 = 1;
        var_164 = 1;
        var_153 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「ザ・ワールド」！！";
        comments_row2 = "時よ止まれ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_114 = 0;
        var_463 = 0;
        var_464 = 0;
        var_461 = 0;
        var_462 = 0;
        DSPLAY(audio_id = 185);
        var_271 = 1;
        var_1491 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1491++;
        }
        var_271 = 0;
        var_1491 = 0;
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
// No = 112 キラークイーン(No = 394 キラータイガークイーン)の発動処理
function stand112(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "そこには出せないぞ。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_234 = 0;
            var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
        DSPLAY(audio_id = 168);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1583++;
        }
        var_271 = 0;
        var_1583 = 0;
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「シアー・ハート・アタック」！！";
        comments_row2 = "狙った標的は必ず仕留める…";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 113 クラッシュの発動処理
function stand113(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_570 == 0) {
            bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
        }
        if (var_570 == 1) {
            bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
        }
        if (var_570 == 2) {
            bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
        }
        if (var_570 == 3) {
            bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
        }
        var_1283 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「クラッシュ！くらいつけッ！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_2261 = kougeki_disc_id;
        kougeki_disc_id = 113;
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
        DSPLAY(audio_id = 104);
        if (var_82[var_347][var_348] != 0) {
            var_314 = var_82[var_347][var_348];
            if (var_83[var_314].Var0 != 50) {
                var_747 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func669();
            }
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1283 = 0;
        kougeki_disc_id = var_2261;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 114 ホワイトスネイクの発動処理
function stand114(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_570 == 0) {
            bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
        }
        if (var_570 == 1) {
            bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
        }
        if (var_570 == 2) {
            bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
        }
        if (var_570 == 3) {
            bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
        }
        var_1283 = 1;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「一手」 遅カッタ…ナ…！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_2261 = kougeki_disc_id;
        kougeki_disc_id = 114;
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
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        gsel(19);
        color(255, 255, 255);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_311 = 0;
        var_312 = 1;
        for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 + 5;
        }
        if (var_82[var_347][var_348] != 0) {
    
            DSPLAY(audio_id = 123);
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
        for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 - 5;
        }
        var_312 = 0;
        var_1283 = 0;
        kougeki_disc_id = var_2261;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 115 Gエクスペリエンスの発動処理
function stand115(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "生まれろ…　新しい生命…";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
            var_300 = 0;
            yield func337(); // メッセージ関係呼び出し
        }
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
            var_2272 = 1;
            var_1845 = 1;
            yield func556();
            var_2272 = 0;
            var_1845 = 0;
            if (var_2110 != 0) {
                var_2273 = var_97;
                var_83[var_2273].Var21 = 1;
                var_411 = 1;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    var_300 = 0;
                    yield func337(); // メッセージ関係呼び出し
                }
                var_411 = 2;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    var_300 = 0;
                    yield func337(); // メッセージ関係呼び出し
                }
                var_411 = 3;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    var_300 = 0;
                    yield func337(); // メッセージ関係呼び出し
                }
                var_411 = 4;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    var_300 = 0;
                    yield func337(); // メッセージ関係呼び出し
                }
                var_411 = 0;
                var_83[var_2273].Var21 = 0;
                var_83[var_2273].Var5 = 2;
            }
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 116 ハーミットパープルの発動能力
function stand116(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_1940 = var_199;
        var_199 = 2;
        var_1258 = 3;
        DSPLAY(audio_id = 127);
        var_271 = 1;
        var_1480 = 1;
        for (let cnt2 = 0; cnt2 < 14; ++cnt2) {
            var_1480++;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        var_271 = 0;
        var_1480 = 0;
        var_1258 = 0;
        var_175 = 0;
        var_176 = 0;
        var_2268 = 0;
        var_2269 = 0;
        var_2270 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
            // enemy_list = 113 DIO
            if (var_83[var_2270].Var0 == 113) {
                var_2271 = rnd(20);
                if (var_2271 >= 10) {
                    var_2269 = var_2270;
                    break;
                }
            }
            // enemy_list = 115 アクア・ネックレス
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
            DSPLAY(audio_id = 184);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "この階の地図を念写した！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            var_102 = 1;
        }
        if (var_2269 >= 1) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「きさま、見ているなッ！！」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
            var_176 = var_2269;
            var_198 = 0;
        }
        if (var_2268 >= 1) {
            DSPLAY(audio_id = 184);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "この階のｱｸｱ･ﾈｯｸﾚｽを念写した！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
            var_175 = var_2268;
            var_198 = 0;
        }
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = var_1940;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 117 ダークブルームーンの発動処理
function stand117(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        gsel(19);
        color(0, 0, 150);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_2307 = 0;
        var_529 = 1;
        var_403 = "フジツボでエネルギーを吸い取っている！";
        var_2217 = 1;
        var_2194 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        yield func337(); // メッセージ関係呼び出し
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
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func515();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func515();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func515();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func515();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func515();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func515();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func515();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
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
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func515();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func515();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func515();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                }
            }
            var_2194 = var_2194 + 1;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_529 = 0;
        if (var_2307 != 0) {
            DSPLAY(audio_id = 143);
            var_1299 = 0;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_211 = var_211 + var_2307;
            if (var_211 > var_352) {
                var_211 = var_352;
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "合計 " + var_2307 + " のエネルギーを吸収した。";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_2217 = 0;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 118 ダイバーダウンの発動処理
function stand118(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        var_2338 = 94;
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
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "この辺りには潜ませられない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        DSPLAY(audio_id = 165);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "地面にダイバーダウンを潜ませた。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 119 スパイス・ガールの発動処理
function stand119(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        DSPLAY(audio_id = 152);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "体にゴムのような弾力がついた！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_150 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 120 ストーンフリーの発動処理
function stand120(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "『ストーンフリーーッ！』";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1558 = 160;
        var_1559 = 160;
        var_271 = 1;
        var_1557 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1557++;
            var_198 = 1;
            var_300 = 0;
        }
        var_271 = 0;
        var_1557 = 0;
        var_211 = var_352;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "傷口を縫って体力が回復した。";
        comments_row2a = "";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 121 パープルヘイズの発動処理
function stand121(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        gsel(19);
        color(150, 0, 150);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_529 = 1;
        var_403 = "ウイルスが敵の体を蝕んでいる！";
        var_2217 = 1;
        var_2194 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        yield func337(); // メッセージ関係呼び出し
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
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
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
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                }
            }
            var_2194 = var_2194 + 1;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_529 = 0;
        var_2217 = 0;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 122 アヌビス神の発動処理 
function stand122(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_2267 = dim(10);
        var_143 = 1;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「どの程度の ふみ込みまで";
        comments_row2 = "　耐えられるか 憶えるゼ！」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }

        DSPLAY(audio_id = 140);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 123 クリームの発動処理
function stand123(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_340 = 123;
        var_1264 = 0;
        var_1218 = 1;
        var_1219 = 0;
        for (let cnt2 = 0; cnt2 < 25; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_455 = var_66;
        var_456 = var_67;
        var_1220 = 1;
        var_198 = 0;
        var_1222 = 1;
        yield func337(); // メッセージ関係呼び出し
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
        belongings_item_list = var_233[var_225].Var0;
        yield func492(); // アイテムリスト呼び出し
        var_1218 = 3;
        var_1195 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
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
            // 幽霊部屋
            if (special_floor == 9 && var_71[var_455][var_456] == 0) {
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
                yield func722(); // アイテムを所持した状態で店から出た際の動作処理(泥棒状態認定)
            }
            if (var_71[var_455][var_456] == 0) {
                var_71[var_455][var_456] = 14;
            }
            if (var_77[var_455][var_456] > 0) {
                var_77[var_455][var_456] = 0;
            }
            if (special_floor != 9) {
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
            yield func337(); // メッセージ関係呼び出し
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        var_1195 = 0;
        var_1218 = 2;
        var_1219 = 0;
        yield func016();
        for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1218 = 0;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 124 ムーディー・ブルースの発動処理
function stand124(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_407 == 2) {
            var_2320 = 0;
            var_2321 = sdim(100, 10);
            for (let cnt3 = 0; cnt3 < 8; ++cnt3) {
                var_2321[cnt3] = "" + var_1070[cnt3];
                if (var_1069[cnt3][4] == 0) {
                    var_2321[cnt4] = "(no entry)";
                }
                if (var_1069[cnt3][4] != 0) {
                    var_2320++;
                }
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "誰に送りますか？";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            yield func051();
            var_2322 = 0;
            var_1210 = 1;
            var_2323 = 0;
            var_2324 = 8;
            var_2325 = var_2324 - 1;
            var_2326 = var_2324 * 20 + 37 + 30;
            Y_axis_item_position = 45;
            for (let cnt3 = 0; true; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                yield func080(); // 各キー入力確認
                if (key_X_on == 1) {
        
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    var_2322 = 1;
                    break;
                }
                if (key_Z_on == 1 || key_A_on == 1) {
                    if (var_2321[var_2323] != "(no entry)") {
                        if (var_2321[var_2323] != var_40) {
                
                            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                            break;
                        }
                    }
                }
                if (var_259 == 1) {
                    if (var_2323 != 7) {
                        Y_axis_item_position = Y_axis_item_position + 22;
                        var_2323 = var_2323 + 1;
    
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        // yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        continue;
                    }
                    if (var_2323 == 7) {
                        Y_axis_item_position = 45;
                        var_2323 = 0;
    
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        // yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        continue;
                    }
                }
                if (var_255 == 1) {
                    if (var_2323 != 0) {
                        Y_axis_item_position = Y_axis_item_position - 22;
                        var_2323 = var_2323 - 1;
    
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        // yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        continue;
                    }
                    if (var_2323 == 0) {
                        Y_axis_item_position = 45 + 7 * 22;
                        var_2323 = 7;
    
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        // yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        continue;
                    }
                }
            }
            var_1210 = 0;
            if (var_2322 == 0) {
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "どれを送りますか？";
                comments_row2 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func047();
                for (let cnt4 = 0; cnt4 < 4; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func340(); // キー入力による選択処理
                var_2300 = var_225;
                var_2301 = 0;
                if (var_220 != 0) {
                    var_2301 = 1;
                }
                if (var_234 != 0) {
                    var_2301 = 2;
                }
                var_2007 = 1;
                item_page_number = 1;
                Y_axis_item_position = 45;
                var_225 = 1;
                var_223 = var_224 + 10;
                var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                yield func051();
                open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                return;
            }
        }
        if (var_407 == 1 && var_536 == 1 && dangeon_number == int(var_1068[12])) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "どれを相手に送りますか？";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            var_2300 = var_225;
            var_2301 = 0;
            if (var_220 != 0) {
                var_2301 = 1;
            }
            if (var_234 != 0) {
                var_2301 = 2;
            }
            var_2007 = 1;
            item_page_number = 1;
            Y_axis_item_position = 45;
            var_225 = 1;
            var_223 = var_224 + 10;
            var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            yield func051();
            open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "どれを倉庫に送りますか？";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
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
// No = 200 スーパーフライの発動処理
function stand200(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_73[var_66][var_67] != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここには鉄塔を建てられない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「スーパーフライ！」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        var_147 = var_66;
        var_148 = var_67;
        var_146 = 1;

        DSPLAY(audio_id = 188);
        var_114 = 0;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "鉄塔を建てた！";
        comments_row2a = "";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 201 イエローテンパランスの発動処理
function stand201(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "このオレのスタンド「黄の節制」に";
        comments_row2 = "弱点はない！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        DSPLAY(audio_id = 123);
        var_271 = 1;
        var_1310 = 1;
        var_374 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
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
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "このフロアで熱と冷気に強くなった！";
        comments_row2a = "";
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        var_173 = 1;
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 202 ホワイトアルバムの発動処理
function stand202(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "低温世界で動ける物質はなにもなくなる";
        comments_row2 = "全てを止められる！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        gsel(19);
        color(255, 255, 255);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        DSPLAY(audio_id = 126);
        var_529 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1992 = 1;
        var_1993 = var_66 - 1;
        var_1994 = var_66 + 1;
        var_1995 = var_67 + 1;
        var_1996 = var_67 - 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_529 = 0;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 203 ザ・フールの発動処理
function stand203(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_570 == 0) {
            bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
        }
        if (var_570 == 1) {
            bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
        }
        if (var_570 == 2) {
            bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
        }
        if (var_570 == 3) {
            bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「アッフォオオ―――――ン！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_374 = 1;
        var_1575 = 1;
        var_271 = 1;
        var_774 = 160;
        yield func337(); // メッセージ関係呼び出し
        var_774 = 150;
        yield func337(); // メッセージ関係呼び出し
        var_774 = 140;
        yield func337(); // メッセージ関係呼び出し
        var_774 = 130;
        yield func337(); // メッセージ関係呼び出し
        var_774 = 120;
        yield func337(); // メッセージ関係呼び出し
        var_774 = 110;
        yield func337(); // メッセージ関係呼び出し
        var_774 = 100;
        yield func337(); // メッセージ関係呼び出し
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            var_774 = 102;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_774 = 104;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_774 = 106;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_774 = 108;
            for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_774 = 106;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_774 = 104;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_774 = 102;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_774 = 100;
            var_1574 = 1;
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1574++;
            }
            var_1574 = 0;
        }
        for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_774 = var_774 - 10;
        }
        var_1575 = 0;
        var_271 = 0;
        var_2265 = 0;
        var_2194 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
            DSPLAY(audio_id = 153);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "周りの敵は目に砂が入って";
            comments_row2a = "盲目になってしまった！";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            var_198 = 1;
            var_300 = 0;
            yield func050();
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        var_374 = 0;
        yield func499();
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 204 シアハートアタックの発動処理
function stand204(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        DSPLAY(audio_id = 165);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "カチリ";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1389 = var_66;
        var_1390 = var_67;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
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
        DSPLAY(audio_id = 180);
        var_271 = 1;
        var_1388 = 1;
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            var_585 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_585 = 0;
            yield func337(); // メッセージ関係呼び出し
            var_1388++;
        }
        for (let cnt2 = 0; cnt2 < 24; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
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
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
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
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 205 クラフトワークの発動処理
function stand205(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_570 == 0) {
            bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
        }
        if (var_570 == 1) {
            bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
        }
        if (var_570 == 2) {
            bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
        }
        if (var_570 == 3) {
            bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
        }
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1992 = 1;
        var_2302 = 0;
        var_1993 = var_66 - 1;
        var_1994 = var_66 + 1;
        var_1995 = var_67 + 1;
        var_1996 = var_67 - 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_2302 == 1) {
            comments_row1 = "その場所に固定するッ！";
    
            DSPLAY(audio_id = 126);
        }
        if (var_2302 == 0) {
            comments_row1 = "しかし何も起こらなかった…";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        if (var_2302 == 1) {
            var_114 = 0;
            var_463 = 0;
            var_464 = 0;
            var_461 = 0;
            var_462 = 0;
        }
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 206 オアシスの発動処理
function stand206(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "周囲がドロドロになってきた…";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
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
    
            DSPLAY(audio_id = 123);
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                var_349++;
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
            var_349 = 0;

            var_346 = dim(10, 10);
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 207 グレイトフル・デッドの発動処理 
function stand207(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_570 == 0) {
            bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
        }
        if (var_570 == 1) {
            bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
        }
        if (var_570 == 2) {
            bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
        }
        if (var_570 == 3) {
            bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
        }
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「グレイトフル・デッド！！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_2264 = 0;
        var_1940 = var_199;
        var_199 = 2;
        var_271 = 1;
        var_1394 = 1;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            if (var_1394 == 11) {
        
                DSPLAY(audio_id = 161);
            }
            var_1394++;
        }
        var_271 = 0;
        var_1394 = 0;
        var_2265 = 0;
        var_2194 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            if (var_172 == 0) {
                comments_row1a = "近くにいる敵は急激に老化して";
                comments_row2a = "攻撃力が下がった！";
            }
            if (var_172 >= 1) {
                comments_row1a = "この階にいる全ての敵は";
                comments_row2a = "急激に老化して攻撃力が下がった！";
            }
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
        }
        var_199 = var_1940;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 208 C-MOONの発動処理 
function stand208(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 250 オー!ロンサム・ミーの発動処理 
function stand250(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 251 シビル・ウォーの発動処理 
function stand251(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 252 クリーム・スターターの発動処理 
function stand252(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 253 スケアリー・モンスターズの発動処理 
function stand253(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 254 C・ザ・レインボーの発動処理 
function stand254(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 255 イン・ア・サイレント・ウェイの発動処理 
function stand255(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 256 チョコレイト・ディスコの発動処理 
function stand256(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 257 T・O・T・B ワンの発動処理 
function stand257(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 258 ボールブレイカー&スキャンの発動処理 
function stand258(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 259 TATOO YOU!の発動処理 
function stand259(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 260 20th Century Boyの発動処理 
function stand260(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 261 タスクact4の発動処理 
function stand261(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 262 D4Cラブトレインの発動処理 
function stand262(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 263 の発動処理 
function stand263(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 264 の発動処理 
function stand264(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 300 パール・ジャムの発動処理
function stand300(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "パールジャムを食べた。";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_1214 = 1;
        DSPLAY(audio_id = 119); // 食べた時の効果音
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
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
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "お腹が少し膨らんだ";
        comments_row2a = "";
        if (var_350 == var_567) {
            comments_row1a = "お腹がいっぱいになった。";
            comments_row2a = "";
        }
        if (var_2211 == 1) {
            comments_row1a = "最大満腹度が" + var_567 + "になった。";
            comments_row2a = "";
        }
        yield func047();
        yield func050();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 301 ハーヴェストの発動処理
function stand301(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "アイテムを取って来いッ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_1483 = 1;
        var_271 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
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
        for (let cnt2 = 0; cnt2 < var_336; ++cnt2) {
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
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_2279 == 0) {
            comments_row1 = "１個も拾ってこなかったど！";
        }
        if (var_2279 >= 1) {
            comments_row1 = "" + var_2279 + "個　拾ってきた。";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        if (var_2279 >= 1) {
            var_1489 = 1;
            var_271 = 1;
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1489 = 0;
            var_271 = 0;
        }
        if (var_2279 == 0) {
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 302 ハイウェイ・トゥ・ヘルの発動処理
function stand302(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "オレって情けねえよなあ～～～。";
        comments_row2 = "死にたくなった･･･";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1054 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        DSPLAY(audio_id = 136);
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            var_1054 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_1054 = 3;
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_211 == 1) {
            var_211 = 0;
            var_212 = 1;
            var_356 = 247;
            var_199 = 2;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        if (var_211 > 1) {
            var_211 = Math.floor(var_211 / 2);
            var_208 = Math.floor(var_211 / 2) + var_208;
        }
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2307 = 0;
        var_403 = "道連れにしている！";
        var_2217 = 1;
        var_2194 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        yield func337(); // メッセージ関係呼び出し
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
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
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
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                }
            }
            var_2194 = var_2194 + 1;
        }
        var_1054 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2217 = 0;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 303 ドラゴンズ・ドリームの発動処理
function stand303(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "攻撃をかわしやすくなった！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        DSPLAY(audio_id = 182);
        var_1299 = 8;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        var_105 = 1;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 304 ウェザーリポートの発動処理
function stand304(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        gsel(19);
        color(1, 1, 1);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_311 = 0;
        DSPLAY(audio_id = 178);
        var_312 = 1;
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 + 5;
        }
        var_174 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "雨が降ってきた。";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_1594 = 1;
        var_271 = 1;
        for (let cnt2 = 0; cnt2 < 40; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_403 = "雷が落ちた！";
        var_2217 = 1;
        var_2194 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        yield func337(); // メッセージ関係呼び出し
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
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func518();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func518();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func518();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func518();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func518();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func518();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func518();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
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
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func518();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func518();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func518();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                }
            }
            var_2194 = var_2194 + 1;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2217 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "";
        comments_row2 = "　――――　雨があがった　――――";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_1594 = 0;
        var_271 = 0;
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 - 5;
        }
        var_311 = 0;
        var_312 = 0;
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "地面が洗い流され、";
        comments_row2a = "罠が見えるようになった。";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func047();
        var_121 = 1;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        yield func340(); // キー入力による選択処理
        var_2303 = 0;
        var_2304 = 0;
        var_2305 = 0;
        var_2205 = 1;
        for (let cnt2 = 0; cnt2 < var_336; ++cnt2) {
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
        for (let cnt2 = 0; cnt2 < var_224; ++cnt2) {
            if (var_233[var_2205].Var0 == 401) {
                var_2304 = 1;
            }
            var_2205++;
        }
        var_2205 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
            if (var_83[var_2205].Var0 == 115 || var_83[var_2205].Var0 == 27 || var_83[var_2205].Var0 == 21) {
                var_2305 = 1;
                var_83[var_2205].Var39 = var_83[var_2205].Var39 + 1;
                if (var_83[var_2205].Var39 == 1) {
                    var_83[var_2205].Var39 = 2;
                }
                enemy_list = var_83[var_2205].Var0;
                yield func626(); // 敵リスト
                var_83[var_2205].Var3 = Math.floor(enemy_hp * (var_83[var_2205].Var39 + 10) / 10);
                if (var_83[var_2205].Var3 >= 999) {
                    var_83[var_2205].Var3 = 999;
                }
            }
            var_2205++;
        }
        if (var_2304 == 1) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "フー・ファイターズの威力がアップした！";
            comments_row2a = "";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            var_198 = 1;
            var_300 = 0;
            yield func050();
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        if (var_2303 == 1) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "地面のカエルが成長したようだ。";
            comments_row2a = "";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            var_198 = 1;
            var_300 = 0;
            yield func050();
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        if (var_2305 == 1) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "パワーアップした敵がいるようだ…";
            comments_row2a = "";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            var_198 = 1;
            var_300 = 0;
            yield func050();
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 305 シンデレラの発動処理
function stand305(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_1024 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "幸運な顔のメイクをしてみた。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "次のフロアでアイテムがたくさん";
        comments_row2a = "出現する気がする…！";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 306 マンハッタン・トランスファーの発動処理
function stand306(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「気流……」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        gsel(19);
        color(10, 10, 10);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_311 = 0;
        var_312 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 + 10;
            var_198 = 1;
            var_300 = 0;
        }
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「このフロアの空気の流れを読む…！」";
        comments_row2a = "";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        DSPLAY(audio_id = 184);
        var_119 = 1;
        var_101 = 1;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 - 10;
            var_198 = 1;
            var_300 = 0;
        }
        var_312 = 0;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "敵の行動がわかるようになった！";
        comments_row2a = "";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 307 不明disc(オシリス神?) の発動処理 
function stand307(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_570 == 0) {
            bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
        }
        if (var_570 == 1) {
            bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
        }
        if (var_570 == 2) {
            bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
        }
        if (var_570 == 3) {
            bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
        }
        var_1283 = 1;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "お前は敗北を認めた！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_2261 = kougeki_disc_id;
        kougeki_disc_id = 307;
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
            DSPLAY(audio_id = 123);
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
        kougeki_disc_id = var_2261;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 308 エボニーデビルの発動処理
function stand308(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "そこには人形を出せないぞ。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_234 = 0;
            var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
        DSPLAY(audio_id = 168);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1583++;
        }
        var_271 = 0;
        var_1583 = 0;
        belongings_item_list = 308;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "うけけけけけけけけけけッ！！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 309 ソフト・マシーンの発動処理
function stand309(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_73[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_77[var_66][var_67] != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここには潜ませられない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_337 = var_337 + 1;
        var_2330 = var_337;
        var_80[var_66][var_67] = var_2330;
        var_81[var_2330][0] = 78;
        var_81[var_2330][1] = var_66;
        var_81[var_2330][2] = var_67;
        var_81[var_2330][4] = 1;
        var_81[var_2330][5] = var_201;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "地面にｿﾌﾄ･ﾏｼｰﾝを潜ませた。";
        comments_row2 = "";
        DSPLAY(audio_id = 165);
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 310 エンプレスの発動処理
function stand310(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_407 == 1 && var_536 == 1 && dangeon_number == int(var_1068[12])) {
            yield func915();
            return;
        }
        var_1845 = 1;
        yield func556();
        var_1845 = 0;
        if (var_2110 != 0) {
            for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                var_1845 = 1;
                yield func556();
                var_1845 = 0;
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "敵が集まってしまった！";
            comments_row2a = "";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
        }
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 311 チープトリックの発動処理
function stand311(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_407 == 1 && var_536 == 1 && dangeon_number == int(var_1068[12]) && wallet >= 300) {
            yield func921();
            return;
        }
        var_271 = 1;
        var_1321 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1321 = var_1321 + 1;
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「おんぶして」　「ねっ！」";
        comments_row2 = "　　　　「おんぶして…」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「あなたが今のぼくの本体なんです！」";
        comments_row2a = "　「わかる？」　「ね？」";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ぼくの能力は人に囁くだけ」";
        comments_row2a = "　　「ね？」「誰か助け呼ぶの？」";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「イヒヒ！」　「ねっ！」";
        comments_row2a = "　　　「イヒヒヒヒ」";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ポコチンまで干からびさせて";
        comments_row2a = "　　死ぬのはおまえだッ！」";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「どこへ行こうとも…";
        comments_row2a = "　　疲れるだけだよ」」";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「疲労とダメージで";
        comments_row2a = "　　ぶっ倒れるのが先か」";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「精神がまいっちまって";
        comments_row2a = "　　自滅するのが先か…」";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1321 = var_1321 + 1;
        }
        DSPLAY(audio_id = 164);
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "最大精神力が１下がってしまった！";
        comments_row2a = "";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
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
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 312 エアロスミスの発動処理
function stand312(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        var_2311 = dim(300);
        var_271 = 1;
        var_1224 = var_199;
        var_1225 = 5;
        var_1517 = 160;
        var_1518 = 140;
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1224 = 1;
        var_1225 = 0;
        for (let cnt2 = 0; cnt2 < 80; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1224 = 10;
        var_1225 = 0;
        var_1517 = 680;
        var_1518 = 160;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_271 = 0;
        var_1224 = 0;
        var_403 = "ｴｱﾛｽﾐｽの弾丸が直撃！";
        var_2217 = 1;
        var_2312 = var_97 + 1;
        var_2313 = 0;
        for (let cnt2 = 0; cnt2 < 200; ++cnt2) {
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
                for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2311[var_2194] = 1;
                var_2313 = var_2313 + 1;
            }
            if (var_2313 == 10) {
                break;
            }
        }
        var_2313 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2217 = 0;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 313 ハイウェイスターの発動処理
function stand313(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        var_2307 = 0;
        var_403 = "養分を吸い取っている！";
        var_2217 = 1;
        var_2194 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        yield func337(); // メッセージ関係呼び出し
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
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func514();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func514();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func514();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func514();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func514();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func514();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func514();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
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
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func514();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func514();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2308;
                        var_2307 = var_2307 + var_2308;
                        yield func514();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                }
            }
            var_2194 = var_2194 + 1;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2307 != 0) {
            DSPLAY(audio_id = 143);
            var_1299 = 0;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_360 = 0;
            var_350 = var_350 + var_2307;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "合計 " + var_2307 + " の養分を吸収した。";
            if (var_350 == var_567) {
                comments_row2 = "満腹度が完全回復した。";
            }
            if (var_350 < var_567) {
                comments_row2 = "満腹度が回復した。";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 12; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_2217 = 0;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 314 ストレイキャットの発動処理
function stand314(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_2329 = 0;
        DSPLAY(audio_id = 159);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「うにゃあ」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2106 = 1;
        yield func647(); // 射撃攻撃動作処理
        return;
    });
}
// No = 315 エピタフの発動処理
function stand315(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「エピタフ！」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_119 = 1;
        var_121 = 1;
        var_101 = 1;
        DSPLAY(audio_id = 184);
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        gsel(19);
        color(10, 10, 10);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_311 = 255;
        var_312 = 1;
        for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 - 5;
            var_198 = 1;
            var_300 = 0;
        }
        var_312 = 0;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「迫り来る危険を感知できる…！」";
        comments_row2a = "";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "見えないものが見えるようになった！";
        comments_row2a = "";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 316 サバイバーの発動処理
function stand316(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_570 == 0) {
            bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
        }
        if (var_570 == 1) {
            bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
        }
        if (var_570 == 2) {
            bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
        }
        if (var_570 == 3) {
            bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
        }
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        if (var_174 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "地面が濡れて伝達力が上がっている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        var_271 = 1;
        var_1520 = 1;
        DSPLAY(audio_id = 161);
        for (let cnt2 = 0; cnt2 < 26; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1520++;
        }
        var_1520 = 0;
        var_271 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1992 = 1;
        var_1993 = var_66 - 1;
        var_1994 = var_66 + 1;
        var_1995 = var_67 + 1;
        var_1996 = var_67 - 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ファイトクラブだっ！！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 317 キッスの発動処理
function stand317(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_73[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_77[var_66][var_67] != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここには貼れない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_337 = var_337 + 1;
        var_2330 = var_337;
        var_80[var_66][var_67] = var_2330;
        var_81[var_2330][0] = 81;
        var_81[var_2330][1] = var_66;
        var_81[var_2330][2] = var_67;
        var_81[var_2330][4] = 1;
        var_81[var_2330][5] = var_201;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "シールを貼った。";
        comments_row2 = "";
        DSPLAY(audio_id = 165);
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 318 ジャンピングJフラッシュの発動処理
function stand318(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_172 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "発動能力がパワーアップしている！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        gsel(19);
        color(250, 250, 250);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_529 = 1;
        var_403 = "血液が沸騰している！";
        var_2217 = 1;
        var_2194 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        yield func337(); // メッセージ関係呼び出し
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
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func517();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func517();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func517();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func517();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func517();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func517();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func517();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
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
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func517();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func517();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func517();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                }
            }
            var_2194 = var_2194 + 1;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_529 = 0;
        var_2217 = 0;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 319 ボーイⅡマンの発動処理
function stand319(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "能力を消すDISCを選んでください";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
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
// No = 320 メタリカの発動処理
function stand320(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_131 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "砂鉄を吸い寄せて透明になった。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

// No = 393 ボヘミアンラプソディの発動処理
function stand393(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_2352 = rnd(6);
        if (var_97 >= 50) {
            var_2352 = 10;
        }
        DSPLAY(audio_id = 118);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_2352 == 0) {
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
            comments_row2 = "「ﾌｧﾝﾄﾑ･ﾌﾞﾗｯﾄﾞ」を読んだ";
        }
        if (var_2352 == 1) {
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
            comments_row2 = "「戦闘潮流」を読んだ";
        }
        if (var_2352 == 2) {
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
            comments_row2 = "「ｽﾀｰﾀﾞｽﾄ･ｸﾙｾｲﾀﾞｰｽ」を読んだ";
        }
        if (var_2352 == 3) {
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
            comments_row2 = "「ダイヤモンドは砕けない」を読んだ";
        }
        if (var_2352 == 4) {
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
            comments_row2 = "「黄金の風」を読んだ";
        }
        if (var_2352 == 5) {
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
            comments_row2 = "「ｽﾄｰﾝ･ｵｰｼｬﾝ」を読んだ";
        }
        if (var_2352 == 6) {
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「これからはおれの時代だッ！」";
            comments_row2 = "";
        }
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
            var_300 = 0;
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2352 == 6) {
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
            }
            var_217 = 1;
            yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
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
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "しかし何も起こらなかった…";
            comments_row2a = "";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                var_300 = 0;
                yield func337(); // メッセージ関係呼び出し
            }
            var_2355 = 0;
            if (var_2254 == 1) {
                var_2254 = 0;
                yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
            }
            var_217 = 1;
            yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
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
        DSPLAY(audio_id = 168);
        var_271 = 1;
        var_1586 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            var_300 = 0;
            yield func337(); // メッセージ関係呼び出し
            var_1586++;
        }
        var_271 = 0;
        var_1586 = 0;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "マンガのキャラクターが現れた！";
        comments_row2a = "";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            var_300 = 0;
            yield func337(); // メッセージ関係呼び出し
            var_2355 = 0;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 394 キラータイガークイーンの発動処理はNo = 112 キラークイーンと全く同じ。
// No = 395 バイツァ・ダストの発動処理
function stand395(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "キラークィーン【第３の爆弾】";
        comments_row2 = "「BITE THE DUST」（負けて死ね）！！";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_198 = 1;
        var_300 = 0;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
        }
        var_2314 = 0;
        var_2194 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "すでに「瞳」の中に入っている！";
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
        }
        if (var_2314 == 0) {
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "しかし何もおこらなかった…";
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
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 396 メイド・イン・ヘブンの発動処理
function stand396(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        DSPLAY(audio_id = 154);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "自分だけ速く動けるようになった！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        if (var_133 == 0) {
            var_157 = 1;
            var_158 = 0;
        }
        if (var_133 != 0) {
            var_133 = 0;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 397 ヘビー・ウェザーの発動処理
function stand397(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_2327 = 1;
        var_768 = 1;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            yield func536();
            if (var_2328 == 1) {
                break;
            }
        }
        var_768 = 0;
        var_2327 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「悪魔の虹」が大量にあらわれた！！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 398 スタプラ・ザワールドの発動能力
function stand398(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_163 = 1;
        var_164 = 1;
        var_153 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「スタープラチナ・ザ・ワールド」！！";
        comments_row2 = "時よ止まれ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_114 = 0;
        var_463 = 0;
        var_464 = 0;
        var_461 = 0;
        var_462 = 0;
        DSPLAY(audio_id = 185);
        var_271 = 1;
        var_1491 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1491++;
        }
        var_271 = 0;
        var_1491 = 0;
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
// No = 399 Gエクスペリエンスレクイエムの発動処理
function stand399(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_570 == 0) {
            bufferid_stand_disc = 11; //buffer(11)は"img_stand0.gif"
        }
        if (var_570 == 1) {
            bufferid_stand_disc = 1; // buffer(1)は"img_stand1.gif"
        }
        if (var_570 == 2) {
            bufferid_stand_disc = 16; // buffer(16)は"img_stand2.gif"
        }
        if (var_570 == 3) {
            bufferid_stand_disc = 29; // buffer(29)は"img_stand3.gif"
        }
        var_199 = 2;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ」！！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func108(); // BGM用mp3ファイル再生停止
        var_1599 = 1;
        var_271 = 1;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            if (var_1599 == 3) {
                var_389 = 2;
                var_747 = 1;
                var_211 = 0;
                DSPLAY(audio_id = 105);
            }
            var_1599++;
        }
        var_1599 = 0;
        var_271 = 0;
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "死に続ける能力が解除された！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        var_389 = 0;
        var_103 = 1;
        var_311 = 255;
        var_374 = 1;
        var_1601 = 1;
        var_271 = 1;
        var_501 = 1;
        gsel(19);
        color(255, 255, 255);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_312 = 1;
        for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 - 5;
            var_1601 = var_1601 + 2;
        }
        var_312 = 0;
        yield func122(); // ゴールドエクスペリエンスレクイエムの発動で帰還する際のBGM
        for (let cnt2 = 0; cnt2 < 100; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1601 = var_1601 + 2;
        }
        yield func532();
        return;
    });
}


// No = 400 ハイエロファントグリーンの発動処理
function stand400(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_73[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_77[var_66][var_67] != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここには仕掛けられない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_337 = var_337 + 1;
        var_2330 = var_337;
        var_80[var_66][var_67] = var_2330;
        var_81[var_2330][0] = 92;
        var_81[var_2330][1] = var_66;
        var_81[var_2330][2] = var_67;
        var_81[var_2330][4] = 1;
        var_81[var_2330][5] = var_201;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "法王の結界を仕掛けた。";
        comments_row2 = "";
        // return; Ver 0.1309 return削除。これがあるがために、「法王の結界」の罠を仕掛けるとフリーズする。
        DSPLAY(audio_id = 165);
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 401 フー・ファイターズの発動処理
function stand401(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2341 = 0;
        var_211 = var_211 + 20;
        if (var_120 == 1 || var_174 == 1) {
            var_211 = var_211 + 20;
        }
        if (var_211 >= var_352) {
            var_211 = var_352;
            var_2341 = 1;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "傷口にプランクトンを詰めた。";
        if (var_120 == 1 || var_174 == 1) {
            comments_row2 = "いつもより多く回復した。";
        }
        if (var_2341 == 1) {
            comments_row2 = "体力が完全に回復した。";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();

        DSPLAY(audio_id = 143);
        var_1299 = 5;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        // Ver0.1401にて追加。
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 402 エンペラーの発動処理
function stand402(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「エンペラー」！！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_2342 = 1;
        yield func647(); // 射撃攻撃動作処理
        return;
    });
}
// No = 403 セックス・ピストルズの発動処理
function stand403(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "どれを食べますか？";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
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
// No = 404 ホルス神の発動処理
function stand404(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_73[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_77[var_66][var_67] != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここには仕掛けられない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_337 = var_337 + 1;
        var_2330 = var_337;
        var_80[var_66][var_67] = var_2330;
        var_81[var_2330][0] = 93;
        var_81[var_2330][1] = var_66;
        var_81[var_2330][2] = var_67;
        var_81[var_2330][4] = 1;
        var_81[var_2330][5] = var_201;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "足元に氷の罠を仕掛けた。";
        comments_row2 = "";
        DSPLAY(audio_id = 165);
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 405 エコーズAct2の発動処理
function stand405(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_73[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_77[var_66][var_67] != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここには仕掛けられない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_337 = var_337 + 1;
        var_2330 = var_337;
        var_80[var_66][var_67] = var_2330;
        var_81[var_2330][0] = 90;
        var_81[var_2330][1] = var_66;
        var_81[var_2330][2] = var_67;
        var_81[var_2330][4] = 1;
        var_81[var_2330][5] = var_201;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "地面に文字を貼り付けた。";
        comments_row2 = "";
        DSPLAY(audio_id = 165);
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 406 エコーズAct1の発動処理
function stand406(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_73[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_77[var_66][var_67] != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここには潜ませられない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_337 = var_337 + 1;
        var_2330 = var_337;
        var_80[var_66][var_67] = var_2330;
        var_81[var_2330][0] = 87;
        var_81[var_2330][1] = var_66;
        var_81[var_2330][2] = var_67;
        var_81[var_2330][4] = 1;
        var_81[var_2330][5] = var_201;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "地面に文字を貼り付けた。";
        comments_row2 = "";
        DSPLAY(audio_id = 165);
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 407 ハイエロファントエメラルドの発動処理
function stand407(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
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
        var_2338 = 92;
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
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "この辺りには仕掛けられない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        DSPLAY(audio_id = 165);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "法王の結界を仕掛けた。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 408 マン・イン・ザ・ミラーの発動処理
function stand408(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_73[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_77[var_66][var_67] != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここには仕掛けられない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_337 = var_337 + 1;
        var_2330 = var_337;
        var_80[var_66][var_67] = var_2330;
        var_81[var_2330][0] = 88;
        var_81[var_2330][1] = var_66;
        var_81[var_2330][2] = var_67;
        var_81[var_2330][4] = 1;
        var_81[var_2330][5] = var_201;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "足元に鏡を仕掛けた。";
        comments_row2 = "";
        DSPLAY(audio_id = 165);
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 409 ラバーズの発動処理
function stand409(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_73[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_77[var_66][var_67] != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここには潜ませられない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_337 = var_337 + 1;
        var_2330 = var_337;
        var_80[var_66][var_67] = var_2330;
        var_81[var_2330][0] = 91;
        var_81[var_2330][1] = var_66;
        var_81[var_2330][2] = var_67;
        var_81[var_2330][4] = 1;
        var_81[var_2330][5] = var_201;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "こっそりラバーズを潜ませた。";
        comments_row2 = "";
        DSPLAY(audio_id = 165);
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 410 不明disc(没ハイウェイスター。かつては射撃discだった?)の発動処理
function stand410(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_73[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_77[var_66][var_67] != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここには潜ませられない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_337 = var_337 + 1;
        var_2330 = var_337;
        var_80[var_66][var_67] = var_2330;
        var_81[var_2330][0] = 89;
        var_81[var_2330][1] = var_66;
        var_81[var_2330][2] = var_67;
        var_81[var_2330][4] = 1;
        var_81[var_2330][5] = var_201;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾊｲｳｪｲ･ｽﾀｰを潜ませた。";
        comments_row2 = "";
        DSPLAY(audio_id = 165);
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 411 タワー・オブ・グレーの発動処理
function stand411(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
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
            for (let cnt2 = 0; cnt2 < 10000; ++cnt2) {
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
                if (var_200 == var_201 && special_floor != 8) {
                    var_98 = 1;
                }
                if (var_202 == var_201 && special_floor != 8) {
                    var_99 = 1;
                }
                yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            }
            if (var_2349 == 0) {
                var_66 = var_236;
                var_67 = var_237;
            }
            var_1286 = 170;
            var_1287 = 140;
            var_271 = 1;
            var_1306 = 1;
            DSPLAY(audio_id = 190);
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1306++;
            }
            var_271 = 0;
            var_1306 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            belongings_item_list = activated_disc_id;
            yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
            var_217 = 1;
            yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
    });
}
// No = 412 ヘブンズドアーの発動処理
function stand412(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「ヘブンズドアーッ」！！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_2261 = kougeki_disc_id;
        kougeki_disc_id = 0;
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
                DSPLAY(audio_id = 161);
                var_1324 = (var_83[var_2231].Var1 - var_66 + 4) * 40;
                var_1325 = (var_83[var_2231].Var2 - var_67 + 4) * 40 - 10;
                var_271 = 1;
                var_1323 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                    var_1323++;
                }
                var_83[var_2231].Var8 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                    var_1323++;
                }
                var_271 = 0;
                var_1323 = 0;
                var_2233 = var_1038 + 1;
                var_2234 = 0;
                for (let cnt4 = 0; cnt4 < var_2233; ++cnt4) {
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
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                var_502 = 1;
                DSPLAY(audio_id = 118);
                yield func356();
                return;
            }
            if (var_2232 == 2) {
                var_1324 = (var_83[var_2231].Var1 - var_66 + 4) * 40;
                var_1325 = (var_83[var_2231].Var2 - var_67 + 4) * 40 - 10;
                var_271 = 1;
                var_1323 = 1;
                for (let cnt4 = 0; cnt4 < 20; ++cnt4) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_271 = 0;
                var_1323 = 0;
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "見えてなくて効かなかった…";
                comments_row2a = "";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
            }
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        kougeki_disc_id = var_2261;
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 413 不明disc(没discサーフィス?) の発動処理
function stand413(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2109 = 1;
        var_1845 = 1;
        yield func556();
        var_2109 = 0;
        var_1845 = 0;
        if (var_2110 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "人形を置く場所が無いぞ。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_234 = 0;
            var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        var_439 = var_673;
        var_83[var_439].Var11 = 1;
        var_83[var_439].Var5 = 2;
        var_271 = 1;
        var_444 = 1;
        for (let cnt2 = 0; cnt2 < 25; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_444 = var_444 + 1;
        }
        var_271 = 0;
        var_444 = 0;
        var_83[var_439].Var11 = 0;
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 414 タスクact2の発動処理
function stand414(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_73[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_77[var_66][var_67] != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここには撃てない。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_271 = 1;
        var_1496 = 1;
        for (let cnt3 = 0; cnt3 < 25; ++cnt3) {
            yield func337(); // メッセージ関係呼び出し
            var_1496++;
        }
        var_271 = 0;
        var_1496 = 0;
        var_1971 = var_199;
        var_199 = 2;
        var_1197 = 1;
        var_1220 = 1;
        DSPLAY(audio_id = 109);
        var_337 = var_337 + 1;
        var_2330 = var_337;
        var_80[var_66][var_67] = var_2330;
        var_81[var_2330][0] = 79;
        var_81[var_2330][1] = var_66;
        var_81[var_2330][2] = var_67;
        var_81[var_2330][4] = 1;
        var_81[var_2330][5] = var_201;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "地面に穴を開けた。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = var_1971;
        var_1220 = 0;
        var_1197 = 0;
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// No = 415 タスクact1の発動処理。Ver0.1401にて追加。
function stand415(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "『牙』だ";
        comments_row2 = "これからは『牙』と呼ぶ！";
        yield func047();
        yield func050();

        var_1572 = 1;
        var_271 = 1;
        // DSPLAY(audio_id = 233);
        DSPLAY(audio_id = 225);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_1572++;
        }
        var_1572 = 0;
        var_271 = 0;

        taskact1_on = 1; // Ver0.1401にて追加。タスクact1を発動したかどうかの確認フラグ

        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "素手での攻撃力が上がった！";
        comments_row2 = "";

        yield func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        belongings_item_list = activated_disc_id;
        yield func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (var_2254 == 1) {
            var_2254 = 0;
            yield func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;

    });
}