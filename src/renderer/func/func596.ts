import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func596(this: any) {
        Adap.dbgprt(596);
        Gvar.var_2843 = 0;
        Gvar.var_2844 = 0;
        Gvar.var_2845 = 0;
        Gvar.var_2782 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2783 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_2784 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2785 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_2786 = Gvar.var_83[Gvar.var_673].Var2;
        Gvar.var_2787 = Gvar.var_83[Gvar.var_673].Var2;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            if (Gvar.var_65[Gvar.var_2784][Gvar.var_2783] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 6;
                break;
            }
            if (Gvar.var_65[Gvar.var_2785][Gvar.var_2783] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 4;
                break;
            }
            if (Gvar.var_65[Gvar.var_2782][Gvar.var_2786] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 2;
                break;
            }
            if (Gvar.var_65[Gvar.var_2782][Gvar.var_2787] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 8;
                break;
            }
            if (Gvar.var_65[Gvar.var_2785][Gvar.var_2786] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 1;
                break;
            }
            if (Gvar.var_65[Gvar.var_2784][Gvar.var_2786] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 3;
                break;
            }
            if (Gvar.var_65[Gvar.var_2785][Gvar.var_2787] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 7;
                break;
            }
            if (Gvar.var_65[Gvar.var_2784][Gvar.var_2787] == 1) {
                Gvar.var_2843 = cnt1; // 0.1405 カウンターがリンクしていなかったので修正 cnt2 → cnt1
                Gvar.var_2845 = 9;
                break;
            }
            Gvar.var_2784 = Gvar.var_2784 + 1;
            if (Gvar.var_2784 > Gvar.var_33) {
                Gvar.var_2784 = Gvar.var_33;
            }
            Gvar.var_2785 = Gvar.var_2785 - 1;
            if (Gvar.var_2785 < 0) {
                Gvar.var_2785 = 0;
            }
            Gvar.var_2786 = Gvar.var_2786 + 1;
            if (Gvar.var_2786 > Gvar.var_34) {
                Gvar.var_2786 = Gvar.var_34;
            }
            Gvar.var_2787 = Gvar.var_2787 - 1;
            if (Gvar.var_2787 < 0) {
                Gvar.var_2787 = 0;
            }
        }
        if (Gvar.var_2843 != 0) {
            Gvar.var_2782 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2783 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2784 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2785 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_2786 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2787 = Gvar.var_83[Gvar.var_673].Var2;
            for (let cnt2 = 0; cnt2 < Gvar.var_2843; ++cnt2) {
                if (Gvar.var_2845 == 6 && Gvar.var_77[Gvar.var_2784][Gvar.var_2783] != 0 && Gvar.var_82[Gvar.var_2784][Gvar.var_2783] == 0 && Gvar.var_65[Gvar.var_2784][Gvar.var_2783] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2784][Gvar.var_2783];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 4 && Gvar.var_77[Gvar.var_2785][Gvar.var_2783] != 0 && Gvar.var_82[Gvar.var_2785][Gvar.var_2783] == 0 && Gvar.var_65[Gvar.var_2785][Gvar.var_2783] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2785][Gvar.var_2783];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 2 && Gvar.var_77[Gvar.var_2782][Gvar.var_2786] != 0 && Gvar.var_82[Gvar.var_2782][Gvar.var_2786] == 0 && Gvar.var_65[Gvar.var_2782][Gvar.var_2786] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2782][Gvar.var_2786];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 8 && Gvar.var_77[Gvar.var_2782][Gvar.var_2787] != 0 && Gvar.var_82[Gvar.var_2782][Gvar.var_2787] == 0 && Gvar.var_65[Gvar.var_2782][Gvar.var_2787] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2782][Gvar.var_2787];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 1 && Gvar.var_77[Gvar.var_2785][Gvar.var_2786] != 0 && Gvar.var_82[Gvar.var_2785][Gvar.var_2786] == 0 && Gvar.var_65[Gvar.var_2785][Gvar.var_2786] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2785][Gvar.var_2786];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 3 && Gvar.var_77[Gvar.var_2784][Gvar.var_2786] != 0 && Gvar.var_82[Gvar.var_2784][Gvar.var_2786] == 0 && Gvar.var_65[Gvar.var_2784][Gvar.var_2786] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2784][Gvar.var_2786];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 7 && Gvar.var_77[Gvar.var_2785][Gvar.var_2787] != 0 && Gvar.var_82[Gvar.var_2785][Gvar.var_2787] == 0 && Gvar.var_65[Gvar.var_2785][Gvar.var_2787] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2785][Gvar.var_2787];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                if (Gvar.var_2845 == 9 && Gvar.var_77[Gvar.var_2784][Gvar.var_2787] != 0 && Gvar.var_82[Gvar.var_2784][Gvar.var_2787] == 0 && Gvar.var_65[Gvar.var_2784][Gvar.var_2787] == 0) {
                    Gvar.var_2205 = Gvar.var_77[Gvar.var_2784][Gvar.var_2787];
                    if (Gvar.var_78[Gvar.var_2205].Var0 == 650 || Gvar.var_78[Gvar.var_2205].Var0 == 651 || Gvar.var_78[Gvar.var_2205].Var0 == 653) {
                        Gvar.var_2844 = 1;
                        break;
                    }
                }
                Gvar.var_2784 = Gvar.var_2784 + 1;
                if (Gvar.var_2784 > Gvar.var_33) {
                    Gvar.var_2784 = Gvar.var_33;
                }
                Gvar.var_2785 = Gvar.var_2785 - 1;
                if (Gvar.var_2785 < 0) {
                    Gvar.var_2785 = 0;
                }
                Gvar.var_2786 = Gvar.var_2786 + 1;
                if (Gvar.var_2786 > Gvar.var_34) {
                    Gvar.var_2786 = Gvar.var_34;
                }
                Gvar.var_2787 = Gvar.var_2787 - 1;
                if (Gvar.var_2787 < 0) {
                    Gvar.var_2787 = 0;
                }
            }
        }
        if (Gvar.var_2844 == 1) {
            Gvar.var_2846 = Gvar.var_78[Gvar.var_2205].Var1;
            Gvar.var_2847 = Gvar.var_78[Gvar.var_2205].Var2;
            Gvar.var_1476 = (Gvar.var_78[Gvar.var_2205].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1477 = (Gvar.var_78[Gvar.var_2205].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_2303 = Gvar.var_78[Gvar.var_2205].Var0;
            Gvar.belongings_item_list = Gvar.var_2303;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_2848 = Gvar.item_name;
            Gvar.var_78[Gvar.var_2205].Var0 = 652;
            Gvar.var_2849 = Adap.rnd(3);
            Gvar.var_271 = 1;
            if (Gvar.var_2849 == 0) {
                Gvar.var_1475 = 1;
            }
            if (Gvar.var_2849 == 1) {
                Gvar.var_1478 = 1;
            }
            if (Gvar.var_2849 == 2) {
                Gvar.var_1479 = 1;
            }
    
            Adap.DSPLAY(111);
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2849 == 0) {
                    Gvar.var_1475++;
                }
                if (Gvar.var_2849 == 1) {
                    Gvar.var_1478++;
                }
                if (Gvar.var_2849 == 2) {
                    Gvar.var_1479++;
                }
            }
            Gvar.var_271 = 0;
            Gvar.var_1475 = 0;
            Gvar.var_1478 = 0;
            Gvar.var_1479 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "床の " + Gvar.var_2848 + "から";
            if (Gvar.var_2849 == 0) {
                Gvar.comments_row2 = "針が飛び出した！";
            }
            if (Gvar.var_2849 == 1) {
                Gvar.comments_row2 = "ハサミが飛び出した！";
            }
            if (Gvar.var_2849 == 2) {
                Gvar.comments_row2 = "カミソリが飛び出した！";
            }
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        Gvar.var_2850 = 0;
        if (Gvar.equip_disc[320] == 1) {
            Gvar.var_2851 = Adap.rnd(3);
            if (Gvar.var_2851 == 1) {
                Gvar.var_2850 = 1;
            }
        }
        if (Gvar.equip_disc[315] == 1) {
            Gvar.var_2851 = Adap.rnd(3);
            if (Gvar.var_2851 == 1) {
                Gvar.var_2850 = 1;
            }
        }
        if (Gvar.var_2850 == 1) {
            Gvar.var_240 = 0;
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.equip_disc[320] == 1) {
                Gvar.comments_row1 = "磁力攻撃をﾒﾀﾘｶの能力で防いだ！";
                Gvar.comments_row2 = "";
            }
            if (Gvar.equip_disc[315] == 1) {
                Gvar.comments_row1 = "磁力攻撃を予知した！";
                Gvar.comments_row2 = "";
            }
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.var_2849 = Adap.rnd(7);
            Gvar.var_2849 = Gvar.var_2849 + 1;
            if (Gvar.equip_disc[315] == 1) {
                Gvar.var_2849 = Adap.rnd(5);
            }
            if (Gvar.var_2849 == 0) {
                Gvar.comments_row1a = "ﾘｿﾞｯﾄ「おまえ『予知のような能力』";
                Gvar.comments_row2a = "　　　　を持っているな」";
            }
            if (Gvar.var_2849 == 1) {
                Gvar.comments_row1a = "ﾘｿﾞｯﾄ「こんな近くまで突っ込んで";
                Gvar.comments_row2a = "　　　　来たのは　お前が初めてだ…」";
            }
            if (Gvar.var_2849 == 2) {
                Gvar.comments_row1a = "ﾘｿﾞｯﾄ「なぜわかったのか？";
                Gvar.comments_row2a = "　　　　興味が湧く」";
            }
            if (Gvar.var_2849 == 3) {
                Gvar.comments_row1a = "ﾘｿﾞｯﾄ「『磁力』を使っている…";
                Gvar.comments_row2a = "　　　　『当たり』だ…」";
            }
            if (Gvar.var_2849 == 4) {
                Gvar.comments_row1a = "ﾘｿﾞｯﾄ「さてと…";
                Gvar.comments_row2a = "　　　オレはこれからどうすべきかな…」";
            }
            if (Gvar.var_2849 == 5) {
                Gvar.comments_row1a = "ﾘｿﾞｯﾄ「勝っていた…";
                Gvar.comments_row2a = "　　　　オレは勝っていたのに…」";
            }
            if (Gvar.var_2849 == 6) {
                Gvar.comments_row1a = "ﾘｿﾞｯﾄ「　ひ　　と　……";
                Gvar.comments_row2a = "　　　　　はレ…　　なな　」";
            }
            if (Gvar.var_2849 == 7) {
                Gvar.comments_row1a = "ﾘｿﾞｯﾄ「最後に顔を";
                Gvar.comments_row2a = "　　　　　見せ　てくれ　　顔を…」";
            }
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        Gvar.var_2849 = Adap.rnd(3);
        Gvar.var_271 = 1;
        if (Gvar.var_2849 == 0) {
            Gvar.var_1472 = 1;
        }
        if (Gvar.var_2849 == 1) {
            Gvar.var_1473 = 1;
        }
        if (Gvar.var_2849 == 2) {
            Gvar.var_1474 = 1;
        }
        Gvar.var_389 = 2;

        Adap.DSPLAY(111);
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_2849 == 0) {
                Gvar.var_1472++;
            }
            if (Gvar.var_2849 == 1) {
                Gvar.var_1473++;
            }
            if (Gvar.var_2849 == 2) {
                Gvar.var_1474++;
            }
        }
        Gvar.var_271 = 0;
        Gvar.var_1472 = 0;
        Gvar.var_1473 = 0;
        Gvar.var_1474 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        if (Gvar.var_2849 == 0) {
            Gvar.var_2852 = 10;
        }
        if (Gvar.var_2849 == 1) {
            Gvar.var_2852 = 13;
        }
        if (Gvar.var_2849 == 2) {
            Gvar.var_2852 = 16;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 >= 2) {
            Gvar.var_2852 = (Gvar.var_83[Gvar.var_673].Var39 - 1) * 2 + Gvar.var_2852;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_2849 == 0) {
            Gvar.comments_row1 = "体から針が飛び出した！";
        }
        if (Gvar.var_2849 == 1) {
            Gvar.comments_row1 = "体からハサミが飛び出した！";
        }
        if (Gvar.var_2849 == 2) {
            Gvar.comments_row1 = "体からカミソリが飛び出した！";
        }
        Gvar.comments_row2 = "" + Gvar.var_2852 + "のダメージをうけた！";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        if (Gvar.to_freeze >= 1) {
            await Main.func023();
        }
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_389 = 0;
        Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 225; // Gvar.var_356 死因要因メッセージID選択
        }
        Gvar.var_240 = 0;
        return;
}

export {func596}
