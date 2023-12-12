import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func079(this: any) {
        Adap.dbgprt(79);
        await Func.func080(); // 各キー入力確認
        Gvar.conf_keyon = Adap.getkey(81); // キーQ 入力確認
        if (Gvar.conf_keyon == 1 && Gvar.key_Shift_on == 1) {
            await Func.func236();
            return;
        }
        // 仗助のdiscを使用した際のランダム動作処理
        if (Gvar.var_139 == 10 || Gvar.var_139 == 20 || Gvar.var_139 == 30 || Gvar.var_139 == 40) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            if (Gvar.var_139 == 10) {
                if (Gvar.var_601 == 0) {
                    Gvar.comments_row1 = "「このヘアースタイルが";
                    Gvar.comments_row2 = "　チンケな髪だとォ？」";
                }
                if (Gvar.var_601 == 1) {
                    Gvar.comments_row1 = "「このヘアースタイルが";
                    Gvar.comments_row2 = "　サザエさんみてェーだとォ？」";
                }
                if (Gvar.var_601 == 2) {
                    Gvar.comments_row1 = "「このヘアースタイルが";
                    Gvar.comments_row2 = "　くだらねーだとォ？」";
                }
                if (Gvar.var_601 == 3) {
                    Gvar.comments_row1 = "「このヘアースタイルが";
                    Gvar.comments_row2 = "　古くさいセンスだとォ？」";
                }
            }
            if (Gvar.var_139 == 20) {
                Gvar.comments_row1 = "「たしかに聞いたぞ";
                Gvar.comments_row2 = "　コラ―――――――ッ！」";
            }
            if (Gvar.var_139 == 30) {
                Gvar.comments_row1 = "「どこ隠れやがったあ――――";
                Gvar.comments_row2 = "　スッタコがぁ～～～～ッ」";
            }
            if (Gvar.var_139 == 40) {
                Gvar.comments_row1 = "「けなすやつあ　ゆるさねえ～～～～";
                Gvar.comments_row2 = "　何者ﾝだろーと黙っちゃあいねえッ！」";
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
        }
        // ドッピオのdiscを使用した際のランダム動作処理
        if (Gvar.var_144 == 10 || Gvar.var_144 == 15 || Gvar.var_144 == 20 || Gvar.var_144 == 25 || Gvar.var_144 == 30 || Gvar.var_144 == 35 || Gvar.var_144 == 40 || Gvar.var_144 == 45) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            if (Gvar.var_144 == 10) {
                Gvar.comments_row1 = "ﾄﾞｯﾋﾟｵ「今 ボスから電話があったんだ…";
                Gvar.comments_row2 = "　　　　僕の任務は…」";
            }
            if (Gvar.var_144 == 15) {
                Gvar.comments_row1 = "ﾄﾞｯﾋﾟｵ「えーと…　なんだっけ…」";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_144 == 20) {
                Gvar.comments_row1 = "ﾄﾞｯﾋﾟｵ「…やばい…！ このままここに";
                Gvar.comments_row2 = "　　　　ボケッとしてるのはやばいぞッ！」";
            }
            if (Gvar.var_144 == 25) {
                Gvar.comments_row1 = "ﾄﾞｯﾋﾟｵ「すぐにも襲われそうだッ！」";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_144 == 30) {
                Gvar.comments_row1 = "ﾄﾞｯﾋﾟｵ「ど…どこにいるんですか？";
                Gvar.comments_row2 = "　　　　ボス！！」";
            }
            if (Gvar.var_144 == 35) {
                Gvar.comments_row1 = "ﾄﾞｯﾋﾟｵ「オレの近くにいるのですかッ？」";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_144 == 40) {
                Gvar.comments_row1 = "ﾄﾞｯﾋﾟｵ「いるならすぐに来て下さい！」";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_144 == 45) {
                Gvar.comments_row1 = "ﾄﾞｯﾋﾟｵ「足に力が入らないんです…」";
                Gvar.comments_row2 = "";
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
        }
        if (Gvar.var_201 == 14) {
            if (Gvar.var_199 == 1) {
                Gvar.var_199 = 4;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_199 = 8;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_199 = 6;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_199 = 2;
            }
            if (Gvar.var_199 == 0) {
                Gvar.var_199 = 2;
            }
        }
        Gvar.var_423 = Gvar.var_66;
        Gvar.var_424 = Gvar.var_67;
        Gvar.var_425 = Gvar.var_66 - 1;
        if (Gvar.var_425 < 0) {
            Gvar.var_425 = 0;
        }
        Gvar.var_426 = Gvar.var_66 + 1;
        if (Gvar.var_426 > Gvar.var_33) {
            Gvar.var_426 = Gvar.var_33;
        }
        Gvar.var_427 = Gvar.var_67 + 1;
        if (Gvar.var_427 > Gvar.var_34) {
            Gvar.var_427 = Gvar.var_34;
        }
        Gvar.var_428 = Gvar.var_67 - 1;
        if (Gvar.var_428 < 0) {
            Gvar.var_428 = 0;
        }

        if (Gvar.var_144 == 0) {
            if (Gvar.var_82[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0) {
                Gvar.var_199 = 4;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0) {
                Gvar.var_199 = 6;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                Gvar.var_199 = 2;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                Gvar.var_199 = 8;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                Gvar.var_199 = 1;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0) {
                Gvar.var_199 = 3;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                Gvar.var_199 = 7;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
            if (Gvar.var_82[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0) {
                Gvar.var_199 = 9;
                Gvar.var_243 = 1;
                await Func.func635(); // ディアボロの攻撃動作処理
                return;
            }
        }
        Gvar.var_602 = 0;
        Gvar.var_603 = 0;
        Gvar.var_604 = 0;
        Gvar.var_605 = 0;
        Gvar.var_606 = 0;
        Gvar.var_607 = 0;
        Gvar.var_608 = 0;
        Gvar.var_609 = 0;
        if (Gvar.var_71[Gvar.var_425][Gvar.var_424] == 0 || Gvar.var_425 <= 5) {
            Gvar.var_602 = 1;
        }
        if (Gvar.var_71[Gvar.var_426][Gvar.var_424] == 0 || Gvar.var_426 >= Gvar.var_33) {
            Gvar.var_603 = 1;
        }
        if (Gvar.var_71[Gvar.var_423][Gvar.var_427] == 0 || Gvar.var_427 >= Gvar.var_34) {
            Gvar.var_604 = 1;
        }
        if (Gvar.var_71[Gvar.var_423][Gvar.var_428] == 0 || Gvar.var_428 <= 5) {
            Gvar.var_605 = 1;
        }
        if (Gvar.var_71[Gvar.var_425][Gvar.var_427] == 0 || Gvar.var_425 <= 5 || Gvar.var_427 >= Gvar.var_34) {
            Gvar.var_606 = 1;
        }
        if (Gvar.var_71[Gvar.var_425][Gvar.var_428] == 0 || Gvar.var_425 <= 5 || Gvar.var_428 <= 5) {
            Gvar.var_607 = 1;
        }
        if (Gvar.var_71[Gvar.var_426][Gvar.var_427] == 0 || Gvar.var_426 >= Gvar.var_33 || Gvar.var_427 >= Gvar.var_34) {
            Gvar.var_608 = 1;
        }
        if (Gvar.var_71[Gvar.var_426][Gvar.var_428] == 0 || Gvar.var_426 >= Gvar.var_33 || Gvar.var_428 <= 5) {
            Gvar.var_609 = 1;
        }
        Gvar.var_610 = 0;
        Gvar.var_611 = 0;
        if (Gvar.var_201 != 14 && Gvar.var_612 == 0) {
            Gvar.var_613 = Gvar.var_66;
            Gvar.var_614 = Gvar.var_67;
            Gvar.var_615 = Gvar.var_201;
            if (Gvar.var_322 == 0) {
                Gvar.var_322 = 2;
            }
            if (Gvar.var_322 == 4) {
                if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
            }
            if (Gvar.var_322 == 6) {
                if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
            }
            if (Gvar.var_322 == 8) {
                if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
            }
            if (Gvar.var_322 == 2) {
                if (Gvar.var_76[Gvar.var_615][3][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][3][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][3][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][4][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][4][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][4][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][2][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][2][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][2][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
                if (Gvar.var_76[Gvar.var_615][1][1] != 0 && Gvar.var_611 == 0) {
                    Gvar.var_66 = Gvar.var_76[Gvar.var_615][1][1];
                    Gvar.var_67 = Gvar.var_76[Gvar.var_615][1][2];
                    if (Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
                        Gvar.var_611 = 1;
                    }
                }
            }
            if (Gvar.var_144 == 0) {
                Gvar.var_616 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var0 != 53 && Gvar.var_83[Gvar.var_616].Var30 == 0 && Gvar.var_201 == Gvar.var_83[Gvar.var_616].Var10) {
                        Gvar.var_66 = Gvar.var_83[Gvar.var_616].Var1;
                        Gvar.var_67 = Gvar.var_83[Gvar.var_616].Var2;
                        Gvar.var_611 = 1;
                        break;
                    }
                    if (Gvar.var_83[Gvar.var_616].Var10 == 14 && Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_616].Var0 != 0 && Gvar.var_83[Gvar.var_616].Var0 != 53 && Gvar.var_83[Gvar.var_616].Var30 == 0) {
                        if (Gvar.var_71[Gvar.var_425][Gvar.var_424] == Gvar.var_201 || Gvar.var_71[Gvar.var_426][Gvar.var_424] == Gvar.var_201 || Gvar.var_71[Gvar.var_423][Gvar.var_427] == Gvar.var_201 || Gvar.var_71[Gvar.var_423][Gvar.var_428] == Gvar.var_201) {
                            Gvar.var_66 = Gvar.var_83[Gvar.var_616].Var1;
                            Gvar.var_67 = Gvar.var_83[Gvar.var_616].Var2;
                            Gvar.var_611 = 1;
                            break;
                        }
                    }
                    Gvar.var_616++;
                }
            }
            if (Gvar.var_611 == 1) {
                if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_606 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 1;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_425 == Gvar.var_66) {
                        if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_199 = 2;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_199 = 4;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_427 == Gvar.var_67) {
                        if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_199 = 4;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_199 = 2;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 2;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_199 = 4;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_607 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 7;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_425 == Gvar.var_66) {
                        if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_199 = 8;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_199 = 4;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_428 == Gvar.var_67) {
                        if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 - 1;
                            Gvar.var_199 = 4;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_199 = 8;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 8;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_199 = 4;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_608 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 3;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_426 == Gvar.var_66) {
                        if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_199 = 2;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_199 = 6;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_427 == Gvar.var_67) {
                        if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_199 = 6;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                            Gvar.var_424 = Gvar.var_424 + 1;
                            Gvar.var_199 = 2;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0) {
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 2;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_199 = 6;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_609 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 9;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_426 == Gvar.var_66) {
                        if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_199 = 8;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_199 = 6;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_428 == Gvar.var_67) {
                        if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                            Gvar.var_423 = Gvar.var_423 + 1;
                            Gvar.var_199 = 6;
                            Gvar.var_610 = 1;
                        }
                        if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                            Gvar.var_424 = Gvar.var_424 - 1;
                            Gvar.var_199 = 8;
                            Gvar.var_610 = 1;
                        }
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0) {
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 8;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_199 = 6;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 < Gvar.var_423 && Gvar.var_67 == Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_602 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_199 = 4;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_607 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 7;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_606 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 1;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 > Gvar.var_423 && Gvar.var_67 == Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_603 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_199 = 6;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_608 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 3;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_609 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 9;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 == Gvar.var_423 && Gvar.var_67 < Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_605 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 8;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_609 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_428] != 13) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 9;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 0 && Gvar.var_607 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_428] != 13) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 - 1;
                        Gvar.var_199 = 7;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_66 == Gvar.var_423 && Gvar.var_67 > Gvar.var_424) {
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_604 != 1 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 2;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_606 != 1 && Gvar.var_71[Gvar.var_425][Gvar.var_427] != 13) {
                        Gvar.var_423 = Gvar.var_423 - 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 1;
                        Gvar.var_610 = 1;
                    }
                    if (Gvar.var_610 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 0 && Gvar.var_608 != 1 && Gvar.var_71[Gvar.var_426][Gvar.var_427] != 13) {
                        Gvar.var_423 = Gvar.var_423 + 1;
                        Gvar.var_424 = Gvar.var_424 + 1;
                        Gvar.var_199 = 3;
                        Gvar.var_610 = 1;
                    }
                }
                if (Gvar.var_610 == 0) {
                    Gvar.var_617 = 0;
                    if (Gvar.var_617 == 0 && Gvar.var_322 == 2) {
                        Gvar.var_322 = 4;
                        Gvar.var_617 = 1;
                    }
                    if (Gvar.var_617 == 0 && Gvar.var_322 == 6) {
                        Gvar.var_322 = 2;
                        Gvar.var_617 = 1;
                    }
                    if (Gvar.var_617 == 0 && Gvar.var_322 == 8) {
                        Gvar.var_322 = 6;
                        Gvar.var_617 = 1;
                    }
                    if (Gvar.var_617 == 0 && Gvar.var_322 == 4) {
                        Gvar.var_322 = 8;
                        Gvar.var_617 = 1;
                    }
                    if (Gvar.var_617 == 0) {
                        Gvar.var_322 = 2;
                    }
                    Gvar.var_66 = Gvar.var_423;
                    Gvar.var_67 = Gvar.var_424;
                    Gvar.var_217 = 1;
                }
                if (Gvar.var_610 == 1) {
                    Gvar.var_66 = Gvar.var_423;
                    Gvar.var_67 = Gvar.var_424;
                }
            }
        }
        if (Gvar.var_201 == 14 || Gvar.var_611 == 0) {
            if (Gvar.var_199 == 2 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 4 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 8 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 6 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 3 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 1 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 7 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_199 == 9 && Gvar.var_610 == 0) {
                if (Gvar.var_610 == 0 && Gvar.var_603 == 0 && Gvar.var_82[Gvar.var_426][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_426][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 + 1;
                    Gvar.var_199 = 6;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_605 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_428] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_428] != 13) {
                    Gvar.var_67 = Gvar.var_67 - 1;
                    Gvar.var_199 = 8;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_604 == 0 && Gvar.var_82[Gvar.var_423][Gvar.var_427] == 0 && Gvar.var_71[Gvar.var_423][Gvar.var_427] != 13) {
                    Gvar.var_67 = Gvar.var_67 + 1;
                    Gvar.var_199 = 2;
                    Gvar.var_610 = 1;
                }
                if (Gvar.var_610 == 0 && Gvar.var_602 == 0 && Gvar.var_82[Gvar.var_425][Gvar.var_424] == 0 && Gvar.var_71[Gvar.var_425][Gvar.var_424] != 13) {
                    Gvar.var_66 = Gvar.var_66 - 1;
                    Gvar.var_199 = 4;
                    Gvar.var_610 = 1;
                }
            }
            if (Gvar.var_610 == 0) {
                Gvar.var_618 = 0;
                if (Gvar.var_618 == 0 && Gvar.var_199 == 2) {
                    Gvar.var_199 = 8;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 8) {
                    Gvar.var_199 = 2;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 6) {
                    Gvar.var_199 = 4;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 4) {
                    Gvar.var_199 = 6;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 1) {
                    Gvar.var_199 = 4;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 3) {
                    Gvar.var_199 = 2;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 7) {
                    Gvar.var_199 = 8;
                    Gvar.var_618 = 1;
                }
                if (Gvar.var_618 == 0 && Gvar.var_199 == 9) {
                    Gvar.var_199 = 6;
                    Gvar.var_618 = 1;
                }
                Gvar.var_217 = 1;
                await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                return;
            }
        }
        await Func.func015();
        return;
}

export {func079}
