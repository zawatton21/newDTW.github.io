// アイテムを拾う際の動作処理
function func400(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(400);
        var_321 = var_77[var_66][var_67];
        belongings_item_list = var_78[var_321].Var0;
        disc_rarity = var_78[var_321].Var13;
        yield func492(); // アイテムリスト呼び出し
        // 拾ったアイテムが No = 1 お金であれば。また、床に落ちているアイテムが var_321 ?
        if (var_78[var_321].Var0 == 1) {
            DSPLAY(audio_id = 207);
            yield func435(); // お金を拾った時の動作処理
            return;
        }
        if (var_78[var_321].Var0 >= 400 && var_78[var_321].Var0 < 500) {
            yield func401(); // 射撃discを拾った際、同じものを既に所持していた時にまとめる動作処理
            if (var_1839 == 1) {
                var_1839 = 0;
                return;
            }
        }
        
        yield func398(); // 道具(メニュー画面/道具)へ直接表示されるアイテム表示
        
        // var_224 は持っているアイテム数と思われる。アイテムは20個まで持てる。
        // 所持アイテム数が20個以上になる場合
        if (var_224 >= 20) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + disp_item_name + "に乗った";
            comments_row2 = "持ち物が多くて拾えない";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        // 所持アイテムが20個未満の場合
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + disp_item_name + "を拾った";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        if (belongings_item_list >= 900 && belongings_item_list < 1000) {
            var_1840 = belongings_item_list - 900;
            var_988[var_1840] = 1;
        }
        if (belongings_item_list >= 750 && belongings_item_list < 770) {
            var_1840 = belongings_item_list + 250 - 900;
            var_988[var_1840] = 1;
        }
        if (belongings_item_list >= 100 && belongings_item_list < 400 && dangeon_number != 3 && dangeon_number != 4 && dangeon_number != 5) {
            var_862[belongings_item_list][0] = 1;
        }
        // おそらくアイテム欄へ追加していくプログラム
        var_224 = var_224 + 1; // 個数を追加

        // 手持ちへ床に落ちているアイテム情報を移動
        var_233[var_224].Var0 = var_78[var_321].Var0;
        var_233[var_224].Var3 = var_78[var_321].Var3;
        var_233[var_224].Var4 = var_78[var_321].Var4;
        var_233[var_224].Var5 = var_78[var_321].Var5;
        var_233[var_224].Var6 = var_78[var_321].Var6;
        var_233[var_224].Var7 = var_78[var_321].Var7;
        var_233[var_224].Var8 = var_78[var_321].Var8;
        var_233[var_224].Var11 = var_78[var_321].Var11;
        var_233[var_224].Var12 = var_78[var_321].Var12;
        var_233[var_224].Var13 = var_78[var_321].Var13;
        var_233[var_224].Var14 = var_78[var_321].Var14;
        var_233[var_224].Var15 = var_78[var_321].Var15;
        var_233[var_224].Var16 = var_78[var_321].Var16;
        var_233[var_224].Var17 = var_78[var_321].Var17;
        var_233[var_224].Var18 = var_78[var_321].Var18;
        var_233[var_224].Var19 = var_78[var_321].Var19;
        var_233[var_224].Var20 = var_78[var_321].Var20;
        var_233[var_224].Var21 = var_78[var_321].Var21;
        var_233[var_224].Var22 = var_78[var_321].Var22;
        var_233[var_224].Var23 = var_78[var_321].Var23;
        var_233[var_224].Var24 = var_78[var_321].Var24;
        var_233[var_224].Var25 = var_78[var_321].Var25;
        var_233[var_224].Var26 = var_78[var_321].Var26;
        var_233[var_224].Var27 = var_78[var_321].Var27;
        var_233[var_224].Var28 = var_78[var_321].Var28;
        var_233[var_224].Var29 = var_78[var_321].Var29;
        /*
        var_233[var_224].Var0 = JSON.parse(JSON.stringify(var_78[var_321].Var0));
        var_233[var_224].Var3 = JSON.parse(JSON.stringify(var_78[var_321].Var3));
        var_233[var_224].Var4 = JSON.parse(JSON.stringify(var_78[var_321].Var4));
        var_233[var_224].Var5 = JSON.parse(JSON.stringify(var_78[var_321].Var5));
        var_233[var_224].Var6 = JSON.parse(JSON.stringify(var_78[var_321].Var6));
        var_233[var_224].Var7 = JSON.parse(JSON.stringify(var_78[var_321].Var7));
        var_233[var_224].Var8 = JSON.parse(JSON.stringify(var_78[var_321].Var8));
        var_233[var_224].Var11 = JSON.parse(JSON.stringify(var_78[var_321].Var11));
        var_233[var_224].Var12 = JSON.parse(JSON.stringify(var_78[var_321].Var12));
        var_233[var_224].Var13 = JSON.parse(JSON.stringify(var_78[var_321].Var13));
        var_233[var_224].Var14 = JSON.parse(JSON.stringify(var_78[var_321].Var14));
        var_233[var_224].Var15 = JSON.parse(JSON.stringify(var_78[var_321].Var15));
        var_233[var_224].Var16 = JSON.parse(JSON.stringify(var_78[var_321].Var16));
        var_233[var_224].Var17 = JSON.parse(JSON.stringify(var_78[var_321].Var17));
        var_233[var_224].Var18 = JSON.parse(JSON.stringify(var_78[var_321].Var18));
        var_233[var_224].Var19 = JSON.parse(JSON.stringify(var_78[var_321].Var19));
        var_233[var_224].Var20 = JSON.parse(JSON.stringify(var_78[var_321].Var20));
        var_233[var_224].Var21 = JSON.parse(JSON.stringify(var_78[var_321].Var21));
        var_233[var_224].Var22 = JSON.parse(JSON.stringify(var_78[var_321].Var22));
        var_233[var_224].Var23 = JSON.parse(JSON.stringify(var_78[var_321].Var23));
        var_233[var_224].Var24 = JSON.parse(JSON.stringify(var_78[var_321].Var24));
        var_233[var_224].Var25 = JSON.parse(JSON.stringify(var_78[var_321].Var25));
        var_233[var_224].Var26 = JSON.parse(JSON.stringify(var_78[var_321].Var26));
        var_233[var_224].Var27 = JSON.parse(JSON.stringify(var_78[var_321].Var27));
        var_233[var_224].Var28 = JSON.parse(JSON.stringify(var_78[var_321].Var28));
        var_233[var_224].Var29 = JSON.parse(JSON.stringify(var_78[var_321].Var29));
        */
       // 床に落ちていたアイテム情報を削除
        var_77[var_66][var_67] = 0;
        var_78[var_321].Var0 = 0;
        var_78[var_321].Var1 = 0;
        var_78[var_321].Var2 = 0;
        var_78[var_321].Var3 = 0;
        var_78[var_321].Var4 = 0;
        var_78[var_321].Var5 = 0;
        var_78[var_321].Var6 = 0;
        var_78[var_321].Var7 = 0;
        var_78[var_321].Var8 = 0;
        var_78[var_321].Var9 = 0;
        var_78[var_321].Var11 = 0;
        var_78[var_321].Var12 = 0;
        var_78[var_321].Var13 = 0;
        var_78[var_321].Var14 = 0;
        var_78[var_321].Var15 = 0;
        var_78[var_321].Var16 = 0;
        var_78[var_321].Var17 = 0;
        var_78[var_321].Var18 = 0;
        var_78[var_321].Var19 = 0;
        var_78[var_321].Var20 = 0;
        var_78[var_321].Var21 = 0;
        var_78[var_321].Var22 = 0;
        var_78[var_321].Var23 = 0;
        var_78[var_321].Var24 = 0;
        var_78[var_321].Var25 = 0;
        var_78[var_321].Var26 = 0;
        var_78[var_321].Var27 = 0;
        var_78[var_321].Var28 = 0;
        var_78[var_321].Var29 = 0;
        DSPLAY(audio_id = 108); // アイテムを拾った時の効果音
        if (var_362 == 1) {
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        return;
    });
}
// 射撃discを拾った際、同じものを既に所持していた時にまとめる動作処理
function func401(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(401);
        var_1839 = 0;
        var_1841 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_1841].Var0 == var_78[var_321].Var0 && var_233[var_1841].Var11 == 0 && var_78[var_321].Var11 == 0) {
                var_1839 = 1;
                var_233[var_1841].Var3 = var_233[var_1841].Var3 + var_78[var_321].Var3;
                if (var_233[var_1841].Var3 >= 99) {
                    var_233[var_1841].Var3 = 99;
                }
                break;
            }
            var_1841 = var_1841 + 1;
        }
        if (var_1839 == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + item_name + "(" + var_78[var_321].Var3 + ")を拾った";
            comments_row2 = "回数をまとめた";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_77[var_66][var_67] = 0;
            var_78[var_321].Var0 = 0;
            var_78[var_321].Var1 = 0;
            var_78[var_321].Var2 = 0;
        }
        if (var_1839 == 1) {
            DSPLAY(audio_id = 108); // アイテムを拾った時の効果音
        }
        return;
    });
}

function func402(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(402);
        if (var_78[var_320].Var15 == 1) {
            var_217 = 1;
            var_1842 = var_78[var_320].Var1;
            var_1843 = var_78[var_320].Var2;
            if (current_floor < 19) {
                var_1844 = 1;
            }
            if (current_floor >= 19) {
                var_1844 = 2;
            }
            var_1845 = 2;
            yield func556();
            var_1844 = 0;
            var_1845 = 0;
            var_83[var_673].Var21 = 1;
            var_77[var_1842][var_1843] = 0;
            var_78[var_320].Var0 = 0;
            var_78[var_320].Var1 = 0;
            var_78[var_320].Var2 = 0;
            var_78[var_320].Var3 = 0;
            var_78[var_320].Var4 = 0;
            var_78[var_320].Var5 = 0;
            var_78[var_320].Var6 = 0;
            var_78[var_320].Var7 = 0;
            var_78[var_320].Var8 = 0;
            var_78[var_320].Var9 = 0;
            var_78[var_320].Var11 = 0;
            var_78[var_320].Var12 = 0;
            var_78[var_320].Var13 = 0;
            var_78[var_320].Var14 = 0;
            var_78[var_320].Var15 = 0;
            var_78[var_320].Var16 = 0;
            var_78[var_320].Var17 = 0;
            var_78[var_320].Var18 = 0;
            var_78[var_320].Var19 = 0;
            var_78[var_320].Var20 = 0;
            var_78[var_320].Var21 = 0;
            var_78[var_320].Var22 = 0;
            var_78[var_320].Var23 = 0;
            var_78[var_320].Var24 = 0;
            var_78[var_320].Var25 = 0;
            var_78[var_320].Var26 = 0;
            var_78[var_320].Var27 = 0;
            var_78[var_320].Var28 = 0;
            var_78[var_320].Var29 = 0;
            DSPLAY(audio_id = 156);
            if (current_floor < 19) {
                for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                    if (cnt3 == 1) {
                        var_411 = 2;
                    }
                    if (cnt3 == 2) {
                        var_411 = 1;
                    }
                    if (cnt3 == 3) {
                        var_411 = 2;
                    }
                    if (cnt3 == 4) {
                        var_411 = 2;
                    }
                    if (cnt3 == 5) {
                        var_411 = 1;
                    }
                    if (cnt3 == 6) {
                        var_411 = 4;
                    }
                    yield func337(); // メッセージ関係呼び出し
                }
            }
            if (current_floor >= 19) {
                for (let cnt3 = 0; cnt3 < 8; ++cnt3) {
                    if (cnt3 == 1) {
                        var_411 = 1;
                    }
                    if (cnt3 == 2) {
                        var_411 = 2;
                    }
                    if (cnt3 == 3) {
                        var_411 = 3;
                    }
                    if (cnt3 == 4) {
                        var_411 = 4;
                    }
                    if (cnt3 == 5) {
                        var_411 = 5;
                    }
                    if (cnt3 == 6) {
                        var_411 = 6;
                    }
                    if (cnt3 == 7) {
                        var_411 = 7;
                    }
                    if (cnt3 == 8) {
                        var_411 = 8;
                    }
                    yield func337(); // メッセージ関係呼び出し
                }
            }
            var_83[var_673].Var21 = 0;
            return;
        }
        return;
    });
}

function func403(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(403);
        belongings_item_list = var_233[var_225].Var0;
        disc_rarity = var_233[var_225].Var13;
        yield func492(); // アイテムリスト呼び出し
        var_1846 = var_233[var_225].Var0;
        var_1837 = var_233[var_225].Var3;
        var_1835 = var_233[var_225].Var4;
        var_1847 = var_233[var_225].Var5;
        var_1848 = var_233[var_225].Var6;
        var_1838 = var_233[var_225].Var7;
        var_1849 = var_233[var_225].Var8;
        var_1850 = var_233[var_225].Var11;
        var_1851 = var_233[var_225].Var12;
        var_1833 = var_233[var_225].Var13;
        var_1834 = var_233[var_225].Var14;
        var_1852 = var_233[var_225].Var15;
        var_1853 = var_233[var_225].Var16;
        var_1854 = var_233[var_225].Var17;
        var_1855 = var_233[var_225].Var18;
        var_1836 = var_233[var_225].Var19;
        var_1856 = var_233[var_225].Var20;
        var_1857 = var_233[var_225].Var21;
        var_1858 = var_233[var_225].Var22;
        var_1859 = var_233[var_225].Var23;
        var_1860 = var_233[var_225].Var24;
        var_1861 = var_233[var_225].Var25;
        var_1862 = var_233[var_225].Var26;
        var_1863 = var_233[var_225].Var27;
        var_1864 = var_233[var_225].Var28;
        var_1865 = var_233[var_225].Var29;

        if (var_233[var_225].Var12 == 1 && var_234 == 0) {
            yield func426();
            yield func427();
            yield func428();
            if (var_225 == var_553 || var_225 == var_554 || var_225 == var_555) {
                open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                var_1866 = 0;
                var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "呪われていて外せない！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_217 = 1;
                yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                return;
            }
        }
        yield func404(); // アイテムを置く時の動作処理
    });
}

// アイテムを置く時の動作処理
function func404(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(404);
        if (var_72[var_66][var_67] >= 2) {
            open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            var_1866 = 0;
            var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ここには置くことができない。";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        yield func405();
        // No = 0 なので、拠点(ホテル、亀、)
        if (dangeon_number == 0 && var_66 == 15 && var_67 == 21) {
            var_1867 = belongings_item_list;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + item_name + "を捨てた";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                yield func430();
            }
            yield func433(); // アイテム配列(所持アイテム)初期化関数
            DSPLAY(audio_id = 148);
            var_557 = 1;
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_557++;
            }
            var_557 = 0;
            belongings_item_list = var_1867;
            yield func492(); // アイテムリスト呼び出し
            // var_550は亀へ投資した栄養の合計
            var_550 = var_550 + buying_price;
            if (var_550 > 999999) {
                var_550 = 999999;
            }
            var_558 = 0;
            // var_559は亀の成長レベル
            if (var_559 == 0 && var_550 >= 5000) {
                var_559 = 1;
                var_558 = 1;
            }
            if (var_559 == 1 && var_550 >= 10000) {
                var_559 = 2;
                var_558 = 1;
            }
            if (var_559 == 2 && var_550 >= 20000) {
                var_559 = 3;
                var_558 = 1;
            }
            if (var_559 == 3 && var_550 >= 40000) {
                var_559 = 4;
                var_558 = 1;
            }
            if (var_558 == 1) {
                yield func293();
                var_560 = 1;
                var_561 = 5;
                var_562 = 5;
                if (var_559 == 0) {
                    yield func288();
                }
                if (var_559 == 1) {
                    yield func289();
                }
                if (var_559 == 2) {
                    yield func290();
                }
                if (var_559 == 3) {
                    yield func291();
                }
                if (var_559 == 4) {
                    yield func292();
                }
                yield func248();
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "亀はアイテムを養分として";
                comments_row2a = "成長したようだ。";
                if (var_559 == 4) {
                    comments_row1a = "亀はアイテムを養分として";
                    comments_row2a = "最大まで成長したようだ。";
                }
                var_198 = 1;
                var_300 = 0;
                yield func047();
                yield func050();
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
            }
            var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        if (var_446 == 0) {
            open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            var_1866 = 0;
            var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "アイテムを置くところが無いぞ";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        yield func724();
        var_77[var_448][var_450] = var_854;
        var_78[var_854].Var0 = var_1846;
        var_78[var_854].Var1 = var_448;
        var_78[var_854].Var2 = var_450;
        var_78[var_854].Var3 = var_1837;
        var_78[var_854].Var4 = var_1835;
        var_78[var_854].Var5 = var_1847;
        var_78[var_854].Var6 = var_1848;
        var_78[var_854].Var7 = var_1838;
        var_78[var_854].Var8 = var_1849;
        var_78[var_854].Var9 = var_71[var_448][var_450];
        var_78[var_854].Var10 = 1;
        var_78[var_854].Var11 = var_1850;
        var_78[var_854].Var12 = var_1851;
        var_78[var_854].Var13 = var_1833;
        var_78[var_854].Var14 = var_1834;
        var_78[var_854].Var15 = var_1852;
        var_78[var_854].Var16 = var_1853;
        var_78[var_854].Var17 = var_1854;
        var_78[var_854].Var18 = var_1855;
        var_78[var_854].Var19 = var_1836;
        var_78[var_854].Var20 = var_1856;
        var_78[var_854].Var21 = var_1857;
        var_78[var_854].Var22 = var_1858;
        var_78[var_854].Var23 = var_1859;
        var_78[var_854].Var24 = var_1860;
        var_78[var_854].Var25 = var_1861;
        var_78[var_854].Var26 = var_1862;
        var_78[var_854].Var27 = var_1863;
        var_78[var_854].Var28 = var_1864;
        var_78[var_854].Var29 = var_1865;
        belongings_item_list = var_1846;
        var_321 = var_854;
        yield func398(); // 道具(メニュー画面/道具)へ直接表示されるアイテム表示
        DSPLAY(audio_id = 133); // アイテムを置いた時の効果音
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            yield func430();
        }
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + disp_item_name + " を置いた";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        
        yield func047();
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

function func405(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(405);
        var_446 = 0;
        var_448 = var_66;
        var_450 = var_67;
        if (var_1270 == 1) {
            var_448 = var_455;
            var_450 = var_456;
        }
        if (var_445 == 1) {
            var_448 = var_442;
            var_450 = var_443;
        }
        var_1868 = var_448 - 1;
        if (var_1868 < 0) {
            var_1868 = var_448;
        }
        var_1869 = var_448 + 1;
        if (var_1869 > var_33) {
            var_1869 = var_448;
        }
        var_1870 = var_450 + 1;
        if (var_1870 > var_34) {
            var_1870 = var_450;
        }
        var_1871 = var_450 - 1;
        if (var_1871 < 0) {
            var_1871 = var_450;
        }
        var_1872 = var_448 - 2;
        if (var_1872 < 0) {
            var_1872 = var_448;
        }
        var_1873 = var_448 + 2;
        if (var_1873 > var_33) {
            var_1873 = var_448;
        }
        var_1874 = var_450 + 2;
        if (var_1874 > var_34) {
            var_1874 = var_450;
        }
        var_1875 = var_450 - 2;
        if (var_1875 < 0) {
            var_1875 = var_450;
        }
        if (var_446 == 0 && var_77[var_448][var_450] == 0 && var_73[var_448][var_450] == 0 && var_71[var_448][var_450] != 13 && var_80[var_448][var_450] == 0 && var_72[var_448][var_450] <= 1) {
            var_448 = var_448;
            var_450 = var_450;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1869][var_450] == 0 && var_71[var_1869][var_450] != 0 && var_71[var_1869][var_450] != 13 && var_73[var_1869][var_450] == 0 && var_80[var_1869][var_450] == 0 && var_72[var_1869][var_450] <= 1) {
            var_448 = var_1869;
            var_450 = var_450;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1868][var_450] == 0 && var_71[var_1868][var_450] != 0 && var_71[var_1868][var_450] != 13 && var_73[var_1868][var_450] == 0 && var_80[var_1868][var_450] == 0 && var_72[var_1868][var_450] <= 1) {
            var_448 = var_1868;
            var_450 = var_450;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_448][var_1871] == 0 && var_71[var_448][var_1871] != 0 && var_71[var_448][var_1871] != 13 && var_73[var_448][var_1871] == 0 && var_80[var_448][var_1871] == 0 && var_72[var_448][var_1871] <= 1) {
            var_448 = var_448;
            var_450 = var_1871;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1869][var_1871] == 0 && var_71[var_1869][var_1871] != 0 && var_71[var_1869][var_1871] != 13 && var_73[var_1869][var_1871] == 0 && var_80[var_1869][var_1871] == 0 && var_72[var_1869][var_1871] <= 1) {
            var_448 = var_1869;
            var_450 = var_1871;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1868][var_1871] == 0 && var_71[var_1868][var_1871] != 0 && var_71[var_1868][var_1871] != 13 && var_73[var_1868][var_1871] == 0 && var_80[var_1868][var_1871] == 0 && var_72[var_1868][var_1871] <= 1) {
            var_448 = var_1868;
            var_450 = var_1871;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_448][var_1870] == 0 && var_71[var_448][var_1870] != 0 && var_71[var_448][var_1870] != 13 && var_73[var_448][var_1870] == 0 && var_80[var_448][var_1870] == 0 && var_72[var_448][var_1870] <= 1) {
            var_448 = var_448;
            var_450 = var_1870;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1869][var_1870] == 0 && var_71[var_1869][var_1870] != 0 && var_71[var_1869][var_1870] != 13 && var_73[var_1869][var_1870] == 0 && var_80[var_1869][var_1870] == 0 && var_72[var_1869][var_1870] <= 1) {
            var_448 = var_1869;
            var_450 = var_1870;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1868][var_1870] == 0 && var_71[var_1868][var_1870] != 0 && var_71[var_1868][var_1870] != 13 && var_73[var_1868][var_1870] == 0 && var_80[var_1868][var_1870] == 0 && var_72[var_1868][var_1870] <= 1) {
            var_448 = var_1868;
            var_450 = var_1870;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1873][var_450] == 0 && var_71[var_1873][var_450] != 0 && var_71[var_1873][var_450] != 13 && var_73[var_1873][var_450] == 0 && var_80[var_1873][var_450] == 0 && var_72[var_1873][var_450] <= 1) {
            var_448 = var_1873;
            var_450 = var_450;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1872][var_450] == 0 && var_71[var_1872][var_450] != 0 && var_71[var_1872][var_450] != 13 && var_73[var_1872][var_450] == 0 && var_80[var_1872][var_450] == 0 && var_72[var_1872][var_450] <= 1) {
            var_448 = var_1872;
            var_450 = var_450;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1873][var_1871] == 0 && var_71[var_1873][var_1871] != 0 && var_71[var_1873][var_1871] != 13 && var_73[var_1873][var_1871] == 0 && var_80[var_1873][var_1871] == 0 && var_72[var_1873][var_1871] <= 1) {
            var_448 = var_1873;
            var_450 = var_1871;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1872][var_1871] == 0 && var_71[var_1872][var_1871] != 0 && var_71[var_1872][var_1871] != 13 && var_73[var_1872][var_1871] == 0 && var_80[var_1872][var_1871] == 0 && var_72[var_1872][var_1871] <= 1) {
            var_448 = var_1872;
            var_450 = var_1871;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1873][var_1870] == 0 && var_71[var_1873][var_1870] != 0 && var_71[var_1873][var_1870] != 13 && var_73[var_1873][var_1870] == 0 && var_80[var_1873][var_1870] == 0 && var_72[var_1873][var_1870] <= 1) {
            var_448 = var_1873;
            var_450 = var_1870;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1872][var_1870] == 0 && var_71[var_1872][var_1870] != 0 && var_71[var_1872][var_1870] != 13 && var_73[var_1872][var_1870] == 0 && var_80[var_1872][var_1870] == 0 && var_72[var_1872][var_1870] <= 1) {
            var_448 = var_1872;
            var_450 = var_1870;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_448][var_1875] == 0 && var_71[var_448][var_1875] != 0 && var_71[var_448][var_1875] != 13 && var_73[var_448][var_1875] == 0 && var_80[var_448][var_1875] == 0 && var_72[var_448][var_1875] <= 1) {
            var_448 = var_448;
            var_450 = var_1875;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1869][var_1875] == 0 && var_71[var_1869][var_1875] != 0 && var_71[var_1869][var_1875] != 13 && var_73[var_1869][var_1875] == 0 && var_80[var_1869][var_1875] == 0 && var_72[var_1869][var_1875] <= 1) {
            var_448 = var_1869;
            var_450 = var_1875;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1868][var_1875] == 0 && var_71[var_1868][var_1875] != 0 && var_71[var_1868][var_1875] != 13 && var_73[var_1868][var_1875] == 0 && var_80[var_1868][var_1875] == 0 && var_72[var_1868][var_1875] <= 1) {
            var_448 = var_1868;
            var_450 = var_1875;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1873][var_1875] == 0 && var_71[var_1873][var_1875] != 0 && var_71[var_1873][var_1875] != 13 && var_73[var_1873][var_1875] == 0 && var_80[var_1873][var_1875] == 0 && var_72[var_1873][var_1875] <= 1) {
            var_448 = var_1873;
            var_450 = var_1875;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1872][var_1875] == 0 && var_71[var_1872][var_1875] != 0 && var_71[var_1872][var_1875] != 13 && var_73[var_1872][var_1875] == 0 && var_80[var_1872][var_1875] == 0 && var_72[var_1872][var_1875] <= 1) {
            var_448 = var_1872;
            var_450 = var_1875;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_448][var_1874] == 0 && var_71[var_448][var_1874] != 0 && var_71[var_448][var_1874] != 13 && var_73[var_448][var_1874] == 0 && var_80[var_448][var_1874] == 0 && var_72[var_448][var_1874] <= 1) {
            var_448 = var_448;
            var_450 = var_1874;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1869][var_1874] == 0 && var_71[var_1869][var_1874] != 0 && var_71[var_1869][var_1874] != 13 && var_73[var_1869][var_1874] == 0 && var_80[var_1869][var_1874] == 0 && var_72[var_1869][var_1874] <= 1) {
            var_448 = var_1869;
            var_450 = var_1874;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1868][var_1874] == 0 && var_71[var_1868][var_1874] != 0 && var_71[var_1868][var_1874] != 13 && var_73[var_1868][var_1874] == 0 && var_80[var_1868][var_1874] == 0 && var_72[var_1868][var_1874] <= 1) {
            var_448 = var_1868;
            var_450 = var_1874;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1873][var_1874] == 0 && var_71[var_1873][var_1874] != 0 && var_71[var_1873][var_1874] != 13 && var_73[var_1873][var_1874] == 0 && var_80[var_1873][var_1874] == 0 && var_72[var_1873][var_1874] <= 1) {
            var_448 = var_1873;
            var_450 = var_1874;
            var_446 = 1;
        }
        if (var_446 == 0 && var_77[var_1872][var_1874] == 0 && var_71[var_1872][var_1874] != 0 && var_71[var_1872][var_1874] != 13 && var_73[var_1872][var_1874] == 0 && var_80[var_1872][var_1874] == 0 && var_72[var_1872][var_1874] <= 1) {
            var_448 = var_1872;
            var_450 = var_1874;
            var_446 = 1;
        }
        if (var_336 >= 200) {
            var_446 = 0;
        }
        return;
    });
}

 // アイテムメニューからの "打つ" 選択時、射撃攻撃動作呼び出し処理
function func406(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(406);
        yield func647(); // 射撃攻撃動作処理
        return;
    });
}

// アイテム欄を開いた時の表示イニシャル処理 (1ページ目、カーソル一番上等)
function func407(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(407);
        if (var_233[var_225].Var0 >= 850 && var_233[var_225].Var0 < 860) {
            yield func473();
            return;
        }
        var_1866 = 1;
        var_682 = var_233[var_225].Var6;
        var_1876 = var_225;
        var_1877 = var_225;
        var_1878 = item_page_number;
        var_1879 = Y_axis_item_position;
        open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        var_221 = 0;
        item_page_number = 1; // 
        Y_axis_item_position = 45;
        var_225 = 1;
        var_223 = var_224 + 10;
        yield func051();
        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    });
}

function func408(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(408);
        var_1880 = 0;
        if (var_233[var_225].Var0 >= 805 && var_233[var_225].Var0 < 850) {
            var_1880 = 2;
        }
        if (var_233[var_225].Var0 >= 850 && var_233[var_225].Var0 < 900) {
            var_1880 = 1;
        }
        if (var_233[var_225].Var8 == 0) {
            var_1880 = 1;
        }
        var_1881 = (var_233[var_225].Var7 + var_233[var_225].Var8) * 20 + 37 + 30;
        var_1882 = var_225;
        var_1883 = Y_axis_item_position;

        var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        
        var_682 = var_233[var_225].Var6;
        var_1876 = var_225;
        var_1884 = var_233[var_1876].Var8 + 10;
        var_225 = 1;
        Y_axis_item_position = 45;
        var_1885 = item_page_number;
        item_page_number = 1;
        yield func051();
        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    });
}

function func409(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(409);
        if (var_171 == 1) {
            yield func424();
            if (var_1886 >= 1) {
                yield func425();
                return;
            }
        }
        yield func410(); // 装備したdiscを取り外す際の動作
    });
}

// 装備したdiscを取り外す際の動作
function func410(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(410);
        var_1846 = var_233[var_225].Var0;
        var_1837 = var_233[var_225].Var3;
        var_1835 = var_233[var_225].Var4;
        var_1847 = var_233[var_225].Var5;
        var_1848 = var_233[var_225].Var6;
        var_1838 = var_233[var_225].Var7;
        var_1849 = var_233[var_225].Var8;
        var_1850 = var_233[var_225].Var11;
        var_1851 = var_233[var_225].Var12;
        var_1833 = var_233[var_225].Var13;
        var_1834 = var_233[var_225].Var14;
        var_1852 = var_233[var_225].Var15;
        var_1853 = var_233[var_225].Var16;
        var_1854 = var_233[var_225].Var17;
        var_1855 = var_233[var_225].Var18;
        var_1836 = var_233[var_225].Var19;
        var_1856 = var_233[var_225].Var20;
        var_1857 = var_233[var_225].Var21;
        var_1858 = var_233[var_225].Var22;
        var_1859 = var_233[var_225].Var23;
        var_1860 = var_233[var_225].Var24;
        var_1861 = var_233[var_225].Var25;
        var_1862 = var_233[var_225].Var26;
        var_1863 = var_233[var_225].Var27;
        var_1864 = var_233[var_225].Var28;
        var_1865 = var_233[var_225].Var29;
        if (var_233[var_225].Var12 == 1 && var_234 == 0) {
            yield func426();
            yield func427();
            yield func428();
            if (var_225 == var_553 || var_225 == var_554 || var_225 == var_555) {
                open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                var_1866 = 0;
                var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "呪われていて外せない！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_217 = 1;
                yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                return;
            }
        }
        var_340 = var_233[var_225].Var0;
        var_1887 = var_233[var_225].Var13;
        var_1888 = Math.floor(var_233[var_225].Var13 / 10);
        if (var_234 == 1) {
            yield func479();
            var_234 = 0;
        }
        yield func411(); // アイテムを投げた時の動作処理
    });
}

// アイテムを投げた時の動作処理
function func411(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(411);
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            if (var_171 == 1) {
                yield func424();
                if (var_1886 >= 1) {
                    yield func425();
                    return;
                }
            }
            var_1846 = var_486[var_682][var_225][0];
            var_1837 = var_486[var_682][var_225][3];
            var_1835 = var_486[var_682][var_225][4];
            var_1847 = var_486[var_682][var_225][5];
            var_1848 = var_486[var_682][var_225][6];
            var_1838 = var_486[var_682][var_225][7];
            var_1849 = var_486[var_682][var_225][8];
            var_1889 = var_486[var_682][var_225][9];
            var_1890 = var_486[var_682][var_225][10];
            var_1850 = var_486[var_682][var_225][11];
            var_1851 = var_486[var_682][var_225][12];
            var_1833 = var_486[var_682][var_225][13];
            var_1834 = var_486[var_682][var_225][14];
            var_1852 = var_486[var_682][var_225][15];
            var_1853 = var_486[var_682][var_225][16];
            var_1854 = var_486[var_682][var_225][17];
            var_1855 = var_486[var_682][var_225][18];
            var_1836 = var_486[var_682][var_225][19];
            var_1856 = var_486[var_682][var_225][20];
            var_1857 = var_486[var_682][var_225][21];
            var_1858 = var_486[var_682][var_225][22];
            var_1859 = var_486[var_682][var_225][23];
            var_1860 = var_486[var_682][var_225][24];
            var_1861 = var_486[var_682][var_225][25];
            var_1862 = var_486[var_682][var_225][26];
            var_1863 = var_486[var_682][var_225][27];
            var_1864 = var_486[var_682][var_225][28];
            var_1865 = var_486[var_682][var_225][29];
            var_340 = var_486[var_682][var_225][0];
            var_1887 = var_486[var_682][var_225][13];
            var_1888 = Math.floor(var_486[var_682][var_225][13] / 10);
        }
        var_1246 = 1;
        var_1247 = var_1846;
        var_1249 = var_1833;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1246++;
        }
        var_1246 = 0;
        DSPLAY(audio_id = 107);
        var_1190 = 1;
        var_1191 = 1;
        var_455 = var_66;
        var_456 = var_67;
        var_1891 = 0;
        var_446 = 0;
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
        var_1892 = 10;
        var_1893 = 0;
        if (equip_disc[122] == 1 && var_262 == 0) {
            var_1892 = 60;
            var_1893 = 1;
        }
        for (let cnt1 = 0; cnt1 < var_1892; ++cnt1) {
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
            var_1896 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_1896 = 0;
            yield func337(); // メッセージ関係呼び出し
            var_1270 = 1;
            if (var_1893 == 0) {
                if (var_71[var_455][var_456] == 0) {
                    if (var_1270 == 1 && var_1852 == 2) {
                        if (var_215 == 112 || var_215 == 394) {
                            yield func660();
                            var_1897 = 1;
                        }
                    }
                    var_455 = var_1894;
                    var_456 = var_1895;
                    var_1898 = 1;
                    break;
                }
                if (var_82[var_455][var_456] > 0) {
                    var_1191 = 0;
                    var_1899 = var_82[var_455][var_456];
                    if (var_83[var_1899].Var0 != 50) {
                        yield func416();
                        if (var_1900 == 0) {
                            DSPLAY(audio_id = 141);
                        }
                        if (var_1900 == 1) {
                            yield func660();
                            var_1897 = 1;
                        }
                        break;
                    }
                }
            }
            if (var_1893 == 1) {
                if (var_82[var_455][var_456] > 0) {
                    var_1899 = var_82[var_455][var_456];
                    if (var_83[var_1899].Var0 != 50) {
                        yield func660();
                        var_1897 = 1;
                        var_1897 = 0;
                    }
                }
                if (var_455 <= 0 || var_455 >= var_31 || var_456 <= 0 || var_456 >= var_32) {
                    var_455 = 0;
                    var_456 = 0;
                    var_1897 = 1;
                    break;
                }
            }
        }
        if (var_1893 == 0 && var_340 >= 800 && var_340 < 900 && var_1901 == 0) {
            if (var_1898 == 1 || var_1897 == 1) {
                var_1902 = 0;
                if (var_340 == 800 && var_1898 == 1) {
                    var_1902 = 1;
                }
                if (var_1902 == 0) {
                    var_1897 = 1;
                    yield func414(); // ヤバいもの関係の容量設定？？
                    return;
                }
            }
        }
        var_1898 = 0;
        var_1191 = 0;
        var_1270 = 0;

        if (var_1893 == 0 && var_1897 == 1 && var_1901 == 0) {
            var_1897 = 0;
            var_1901 = 0;
            yield func417();
            return;
        }
        if (var_1893 == 1) {
            var_1897 = 0;
            var_1901 = 0;
            yield func418(); // 遠投状態(アヌビス神装備)でアイテムを投げた時の動作処理
            return;
        }
        var_1901 = 0;
        var_1897 = 0;
        var_309 = var_66;
        var_310 = var_67;
        var_66 = var_455;
        var_67 = var_456;
        yield func405();
        var_66 = var_309;
        var_67 = var_310;
        yield func724();

        if (var_446 == 1) { // 投げて落ちた先が地面であれば
            var_77[var_448][var_450] = var_854;
            var_78[var_854].Var0 = var_1846;
            var_78[var_854].Var1 = var_448;
            var_78[var_854].Var2 = var_450;
            var_78[var_854].Var3 = var_1837;
            var_78[var_854].Var4 = var_1835;
            var_78[var_854].Var5 = var_1847;
            var_78[var_854].Var6 = var_1848;
            var_78[var_854].Var7 = var_1838;
            var_78[var_854].Var8 = var_1849;
            var_78[var_854].Var9 = var_71[var_448][var_450];
            var_78[var_854].Var10 = 1;
            var_78[var_854].Var11 = var_1850;
            var_78[var_854].Var12 = var_1851;
            var_78[var_854].Var13 = var_1833;
            var_78[var_854].Var14 = var_1834;
            var_78[var_854].Var15 = var_1852;
            var_78[var_854].Var16 = var_1853;
            var_78[var_854].Var17 = var_1854;
            var_78[var_854].Var18 = var_1855;
            var_78[var_854].Var19 = var_1836;
            var_78[var_854].Var20 = var_1856;
            var_78[var_854].Var21 = var_1857;
            var_78[var_854].Var22 = var_1858;
            var_78[var_854].Var23 = var_1859;
            var_78[var_854].Var24 = var_1860;
            var_78[var_854].Var25 = var_1861;
            var_78[var_854].Var26 = var_1862;
            var_78[var_854].Var27 = var_1863;
            var_78[var_854].Var28 = var_1864;
            var_78[var_854].Var29 = var_1865;
            belongings_item_list = var_1846;
            var_321 = var_854;
            yield func398(); // 道具(メニュー画面/道具)へ直接表示されるアイテム表示
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + disp_item_name + " は落ちた";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
        }
        if (var_446 == 0) { // 投げて落ちた先が水面等おけない床であれば
            var_78[var_854].Var0 = var_1846;
            var_78[var_854].Var1 = 0;
            var_78[var_854].Var2 = 0;
            var_78[var_854].Var3 = var_1837;
            var_78[var_854].Var4 = var_1835;
            var_78[var_854].Var5 = var_1847;
            var_78[var_854].Var6 = var_1848;
            var_78[var_854].Var7 = var_1838;
            var_78[var_854].Var8 = var_1849;
            var_78[var_854].Var9 = 0;
            var_78[var_854].Var10 = 0;
            var_78[var_854].Var11 = var_1850;
            var_78[var_854].Var12 = var_1851;
            var_78[var_854].Var13 = var_1833;
            var_78[var_854].Var14 = var_1834;
            var_78[var_854].Var15 = var_1852;
            var_78[var_854].Var16 = var_1853;
            var_78[var_854].Var17 = var_1854;
            var_78[var_854].Var18 = var_1855;
            var_78[var_854].Var19 = var_1836;
            var_78[var_854].Var20 = var_1856;
            var_78[var_854].Var21 = var_1857;
            var_78[var_854].Var22 = var_1858;
            var_78[var_854].Var23 = var_1859;
            var_78[var_854].Var24 = var_1860;
            var_78[var_854].Var25 = var_1861;
            var_78[var_854].Var26 = var_1862;
            var_78[var_854].Var27 = var_1863;
            var_78[var_854].Var28 = var_1864;
            var_78[var_854].Var29 = var_1865;
            belongings_item_list = var_1846;
            var_321 = var_854;
            yield func398(); // 道具(メニュー画面/道具)へ直接表示されるアイテム表示
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                var_78[var_854]["Var" + cnt2] = 0;
            }
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + disp_item_name + " は";
            comments_row2 = "地面に落ちて使い物にならなくなった";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
        }
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            yield func430();
        }
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

function func412(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(412);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        pos((var_455 - var_66 + 4) * 40, (var_456 - var_67 + 4) * 40 - 10);
        if (var_1896 == 1) {
            if (var_199 == 4) {
                pos((var_455 - var_66 + 4) * 40 + 20, (var_456 - var_67 + 4) * 40 - 10);
            }
            if (var_199 == 6) {
                pos((var_455 - var_66 + 4) * 40 - 20, (var_456 - var_67 + 4) * 40 - 10);
            }
            if (var_199 == 2) {
                pos((var_455 - var_66 + 4) * 40, (var_456 - var_67 + 4) * 40 - 10 - 20);
            }
            if (var_199 == 8) {
                pos((var_455 - var_66 + 4) * 40, (var_456 - var_67 + 4) * 40 - 10 + 20);
            }
            if (var_199 == 1) {
                pos((var_455 - var_66 + 4) * 40 + 20, (var_456 - var_67 + 4) * 40 - 10 - 20);
            }
            if (var_199 == 3) {
                pos((var_455 - var_66 + 4) * 40 - 20, (var_456 - var_67 + 4) * 40 - 10 - 20);
            }
            if (var_199 == 7) {
                pos((var_455 - var_66 + 4) * 40 + 20, (var_456 - var_67 + 4) * 40 - 10 + 20);
            }
            if (var_199 == 9) {
                pos((var_455 - var_66 + 4) * 40 - 20, (var_456 - var_67 + 4) * 40 - 10 + 20);
            }
        }
        belongings_item_list = var_1846;
        var_1248 = var_1833;
        yield func397();
        return;
    });
}

function func413(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(413);
        if (var_199 == 2) {
            pos(90, 140);
        }
        if (var_199 == 8) {
            pos(190, 80);
        }
        if (var_199 == 4) {
            pos(90, 80);
        }
        if (var_199 == 6) {
            pos(170, 80);
        }
        if (var_199 == 1) {
            pos(90, 80);
        }
        if (var_199 == 3) {
            pos(170, 80);
        }
        if (var_199 == 7) {
            pos(140, 80);
        }
        if (var_199 == 9) {
            pos(140, 80);
        }
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
        if (var_1190 == 6) {
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 200);
        }
        if (var_1190 == 7) {
            color(0, 0, 0);
    
            gmode(mode = 4, data2 = null, data3 = null, alpha = 150);
        }
        if (var_1190 == 8) {
            color(0, 0, 0);

            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        }
        if (var_1190 == 9) {
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 50);
        }
        gcopy(17, 0, 1000, 80, 80);
        return;
    });
}
// ヤバいもの関係の容量設定？？
function func414(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(414);
        if (var_1850 == 1) {
            belongings_item_list = var_1846;
            yield func492(); // アイテムリスト呼び出し
            var_482 = 0;
            if (var_1846 != 800) {
                var_482 = var_1838 * 100 + var_482;
            }
            count_buying_price = count_buying_price + buying_price + var_482;
        }
        var_1897 = 0;
        var_1898 = 0;
        var_1191 = 0;
        var_1220 = 0;
        // No = 853 サーフィスの人形
        if (var_1903 == 0 && var_233[var_225].Var0 == 853) {
            var_1270 = 0;
            yield func415();
            return;
        }
        var_488 = var_1846;
        yield func100();
        var_271 = 1;
        var_1521 = 1;
        var_1522 = var_233[var_225].Var0;
        var_1396 = var_455;
        var_1397 = var_456;
        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1521++;
        }
        var_271 = 0;
        var_1521 = 0;
        var_1904 = var_233[var_225].Var6;
        var_1905 = var_233[var_225].Var8;
        var_1906 = var_448;
        var_1907 = var_450;
        var_1908 = var_455;
        var_1909 = var_456;
        // No = 806 ヤバいもの「カルネの死体」、No = 851 ヤバいもの「ホルマジオのビン」、// No = 852 ヤバいもの「ランドセル」ではない場合
        if (var_233[var_225].Var0 != 806 && var_233[var_225].Var0 != 851 && var_233[var_225].Var0 != 852) {
            var_1910 = 1;
            for (let cnt2 = 0; cnt2 < var_1905; ++cnt2) {
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
                var_78[var_854].Var0 = var_486[var_1904][var_1910][0];
                var_78[var_854].Var1 = var_448;
                var_78[var_854].Var2 = var_450;
                var_78[var_854].Var3 = var_486[var_1904][var_1910][3];
                var_78[var_854].Var4 = var_486[var_1904][var_1910][4];
                var_78[var_854].Var5 = var_486[var_1904][var_1910][5];
                var_78[var_854].Var6 = var_486[var_1904][var_1910][6];
                var_78[var_854].Var7 = var_486[var_1904][var_1910][7];
                var_78[var_854].Var8 = var_486[var_1904][var_1910][8];
                var_78[var_854].Var9 = var_71[var_448][var_450];
                var_78[var_854].Var10 = 1;
                var_78[var_854].Var11 = var_486[var_1904][var_1910][11];
                var_78[var_854].Var12 = var_486[var_1904][var_1910][12];
                var_78[var_854].Var13 = var_486[var_1904][var_1910][13];
                var_78[var_854].Var14 = var_486[var_1904][var_1910][14];
                var_78[var_854].Var15 = var_486[var_1904][var_1910][15];
                var_78[var_854].Var16 = var_486[var_1904][var_1910][16];
                var_78[var_854].Var17 = var_486[var_1904][var_1910][17];
                var_78[var_854].Var18 = var_486[var_1904][var_1910][18];
                var_78[var_854].Var19 = var_486[var_1904][var_1910][19];
                var_78[var_854].Var20 = var_486[var_1904][var_1910][20];
                var_78[var_854].Var21 = var_486[var_1904][var_1910][21];
                var_78[var_854].Var22 = var_486[var_1904][var_1910][22];
                var_78[var_854].Var23 = var_486[var_1904][var_1910][23];
                var_78[var_854].Var24 = var_486[var_1904][var_1910][24];
                var_78[var_854].Var25 = var_486[var_1904][var_1910][25];
                var_78[var_854].Var26 = var_486[var_1904][var_1910][26];
                var_78[var_854].Var27 = var_486[var_1904][var_1910][27];
                var_78[var_854].Var28 = var_486[var_1904][var_1910][28];
                var_78[var_854].Var29 = var_486[var_1904][var_1910][29];
                var_1910++;
            }
            yield func018();
        }
        var_1270 = 0;
        // No = 806 ヤバいもの「カルネの死体」の場合
        if (var_233[var_225].Var0 == 806) {
            var_1911 = var_233[var_225].Var7 - var_233[var_225].Var8;
            if (var_1911 >= 1) {
                var_1912 = var_673;
                var_1913 = 1;
                var_1845 = 3;
                var_1914 = var_1908;
                var_1915 = var_1909;
                for (let cnt3 = 0; cnt3 < var_1911; ++cnt3) {
                    yield func556();
                }
                var_1913 = 0;
                var_1845 = 0;
                var_673 = var_1912;
            }
        }
        // No = 851 ヤバいもの「ホルマジオのビン」の場合
        if (var_233[var_225].Var0 == 851) {
            var_1911 = var_233[var_225].Var8;
            if (var_1911 >= 1) {
                var_1912 = var_673;
                var_1916 = var_233[var_225].Var6;
                var_1845 = 3;
                var_1914 = var_1908;
                var_1915 = var_1909;
                var_1917 = 1;
                for (let cnt3 = 0; cnt3 < var_1911; ++cnt3) {
                    var_1918 = var_486[var_1916][var_1917][15];
                    var_1919 = var_486[var_1916][var_1917][18];
                    if (var_1918 != 0) {
                        yield func556();
                    }
                    var_1917++;
                }
                var_1918 = 0;
                var_1845 = 0;
                var_673 = var_1912;
            }
        }
        // No = 852 ヤバいもの「ランドセル」の場合
        if (var_233[var_225].Var0 == 852) {
            var_1911 = var_233[var_225].Var7 - var_233[var_225].Var8;
            if (var_1911 >= 1) {
                var_1912 = var_673;
                var_1920 = 1;
                var_1845 = 3;
                var_1914 = var_1908;
                var_1915 = var_1909;
                for (let cnt3 = 0; cnt3 < var_1911; ++cnt3) {
                    yield func556();
                }
                var_1920 = 0;
                var_1845 = 0;
                var_673 = var_1912;
            }
        }
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        if (var_1903 == 1) {
            return;
        }
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

function func415(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(415);
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        yield func667();
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
function func416(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(416);
        var_1900 = 1;
        var_1921 = rnd(9);
        if (var_1921 == 0) {
            var_1900 = 0;
        }
        if (var_340 >= 800 && var_340 < 900) {
            var_1900 = 1;
        }
        if (var_111 == 1 || var_138 == 1) {
            var_1900 = 1;
        }
        // 共鳴ID = 136 「はっはっは　狙え狙え」(投影命中率上昇)
        if (sympathy_id == 136) {
            var_1900 = 1;
        }
        if (dangeon_number == 99) {
            var_1900 = 1;
        }
        return;
    });
}

function func417(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(417);
        payment_amount = 0;
        if (var_1850 == 1) {
            belongings_item_list = var_1846;
            yield func492(); // アイテムリスト呼び出し
            var_482 = 0;
            var_482 = (var_1837 + var_1835) * 50;
            if (var_1846 != 800) {
                var_482 = var_1838 * 100 + var_482;
            }
            if (var_1836 > 1) {
                var_482 = var_1836 * 500 + var_482;
            }
            payment_amount = payment_amount + buying_price + var_482;
        }

        if (var_1846 >= 800 && var_1846 < 900) {
            var_484 = 1;
            var_485 = var_1848;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                if (var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1) {
                    belongings_item_list = var_486[var_485][var_484][0];
                    yield func492(); // アイテムリスト呼び出し
                    var_482 = 0;
                    var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
                    if (var_486[var_485][var_484][19] > 1) {
                        var_482 = var_486[var_485][var_484][19] * 500 + var_482;
                    }
                    payment_amount = payment_amount + buying_price + var_482;
                }
                var_484 = var_484 + 1;
            }
        }
        count_buying_price = count_buying_price + payment_amount;
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            yield func430();
        }
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1220 = 0;
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

// 遠投状態(アヌビス神装備)でアイテムを投げた時の動作処理
function func418(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(418);
        belongings_item_list = var_1846;
        disc_rarity = var_1833;
        yield func399(); // 遠投状態で投げた時のアイテム表示
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + var_1832 + " は";
        comments_row2 = "ナイルの川底に沈んだ。";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        payment_amount = 0;
        if (var_1850 == 1) {
            belongings_item_list = var_1846;
            yield func492(); // アイテムリスト呼び出し
            var_482 = 0;
            var_482 = (var_1837 + var_1835) * 50;
            if (var_1846 != 800) {
                var_482 = var_1838 * 100 + var_482;
            }
            if (var_1836 > 1) {
                var_482 = var_1836 * 500 + var_482;
            }
            payment_amount = payment_amount + buying_price + var_482;
        }
        if (var_1846 >= 800 && var_1846 < 900) {
            var_484 = 1;
            var_485 = var_1848;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                if (var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1) {
                    belongings_item_list = var_486[var_485][var_484][0];
                    yield func492(); // アイテムリスト呼び出し
                    var_482 = 0;
                    var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
                    if (var_486[var_485][var_484][19] > 1) {
                        var_482 = var_486[var_485][var_484][19] * 500 + var_482;
                    }
                    payment_amount = payment_amount + buying_price + var_482;
                }
                var_484 = var_484 + 1;
            }
        }
        count_buying_price = count_buying_price + payment_amount;
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            yield func430();
        }
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1220 = 0;
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// アイテムに乗った時の動作処理
function func419(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(419);
        if (var_342 == 1) {
            return;
        }
        var_240 = 0;
        var_321 = var_77[var_66][var_67];
        belongings_item_list = var_78[var_321].Var0;
        disc_rarity = var_78[var_321].Var13;
        yield func492(); // アイテムリスト呼び出し
        yield func398(); // 道具(メニュー画面/道具)へ直接表示されるアイテム表示
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_78[var_321].Var11 == 0) {
            comments_row1 = "" + disp_item_name + "に乗った";
            if (belongings_item_list == 800) {
                var_1922 = var_78[var_321].Var6;
                if (var_862[800][0] == 1 && var_990[var_1922] == 1) {
                    var_1923 = var_1922;
                    yield func490();
                    if (var_1924 != "") {
                        comments_row2 = "【" + var_1924 + "】";
                    }
                }
            }
        }

        if (var_78[var_321].Var11 == 1) { // お店で発動した場合？
            var_1925 = 0;
            var_482 = 0;
            var_482 = (var_78[var_321].Var3 + var_78[var_321].Var4) * 50;
            if (var_78[var_321].Var0 != 800) {
                var_482 = var_78[var_321].Var7 * 100 + var_482;
            }
            if (var_78[var_321].Var19 > 1) {
                var_482 = var_78[var_321].Var19 * 500 + var_482;
            }
            var_1925 = buying_price + var_482;
            if (var_78[var_321].Var0 >= 800 && var_78[var_321].Var0 < 900) {
                var_484 = 0;
                var_485 = var_78[var_321].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1) {
                        belongings_item_list = var_486[var_485][var_484][0];
                        yield func492(); // アイテムリスト呼び出し
                        var_482 = 0;
                        var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
                        if (var_486[var_485][var_484][19] > 1) {
                            var_482 = var_486[var_485][var_484][19] * 500 + var_482;
                        }
                        var_1925 = var_1925 + buying_price + var_482;
                    }
                    var_484 = var_484 + 1;
                }
            }
            comments_row1 = "" + disp_item_name;
            comments_row2 = "値段 " + var_1925 + " G";
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
        return;
    });
}

// 各アイテムを使った際、item_listのIDに応じて効果を割り振り
function func420(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(420);
        var_1926 = 0;
        var_1927 = 0;
        var_1928 = 0;
        var_1929 = 0;
        var_1930 = 0;
        if (var_220 == 0 && var_233[var_225].Var15 == 2) { // 道具画面(メニュー画面/道具)が閉じている状態
            var_1930 = 1;
        }
        if (var_220 == 1 && var_486[var_682][var_225][15] == 2) { // 道具画面(メニュー画面/道具)が開いている状態
            var_1930 = 1;
        }
        if (var_234 == 1) {
            var_1931 = 0;
            if (belongings_item_list >= 912 && belongings_item_list < 987) {
                var_1931 = 1;
            }
            if (belongings_item_list >= 993 && belongings_item_list <= 994) {
                var_1931 = 1;
            }
            if (belongings_item_list >= 750 && belongings_item_list < 770) {
                var_1931 = 1;
            }
            if (belongings_item_list != 567 && belongings_item_list != 590 && belongings_item_list != 565) {
                if (var_1931 == 0) {
                    yield func479();
                }
            }
            if (belongings_item_list == 567 && var_1930 == 1) {
                yield func479();
            }
            if (belongings_item_list == 590 && var_1930 == 1) {
                yield func479();
            }
            if (belongings_item_list == 565 && var_1930 == 1) {
                yield func479();
            }
            if (var_1931 == 1 && var_1930 == 1) {
                yield func479();
            }
        }
        var_1932 = var_225;
        if (belongings_item_list >= 100 && belongings_item_list < 600) {
            var_1264 = 1;
            DSPLAY(audio_id = 117);
        }
        if (belongings_item_list >= 600 && belongings_item_list < 606) {
            var_1214 = 3;
            DSPLAY(audio_id = 119); // 食べた時の効果音
        }
        if (belongings_item_list >= 606 && belongings_item_list < 650) {
            var_1214 = 1;
            DSPLAY(audio_id = 119); // 食べた時の効果音
        }
        if (belongings_item_list >= 650 && belongings_item_list < 660) {
            var_1214 = 2;
            DSPLAY(audio_id = 119); // 食べた時の効果音
        }
        if (belongings_item_list >= 660 && belongings_item_list < 700) {
            var_1214 = 1;
            DSPLAY(audio_id = 119); // 食べた時の効果音
        }
        if (belongings_item_list >= 750 && belongings_item_list < 800 && var_234 == 0) {
            var_1252 = 1;
        }
        if (belongings_item_list >= 900 && belongings_item_list < 1000 && var_234 == 0) {
            var_1252 = 1;
        }
        if (belongings_item_list >= 750 && belongings_item_list < 770) {
            var_1840 = belongings_item_list + 250 - 900;
            var_988[var_1840] = 1;
        }
        if (belongings_item_list >= 900 && belongings_item_list < 1000) {
            var_1840 = belongings_item_list - 900;
            var_988[var_1840] = 1;
        }
        if (belongings_item_list >= 100 && belongings_item_list < 500) {
            var_1933 = 1;
        }
        if (belongings_item_list >= 100 && belongings_item_list < 400) {
            var_1934 = 0;
            if (var_896 == 1 && disc_class == 1) {
                var_1934 = 1;
            }
            if (var_897 == 1 && disc_class == 2) {
                var_1934 = 1;
            }
            if (var_898 == 1 && disc_class == 3) {
                var_1934 = 1;
            }
            if (var_896 == 1 && var_476[var_225] == 1) {
                var_1934 = 1;
            }
            if (var_897 == 1 && var_477[var_225] == 1) {
                var_1934 = 1;
            }
            if (var_898 == 1 && var_478[var_225] == 1) {
                var_1934 = 1;
            }
            if (var_1934 == 1) {
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "呪われていてはずせない！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func340(); // キー入力による選択処理
                var_1264 = 0;
                var_217 = 1;
                disc_class = 0;
                var_1933 = 0;
                yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                return;
            }
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (belongings_item_list >= 100 && belongings_item_list < 400) {
            if (var_233[var_225].Var4 != 0) {
                comments_row1 = "" + item_name + "+" + var_233[var_225].Var4 + "を";
                var_1936 = 0;
            }
            if (var_233[var_225].Var4 == 0) {
                comments_row1 = "" + item_name + "を";
                var_1936 = 0;
            }
            if (var_862[belongings_item_list][0] == 0) {
                comments_row1 = "" + item_name + "を";
                var_1936 = 0;
            }
            if (disc_class == 1 && var_476[var_225] == 0) {
                comments_row2 = "攻撃用に装備した";
                var_1927 = belongings_item_list;
                var_1926 = 1;
                yield func105(); // discを装備した際のBGM選曲
            }
            if (disc_class == 2 && var_477[var_225] == 0) {
                comments_row2 = "防御用に装備した";
                var_1928 = belongings_item_list;
                var_1926 = 1;
                yield func105(); // discを装備した際のBGM選曲
            }
            if (disc_class == 3 && var_478[var_225] == 0) {
                comments_row2 = "能力用に装備した";
                var_1929 = belongings_item_list;
                var_1926 = 1;
                yield func105(); // discを装備した際のBGM選曲
            }
            if (disc_class == 1 && var_476[var_225] == 1) {
                comments_row1 = comments_row1 + "はずした";
                yield func106(); // BGM選曲呼び出し割り振り
            }
            if (disc_class == 2 && var_477[var_225] == 1) {
                comments_row1 = comments_row1 + "はずした";
                yield func106(); // BGM選曲呼び出し割り振り
            }
            if (disc_class == 3 && var_478[var_225] == 1) {
                comments_row1 = comments_row1 + "はずした";
                yield func106(); // BGM選曲呼び出し割り振り
            }
        }
        if (belongings_item_list >= 400 && belongings_item_list < 450 && var_479[var_225] == 0) {
            comments_row1 = "" + item_name + "(" + var_233[var_225].Var3 + ")を装備した";
            var_1936 = 0;
            yield func105(); // discを装備した際のBGM選曲
        }
        if (belongings_item_list >= 400 && belongings_item_list < 450 && var_479[var_225] == 1) {
            comments_row1 = "" + item_name + "(" + var_233[var_225].Var3 + ")をはずした";
            var_1936 = 0;
            yield func106(); // BGM選曲呼び出し割り振り
        }
        if (belongings_item_list >= 500 && belongings_item_list < 600) {
            comments_row1 = "" + item_name + " を使った";
            var_1936 = 1;
        }
        if (belongings_item_list >= 600 && belongings_item_list < 700) {
            comments_row1 = "" + item_name + " を食べた";
            var_1936 = 1;
        }
        if (belongings_item_list == 632 || belongings_item_list == 646) {
            comments_row1 = "" + item_name + " を飲んだ";
        }
        if (belongings_item_list >= 700 && belongings_item_list < 750) {
            comments_row1 = "" + item_name + " を使った";
            var_1936 = 1;
        }
        if (belongings_item_list >= 750 && belongings_item_list < 800) {
            comments_row1 = "" + item_name + " を読んだ";
            var_1936 = 1;
            var_1253 = belongings_item_list;
        }
        if (belongings_item_list >= 900 && belongings_item_list < 1000) {
            comments_row1 = "" + item_name + " を読んだ";
            var_1936 = 1;
            var_1253 = belongings_item_list;
        }
        if (belongings_item_list >= 912 && belongings_item_list <= 986 && var_1930 == 0) {
            comments_row1 = "どのスタンドを研究しますか？";
            var_1936 = 0;
            var_1937 = item_name;
        }
        if (belongings_item_list >= 993 && belongings_item_list <= 994 && var_1930 == 0) {
            comments_row1 = "どのスタンドを研究しますか？";
            var_1936 = 0;
            var_1937 = item_name;
        }
        if (belongings_item_list >= 750 && belongings_item_list <= 770 && var_1930 == 0) {
            comments_row1 = "どのスタンドを研究しますか？";
            var_1936 = 0;
            var_1937 = item_name;
        }
        if (belongings_item_list >= 912 && belongings_item_list <= 986 && var_1930 == 1) {
            comments_row1 = "" + item_name + " を読んだ";
            var_1936 = 0;
            var_1937 = item_name;
        }
        if (belongings_item_list >= 993 && belongings_item_list <= 994 && var_1930 == 1) {
            comments_row1 = "" + item_name + " を読んだ";
            var_1936 = 0;
            var_1937 = item_name;
        }
        if (belongings_item_list >= 750 && belongings_item_list <= 770 && var_1930 == 1) {
            comments_row1 = "" + item_name + " を読んだ";
            var_1936 = 0;
            var_1937 = item_name;
        }
        var_1938 = item_name;
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            belongings_item_list = var_233[var_225].Var0;
            var_233[var_225].Var14 = 1;
            if (dangeon_number != 3 && dangeon_number != 4 && dangeon_number != 5 && belongings_item_list >= 100 && belongings_item_list < 400) {
                var_862[belongings_item_list][0] = 1;
            }
        }
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            belongings_item_list = var_486[var_682][var_225][0];
        }
        if (dangeon_number != 1 && var_262 == 0) {
            var_1939 = 0;
            if (belongings_item_list >= 450 && belongings_item_list < 500) {
                var_1939 = 1;
            }
            if (belongings_item_list >= 500 && belongings_item_list < 600) {
                var_1939 = 1;
            }
            // No = 3 なので、ディアボロの試練
            if (dangeon_number == 3 && belongings_item_list >= 100 && belongings_item_list < 400) {
                var_1939 = 1;
            }
            // No = 4 なので、一巡後の世界
            if (dangeon_number == 4 && belongings_item_list >= 100 && belongings_item_list < 400) {
                var_1939 = 1;
            }
            if (dangeon_number == 5 && belongings_item_list >= 100 && belongings_item_list < 400) {
                var_1939 = 1;
            }
            // 読んだアイテムが未識別状態(var_862[belongings_item_list][0] == 0)かつ
            // アイテムが var_1939 = 1 に該当するものかつ
            // No = 567 アヴドゥルのdiscでないかつ
            // No = 590 ギアッチョのdiscでないかつ
            // No = 565 ピッチ神父のdisc出ない場合
            if (var_862[belongings_item_list][0] == 0 && var_1939 == 1 && belongings_item_list != 567 && belongings_item_list != 590 && belongings_item_list != 565) {
                if (var_375 == 0) {
                    var_198 = 1;
                    var_300 = 0;
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "なんと" + item_name + "は";
                    if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                        belongings_item_list = var_233[var_225].Var0;
                    }
                    if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                        belongings_item_list = var_486[var_682][var_225][0];
                    }
                    var_862[belongings_item_list][0] = 1;
                    yield func492(); // アイテムリスト呼び出し
                    comments_row2a = "" + item_name + "だった！";
                    if (belongings_item_list >= 100 && belongings_item_list < 400 && var_233[var_225].Var4 != 0) {
                        comments_row2a = "" + item_name + "+" + var_233[var_225].Var4 + "だった！";
                    }
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func047();
                    yield func050();
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                }
            }
        }
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            belongings_item_list = var_233[var_225].Var0;
        }
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            belongings_item_list = var_486[var_682][var_225][0];
        }
        // 装備discの場合
        if (var_233[var_225].Var12 == 1 && belongings_item_list >= 100 && belongings_item_list < 400) {
            var_198 = 1;
            var_300 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (disc_class == 1) {
                var_896 = 1;
            }
            if (disc_class == 2) {
                var_897 = 1;
            }
            if (disc_class == 3) {
                var_898 = 1;
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + item_name + "は";
            comments_row2a = "呪われていた！！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            var_1940 = var_199;
            var_199 = 2;
            var_1264 = 0;
            var_747 = 1;
            var_1212 = 1;
            DSPLAY(audio_id = 127);
            var_389 = 2;
            var_1498 = 1;
            var_271 = 1;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1498 = 1;
                yield func337(); // メッセージ関係呼び出し
                var_1498 = 2;
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1498 = 0;
            var_271 = 0;
            var_389 = 0;
            var_199 = var_1940;
        }
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            belongings_item_list = var_233[var_225].Var0;
        }
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            belongings_item_list = var_486[var_682][var_225][0];
        }
        var_1941 = 0;
        if (belongings_item_list < 500) {
            var_1941 = 1;
        }
        if (belongings_item_list == 567 || belongings_item_list == 590 || belongings_item_list == 565) {
            var_1941 = 1;
        }
        if (belongings_item_list >= 912 && belongings_item_list <= 986) {
            var_1941 = 1;
        }
        if (belongings_item_list >= 750 && belongings_item_list <= 800) {
            var_1941 = 1;
        }
        // 道具画面(メニュー画面/道具)が閉じている状態
        if (var_1941 == 0 && var_220 == 0 && var_233[var_225].Var11 == 1) {
            var_106 = 1;
            belongings_item_list = var_233[var_225].Var0;
            yield func492(); // アイテムリスト呼び出し
            count_buying_price = count_buying_price + buying_price;
        }
        // 道具画面(メニュー画面/道具)が開いている状態
        if (var_1941 == 0 && var_220 == 1 && var_486[var_682][var_225][11] == 1) {
            var_106 = 1;
            belongings_item_list = var_486[var_682][var_225][0];
            yield func492(); // アイテムリスト呼び出し
            count_buying_price = count_buying_price + buying_price;
        }
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            belongings_item_list = var_233[var_225].Var0;
            disc_rarity = var_233[var_225].Var13;
            var_1942 = var_233[var_225].Var20;
            var_1943 = var_233[var_225].Var21;
        }
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            belongings_item_list = var_486[var_682][var_225][0];
            disc_rarity = var_486[var_682][var_225][13];
            var_1942 = var_486[var_682][var_225][20];
            var_1943 = var_486[var_682][var_225][21];
        }
        //var_1944 = belongings_item_list;

        yield func492(); // アイテムリスト呼び出し
        if (belongings_item_list == 700 || belongings_item_list == 571 || belongings_item_list == 579 || belongings_item_list == 729 || belongings_item_list == 730 || belongings_item_list == 731 || belongings_item_list == 701 || belongings_item_list == 995) {
            var_1936 = 0;
        }
        if (belongings_item_list >= 100 && belongings_item_list < 400) {
            yield func493(); // 装備disc能力値の設定
        }
        // if (belongings_item_list < 100 || belongings_item_list >= 500) {
        //     yield func498(); // 消費アイテムの効果
        // }
        if (belongings_item_list >= 500 || belongings_item_list < 750) {
            yield func498(); // 消費アイテムの効果
        }
        //belongings_item_list = var_1944;
        // belongings_item_list = 0; // Var 0.1309で追加
        //yield func433();

        if (var_234 == 0) {
            var_1931 = 0;
            if (belongings_item_list >= 912 && belongings_item_list < 987) {
                var_1931 = 1;
            }
            if (belongings_item_list >= 993 && belongings_item_list <= 994) {
                var_1931 = 1;
            }
            if (belongings_item_list >= 750 && belongings_item_list < 770) {
                var_1931 = 1;
            }
            // 
            if (belongings_item_list != 567 && belongings_item_list != 590 && belongings_item_list != 565) {
                if (var_1931 == 0) {
                    yield func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
                }
            }
            // No = 567 ジョンガリAのdisc
            if (belongings_item_list == 567 && var_1930 == 1) {
                yield func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
            }
            // No = 590 ギアッチョのdisc
            if (belongings_item_list == 590 && var_1930 == 1) {
                yield func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
            }
            // No = 565 ケンゾーのdisc
            if (belongings_item_list == 565 && var_1930 == 1) {
                yield func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
            }
            if (var_1931 == 1 && var_1930 == 1) {
                yield func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
            }
        }
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_1945 == 4) {
            var_1936 = 0;
        }
        if (var_1936 == 1) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = item_message1;
            comments_row2a = item_message2;
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_1948 = 0;
        var_1264 = 0;
        var_1214 = 0;
        var_217 = 1;
        disc_class = 0;
        if (var_1949 == 1) {
            DSPLAY(audio_id = 118);
            var_502 = 1;
            yield func356();
            return;
        }
        if (var_1223 == 1) {
            yield func647(); // 射撃攻撃動作処理
            return;
        }
        if (var_1945 >= 1) {
            yield func438(); // キーの入力　？
            return;
        }
        if (var_1950 > 0) {
            yield func443(); // キーの入力　？
            return;
        }
        if (var_1055 == 1) {
            yield func447(); // 魔法のランプを使用した際の動作処理
            return;
        }
        if (var_1951 == 1) {
            yield func550(); // 階段を上り下りする時に関係する関数
            return;
        }
        var_1252 = 0;
        if (var_1933 == 1) { // アイテム100 ~ 500 であれば
            yield func494();
            yield func497(); // スタンドの共鳴発動時のメッセージ表示
            var_1933 = 0;
            var_1926 = 0;
            var_1927 = 0;
            var_1928 = 0;
            var_1929 = 0;
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        var_234 = 0;
        var_220 = 0; // 道具画面(メニュー画面/道具)が閉じている状態
        if (var_1952 == 1) {
            var_1952 = 0;
            var_217 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

function func421(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(421);
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            yield func423();
            return;
        }
        var_233[var_225].Var3 = var_233[var_225].Var3 - 1;
        if (var_233[var_225].Var11 == 1) {
            var_106 = 1;
            count_buying_price = count_buying_price + 50;
        }
        var_1953 = 0;
        if (var_233[var_225].Var0 >= 400 && var_233[var_225].Var0 < 500 && var_233[var_225].Var3 <= 0) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1953 = 1;
            belongings_item_list = var_233[var_225].Var0;
            yield func492(); // アイテムリスト呼び出し
            var_299 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            comments_row1 = "" + item_name + "は";
            comments_row2 = "ｽﾀﾝﾄﾞﾊﾟﾜｰが尽きて消滅した";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            if (var_233[var_225].Var11 == 1) {
                var_106 = 1;
                count_buying_price = count_buying_price + buying_price;
            }
            if (var_479[var_225] == 1) {
                yield func106(); // BGM選曲呼び出し割り振り
                var_479 = dim(40);
                var_250 = 0;
                var_410 = 0;
            }
            yield func433(); // アイテム配列(所持アイテム)初期化関数
        }
        return;
    });
}
function func422(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(422);
        var_78[var_321].Var3 = var_78[var_321].Var3 - 1;

        if (var_78[var_321].Var11 == 1) { // お店で発動した場合？
            var_106 = 1;
            count_buying_price = count_buying_price + 50;
        }
        var_1953 = 0;
        if (var_78[var_321].Var0 >= 400 && var_78[var_321].Var0 < 500 && var_78[var_321].Var3 <= 0) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1953 = 1;
            belongings_item_list = var_78[var_321].Var0;
            yield func492(); // アイテムリスト呼び出し
            var_299 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            comments_row1 = "" + item_name + "は";
            comments_row2 = "ｽﾀﾝﾄﾞﾊﾟﾜｰが尽きて消滅した";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();

            if (var_78[var_321].Var11 == 1) { // お店で発動した場合？
                var_106 = 1;
                count_buying_price = count_buying_price + buying_price;
            }
            yield func479();
        }
        return;
    });
}
function func423(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(423);
        var_486[var_682][var_225][3] = var_486[var_682][var_225][3] - 1;
        if (var_486[var_682][var_225][11] == 1) {
            var_106 = 1;
            count_buying_price = count_buying_price + 50;
        }
        if (var_486[var_682][var_225][0] >= 400 && var_486[var_682][var_225][0] < 500 && var_486[var_682][var_225][3] <= 0) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            belongings_item_list = var_486[var_682][var_225][0];
            yield func492(); // アイテムリスト呼び出し
            var_299 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            comments_row1 = "" + item_name + "は";
            comments_row2 = "ｽﾀﾝﾄﾞﾊﾟﾜｰが尽きて消滅した";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();

            if (var_486[var_682][var_225][11] == 1) {
                var_106 = 1;
                count_buying_price = count_buying_price + buying_price;
            }
            yield func433(); // アイテム配列(所持アイテム)初期化関数
        }
        return;
    });
}
function func424(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(424);
        var_1886 = 0;
        var_1954 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_1954].Var0 >= 600 && var_233[var_1954].Var0 < 650) {
                var_1886 = var_1954;
                break;
            }
            var_1954++;
        }
        if (var_1886 == 0) {
            return;
        }
        var_455 = var_66;
        var_456 = var_67;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
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
                var_1886 = 0;
                break;
            }
            if (var_71[var_455][var_456] == 0) {
                var_1886 = 0;
                break;
            }
            if (var_82[var_455][var_456] != 0) {
                var_1955 = var_82[var_455][var_456];
                if (var_83[var_1955].Var0 != 50) {
                    break;
                }
            }
        }
        return;
    });
}
function func425(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(425);
        var_225 = var_1886;
        belongings_item_list = var_233[var_225].Var0;
        yield func492(); // アイテムリスト呼び出し
        var_1253 = belongings_item_list;
        var_1254 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "こいつに" + item_name + "を";
        comments_row2 = "喰わせてやりたいんですが";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "かまいませんねッ！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func050();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        var_1254 = 0;
        var_234 = 0;
        var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        var_251 = 0;
        yield func410(); // 装備したdiscを取り外す際の動作
        return;
    });
}
function func426(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(426);
        var_1956 = 1;
        var_553 = 0;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_476[var_1956] == 1) {
                var_553 = var_1956;
            }
            var_1956 = var_1956 + 1;
        }
        return;
    });
}

function func427(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(427);
        var_1956 = 1;
        var_554 = 0;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_477[var_1956] == 1) {
                var_554 = var_1956;
            }
            var_1956 = var_1956 + 1;
        }
        return;
    });
}

function func428(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(428);
        var_1956 = 1;
        var_555 = 0;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_478[var_1956] == 1) {
                var_555 = var_1956;
            }
            var_1956 = var_1956 + 1;
        }
        return;
    });
}
function func429(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(429);
        var_1956 = 1;
        var_556 = 0;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_479[var_1956] == 1) {
                var_556 = var_1956;
            }
            var_1956 = var_1956 + 1;
        }
        return;
    });
}

// 配列宣言処理
function func430(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(430);
        if (var_476[var_225] == 1) {
            var_476 = dim(40);
            var_580 = var_580 - var_894;
            var_894 = 0;
            var_357 = 0;
            yield func431(); // BGM選曲関数呼び出し
            yield func494();
        }
        if (var_477[var_225] == 1) {
            var_477 = dim(40);
            var_581 = var_581 - var_895;
            var_895 = 0;
            var_358 = 0;
            yield func431(); // BGM選曲関数呼び出し
            yield func494();
        }
        if (var_479[var_225] == 1) {
            var_479 = dim(40);
            var_250 = 0;
            var_410 = 0;
            yield func431(); // BGM選曲関数呼び出し
            yield func494();
        }
        if (var_478[var_225] == 1) {
            var_478 = dim(40);
            var_215 = 0;
            yield func431(); // BGM選曲関数呼び出し
            yield func494();
        }
        return;
    });
}
// BGM選曲関数呼び出し
function func431(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(431);
        yield func106(); // BGM選曲呼び出し割り振り
        return;
    });
}


// 装備disc、射撃discの合成数や修正値、数などの為の配列か?
// 装備、射撃disc以外は初期化処理へ
function func432(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(432);
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            if (belongings_item_list >= 100 && belongings_item_list < 400) {
                if (disc_class == 1 && var_476[var_225] == 1) {
                    var_476 = dim(40);
                    return;
                }
                if (disc_class == 2 && var_477[var_225] == 1) {
                    var_477 = dim(40);
                    return;
                }
                if (disc_class == 3 && var_478[var_225] == 1) {
                    var_478 = dim(40);
                    return;
                }
            }
            if (belongings_item_list >= 400 && belongings_item_list < 450 && var_479[var_225] == 1) {
                var_479 = dim(40);
                var_250 = 0;
                var_410 = 0;
                return;
            }
            if (belongings_item_list >= 100 && belongings_item_list < 400) {
                if (disc_class == 1) {
                    var_476 = dim(40);
                    var_476[var_225] = 1;
                    return;
                }
                if (disc_class == 2) {
                    var_477 = dim(40);
                    var_477[var_225] = 1;
                    return;
                }
                if (disc_class == 3) {
                    var_478 = dim(40);
                    var_478[var_225] = 1;
                    return;
                }
            }
            if (belongings_item_list >= 400 && belongings_item_list < 450) {
                var_479 = dim(40);
                var_479[var_225] = 1;
                var_250 = var_225;
                var_410 = belongings_item_list;
                return;
            }
        }
        yield func433(); // アイテム配列(所持アイテム)初期化関数
    });
}

// アイテム配列の "数" 増減？関数
function func433(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(433);
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            yield func434();
            return;
        }
        // var_1957はアイテムを一つでも持っているかどうか？
        var_1957 = 0;
        // var_1957が0の時は、配列を初期化する

        var_233[var_225].Var0 = 0;
        var_233[var_225].Var1 = 0;
        var_233[var_225].Var2 = 0;
        var_233[var_225].Var3 = 0;
        var_233[var_225].Var4 = 0;
        var_233[var_225].Var5 = 0;
        var_233[var_225].Var6 = 0;
        var_233[var_225].Var7 = 0;
        var_233[var_225].Var8 = 0;
        var_233[var_225].Var9 = 0;
        var_233[var_225].Var10 = 0;
        var_233[var_225].Var11 = 0;
        var_233[var_225].Var12 = 0;
        var_233[var_225].Var13 = 0;
        var_233[var_225].Var14 = 0;
        var_233[var_225].Var15 = 0;
        var_233[var_225].Var16 = 0;
        var_233[var_225].Var17 = 0;
        var_233[var_225].Var18 = 0;
        var_233[var_225].Var19 = 0;
        var_233[var_225].Var20 = 0;
        var_233[var_225].Var21 = 0;
        var_233[var_225].Var22 = 0;
        var_233[var_225].Var23 = 0;
        var_233[var_225].Var24 = 0;
        var_233[var_225].Var25 = 0;
        var_233[var_225].Var26 = 0;
        var_233[var_225].Var27 = 0;
        var_233[var_225].Var28 = 0;
        var_233[var_225].Var29 = 0;
        /*
        var_233[var_225].Var0.fill(0);
        var_233[var_225].Var1.fill(0);
        var_233[var_225].Var2.fill(0);
        var_233[var_225].Var3.fill(0);
        var_233[var_225].Var4.fill(0);
        var_233[var_225].Var5.fill(0);
        var_233[var_225].Var6.fill(0);
        var_233[var_225].Var7.fill(0);
        var_233[var_225].Var8.fill(0);
        var_233[var_225].Var9.fill(0);
        var_233[var_225].Var10.fill(0);
        var_233[var_225].Var11.fill(0);
        var_233[var_225].Var12.fill(0);
        var_233[var_225].Var13.fill(0);
        var_233[var_225].Var14.fill(0);
        var_233[var_225].Var15.fill(0);
        var_233[var_225].Var16.fill(0);
        var_233[var_225].Var17.fill(0);
        var_233[var_225].Var18.fill(0);
        var_233[var_225].Var19.fill(0);
        var_233[var_225].Var20.fill(0);
        var_233[var_225].Var21.fill(0);
        var_233[var_225].Var22.fill(0);
        var_233[var_225].Var23.fill(0);
        var_233[var_225].Var24.fill(0);
        var_233[var_225].Var25.fill(0);
        var_233[var_225].Var26.fill(0);
        var_233[var_225].Var27.fill(0);
        var_233[var_225].Var28.fill(0);
        var_233[var_225].Var29.fill(0);
*/
        var_447 = 1;
        var_449 = 2;

        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_233[var_447].Var0 == 0) {
                /*
                var_233[var_447].Var0 = var_233[var_449].Var0;
                var_233[var_447].Var1 = var_233[var_449].Var1;
                var_233[var_447].Var2 = var_233[var_449].Var2;
                var_233[var_447].Var3 = var_233[var_449].Var3;
                var_233[var_447].Var4 = var_233[var_449].Var4;
                var_233[var_447].Var5 = var_233[var_449].Var5;
                var_233[var_447].Var6 = var_233[var_449].Var6;
                var_233[var_447].Var7 = var_233[var_449].Var7;
                var_233[var_447].Var8 = var_233[var_449].Var8;
                var_233[var_447].Var9 = var_233[var_449].Var9;
                var_233[var_447].Var10 = var_233[var_449].Var10;
                var_233[var_447].Var11 = var_233[var_449].Var11;
                var_233[var_447].Var12 = var_233[var_449].Var12;
                var_233[var_447].Var13 = var_233[var_449].Var13;
                var_233[var_447].Var14 = var_233[var_449].Var14;
                var_233[var_447].Var15 = var_233[var_449].Var15;
                var_233[var_447].Var16 = var_233[var_449].Var16;
                var_233[var_447].Var17 = var_233[var_449].Var17;
                var_233[var_447].Var18 = var_233[var_449].Var18;
                var_233[var_447].Var19 = var_233[var_449].Var19;
                var_233[var_447].Var20 = var_233[var_449].Var20;
                var_233[var_447].Var21 = var_233[var_449].Var21;
                var_233[var_447].Var22 = var_233[var_449].Var22;
                var_233[var_447].Var23 = var_233[var_449].Var23;
                var_233[var_447].Var24 = var_233[var_449].Var24;
                var_233[var_447].Var25 = var_233[var_449].Var25;
                var_233[var_447].Var26 = var_233[var_449].Var26;
                var_233[var_447].Var27 = var_233[var_449].Var27;
                var_233[var_447].Var28 = var_233[var_449].Var28;
                var_233[var_447].Var29 = var_233[var_449].Var29;
                var_476[var_447] = var_476[var_449];
                var_477[var_447] = var_477[var_449];
                var_478[var_447] = var_478[var_449];
                var_479[var_447] = var_479[var_449];
                */
                var_233[var_447].Var0 = JSON.parse(JSON.stringify(var_233[var_449].Var0));
                var_233[var_447].Var1 = JSON.parse(JSON.stringify(var_233[var_449].Var1));
                var_233[var_447].Var2 = JSON.parse(JSON.stringify(var_233[var_449].Var2));
                var_233[var_447].Var3 = JSON.parse(JSON.stringify(var_233[var_449].Var3));
                var_233[var_447].Var4 = JSON.parse(JSON.stringify(var_233[var_449].Var4));
                var_233[var_447].Var5 = JSON.parse(JSON.stringify(var_233[var_449].Var5));
                var_233[var_447].Var6 = JSON.parse(JSON.stringify(var_233[var_449].Var6));
                var_233[var_447].Var7 = JSON.parse(JSON.stringify(var_233[var_449].Var7));
                var_233[var_447].Var8 = JSON.parse(JSON.stringify(var_233[var_449].Var8));
                var_233[var_447].Var9 = JSON.parse(JSON.stringify(var_233[var_449].Var9));
                var_233[var_447].Var10 = JSON.parse(JSON.stringify(var_233[var_449].Var10));
                var_233[var_447].Var11 = JSON.parse(JSON.stringify(var_233[var_449].Var11));
                var_233[var_447].Var12 = JSON.parse(JSON.stringify(var_233[var_449].Var12));
                var_233[var_447].Var13 = JSON.parse(JSON.stringify(var_233[var_449].Var13));
                var_233[var_447].Var14 = JSON.parse(JSON.stringify(var_233[var_449].Var14));
                var_233[var_447].Var15 = JSON.parse(JSON.stringify(var_233[var_449].Var15));
                var_233[var_447].Var16 = JSON.parse(JSON.stringify(var_233[var_449].Var16));
                var_233[var_447].Var17 = JSON.parse(JSON.stringify(var_233[var_449].Var17));
                var_233[var_447].Var18 = JSON.parse(JSON.stringify(var_233[var_449].Var18));
                var_233[var_447].Var19 = JSON.parse(JSON.stringify(var_233[var_449].Var19));
                var_233[var_447].Var20 = JSON.parse(JSON.stringify(var_233[var_449].Var20));
                var_233[var_447].Var21 = JSON.parse(JSON.stringify(var_233[var_449].Var21));
                var_233[var_447].Var22 = JSON.parse(JSON.stringify(var_233[var_449].Var22));
                var_233[var_447].Var23 = JSON.parse(JSON.stringify(var_233[var_449].Var23));
                var_233[var_447].Var24 = JSON.parse(JSON.stringify(var_233[var_449].Var24));
                var_233[var_447].Var25 = JSON.parse(JSON.stringify(var_233[var_449].Var25));
                var_233[var_447].Var26 = JSON.parse(JSON.stringify(var_233[var_449].Var26));
                var_233[var_447].Var27 = JSON.parse(JSON.stringify(var_233[var_449].Var27));
                var_233[var_447].Var28 = JSON.parse(JSON.stringify(var_233[var_449].Var28));
                var_233[var_447].Var29 = JSON.parse(JSON.stringify(var_233[var_449].Var29));
                var_476[var_447] = JSON.parse(JSON.stringify(var_476[var_449]));
                var_477[var_447] = JSON.parse(JSON.stringify(var_477[var_449]));
                var_478[var_447] = JSON.parse(JSON.stringify(var_478[var_449]));
                var_479[var_447] = JSON.parse(JSON.stringify(var_479[var_449]));

                var_1957 = 1;
                var_224 = var_224 - 1; // アイテムの数を減らしている。唯一ここだけ

            }
            if (var_1957 == 1) {
                /*
                var_233[var_447].Var0 = var_233[var_449].Var0;
                var_233[var_447].Var1 = var_233[var_449].Var1;
                var_233[var_447].Var2 = var_233[var_449].Var2;
                var_233[var_447].Var3 = var_233[var_449].Var3;
                var_233[var_447].Var4 = var_233[var_449].Var4;
                var_233[var_447].Var5 = var_233[var_449].Var5;
                var_233[var_447].Var6 = var_233[var_449].Var6;
                var_233[var_447].Var7 = var_233[var_449].Var7;
                var_233[var_447].Var8 = var_233[var_449].Var8;
                var_233[var_447].Var9 = var_233[var_449].Var9;
                var_233[var_447].Var10 = var_233[var_449].Var10;
                var_233[var_447].Var11 = var_233[var_449].Var11;
                var_233[var_447].Var12 = var_233[var_449].Var12;
                var_233[var_447].Var13 = var_233[var_449].Var13;
                var_233[var_447].Var14 = var_233[var_449].Var14;
                var_233[var_447].Var15 = var_233[var_449].Var15;
                var_233[var_447].Var16 = var_233[var_449].Var16;
                var_233[var_447].Var17 = var_233[var_449].Var17;
                var_233[var_447].Var18 = var_233[var_449].Var18;
                var_233[var_447].Var19 = var_233[var_449].Var19;
                var_233[var_447].Var20 = var_233[var_449].Var20;
                var_233[var_447].Var21 = var_233[var_449].Var21;
                var_233[var_447].Var22 = var_233[var_449].Var22;
                var_233[var_447].Var23 = var_233[var_449].Var23;
                var_233[var_447].Var24 = var_233[var_449].Var24;
                var_233[var_447].Var25 = var_233[var_449].Var25;
                var_233[var_447].Var26 = var_233[var_449].Var26;
                var_233[var_447].Var27 = var_233[var_449].Var27;
                var_233[var_447].Var28 = var_233[var_449].Var28;
                var_233[var_447].Var29 = var_233[var_449].Var29;
                var_476[var_447] = var_476[var_449];
                var_477[var_447] = var_477[var_449];
                var_478[var_447] = var_478[var_449];
                var_479[var_447] = var_479[var_449];
                */
                var_233[var_447].Var0 = JSON.parse(JSON.stringify(var_233[var_449].Var0));
                var_233[var_447].Var1 = JSON.parse(JSON.stringify(var_233[var_449].Var1));
                var_233[var_447].Var2 = JSON.parse(JSON.stringify(var_233[var_449].Var2));
                var_233[var_447].Var3 = JSON.parse(JSON.stringify(var_233[var_449].Var3));
                var_233[var_447].Var4 = JSON.parse(JSON.stringify(var_233[var_449].Var4));
                var_233[var_447].Var5 = JSON.parse(JSON.stringify(var_233[var_449].Var5));
                var_233[var_447].Var6 = JSON.parse(JSON.stringify(var_233[var_449].Var6));
                var_233[var_447].Var7 = JSON.parse(JSON.stringify(var_233[var_449].Var7));
                var_233[var_447].Var8 = JSON.parse(JSON.stringify(var_233[var_449].Var8));
                var_233[var_447].Var9 = JSON.parse(JSON.stringify(var_233[var_449].Var9));
                var_233[var_447].Var10 = JSON.parse(JSON.stringify(var_233[var_449].Var10));
                var_233[var_447].Var11 = JSON.parse(JSON.stringify(var_233[var_449].Var11));
                var_233[var_447].Var12 = JSON.parse(JSON.stringify(var_233[var_449].Var12));
                var_233[var_447].Var13 = JSON.parse(JSON.stringify(var_233[var_449].Var13));
                var_233[var_447].Var14 = JSON.parse(JSON.stringify(var_233[var_449].Var14));
                var_233[var_447].Var15 = JSON.parse(JSON.stringify(var_233[var_449].Var15));
                var_233[var_447].Var16 = JSON.parse(JSON.stringify(var_233[var_449].Var16));
                var_233[var_447].Var17 = JSON.parse(JSON.stringify(var_233[var_449].Var17));
                var_233[var_447].Var18 = JSON.parse(JSON.stringify(var_233[var_449].Var18));
                var_233[var_447].Var19 = JSON.parse(JSON.stringify(var_233[var_449].Var19));
                var_233[var_447].Var20 = JSON.parse(JSON.stringify(var_233[var_449].Var20));
                var_233[var_447].Var21 = JSON.parse(JSON.stringify(var_233[var_449].Var21));
                var_233[var_447].Var22 = JSON.parse(JSON.stringify(var_233[var_449].Var22));
                var_233[var_447].Var23 = JSON.parse(JSON.stringify(var_233[var_449].Var23));
                var_233[var_447].Var24 = JSON.parse(JSON.stringify(var_233[var_449].Var24));
                var_233[var_447].Var25 = JSON.parse(JSON.stringify(var_233[var_449].Var25));
                var_233[var_447].Var26 = JSON.parse(JSON.stringify(var_233[var_449].Var26));
                var_233[var_447].Var27 = JSON.parse(JSON.stringify(var_233[var_449].Var27));
                var_233[var_447].Var28 = JSON.parse(JSON.stringify(var_233[var_449].Var28));
                var_233[var_447].Var29 = JSON.parse(JSON.stringify(var_233[var_449].Var29));
                var_476[var_447] = JSON.parse(JSON.stringify(var_476[var_449]));
                var_477[var_447] = JSON.parse(JSON.stringify(var_477[var_449]));
                var_478[var_447] = JSON.parse(JSON.stringify(var_478[var_449]));
                var_479[var_447] = JSON.parse(JSON.stringify(var_479[var_449]));

            }
            var_447 = var_447 + 1;
            var_449 = var_449 + 1;
        }
        var_1956 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_479[var_1956] == 1) {
                var_250 = var_1956;
            }
            var_1956 = var_1956 + 1;
        }
        return;
    });
}
// アイテムリストを開いている時の配列初期化
function func434(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(434);
        var_1957 = 0;

        var_486[var_682][var_225][0] = 0;
        var_486[var_682][var_225][1] = 0;
        var_486[var_682][var_225][2] = 0;
        var_486[var_682][var_225][3] = 0;
        var_486[var_682][var_225][4] = 0;
        var_486[var_682][var_225][5] = 0;
        var_486[var_682][var_225][6] = 0;
        var_486[var_682][var_225][7] = 0;
        var_486[var_682][var_225][8] = 0;
        var_486[var_682][var_225][9] = 0;
        var_486[var_682][var_225][10] = 0;
        var_486[var_682][var_225][11] = 0;
        var_486[var_682][var_225][12] = 0;
        var_486[var_682][var_225][13] = 0;
        var_486[var_682][var_225][14] = 0;
        var_486[var_682][var_225][15] = 0;
        var_486[var_682][var_225][16] = 0;
        var_486[var_682][var_225][17] = 0;
        var_486[var_682][var_225][18] = 0;
        var_486[var_682][var_225][19] = 0;
        var_486[var_682][var_225][20] = 0;
        var_486[var_682][var_225][21] = 0;
        var_486[var_682][var_225][22] = 0;
        var_486[var_682][var_225][23] = 0;
        var_486[var_682][var_225][24] = 0;
        var_486[var_682][var_225][25] = 0;
        var_486[var_682][var_225][26] = 0;
        var_486[var_682][var_225][27] = 0;
        var_486[var_682][var_225][28] = 0;
        var_486[var_682][var_225][29] = 0;
/*
        var_486[var_682][var_225][0].fill(0);
        var_486[var_682][var_225][1].fill(0);
        var_486[var_682][var_225][2].fill(0);
        var_486[var_682][var_225][3].fill(0);
        var_486[var_682][var_225][4].fill(0);
        var_486[var_682][var_225][5].fill(0);
        var_486[var_682][var_225][6].fill(0);
        var_486[var_682][var_225][7].fill(0);
        var_486[var_682][var_225][8].fill(0);
        var_486[var_682][var_225][9].fill(0);
        var_486[var_682][var_225][10].fill(0);
        var_486[var_682][var_225][11].fill(0);
        var_486[var_682][var_225][12].fill(0);
        var_486[var_682][var_225][13].fill(0);
        var_486[var_682][var_225][14].fill(0);
        var_486[var_682][var_225][15].fill(0);
        var_486[var_682][var_225][16].fill(0);
        var_486[var_682][var_225][17].fill(0);
        var_486[var_682][var_225][18].fill(0);
        var_486[var_682][var_225][19].fill(0);
        var_486[var_682][var_225][20].fill(0);
        var_486[var_682][var_225][21].fill(0);
        var_486[var_682][var_225][22].fill(0);
        var_486[var_682][var_225][23].fill(0);
        var_486[var_682][var_225][24].fill(0);
        var_486[var_682][var_225][25].fill(0);
        var_486[var_682][var_225][26].fill(0);
        var_486[var_682][var_225][27].fill(0);
        var_486[var_682][var_225][28].fill(0);
        var_486[var_682][var_225][29].fill(0);
*/
        var_1958 = 1;
        var_1959 = 2;

        for (let cnt1 = 0; cnt1 < var_233[var_1876].Var8; ++cnt1) {
            if (var_486[var_682][var_1958][0] == 0) {
                /*
                var_486[var_682][var_1958][0] = var_486[var_682][var_1959][0];
                var_486[var_682][var_1958][1] = var_486[var_682][var_1959][1];
                var_486[var_682][var_1958][2] = var_486[var_682][var_1959][2];
                var_486[var_682][var_1958][3] = var_486[var_682][var_1959][3];
                var_486[var_682][var_1958][4] = var_486[var_682][var_1959][4];
                var_486[var_682][var_1958][5] = var_486[var_682][var_1959][5];
                var_486[var_682][var_1958][6] = var_486[var_682][var_1959][6];
                var_486[var_682][var_1958][7] = var_486[var_682][var_1959][7];
                var_486[var_682][var_1958][8] = var_486[var_682][var_1959][8];
                var_486[var_682][var_1958][9] = var_486[var_682][var_1959][9];
                var_486[var_682][var_1958][10] = var_486[var_682][var_1959][10];
                var_486[var_682][var_1958][11] = var_486[var_682][var_1959][11];
                var_486[var_682][var_1958][12] = var_486[var_682][var_1959][12];
                var_486[var_682][var_1958][13] = var_486[var_682][var_1959][13];
                var_486[var_682][var_1958][14] = var_486[var_682][var_1959][14];
                var_486[var_682][var_1958][15] = var_486[var_682][var_1959][15];
                var_486[var_682][var_1958][16] = var_486[var_682][var_1959][16];
                var_486[var_682][var_1958][17] = var_486[var_682][var_1959][17];
                var_486[var_682][var_1958][18] = var_486[var_682][var_1959][18];
                var_486[var_682][var_1958][19] = var_486[var_682][var_1959][19];
                var_486[var_682][var_1958][20] = var_486[var_682][var_1959][20];
                var_486[var_682][var_1958][21] = var_486[var_682][var_1959][21];
                var_486[var_682][var_1958][22] = var_486[var_682][var_1959][22];
                var_486[var_682][var_1958][23] = var_486[var_682][var_1959][23];
                var_486[var_682][var_1958][24] = var_486[var_682][var_1959][24];
                var_486[var_682][var_1958][25] = var_486[var_682][var_1959][25];
                var_486[var_682][var_1958][26] = var_486[var_682][var_1959][26];
                var_486[var_682][var_1958][27] = var_486[var_682][var_1959][27];
                var_486[var_682][var_1958][28] = var_486[var_682][var_1959][28];
                var_486[var_682][var_1958][29] = var_486[var_682][var_1959][29];
                */
                var_486[var_682][var_1958][0] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][0]));
                var_486[var_682][var_1958][1] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][1]));
                var_486[var_682][var_1958][2] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][2]));
                var_486[var_682][var_1958][3] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][3]));
                var_486[var_682][var_1958][4] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][4]));
                var_486[var_682][var_1958][5] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][5]));
                var_486[var_682][var_1958][6] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][6]));
                var_486[var_682][var_1958][7] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][7]));
                var_486[var_682][var_1958][8] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][8]));
                var_486[var_682][var_1958][9] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][9]));
                var_486[var_682][var_1958][10] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][10]));
                var_486[var_682][var_1958][11] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][11]));
                var_486[var_682][var_1958][12] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][12]));
                var_486[var_682][var_1958][13] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][13]));
                var_486[var_682][var_1958][14] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][14]));
                var_486[var_682][var_1958][15] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][15]));
                var_486[var_682][var_1958][16] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][16]));
                var_486[var_682][var_1958][17] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][17]));
                var_486[var_682][var_1958][18] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][18]));
                var_486[var_682][var_1958][19] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][19]));
                var_486[var_682][var_1958][20] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][20]));
                var_486[var_682][var_1958][21] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][21]));
                var_486[var_682][var_1958][22] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][22]));
                var_486[var_682][var_1958][23] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][23]));
                var_486[var_682][var_1958][24] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][24]));
                var_486[var_682][var_1958][25] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][25]));
                var_486[var_682][var_1958][26] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][26]));
                var_486[var_682][var_1958][27] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][27]));
                var_486[var_682][var_1958][28] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][28]));
                var_486[var_682][var_1958][29] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][29]));

                var_1957 = 1;
                //var_224 = var_224 - 1; // Ver 0.1309 追加
            }
            if (var_1957 == 1) {
                /*
                var_486[var_682][var_1958][0] = var_486[var_682][var_1959][0];
                var_486[var_682][var_1958][1] = var_486[var_682][var_1959][1];
                var_486[var_682][var_1958][2] = var_486[var_682][var_1959][2];
                var_486[var_682][var_1958][3] = var_486[var_682][var_1959][3];
                var_486[var_682][var_1958][4] = var_486[var_682][var_1959][4];
                var_486[var_682][var_1958][5] = var_486[var_682][var_1959][5];
                var_486[var_682][var_1958][6] = var_486[var_682][var_1959][6];
                var_486[var_682][var_1958][7] = var_486[var_682][var_1959][7];
                var_486[var_682][var_1958][8] = var_486[var_682][var_1959][8];
                var_486[var_682][var_1958][9] = var_486[var_682][var_1959][9];
                var_486[var_682][var_1958][10] = var_486[var_682][var_1959][10];
                var_486[var_682][var_1958][11] = var_486[var_682][var_1959][11];
                var_486[var_682][var_1958][12] = var_486[var_682][var_1959][12];
                var_486[var_682][var_1958][13] = var_486[var_682][var_1959][13];
                var_486[var_682][var_1958][14] = var_486[var_682][var_1959][14];
                var_486[var_682][var_1958][15] = var_486[var_682][var_1959][15];
                var_486[var_682][var_1958][16] = var_486[var_682][var_1959][16];
                var_486[var_682][var_1958][17] = var_486[var_682][var_1959][17];
                var_486[var_682][var_1958][18] = var_486[var_682][var_1959][18];
                var_486[var_682][var_1958][19] = var_486[var_682][var_1959][19];
                var_486[var_682][var_1958][20] = var_486[var_682][var_1959][20];
                var_486[var_682][var_1958][21] = var_486[var_682][var_1959][21];
                var_486[var_682][var_1958][22] = var_486[var_682][var_1959][22];
                var_486[var_682][var_1958][23] = var_486[var_682][var_1959][23];
                var_486[var_682][var_1958][24] = var_486[var_682][var_1959][24];
                var_486[var_682][var_1958][25] = var_486[var_682][var_1959][25];
                var_486[var_682][var_1958][26] = var_486[var_682][var_1959][26];
                var_486[var_682][var_1958][27] = var_486[var_682][var_1959][27];
                var_486[var_682][var_1958][28] = var_486[var_682][var_1959][28];
                var_486[var_682][var_1958][29] = var_486[var_682][var_1959][29];
                */
                var_486[var_682][var_1958][0] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][0]));
                var_486[var_682][var_1958][1] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][1]));
                var_486[var_682][var_1958][2] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][2]));
                var_486[var_682][var_1958][3] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][3]));
                var_486[var_682][var_1958][4] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][4]));
                var_486[var_682][var_1958][5] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][5]));
                var_486[var_682][var_1958][6] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][6]));
                var_486[var_682][var_1958][7] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][7]));
                var_486[var_682][var_1958][8] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][8]));
                var_486[var_682][var_1958][9] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][9]));
                var_486[var_682][var_1958][10] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][10]));
                var_486[var_682][var_1958][11] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][11]));
                var_486[var_682][var_1958][12] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][12]));
                var_486[var_682][var_1958][13] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][13]));
                var_486[var_682][var_1958][14] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][14]));
                var_486[var_682][var_1958][15] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][15]));
                var_486[var_682][var_1958][16] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][16]));
                var_486[var_682][var_1958][17] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][17]));
                var_486[var_682][var_1958][18] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][18]));
                var_486[var_682][var_1958][19] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][19]));
                var_486[var_682][var_1958][20] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][20]));
                var_486[var_682][var_1958][21] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][21]));
                var_486[var_682][var_1958][22] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][22]));
                var_486[var_682][var_1958][23] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][23]));
                var_486[var_682][var_1958][24] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][24]));
                var_486[var_682][var_1958][25] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][25]));
                var_486[var_682][var_1958][26] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][26]));
                var_486[var_682][var_1958][27] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][27]));
                var_486[var_682][var_1958][28] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][28]));
                var_486[var_682][var_1958][29] = JSON.parse(JSON.stringify(var_486[var_682][var_1959][29]));                            
            }

            // belongings_item_list = var_486[var_682][var_1959][0];
            // belongings_item_list = 0

            var_1958 = var_1958 + 1;
            var_1959 = var_1959 + 1;
        }
        var_233[var_1876].Var7 = var_233[var_1876].Var7 + 1;
        var_233[var_1876].Var8 = var_233[var_1876].Var8 - 1;
        if (var_1876 == 0) { // var_1876 = var225と同じ
            yield func475();
        }
        return;
    });
}
// お金を拾った時の動作処理
function func435(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(435);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + var_78[var_321].Var13 + " Gを拾った";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        wallet = wallet + var_78[var_321].Var13;
        if (wallet > 999999) {
            wallet = 999999;
        }
        var_77[var_66][var_67] = 0;
        var_78[var_321].Var0 = 0;
        var_78[var_321].Var1 = 0;
        var_78[var_321].Var2 = 0;
        var_78[var_321].Var3 = 0;
        var_78[var_321].Var4 = 0;
        var_78[var_321].Var5 = 0;
        var_78[var_321].Var6 = 0;
        var_78[var_321].Var13 = 0;
        var_78[var_321].Var14 = 0;
        var_78[var_321].Var15 = 0;
        var_78[var_321].Var16 = 0;
        return;
    });
}
function func436(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(436);
        var_1960 = rnd(200);
        var_1960 = var_1960 + 100;
        var_1961 = rnd(10);
        var_1962 = rnd(10);
        var_1963 = rnd(10);
        var_1783 = var_1961 * current_floor + var_1962 * 10 + var_1963 + var_1960;
        if (var_1783 >= 1000) {
            var_1964 = rnd(100);
            var_1783 = 1000 - var_1964;
        }
        if (sympathy_id == 119 || sympathy_id == 123) {
            var_1783 = Math.floor(var_1783 * 3 / 2);
        }
        if (equip_disc[356] == 1) {
            var_1783 = Math.floor(var_1783 / 2);
        }
        return;
    });
}
function func437(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(437);
        if (var_234 == 1) {
            if (var_233[0].Var11 == 1) {
                belongings_item_list = var_233[0].Var0;
                yield func492(); // アイテムリスト呼び出し
                var_106 = 1;
                count_buying_price = count_buying_price + buying_price;
            }
            yield func479();
        }
        if (var_1965 == 1) {
            var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            var_225 = var_1932;
            if (var_486[var_682][var_225][11] == 1) {
                belongings_item_list = var_486[var_682][var_225][0];
                yield func492(); // アイテムリスト呼び出し
                var_106 = 1;
                count_buying_price = count_buying_price + buying_price;
            }
            yield func433(); // アイテム配列(所持アイテム)初期化関数
        }
        if (var_234 == 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            var_225 = var_1932;
            if (var_1966 > var_225) {
                var_1966 = var_1966 - 1;
            }
            if (var_233[var_225].Var11 == 1) {
                belongings_item_list = var_233[var_225].Var0;
                yield func492(); // アイテムリスト呼び出し
                var_106 = 1;
                count_buying_price = count_buying_price + buying_price;
            }
            yield func433(); // アイテム配列(所持アイテム)初期化関数
        }
        var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        var_1965 = 0;
        var_234 = 0;
        return;
    });
}

function func438(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(438);
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            var_1965 = 1;
        }
        item_page_number = 1;
        Y_axis_item_position = 45;
        var_225 = 1;
        var_223 = var_224 + 10;
        var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    });
}

// アヴドゥルのdisc効果
function func439(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(439);
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        if (var_225 == var_1967 && var_1965 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "それは今使っているDISCです。";
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
        var_1945 = 0;
        belongings_item_list = var_233[var_225].Var0;
        disc_rarity = var_233[var_225].Var13;
        var_862[belongings_item_list][0] = 1;
        var_233[var_225].Var14 = 1;
        if (var_225 == 0) {
            var_1968 = var_77[var_66][var_67];
            var_78[var_1968].Var14 = 1;
        }
        yield func492(); // アイテムリスト呼び出し
        var_1969 = item_name;
        var_1966 = var_225;
        yield func437();
        if (var_862[567][0] == 0 && var_375 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "なんと" + var_1938 + "は";
            var_862[567][0] = 1;
            yield func492(); // アイテムリスト呼び出し
            comments_row2 = "ｱｳﾞﾄﾞｩﾙのDISCだった！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        var_1970 = rnd(30);
        if (var_1970 == 0) {
            yield func440(); // アヴドゥルのdisc効果(全て識別できた場合(ランダム))
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
        comments_row1 = "フーム…　このアイテムは、";
        comments_row2 = "" + var_1969 + "のようだ";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        if (var_233[var_1966].Var0 >= 100 && var_233[var_1966].Var0 < 400 && var_233[var_1966].Var4 >= 1) {
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "しかも、このDISCは基本能力に加えて";
            comments_row2a = "＋" + var_233[var_1966].Var4 + "のｽﾀﾝﾄﾞﾊﾟﾜｰがついているぞ";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
        }
        // おそらく爆弾化されている？ var_233[var_1966].Var15 == 2
        if (var_233[var_1966].Var15 == 2) {
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "しかし…";
            comments_row2a = "なんとなく危険な感じがするな…";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
        }
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// アヴドゥルのdisc効果(全て識別できた場合(ランダム))
function func440(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(440);
        var_1945 = 0;
        var_1966 = 0;
        var_1971 = var_199;
        var_199 = 2;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「YES！ I am！」";
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
        comments_row1a = "持ち物すべてが識別された！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        var_1972 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            belongings_item_list = var_233[var_1972].Var0;
            var_862[belongings_item_list][0] = 1;
            var_233[var_1972].Var14 = 1;
            var_1972++;
        }
        if (var_77[var_66][var_67] != 0) {
            var_1968 = var_77[var_66][var_67];
            var_78[var_1968].Var14 = 1;
            belongings_item_list = var_78[var_1968].Var0;
            var_862[belongings_item_list][0] = 1;
        }
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = var_1971;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// ギアッチョのdisc効果
function func441(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(441);
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        if (var_225 == var_1967 && var_1965 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "それは今使っているDISCです。";
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
        var_1945 = 0;
        var_1966 = var_225;
        var_1354 = var_233[var_225].Var0;
        var_1249 = var_233[var_225].Var13;
        var_1973 = 0;
        var_1974 = 0;
        if (var_225 == 0) {
            var_1973 = 1;
        }
        if (var_1965 == 1) {
            var_1974 = 1;
        }
        var_225 = var_1967;
        yield func437();
        var_225 = var_1966;
        if (var_862[590][0] == 0 && var_375 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "なんと" + var_1938 + "は";
            var_862[590][0] = 1;
            yield func492(); // アイテムリスト呼び出し
            comments_row2 = "ｷﾞｱｯﾁｮのDISCだった！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        var_1940 = var_199;
        var_199 = 2;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_1073 = rnd(4);
        if (var_1073 == 0) {
            comments_row1 = "「どういう事だ！";
            comments_row2 = "　どういう事だよッ！　クソッ！」";
        }
        if (var_1073 == 1) {
            comments_row1 = "「なめてんのかァ――ッ　このオレをッ！";
            comments_row2 = "　クソッ！　クソッ！」";
        }
        if (var_1073 == 2) {
            comments_row1 = "「ナメやがって　この言葉ァ";
            comments_row2 = "　超イラつくぜぇ～～～ッ！！」";
        }
        if (var_1073 == 3) {
            comments_row1 = "「チクショオ――　ムカつくんだよ！";
            comments_row2 = "　コケにしやがって！ボケがッ！」";
        }
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        if (var_1973 == 1 && equip_disc[119] == 0) {
            var_77[var_66][var_67] = 0;
        }
        var_271 = 1;
        var_1353 = 1;
        var_1244 = 1;
        var_1975 = 1;
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            DSPLAY(audio_id = 103); // 殴られた時の効果音
            var_1353 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_1353 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1975++;
        }
        var_1975 = 0;
        var_1353 = 0;
        var_271 = 0;
        var_1244 = 0;
        if (equip_disc[119] == 1) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "やわらかくなっていて壊れなかった。";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_199 = var_1940;
            var_1973 = 0;
            var_1974 = 0;
            yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        var_488 = var_233[var_225].Var0;
        var_225 = var_1966;
        belongings_item_list = var_233[var_225].Var0;
        disc_rarity = var_233[var_225].Var13;
        yield func492(); // アイテムリスト呼び出し
        var_1976 = item_name;
        if (var_233[var_225].Var11 == 1) {
            var_106 = 1;
            var_482 = 0;
            var_482 = (var_233[var_225].Var3 + var_233[var_225].Var4) * 50;
            if (var_233[var_225].Var0 != 800) {
                var_482 = var_233[var_225].Var7 * 100 + var_482;
            }
            if (var_233[var_225].Var19 > 1) {
                var_482 = var_233[var_225].Var19 * 500 + var_482;
            }
            var_1925 = buying_price + var_482;
            count_buying_price = count_buying_price + var_1925;
        }
        if (var_1973 == 0) {
            if (var_233[var_225].Var0 >= 800 && var_233[var_225].Var0 < 900) {
                var_455 = var_66;
                var_456 = var_67;
                var_448 = var_66;
                var_450 = var_67;
                var_1903 = 1;
                yield func414(); // ヤバいもの関係の容量設定？？
                var_1903 = 0;
            }
            yield func426();
            yield func427();
            yield func428();
            if (var_225 == var_553) {
                var_896 = 0;
            }
            if (var_225 == var_554) {
                var_897 = 0;
            }
            if (var_225 == var_555) {
                var_898 = 0;
            }
            var_1977 = 0;
            if (var_476[var_225] == 1) {
                var_476[var_225] = 0;
                var_357 = 0;
                var_580 = var_580 - var_894;
                var_894 = 0;
                yield func494();
                var_1977 = 1;
            }
            if (var_477[var_225] == 1) {
                var_477[var_225] = 0;
                var_358 = 0;
                var_581 = var_581 - var_895;
                var_895 = 0;
                yield func494();
                var_1977 = 1;
            }
            if (var_479[var_225] == 1) {
                var_479[var_225] = 0;
                var_410 = 0;
                var_250 = 0;
                var_1977 = 1;
            }
            if (var_478[var_225] == 1) {
                var_478[var_225] = 0;
                var_215 = 0;
                yield func494();
                var_1977 = 1;
            }
            if (var_1977 == 1) {
                belongings_item_list = var_233[var_225].Var0;
                yield func106(); // BGM選曲呼び出し割り振り
            }
            yield func433(); // アイテム配列(所持アイテム)初期化関数
        }
        if (var_1973 == 1) {
            if (var_233[var_225].Var0 >= 800 && var_233[var_225].Var0 < 900) {
                var_455 = var_66;
                var_456 = var_67;
                var_448 = var_66;
                var_450 = var_67;
                var_1903 = 1;
                yield func414(); // ヤバいもの関係の容量設定？？
                var_1903 = 0;
            }
            var_1978 = var_77[var_66][var_67];
            var_78[var_1978].Var0 = 0;
            var_78[var_1978].Var1 = 0;
            var_78[var_1978].Var2 = 0;
            var_77[var_66][var_67] = 0;
        }
        yield func100();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "" + var_1976 + "は";
        comments_row2a = "粉々に壊れた。";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = var_1940;
        var_1973 = 0;
        var_1974 = 0;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// プッチ神父のdisc効果
function func442(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(442);
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        if (var_225 == var_1967 && var_1965 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "それは今使っているDISCです。";
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
        var_1945 = 0;
        belongings_item_list = var_233[var_225].Var0;
        disc_rarity = var_233[var_225].Var13;
        yield func492(); // アイテムリスト呼び出し
        var_1969 = item_name;
        var_1966 = var_225;
        yield func437();
        if (var_862[565][0] == 0 && var_375 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "なんと" + var_1938 + "は";
            var_862[565][0] = 1;
            yield func492(); // アイテムリスト呼び出し
            comments_row2 = "ﾌﾟｯﾁ神父のDISCだった！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
        }
        var_225 = var_1966;
        if (var_233[var_225].Var12 != 1) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(6);
            if (var_1073 == 0) {
                comments_row1 = "「呪われるべきは このわたしだッ！」";
                comments_row2 = "";
            }
            if (var_1073 == 1) {
                comments_row1 = "　　ドミネ・クオ・ヴァディス";
                comments_row2 = "「どこへ行かれるのですか？」";
            }
            if (var_1073 == 2) {
                comments_row1 = "「君の質問に付き合わなきゃあ";
                comments_row2 = "　いけないのか？」";
            }
            if (var_1073 == 3) {
                comments_row1 = "「ヒマつぶしなら他でやれ」";
                comments_row2 = "";
            }
            if (var_1073 == 4) {
                comments_row1 = "「落ちつくんだ…";
                comments_row2 = "　素数を数えて落ちつくんだ…」";
            }
            if (var_1073 == 5) {
                comments_row1 = "「聖なるものを犬にやるな」";
                comments_row2 = "";
            }
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "何も起こらなかった…";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
        }
        if (var_233[var_225].Var12 == 1) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「神の御命においてしりぞけるッ！」";
            comments_row2 = "";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            DSPLAY(audio_id = 192);
            var_271 = 1;
            var_1355 = 1;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            for (let cnt2 = 0; cnt2 < 13; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1355++;
                var_198 = 1;
                var_300 = 0;
            }
            var_271 = 0;
            var_1355 = 0;
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + var_1969 + "に";
            comments_row2a = "かけられていた呪いが解けた。";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            var_233[var_225].Var12 = 0;
            yield func426();
            yield func427();
            yield func428();
            if (var_225 == var_553) {
                var_896 = 0;
            }
            if (var_225 == var_554) {
                var_897 = 0;
            }
            if (var_225 == var_555) {
                var_898 = 0;
            }
            if (var_225 == 0) {
                var_1979 = var_77[var_66][var_67];
                var_78[var_1979].Var12 = 0;
            }
        }
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

function func443(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(443);
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func340(); // キー入力による選択処理
        yield func051();
        var_198 = 0;
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            var_1965 = 1;
        }
        item_page_number = 1;
        Y_axis_item_position = 45;
        var_225 = 1;
        var_223 = var_224 + 10;
        var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    });
}
// discに対してコミックを読んだ時の強化処理
function func444(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(444);
        if (var_233[var_225].Var0 >= 800 && var_233[var_225].Var0 < 900 && var_1950 != 20) {
            yield func445(); // ヤバいものに対してコミックを読んだ時の強化処理
            return;
        }
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        if (var_233[var_225].Var0 >= 800 && var_233[var_225].Var0 < 900 && var_1950 == 20) {
            var_1980 = 1;
        }
        if (var_233[var_225].Var0 >= 400 && var_233[var_225].Var0 < 500 && var_1950 == 20) {
            var_1980 = 1;
        }
        if (var_233[var_225].Var0 < 100 || var_233[var_225].Var0 >= 500) {
            var_1980 = 1;
        }
        var_1981 = var_233[var_225].Var0;
        if (var_233[var_225].Var0 >= 100 && var_233[var_225].Var0 < 400 && var_862[var_1981][0] == 0 && var_262 == 0) {
            var_1980 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "何のDISCかわからないので研究できない";
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
            open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            yield func051();
            yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (var_1980 == 1) {
            var_1980 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "それには使えません。";
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
            open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            yield func051();
            yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        belongings_item_list = var_233[var_225].Var0;
        yield func492(); // アイテムリスト呼び出し
        strengthen_item_name = item_name;
        var_1983 = 0;
        if (var_1950 == 3) {
            if (var_1984 == 3 || var_1984 == 7 || var_1984 == 9 || var_1984 == 10) {
                var_1983 = 1;
            }
        }
        if (var_1950 == 4) {
            if (var_1984 == 4 || var_1984 == 7 || var_1984 == 8 || var_1984 == 10) {
                var_1983 = 1;
            }
        }
        if (var_1950 == 5) {
            if (var_1984 == 5 || var_1984 == 8 || var_1984 == 9) {
                var_1983 = 1;
            }
        }
        if (var_1950 == 6) {
            if (var_1984 == 6 || var_1984 == 7) {
                var_1983 = 1;
            }
        }
        if (var_1950 == 10) {
            if (var_1984 == 3 || var_1984 == 4 || var_1984 == 5 || var_1984 == 7 || var_1984 == 8 || var_1984 == 9 || var_1984 == 10) {
                var_1983 = 1;
            }
        }
        if (var_1950 == 7) {
            var_1983 = 1;
        }
        DSPLAY(audio_id = 118);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + var_1937 + "を読んだ。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        if (var_1950 == 20) {
            yield func446();
            return;
        }
        if (var_1983 == 0) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + strengthen_item_name + "の研究は";
            comments_row2a = "この単行本ではできなかった…";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1950 = 0;
            yield func437();
            var_1252 = 0;
            var_217 = 1;
            yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        var_1985 = 0;
        belongings_item_list = var_233[var_225].Var0;
        yield func492(); // アイテムリスト呼び出し
        if (belongings_item_list >= 100 && belongings_item_list < 400 && var_233[var_225].Var4 >= 99) {
            var_1985 = 1;
        }
        if (belongings_item_list >= 400 && belongings_item_list < 500 && var_233[var_225].Var3 >= 99) {
            var_1985 = 1;
        }
        if (var_1985 == 1) {
            var_233[var_225].Var14 = 1;
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + strengthen_item_name + "は";
            comments_row2a = "スデに強さの限界のようだ";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            if (var_233[var_225].Var12 == 1) {
                yield func340(); // キー入力による選択処理
                var_233[var_225].Var12 = 0;
                yield func426();
                if (var_225 == var_553) {
                    var_896 = 0;
                }
                yield func427();
                if (var_225 == var_554) {
                    var_897 = 0;
                }
                yield func428();
                if (var_225 == var_555) {
                    var_898 = 0;
                }
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "DISCの呪いは解除された！";
                comments_row2a = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func050();
            }
            if (var_1950 == 7) {
                yield func340(); // キー入力による選択処理
                var_233[var_225].Var12 = 2;
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "" + strengthen_item_name + "は";
                comments_row2a = "漆黒のオーラに包まれた！";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func050();
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1950 = 0;
            yield func437();
            var_1252 = 0;
            var_217 = 1;
            yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        var_1253 = var_233[var_225].Var0;
        var_1252 = 2;
        DSPLAY(audio_id = 225);
        var_1299 = 2;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        belongings_item_list = var_233[var_225].Var0;
        yield func492(); // アイテムリスト呼び出し
        strengthen_item_name = item_name;
        var_1986 = 1;
        var_1987 = rnd(30);
        if (var_1987 == 0) {
            var_1986 = 3;
        }
        if (belongings_item_list >= 100 && belongings_item_list < 400 && var_233[var_225].Var4 >= 95) {
            var_1986 = 1;
        }
        if (belongings_item_list >= 400 && belongings_item_list < 500 && var_233[var_225].Var3 >= 80) {
            var_1986 = 1;
        }
        if (dangeon_number == 99) {
            var_1986 = 1;
        }
        if (belongings_item_list >= 100 && belongings_item_list < 400) {
            var_233[var_225].Var4 = var_233[var_225].Var4 + var_1986;
            var_233[var_225].Var14 = 1;
            if (var_476[var_225] == 1) {
                var_580 = var_580 + var_1986;
                var_894 = var_894 + var_1986;
            }
            if (var_477[var_225] == 1) {
                var_581 = var_581 + var_1986;
                var_895 = var_895 + var_1986;
            }
        }
        if (belongings_item_list >= 400 && belongings_item_list < 500) {
            var_233[var_225].Var3 = var_233[var_225].Var3 + var_1986 * 5;
            if (var_233[var_225].Var3 >= 99) {
                var_233[var_225].Var3 = 99;
            }
        }
        DSPLAY(audio_id = 112);　// 刀の切れる音 or 強化した時のシャキーン 効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        if (var_1986 == 1) {
            if (belongings_item_list >= 100 && belongings_item_list < 400) {
                comments_row1a = "" + strengthen_item_name + "が";
                comments_row2a = "強くなった！";
            }
            if (belongings_item_list >= 400 && belongings_item_list < 500) {
                comments_row1a = "" + strengthen_item_name + "の";
                comments_row2a = "エネルギーが増えた！";
            }
        }
        if (var_1986 == 3) {
            if (belongings_item_list >= 100 && belongings_item_list < 400) {
                comments_row1a = "" + strengthen_item_name + "が";
                comments_row2a = "ものすごく強くなった！";
            }
            if (belongings_item_list >= 400 && belongings_item_list < 500) {
                comments_row1a = "" + strengthen_item_name + "の";
                comments_row2a = "エネルギーがたくさん増えた！";
            }
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        if (var_233[var_225].Var12 == 1) {
            yield func340(); // キー入力による選択処理
            DSPLAY(audio_id = 192);
            var_233[var_225].Var12 = 0;
            yield func426();
            if (var_225 == var_553) {
                var_896 = 0;
            }
            yield func427();
            if (var_225 == var_554) {
                var_897 = 0;
            }
            yield func428();
            if (var_225 == var_555) {
                var_898 = 0;
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "DISCの呪いが解除された！";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
        }
        if (var_1950 == 7) {
            yield func340(); // キー入力による選択処理
            var_233[var_225].Var12 = 2;
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + strengthen_item_name + "は";
            comments_row2a = "漆黒のオーラに包まれた！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
        }
        yield func437();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1252 = 0;
        var_1950 = 0;
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

// ヤバいものに対してコミックを読んだ時の強化処理
function func445(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(445);
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        var_1981 = var_233[var_225].Var0;
        if (var_862[var_1981][0] == 0 && var_262 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "何かわからないので研究できない";
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
            open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            yield func051();
            yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        belongings_item_list = var_233[var_225].Var0;
        yield func492(); // アイテムリスト呼び出し
        strengthen_item_name = item_name;
        var_1983 = 0;
        if (var_1950 == 3) {
            if (var_1984 == 3 || var_1984 == 7 || var_1984 == 9 || var_1984 == 10) {
                var_1983 = 1;
            }
        }
        if (var_1950 == 4) {
            if (var_1984 == 4 || var_1984 == 7 || var_1984 == 8 || var_1984 == 10) {
                var_1983 = 1;
            }
        }
        if (var_1950 == 5) {
            if (var_1984 == 5 || var_1984 == 8 || var_1984 == 9) {
                var_1983 = 1;
            }
        }
        if (var_1950 == 6) {
            if (var_1984 == 6 || var_1984 == 7) {
                var_1983 = 1;
            }
        }
        if (var_1950 == 10) {
            if (var_1984 == 3 || var_1984 == 4 || var_1984 == 5 || var_1984 == 7 || var_1984 == 8 || var_1984 == 9 || var_1984 == 10 || var_1984 == 11) {
                var_1983 = 1;
            }
        }
        if (var_1950 == 7) {
            var_1983 = 1;
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + var_1937 + "を読んだ。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        if (var_1983 == 0) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + strengthen_item_name + "の研究は";
            comments_row2a = "この単行本ではできなかった…";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func437();
            var_1252 = 0;
            var_1950 = 0;
            var_217 = 1;
            yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        belongings_item_list = var_233[var_225].Var0;
        yield func492(); // アイテムリスト呼び出し
        strengthen_item_name = item_name;
        var_1988 = var_233[var_225].Var7 + var_233[var_225].Var8;
        if (var_1988 >= 10) {
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "" + strengthen_item_name + "の";
            comments_row2a = "容量は限界のようだ";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func437();
            var_1252 = 0;
            var_1950 = 0;
            var_217 = 1;
            yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        var_1253 = var_233[var_225].Var0;
        var_1252 = 2;
        DSPLAY(audio_id = 128);
        var_1299 = 2;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        var_233[var_225].Var7 = var_233[var_225].Var7 + 1;
        DSPLAY(audio_id = 112);　// 刀の切れる音 or 強化した時のシャキーン 効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "" + strengthen_item_name + "の";
        comments_row2a = "容量が増えた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        yield func437();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1252 = 0;
        var_1950 = 0;
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

function func446(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(446);
        var_1253 = var_233[var_225].Var0;
        var_1252 = 2;
        DSPLAY(audio_id = 225);
        var_1299 = 2;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        belongings_item_list = var_233[var_225].Var0;
        yield func492(); // アイテムリスト呼び出し
        strengthen_item_name = "" + item_name;
        var_1989 = 0;
        if (var_1989 == 0 && var_233[var_225].Var13 == 0) {
            var_1990 = rnd(3);
            var_1990++;
            var_233[var_225].Var13 = var_1990;
            var_1989 = 1;
        }
        if (var_1989 == 0 && var_233[var_225].Var13 == 1) {
            var_233[var_225].Var13 = 2;
            var_1989 = 1;
        }
        if (var_1989 == 0 && var_233[var_225].Var13 == 2) {
            var_233[var_225].Var13 = 3;
            var_1989 = 1;
        }
        if (var_1989 == 0 && var_233[var_225].Var13 == 3) {
            var_233[var_225].Var13 = 1;
            var_1989 = 1;
        }
        DSPLAY(audio_id = 112);　// 刀の切れる音 or 強化した時のシャキーン 効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "" + strengthen_item_name + "の";
        comments_row2a = "雰囲気がちょっと変わったようだ。";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        yield func437();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1252 = 0;
        var_1950 = 0;
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// 魔法のランプを使用した際の動作処理
function func447(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(447);
        var_1055 = 0;
        var_1584 = 160;
        var_1585 = 120;
        var_1587 = 130;
        var_1588 = 100;
        var_1589 = 190;
        var_1590 = 100;
        var_271 = 1;
        var_1582 = 1;
        var_1586 = 1;
        DSPLAY(audio_id = 168);
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1586++;
        }
        var_1586 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「願い事を ひとつ言え！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func051();
        var_1207 = 1;
        var_1991 = 1;
        var_245 = 19;
        var_246 = 45;
        yield func448();
    });
}

function func448(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(448);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (var_259 == 1) {
            if (var_1991 == 6) {
                var_246 = 45;
                var_1991 = 1;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_1991 != 6) {
                var_246 = var_246 + 18;
                var_1991++;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
        }
        if (var_255 == 1) {
            if (var_1991 == 1) {
                var_246 = 135;
                var_1991 = 6;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_1991 != 1) {
                var_246 = var_246 - 18;
                var_1991--;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
        }
        if (key_Z_on == 1 || key_A_on == 1) {
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func450(); // ジャッジメントの問に答え、ジャッジメントが去る時の動作処理
            return;
        }
        yield func448();
        return;
    });
}

// 魔法のランプでジャッジメントを召喚した時のメッセージ
function func449(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(449);
        color(0, 0, 0);
        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(12, 37);
        gcopy(12, 0, 0, 223, 123);
        color(255, 255, 255);
        line(15, 39, 230, 39);
        line(15, 156, 230, 156);
        line(14, 40, 14, 154);
        line(232, 40, 232, 154);
        pset(15, 40);
        pset(231, 40);
        pset(15, 155);
        pset(231, 155);
        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        color(255, 255, 255);
        pos(33, 47);
        mes("お金持ちになりたい");
        pos(33, 65);
        mes("満腹になりたい");
        pos(33, 83);
        mes("体力を回復させてくれ");
        pos(33, 99);
        mes("敵の動きを止めてくれ");
        pos(33, 117);
        mes("ｱﾌﾞﾄﾞｩﾙを生き返らせてくれ");
        pos(33, 135);
        mes("願いを増やしてくれ");
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
// ジャッジメントの問に答え、ジャッジメントが去る時の動作処理
function func450(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(450);
        if (var_1991 == 6) {
            yield func451(); // ジャッジメントの問いに対して、願いの数を増やしてくれと選択した時の動作処理
            return;
        }
        var_1207 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「Ｈａｉｌ　２　Ｕ ！」";
        comments_row2 = "　　（君に幸あれ！）";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_271 = 1;
        var_1582 = 0;
        var_1586 = 1;
        DSPLAY(audio_id = 168);
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1586++;
        }
        var_1586 = 0;
        var_271 = 0;
        if (var_1991 == 1) {
            yield func452(); // ジャッジメントの問いに対して、お金持ちになりたいと選択した時の動作処理
            return;
        }
        if (var_1991 == 2) {
            yield func453(); // ジャッジメントの問いに対して、満腹になりたいと選択した時の動作処理
            return;
        }
        if (var_1991 == 3) {
            yield func454(); // ジャッジメントの問いに対して、体力を回復させてくれと選択した時の動作処理
            return;
        }
        if (var_1991 == 4) {
            yield func455(); // ジャッジメントの問いに対して、敵の動きをとめてくれと選択した時の動作処理
            return;
        }
        if (var_1991 == 5) {
            yield func456(); // ジャッジメントの問いに対して、アヴドゥルを生き返らせてくれと選択した時の動作処理
            return;
        }
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// ジャッジメントの問いに対して、願いの数を増やしてくれと選択した時の動作処理
function func451(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(451);
        var_1207 = 0;
        yield func094();
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「きさま」";
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
        comments_row1a = "「そういう冗談は・・・！」";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        var_199 = 8;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            if (cnt1 == 3) {
                var_389 = 2;
                var_747 = 1;
                DSPLAY(audio_id = 105);
            }
            var_1582++;
        }
        var_389 = 0;
        if (var_211 == 1) {
            var_211 = 0;
            var_356 = 250;
        }
        if (var_211 >= 2) {
            var_211 = 1;
        }
        var_1582 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_271 = 1;
        var_1582 = 0;
        var_1586 = 1;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1586++;
        }
        var_1586 = 0;
        var_271 = 0;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// ジャッジメントの問いに対して、お金持ちになりたいと選択した時の動作処理
function func452(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(452);
        DSPLAY(audio_id = 166);
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ザグッ！　ザグッ！　ザグッ！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "このフロアにお金が出現した！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        var_1759 = 1;
        var_452 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func384();
        }
        var_1759 = 0;
        var_452 = 0;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// ジャッジメントの問いに対して、満腹になりたいと選択した時の動作処理
function func453(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(453);
        var_1299 = 9;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        var_360 = 0;
        var_350 = var_567;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "お腹が一杯になった！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// ジャッジメントの問いに対して、体力を回復させてくれと選択した時の動作処理
function func454(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(454);
        DSPLAY(audio_id = 143);
        var_1299 = 5;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        var_211 = var_352;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "体力が回復した！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func457(); // ジャッジメントの問いに対して、体力を回復させてくれと選択した時、体力回復後の状態異常回復の動作処理
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// ジャッジメントの問いに対して、敵の動きをとめてくれと選択した時の動作処理
function func455(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(455);
        var_1992 = 1;
        var_1993 = var_66 - 1;
        var_1994 = var_66 + 1;
        var_1995 = var_67 + 1;
        var_1996 = var_67 - 1;
        var_1997 = 0;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_1992].Var1 == var_66 && var_83[var_1992].Var2 == var_1995) {
                var_83[var_1992].Var12 = 0;
                var_83[var_1992].Var13 = 99;
                var_1997 = 1;
            }
            if (var_83[var_1992].Var1 == var_66 && var_83[var_1992].Var2 == var_1996) {
                var_83[var_1992].Var12 = 0;
                var_83[var_1992].Var13 = 99;
                var_1997 = 1;
            }
            if (var_83[var_1992].Var1 == var_1993 && var_83[var_1992].Var2 == var_67) {
                var_83[var_1992].Var12 = 0;
                var_83[var_1992].Var13 = 99;
                var_1997 = 1;
            }
            if (var_83[var_1992].Var1 == var_1994 && var_83[var_1992].Var2 == var_67) {
                var_83[var_1992].Var12 = 0;
                var_83[var_1992].Var13 = 99;
                var_1997 = 1;
            }
            if (var_83[var_1992].Var1 == var_1993 && var_83[var_1992].Var2 == var_1995) {
                var_83[var_1992].Var12 = 0;
                var_83[var_1992].Var13 = 99;
                var_1997 = 1;
            }
            if (var_83[var_1992].Var1 == var_1994 && var_83[var_1992].Var2 == var_1995) {
                var_83[var_1992].Var12 = 0;
                var_83[var_1992].Var13 = 99;
                var_1997 = 1;
            }
            if (var_83[var_1992].Var1 == var_1993 && var_83[var_1992].Var2 == var_1996) {
                var_83[var_1992].Var12 = 0;
                var_83[var_1992].Var13 = 99;
                var_1997 = 1;
            }
            if (var_83[var_1992].Var1 == var_1994 && var_83[var_1992].Var2 == var_1996) {
                var_83[var_1992].Var12 = 0;
                var_83[var_1992].Var13 = 99;
                var_1997 = 1;
            }
            var_1992 = var_1992 + 1;
        }
        if (var_1997 == 1) {
            DSPLAY(audio_id = 126);
        }
        var_114 = 0;
        var_463 = 0;
        var_464 = 0;
        var_461 = 0;
        var_462 = 0;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// ジャッジメントの問いに対して、アヴドゥルを生き返らせてくれと選択した時の動作処理
function func456(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(456);
        DSPLAY(audio_id = 166);
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ザグッ！　ザグッ！　ザグッ！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        var_1998 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func556();
        }
        var_1998 = 0;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// ジャッジメントの問いに対して、体力を回復させてくれと選択した時、体力回復後の状態異常回復の動作処理
function func457(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(457);
        if (var_565 != var_566 || var_133 != 0 || var_110 != 0 || var_109 != 0 || var_134 != 0 || var_126 != 0 || var_132 != 0 || var_127 != 0) {
            var_565 = var_566;
            var_133 = 0;
            var_110 = 0;
            var_109 = 0;
            var_134 = 0;
            var_126 = 0;
            var_132 = 0;
            var_127 = 0;
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "状態異常が治った！";
            comments_row2a = "";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
        }
        return;
    });
}

// 恐竜の化石に関するもの(一巡後の世界のみで効果があるようになっている)
function func458(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(458);
        var_69 = 0;
        var_480 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {            
            // No = 716 恐竜の化石
            // 一巡後の世界で持っているだけで必ず大部屋モンスターハウスが出現する。使用すると次の階が西戸ハウスになってしまう
            if (var_233[var_480].Var0 == 716) {
                var_69 = 1;
            }
            if (var_233[var_480].Var0 >= 800 && var_233[var_480].Var0 < 900) {
                var_484 = 1;
                var_485 = var_233[var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    // No = 716 恐竜の化石
                    // 一巡後の世界で持っているだけで必ず大部屋モンスターハウスが出現する。使用すると次の階が西戸ハウスになってしまう
                    if (var_486[var_485][var_484][0] == 716) {
                        var_69 = 1;
                    }
                    var_484 = var_484 + 1;
                }
            }
            var_480 = var_480 + 1;
        }
        return;
    });
}

// 道具画面(所持数0)の表示(メニュー画面/道具)
function func459(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(459);
        var_195 = 0;
        var_196 = 0;
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "道具をひとつも持っていないぞ";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1240 = 0;
        var_1999 = 0;
        var_2000 = 0;
        var_2001 = 0;
        var_1950 = 0;
        var_2002 = 0;
        var_2003 = 0;
        var_2004 = 0;
        var_2005 = 0;
        var_234 = 0;
        var_1252 = 0;
        var_2006 = 0;
        var_1208 = 0;
        var_2007 = 0;
        var_1667 = 0;
        var_2008 = 0;
        var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        var_1965 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}

// アイテムリスト上のアイテム表示　道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具)
function func460(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(460);
        // 
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            color(0, 0, 0);
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(5, 35);
            if (item_page_number != 3) {
                gcopy(12, 0, 0, 332, 235);
            }
            if (item_page_number == 3) {
                gcopy(12, 0, 0, 332, 45);
            }
            pos(5, 273);
            gcopy(12, 0, 0, 332, 62);
            color(255, 255, 255);
            line(9, 37, 330, 37);
            if (item_page_number != 3) {
                line(9, 267, 166, 267);
                line(190, 267, 330, 267);
                line(8, 38, 8, 265);
                line(332, 38, 332, 265);
            }
            if (item_page_number == 3) {
                line(9, 77, 156, 77);
                line(200, 77, 330, 77);
                line(8, 38, 8, 75);
                line(332, 38, 332, 75);
            }
            pset(9, 38);
            pset(331, 38);
            if (item_page_number != 3) {
                pset(9, 266);
            }
            if (item_page_number != 3) {
                pset(331, 266);
            }
            if (item_page_number == 3) {
                pset(9, 76);
            }
            if (item_page_number == 3) {
                pset(331, 76);
            }
        }

        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
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
        }
        line(9, 275, 330, 275);
        line(9, 332, 330, 332);
        line(8, 276, 8, 330);
        line(332, 276, 332, 330);
        pset(9, 276);
        pset(331, 276);
        pset(9, 331);
        pset(331, 331);
        gmode(mode = 2, data2 = null, data3 = null, alpha = null);

        if (item_page_number == 1) {
            var_1620 = 1;
        }
        if (item_page_number == 2) {
            var_1620 = 11;
        }
        if (item_page_number == 3) { // No = 3 は
            var_1620 = 0;
        }
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            var_1620 = 1;
        }
        var_230 = 45;
        let loopCount: any = 1;
        if (item_page_number != 3) {
            loopCount = 10;
        }
        for (let cnt1 = 0; cnt1 < loopCount; ++cnt1) {
            // 乳母車での見えなくなったアイテムの配列処理
            if (var_220 == 1 && var_233[var_1882].Var0 == 817 && var_119 == 0) {
                break;
            }
            if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                var_2009 = var_1620;
                var_2010 = var_233[var_1620].Var0;
                var_2011 = var_233[var_1620].Var3;
                var_2012 = var_233[var_1620].Var4;
                var_2013 = var_233[var_1620].Var5;
                var_1922 = var_233[var_1620].Var6;
                var_2014 = var_233[var_1620].Var7;
                var_2015 = var_233[var_1620].Var11;
                var_2016 = var_233[var_1620].Var12;
                var_2017 = var_233[var_1620].Var13;
                var_2018 = var_233[var_1620].Var14;
                var_2019 = var_233[var_1620].Var16;
                var_2020 = var_233[var_1620].Var19;
            }
            if (var_220 == 1) {
                var_2009 = var_1620;
                var_2010 = var_486[var_682][var_1620][0];
                var_2011 = var_486[var_682][var_1620][3];
                var_2012 = var_486[var_682][var_1620][4];
                var_2013 = var_486[var_682][var_1620][5];
                var_1922 = var_486[var_682][var_1620][6];
                var_2014 = var_486[var_682][var_1620][7];
                var_2015 = var_486[var_682][var_1620][11];
                var_2016 = var_486[var_682][var_1620][12];
                var_2017 = var_486[var_682][var_1620][13];
                var_2018 = var_486[var_682][var_1620][14];
                var_2019 = var_486[var_682][var_1620][16];
                var_2020 = var_486[var_682][var_1620][19];
            }
            belongings_item_list = var_2010;
            disc_rarity = var_2017;
            yield func492(); // アイテムリスト呼び出し          
            var_2021 = 0;
            // ヤバいもののなかでも "押す" 機能があるものだけ
            // var_220 はヤバいものの中を見た時に1になる
            if (var_220 == 1 && var_1620 <= var_233[var_1882].Var7 && var_233[var_1882].Var0 >= 850 && var_233[var_1882].Var0 < 860 && var_233[var_1882].Var0 != 851) {
        
                font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                color(255, 255, 255);
                pos(40, var_230);
                mes("何か");
            }
            // ヤバいもの No = 851「ホルマジオのビン」 
            if (var_220 == 1 && var_233[var_1882].Var0 == 851) {
        
                font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                color(255, 255, 255);
                pos(40, var_230);
                if (var_862[851][0] == 0) {
                    var_1916 = var_233[var_1882].Var6;
                    if (var_486[var_1916][var_1620][15] >= 1) {
                        mes("何か");
                    }
                }
                if (var_862[851][0] == 1) {
                    var_1916 = var_233[var_1882].Var6;
                    enemy_list = var_486[var_1916][var_1620][15];
                    yield func626();
                    var_2022 = "" + enemy_name;
                    if (var_486[var_1916][var_1620][18] >= 2) {
                        var_2022 = "" + var_2022 + " Lv" + var_486[var_1916][var_1620][18];
                    }
                    mes("" + var_2022);
                }
            }
            // ヤバいものNo = 851「ホルマジオのビン」ではない時
            if (var_220 != 1 || var_233[var_1882].Var0 != 851) {

                if (var_2010 > 0) {
                    font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                    color(255, 255, 255);
                    pos(40, var_230);
                    if (belongings_item_list == 1) {
                        color(255, 255, 255);
                        mes("" + var_2017 + "G");
                    }
                    // 装備disc
                    if (belongings_item_list >= 100 && belongings_item_list < 400) {
                        if (var_220 == 1) {
                            if (var_2018 == 0) {
                                color(0, 190, 0);
                                mes(item_name);
                            }
                            if (var_2018 == 1) {
                                color(0, 255, 0);
                                if (var_2012 == 0 && var_2020 <= 1) {
                                    mes("" + item_name);
                                }
                                if (var_2012 == 0 && var_2020 > 1) {
                                    mes("" + item_name + " ★" + var_2020);
                                }
                                if (var_2012 > 0 && var_2020 <= 1) {
                                    mes("" + item_name + "+" + var_2012);
                                }
                                if (var_2012 > 0 && var_2020 > 1) {
                                    mes("" + item_name + "+" + var_2012 + " ★" + var_2020);
                                }
                            }
                        }
                        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                            if (var_2018 == 0) {
                                color(0, 190, 0);
                                mes(item_name);
                            }
                            if (var_2018 == 1) {
                                if (var_476[var_1620] == 0 && var_477[var_1620] == 0 && var_478[var_1620] == 0) {
                                    color(0, 255, 0);
                                    if (var_2012 == 0 && var_2020 <= 1) {
                                        mes("" + item_name);
                                    }
                                    if (var_2012 == 0 && var_2020 > 1) {
                                        mes("" + item_name + " ★" + var_2020);
                                    }
                                    if (var_2012 > 0 && var_2020 <= 1) {
                                        mes("" + item_name + "+" + var_2012);
                                    }
                                    if (var_2012 > 0 && var_2020 > 1) {
                                        mes("" + item_name + "+" + var_2012 + " ★" + var_2020);
                                    }
                                }
                                if (var_476[var_1620] == 1) {
                                    color(255, 255, 0);
                                    pos(32, var_230);
                                    font("MS ゴシック", 8);
                                    mes("E");
                            
                                    font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                                    pos(40, var_230);
                                    if (var_2012 == 0 && var_2020 <= 1) {
                                        mes("" + item_name);
                                    }
                                    if (var_2012 == 0 && var_2020 > 1) {
                                        mes("" + item_name + " ★" + var_2020);
                                    }
                                    if (var_2012 > 0 && var_2020 <= 1) {
                                        mes("" + item_name + "+" + var_2012);
                                    }
                                    if (var_2012 > 0 && var_2020 > 1) {
                                        mes("" + item_name + "+" + var_2012 + " ★" + var_2020);
                                    }
                                }
                                if (var_477[var_1620] == 1) {
                                    color(255, 180, 90);
                                    pos(32, var_230);
                                    font("MS ゴシック", 8);
                                    mes("E");
                            
                                    font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                                    pos(40, var_230);
                                    if (var_2012 == 0 && var_2020 <= 1) {
                                        mes("" + item_name);
                                    }
                                    if (var_2012 == 0 && var_2020 > 1) {
                                        mes("" + item_name + " ★" + var_2020);
                                    }
                                    if (var_2012 > 0 && var_2020 <= 1) {
                                        mes("" + item_name + "+" + var_2012);
                                    }
                                    if (var_2012 > 0 && var_2020 > 1) {
                                        mes("" + item_name + "+" + var_2012 + " ★" + var_2020);
                                    }
                                }
                                if (var_478[var_1620] == 1) {
                                    color(240, 0, 240);
                                    pos(32, var_230);
                                    font("MS ゴシック", 8);
                                    mes("E");
                            
                                    font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                                    pos(40, var_230);
                                    if (var_2012 == 0 && var_2020 <= 1) {
                                        mes("" + item_name);
                                    }
                                    if (var_2012 == 0 && var_2020 > 1) {
                                        mes("" + item_name + " ★" + var_2020);
                                    }
                                    if (var_2012 > 0 && var_2020 <= 1) {
                                        mes("" + item_name + "+" + var_2012);
                                    }
                                    if (var_2012 > 0 && var_2020 > 1) {
                                        mes("" + item_name + "+" + var_2012 + " ★" + var_2020);
                                    }
                                }
                            }
                        }
                    }
                    // 射撃disc
                    if (belongings_item_list >= 400 && belongings_item_list < 500) {
                        if (var_479[var_1620] == 0 || var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                            color(225, 195, 145);
                            mes("" + item_name + "(" + var_2011 + ")");
                        }
                        if (var_479[var_1620] == 1 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                            color(225, 195, 145);
                            pos(32, var_230);
                            font("MS ゴシック", 8);
                            mes("E");
                    
                            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                            pos(40, var_230);
                            mes("" + item_name + "(" + var_2011 + ")");
                        }
                    }
                    // 記憶disc
                    if (belongings_item_list >= 500 && belongings_item_list < 600) {
                        color(255, 255, 255);
                        if (var_862[belongings_item_list][0] == 0 && dangeon_number != 0 && dangeon_number != 1 && dangeon_number != 99) {
                            color(200, 200, 200);
                        }
                        pos(40, var_230);
                        mes(item_name);
                    }
                    // 食糧、回復アイテム
                    if (belongings_item_list >= 600 && belongings_item_list < 700) {
                        color(255, 255, 255);
                        pos(40, var_230);
                        mes(item_name);
                    }
                    // その他の消費
                    if (belongings_item_list >= 700 && belongings_item_list < 750) {
                        color(255, 255, 255);
                        pos(40, var_230);
                        mes(item_name);
                    }
                    // ヤバいもの
                    if (belongings_item_list >= 800 && belongings_item_list < 900) {
                        color(0, 255, 255);
                        if (var_862[belongings_item_list][0] == 0 && dangeon_number != 0 && dangeon_number != 1 && dangeon_number != 99) {
                            color(0, 170, 170);
                        }
                        mes("" + item_name + "(" + var_2014 + ")");
                        if (belongings_item_list == 800 && var_862[800][0] == 1 && var_990[var_1922] == 1 && dangeon_number != 99) {
                            var_1923 = var_1922;
                            yield func490();
                            pos(155, var_230 + 3);
                            color(255, 255, 255);
                    
                            font("ＭＳ Ｐゴシック", 12, 1);
                            mes(var_1924);
                    
                            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
                        }
                    } 
                    // コミック スティールボールラン 7 ~ 15, 装備+99
                    if (belongings_item_list >= 750 && belongings_item_list < 800) {
                        color(255, 255, 255);
                        pos(40, var_230);
                        mes(item_name);
                    }
                    // コミック
                    if (belongings_item_list >= 900 && belongings_item_list < 1000) {
                        color(255, 255, 255);
                        pos(40, var_230);
                        mes(item_name);
                    }
                    if (var_2015 == 1) {
                        var_1925 = 0;
                        pos(275, var_230);
                        color(0, 255, 0);
                        var_482 = 0;
                        var_482 = (var_2011 + var_2012) * 50;
                        if (var_2010 != 800) {
                            var_482 = var_2014 * 100 + var_482;
                        }
                        if (var_2020 > 1) {
                            var_482 = var_2020 * 500 + var_482;
                        }
                        var_1925 = buying_price + var_482;
                        if (belongings_item_list >= 800 && belongings_item_list < 900) {
                            var_484 = 0;
                            var_485 = var_1922;
                            for (let cnt6 = 0; cnt6 < 10; ++cnt6) {
                                if (var_486[var_485][var_484][0] > 0 && var_486[var_485][var_484][11] == 1) {
                                    belongings_item_list = var_486[var_485][var_484][0];
                                    yield func492(); // アイテムリスト呼び出し
                                    var_482 = 0;
                                    var_482 = (var_486[var_485][var_484][3] + var_486[var_485][var_484][4]) * 50;
                                    if (var_486[var_485][var_484][19] > 1) {
                                        var_482 = var_486[var_485][var_484][19] * 500 + var_482;
                                    }
                                    var_1925 = var_1925 + buying_price + var_482;
                                }
                                var_484 = var_484 + 1;
                            }
                        }
                        mes(var_1925);
                    }
                    if (var_2016 == 1 && var_2018 == 1) {
                        pos(32, var_230 + 8);
                        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                        gcopy(8, 40, 50, 10, 10);
                    }
                    if (var_2016 == 2 && var_2018 == 1) {
                        pos(31, var_230 + 9);
                        gmode(mode = 2, data2 = null, data3 = null, alpha = null);
                        gcopy(8, 40, 80, 10, 10);
                    }
                }
            }
            var_1620 = var_1620 + 1;
            var_230 = var_230 + 22;
        }

        if (var_1880 == 0) {
            if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                var_2023 = var_233[var_225].Var0;
                var_2024 = var_233[var_225].Var5;
                var_2025 = var_233[var_225].Var12;
                var_2026 = var_233[var_225].Var13;
                var_2027 = var_233[var_225].Var14;
                var_2028 = var_233[var_225].Var15;
                var_2029 = var_233[var_225].Var16;
            }
            if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                var_2023 = var_486[var_682][var_225][0];
                var_2024 = var_486[var_682][var_225][5];
                var_2025 = var_486[var_682][var_225][12];
                var_2026 = var_486[var_682][var_225][13];
                var_2027 = var_486[var_682][var_225][14];
                var_2028 = var_486[var_682][var_225][15];
                var_2029 = var_486[var_682][var_225][16];
            }
            if (item_page_number != 3) {
                belongings_item_list = var_2023;
                disc_rarity = var_2026;
            }
            if (item_page_number == 3) {
                belongings_item_list = var_233[0].Var0;
                disc_rarity = var_233[0].Var13;
            }
            yield func492(); // アイテムリスト呼び出し
    
            font(font_type = "ＭＳ Ｐゴシック", font_size = 14, font_style = 1);
            if (belongings_item_list >= 100 && belongings_item_list < 400 && var_2025 == 1 && var_2027 == 1 && var_862[belongings_item_list][0] == 1) {
                pos(225, 283);
                color(255, 0, 0);
                mes("呪縛");
            }
            if (var_215 == 112 || var_215 == 204 || var_215 == 394 || var_215 == 395) {
                if (var_2028 == 2) {
                    pos(275, 283);
                    color(255, 0, 0);
                    mes("爆弾");
                }
            }
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
            mes(var_808);
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
        }

        if (var_1880 == 1) {
            pos(15, 283);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 14, font_style = 1);
            color(255, 255, 255);
            mes("");
            if (var_233[var_1882].Var0 < 850 || var_233[var_1882].Var0 >= 860) {
                mes("　　　　　　　　　何も入っていないぞ");
            }
            if (var_233[var_1882].Var0 >= 850 && var_233[var_1882].Var0 < 860 && var_233[var_1882].Var7 == 0 && var_233[var_1882].Var0 != 851) {
                mes("　　　　　　　　　何も入っていないぞ");
            }
            if (var_233[var_1882].Var0 >= 850 && var_233[var_1882].Var0 < 860 && var_233[var_1882].Var7 != 0 && var_233[var_1882].Var0 != 851) {
                mes("　　　　　　　　　　　何かが見える");
            }
            if (var_233[var_1882].Var0 == 851) {
                var_1916 = var_233[var_1882].Var6;
                if (var_486[var_1916][1][15] == 0 || var_233[var_1882].Var7 == 0) {
                    mes("　　　　　　　　　何も入っていないぞ");
                }
                if (var_486[var_1916][1][15] != 0 && var_233[var_1882].Var7 != 0) {
                    mes("　　　　　　　　　何かが見える");
                }
            }
            mes("");
        }

        if (var_1880 == 2) {
            pos(15, 283);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 14, font_style = 1);
            color(255, 255, 255);
            mes("");
            if (var_233[var_1882].Var0 != 817) {
                mes("　　　　　　　取り出すことはできないぞ");
            }
            if (var_233[var_1882].Var0 == 817) {
                if (var_119 == 0) {
                    mes("　　　　　　　　　何も入っていないぞ");
                }
                if (var_119 >= 1) {
                    mes("　　　　　　　取り出すことはできないぞ");
                }
            }
            mes("");
        }
        font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
        pos(160, 269);
        color(255, 255, 255);
        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            if (item_page_number == 1) {
                if (var_224 < 11 && var_77[var_66][var_67] == 0) {
                    line(155, 267, 201, 267);
                }
                // アイテム欄の選択カーソルかも？？
                if (var_224 > 10) {
                    pos(175, 259);
                    mes(">");
                    pos(176, 259);
                    mes(">");
                    pos(177, 259);
                    mes(">");
                }
                if (var_77[var_66][var_67] != 0) {
                    pos(175, 259);
                    mes(">");
                    pos(176, 259);
                    mes(">");
                    pos(177, 259);
                    mes(">");
                }
            }
            if (item_page_number == 2) {
                if (var_77[var_66][var_67] == 0) {
                    pos(175, 259);
                    mes("<");
                    pos(176, 259);
                    mes("<");
                    pos(177, 259);
                    mes("<");
                }
                if (var_77[var_66][var_67] != 0) {
                    pos(166, 259);
                    mes("< >");
                    pos(167, 259);
                    mes("< >");
                    pos(168, 259);
                    mes("< >");
                }
            }
            if (item_page_number == 3) {
                pos(168, 71);
                font("ＭＳ Ｐゴシック", 12, 1);
                mes("足元");
            }
        }
        if (var_1880 == 0) {
            color(255, 255, 255);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(15, Y_axis_item_position);
            mes(">");
            pos(16, Y_axis_item_position);
            mes(">");
            pos(17, Y_axis_item_position);
            mes(">");
        }
        // アイテムを選択した時
        if (var_221 >= 1) {
            var_1822 = 114;
            if (item_class2 == 3) {
                var_1822 = 97;
            }
            if (item_class2 == 4) {
                var_1822 = 114;
            }
            if (item_class2 == 5) {
                var_1822 = 131;
            }
            if (item_class2 == 6) {
                var_1822 = 148;
            }
            if (item_class2 == 7) {
                var_1822 = 165;
            }
            if (item_class2 == 8) {
                var_1822 = 182;
            }
            if (item_class2 == 9) {
                var_1822 = 199;
            }
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(252, 38);
            gcopy(12, 0, 0, 80, var_1822 - 32);
            color(255, 255, 255);
            if (var_221 >= 2) {
                color(150, 150, 150);
            }
            line(255, 41, 326, 41);
            line(255, var_1822 + 2, 326, var_1822 + 2);
            line(254, 42, 254, var_1822);
            line(328, 42, 328, var_1822);
            pset(255, 42);
            pset(327, 42);
            pset(255, var_1822 + 1);
            pset(327, var_1822 + 1);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(275, 46);
            color(255, 255, 255);
            if (var_231 == 1) {
                color(255, 255, 255);
                if (var_221 >= 2) {
                    color(150, 150, 150);
                }
                mes("拾う");
            }
            if (item_class1 != 0) {
                color(255, 255, 255);
                if (var_221 >= 2) {
                    color(150, 150, 150);
                }
                // 道具画面(メニュー画面/道具)が閉じている状態
                if (item_class1 == 1 && var_220 == 0 && var_231 == 0) {
                    mes("装備");
                }
                // 道具画面(メニュー画面/道具)が閉じている状態
                if (item_class1 == 2 && var_479[var_225] == 0 && var_220 == 0 && var_231 == 0) {
                    mes("装備");
                }
                // 道具画面(メニュー画面/道具)が閉じている状態
                if (item_class1 == 2 && var_479[var_225] == 1 && var_220 == 0 && var_231 == 0) {
                    mes("はずす");
                }
                if (item_class1 == 3) {
                    mes("使う");
                }
                if (item_class1 == 4) {
                    mes("食べる");
                }
                if (item_class1 == 5) {
                    mes("見る");
                }
                if (item_class1 == 6) {
                    mes("読む");
                }
            }
            if (item_class1 == 2) {
                color(255, 255, 255);
                if (var_221 >= 2) {
                    color(150, 150, 150);
                }
                mes("撃つ");
            }
            if (item_class1 == 1 && var_2032 != 0) {
                color(255, 255, 255);
                if (var_221 >= 2) {
                    color(150, 150, 150);
                }
                mes("はずす");
            }
            if (item_class1 == 1 || item_class1 == 2) {
                color(255, 255, 255);
                if (var_221 >= 2) {
                    color(150, 150, 150);
                }
                mes("発動");
            }
            if (item_class1 == 5) {
                color(255, 255, 255);
                if (var_221 >= 2) {
                    color(150, 150, 150);
                }
                if (var_233[var_225].Var0 < 850 || var_233[var_225].Var0 >= 860) {
                    mes("入れる");
                }
                if (var_233[var_225].Var0 >= 850 && var_233[var_225].Var0 < 860) {
                    mes("押す");
                }
            }
            color(255, 255, 255);
            if (var_221 >= 2) {
                color(150, 150, 150);
            }
            mes("投げる");
            if (var_220 == 1) {
                color(255, 255, 255);
                if (var_221 >= 2) {
                    color(150, 150, 150);
                }
                mes("出す");
            }
            if (var_231 == 0) {
                color(255, 255, 255);
                if (var_221 >= 2) {
                    color(150, 150, 150);
                }
                mes("置く");
            }
            if (var_77[var_66][var_67] != 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                var_2033 = var_77[var_66][var_67];
                if (var_78[var_2033].Var0 != 1) {
                    color(255, 255, 255);
                    if (var_221 >= 2) {
                        color(150, 150, 150);
                    }
                    mes("交換");
                }
            }
            if (var_2034 == 1) {
                color(255, 255, 255);
                if (var_221 >= 2) {
                    color(150, 150, 150);
                }
                var_2035 = "名前";
                if (belongings_item_list == 800 && var_862[800][0] == 1) {
                    var_2035 = "メモ";
                }
                mes(var_2035);
            }
            color(255, 255, 255);
            if (var_221 >= 2) {
                color(150, 150, 150);
            }
            mes("説明");
            color(255, 255, 255);
            if (var_221 >= 2) {
                color(150, 150, 150);
            }
    
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(262, var_229);
            mes(">");
            pos(263, var_229);
            mes(">");
            pos(264, var_229);
            mes(">");
        }
        if (var_221 == 2) {
            var_2036 = 0;
            var_2037 = 100;
            var_2038 = 20;
            if (var_2032 != 0) {
                var_2038 = 10;
            }
            gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
            pos(252 - var_2036, 38 + var_2037);
            gcopy(12, 0, 0, 80, 42 + var_2038);
            color(255, 255, 255);
            line(255 - var_2036, 41 + var_2037, 326 - var_2036, 41 + var_2037);
            line(255 - var_2036, 76 + var_2037 + var_2038, 326 - var_2036, 76 + var_2037 + var_2038);
            line(254 - var_2036, 42 + var_2037, 254 - var_2036, 74 + var_2037 + var_2038);
            line(328 - var_2036, 42 + var_2037, 328 - var_2036, 74 + var_2037 + var_2038);
            pset(255 - var_2036, 42 + var_2037);
            pset(327 - var_2036, 42 + var_2037);
            pset(255 - var_2036, 75 + var_2037 + var_2038);
            pset(327 - var_2036, 75 + var_2037 + var_2038);
    
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(275 - var_2036, 46 + var_2037);
            if (var_2032 != 1) {
                color(255, 255, 0);
                mes("攻撃");
            }
            if (var_2032 != 2) {
                color(255, 180, 90);
                mes("防御");
            }
            if (var_2032 != 3) {
                color(240, 0, 240);
                mes("能力");
            }
            color(255, 255, 255);
    
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(262 - var_2036, var_246 + var_2037);
            mes(">");
            pos(263 - var_2036, var_246 + var_2037);
            mes(">");
            pos(264 - var_2036, var_246 + var_2037);
            mes(">");
        }
        if (var_221 == 3) {
            var_2036 = 120;
            var_2037 = 100;
            gmode(4, null, null, 140);
            pos(252 - var_2036, 38 + var_2037);
            gcopy(12, 0, 0, 200, 52);
            color(255, 255, 255);
            line(255 - var_2036, 41 + var_2037, 326, 41 + var_2037);
            line(255 - var_2036, 86 + var_2037, 326, 86 + var_2037);
            line(254 - var_2036, 42 + var_2037, 254 - var_2036, 84 + var_2037);
            line(328, 42 + var_2037, 328, 84 + var_2037);
            pset(255 - var_2036, 42 + var_2037);
            pset(327, 42 + var_2037);
            pset(255 - var_2036, 85 + var_2037);
            pset(327, 85 + var_2037);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            color(255, 255, 255);
            pos(275 - var_2036, 48 + var_2037);
            yield func492(); // アイテムリスト呼び出し
            mes("" + var_2039);
            mes("やめる");
            color(255, 255, 255);
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(262 - var_2036, var_246 + var_2037 + 2);
            mes(">");
            pos(263 - var_2036, var_246 + var_2037 + 2);
            mes(">");
            pos(264 - var_2036, var_246 + var_2037 + 2);
            mes(">");
        }
        return;
    });
}

// 道具画面での動作処理 (アイテム表示の並び等)
function func461(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(461);
        // もし持っている道具が0( var_224 = 0 )である かつ道具画面(メニュー画面/道具)が閉じている状態
        if (var_220 == 0 && var_224 == 0 && item_page_number != 3) {
            yield func459(); // 道具画面(所持数0)の表示(メニュー画面/道具)
            return;
        }
        var_198 = 0;
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認

        if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態

            // No != 3 なので、アイテム個数 var_225 が0でなければ
            if (var_259 == 1 && item_page_number != 3) {
                // No = 1 なので、アイテム個数 var_225 が10以下であれば
                if (item_page_number == 1) { // 道具欄1ページ目
                    // 所持アイテム数var_224が10以下で、アイテム位置配列var_225と一緒でなければ
                    if (var_224 <= 10 && var_225 != var_224) {

                        Y_axis_item_position = Y_axis_item_position + 22;
                        var_225 = var_225 + 1;
                        
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                    // 所持アイテム数var_224が11以上で、アイテム位置配列var_225が10でなければ
                    if (var_224 >= 11 && var_225 != 10) {
                        
                        Y_axis_item_position = Y_axis_item_position + 22;
                        var_225 = var_225 + 1;

                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }

                    if (var_225 == var_224 || var_225 == 10) {

                        Y_axis_item_position = 45;
                        var_225 = 1;

                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
                // No = 2 なので、アイテム個数 var_225 が10より多ければ
                if (item_page_number == 2) { // 道具欄2ページ目
                    // 所持アイテム数var_224がアイテム位置配列var_225と一緒でなく、アイテム位置配列var_225が20でなければ
                    if (var_225 != var_224 && var_225 != 20) {
                        
                        Y_axis_item_position = Y_axis_item_position + 22;
                        var_225 = var_225 + 1;
                        
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }

                    if (var_225 == var_224 || var_225 == 20) {

                        Y_axis_item_position = 45;
                        var_225 = 11;

                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
            }

            // var_255 入力判定：[↑] がON かつ、No != 3 なので、アイテム個数 var_225 が0でなければ
            if (var_255 == 1 && item_page_number != 3) {
                // アイテム位置配列var_225が1でない、かつ 11でないとき
                if (var_225 != 1 && var_225 != 11) {

                    Y_axis_item_position = Y_axis_item_position - 22;
                    var_225 = var_225 - 1;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                // アイテム位置配列var_225が1 かつ 11 のとき
                if (var_225 == 1 || var_225 == 11) {

                    // No = 1 なので、アイテム個数 var_225 が10以下であれば
                    if (item_page_number == 1) { // 道具欄1ページ目
                        // 所持アイテム数var_224が10以下の時は
                        if (var_224 <= 10) {

                            Y_axis_item_position = (var_224 - 1) * 22 + 45;
                            var_225 = var_224;

                            DSPLAY(audio_id = 100); // アイテム選択時の効果音
                            yield func337(); // メッセージ関係呼び出し
                            yield func337(); // メッセージ関係呼び出し
                            yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                            return;
                        }
                        // 所持アイテム数var_224が11以上の時は
                        if (var_224 >= 11) {
                            
                            Y_axis_item_position = 9 * 22 + 45;
                            var_225 = 10;

                            DSPLAY(audio_id = 100); // アイテム選択時の効果音
                            yield func337(); // メッセージ関係呼び出し
                            yield func337(); // メッセージ関係呼び出し
                            yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                            return;
                        }
                    }
                    // No = 2 なので、アイテム個数 var_225 が10より多ければ
                    if (item_page_number == 2) {

                        Y_axis_item_position = (var_224 - 11) * 22 + 45;
                        var_225 = var_224;

                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
            }

            if (var_254 == 1) {
                // No = 1 なので、アイテム個数 var_225 が10以下であれば
                if (item_page_number == 1) {
                    if (var_77[var_66][var_67] != 0 && var_1240 == 0 && var_1999 == 0 && var_2000 == 0 && var_2001 == 0 && var_1950 == 0 && var_2002 == 0 && var_2005 == 0 && var_2003 == 0 && var_2004 == 0 && var_2006 == 0 && var_2007 == 0) {
                        
                        item_page_number = 3; // No = 3 なので、アイテム個数 var_225 が0
                        Y_axis_item_position = 45;
                        var_225 = 0;

                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func478();
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                    // 
                    if (var_224 > 10) {

                        var_225 = 11;
                        item_page_number = 2; // No = 2 なので、アイテム個数 var_225 が10より多い
                        Y_axis_item_position = 45;
                        
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音 
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
                // No = 2 なので、アイテム個数 var_225 が10より多ければ
                if (item_page_number == 2) {

                    var_225 = 1;
                    item_page_number = 1;
                    Y_axis_item_position = 45;
                    
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                // No = 3 なので、アイテム個数 var_225 が0であれば
                if (item_page_number == 3 && var_224 != 0) {
                    if (var_224 <= 10) {

                        var_225 = 1;
                        item_page_number = 1; // No = 1 なので、アイテム個数 var_225 が10以下
                        Y_axis_item_position = 45;
                        var_231 = 0;

                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                    // 所持アイテムが10個より多い時
                    if (var_224 > 10) {

                        var_225 = 11;
                        item_page_number = 2; // No = 2 なので、アイテム個数 var_225 が10より多い
                        Y_axis_item_position = 45;
                        var_231 = 0;

                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
            }
            if (var_257 == 1) {
                // No = 1 なので、アイテム個数 var_225 が10以下であれば
                if (item_page_number == 1 && var_224 > 10) {

                    var_225 = 11;
                    item_page_number = 2; // No = 2 なので、アイテム個数 var_225 が10より多い
                    Y_axis_item_position = 45;
                    
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                if (var_1240 == 0 && var_1999 == 0 && var_2000 == 0 && var_2001 == 0 && var_1950 == 0 && var_2002 == 0 && var_2003 == 0 && var_2004 == 0 && var_2005 == 0 && var_2006 == 0 && var_2007 == 0) {
                    // No = 1 なので、アイテム個数 var_225 が10以下であれば
                    if (item_page_number == 1 && var_224 <= 10 && var_77[var_66][var_67] != 0) {
                        
                        item_page_number = 3; // No = 3 なので、アイテム個数 var_225 が0
                        Y_axis_item_position = 45;
                        var_225 = 0;

                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func478();
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                    // No = 2 なので、アイテム個数 var_225 が10より多ければ
                    if (item_page_number == 2 && var_77[var_66][var_67] != 0) {
                        
                        item_page_number = 3; // No = 3 なので、アイテム個数 var_225 が0
                        Y_axis_item_position = 45;
                        var_225 = 0;

                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func478();
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
                // No = 2 なので、アイテム個数 var_225 が10より多ければ
                if (item_page_number == 2) {
                    if (var_1240 != 0 || var_1999 != 0 || var_2000 != 0 || var_2001 != 0 || var_1950 != 0 || var_2002 != 0 || var_2003 != 0 || var_2004 != 0 || var_2005 != 0 || var_2006 != 0 || var_2007 != 0) {
                        
                        var_225 = 1;
                        item_page_number = 1; // No = 1 なので、アイテム個数 var_225 が10以下
                        Y_axis_item_position = 45;
                        
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                        return;
                    }
                }
                // No = 2 なので、アイテム個数 var_225 が10より多ければ
                if (item_page_number == 2 && var_77[var_66][var_67] == 0) {
                    
                    var_225 = 1;
                    item_page_number = 1; // No = 1 なので、アイテム個数 var_225 が10以下
                    Y_axis_item_position = 45;
                    
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    
                    yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                // No = 2 なので、アイテム個数 var_225 が10より多ければ
                if (item_page_number == 2 && var_2005 == 1) {
                    
                    var_225 = 1;
                    item_page_number = 1; // No = 1 なので、アイテム個数 var_225 が10以下
                    Y_axis_item_position = 45;
                    
                    DSPLAY(audio_id = 100);
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    
                    yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                // No = 3 なので、アイテム個数 var_225 が0であれば
                if (item_page_number == 3 && var_224 != 0) {
                    
                    var_225 = 1;
                    item_page_number = 1; // No = 1 なので、アイテム個数 var_225 が10以下
                    Y_axis_item_position = 45;
                    var_231 = 0;

                    DSPLAY(audio_id = 100);
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
            }
            // key_Shift_on (Shiftキー)がONの時
            if (key_Shift_on == 1 && var_1866 == 0 && var_234 == 0 && var_220 == 0 && var_231 == 0 && var_1945 == 0 && var_224 > 1 && var_1240 == 0 && var_1999 == 0 && var_2000 == 0 && var_2001 == 0 && var_1950 == 0 && var_2002 == 0 && var_2003 == 0 && var_2004 == 0 && var_2005 == 0 && var_2006 == 0 && var_2007 == 0 && item_page_number != 3) {
                DSPLAY(audio_id = 208); //アイテムを整理する時の効果音
                
                yield func467(); // Shiftキーを押してアイテムを整理する時の関数
                
                return;
            }
        }
        // 道具画面(メニュー画面/道具)が開いている状態
        if (var_220 == 1 && var_233[var_1876].Var8 != 0 && var_233[var_1876].Var0 < 805) {
            if (var_259 == 1) {
                if (var_225 != var_233[var_1876].Var8 && var_225 != var_1884) {
                    
                    Y_axis_item_position = Y_axis_item_position + 22;  
                    var_225 = var_225 + 1;                  
                    
                    //Y_axis_item_position = var_233[var_1876].Var8 + 22;  
                    //var_225 = var_233[var_1876].Var8 + 1;
                    DSPLAY(audio_id = 100);
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                if (var_225 == var_233[var_1876].Var8 || var_225 == var_1884) {
                    
                    Y_axis_item_position = 45;
                    var_225 = 1;

                    DSPLAY(audio_id = 100);
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
            }
            if (var_255 == 1) {
                if (var_225 != 1) {
                    
                    Y_axis_item_position = Y_axis_item_position - 22;
                    var_225 = var_225 - 1;

                    DSPLAY(audio_id = 100);
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                if (var_225 == 1) {
                    
                    Y_axis_item_position = (var_233[var_1876].Var8 - 1) * 22 + 45;
                    var_225 = var_233[var_1876].Var8;

                    DSPLAY(audio_id = 100);
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
            }
        }
        // アイテムを選択した時の表示項目の割り振り？？
        if (key_Z_on == 1 || key_A_on == 1) {
            // No != 3 なので、アイテム個数 var_225 が0でなければ
            if (var_1866 == 1 && item_page_number != 3) {
                DSPLAY(audio_id = 　212);
                yield func469(); // ヤバいものへの "入れる" 選択
                return;
            }
            // No != 3 なので、アイテム個数 var_225 が0であれば
            if (var_1866 == 1 && item_page_number == 3) {
                DSPLAY(audio_id = 　212);
                var_2040 = 1;
                yield func469(); // ヤバいものへの "入れる" 選択
                return;
            }

            if (var_220 == 1 && var_233[var_1876].Var8 != 0 && var_233[var_1876].Var0 < 805) {
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                var_221 = 1;
                var_229 = 44;
                var_222 = 1;
                yield func462(); // アイテムidごとに区分分け関数
                return;
            }
            if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                if (var_1240 == 1) { // クレイジーD発動フラグ。道具画面処理を読み込む度にフラグが上がり、次へ進んでいく
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func522(); //disc同士の合成関数(クレイジーDの発動能力)1 何故か関数が二つある
                    return;
                }
                if (var_1240 == 2) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func523(); //disc同士の合成関数(クレイジーDの発動能力)2　何故か関数が二つある
                    return;
                }
                if (var_2000 == 1) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func771(); // ムーディーブルース以外でアイテムを送る手段(サウェッジガーデン？アバッキオ？)
                    return;
                }
                if (var_2001 == 1) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func775(); // ムーディーブルース以外でアイテムを送る手段(サウェッジガーデン？アバッキオ？)
                    return;
                }
                if (var_1950 >= 1) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func444(); // discに対してコミックを読んだ時の強化処理
                    return;
                }
                if (var_1945 == 1) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func439(); // アヴドゥルのdisc効果
                    return;
                }
                if (var_1945 == 2) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func441(); // ギアッチョのdisc効果
                    return;
                }
                if (var_1945 == 3) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func442(); // プッチ神父のdisc効果
                    return;
                }
                if (var_2005 == 1) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func480(); // 道具画面(メニュー画面/道具)からの足元交換
                    return;
                }
                if (var_2004 == 1) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func524(); // セックスピストルズの発動能力
                    return;
                }
                if (var_2006 == 1) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func525(); // ボーイⅡマンの発動能力
                    return;
                }
                if (var_2007 == 1) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func533(); // ムーディーブルースの発動によってアイテムを倉庫に送る動作処理
                    return;
                }
                // No != 3 なので、アイテム個数 var_225 が0でなければ
                if (item_page_number != 3) {
                    var_221 = 1;
                    var_229 = 44;
                    var_222 = 1;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func462(); // アイテムidごとに区分分け関数
                    return;
                }
                // No = 3 なので、アイテム個数 var_225 が0であれば
                if (item_page_number == 3) {
                    var_221 = 1;
                    var_229 = 44;
                    var_222 = 10;
                    var_231 = 1;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func462(); // アイテムidごとに区分分け関数
                    return;
                }
            }
        }
        if (key_X_on == 1) { // キャンセルボタンXが押されたら
            if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                var_221 = 0;
                
                var_225 = var_1882;
                Y_axis_item_position = var_1883;
                
                var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                var_1965 = 0;
                var_231 = 0;
                var_1880 = 0;
                item_page_number = var_1885;
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                yield func051();
                yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                return;
            }
            if (var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                if (var_1866 == 0) {
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    var_1240 = 0;
                    var_1999 = 0;
                    var_2000 = 0;
                    var_2001 = 0;
                    var_1950 = 0;
                    var_217 = 0;
                    var_2002 = 0;
                    var_2003 = 0;
                    var_2004 = 0;
                    var_2005 = 0;
                    var_1945 = 0;
                    var_1252 = 0;
                    var_2006 = 0;
                    var_2007 = 0;
                    var_1208 = 0;
                    var_234 = 0;
                    var_231 = 0;
                    var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    var_1667 = 0;
                    var_2008 = 0;
                    var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    var_1965 = 0;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                    return;
                }
                if (var_1866 == 1) {
                    var_1866 = 0;
                    var_221 = 1;
                    var_229 = 44;
                    var_225 = var_1877;
                    item_page_number = var_1878;
                    Y_axis_item_position = var_1879;
                    var_234 = 0;
                    var_222 = 1;
                    if (var_231 == 1) {
                        var_222 = 10;
                    }
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func051();
                    yield func462(); // アイテムidごとに区分分け関数
                    return;
                }
            }
        }
        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    });
}

// アイテムidごとに区分分け関数
function func462(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(462);
        if (var_1667 >= 1) {
            belongings_item_list = var_1667;
            var_220 = var_1668;
            var_231 = var_1669;
        }
        item_class1 = 0;
        var_2041 = 16;
        var_2032 = 0;
        if (var_220 == 0 && var_231 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            if (belongings_item_list < 100) {
                item_class1 = 0;
                item_class2 = 3;
                var_222 = 5;
            }
            if (belongings_item_list >= 100 && belongings_item_list < 400) {
                yield func426();
                yield func427();
                yield func428();
                item_class2 = 5;
                if (var_225 == var_553) {
                    var_2032 = 1;
                    item_class2 = 6;
                }
                if (var_225 == var_554) {
                    var_2032 = 2;
                    item_class2 = 6;
                }
                if (var_225 == var_555) {
                    var_2032 = 3;
                    item_class2 = 6;
                }
                item_class1 = 1;
            }
            if (belongings_item_list >= 400 && belongings_item_list < 500) {
                item_class1 = 2;
                item_class2 = 6;
            }
            if (belongings_item_list >= 500 && belongings_item_list < 600) {
                item_class1 = 3;
                item_class2 = 4;
            }
            if (belongings_item_list >= 600 && belongings_item_list < 700) {
                item_class1 = 4;
                item_class2 = 4;
            }
            if (belongings_item_list >= 700 && belongings_item_list < 750) {
                item_class1 = 3;
                item_class2 = 4;
            }
            if (belongings_item_list >= 800 && belongings_item_list < 900) {
                item_class1 = 5;
                item_class2 = 5;
            }
            if (belongings_item_list >= 750 && belongings_item_list < 800) {
                item_class1 = 6;
                item_class2 = 4;
            }
            if (belongings_item_list >= 900 && belongings_item_list < 1000) {
                item_class1 = 6;
                item_class2 = 4;
            }
            if (var_77[var_66][var_67] != 0) {
                var_2033 = var_77[var_66][var_67];
                if (var_78[var_2033].Var0 != 1) {
                    item_class2 = item_class2 + 1;
                }
            }
        }
        if (var_220 == 0 && var_231 == 1) { // 道具画面(メニュー画面/道具)が閉じている状態
            if (belongings_item_list < 100) {
                item_class1 = 0;
                item_class2 = 3;
            }
            if (belongings_item_list >= 100 && belongings_item_list < 400) {
                item_class1 = 1;
                item_class2 = 5;
            }
            if (belongings_item_list >= 400 && belongings_item_list < 500) {
                item_class1 = 2;
                item_class2 = 6;
            }
            if (belongings_item_list >= 500 && belongings_item_list < 600) {
                item_class1 = 3;
                item_class2 = 5;
            }
            if (belongings_item_list >= 600 && belongings_item_list < 700) {
                item_class1 = 4;
                item_class2 = 5;
            }
            if (belongings_item_list >= 700 && belongings_item_list < 750) {
                item_class1 = 3;
                item_class2 = 5;
            }
            if (belongings_item_list >= 800 && belongings_item_list < 900) {
                item_class1 = 5;
                item_class2 = 6;
            }
            if (belongings_item_list >= 750 && belongings_item_list < 800) {
                item_class1 = 6;
                item_class2 = 5;
            }
            if (belongings_item_list >= 900 && belongings_item_list < 1000) {
                item_class1 = 6;
                item_class2 = 5;
            }
        }
        if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            if (belongings_item_list < 100) {
                item_class1 = 0;
                item_class2 = 4;
                var_222 = 5;
            }
            if (belongings_item_list >= 100 && belongings_item_list < 400) {
                item_class1 = 1;
                item_class2 = 5;
                var_222 = 3;
            }
            if (belongings_item_list >= 400 && belongings_item_list < 500) {
                item_class1 = 2;
                item_class2 = 6;
                var_222 = 2;
            }
            if (belongings_item_list >= 500 && belongings_item_list < 600) {
                item_class1 = 3;
                item_class2 = 5;
            }
            if (belongings_item_list >= 600 && belongings_item_list < 700) {
                item_class1 = 4;
                item_class2 = 5;
            }
            if (belongings_item_list >= 700 && belongings_item_list < 750) {
                item_class1 = 3;
                item_class2 = 5;
            }
            if (belongings_item_list >= 800 && belongings_item_list < 900) {
                item_class1 = 5;
                item_class2 = 5;
            }
            if (belongings_item_list >= 750 && belongings_item_list < 800) {
                item_class1 = 6;
                item_class2 = 5;
            }
            if (belongings_item_list >= 900 && belongings_item_list < 1000) {
                item_class1 = 6;
                item_class2 = 5;
            }
        }
        var_2034 = 0;
        if (var_862[belongings_item_list][0] == 0 && belongings_item_list >= 100 && belongings_item_list < 400) {
            var_2034 = 1;
            item_class2++;
        }
        if (var_862[belongings_item_list][0] == 0 && belongings_item_list >= 500 && belongings_item_list < 600) {
            var_2034 = 1;
            item_class2++;
        }
        if (var_862[belongings_item_list][0] == 0 && belongings_item_list >= 801 && belongings_item_list < 900) {
            var_2034 = 1;
            item_class2++;
        }
        // No = 800 エニグマの紙 かつ 99階でなければ
        if (belongings_item_list == 800 && dangeon_number != 99) {
            var_2034 = 1;
            item_class2++;
            var_2042 = var_225;
        }
        yield func051();
        if (var_1667 >= 1) {
            var_1668 = 0;
            var_1669 = 0;
            var_1667 = 0;
            var_222 = 8;
        }
        yield func463();
    });
}


function func463(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(463);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (key_X_on == 1) {
            var_221 = 0;
            var_231 = 0;
            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func051();
            yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (var_259 == 1) {
            if (var_222 == 10) {
                var_229 = var_229 + var_2041;
                if (item_class1 == 0) {
                    var_222 = 5;
                }
                if (item_class1 == 1) {
                    var_222 = 1;
                    if (var_231 == 1) {
                        var_222 = 3;
                    }
                }
                if (item_class1 == 2) {
                    var_222 = 1;
                    if (var_231 == 1) {
                        var_222 = 2;
                    }
                }
                if (item_class1 == 3) {
                    var_222 = 1;
                }
                if (item_class1 == 4) {
                    var_222 = 1;
                }
                if (item_class1 == 5) {
                    var_222 = 1;
                }
                if (item_class1 == 6) {
                    var_222 = 1;
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 1) {
                var_229 = var_229 + var_2041;
                if (item_class1 == 1) {
                    if (var_2032 == 0) {
                        var_222 = 3;
                    }
                    if (var_2032 != 0) {
                        var_222 = 2;
                    }
                }
                if (item_class1 == 2) {
                    var_222 = 2;
                }
                if (item_class1 == 3) {
                    var_222 = 5;
                }
                if (item_class1 == 4) {
                    var_222 = 5;
                }
                if (item_class1 == 5) {
                    var_222 = 4;
                }
                if (item_class1 == 6) {
                    var_222 = 5;
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 2) {
                var_229 = var_229 + var_2041;
                var_222 = 3;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 3) {
                var_229 = var_229 + var_2041;
                var_222 = 5;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 4) {
                var_229 = var_229 + var_2041;
                var_222 = 5;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            // 消費形アイテム (var_222 = 5) であれば
            if (var_222 == 5) {
                var_229 = var_229 + var_2041;
                var_222 = 6;
                if (var_231 == 1) {
                    var_2033 = var_77[var_66][var_67];
                    if (var_78[var_2033].Var0 != 1) {
                        var_222 = 7;
                    }
                }
                if (var_231 == 1) {
                    var_2033 = var_77[var_66][var_67];
                    if (var_78[var_2033].Var0 == 1) {
                        if (var_2034 == 0) {
                            var_222 = 8;
                        }
                        if (var_2034 == 1) {
                            var_222 = 11;
                        }
                    }
                }
                if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                    var_222 = 9;
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 9) {
                var_229 = var_229 + var_2041;
                var_222 = 6;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 6) {
                var_229 = var_229 + var_2041;
                if (var_2034 == 0) {
                    var_222 = 8;
                }
                if (var_2034 == 1) {
                    var_222 = 11;
                }
                if (var_77[var_66][var_67] != 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    var_2033 = var_77[var_66][var_67];
                    if (var_78[var_2033].Var0 != 1) {
                        var_222 = 7;
                    }
                }
                if (var_77[var_66][var_67] != 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    var_2033 = var_77[var_66][var_67];
                    if (var_78[var_2033].Var0 == 1) {
                        if (var_2034 == 0) {
                            var_222 = 8;
                        }
                        if (var_2034 == 1) {
                            var_222 = 11;
                        }
                    }
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 7) {
                var_229 = var_229 + var_2041;
                if (var_2034 == 0) {
                    var_222 = 8;
                }
                if (var_2034 == 1) {
                    var_222 = 11;
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 11) {
                var_229 = var_229 + var_2041;
                var_222 = 8;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 8) {
                var_229 = 44;
                var_222 = 1;
                if (var_231 == 0) {
                    if (item_class1 == 0) {
                        var_222 = 5;
                    }
                    if (item_class1 != 0) {
                        var_222 = 1;
                    }
                }
                if (var_231 == 1) {
                    var_222 = 10;
                }
                if (var_220 == 1 && item_class1 == 1) {
                    var_222 = 3;
                }
                // 道具画面(メニュー画面/道具)が開いている状態
                if (var_220 == 1 && item_class1 == 2) {
                    var_222 = 2;
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
        }
        if (var_255 == 1) {
            if (var_222 == 10) {
                if (var_2034 == 0) {
                    if (item_class1 == 0) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 3;
                    }
                    if (item_class1 == 1) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 4;
                    }
                    if (item_class1 == 2) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 5;
                    }
                    if (item_class1 == 3) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 4;
                    }
                    if (item_class1 == 4) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 4;
                    }
                    if (item_class1 == 5) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 5;
                    }
                    if (item_class1 == 6) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 4;
                    }
                    if (var_77[var_66][var_67] != 0) {
                        var_2033 = var_77[var_66][var_67];
                        if (var_78[var_2033].Var0 == 1) {
                            var_229 = var_229 - var_2041;
                        }
                    }
                }
                if (var_2034 == 1) {
                    if (item_class1 == 0) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 4;
                    }
                    if (item_class1 == 1) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 5;
                    }
                    if (item_class1 == 2) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 6;
                    }
                    if (item_class1 == 3) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 5;
                    }
                    if (item_class1 == 4) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 5;
                    }
                    if (item_class1 == 5) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 6;
                    }
                    if (item_class1 == 6) {
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 5;
                    }
                    if (var_77[var_66][var_67] != 0) {
                        var_2033 = var_77[var_66][var_67];
                        if (var_78[var_2033].Var0 == 1) {
                            var_229 = var_229 - var_2041;
                        }
                    }
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 1) {
                if (var_2034 == 0) {
                    if (var_231 == 0) {
                        if (item_class1 == 1) {
                            if (var_2032 == 0) {
                                var_222 = 8;
                                var_229 = 44 + var_2041 * 4;
                                if (var_77[var_66][var_67] != 0 || var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                    var_229 = 44 + var_2041 * 5;
                                }
                            }
                            if (var_2032 != 0) {
                                var_222 = 8;
                                var_229 = 44 + var_2041 * 5;
                                if (var_77[var_66][var_67] != 0 || var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                    var_229 = 44 + var_2041 * 6;
                                }
                            }
                        }
                        if (item_class1 == 2) {
                            var_222 = 8;
                            var_229 = 44 + var_2041 * 5;
                            if (var_77[var_66][var_67] != 0 || var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                var_229 = 44 + var_2041 * 6;
                            }
                        }
                        if (item_class1 == 3) {
                            var_222 = 8;
                            var_229 = 44 + var_2041 * 3;
                            if (var_77[var_66][var_67] != 0 || var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                var_229 = 44 + var_2041 * 4;
                            }
                        }
                        if (item_class1 == 4) {
                            var_222 = 8;
                            var_229 = 44 + var_2041 * 3;
                            if (var_77[var_66][var_67] != 0 || var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                var_229 = 44 + var_2041 * 4;
                            }
                        }
                        if (item_class1 == 5) {
                            var_222 = 8;
                            var_229 = 44 + var_2041 * 4;
                            if (var_77[var_66][var_67] != 0 || var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                var_229 = 44 + var_2041 * 5;
                            }
                        }
                        if (item_class1 == 6) {
                            var_222 = 8;
                            var_229 = 44 + var_2041 * 3;
                            if (var_77[var_66][var_67] != 0 || var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                var_229 = 44 + var_2041 * 4;
                            }
                        }
                        if (var_77[var_66][var_67] != 0) {
                            var_2033 = var_77[var_66][var_67];
                            if (var_78[var_2033].Var0 == 1) {
                                var_229 = var_229 - 16;
                            }
                        }
                    }
                    if (var_231 == 1) {
                        var_222 = 10;
                        var_229 = var_229 - var_2041;
                    }
                }
                if (var_2034 == 1) {
                    if (var_231 == 0) {
                        if (item_class1 == 1) {
                            if (var_2032 == 0) {
                                var_222 = 8;
                                var_229 = 44 + var_2041 * 5;
                                if (var_77[var_66][var_67] != 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                    var_229 = 44 + var_2041 * 6;
                                }
                            }
                            if (var_2032 != 0) {
                                var_222 = 8;
                                var_229 = 44 + var_2041 * 6;
                                if (var_77[var_66][var_67] != 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                    var_229 = 44 + var_2041 * 7;
                                }
                            }
                        }
                        if (item_class1 == 2) {
                            var_222 = 8;
                            var_229 = 44 + var_2041 * 6;
                            if (var_77[var_66][var_67] != 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                var_229 = 44 + var_2041 * 7;
                            }
                        }
                        if (item_class1 == 3) {
                            var_222 = 8;
                            var_229 = 44 + var_2041 * 4;
                            if (var_77[var_66][var_67] != 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                var_229 = 44 + var_2041 * 5;
                            }
                            if (var_77[var_66][var_67] == 0 && var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                var_229 = 44 + var_2041 * 5;
                            }
                            if (var_77[var_66][var_67] != 0 && var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                                var_229 = 44 + var_2041 * 5;
                            }
                        }
                        if (item_class1 == 4) {
                            var_222 = 8;
                            var_229 = 44 + var_2041 * 4;
                            if (var_77[var_66][var_67] != 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                var_229 = 44 + var_2041 * 5;
                            }
                        }
                        if (item_class1 == 5) {
                            var_222 = 8;
                            var_229 = 44 + var_2041 * 5;
                            if (var_77[var_66][var_67] != 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                var_229 = 44 + var_2041 * 6;
                            }
                        }
                        if (item_class1 == 6) {
                            var_222 = 8;
                            var_229 = 44 + var_2041 * 4;
                            if (var_77[var_66][var_67] != 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                                var_229 = 44 + var_2041 * 5;
                            }
                        }
                        if (var_77[var_66][var_67] != 0) {
                            var_2033 = var_77[var_66][var_67];
                            if (var_78[var_2033].Var0 == 1) {
                                var_229 = var_229 - 16;
                            }
                        }
                    }
                    if (var_231 == 1) {
                        var_222 = 10;
                        var_229 = var_229 - var_2041;
                    }
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 2) {
                var_229 = var_229 - var_2041;
                // 道具画面(メニュー画面/道具)が閉じている状態
                if (var_220 == 0 && var_231 == 0) {
                    var_222 = 1;
                }
                if (var_231 == 1) {
                    var_222 = 10;
                }
                if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                    var_222 = 8;
                    var_229 = 44 + var_2041 * 5;
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 3) {
                var_229 = var_229 - var_2041;
                if (item_class1 == 1) {
                    if (var_220 == 0 && var_231 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                        if (var_2032 == 0) {
                            var_222 = 1;
                        }
                        if (var_2032 != 0) {
                            var_222 = 2;
                        }
                    }
                    if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                        var_222 = 8;
                        if (var_2034 == 0) {
                            var_229 = 44 + var_2041 * 4;
                        }
                        if (var_2034 == 1) {
                            var_229 = 44 + var_2041 * 5;
                        }
                    }
                    if (var_231 == 1) {
                        var_222 = 10;
                    }
                }
                if (item_class1 == 2) {
                    var_222 = 2;
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 4) {
                var_229 = var_229 - var_2041;
                var_222 = 1;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 5) { // 消費形アイテム (var_222 = 5) であれば
                var_229 = var_229 - var_2041;
                if (item_class1 == 0) {
                    if (var_220 == 0 && var_231 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 2;
                        if (var_77[var_66][var_67] != 0) {
                            var_2033 = var_77[var_66][var_67];
                            if (var_78[var_2033].Var0 != 1) {
                                var_229 = 44 + var_2041 * 3;
                            }
                        }
                    }
                    if (var_220 == 0 && var_231 == 1) { // 道具画面(メニュー画面/道具)が閉じている状態
                        var_222 = 10;
                    }
                    if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                        var_222 = 8;
                        var_229 = 44 + var_2041 * 3;
                    }
                }
                if (item_class1 == 1) {
                    var_222 = 3;
                }
                if (item_class1 == 2) {
                    var_222 = 3;
                }
                if (item_class1 == 3) {
                    var_222 = 1;
                }
                if (item_class1 == 4) {
                    var_222 = 1;
                }
                if (item_class1 == 5) {
                    var_222 = 4;
                }
                if (item_class1 == 6) {
                    var_222 = 1;
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 9) {
                var_229 = var_229 - var_2041;
                var_222 = 5;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 6) {
                var_229 = var_229 - var_2041;
                var_222 = 5;
                if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                    var_222 = 9;
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 7) {
                var_229 = var_229 - var_2041;
                var_222 = 6;
                if (var_231 == 1) {
                    var_222 = 5;
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 11) {
                var_229 = var_229 - var_2041;
                var_222 = 6;
                if (var_77[var_66][var_67] != 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    var_2033 = var_77[var_66][var_67];
                    if (var_78[var_2033].Var0 != 1) {
                        var_222 = 7;
                    }
                }
                if (var_231 == 1) {
                    var_2033 = var_77[var_66][var_67];
                    if (var_78[var_2033].Var0 != 1) {
                        var_222 = 7;
                    }
                }
                if (var_231 == 1) {
                    var_2033 = var_77[var_66][var_67];
                    if (var_78[var_2033].Var0 == 1) {
                        var_222 = 5;
                    }
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
            if (var_222 == 8) {
                var_229 = var_229 - var_2041;
                var_222 = 6;
                if (var_77[var_66][var_67] != 0 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    var_2033 = var_77[var_66][var_67];
                    if (var_78[var_2033].Var0 != 1) {
                        var_222 = 7;
                    }
                }
                if (var_231 == 1) {
                    var_2033 = var_77[var_66][var_67];
                    if (var_78[var_2033].Var0 != 1) {
                        var_222 = 7;
                    }
                    if (var_78[var_2033].Var0 == 1) {
                        var_222 = 5;
                    }
                }
                if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                    var_222 = 6;
                }
                if (var_2034 == 1) {
                    var_222 = 11;
                }
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func463();
                return;
            }
        }

        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_220 == 0 && var_231 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                if (var_222 == 1) {
                    if (item_class1 == 1) {
                        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                        yield func051();
                        var_221 = 2;
                        var_246 = 44;
                        var_2043 = 1;
                        yield func464();
                        return;
                    }
                    if (item_class1 == 5) {
                        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                        var_221 = 0;
                        yield func408();
                        return;
                    }
                    var_221 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    yield func420(); // 各アイテムを使った際、item_listのIDに応じて効果を割り振り
                    return;
                }
                if (var_222 == 2 && item_class1 == 2) {
                    var_221 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    yield func406(); // アイテムメニューからの "打つ" 選択時、射撃攻撃動作呼び出し処理
                    return;
                }
                if (var_222 == 2 && item_class1 == 1) {
                    var_221 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    if (var_2032 == 1) {
                        disc_class = 1;
                    }
                    if (var_2032 == 2) {
                        disc_class = 2;
                    }
                    if (var_2032 == 3) {
                        disc_class = 3;
                    }
                    yield func420(); // 各アイテムを使った際、item_listのIDに応じて効果を割り振り
                    return;
                }
                if (var_222 == 3 && item_class1 == 1) {
                    yield func051();
                    var_221 = 3;
                    var_246 = 44;
                    var_2043 = 1;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
                    return;
                }
                if (var_222 == 3 && item_class1 == 2) {
                    yield func051();
                    var_221 = 3;
                    var_246 = 44;
                    var_2043 = 1;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
                    return;
                }
                if (var_222 == 4) {
                    var_221 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func407(); // アイテム欄を開いた時の表示イニシャル処理 (1ページ目、カーソル一番上等)
                    return;
                }
                if (var_222 == 5) { // 消費形アイテム (var_222 = 5) であれば
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    if (item_class1 != 2) {
                        var_221 = 0;
                        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                        yield func409();
                        return;
                    }
                    if (item_class1 == 2) {
                        var_339 = 1;
                        var_221 = 0;
                        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                        yield func409();
                        return;
                    }
                }
                if (var_222 == 6) {
                    var_221 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func403();
                    return;
                }
                if (var_222 == 7) {
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    var_2044 = var_77[var_66][var_67];
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func480(); // 道具画面(メニュー画面/道具)からの足元交換
                    return;
                }
                if (var_222 == 8) {
                    var_221 = 0;
                    var_1209 = 1;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func368(); // アイテム配列変え関数??
                    return;
                }
                if (var_222 == 11) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func482();
                    return;
                }
            }
        }
        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_220 == 0 && var_231 == 1) { // 道具画面(メニュー画面/道具)が閉じている状態
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                if (var_222 == 10) {
                    var_231 = 0;
                    var_198 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    var_221 = 0;
                    // 所持アイテム数が20個以上になる場合
                    if (var_224 >= 20 && var_78[var_321].Var0 >= 400 && var_78[var_321].Var0 < 500) {
                        yield func401(); // 射撃discを拾った際、同じものを既に所持していた時にまとめる動作処理
                        if (var_1839 == 1) {
                            var_217 = 1;
                            yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                            return;
                        }
                    }
                    // 所持アイテム数が20個以上になる場合
                    if (var_224 >= 20 && var_78[var_321].Var0 != 1) {
                        yield func477(); // アイテムを "拾う" を選択した時に所持アイテムが20個以上になる際の処理
                        return;
                    }
                    yield func400(); // アイテムを拾う際の動作処理
                    var_217 = 1;
                    yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return;
                }
                if (var_222 == 1) {
                    if (item_class1 == 1) {
                        var_221 = 2;
                        var_246 = 44;
                        var_2043 = 1;
                        yield func051();
                        yield func464();
                        return;
                    }
                    if (item_class1 == 2) {
                        var_231 = 0;
                        var_198 = 0;
                        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                        var_221 = 0;
                        // 所持アイテム数が20個以上になる場合
                        if (var_224 >= 20) {
                            yield func477(); // アイテムを "拾う" を選択した時に所持アイテムが20個以上になる際の処理
                            return;
                        }
                        yield func400(); // アイテムを拾う際の動作処理
                        var_225 = var_224;
                        belongings_item_list = var_233[var_225].Var0;
                        yield func420(); // 各アイテムを使った際、item_listのIDに応じて効果を割り振り
                        return;
                    }
                    if (item_class1 == 5) {
                        var_221 = 0;
                        var_225 = 0;
                        var_231 = 0;
                        yield func408();
                        return;
                    }
                    var_231 = 0;
                    var_198 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    var_221 = 0;
                    var_234 = 1;
                    var_225 = 0;
                    belongings_item_list = var_233[var_225].Var0;
                    yield func420(); // 各アイテムを使った際、item_listのIDに応じて効果を割り振り
                    return;
                }
                if (var_222 == 2) {
                    var_221 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    var_231 = 0;
                    var_234 = 1;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func406(); // アイテムメニューからの "打つ" 選択時、射撃攻撃動作呼び出し処理
                    return;
                }
                if (var_222 == 3 && item_class1 == 1) {
                    yield func051();
                    var_221 = 3;
                    var_246 = 44;
                    var_2043 = 1;
                    var_234 = 1;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
                    return;
                }
                if (var_222 == 3 && item_class1 == 2) {
                    yield func051();
                    var_221 = 3;
                    var_246 = 44;
                    var_2043 = 1;
                    var_234 = 1;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
                    return;
                }
                if (var_222 == 4) {
                    var_221 = 0;
                    var_225 = 0;
                    var_234 = 1;
                    var_1876 = 0;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func407(); // アイテム欄を開いた時の表示イニシャル処理 (1ページ目、カーソル一番上等)
                    return;
                }
                if (var_222 == 5) { // 消費形アイテム (var_222 = 5) であれば
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    var_231 = 0;
                    var_198 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    var_221 = 0;
                    var_234 = 1;
                    var_225 = 0;
                    if (item_class1 == 2) {
                        var_339 = 1;
                    }
                    belongings_item_list = var_233[var_225].Var0;
                    yield func409();
                    return;
                }
                if (var_222 == 7) {
                    var_231 = 0;
                    var_198 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    var_221 = 0;
                    var_2005 = 1;
                    var_2044 = var_77[var_66][var_67];
                    item_page_number = 1;
                    Y_axis_item_position = 45;
                    var_225 = 1;
                    var_223 = var_224 + 10;
                    var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func051();
                    open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                    return;
                }
                if (var_222 == 8) {
                    var_198 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    var_221 = 0;
                    var_2045 = 1;
                    var_2044 = var_77[var_66][var_67];
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    var_1209 = 1;
                    yield func481();
                    var_225 = 0;
                    belongings_item_list = var_78[var_2044].Var0;
                    yield func368(); // アイテム配列変え関数??
                    return;
                }
                if (var_222 == 11) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func482();
                    return;
                }
            }
        }
        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                if (var_222 == 9) {
                    var_221 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func474();
                    return;
                }
                if (var_222 == 1) {
                    var_221 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func420(); // 各アイテムを使った際、item_listのIDに応じて効果を割り振り
                    return;
                }
                if (var_222 == 2) {
                    var_221 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func406(); // アイテムメニューからの "打つ" 選択時、射撃攻撃動作呼び出し処理
                    return;
                }
                if (var_222 == 3 && item_class1 == 1) {
                    yield func051();
                    var_221 = 3;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    var_246 = 44;
                    var_2043 = 1;
                    yield func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
                    return;
                }
                if (var_222 == 3 && item_class1 == 2) {
                    yield func051();
                    var_221 = 3;
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    var_246 = 44;
                    var_2043 = 1;
                    yield func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
                    return;
                }
                if (var_222 == 5) {
                    if (item_class1 != 2) {
                        var_221 = 0;
                        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                        yield func411(); // アイテムを投げた時の動作処理
                        return;
                    }
                    if (item_class1 == 2) {
                        var_339 = 1;
                        var_221 = 0;
                        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                        DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                        yield func411(); // アイテムを投げた時の動作処理
                        return;
                    }
                }
                if (var_222 == 6) {
                    var_221 = 0;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func476(); // 亀の倉庫へアイテムを保管する際、アイテムデータ配列を保存する処理？
                    return;
                }
                if (var_222 == 8) {
                    var_221 = 0;
                    var_1209 = 1;
                    open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func368(); // アイテム配列変え関数??
                    return;
                }
                if (var_222 == 11) {
                    DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                    yield func482();
                    return;
                }
            }
        }
        yield func463();
        return;
    });
}


function func464(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(464);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (key_X_on == 1) {
            var_221 = 1;
            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func051();
            yield func462(); // アイテムidごとに区分分け関数
            return;
        }
        if (var_259 == 1 && var_2043 != 3) {
            var_246 = var_246 + 17;
            if (var_2032 == 0) {
                var_2043 = var_2043 + 1;
            }
            if (var_2032 != 0) {
                var_2043 = 3;
            }
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func464();
            return;
        }
        if (var_259 == 1 && var_2043 == 3) {
            var_246 = 44;
            var_2043 = 1;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func464();
            return;
        }
        if (var_255 == 1 && var_2043 != 1) {
            var_246 = var_246 - 17;
            if (var_2032 == 0) {
                var_2043 = var_2043 - 1;
            }
            if (var_2032 != 0) {
                var_2043 = 1;
            }
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func464();
            return;
        }
        if (var_255 == 1 && var_2043 == 1) {
            if (var_2032 == 0) {
                var_2043 = 3;
                var_246 = 78;
            }
            if (var_2032 != 0) {
                var_2043 = 3;
                var_246 = 61;
            }
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            yield func464();
            return;
        }
        if (key_Z_on == 1 || key_A_on == 1) {
            if (var_231 == 1) {
                DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
                var_231 = 0;
                // 所持アイテム数が20個以上になる場合
                if (var_224 >= 20) {
                    yield func477(); // アイテムを "拾う" を選択した時に所持アイテムが20個以上になる際の処理
                    return;
                }
                yield func400(); // アイテムを拾う際の動作処理
                var_225 = var_224;
            }
            var_221 = 0;
            open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            if (var_2032 == 0) {
                if (var_2043 == 1) {
                    disc_class = 1;
                }
                if (var_2043 == 2) {
                    disc_class = 2;
                }
                if (var_2043 == 3) {
                    disc_class = 3;
                }
            }
            if (var_2032 == 1) {
                if (var_2043 == 1) {
                    disc_class = 2;
                }
                if (var_2043 == 3) {
                    disc_class = 3;
                }
            }
            if (var_2032 == 2) {
                if (var_2043 == 1) {
                    disc_class = 1;
                }
                if (var_2043 == 3) {
                    disc_class = 3;
                }
            }
            if (var_2032 == 3) {
                if (var_2043 == 1) {
                    disc_class = 1;
                }
                if (var_2043 == 3) {
                    disc_class = 2;
                }
            }
            yield func420(); // 各アイテムを使った際、item_listのIDに応じて効果を割り振り
            return;
        }
        yield func464();
        return;
    });
}

// アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
function func465(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(465);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (key_X_on == 1) {
            var_221 = 1;
            var_234 = 0;
            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            yield func051();
            yield func462(); // アイテムidごとに区分分け関数
            return;
        }
        if (var_259 == 1 && var_2043 == 1) {
            var_246 = var_246 + 17;
            var_2043 = 2;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_255 == 1 && var_2043 == 2) {
            var_246 = var_246 - 17;
            var_2043 = 1;
            DSPLAY(audio_id = 100); // アイテム選択時の効果音
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        if (key_Z_on == 1 || key_A_on == 1) {
            DSPLAY(audio_id = 212); // メニュー画面を開く or 各設定項目を開く時の効果音
            if (var_2043 == 1) {
                var_221 = 0;
                open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                var_231 = 0;
                yield func511(); // 各discごとの発動動作処理 (スタンド能力)
                return;
            }
            if (var_2043 == 2) {
                var_221 = 1;
                var_234 = 0;
                yield func051();
                yield func462(); // アイテムidごとに区分分け関数
                return;
            }
        }
        yield func465(); // アイテムを使用する時の動作処理 (特定アイテムにカーソルを合わせ キー "Z" を押した時の処理)
        return;
    });
}

function func466(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(466);
        var_2046 = 1;
        for (let cnt1 = 0; true; ++cnt1) {
            var_2047 = 2;
            for (let cnt2 = 0; true; ++cnt2) {
                if (var_233[var_2046].Var0 >= 400 && var_233[var_2046].Var0 < 500 && var_233[var_2046].Var0 == var_233[var_2047].Var0 && var_2046 != var_2047 && var_233[var_2046].Var11 == 0 && var_233[var_2047].Var11 == 0) {
                    var_233[var_2046].Var3 = var_233[var_2046].Var3 + var_233[var_2047].Var3;
                    if (var_233[var_2046].Var3 >= 99) {
                        var_233[var_2046].Var3 = 99;
                    }
                    if (var_479[var_2047] == 1) {
                        var_479[var_2047] = 0;
                        var_479[var_2046] = 1;
                        var_250 = var_233[var_2046].Var0;
                    }
                    var_225 = var_2047;
                    yield func433(); // アイテム配列(所持アイテム)初期化関数
                    var_2046 = 1;
                    var_2047 = 1;
                }
                var_2047 = var_2047 + 1;
                if (var_2047 > var_224) {
                    break;
                }
            }
            var_2046 = var_2046 + 1;
            if (var_2046 > var_224) {
                break;
            }
        }
        Y_axis_item_position = 45;
        var_225 = 1;
        return;
    });
}
// Shiftキーを押してアイテムを整理する時の関数
function func467(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(467);
        yield func466();
        if (var_224 == 1) {
            yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        var_1620 = 1;
        var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            var_1623 = 0;
            var_2048 = 0;
            var_2049 = 0;
            if (var_233[var_1620].Var0 >= 900 || var_233[var_1620].Var0 < 800) {
                if (var_233[var_1621].Var0 >= 800 && var_233[var_1621].Var0 < 900) {
                    yield func468();
                }
            }
            if (var_233[var_1620].Var0 >= 800 && var_233[var_1620].Var0 < 900) {
                if (var_233[var_1621].Var0 >= 800 && var_233[var_1621].Var0 < 900) {
                    var_2050 = var_233[var_1620].Var0;
                    var_2051 = var_233[var_1621].Var0;
                    if (var_862[var_2050][0] == 1 && var_862[var_2051][0] == 1 && var_233[var_1620].Var0 > var_233[var_1621].Var0) {
                        yield func468();
                    }
                    if (var_862[var_2050][0] == 0 && var_862[var_2051][0] == 0 && var_233[var_1620].Var0 > var_233[var_1621].Var0) {
                        yield func468();
                    }
                    if (var_862[var_2050][0] == 0 && var_862[var_2051][0] == 1) {
                        yield func468();
                    }
                }
            }
            if (var_1623 == 0) {
                var_1620 = var_1620 + 1;
                var_1621 = var_1621 + 1;
            }
            if (var_1620 >= var_224) {
                break;
            }
        }
        var_1620 = 1;
        var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            var_1623 = 0;
            var_2048 = 0;
            var_2049 = 0;
            if (var_233[var_1620].Var0 >= 750 && var_233[var_1620].Var0 < 800) {
                var_2048 = 1;
            }
            if (var_233[var_1620].Var0 >= 900 && var_233[var_1620].Var0 < 1000) {
                var_2048 = 1;
            }
            if (var_233[var_1621].Var0 >= 750 && var_233[var_1621].Var0 < 800) {
                var_2049 = 1;
            }
            if (var_233[var_1621].Var0 >= 900 && var_233[var_1621].Var0 < 1000) {
                var_2049 = 1;
            }
            if (var_2048 == 0 && var_2049 == 1) {
                yield func468();
            }
            if (var_2048 == 1 && var_2049 == 1) {
                var_2050 = var_233[var_1620].Var0;
                var_2051 = var_233[var_1621].Var0;
                var_2052 = 0;
                if (var_2052 == 0 && var_233[var_1620].Var0 > var_233[var_1621].Var0 && var_233[var_1620].Var0 >= 900 && var_233[var_1621].Var0 >= 900) {
                    yield func468();
                    var_2052 = 1;
                }
                if (var_2052 == 0 && var_233[var_1620].Var0 > var_233[var_1621].Var0 && var_233[var_1620].Var0 < 800 && var_233[var_1621].Var0 < 800) {
                    yield func468();
                    var_2052 = 1;
                }
                if (var_2052 == 0 && var_233[var_1620].Var0 < 800 && var_233[var_1621].Var0 >= 900 && var_233[var_1621].Var0 <= 986) {
                    yield func468();
                    var_2052 = 1;
                }
            }
            if (var_1623 == 0) {
                var_1620 = var_1620 + 1;
                var_1621 = var_1621 + 1;
            }
            if (var_1620 >= var_224) {
                break;
            }
        }
        var_1620 = 1;
        var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            var_1623 = 0;
            if (var_233[var_1620].Var0 >= 750 || var_233[var_1620].Var0 < 700) {
                if (var_233[var_1621].Var0 >= 700 && var_233[var_1621].Var0 < 750) {
                    yield func468();
                }
            }
            if (var_233[var_1620].Var0 >= 700 && var_233[var_1620].Var0 < 750) {
                if (var_233[var_1621].Var0 >= 700 && var_233[var_1621].Var0 < 750) {
                    var_2050 = var_233[var_1620].Var0;
                    var_2051 = var_233[var_1621].Var0;
                    if (var_862[var_2050][0] == 1 && var_862[var_2051][0] == 1 && var_233[var_1620].Var0 > var_233[var_1621].Var0) {
                        yield func468();
                    }
                    if (var_862[var_2050][0] == 0 && var_862[var_2051][0] == 0 && var_233[var_1620].Var0 > var_233[var_1621].Var0) {
                        yield func468();
                    }
                    if (var_862[var_2050][0] == 0 && var_862[var_2051][0] == 1) {
                        yield func468();
                    }
                }
            }
            if (var_1623 == 0) {
                var_1620 = var_1620 + 1;
                var_1621 = var_1621 + 1;
            }
            if (var_1620 >= var_224) {
                break;
            }
        }
        var_1620 = 1;
        var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            var_1623 = 0;
            if (var_233[var_1620].Var0 >= 700 || var_233[var_1620].Var0 < 600) {
                if (var_233[var_1621].Var0 >= 600 && var_233[var_1621].Var0 < 700) {
                    yield func468();
                }
            }
            if (var_233[var_1620].Var0 >= 600 && var_233[var_1620].Var0 < 700) {
                if (var_233[var_1621].Var0 >= 600 && var_233[var_1621].Var0 < 700) {
                    var_2050 = var_233[var_1620].Var0;
                    var_2051 = var_233[var_1621].Var0;
                    if (var_862[var_2050][0] == 1 && var_862[var_2051][0] == 1 && var_233[var_1620].Var0 > var_233[var_1621].Var0) {
                        yield func468();
                    }
                    if (var_862[var_2050][0] == 0 && var_862[var_2051][0] == 0 && var_233[var_1620].Var0 > var_233[var_1621].Var0) {
                        yield func468();
                    }
                    if (var_862[var_2050][0] == 0 && var_862[var_2051][0] == 1) {
                        yield func468();
                    }
                }
            }
            if (var_1623 == 0) {
                var_1620 = var_1620 + 1;
                var_1621 = var_1621 + 1;
            }
            if (var_1620 >= var_224) {
                break;
            }
        }
        var_1620 = 1;
        var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            var_1623 = 0;
            if (var_233[var_1620].Var0 >= 600 || var_233[var_1620].Var0 < 500) {
                if (var_233[var_1621].Var0 >= 500 && var_233[var_1621].Var0 < 600) {
                    yield func468();
                }
            }
            if (var_233[var_1620].Var0 >= 500 && var_233[var_1620].Var0 < 600) {
                if (var_233[var_1621].Var0 >= 500 && var_233[var_1621].Var0 < 600) {
                    var_2050 = var_233[var_1620].Var0;
                    var_2051 = var_233[var_1621].Var0;
                    if (var_862[var_2050][0] == 1 && var_862[var_2051][0] == 1 && var_233[var_1620].Var0 > var_233[var_1621].Var0) {
                        yield func468();
                    }
                    if (var_862[var_2050][0] == 0 && var_862[var_2051][0] == 0 && var_233[var_1620].Var0 > var_233[var_1621].Var0) {
                        yield func468();
                    }
                    if (var_862[var_2050][0] == 0 && var_862[var_2051][0] == 1) {
                        yield func468();
                    }
                }
            }
            if (var_1623 == 0) {
                var_1620 = var_1620 + 1;
                var_1621 = var_1621 + 1;
            }
            if (var_1620 >= var_224) {
                break;
            }
        }
        var_1620 = 1;
        var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            var_1623 = 0;
            if (var_233[var_1620].Var0 >= 500 || var_233[var_1620].Var0 < 400) {
                if (var_233[var_1621].Var0 >= 400 && var_233[var_1621].Var0 < 500) {
                    yield func468();
                }
            }
            if (var_233[var_1620].Var0 >= 400 && var_233[var_1620].Var0 < 500) {
                if (var_233[var_1621].Var0 >= 400 && var_233[var_1621].Var0 < 500) {
                    var_2050 = var_233[var_1620].Var0;
                    var_2051 = var_233[var_1621].Var0;
                    if (var_862[var_2050][0] == 1 && var_862[var_2051][0] == 1 && var_233[var_1620].Var0 > var_233[var_1621].Var0) {
                        yield func468();
                    }
                    if (var_862[var_2050][0] == 0 && var_862[var_2051][0] == 0 && var_233[var_1620].Var0 > var_233[var_1621].Var0) {
                        yield func468();
                    }
                    if (var_862[var_2050][0] == 0 && var_862[var_2051][0] == 1) {
                        yield func468();
                    }
                }
            }
            if (var_1623 == 0) {
                var_1620 = var_1620 + 1;
                var_1621 = var_1621 + 1;
            }
            if (var_1620 >= var_224) {
                break;
            }
        }
        var_1620 = 1;
        var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            var_1623 = 0;
            if (var_233[var_1620].Var0 >= 400 || var_233[var_1620].Var0 < 100) {
                if (var_233[var_1621].Var0 >= 100 && var_233[var_1621].Var0 < 400) {
                    yield func468();
                }
            }
            if (var_233[var_1620].Var0 >= 100 && var_233[var_1620].Var0 < 400) {
                if (var_233[var_1621].Var0 >= 100 && var_233[var_1621].Var0 < 400) {
                    var_2050 = var_233[var_1620].Var0;
                    var_2051 = var_233[var_1621].Var0;
                    if (var_862[var_2050][0] == 1 && var_862[var_2051][0] == 1 && var_233[var_1620].Var0 > var_233[var_1621].Var0) {
                        yield func468();
                    }
                    if (var_862[var_2050][0] == 0 && var_862[var_2051][0] == 0 && var_233[var_1620].Var0 > var_233[var_1621].Var0) {
                        yield func468();
                    }
                    if (var_862[var_2050][0] == 0 && var_862[var_2051][0] == 1) {
                        yield func468();
                    }
                }
            }
            if (var_1623 == 0) {
                var_1620 = var_1620 + 1;
                var_1621 = var_1621 + 1;
            }
            if (var_1620 >= var_224) {
                break;
            }
        }
        var_1620 = 1;
        var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            var_1623 = 0;
            if (var_479[var_1620] == 0 && var_479[var_1621] == 1) {
                yield func468();
            }
            if (var_1623 == 0) {
                var_1620 = var_1620 + 1;
                var_1621 = var_1621 + 1;
            }
            if (var_1620 >= var_224) {
                break;
            }
        }
        var_1620 = 1;
        var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            var_1623 = 0;
            if (var_478[var_1620] == 0 && var_478[var_1621] == 1) {
                yield func468();
            }
            if (var_1623 == 0) {
                var_1620 = var_1620 + 1;
                var_1621 = var_1621 + 1;
            }
            if (var_1620 >= var_224) {
                break;
            }
        }
        var_1620 = 1;
        var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            var_1623 = 0;
            if (var_477[var_1620] == 0 && var_477[var_1621] == 1) {
                yield func468();
            }
            if (var_1623 == 0) {
                var_1620 = var_1620 + 1;
                var_1621 = var_1621 + 1;
            }
            if (var_1620 >= var_224) {
                break;
            }
        }
        var_1620 = 1;
        var_1621 = 2;
        for (let cnt1 = 0; true; ++cnt1) {
            var_1623 = 0;
            if (var_476[var_1620] == 0 && var_476[var_1621] == 1) {
                yield func468();
            }
            if (var_1623 == 0) {
                var_1620 = var_1620 + 1;
                var_1621 = var_1621 + 1;
            }
            if (var_1620 >= var_224) {
                break;
            }
        }
        var_250 = 0;
        var_1956 = 1;
        for (let cnt1 = 0; cnt1 < var_224; ++cnt1) {
            if (var_479[var_1956] == 1) {
                var_250 = var_1956;
            }
            var_1956 = var_1956 + 1;
        }
        item_page_number = 1;
        yield func052();
        yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    });
}

// アイテムを整理した時の配列入れ替え関数
function func468(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(468);
        var_2053 = var_233[var_1620].Var0;
        var_233[var_1620].Var0 = var_233[var_1621].Var0;
        var_233[var_1621].Var0 = var_2053;
        var_2054 = var_233[var_1620].Var3;
        var_233[var_1620].Var3 = var_233[var_1621].Var3;
        var_233[var_1621].Var3 = var_2054;
        var_2055 = var_233[var_1620].Var4;
        var_233[var_1620].Var4 = var_233[var_1621].Var4;
        var_233[var_1621].Var4 = var_2055;
        var_2056 = var_233[var_1620].Var5;
        var_233[var_1620].Var5 = var_233[var_1621].Var5;
        var_233[var_1621].Var5 = var_2056;
        var_2057 = var_233[var_1620].Var6;
        var_233[var_1620].Var6 = var_233[var_1621].Var6;
        var_233[var_1621].Var6 = var_2057;
        var_2058 = var_233[var_1620].Var7;
        var_233[var_1620].Var7 = var_233[var_1621].Var7;
        var_233[var_1621].Var7 = var_2058;
        var_2059 = var_233[var_1620].Var8;
        var_233[var_1620].Var8 = var_233[var_1621].Var8;
        var_233[var_1621].Var8 = var_2059;
        var_2060 = var_233[var_1620].Var11;
        var_233[var_1620].Var11 = var_233[var_1621].Var11;
        var_233[var_1621].Var11 = var_2060;
        var_2061 = var_233[var_1620].Var12;
        var_233[var_1620].Var12 = var_233[var_1621].Var12;
        var_233[var_1621].Var12 = var_2061;
        var_2062 = var_233[var_1620].Var13;
        var_233[var_1620].Var13 = var_233[var_1621].Var13;
        var_233[var_1621].Var13 = var_2062;
        var_2063 = var_233[var_1620].Var14;
        var_233[var_1620].Var14 = var_233[var_1621].Var14;
        var_233[var_1621].Var14 = var_2063;
        var_2064 = var_233[var_1620].Var15;
        var_233[var_1620].Var15 = var_233[var_1621].Var15;
        var_233[var_1621].Var15 = var_2064;
        var_2065 = var_233[var_1620].Var16;
        var_233[var_1620].Var16 = var_233[var_1621].Var16;
        var_233[var_1621].Var16 = var_2065;
        var_2066 = var_233[var_1620].Var17;
        var_233[var_1620].Var17 = var_233[var_1621].Var17;
        var_233[var_1621].Var17 = var_2066;
        var_2067 = var_233[var_1620].Var18;
        var_233[var_1620].Var18 = var_233[var_1621].Var18;
        var_233[var_1621].Var18 = var_2067;
        var_2068 = var_233[var_1620].Var19;
        var_233[var_1620].Var19 = var_233[var_1621].Var19;
        var_233[var_1621].Var19 = var_2068;
        var_2069 = var_233[var_1620].Var20;
        var_233[var_1620].Var20 = var_233[var_1621].Var20;
        var_233[var_1621].Var20 = var_2069;
        var_2070 = var_233[var_1620].Var21;
        var_233[var_1620].Var21 = var_233[var_1621].Var21;
        var_233[var_1621].Var21 = var_2070;
        var_2071 = var_233[var_1620].Var22;
        var_233[var_1620].Var22 = var_233[var_1621].Var22;
        var_233[var_1621].Var22 = var_2071;
        var_2072 = var_233[var_1620].Var23;
        var_233[var_1620].Var23 = var_233[var_1621].Var23;
        var_233[var_1621].Var23 = var_2072;
        var_2073 = var_233[var_1620].Var24;
        var_233[var_1620].Var24 = var_233[var_1621].Var24;
        var_233[var_1621].Var24 = var_2073;
        var_2074 = var_233[var_1620].Var25;
        var_233[var_1620].Var25 = var_233[var_1621].Var25;
        var_233[var_1621].Var25 = var_2074;
        var_2075 = var_233[var_1620].Var26;
        var_233[var_1620].Var26 = var_233[var_1621].Var26;
        var_233[var_1621].Var26 = var_2075;
        var_2076 = var_233[var_1620].Var27;
        var_233[var_1620].Var27 = var_233[var_1621].Var27;
        var_233[var_1621].Var27 = var_2076;
        var_2077 = var_233[var_1620].Var28;
        var_233[var_1620].Var28 = var_233[var_1621].Var28;
        var_233[var_1621].Var28 = var_2077;
        var_2078 = var_233[var_1620].Var29;
        var_233[var_1620].Var29 = var_233[var_1621].Var29;
        var_233[var_1621].Var29 = var_2078;
        var_2079 = var_476[var_1620];
        var_476[var_1620] = var_476[var_1621];
        var_476[var_1621] = var_2079;
        var_2080 = var_477[var_1620];
        var_477[var_1620] = var_477[var_1621];
        var_477[var_1621] = var_2080;
        var_2081 = var_479[var_1620];
        var_479[var_1620] = var_479[var_1621];
        var_479[var_1621] = var_2081;
        var_2082 = var_478[var_1620];
        var_478[var_1620] = var_478[var_1621];
        var_478[var_1621] = var_2082;
        var_1620 = 1;
        var_1621 = 2;
        var_1623 = 1;
        return;
    });
}

// ヤバいものへの "入れる" 選択
function func469(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(469);
        yabaimono_id = var_233[var_1876].Var0;
        if (var_233[var_225].Var0 >= 800 && var_233[var_225].Var0 < 900) {
            open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            var_1866 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "これを入れることはできない";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_231 = 0;
            var_234 = 0;
            var_2040 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        // No = 801:形兆のDISCｹｰｽ、No = 802:ﾄﾗｸﾀｰのﾀｲﾔの時
        if (var_233[var_1876].Var0 == 801 || var_233[var_1876].Var0 == 802) {
            var_2084 = 0;
            if (belongings_item_list < 100) {
                var_2084 = 1;
            }
            if (belongings_item_list >= 600 && belongings_item_list != 700) {
                var_2084 = 1;
            }
            if (var_2084 == 1) {
                open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                var_1866 = 0;
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "DISCしか入れることはできない";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_231 = 0;
                var_234 = 0;
                var_2040 = 0;
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
        }
        if (var_233[var_1876].Var0 == 803) {
            var_2084 = 0;
            if (belongings_item_list < 600 || belongings_item_list >= 700) {
                var_2084 = 1;
            }
            if (var_2084 == 1) {
                open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                var_1866 = 0;
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "食べ物しか入れることはできない";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_231 = 0;
                var_234 = 0;
                var_2040 = 0;
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
        }
        if (var_233[var_1876].Var0 == 804) {
            var_2084 = 1;
            if (belongings_item_list >= 900 && belongings_item_list < 1000) {
                var_2084 = 0;
            }
            if (belongings_item_list >= 750 && belongings_item_list < 800) {
                var_2084 = 0;
            }
            if (var_2084 == 1) {
                open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                var_1866 = 0;
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "本しか入れることはできない";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_231 = 0;
                var_234 = 0;
                var_2040 = 0;
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
        }
        if (var_233[var_1876].Var7 == 0) {
            open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            var_1866 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "これ以上入れられない";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_231 = 0;
            var_234 = 0;
            var_2040 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_2084 = 0;
        if (var_357 != 0 && var_225 != 0) {
            yield func426();
            if (var_553 == var_225 && var_233[var_225].Var12 == 1) {
                var_2084 = 1;
            }
        }
        if (var_358 != 0 && var_225 != 0) {
            yield func427();
            if (var_554 == var_225 && var_233[var_225].Var12 == 1) {
                var_2084 = 1;
            }
        }
        if (var_215 != 0 && var_225 != 0) {
            yield func428();
            if (var_555 == var_225 && var_233[var_225].Var12 == 1) {
                var_2084 = 1;
            }
        }
        if (var_2084 == 1) {
            open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            var_1866 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "呪われていて外せない！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_231 = 0;
            var_234 = 0;
            var_2040 = 0;
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        var_2085 = var_233[var_225].Var0;
        disc_rarity = var_233[var_225].Var13;
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        if (var_2040 == 1) {
            yield func479();
        }
        var_233[var_1876].Var8 = var_233[var_1876].Var8 + 1;
        var_233[var_1876].Var7 = var_233[var_1876].Var7 - 1;
        if (var_233[var_1876].Var11 == 1 && yabaimono_id >= 805) {
            count_buying_price = count_buying_price + 100;
        }
        var_683 = var_233[var_1876].Var8;
        var_486[var_682][var_683][0] = var_233[var_225].Var0;
        var_486[var_682][var_683][3] = var_233[var_225].Var3;
        var_486[var_682][var_683][4] = var_233[var_225].Var4;
        var_486[var_682][var_683][5] = var_233[var_225].Var5;
        var_486[var_682][var_683][6] = var_233[var_225].Var6;
        var_486[var_682][var_683][11] = var_233[var_225].Var11;
        var_486[var_682][var_683][12] = var_233[var_225].Var12;
        var_486[var_682][var_683][13] = var_233[var_225].Var13;
        var_486[var_682][var_683][14] = var_233[var_225].Var14;
        var_486[var_682][var_683][15] = var_233[var_225].Var15;
        var_486[var_682][var_683][16] = var_233[var_225].Var16;
        var_486[var_682][var_683][17] = var_233[var_225].Var17;
        var_486[var_682][var_683][18] = var_233[var_225].Var18;
        var_486[var_682][var_683][19] = var_233[var_225].Var19;
        var_486[var_682][var_683][20] = var_233[var_225].Var20;
        var_486[var_682][var_683][21] = var_233[var_225].Var21;
        var_486[var_682][var_683][22] = var_233[var_225].Var22;
        var_486[var_682][var_683][23] = var_233[var_225].Var23;
        var_486[var_682][var_683][24] = var_233[var_225].Var24;
        var_486[var_682][var_683][25] = var_233[var_225].Var25;
        var_486[var_682][var_683][26] = var_233[var_225].Var26;
        var_486[var_682][var_683][27] = var_233[var_225].Var27;
        var_486[var_682][var_683][28] = var_233[var_225].Var28;
        var_486[var_682][var_683][29] = var_233[var_225].Var29;
        yield func470(); //disc同士の合成関数(dioの骨)
        var_1977 = 0;
        if (var_476[var_225] == 1) {
            var_476[var_225] = 0;
            var_357 = 0;
            var_580 = var_580 - var_894;
            var_894 = 0;
            yield func494();
            var_1977 = 1;
        }
        if (var_477[var_225] == 1) {
            var_477[var_225] = 0;
            var_358 = 0;
            var_581 = var_581 - var_895;
            var_895 = 0;
            yield func494();
            var_1977 = 1;
        }
        if (var_479[var_225] == 1) {
            var_479[var_225] = 0;
            var_410 = 0;
            var_250 = 0;
            var_1977 = 1;
        }
        if (var_478[var_225] == 1) {
            var_478[var_225] = 0;
            var_215 = 0;
            yield func494();
            var_1977 = 1;
        }
        if (var_1977 == 1 && yabaimono_id != 805) {
            belongings_item_list = var_2085;
            yield func106(); // BGM選曲呼び出し割り振り
        }
        belongings_item_list = var_2085;
        yield func492(); // アイテムリスト呼び出し
        if (var_2040 == 0) {
            yield func433(); // アイテム配列(所持アイテム)初期化関数
        }
        DSPLAY(audio_id = 130);
        var_1866 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (yabaimono_id == 801) {
            comments_row1 = "" + item_name + "を";
            comments_row2 = "形兆のDISCｹｰｽに入れた";
        }
        if (yabaimono_id == 802) {
            comments_row1 = "" + item_name + "を";
            comments_row2 = "ﾄﾗｸﾀｰのﾀｲﾔに入れた";
        }
        if (yabaimono_id == 803) {
            comments_row1 = "" + item_name + "を";
            comments_row2 = "ｻﾝｼﾞｪﾙﾏﾝの紙袋に入れた";
        }
        if (yabaimono_id == 804) {
            comments_row1 = "" + item_name + "を";
            comments_row2 = "露伴のｶﾊﾞﾝに入れた";
        }
        if (yabaimono_id >= 805 || yabaimono_id == 800) {
            if (var_862[yabaimono_id][0] == 0) {
                comments_row1 = "" + item_name + "を";
                comments_row2 = "ヤバイものに入れた";
            }
            if (var_862[yabaimono_id][0] == 1) {
                if (yabaimono_id == 800) {
                    comments_row1 = "" + item_name + "を";
                    comments_row2 = "紙の中に入れた";
                }
                if (yabaimono_id == 805) {
                    comments_row1 = "" + item_name + "を";
                    comments_row2 = "ｸﾞｯﾁｮの死体に入れた";
                }
                if (yabaimono_id == 806) {
                    comments_row1 = "" + item_name + "を";
                    comments_row2 = "ｶﾙﾈの死体に入れた";
                }
                if (yabaimono_id == 807) {
                    comments_row1 = "" + item_name + "を";
                    comments_row2 = "DIOの骨に入れた";
                }
                if (yabaimono_id == 808) {
                    comments_row1 = "" + item_name + "を";
                    comments_row2 = "聖人の眼球に入れた";
                }
                if (yabaimono_id == 809) {
                    comments_row1 = "" + item_name + "を";
                    comments_row2 = "聖人の左腕に入れた";
                }
                if (yabaimono_id == 815) {
                    comments_row1 = "" + item_name + "を";
                    comments_row2 = "ｴﾙﾒｪｽのｱﾚに入れた";
                }
                if (yabaimono_id == 816) {
                    comments_row1 = "" + item_name + "を";
                    comments_row2 = "ﾐｷﾀｶのｶﾊﾞﾝに入れた";
                }
                if (yabaimono_id == 817) {
                    comments_row1 = "" + item_name + "を";
                    comments_row2 = "乳母車に入れた";
                }
                if (yabaimono_id == 818) {
                    comments_row1 = "" + item_name + "を";
                    comments_row2 = "送信壷に入れた";
                }
            }
        }
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func051();
        if (yabaimono_id == 805 && var_2085 == 631 && var_683 >= 2) {
            var_2086 = var_683 - 1;
            if (var_486[var_682][var_2086][0] >= 600 && var_486[var_682][var_2086][0] <= 605) {
                yield func472(); // グッチョの死体にピッツァ&トマトチーズのサラダを入れた時の動作処理
            }
        }
        yield func471();
        var_213 = 1;
        if (var_2040 == 1) {
            var_2040 = 0;
        }
        if (var_234 == 1) {
            var_2087 = var_77[var_66][var_67];
            var_78[var_2087].Var8 = var_233[0].Var8;
            var_78[var_2087].Var7 = var_233[0].Var7;
        }
        if (var_225 > var_1876) {
            var_226 = var_1876;
        }
        if (var_225 < var_1876) {
            var_226 = var_1876 - 1;
        }
        if (var_225 == 0) {
            var_226 = var_1876;
        }
        var_231 = 0;
        var_234 = 0;
        var_2040 = 0;
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// ヤバいものへアイテムを入れた際の動作処理
function func470(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(470);

        // No = 805 グッチョの死体の動作処理
        // 入れたdiscに応じてBGMがかかる
        if (yabaimono_id == 805) {
            yield func115(); // グッチョの死体へdiscを入れた際の選曲処理
            return;
        }

        // No = 806 カルネの死体の動作処理
        // 入れたアイテムが消える
        if (yabaimono_id == 806) {
            if (var_233[var_225].Var11 == 1) {
                belongings_item_list = var_233[var_225].Var0;
                yield func492(); // アイテムリスト呼び出し
                var_482 = 0;
                var_482 = (var_233[var_225].Var3 + var_233[var_225].Var4) * 50;
                if (var_233[var_225].Var19 > 1) {
                    var_482 = var_233[var_225].Var19 * 500 + var_482;
                }
                count_buying_price = count_buying_price + buying_price + var_482;
            }
            var_233[var_1876].Var8 = var_233[var_1876].Var8 - 1;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                var_486[var_682][var_683][cnt2] = 0;
            }
            return;
        }

        // No = 818 は無い。なんの機能？？
        if (yabaimono_id == 818) {
            if (var_407 == 1 && var_536 == 1) {
                yield func912();
                if (var_233[var_225].Var11 == 1) {
                    belongings_item_list = var_233[var_225].Var0;
                    yield func492(); // アイテムリスト呼び出し
                    var_482 = 0;
                    var_482 = (var_233[var_225].Var3 + var_233[var_225].Var4) * 50;
                    if (var_233[var_225].Var19 > 1) {
                        var_482 = var_233[var_225].Var19 * 500 + var_482;
                    }
                    count_buying_price = count_buying_price + buying_price + var_482;
                }
                var_233[var_1876].Var8 = var_233[var_1876].Var8 - 1;
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    var_486[var_682][var_683][cnt3] = 0;
                }
            }
            return;
        }
        // 
        if (yabaimono_id == 815 && var_233[var_1876].Var7 >= 1) {
            var_2088 = 0;
            var_233[var_1876].Var8 = var_233[var_1876].Var8 + 1;
            var_233[var_1876].Var7 = var_233[var_1876].Var7 - 1;
            var_2089 = var_683 + 1;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                var_486[var_682][var_2089][cnt2] = var_486[var_682][var_683][cnt2];
            }
            return;
        }
        if (yabaimono_id == 807) {
            if (var_486[var_682][var_683][0] < 100 || var_486[var_682][var_683][0] >= 400) {
                return;
            }
            if (var_486[var_682][var_683][0] == 100 || var_486[var_682][var_683][0] == 398 || var_486[var_682][var_683][0] == 108 || var_486[var_682][var_683][0] == 110 || var_486[var_682][var_683][0] == 113 || var_486[var_682][var_683][0] == 118 || var_486[var_682][var_683][0] == 123) {
                return;
            }
            var_2089 = var_683 - 1;
            if (var_2089 <= 0) {
                return;
            }
            var_2090 = var_2089;
            var_2091 = var_683;
            if (var_486[var_682][var_2089][0] < 100 || var_486[var_682][var_2089][0] >= 400) {
                return;
            }
            base_disc_list = var_486[var_682][var_2090][0];
            with_disc_list = var_486[var_682][var_2091][0];
            belongings_item_list = var_486[var_682][var_2090][0];
            yield func492(); // アイテムリスト呼び出し
            var_2092 = var_486[var_682][var_2091][19];
            var_2093 = 20;
            if (var_486[var_682][var_2090][5] != 0) {
                for (let cnt3 = 0; cnt3 < var_2092; ++cnt3) {
                    var_2094 = 20;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        var_2095 = 0;
                        if (var_486[var_682][var_2090][var_2094] == var_486[var_682][var_2091][var_2093]) {
                            var_2095 = 1;
                            break;
                        }
                        if (var_486[var_682][var_2090][var_2094] == 0) {
                            var_2096 = var_2094;
                            break;
                        }
                        var_2094 = var_2094 + 1;
                    }
                    if (var_2095 == 0) {
                        var_486[var_682][var_2090][var_2096] = var_486[var_682][var_2091][var_2093];
                        var_486[var_682][var_2090][19] = var_486[var_682][var_2090][19] + 1;
                        var_486[var_682][var_2090][5] = var_486[var_682][var_2090][5] - 1;
                    }
                    if (var_486[var_682][var_2090][5] == 0) {
                        break;
                    }
                    var_2093 = var_2093 + 1;
                }
            }
            if (dangeon_number != 5) {
                var_486[var_682][var_2090][4] = var_486[var_682][var_2090][4] + var_486[var_682][var_2091][4];
                if (var_486[var_682][var_2090][4] >= 99) {
                    var_486[var_682][var_2090][4] = 99;
                }
            }
            if (var_486[var_682][var_2091][12] == 1 || var_486[var_682][var_2090][12] == 1) {
                var_486[var_682][var_2090][12] = 1;
            }
            if (var_486[var_682][var_2091][12] == 2 || var_486[var_682][var_2090][12] == 2) {
                var_486[var_682][var_2090][12] = 2;
            }
            if (var_486[var_682][var_2091][11] == 1) {
                belongings_item_list = var_486[var_682][var_2091][0];
                yield func492(); // アイテムリスト呼び出し
                var_106 = 1;
                var_482 = 0;
                var_482 = (var_486[var_682][var_2091][3] + var_486[var_682][var_2091][4]) * 50;
                if (var_486[var_682][var_2091][19] > 1) {
                    var_482 = var_486[var_682][var_2091][19] * 500 + var_482;
                }
                buying_price = buying_price + var_482;
                count_buying_price = count_buying_price + buying_price;
            }
            var_486[var_682][var_2090][14] = 1;
            belongings_item_list = var_486[var_682][var_2090][0];
            var_2097 = 0;
            // No = 100:ｽﾀｰ･ﾌﾟﾗﾁﾅのDISC、No = 111:ｻﾞ･ﾜｰﾙﾄﾞのDISC
            if (base_disc_list == 100 && with_disc_list == 111) {
                var_2097 = 1;
                // No = 398:ｽﾀﾌﾟﾗｻﾞﾜｰﾙﾄﾞのDISC
                var_486[var_682][var_2090][0] = 398;
                var_862[398][0] = 1;
            }
            // No = 112:ｷﾗｰ･ｸｨｰﾝのDISC、No = 204:ｼｱｰﾊｰﾄｱﾀｯｸのDISC
            if (base_disc_list == 112 && with_disc_list == 204) {
                var_2097 = 2;
                // No = 395:ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISC
                var_486[var_682][var_2090][0] = 395;
                var_862[395][0] = 1;
                var_486[var_682][var_2090][20] = 395;
            }
            // No = 304:ｳｪｻﾞｰﾘﾎﾟｰﾄのDISC、No = 114:ﾎﾜｲﾄｽﾈｲｸのDISC
            if (base_disc_list == 304 && with_disc_list == 114) {
                var_2097 = 4;
                // No = 397:ﾍﾋﾞｰ･ｳｪｻﾞｰのDISC
                var_486[var_682][var_2090][0] = 397;
                var_862[397][0] = 1;
                var_486[var_682][var_2090][20] = 397;
            }
            // No = 114:ﾎﾜｲﾄｽﾈｲｸのDISC
            if (base_disc_list == 114) {
                var_2098 = 21;
                var_2099 = 0;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    // No = 107:ﾃﾞｽ･13のDISC、No = 116:ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙのDISC、No = 201:ｲｴﾛｰﾃﾝﾊﾟﾗﾝｽのDISC、No = 202:ﾎﾜｲﾄｱﾙﾊﾞﾑのDISC
                    if (var_486[var_682][var_2090][var_2098] == 107 || var_486[var_682][var_2090][var_2098] == 116 || var_486[var_682][var_2090][var_2098] == 201 || var_486[var_682][var_2090][var_2098] == 202) {
                        var_2099++;
                    }
                    var_2098++;
                }
                if (var_2099 >= 4) {
                    // No = 396:ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝのDISC
                    var_486[var_682][var_2090][0] = 396;
                    var_862[396][0] = 1;
                    var_486[var_682][var_2090][20] = 396;
                }
            }
            if (var_486[var_682][var_2091][11] == 1) {
                var_106 = 1;
                belongings_item_list = var_486[var_682][var_2091][0];
                yield func492(); // アイテムリスト呼び出し
                var_482 = 0;
                var_482 = (var_486[var_682][var_2091][3] + var_486[var_682][var_2091][4]) * 50;
                if (var_486[var_682][var_2091][19] > 1) {
                    var_482 = var_486[var_682][var_2091][19] * 500 + var_482;
                }
                buying_price = buying_price + var_482;
                count_buying_price = count_buying_price + buying_price;
            }
            var_2100 = var_225;
            var_225 = var_2091;
            yield func434();
            var_233[var_1876].Var7 = var_233[var_1876].Var7 - 1;
            var_225 = var_2100;
            return;
        }
        return;
    });
}
function func471(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(471);
        if (yabaimono_id == 808) {
            var_486[var_682][var_683][14] = 1;
            var_2101 = var_486[var_682][var_683][0];
            var_862[var_2101][0] = 1;
        }
        if (yabaimono_id == 809) {
            if (var_486[var_682][var_683][12] == 1) {
                var_486[var_682][var_683][12] = 0;
            }
            if (var_486[var_682][var_683][15] == 1 || var_486[var_682][var_683][15] == 2) {
                var_486[var_682][var_683][15] = 0;
            }
            if (var_486[var_682][var_683][0] == 570) {
                if (var_486[var_682][var_683][11] == 1) {
                    count_buying_price = count_buying_price + 500;
                }
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    var_486[var_682][var_683][cnt3] = 0;
                }
                var_486[var_682][var_683][0] = 414;
                var_486[var_682][var_683][3] = 5;
                var_862[414][0] = 1;
            }
        }
        if (yabaimono_id == 816) {
            if (var_486[var_682][var_683][11] == 1) {
                belongings_item_list = var_486[var_682][var_683][0];
                yield func492(); // アイテムリスト呼び出し
                var_482 = 0;
                var_482 = (var_486[var_682][var_683][3] + var_486[var_682][var_683][4]) * 50;
                if (var_486[var_682][var_683][19] > 1) {
                    var_482 = var_486[var_682][var_683][19] * 500 + var_482;
                }
                count_buying_price = count_buying_price + buying_price + var_482;
            }
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                if (cnt2 != 11) {
                    var_486[var_682][var_683][cnt3] = 0;
                }
            }
            var_866 = 0;
            var_1736 = rnd(100);
            if (var_1736 >= 0 && var_1736 < 15) {
                var_1735 = 6;
            }
            if (var_1736 >= 15 && var_1736 < 32) {
                var_1735 = 1;
            }
            if (var_1736 >= 32 && var_1736 < 53) {
                var_1735 = 5;
            }
            if (var_1736 >= 53 && var_1736 < 71) {
                var_1735 = 3;
            }
            if (var_1736 >= 71 && var_1736 < 76) {
                var_1735 = 5;
            }
            if (var_1736 >= 76 && var_1736 < 86) {
                var_1735 = 4;
            }
            if (var_1736 >= 86 && var_1736 < 100) {
                var_1735 = 9;
            }
            if (var_262 == 1) {
                // No = 1 なので、ホテルの外
                dangeon_number = 1;
            }
            yield func385(); // 各ダンジョンごとの出現アイテム管理
            if (var_262 == 1) {
                // No = 0 なので、拠点(ホテル、亀、)
                dangeon_number = 0;
            }
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                var_486[var_682][var_683][cnt2] = var_78[var_866]["Var" + cnt2];
            }
            var_486[var_682][var_683][11] = 0;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                var_78[0]["Var" + cnt2] = 0;
            }
            return;
        }
        return;
    });
}
// グッチョの死体にピッツァ&トマトチーズのサラダを入れた時の動作処理
function func472(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(472);
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "オホン";
        comments_row2a = "";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ン";
        comments_row2a = "";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ピザ・モッツァレラ♪」";
        comments_row2a = "";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ピザ・モッツァレラ♪」";
        comments_row2a = "";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「レラレラレラレラ♪」";
        comments_row2a = "「レラレラレラレラ♪」";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094();
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ピザ・モッツァレラ♪」";
        comments_row2a = "";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        return;
    });
}
function func473(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(473);
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        var_1866 = 0;
        if (var_233[var_225].Var0 != 851 && var_233[var_225].Var7 == 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "これ以上押せないようだ。";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            var_231 = 0;
            var_234 = 0;
            var_2040 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        if (var_233[var_225].Var0 == 851) {
            var_1916 = var_233[var_225].Var6;
            if (var_486[var_1916][1][15] == 0 || var_233[var_225].Var8 == 0) {
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "何も入っていないようだ。";
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                var_198 = 1;
                var_300 = 0;
                yield func047();
                var_231 = 0;
                var_234 = 0;
                var_2040 = 0;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                return;
            }
        }
        if (var_233[var_225].Var0 != 851) {
            var_233[var_225].Var7 = var_233[var_225].Var7 - 1;
            if (var_233[var_225].Var11 == 1) {
                count_buying_price = count_buying_price + 100;
            }
            if (var_234 == 1) {
                var_2087 = var_77[var_66][var_67];
                var_78[var_2087].Var7 = var_233[0].Var7;
            }
        }
        DSPLAY(audio_id = 221);
        if (var_233[var_225].Var0 == 850) {
            var_1940 = var_199;
            var_199 = 2;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "パウッ！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 2;
            var_747 = 1;
            DSPLAY(audio_id = 103); // 殴られた時の効果音
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
            DSPLAY(audio_id = 182);
            var_1299 = 1;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            if (var_130 != 0) {
                var_389 = 2;
                var_134 = 1;
                var_211 = 1;
                var_747 = 1;
                DSPLAY(audio_id = 105);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "吸血鬼体質で波紋呼吸をしてしまった！";
                comments_row2a = "";
                yield func050();
                yield func047();
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "酷いダメージを受けて回復しない！";
                comments_row2a = "";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_389 = 0;
            }
            if (var_130 == 0) {
                if (var_211 != var_352) {
                    DSPLAY(audio_id = 143);
                    var_211 = var_352;
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "ＨＰが回復した！";
                    comments_row2a = "";
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    yield func340(); // キー入力による選択処理
                }
                yield func457();
                var_125 = 1;
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "吸血鬼に強くなった！";
                comments_row2a = "";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
            var_199 = var_1940;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        if (var_233[var_225].Var0 == 851) {
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
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_862[851][0] == 0) {
                comments_row1 = "何かを押した。";
            }
            if (var_862[851][0] == 1) {
                comments_row1 = "ビンの中を押した。";
            }
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_71[var_2102][var_2103] == 0 || var_71[var_2102][var_2103] == 13 || var_82[var_2102][var_2103] != 0) {
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "何かが飛び出そうになったが";
                comments_row2a = "出てこなかった。";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
            }
            if (var_71[var_2102][var_2103] != 0 && var_71[var_2102][var_2103] != 13 && var_82[var_2102][var_2103] == 0) {
                var_1845 = 4;
                var_1916 = var_233[var_225].Var6;
                var_1918 = var_486[var_1916][1][15];
                var_1919 = var_486[var_1916][1][18];
                yield func556();
                var_1918 = 0;
                var_1845 = 0;
                var_1584 = (var_83[var_673].Var1 - var_66 + 4) * 40;
                var_1585 = (var_83[var_673].Var2 - var_67 + 4) * 40;
                var_271 = 1;
                var_1583 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    var_300 = 0;
                    yield func337(); // メッセージ関係呼び出し
                    var_1583++;
                }
                var_271 = 0;
                var_1583 = 0;
                var_486[var_1916][1][15] = 0;
                var_1957 = 0;
                var_447 = 1;
                var_449 = 2;
                var_2104 = var_233[var_225].Var7 + var_233[var_225].Var8;
                for (let cnt3 = 0; cnt3 < var_2104; ++cnt3) {
                    if (var_486[var_1916][var_447][15] == 0) {
                        var_486[var_1916][var_447][15] = var_486[var_1916][var_449][15];
                        var_486[var_1916][var_447][18] = var_486[var_1916][var_449][18];
                        var_1957 = 1;
                    }
                    if (var_1957 == 1) {
                        var_486[var_1916][var_447][15] = var_486[var_1916][var_449][15];
                        var_486[var_1916][var_447][18] = var_486[var_1916][var_449][18];
                    }
                    var_447 = var_447 + 1;
                    var_449 = var_449 + 1;
                }
                var_2105 = var_2104;
                var_486[var_1916][var_2105][15] = 0;
                var_486[var_1916][var_2105][18] = 0;
                var_233[var_225].Var8 = var_233[var_225].Var8 - 1;
                if (var_233[var_225].Var11 == 1) {
                    count_buying_price = count_buying_price + 100;
                }
                if (var_234 == 1) {
                    var_2087 = var_77[var_66][var_67];
                    var_78[var_2087].Var7 = var_233[0].Var7;
                    var_78[var_2087].Var8 = var_233[0].Var8;
                }
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
            }
        }
        if (var_233[var_225].Var0 == 852) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_862[852][0] == 0) {
                comments_row1 = "何かを押した。";
            }
            if (var_862[852][0] == 1) {
                comments_row1 = "ランドセルを押した。";
            }
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "ギャ――ス！";
            comments_row2a = "";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_231 = 0;
            var_234 = 0;
            var_2040 = 0;
            var_2106 = 2;
            var_1213 = 1;
            yield func647(); // 射撃攻撃動作処理
            return;
        }
        if (var_233[var_225].Var0 == 853) {
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
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_862[853][0] == 0) {
                comments_row1 = "何かを押した。";
            }
            if (var_862[853][0] == 1) {
                comments_row1 = "サーフィス人形を押した。";
            }
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_71[var_2102][var_2103] == 0 || var_71[var_2102][var_2103] == 13 || var_82[var_2102][var_2103] != 0) {
                var_2108 = 0;
            }
            if (var_71[var_2102][var_2103] != 0 && var_71[var_2102][var_2103] != 13 && var_82[var_2102][var_2103] == 0) {
                var_2108 = 1;
            }
            if (var_2108 == 0) {
                var_2109 = 1;
                var_1845 = 1;
                yield func556();
                var_2109 = 0;
                var_1845 = 0;
                if (var_2110 == 1) {
                    var_2107 = 1;
                    var_199 = var_2111;
                }
                if (var_2110 == 0) {
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "十分なスペースがないため";
                    comments_row2a = "うまくいかなかった。";
                    yield func050();
                    var_198 = 1;
                    var_300 = 0;
                    yield func047();
                    var_231 = 0;
                    var_234 = 0;
                    var_2040 = 0;
                    var_217 = 1;
                    yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return;
                }
            }
            if (var_2108 == 1) {
                var_2109 = 1;
                var_1845 = 4;
                yield func556();
                var_2109 = 0;
                var_1845 = 0;
                var_2107 = 1;
            }
            if (var_2107 == 1) {
                var_439 = var_673;
                var_83[var_439].Var11 = 1;
                var_83[var_439].Var5 = 2;
                var_271 = 1;
                var_444 = 1;
                for (let cnt3 = 0; cnt3 < 25; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                    var_444 = var_444 + 1;
                    var_198 = 1;
                    var_300 = 0;
                }
                var_271 = 0;
                var_444 = 0;
                var_83[var_439].Var11 = 0;
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "ｺﾋﾟｰ人形が現れた。";
                comments_row2a = "";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        if (var_233[var_225].Var0 == 854) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_862[854][0] == 0) {
                comments_row1 = "何かを押した。";
            }
            if (var_862[854][0] == 1) {
                comments_row1 = "聖人の脊椎を押した。";
            }
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_234 = 0;
            if (var_262 == 0) {
                var_231 = 0;
                var_234 = 0;
                var_2040 = 0;
                var_2112 = 1;
                DSPLAY(audio_id = 190);
                yield func499();
            }
            if (var_262 != 0) {
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "ここでは何も起こらなかった。";
                comments_row2a = "";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
            }
        }
        var_231 = 0;
        var_234 = 0;
        var_2040 = 0;
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}

function func474(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(474);
        // 所持アイテム数が20個以上になる場合
        if (var_224 >= 20) {
            open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            var_1866 = 0;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "持ち物がいっぱいで出せない";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_234 == 1) {
                var_234 = 0;
            }
            var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
            return;
        }
        // 所持アイテム数が20個未満であれば場合
        // アイテムリスト更新のための配列呼び出し？？
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        var_1866 = 0;
        var_224 = var_224 + 1;
        var_683 = var_233[var_1876].Var8;
        var_233[var_224].Var0 = var_486[var_682][var_225][0];
        var_233[var_224].Var3 = var_486[var_682][var_225][3];
        var_233[var_224].Var4 = var_486[var_682][var_225][4];
        var_233[var_224].Var5 = var_486[var_682][var_225][5];
        var_233[var_224].Var6 = var_486[var_682][var_225][6];
        var_233[var_224].Var11 = var_486[var_682][var_225][11];
        var_233[var_224].Var12 = var_486[var_682][var_225][12];
        var_233[var_224].Var13 = var_486[var_682][var_225][13];
        var_233[var_224].Var14 = var_486[var_682][var_225][14];
        var_233[var_224].Var15 = var_486[var_682][var_225][15];
        var_233[var_224].Var16 = var_486[var_682][var_225][16];
        var_233[var_224].Var17 = var_486[var_682][var_225][17];
        var_233[var_224].Var18 = var_486[var_682][var_225][18];
        var_233[var_224].Var19 = var_486[var_682][var_225][19];
        var_233[var_224].Var20 = var_486[var_682][var_225][20];
        var_233[var_224].Var21 = var_486[var_682][var_225][21];
        var_233[var_224].Var22 = var_486[var_682][var_225][22];
        var_233[var_224].Var23 = var_486[var_682][var_225][23];
        var_233[var_224].Var24 = var_486[var_682][var_225][24];
        var_233[var_224].Var25 = var_486[var_682][var_225][25];
        var_233[var_224].Var26 = var_486[var_682][var_225][26];
        var_233[var_224].Var27 = var_486[var_682][var_225][27];
        var_233[var_224].Var28 = var_486[var_682][var_225][28];
        var_233[var_224].Var29 = var_486[var_682][var_225][29];
/*
        var_233[var_224].Var0 = JSON.parse(JSON.stringify(var_486[var_682][var_225][0]));
        var_233[var_224].Var3 = JSON.parse(JSON.stringify(var_486[var_682][var_225][3]));
        var_233[var_224].Var4 = JSON.parse(JSON.stringify(var_486[var_682][var_225][4]));
        var_233[var_224].Var5 = JSON.parse(JSON.stringify(var_486[var_682][var_225][5]));
        var_233[var_224].Var6 = JSON.parse(JSON.stringify(var_486[var_682][var_225][6]));
        var_233[var_224].Var11 = JSON.parse(JSON.stringify(var_486[var_682][var_225][11]));
        var_233[var_224].Var12 = JSON.parse(JSON.stringify(var_486[var_682][var_225][12]));
        var_233[var_224].Var13 = JSON.parse(JSON.stringify(var_486[var_682][var_225][13]));
        var_233[var_224].Var14 = JSON.parse(JSON.stringify(var_486[var_682][var_225][14]));
        var_233[var_224].Var15 = JSON.parse(JSON.stringify(var_486[var_682][var_225][15]));
        var_233[var_224].Var16 = JSON.parse(JSON.stringify(var_486[var_682][var_225][16]));
        var_233[var_224].Var17 = JSON.parse(JSON.stringify(var_486[var_682][var_225][17]));
        var_233[var_224].Var18 = JSON.parse(JSON.stringify(var_486[var_682][var_225][18]));
        var_233[var_224].Var19 = JSON.parse(JSON.stringify(var_486[var_682][var_225][19]));
        var_233[var_224].Var20 = JSON.parse(JSON.stringify(var_486[var_682][var_225][20]));
        var_233[var_224].Var21 = JSON.parse(JSON.stringify(var_486[var_682][var_225][21]));
        var_233[var_224].Var22 = JSON.parse(JSON.stringify(var_486[var_682][var_225][22]));
        var_233[var_224].Var23 = JSON.parse(JSON.stringify(var_486[var_682][var_225][23]));
        var_233[var_224].Var24 = JSON.parse(JSON.stringify(var_486[var_682][var_225][24]));
        var_233[var_224].Var25 = JSON.parse(JSON.stringify(var_486[var_682][var_225][25]));
        var_233[var_224].Var26 = JSON.parse(JSON.stringify(var_486[var_682][var_225][26]));
        var_233[var_224].Var27 = JSON.parse(JSON.stringify(var_486[var_682][var_225][27]));
        var_233[var_224].Var28 = JSON.parse(JSON.stringify(var_486[var_682][var_225][28]));
        var_233[var_224].Var29 = JSON.parse(JSON.stringify(var_486[var_682][var_225][29]));
        */
        disc_rarity = var_233[var_224].Var13;
        // ここまで？？
        yield func492(); // アイテムリスト呼び出し
        yield func433(); // アイテム配列(所持アイテム)初期化関数
        var_1866 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + item_name + "を出した";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func051();
        var_213 = 1;
        var_226 = var_1876;
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}
// ペットショップのdisc??
function func475(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(475);
        var_2113 = var_77[var_66][var_67];
        // No = 579 ペットショップのdiscであれば
        if (belongings_item_list == 579) {
            var_2113 = var_77[var_236][var_237];
        }
        var_78[var_2113].Var0 = var_233[0].Var0;
        var_78[var_2113].Var3 = var_233[0].Var3;
        var_78[var_2113].Var4 = var_233[0].Var4;
        var_78[var_2113].Var5 = var_233[0].Var5;
        var_78[var_2113].Var6 = var_233[0].Var6;
        var_78[var_2113].Var7 = var_233[0].Var7;
        var_78[var_2113].Var8 = var_233[0].Var8;
        var_78[var_2113].Var9 = var_233[0].Var9;
        var_78[var_2113].Var11 = var_233[0].Var11;
        var_78[var_2113].Var12 = var_233[0].Var12;
        var_78[var_2113].Var13 = var_233[0].Var13;
        var_78[var_2113].Var14 = var_233[0].Var14;
        var_78[var_2113].Var15 = var_233[0].Var15;
        var_78[var_2113].Var16 = var_233[0].Var16;
        var_78[var_2113].Var17 = var_233[0].Var17;
        var_78[var_2113].Var18 = var_233[0].Var18;
        return;
    });
}


// 亀の倉庫へアイテムを保管する際、アイテムデータ配列を保存する処理？
function func476(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(476);
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        var_1866 = 0;
        var_683 = var_233[var_1876].Var8;
        belongings_item_list = var_486[var_682][var_225][0];
        disc_rarity = var_486[var_682][var_225][13];
        yield func492(); // アイテムリスト呼び出し
        var_1846 = var_486[var_682][var_225][0];
        var_1837 = var_486[var_682][var_225][3];
        var_1835 = var_486[var_682][var_225][4];
        var_1847 = var_486[var_682][var_225][5];
        var_1848 = var_486[var_682][var_225][6];
        var_1838 = var_486[var_682][var_225][7];
        var_1849 = var_486[var_682][var_225][8];
        var_1889 = var_486[var_682][var_225][9];
        var_1850 = var_486[var_682][var_225][11];
        var_1851 = var_486[var_682][var_225][12];
        var_1833 = var_486[var_682][var_225][13];
        var_1834 = var_486[var_682][var_225][14];
        var_1852 = var_486[var_682][var_225][15];
        var_1853 = var_486[var_682][var_225][16];
        var_1854 = var_486[var_682][var_225][17];
        var_1855 = var_486[var_682][var_225][18];
        var_1836 = var_486[var_682][var_225][19];
        var_1856 = var_486[var_682][var_225][20];
        var_1857 = var_486[var_682][var_225][21];
        var_1858 = var_486[var_682][var_225][22];
        var_1859 = var_486[var_682][var_225][23];
        var_1860 = var_486[var_682][var_225][24];
        var_1861 = var_486[var_682][var_225][25];
        var_1862 = var_486[var_682][var_225][26];
        var_1863 = var_486[var_682][var_225][27];
        var_1864 = var_486[var_682][var_225][28];
        var_1865 = var_486[var_682][var_225][29];
        yield func404(); // アイテムを置く時の動作処理
        return;
    });
}

// アイテムを "拾う" を選択した時に所持アイテムが20個以上になる際の処理
function func477(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(477);
        var_221 = 0;
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        var_231 = 0;
        var_234 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "荷物がいっぱいで持ちきれない";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}

function func478(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(478);
        var_321 = var_77[var_66][var_67];
        belongings_item_list = var_78[var_321].Var0;
        var_233[0].Var0 = var_78[var_321].Var0;
        var_233[0].Var3 = var_78[var_321].Var3;
        var_233[0].Var4 = var_78[var_321].Var4;
        var_233[0].Var5 = var_78[var_321].Var5;
        var_233[0].Var6 = var_78[var_321].Var6;
        var_233[0].Var7 = var_78[var_321].Var7;
        var_233[0].Var8 = var_78[var_321].Var8;
        var_233[0].Var11 = var_78[var_321].Var11;
        var_233[0].Var12 = var_78[var_321].Var12;
        var_233[0].Var13 = var_78[var_321].Var13;
        var_233[0].Var14 = var_78[var_321].Var14;
        var_233[0].Var15 = var_78[var_321].Var15;
        var_233[0].Var16 = var_78[var_321].Var16;
        var_233[0].Var17 = var_78[var_321].Var17;
        var_233[0].Var18 = var_78[var_321].Var18;
        var_233[0].Var19 = var_78[var_321].Var19;
        var_233[0].Var20 = var_78[var_321].Var20;
        var_233[0].Var21 = var_78[var_321].Var21;
        var_233[0].Var22 = var_78[var_321].Var22;
        var_233[0].Var23 = var_78[var_321].Var23;
        var_233[0].Var24 = var_78[var_321].Var24;
        var_233[0].Var25 = var_78[var_321].Var25;
        var_233[0].Var26 = var_78[var_321].Var26;
        var_233[0].Var27 = var_78[var_321].Var27;
        var_233[0].Var28 = var_78[var_321].Var28;
        var_233[0].Var29 = var_78[var_321].Var29;
        return;
    });
}
function func479(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(479);
        var_2114 = var_78[var_321].Var1;
        var_2115 = var_78[var_321].Var2;
        var_77[var_2114][var_2115] = 0;
        var_78[var_321].Var0 = 0;
        var_78[var_321].Var1 = 0;
        var_78[var_321].Var2 = 0;
        return;
    });
}

// 道具画面(メニュー画面/道具)からの足元交換
function func480(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(480);
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        yield func426();
        yield func427();
        yield func428();
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
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            yield func340(); // キー入力による選択処理
            var_198 = 0;
            open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            if (var_2005 == 1) {
                yield func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                return;
            }
            yield func463();
            return;
        }
        var_221 = 0;
        var_2005 = 0;
        var_814 = var_233[var_225].Var0;
        var_1662 = var_233[var_225].Var3;
        item_modified_value = var_233[var_225].Var4;
        free_space_value = var_233[var_225].Var5;
        var_1671 = var_233[var_225].Var6;
        var_1663 = var_233[var_225].Var7;
        var_2117 = var_233[var_225].Var8;
        var_1672 = var_233[var_225].Var11;
        var_805 = var_233[var_225].Var12;
        var_1660 = var_233[var_225].Var13;
        var_1661 = var_233[var_225].Var14;
        var_1673 = var_233[var_225].Var15;
        var_1674 = var_233[var_225].Var16;
        var_1675 = var_233[var_225].Var17;
        var_1666 = var_233[var_225].Var18;
        var_810 = var_233[var_225].Var19;
        var_815 = var_233[var_225].Var20;
        var_816 = var_233[var_225].Var21;
        var_817 = var_233[var_225].Var22;
        var_818 = var_233[var_225].Var23;
        var_819 = var_233[var_225].Var24;
        var_820 = var_233[var_225].Var25;
        var_821 = var_233[var_225].Var26;
        var_822 = var_233[var_225].Var27;
        var_823 = var_233[var_225].Var28;
        var_824 = var_233[var_225].Var29;
        var_233[var_225].Var0 = var_78[var_2044].Var0;
        var_233[var_225].Var3 = var_78[var_2044].Var3;
        var_233[var_225].Var4 = var_78[var_2044].Var4;
        var_233[var_225].Var5 = var_78[var_2044].Var5;
        var_233[var_225].Var6 = var_78[var_2044].Var6;
        var_233[var_225].Var7 = var_78[var_2044].Var7;
        var_233[var_225].Var8 = var_78[var_2044].Var8;
        var_233[var_225].Var11 = var_78[var_2044].Var11;
        var_233[var_225].Var12 = var_78[var_2044].Var12;
        var_233[var_225].Var13 = var_78[var_2044].Var13;
        var_233[var_225].Var14 = var_78[var_2044].Var14;
        var_233[var_225].Var15 = var_78[var_2044].Var15;
        var_233[var_225].Var16 = var_78[var_2044].Var16;
        var_233[var_225].Var17 = var_78[var_2044].Var17;
        var_233[var_225].Var18 = var_78[var_2044].Var18;
        var_233[var_225].Var19 = var_78[var_2044].Var19;
        var_233[var_225].Var20 = var_78[var_2044].Var20;
        var_233[var_225].Var21 = var_78[var_2044].Var21;
        var_233[var_225].Var22 = var_78[var_2044].Var22;
        var_233[var_225].Var23 = var_78[var_2044].Var23;
        var_233[var_225].Var24 = var_78[var_2044].Var24;
        var_233[var_225].Var25 = var_78[var_2044].Var25;
        var_233[var_225].Var26 = var_78[var_2044].Var26;
        var_233[var_225].Var27 = var_78[var_2044].Var27;
        var_233[var_225].Var28 = var_78[var_2044].Var28;
        var_233[var_225].Var29 = var_78[var_2044].Var29;
        var_78[var_2044].Var0 = var_814;
        var_78[var_2044].Var3 = var_1662;
        var_78[var_2044].Var4 = item_modified_value;
        var_78[var_2044].Var5 = free_space_value;
        var_78[var_2044].Var6 = var_1671;
        var_78[var_2044].Var7 = var_1663;
        var_78[var_2044].Var8 = var_2117;
        var_78[var_2044].Var11 = var_1672;
        var_78[var_2044].Var12 = var_805;
        var_78[var_2044].Var13 = var_1660;
        var_78[var_2044].Var14 = var_1661;
        var_78[var_2044].Var15 = var_1673;
        var_78[var_2044].Var16 = var_1674;
        var_78[var_2044].Var17 = var_1675;
        var_78[var_2044].Var18 = var_1666;
        var_78[var_2044].Var19 = var_810;
        var_78[var_2044].Var20 = var_815;
        var_78[var_2044].Var21 = var_816;
        var_78[var_2044].Var22 = var_817;
        var_78[var_2044].Var23 = var_818;
        var_78[var_2044].Var24 = var_819;
        var_78[var_2044].Var25 = var_820;
        var_78[var_2044].Var26 = var_821;
        var_78[var_2044].Var27 = var_822;
        var_78[var_2044].Var28 = var_823;
        var_78[var_2044].Var29 = var_824;
        belongings_item_list = var_233[var_225].Var0;
        disc_rarity = var_233[var_225].Var13;
        yield func492(); // アイテムリスト呼び出し
        var_2118 = item_name;
        if (var_233[var_225].Var0 == 1) {
            var_2118 = "" + var_233[var_225].Var13 + "G";
        }
        belongings_item_list = var_78[var_2044].Var0;
        disc_rarity = var_78[var_2044].Var13;
        yield func492(); // アイテムリスト呼び出し
        var_2119 = item_name;
        if (var_78[var_2044].Var0 == 1) {
            var_2119 = "" + var_78[var_2044].Var13 + "G";
        }
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        var_2005 = 0;
        yield func430();
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "足元の" + var_2118 + "と";
        comments_row2 = "" + var_2119 + "を交換した。";
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_217 = 1;
        yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    });
}


function func481(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(481);
        var_233[0] = var_78[var_2044];
        var_78[var_2044].Var0 = 1234123;
        console.log(var_233[0].Var0);
        return;
    });
}
function func482(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(482);
        yield func483();
        var_2121 = belongings_item_list;
        yield func492(); // アイテムリスト呼び出し
        var_2122 = "" + item_name;
        var_2123 = 0;
        yield func484();
        return;
    });
}
function func483(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(483);
        yield func051();
        open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        var_1203 = 1;
        var_2125 = 25;
        var_2126 = 120;
        var_2127 = 20;
        var_2128 = 0;
        var_2129 = 0;
        var_2130 = 26;
        var_2131 = 10;
        var_2132 = 0;
        var_2123 = 0;

        var_2133 = sdim(30, 30);
        var_2134 = dim(30);
        var_2135 = 1;
        var_2136 = 0;
        return;
    });
}
function func484(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(484);
        yield func337(); // メッセージ関係呼び出し
        yield func080(); // 各キー入力確認
        if (var_2123 == 0) {
            if (var_254 == 1) {
                if (var_2131 == 0) {
                    var_2131 = 4;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 10) {
                    var_2131 = 19;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 20) {
                    var_2131 = 29;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 30) {
                    var_2131 = 39;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 40) {
                    var_2131 = 49;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 50) {
                    var_2131 = 59;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 60) {
                    var_2131 = 69;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 70) {
                    var_2131 = 79;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 80) {
                    var_2131 = 89;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                var_2131 = var_2131 - 1;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func484();
                return;
            }
            if (var_257 == 1) {
                if (var_2131 == 4) {
                    var_2131 = 0;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 19) {
                    var_2131 = 10;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 29) {
                    var_2131 = 20;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 39) {
                    var_2131 = 30;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 49) {
                    var_2131 = 40;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 59) {
                    var_2131 = 50;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 69) {
                    var_2131 = 60;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 79) {
                    var_2131 = 70;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 89) {
                    var_2131 = 80;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                var_2131 = var_2131 + 1;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func484();
                return;
            }
            if (var_259 == 1) {
                if (var_2131 == 0) {
                    var_2131 = 10;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 1) {
                    var_2131 = 14;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 2) {
                    var_2131 = 15;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 3) {
                    var_2131 = 17;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 4) {
                    var_2131 = 19;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 80) {
                    var_2131 = 0;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 81) {
                    var_2131 = 0;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 82) {
                    var_2131 = 0;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 83) {
                    var_2131 = 1;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 84) {
                    var_2131 = 1;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 85) {
                    var_2131 = 2;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 86) {
                    var_2131 = 3;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 87) {
                    var_2131 = 3;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 88) {
                    var_2131 = 4;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 89) {
                    var_2131 = 4;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                var_2131 = var_2131 + 10;
                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func484();
                return;
            }
            if (var_255 == 1) {
                if (var_2131 == 0) {
                    var_2131 = 80;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 1) {
                    var_2131 = 84;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 2) {
                    var_2131 = 85;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 3) {
                    var_2131 = 86;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 4) {
                    var_2131 = 88;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 10) {
                    var_2131 = 0;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 11) {
                    var_2131 = 0;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 12) {
                    var_2131 = 0;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 13) {
                    var_2131 = 1;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 14) {
                    var_2131 = 1;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 15) {
                    var_2131 = 2;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 16) {
                    var_2131 = 3;
                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 17) {
                    var_2131 = 3;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 18) {
                    var_2131 = 4;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 19) {
                    var_2131 = 4;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                var_2131 = var_2131 - 10;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func484();
                return;
            }
            if (key_Shift_on == 1 || key_A_on == 1) {
                var_2137 = var_2131;
                var_2131 = 58;
                if (var_2132 <= 1) {
                    yield func487();
                    if (var_2138 == 1) {
    
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        var_2131 = var_2137;
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func484();
                        return;
                    }
                    if (var_2138 == 0) {
                        var_2131 = var_2137;
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func484();
                        return;
                    }
                }
                if (var_2132 < 2 && var_2136 >= 19) {
                    var_2131 = var_2137;
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2132 == 2 && var_2136 >= 20) {
                    var_2131 = var_2137;
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                yield func486();
                if (var_2132 < 2) {
                    var_2134[var_2135] = 2;
                    var_2135 = var_2135 + 1;
                    var_2136 = var_2136 + 2;
                }
                if (var_2132 == 2) {
                    var_2134[var_2135] = 1;
                    var_2135 = var_2135 + 1;
                    var_2136 = var_2136 + 1;
                }

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                var_2131 = var_2137;
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func484();
                return;
            }
            if (key_S_on == 1 || key_C_on == 1) {
                var_2137 = var_2131;
                var_2131 = 59;
                if (var_2132 <= 1) {
                    yield func487();
                    if (var_2138 == 1) {
    
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        var_2131 = var_2137;
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func484();
                        return;
                    }
                    if (var_2138 == 0) {
                        var_2131 = var_2137;
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func484();
                        return;
                    }
                }
                if (var_2132 < 2 && var_2136 >= 19) {
                    var_2131 = var_2137;
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2132 == 2 && var_2136 >= 20) {
                    var_2131 = var_2137;
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                yield func486();
                if (var_2132 < 2) {
                    var_2134[var_2135] = 2;
                    var_2135 = var_2135 + 1;
                    var_2136 = var_2136 + 2;
                }
                if (var_2132 == 2) {
                    var_2134[var_2135] = 1;
                    var_2135 = var_2135 + 1;
                    var_2136 = var_2136 + 1;
                }

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                var_2131 = var_2137;
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func484();
                return;
            }
            if (key_Z_on == 1) {
                if (var_2131 >= 10) {
                    if (var_2132 <= 1) {
                        if (var_2131 == 58 || var_2131 == 59) {
                            yield func487();
                            if (var_2138 == 1) {
            
                                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                                yield func337(); // メッセージ関係呼び出し
                                yield func337(); // メッセージ関係呼び出し
                                yield func484();
                                return;
                            }
                            if (var_2138 == 0) {
                                yield func337(); // メッセージ関係呼び出し
                                yield func337(); // メッセージ関係呼び出し
                                yield func484();
                                return;
                            }
                        }
                    }
                    if (var_2132 < 2 && var_2136 >= 19) {
                        yield func337(); // メッセージ関係呼び出し
                        yield func484();
                        return;
                    }
                    if (var_2132 == 2 && var_2136 >= 20) {
                        yield func337(); // メッセージ関係呼び出し
                        yield func484();
                        return;
                    }
                    yield func486();
                    if (var_2132 < 2) {
                        var_2134[var_2135] = 2;
                        var_2135 = var_2135 + 1;
                        var_2136 = var_2136 + 2;
                    }
                    if (var_2132 == 2) {
                        var_2134[var_2135] = 1;
                        var_2135 = var_2135 + 1;
                        var_2136 = var_2136 + 1;
                    }

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 0) {
                    if (var_2132 == 0) {
                        var_2139 = 1;
                    }
                    if (var_2132 == 1) {
                        var_2139 = 2;
                    }
                    if (var_2132 == 2) {
                        var_2139 = 0;
                    }
                    var_2132 = var_2139;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 1 && var_2135 >= 2) {
                    var_2135 = var_2135 - 1;
                    if (var_2134[var_2135] == 1) {
                        var_2136 = var_2136 - 1;
                    }
                    if (var_2134[var_2135] == 2) {
                        var_2136 = var_2136 - 2;
                    }
                    var_2134[var_2135] = 0;
                    var_2133[var_2135] = "";

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2131 == 2) {
                    if (var_2124 == 0) {
    
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                        var_1203 = 0;
                        yield func051();
                        yield func463();
                        return;
                    }
                    if (var_2124 == 1) {
    
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        var_1203 = 0;
                        var_2124 = 0;
                        yield func051();
                        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                        return;
                    }
                }
                if (var_2131 == 3) {

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func051();
                    notesel(var_754);
                    var_2123 = 1;
                    var_2140 = 0;
                    var_2141 = 1;
                    yield func484();
                    return;
                }
                if (var_2131 == 4) {
                    if (var_2124 == 0) {
    
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func051();
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        if (var_2121 == 800 && var_862[800][0] == 1 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                            yield func489();
                            return;
                        }
                        yield func488();
                        return;
                    }
                    if (var_2124 == 1) {
                        var_2124 = 0;
    
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        yield func051();
                        yield func337(); // メッセージ関係呼び出し
                        yield func337(); // メッセージ関係呼び出し
                        yield func491();
                        return;
                    }
                }
            }
            if (key_X_on == 1) {
                if (var_2135 <= 1) {
                    if (var_2124 == 0) {
    
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
                        var_1203 = 0;
                        yield func051();
                        yield func463();
                        return;
                    }
                    if (var_2124 == 1) {
    
                        DSPLAY(audio_id = 100); // アイテム選択時の効果音
                        var_1203 = 0;
                        var_2124 = 0;
                        yield func051();
                        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
                        return;
                    }
                }
                var_2135 = var_2135 - 1;
                if (var_2134[var_2135] == 1) {
                    var_2136 = var_2136 - 1;
                }
                if (var_2134[var_2135] == 2) {
                    var_2136 = var_2136 - 2;
                }
                var_2134[var_2135] = 0;
                var_2133[var_2135] = "";

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func484();
                return;
            }
        }
        if (var_2123 == 1) {
            if (key_Z_on == 1) {

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func051();
                var_2123 = 0;
                var_2142 = 1;
                if (var_2141 == 1) {
                    var_2143 = var_2140 + 100;
                }
                if (var_2141 == 2) {
                    var_2143 = var_2140 + 110;
                }
                notesel(var_754);
                var_2144 = noteget(var_2143);
                if (var_2121 == 800 && var_862[800][0] == 1 && var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                    yield func489();
                    return;
                }
                yield func488();
                return;
            }
            if (key_X_on == 1) {
                var_2123 = 0;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func484();
                return;
            }
            if (var_259 == 1 && var_2140 != 9) {
                var_2140++;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func484();
                return;
            }
            if (var_259 == 1 && var_2140 == 9) {
                var_2140 = 0;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func484();
                return;
            }
            if (var_255 == 1 && var_2140 != 0) {
                var_2140--;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func484();
                return;
            }
            if (var_255 == 1 && var_2140 == 0) {
                var_2140 = 9;

                DSPLAY(audio_id = 100); // アイテム選択時の効果音
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                yield func484();
                return;
            }
            if (var_254 == 1) {
                if (var_2141 == 1) {
                    var_2141 = 2;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2141 == 2) {
                    var_2141 = 1;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
            }
            if (var_257 == 1) {
                if (var_2141 == 1) {
                    var_2141 = 2;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
                if (var_2141 == 2) {
                    var_2141 = 1;

                    DSPLAY(audio_id = 100); // アイテム選択時の効果音
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    yield func484();
                    return;
                }
            }
        }
        yield func484();
        return;
    });
}
// 未識別アイテムの名前入力機能？
function func485(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(485);
        color(0, 0, 0);

        gmode(mode = 4, data2 = null, data3 = null, alpha = 100);
        pos(5, 35);
        gcopy(12, 0, 0, 332, 62);
        pos(5, 99);
        gcopy(12, 0, 0, 332, 235);
        color(255, 255, 255);
        line(9, 101, 330, 101);
        line(9, 331, 166, 331);
        line(190, 331, 330, 331);
        line(8, 102, 8, 329);
        line(332, 102, 332, 329);
        pset(9, 102);
        pset(331, 102);
        pset(9, 330);
        pset(331, 330);
        line(9, 37, 330, 37);
        line(9, 94, 330, 94);
        line(8, 38, 8, 92);
        line(332, 38, 332, 92);
        pset(9, 38);
        pset(331, 38);
        pset(9, 93);
        pset(331, 93);
        if (var_2123 == 1) {
            color(255, 255, 255);
    
            font("ＭＳ ゴシック", 16, 1);
            notesel(var_754);
            var_2145 = 0;
            var_2146 = 120;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                if (var_2141 == 1) {
                    var_2143 = var_2145 + 100;
                }
                if (var_2141 == 2) {
                    var_2143 = var_2145 + 110;
                }
                var_2144 = noteget(var_2143);
                pos(30, var_2146);
                mes("" + var_2144);
                var_2145++;
                var_2146 = var_2146 + 20;
            }
    
            font(font_type = "ＭＳ Ｐゴシック", font_size = 16, font_style = 1);
            pos(13, var_2140 * 20 + 120);
            mes(">");
            pos(14, var_2140 * 20 + 120);
            mes(">");
            pos(15, var_2140 * 20 + 120);
            mes(">");
            var_2147 = 175;
            var_2148 = 323;
            if (var_2141 == 1) {
                pos(var_2147, var_2148);
                mes(">");
                pos(var_2147 + 1, var_2148);
                mes(">");
                pos(var_2147 + 2, var_2148);
                mes(">");
            }
            if (var_2141 == 2) {
                pos(var_2147, var_2148);
                mes("<");
                pos(var_2147 + 1, var_2148);
                mes("<");
                pos(var_2147 + 2, var_2148);
                mes("<");
            }
        }
        if (var_2123 == 0) {
            color(255, 255, 255);
            line(165, 331, 191, 331);
            color(255, 0, 0);
    
            font("ＭＳ ゴシック", 16, 1);
            var_2149 = Math.floor(var_2131 / 10);
            var_2150 = var_2149 * 10;
            var_2149 = var_2131 - var_2150;
            if (var_2131 >= 0 && var_2131 <= 9) {
                var_2129 = var_2126;
            }
            if (var_2131 >= 10 && var_2131 <= 19) {
                var_2129 = var_2127 * 2 + var_2126;
            }
            if (var_2131 >= 20 && var_2131 <= 29) {
                var_2129 = var_2127 * 3 + var_2126;
            }
            if (var_2131 >= 30 && var_2131 <= 39) {
                var_2129 = var_2127 * 4 + var_2126;
            }
            if (var_2131 >= 40 && var_2131 <= 49) {
                var_2129 = var_2127 * 5 + var_2126;
            }
            if (var_2131 >= 50 && var_2131 <= 59) {
                var_2129 = var_2127 * 6 + var_2126;
            }
            if (var_2131 >= 60 && var_2131 <= 69) {
                var_2129 = var_2127 * 7 + var_2126;
            }
            if (var_2131 >= 70 && var_2131 <= 79) {
                var_2129 = var_2127 * 8 + var_2126;
            }
            if (var_2131 >= 80 && var_2131 <= 89) {
                var_2129 = var_2127 * 9 + var_2126;
            }
            if (var_2131 <= 9) {
                if (var_2149 == 0) {
                    var_2128 = 15;
                }
                if (var_2149 == 1) {
                    var_2128 = var_2130 * 3 + 22;
                }
                if (var_2149 == 2) {
                    var_2128 = var_2130 * 6 - 3;
                }
                if (var_2149 == 3) {
                    var_2128 = var_2130 * 8 + 11;
                }
                if (var_2149 == 4) {
                    var_2128 = var_2130 * 10 + 11;
                }
            }
            if (var_2131 >= 10) {
                if (var_2149 == 0) {
                    var_2128 = 16;
                }
                if (var_2149 == 1) {
                    var_2128 = var_2130 + 16;
                }
                if (var_2149 == 2) {
                    var_2128 = var_2130 * 2 + 16;
                }
                if (var_2149 == 3) {
                    var_2128 = var_2130 * 3 + 16;
                }
                if (var_2149 == 4) {
                    var_2128 = var_2130 * 4 + 16;
                }
                if (var_2149 == 5) {
                    var_2128 = var_2130 * 7 + 6;
                }
                if (var_2149 == 6) {
                    var_2128 = var_2130 * 8 + 6;
                }
                if (var_2149 == 7) {
                    var_2128 = var_2130 * 9 + 6;
                }
                if (var_2149 == 8) {
                    var_2128 = var_2130 * 10 + 6;
                }
                if (var_2149 == 9) {
                    var_2128 = var_2130 * 11 + 6;
                }
            }
            pos(var_2128, var_2129);
            if (var_2131 >= 10) {
                mes("[　]");
            }
            if (var_2131 == 0) {
                mes("[　　　　]");
            }
            if (var_2131 == 1) {
                mes("[　　]");
            }
            if (var_2131 == 2) {
                mes("[　　　]");
            }
            if (var_2131 == 3) {
                mes("[　　]");
            }
            if (var_2131 == 4) {
                mes("[　　]");
            }
            color(255, 255, 255);
    
            font("ＭＳ ゴシック", 16, 1);
            if (var_2132 == 0) {
                pos(var_2125, var_2126);
                mes("全角カナ　消す　やめる　履歴　決定");
                pos(var_2125, var_2127 * 1 + var_2126);
                mes("");
                pos(var_2125, var_2127 * 2 + var_2126);
                mes("あ い う え お　　　は ひ ふ へ ほ");
                pos(var_2125, var_2127 * 3 + var_2126);
                mes("か き く け こ　　　ま み む め も");
                pos(var_2125, var_2127 * 4 + var_2126);
                mes("さ し す せ そ　　　や 　 ゆ 　 よ");
                pos(var_2125, var_2127 * 5 + var_2126);
                mes("た ち つ て と　　　ら り る れ ろ");
                pos(var_2125, var_2127 * 6 + var_2126);
                mes("な に ぬ ね の　　　わ を ん ﾞ  ﾟ ");
                pos(var_2125, var_2127 * 7 + var_2126);
                mes("ぁ ぃ ぅ ぇ ぉ　　　ゃ ゅ ょ っ ー");
                pos(var_2125, var_2127 * 8 + var_2126);
                mes("１ ２ ３ ４ ５　　　６ ７ ８ ９ ０");
                pos(var_2125, var_2127 * 9 + var_2126);
                mes("＋ － ？ ！ ／　　　（ ） ・ ～ 　");
            }
            if (var_2132 == 1) {
                pos(var_2125, var_2126);
                mes("半角カナ　消す　やめる　履歴　決定");
                pos(var_2125, var_2127 * 1 + var_2126);
                mes("");
                pos(var_2125, var_2127 * 2 + var_2126);
                mes("ア イ ウ エ オ　　　ハ ヒ フ ヘ ホ");
                pos(var_2125, var_2127 * 3 + var_2126);
                mes("カ キ ク ケ コ　　　マ ミ ム メ モ");
                pos(var_2125, var_2127 * 4 + var_2126);
                mes("サ シ ス セ ソ　　　ヤ 　 ユ 　 ヨ");
                pos(var_2125, var_2127 * 5 + var_2126);
                mes("タ チ ツ テ ト　　　ラ リ ル レ ロ");
                pos(var_2125, var_2127 * 6 + var_2126);
                mes("ナ ニ ヌ ネ ノ　　　ワ ヲ ン ﾞ  ﾟ ");
                pos(var_2125, var_2127 * 7 + var_2126);
                mes("ァ ィ ゥ ェ ォ　　　ャ ュ ョ ッ ―");
                pos(var_2125, var_2127 * 8 + var_2126);
                mes("１ ２ ３ ４ ５　　　６ ７ ８ ９ ０");
                pos(var_2125, var_2127 * 9 + var_2126);
                mes("＋ － ？ ！ ／　　　（ ） ・ ～ 　");
            }
            if (var_2132 == 2) {
                pos(var_2125, var_2126);
                mes("全角かな　消す　やめる　履歴　決定");
                pos(var_2125, var_2127 * 1 + var_2126);
                mes("");
                pos(var_2125, var_2127 * 2 + var_2126);
                mes("ｱ  ｲ  ｳ  ｴ  ｵ 　　　ﾊ  ﾋ  ﾌ  ﾍ  ﾎ");
                pos(var_2125, var_2127 * 3 + var_2126);
                mes("ｶ  ｷ  ｸ  ｹ  ｺ 　　　ﾏ  ﾐ  ﾑ  ﾒ  ﾓ");
                pos(var_2125, var_2127 * 4 + var_2126);
                mes("ｻ  ｼ  ｽ  ｾ  ｿ 　　　ﾔ 　  ﾕ 　  ﾖ");
                pos(var_2125, var_2127 * 5 + var_2126);
                mes("ﾀ  ﾁ  ﾂ  ﾃ  ﾄ 　　　ﾗ  ﾘ  ﾙ  ﾚ  ﾛ");
                pos(var_2125, var_2127 * 6 + var_2126);
                mes("ﾅ  ﾆ  ﾇ  ﾈ  ﾉ 　　　ﾜ  ｦ  ﾝ ﾞ  ﾟ ");
                pos(var_2125, var_2127 * 7 + var_2126);
                mes("ｧ  ｨ  ｩ  ｪ  ｫ 　　　ｬ  ｭ  ｮ  ｯ  ｰ");
                pos(var_2125, var_2127 * 8 + var_2126);
                mes("1  2  3  4  5 　　　6  7  8  9  0");
                pos(var_2125, var_2127 * 9 + var_2126);
                mes("+  -  ?  !  / 　　　(  )  ･  ~ 　");
            }
        }

        font("ＭＳ ゴシック", 18, 1);
        var_2151 = 0;
        var_2152 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            color(0, 255, 0);
            pos(60 + var_2151, 60);
            mes(var_2133[var_2152]);
            color(255, 255, 255);
            pos(60 + cnt1 * 10, 75);
            mes("-");
            if (var_2152 <= var_2136) {
                color(100, 100, 100);
                pos(60 + cnt2 * 10, 75);
                mes("-");
            }
            if (var_2134[var_2152] == 1) {
                var_2151 = var_2151 + 10;
            }
            if (var_2134[var_2152] == 2) {
                var_2151 = var_2151 + 20;
            }
            var_2152++;
        }
        return;
    });
}
function func486(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(486);
        if (var_2132 == 0) {
            if (var_2131 == 10) {
                var_2133[var_2135] = "あ";
            }
            if (var_2131 == 11) {
                var_2133[var_2135] = "い";
            }
            if (var_2131 == 12) {
                var_2133[var_2135] = "う";
            }
            if (var_2131 == 13) {
                var_2133[var_2135] = "え";
            }
            if (var_2131 == 14) {
                var_2133[var_2135] = "お";
            }
            if (var_2131 == 15) {
                var_2133[var_2135] = "は";
            }
            if (var_2131 == 16) {
                var_2133[var_2135] = "ひ";
            }
            if (var_2131 == 17) {
                var_2133[var_2135] = "ふ";
            }
            if (var_2131 == 18) {
                var_2133[var_2135] = "へ";
            }
            if (var_2131 == 19) {
                var_2133[var_2135] = "ほ";
            }
            if (var_2131 == 20) {
                var_2133[var_2135] = "か";
            }
            if (var_2131 == 21) {
                var_2133[var_2135] = "き";
            }
            if (var_2131 == 22) {
                var_2133[var_2135] = "く";
            }
            if (var_2131 == 23) {
                var_2133[var_2135] = "け";
            }
            if (var_2131 == 24) {
                var_2133[var_2135] = "こ";
            }
            if (var_2131 == 25) {
                var_2133[var_2135] = "ま";
            }
            if (var_2131 == 26) {
                var_2133[var_2135] = "み";
            }
            if (var_2131 == 27) {
                var_2133[var_2135] = "む";
            }
            if (var_2131 == 28) {
                var_2133[var_2135] = "め";
            }
            if (var_2131 == 29) {
                var_2133[var_2135] = "も";
            }
            if (var_2131 == 30) {
                var_2133[var_2135] = "さ";
            }
            if (var_2131 == 31) {
                var_2133[var_2135] = "し";
            }
            if (var_2131 == 32) {
                var_2133[var_2135] = "す";
            }
            if (var_2131 == 33) {
                var_2133[var_2135] = "せ";
            }
            if (var_2131 == 34) {
                var_2133[var_2135] = "そ";
            }
            if (var_2131 == 35) {
                var_2133[var_2135] = "や";
            }
            if (var_2131 == 36) {
                var_2133[var_2135] = "　";
            }
            if (var_2131 == 37) {
                var_2133[var_2135] = "ゆ";
            }
            if (var_2131 == 38) {
                var_2133[var_2135] = "　";
            }
            if (var_2131 == 39) {
                var_2133[var_2135] = "よ";
            }
            if (var_2131 == 40) {
                var_2133[var_2135] = "た";
            }
            if (var_2131 == 41) {
                var_2133[var_2135] = "ち";
            }
            if (var_2131 == 42) {
                var_2133[var_2135] = "つ";
            }
            if (var_2131 == 43) {
                var_2133[var_2135] = "て";
            }
            if (var_2131 == 44) {
                var_2133[var_2135] = "と";
            }
            if (var_2131 == 45) {
                var_2133[var_2135] = "ら";
            }
            if (var_2131 == 46) {
                var_2133[var_2135] = "り";
            }
            if (var_2131 == 47) {
                var_2133[var_2135] = "る";
            }
            if (var_2131 == 48) {
                var_2133[var_2135] = "れ";
            }
            if (var_2131 == 49) {
                var_2133[var_2135] = "ろ";
            }
            if (var_2131 == 50) {
                var_2133[var_2135] = "な";
            }
            if (var_2131 == 51) {
                var_2133[var_2135] = "に";
            }
            if (var_2131 == 52) {
                var_2133[var_2135] = "ぬ";
            }
            if (var_2131 == 53) {
                var_2133[var_2135] = "ね";
            }
            if (var_2131 == 54) {
                var_2133[var_2135] = "の";
            }
            if (var_2131 == 55) {
                var_2133[var_2135] = "わ";
            }
            if (var_2131 == 56) {
                var_2133[var_2135] = "を";
            }
            if (var_2131 == 57) {
                var_2133[var_2135] = "ん";
            }
            if (var_2131 == 58) {
                var_2133[var_2135] = "ﾞ";
            }
            if (var_2131 == 59) {
                var_2133[var_2135] = "ﾟ";
            }
            if (var_2131 == 60) {
                var_2133[var_2135] = "ぁ";
            }
            if (var_2131 == 61) {
                var_2133[var_2135] = "ぃ";
            }
            if (var_2131 == 62) {
                var_2133[var_2135] = "ぅ";
            }
            if (var_2131 == 63) {
                var_2133[var_2135] = "ぇ";
            }
            if (var_2131 == 64) {
                var_2133[var_2135] = "ぉ";
            }
            if (var_2131 == 65) {
                var_2133[var_2135] = "ゃ";
            }
            if (var_2131 == 66) {
                var_2133[var_2135] = "ゅ";
            }
            if (var_2131 == 67) {
                var_2133[var_2135] = "ょ";
            }
            if (var_2131 == 68) {
                var_2133[var_2135] = "っ";
            }
            if (var_2131 == 69) {
                var_2133[var_2135] = "ー";
            }
            if (var_2131 == 70) {
                var_2133[var_2135] = "１";
            }
            if (var_2131 == 71) {
                var_2133[var_2135] = "２";
            }
            if (var_2131 == 72) {
                var_2133[var_2135] = "３";
            }
            if (var_2131 == 73) {
                var_2133[var_2135] = "４";
            }
            if (var_2131 == 74) {
                var_2133[var_2135] = "５";
            }
            if (var_2131 == 75) {
                var_2133[var_2135] = "６";
            }
            if (var_2131 == 76) {
                var_2133[var_2135] = "７";
            }
            if (var_2131 == 77) {
                var_2133[var_2135] = "８";
            }
            if (var_2131 == 78) {
                var_2133[var_2135] = "９";
            }
            if (var_2131 == 79) {
                var_2133[var_2135] = "０";
            }
            if (var_2131 == 80) {
                var_2133[var_2135] = "＋";
            }
            if (var_2131 == 81) {
                var_2133[var_2135] = "－";
            }
            if (var_2131 == 82) {
                var_2133[var_2135] = "？";
            }
            if (var_2131 == 83) {
                var_2133[var_2135] = "！";
            }
            if (var_2131 == 84) {
                var_2133[var_2135] = "／";
            }
            if (var_2131 == 85) {
                var_2133[var_2135] = "（";
            }
            if (var_2131 == 86) {
                var_2133[var_2135] = "）";
            }
            if (var_2131 == 87) {
                var_2133[var_2135] = "・";
            }
            if (var_2131 == 88) {
                var_2133[var_2135] = "～";
            }
            if (var_2131 == 89) {
                var_2133[var_2135] = "　";
            }
        }
        if (var_2132 == 1) {
            if (var_2131 == 10) {
                var_2133[var_2135] = "ア";
            }
            if (var_2131 == 11) {
                var_2133[var_2135] = "イ";
            }
            if (var_2131 == 12) {
                var_2133[var_2135] = "ウ";
            }
            if (var_2131 == 13) {
                var_2133[var_2135] = "エ";
            }
            if (var_2131 == 14) {
                var_2133[var_2135] = "オ";
            }
            if (var_2131 == 15) {
                var_2133[var_2135] = "ハ";
            }
            if (var_2131 == 16) {
                var_2133[var_2135] = "ヒ";
            }
            if (var_2131 == 17) {
                var_2133[var_2135] = "フ";
            }
            if (var_2131 == 18) {
                var_2133[var_2135] = "ヘ";
            }
            if (var_2131 == 19) {
                var_2133[var_2135] = "ホ";
            }
            if (var_2131 == 20) {
                var_2133[var_2135] = "カ";
            }
            if (var_2131 == 21) {
                var_2133[var_2135] = "キ";
            }
            if (var_2131 == 22) {
                var_2133[var_2135] = "ク";
            }
            if (var_2131 == 23) {
                var_2133[var_2135] = "ケ";
            }
            if (var_2131 == 24) {
                var_2133[var_2135] = "コ";
            }
            if (var_2131 == 25) {
                var_2133[var_2135] = "マ";
            }
            if (var_2131 == 26) {
                var_2133[var_2135] = "ミ";
            }
            if (var_2131 == 27) {
                var_2133[var_2135] = "ム";
            }
            if (var_2131 == 28) {
                var_2133[var_2135] = "メ";
            }
            if (var_2131 == 29) {
                var_2133[var_2135] = "モ";
            }
            if (var_2131 == 30) {
                var_2133[var_2135] = "サ";
            }
            if (var_2131 == 31) {
                var_2133[var_2135] = "シ";
            }
            if (var_2131 == 32) {
                var_2133[var_2135] = "ス";
            }
            if (var_2131 == 33) {
                var_2133[var_2135] = "セ";
            }
            if (var_2131 == 34) {
                var_2133[var_2135] = "ソ";
            }
            if (var_2131 == 35) {
                var_2133[var_2135] = "ヤ";
            }
            if (var_2131 == 36) {
                var_2133[var_2135] = "　";
            }
            if (var_2131 == 37) {
                var_2133[var_2135] = "ユ";
            }
            if (var_2131 == 38) {
                var_2133[var_2135] = "　";
            }
            if (var_2131 == 39) {
                var_2133[var_2135] = "ヨ";
            }
            if (var_2131 == 40) {
                var_2133[var_2135] = "タ";
            }
            if (var_2131 == 41) {
                var_2133[var_2135] = "チ";
            }
            if (var_2131 == 42) {
                var_2133[var_2135] = "ツ";
            }
            if (var_2131 == 43) {
                var_2133[var_2135] = "テ";
            }
            if (var_2131 == 44) {
                var_2133[var_2135] = "ト";
            }
            if (var_2131 == 45) {
                var_2133[var_2135] = "ラ";
            }
            if (var_2131 == 46) {
                var_2133[var_2135] = "リ";
            }
            if (var_2131 == 47) {
                var_2133[var_2135] = "ル";
            }
            if (var_2131 == 48) {
                var_2133[var_2135] = "レ";
            }
            if (var_2131 == 49) {
                var_2133[var_2135] = "ロ";
            }
            if (var_2131 == 50) {
                var_2133[var_2135] = "ナ";
            }
            if (var_2131 == 51) {
                var_2133[var_2135] = "ニ";
            }
            if (var_2131 == 52) {
                var_2133[var_2135] = "ヌ";
            }
            if (var_2131 == 53) {
                var_2133[var_2135] = "ネ";
            }
            if (var_2131 == 54) {
                var_2133[var_2135] = "ノ";
            }
            if (var_2131 == 55) {
                var_2133[var_2135] = "ワ";
            }
            if (var_2131 == 56) {
                var_2133[var_2135] = "ヲ";
            }
            if (var_2131 == 57) {
                var_2133[var_2135] = "ン";
            }
            if (var_2131 == 58) {
                var_2133[var_2135] = "ﾞ";
            }
            if (var_2131 == 59) {
                var_2133[var_2135] = "ﾟ";
            }
            if (var_2131 == 60) {
                var_2133[var_2135] = "ァ";
            }
            if (var_2131 == 61) {
                var_2133[var_2135] = "ィ";
            }
            if (var_2131 == 62) {
                var_2133[var_2135] = "ゥ";
            }
            if (var_2131 == 63) {
                var_2133[var_2135] = "ェ";
            }
            if (var_2131 == 64) {
                var_2133[var_2135] = "ォ";
            }
            if (var_2131 == 65) {
                var_2133[var_2135] = "ャ";
            }
            if (var_2131 == 66) {
                var_2133[var_2135] = "ュ";
            }
            if (var_2131 == 67) {
                var_2133[var_2135] = "ョ";
            }
            if (var_2131 == 68) {
                var_2133[var_2135] = "ッ";
            }
            if (var_2131 == 69) {
                var_2133[var_2135] = "―";
            }
            if (var_2131 == 70) {
                var_2133[var_2135] = "１";
            }
            if (var_2131 == 71) {
                var_2133[var_2135] = "２";
            }
            if (var_2131 == 72) {
                var_2133[var_2135] = "３";
            }
            if (var_2131 == 73) {
                var_2133[var_2135] = "４";
            }
            if (var_2131 == 74) {
                var_2133[var_2135] = "５";
            }
            if (var_2131 == 75) {
                var_2133[var_2135] = "６";
            }
            if (var_2131 == 76) {
                var_2133[var_2135] = "７";
            }
            if (var_2131 == 77) {
                var_2133[var_2135] = "８";
            }
            if (var_2131 == 78) {
                var_2133[var_2135] = "９";
            }
            if (var_2131 == 79) {
                var_2133[var_2135] = "０";
            }
            if (var_2131 == 80) {
                var_2133[var_2135] = "＋";
            }
            if (var_2131 == 81) {
                var_2133[var_2135] = "－";
            }
            if (var_2131 == 82) {
                var_2133[var_2135] = "？";
            }
            if (var_2131 == 83) {
                var_2133[var_2135] = "！";
            }
            if (var_2131 == 84) {
                var_2133[var_2135] = "／";
            }
            if (var_2131 == 85) {
                var_2133[var_2135] = "（";
            }
            if (var_2131 == 86) {
                var_2133[var_2135] = "）";
            }
            if (var_2131 == 87) {
                var_2133[var_2135] = "・";
            }
            if (var_2131 == 88) {
                var_2133[var_2135] = "～";
            }
            if (var_2131 == 89) {
                var_2133[var_2135] = "　";
            }
        }
        if (var_2132 == 2) {
            if (var_2131 == 10) {
                var_2133[var_2135] = "ｱ";
            }
            if (var_2131 == 11) {
                var_2133[var_2135] = "ｲ";
            }
            if (var_2131 == 12) {
                var_2133[var_2135] = "ｳ";
            }
            if (var_2131 == 13) {
                var_2133[var_2135] = "ｴ";
            }
            if (var_2131 == 14) {
                var_2133[var_2135] = "ｵ";
            }
            if (var_2131 == 15) {
                var_2133[var_2135] = "ﾊ";
            }
            if (var_2131 == 16) {
                var_2133[var_2135] = "ﾋ";
            }
            if (var_2131 == 17) {
                var_2133[var_2135] = "ﾌ";
            }
            if (var_2131 == 18) {
                var_2133[var_2135] = "ﾍ";
            }
            if (var_2131 == 19) {
                var_2133[var_2135] = "ﾎ";
            }
            if (var_2131 == 20) {
                var_2133[var_2135] = "ｶ";
            }
            if (var_2131 == 21) {
                var_2133[var_2135] = "ｷ";
            }
            if (var_2131 == 22) {
                var_2133[var_2135] = "ｸ";
            }
            if (var_2131 == 23) {
                var_2133[var_2135] = "ｹ";
            }
            if (var_2131 == 24) {
                var_2133[var_2135] = "ｺ";
            }
            if (var_2131 == 25) {
                var_2133[var_2135] = "ﾏ";
            }
            if (var_2131 == 26) {
                var_2133[var_2135] = "ﾐ";
            }
            if (var_2131 == 27) {
                var_2133[var_2135] = "ﾑ";
            }
            if (var_2131 == 28) {
                var_2133[var_2135] = "ﾒ";
            }
            if (var_2131 == 29) {
                var_2133[var_2135] = "ﾓ";
            }
            if (var_2131 == 30) {
                var_2133[var_2135] = "ｻ";
            }
            if (var_2131 == 31) {
                var_2133[var_2135] = "ｼ";
            }
            if (var_2131 == 32) {
                var_2133[var_2135] = "ｽ";
            }
            if (var_2131 == 33) {
                var_2133[var_2135] = "ｾ";
            }
            if (var_2131 == 34) {
                var_2133[var_2135] = "ｿ";
            }
            if (var_2131 == 35) {
                var_2133[var_2135] = "ﾔ";
            }
            if (var_2131 == 36) {
                var_2133[var_2135] = " ";
            }
            if (var_2131 == 37) {
                var_2133[var_2135] = "ﾕ";
            }
            if (var_2131 == 38) {
                var_2133[var_2135] = " ";
            }
            if (var_2131 == 39) {
                var_2133[var_2135] = "ﾖ";
            }
            if (var_2131 == 40) {
                var_2133[var_2135] = "ﾀ";
            }
            if (var_2131 == 41) {
                var_2133[var_2135] = "ﾁ";
            }
            if (var_2131 == 42) {
                var_2133[var_2135] = "ﾂ";
            }
            if (var_2131 == 43) {
                var_2133[var_2135] = "ﾃ";
            }
            if (var_2131 == 44) {
                var_2133[var_2135] = "ﾄ";
            }
            if (var_2131 == 45) {
                var_2133[var_2135] = "ﾗ";
            }
            if (var_2131 == 46) {
                var_2133[var_2135] = "ﾘ";
            }
            if (var_2131 == 47) {
                var_2133[var_2135] = "ﾙ";
            }
            if (var_2131 == 48) {
                var_2133[var_2135] = "ﾚ";
            }
            if (var_2131 == 49) {
                var_2133[var_2135] = "ﾛ";
            }
            if (var_2131 == 50) {
                var_2133[var_2135] = "ﾅ";
            }
            if (var_2131 == 51) {
                var_2133[var_2135] = "ﾆ";
            }
            if (var_2131 == 52) {
                var_2133[var_2135] = "ﾇ";
            }
            if (var_2131 == 53) {
                var_2133[var_2135] = "ﾈ";
            }
            if (var_2131 == 54) {
                var_2133[var_2135] = "ﾉ";
            }
            if (var_2131 == 55) {
                var_2133[var_2135] = "ﾜ";
            }
            if (var_2131 == 56) {
                var_2133[var_2135] = "ｦ";
            }
            if (var_2131 == 57) {
                var_2133[var_2135] = "ﾝ";
            }
            if (var_2131 == 58) {
                var_2133[var_2135] = "ﾞ";
            }
            if (var_2131 == 59) {
                var_2133[var_2135] = "ﾟ";
            }
            if (var_2131 == 60) {
                var_2133[var_2135] = "ｧ";
            }
            if (var_2131 == 61) {
                var_2133[var_2135] = "ｨ";
            }
            if (var_2131 == 62) {
                var_2133[var_2135] = "ｩ";
            }
            if (var_2131 == 63) {
                var_2133[var_2135] = "ｪ";
            }
            if (var_2131 == 64) {
                var_2133[var_2135] = "ｫ";
            }
            if (var_2131 == 65) {
                var_2133[var_2135] = "ｬ";
            }
            if (var_2131 == 66) {
                var_2133[var_2135] = "ｭ";
            }
            if (var_2131 == 67) {
                var_2133[var_2135] = "ｮ";
            }
            if (var_2131 == 68) {
                var_2133[var_2135] = "ｯ";
            }
            if (var_2131 == 69) {
                var_2133[var_2135] = "ｰ";
            }
            if (var_2131 == 70) {
                var_2133[var_2135] = "1";
            }
            if (var_2131 == 71) {
                var_2133[var_2135] = "2";
            }
            if (var_2131 == 72) {
                var_2133[var_2135] = "3";
            }
            if (var_2131 == 73) {
                var_2133[var_2135] = "4";
            }
            if (var_2131 == 74) {
                var_2133[var_2135] = "5";
            }
            if (var_2131 == 75) {
                var_2133[var_2135] = "6";
            }
            if (var_2131 == 76) {
                var_2133[var_2135] = "7";
            }
            if (var_2131 == 77) {
                var_2133[var_2135] = "8";
            }
            if (var_2131 == 78) {
                var_2133[var_2135] = "9";
            }
            if (var_2131 == 79) {
                var_2133[var_2135] = "0";
            }
            if (var_2131 == 80) {
                var_2133[var_2135] = "+";
            }
            if (var_2131 == 81) {
                var_2133[var_2135] = "-";
            }
            if (var_2131 == 82) {
                var_2133[var_2135] = "?";
            }
            if (var_2131 == 83) {
                var_2133[var_2135] = "!";
            }
            if (var_2131 == 84) {
                var_2133[var_2135] = "/";
            }
            if (var_2131 == 85) {
                var_2133[var_2135] = "(";
            }
            if (var_2131 == 86) {
                var_2133[var_2135] = ")";
            }
            if (var_2131 == 87) {
                var_2133[var_2135] = "･";
            }
            if (var_2131 == 88) {
                var_2133[var_2135] = "~";
            }
            if (var_2131 == 89) {
                var_2133[var_2135] = " ";
            }
        }
        return;
    });
}
function func487(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(487);
        var_2138 = 0;
        var_2135 = var_2135 - 1;
        if (var_2132 == 0 && var_2131 == 58) {
            if (var_2133[var_2135] == "は") {
                var_2133[var_2135] = "ば";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ひ") {
                var_2133[var_2135] = "び";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ふ") {
                var_2133[var_2135] = "ぶ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "へ") {
                var_2133[var_2135] = "べ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ほ") {
                var_2133[var_2135] = "ぼ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ぱ") {
                var_2133[var_2135] = "ば";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ぴ") {
                var_2133[var_2135] = "び";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ぷ") {
                var_2133[var_2135] = "ぶ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ぺ") {
                var_2133[var_2135] = "べ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ぽ") {
                var_2133[var_2135] = "ぼ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "か") {
                var_2133[var_2135] = "が";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "き") {
                var_2133[var_2135] = "ぎ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "く") {
                var_2133[var_2135] = "ぐ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "け") {
                var_2133[var_2135] = "げ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "こ") {
                var_2133[var_2135] = "ご";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "さ") {
                var_2133[var_2135] = "ざ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "し") {
                var_2133[var_2135] = "じ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "す") {
                var_2133[var_2135] = "ず";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "せ") {
                var_2133[var_2135] = "ぜ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "そ") {
                var_2133[var_2135] = "ぞ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "た") {
                var_2133[var_2135] = "だ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ち") {
                var_2133[var_2135] = "ぢ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "つ") {
                var_2133[var_2135] = "づ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "て") {
                var_2133[var_2135] = "で";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "と") {
                var_2133[var_2135] = "ど";
                var_2138 = 1;
            }
            if (var_2138 == 0) {
                if (var_2133[var_2135] == "ば") {
                    var_2133[var_2135] = "は";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "び") {
                    var_2133[var_2135] = "ひ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ぶ") {
                    var_2133[var_2135] = "ふ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "べ") {
                    var_2133[var_2135] = "へ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ぼ") {
                    var_2133[var_2135] = "ほ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "が") {
                    var_2133[var_2135] = "か";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ぎ") {
                    var_2133[var_2135] = "き";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ぐ") {
                    var_2133[var_2135] = "く";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "げ") {
                    var_2133[var_2135] = "け";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ご") {
                    var_2133[var_2135] = "こ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ざ") {
                    var_2133[var_2135] = "さ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "じ") {
                    var_2133[var_2135] = "し";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ず") {
                    var_2133[var_2135] = "す";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ぜ") {
                    var_2133[var_2135] = "せ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ぞ") {
                    var_2133[var_2135] = "そ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "だ") {
                    var_2133[var_2135] = "た";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ぢ") {
                    var_2133[var_2135] = "ち";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "づ") {
                    var_2133[var_2135] = "つ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "で") {
                    var_2133[var_2135] = "て";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ど") {
                    var_2133[var_2135] = "と";
                    var_2138 = 1;
                }
            }
        }
        if (var_2132 == 1 && var_2131 == 58) {
            if (var_2133[var_2135] == "ウ") {
                var_2133[var_2135] = "ヴ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ハ") {
                var_2133[var_2135] = "バ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ヒ") {
                var_2133[var_2135] = "ビ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "フ") {
                var_2133[var_2135] = "ブ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ヘ") {
                var_2133[var_2135] = "ベ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ホ") {
                var_2133[var_2135] = "ボ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "パ") {
                var_2133[var_2135] = "バ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ピ") {
                var_2133[var_2135] = "ビ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "プ") {
                var_2133[var_2135] = "ブ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ペ") {
                var_2133[var_2135] = "ベ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ポ") {
                var_2133[var_2135] = "ボ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "カ") {
                var_2133[var_2135] = "ガ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "キ") {
                var_2133[var_2135] = "ギ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ク") {
                var_2133[var_2135] = "グ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ケ") {
                var_2133[var_2135] = "ゲ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "コ") {
                var_2133[var_2135] = "ゴ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "サ") {
                var_2133[var_2135] = "ザ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "シ") {
                var_2133[var_2135] = "ジ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ス") {
                var_2133[var_2135] = "ズ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "セ") {
                var_2133[var_2135] = "ゼ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ソ") {
                var_2133[var_2135] = "ゾ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "タ") {
                var_2133[var_2135] = "ダ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "チ") {
                var_2133[var_2135] = "ヂ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ツ") {
                var_2133[var_2135] = "ヅ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "テ") {
                var_2133[var_2135] = "デ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ト") {
                var_2133[var_2135] = "ド";
                var_2138 = 1;
            }
            if (var_2138 == 0) {
                if (var_2133[var_2135] == "ヴ") {
                    var_2133[var_2135] = "ウ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "バ") {
                    var_2133[var_2135] = "ハ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ビ") {
                    var_2133[var_2135] = "ヒ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ブ") {
                    var_2133[var_2135] = "フ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ベ") {
                    var_2133[var_2135] = "ヘ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ボ") {
                    var_2133[var_2135] = "ホ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ガ") {
                    var_2133[var_2135] = "カ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ギ") {
                    var_2133[var_2135] = "キ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "グ") {
                    var_2133[var_2135] = "ク";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ゲ") {
                    var_2133[var_2135] = "ケ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ゴ") {
                    var_2133[var_2135] = "コ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ザ") {
                    var_2133[var_2135] = "サ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ジ") {
                    var_2133[var_2135] = "シ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ズ") {
                    var_2133[var_2135] = "ス";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ゼ") {
                    var_2133[var_2135] = "セ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ゾ") {
                    var_2133[var_2135] = "ソ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ダ") {
                    var_2133[var_2135] = "タ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ヂ") {
                    var_2133[var_2135] = "チ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ヅ") {
                    var_2133[var_2135] = "ツ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "デ") {
                    var_2133[var_2135] = "テ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ド") {
                    var_2133[var_2135] = "ト";
                    var_2138 = 1;
                }
            }
        }
        if (var_2132 == 0 && var_2131 == 59) {
            if (var_2133[var_2135] == "は") {
                var_2133[var_2135] = "ぱ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ひ") {
                var_2133[var_2135] = "ぴ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ふ") {
                var_2133[var_2135] = "ぷ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "へ") {
                var_2133[var_2135] = "ぺ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ほ") {
                var_2133[var_2135] = "ぽ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ば") {
                var_2133[var_2135] = "ぱ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "び") {
                var_2133[var_2135] = "ぴ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ぶ") {
                var_2133[var_2135] = "ぷ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "べ") {
                var_2133[var_2135] = "ぺ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ぼ") {
                var_2133[var_2135] = "ぽ";
                var_2138 = 1;
            }
            if (var_2138 == 0) {
                if (var_2133[var_2135] == "ぱ") {
                    var_2133[var_2135] = "は";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ぴ") {
                    var_2133[var_2135] = "ひ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ぷ") {
                    var_2133[var_2135] = "ふ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ぺ") {
                    var_2133[var_2135] = "へ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ぽ") {
                    var_2133[var_2135] = "ほ";
                    var_2138 = 1;
                }
            }
        }
        if (var_2132 == 1 && var_2131 == 59) {
            if (var_2133[var_2135] == "ハ") {
                var_2133[var_2135] = "パ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ヒ") {
                var_2133[var_2135] = "ピ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "フ") {
                var_2133[var_2135] = "プ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ヘ") {
                var_2133[var_2135] = "ペ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ホ") {
                var_2133[var_2135] = "ポ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "バ") {
                var_2133[var_2135] = "パ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ビ") {
                var_2133[var_2135] = "ピ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ブ") {
                var_2133[var_2135] = "プ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ベ") {
                var_2133[var_2135] = "ペ";
                var_2138 = 1;
            }
            if (var_2133[var_2135] == "ボ") {
                var_2133[var_2135] = "ポ";
                var_2138 = 1;
            }
            if (var_2138 == 0) {
                if (var_2133[var_2135] == "パ") {
                    var_2133[var_2135] = "ハ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ピ") {
                    var_2133[var_2135] = "ヒ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "プ") {
                    var_2133[var_2135] = "フ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ペ") {
                    var_2133[var_2135] = "ヘ";
                    var_2138 = 1;
                }
                if (var_2133[var_2135] == "ポ") {
                    var_2133[var_2135] = "ホ";
                    var_2138 = 1;
                }
            }
        }
        var_2135 = var_2135 + 1;
        return;
    });
}
function func488(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(488);
        var_2153 = "";
        if (var_2142 == 0) {
            var_2152 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                var_2153 = "" + var_2153 + "" + var_2133[var_2152];
                var_2152++;
            }
        }
        if (var_2142 == 1) {
            var_2153 = var_2144;
        }
        var_2122 = "" + var_2153;
        if (var_726 == 1) {
            var_735 = "01n.dat";
        }
        if (var_726 == 2) {
            var_735 = "02n.dat";
        }
        if (var_726 == 3) {
            var_735 = "03n.dat";
        }
        if (var_2121 >= 800 && var_2121 < 900) {
            var_2154 = var_862[var_2121][1] + 130;
            var_1066[var_2154] = var_2122;
            var_2155 = "" + var_2122;
            notesel(var_2156);
            noteadd(var_2155, var_2154, 1);
            notesave(var_735);
        }
        if (var_2121 < 800) {
            var_2154 = var_862[var_2121][1];
            var_1066[var_2154] = var_2122;
            var_2155 = "" + var_2122;
            notesel(var_2156);
            noteadd(var_2155, var_2154, 1);
            notesave(var_735);
        }
        var_862[var_2121][2] = 1;
        if (var_726 == 1) {
            var_735 = "01e.dat";
        }
        if (var_726 == 2) {
            var_735 = "02e.dat";
        }
        if (var_726 == 3) {
            var_735 = "03e.dat";
        }
        exist(var_735);

        if (strsize == (-1)) {
            yield func230();
            bsave(file_name = var_735, data = var_753, data_size = null, offset = null);
        }
        notesel(var_754);
        noteload(var_735);
        if (var_2122 != "") {
            if (var_2142 == 0) {
                var_2157 = 118;
                var_2158 = 119;
                for (let cnt3 = 0; cnt3 < 19; ++cnt3) {
                    var_2159 = noteget(var_2157);
                    noteadd(var_2159, var_2158, 1);
                    var_2157--;
                    var_2158--;
                }
            }
            if (var_2142 == 1) {
                var_2157 = var_2143 - 1;
                var_2158 = var_2143;
                var_2160 = var_2143 - 100;
                for (let cnt3 = 0; cnt3 < var_2160; ++cnt3) {
                    var_2159 = noteget(var_2157);
                    noteadd(var_2159, var_2158, 1);
                    var_2157--;
                    var_2158--;
                }
            }
            noteadd(var_2122, 100, 1);
        }
        notesave(var_735);
        var_2142 = 0;
        open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        var_1203 = 0;
        yield func463();
        return;
    });
}
function func489(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(489);
        var_2153 = "";
        if (var_2142 == 0) {
            var_2152 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                var_2153 = "" + var_2153 + "" + var_2133[var_2152];
                var_2152++;
            }
        }
        if (var_2142 == 1) {
            var_2153 = var_2144;
        }
        var_2122 = "" + var_2153;
        var_2161 = var_233[var_2042].Var6;
        var_990[var_2161] = 1;
        if (var_726 == 1) {
            var_735 = "01e.dat";
        }
        if (var_726 == 2) {
            var_735 = "02e.dat";
        }
        if (var_726 == 3) {
            var_735 = "03e.dat";
        }
        exist(var_735);

        if (strsize == (-1)) {
            yield func230();
            bsave(file_name = var_735, data = var_753, data_size = null, offset = null);
        }
        notesel(var_754);
        noteload(var_735);
        noteadd(var_2122, var_2161, 1);
        if (var_2122 != "") {
            if (var_2142 == 0) {
                var_2157 = 118;
                var_2158 = 119;
                for (let cnt3 = 0; cnt3 < 19; ++cnt3) {
                    var_2159 = noteget(var_2157);
                    noteadd(var_2159, var_2158, 1);
                    var_2157--;
                    var_2158--;
                }
            }
            if (var_2142 == 1) {
                var_2157 = var_2143 - 1;
                var_2158 = var_2143;
                var_2160 = var_2143 - 100;
                for (let cnt3 = 0; cnt3 < var_2160; ++cnt3) {
                    var_2159 = noteget(var_2157);
                    noteadd(var_2159, var_2158, 1);
                    var_2157--;
                    var_2158--;
                }
            }
            noteadd(var_2122, 100, 1);
        }
        notesave(var_735);
        var_2142 = 0;
        open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
        var_1203 = 0;
        yield func463();
        return;
    });
}
function func490(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(490);
        notesel(var_754);
        var_2162 = noteget(var_1923);
        var_1924 = "" + var_2162 + "";
        return;
    });
}
function func491(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(491);
        var_2153 = "";
        var_2152 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            var_2153 = "" + var_2153 + "" + var_2133[var_2152];
            var_2152++;
        }
        var_1203 = 0;
        var_2163 = 0;
        yield func009(); // ゲーム開始後の基本画面 (メニュー画面を閉じたりすると、かならずfunc009を呼び出す)
        return;
    });
}
// 各アイテムリスト
function func492(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(492);
        /*
        item_name = "";
        item_description1 = "";
        var_808 = "";
        item_ability_description = "";
        item_message1 = "";
        item_message2 = "";
        var_2173 = "";
        buying_price = 0;
        var_1984 = 0;
        var_812 = 0;
        var_2174 = 0;
        var_2039 = "";
        var_2175 = "";
        */
        if (belongings_item_list == 0) {
        item_name = "";
        item_description1 = "";
        var_808 = "";
        item_ability_description = "";
        item_message1 = "";
        item_message2 = "";
        var_2173 = "";
        buying_price = 0;
        var_1984 = 0;
        var_812 = 0;
        var_2174 = 0;
        var_2039 = "";
        var_2175 = "";
        }
        if (belongings_item_list == 1) {
            buying_price = 0;
            item_name = "お金";
            item_description1 = "[お金]";
            var_808 = "";
            item_ability_description = "";
        }
        if (belongings_item_list == 100) {
            buying_price = 17000;
            item_name = "ｽﾀｰ･ﾌﾟﾗﾁﾅのDISC";
            item_description1 = "攻撃:8　防御:4";
            var_808 = "[発動]射撃攻撃を防げるようになるぞ";
            item_ability_description = "３方向に攻撃できるぞ";
            var_812 = 1;
            var_1984 = 7;
            var_2173 = "星";
            var_2174 = 1;
            var_2039 = "弾丸止め";
        }
        if (belongings_item_list == 101) {
            buying_price = 14000;
            item_name = "ｼﾙﾊﾞｰﾁｬﾘｵｯﾂのDISC";
            item_description1 = "攻撃:4　防御:1";
            var_808 = "[発動]５ターンの間、残像を出現させるぞ";
            item_ability_description = "時々２回連続で攻撃できるぞ";
            var_812 = 1;
            var_1984 = 9;
            var_2173 = "銀";
            var_2174 = 1;
            var_2039 = "ブラボー！";
        }
        if (belongings_item_list == 102) {
            buying_price = 19000;
            item_name = "ｷﾝｸﾞ･ｸﾘﾑｿﾞﾝのDISC";
            item_description1 = "攻撃:9　防御:3";
            var_808 = "[発動]５ターンの時間が消し飛ぶぞ";
            item_ability_description = "裏切り者に大ダメージを与えるぞ";
            var_812 = 1;
            var_1984 = 5;
            var_2173 = "王";
            var_2174 = 1;
            var_2039 = "時よ消し飛べ！";
        }
        if (belongings_item_list == 103) {
            buying_price = 650;
            item_name = "ｴｺｰｽﾞACT3のDISC";
            item_description1 = "攻撃:2　防御:1";
            var_808 = "[発動]目の前の敵を鈍足状態にするぞ";
            item_ability_description = "時々相手を遅くさせるぞ";
            var_812 = 1;
            var_1984 = 8;
            var_2173 = "鈍";
            var_2174 = 1;
            var_2039 = "ACT 3 FREEZE ！";
        }
        if (belongings_item_list == 104) {
            buying_price = 700;
            item_name = "ｻﾞ･ﾊﾝﾄﾞのDISC";
            item_description1 = "攻撃:7　防御:1";
            var_808 = "[発動]遠くの敵やアイテムを引き寄せるぞ";
            item_ability_description = "壁や罠をガオンと消せるぞ";
            var_812 = 1;
            var_1984 = 4;
            var_2173 = "手";
            var_2174 = 1;
            var_2039 = "空間を削り取る！";
        }
        if (belongings_item_list == 105) {
            buying_price = 1250;
            item_name = "ﾁﾘﾍﾟｯﾊﾟｰのDISC";
            item_description1 = "攻撃:3　防御:2";
            var_808 = "[発動]部屋内の敵を一定時間盲目にするぞ";
            item_ability_description = "連続空振りすると次に会心が出るぞ";
            var_812 = 1;
            var_1984 = 4;
            var_2173 = "電";
            var_2174 = 1;
            var_2039 = "電力放出！";
        }
        if (belongings_item_list == 106) {
            buying_price = 4600;
            item_name = "ｸﾚｲｼﾞｰ･DのDISC";
            item_description1 = "攻撃:7　防御:1";
            var_808 = "[発動]このDISCと引き換えにDISCを合成するぞ";
            item_ability_description = "会心の一撃が多く出るぞ";
            var_812 = 1;
            var_1984 = 4;
            var_2173 = "狂";
            var_2174 = 2;
            var_2039 = "合成";
        }
        if (belongings_item_list == 107) {
            buying_price = 750;
            item_name = "ﾃﾞｽ･13のDISC";
            item_description1 = "攻撃:2　防御:1";
            var_808 = "[発動]隣接した敵を眠らせるぞ";
            item_ability_description = "寝ている敵を起こしにくいぞ";
            var_812 = 3;
            var_1984 = 3;
            var_2173 = "夢";
            var_2174 = 1;
            var_2039 = "ラリホ～ッ！";
            if (var_172 == 1) {
                var_808 = "[★発動]部屋内の敵を眠らせるぞ";
            }
        }
        if (belongings_item_list == 108) {
            buying_price = 16000;
            item_name = "ｽﾃｨｯｷｰﾌｨﾝｶﾞｰｽﾞのDISC";
            item_description1 = "攻撃:4　防御:3";
            var_808 = "[発動]キーを押すまで敵をやりすごせるぞ";
            item_ability_description = "２マス先まで攻撃できるぞ";
            var_812 = 1;
            var_1984 = 5;
            var_2173 = "指";
            var_2174 = 1;
            var_2039 = "去るのを待つんだ";
        }
        if (belongings_item_list == 109) {
            buying_price = 13200;
            item_name = "ﾏｼﾞｼｬﾝｽﾞﾚｯﾄﾞのDISC";
            item_description1 = "攻撃:6　防御:2";
            var_808 = "[発動]部屋内の敵にランダムでダメージＳ";
            item_ability_description = "体力満タンでＣＦＨが撃てるぞ";
            var_812 = 1;
            var_1984 = 3;
            var_2173 = "赤";
            var_2174 = 1;
            var_2039 = "ｸﾛｽﾌｧｲｱｰﾊﾘｹｰﾝ";
            if (var_172 == 1) {
                var_808 = "[★発動]部屋内の敵にランダムでダメージＳ";
            }
        }
        if (belongings_item_list == 111) {
            buying_price = 15600;
            item_name = "ｻﾞ･ﾜｰﾙﾄﾞのDISC";
            item_description1 = "攻撃:9　防御:4";
            var_808 = "[発動]5ﾀｰﾝの間、時間が止まるぞ";
            item_ability_description = "ジョースターの血統に大ダメージ";
            var_812 = 1;
            var_1984 = 3;
            var_2173 = "世";
            var_2174 = 1;
            var_2039 = "時よ止まれ！";
        }
        if (belongings_item_list == 112) {
            buying_price = 11700;
            item_name = "ｷﾗｰ･ｸｨｰﾝのDISC";
            item_description1 = "攻撃:5　防御:3";
            var_808 = "[発動]目の前にｼｱｰﾊｰﾄｱﾀｯｸを呼び出すぞ";
            item_ability_description = "杜王町住人に大ダメージを与えるぞ";
            var_812 = 1;
            var_1984 = 4;
            var_2173 = "殺";
            var_2174 = 1;
            var_2039 = "シアーハートアタック！";
        }
        if (belongings_item_list == 113) {
            buying_price = 6100;
            item_name = "ｸﾗｯｼｭのDISC";
            item_description1 = "攻撃:4　防御:0";
            var_808 = "[発動]目の前の敵を瞬間移動させるぞ";
            item_ability_description = "水場を通して攻撃できるぞ";
            var_812 = 1;
            var_1984 = 5;
            var_2173 = "鮫";
            var_2174 = 0;
            var_2039 = "くらいつけ！";
        }
        if (belongings_item_list == 114) {
            buying_price = 9400;
            item_name = "ﾎﾜｲﾄｽﾈｲｸのDISC";
            item_description1 = "攻撃:3　防御:1";
            var_808 = "[発動]目の前の敵を倒しDISCにするぞ";
            item_ability_description = "囚人に大ダメージを与えるぞ";
            var_812 = 1;
            var_1984 = 6;
            var_2173 = "蛇";
            var_2174 = 1;
            var_2039 = "ＤＩＳＣ化";
        }
        if (belongings_item_list == 115) {
            buying_price = 5200;
            item_name = "G･ｴｸｽﾍﾟﾘｴﾝｽのDISC";
            item_description1 = "攻撃:4　防御:2";
            var_808 = "[発動]攻撃を跳ね返す植物が出現するぞ";
            item_ability_description = "ｶｴﾙを持ってるとﾀﾞﾒｰｼﾞを反射するぞ";
            var_812 = 2;
            var_1984 = 5;
            var_2173 = "金";
            var_2174 = 1;
            var_2039 = "植物生成";
        }
        if (belongings_item_list == 116) {
            buying_price = 700;
            item_name = "ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙのDISC";
            item_description1 = "攻撃:1　防御:2";
            var_808 = "[発動]このフロアの地図がわかるぞ";
            item_ability_description = "波紋に弱い敵に大ﾀﾞﾒｰｼﾞを与えるぞ";
            var_812 = 1;
            var_1984 = 10;
            var_2173 = "紫";
            var_2174 = 1;
            var_2039 = "周辺感知";
        }
        if (belongings_item_list == 117) {
            buying_price = 3800;
            item_name = "ﾀﾞｰｸﾌﾞﾙｰﾑｰﾝのDISC";
            item_description1 = "攻撃:2　防御:2";
            var_808 = "[発動]部屋内の敵から体力を吸い取るぞ";
            item_ability_description = "周囲に水があるほど強いぞ";
            var_812 = 1;
            var_1984 = 3;
            var_2173 = "青";
            var_2174 = 0;
            var_2039 = "フジツボ";
            if (var_172 == 1) {
                var_808 = "[★発動]部屋内の敵から体力を吸い取るぞ";
            }
        }
        if (belongings_item_list == 118) {
            buying_price = 6300;
            item_name = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝのDISC";
            item_description1 = "攻撃:2　防御:3";
            var_808 = "[発動]周囲にﾀﾞｲﾊﾞｰﾀﾞｳﾝを潜ませておけるぞ";
            item_ability_description = "近くの敵に壁を通して攻撃できるぞ";
            var_812 = 1;
            var_1984 = 6;
            var_2173 = "潜";
            var_2174 = 0;
            var_2039 = "潜水して待ち伏せ";
        }
        if (belongings_item_list == 119) {
            buying_price = 2850;
            item_name = "ｽﾊﾟｲｽ･ｶﾞｰﾙのDISC";
            item_description1 = "攻撃:2　防御:3";
            var_808 = "[発動]直接攻撃を喰らうと後ろに弾むぞ";
            item_ability_description = "ｱｲﾃﾑを壊されることがなくなるぞ";
            var_812 = 2;
            var_1984 = 5;
            var_2173 = "柔";
            var_2174 = 0;
            var_2039 = "柔ラカクスル！";
        }
        if (belongings_item_list == 120) {
            buying_price = 2700;
            item_name = "ｽﾄｰﾝ･ﾌﾘｰのDISC";
            item_description1 = "攻撃:3　防御:4";
            var_808 = "[発動]体力が全回復するぞ";
            item_ability_description = "後ろの敵に連続して攻撃できるぞ";
            var_812 = 1;
            var_1984 = 6;
            var_2173 = "糸";
            var_2174 = 1;
            var_2039 = "縫合";
        }
        if (belongings_item_list == 121) {
            buying_price = 1000;
            item_name = "ﾊﾟｰﾌﾟﾙ･ﾍｲｽﾞのDISC";
            item_description1 = "攻撃:7　防御:1";
            var_808 = "[発動]ウイルスで部屋内全員にダメージＡ";
            item_ability_description = "時々変な方向を攻撃してしまうぞ";
            var_812 = 1;
            var_1984 = 5;
            var_2173 = "毒";
            var_2174 = 1;
            var_2039 = "殺人ウイルス";
            if (var_172 == 1) {
                var_808 = "[★発動]ウイルスで部屋内全員にダメージＡ";
            }
        }
        if (belongings_item_list == 122) {
            buying_price = 1000;
            item_name = "ｱﾇﾋﾞｽ神のDISC";
            item_description1 = "攻撃:6　防御:0";
            var_808 = "[発動]同種に連続で直接攻撃する程大ﾀﾞﾒｰｼﾞ";
            item_ability_description = "アイテムが壁をすり抜けて飛ぶぞ";
            var_812 = 3;
            var_1984 = 3;
            var_2173 = "刀";
            var_2174 = 0;
            var_2039 = "憶えるぞ！";
        }
        if (belongings_item_list == 123) {
            buying_price = 11000;
            item_name = "ｸﾘｰﾑのDISC";
            item_description1 = "攻撃:8　防御:0";
            var_808 = "[発動]前方の敵を亜空間に飲み込むぞ";
            item_ability_description = "稀に相手を一撃で倒せるぞ";
            var_812 = 1;
            var_1984 = 3;
            var_2173 = "亜";
            var_2174 = 1;
            var_2039 = "亜空の瘴気";
        }
        if (belongings_item_list == 124) {
            buying_price = 600;
            item_name = "ﾑｰﾃﾞｨｰﾌﾞﾙｰｽのDISC";
            item_description1 = "攻撃:1　防御:1";
            var_808 = "[発動]アイテムを一つ倉庫に送れるぞ";
            item_ability_description = "新入りに大ダメージを与えるぞ";
            var_812 = 1;
            var_1984 = 5;
            var_2173 = "返";
            var_2174 = 1;
            var_2039 = "ギュルギュル";
        }
        if (belongings_item_list == 200) {
            buying_price = 1800;
            item_name = "ｽｰﾊﾟｰﾌﾗｲのDISC";
            item_description1 = "攻撃:0　防御:5";
            var_808 = "[発動]20ﾀｰﾝの間 鉄塔を出現させるぞ";
            item_ability_description = "痛恨の一撃のダメージを返すぞ";
            var_812 = 2;
            var_1984 = 4;
            var_2173 = "塔";
            var_2174 = 0;
            var_2039 = "鉄塔生成";
        }
        if (belongings_item_list == 201) {
            buying_price = 1500;
            item_name = "ｲｴﾛｰﾃﾝﾊﾟﾗﾝｽのDISC";
            item_description1 = "攻撃:1　防御:4";
            var_808 = "[発動]このﾌﾛｱで熱と冷気に強くなるぞ";
            item_ability_description = "肉片攻撃が効かなくなるぞ";
            var_812 = 2;
            var_1984 = 3;
            var_2173 = "黄";
            var_2174 = 1;
            var_2039 = "火も氷も無駄！";
        }
        if (belongings_item_list == 202) {
            buying_price = 6100;
            item_name = "ﾎﾜｲﾄｱﾙﾊﾞﾑのDISC";
            item_description1 = "攻撃:0　防御:8";
            var_808 = "[発動]部屋内の敵を凍らせるぞ";
            item_ability_description = "時々敵を氷漬けにするぞ";
            var_812 = 1;
            var_1984 = 5;
            var_2173 = "氷";
            var_2174 = 0;
            var_2039 = "超低温の世界";
            if (var_172 == 1) {
                var_808 = "[★発動]フロア内全ての敵を凍らせるぞ";
            }
        }
        if (belongings_item_list == 203) {
            buying_price = 4400;
            item_name = "ｻﾞ･ﾌｰﾙのDISC";
            item_description1 = "攻撃:1　防御:4";
            var_808 = "[発動]周囲に砂をかけて他の場所へ飛ぶぞ";
            item_ability_description = "砂に変化して攻撃をかわせるぞ";
            var_812 = 2;
            var_1984 = 3;
            var_2173 = "砂";
            var_2174 = 0;
            var_2039 = "砂のザ･フール";
        }
        if (belongings_item_list == 204) {
            buying_price = 5300;
            item_name = "ｼｱｰﾊｰﾄｱﾀｯｸのDISC";
            item_description1 = "攻撃:1　防御:8";
            var_808 = "[発動]この場で爆発を起こすぞ";
            item_ability_description = "最大HPが増えるぞ";
            var_812 = 4;
            var_1984 = 4;
            var_2173 = "爆";
            var_2174 = 1;
            var_2039 = "周辺爆破";
        }
        if (belongings_item_list == 205) {
            buying_price = 3500;
            item_name = "ｸﾗﾌﾄﾜｰｸのDISC";
            item_description1 = "攻撃:1　防御:5";
            var_808 = "[発動]隣接した敵をその場に固定するぞ";
            item_ability_description = "射撃によるダメージを抑えるぞ";
            var_812 = 2;
            var_1984 = 5;
            var_2173 = "停";
            var_2174 = 1;
            var_2039 = "「固定」";
            if (var_172 == 1) {
                var_808 = "[★発動]部屋内の敵をその場に固定するぞ";
            }
        }
        if (belongings_item_list == 206) {
            buying_price = 4200;
            item_name = "ｵｱｼｽのDISC";
            item_description1 = "攻撃:0　防御:3";
            var_808 = "[発動]20ﾀｰﾝの間、周囲の壁を溶かすぞ";
            item_ability_description = "殴る時に時々敵を柔らかくするぞ";
            var_812 = 2;
            var_1984 = 5;
            var_2173 = "泥";
            var_2174 = 1;
            var_2039 = "泥化";
        }
        if (belongings_item_list == 207) {
            buying_price = 2500;
            item_name = "ｸﾞﾚｲﾄﾌﾙ･ﾃﾞｯﾄﾞのDISC";
            item_description1 = "攻撃:2　防御:2";
            var_808 = "[発動]部屋内の敵の攻撃力を下げるぞ";
            item_ability_description = "若化攻撃・老化攻撃を防ぐぞ";
            var_812 = 3;
            var_1984 = 5;
            var_2173 = "老";
            var_2174 = 0;
            var_2039 = "老化攻撃";
            if (var_172 == 1) {
                var_808 = "[★発動]フロア内全ての敵の攻撃力を下げるぞ";
            }
        }
        if (belongings_item_list == 300) {
            buying_price = 2000;
            item_name = "ﾊﾟｰﾙ･ｼﾞｬﾑのDISC";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]満腹度が50回復するぞ";
            item_ability_description = "お腹が減りにくいぞ";
            var_812 = 3;
            var_1984 = 4;
            var_2173 = "食";
            var_2174 = 1;
            var_2039 = "食べる";
        }
        if (belongings_item_list == 301) {
            buying_price = 8800;
            item_name = "ﾊｰｳﾞｪｽﾄのDISC";
            item_description1 = "攻撃:1　防御:2";
            var_808 = "[発動]アイテムを最大9個集めてくるぞ";
            item_ability_description = "アイテムのある場所を感知できるぞ";
            var_812 = 3;
            var_1984 = 4;
            var_2173 = "拾";
            var_2174 = 1;
            var_2039 = "アイテム収集";
        }
        if (belongings_item_list == 302) {
            buying_price = 800;
            item_name = "ﾊｲｳｪｲ･ﾄｩ･ﾍﾙのDISC";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]道連れで部屋全体にダメージＣ";
            item_ability_description = "死にたくなってくるぞ";
            var_812 = 3;
            var_1984 = 6;
            var_2173 = "道";
            var_2174 = 0;
            var_2039 = "一緒にいこうよォ～";
            if (var_172 == 1) {
                var_808 = "[★発動]道連れで部屋全体にダメージＣ";
            }
        }
        if (belongings_item_list == 303) {
            buying_price = 7400;
            item_name = "ﾄﾞﾗｺﾞﾝｽﾞﾄﾞﾘｰﾑのDISC";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]攻撃をかわしやすくなるぞ";
            item_ability_description = "罠を感知できるぞ";
            var_812 = 3;
            var_1984 = 6;
            var_2173 = "龍";
            var_2174 = 0;
            var_2039 = "安全な方角";
        }
        if (belongings_item_list == 304) {
            buying_price = 3900;
            item_name = "ｳｪｻﾞｰﾘﾎﾟｰﾄのDISC";
            item_description1 = "攻撃:3　防御:6";
            var_808 = "[発動]落雷で部屋内全員にダメージＢ";
            item_ability_description = "弾丸が届きにくくなるぞ";
            var_812 = 2;
            var_1984 = 6;
            var_2173 = "天";
            var_2174 = 0;
            var_2039 = "落雷";
            if (var_172 == 1) {
                var_808 = "[★発動]落雷で部屋内全員にダメージＢ";
            }
        }
        if (belongings_item_list == 305) {
            buying_price = 7900;
            item_name = "ｼﾝﾃﾞﾚﾗのDISC";
            item_description1 = "攻撃:1　防御:1";
            var_808 = "[発動]次の階でｱｲﾃﾑがたくさん出るぞ";
            item_ability_description = "敵がｱｲﾃﾑを落としやすくなるぞ";
            var_812 = 3;
            var_1984 = 4;
            var_2173 = "幸";
            var_2174 = 0;
            var_2039 = "運が良くなるメイク";
        }
        if (belongings_item_list == 306) {
            buying_price = 2500;
            item_name = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰのDISC";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]敵のいる位置がわかるようになるぞ";
            item_ability_description = "射撃ｽﾀﾝﾄﾞの攻撃力が修正値分上昇";
            var_812 = 4;
            var_1984 = 6;
            var_2173 = "衛";
            var_2174 = 0;
            var_2039 = "空気の流れを読む！";
        }
        if (belongings_item_list == 308) {
            buying_price = 2200;
            item_name = "ｴﾎﾞﾆｰ･ﾃﾞﾋﾞﾙのDISC";
            item_description1 = "攻撃:2　防御:0";
            var_808 = "[発動]目の前にエボニー人形を呼び出すぞ";
            item_ability_description = "恨みのある敵へのﾀﾞﾒｰｼﾞが倍増\t\t";
            var_812 = 3;
            var_1984 = 3;
            var_2173 = "悪";
            var_2174 = 1;
            var_2039 = "恨みはらさで…";
        }
        if (belongings_item_list == 310) {
            buying_price = 1000;
            item_name = "ｴﾝﾌﾟﾚｽのDISC";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]大声で敵を呼び寄せてしまうぞ";
            item_ability_description = "時々全ての敵を目覚めさせるぞ";
            var_812 = 3;
            var_1984 = 3;
            var_2173 = "疽";
            var_2174 = 0;
            var_2039 = "ここにいるわよッ！";
        }
        if (belongings_item_list == 311) {
            buying_price = 1000;
            item_name = "ﾁｰﾌﾟ･ﾄﾘｯｸのDISC";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]ブツブツ言われて精神力が弱るぞ";
            item_ability_description = "背中を見られるとﾀﾞﾒｰｼﾞを喰らうぞ";
            var_812 = 3;
            var_1984 = 4;
            var_2173 = "背";
            var_2174 = 1;
            var_2039 = "おはなし";
        }
        if (belongings_item_list == 312) {
            buying_price = 8200;
            item_name = "ｴｱﾛｽﾐｽのDISC";
            item_description1 = "攻撃:2　防御:0";
            var_808 = "[発動]フロア中にランダムでダメージＳ";
            item_ability_description = "敵の場所を感知できるぞ";
            var_812 = 3;
            var_1984 = 5;
            var_2173 = "飛";
            var_2174 = 1;
            var_2039 = "無差別乱射";
            if (var_172 == 1) {
                var_808 = "[★発動]フロア中にランダムでダメージＳ";
            }
        }
        if (belongings_item_list == 313) {
            buying_price = 5200;
            item_name = "ﾊｲｳｪｲ･ｽﾀｰのDISC";
            item_description1 = "攻撃:1　防御:1";
            var_808 = "[発動]部屋内の敵から満腹度を吸い取るぞ";
            item_ability_description = "時々ﾀﾞﾒｰｼﾞを吸収しHPを回復するぞ";
            var_812 = 1;
            var_1984 = 4;
            var_2173 = "養";
            var_2174 = 0;
            var_2039 = "養分をくれェ～";
            if (var_172 == 1) {
                var_808 = "[★発動]部屋内の敵から養分を吸い取るぞ";
            }
        }
        if (belongings_item_list == 314) {
            buying_price = 1900;
            item_name = "ｽﾄﾚｲ･ｷｬｯﾄのDISC";
            item_description1 = "攻撃:0　防御:6";
            var_808 = "[発動]空気弾を発射して動きを止めるぞ";
            item_ability_description = "爆風によるﾀﾞﾒｰｼﾞが少なくなるぞ";
            var_812 = 3;
            var_1984 = 4;
            var_2173 = "猫";
            var_2174 = 0;
            var_2039 = "空気弾";
        }
        if (belongings_item_list == 315) {
            buying_price = 3500;
            item_name = "ｴﾋﾟﾀﾌのDISC";
            item_description1 = "攻撃:2　防御:1";
            var_808 = "[発動]敵･罠の可視･感知。透明でも見えるぞ";
            item_ability_description = "周囲に罠があると警告が出るぞ";
            var_812 = 4;
            var_1984 = 5;
            var_2173 = "予";
            var_2174 = 0;
            var_2039 = "エピタフ！";
        }
        if (belongings_item_list == 316) {
            buying_price = 1000;
            item_name = "ｻﾊﾞｲﾊﾞｰのDISC";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]部屋内の敵が混乱するぞ";
            item_ability_description = "方向転換キーで敵の体力がわかるぞ";
            var_812 = 3;
            var_1984 = 6;
            var_2173 = "乱";
            var_2174 = 1;
            var_2039 = "ファイトクラブ";
            if (var_172 == 1) {
                var_808 = "[★発動]フロア内全ての敵が混乱するぞ";
            }
        }
        if (belongings_item_list == 317) {
            buying_price = 2300;
            item_name = "ｷｯｽのDISC";
            item_description1 = "攻撃:4　防御:1";
            var_808 = "[発動]ｷｯｽのｼｰﾙを地面に貼り付けるぞ";
            item_ability_description = "殴った敵が時々分裂するぞ";
            var_812 = 1;
            var_1984 = 6;
            var_2173 = "分";
            var_2174 = 1;
            var_2039 = "シール";
        }
        if (belongings_item_list == 318) {
            buying_price = 1800;
            item_name = "ｼﾞｬﾝﾋﾟﾝJﾌﾗｯｼｭのDISC";
            item_description1 = "攻撃:2　防御:3";
            var_808 = "[発動]真空で部屋内全員にダメージＢ";
            item_ability_description = "時々敵をふっとばして混乱させるぞ";
            var_812 = 1;
            var_1984 = 6;
            var_2173 = "空";
            var_2174 = 0;
            var_2039 = "真空の部屋";
            if (var_172 == 1) {
                var_808 = "[★発動]真空で部屋内全員にダメージＢ";
            }
        }
        if (belongings_item_list == 319) {
            buying_price = 3400;
            item_name = "ﾎﾞｰｲIIﾏﾝのDISC";
            item_description1 = "攻撃:2　防御:2";
            var_808 = "[発動]合成された能力を消去できるぞ";
            item_ability_description = "殴った敵が時々封印状態になるぞ";
            var_812 = 1;
            var_1984 = 4;
            var_2173 = "吸";
            var_2174 = 1;
            var_2039 = "引きずり出す！";
        }
        if (belongings_item_list == 320) {
            buying_price = 4200;
            item_name = "ﾒﾀﾘｶのDISC";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]10ﾀｰﾝ透明になり敵に気づかれないぞ";
            item_ability_description = "敵や罠からの磁力が効かないぞ";
            var_812 = 3;
            var_1984 = 5;
            var_2173 = "磁";
            var_2174 = 1;
            var_2039 = "透明化";
        }
        if (belongings_item_list == 350) {
            buying_price = 1000;
            item_name = "☆目覚め";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "寝ている敵を起こしやすいぞ";
            var_812 = 3;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 351) {
            buying_price = 1000;
            item_name = "★睡眠よけ";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "眠らされることが無くなるぞ";
            var_812 = 4;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 352) {
            buying_price = 1000;
            item_name = "★腹減り防止";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "満腹度の吸い取り攻撃を防ぐぞ";
            var_812 = 4;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 353) {
            buying_price = 1000;
            item_name = "☆呪われ増加";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "呪われたDISCが出やすいぞ";
            var_812 = 3;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 354) {
            buying_price = 1000;
            item_name = "☆＋修正減り";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "＋のついた装備DISCが出にくいぞ";
            var_812 = 3;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 355) {
            buying_price = 1000;
            item_name = "☆罠発動";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "罠が作動しやすいぞ";
            var_812 = 3;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 356) {
            buying_price = 1000;
            item_name = "☆お金減り";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "拾えるお金の金額が少なくなるぞ";
            var_812 = 3;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 357) {
            buying_price = 1000;
            item_name = "☆睡眠出現減";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "寝ている敵が少なくなるぞ";
            var_812 = 3;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 358) {
            buying_price = 1000;
            item_name = "☆敵増え速い";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "フロアに敵が出現しやすくなるぞ";
            var_812 = 3;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 359) {
            buying_price = 1000;
            item_name = "☆強敵出現";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "時々レベル２の敵が出現するぞ";
            var_812 = 3;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 360) {
            buying_price = 1000;
            item_name = "★カエル変化防止";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "ｱｲﾃﾑをｶｴﾙにされないぞ";
            var_812 = 4;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 361) {
            buying_price = 1000;
            item_name = "★抜き取り防止";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "神父にDISCを抜き取られないぞ";
            var_812 = 4;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 362) {
            buying_price = 1000;
            item_name = "★盗まれ防止";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "ﾊｰｳﾞｪｽﾄに盗まれないぞ";
            var_812 = 4;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 363) {
            buying_price = 1000;
            item_name = "☆磁力倍増";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "磁力が上がりやすいぞ";
            var_812 = 3;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 364) {
            buying_price = 1000;
            item_name = "☆モンハウ増";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "ﾓﾝｽﾀｰﾊｳｽが出やすいぞ";
            var_812 = 3;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 365) {
            buying_price = 1000;
            item_name = "★階段感知";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "階段の場所がわかるぞ";
            var_812 = 4;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 366) {
            buying_price = 1000;
            item_name = "★ヒラリ防止";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "ヒラリとかわされないぞ";
            var_812 = 1;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 367) {
            buying_price = 1000;
            item_name = "☆誰からも痛恨";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "誰からも痛恨の一撃を喰らうぞ";
            var_812 = 3;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 368) {
            buying_price = 1000;
            item_name = "★化け感知";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "敵が化けてるアイテムがわかるぞ";
            var_812 = 4;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 369) {
            buying_price = 1000;
            item_name = "★暗殺倍打";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "暗殺チームに大ダメージ";
            var_812 = 1;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 370) {
            buying_price = 1000;
            item_name = "★九柱神倍打";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]なし";
            item_ability_description = "ｴｼﾞﾌﾟﾄ九柱神に大ダメージ";
            var_812 = 1;
            var_1984 = 0;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "なし";
        }
        if (belongings_item_list == 393) {
            buying_price = 10000;
            item_name = "ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨのDISC";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]漫画のｷｬﾗｸﾀｰを敵として召還するぞ";
            item_ability_description = "ｺﾐｯｸｽが出現しやすくなるぞ";
            var_812 = 4;
            var_1984 = 6;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "ボヘミアンラプソディ！";
        }
        if (belongings_item_list == 394) {
            buying_price = 1000;
            item_name = "ｷﾗｰﾀｲｶﾞｰｸｲｰﾝのDISC";
            item_description1 = "攻撃:9　防御:9";
            var_808 = "[発動]ｼｱｰﾊｰﾄｱﾀｯｸを呼び出すぞ";
            item_ability_description = "杜王町住人に大ダメージを与えるぞ";
            var_812 = 1;
            var_1984 = 4;
            var_2173 = "";
            var_2174 = 1;
            var_2039 = "シアーハートアタック！";
        }
        if (belongings_item_list == 395) {
            buying_price = 4700;
            item_name = "ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISC";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]部屋の敵を爆弾にし3ﾀｰﾝ後爆発させる";
            item_ability_description = "能力DISCと引き換えに復活するぞ";
            var_812 = 4;
            var_1984 = 4;
            var_2173 = "戻";
            var_2174 = 1;
            var_2039 = "負けて死ね";
        }
        if (belongings_item_list == 396) {
            buying_price = 10000;
            item_name = "ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝのDISC";
            item_description1 = "攻撃:0　防御:0";
            var_808 = "[発動]一時的に速く動けるぞ";
            item_ability_description = "装備すると速く動けるぞ";
            var_812 = 3;
            var_1984 = 6;
            var_2173 = "速";
            var_2174 = 1;
            var_2039 = "天国の時";
        }
        if (belongings_item_list == 397) {
            buying_price = 10000;
            item_name = "ﾍﾋﾞｰ･ｳｪｻﾞｰのDISC";
            item_description1 = "攻撃:8　防御:8";
            var_808 = "[発動]敵が鈍足になる虹を大量に作り出すぞ";
            item_ability_description = "弾丸がかなり届きにくくなるぞ";
            var_812 = 3;
            var_1984 = 6;
            var_2173 = "虹";
            var_2174 = 0;
            var_2039 = "ヘビーウェザー";
        }
        if (belongings_item_list == 398) {
            buying_price = 20000;
            item_name = "ｽﾀﾌﾟﾗｻﾞﾜｰﾙﾄﾞのDISC";
            item_description1 = "攻撃:10 防御:10";
            var_808 = "[発動]5ﾀｰﾝの間、時間が止まるぞ";
            item_ability_description = "３方向に攻撃できるぞ";
            var_812 = 1;
            var_1984 = 7;
            var_2173 = "時";
            var_2174 = 0;
            var_2039 = "ｽﾀｰﾌﾟﾗﾁﾅ･ｻﾞ･ﾜｰﾙﾄﾞ！";
        }
        if (belongings_item_list == 399) {
            buying_price = 1000;
            item_name = "G･E･ﾚｸｲｴﾑのDISC";
            item_description1 = "攻撃:12 防御:12";
            var_808 = "[発動]終わりが無いのが終わりを終わりにする";
            item_ability_description = "全ての敵に大ダメージを与えるぞ";
            var_812 = 3;
            var_1984 = 5;
            var_2173 = "鎮";
            var_2174 = 0;
            var_2039 = "終わりにする";
        }
        // var_487が0より大きければレアdisc(色違い)
        if (disc_rarity > 0 && belongings_item_list >= 100 && belongings_item_list < 400) {
            item_name = "☆" + item_name;
        }
        if (belongings_item_list == 400) {
            buying_price = 900;
            item_name = "ﾊｲｴﾛﾌｧﾝﾄｸﾞﾘｰﾝのDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:10";
            var_808 = "離れた敵にダメージを与えるぞ";
            item_ability_description = "[発動]足元に法王の結界を仕掛けるぞ";
            var_1984 = 3;
            var_2174 = 0;
            var_2039 = "法王の結界";
        }
        if (belongings_item_list == 401) {
            buying_price = 500;
            item_name = "ﾌｰ･ﾌｧｲﾀｰｽﾞのDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:2";
            var_808 = "離れた敵にダメージを与えるぞ";
            item_ability_description = "[発動]体力を２０回復させるぞ";
            var_1984 = 6;
            var_2174 = 0;
            var_2039 = "プランクトン詰め";
        }
        if (belongings_item_list == 402) {
            buying_price = 800;
            item_name = "ｴﾝﾍﾟﾗｰのDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:8";
            var_808 = "壁に当たると方向が変わるぞ";
            item_ability_description = "[発動]弾丸の軌道を操れるぞ";
            var_1984 = 3;
            var_2174 = 0;
            var_2039 = "弾丸を操る";
        }
        if (belongings_item_list == 403) {
            buying_price = 700;
            item_name = "ｾｯｸｽﾋﾟｽﾄﾙｽﾞのDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:6";
            var_808 = "同じ部屋の誰かに命中するぞ";
            item_ability_description = "[発動]ﾋﾟｯﾂｧを食べると射撃回数が増えるぞ";
            var_1984 = 5;
            var_2174 = 0;
            var_2039 = "昼メシの時間";
        }
        if (belongings_item_list == 404) {
            buying_price = 1100;
            item_name = "ﾎﾙｽ神のDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:0（ﾀﾞﾒｰｼﾞ無）";
            var_808 = "敵を凍らせて動けなくするぞ";
            item_ability_description = "[発動]足元に氷の罠を仕掛けるぞ";
            var_1984 = 3;
            var_2174 = 0;
            var_2039 = "ホルス神の罠";
        }
        if (belongings_item_list == 405) {
            buying_price = 450;
            item_name = "ｴｺｰｽﾞACT2のDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:0（ﾀﾞﾒｰｼﾞ無）";
            var_808 = "敵をドヒュウと吹き飛ばせるぞ";
            item_ability_description = "[発動]足元にドッグォンの文字を仕掛けるぞ";
            var_1984 = 4;
            var_2174 = 0;
            var_2039 = "ドッグォンの文字";
        }
        if (belongings_item_list == 406) {
            buying_price = 550;
            item_name = "ｴｺｰｽﾞACT1のDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:0（ﾀﾞﾒｰｼﾞ無）";
            var_808 = "音を貼り付けて敵を混乱させるぞ";
            item_ability_description = "[発動]足元に音の罠を仕掛けるぞ";
            var_1984 = 8;
            var_2174 = 0;
            var_2039 = "ビシ！バギ！ボ！";
        }
        if (belongings_item_list == 407) {
            buying_price = 900;
            item_name = "ﾊｲｴﾛﾌｧﾝﾄｴﾒﾗﾙﾄﾞのDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:15";
            var_808 = "離れた敵にダメージを与えるぞ";
            item_ability_description = "[発動]足元に法王の結界を仕掛けるぞ";
            var_1984 = 3;
            var_2174 = 0;
            var_2039 = "法王の結界";
        }
        if (belongings_item_list == 408) {
            buying_price = 750;
            item_name = "ﾏﾝ･ｲﾝ･ｻﾞ･ﾐﾗｰのDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:0（ﾀﾞﾒｰｼﾞ無）";
            var_808 = "敵と自分の場所が入れ替わるぞ";
            item_ability_description = "[発動]鈍足になる鏡を仕掛けるぞ";
            var_1984 = 5;
            var_2174 = 0;
            var_2039 = "半分だけ許可する！";
        }
        if (belongings_item_list == 409) {
            buying_price = 550;
            item_name = "ﾗﾊﾞｰｽﾞのDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:0（ﾀﾞﾒｰｼﾞ無）";
            var_808 = "取り付いた敵は自分と同じﾀﾞﾒｰｼﾞを喰らうぞ";
            item_ability_description = "[発動]足元にﾗﾊﾞｰｽﾞを潜ませておけるぞ";
            var_1984 = 3;
            var_2174 = 0;
            var_2039 = "ラバーズ";
        }
        if (belongings_item_list == 411) {
            buying_price = 1300;
            item_name = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰのDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:5";
            var_808 = "敵を貫通するぞ";
            item_ability_description = "[発動]近い距離に瞬間的に移動するぞ";
            var_1984 = 3;
            var_2174 = 0;
            var_2039 = "プン";
        }
        if (belongings_item_list == 412) {
            buying_price = 1600;
            item_name = "ﾍﾌﾞﾝｽﾞﾄﾞｱｰのDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:0（ﾀﾞﾒｰｼﾞ無）";
            var_808 = "特殊攻撃を封印するぞ。重ねがけもできるぞ。";
            item_ability_description = "[発動]目の前の敵の情報がわかるぞ";
            var_1984 = 4;
            var_2174 = 0;
            var_2039 = "ヘブンズドアー";
        }
        if (belongings_item_list == 414) {
            buying_price = 1200;
            item_name = "ﾀｽｸのDISC";
            item_description1 = "[遠距離ｽﾀﾝﾄﾞ]　攻撃力:12";
            var_808 = "離れた敵にダメージを与えるぞ";
            item_ability_description = "[発動]足元に移動する穴を仕掛けるぞ";
            var_1984 = 99;
            var_2174 = 0;
            var_2039 = "黄金の回転へ！";
        }
        if (belongings_item_list == 560) {
            buying_price = 400;
            item_name = "仗助のDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "髪型をけなされた気分になるぞ";
            item_ability_description = "投げると敵が混乱するぞ";
            item_message1 = "プッツ―――――ン！";
        }
        if (belongings_item_list == 562) {
            buying_price = 1500;
            item_name = "康一のDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "康一のように急成長するぞ";
            item_ability_description = "レベルが１上がるぞ";
            item_message1 = "ﾃﾞｨｱﾎﾞﾛはレベルが上がった！";
        }
        if (belongings_item_list == 563) {
            buying_price = 400;
            item_name = "ﾝﾄﾞｩｰﾙのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "盲目になるが敵の位置を感知できるぞ";
            item_ability_description = "投げると一定時間盲目にするぞ";
            item_message1 = "目が見えなくなってしまった！";
        }
        if (belongings_item_list == 564) {
            buying_price = 500;
            item_name = "噴上裕也のDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "匂いに敏感になるぞ";
            item_ability_description = "このフロアの罠の位置を感知するぞ";
            item_message1 = "この階の罠の位置がわかった！";
        }
        if (belongings_item_list == 565) {
            buying_price = 400;
            item_name = "ﾌﾟｯﾁ神父のDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "装備ｽﾀﾝﾄﾞにかかった呪いが解けるぞ";
            item_ability_description = "";
            item_message1 = "どのアイテムに使いますか？";
        }
        if (belongings_item_list == 566) {
            buying_price = 500;
            item_name = "ｹﾝｿﾞｰのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "身のかわしが上がるぞ";
            item_ability_description = "";
            item_message1 = "攻撃をかわしやすくなった気がする！";
        }
        if (belongings_item_list == 567) {
            buying_price = 400;
            item_name = "ｱｳﾞﾄﾞｩﾙのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "アイテムを鑑定できるぞ";
            item_ability_description = "";
            item_message1 = "どのアイテムに使いますか？";
        }
        if (belongings_item_list == 568) {
            buying_price = 500;
            item_name = "ｼﾞｮﾝｶﾞﾘ･AのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "この階で射撃ダメージがアップし、";
            item_ability_description = "投げたアイテムが必ず当たるようになるぞ";
            item_message1 = "射撃能力がアップした！";
        }
        if (belongings_item_list == 569) {
            buying_price = 500;
            item_name = "ﾎﾟﾙﾅﾚﾌのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "この階で攻撃力が上がるぞ";
            item_ability_description = "";
            item_message1 = "この階での攻撃力があがった！";
        }
        if (belongings_item_list == 570) {
            buying_price = 500;
            item_name = "ｼﾞｮﾅｻﾝのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "この階で波紋が使えるようになり、";
            item_ability_description = "吸血鬼に与えるダメージが大きくなるぞ";
            item_message1 = "吸血鬼に与えるダメージが大きくなった！";
            item_message2 = "";
        }
        if (belongings_item_list == 571) {
            buying_price = 500;
            item_name = "ﾎﾞｲﾝｺﾞのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "次の階の予知ができるぞ";
            item_ability_description = "";
            item_message1 = "「あ…新しいﾍﾟｰｼﾞが…現れたぞ…」";
        }
        if (belongings_item_list == 572) {
            buying_price = 500;
            item_name = "承太郎のDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "この階で命中率が上がるぞ";
            item_ability_description = "";
            item_message1 = "この階での命中率が上がった！";
        }
        if (belongings_item_list == 573) {
            buying_price = 400;
            item_name = "重ちーのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "この階のｱｲﾃﾑの場所がわかるぞ";
            item_ability_description = "";
            item_message1 = "ｱｲﾃﾑの場所がわかった！";
        }
        if (belongings_item_list == 574) {
            buying_price = 500;
            item_name = "ｴﾝﾎﾟﾘｵのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "わけがわからず混乱してしまうぞ";
            item_ability_description = "";
            item_message1 = "「うわあああああああ！」";
        }
        if (belongings_item_list == 575) {
            buying_price = 500;
            item_name = "ﾏﾆｯｼｭﾎﾞｰｲのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "すやすやと眠ってしまうぞ";
            item_ability_description = "投げると敵が眠るぞ";
            item_message1 = "急に眠気が襲ってきた…";
        }
        if (belongings_item_list == 576) {
            buying_price = 400;
            item_name = "破裂するDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "「10ターン後に破裂する！」と命令が書かれている";
            item_ability_description = "";
            item_message1 = "【10ターン後に破裂する！】";
        }
        if (belongings_item_list == 577) {
            buying_price = 900;
            item_name = "ﾐｷﾀｶのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "サイコロに変身できるぞ";
            item_ability_description = "変身中は敵に気づかれないぞ";
            item_message1 = "サイコロに変身した。";
        }
        if (belongings_item_list == 578) {
            buying_price = 1500;
            item_name = "ｻﾝﾄﾞﾏﾝのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "スピードがアップするぞ";
            item_ability_description = "";
            item_message1 = "体の動きが早くなった！";
        }
        if (belongings_item_list == 579) {
            buying_price = 1500;
            item_name = "ﾍﾟｯﾄｼｮｯﾌﾟのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "別の場所へ飛んでいくぞ";
            item_ability_description = "";
            item_message1 = "別の場所へ飛んだ！";
        }
        if (belongings_item_list == 580) {
            buying_price = 1500;
            item_name = "ﾄﾞｯﾋﾟｵのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "ﾄﾞｯﾋﾟｵと交代するぞ";
            item_ability_description = "交代中は敵に気づかれないぞ";
            item_message1 = "「まかせたぞ… 私のドッピオ…」";
        }
        if (belongings_item_list == 582) {
            buying_price = 300;
            item_name = "水が熱湯になるDISC";
            item_description1 = "[消耗DISC]";
            var_808 = "水が熱湯になるぞ";
            item_ability_description = "";
            item_message1 = "しかし何も起こらなかった…";
        }
        if (belongings_item_list == 583) {
            buying_price = 900;
            item_name = "ﾃﾞｨｱﾎﾞﾛのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "地上に逃げ帰ることができるぞ";
            item_ability_description = "一時退くのは敗北ではないぞ！";
            item_message1 = "";
        }
        if (belongings_item_list == 584) {
            buying_price = 500;
            item_name = "ﾇｹｻｸのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "この階で攻撃力が下がってしまうぞ";
            item_ability_description = "";
            item_message1 = "この階での攻撃力が下がってしまった！";
        }
        if (belongings_item_list == 585) {
            buying_price = 500;
            item_name = "億泰のDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "ｻﾞ･ﾊﾝﾄﾞが使いこなせるようになるぞ";
            item_ability_description = "この階でお腹が減りやすくなってしまうぞ";
            item_message1 = "お腹が減りやすくなってしまった！";
        }
        if (belongings_item_list == 586) {
            buying_price = 900;
            item_name = "ペッシのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "レベルが下がってしまうぞ";
            item_ability_description = "";
            item_message1 = "レベルが下がってしまった！";
        }
        if (belongings_item_list == 587) {
            buying_price = 500;
            item_name = "吉良吉影のDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "ｱｲﾃﾑのどれかひとつが爆弾になるぞ";
            item_ability_description = "爆弾ｱｲﾃﾑがある時は解除できるぞ";
            item_message1 = "爆弾が解除された。";
        }
        if (belongings_item_list == 588) {
            buying_price = 400;
            item_name = "J･ｶﾞｲﾙのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "非道なことを叫んで敵を怒らせるぞ";
            item_ability_description = "フロアにいる敵全ての攻撃力が上がるぞ";
            item_message1 = "全ての敵の攻撃力が上がった！";
        }
        if (belongings_item_list == 589) {
            buying_price = 500;
            item_name = "ﾌﾟﾛｼｭｰﾄ兄貴のDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "この階で発動能力の効果が上がるぞ";
            item_ability_description = "効果が上がっている発動は★がつくぞ";
            item_message1 = "発動能力の効果が上がった！";
        }
        if (belongings_item_list == 590) {
            buying_price = 400;
            item_name = "ｷﾞｱｯﾁｮのDISC";
            item_description1 = "[記憶DISC]";
            var_808 = "無性に腹が立ってｱｲﾃﾑを壊すぞ";
            item_ability_description = "";
            item_message1 = "どのアイテムに使いますか？";
        }
        if (belongings_item_list == 600) {
            buying_price = 100;
            item_name = "ﾋﾟｯﾂｧ";
            item_description1 = "[食べ物]";
            var_808 = "ﾌﾞﾁｬﾗﾃｨが食べてたｸｫｰﾀｰｻｲｽﾞのﾋﾟｯﾂｧだ";
            item_ability_description = "満腹度が50回復するぞ";
            item_message1 = "お腹が少し膨らんだ";
        }
        if (belongings_item_list == 602) {
            buying_price = 400;
            item_name = "ﾈｱﾎﾟﾘｽのﾋﾟｯﾂｧ";
            item_description1 = "[食べ物]";
            var_808 = "ﾈｱﾎﾟﾘｽの美味しいﾋﾟｯﾂｧだ";
            item_ability_description = "満腹度が100回復するぞ";
            item_message1 = "お腹が膨らんだ";
        }
        if (belongings_item_list == 603) {
            buying_price = 50;
            item_name = "くさったﾋﾟｯﾂｧ";
            item_description1 = "[食べ物]";
            var_808 = "変な臭いがする";
            item_ability_description = "まずそうだぞ";
            item_message1 = "グェッ！精神力が下がってしまった！";
        }
        if (belongings_item_list == 604) {
            buying_price = 800;
            item_name = "ﾎﾟﾙﾎﾟのﾋﾟｯﾂｧ";
            item_description1 = "[食べ物]";
            var_808 = "壁のような巨大なﾋﾟｯﾂｧだ";
            item_ability_description = "満腹度が全回復し、最大満腹度が増えるぞ";
            item_message1 = "お腹いっぱいで動きが重い…";
        }
        if (belongings_item_list == 605) {
            buying_price = 50;
            item_name = "焦げたﾋﾟｯﾂｧ";
            item_description1 = "[食べ物]";
            var_808 = "焼きすぎて焦げたﾋﾟｯﾂｧだ";
            item_ability_description = "満腹度が10回復するぞ";
            item_message1 = "焦げてて食べられる部分が無い…";
        }
        if (belongings_item_list == 630) {
            buying_price = 600;
            item_name = "娼婦風ｽﾊﾟｹﾞｯﾃｨ";
            item_description1 = "[ﾄﾆｵ製料理]";
            var_808 = "満腹度が20回復するぞ";
            item_ability_description = "虫歯がすごい勢いで飛び出るぞ";
            item_message1 = "虫歯が飛び出した！";
        }
        if (belongings_item_list == 631) {
            buying_price = 600;
            item_name = "ﾓｯﾂｧﾚﾗﾁｰｽﾞとﾄﾏﾄのｻﾗﾀﾞ";
            item_description1 = "[ﾄﾆｵ製料理]";
            var_808 = "満腹度が10回復するぞ";
            item_ability_description = "精神力が回復するぞ";
            item_message1 = "元通り強くなった気がする。";
        }
        if (belongings_item_list == 632) {
            buying_price = 600;
            item_name = "ｷﾘﾏﾝｼﾞｬﾛの雪解け水";
            item_description1 = "[ﾄﾆｵ製料理]";
            var_808 = "満腹度が10回復するぞ";
            item_ability_description = "盲目状態が治るぞ。普通見えない物も見えるぞ。";
            item_message1 = "目がすっきりした！";
        }
        if (belongings_item_list == 633) {
            buying_price = 600;
            item_name = "子羊背肉のﾘﾝｺﾞｿｰｽかけ";
            item_description1 = "[ﾄﾆｵ製料理]";
            var_808 = "満腹度が20回復するぞ";
            item_ability_description = "最大満腹度が上がるぞ";
            item_message1 = "最大満腹度が上がった！";
        }
        if (belongings_item_list == 634) {
            buying_price = 600;
            item_name = "ﾌﾟﾘﾝ";
            item_description1 = "[ﾄﾆｵ製料理]";
            var_808 = "満腹度が10回復するぞ";
            item_ability_description = "鈍足・混乱や腹ヘリ状態が治るぞ。";
            item_message1 = "思うように動けるようになった。";
        }
        if (belongings_item_list == 635) {
            buying_price = 100;
            item_name = "焦げた料理";
            item_description1 = "[食べ物]";
            var_808 = "満腹度が10回復するぞ";
            item_ability_description = "";
            item_message1 = "焦げてて食べられる部分が無い…";
        }
        if (belongings_item_list == 636) {
            buying_price = 300;
            item_name = "ｻﾝﾄﾞｲｯﾁ";
            item_description1 = "[食べ物]";
            var_808 = "平穏な気持ちになって精神力が１上がるぞ";
            item_ability_description = "お腹も満腹になるぞ";
            item_message1 = "精神力が１上がった！";
        }
        if (belongings_item_list == 639) {
            buying_price = 100;
            item_name = "ｶｴﾙの丸焼き";
            item_description1 = "[食べ物]";
            var_808 = "「ﾃｲｴﾝﾁｰ」と呼ばれる料理だ。";
            item_ability_description = "満腹度が20回復するぞ";
            item_message1 = "お腹が少し膨らんだ";
        }
        if (belongings_item_list == 640) {
            buying_price = 50;
            item_name = "焦げた食べ物";
            item_description1 = "[食べ物]";
            var_808 = "焦げた食べ物だ。";
            item_ability_description = "満腹度が10回復するぞ";
            item_message1 = "焦げてて食べられる部分が無い…";
        }
        if (belongings_item_list == 641) {
            buying_price = 10;
            item_name = "消し炭";
            item_description1 = "[食べ物？]";
            var_808 = "真っ黒に焦げた何かだ。";
            item_ability_description = "食べると最大満腹度が下がってしまうぞ。";
            item_message1 = "お腹が痛い…";
        }
        if (belongings_item_list == 644) {
            buying_price = 400;
            item_name = "猫バーガー";
            item_description1 = "[食べ物]";
            var_808 = "猫バーガーだ";
            item_ability_description = "まずそうだぞ";
            item_message1 = "グェッ！";
        }
        if (belongings_item_list == 645) {
            buying_price = 400;
            item_name = "猫ステーキ";
            item_description1 = "[食べ物]";
            var_808 = "猫ステーキだ";
            item_ability_description = "まずそうだぞ";
            item_message1 = "グェッ！";
        }
        if (belongings_item_list == 646) {
            buying_price = 400;
            item_name = "猫ジュース";
            item_description1 = "[食べ物]";
            var_808 = "猫ジュースだ";
            item_ability_description = "まずそうだぞ";
            item_message1 = "グェッ！";
        }
        if (belongings_item_list == 647) {
            buying_price = 400;
            item_name = "オレンジ";
            item_description1 = "[食べ物]";
            var_808 = "美味しそうなオレンジだ";
            item_ability_description = "";
            item_message1 = "お腹が少し膨らんだ";
        }
        if (belongings_item_list == 648) {
            buying_price = 200;
            item_name = "鎌倉カスター";
            item_description1 = "[食べ物]";
            var_808 = "食べかけだ。";
            item_ability_description = "満腹度が7回復するぞ";
            item_message1 = "お腹が少し膨らんだ";
        }
        if (belongings_item_list == 650) {
            buying_price = 200;
            item_name = "ｶｴﾙ";
            item_description1 = "[ｶｴﾙ]";
            var_808 = "小さなｶｴﾙだ";
            item_ability_description = "食べると体力が５０回復するぞ";
            item_message1 = "体力が回復した";
        }
        if (belongings_item_list == 651) {
            buying_price = 500;
            item_name = "大きいｶｴﾙ";
            item_description1 = "[ｶｴﾙ]";
            var_808 = "大きなｶｴﾙだ";
            item_ability_description = "食べると体力が１００回復するぞ";
            item_message1 = "体力が回復した";
        }
        if (belongings_item_list == 652) {
            buying_price = 100;
            item_name = "ｶｴﾙの死体";
            item_description1 = "[ｶｴﾙ]";
            var_808 = "ｶｴﾙの死体だ";
            item_ability_description = "食べると体力が２０回復するぞ";
            item_message1 = "体力が回復した";
        }
        if (belongings_item_list == 653) {
            buying_price = 1000;
            item_name = "超巨大なｶｴﾙ";
            item_description1 = "[ｶｴﾙ]";
            var_808 = "超巨大なｶｴﾙだ";
            item_ability_description = "食べると体力が完全回復するぞ";
            item_message1 = "体力が回復した";
        }
        if (belongings_item_list == 654) {
            buying_price = 100;
            item_name = "ﾔﾄﾞｸｶﾞｴﾙ";
            item_description1 = "[ｶｴﾙ]";
            var_808 = "ﾔﾄﾞｸｶﾞｴﾙだ";
            item_ability_description = "投げると８０のダメージを与えるぞ";
            item_message1 = "８０のダメージを受けた！";
        }
        if (belongings_item_list == 655) {
            buying_price = 100;
            item_name = "ｻﾞﾘｶﾞﾆ";
            item_description1 = "[ｻﾞﾘｶﾞﾆ]";
            var_808 = "ｻﾞﾘｶﾞﾆだ";
            item_ability_description = "食べると体力が１０回復するぞ";
            item_message1 = "体力が回復した";
        }
        if (belongings_item_list == 712) {
            buying_price = 10000;
            item_name = "やばいクスリ";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "高値で取引されているブツだ";
            item_ability_description = "体力が全回復するが混乱するぞ";
            item_message1 = "　あっあっあっ　　　　　うﾋﾋ";
            item_message2 = "　　ウケケ　　　　うおっうぉっ";
        }
        if (belongings_item_list == 713) {
            buying_price = 100;
            item_name = "ﾎﾟﾙﾎﾟのﾗｲﾀｰ";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "入団テストに使うﾎﾟﾙﾎﾟのﾗｲﾀｰだ";
            item_ability_description = "信頼を試すぞ";
            item_message1 = "『再点火』したな！";
        }
        if (belongings_item_list == 714) {
            buying_price = 2000;
            item_name = "紫外線照射装置";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "部屋全体に紫外線を照射するぞ";
            item_ability_description = "吸血鬼やゾンビを消滅させるぞ";
            item_message1 = "エネルギーが尽きた。";
        }
        if (belongings_item_list == 715) {
            buying_price = 500;
            item_name = "点滴";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "ブドウ糖とビタミン栄養剤の点滴だ";
            item_ability_description = "満腹度が30回復するぞ";
            item_message1 = "「栄養補給させてもらったぜ！」";
        }
        if (belongings_item_list == 716) {
            buying_price = 2000;
            item_name = "恐竜の化石";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "ｽﾋﾟﾉｻｳﾙｽの化石だ。使うと危険だぞ。";
            item_ability_description = "持っていると一巡後の世界に変化があるぞ";
            item_message1 = "声の主は去っていったようだ…";
        }
        if (belongings_item_list == 717) {
            buying_price = 100;
            item_name = "ｺﾋﾟｰ人形の破片";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "コピー人形の破片だ";
            item_message1 = "しかし何も起こらなかった…";
        }
        if (belongings_item_list == 718) {
            buying_price = 1000;
            item_name = "聖なる弓矢";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "装備中のDISCの合成容量が１増えるぞ";
            item_ability_description = "";
            item_message1 = "";
        }
        if (belongings_item_list == 719) {
            buying_price = 1000;
            item_name = "吉良の弓矢";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "装備中のDISCに新たな能力が増えるぞ";
            item_ability_description = "";
            item_message1 = "";
        }
        if (belongings_item_list == 720) {
            buying_price = 1000;
            item_name = "ときのがくぼう";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "５ターン 時を止められるぞ";
            item_ability_description = "";
            item_message1 = "時は止まった…";
        }
        if (belongings_item_list == 721) {
            buying_price = 100;
            item_name = "彼女の手首";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "手首だ";
            item_message1 = "しかし何も起こらなかった…";
        }
        if (belongings_item_list == 722) {
            buying_price = 100;
            item_name = "ｼｰｻﾞｰのﾊﾞﾝﾀﾞﾅ";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "ｼｰｻﾞｰの残したﾊﾞﾝﾀﾞﾅだ";
            item_ability_description = "";
            item_message1 = "「おめえどこだ！」";
        }
        if (belongings_item_list == 723) {
            buying_price = 1500;
            item_name = "魔法のランプ";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "願いを叶えてくれるランプだ";
            item_ability_description = "";
            item_message1 = "カリカリカリカリ・・・";
        }
        if (belongings_item_list == 724) {
            buying_price = 1500;
            item_name = "石仮面";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "吸血鬼体質になる仮面だ";
            item_ability_description = "体力が急速に回復するようになるぞ";
            item_message1 = "「俺は人間をやめるぞォ――！」";
        }
        if (belongings_item_list == 725) {
            buying_price = 100;
            item_name = "ｵﾚｯちのｺｰﾄ";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "ﾔｸ中のｺﾞﾛﾂｷが大事にしているｺｰﾄだ";
            item_ability_description = "持っていると危険だぞ";
            item_message1 = "特に何も起こらなかった…";
        }
        if (belongings_item_list == 726) {
            buying_price = 1000;
            item_name = "鉄球";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "このフロアで射撃ダメージを少なくするぞ";
            item_ability_description = "投げると８０のダメージを与えるぞ";
            item_message1 = "「鉄球の回転」";
            item_message2 = "皮膚が硬くなった！";
        }
        if (belongings_item_list == 727) {
            buying_price = 1000;
            item_name = "ｿﾞﾝﾋﾞ馬";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "体力が完全回復するぞ";
            item_ability_description = "";
            item_message1 = "体力が完全に回復した！";
            item_message2 = "";
        }
        if (belongings_item_list == 728) {
            buying_price = 2000;
            item_name = "赤石つき石仮面";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "究極生物体質になる仮面だ。ﾚｸｲｴﾑの大迷宮を";
            item_ability_description = "特定条件でｸﾘｱすると出現しはじめるぞ。";
            item_message1 = "「フン！」";
            item_message2 = "";
        }
        if (belongings_item_list == 729) {
            buying_price = 2000;
            item_name = "吉良の財布";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "こいつはプレゼントか～～？";
            item_ability_description = "もらっておいてやるぜ……オジサン";
            item_message1 = "";
            item_message2 = "";
        }
        if (belongings_item_list == 730) {
            buying_price = 3000;
            item_name = "大家のカバン";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "大金が入ってそうなカバンだ。";
            item_ability_description = "";
            item_message1 = "";
            item_message2 = "";
        }
        if (belongings_item_list == 731) {
            buying_price = 500;
            item_name = "盗まれた財布";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "玉美がカツアゲした財布だ。";
            item_ability_description = "お金が入っているように見えるぞ。";
            item_message1 = "";
            item_message2 = "";
        }
        if (belongings_item_list == 750) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　7巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 751) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　8巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 752) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　9巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 753) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　10巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 754) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　11巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 755) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　12巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 756) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　13巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 757) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　14巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 758) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　15巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 799) {
            buying_price = 20;
            item_name = "装備＋９９";
            item_description1 = "[消費ｱｲﾃﾑ]";
            var_808 = "テスト用のアイテムだ";
            item_ability_description = "装備品の修正値が９９になるぞ";
            item_message1 = "装備品が強くなった！";
        }
        if (belongings_item_list == 800) {
            buying_price = 2400;
            item_name = "ｴﾆｸﾞﾏの紙";
            item_description1 = "[保管ｱｲﾃﾑ]";
            var_808 = "何でも紙にして保管できるぞ";
            item_ability_description = "ｱｲﾃﾑを自由に出し入れできるぞ";
            var_1984 = 4;
        }
        if (belongings_item_list == 801) {
            buying_price = 400;
            item_name = "形兆のDISCｹｰｽ";
            item_description1 = "[保管ｱｲﾃﾑ]";
            var_808 = "几帳面な形兆のDISCｹｰｽだ";
            item_ability_description = "DISCが入っているぞ";
            var_1984 = 4;
        }
        if (belongings_item_list == 802) {
            buying_price = 400;
            item_name = "ﾄﾗｸﾀｰのﾀｲﾔ";
            item_description1 = "[保管ｱｲﾃﾑ]";
            var_808 = "F･FがDISCを保管しておいたﾀｲﾔだ";
            item_ability_description = "DISCがたくさん入っているぞ";
            var_1984 = 6;
        }
        if (belongings_item_list == 803) {
            buying_price = 400;
            item_name = "ｻﾝｼﾞｪﾙﾏﾝの紙袋";
            item_description1 = "[保管ｱｲﾃﾑ]";
            var_808 = "ｻﾝｼﾞｪﾙﾏﾝの紙袋だ";
            item_ability_description = "食料が入っているぞ";
            var_1984 = 4;
        }
        if (belongings_item_list == 804) {
            buying_price = 400;
            item_name = "露伴のカバン";
            item_description1 = "[保管ｱｲﾃﾑ]";
            var_808 = "露伴が資料を持ち運ぶ時のｶﾊﾞﾝだ";
            item_ability_description = "コミックスが入っているぞ";
            var_1984 = 4;
        }
        if (belongings_item_list == 805) {
            buying_price = 1600;
            item_name = "ｸﾞｯﾁｮの死体";
            item_description1 = "[ヤバイもの]";
            var_808 = "グッチョの死体だ";
            item_ability_description = "DISCを入れると歌いだすぞ";
            var_1984 = 6;
        }
        if (belongings_item_list == 806) {
            buying_price = 4600;
            item_name = "ｶﾙﾈの死体";
            item_description1 = "[ヤバイもの]";
            var_808 = "カルネの死体だ";
            item_ability_description = "入れたものは喰われて消えるぞ";
            var_1984 = 5;
        }
        if (belongings_item_list == 807) {
            buying_price = 4600;
            item_name = "DIOの骨";
            item_description1 = "[ヤバイもの]";
            var_808 = "新しいものを生み出すDIOの骨だ";
            item_ability_description = "装備DISCが合成されるぞ";
            var_1984 = 6;
        }
        if (belongings_item_list == 808) {
            buying_price = 2400;
            item_name = "聖人の眼球";
            item_description1 = "[ヤバイもの]";
            var_808 = "聖人の遺体の一部分だ";
            item_ability_description = "持ち物が識別されるぞ";
            var_1984 = 11;
        }
        if (belongings_item_list == 809) {
            buying_price = 2400;
            item_name = "聖人の左腕";
            item_description1 = "[ヤバイもの]";
            var_808 = "聖人の遺体の一部分だ";
            item_ability_description = "ｱｲﾃﾑの呪縛や爆弾化を解除するぞ";
            var_1984 = 11;
        }
        if (belongings_item_list == 815) {
            buying_price = 4600;
            item_name = "ｴﾙﾒｪｽのｱﾚ";
            item_description1 = "[ヤバイもの]";
            var_808 = "ｷｯｽのｼｰﾙで入れたものが分裂するぞ";
            item_ability_description = "装備品は数値も分裂するぞ";
            var_1984 = 6;
        }
        if (belongings_item_list == 816) {
            buying_price = 2400;
            item_name = "ﾐｷﾀｶのｶﾊﾞﾝ";
            item_description1 = "[ヤバイもの]";
            var_808 = "何でも出てくるﾐｷﾀｶのｶﾊﾞﾝだ";
            item_ability_description = "ｱｲﾃﾑを入れると別のものにしてくれるぞ";
            var_1984 = 4;
        }
        if (belongings_item_list == 817) {
            buying_price = 4600;
            item_name = "乳母車";
            item_description1 = "[ヤバイもの]";
            var_808 = "透明な赤ちゃんが入っているようだ";
            item_ability_description = "入れたものが見えなくなってしまうぞ";
            var_1984 = 4;
        }
        if (belongings_item_list == 850) {
            buying_price = 2700;
            item_name = "波紋のツボ";
            item_description1 = "[ヤバイもの]";
            var_808 = "ツボを突いて波紋が使えるようになるぞ。";
            item_ability_description = "体力も回復し、状態異常が治るぞ。";
            var_1984 = 0;
        }
        if (belongings_item_list == 851) {
            buying_price = 2500;
            item_name = "ﾎﾙﾏｼﾞｵのﾋﾞﾝ";
            item_description1 = "[ヤバイもの]";
            var_808 = "敵に投げると小さくして入れられるぞ";
            item_ability_description = "押すと目の前に混乱して出てくるぞ";
            var_1984 = 5;
        }
        if (belongings_item_list == 852) {
            buying_price = 2600;
            item_name = "ランドセル";
            item_description1 = "[ヤバイもの]";
            var_808 = "猫草が入っているランドセルだ";
            item_ability_description = "押すと前方に強力な空気弾を発射するぞ";
            var_1984 = 4;
        }
        if (belongings_item_list == 853) {
            buying_price = 2800;
            item_name = "ｻｰﾌｨｽ人形";
            item_description1 = "[ヤバイもの]";
            var_808 = "10ﾀｰﾝの間、自分のｺﾋﾟｰが出現するぞ";
            item_ability_description = "敵はコピー人形を優先して攻撃するぞ";
            var_1984 = 4;
        }
        if (belongings_item_list == 854) {
            buying_price = 2900;
            item_name = "聖人の脊椎";
            item_description1 = "[ヤバイもの]";
            var_808 = "他の場所に一瞬にして移動するぞ";
            item_ability_description = "";
            var_1984 = 11;
        }
        if (belongings_item_list == 900) {
            buying_price = 390;
            item_name = "GP BOY";
            item_description1 = "グランプリボーイのコミックスだ";
            var_808 = "";
            item_ability_description = "特に何も起こらないぞ";
            item_message1 = "しかし何も起こらなかった";
        }
        if (belongings_item_list == 901) {
            buying_price = 360;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　1巻";
            item_description1 = "1部のコミックスだ";
            var_808 = "生命賛歌の素晴らしさを知ろう";
            item_ability_description = "精神力の最大値が上がるぞ";
            item_message1 = "精神力の最大値が１上がった！";
        }
        if (belongings_item_list == 902) {
            buying_price = 370;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　2巻";
            item_description1 = "1部のコミックスだ";
            var_808 = "生命賛歌の素晴らしさを知ろう";
            item_ability_description = "精神力の最大値が上がるぞ";
            item_message1 = "精神力の最大値が１上がった！";
        }
        if (belongings_item_list == 903) {
            buying_price = 360;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　3巻";
            item_description1 = "1部のコミックスだ";
            var_808 = "生命賛歌の素晴らしさを知ろう";
            item_ability_description = "精神力の最大値が上がるぞ";
            item_message1 = "精神力の最大値が１上がった！";
        }
        if (belongings_item_list == 904) {
            buying_price = 360;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　4巻";
            item_description1 = "1部のコミックスだ";
            var_808 = "生命賛歌の素晴らしさを知ろう";
            item_ability_description = "精神力の最大値が上がるぞ";
            item_message1 = "精神力の最大値が１上がった！";
        }
        if (belongings_item_list == 905) {
            buying_price = 360;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　5巻";
            item_description1 = "1部のコミックスだ";
            var_808 = "生命賛歌の素晴らしさを知ろう";
            item_ability_description = "精神力の最大値が上がるぞ";
            item_message1 = "精神力の最大値が１上がった！";
        }
        if (belongings_item_list == 906) {
            buying_price = 360;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　6巻";
            item_description1 = "2部のコミックスだ";
            var_808 = "肉体の限界を極める方法を知ろう";
            item_ability_description = "最大ＨＰが５上がるぞ";
            item_message1 = "最大ＨＰが５上がった！";
        }
        if (belongings_item_list == 907) {
            buying_price = 360;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　7巻";
            item_description1 = "2部のコミックスだ";
            var_808 = "肉体の限界を極める方法を知ろう";
            item_ability_description = "最大ＨＰが５上がるぞ";
            item_message1 = "最大ＨＰが５上がった！";
        }
        if (belongings_item_list == 908) {
            buying_price = 360;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　8巻";
            item_description1 = "2部のコミックスだ";
            var_808 = "肉体の限界を極める方法を知ろう";
            item_ability_description = "最大ＨＰが５上がるぞ";
            item_message1 = "最大ＨＰが５上がった！";
        }
        if (belongings_item_list == 909) {
            buying_price = 370;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　9巻";
            item_description1 = "2部のコミックスだ";
            var_808 = "肉体の限界を極める方法を知ろう";
            item_ability_description = "最大ＨＰが５上がるぞ";
            item_message1 = "最大ＨＰが５上がった！";
        }
        if (belongings_item_list == 910) {
            buying_price = 370;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　10巻";
            item_description1 = "2部のコミックスだ";
            var_808 = "肉体の限界を極める方法を知ろう";
            item_ability_description = "最大ＨＰが５上がるぞ";
            item_message1 = "最大ＨＰが５上がった！";
        }
        if (belongings_item_list == 911) {
            buying_price = 370;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　11巻";
            item_description1 = "2部のコミックスだ";
            var_808 = "肉体の限界を極める方法を知ろう";
            item_ability_description = "最大ＨＰが５上がるぞ";
            item_message1 = "最大ＨＰが５上がった！";
        }
        if (belongings_item_list == 912) {
            buying_price = 370;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　12巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 913) {
            buying_price = 370;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　13巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 914) {
            buying_price = 370;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　14巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 915) {
            buying_price = 370;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　15巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 916) {
            buying_price = 370;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　16巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 917) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　17巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 918) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　18巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 919) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　19巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 920) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　20巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 921) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　21巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 922) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　22巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 923) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　23巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 924) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　24巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 925) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　25巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 926) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　26巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 927) {
            buying_price = 400;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　27巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 928) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　28巻";
            item_description1 = "3部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "3部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 929) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　29巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 930) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　30巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 931) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　31巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 932) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　32巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 933) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　33巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 934) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　34巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 935) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　35巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 936) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　36巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 937) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　37巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 938) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　38巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 939) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　39巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 940) {
            buying_price = 400;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　40巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 941) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　41巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 942) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　42巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 943) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　43巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 944) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　44巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 945) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　45巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 946) {
            buying_price = 400;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　46巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 947) {
            buying_price = 400;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　47巻";
            item_description1 = "4部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "4部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 948) {
            buying_price = 400;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　48巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 949) {
            buying_price = 400;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　49巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 950) {
            buying_price = 400;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　50巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 951) {
            buying_price = 388;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　51巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 952) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　52巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 953) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　53巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 954) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　54巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 955) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　55巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 956) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　56巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 957) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　57巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 958) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　58巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 959) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　59巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 960) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　60巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 961) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　61巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 962) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　62巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 963) {
            buying_price = 390;
            item_name = "ｼﾞｮｼﾞｮの奇妙な冒険　63巻";
            item_description1 = "5部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "5部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 964) {
            buying_price = 390;
            item_name = "ストーンオーシャン　1巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 965) {
            buying_price = 390;
            item_name = "ストーンオーシャン　2巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 966) {
            buying_price = 390;
            item_name = "ストーンオーシャン　3巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 967) {
            buying_price = 390;
            item_name = "ストーンオーシャン　4巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 968) {
            buying_price = 390;
            item_name = "ストーンオーシャン　5巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 969) {
            buying_price = 390;
            item_name = "ストーンオーシャン　6巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 970) {
            buying_price = 390;
            item_name = "ストーンオーシャン　7巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 971) {
            buying_price = 390;
            item_name = "ストーンオーシャン　8巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 972) {
            buying_price = 390;
            item_name = "ストーンオーシャン　9巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 973) {
            buying_price = 390;
            item_name = "ストーンオーシャン　10巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 974) {
            buying_price = 390;
            item_name = "ストーンオーシャン　11巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 975) {
            buying_price = 390;
            item_name = "ストーンオーシャン　12巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 976) {
            buying_price = 390;
            item_name = "ストーンオーシャン　13巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 977) {
            buying_price = 390;
            item_name = "ストーンオーシャン　14巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 978) {
            buying_price = 390;
            item_name = "ストーンオーシャン　15巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 979) {
            buying_price = 390;
            item_name = "ストーンオーシャン　16巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 980) {
            buying_price = 390;
            item_name = "ストーンオーシャン　17巻";
            item_description1 = "6部のコミックスだ";
            var_808 = "ｽﾀﾝﾄﾞの使い方を勉強しよう";
            item_ability_description = "6部の装備ｽﾀﾝﾄﾞが強くなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 981) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　1巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 982) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　2巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 983) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　3巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 984) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　4巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 985) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　5巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 986) {
            buying_price = 390;
            item_name = "STEEL BALL RUN　6巻";
            item_description1 = "7部のコミックスだ";
            var_808 = "どの部の装備ｽﾀﾝﾄﾞでも強くできるぞ";
            item_ability_description = "ｽﾀﾝﾄﾞが劣化しなくなるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 987) {
            buying_price = 370;
            item_name = "バオー来訪者　1巻";
            item_description1 = "バオー来訪者のコミックスだ";
            var_808 = "";
            item_ability_description = "最大ＨＰが１０上がるぞ";
            item_message1 = "最大ＨＰが１０上がった！";
        }
        if (belongings_item_list == 988) {
            buying_price = 370;
            item_name = "バオー来訪者　2巻";
            item_description1 = "バオー来訪者のコミックスだ";
            var_808 = "";
            item_ability_description = "最大ＨＰが１０上がるぞ";
            item_message1 = "最大ＨＰが１０上がった！";
        }
        if (belongings_item_list == 989) {
            buying_price = 370;
            item_name = "魔少年ビーティー";
            item_description1 = "魔少年ビーティーのコミックスだ";
            var_808 = "";
            item_ability_description = "精神力の最大値が５上がるぞ";
            item_message1 = "精神力の最大値が５上がった！";
        }
        if (belongings_item_list == 990) {
            buying_price = 370;
            item_name = "ゴージャス☆アイリン";
            item_description1 = "ゴージャス☆アイリンのコミックスだ";
            var_808 = "";
            item_ability_description = "攻撃力・命中率・回避率がアップするぞ";
            item_message1 = "わたし、残酷ですわよ";
        }
        if (belongings_item_list == 991) {
            buying_price = 1200;
            item_name = "死刑執行中脱獄進行中";
            item_description1 = "短編集だ";
            var_808 = "";
            item_ability_description = "レベルが一気に２上がるぞ";
            item_message1 = "ディアボロはレベルが上がった！";
        }
        if (belongings_item_list == 992) {
            buying_price = 1800;
            item_name = "変人偏屈列伝";
            item_description1 = "短編集だ";
            var_808 = "";
            item_ability_description = "レベルが一気に２上がるぞ";
            item_message1 = "ディアボロはレベルが上がった！";
        }
        if (belongings_item_list == 993) {
            buying_price = 2000;
            item_name = "JOJO 6251";
            item_description1 = "画集だ";
            var_808 = "ｷｬﾗｸﾀｰの色使いを勉強しよう";
            item_ability_description = "ｽﾀﾝﾄﾞの色を変更できるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 994) {
            buying_price = 6800;
            item_name = "JOJO A GOGO";
            item_description1 = "凶器になりえる画集だ";
            var_808 = "ｷｬﾗｸﾀｰの色使いを勉強しよう";
            item_ability_description = "ｽﾀﾝﾄﾞの色を変更できるぞ";
            item_message1 = "どのｽﾀﾝﾄﾞを研究しますか？";
        }
        if (belongings_item_list == 995) {
            buying_price = 390;
            item_name = "ピンクダークの少年";
            item_description1 = "岸部露伴の単行本だ";
            var_808 = "彼の原稿を見たものは本になってしまうぞ。";
            item_ability_description = "目の前の相手に使うと情報がわかるぞ。";
            item_message1 = "";
        }
        if (belongings_item_list == 996) {
            buying_price = 20000;
            item_name = "ﾋﾛﾋｺのｻｲﾝ色紙";
            item_description1 = "超レアアイテムだぞ";
            var_808 = "";
            item_ability_description = "レベルが一気に１０上がるぞ";
            item_message1 = "ディアボロはレベルが上がった！";
        }
        if (var_869 == 1 || var_262 == 1) {
            return;
        }
        if (var_375 == 1) {
            return;
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1) {
            return;
        }
        if (var_1677 == 1) {
            return;
        }
        if (var_800 == 1) {
            return;
        }
        if (var_980 == 1) {
            return;
        }
        if (var_2176 == 1) {
            return;
        }
        // No = 3 & 4 & 5 なので、ディアボロの試練、一巡後の世界、?
        if (dangeon_number == 3 || dangeon_number == 4 || dangeon_number == 5) {
            if (belongings_item_list >= 100 && belongings_item_list < 400 && var_862[belongings_item_list][0] == 0) {
                yield func503();
            }
        }
        if (var_862[belongings_item_list][0] == 0 && belongings_item_list >= 100 && belongings_item_list < 400) {
            var_2039 = "何かわからんが発動";
        }
        if (belongings_item_list >= 560 && belongings_item_list < 600 && var_862[belongings_item_list][0] == 0) {
            yield func503();
        }
        // No >= 2 なので、レクイエムの大迷宮、ディアボロの試練、一巡後の世界
        if (dangeon_number >= 2) {
            if (belongings_item_list >= 805 && belongings_item_list < 900 && var_862[belongings_item_list][0] == 0) {
                yield func503();
            }
            if (belongings_item_list == 800 && var_862[belongings_item_list][0] == 0) {
                yield func503();
            }
        }
        return;
    });
}

// 装備disc能力値の設定
function func493(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(493);
        if (disc_class == 1 && var_476[var_225] == 1) {
            var_580 = var_580 - var_894;
            var_894 = 0;
            var_357 = 0;
            return;
        }
        if (disc_class == 2 && var_477[var_225] == 1) {
            var_581 = var_581 - var_895;
            var_895 = 0;
            var_358 = 0;
            return;
        }
        if (disc_class == 3 && var_478[var_225] == 1) {
            var_215 = 0;
            return;
        }
        if (disc_class == 1 && var_477[var_225] == 1) {
            var_581 = var_581 - var_895;
            var_895 = 0;
            var_358 = 0;
            var_477 = dim(40);
        }
        if (disc_class == 1 && var_478[var_225] == 1) {
            var_215 = 0;
            var_478 = dim(40);
        }
        if (disc_class == 2 && var_476[var_225] == 1) {
            var_580 = var_580 - var_894;
            var_894 = 0;
            var_357 = 0;
            var_476 = dim(40);
        }
        if (disc_class == 2 && var_478[var_225] == 1) {
            var_215 = 0;
            var_478 = dim(40);
        }
        if (disc_class == 3 && var_476[var_225] == 1) {
            var_580 = var_580 - var_894;
            var_894 = 0;
            var_357 = 0;
            var_476 = dim(40);
        }
        if (disc_class == 3 && var_477[var_225] == 1) {
            var_581 = var_581 - var_895;
            var_895 = 0;
            var_358 = 0;
            var_477 = dim(40);
        }
        if (disc_class == 1) {
            var_580 = var_580 - var_894;
            var_894 = 0;
            var_357 = 0;
        }
        if (disc_class == 2) {
            var_581 = var_581 - var_895;
            var_895 = 0;
            var_358 = 0;
        }
        if (disc_class == 3) {
            var_215 = 0;
        }
        if (belongings_item_list == 100) {
            var_2177 = 8;
            var_2178 = 4;
        }
        if (belongings_item_list == 101) {
            var_2177 = 4;
            var_2178 = 1;
        }
        if (belongings_item_list == 102) {
            var_2177 = 9;
            var_2178 = 3;
        }
        if (belongings_item_list == 103) {
            var_2177 = 2;
            var_2178 = 1;
        }
        if (belongings_item_list == 104) {
            var_2177 = 7;
            var_2178 = 1;
        }
        if (belongings_item_list == 105) {
            var_2177 = 3;
            var_2178 = 2;
        }
        if (belongings_item_list == 106) {
            var_2177 = 7;
            var_2178 = 1;
        }
        if (belongings_item_list == 107) {
            var_2177 = 2;
            var_2178 = 1;
        }
        if (belongings_item_list == 108) {
            var_2177 = 4;
            var_2178 = 3;
        }
        if (belongings_item_list == 109) {
            var_2177 = 6;
            var_2178 = 2;
        }
        if (belongings_item_list == 111) {
            var_2177 = 9;
            var_2178 = 4;
        }
        if (belongings_item_list == 112) {
            var_2177 = 5;
            var_2178 = 3;
        }
        if (belongings_item_list == 113) {
            var_2177 = 4;
            var_2178 = 0;
        }
        if (belongings_item_list == 114) {
            var_2177 = 3;
            var_2178 = 1;
        }
        if (belongings_item_list == 115) {
            var_2177 = 4;
            var_2178 = 2;
        }
        if (belongings_item_list == 116) {
            var_2177 = 1;
            var_2178 = 2;
        }
        if (belongings_item_list == 117) {
            var_2177 = 2;
            var_2178 = 2;
        }
        if (belongings_item_list == 118) {
            var_2177 = 2;
            var_2178 = 3;
        }
        if (belongings_item_list == 119) {
            var_2177 = 2;
            var_2178 = 3;
        }
        if (belongings_item_list == 120) {
            var_2177 = 3;
            var_2178 = 4;
        }
        if (belongings_item_list == 121) {
            var_2177 = 7;
            var_2178 = 1;
        }
        if (belongings_item_list == 122) {
            var_2177 = 6;
            var_2178 = 0;
        }
        if (belongings_item_list == 123) {
            var_2177 = 8;
            var_2178 = 0;
        }
        if (belongings_item_list == 124) {
            var_2177 = 1;
            var_2178 = 1;
        }
        if (belongings_item_list == 200) {
            var_2177 = 0;
            var_2178 = 5;
        }
        if (belongings_item_list == 201) {
            var_2177 = 1;
            var_2178 = 4;
        }
        if (belongings_item_list == 202) {
            var_2177 = 0;
            var_2178 = 8;
        }
        if (belongings_item_list == 203) {
            var_2177 = 1;
            var_2178 = 4;
        }
        if (belongings_item_list == 204) {
            var_2177 = 1;
            var_2178 = 8;
        }
        if (belongings_item_list == 205) {
            var_2177 = 1;
            var_2178 = 5;
        }
        if (belongings_item_list == 206) {
            var_2177 = 0;
            var_2178 = 3;
        }
        if (belongings_item_list == 207) {
            var_2177 = 2;
            var_2178 = 2;
        }
        if (belongings_item_list == 300) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 301) {
            var_2177 = 1;
            var_2178 = 2;
        }
        if (belongings_item_list == 302) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 303) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 304) {
            var_2177 = 3;
            var_2178 = 6;
        }
        if (belongings_item_list == 305) {
            var_2177 = 1;
            var_2178 = 1;
        }
        if (belongings_item_list == 306) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 307) {
            var_2177 = 3;
            var_2178 = 1;
        }
        if (belongings_item_list == 308) {
            var_2177 = 2;
            var_2178 = 0;
        }
        if (belongings_item_list == 309) {
            var_2177 = 3;
            var_2178 = 1;
        }
        if (belongings_item_list == 310) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 311) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 312) {
            var_2177 = 2;
            var_2178 = 0;
        }
        if (belongings_item_list == 313) {
            var_2177 = 1;
            var_2178 = 1;
        }
        if (belongings_item_list == 314) {
            var_2177 = 0;
            var_2178 = 6;
        }
        if (belongings_item_list == 315) {
            var_2177 = 2;
            var_2178 = 1;
        }
        if (belongings_item_list == 316) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 317) {
            var_2177 = 4;
            var_2178 = 1;
        }
        if (belongings_item_list == 318) {
            var_2177 = 2;
            var_2178 = 3;
        }
        if (belongings_item_list == 319) {
            var_2177 = 2;
            var_2178 = 2;
        }
        if (belongings_item_list == 320) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 321) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 322) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 393) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 394) {
            var_2177 = 9;
            var_2178 = 9;
        }
        if (belongings_item_list == 395) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 396) {
            var_2177 = 0;
            var_2178 = 0;
        }
        if (belongings_item_list == 397) {
            var_2177 = 8;
            var_2178 = 8;
        }
        if (belongings_item_list == 398) {
            var_2177 = 10;
            var_2178 = 10;
        }
        if (belongings_item_list == 399) {
            var_2177 = 12;
            var_2178 = 12;
        }
        if (disc_class == 1) {
            var_894 = var_2177 + var_233[var_225].Var4;
            var_580 = var_580 + var_894;
            var_357 = belongings_item_list;
        }
        if (disc_class == 2) {
            var_895 = var_2178 + var_233[var_225].Var4;
            var_581 = var_581 + var_895;
            var_358 = belongings_item_list;
        }
        if (disc_class == 3) {
            var_215 = belongings_item_list;
        }
        return;
    });
}
function func494(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(494);
        // No = 204 シアハートアタックのdiscを装備していれば
        if (equip_disc[204] == 1) {
            var_352 = var_352 - var_1047;
        }
        // No = 396 メイド・イン・ヘブンのdiscを装備していれば
        if (equip_disc[396] == 1) {
            var_157 = 0;
        }
        
        equip_disc = dim(400);

        if (var_357 > 0) {
            yield func426();
            var_2179 = var_553;
            var_2180 = 1;
            yield func495(); // 装備disc関係??
        }
        if (var_358 > 0) {
            yield func427();
            var_2179 = var_554;
            var_2180 = 2;
            yield func495(); // 装備disc関係??
        }
        if (var_215 > 0) {
            yield func428();
            var_2179 = var_555;
            var_2180 = 4;
            yield func495(); // 装備disc関係??
        }
        // No = 204 シアハートアタックのdiscを装備していれば
        if (equip_disc[204] == 1) {
            var_1047 = 20;
            var_1047 = Math.floor(var_352 / 10) + var_566;
            var_2181 = var_352 + var_1047;
            if (var_2181 > 999) {
                var_1047 = 999 - var_352;
                if (var_1047 < 0) {
                    var_1047 = 0;
                }
            }
            var_352 = var_352 + var_1047;
        }
        // No = 320 メタリカのdiscを装備していれば
        if (equip_disc[320] == 1) {
            var_140 = 0;
        }
        // No = 396 メイド・イン・ヘブンのdiscを装備していれば
        if (equip_disc[396] == 1) {
            var_157 = 1;
            var_133 = 0;
        }
        if (var_352 <= 1) {
            var_352 = 1;
        }
        if (var_211 >= var_352) {
            var_211 = var_352;
        }
        yield func496(); // 装備discの共鳴組み合わせ関数
        if (var_71[var_66][var_67] == 13 && var_215 != 202 && var_215 != 117 && var_125 == 0 && var_1059 == 0) {
            var_216 = 1;
            var_213 = 0;
            var_214 = 0;
            DSPLAY(audio_id = 216);
            yield func499();
        }
        return;
    });
}

// 装備disc関係??
function func495(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(495);
        var_2182 = 20;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            if (var_233[var_2179]["Var" + var_2182] != 0) {
                var_2183 = var_233[var_2179]["Var" + var_2182];
                if (var_233[var_2179]["Var" + var_2182] == 100) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 101) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 102) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 103) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 104) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 105) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 106) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 107) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 108) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 109) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 111) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 112) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 113) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 114) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 115) {
                    var_2184 = 2;
                }
                if (var_233[var_2179]["Var" + var_2182] == 116) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 117) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 118) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 119) {
                    var_2184 = 2;
                }
                if (var_233[var_2179]["Var" + var_2182] == 120) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 121) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 122) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 123) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 124) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 200) {
                    var_2184 = 2;
                }
                if (var_233[var_2179]["Var" + var_2182] == 201) {
                    var_2184 = 2;
                }
                if (var_233[var_2179]["Var" + var_2182] == 202) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 203) {
                    var_2184 = 2;
                }
                if (var_233[var_2179]["Var" + var_2182] == 204) {
                    var_2184 = 4;
                }
                if (var_233[var_2179]["Var" + var_2182] == 205) {
                    var_2184 = 2;
                }
                if (var_233[var_2179]["Var" + var_2182] == 206) {
                    var_2184 = 2;
                }
                if (var_233[var_2179]["Var" + var_2182] == 207) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 300) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 301) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 302) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 303) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 304) {
                    var_2184 = 2;
                }
                if (var_233[var_2179]["Var" + var_2182] == 305) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 306) {
                    var_2184 = 4;
                }
                if (var_233[var_2179]["Var" + var_2182] == 307) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 308) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 309) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 310) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 311) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 312) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 313) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 314) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 315) {
                    var_2184 = 4;
                }
                if (var_233[var_2179]["Var" + var_2182] == 316) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 317) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 318) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 319) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 320) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 321) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 322) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 350) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 351) {
                    var_2184 = 4;
                }
                if (var_233[var_2179]["Var" + var_2182] == 352) {
                    var_2184 = 4;
                }
                if (var_233[var_2179]["Var" + var_2182] == 353) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 354) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 355) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 356) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 357) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 358) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 359) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 360) {
                    var_2184 = 4;
                }
                if (var_233[var_2179]["Var" + var_2182] == 361) {
                    var_2184 = 4;
                }
                if (var_233[var_2179]["Var" + var_2182] == 362) {
                    var_2184 = 4;
                }
                if (var_233[var_2179]["Var" + var_2182] == 363) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 364) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 365) {
                    var_2184 = 4;
                }
                if (var_233[var_2179]["Var" + var_2182] == 366) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 367) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 368) {
                    var_2184 = 4;
                }
                if (var_233[var_2179]["Var" + var_2182] == 369) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 370) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 371) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 393) {
                    var_2184 = 4;
                }
                if (var_233[var_2179]["Var" + var_2182] == 394) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 395) {
                    var_2184 = 4;
                }
                if (var_233[var_2179]["Var" + var_2182] == 396) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 397) {
                    var_2184 = 0;
                }
                if (var_233[var_2179]["Var" + var_2182] == 398) {
                    var_2184 = 1;
                }
                if (var_233[var_2179]["Var" + var_2182] == 399) {
                    var_2184 = 0;
                }
                if (var_2180 == var_2184 || var_2184 == 0) {
                    equip_disc[var_2183] = 1;
                }
            }
            var_2182 = var_2182 + 1;
        }
        return;
    });
}


// 装備discの共鳴組み合わせ関数
function func496(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(496);
        var_1173 = sympathy_id;
        if (var_1173 == 1 || var_1173 == 102 || var_1173 == 103 || var_1173 == 107 || var_1173 == 110 || var_1173 == 111 || var_1173 == 115 || var_1173 == 117 || var_1173 == 118 || var_1173 == 122 || var_1173 == 125 || var_1173 == 126 || var_1173 == 127 || var_1173 == 129 || var_1173 == 130 || var_1173 == 131 || var_1173 == 132 || var_1173 == 133 || var_1173 == 137 || var_1173 == 149 || var_1173 == 150 || var_1173 == 151 || var_1173 == 152 || var_1173 == 153 || var_1173 == 158 || var_1173 == 167 || var_1173 == 168) {
            var_566 = var_566 - 1;
            var_565 = var_565 - 1;
            if (var_565 >= var_566) {
                var_565 = var_566;
            }
            if (var_565 <= 0) {
                var_565 = 0;
            }
        }
        if (var_1173 == 128 || var_1173 == 134 || var_1173 == 138 || var_1173 == 140 || var_1173 == 142 || var_1173 == 143 || var_1173 == 147 || var_1173 == 148 || var_1173 == 157 || var_1173 == 169) {
            var_566 = var_566 - 2;
            var_565 = var_565 - 2;
            if (var_565 >= var_566) {
                var_565 = var_566;
            }
            if (var_565 <= 0) {
                var_565 = 0;
            }
        }
        if (var_1173 == 141) {
            var_566 = var_566 - 3;
            var_565 = var_565 - 3;
            if (var_565 >= var_566) {
                var_565 = var_566;
            }
            if (var_565 <= 0) {
                var_565 = 0;
            }
        }
        if (var_1173 == 116 || var_1173 == 154 || var_1173 == 155 || var_1173 == 156) {
            var_580 = var_580 - 1;
        }
        if (var_1173 == 160 || var_1173 == 163) {
            var_580 = var_580 - 2;
        }
        if (var_1173 == 108 || var_1173 == 112 || var_1173 == 135 || var_1173 == 164 || var_1173 == 165) {
            var_580 = var_580 - 3;
        }
        if (var_1173 == 105 || var_1173 == 113) {
            var_581 = var_581 - 1;
        }
        if (var_1173 == 144) {
            var_581 = var_581 - 2;
        }
        if (var_1173 == 161 || var_1173 == 162) {
            var_352 = var_352 - var_1048;
        }
        if (var_1173 == 159 || var_1173 == 146 || var_1173 == 145) {
            var_352 = var_352 - var_1048;
        }
        if (var_1173 == 104) {
            var_352 = var_352 - var_1048;
        }
        sympathy_id = 0;
        sympathy_base_disc_id = var_357;
        sympathy_with_disc_id = var_358;
        var_1173 = var_215;
        if (sympathy_base_disc_id != 0 && sympathy_base_disc_id == sympathy_with_disc_id) {
            sympathy_id = 1;
        }
        if (sympathy_base_disc_id == 100 && sympathy_with_disc_id == 106) {
            sympathy_id = 101;
        }
        if (sympathy_with_disc_id == 100 && sympathy_base_disc_id == 106) {
            sympathy_id = 101;
        }
        if (sympathy_base_disc_id == 100 && sympathy_with_disc_id == 116) {
            sympathy_id = 102;
        }
        if (sympathy_with_disc_id == 100 && sympathy_base_disc_id == 116) {
            sympathy_id = 102;
        }
        if (sympathy_base_disc_id == 100 && sympathy_with_disc_id == 120) {
            sympathy_id = 103;
        }
        if (sympathy_with_disc_id == 100 && sympathy_base_disc_id == 120) {
            sympathy_id = 103;
        }
        if (sympathy_base_disc_id == 100 && sympathy_with_disc_id == 111) {
            sympathy_id = 104;
        }
        if (sympathy_with_disc_id == 100 && sympathy_base_disc_id == 111) {
            sympathy_id = 104;
        }
        if (sympathy_base_disc_id == 100 && sympathy_with_disc_id == 103) {
            sympathy_id = 105;
        }
        if (sympathy_with_disc_id == 100 && sympathy_base_disc_id == 103) {
            sympathy_id = 105;
        }
        if (sympathy_base_disc_id == 100 && sympathy_with_disc_id == 203) {
            sympathy_id = 106;
        }
        if (sympathy_with_disc_id == 100 && sympathy_base_disc_id == 203) {
            sympathy_id = 106;
        }
        if (sympathy_base_disc_id == 100 && sympathy_with_disc_id == 317) {
            sympathy_id = 107;
        }
        if (sympathy_with_disc_id == 100 && sympathy_base_disc_id == 317) {
            sympathy_id = 107;
        }
        if (sympathy_base_disc_id == 100 && sympathy_with_disc_id == 398) {
            sympathy_id = 108;
        }
        if (sympathy_with_disc_id == 100 && sympathy_base_disc_id == 398) {
            sympathy_id = 108;
        }
        if (sympathy_base_disc_id == 398 && sympathy_with_disc_id == 106) {
            sympathy_id = 109;
        }
        if (sympathy_with_disc_id == 398 && sympathy_base_disc_id == 106) {
            sympathy_id = 109;
        }
        if (sympathy_base_disc_id == 398 && sympathy_with_disc_id == 116) {
            sympathy_id = 110;
        }
        if (sympathy_with_disc_id == 398 && sympathy_base_disc_id == 116) {
            sympathy_id = 110;
        }
        if (sympathy_base_disc_id == 398 && sympathy_with_disc_id == 120) {
            sympathy_id = 111;
        }
        if (sympathy_with_disc_id == 398 && sympathy_base_disc_id == 120) {
            sympathy_id = 111;
        }
        if (sympathy_base_disc_id == 398 && sympathy_with_disc_id == 111) {
            sympathy_id = 112;
        }
        if (sympathy_with_disc_id == 398 && sympathy_base_disc_id == 111) {
            sympathy_id = 112;
        }
        if (sympathy_base_disc_id == 398 && sympathy_with_disc_id == 103) {
            sympathy_id = 113;
        }
        if (sympathy_with_disc_id == 398 && sympathy_base_disc_id == 103) {
            sympathy_id = 113;
        }
        if (sympathy_base_disc_id == 398 && sympathy_with_disc_id == 203) {
            sympathy_id = 114;
        }
        if (sympathy_with_disc_id == 398 && sympathy_base_disc_id == 203) {
            sympathy_id = 114;
        }
        if (sympathy_base_disc_id == 398 && sympathy_with_disc_id == 317) {
            sympathy_id = 115;
        }
        if (sympathy_with_disc_id == 398 && sympathy_base_disc_id == 317) {
            sympathy_id = 115;
        }
        if (sympathy_base_disc_id == 106 && sympathy_with_disc_id == 104) {
            sympathy_id = 116;
        }
        if (sympathy_with_disc_id == 106 && sympathy_base_disc_id == 104) {
            sympathy_id = 116;
        }
        if (sympathy_base_disc_id == 106 && sympathy_with_disc_id == 103) {
            sympathy_id = 117;
        }
        if (sympathy_with_disc_id == 106 && sympathy_base_disc_id == 103) {
            sympathy_id = 117;
        }
        if (sympathy_base_disc_id == 106 && sympathy_with_disc_id == 116) {
            sympathy_id = 118;
        }
        if (sympathy_with_disc_id == 106 && sympathy_base_disc_id == 116) {
            sympathy_id = 118;
        }
        if (sympathy_base_disc_id == 106 && sympathy_with_disc_id == 301) {
            sympathy_id = 119;
        }
        if (sympathy_with_disc_id == 106 && sympathy_base_disc_id == 301) {
            sympathy_id = 119;
        }
        if (sympathy_base_disc_id == 106 && sympathy_with_disc_id == 300) {
            sympathy_id = 120;
        }
        if (sympathy_with_disc_id == 106 && sympathy_base_disc_id == 300) {
            sympathy_id = 120;
        }
        if (sympathy_base_disc_id == 106 && sympathy_with_disc_id == 313) {
            sympathy_id = 121;
        }
        if (sympathy_with_disc_id == 106 && sympathy_base_disc_id == 313) {
            sympathy_id = 121;
        }
        if (sympathy_base_disc_id == 104 && sympathy_with_disc_id == 103) {
            sympathy_id = 122;
        }
        if (sympathy_with_disc_id == 104 && sympathy_base_disc_id == 103) {
            sympathy_id = 122;
        }
        if (sympathy_base_disc_id == 104 && sympathy_with_disc_id == 301) {
            sympathy_id = 123;
        }
        if (sympathy_with_disc_id == 104 && sympathy_base_disc_id == 301) {
            sympathy_id = 123;
        }
        if (sympathy_base_disc_id == 104 && sympathy_with_disc_id == 300) {
            sympathy_id = 124;
        }
        if (sympathy_with_disc_id == 104 && sympathy_base_disc_id == 300) {
            sympathy_id = 124;
        }
        if (sympathy_base_disc_id == 115 && sympathy_with_disc_id == 312) {
            sympathy_id = 125;
        }
        if (sympathy_with_disc_id == 115 && sympathy_base_disc_id == 312) {
            sympathy_id = 125;
        }
        if (sympathy_base_disc_id == 115 && sympathy_with_disc_id == 124) {
            sympathy_id = 126;
        }
        if (sympathy_with_disc_id == 115 && sympathy_base_disc_id == 124) {
            sympathy_id = 126;
        }
        if (sympathy_base_disc_id == 115 && sympathy_with_disc_id == 121) {
            sympathy_id = 127;
        }
        if (sympathy_with_disc_id == 115 && sympathy_base_disc_id == 121) {
            sympathy_id = 127;
        }
        if (sympathy_base_disc_id == 115 && sympathy_with_disc_id == 108) {
            sympathy_id = 128;
        }
        if (sympathy_with_disc_id == 115 && sympathy_base_disc_id == 108) {
            sympathy_id = 128;
        }
        if (sympathy_base_disc_id == 108 && sympathy_with_disc_id == 312) {
            sympathy_id = 129;
        }
        if (sympathy_with_disc_id == 108 && sympathy_base_disc_id == 312) {
            sympathy_id = 129;
        }
        if (sympathy_base_disc_id == 108 && sympathy_with_disc_id == 124) {
            sympathy_id = 130;
        }
        if (sympathy_with_disc_id == 108 && sympathy_base_disc_id == 124) {
            sympathy_id = 130;
        }
        if (sympathy_base_disc_id == 108 && sympathy_with_disc_id == 121) {
            sympathy_id = 131;
        }
        if (sympathy_with_disc_id == 108 && sympathy_base_disc_id == 121) {
            sympathy_id = 131;
        }
        if (sympathy_base_disc_id == 124 && sympathy_with_disc_id == 312) {
            sympathy_id = 132;
        }
        if (sympathy_with_disc_id == 124 && sympathy_base_disc_id == 312) {
            sympathy_id = 132;
        }
        if (sympathy_base_disc_id == 124 && sympathy_with_disc_id == 121) {
            sympathy_id = 133;
        }
        if (sympathy_with_disc_id == 124 && sympathy_base_disc_id == 121) {
            sympathy_id = 133;
        }
        if (sympathy_base_disc_id == 312 && sympathy_with_disc_id == 121) {
            sympathy_id = 134;
        }
        if (sympathy_with_disc_id == 312 && sympathy_base_disc_id == 121) {
            sympathy_id = 134;
        }
        if (sympathy_base_disc_id == 101 && sympathy_with_disc_id == 122) {
            sympathy_id = 135;
        }
        if (sympathy_with_disc_id == 101 && sympathy_base_disc_id == 122) {
            sympathy_id = 135;
        }
        if (sympathy_base_disc_id == 101 && sympathy_with_disc_id == 109) {
            sympathy_id = 136;
        }
        if (sympathy_with_disc_id == 101 && sympathy_base_disc_id == 109) {
            sympathy_id = 136;
        }
        if (sympathy_base_disc_id == 109 && sympathy_with_disc_id == 116) {
            sympathy_id = 137;
        }
        if (sympathy_with_disc_id == 109 && sympathy_base_disc_id == 116) {
            sympathy_id = 137;
        }
        if (sympathy_base_disc_id == 102 && sympathy_with_disc_id == 119) {
            sympathy_id = 138;
        }
        if (sympathy_with_disc_id == 102 && sympathy_base_disc_id == 119) {
            sympathy_id = 138;
        }
        if (sympathy_base_disc_id == 102 && sympathy_with_disc_id == 315) {
            sympathy_id = 139;
        }
        if (sympathy_with_disc_id == 102 && sympathy_base_disc_id == 315) {
            sympathy_id = 139;
        }
        if (sympathy_base_disc_id == 111 && sympathy_with_disc_id == 115) {
            sympathy_id = 140;
        }
        if (sympathy_with_disc_id == 111 && sympathy_base_disc_id == 115) {
            sympathy_id = 140;
        }
        if (sympathy_base_disc_id == 111 && sympathy_with_disc_id == 114) {
            sympathy_id = 141;
        }
        if (sympathy_with_disc_id == 111 && sympathy_base_disc_id == 114) {
            sympathy_id = 141;
        }
        if (sympathy_base_disc_id == 111 && sympathy_with_disc_id == 123) {
            sympathy_id = 142;
        }
        if (sympathy_with_disc_id == 111 && sympathy_base_disc_id == 123) {
            sympathy_id = 142;
        }
        if (sympathy_base_disc_id == 112 && sympathy_with_disc_id == 314) {
            sympathy_id = 143;
        }
        if (sympathy_with_disc_id == 112 && sympathy_base_disc_id == 314) {
            sympathy_id = 143;
        }
        if (sympathy_base_disc_id == 112 && sympathy_with_disc_id == 204) {
            sympathy_id = 144;
        }
        if (sympathy_with_disc_id == 112 && sympathy_base_disc_id == 204) {
            sympathy_id = 144;
        }
        if (sympathy_base_disc_id == 112 && sympathy_with_disc_id == 395) {
            sympathy_id = 145;
        }
        if (sympathy_with_disc_id == 112 && sympathy_base_disc_id == 395) {
            sympathy_id = 145;
        }
        if (sympathy_base_disc_id == 204 && sympathy_with_disc_id == 395) {
            sympathy_id = 146;
        }
        if (sympathy_with_disc_id == 204 && sympathy_base_disc_id == 395) {
            sympathy_id = 146;
        }
        if (sympathy_base_disc_id == 114 && sympathy_with_disc_id == 304) {
            sympathy_id = 147;
        }
        if (sympathy_with_disc_id == 114 && sympathy_base_disc_id == 304) {
            sympathy_id = 147;
        }
        if (sympathy_base_disc_id == 114 && sympathy_with_disc_id == 397) {
            sympathy_id = 148;
        }
        if (sympathy_with_disc_id == 114 && sympathy_base_disc_id == 397) {
            sympathy_id = 148;
        }
        if (sympathy_base_disc_id == 120 && sympathy_with_disc_id == 118) {
            sympathy_id = 149;
        }
        if (sympathy_with_disc_id == 120 && sympathy_base_disc_id == 118) {
            sympathy_id = 149;
        }
        if (sympathy_base_disc_id == 120 && sympathy_with_disc_id == 304) {
            sympathy_id = 150;
        }
        if (sympathy_with_disc_id == 120 && sympathy_base_disc_id == 304) {
            sympathy_id = 150;
        }
        if (sympathy_base_disc_id == 120 && sympathy_with_disc_id == 317) {
            sympathy_id = 151;
        }
        if (sympathy_with_disc_id == 120 && sympathy_base_disc_id == 317) {
            sympathy_id = 151;
        }
        if (sympathy_base_disc_id == 304 && sympathy_with_disc_id == 118) {
            sympathy_id = 152;
        }
        if (sympathy_with_disc_id == 304 && sympathy_base_disc_id == 118) {
            sympathy_id = 152;
        }
        if (sympathy_base_disc_id == 397 && sympathy_with_disc_id == 118) {
            sympathy_id = 153;
        }
        if (sympathy_with_disc_id == 397 && sympathy_base_disc_id == 118) {
            sympathy_id = 153;
        }
        if (sympathy_base_disc_id == 202 && sympathy_with_disc_id == 320) {
            sympathy_id = 154;
        }
        if (sympathy_with_disc_id == 202 && sympathy_base_disc_id == 320) {
            sympathy_id = 154;
        }
        if (sympathy_base_disc_id == 202 && sympathy_with_disc_id == 207) {
            sympathy_id = 155;
        }
        if (sympathy_with_disc_id == 202 && sympathy_base_disc_id == 207) {
            sympathy_id = 155;
        }
        if (sympathy_base_disc_id == 320 && sympathy_with_disc_id == 207) {
            sympathy_id = 156;
        }
        if (sympathy_with_disc_id == 320 && sympathy_base_disc_id == 207) {
            sympathy_id = 156;
        }
        if (sympathy_base_disc_id == 114 && sympathy_with_disc_id == 302) {
            sympathy_id = 157;
        }
        if (sympathy_with_disc_id == 114 && sympathy_base_disc_id == 302) {
            sympathy_id = 157;
        }
        if (sympathy_base_disc_id == 317 && sympathy_with_disc_id == 302) {
            sympathy_id = 158;
        }
        if (sympathy_with_disc_id == 317 && sympathy_base_disc_id == 302) {
            sympathy_id = 158;
        }
        if (sympathy_base_disc_id == 112 && sympathy_with_disc_id == 305) {
            sympathy_id = 159;
        }
        if (sympathy_with_disc_id == 112 && sympathy_base_disc_id == 305) {
            sympathy_id = 159;
        }
        if (sympathy_base_disc_id == 117 && sympathy_with_disc_id == 113) {
            sympathy_id = 160;
        }
        if (sympathy_with_disc_id == 117 && sympathy_base_disc_id == 113) {
            sympathy_id = 160;
        }
        if (sympathy_base_disc_id == 105 && sympathy_with_disc_id == 304) {
            sympathy_id = 161;
        }
        if (sympathy_with_disc_id == 105 && sympathy_base_disc_id == 304) {
            sympathy_id = 161;
        }
        if (sympathy_base_disc_id == 105 && sympathy_with_disc_id == 397) {
            sympathy_id = 162;
        }
        if (sympathy_with_disc_id == 105 && sympathy_base_disc_id == 397) {
            sympathy_id = 162;
        }
        if (sympathy_base_disc_id == 105 && sympathy_with_disc_id == 303) {
            sympathy_id = 163;
        }
        if (sympathy_with_disc_id == 105 && sympathy_base_disc_id == 303) {
            sympathy_id = 163;
        }
        if (sympathy_base_disc_id == 111 && sympathy_with_disc_id == 102) {
            sympathy_id = 164;
        }
        if (sympathy_with_disc_id == 111 && sympathy_base_disc_id == 102) {
            sympathy_id = 164;
        }
        if (sympathy_base_disc_id == 111 && sympathy_with_disc_id == 112) {
            sympathy_id = 165;
        }
        if (sympathy_with_disc_id == 111 && sympathy_base_disc_id == 112) {
            sympathy_id = 165;
        }
        if (sympathy_base_disc_id == 101 && sympathy_with_disc_id == 203) {
            sympathy_id = 166;
        }
        if (sympathy_with_disc_id == 101 && sympathy_base_disc_id == 203) {
            sympathy_id = 166;
        }
        if (sympathy_base_disc_id == 118 && sympathy_with_disc_id == 100) {
            sympathy_id = 167;
        }
        if (sympathy_with_disc_id == 118 && sympathy_base_disc_id == 100) {
            sympathy_id = 167;
        }
        if (sympathy_base_disc_id == 118 && sympathy_with_disc_id == 398) {
            sympathy_id = 168;
        }
        if (sympathy_with_disc_id == 118 && sympathy_base_disc_id == 398) {
            sympathy_id = 168;
        }
        if (sympathy_base_disc_id == 205 && sympathy_with_disc_id == 309) {
            sympathy_id = 169;
        }
        if (sympathy_with_disc_id == 205 && sympathy_base_disc_id == 309) {
            sympathy_id = 169;
        }
        if (sympathy_base_disc_id == 394 && sympathy_with_disc_id == 314) {
            sympathy_id = 143;
        }
        if (sympathy_with_disc_id == 394 && sympathy_base_disc_id == 314) {
            sympathy_id = 143;
        }
        if (sympathy_base_disc_id == 394 && sympathy_with_disc_id == 204) {
            sympathy_id = 144;
        }
        if (sympathy_with_disc_id == 394 && sympathy_base_disc_id == 204) {
            sympathy_id = 144;
        }
        if (sympathy_base_disc_id == 394 && sympathy_with_disc_id == 395) {
            sympathy_id = 145;
        }
        if (sympathy_with_disc_id == 394 && sympathy_base_disc_id == 395) {
            sympathy_id = 145;
        }
        if (sympathy_base_disc_id == 394 && sympathy_with_disc_id == 305) {
            sympathy_id = 159;
        }
        if (sympathy_with_disc_id == 394 && sympathy_base_disc_id == 305) {
            sympathy_id = 159;
        }
        if (sympathy_base_disc_id == 111 && sympathy_with_disc_id == 394) {
            sympathy_id = 165;
        }
        if (sympathy_with_disc_id == 111 && sympathy_base_disc_id == 394) {
            sympathy_id = 165;
        }
        var_1173 = sympathy_id;
        if (var_1173 == 1 || var_1173 == 102 || var_1173 == 103 || var_1173 == 107 || var_1173 == 110 || var_1173 == 111 || var_1173 == 115 || var_1173 == 117 || var_1173 == 118 || var_1173 == 122 || var_1173 == 125 || var_1173 == 126 || var_1173 == 127 || var_1173 == 129 || var_1173 == 130 || var_1173 == 131 || var_1173 == 132 || var_1173 == 133 || var_1173 == 137 || var_1173 == 149 || var_1173 == 150 || var_1173 == 151 || var_1173 == 152 || var_1173 == 153 || var_1173 == 158 || var_1173 == 167 || var_1173 == 168) {
            var_566 = var_566 + 1;
            var_565 = var_565 + 1;
            if (var_565 >= var_566) {
                var_565 = var_566;
            }
            if (var_565 <= 0) {
                var_565 = 0;
            }
        }
        if (var_1173 == 128 || var_1173 == 134 || var_1173 == 138 || var_1173 == 140 || var_1173 == 142 || var_1173 == 143 || var_1173 == 147 || var_1173 == 148 || var_1173 == 157 || var_1173 == 169) {
            var_566 = var_566 + 2;
            var_565 = var_565 + 2;
            if (var_565 >= var_566) {
                var_565 = var_566;
            }
            if (var_565 <= 0) {
                var_565 = 0;
            }
        }
        if (var_1173 == 141) {
            var_566 = var_566 + 3;
            var_565 = var_565 + 3;
            if (var_565 >= var_566) {
                var_565 = var_566;
            }
            if (var_565 <= 0) {
                var_565 = 0;
            }
        }
        if (var_1173 == 116 || var_1173 == 154 || var_1173 == 155 || var_1173 == 156) {
            var_580 = var_580 + 1;
        }
        if (var_1173 == 160 || var_1173 == 163) {
            var_580 = var_580 + 2;
        }
        if (var_1173 == 108 || var_1173 == 112 || var_1173 == 135 || var_1173 == 164 || var_1173 == 165) {
            var_580 = var_580 + 3;
        }
        if (var_1173 == 105 || var_1173 == 113) {
            var_581 = var_581 + 1;
        }
        if (var_1173 == 144) {
            var_581 = var_581 + 2;
        }
        if (var_1173 == 161 || var_1173 == 162) {
            var_1048 = 10;
            var_2181 = var_352 + var_1048;
            if (var_2181 > 999) {
                var_1048 = 999 - var_352;
                if (var_1048 < 0) {
                    var_1047 = 0;
                }
            }
            var_352 = var_352 + var_1048;
        }
        if (var_1173 == 159 || var_1173 == 145 || var_1173 == 146) {
            var_1048 = 20;
            var_2181 = var_352 + var_1048;
            if (var_2181 > 999) {
                var_1048 = 999 - var_352;
                if (var_1048 < 0) {
                    var_1047 = 0;
                }
            }
            var_352 = var_352 + var_1048;
        }
        if (var_1173 == 104) {
            var_1048 = 30;
            var_2181 = var_352 + var_1048;
            if (var_2181 > 999) {
                var_1048 = 999 - var_352;
                if (var_1048 < 0) {
                    var_1047 = 0;
                }
            }
            var_352 = var_352 + var_1048;
        }
        if (var_352 <= 1) {
            var_352 = 1;
        }
        if (var_211 >= var_352) {
            var_211 = var_352;
        }
        if (var_211 <= 0) {
            var_211 = 1;
        }
        return;
    });
}

// スタンドの共鳴発動時のメッセージ表示
function func497(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(497);
        if (sympathy_id == 0) {
            return;
        }
        if (var_1926 == 0) {
            return;
        }
        var_1173 = sympathy_id;
        if (var_1929 != 0) {
            return;
        }
        var_1241 = 1;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "装備したスタンドが引きあっている！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        var_1572 = 1;
        var_271 = 1;
        DSPLAY(audio_id = 233);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_1572++;
        }
        var_1572 = 0;
        var_271 = 0;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row2a = "";
        if (sympathy_id == 1) {
            comments_row1a = "「同じタイプのスタンド！」";
        }
        if (sympathy_id == 101) {
            comments_row1a = "「狩り(ハンティング)に行こう！」";
        }
        if (sympathy_id == 102) {
            comments_row1a = "「ジョースターの血統」";
        }
        if (sympathy_id == 103) {
            comments_row1a = "「愛＝理解」";
        }
        if (sympathy_id == 104) {
            comments_row1a = "「オラオラ無駄無駄」";
        }
        if (sympathy_id == 105) {
            comments_row1a = "「本当に頼りになるやつだ」";
        }
        if (sympathy_id == 106) {
            comments_row1a = "「協力してもらうぜ」";
        }
        if (sympathy_id == 107) {
            comments_row1a = "「一緒に登ってきた」";
        }
        if (sympathy_id == 108) {
            comments_row1a = "「お前は俺を怒らせた」";
        }
        if (sympathy_id == 109) {
            comments_row1a = "「狩り(ハンティング)に行こう！」";
        }
        if (sympathy_id == 110) {
            comments_row1a = "「ジョースターの血統」";
        }
        if (sympathy_id == 111) {
            comments_row1a = "「愛＝理解」";
        }
        if (sympathy_id == 112) {
            comments_row1a = "「オラオラ無駄無駄」";
        }
        if (sympathy_id == 113) {
            comments_row1a = "「本当に頼りになるやつだ」";
        }
        if (sympathy_id == 114) {
            comments_row1a = "「協力してもらうぜ」";
        }
        if (sympathy_id == 115) {
            comments_row1a = "「一緒に登ってきた」";
        }
        if (sympathy_id == 116) {
            comments_row1a = "「気が合う二人」";
        }
        if (sympathy_id == 117) {
            comments_row1a = "「僕らの街　杜王町」";
        }
        if (sympathy_id == 118) {
            comments_row1a = "「直さないからいい！」";
        }
        if (sympathy_id == 119) {
            comments_row1a = "「友情のしるし！」";
        }
        if (sympathy_id == 120) {
            comments_row1a = "「注文の不思議な料理店！」";
        }
        if (sympathy_id == 121) {
            comments_row1a = "「追跡しろ！」";
        }
        if (sympathy_id == 122) {
            comments_row1a = "「僕らの街　杜王町」";
        }
        if (sympathy_id == 123) {
            comments_row1a = "「ハッピー＆メルヘン」";
        }
        if (sympathy_id == 124) {
            comments_row1a = "「うンまぁ～い！」";
        }
        if (sympathy_id == 125) {
            comments_row1a = "「チーム・ブチャラティ」";
        }
        if (sympathy_id == 126) {
            comments_row1a = "「チーム・ブチャラティ」";
        }
        if (sympathy_id == 127) {
            comments_row1a = "「チーム・ブチャラティ」";
        }
        if (sympathy_id == 128) {
            comments_row1a = "「夢のために！」";
        }
        if (sympathy_id == 129) {
            comments_row1a = "「チーム・ブチャラティ」";
        }
        if (sympathy_id == 130) {
            comments_row1a = "「チーム・ブチャラティ」";
        }
        if (sympathy_id == 131) {
            comments_row1a = "「チーム・ブチャラティ」";
        }
        if (sympathy_id == 132) {
            comments_row1a = "「チーム・ブチャラティ」";
        }
        if (sympathy_id == 133) {
            comments_row1a = "「チーム・ブチャラティ」";
        }
        if (sympathy_id == 134) {
            comments_row1a = "「こいつにスパゲティを」";
        }
        if (sympathy_id == 135) {
            comments_row1a = "「達人二刀流」";
        }
        if (sympathy_id == 136) {
            comments_row1a = "「はっはっは　狙え狙え」";
        }
        if (sympathy_id == 137) {
            comments_row1a = "「挟み撃ちの形」";
        }
        if (sympathy_id == 138) {
            comments_row1a = "「過去を乗り越える！」";
        }
        if (sympathy_id == 139) {
            comments_row1a = "「絶頂の能力」";
        }
        if (sympathy_id == 140) {
            comments_row1a = "「ＤＩＯの血統」";
        }
        if (sympathy_id == 141) {
            comments_row1a = "「信頼できる友」";
        }
        if (sympathy_id == 142) {
            comments_row1a = "「血をささげます」";
        }
        if (sympathy_id == 143) {
            comments_row1a = "「空気が火を吹いた！」";
        }
        if (sympathy_id == 144) {
            comments_row1a = "「第２の爆弾」";
        }
        if (sympathy_id == 145) {
            comments_row1a = "「第３の爆弾」";
        }
        if (sympathy_id == 146) {
            comments_row1a = "「キラークィーン」";
        }
        if (sympathy_id == 147) {
            comments_row1a = "「純潔の日々、戻らず！！」";
        }
        if (sympathy_id == 148) {
            comments_row1a = "「ヤバイ「ＤＩＳＣ」がＩＮ！！」";
        }
        if (sympathy_id == 149) {
            comments_row1a = "「祝福しろ！」";
        }
        if (sympathy_id == 150) {
            comments_row1a = "「無重力の二人」";
        }
        if (sympathy_id == 151) {
            comments_row1a = "「愛と復讐のキッス」";
        }
        if (sympathy_id == 152) {
            comments_row1a = "「幽霊部屋の仲間」";
        }
        if (sympathy_id == 153) {
            comments_row1a = "「一人でリラックス」";
        }
        if (sympathy_id == 154) {
            comments_row1a = "「暗殺チーム」";
        }
        if (sympathy_id == 155) {
            comments_row1a = "「暗殺チーム」";
        }
        if (sympathy_id == 156) {
            comments_row1a = "「暗殺チーム」";
        }
        if (sympathy_id == 157) {
            comments_row1a = "「真の邪悪」";
        }
        if (sympathy_id == 158) {
            comments_row1a = "「パンティーあげちゃうッ！」";
        }
        if (sympathy_id == 159) {
            comments_row1a = "「整形手術」";
        }
        if (sympathy_id == 160) {
            comments_row1a = "「水中へよ～こそ」";
        }
        if (sympathy_id == 161) {
            comments_row1a = "「雷で最大発電！」";
        }
        if (sympathy_id == 162) {
            comments_row1a = "「雷で最大発電！」";
        }
        if (sympathy_id == 163) {
            comments_row1a = "「電気イスの刑」";
        }
        if (sympathy_id == 164) {
            comments_row1a = "「邪悪の化身」";
        }
        if (sympathy_id == 165) {
            comments_row1a = "「邪悪の化身」";
        }
        if (sympathy_id == 166) {
            comments_row1a = "「暗黒空間の軌跡」";
        }
        if (sympathy_id == 167) {
            comments_row1a = "「気まずい二人」";
        }
        if (sympathy_id == 168) {
            comments_row1a = "「気まずい二人」";
        }
        if (sympathy_id == 169) {
            comments_row1a = "「マジに信じたのか！」";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[1];
        var_26_x = var_26[1];
        var_27_x = var_27[1];
        yield func047();
        yield func050();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1241 = 0;
        return;
    });
}

// 消費アイテム効果
function func498(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(498);
        if (var_1930 == 1) {
            var_2187 = belongings_item_list;
            yield func492(); // アイテムリスト呼び出し
            var_2188 = item_name;

            if (var_862[belongings_item_list][0] == 0) {
                if (belongings_item_list == 567 || belongings_item_list == 590 || belongings_item_list == 565) {
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "なんと" + item_name + "は";
                    var_862[belongings_item_list][0] = 1;
                    if (belongings_item_list == 567) {
                        comments_row2a = "ｱｳﾞﾄﾞｩﾙのDISCだった！";
                        var_2188 = "ｱｳﾞﾄﾞｩﾙのDISC";
                    }
                    if (belongings_item_list == 590) {
                        comments_row2a = "ｷﾞｱｯﾁｮのDISCだった！";
                        var_2188 = "ｷﾞｱｯﾁｮのDISC";
                    }
                    if (belongings_item_list == 565) {
                        comments_row2a = "ﾌﾟｯﾁ神父のDISCだった！";
                        var_2188 = "ﾌﾟｯﾁ神父のDISC";
                    }
                    var_198 = 1;
                    var_300 = 0;
                    var_25_x = var_25[1];
                    var_26_x = var_26[1];
                    var_27_x = var_27[1];
                    yield func047();
                    yield func050();
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                }
            }
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            var_1214 = 0;
            var_1252 = 0;
            var_1389 = var_66;
            var_1390 = var_67;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + var_2188 + "が";
            comments_row2 = "爆発した！";
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
            DSPLAY(audio_id = 180);
            var_199 = 2;
            var_389 = 2;
            var_1263 = 1;
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
            var_403 = "";
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
                var_356 = 249;
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_389 = 0;
                var_2197 = 1;
                var_1936 = 0;
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
            for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
        // No = 560 仗助のdiscの効果
        if (belongings_item_list == 560) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_601 = rnd(4);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_601 == 0) {
                comments_row1 = "ｱﾝｼﾞｪﾛに けなされた事を思い出した";
                comments_row2 = "";
            }
            if (var_601 == 1) {
                comments_row1 = "不良に けなされた事を思い出した";
                comments_row2 = "";
            }
            if (var_601 == 2) {
                comments_row1 = "承太郎に けなされた事を思い出した";
                comments_row2 = "";
            }
            if (var_601 == 3) {
                comments_row1 = "露伴に けなされた事を思い出した";
                comments_row2 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
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
        // No = 561  空き のdiscの効果
        if (belongings_item_list == 561) {
            if (var_262 == 1) {
                item_message1 = "しかし何も起こらなかった…";
                return;
            }
            var_2200 = 1;
            var_1845 = 1;
            yield func556();
            var_2200 = 0;
            var_1845 = 0;
            if (var_2110 == 0) {
                item_message1 = "しかし何も起こらなかった…";
            }
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            return;
        }
        // No = 562 康一のdiscの効果
        if (belongings_item_list == 562) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            if (current_level >= 99) {
                item_message1 = "これ以上成長できなかった…";
                return;
            }
    
            DSPLAY(audio_id = 142);
            var_568 = var_948[current_level];
            yield func681();
            var_2201 = 0;
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
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
            comments_row1 = "「うわオッ！」";
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
            comments_row1a = "「ひょっとして成長したんですかァ！？";
            comments_row2a = "ぼく！？」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            return;
        }
        // No = 563 ンドゥールのdiscの効果
        if (belongings_item_list == 563) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            var_132 = 1;
    
            DSPLAY(audio_id = 153);
            return;
        }
        // No = 564 噴上裕也のdiscの効果
        if (belongings_item_list == 564) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「クンクンクン・・・」";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_262 == 1) {
                item_message1 = "しかし何も起こらなかった…";
                return;
            }
            var_170 = 1;
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            return;
        }
        // No = 566 ケンゾーのdiscの効果
        if (belongings_item_list == 566) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(4);
            if (var_1073 == 0) {
                comments_row1 = "「健康の秘訣は睡眠8時間半と";
                comments_row2 = "　毎朝一杯の尿療法」";
            }
            if (var_1073 == 1) {
                comments_row1 = "「40年前";
                comments_row2 = "　わしは輝いておったんじゃあああああ」";
            }
            if (var_1073 == 2) {
                comments_row1 = "「教祖復活じゃああああああ";
                comments_row2 = "　あああああああああああああ」";
            }
            if (var_1073 == 3) {
                comments_row1 = "「完璧なる【守りの方角】";
                comments_row2 = "これで極めたって事じゃよのオオ！」";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
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
            return;
        }
        // No = 567 アヴドゥルのdiscの効果
        if (belongings_item_list == 567) {
            var_1945 = 1;
            var_1967 = var_225;
            return;
        }
        // No = 590 ギアッチョのdiscの効果
        if (belongings_item_list == 590) {
            var_1945 = 2;
            var_1967 = var_225;
            return;
        }
        // No = 565 プッチ神父のdiscの効果
        if (belongings_item_list == 565) {
            var_1945 = 3;
            var_1967 = var_225;
            return;
        }
        // No = 568 ジョンガリ・Aのdiscの効果
        if (belongings_item_list == 568) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(4);
            if (var_1073 == 0) {
                comments_row1 = "「【筋肉】は信用できない";
                comments_row2 = "　ライフルは【骨】でささえる」";
            }
            if (var_1073 == 1) {
                comments_row1 = "「風が【蝿】の動きだ」";
                comments_row2 = "";
            }
            if (var_1073 == 2) {
                comments_row1 = "「我が【心】のささえを奪った復讐には";
                comments_row2 = "決着をつけなくてはならないッ!!」";
            }
            if (var_1073 == 3) {
                comments_row1 = "「15秒以内に仕留めるッ！」";
                comments_row2 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
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
            var_138 = 1;
            return;
        }
        // No = 569 ポルナレフのdiscの効果
        if (belongings_item_list == 569) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_601 = rnd(5);
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            if (var_601 == 0) {
                comments_row1 = "ｱﾌﾞﾄﾞｩﾙが死んだ時の事を思い出した。";
                comments_row2 = "";
            }
            if (var_601 == 1) {
                comments_row1 = "ｲｷﾞｰが死んだ時の事を思い出した。";
                comments_row2 = "";
            }
            if (var_601 == 2) {
                comments_row1 = "ｼｪﾘｰが死んだ時の事を思い出した。";
                comments_row2 = "";
            }
            if (var_601 == 3) {
                comments_row1 = "ｱﾌﾞﾄﾞｩﾙが死んだ時の事を思い出した。";
                comments_row2 = "";
            }
            if (var_601 == 4) {
                comments_row1 = "階段でDIOに会った時の事を思い出した。";
                comments_row2 = "";
            }
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
            if (var_601 == 0) {
                comments_row1a = "「このドグサレがァァ――――ッ!!」";
                comments_row2a = "";
            }
            if (var_601 == 1) {
                comments_row1a = "「今のおれには…";
                comments_row2a = "悲しみで泣いている時間なんかないぜ」";
            }
            if (var_601 == 2) {
                comments_row1a = "「しかるべき報いを与えてやるッ！」";
                comments_row2a = "";
            }
            if (var_601 == 3) {
                comments_row1a = "「やつの気持ちを無駄にはしない";
                comments_row2a = "　生きるために戦う……！」";
            }
            if (var_601 == 4) {
                comments_row1a = "このままではまずい…はね返さなくてな…";
                comments_row2a = "おれに勇気をくれッ！";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
    
            DSPLAY(audio_id = 182);
            var_1299 = 3;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
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
        // No = 570 ジョナサンのdiscの効果
        if (belongings_item_list == 570) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(4);
            if (var_1073 == 0) {
                comments_row1 = "「ふるえるぞハート！";
                comments_row2 = "　燃え尽きるほどヒ―――ト！！」";
            }
            if (var_1073 == 1) {
                comments_row1 = "「刻むぞ　血液のビート！」";
                comments_row2 = "";
            }
            if (var_1073 == 2) {
                comments_row1 = "「浄めてやるッ";
                comments_row2 = "　その穢れたる野望！」";
            }
            if (var_1073 == 3) {
                comments_row1 = "「たっぷり波紋を流し込んでやるッ！」";
                comments_row2 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_125 = 1;
    
            DSPLAY(audio_id = 182);
            var_1299 = 1;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            if (var_130 != 0) {
                var_389 = 2;
                var_134 = 1;
                var_211 = 1;
                var_747 = 1;

                DSPLAY(audio_id = 105);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "吸血鬼体質で波紋呼吸をしてしまった！";
                comments_row2a = "";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                item_message1 = "酷いダメージを受けて回復しない！";
                yield func047();
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_389 = 0;
            }
            return;
        }
        // No = 571 ボインゴのdiscの効果
        if (belongings_item_list == 571) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            var_70 = 0;
            if (var_262 == 1) {
                item_message1 = "しかし何も起こらなかった…";
                return;
            }
            var_1252 = 1;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "あ…新しい予知が…現れた…ぞ…";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理

            DSPLAY(audio_id = 118);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「ﾃﾞｨｱﾎﾞﾛはﾀﾞﾝｼﾞｮﾝを歩いていました。";
            comments_row2a = "すると次の階で…」";
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && current_floor == 12) {
                comments_row2a = "するとこの階で…」";
            }
            // No = 2 なので、レクイエムの大迷宮
            if (dangeon_number == 2 && current_floor == 30) {
                comments_row2a = "するとこの階で…」";
            }
            // No = 3 なので、ディアボロの試練
            if (dangeon_number == 3 && current_floor == 99) {
                comments_row2a = "するとこの階で…」";
            }
            if (dangeon_number == 5 && current_floor == var_20) {
                comments_row2a = "するとこの階で…」";
            }
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理

            DSPLAY(audio_id = 118);
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            var_2202 = rnd(13);
            // No = 4 なので、一巡後の世界
            if (dangeon_number == 4) {
                yield func458(); // 恐竜の化石に関するもの(一巡後の世界のみで効果があるようになっている)
                if (var_69 == 1) {
                    var_2202 = 6;
                }
            }
            var_2203 = var_20 - 1;
            if (var_2202 == 0) {
                var_70 = 1;
                comments_row1a = "「ﾓﾝｽﾀｰﾊｳｽでﾎﾞｺﾎﾞｺに殴られて";
                comments_row2a = "リタイアだァーッ！」";
            }
            if (var_2202 == 1) {
                var_70 = 2;
                comments_row1a = "「養分を吸い取られ";
                comments_row2a = "餓死してリタイアだァーッ！」";
            }
            if (var_2202 == 2) {
                var_70 = 3;
                comments_row1a = "「体中の血を吸われて";
                comments_row2a = "リタイアだァーッ！」";
            }
            if (var_2202 == 3) {
                var_70 = 4;
                comments_row1a = "「体中を蜂の巣にされて";
                comments_row2a = "リタイアだァーッ！」";
            }
            if (var_2202 == 4) {
                var_70 = 5;
                comments_row1a = "「泥棒大成功！";
                comments_row2a = "ﾃﾞｨｱﾎﾞﾛはほんとにラッキー！」";
            }
            if (var_2202 == 5) {
                var_70 = 6;
                comments_row1a = "「トニオさんに殴られて";
                comments_row2a = "リタイアだァーッ！」";
            }
            if (var_2202 == 6) {
                var_70 = 7;
                comments_row1a = "「大部屋ﾓﾝｽﾀｰﾊｳｽだ！";
                comments_row2a = "ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。」";
            }
            if (var_2202 == 7) {
                var_70 = 8;
                comments_row1a = "「ｽﾀﾝﾄﾞﾊｳｽで殺されて";
                comments_row2a = "リタイアだァーッ！」";
            }
            if (var_2202 == 8) {
                var_70 = 9;
                comments_row1a = "「輝く黄金の精神に囲まれて";
                comments_row2a = "リタイアだァーッ！」";
            }
            if (var_2202 == 9) {
                var_70 = 10;
                comments_row1a = "「囚人の群れに囲まれて";
                comments_row2a = "リタイアだァーッ！」";
            }
            if (var_2202 == 10) {
                var_70 = 11;
                comments_row1a = "「広大な砂漠で行き倒れて";
                comments_row2a = "リタイアだァーッ！」";
            }
            if (var_2202 == 11) {
                var_70 = 12;
                comments_row1a = "「どこへ行くのかわからなくて";
                comments_row2a = "リタイアだァーッ！」";
            }
            if (var_2202 == 12) {
                var_70 = 13;
                comments_row1a = "「俺が最強だぁああああ―――ッ！」";
                comments_row2a = "";
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && current_floor == 11) {
                comments_row1a = "「ベンキを舐めさせられて";
                comments_row2a = "リタイアだァーッ！」";
                var_70 = 0;
            }
            // No = 2 なので、レクイエムの大迷宮
            if (dangeon_number == 2 && current_floor == 29) {
                comments_row1a = "「わけもわからず殺されて";
                comments_row2a = "リタイアだァーッ！」";
                var_70 = 0;
            }
            // No = 3 なので、ディアボロの試練
            if (dangeon_number == 3 && current_floor == 98) {
                comments_row1a = "「わけもわからず殺されて";
                comments_row2a = "リタイアだァーッ！」";
                var_70 = 0;
            }
            if (dangeon_number == 5 && current_floor == var_2203) {
                comments_row1a = "「わけもわからず殺されて";
                comments_row2a = "リタイアだァーッ！」";
                var_70 = 0;
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && current_floor == 12 && var_203 == 0) {
                comments_row1a = "「ベンキを舐めさせられて";
                comments_row2a = "リタイアだァーッ！」";
                var_70 = 0;
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && current_floor == 12 && var_203 == 1) {
                comments_row1a = "「体中を蜂の巣にされて";
                comments_row2a = "リタイアだァーッ！」";
                var_70 = 0;
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && current_floor == 12 && var_203 == 2) {
                comments_row1a = "「爆発で粉々にされて";
                comments_row2a = "リタイアだァーッ！」";
                var_70 = 0;
            }
            // No = 1 なので、ホテルの外
            if (dangeon_number == 1 && current_floor == 12 && var_203 == 3) {
                comments_row1a = "「電気で黒焦げにされて";
                comments_row2a = "リタイアだァーッ！」";
                var_70 = 0;
            }
            // No = 2 なので、レクイエムの大迷宮
            if (dangeon_number == 2 && current_floor == 30) {
                comments_row1a = "「わけもわからず殺されて";
                comments_row2a = "リタイアだァーッ！」";
                var_70 = 0;
            }
            // No = 3 なので、ディアボロの試練
            if (dangeon_number == 3 && current_floor == 99) {
                comments_row1a = "「わけもわからず殺されて";
                comments_row2a = "リタイアだァーッ！」";
                var_70 = 0;
            }
            if (dangeon_number == 5 && current_floor == var_20) {
                comments_row1a = "「わけもわからず殺されて";
                comments_row2a = "リタイアだァーッ！」";
                var_70 = 0;
            }
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1252 = 0;
            return;
        }
        // No = 572 承太郎のdiscの効果
        if (belongings_item_list == 572) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(4);
            if (var_1073 == 0) {
                comments_row1 = "「やれやれだぜ・・・」";
                comments_row2 = "";
            }
            if (var_1073 == 1) {
                comments_row1 = "「やれやれだぜ・・・」";
                comments_row2 = "";
            }
            if (var_1073 == 2) {
                comments_row1 = "「やれやれだぜ・・・」";
                comments_row2 = "";
            }
            if (var_1073 == 3) {
                comments_row1 = "「やれやれだぜ・・・」";
                comments_row2 = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            DSPLAY(audio_id = 182);
            var_1299 = 3;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_111 = 1;
            return;
        }
        // No = 573 重ちーのdiscの効果
        if (belongings_item_list == 573) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            if (var_262 == 1) {
                item_message1 = "しかし何も起こらなかった…"; // var_262 = 1でなければ "ｱｲﾃﾑの場所がわかった！"
                return;
            }
            DSPLAY(audio_id = 184);
            var_100 = 1;
            yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            return;
        }
        // No = 574 エンポリオのdiscの効果
        if (belongings_item_list == 574) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            if (var_262 == 1) {
                item_message1 = "しかし何も起こらなかった…";
                return;
            }
            var_126 = 1;
    
            DSPLAY(audio_id = 134);
            return;
        }
        // No = 575 マニッシュボーイのdiscの効果
        if (belongings_item_list == 575) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            if (equip_disc[351] == 1) {
                item_message1 = "装備DISCの効果によって";
                item_message2 = "眠くならなかった！";
                return;
            }
            if (var_120 == 1) {
                item_message1 = "10時間熟睡した気分になっていて";
                item_message2 = "眠くならなかった！";
                return;
            }
            if (var_120 == 0) {
                var_219 = 1;
        
                DSPLAY(audio_id = 132);
                return;
            }
        }
        // No = 576 破裂するdiscの効果
        if (belongings_item_list == 576) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            var_177 = 1;
            return;
        }
        // No = 577 ミキタカのdiscの効果
        if (belongings_item_list == 577) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            var_470 = 1;
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
    
            DSPLAY(audio_id = 123);
            var_470 = 2;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 3;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 4;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 5;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 6;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 7;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 8;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 9;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
    
            DSPLAY(audio_id = 102);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                var_470 = 10;
                yield func337(); // メッセージ関係呼び出し
                var_470 = 11;
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 12;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 13;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 14;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 15;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 16;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 17;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 18;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 19;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            DSPLAY(audio_id = 232);
            var_470 = 20;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_470 = 0;
            var_218 = 1;
            return;
        }
        // No = 578 サンドマンのdiscの効果
        if (belongings_item_list == 578) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            if (var_133 == 0) {
                var_157 = 1;
                var_158 = 0;
        
                DSPLAY(audio_id = 154);
            }
            if (var_133 != 0) {
                var_133 = 0;
            }
            return;
        }
        // No = 579 ペットショップのdiscの効果
        if (belongings_item_list == 579) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            if (var_262 == 1) {
                item_message1 = "しかし何も起こらなかった…";
                return;
            }
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                DSPLAY(audio_id = 219);
                var_1243 = 1;
                yield func337(); // メッセージ関係呼び出し
                var_1243 = 2;
                yield func337(); // メッセージ関係呼び出し
                var_1243 = 3;
                yield func337(); // メッセージ関係呼び出し
                var_1243 = 2;
                yield func337(); // メッセージ関係呼び出し
            }
            var_1243 = 0;

            DSPLAY(audio_id = 216);
            var_374 = 1;
            var_1264 = 0;
            var_774 = 160;
            var_1576 = 1;
            var_271 = 1;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_774 = var_774 - 20;
            }
            var_1576 = 0;
            var_271 = 0;
            var_374 = 0;
            yield func499();
            return;
        }
        // No = 580 ドッピオのdiscの効果
        if (belongings_item_list == 580) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            if (var_262 == 1) {
                item_message1 = "しかし何も起こらなかった…";
                return;
            }
            var_144 = 1;
    
            DSPLAY(audio_id = 168);
            var_1584 = 160;
            var_1585 = 160;
            var_271 = 1;
            var_1583 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
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
        // No = 582 水が熱湯になるdiscの効果
        if (belongings_item_list == 582) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            var_2204 = 0;
            var_2205 = 1;
            for (let cnt2 = 0; cnt2 < var_224; ++cnt2) {
                if (var_233[var_2205].Var0 == 401) {
                    var_2204 = 1;
                    var_233[var_2205].Var3 = 1;
                }
                var_2205++;
            }
            if (var_2204 == 1) {
        
                DSPLAY(audio_id = 175);
                var_1584 = 160;
                var_1585 = 160;
                var_271 = 1;
                var_1583 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                    var_1583++;
                }
                var_271 = 0;
                var_1583 = 0;
                item_message1 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのDISCの回数が";
                item_message2 = "残り １ になってしまった！！";
            }
            return;
        }
        // No = 583 ディアボロのdiscの効果
        if (belongings_item_list == 583) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            if (var_262 == 1) {
                item_message1 = "しかし何も起こらなかった…";
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
            comments_row1 = "ここは「退く」のだ……………";
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
            comments_row1a = "ここで一時「退く」のは";
            comments_row2a = "敗北ではない……………！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            item_message1 = "オレは頂点に返り咲ける能力があるッ！";
            item_message2 = "";
            var_1951 = 1;
            return;
        }
        // No = 584 ヌケサクのdiscの効果
        if (belongings_item_list == 584) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            var_601 = rnd(5);
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "嫌な記憶がよみがえってきた…";
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
            if (var_601 == 0) {
                comments_row1a = "「黙って引っ込んでろよ　いいな…」";
                comments_row2a = "";
            }
            if (var_601 == 1) {
                comments_row1a = "「よけいなことをしてみろ";
                comments_row2a = "おれたちが てめーを殺すぜ」";
            }
            if (var_601 == 2) {
                comments_row1a = "「おとなしく補欠してろヌケサク」";
                comments_row2a = "";
            }
            if (var_601 == 3) {
                comments_row1a = "「きさまの能力では";
                comments_row2a = "ジョースターたちを倒すのは無理だ」";
            }
            if (var_601 == 4) {
                comments_row1a = "「しょせんきさまはただの吸血鬼」";
                comments_row2a = "";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
    
            DSPLAY(audio_id = 151);
            var_1299 = 4;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_109 = 1;
            if (var_104 == 1) {
                var_104 = 0;
                var_109 = 0;
            }
    
            DSPLAY(audio_id = 164);
            return;
        }
        // No = 585 億泰のdiscの効果
        if (belongings_item_list == 585) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(2);
            if (var_1073 == 0) {
                comments_row1 = "「あっ！　こりゃたまらん！";
                comments_row2 = "　　ヨダレ　ずびっ！」";
            }
            if (var_1073 == 1) {
                comments_row1 = "「うわあああああ";
                comments_row2 = "　はっ　腹が空いていくうよぉ～～っ」";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
    
            DSPLAY(audio_id = 164);
            var_129 = 1;
            var_193 = 0;
            return;
        }
        // No = 586 ペッシのdiscの効果
        if (belongings_item_list == 586) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            if (current_level > 1) {
                for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_1264 = 0;
                var_389 = 2;
                yield func094();
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "兄貴ィ～～　もう駄目だァ～～";
                comments_row2 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
        
                DSPLAY(audio_id = 151);
                var_1299 = 4;
                var_271 = 1;
                var_1297 = 1;
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                    var_1297++;
                }
                var_271 = 0;
                var_1297 = 0;
                current_level = current_level - 1;
                var_352 = var_352 - 3;
                var_211 = var_211 - 3;
                if (var_352 < 1) {
                    var_352 = 1;
                }
                if (var_211 < 1) {
                    var_211 = 1;
                }
                var_568 = var_948[current_level] - 1;
                var_389 = 0;
                return;
            }
            if (current_level == 1) {
                for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_1264 = 0;
                yield func094();
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "おれはもう「マンモーニ」じゃねえッ！";
                comments_row2 = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
        
                DSPLAY(audio_id = 142);
                var_1299 = 9;
                var_271 = 1;
                var_1297 = 1;
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                    var_1297++;
                }
                var_271 = 0;
                var_1297 = 0;
                var_568 = var_948[current_level];
                yield func681();
                var_2201 = 0;
                item_message1 = "ディアボロはレベルが上がった！";
                item_message2 = "";
                return;
            }
        }
        // No = 587 吉良吉影のdiscの効果
        if (belongings_item_list == 587) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            var_2206 = 1;
            var_2207 = 0;
            for (let cnt2 = 0; cnt2 < var_224; ++cnt2) {
                if (var_233[var_2206].Var15 == 2) {
                    var_233[var_2206].Var15 = 0;
                    var_2207 = 1;
                }
                var_2206 = var_2206 + 1;
            }
            if (var_2207 == 0) {
                var_474 = 0;
                for (let cnt3 = 0; cnt3 < 50; ++cnt3) {
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
                yield func340(); // キー入力による選択処理
                yield func094();
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "何かのｱｲﾃﾑが爆弾になったかも…";
                comments_row2a = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func050();
                yield func340(); // キー入力による選択処理
                item_message1 = "う～む　どうだったかな……？";
                item_message2 = "自信がない…";
            }
            return;
        }
        // No = 588 J・ガイルのdiscの効果
        if (belongings_item_list == 588) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "Ｊガイルの気分になって大声で叫んだ。";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            var_2208 = rnd(3);
            enemy_list = var_1034;
            if (enemy_list == 0) {
                enemy_list = 5;
            }
            yield func626();
            var_2209 = enemy_name;
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            if (var_2208 == 0) {
                comments_row1a = "「" + var_2209 + "は";
                comments_row2a = "　おまえらのために死んだ」";
            }
            if (var_2208 == 1) {
                comments_row1a = "「青春を犠牲にして俺を追い続けたのに";
                comments_row2a = "　途中で挫折するとは」";
            }
            if (var_2208 == 2) {
                comments_row1a = "「お前らの仲間にあの世であったら";
                comments_row2a = "　聞かせてもらうといい…」";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            yield func094();
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            if (var_2208 == 0) {
                comments_row1a = "「おまえらが いなけりゃ";
                comments_row2a = "　死ななかったかもなぁ！」";
            }
            if (var_2208 == 1) {
                comments_row1a = "「なんとつまらない・・・";
                comments_row2a = "　さびしい人生よ！！！」";
            }
            if (var_2208 == 2) {
                comments_row1a = "「どーやってオレに";
                comments_row2a = "　殺してもらったかをなぁああ～ッ！」";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "全ての敵が目を覚ました！";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            var_2210 = 1;
            for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
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
        // No = 589 プロシュート兄貴のdiscの効果
        if (belongings_item_list == 589) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            var_1073 = rnd(2);
            if (var_1073 == 0) {
                comments_row1 = "「ブッ殺す」と心の中で思ったならッ！";
                comments_row2 = "スデに行動は終わっているんだッ！";
            }
            if (var_1073 == 1) {
                comments_row1 = "いったん食らい付いたら決して…";
                comments_row2 = "スタンド能力を解除したりはしねえッ！";
            }
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
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
            var_172 = 1;
            return;
        }
        // No = 715 アイテム「点滴」を使用した時の効果
        if (belongings_item_list == 715) {
            var_271 = 1;
            var_1242 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
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
                item_message1 = "「栄養補給させてもらったぜ！」";
            }
            if (var_2211 == 1) {
                item_message1 = "最大満腹度が" + var_567 + "になった。";
            }
            return;
        }
        // No = 600 アイテム「ピッツァ」を使用した時の効果
        if (belongings_item_list == 600) {
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
                item_message1 = "お腹がいっぱいになった。";
            }
            if (var_2211 == 1) {
                item_message1 = "最大満腹度が" + var_567 + "になった。";
            }
            return;
        }
        // No = 602 アイテム「ネアポリスのピッツァ」を使用した時の効果
        if (belongings_item_list == 602) {
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
                item_message1 = "お腹がいっぱいになった。";
            }
            if (var_2211 == 1) {
                item_message1 = "最大満腹度が" + var_567 + "になった。";
            }
            return;
        }
        // No = 603 腐ったピッツァ、No = 644 猫バーガー、No = 645 猫ステーキ、No = 646 猫ジュース を使用した時の効果
        if (belongings_item_list == 603 || belongings_item_list == 644 || belongings_item_list == 645 || belongings_item_list == 646) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (sympathy_id != 120 && sympathy_id != 124) {
                var_2212 = rnd(5);
                if (current_level == 1 && var_2212 == 4) {
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
            
                    DSPLAY(audio_id = 164);
                }
                if (var_2212 == 4) {
            
                    DSPLAY(audio_id = 151);
                }
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_389 = 0;
                var_360 = 0;
                var_350 = var_350 + 20;
                if (var_350 > var_567) {
                    var_350 = var_567;
                }
                if (var_2212 == 0) {
                    var_211 = 1;
                    item_message1 = "グエッ！";
                    item_message2 = "ひどいダメージを受けた！";
                }
                if (var_2212 == 1) {
                    var_565 = var_565 - 3;
                    if (var_565 < 0) {
                        var_565 = 0;
                    }
                    item_message1 = "グエッ！";
                    item_message2 = "精神力が下がってしまった！";
                }
                if (var_2212 == 2) {
                    var_566 = var_566 - 1;
                    if (var_566 < 0) {
                        var_566 = 0;
                    }
                    if (var_565 > var_566) {
                        var_565 = var_566;
                    }
                    item_message1 = "グエエエエッ！";
                    item_message2 = "最大精神力が下がってしまった！";
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
                    item_message1 = "グエエエエッ！";
                    item_message2 = "最大HPが下がってしまった！";
                }
                if (var_2212 == 4) {
                    current_level = current_level - 1;
                    var_352 = var_352 - 3;
                    var_211 = var_211 - 3;
                    if (current_level < 1) {
                        current_level = 1;
                    }
                    if (var_352 <= 1) {
                        var_352 = 1;
                    }
                    if (var_211 <= 1) {
                        var_211 = 1;
                    }
                    var_568 = var_948[current_level] - 1;
                    item_message1 = "グエエエエｴｴｴッ！";
                    item_message2 = "レベルが下がってしまった！";
                }
            }
            if (sympathy_id == 120 || sympathy_id == 124) {
                var_1214 = 0;
                item_message1 = "「ンまァア～～い！」";
                item_message2 = "";
                var_360 = 0;
                var_350 = var_350 + 20;
                if (var_350 > var_567) {
                    var_350 = var_567;
                }
            }
            return;
        }
        // No = 604 アイテム「ポルポのピッツァ」を使用した時の効果
        if (belongings_item_list == 604) {
            var_360 = 0;
            var_567 = var_567 + 10;
            if (var_567 > 999) {
                var_567 = 999;
            }
            var_350 = var_567;
            item_message1 = "最大満腹度が" + var_567 + "になった。";
            if (equip_disc[396] == 0) {
                if (var_157 == 0) {
                    var_133 = 1;
                    var_397 = 0;
                }
                if (var_157 != 0) {
                    var_157 = 0;
                    var_158 = 0;
                }
                item_message2 = "お腹がいっぱいで動きが重い…";
        
                DSPLAY(audio_id = 162);
            }
            return;
        }
        // No = 605  アイテム「焦げたピッツァ」を使用した時の効果
        if (belongings_item_list == 605) {
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
                item_message1 = "お腹がいっぱいになった。";
            }
            if (var_2211 == 1) {
                item_message1 = "最大満腹度が" + var_567 + "になった。";
            }
            return;
        }
        // No = 630  アイテム「娼婦風スパゲッティ」を使用した時の効果
        if (belongings_item_list == 630) {
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
        // No = 631 アイテム「モッツァレラチーズとトマトのサラダ」を使用した時の効果
        if (belongings_item_list == 631) {
            var_360 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            if (var_565 == var_566) {
                item_message1 = "お腹が膨れた";
            }
            var_565 = var_566;
            var_350 = var_350 + 10;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            return;
        }
        // No = 632 アイテム「キリマンジャロの雪解け水」を使用した時の効果
        if (belongings_item_list == 632) {
            var_360 = 0;
            var_350 = var_350 + 10;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            var_1214 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                var_1256 = 1;
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                var_1256 = 2;
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
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
                    item_message2 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのパワーは全開だ！";
                }
                if (var_233[var_556].Var3 <= 98) {
                    var_233[var_556].Var3 = var_233[var_556].Var3 + 5;
                    if (var_233[var_556].Var3 >= 99) {
                        var_233[var_556].Var3 = 99;
                    }
                    item_message2 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのｴﾈﾙｷﾞｰが増加した！";
                }
            }
            return;
        }
        // No = 633 アイテム「子羊背肉のリンゴソースかけ」を使用した時の効果
        if (belongings_item_list == 633) {
            var_360 = 0;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1214 = 0;
    
            DSPLAY(audio_id = 111);
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
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1579 = var_1579 + 1;
            }
            var_271 = 0;
            var_1579 = 0;
            var_1255 = 0;
            return;
        }
        // No = 634 アイテム「プリン」を使用した時の効果
        if (belongings_item_list == 634) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
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
                    item_message1 = "お腹がちょっと膨れた";
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
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "「デザートはプリン～～～？";
                comments_row2a = "ケッ！　おれは不良だよ…！」";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func050();
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "「プリンなんて女子供の食う物なんて";
                comments_row2a = "チャンチャラおかしくて…」";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func050();
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "「ンまぁ～～い！」";
                comments_row2a = "";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                yield func050();
                var_1214 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    var_1256 = 1;
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                    var_1256 = 2;
                    yield func337(); // メッセージ関係呼び出し
                    yield func337(); // メッセージ関係呼び出し
                }
                var_1256 = 0;
                item_message1 = "このフロアでお腹が減らなくなった！";
                var_193 = 1;
                return;
            }
            return;
        }
        // No = 635 アイテム「焦げた料理」を使用した時の効果
        if (belongings_item_list == 635) {
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
                item_message1 = "お腹がいっぱいになった。";
            }
            return;
        }
        // No = 636 アイテム「サンドイッチ」を使用した時の効果
        if (belongings_item_list == 636) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「ピクニックに来ている気分だね…」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
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
        // No = 639 アイテム「カエルの丸焼き」を使用した時の効果
        if (belongings_item_list == 639) {
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
                item_message1 = "お腹がいっぱいになった。";
            }
            return;
        }
        // No = 640 アイテム「焦げた食べ物」を使用した時の効果
        if (belongings_item_list == 640) {
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
                item_message1 = "お腹がいっぱいになった。";
            }
            return;
        }
        // No = 641 アイテム「消し炭」を使用した時の効果
        if (belongings_item_list == 641) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1214 = 0;
            var_389 = 2;
    
            DSPLAY(audio_id = 164);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
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
        // No = 647 アイテム「オレンジ」を使用した時の効果
        if (belongings_item_list == 647) {
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
                item_message1 = "お腹がいっぱいになった。";
            }
            return;
        }
        // No = 648 アイテム「鎌倉カスター」を使用した時の効果
        if (belongings_item_list == 648) {
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
                item_message1 = "お腹がいっぱいになった。";
            }
            return;
        }
        // No = 650 アイテム「カエル」を使用した時の効果
        if (belongings_item_list == 650) {
            var_360 = 0;
            if (var_211 == var_352) {
                var_352 = var_352 + 1;
                item_message1 = "最大HPが１あがった！";
                if (var_352 > 999) {
                    var_352 = 999;
                    item_message1 = "最大HPは限界まで達した！";
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
        // No = 651 アイテム「大きいカエル」を使用した時の効果
        if (belongings_item_list == 651) {
            var_360 = 0;
            if (var_211 == var_352) {
                var_352 = var_352 + 2;
                item_message1 = "最大HPが２あがった！";
                if (var_352 > 999) {
                    var_352 = 999;
                    item_message1 = "最大HPは限界まで達した！";
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
        // No = 652 アイテム「カエルの死体」を使用した時の効果
        if (belongings_item_list == 652) {
            var_360 = 0;
            if (var_211 == var_352) {
                var_352 = var_352 + 1;
                item_message1 = "最大HPが１あがった！";
                if (var_352 > 999) {
                    var_352 = 999;
                    item_message1 = "最大HPは限界まで達した！";
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
        // No = 653 アイテム「超巨大なカエル」を使用した時の効果
        if (belongings_item_list == 653) {
            var_360 = 0;
            if (var_211 == var_352) {
                var_352 = var_352 + 5;
                item_message1 = "最大HPが５あがった！";
                if (var_352 > 999) {
                    var_352 = 999;
                    item_message1 = "最大HPは限界まで達した！";
                }
            }
            var_211 = var_352;
            var_350 = var_350 + 20;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            return;
        }
        // No = 654 アイテム「ヤドクガエル」を使用した時の効果
        if (belongings_item_list == 654) {
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
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
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
            var_199 = var_1940;
            return;
        }
        // No = 655 アイテム「ザリガニ」を使用した時の効果
        if (belongings_item_list == 655) {
            var_360 = 0;
            if (var_211 == var_352) {
                var_352 = var_352 + 1;
                item_message1 = "最大HPが１あがった！";
                if (var_352 > 999) {
                    var_352 = 999;
                    item_message1 = "最大HPは限界まで達した！";
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
        if (belongings_item_list == 701) {
            if (var_77[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_73[var_66][var_67] != 0) {
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "足元のものが邪魔で";
                comments_row2 = "うまく使えなかった。";
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
            var_81[var_337][6] = disc_rarity;
            enemy_list = disc_rarity;
            yield func626();
            var_2213 = enemy_name;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "" + var_2213 + "を";
            comments_row2 = "地面に出して人質にした！";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "この上にいれば";
            comments_row2a = "" + var_2213 + "から攻撃されないぞ";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            yield func047();
            return;
        }
        if (belongings_item_list == 9999) {
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
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ペラペラに空気を入れた。";
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_71[var_2102][var_2103] == 0 || var_71[var_2102][var_2103] == 13 || var_82[var_2102][var_2103] != 0) {
                var_2108 = 0;
            }
            if (var_71[var_2102][var_2103] != 0 && var_71[var_2102][var_2103] != 13 && var_82[var_2102][var_2103] == 0) {
                var_2108 = 1;
            }
            if (var_2108 == 0) {
                var_2214 = disc_rarity;
                var_1845 = 1;
                yield func556();
                var_2214 = 0;
                var_1845 = 0;
                if (var_2110 == 1) {
                    var_2107 = 1;
                    var_199 = var_2111;
                }
                if (var_2110 == 0) {
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "十分なスペースがないため";
                    comments_row2a = "うまくいかなかった…";
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
                var_2214 = disc_rarity;
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
        
                DSPLAY(audio_id = 168);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                    var_198 = 1;
                    var_300 = 0;
                    var_1583++;
                }
                var_271 = 0;
                var_1583 = 0;
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (belongings_item_list == 712) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_211 = var_352;
            var_126 = 1;
    
            DSPLAY(audio_id = 134);
            return;
        }
        if (belongings_item_list == 713) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_2215 = 1;
            var_1845 = 1;
            yield func556();
            var_2215 = 0;
            var_1845 = 0;
            for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (belongings_item_list == 714) {
            var_2216 = var_199;
            var_199 = 2;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "そして　くらえッ！";
            comments_row2 = "新しい対吸血鬼兵器！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            DSPLAY(audio_id = 174);
            var_1245 = 1;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1245 = 2;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1245 = 3;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1245 = 4;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1245 = 7;
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "紫外線照射装置ィィィィィィィィィィ！！";
            comments_row2a = "";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
    
            DSPLAY(audio_id = 176);
            var_1245 = 6;
            gsel(19);
            color(254, 254, 254);
            boxf(left = 0, top1 = 0, right = 680, bottom = 680);
            gsel(0);
            var_529 = 2;
            var_403 = "スカッとするぜーッ！！";
            var_2217 = 1;
            var_2194 = 1;
            var_2196 = 3;
            var_2195 = 1;
            for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
                var_2218 = 999;
                var_2219 = 0;
                if (var_2194 != var_124) {
                    var_2220 = 0;
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
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
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
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
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_71[var_2223][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_71[var_2224][var_2222] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_71[var_2221][var_2225] == var_201) {
                            var_402 = var_2194;
                            var_209 = var_2218;
                            yield func516();
                            yield func705();
                            for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                                yield func337(); // メッセージ関係呼び出し
                            }
                            var_2220 = 1;
                        }
                        if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_71[var_2221][var_2226] == var_201) {
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
            if (var_2220 == 0) {
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
            }
            var_2196 = 0;
            var_2195 = 0;
            var_529 = 0;
            var_2217 = 0;
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1245 = 5;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1245 = 4;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1245 = 3;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1245 = 2;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1245 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_199 = var_2216;
            if (var_2220 == 1) {
                item_message1 = "スカッとするぜーッ！！";
            }
            return;
        }
        if (belongings_item_list == 724) {
            var_1251 = 1;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「俺は人間をやめるぞォ――！」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            var_1251 = 2;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1251 = 4;
            var_1940 = var_199;
            var_199 = 2;
            var_271 = 1;
            var_1411 = 1;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
        
                DSPLAY(audio_id = 111);
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
                var_1411++;
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
                var_1411++;
            }
            for (let cnt2 = 0; cnt2 < 17; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
                var_1411++;
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
                var_1411++;
            }
            var_1411 = 0;
            var_271 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_198 = 1;
            var_300 = 0;
            var_130 = 1;
            item_message1 = "吸血鬼体質になった！";
            var_1251 = 0;
            if (var_125 != 0) {
                var_389 = 2;
                var_134 = 1;
                var_211 = 1;
                var_747 = 1;

                DSPLAY(audio_id = 105);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "吸血鬼体質で波紋呼吸をしてしまった！";
                comments_row2a = "";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                item_message1 = "酷いダメージを受けて回復しない！";
                yield func047();
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    yield func337(); // メッセージ関係呼び出し
                }
                var_389 = 0;
            }
            var_199 = var_1940;
            return;
        }
        if (belongings_item_list == 728) {
            var_1251 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1251 = 6;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1251 = 8;
            var_1940 = var_199;
            var_199 = 2;
            var_271 = 1;
            var_1411 = 1;
            var_1413 = 1;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
        
                DSPLAY(audio_id = 111);
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
                var_1411++;
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
                var_1411++;
            }
            for (let cnt2 = 0; cnt2 < 17; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
                var_1411++;
                yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
                var_1411++;
            }
            var_1411 = 0;
            var_1413 = 0;
            var_271 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_198 = 1;
            var_300 = 0;
            var_182 = 1;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「究極の生命体ﾃﾞｨｱﾎﾞﾛの誕生だッーっ」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
            var_1251 = 0;
            var_199 = var_1940;
            return;
        }
        if (belongings_item_list == 726) {
    
            DSPLAY(audio_id = 182);
            var_1299 = 9;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_168 = 1;
            return;
        }
        if (belongings_item_list == 727) {

            DSPLAY(audio_id = 143);
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
            return;
        }
        if (belongings_item_list == 797) {
            var_352 = 980;
            var_211 = 980;
            return;
        }
        if (belongings_item_list == 798) {
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
        if (belongings_item_list == 799) {
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
        if (belongings_item_list == 718) {
    
            DSPLAY(audio_id = 111);
            var_1257 = 1;
            var_1591 = 1;
            var_271 = 1;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1591 = var_1591 + 1;
            }
            var_1257 = 0;
            var_1591 = 0;
            var_271 = 0;
            yield func530();
            return;
        }
        if (belongings_item_list == 719) {
    
            DSPLAY(audio_id = 111);
            var_1257 = 1;
            var_1591 = 1;
            var_271 = 1;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1591 = var_1591 + 1;
            }
            var_1257 = 0;
            var_1591 = 0;
            var_271 = 0;
            var_2228 = 1;
            yield func531();
            if (var_2228 == 0) {
                item_message1 = "" + target_item_name + "に";
                item_message2 = "新たな装備効果が発現した！";
            }
            if (var_2228 == 1) {
                item_message1 = "しかしﾃﾞｨｱﾎﾞﾛは";
                item_message2 = "矢に選ばれなかった…";
            }
            return;
        }
        if (belongings_item_list == 720) {
            var_163 = 1;
            var_164 = 1;
            var_153 = 0;
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
            var_1952 = 1;
            return;
        }
        if (belongings_item_list == 722) {
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「シーザーは今・・・　さっき」";
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
            comments_row1a = "「ここで死んだ」";
            comments_row2a = "";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
    
            DSPLAY(audio_id = 134);
            var_126 = 1;
            var_166 = 0;
            return;
        }
        if (belongings_item_list == 716) {
            if (dangeon_number != 4) {
                comments_row1 = "";
                comments_row2 = "";
                var_295 = "";
                comments_row1a = "";
                comments_row2a = "";
                var_298 = "";
                var_299 = 0;
                comments_row1 = "しかしここでは何も起こらなかった…";
                var_198 = 1;
                var_300 = 0;
                var_25_x = var_25[1];
                var_26_x = var_26[1];
                var_27_x = var_27[1];
                yield func047();
                return;
            }
            var_70 = 99;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "遠くから声が聞こえる…";
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
            comments_row1a = "「ここに泥棒がいると";
            comments_row2a = "　電話がかかったですって…？」";
            yield func050();
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
            comments_row1a = "「ハハハ…";
            comments_row2a = "　きっとイタズラ電話でしょう」";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (belongings_item_list == 723) {
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            if (var_262 == 1) {
                item_message1 = "しかし何も起こらなかった…";
                return;
            }
            var_1055 = 1;
            return;
        }
        if (belongings_item_list == 729) {
            var_2229 = rnd(5);
            var_2229 = var_2229 + 1;
            var_2229 = var_2229 * 1000;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "財布の中には" + var_2229 + "G入っていた！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
    
            DSPLAY(audio_id = 207);
            wallet = wallet + var_2229;
            if (wallet > 999999) {
                wallet = 999999;
            }
            return;
        }
        if (belongings_item_list == 730) {
            var_2229 = disc_rarity;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "カバンの中には" + var_2229 + "G入っていた！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
    
            DSPLAY(audio_id = 207);
            wallet = wallet + var_2229;
            if (wallet > 999999) {
                wallet = 999999;
            }
            return;
        }
        if (belongings_item_list == 731) {
            var_2230 = rnd(5);
            var_2229 = disc_rarity;
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "財布の中には" + var_2229 + "G入っていた！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            if (var_2230 != 0) {
        
                DSPLAY(audio_id = 207);
                wallet = wallet + var_2229;
                if (wallet > 999999) {
                    wallet = 999999;
                }
            }
            if (var_2230 == 0) {
                yield func340(); // キー入力による選択処理
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "……と思ったら、はしっこのとこだけ";
                comments_row2a = "やぶかれたお金だった！";
                yield func050();
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
                comments_row1a = "「やっ！　野郎ッ！」";
                comments_row2a = "";
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
        if (belongings_item_list == 900) {

            DSPLAY(audio_id = 118);
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            item_message1 = "チェッ！";
            item_message2 = "やっぱりセナは速ェや…";
            return;
        }
        if (belongings_item_list >= 901 && belongings_item_list <= 905) {

            DSPLAY(audio_id = 118);
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1252 = 3;
            var_1299 = 10;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_566 = var_566 + 1;
            var_565 = var_565 + 1;
            if (var_566 > 99) {
                var_566 = 99;
                var_565 = 99;
                item_message1 = "精神力は限界まで達した！";
            }
            return;
        }
        if (belongings_item_list >= 906 && belongings_item_list <= 911) {

            DSPLAY(audio_id = 118);
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1252 = 3;
            DSPLAY(audio_id = 209);
            var_1299 = 10;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_352 = var_352 + 5;
            var_211 = var_211 + 5;
            if (var_352 >= 999) {
                var_352 = 999;
                var_211 = 999;
                item_message1 = "最大HPは限界まで達した！";
            }
            return;
        }
        if (belongings_item_list >= 912 && belongings_item_list <= 928) {
            var_1950 = 3;
            return;
        }
        if (belongings_item_list >= 929 && belongings_item_list <= 947) {
            var_1950 = 4;
            return;
        }
        if (belongings_item_list >= 948 && belongings_item_list <= 963) {
            var_1950 = 5;
            return;
        }
        if (belongings_item_list >= 948 && belongings_item_list <= 980) {
            var_1950 = 6;
            return;
        }
        if (belongings_item_list >= 981 && belongings_item_list <= 986) {
            var_1950 = 7;
            return;
        }
        if (belongings_item_list >= 750 && belongings_item_list <= 770) {
            var_1950 = 7;
            return;
        }
        if (belongings_item_list == 987) {

            DSPLAY(audio_id = 118);
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1252 = 3;
            DSPLAY(audio_id = 209);
            var_1299 = 10;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_352 = var_352 + 10;
            var_211 = var_211 + 10;
            if (var_352 > 999) {
                var_352 = 999;
                item_message1 = "最大HPは限界まで達した！";
            }
            if (var_211 > var_352) {
                var_211 = var_352;
            }
            return;
        }
        if (belongings_item_list == 988) {

            DSPLAY(audio_id = 118);
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1252 = 3;
            var_1299 = 10;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_352 = var_352 + 10;
            var_211 = var_211 + 10;
            if (var_352 > 999) {
                var_352 = 999;
                item_message1 = "最大HPは限界まで達した！";
            }
            if (var_211 > var_352) {
                var_211 = var_352;
            }
            return;
        }
        if (belongings_item_list == 989) {

            DSPLAY(audio_id = 118);
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1252 = 3;
            DSPLAY(audio_id = 209);
            var_1299 = 10;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_566 = var_566 + 5;
            var_565 = var_565 + 5;
            if (var_566 > 99) {
                var_566 = 99;
                var_565 = 99;
                item_message1 = "精神力は限界まで達した！";
            }
            return;
        }
        if (belongings_item_list == 990) {

            DSPLAY(audio_id = 118);
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1252 = 3;
    
            DSPLAY(audio_id = 182);
            var_1299 = 3;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_105 = 1;
            var_111 = 1;
            var_104 = 1;
            return;
        }
        if (belongings_item_list == 991) {

            DSPLAY(audio_id = 118);
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1252 = 3;
    
            DSPLAY(audio_id = 142);
            var_1299 = 9;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            if (current_level >= 99) {
                item_message1 = "これ以上成長できなかった…";
                return;
            }
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                if (current_level <= 98) {
                    var_568 = var_948[current_level];
                    yield func681();
                    var_2201 = 0;
                }
            }
            return;
        }
        if (belongings_item_list == 992) {

            DSPLAY(audio_id = 118);
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1252 = 3;
    
            DSPLAY(audio_id = 142);
            var_1299 = 9;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            if (current_level >= 99) {
                item_message1 = "これ以上成長できなかった…";
                return;
            }
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                if (current_level <= 98) {
                    var_568 = var_948[current_level];
                    yield func681();
                    var_2201 = 0;
                }
            }
            return;
        }
        if (belongings_item_list == 993) {
            var_1950 = 20;
            return;
        }
        if (belongings_item_list == 994) {
            var_1950 = 20;
            return;
        }
        if (belongings_item_list == 995) {
            var_1252 = 0;
            var_1253 = 995;
            var_1254 = 1;
            yield func094();
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「ﾋﾟﾝｸﾀﾞｰｸの少年」を目の前にかざした。";
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
            comments_row1a = "『天国の扉』によって…";
            comments_row2a = "心の扉は開かれる";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[1];
            var_26_x = var_26[1];
            var_27_x = var_27[1];
            yield func047();
            yield func340(); // キー入力による選択処理
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
                    var_1949 = 1;
                    return;
                }
                if (var_2232 == 2) {
            
                    DSPLAY(audio_id = 161);
                    var_1324 = (var_83[var_2231].Var1 - var_66 + 4) * 40;
                    var_1325 = (var_83[var_2231].Var2 - var_67 + 4) * 40 - 10;
                    var_271 = 1;
                    var_1323 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                        var_1323++;
                    }
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        yield func337(); // メッセージ関係呼び出し
                        var_1323++;
                    }
                    var_271 = 0;
                    var_1323 = 0;
                    comments_row1 = comments_row1a;
                    comments_row2 = comments_row2a;
                    comments_row1a = "見えてなくて効かなかった…";
                    comments_row2a = "";
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
        if (belongings_item_list == 9999) {

            DSPLAY(audio_id = 118);
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1252 = 3;
    
            DSPLAY(audio_id = 142);
            var_1299 = 9;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            if (current_level >= 99) {
                item_message1 = "これ以上成長できなかった…";
                return;
            }
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                if (current_level <= 98) {
                    var_568 = var_948[current_level];
                    yield func681();
                    var_2201 = 0;
                }
            }
            return;
        }
        if (belongings_item_list == 996) {

            DSPLAY(audio_id = 118);
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1252 = 3;
    
            DSPLAY(audio_id = 142);
            var_1299 = 9;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            if (current_level >= 99) {
                item_message1 = "これ以上成長できなかった…";
                return;
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                if (current_level <= 98) {
                    var_568 = var_948[current_level];
                    yield func681();
                    var_2201 = 0;
                }
            }
            return;
        }
        if (belongings_item_list == 997) {
            return;
        }
        if (belongings_item_list == 998) {
            return;
        }
        if (belongings_item_list == 999) {
            return;
        }
        return;
    });
}

function func499(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(499);
        var_114 = 0;
        var_463 = 0;
        var_464 = 0;
        var_461 = 0;
        var_462 = 0;
        if (var_216 == 1) {
            var_374 = 1;
            var_774 = 160;
            var_1576 = 1;
            var_271 = 1;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_774 = var_774 - 20;
            }
            var_271 = 0;
            var_1576 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_374 = 0;
            var_216 = 0;
        }
        var_2235 = var_66;
        var_2236 = var_67;
        var_2237 = 0;
        var_65[var_66][var_67] = 0;
        for (let cnt1 = 0; cnt1 < 500; ++cnt1) {
            var_491 = rnd(var_33);
            var_492 = rnd(var_34);
            if (var_71[var_491][var_492] != 0 && var_71[var_491][var_492] <= 12 && var_82[var_491][var_492] == 0 && var_71[var_491][var_492] != var_201) {
                var_2237 = 1;
                break;
            }
        }
        if (var_2237 == 0) {
            for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
                var_491 = rnd(var_33);
                var_492 = rnd(var_34);
                if (var_491 == var_2235 && var_492 == var_2236) {
                    continue;
                }
                if (var_71[var_491][var_492] != 0 && var_71[var_491][var_492] <= 12 && var_82[var_491][var_492] == 0) {
                    var_2237 = 1;
                    break;
                }
            }
        }
        if (var_2237 == 0) {
            for (let cnt2 = 0; cnt2 < 10000; ++cnt2) {
                var_491 = rnd(var_33);
                var_492 = rnd(var_34);
                if (var_491 == var_2235 && var_492 == var_2236) {
                    continue;
                }
                if (var_71[var_491][var_492] != 0 && var_71[var_491][var_492] != 13 && var_82[var_491][var_492] == 0) {
                    var_2237 = 1;
                    break;
                }
            }
        }
        if (var_2112 == 0) {
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                var_374 = 1;
                yield func337(); // メッセージ関係呼び出し
                var_374 = 0;
                yield func337(); // メッセージ関係呼び出し
            }
        }
        if (var_2237 == 0) {
            var_66 = var_236;
            var_67 = var_237;
        }
        if (var_2237 == 1) {
            var_66 = var_491;
            var_67 = var_492;
        }
        var_289 = var_66 - 1;
        var_290 = var_66 + 1;
        var_291 = var_67 + 1;
        var_292 = var_67 - 1;
        var_201 = 13;
        if (var_71[var_289][var_67] != 13 && var_71[var_289][var_67] != 0 && var_71[var_289][var_67] != 14) {
            var_201 = var_71[var_289][var_67];
        }
        if (var_71[var_290][var_67] != 13 && var_71[var_290][var_67] != 0 && var_71[var_290][var_67] != 14) {
            var_201 = var_71[var_290][var_67];
        }
        if (var_71[var_66][var_291] != 13 && var_71[var_66][var_291] != 0 && var_71[var_66][var_291] != 14) {
            var_201 = var_71[var_66][var_291];
        }
        if (var_71[var_66][var_292] != 13 && var_71[var_66][var_292] != 0 && var_71[var_66][var_292] != 14) {
            var_201 = var_71[var_66][var_292];
        }
        yield func016();
        yield func017();
        yield func018();
        if (var_200 == var_201 && var_94 != 8) {
            var_98 = 1;
        }
        if (var_202 == var_201 && var_94 != 8) {
            var_99 = 1;
        }
        if (var_2112 == 0) {
            var_374 = 1;
            var_774 = 0;
            var_1578 = 1;
            var_271 = 1;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
                var_774 = var_774 + 20;
            }

            DSPLAY(audio_id = 217);
            var_1578 = 0;
            var_271 = 0;
            var_374 = 0;
            var_199 = 2;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_2238 = 1;
        for (let cnt1 = 0; cnt1 < var_97; ++cnt1) {
            var_83[var_2238].Var9 = 0;
            var_83[var_2238].Var18 = 0;
            var_2238 = var_2238 + 1;
        }
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        if (var_2112 == 1) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_2112 = 0;
        if (var_96 >= 1 && var_201 == var_204) {
            var_240 = 0;
            yield func074();
        }
        if (var_72[var_236][var_237] >= 1 && var_72[var_66][var_67] == 0 && var_85 == 0) {
            yield func722();
        }
        if (var_72[var_236][var_237] == 0 && var_72[var_66][var_67] >= 1 && var_85 == 0 && var_210 == 0) {
            if (var_66 != var_236 || var_67 != var_237) {
                var_240 = 0;
                yield func706();
            }
        }
        var_383 = 1;
        return;
    });
}
