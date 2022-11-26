function func600(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(600);
        var_1292 = var_83[var_673].Var5;
        var_1293 = (var_83[var_673].Var1 - var_66 + 4) * 40;
        var_1294 = (var_83[var_673].Var2 - var_67 + 4) * 40;
        yield func601();
        var_742 = 1;
        var_83[var_673].Var7 = 1;
        var_83[var_673].Var18 = 0;
        var_772 = 1;
        var_1296 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            if (var_1296 == 6) {
                var_747 = 1;
                var_389 = 1;

                DSPLAY(audio_id = 105);
            }
            yield func337(); // メッセージ関係呼び出し
            var_1296++;
        }
        var_772 = 0;
        var_1296 = 0;
        var_742 = 0;
        var_83[var_673].Var7 = 0;
        var_83[var_673].Var18 = 0;
        if (var_128 >= 1) {
            yield func023();
        }
        var_211 = var_211 - var_209;
        var_208 = var_208 + var_209;
        if (var_211 <= 0) {
            var_211 = 0;
            var_356 = 281;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「ワハハハハハ！」";
        comments_row2 = "" + var_209 + "のダメージをうけた。";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_389 = 0;
        if (equip_disc[115] == 1) {
            yield func695();
            if (var_2855 != 0) {
                var_2855 = 0;
                return;
            }
        }
        var_240 = 0;
        return;
    });
}
function func601(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(601);
        enemy_list = var_83[var_673].Var0;
        yield func626();
        if (var_83[var_673].Var39 >= 2) {
            enemy_power = Math.floor(enemy_power * (var_83[var_673].Var39 * 2 + 10) / 10);
        }
        if (var_83[var_673].Var25 >= 1 && var_83[var_673].Var25 <= 50) {
            enemy_power = enemy_power + var_83[var_673].Var25;
        }
        if (var_83[var_673].Var25 >= 51 && var_83[var_673].Var25 < 99) {
            enemy_power = enemy_power - (var_83[var_673].Var25 - 50);
            if (enemy_power <= 1) {
                enemy_power = 1;
            }
        }
        var_949 = Math.floor(enemy_power * (enemy_power + enemy_power - 8) / 16) + enemy_power;
        for (let cnt1 = 0; cnt1 < var_581; ++cnt1) {
            var_949 = Math.floor(var_949 * 15 / 16);
        }
        var_2817 = rnd(33);
        var_2817 = var_2817 + 111;
        var_209 = Math.floor(var_949 * var_2817 / 128);
        if (var_128 >= 1) {
            var_209 = Math.floor(var_209 * 3 / 2);
        }
        if (var_113 == 1) {
            var_209 = Math.floor(var_209 * 2 / 3);
        }
        if (var_209 <= 1) {
            var_209 = 1;
        }
        return;
    });
}
function func602(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(602);
        var_2856 = var_83[var_673].Var0;
        var_2749 = var_83[var_673].Var18;
        var_83[var_673].Var18 = 0;
        var_2747 = var_83[var_673].Var1;
        var_2748 = var_83[var_673].Var2;
        var_1993 = var_83[var_673].Var1 - 1;
        if (var_1993 < 0) {
            var_1993 = 0;
        }
        var_1994 = var_83[var_673].Var1 + 1;
        if (var_1994 > var_33) {
            var_1994 = var_33;
        }
        var_1995 = var_83[var_673].Var2 + 1;
        if (var_1995 > var_34) {
            var_1995 = var_34;
        }
        var_1996 = var_83[var_673].Var2 - 1;
        if (var_1996 < 0) {
            var_1996 = 0;
        }
        var_2857 = 0;
        if (var_82[var_2747][var_1995] == var_2749) {
            var_2646 = var_2749;
            yield func578();
            if (var_2647 >= 1) {
                var_2857 = 1;
                var_83[var_673].Var5 = 2;
            }
        }
        if (var_82[var_2747][var_1996] == var_2749) {
            var_2646 = var_2749;
            yield func578();
            if (var_2647 >= 1) {
                var_2857 = 1;
                var_83[var_673].Var5 = 8;
            }
        }
        if (var_82[var_1993][var_2748] == var_2749) {
            var_2646 = var_2749;
            yield func578();
            if (var_2647 >= 1) {
                var_2857 = 1;
                var_83[var_673].Var5 = 4;
            }
        }
        if (var_82[var_1994][var_2748] == var_2749) {
            var_2646 = var_2749;
            yield func578();
            if (var_2647 >= 1) {
                var_2857 = 1;
                var_83[var_673].Var5 = 6;
            }
        }
        if (var_82[var_1993][var_1995] == var_2749) {
            var_2646 = var_2749;
            yield func578();
            if (var_2647 >= 1) {
                var_2857 = 1;
                var_83[var_673].Var5 = 1;
            }
        }
        if (var_82[var_1993][var_1996] == var_2749) {
            var_2646 = var_2749;
            yield func578();
            if (var_2647 >= 1) {
                var_2857 = 1;
                var_83[var_673].Var5 = 7;
            }
        }
        if (var_82[var_1994][var_1995] == var_2749) {
            var_2646 = var_2749;
            yield func578();
            if (var_2647 >= 1) {
                var_2857 = 1;
                var_83[var_673].Var5 = 3;
            }
        }
        if (var_82[var_1994][var_1996] == var_2749) {
            var_2646 = var_2749;
            yield func578();
            if (var_2647 >= 1) {
                var_2857 = 1;
                var_83[var_673].Var5 = 9;
            }
        }
        if (var_2857 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_2856 == 134) {
                comments_row1 = "ｼﾞｮﾘｰﾝは仲間を心配している。";
            }
            if (var_2856 == 35) {
                comments_row1 = "仗助は仲間を心配している。";
            }
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_2856 == 134) {
            comments_row1 = "「ストーンフリー」！！";
        }
        if (var_2856 == 35) {
            comments_row1 = "「クレイジー・ダイヤモンド」！！";
        }
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        if (var_2856 == 134) {
            var_1558 = (var_83[var_2749].Var1 - var_66 + 4) * 40;
            var_1559 = (var_83[var_2749].Var2 - var_67 + 4) * 40;
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

            DSPLAY(audio_id = 136);
            var_271 = 1;
            var_1557 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1557++;
            }
            var_271 = 0;
            var_1557 = 0;
            var_411 = 0;
            var_83[var_673].Var21 = 0;
        }
        if (var_2856 == 35) {
            var_742 = 1;
            var_83[var_673].Var7 = 1;
            var_743 = 1;
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }

            DSPLAY(audio_id = 143);
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                var_83[var_2749].Var8 = 1;
                yield func337(); // メッセージ関係呼び出し
                var_83[var_2749].Var8 = 0;
                yield func337(); // メッセージ関係呼び出し
            }
            var_742 = 0;
            var_83[var_673].Var7 = 0;
            var_743 = 0;
        }
        enemy_list = var_83[var_2749].Var0;
        yield func626();
        var_83[var_2749].Var3 = var_83[var_2749].Var3 + 50;
        if (var_83[var_2749].Var3 > var_2792) {
            var_83[var_2749].Var3 = var_2792;
        }
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "" + enemy_name + "の";
        comments_row2a = "傷がふさがった。";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func603(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(603);
        var_2749 = var_83[var_673].Var18;
        var_83[var_673].Var18 = 0;
        var_2858 = var_83[var_673].Var0;
        var_2747 = var_83[var_673].Var1;
        var_2748 = var_83[var_673].Var2;
        var_1993 = var_83[var_673].Var1 - 1;
        if (var_1993 < 0) {
            var_1993 = 0;
        }
        var_1994 = var_83[var_673].Var1 + 1;
        if (var_1994 > var_33) {
            var_1994 = var_33;
        }
        var_1995 = var_83[var_673].Var2 + 1;
        if (var_1995 > var_34) {
            var_1995 = var_34;
        }
        var_1996 = var_83[var_673].Var2 - 1;
        if (var_1996 < 0) {
            var_1996 = 0;
        }
        var_2857 = 0;
        if (var_82[var_2747][var_1995] == var_2749) {
            var_2857 = 1;
            var_83[var_673].Var5 = 2;
        }
        if (var_82[var_2747][var_1996] == var_2749) {
            var_2857 = 1;
            var_83[var_673].Var5 = 8;
        }
        if (var_82[var_1993][var_2748] == var_2749) {
            var_2857 = 1;
            var_83[var_673].Var5 = 4;
        }
        if (var_82[var_1994][var_2748] == var_2749) {
            var_2857 = 1;
            var_83[var_673].Var5 = 6;
        }
        if (var_82[var_1993][var_1995] == var_2749) {
            var_2857 = 1;
            var_83[var_673].Var5 = 1;
        }
        if (var_82[var_1993][var_1996] == var_2749) {
            var_2857 = 1;
            var_83[var_673].Var5 = 7;
        }
        if (var_82[var_1994][var_1995] == var_2749) {
            var_2857 = 1;
            var_83[var_673].Var5 = 3;
        }
        if (var_82[var_1994][var_1996] == var_2749) {
            var_2857 = 1;
            var_83[var_673].Var5 = 9;
        }
        var_2857 = 1;
        if (var_2857 == 0 || var_83[var_2749].Var0 == 0) {
            var_2740 = var_83[var_673].Var1;
            var_2741 = var_83[var_673].Var2;
            var_2742 = var_66 - 3;
            if (var_2742 < 0) {
                var_2742 = 0;
            }
            var_2743 = var_66 + 3;
            if (var_2743 > var_33) {
                var_2743 = var_33;
            }
            var_2744 = var_67 + 3;
            if (var_2744 > var_34) {
                var_2744 = var_34;
            }
            var_2745 = var_67 - 3;
            if (var_2745 < 0) {
                var_2745 = 0;
            }
            if (var_2740 >= var_2742 && var_2740 <= var_2743 && var_2741 >= var_2745 && var_2741 <= var_2744) {
                var_240 = 0;
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                if (var_2858 == 164) {
                    comments_row1 = "ｴｼﾃﾞｨｼの脳は";
                }
                if (var_2858 == 165) {
                    comments_row1 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙは";
                }
                comments_row2 = "恨みに震えている。";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func047();
                var_83[var_673].Var21 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    var_411 = 1;
                    yield func337(); // メッセージ関係呼び出し
                    var_411 = 2;
                    yield func337(); // メッセージ関係呼び出し
                }
                var_411 = 1;
                var_83[var_673].Var21 = 0;
            }
            return;
        }
        var_240 = 0;

        DSPLAY(audio_id = 197);
        var_742 = 1;
        var_83[var_673].Var7 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_742 = 0;
        var_83[var_673].Var7 = 0;
        var_2859 = var_83[var_673].Var1;
        var_2860 = var_83[var_673].Var2;
        var_82[var_2859][var_2860] = 0;
        var_83[var_673].Var0 = 0;
        var_83[var_673].Var1 = 0;
        var_83[var_673].Var2 = 0;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        var_83[var_2749].Var12 = 0;
        var_83[var_2749].Var39 = var_83[var_2749].Var39 + 1;
        if (var_83[var_2749].Var39 == 1) {
            var_83[var_2749].Var39 = 2;
        }
        if (var_2858 == 164) {
            var_83[var_2749].Var39 = var_83[var_2749].Var39 + 1;
        }
        enemy_list = var_83[var_2749].Var0;
        yield func626();
        var_83[var_2749].Var3 = Math.floor(enemy_hp * (var_83[var_2749].Var39 + 10) / 10);
        if (var_83[var_2749].Var3 >= 999) {
            var_83[var_2749].Var3 = 999;
        }
        var_2861 = enemy_name;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_2858 == 164) {
            comments_row1 = "ｴｼﾃﾞｨｼの脳は";
        }
        if (var_2858 == 165) {
            comments_row1 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙは";
        }
        comments_row2 = "" + var_2861 + "に取り憑いた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        yield func340(); // キー入力による選択処理

        DSPLAY(audio_id = 198);
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "" + var_2861 + "は";
        comments_row2a = "レベル " + var_83[var_2749].Var39 + " になった！";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func604(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(604);
        var_2862 = rnd(2);
        if (var_2862 == 0 && var_83[var_673].Var0 == 30 && var_83[var_673].Var29 == 0) {
            var_240 = 0;
            var_83[var_673].Var7 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾎﾙ･ﾎｰｽはﾄﾄ神のﾏﾝｶﾞを読んだ。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();

            DSPLAY(audio_id = 118);
            var_83[var_673].Var21 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                var_411 = 4;
                yield func337(); // メッセージ関係呼び出し
                var_411 = 5;
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
            }
            var_411 = 6;
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ﾎﾙ･ﾎｰｽ「新しいﾍﾟｰｼﾞが現れたぞ…」";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理

            DSPLAY(audio_id = 118);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "【ﾎﾙ･ﾎｰｽの次の攻撃は…】";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理

            DSPLAY(audio_id = 118);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            var_1073 = rnd(4);
            if (var_1073 <= 1) {
                comments_row1a = "【ウオオン！";
                comments_row2a = "　　いつもの２倍のダメージだッ！】";
                var_83[var_673].Var29 = 1;
            }
            if (var_1073 == 2) {
                comments_row1a = "【いつもの３倍ダメージだッ！";
                comments_row2a = "　　ﾎﾙ･ﾎｰｽは本当にラッキー！】";
                var_83[var_673].Var29 = 2;
            }
            if (var_1073 == 3) {
                comments_row1a = "【いつもの半分のダメージでした…";
                comments_row2a = "　でもくじけちゃダメだよ ﾎﾙ･ﾎｰｽ！】";
                var_83[var_673].Var29 = 3;
            }
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            if (var_1073 <= 1) {
                comments_row1a = "ﾎﾙ･ﾎｰｽ「こ…　こいつはすげえ！」";
                comments_row2a = "　　";
            }
            if (var_1073 == 2) {
                comments_row1a = "ﾎﾙ･ﾎｰｽ「おれたちは無敵だッ！」";
                comments_row2a = "";
            }
            if (var_1073 == 3) {
                comments_row1a = "ﾎﾙ･ﾎｰｽ「にゃんじゃああ～～～ッ";
                comments_row2a = "　　　これは！？」";
            }
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_673].Var21 = 0;
            var_411 = 0;
            return;
        }
        var_240 = 0;

        DSPLAY(audio_id = 141);
        var_83[var_673].Var21 = 1;
        var_411 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_411 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_411 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_411 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_411 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_411 = 3;
        yield func337(); // メッセージ関係呼び出し
        var_411 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_83[var_673].Var21 = 0;
        var_411 = 0;

        DSPLAY(audio_id = 116);
        var_742 = 1;
        var_83[var_673].Var7 = 1;
        var_271 = 1;
        var_1435 = 1;
        var_1430 = var_83[var_673].Var1;
        var_1431 = var_83[var_673].Var2;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1435 = var_1435 + 1;
        }
        var_742 = 0;
        var_271 = 0;
        var_1435 = 0;
        var_83[var_673].Var7 = 0;
        var_2862 = rnd(3);
        if (var_2862 == 0 && var_83[var_673].Var0 == 46 && var_337 < 50) {
            var_2863 = 0;
            var_2864 = var_67 - 1;
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                var_2865 = var_66 - 1;
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    if (var_71[var_2865][var_2864] != 0 && var_71[var_2865][var_2864] != 13 && var_77[var_2865][var_2864] == 0 && var_80[var_2865][var_2864] == 0 && var_73[var_2865][var_2864] == 0) {
                        var_768 = 1;
                        var_1728 = 1;
                        var_2424 = 1;
                        var_1550 = var_2865;
                        var_230 = var_2864;
                        var_2412 = 1;
                        yield func536();
                        var_768 = 0;
                        var_1728 = 0;
                        var_2424 = 0;
                        var_2412 = 0;
                        var_83[var_2611].Var22 = 1;
                        var_83[var_2611].Var9 = 0;
                        yield func337(); // メッセージ関係呼び出し
                        var_2863 = 1;
                    }
                    var_2865++;
                }
                var_2864++;
            }
            if (var_2863 == 1) {
                var_240 = 0;
        
                DSPLAY(audio_id = 205);
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "「J・ガイルの旦那！」";
                comments_row2 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func047();
                var_83[var_673].Var7 = 0;
                return;
            }
        }
        var_271 = 1;
        var_1434 = 1;
        var_1426 = rnd(3);
        if (var_1426 == 0) {
            var_1427 = 160;
            var_1428 = 0;
        }
        if (var_1426 == 1) {
            var_1427 = 0;
            var_1428 = 0;
        }
        if (var_1426 == 2) {
            var_1427 = 320;
            var_1428 = 0;
        }
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            if (var_1426 == 0) {
                var_1427 = var_1427;
                var_1428 = var_1428 + 40;
            }
            if (var_1426 == 1) {
                var_1427 = var_1427 + 40;
                var_1428 = var_1428 + 40;
            }
            if (var_1426 == 2) {
                var_1427 = var_1427 - 40;
                var_1428 = var_1428 + 40;
            }
        }
        var_271 = 0;
        var_1434 = 0;
        var_83[var_673].Var18 = 0;
        var_83[var_673].Var7 = 0;
        yield func584();
        if (var_2803 == 1) {
            return;
        }
        var_747 = 1;
        var_389 = 2;

        DSPLAY(audio_id = 104);
        var_2852 = 15;
        if (var_83[var_673].Var0 == 30) {
            var_2852 = 30;
        }
        if (var_83[var_673].Var0 == 30 && var_83[var_673].Var29 == 1) {
            var_2852 = 60;
            var_83[var_673].Var29 = 0;
        }
        if (var_83[var_673].Var0 == 30 && var_83[var_673].Var29 == 2) {
            var_2852 = 90;
            var_83[var_673].Var29 = 0;
        }
        if (var_83[var_673].Var0 == 30 && var_83[var_673].Var29 == 3) {
            var_2852 = 15;
            var_83[var_673].Var29 = 0;
        }
        if (var_83[var_673].Var39 >= 2) {
            var_2852 = (var_83[var_673].Var39 - 1) * 2 + var_2852;
        }
        if (var_128 >= 1) {
            var_2852 = Math.floor(var_2852 * 3 / 2);
        }
        if (equip_disc[205] == 1) {
            var_2852 = Math.floor(var_2852 * 2 / 3);
        }
        if (var_168 == 1) {
            var_2852 = Math.floor(var_2852 * 2 / 3);
        }
        var_209 = var_2852;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｴﾝﾍﾟﾗｰの弾丸を喰らった！";
        comments_row2 = "" + var_2852 + "のダメージをうけた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        if (var_128 >= 1) {
            yield func023();
        }
        for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_389 = 0;
        var_211 = var_211 - var_2852;
        var_208 = var_208 + var_2852;
        if (var_211 <= 0) {
            var_211 = 0;
            var_356 = 215;
            if (var_83[var_673].Var0 == 30) {
                var_356 = 263;
            }
        }
        var_240 = 0;
        return;
    });
}
function func605(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(605);
        var_240 = 0;
        var_742 = 1;
        var_83[var_673].Var7 = 1;
        var_743 = 1;

        DSPLAY(audio_id = 102);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_742 = 0;
        var_743 = 0;
        var_83[var_673].Var18 = 0;
        var_83[var_673].Var7 = 0;
        var_2866 = 0;
        var_2867 = rnd(8);
        if (var_105 == 1) {
            if (var_2867 == 2 || var_2867 == 3) {
                var_2867 = 0;
                var_2868 = 1;
            }
        }
        if (dangeon_number == 99) {
            var_2867 = 1;
        }
        if (var_2867 == 0) {
            var_2866 = 1;
        }
        var_2764 = var_66 - 1;
        var_2765 = var_66 + 1;
        var_2766 = var_67 + 1;
        var_2767 = var_67 - 1;
        if (var_2764 < 5) {
            var_2764 = 5;
        }
        if (var_2767 < 5) {
            var_2767 = 5;
        }
        if (var_2765 > var_33) {
            var_2765 = var_33;
        }
        if (var_2766 > var_34) {
            var_2766 = var_34;
        }
        if (var_71[var_2764][var_67] == 0) {
            var_1449 = 4;
        }
        if (var_71[var_2765][var_67] == 0) {
            var_1449 = 6;
        }
        if (var_71[var_66][var_2766] == 0) {
            var_1449 = 2;
        }
        if (var_71[var_66][var_2767] == 0) {
            var_1449 = 8;
        }
        if (var_71[var_2764][var_2766] == 0) {
            var_1449 = 1;
        }
        if (var_71[var_2764][var_2767] == 0) {
            var_1449 = 7;
        }
        if (var_71[var_2765][var_2766] == 0) {
            var_1449 = 3;
        }
        if (var_71[var_2765][var_2767] == 0) {
            var_1449 = 9;
        }
        var_1450 = 160;
        var_1451 = 150;
        var_1448 = 1;
        var_1447 = 1;
        var_271 = 1;
        for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            if (var_1447 == 4) {
                if (var_1449 == 4) {
                    var_199 = 4;
                }
                if (var_1449 == 6) {
                    var_199 = 6;
                }
                if (var_1449 == 2) {
                    var_199 = 2;
                }
                if (var_1449 == 8) {
                    var_199 = 8;
                }
                if (var_1449 == 1) {
                    var_199 = 1;
                }
                if (var_1449 == 3) {
                    var_199 = 3;
                }
                if (var_1449 == 7) {
                    var_199 = 7;
                }
                if (var_1449 == 9) {
                    var_199 = 9;
                }
                if (var_2866 == 1) {
                    var_672 = 157;
                    yield func093();
                    if (var_2868 == 1) {
                        var_2869 = var_199;
                    }
                }
                if (var_2866 == 0) {
                    yield func601();
                    var_2852 = var_209;
                    var_747 = 1;
                    var_389 = 2;
    
                    DSPLAY(audio_id = 105);
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    comments_row1 = "「ダイバー・ダウン！」";
                    comments_row2 = "" + var_2852 + "のダメージをうけた！";
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
                    yield func047();
                    if (var_128 >= 1) {
                        yield func023();
                    }
                }
            }
            if (var_2868 == 1) {
                if (var_199 == 1) {
                    var_2870 = 2;
                }
                if (var_199 == 2) {
                    var_2870 = 3;
                }
                if (var_199 == 3) {
                    var_2870 = 6;
                }
                if (var_199 == 6) {
                    var_2870 = 9;
                }
                if (var_199 == 9) {
                    var_2870 = 8;
                }
                if (var_199 == 8) {
                    var_2870 = 7;
                }
                if (var_199 == 7) {
                    var_2870 = 4;
                }
                if (var_199 == 4) {
                    var_2870 = 1;
                }
                var_199 = var_2870;
                if (var_1447 >= 6) {
                    var_199 = var_2869;
                }
            }
            var_1447++;
        }
        var_1447 = 0;
        var_271 = 0;
        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1448 = 0;
        var_2868 = 0;
        var_389 = 0;
        if (var_2866 == 0) {
            var_211 = var_211 - var_2852;
            var_208 = var_208 + var_2852;
            if (var_211 <= 0) {
                var_211 = 0;
                var_356 = 285;
            }
        }
        return;
    });
}
function func606(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(606);
        var_742 = 1;
        var_83[var_673].Var7 = 1;
        var_271 = 1;
        var_1433 = 1;
        var_1430 = var_83[var_673].Var1;
        var_1431 = var_83[var_673].Var2;

        DSPLAY(audio_id = 116);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1433 = var_1433 + 1;
        }
        var_742 = 0;
        var_271 = 0;
        var_1433 = 0;
        var_83[var_673].Var18 = 0;
        var_83[var_673].Var7 = 0;
        var_2862 = rnd(3);
        var_271 = 1;
        var_1432 = 1;
        var_1426 = rnd(3);
        if (var_1426 == 0) {
            var_1427 = 160;
            var_1428 = 0;
        }
        if (var_1426 == 1) {
            var_1427 = 0;
            var_1428 = 0;
        }
        if (var_1426 == 2) {
            var_1427 = 320;
            var_1428 = 0;
        }
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            if (var_1426 == 0) {
                var_1427 = var_1427;
                var_1428 = var_1428 + 40;
            }
            if (var_1426 == 1) {
                var_1427 = var_1427 + 40;
                var_1428 = var_1428 + 40;
            }
            if (var_1426 == 2) {
                var_1427 = var_1427 - 40;
                var_1428 = var_1428 + 40;
            }
        }
        var_271 = 0;
        var_1432 = 0;
        yield func584();
        if (var_2803 == 1) {
            return;
        }
        var_2852 = 10;
        if (var_83[var_673].Var39 >= 2) {
            var_2852 = (var_83[var_673].Var39 - 1) * 2 + var_2852;
        }
        if (var_128 >= 1) {
            var_2852 = Math.floor(var_2852 * 3 / 2);
        }
        if (equip_disc[205] == 1) {
            var_2852 = Math.floor(var_2852 * 2 / 3);
        }
        if (var_168 == 1) {
            var_2852 = Math.floor(var_2852 * 2 / 3);
        }
        var_209 = var_2852;
        var_747 = 1;
        var_389 = 2;

        DSPLAY(audio_id = 104);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰの弾丸を喰らった！";
        comments_row2 = "" + var_2852 + "のダメージをうけた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        if (var_128 >= 1) {
            yield func023();
        }
        for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_389 = 0;
        var_211 = var_211 - var_2852;
        var_208 = var_208 + var_2852;
        if (var_211 <= 0) {
            var_211 = 0;
            var_356 = 246;
        }
        var_240 = 0;
        return;
    });
}
function func607(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(607);
        var_742 = 1;
        var_83[var_673].Var7 = 1;
        var_240 = 0;
        var_2871 = var_66 - 5;
        var_2872 = var_66 + 5;
        var_2873 = var_67 + 5;
        var_2874 = var_67 - 5;
        if (var_2871 < 5) {
            var_2871 = 5;
        }
        if (var_2874 < 5) {
            var_2874 = 5;
        }
        if (var_2872 > var_33) {
            var_2872 = var_33;
        }
        if (var_2873 > var_34) {
            var_2873 = var_34;
        }
        if (var_83[var_673].Var1 > var_2621 && var_83[var_673].Var1 < var_2622 && var_83[var_673].Var2 > var_2624 && var_83[var_673].Var2 < var_2623) {
            var_83[var_673].Var21 = 1;
            var_411 = 1;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_411 = 2;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_411 = 3;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_411 = 4;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_411 = 3;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_411 = 4;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_411 = 6;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 7;
            yield func337(); // メッセージ関係呼び出し
        }
        var_271 = 1;
        var_1429 = 1;
        var_1430 = var_83[var_673].Var1;
        var_1431 = var_83[var_673].Var2;

        DSPLAY(audio_id = 116);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1429 = var_1429 + 1;
        }
        var_742 = 0;
        var_271 = 0;
        var_1429 = 0;
        var_271 = 1;
        var_1425 = 1;
        var_1426 = rnd(3);
        if (var_1426 == 0) {
            var_1427 = 160;
            var_1428 = 0;
        }
        if (var_1426 == 1) {
            var_1427 = 0;
            var_1428 = 0;
        }
        if (var_1426 == 2) {
            var_1427 = 320;
            var_1428 = 0;
        }
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            if (var_1426 == 0) {
                var_1427 = var_1427;
                var_1428 = var_1428 + 40;
            }
            if (var_1426 == 1) {
                var_1427 = var_1427 + 40;
                var_1428 = var_1428 + 40;
            }
            if (var_1426 == 2) {
                var_1427 = var_1427 - 40;
                var_1428 = var_1428 + 40;
            }
        }
        var_271 = 0;
        var_1425 = 0;
        var_83[var_673].Var18 = 0;
        var_83[var_673].Var7 = 0;
        var_411 = 0;
        var_83[var_673].Var21 = 0;
        yield func584();
        if (var_2803 == 1) {
            return;
        }
        var_747 = 1;
        var_389 = 2;

        DSPLAY(audio_id = 104);
        var_2852 = 30;
        if (var_83[var_673].Var39 >= 2) {
            var_2852 = (var_83[var_673].Var39 - 1) * 2 + var_2852;
        }
        if (var_128 >= 1) {
            var_2852 = Math.floor(var_2852 * 3 / 2);
        }
        if (equip_disc[205] == 1) {
            var_2852 = Math.floor(var_2852 * 2 / 3);
        }
        if (var_168 == 1) {
            var_2852 = Math.floor(var_2852 * 2 / 3);
        }
        var_209 = var_2852;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾋﾟｽﾄﾙｽﾞの弾丸を喰らった！";
        comments_row2 = "" + var_2852 + "のダメージをうけた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        if (var_128 >= 1) {
            yield func023();
        }
        for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_389 = 0;
        var_211 = var_211 - var_2852;
        var_208 = var_208 + var_2852;
        if (var_211 <= 0) {
            var_211 = 0;
            var_356 = 240;
        }
        var_240 = 0;
        return;
    });
}
function func608(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(608);
        if (var_83[var_673].Var12 >= 1 || var_83[var_673].Var13 == 1 || var_83[var_673].Var17 == 1 || var_83[var_673].Var23 == 1) {
            return;
        }
        var_2751 = rnd(30);
        if (var_2751 == 1) {
            var_747 = 1;
            var_389 = 2;
            var_271 = 1;
            var_1490 = 1;
            var_209 = var_1022;
    
            DSPLAY(audio_id = 176);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1490++;
            }
            var_271 = 0;
            var_1490 = 0;
            var_389 = 0;
            var_2852 = var_1022;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "太陽から発射されたレーザーで";
            comments_row2 = "" + var_2852 + "のダメージをうけた！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            if (var_128 >= 1) {
                yield func023();
            }
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_211 = var_211 - var_2852;
            var_208 = var_208 + var_2852;
            if (var_211 <= 0) {
                var_211 = 0;
                var_356 = 207;
            }
            var_240 = 0;
        }
        if (var_2751 == 2) {
            gsel(19);
            color(255, 0, 0);
    
            boxf(left = 0, top1 = 0, right = 680, bottom = 680);
            gsel(0);
            var_1165 = 1;
            var_2875 = rnd(2);
            var_2875 = var_2875 + 1;
            var_1022 = var_1022 + var_2875;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "周りの気温が" + var_2875 + "度 上がった！";
            comments_row2 = "太陽のエネルギーがアップした！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1165 = 0;
            var_240 = 0;
        }
        return;
    });
}
function func609(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(609);
        if (var_83[var_673].Var12 >= 1 || var_83[var_673].Var13 == 1 || var_83[var_673].Var17 == 1 || var_83[var_673].Var23 == 1) {
            return;
        }
        gsel(19);
        color(255, 0, 255);

        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_529 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾌｰｺﾞは殺人ウイルスを撒いた！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_403 = "ウイルスが敵の体を蝕んでいる！";
        var_2217 = 1;
        var_2196 = 1;
        var_2194 = 1;
        var_2852 = 20;
        if (var_83[var_673].Var39 >= 2) {
            var_2852 = (var_83[var_673].Var39 - 1) * 2 + var_2852;
        }
        var_2876 = var_2852;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_2194 != var_124 && var_2194 != var_673) {
                var_2220 = 0;
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                    var_402 = var_2194;
                    var_209 = var_2852;
                    yield func516();
                    yield func705();
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    var_2220 = 1;
                }
                if (var_2220 == 0) {
                    var_1993 = var_83[var_673].Var1 - 1;
                    if (var_1993 < 0) {
                        var_1993 = 0;
                    }
                    var_1994 = var_83[var_673].Var1 + 1;
                    if (var_1994 > var_33) {
                        var_1994 = var_33;
                    }
                    var_1995 = var_83[var_673].Var2 + 1;
                    if (var_1995 > var_34) {
                        var_1995 = var_34;
                    }
                    var_1996 = var_83[var_673].Var2 - 1;
                    if (var_1996 < 0) {
                        var_1996 = 0;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                }
            }
            var_2194 = var_2194 + 1;
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2196 = 0;
        var_2217 = 0;
        if (var_410 == 408) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "まだ遅くない…";
            comments_row2 = "「マン・イン・ザ・ミラー！」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ウイルスは許可しないィィィィ――ッ";
            comments_row2a = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2876 = Math.floor(var_2876 / 2);
            if (var_2876 < 1) {
                var_2876 = 1;
            }
        }
        var_747 = 1;
        var_389 = 2;

        DSPLAY(audio_id = 104);
        var_2852 = var_2876;
        var_209 = var_2852;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
        comments_row2 = "" + var_2852 + "のダメージをうけた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        if (var_128 >= 1) {
            yield func023();
        }
        var_211 = var_211 - var_2852;
        var_208 = var_208 + var_2852;
        if (var_211 <= 0) {
            var_211 = 0;
            var_356 = 241;
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_389 = 0;
        var_529 = 0;
        var_240 = 0;
        return;
    });
}
function func610(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(610);
        if (var_83[var_673].Var12 >= 1 || var_83[var_673].Var13 == 1 || var_83[var_673].Var17 == 1 || var_83[var_673].Var23 == 1) {
            return;
        }
        gsel(19);
        color(255, 255, 255);

        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_529 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｴﾝﾎﾟﾘｵは純粋酸素を大量に集めた！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_403 = "酸素が細胞組織を破壊している！";
        var_2217 = 1;
        var_2196 = 1;
        var_2194 = 1;
        var_2852 = 20;
        if (var_83[var_673].Var39 >= 2) {
            var_2852 = (var_83[var_673].Var39 - 1) * 2 + var_2852;
        }
        var_2876 = var_2852;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_2194 != var_124 && var_2194 != var_673) {
                var_2220 = 0;
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                    var_402 = var_2194;
                    var_209 = var_2852;
                    yield func516();
                    yield func705();
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    var_2220 = 1;
                }
                if (var_2220 == 0) {
                    var_1993 = var_83[var_673].Var1 - 1;
                    if (var_1993 < 0) {
                        var_1993 = 0;
                    }
                    var_1994 = var_83[var_673].Var1 + 1;
                    if (var_1994 > var_33) {
                        var_1994 = var_33;
                    }
                    var_1995 = var_83[var_673].Var2 + 1;
                    if (var_1995 > var_34) {
                        var_1995 = var_34;
                    }
                    var_1996 = var_83[var_673].Var2 - 1;
                    if (var_1996 < 0) {
                        var_1996 = 0;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2852;
                        yield func516();
                        yield func705();
                        for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                }
            }
            var_2194 = var_2194 + 1;
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_529 = 0;
        var_2196 = 0;
        var_2217 = 0;
        var_529 = 0;
        var_747 = 1;
        var_389 = 2;

        DSPLAY(audio_id = 104);
        var_2852 = var_2876;
        var_209 = var_2852;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
        comments_row2 = "" + var_2852 + "のダメージをうけた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        if (var_128 >= 1) {
            yield func023();
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_211 = var_211 - var_2852;
        var_208 = var_208 + var_2852;
        if (var_211 <= 0) {
            var_211 = 0;
            var_356 = 251;
        }
        var_389 = 0;
        var_240 = 0;
        return;
    });
}
function func611(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(611);
        if (var_83[var_673].Var12 != 0 || var_83[var_673].Var13 != 0 || var_83[var_673].Var17 != 0 || var_83[var_673].Var23 != 0) {
            return;
        }
        var_2877 = rnd(2);
        if (var_2877 == 0) {
            return;
        }
        var_2878 = 0;
        var_2879 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_2879].Var0 != 0 && var_83[var_2879].Var10 == var_201 && var_201 != 14 && var_2879 != var_673) {
                var_2878 = 1;
            }
            var_2879 = var_2879 + 1;
        }
        if (var_2878 == 1) {
            return;
        }
        var_2879 = 1;
        for (let cnt1 = 0; cnt1 < var_336; ++cnt1) {
            if (var_78[var_2879].Var0 == 650 || var_78[var_2879].Var0 == 651 || var_78[var_2879].Var0 == 652 || var_78[var_2879].Var0 == 653) {
                if (var_78[var_2879].Var9 == var_201 && var_201 != 14) {
                    var_2878 = 1;
                }
            }
            var_2879 = var_2879 + 1;
        }
        if (var_2878 == 1) {
            return;
        }
        var_2880 = rnd(2);
        var_2852 = Math.floor(var_352 / 15) + var_2880;
        var_747 = 1;
        var_389 = 2;

        DSPLAY(audio_id = 104);
        var_209 = var_2852;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_389 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾖｰﾖｰﾏｯの謎の攻撃を喰らった！";
        comments_row2 = "" + var_2852 + "のダメージをうけた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        if (var_128 >= 1) {
            yield func023();
        }
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_211 = var_211 - var_2852;
        var_208 = var_208 + var_2852;
        if (var_211 <= 0) {
            var_211 = 0;
            var_356 = 222;
        }
        var_240 = 0;
        return;
    });
}
function func612(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(612);
        if (var_83[var_673].Var12 >= 1 || var_83[var_673].Var13 == 1 || var_83[var_673].Var17 == 1 || var_83[var_673].Var23 == 1 || var_178 != 0) {
            var_83[var_673].Var18 = 0;
            return;
        }
        var_1393 = var_673;
        var_178 = 1;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ウワハハハハハハーッ！！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        var_1399 = (var_83[var_1393].Var1 - var_66 + 4) * 40;
        var_1400 = (var_83[var_1393].Var2 - var_67 + 4) * 40 - 10;
        var_271 = 1;
        var_83[var_1393].Var21 = 1;
        var_959 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            if (var_959 == 0 || var_959 == 4 || var_959 == 8) {
                var_1398 = 1;
            }
            if (var_959 == 1 || var_959 == 5 || var_959 == 9) {
                var_1401 = 1;
            }
            if (var_959 == 2 || var_959 == 6) {
                var_1402 = 1;
            }
            if (var_959 == 3 || var_959 == 7) {
                var_1403 = 1;
            }
            var_411 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_959++;
        }
        var_83[var_1393].Var21 = 0;
        var_271 = 0;
        var_1398 = 0;
        var_1401 = 0;
        var_1402 = 0;
        var_1403 = 0;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "西戸の嘲笑は";
        comments_row2a = "ﾃﾞｨｱﾎﾞﾛを恐怖で呪縛した！";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func047();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ぼくをチェーンで殴る気だッ！";
        comments_row2a = "";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func050();
        yield func047();
        var_240 = 0;
        var_83[var_1393].Var6 = 1;
        var_83[var_1393].Var18 = 0;
        var_2708 = 1;
        var_2197 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func613(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(613);
        if (var_83[var_673].Var12 >= 1 || var_83[var_673].Var13 == 1 || var_83[var_673].Var17 == 1 || var_83[var_673].Var23 == 1) {
            var_83[var_673].Var18 = 0;
            return;
        }
        var_1393 = var_673;
        gsel(19);
        color(150, 150, 150);

        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_271 = 1;
        var_1392 = 1;
        var_83[var_673].Var18 = 0;
        var_1165 = 1;
        var_389 = 2;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｸﾞﾚｲﾄﾌﾙﾃﾞｯﾄﾞの老化攻撃だ！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            if (var_1392 == 11) {
        
                DSPLAY(audio_id = 161);
            }
            yield func337(); // メッセージ関係呼び出し
            var_1392 = var_1392 + 1;
        }
        var_1392 = 0;
        var_271 = 0;
        yield func340(); // キー入力による選択処理
        var_389 = 0;
        if (var_128 >= 1) {
            yield func023();
        }
        if (equip_disc[207] == 1) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "しかし 装備中のDISCによって";
            comments_row2a = "老化攻撃を防いだ！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_1165 = 0;
            var_240 = 0;
            var_83[var_1393].Var6 = 1;
            var_2708 = 1;
            var_2197 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_215 == 202 || var_410 == 404) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "しかし 装備中のDISCによって";
            comments_row2a = "体が冷やされ 無事だった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_1165 = 0;
            var_240 = 0;
            var_83[var_1393].Var6 = 1;
            var_2708 = 1;
            var_2197 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }

        DSPLAY(audio_id = 164);
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "精神力が下がってしまった！";
        comments_row2a = "";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        var_565 = var_565 - 1;
        if (var_565 < 0) {
            var_565 = 0;
        }
        var_1165 = 0;
        var_240 = 0;
        var_83[var_1393].Var6 = 1;
        var_2708 = 1;
        var_2197 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func614(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(614);
        if (var_83[var_673].Var12 >= 1 || var_83[var_673].Var13 == 1 || var_83[var_673].Var17 == 1 || var_83[var_673].Var23 == 1) {
            var_83[var_673].Var18 = 0;
            return;
        }
        var_152 = var_673;
        if (var_83[var_673].Var0 == 113) {
            var_151 = 5;
        }
        if (var_83[var_673].Var0 == 114) {
            var_151 = 7;
        }
        if (var_83[var_673].Var0 == 128) {
            var_151 = 4;
        }
        var_83[var_673].Var18 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「ザ・ワールド」！！";
        comments_row2 = "時よ止まれ！";
        if (var_83[var_673].Var0 == 128) {
            comments_row1 = "「スタープラチナ・ザ・ワールド」！！";
            comments_row2 = "";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();

        DSPLAY(audio_id = 185);
        var_271 = 1;
        var_1491 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1491++;
        }
        var_271 = 0;
        var_1491 = 0;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "フフフフフ…";
        comments_row2 = "これが「世界」だ…";
        if (var_83[var_673].Var0 == 128) {
            comments_row1 = "ひさしぶりに……";
            comments_row2 = "時をとめられたぜ";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        var_240 = 0;
        var_83[var_673].Var6 = 1;
        var_2708 = 1;
        var_2197 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2392 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            var_83[var_2392].Var6 = 0;
            var_83[var_2392].Var9 = 0;
            var_83[var_2392].Var18 = 0;
            var_2392 = var_2392 + 1;
        }
        if (var_215 == 100 || var_215 == 111 || var_215 == 398) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_114 = 0;
            var_463 = 0;
            var_464 = 0;
            var_461 = 0;
            var_462 = 0;
            var_151 = 0;
            var_152 = 0;
            var_163 = 1;
            var_164 = 1;
    
            DSPLAY(audio_id = 185);
            var_271 = 1;
            var_1493 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1493++;
            }
            var_271 = 0;
            var_1493 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「おれが時を止めた…」";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[6];
            var_26_x = var_26[6];
            var_27_x = var_27[6];
            yield func047();
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "どんな気分だ？";
            comments_row2a = "動けねえのに背後に立たれる気分はよ？";
            var_25_x = var_25[6];
            var_26_x = var_26[6];
            var_27_x = var_27[6];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            var_153 = 1;
            return;
        }
        return;
    });
}
function func615(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(615);
        var_83[var_673].Var30 = 0;
        var_83[var_673].Var21 = 1;
        var_411 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 5;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 4;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 5;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 4;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2705 = var_83[var_673].Var1;
        var_2706 = var_83[var_673].Var2;
        if (var_66 < var_2705 && var_67 > var_2706) {
            var_83[var_673].Var5 = 1;
        }
        if (var_66 > var_2705 && var_67 > var_2706) {
            var_83[var_673].Var5 = 3;
        }
        if (var_66 < var_2705 && var_67 < var_2706) {
            var_83[var_673].Var5 = 7;
        }
        if (var_66 > var_2705 && var_67 < var_2706) {
            var_83[var_673].Var5 = 9;
        }
        if (var_66 == var_2705 && var_67 > var_2706) {
            var_83[var_673].Var5 = 2;
        }
        if (var_66 == var_2705 && var_67 < var_2706) {
            var_83[var_673].Var5 = 8;
        }
        if (var_67 == var_2706 && var_66 < var_2705) {
            var_83[var_673].Var5 = 4;
        }
        if (var_67 == var_2706 && var_66 > var_2705) {
            var_83[var_673].Var5 = 6;
        }
        var_411 = 0;
        var_83[var_673].Var21 = 0;
        var_83[var_673].Var30 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func616(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(616);
        if (var_83[var_2791].Var0 == 0) {
            var_83[var_673].Var18 = 0;
            return;
        }
        var_83[var_673].Var21 = 1;
        var_411 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 2;
        var_83[var_673].Var7 = 1;
        var_271 = 1;
        var_1439 = 1;
        var_1430 = var_83[var_673].Var1;
        var_1431 = var_83[var_673].Var2;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1439 = var_1439 + 1;
        }
        var_742 = 0;
        var_271 = 0;
        var_1439 = 0;
        var_83[var_673].Var18 = 0;
        var_83[var_673].Var7 = 0;
        var_271 = 1;
        var_1436 = 1;
        var_1437 = (var_2789 - var_66 + 4) * 40;
        var_1438 = (var_2790 - var_67 + 4) * 40 - 170;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1438 = var_1438 + 40;
        }
        var_455 = var_2789;
        var_456 = var_2790;
        yield func586();
        var_271 = 0;
        var_1436 = 0;
        var_83[var_673].Var21 = 0;
        var_411 = 0;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func617(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(617);
        var_240 = 0;
        var_83[var_673].Var21 = 1;
        var_411 = 1;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 3;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_411 = 0;
        var_83[var_673].Var21 = 0;
        var_768 = 1;
        var_2418 = 1;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
                var_1550 = rnd(var_33);
                var_230 = rnd(var_34);
                if (var_71[var_1550][var_230] == var_201 && var_77[var_1550][var_230] == 0 && var_80[var_1550][var_230] == 0 && var_73[var_1550][var_230] == 0 && var_65[var_1550][var_230] == 0) {
                    yield func536();
                    break;
                }
            }
        }
        var_768 = 0;
        var_2418 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ケンゾーはドラゴンに手を入れた！";
        comments_row2 = "周囲の危険が増えた気がする…";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
    });
}
function func618(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(618);
        var_240 = 0;
        var_2881 = var_673;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_2882 = rnd(2);
        if (var_2882 == 0) {
            comments_row1 = "";
            comments_row2 = "全隊戦闘態勢ッ！";
        }
        if (var_2882 == 1) {
            comments_row1 = "";
            comments_row2 = "狙えェェェェェェェ～～～～～筒！";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[var_2881].Var18 = 0;
        var_2883 = var_83[var_2881].Var1;
        var_2884 = var_83[var_2881].Var2;
        var_2546 = 1;
        var_1845 = 5;
        var_2519 = var_83[var_2881].Var10;
        var_2353 = var_673;
        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
            yield func556();
        }
        var_673 = var_2353;
        var_1845 = 0;
        var_2546 = 0;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理

        DSPLAY(audio_id = 199);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "形兆はﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ部隊を呼び出した！";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func619(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(619);
        if (var_127 == 0 && var_132 == 0 && var_83[var_673].Var30 == 0) {
            if (var_83[var_673].Var5 == 2) {
                var_199 = 8;
            }
            if (var_83[var_673].Var5 == 8) {
                var_199 = 2;
            }
            if (var_83[var_673].Var5 == 4) {
                var_199 = 6;
            }
            if (var_83[var_673].Var5 == 6) {
                var_199 = 4;
            }
            if (var_83[var_673].Var5 == 1) {
                var_199 = 9;
            }
            if (var_83[var_673].Var5 == 3) {
                var_199 = 7;
            }
            if (var_83[var_673].Var5 == 7) {
                var_199 = 3;
            }
            if (var_83[var_673].Var5 == 9) {
                var_199 = 1;
            }
        }
        return;
    });
}
function func620(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(620);
        if (var_83[var_673].Var17 != 0 || var_83[var_673].Var23 != 0) {
            return;
        }
        if (enemy_list == 4) {
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
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
            
                    DSPLAY(audio_id = 132);
                    var_219 = 1;
                }
                if (var_120 == 1) {
                    comments_row1 = "10時間熟睡した気分になっていて";
                    comments_row2 = "眠くならなかった！";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_219 = 0;
                }
                if (equip_disc[351] == 1) {
                    comments_row1 = "装備DISCの効果によって";
                    comments_row2 = "眠くならなかった！";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_219 = 0;
                }
                if (var_410 == 400 || var_410 == 407) {
                    comments_row1 = "装備DISCの効果によって";
                    comments_row2 = "眠らずにすんだ！";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
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
        }
        if (enemy_list == 158 || enemy_list == 45) {
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
                if (var_410 != 405) {
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
                if (var_410 == 405) {
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            if (var_2887 == 1) {
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "･･･と思ったが、";
                comments_row2a = "漆黒のオーラに守られて無事だった。";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
        }
        if (enemy_list == 170) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                if (equip_disc[396] == 1) {
                    yield func340(); // キー入力による選択処理
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "しかし装備スタンドの効果で";
                    comments_row2a = "速度は遅くならない！";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                }
            }
            var_2197 = 1;
            return;
        }
        if (enemy_list == 12 || enemy_list == 145 || enemy_list == 150) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                if (equip_disc[396] == 1) {
                    yield func340(); // キー入力による選択処理
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "しかし装備スタンドの効果で";
                    comments_row2a = "速度は遅くならない！";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
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
        }
        if (enemy_list == 77) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
        }
        if (enemy_list == 132) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
        }
        if (enemy_list == 130) {
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        if (enemy_list == 999) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
        }
        if (enemy_list == 9999) {
            var_2830 = rnd(4);
            if (var_2830 == 0 && var_134 == 0) {
                var_742 = 1;
                var_83[var_673].Var7 = 1;
                if (var_215 != 116 && var_125 == 0) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func047();
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                if (var_215 == 116 || var_125 >= 1) {
                    yield func340(); // キー入力による選択処理
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "しかし波紋に強くなっていて平気だった";
                    comments_row2a = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                }
                yield func619();
                var_2197 = 1;
            }
            return;
        }
        if (enemy_list == 15 || enemy_list == 64) {
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
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func047();
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    var_2197 = 1;
                    return;
                }
                if (var_215 == 109 || var_410 == 404 || var_215 == 202) {
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
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func047();
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
            }
            return;
        }
        if (enemy_list == 17) {
            if (var_83[var_673].Var3 == 2) {
                yield func094();
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
        }
        if (enemy_list == 18) {
            var_2830 = rnd(8);
            if (var_2830 == 0) {
                yield func094();
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "「チャンスをやろう…";
                comments_row2 = "　向かうべき『２つの道』を……！」";
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    yield func050();
                }
                if (var_2228 == 1) {
                    yield func340(); // キー入力による選択処理
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "「この【魂】　選ばれるものでは…」";
                    comments_row2a = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
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
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "「なかった！」";
                    comments_row2a = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    var_198 = 1;
                    var_300 = 0;
                    yield func050();
                    yield func340(); // キー入力による選択処理
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "HPが半分になった。";
                    comments_row2a = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
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
        }
        if (enemy_list == 20) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func047();
                yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                for (let cnt3 = 0; cnt3 < 16; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
            }
            return;
        }
        if (enemy_list == 26) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
        }
        if (enemy_list == 144) {
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            if (var_128 >= 1) {
                yield func023();
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        if (enemy_list == 87) {
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
            yield func094();
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
                return;
            }
            if (var_215 == 109) {
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            if (var_128 >= 1) {
                yield func023();
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        if (enemy_list == 157) {
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
            yield func094();
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            if (var_128 >= 1) {
                yield func023();
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        if (enemy_list == 131) {
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
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
            if (var_215 == 202) {
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            if (var_128 >= 1) {
                yield func023();
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2197 = 1;
            return;
        }
        if (enemy_list == 27) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
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
        }
        if (enemy_list == 94) {
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
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
        }
        if (enemy_list == 160) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                yield func094();
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
        }
        if (enemy_list == 69) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
        }
        if (enemy_list == 1580) {
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
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
        }
        if (enemy_list == 119) {
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
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
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
        }
        if (enemy_list == 78) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                if (var_215 == 109 || var_173 == 1) {
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
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
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
                if (var_357 != 0 && var_358 == 0) {
                    yield func426();
                    if (var_233[var_553].Var4 != 0) {
                        var_2474 = 1;
                    }
                }
                if (var_357 == 0 && var_358 != 0) {
                    yield func427();
                    if (var_233[var_554].Var4 != 0) {
                        var_2474 = 2;
                    }
                }
                if (var_357 != 0 && var_358 != 0) {
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
                if (var_357 == 0 && var_358 == 0) {
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
                    belongings_item_list = var_357;
                    disc_rarity = var_233[var_553].Var13;
                    yield func492(); // アイテムリスト呼び出し
                }
                if (var_2474 == 2) {
                    yield func427();
                    var_233[var_554].Var4 = var_233[var_554].Var4 - 1;
                    var_581 = var_581 - 1;
                    var_895 = var_895 - 1;
                    var_2473 = 1;
                    belongings_item_list = var_358;
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
                yield func094();
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func047();
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    var_2197 = 1;
                    return;
                }
                if (var_215 == 109) {
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
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
        }
        if (enemy_list == 137) {
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
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
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
                yield func094();
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
        }
        if (enemy_list == 28) {
            var_2830 = rnd(3);
            if (var_2830 == 0) {
                yield func094();
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "お前の願いを言え！";
                    comments_row2a = "";
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                var_2197 = 1;
            }
            return;
        }
        if (enemy_list == 65) {
            var_2830 = rnd(2);
            if (var_2830 == 0) {
                yield func094();
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "攻撃開始イ―――――ッ！";
                    comments_row2a = "";
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    var_2197 = 1;
                    return;
                }
                yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                yield func094();
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "グリーンベレーッ！";
                comments_row2a = "やれッ！";
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
            var_2197 = 1;
            return;
        }
        if (enemy_list == 9999) {
            if (var_128 != 0 || var_219 != 0) {
                return;
            }
            var_2894 = 0;
            var_2895 = 0;
            var_2896 = var_673;
            if (var_357 != 0) {
                yield func426();
                if (var_233[var_553].Var4 != 0) {
                    var_2895 = 1;
                    var_2897 = var_553;
                }
            }
            if (var_358 != 0) {
                yield func427();
                if (var_233[var_554].Var4 != 0) {
                    var_2895 = 2;
                    var_2897 = var_554;
                }
            }
            if (var_215 != 0) {
                yield func428();
                if (var_233[var_555].Var4 != 0) {
                    var_2895 = 4;
                    var_2897 = var_555;
                }
            }
            if (var_410 != 0) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
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
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
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
                        var_25_x = var_25[1];
                        var_26_x = var_26[1];
                        var_27_x = var_27[1];
                        var_198 = 1;
                        var_300 = 0;
                        yield func047();
                        yield func050();
                        var_225 = var_2897;
                        yield func433(); // アイテム配列(所持アイテム)初期化関数
                        var_479 = dim(40);
                        var_250 = 0;
                        var_410 = 0;
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func047();
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
                return;
            }
            return;
        }
        if (enemy_list == 38) {
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
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
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
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func047();
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
            }
            return;
        }
        if (enemy_list == 39) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
        }
        if (enemy_list == 32) {
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
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
                    yield func047();
                    for (let cnt4 = 0; cnt4 < 15; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    var_2197 = 1;
                }
            }
            if (var_2830 == 1) {
                yield func094();
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                    yield func094();
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "君さえ消えていなくなってくれればね…";
                    comments_row2a = "";
                    var_25_x = var_25[2];
                    var_26_x = var_26[2];
                    var_27_x = var_27[2];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                var_2197 = 1;
            }
            return;
        }
        if (enemy_list == 59) {
            var_412 = var_673;
            if (var_83[var_412].Var26 == 1) {
                return;
            }
            if (var_357 == 0 && var_358 == 0 && var_215 == 0) {
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
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func047();
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    var_2197 = 1;
                    return;
                }
                if (var_357 != 0 && var_358 != 0 && var_215 != 0) {
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
                if (var_357 != 0 && var_358 != 0 && var_215 == 0) {
                    var_2396 = rnd(2);
                    if (var_2396 == 0) {
                        var_2397 = 0;
                    }
                    if (var_2396 == 1) {
                        var_2397 = 1;
                    }
                }
                if (var_357 != 0 && var_358 == 0 && var_215 != 0) {
                    var_2396 = rnd(2);
                    if (var_2396 == 0) {
                        var_2397 = 0;
                    }
                    if (var_2396 == 1) {
                        var_2397 = 2;
                    }
                }
                if (var_357 == 0 && var_358 != 0 && var_215 != 0) {
                    var_2396 = rnd(2);
                    if (var_2396 == 0) {
                        var_2397 = 1;
                    }
                    if (var_2396 == 1) {
                        var_2397 = 2;
                    }
                }
                if (var_357 != 0 && var_358 == 0 && var_215 == 0) {
                    var_2397 = 0;
                }
                if (var_357 == 0 && var_358 != 0 && var_215 == 0) {
                    var_2397 = 1;
                }
                if (var_357 == 0 && var_358 == 0 && var_215 != 0) {
                    var_2397 = 2;
                }
                if (var_2397 == 0) {
                    yield func426();
                    var_476 = dim(40);
                    var_580 = var_580 - var_894;
                    var_894 = 0;
                    var_357 = 0;
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
                    var_358 = 0;
                    yield func494();
                    belongings_item_list = var_233[var_554].Var0;
                    disc_rarity = var_233[var_554].Var13;
                    var_475 = var_554;
                    var_897 = 0;
                }
                if (var_2397 == 2) {
                    yield func428();
                    var_478 = dim(40);
                    var_215 = 0;
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func047();
                yield func619();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_2197 = 1;
            }
            return;
        }
        if (enemy_list == 63) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    var_2197 = 1;
                    return;
                }
                if (var_215 == 202 || var_410 == 404) {
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "しかし 装備中のDISCによって";
                    comments_row2a = "体が冷やされ 無事だった！";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                var_2197 = 1;
            }
            return;
        }
        // 敵 C-MOONの能力
        if (enemy_list == 127) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func047();
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func619();
                if (var_215 != 120) {
                    var_2904 = var_352 - var_211;
                    var_211 = var_2904;
                    if (var_211 == 0) {
                        var_211 = 1;
                    }
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "体力が逆転してしまった！！";
                    comments_row2a = "";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                }
                if (var_215 == 120) {
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "しかしメビウスの輪を作って";
                    comments_row2a = "裏返り攻撃を防いだ！";
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                }
                var_2197 = 1;
            }
            return;
        }
        if (enemy_list == 80) {
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
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
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
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
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
        }
        return;
    });
}
function func621(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(621);
        if (var_1238 >= 1) {
            gmode(2);
            pos((var_83[var_314].Var1 - var_66 + 4) * 40, (var_83[var_314].Var2 - var_67 + 4) * 40 - 10);
            gcopy(3, 640, 360, 40, 40);
        }
        return;
    });
}
function func622(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(622);
        if (var_92 == 1 || var_92 == 7 || var_92 == 16 || var_262 == 1) {
            return;
        }
        if (var_347 >= 5 && var_348 >= 5 && var_347 <= var_33 && var_348 <= var_34) {
            var_71[var_347][var_348] = 14;
            var_303 = var_347;
            var_304 = var_348;
            var_305 = var_347 - 1;
            if (var_305 < 0) {
                var_305 = 0;
            }
            var_306 = var_347 + 1;
            if (var_306 > var_33) {
                var_306 = var_33;
            }
            var_307 = var_348 + 1;
            if (var_307 > var_34) {
                var_307 = var_34;
            }
            var_308 = var_348 - 1;
            if (var_308 < 0) {
                var_308 = 0;
            }
            if (var_71[var_305][var_304] != 0 && var_71[var_305][var_304] <= 12 && var_71[var_306][var_304] != 0 && var_71[var_306][var_304] <= 12) {
                var_71[var_347][var_348] = var_71[var_305][var_304];
            }
            if (var_71[var_303][var_307] != 0 && var_71[var_303][var_307] <= 12 && var_71[var_303][var_308] != 0 && var_71[var_303][var_308] <= 12) {
                var_71[var_347][var_348] = var_71[var_303][var_307];
            }
        }
        return;
    });
}
function func623(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(623);
        var_2905 = var_347;
        var_2906 = var_348;
        var_2907 = var_347 - 1;
        if (var_2907 < 0) {
            var_2907 = 0;
        }
        var_2908 = var_347 + 1;
        if (var_2908 > var_33) {
            var_2908 = var_33;
        }
        var_2909 = var_348 + 1;
        if (var_2909 > var_33) {
            var_2909 = var_33;
        }
        var_2910 = var_348 - 1;
        if (var_2910 < 0) {
            var_2910 = 0;
        }
        var_2911 = 0;
        if (var_2911 == 0 && var_71[var_2907][var_2906] != 0 && var_71[var_2907][var_2906] != 13 && var_65[var_2907][var_2906] == 0 && var_82[var_2907][var_2906] == 0) {
            var_2911 = 1;
            var_2912 = var_2907;
            var_2913 = var_2906;
            var_2914 = var_71[var_2907][var_2906];
            var_1365 = 4;
        }
        if (var_2911 == 0 && var_71[var_2908][var_2906] != 0 && var_71[var_2908][var_2906] != 13 && var_65[var_2908][var_2906] == 0 && var_82[var_2908][var_2906] == 0) {
            var_2911 = 1;
            var_2912 = var_2908;
            var_2913 = var_2906;
            var_2914 = var_71[var_2908][var_2906];
            var_1365 = 6;
        }
        if (var_2911 == 0 && var_71[var_2905][var_2909] != 0 && var_71[var_2905][var_2909] != 13 && var_65[var_2905][var_2909] == 0 && var_82[var_2905][var_2909] == 0) {
            var_2911 = 1;
            var_2912 = var_2905;
            var_2913 = var_2909;
            var_2914 = var_71[var_2905][var_2909];
            var_1365 = 2;
        }
        if (var_2911 == 0 && var_71[var_2905][var_2910] != 0 && var_71[var_2905][var_2910] != 13 && var_65[var_2905][var_2910] == 0 && var_82[var_2905][var_2910] == 0) {
            var_2911 = 1;
            var_2912 = var_2905;
            var_2913 = var_2910;
            var_2914 = var_71[var_2905][var_2910];
            var_1365 = 8;
        }
        if (var_2911 == 0 && var_71[var_2907][var_2909] != 0 && var_71[var_2907][var_2909] != 13 && var_65[var_2907][var_2909] == 0 && var_82[var_2907][var_2909] == 0) {
            var_2911 = 1;
            var_2912 = var_2907;
            var_2913 = var_2909;
            var_2914 = var_71[var_2907][var_2909];
            var_1365 = 1;
        }
        if (var_2911 == 0 && var_71[var_2908][var_2909] != 0 && var_71[var_2908][var_2909] != 13 && var_65[var_2908][var_2909] == 0 && var_82[var_2908][var_2909] == 0) {
            var_2911 = 1;
            var_2912 = var_2908;
            var_2913 = var_2909;
            var_2914 = var_71[var_2908][var_2909];
            var_1365 = 3;
        }
        if (var_2911 == 0 && var_71[var_2907][var_2910] != 0 && var_71[var_2907][var_2910] != 13 && var_65[var_2907][var_2910] == 0 && var_82[var_2907][var_2910] == 0) {
            var_2911 = 1;
            var_2912 = var_2907;
            var_2913 = var_2910;
            var_2914 = var_71[var_2907][var_2910];
            var_1365 = 7;
        }
        if (var_2911 == 0 && var_71[var_2908][var_2910] != 0 && var_71[var_2908][var_2910] != 13 && var_65[var_2908][var_2910] == 0 && var_82[var_2908][var_2910] == 0) {
            var_2911 = 1;
            var_2912 = var_2908;
            var_2913 = var_2910;
            var_2914 = var_71[var_2908][var_2910];
            var_1365 = 9;
        }
        if (var_2911 == 1) {
            var_1366 = 0;
            var_1368 = 0;
            var_1367 = 5;
            var_1369 = var_2905 - var_66 + 4;
            var_1370 = var_2906 - var_67 + 4;
            var_271 = 1;
            var_1364 = 1;
            var_1371 = 1;
    
            DSPLAY(audio_id = 156);
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1364++;
            }
            var_271 = 0;
            var_1364 = 0;
            var_440 = var_2912;
            var_441 = var_2913;
            var_2499 = var_2914;
            yield func556();
            var_1371 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_2915 = rnd(9);
            if (var_2915 == 0) {
                comments_row1 = "マギ――――ッ！";
                comments_row2 = "";
            }
            if (var_2915 == 1) {
                comments_row1 = "やっぱりわたし！";
                comments_row2 = "わたし　わたし　わたし　わたし";
            }
            if (var_2915 == 2) {
                comments_row1 = "ムギ―――ッ！";
                comments_row2 = "";
            }
            if (var_2915 == 3) {
                comments_row1 = "ハアァアアアアアア―――";
                comments_row2 = "";
            }
            if (var_2915 == 4) {
                comments_row1 = "まんまとだまされおったな";
                comments_row2 = "このバカタレがァーッ";
            }
            if (var_2915 == 5) {
                comments_row1 = "ウジュル　　　　ウジュ";
                comments_row2 = "　　　　ウジュル";
            }
            if (var_2915 == 6) {
                comments_row1 = "おしい！おしい！";
                comments_row2 = "その隣のわたしだったな";
            }
            if (var_2915 == 7) {
                comments_row1 = "わたあああ～～～～～～しｨｨｨｨｨ";
                comments_row2 = "だよ～～～～～～～～～～～オン！！";
            }
            if (var_2915 == 8) {
                comments_row1 = "史上最弱が最も最も最も最も最も最も";
                comments_row2 = "最も最も最も最も最も最も　恐ろしィィ";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_673 = var_1912;
        return;
    });
}
function func624(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(624);
        var_2905 = var_347;
        var_2906 = var_348;
        var_2907 = var_347 - 1;
        if (var_2907 < 0) {
            var_2907 = 0;
        }
        var_2908 = var_347 + 1;
        if (var_2908 > var_33) {
            var_2908 = var_33;
        }
        var_2909 = var_348 + 1;
        if (var_2909 > var_33) {
            var_2909 = var_33;
        }
        var_2910 = var_348 - 1;
        if (var_2910 < 0) {
            var_2910 = 0;
        }
        var_2911 = 0;
        if (var_2911 == 0 && var_71[var_2907][var_2906] != 0 && var_71[var_2907][var_2906] != 13 && var_65[var_2907][var_2906] == 0 && var_82[var_2907][var_2906] == 0) {
            var_2911 = 1;
            var_2912 = var_2907;
            var_2913 = var_2906;
            var_2914 = var_71[var_2907][var_2906];
            var_1365 = 4;
        }
        if (var_2911 == 0 && var_71[var_2908][var_2906] != 0 && var_71[var_2908][var_2906] != 13 && var_65[var_2908][var_2906] == 0 && var_82[var_2908][var_2906] == 0) {
            var_2911 = 1;
            var_2912 = var_2908;
            var_2913 = var_2906;
            var_2914 = var_71[var_2908][var_2906];
            var_1365 = 6;
        }
        if (var_2911 == 0 && var_71[var_2905][var_2909] != 0 && var_71[var_2905][var_2909] != 13 && var_65[var_2905][var_2909] == 0 && var_82[var_2905][var_2909] == 0) {
            var_2911 = 1;
            var_2912 = var_2905;
            var_2913 = var_2909;
            var_2914 = var_71[var_2905][var_2909];
            var_1365 = 2;
        }
        if (var_2911 == 0 && var_71[var_2905][var_2910] != 0 && var_71[var_2905][var_2910] != 13 && var_65[var_2905][var_2910] == 0 && var_82[var_2905][var_2910] == 0) {
            var_2911 = 1;
            var_2912 = var_2905;
            var_2913 = var_2910;
            var_2914 = var_71[var_2905][var_2910];
            var_1365 = 8;
        }
        if (var_2911 == 0 && var_71[var_2907][var_2909] != 0 && var_71[var_2907][var_2909] != 13 && var_65[var_2907][var_2909] == 0 && var_82[var_2907][var_2909] == 0) {
            var_2911 = 1;
            var_2912 = var_2907;
            var_2913 = var_2909;
            var_2914 = var_71[var_2907][var_2909];
            var_1365 = 1;
        }
        if (var_2911 == 0 && var_71[var_2908][var_2909] != 0 && var_71[var_2908][var_2909] != 13 && var_65[var_2908][var_2909] == 0 && var_82[var_2908][var_2909] == 0) {
            var_2911 = 1;
            var_2912 = var_2908;
            var_2913 = var_2909;
            var_2914 = var_71[var_2908][var_2909];
            var_1365 = 3;
        }
        if (var_2911 == 0 && var_71[var_2907][var_2910] != 0 && var_71[var_2907][var_2910] != 13 && var_65[var_2907][var_2910] == 0 && var_82[var_2907][var_2910] == 0) {
            var_2911 = 1;
            var_2912 = var_2907;
            var_2913 = var_2910;
            var_2914 = var_71[var_2907][var_2910];
            var_1365 = 7;
        }
        if (var_2911 == 0 && var_71[var_2908][var_2910] != 0 && var_71[var_2908][var_2910] != 13 && var_65[var_2908][var_2910] == 0 && var_82[var_2908][var_2910] == 0) {
            var_2911 = 1;
            var_2912 = var_2908;
            var_2913 = var_2910;
            var_2914 = var_71[var_2908][var_2910];
            var_1365 = 9;
        }
        if (var_2911 == 1) {
            var_1366 = 0;
            var_1368 = 0;
            var_1367 = 2;
            var_1369 = var_2905 - var_66 + 4;
            var_1370 = var_2906 - var_67 + 4;
            var_271 = 1;
            var_1373 = 1;
            var_1371 = 1;
    
            DSPLAY(audio_id = 156);
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_271 = 0;
            var_1373 = 0;
            var_440 = var_2912;
            var_441 = var_2913;
            var_2499 = var_2914;
            yield func556();
            var_1371 = 0;
            var_1374 = 0;
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_1371 = 0;
        var_1374 = 0;
        return;
    });
}
function func625(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(625);
        if (var_2352 == 0) {
            var_2916 = rnd(7);
            if (var_2916 == 0) {
                var_2355 = 5;
            }
            if (var_2916 == 1) {
                var_2355 = 51;
            }
            if (var_2916 == 2) {
                var_2355 = 52;
            }
            if (var_2916 == 3) {
                var_2355 = 73;
            }
            if (var_2916 == 4) {
                var_2355 = 71;
            }
            if (var_2916 == 5) {
                var_2355 = 69;
            }
            if (var_2916 == 6) {
                var_2355 = 66;
            }
        }
        if (var_2352 == 1) {
            var_2916 = rnd(10);
            if (var_2916 == 0) {
                var_2355 = 88;
            }
            if (var_2916 == 1) {
                var_2355 = 94;
            }
            if (var_2916 == 2) {
                var_2355 = 56;
            }
            if (var_2916 == 3) {
                var_2355 = 11;
            }
            if (var_2916 == 4) {
                var_2355 = 135;
            }
            if (var_2916 == 5) {
                var_2355 = 95;
            }
            if (var_2916 == 6) {
                var_2355 = 136;
            }
            if (var_2916 == 7) {
                var_2355 = 87;
            }
            if (var_2916 == 8) {
                var_2355 = 109;
            }
            if (var_2916 == 9) {
                var_2355 = 110;
            }
            if (var_2916 == 10) {
                var_2355 = 111;
            }
        }
        if (var_2352 == 2) {
            var_2916 = rnd(20);
            if (var_2916 == 0) {
                var_2355 = 2;
            }
            if (var_2916 == 1) {
                var_2355 = 3;
            }
            if (var_2916 == 2) {
                var_2355 = 6;
            }
            if (var_2916 == 3) {
                var_2355 = 7;
            }
            if (var_2916 == 4) {
                var_2355 = 9;
            }
            if (var_2916 == 5) {
                var_2355 = 155;
            }
            if (var_2916 == 6) {
                var_2355 = 4;
            }
            if (var_2916 == 7) {
                var_2355 = 13;
            }
            if (var_2916 == 8) {
                var_2355 = 119;
            }
            if (var_2916 == 9) {
                var_2355 = 28;
            }
            if (var_2916 == 10) {
                var_2355 = 122;
            }
            if (var_2916 == 11) {
                var_2355 = 38;
            }
            if (var_2916 == 12) {
                var_2355 = 46;
            }
            if (var_2916 == 13) {
                var_2355 = 14;
            }
            if (var_2916 == 14) {
                var_2355 = 46;
            }
            if (var_2916 == 15) {
                var_2355 = 113;
            }
            if (var_2916 == 16) {
                var_2355 = 15;
            }
            if (var_2916 == 17) {
                var_2355 = 78;
            }
            if (var_2916 == 18) {
                var_2355 = 121;
            }
            if (var_2916 == 19) {
                var_2355 = 133;
            }
        }
        if (var_2352 == 3) {
            var_2916 = rnd(18);
            if (var_2916 == 0) {
                var_2355 = 79;
            }
            if (var_2916 == 1) {
                var_2355 = 128;
            }
            if (var_2916 == 2) {
                var_2355 = 77;
            }
            if (var_2916 == 3) {
                var_2355 = 39;
            }
            if (var_2916 == 4) {
                var_2355 = 26;
            }
            if (var_2916 == 5) {
                var_2355 = 76;
            }
            if (var_2916 == 6) {
                var_2355 = 12;
            }
            if (var_2916 == 7) {
                var_2355 = 31;
            }
            if (var_2916 == 8) {
                var_2355 = 115;
            }
            if (var_2916 == 9) {
                var_2355 = 47;
            }
            if (var_2916 == 10) {
                var_2355 = 17;
            }
            if (var_2916 == 11) {
                var_2355 = 145;
            }
            if (var_2916 == 12) {
                var_2355 = 35;
            }
            if (var_2916 == 13) {
                var_2355 = 21;
            }
            if (var_2916 == 14) {
                var_2355 = 147;
            }
            if (var_2916 == 15) {
                var_2355 = 44;
            }
            if (var_2916 == 16) {
                var_2355 = 150;
            }
            if (var_2916 == 17) {
                var_2355 = 158;
            }
        }
        if (var_2352 == 4) {
            var_2916 = rnd(16);
            if (var_2916 == 0) {
                var_2355 = 1;
            }
            if (var_2916 == 1) {
                var_2355 = 131;
            }
            if (var_2916 == 2) {
                var_2355 = 29;
            }
            if (var_2916 == 3) {
                var_2355 = 48;
            }
            if (var_2916 == 4) {
                var_2355 = 62;
            }
            if (var_2916 == 5) {
                var_2355 = 10;
            }
            if (var_2916 == 6) {
                var_2355 = 63;
            }
            if (var_2916 == 7) {
                var_2355 = 84;
            }
            if (var_2916 == 8) {
                var_2355 = 43;
            }
            if (var_2916 == 9) {
                var_2355 = 85;
            }
            if (var_2916 == 10) {
                var_2355 = 18;
            }
            if (var_2916 == 11) {
                var_2355 = 123;
            }
            if (var_2916 == 12) {
                var_2355 = 64;
            }
            if (var_2916 == 13) {
                var_2355 = 124;
            }
            if (var_2916 == 14) {
                var_2355 = 152;
            }
            if (var_2916 == 15) {
                var_2355 = 125;
            }
        }
        if (var_2352 == 5) {
            var_2916 = rnd(15);
            if (var_2916 == 0) {
                var_2355 = 141;
            }
            if (var_2916 == 1) {
                var_2355 = 134;
            }
            if (var_2916 == 2) {
                var_2355 = 99;
            }
            if (var_2916 == 3) {
                var_2355 = 72;
            }
            if (var_2916 == 4) {
                var_2355 = 59;
            }
            if (var_2916 == 5) {
                var_2355 = 80;
            }
            if (var_2916 == 6) {
                var_2355 = 160;
            }
            if (var_2916 == 7) {
                var_2355 = 60;
            }
            if (var_2916 == 8) {
                var_2355 = 98;
            }
            if (var_2916 == 9) {
                var_2355 = 93;
            }
            if (var_2916 == 10) {
                var_2355 = 148;
            }
            if (var_2916 == 11) {
                var_2355 = 153;
            }
            if (var_2916 == 12) {
                var_2355 = 156;
            }
            if (var_2916 == 13) {
                var_2355 = 157;
            }
            if (var_2916 == 14) {
                var_2355 = 154;
            }
        }
        if (var_2352 == 6) {
            var_2355 = 166;
        }
        return;
    });
}
// 敵リスト
function func626(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(626);
        enemy_name = "";
        enemy_power = 0;
        enemy_defence = 0;
        var_954 = 0;
        enemy_hp = 0;
        var_1637 = 0;
        var_1654 = 100;
        var_972 = 0;
        enemy_description = "";
        var_1656 = "";
        var_1657 = "";
        var_1658 = "";
        var_1619 = 0;
        if (enemy_list == 79) {
            enemy_name = "ｴｺｰｽﾞの卵";
            enemy_power = 0;
            enemy_defence = 0;
            var_954 = 2;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 8;
            var_1619 = 414;
            enemy_description = "・動かないぞ。";
            var_1656 = "・攻撃してこないぞ。";
            var_1657 = "・倒すと成長することがあるぞ。";
            var_1658 = "・模様の違う卵には要注意だ。";
        }
        if (enemy_list == 1) {
            enemy_name = "ﾔｸ中のｺﾞﾛﾂｷ";
            enemy_power = 3;
            enemy_defence = 1;
            var_954 = 3;
            enemy_hp = 4;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 1;
            var_1619 = 528;
            enemy_description = "・フラフラと歩くぞ。";
            var_1656 = "・必ず「ｵﾚｯちのｺｰﾄ」を落とすぞ。";
            var_1657 = "・ｺｰﾄを持っていると向かってくるぞ。";
            var_1658 = "・ｺｰﾄが落ちているとそこへ向かうぞ。";
        }
        if (enemy_list == 5) {
            enemy_name = "小汚い浮浪者";
            enemy_power = 2;
            enemy_defence = 2;
            var_954 = 3;
            enemy_hp = 5;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 105;
            enemy_description = "・とくに何もないぞ。";
            var_1656 = "・衛生観念のない虫けら同然の浮浪者だ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 88) {
            enemy_name = "ﾄﾞﾉｳﾞｧﾝ";
            enemy_power = 3;
            enemy_defence = 2;
            var_954 = 4;
            enemy_hp = 6;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 206;
            enemy_description = "・ヒラヒラと舞って攻撃が当たりにくいぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 147) {
            enemy_name = "ｼﾞｮｾﾌ";
            enemy_power = 1;
            enemy_defence = 2;
            var_954 = 3;
            enemy_hp = 6;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 7;
            var_1619 = 438;
            enemy_description = "・フラフラと歩くぞ。";
            var_1656 = "・攻撃してこないぞ。";
            var_1657 = "・多分ボケちゃっているぞ。";
            var_1658 = "";
        }
        if (enemy_list == 2) {
            enemy_name = "ヌケサク";
            enemy_power = 4;
            enemy_defence = 3;
            var_954 = 5;
            enemy_hp = 7;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 363;
            enemy_description = "・とくに何もないぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 93) {
            enemy_name = "ｴﾝﾎﾟﾘｵ";
            enemy_power = 5;
            enemy_defence = 4;
            var_954 = 7;
            enemy_hp = 7;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 604;
            enemy_description = "・幽霊の弾丸を撃ってくるぞ。";
            var_1656 = "・特別なスタンドを扱えそうだ…";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 3) {
            enemy_name = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰ";
            enemy_power = 6;
            enemy_defence = 5;
            var_954 = 8;
            enemy_hp = 9;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 3;
            var_1619 = 311;
            enemy_description = "・近い場所に瞬間移動することがあるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 94) {
            enemy_name = "ブルりん";
            enemy_power = 8;
            enemy_defence = 6;
            var_954 = 15;
            enemy_hp = 13;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 203;
            enemy_description = "・掴まえて動けなくしてくるぞ。";
            var_1656 = "・「たのもしいわ！あたしのブルりん！」";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 77) {
            enemy_name = "ｴｺｰｽﾞACT1";
            enemy_power = 7;
            enemy_defence = 5;
            var_954 = 13;
            enemy_hp = 12;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 8;
            var_1619 = 415;
            enemy_description = "・音を貼り付けて混乱させてくるぞ。";
            var_1656 = "・倒すと成長することがあるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 51) {
            enemy_name = "ﾜﾝﾁｪﾝ";
            enemy_power = 8; // 攻撃力
            enemy_defence = 6; // 防御力
            var_954 = 20; // 経験値
            enemy_hp = 14; // 体力
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 107;
            enemy_description = "・とくに何もないぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 7) {
            enemy_name = "運命の車輪";
            enemy_power = 8;
            enemy_defence = 7;
            var_954 = 36;
            enemy_hp = 18;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 3;
            var_1619 = 316;
            enemy_description = "・ガソリンの弾丸を撃ってくるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 9) {
            enemy_name = "ﾗﾊﾞｰｿｳﾙ";
            enemy_power = 8;
            enemy_defence = 8;
            var_954 = 40;
            enemy_hp = 17;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 314;
            enemy_description = "・殴ると肉片が貼り付いてしまうことがあるぞ。";
            var_1656 = "・アイテムを投げると食べて攻撃力が上がるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 39) {
            enemy_name = "ﾊｲｳｪｲｽﾀｰ";
            enemy_power = 7;
            enemy_defence = 5;
            var_954 = 48;
            enemy_hp = 14;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 8;
            var_1619 = 445;
            enemy_description = "・倍の速さで移動するぞ。";
            var_1656 = "・養分を吸い取って満腹度を下げてくるぞ。";
            var_1657 = "・特別なアイテムを持っていることがあるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 26) {
            enemy_name = "ﾊｰｳﾞｪｽﾄ";
            enemy_power = 12;
            enemy_defence = 8;
            var_954 = 30;
            enemy_hp = 12;
            var_1637 = 0;
            var_1654 = 1;
            var_972 = 8;
            var_1619 = 441;
            enemy_description = "・アイテムを盗んで逃げるぞ。";
            var_1656 = "・落ちているアイテムも拾って逃げるぞ。";
            var_1657 = "・盗んだ後は倍の速さで移動するぞ。";
            var_1658 = "";
        }
        if (enemy_list == 76) {
            enemy_name = "ｴｺｰｽﾞACT2";
            enemy_power = 9;
            enemy_defence = 6;
            var_954 = 46;
            enemy_hp = 19;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 8;
            var_1619 = 417;
            enemy_description = "・文字を投げつけて攻撃してくるぞ。";
            var_1656 = "・地面に文字の罠を貼り付けるぞ。";
            var_1657 = "・倒すと成長することがあるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 6) {
            enemy_name = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙの人形";
            enemy_power = 9;
            enemy_defence = 7;
            var_954 = 45;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 0;
            var_1619 = 312;
            enemy_description = "・攻撃を受けると恨みで攻撃力が上がるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 165) {
            enemy_name = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙ";
            enemy_power = 9;
            enemy_defence = 40;
            var_954 = 5;
            enemy_hp = 5;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 3;
            var_1619 = 313;
            enemy_description = "・他の敵に乗り移ってレベルを上げるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 52) {
            enemy_name = "ｼﾞｬｯｸ･ｻﾞ･ﾘﾊﾟｰ";
            enemy_power = 12;
            enemy_defence = 5;
            var_954 = 60;
            enemy_hp = 30;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 108;
            enemy_description = "・とくに何もないぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 73) {
            enemy_name = "ﾀﾞｲｱｰさん";
            enemy_power = 10;
            enemy_defence = 6;
            var_954 = 52;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 111;
            enemy_description = "・倒すと首だけになって残るぞ。";
            var_1656 = "・首に触れると波紋のバラを飛ばしてくるぞ。";
            var_1657 = "・凍った状態になると弱いぞ。";
            var_1658 = "";
        }
        if (enemy_list == 101) {
            enemy_name = "ﾍﾟｲｼﾞ";
            enemy_power = 10;
            enemy_defence = 5;
            var_954 = 50;
            enemy_hp = 16;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 113;
            enemy_description = "・常に４人組で行動するぞ。";
            var_1656 = "・必ず眠っているぞ。";
            var_1657 = "・一人に攻撃すると、皆で襲ってくるぞ。";
            var_1658 = "・倍の速さで移動するぞ。";
        }
        if (enemy_list == 102) {
            enemy_name = "ｼﾞｮｰﾝｽﾞ";
            enemy_power = 10;
            enemy_defence = 5;
            var_954 = 50;
            enemy_hp = 16;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 114;
            enemy_description = "・常に４人組で行動するぞ。";
            var_1656 = "・必ず眠っているぞ。";
            var_1657 = "・一人に攻撃すると、皆で襲ってくるぞ。";
            var_1658 = "・倍の速さで移動するぞ。";
        }
        if (enemy_list == 103) {
            enemy_name = "ﾌﾟﾗﾝﾄ";
            enemy_power = 10;
            enemy_defence = 5;
            var_954 = 50;
            enemy_hp = 16;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 115;
            enemy_description = "・常に４人組で行動するぞ。";
            var_1656 = "・必ず眠っているぞ。";
            var_1657 = "・一人に攻撃すると、皆で襲ってくるぞ。";
            var_1658 = "・倍の速さで移動するぞ。";
        }
        if (enemy_list == 104) {
            enemy_name = "ﾎﾞｰﾝﾅﾑ";
            enemy_power = 10;
            enemy_defence = 5;
            var_954 = 50;
            enemy_hp = 16;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 116;
            enemy_description = "・常に４人組で行動するぞ。";
            var_1656 = "・必ず眠っているぞ。";
            var_1657 = "・一人に攻撃すると、皆で襲ってくるぞ。";
            var_1658 = "・倍の速さで移動するぞ。";
        }
        if (enemy_list == 141) {
            enemy_name = "F・F";
            enemy_power = 11;
            enemy_defence = 6;
            var_954 = 72;
            enemy_hp = 18;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 603;
            enemy_description = "・ＦＦの弾丸を撃ってくるぞ。";
            var_1656 = "・弾丸が他の敵に当たると体力が回復するぞ。";
            var_1657 = "・熱湯に弱いぞ。";
            var_1658 = "";
        }
        if (enemy_list == 134) {
            enemy_name = "ｼﾞｮﾘｰﾝ";
            enemy_power = 13;
            enemy_defence = 7;
            var_954 = 88;
            enemy_hp = 25;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 601;
            enemy_description = "・近くに怪我をした敵がいると治しに行くぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 4) {
            enemy_name = "ﾃﾞｽ･13";
            enemy_power = 11;
            enemy_defence = 6;
            var_954 = 95;
            enemy_hp = 21;
            var_1637 = 0;
            var_1654 = 8;
            var_972 = 3;
            var_1619 = 325;
            enemy_description = "・時々眠らせてくるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 13) {
            enemy_name = "ﾗﾊﾞｰｽﾞ";
            enemy_power = 10;
            enemy_defence = 8;
            var_954 = 75;
            enemy_hp = 18;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 3;
            var_1619 = 322;
            enemy_description = "・攻撃すると分裂して増えることがあるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 119) {
            enemy_name = "ｼﾞｮｾﾌ";
            enemy_power = 9;
            enemy_defence = 3;
            var_954 = 90;
            enemy_hp = 28;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 302;
            enemy_description = "・スタンドで縛り付けて動けなくさせるぞ。";
            var_1656 = "・攻撃されると波紋で痺れることがあるぞ。";
            var_1657 = "・老化攻撃を受けると弱くなってしまうぞ。";
            var_1658 = "";
        }
        if (enemy_list == 99) {
            enemy_name = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰ";
            enemy_power = 12;
            enemy_defence = 6;
            var_954 = 85;
            enemy_hp = 18;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 3;
            var_1619 = 607;
            enemy_description = "・フワフワと動いているぞ。";
            var_1656 = "・気流に舞って攻撃が当たりにくいぞ。";
            var_1657 = "・近くにいると弾丸を撃ってくるぞ。";
            var_1658 = "・この弾丸は防御力の影響を受けないぞ。";
        }
        if (enemy_list == 138) {
            enemy_name = "ﾃﾞｨｵ･ﾌﾞﾗﾝﾄﾞｰ";
            enemy_power = 13;
            enemy_defence = 8;
            var_954 = 100;
            enemy_hp = 25;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 102;
            enemy_description = "・殴ると凍ってしまうことがあるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 71) {
            enemy_name = "ﾄﾞｩｰﾋﾞｰ";
            enemy_power = 14;
            enemy_defence = 9;
            var_954 = 130;
            enemy_hp = 34;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 112;
            enemy_description = "・とくに何もないぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 12) {
            enemy_name = "ｴｺｰｽﾞACT3";
            enemy_power = 11;
            enemy_defence = 7;
            var_954 = 100;
            enemy_hp = 25;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 8;
            var_1619 = 419;
            enemy_description = "・体を重くして鈍足にしてくるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 20) {
            enemy_name = "ｴﾝﾔ婆";
            enemy_power = 11;
            enemy_defence = 5;
            var_954 = 200;
            enemy_hp = 80;
            var_1637 = 0;
            var_1654 = 1;
            var_972 = 1;
            var_1619 = 317;
            enemy_description = "・倍の速さで動いているぞ。";
            var_1656 = "・動く死体を呼び出すことがあるぞ。";
            var_1657 = "・ダンジョンの主だぞ。";
            var_1658 = "";
        }
        if (enemy_list == 24) {
            enemy_name = "穴ﾎﾞｺﾁｰｽﾞの死体";
            enemy_power = 8;
            enemy_defence = 4;
            var_954 = 40;
            enemy_hp = 13;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 0;
            var_1619 = 319;
            enemy_description = "・エンヤ婆に操られている死体だ。";
            var_1656 = "・エンヤ婆がやられると、ただの死体に戻るぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 25) {
            enemy_name = "子連れﾆｷﾋﾞの死体";
            enemy_power = 8;
            enemy_defence = 4;
            var_954 = 40;
            enemy_hp = 13;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 0;
            var_1619 = 320;
            enemy_description = "・エンヤ婆に操られている死体だ。";
            var_1656 = "・エンヤ婆がやられると、ただの死体に戻るぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 8) {
            enemy_name = "無愛想親父の死体";
            enemy_power = 8;
            enemy_defence = 4;
            var_954 = 40;
            enemy_hp = 13;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 0;
            var_1619 = 318;
            enemy_description = "・エンヤ婆に操られている死体だ。";
            var_1656 = "・エンヤ婆がやられると、ただの死体に戻るぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 56) {
            enemy_name = "ｼｭﾄﾛﾊｲﾑ";
            enemy_power = 13;
            enemy_defence = 10;
            var_954 = 110;
            enemy_hp = 23;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 204;
            enemy_description = "・マシンガンを撃ってくるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 28) {
            enemy_name = "ｼﾞｬｯｼﾞﾒﾝﾄ";
            enemy_power = 15;
            enemy_defence = 12;
            var_954 = 150;
            enemy_hp = 30;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 3;
            var_1619 = 326;
            enemy_description = "・土人形を作り出すことがあるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 22) {
            enemy_name = "ｱｳﾞﾄﾞｩﾙ人形";
            enemy_power = 11;
            enemy_defence = 1;
            var_954 = 50;
            enemy_hp = 30;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 0;
            var_1619 = 327;
            enemy_description = "・ジャッジメントに作られた土人形だ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 31) {
            enemy_name = "吉良の親父";
            enemy_power = 13;
            enemy_defence = 9;
            var_954 = 95;
            enemy_hp = 22;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 7;
            var_1619 = 444;
            enemy_description = "・フワフワと動いているぞ。";
            var_1656 = "・親父がいる部屋は写真の中だ。";
            var_1657 = "　倒さないと出られないぞ。";
            var_1658 = "・弓矢を落とすことがあるぞ。";
        }
        if (enemy_list == 140) {
            enemy_name = "ｼﾞｮﾅｻﾝ";
            enemy_power = 15;
            enemy_defence = 11;
            var_954 = 120;
            enemy_hp = 30;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 101;
            enemy_description = "・攻撃時に波紋で痺れさせることがあるぞ。";
            var_1656 = "・ズームパンチで２マス先まで攻撃するぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 148) {
            enemy_name = "ｴﾙﾒｪｽ";
            enemy_power = 12;
            enemy_defence = 10;
            var_954 = 110;
            enemy_hp = 27;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 602;
            enemy_description = "・地面にキッスのシールを貼るぞ。";
            var_1656 = "・他の敵がシールに触れると分裂するぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 131) {
            enemy_name = "ｼﾞｮﾙﾉ";
            enemy_power = 14;
            enemy_defence = 14;
            var_954 = 135;
            enemy_hp = 25;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 9;
            var_1619 = 501;
            enemy_description = "・アイテムをカエルに変化させるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 115) {
            enemy_name = "ｱｸｱ･ﾈｯｸﾚｽ";
            enemy_power = 14;
            enemy_defence = 13;
            var_954 = 120;
            enemy_hp = 26;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 8;
            var_1619 = 404;
            enemy_description = "・霧になって他の場所へ瞬間移動するぞ。";
            var_1656 = "・念写に写りこんでしまう事があるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 11) {
            enemy_name = "ﾜｲｱｰﾄﾞのﾍﾞｯｸ";
            enemy_power = 16;
            enemy_defence = 15;
            var_954 = 150;
            enemy_hp = 38;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 212;
            enemy_description = "・とくに何もないぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 45) {
            enemy_name = "由花子";
            enemy_power = 12;
            enemy_defence = 13;
            var_954 = 142;
            enemy_hp = 32;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 7;
            var_1619 = 433;
            enemy_description = "・ｽﾀﾝﾄﾞDISCに呪縛をかけてくるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 29) {
            enemy_name = "ｸﾞﾘｰﾝ･ﾃﾞｨ";
            enemy_power = 15;
            enemy_defence = 5;
            var_954 = 165;
            enemy_hp = 80;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 3;
            var_1619 = 525;
            enemy_description = "・同じ部屋にいると階段を降りられないぞ";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 47) {
            enemy_name = "億泰";
            enemy_power = 17;
            enemy_defence = 14;
            var_954 = 170;
            enemy_hp = 36;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 7;
            var_1619 = 405;
            enemy_description = "・ガオンと近くに引き寄せてくるぞ。";
            var_1656 = "・強烈な一撃を繰り出すことがあるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 27) {
            enemy_name = "ｹﾞﾌﾞ神";
            enemy_power = 16;
            enemy_defence = 13;
            var_954 = 195;
            enemy_hp = 30;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 3;
            var_1619 = 342;
            enemy_description = "・地面に潜って他の場所に移動するぞ。";
            var_1656 = "・足を掴んで移動できなくさせるぞ。";
            var_1657 = "・目を切り裂いて盲目にしてくるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 136) {
            enemy_name = "ｼｰｻﾞｰ";
            enemy_power = 15;
            enemy_defence = 12;
            var_954 = 180;
            enemy_hp = 42;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 207;
            enemy_description = "・波紋を帯びたシャボンを発射してくるぞ。";
            var_1656 = "・あたると痺れることがあるぞ。";
            var_1657 = "・攻撃されても波紋で痺れることがあるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 38) {
            enemy_name = "ｱﾚｯｼｰ";
            enemy_power = 18;
            enemy_defence = 12;
            var_954 = 220;
            enemy_hp = 45;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 348;
            enemy_description = "・若返り攻撃でレベルを下げてくるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 48) {
            enemy_name = "ｴｱﾛｽﾐｽ";
            enemy_power = 15;
            enemy_defence = 12;
            var_954 = 200;
            enemy_hp = 30;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 10;
            var_1619 = 507;
            enemy_description = "・弾丸を発射してくるぞ。";
            var_1656 = "・どこからでも位置を察して飛んでくるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 78) {
            enemy_name = "ｱｳﾞﾄﾞｩﾙさん";
            enemy_power = 19;
            enemy_defence = 13;
            var_954 = 230;
            enemy_hp = 50;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 303;
            enemy_description = "・レッドバインドで縛り付けてくるぞ。";
            var_1656 = "・喰らうとスタンドが弱くなってしまうぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 62) {
            enemy_name = "ﾍﾞｲﾋﾞｨﾌｪｲｽ";
            enemy_power = 18;
            enemy_defence = 16;
            var_954 = 245;
            enemy_hp = 50;
            var_1637 = 0;
            var_1654 = 1;
            var_972 = 3;
            var_1619 = 516;
            enemy_description = "・アイテムに化けているぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 17) {
            enemy_name = "ｼｱｰﾊｰﾄｱﾀｯｸ";
            enemy_power = 14;
            enemy_defence = 40;
            var_954 = 300;
            enemy_hp = 5;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 8;
            var_1619 = 443;
            enemy_description = "・体力が少なくなると爆発するぞ。";
            var_1656 = "・自分が爆発に巻き込まれると誘爆するぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 46) {
            enemy_name = "ﾎﾙ･ﾎｰｽ";
            enemy_power = 15;
            enemy_defence = 16;
            var_954 = 262;
            enemy_hp = 42;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 315;
            enemy_description = "・付かず離れず距離をとってくるぞ。";
            var_1656 = "・時々エンペラーの弾丸を発射するぞ。";
            var_1657 = "・この弾丸は防御力の影響を受けないぞ。";
            var_1658 = "・ガラスの破片をバラ撒くこともあるぞ。";
        }
        if (enemy_list == 97) {
            enemy_name = "ｵｲﾝｺﾞ";
            enemy_power = 10;
            enemy_defence = 1;
            var_954 = 100;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 1;
            var_1619 = 343;
            enemy_description = "・誰か他の敵に化けていることがあるぞ。";
            var_1656 = "・爆弾仕掛けのオレンジを落とすぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 125) {
            enemy_name = "ﾌｰｺﾞ";
            enemy_power = 19;
            enemy_defence = 15;
            var_954 = 320;
            enemy_hp = 42;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 9;
            var_1619 = 506;
            enemy_description = "・ｳｨﾙｽで部屋の全員にﾀﾞﾒｰｼﾞを与えるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 14) {
            enemy_name = "床屋のｶｰﾝ";
            enemy_power = 18;
            enemy_defence = 17;
            var_954 = 350;
            enemy_hp = 48;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 345;
            enemy_description = "・ダメージを受けると攻撃力がアップするぞ。";
            var_1656 = "・強烈な一撃を繰り出すことがあるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 69) {
            enemy_name = "ﾌﾞﾗﾌｫｰﾄﾞ";
            enemy_power = 18;
            enemy_defence = 16;
            var_954 = 290;
            enemy_hp = 50;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 109;
            enemy_description = "・髪の毛で縛り付けてくるぞ。";
            var_1656 = "・縛られた髪の毛で満腹度を吸い取るぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 59) {
            enemy_name = "ﾌﾟｯﾁ神父";
            enemy_power = 15;
            enemy_defence = 18;
            var_954 = 360;
            enemy_hp = 54;
            var_1637 = 1;
            var_1654 = 6;
            var_972 = 1;
            var_1619 = 618;
            enemy_description = "・装備しているDISCを抜き取ってしまうぞ。";
            var_1656 = "・やっつければ取り戻せるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 145) {
            enemy_name = "康一";
            enemy_power = 16;
            enemy_defence = 16;
            var_954 = 280;
            enemy_hp = 30;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 7;
            var_1619 = 412;
            enemy_description = "・付かず離れず距離をとってくるぞ。";
            var_1656 = "・３種類のエコーズを呼び出すぞ。";
            var_1657 = "・隣接すると重くなる攻撃をしてくるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 18) {
            enemy_name = "ﾌﾞﾗｯｸ･ｻﾊﾞｽ";
            enemy_power = 14;
            enemy_defence = 15;
            var_954 = 300;
            enemy_hp = 42;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 3;
            var_1619 = 511;
            enemy_description = "・影から影へ、瞬間的に移動するぞ。";
            var_1656 = "・矢を刺して選別してくるぞ。";
            var_1657 = "・選ばれると装備品に新たな能力がつくぞ。";
            var_1658 = "・矢かライターを落とすぞ。";
        }
        if (enemy_list == 35) {
            enemy_name = "仗助";
            enemy_power = 20;
            enemy_defence = 18;
            var_954 = 380;
            enemy_hp = 42;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 7;
            var_1619 = 401;
            enemy_description = "・近くに怪我をした敵がいると治しに行くぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 135) {
            enemy_name = "若ｼﾞｮｾﾌ";
            enemy_power = 19;
            enemy_defence = 20;
            var_954 = 390;
            enemy_hp = 30;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 201;
            enemy_description = "・付かず離れず距離をとってくるぞ。";
            var_1656 = "・地面に罠を仕掛けるぞ。";
            var_1657 = "・攻撃されると波紋で痺れることがあるぞ。";
            var_1658 = "・老化攻撃を受けると弱くなってしまうぞ。";
        }
        if (enemy_list == 10) {
            enemy_name = "ﾉﾄｰﾘｱｽBIG";
            enemy_power = 19;
            enemy_defence = 1;
            var_954 = 320;
            enemy_hp = 140;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 3;
            var_1619 = 521;
            enemy_description = "・攻撃すると肉片を貼り付けることがあるぞ。";
            var_1656 = "・速く動いても同じ速度で追ってくるぞ。";
            var_1657 = "・ゆっくり動くと追いかけてこないぞ。";
            var_1658 = "・アイテムを投げると食べて攻撃力が上がるぞ。";
        }
        if (enemy_list == 95) {
            enemy_name = "ｽﾄﾚｲﾂｫ";
            enemy_power = 19;
            enemy_defence = 18;
            var_954 = 445;
            enemy_hp = 46;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 202;
            enemy_description = "・目から体液を発射してくるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 63) {
            enemy_name = "ﾌﾟﾛｼｭｰﾄ兄貴";
            enemy_power = 20;
            enemy_defence = 17;
            var_954 = 520;
            enemy_hp = 45;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 9;
            var_1619 = 513;
            enemy_description = "・接触老化で最大精神力や最大ＨＰが下がるぞ。";
            var_1656 = "・同じ部屋にいると精神力を下げてくるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 84) {
            enemy_name = "ﾁｮｺﾗｰﾀ";
            enemy_power = 10;
            enemy_defence = 19;
            var_954 = 360;
            enemy_hp = 62;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 523;
            enemy_description = "・付かず離れず距離をとってくるぞ。";
            var_1656 = "・グリーンディやセッコを呼び出すぞ。";
            var_1657 = "・近くのセッコの攻撃力を上げるぞ。";
            var_1658 = "・分離して逃げることがあるぞ。";
        }
        if (enemy_list == 117) {
            enemy_name = "ﾁｮｺﾗｰﾀの上半身";
            enemy_power = 10;
            enemy_defence = 10;
            var_954 = 10;
            enemy_hp = 10;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 524;
            enemy_description = "・すばやい動きで逃げるぞ。";
            var_1656 = "・倒すと「やばいクスリ」を落とす事があるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 43) {
            enemy_name = "ｾｯｺ";
            enemy_power = 21;
            enemy_defence = 20;
            var_954 = 580;
            enemy_hp = 40;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 526;
            enemy_description = "・ウロウロしながら近づいてくるぞ。";
            var_1656 = "・壁の中でも自由に移動できるぞ。";
            var_1657 = "・壁の中にいる時は普通の攻撃が効かないぞ。";
            var_1658 = "・タイヤが当たると混乱するぞ。";
        }
        if (enemy_list == 85) {
            enemy_name = "ﾘｿﾞｯﾄ";
            enemy_power = 10;
            enemy_defence = 18;
            var_954 = 600;
            enemy_hp = 43;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 9;
            var_1619 = 522;
            enemy_description = "・磁力によって普段は姿が見えないぞ。";
            var_1656 = "・ランダムに移動しているぞ。";
            var_1657 = "・体内で刃物を作る攻撃をしてくるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 32) {
            enemy_name = "吉良吉影";
            enemy_power = 22;
            enemy_defence = 20;
            var_954 = 750;
            enemy_hp = 65;
            var_1637 = 1;
            var_1654 = 10;
            var_972 = 7;
            var_1619 = 442;
            enemy_description = "・アイテムを爆弾に変えてくるぞ。";
            var_1656 = "・床のアイテムも爆弾に変えることがあるぞ。";
            var_1657 = "・ｼｱｰﾊｰﾄｱﾀｯｸを繰り出すことがあるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 44) {
            enemy_name = "ﾚｯﾄﾞﾎｯﾄﾁﾘﾍﾟｯﾊﾟｰ";
            enemy_power = 20;
            enemy_defence = 16;
            var_954 = 630;
            enemy_hp = 52;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 8;
            var_1619 = 437;
            enemy_description = "・地下の電線を使って近くに瞬間移動するぞ。";
            var_1656 = "・２回連続で攻撃してくるぞ。";
            var_1657 = "・水に入るとダメージを受けるぞ。";
            var_1658 = "・タイヤに弱いぞ。";
        }
        if (enemy_list == 72) {
            enemy_name = "ｹﾝｿﾞｰ";
            enemy_power = 18;
            enemy_defence = 18;
            var_954 = 710;
            enemy_hp = 42;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 616;
            enemy_description = "・こちらの攻撃をヒラリとかわしやすいぞ。";
            var_1656 = "・風水の力で罠をたくさん呼び寄せるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 66) {
            enemy_name = "ﾀﾙｶｽ";
            enemy_power = 23;
            enemy_defence = 22;
            var_954 = 800;
            enemy_hp = 65;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 110;
            enemy_description = "・強烈な一撃を繰り出すことがあるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 113) {
            enemy_name = "DIO";
            enemy_power = 23;
            enemy_defence = 22;
            var_954 = 1400;
            enemy_hp = 75;
            var_1637 = 1;
            var_1654 = 10;
            var_972 = 2;
            var_1619 = 364;
            enemy_description = "・時間を止めて自分だけ動くぞ。";
            var_1656 = "・ジョセフを倒すとパワーアップするぞ。";
            var_1657 = "・まれに何か投げるぞ。";
            var_1658 = "・近くにいると階段を降りられないぞ。";
        }
        if (enemy_list == 15) {
            enemy_name = "ﾍﾟｯﾄｼｮｯﾌﾟ";
            enemy_power = 21;
            enemy_defence = 19;
            var_954 = 850;
            enemy_hp = 40;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 0;
            var_1619 = 360;
            enemy_description = "・氷のミサイルを発射してくるぞ。";
            var_1656 = "・隣接時に氷漬けにしてくるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 123) {
            enemy_name = "ﾌﾞﾁｬﾗﾃｨ";
            enemy_power = 22;
            enemy_defence = 21;
            var_954 = 900;
            enemy_hp = 60;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 9;
            var_1619 = 503;
            enemy_description = "・２マス先まで攻撃が届くぞ。";
            var_1656 = "・あいだに他の敵がいても攻撃が届くぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 80) {
            enemy_name = "ﾗﾝｸﾞ･ﾗﾝｸﾞﾗｰ";
            enemy_power = 18;
            enemy_defence = 19;
            var_954 = 720;
            enemy_hp = 55;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 611;
            enemy_description = "・唾を吐いてくるぞ。";
            var_1656 = "・当たると無重力で思うように動けなくなるぞ。";
            var_1657 = "・隣接していても無重力攻撃をしてくるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 65) {
            enemy_name = "虹村形兆";
            enemy_power = 10;
            enemy_defence = 18;
            var_954 = 700;
            enemy_hp = 55;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 7;
            var_1619 = 407;
            enemy_description = "・付かず離れず距離をとるぞ。";
            var_1656 = "・バッドカンパニー部隊を呼び出すぞ。";
            var_1657 = "・グリーンベレーを呼び出すぞ。";
            var_1658 = "・地面に地雷を仕掛けるぞ。";
        }
        if (enemy_list == 40) {
            enemy_name = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ";
            enemy_power = 10;
            enemy_defence = 5;
            var_954 = 5;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 8;
            var_1619 = 408;
            enemy_description = "・形兆が呼び出したスタンドだ。";
            var_1656 = "・弾丸を発射してくるぞ。";
            var_1657 = "・仲間の弾丸には当たらないぞ。";
            var_1658 = "";
        }
        if (enemy_list == 41) {
            enemy_name = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ戦車";
            enemy_power = 14;
            enemy_defence = 13;
            var_954 = 7;
            enemy_hp = 30;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 8;
            var_1619 = 410;
            enemy_description = "・形兆が呼び出したスタンドだ。";
            var_1656 = "・砲弾を発射してくるぞ。";
            var_1657 = "・仲間の弾丸には当たらないぞ。";
            var_1658 = "";
        }
        if (enemy_list == 42) {
            enemy_name = "ｱﾊﾟｯﾁ";
            enemy_power = 16;
            enemy_defence = 10;
            var_954 = 8;
            enemy_hp = 30;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 8;
            var_1619 = 411;
            enemy_description = "・形兆が呼び出したスタンドだ。";
            var_1656 = "・ミサイルを発射してくるぞ。";
            var_1657 = "・仲間の弾丸には当たらないぞ。";
            var_1658 = "";
        }
        if (enemy_list == 54) {
            enemy_name = "ｸﾞﾘｰﾝﾍﾞﾚｰ";
            enemy_power = 20;
            enemy_defence = 5;
            var_954 = 10;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 8;
            var_1619 = 409;
            enemy_description = "・形兆が呼び出したスタンドだ。";
            var_1656 = "・仲間の弾丸には当たらないぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 132) {
            enemy_name = "ﾚｸｲｴﾑｼﾞｮﾙﾉ";
            enemy_power = 25;
            enemy_defence = 23;
            var_954 = 1500;
            enemy_hp = 300;
            var_1637 = 1;
            var_1654 = 1;
            var_972 = 9;
            var_1619 = 527;
            enemy_description = "・攻撃を受けると状態異常がすべて元に戻るぞ。";
            var_1656 = "・状態異常の他にもいろいろ元に戻すぞ。";
            var_1657 = "・離れているとサソリを飛ばしてくるぞ。";
            var_1658 = "・ダンジョンの主だぞ。";
        }
        if (enemy_list == 30) {
            enemy_name = "禁煙中ﾎﾙ･ﾎｰｽ";
            enemy_power = 15;
            enemy_defence = 16;
            var_954 = 650;
            enemy_hp = 45;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 349;
            enemy_description = "・付かず離れず距離をとるぞ。";
            var_1656 = "・時々エンペラーの弾丸を発射するぞ。";
            var_1657 = "・この弾丸は防御力の影響を受けないぞ。";
            var_1658 = "・予知によって弾丸のダメージが変わるぞ。";
        }
        if (enemy_list == 21) {
            enemy_name = "ｽﾄﾚｲ･ｷｬｯﾄ";
            enemy_power = 15;
            enemy_defence = 15;
            var_954 = 100;
            enemy_hp = 45;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 6;
            var_1619 = 446;
            enemy_description = "・金縛りにする空気弾を撃ってくるぞ。";
            var_1656 = "・撃った後は寝てしまうぞ。";
            var_1657 = "・既に金縛りだとダメージ弾になるぞ。";
            var_1658 = "・吉良が近くにいると爆弾空気弾になるぞ。";
        }
        if (enemy_list == 122) {
            enemy_name = "ﾎﾟﾙﾅﾚﾌ";
            enemy_power = 25;
            enemy_defence = 22;
            var_954 = 1500;
            enemy_hp = 50;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 305;
            enemy_description = "・２回連続で攻撃してくるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 121) {
            enemy_name = "花京院";
            enemy_power = 26;
            enemy_defence = 20;
            var_954 = 1400;
            enemy_hp = 45;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 304;
            enemy_description = "・エメラルドスプラッシュを撃ってくるぞ。";
            var_1656 = "・時々ニセモノが化けているぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 152) {
            enemy_name = "ﾄﾘｯｼｭ";
            enemy_power = 24;
            enemy_defence = 24;
            var_954 = 1000;
            enemy_hp = 40;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 9;
            var_1619 = 508;
            enemy_description = "・柔らかくなってﾀﾞﾒｰｼﾞを受けない事があるぞ。";
            var_1656 = "・柔らかいと後ろに弾んでしまうぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 160) {
            enemy_name = "ｳｴｽﾄｳｯﾄﾞ看守";
            enemy_power = 27;
            enemy_defence = 23;
            var_954 = 1000;
            enemy_hp = 70;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 615;
            enemy_description = "・掴んで動けなくさせるぞ。";
            var_1656 = "・掴んでいると隕石を落とすことがあるぞ。";
            var_1657 = "・この隕石は防御力の影響を受けないぞ。";
            var_1658 = "";
        }
        if (enemy_list == 86) {
            enemy_name = "ｻﾝﾀﾅ";
            enemy_power = 30;
            enemy_defence = 25;
            var_954 = 1800;
            enemy_hp = 65;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 205;
            enemy_description = "・空気供給管を通って瞬時に移動するぞ。";
            var_1656 = "・同じ部屋に吸血鬼やゾンビがいると攻撃し、";
            var_1657 = "　やっつけるとレベルが上がるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 155) {
            enemy_name = "ﾏﾗｲｱ";
            enemy_power = 23;
            enemy_defence = 21;
            var_954 = 1400;
            enemy_hp = 45;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 347;
            enemy_description = "・付かず離れず距離をとるぞ。";
            var_1656 = "・バステト女神の罠を設置するぞ。";
            var_1657 = "・ボルトやナットを飛ばしてくるぞ。";
            var_1658 = "・磁力がアップしているとダメージが増えるぞ。";
        }
        if (enemy_list == 156) {
            enemy_name = "ｳｪｻﾞｰ";
            enemy_power = 28;
            enemy_defence = 25;
            var_954 = 1600;
            enemy_hp = 60;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 610;
            enemy_description = "・弾丸が燃え尽きて届かないぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 157) {
            enemy_name = "ｱﾅｽｲ";
            enemy_power = 29;
            enemy_defence = 21;
            var_954 = 1500;
            enemy_hp = 55;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 614;
            enemy_description = "・同じ部屋にいると壁を通して攻撃するぞ。";
            var_1656 = "・収納アイテムやヤバイものを壊してくるぞ";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 144) {
            enemy_name = "川尻浩作";
            enemy_power = 32;
            enemy_defence = 22;
            var_954 = 1700;
            enemy_hp = 50;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 7;
            var_1619 = 444;
            enemy_description = "・他人のお金を盗むぞ。";
            var_1656 = "・なんてロマンチックなの……";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 128) {
            enemy_name = "承太郎";
            enemy_power = 33;
            enemy_defence = 23;
            var_954 = 1800;
            enemy_hp = 60;
            var_1637 = 1;
            var_1654 = 10;
            var_972 = 1;
            var_1619 = 403;
            enemy_description = "・ちょっとだけ時間を止めるぞ。";
            var_1656 = "・特定のアイテムを落とすぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 158) {
            enemy_name = "ﾌﾟｯﾂﾝ由花子";
            enemy_power = 26;
            enemy_defence = 21;
            var_954 = 1700;
            enemy_hp = 45;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 7;
            var_1619 = 434;
            enemy_description = "・髪の毛を飛ばしてくるぞ。";
            var_1656 = "・刺さると思うように動けなくなるぞ。";
            var_1657 = "・ｽﾀﾝﾄﾞDISCに呪縛をかけてくるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 150) {
            enemy_name = "康一act2!!";
            enemy_power = 30;
            enemy_defence = 22;
            var_954 = 1600;
            enemy_hp = 40;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 7;
            var_1619 = 413;
            enemy_description = "・３種類のエコーズを呼び出すぞ。";
            var_1656 = "・杜王町の仲間を呼び出すぞ。";
            var_1657 = "・隣接すると重くなる攻撃をしてくるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 68) {
            enemy_name = "ﾌﾞﾁ切れた仗助";
            enemy_power = 32;
            enemy_defence = 23;
            var_954 = 1900;
            enemy_hp = 60;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 7;
            var_1619 = 402;
            enemy_description = "・倍の速さで移動するぞ。";
            var_1656 = "・２回連続で攻撃するぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 67) {
            enemy_name = "ﾌﾞﾁ切れた億泰";
            enemy_power = 38;
            enemy_defence = 25;
            var_954 = 2000;
            enemy_hp = 70;
            var_1637 = 1;
            var_1654 = 20;
            var_972 = 7;
            var_1619 = 406;
            enemy_description = "・ガオンと近くに引き寄せてくるぞ。";
            var_1656 = "・強烈な一撃を繰り出すことがあるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 151) {
            enemy_name = "虫喰い";
            enemy_power = 34;
            enemy_defence = 1;
            var_954 = 1500;
            enemy_hp = 10;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 6;
            var_1619 = 440;
            enemy_description = "・毒針を発射してくるぞ。";
            var_1656 = "・刺さるとスタンドが溶けて弱まるぞ。";
            var_1657 = "・オーラで強くなっているとオーラが消えるぞ。";
            var_1658 = "・すばやく動いているぞ。";
        }
        if (enemy_list == 172) {
            enemy_name = "虫食いでない";
            enemy_power = 34;
            enemy_defence = 1;
            var_954 = 1000;
            enemy_hp = 10;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 6;
            var_1619 = 439;
            enemy_description = "・近づくと毒針を発射してくるぞ。";
            var_1656 = "・刺さるとスタンドが溶けて弱まるぞ。";
            var_1657 = "・オーラで強くなっているとオーラが消えるぞ。";
            var_1658 = "・移動しないぞ。";
        }
        if (enemy_list == 87) {
            enemy_name = "ｴｼﾃﾞｨｼ";
            enemy_power = 38;
            enemy_defence = 26;
            var_954 = 2200;
            enemy_hp = 80;
            var_1637 = 1;
            var_1654 = 10;
            var_972 = 2;
            var_1619 = 208;
            enemy_description = "・アイテムを消し炭にしてしまうぞ。";
            var_1656 = "・床のアイテムも消し炭にしてしまうぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 164) {
            enemy_name = "ｴｼﾃﾞｨｼの脳";
            enemy_power = 28;
            enemy_defence = 80;
            var_954 = 5;
            enemy_hp = 5;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 2;
            var_1619 = 209;
            enemy_description = "・他の敵に取り付いてレベルを上げるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 109) {
            enemy_name = "ワムウ";
            enemy_power = 42;
            enemy_defence = 24;
            var_954 = 2500;
            enemy_hp = 80;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 2;
            var_1619 = 210;
            enemy_description = "・透明で姿が見えないことがあるぞ。";
            var_1656 = "・瀕死になるとパワーアップするぞ。";
            var_1657 = "・透明かそうでないかで動き方が違うぞ。";
            var_1658 = "";
        }
        if (enemy_list == 110) {
            enemy_name = "カーズ";
            enemy_power = 40;
            enemy_defence = 23;
            var_954 = 3000;
            enemy_hp = 75;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 2;
            var_1619 = 214;
            enemy_description = "・２回連続で攻撃してくるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 139) {
            enemy_name = "ﾘｻﾘｻ";
            enemy_power = 45;
            enemy_defence = 24;
            var_954 = 2800;
            enemy_hp = 50;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 211;
            enemy_description = "・ヒラリと攻撃をかわしやすいぞ。";
            var_1656 = "・殴ると波紋で痺れることがあるぞ。";
            var_1657 = "・殴られても痺れることがあるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 124) {
            enemy_name = "ﾐｽﾀ";
            enemy_power = 30;
            enemy_defence = 28;
            var_954 = 2200;
            enemy_hp = 55;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 9;
            var_1619 = 505;
            enemy_description = "・付かず離れず距離をとるぞ。";
            var_1656 = "・フロア内のどこからでも弾丸を撃ってくるぞ。";
            var_1657 = "・この弾丸は防御力の影響を受けないぞ。";
            var_1658 = "";
        }
        if (enemy_list == 154) {
            enemy_name = "ｽﾎﾟｰﾂﾏｯｸｽ";
            enemy_power = 40;
            enemy_defence = 25;
            var_954 = 2900;
            enemy_hp = 60;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 1;
            var_1619 = 613;
            enemy_description = "・透明で姿が見えないぞ。";
            var_1656 = "・今まで出現した敵を透明にして呼び出すぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 127) {
            enemy_name = "C-MOON";
            enemy_power = 5;
            enemy_defence = 30;
            var_954 = 3000;
            enemy_hp = 75;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 3;
            var_1619 = 623;
            enemy_description = "・隣接時に裏返り攻撃をしてくるぞ。";
            var_1656 = "・ＨＰの減っている数値が残り数値になるぞ。";
            var_1657 = "・ＨＰが満タンだと１になってしまうぞ。";
            var_1658 = "";
        }
        if (enemy_list == 126) {
            enemy_name = "退院した花京院";
            enemy_power = 45;
            enemy_defence = 32;
            var_954 = 2900;
            enemy_hp = 60;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 1;
            var_1619 = 350;
            enemy_description = "・エメラルドスプラッシュを撃ってくるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 129) {
            enemy_name = "ｱﾇﾋﾞｽﾎﾟﾙﾅﾚﾌ";
            enemy_power = 50;
            enemy_defence = 28;
            var_954 = 3200;
            enemy_hp = 65;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 1;
            var_1619 = 346;
            enemy_description = "・２回連続で攻撃してくるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 133) {
            enemy_name = "ｳﾞｧﾆﾗｱｲｽ";
            enemy_power = 40;
            enemy_defence = 30;
            var_954 = 2000;
            enemy_hp = 90;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 2;
            var_1619 = 361;
            enemy_description = "・攻撃を受けるとｸﾘｰﾑの中に入ってしまうぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 159) {
            enemy_name = "記憶が戻ったｳｪｻﾞｰ";
            enemy_power = 65;
            enemy_defence = 30;
            var_954 = 3400;
            enemy_hp = 60;
            var_1637 = 1;
            var_1654 = 10;
            var_972 = 1;
            var_1619 = 621;
            enemy_description = "・弾丸が燃え尽きて届かないぞ。";
            var_1656 = "・攻撃を喰らうと周囲に血の槍を作るぞ。";
            var_1657 = "・カタツムリを呼び出すぞ。";
            var_1658 = "";
        }
        if (enemy_list == 170) {
            enemy_name = "カタツムリ";
            enemy_power = 1;
            enemy_defence = 1;
            var_954 = 1;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 0;
            var_1619 = 622;
            enemy_description = "・触られると鈍足になってしまうぞ。";
            var_1656 = "・見えなければ大丈夫だぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 64) {
            enemy_name = "ｷﾞｱｯﾁｮ";
            enemy_power = 50;
            enemy_defence = 40;
            var_954 = 3600;
            enemy_hp = 50;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 9;
            var_1619 = 517;
            enemy_description = "・倍の速さで移動してくるぞ。";
            var_1656 = "・隣接すると凍らせてくるぞ。";
            var_1657 = "・弾丸やアイテムを凍らせて反射してくるぞ。";
            var_1658 = "";
        }
        if (enemy_list == 137) {
            enemy_name = "成長した吉良";
            enemy_power = 58;
            enemy_defence = 33;
            var_954 = 3300;
            enemy_hp = 65;
            var_1637 = 1;
            var_1654 = 10;
            var_972 = 7;
            var_1619 = 447;
            enemy_description = "・アイテムを爆弾にしてくるぞ。";
            var_1656 = "・落ちているアイテムも爆弾に変えるぞ。";
            var_1657 = "・仲間を呼び出すぞ。";
            var_1658 = "・瀕死になると第3の爆弾を使うぞ。";
        }
        if (enemy_list == 153) {
            enemy_name = "ﾏｯｸｲｨｰﾝ";
            enemy_power = 20;
            enemy_defence = 15;
            var_954 = 2000;
            enemy_hp = 80;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 1;
            var_1619 = 608;
            enemy_description = "・付かず離れず距離をとるぞ。";
            var_1656 = "・道連れ攻撃で、離れていても攻撃してくるぞ。";
            var_1657 = "・ダメージを与えると反射するぞ。";
            var_1658 = "";
        }
        if (enemy_list == 118) {
            enemy_name = "ｸﾘｰﾑ";
            enemy_power = 70;
            enemy_defence = 35;
            var_954 = 3300;
            enemy_hp = 90;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 3;
            var_1619 = 362;
            enemy_description = "・盲目状態で直線的に進むぞ。";
            var_1656 = "・壁を飲み込みながら進むぞ。";
            var_1657 = "・遠くにいてもガオンと近くに来るぞ。";
            var_1658 = "・時々ｳﾞｧﾆﾗｱｲｽが顔を出して位置を確認するぞ。";
        }
        if (enemy_list == 114) {
            enemy_name = "最高にﾊｲなDIO";
            enemy_power = 60;
            enemy_defence = 34;
            var_954 = 4000;
            enemy_hp = 90;
            var_1637 = 1;
            var_1654 = 10;
            var_972 = 2;
            var_1619 = 365;
            enemy_description = "・さらに長く時間を止めるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 111) {
            enemy_name = "究極カーズ";
            enemy_power = 70;
            enemy_defence = 35;
            var_954 = 4400;
            enemy_hp = 100;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 2;
            var_1619 = 215;
            enemy_description = "・倍の速さで移動するぞ。";
            var_1656 = "・壁があっても自由に動けるぞ。";
            var_1657 = "・壁の中にいると普通の攻撃は効かないぞ。";
            var_1658 = "・攻撃されると波紋で痺れることがあるぞ。";
        }
        if (enemy_list == 120) {
            enemy_name = "承太郎";
            enemy_power = 80;
            enemy_defence = 30;
            var_954 = 5000;
            enemy_hp = 90;
            var_1637 = 1;
            var_1654 = 10;
            var_972 = 1;
            var_1619 = 301;
            enemy_description = "・頻繁に強烈な一撃を繰り出すぞ。";
            var_1656 = "・強烈な一撃を喰らうと吹っ飛ぶぞ。";
            var_1657 = "・ﾀﾞﾒｰｼﾞを受けると攻撃力が上がるぞ。";
            var_1658 = "・特定のアイテムを持っているぞ。";
        }
        if (enemy_list == 60) {
            enemy_name = "ｻﾞ･ﾆｭｰ神父";
            enemy_power = 60;
            enemy_defence = 32;
            var_954 = 5600;
            enemy_hp = 85;
            var_1637 = 1;
            var_1654 = 10;
            var_972 = 1;
            var_1619 = 624;
            enemy_description = "・倍の速さで移動するぞ。";
            var_1656 = "・２回連続で攻撃するぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 98) {
            enemy_name = "ｴﾝﾎﾟﾘｵ";
            enemy_power = 70;
            enemy_defence = 3;
            var_954 = 7;
            enemy_hp = 7;
            var_1637 = 1;
            var_1654 = 10;
            var_972 = 1;
            var_1619 = 625;
            enemy_description = "・純粋酸素で全員にﾀﾞﾒｰｼﾞを与えるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 143) {
            enemy_name = "ウンガロ";
            enemy_power = 5;
            enemy_defence = 30;
            var_954 = 10;
            enemy_hp = 500;
            var_1637 = 0;
            var_1654 = 1;
            var_972 = 1;
            var_1619 = 619;
            enemy_description = "・付かず離れず距離をとるぞ。";
            var_1656 = "・マンガのキャラクターを呼び出すぞ。";
            var_1657 = "・自分は攻撃しないぞ。";
            var_1658 = "・ダンジョンの主だぞ。";
        }
        if (enemy_list == 166) {
            enemy_name = "お母さんヤギ";
            enemy_power = 90;
            enemy_defence = 10;
            var_954 = 10;
            enemy_hp = 45;
            var_1637 = 0;
            var_1654 = 20;
            var_972 = 3;
            var_1619 = 620;
            enemy_description = "・物語の中から現れたヤギだ。";
            var_1656 = "・付かず離れず距離をとるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 91) {
            enemy_name = "ACT1のさなぎ";
            enemy_power = 0;
            enemy_defence = 0;
            var_954 = 1;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 8;
            var_1619 = 416;
            enemy_description = "・動かないぞ。";
            var_1656 = "・攻撃もしないぞ。";
            var_1657 = "・エコーズACT2に成長するぞ。";
            var_1658 = "";
        }
        if (enemy_list == 92) {
            enemy_name = "ACT2のさなぎ";
            enemy_power = 0;
            enemy_defence = 0;
            var_954 = 1;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 8;
            var_1619 = 418;
            enemy_description = "・動かないぞ。";
            var_1656 = "・攻撃もしないぞ。";
            var_1657 = "・エコーズACT3に成長するぞ。";
            var_1658 = "";
        }
        if (enemy_list == 16) {
            enemy_name = "ﾊｲﾌﾟﾘｴｽﾃｽ";
            enemy_power = 11;
            enemy_defence = 8;
            var_954 = 30;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 1;
            var_972 = 3;
            var_1619 = 328;
            enemy_description = "・アイテムに化けているぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 130) {
            enemy_name = "ﾏﾘﾘﾝﾏﾝｿﾝ";
            enemy_power = 10;
            enemy_defence = 1;
            var_954 = 1;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 3;
            var_1619 = 0;
            enemy_description = "";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 146) {
            enemy_name = "ﾁｬﾘｵｯﾂ";
            enemy_power = 30;
            enemy_defence = 1;
            var_954 = 40;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 3;
            var_1619 = 306;
            enemy_description = "・分身したチャリオッツだ。";
            var_1656 = "・一撃喰らうと消えてしまうぞ。";
            var_1657 = "・５ターンで消えてしまうぞ。";
            var_1658 = "";
        }
        if (enemy_list == 37) {
            enemy_name = "猫";
            enemy_power = 1;
            enemy_defence = 1;
            var_954 = 1;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 0;
            var_1619 = 803;
            enemy_description = "・にゃー";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 19) {
            enemy_name = "ｱﾗﾋﾞｱﾌｧｯﾂ";
            enemy_power = 0;
            enemy_defence = 1;
            var_954 = 110;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 1;
            var_972 = 1;
            var_1619 = 323;
            enemy_description = "・岩に化けて動かないぞ。";
            var_1656 = "・太陽のレーザーを発射するぞ。";
            var_1657 = "・気温を上げてレーザーの威力を上げるぞ。";
            var_1658 = "・特定のアイテムを落とすぞ。";
        }
        if (enemy_list == 90) {
            enemy_name = "岩";
            enemy_power = 0;
            enemy_defence = 1;
            var_954 = 1;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 0;
            var_1619 = 324;
            enemy_description = "・岩だ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 96) {
            enemy_name = "感電ｴﾝﾎﾟﾘｵ";
            enemy_power = 1;
            enemy_defence = 1;
            var_954 = 1;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 1;
            var_972 = 1;
            var_1619 = 605;
            enemy_description = "・感電して動けない。";
            var_1656 = "・特定のアイテムを持っているぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 161) {
            enemy_name = "橋沢育郎";
            enemy_power = 1;
            enemy_defence = 35;
            var_954 = 1000;
            enemy_hp = 100;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 1;
            var_1619 = 801;
            enemy_description = "・攻撃を受けるとバオーに変身するぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 162) {
            enemy_name = "バオー";
            enemy_power = 100;
            enemy_defence = 35;
            var_954 = 6000;
            enemy_hp = 100;
            var_1637 = 0;
            var_1654 = 10;
            var_972 = 1;
            var_1619 = 802;
            enemy_description = "・２回連続で攻撃するぞ。";
            var_1656 = "";
        }
        if (enemy_list == 168) {
            enemy_name = "警備員の西戸";
            enemy_power = 80;
            enemy_defence = 40;
            var_954 = 100;
            enemy_hp = 70;
            var_1637 = 0;
            var_1654 = 3;
            var_972 = 1;
            var_1619 = 804;
            enemy_description = "・オレはこのデパートの影の支配者だ！";
            var_1656 = "　悪さをするヤツはゆるさねえ！";
            var_1657 = "・ウワハハハハハ！";
            var_1658 = "・クチャ　クチャ　　ペッ";
        }
        if (enemy_list == 33) {
            enemy_name = "トニオさん";
            enemy_power = 100;
            enemy_defence = 40;
            var_954 = 1000;
            enemy_hp = 950;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 435;
            enemy_description = "・お店を守っているぞ。";
            var_1656 = "・攻撃を受けると怒るぞ。";
            var_1657 = "・泥棒すると仲間を呼ぶぞ。";
            var_1658 = "";
        }
        if (enemy_list == 34) {
            enemy_name = "トニオさん";
            enemy_power = 100;
            enemy_defence = 40;
            var_954 = 1000;
            enemy_hp = 950;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 7;
            var_1619 = 436;
            enemy_description = "・「タダじゃあおきマセンッ！」";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 61) {
            enemy_name = "ﾖｰﾖｰﾏｯ";
            enemy_power = 1;
            enemy_defence = 10;
            var_954 = 100;
            enemy_hp = 50;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 3;
            var_1619 = 617;
            enemy_description = "・部屋に二人だけになると謎の攻撃をするぞ。";
            var_1656 = "・攻撃すると臭いでﾀﾞﾒｰｼﾞを食らうぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 74) {
            enemy_name = "ｻｳﾞｪｼﾞｶﾞｰﾃﾞﾝ";
            enemy_power = 1;
            enemy_defence = 10;
            var_954 = 1;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 612;
            enemy_description = "・アイテムを一つ倉庫に運んでくれるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 75) {
            enemy_name = "鮮血のｼｬﾎﾞﾝ";
            enemy_power = 1;
            enemy_defence = 10;
            var_954 = 1;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 213;
            enemy_description = "・アイテムを一つ入れておけるぞ。";
            var_1656 = "・あとで発見した時に取り出せるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 57) {
            enemy_name = "SPW財団の男";
            enemy_power = 1;
            enemy_defence = 10;
            var_954 = 1;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 680;
            enemy_description = "・次の階に出現する敵を教えてくれるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 58) {
            enemy_name = "ﾎﾞｲﾝｺﾞ";
            enemy_power = 1;
            enemy_defence = 10;
            var_954 = 1;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 1;
            var_972 = 4;
            var_1619 = 344;
            enemy_description = "・次の階での死に方を教えてくれるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 55) {
            enemy_name = "亀";
            enemy_power = 1;
            enemy_defence = 1;
            var_954 = 1;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 512;
            enemy_description = "・中に部屋があるぞ。";
            var_1656 = "・アイテムを保管しておけるぞ。";
            var_1657 = "・ジッパーにアイテムを捨てると成長し、";
            var_1658 = "　部屋がさらに広くなるぞ。";
        }
        if (enemy_list == 53) {
            enemy_name = "ｴｸｽﾍﾟﾘｴﾝｽの花";
            enemy_power = 1;
            enemy_defence = 1;
            var_954 = 1;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 502;
            enemy_description = "・攻撃を受けるとﾀﾞﾒｰｼﾞを反射するぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 23) {
            enemy_name = "ただの死体";
            enemy_power = 1;
            enemy_defence = 1;
            var_954 = 1;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 0;
            var_1619 = 321;
            enemy_description = "・とくに何もないぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 81) {
            enemy_name = "ｱﾊﾞｯｷｫ";
            enemy_power = 1;
            enemy_defence = 0;
            var_954 = 1;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 504;
            enemy_description = "・ダンジョンから帰還させてくれるぞ。";
            var_1656 = "・お茶を勧めてくれるぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 83) {
            enemy_name = "間田";
            enemy_power = 1;
            enemy_defence = 0;
            var_954 = 1;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 1;
            var_972 = 4;
            var_1619 = 431;
            enemy_description = "・必ずマンガを持ち歩いているぞ。";
            var_1656 = "・特に「GP BOY」は学校で読むほど大好きだ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 50) {
            enemy_name = "元いた場所";
            enemy_power = 0;
            enemy_defence = 0;
            var_954 = 0;
            enemy_hp = 9999;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 0;
            enemy_description = "";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 116) {
            enemy_name = "玉美";
            enemy_power = 0;
            enemy_defence = 1;
            var_954 = 1;
            enemy_hp = 50;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 7;
            var_1619 = 430;
            enemy_description = "・攻撃すると罪悪感でお金を奪われるぞ。";
            var_1656 = "・すれ違っただけでもお金を奪われるぞ。";
            var_1657 = "・お金がないと体が重くなってしまうぞ。";
            var_1658 = "";
        }
        if (enemy_list == 142) {
            enemy_name = "露伴";
            enemy_power = 10;
            enemy_defence = 10;
            var_954 = 1;
            enemy_hp = 20;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 439;
            enemy_description = "・「ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨのDISC」を探しているぞ。";
            var_1656 = "・岸辺露伴は動かないぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 49) {
            enemy_name = "ｺﾋﾟｰ人形";
            enemy_power = var_580 + var_565;
            enemy_defence = var_581;
            var_954 = 0;
            enemy_hp = var_352;
            var_1637 = 0;
            var_1654 = 1;
            var_972 = 5;
            var_1619 = 432;
            enemy_description = "・ウロウロと歩くぞ。";
            var_1656 = "・敵はコピー人形を優先して攻撃するぞ。";
            var_1657 = "・10ターンで人形に戻るぞ。";
            var_1658 = "";
        }
        if (enemy_list == 163) {
            enemy_name = "ﾔｸ中の少年";
            enemy_power = 1;
            enemy_defence = 0;
            var_954 = 1;
            enemy_hp = 1;
            var_1637 = 0;
            var_1654 = 1;
            var_972 = 4;
            var_1619 = 509;
            enemy_description = "・フラフラと歩いているぞ。";
            var_1656 = "・ぶん殴ると「やばいクスリ」を落とすぞ。";
            var_1657 = "・中にブチャラティが入っているぞ。";
            var_1658 = "";
        }
        if (enemy_list == 36) {
            enemy_name = "ｽﾋﾟｰﾄﾞﾜｺﾞﾝ";
            enemy_power = 7;
            enemy_defence = 7;
            var_954 = 0;
            enemy_hp = 50;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 104;
            enemy_description = "・氷漬けになると助けてくれるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 105) {
            enemy_name = "ﾂｪﾍﾟﾘさん";
            enemy_power = 9;
            enemy_defence = 6;
            var_954 = 0;
            enemy_hp = 40;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 106;
            enemy_description = "・波紋が使える状態にしてくれるぞ。";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 106) {
            enemy_name = "ﾍﾟｯｼ";
            enemy_power = 4;
            enemy_defence = 4;
            var_954 = 0;
            enemy_hp = 30;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 514;
            enemy_description = "・ﾋﾞｰﾁﾎﾞｰｲで釣りができるぞ";
            var_1656 = "・兄貴のDISCでパワーアップするぞ。";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 107) {
            enemy_name = "成長したﾍﾟｯｼ";
            enemy_power = 12;
            enemy_defence = 12;
            var_954 = 0;
            enemy_hp = 30;
            var_1637 = 0;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 515;
            enemy_description = "・ﾋﾞｰﾁﾎﾞｰｲで釣りができるぞ";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        if (enemy_list == 108) {
            enemy_name = "イギー";
            enemy_power = 5;
            enemy_defence = 8;
            var_954 = 0;
            enemy_hp = 40;
            var_1637 = 1;
            var_1654 = 999;
            var_972 = 4;
            var_1619 = 341;
            enemy_description = "・地面に砂DIOを作ってくれるぞ";
            var_1656 = "";
            var_1657 = "";
            var_1658 = "";
        }
        return;
    });
}
function func627(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(627);
        var_977 = dim(20);
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1) {
            yield func628();
        }
        // No = 2 なので、レクイエムの大迷宮
        if (dangeon_number == 2) {
            yield func629();
        }
        // No = 3 なので、ディアボロの試練
        if (dangeon_number == 3) {
            yield func630();
        }
        // No = 4 なので、一巡後の世界
        if (dangeon_number == 4) {
            yield func634();
        }
        if (dangeon_number == 5) {
            yield func631();
        }
        if (var_94 == 1) {
            var_977 = [40, 41, 42, 54, 47, 79];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (var_94 == 2) {
            var_977 = [47, 39, 35, 145, 147, 147];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (var_94 == 3) {
            var_977 = [17, 17, 31, 17, 31, 31];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (var_94 == 4) {
            var_977 = [78, 119, 121, 122];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (var_94 == 5) {
            var_977 = [100, 100, 48];
            var_2917 = rnd(3);
            var_953 = var_977[var_2917];
        }
        if (var_94 == 6) {
            var_977 = [2, 51, 52, 71, 11];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (var_94 == 7) {
            var_977 = [90, 90, 90, 90, 88, 88, 27];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        return;
    });
}
function func628(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(628);
        if (current_floor == 1) {
            var_977 = [1, 5];
            var_2917 = rnd(2);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 2) {
            var_977 = [147, 1, 5];
            var_2917 = rnd(3);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 3) {
            var_977 = [93, 2, 147, 5];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 4) {
            var_977 = [93, 3, 2, 147];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 5) {
            var_977 = [51, 94, 93, 3];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 6) {
            var_977 = [51, 94, 93, 3];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 7) {
            var_977 = [7, 9, 51, 6, 94];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 8) {
            var_977 = [52, 7, 9, 6];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 9) {
            var_977 = [134, 52, 7, 9, 6];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 10) {
            var_977 = [99, 13, 134, 141, 101, 52];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 11) {
            var_977 = [99, 13, 134, 141, 101, 52];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 12) {
            var_977 = [8, 24, 25];
            var_2917 = rnd(3);
            var_953 = var_977[var_2917];
        }
        if (current_floor >= 13) {
            var_977 = [90];
            var_2917 = rnd(1);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 99) {
            var_977 = [36, 105, 106, 107, 108, 161, 162];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        return;
    });
}
function func629(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(629);
        if (current_floor == 1) {
            var_977 = [79, 1, 5];
            var_2917 = rnd(3);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 2) {
            var_977 = [2, 79, 1, 5];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 3) {
            var_977 = [93, 3, 2, 5];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 4) {
            var_977 = [94, 77, 93, 3, 2];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 5) {
            var_977 = [51, 94, 77, 93, 3];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 6) {
            var_977 = [7, 9, 39, 51, 94, 77, 3];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 7) {
            var_977 = [6, 76, 26, 7, 9, 39, 51, 94];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 8) {
            var_977 = [52, 76, 26, 7, 9, 39, 6];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 9) {
            var_977 = [4, 134, 141, 52, 76, 26, 6];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 10) {
            var_977 = [119, 99, 13, 4, 134, 141, 101, 76, 52];
            var_2917 = rnd(9);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 11) {
            var_977 = [71, 12, 119, 99, 13, 4, 134, 141, 101];
            var_2917 = rnd(9);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 12) {
            var_977 = [28, 56, 71, 12, 119, 13, 4, 134, 101];
            var_2917 = rnd(9);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 13) {
            var_977 = [131, 148, 28, 31, 56, 71, 12, 134];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 14) {
            var_977 = [115, 11, 131, 148, 28, 31, 56];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 15) {
            var_977 = [45, 29, 115, 11, 131, 148, 28, 31];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 16) {
            var_977 = [47, 45, 29, 115, 11, 131, 148];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 17) {
            var_977 = [136, 27, 47, 45, 29, 115, 11];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 18) {
            var_977 = [48, 38, 78, 136, 27, 47, 45, 29];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 19) {
            var_977 = [17, 46, 48, 38, 78, 136, 27];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 20) {
            var_977 = [97, 125, 17, 46, 48, 38, 78];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 21) {
            var_977 = [14, 69, 97, 125, 17, 46, 12];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 22) {
            var_977 = [18, 59, 145, 14, 97, 125, 69, 17, 46];
            var_2917 = rnd(9);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 23) {
            var_977 = [35, 135, 18, 59, 145, 14, 97, 69];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 24) {
            var_977 = [10, 35, 135, 18, 59, 145, 14];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 25) {
            var_977 = [95, 63, 10, 35, 135, 59, 14];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 26) {
            var_977 = [32, 84, 43, 85, 95, 63, 10, 35];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 27) {
            var_977 = [44, 72, 66, 32, 84, 43, 85, 95, 63];
            var_2917 = rnd(9);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 28) {
            var_977 = [113, 15, 123, 44, 72, 66, 32, 84, 43];
            var_2917 = rnd(9);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 29) {
            var_977 = [80, 65, 113, 15, 123, 44, 72, 66, 119];
            var_2917 = rnd(9);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 30) {
            var_977 = [80, 65, 113, 15, 123, 44, 72, 119];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor >= 31) {
            var_977 = [90];
            var_2917 = rnd(1);
            var_953 = var_977[var_2917];
        }
        return;
    });
}
function func630(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(630);
        if (current_floor == 1) {
            var_977 = [5, 1, 147, 79, 88];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 2) {
            var_977 = [5, 1, 147, 79, 88, 2];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 3) {
            var_977 = [93, 94, 147, 88, 3, 2];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 4) {
            var_977 = [93, 94, 147, 88, 3, 2];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 5) {
            var_977 = [93, 94, 51, 3, 2, 77];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 6) {
            var_977 = [93, 7, 51, 9, 77];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 7) {
            var_977 = [73, 7, 51, 9, 39, 76, 52, 6];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 8) {
            var_977 = [73, 7, 9, 39, 76, 52, 26, 6];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 9) {
            var_977 = [73, 7, 9, 39, 76, 52, 26, 4, 6];
            var_2917 = rnd(9);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 10) {
            var_977 = [13, 9, 26, 4, 138, 6];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 11) {
            var_977 = [134, 13, 26, 4, 101, 138];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 12) {
            var_977 = [134, 13, 119, 101, 99, 138];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 13) {
            var_977 = [134, 13, 119, 99, 141, 148, 71, 140];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 14) {
            var_977 = [134, 13, 119, 99, 141, 148, 71, 140];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 15) {
            var_977 = [28, 99, 141, 148, 71, 140, 97];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 16) {
            var_977 = [12, 28, 99, 56, 148, 71, 115];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 17) {
            var_977 = [12, 28, 99, 56, 131, 71, 115];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 18) {
            var_977 = [12, 31, 56, 131, 47, 27, 115];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 19) {
            var_977 = [12, 31, 48, 131, 47, 27, 115];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 20) {
            var_977 = [12, 31, 46, 48, 11, 47, 27];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 21) {
            var_977 = [12, 17, 46, 48, 11, 47, 27, 35];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 22) {
            var_977 = [12, 17, 46, 48, 11, 47, 27, 35];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 23) {
            var_977 = [12, 17, 46, 48, 11, 47, 27, 35];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 24) {
            var_977 = [69, 38, 136, 14, 45, 29, 85];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 25) {
            var_977 = [69, 38, 136, 14, 45, 10, 85];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 26) {
            var_977 = [69, 38, 136, 14, 45, 10, 85];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 27) {
            var_977 = [69, 38, 84, 14, 95, 10, 85];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 28) {
            var_977 = [125, 72, 38, 84, 14, 95, 10, 85];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 29) {
            var_977 = [125, 72, 38, 84, 65, 95, 10, 66];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 30) {
            var_977 = [125, 72, 38, 84, 65, 95, 10, 66];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 31) {
            var_977 = [125, 59, 63, 145, 78, 43, 18, 66];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 32) {
            var_977 = [125, 59, 63, 145, 78, 43, 18, 66];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 33) {
            var_977 = [125, 59, 63, 145, 78, 43, 18, 44];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 34) {
            var_977 = [123, 59, 63, 145, 78, 43, 135, 44];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 35) {
            var_977 = [123, 59, 63, 15, 78, 43, 135, 44];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 36) {
            var_977 = [123, 59, 63, 15, 78, 43, 135, 44];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 37) {
            var_977 = [123, 80, 63, 15, 78, 43, 135, 44];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 38) {
            var_977 = [123, 80, 63, 15, 78, 43, 135, 32];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 39) {
            var_977 = [123, 80, 63, 15, 78, 43, 135, 32];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 40) {
            var_977 = [30, 59, 32, 113, 17, 26, 119];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 41) {
            var_977 = [30, 59, 32, 113, 17, 26, 119];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 42) {
            var_977 = [30, 59, 32, 113, 17, 26, 119];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 43) {
            var_977 = [30, 59, 32, 113, 17, 26, 119];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 44) {
            var_977 = [30, 59, 32, 113, 17, 26, 119];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 45) {
            var_977 = [30, 59, 32, 113, 17, 26, 119];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 46) {
            var_977 = [30, 59, 32, 113, 17, 26, 119];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 47) {
            var_977 = [122, 121, 134, 152, 78, 160];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 48) {
            var_977 = [122, 121, 134, 152, 78, 160];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 49) {
            var_977 = [122, 121, 134, 152, 78, 160];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 50) {
            var_977 = [122, 121, 134, 152, 78, 160];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 51) {
            var_977 = [122, 121, 134, 152, 78, 160];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 52) {
            var_977 = [122, 121, 134, 152, 78, 160];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 53) {
            var_977 = [122, 121, 134, 152, 78, 160];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 54) {
            var_977 = [155, 156, 157, 86, 51, 71, 144];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 55) {
            var_977 = [155, 156, 157, 86, 52, 71, 144];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 56) {
            var_977 = [155, 156, 157, 86, 52, 11, 144];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 57) {
            var_977 = [155, 156, 157, 86, 51, 71, 144];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 58) {
            var_977 = [155, 156, 157, 86, 51, 71, 144];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 59) {
            var_977 = [155, 156, 157, 86, 52, 71, 144];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 60) {
            var_977 = [128, 158, 150, 68, 67, 172];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 61) {
            var_977 = [128, 158, 150, 68, 67, 172];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 62) {
            var_977 = [128, 158, 150, 68, 67, 172];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 63) {
            var_977 = [128, 158, 150, 68, 67, 172];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 64) {
            var_977 = [128, 158, 150, 68, 67, 172];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 65) {
            var_977 = [128, 158, 150, 68, 67, 151];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 66) {
            var_977 = [128, 158, 150, 68, 67, 151];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 67) {
            var_977 = [110, 109, 87, 139, 135, 56, 136];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 68) {
            var_977 = [110, 109, 87, 139, 135, 56, 136];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 69) {
            var_977 = [110, 109, 87, 139, 135, 56, 136];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 70) {
            var_977 = [110, 109, 87, 139, 135, 56, 136];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 71) {
            var_977 = [110, 109, 87, 139, 135, 56, 136];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 72) {
            var_977 = [110, 109, 87, 139, 135, 56, 136];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 73) {
            var_977 = [110, 109, 87, 139, 135, 56, 136];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 74) {
            var_977 = [110, 109, 87, 139, 135, 56, 136];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 75) {
            var_977 = [124, 127, 99, 30, 154, 85];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 76) {
            var_977 = [124, 127, 99, 30, 154, 85];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 77) {
            var_977 = [124, 127, 99, 30, 154, 85];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 78) {
            var_977 = [124, 127, 99, 30, 154, 85];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 79) {
            var_977 = [124, 127, 99, 30, 154, 85];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 80) {
            var_977 = [124, 133, 129, 126, 137, 21, 64];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 81) {
            var_977 = [124, 133, 129, 126, 137, 21, 64];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 82) {
            var_977 = [124, 133, 129, 126, 137, 21, 64];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 83) {
            var_977 = [124, 133, 129, 126, 137, 21, 64];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 84) {
            var_977 = [153, 133, 129, 126, 137, 21, 64];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 85) {
            var_977 = [153, 133, 129, 126, 137, 21, 64];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 86) {
            var_977 = [153, 133, 129, 126, 137, 21, 64];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 87) {
            var_977 = [153, 133, 129, 126, 137, 21, 64, 158];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 88) {
            var_977 = [153, 133, 129, 126, 137, 21, 64, 158];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 89) {
            var_977 = [153, 133, 129, 126, 137, 21, 64, 158];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 90) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 91) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 92) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 93) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 94) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 95) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 96) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 97) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 98) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 99) {
            var_977 = [166, 166, 166, 166, 166, 166, 157];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor >= 100) {
            var_977 = [90];
            var_2917 = rnd(1);
            var_953 = var_977[var_2917];
        }
        return;
    });
}
function func631(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(631);
        var_2918 = current_floor;
        if (var_112 > 300) {
            var_2919 = rnd(10);
            if (var_2919 >= 5) {
                current_floor = current_floor + 1;
            }
            if (var_2919 >= 6 && var_112 > 500) {
                current_floor = current_floor + 1;
            }
            if (var_2919 >= 7 && var_112 > 700) {
                current_floor = current_floor + 1;
            }
        }
        if (current_floor == 1) {
            var_977 = [5, 1, 147];
            var_2917 = rnd(3);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 2) {
            var_977 = [5, 1, 88, 2];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 3) {
            var_977 = [93, 88, 3, 2];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 4) {
            var_977 = [93, 94, 3, 2, 77, 101];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 5) {
            var_977 = [94, 51, 3, 77, 7, 101];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 6) {
            var_977 = [7, 51, 9, 77, 39, 119];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 7) {
            var_977 = [7, 9, 39, 76, 52, 119];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 8) {
            var_977 = [73, 7, 39, 76, 52, 6];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 9) {
            var_977 = [73, 52, 4, 6, 141, 31];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 10) {
            var_977 = [4, 138, 99, 134, 141, 148, 31];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 11) {
            var_977 = [134, 13, 4, 138, 148, 12, 28];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 12) {
            var_977 = [13, 138, 71, 12, 56, 140, 131];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 13) {
            var_977 = [71, 12, 56, 140, 131, 115];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 14) {
            var_977 = [11, 56, 131, 115, 12];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 15) {
            var_977 = [11, 56, 115, 45, 29];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 16) {
            var_977 = [11, 56, 115, 45, 29, 31];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 17) {
            var_977 = [11, 56, 27, 45, 29, 31];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 18) {
            var_977 = [12, 31, 48, 47, 27];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 19) {
            var_977 = [31, 48, 47, 27, 11];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 20) {
            var_977 = [17, 46, 48, 47, 27];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 21) {
            var_977 = [17, 46, 47, 27, 35];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 22) {
            var_977 = [69, 136, 14, 45, 85];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 23) {
            var_977 = [69, 136, 14, 45, 85];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 24) {
            var_977 = [125, 38, 14, 95, 10, 85];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 25) {
            var_977 = [72, 38, 84, 65, 66, 65];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 26) {
            var_977 = [125, 145, 78, 66, 65];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 27) {
            var_977 = [59, 63, 43, 135, 44];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 28) {
            var_977 = [123, 80, 15, 59];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 29) {
            var_977 = [30, 32, 113, 152, 80];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 30) {
            var_977 = [30, 32, 113, 152, 121];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 31) {
            var_977 = [122, 160, 155, 150];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 32) {
            var_977 = [122, 160, 155, 150, 144];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 33) {
            var_977 = [156, 157, 86, 144, 150];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 34) {
            var_977 = [156, 157, 86, 144, 150, 158];
            var_2917 = rnd(6);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 35) {
            var_977 = [128, 68, 67, 172];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 36) {
            var_977 = [128, 68, 67, 172];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 37) {
            var_977 = [128, 68, 67, 172];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 38) {
            var_977 = [110, 109, 87, 139];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 39) {
            var_977 = [110, 109, 87, 139];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 40) {
            var_977 = [110, 109, 87, 139];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 41) {
            var_977 = [124, 129, 126, 154];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 42) {
            var_977 = [124, 129, 126, 154];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 43) {
            var_977 = [124, 129, 126, 154];
            var_2917 = rnd(4);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 44) {
            var_977 = [153, 133, 137, 21, 64];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 45) {
            var_977 = [153, 133, 137, 21, 64];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 46) {
            var_977 = [153, 133, 137, 21, 64];
            var_2917 = rnd(5);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 47) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 48) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 49) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor >= 50) {
            var_977 = [111, 98, 120, 60, 114, 118, 151];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        current_floor = var_2918;
        return;
    });
}
function func632(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(632);
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[1] = 5;
        }
        if (var_2920 == 1) {
            var_992[1] = 1;
        }
        if (var_2920 == 2) {
            var_992[1] = 88;
        }
        if (var_2920 == 3) {
            var_992[1] = 88;
        }
        if (var_2920 == 4) {
            var_992[1] = 2;
        }
        if (var_2920 == 5) {
            var_992[1] = 2;
        }
        if (var_2920 == 6) {
            var_992[1] = 93;
        }
        if (var_2920 == 7) {
            var_992[1] = 93;
        }
        if (var_2920 == 8) {
            var_992[1] = 3;
        }
        if (var_2920 == 9) {
            var_992[1] = 3;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[2] = 94;
        }
        if (var_2920 == 1) {
            var_992[2] = 51;
        }
        if (var_2920 == 2) {
            var_992[2] = 7;
        }
        if (var_2920 == 3) {
            var_992[2] = 7;
        }
        if (var_2920 == 4) {
            var_992[2] = 9;
        }
        if (var_2920 == 5) {
            var_992[2] = 9;
        }
        if (var_2920 == 6) {
            var_992[2] = 39;
        }
        if (var_2920 == 7) {
            var_992[2] = 39;
        }
        if (var_2920 == 8) {
            var_992[2] = 77;
        }
        if (var_2920 == 9) {
            var_992[2] = 77;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[3] = 76;
        }
        if (var_2920 == 1) {
            var_992[3] = 76;
        }
        if (var_2920 == 2) {
            var_992[3] = 52;
        }
        if (var_2920 == 3) {
            var_992[3] = 52;
        }
        if (var_2920 == 4) {
            var_992[3] = 6;
        }
        if (var_2920 == 5) {
            var_992[3] = 6;
        }
        if (var_2920 == 6) {
            var_992[3] = 73;
        }
        if (var_2920 == 7) {
            var_992[3] = 73;
        }
        if (var_2920 == 8) {
            var_992[3] = 4;
        }
        if (var_2920 == 9) {
            var_992[3] = 4;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[4] = 138;
        }
        if (var_2920 == 1) {
            var_992[4] = 138;
        }
        if (var_2920 == 2) {
            var_992[4] = 134;
        }
        if (var_2920 == 3) {
            var_992[4] = 134;
        }
        if (var_2920 == 4) {
            var_992[4] = 99;
        }
        if (var_2920 == 5) {
            var_992[4] = 99;
        }
        if (var_2920 == 6) {
            var_992[4] = 119;
        }
        if (var_2920 == 7) {
            var_992[4] = 119;
        }
        if (var_2920 == 8) {
            var_992[4] = 141;
        }
        if (var_2920 == 9) {
            var_992[4] = 141;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[5] = 148;
        }
        if (var_2920 == 1) {
            var_992[5] = 148;
        }
        if (var_2920 == 2) {
            var_992[5] = 71;
        }
        if (var_2920 == 3) {
            var_992[5] = 71;
        }
        if (var_2920 == 4) {
            var_992[5] = 140;
        }
        if (var_2920 == 5) {
            var_992[5] = 140;
        }
        if (var_2920 == 6) {
            var_992[5] = 28;
        }
        if (var_2920 == 7) {
            var_992[5] = 28;
        }
        if (var_2920 == 8) {
            var_992[5] = 12;
        }
        if (var_2920 == 9) {
            var_992[5] = 12;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[6] = 31;
        }
        if (var_2920 == 1) {
            var_992[6] = 27;
        }
        if (var_2920 == 2) {
            var_992[6] = 56;
        }
        if (var_2920 == 3) {
            var_992[6] = 56;
        }
        if (var_2920 == 4) {
            var_992[6] = 131;
        }
        if (var_2920 == 5) {
            var_992[6] = 131;
        }
        if (var_2920 == 6) {
            var_992[6] = 47;
        }
        if (var_2920 == 7) {
            var_992[6] = 47;
        }
        if (var_2920 == 8) {
            var_992[6] = 115;
        }
        if (var_2920 == 9) {
            var_992[6] = 115;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[7] = 46;
        }
        if (var_2920 == 1) {
            var_992[7] = 46;
        }
        if (var_2920 == 2) {
            var_992[7] = 48;
        }
        if (var_2920 == 3) {
            var_992[7] = 48;
        }
        if (var_2920 == 4) {
            var_992[7] = 11;
        }
        if (var_2920 == 5) {
            var_992[7] = 11;
        }
        if (var_2920 == 6) {
            var_992[7] = 35;
        }
        if (var_2920 == 7) {
            var_992[7] = 35;
        }
        if (var_2920 == 8) {
            var_992[7] = 69;
        }
        if (var_2920 == 9) {
            var_992[7] = 69;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[8] = 125;
        }
        if (var_2920 == 1) {
            var_992[8] = 125;
        }
        if (var_2920 == 2) {
            var_992[8] = 38;
        }
        if (var_2920 == 3) {
            var_992[8] = 38;
        }
        if (var_2920 == 4) {
            var_992[8] = 14;
        }
        if (var_2920 == 5) {
            var_992[8] = 14;
        }
        if (var_2920 == 6) {
            var_992[8] = 29;
        }
        if (var_2920 == 7) {
            var_992[8] = 10;
        }
        if (var_2920 == 8) {
            var_992[8] = 10;
        }
        if (var_2920 == 9) {
            var_992[8] = 136;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[9] = 63;
        }
        if (var_2920 == 1) {
            var_992[9] = 63;
        }
        if (var_2920 == 2) {
            var_992[9] = 145;
        }
        if (var_2920 == 3) {
            var_992[9] = 145;
        }
        if (var_2920 == 4) {
            var_992[9] = 78;
        }
        if (var_2920 == 5) {
            var_992[9] = 78;
        }
        if (var_2920 == 6) {
            var_992[9] = 43;
        }
        if (var_2920 == 7) {
            var_992[9] = 43;
        }
        if (var_2920 == 8) {
            var_992[9] = 45;
        }
        if (var_2920 == 9) {
            var_992[9] = 45;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[10] = 72;
        }
        if (var_2920 == 1) {
            var_992[10] = 72;
        }
        if (var_2920 == 2) {
            var_992[10] = 65;
        }
        if (var_2920 == 3) {
            var_992[10] = 65;
        }
        if (var_2920 == 4) {
            var_992[10] = 66;
        }
        if (var_2920 == 5) {
            var_992[10] = 66;
        }
        if (var_2920 == 6) {
            var_992[10] = 123;
        }
        if (var_2920 == 7) {
            var_992[10] = 123;
        }
        if (var_2920 == 8) {
            var_992[10] = 135;
        }
        if (var_2920 == 9) {
            var_992[10] = 135;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[11] = 15;
        }
        if (var_2920 == 1) {
            var_992[11] = 15;
        }
        if (var_2920 == 2) {
            var_992[11] = 80;
        }
        if (var_2920 == 3) {
            var_992[11] = 80;
        }
        if (var_2920 == 4) {
            var_992[11] = 44;
        }
        if (var_2920 == 5) {
            var_992[11] = 44;
        }
        if (var_2920 == 6) {
            var_992[11] = 32;
        }
        if (var_2920 == 7) {
            var_992[11] = 32;
        }
        if (var_2920 == 8) {
            var_992[11] = 113;
        }
        if (var_2920 == 9) {
            var_992[11] = 113;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[12] = 30;
        }
        if (var_2920 == 1) {
            var_992[12] = 30;
        }
        if (var_2920 == 2) {
            var_992[12] = 122;
        }
        if (var_2920 == 3) {
            var_992[12] = 122;
        }
        if (var_2920 == 4) {
            var_992[12] = 121;
        }
        if (var_2920 == 5) {
            var_992[12] = 121;
        }
        if (var_2920 == 6) {
            var_992[12] = 152;
        }
        if (var_2920 == 7) {
            var_992[12] = 152;
        }
        if (var_2920 == 8) {
            var_992[12] = 160;
        }
        if (var_2920 == 9) {
            var_992[12] = 160;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[13] = 157;
        }
        if (var_2920 == 1) {
            var_992[13] = 157;
        }
        if (var_2920 == 2) {
            var_992[13] = 157;
        }
        if (var_2920 == 3) {
            var_992[13] = 156;
        }
        if (var_2920 == 4) {
            var_992[13] = 156;
        }
        if (var_2920 == 5) {
            var_992[13] = 156;
        }
        if (var_2920 == 6) {
            var_992[13] = 86;
        }
        if (var_2920 == 7) {
            var_992[13] = 86;
        }
        if (var_2920 == 8) {
            var_992[13] = 155;
        }
        if (var_2920 == 9) {
            var_992[13] = 155;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[14] = 158;
        }
        if (var_2920 == 1) {
            var_992[14] = 158;
        }
        if (var_2920 == 2) {
            var_992[14] = 158;
        }
        if (var_2920 == 3) {
            var_992[14] = 68;
        }
        if (var_2920 == 4) {
            var_992[14] = 68;
        }
        if (var_2920 == 5) {
            var_992[14] = 68;
        }
        if (var_2920 == 6) {
            var_992[14] = 128;
        }
        if (var_2920 == 7) {
            var_992[14] = 128;
        }
        if (var_2920 == 8) {
            var_992[14] = 21;
        }
        if (var_2920 == 9) {
            var_992[14] = 21;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[15] = 87;
        }
        if (var_2920 == 1) {
            var_992[15] = 87;
        }
        if (var_2920 == 2) {
            var_992[15] = 87;
        }
        if (var_2920 == 3) {
            var_992[15] = 150;
        }
        if (var_2920 == 4) {
            var_992[15] = 150;
        }
        if (var_2920 == 5) {
            var_992[15] = 150;
        }
        if (var_2920 == 6) {
            var_992[15] = 150;
        }
        if (var_2920 == 7) {
            var_992[15] = 67;
        }
        if (var_2920 == 8) {
            var_992[15] = 67;
        }
        if (var_2920 == 9) {
            var_992[15] = 67;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[16] = 110;
        }
        if (var_2920 == 1) {
            var_992[16] = 110;
        }
        if (var_2920 == 2) {
            var_992[16] = 110;
        }
        if (var_2920 == 3) {
            var_992[16] = 110;
        }
        if (var_2920 == 4) {
            var_992[16] = 139;
        }
        if (var_2920 == 5) {
            var_992[16] = 139;
        }
        if (var_2920 == 6) {
            var_992[16] = 139;
        }
        if (var_2920 == 7) {
            var_992[16] = 172;
        }
        if (var_2920 == 8) {
            var_992[16] = 172;
        }
        if (var_2920 == 9) {
            var_992[16] = 172;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[17] = 129;
        }
        if (var_2920 == 1) {
            var_992[17] = 129;
        }
        if (var_2920 == 2) {
            var_992[17] = 129;
        }
        if (var_2920 == 3) {
            var_992[17] = 124;
        }
        if (var_2920 == 4) {
            var_992[17] = 124;
        }
        if (var_2920 == 5) {
            var_992[17] = 137;
        }
        if (var_2920 == 6) {
            var_992[17] = 137;
        }
        if (var_2920 == 7) {
            var_992[17] = 137;
        }
        if (var_2920 == 8) {
            var_992[17] = 126;
        }
        if (var_2920 == 9) {
            var_992[17] = 126;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[18] = 159;
        }
        if (var_2920 == 1) {
            var_992[18] = 159;
        }
        if (var_2920 == 2) {
            var_992[18] = 159;
        }
        if (var_2920 == 3) {
            var_992[18] = 159;
        }
        if (var_2920 == 4) {
            var_992[18] = 151;
        }
        if (var_2920 == 5) {
            var_992[18] = 151;
        }
        if (var_2920 == 6) {
            var_992[18] = 151;
        }
        if (var_2920 == 7) {
            var_992[18] = 133;
        }
        if (var_2920 == 8) {
            var_992[18] = 133;
        }
        if (var_2920 == 9) {
            var_992[18] = 133;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[19] = 120;
        }
        if (var_2920 == 1) {
            var_992[19] = 120;
        }
        if (var_2920 == 2) {
            var_992[19] = 120;
        }
        if (var_2920 == 3) {
            var_992[19] = 120;
        }
        if (var_2920 == 4) {
            var_992[19] = 114;
        }
        if (var_2920 == 5) {
            var_992[19] = 114;
        }
        if (var_2920 == 6) {
            var_992[19] = 114;
        }
        if (var_2920 == 7) {
            var_992[19] = 98;
        }
        if (var_2920 == 8) {
            var_992[19] = 98;
        }
        if (var_2920 == 9) {
            var_992[19] = 98;
        }
        var_2920 = rnd(10);
        if (var_2920 == 0) {
            var_992[20] = 111;
        }
        if (var_2920 == 1) {
            var_992[20] = 111;
        }
        if (var_2920 == 2) {
            var_992[20] = 111;
        }
        if (var_2920 == 3) {
            var_992[20] = 60;
        }
        if (var_2920 == 4) {
            var_992[20] = 60;
        }
        if (var_2920 == 5) {
            var_992[20] = 60;
        }
        if (var_2920 == 6) {
            var_992[20] = 60;
        }
        if (var_2920 == 7) {
            var_992[20] = 64;
        }
        if (var_2920 == 8) {
            var_992[20] = 64;
        }
        if (var_2920 == 9) {
            var_992[20] = 64;
        }
        return;
    });
}
function func633(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(633);
        var_1720 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            if (var_992[var_1720] == var_2921) {
                var_992[var_1720] = 0;
            }
            var_1720++;
        }
        return;
    });
}
function func634(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(634);
        if (current_floor == 1) {
            var_977 = [77, 39, 76, 52, 26, 4, 138, 134, 13, 141, 71, 140];
            var_2917 = rnd(12);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 2) {
            var_977 = [28, 12, 56, 115, 131, 31, 46, 47, 27, 148, 48];
            var_2917 = rnd(11);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 3) {
            var_977 = [99, 46, 136, 14, 17, 35, 38, 95];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 4) {
            var_977 = [45, 85, 43, 59, 145, 84, 125, 72, 65, 123];
            var_2917 = rnd(10);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 5) {
            var_977 = [66, 44, 63, 78, 135, 15, 80, 32, 30, 113];
            var_2917 = rnd(10);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 6) {
            var_977 = [122, 121, 152, 160, 155, 156, 157, 86];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 7) {
            var_977 = [128, 158, 150, 68, 67, 151, 144];
            var_2917 = rnd(7);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 8) {
            var_977 = [110, 109, 87, 139, 153, 124, 127, 154];
            var_2917 = rnd(8);
            var_953 = var_977[var_2917];
        }
        if (current_floor == 9) {
            var_977 = [129, 126, 137, 64, 111, 98, 120, 60, 114, 118];
            var_2917 = rnd(10);
            var_953 = var_977[var_2917];
        }
        if (current_floor >= 10) {
            var_2922 = rnd(10);
            if (var_2922 <= 5) {
                var_2917 = rnd(19);
                if (var_2917 == 0) {
                    var_953 = 129;
                }
                if (var_2917 == 1) {
                    var_953 = 126;
                }
                if (var_2917 == 2) {
                    var_953 = 137;
                }
                if (var_2917 == 3) {
                    var_953 = 64;
                }
                if (var_2917 == 4) {
                    var_953 = 111;
                }
                if (var_2917 == 5) {
                    var_953 = 98;
                }
                if (var_2917 == 6) {
                    var_953 = 120;
                }
                if (var_2917 == 7) {
                    var_953 = 60;
                }
                if (var_2917 == 8) {
                    var_953 = 114;
                }
                if (var_2917 == 9) {
                    var_953 = 87;
                }
                if (var_2917 == 10) {
                    var_953 = 127;
                }
                if (var_2917 == 11) {
                    var_953 = 154;
                }
                if (var_2917 == 12) {
                    var_953 = 160;
                }
                if (var_2917 == 13) {
                    var_953 = 68;
                }
                if (var_2917 == 14) {
                    var_953 = 150;
                }
                if (var_2917 == 15) {
                    var_953 = 161;
                }
                if (var_2917 == 16) {
                    var_953 = 158;
                }
                if (var_2917 == 17) {
                    var_953 = 67;
                }
                if (var_2917 == 18) {
                    var_953 = 159;
                }
            }
            if (var_2922 == 6 || var_2922 == 7 || var_2922 == 8) {
                var_2917 = rnd(28);
                if (var_2917 == 0) {
                    var_953 = 133;
                }
                if (var_2917 == 1) {
                    var_953 = 124;
                }
                if (var_2917 == 2) {
                    var_953 = 151;
                }
                if (var_2917 == 3) {
                    var_953 = 38;
                }
                if (var_2917 == 4) {
                    var_953 = 31;
                }
                if (var_2917 == 5) {
                    var_953 = 148;
                }
                if (var_2917 == 6) {
                    var_953 = 27;
                }
                if (var_2917 == 7) {
                    var_953 = 78;
                }
                if (var_2917 == 8) {
                    var_953 = 135;
                }
                if (var_2917 == 9) {
                    var_953 = 118;
                }
                if (var_2917 == 10) {
                    var_953 = 15;
                }
                if (var_2917 == 11) {
                    var_953 = 80;
                }
                if (var_2917 == 12) {
                    var_953 = 85;
                }
                if (var_2917 == 13) {
                    var_953 = 59;
                }
                if (var_2917 == 14) {
                    var_953 = 115;
                }
                if (var_2917 == 15) {
                    var_953 = 131;
                }
                if (var_2917 == 16) {
                    var_953 = 39;
                }
                if (var_2917 == 17) {
                    var_953 = 26;
                }
                if (var_2917 == 18) {
                    var_953 = 4;
                }
                if (var_2917 == 19) {
                    var_953 = 134;
                }
                if (var_2917 == 20) {
                    var_953 = 72;
                }
                if (var_2917 == 21) {
                    var_953 = 125;
                }
                if (var_2917 == 22) {
                    var_953 = 63;
                }
                if (var_2917 == 23) {
                    var_953 = 153;
                }
                if (var_2917 == 24) {
                    var_953 = 155;
                }
                if (var_2917 == 25) {
                    var_953 = 21;
                }
                if (var_2917 == 26) {
                    var_953 = 29;
                }
                if (var_2917 == 27) {
                    var_953 = 30;
                }
            }
            if (var_2922 == 9) {
                var_2917 = rnd(62);
                if (var_2917 == 0) {
                    var_953 = 79;
                }
                if (var_2917 == 1) {
                    var_953 = 1;
                }
                if (var_2917 == 2) {
                    var_953 = 5;
                }
                if (var_2917 == 3) {
                    var_953 = 88;
                }
                if (var_2917 == 4) {
                    var_953 = 147;
                }
                if (var_2917 == 5) {
                    var_953 = 2;
                }
                if (var_2917 == 6) {
                    var_953 = 93;
                }
                if (var_2917 == 7) {
                    var_953 = 3;
                }
                if (var_2917 == 8) {
                    var_953 = 94;
                }
                if (var_2917 == 9) {
                    var_953 = 77;
                }
                if (var_2917 == 10) {
                    var_953 = 51;
                }
                if (var_2917 == 11) {
                    var_953 = 7;
                }
                if (var_2917 == 12) {
                    var_953 = 9;
                }
                if (var_2917 == 13) {
                    var_953 = 39;
                }
                if (var_2917 == 14) {
                    var_953 = 76;
                }
                if (var_2917 == 15) {
                    var_953 = 6;
                }
                if (var_2917 == 16) {
                    var_953 = 52;
                }
                if (var_2917 == 17) {
                    var_953 = 73;
                }
                if (var_2917 == 18) {
                    var_953 = 101;
                }
                if (var_2917 == 19) {
                    var_953 = 141;
                }
                if (var_2917 == 20) {
                    var_953 = 13;
                }
                if (var_2917 == 21) {
                    var_953 = 119;
                }
                if (var_2917 == 22) {
                    var_953 = 99;
                }
                if (var_2917 == 23) {
                    var_953 = 138;
                }
                if (var_2917 == 24) {
                    var_953 = 71;
                }
                if (var_2917 == 25) {
                    var_953 = 12;
                }
                if (var_2917 == 26) {
                    var_953 = 56;
                }
                if (var_2917 == 27) {
                    var_953 = 140;
                }
                if (var_2917 == 28) {
                    var_953 = 27;
                }
                if (var_2917 == 29) {
                    var_953 = 11;
                }
                if (var_2917 == 30) {
                    var_953 = 28;
                }
                if (var_2917 == 31) {
                    var_953 = 17;
                }
                if (var_2917 == 32) {
                    var_953 = 14;
                }
                if (var_2917 == 33) {
                    var_953 = 69;
                }
                if (var_2917 == 34) {
                    var_953 = 18;
                }
                if (var_2917 == 35) {
                    var_953 = 10;
                }
                if (var_2917 == 36) {
                    var_953 = 84;
                }
                if (var_2917 == 37) {
                    var_953 = 48;
                }
                if (var_2917 == 38) {
                    var_953 = 95;
                }
                if (var_2917 == 39) {
                    var_953 = 43;
                }
                if (var_2917 == 40) {
                    var_953 = 66;
                }
                if (var_2917 == 41) {
                    var_953 = 113;
                }
                if (var_2917 == 42) {
                    var_953 = 123;
                }
                if (var_2917 == 43) {
                    var_953 = 65;
                }
                if (var_2917 == 44) {
                    var_953 = 152;
                }
                if (var_2917 == 45) {
                    var_953 = 86;
                }
                if (var_2917 == 46) {
                    var_953 = 156;
                }
                if (var_2917 == 47) {
                    var_953 = 157;
                }
                if (var_2917 == 48) {
                    var_953 = 128;
                }
                if (var_2917 == 49) {
                    var_953 = 109;
                }
                if (var_2917 == 50) {
                    var_953 = 110;
                }
                if (var_2917 == 51) {
                    var_953 = 139;
                }
                if (var_2917 == 52) {
                    var_953 = 122;
                }
                if (var_2917 == 53) {
                    var_953 = 121;
                }
                if (var_2917 == 54) {
                    var_953 = 35;
                }
                if (var_2917 == 55) {
                    var_953 = 145;
                }
                if (var_2917 == 56) {
                    var_953 = 47;
                }
                if (var_2917 == 57) {
                    var_953 = 46;
                }
                if (var_2917 == 58) {
                    var_953 = 45;
                }
                if (var_2917 == 59) {
                    var_953 = 136;
                }
                if (var_2917 == 60) {
                    var_953 = 144;
                }
                if (var_2917 == 61) {
                    var_953 = 172;
                }
            }
        }
        return;
    });
}
function func635(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(635);
        if (var_357 == 110) {
            var_357 = 108;
        }
        var_2923 = var_357;
        if (equip_disc[101] == 1 && var_2924 == 0) {
            var_2925 = rnd(2);
        }
        var_2926 = 1;
        var_2927 = 0;
        if (sympathy_id == 135) {
            var_341 = 1;
        }
        if (equip_disc[105] == 0) {
            var_1030 = 0;
        }
        yield func636();
    });
}
function func636(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(636);
        var_1194 = 0;
        var_347 = var_66;
        var_348 = var_67;
        if (var_126 == 1) {
            var_288 = rnd(8);
            if (var_288 == 0) {
                var_199 = 4;
            }
            if (var_288 == 1) {
                var_199 = 6;
            }
            if (var_288 == 2) {
                var_199 = 8;
            }
            if (var_288 == 3) {
                var_199 = 2;
            }
            if (var_288 == 4) {
                var_199 = 1;
            }
            if (var_288 == 5) {
                var_199 = 3;
            }
            if (var_288 == 6) {
                var_199 = 7;
            }
            if (var_288 == 7) {
                var_199 = 9;
            }
        }
        if (equip_disc[121] == 1 && var_171 == 0) {
            var_2927 = rnd(6);
            if (var_2927 == 1) {
                var_288 = rnd(8);
                if (var_288 == 0) {
                    var_199 = 4;
                }
                if (var_288 == 1) {
                    var_199 = 6;
                }
                if (var_288 == 2) {
                    var_199 = 8;
                }
                if (var_288 == 3) {
                    var_199 = 2;
                }
                if (var_288 == 4) {
                    var_199 = 1;
                }
                if (var_288 == 5) {
                    var_199 = 3;
                }
                if (var_288 == 6) {
                    var_199 = 7;
                }
                if (var_288 == 7) {
                    var_199 = 9;
                }
            }
        }
        if (var_357 == 100 || var_357 == 398) {
            yield func643();
            if (var_1280 == 1) {
                var_1280 = 0;
                var_243 = 0;
                var_217 = 1;
                yield func637();
                return;
            }
            var_1280 = 0;
        }
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
        var_2928 = var_347 - 1;
        var_2929 = var_347 + 1;
        var_2930 = var_348 + 1;
        var_2931 = var_348 - 1;
        if (var_357 != 108 && var_71[var_66][var_67] != 0) {
            var_2932 = 0;
            if (var_199 == 1 && var_71[var_347][var_67] == 0) {
                var_2932 = 1;
                yield func651();
                return;
            }
            if (var_199 == 1 && var_71[var_66][var_348] == 0) {
                var_2932 = 1;
                yield func651();
                return;
            }
            if (var_199 == 3 && var_71[var_347][var_67] == 0) {
                var_2932 = 1;
                yield func651();
                return;
            }
            if (var_199 == 3 && var_71[var_66][var_348] == 0) {
                var_2932 = 1;
                yield func651();
                return;
            }
            if (var_199 == 7 && var_71[var_347][var_67] == 0) {
                var_2932 = 1;
                yield func651();
                return;
            }
            if (var_199 == 7 && var_71[var_66][var_348] == 0) {
                var_2932 = 1;
                yield func651();
                return;
            }
            if (var_199 == 9 && var_71[var_347][var_67] == 0) {
                var_2932 = 1;
                yield func651();
                return;
            }
            if (var_199 == 9 && var_71[var_66][var_348] == 0) {
                var_2932 = 1;
                yield func651();
                return;
            }
        }
        var_314 = var_82[var_347][var_348];
        if (dangeon_number == 0) {
            if (var_66 == 16 && var_67 == 21 && var_199 == 8) {
                yield func786();
                return;
            }
            if (var_66 == 17 && var_67 == 7 && var_199 == 8) {
                yield func818();
                return;
            }
            if (var_66 == 16 && var_67 == 7 && var_199 == 8) {
                yield func765();
                return;
            }
            if (var_66 == 15 && var_67 == 6 && var_199 == 6) {
                yield func765();
                return;
            }
            if (var_66 == 15 && var_67 == 7 && var_199 == 4) {
                yield func766();
                return;
            }
            if (var_66 == 15 && var_67 == 6 && var_199 == 4) {
                yield func766();
                return;
            }
            if (var_66 == 14 && var_67 == 8 && var_199 == 8) {
                yield func766();
                return;
            }
            if (var_66 == 15 && var_67 == 6 && var_199 == 8) {
                yield func767();
                return;
            }
            if (var_404 == 0 && var_66 == 12 && var_67 == 8 && var_199 == 8) {
                yield func768();
                return;
            }
            if (var_404 == 0 && var_66 == 13 && var_67 == 8 && var_199 == 8) {
                yield func768();
                return;
            }
            if (var_526 >= 1 && var_66 == 12 && var_67 == 8 && var_199 == 8 && var_759 >= 2) {
                yield func832();
                return;
            }
            if (var_526 >= 1 && var_66 == 13 && var_67 == 8 && var_199 == 8 && var_759 >= 2) {
                yield func833();
                return;
            }
        }
        if (var_139 == 0 && var_82[var_347][var_348] != 0) {
            if (var_83[var_314].Var31 == 4 || var_83[var_314].Var31 == 5) {
                if (var_83[var_314].Var12 != 0 || var_83[var_314].Var13 != 0 || var_83[var_314].Var17 != 0) {
                    yield func735();
                    return;
                }
            }
            if (var_163 != 0 || var_123 != 0) {
                if (var_83[var_314].Var31 == 4 || var_83[var_314].Var31 == 5 || var_83[var_314].Var0 == 61) {
                    if (var_83[var_314].Var0 != 50) {
                        yield func735();
                        return;
                    }
                }
            }
            if (var_83[var_314].Var0 == 50) {
                yield func651();
                return;
            }
            if (var_83[var_314].Var0 == 173) {
                yield func640();
                yield func835();
                return;
            }
            if (var_83[var_314].Var0 == 169) {
                yield func640();
                yield func728();
                return;
            }
            if (var_83[var_314].Var0 == 149) {
                yield func640();
                yield func756();
                return;
            }
            if (var_83[var_314].Var0 == 108) {
                yield func640();
                yield func738();
                return;
            }
            if (var_83[var_314].Var0 == 130) {
                yield func640();
                yield func760();
                return;
            }
            if (var_83[var_314].Var0 == 142) {
                yield func640();
                yield func778();
                return;
            }
            if (var_83[var_314].Var0 == 33) {
                yield func640();
                yield func707();
                return;
            }
            if (var_83[var_314].Var0 == 36) {
                yield func640();
                yield func730();
                return;
            }
            if (var_83[var_314].Var0 == 105) {
                yield func640();
                yield func743();
                return;
            }
            if (var_83[var_314].Var0 == 106) {
                yield func640();
                yield func748();
                return;
            }
            if (var_83[var_314].Var0 == 107) {
                yield func640();
                yield func753();
                return;
            }
            if (var_83[var_314].Var0 == 57) {
                yield func640();
                yield func755();
                return;
            }
            if (var_83[var_314].Var0 == 58) {
                yield func640();
                yield func758();
                return;
            }
            if (var_83[var_314].Var0 == 61) {
                yield func640();
                yield func759();
                return;
            }
            if (var_83[var_314].Var0 == 163) {
                yield func794();
                return;
            }
            if (var_83[var_314].Var0 == 70) {
                yield func761();
                return;
            }
            if (var_83[var_314].Var0 == 74) {
                yield func640();
                yield func769();
                return;
            }
            if (var_83[var_314].Var0 == 75) {
                yield func773();
                return;
            }
            if (var_83[var_314].Var0 == 55) {
                yield func640();
                yield func161(); //亀の中に入った時の表示
                return;
            }
            if (var_83[var_314].Var0 == 81) {
                yield func640();
                yield func787();
                return;
            }
            if (var_83[var_314].Var0 == 82) {
                yield func757();
                return;
            }
            if (var_83[var_314].Var0 == 83) {
                yield func640();
                yield func793();
                return;
            }
            if (var_83[var_314].Var0 == 49) {
                yield func640();
                yield func725();
                return;
            }
            if (var_83[var_314].Var31 == 5 && var_83[var_314].Var0 == 6) {
                yield func640();
                yield func726();
                return;
            }
            if (var_83[var_314].Var31 == 5 && var_83[var_314].Var0 == 17) {
                yield func640();
                yield func727();
                return;
            }
            if (var_83[var_314].Var31 == 5) {
                yield func640();
                yield func734();
                return;
            }
        }
        if (var_71[var_347][var_348] == 0) {
            yield func651();
            return;
        }
        if (var_82[var_347][var_348] == 0 && equip_disc[108] == 0) {
            yield func651();
            return;
        }
        if (var_82[var_347][var_348] == 0 && equip_disc[108] == 1) {
            var_2933 = var_347;
            var_2934 = var_348;
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
            if (var_347 < 0) {
                var_347 = 0;
            }
            if (var_347 > var_33) {
                var_347 = var_33;
            }
            if (var_348 < 0) {
                var_348 = 0;
            }
            if (var_348 > var_34) {
                var_348 = var_34;
            }
            var_314 = var_82[var_347][var_348];
            if (var_71[var_347][var_348] == 0 || var_82[var_347][var_348] == 0 || var_83[var_314].Var31 == 4 || var_83[var_314].Var31 == 5) {
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
                yield func651();
                return;
            }
            if (var_80[var_2933][var_2934] > 0) {
                var_2935 = var_80[var_2933][var_2934];
                var_81[var_2935][4] = 1;
            }
            var_357 = 110;
            var_750 = 1;
            var_748 = var_347 - var_66 + 4;
            var_749 = var_348 - var_67 + 4;
        }
        if (equip_disc[318] == 1 && var_83[var_314].Var0 > 0) {
            var_2936 = rnd(8);
            if (var_2936 == 0) {
                var_747 = 1;
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "「ジャンピン・ジャック・フラッシュ！」";
                comments_row2 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_83[var_314].Var17 = 1;
                var_2937 = 1;
                var_455 = var_347;
                var_456 = var_348;
                yield func660();
                var_2937 = 0;
                var_347 = var_1894;
                var_348 = var_1895;
                var_243 = 0;
                var_217 = 1;
                yield func637();
                return;
            }
        }
        if (var_1035 >= 1) {
            var_243 = 0;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "この恨み はらさでおくべきかァ―！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_243 = 1;
        }
        if (var_143 >= 1) {
            var_314 = var_82[var_347][var_348];
            enemy_list = var_83[var_314].Var0;
            yield func626();
            var_2267[8] = var_2267[7];
            var_2267[7] = var_2267[6];
            var_2267[6] = var_2267[5];
            var_2267[5] = var_2267[4];
            var_2267[4] = var_2267[3];
            var_2267[3] = var_2267[2];
            var_2267[2] = var_2267[1];
            var_2267[1] = var_2267[0];
            var_2267[0] = var_83[var_314].Var0;
            if (var_2267[0] != 0 && var_2267[0] == var_2267[1]) {
                var_143 = 2;
            }
            if (var_143 == 2 && var_2267[1] == var_2267[2]) {
                var_143 = 3;
            }
            if (var_143 == 3 && var_2267[2] == var_2267[3]) {
                var_143 = 4;
            }
            if (var_143 == 4 && var_2267[3] == var_2267[4]) {
                var_143 = 5;
            }
            if (var_143 == 5 && var_2267[4] == var_2267[5]) {
                var_143 = 6;
            }
            if (var_143 == 6 && var_2267[5] == var_2267[6]) {
                var_143 = 7;
            }
            if (var_143 == 7 && var_2267[6] == var_2267[7]) {
                var_143 = 8;
            }
            if (var_143 == 8 && var_2267[7] == var_2267[8]) {
                var_143 = 9;
            }
            if (var_2267[0] != 0 && var_2267[0] != var_2267[1]) {
                var_143 = 1;
            }
            if (var_143 >= 2) {
                var_243 = 0;
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                yield func094();
                if (var_143 == 2) {
                    comments_row1 = "きさまの 動きやパワーは";
                    comments_row2 = "さっきしっかり とりこんだ！";
                }
                if (var_143 == 3) {
                    comments_row1 = "ウシャア―――――――ッ！！";
                    comments_row2 = "";
                }
                if (var_143 == 4) {
                    comments_row1 = "絶っ～～～～～～～～～対に！";
                    comments_row2 = "負けなあああああああいィィィ";
                }
                if (var_143 == 5) {
                    comments_row1 = "さすが" + enemy_name + "…";
                    comments_row2 = "しかしその動き… スデに憶えた！";
                }
                if (var_143 == 6) {
                    comments_row1 = "さて～～～　今度の攻撃には";
                    comments_row2 = "\t耐えられるかな？";
                }
                if (var_143 == 7) {
                    comments_row1 = "ウシャアアアアアア―――ッ";
                    comments_row2 = "死ねエエエイ――っ！！";
                }
                if (var_143 == 8) {
                    comments_row1 = "とどめの とっておきのダメ押しだッ！";
                    comments_row2 = "";
                }
                if (var_143 == 9) {
                    comments_row1 = "この首 もらったァ―――ッ!!";
                    comments_row2 = "";
                }
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_243 = 1;
            }
        }
        yield func639();
        if (var_2867 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛの攻撃は外れた";
            if (var_2938 == 1) {
                comments_row1 = "ヒラリと攻撃をかわされた";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_2939 = 1;
            if (equip_disc[105] == 1) {
                var_1030 = var_1030 + 1;
            }
            yield func651();
            return;
        }
        if (var_83[var_314].Var0 == 152) {
            var_2936 = rnd(4);
            if (var_2936 == 0) {
                var_243 = 1;
                yield func089();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                if (var_83[var_314].Var0 != 79 && var_83[var_314].Var23 == 0) {
                    if (var_83[var_314].Var1 == var_66 && var_83[var_314].Var2 > var_67) {
                        var_83[var_314].Var5 = 8;
                    }
                    if (var_83[var_314].Var1 == var_66 && var_83[var_314].Var2 < var_67) {
                        var_83[var_314].Var5 = 2;
                    }
                    if (var_83[var_314].Var1 < var_66 && var_83[var_314].Var2 == var_67) {
                        var_83[var_314].Var5 = 6;
                    }
                    if (var_83[var_314].Var1 > var_66 && var_83[var_314].Var2 == var_67) {
                        var_83[var_314].Var5 = 4;
                    }
                    if (var_83[var_314].Var1 > var_66 && var_83[var_314].Var2 > var_67) {
                        var_83[var_314].Var5 = 7;
                    }
                    if (var_83[var_314].Var1 < var_66 && var_83[var_314].Var2 > var_67) {
                        var_83[var_314].Var5 = 9;
                    }
                    if (var_83[var_314].Var1 > var_66 && var_83[var_314].Var2 < var_67) {
                        var_83[var_314].Var5 = 1;
                    }
                    if (var_83[var_314].Var1 < var_66 && var_83[var_314].Var2 < var_67) {
                        var_83[var_314].Var5 = 3;
                    }
                }
                yield func091();
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "ﾄﾘｯｼｭはｺﾞﾑのように柔らかくなっている！";
                comments_row2 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_243 = 0;
                yield func529();
                var_217 = 1;
                yield func637();
                return;
            }
        }
        var_314 = var_82[var_347][var_348];
        enemy_list = var_83[var_314].Var0;
        yield func626();
        yield func638();
        var_2940 = rnd(22);
        if (var_162 == 1) {
            if (var_2940 == 1 || var_2940 == 2) {
                var_2940 = 0;
            }
        }
        if (equip_disc[106] == 1 && var_2940 == 1) {
            var_2940 = 0;
        }
        if (var_357 == 104 && var_129 == 0) {
            var_2940 = 0;
        }
        if (var_2927 == 1) {
            var_2940 = 0;
        }
        if (var_357 == 106 && var_139 >= 1) {
            var_2940 = 0;
        }
        if (equip_disc[105] == 1 && var_1030 >= 2) {
            var_2940 = 0;
        }
        if (var_2940 == 0) {
            var_209 = var_209 * 2;
            var_1194 = 1;
        }
        if (var_357 == 123 && var_2940 == 0 && var_83[var_314].Var0 != 33 && var_83[var_314].Var0 != 34 && var_83[var_314].Var0 != 132 && var_83[var_314].Var0 != 143) {
            var_209 = 999;
        }
        var_2927 = 0;
        if (var_1194 == 1 && var_162 == 1) {
            var_2941 = 0;
            var_243 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_2915 = rnd(5);
            yield func094();
            if (var_2915 == 0) {
                comments_row1 = "なにかわからんが喰らえッ！";
                comments_row2 = "";
            }
            if (var_2915 == 1) {
                comments_row1 = "帝王はこのディアボロだッ！";
                comments_row2 = "";
            }
            if (var_2915 == 2) {
                comments_row1 = "お前はわたしを本気で怒らせたッ！！";
                comments_row2 = "";
            }
            if (var_2915 == 3) {
                comments_row1 = "とどめだァ――――ッ！";
                comments_row2 = "";
            }
            if (var_2915 == 4) {
                comments_row1 = "死んだことを後悔する時間をも";
                comments_row2 = "与えんッ！！";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_243 = 1;
        }
        var_83[var_314].Var3 = var_83[var_314].Var3 - var_209;
        var_243 = 1;
        yield func089();
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_83[var_314].Var0 != 79 && var_83[var_314].Var23 == 0) {
            var_2942 = var_83[var_314].Var5;
            if (var_83[var_314].Var1 == var_66 && var_83[var_314].Var2 > var_67) {
                var_83[var_314].Var5 = 8;
            }
            if (var_83[var_314].Var1 == var_66 && var_83[var_314].Var2 < var_67) {
                var_83[var_314].Var5 = 2;
            }
            if (var_83[var_314].Var1 < var_66 && var_83[var_314].Var2 == var_67) {
                var_83[var_314].Var5 = 6;
            }
            if (var_83[var_314].Var1 > var_66 && var_83[var_314].Var2 == var_67) {
                var_83[var_314].Var5 = 4;
            }
            if (var_83[var_314].Var1 > var_66 && var_83[var_314].Var2 > var_67) {
                var_83[var_314].Var5 = 7;
            }
            if (var_83[var_314].Var1 < var_66 && var_83[var_314].Var2 > var_67) {
                var_83[var_314].Var5 = 9;
            }
            if (var_83[var_314].Var1 > var_66 && var_83[var_314].Var2 < var_67) {
                var_83[var_314].Var5 = 1;
            }
            if (var_83[var_314].Var1 < var_66 && var_83[var_314].Var2 < var_67) {
                var_83[var_314].Var5 = 3;
            }
        }
        yield func091();
        var_747 = 1;
        var_83[var_314].Var8 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            var_83[var_314].Var8 = 0;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 1;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_314 = var_82[var_347][var_348];
        enemy_list = var_83[var_314].Var0;
        if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
            enemy_list = var_83[var_314].Var31;
        }
        yield func626();
        var_2943 = enemy_name;
        var_1030 = 0;
        if (var_127 != 0 || var_132 != 0) {
            enemy_name = "何者か";
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾃﾞｨｱﾎﾞﾛは" + enemy_name + "に";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        if (var_1194 == 1) {
            var_25_x = var_25[6];
            var_26_x = var_26[6];
            var_27_x = var_27[6];
        }
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        comments_row2 = "" + var_209 + "のダメージ！";
        if (var_209 == 999) {
            comments_row2 = "致命的なダメージ！";
        }
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func337(); // メッセージ関係呼び出し
        if (var_83[var_314].Var0 == 159 && var_83[var_314].Var20 == 0) {
            var_1550 = var_83[var_314].Var1;
            var_230 = var_83[var_314].Var2;
            var_2413 = 1;
            var_768 = 1;
            var_2434 = 1;
            yield func536();
            var_768 = 0;
            var_2434 = 0;
            var_2413 = 0;
        }
        if (equip_disc[313] == 1 && var_211 != var_352 && var_209 != 0) {
            var_2944 = rnd(8);
            if (var_2944 == 0 || var_1194 == 1) {
        
                DSPLAY(audio_id = 161);
                var_1299 = 0;
                var_271 = 1;
                var_1297 = 1;
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                    var_1297++;
                }
                var_271 = 0;
                var_1297 = 0;
                var_211 = var_211 + var_209;
                if (var_211 >= var_352) {
                    var_211 = var_352;
                }
                comments_row1a = "" + var_209 + "の養分を吸収した。";
                comments_row2a = "";
                var_2945 = enemy_list;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
        }
        if (var_83[var_314].Var0 == 61 && var_139 >= 1) {
            var_139 = 0;
            yield func038();
        }
        if (var_83[var_314].Var0 == 101 || var_83[var_314].Var0 == 102 || var_83[var_314].Var0 == 103 || var_83[var_314].Var0 == 104) {
            var_2946 = var_83[var_314].Var0;
            var_2947 = var_83[var_314].Var1;
            var_2948 = var_83[var_314].Var2;
            var_2949 = var_83[var_314].Var1 + 1;
            var_2950 = var_83[var_314].Var2 + 1;
            var_2951 = var_83[var_314].Var1 - 1;
            var_2952 = var_83[var_314].Var2 - 1;
        }
        if (var_83[var_314].Var0 == 13 && var_83[var_314].Var13 == 0 && var_83[var_314].Var12 == 0 && var_83[var_314].Var20 == 0 && var_410 != 409) {
            var_2953 = rnd(4);
            if (var_2953 == 0) {
                var_83[var_314].Var8 = 1;
                yield func623();
                var_83[var_314].Var8 = 0;
            }
        }
        if (equip_disc[317] == 1 && var_83[var_314].Var0 != 13 && var_83[var_314].Var0 != 143 && var_83[var_314].Var0 != 132 && var_83[var_314].Var0 != 20 && var_83[var_314].Var31 != 4 && var_83[var_314].Var31 != 5) {
            var_2953 = rnd(8);
            if (var_2953 == 0) {
                var_1374 = var_83[var_314].Var0;
                if (var_1374 == 19) {
                    var_1374 = 90;
                }
                if (var_1374 == 96) {
                    var_1374 = 93;
                }
                var_2489 = var_83[var_314].Var5;
                var_83[var_314].Var8 = 1;
                yield func624();
                var_83[var_314].Var8 = 0;
                var_1374 = 0;
            }
        }
        var_314 = var_82[var_347][var_348];
        enemy_list = var_83[var_314].Var0;
        yield func626();
        if (var_83[var_314].Var3 <= 0) {
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && var_83[var_314].Var0 == 20) {
                yield func685();
            }
            // No = 2 なので、レクイエムの大迷宮
            if (dangeon_number == 2 && var_83[var_314].Var0 == 132) {
                yield func686();
            }
            // No = 3 なので、ディアボロの試練
            if (dangeon_number == 3 && var_83[var_314].Var0 == 143) {
                yield func687();
            }
            if (dangeon_number == 5 && var_83[var_314].Var16 >= 1000) {
                var_2921 = var_83[var_314].Var0;
                yield func633();
            }
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                var_83[var_314].Var11 = 1;
                yield func337(); // メッセージ関係呼び出し
                var_83[var_314].Var11 = 0;
                var_83[var_314].Var8 = 1;
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_114 >= 1 && var_314 == var_114) {
                var_114 = 0;
            }
            var_83[var_314].Var11 = 1;
            if (var_83[var_314].Var27 != 0) {
                var_2954 = var_83[var_314].Var27;
                var_83[var_2954].Var28 = 0;
            }
            var_442 = var_83[var_314].Var1;
            var_443 = var_83[var_314].Var2;
            var_83[var_314].Var1 = 0;
            var_83[var_314].Var2 = 0;
            if (var_83[var_314].Var0 == 73 && var_83[var_314].Var20 == 0) {
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
            if (equip_disc[307] == 1) {
                var_2955 = rnd(2);
                if (var_2955 == 1) {
                    var_2263 = var_83[var_314].Var0;
                }
            }
            yield func676();
            yield func340(); // キー入力による選択処理
            var_314 = var_82[var_347][var_348];
            enemy_list = var_83[var_314].Var0;
            yield func626();
            var_2956 = var_954;
            if (var_83[var_314].Var39 >= 2) {
                var_2956 = Math.floor(var_2956 * (var_83[var_314].Var39 + 10) / 10);
            }
            if (var_160 == 1) {
                var_2956 = Math.floor(var_2956 * 3 / 2);
            }
            if (var_127 != 0 || var_132 != 0) {
                enemy_name = "何者か";
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + enemy_name + "をやっつけた";
            comments_row2a = "" + var_2956 + "の経験値を手に入れた";
            var_2945 = enemy_list;
            var_1034 = enemy_list;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && var_83[var_314].Var0 == 20) {
                yield func689();
            }
            // No = 2 なので、レクイエムの大迷宮
            if (dangeon_number == 2 && var_83[var_314].Var0 == 132) {
                yield func689();
            }
            // No = 3 なので、ディアボロの試練
            if (dangeon_number == 3 && var_83[var_314].Var0 == 143) {
                yield func689();
            }
            if (var_94 == 1 && var_83[var_314].Var0 == 65) {
                yield func688();
            }
            if (var_175 >= 1 || var_176 >= 1) {
                yield func703();
            }
            if (var_83[var_314].Var20 == 0) {
                if (var_83[var_314].Var0 == 79) {
                    var_2957 = 1;
                    var_2958 = var_83[var_314].Var5;
                }
                if (var_83[var_314].Var0 == 91) {
                    var_2957 = 2;
                }
                if (var_83[var_314].Var0 == 92) {
                    var_2957 = 3;
                }
                if (var_83[var_314].Var0 == 77) {
                    var_2957 = 4;
                }
                if (var_83[var_314].Var0 == 76) {
                    var_2957 = 5;
                }
                if (var_83[var_314].Var0 == 76 || var_83[var_314].Var0 == 77) {
                    if (dangeon_number == 99) {
                        var_2959 = 0;
                        if (var_83[var_314].Var16 == 1) {
                            var_2959 = 1;
                        }
                        if (var_83[var_314].Var16 == 2) {
                            var_2959 = 2;
                        }
                    }
                }
                if (var_83[var_314].Var0 == 163) {
                    var_2538 = var_83[var_314].Var5;
                }
                if (var_83[var_314].Var0 == 6 && var_83[var_314].Var31 != 5) {
                    var_186 = 165;
                    yield func692();
                }
                if (var_83[var_314].Var0 == 87) {
                    var_186 = 164;
                    yield func692();
                }
            }
            var_82[var_347][var_348] = 0;
            var_83[var_314].Var0 = 0;
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_568 = var_568 + var_2956;
            yield func680();
            if (var_2957 >= 1) {
                yield func690();
            }
            if (var_2538 >= 1) {
                yield func691();
            }
        }
        var_83[var_314].Var8 = 0;
        if (var_83[var_314].Var13 != 0) {
            var_460 = var_314;
            yield func024();
        }
        if (var_83[var_314].Var12 == 99) {
            var_83[var_314].Var12 = 0;
        }
        if (var_83[var_314].Var0 != 0) {
            var_2960 = 0;
            var_2961 = 0;
            var_2962 = 0;
            if (var_83[var_314].Var14 == 0 && equip_disc[103] == 1) {
                var_2963 = rnd(8);
                if (var_2963 == 0 || var_1194 == 1) {
            
                    DSPLAY(audio_id = 162);
                    var_2960 = 1;
                    if (var_83[var_314].Var15 == 0) {
                        var_83[var_314].Var14 = 1;
                    }
                    if (var_83[var_314].Var15 != 0) {
                        var_83[var_314].Var14 = 0;
                        var_83[var_314].Var15 = 0;
                    }
                }
            }
            if (var_83[var_314].Var20 != 2 && equip_disc[319] == 1) {
                var_2963 = rnd(8);
                if (var_2963 == 0 || var_1194 == 1) {
                    var_2961 = 1;
            
                    DSPLAY(audio_id = 226);
                    if (var_83[var_314].Var20 == 1) {
                        var_83[var_314].Var20 = 2;
                    }
                    if (var_83[var_314].Var20 == 0) {
                        var_83[var_314].Var20 = 1;
                    }
                    if (var_83[var_314].Var12 == 99) {
                        var_83[var_2964].Var12 = 0;
                    }
                    var_83[var_314].Var15 = 0;
                    var_83[var_314].Var30 = 0;
                    if (var_83[var_314].Var0 == 97) {
                        var_83[var_314].Var31 = 0;
                    }
                    if (var_114 == var_314) {
                        var_114 = 0;
                    }
                }
            }
            if (var_83[var_314].Var13 == 0 && equip_disc[202] == 1) {
                var_2963 = rnd(8);
                if (var_2963 == 0 || var_1194 == 1) {
                    var_2962 = 1;
            
                    DSPLAY(audio_id = 126);
                    var_83[var_314].Var13 = 1;
                    if (var_114 == var_314) {
                        var_114 = 0;
                    }
                }
            }
            if (var_2960 == 1 || var_2961 == 1 || var_2962 == 1) {
                for (let cnt3 = 0; cnt3 < 8; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                if (var_2960 == 1 && var_2961 == 0 && var_2962 == 0) {
                    comments_row1a = "" + var_2943 + "を重くした！";
                    comments_row2a = "";
                }
                if (var_2960 == 1 && var_2961 == 1 && var_2962 == 0) {
                    comments_row1a = "" + var_2943 + "を";
                    comments_row2a = "重くして能力を封じた！";
                    if (var_83[var_314].Var20 == 2) {
                        comments_row2a = "重くして攻撃を封じた！";
                    }
                }
                if (var_2960 == 1 && var_2961 == 0 && var_2962 == 1) {
                    comments_row1a = "" + var_2943 + "を";
                    comments_row2a = "重くして凍らせた！";
                }
                if (var_2960 == 1 && var_2961 == 1 && var_2962 == 1) {
                    comments_row1a = "" + var_2943 + "を";
                    comments_row2a = "重くして能力を封じて凍らせた！";
                    if (var_83[var_314].Var20 == 2) {
                        comments_row2a = "重くして攻撃を封じて凍らせた！";
                    }
                }
                if (var_2960 == 0 && var_2961 == 1 && var_2962 == 0) {
                    comments_row1a = "" + var_2943 + "の能力を封じた！";
                    comments_row2a = "";
                    if (var_83[var_314].Var20 == 2) {
                        comments_row1a = "" + var_2943 + "の攻撃を封じた！";
                        comments_row2a = "";
                    }
                }
                if (var_2960 == 0 && var_2961 == 1 && var_2962 == 1) {
                    comments_row1a = "" + var_2943 + "の";
                    comments_row2a = "能力を封じて凍らせた！";
                    if (var_83[var_314].Var20 == 2) {
                        comments_row2a = "攻撃を封じて凍らせた！";
                    }
                }
                if (var_2960 == 0 && var_2961 == 0 && var_2962 == 1) {
                    comments_row1a = "" + var_2943 + "を凍らせた！";
                    comments_row2a = "";
                }
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
        }
        var_1194 = 0;
        if (var_83[var_314].Var20 == 0 && var_83[var_314].Var12 == 0 && var_83[var_314].Var13 == 0 && var_83[var_314].Var17 == 0 && var_163 == 0 && var_123 == 0 && var_151 == 0) {
            if (var_83[var_314].Var0 == 121 && var_83[var_314].Var29 == 1) {
                yield func658();
            }
            if (var_83[var_314].Var0 == 6 || var_83[var_314].Var0 == 44 || var_83[var_314].Var0 == 14 || var_83[var_314].Var0 == 120 || var_83[var_314].Var0 == 133 || var_83[var_314].Var0 == 118 || var_83[var_314].Var0 == 161 || var_83[var_314].Var0 == 109) {
                yield func658();
            }
            if (var_83[var_314].Var0 == 9 || var_83[var_314].Var0 == 10 || var_83[var_314].Var0 == 84 || var_83[var_314].Var0 == 139 || var_83[var_314].Var0 == 138 || var_83[var_314].Var0 == 86 || var_83[var_314].Var0 == 129 || var_83[var_314].Var0 == 137 || var_83[var_314].Var0 == 143) {
                yield func658();
            }
            if (var_83[var_314].Var0 == 153) {
                yield func658();
            }
            if (var_83[var_314].Var0 == 116) {
                yield func657();
            }
            if (var_83[var_314].Var0 == 17 && var_83[var_314].Var3 < 2) {
                var_2890 = var_314;
                yield func698();
            }
            if (var_83[var_314].Var0 == 164 || var_83[var_314].Var0 == 165) {
                var_1073 = rnd(3);
                if (var_1073 == 0) {
                    var_2965 = 1;
                    yield func669();
                }
            }
        }
        if (var_83[var_314].Var0 == 132 || var_83[var_314].Var0 == 143) {
            yield func659();
        }
        if (var_83[var_314].Var0 == 116 && var_139 >= 1) {
            var_139 = 0;
            yield func039();
        }
        if (var_83[var_314].Var0 == 33) {
            var_83[var_314].Var0 = 34;
            var_83[var_314].Var31 = 1;
        }
        if (var_2946 == 101 || var_2946 == 102 || var_2946 == 103 || var_2946 == 104) {
            if (var_83[var_314].Var20 == 0 && var_83[var_314].Var12 != 1 && var_83[var_314].Var12 != 2 && var_83[var_314].Var12 != 3 && var_83[var_314].Var12 != 4 && var_83[var_314].Var12 != 5) {
                yield func702();
            }
        }
        var_217 = 1;
        if (var_357 == 110) {
            var_357 = 108;
            var_750 = 0;
        }
        if (equip_disc[101] == 1 && var_2925 == 0 && var_83[var_314].Var0 > 0 && var_2924 == 0 && var_2965 == 0 && var_128 == 0 && var_178 == 0) {
            var_2966 = var_83[var_314].Var1;
            var_2967 = var_83[var_314].Var2;
            if (var_82[var_2966][var_2967] != 0) {
                var_2925 = 1;
                var_243 = 1;
                yield func636();
                return;
            }
        }
        if (sympathy_id == 135 && var_341 == 1 && var_83[var_314].Var0 > 0 && var_2924 == 0 && var_2965 == 0) {
            var_2966 = var_83[var_314].Var1;
            var_2967 = var_83[var_314].Var2;
            if (var_82[var_2966][var_2967] != 0 && var_128 == 0 && var_178 == 0) {
                if (var_357 == 101) {
                    var_341 = 2;
                    var_243 = 1;
                    var_357 = 122;
                    yield func636();
                    return;
                }
                if (var_357 == 122) {
                    var_341 = 2;
                    var_243 = 1;
                    var_357 = 101;
                    yield func636();
                    return;
                }
            }
        }
        var_2924 = 0;
        var_2965 = 0;
        if (var_357 == 122 || var_357 == 101) {
            var_357 = var_2923;
        }
        if (var_83[var_314].Var0 > 0 && var_83[var_314].Var4 == 6) {
            var_83[var_314].Var5 = var_2942;
        }
        if (var_83[var_314].Var0 == 164 || var_83[var_314].Var0 == 165) {
            var_83[var_314].Var5 = var_2942;
        }
        if (equip_disc[120] == 1 && var_2926 == 1 && var_128 == 0 && var_178 == 0) {
            if (var_357 != 100 && var_357 != 398) {
                var_2926 = 0;
                yield func641();
                if (var_2968 == 1) {
                    var_2968 = 0;
                    var_243 = 1;
                    yield func636();
                    return;
                }
            }
            if (var_357 == 100 || var_357 == 398) {
                var_2926 = 0;
                yield func642();
                if (var_2968 == 1) {
                    var_2968 = 0;
                    var_243 = 1;
                    yield func636();
                    return;
                }
            }
        }
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func637(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(637);
        var_217 = 1;
        var_2965 = 0;
        if (equip_disc[101] == 1 && var_2925 == 0 && var_83[var_314].Var0 > 0 && var_2924 == 0 && var_2965 == 0 && var_128 == 0 && var_178 == 0) {
            var_2966 = var_83[var_314].Var1;
            var_2967 = var_83[var_314].Var2;
            if (var_82[var_2966][var_2967] != 0) {
                var_2925 = 1;
                var_243 = 1;
                yield func636();
                return;
            }
        }
        if (sympathy_id == 135 && var_341 == 1 && var_83[var_314].Var0 > 0 && var_2924 == 0 && var_2965 == 0 && var_128 == 0 && var_178 == 0) {
            var_2966 = var_83[var_314].Var1;
            var_2967 = var_83[var_314].Var2;
            if (var_82[var_2966][var_2967] != 0) {
                if (var_357 == 101) {
                    var_341 = 2;
                    var_243 = 1;
                    var_357 = 122;
                    yield func636();
                    return;
                }
                if (var_357 == 122) {
                    var_341 = 2;
                    var_243 = 1;
                    var_357 = 101;
                    yield func636();
                    return;
                }
            }
        }
        if (var_357 == 122 || var_357 == 101) {
            var_357 = var_2923;
        }
        if (var_83[var_314].Var0 > 0 && var_83[var_314].Var4 == 6) {
            var_83[var_314].Var5 = var_2942;
        }
        if (var_83[var_314].Var0 == 164 || var_83[var_314].Var0 == 165) {
            var_83[var_314].Var5 = var_2942;
        }
        if (equip_disc[120] == 1 && var_2926 == 1 && var_128 == 0 && var_178 == 0) {
            var_2926 = 0;
            yield func642();
            if (var_2968 == 1) {
                var_2968 = 0;
                var_243 = 1;
                yield func636();
                return;
            }
        }
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func638(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(638);
        if (var_83[var_314].Var39 >= 2) {
            if (var_83[var_314].Var31 == 4 || var_83[var_314].Var31 == 5) {
                enemy_defence = Math.floor(enemy_defence * (var_83[var_314].Var39 * 2 + 10) / 10);
            }
        }
        if (equip_disc[206] == 1) {
            var_1073 = rnd(8);
            if (var_1073 == 0) {
                enemy_defence = Math.floor(enemy_defence / 2);
                var_1193 = 1;
            }
        }
        yield func679();
        var_949 = Math.floor(var_950 * (var_580 + var_565 - 8) / 16) + var_950;
        var_951 = var_949;
        for (let cnt1 = 0; cnt1 < enemy_defence; ++cnt1) {
            var_949 = Math.floor(var_949 * 15 / 16);
        }
        var_2817 = rnd(33);
        var_2817 = var_2817 + 111;
        var_209 = Math.floor(var_949 * var_2817 / 128);
        if (equip_disc[117] == 1) {
            yield func645();
        }
        if (var_143 >= 2) {
            var_209 = var_209 + Math.floor(var_143 * var_209 / 5);
        }
        if (equip_disc[399] == 1) {
            var_209 = Math.floor(var_209 * 3 / 2);
        }
        if (equip_disc[111] == 1) {
            var_1337 = var_83[var_314].Var0;
            if (var_1337 == 147 || var_1337 == 134 || var_1337 == 119 || var_1337 == 35 || var_1337 == 135 || var_1337 == 120 || var_1337 == 128 || var_1337 == 140 || var_1337 == 68 || var_1337 == 131 || var_1337 == 132) {
                var_209 = Math.floor(var_209 * 3 / 2);
            }
        }
        if (equip_disc[114] == 1) {
            var_1337 = var_83[var_314].Var0;
            if (var_1337 == 141 || var_1337 == 134 || var_1337 == 99 || var_1337 == 72 || var_1337 == 80 || var_1337 == 148 || var_1337 == 153 || var_1337 == 154 || var_1337 == 156 || var_1337 == 157 || var_1337 == 159 || var_1337 == 93 || var_1337 == 96 || var_1337 == 98) {
                var_209 = Math.floor(var_209 * 3 / 2);
            }
        }
        if (equip_disc[369] == 1) {
            var_1337 = var_83[var_314].Var0;
            if (var_1337 == 62 || var_1337 == 63 || var_1337 == 85 || var_1337 == 64 || var_1337 == 106 || var_1337 == 107) {
                var_209 = Math.floor(var_209 * 3 / 2);
            }
        }
        if (equip_disc[370] == 1) {
            var_1337 = var_83[var_314].Var0;
            if (var_1337 == 27 || var_1337 == 97 || var_1337 == 58 || var_1337 == 14 || var_1337 == 15 || var_1337 == 38 || var_1337 == 155 || var_1337 == 129) {
                var_209 = Math.floor(var_209 * 3 / 2);
            }
        }
        if (equip_disc[112] == 1) {
            if (var_83[var_314].Var31 == 6 || var_83[var_314].Var31 == 7 || var_83[var_314].Var31 == 8) {
                var_209 = Math.floor(var_209 * 3 / 2);
            }
        }
        if (equip_disc[102] == 1) {
            if (var_83[var_314].Var31 == 9 || var_83[var_314].Var31 == 10) {
                var_209 = Math.floor(var_209 * 3 / 2);
            }
        }
        if (equip_disc[116] == 1 && var_83[var_314].Var31 == 2) {
            var_209 = Math.floor(var_209 * 3 / 2);
        }
        if (equip_disc[124] == 1 && var_83[var_314].Var0 == 131) {
            var_209 = Math.floor(var_209 * 3 / 2);
        }
        if (equip_disc[124] == 1 && var_83[var_314].Var0 == 132) {
            var_209 = Math.floor(var_209 * 3 / 2);
        }
        if (var_125 == 1 && var_83[var_314].Var31 == 2) {
            var_209 = Math.floor(var_209 * 3 / 2);
        }
        if (var_104 == 1) {
            var_209 = Math.floor((var_209 + var_209 + var_209) / 2);
        }
        if (var_109 == 1) {
            var_209 = Math.floor((var_209 + var_209) / 3);
        }
        if (var_83[var_314].Var13 >= 1 && var_83[var_314].Var13 != 99) {
            var_209 = Math.floor(var_209 * 3 / 2);
        }
        if (var_83[var_314].Var0 == 73 && var_83[var_314].Var13 >= 1 && var_83[var_314].Var13 != 99) {
            var_209 = 999;
        }
        if (var_209 < 1) {
            var_209 = 1;
        }
        if (var_143 >= 5 && var_209 == 1) {
            var_209 = 2;
        }
        if (var_182 == 1) {
            var_209 = var_209 * 2;
        }
        if (equip_disc[308] == 1 && var_83[var_314].Var0 == var_831 && var_83[var_314].Var0 != 0) {
            var_209 = var_209 * 2;
        }
        if (var_1035 >= 1) {
            var_209 = var_209 * 2;
            var_1035 = 0;
        }
        if (var_209 >= 65525) {
            var_209 = 65525;
        }
        return;
    });
}
function func639(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(639);
        var_2867 = rnd(12);
        var_2938 = 0;
        if (var_129 == 0) {
            if (var_357 == 104 && var_111 == 0) {
                if (var_2867 == 1 || var_2867 == 2 || var_2867 == 3 || var_2867 == 4 || var_2867 == 5) {
                    var_2867 = 0;
                }
            }
            if (var_357 == 104 && var_111 == 1) {
                if (var_2867 == 1 || var_2867 == 2 || var_2867 == 3) {
                    var_2867 = 0;
                }
            }
        }
        if (var_83[var_314].Var0 == 72 || var_83[var_314].Var0 == 88 || var_83[var_314].Var0 == 99) {
            if (var_83[var_314].Var20 == 0 && equip_disc[366] == 0) {
                if (var_2867 == 1 || var_2867 == 2 || var_2867 == 3) {
                    var_2867 = 0;
                    var_2938 = 1;
                }
            }
        }
        if (var_357 != 104) {
            if (var_111 == 1 || var_83[var_314].Var12 != 0 || var_83[var_314].Var13 != 0) {
                var_2867 = 1;
                var_2938 = 0;
            }
        }
        if (equip_disc[105] == 1 && var_1030 >= 2) {
            var_2867 = 1;
            var_2938 = 0;
        }
        if (var_2927 == 1) {
            var_2867 = 1;
            var_2938 = 0;
        }
        return;
    });
}
function func640(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(640);
        if (var_199 == 4) {
            var_83[var_314].Var5 = 6;
        }
        if (var_199 == 6) {
            var_83[var_314].Var5 = 4;
        }
        if (var_199 == 8) {
            var_83[var_314].Var5 = 2;
        }
        if (var_199 == 2) {
            var_83[var_314].Var5 = 8;
        }
        if (var_199 == 1) {
            var_83[var_314].Var5 = 9;
        }
        if (var_199 == 3) {
            var_83[var_314].Var5 = 7;
        }
        if (var_199 == 7) {
            var_83[var_314].Var5 = 3;
        }
        if (var_199 == 9) {
            var_83[var_314].Var5 = 1;
        }
        return;
    });
}
function func641(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(641);
        var_2968 = 0;
        var_347 = var_66;
        var_348 = var_67;
        if (var_199 == 4) {
            var_347 = var_347 + 1;
        }
        if (var_199 == 6) {
            var_347 = var_347 - 1;
        }
        if (var_199 == 8) {
            var_348 = var_348 + 1;
        }
        if (var_199 == 2) {
            var_348 = var_348 - 1;
        }
        if (var_199 == 1) {
            var_347 = var_347 + 1;
            var_348 = var_348 - 1;
        }
        if (var_199 == 3) {
            var_347 = var_347 - 1;
            var_348 = var_348 - 1;
        }
        if (var_199 == 7) {
            var_347 = var_347 + 1;
            var_348 = var_348 + 1;
        }
        if (var_199 == 9) {
            var_347 = var_347 - 1;
            var_348 = var_348 + 1;
        }
        if (var_82[var_347][var_348] > 0 && var_71[var_347][var_348] != 0) {
            var_2969 = var_82[var_347][var_348];
            if (var_83[var_2969].Var0 != 53 && var_83[var_2969].Var0 != 61 && var_83[var_2969].Var31 != 4 && var_83[var_2969].Var31 != 5) {
                var_2968 = 1;
            }
        }
        if (var_2968 == 1) {
            var_2970 = 0;
            if (var_2970 == 0 && var_199 == 4) {
                var_199 = 6;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 6) {
                var_199 = 4;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 8) {
                var_199 = 2;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 2) {
                var_199 = 8;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 1) {
                var_199 = 9;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 3) {
                var_199 = 7;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 7) {
                var_199 = 3;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 9) {
                var_199 = 1;
                var_2970 = 1;
            }
        }
        return;
    });
}
function func642(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(642);
        var_2968 = 0;
        var_347 = var_66;
        var_348 = var_67;
        var_2971 = var_347;
        var_2972 = var_348;
        var_2973 = var_347;
        var_2930 = var_348;
        if (var_199 == 4) {
            var_347 = var_347 + 1;
            var_2971 = var_347;
            var_2972 = var_348 - 1;
            var_2973 = var_347;
            var_2930 = var_348 + 1;
        }
        if (var_199 == 6) {
            var_347 = var_347 - 1;
            var_2971 = var_347;
            var_2972 = var_348 - 1;
            var_2973 = var_347;
            var_2930 = var_348 + 1;
        }
        if (var_199 == 8) {
            var_348 = var_348 + 1;
            var_2971 = var_347 - 1;
            var_2972 = var_348;
            var_2973 = var_347 + 1;
            var_2930 = var_348;
        }
        if (var_199 == 2) {
            var_348 = var_348 - 1;
            var_2971 = var_347 - 1;
            var_2972 = var_348;
            var_2973 = var_347 + 1;
            var_2930 = var_348;
        }
        if (var_199 == 1) {
            var_347 = var_347 + 1;
            var_348 = var_348 - 1;
            var_2971 = var_347 - 1;
            var_2972 = var_348;
            var_2973 = var_347;
            var_2930 = var_348 + 1;
        }
        if (var_199 == 3) {
            var_347 = var_347 - 1;
            var_348 = var_348 - 1;
            var_2971 = var_347;
            var_2972 = var_348 + 1;
            var_2973 = var_347 + 1;
            var_2930 = var_348;
        }
        if (var_199 == 7) {
            var_347 = var_347 + 1;
            var_348 = var_348 + 1;
            var_2971 = var_347;
            var_2972 = var_348 - 1;
            var_2973 = var_347 - 1;
            var_2930 = var_348;
        }
        if (var_199 == 9) {
            var_347 = var_347 - 1;
            var_348 = var_348 + 1;
            var_2971 = var_347 + 1;
            var_2972 = var_348;
            var_2973 = var_347;
            var_2930 = var_348 - 1;
        }
        if (var_82[var_347][var_348] > 0 && var_71[var_347][var_348] != 0) {
            var_2969 = var_82[var_347][var_348];
            if (var_83[var_2969].Var0 != 53 && var_83[var_2969].Var0 != 61 && var_83[var_2969].Var31 != 4 && var_83[var_2969].Var31 != 5) {
                var_2968 = 1;
            }
        }
        if (var_82[var_2971][var_2972] > 0 && var_71[var_2971][var_2972] != 0 && var_2968 == 0) {
            var_2969 = var_82[var_2971][var_2972];
            if (var_83[var_2969].Var0 != 53 && var_83[var_2969].Var0 != 61 && var_83[var_2969].Var31 != 4 && var_83[var_2969].Var31 != 5) {
                var_2968 = 1;
            }
        }
        if (var_82[var_2973][var_2930] > 0 && var_71[var_2973][var_2930] != 0 && var_2968 == 0) {
            var_2969 = var_82[var_2973][var_2930];
            if (var_83[var_2969].Var0 != 53 && var_83[var_2969].Var0 != 61 && var_83[var_2969].Var31 != 4 && var_83[var_2969].Var31 != 5) {
                var_2968 = 1;
            }
        }
        if (var_2968 == 1) {
            var_2970 = 0;
            if (var_2970 == 0 && var_199 == 4) {
                var_199 = 6;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 6) {
                var_199 = 4;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 8) {
                var_199 = 2;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 2) {
                var_199 = 8;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 1) {
                var_199 = 9;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 3) {
                var_199 = 7;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 7) {
                var_199 = 3;
                var_2970 = 1;
            }
            if (var_2970 == 0 && var_199 == 9) {
                var_199 = 1;
                var_2970 = 1;
            }
        }
        return;
    });
}
function func643(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(643);
        var_2974 = var_347;
        var_2975 = var_348;
        var_2928 = var_347 - 1;
        var_2929 = var_347 + 1;
        var_2931 = var_348 - 1;
        var_2930 = var_348 + 1;
        if (var_2928 < 0) {
            var_2928 = 0;
        }
        if (var_2929 > var_33) {
            var_2929 = var_33;
        }
        if (var_2931 < 0) {
            var_348 = 0;
        }
        if (var_2930 > var_34) {
            var_2930 = var_34;
        }
        var_1280 = 0;
        if (var_199 == 4) {
            if (var_82[var_2928][var_2931] > 0) {
                var_402 = var_82[var_2928][var_2931];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
            if (var_82[var_2928][var_2930] > 0) {
                var_402 = var_82[var_2928][var_2930];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
        }
        if (var_199 == 6) {
            if (var_82[var_2929][var_2931] > 0) {
                var_402 = var_82[var_2929][var_2931];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
            if (var_82[var_2929][var_2930] > 0) {
                var_402 = var_82[var_2929][var_2930];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
        }
        if (var_199 == 8) {
            if (var_82[var_2928][var_2931] > 0) {
                var_402 = var_82[var_2928][var_2931];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
            if (var_82[var_2929][var_2931] > 0) {
                var_402 = var_82[var_2929][var_2931];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
        }
        if (var_199 == 2) {
            if (var_82[var_2928][var_2930] > 0) {
                var_402 = var_82[var_2928][var_2930];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
            if (var_82[var_2929][var_2930] > 0) {
                var_402 = var_82[var_2929][var_2930];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
        }
        if (var_199 == 1) {
            if (var_82[var_2928][var_2975] > 0) {
                var_402 = var_82[var_2928][var_2975];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
            if (var_82[var_2974][var_2930] > 0) {
                var_402 = var_82[var_2974][var_2930];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
        }
        if (var_199 == 3) {
            if (var_82[var_2929][var_2975] > 0) {
                var_402 = var_82[var_2929][var_2975];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
            if (var_82[var_2974][var_2930] > 0) {
                var_402 = var_82[var_2974][var_2930];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
        }
        if (var_199 == 7) {
            if (var_82[var_2974][var_2931] > 0) {
                var_402 = var_82[var_2974][var_2931];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
            if (var_82[var_2928][var_2975] > 0) {
                var_402 = var_82[var_2928][var_2975];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
        }
        if (var_199 == 9) {
            if (var_82[var_2974][var_2931] > 0) {
                var_402 = var_82[var_2974][var_2931];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
            if (var_82[var_2929][var_2975] > 0) {
                var_402 = var_82[var_2929][var_2975];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
        }
        if (var_199 == 1 && var_82[var_2928][var_2930] > 0) {
            if (var_71[var_2928][var_2975] == 0 || var_71[var_2974][var_2930] == 0) {
                var_402 = var_82[var_2928][var_2930];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
        }
        if (var_199 == 3 && var_82[var_2929][var_2930] > 0) {
            if (var_71[var_2929][var_2975] == 0 || var_71[var_2974][var_2930] == 0) {
                var_402 = var_82[var_2929][var_2930];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
        }
        if (var_199 == 7 && var_82[var_2928][var_2931] > 0) {
            if (var_71[var_2974][var_2931] == 0 || var_71[var_2928][var_2975] == 0) {
                var_402 = var_82[var_2928][var_2931];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
        }
        if (var_199 == 9 && var_82[var_2929][var_2931] > 0) {
            if (var_71[var_2974][var_2931] == 0 || var_71[var_2929][var_2975] == 0) {
                var_402 = var_82[var_2929][var_2931];
                if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                    var_1280 = 1;
                }
            }
        }
        if (var_1280 == 0) {
            return;
        }
        var_403 = "「オラオラオラオラオラオラオラオラオラ」";
        var_2976 = 0;
        var_2977 = 0;
        var_2978 = 0;
        var_2979 = 0;
        var_2980 = 0;
        var_2981 = 0;
        var_2982 = 0;
        var_2983 = 0;
        var_2984 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];

        DSPLAY(audio_id = 121);
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し

        DSPLAY(audio_id = 121);
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し

        DSPLAY(audio_id = 121);
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            if (var_199 == 4) {
                if (var_82[var_2928][var_2931] > 0 && var_71[var_2928][var_2931] != 0 && var_2981 == 0) {
                    var_2981 = 1;
                    var_402 = var_82[var_2928][var_2931];
                    var_314 = var_82[var_2928][var_2931];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2928][var_2975] > 0 && var_71[var_2928][var_2975] != 0 && var_2984 == 0) {
                    var_2984 = 1;
                    var_402 = var_82[var_2928][var_2975];
                    var_314 = var_82[var_2928][var_2975];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2928][var_2930] > 0 && var_71[var_2928][var_2930] != 0 && var_2976 == 0) {
                    var_2976 = 1;
                    var_402 = var_82[var_2928][var_2930];
                    var_314 = var_82[var_2928][var_2930];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                        }
                    }
                }
            }
            if (var_199 == 6) {
                if (var_82[var_2929][var_2931] > 0 && var_71[var_2929][var_2931] != 0 && var_2983 == 0) {
                    var_2983 = 1;
                    var_402 = var_82[var_2929][var_2931];
                    var_314 = var_82[var_2929][var_2931];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2929][var_2975] > 0 && var_71[var_2929][var_2975] != 0 && var_2984 == 0) {
                    var_2984 = 1;
                    var_402 = var_82[var_2929][var_2975];
                    var_314 = var_82[var_2929][var_2975];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2929][var_2930] > 0 && var_71[var_2929][var_2930] != 0 && var_2978 == 0) {
                    var_2978 = 1;
                    var_402 = var_82[var_2929][var_2930];
                    var_314 = var_82[var_2929][var_2930];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                        }
                    }
                }
            }
            if (var_199 == 8) {
                if (var_82[var_2928][var_2931] > 0 && var_71[var_2928][var_2931] != 0 && var_2981 == 0) {
                    var_2981 = 1;
                    var_402 = var_82[var_2928][var_2931];
                    var_314 = var_82[var_2928][var_2931];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2974][var_2931] > 0 && var_71[var_2974][var_2931] != 0 && var_2984 == 0) {
                    var_2984 = 1;
                    var_402 = var_82[var_2974][var_2931];
                    var_314 = var_82[var_2974][var_2931];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2929][var_2931] > 0 && var_71[var_2929][var_2931] != 0 && var_2983 == 0) {
                    var_2983 = 1;
                    var_402 = var_82[var_2929][var_2931];
                    var_314 = var_82[var_2929][var_2931];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                        }
                    }
                }
            }
            if (var_199 == 2) {
                if (var_82[var_2928][var_2930] > 0 && var_71[var_2928][var_2930] != 0 && var_2976 == 0) {
                    var_2976 = 1;
                    var_402 = var_82[var_2928][var_2930];
                    var_314 = var_82[var_2928][var_2930];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2974][var_2930] > 0 && var_71[var_2974][var_2930] != 0 && var_2984 == 0) {
                    var_2984 = 1;
                    var_402 = var_82[var_2974][var_2930];
                    var_314 = var_82[var_2974][var_2930];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2929][var_2930] > 0 && var_71[var_2929][var_2930] != 0 && var_2978 == 0) {
                    var_2978 = 1;
                    var_402 = var_82[var_2929][var_2930];
                    var_314 = var_82[var_2929][var_2930];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                        }
                    }
                }
            }
            if (var_199 == 1) {
                if (var_82[var_2928][var_2975] > 0 && var_71[var_2928][var_2975] != 0 && var_2979 == 0) {
                    var_2979 = 1;
                    var_402 = var_82[var_2928][var_2975];
                    var_314 = var_82[var_2928][var_2975];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2928][var_2930] > 0 && var_71[var_2928][var_2930] != 0 && var_2984 == 0) {
                    var_2984 = 1;
                    var_402 = var_82[var_2928][var_2930];
                    var_314 = var_82[var_2928][var_2930];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2974][var_2930] > 0 && var_71[var_2974][var_2930] != 0 && var_2977 == 0) {
                    var_2977 = 1;
                    var_402 = var_82[var_2974][var_2930];
                    var_314 = var_82[var_2974][var_2930];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                        }
                    }
                }
            }
            if (var_199 == 3) {
                if (var_82[var_2929][var_2975] > 0 && var_71[var_2929][var_2975] != 0 && var_2980 == 0) {
                    var_2980 = 1;
                    var_402 = var_82[var_2929][var_2975];
                    var_314 = var_82[var_2929][var_2975];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2929][var_2930] > 0 && var_71[var_2929][var_2930] != 0 && var_2984 == 0) {
                    var_2984 = 1;
                    var_402 = var_82[var_2929][var_2930];
                    var_314 = var_82[var_2929][var_2930];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2974][var_2930] > 0 && var_71[var_2974][var_2930] != 0 && var_2977 == 0) {
                    var_2977 = 1;
                    var_402 = var_82[var_2974][var_2930];
                    var_314 = var_82[var_2974][var_2930];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                        }
                    }
                }
            }
            if (var_199 == 7) {
                if (var_82[var_2974][var_2931] > 0 && var_71[var_2974][var_2931] != 0 && var_2982 == 0) {
                    var_2982 = 1;
                    var_402 = var_82[var_2974][var_2931];
                    var_314 = var_82[var_2974][var_2931];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2928][var_2931] > 0 && var_71[var_2928][var_2931] != 0 && var_2984 == 0) {
                    var_2984 = 1;
                    var_402 = var_82[var_2928][var_2931];
                    var_314 = var_82[var_2928][var_2931];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2928][var_2975] > 0 && var_71[var_2928][var_2975] != 0 && var_2979 == 0) {
                    var_2979 = 1;
                    var_402 = var_82[var_2928][var_2975];
                    var_314 = var_82[var_2928][var_2975];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                        }
                    }
                }
            }
            if (var_199 == 9) {
                if (var_82[var_2974][var_2931] > 0 && var_71[var_2974][var_2931] != 0 && var_2982 == 0) {
                    var_2982 = 1;
                    var_402 = var_82[var_2974][var_2931];
                    var_314 = var_82[var_2974][var_2931];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2929][var_2931] > 0 && var_71[var_2929][var_2931] != 0 && var_2984 == 0) {
                    var_2984 = 1;
                    var_402 = var_82[var_2929][var_2931];
                    var_314 = var_82[var_2929][var_2931];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                    }
                }
                if (var_82[var_2929][var_2975] > 0 && var_71[var_2929][var_2975] != 0 && var_2980 == 0) {
                    var_2980 = 1;
                    var_402 = var_82[var_2929][var_2975];
                    var_314 = var_82[var_2929][var_2975];
                    enemy_list = var_83[var_402].Var0;
                    if (var_83[var_402].Var31 != 4 && var_83[var_402].Var31 != 5) {
                        yield func644();
                        if (var_2867 != 0) {
                            yield func626();
                            yield func638();
                            yield func705();
                        }
                    }
                }
            }
        }
        return;
    });
}
function func644(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(644);
        var_2867 = 0;
        yield func639();
        if (var_143 >= 1) {
            var_2267[8] = var_2267[7];
            var_2267[7] = var_2267[6];
            var_2267[6] = var_2267[5];
            var_2267[5] = var_2267[4];
            var_2267[4] = var_2267[3];
            var_2267[3] = var_2267[2];
            var_2267[2] = var_2267[1];
            var_2267[1] = var_2267[0];
            var_2267[0] = var_83[var_314].Var0;
            if (var_2267[0] != 0 && var_2267[0] == var_2267[1]) {
                var_143 = 2;
            }
            if (var_143 == 2 && var_2267[1] == var_2267[2]) {
                var_143 = 3;
            }
            if (var_143 == 3 && var_2267[2] == var_2267[3]) {
                var_143 = 4;
            }
            if (var_143 == 4 && var_2267[3] == var_2267[4]) {
                var_143 = 5;
            }
            if (var_143 == 5 && var_2267[4] == var_2267[5]) {
                var_143 = 6;
            }
            if (var_143 == 6 && var_2267[5] == var_2267[6]) {
                var_143 = 7;
            }
            if (var_143 == 7 && var_2267[6] == var_2267[7]) {
                var_143 = 8;
            }
            if (var_143 == 8 && var_2267[7] == var_2267[8]) {
                var_143 = 9;
            }
            if (var_2267[0] != 0 && var_2267[0] != var_2267[1]) {
                var_143 = 1;
            }
        }
        if (var_2867 != 0) {
            return;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「オラオララオラオラオラオオラオラ」";
        comments_row2 = "ﾃﾞｨｱﾎﾞﾛの攻撃は外れた";
        if (var_2938 == 1) {
            comments_row2 = "ヒラリと攻撃をかわされた";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        var_2939 = 1;
        if (equip_disc[105] == 1) {
            var_1030 = var_1030 + 1;
        }
        var_2985 = 0;
        if (var_2939 == 1) {
            yield func090();
        }
        if (var_2938 == 1) {
            var_2657 = var_83[var_314].Var5;
        }
        if (var_2938 == 1) {
            var_83[var_314].Var5 = 1;
            var_83[var_314].Var7 = 1;
        }
        yield func337(); // メッセージ関係呼び出し
        if (var_2938 == 1) {
            var_83[var_314].Var5 = 2;
        }
        yield func337(); // メッセージ関係呼び出し
        if (var_2938 == 1) {
            var_83[var_314].Var5 = 3;
        }
        yield func337(); // メッセージ関係呼び出し
        if (var_2938 == 1) {
            var_83[var_314].Var5 = 6;
        }
        yield func337(); // メッセージ関係呼び出し
        if (var_2938 == 1) {
            var_83[var_314].Var5 = 9;
        }
        yield func337(); // メッセージ関係呼び出し
        if (var_2938 == 1) {
            var_83[var_314].Var5 = 8;
        }
        yield func337(); // メッセージ関係呼び出し
        if (var_2938 == 1) {
            var_83[var_314].Var5 = 7;
        }
        yield func337(); // メッセージ関係呼び出し
        if (var_2938 == 1) {
            var_83[var_314].Var5 = 4;
        }
        yield func337(); // メッセージ関係呼び出し
        if (var_2938 == 1) {
            var_83[var_314].Var5 = var_2657;
            var_83[var_314].Var7 = 0;
        }
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_198 = 0;
        var_300 = 0;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_2939 = 0;
        var_2932 = 0;
        var_2938 = 0;
        var_217 = 1;
        var_1194 = 0;
        return;
    });
}
function func645(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(645);
        var_1710 = 0;
        var_1711 = var_66;
        var_1712 = var_67;
        var_1713 = var_66 - 1;
        var_1714 = var_66 + 1;
        var_1715 = var_67 + 1;
        var_1716 = var_67 - 1;
        if (var_1713 < 0) {
            var_1713 = 0;
        }
        if (var_1716 < 0) {
            var_1716 = 0;
        }
        if (var_1714 > var_33) {
            var_1714 = var_33;
        }
        if (var_1715 > var_34) {
            var_1715 = var_34;
        }
        if (var_71[var_1711][var_1712] == 13) {
            var_1710 = var_1710 + 1;
        }
        if (var_71[var_1713][var_1712] == 13) {
            var_1710 = var_1710 + 1;
        }
        if (var_71[var_1714][var_1712] == 13) {
            var_1710 = var_1710 + 1;
        }
        if (var_71[var_1711][var_1715] == 13) {
            var_1710 = var_1710 + 1;
        }
        if (var_71[var_1711][var_1716] == 13) {
            var_1710 = var_1710 + 1;
        }
        if (var_71[var_1713][var_1715] == 13) {
            var_1710 = var_1710 + 1;
        }
        if (var_71[var_1714][var_1715] == 13) {
            var_1710 = var_1710 + 1;
        }
        if (var_71[var_1713][var_1716] == 13) {
            var_1710 = var_1710 + 1;
        }
        if (var_71[var_1714][var_1716] == 13) {
            var_1710 = var_1710 + 1;
        }
        var_1717 = Math.floor((var_565 + 1) / 2);
        var_209 = var_1717 * var_1710 + var_209;
        return;
    });
}
function func646(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(646);
        yield func426();
        var_2986 = var_553;
        var_233[var_2986].Var18 = var_233[var_2986].Var18 + 1;
        if (var_233[var_2986].Var18 <= 10) {
            var_2987 = 1;
        }
        if (var_233[var_2986].Var18 >= 11 && var_233[var_2986].Var18 <= 15) {
            var_2987 = rnd(12);
        }
        if (var_233[var_2986].Var18 >= 16 && var_233[var_2986].Var18 <= 21) {
            var_2987 = rnd(10);
        }
        if (var_233[var_2986].Var18 >= 22 && var_233[var_2986].Var18 <= 24) {
            var_2987 = rnd(8);
        }
        if (var_233[var_2986].Var18 >= 25 && var_233[var_2986].Var18 <= 27) {
            var_2987 = rnd(6);
        }
        if (var_233[var_2986].Var18 >= 28 && var_233[var_2986].Var18 <= 30) {
            var_2987 = rnd(4);
        }
        if (var_233[var_2986].Var18 >= 31) {
            var_2987 = rnd(2);
        }
        if (var_2987 == 0) {
            var_2985 = 1;
            belongings_item_list = var_357;
            yield func492(); // アイテムリスト呼び出し
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
    
            DSPLAY(audio_id = 172);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + item_name + "は";
            comments_row2 = "使いすぎて壊れてしまった。";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            belongings_item_list = var_357;
            yield func106(); // BGM選曲呼び出し割り振り
            yield func426();
            var_476 = dim(40);
            var_580 = var_580 - var_894;
            var_894 = 0;
            var_357 = 0;
            yield func494();
            var_225 = var_553;
            yield func433(); // アイテム配列(所持アイテム)初期化関数
            yield func494();
            var_896 = 0;
            var_2926 = 0;
        }
        return;
    });
}
// 射撃攻撃動作処理
function func647(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(647);
        if (var_251 == 1 && var_410 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "射撃DISCを装備していないぞ";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_251 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        if (var_171 == 1) {
            yield func424();
            if (var_1886 >= 1) {
                yield func425();
                return;
            }
        }
        var_251 = 0;
        var_340 = var_233[var_225].Var0;
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            var_340 = var_486[var_682][var_225][0];
        }
        if (var_1223 == 1) {
            var_340 = 699;
        }
        if (var_1267 == 1) {
            var_340 = 698;
        }
        if (var_2342 == 1) {
            var_340 = 490;
            var_2342 = 0;
        }
        if (var_2106 == 2) {
            var_340 = 487;
            var_2106 = 0;
            if (var_215 == 112 || var_215 == 394) {
                var_340 = 488;
                var_2329 = 1;
            }
        }
        if (var_2106 == 1 && var_2329 == 0) {
            var_340 = 489;
            var_2106 = 0;
            if (var_215 == 112 || var_215 == 394) {
                var_340 = 488;
                var_2329 = 1;
            }
        }
        if (var_2106 == 1 && var_2329 == 1) {
            var_2106 = 0;
            var_340 = 488;
            var_2329 = 1;
        }
        var_2988 = 0;
        var_455 = var_66;
        var_456 = var_67;
        var_1266 = 2;
        yield func337(); // メッセージ関係呼び出し
        var_1266 = 4;
        yield func337(); // メッセージ関係呼び出し
        var_1266 = 6;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_1197 = 1;
        var_1266 = 0;
        if (var_1267 == 0 && var_340 != 403) {
            var_1220 = 1;
        }
        if (var_340 == 403) {
            var_1250 = 1;
        }
        yield func097();
        if (var_340 != 403) {
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
            var_1195 = 1;
            var_2989 = var_199;
            var_1189 = 1;
            var_2990 = 20;
            if (var_340 == 402) {
                var_2990 = 20;
            }
            if (var_340 == 413) {
                var_2990 = 10;
            }
            if (var_1267 == 1) {
                var_2990 = 4;
            }
            var_2991 = 0;
            var_2992 = 0;
            for (let cnt2 = 0; cnt2 < var_2990; ++cnt2) {
                var_1894 = var_455;
                var_1895 = var_456;
                if (var_2989 == 4) {
                    var_455 = var_455 - 1;
                }
                if (var_2989 == 6) {
                    var_455 = var_455 + 1;
                }
                if (var_2989 == 8) {
                    var_456 = var_456 - 1;
                }
                if (var_2989 == 2) {
                    var_456 = var_456 + 1;
                }
                if (var_2989 == 1) {
                    var_455 = var_455 - 1;
                    var_456 = var_456 + 1;
                }
                if (var_2989 == 3) {
                    var_455 = var_455 + 1;
                    var_456 = var_456 + 1;
                }
                if (var_2989 == 7) {
                    var_455 = var_455 - 1;
                    var_456 = var_456 - 1;
                }
                if (var_2989 == 9) {
                    var_455 = var_455 + 1;
                    var_456 = var_456 - 1;
                }
                if (var_455 < 5 || var_455 > var_33 || var_456 < 5 || var_456 > var_34) {
                    var_455 = var_1894;
                    var_456 = var_1895;
                    break;
                }
                if (var_71[var_455][var_456] == 0) {
                    if (var_340 == 402) {
                        var_2988 = 0;
                        var_2294 = var_455 - 1;
                        if (var_2294 < 0) {
                            var_2294 = 0;
                        }
                        var_2295 = var_455 + 1;
                        if (var_2295 > var_33) {
                            var_2295 = var_33;
                        }
                        var_2296 = var_456 + 1;
                        if (var_2296 > var_34) {
                            var_2296 = var_34;
                        }
                        var_2297 = var_456 - 1;
                        if (var_2297 < 0) {
                            var_2297 = 0;
                        }
                        var_455 = var_1894;
                        var_456 = var_1895;
                        if (var_2989 == 4) {
                            if (var_71[var_2295][var_456] != 0) {
                                var_2993 = 6;
                            }
                            if (var_71[var_455][var_2296] != 0) {
                                var_2993 = 2;
                            }
                            if (var_71[var_455][var_2297] != 0) {
                                var_2993 = 8;
                            }
                        }
                        if (var_2989 == 6) {
                            if (var_71[var_2294][var_456] != 0) {
                                var_2993 = 4;
                            }
                            if (var_71[var_455][var_2297] != 0) {
                                var_2993 = 8;
                            }
                            if (var_71[var_455][var_2296] != 0) {
                                var_2993 = 2;
                            }
                        }
                        if (var_2989 == 8 || var_2989 == 9 || var_2989 == 7) {
                            if (var_71[var_455][var_2296] != 0) {
                                var_2993 = 2;
                            }
                            if (var_71[var_2294][var_456] != 0) {
                                var_2993 = 4;
                            }
                            if (var_71[var_2295][var_456] != 0) {
                                var_2993 = 6;
                            }
                        }
                        if (var_2989 == 2 || var_2989 == 1 || var_2989 == 3) {
                            if (var_71[var_455][var_2297] != 0) {
                                var_2993 = 8;
                            }
                            if (var_71[var_2295][var_456] != 0) {
                                var_2993 = 6;
                            }
                            if (var_71[var_2294][var_456] != 0) {
                                var_2993 = 4;
                            }
                        }
                        if (var_2993 == 8) {
                            var_2989 = 8;
                            var_1416 = 80;
                        }
                        if (var_2993 == 2) {
                            var_2989 = 2;
                            var_1416 = 0;
                        }
                        if (var_2993 == 6) {
                            var_2989 = 6;
                            var_1416 = 120;
                        }
                        if (var_2993 == 4) {
                            var_2989 = 4;
                            var_1416 = 40;
                        }
                    }
                    var_2994 = 0;
                    if (var_340 == 413) {
                        yield func667();
                        break;
                    }
                    if (var_340 == 488) {
                        yield func660();
                        break;
                    }
                    if (var_2994 == 0 && var_340 != 402) {
                        if (var_340 == 400 || var_340 == 698 || var_340 == 401 || var_340 == 407) {
                            var_747 = 1;
                            var_750 = 1;
                            var_748 = var_455 - var_66 + 4;
                            var_749 = var_456 - var_67 + 4;
                        }
                        var_1195 = 0;
                        var_1279 = 1;
                        for (let cnt5 = 0; cnt5 < 8; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        if (var_340 == 698) {
                            for (let cnt6 = 0; cnt6 < 3; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                        }
                        var_1279 = 0;
                        var_750 = 0;
                        var_2991 = 1;
                        break;
                    }
                    var_2994 = 0;
                }
                if (var_82[var_455][var_456] > 0) {
                    var_1899 = var_82[var_455][var_456];
                    if (var_83[var_1899].Var0 != 50) {
                        if (var_340 == 413) {
                            yield func667();
                            break;
                        }
                        if (var_340 != 411) {
                            var_1195 = 0;
                        }
                        yield func660();
                        var_2991 = 1;
                        if (var_340 != 411 || var_2995 == 1) {
                            break;
                        }
                        if (var_340 == 411) {
                            var_2992++;
                        }
                    }
                }
                if (var_65[var_455][var_456] == 1) {
                    if (var_340 == 402 || var_340 == 490) {
                        var_1195 = 0;
                        yield func544();
                        break;
                    }
                }
                if (var_340 == 490) {
                    yield func080(); // 各キー入力確認
                    if (var_254 == 1) {
                        var_2989 = 4;
                        var_1416 = 40;
                    }
                    if (var_257 == 1) {
                        var_2989 = 6;
                        var_1416 = 120;
                    }
                    if (var_255 == 1) {
                        var_2989 = 8;
                        var_1416 = 80;
                    }
                    if (var_259 == 1) {
                        var_2989 = 2;
                        var_1416 = 0;
                    }
                    if (var_253 == 1) {
                        var_2989 = 7;
                        var_1416 = 200;
                    }
                    if (var_254 == 1 && var_255 == 1) {
                        var_2989 = 7;
                        var_1416 = 200;
                    }
                    if (var_256 == 1) {
                        var_2989 = 9;
                        var_1416 = 280;
                    }
                    if (var_257 == 1 && var_255 == 1) {
                        var_2989 = 9;
                        var_1416 = 280;
                    }
                    if (var_258 == 1) {
                        var_2989 = 1;
                        var_1416 = 160;
                    }
                    if (var_254 == 1 && var_259 == 1) {
                        var_2989 = 1;
                        var_1416 = 160;
                    }
                    if (var_260 == 1) {
                        var_2989 = 3;
                        var_1416 = 240;
                    }
                    if (var_257 == 1 && var_259 == 1) {
                        var_2989 = 3;
                        var_1416 = 240;
                    }
                    var_2988 = 0;
                    yield func337(); // メッセージ関係呼び出し
                    var_2988 = 1;
                    yield func337(); // メッセージ関係呼び出し
                    var_2988 = 2;
                    yield func337(); // メッセージ関係呼び出し
                    var_2988 = 3;
                    yield func337(); // メッセージ関係呼び出し
                    var_2988 = 4;
                    yield func337(); // メッセージ関係呼び出し
                    var_2988 = 5;
                    yield func337(); // メッセージ関係呼び出し
                    var_2988 = 6;
                    yield func337(); // メッセージ関係呼び出し
                    var_2988 = 7;
                }
                if (var_340 != 490) {
                    var_1896 = 1;
                    yield func337(); // メッセージ関係呼び出し
                    var_1896 = 0;
                }
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_340 == 413 && var_1195 != 0) {
                yield func667();
            }
            var_1195 = 0;
        }
        var_2995 = 0;
        if (var_340 == 698 && var_2991 == 0) {
            var_747 = 1;
            var_750 = 1;
            var_748 = var_455 - var_66 + 4;
            var_749 = var_456 - var_67 + 4;
            var_1195 = 0;
            var_1279 = 1;
            for (let cnt2 = 0; cnt2 < 11; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1279 = 0;
            var_750 = 0;
        }
        if (var_340 == 403) {
            yield func650(); // 射撃セックスピストルズでの攻撃動作処理
            if (var_2994 == 1) {
                var_2994 = 0;
                var_1899 = var_82[var_455][var_456];
                if (var_83[var_1899].Var0 != 50 && var_83[var_1899].Var31 != 4 && var_83[var_1899].Var31 != 5) {
                    yield func660();
                }
            }
        }
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_234 == 0 && var_1223 == 0 && var_1267 == 0 && var_340 != 487 && var_340 != 488 && var_340 != 489 && var_340 != 490) {
            yield func421();
        }
        if (var_234 == 1 && var_1223 == 0 && var_1267 == 0 && var_340 != 487 && var_340 != 488 && var_340 != 489 && var_340 != 490) {
            var_234 = 0;
            yield func422();
        }
        var_217 = 1;
        var_1953 = 0;
        var_1267 = 0;
        var_1223 = 0;
        var_1250 = 0;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

function func648(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(648);
        gmode(2);
        if (var_2996 == 1) {
            if (var_2989 == 4) {
                var_2997 = 120;
                var_2998 = 150;
            }
            if (var_2989 == 6) {
                var_2997 = 200;
                var_2998 = 150;
            }
            if (var_2989 == 2) {
                var_2997 = 160;
                var_2998 = 160;
            }
            if (var_2989 == 8) {
                var_2997 = 160;
                var_2998 = 160;
            }
            if (var_2989 == 1) {
                var_2997 = 120;
                var_2998 = 120;
            }
            if (var_2989 == 3) {
                var_2997 = 200;
                var_2998 = 200;
            }
            if (var_2989 == 7) {
                var_2997 = 120;
                var_2998 = 120;
            }
            if (var_2989 == 9) {
                var_2997 = 200;
                var_2998 = 200;
            }
        }
        if (var_2996 == 0) {
            var_2997 = (var_455 - var_66 + 4) * 40;
            var_2998 = (var_456 - var_67 + 4) * 40 - 10;
        }
        if (var_2999 >= 1 && var_2999 <= 12) {
            var_2997 = (var_3000 - var_66 + 4) * 40;
            var_2998 = (var_3001 - var_67 + 4) * 40 - var_2999 * 40;
            var_1416 = 80;
        }
        if (var_2999 >= 13 && var_2999 <= 24) {
            var_2997 = (var_3002 - var_66 + 4) * 40;
            var_2998 = (var_3003 - 12 - var_67 + 4) * 40 + (var_2999 - 12) * 40;
            var_1416 = 0;
        }
        if (var_2988 >= 1) {
            if (var_2989 == 4) {
                var_2997 = (var_455 - var_66 + 4) * 40 - var_2988 * 5;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10;
            }
            if (var_2989 == 6) {
                var_2997 = (var_455 - var_66 + 4) * 40 + var_2988 * 5;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10;
            }
            if (var_2989 == 2) {
                var_2997 = (var_455 - var_66 + 4) * 40;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10 + var_2988 * 5;
            }
            if (var_2989 == 8) {
                var_2997 = (var_455 - var_66 + 4) * 40;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10 - var_2988 * 5;
            }
            if (var_2989 == 1) {
                var_2997 = (var_455 - var_66 + 4) * 40 - var_2988 * 5;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10 + var_2988 * 5;
            }
            if (var_2989 == 3) {
                var_2997 = (var_455 - var_66 + 4) * 40 + var_2988 * 5;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10 + var_2988 * 5;
            }
            if (var_2989 == 7) {
                var_2997 = (var_455 - var_66 + 4) * 40 - var_2988 * 5;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10 - var_2988 * 5;
            }
            if (var_2989 == 9) {
                var_2997 = (var_455 - var_66 + 4) * 40 + var_2988 * 5;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10 - var_2988 * 5;
            }
        }
        if (var_1896 == 1) {
            if (var_2989 == 4) {
                var_2997 = (var_455 - var_66 + 4) * 40 + 20;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10;
            }
            if (var_2989 == 6) {
                var_2997 = (var_455 - var_66 + 4) * 40 - 20;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10;
            }
            if (var_2989 == 2) {
                var_2997 = (var_455 - var_66 + 4) * 40;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10 - 20;
            }
            if (var_2989 == 8) {
                var_2997 = (var_455 - var_66 + 4) * 40;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10 + 20;
            }
            if (var_2989 == 1) {
                var_2997 = (var_455 - var_66 + 4) * 40 + 20;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10 - 20;
            }
            if (var_2989 == 3) {
                var_2997 = (var_455 - var_66 + 4) * 40 - 20;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10 - 20;
            }
            if (var_2989 == 7) {
                var_2997 = (var_455 - var_66 + 4) * 40 + 20;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10 + 20;
            }
            if (var_2989 == 9) {
                var_2997 = (var_455 - var_66 + 4) * 40 - 20;
                var_2998 = (var_456 - var_67 + 4) * 40 - 10 + 20;
            }
        }
        gmode(2);
        pos(var_2997, var_2998);
        yield func649();
        return;
    });
}
function func649(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(649);
        if (var_340 == 400) {
            gcopy(34, 320 + var_1416, 400, 40, 40);
        }
        if (var_340 == 401) {
            gcopy(34, 320 + var_1416, 720, 40, 40);
        }
        if (var_340 == 402) {
            gcopy(34, 320 + var_1416, 0, 40, 40);
        }
        if (var_340 == 403) {
            gcopy(34, 320 + var_1416, 560, 40, 40);
        }
        if (var_340 == 404) {
            gcopy(34, 320 + var_1416, 520, 40, 40);
        }
        if (var_340 == 405) {
            gcopy(34, 320 + var_1416, 800, 40, 40);
        }
        if (var_340 == 406) {
            gcopy(34, 320 + var_1416, 640, 40, 40);
        }
        if (var_340 == 407) {
            gcopy(34, 320 + var_1416, 400, 40, 40);
        }
        if (var_340 == 408) {
            gcopy(34, 320 + var_1416, 840, 40, 40);
        }
        if (var_340 == 409) {
            gcopy(3, 680, 280, 40, 40);
        }
        if (var_340 == 410) {
            gcopy(34, 320 + var_1416, 1080, 40, 40);
        }
        if (var_340 == 411) {
            gcopy(34, 320 + var_1416, 1120, 40, 40);
        }
        if (var_340 == 412) {
            gcopy(3, 720, 520, 40, 40);
        }
        if (var_340 == 413) {
            gcopy(15, 960, 1960, 40, 40);
        }
        if (var_340 == 414) {
            gcopy(34, 320 + var_1416, 1240, 40, 40);
        }
        if (var_340 == 489) {
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha  = 150);
            gcopy(34, 320 + var_1416, 680, 40, 40);
            gmode(2);
        }
        if (var_340 == 488) {
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha  = 150);
            gcopy(34, 320 + var_1416, 680, 40, 40);
            gmode(2);
        }
        if (var_340 == 487) {
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha  = 150);
            gcopy(34, 320 + var_1416, 680, 40, 40);
            gmode(2);
        }
        if (var_340 == 490) {
            gcopy(34, 320 + var_1416, 0, 40, 40);
        }
        if (var_340 == 699) {
            gcopy(34, 320 + var_1416, 880, 40, 40);
        }
        if (var_340 == 698) {
            gcopy(34, 320 + var_1416, 440, 40, 40);
        }
        return;
    });
}
// 射撃セックスピストルズの攻撃動作処理
function func650(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(650);
        var_1396 = var_455;
        var_1397 = var_456;
        var_3000 = var_455;
        var_3001 = var_456;
        var_3004 = var_3001 + 8;
        if (var_3001 > var_3004) {
            var_3001 = 8;
        }
        var_1195 = 0;
        var_3005 = dim(300);
        var_3006 = 1;
        var_3007 = 0;
        var_3008 = 0;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            var_3011 = 0;
            var_3012 = 0;
            if (var_201 != 0 && var_201 != 13 && var_201 != 14) {
                if (var_83[var_3006].Var10 == var_201 && var_83[var_3006].Var0 != 0 && var_83[var_3006].Var0 != 50 && var_83[var_3006].Var31 != 4 && var_83[var_3006].Var31 != 5) {
                    var_3005[var_3007] = var_3006;
                    var_3007++;
                    var_3008++;
                }
                if (var_83[var_3006].Var10 == 14 && var_83[var_3006].Var0 != 0 && var_83[var_3006].Var0 != 50 && var_83[var_3006].Var31 != 4 && var_83[var_3006].Var31 != 5) {
                    var_2747 = var_83[var_3006].Var1;
                    var_2748 = var_83[var_3006].Var2;
                    var_1993 = var_83[var_3006].Var1 - 1;
                    if (var_1993 < 0) {
                        var_1993 = 0;
                    }
                    var_1994 = var_83[var_3006].Var1 + 1;
                    if (var_1994 > var_33) {
                        var_1994 = var_33;
                    }
                    var_1995 = var_83[var_3006].Var2 + 1;
                    if (var_1995 > var_34) {
                        var_1995 = var_34;
                    }
                    var_1996 = var_83[var_3006].Var2 - 1;
                    if (var_1996 < 0) {
                        var_1996 = 0;
                    }
                    if (var_71[var_1993][var_2748] == var_201) {
                        var_3005[var_3007] = var_3006;
                        var_3007++;
                        var_3008++;
                    }
                    if (var_71[var_1994][var_2748] == var_201) {
                        var_3005[var_3007] = var_3006;
                        var_3007++;
                        var_3008++;
                    }
                    if (var_71[var_2747][var_1995] == var_201) {
                        var_3005[var_3007] = var_3006;
                        var_3007++;
                        var_3008++;
                    }
                    if (var_71[var_2747][var_1996] == var_201) {
                        var_3005[var_3007] = var_3006;
                        var_3007++;
                        var_3008++;
                    }
                }
            }
            if (var_201 == 0 || var_201 == 13 || var_201 == 14) {
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
                if (var_71[var_2334][var_2333] >= 1 && var_71[var_2334][var_2333] <= 12) {
                    var_3011 = 1;
                    var_3013 = var_71[var_2334][var_2333];
                }
                if (var_71[var_2335][var_2333] >= 1 && var_71[var_2335][var_2333] <= 12) {
                    var_3011 = 1;
                    var_3013 = var_71[var_2335][var_2333];
                }
                if (var_71[var_2332][var_2337] >= 1 && var_71[var_2332][var_2337] <= 12) {
                    var_3011 = 1;
                    var_3013 = var_71[var_2332][var_2337];
                }
                if (var_71[var_2332][var_2336] >= 1 && var_71[var_2332][var_2336] <= 12) {
                    var_3011 = 1;
                    var_3013 = var_71[var_2332][var_2336];
                }
                if (var_83[var_3006].Var1 == var_2334 && var_83[var_3006].Var2 == var_2333) {
                    var_3012 = 1;
                }
                if (var_83[var_3006].Var1 == var_2335 && var_83[var_3006].Var2 == var_2333) {
                    var_3012 = 1;
                }
                if (var_83[var_3006].Var1 == var_2332 && var_83[var_3006].Var2 == var_2337) {
                    var_3012 = 1;
                }
                if (var_83[var_3006].Var1 == var_2332 && var_83[var_3006].Var2 == var_2336) {
                    var_3012 = 1;
                }
                if (var_3011 == 1 && var_83[var_3006].Var0 != 0 && var_83[var_3006].Var10 == var_3013 && var_83[var_3006].Var0 != 50 && var_83[var_3006].Var31 != 4 && var_83[var_3006].Var31 != 5) {
                    var_3005[var_3007] = var_3006;
                    var_3007++;
                    var_3008++;
                }
                if (var_3012 == 1 && var_83[var_3006].Var0 != 0 && var_83[var_3006].Var0 != 50 && var_83[var_3006].Var31 != 4 && var_83[var_3006].Var31 != 5) {
                    var_3005[var_3007] = var_3006;
                    var_3007++;
                    var_3008++;
                }
            }
            var_3006++;
        }
        if (var_3008 != 0) {
            var_2994 = 1;
        }
        var_3002 = 0;
        var_3003 = 0;
        if (var_262 == 1) {
            var_2994 = 0;
        }
        if (var_2994 == 1) {
            var_3009 = rnd(var_3008);
            var_3010 = var_3005[var_3009];
            var_455 = var_83[var_3010].Var1;
            var_456 = var_83[var_3010].Var2;
            var_3002 = var_455;
            var_3003 = var_456;
        }
        var_1195 = 1;
        var_2999 = 1;
        for (let cnt1 = 0; cnt1 < 24; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_2999++;
        }
        var_2999 = 0;
        var_1195 = 0;
        if (var_2994 == 0) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾋﾟｽﾄﾙｽﾞ「ウェエエエ――ン";
            comments_row2 = "　　　　当テル相手ガ ミツカラナイヨ―ッ」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        return;
    });
}
function func651(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(651);
        var_2985 = 0;
        if (equip_disc[118] == 1 && var_71[var_347][var_348] == 0) {
            yield func653();
        }
        if (equip_disc[104] == 1) {
            if (var_71[var_347][var_348] == 0 && var_71[var_66][var_67] != 0 && var_3014 == 0 && var_199 != 1 && var_199 != 3 && var_199 != 7 && var_199 != 9) {
                if (var_92 != 1 && var_92 != 7 && var_92 != 16 && var_262 == 0) {
                    if (var_347 >= 5 && var_348 >= 5 && var_347 <= var_33 && var_348 <= var_34) {
                        var_71[var_347][var_348] = 14;
                        var_303 = var_347;
                        var_304 = var_348;
                        var_305 = var_347 - 1;
                        if (var_305 < 0) {
                            var_305 = 0;
                        }
                        var_306 = var_347 + 1;
                        if (var_306 > var_33) {
                            var_306 = var_33;
                        }
                        var_307 = var_348 + 1;
                        if (var_307 > var_34) {
                            var_307 = var_34;
                        }
                        var_308 = var_348 - 1;
                        if (var_308 < 0) {
                            var_308 = 0;
                        }
                        if (var_71[var_305][var_304] != 0 && var_71[var_305][var_304] <= 12 && var_71[var_306][var_304] != 0 && var_71[var_306][var_304] <= 12) {
                            var_71[var_347][var_348] = var_71[var_305][var_304];
                        }
                        if (var_71[var_303][var_307] != 0 && var_71[var_303][var_307] <= 12 && var_71[var_303][var_308] != 0 && var_71[var_303][var_308] <= 12) {
                            var_71[var_347][var_348] = var_71[var_303][var_307];
                        }
                        var_1194 = 1;
                        yield func646();
                    }
                }
            }
            var_3014 = 0;
            if (var_80[var_347][var_348] != 0 && var_2932 == 0 && var_2939 == 0) {
                var_3015 = var_80[var_347][var_348];
                if (var_81[var_3015][4] == 1 || var_121 == 1) {
                    if (var_81[var_3015][0] != 31) {
                        var_80[var_347][var_348] = 0;
                        var_1194 = 1;
                        yield func646();
                    }
                }
            }
        }
        if (var_357 == 108 && var_82[var_347][var_348] == 0) {
            var_357 = 110;
        }
        if (var_2932 == 0 && var_2939 == 0) {
            var_74[var_347][var_348] = 2;
        }
        if (var_80[var_347][var_348] > 0 && var_2932 == 0 && var_2939 == 0) {
            var_2935 = var_80[var_347][var_348];
            var_81[var_2935][4] = 1;
        }
        if (var_357 == 110) {
            if (var_199 == 4) {
                var_3016 = var_347 - 1;
                var_3017 = var_348;
            }
            if (var_199 == 6) {
                var_3016 = var_347 + 1;
                var_3017 = var_348;
            }
            if (var_199 == 8) {
                var_3016 = var_347;
                var_3017 = var_348 - 1;
            }
            if (var_199 == 2) {
                var_3016 = var_347;
                var_3017 = var_348 + 1;
            }
            if (var_199 == 1) {
                var_3016 = var_347 - 1;
                var_3017 = var_348 + 1;
            }
            if (var_199 == 3) {
                var_3016 = var_347 + 1;
                var_3017 = var_348 + 1;
            }
            if (var_199 == 7) {
                var_3016 = var_347 - 1;
                var_3017 = var_348 - 1;
            }
            if (var_199 == 9) {
                var_3016 = var_347 + 1;
                var_3017 = var_348 - 1;
            }
            if (var_80[var_3016][var_3017] > 0) {
                var_2935 = var_80[var_3016][var_3017];
                var_81[var_2935][4] = 1;
            }
        }
        if (var_2927 == 1) {
            var_2927 = 0;
            var_1194 = 1;
        }
        if (equip_disc[109] == 1 && var_211 == var_352 && var_71[var_347][var_348] != 0 && var_2939 == 0) {
            var_3018 = 0;
            var_3019 = var_66;
            var_3020 = var_67;
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                if (var_199 == 4) {
                    var_3019 = var_3019 - 1;
                    var_3020 = var_3020;
                }
                if (var_199 == 6) {
                    var_3019 = var_3019 + 1;
                    var_3020 = var_3020;
                }
                if (var_199 == 8) {
                    var_3019 = var_3019;
                    var_3020 = var_3020 - 1;
                }
                if (var_199 == 2) {
                    var_3019 = var_3019;
                    var_3020 = var_3020 + 1;
                }
                if (var_199 == 1) {
                    var_3019 = var_3019 - 1;
                    var_3020 = var_3020 + 1;
                }
                if (var_199 == 3) {
                    var_3019 = var_3019 + 1;
                    var_3020 = var_3020 + 1;
                }
                if (var_199 == 7) {
                    var_3019 = var_3019 - 1;
                    var_3020 = var_3020 - 1;
                }
                if (var_199 == 9) {
                    var_3019 = var_3019 + 1;
                    var_3020 = var_3020 - 1;
                }
                if (var_3019 <= 5 || var_3019 > var_31 || var_3020 <= 5 || var_3020 > var_32) {
                    break;
                }
                if (var_71[var_3019][var_3020] == 0) {
                    break;
                }
                if (var_82[var_3019][var_3020] != 0) {
                    var_3021 = var_82[var_3019][var_3020];
                    if (var_83[var_3021].Var0 != 50 && var_83[var_3021].Var31 != 4 && var_83[var_3021].Var31 != 5) {
                        var_3018 = 1;
                    }
                }
            }
            if (var_3018 == 1) {
                var_1267 = 1;
                yield func647(); // 射撃攻撃動作処理
                return;
            }
        }
        if (var_3022 == 0) {
            if (var_2938 == 1) {
                var_2657 = var_83[var_314].Var5;
            }
            if (var_2938 == 1) {
                var_83[var_314].Var5 = 1;
                var_83[var_314].Var7 = 1;
            }
            yield func337(); // メッセージ関係呼び出し
            if (var_2938 == 1) {
                var_83[var_314].Var5 = 2;
            }
            yield func337(); // メッセージ関係呼び出し
            if (var_2938 == 1) {
                var_83[var_314].Var5 = 3;
            }
            yield func337(); // メッセージ関係呼び出し
            if (var_2985 == 0) {
                yield func089();
            }
            if (var_2938 == 1) {
                var_83[var_314].Var5 = 6;
            }
            yield func337(); // メッセージ関係呼び出し
            if (var_2938 == 1) {
                var_83[var_314].Var5 = 9;
            }
            yield func337(); // メッセージ関係呼び出し
            if (var_2938 == 1) {
                var_83[var_314].Var5 = 8;
            }
            yield func337(); // メッセージ関係呼び出し
            if (var_2939 == 1) {
                yield func090();
            }
            if (var_2938 == 1) {
                var_83[var_314].Var5 = 7;
            }
            yield func337(); // メッセージ関係呼び出し
            if (var_2938 == 1) {
                var_83[var_314].Var5 = 4;
            }
            yield func337(); // メッセージ関係呼び出し
            if (var_2938 == 1) {
                var_83[var_314].Var5 = var_2657;
                var_83[var_314].Var7 = 0;
            }
            yield func337(); // メッセージ関係呼び出し
        }
        if (equip_disc[105] == 1 && var_1030 >= 2 && var_2939 == 1) {
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
    
            DSPLAY(audio_id = 227);
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_271 = 1;
            var_1265 = 1;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1265++;
            }
            var_271 = 0;
            var_1265 = 0;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "おれは・・・";
            comments_row2 = "反省すると強いぜ・・・";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_3022 = 0;
        var_2939 = 0;
        var_2932 = 0;
        var_2938 = 0;
        var_217 = 1;
        var_1194 = 0;
        if (var_357 == 110) {
            var_357 = 108;
            var_750 = 0;
        }
        if (var_357 == 113) {
            if (var_71[var_347][var_348] == 13) {
                yield func652();
            }
            if (var_77[var_347][var_348] != 0 && var_82[var_347][var_348] == 0) {
                var_3023 = var_77[var_347][var_348];
                if (var_78[var_3023].Var0 == 632) {
                    yield func652();
                }
            }
        }
        if (equip_disc[101] == 1 && var_2925 == 0 && var_83[var_314].Var0 > 0 && var_2924 == 0 && var_2965 == 0 && var_128 == 0 && var_178 == 0) {
            var_2966 = var_83[var_314].Var1;
            var_2967 = var_83[var_314].Var2;
            if (var_82[var_2966][var_2967] != 0) {
                var_2925 = 1;
                var_243 = 1;
                yield func636();
                return;
            }
        }
        if (sympathy_id == 135 && var_341 == 1 && var_83[var_314].Var0 > 0 && var_2924 == 0 && var_2965 == 0 && var_128 == 0 && var_178 == 0) {
            var_2966 = var_83[var_314].Var1;
            var_2967 = var_83[var_314].Var2;
            if (var_82[var_2966][var_2967] != 0) {
                if (var_357 == 101) {
                    var_341 = 2;
                    var_243 = 1;
                    var_357 = 122;
                    yield func636();
                    return;
                }
                if (var_357 == 122) {
                    var_341 = 2;
                    var_243 = 1;
                    var_357 = 101;
                    yield func636();
                    return;
                }
            }
        }
        if (var_357 == 122 || var_357 == 101) {
            var_357 = var_2923;
        }
        if (equip_disc[120] == 1 && var_2926 == 1 && var_128 == 0 && var_178 == 0) {
            if (var_357 != 100 && var_357 != 398) {
                var_2926 = 0;
                yield func641();
                if (var_2968 == 1) {
                    var_2968 = 0;
                    var_243 = 1;
                    yield func636();
                    return;
                }
            }
            if (var_357 == 100 || var_357 == 398) {
                var_2926 = 0;
                yield func642();
                if (var_2968 == 1) {
                    var_2968 = 0;
                    var_243 = 1;
                    yield func636();
                    return;
                }
            }
        }
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func652(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(652);
        if (var_201 == 14) {
            return;
        }
        yield func426();
        var_570 = var_233[var_553].Var13;
        var_3024 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_3024].Var10 == var_201 && var_83[var_3024].Var0 != 0 && var_83[var_3024].Var31 != 4 && var_83[var_3024].Var31 != 5) {
                var_1711 = var_83[var_3024].Var1;
                var_1712 = var_83[var_3024].Var2;
                var_1713 = var_1711 - 1;
                var_1714 = var_1711 + 1;
                var_1715 = var_1712 + 1;
                var_1716 = var_1712 - 1;
                if (var_1713 < 0) {
                    var_1713 = 0;
                }
                if (var_1716 < 0) {
                    var_1716 = 0;
                }
                if (var_1714 > var_33) {
                    var_1714 = var_33;
                }
                if (var_1715 > var_34) {
                    var_1715 = var_34;
                }
                var_3025 = 0;
                if (var_3025 == 0 && var_71[var_1713][var_1712] == 13) {
                    var_3025 = 1;
                    var_1449 = 4;
                    var_1450 = var_1713;
                    var_1451 = var_1712;
                }
                if (var_3025 == 0 && var_71[var_1714][var_1712] == 13) {
                    var_3025 = 1;
                    var_1449 = 6;
                    var_1450 = var_1714;
                    var_1451 = var_1712;
                }
                if (var_3025 == 0 && var_71[var_1711][var_1716] == 13) {
                    var_3025 = 1;
                    var_1449 = 8;
                    var_1450 = var_1711;
                    var_1451 = var_1716;
                }
                if (var_3025 == 0 && var_71[var_1711][var_1715] == 13) {
                    var_3025 = 1;
                    var_1449 = 2;
                    var_1450 = var_1711;
                    var_1451 = var_1715;
                }
                if (var_3025 == 0 && var_71[var_1713][var_1716] == 13) {
                    var_3025 = 1;
                    var_1449 = 7;
                    var_1450 = var_1713;
                    var_1451 = var_1716;
                }
                if (var_3025 == 0 && var_71[var_1714][var_1716] == 13) {
                    var_3025 = 1;
                    var_1449 = 9;
                    var_1450 = var_1714;
                    var_1451 = var_1716;
                }
                if (var_3025 == 0 && var_71[var_1713][var_1715] == 13) {
                    var_3025 = 1;
                    var_1449 = 1;
                    var_1450 = var_1713;
                    var_1451 = var_1715;
                }
                if (var_3025 == 0 && var_71[var_1714][var_1715] == 13) {
                    var_3025 = 1;
                    var_1449 = 3;
                    var_1450 = var_1714;
                    var_1451 = var_1715;
                }
                if (var_3025 == 0 && var_77[var_1713][var_1712] != 0) {
                    var_3026 = var_77[var_1713][var_1712];
                    if (var_78[var_3026].Var0 == 632) {
                        var_3025 = 1;
                        var_1449 = 4;
                        var_1450 = var_1713;
                        var_1451 = var_1712;
                    }
                }
                if (var_3025 == 0 && var_77[var_1714][var_1712] != 0) {
                    var_3026 = var_77[var_1714][var_1712];
                    if (var_78[var_3026].Var0 == 632) {
                        var_3025 = 1;
                        var_1449 = 6;
                        var_1450 = var_1714;
                        var_1451 = var_1712;
                    }
                }
                if (var_3025 == 0 && var_77[var_1711][var_1716] != 0) {
                    var_3026 = var_77[var_1711][var_1716];
                    if (var_78[var_3026].Var0 == 632) {
                        var_3025 = 1;
                        var_1449 = 8;
                        var_1450 = var_1711;
                        var_1451 = var_1716;
                    }
                }
                if (var_3025 == 0 && var_77[var_1711][var_1715] != 0) {
                    var_3026 = var_77[var_1711][var_1715];
                    if (var_78[var_3026].Var0 == 632) {
                        var_3025 = 1;
                        var_1449 = 2;
                        var_1450 = var_1711;
                        var_1451 = var_1715;
                    }
                }
                if (var_3025 == 0 && var_77[var_1713][var_1716] != 0) {
                    var_3026 = var_77[var_1713][var_1716];
                    if (var_78[var_3026].Var0 == 632) {
                        var_3025 = 1;
                        var_1449 = 7;
                        var_1450 = var_1713;
                        var_1451 = var_1716;
                    }
                }
                if (var_3025 == 0 && var_77[var_1714][var_1716] != 0) {
                    var_3026 = var_77[var_1714][var_1716];
                    if (var_78[var_3026].Var0 == 632) {
                        var_3025 = 1;
                        var_1449 = 9;
                        var_1450 = var_1714;
                        var_1451 = var_1716;
                    }
                }
                if (var_3025 == 0 && var_77[var_1713][var_1715] != 0) {
                    var_3026 = var_77[var_1713][var_1715];
                    if (var_78[var_3026].Var0 == 632) {
                        var_3025 = 1;
                        var_1449 = 1;
                        var_1450 = var_1713;
                        var_1451 = var_1715;
                    }
                }
                if (var_3025 == 0 && var_77[var_1714][var_1715] != 0) {
                    var_3026 = var_77[var_1714][var_1715];
                    if (var_78[var_3026].Var0 == 632) {
                        var_3025 = 1;
                        var_1449 = 3;
                        var_1450 = var_1714;
                        var_1451 = var_1715;
                    }
                }
                if (var_3025 == 0 && var_82[var_1713][var_1712] != 0) {
                    var_3026 = var_82[var_1713][var_1712];
                    if (var_83[var_3026].Var0 == 27 || var_83[var_3026].Var0 == 115) {
                        var_3025 = 1;
                        var_1449 = 4;
                        var_1450 = var_1713;
                        var_1451 = var_1712;
                    }
                }
                if (var_3025 == 0 && var_82[var_1714][var_1712] != 0) {
                    var_3026 = var_82[var_1714][var_1712];
                    if (var_83[var_3026].Var0 == 27 || var_83[var_3026].Var0 == 115) {
                        var_3025 = 1;
                        var_1449 = 6;
                        var_1450 = var_1714;
                        var_1451 = var_1712;
                    }
                }
                if (var_3025 == 0 && var_82[var_1711][var_1716] != 0) {
                    var_3026 = var_82[var_1711][var_1716];
                    if (var_83[var_3026].Var0 == 27 || var_83[var_3026].Var0 == 115) {
                        var_3025 = 1;
                        var_1449 = 8;
                        var_1450 = var_1711;
                        var_1451 = var_1716;
                    }
                }
                if (var_3025 == 0 && var_82[var_1711][var_1715] != 0) {
                    var_3026 = var_82[var_1711][var_1715];
                    if (var_83[var_3026].Var0 == 27 || var_83[var_3026].Var0 == 115) {
                        var_3025 = 1;
                        var_1449 = 2;
                        var_1450 = var_1711;
                        var_1451 = var_1715;
                    }
                }
                if (var_3025 == 0 && var_82[var_1713][var_1716] != 0) {
                    var_3026 = var_82[var_1713][var_1716];
                    if (var_83[var_3026].Var0 == 27 || var_83[var_3026].Var0 == 115) {
                        var_3025 = 1;
                        var_1449 = 7;
                        var_1450 = var_1713;
                        var_1451 = var_1716;
                    }
                }
                if (var_3025 == 0 && var_82[var_1714][var_1716] != 0) {
                    var_3026 = var_82[var_1714][var_1716];
                    if (var_83[var_3026].Var0 == 27 || var_83[var_3026].Var0 == 115) {
                        var_3025 = 1;
                        var_1449 = 9;
                        var_1450 = var_1714;
                        var_1451 = var_1716;
                    }
                }
                if (var_3025 == 0 && var_82[var_1713][var_1715] != 0) {
                    var_3026 = var_82[var_1713][var_1715];
                    if (var_83[var_3026].Var0 == 27 || var_83[var_3026].Var0 == 115) {
                        var_3025 = 1;
                        var_1449 = 1;
                        var_1450 = var_1713;
                        var_1451 = var_1715;
                    }
                }
                if (var_3025 == 0 && var_82[var_1714][var_1715] != 0) {
                    var_3026 = var_82[var_1714][var_1715];
                    if (var_83[var_3026].Var0 == 27 || var_83[var_3026].Var0 == 115) {
                        var_3025 = 1;
                        var_1449 = 3;
                        var_1450 = var_1714;
                        var_1451 = var_1715;
                    }
                }
                if (var_3025 == 1) {
                    var_1450 = (var_1450 - var_66 + 4) * 40;
                    var_1451 = (var_1451 - var_67 + 4) * 40 - 10;
                    var_314 = var_3024;
                    var_402 = var_3024;
                    enemy_list = var_83[var_3024].Var0;
                    var_403 = "「クラッシュ！　食い破れ！」";
                    if (var_143 >= 1) {
                        var_2267[8] = var_2267[7];
                        var_2267[7] = var_2267[6];
                        var_2267[6] = var_2267[5];
                        var_2267[5] = var_2267[4];
                        var_2267[4] = var_2267[3];
                        var_2267[3] = var_2267[2];
                        var_2267[2] = var_2267[1];
                        var_2267[1] = var_2267[0];
                        var_2267[0] = var_83[var_314].Var0;
                        if (var_2267[0] != 0 && var_2267[0] == var_2267[1]) {
                            var_143 = 2;
                        }
                        if (var_143 == 2 && var_2267[1] == var_2267[2]) {
                            var_143 = 3;
                        }
                        if (var_143 == 3 && var_2267[2] == var_2267[3]) {
                            var_143 = 4;
                        }
                        if (var_143 == 4 && var_2267[3] == var_2267[4]) {
                            var_143 = 5;
                        }
                        if (var_143 == 5 && var_2267[4] == var_2267[5]) {
                            var_143 = 6;
                        }
                        if (var_143 == 6 && var_2267[5] == var_2267[6]) {
                            var_143 = 7;
                        }
                        if (var_143 == 7 && var_2267[6] == var_2267[7]) {
                            var_143 = 8;
                        }
                        if (var_143 == 8 && var_2267[7] == var_2267[8]) {
                            var_143 = 9;
                        }
                        if (var_2267[0] != 0 && var_2267[0] != var_2267[1]) {
                            var_143 = 1;
                        }
                    }
                    var_1452 = 1;
                    var_271 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                        var_1452++;
                        if (var_1452 == 4) {
                            var_2867 = rnd(12);
                            if (var_111 == 1 || var_83[var_3024].Var12 != 0 || var_83[var_3024].Var13 != 0) {
                                var_2867 = 1;
                            }
                            if (var_2867 != 0) {
                                enemy_list = var_83[var_3024].Var0;
                                yield func626();
                                yield func638();
                                var_25_x = var_25[1];
                                var_26_x = var_26[1];
                                var_27_x = var_27[1];
                                yield func705();
                            }
                            if (var_2867 == 0) {
                                yield func090();
                                for (let cnt7 = 0; cnt7 < 3; ++cnt7) {
                                    yield func337(); // メッセージ関係呼び出し
                                }
                            }
                        }
                    }
                    var_1452 = 0;
                    var_271 = 0;
                    if (var_211 <= 0) {
                        break;
                    }
                }
            }
            var_3024 = var_3024 + 1;
        }
        return;
    });
}
function func653(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(653);
        var_3014 = 0;
        var_3022 = 0;
        if (var_201 == 14) {
            return;
        }
        yield func426();
        var_570 = var_233[var_553].Var13;
        var_3027 = dim(100);
        var_3025 = 0;
        var_3024 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_3024].Var10 == var_201 && var_83[var_3024].Var0 != 0 && var_83[var_3024].Var31 != 4 && var_83[var_3024].Var31 != 5) {
                var_1711 = var_83[var_3024].Var1;
                var_1712 = var_83[var_3024].Var2;
                var_1713 = var_1711 - 1;
                var_1714 = var_1711 + 1;
                var_1715 = var_1712 + 1;
                var_1716 = var_1712 - 1;
                if (var_1713 < 0) {
                    var_1713 = 0;
                }
                if (var_1716 < 0) {
                    var_1716 = 0;
                }
                if (var_1714 > var_33) {
                    var_1714 = var_33;
                }
                if (var_1715 > var_34) {
                    var_1715 = var_34;
                }
                if (var_71[var_1713][var_1712] == 0 || var_71[var_1714][var_1712] == 0 || var_71[var_1711][var_1716] == 0 || var_71[var_1711][var_1715] == 0 || var_71[var_1713][var_1716] == 0 || var_71[var_1714][var_1716] == 0 || var_71[var_1713][var_1715] == 0 || var_71[var_1714][var_1715] == 0) {
                    var_3025++;
                    var_3027[var_3025] = var_3024;
                }
            }
            var_3024 = var_3024 + 1;
        }
        if (var_3025 >= 1) {
            var_3028 = rnd(var_3025);
            var_3028++;
            var_3024 = var_3027[var_3028];
            var_1711 = var_83[var_3024].Var1;
            var_1712 = var_83[var_3024].Var2;
            var_1713 = var_1711 - 1;
            var_1714 = var_1711 + 1;
            var_1715 = var_1712 + 1;
            var_1716 = var_1712 - 1;
            if (var_1713 < 0) {
                var_1713 = 0;
            }
            if (var_1716 < 0) {
                var_1716 = 0;
            }
            if (var_1714 > var_33) {
                var_1714 = var_33;
            }
            if (var_1715 > var_34) {
                var_1715 = var_34;
            }
            var_3029 = 0;
            if (var_3029 == 0 && var_71[var_1713][var_1712] == 0) {
                var_3029 = 1;
                var_1449 = 4;
                var_1450 = var_1713;
                var_1451 = var_1712;
            }
            if (var_3029 == 0 && var_71[var_1714][var_1712] == 0) {
                var_3029 = 1;
                var_1449 = 6;
                var_1450 = var_1714;
                var_1451 = var_1712;
            }
            if (var_3029 == 0 && var_71[var_1711][var_1716] == 0) {
                var_3029 = 1;
                var_1449 = 8;
                var_1450 = var_1711;
                var_1451 = var_1716;
            }
            if (var_3029 == 0 && var_71[var_1711][var_1715] == 0) {
                var_3029 = 1;
                var_1449 = 2;
                var_1450 = var_1711;
                var_1451 = var_1715;
            }
            if (var_3029 == 0 && var_71[var_1713][var_1716] == 0) {
                var_3029 = 1;
                var_1449 = 7;
                var_1450 = var_1713;
                var_1451 = var_1716;
            }
            if (var_3029 == 0 && var_71[var_1714][var_1716] == 0) {
                var_3029 = 1;
                var_1449 = 9;
                var_1450 = var_1714;
                var_1451 = var_1716;
            }
            if (var_3029 == 0 && var_71[var_1713][var_1715] == 0) {
                var_3029 = 1;
                var_1449 = 1;
                var_1450 = var_1713;
                var_1451 = var_1715;
            }
            if (var_3029 == 0 && var_71[var_1714][var_1715] == 0) {
                var_3029 = 1;
                var_1449 = 3;
                var_1450 = var_1714;
                var_1451 = var_1715;
            }
            var_2985 = 1;
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func089();
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1450 = (var_1450 - var_66 + 4) * 40;
            var_1451 = (var_1451 - var_67 + 4) * 40 - 10;
            var_402 = var_3024;
            var_314 = var_3024;
            enemy_list = var_83[var_3024].Var0;
            var_403 = "ダイバー・ダウン！";
            if (var_143 >= 1) {
                var_2267[8] = var_2267[7];
                var_2267[7] = var_2267[6];
                var_2267[6] = var_2267[5];
                var_2267[5] = var_2267[4];
                var_2267[4] = var_2267[3];
                var_2267[3] = var_2267[2];
                var_2267[2] = var_2267[1];
                var_2267[1] = var_2267[0];
                var_2267[0] = var_83[var_314].Var0;
                if (var_2267[0] != 0 && var_2267[0] == var_2267[1]) {
                    var_143 = 2;
                }
                if (var_143 == 2 && var_2267[1] == var_2267[2]) {
                    var_143 = 3;
                }
                if (var_143 == 3 && var_2267[2] == var_2267[3]) {
                    var_143 = 4;
                }
                if (var_143 == 4 && var_2267[3] == var_2267[4]) {
                    var_143 = 5;
                }
                if (var_143 == 5 && var_2267[4] == var_2267[5]) {
                    var_143 = 6;
                }
                if (var_143 == 6 && var_2267[5] == var_2267[6]) {
                    var_143 = 7;
                }
                if (var_143 == 7 && var_2267[6] == var_2267[7]) {
                    var_143 = 8;
                }
                if (var_143 == 8 && var_2267[7] == var_2267[8]) {
                    var_143 = 9;
                }
                if (var_2267[0] != 0 && var_2267[0] != var_2267[1]) {
                    var_143 = 1;
                }
            }
            var_1447 = 1;
            var_271 = 1;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1447 = var_1447 + 1;
                if (var_1447 == 4) {
                    var_2867 = rnd(12);
                    if (var_111 == 1 || var_83[var_3024].Var12 != 0 || var_83[var_3024].Var13 != 0) {
                        var_2867 = 1;
                    }
                    if (var_2867 != 0) {
                        enemy_list = var_83[var_3024].Var0;
                        yield func626();
                        yield func638();
                        var_25_x = var_25[1];
                        var_26_x = var_26[1];
                        var_27_x = var_27[1];
                        yield func705();
                        var_3014 = 1;
                    }
                    if (var_2867 == 0) {
                        yield func090();
                        for (let cnt5 = 0; cnt5 < 3; ++cnt5) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                    }
                }
            }
            var_1447 = 0;
            var_271 = 0;
            var_3022 = 1;
        }
        return;
    });
}
function func654(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(654);
        var_214 = 1;
        if (var_83[var_673].Var9 == 0) {
            return;
        }
        if (var_83[var_673].Var27 != 0) {
            yield func655();
            return;
        }
        enemy_list = var_83[var_673].Var0;
        yield func626();
        var_2197 = 0;
        if (var_83[var_673].Var20 == 0) {
            yield func620();
        }
        if (var_2197 == 1) {
            var_83[var_673].Var7 = 0;
            var_389 = 0;
            var_240 = 0;
            var_2197 = 0;
            return;
        }
        if (var_83[var_673].Var39 >= 2) {
            enemy_power = Math.floor(enemy_power * (var_83[var_673].Var39 * 2 + 10) / 10);
        }
        if (var_83[var_673].Var25 >= 1 && var_83[var_673].Var25 <= 50) {
            enemy_power = enemy_power + var_83[var_673].Var25;
        }
        if (var_83[var_673].Var25 >= 51 && var_83[var_673].Var25 <= 99) {
            enemy_power = enemy_power - (var_83[var_673].Var25 - 50);
            if (enemy_power <= 1) {
                enemy_power = 1;
            }
        }
        var_949 = Math.floor(enemy_power * (enemy_power + enemy_power - 8) / 16) + enemy_power;
        for (let cnt1 = 0; cnt1 < var_581; ++cnt1) {
            var_949 = Math.floor(var_949 * 15 / 16);
        }
        var_2817 = rnd(33);
        var_2817 = var_2817 + 111;
        var_209 = Math.floor(var_949 * var_2817 / 128);
        if (var_130 != 0) {
            var_1337 = var_83[var_673].Var0;
            if (var_1337 == 147 || var_1337 == 73 || var_1337 == 119 || var_1337 == 136 || var_1337 == 135 || var_1337 == 139 || var_1337 == 140 || var_1337 == 105) {
                var_209 = Math.floor(var_209 * 3 / 2);
            }
        }
        if (var_128 >= 1) {
            var_209 = Math.floor(var_209 * 3 / 2);
        }
        if (var_182 == 1) {
            var_209 = Math.floor(var_209 / 2);
        }
        if (var_209 <= 1) {
            var_209 = 1;
        }
        var_3030 = 0;
        var_3031 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_3031].Var0 == 701) {
                if (var_233[var_3031].Var13 == var_83[var_673].Var0) {
                    var_3032 = rnd(6);
                    if (var_3032 == 0) {
                        var_3030 = var_233[var_3031].Var13;
                        break;
                    }
                }
            }
            var_3031++;
        }
        if (var_3030 >= 1) {
            enemy_list = var_83[var_673].Var0;
            if (var_83[var_673].Var0 == 97 && var_83[var_673].Var31 >= 11) {
                enemy_list = var_83[var_673].Var31;
            }
            yield func626();
            var_3033 = enemy_name;
            if (var_127 != 0 || var_132 != 0) {
                var_3033 = "何者か";
            }
            if (var_119 == 0 && sympathy_id != 166 && var_83[var_673].Var30 != 0) {
                var_3033 = "何者か";
            }
            enemy_list = var_3030;
            yield func626();
            var_3034 = enemy_name;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + var_3033 + "は";
            comments_row2 = "ﾍﾟﾗﾍﾟﾗの人質を見て攻撃を躊躇した！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                var_3035 = 1;
                var_83[var_673].Var32 = 99;
                yield func337(); // メッセージ関係呼び出し
                var_3035 = 0;
                var_83[var_673].Var32 = 1;
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        var_2867 = rnd(8);
        if (var_110 == 1) {
            var_2867 = 1;
        }
        if (var_105 == 1) {
            if (var_2867 == 2 || var_2867 == 3) {
                var_2867 = 0;
                var_2868 = 1;
            }
        }
        if (dangeon_number == 99) {
            var_2867 = 1;
            var_2868 = 0;
        }
        if (var_2867 == 0) {
            if (var_127 == 0 && var_132 == 0 && var_83[var_673].Var30 == 0) {
                if (var_83[var_673].Var5 == 2) {
                    var_199 = 8;
                }
                if (var_83[var_673].Var5 == 8) {
                    var_199 = 2;
                }
                if (var_83[var_673].Var5 == 4) {
                    var_199 = 6;
                }
                if (var_83[var_673].Var5 == 6) {
                    var_199 = 4;
                }
                if (var_83[var_673].Var5 == 1) {
                    var_199 = 9;
                }
                if (var_83[var_673].Var5 == 3) {
                    var_199 = 7;
                }
                if (var_83[var_673].Var5 == 7) {
                    var_199 = 3;
                }
                if (var_83[var_673].Var5 == 9) {
                    var_199 = 1;
                }
            }
            yield func656();
            enemy_list = var_83[var_673].Var0;
            if (var_83[var_673].Var0 == 97 && var_83[var_673].Var31 >= 11) {
                enemy_list = var_83[var_673].Var31;
            }
            yield func626();
            if (var_127 != 0 || var_132 != 0) {
                enemy_name = "何者か";
            }
            if (var_119 == 0 && sympathy_id != 166 && var_83[var_673].Var30 != 0) {
                enemy_name = "何者か";
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_2868 == 0) {
                comments_row1 = "" + enemy_name + "の攻撃は外れた";
            }
            if (var_2868 == 1) {
                comments_row1 = "" + enemy_name + "の攻撃を";
                comments_row2 = "ヒラリとかわした";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2868 = 0;
            return;
        }
        if (equip_disc[203] == 1 && var_163 == 0) {
            var_3036 = rnd(8);
            if (var_3036 == 0) {
                if (var_127 == 0 && var_132 == 0 && var_83[var_673].Var30 == 0) {
                    if (var_83[var_673].Var5 == 2) {
                        var_199 = 8;
                    }
                    if (var_83[var_673].Var5 == 8) {
                        var_199 = 2;
                    }
                    if (var_83[var_673].Var5 == 4) {
                        var_199 = 6;
                    }
                    if (var_83[var_673].Var5 == 6) {
                        var_199 = 4;
                    }
                    if (var_83[var_673].Var5 == 1) {
                        var_199 = 9;
                    }
                    if (var_83[var_673].Var5 == 3) {
                        var_199 = 7;
                    }
                    if (var_83[var_673].Var5 == 7) {
                        var_199 = 3;
                    }
                    if (var_83[var_673].Var5 == 9) {
                        var_199 = 1;
                    }
                }
                yield func656();
                enemy_list = var_83[var_673].Var0;
                yield func626();
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "ザ・フールが攻撃を防いだ！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                var_271 = 1;
                var_1383 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                    var_1383++;
                }
                var_271 = 0;
                var_1383 = 0;
                return;
            }
        }
        var_3037 = 0;
        if (enemy_list == 14 || enemy_list == 66 || enemy_list == 47 || enemy_list == 120 || enemy_list == 160 || enemy_list == 67 || equip_disc[367] == 1) {
            if (var_83[var_673].Var20 == 0) {
                var_3037 = rnd(4);
                if (var_83[var_673].Var0 == 120) {
                    var_3037 = rnd(3);
                }
                if (var_3037 == 1) {
                    var_209 = Math.floor(var_209 * 3 / 2);
                }
                if (var_3037 == 1 && var_209 <= 1) {
                    var_209 = 2;
                }
            }
        }
        enemy_list = var_83[var_673].Var0;
        yield func626();
        var_743 = 0;
        if (var_1637 == 1) {
            var_743 = 1;
        }
        if (var_83[var_673].Var0 == 129 && var_2796 == 1) {
            var_743 = 1;
        }
        var_742 = 1;
        var_83[var_673].Var7 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_672 = var_83[var_673].Var0;
        yield func093();
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_747 = 1;
        if (var_128 >= 1) {
            yield func023();
        }
        var_672 = var_83[var_673].Var0;
        yield func092();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            var_389 = 1;
            yield func337(); // メッセージ関係呼び出し
            if (var_3037 == 1) {
                var_585 = 3;
            }
            var_389 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_585 = 0;
        }
        if (var_83[var_673].Var0 == 22 || var_83[var_673].Var0 == 17 || var_83[var_673].Var0 == 71) {
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                var_389 = 1;
                yield func337(); // メッセージ関係呼び出し
                if (var_3037 == 1) {
                    var_585 = 3;
                }
                var_389 = 3;
                yield func337(); // メッセージ関係呼び出し
                var_585 = 0;
            }
        }
        var_389 = 1;
        var_585 = 0;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_83[var_673].Var7 = 0;
        var_742 = 0;
        enemy_list = var_83[var_673].Var0;
        if (var_83[var_673].Var0 == 97 && var_83[var_673].Var31 >= 11) {
            enemy_list = var_83[var_673].Var31;
        }
        yield func626();
        if (var_113 == 1) {
            var_209 = Math.floor(var_209 * 2 / 3) + 1;
        }
        var_211 = var_211 - var_209;
        var_208 = var_208 + var_209;
        if (var_211 <= 0) {
            var_211 = 0;
        }
        if (var_3037 == 1) {
            var_3038 = 1;
        }
        if (var_3038 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_83[var_673].Var0 != 120) {
                comments_row1 = "痛恨の一撃！";
            }
            if (var_83[var_673].Var0 == 120) {
                comments_row1 = "「オラァッ！！」";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[3];
            var_26_x = var_26[3];
            var_27_x = var_27[3];
            yield func047();
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_3038 = 0;
            enemy_list = var_83[var_673].Var0;
            if (var_83[var_673].Var0 == 97 && var_83[var_673].Var31 >= 11) {
                enemy_list = var_83[var_673].Var31;
            }
            yield func626();
        }
        if (var_127 != 0 || var_132 != 0) {
            enemy_name = "何者か";
        }
        if (var_119 == 0 && sympathy_id != 166 && var_83[var_673].Var30 != 0) {
            enemy_name = "何者か";
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + enemy_name + "はﾃﾞｨｱﾎﾞﾛに";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        comments_row2 = "" + var_209 + "のダメージ！";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        if (var_211 <= 0) {
            var_356 = var_83[var_673].Var0;
            var_212 = 1;
        }
        if (var_83[var_673].Var0 == 140 || var_83[var_673].Var0 == 136 || var_83[var_673].Var0 == 73 || var_83[var_673].Var0 == 135 || var_83[var_673].Var0 == 139 || var_83[var_673].Var0 == 119 || var_83[var_673].Var0 == 111) {
            var_1073 = rnd(5);
            if (var_1073 == 0 && var_178 == 0 && var_83[var_673].Var20 == 0 && var_215 != 116 && var_125 == 0) {
                yield func340(); // キー入力による選択処理
        
                DSPLAY(audio_id = 120);
                var_178 = 1;
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "ビリっときたあああああ！！";
                comments_row2a = "";
                var_25_x = var_25[2];
                var_26_x = var_26[2];
                var_27_x = var_27[2];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
        }
        var_83[var_673].Var7 = 0;
        var_389 = 0;
        var_240 = 0;
        var_743 = 0;
        if (var_3037 == 1 && equip_disc[200] == 1) {
            yield func694();
            return;
        }
        if (equip_disc[115] == 1) {
            yield func695();
            if (var_2855 != 0) {
                var_2855 = 0;
                return;
            }
        }
        if (var_83[var_673].Var0 == 120 && var_3037 == 1 && var_211 >= 1) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func529();
            return;
        }
        if (var_150 == 1 && var_211 >= 1) {
    
            DSPLAY(audio_id = 152);
            yield func529();
            return;
        }
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func655(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(655);
        var_2819 = var_673;
        var_402 = var_83[var_2819].Var27;
        if (var_83[var_402].Var0 == 50) {
            yield func656();
            return;
        }
        if (var_83[var_402].Var0 == 0) {
            var_83[var_2819].Var27 = 0;
            return;
        }
        enemy_list = var_83[var_402].Var0;
        if (var_83[var_402].Var0 == 97 && var_83[var_402].Var31 >= 11) {
            enemy_list = var_83[var_402].Var31;
        }
        yield func626();
        var_971 = enemy_defence;
        var_2861 = enemy_name;
        var_3039 = var_83[var_402].Var5;
        if (var_127 != 0 || var_132 != 0) {
            var_2861 = "何者か";
        }
        if (var_119 == 0 && sympathy_id != 166 && var_83[var_402].Var30 != 0) {
            var_2861 = "何者か";
        }
        var_1637 = 0;
        enemy_list = var_83[var_2819].Var0;
        if (var_83[var_2819].Var0 == 97 && var_83[var_2819].Var31 >= 11) {
            enemy_list = var_83[var_2819].Var31;
        }
        yield func626();
        var_2820 = enemy_power;
        var_3040 = enemy_name;
        if (var_127 != 0 || var_132 != 0) {
            var_3040 = "何者か";
        }
        if (var_119 == 0 && sympathy_id != 166 && var_83[var_2819].Var30 != 0) {
            var_3040 = "何者か";
        }
        var_3041 = rnd(8);
        if (dangeon_number == 99) {
            var_3041 = 1;
        }
        if (var_3041 == 0) {
            yield func656();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + var_3040 + "の攻撃は外れた";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_83[var_402].Var0 == 53) {
            var_971 = enemy_defence;
        }
        var_403 = "" + var_3040 + "は";
        if (var_83[var_2819].Var39 >= 2) {
            var_2820 = Math.floor(var_2820 * (var_83[var_2819].Var39 * 2 + 10) / 10);
        }
        if (var_83[var_402].Var39 >= 2) {
            if (var_83[var_402].Var31 == 4 || var_83[var_402].Var31 == 5) {
                var_971 = Math.floor(var_971 * (var_83[var_402].Var39 * 2 + 10) / 10);
            }
        }
        if (var_83[var_2819].Var25 >= 1 && var_83[var_2819].Var25 <= 50) {
            var_2820 = var_2820 + var_83[var_2819].Var25;
        }
        if (var_83[var_2819].Var25 >= 51 && var_83[var_2819].Var25 < 99) {
            var_2820 = enemy_power - (var_83[var_2819].Var25 - 50);
            if (var_2820 <= 1) {
                var_2820 = 1;
            }
        }
        var_949 = Math.floor(var_2820 * (var_2820 + var_2820) / 16) + var_2820;
        for (let cnt1 = 0; cnt1 < var_971; ++cnt1) {
            var_949 = Math.floor(var_949 * 15 / 16);
        }
        var_2817 = rnd(33);
        var_2817 = var_2817 + 111;
        var_209 = Math.floor(var_949 * var_2817 / 128) + 1;
        if (var_1637 == 1) {
            var_743 = 1;
        }
        var_2196 = 1;
        if (var_83[var_402].Var0 != 79) {
            if (var_83[var_2819].Var5 == 4) {
                var_83[var_402].Var5 = 6;
            }
            if (var_83[var_2819].Var5 == 6) {
                var_83[var_402].Var5 = 4;
            }
            if (var_83[var_2819].Var5 == 2) {
                var_83[var_402].Var5 = 8;
            }
            if (var_83[var_2819].Var5 == 8) {
                var_83[var_402].Var5 = 2;
            }
            if (var_83[var_2819].Var5 == 1) {
                var_83[var_402].Var5 = 9;
            }
            if (var_83[var_2819].Var5 == 3) {
                var_83[var_402].Var5 = 7;
            }
            if (var_83[var_2819].Var5 == 7) {
                var_83[var_402].Var5 = 3;
            }
            if (var_83[var_2819].Var5 == 9) {
                var_83[var_402].Var5 = 1;
            }
        }
        var_742 = 1;
        var_83[var_2819].Var7 = 1;
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_672 = var_83[var_673].Var0;
        yield func093();
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        yield func337(); // メッセージ関係呼び出し
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func705();
        var_83[var_2819].Var7 = 0;
        var_742 = 0;
        var_2196 = 0;
        if (var_83[var_402].Var0 != 0 && var_83[var_402].Var9 == 1) {
            var_83[var_402].Var5 = var_3039;
        }
        if (var_83[var_402].Var0 != 0 && var_83[var_2819].Var10 == 0) {
            var_83[var_402].Var5 = var_3039;
        }
        var_240 = 0;
        var_743 = 0;
        return;
    });
}
function func656(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(656);
        enemy_list = var_83[var_673].Var0;
        yield func626();
        var_743 = 0;
        if (var_1637 == 1) {
            var_743 = 1;
        }
        var_742 = 1;
        var_83[var_673].Var7 = 1;
        if (var_2868 == 1) {
            var_2869 = var_199;
        }
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_672 = var_83[var_673].Var0;
        yield func093();
        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
            if (var_2868 == 1) {
                if (var_199 == 1) {
                    var_2870 = 2;
                }
                if (var_199 == 2) {
                    var_2870 = 3;
                }
                if (var_199 == 3) {
                    var_2870 = 6;
                }
                if (var_199 == 6) {
                    var_2870 = 9;
                }
                if (var_199 == 9) {
                    var_2870 = 8;
                }
                if (var_199 == 8) {
                    var_2870 = 7;
                }
                if (var_199 == 7) {
                    var_2870 = 4;
                }
                if (var_199 == 4) {
                    var_2870 = 1;
                }
                var_199 = var_2870;
                if (cnt1 >= 6) {
                    var_199 = var_2869;
                }
            }
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[var_673].Var7 = 0;
        var_389 = 0;
        var_743 = 0;
        var_240 = 0;
        return;
    });
}
function func657(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(657);
        if (var_83[var_314].Var12 != 0 || var_83[var_314].Var13 != 0 || var_83[var_314].Var17 != 0) {
            return;
        }
        var_412 = var_314;
        var_83[var_314].Var8 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "玉美「イイイイイデェ～～～～ッ";
        comments_row2a = "　　　前歯がハァァ―――――ッ」";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        if (var_410 == 406) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(4);
            if (var_1073 == 0) {
                comments_row1 = "ちっとも罪悪感を感じなかった。";
                comments_row2 = "";
            }
            if (var_1073 == 1) {
                comments_row1 = "「かあさんとお姉ちゃんに手を出すことは";
                comments_row2 = "決してさせないぞッ！」";
            }
            if (var_1073 == 2) {
                comments_row1 = "「閑けさや岩にしみ入る蝉の声」";
                comments_row2 = "";
            }
            if (var_1073 == 3) {
                comments_row1 = "「よし！それじゃあ明日までにキッチリ";
                comments_row2 = "５０万持って来い！」";
            }
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            return;
        }

        DSPLAY(audio_id = 188);
        var_389 = 2;
        var_413 = var_199;
        var_199 = 2;
        var_414 = 1;
        var_271 = 1;
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_414++;
        }
        var_389 = 0;
        var_414 = 0;
        var_271 = 0;
        var_83[var_314].Var8 = 0;
        if (wallet < 1) {
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
    
            DSPLAY(audio_id = 162);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "罪悪感で体が重くなった！";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            if (equip_disc[396] == 1) {
                yield func340(); // キー入力による選択処理
                yield func094();
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "しかし装備スタンドの効果で";
                comments_row2a = "速度は遅くならない！";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_199 = var_413;
        }
        if (wallet >= 1) {
    
            DSPLAY(audio_id = 207);
            if (wallet <= 500) {
                stolen_money = wallet;
            }
            if (wallet > 500) {
                stolen_money = Math.floor(wallet / 2);
            }
            wallet = wallet - stolen_money;
            var_83[var_412].Var26 = 1;
            belongings_item_list = 1;
            var_417 = belongings_item_list;
            var_1249 = var_78[var_419].Var13;
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
            if (var_78[var_419].Var13 != 0) {
                var_78[var_419].Var13 = var_78[var_419].Var13 + stolen_money;
            }
            if (var_78[var_419].Var13 == 0) {
                var_78[var_419].Var13 = stolen_money;
            }
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
            comments_row1 = "罪悪感で" + target_item_name + " 奪われた！";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_199 = var_413;
        }
        return;
    });
}
function func658(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(658);
        if (var_83[var_314].Var12 != 0 || var_83[var_314].Var13 != 0 || var_83[var_314].Var17 != 0) {
            return;
        }
        if (var_83[var_314].Var0 != 133 && var_83[var_314].Var0 != 118 && var_83[var_314].Var0 != 9 && var_83[var_314].Var0 != 10 && var_83[var_314].Var0 != 139 && var_83[var_314].Var0 != 153 && var_83[var_314].Var0 != 61) {
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        if (var_83[var_314].Var0 == 137) {
            var_3042 = var_314;
            if (var_83[var_314].Var3 > 10) {
                return;
            }
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "吉良「限界だッ！　押すねッ！」";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "吉良『今だッ』！";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            if (var_83[var_3042].Var14 != 0) {
                var_83[var_3042].Var8 = 1;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
        
                DSPLAY(audio_id = 162);
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    var_585 = 3;
                    yield func337(); // メッセージ関係呼び出し
                    var_585 = 0;
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
                comments_row1 = "「Ｓ・Ｈ・Ｉ・Ｔ！」";
                comments_row2 = "";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                var_198 = 1;
                var_300 = 0;
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "吉良のバイツァダストを防いだ！";
                comments_row2a = "";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func340(); // キー入力による選択処理
                yield func094();
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "吉良「…………な………";
                comments_row2 = "このクソカスどもがァ――ッ！！」";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                var_198 = 1;
                var_300 = 0;
                yield func340(); // キー入力による選択処理
                if (var_215 == 111 || var_215 == 398) {
                    var_114 = 0;
                    var_463 = 0;
                    var_464 = 0;
                    var_461 = 0;
                    var_462 = 0;
                    var_151 = 0;
                    var_152 = 0;
                    var_163 = 1;
                    var_164 = 1;
            
                    DSPLAY(audio_id = 185);
                    var_271 = 1;
                    var_1493 = 1;
                    for (let cnt4 = 0; cnt4 < 20; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                        var_1493++;
                    }
                    var_271 = 0;
                    var_1493 = 0;
                    comments_row1 = "";
                    comments_row2 = "";
                    var_295 = "";
                    comments_row1a = "";
                    comments_row2a = "";
                    var_298 = "";
                    var_299 = 0;
                    if (var_215 == 111) {
                        comments_row1 = "『ザ・ワールド』！";
                        comments_row2 = "";
                    }
                    if (var_215 == 398) {
                        comments_row1 = "『ｽﾀｰﾌﾟﾗﾁﾅ･ｻﾞ･ﾜｰﾙﾄﾞ』！";
                        comments_row2 = "";
                    }
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[6];
                    var_26_x = var_26[6];
                    var_27_x = var_27[6];
                    yield func047();
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    yield func340(); // キー入力による選択処理
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「そしてやれやれ";
                    comments_row2a = "　　　　　間に合ったぜ……」";
                    var_25_x = var_25[6];
                    var_26_x = var_26[6];
                    var_27_x = var_27[6];
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    yield func340(); // キー入力による選択処理
                    var_153 = 2;
                }
                var_83[var_3042].Var8 = 0;
                return;
            }
    
            DSPLAY(audio_id = 165);
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_3043 = 0;
            if (var_201 == var_83[var_3042].Var10 && var_201 != 14) {
                var_3043 = 1;
            }
            var_3044 = var_66;
            var_3045 = var_67;
            var_3046 = var_3044 - 1;
            if (var_3046 < 0) {
                var_3046 = 0;
            }
            var_3047 = var_3044 + 1;
            if (var_3047 > var_31 + 2) {
                var_3047 = var_31;
            }
            var_3048 = var_3045 + 1;
            if (var_3048 > var_34 + 2) {
                var_3048 = var_34;
            }
            var_3049 = var_3045 - 1;
            if (var_3049 < 0) {
                var_3049 = 0;
            }
            if (var_83[var_3042].Var1 >= var_3046 && var_83[var_3042].Var1 <= var_3047 && var_83[var_3042].Var2 >= var_3049 && var_83[var_3042].Var2 <= var_3048) {
                var_3043 = 1;
            }
    
            DSPLAY(audio_id = 180);
            var_1389 = var_83[var_3042].Var1;
            var_1390 = var_83[var_3042].Var2;
            var_271 = 1;
            var_1388 = 1;
            if (var_3043 == 1) {
                var_389 = 2;
            }
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                var_585 = 3;
                yield func337(); // メッセージ関係呼び出し
                var_585 = 0;
                yield func337(); // メッセージ関係呼び出し
                var_1388++;
            }
            for (let cnt2 = 0; cnt2 < 7; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
                var_1388++;
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
                var_1388++;
            }
            var_389 = 0;
            var_271 = 0;
            var_1388 = 0;
            if (var_3043 == 1) {
                var_177 = 8;
            }
            var_3043 = 0;
            gsel(19);
            color(255, 255, 255);
    
            boxf(left = 0, top1 = 0, right = 680, bottom = 680);
            gsel(0);
            var_311 = 255;
            var_312 = 1;
            var_83[var_3042].Var8 = 0;
            var_2965 = 1;
            yield func669();
            var_83[var_3042].Var39 = var_83[var_3042].Var39 + 1;
            if (var_83[var_3042].Var39 == 1) {
                var_83[var_3042].Var39 = 2;
            }
            enemy_list = 137;
            yield func626();
            var_83[var_3042].Var3 = Math.floor(enemy_hp * (var_83[var_3042].Var39 + 10) / 10);
            if (var_83[var_3042].Var3 >= 999) {
                var_83[var_3042].Var3 = 999;
            }
            for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_311 = var_311 - 5;
            }
            var_312 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「フ…フハ…　フハハハハハハハハハ";
            comments_row2 = "　　戻ったぞ…」";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            var_198 = 1;
            var_300 = 0;
            yield func340(); // キー入力による選択処理
        }
        if (var_83[var_314].Var0 == 143) {
            var_3042 = var_314;
            var_83[var_3042].Var8 = 0;
            var_1912 = var_673;
            var_673 = var_314;
            yield func595();
            var_673 = var_1912;
            return;
        }
        if (var_83[var_314].Var0 == 153) {
            var_3042 = var_314;
            var_83[var_3042].Var8 = 1;
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「いっしょに行こうよォ～～ッ」";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_1396 = var_66;
            var_1397 = var_67;
            var_271 = 1;
            var_1551 = 1;
            for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1551++;
            }
            var_1551 = 0;
            var_271 = 0;
            var_389 = 2;
            var_747 = 1;
    
            DSPLAY(audio_id = 105);
            var_1212 = 1;
            var_2244 = var_209;
            var_211 = var_211 - var_2244;
            var_208 = var_208 + var_2244;
            if (var_211 <= 0) {
                var_211 = 0;
                var_356 = 253;
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + var_2244 + "のﾀﾞﾒｰｼﾞを喰らった";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
            var_83[var_3042].Var8 = 0;
            return;
        }
        if (var_83[var_314].Var0 == 61) {
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "うぉうッ！　臭いがッ！";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 2;
    
            DSPLAY(audio_id = 105);
            var_747 = 1;
            var_1212 = 1;
            var_2244 = var_209;
            var_211 = var_211 - var_2244;
            var_208 = var_208 + var_2244;
            if (var_211 <= 0) {
                var_211 = 0;
                var_356 = 252;
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + var_2244 + "のﾀﾞﾒｰｼﾞを喰らった";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
            var_83[var_314].Var8 = 0;
            return;
        }
        if (var_83[var_314].Var0 == 84 && var_83[var_314].Var3 <= 20) {
            var_83[var_314].Var8 = 0;
            var_83[var_314].Var0 = 117;
            var_83[var_314].Var15 = 1;
            var_1584 = (var_83[var_314].Var1 - var_66 + 4) * 40;
            var_1585 = (var_83[var_314].Var2 - var_67 + 4) * 40;
            var_271 = 1;
            var_1583 = 1;
    
            DSPLAY(audio_id = 168);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1583++;
            }
            var_271 = 0;
            var_1583 = 0;
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "キィイイイイイイ";
            comments_row2a = "　　コエエエエエエ　エエエエエエエエ";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_83[var_314].Var0 == 9 || var_83[var_314].Var0 == 10) {
            var_1073 = rnd(4);
            if (var_1073 != 0 || var_136 != 0 || var_135 != 0 || var_134 != 0) {
                return;
            }
            if (equip_disc[201] == 0 && var_83[var_314].Var0 == 9) {
                var_136 = 1;
        
                DSPLAY(audio_id = 123);
            }
            if (equip_disc[201] == 0 && var_83[var_314].Var0 == 10) {
                var_135 = 1;
        
                DSPLAY(audio_id = 123);
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            if (equip_disc[201] == 0) {
                comments_row1a = "肉片がくっついた！";
                comments_row2a = "";
            }
            if (equip_disc[201] == 1) {
                comments_row1a = "肉片がくっつきそうになったが";
                comments_row2a = "装備DISCによって防いだ";
            }
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_83[var_314].Var0 == 86) {
            var_1073 = rnd(4);
            if (var_1073 != 0 || var_137 != 0) {
                return;
            }
            if (equip_disc[201] == 0) {
                var_137 = 1;
        
                DSPLAY(audio_id = 123);
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            if (equip_disc[201] == 0) {
                comments_row1a = "「憎き肉片」がくっついた！";
                comments_row2a = "";
            }
            if (equip_disc[201] == 1) {
                comments_row1a = "「憎き肉片」がくっつきそうになったが";
                comments_row2a = "装備DISCによって防いだ";
            }
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_83[var_314].Var0 == 139) {
            var_1073 = rnd(4);
            if (var_1073 != 0 || var_178 != 0) {
                return;
            }
            if (var_215 != 116 && var_125 == 0) {
                var_178 = 1;
        
                DSPLAY(audio_id = 120);
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            if (var_215 != 116 && var_125 == 0) {
                comments_row1a = "オーノーだズラ！";
                comments_row2a = "波紋を流されちまったズラ！";
            }
            if (var_215 == 116 || var_125 >= 1) {
                comments_row1a = "波紋でやられそうになったが、";
                comments_row2a = "波紋に強くなっていて平気だった。";
            }
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_83[var_314].Var0 == 138) {
            var_1073 = rnd(5);
            if (var_1073 != 0) {
                return;
            }
            var_128 = 1;
    
            DSPLAY(audio_id = 126);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            if (var_215 != 109 && var_410 != 404 && var_215 != 202 && var_173 == 0) {
                var_1073 = rnd(3);
                if (var_1073 == 0) {
                    comments_row1a = "チェックが甘かったな…！";
                    comments_row2a = "";
                }
                if (var_1073 == 1) {
                    comments_row1a = "お前はこのディオにとっての";
                    comments_row2a = "モンキーなんだよ――――ッ！！";
                }
                if (var_1073 == 2) {
                    comments_row1a = "無駄　無駄　無駄―――っ！！";
                    comments_row2a = "";
                }
            }
            if (var_215 == 109 || var_410 == 404 || var_215 == 202) {
                comments_row1a = "凍らされそうになったが、";
                comments_row2a = "装備ｽﾀﾝﾄﾞのおかげで平気だった";
                var_128 = 0;
            }
            if (var_173 == 1) {
                comments_row1a = "凍らされそうになったが、";
                comments_row2a = "冷たいのに強くなってて平気だった";
                var_128 = 0;
            }
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_83[var_314].Var0 == 109 && var_83[var_314].Var30 != 0) {
            var_3050 = rnd(3);
            if (var_3050 != 0) {
                return;
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ﾜﾑｳの透明化が解除された。";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_83[var_314].Var30 = 0;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_83[var_314].Var0 == 109 && var_83[var_314].Var29 == 0 && var_83[var_314].Var30 == 0) {
            if (var_83[var_314].Var3 > 10) {
                return;
            }
            if (var_83[var_314].Var23 != 0) {
                return;
            }
            var_83[var_314].Var8 = 1;
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ﾜﾑｳ「ブツ　ブツ　ブツ";
            comments_row2a = "　　　　ブツ　ブツ　ブツ」";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_83[var_314].Var21 = 1;
            var_83[var_314].Var8 = 0;
            var_411 = 1;
            yield func340(); // キー入力による選択処理
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
            }
    
            DSPLAY(audio_id = 235);
            var_411 = 2;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
            }
            var_411 = 3;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
            }
            var_411 = 0;
            var_83[var_314].Var21 = 0;
            var_83[var_314].Var23 = 1;
            var_83[var_314].Var29 = 1;
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ﾜﾑｳ「なまじ目が見えたから";
            comments_row2a = "　　ヤツに虚をつかれた！」";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
    
            DSPLAY(audio_id = 142);
            var_83[var_314].Var39 = var_83[var_314].Var39 + 2;
            if (var_83[var_314].Var39 == 2) {
                var_83[var_314].Var39 = 3;
            }
            enemy_list = var_83[var_314].Var0;
            yield func626();
            var_83[var_314].Var3 = Math.floor(enemy_hp * (var_83[var_314].Var39 + 10) / 10);
            if (var_83[var_314].Var3 >= 999) {
                var_83[var_314].Var3 = 999;
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ﾜﾑｳはレベルが上がった！";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_83[var_314].Var0 == 6) {
            if (var_83[var_314].Var25 >= 50) {
                var_83[var_314].Var25 -= 1;
                if (var_83[var_314].Var25 < 50) {
                    var_83[var_314].Var25 = 0;
                }
            }
            if (var_83[var_314].Var25 < 50) {
                var_83[var_314].Var25 += 1;
                if (var_83[var_314].Var25 >= 50) {
                    var_83[var_314].Var25 = 49;
                }
            }
    
            DSPLAY(audio_id = 182);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "恨みのパワーで";
            comments_row2a = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙの攻撃力が上がった！";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_83[var_314].Var21 = 1;
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                var_411 = 1;
                yield func337(); // メッセージ関係呼び出し
                var_411 = 2;
                yield func337(); // メッセージ関係呼び出し
                var_411 = 3;
                yield func337(); // メッセージ関係呼び出し
                var_411 = 4;
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 0;
            var_83[var_314].Var21 = 0;
            return;
        }
        if (var_83[var_314].Var0 == 44 && var_83[var_314].Var10 != 13) {
            if (var_83[var_314].Var25 >= 50) {
                var_83[var_314].Var25 -= 2;
                if (var_83[var_314].Var25 < 50) {
                    var_83[var_314].Var25 = 0;
                }
            }
            if (var_83[var_314].Var25 < 50) {
                var_83[var_314].Var25 += 2;
                if (var_83[var_314].Var25 >= 50) {
                    var_83[var_314].Var25 = 49;
                }
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ﾚｯﾄﾞﾎｯﾄﾁﾘﾍﾟｯﾊﾟｰは反省している…";
            comments_row2a = "電力を集中させ 攻撃力が上がった！";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_271 = 1;
            var_1387 = 1;
    
            DSPLAY(audio_id = 120);
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1387 = var_1387 + 1;
            }
            var_271 = 0;
            var_1387 = 0;
            return;
        }
        if (var_83[var_314].Var0 == 14) {
            var_83[var_314].Var21 = 1;
            var_411 = 1;
            if (var_83[var_314].Var25 >= 50) {
                var_83[var_314].Var25 -= 2;
                if (var_83[var_314].Var25 < 50) {
                    var_83[var_314].Var25 = 0;
                }
            }
            if (var_83[var_314].Var25 < 50) {
                var_83[var_314].Var25 += 2;
                if (var_83[var_314].Var25 >= 50) {
                    var_83[var_314].Var25 = 49;
                }
            }
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
    
            DSPLAY(audio_id = 112);　// 刀の切れる音 or 強化した時のシャキーン 効果音
            var_411 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 4;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 1;
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「今ので覚えたぞ・・・！」";
            comments_row2a = "床屋のｶｰﾝの攻撃力が上がった！";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var21 = 0;
        }
        if (var_83[var_314].Var0 == 129) {
            var_83[var_314].Var21 = 1;
            var_411 = 1;
            if (var_83[var_314].Var25 >= 50) {
                var_83[var_314].Var25 -= 4;
                if (var_83[var_314].Var25 < 50) {
                    var_83[var_314].Var25 = 0;
                }
            }
            if (var_83[var_314].Var25 < 50) {
                var_83[var_314].Var25 += 4;
                if (var_83[var_314].Var25 >= 50) {
                    var_83[var_314].Var25 = 49;
                }
            }
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
    
            DSPLAY(audio_id = 112);　// 刀の切れる音 or 強化した時のシャキーン 効果音
            var_411 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 4;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 1;
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「今ので覚えたぞ・・・！」";
            comments_row2a = "ｱﾇﾋﾞｽﾎﾟﾙﾅﾚﾌの攻撃力が上がった！";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var21 = 0;
        }
        if (var_83[var_314].Var0 == 120) {
            if (var_83[var_314].Var25 >= 50) {
                var_83[var_314].Var25 -= 5;
                if (var_83[var_314].Var25 < 50) {
                    var_83[var_314].Var25 = 0;
                }
            }
            if (var_83[var_314].Var25 < 50) {
                var_83[var_314].Var25 += 5;
                if (var_83[var_314].Var25 >= 50) {
                    var_83[var_314].Var25 = 49;
                }
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            yield func094();
            comments_row1a = "承太郎は何かメモをしている…";
            comments_row2a = "「忘れっぽいんでな…」";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
    
            DSPLAY(audio_id = 182);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "承太郎の攻撃力が上がった！";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_83[var_314].Var0 == 161) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row2 = "　　　バルバルバルバルバルバル";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            var_83[var_314].Var8 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「これがッ！」";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            var_83[var_314].Var21 = 1;
            var_411 = 1;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 2;
            yield func337(); // メッセージ関係呼び出し
            for (let cnt2 = 0; cnt2 < 7; ++cnt2) {
                var_411 = 2;
                yield func337(); // メッセージ関係呼び出し
                var_411 = 3;
                yield func337(); // メッセージ関係呼び出し
            }
            comments_row1 = "「これがッ！」　　「これがッ！」";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            var_198 = 1;
            var_300 = 0;
            var_411 = 4;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 5;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 6;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 7;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var0 = 162;
            var_411 = 1;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 2;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 3;
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 4;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 5;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            comments_row1 = "「これがッ！」　　「これがッ！」";
            comments_row2 = "「これが【バオー】だッ！」";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                var_411 = 7;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_411 = 6;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
            }
            var_411 = 0;
            var_83[var_314].Var21 = 0;
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ウオオオオオオオオオ――――ム！";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            var_198 = 1;
            var_300 = 0;
            yield func050();
            yield func047();
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_83[var_314].Var0 == 118) {
            var_3051 = rnd(5);
            if (var_3051 != 0) {
                return;
            }
            var_3052 = var_83[var_314].Var1;
            var_3053 = var_83[var_314].Var2;
            if (var_71[var_3052][var_3053] == 13) {
                return;
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「このド畜生がッ！！」";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_83[var_314].Var30 = 0;
            var_83[var_314].Var21 = 1;
            var_411 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_83[var_314].Var0 = 133;
            var_83[var_314].Var31 = 2;
            var_83[var_314].Var23 = 0;
            var_411 = 8;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 7;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 6;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 5;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 4;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 0;
            var_83[var_314].Var21 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_83[var_314].Var0 == 133) {
            var_3051 = rnd(3);
            if (var_3051 == 0) {
                return;
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_83[var_314].Var21 = 1;
            var_411 = 1;
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「暗黒空間にバラ撒いてやるッ！」";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 4;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 5;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 6;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 7;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 8;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 0;
            var_83[var_314].Var21 = 0;
            var_83[var_314].Var0 = 118;
            var_83[var_314].Var31 = 3;
            var_83[var_314].Var23 = 1;
            var_83[var_314].Var21 = 1;
            var_411 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_411 = 0;
            var_83[var_314].Var21 = 0;
            var_83[var_314].Var30 = 1;
            return;
        }
        if (var_83[var_314].Var0 == 121) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_3054 = var_83[var_314].Var5;
            var_83[var_314].Var5 = 2;
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「これがおれの本体のハンサム顔だ！」";
            comments_row2a = "";
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_83[var_314].Var0 = 9;
            var_1378 = (var_83[var_314].Var1 - var_66 + 4) * 40;
            var_1379 = (var_83[var_314].Var2 - var_67 + 4) * 40 - 10;
            var_271 = 1;
            var_1377 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1377++;
            }
            var_271 = 0;
            var_1377 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var5 = var_3054;
            return;
        }
        return;
    });
}
function func659(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(659);
        var_2712 = 0;
        var_616 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_616].Var0 == 49) {
                var_2712 = 1;
            }
            var_616++;
        }
        if (var_83[var_314].Var0 == 132 && var_83[var_314].Var20 == 0 && var_83[var_314].Var12 == 0 && var_83[var_314].Var13 == 0 && var_83[var_314].Var14 == 0 && var_83[var_314].Var17 == 0 && var_83[var_314].Var23 == 0 && var_83[var_314].Var19 == 0 && var_83[var_314].Var25 <= 50 && var_2712 == 0) {
            return;
        }
        if (var_83[var_314].Var0 == 143 && var_83[var_314].Var20 == 0 && var_83[var_314].Var12 == 0 && var_83[var_314].Var13 == 0 && var_83[var_314].Var14 == 0 && var_83[var_314].Var17 == 0 && var_83[var_314].Var23 == 0 && var_83[var_314].Var19 == 0 && var_83[var_314].Var25 <= 50) {
            return;
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_3055 = 0;
        if (var_83[var_314].Var20 != 0 || var_83[var_314].Var12 != 0 || var_83[var_314].Var13 != 0 || var_83[var_314].Var14 != 0 || var_83[var_314].Var17 != 0 || var_83[var_314].Var23 != 0 || var_83[var_314].Var19 != 0 || var_83[var_314].Var25 != 0) {
            var_3055 = 1;
        }
        if (var_83[var_314].Var0 == 132) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ！！」";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            yield func340(); // キー入力による選択処理
            if (var_2712 == 1) {
                var_421 = 1;
                for (let cnt3 = 0; cnt3 < var_97; ++cnt3) {
                    if (var_83[var_421].Var0 == 49) {
                        var_439 = var_83[var_421].Var0;
                        var_83[var_421].Var5 = 2;
                        var_440 = var_83[var_421].Var1;
                        var_441 = var_83[var_421].Var2;
                        var_442 = var_83[var_421].Var1;
                        var_443 = var_83[var_421].Var2;
                        var_83[var_421].Var11 = 1;
                        var_399 = var_83[var_421].Var1;
                        var_400 = var_83[var_421].Var2;
                        var_82[var_399][var_400] = 0;
                        var_83[var_421].Var0 = 0;
                        var_83[var_421].Var1 = 0;
                        var_83[var_421].Var2 = 0;
                        var_445 = 1;
                        yield func405();
                        var_445 = 0;
                        if (var_446 != 0) {
                            var_447 = var_448;
                            var_449 = var_450;
                            var_451 = 1;
                            var_452 = 1;
                            var_453 = 1;
                            var_454 = 1;
                            yield func384();
                            var_454 = 0;
                            var_451 = 0;
                            var_452 = 0;
                            var_453 = 0;
                        }
                    }
                    var_421++;
                }
            }
            gsel(19);
            color(255, 255, 0);
    
            boxf(left = 0, top1 = 0, right = 680, bottom = 680);
            gsel(0);
            var_311 = 255;
            var_312 = 1;
    
            DSPLAY(audio_id = 161);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_311 = var_311 - 25;
                if (var_311 <= 0) {
                    var_311 = 0;
                }
            }
            var_312 = 0;
            var_83[var_314].Var20 = 0;
            var_83[var_314].Var12 = 0;
            var_83[var_314].Var13 = 0;
            var_83[var_314].Var14 = 0;
            var_83[var_314].Var17 = 0;
            var_83[var_314].Var23 = 0;
            var_83[var_314].Var19 = 0;
            var_83[var_314].Var25 = 0;
            var_83[var_314].Var4 = 3;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_3055 == 1 && var_2712 == 0) {
                comments_row1 = "ｼﾞｮﾙﾉの状態異常が治った！";
                comments_row2 = "";
            }
            if (var_3055 == 0 && var_2712 == 1) {
                comments_row1 = "サーフィスが人形に戻された！";
                comments_row2 = "";
            }
            if (var_3055 == 1 && var_2712 == 1) {
                comments_row1 = "ｼﾞｮﾙﾉの状態異常が治った！";
                comments_row2 = "サーフィスが人形に戻された！";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (var_83[var_314].Var0 == 143) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「ボヘミアン・ラプソディ」！！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            yield func340(); // キー入力による選択処理
            gsel(19);
            color(255, 255, 255);
    
            boxf(left = 0, top1 = 0, right = 680, bottom = 680);
            gsel(0);
            var_311 = 255;
            var_312 = 1;
    
            DSPLAY(audio_id = 161);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_311 = var_311 - 25;
                if (var_311 <= 0) {
                    var_311 = 0;
                }
            }
            var_312 = 0;
            var_83[var_314].Var20 = 0;
            var_83[var_314].Var12 = 0;
            var_83[var_314].Var13 = 0;
            var_83[var_314].Var14 = 0;
            var_83[var_314].Var17 = 0;
            var_83[var_314].Var23 = 0;
            var_83[var_314].Var19 = 0;
            var_83[var_314].Var25 = 0;
            var_83[var_314].Var4 = 3;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "精神と肉体は分離され…";
            comments_row2 = "スタンド能力は無効となる！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        return;
    });
}
function func660(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(660);
        var_3056 = var_340;
        var_314 = var_82[var_455][var_456];
        enemy_list = var_83[var_314].Var0;
        yield func626();
        var_748 = var_83[var_314].Var1 - var_66 + 4;
        var_749 = var_83[var_314].Var2 - var_67 + 4;
        if (var_163 == 0 && var_123 == 0) {
            if (var_83[var_314].Var0 == 64 && var_83[var_314].Var12 == 0 && var_83[var_314].Var20 == 0 && var_83[var_314].Var17 == 0 && var_1218 == 0 && equip_disc[122] == 0 && var_340 != 412) {
                var_1195 = 0;
                var_1421 = var_340;
                var_1249 = var_1887;
                var_1393 = var_314;
                yield func666();
                var_340 = var_3056;
                var_2995 = 1;
                return;
            }
            if (var_1270 == 1 && equip_disc[122] == 0 && var_1218 == 0 && var_83[var_314].Var12 == 0 && var_83[var_314].Var20 == 0 && var_83[var_314].Var17 == 0) {
                if (var_83[var_314].Var0 == 9) {
                    yield func663();
                    var_340 = var_3056;
                    var_1249 = var_1887;
                    return;
                }
                if (var_83[var_314].Var0 == 10) {
                    yield func663();
                    var_340 = var_3056;
                    var_1249 = var_1887;
                    return;
                }
            }
            if (var_83[var_314].Var0 == 118 && var_1218 == 0) {
                var_1195 = 0;
                yield func664();
                var_340 = var_3056;
                var_2995 = 1;
                return;
            }
            if (var_83[var_314].Var0 == 156 && var_1218 == 0 && equip_disc[122] == 0 && var_83[var_314].Var12 == 0 && var_83[var_314].Var20 == 0 && var_83[var_314].Var17 == 0 && var_340 != 412) {
                if (var_340 != 304 && var_340 != 397) {
                    var_1195 = 0;
                    yield func665();
                    var_340 = var_3056;
                    var_2995 = 1;
                    return;
                }
            }
            if (var_83[var_314].Var0 == 159 && var_1218 == 0 && equip_disc[122] == 0 && var_83[var_314].Var12 == 0 && var_83[var_314].Var20 == 0 && var_83[var_314].Var17 == 0 && var_340 != 412) {
                var_1195 = 0;
                yield func665();
                var_340 = var_3056;
                var_2995 = 1;
                return;
            }
        }
        if (var_83[var_314].Var0 == 141 && var_340 == 632) {
            var_340 = 562;
        }
        if (var_83[var_314].Var0 == 106 && var_83[var_314].Var31 == 5 && var_340 == 589) {
            var_340 = 1100;
        }
        if (var_83[var_314].Var0 == 115 && var_340 == 582) {
            var_340 = 1101;
        }
        if (var_83[var_314].Var0 == 93) {
            if (var_340 == 304 || var_340 == 397) {
                var_340 = 1102;
            }
        }
        if (var_83[var_314].Var0 == 156) {
            if (var_340 == 304 || var_340 == 397) {
                var_340 = 1102;
            }
        }
        if (var_83[var_314].Var0 == 144 && var_340 == 718) {
            var_340 = 1102;
        }
        if (var_83[var_314].Var31 == 5 && var_340 == 401) {
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var13 = 0;
            var_83[var_314].Var8 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_3057 = enemy_name;
            var_83[var_314].Var3 = var_83[var_314].Var3 + 20;
            if (var_120 == 1 || var_174 == 1) {
                var_83[var_314].Var3 = var_83[var_314].Var3 + 20;
            }
            var_3058 = 0;
            if (var_83[var_314].Var39 >= 2) {
                var_3059 = Math.floor(enemy_hp * (var_83[var_314].Var39 + 10) / 10);
                if (var_3059 >= 999) {
                    var_3059 = 999;
                }
                if (var_83[var_314].Var3 >= var_3059) {
                    var_83[var_314].Var3 = var_3059;
                    var_3058 = 1;
                }
            }
            if (var_83[var_314].Var39 <= 1) {
                if (var_83[var_314].Var3 >= enemy_hp) {
                    var_83[var_314].Var3 = enemy_hp;
                    var_3058 = 1;
                }
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + var_3057 + "に";
            comments_row2 = "プランクトンを詰めた。";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理

            DSPLAY(audio_id = 143);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + var_3057 + "の";
            if (var_3058 == 0 && var_120 == 0 && var_174 == 0) {
                comments_row2a = "傷が少し癒えたようだ。";
            }
            if (var_3058 == 0) {
                if (var_120 == 1 || var_174 == 1) {
                    comments_row2a = "傷がだいぶ癒えたようだ。";
                }
            }
            if (var_3058 == 1) {
                comments_row2a = "傷は完全に回復した。";
            }
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            var_340 = var_3056;
            return;
        }
        if (var_1270 == 1 && var_1852 == 2) {
            if (var_215 == 112 || var_215 == 394) {
                var_340 = 488;
            }
        }
        if (var_340 == 851) {
            var_1901 = 0;
            if (var_83[var_314].Var0 == 33 || var_83[var_314].Var0 == 34 || var_83[var_314].Var0 == 143 || var_83[var_314].Var0 == 132 || var_83[var_314].Var31 == 4 || var_83[var_314].Var31 == 5) {
                var_340 = var_3056;
                return;
            }
            var_1916 = var_233[var_225].Var6;
            var_3060 = 1;
            var_3061 = 0;
            var_2104 = var_1838 + var_1849;
            for (let cnt2 = 0; cnt2 < var_2104; ++cnt2) {
                if (var_486[var_1916][var_3060][15] == 0) {
                    var_3061 = var_3060;
                    break;
                }
                var_3060++;
            }
            if (var_3061 == 0) {
                var_340 = var_3056;
                return;
            }
            var_1838 = var_1838 - 1;
            var_1849 = var_1849 + 1;
            var_486[var_1916][var_3060][15] = var_83[var_314].Var0;
            var_486[var_1916][var_3060][18] = var_83[var_314].Var39;
            enemy_list = var_83[var_314].Var0;
    
            DSPLAY(audio_id = 130);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "を";
            if (var_862[851][0] == 1) {
                comments_row2 = "ビンの中に閉じ込めた！";
            }
            if (var_862[851][0] == 0) {
                comments_row2 = "ヤバイものに閉じ込めた！";
            }
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_82[var_455][var_456] = 0;
            var_83[var_314].Var0 = 0;
            var_83[var_314].Var1 = 0;
            var_83[var_314].Var2 = 0;
            if (equip_disc[122] == 1) {
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                    var_198 = 1;
                    var_300 = 0;
                }
            }
            if (equip_disc[122] == 0) {
                var_1340 = (var_455 - var_66 + 4) * 40;
                var_1341 = (var_456 - var_67 + 4) * 40;
                var_271 = 1;
                var_1339 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                    var_198 = 1;
                    var_300 = 0;
                    var_1339++;
                }
                var_271 = 0;
                var_1339 = 0;
            }
            var_1901 = 1;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 727) {
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var13 = 0;
            var_83[var_314].Var8 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_3057 = enemy_name;
            var_83[var_314].Var3 = enemy_hp;
            if (var_83[var_314].Var39 >= 2) {
                var_3059 = Math.floor(enemy_hp * (var_83[var_314].Var39 + 10) / 10);
                if (var_3059 >= 999) {
                    var_3059 = 999;
                }
                var_83[var_314].Var3 = var_3059;
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + var_3057 + "を";
            comments_row2 = "ｿﾞﾝﾋﾞ馬で縫った。";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + var_3057 + "の";
            comments_row2a = "傷は完全に回復した。";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            var_340 = var_3056;
            return;
        }
        if (var_340 == 712) {
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var13 = 0;
            if (var_114 == var_314) {
                var_114 = 0;
            }
            var_83[var_314].Var8 = 1;

            DSPLAY(audio_id = 143);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_3057 = enemy_name;
            var_83[var_314].Var3 = enemy_hp;
            if (var_83[var_314].Var39 >= 2) {
                var_3059 = Math.floor(enemy_hp * (var_83[var_314].Var39 + 10) / 10);
                if (var_3059 >= 999) {
                    var_3059 = 999;
                }
                var_83[var_314].Var3 = var_3059;
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + var_3057 + "は";
            comments_row2 = "体力が回復した。";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            var_83[var_314].Var17 = 1;
    
            DSPLAY(audio_id = 134);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + var_3057 + "は";
            comments_row2a = "混乱してしまった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            var_340 = var_3056;
            return;
        }
        if (var_340 == 405 || var_2937 == 1 || var_340 == 318) {
            var_1894 = 0;
            var_1895 = 0;
            var_1385 = var_82[var_455][var_456];
            var_82[var_455][var_456] = 0;
            if (var_83[var_1385].Var13 != 0) {
                var_460 = var_1385;
                yield func024();
            }
            if (var_83[var_1385].Var12 == 99) {
                var_83[var_1385].Var12 = 0;
            }
            if (var_83[var_1385].Var0 == 33) {
                var_83[var_1385].Var0 = 34;
                var_83[var_1385].Var31 = 1;
            }
            var_83[var_1385].Var8 = 1;
            var_3062 = 0;
            var_3063 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                var_82[var_1894][var_1895] = 0;
                var_82[var_455][var_456] = var_1385;
                var_83[var_1385].Var1 = var_455;
                var_83[var_1385].Var2 = var_456;
                yield func337(); // メッセージ関係呼び出し
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
                if (var_71[var_455][var_456] == 0) {
                    var_3063 = 1;
                    break;
                }
                if (var_82[var_455][var_456] > 0) {
                    var_3062 = 1;
                    break;
                }
            }
            var_3064 = var_1894;
            var_3065 = var_1895;
            var_3066 = var_455;
            var_3067 = var_456;
            var_271 = 1;
            var_1384 = 1;
            var_1386 = var_83[var_1385].Var0;
            var_83[var_1385].Var11 = 1;
            if (var_3062 == 1) {
                var_3068 = var_82[var_455][var_456];
                var_83[var_3068].Var8 = 1;
                if (var_83[var_3068].Var13 != 0) {
                    var_460 = var_3068;
                    yield func024();
                }
                if (var_83[var_3068].Var12 == 99) {
                    var_83[var_3068].Var12 = 0;
                }
                if (var_83[var_3068].Var0 == 33) {
                    var_83[var_3068].Var0 = 34;
                    var_83[var_3068].Var31 = 1;
                }
            }
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1894 = var_3064;
            var_1895 = var_3065;
            var_455 = var_3066;
            var_456 = var_3067;
            var_271 = 0;
            var_1384 = 0;
            var_83[var_1385].Var11 = 0;
            if (var_3062 == 1) {
                var_82[var_1894][var_1895] = 0;
                var_2294 = var_455 - 1;
                if (var_2294 < 0) {
                    var_2294 = 0;
                }
                var_2295 = var_455 + 1;
                if (var_2295 > var_33) {
                    var_2295 = var_33;
                }
                var_2296 = var_456 + 1;
                if (var_2296 > var_34) {
                    var_2296 = var_34;
                }
                var_2297 = var_456 - 1;
                if (var_2297 < 0) {
                    var_2297 = 0;
                }
                var_2298 = 0;
                if (var_2298 == 0 && var_71[var_2294][var_2296] != 0 && var_71[var_2294][var_2296] != 13 && var_82[var_2294][var_2296] == 0 && var_65[var_2294][var_2296] == 0) {
                    var_1894 = var_2294;
                    var_1895 = var_2296;
                    var_2298 = 1;
                }
                if (var_2298 == 0 && var_71[var_2295][var_2296] != 0 && var_71[var_2295][var_2296] != 13 && var_82[var_2295][var_2296] == 0 && var_65[var_2295][var_2296] == 0) {
                    var_1894 = var_2295;
                    var_1895 = var_2296;
                    var_2298 = 1;
                }
                if (var_2298 == 0 && var_71[var_2294][var_2297] != 0 && var_71[var_2294][var_2297] != 13 && var_82[var_2294][var_2297] == 0 && var_65[var_2294][var_2297] == 0) {
                    var_1894 = var_2294;
                    var_1895 = var_2297;
                    var_2298 = 1;
                }
                if (var_2298 == 0 && var_71[var_2295][var_2297] != 0 && var_71[var_2295][var_2297] != 13 && var_82[var_2295][var_2297] == 0 && var_65[var_2295][var_2297] == 0) {
                    var_1894 = var_2295;
                    var_1895 = var_2297;
                    var_2298 = 1;
                }
                if (var_2298 == 0 && var_71[var_2294][var_1895] != 0 && var_71[var_2294][var_1895] != 13 && var_82[var_2294][var_1895] == 0 && var_65[var_2294][var_1895] == 0) {
                    var_1894 = var_2294;
                    var_2298 = 1;
                }
                if (var_2298 == 0 && var_71[var_2295][var_1895] != 0 && var_71[var_2295][var_1895] != 13 && var_82[var_2295][var_1895] == 0 && var_65[var_2295][var_1895] == 0) {
                    var_1894 = var_2295;
                    var_2298 = 1;
                }
                if (var_2298 == 0 && var_71[var_1894][var_2296] != 0 && var_71[var_1894][var_2296] != 13 && var_82[var_1894][var_2296] == 0 && var_65[var_1894][var_2296] == 0) {
                    var_1895 = var_2296;
                    var_2298 = 1;
                }
                if (var_2298 == 0 && var_71[var_1894][var_2297] != 0 && var_71[var_1894][var_2297] != 13 && var_82[var_1894][var_2297] == 0 && var_65[var_1894][var_2297] == 0) {
                    var_1895 = var_2297;
                    var_2298 = 1;
                }
            }
            var_82[var_1894][var_1895] = var_1385;
            var_83[var_1385].Var1 = var_1894;
            var_83[var_1385].Var2 = var_1895;
            var_83[var_1385].Var10 = var_71[var_1894][var_1895];
            if (var_1385 == var_114) {
                if (var_83[var_1385].Var1 != var_463 || var_83[var_1385].Var2 != var_464) {
                    var_114 = 0;
                    var_463 = 0;
                    var_464 = 0;
                    var_461 = 0;
                    var_462 = 0;
                }
            }
            if (var_3062 == 1 || var_3063 == 1 || var_83[var_1385].Var0 == 61 || var_83[var_1385].Var0 == 163) {
                var_403 = "";
                var_209 = 5;
                var_402 = var_1385;
                yield func705();
            }
            if (var_3062 == 1) {
                var_403 = "";
                var_209 = 5;
                var_402 = var_3068;
                yield func705();
            }
            var_3069 = var_83[var_1385].Var1;
            var_3070 = var_83[var_1385].Var2;
            if (var_71[var_3069][var_3070] == 0) {
                var_314 = var_1385;
                yield func669();
            }
            if (var_71[var_3069][var_3070] == 13) {
                var_314 = var_1385;
                if (var_83[var_314].Var0 == 44) {
                    yield func670();
                    if (var_3071 == 1) {
                        var_3071 = 0;
                        var_340 = var_3056;
                        return;
                    }
                }
                yield func669();
            }
            var_83[var_1385].Var8 = 0;
            var_83[var_3068].Var8 = 0;
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_340 = var_3056;
            return;
        }
        if (var_340 == 123) {
            var_314 = var_82[var_455][var_456];
            if (var_83[var_314].Var0 == 33 || var_83[var_314].Var0 == 34 || var_83[var_314].Var0 == 143 || var_83[var_314].Var0 == 132 || var_83[var_314].Var0 == 20) {
                if (var_83[var_314].Var12 == 99) {
                    var_83[var_314].Var12 = 0;
                }
                var_83[var_314].Var13 = 0;
                var_402 = var_314;
                var_209 = 10;
                var_403 = "とっさにかわされて";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func705();
                var_340 = var_3056;
                return;
            }
            var_82[var_455][var_456] = 0;
            var_83[var_314].Var0 = 0;
            var_83[var_314].Var1 = 0;
            var_83[var_314].Var2 = 0;
            var_1196 = 1;
    
            DSPLAY(audio_id = 122);
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_340 = var_3056;
            return;
        }
        if (var_340 == 408) {
            yield func662();
            var_369 = 1;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 584) {
            var_314 = var_82[var_455][var_456];
            if (var_83[var_314].Var13 != 0) {
                var_460 = var_314;
                yield func024();
            }
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            if (var_83[var_314].Var25 <= 50) {
                var_83[var_314].Var25 = 50;
            }
            var_83[var_314].Var25 = var_83[var_314].Var25 + 5;
            if (var_83[var_314].Var25 >= 99) {
                var_83[var_314].Var25 = 99;
            }
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_83[var_314].Var8 = 1;
    
            DSPLAY(audio_id = 164);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "は";
            comments_row2 = "攻撃力が下がった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 588) {
            var_314 = var_82[var_455][var_456];
            if (var_83[var_314].Var13 != 0) {
                var_460 = var_314;
                yield func024();
            }
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            if (var_83[var_314].Var25 >= 50) {
                var_83[var_314].Var25 -= 2;
                if (var_83[var_314].Var25 < 50) {
                    var_83[var_314].Var25 = 0;
                }
            }
            if (var_83[var_314].Var25 < 50) {
                var_83[var_314].Var25 += 2;
                if (var_83[var_314].Var25 >= 50) {
                    var_83[var_314].Var25 = 49;
                }
            }
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_83[var_314].Var8 = 1;
    
            DSPLAY(audio_id = 182);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "は";
            comments_row2 = "攻撃力が上がった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 103 || var_340 == 115) {
            var_314 = var_82[var_455][var_456];
            if (var_83[var_314].Var13 != 0) {
                var_460 = var_314;
                yield func024();
            }
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            if (var_83[var_314].Var15 == 0) {
                var_83[var_314].Var14 = 1;
            }
            if (var_83[var_314].Var15 != 0) {
                var_83[var_314].Var14 = 0;
                var_83[var_314].Var15 = 0;
            }
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_83[var_314].Var8 = 1;
    
            DSPLAY(audio_id = 162);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "は";
            comments_row2 = "動きが鈍くなった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 503 || var_340 == 575 || var_340 == 107) {
            var_1196 = 1;
            var_83[var_314].Var8 = 1;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_314 = var_82[var_455][var_456];
            var_83[var_314].Var13 = 0;
            var_83[var_314].Var12 = 6;
            if (var_114 == var_314) {
                var_114 = 0;
            }
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
    
            DSPLAY(audio_id = 132);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "は";
            comments_row2 = "眠ってしまった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_340 = var_3056;
            return;
        }
        if (var_340 == 412) {
            var_314 = var_82[var_455][var_456];
            var_2964 = var_314;
            if (var_83[var_314].Var0 == 53 || var_83[var_314].Var0 == 23 || var_83[var_314].Var0 == 50 || var_83[var_314].Var0 == 90 || var_83[var_314].Var0 == 74 || var_83[var_314].Var0 == 75) {
                var_340 = var_3056;
                return;
            }
            if (var_83[var_314].Var23 == 0) {
                var_1195 = 1;
    
                DSPLAY(audio_id = 118);
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "「ヘブンズドアー！」";
                comments_row2 = "「特殊な行動ができなくなる！」";
                if (var_83[var_2964].Var20 >= 1) {
                    comments_row2 = "「攻撃することはできない！」";
                }
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_1195 = 0;
                if (var_83[var_2964].Var20 == 1) {
                    var_83[var_2964].Var20 = 2;
                }
                if (var_83[var_2964].Var20 == 0) {
                    var_83[var_2964].Var20 = 1;
                }
                if (var_83[var_314].Var12 == 99) {
                    var_83[var_2964].Var12 = 0;
                }
                var_83[var_2964].Var15 = 0;
                var_83[var_2964].Var30 = 0;
                if (var_83[var_2964].Var0 == 97) {
                    var_83[var_2964].Var31 = 0;
                }
                if (var_114 == var_2964) {
                    var_114 = 0;
                }
                var_340 = var_3056;
                return;
            }
            if (var_83[var_314].Var23 != 0) {
                var_1195 = 1;
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "「ヘブンズドアー！」";
                comments_row2 = "";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_1195 = 0;
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "見えてなくて効かなかった…";
                comments_row2a = "";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                var_340 = var_3056;
                return;
            }
            return;
        }
        if (var_340 == 205 || var_340 == 489) {
            var_314 = var_82[var_455][var_456];
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var13 = 99;
            if (var_114 == var_314) {
                var_114 = 0;
            }
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_83[var_314].Var8 = 1;
    
            DSPLAY(audio_id = 126);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "を";
            comments_row2 = "その場に固定した！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 404 || var_340 == 202) {
            var_314 = var_82[var_455][var_456];
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var13 = 1;
            if (var_114 == var_314) {
                var_114 = 0;
            }
    
            DSPLAY(audio_id = 126);
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_83[var_314].Var8 = 1;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "は";
            comments_row2 = "氷漬けになった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 409) {
            var_314 = var_82[var_455][var_456];
            if (var_83[var_314].Var0 == 90 || var_83[var_314].Var0 == 53 || var_83[var_314].Var0 == 23) {
                var_340 = var_3056;
                return;
            }
            if (var_83[var_314].Var13 != 0) {
                var_460 = var_314;
                yield func024();
            }
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var19 = 1;
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_83[var_314].Var8 = 1;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "に";
            comments_row2 = "ラバーズが取り付いた！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 316 || var_340 == 574 || var_340 == 560 || var_340 == 406) {
            var_83[var_314].Var17 = 1;
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var13 = 0;
            if (var_114 == var_314) {
                var_114 = 0;
            }
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_83[var_314].Var8 = 1;
    
            DSPLAY(audio_id = 134);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "は";
            comments_row2 = "混乱してしまった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_83[var_314].Var0 == 43 && var_340 == 802) {
            var_83[var_314].Var17 = 1;
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var13 = 0;
            if (var_114 == var_314) {
                var_114 = 0;
            }
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_83[var_314].Var8 = 1;
    
            DSPLAY(audio_id = 134);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "は";
            comments_row2 = "鼓膜が破れてしまった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 563 || var_340 == 495) {
            var_83[var_314].Var23 = 1;
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var13 = 0;
            if (var_114 == var_314) {
                var_114 = 0;
            }
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_83[var_314].Var8 = 1;
    
            DSPLAY(audio_id = 153);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "の";
            comments_row2 = "目は見えなくなった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 322 || var_340 == 578) {
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var13 = 0;
            if (var_83[var_314].Var14 == 0) {
                var_83[var_314].Var15 = 1;
            }
            if (var_83[var_314].Var14 != 0) {
                var_83[var_314].Var14 = 0;
                var_83[var_314].Var15 = 0;
            }
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_83[var_314].Var8 = 1;
    
            DSPLAY(audio_id = 154);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "の";
            comments_row2 = "動きが速くなった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 320 || var_340 == 817) {
            var_83[var_314].Var30 = 1;
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var13 = 0;
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            var_83[var_314].Var8 = 1;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "は";
            comments_row2 = "透明状態になった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 1101) {
            var_83[var_314].Var8 = 1;
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var13 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var30 = 1;
            var_1584 = (var_83[var_314].Var1 - var_66 + 4) * 40;
            var_1585 = (var_83[var_314].Var2 - var_67 + 4) * 40 - 10;
            var_271 = 1;
            var_1583 = 1;
    
            DSPLAY(audio_id = 175);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                if (cnt2 == 4) {
                    var_83[var_314].Var8 = 0;
                }
                yield func337(); // メッセージ関係呼び出し
                var_1583++;
            }
            var_271 = 0;
            var_1583 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ｱｸｱ･ﾈｯｸﾚｽは";
            comments_row2 = "蒸発して透明になった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_340 = var_3056;
            return;
        }
        if (var_340 == 562 || var_340 == 991 || var_340 == 992 || var_340 == 993 || var_340 == 995 || var_340 == 996) {
            if (var_83[var_314].Var31 != 5 && var_83[var_314].Var31 != 4) {
                if (var_83[var_314].Var12 == 99) {
                    var_83[var_314].Var12 = 0;
                }
                var_83[var_314].Var13 = 0;
                var_83[var_314].Var39 = var_83[var_314].Var39 + 1;
                if (var_83[var_314].Var39 == 1) {
                    var_83[var_314].Var39 = 2;
                }
                enemy_list = var_83[var_314].Var0;
                if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                    enemy_list = var_83[var_314].Var31;
                }
                yield func626();
                var_83[var_314].Var3 = Math.floor(enemy_hp * (var_83[var_314].Var39 + 10) / 10);
                if (var_83[var_314].Var3 >= 999) {
                    var_83[var_314].Var3 = 999;
                }
                var_83[var_314].Var8 = 1;
        
                DSPLAY(audio_id = 142);
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "" + enemy_name + "は";
                comments_row2 = "レベルが上がった！";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_83[var_314].Var8 = 0;
                var_340 = var_3056;
                return;
            }
            if (var_83[var_314].Var31 == 5 && var_83[var_314].Var39 < 10) {
                if (var_83[var_314].Var12 == 99) {
                    var_83[var_314].Var12 = 0;
                }
                var_83[var_314].Var13 = 0;
                var_83[var_314].Var8 = 1;
                belongings_item_list = var_340;
                disc_rarity = var_1833;
                yield func492(); // アイテムリスト呼び出し
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "" + item_name + "が命中した！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                var_3072 = var_314;
                yield func682();
                var_83[var_314].Var16 = var_83[var_314].Var16 + var_3073;
                var_1912 = var_673;
                var_673 = var_314;
                yield func683();
                var_673 = var_1912;
                var_83[var_314].Var8 = 0;
                var_340 = var_3056;
                return;
            }
        }
        if (var_340 == 586 && var_83[var_314].Var39 >= 2) {
            if (var_83[var_314].Var12 == 99) {
                var_83[var_314].Var12 = 0;
            }
            var_83[var_314].Var13 = 0;
            var_83[var_314].Var39 = var_83[var_314].Var39 - 1;
            if (var_83[var_314].Var39 <= 1) {
                var_83[var_314].Var39 = 0;
            }
            if (var_83[var_314].Var31 == 5) {
                var_3072 = var_314;
                yield func682();
                var_83[var_314].Var16 = var_83[var_314].Var16 + var_3073;
                var_83[var_314].Var16 = var_83[var_314].Var16 - 1;
            }
            enemy_list = var_83[var_314].Var0;
            if (var_83[var_314].Var0 == 97 && var_83[var_314].Var31 >= 11) {
                enemy_list = var_83[var_314].Var31;
            }
            yield func626();
            if (var_83[var_314].Var3 >= enemy_hp) {
                var_83[var_314].Var3 = enemy_hp;
            }
            var_83[var_314].Var8 = 1;
    
            DSPLAY(audio_id = 151);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + enemy_name + "は";
            comments_row2 = "レベルが下がった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 1100) {
            var_83[var_314].Var12 = 0;
            var_83[var_314].Var13 = 0;
            yield func127();
            var_83[var_314].Var8 = 1;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ﾍﾟｯｼ「プロシュート兄貴ィ！」";
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
            comments_row1a = "ﾍﾟｯｼ「兄貴の覚悟が！";
            comments_row2a = "　【言葉】ではなく【心】で理解できた！」";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_83[var_314].Var0 = 107;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 576) {
            var_83[var_314].Var12 = 0;
            var_83[var_314].Var13 = 0;
            var_83[var_314].Var24 = 10;
            var_83[var_314].Var8 = 1;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "【10ターン後に破裂する！】";
            comments_row2 = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            var_340 = var_3056;
            return;
        }
        if (var_340 == 488) {
            yield func668();
            var_340 = var_3056;
            return;
        }
        if (var_340 == 579) {
    
            DSPLAY(audio_id = 117);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func669();
            var_340 = var_3056;
            return;
        }
        if (var_340 == 1102) {
            var_83[var_314].Var8 = 1;
    
            DSPLAY(audio_id = 117);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_83[var_314].Var0 == 93) {
                comments_row1 = "ｴﾝﾎﾟﾘｵにDISCが差し込まれた！";
            }
            if (var_83[var_314].Var0 == 156) {
                comments_row1 = "ｳｪｻﾞｰにDISCが差し込まれた！";
            }
            if (var_83[var_314].Var0 == 144) {
                comments_row1 = "川尻浩作に矢が刺さった！";
            }
            comments_row2 = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_83[var_314].Var8 = 0;
            if (var_83[var_314].Var0 == 93) {
                var_83[var_314].Var0 = 98;
            }
            if (var_83[var_314].Var0 == 156) {
                var_83[var_314].Var0 = 159;
            }
            if (var_83[var_314].Var0 == 144) {
                var_83[var_314].Var0 = 137;
            }
            return;
        }
        yield func661();
        var_673 = var_314;
        var_403 = "";
        var_402 = var_314;
        if (var_340 == 401) {
            if (var_120 == 1 || var_174 == 1) {
                var_403 = "F・Fのパワーは全開だ！";
            }
        }
        if (var_340 == 414 && var_168 == 1) {
            var_403 = "爪の回転がアップしている！";
        }
        if (var_340 == 411) {
            if (var_2992 == 0) {
                var_403 = "";
            }
            if (var_2992 == 1) {
                var_403 = "";
            }
            if (var_2992 == 2) {
                var_403 = "「ビンゴォ！」";
            }
            if (var_2992 == 3) {
                var_403 = "";
            }
            if (var_2992 == 4) {
                var_403 = "「舌を引きちぎった！」";
            }
            if (var_2992 == 5) {
                var_403 = "";
            }
            if (var_2992 == 6) {
                var_403 = "「マサクゥル！（みな殺し！）」";
            }
            if (var_2992 == 7) {
                var_403 = "";
            }
            if (var_2992 == 8) {
                var_403 = "「ビンゴにゃあ のろすぎるゥゥゥゥゥ」";
            }
            if (var_2992 >= 9) {
                var_403 = "";
            }
        }
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func705();
        var_83[var_314].Var8 = 0;
        if (var_83[var_314].Var0 == 33) {
            var_83[var_314].Var0 = 34;
            var_83[var_314].Var31 = 1;
        }
        var_340 = var_3056;
        return;
    });
}
function func661(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(661);
        var_3074 = rnd(3);
        var_209 = var_3074 + 1;
        var_3075 = 0;
        if (var_340 >= 400 && var_340 < 420) {
            var_3075 = 1;
        }
        if (var_340 == 490) {
            var_3075 = 1;
        }
        if (var_340 == 698) {
            var_3075 = 1;
        }
        if (var_3075 == 1) {
            var_3076 = 0;
            if (var_340 == 400) {
                var_3076 = 10;
            }
            if (var_340 == 401) {
                var_3076 = 2;
            }
            if (var_340 == 402) {
                var_3076 = 8;
            }
            if (var_340 == 403) {
                var_3076 = 6;
            }
            if (var_340 == 407) {
                var_3076 = 15;
            }
            if (var_340 == 411) {
                var_3076 = 5;
            }
            if (var_340 == 414) {
                var_3076 = 12;
            }
            if (var_340 == 490) {
                var_3076 = 8;
            }
            if (var_340 == 698) {
                var_3076 = 2;
            }
            if (equip_disc[306] == 1) {
                yield func428();
                var_3076 = var_3076 + var_233[var_555].Var4;
            }
            if (var_83[var_314].Var39 >= 2) {
                if (var_83[var_314].Var31 == 4 || var_83[var_314].Var31 == 5) {
                    enemy_defence = Math.floor(enemy_defence * (var_83[var_314].Var39 * 2 + 10) / 10);
                }
            }
            yield func679();
            var_949 = Math.floor(var_950 * (var_3076 + var_565 - 8) / 16) + var_950;
            var_951 = var_949;
            for (let cnt2 = 0; cnt2 < enemy_defence; ++cnt2) {
                var_949 = Math.floor(var_949 * 15 / 16);
            }
            if (var_949 == 0) {
                var_949 = 1;
            }
            var_2817 = rnd(33);
            var_2817 = var_2817 + 111;
            var_209 = Math.floor(var_949 * var_2817 / 128);
        }
        if (var_340 == 1) {
            var_209 = var_1888;
        }
        if (var_340 == 699) {
            var_209 = 40;
        }
        if (var_340 == 654) {
            var_209 = 80;
        }
        if (var_340 == 726) {
            var_209 = 80;
        }
        if (var_340 == 487) {
            var_209 = 40;
        }
        if (var_340 == 401) {
            if (var_120 == 1 || var_174 == 1) {
                var_209 = Math.floor((var_209 + var_209 + var_209) / 2);
            }
        }
        if (var_340 == 414 && var_168 == 1) {
            var_209 = Math.floor((var_209 + var_209 + var_209) / 2);
        }
        if (var_138 == 1) {
            var_209 = Math.floor((var_209 + var_209 + var_209) / 2);
        }
        if (sympathy_id == 101 || sympathy_id == 109) {
            var_209 = Math.floor((var_209 + var_209 + var_209) / 2);
        }
        if (var_83[var_314].Var13 >= 1 && var_83[var_314].Var13 != 99) {
            var_209 = Math.floor((var_209 + var_209 + var_209) / 2);
        }
        if (var_83[var_314].Var0 == 73 && var_83[var_314].Var13 >= 1 && var_83[var_314].Var13 != 99) {
            var_209 = 999;
        }
        if (var_83[var_314].Var0 == 141 && var_340 == 582) {
            var_209 = 999;
        }
        if (var_83[var_314].Var0 == 44 && var_340 == 802) {
            var_209 = 999;
        }
        if (var_340 == 994) {
            var_209 = 999;
        }
        if (var_209 < 1) {
            var_209 = 1;
        }
        if (var_209 >= 65525) {
            var_209 = 65525;
        }
        return;
    });
}
function func662(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(662);
        var_1162 = 1;
        var_271 = 1;
        var_1238 = 1;
        var_1971 = var_199;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        for (let cnt1 = 0; cnt1 < 60; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1238 = var_1238 + 1;
            if (var_1238 == 10) {
        
                DSPLAY(audio_id = 218);
            }
            if (var_1238 == 23) {
        
                DSPLAY(audio_id = 103); // 殴った時の効果音
            }
            if (var_1238 == 34) {
        
                DSPLAY(audio_id = 218);
            }
            if (var_1238 == 22) {
                var_83[var_314].Var8 = 1;
                var_199 = 8;
            }
            if (var_1238 == 35) {
                var_83[var_314].Var11 = 1;
            }
        }
        var_65[var_66][var_67] = 0;
        var_65[var_455][var_456] = 1;
        var_314 = var_82[var_455][var_456];
        var_83[var_314].Var1 = var_66;
        var_83[var_314].Var2 = var_67;
        var_83[var_314].Var10 = var_71[var_66][var_67];
        var_82[var_455][var_456] = 0;
        var_82[var_66][var_67] = var_314;
        var_66 = var_455;
        var_67 = var_456;
        var_279 = var_201;
        var_201 = var_71[var_66][var_67];
        var_74[var_66][var_67] = 1;
        var_74[var_289][var_67] = 1;
        var_74[var_290][var_67] = 1;
        var_74[var_66][var_291] = 1;
        var_74[var_66][var_292] = 1;
        var_74[var_289][var_291] = 1;
        var_74[var_289][var_292] = 1;
        var_74[var_290][var_291] = 1;
        var_74[var_290][var_292] = 1;
        var_75[var_201] = 1;
        if (var_314 == var_114) {
            var_114 = 0;
        }
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_83[var_314].Var11 = 0;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1238 = var_1238 + 1;
            if (var_1238 == 65) {
        
                DSPLAY(audio_id = 107);
            }
            if (var_1238 == 76) {
        
                DSPLAY(audio_id = 218);
            }
            if (var_1238 == 75) {
                var_83[var_314].Var8 = 0;
                var_199 = 2;
            }
        }
        var_271 = 0;
        var_1238 = 0;
        var_1162 = 0;
        var_199 = var_1971;
        var_3069 = var_83[var_314].Var1;
        var_3070 = var_83[var_314].Var2;
        if (var_71[var_3069][var_3070] == 0 || var_71[var_3069][var_3070] == 13) {
            if (var_71[var_3069][var_3070] == 13 && var_83[var_314].Var0 == 44) {
                yield func670();
                if (var_3071 == 1) {
                    var_3071 = 0;
                    return;
                }
            }
            yield func669();
        }
        return;
    });
}
function func663(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(663);
        if (var_83[var_314].Var12 == 99) {
            var_83[var_314].Var12 = 0;
        }
        var_83[var_314].Var13 = 0;
        belongings_item_list = var_340;
        disc_rarity = var_1833;
        yield func492(); // アイテムリスト呼び出し
        var_83[var_314].Var21 = 1;
        var_772 = 1;
        var_1288 = 1;
        var_1289 = var_340;
        if (var_1270 == 0) {
            item_name = "弾丸";
        }

        DSPLAY(audio_id = 123);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_83[var_314].Var0 == 9) {
            comments_row1 = "「" + item_name + "喰って";
            comments_row2 = "　パワーアップッ！」";
        }
        if (var_83[var_314].Var0 == 10) {
            comments_row1 = "" + item_name + "を";
            comments_row2 = "吸収している！！";
        }
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        var_411 = 1;
        for (let cnt1 = 0; cnt1 < 16; ++cnt1) {
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_411 = var_411 + 1;
            if (var_411 == 4) {
                var_411 = 1;
            }
            var_300 = 0;
        }
        var_772 = 0;
        var_1288 = 0;
        var_411 = 0;
        var_83[var_314].Var21 = 0;

        DSPLAY(audio_id = 142);
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        if (var_83[var_314].Var0 == 9) {
            comments_row1a = "ﾗﾊﾞｰｿｳﾙはレベルが上がった！";
            comments_row2a = "";
        }
        if (var_83[var_314].Var0 == 10) {
            comments_row1a = "ﾉﾄｰﾘｱｽBIGはレベルが上がった！";
            comments_row2a = "";
        }
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        var_83[var_314].Var39 = var_83[var_314].Var39 + 1;
        if (var_83[var_314].Var39 == 1) {
            var_83[var_314].Var39 = 2;
        }
        enemy_list = var_83[var_314].Var0;
        yield func626();
        var_83[var_314].Var3 = Math.floor(enemy_hp * (var_83[var_314].Var39 + 10) / 10);
        if (var_83[var_314].Var3 >= 999) {
            var_83[var_314].Var3 = 999;
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func664(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(664);
        if (var_83[var_314].Var12 == 99) {
            var_83[var_314].Var12 = 0;
        }
        var_83[var_314].Var13 = 0;

        DSPLAY(audio_id = 122);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "暗黒空間に消えた";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        var_748 = var_83[var_314].Var1 - var_66 + 4;
        var_749 = var_83[var_314].Var2 - var_67 + 4;
        var_271 = 1;
        var_1356 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1356++;
        }
        var_271 = 0;
        var_1356 = 0;
        return;
    });
}
function func665(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(665);
        if (var_83[var_314].Var12 == 99) {
            var_83[var_314].Var12 = 0;
        }
        var_83[var_314].Var13 = 0;

        DSPLAY(audio_id = 175);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ウェザーに届く寸前で燃え尽きた。";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        var_1584 = (var_83[var_314].Var1 - var_66 + 4) * 40;
        var_1585 = (var_83[var_314].Var2 - var_67 + 4) * 40 - 10;
        var_1583 = 1;
        var_271 = 1;
        for (let cnt1 = 0; cnt1 < 16; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1583++;
        }
        var_1583 = 0;
        var_271 = 0;
        return;
    });
}
function func666(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(666);

        DSPLAY(audio_id = 126);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ジェントリー・ウィープス！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        gsel(19);
        color(255, 255, 255);

        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_311 = 255;
        var_312 = 1;
        yield func337(); // メッセージ関係呼び出し
        var_312 = 0;
        var_1415 = 1;
        var_271 = 1;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1415 = var_1415 + 1;
        }
        var_1415 = 0;
        var_1423 = 1;

        DSPLAY(audio_id = 215);
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1423 = var_1423 + 1;
        }
        var_1423 = 0;
        var_1270 = 0;
        var_340 = 0;
        var_1424 = 0;
        for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1424 = var_1424 + 20;
        }
        var_1424 = 0;
        var_271 = 0;
        enemy_list = var_83[var_314].Var0;
        yield func626();
        if (var_83[var_314].Var39 >= 2) {
            enemy_power = Math.floor(enemy_power * (var_83[var_314].Var39 * 2 + 10) / 10);
        }
        if (var_83[var_314].Var25 >= 1 && var_83[var_314].Var25 <= 50) {
            enemy_power = enemy_power + var_83[var_314].Var25;
        }
        if (var_83[var_314].Var25 >= 51 && var_83[var_314].Var25 < 99) {
            enemy_power = enemy_power - (var_83[var_314].Var25 - 50);
            if (enemy_power <= 1) {
                enemy_power = 1;
            }
        }
        var_949 = Math.floor(enemy_power * (enemy_power + enemy_power - 8) / 16) + enemy_power;
        for (let cnt1 = 0; cnt1 < var_581; ++cnt1) {
            var_949 = Math.floor(var_949 * 15 / 16);
        }
        var_2817 = rnd(33);
        var_2817 = var_2817 + 111;
        var_209 = Math.floor(var_949 * var_2817 / 128);
        if (var_209 <= 1) {
            var_209 = 1;
        }
        var_209 = Math.floor(var_209 / 2);
        if (var_209 <= 1) {
            var_209 = 1;
        }

        DSPLAY(audio_id = 105);
        var_747 = 1;
        var_389 = 2;
        var_211 = var_211 - var_209;
        var_208 = var_208 + var_2455;
        if (var_211 <= 0) {
            var_211 = 0;
            var_356 = 223;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "氷の塊を喰らった！";
        comments_row2 = "" + var_209 + "のダメージ！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_389 = 0;
        var_747 = 0;
        return;
    });
}
function func667(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(667);
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1195 = 0;
        var_1914 = var_1894;
        var_1915 = var_1895;
        var_1845 = 3;
        var_2109 = 1;
        yield func556();
        var_1845 = 0;
        var_2109 = 0;
        var_748 = var_1914 - var_66 + 4;
        var_749 = var_1915 - var_67 + 4;
        if (var_2110 == 1) {
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
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func668(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(668);
        var_1389 = var_455;
        var_1390 = var_456;
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
        if (var_71[var_1389][var_1390] == 0) {
            var_347 = var_1389;
            var_348 = var_1390;
            yield func622();
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
            if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1389 && var_83[var_2194].Var2 == var_1390) {
                yield func700();
            }
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
        if (var_65[var_1993][var_1390] == 1 || var_65[var_1994][var_1390] == 1 || var_65[var_1389][var_1995] == 1 || var_65[var_1389][var_1996] == 1 || var_65[var_1993][var_1995] == 1 || var_65[var_1994][var_1995] == 1 || var_65[var_1993][var_1996] == 1 || var_65[var_1994][var_1996] == 1) {
            var_389 = 2;
            if (var_211 == 1) {
                var_211 = 0;
                var_356 = 248;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_389 = 0;
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
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
        }
        var_2199 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_2199].Var0 == 17 && var_83[var_2199].Var29 == 1) {
                yield func699();
                var_2199 = 1;
                cnt1 = -1;
                continue;
            }
            var_2199++;
        }
        return;
    });
}
function func669(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(669);
        if (var_83[var_314].Var0 == 0 || var_83[var_314].Var3 == 0) {
            return;
        }
        if (var_83[var_314].Var12 == 99) {
            var_83[var_314].Var12 = 0;
        }
        var_83[var_314].Var13 = 0;
        var_2672 = var_83[var_314].Var1;
        var_2673 = var_83[var_314].Var2;
        if (var_314 == var_114) {
            var_114 = 0;
        }
        var_83[var_314].Var11 = 1;
        var_1351 = var_314;
        var_1352 = var_83[var_314].Var0;
        var_271 = 1;
        var_1350 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            if (var_1350 == 2) {
    
                DSPLAY(audio_id = 216);
            }
            var_1350 = var_1350 + 1;
        }
        var_271 = 0;
        var_1350 = 0;
        var_1349 = 0;
        for (let cnt1 = 0; cnt1 < 500; ++cnt1) {
            var_2350 = rnd(var_33);
            var_2351 = rnd(var_34);
            if (var_71[var_2350][var_2351] != 0 && var_65[var_2350][var_2351] == 0 && var_82[var_2350][var_2351] == 0 && var_71[var_2350][var_2351] != 13) {
                var_1349 = 1;
                break;
            }
        }
        if (var_1349 == 0) {
            var_2350 = var_2672;
            var_2351 = var_2673;
        }
        if (var_1349 == 1) {
            var_83[var_314].Var1 = var_2350;
            var_83[var_314].Var2 = var_2351;
            var_83[var_314].Var10 = var_71[var_2350][var_2351];
            var_82[var_2350][var_2351] = var_82[var_2672][var_2673];
            var_82[var_2672][var_2673] = 0;
            var_83[var_314].Var9 = 0;
            var_83[var_314].Var18 = 0;
        }
        var_83[var_314].Var11 = 0;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func670(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(670);
        var_3071 = 0;
        var_83[var_314].Var8 = 1;

        DSPLAY(audio_id = 120);
        var_271 = 1;
        var_1387 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1387 = var_1387 + 1;
        }
        var_271 = 0;
        var_1387 = 0;
        var_83[var_314].Var8 = 0;
        var_3077 = var_83[var_314].Var1;
        var_3078 = var_83[var_314].Var2;
        var_82[var_3077][var_3078] = 0;
        var_83[var_314].Var0 = 0;
        var_83[var_314].Var1 = 0;
        var_83[var_314].Var2 = 0;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ﾁﾘﾍﾟｯﾊﾟｰは海水に散って消えた…";
        comments_row2 = "";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        var_3071 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func671(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(671);
        if (var_340 == 123) {
            if (var_1217 == 0 || var_1217 == 2 || var_1217 == 4 || var_1217 == 6 || var_1217 == 8) {
                pos(var_748 * var_35 + 5, var_749 * var_36 - 10);
            }
            if (var_1217 == 1 || var_1217 == 3 || var_1217 == 5 || var_1217 == 7 || var_1217 == 9) {
                pos(var_748 * var_35, var_749 * var_36 - 10);
            }
            if (var_1217 >= 0 && var_1217 < 7) {
                gmode(2);
            }
            if (var_1217 == 7) {
                color(0, 0, 0);
        
                gmode(4, null, null, 180);
            }
            if (var_1217 == 8) {
                color(0, 0, 0);

                gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            }
            if (var_1217 == 9) {
                color(0, 0, 0);
                gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
            }
            gcopy(11, 960, 240, 40, 40);
        }
        return;
    });
}
function func672(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(672);
        if (equip_disc[395] == 1 && var_1061 == 0) {
            yield func675();
            return;
        }
        yield func110();
        if (var_375 == 0) {
            var_998 = var_998 + 1;
        }
        if (var_407 == 2) {
            var_3079++;
            yield func929();
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_1061 == 0) {
            var_374 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_374 = 0;
            var_389 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_374 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_374 = 0;
            var_389 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_374 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_374 = 0;
            var_389 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_374 = 1;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_1061 == 0) {
            comments_row1 = "ﾃﾞｨｱﾎﾞﾛ　再起不能";
            var_25_x = var_25[3];
            var_26_x = var_26[3];
            var_27_x = var_27[3];
        }
        if (var_1061 == 3) {
            if (var_144 == 0) {
                comments_row1 = "ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
            }
            if (var_144 != 0) {
                comments_row1 = "さびしいよォォォォ……ボス";
                comments_row2 = "電話ください………";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
            }
        }
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 40; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1200 = 1;
        var_2400 = 345;
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_386 == 1) {
            if (var_201 == 4 || var_201 == 5 || var_201 == 6) {
                var_356 = 200;
            }
        }
        if (var_151 >= 1) {
            if (var_356 == 113) {
                var_356 = 259;
            }
            if (var_356 == 114) {
                var_356 = 284;
            }
        }
        if (var_1061 == 3 && var_144 != 0) {
            var_356 = 279;
        }
        yield func673();
    });
}

function func673(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(673);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (key_Z_on == 1 || key_A_on == 1) {
            var_1200 = 0;
            yield func051();
            var_1061 = 0;
            var_1601 = 0;
            var_271 = 0;
            var_3080 = 1;
            if (var_375 == 0) {
                yield func227();
            }
            var_3080 = 0;
            if (var_404 == 0 && var_1041 == 0) {
                var_1041 = 1;
                var_207 = 5;
            }
            if (dangeon_number == 0) {
                yield func182();
                yield func233();
                var_755 = 0;
                var_205 = 1;
                var_1049 = 1;
                yield func231();
                var_1049 = 0;
                yield func159(); // ヴェネチアホテルでのイベントフラグ管理処理
                return;
            }
            if (var_375 == 0) {
                var_755 = 0;
                yield func173();
                return;
            }
            if (var_375 == 1) {
                yield func233();
                var_539 = 0;
                yield func880();
                return;
            }
        }
        if (var_2400 > 40) {
            var_2400 = var_2400 - 40;
        }
        yield func673();
        return;
    });
}

function func674(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(674);
        gmode(2);
        pos(var_2400, 290);
        gcopy(8, 40, 0, 230, 40);
        return;
    });
}
function func675(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(675);
        belongings_item_list = var_215;
        var_3081 = var_215;
        yield func428();
        disc_rarity = var_233[var_555].Var13;
        yield func492(); // アイテムリスト呼び出し
        var_3082 = item_name;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "アナザーワン・バイツァ・ダスト！！";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();

        DSPLAY(audio_id = 180);
        var_1389 = var_66;
        var_1390 = var_67;
        var_271 = 1;
        var_1388 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            var_585 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_585 = 0;
            yield func337(); // メッセージ関係呼び出し
            var_1388++;
        }
        for (let cnt1 = 0; cnt1 < 24; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1388++;
        }
        var_271 = 0;
        var_1388 = 0;
        var_3083 = 1;
        var_403 = "アナザーワン・バイツァ・ダスト！！";
        var_2217 = 1;
        var_2194 = 1;
        var_2196 = 2;
        var_2195 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            var_2218 = 999;
            var_2219 = 0;
            if (var_2194 != var_124 && var_83[var_2194].Var0 != 132 && var_83[var_2194].Var0 != 143 && var_83[var_2194].Var0 != 34 && var_83[var_2194].Var31 != 4 && var_83[var_2194].Var31 != 5) {
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                    yield func700();
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
                        yield func700();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        yield func700();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        yield func700();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
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
                        yield func700();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2224][var_2222] == var_201) {
                        yield func700();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2225] == var_201) {
                        yield func700();
                    }
                    if (var_83[var_2194].Var0 != 0 && var_71[var_2221][var_2226] == var_201) {
                        yield func700();
                    }
                }
            }
            var_2194 = var_2194 + 1;
        }
        var_2196 = 0;
        var_2195 = 0;
        var_2217 = 0;
        var_3083 = 0;
        gsel(19);
        color(255, 255, 255);

        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_211 = var_352;
        var_565 = var_566;
        var_133 = 0;
        var_140 = 0;
        var_110 = 0;
        var_109 = 0;
        var_134 = 0;
        var_126 = 0;
        var_132 = 0;
        var_127 = 0;
        var_133 = 0;
        var_135 = 0;
        var_136 = 0;
        var_114 = 0;
        var_463 = 0;
        var_464 = 0;
        var_461 = 0;
        var_462 = 0;
        var_151 = 0;
        var_152 = 0;
        var_389 = 0;
        var_586 = 0;
        var_271 = 0;
        var_585 = 0;
        var_112 = var_112 - 151;
        var_311 = 255;

        DSPLAY(audio_id = 161);
        var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 - 5;
        }
        var_312 = 0;
        var_212 = 0;
        yield func428();
        var_225 = var_555;
        var_898 = 0;
        belongings_item_list = var_3081;
        yield func430();
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        var_2392 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            var_83[var_2392].Var6 = 0;
            var_83[var_2392].Var9 = 0;
            var_83[var_2392].Var18 = 0;
            var_2392 = var_2392 + 1;
        }
        yield func112();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "死の直前まで時間が戻った！";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        var_198 = 1;
        var_300 = 0;
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "" + var_3082 + "は";
        comments_row2a = "ｴﾈﾙｷﾞｰを使い果たして消滅した。";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
function func676(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(676);
        var_445 = 1;
        yield func405();
        var_445 = 0;
        if (var_446 == 0) {
            return;
        }
        var_447 = var_448;
        var_449 = var_450;
        var_314 = var_82[var_347][var_348];
        enemy_list = var_83[var_314].Var0;
        yield func626();
        if (var_83[var_314].Var26 >= 1) {
            if (var_83[var_314].Var0 == 144) {
                yield func678();
                return;
            }
            if (var_83[var_314].Var0 == 116) {
                yield func678();
                return;
            }
            yield func677();
            return;
        }
        if (equip_disc[305] == 1) {
            var_1654 = Math.floor(var_1654 / 2);
            if (var_1654 <= 1) {
                var_1654 = 1;
            }
        }
        if (dangeon_number == 99) {
            var_1654 = 99999;
        }
        var_3084 = rnd(var_1654);
        if (var_83[var_314].Var0 == 120 && var_94 == 99) {
            var_3084 = 0;
        }
        if (var_83[var_314].Var0 == 32 && var_94 == 3) {
            var_3084 = 0;
        }
        if (var_83[var_314].Var0 == 44 && var_94 == 2) {
            var_3084 = 0;
        }
        if (var_83[var_314].Var0 == 65 && var_94 == 1) {
            var_3084 = 0;
        }
        if (var_83[var_673].Var0 == 113 || var_83[var_673].Var0 == 114) {
            if (var_83[var_402].Var0 == 37) {
                var_3084 = 0;
            }
        }
        if (dangeon_number == 5 && var_83[var_314].Var16 >= 1000) {
            var_1765 = 1;
        }
        if (var_3084 == 0 || var_2262 == 1 || var_2263 >= 1 || var_1761 >= 1 || var_3085 >= 1 || var_1765 == 1) {
            var_451 = 1;
            var_452 = 1;
            var_453 = 1;
            if (var_2262 == 1) {
                var_1763 = 1;
            }
            if (var_2263 >= 1) {
                var_1762 = var_2263;
            }
            if (var_83[var_314].Var0 == 1) {
                var_1752 = 1;
            }
            if (var_83[var_314].Var0 == 163) {
                var_1754 = 1;
            }
            if (var_83[var_314].Var0 == 31 || var_83[var_314].Var0 == 44) {
                var_1737 = 1;
            }
            if (var_83[var_314].Var0 == 18) {
                var_1073 = rnd(2);
                if (var_1073 == 0) {
                    var_1753 = 1;
                }
                if (var_1073 == 1) {
                    var_1737 = 1;
                }
            }
            if (var_83[var_314].Var0 == 83) {
                var_1073 = rnd(2);
                if (var_1073 == 0) {
                    var_1743 = 1;
                }
                if (var_1073 == 1) {
                    var_1740 = 1;
                    var_1778 = 1;
                }
            }
            if (var_83[var_314].Var0 == 49) {
                var_454 = 1;
            }
            if (var_83[var_314].Var0 == 20) {
                var_1737 = 1;
            }
            if (var_83[var_314].Var0 == 143) {
                var_1750 = 1;
            }
            if (var_83[var_314].Var0 == 132) {
                var_1746 = 1;
            }
            if (var_83[var_314].Var0 == 120 || var_83[var_314].Var0 == 128) {
                var_1742 = 1;
            }
            if (var_83[var_314].Var0 == 144) {
                var_1745 = 1;
            }
            if (var_83[var_314].Var0 == 19) {
                var_1739 = 1;
            }
            if (var_83[var_314].Var0 == 96) {
                var_1744 = 1;
            }
            if (var_83[var_673].Var0 == 113 || var_83[var_673].Var0 == 114) {
                if (var_83[var_402].Var0 == 37) {
                    var_1073 = rnd(3);
                    if (var_1073 == 0) {
                        var_1760 = 1;
                    }
                    if (var_1073 == 1) {
                        var_1760 = 2;
                    }
                    if (var_1073 == 2) {
                        var_1760 = 3;
                    }
                }
            }
            if (var_83[var_314].Var0 == 97) {
                var_1747 = 1;
            }
            if (var_83[var_314].Var0 == 58) {
                var_1749 = 1;
            }
            if (var_83[var_314].Var0 == 117) {
                var_1754 = 1;
            }
            if (var_83[var_314].Var0 == 39) {
                var_1755 = 1;
            }
            if (var_83[var_314].Var0 == 168) {
                var_1757 = 1;
            }
            if (var_83[var_314].Var0 == 32 && var_94 == 3) {
                var_1737 = 1;
            }
            if (var_83[var_314].Var0 == 44 && var_94 == 2) {
                var_1737 = 1;
            }
            if (var_83[var_314].Var0 == 65 && var_94 == 1) {
                var_1737 = 1;
            }
            if (var_83[var_314].Var0 == 32 && var_94 == 0) {
                var_1073 = rnd(2);
                if (var_1073 == 0) {
                    var_1758 = 1;
                }
            }
            yield func384();
            var_1765 = 0;
            var_1763 = 0;
            var_1752 = 0;
            var_1737 = 0;
            var_1753 = 0;
            var_1743 = 0;
            var_454 = 0;
            var_1739 = 0;
            var_1738 = 0;
            var_1741 = 0;
            var_1746 = 0;
            var_1742 = 0;
            var_1745 = 0;
            var_1744 = 0;
            var_1760 = 0;
            var_1747 = 0;
            var_1749 = 0;
            var_1750 = 0;
            var_1754 = 0;
            var_1778 = 0;
            var_1740 = 0;
            var_1755 = 0;
            var_1757 = 0;
            var_1762 = 0;
            var_2263 = 0;
            var_1761 = 0;
            var_3085 = 0;
            var_1758 = 0;
            var_451 = 0;
            var_452 = 0;
            var_453 = 0;
        }
        return;
    });
}
function func677(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(677);
        if (var_336 >= 200) {
            return;
        }
        yield func724();
        var_866 = var_854;
        var_1550 = var_447;
        var_230 = var_449;
        var_77[var_1550][var_230] = var_866;
        var_3086 = var_314 + 200;
        var_78[var_866].Var0 = var_78[var_3086].Var0;
        var_78[var_866].Var1 = var_1550;
        var_78[var_866].Var2 = var_230;
        var_78[var_866].Var3 = var_78[var_3086].Var3;
        var_78[var_866].Var4 = var_78[var_3086].Var4;
        var_78[var_866].Var5 = var_78[var_3086].Var5;
        var_78[var_866].Var6 = var_78[var_3086].Var6;
        var_78[var_866].Var7 = var_78[var_3086].Var7;
        var_78[var_866].Var8 = var_78[var_3086].Var8;
        var_78[var_866].Var9 = var_71[var_1550][var_230];
        var_78[var_866].Var10 = 1;
        var_78[var_866].Var11 = var_78[var_3086].Var11;
        var_78[var_866].Var12 = var_78[var_3086].Var12;
        var_78[var_866].Var13 = var_78[var_3086].Var13;
        var_78[var_866].Var14 = var_78[var_3086].Var14;
        var_78[var_866].Var15 = var_78[var_3086].Var15;
        var_78[var_866].Var16 = var_78[var_3086].Var16;
        var_78[var_866].Var17 = var_78[var_3086].Var17;
        var_78[var_866].Var18 = var_78[var_3086].Var18;
        var_78[var_866].Var19 = var_78[var_3086].Var19;
        var_78[var_866].Var20 = var_78[var_3086].Var20;
        var_78[var_866].Var21 = var_78[var_3086].Var21;
        var_78[var_866].Var22 = var_78[var_3086].Var22;
        var_78[var_866].Var23 = var_78[var_3086].Var23;
        var_78[var_866].Var24 = var_78[var_3086].Var24;
        var_78[var_866].Var25 = var_78[var_3086].Var25;
        var_78[var_866].Var26 = var_78[var_3086].Var26;
        var_78[var_866].Var27 = var_78[var_3086].Var27;
        var_78[var_866].Var28 = var_78[var_3086].Var28;
        var_78[var_866].Var29 = var_78[var_3086].Var29;
        return;
    });
}
function func678(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(678);
        if (var_336 >= 200) {
            return;
        }
        yield func724();
        var_866 = var_854;
        var_1550 = var_447;
        var_230 = var_449;
        var_77[var_1550][var_230] = var_866;
        var_3086 = var_314 + 200;
        if (var_83[var_314].Var0 == 144) {
            var_78[var_866].Var0 = 730;
        }
        if (var_83[var_314].Var0 == 116) {
            var_78[var_866].Var0 = 731;
        }
        var_78[var_866].Var1 = var_1550;
        var_78[var_866].Var2 = var_230;
        var_78[var_866].Var3 = 0;
        var_78[var_866].Var4 = 0;
        var_78[var_866].Var5 = 0;
        var_78[var_866].Var6 = 0;
        var_78[var_866].Var7 = 0;
        var_78[var_866].Var8 = 0;
        var_78[var_866].Var9 = var_71[var_1550][var_230];
        var_78[var_866].Var10 = 1;
        var_78[var_866].Var11 = 0;
        var_78[var_866].Var12 = 0;
        var_78[var_866].Var13 = var_78[var_3086].Var13;
        if (var_78[var_866].Var13 < 0) {
            var_78[var_866].Var13 = 1;
        }
        var_78[var_866].Var14 = 0;
        var_78[var_866].Var15 = 0;
        var_78[var_866].Var16 = 0;
        var_78[var_866].Var17 = 0;
        var_78[var_866].Var18 = 0;
        var_78[var_866].Var19 = 0;
        var_78[var_866].Var20 = 0;
        var_78[var_866].Var21 = 0;
        var_78[var_866].Var22 = 0;
        var_78[var_866].Var23 = 0;
        var_78[var_866].Var24 = 0;
        var_78[var_866].Var25 = 0;
        var_78[var_866].Var26 = 0;
        var_78[var_866].Var27 = 0;
        var_78[var_866].Var28 = 0;
        var_78[var_866].Var29 = 0;
        return;
    });
}
function func679(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(679);
        var_950 = current_level * 2 + 3;
        return;
    });
}
function func680(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(680);
        var_839 = var_839 + 1;
        var_1015 = var_1015 + 1;
        var_29[var_2945][1] = var_29[var_2945][1] + 1;
        if (var_29[var_2945][1] == 40) {
            var_29[var_2945][2] = 5;
        }
        if (var_29[var_2945][1] == 30) {
            var_29[var_2945][2] = 4;
        }
        if (var_29[var_2945][1] == 20) {
            var_29[var_2945][2] = 3;
        }
        if (var_29[var_2945][1] == 10) {
            var_29[var_2945][2] = 2;
        }
        if (var_29[var_2945][1] == 1) {
            var_29[var_2945][2] = 1;
        }
        if (var_568 >= 9999999) {
            var_568 = 9999999;
        }
        if (current_level == 99) {
            return;
        }
        for (let cnt1 = 0; cnt1 < 99; ++cnt1) {
            if (current_level == 99) {
                break;
            }
            if (var_568 >= var_948[current_level]) {
                yield func681();
            }
        }
        if (var_2201 == 1) {
            yield func099();
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ﾃﾞｨｱﾎﾞﾛはﾚﾍﾞﾙ" + current_level + "に上がった！";
            comments_row2a = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_2201 = 0;
        return;
    });
}
function func681(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(681);
        current_level = current_level + 1;
        var_3087 = rnd(15);
        if (dangeon_number == 99) {
            var_3087 = 0;
        }
        if (var_3087 == 0) {
            var_352 = var_352 + 3;
            var_211 = var_211 + 3;
        }
        if (var_3087 == 1) {
            var_352 = var_352 + 3;
            var_211 = var_211 + 3;
        }
        if (var_3087 == 2) {
            var_352 = var_352 + 4;
            var_211 = var_211 + 4;
        }
        if (var_3087 == 3) {
            var_352 = var_352 + 4;
            var_211 = var_211 + 4;
        }
        if (var_3087 == 4) {
            var_352 = var_352 + 4;
            var_211 = var_211 + 4;
        }
        if (var_3087 == 5) {
            var_352 = var_352 + 4;
            var_211 = var_211 + 4;
        }
        if (var_3087 == 6) {
            var_352 = var_352 + 4;
            var_211 = var_211 + 4;
        }
        if (var_3087 == 7) {
            var_352 = var_352 + 5;
            var_211 = var_211 + 5;
        }
        if (var_3087 == 8) {
            var_352 = var_352 + 5;
            var_211 = var_211 + 5;
        }
        if (var_3087 == 9) {
            var_352 = var_352 + 5;
            var_211 = var_211 + 5;
        }
        if (var_3087 == 10) {
            var_352 = var_352 + 5;
            var_211 = var_211 + 5;
        }
        if (var_3087 == 11) {
            var_352 = var_352 + 5;
            var_211 = var_211 + 5;
        }
        if (var_3087 == 12) {
            var_352 = var_352 + 6;
            var_211 = var_211 + 6;
        }
        if (var_3087 == 13) {
            var_352 = var_352 + 6;
            var_211 = var_211 + 6;
        }
        if (var_3087 == 14) {
            var_352 = var_352 + 6;
            var_211 = var_211 + 6;
        }
        if (var_352 >= 999) {
            var_352 = 999;
        }
        if (var_211 >= var_352) {
            var_211 = var_352;
        }
        var_2201 = 1;
        return;
    });
}
function func682(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(682);
        var_3088 = var_83[var_3072].Var16;
        var_3089 = var_83[var_3072].Var39;
        var_3073 = 0;
        if (var_3089 <= 1) {
            var_3073 = 50 - var_3088;
        }
        if (var_3089 == 2) {
            var_3073 = 200 - var_3088;
        }
        if (var_3089 == 3) {
            var_3073 = 500 - var_3088;
        }
        if (var_3089 == 4) {
            var_3073 = 1000 - var_3088;
        }
        if (var_3089 == 5) {
            var_3073 = 2000 - var_3088;
        }
        if (var_3089 == 6) {
            var_3073 = 4000 - var_3088;
        }
        if (var_3089 == 7) {
            var_3073 = 10000 - var_3088;
        }
        if (var_3089 == 8) {
            var_3073 = 20000 - var_3088;
        }
        if (var_3089 == 9) {
            var_3073 = 40000 - var_3088;
        }
        if (var_3089 == 10) {
            var_3073 = 999999;
        }
        return;
    });
}
function func683(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(683);
        var_2201 = 0;
        if (var_83[var_673].Var16 >= 999999) {
            var_83[var_673].Var16 = 999999;
        }
        if (var_83[var_673].Var0 == 36) {
            var_1025 = var_83[var_673].Var16;
        }
        if (var_83[var_673].Var0 == 105) {
            var_1026 = var_83[var_673].Var16;
        }
        if (var_83[var_673].Var0 == 106) {
            var_1027 = var_83[var_673].Var16;
        }
        if (var_83[var_673].Var0 == 107) {
            var_1027 = var_83[var_673].Var16;
        }
        if (var_83[var_673].Var0 == 108) {
            var_1029 = var_83[var_673].Var16;
        }
        if (var_83[var_673].Var39 >= 10) {
            return;
        }
        var_3090 = 0;
        if (var_83[var_673].Var39 <= 1 && var_83[var_673].Var16 >= 50) {
            var_3090 = 1;
        }
        if (var_83[var_673].Var39 == 2 && var_83[var_673].Var16 >= 200) {
            var_3090 = 1;
        }
        if (var_83[var_673].Var39 == 3 && var_83[var_673].Var16 >= 500) {
            var_3090 = 1;
        }
        if (var_83[var_673].Var39 == 4 && var_83[var_673].Var16 >= 1000) {
            var_3090 = 1;
        }
        if (var_83[var_673].Var39 == 5 && var_83[var_673].Var16 >= 2000) {
            var_3090 = 1;
        }
        if (var_83[var_673].Var39 == 6 && var_83[var_673].Var16 >= 4000) {
            var_3090 = 1;
        }
        if (var_83[var_673].Var39 == 7 && var_83[var_673].Var16 >= 10000) {
            var_3090 = 1;
        }
        if (var_83[var_673].Var39 == 8 && var_83[var_673].Var16 >= 20000) {
            var_3090 = 1;
        }
        if (var_83[var_673].Var39 == 9 && var_83[var_673].Var16 >= 40000) {
            var_3090 = 1;
        }
        if (var_3090 == 1) {
            var_83[var_673].Var39 = var_83[var_673].Var39 + 1;
            if (var_83[var_673].Var39 == 1) {
                var_83[var_673].Var39 = 2;
            }
            enemy_list = var_83[var_673].Var0;
            yield func626();
            var_3091 = enemy_name;
            var_83[var_673].Var3 = Math.floor(enemy_hp * (var_83[var_673].Var39 + 10) / 10);
            if (var_83[var_673].Var3 >= 999) {
                var_83[var_673].Var3 = 999;
            }
            var_2201 = 1;
        }
        if (var_2201 == 1) {
            yield func340(); // キー入力による選択処理
    
            DSPLAY(audio_id = 142);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + var_3091 + "は";
            comments_row2a = "レベルが上がった！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
        }
        var_2201 = 0;
        return;
    });
}
function func684(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(684);
        if (var_83[var_673].Var0 == 36) {
            var_83[var_673].Var16 = var_1025;
        }
        if (var_83[var_673].Var0 == 105) {
            var_83[var_673].Var16 = var_1026;
        }
        if (var_83[var_673].Var0 == 106) {
            var_83[var_673].Var16 = var_1027;
        }
        if (var_83[var_673].Var0 == 108) {
            var_83[var_673].Var16 = var_1029;
        }
        if (var_83[var_673].Var39 <= 1 && var_83[var_673].Var16 >= 50) {
            var_83[var_673].Var39 = 2;
        }
        if (var_83[var_673].Var39 == 2 && var_83[var_673].Var16 >= 200) {
            var_83[var_673].Var39 = 3;
        }
        if (var_83[var_673].Var39 == 3 && var_83[var_673].Var16 >= 500) {
            var_83[var_673].Var39 = 4;
        }
        if (var_83[var_673].Var39 == 4 && var_83[var_673].Var16 >= 1000) {
            var_83[var_673].Var39 = 5;
        }
        if (var_83[var_673].Var39 == 5 && var_83[var_673].Var16 >= 2000) {
            var_83[var_673].Var39 = 6;
        }
        if (var_83[var_673].Var39 == 6 && var_83[var_673].Var16 >= 4000) {
            var_83[var_673].Var39 = 7;
        }
        if (var_83[var_673].Var39 == 7 && var_83[var_673].Var16 >= 10000) {
            var_83[var_673].Var39 = 8;
        }
        if (var_83[var_673].Var39 == 8 && var_83[var_673].Var16 >= 20000) {
            var_83[var_673].Var39 = 9;
        }
        if (var_83[var_673].Var39 == 9 && var_83[var_673].Var16 >= 40000) {
            var_83[var_673].Var39 = 10;
        }
        if (var_83[var_673].Var39 >= 2) {
            enemy_list = var_83[var_673].Var0;
            yield func626();
            var_83[var_673].Var3 = Math.floor(enemy_hp * (var_83[var_673].Var39 * 2 + 10) / 10);
        }
        return;
    });
}
function func685(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(685);
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｴﾝﾔ婆「うぽわあ―――ッ！！」";
        comments_row2a = "";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        if (var_123 == 0) {
            var_92 = 10;
        }
        if (var_123 != 0) {
            var_396 = 10;
        }
        var_103 = 1;
        var_386 = 0;
        var_3092 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            var_83[var_3092].Var6 = 0;
            var_83[var_3092].Var9 = 0;
            var_83[var_3092].Var11 = 0;
            var_83[var_3092].Var12 = 0;
            var_83[var_3092].Var13 = 0;
            var_83[var_3092].Var14 = 0;
            var_83[var_3092].Var15 = 0;
            var_83[var_3092].Var16 = 0;
            var_83[var_3092].Var17 = 0;
            var_83[var_3092].Var18 = 0;
            var_83[var_3092].Var19 = 0;
            if (var_83[var_3092].Var0 == 8 || var_83[var_3092].Var0 == 24 || var_83[var_3092].Var0 == 25) {
                var_83[var_3092].Var0 = 23;
            }
            var_3092 = var_3092 + 1;
        }
        gsel(19);
        color(255, 255, 255);

        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_311 = 255;

        DSPLAY(audio_id = 192);
        var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 - 5;
            var_198 = 1;
            var_300 = 0;
        }
        var_312 = 0;
        if (var_404 >= 1) {
            return;
        }
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｴﾝﾔ婆「う…　うそじゃ";
        comments_row2a = "このわしが　こんなこと……」";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｴﾝﾔ婆「しかし…おまえが求める物など";
        comments_row2a = "こんなところにはないッ！」";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｴﾝﾔ婆「せいぜい他の場所を";
        comments_row2a = "探すんじゃなああああああ！」";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        return;
    });
}
function func686(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(686);
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｼﾞｮﾙﾉ「うぐッ！！」";
        comments_row2a = "";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｼﾞｮﾙﾉ「ば…ばかな…";
        comments_row2a = "こんなことが…」";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｼﾞｮﾙﾉ「G･E･ﾚｸｲｴﾑの能力を使えば、";
        comments_row2a = "その終わりのない状態を」";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｼﾞｮﾙﾉ「解除する事はできるだろう…。";
        comments_row2a = "";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｼﾞｮﾙﾉ「…しかしボス」";
        comments_row2a = "";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｼﾞｮﾙﾉ「はたしてそれで、";
        comments_row2a = "勝利したと言えるかな…？」";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        var_190 = 1;
        return;
    });
}
function func687(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(687);
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｳﾝｶﾞﾛ「ウッガァ―――ッ！！」";
        comments_row2a = "";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        var_3092 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_3092].Var0 != 143 && var_83[var_3092].Var31 != 5) {
                var_83[var_3092].Var0 = 0;
                var_3093 = var_83[var_3092].Var1;
                var_3094 = var_83[var_3092].Var2;
                var_82[var_3093][var_3094] = 0;
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    var_83[var_3092][cnt3] = 0;
                }
            }
            var_3092 = var_3092 + 1;
        }
        var_114 = 0;
        var_463 = 0;
        var_464 = 0;
        var_461 = 0;
        var_462 = 0;
        gsel(19);
        color(255, 255, 255);

        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);

        DSPLAY(audio_id = 192);
        var_311 = 255;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 - 5;
            var_198 = 1;
            var_300 = 0;
        }
        var_312 = 0;
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｳﾝｶﾞﾛ「オ…オレのスタンド";
        comments_row2a = "【ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨｰ】…」";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｳﾝｶﾞﾛ「この能力で、ダンジョン内を";
        comments_row2a = "ジョジョのキャラクターで」";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｳﾝｶﾞﾛ「埋め尽くしてやろうと";
        comments_row2a = "思っていたのによォ～～」";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ｳﾝｶﾞﾛ「もうこの世界には…";
        comments_row2a = "希望も何もねえッ…」";
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        return;
    });
}
function func688(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(688);
        var_387 = 0;
        var_3092 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_3092].Var0 == 40 || var_83[var_3092].Var0 == 41 || var_83[var_3092].Var0 == 42 || var_83[var_3092].Var0 == 54) {
                var_2883 = var_83[var_3092].Var1;
                var_2884 = var_83[var_3092].Var2;
                var_82[var_2883][var_2884] = 0;
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    var_83[var_3092][cnt3] = 0;
                }
            }
            var_3092 = var_3092 + 1;
        }
        var_3092 = 1;
        for (let cnt1 = 0; cnt1 < var_337; ++cnt1) {
            if (var_81[var_3092][0] == 17) {
                var_2883 = var_81[var_3092][1];
                var_2884 = var_81[var_3092][2];
                var_80[var_2883][var_2884] = 0;
                var_81[var_3092][0] = 0;
                var_81[var_3092][1] = 0;
                var_81[var_3092][2] = 0;
            }
            var_3092 = var_3092 + 1;
        }
        var_103 = 1;
        gsel(19);
        color(255, 255, 255);

        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);

        DSPLAY(audio_id = 192);
        var_311 = 255;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_311 = var_311 - 5;
            var_198 = 1;
            var_300 = 0;
        }
        var_312 = 0;
        return;
    });
}
function func689(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(689);
        yield func340(); // キー入力による選択処理
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "このダンジョンを制覇した！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[6];
        var_26_x = var_26[6];
        var_27_x = var_27[6];
        yield func047();
        for (let cnt1 = 0; true; ++cnt1) {
            var_491 = rnd(var_33);
            var_492 = rnd(var_34);
            if (var_491 >= 30 && var_491 <= 35 && var_492 >= 23 && var_492 <= 30) {
                continue;
            }
            if (var_71[var_491][var_492] != 0 && var_71[var_491][var_492] <= 12 && var_72[var_491][var_492] == 0 && var_71[var_491][var_492] != var_201 && var_80[var_491][var_492] == 0 && var_77[var_491][var_492] == 0) {
                break;
            }
            if (dangeon_number == 3 && var_71[var_491][var_492] != 0 && var_71[var_491][var_492] <= 12 && var_72[var_491][var_492] == 0 && var_80[var_491][var_492] == 0 && var_77[var_491][var_492] == 0) {
                break;
            }
        }
        var_73[var_491][var_492] = 1;
        var_200 = var_71[var_491][var_492];
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "どこかに階段が現れたようだ…";
        comments_row2a = "";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        return;
    });
}
function func690(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(690);
        if (var_2957 != 1) {
            var_3095 = rnd(8);
        }
        if (var_2957 == 1) {
            var_3095 = 1;
            if (var_2958 == 2) {
                var_3095 = 0;
            }
        }
        if (var_2957 == 2) {
            var_3095 = 0;
        }
        if (var_2957 == 3) {
            var_3095 = 0;
        }
        if (var_2959 == 1) {
            var_3095 = 0;
        }
        if (var_2959 == 2) {
            var_3095 = 1;
        }
        var_2959 = 0;
        if (dangeon_number == 99) {
            if (var_2957 == 4 || var_2957 == 5) {
                var_3095 = 1;
            }
        }
        if (var_3095 == 0) {
            if (var_2957 == 1) {
                var_2531 = 1;
            }
            if (var_2957 == 2) {
                var_2531 = 4;
            }
            if (var_2957 == 3) {
                var_2531 = 5;
            }
            if (var_2957 == 4) {
                var_2531 = 2;
            }
            if (var_2957 == 5) {
                var_2531 = 3;
            }
            yield func340(); // キー入力による選択処理
            var_3096 = var_673;
            var_1845 = 4;
            var_2102 = var_347;
            var_2103 = var_348;
            yield func556();
            var_2531 = 0;
            var_1845 = 0;
            var_673 = var_3096;
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            if (var_2957 == 1) {
                comments_row1a = "";
                comments_row2a = "ｴｺｰｽﾞの卵はｴｺｰｽﾞACT1に成長した！";
            }
            if (var_2957 == 2) {
                comments_row1a = "";
                comments_row2a = "ｴｺｰｽﾞはACT2に成長した！";
            }
            if (var_2957 == 3) {
                comments_row1a = "";
                comments_row2a = "ｴｺｰｽﾞはACT3に成長した！";
            }
            if (var_2957 == 4) {
                comments_row1a = "";
                comments_row2a = "ｴｺｰｽﾞACT1はさなぎになった！";
            }
            if (var_2957 == 5) {
                comments_row1a = "";
                comments_row2a = "ｴｺｰｽﾞACT2はさなぎになった！";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[2];
            var_26_x = var_26[2];
            var_27_x = var_27[2];
            yield func047();
            yield func050();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_2957 = 0;
        return;
    });
}
function func691(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(691);
        yield func340(); // キー入力による選択処理
        var_3096 = var_673;
        var_1845 = 4;
        var_2102 = var_347;
        var_2103 = var_348;
        yield func556();
        var_2531 = 0;
        var_1845 = 0;
        var_673 = var_3096;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "中からﾌﾞﾁｬﾗﾃｨが現れた！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        yield func050();
        var_2538 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
function func692(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(692);
        if (var_183 != 0) {
            return;
        }
        var_184 = var_347;
        var_185 = var_348;
        var_183 = 1;
        return;
    });
}
function func693(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(693);
        var_3096 = var_673;
        var_2539 = 1;
        var_1845 = 3;
        var_1914 = var_184;
        var_1915 = var_185;
        yield func556();
        var_1845 = 0;
        var_2539 = 0;
        var_673 = var_3096;
        var_183 = 0;
        var_184 = 0;
        var_185 = 0;
        var_186 = 0;
        return;
    });
}
function func694(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(694);
        if (var_211 == 0) {
            return;
        }
        yield func340(); // キー入力による選択処理
        var_403 = "ｽｰﾊﾟｰﾌﾗｲが攻撃を跳ね返した！";
        var_402 = var_673;
        var_3097 = 1;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func705();
        var_3097 = 0;
        yield func340(); // キー入力による選択処理
        yield func051();
        return;
    });
}
function func695(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(695);
        if (var_211 == 0) {
            return;
        }
        var_2855 = 0;
        var_3099 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_3099].Var0 == 650 || var_233[var_3099].Var0 == 651 || var_233[var_3099].Var0 == 653 || var_233[var_3099].Var0 == 654 || var_233[var_3099].Var0 == 655) {
                var_2855 = var_233[var_3099].Var0;
                break;
            }
            var_3099++;
        }
        if (var_2855 != 0) {
            belongings_item_list = var_2855;
            yield func492(); // アイテムリスト呼び出し
            var_3100 = item_name;
            var_1396 = var_83[var_673].Var1;
            var_1397 = var_83[var_673].Var2;
            var_83[var_673].Var8 = 1;
            var_271 = 1;
            var_1552 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1552++;
            }
            var_271 = 0;
            var_1552 = 0;
            var_403 = "" + var_3100 + "がダメージを反射した！";
            var_3098 = 1;
            var_402 = var_673;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_209 = Math.floor(var_209 / 3);
            if (var_209 <= 0) {
                var_209 = 1;
            }
            yield func705();
            var_3098 = 0;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        return;
    });
}
function func696(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(696);
        if (var_211 == 0) {
            return;
        }
        var_3098 = 1;
        var_402 = var_673;
        if (var_83[var_402].Var0 <= 0) {
            return;
        }
        var_403 = "ダメージを反射した！";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func705();
        yield func340(); // キー入力による選択処理
        yield func051();
        return;
    });
}
function func697(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(697);
        var_271 = 1;
        var_1440 = 1;
        if (var_1441 == 1) {
            if (var_83[var_2194].Var1 > var_66) {
                var_1442 = 0;
            }
            if (var_83[var_2194].Var1 <= var_66) {
                var_1442 = 1;
            }
            if (var_1442 == 0) {
                var_1427 = (var_83[var_2194].Var1 - var_66 + 4) * 40 - 160;
                var_1428 = (var_83[var_2194].Var2 - var_67 + 4) * 40 - 160 - 20;
            }
            if (var_1442 == 1) {
                var_1427 = (var_83[var_2194].Var1 - var_66 + 4) * 40 + 160 - 40;
                var_1428 = (var_83[var_2194].Var2 - var_67 + 4) * 40 - 160 - 20;
            }
        }
        if (var_1441 == 0) {
            var_1442 = rnd(2);
            if (var_1442 == 0) {
                var_1427 = 0;
                var_1428 = 0;
            }
            if (var_1442 == 1) {
                var_1427 = 320 - 40;
                var_1428 = 0;
            }
        }
        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
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
        return;
    });
}
function func698(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(698);

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
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        var_1343 = var_83[var_2890].Var1;
        var_1344 = var_83[var_2890].Var2;
        var_1342 = 1;
        var_271 = 1;
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1342 = 0;
        var_271 = 0;
        var_1389 = var_83[var_2890].Var1;
        var_1390 = var_83[var_2890].Var2;
        var_82[var_1389][var_1390] = 0;
        var_83[var_2890].Var0 = 0;
        var_83[var_2890].Var1 = 0;
        var_83[var_2890].Var2 = 0;
        var_83[var_2890].Var6 = 0;
        var_83[var_2890].Var7 = 0;
        var_83[var_2890].Var8 = 0;
        var_83[var_2890].Var9 = 0;
        var_83[var_2890].Var18 = 0;
        var_83[var_2890].Var19 = 0;
        var_83[var_2890].Var27 = 0;
        var_83[var_2890].Var28 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
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
        if (var_65[var_1993][var_1390] == 1 || var_65[var_1994][var_1390] == 1 || var_65[var_1389][var_1995] == 1 || var_65[var_1389][var_1996] == 1 || var_65[var_1993][var_1995] == 1 || var_65[var_1994][var_1995] == 1 || var_65[var_1993][var_1996] == 1 || var_65[var_1994][var_1996] == 1) {
            var_389 = 2;
    
            DSPLAY(audio_id = 105);
            if (var_211 == 1) {
                var_211 = 0;
                var_356 = 209;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
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
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
        }
        var_403 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
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
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        var_2199 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_2199].Var0 == 17 && var_83[var_2199].Var29 == 1) {
                yield func699();
                var_2199 = 1;
                cnt1 = -1;
                continue;
            }
            var_2199++;
        }
        return;
    });
}
function func699(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(699);
        var_2890 = var_2199;

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
        var_25_x = var_25[2];
        var_26_x = var_26[2];
        var_27_x = var_27[2];
        yield func047();
        var_1343 = var_83[var_2890].Var1;
        var_1344 = var_83[var_2890].Var2;
        var_1342 = 1;
        var_271 = 1;
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1342 = 0;
        var_271 = 0;
        var_1389 = var_83[var_2890].Var1;
        var_1390 = var_83[var_2890].Var2;
        var_82[var_1389][var_1390] = 0;
        var_83[var_2890].Var0 = 0;
        var_83[var_2890].Var1 = 0;
        var_83[var_2890].Var2 = 0;
        var_83[var_2890].Var6 = 0;
        var_83[var_2890].Var7 = 0;
        var_83[var_2890].Var8 = 0;
        var_83[var_2890].Var9 = 0;
        var_83[var_2890].Var18 = 0;
        var_83[var_2890].Var19 = 0;
        var_83[var_2890].Var27 = 0;
        var_83[var_2890].Var28 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
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
        if (var_65[var_1993][var_1390] == 1 || var_65[var_1994][var_1390] == 1 || var_65[var_1389][var_1995] == 1 || var_65[var_1389][var_1996] == 1 || var_65[var_1993][var_1995] == 1 || var_65[var_1994][var_1995] == 1 || var_65[var_1993][var_1996] == 1 || var_65[var_1994][var_1996] == 1) {
            var_389 = 2;
    
            DSPLAY(audio_id = 105);
            if (var_211 == 1) {
                var_211 = 0;
                var_356 = 209;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
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
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
        }
        var_403 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
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
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
    });
}
