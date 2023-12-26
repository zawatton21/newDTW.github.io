import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Class from '../classes'
import * as Map from '../map/index'
import * as Dung from '../dungeon/index'
import * as Even from '../events/index'

// オープニング (5部最終決戦 ジョルノ達との戦いの場面)
async function func150(this: any) {
        Adap.dbgprt(150);
        await Func.func233();
        await Even.func158(); // オープニング戦マップ配置処理
        await Func.func108(); // BGM用mp3ファイル再生停止
        Gvar.var_595 = 3; // Gvar.dungeon_number = 0 での場所確認。3 = ローマ・ティベレ河
        await Func.func076(); // 各ダンジョンの絵文字読込処理
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            await Func.func339();
        }
        Gvar.var_350 = 100;
        Gvar.var_567 = 100;
        Gvar.var_68 = 1;
        Gvar.var_217 = 1;
        Adap.DSPLAY(178);
        Gvar.var_271 = 1;
        Gvar.var_594 = 1;
        for (let cnt1 = 0; cnt1 < 40; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_594 = Gvar.var_594 + 1;
        }
        Gvar.var_271 = 0;
        Gvar.var_594 = 0;
        await Func.func335();
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「おまえには 死んだことを";
        Gvar.comments_row2 = "　　　後悔する時間をも…";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「与えんッ！！」";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_83[1].Var6 = 1;
        Gvar.var_83[1].Var1 = 29;
        Gvar.var_83[1].Var2 = 10;
        Gvar.var_82[28][10] = 0;
        Gvar.var_82[29][10] = 1;
        Gvar.var_83[1].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[1].Var1 = 30;
        Gvar.var_83[1].Var2 = 10;
        Gvar.var_82[29][10] = 0;
        Gvar.var_82[30][10] = 1;
        Gvar.var_83[1].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[1].Var1 = 31;
        Gvar.var_83[1].Var2 = 10;
        Gvar.var_82[30][10] = 0;
        Gvar.var_82[31][10] = 1;
        Gvar.var_83[1].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[1].Var6 = 0;
        Gvar.var_742 = 1;
        Gvar.var_83[1].Var7 = 1;
        Gvar.var_743 = 1; //スタンド像付与フラグON
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_151 = 1;
        Gvar.var_152 = 2;

        Adap.DSPLAY(185);
        Gvar.var_271 = 1;
        Gvar.var_531 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_531++;
            Gvar.var_742 = 3;
        }
        Gvar.var_271 = 0;
        Gvar.var_531 = 0;
        Gvar.var_742 = 0;
        Gvar.var_83[1].Var7 = 0;
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        Gvar.var_83[1].Var5 = 4;
        Gvar.var_83[5].Var0 = 49;
        Gvar.var_83[5].Var1 = 30;
        Gvar.var_83[5].Var2 = 10;
        Gvar.var_82[30][10] = 5;
        Gvar.var_83[5].Var5 = 6;
        Gvar.var_271 = 1;
        Gvar.var_744 = 1;
        Gvar.var_745 = 5 * 40 + 20;
        Gvar.var_746 = 3 * 40 - 10;
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「えっ」";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            Gvar.var_744++;
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_83[5].Var5 = 4;
        Gvar.var_83[6].Var0 = 49;
        Gvar.var_83[6].Var1 = 29;
        Gvar.var_83[6].Var2 = 10;
        Gvar.var_82[29][10] = 6;
        Gvar.var_83[6].Var5 = 6;
        Gvar.var_744 = 1;
        Gvar.var_745 = 4 * 40 + 20;
        Gvar.var_746 = 3 * 40 - 10;
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「えっ」";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            Gvar.var_744++;
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_83[6].Var5 = 4;
        Gvar.var_83[7].Var0 = 49;
        Gvar.var_83[7].Var1 = 28;
        Gvar.var_83[7].Var2 = 10;
        Gvar.var_82[28][10] = 7;
        Gvar.var_83[7].Var5 = 6;
        Gvar.var_744 = 1;
        Gvar.var_745 = 3 * 40 + 20;
        Gvar.var_746 = 3 * 40 - 10;
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「えっ」";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            Gvar.var_744++;
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_271 = 0;
        Gvar.var_744 = 0;
        Gvar.var_151 = 0;
        Gvar.var_152 = 0;
        Gvar.var_83[5].Var0 = 0;
        Gvar.var_83[5].Var1 = 0;
        Gvar.var_83[5].Var2 = 0;
        Gvar.var_82[28][10] = 0;
        Gvar.var_83[6].Var0 = 0;
        Gvar.var_83[6].Var1 = 0;
        Gvar.var_83[6].Var2 = 0;
        Gvar.var_82[29][10] = 0;
        Gvar.var_83[7].Var0 = 0;
        Gvar.var_83[7].Var1 = 0;
        Gvar.var_83[7].Var2 = 0;
        Gvar.var_82[30][10] = 0;
        Gvar.var_82[31][10] = 0;
        Gvar.var_83[1].Var1 = 28;
        Gvar.var_83[1].Var2 = 10;
        Gvar.var_82[28][10] = 1;
        Gvar.var_83[1].Var5 = 6;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾃﾞｨｱﾎﾞﾛ「オッ…オレはッ！";
        Gvar.comments_row2a = "初めから何も動いていないッ！！」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_83[2].Var6 = 1;
        Gvar.var_83[2].Var1 = 31;
        Gvar.var_83[2].Var2 = 10;
        Gvar.var_82[32][10] = 0;
        Gvar.var_82[31][10] = 2;
        Gvar.var_83[2].Var5 = 4;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[2].Var1 = 30;
        Gvar.var_83[2].Var2 = 10;
        Gvar.var_82[31][10] = 0;
        Gvar.var_82[30][10] = 2;
        Gvar.var_83[2].Var5 = 4;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[2].Var1 = 29;
        Gvar.var_83[2].Var2 = 10;
        Gvar.var_82[30][10] = 0;
        Gvar.var_82[29][10] = 2;
        Gvar.var_83[2].Var5 = 4;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[2].Var6 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ｼﾞｮﾙﾉ「無駄アァァァァ！！」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_742 = 1;
        Gvar.var_83[2].Var7 = 1;
        Gvar.var_743 = 1; //スタンド像付与フラグON
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_747 = 1;
        Gvar.var_748 = 3;
        Gvar.var_749 = 4;

        Adap.DSPLAY(115);
        Gvar.var_750 = 1;
        Gvar.var_209 = 20;
        Gvar.var_211 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_742 = 0;
        Gvar.var_83[2].Var7 = 0;
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        Gvar.var_83[1].Var6 = 1;
        Gvar.var_83[1].Var1 = 27;
        Gvar.var_83[1].Var2 = 10;
        Gvar.var_82[28][10] = 0;
        Gvar.var_82[27][10] = 1;
        Gvar.var_83[1].Var5 = 4;
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        Gvar.var_83[1].Var5 = 6;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[1].Var1 = 26;
        Gvar.var_83[1].Var2 = 10;
        Gvar.var_82[27][10] = 0;
        Gvar.var_82[26][10] = 1;
        Gvar.var_83[1].Var5 = 4;
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        Gvar.var_83[1].Var5 = 6;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[1].Var1 = 25;
        Gvar.var_83[1].Var2 = 10;
        Gvar.var_82[26][10] = 0;
        Gvar.var_82[25][10] = 1;
        Gvar.var_83[1].Var5 = 4;
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        Gvar.var_83[1].Var5 = 6;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[1].Var1 = 26;
        Gvar.var_83[1].Var2 = 11;
        Gvar.var_82[25][10] = 0;
        Gvar.var_82[26][11] = 1;
        Gvar.var_83[1].Var5 = 3;
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        Gvar.var_83[1].Var5 = 7;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[1].Var0 = 0;
        Gvar.var_83[1].Var1 = 0;
        Gvar.var_83[1].Var2 = 0;
        Gvar.var_82[25][10] = 0;
        Gvar.var_83[1].Var6 = 0;
        Adap.DSPLAY(186);
        Gvar.var_747 = 0;
        Gvar.var_750 = 0;
        Gvar.var_209 = 0;
        Gvar.var_271 = 1;
        Gvar.var_751 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_751++;
        }
        Gvar.var_271 = 0;
        Gvar.var_751 = 0;
        Gvar.var_83[3].Var6 = 1;
        Gvar.var_83[3].Var1 = 29;
        Gvar.var_83[3].Var2 = 7;
        Gvar.var_82[30][7] = 0;
        Gvar.var_82[29][7] = 3;
        Gvar.var_83[3].Var5 = 4;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[3].Var1 = 28;
        Gvar.var_83[3].Var2 = 8;
        Gvar.var_82[29][7] = 0;
        Gvar.var_82[28][8] = 3;
        Gvar.var_83[3].Var5 = 1;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[3].Var1 = 27;
        Gvar.var_83[3].Var2 = 9;
        Gvar.var_82[28][8] = 0;
        Gvar.var_82[27][9] = 3;
        Gvar.var_83[3].Var5 = 1;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[3].Var6 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾐｽﾀ「や…　やったぞッ　ついにッ！」";
        Gvar.comments_row2 = "　　　ついにッ！　倒したぞ！」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_83[2].Var0 = 131;
        Gvar.var_83[4].Var6 = 1;
        Gvar.var_83[4].Var1 = 30;
        Gvar.var_83[4].Var2 = 9;
        Gvar.var_82[31][8] = 0;
        Gvar.var_82[30][9] = 4;
        Gvar.var_83[4].Var5 = 1;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[4].Var1 = 29;
        Gvar.var_83[4].Var2 = 9;
        Gvar.var_82[30][9] = 0;
        Gvar.var_82[29][9] = 4;
        Gvar.var_83[4].Var5 = 4;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[4].Var1 = 28;
        Gvar.var_83[4].Var2 = 10;
        Gvar.var_82[29][9] = 0;
        Gvar.var_82[28][10] = 4;
        Gvar.var_83[4].Var5 = 1;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[4].Var1 = 27;
        Gvar.var_83[4].Var2 = 10;
        Gvar.var_82[28][10] = 0;
        Gvar.var_82[27][10] = 4;
        Gvar.var_83[4].Var5 = 4;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[4].Var6 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾄﾘｯｼｭ「でも…　ちょっと待って";
        Gvar.comments_row2 = "　　　　どこかに浮かんできてる！？」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾄﾘｯｼｭ「どこよッ！";
        Gvar.comments_row2a = "　　　　探してジョルノッ！」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            Gvar.var_83[4].Var5 = 7;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_83[4].Var5 = 4;

            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_83[4].Var5 = 1;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_83[4].Var5 = 4;

            await Func.func337(); // メッセージ関係呼び出し
        }
        for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_83[2].Var6 = 1;
        Gvar.var_83[2].Var1 = 28;
        Gvar.var_83[2].Var2 = 11;
        Gvar.var_82[29][10] = 0;
        Gvar.var_82[28][11] = 2;
        Gvar.var_83[2].Var5 = 1;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[2].Var1 = 27;
        Gvar.var_83[2].Var2 = 11;
        Gvar.var_82[28][11] = 0;
        Gvar.var_82[27][11] = 2;
        Gvar.var_83[2].Var5 = 4;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[2].Var6 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ｼﾞｮﾙﾉ「いや…　探す必要はない";
        Gvar.comments_row2 = "　　　　全てはもう終わっている…」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ｼﾞｮﾙﾉ「ヤツはもう";
        Gvar.comments_row2a = "　　　　どこへも向かうことはない」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ｼﾞｮﾙﾉ「終わりが無いのが【終わり】」";
        Gvar.comments_row2a = "　　　　";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ｼﾞｮﾙﾉ「それが";
        Gvar.comments_row2a = "　　　【ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ】」　";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_198 = 0;
        Gvar.var_300 = 0;
        Adap.gsel(19);
        Adap.color(1, 1, 1);

        Adap.boxf(0, 0, 340, 340);
        Adap.gsel(0);
        Gvar.var_311 = 0;
        Gvar.var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_311 = Gvar.var_311 + 5;
        }
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛはＧ･Ｅ･レクイエムの能力により";
        Gvar.comments_row2 = "永遠に死に続けることとなった。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "何百回……いや何千回死んだだろうか？";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "しかしある時、転機が訪れた…";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        if (Gvar.var_726 == 1) {
            Gvar.var_735 = "01.dat";
        }
        if (Gvar.var_726 == 2) {
            Gvar.var_735 = "02.dat";
        }
        if (Gvar.var_726 == 3) {
            Gvar.var_735 = "03.dat";
        }
        await Adap.bsave(Gvar.var_735, Gvar.data = Gvar.var_447, null, null);

        await Func.func504();
        if (Gvar.var_726 == 1) {
            Gvar.var_752 = "01e.dat";
        }
        if (Gvar.var_726 == 2) {
            Gvar.var_752 = "02e.dat";
        }
        if (Gvar.var_726 == 3) {
            Gvar.var_752 = "03e.dat";
        }
        await Func.func230();
        await Adap.bsave(Gvar.var_752, Gvar.data = Gvar.var_753, null, null);
        Adap.notesel(Gvar.var_754);
        await Adap.noteload(Gvar.var_752);
        for (let cnt1 = 0; cnt1 < 50; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }

        Gvar.var_65 = Adap.dim(70, 70, Gvar.length3 = null, null);
        Gvar.var_66 = 15;
        Gvar.var_67 = 8;
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 1;
        Gvar.var_199 = 2;
        Gvar.var_374 = 0;
        Gvar.var_211 = 15;
        Gvar.var_595 = 0; // Gvar.dungeon_number = 0 での場所確認。0 = ヴェネチアホテル
        Gvar.var_312 = 0;
        Gvar.ivents_flag = 1; // 初めてヴェネチアホテルへ訪れた際のディアボロの呟きフラグ
        Gvar.var_755 = 0;
        await Dung.func159(); // ヴェネチアホテルでのイベントフラグ管理処理
        return;
}

