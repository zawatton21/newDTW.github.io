import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// ダンジョン「レクイエムの大迷宮」へ入った時の初期化処理
async function func827(this: any) {
        Adap.dbgprt(827);
        Gvar.var_68 = 0;
        Gvar.var_535 = 0;
        await Func.func723();
        if (Gvar.var_3121 == 0 && Gvar.var_1037 == 0 && Gvar.wallet == 0 && Gvar.var_1040 == 0) {
            Gvar.var_535 = 1;
        }
        Gvar.dungeon_number = 2; // No = 2 レクイエムの大迷宮
        Gvar.current_floor = 1;
        if (Gvar.current_floor > Gvar.var_376) {
            Gvar.var_376 = Gvar.current_floor;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor > Gvar.dungeon1_floor) {
            Gvar.dungeon1_floor = Gvar.current_floor;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor > Gvar.dungeon2_floor) {
            Gvar.dungeon2_floor = Gvar.current_floor;
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor > Gvar.dungeon3_floor) {
            Gvar.dungeon3_floor = Gvar.current_floor;
        }
        Gvar.var_405 = 0;
        Gvar.var_344 = 0;
        Gvar.var_373 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 0;
        Gvar.var_262 = 0; // Gvar.dungeon_number = 0 確認フラグOFF
        await Func.func111();
        await Func.func182();
        // アイテム数が20でなければ
        if (Gvar.var_224 != 20) {
            // アイテム追加関数
            await Func.func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
        }
        await Func.func502();
        await Func.func504();
        await Func.func505();
        if (Gvar.var_407 == 1) {
            await Func.func905();
        }
        if (Gvar.var_407 == 2) {
            await Func.func933();
        }
        await Func.func076(); // 各ダンジョンの絵文字読込処理
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            await Func.func339();
        }
        Adap.DSPLAY(101); // 階段を昇るor降りる時の効果音
        await Main.func006();
        return;
}

export {func827}

// レクイエムの大迷宮の出現敵設定
async function func629(this: any) {
        Adap.dbgprt(629);
        if (Gvar.current_floor == 1) {
            Gvar.var_977 = [79, 1, 5];
            Gvar.var_2917 = Adap.rnd(3);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 2) {
            Gvar.var_977 = [2, 79, 1, 5];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 3) {
            Gvar.var_977 = [93, 3, 2, 5];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 4) {
            Gvar.var_977 = [94, 77, 93, 3, 2];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 5) {
            Gvar.var_977 = [51, 94, 77, 93, 3];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 6) {
            Gvar.var_977 = [7, 9, 39, 51, 94, 77, 3];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 7) {
            Gvar.var_977 = [6, 76, 26, 7, 9, 39, 51, 94];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 8) {
            Gvar.var_977 = [52, 76, 26, 7, 9, 39, 6];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 9) {
            Gvar.var_977 = [4, 134, 141, 52, 76, 26, 6];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 10) {
            Gvar.var_977 = [119, 99, 13, 4, 134, 141, 101, 76, 52];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 11) {
            Gvar.var_977 = [71, 12, 119, 99, 13, 4, 134, 141, 101];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 12) {
            Gvar.var_977 = [28, 56, 71, 12, 119, 13, 4, 134, 101];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 13) {
            Gvar.var_977 = [131, 148, 28, 31, 56, 71, 12, 134];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 14) {
            Gvar.var_977 = [115, 11, 131, 148, 28, 31, 56];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 15) {
            Gvar.var_977 = [45, 29, 115, 11, 131, 148, 28, 31];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 16) {
            Gvar.var_977 = [47, 45, 29, 115, 11, 131, 148];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 17) {
            Gvar.var_977 = [136, 27, 47, 45, 29, 115, 11];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 18) {
            Gvar.var_977 = [48, 38, 78, 136, 27, 47, 45, 29];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 19) {
            Gvar.var_977 = [17, 46, 48, 38, 78, 136, 27];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 20) {
            Gvar.var_977 = [97, 125, 17, 46, 48, 38, 78];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 21) {
            Gvar.var_977 = [14, 69, 97, 125, 17, 46, 12];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 22) {
            Gvar.var_977 = [18, 59, 145, 14, 97, 125, 69, 17, 46];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 23) {
            Gvar.var_977 = [35, 135, 18, 59, 145, 14, 97, 69];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 24) {
            Gvar.var_977 = [10, 35, 135, 18, 59, 145, 14];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 25) {
            Gvar.var_977 = [95, 63, 10, 35, 135, 59, 14];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 26) {
            Gvar.var_977 = [32, 84, 43, 85, 95, 63, 10, 35];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 27) {
            Gvar.var_977 = [44, 72, 66, 32, 84, 43, 85, 95, 63];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 28) {
            Gvar.var_977 = [113, 15, 123, 44, 72, 66, 32, 84, 43];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 29) {
            Gvar.var_977 = [80, 65, 113, 15, 123, 44, 72, 66, 119];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 30) {
            Gvar.var_977 = [80, 65, 113, 15, 123, 44, 72, 119];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor >= 31) {
            Gvar.var_977 = [90];
            Gvar.var_2917 = Adap.rnd(1);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        return;
}

export {func629}

// ボスを倒した時のメッセージ処理(レクイエムジョルノ)
async function func686(this: any) {
        Adap.dbgprt(686);
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ｼﾞｮﾙﾉ「うぐッ！！」";
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
        Gvar.comments_row1a = "ｼﾞｮﾙﾉ「ば…ばかな…";
        Gvar.comments_row2a = "こんなことが…」";
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
        Gvar.comments_row1a = "ｼﾞｮﾙﾉ「G･E･ﾚｸｲｴﾑの能力を使えば、";
        Gvar.comments_row2a = "その終わりのない状態を」";
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
        Gvar.comments_row1a = "ｼﾞｮﾙﾉ「解除する事はできるだろう…。";
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
        Gvar.comments_row1a = "ｼﾞｮﾙﾉ「…しかしボス」";
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
        Gvar.comments_row1a = "ｼﾞｮﾙﾉ「はたしてそれで、";
        Gvar.comments_row2a = "勝利したと言えるかな…？」";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        Gvar.var_190 = 1;
        return;
}

export {func686}
