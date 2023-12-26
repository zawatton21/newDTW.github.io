import { Gvar } from '../../variable'
import * as Adap from '../../adapter/index'
import * as Func from '../../func/index'
import * as Map from '../../map/index'
import * as Dung from '../../dungeon/index'
import * as Main from '../../newdtw/index'

// 亀の中の選曲(BGM "20th Century Boy")
async function func114(this: any) {
    Adap.dbgprt(114);
    Gvar.var_678 = 1;
    Gvar.bgm_list_id = 989; // BGM "20th Century Boy"
    Gvar.var_681 = 989;
    await Func.func103(); // BGM再生関数を呼び出し(選曲されていない時は、ダンジョン内のテーマソング　"0.mp3" 設定)
    Gvar.var_678 = 0;
    return;
}

export {func114}


// 亀の中に入った時の表示
async function func161(this: any) {
        Adap.dbgprt(161);
        Gvar.var_243 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "亀の中に入った";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Dung.func114(); // 亀の中の選曲(BGM "20th Century Boy")
        Gvar.var_65[Gvar.var_66][Gvar.var_67] = 0;
        Gvar.var_66 = 14; // X軸
        Gvar.var_67 = 23; // Y軸
        await Main.func016();
        Gvar.var_595 = 1; // Gvar.dungeon_number = 0 での場所確認。1 = 亀の中
        Gvar.var_374 = 1;
        Gvar.var_772 = 1;
        Gvar.var_773 = 1;
        Gvar.var_774 = 0;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_773++;
            Gvar.var_774 = Gvar.var_774 + 20;
        }
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_773++;
        }
        Gvar.var_773 = 0;
        Gvar.var_772 = 0;
        Gvar.var_374 = 0;
        Gvar.var_199 = 2;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func161}


async function func065(this: any) {
    Adap.dbgprt(65);
    await Dung.func066(); // 亀の倉庫のジッパー関連機能
}

export {func065}

async function func066(this: any) {
    Adap.dbgprt(66);
    // 持っているアイテムの数が0の時
    if (Gvar.var_224 == 0) {
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "足元にジッパーが付いている。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "持ち物全てをジッパーに捨てますか？";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func340(); // キー入力による選択処理
    await Func.func051();
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.var_547 = 1; // 亀のジッパーで捨てるフラグON
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func066}


async function func067(this: any) {
    Adap.dbgprt(67);
    Gvar.var_549 = Gvar.var_550;
    Gvar.var_551 = 0;
    Gvar.var_552 = 1;
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        await Func.func426();
        await Func.func427();
        await Func.func428();
        await Func.func429();
        if (Gvar.var_233[Gvar.var_552].Var0 != 0 && Gvar.var_552 != Gvar.var_553 && Gvar.var_552 != Gvar.var_554 && Gvar.var_552 != Gvar.var_555 && Gvar.var_552 != Gvar.var_556) {
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_552].Var0;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_550 = Gvar.var_550 + Gvar.buying_price;
            Gvar.var_225 = Gvar.var_552;
            await Func.func433(); // アイテム配列(所持アイテム)初期化関数
            Gvar.var_551 = 1;
            cnt1 = -1;
            continue;
        }
        Gvar.var_552++;
    }
    // アイテムを持っているが、装備している状態で捨てられない場合
    if (Gvar.var_551 == 0) {
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "捨てられるものがない。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "全て捨てた。";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    Adap.DSPLAY(148);

    // 亀の倉庫 成長計算式
    Gvar.var_557 = 1;
    for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_557++;
    }
    Gvar.var_557 = 0;
    if (Gvar.var_550 > 999999) {
        Gvar.var_550 = 999999;
    }
    Gvar.var_558 = 0;
    // Gvar.var_559は亀の成長レベル(拡張レベル)、var_550は投資した栄養の合計
    if (Gvar.var_559 == 0 && Gvar.var_550 >= 10000) { // Ver0.1401にて修正。5000 → 10000
        Gvar.var_559 = 1;
        Gvar.var_558 = 1;
    }
    if (Gvar.var_559 == 1 && Gvar.var_550 >= 20000) { // Ver0.1401にて修正。10000 → 20000
        Gvar.var_559 = 2;
        Gvar.var_558 = 1;
    }
    if (Gvar.var_559 == 2 && Gvar.var_550 >= 40000) { // Ver0.1401にて修正。20000 → 40000
        Gvar.var_559 = 3;
        Gvar.var_558 = 1;
    }
    if (Gvar.var_559 == 3 && Gvar.var_550 >= 80000) { // Ver0.1401にて修正。40000 → 80000
        Gvar.var_559 = 4;
        Gvar.var_558 = 1;
    }
    if (Gvar.var_558 == 1) {
        await Map.func293(); // ダンジョンマップ初期化処理(+ヴェネチアホテル)
        Gvar.var_560 = 1;
        Gvar.var_561 = 5; // マップX軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
        Gvar.var_562 = 5; // Ver0.1404にて修正。0 → 5。実験中に0へ変更したのを戻し忘れ。マップY軸原点の初期値5 (安易に変更すると壁の中になるのでワープしてしまう)
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
        await Func.func248();
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "亀はアイテムを養分として";
        Gvar.comments_row2a = "成長したようだ。";
        if (Gvar.var_559 == 4) {
            Gvar.comments_row1a = "亀はアイテムを養分として";
            Gvar.comments_row2a = "最大まで成長したようだ。";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
    }
    await Main.func009(); // ゲーム基本動作フレーム処理
    return;
}

export {func067}