export {func150}


// オープニング戦キャラ配置処理
async function func158(this: any) {
        Adap.dbgprt(158);
        Gvar.var_767 = 0;
        Gvar.var_262 = 1; // Gvar.dungeon_number = 0 確認フラグON
        Gvar.current_floor = 0;
        Gvar.var_199 = 8;
        Gvar.y_axis_map_image = 18;
        await Map.func293(); // ダンジョンマップ初期化処理(+ヴェネチアホテル)
        Gvar.var_560 = 1;
        Gvar.var_561 = 5; // マップX軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
        Gvar.var_562 = 5; // マップY軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
        await Map.func288(); // ヴェネチアホテル+亀初期マップ+ローマ・ティベレ河マップ配置処理(亀の成長0)
        await Func.func248();
        // No = 0 なので、拠点(ホテル、亀、)
        Gvar.dungeon_number = 0;
        Gvar.var_532 = 0;

        Gvar.var_77 = Adap.dim(70, 70, null, null);
        Gvar.var_78 = Class.ItemInfo.dim(300);

        Gvar.var_82 = Adap.dim(70, 70, null, null);
        Gvar.var_83 = Class.CharactorInfo.dim(300);

        Gvar.var_73 = Adap.dim(70, 70, null, null);

        Gvar.var_65 = Adap.dim(70, 70, null, null);
        Gvar.var_66 = 29;
        Gvar.var_67 = 10;
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 1;
        Gvar.var_374 = 1;
        // キャラ配置と思われる
        Gvar.var_97 = 0;
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_82[28][10] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 49;
        Gvar.var_83[Gvar.var_97].Var1 = 28;
        Gvar.var_83[Gvar.var_97].Var2 = 10;
        Gvar.var_83[Gvar.var_97].Var5 = 6;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);

        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_82[32][10] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 132; // No = 132 レクイエムジョルノ
        Gvar.var_83[Gvar.var_97].Var1 = 32;
        Gvar.var_83[Gvar.var_97].Var2 = 10;
        Gvar.var_83[Gvar.var_97].Var5 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_82[30][7] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 124;
        Gvar.var_83[Gvar.var_97].Var1 = 30;
        Gvar.var_83[Gvar.var_97].Var2 = 7;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);

        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_82[31][8] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 152;
        Gvar.var_83[Gvar.var_97].Var1 = 31;
        Gvar.var_83[Gvar.var_97].Var2 = 8;
        Gvar.var_83[Gvar.var_97].Var5 = 1;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        return;
}

export {func158}
