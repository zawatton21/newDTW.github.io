import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ダンジョン「ディアボロの試練」へ入った時の初期化処理
async function func829(this: any) {
        Adap.dbgprt(829);
        await Func.func723();
        if (Gvar.var_3121 >= 1) {
            await Func.func831(); // 持ち込み不可ダンジョンにアイテムを所持した状態で入ろうとした際の忠告メッセージ処理
            return;
        }
        Gvar.var_68 = 0;
        Gvar.dungeon_number = 3;
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
        await Func.func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
        await Func.func502();
        await Func.func504();
        await Func.func505();
        Gvar.wallet = 0;
        Gvar.var_350 = 100;
        Gvar.var_567 = 100;
        Gvar.var_352 = 15;
        Gvar.var_211 = 15;
        Gvar.current_level = 1;
        Gvar.var_568 = 0;
        Gvar.var_565 = 8;
        Gvar.var_566 = 8;
        if (Gvar.var_759 == 1) { // ディアボロの試練解放フラグがONの場合。岸辺露伴イベントが始まった際に1になる。
            Gvar.var_759 = 2; // その状態でダンジョンへ入ると、DIO&プッチ神父出現フラグ (Gvar.var_759 >= 2)
        }
        if (Gvar.var_407 == 1) {
            await Func.func905();
        }
        if (Gvar.var_407 == 2) {
            await Func.func933();
        }
        Gvar.var_205 = 1;
        await Func.func231();
        await Func.func076(); // 各ダンジョンの絵文字読込処理
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            await Func.func339();
        }
        Adap.DSPLAY(101); // 階段を昇るor降りる時の効果音
        await Func.func006();
        return;
}

export {func829}


