import { Gvar } from '../../variable'
import * as Adap from '../../adapter/index'
import * as Func from '../../func/index'
import * as Class from '../../classes'
import * as Dung from '../../dungeon/index'
import * as Map from '../../map/index'
import * as Even from '../../events/index'
import * as Main from '../../newdtw/index'

// ヴェネチアホテルのBGMを選曲
async function func113(this: any) {
    Adap.dbgprt(113);
    Gvar.var_678 = 1;
    Gvar.bgm_list_id = 988; // ヴェネチアホテルのBGM
    Gvar.var_681 = 988;
    await Func.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
    Gvar.var_678 = 0;
    return;
}

export {func113}


// ヴェネチアホテルでのイベントフラグ管理処理
async function func159(this: any) {
        Adap.dbgprt(159);
        Gvar.var_767 = 0;
        Gvar.var_262 = 1; // Gvar.dungeon_number = 0 確認フラグON
        Gvar.current_floor = 0;
        Gvar.var_199 = 2;
        Gvar.var_68 = 1;
        Gvar.y_axis_map_image = 1;
        await Map.func293(); // ダンジョンマップ初期化処理(+ヴェネチアホテル)
        Gvar.var_560 = 1;
        Gvar.var_561 = 5; // マップX軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
        Gvar.var_562 = 5; // マップY軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
        Gvar.var_3198 = 0; // Ver0.1403にて追加。ホテルの外へ向かう際のメッセージフラグOFF
        Gvar.go_to_hotel = 0; // Ver0.1403にて追加。酒場からホテルの部屋に戻る際のメッセージフラグ
        // マップ読み込み処理
        // Ver0.1403にて修正
        if (Gvar.var_559 == 0) {
            await Map.func288(); // ヴェネチアホテル+亀初期マップ+ローマ・ティベレ河マップ配置処理(亀の成長0)
        }
        if (Gvar.var_559 == 1) {
            await Map.func289(); // ヴェネチアホテル+亀マップ配置処理(亀の成長1)
        }
        if (Gvar.var_559 == 2) {
            await Map.func290(); // ヴェネチアホテル+亀マップ配置処理(亀の成長2)
        }
        if (Gvar.var_559 == 3) {
            await Map.func291(); // ヴェネチアホテル+亀マップ配置処理(亀の成長3)
        }
        if (Gvar.var_559 == 4) {
            await Map.func292(); // ヴェネチアホテル+亀マップ配置処理(亀の成長4)
        }
        // Ver0.1403にて追加。
        //if (Gvar.var_595 == 2){ // Gvar.dungeon_number = 0 での場所確認。2 = 酒場
        //    await Func.func293(); // ダンジョンマップ初期化処理(+ヴェネチアホテル)
            //await map_bar(); // Ver0.1403にて追加。酒場(バー)のマップ
        //}
        await Func.func248();
        // No = 0 なので、拠点(ホテル、亀、)
        Gvar.dungeon_number = 0;
        Gvar.var_532 = 0;

        Gvar.var_77 = Adap.dim(70, 70, null, null);
        Gvar.var_78 = Class.ItemInfo.dim(300);

        Gvar.var_82 = Adap.dim(70, 70, null, null);
        Gvar.var_83 = Class.CharactorInfo.dim(300);

        Gvar.var_73 = Adap.dim(70, 70, null, null);
        await Dung.func160(); // ヴェネチアホテルへ追加するNPCの設定処理(亀、岸辺露伴)
        await Dung.func160b(); // 酒場へ追加するNPCの設定処理(ロッコ・バロッコ所長)
        if (Gvar.var_66 == 13 && Gvar.var_67 == 9) {
            Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
            Gvar.var_66 = 13;
            Gvar.var_67 = 8;
            Gvar.var_65[13][8] = 1;
        }
        Gvar.var_337 = 0;
        Gvar.var_768 = 1;
        Gvar.var_769 = 1;
        await Func.func536();
        Gvar.var_769 = 4;
        await Func.func536();
        if (Gvar.var_404 >= 1) {
            Gvar.var_769 = 2;
            await Func.func536();
        }
        if (Gvar.var_526 >= 1) {
            Gvar.var_769 = 3;
            await Func.func536();
        }
        if (Gvar.var_537 >= 1 || Gvar.var_19 == 1) {
            Gvar.var_769 = 5;
            await Func.func536();
        }
        Gvar.var_768 = 0;
        Gvar.var_769 = 0;
        await Func.func181();
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Gvar.var_217 = 0;
        Gvar.var_205 = 1;
        await Func.func231();
        await Func.func076(); // 各ダンジョンの絵文字読込処理
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            await Func.func339();
        }
        Gvar.var_68 = 1;
        Adap.onexit(1);
        if (Gvar.var_595 == 0) { // Gvar.dungeon_number = 0 での場所確認。0 = ヴェネチアホテル
            await Dung.func113(); // ヴェネチアホテルのBGMを選曲
        }
        if (Gvar.var_595 == 1) { // Gvar.dungeon_number = 0 での場所確認。1 = 亀の中
            await Dung.func114(); // 亀の中の選曲(BGM "20th Century Boy")
        }
        if (Gvar.var_595 == 2) { // Gvar.dungeon_number = 0 での場所確認。2 = 酒場
            await Dung.func114b(); // 酒場の選曲
        }
        if (Gvar.ivents_flag == 1) {
            await Even.func151(); // 初めてヴェネチアホテルへ訪れた際のディアボロの呟き
        }
        if (Gvar.ivents_flag == 3) {
            Gvar.ivents_flag = 0; // イベントフラグ初期化
            await Even.func153(); // ホテルの外初クリア後(エンヤホテル)、ヴェネチアホテルに戻った際のイベント
        }
        if (Gvar.ivents_flag == 5) {
            Gvar.ivents_flag = 0; // イベントフラグ初期化
            await Even.func154(); // レクイエムの大迷宮初クリア後、ヴェネチアホテルに戻った際のイベント
        }
        if (Gvar.var_770 == 1) {
            Gvar.var_770 = 0;
            await Even.func156(); // 初めてダンジョンを訪れ、クリア出来ずにヴェネチアホテルに戻った際のディアボロの呟き
        }
        if (Gvar.ivents_flag == 6) {
            Gvar.ivents_flag = 0; // イベントフラグ初期化
            await Even.func155(); // ディアボロの試練開放イベント(岸辺露伴がヤギを追いかけるイベント)
        }
        await Dung.func837(); // 店のアイテムを購入せずに帰還した際、NPC マリリン・マンソンの登場処理
        Gvar.var_205 = 1;
        await Func.func231();
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func159}


