function func800(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(800);
        var_3186 = 10;
        var_3187 = 120;
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
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

        font(font_type = "ＭＳ Ｐゴシック", font_size = 20, font_style = 1);
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

        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        pos(var_3186 + 10 + 90, 55);
        mes("G");

        font(font_type = "ＭＳ Ｐゴシック", font_size = 20, font_style = 1);
        color(0, 255, 0);
        pos(var_3180, 55);
        mes("_");
        return;
    });
}
function func801(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(801);
        DSPLAY(audio_id = 211);
        var_783 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 4;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 3;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 2;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 1;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 0;
        return;
    });
}/*
ヴェネチアホテルに設置してあるPC設定
口座、アイテム手配等
*/ 
function func802(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(802);
        var_243 = 0;
        DSPLAY(audio_id = 210);
        var_783 = 1;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 2;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 3;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 4;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 6;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 7;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 8;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 9;
        if (var_1014 == 0) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾍﾟﾘｰｺﾛ「ボス…　私です。ﾍﾟﾘｰｺﾛです」";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「私ならば、今のボスのお力に";
            comments_row2a = "　なれるでしょう…";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「私が手に入れられるｱｲﾃﾑの情報を";
            comments_row2a = "　そのパソコンに送信します。";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「少々費用はかかりますが、";
            comments_row2a = "　必ず手に入れてみせます。";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「ｱｲﾃﾑはダンジョンの１階に";
            comments_row2a = "　届けておきましょう」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            var_1014 = 1;
        }
        if (var_991[0][1] == 0) {
            var_1013 = 0;
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_1013 != 0) {
            comments_row1 = "ﾍﾟﾘｰｺﾛ「ボス…何を仕入れてきましょう」";
            comments_row2 = "";
        }
        if (var_1013 == 0) {
            comments_row1 = "ﾍﾟﾘｰｺﾛ「ボス…まだ何も手に入りません」";
            comments_row2 = "";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_1013 == 0) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func801();
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        var_1206 = 1;
        var_1881 = var_1013 * 20 + 37 + 30;
        Y_axis_item_position = 45;
        var_225 = 1;
        yield func803();
        return;
    });
}
function func803(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(803);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (key_X_on == 1) {
            var_1206 = 0;
            var_783 = 0;

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func801();
            yield func051();
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        if (key_Z_on == 1 || key_A_on == 1) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func051();
            yield func805();
            return;
        }
        if (var_259 == 1) {
            if (var_225 != var_1013) {
                Y_axis_item_position = Y_axis_item_position + 22;
                var_225 = var_225 + 1;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func803();
                return;
            }
            if (var_225 == var_1013) {
                Y_axis_item_position = 45;
                var_225 = 1;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // ここも間違っている?
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func803();
                return;
            }
        }
        if (var_255 == 1) {
            if (var_225 != 1) {
                Y_axis_item_position = Y_axis_item_position - 22;
                var_225 = var_225 - 1;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func803();
                return;
            }
            if (var_225 == 1) {
                Y_axis_item_position = 45 + (var_1013 - 1) * 22;
                var_225 = var_1013;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func803();
                return;
            }
        }
        yield func803();
        return;
    });
}


function func804(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(804);
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
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
        for (let cnt1 = 0; cnt1 < var_1013; ++cnt1) {
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
            belongings_item_list = var_2010;
            disc_rarity = var_2017;
            yield func492(); // アイテムリスト呼び出し
            if (var_2010 > 0) {
        
                font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                color(255, 255, 255);
                pos(40, var_230);
                if (belongings_item_list >= 100 && belongings_item_list < 400) {
                    color(0, 255, 0);
                    mes(item_name);
                }
                if (belongings_item_list >= 400 && belongings_item_list < 500) {
                    color(225, 195, 145);
                    mes("" + item_name + "(" + var_2011 + ")");
                }
                if (belongings_item_list >= 500 && belongings_item_list < 800) {
                    color(255, 255, 255);
                    mes(item_name);
                }
                if (belongings_item_list >= 800 && belongings_item_list < 900) {
                    color(0, 255, 255);
                    mes("" + item_name + "(" + var_2014 + ")");
                }
                if (belongings_item_list >= 900 && belongings_item_list < 1000) {
                    color(255, 255, 255);
                    mes(item_name);
                }
                if (var_2015 == 1) {
                    var_1925 = 0;
                    pos(260, var_230);
                    color(0, 255, 0);
                    var_482 = 0;
                    var_482 = (var_2011 + var_2012) * 50;
                    var_1925 = buying_price + var_482;
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
        belongings_item_list = var_2023;
        disc_rarity = var_2026;
        yield func492(); // アイテムリスト呼び出し

        font("ＭＳ Ｐゴシック", 14, 1);
        pos(15, 283);
        color(255, 255, 255);
        if (belongings_item_list < 100 || belongings_item_list >= 400) {
            mes(item_description1);
        }
        if (belongings_item_list >= 100 && belongings_item_list < 400 && var_2027 == 0) {
            mes("" + item_description1);
        }
        if (belongings_item_list >= 100 && belongings_item_list < 400 && var_2027 == 1) {
            mes("" + item_description1 + "　空き容量 " + var_2024);
        }
        color(255, 255, 255);
        mes(effects_message);
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
        mes(item_ability_description);
        color(255, 255, 255);

        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        pos(15, Y_axis_item_position);
        mes(">");
        pos(16, Y_axis_item_position);
        mes(">");
        pos(17, Y_axis_item_position);
        mes(">");
        return;
    });
}

function func805(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(805);
        var_1206 = 0;
        belongings_item_list = var_991[0][var_225][0];
        disc_rarity = var_991[0][var_225][13];
        yield func492(); // アイテムリスト呼び出し
        var_3188 = item_name;
        var_482 = 0;
        var_482 = (var_991[0][var_225][3] + var_991[0][var_225][4]) * 50;
        var_1925 = buying_price + var_482;
        var_1925 = var_1925 * var_1036;
        var_3189 = var_1925;
        if (wallet < var_3189) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "それを買うには お金が足りません。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            var_3190 = var_3189 - wallet;
            if (var_3190 <= var_1032) {
                yield func340(); // キー入力による選択処理
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "口座のお金を足して買いますか？";
                comments_row2a = "";
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                var_245 = 19;
                var_246 = 45;
                var_546 = 1;
                var_3191 = 1;
                var_548 = 1;
                yield func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
                return;
            }
            yield func340(); // キー入力による選択処理
            yield func051();
            var_198 = 0;
            var_1206 = 1;
            yield func803();
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
        comments_row1 = "【" + var_3188 + "】は";
        comments_row2 = "" + var_3189 + "G です。";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3192 = 1;
        var_548 = 1;
        yield func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
    });
}
function func806(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(806);
        wallet = wallet - var_3189;
        yield func807();
    });
}
function func807(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(807);
        var_1206 = 0;
        belongings_item_list = var_991[0][var_225][0];
        disc_rarity = var_991[0][var_225][13];
        yield func492(); // アイテムリスト呼び出し
        var_3188 = item_name;
        var_1037 = var_1037 + 1;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            var_991[1][var_1037][cnt1] = var_991[0][var_225][cnt1];
        }
        var_991[1][var_1037][11] = 0;
        var_991[0][var_225][0] = 0;
        var_1957 = 0;
        var_447 = 1;
        var_449 = 2;
        for (let cnt1 = 0; cnt1 < var_1013; ++cnt1) {
            if (var_991[0][var_447][0] == 0) {
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    var_991[0][var_447][cnt3] = var_991[0][var_449][cnt3];
                }
                var_1957 = 1;
            }
            if (var_1957 == 1) {
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    var_991[0][var_447][cnt3] = var_991[0][var_449][cnt3];
                }
            }
            var_447 = var_447 + 1;
            var_449 = var_449 + 1;
        }
        var_1013 = var_1013 - 1;

        DSPLAY(audio_id = 207);
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + var_3188 + "ですね…";
        comments_row2 = "ﾚｸｲｴﾑの大迷宮１階に必ず届けます。";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func801();
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func808(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(808);
        var_836 = dangeon_number;
        var_837 = current_floor;
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
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
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
                // No = 2 なので、レクイエムの大迷宮
                dangeon_number = 2;
            }
            yield func385(); // 各ダンジョンごとの出現アイテム管理
            if (var_262 == 1) {
                // No = 0 なので、拠点(ホテル、亀、)
                dangeon_number = 0;
            }
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
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
function func809(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(809);
        DSPLAY(audio_id = 210);
        var_783 = 1;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 2;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 3;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 4;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 6;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 7;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 12;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 13;
        if (var_1039 == 0) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾎﾟﾙﾎﾟ「ブフゥ～～～～…」";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「ボス…ダンジョンの一人旅は危険です」";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「ダンジョン内で仲間と出会えれば";
            comments_row2a = "　冒険がグッと楽になるでしょう…」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「ブフゥ～～～…」";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「しかし問題は、";
            comments_row2a = "　毎回必ず出会えるわけではないところ」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「私ならば、有能な人材を";
            comments_row2a = "　あらかじめ１階に呼ぶことが可能です」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「そのための費用として";
            comments_row2a = "　2000Gかかってしまいますが…」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「ブフゥ～～～…」";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            var_1039 = 1;
        }
        if (var_1040 == 1) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾎﾟﾙﾎﾟ「ﾚｸｲｴﾑの大迷宮１階に";
            comments_row2 = "　　　ヒマなやつを呼んであります」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
            var_198 = 0;
            yield func812();
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
        comments_row1 = "ﾎﾟﾙﾎﾟ「ボス…　2000Gで";
        comments_row2 = "　　　仲間を１階に呼んでおきますか？」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3193 = 1;
        var_548 = 1;
        yield func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
    });
}
function func810(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(810);
        if (wallet >= 2000) {
    
            DSPLAY(audio_id = 207);
            wallet = wallet - 2000;
            var_1040 = 1;
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「わかりました…。手の空いている者を";
            comments_row2 = "　ﾚｸｲｴﾑの大迷宮１階に呼んでおきます」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
            var_198 = 0;
            yield func812();
            return;
        }
        if (wallet < 2000) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「おっと…";
            comments_row2 = "　お金が足りないようですな」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
            var_3190 = 2000 - wallet;
            if (var_3190 <= var_1032) {
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "「口座のお金を足しますか？」";
                comments_row2a = "";
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                var_245 = 19;
                var_246 = 45;
                var_546 = 1;
                var_3193 = 2;
                var_548 = 1;
                yield func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
                return;
            }
            var_198 = 0;
            yield func812();
            return;
        }
        yield func811();
    });
}
function func811(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(811);
        wallet = 0;
        var_1032 = var_1032 - var_3190;
        var_1040 = 1;

        DSPLAY(audio_id = 207);
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「わかりました…。手の空いている者を";
        comments_row2 = "　ﾚｸｲｴﾑの大迷宮１階に呼んでおきます」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        var_198 = 0;
        yield func812();
        return;
    });
}
function func812(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(812);
        var_198 = 0;
        DSPLAY(audio_id = 211);
        var_783 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 4;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 3;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 2;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 1;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func813(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(813);
        DSPLAY(audio_id = 210);
        var_783 = 1;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 2;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 3;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 4;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 6;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 7;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 14;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 15;
        if (var_830 == 0) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「はい…こちらはSPW財団です」";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「前回の冒険でやられた敵の";
            comments_row2a = "　能力を調べることができます」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「調査費用は1000Gです」";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            var_198 = 0;
            yield func817();
            return;
        }
        enemy_list = var_830;
        yield func626();
        var_3194 = "" + enemy_name;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「はい…こちらはSPW財団です」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「" + var_3194 + "に";
        comments_row2a = "　やられてしまったようですね？」";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「1000Gの調査費で";
        comments_row2a = "　敵の能力を調べられます」";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3195 = 1;
        var_548 = 1;
        yield func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
    });
}
function func814(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(814);
        if (wallet >= 1000) {
    
            DSPLAY(audio_id = 207);
            wallet = wallet - 1000;
            var_198 = 0;
            yield func816();
            return;
        }
        if (wallet < 1000) {
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「おや…";
            comments_row2 = "　お金が足りないようです」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
            var_3190 = 1000 - wallet;
            if (var_3190 <= var_1032) {
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "「口座のお金を足しますか？」";
                comments_row2a = "";
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                var_245 = 19;
                var_246 = 45;
                var_546 = 1;
                var_3195 = 2;
                var_548 = 1;
                yield func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
                return;
            }
            var_198 = 0;
            yield func817();
            return;
        }
        yield func815();
    });
}
function func815(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(815);
        wallet = 0;

        DSPLAY(audio_id = 207);
        var_1032 = var_1032 - var_3190;
        var_198 = 0;
        yield func816();
        return;
    });
}
function func816(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(816);
        var_2233 = var_1038 + 1;
        var_2234 = 0;
        for (let cnt1 = 0; cnt1 < var_2233; ++cnt1) {
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
        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
        var_502 = 1;
        yield func356();
        return;
    });
}
function func817(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(817);
        var_2357 = 0;
        var_198 = 0;
        DSPLAY(audio_id = 211);
        var_783 = 5;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 4;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 3;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 2;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 1;
        for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_783 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
// ヴェネチアホテルのPCへ話しかけた時のメッセージ処理
function func818(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(818);
        var_243 = 0;
        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
        if (var_404 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "パソコンが置いてある。";
            comments_row2 = "まだ使えないようだ…";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            var_198 = 1;
            var_300 = 0;
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
        comments_row1 = "何をしますか？";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
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
function func819(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(819);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (var_404 >= 1) {
            if (var_259 == 1 && var_3196 != 4) {
                var_246 = var_246 + 16;
                var_3196 = var_3196 + 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func819();
                return;
            }
            if (var_259 == 1 && var_3196 == 4) {
                var_246 = 45;
                var_3196 = 0;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func819();
                return;
            }
            if (var_255 == 1 && var_3196 != 0) {
                var_246 = var_246 - 16;
                var_3196 = var_3196 - 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func819();
                return;
            }
            if (var_255 == 1 && var_3196 == 0) {
                var_246 = 109;
                var_3196 = 4;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func819();
                return;
            }
        }
        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_3196 == 0) {
                var_1204 = 0;
                var_198 = 0;
    
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                yield func051();
                yield func796();
                return;
            }
            if (var_3196 == 1) {
                var_1204 = 0;
                var_198 = 0;
    
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                yield func051();
                yield func797();
                return;
            }
            if (var_3196 == 2) {
                var_1204 = 0;
                var_198 = 0;
    
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                yield func051();
                yield func802();
                return;
            }
            if (var_3196 == 3) {
                var_1204 = 0;
                var_198 = 0;
    
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                yield func051();
                yield func809();
                return;
            }
            if (var_3196 == 4) {
                var_1204 = 0;
                var_198 = 0;
    
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                yield func051();
                yield func813();
                return;
            }
        }
        if (key_X_on == 1) {
            var_1204 = 0;
            var_198 = 0;

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func051();
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        yield func819();
        return;
    });
}
function func820(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(820);
        var_3197 = 0;
        if (var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            var_3197++;
        }
        if (var_524 >= 1) { // 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
            var_3197++;
        }
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (var_259 == 1) {
            if (var_3197 == 2 && var_513 != 5) {
                var_516 = var_516 + 16;
                var_513 = var_513 + 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            if (var_3197 == 2 && var_513 == 5) {
                var_516 = 88;
                var_513 = 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            if (var_3197 == 1 && var_513 != 4) {
                var_516 = var_516 + 16;
                var_513 = var_513 + 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            if (var_3197 == 1 && var_513 == 4) {
                var_516 = 88;
                var_513 = 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            // ディアボロの試練解放フラグがON
            if (var_526 >= 1 && var_513 != 3) {
                var_516 = var_516 + 16;
                var_513 = var_513 + 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            // ディアボロの試練解放フラグがON
            if (var_526 >= 1 && var_513 == 3) {
                var_516 = 88;
                var_513 = 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            if (var_404 >= 1 && var_513 != 2) {
                var_516 = var_516 + 16;
                var_513 = var_513 + 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            if (var_404 >= 1 && var_513 == 2) {
                var_516 = 88;
                var_513 = 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
        }
        if (var_255 == 1) {
            if (var_3197 == 2 && var_513 != 1) {
                var_516 = var_516 - 16;
                var_513 = var_513 - 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            if (var_3197 == 2 && var_513 == 1) {
                var_516 = 152;
                var_513 = 5;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            if (var_3197 == 1 && var_513 != 1) {
                var_516 = var_516 - 16;
                var_513 = var_513 - 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            if (var_3197 == 1 && var_513 == 1) {
                var_516 = 136;
                var_513 = 4;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            // ディアボロの試練解放フラグがON
            if (var_526 >= 1 && var_513 != 1) {
                var_516 = var_516 - 16;
                var_513 = var_513 - 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            // ディアボロの試練解放フラグがON
            if (var_526 >= 1 && var_513 == 1) {
                var_516 = 120;
                var_513 = 3;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            if (var_404 >= 1 && var_513 != 1) {
                var_516 = var_516 - 16;
                var_513 = var_513 - 1;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
            if (var_404 >= 1 && var_513 == 1) {
                var_516 = 104;
                var_513 = 2;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func820();
                return;
            }
        }
        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_513 == 1) {
                var_198 = 0;
    
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
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
    
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
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
    
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
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
                // var_524 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
                if (var_524 == 0 && var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                    var_198 = 0;
        
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    var_793 = 4;
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    var_629 = 1;
                    yield func821();
                    yield func166();
                    return;
                }
                // var_524 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
                if (var_524 >= 1 && var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                    var_198 = 0;
        
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    var_793 = 0;
                    var_785 = 1;
                    var_786 = 1;
                    var_787 = 1;
                    var_629 = 1;
                    yield func821();
                    yield func166();
                    return;
                }
                // var_524 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
                if (var_524 >= 1 && var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                    var_198 = 0;
        
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
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
    
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
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
        if (key_X_on == 1) {
            var_198 = 0;

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            var_512 = 0;
            yield func051();
            yield func057();
            return;
        }
        yield func820();
        return;
    });
}

function func821(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(821);
        var_508 = 0; // Mフラグ:資料(設定画面) func058
        var_499 = 0; // Mフラグ:設定画面 func056
        var_980 = 1;
        gsel(19);
        color(1, 1, 1);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_311 = 0;
        var_312 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 + 25;
            if (var_311 >= 255) {
                var_311 = 255;
            }
        }
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_311 = 255;
        var_312 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            redraw(0);
            yield func168(); // ダンジョンクリア時のスコア判定
            color(0, 0, 0);
            gmode(4, null, null, var_311);
            pos(0, 0);
            gcopy(19, 0, 0, 680, 680);
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

function func822(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(822);
        gsel(19);
        color(1, 1, 1);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_311 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            redraw(0);
            yield func168(); // ダンジョンクリア時のスコア判定
            color(0, 0, 0);
            gmode(4, null, null, var_311);
            pos(0, 0);
            gcopy(19, 0, 0, 680, 680);
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
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 - 25;
            if (var_311 <= 0) {
                var_311 = 0;
            }
        }
        var_311 = 0;
        var_312 = 0;
        var_508 = 1; // Mフラグ:資料(設定画面) func058
        var_499 = 1; // Mフラグ:設定画面 func056
        var_980 = 0;
        return;
    });
}


function func823(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(823);
        var_1627 = 0;
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
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

        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
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
// ホテルの外の入り口へ入ろうとした際のメッセージ処理
function func824(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(824);
        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ホテルの外へ出ますか？";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_198 = 1;
        var_300 = 0;
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3198 = 1;
        var_548 = 1;
        yield func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
    });
}
// ダンジョン内での動作処理
function func825(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(825);
        var_68 = 0;
        yield func723();
        var_203 = 0;
        if (var_3121 >= 1) {
            var_203 = rnd(4);
        }
        // No = 1 なので、ホテルの外
        dangeon_number = 1;
        current_floor = 1;
        if (current_floor > var_376) {
            var_376 = current_floor;
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor > dangeon1_floor) {
            dangeon1_floor = current_floor;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (dangeon_number == 2 && current_floor > dangeon2_floor) {
            dangeon2_floor = current_floor;
        }
        // No = 3 なので、ディアボロの試練
        if (dangeon_number == 3 && current_floor > dangeon3_floor) {
            dangeon3_floor = current_floor;
        }
        var_405 = 0;
        var_344 = 0;
        yield func111();
        yield func182();
        // もしアイテムの数が20でなければ
        if (var_224 != 20) {
            // アイテム追加関数
            yield func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
        }
        yield func502();
        yield func504();
        yield func505();
        var_373 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 0;
        var_262 = 0;
        if (var_407 == 1) {
            yield func905();
        }
        if (var_407 == 2) {
            yield func933();
        }
        yield func076(); // マップ背景画像の読込
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            yield func339();
        }
        DSPLAY(audio_id = 101); // 階段を昇るor降りる時の効果音
        yield func006();
        return;
    });
}

// レクイエムの大迷宮の入り口へ入ろうとした際のメッセージ処理
function func826(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(826);
        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "レクイエムの大迷宮へ向かいますか？";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_198 = 1;
        var_300 = 0;
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3199 = 1;
        var_548 = 1;
        yield func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
    });
}

function func827(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(827);
        var_68 = 0;
        var_535 = 0;
        yield func723();
        if (var_3121 == 0 && var_1037 == 0 && wallet == 0 && var_1040 == 0) {
            var_535 = 1;
        }
        dangeon_number = 2;
        current_floor = 1;
        if (current_floor > var_376) {
            var_376 = current_floor;
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor > dangeon1_floor) {
            dangeon1_floor = current_floor;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (dangeon_number == 2 && current_floor > dangeon2_floor) {
            dangeon2_floor = current_floor;
        }
        // No = 3 なので、ディアボロの試練
        if (dangeon_number == 3 && current_floor > dangeon3_floor) {
            dangeon3_floor = current_floor;
        }
        var_405 = 0;
        var_344 = 0;
        var_373 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 0;
        var_262 = 0;
        yield func111();
        yield func182();
        // アイテム数が20でなければ
        if (var_224 != 20) {
            // アイテム追加関数
            yield func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
        }
        yield func502();
        yield func504();
        yield func505();
        if (var_407 == 1) {
            yield func905();
        }
        if (var_407 == 2) {
            yield func933();
        }
        yield func076(); // マップ背景画像の読込
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            yield func339();
        }
        DSPLAY(audio_id = 101); // 階段を昇るor降りる時の効果音
        yield func006();
        return;
    });
}

// ディアボロの試練の入り口へ入ろうとした際のメッセージ処理
function func828(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(828);
        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "さらなる試練へ向かいますか？";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_198 = 1;
        var_300 = 0;
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3200 = 1;
        var_548 = 1;
        yield func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
    });
}

function func829(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(829);
        yield func723();
        if (var_3121 >= 1) {
            yield func831(); // 持ち込み不可ダンジョンにアイテムを所持した状態で入ろうとした際の忠告メッセージ処理
            return;
        }
        var_68 = 0;
        dangeon_number = 3;
        current_floor = 1;
        if (current_floor > var_376) {
            var_376 = current_floor;
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor > dangeon1_floor) {
            dangeon1_floor = current_floor;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (dangeon_number == 2 && current_floor > dangeon2_floor) {
            dangeon2_floor = current_floor;
        }
        // No = 3 なので、ディアボロの試練
        if (dangeon_number == 3 && current_floor > dangeon3_floor) {
            dangeon3_floor = current_floor;
        }
        var_405 = 0;
        var_344 = 0;
        var_373 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 0;
        var_262 = 0;
        yield func111();
        yield func182();
        yield func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
        yield func502();
        yield func504();
        yield func505();
        wallet = 0;
        var_350 = 100;
        var_567 = 100;
        var_352 = 15;
        var_211 = 15;
        current_level = 1;
        var_568 = 0;
        var_565 = 8;
        var_566 = 8;
        if (var_759 == 1) { // ディアボロの試練解放フラグがONの場合。岸辺露伴イベントが始まった際に1になる。
            var_759 = 2; // その状態でダンジョンへ入ると、DIO&プッチ神父出現フラグ (var_759 >= 2)
        }
        if (var_407 == 1) {
            yield func905();
        }
        if (var_407 == 2) {
            yield func933();
        }
        var_205 = 1;
        yield func231();
        yield func076(); // マップ背景画像の読込
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            yield func339();
        }
        DSPLAY(audio_id = 101); // 階段を昇るor降りる時の効果音
        yield func006();
        return;
    });
}
function func830(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(830);
        var_373 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 0;
        var_262 = 0;
        yield func111();
        yield func233();
        var_350 = 100;
        var_567 = 100;
        var_352 = 15;
        var_211 = 15;
        current_level = 1;
        var_568 = 0;
        var_565 = 8;
        var_566 = 8;
        var_68 = 0;
        // No = 3 なので、ディアボロの試練
        dangeon_number = 3;
        current_floor = 1;
        if (current_floor > var_376) {
            var_376 = current_floor;
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor > dangeon1_floor) {
            dangeon1_floor = current_floor;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (dangeon_number == 2 && current_floor > dangeon2_floor) {
            dangeon2_floor = current_floor;
        }
        // No = 3 なので、ディアボロの試練
        if (dangeon_number == 3 && current_floor > dangeon3_floor) {
            dangeon3_floor = current_floor;
        }
        var_405 = 0;
        var_344 = 0;
        // アイテム数20でなければ
        if (var_224 != 20) {
            // アイテム数追加関数
            yield func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
        }
        yield func502();
        yield func504();
        yield func505();
        yield func076(); // マップ背景画像の読込
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            yield func339();
        }
        DSPLAY(audio_id = 101); // 階段を昇るor降りる時の効果音
        yield func006();
        return;
    });
}
// 持ち込み不可ダンジョンにアイテムを所持した状態で入ろうとした際の忠告メッセージ処理
function func831(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(831);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "アイテムを持っていくことはできません";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_198 = 1;
        var_300 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}