// ディアボロの試練の出現敵設定
async function func630(this: any) {
        Adap.dbgprt(630);
        if (Gvar.current_floor == 1) {
            Gvar.var_977 = [5, 1, 147, 79, 88];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 2) {
            Gvar.var_977 = [5, 1, 147, 79, 88, 2];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 3) {
            Gvar.var_977 = [93, 94, 147, 88, 3, 2];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 4) {
            Gvar.var_977 = [93, 94, 147, 88, 3, 2];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 5) {
            Gvar.var_977 = [93, 94, 51, 3, 2, 77];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 6) {
            Gvar.var_977 = [93, 7, 51, 9, 77];
            Gvar.var_2917 = Adap.rnd(5);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 7) {
            Gvar.var_977 = [73, 7, 51, 9, 39, 76, 52, 6];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 8) {
            Gvar.var_977 = [73, 7, 9, 39, 76, 52, 26, 6];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 9) {
            Gvar.var_977 = [73, 7, 9, 39, 76, 52, 26, 4, 6];
            Gvar.var_2917 = Adap.rnd(9);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 10) {
            Gvar.var_977 = [13, 9, 26, 4, 138, 6];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 11) {
            Gvar.var_977 = [134, 13, 26, 4, 101, 138];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 12) {
            Gvar.var_977 = [134, 13, 119, 101, 99, 138];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 13) {
            Gvar.var_977 = [134, 13, 119, 99, 141, 148, 71, 140];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 14) {
            Gvar.var_977 = [134, 13, 119, 99, 141, 148, 71, 140];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 15) {
            Gvar.var_977 = [28, 99, 141, 148, 71, 140, 97];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 16) {
            Gvar.var_977 = [12, 28, 99, 56, 148, 71, 115];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 17) {
            Gvar.var_977 = [12, 28, 99, 56, 131, 71, 115];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 18) {
            Gvar.var_977 = [12, 31, 56, 131, 47, 27, 115];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 19) {
            Gvar.var_977 = [12, 31, 48, 131, 47, 27, 115];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 20) {
            Gvar.var_977 = [12, 31, 46, 48, 11, 47, 27];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 21) {
            Gvar.var_977 = [12, 17, 46, 48, 11, 47, 27, 35];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 22) {
            Gvar.var_977 = [12, 17, 46, 48, 11, 47, 27, 35];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 23) {
            Gvar.var_977 = [12, 17, 46, 48, 11, 47, 27, 35];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 24) {
            Gvar.var_977 = [69, 38, 136, 14, 45, 29, 85];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 25) {
            Gvar.var_977 = [69, 38, 136, 14, 45, 10, 85];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 26) {
            Gvar.var_977 = [69, 38, 136, 14, 45, 10, 85];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 27) {
            Gvar.var_977 = [69, 38, 84, 14, 95, 10, 85];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 28) {
            Gvar.var_977 = [125, 72, 38, 84, 14, 95, 10, 85];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 29) {
            Gvar.var_977 = [125, 72, 38, 84, 65, 95, 10, 66];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 30) {
            Gvar.var_977 = [125, 72, 38, 84, 65, 95, 10, 66];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 31) {
            Gvar.var_977 = [125, 59, 63, 145, 78, 43, 18, 66];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 32) {
            Gvar.var_977 = [125, 59, 63, 145, 78, 43, 18, 66];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 33) {
            Gvar.var_977 = [125, 59, 63, 145, 78, 43, 18, 44];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 34) {
            Gvar.var_977 = [123, 59, 63, 145, 78, 43, 135, 44];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 35) {
            Gvar.var_977 = [123, 59, 63, 15, 78, 43, 135, 44];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 36) {
            Gvar.var_977 = [123, 59, 63, 15, 78, 43, 135, 44];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 37) {
            Gvar.var_977 = [123, 80, 63, 15, 78, 43, 135, 44];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 38) {
            Gvar.var_977 = [123, 80, 63, 15, 78, 43, 135, 32];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 39) {
            Gvar.var_977 = [123, 80, 63, 15, 78, 43, 135, 32];
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 40) {
            Gvar.var_977 = [30, 59, 32, 113, 17, 26, 119];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 41) {
            Gvar.var_977 = [30, 59, 32, 113, 17, 26, 119];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 42) {
            Gvar.var_977 = [30, 59, 32, 113, 17, 26, 119];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 43) {
            Gvar.var_977 = [30, 59, 32, 113, 17, 26, 119];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 44) {
            Gvar.var_977 = [30, 59, 32, 113, 17, 26, 119];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 45) {
            Gvar.var_977 = [30, 59, 32, 113, 17, 26, 119];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 46) {
            Gvar.var_977 = [30, 59, 32, 113, 17, 26, 119];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 47) {
            Gvar.var_977 = [122, 121, 134, 152, 78, 160];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 48) {
            Gvar.var_977 = [122, 121, 134, 152, 78, 160];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 49) {
            Gvar.var_977 = [122, 121, 134, 152, 78, 160];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 50) {
            Gvar.var_977 = [122, 121, 134, 152, 78, 160];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 51) {
            Gvar.var_977 = [122, 121, 134, 152, 78, 160];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 52) {
            Gvar.var_977 = [122, 121, 134, 152, 78, 160];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 53) {
            Gvar.var_977 = [122, 121, 134, 152, 78, 160];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 54) {
            Gvar.var_977 = [155, 156, 157, 86, 51, 71, 144];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 55) {
            Gvar.var_977 = [155, 156, 157, 86, 52, 71, 144];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 56) {
            Gvar.var_977 = [155, 156, 157, 86, 52, 11, 144];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 57) {
            Gvar.var_977 = [155, 156, 157, 86, 51, 71, 144];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 58) {
            Gvar.var_977 = [155, 156, 157, 86, 51, 71, 144];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 59) {
            Gvar.var_977 = [155, 156, 157, 86, 52, 71, 144];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 60) {
            Gvar.var_977 = [128, 158, 150, 68, 67, 172];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 61) {
            Gvar.var_977 = [128, 158, 150, 68, 67, 172];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 62) {
            Gvar.var_977 = [128, 158, 150, 68, 67, 172];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 63) {
            Gvar.var_977 = [128, 158, 150, 68, 67, 172];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 64) {
            Gvar.var_977 = [128, 158, 150, 68, 67, 172];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 65) {
            Gvar.var_977 = [128, 158, 150, 68, 67, 151];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 66) {
            Gvar.var_977 = [128, 158, 150, 68, 67, 151];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 67) {
            Gvar.var_977 = [110, 109, 87, 139, 135, 56, 136];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 68) {
            Gvar.var_977 = [110, 109, 87, 139, 135, 56, 136];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 69) {
            Gvar.var_977 = [110, 109, 87, 139, 135, 56, 136];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 70) {
            Gvar.var_977 = [110, 109, 87, 139, 135, 56, 136];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 71) {
            Gvar.var_977 = [110, 109, 87, 139, 135, 56, 136];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 72) {
            Gvar.var_977 = [110, 109, 87, 139, 135, 56, 136];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 73) {
            Gvar.var_977 = [110, 109, 87, 139, 135, 56, 136];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 74) {
            Gvar.var_977 = [110, 109, 87, 139, 135, 56, 136];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 75) {
            Gvar.var_977 = [124, 127, 99, 30, 154, 85];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 76) {
            Gvar.var_977 = [124, 127, 99, 30, 154, 85];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 77) {
            Gvar.var_977 = [124, 127, 99, 30, 154, 85];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 78) {
            Gvar.var_977 = [124, 127, 99, 30, 154, 85];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 79) {
            Gvar.var_977 = [124, 127, 99, 30, 154, 85];
            Gvar.var_2917 = Adap.rnd(6);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 80) {
            Gvar.var_977 = [124, 133, 129, 126, 137, 21, 64];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 81) {
            Gvar.var_977 = [124, 133, 129, 126, 137, 21, 64];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 82) {
            Gvar.var_977 = [124, 133, 129, 126, 137, 21, 64];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 83) {
            Gvar.var_977 = [124, 133, 129, 126, 137, 21, 64];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 84) {
            Gvar.var_977 = [153, 133, 129, 126, 137, 21, 64];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 85) {
            Gvar.var_977 = [153, 133, 129, 126, 137, 21, 64];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 86) {
            Gvar.var_977 = [153, 133, 129, 126, 137, 21, 64];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 87) {
            Gvar.var_977 = [153, 133, 129, 126, 137, 21, 64, 159]; // Ver0.1401にて修正。No = 159 記憶が戻ったウェザーを追加、No = 158 プッツン由花子を削除
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 88) {
            Gvar.var_977 = [153, 133, 129, 126, 137, 21, 64, 159]; // Ver0.1401にて修正。No = 159 記憶が戻ったウェザーを追加、No = 158 プッツン由花子を削除
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 89) {
            Gvar.var_977 = [153, 133, 129, 126, 137, 21, 64, 159]; // Ver0.1401にて修正。No = 159 記憶が戻ったウェザーを追加、No = 158 プッツン由花子を削除
            Gvar.var_2917 = Adap.rnd(8);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 90) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 91) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 92) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 93) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 94) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 95) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 96) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 97) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 98) {
            Gvar.var_977 = [111, 98, 120, 60, 114, 118, 151];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor == 99) {
            Gvar.var_977 = [166, 166, 166, 166, 166, 166, 157];
            Gvar.var_2917 = Adap.rnd(7);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        if (Gvar.current_floor >= 100) {
            Gvar.var_977 = [90];
            Gvar.var_2917 = Adap.rnd(1);
            Gvar.var_953 = Gvar.var_977[Gvar.var_2917];
        }
        return;
}

export {func630}