// ヴェネチアホテル & 亀の中のアイテム配置
async function func163(this: any) {
        Adap.dbgprt(163);
        if (Gvar.var_409 == 0) {
            Gvar.var_778 = 0;
        }
        if (Gvar.var_409 == 1) {
            Gvar.var_778 = 10;
        }
        if (Gvar.var_409 == 2) {
            Gvar.var_778 = 20;
        }
        if (Gvar.var_409 == 3) {
            Gvar.var_778 = 30;
        }
        Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 + Gvar.var_778; // Gvar.var_35は固定値40
        Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 + Gvar.var_778; // Gvar.var_36は固定値40
        if (Gvar.var_217 == 0) {
            if (Gvar.var_199 == 6) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 - Gvar.var_778; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 + Gvar.var_778; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 2) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 - Gvar.var_778; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 + Gvar.var_778; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 - Gvar.var_778; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 + Gvar.var_778; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 + Gvar.var_778; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 + Gvar.var_778; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 - Gvar.var_778; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 - Gvar.var_778; // Gvar.var_36は固定値40
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35 + Gvar.var_778; // Gvar.var_35は固定値40
                Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36 - Gvar.var_778; // Gvar.var_36は固定値40
            }
        }
        if (Gvar.var_217 == 1) {
            Gvar.var_779 = (Gvar.var_66 - 5) * Gvar.var_35; // Gvar.var_35は固定値40
            Gvar.var_780 = (Gvar.var_67 - 5) * Gvar.var_36; // Gvar.var_36は固定値40
        }
        Adap.pos(0, 0);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。

        // Adap.buffer(18)は"img4.gif"。X座標var_779、Y座標var_780から切り取り長さ X方向340、Y方向340
        // 絵: 
        Adap.gcopy(18, Gvar.var_779, Gvar.var_780, 340, 340); // Adap.buffer(18)は"img4.gif" // マップ描画 (ヴェネチアホテル、亀の中)
        Gvar.var_781 = 17; // x軸17, y軸5なのでPCの位置 
        Gvar.var_782 = 5;
        if (Gvar.var_199 == 4) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
        }
        if (Gvar.var_199 == 6) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
        }
        if (Gvar.var_199 == 8) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
        }
        if (Gvar.var_199 == 2) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
        }
        if (Gvar.var_199 == 1) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
        }
        if (Gvar.var_199 == 3) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
        }
        if (Gvar.var_199 == 7) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
        }
        if (Gvar.var_199 == 9) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
        }
        if (Gvar.var_217 == 1) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
        }
        // ヴェネチアホテルにあるPCの画面ドット関係
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        if (Gvar.var_404 == 0) { // 冒険中でなければ？？
            // Adap.buffer(18)は"img4.gif"。X座標1400、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵: ヴェネチアホテルにあるPC (NPCが画面内に出てくる直前のノイズ画面)
            Adap.gcopy(18, 1400, 680, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 1) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵: ヴェネチアホテルにあるPC (NPCが画面内に出てくる直前のノイズ画面)
            Adap.gcopy(18, 1440, 680, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 2) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 720, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 3) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 760, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 4) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 800, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 5) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 840, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 6) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 880, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 7) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 920, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 8) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 960, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 9) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 1000, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 10) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 1040, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 11) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1440, 1080, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 12) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1400, 720, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 13) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1400, 760, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 14) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1400, 800, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_783 == 15) {
            // Adap.buffer(18)は"img4.gif"。X座標1440、Y座標680から切り取り長さ X方向40、Y方向40
            // 絵:
            Adap.gcopy(18, 1400, 840, 40, 40); // Adap.buffer(18)は"img4.gif"
        }
        if (Gvar.var_404 >= 1) {
            Gvar.var_781 = 17; // x軸17, y軸9なのでレクイエム階段の位置 
            Gvar.var_782 = 9;
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            Adap.gcopy(18, 1440, 1120, 40, 40);
        }
        // Gvar.var_526 >= 1 ディアボロの試練解放フラグがON
        if (Gvar.var_526 >= 1) {
            Gvar.var_781 = 15; // x軸15, y軸5なので試練に向かう壁穴の位置 
            Gvar.var_782 = 5;
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            Adap.gcopy(18, 1400, 1000, 40, 80); // Adap.buffer(18)は"img4.gif" 壁に開いた穴(ディアボロの試練への入り口)
            
            if (Gvar.var_760 >= 1) {
                if (Gvar.var_199 == 4) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
                }
                if (Gvar.var_199 == 6) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
                }
                if (Gvar.var_199 == 8) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
                }
                if (Gvar.var_199 == 2) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
                }
                if (Gvar.var_199 == 1) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
                }
                if (Gvar.var_199 == 3) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
                }
                if (Gvar.var_199 == 7) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
                }
                if (Gvar.var_199 == 9) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
                }
                if (Gvar.var_217 == 1) {
                    Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
                }
                if (Gvar.var_760 == 4) {
                    // 岸辺露伴のイベントで、壁に穴を開けた後の絵
                    Adap.gcopy(18, 1360, 1000, 40, 80); // Adap.buffer(18)は"img4.gif"
                }
                if (Gvar.var_760 == 3) {
                    // 岸辺露伴のイベントで、壁に穴を開ける時の破片1
                    Adap.gcopy(18, 0, 240, 40, 40); // Adap.buffer(18)は"img4.gif"
                }
                if (Gvar.var_760 == 2) {
                    // 岸辺露伴のイベントで、壁に穴を開ける時の破片2
                    Adap.gcopy(18, 0, 280, 40, 40); // Adap.buffer(18)は"img4.gif"
                }
                if (Gvar.var_760 == 1) {
                    // 岸辺露伴のイベントで、壁に穴を開ける時の破片3
                    Adap.gcopy(18, 0, 320, 40, 40); // Adap.buffer(18)は"img4.gif"
                }
            }
        }
        // Gvar.var_526 >= 1 ディアボロの試練解放フラグがON & Gvar.var_759 >= 2 DIO&プッチ神父出現フラグがON
        if (Gvar.var_526 >= 1 && Gvar.var_759 >= 2) {
            Gvar.var_781 = 12; // x軸12, y軸4なのでDIO用にブラインドが降ろされた窓
            Gvar.var_782 = 4;
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            Adap.gcopy(18, 80, 1080, 120, 120); // Adap.buffer(18)は"img4.gif" // DIO用にブラインドが降ろされた窓
            
            Gvar.var_781 = 12; // x軸12, y軸6なのでDIOとプッチ神父
            Gvar.var_782 = 6;
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            Adap.gcopy(18, 1360, 1120, 80, 80); // DIOとプッチ神父?
        }

        if (Gvar.var_523 >= 1) { // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            Gvar.var_781 = 16; // x軸16, y軸5なので地球儀の位置
            Gvar.var_782 = 5;
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
            if (Gvar.var_784 == 0 || Gvar.var_784 == 3) {
                Adap.gcopy(18, 0, 0, 40, 40); // Adap.buffer(18)は"img4.gif" 地球儀
            }
            if (Gvar.var_784 == 1 || Gvar.var_784 == 4) {
                Adap.gcopy(18, 0, 40, 40, 40); // Adap.buffer(18)は"img4.gif" 地球儀
            }
            if (Gvar.var_784 == 2 || Gvar.var_784 == 5) {
                Adap.gcopy(18, 0, 80, 40, 40); // Adap.buffer(18)は"img4.gif" 地球儀
            }
        }

        // ここから亀の中の配置
        Gvar.var_781 = 15; // x軸15, y軸21なので亀の中のジッパーの位置
        Gvar.var_782 = 21;
        if (Gvar.var_199 == 4) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
        }
        if (Gvar.var_199 == 6) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
        }
        if (Gvar.var_199 == 8) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
        }
        if (Gvar.var_199 == 2) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
        }
        if (Gvar.var_199 == 1) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
        }
        if (Gvar.var_199 == 3) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
        }
        if (Gvar.var_199 == 7) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
        }
        if (Gvar.var_199 == 9) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
        }
        if (Gvar.var_217 == 1) {
            Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
        }
        
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        if (Gvar.var_557 == 0 || Gvar.var_557 >= 13) {
            Adap.gcopy(14, 0, 400, 40, 40); // Adap.buffer(14)は"img_wana.gif" ジッパー(完閉じ 1/4)
        }
        if (Gvar.var_557 == 1 || Gvar.var_557 == 2 || Gvar.var_557 == 11 || Gvar.var_557 == 12) {
            Adap.gcopy(14, 40, 400, 40, 40); // Adap.buffer(14)は"img_wana.gif" ジッパー(ちょい開け 2/4)
        }
        if (Gvar.var_557 == 3 || Gvar.var_557 == 4 || Gvar.var_557 == 9 || Gvar.var_557 == 10) {
            Adap.gcopy(14, 80, 400, 40, 40); // Adap.buffer(14)は"img_wana.gif" ジッパー(開け 3/4)
        }
        if (Gvar.var_557 == 5 || Gvar.var_557 == 6 || Gvar.var_557 == 7 || Gvar.var_557 == 8) {
            Adap.gcopy(14, 120, 400, 40, 40); // Adap.buffer(14)は"img_wana.gif" ジッパー(完開け 4/4)
        }
        if (Gvar.var_559 < 4) {
            if (Gvar.var_559 < 3) {
                Gvar.var_781 = 9;
                Gvar.var_782 = 19;
            }
            if (Gvar.var_559 == 3) {
                Gvar.var_781 = 8;
                Gvar.var_782 = 19;
            }
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gcopy(18, 80, 360, 120, 360); // Adap.buffer(18)は"img4.gif" 仕切り(縦)。細長いやつ。
        }
        if (Gvar.var_559 < 2) {
            if (Gvar.var_559 == 0) {
                Gvar.var_781 = 11;
                Gvar.var_782 = 25;
            }
            if (Gvar.var_559 == 1) {
                Gvar.var_781 = 11;
                Gvar.var_782 = 26;
            }
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            Adap.gcopy(18, 960, 1040, 360, 160); // Adap.buffer(18)は"img4.gif" 仕切り(横)。細長いやつ
        }
        // Ver0.1403にて追加(Func.func328より移植)。亀の中から外へ出る場所の光表示処理。
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Adap.color(0, 0, 0);
            Adap.gmode(4, null, null, 180);
            Gvar.var_781 = 14;
            Gvar.var_782 = 17;
            if (Gvar.var_199 == 4) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 6) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            if (Gvar.var_199 == 8) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 2) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 3) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 + Gvar.var_778);
            }
            if (Gvar.var_199 == 7) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 - Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_199 == 9) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35 + Gvar.var_778, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36 - Gvar.var_778);
            }
            if (Gvar.var_217 == 1) {
                Adap.pos((Gvar.var_781 - Gvar.var_66 + 4) * Gvar.var_35, (Gvar.var_782 - Gvar.var_67 + 4) * Gvar.var_36);
            }
            // Adap.buffer(8)は"img1.gif"。X座標760、Y座標1000から切り取り長さ X方向40、Y方向200
            // 絵:亀の中から外へ出る場所の光
            Adap.gcopy(8, 760, 1000, 40, 200);
        }
        return;
}

