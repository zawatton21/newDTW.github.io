import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Ex from '../extra_items/index'
import * as Main from '../newdtw/index'

async function func473(this: any) {
        Adap.dbgprt(473);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_1866 = 0;
        if (Gvar.var_233[Gvar.var_225].Var0 != 851 && Gvar.var_233[Gvar.var_225].Var7 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "これ以上押せないようだ。";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_231 = 0;
            Gvar.var_234 = 0;
            Gvar.var_2040 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 851) {
            Gvar.var_1916 = Gvar.var_233[Gvar.var_225].Var6;
            if (Gvar.var_486[Gvar.var_1916][1][15] == 0 || Gvar.var_233[Gvar.var_225].Var8 == 0) {
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "何も入っていないようだ。";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                Gvar.var_231 = 0;
                Gvar.var_234 = 0;
                Gvar.var_2040 = 0;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                await Main.func009(); // ゲーム基本動作フレーム処理
                return;
            }
        }
        if (Gvar.var_233[Gvar.var_225].Var0 != 851) {
            Gvar.var_233[Gvar.var_225].Var7 = Gvar.var_233[Gvar.var_225].Var7 - 1;
            if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
                Gvar.count_buying_price = Gvar.count_buying_price + 100;
            }
            if (Gvar.var_234 == 1) {
                Gvar.var_2087 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                Gvar.var_78[Gvar.var_2087].Var7 = Gvar.var_233[0].Var7;
            }
        }
        Adap.DSPLAY(221);
        if (Gvar.var_233[Gvar.var_225].Var0 == 850) {
            Gvar.var_1940 = Gvar.var_199;
            Gvar.var_199 = 2;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "パウッ！";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_389 = 2;
            Gvar.var_747 = 1;
            Adap.DSPLAY(103); // 殴られた時の効果音
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_389 = 0;
            Adap.DSPLAY(182);
            Gvar.var_1299 = 1;
            Gvar.var_271 = 1;
            Gvar.var_1297 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1297++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1297 = 0;
            if (Gvar.var_130 != 0) {
                Gvar.var_389 = 2;
                Gvar.var_134 = 1;
                Gvar.var_211 = 1;
                Gvar.var_747 = 1;
                Adap.DSPLAY(105);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "吸血鬼体質で波紋呼吸をしてしまった！";
                Gvar.comments_row2a = "";
                await Func.func050();
                await Func.func047();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func340(); // キー入力による選択処理
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "酷いダメージを受けて回復しない！";
                Gvar.comments_row2a = "";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_389 = 0;
            }
            if (Gvar.var_130 == 0) {
                if (Gvar.var_211 != Gvar.var_352) {
                    Adap.DSPLAY(143);
                    Gvar.var_211 = Gvar.var_352;
                    Gvar.comments_row1 = Gvar.comments_row1a;
                    Gvar.comments_row2 = Gvar.comments_row2a;
                    Gvar.comments_row1a = "ＨＰが回復した！";
                    Gvar.comments_row2a = "";
                    await Func.func050();
                    Gvar.var_198 = 1;
                    Gvar.var_300 = 0;
                    await Func.func047();
                    for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    await Func.func340(); // キー入力による選択処理
                }
                await Ex.func457(); // ジャッジメントの問いに対して、体力を回復させてくれと選択した時、体力回復後の状態異常回復の動作処理
                Gvar.var_125 = 1;
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "吸血鬼に強くなった！";
                Gvar.comments_row2a = "";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
            }
            Gvar.var_199 = Gvar.var_1940;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 851) {
            if (Gvar.var_199 == 2) {
                Gvar.var_2102 = Gvar.var_66;
                Gvar.var_2103 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_2102 = Gvar.var_66;
                Gvar.var_2103 = Gvar.var_67 - 1;
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_2102 = Gvar.var_66 - 1;
                Gvar.var_2103 = Gvar.var_67;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_2102 = Gvar.var_66 + 1;
                Gvar.var_2103 = Gvar.var_67;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_2102 = Gvar.var_66 - 1;
                Gvar.var_2103 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_2102 = Gvar.var_66 + 1;
                Gvar.var_2103 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_2102 = Gvar.var_66 - 1;
                Gvar.var_2103 = Gvar.var_67 - 1;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_2102 = Gvar.var_66 + 1;
                Gvar.var_2103 = Gvar.var_67 - 1;
            }
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.var_862[851][0] == 0) {
                Gvar.comments_row1 = "何かを押した。";
            }
            if (Gvar.var_862[851][0] == 1) {
                Gvar.comments_row1 = "ビンの中を押した。";
            }
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 0 || Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 13 || Gvar.var_82[Gvar.var_2102][Gvar.var_2103] != 0) {
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "何かが飛び出そうになったが";
                Gvar.comments_row2a = "出てこなかった。";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
            }
            if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 0 && Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 13 && Gvar.var_82[Gvar.var_2102][Gvar.var_2103] == 0) {
                Gvar.var_1845 = 4;
                Gvar.var_1916 = Gvar.var_233[Gvar.var_225].Var6;
                Gvar.var_1918 = Gvar.var_486[Gvar.var_1916][1][15];
                Gvar.var_1919 = Gvar.var_486[Gvar.var_1916][1][18];
                await Func.func556(); // 敵をフロアへ出現させる処理
                Gvar.var_1918 = 0;
                Gvar.var_1845 = 0;
                Gvar.var_1584 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
                Gvar.var_1585 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
                Gvar.var_271 = 1;
                Gvar.var_1583 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1583++;
                }
                Gvar.var_271 = 0;
                Gvar.var_1583 = 0;
                Gvar.var_486[Gvar.var_1916][1][15] = 0;
                Gvar.var_1957 = 0;
                Gvar.var_447 = 1;
                Gvar.var_449 = 2;
                Gvar.var_2104 = Gvar.var_233[Gvar.var_225].Var7 + Gvar.var_233[Gvar.var_225].Var8;
                for (let cnt3 = 0; cnt3 < Gvar.var_2104; ++cnt3) {
                    if (Gvar.var_486[Gvar.var_1916][Gvar.var_447][15] == 0) {
                        Gvar.var_486[Gvar.var_1916][Gvar.var_447][15] = Gvar.var_486[Gvar.var_1916][Gvar.var_449][15];
                        Gvar.var_486[Gvar.var_1916][Gvar.var_447][18] = Gvar.var_486[Gvar.var_1916][Gvar.var_449][18];
                        Gvar.var_1957 = 1;
                    }
                    if (Gvar.var_1957 == 1) {
                        Gvar.var_486[Gvar.var_1916][Gvar.var_447][15] = Gvar.var_486[Gvar.var_1916][Gvar.var_449][15];
                        Gvar.var_486[Gvar.var_1916][Gvar.var_447][18] = Gvar.var_486[Gvar.var_1916][Gvar.var_449][18];
                    }
                    Gvar.var_447 = Gvar.var_447 + 1;
                    Gvar.var_449 = Gvar.var_449 + 1;
                }
                Gvar.var_2105 = Gvar.var_2104;
                Gvar.var_486[Gvar.var_1916][Gvar.var_2105][15] = 0;
                Gvar.var_486[Gvar.var_1916][Gvar.var_2105][18] = 0;
                Gvar.var_233[Gvar.var_225].Var8 = Gvar.var_233[Gvar.var_225].Var8 - 1;
                if (Gvar.var_233[Gvar.var_225].Var11 == 1) {
                    Gvar.count_buying_price = Gvar.count_buying_price + 100;
                }
                if (Gvar.var_234 == 1) {
                    Gvar.var_2087 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                    Gvar.var_78[Gvar.var_2087].Var7 = Gvar.var_233[0].Var7;
                    Gvar.var_78[Gvar.var_2087].Var8 = Gvar.var_233[0].Var8;
                }
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
            }
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 852) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.var_862[852][0] == 0) {
                Gvar.comments_row1 = "何かを押した。";
            }
            if (Gvar.var_862[852][0] == 1) {
                Gvar.comments_row1 = "ランドセルを押した。";
            }
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "ギャ――ス！";
            Gvar.comments_row2a = "";
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_231 = 0;
            Gvar.var_234 = 0;
            Gvar.var_2040 = 0;
            Gvar.var_2106 = 2;
            Gvar.var_1213 = 1;
            await Func.func647(); // 射撃攻撃動作処理
            return;
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 853) {
            if (Gvar.var_199 == 2) {
                Gvar.var_2102 = Gvar.var_66;
                Gvar.var_2103 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_2102 = Gvar.var_66;
                Gvar.var_2103 = Gvar.var_67 - 1;
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_2102 = Gvar.var_66 - 1;
                Gvar.var_2103 = Gvar.var_67;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_2102 = Gvar.var_66 + 1;
                Gvar.var_2103 = Gvar.var_67;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_2102 = Gvar.var_66 - 1;
                Gvar.var_2103 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_2102 = Gvar.var_66 + 1;
                Gvar.var_2103 = Gvar.var_67 + 1;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_2102 = Gvar.var_66 - 1;
                Gvar.var_2103 = Gvar.var_67 - 1;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_2102 = Gvar.var_66 + 1;
                Gvar.var_2103 = Gvar.var_67 - 1;
            }
            Gvar.var_2107 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.var_862[853][0] == 0) {
                Gvar.comments_row1 = "何かを押した。";
            }
            if (Gvar.var_862[853][0] == 1) {
                Gvar.comments_row1 = "サーフィス人形を押した。";
            }
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 0 || Gvar.var_71[Gvar.var_2102][Gvar.var_2103] == 13 || Gvar.var_82[Gvar.var_2102][Gvar.var_2103] != 0) {
                Gvar.var_2108 = 0;
            }
            if (Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 0 && Gvar.var_71[Gvar.var_2102][Gvar.var_2103] != 13 && Gvar.var_82[Gvar.var_2102][Gvar.var_2103] == 0) {
                Gvar.var_2108 = 1;
            }
            if (Gvar.var_2108 == 0) {
                Gvar.var_2109 = 1;
                Gvar.var_1845 = 1;
                await Func.func556(); // 敵をフロアへ出現させる処理
                Gvar.var_2109 = 0;
                Gvar.var_1845 = 0;
                if (Gvar.var_2110 == 1) {
                    Gvar.var_2107 = 1;
                    Gvar.var_199 = Gvar.var_2111;
                }
                if (Gvar.var_2110 == 0) {
                    Gvar.comments_row1 = Gvar.comments_row1a;
                    Gvar.comments_row2 = Gvar.comments_row2a;
                    Gvar.comments_row1a = "十分なスペースがないため";
                    Gvar.comments_row2a = "うまくいかなかった。";
                    await Func.func050();
                    Gvar.var_198 = 1;
                    Gvar.var_300 = 0;
                    await Func.func047();
                    Gvar.var_231 = 0;
                    Gvar.var_234 = 0;
                    Gvar.var_2040 = 0;
                    Gvar.var_217 = 1;
                    await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                    return;
                }
            }
            if (Gvar.var_2108 == 1) {
                Gvar.var_2109 = 1;
                Gvar.var_1845 = 4;
                await Func.func556(); // 敵をフロアへ出現させる処理
                Gvar.var_2109 = 0;
                Gvar.var_1845 = 0;
                Gvar.var_2107 = 1;
            }
            if (Gvar.var_2107 == 1) {
                Gvar.var_439 = Gvar.var_673;
                Gvar.var_83[Gvar.var_439].Var11 = 1;
                Gvar.var_83[Gvar.var_439].Var5 = 2;
                Gvar.var_271 = 1;
                Gvar.var_444 = 1;
                for (let cnt3 = 0; cnt3 < 25; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_444 = Gvar.var_444 + 1;
                    Gvar.var_198 = 1;
                    Gvar.var_300 = 0;
                }
                Gvar.var_271 = 0;
                Gvar.var_444 = 0;
                Gvar.var_83[Gvar.var_439].Var11 = 0;
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "ｺﾋﾟｰ人形が現れた。";
                Gvar.comments_row2a = "";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        if (Gvar.var_233[Gvar.var_225].Var0 == 854) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.var_862[854][0] == 0) {
                Gvar.comments_row1 = "何かを押した。";
            }
            if (Gvar.var_862[854][0] == 1) {
                Gvar.comments_row1 = "聖人の脊椎を押した。";
            }
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_234 = 0;
            if (Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
                Gvar.var_231 = 0;
                Gvar.var_234 = 0;
                Gvar.var_2040 = 0;
                Gvar.var_2112 = 1;
                Adap.DSPLAY(190);
                await Func.func499(); // ダンジョン動作処理?
            }
            if (Gvar.var_262 != 0) { // Gvar.var_262 != 0 なので、Gvar.dungeon_number = 0 であれば
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "ここでは何も起こらなかった。";
                Gvar.comments_row2a = "";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
            }
        }
        Gvar.var_231 = 0;
        Gvar.var_234 = 0;
        Gvar.var_2040 = 0;
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func473}
