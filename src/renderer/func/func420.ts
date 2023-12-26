import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Ex from '../extra_items/index'
import * as Main from '../newdtw/index'

// 各アイテムを使った際、item_listのIDに応じて効果を割り振り
async function func420(this: any) {
        Adap.dbgprt(420);
        Gvar.var_1926 = 0;
        Gvar.var_1927 = 0;
        Gvar.var_1928 = 0;
        Gvar.var_1929 = 0;
        Gvar.var_1930 = 0;
        if (Gvar.var_220 == 0 && Gvar.var_233[Gvar.var_225].Var15 == 2) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.var_1930 = 1;
        }
        if (Gvar.var_220 == 1 && Gvar.var_486[Gvar.var_682][Gvar.var_225][15] == 2) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.var_1930 = 1;
        }
        if (Gvar.var_234 == 1) {
            Gvar.var_1931 = 0;
            if (Gvar.belongings_item_list >= 912 && Gvar.belongings_item_list < 987) {
                Gvar.var_1931 = 1;
            }
            if (Gvar.belongings_item_list >= 993 && Gvar.belongings_item_list <= 994) {
                Gvar.var_1931 = 1;
            }
            if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 770) {
                Gvar.var_1931 = 1;
            }
            if (Gvar.belongings_item_list != 567 && Gvar.belongings_item_list != 590 && Gvar.belongings_item_list != 565) {
                if (Gvar.var_1931 == 0) {
                    await Func.func479();
                }
            }
            if (Gvar.belongings_item_list == 567 && Gvar.var_1930 == 1) {
                await Func.func479();
            }
            if (Gvar.belongings_item_list == 590 && Gvar.var_1930 == 1) {
                await Func.func479();
            }
            if (Gvar.belongings_item_list == 565 && Gvar.var_1930 == 1) {
                await Func.func479();
            }
            if (Gvar.var_1931 == 1 && Gvar.var_1930 == 1) {
                await Func.func479();
            }
        }
        Gvar.var_1932 = Gvar.var_225;
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 600) {
            Gvar.var_1264 = 1;
            Adap.DSPLAY(117);
        }
        if (Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list < 606) {
            Gvar.var_1214 = 3;
            Adap.DSPLAY(119); // 食べた時の効果音
        }
        if (Gvar.belongings_item_list >= 606 && Gvar.belongings_item_list < 650) {
            Gvar.var_1214 = 1;
            Adap.DSPLAY(119); // 食べた時の効果音
        }
        if (Gvar.belongings_item_list >= 650 && Gvar.belongings_item_list < 660) {
            Gvar.var_1214 = 2;
            Adap.DSPLAY(119); // 食べた時の効果音
        }
        if (Gvar.belongings_item_list >= 660 && Gvar.belongings_item_list < 700) {
            Gvar.var_1214 = 1;
            Adap.DSPLAY(119); // 食べた時の効果音
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 800 && Gvar.var_234 == 0) {
            Gvar.var_1252 = 1;
        }
        if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000 && Gvar.var_234 == 0) {
            Gvar.var_1252 = 1;
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 770) {
            Gvar.var_1840 = Gvar.belongings_item_list + 250 - 900;
            Gvar.var_988[Gvar.var_1840] = 1;
        }
        if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
            Gvar.var_1840 = Gvar.belongings_item_list - 900;
            Gvar.var_988[Gvar.var_1840] = 1;
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 500) {
            Gvar.var_1933 = 1;
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            Gvar.var_1934 = 0;
            if (Gvar.var_896 == 1 && Gvar.disc_class == 1) {
                Gvar.var_1934 = 1;
            }
            if (Gvar.var_897 == 1 && Gvar.disc_class == 2) {
                Gvar.var_1934 = 1;
            }
            if (Gvar.var_898 == 1 && Gvar.disc_class == 3) {
                Gvar.var_1934 = 1;
            }
            if (Gvar.var_896 == 1 && Gvar.var_476[Gvar.var_225] == 1) {
                Gvar.var_1934 = 1;
            }
            if (Gvar.var_897 == 1 && Gvar.var_477[Gvar.var_225] == 1) {
                Gvar.var_1934 = 1;
            }
            if (Gvar.var_898 == 1 && Gvar.var_478[Gvar.var_225] == 1) {
                Gvar.var_1934 = 1;
            }
            // スーパープライの呪いを解除した後、外したにもかかわらず、新しく装備しようとすると"呪われていてはずせない！"のコメントが表示された。
            // 装備を外すのに何個もフラグがあるのが問題?
            /* 
            if (Gvar.var_1934 == 1) {
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "呪われていてはずせない！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                await Func.func340(); // キー入力による選択処理
                Gvar.var_1264 = 0;
                Gvar.var_217 = 1;
                Gvar.disc_class = 0;
                Gvar.var_1933 = 0;
                await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                return;
            }*/
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            if (Gvar.var_233[Gvar.var_225].Var4 != 0) {
                Gvar.comments_row1 = "" + Gvar.item_name + "+" + Gvar.var_233[Gvar.var_225].Var4 + "を";
                Gvar.var_1936 = 0;
            }
            if (Gvar.var_233[Gvar.var_225].Var4 == 0) {
                Gvar.comments_row1 = "" + Gvar.item_name + "を";
                Gvar.var_1936 = 0;
            }
            if (Gvar.var_862[Gvar.belongings_item_list][0] == 0) {
                Gvar.comments_row1 = "" + Gvar.item_name + "を";
                Gvar.var_1936 = 0;
            }
            if (Gvar.disc_class == 1 && Gvar.var_476[Gvar.var_225] == 0) {
                Gvar.comments_row2 = "攻撃用に装備した";
                Gvar.var_1927 = Gvar.belongings_item_list;
                Gvar.var_1926 = 1;
                await Func.func105(); // discを装備した際のBGM選曲
            }
            if (Gvar.disc_class == 2 && Gvar.var_477[Gvar.var_225] == 0) {
                Gvar.comments_row2 = "防御用に装備した";
                Gvar.var_1928 = Gvar.belongings_item_list;
                Gvar.var_1926 = 1;
                await Func.func105(); // discを装備した際のBGM選曲
            }
            if (Gvar.disc_class == 3 && Gvar.var_478[Gvar.var_225] == 0) {
                Gvar.comments_row2 = "能力用に装備した";
                Gvar.var_1929 = Gvar.belongings_item_list;
                Gvar.var_1926 = 1;
                await Func.func105(); // discを装備した際のBGM選曲
            }
            if (Gvar.disc_class == 1 && Gvar.var_476[Gvar.var_225] == 1) {
                Gvar.comments_row1 = Gvar.comments_row1 + "はずした";
                await Func.func106(); // BGM選曲呼び出し割り振り
            }
            if (Gvar.disc_class == 2 && Gvar.var_477[Gvar.var_225] == 1) {
                Gvar.comments_row1 = Gvar.comments_row1 + "はずした";
                await Func.func106(); // BGM選曲呼び出し割り振り
            }
            if (Gvar.disc_class == 3 && Gvar.var_478[Gvar.var_225] == 1) {
                Gvar.comments_row1 = Gvar.comments_row1 + "はずした";
                await Func.func106(); // BGM選曲呼び出し割り振り
            }
        }
        if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 450 && Gvar.var_479[Gvar.var_225] == 0) {
            Gvar.comments_row1 = "" + Gvar.item_name + "(" + Gvar.var_233[Gvar.var_225].Var3 + ")を装備した";
            Gvar.var_1936 = 0;
            await Func.func105(); // discを装備した際のBGM選曲
        }
        if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 450 && Gvar.var_479[Gvar.var_225] == 1) {
            Gvar.comments_row1 = "" + Gvar.item_name + "(" + Gvar.var_233[Gvar.var_225].Var3 + ")をはずした";
            Gvar.var_1936 = 0;
            await Func.func106(); // BGM選曲呼び出し割り振り
        }
        if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 600) {
            Gvar.comments_row1 = "" + Gvar.item_name + " を使った";
            Gvar.var_1936 = 1;
        }
        if (Gvar.belongings_item_list >= 600 && Gvar.belongings_item_list < 700) {
            Gvar.comments_row1 = "" + Gvar.item_name + " を食べた";
            Gvar.var_1936 = 1;
        }
        if (Gvar.belongings_item_list == 632 || Gvar.belongings_item_list == 646) {
            Gvar.comments_row1 = "" + Gvar.item_name + " を飲んだ";
        }
        if (Gvar.belongings_item_list >= 700 && Gvar.belongings_item_list < 750) {
            Gvar.comments_row1 = "" + Gvar.item_name + " を使った";
            Gvar.var_1936 = 1;
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 800) {
            Gvar.comments_row1 = "" + Gvar.item_name + " を読んだ";
            Gvar.var_1936 = 1;
            Gvar.var_1253 = Gvar.belongings_item_list;
        }
        if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
            Gvar.comments_row1 = "" + Gvar.item_name + " を読んだ";
            Gvar.var_1936 = 1;
            Gvar.var_1253 = Gvar.belongings_item_list;
        }
        if (Gvar.belongings_item_list >= 912 && Gvar.belongings_item_list <= 986 && Gvar.var_1930 == 0) {
            Gvar.comments_row1 = "どのスタンドを研究しますか？";
            Gvar.var_1936 = 0;
            Gvar.var_1937 = Gvar.item_name;
        }
        if (Gvar.belongings_item_list >= 993 && Gvar.belongings_item_list <= 994 && Gvar.var_1930 == 0) {
            Gvar.comments_row1 = "どのスタンドを研究しますか？";
            Gvar.var_1936 = 0;
            Gvar.var_1937 = Gvar.item_name;
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list <= 770 && Gvar.var_1930 == 0) {
            Gvar.comments_row1 = "どのスタンドを研究しますか？";
            Gvar.var_1936 = 0;
            Gvar.var_1937 = Gvar.item_name;
        }
        if (Gvar.belongings_item_list >= 912 && Gvar.belongings_item_list <= 986 && Gvar.var_1930 == 1) {
            Gvar.comments_row1 = "" + Gvar.item_name + " を読んだ";
            Gvar.var_1936 = 0;
            Gvar.var_1937 = Gvar.item_name;
        }
        if (Gvar.belongings_item_list >= 993 && Gvar.belongings_item_list <= 994 && Gvar.var_1930 == 1) {
            Gvar.comments_row1 = "" + Gvar.item_name + " を読んだ";
            Gvar.var_1936 = 0;
            Gvar.var_1937 = Gvar.item_name;
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list <= 770 && Gvar.var_1930 == 1) {
            Gvar.comments_row1 = "" + Gvar.item_name + " を読んだ";
            Gvar.var_1936 = 0;
            Gvar.var_1937 = Gvar.item_name;
        }
        Gvar.var_1938 = Gvar.item_name;
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
            Gvar.var_233[Gvar.var_225].Var14 = 1;
            if (Gvar.dungeon_number != 3 && Gvar.dungeon_number != 4 && Gvar.dungeon_number != 5 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                Gvar.var_862[Gvar.belongings_item_list][0] = 1;
            }
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
        }
        if (Gvar.dungeon_number != 1 && Gvar.var_262 == 0) {
            Gvar.var_1939 = 0;
            if (Gvar.belongings_item_list >= 450 && Gvar.belongings_item_list < 500) {
                Gvar.var_1939 = 1;
            }
            if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 600) {
                Gvar.var_1939 = 1;
            }
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                Gvar.var_1939 = 1;
            }
            // No = 4 なので、一巡後の世界
            if (Gvar.dungeon_number == 4 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                Gvar.var_1939 = 1;
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (Gvar.dungeon_number == 5 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                Gvar.var_1939 = 1;
            }
            // 読んだアイテムが未識別状態(Gvar.var_862[Gvar.belongings_item_list][0] == 0)かつ
            // アイテムが Gvar.var_1939 = 1 に該当するものかつ
            // No = 567 アヴドゥルのdiscでないかつ
            // No = 590 ギアッチョのdiscでないかつ
            // No = 565 ピッチ神父のdisc出ない場合
            if (Gvar.var_862[Gvar.belongings_item_list][0] == 0 && Gvar.var_1939 == 1 && Gvar.belongings_item_list != 567 && Gvar.belongings_item_list != 590 && Gvar.belongings_item_list != 565) {
                if (Gvar.var_375 == 0) {
                    Gvar.var_198 = 1;
                    Gvar.var_300 = 0;
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.comments_row1 = Gvar.comments_row1a;
                    Gvar.comments_row2 = Gvar.comments_row2a;
                    Gvar.comments_row1a = "なんと" + Gvar.item_name + "は";
                    if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
                        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
                    }
                    if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
                        Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
                    }
                    Gvar.var_862[Gvar.belongings_item_list][0] = 1;
                    await Func.func492(); // アイテムリスト呼び出し
                    Gvar.comments_row2a = "" + Gvar.item_name + "だった！";
                    if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_233[Gvar.var_225].Var4 != 0) {
                        Gvar.comments_row2a = "" + Gvar.item_name + "+" + Gvar.var_233[Gvar.var_225].Var4 + "だった！";
                    }
                    Gvar.var_198 = 1;
                    Gvar.var_300 = 0;
                    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                    await Func.func047();
                    await Func.func050();
                    for (let cnt4 = 0; cnt4 < 9; ++cnt4) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                }
            }
        }
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
        }
        // 装備discの場合
        if (Gvar.var_233[Gvar.var_225].Var12 == 1 && Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.disc_class == 1) {
                Gvar.var_896 = 1;
            }
            if (Gvar.disc_class == 2) {
                Gvar.var_897 = 1;
            }
            if (Gvar.disc_class == 3) {
                Gvar.var_898 = 1;
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "" + Gvar.item_name + "は";
            Gvar.comments_row2a = "呪われていた！！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func050();
            Gvar.var_1940 = Gvar.var_199;
            Gvar.var_199 = 2;
            Gvar.var_1264 = 0;
            Gvar.var_747 = 1;
            Gvar.var_1212 = 1;
            Adap.DSPLAY(127);
            Gvar.var_389 = 2;
            Gvar.var_1498 = 1;
            Gvar.var_271 = 1;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1498 = 1;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1498 = 2;
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_1498 = 0;
            Gvar.var_271 = 0;
            Gvar.var_389 = 0;
            Gvar.var_199 = Gvar.var_1940;
        }
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
        }
        Gvar.var_1941 = 0;
        if (Gvar.belongings_item_list < 500) {
            Gvar.var_1941 = 1;
        }
        if (Gvar.belongings_item_list == 567 || Gvar.belongings_item_list == 590 || Gvar.belongings_item_list == 565) {
            Gvar.var_1941 = 1;
        }
        if (Gvar.belongings_item_list >= 912 && Gvar.belongings_item_list <= 986) {
            Gvar.var_1941 = 1;
        }
        if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list <= 800) {
            Gvar.var_1941 = 1;
        }
        // 道具画面(メニュー画面/道具)が閉じている状態
        if (Gvar.var_1941 == 0 && Gvar.var_220 == 0 && Gvar.var_233[Gvar.var_225].Var11 == 1) {
            Gvar.var_106 = 1;
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
        }
        // 道具画面(メニュー画面/道具)が開いている状態
        if (Gvar.var_1941 == 0 && Gvar.var_220 == 1 && Gvar.var_486[Gvar.var_682][Gvar.var_225][11] == 1) {
            Gvar.var_106 = 1;
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.count_buying_price = Gvar.count_buying_price + Gvar.buying_price;
        }
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_225].Var13;
            Gvar.var_1942 = Gvar.var_233[Gvar.var_225].Var20;
            Gvar.var_1943 = Gvar.var_233[Gvar.var_225].Var21;
        }
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.belongings_item_list = Gvar.var_486[Gvar.var_682][Gvar.var_225][0];
            Gvar.disc_rarity = Gvar.var_486[Gvar.var_682][Gvar.var_225][13];
            Gvar.var_1942 = Gvar.var_486[Gvar.var_682][Gvar.var_225][20];
            Gvar.var_1943 = Gvar.var_486[Gvar.var_682][Gvar.var_225][21];
        }
        Gvar.var_1944 = Gvar.belongings_item_list;

        await Func.func492(); // アイテムリスト呼び出し
        if (Gvar.belongings_item_list == 700 || Gvar.belongings_item_list == 571 || Gvar.belongings_item_list == 579 || Gvar.belongings_item_list == 729 || Gvar.belongings_item_list == 730 || Gvar.belongings_item_list == 731 || Gvar.belongings_item_list == 701 || Gvar.belongings_item_list == 995) {
            Gvar.var_1936 = 0;
        }
        if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
            await Func.func493(); // 装備disc能力値の設定
        }
        if (Gvar.belongings_item_list < 100 || Gvar.belongings_item_list >= 500) {
            await Func.func498(); // 消費アイテムの効果
        }
        // if (Gvar.belongings_item_list >= 500 || Gvar.belongings_item_list < 750) {
        //     await Func.func498(); // 消費アイテムの効果
        // }
        Gvar.belongings_item_list = Gvar.var_1944;


        if (Gvar.var_234 == 0) {
            Gvar.var_1931 = 0;
            if (Gvar.belongings_item_list >= 912 && Gvar.belongings_item_list < 987) {
                Gvar.var_1931 = 1;
            }
            if (Gvar.belongings_item_list >= 993 && Gvar.belongings_item_list <= 994) {
                Gvar.var_1931 = 1;
            }
            if (Gvar.belongings_item_list >= 750 && Gvar.belongings_item_list < 770) {
                Gvar.var_1931 = 1;
            }
            // 
            if (Gvar.belongings_item_list != 567 && Gvar.belongings_item_list != 590 && Gvar.belongings_item_list != 565) {
                if (Gvar.var_1931 == 0) {
                    await Func.func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
                }
            }
            // No = 567 ジョンガリAのdisc
            if (Gvar.belongings_item_list == 567 && Gvar.var_1930 == 1) {
                await Func.func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
            }
            // No = 590 ギアッチョのdisc
            if (Gvar.belongings_item_list == 590 && Gvar.var_1930 == 1) {
                await Func.func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
            }
            // No = 565 ケンゾーのdisc
            if (Gvar.belongings_item_list == 565 && Gvar.var_1930 == 1) {
                await Func.func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
            }
            if (Gvar.var_1931 == 1 && Gvar.var_1930 == 1) {
                await Func.func432(); // disc関係の配列宣言処理 or それ以外は初期化処理
            }
        }
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_1945 == 4) {
            Gvar.var_1936 = 0;
        }
        if (Gvar.var_1936 == 1) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = Gvar.item_message1;
            Gvar.comments_row2a = Gvar.item_message2;
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func050();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        Gvar.var_1948 = 0;
        Gvar.var_1264 = 0;
        Gvar.var_1214 = 0;
        Gvar.var_217 = 1;
        Gvar.disc_class = 0;
        if (Gvar.var_1949 == 1) {
            Adap.DSPLAY(118);
            Gvar.var_502 = 1;
            await Func.func356();
            return;
        }
        if (Gvar.var_1223 == 1) {
            await Func.func647(); // 射撃攻撃動作処理
            return;
        }
        if (Gvar.var_1945 >= 1) {
            await Func.func438(); // キーの入力　？
            return;
        }
        if (Gvar.var_1950 > 0) {
            await Func.func443(); // キーの入力　？
            return;
        }
        if (Gvar.var_1055 == 1) {
            await Ex.func447(); // 魔法のランプを使用した際の動作処理
            return;
        }
        if (Gvar.var_1951 == 1) {
            await Func.func550(); // 階段を上り下りする時に関係する関数
            return;
        }
        Gvar.var_1252 = 0;
        if (Gvar.var_1933 == 1) { // アイテム100 ~ 500 であれば
            await Func.func494();
            await Func.func497(); // スタンドの共鳴発動時のメッセージ表示
            Gvar.var_1933 = 0;
            Gvar.var_1926 = 0;
            Gvar.var_1927 = 0;
            Gvar.var_1928 = 0;
            Gvar.var_1929 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        Gvar.var_234 = 0;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)が閉じている状態
        if (Gvar.var_1952 == 1) {
            Gvar.var_1952 = 0;
            Gvar.var_217 = 0;
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func420}