export {func163}

// ヴェネチアホテルへ追加するNPCの設定処理(亀、岸辺露伴)
async function func160(this: any) {
    Adap.dbgprt(160);
    Gvar.var_97 = 0;
    if (Gvar.var_404 >= 1) { // ホテルの外クリアフラグ
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_771 = Gvar.var_97;
        Gvar.var_82[13][9] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 55; // Gvar.enemy_list = 55 なので亀
        Gvar.var_83[Gvar.var_97].Var1 = 13; // マップ上のX軸
        Gvar.var_83[Gvar.var_97].Var2 = 9; // マップ上のY軸
        Gvar.var_83[Gvar.var_97].Var3 = 20;
        Gvar.var_83[Gvar.var_97].Var4 = 1;
        Gvar.var_83[Gvar.var_97].Var5 = 3;
        Gvar.var_83[Gvar.var_97].Var10 = 1;
        Gvar.var_83[Gvar.var_97].Var14 = 1; // ランダム移動??
        Gvar.var_83[Gvar.var_97].Var31 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
    }
    if (Gvar.var_759 >= 1) { // 岸辺露伴とのイベントフラグがON
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_761 = Gvar.var_97;
        Gvar.var_82[16][7] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 142; // Gvar.enemy_list = 142 なので岸辺露伴
        Gvar.var_83[Gvar.var_97].Var1 = 16; // マップ上のX軸
        Gvar.var_83[Gvar.var_97].Var2 = 7; // マップ上のY軸
        Gvar.var_83[Gvar.var_97].Var3 = 20;
        Gvar.var_83[Gvar.var_97].Var4 = 0;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var10 = 1;
        Gvar.var_83[Gvar.var_97].Var31 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
    }
    /* まだ調整中なのでコメントアウト
    if (Gvar.var_759 >= 1) { // 岸辺露伴とのイベントフラグがON
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_761 = Gvar.var_97;
        Gvar.var_82[18][8] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 180; // Gvar.enemy_list = 180 NPC デッドマンズ吉良
        Gvar.var_83[Gvar.var_97].Var1 = 18; // マップ上のX軸
        Gvar.var_83[Gvar.var_97].Var2 = 8; // マップ上のY軸
        Gvar.var_83[Gvar.var_97].Var3 = 20;
        Gvar.var_83[Gvar.var_97].Var4 = 0;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var10 = 1;
        Gvar.var_83[Gvar.var_97].Var31 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
    }
    */
    return;
}

