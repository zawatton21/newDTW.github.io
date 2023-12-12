import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func533(this: any) {
        Adap.dbgprt(533);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        if (Gvar.var_233[Gvar.var_225].Var0 >= 800 && Gvar.var_233[Gvar.var_225].Var0 < 900 && Gvar.var_233[Gvar.var_225].Var8 != 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "中に何か入っているアイテムは";
            Gvar.comments_row2 = "送ることができない。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_2301 == 0) {
            if (Gvar.var_225 == Gvar.var_2300) {
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "それを送ることはできない。";
                Gvar.comments_row2 = "";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                await Func.func340(); // キー入力による選択処理
                await Func.func051();
                Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
                return;
            }
        }
        await Func.func426();
        await Func.func427();
        await Func.func428();
        Gvar.var_2116 = 0;
        if (Gvar.var_553 == Gvar.var_225 && Gvar.var_896 != 0) {
            Gvar.var_2116 = 1;
        }
        if (Gvar.var_554 == Gvar.var_225 && Gvar.var_897 != 0) {
            Gvar.var_2116 = 1;
        }
        if (Gvar.var_555 == Gvar.var_225 && Gvar.var_898 != 0) {
            Gvar.var_2116 = 1;
        }
        if (Gvar.var_2116 == 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "呪われていて外せない！";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.var_2007 = 0;
        if (Gvar.var_407 >= 1 && Gvar.var_2008 == 0) {
            await Func.func911();
            return;
        }
        Gvar.var_2008 = 0;
        Gvar.var_2401 = 0;
        Gvar.var_2402 = 0;
        if (Gvar.var_559 == 0 && Gvar.var_864 >= 19) {
            Gvar.var_2402 = 1;
        }
        if (Gvar.var_559 == 1 && Gvar.var_864 >= 26) {
            Gvar.var_2402 = 1;
        }
        if (Gvar.var_559 == 2 && Gvar.var_864 >= 33) {
            Gvar.var_2402 = 1;
        }
        if (Gvar.var_559 == 3 && Gvar.var_864 >= 39) {
            Gvar.var_2402 = 1;
        }
        if (Gvar.var_559 == 4 && Gvar.var_864 >= 45) {
            Gvar.var_2402 = 1;
        }
        if (Gvar.var_2402 == 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "倉庫にはもう置ける場所がないようだ";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.var_198 = 0;
            Gvar.var_300 = 0;
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        Gvar.var_449 = 21;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            Gvar.var_447 = 10;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                if (Gvar.var_863[Gvar.var_447][Gvar.var_449] == 0) {
                    Gvar.var_2403 = 0;
                    if (Gvar.var_559 <= 3) {
                        if (Gvar.var_447 == 10 && Gvar.var_449 == 21) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 10 && Gvar.var_449 == 22) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 10 && Gvar.var_449 == 23) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 10 && Gvar.var_449 == 24) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 10 && Gvar.var_449 == 25) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 10 && Gvar.var_449 == 26) {
                            Gvar.var_2403 = 1;
                        }
                    }
                    if (Gvar.var_559 <= 2) {
                        if (Gvar.var_447 == 11 && Gvar.var_449 == 21) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 11 && Gvar.var_449 == 22) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 11 && Gvar.var_449 == 23) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 11 && Gvar.var_449 == 24) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 11 && Gvar.var_449 == 25) {
                            Gvar.var_2403 = 1;
                        }
                        if (Gvar.var_447 == 11 && Gvar.var_449 == 26) {
                            Gvar.var_2403 = 1;
                        }
                    }
                    if (Gvar.var_447 == 12 && Gvar.var_449 == 21) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 13 && Gvar.var_449 == 21) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 14 && Gvar.var_449 == 21) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 15 && Gvar.var_449 == 21) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 12 && Gvar.var_449 == 22) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 13 && Gvar.var_449 == 22) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 14 && Gvar.var_449 == 22) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 15 && Gvar.var_449 == 22) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_447 == 13 && Gvar.var_449 == 23) {
                        Gvar.var_2403 = 1;
                    }
                    if (Gvar.var_2403 == 0) {
                        Gvar.var_1459 = Gvar.var_233[Gvar.var_225].Var0;
                        Gvar.var_1249 = Gvar.var_233[Gvar.var_225].Var13;
                        Gvar.var_864 = Gvar.var_864 + 1;
                        Gvar.var_863[Gvar.var_447][Gvar.var_449] = Gvar.var_864;
                        Gvar.var_866 = Gvar.var_864;
                        Gvar.var_853[Gvar.var_866][0] = Gvar.var_233[Gvar.var_225].Var0;
                        Gvar.var_853[Gvar.var_866][1] = Gvar.var_447;
                        Gvar.var_853[Gvar.var_866][2] = Gvar.var_449;
                        Gvar.var_853[Gvar.var_866][3] = Gvar.var_233[Gvar.var_225].Var3;
                        Gvar.var_853[Gvar.var_866][4] = Gvar.var_233[Gvar.var_225].Var4;
                        Gvar.var_853[Gvar.var_866][5] = Gvar.var_233[Gvar.var_225].Var5;
                        Gvar.var_853[Gvar.var_866][6] = Gvar.var_233[Gvar.var_225].Var6;
                        Gvar.var_853[Gvar.var_866][7] = Gvar.var_233[Gvar.var_225].Var7;
                        Gvar.var_853[Gvar.var_866][8] = Gvar.var_233[Gvar.var_225].Var8;
                        Gvar.var_853[Gvar.var_866][9] = Gvar.var_233[Gvar.var_225].Var9;
                        Gvar.var_853[Gvar.var_866][10] = Gvar.var_233[Gvar.var_225].Var10;
                        Gvar.var_853[Gvar.var_866][11] = 0;
                        Gvar.var_853[Gvar.var_866][12] = Gvar.var_233[Gvar.var_225].Var12;
                        Gvar.var_853[Gvar.var_866][13] = Gvar.var_233[Gvar.var_225].Var13;
                        Gvar.var_853[Gvar.var_866][14] = Gvar.var_233[Gvar.var_225].Var14;
                        Gvar.var_853[Gvar.var_866][15] = Gvar.var_233[Gvar.var_225].Var15;
                        Gvar.var_853[Gvar.var_866][16] = Gvar.var_233[Gvar.var_225].Var16;
                        Gvar.var_853[Gvar.var_866][17] = Gvar.var_233[Gvar.var_225].Var17;
                        Gvar.var_853[Gvar.var_866][18] = Gvar.var_233[Gvar.var_225].Var18;
                        Gvar.var_853[Gvar.var_866][19] = Gvar.var_233[Gvar.var_225].Var19;
                        Gvar.var_853[Gvar.var_866][20] = Gvar.var_233[Gvar.var_225].Var20;
                        Gvar.var_853[Gvar.var_866][21] = Gvar.var_233[Gvar.var_225].Var21;
                        Gvar.var_853[Gvar.var_866][22] = Gvar.var_233[Gvar.var_225].Var22;
                        Gvar.var_853[Gvar.var_866][23] = Gvar.var_233[Gvar.var_225].Var23;
                        Gvar.var_853[Gvar.var_866][24] = Gvar.var_233[Gvar.var_225].Var24;
                        Gvar.var_853[Gvar.var_866][25] = Gvar.var_233[Gvar.var_225].Var25;
                        Gvar.var_853[Gvar.var_866][26] = Gvar.var_233[Gvar.var_225].Var26;
                        Gvar.var_853[Gvar.var_866][27] = Gvar.var_233[Gvar.var_225].Var27;
                        Gvar.var_853[Gvar.var_866][28] = Gvar.var_233[Gvar.var_225].Var28;
                        Gvar.var_853[Gvar.var_866][29] = Gvar.var_233[Gvar.var_225].Var29;
                        if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
                            Gvar.var_106 = 1;
                            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                            await Func.func492(); // アイテムリスト呼び出し
                            Gvar.var_482 = 0;
                            Gvar.var_482 = (Gvar.var_233[Gvar.var_225].Var3 + Gvar.var_233[Gvar.var_225].Var4) * 50;
                            if (Gvar.var_233[Gvar.var_225].Var19 > 1) {
                                Gvar.var_482 = Gvar.var_233[Gvar.var_225].Var19 * 500 + Gvar.var_482;
                            }
                            Gvar.buying_price = Gvar.buying_price + Gvar.var_482;
                            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
                        }
                        Gvar.var_1977 = 0;
                        if (Gvar.var_553 == Gvar.var_225) {
                            Gvar.var_476 = Adap.dim(40);
                            Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
                            Gvar.var_894 = 0;
                            Gvar.kougeki_disc_id  = 0;
                            await Func.func494();
                            Gvar.var_1977 = 1;
                        }
                        if (Gvar.var_554 == Gvar.var_225) {
                            Gvar.var_477 = Adap.dim(40);
                            Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
                            Gvar.var_895 = 0;
                            Gvar.bougyo_disc_id = 0;
                            await Func.func494();
                            Gvar.var_1977 = 1;
                        }
                        if (Gvar.var_555 == Gvar.var_225) {
                            Gvar.var_478 = Adap.dim(40);
                            Gvar.nouryoku_disc_id = 0;
                            await Func.func494();
                            Gvar.var_1977 = 1;
                        }
                        if (Gvar.var_556 == Gvar.var_225) {
                            Gvar.var_479 = Adap.dim(40);
                            Gvar.shageki_disc_id = 0;
                            Gvar.var_250 = 0;
                            Gvar.var_1977 = 1;
                        }
                        if (Gvar.var_1977 == 1) {
                            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                            await Func.func106(); // BGM選曲呼び出し割り振り
                        }
                        Gvar.var_2401 = 1;
                        await Func.func430();
                        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
                        break;
                    }
                }
                Gvar.var_447 = Gvar.var_447 + 1;
            }
            if (Gvar.var_2401 == 1) {
                break;
            }
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_2401 == 1) {
            Gvar.comments_row1 = "ﾑｰﾃﾞｨｰﾌﾞﾙｰｽの手はアイテムを持って";
            Gvar.comments_row2 = "飛び去っていった。";
        }
        if (Gvar.var_2401 == 0) {
            Gvar.comments_row1 = "倉庫にはもう置ける場所がないようだ";
            Gvar.comments_row2 = "";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_198 = 0;
        Gvar.var_300 = 0;

        if (Gvar.var_2401 == 1) {
            Gvar.var_1457 = Gvar.var_66;
            Gvar.var_1458 = Gvar.var_67;
            Gvar.var_271 = 1;
            Gvar.var_1460 = 1;
            for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1460++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1460 = 0;
            if (Gvar.var_225 < Gvar.var_2300 && Gvar.var_2301 == 0) {
                Gvar.var_2300 = Gvar.var_2300 - 1;
            }
            if (Gvar.var_225 < Gvar.var_2256 && Gvar.var_2301 == 1) {
                Gvar.var_2256 = Gvar.var_2256 - 1;
            }
            Gvar.var_225 = Gvar.var_2300;
            if (Gvar.var_2301 == 1) {
                Gvar.var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            }
            if (Gvar.var_2301 == 2) {
                Gvar.var_234 = 1;
            }
            Gvar.belongings_item_list = Gvar.activated_disc_id;
            await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
            if (Gvar.var_2254 == 1) {
                Gvar.var_2254 = 0;
                await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
            }
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func533}
