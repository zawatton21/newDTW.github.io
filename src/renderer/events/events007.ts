import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ディアボロの試練開放イベント(岸辺露伴がヤギを追いかけるイベント)
async function func155(this: any) {
        Adap.dbgprt(155);
        Gvar.ivents_flag = 0; // イベントフラグ初期化
        Gvar.var_759 = 1;
        Gvar.var_760 = 4;
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_761 = Gvar.var_97;
        Gvar.var_82[0][0] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 142;
        Gvar.var_83[Gvar.var_97].Var1 = 0;
        Gvar.var_83[Gvar.var_97].Var2 = 0;
        Gvar.var_83[Gvar.var_97].Var3 = 999;
        Gvar.var_83[Gvar.var_97].Var4 = 0;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var10 = 1;
        Gvar.var_83[Gvar.var_97].Var31 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_762 = Gvar.var_97;
        Gvar.var_82[0][1] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 166;
        Gvar.var_83[Gvar.var_97].Var1 = 0;
        Gvar.var_83[Gvar.var_97].Var2 = 1;
        Gvar.var_83[Gvar.var_97].Var3 = 999;
        Gvar.var_83[Gvar.var_97].Var4 = 0;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var10 = 1;
        Gvar.var_83[Gvar.var_97].Var31 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func335();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_217 = 1;
        Adap.DSPLAY(228);
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_83[Gvar.var_762].Var6 = 1;
        Gvar.var_83[Gvar.var_762].Var1 = 10;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[0][0] = 0;
        Gvar.var_82[10][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 11;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[10][8] = 0;
        Gvar.var_82[11][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 12;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[11][8] = 0;
        Gvar.var_82[12][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 13;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[12][8] = 0;
        Gvar.var_82[13][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 14;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[13][8] = 0;
        Gvar.var_82[14][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 14;
        Gvar.var_83[Gvar.var_762].Var2 = 9;
        Gvar.var_82[14][8] = 0;
        Gvar.var_82[14][9] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 2;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 1;
        Gvar.var_83[Gvar.var_762].Var1 = 15;
        Gvar.var_83[Gvar.var_762].Var2 = 9;
        Gvar.var_82[14][9] = 0;
        Gvar.var_82[15][9] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 2;
        Gvar.var_83[Gvar.var_762].Var1 = 16;
        Gvar.var_83[Gvar.var_762].Var2 = 9;
        Gvar.var_82[15][9] = 0;
        Gvar.var_82[16][9] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 3;
        Gvar.var_83[Gvar.var_762].Var1 = 16;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[16][9] = 0;
        Gvar.var_82[16][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 6;
        Gvar.var_83[Gvar.var_762].Var1 = 16;
        Gvar.var_83[Gvar.var_762].Var2 = 7;
        Gvar.var_82[16][8] = 0;
        Gvar.var_82[16][7] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 9;
        Gvar.var_83[Gvar.var_762].Var1 = 15;
        Gvar.var_83[Gvar.var_762].Var2 = 7;
        Gvar.var_82[16][7] = 0;
        Gvar.var_82[15][7] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 4;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 8;
        Gvar.var_83[Gvar.var_762].Var1 = 15;
        Gvar.var_83[Gvar.var_762].Var2 = 6;
        Gvar.var_82[15][7] = 0;
        Gvar.var_82[15][6] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 8;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_83[Gvar.var_762].Var1 = 15;
        Gvar.var_83[Gvar.var_762].Var2 = 5;
        Gvar.var_82[15][6] = 0;
        Gvar.var_82[15][5] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_760 = 3;

        Adap.DSPLAY(103); // 殴った時の効果音
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_760 = 2;
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_760 = 1;
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_760 = 0;
        Gvar.var_83[Gvar.var_762].Var1 = 0;
        Gvar.var_83[Gvar.var_762].Var2 = 0;
        Gvar.var_82[15][5] = 0;
        Gvar.var_82[0][0] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[Gvar.var_762].Var6 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「？」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func340(); // キー入力による選択処理
        Gvar.var_198 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "露伴「まて――ッ！」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_83[Gvar.var_761].Var6 = 1;
        Gvar.var_83[Gvar.var_761].Var1 = 10;
        Gvar.var_83[Gvar.var_761].Var2 = 8;
        Gvar.var_82[0][0] = 0;
        Gvar.var_82[10][8] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_761].Var1 = 11;
        Gvar.var_83[Gvar.var_761].Var2 = 8;
        Gvar.var_82[10][8] = 0;
        Gvar.var_82[11][8] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_761].Var1 = 12;
        Gvar.var_83[Gvar.var_761].Var2 = 8;
        Gvar.var_82[11][8] = 0;
        Gvar.var_82[12][8] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_761].Var1 = 13;
        Gvar.var_83[Gvar.var_761].Var2 = 8;
        Gvar.var_82[12][8] = 0;
        Gvar.var_82[13][8] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_761].Var1 = 14;
        Gvar.var_83[Gvar.var_761].Var2 = 8;
        Gvar.var_82[13][8] = 0;
        Gvar.var_82[14][8] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_761].Var1 = 14;
        Gvar.var_83[Gvar.var_761].Var2 = 9;
        Gvar.var_82[14][8] = 0;
        Gvar.var_82[14][9] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 2;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 1;
        Gvar.var_83[Gvar.var_761].Var1 = 15;
        Gvar.var_83[Gvar.var_761].Var2 = 9;
        Gvar.var_82[14][9] = 0;
        Gvar.var_82[15][9] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 2;
        Gvar.var_83[Gvar.var_761].Var1 = 16;
        Gvar.var_83[Gvar.var_761].Var2 = 9;
        Gvar.var_82[15][9] = 0;
        Gvar.var_82[16][9] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 3;
        Gvar.var_83[Gvar.var_761].Var1 = 16;
        Gvar.var_83[Gvar.var_761].Var2 = 8;
        Gvar.var_82[16][9] = 0;
        Gvar.var_82[16][8] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 6;
        Gvar.var_83[Gvar.var_761].Var1 = 16;
        Gvar.var_83[Gvar.var_761].Var2 = 7;
        Gvar.var_82[16][8] = 0;
        Gvar.var_82[16][7] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 9;
        Gvar.var_83[Gvar.var_761].Var1 = 15;
        Gvar.var_83[Gvar.var_761].Var2 = 7;
        Gvar.var_82[16][7] = 0;
        Gvar.var_82[15][7] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 4;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 8;
        Gvar.var_83[Gvar.var_761].Var1 = 15;
        Gvar.var_83[Gvar.var_761].Var2 = 6;
        Gvar.var_82[15][7] = 0;
        Gvar.var_82[15][6] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 8;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 8;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "露伴「くそッ！あと一歩のところで…」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.var_83[Gvar.var_761].Var5 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[Gvar.var_761].Var1 = 15;
        Gvar.var_83[Gvar.var_761].Var2 = 7;
        Gvar.var_82[15][6] = 0;
        Gvar.var_82[15][7] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 2;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 8;
        Gvar.var_83[Gvar.var_761].Var1 = 16;
        Gvar.var_83[Gvar.var_761].Var2 = 7;
        Gvar.var_82[15][7] = 0;
        Gvar.var_82[16][7] = Gvar.var_761;
        Gvar.var_83[Gvar.var_761].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 9;
        Gvar.var_83[Gvar.var_761].Var5 = 2;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_83[Gvar.var_761].Var6 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「？？？」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func336();
        Gvar.var_217 = 0;
        return;
}

export {func155}
