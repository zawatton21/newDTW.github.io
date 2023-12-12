import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func441(this: any) {
        Adap.dbgprt(441);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        if (Gvar.var_225 == Gvar.var_1967 && Gvar.var_1965 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "それは今使っているDISCです。";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.var_1945 = 0;
        Gvar.var_1966 = Gvar.var_225;
        Gvar.var_1354 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1249 = Gvar.var_233[Gvar.var_225].Var13;
        Gvar.var_1973 = 0;
        Gvar.var_1974 = 0;
        if (Gvar.var_225 == 0) {
            Gvar.var_1973 = 1;
        }
        if (Gvar.var_1965 == 1) {
            Gvar.var_1974 = 1;
        }
        Gvar.var_225 = Gvar.var_1967;
        await Func.func437();
        Gvar.var_225 = Gvar.var_1966;
        if (Gvar.var_862[590][0] == 0 && Gvar.var_375 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "なんと" + Gvar.var_1938 + "は";
            Gvar.var_862[590][0] = 1;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.comments_row2 = "ｷﾞｱｯﾁｮのDISCだった！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
        }
        Gvar.var_1940 = Gvar.var_199;
        Gvar.var_199 = 2;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_1073 = Adap.rnd(4);
        if (Gvar.var_1073 == 0) {
            Gvar.comments_row1 = "「どういう事だ！";
            Gvar.comments_row2 = "　どういう事だよッ！　クソッ！」";
        }
        if (Gvar.var_1073 == 1) {
            Gvar.comments_row1 = "「なめてんのかァ――ッ　このオレをッ！";
            Gvar.comments_row2 = "　クソッ！　クソッ！」";
        }
        if (Gvar.var_1073 == 2) {
            Gvar.comments_row1 = "「ナメやがって　この言葉ァ";
            Gvar.comments_row2 = "　超イラつくぜぇ～～～ッ！！」";
        }
        if (Gvar.var_1073 == 3) {
            Gvar.comments_row1 = "「チクショオ――　ムカつくんだよ！";
            Gvar.comments_row2 = "　コケにしやがって！ボケがッ！」";
        }
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        if (Gvar.var_1973 == 1 && Gvar.equip_disc[119] == 0) {
            Gvar.var_77[Gvar.var_66][Gvar.var_67] = 0;
        }
        Gvar.var_271 = 1;
        Gvar.var_1353 = 1;
        Gvar.var_1244 = 1;
        Gvar.var_1975 = 1;
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            Adap.DSPLAY(103); // 殴られた時の効果音
            Gvar.var_1353 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1353 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_1975++;
        }
        Gvar.var_1975 = 0;
        Gvar.var_1353 = 0;
        Gvar.var_271 = 0;
        Gvar.var_1244 = 0;
        if (Gvar.equip_disc[119] == 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "やわらかくなっていて壊れなかった。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_199 = Gvar.var_1940;
            Gvar.var_1973 = 0;
            Gvar.var_1974 = 0;
            await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        Gvar.var_488 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_225 = Gvar.var_1966;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_225].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_1976 = Gvar.item_name;
        if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
            Gvar.var_106 = 1;
            Gvar.var_482 = 0;
            Gvar.var_482 = (Gvar.var_233[Gvar.var_225].Var3 + Gvar.var_233[Gvar.var_225].Var4) * 50;
            if (Gvar.var_233[Gvar.var_225].Var0 != 800) {
                Gvar.var_482 = Gvar.var_233[Gvar.var_225].Var7 * 100 + Gvar.var_482;
            }
            if (Gvar.var_233[Gvar.var_225].Var19 > 1) {
                Gvar.var_482 = Gvar.var_233[Gvar.var_225].Var19 * 500 + Gvar.var_482;
            }
            Gvar.var_1925 = Gvar.buying_price + Gvar.var_482;
            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.var_1925;
        }
        if (Gvar.var_1973 == 0) {
            if (Gvar.var_233[Gvar.var_225].Var0 >= 800 && Gvar.var_233[Gvar.var_225].Var0 < 900) {
                Gvar.var_455 = Gvar.var_66;
                Gvar.var_456 = Gvar.var_67;
                Gvar.var_448 = Gvar.var_66;
                Gvar.var_450 = Gvar.var_67;
                Gvar.var_1903 = 1;
                await Func.func414(); // ヤバいもの関係の容量設定？？
                Gvar.var_1903 = 0;
            }
            await Func.func426();
            await Func.func427();
            await Func.func428();
            if (Gvar.var_225 == Gvar.var_553) {
                Gvar.var_896 = 0;
            }
            if (Gvar.var_225 == Gvar.var_554) {
                Gvar.var_897 = 0;
            }
            if (Gvar.var_225 == Gvar.var_555) {
                Gvar.var_898 = 0;
            }
            Gvar.var_1977 = 0;
            if (Gvar.var_476[Gvar.var_225] == 1) {
                Gvar.var_476[Gvar.var_225] = 0;
                Gvar.kougeki_disc_id  = 0;
                Gvar.var_580 = Gvar.var_580 - Gvar.var_894;
                Gvar.var_894 = 0;
                await Func.func494();
                Gvar.var_1977 = 1;
            }
            if (Gvar.var_477[Gvar.var_225] == 1) {
                Gvar.var_477[Gvar.var_225] = 0;
                Gvar.bougyo_disc_id = 0;
                Gvar.var_581 = Gvar.var_581 - Gvar.var_895;
                Gvar.var_895 = 0;
                await Func.func494();
                Gvar.var_1977 = 1;
            }
            if (Gvar.var_479[Gvar.var_225] == 1) {
                Gvar.var_479[Gvar.var_225] = 0;
                Gvar.shageki_disc_id = 0;
                Gvar.var_250 = 0;
                Gvar.var_1977 = 1;
            }
            if (Gvar.var_478[Gvar.var_225] == 1) {
                Gvar.var_478[Gvar.var_225] = 0;
                Gvar.nouryoku_disc_id = 0;
                await Func.func494();
                Gvar.var_1977 = 1;
            }
            if (Gvar.var_1977 == 1) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                await Func.func106(); // BGM選曲呼び出し割り振り
            }
            await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        }
        if (Gvar.var_1973 == 1) {
            if (Gvar.var_233[Gvar.var_225].Var0 >= 800 && Gvar.var_233[Gvar.var_225].Var0 < 900) {
                Gvar.var_455 = Gvar.var_66;
                Gvar.var_456 = Gvar.var_67;
                Gvar.var_448 = Gvar.var_66;
                Gvar.var_450 = Gvar.var_67;
                Gvar.var_1903 = 1;
                await Func.func414(); // ヤバいもの関係の容量設定？？
                Gvar.var_1903 = 0;
            }
            Gvar.var_1978 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
            Gvar.var_78[Gvar.var_1978].Var0 = 0;
            Gvar.var_78[Gvar.var_1978].Var1 = 0;
            Gvar.var_78[Gvar.var_1978].Var2 = 0;
            Gvar.var_77[Gvar.var_66][Gvar.var_67] = 0;
        }
        await Func.func100();
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "" + Gvar.var_1976 + "は";
        Gvar.comments_row2a = "粉々に壊れた。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_199 = Gvar.var_1940;
        Gvar.var_1973 = 0;
        Gvar.var_1974 = 0;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func441}