// NPC プッチ神父との会話メッセージ
function func832(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(832);
        var_243 = 0;
        if (var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾌﾟｯﾁ神父「【天国に行く方法】…";
            comments_row2 = "それには必要なものがある」";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            var_198 = 1;
            var_300 = 0;
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "我がスタンド";
            comments_row2a = "「ホワイトスネイク」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「４つのカブト虫」";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "そして";
            comments_row2a = "「親友DIOの骨」";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func051();
            var_198 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        if (var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾌﾟｯﾁ神父「【一巡後の世界】に";
            comments_row2 = "　　　　挑戦してみるか？」";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            var_198 = 1;
            var_300 = 0;
            yield func340(); // キー入力による選択処理
            yield func051();
            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            var_245 = 19;
            var_246 = 45;
            var_546 = 1;
            var_3201 = 1;
            var_548 = 1;
            yield func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
            return;
        }
        yield func833(); // NPC DIOとの会話メッセージ
    });
}

// NPC DIOとの会話メッセージ
function func833(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(833);
        var_243 = 0;
        if (var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            var_3202 = 0;
            var_480 = 1;
            for (let cnt2 = 0; cnt2 < var_224; ++cnt2) {
                if (var_233[var_480].Var0 == 396) {
                    var_3202 = 1;
                }
                if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
                    var_484 = 1;
                    var_485 = var_233[var_480].Var6;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        if (var_486[var_485][var_484][0] == 396) {
                            var_3202 = 1;
                        }
                        var_484 = var_484 + 1;
                    }
                }
                var_480 = var_480 + 1;
            }
            if (var_3202 == 1) {
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "DIO「それは【ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝのDISC】！";
                comments_row2 = "手に入れたのか…」";
                var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
                var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
                var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
                yield func047();
                var_198 = 1;
                var_300 = 0;
                var_523 = 1; // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                yield func340(); // キー入力による選択処理
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "DIO「ﾌﾟｯﾁよ、これで";
                comments_row2a = "天国への扉は開かれたぞ！」";
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "";
                comments_row2a = "【一巡後の世界】に行けるようになった！";
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                yield func340(); // キー入力による選択処理
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "DIO「この先へは";
                comments_row2a = "親友ﾌﾟｯﾁが導いてくれるだろう」";
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                yield func340(); // キー入力による選択処理
                yield func094(); // メッセージ送りの際の効果音
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "DIO「そうそう…";
                comments_row2a = "ひとつ忠告しておこう」";
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                yield func340(); // キー入力による選択処理
            }
        }
        if (var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "DIO「我々は【天国に行く方法】を";
            comments_row2 = "　　　探している…」";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            var_198 = 1;
            var_300 = 0;
            yield func340(); // キー入力による選択処理
            yield func051();
            var_198 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        if (var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "DIO「【一巡後の世界】は";
            comments_row2 = "無限に続く終わりのないダンジョンだ」";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            var_198 = 1;
            var_300 = 0;
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "DIO「死ぬつもりで挑戦した方が良い」";
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
        }
        yield func834();
    });
}


function func834(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(834);
        var_68 = 0;
        yield func723();
        // No = 4 なので、一巡後の世界
        dangeon_number = 4;
        current_floor = 1;
        if (current_floor > var_376) {
            var_376 = current_floor;
        }
        // No = 4 なので、一巡後の世界
        if (dangeon_number == 4 && current_floor > dangeon4_floor) {
            dangeon4_floor = current_floor;
        }
        var_405 = 0;
        var_344 = 0;
        var_373 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 0;
        var_262 = 0;
        yield func111();
        yield func182();
        // アイテム数20でなければ
        if (var_224 != 20) {
            // アイテム数追加関数
            yield func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
        }
        yield func504();
        yield func505();
        if (var_407 == 1) {
            yield func905();
        }
        if (var_407 == 2) {
            yield func933();
        }
        yield func076(); // マップ背景画像の読込
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            yield func339();
        }
        DSPLAY(audio_id = 101); // 階段を昇るor降りる時の効果音
        yield func006();
        return;
    });
}

// NPC ロッコ・バロッコ所長に話しかけた時のメッセージ処理
function func835(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(835);
        var_243 = 0;
        if (var_524 >= 1) { // 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾛｯｺ･ﾊﾞﾛｯｺ所長";
            comments_row2 = "「『鉄の牢獄』に挑戦してみますか？」";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            var_198 = 1;
            var_300 = 0;
        }
        if (var_524 == 0) { // 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「私はｸﾞﾘｰﾝ･ﾄﾞﾙﾌｨﾝ･ｽﾄﾘｰﾄ刑務所の";
            comments_row2 = "　所長、ﾛｯｺ･ﾊﾞﾛｯｺです。";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            var_198 = 1;
            var_300 = 0;
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "私の隣にいるこの彼女はぁー";
            comments_row2a = "ｱｼｽﾀﾝﾄの『ｼｬｰﾛｯﾄ』です。";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "つい先日の話ですが…";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ｸﾞﾘｰﾝ･ﾄﾞﾙﾌｨﾝ･ｽﾄﾘｰﾄ刑務所から";
            comments_row2a = "囚人が何人も脱獄してしまうという";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "困った事件がおきてしまいました。";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "誰であろーと逃げられないように";
            comments_row2a = "対策はとってあったのですが";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "どうやら不十分だったようです";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "そこで私は、絶対に誰にも脱獄されない";
            comments_row2a = "牢獄を作る事にしたのです。";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "『石作り』では生温いようでしたので";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "名づけて、『鉄の牢獄』！";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "そこであなたにお願いですが、";
            comments_row2a = "この牢獄がどれほど強固か";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ぜひ試していただきたいのです。";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "【ここでYes/No選択】";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "それではｼｬｰﾛｯﾄ、新しく入る";
            comments_row2a = "みなさんに『心構え』を";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "説明してください。";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "【ここでダンジョンの説明】";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "それでは…　『鉄の牢獄』に";
            comments_row2a = "挑戦してみますか？";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            var_524 = 1; // 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
        }
        yield func340(); // キー入力による選択処理
        yield func051();
        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
        var_245 = 19;
        var_246 = 45;
        var_546 = 1;
        var_3203 = 1;
        var_548 = 1;
        yield func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
    });
}

function func836(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(836);
        yield func723();
        if (var_3121 >= 1) {
            yield func831(); // 持ち込み不可ダンジョンにアイテムを所持した状態で入ろうとした際の忠告メッセージ処理
            return;
        }
        var_68 = 0;
        dangeon_number = 5;
        current_floor = 1;
        if (current_floor > var_376) {
            var_376 = current_floor;
        }
        if (current_floor > dangeon5_floor) {
            dangeon5_floor = current_floor;
        }
        var_405 = 0;
        var_344 = 0;
        var_373 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_373 = 0;
        var_262 = 0;
        yield func111();
        yield func182();
        yield func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
        yield func502();
        yield func504();
        yield func505();
        yield func632();
        wallet = 0;
        var_350 = 100;
        var_567 = 100;
        var_352 = 15;
        var_211 = 15;
        current_level = 1;
        var_568 = 0;
        var_565 = 8;
        var_566 = 8;
        if (var_407 == 1) {
            yield func905();
        }
        if (var_407 == 2) {
            yield func933();
        }
        var_524 = 1; // 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
        var_205 = 1;
        yield func231();
        yield func076(); // マップ背景画像の読込
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            yield func339();
        }
        DSPLAY(audio_id = 101); // 階段を昇るor降りる時の効果音
        yield func006();
        return;
    });
}

