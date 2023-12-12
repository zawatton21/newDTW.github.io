import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func654(this: any) {
        Adap.dbgprt(654);
        Gvar.var_214 = 1;
        if (Gvar.var_83[Gvar.var_673].Var9 == 0) {
            return;
        }
        if (Gvar.var_83[Gvar.var_673].Var27 != 0) {
            await Func.func655();
            return;
        }
        Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_2197 = 0;
        if (Gvar.var_83[Gvar.var_673].Var20 == 0) {
            await Func.func620(); // 各敵の特殊能力(ディアボロへの攻撃)割り振り処理
        }
        if (Gvar.var_2197 == 1) {
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            Gvar.var_389 = 0;
            Gvar.var_240 = 0;
            Gvar.var_2197 = 0;
            return;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 >= 2) {
            Gvar.enemy_power = Math.floor(Gvar.enemy_power * (Gvar.var_83[Gvar.var_673].Var39 * 2 + 10) / 10);
        }
        if (Gvar.var_83[Gvar.var_673].Var25 >= 1 && Gvar.var_83[Gvar.var_673].Var25 <= 50) {
            Gvar.enemy_power = Gvar.enemy_power + Gvar.var_83[Gvar.var_673].Var25;
        }
        if (Gvar.var_83[Gvar.var_673].Var25 >= 51 && Gvar.var_83[Gvar.var_673].Var25 <= 99) {
            Gvar.enemy_power = Gvar.enemy_power - (Gvar.var_83[Gvar.var_673].Var25 - 50);
            if (Gvar.enemy_power <= 1) {
                Gvar.enemy_power = 1;
            }
        }
        Gvar.var_949 = Math.floor(Gvar.enemy_power * (Gvar.enemy_power + Gvar.enemy_power - 8) / 16) + Gvar.enemy_power;
        for (let cnt1 = 0; cnt1 < Gvar.var_581; ++cnt1) {
            Gvar.var_949 = Math.floor(Gvar.var_949 * 15 / 16);
        }
        Gvar.var_2817 = Adap.rnd(33);
        Gvar.var_2817 = Gvar.var_2817 + 111;
        Gvar.var_209 = Math.floor(Gvar.var_949 * Gvar.var_2817 / 128);
        if (Gvar.var_130 != 0) {
            Gvar.var_1337 = Gvar.var_83[Gvar.var_673].Var0;
            if (Gvar.var_1337 == 147 || Gvar.var_1337 == 73 || Gvar.var_1337 == 119 || Gvar.var_1337 == 136 || Gvar.var_1337 == 135 || Gvar.var_1337 == 139 || Gvar.var_1337 == 140 || Gvar.var_1337 == 105) {
                Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
            }
        }
        if (Gvar.var_128 >= 1) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
        }
        if (Gvar.var_182 == 1) {
            Gvar.var_209 = Math.floor(Gvar.var_209 / 2);
        }
        if (Gvar.var_209 <= 1) {
            Gvar.var_209 = 1;
        }
        Gvar.var_3030 = 0;
        Gvar.var_3031 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_3031].Var0 == 701) {
                if (Gvar.var_233[Gvar.var_3031].Var13 == Gvar.var_83[Gvar.var_673].Var0) {
                    Gvar.var_3032 = Adap.rnd(6);
                    if (Gvar.var_3032 == 0) {
                        Gvar.var_3030 = Gvar.var_233[Gvar.var_3031].Var13;
                        break;
                    }
                }
            }
            Gvar.var_3031++;
        }
        if (Gvar.var_3030 >= 1) {
            Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
            if (Gvar.var_83[Gvar.var_673].Var0 == 97 && Gvar.var_83[Gvar.var_673].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var31;
            }
            await Func.func626(); // 敵リスト
            Gvar.var_3033 = Gvar.enemy_name;
            if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
                Gvar.var_3033 = "何者か";
            }
            if (Gvar.var_119 == 0 && Gvar.sympathy_id != 166 && Gvar.var_83[Gvar.var_673].Var30 != 0) {
                Gvar.var_3033 = "何者か";
            }
            Gvar.enemy_list = Gvar.var_3030;
            await Func.func626(); // 敵リスト
            Gvar.var_3034 = Gvar.enemy_name;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "" + Gvar.var_3033 + "は";
            Gvar.comments_row2 = "ﾍﾟﾗﾍﾟﾗの人質を見て攻撃を躊躇した！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_3035 = 1;
                Gvar.var_83[Gvar.var_673].Var32 = 99;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_3035 = 0;
                Gvar.var_83[Gvar.var_673].Var32 = 1;
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        Gvar.var_2867 = Adap.rnd(8);
        if (Gvar.var_110 == 1) {
            Gvar.var_2867 = 1;
        }
        if (Gvar.var_105 == 1) { // Gvar.var_105 攻撃を躱わしやすくなるフラグがONであれば
            if (Gvar.var_2867 == 2 || Gvar.var_2867 == 3) {
                Gvar.var_2867 = 0;
                Gvar.var_2868 = 1;
            }
        }
        if (Gvar.dungeon_number == 99) {
            Gvar.var_2867 = 1;
            Gvar.var_2868 = 0;
        }
        if (Gvar.var_2867 == 0) {
            if (Gvar.var_127 == 0 && Gvar.var_132 == 0 && Gvar.var_83[Gvar.var_673].Var30 == 0) {
                if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                    Gvar.var_199 = 8;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                    Gvar.var_199 = 2;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                    Gvar.var_199 = 6;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                    Gvar.var_199 = 4;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                    Gvar.var_199 = 9;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                    Gvar.var_199 = 7;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                    Gvar.var_199 = 3;
                }
                if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                    Gvar.var_199 = 1;
                }
            }
            await Func.func656();
            Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
            if (Gvar.var_83[Gvar.var_673].Var0 == 97 && Gvar.var_83[Gvar.var_673].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var31;
            }
            await Func.func626(); // 敵リスト
            if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
                Gvar.enemy_name = "何者か";
            }
            if (Gvar.var_119 == 0 && Gvar.sympathy_id != 166 && Gvar.var_83[Gvar.var_673].Var30 != 0) {
                Gvar.enemy_name = "何者か";
            }
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.var_2868 == 0) {
                Gvar.comments_row1 = "" + Gvar.enemy_name + "の攻撃は外れた";
            }
            if (Gvar.var_2868 == 1) {
                Gvar.comments_row1 = "" + Gvar.enemy_name + "の攻撃を";
                Gvar.comments_row2 = "ヒラリとかわした";
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_2868 = 0;
            return;
        }
        // No = 203 ザ・フールのDISCを装備している場合
        if (Gvar.equip_disc[203] == 1 && Gvar.var_163 == 0) {
            Gvar.var_3036 = Adap.rnd(8);
            if (Gvar.var_3036 == 0) {
                if (Gvar.var_127 == 0 && Gvar.var_132 == 0 && Gvar.var_83[Gvar.var_673].Var30 == 0) {
                    if (Gvar.var_83[Gvar.var_673].Var5 == 2) {
                        Gvar.var_199 = 8;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 8) {
                        Gvar.var_199 = 2;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 4) {
                        Gvar.var_199 = 6;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 6) {
                        Gvar.var_199 = 4;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 1) {
                        Gvar.var_199 = 9;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 3) {
                        Gvar.var_199 = 7;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 7) {
                        Gvar.var_199 = 3;
                    }
                    if (Gvar.var_83[Gvar.var_673].Var5 == 9) {
                        Gvar.var_199 = 1;
                    }
                }
                await Func.func656();
                Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
                await Func.func626(); // 敵リスト
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "ザ・フールが攻撃を防いだ！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                Gvar.var_271 = 1;
                Gvar.var_1383 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1383++;
                }
                Gvar.var_271 = 0;
                Gvar.var_1383 = 0;
                return;
            }
        }
        Gvar.var_3037 = 0;
        // 敵が攻撃を受けた際の攻撃力上昇処理
        // Gvar.enemy_list = 14 床屋のカーン、Gvar.enemy_list = 66 タルカス、
        if (Gvar.enemy_list == 14 || Gvar.enemy_list == 66 || Gvar.enemy_list == 47 || Gvar.enemy_list == 120 || Gvar.enemy_list == 160 || Gvar.enemy_list == 67 || Gvar.equip_disc[367] == 1) {
            if (Gvar.var_83[Gvar.var_673].Var20 == 0) {
                Gvar.var_3037 = Adap.rnd(4);
                // Gvar.enemy_list = 120 承太郎(3部)
                if (Gvar.var_83[Gvar.var_673].Var0 == 120) {
                    Gvar.var_3037 = Adap.rnd(3);
                }
                if (Gvar.var_3037 == 1) {
                    Gvar.var_209 = Math.floor(Gvar.var_209 * 3 / 2);
                }
                if (Gvar.var_3037 == 1 && Gvar.var_209 <= 1) {
                    Gvar.var_209 = 2;
                }
            }
        }
        Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
        await Func.func626(); // 敵リスト
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        if (Gvar.var_1637 == 1) { // 攻撃モーションにスタンド像を付与するフラグがONの場合
            Gvar.var_743 = 1; //スタンド像付与フラグON
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 129 && Gvar.var_2796 == 1) {
            Gvar.var_743 = 1; //スタンド像付与フラグON
        }
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_672 = Gvar.var_83[Gvar.var_673].Var0;
        await Func.func093();
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_747 = 1;
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        Gvar.var_672 = Gvar.var_83[Gvar.var_673].Var0;
        await Func.func092();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            Gvar.var_389 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_3037 == 1) {
                Gvar.var_585 = 3;
            }
            Gvar.var_389 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_585 = 0;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 22 || Gvar.var_83[Gvar.var_673].Var0 == 17 || Gvar.var_83[Gvar.var_673].Var0 == 71) {
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                Gvar.var_389 = 1;
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_3037 == 1) {
                    Gvar.var_585 = 3;
                }
                Gvar.var_389 = 3;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_585 = 0;
            }
        }
        Gvar.var_389 = 1;
        Gvar.var_585 = 0;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_742 = 0;
        Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
        if (Gvar.var_83[Gvar.var_673].Var0 == 97 && Gvar.var_83[Gvar.var_673].Var31 >= 11) {
            Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var31;
        }
        await Func.func626(); // 敵リスト
        if (Gvar.var_113 == 1) {
            Gvar.var_209 = Math.floor(Gvar.var_209 * 2 / 3) + 1;
        }
        Gvar.var_211 = Gvar.var_211 - Gvar.var_209;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_209;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
        }
        if (Gvar.var_3037 == 1) {
            Gvar.var_3038 = 1;
        }
        if (Gvar.var_3038 == 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.var_83[Gvar.var_673].Var0 != 120) {
                Gvar.comments_row1 = "痛恨の一撃！";
            }
            if (Gvar.var_83[Gvar.var_673].Var0 == 120) {
                Gvar.comments_row1 = "「オラァッ！！」";
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[9]; // Ver0.1310で値修正 3 → 9
            Gvar.var_26_x = Gvar.var_26[9]; // Ver0.1310で値修正 3 → 9
            Gvar.var_27_x = Gvar.var_27[9]; // Ver0.1310で値修正 3 → 9
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 9; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_3038 = 0;
            Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var0;
            if (Gvar.var_83[Gvar.var_673].Var0 == 97 && Gvar.var_83[Gvar.var_673].Var31 >= 11) {
                Gvar.enemy_list = Gvar.var_83[Gvar.var_673].Var31;
            }
            await Func.func626(); // 敵リスト
        }
        if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
            Gvar.enemy_name = "何者か";
        }
        if (Gvar.var_119 == 0 && Gvar.sympathy_id != 166 && Gvar.var_83[Gvar.var_673].Var30 != 0) {
            Gvar.enemy_name = "何者か";
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.enemy_name + "はﾃﾞｨｱﾎﾞﾛに";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.comments_row2 = "" + Gvar.var_209 + "のダメージ！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        if (Gvar.var_211 <= 0) {
            Gvar.var_356 = Gvar.var_83[Gvar.var_673].Var0;
            Gvar.var_212 = 1;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 140 || Gvar.var_83[Gvar.var_673].Var0 == 136 || Gvar.var_83[Gvar.var_673].Var0 == 73 || Gvar.var_83[Gvar.var_673].Var0 == 135 || Gvar.var_83[Gvar.var_673].Var0 == 139 || Gvar.var_83[Gvar.var_673].Var0 == 119 || Gvar.var_83[Gvar.var_673].Var0 == 111) {
            Gvar.var_1073 = Adap.rnd(5);
            if (Gvar.var_1073 == 0 && Gvar.var_178 == 0 && Gvar.var_83[Gvar.var_673].Var20 == 0 && Gvar.nouryoku_disc_id != 116 && Gvar.var_125 == 0) {
                await Func.func340(); // キー入力による選択処理
                Adap.DSPLAY(120);
                Gvar.var_178 = 1;
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "ビリっときたあああああ！！";
                Gvar.comments_row2a = "";
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
            }
        }
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_389 = 0;
        Gvar.var_240 = 0;
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        // 
        if (Gvar.var_3037 == 1 && Gvar.equip_disc[200] == 1) {
            await Func.func694();
            return;
        }
        // No = 115 G・エクスペリエンスのDISCを装備している場合
        if (Gvar.equip_disc[115] == 1) {
            await Func.func695(); // 敵からのダメージを反射する際の動作処理
            if (Gvar.var_2855 != 0) {
                Gvar.var_2855 = 0;
                return;
            }
        }
        // Gvar.enemy_list == 120 承太郎
        if (Gvar.var_83[Gvar.var_673].Var0 == 120 && Gvar.var_3037 == 1 && Gvar.var_211 >= 1) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func529();
            return;
        }
        if (Gvar.var_150 == 1 && Gvar.var_211 >= 1) {
    
            Adap.DSPLAY(152);
            await Func.func529();
            return;
        }
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func654}
