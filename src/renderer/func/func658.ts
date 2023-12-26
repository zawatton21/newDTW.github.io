import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func658(this: any) {
        Adap.dbgprt(658);
        if (Gvar.var_83[Gvar.var_314].Var12 != 0 || Gvar.var_83[Gvar.var_314].Var13 != 0 || Gvar.var_83[Gvar.var_314].Var17 != 0) {
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 != 133 && Gvar.var_83[Gvar.var_314].Var0 != 118 && Gvar.var_83[Gvar.var_314].Var0 != 9 && Gvar.var_83[Gvar.var_314].Var0 != 10 && Gvar.var_83[Gvar.var_314].Var0 != 139 && Gvar.var_83[Gvar.var_314].Var0 != 153 && Gvar.var_83[Gvar.var_314].Var0 != 61) {
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 137) {
            Gvar.var_3042 = Gvar.var_314;
            if (Gvar.var_83[Gvar.var_314].Var3 > 10) {
                return;
            }
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "吉良「限界だッ！　押すねッ！」";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "吉良『今だッ』！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            if (Gvar.var_83[Gvar.var_3042].Var14 != 0) {
                Gvar.var_83[Gvar.var_3042].Var8 = 1;
                for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
        
                Adap.DSPLAY(162);
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    Gvar.var_585 = 3;
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_585 = 0;
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
                Gvar.comments_row1 = "「Ｓ・Ｈ・Ｉ・Ｔ！」";
                Gvar.comments_row2 = "";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func340(); // キー入力による選択処理
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "吉良のバイツァダストを防いだ！";
                Gvar.comments_row2a = "";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func340(); // キー入力による選択処理
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "吉良「…………な………";
                Gvar.comments_row2 = "このクソカスどもがァ――ッ！！」";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func340(); // キー入力による選択処理
                if (Gvar.nouryoku_disc_id == 111 || Gvar.nouryoku_disc_id == 398) {
                    Gvar.var_114 = 0;
                    Gvar.var_463 = 0;
                    Gvar.var_464 = 0;
                    Gvar.var_461 = 0;
                    Gvar.var_462 = 0;
                    Gvar.var_151 = 0;
                    Gvar.var_152 = 0;
                    Gvar.var_163 = 1;
                    Gvar.var_164 = 1;
            
                    Adap.DSPLAY(185);
                    Gvar.var_271 = 1;
                    Gvar.var_1493 = 1;
                    for (let cnt4 = 0; cnt4 < 20; ++cnt4) {
                        await Func.func337(); // メッセージ関係呼び出し
                        Gvar.var_1493++;
                    }
                    Gvar.var_271 = 0;
                    Gvar.var_1493 = 0;
                    Gvar.comments_row1 = "";
                    Gvar.comments_row2 = "";
                    Gvar.var_295 = "";
                    Gvar.comments_row1a = "";
                    Gvar.comments_row2a = "";
                    Gvar.var_298 = "";
                    Gvar.var_299 = 0;
                    if (Gvar.nouryoku_disc_id == 111) {
                        Gvar.comments_row1 = "『ザ・ワールド』！";
                        Gvar.comments_row2 = "";
                    }
                    if (Gvar.nouryoku_disc_id == 398) {
                        Gvar.comments_row1 = "『ｽﾀｰﾌﾟﾗﾁﾅ･ｻﾞ･ﾜｰﾙﾄﾞ』！";
                        Gvar.comments_row2 = "";
                    }
                    Gvar.var_198 = 1;
                    Gvar.var_300 = 0;
                    Gvar.var_25_x = Gvar.var_25[12]; // Ver0.1310で値修正 6 → 12
                    Gvar.var_26_x = Gvar.var_26[12]; // Ver0.1310で値修正 6 → 12
                    Gvar.var_27_x = Gvar.var_27[12]; // Ver0.1310で値修正 6 → 12
                    await Func.func047();
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    await Func.func340(); // キー入力による選択処理
                    Gvar.comments_row1 = Gvar.comments_row1a;
                    Gvar.comments_row2 = Gvar.comments_row2a;
                    Gvar.comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「そしてやれやれ";
                    Gvar.comments_row2a = "　　　　　間に合ったぜ……」";
                    Gvar.var_25_x = Gvar.var_25[12]; // Ver0.1310で値修正 6 → 12
                    Gvar.var_26_x = Gvar.var_26[12]; // Ver0.1310で値修正 6 → 12
                    Gvar.var_27_x = Gvar.var_27[12]; // Ver0.1310で値修正 6 → 12
                    await Func.func050();
                    Gvar.var_198 = 1;
                    Gvar.var_300 = 0;
                    await Func.func047();
                    for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                        await Func.func337(); // メッセージ関係呼び出し
                    }
                    await Func.func340(); // キー入力による選択処理
                    Gvar.var_153 = 2;
                }
                Gvar.var_83[Gvar.var_3042].Var8 = 0;
                return;
            }
            Adap.DSPLAY(165);
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_3043 = 0;
            if (Gvar.var_201 == Gvar.var_83[Gvar.var_3042].Var10 && Gvar.var_201 != 14) {
                Gvar.var_3043 = 1;
            }
            Gvar.var_3044 = Gvar.var_66;
            Gvar.var_3045 = Gvar.var_67;
            Gvar.var_3046 = Gvar.var_3044 - 1;
            if (Gvar.var_3046 < 0) {
                Gvar.var_3046 = 0;
            }
            Gvar.var_3047 = Gvar.var_3044 + 1;
            if (Gvar.var_3047 > Gvar.var_31 + 2) {
                Gvar.var_3047 = Gvar.var_31;
            }
            Gvar.var_3048 = Gvar.var_3045 + 1;
            if (Gvar.var_3048 > Gvar.var_34 + 2) {
                Gvar.var_3048 = Gvar.var_34;
            }
            Gvar.var_3049 = Gvar.var_3045 - 1;
            if (Gvar.var_3049 < 0) {
                Gvar.var_3049 = 0;
            }
            if (Gvar.var_83[Gvar.var_3042].Var1 >= Gvar.var_3046 && Gvar.var_83[Gvar.var_3042].Var1 <= Gvar.var_3047 && Gvar.var_83[Gvar.var_3042].Var2 >= Gvar.var_3049 && Gvar.var_83[Gvar.var_3042].Var2 <= Gvar.var_3048) {
                Gvar.var_3043 = 1;
            }
            Adap.DSPLAY(180);
            Gvar.var_1389 = Gvar.var_83[Gvar.var_3042].Var1;
            Gvar.var_1390 = Gvar.var_83[Gvar.var_3042].Var2;
            Gvar.var_271 = 1;
            Gvar.var_1388 = 1;
            if (Gvar.var_3043 == 1) {
                Gvar.var_389 = 2;
            }
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                Gvar.var_585 = 3;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_585 = 0;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1388++;
            }
            for (let cnt2 = 0; cnt2 < 7; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_1388++;
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_1388++;
            }
            Gvar.var_389 = 0;
            Gvar.var_271 = 0;
            Gvar.var_1388 = 0;
            if (Gvar.var_3043 == 1) {
                Gvar.var_177 = 8;
            }
            Gvar.var_3043 = 0;
            Adap.gsel(19);
            Adap.color(255, 255, 255);
            Adap.boxf(0, 0, 680, 680);
            Adap.gsel(0);
            Gvar.var_311 = 255;
            Gvar.var_312 = 1;
            Gvar.var_83[Gvar.var_3042].Var8 = 0;
            Gvar.var_2965 = 1;
            await Func.func669();
            Gvar.var_83[Gvar.var_3042].Var39 = Gvar.var_83[Gvar.var_3042].Var39 + 1;
            if (Gvar.var_83[Gvar.var_3042].Var39 == 1) {
                Gvar.var_83[Gvar.var_3042].Var39 = 2;
            }
            Gvar.enemy_list = 137;
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_3042].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_3042].Var39 + 10) / 10);
            if (Gvar.var_83[Gvar.var_3042].Var3 >= 999) {
                Gvar.var_83[Gvar.var_3042].Var3 = 999;
            }
            for (let cnt2 = 0; cnt2 < 51; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_311 = Gvar.var_311 - 5;
            }
            Gvar.var_312 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "「フ…フハ…　フハハハハハハハハハ";
            Gvar.comments_row2 = "　　戻ったぞ…」";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func340(); // キー入力による選択処理
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 143) {
            Gvar.var_3042 = Gvar.var_314;
            Gvar.var_83[Gvar.var_3042].Var8 = 0;
            Gvar.var_1912 = Gvar.var_673;
            Gvar.var_673 = Gvar.var_314;
            await Func.func595();
            Gvar.var_673 = Gvar.var_1912;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 153) {
            Gvar.var_3042 = Gvar.var_314;
            Gvar.var_83[Gvar.var_3042].Var8 = 1;
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「いっしょに行こうよォ～～ッ」";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_1396 = Gvar.var_66;
            Gvar.var_1397 = Gvar.var_67;
            Gvar.var_271 = 1;
            Gvar.var_1551 = 1;
            for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1551++;
            }
            Gvar.var_1551 = 0;
            Gvar.var_271 = 0;
            Gvar.var_389 = 2;
            Gvar.var_747 = 1;
            Adap.DSPLAY(105);
            Gvar.var_1212 = 1;
            Gvar.var_2244 = Gvar.var_209;
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2244;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2244;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 253;
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを喰らった";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_389 = 0;
            Gvar.var_83[Gvar.var_3042].Var8 = 0;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 61) { // No = 61 ヨーヨーマッ
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "うぉうッ！　臭いがッ！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_389 = 2;
    
            Adap.DSPLAY(105);
            Gvar.var_747 = 1;
            Gvar.var_1212 = 1;
            Gvar.var_2244 = Gvar.var_209;
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2244;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2244;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 252;
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを喰らった";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_389 = 0;
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 84 && Gvar.var_83[Gvar.var_314].Var3 <= 20) {
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_83[Gvar.var_314].Var0 = 117;
            Gvar.var_83[Gvar.var_314].Var15 = 1;
            Gvar.var_1584 = (Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1585 = (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_271 = 1;
            Gvar.var_1583 = 1;
    
            Adap.DSPLAY(168);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1583++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1583 = 0;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "キィイイイイイイ";
            Gvar.comments_row2a = "　　コエエエエエエ　エエエエエエエエ";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 9 || Gvar.var_83[Gvar.var_314].Var0 == 10) {
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 != 0 || Gvar.var_136 != 0 || Gvar.var_135 != 0 || Gvar.var_134 != 0) {
                return;
            }
            if (Gvar.equip_disc[201] == 0 && Gvar.var_83[Gvar.var_314].Var0 == 9) {
                Gvar.var_136 = 1;
        
                Adap.DSPLAY(123);
            }
            if (Gvar.equip_disc[201] == 0 && Gvar.var_83[Gvar.var_314].Var0 == 10) {
                Gvar.var_135 = 1;
        
                Adap.DSPLAY(123);
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            if (Gvar.equip_disc[201] == 0) {
                Gvar.comments_row1a = "肉片がくっついた！";
                Gvar.comments_row2a = "";
            }
            if (Gvar.equip_disc[201] == 1) {
                Gvar.comments_row1a = "肉片がくっつきそうになったが";
                Gvar.comments_row2a = "装備DISCによって防いだ";
            }
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 86) {
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 != 0 || Gvar.var_137 != 0) {
                return;
            }
            if (Gvar.equip_disc[201] == 0) {
                Gvar.var_137 = 1;
        
                Adap.DSPLAY(123);
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            if (Gvar.equip_disc[201] == 0) {
                Gvar.comments_row1a = "「憎き肉片」がくっついた！";
                Gvar.comments_row2a = "";
            }
            if (Gvar.equip_disc[201] == 1) {
                Gvar.comments_row1a = "「憎き肉片」がくっつきそうになったが";
                Gvar.comments_row2a = "装備DISCによって防いだ";
            }
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 139) {
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 != 0 || Gvar.var_178 != 0) {
                return;
            }
            if (Gvar.nouryoku_disc_id != 116 && Gvar.var_125 == 0) {
                Gvar.var_178 = 1;
        
                Adap.DSPLAY(120);
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            if (Gvar.nouryoku_disc_id != 116 && Gvar.var_125 == 0) {
                Gvar.comments_row1a = "オーノーだズラ！";
                Gvar.comments_row2a = "波紋を流されちまったズラ！";
            }
            if (Gvar.nouryoku_disc_id == 116 || Gvar.var_125 >= 1) {
                Gvar.comments_row1a = "波紋でやられそうになったが、";
                Gvar.comments_row2a = "波紋に強くなっていて平気だった。";
            }
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 138) {
            Gvar.var_1073 = Adap.rnd(5);
            if (Gvar.var_1073 != 0) {
                return;
            }
            Gvar.to_freeze = 1;
    
            Adap.DSPLAY(126);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            if (Gvar.nouryoku_disc_id != 109 && Gvar.shageki_disc_id != 404 && Gvar.nouryoku_disc_id != 202 && Gvar.var_173 == 0) {
                Gvar.var_1073 = Adap.rnd(3);
                if (Gvar.var_1073 == 0) {
                    Gvar.comments_row1a = "チェックが甘かったな…！";
                    Gvar.comments_row2a = "";
                }
                if (Gvar.var_1073 == 1) {
                    Gvar.comments_row1a = "お前はこのディオにとっての";
                    Gvar.comments_row2a = "モンキーなんだよ――――ッ！！";
                }
                if (Gvar.var_1073 == 2) {
                    Gvar.comments_row1a = "無駄　無駄　無駄―――っ！！";
                    Gvar.comments_row2a = "";
                }
            }
            if (Gvar.nouryoku_disc_id == 109 || Gvar.shageki_disc_id == 404 || Gvar.nouryoku_disc_id == 202) {
                Gvar.comments_row1a = "凍らされそうになったが、";
                Gvar.comments_row2a = "装備ｽﾀﾝﾄﾞのおかげで平気だった";
                Gvar.to_freeze = 0;
            }
            if (Gvar.var_173 == 1) {
                Gvar.comments_row1a = "凍らされそうになったが、";
                Gvar.comments_row2a = "冷たいのに強くなってて平気だった";
                Gvar.to_freeze = 0;
            }
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 109 && Gvar.var_83[Gvar.var_314].Var30 != 0) {
            Gvar.var_3050 = Adap.rnd(3);
            if (Gvar.var_3050 != 0) {
                return;
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "ﾜﾑｳの透明化が解除された。";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_83[Gvar.var_314].Var30 = 0;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 109 && Gvar.var_83[Gvar.var_314].Var29 == 0 && Gvar.var_83[Gvar.var_314].Var30 == 0) {
            if (Gvar.var_83[Gvar.var_314].Var3 > 10) {
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var23 != 0) {
                return;
            }
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "ﾜﾑｳ「ブツ　ブツ　ブツ";
            Gvar.comments_row2a = "　　　　ブツ　ブツ　ブツ」";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_411 = 1;
            await Func.func340(); // キー入力による選択処理
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
            }
    
            Adap.DSPLAY(235);
            Gvar.var_411 = 2;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
            }
            Gvar.var_411 = 3;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
            }
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 0;
            Gvar.var_83[Gvar.var_314].Var23 = 1;
            Gvar.var_83[Gvar.var_314].Var29 = 1;
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "ﾜﾑｳ「なまじ目が見えたから";
            Gvar.comments_row2a = "　　ヤツに虚をつかれた！」";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Adap.DSPLAY(142); // レベルアップした時の効果音
            Gvar.var_83[Gvar.var_314].Var39 = Gvar.var_83[Gvar.var_314].Var39 + 2;
            if (Gvar.var_83[Gvar.var_314].Var39 == 2) {
                Gvar.var_83[Gvar.var_314].Var39 = 3;
            }
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0;
            await Func.func626(); // 敵リスト
            Gvar.var_83[Gvar.var_314].Var3 = Math.floor(Gvar.enemy_hp * (Gvar.var_83[Gvar.var_314].Var39 + 10) / 10);
            if (Gvar.var_83[Gvar.var_314].Var3 >= 999) {
                Gvar.var_83[Gvar.var_314].Var3 = 999;
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "ﾜﾑｳはレベルが上がった！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 6) {
            if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                Gvar.var_83[Gvar.var_314].Var25 -= 1;
                if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                Gvar.var_83[Gvar.var_314].Var25 += 1;
                if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 49;
                }
            }
            Adap.DSPLAY(182);
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "恨みのパワーで";
            Gvar.comments_row2a = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙの攻撃力が上がった！";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                Gvar.var_411 = 1;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_411 = 2;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_411 = 3;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_411 = 4;
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 0;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 44 && Gvar.var_83[Gvar.var_314].Var10 != 13) {
            if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                Gvar.var_83[Gvar.var_314].Var25 -= 2;
                if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                Gvar.var_83[Gvar.var_314].Var25 += 2;
                if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 49;
                }
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "ﾚｯﾄﾞﾎｯﾄﾁﾘﾍﾟｯﾊﾟｰは反省している…";
            Gvar.comments_row2a = "電力を集中させ 攻撃力が上がった！";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_271 = 1;
            Gvar.var_1387 = 1;
    
            Adap.DSPLAY(120);
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1387 = Gvar.var_1387 + 1;
            }
            Gvar.var_271 = 0;
            Gvar.var_1387 = 0;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 14) {
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_411 = 1;
            if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                Gvar.var_83[Gvar.var_314].Var25 -= 2;
                if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                Gvar.var_83[Gvar.var_314].Var25 += 2;
                if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 49;
                }
            }
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Adap.DSPLAY(112);　// 刀の切れる音 or 強化した時のシャキーン 効果音
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 4;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 1;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「今ので覚えたぞ・・・！」";
            Gvar.comments_row2a = "床屋のｶｰﾝの攻撃力が上がった！";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_314].Var21 = 0;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 129) {
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_411 = 1;
            if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                Gvar.var_83[Gvar.var_314].Var25 -= 4;
                if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                Gvar.var_83[Gvar.var_314].Var25 += 4;
                if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 49;
                }
            }
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
    
            Adap.DSPLAY(112);　// 刀の切れる音 or 強化した時のシャキーン 効果音
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 4;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 1;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「今ので覚えたぞ・・・！」";
            Gvar.comments_row2a = "ｱﾇﾋﾞｽﾎﾟﾙﾅﾚﾌの攻撃力が上がった！";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_314].Var21 = 0;
        }
        // Gvar.enemy_list == 120 承太郎
        if (Gvar.var_83[Gvar.var_314].Var0 == 120) {
            if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                Gvar.var_83[Gvar.var_314].Var25 -= 5;
                if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var25 < 50) {
                Gvar.var_83[Gvar.var_314].Var25 += 5;
                if (Gvar.var_83[Gvar.var_314].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_314].Var25 = 49;
                }
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1a = "承太郎は何かメモをしている…";
            Gvar.comments_row2a = "「忘れっぽいんでな…」";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Adap.DSPLAY(182);
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "承太郎の攻撃力が上がった！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 161) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row2 = "　　　バルバルバルバルバルバル";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "「これがッ！」";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_411 = 1;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            for (let cnt2 = 0; cnt2 < 7; ++cnt2) {
                Gvar.var_411 = 2;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_411 = 3;
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.comments_row1 = "「これがッ！」　　「これがッ！」";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_411 = 4;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 5;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 6;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 7;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_314].Var0 = 162;
            Gvar.var_411 = 1;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 2;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 3;
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 4;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 5;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.comments_row1 = "「これがッ！」　　「これがッ！」";
            Gvar.comments_row2 = "「これが【バオー】だッ！」";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_411 = 7;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_411 = 6;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
            }
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 0;
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "ウオオオオオオオオオ――――ム！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func050();
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 118) {
            Gvar.var_3051 = Adap.rnd(5);
            if (Gvar.var_3051 != 0) {
                return;
            }
            Gvar.var_3052 = Gvar.var_83[Gvar.var_314].Var1;
            Gvar.var_3053 = Gvar.var_83[Gvar.var_314].Var2;
            if (Gvar.var_71[Gvar.var_3052][Gvar.var_3053] == 13) {
                return;
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「このド畜生がッ！！」";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_83[Gvar.var_314].Var30 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_411 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_83[Gvar.var_314].Var0 = 133;
            Gvar.var_83[Gvar.var_314].Var31 = 2;
            Gvar.var_83[Gvar.var_314].Var23 = 0;
            Gvar.var_411 = 8;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 7;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 6;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 5;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 4;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 133) {
            Gvar.var_3051 = Adap.rnd(3);
            if (Gvar.var_3051 == 0) {
                return;
            }
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_411 = 1;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「暗黒空間にバラ撒いてやるッ！」";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 4;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 5;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 6;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 7;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 8;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 0;
            Gvar.var_83[Gvar.var_314].Var0 = 118;
            Gvar.var_83[Gvar.var_314].Var31 = 3;
            Gvar.var_83[Gvar.var_314].Var23 = 1;
            Gvar.var_83[Gvar.var_314].Var21 = 1;
            Gvar.var_411 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_314].Var21 = 0;
            Gvar.var_83[Gvar.var_314].Var30 = 1;
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 121) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            Gvar.var_3054 = Gvar.var_83[Gvar.var_314].Var5;
            Gvar.var_83[Gvar.var_314].Var5 = 2;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「これがおれの本体のハンサム顔だ！」";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_83[Gvar.var_314].Var0 = 9;
            Gvar.var_1378 = (Gvar.var_83[Gvar.var_314].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1379 = (Gvar.var_83[Gvar.var_314].Var2 - Gvar.var_67 + 4) * 40 - 10;
            Gvar.var_271 = 1;
            Gvar.var_1377 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1377++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1377 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_3054;
            return;
        }
        return;
}

export {func658}