// 店のアイテムを購入せずに帰還した際、NPC マリリン・マンソンの登場処理
function func837(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(837);
        var_3204 = 0;
        var_1056 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            if (var_233[var_1056].Var0 >= 800 && var_233[var_1056].Var0 < 900) {
                var_484 = 1;
                var_485 = var_233[var_1056].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_486[var_485][var_484][11] == 1 && var_486[var_485][var_484][0] != 0) {
                        var_3205 = var_484;
                        var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                        var_682 = var_485;
                        var_1876 = var_1056;
                        yield func838();
                        var_3204 = 1;
                        var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                        var_484 = 1;
                        cnt3 = -1;
                        continue;
                    }
                    var_484 = var_484 + 1;
                }
            }
            if (var_233[var_1056].Var11 == 1 && var_233[var_1056].Var0 != 0) {
                var_3205 = var_1056;
                yield func838();
                var_3204 = 1;
                var_1056 = 1;
                var_3206 = 1;
                cnt1 = -1;
                continue;
            }
            var_1056 = var_1056 + 1;
        }
        if (var_3204 == 1) {
            var_3204 = 0;
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ﾏﾘﾘﾝﾏﾝｿﾝ「また 会オウ！」";
            comments_row2a = "";
            var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
            var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
            var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            var_1470 = 5;
            yield func337(); // メッセージ関係呼び出し
            var_1470 = 6;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_198 = 0;
        }
        var_271 = 0;
        var_1470 = 0;
        return;
    });
}

