import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ペッシに話しかけて釣りするを選んだ際の動作処理
async function func754(this: any) {
        Adap.dbgprt(754);
        Gvar.var_191 = 1;
        Gvar.var_1437 = Gvar.var_83[Gvar.var_3072].Var1;
        Gvar.var_1438 = Gvar.var_83[Gvar.var_3072].Var2;
        Gvar.var_1505 = 0;
        Gvar.var_3138 = Adap.rnd(8);
        if (Gvar.var_3138 == 0 || Gvar.var_3138 == 1 || Gvar.var_3138 == 2 || Gvar.var_3138 == 3 || Gvar.var_3138 == 4) {
            Gvar.var_1505 = 1;
        }
        if (Gvar.var_3138 == 5) {
            Gvar.var_1505 = 2;
        }
        if (Gvar.var_3138 == 6 || Gvar.var_3138 == 7) {
            Gvar.var_1505 = 3;
        }
        if (Gvar.var_1505 == 1) {
            Gvar.var_2171 = 0;
            Gvar.var_3139 = Gvar.var_97 + 1;
            for (let cnt2 = 0; cnt2 < 1000; ++cnt2) {
                Gvar.var_3140 = Adap.rnd(Gvar.var_3139);
                if (Gvar.var_3140 != 0 && Gvar.var_83[Gvar.var_3140].Var0 != 0 && Gvar.var_83[Gvar.var_3140].Var10 != Gvar.var_83[Gvar.var_3072].Var10 && Gvar.var_83[Gvar.var_3140].Var31 != 4 && Gvar.var_83[Gvar.var_3140].Var31 != 5) {
                    Gvar.var_1508 = Gvar.var_83[Gvar.var_3140].Var1;
                    Gvar.var_1509 = Gvar.var_83[Gvar.var_3140].Var2;
                    Gvar.var_2171 = Gvar.var_3140;
                    break;
                }
            }
        }
        if (Gvar.var_1505 == 2) {
            Gvar.var_97 = Gvar.var_97 + 1;
            Gvar.var_2171 = Gvar.var_97;
            Gvar.var_83[Gvar.var_2171].Var0 = 123;
            Gvar.var_83[Gvar.var_2171].Var31 = 9;
            Gvar.var_83[Gvar.var_2171].Var5 = 2;
            Gvar.var_83[Gvar.var_2171].Var3 = 60;
        }
        if (Gvar.var_1505 <= 2 && Gvar.var_2171 != 0) {
            Gvar.var_1385 = Gvar.var_2171;
            Gvar.var_1386 = Gvar.var_83[Gvar.var_1385].Var0;
            Gvar.var_2164 = Gvar.var_1437;
            Gvar.var_2165 = Gvar.var_1438;
            Gvar.var_2166 = Gvar.var_2164 - 1;
            if (Gvar.var_2166 < 0) {
                Gvar.var_2166 = 0;
            }
            Gvar.var_2167 = Gvar.var_2164 + 1;
            if (Gvar.var_2167 > Gvar.var_33) {
                Gvar.var_2167 = Gvar.var_33;
            }
            Gvar.var_2168 = Gvar.var_2165 + 1;
            if (Gvar.var_2168 > Gvar.var_34) {
                Gvar.var_2168 = Gvar.var_34;
            }
            Gvar.var_2169 = Gvar.var_2165 - 1;
            if (Gvar.var_2169 < 0) {
                Gvar.var_2169 = 0;
            }
            Gvar.var_2170 = 0;
            if (Gvar.var_2170 == 0 && Gvar.var_65[Gvar.var_2164][Gvar.var_2168] == 0 && Gvar.var_82[Gvar.var_2164][Gvar.var_2168] == 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2168] != 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2168] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2164;
                Gvar.var_1513 = Gvar.var_2168;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_65[Gvar.var_2166][Gvar.var_2165] == 0 && Gvar.var_82[Gvar.var_2166][Gvar.var_2165] == 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2165] != 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2165] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2166;
                Gvar.var_1513 = Gvar.var_2165;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_65[Gvar.var_2167][Gvar.var_2165] == 0 && Gvar.var_82[Gvar.var_2167][Gvar.var_2165] == 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2165] != 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2165] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2167;
                Gvar.var_1513 = Gvar.var_2165;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_65[Gvar.var_2164][Gvar.var_2169] == 0 && Gvar.var_82[Gvar.var_2164][Gvar.var_2169] == 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2169] != 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2169] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2164;
                Gvar.var_1513 = Gvar.var_2169;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_65[Gvar.var_2166][Gvar.var_2168] == 0 && Gvar.var_82[Gvar.var_2166][Gvar.var_2168] == 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2168] != 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2168] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2166;
                Gvar.var_1513 = Gvar.var_2168;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_65[Gvar.var_2167][Gvar.var_2168] == 0 && Gvar.var_82[Gvar.var_2167][Gvar.var_2168] == 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2168] != 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2168] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2167;
                Gvar.var_1513 = Gvar.var_2168;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_65[Gvar.var_2166][Gvar.var_2169] == 0 && Gvar.var_82[Gvar.var_2166][Gvar.var_2169] == 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2169] != 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2169] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2166;
                Gvar.var_1513 = Gvar.var_2169;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_65[Gvar.var_2167][Gvar.var_2169] == 0 && Gvar.var_82[Gvar.var_2167][Gvar.var_2169] == 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2169] != 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2169] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2167;
                Gvar.var_1513 = Gvar.var_2169;
            }
            if (Gvar.var_1505 == 2 && Gvar.var_2170 == 0) {
                Gvar.var_83[Gvar.var_2171].Var0 = 0;
                Gvar.var_83[Gvar.var_2171].Var31 = 0;
                Gvar.var_83[Gvar.var_2171].Var3 = 0;
                Gvar.var_97 = Gvar.var_97 - 1;
            }
        }
        if (Gvar.var_1505 == 3) {
            Gvar.var_2171 = 0;
            Gvar.var_3141 = Gvar.var_336 + 1;
            for (let cnt2 = 0; cnt2 < 1000; ++cnt2) {
                Gvar.var_3140 = Adap.rnd(Gvar.var_3141);
                if (Gvar.var_3140 != 0 && Gvar.var_78[Gvar.var_3140].Var0 != 0 && Gvar.var_78[Gvar.var_3140].Var9 != Gvar.var_83[Gvar.var_3072].Var10) {
                    Gvar.var_1508 = Gvar.var_78[Gvar.var_3140].Var1;
                    Gvar.var_1509 = Gvar.var_78[Gvar.var_3140].Var2;
                    Gvar.var_2171 = Gvar.var_3140;
                    break;
                }
            }
        }
        if (Gvar.var_1505 == 3 && Gvar.var_2171 != 0) {
            Gvar.var_1385 = Gvar.var_2171;
            Gvar.var_1386 = Gvar.var_78[Gvar.var_1385].Var0;
            Gvar.var_1249 = Gvar.var_78[Gvar.var_1385].Var13;
            Gvar.var_2164 = Gvar.var_1437;
            Gvar.var_2165 = Gvar.var_1438;
            Gvar.var_2166 = Gvar.var_2164 - 1;
            if (Gvar.var_2166 < 0) {
                Gvar.var_2166 = 0;
            }
            Gvar.var_2167 = Gvar.var_2164 + 1;
            if (Gvar.var_2167 > Gvar.var_33) {
                Gvar.var_2167 = Gvar.var_33;
            }
            Gvar.var_2168 = Gvar.var_2165 + 1;
            if (Gvar.var_2168 > Gvar.var_34) {
                Gvar.var_2168 = Gvar.var_34;
            }
            Gvar.var_2169 = Gvar.var_2165 - 1;
            if (Gvar.var_2169 < 0) {
                Gvar.var_2169 = 0;
            }
            Gvar.var_2170 = 0;
            if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2164][Gvar.var_2168] == 0 && Gvar.var_80[Gvar.var_2164][Gvar.var_2168] == 0 && Gvar.var_73[Gvar.var_2164][Gvar.var_2168] == 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2168] != 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2168] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2164;
                Gvar.var_1513 = Gvar.var_2168;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2166][Gvar.var_2165] == 0 && Gvar.var_80[Gvar.var_2166][Gvar.var_2165] == 0 && Gvar.var_73[Gvar.var_2166][Gvar.var_2165] == 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2165] != 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2165] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2166;
                Gvar.var_1513 = Gvar.var_2165;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2167][Gvar.var_2165] == 0 && Gvar.var_80[Gvar.var_2167][Gvar.var_2165] == 0 && Gvar.var_73[Gvar.var_2167][Gvar.var_2165] == 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2165] != 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2165] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2167;
                Gvar.var_1513 = Gvar.var_2165;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2164][Gvar.var_2169] == 0 && Gvar.var_80[Gvar.var_2164][Gvar.var_2169] == 0 && Gvar.var_73[Gvar.var_2164][Gvar.var_2169] == 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2169] != 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2169] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2164;
                Gvar.var_1513 = Gvar.var_2169;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2166][Gvar.var_2168] == 0 && Gvar.var_80[Gvar.var_2166][Gvar.var_2168] == 0 && Gvar.var_73[Gvar.var_2166][Gvar.var_2168] == 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2168] != 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2168] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2166;
                Gvar.var_1513 = Gvar.var_2168;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2167][Gvar.var_2168] == 0 && Gvar.var_80[Gvar.var_2167][Gvar.var_2168] == 0 && Gvar.var_73[Gvar.var_2167][Gvar.var_2168] == 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2168] != 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2168] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2167;
                Gvar.var_1513 = Gvar.var_2168;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2166][Gvar.var_2169] == 0 && Gvar.var_80[Gvar.var_2166][Gvar.var_2169] == 0 && Gvar.var_73[Gvar.var_2166][Gvar.var_2169] == 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2169] != 0 && Gvar.var_71[Gvar.var_2166][Gvar.var_2169] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2166;
                Gvar.var_1513 = Gvar.var_2169;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2167][Gvar.var_2169] == 0 && Gvar.var_80[Gvar.var_2167][Gvar.var_2169] == 0 && Gvar.var_73[Gvar.var_2167][Gvar.var_2169] == 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2169] != 0 && Gvar.var_71[Gvar.var_2167][Gvar.var_2169] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2167;
                Gvar.var_1513 = Gvar.var_2169;
            }
            if (Gvar.var_2170 == 0 && Gvar.var_77[Gvar.var_2164][Gvar.var_2165] == 0 && Gvar.var_80[Gvar.var_2164][Gvar.var_2165] == 0 && Gvar.var_73[Gvar.var_2164][Gvar.var_2165] == 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2165] != 0 && Gvar.var_71[Gvar.var_2164][Gvar.var_2165] != 13) {
                Gvar.var_2170 = 1;
                Gvar.var_1512 = Gvar.var_2164;
                Gvar.var_1513 = Gvar.var_2165;
            }
        }
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
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
        Gvar.comments_row1 = "ﾍﾟｯｼ「ビーチ・ボーイッ」！！";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
        Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
        Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
        await Func.func047();
        Gvar.var_83[Gvar.var_3072].Var21 = 1;
        Gvar.var_411 = 1;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_271 = 1;
        Gvar.var_1500 = 1;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_1500++;
        }
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
        }
        Gvar.var_1500 = 5;
        Gvar.var_411 = 2;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
        }
        Gvar.var_1500 = 6;
        Gvar.var_1501 = 102;
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_1501 = Gvar.var_1501 - 1;
        }
        Gvar.var_1501 = 5;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
        }
        if (Gvar.var_1505 <= 2 && Gvar.var_2170 != 0) {
            Gvar.var_83[Gvar.var_2171].Var8 = 1;
            Gvar.var_83[Gvar.var_2171].Var12 = 0;
            Gvar.var_83[Gvar.var_2171].Var13 = 0;
        }
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾍﾟｯｼ「きたッ！」";
        Gvar.comments_row2a = "";
        await Func.func047();
        await Func.func050();
        Gvar.var_83[Gvar.var_3072].Var21 = 1;
        for (let cnt1 = 0; cnt1 < 28; ++cnt1) {
            Gvar.var_411 = 2;
            Gvar.var_1501++;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 3;
            Gvar.var_1501++;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
        }
        if (Gvar.var_2170 == 0 || Gvar.var_2171 == 0) {
            Gvar.var_1501 = 100;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                Gvar.var_411 = 2;
                Gvar.var_1501++;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
            }
            Gvar.var_271 = 0;
            Gvar.var_1501 = 0;
            Gvar.var_1500 = 0;
            Gvar.var_411 = 0;
            Gvar.var_83[Gvar.var_3072].Var21 = 0;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "ﾍﾟｯｼ「ちっ！　おしい…」";
            Gvar.comments_row2a = "";
            await Func.func047();
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_217 = 1;
            await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾍﾟｯｼ「かかったァ――ッ！」";
        if (Gvar.var_1505 == 2) {
            Gvar.comments_row1a = "ﾍﾟｯｼ「大物釣り上げたァ――――ッ！！」";
        }
        Gvar.comments_row2a = "";
        await Func.func047();
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 22; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1501++;
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
        }
        Gvar.var_411 = 0;
        Gvar.var_83[Gvar.var_3072].Var21 = 0;
        Gvar.var_271 = 0;
        Gvar.var_1501 = 0;
        Gvar.var_1500 = 0;
        if (Gvar.var_1505 <= 2) {
            Gvar.var_82[Gvar.var_1508][Gvar.var_1509] = 0;
            Gvar.var_82[Gvar.var_1512][Gvar.var_1513] = Gvar.var_2171;
            Gvar.var_83[Gvar.var_2171].Var1 = Gvar.var_1512;
            Gvar.var_83[Gvar.var_2171].Var2 = Gvar.var_1513;
            Gvar.var_83[Gvar.var_2171].Var10 = Gvar.var_71[Gvar.var_1512][Gvar.var_1513];
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        if (Gvar.var_1505 == 3) {
            Gvar.var_77[Gvar.var_1508][Gvar.var_1509] = 0;
            Gvar.var_77[Gvar.var_1512][Gvar.var_1513] = Gvar.var_2171;
            Gvar.var_78[Gvar.var_2171].Var1 = Gvar.var_1512;
            Gvar.var_78[Gvar.var_2171].Var2 = Gvar.var_1513;
            Gvar.var_78[Gvar.var_2171].Var9 = Gvar.var_71[Gvar.var_1512][Gvar.var_1513];
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_1505 <= 2) {
            Gvar.var_83[Gvar.var_2171].Var8 = 0;
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func754}