export {func160}

// 酒場からホテルの部屋へ戻った時の表示
async function func161b(this: any) {
    Adap.dbgprt(161);
    Gvar.var_243 = 0;
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "部屋に戻った";
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    await Dung.func113(); // ヴェネチアホテルのBGMを選曲
    Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
    Gvar.var_66 = 11; // X軸
    Gvar.var_67 = 8; // Y軸
    await Main.func016();
    Gvar.var_595 = 0; // Gvar.dungeon_number = 0 での場所確認。0 = ヴェネチアホテル
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    await Main.func009(); // ゲーム基本動作フレーム処理
    return;
}

export {func161b}


// ホテルの外の入り口へ入ろうとした際のメッセージ処理
async function func824a(this: any) {
    Adap.dbgprt(824);
    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "ホテルの外へ出ますか？";
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.var_3198 = 1;
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func824a}


// Ver0.1403にて追加。// 酒場 or ホテルの外の入り口へ入ろうとした際のメッセージ処理
async function func824b(this: any) {
    Adap.dbgprt(824);
    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "どこへ行きますか？";
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.var_3198 = 1;
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func824b}

// Ver0.1403にて追加。// ホテルの部屋 or ホテルの外の入り口へ入ろうとした際のメッセージ処理
async function func824c(this: any) {
    Adap.dbgprt(824);
    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "どこへ行きますか？";
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.go_to_hotel = 1; // Ver0.1403にて追加。酒場からホテルの部屋に戻る際のメッセージフラグON
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func824c}