function func838(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(838);
        var_271 = 1;
        var_1470 = 1;
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            belongings_item_list = var_233[var_1056].Var0;
            var_1471 = var_233[var_1056].Var0;
            disc_rarity = var_233[var_1056].Var13;
            var_1249 = var_233[var_1056].Var13;
        }
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            belongings_item_list = var_486[var_485][var_484][0];
            var_1471 = var_486[var_485][var_484][0];
            disc_rarity = var_486[var_485][var_484][13];
            var_1249 = var_486[var_485][var_484][13];
        }
        yield func492(); // アイテムリスト呼び出し
        var_3207 = item_name;
        var_225 = var_3205;
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            yield func430();
        }
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        if (var_3204 == 0) {
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        if (var_3204 == 1) {
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_3204 == 0) {
            comments_row1 = "ﾏﾘﾘﾝﾏﾝｿﾝ「店ノ売リ物ヲ持ッテイルナ？」";
        }
        if (var_3204 == 1) {
            comments_row1 = "ﾏﾘﾘﾝﾏﾝｿﾝ「マダ持ッテイルナ？」";
        }
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ﾏﾘﾘﾝﾏﾝｿﾝ「返シテモラウ！」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        yield func050();
        var_389 = 2;
        var_199 = 6;
        var_1470 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_747 = 1;
        var_1470 = 3;
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_389 = 0;
        var_1470 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1470 = 1;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "" + var_3207 + "を奪われた";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[8]; // Var0.1310で値修正 2 → 8
        var_26_x = var_26[8]; // Var0.1310で値修正 2 → 8
        var_27_x = var_27[8]; // Var0.1310で値修正 2 → 8
        yield func047();
        yield func050();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
// ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
function func839(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(839);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (var_259 == 1 && var_546 == 1) {
            var_246 = var_246 + 19;
            var_546 = 0;

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_255 == 1 && var_546 == 0) {
            var_246 = var_246 - 19;
            var_546 = 1;

            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337(); // メッセージ関係呼び出し
        }
        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_546 == 1) {
    
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
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
                    yield func739(); // イギーを仲間にした時のメッセージ処理
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
                    yield func825(); // ダンジョン内での動作処理
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
                    wallet = 0;
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
                    yield func754(); // ペッシに話しかけて釣りするを選んだ際の動作処理
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
        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_546 == 0) {
    
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                if (var_3208 == 1) {
                    var_3208 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    yield func051();
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return;
                }
                if (var_3151 >= 1) {
                    var_3151 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    yield func051();
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return;
                }
                if (var_3152 == 1) {
                    var_3152 = 0;
                    var_548 = 0;
                    var_198 = 0;
                    yield func051();
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return;
                }
                if (var_2494 == 1) {
                    var_2494 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return;
                }
                if (var_2495 == 1) {
                    var_2495 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return;
                }
                if (var_3198 == 1) {
                    var_3198 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return;
                }
                if (var_3199 == 1) {
                    var_3199 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return;
                }
                if (var_3200 == 1) {
                    var_3200 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return;
                }
                if (var_3201 == 1) {
                    var_3201 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return;
                }
                if (var_3203 == 1) {
                    var_3203 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return;
                }
                if (var_3137 == 1) {
                    var_3137 = 0;
                    var_548 = 0;
                    yield func051();
                    var_198 = 0;
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
        if (key_X_on == 1) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            if (var_3208 == 1) {
                var_3208 = 0;
                var_548 = 0;
                var_198 = 0;
                yield func051();
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
            if (var_3151 >= 1) {
                var_3151 = 0;
                var_548 = 0;
                var_198 = 0;
                yield func051();
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
            if (var_3152 == 1) {
                var_3152 = 0;
                var_548 = 0;
                var_198 = 0;
                yield func051();
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
            if (var_2494 == 1) {
                var_2494 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
            if (var_2495 == 1) {
                var_2495 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
            if (var_3198 == 1) {
                var_3198 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
            if (var_3199 == 1) {
                var_3199 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
            if (var_3200 == 1) {
                var_3200 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
            if (var_3201 == 1) {
                var_3201 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
            if (var_3203 == 1) {
                var_3203 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
            if (var_3137 == 1) {
                var_3137 = 0;
                var_548 = 0;
                yield func051();
                var_198 = 0;
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
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
        yield func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
    });
}


function func840(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(840);
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
function func841(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(841);
        if (var_637 >= 1) {
            var_637 = 0;
            gsel(window_id = 37, window_mode = -1);
            screen_(0, 680, 680, 2);
        
            SetWindowLongA(hwnd, -8, var_15);
            if (var_640 == 0) {
                var_10 = 0;
                width(680, 680);
            }
            if (var_640 == 1) {
                var_640 = 0;
                var_10 = 1;
                width(680, 680);
            }
            gsel(window_id = 0, window_mode = 2);
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
        width(680, 680);
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
function func842(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(842);
        clrobj(data0 = 9, data1 = 9);
        objsize(60);
        pos(680 - 76, var_3226 + 22);
        combox(var_3254, 100, "修正値\n+1\n+2\n+3\n+4\n+5\n+6\n+7\n+8\n+9\n+10\n呪い");
        return;
    });
}
function func843(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(843);
        clrobj(data0 = 9, data1 = 9);
        objsize(60);
        pos(680 - 76, var_3226 + 22);
        combox(var_3255, 100, "回数\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10");
        return;
    });
}
function func844(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(844);
        clrobj(data0 = 9, data1 = 9);
        objsize(60);
        pos(680 - 76, var_3226 + 22);
        combox(var_3256, 100, "金額\n100G\n200G\n300G\n400G\n500G\n600G\n700G\n800G\n900G");
        return;
    });
}
function func845(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(845);
        clrobj(data0 = 9, data1 = 9);
        objsize(1);
        pos(800, 800);
        button("ダミー", func850);
        return;
    });
}
function func846(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(846);
        objsize(1);
        pos(800, 800);
        button("ダミー", func850);
        return;
    });
}
function func847(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(847);
        var_3275 = 0;
        objsize(1);
        pos(800, 800);
        button("ダミー", func850);
        return;
    });
}
function func848(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(848);
        clrobj(data0 = 13, data1 = 13);
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
function func849(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(849);
        dialog(data0 = "メニュー画面に戻りますか？", data1 = 2, data2 = "");
        if (stat == 7) {
            yield func851();
            return;
        }
        clrobj();
        if (var_10 == 0) {
            width(680, 680);
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
function func850(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(850);
        yield func851();
        return;
    });
}
function func851(this: any) {
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
        var_3283 = ginfo(11) - 680 - var_3282;
        var_3284 = ginfo(4) + var_3281 + 10;
        var_3285 = ginfo(5) + var_3283 + 10;
        var_3286 = var_3284 + 320;
        var_3287 = var_3285 + 320;
        var_3288 = ginfo(4) + var_3281;
        var_3289 = ginfo(5) + var_3283;
        var_3290 = var_3288 + 680;
        var_3291 = var_3289 + 680;
        yield func080(); // 各キー入力確認
        if (var_254 == 1 && var_66 > 3) {
            var_199 = 4;
            var_66 = var_66 - 1;
            var_3279 = var_66 + var_3264 + 1;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func852();
            }
        }
        if (var_257 == 1 && var_66 < 49) {
            var_199 = 6;
            var_66 = var_66 + 1;
            var_3279 = var_66 + var_3264 + 1;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func852();
            }
        }
        if (var_255 == 1 && var_67 > 3) {
            var_199 = 8;
            var_67 = var_67 - 1;
            var_3280 = var_67 + var_3265 + 1;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func852();
            }
        }
        if (var_259 == 1 && var_67 < 30) {
            var_199 = 2;
            var_67 = var_67 + 1;
            var_3280 = var_67 + var_3265 + 1;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func852();
            }
        }
        if (ginfo(2) != (-1) && ginfo(0) > var_3288 && ginfo(0) < var_3290 && ginfo(1) > var_3289 && ginfo(1) < var_3291) {

            if (mousex >= 0 && mousex <= 10 && var_66 > 3) {
                var_199 = 4;
                var_66 = var_66 - 1;
                var_3279 = var_66 + var_3264 + 1;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func852();
                }
            }

            if (mousex >= 330 && mousex <= 680 && var_66 < 49) {
                var_199 = 6;
                var_66 = var_66 + 1;
                var_3279 = var_66 + var_3264 + 1;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func852();
                }
            }
            if (mousey >= 0 && mousey <= 10 && var_67 > 3) {
                var_199 = 8;
                var_67 = var_67 - 1;
                var_3280 = var_67 + var_3265 + 1;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func852();
                }
            }
            if (mousey >= 330 && mousey <= 680 && var_67 < 30) {
                var_199 = 2;
                var_67 = var_67 + 1;
                var_3280 = var_67 + var_3265 + 1;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func852();
                }
            }
        }
        conf_keyon = getkey(1); // マウス左ボタン入力確認
        if (conf_keyon == 1) {
            yield func863();
            return;
        }
        conf_keyon = stick(null, 1);
        if (conf_keyon == 512) {
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
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_3275 != var_3293) {
            var_3293 = var_3275;
            var_3266 = 7;
            objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
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
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_3254 != var_3257) {
            var_3257 = var_3254;
            var_3266 = 8;
            objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_3255 != var_3258) {
            var_3258 = var_3255;
            var_3266 = 8;
            objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_3256 != var_3259) {
            var_3259 = var_3256;
            var_3266 = 8;
            objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_3249 != var_3250) {
            var_3250 = var_3249;
            var_3266 = 9;
            objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
        }
        if (var_3245 != var_3267) {
            var_3267 = var_3245;
            var_3270 = var_3245;
            var_3266 = 0;
            objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
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
function func852(this: any) {
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
function func853(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(853);
        gmode(2);
        font("ＭＳ Ｐゴシック", 12);
        color(236, 233, 216);
        boxf(left = 680, top1 = 0, right = 680, bottom = 680);
        if (var_3279 <= var_31 && var_3280 <= var_32) {
            var_3295 = var_3279 - 5;
            var_3296 = var_3280 - 5;
            var_3297 = "x:" + var_3295;
            var_3298 = "y:" + var_3296;
            var_3272 = "";
            if (var_82[var_3279][var_3280] >= 1) {
                var_2501 = var_82[var_3279][var_3280];
                enemy_list = var_83[var_2501].Var0;
                yield func626();
                var_3299 = enemy_name;
                var_3272 = var_3272 + "  " + var_3299;
            }
            if (var_65[var_3279][var_3280] == 1) {
                var_3272 = var_3272 + "  " + "開始地点";
            }
            if (var_77[var_3279][var_3280] >= 1) {
                var_2501 = var_77[var_3279][var_3280];
                belongings_item_list = var_78[var_2501].Var0;
                var_2176 = 1;
                yield func492(); // アイテムリスト呼び出し
                var_2176 = 0;
                var_3299 = item_name;
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
        boxf(left = var_3239 + 10, top1 = var_3240 + var_3242 - 20, right = var_3239 + 80 + 10, bottom = var_3240 + var_3242 - 5);
        color(255, 255, 0);
        pos(var_3239 + 20, var_3240 + var_3242 - 18);
        mes("" + var_3297);
        pos(var_3239 + 20 + 35, var_3240 + var_3242 - 18);
        mes("" + var_3298);
        color(0, 0, 0);
        boxf(left = 350, top1 = 10, right = 670, bottom = 30);
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
        belongings_item_list = var_78[0].Var0;
        yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
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
        boxf(left = 0, top1 = 0, right = 680, bottom = 10);
        boxf(left = 0, top1 = 330, right = 680, bottom = 680);
        boxf(left = 0, top1 = 0, right = 10, bottom = 680);
        boxf(left = 330, top1 = 0, right = 680, bottom = 680);
        yield func854();
        return;
    });
}
function func854(this: any) {
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
        for (let cnt1 = 0; cnt1 < var_3238; ++cnt1) {
            var_3303 = 4;
            var_447 = 2;
            var_3304 = 1;
            for (let cnt2 = 0; cnt2 < var_3237; ++cnt2) {
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
function func855(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(855);
        gmode(2);
        var_449 = var_67;
        var_763 = -1;
        if (var_449 < 0) {
            var_449 = 0;
        }
        for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
            var_447 = var_66;
            var_764 = -1;
            if (var_447 < 0) {
                var_447 = 0;
            }
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
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
function func856(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(856);
        objsize(100);
        pos(var_3243, var_3244 + 86);
        combox(var_3260, 100, "茶色迷宮\n青色迷宮\n黄色迷宮\n茶色洞窟\n青色洞窟\n黄色洞窟\n溶岩洞窟\n霧の館\n虹村屋敷\n吉良屋敷\nポンペイ\n下水道\n森(明)\n浜辺(明)\n砂漠(明)\n水の都(明)");
        return;
    });
}
function func857(this: any) {
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
function func858(this: any) {
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
function func859(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(859);
        var_449 = var_67;
        for (let cnt1 = 0; cnt1 < 11; ++cnt1) {
            var_447 = var_66;
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                pos((var_447 - var_66 - 1) * 40 + 10, (var_449 - var_67 - 1) * 40 + 10);
                gmode(2);
                if (var_73[var_447][var_449] == 1) {
                    gcopy(5, 1200, var_92 * 40, 40, 40);
                }
                if (var_77[var_447][var_449] != 0) {
                    var_3305 = var_77[var_447][var_449];
                    belongings_item_list = var_78[var_3305].Var0;
                    yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
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
function func860(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(860);
        color(155, 155, 155);
        var_3308 = 0;
        var_3309 = 680;
        var_3310 = 10;
        var_3311 = 10;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            line(var_3308, var_3310, var_3309, var_3311);
            var_3310 = var_3310 + 40;
            var_3311 = var_3311 + 40;
        }
        var_3308 = 10;
        var_3309 = 10;
        var_3310 = 0;
        var_3311 = 680;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            line(var_3308, var_3310, var_3309, var_3311);
            var_3308 = var_3308 + 40;
            var_3309 = var_3309 + 40;
        }
        return;
    });
}
function func861(this: any) {
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
            belongings_item_list = var_78[0].Var0;
            var_3313 = belongings_item_list;
            yield func397(); // 所持、または床に落ちているアイテムのアイコン表示(読み込んだ画像ファイルから座標指定)
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
function func862(this: any) {
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
                enemy_list = var_83[var_3140].Var0;
                var_3317 = "p" + enemy_list + "e";
                var_3318 = instr(var_3319, 0, var_3317);
                var_3320 = Math.floor(var_3318 / 12);
                var_3246 = var_3320;
                var_3247 = var_3246;
                clrobj(data0 = 2, data1 = 2);
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
                clrobj(data0 = 3, data1 = 3);
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
                clrobj(data0 = 4, data1 = 4);
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
function func863(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(863);

        if (mousex >= var_3211 && mousex <= var_3211 + 40 && mousey >= var_3212 && mousey <= var_3212 + 40) {
            var_3266 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }

        if (mousex >= var_3213 && mousex <= var_3213 + 40 && mousey >= var_3214 && mousey <= var_3214 + 40) {
            var_3266 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }

        if (mousex >= var_3215 && mousex <= var_3215 + 40 && mousey >= var_3216 && mousey <= var_3216 + 40) {
            var_3266 = 2;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }

        if (mousex >= var_3217 && mousex <= var_3217 + 40 && mousey >= var_3218 && mousey <= var_3218 + 40) {
            var_3266 = 3;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }

        if (mousex >= var_3219 && mousex <= var_3219 + 40 && mousey >= var_3220 && mousey <= var_3220 + 40) {
            var_3266 = 4;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }
        if (mousex >= var_3221 && mousex <= var_3221 + 40 && mousey >= var_3222 && mousey <= var_3222 + 40) {
            var_3266 = 5;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }

        if (mousex >= var_3223 && mousex <= var_3223 + 40 && mousey >= var_3224 && mousey <= var_3224 + 40) {
            var_3266 = 6;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }
        if (mousex >= var_3229 && mousex <= var_3229 + 40 && mousey >= var_3230 && mousey <= var_3230 + 40) {
            var_3266 = 7;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }

        if (mousex >= var_3225 && mousex <= var_3225 + 40 && mousey >= var_3226 && mousey <= var_3226 + 40) {
            var_3266 = 8;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func852();
            }
            yield func851();
            return;
        }

        if (mousex >= var_3227 && mousex <= var_3227 + 40 && mousey >= var_3228 && mousey <= var_3228 + 40) {
            var_3266 = 9;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
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
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
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
            
                    var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
                    var_73[var_3315][var_3316] = 1;
                    var_3327 = var_3315;
                    var_3328 = var_3316;
                }
            }
            if (var_3266 == 6) {
                if (var_65[var_3315][var_3316] == 0) {
                    yield func866();
            
                    var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
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
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    if (var_83[var_3333].Var0 == 0) {
                        var_3334 = 1;
                        break;
                    }
                    var_3333++;
                }
                if (var_3334 == 0 && var_82[var_3315][var_3316] == 0) {
                    var_3294 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
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
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    if (var_78[var_3333].Var0 == 0) {
                        var_3334 = 1;
                        break;
                    }
                    var_3333++;
                }
                if (var_3334 == 0 && var_77[var_3315][var_3316] == 0) {
                    var_3294 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
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
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_81[var_3333][0] == 0) {
                        var_3334 = 1;
                        break;
                    }
                    var_3333++;
                }
                if (var_3334 == 0 && var_80[var_3315][var_3316] == 0) {
                    var_3294 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
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
function func864(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(864);
        var_1075 = 0;
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_1076 = 0;
            for (let cnt2 = 0; cnt2 < 57; ++cnt2) {
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
function func865(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(865);
        dialog(data0 = "画面を初期化しますか？", data1 = 2, data2 = "");
        if (stat == 7) {
            yield func851();
            return;
        }
        var_983 = sdim(3000);

        var_71 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_80 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
        var_986 = dim(100);

        var_486 = dim(length1 = 80, length2 = 21, length3 = 30, length4 = null);

        var_76 = dim(length1 = 100, length2 = 5, length3 = 3, length4 = null);

        var_74 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
        var_75 = dim(20);
        var_83 = CharactorInfo.dim(300);
        var_78 = ItemInfo.dim(300);

        var_81 = dim(length1 = 300, length2 = 7, length3 = null, length4 = null);
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
function func866(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(866);
        if (var_3266 == 2 || var_3266 == 3 || var_3266 == 4 || var_3266 == 6 || var_3266 == 7) {
            if (var_65[var_3315][var_3316] == 1) {
        
                var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
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
        
                var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
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
function func867(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(867);
        color(0, 0, 0);
        boxf(left = 50, top1 = 200, right = 330, bottom = 250);
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
function func868(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(868);
        var_3274 = 0;
        yield func869();
    });
}
function func869(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(869);
        if (var_3274 == 0) {
            dialog(data0 = "btq", data1 = 16, data2 = "魔少年の問題ファイル");
            if (stat == 0) {
                yield func851();
                return;
            }
            var_3336 = refstr;
        }
        chdir(var_30);
        var_983 = sdim(3000);

        var_71 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_80 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
        var_986 = dim(100);

        var_486 = dim(length1 = 80, length2 = 21, length3 = 30, length4 = null);

        var_76 = dim(length1 = 100, length2 = 5, length3 = 3, length4 = null);

        var_74 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
        var_75 = dim(20);
        var_83 = CharactorInfo.dim(300);
        var_78 = ItemInfo.dim(300);

        var_81 = dim(length1 = 300, length2 = 7, length3 = null, length4 = null);
        yield func881();
        yield func870();
        clrobj(data0 = 12, data1 = null);
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
function func870(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(870);
        var_1729 = 1;
        var_452 = 1;
        var_768 = 1;
        var_336 = 0;
        var_337 = 0;
        var_764 = 0;
        var_1075 = 0;
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_1076 = 0;
            for (let cnt2 = 0; cnt2 < 57; ++cnt2) {
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
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_1076 = 0;
            for (let cnt2 = 0; cnt2 < 57; ++cnt2) {
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
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_1076 = 0;
            for (let cnt2 = 0; cnt2 < 57; ++cnt2) {
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
function func871(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(871);
        var_3337 = var_66;
        var_3338 = var_67;
        if (var_3273 == 0) {
            dialog(data0 = "btq", data1 = 17, data2 = "魔少年の問題ファイル");
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
            width(680, 680);
        }
        if (var_10 == 1) {
            width(680, 680);
        }
        var_3462 = 1;
        yield func876();
        return;
    });
}
function func872(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(872);
        dialog(data0 = "btq", data1 = 17, data2 = "魔少年の問題ファイル");
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
function func873(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(873);
        var_3463 = "";
        var_3463 = var_3463 + "" + var_3253 + "\n";
        var_3464 = 0;
        for (let cnt1 = 0; cnt1 < 38; ++cnt1) {
            var_3465 = 0;
            for (let cnt2 = 0; cnt2 < 59; ++cnt2) {
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
        for (let cnt1 = 0; cnt1 < 38; ++cnt1) {
            var_3465 = 0;
            for (let cnt2 = 0; cnt2 < 59; ++cnt2) {
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
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            var_3463 = var_3463 + "" + var_83[var_3468].Var0 + "\n";
            var_3467 = 0;
            var_3467 = var_83[var_3468].Var16;
            var_3463 = var_3463 + "" + var_3467 + "\n";
            var_3468++;
        }
        var_3468 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
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
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
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
        for (let cnt1 = 0; cnt1 < 200; ++cnt1) {
            var_3473 = noteget(cnt1);
            var_3472 = var_3472 + var_3473 + "\n";
        }
        yield func887();
        bsave(file_name = var_3336, data = var_3472, data_size = null, offset = null);
        return;
    });
}
function func874(this: any) {
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
function func875(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(875);
        var_983 = sdim(3000);

        var_71 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
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
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_1076 = 0;
            for (let cnt2 = 0; cnt2 < 57; ++cnt2) {
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
// 魔少年の問題機能?? ver0.12から追加されている
function func876(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(876);
        yield func233();

        var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
        dangeon_number = 99;
        var_375 = 1;
        var_336 = 0;
        var_97 = 0;
        var_337 = 0;
        yield func877();
        yield func858();
        var_92 = var_3261;
        if (var_92 == 15 || var_92 == 19 || var_92 == 22 || var_92 == 11 || var_92 == 23) {
            var_103 = 1;
        }
        var_199 = 2;
        var_74[var_66][var_67] = 1;
        var_75[var_201] = 1;
        yield func017();
        yield func018();
        if (var_200 == var_201) {
            var_98 = 1;
        }
        chdir(var_30);
        onexit(1);
        var_626 = 0;
        yield func111();
        yield func076(); // マップ背景画像の読込
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            yield func339();
        }
        var_68 = 1;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func877(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(877);
        var_983 = sdim(3000);

        var_71 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_65 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_82 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_77 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_80 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);

        var_73 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
        var_986 = dim(100);

        var_486 = dim(length1 = 80, length2 = 21, length3 = 30, length4 = null);

        var_76 = dim(length1 = 100, length2 = 5, length3 = 3, length4 = null);

        var_74 = dim(length1 = 70, length2 = 70, length3 = null, length4 = null);
        var_75 = dim(20);
        var_83 = CharactorInfo.dim(300);
        var_78 = ItemInfo.dim(300);

        var_81 = dim(length1 = 300, length2 = 7, length3 = null, length4 = null);
        yield func881();
        yield func870();
        yield func878();
        var_3474 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_3474].Var10 == var_201) {
                if (var_83[var_3474].Var0 != 101 && var_83[var_3474].Var0 != 102 && var_83[var_3474].Var0 != 103 && var_83[var_3474].Var0 != 104) {
                    var_83[var_3474].Var12 = 0;
                }
            }
            var_3474++;
        }
        return;
    });
}
function func878(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(878);
        var_764 = 0;
        var_1075 = 0;
        for (let cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_1076 = 0;
            for (let cnt2 = 0; cnt2 < 57; ++cnt2) {
                if (var_71[var_1076][var_1075] == 21 || var_71[var_1076][var_1075] == 22 || var_71[var_1076][var_1075] == 23 || var_71[var_1076][var_1075] == 24) {
                    var_71[var_1076][var_1075] = 14;
                }
                var_1076 = var_1076 + 1;
                var_764 = var_764 + 1;
            }
            var_1075 = var_1075 + 1;
        }
        return;
    });
}
function func879(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(879);
        var_336++;
        var_866 = var_336;
        var_77[var_1076][var_1075] = var_866;
        var_78[var_866].Var0 = var_1770;
        var_78[var_866].Var1 = var_1076;
        var_78[var_866].Var2 = var_1075;
        var_78[var_866].Var9 = var_71[var_1076][var_1075];
        if (var_1770 == 1) {
            var_78[var_866].Var13 = var_3342;
        }
        if (var_1770 >= 100 && var_1770 < 400) {
            var_78[var_866].Var19 = 1;
            var_78[var_866].Var20 = var_78[var_866].Var0;
            var_78[var_866].Var5 = 8;
            var_78[var_866].Var4 = var_3342;
            var_78[var_866].Var14 = 1;
            if (var_3342 == 11) {
                var_78[var_866].Var4 = 0;
                var_78[var_866].Var12 = 1;
            }
        }
        if (var_1770 >= 400 && var_1770 < 500) {
            var_78[var_866].Var3 = var_3342;
        }
        if (var_1770 >= 800 && var_1770 < 900) {
            yield func395();
            var_78[var_866].Var6 = var_858;
            var_78[var_866].Var7 = var_3342;
            var_78[var_866].Var8 = 0;
            var_486[var_858][1][0] = 0;
            var_486[var_858][2][0] = 0;
            var_486[var_858][3][0] = 0;
            var_486[var_858][4][0] = 0;
            var_486[var_858][5][0] = 0;
            var_486[var_858][6][0] = 0;
            var_486[var_858][7][0] = 0;
            var_486[var_858][8][0] = 0;
            var_486[var_858][9][0] = 0;
            var_486[var_858][10][0] = 0;
        }
        var_1771 = var_78[var_866].Var0;
        var_862[var_1771][0] = 1;
        return;
    });
}

function func880(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(880);
        yield func108(); // BGM用mp3ファイル再生停止
        var_3462 = 0;
        var_375 = 0;
        yield func235();
        onexit(0);
        if (var_3475 == 1) {
            chdir("問題");
            if (var_539 != 0) {
                var_3476 = "2";
                bsave(file_name = var_3336, data = var_3476, data_size = 1, offset = 0);
            }
            var_539 = 0;
            var_3475 = 0;
            yield func883();
            return;
        }
        var_539 = 0;
        yield func841();
        return;
    });
}
function func881(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(881);
        notesel(var_3477);
        var_3472 = sdim(10000);
        var_3472 = bload(var_3336);
        yield func886();
        noteadd(var_3472, 0, 1);
        var_983 = "";
        var_3478 = 1;
        for (let cnt1 = 0; cnt1 < 38; ++cnt1) {
            var_3479 = noteget(var_3478);
            var_983 = var_983 + var_3479;
            var_3478 = var_3478 + 1;
        }
        for (let cnt1 = 0; cnt1 < 38; ++cnt1) {
            var_3479 = noteget(var_3478);
            var_983 = var_983 + var_3479;
            var_3478 = var_3478 + 1;
        }
        var_3480 = 39 + 38;
        var_3253 = noteget(0);
        var_201 = noteget(var_3480);
        var_3480++;
        var_3339 = noteget(var_3480);
        var_3480++;
        var_3422 = noteget(var_3480);
        var_3480++;
        var_3421 = noteget(var_3480);
        var_3480++;
        var_3424 = noteget(var_3480);
        var_3480++;
        var_3423 = noteget(var_3480);
        var_3480++;
        var_3426 = noteget(var_3480);
        var_3480++;
        var_3425 = noteget(var_3480);
        var_3480++;
        var_3428 = noteget(var_3480);
        var_3480++;
        var_3427 = noteget(var_3480);
        var_3480++;
        var_3430 = noteget(var_3480);
        var_3480++;
        var_3429 = noteget(var_3480);
        var_3480++;
        var_3432 = noteget(var_3480);
        var_3480++;
        var_3431 = noteget(var_3480);
        var_3480++;
        var_3434 = noteget(var_3480);
        var_3480++;
        var_3433 = noteget(var_3480);
        var_3480++;
        var_3436 = noteget(var_3480);
        var_3480++;
        var_3435 = noteget(var_3480);
        var_3480++;
        var_3438 = noteget(var_3480);
        var_3480++;
        var_3437 = noteget(var_3480);
        var_3480++;
        var_3440 = noteget(var_3480);
        var_3480++;
        var_3439 = noteget(var_3480);
        var_3480++;
        var_3442 = noteget(var_3480);
        var_3480++;
        var_3441 = noteget(var_3480);
        var_3480++;
        var_3444 = noteget(var_3480);
        var_3480++;
        var_3443 = noteget(var_3480);
        var_3480++;
        var_3446 = noteget(var_3480);
        var_3480++;
        var_3445 = noteget(var_3480);
        var_3480++;
        var_3448 = noteget(var_3480);
        var_3480++;
        var_3447 = noteget(var_3480);
        var_3480++;
        var_3450 = noteget(var_3480);
        var_3480++;
        var_3449 = noteget(var_3480);
        var_3480++;
        var_3452 = noteget(var_3480);
        var_3480++;
        var_3451 = noteget(var_3480);
        var_3480++;
        var_3454 = noteget(var_3480);
        var_3480++;
        var_3453 = noteget(var_3480);
        var_3480++;
        var_3456 = noteget(var_3480);
        var_3480++;
        var_3455 = noteget(var_3480);
        var_3480++;
        var_3458 = noteget(var_3480);
        var_3480++;
        var_3457 = noteget(var_3480);
        var_3480++;
        var_3460 = noteget(var_3480);
        var_3480++;
        var_3459 = noteget(var_3480);
        var_3480++;
        var_3341 = noteget(var_3480);
        var_3480++;
        var_3340 = noteget(var_3480);
        var_3480++;
        var_3343 = noteget(var_3480);
        var_3480++;
        var_3345 = noteget(var_3480);
        var_3480++;
        var_3344 = noteget(var_3480);
        var_3480++;
        var_3346 = noteget(var_3480);
        var_3480++;
        var_3348 = noteget(var_3480);
        var_3480++;
        var_3347 = noteget(var_3480);
        var_3480++;
        var_3349 = noteget(var_3480);
        var_3480++;
        var_3351 = noteget(var_3480);
        var_3480++;
        var_3350 = noteget(var_3480);
        var_3480++;
        var_3352 = noteget(var_3480);
        var_3480++;
        var_3354 = noteget(var_3480);
        var_3480++;
        var_3353 = noteget(var_3480);
        var_3480++;
        var_3355 = noteget(var_3480);
        var_3480++;
        var_3357 = noteget(var_3480);
        var_3480++;
        var_3356 = noteget(var_3480);
        var_3480++;
        var_3358 = noteget(var_3480);
        var_3480++;
        var_3360 = noteget(var_3480);
        var_3480++;
        var_3359 = noteget(var_3480);
        var_3480++;
        var_3361 = noteget(var_3480);
        var_3480++;
        var_3363 = noteget(var_3480);
        var_3480++;
        var_3362 = noteget(var_3480);
        var_3480++;
        var_3364 = noteget(var_3480);
        var_3480++;
        var_3366 = noteget(var_3480);
        var_3480++;
        var_3365 = noteget(var_3480);
        var_3480++;
        var_3367 = noteget(var_3480);
        var_3480++;
        var_3369 = noteget(var_3480);
        var_3480++;
        var_3368 = noteget(var_3480);
        var_3480++;
        var_3370 = noteget(var_3480);
        var_3480++;
        var_3372 = noteget(var_3480);
        var_3480++;
        var_3371 = noteget(var_3480);
        var_3480++;
        var_3373 = noteget(var_3480);
        var_3480++;
        var_3375 = noteget(var_3480);
        var_3480++;
        var_3374 = noteget(var_3480);
        var_3480++;
        var_3376 = noteget(var_3480);
        var_3480++;
        var_3378 = noteget(var_3480);
        var_3480++;
        var_3377 = noteget(var_3480);
        var_3480++;
        var_3379 = noteget(var_3480);
        var_3480++;
        var_3381 = noteget(var_3480);
        var_3480++;
        var_3380 = noteget(var_3480);
        var_3480++;
        var_3382 = noteget(var_3480);
        var_3480++;
        var_3384 = noteget(var_3480);
        var_3480++;
        var_3383 = noteget(var_3480);
        var_3480++;
        var_3385 = noteget(var_3480);
        var_3480++;
        var_3387 = noteget(var_3480);
        var_3480++;
        var_3386 = noteget(var_3480);
        var_3480++;
        var_3388 = noteget(var_3480);
        var_3480++;
        var_3390 = noteget(var_3480);
        var_3480++;
        var_3389 = noteget(var_3480);
        var_3480++;
        var_3391 = noteget(var_3480);
        var_3480++;
        var_3393 = noteget(var_3480);
        var_3480++;
        var_3392 = noteget(var_3480);
        var_3480++;
        var_3394 = noteget(var_3480);
        var_3480++;
        var_3396 = noteget(var_3480);
        var_3480++;
        var_3395 = noteget(var_3480);
        var_3480++;
        var_3397 = noteget(var_3480);
        var_3480++;
        var_3399 = noteget(var_3480);
        var_3480++;
        var_3398 = noteget(var_3480);
        var_3480++;
        var_3400 = noteget(var_3480);
        var_3480++;
        var_3402 = noteget(var_3480);
        var_3480++;
        var_3401 = noteget(var_3480);
        var_3480++;
        var_3404 = noteget(var_3480);
        var_3480++;
        var_3403 = noteget(var_3480);
        var_3480++;
        var_3406 = noteget(var_3480);
        var_3480++;
        var_3405 = noteget(var_3480);
        var_3480++;
        var_3408 = noteget(var_3480);
        var_3480++;
        var_3407 = noteget(var_3480);
        var_3480++;
        var_3410 = noteget(var_3480);
        var_3480++;
        var_3409 = noteget(var_3480);
        var_3480++;
        var_3412 = noteget(var_3480);
        var_3480++;
        var_3411 = noteget(var_3480);
        var_3480++;
        var_3414 = noteget(var_3480);
        var_3480++;
        var_3413 = noteget(var_3480);
        var_3480++;
        var_3416 = noteget(var_3480);
        var_3480++;
        var_3415 = noteget(var_3480);
        var_3480++;
        var_3418 = noteget(var_3480);
        var_3480++;
        var_3417 = noteget(var_3480);
        var_3480++;
        var_3420 = noteget(var_3480);
        var_3480++;
        var_3419 = noteget(var_3480);
        var_3480++;
        var_3260 = noteget(var_3480);
        var_3480++;
        var_3253 = int(var_3253);
        var_201 = int(var_201);
        var_3339 = int(var_3339);
        var_3422 = int(var_3422);
        var_3421 = int(var_3421);
        var_3424 = int(var_3424);
        var_3423 = int(var_3423);
        var_3426 = int(var_3426);
        var_3425 = int(var_3425);
        var_3428 = int(var_3428);
        var_3427 = int(var_3427);
        var_3430 = int(var_3430);
        var_3429 = int(var_3429);
        var_3432 = int(var_3432);
        var_3431 = int(var_3431);
        var_3434 = int(var_3434);
        var_3433 = int(var_3433);
        var_3436 = int(var_3436);
        var_3435 = int(var_3435);
        var_3438 = int(var_3438);
        var_3437 = int(var_3437);
        var_3440 = int(var_3440);
        var_3439 = int(var_3439);
        var_3442 = int(var_3442);
        var_3441 = int(var_3441);
        var_3444 = int(var_3444);
        var_3443 = int(var_3443);
        var_3446 = int(var_3446);
        var_3445 = int(var_3445);
        var_3448 = int(var_3448);
        var_3447 = int(var_3447);
        var_3450 = int(var_3450);
        var_3449 = int(var_3449);
        var_3452 = int(var_3452);
        var_3451 = int(var_3451);
        var_3454 = int(var_3454);
        var_3453 = int(var_3453);
        var_3456 = int(var_3456);
        var_3455 = int(var_3455);
        var_3458 = int(var_3458);
        var_3457 = int(var_3457);
        var_3460 = int(var_3460);
        var_3459 = int(var_3459);
        var_3341 = int(var_3341);
        var_3340 = int(var_3340);
        var_3343 = int(var_3343);
        var_3345 = int(var_3345);
        var_3344 = int(var_3344);
        var_3346 = int(var_3346);
        var_3348 = int(var_3348);
        var_3347 = int(var_3347);
        var_3349 = int(var_3349);
        var_3351 = int(var_3351);
        var_3350 = int(var_3350);
        var_3352 = int(var_3352);
        var_3354 = int(var_3354);
        var_3353 = int(var_3353);
        var_3355 = int(var_3355);
        var_3357 = int(var_3357);
        var_3356 = int(var_3356);
        var_3358 = int(var_3358);
        var_3360 = int(var_3360);
        var_3359 = int(var_3359);
        var_3361 = int(var_3361);
        var_3363 = int(var_3363);
        var_3362 = int(var_3362);
        var_3364 = int(var_3364);
        var_3366 = int(var_3366);
        var_3365 = int(var_3365);
        var_3367 = int(var_3367);
        var_3369 = int(var_3369);
        var_3368 = int(var_3368);
        var_3370 = int(var_3370);
        var_3372 = int(var_3372);
        var_3371 = int(var_3371);
        var_3373 = int(var_3373);
        var_3375 = int(var_3375);
        var_3374 = int(var_3374);
        var_3376 = int(var_3376);
        var_3378 = int(var_3378);
        var_3377 = int(var_3377);
        var_3379 = int(var_3379);
        var_3381 = int(var_3381);
        var_3380 = int(var_3380);
        var_3382 = int(var_3382);
        var_3384 = int(var_3384);
        var_3383 = int(var_3383);
        var_3385 = int(var_3385);
        var_3387 = int(var_3387);
        var_3386 = int(var_3386);
        var_3388 = int(var_3388);
        var_3390 = int(var_3390);
        var_3389 = int(var_3389);
        var_3391 = int(var_3391);
        var_3393 = int(var_3393);
        var_3392 = int(var_3392);
        var_3394 = int(var_3394);
        var_3396 = int(var_3396);
        var_3395 = int(var_3395);
        var_3397 = int(var_3397);
        var_3399 = int(var_3399);
        var_3398 = int(var_3398);
        var_3400 = int(var_3400);
        var_3402 = int(var_3402);
        var_3401 = int(var_3401);
        var_3404 = int(var_3404);
        var_3403 = int(var_3403);
        var_3406 = int(var_3406);
        var_3405 = int(var_3405);
        var_3408 = int(var_3408);
        var_3407 = int(var_3407);
        var_3410 = int(var_3410);
        var_3409 = int(var_3409);
        var_3412 = int(var_3412);
        var_3411 = int(var_3411);
        var_3414 = int(var_3414);
        var_3413 = int(var_3413);
        var_3416 = int(var_3416);
        var_3415 = int(var_3415);
        var_3418 = int(var_3418);
        var_3417 = int(var_3417);
        var_3420 = int(var_3420);
        var_3419 = int(var_3419);
        var_3260 = int(var_3260);
        var_3262 = var_3260;
        return;
    });
}
function func882(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(882);
        yield func108(); // BGM用mp3ファイル再生停止
        var_3481 = 26;
        var_3482 = 106;
        var_3483 = var_3482;
        var_3484 = 57;
        var_3485 = 110;
        var_3486 = 1;
        var_3487 = 1;
        var_3488 = 1;
        var_3489 = 0;
        if (var_709 != 0 || var_716 != 0 || var_723 != 0) {
            var_3489 = 1;
            var_3486 = 0;
        }
        if (var_710 != 0 || var_717 != 0 || var_724 != 0) {
            var_3489 = 2;
            var_3486 = 0;
        }
        var_3490 = sdim(10000);

        dirlist(var_3490, "問題", 5);
        if (stat == 0) {
            mkdir("問題");
        }
        chdir("問題");
        yield func883();
    });
}
function func883(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(883);
        var_627 = 1;
        var_3490 = sdim(10000);
        dirlist(var_3490, "*.btq");
        notesel(var_3490);
        var_3491 = 0;
        var_3491 = noteinfo(0);
        var_3492 = Math.floor(var_3491 / 10) + 1;
        var_3493 = dim(var_3491);
        var_3494 = 0;
        var_3495 = "";
        for (let cnt1 = 0; cnt1 < var_3491; ++cnt1) {
            var_3496 = noteget(var_3494);
    
            var_3495 = bload(var_3496, 1);
            if (var_3495 == "0" || var_3495 == "1") {
                var_3493[var_3494] = 0;
            }
            if (var_3495 == "2") {
                var_3493[var_3494] = 1;
            }
            if (var_3495 == "3") {
                var_3493[var_3494] = 2;
            }
            if (var_3495 == "4") {
                var_3493[var_3494] = 3;
            }
            var_3494++;
        }
        yield func884();
    });
}
function func884(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(884);
        var_3497 = var_3487 * 10 - 10;
        var_3498 = var_3491 - var_3497;
        if (var_3498 >= 10) {
            var_3498 = 10;
        }
        yield func080(); // 各キー入力確認
        if (var_3491 > 0) {
            if (var_259 == 1) {
                if (var_3489 >= 1 && var_3486 == 0) {
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3486 = var_3497 + var_3488;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
                if (var_3488 < 10 && var_3488 < var_3498) {
                    var_3482 = var_3482 + 20;
                    var_3488++;
                    var_3486 = var_3497 + var_3488;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
                if (var_3488 == 10 || var_3488 >= var_3498) {
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3486 = var_3497 + var_3488;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
            }
            if (var_255 == 1) {
                if (var_3489 >= 1 && var_3488 == 1) {
                    var_3486 = 0;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
                if (var_3488 > 1) {
                    var_3482 = var_3482 - 20;
                    var_3488--;
                    var_3486 = var_3497 + var_3488;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
                if (var_3488 <= 1) {
                    var_3482 = var_3483 + 20 * var_3498 - 20;
                    var_3488 = var_3498;
                    var_3486 = var_3497 + var_3488;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
            }
            if (var_257 == 1 && var_3486 != 0) {
                if (var_3487 < var_3492) {
                    var_3487++;
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3497 = var_3487 * 10 - 10;
                    var_3486 = var_3497 + var_3488;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
                if (var_3487 >= var_3492) {
                    var_3487 = 1;
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3497 = var_3487 * 10 - 10;
                    var_3486 = var_3497 + var_3488;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
            }
            if (var_254 == 1 && var_3486 != 0) {
                if (var_3487 > 1) {
                    var_3487--;
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3497 = var_3487 * 10 - 10;
                    var_3486 = var_3497 + var_3488;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
                if (var_3487 <= 1) {
                    var_3487 = var_3492;
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3497 = var_3487 * 10 - 10;
                    var_3486 = var_3497 + var_3488;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
            }
        }
        if (key_Z_on == 1) {

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            if (var_3486 == 0) {
                yield func178(); // 処理確認タイマー(3m秒)
                yield func233();
                onexit(0);
                yield func841();
                return;
            }
            if (var_3491 > 0) {
                var_3499 = var_3486 - 1;
                var_1643 = noteget(var_3499);
                var_3336 = var_1643;
                var_3475 = 1;
                var_375 = 1;
                yield func876();
                return;
            }
        }
        if (key_X_on == 1) {
            var_627 = 0;
            yield func178(); // 処理確認タイマー(3m秒)

            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            chdir(var_30);
            yield func142();
            return;
        }
        yield func885();
        yield wait(5);
        yield func884();
        return;
    });
}
function func885(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(885);
        redraw(0);
        gmode(2);
        pos(0, 0);
        gcopy(3, 0, 400, 680, 680);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(0, 0);
        gcopy(12, 0, 0, 680, 680);
        var_1631 = 20;
        var_1632 = 10;
        var_1633 = 300;
        var_1634 = 30;
        var_1635 = 0;
        var_1636 = 0;
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(var_1631 - 3, var_1632 - 3);
        gcopy(12, 0, 0, var_1633 + 5, var_1634 + 5);
        gmode(2);
        color(255, 255, 255);
        line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
        line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
        line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
        line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
        pset(var_1631 - var_1635, var_1632 - var_1636);
        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
        pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);

        font("ＭＳ　Ｐゴシック", 16, 1);
        pos(var_1631 + 105, var_1632 + 8);
        mes("魔少年の問題");
        if (var_3489 >= 1) {
            var_1631 = 20;
            var_1632 = 55;
            var_1633 = 115;
            var_1634 = 30;
            var_1635 = 0;
            var_1636 = 0;
            color(0, 0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(var_1631 - 3, var_1632 - 3);
            gcopy(12, 0, 0, var_1633 + 5, var_1634 + 5);
            gmode(2);
            color(255, 255, 255);
            line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
            line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
            line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
            line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
            pset(var_1631 - var_1635, var_1632 - var_1636);
            pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
            pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
            pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
    
            font("ＭＳ　Ｐゴシック", 16, 1);
            pos(var_1631 + 38, var_1632 + 8);
            mes("問題作成");
        }
        var_1631 = 20;
        var_1632 = 100;
        var_1633 = 300;
        var_1634 = 220;
        var_1635 = 0;
        var_1636 = 0;
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(var_1631 - 3, var_1632 - 3);
        gcopy(12, 0, 0, var_1633 + 5, 220 + 5);
        gmode(2);
        color(255, 255, 255);
        line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
        line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635 - 170, var_1632 + var_1634 + var_1636);
        line(var_1631 - var_1635 + 175, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
        line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
        line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
        pset(var_1631 - var_1635, var_1632 - var_1636);
        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
        pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);

        font("ＭＳ　Ｐゴシック", 16, 1);
        if (var_3487 < 10) {
            pos(var_1631 - var_1635 + 150, var_1632 + var_1634 + var_1636 - 8);
            mes("" + var_3487);
        }
        if (var_3487 >= 10) {
            pos(var_1631 - var_1635 + 145, var_1632 + var_1634 + var_1636 - 8);
            mes("" + var_3487);
        }
        color(255, 255, 255);
        var_3500 = var_3485;
        var_3494 = var_3487 * 10 - 10;
        var_3501 = var_3491 - var_3494;
        if (var_3501 >= 10) {
            var_3501 = 10;
        }
        for (let cnt1 = 0; cnt1 < var_3501; ++cnt1) {
            var_3502 = noteget(var_3494);
            getstr(var_3503, var_3502, 0, 46);
            pos(var_3484, var_3500);
            color(255, 255, 255);
            if (var_3493[var_3494] == 1) {
                color(255, 255, 0);
            }
            if (var_3493[var_3494] == 2) {
                color(255, 0, 0);
            }
            if (var_3493[var_3494] == 3) {
                color(0, 255, 255);
            }
            mes("" + var_3503);
            var_3494++;
            var_3500 = var_3500 + 20;
        }
        gmode(2);
        pos(var_3481, var_3482);
        if (var_3486 == 0) {
            pos(var_3481, 59);
        }
        gcopy(8, 70, 50, 25, 20);
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(290, 50);
        gcopy(3, 1560, 0, 40, 45);
        gmode(2);
        pos(290, 48);
        gcopy(3, 760, 120, 40, 40);
        pos(150, 32);
        gcopy(17, 0, 920, 160, 80);

        font("ＭＳ　Ｐゴシック", 12, 1);
        color(0, 0, 0);
        pos(175, 62);
        if (var_3491 > 0) {
            mes("問題を選びな！");
        }
        if (var_3491 == 0) {
            mes("問題がないぜ");
        }
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        return;
    });
}
function func886(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(886);
        var_3504 = var_3336;
        exist(var_3504);

        var_3505 = strsize;
        var_254 = "lナ2";
        var_3506 = 1;
        for (let cnt1 = 0; cnt1 < var_3505 - 1; ++cnt1) {
            var_3507 = peek(var_3472, var_3506);
            conf_keyon = peek(var_254, var_3506 % 4);
            var_3508 = var_3507 ^ conf_keyon;
            conf_keyon = conf_keyon + 57 && 255;
            poke(var_254, var_3506 % 4, conf_keyon);
            poke(var_3472, var_3506, var_3508);
            var_3506++;
        }
        return;
    });
}
function func887(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(887);
        var_3504 = var_3336;
        exist(var_3504);

        var_3505 = strsize;
        if (var_3505 < 0) {
            var_3505 = 10000;
        }
        var_254 = "lナ2";
        var_3506 = 1;
        for (let cnt1 = 0; cnt1 < var_3505 - 1; ++cnt1) {
            var_3507 = peek(var_3472, var_3506);
            conf_keyon = peek(var_254, var_3506 % 4);
            var_3508 = var_3507 ^ conf_keyon;
            conf_keyon = conf_keyon + 57 && 255;
            poke(var_254, var_3506 % 4, conf_keyon);
            poke(var_3472, var_3506, var_3508);
            var_3506++;
        }
        return;
    });
}
function func888(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(888);
        var_874 = sdim(10000);
        var_3322 = sdim(10000);
        var_884 = dim(10000);
        var_874 = "アイテム";
        var_3322 = "eeeeeeeeee";
        var_883 = 1;
        for (let cnt1 = 0; cnt1 < 150; ++cnt1) {
            yield func889();
            var_874 = var_874 + "\n" + item_name;
            if (belongings_item_list < 10) {
                var_3322 = var_3322 + "\np" + belongings_item_list + "eeeeeeee";
            }
            if (belongings_item_list >= 10 && belongings_item_list < 100) {
                var_3322 = var_3322 + "\np" + belongings_item_list + "eeeeeee";
            }
            if (belongings_item_list >= 100) {
                var_3322 = var_3322 + "\np" + belongings_item_list + "eeeeee";
            }
            var_884[var_883] = belongings_item_list;
            if (belongings_item_list == 1) {
                break;
            }
            var_883++;
        }
        return;
    });
}

//アイテムの購入金額の値
function func889(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(889);
        item_name = "";
        buying_price = 0;
        var_3509 = 0;
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 0;
            buying_price = 1;
            item_name = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 122;
            buying_price = 1000;
            item_name = "ｱﾇﾋﾞｽ神のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 201;
            buying_price = 900;
            item_name = "ｲｴﾛｰﾃﾝﾊﾟﾗﾝｽのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 304;
            buying_price = 1900;
            item_name = "ｳｪｻﾞｰﾘﾎﾟｰﾄのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 312;
            buying_price = 8200;
            item_name = "ｴｱﾛｽﾐｽのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 103;
            buying_price = 650;
            item_name = "ｴｺｰｽﾞACT3のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 315;
            buying_price = 2500;
            item_name = "ｴﾋﾟﾀﾌのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 308;
            buying_price = 2200;
            item_name = "ｴﾎﾞﾆｰ･ﾃﾞﾋﾞﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 310;
            buying_price = 1000;
            item_name = "ｴﾝﾌﾟﾚｽのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 206;
            buying_price = 2200;
            item_name = "ｵｱｼｽのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 317;
            buying_price = 2300;
            item_name = "ｷｯｽのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 112;
            buying_price = 11700;
            item_name = "ｷﾗｰ･ｸｨｰﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 102;
            buying_price = 19000;
            item_name = "ｷﾝｸﾞ･ｸﾘﾑｿﾞﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 113;
            buying_price = 2100;
            item_name = "ｸﾗｯｼｭのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 205;
            buying_price = 2500;
            item_name = "ｸﾗﾌﾄﾜｰｸのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 123;
            buying_price = 11000;
            item_name = "ｸﾘｰﾑのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 207;
            buying_price = 850;
            item_name = "ｸﾞﾚｲﾄﾌﾙ･ﾃﾞｯﾄﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 106;
            buying_price = 4600;
            item_name = "ｸﾚｲｼﾞｰ･DのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 115;
            buying_price = 5200;
            item_name = "G･ｴｸｽﾍﾟﾘｴﾝｽのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 104;
            buying_price = 650;
            item_name = "ｻﾞ･ﾊﾝﾄﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 203;
            buying_price = 1400;
            item_name = "ｻﾞ･ﾌｰﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 111;
            buying_price = 15600;
            item_name = "ｻﾞ･ﾜｰﾙﾄﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 316;
            buying_price = 1000;
            item_name = "ｻﾊﾞｲﾊﾞｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 204;
            buying_price = 5300;
            item_name = "ｼｱｰﾊｰﾄｱﾀｯｸのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 318;
            buying_price = 1000;
            item_name = "ｼﾞｬﾝﾋﾟﾝJﾌﾗｯｼｭのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 101;
            buying_price = 14000;
            item_name = "ｼﾙﾊﾞｰﾁｬﾘｵｯﾂのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 200;
            buying_price = 1800;
            item_name = "ｽｰﾊﾟｰﾌﾗｲのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 100;
            buying_price = 17000;
            item_name = "ｽﾀｰ･ﾌﾟﾗﾁﾅのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 108;
            buying_price = 16000;
            item_name = "ｽﾃｨｯｷｰﾌｨﾝｶﾞｰｽﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 120;
            buying_price = 1700;
            item_name = "ｽﾄｰﾝ･ﾌﾘｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 314;
            buying_price = 1200;
            item_name = "ｽﾄﾚｲ･ｷｬｯﾄのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 119;
            buying_price = 1350;
            item_name = "ｽﾊﾟｲｽ･ｶﾞｰﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 117;
            buying_price = 1800;
            item_name = "ﾀﾞｰｸﾌﾞﾙｰﾑｰﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 118;
            buying_price = 1300;
            item_name = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 311;
            buying_price = 1000;
            item_name = "ﾁｰﾌﾟ･ﾄﾘｯｸのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 105;
            buying_price = 950;
            item_name = "ﾁﾘﾍﾟｯﾊﾟｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 107;
            buying_price = 750;
            item_name = "ﾃﾞｽ･13のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 303;
            buying_price = 7400;
            item_name = "ﾄﾞﾗｺﾞﾝｽﾞﾄﾞﾘｰﾑのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 116;
            buying_price = 700;
            item_name = "ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 301;
            buying_price = 8800;
            item_name = "ﾊｰｳﾞｪｽﾄのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 121;
            buying_price = 1000;
            item_name = "ﾊﾟｰﾌﾟﾙ･ﾍｲｽﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 300;
            buying_price = 1300;
            item_name = "ﾊﾟｰﾙ･ｼﾞｬﾑのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 313;
            buying_price = 5200;
            item_name = "ﾊｲｳｪｲ･ｽﾀｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 302;
            buying_price = 800;
            item_name = "ﾊｲｳｪｲ･ﾄｩ･ﾍﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 395;
            buying_price = 4700;
            item_name = "ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 319;
            buying_price = 3400;
            item_name = "ﾎﾞｰｲIIﾏﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 202;
            buying_price = 3900;
            item_name = "ﾎﾜｲﾄｱﾙﾊﾞﾑのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 109;
            buying_price = 13200;
            item_name = "ﾏｼﾞｼｬﾝｽﾞﾚｯﾄﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 306;
            buying_price = 4400;
            item_name = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 320;
            buying_price = 2000;
            item_name = "ﾒﾀﾘｶのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 0;
            buying_price = 1;
            item_name = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 406;
            buying_price = 550;
            item_name = "ｴｺｰｽﾞACT1のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 405;
            buying_price = 450;
            item_name = "ｴｺｰｽﾞACT2のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 402;
            buying_price = 800;
            item_name = "ｴﾝﾍﾟﾗｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 403;
            buying_price = 700;
            item_name = "ｾｯｸｽﾋﾟｽﾄﾙｽﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 411;
            buying_price = 1300;
            item_name = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 400;
            buying_price = 900;
            item_name = "ﾊｲｴﾛﾌｧﾝﾄｸﾞﾘｰﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 401;
            buying_price = 500;
            item_name = "ﾌｰ･ﾌｧｲﾀｰｽﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 412;
            buying_price = 1600;
            item_name = "ﾍﾌﾞﾝｽﾞﾄﾞｱｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 404;
            buying_price = 1100;
            item_name = "ﾎﾙｽ神のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 408;
            buying_price = 750;
            item_name = "ﾏﾝ･ｲﾝ･ｻﾞ･ﾐﾗｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 409;
            buying_price = 550;
            item_name = "ﾗﾊﾞｰｽﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 0;
            buying_price = 1;
            item_name = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 570;
            buying_price = 500;
            item_name = "ｼﾞｮﾅｻﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 572;
            buying_price = 500;
            item_name = "承太郎のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 569;
            buying_price = 500;
            item_name = "ﾎﾟﾙﾅﾚﾌのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 588;
            buying_price = 400;
            item_name = "J･ｶﾞｲﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 575;
            buying_price = 500;
            item_name = "ﾏﾆｯｼｭﾎﾞｰｲのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 563;
            buying_price = 400;
            item_name = "ﾝﾄﾞｩｰﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 571;
            buying_price = 500;
            item_name = "ﾎﾞｲﾝｺﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 579;
            buying_price = 1500;
            item_name = "ﾍﾟｯﾄｼｮｯﾌﾟのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 584;
            buying_price = 500;
            item_name = "ﾇｹｻｸのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 560;
            buying_price = 400;
            item_name = "仗助のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 562;
            buying_price = 1500;
            item_name = "康一のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 585;
            buying_price = 500;
            item_name = "億泰のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 573;
            buying_price = 400;
            item_name = "重ちーのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 564;
            buying_price = 500;
            item_name = "噴上裕也のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 577;
            buying_price = 900;
            item_name = "ﾐｷﾀｶのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 587;
            buying_price = 500;
            item_name = "吉良吉影のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 589;
            buying_price = 500;
            item_name = "ﾌﾟﾛｼｭｰﾄ兄貴のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 586;
            buying_price = 900;
            item_name = "ペッシのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 590;
            buying_price = 400;
            item_name = "ｷﾞｱｯﾁｮのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 580;
            buying_price = 1500;
            item_name = "ﾄﾞｯﾋﾟｵのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 565;
            buying_price = 400;
            item_name = "ﾌﾟｯﾁ神父のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 574;
            buying_price = 500;
            item_name = "ｴﾝﾎﾟﾘｵのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 568;
            buying_price = 500;
            item_name = "ｼﾞｮﾝｶﾞﾘ･AのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 566;
            buying_price = 500;
            item_name = "ｹﾝｿﾞｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 576;
            buying_price = 400;
            item_name = "破裂するDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 582;
            buying_price = 300;
            item_name = "水が熱湯になるDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 578;
            buying_price = 1500;
            item_name = "ｻﾝﾄﾞﾏﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 0;
            buying_price = 1;
            item_name = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 600;
            buying_price = 100;
            item_name = "ﾋﾟｯﾂｧ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 602;
            buying_price = 400;
            item_name = "ﾈｱﾎﾟﾘｽのﾋﾟｯﾂｧ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 604;
            buying_price = 800;
            item_name = "ﾎﾟﾙﾎﾟのﾋﾟｯﾂｧ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 630;
            buying_price = 600;
            item_name = "娼婦風ｽﾊﾟｹﾞｯﾃｨ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 631;
            buying_price = 600;
            item_name = "ﾓｯﾂｧﾚﾗﾁｰｽﾞとﾄﾏﾄのｻﾗﾀﾞ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 632;
            buying_price = 600;
            item_name = "ｷﾘﾏﾝｼﾞｬﾛの雪解け水";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 633;
            buying_price = 600;
            item_name = "子羊背肉のﾘﾝｺﾞｿｰｽかけ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 634;
            buying_price = 600;
            item_name = "ﾌﾟﾘﾝ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 650;
            buying_price = 200;
            item_name = "ｶｴﾙ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 651;
            buying_price = 500;
            item_name = "大きいｶｴﾙ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 653;
            buying_price = 1000;
            item_name = "超巨大なｶｴﾙ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 654;
            buying_price = 100;
            item_name = "ﾔﾄﾞｸｶﾞｴﾙ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 655;
            buying_price = 100;
            item_name = "ｻﾞﾘｶﾞﾆ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 0;
            buying_price = 1;
            item_name = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 800;
            buying_price = 2400;
            item_name = "ｴﾆｸﾞﾏの紙";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 806;
            buying_price = 4600;
            item_name = "ｶﾙﾈの死体";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 807;
            buying_price = 4600;
            item_name = "DIOの骨";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 817;
            buying_price = 4600;
            item_name = "乳母車";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 850;
            buying_price = 2700;
            item_name = "波紋のツボ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 851;
            buying_price = 2500;
            item_name = "ﾎﾙﾏｼﾞｵのﾋﾞﾝ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 852;
            buying_price = 2600;
            item_name = "ランドセル";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 853;
            buying_price = 2800;
            item_name = "ｻｰﾌｨｽ人形";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 854;
            buying_price = 2900;
            item_name = "聖人の脊椎";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 801;
            buying_price = 400;
            item_name = "形兆のDISCｹｰｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 802;
            buying_price = 400;
            item_name = "ﾄﾗｸﾀｰのﾀｲﾔ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 803;
            buying_price = 400;
            item_name = "ｻﾝｼﾞｪﾙﾏﾝの紙袋";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 804;
            buying_price = 400;
            item_name = "露伴のカバン";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 0;
            buying_price = 1;
            item_name = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 724;
            buying_price = 1500;
            item_name = "石仮面";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 714;
            buying_price = 2000;
            item_name = "紫外線照射装置";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 723;
            buying_price = 1500;
            item_name = "魔法のランプ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 726;
            buying_price = 1000;
            item_name = "鉄球";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 727;
            buying_price = 1000;
            item_name = "ｿﾞﾝﾋﾞ馬";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 0;
            buying_price = 1;
            item_name = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 901;
            buying_price = 360;
            item_name = "一部のコミックス";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 906;
            buying_price = 360;
            item_name = "二部のコミックス";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 913;
            buying_price = 390;
            item_name = "三部のコミックス";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 929;
            buying_price = 390;
            item_name = "四部のコミックス";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 948;
            buying_price = 388;
            item_name = "五部のコミックス";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 964;
            buying_price = 390;
            item_name = "ストーンオーシャン";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 981;
            buying_price = 390;
            item_name = "STEEL BALL RUN";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 0;
            buying_price = 1;
            item_name = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            belongings_item_list = 1;
            buying_price = 1;
            item_name = "お金";
        }
        var_3510 = var_3509;
        return;
    });
}
function func890(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(890);
        var_886 = sdim(10000);
        var_3324 = sdim(10000);
        var_3300 = dim(10000);
        var_886 = "罠";
        var_3324 = "eeeeeeeeee";
        var_883 = 1;
        for (let cnt1 = 0; cnt1 < 32; ++cnt1) {
            yield func891();
            var_886 = var_886 + "\n" + var_889;
            if (var_888 < 10) {
                var_3324 = var_3324 + "\np" + var_888 + "eeeeeeee";
            }
            if (var_888 >= 10 && var_888 < 100) {
                var_3324 = var_3324 + "\np" + var_888 + "eeeeeee";
            }
            if (var_888 >= 100) {
                var_3324 = var_3324 + "\np" + var_888 + "eeeeee";
            }
            var_3300[var_883] = var_888;
            if (var_888 == 98) {
                break;
            }
            var_883++;
        }
        return;
    });
}
function func891(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(891);
        var_3509 = 0;
        var_889 = "";
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 0;
            var_889 = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 1;
            var_889 = "ｾﾄ神の罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 3;
            var_889 = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 5;
            var_889 = "猫袋";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 6;
            var_889 = "ﾀﾞｰﾋﾞｰ弟の落とし穴";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 7;
            var_889 = "ﾛｰﾘﾝｸﾞｽﾄｰﾝｽﾞの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 8;
            var_889 = "ﾎﾜｲﾄｱﾙﾊﾞﾑの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 9;
            var_889 = "ｴｺｰｽﾞACT2の罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 10;
            var_889 = "ｸﾗﾌﾄﾜｰｸの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 11;
            var_889 = "ﾜﾑｳの影";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 12;
            var_889 = "DIOの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 13;
            var_889 = "ｽｶｲ･ﾊｲの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 14;
            var_889 = "ｴｺｰｽﾞACT2の罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 15;
            var_889 = "ﾍﾌﾞﾝｽﾞ･ﾄﾞｱｰの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 16;
            var_889 = "ﾄｰｷﾝｸﾞ･ﾍｯﾄﾞの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 17;
            var_889 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰの地雷";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 18;
            var_889 = "ﾊﾞｽﾃﾄ女神の罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 19;
            var_889 = "ラクガキの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 20;
            var_889 = "ｴｺｰｽﾞACT2の罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 21;
            var_889 = "ｴﾝﾌﾟﾚｽの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 22;
            var_889 = "ﾊｲｳｪｲ･ｽﾀｰの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 23;
            var_889 = "ﾜｲｱｰﾄﾞの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 25;
            var_889 = "ネズミ捕りの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 26;
            var_889 = "ﾎﾜｲﾄｽﾈｲｸの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 28;
            var_889 = "ｵｴｺﾓﾊﾞの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 95;
            var_889 = "ﾀﾞｲｱｰさんの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 98;
            var_889 = "ｶﾞﾗｽの破片";
        }
        return;
    });
}
function func892(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(892);
        var_890 = sdim(10000);
        var_3319 = sdim(10000);
        var_3292 = dim(10000);
        var_890 = "敵";
        var_3319 = "eeeeeeeeee";
        var_883 = 1;
        for (let cnt1 = 0; cnt1 < 126; ++cnt1) {
            yield func893();
            var_890 = var_890 + "\n" + enemy_name;
            if (enemy_list < 10) {
                var_3319 = var_3319 + "\np" + enemy_list + "eeeeeeee";
            }
            if (enemy_list >= 10 && enemy_list < 100) {
                var_3319 = var_3319 + "\np" + enemy_list + "eeeeeee";
            }
            if (enemy_list >= 100) {
                var_3319 = var_3319 + "\np" + enemy_list + "eeeeee";
            }
            var_3292[var_883] = enemy_list;
            if (enemy_list == 37) {
                break;
            }
            var_883++;
        }
        return;
    });
}

