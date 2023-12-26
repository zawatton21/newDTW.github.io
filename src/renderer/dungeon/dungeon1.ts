import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'


// ホテルの外のボス以外の出現敵設定
async function func628(this: any) {
        Adap.dbgprt(628);
        if (Gvar.current_floor == 1) {
            Gvar.var_977 = [1, 5]; // No = 1 ヤク中のゴロツキ、No = 5 小汚い浮浪者
            Gvar.var_2917 = Adap.rnd(2);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 2) {
            Gvar.var_977 = [147, 1, 5]; // No = 1 ヤク中のゴロツキ、No = 5 小汚い浮浪者
            Gvar.var_2917 = Adap.rnd(3);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 3) {
            Gvar.var_977 = [93, 2, 147, 5];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 4) {
            Gvar.var_977 = [93, 3, 2, 147];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 5) {
            Gvar.var_977 = [51, 94, 93, 3];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 6) {
            Gvar.var_977 = [51, 94, 93, 3];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 7) {
            Gvar.var_977 = [7, 9, 51, 6, 94];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 8) {
            Gvar.var_977 = [52, 7, 9, 6];
            Gvar.var_2917 = Adap.rnd(4);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 9) {
            Gvar.var_977 = [134, 52, 7, 9, 6];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 10) {
            Gvar.var_977 = [99, 13, 134, 141, 101, 52];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 11) {
            Gvar.var_977 = [99, 13, 134, 141, 101, 52];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 12) {
            Gvar.var_977 = [8, 24, 25];
            Gvar.var_2917 = Adap.rnd(3);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor >= 13) {
            Gvar.var_977 = [90];
            Gvar.var_2917 = Adap.rnd(1);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 99) {
            Gvar.var_977 = [36, 105, 106, 107, 108, 161, 162];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        return;
}

export {func628}


// ダンジョン「ホテルの外」へ入った時の初期化処理
async function func825(this: any) {
        Adap.dbgprt(825);
        Gvar.var_68 = 0;
        await Func.func723();
        Gvar.var_203 = 0; // 初期値0 = エンヤホテル
        if (Gvar.var_3121 >= 1) {
            Gvar.var_203 = Adap.rnd(4); // No = 0:エンヤホテル、No = 1:虹村屋敷、// No = 2:吉良屋敷
        }
        Gvar.dungeon_number = 1; // No = 1 なので、ホテルの外
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
        await Func.func111();
        await Func.func182();
        // もしアイテムの数が20でなければ
        if (Gvar.var_224 != 20) {
            // アイテム追加関数
            await Func.func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
        }
        await Func.func502();
        await Func.func504();
        await Func.func505();
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

export {func825}


// ホテルの外の最終フロア、エンヤホテル以外確定処理
async function func059(this: any) {
    Adap.dbgprt(59);
    // No = 1 なので、ホテルの外
    if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 1) { // No = 1:虹村屋敷
        Gvar.special_floor = 1; // 虹村屋敷
    }
    // No = 1 なので、ホテルの外
    if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 2) { // No = 2:吉良屋敷
        Gvar.special_floor = 3; // 吉良屋敷
    }
    // No = 1 なので、ホテルの外
    if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 3) { // No = 3:杜王町埠頭
        Gvar.special_floor = 2; // 杜王町埠頭
    }
    return;
}

export {func059}


// ボスを倒した時のメッセージ処理(エンヤ婆)
async function func685(this: any) {
        Adap.dbgprt(685);
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ｴﾝﾔ婆「うぽわあ―――ッ！！」";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        if (Gvar.var_123 == 0) {
            Gvar.y_axis_map_image = 10;
        }
        if (Gvar.var_123 != 0) {
            Gvar.var_396 = 10;
        }
        Gvar.var_103 = 1;
        Gvar.var_386 = 0;
        Gvar.var_3092 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_3092].Var6 = 0;
            Gvar.var_83[Gvar.var_3092].Var9 = 0;
            Gvar.var_83[Gvar.var_3092].Var11 = 0;
            Gvar.var_83[Gvar.var_3092].Var12 = 0;
            Gvar.var_83[Gvar.var_3092].Var13 = 0;
            Gvar.var_83[Gvar.var_3092].Var14 = 0;
            Gvar.var_83[Gvar.var_3092].Var15 = 0;
            Gvar.var_83[Gvar.var_3092].Var16 = 0;
            Gvar.var_83[Gvar.var_3092].Var17 = 0;
            Gvar.var_83[Gvar.var_3092].Var18 = 0;
            Gvar.var_83[Gvar.var_3092].Var19 = 0;
            if (Gvar.var_83[Gvar.var_3092].Var0 == 8 || Gvar.var_83[Gvar.var_3092].Var0 == 24 || Gvar.var_83[Gvar.var_3092].Var0 == 25) {
                Gvar.var_83[Gvar.var_3092].Var0 = 23;
            }
            Gvar.var_3092 = Gvar.var_3092 + 1;
        }
        Adap.gsel(19);
        Adap.color(255, 255, 255);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_311 = 255;
        Adap.DSPLAY(192);
        Gvar.var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_311 = Gvar.var_311 - 5;
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
        }
        Gvar.var_312 = 0;
        if (Gvar.var_404 >= 1) {
            return;
        }
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ｴﾝﾔ婆「う…　うそじゃ";
        Gvar.comments_row2a = "このわしが　こんなこと……」";
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
        Gvar.comments_row1a = "ｴﾝﾔ婆「しかし…おまえが求める物など";
        Gvar.comments_row2a = "こんなところにはないッ！」";
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
        Gvar.comments_row1a = "ｴﾝﾔ婆「せいぜい他の場所を";
        Gvar.comments_row2a = "探すんじゃなああああああ！」";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        return;
}

export {func685}
