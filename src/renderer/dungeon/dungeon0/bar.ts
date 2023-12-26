import { Gvar } from '../../variable'
import * as Adap from '../../adapter/index'
import * as Func from '../../func/index'
import * as Dung from '../../dungeon/index'
import * as Main from '../../newdtw/index'

// 酒場の選曲(BGM "")
async function func114b(this: any) {
    Adap.dbgprt(114);
    Gvar.var_678 = 1;
    Gvar.bgm_list_id = 976; // BGM ""
    Gvar.var_681 = 976;
    await Func.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
    Gvar.var_678 = 0;
    return;
}

export {func114b}

// 酒場の配置(マップ読み込み)
async function func163b(this: any) {
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
        Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 + Gvar.var_778;
        Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 + Gvar.var_778;
        if (Gvar.var_217 == 0) {
            if (Gvar.var_199 == 1) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 + Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 - Gvar.var_778;
            }
            if (Gvar.var_199 == 2) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 - Gvar.var_778;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 - Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 - Gvar.var_778;
            }
            if (Gvar.var_199 == 4) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 + Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 - Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 + Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 + Gvar.var_778;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 + Gvar.var_778;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35 - Gvar.var_778;
                Gvar.var_780 = (Gvar.var_67) * Gvar.var_36 + Gvar.var_778;
            }
        }
        if (Gvar.var_217 == 1) {
            Gvar.var_779 = (Gvar.var_66 + 2) * Gvar.var_35; // ((Gvar.var_66 = 25) + 2) * (Gvar.var_35 = 40) = 1080
            Gvar.var_780 = (Gvar.var_67) * Gvar.var_36; // (Gvar.var_67 = 32) * (Gvar.var_36 = 40) = 1280
        }
        Adap.pos(0, 0);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.gcopy(18, Gvar.var_779, Gvar.var_780, 380, 400); // Adap.buffer(18)は"img4.gif" x: 1080、y: 1280 よりx方向へ380、y方向へ400切り抜き
        return;
}

export {func163b}

// 酒場へ追加するNPCの設定処理(ロッコ・バロッコ所長)
async function func160b(this: any) {
    //var_97 = 0; 常時OFF。ONにすると亀が消える。おそらくキャラ配置配列初期化?
    // ここから下はオリジナルには無いロッコ・バロッコ所長をヴェネチアホテルへ追加する要素。
    // おそらくウェブ版にて独自に追加したと思われる。Ver0.1310で廃止。Ver0.1403より復活。酒場へ追加するように位置修正。
    if (Gvar.var_759 >= 1) { // 岸辺露伴とのイベントフラグがON
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_761 = Gvar.var_97;
        Gvar.var_82[18][31] = Gvar.var_97; // マップ上のX軸とY軸の配列 Gvar.var_82[X軸][Y軸]
        Gvar.var_83[Gvar.var_97].Var0 = 173; // Gvar.enemy_list = 173 なのでロッコ・バロッコ所長
        Gvar.var_83[Gvar.var_97].Var1 = 18; // マップ上のX軸 18 → 18
        Gvar.var_83[Gvar.var_97].Var2 = 31; // マップ上のY軸 10 → 31
        Gvar.var_83[Gvar.var_97].Var3 = 20;
        Gvar.var_83[Gvar.var_97].Var4 = 0;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var10 = 1;
        Gvar.var_83[Gvar.var_97].Var31 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);

        // Ver0.1403より追加。バーテンダー。
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_761 = Gvar.var_97;
        Gvar.var_82[23][30] = Gvar.var_97; // マップ上のX軸とY軸の配列 Gvar.var_82[X軸][Y軸]
        Gvar.var_83[Gvar.var_97].Var0 = 82; // Gvar.enemy_list = 82 なのでバーテンダー
        Gvar.var_83[Gvar.var_97].Var1 = 23; // マップ上のX軸
        Gvar.var_83[Gvar.var_97].Var2 = 30; // マップ上のY軸
        Gvar.var_83[Gvar.var_97].Var3 = 20;
        Gvar.var_83[Gvar.var_97].Var4 = 0;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var10 = 1;
        Gvar.var_83[Gvar.var_97].Var31 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);

        // Ver0.1403より追加。D・ダービー。
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_761 = Gvar.var_97;
        Gvar.var_82[18][34] = Gvar.var_97; // マップ上のX軸とY軸の配列 Gvar.var_82[X軸][Y軸]
        Gvar.var_83[Gvar.var_97].Var0 = 70; // Gvar.enemy_list = 70 なのでD・ダービー
        Gvar.var_83[Gvar.var_97].Var1 = 18; // マップ上のX軸
        Gvar.var_83[Gvar.var_97].Var2 = 34; // マップ上のY軸
        Gvar.var_83[Gvar.var_97].Var3 = 20;
        Gvar.var_83[Gvar.var_97].Var4 = 0;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var10 = 1;
        Gvar.var_83[Gvar.var_97].Var31 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
    }
    return;
}

export {func160b}


// 酒場に入った時の表示
async function func161a(this: any) {
    Adap.dbgprt(161);
    Gvar.var_243 = 0;
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "酒場に入った";
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    await Dung.func114b(); // 酒場の選曲(BGM "")
    Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
    Gvar.var_66 = 25; // X軸 ok25 前21
    Gvar.var_67 = 32; // Y軸　ok31 前32
    await Main.func016();
    Gvar.var_595 = 2; // Gvar.dungeon_number = 0 での場所確認。2 = 酒場
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    await Main.func009(); // ゲーム基本動作フレーム処理
    return;
}

export {func161a}