// レクイエムの大迷宮の入り口へ入ろうとした際のメッセージ処理
async function func826(this: any) {
    Adap.dbgprt(826);
    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "レクイエムの大迷宮へ向かいますか？";
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.var_3199 = 1;
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func826}


// ディアボロの試練の入り口へ入ろうとした際のメッセージ処理
async function func828(this: any) {
    Adap.dbgprt(828);
    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "さらなる試練へ向かいますか？";
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.var_3200 = 1; // 
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func828}


// NPC プッチ神父との会話メッセージ
async function func832(this: any) {
    Adap.dbgprt(832);
    Gvar.var_243 = 0;
    if (Gvar.var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾌﾟｯﾁ神父「【天国に行く方法】…";
        Gvar.comments_row2 = "それには必要なものがある」";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "我がスタンド";
        Gvar.comments_row2a = "「ホワイトスネイク」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「４つのカブト虫」";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "そして";
        Gvar.comments_row2a = "「親友DIOの骨」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_198 = 0;
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    if (Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾌﾟｯﾁ神父「【一巡後の世界】に";
        Gvar.comments_row2 = "　　　　挑戦してみるか？」";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3201 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
    }
    await Dung.func833(); // NPC DIOとの会話メッセージ
}

export {func832}


// NPC DIOとの会話メッセージ
async function func833(this: any) {
    Adap.dbgprt(833);
    Gvar.var_243 = 0;
    if (Gvar.var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
        Gvar.var_3202 = 0;
        Gvar.var_480 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_224; ++cnt2) {
            if (Gvar.var_233[Gvar.var_480].Var0 == 396) {
                Gvar.var_3202 = 1;
            }
            if (Gvar.var_233[Gvar.var_480].Var0 >= 800 && Gvar.var_233[Gvar.var_480].Var0 < 900) {
                Gvar.var_484 = 1;
                Gvar.var_485 = Gvar.var_233[Gvar.var_480].Var6;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] == 396) {
                        Gvar.var_3202 = 1;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            Gvar.var_480 = Gvar.var_480 + 1;
        }
        if (Gvar.var_3202 == 1) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "DIO「それは【ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝのDISC】！";
            Gvar.comments_row2 = "手に入れたのか…」";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_523 = 1; // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "DIO「ﾌﾟｯﾁよ、これで";
            Gvar.comments_row2a = "天国への扉は開かれたぞ！」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "【一巡後の世界】に行けるようになった！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "DIO「この先へは";
            Gvar.comments_row2a = "親友ﾌﾟｯﾁが導いてくれるだろう」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "DIO「そうそう…";
            Gvar.comments_row2a = "ひとつ忠告しておこう」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
        }
    }
    if (Gvar.var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "DIO「我々は【天国に行く方法】を";
        Gvar.comments_row2 = "　　　探している…」";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_198 = 0;
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    if (Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "DIO「【一巡後の世界】は";
        Gvar.comments_row2 = "無限に続く終わりのないダンジョンだ」";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "DIO「死ぬつもりで挑戦した方が良い」";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_198 = 0;
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    await Dung.func834(); // ダンジョン「一巡後の世界」へ入った時の初期化処理
}

export {func833}


// 店のアイテムを購入せずに帰還した際、NPC マリリン・マンソンの登場処理
async function func837(this: any) {
    Adap.dbgprt(837);
    Gvar.var_3204 = 0;
    Gvar.var_1056 = 1;
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        if (Gvar.var_233[Gvar.var_1056].Var0 >= 800 && Gvar.var_233[Gvar.var_1056].Var0 < 900) {
            Gvar.var_484 = 1;
            Gvar.var_485 = Gvar.var_233[Gvar.var_1056].Var6;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                if (Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1 && Gvar.var_486[Gvar.var_485][Gvar.var_484][0] != 0) {
                    Gvar.var_3205 = Gvar.var_484;
                    Gvar.var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    Gvar.var_682 = Gvar.var_485;
                    Gvar.var_1876 = Gvar.var_1056;
                    await Dung.func838();
                    Gvar.var_3204 = 1;
                    Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                    Gvar.var_484 = 1;
                    cnt3 = -1;
                    continue;
                }
                Gvar.var_484 = Gvar.var_484 + 1;
            }
        }
        if (Gvar.var_233[Gvar.var_1056].Var11 == 1 && Gvar.var_233[Gvar.var_1056].Var0 != 0) {
            Gvar.var_3205 = Gvar.var_1056;
            await Dung.func838();
            Gvar.var_3204 = 1;
            Gvar.var_1056 = 1;
            Gvar.var_3206 = 1;
            cnt1 = -1;
            continue;
        }
        Gvar.var_1056 = Gvar.var_1056 + 1;
    }
    if (Gvar.var_3204 == 1) {
        Gvar.var_3204 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ﾏﾘﾘﾝﾏﾝｿﾝ「また 会オウ！」";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_1470 = 5;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1470 = 6;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_198 = 0;
    }
    Gvar.var_271 = 0;
    Gvar.var_1470 = 0;
    return;
}

