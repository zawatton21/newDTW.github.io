import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func547(this: any) {
        Adap.dbgprt(547);
        if (Gvar.var_83[Gvar.var_421].Var31 == 4 || Gvar.var_83[Gvar.var_421].Var31 == 5) {
            return;
        }
        Gvar.var_2488 = Gvar.var_80[Gvar.var_423][Gvar.var_424];
        if (Gvar.var_81[Gvar.var_2488][4] == 1 || Gvar.var_103 == 1 || Gvar.var_121 == 1) {
            // No = 132 レクイエムジョルノ、No = 143 ウンガロ
            // Ver0.1403にて追加。No - 171 離婚した承太郎
            if (Gvar.var_81[Gvar.var_2488][0] == 81 && Gvar.var_83[Gvar.var_421].Var0 != 50 && Gvar.var_83[Gvar.var_421].Var0 != 171 && Gvar.var_83[Gvar.var_421].Var0 != 148 && Gvar.var_83[Gvar.var_421].Var0 != 143 && Gvar.var_83[Gvar.var_421].Var0 != 132 && Gvar.var_83[Gvar.var_421].Var0 != 20) {
                Gvar.var_240 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var0;
                if (Gvar.var_83[Gvar.var_421].Var0 == 97 && Gvar.var_83[Gvar.var_421].Var31 >= 11) {
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var31;
                }
                await Func.func626(); // 敵リスト
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "" + Gvar.enemy_name + "が";
                Gvar.comments_row2 = "キッスのシールに触れた！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
                Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
                Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
                Gvar.var_1374 = Gvar.var_83[Gvar.var_421].Var0;
                if (Gvar.var_1374 == 19) {
                    Gvar.var_1374 = 90;
                }
                if (Gvar.var_1374 == 96) {
                    Gvar.var_1374 = 93;
                }
                Gvar.var_2489 = Gvar.var_83[Gvar.var_421].Var5;
                Gvar.var_347 = Gvar.var_83[Gvar.var_421].Var1;
                Gvar.var_348 = Gvar.var_83[Gvar.var_421].Var2;
                Gvar.var_83[Gvar.var_421].Var8 = 1;
                await Func.func624();
                Gvar.var_83[Gvar.var_421].Var8 = 0;
                Gvar.var_1374 = 0;
                return;
            }
            // No = 132 レクイエムジョルノ、No = 143 ウンガロでなければ
            // Ver0.1403にて追加。NO = 171 離婚した承太郎
            if (Gvar.var_81[Gvar.var_2488][0] == 78 && Gvar.var_83[Gvar.var_421].Var0 != 50 && Gvar.var_83[Gvar.var_421].Var0 != 171 && Gvar.var_83[Gvar.var_421].Var0 != 148 && Gvar.var_83[Gvar.var_421].Var0 != 143 && Gvar.var_83[Gvar.var_421].Var0 != 132 && Gvar.var_83[Gvar.var_421].Var0 != 20 && Gvar.var_83[Gvar.var_421].Var0 != 33 && Gvar.var_83[Gvar.var_421].Var0 != 34) {
                Gvar.var_240 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                Gvar.var_403 = "";
                Gvar.var_1396 = Gvar.var_423;
                Gvar.var_1397 = Gvar.var_424;
                Gvar.var_83[Gvar.var_421].Var5 = 2;
                Gvar.var_271 = 1;
                Gvar.var_1532 = 1;
        
                Adap.DSPLAY(122);
                for (let cnt3 = 0; cnt3 < 7; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1532++;
                }
                for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1532++;
                }
                Gvar.var_83[Gvar.var_421].Var8 = 1;
        
                Adap.DSPLAY(235);
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1532++;
                }
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Adap.DSPLAY(236);
                Gvar.var_1395 = 1;
                for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1395++;
                }
                Gvar.var_1395 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var0;
                await Func.func626(); // 敵リスト
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "" + Gvar.enemy_name + "を";
                Gvar.comments_row2 = "ペラペラにした！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
                Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
                Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1532++;
                }
                Gvar.var_271 = 0;
                Gvar.var_1532 = 0;
                Gvar.var_2490 = Gvar.var_83[Gvar.var_421].Var0;
                Gvar.var_2491 = Gvar.var_83[Gvar.var_421].Var39;
                Gvar.var_83[Gvar.var_421].Var0 = 0;
                Gvar.var_83[Gvar.var_421].Var1 = 0;
                Gvar.var_83[Gvar.var_421].Var2 = 0;
                Gvar.var_82[Gvar.var_423][Gvar.var_424] = 0;
                if (Gvar.var_336 >= 200) {
                    return;
                }
                await Func.func724();
                Gvar.var_866 = Gvar.var_854;
                Gvar.var_1550 = Gvar.var_423;
                Gvar.var_230 = Gvar.var_424;
                Gvar.var_77[Gvar.var_1550][Gvar.var_230] = Gvar.var_866;
                Gvar.var_78[Gvar.var_866].Var0 = 701;
                Gvar.var_78[Gvar.var_866].Var1 = Gvar.var_1550;
                Gvar.var_78[Gvar.var_866].Var2 = Gvar.var_230;
                Gvar.var_78[Gvar.var_866].Var3 = 0;
                Gvar.var_78[Gvar.var_866].Var4 = 0;
                Gvar.var_78[Gvar.var_866].Var5 = 0;
                Gvar.var_78[Gvar.var_866].Var6 = 0;
                Gvar.var_78[Gvar.var_866].Var7 = 0;
                Gvar.var_78[Gvar.var_866].Var8 = 0;
                Gvar.var_78[Gvar.var_866].Var9 = Gvar.var_71[Gvar.var_1550][Gvar.var_230];
                Gvar.var_78[Gvar.var_866].Var10 = 1;
                Gvar.var_78[Gvar.var_866].Var11 = 0;
                Gvar.var_78[Gvar.var_866].Var12 = 0;
                Gvar.var_78[Gvar.var_866].Var13 = Gvar.var_2490;
                Gvar.var_78[Gvar.var_866].Var14 = 0;
                Gvar.var_78[Gvar.var_866].Var15 = 0;
                Gvar.var_78[Gvar.var_866].Var16 = 0;
                Gvar.var_78[Gvar.var_866].Var17 = 0;
                Gvar.var_78[Gvar.var_866].Var18 = 0;
                Gvar.var_78[Gvar.var_866].Var19 = 0;
                Gvar.var_78[Gvar.var_866].Var20 = Gvar.var_2491;
                Gvar.var_78[Gvar.var_866].Var21 = 0;
                Gvar.var_78[Gvar.var_866].Var22 = 0;
                Gvar.var_78[Gvar.var_866].Var23 = 0;
                Gvar.var_78[Gvar.var_866].Var24 = 0;
                Gvar.var_78[Gvar.var_866].Var25 = 0;
                Gvar.var_78[Gvar.var_866].Var26 = 0;
                Gvar.var_78[Gvar.var_866].Var27 = 0;
                Gvar.var_78[Gvar.var_866].Var28 = 0;
                Gvar.var_78[Gvar.var_866].Var29 = 0;
                return;
            }
            if (Gvar.var_81[Gvar.var_2488][0] == 94) {
                Gvar.var_240 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                Gvar.var_403 = "ダイバーダウンの潜水攻撃！";
                Gvar.var_1396 = Gvar.var_423;
                Gvar.var_1397 = Gvar.var_424;
                Gvar.var_271 = 1;
                Gvar.var_1533 = 1;
                for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1533++;
                }
                Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var0;
                await Func.func626(); // 敵リスト
                Gvar.var_402 = Gvar.var_421;
                Gvar.var_314 = Gvar.var_421;
                await Func.func638();
                await Func.func705();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1533++;
                }
                Gvar.var_271 = 0;
                Gvar.var_1533 = 0;
                return;
            }
            if (Gvar.var_81[Gvar.var_2488][0] == 79) {
                Gvar.var_240 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                Gvar.var_403 = "タスクの穴の攻撃！";
                Gvar.var_1396 = Gvar.var_423;
                Gvar.var_1397 = Gvar.var_424;
                for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var0;
                await Func.func626(); // 敵リスト
                Gvar.var_402 = Gvar.var_421;
                Gvar.var_314 = Gvar.var_421;
                Gvar.var_340 = 414;
                await Func.func661();
                await Func.func705();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_271 = 0;
                Gvar.var_1533 = 0;
                return;
            }
            if (Gvar.var_81[Gvar.var_2488][0] == 80) {
                Gvar.var_240 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "肩胛骨をブチ割って！";
                Gvar.comments_row2 = "アジの開きのように裂いてやれッ！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
                Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
                Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
                await Func.func047();
                await Func.func340(); // キー入力による選択処理
                Gvar.var_403 = "砂DIOの攻撃！";
                Gvar.var_1396 = Gvar.var_423;
                Gvar.var_1397 = Gvar.var_424;
                Gvar.var_271 = 1;
                Gvar.var_1534 = 1;
                for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1534++;
                }
                Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var0;
                await Func.func626(); // 敵リスト
                Gvar.var_402 = Gvar.var_421;
                Gvar.var_314 = Gvar.var_421;
                Gvar.var_209 = 40;
                await Func.func705();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1534++;
                }
                Gvar.var_271 = 0;
                Gvar.var_1534 = 0;
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                return;
            }
            if (Gvar.var_81[Gvar.var_2488][0] == 82) {
                Gvar.var_240 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                Gvar.var_403 = "クロスファイヤーハリケーンスペシャル！";
                Gvar.var_1396 = Gvar.var_423;
                Gvar.var_1397 = Gvar.var_424;
                Gvar.var_271 = 1;
                Gvar.var_1546 = 1;
        
                Adap.DSPLAY(128);
                for (let cnt3 = 0; cnt3 < 8; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1546++;
                }
                Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var0;
                await Func.func626(); // 敵リスト
                Gvar.var_402 = Gvar.var_421;
                Gvar.var_314 = Gvar.var_421;
                Gvar.var_209 = Gvar.var_565 * 5;
                Gvar.var_2219 = Adap.rnd(3);
                Gvar.var_209 = Gvar.var_209 + Gvar.var_2219;
                if (Gvar.var_172 >= 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                    Gvar.var_209 = Gvar.var_209 * 2;
                }
                await Func.func705();
                for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1546++;
                }
                Gvar.var_271 = 0;
                Gvar.var_1546 = 0;
                return;
            }
            if (Gvar.var_81[Gvar.var_2488][0] == 86) {
                if (Gvar.var_83[Gvar.var_421].Var15 == 0) {
                    Gvar.var_83[Gvar.var_421].Var14 = 2;
                }
                if (Gvar.var_83[Gvar.var_421].Var15 != 0) {
                    Gvar.var_83[Gvar.var_421].Var14 = 0;
                    Gvar.var_83[Gvar.var_421].Var15 = 0;
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                return;
            }
            if (Gvar.var_81[Gvar.var_2488][0] == 93) {
                Gvar.var_240 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                Gvar.var_83[Gvar.var_421].Var13 = 1;
        
                Adap.DSPLAY(126);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                return;
            }
            if (Gvar.var_81[Gvar.var_2488][0] == 91) {
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                Gvar.var_83[Gvar.var_421].Var19 = 1;
                Adap.DSPLAY(124);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                return;
            }
            if (Gvar.var_81[Gvar.var_2488][0] == 90) {
                Gvar.var_240 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                Gvar.var_1389 = Gvar.var_83[Gvar.var_421].Var1;
                Gvar.var_1390 = Gvar.var_83[Gvar.var_421].Var2;
                Adap.DSPLAY(179);
                Gvar.var_271 = 1;
                Gvar.var_1573 = 1;
                for (let cnt3 = 0; cnt3 < 14; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1573++;
                }
                Gvar.var_271 = 0;
                Gvar.var_1573 = 0;
                Gvar.var_314 = Gvar.var_421;
                await Func.func669();
                Gvar.var_2492 = 1;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_2492].Var27 == Gvar.var_421) {
                        Gvar.var_83[Gvar.var_2492].Var27 = 0;
                    }
                    Gvar.var_2492++;
                }
                Gvar.var_83[Gvar.var_421].Var28 = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                return;
            }
            if (Gvar.var_81[Gvar.var_2488][0] == 92) {
                Gvar.var_240 = 0;
                Gvar.var_1554 = (Gvar.var_83[Gvar.var_421].Var1 - Gvar.var_66 + 4) * 40;
                Gvar.var_1555 = (Gvar.var_83[Gvar.var_421].Var2 - Gvar.var_67 + 4) * 40;
                Gvar.var_1553 = 1;
                Gvar.var_271 = 1;
        
                Adap.DSPLAY(176);
                for (let cnt3 = 0; cnt3 < 16; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1553++;
                }
                Gvar.var_1553 = 0;
                Gvar.var_271 = 0;
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                Gvar.var_403 = "法王の結界が発動した！";
                Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var0;
                await Func.func626(); // 敵リスト
                Gvar.var_402 = Gvar.var_421;
                Gvar.var_314 = Gvar.var_421;
                Gvar.var_340 = 400;
                await Func.func661();
                await Func.func705();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_340 = 0;
                return;
            }
            if (Gvar.var_81[Gvar.var_2488][0] == 87) {
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                Gvar.var_83[Gvar.var_421].Var17 = 1;
        
                Adap.DSPLAY(149);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                return;
            }
            if (Gvar.var_81[Gvar.var_2488][0] == 89) {
                Gvar.var_240 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                Gvar.var_403 = "ﾊｲｳｪｲｽﾀｰが養分を吸い取った！";
                Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var0;
                await Func.func626(); // 敵リスト
                Gvar.var_402 = Gvar.var_421;
                Gvar.var_314 = Gvar.var_421;
                Gvar.var_340 = 410;
                await Func.func661();
                Gvar.var_211 = Gvar.var_211 + Gvar.var_209;
                if (Gvar.var_211 >= Gvar.var_352) {
                    Gvar.var_211 = Gvar.var_352;
                }
                await Func.func705();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                return;
            }
            if (Gvar.var_81[Gvar.var_2488][0] == 88) {
                Gvar.var_240 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var0;
                if (Gvar.var_83[Gvar.var_421].Var0 == 97 && Gvar.var_83[Gvar.var_421].Var31 >= 11) {
                    Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var31;
                }
                await Func.func626(); // 敵リスト
                Gvar.var_2493 = Gvar.enemy_name;
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "" + Gvar.enemy_name + "が";
                Gvar.comments_row2 = "ﾏﾝ･ｲﾝ･ｻﾞ･ﾐﾗｰの鏡にかかった！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
                Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
                Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
        
                Adap.DSPLAY(103); // 殴られた時の効果音
                Gvar.var_747 = 1;
                Gvar.var_750 = 1;
                Gvar.var_1212 = 1;
                Gvar.var_748 = Gvar.var_83[Gvar.var_421].Var1 - Gvar.var_66 + 4;
                Gvar.var_749 = Gvar.var_83[Gvar.var_421].Var2 - Gvar.var_67 + 4;
                Gvar.var_271 = 1;
                Gvar.var_1581 = 1;
                Gvar.var_83[Gvar.var_421].Var8 = 1;
                for (let cnt3 = 0; cnt3 < 40; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1581 = Gvar.var_1581 + 1;
                    if (Gvar.var_1581 == 15) {
                        Gvar.var_83[Gvar.var_421].Var11 = 1;
                
                        Adap.DSPLAY(218);
                    }
                }
                Gvar.var_1212 = 0;
                Gvar.var_750 = 0;
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "「半分だけ出ることを許可する！」";
                Gvar.comments_row2 = "";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
                Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
                Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
                Gvar.var_83[Gvar.var_421].Var11 = 0;
                if (Gvar.var_83[Gvar.var_421].Var15 == 0) {
                    Gvar.var_83[Gvar.var_421].Var14 = 2;
                }
                if (Gvar.var_83[Gvar.var_421].Var15 != 0) {
                    Gvar.var_83[Gvar.var_421].Var14 = 0;
                    Gvar.var_83[Gvar.var_421].Var15 = 0;
                }
        
                Adap.DSPLAY(107);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1581 = Gvar.var_1581 + 1;
                    Gvar.var_300 = 0;
                }
                Gvar.var_83[Gvar.var_421].Var8 = 0;
                Gvar.var_271 = 0;
                Gvar.var_1581 = 0;
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "" + Gvar.var_2493 + "は";
                Gvar.comments_row2a = "体の動きが鈍くなってしまった。";
                await Func.func047();
                await Func.func050();
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                return;
            }
            if (Gvar.var_145 == 1) {
                Gvar.var_240 = 0;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_80[Gvar.var_423][Gvar.var_424] = 0;
                Gvar.var_81[Gvar.var_2488][0] = 0;
                Gvar.var_81[Gvar.var_2488][1] = 0;
                Gvar.var_81[Gvar.var_2488][2] = 0;
                await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
                Gvar.var_403 = "暗黒風水が発動した！";
                Gvar.enemy_list = Gvar.var_83[Gvar.var_421].Var0;
                await Func.func626(); // 敵リスト
                Gvar.var_402 = Gvar.var_421;
                Gvar.var_314 = Gvar.var_421;
                await Func.func638();
                Gvar.var_209 = Math.floor((Gvar.var_209 + 1) / 2);
                await Func.func705();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                return;
            }
        }
        return;
}

export {func547}