// 
function func893(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(893);
        var_3509 = 0;
        enemy_name = "";
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 0;
            enemy_name = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 79;
            enemy_name = "ｴｺｰｽﾞの卵";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 1;
            enemy_name = "ﾔｸ中のｺﾞﾛﾂｷ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 5;
            enemy_name = "小汚い浮浪者";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 147;
            enemy_name = "ｼﾞｮｾﾌ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 2;
            enemy_name = "ヌケサク";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 93;
            enemy_name = "ｴﾝﾎﾟﾘｵ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 3;
            enemy_name = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 94;
            enemy_name = "ブルりん";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 77;
            enemy_name = "ｴｺｰｽﾞACT1";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 51;
            enemy_name = "ﾜﾝﾁｪﾝ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 7;
            enemy_name = "運命の車輪";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 9;
            enemy_name = "ﾗﾊﾞｰｿｳﾙ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 39;
            enemy_name = "ﾊｲｳｪｲｽﾀｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 26;
            enemy_name = "ﾊｰｳﾞｪｽﾄ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 76;
            enemy_name = "ｴｺｰｽﾞACT2";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 6;
            enemy_name = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙの人形";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 165;
            enemy_name = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 52;
            enemy_name = "ｼﾞｬｯｸ･ｻﾞ･ﾘﾊﾟｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 141;
            enemy_name = "F・F";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 134;
            enemy_name = "ｼﾞｮﾘｰﾝ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 4;
            enemy_name = "ﾃﾞｽ･13";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 13;
            enemy_name = "ﾗﾊﾞｰｽﾞ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 101;
            enemy_name = "ﾍﾟｲｼﾞ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 102;
            enemy_name = "ｼﾞｮｰﾝｽﾞ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 103;
            enemy_name = "ﾌﾟﾗﾝﾄ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 104;
            enemy_name = "ﾎﾞｰﾝﾅﾑ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 119;
            enemy_name = "ｼﾞｮｾﾌ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 99;
            enemy_name = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 71;
            enemy_name = "ﾄﾞｩｰﾋﾞｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 12;
            enemy_name = "ｴｺｰｽﾞACT3";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 56;
            enemy_name = "ｼｭﾄﾛﾊｲﾑ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 28;
            enemy_name = "ｼﾞｬｯｼﾞﾒﾝﾄ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 22;
            enemy_name = "ｱｳﾞﾄﾞｩﾙ人形";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 31;
            enemy_name = "吉良の親父";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 148;
            enemy_name = "ｴﾙﾒｪｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 131;
            enemy_name = "ｼﾞｮﾙﾉ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 115;
            enemy_name = "ｱｸｱ･ﾈｯｸﾚｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 11;
            enemy_name = "ﾜｲｱｰﾄﾞのﾍﾞｯｸ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 45;
            enemy_name = "由花子";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 29;
            enemy_name = "ｸﾞﾘｰﾝ･ﾃﾞｨ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 47;
            enemy_name = "億泰";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 27;
            enemy_name = "ｹﾞﾌﾞ神";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 136;
            enemy_name = "ｼｰｻﾞｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 38;
            enemy_name = "ｱﾚｯｼｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 48;
            enemy_name = "ｴｱﾛｽﾐｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 78;
            enemy_name = "ｱｳﾞﾄﾞｩﾙさん";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 17;
            enemy_name = "ｼｱｰﾊｰﾄｱﾀｯｸ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 46;
            enemy_name = "ﾎﾙ･ﾎｰｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 125;
            enemy_name = "ﾌｰｺﾞ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 14;
            enemy_name = "床屋のｶｰﾝ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 69;
            enemy_name = "ﾌﾞﾗﾌｫｰﾄﾞ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 59;
            enemy_name = "ﾌﾟｯﾁ神父";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 145;
            enemy_name = "康一";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 18;
            enemy_name = "ﾌﾞﾗｯｸ･ｻﾊﾞｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 35;
            enemy_name = "仗助";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 135;
            enemy_name = "若ｼﾞｮｾﾌ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 10;
            enemy_name = "ﾉﾄｰﾘｱｽBIG";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 95;
            enemy_name = "ｽﾄﾚｲﾂｫ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 63;
            enemy_name = "ﾌﾟﾛｼｭｰﾄ兄貴";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 84;
            enemy_name = "ﾁｮｺﾗｰﾀ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 117;
            enemy_name = "ﾁｮｺﾗｰﾀの上半身";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 43;
            enemy_name = "ｾｯｺ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 85;
            enemy_name = "ﾘｿﾞｯﾄ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 32;
            enemy_name = "吉良吉影";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 44;
            enemy_name = "ﾚｯﾄﾞﾎｯﾄﾁﾘﾍﾟｯﾊﾟｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 72;
            enemy_name = "ｹﾝｿﾞｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 66;
            enemy_name = "ﾀﾙｶｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 113;
            enemy_name = "DIO";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 15;
            enemy_name = "ﾍﾟｯﾄｼｮｯﾌﾟ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 123;
            enemy_name = "ﾌﾞﾁｬﾗﾃｨ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 80;
            enemy_name = "ﾗﾝｸﾞ･ﾗﾝｸﾞﾗｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 65;
            enemy_name = "虹村形兆";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 40;
            enemy_name = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 41;
            enemy_name = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ戦車";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 42;
            enemy_name = "ｱﾊﾟｯﾁ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 54;
            enemy_name = "ｸﾞﾘｰﾝﾍﾞﾚｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 61;
            enemy_name = "ﾖｰﾖｰﾏｯ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 21;
            enemy_name = "ｽﾄﾚｲ･ｷｬｯﾄ";
        }
        if (var_3489 == 2) {
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 88;
                enemy_name = "ﾄﾞﾉｳﾞｧﾝ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 138;
                enemy_name = "ﾃﾞｨｵ･ﾌﾞﾗﾝﾄﾞｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 140;
                enemy_name = "ｼﾞｮﾅｻﾝ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 73;
                enemy_name = "ﾀﾞｲｱｰさん";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 30;
                enemy_name = "禁煙中ﾎﾙ･ﾎｰｽ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 122;
                enemy_name = "ﾎﾟﾙﾅﾚﾌ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 121;
                enemy_name = "花京院";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 152;
                enemy_name = "ﾄﾘｯｼｭ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 160;
                enemy_name = "ｳｴｽﾄｳｯﾄﾞ看守";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 86;
                enemy_name = "ｻﾝﾀﾅ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 155;
                enemy_name = "ﾏﾗｲｱ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 156;
                enemy_name = "ｳｪｻﾞｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 157;
                enemy_name = "ｱﾅｽｲ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 144;
                enemy_name = "川尻浩作";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 128;
                enemy_name = "4部承太郎";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 158;
                enemy_name = "ﾌﾟｯﾂﾝ由花子";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 150;
                enemy_name = "康一act2!!";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 68;
                enemy_name = "ﾌﾞﾁ切れた仗助";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 67;
                enemy_name = "ﾌﾞﾁ切れた億泰";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 172;
                enemy_name = "虫喰いでない";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 151;
                enemy_name = "虫喰い";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 87;
                enemy_name = "ｴｼﾃﾞｨｼ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 164;
                enemy_name = "ｴｼﾃﾞｨｼの脳";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 109;
                enemy_name = "ワムウ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 110;
                enemy_name = "カーズ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 139;
                enemy_name = "ﾘｻﾘｻ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 124;
                enemy_name = "ﾐｽﾀ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 127;
                enemy_name = "C-MOON";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 126;
                enemy_name = "退院した花京院";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 129;
                enemy_name = "ｱﾇﾋﾞｽﾎﾟﾙﾅﾚﾌ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 133;
                enemy_name = "ｳﾞｧﾆﾗｱｲｽ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 64;
                enemy_name = "ｷﾞｱｯﾁｮ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 137;
                enemy_name = "成長した吉良";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 153;
                enemy_name = "ﾏｯｸｲｨｰﾝ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 118;
                enemy_name = "ｸﾘｰﾑ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 114;
                enemy_name = "最高にﾊｲなDIO";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 111;
                enemy_name = "究極カーズ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 120;
                enemy_name = "承太郎";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 60;
                enemy_name = "ｻﾞ･ﾆｭｰ神父";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 98;
                enemy_name = "ｴﾝﾎﾟﾘｵ(ｳｪｻﾞｰ)";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 19;
                enemy_name = "ｱﾗﾋﾞｱﾌｧｯﾂ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                enemy_list = 90;
                enemy_name = "岩";
            }
        }
        var_3509++;
        if (var_883 == var_3509) {
            enemy_list = 37;
            enemy_name = "猫";
        }
        return;
    });
}
function func894(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(894);
        var_3511 = 6251;
        var_3512 = ginfo(4);
        if (var_3512 >= 330) {
            var_3513 = ginfo(4) - 320 - 8;
            var_3514 = ginfo(5);
        }
        if (var_3512 < 330) {
            var_3513 = ginfo(4) + 320 + 15;
            if (var_10 == 1) {
                var_3513 = var_3513 + 200;
            }
            var_3514 = ginfo(5);
        }
        var_3515 = sdim(length1 = 256, length2 = 4, length3 = null);
        var_3516 = dim(30);

        var_1068 = sdim(300, 30);
        var_3517 = sdim(512 + 1);

        var_1058 = dim(30, 30);

        var_3518 = dim(30, 30);
        var_3519 = dim(30);
        var_3520 = sdim(40);
        var_3521 = sdim(length1 = 300, length2 = 40, length3 = null);
        var_1069 = dim(length1 = 10, length2 = 40, length3 = null, length4 = null);
        var_1070 = sdim(length1 = 100, length2 = 10, length3 = null);
        var_1071 = sdim(length1 = 100, length2 = 10, length3 = null);
        var_3522 = "";
        var_3079 = 0;
        var_534 = 0;
        var_624 = 0;
        var_3523 = 0;
        screen_(33, 320, 460, 4, var_3513, var_3514);
        width(320, 200);
    
        SetWindowLongA(hwnd, -8, var_15);
        var_3524 = (1 && 2) * (-2) - 16;
        gsel(window_id = ginfo(3), window_mode = -1);

        gsel(ginfo(3), 1);
        title("ログイン");
        cls(4);
        gmode(2);
        pos(35, 35);
        gcopy(17, 0, 560, 280, 120);
        color(0, 0, 0);
        gmode(mode = 4, data2 = null, data3 = null, alpha = 80);
        pos(0, 0);
        gcopy(12, 0, 0, 320, 200);
        font("MS ゴシック", 12);
        color(255, 255, 255);
        pos(10, 10);
        mes("ニックネーム");
        pos(10, 30);
        input(var_40, 110, null, 10);
        pos(10, 60);
        mes("接続先アドレス");
        pos(10, 80);
        input(var_39, 110, null, 20);
        pos(10, 110);
        mes("使用ポート");
        pos(10, 130);
        input(var_3511, 110, null, 5);
        pos(10, 160);
        objsize(data0 = 80, data1 = 24);
        button("接続", func895);
        stop();
    });
}
function func895(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(895);
        clrobj();
        color(0, 0, 0);
        boxf();
        gmode(2);
        pos(35, 35);
        gcopy(17, 0, 560, 280, 120);
        color(0, 0, 0);
        gmode(4, null, null, 80);
        pos(0, 0);
        gcopy(12, 0, 0, 320, 200);
        color(255, 255, 255);
        pos(10, 20);
        mes("接続中．．．");
        pos(10, 40);
        button("キャンセル", func896);
        tcpopen(var_1050, var_39, var_3511);
        if (stat) {
            gsel(window_id = 33, window_mode = -1);
    
            gsel(0, 1);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "接続に失敗した。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        for (let cnt1 = 0; true; ++cnt1) {
            tcpiscon(var_1050);
            if (stat) {
                break;
            }
            yield wait(1);
        }
        if (stat != 1) {
            gsel(window_id = 33, window_mode = -1);
    
            gsel(0, 1);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "接続に失敗した。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        clrobj();
        color(0, 0, 0);
        boxf();
        title("相手の情報");
        var_3525 = "相手の情報";
        width(320, 500);
        var_3513 = ginfo(4);
        var_3514 = ginfo(5) + 200;
        screen_(30, 320, 320, 4, var_3513, var_3514);
    
        SetWindowLongA(hwnd, -8, var_15);
        var_3524 = (1 && 2) * (-2) - 16;
        gsel(window_id = ginfo(3), window_mode = -1);

        gsel(ginfo(3), 1);
        title("チャットウィンドウ");
        cls(4);
        color(0, 0, 0);
        boxf();
        var_3526 = sdim(10000);
        var_3526 = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
        pos(0, 294);
        input(var_3517, 320, 24, 50);
        var_3527 = stat;
        pos(0, 0);
        mesbox(var_3526, 320, 290, 0);
        var_3528 = stat;
        var_3529 = objinfo(var_3528, 2);
        objsel(var_3527);
        yield func898();
        if (var_3530 == 1) {
            gsel(window_id = 33, window_mode = -1);
            gsel(window_id = 30, window_mode = -1);
    
            gsel(0, 1);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここは満員だ・・・";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        if (var_3531 == 1) {
            var_407 = 2;
            var_536 = 1;
    
            var_3532 = sdim(300, 30);
    
            var_3533 = sdim(300, 30);
    
            var_3534 = sdim(300, 30);
            onkey(func901);
    
            gsel(33, 1);
            title("みんなの情報");
    
            gsel(0, 1);
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            yield func929();
            var_3517 = "＃ログイン＃";
            yield func900();
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_407 = 1;
        onkey(func901);

        gsel(33, 1);

        gsel(0, 1);
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        yield func907();
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func896(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(896);
        gsel(window_id = 33, window_mode = -1);
        gsel(window_id = 0, window_mode = 1);
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func897(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(897);

        if (wparam == 8) {
            ShowWindow(var_15, 7);
            return (0);
        }
        else {
            return;
        }
    });
}
function func898(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(898);
        if (var_3535 == 0) {
            var_3536 = "初水";
        }
        if (var_3535 == 1) {
            var_3536 = "初赤";
        }
        if (var_3535 == 2) {
            var_3536 = "初青";
        }
        if (var_3535 == 3) {
            var_3536 = "初黄";
        }
        tcpput("" + var_3536 + "" + var_40, var_1050);
        tcpput("\n", var_1050);
        var_3530 = 0;
        var_3531 = 0;
        for (let cnt1 = 0; true; ++cnt1) {
            var_3537 = sdim(1024);
            tcpgetl(var_3537, 1024, var_1050);
            if (stat != 0 && var_3537 == "o2") {
                var_3531 = 1;
                break;
            }
            if (stat != 0 && var_3537 == "ok") {
                var_3531 = 0;
                break;
            }
            if (stat != 0 && var_3537 == "man") {
                var_3530 = 1;
                break;
            }
            yield wait(1);
        }
        return;
    });
}
function func899(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(899);
        netfail(var_1050);
        if (stat) {
            var_407 = 0;
            netclose(var_1050);
            gsel(window_id = 33, window_mode = -1);
            gsel(window_id = 30, window_mode = -1);
    
            gsel(0, 1);
            onkey(0);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "接続が切断された。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        tcpcount(var_3538, var_1050);
        if (var_3538 != 0) {
            var_3537 = sdim(1024);
            var_3539 = sdim(1024);
            tcpgetl(var_3537, 1024, var_1050);
            var_3539 = var_3537;
            var_3540 = 0;
            var_3541 = 0;
            if (stat != 0) {
                var_3542 = strmid(var_3537, 0, 4);
                var_3543 = strmid(var_3537, 4, 250);
                if (var_3542 == "倒敵") {
                    yield func916();
                    return;
                }
                if (var_3542 == "女帝") {
                    yield func918();
                    return;
                }
                if (var_3542 == "喋背") {
                    yield func922();
                    return;
                }
                if (var_3542 == "送具") {
                    yield func913();
                    return;
                }
                if (var_3542 == "捨送") {
                    yield func908();
                    var_3541 = 1;
                }
                var_3544 = 0;
                if (var_3542 == "字水") {
                    var_3539 = "" + var_3543;
                    var_3544 = 0;
                    var_3540 = 1;
                }
                if (var_3542 == "字赤") {
                    var_3539 = "" + var_3543;
                    var_3544 = 1;
                    var_3540 = 1;
                }
                if (var_3542 == "字青") {
                    var_3539 = "" + var_3543;
                    var_3544 = 2;
                    var_3540 = 1;
                }
                if (var_3542 == "字黄") {
                    var_3539 = "" + var_3543;
                    var_3544 = 3;
                    var_3540 = 1;
                }
                if (var_3542 == "行白") {
                    var_3539 = "" + var_3543;
                    var_3544 = 0;
                }
                if (var_3542 == "行赤") {
                    var_3539 = "" + var_3543;
                    var_3544 = 1;
                }
                if (var_3542 == "行青") {
                    var_3539 = "" + var_3543;
                    var_3544 = 2;
                }
                if (var_3542 == "行黄") {
                    var_3539 = "" + var_3543;
                    var_3544 = 3;
                }
                if (var_3542 == "行水") {
                    var_3539 = "" + var_3543;
                    var_3544 = 4;
                }
                if (var_3542 == "行緑") {
                    var_3539 = "" + var_3543;
                    var_3544 = 5;
                }
                if (var_3542 == "行橙") {
                    var_3539 = "" + var_3543;
                    var_3544 = 6;
                }
                if (var_3542 == "行紫") {
                    var_3539 = "" + var_3543;
                    var_3544 = 7;
                }
                if (var_3542 == "行茶") {
                    var_3539 = "" + var_3543;
                    var_3544 = 8;
                }
                if (instr(var_3537, 0, "さんが接続しました") != (-1)) {
                    var_3544 = 6;
                    yield func907();
                }
                if (instr(var_3537, 0, "さんは切断しました") != (-1)) {
                    gsel(33);
                    var_3525 = "相手の情報";
                    title(var_3525);
                    gsel(0);
                }
                if (var_3540 == 1) {
                    notesel(var_3526);
                    var_447 = noteinfo(0);
                    if (var_447 >= 200) {
                        notedel(0);
                    }
                    var_3526 = var_3526 + "\n" + var_3539;
                    sendmsg(var_3529, 12, 0, var_3526);
                    var_447 = noteinfo(0) - 1;
                    var_449 = noteinfo(1);
                    sendmsg(var_3529, 177, var_449, var_449);
                    sendmsg(var_3529, 183, 0, 0);
                    return;
                }
                if (var_3540 == 0) {
                    var_3545 = 33;
                    var_3546 = 220;
                    var_3547 = 420;
                    var_3548 = 440;
                    var_3549 = 125;
                    gsel(33);
                }
                redraw(0);
                if (var_3541 == 0) {
                    gmode(0);
                    pos(0, var_3549);
                    gcopy(var_3545, 0, var_3549 + 20, var_3546, var_3548);
                    pos(10, var_3547);
                    color(255, 255, 255);
                    if (var_3544 == 1) {
                        color(255, 0, 0);
                    }
                    if (var_3544 == 2) {
                        color(0, 0, 255);
                    }
                    if (var_3544 == 3) {
                        color(255, 255, 0);
                    }
                    if (var_3544 == 4) {
                        color(0, 255, 255);
                    }
                    if (var_3544 == 5) {
                        color(0, 255, 0);
                    }
                    if (var_3544 == 6) {
                        color(255, 180, 90);
                    }
                    if (var_3544 == 7) {
                        color(240, 0, 240);
                    }
                    if (var_3544 == 8) {
                        color(225, 195, 145);
                    }
                    if (var_3544 == 9) {
                        color(255, 255, 255);
                    }
                    font("MS ゴシック", 12);
                    mes(var_3539);
                }
                if (var_3540 == 0) {
                    var_3233 = 5;
                    var_3550 = 3;
                    var_3231 = 255;
                    var_3232 = 150;
                    var_1631 = 245;
                    var_1632 = 140;
                    var_1633 = 65;
                    var_1634 = 65;
                    var_1635 = 0;
                    var_1636 = 0;
                    color(0, 0, 0);
                    boxf(left = var_1631 - 3, top1 = var_1632 - 3, right = var_1631 - 3 + var_1633 + 5, bottom = var_1632 - 3 + var_1634 + 7);
                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(var_1631 - 3, var_1632 - 3);
                    gcopy(12, 0, 0, var_1633 + 7, var_1634 + 5);
                    gmode(2);
                    color(255, 255, 255);
                    line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                    line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                    line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                    line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                    pset(var_1631 - var_1635, var_1632 - var_1636);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                    pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                    color(255, 255, 255);
                    line(var_3231 - 1, var_3232 - 1, var_3231 - 1, 9 * var_3233 + var_3232 + 1);
                    line(var_3231 - 2, var_3232 - 1, 9 * var_3233 + var_3231 + 1, var_3232 - 1);
                    line(9 * var_3233 + var_3231 + 1, var_3232 - 1, 9 * var_3233 + var_3231 + 1, 9 * var_3233 + var_3232 + 1);
                    line(var_3231 - 1, 9 * var_3233 + var_3232 + 1, 9 * var_3233 + var_3231 + 1, 9 * var_3233 + var_3232 + 1);
                    var_3551 = 0;
                    var_449 = 0;
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        var_447 = 0;
                        for (let cnt5 = 0; cnt5 < 9; ++cnt5) {
                            if (peek(var_1068[25], var_3551) == 48) {
                                color(0, 0, 0);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3233, var_447 * var_3233 + var_3232 + var_3233);
                            }
                            if (peek(var_1068[25], var_3551) == 49) {
                                color(0, 0, 255);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3233, var_447 * var_3233 + var_3232 + var_3233);
                            }
                            if (peek(var_1068[25], var_3551) == 55) {
                                color(0, 0, 150);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3233, var_447 * var_3233 + var_3232 + var_3233);
                            }
                            if (peek(var_1068[25], var_3551) == 50) {
                                color(255, 0, 255);
                                line(var_449 * var_3233 + var_3231 - 1, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231 + 4, var_447 * var_3233 + var_3232 + 4);
                                line(var_449 * var_3233 + var_3231 + 5, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232 + 4);
                            }
                            if (peek(var_1068[25], var_3551) == 51) {
                                color(0, 255, 255);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                            }
                            if (peek(var_1068[25], var_3551) == 52) {
                                color(255, 0, 0);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                            }
                            if (peek(var_1068[25], var_3551) == 53) {
                                color(0, 255, 255);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                                color(0, 0, 255);
                                pset(var_447 * var_3233 + var_3231 + 1, var_449 * var_3233 + var_3232 + 1);
                            }
                            if (peek(var_1068[25], var_3551) == 54) {
                                color(255, 255, 255);
                                pset(var_449 * var_3233 + var_3231 + 1, var_447 * var_3233 + var_3232);
                                pset(var_449 * var_3233 + var_3231 + 2, var_447 * var_3233 + var_3232);
                                pset(var_449 * var_3233 + var_3231 + 3, var_447 * var_3233 + var_3232);
                                pset(var_449 * var_3233 + var_3231 + 1, var_447 * var_3233 + var_3232 + 4);
                                pset(var_449 * var_3233 + var_3231 + 2, var_447 * var_3233 + var_3232 + 4);
                                pset(var_449 * var_3233 + var_3231 + 3, var_447 * var_3233 + var_3232 + 4);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232 + 1, var_449 * var_3233 + var_3231 + 4, var_447 * var_3233 + var_3232 + 3);
                            }
                            if (peek(var_1068[25], var_3551) == 56) {
                                color(255, 255, 0);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                            }
                            if (peek(var_1068[25], var_3551) == 57) {
                                color(0, 255, 255);
                                line(var_449 * var_3233 + var_3231 - 1, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231 + 4, var_447 * var_3233 + var_3232 + 4);
                                line(var_449 * var_3233 + var_3231 + 5, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232 + 4);
                            }
                            var_3551++;
                            var_447++;
                        }
                        var_449++;
                    }
                    if (dangeon_number == int(var_1068[12]) && dangeon_number != 0) {
                        var_536 = 1;
                    }
                    else {
                        var_536 = 0;
                    }
                    var_1631 = 10;
                    var_1632 = 10;
                    var_1633 = 300;
                    var_1634 = 110;
                    var_1635 = 0;
                    var_1636 = 0;
                    color(1, 1, 1);
        
                    boxf(0, 0, 320, 120);
                    color(0, 0, 0);

                    gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
                    pos(var_1631 - 3, var_1632 - 3);
                    gcopy(12, 0, 0, var_1633 + 7, 110 + 5);
                    gmode(2);
                    color(255, 255, 255);
                    line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                    line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                    line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                    line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                    pset(var_1631 - var_1635, var_1632 - var_1636);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                    pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                    pos(var_1631 + 7, var_1632 + 7);
                    gcopy(3, 40, 0, 40, 40);
                    var_2607 = var_1631 + 7 + 30;
                    var_2608 = var_1631 + 7 + 24;
                    if (int(var_1068[3]) >= 10) {
                        var_2607 = var_2607 - 5;
                    }
            
                    font("MS ゴシック", 16, 1);
                    color(1, 1, 1);
                    pos(var_2607 - 1, var_2608);
                    mes(var_1068[3]);
                    pos(var_2607 + 1, var_2608);
                    mes(var_1068[3]);
                    pos(var_2607, var_2608 - 1);
                    mes(var_1068[3]);
                    pos(var_2607, var_2608 + 1);
                    mes(var_1068[3]);
                    color(255, 255, 255);
                    pos(var_2607, var_2608);
                    mes(var_1068[3]);
                    font("MS ゴシック", 12);
                    pos(var_1631 + 55, var_1632 + 7);
                    color(255, 255, 255);
                    mes("");
                    if (int(var_1068[12]) == 0) {
                        mes("地上");
                    }
                    if (int(var_1068[12]) == 1) {
                        mes("ホテル外 " + var_1068[10] + "階");
                    }
                    if (int(var_1068[12]) == 2) {
                        mes("大迷宮 " + var_1068[10] + "階");
                    }
                    if (int(var_1068[12]) == 3) {
                        mes("試練　" + var_1068[10] + "階");
                    }
                    if (int(var_1068[12]) == 4) {
                        mes("一巡後 " + var_1068[10] + "階");
                    }
                    if (int(var_1068[12]) >= 5) {
                        mes("");
                    }
                    var_3552 = 0;
                    var_3553 = int(var_1068[10]);
                    var_3552 = current_floor - var_3553;
                    if (dangeon_number != int(var_1068[12])) {
                        color(150, 150, 150);
                        mes("（別の場所）");
                    }
                    if (dangeon_number == int(var_1068[12])) {
                        if (var_3552 < (-2)) {
                            color(255, 0, 0);
                            var_3554 = -var_3552;
                            mes("（" + var_3554 + "こ次の階）");
                        }
                        if (var_3552 == (-2)) {
                            color(255, 255, 0);
                            mes("（2こ次の階）");
                        }
                        if (var_3552 == (-1)) {
                            color(0, 255, 255);
                            mes("（次の階）");
                        }
                        if (var_3552 == 0) {
                            color(0, 255, 255);
                            mes("（同じ階）");
                        }
                        if (var_3552 == 1) {
                            color(0, 255, 255);
                            mes("（前の階）");
                        }
                        if (var_3552 == 2) {
                            color(255, 255, 0);
                            mes("（2こ前の階）");
                        }
                        if (var_3552 > 2) {
                            color(255, 0, 0);
                            mes("（" + var_3552 + "こ前の階）");
                        }
                    }
                    pos(var_1631 + 5, var_1632 + 58);
                    color(255, 255, 255);
                    if (int(var_1068[5]) > 0) {
                        var_3555 = Math.floor(int(var_1068[4]) / int(var_1068[5]));
                    }
                    if (var_3555 < 2) {
                        color(255, 255, 255);
                    }
                    if (var_3555 >= 2 || int(var_1068[5]) < 1) {
                        color(220, 0, 0);
                    }
                    if (int(var_1068[5]) == 0) {
                        color(255, 255, 255);
                    }
                    mes("ＨＰ　　" + var_1068[5] + "/" + var_1068[4]);
                    color(255, 255, 255);
                    mes("精神力　" + var_1068[7] + "/" + var_1068[6]);
                    mes("満腹度　" + var_1068[9] + "/" + var_1068[8]);
                    mes("お金　　" + var_1068[11] + " G");
                    var_1631 = var_1631 + 4;
                    var_1632 = var_1632 + 5;
                    var_1633 = 120;
                    var_1634 = 50;
                    var_1635 = 0;
                    var_1636 = 0;
                    color(255, 255, 255);
                    line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                    line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                    line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                    line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                    pset(var_1631 - var_1635, var_1632 - var_1636);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                    pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                    var_1631 = 145;
                    var_1632 = 15;
                    var_1633 = 50;
                    var_1634 = 50;
                    var_1635 = 0;
                    var_1636 = 0;
                    var_3556 = var_1631;
                    for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                        color(255, 255, 255);
                        line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                        line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                        line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                        line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                        pset(var_1631 - var_1635, var_1632 - var_1636);
                        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                        pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                        var_1631 = var_1631 + 55;
                    }
                    var_3557 = 1;
                    pos(var_3556 + 5, var_1632 + 5);
                    item_icon_id = int(var_1068[13]);
                    yield func070(); // アイテムの表示用アイコン座標指定
                    if (item_icon_id != 0) {
                        gcopy(buffer_id, buffer_x_axis, buffer_y_axis, 40, 40);
                    }
                    color(1, 1, 1);
                    pos(var_3556 + 5 + 31, var_1632 + 5 + 30);
                    mes("" + var_1068[15]);
                    pos(var_3556 + 5 + 33, var_1632 + 5 + 30);
                    mes("" + var_1068[15]);
                    pos(var_3556 + 5 + 32, var_1632 + 5 + 29);
                    mes("" + var_1068[15]);
                    pos(var_3556 + 5 + 32, var_1632 + 5 + 31);
                    mes("" + var_1068[15]);
                    color(0, 255, 0);
                    pos(var_3556 + 5 + 32, var_1632 + 5 + 30);
                    mes("" + var_1068[15]);
                    pos(var_3556 + 60, var_1632 + 5);
                    item_icon_id = int(var_1068[16]);
                    yield func070(); // アイテムの表示用アイコン座標指定
                    if (item_icon_id != 0) {
                        gcopy(buffer_id, buffer_x_axis, buffer_y_axis, 40, 40);
                    }
                    color(1, 1, 1);
                    pos(var_3556 + 60 + 31, var_1632 + 5 + 30);
                    mes("" + var_1068[18]);
                    pos(var_3556 + 60 + 33, var_1632 + 5 + 30);
                    mes("" + var_1068[18]);
                    pos(var_3556 + 60 + 32, var_1632 + 5 + 29);
                    mes("" + var_1068[18]);
                    pos(var_3556 + 60 + 32, var_1632 + 5 + 31);
                    mes("" + var_1068[18]);
                    color(0, 255, 0);
                    pos(var_3556 + 60 + 32, var_1632 + 5 + 30);
                    mes("" + var_1068[18]);
                    pos(var_3556 + 115, var_1632 + 5);
                    item_icon_id = int(var_1068[19]);
                    yield func070(); // アイテムの表示用アイコン座標指定
                    if (item_icon_id != 0) {
                        gcopy(buffer_id, buffer_x_axis, buffer_y_axis, 40, 40);
                    }
                    var_3557 = 0;
                    pos(var_3556 - 10, var_1632 + 5 + 50);
                    color(255, 255, 0);
                    var_3558 = int(var_1068[13]);
                    yield func924();
                    if (int(var_1068[13]) == 0) {
                        mes("[攻] なし");
                    }
                    if (int(var_1068[13]) != 0) {
                        if (int(var_1068[14]) == 0) {
                            mes("[攻] " + var_3559);
                        }
                        if (int(var_1068[14]) != 0) {
                            mes("[攻] " + var_3559 + "+" + var_1068[14]);
                        }
                    }
                    color(255, 180, 90);
                    var_3558 = int(var_1068[16]);
                    yield func924();
                    if (int(var_1068[16]) == 0) {
                        mes("[防] なし");
                    }
                    if (int(var_1068[16]) != 0) {
                        if (int(var_1068[17]) == 0) {
                            mes("[防] " + var_3559);
                        }
                        if (int(var_1068[17]) != 0) {
                            mes("[防] " + var_3559 + "+" + var_1068[17]);
                        }
                    }
                    color(240, 0, 240);
                    var_3558 = int(var_1068[19]);
                    yield func924();
                    if (int(var_1068[19]) == 0) {
                        mes("[能] なし");
                    }
                    if (int(var_1068[19]) != 0) {
                        if (int(var_1068[20]) == 0) {
                            mes("[能] " + var_3559);
                        }
                        if (int(var_1068[20]) != 0) {
                            mes("[能] " + var_3559 + "+" + var_1068[20]);
                        }
                    }
                    color(225, 195, 145);
                    var_3558 = int(var_1068[2]);
                    yield func924();
                    if (int(var_1068[2]) == 0) {
                        mes("[射] なし");
                    }
                    if (int(var_1068[2]) != 0) {
                        if (int(var_1068[21]) == 0) {
                            mes("[射] " + var_3559);
                        }
                        if (int(var_1068[21]) != 0) {
                            mes("[射] " + var_3559 + "(" + var_1068[21] + ")");
                        }
                    }
                }
                redraw(1);
            }
        }
        return;
    });
}