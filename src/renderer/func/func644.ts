import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Enemy from '../enemy/index'
import * as Main from '../newdtw/index'

async function func644(this: any) {
        Adap.dbgprt(644);
        Gvar.var_2867 = 0;
        await Func.func639(); // 敵の回避処理
        if (Gvar.var_143 >= 1) {
            Gvar.var_2267[8] = Gvar.var_2267[7];
            Gvar.var_2267[7] = Gvar.var_2267[6];
            Gvar.var_2267[6] = Gvar.var_2267[5];
            Gvar.var_2267[5] = Gvar.var_2267[4];
            Gvar.var_2267[4] = Gvar.var_2267[3];
            Gvar.var_2267[3] = Gvar.var_2267[2];
            Gvar.var_2267[2] = Gvar.var_2267[1];
            Gvar.var_2267[1] = Gvar.var_2267[0];
            Gvar.var_2267[0] = Gvar.var_83[Gvar.var_314].Var0;
            if (Gvar.var_2267[0] != 0 && Gvar.var_2267[0] == Gvar.var_2267[1]) {
                Gvar.var_143 = 2;
            }
            if (Gvar.var_143 == 2 && Gvar.var_2267[1] == Gvar.var_2267[2]) {
                Gvar.var_143 = 3;
            }
            if (Gvar.var_143 == 3 && Gvar.var_2267[2] == Gvar.var_2267[3]) {
                Gvar.var_143 = 4;
            }
            if (Gvar.var_143 == 4 && Gvar.var_2267[3] == Gvar.var_2267[4]) {
                Gvar.var_143 = 5;
            }
            if (Gvar.var_143 == 5 && Gvar.var_2267[4] == Gvar.var_2267[5]) {
                Gvar.var_143 = 6;
            }
            if (Gvar.var_143 == 6 && Gvar.var_2267[5] == Gvar.var_2267[6]) {
                Gvar.var_143 = 7;
            }
            if (Gvar.var_143 == 7 && Gvar.var_2267[6] == Gvar.var_2267[7]) {
                Gvar.var_143 = 8;
            }
            if (Gvar.var_143 == 8 && Gvar.var_2267[7] == Gvar.var_2267[8]) {
                Gvar.var_143 = 9;
            }
            if (Gvar.var_2267[0] != 0 && Gvar.var_2267[0] != Gvar.var_2267[1]) {
                Gvar.var_143 = 1;
            }
        }
        if (Gvar.var_2867 != 0) {
            return;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「オラオララオラオラオラオオラオラ」";
        Gvar.comments_row2 = "ﾃﾞｨｱﾎﾞﾛの攻撃は外れた";
        if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
            Gvar.comments_row2 = "ヒラリと攻撃をかわされた";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_2939 = 1;
        if (Gvar.equip_disc[105] == 1) {
            Gvar.var_1030 = Gvar.var_1030 + 1;
        }
        Gvar.var_2985 = 0;
        if (Gvar.var_2939 == 1) {
            await Func.func090();
        }
        if (Gvar.var_83[Gvar.var_314].Var0 != 3) {
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_2657 = Gvar.var_83[Gvar.var_314].Var5;
            }
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 1;
                Gvar.var_83[Gvar.var_314].Var7 = 1;
            }
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 2;
            }
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 3;
            }
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_2985 == 0) {
                await Func.func089(); // 各装備discごとの攻撃音設定
            }
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 6;
            }
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 9;
            }
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 8;
            }
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_2939 == 1) {
                await Func.func090();
            }
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 7;
            }
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = 4;
            }
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2657;
                Gvar.var_83[Gvar.var_314].Var7 = 0;
            }
        }
        // Ver0.1402にて追加。
        if (Gvar.var_83[Gvar.var_314].Var0 == 3) {
            if (Gvar.var_201 != 14 && Gvar.var_83[Gvar.var_314].Var10 == Gvar.var_201) { // 部屋にいる時のみ発動
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_2657 = Gvar.var_83[Gvar.var_314].Var5;
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 1;
                    Gvar.var_83[Gvar.var_314].Var7 = 1;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 2;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 3;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2985 == 0) {
                    await Func.func089(); // 各装備discごとの攻撃音設定
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 6;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 9;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 8;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2939 == 1) {
                    await Func.func090();
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 7;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 4;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2657;
                    Gvar.var_83[Gvar.var_314].Var7 = 0;
                }
                // 下記のようにすることで、部屋内でヒラリ回避をした後に瞬間移動をする。
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    await Enemy.enemy003(); // No = 3 敵タワーオブグレーの特殊能力。瞬間移動。
                    // ヒラリ回避→瞬間移動をした後に攻撃をさせない処理
                    //await Main.func009(); // ゲーム基本動作フレーム処理
                }
                // 下記のようにすることで、部屋内でヒラリ回避をした後に瞬間移動をする。
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    // ヒラリ回避→瞬間移動をした後に攻撃をさせない処理
                    await Main.func009(); // ゲーム基本動作フレーム処理
                }
            }
            else { // 通路にいる場合の動作処理
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_2657 = Gvar.var_83[Gvar.var_314].Var5;
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 1;
                    Gvar.var_83[Gvar.var_314].Var7 = 1;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 2;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 3;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2985 == 0) {
                    await Func.func089(); // 各装備discごとの攻撃音設定
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 6;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 9;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 8;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2939 == 1) {
                    await Func.func090();
                }
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 7;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = 4;
                }
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                    Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2657;
                    Gvar.var_83[Gvar.var_314].Var7 = 0;
                }
                // 下記を設定することで、ヒラリ回避を実行した時のみターン消費させられる。
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_2938 == 1) {
                    await Main.func009(); // ゲーム基本動作フレーム処理
                }
            }
        }
        // await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_198 = 0;
        Gvar.var_300 = 0;
        // await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        //await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_2939 = 0;
        Gvar.var_2932 = 0;
        Gvar.var_2938 = 0;
        Gvar.var_217 = 1;
        Gvar.var_1194 = 0;
        return;
}

export {func644}