export {func837}


async function func838(this: any) {
    Adap.dbgprt(838);
    Gvar.var_271 = 1;
    Gvar.var_1470 = 1;
    if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_1056].Var0;
        Gvar.var_1471 = Gvar.var_233[Gvar.var_1056].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_1056].Var13;
        Gvar.var_1249 = Gvar.var_233[Gvar.var_1056].Var13;
    }
    if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
        Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
        Gvar.var_1471 = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
        Gvar.disc_rarity = Gvar.var_486[Gvar.var_485][Gvar.var_484][13];
        Gvar.var_1249 = Gvar.var_486[Gvar.var_485][Gvar.var_484][13];
    }
    await Func.func492(); // アイテムリスト呼び出し
    Gvar.var_3207 = Gvar.item_name;
    Gvar.var_225 = Gvar.var_3205;
    if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
        await Func.func430();
    }
    await Func.func433(); // アイテム配列(所持アイテム)初期化関数
    if (Gvar.var_3204 == 0) {
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
    }
    if (Gvar.var_3204 == 1) {
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
    }
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    if (Gvar.var_3204 == 0) {
        Gvar.comments_row1 = "ﾏﾘﾘﾝﾏﾝｿﾝ「店ノ売リ物ヲ持ッテイルナ？」";
    }
    if (Gvar.var_3204 == 1) {
        Gvar.comments_row1 = "ﾏﾘﾘﾝﾏﾝｿﾝ「マダ持ッテイルナ？」";
    }
    Gvar.comments_row2 = "";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
    Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
    Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "ﾏﾘﾘﾝﾏﾝｿﾝ「返シテモラウ！」";
    Gvar.comments_row2a = "";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
    Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
    Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
    await Func.func047();
    await Func.func050();
    Gvar.var_389 = 2;
    Gvar.var_199 = 6;
    Gvar.var_1470 = 2;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_747 = 1;
    Gvar.var_1470 = 3;
    for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_389 = 0;
    Gvar.var_1470 = 4;
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_1470 = 1;
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "" + Gvar.var_3207 + "を奪われた";
    Gvar.comments_row2a = "";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
    Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
    Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
    await Func.func047();
    await Func.func050();
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func838}
