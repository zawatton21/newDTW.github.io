import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 304 ウェザーリポートの発動処理
async function item304(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "発動能力がパワーアップしている！";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
        }
        Adap.gsel(19);
        Adap.color(1, 1, 1);
        Adap.boxf(Gvar.left = 0, Gvar.top1 = 0, Gvar.right = 680, Gvar.bottom = 680);
        Adap.gsel(0);
        Gvar.var_311 = 0;
        Adap.DSPLAY(178);
        Gvar.var_312 = 1;
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_311 = Gvar.var_311 + 5;
        }
        Gvar.var_174 = 1;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "雨が降ってきた。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_1594 = 1;
        Gvar.var_271 = 1;
        for (let cnt2 = 0; cnt2 < 40; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_403 = "雷が落ちた！";
        Gvar.var_2217 = 1;
        Gvar.var_2194 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            Gvar.var_2218 = Gvar.var_565 * 3;
            Gvar.var_2219 = Adap.rnd(3);
            Gvar.var_2218 = Gvar.var_2218 + Gvar.var_2219;
            if (Gvar.var_172 >= 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.var_2218 = Gvar.var_2218 * 2;
            }
            if (Gvar.var_2194 != Gvar.var_124) {
                Gvar.var_2220 = 0;
                if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var10 == Gvar.var_201 && Gvar.var_201 > 0 && Gvar.var_201 <= 12) {
                    Gvar.var_402 = Gvar.var_2194;
                    Gvar.var_209 = Gvar.var_2218;
                    await Func.func518();
                    await Func.func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    Gvar.var_2220 = 1;
                }
                if (Gvar.var_2220 == 0) {
                    Gvar.var_1993 = Gvar.var_66 - 1;
                    if (Gvar.var_1993 < 0) {
                        Gvar.var_1993 = 0;
                    }
                    Gvar.var_1994 = Gvar.var_66 + 1;
                    if (Gvar.var_1994 > Gvar.var_33) {
                        Gvar.var_1994 = Gvar.var_33;
                    }
                    Gvar.var_1995 = Gvar.var_67 + 1;
                    if (Gvar.var_1995 > Gvar.var_34) {
                        Gvar.var_1995 = Gvar.var_34;
                    }
                    Gvar.var_1996 = Gvar.var_67 - 1;
                    if (Gvar.var_1996 < 0) {
                        Gvar.var_1996 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                }
                if (Gvar.var_2220 == 0 && Gvar.var_201 <= 12 && Gvar.var_201 != 0) {
                    Gvar.var_2221 = Gvar.var_83[Gvar.var_2194].Var1;
                    Gvar.var_2222 = Gvar.var_83[Gvar.var_2194].Var2;
                    Gvar.var_2223 = Gvar.var_83[Gvar.var_2194].Var1 - 1;
                    if (Gvar.var_2223 < 0) {
                        Gvar.var_2223 = 0;
                    }
                    Gvar.var_2224 = Gvar.var_83[Gvar.var_2194].Var1 + 1;
                    if (Gvar.var_2224 > Gvar.var_33) {
                        Gvar.var_2224 = Gvar.var_33;
                    }
                    Gvar.var_2225 = Gvar.var_83[Gvar.var_2194].Var2 + 1;
                    if (Gvar.var_2225 > Gvar.var_34) {
                        Gvar.var_2225 = Gvar.var_34;
                    }
                    Gvar.var_2226 = Gvar.var_83[Gvar.var_2194].Var2 - 1;
                    if (Gvar.var_2226 < 0) {
                        Gvar.var_2226 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2223][Gvar.var_2222] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                        Gvar.var_402 = Gvar.var_2194;
                        Gvar.var_209 = Gvar.var_2218;
                        await Func.func518();
                        await Func.func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                        Gvar.var_2220 = 1;
                    }
                }
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_2217 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "　――――　雨があがった　――――";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_1594 = 0;
        Gvar.var_271 = 0;
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_311 = Gvar.var_311 - 5;
        }
        Gvar.var_311 = 0;
        Gvar.var_312 = 0;
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "地面が洗い流され、";
        Gvar.comments_row2a = "罠が見えるようになった。";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        await Func.func047();
        Gvar.var_121 = 1; // Gvar.var_121 罠が見えるようになるフラグON
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        await Func.func340(); // キー入力による選択処理
        Gvar.var_2303 = 0;
        Gvar.var_2304 = 0;
        Gvar.var_2305 = 0;
        Gvar.var_2205 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_336; ++cnt2) {
            if (Gvar.var_78[Gvar.var_2205].Var0 == 651) {
                Gvar.var_78[Gvar.var_2205].Var0 = 653;
                Gvar.var_2303 = 1;
            }
            if (Gvar.var_78[Gvar.var_2205].Var0 == 650) {
                Gvar.var_78[Gvar.var_2205].Var0 = 651;
                Gvar.var_2303 = 1;
            }
            Gvar.var_2205++;
        }
        Gvar.var_2205 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_224; ++cnt2) {
            if (Gvar.var_233[Gvar.var_2205].Var0 == 401) {
                Gvar.var_2304 = 1;
            }
            Gvar.var_2205++;
        }
        Gvar.var_2205 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_2205].Var0 == 115 || Gvar.var_83[Gvar.var_2205].Var0 == 27 || Gvar.var_83[Gvar.var_2205].Var0 == 21) {
                Gvar.var_2305 = 1;
                Gvar.var_83[Gvar.var_2205].Var39 = Gvar.var_83[Gvar.var_2205].Var39 + 1;
                if (Gvar.var_83[Gvar.var_2205].Var39 == 1) {
                    Gvar.var_83[Gvar.var_2205].Var39 = 2;
                }
                Gvar.enemy_list = Gvar.var_83[Gvar.var_2205].Var0;
                await Func.func626(); // 敵リスト
                Gvar.var_83[Gvar.var_2205].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_2205].Var39 + 10) / 10);
                if (Gvar.var_83[Gvar.var_2205].Var3 >= 999) {
                    Gvar.var_83[Gvar.var_2205].Var3 = 999;
                }
            }
            Gvar.var_2205++;
        }
        if (Gvar.var_2304 == 1) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "フー・ファイターズの威力がアップした！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func050();
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
        }
        if (Gvar.var_2303 == 1) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "地面のカエルが成長したようだ。";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func050();
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
        }
        if (Gvar.var_2305 == 1) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "パワーアップした敵がいるようだ…";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func050();
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item304}
