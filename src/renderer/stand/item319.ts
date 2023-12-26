import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Stand from '../stand/index'
import * as Main from '../newdtw/index'

// No = 319 ボーイⅡマンの発動処理
async function item319(this: any) {
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "能力を消すDISCを選んでください";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.var_2300 = Gvar.var_225;
        Gvar.var_2301 = 0;
        if (Gvar.var_220 != 0) {
            Gvar.var_2301 = 1;
        }
        if (Gvar.var_234 != 0) {
            Gvar.var_2301 = 2;
        }
        Gvar.var_198 = 0;
        Gvar.var_2006 = 1;
        Gvar.item_page_number = 1;
        Gvar.Y_axis_item_position = 45;
        Gvar.var_225 = 1;
        Gvar.var_223 = Gvar.var_224 + 10;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        await Func.func051();
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
}

export {item319}



// ボーイⅡマンの発動能力1
async function func525(this: any) {
        Adap.dbgprt(525);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        if (Gvar.var_233[Gvar.var_225].Var0 < 100 || Gvar.var_233[Gvar.var_225].Var0 >= 400) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "それは装備用DISCではありません";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051();
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_233[Gvar.var_225].Var19 <= 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "それに合成された能力はありません。";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051();
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        await Func.func426();
        await Func.func427();
        await Func.func428();
        if (Gvar.var_553 == Gvar.var_225 || Gvar.var_554 == Gvar.var_225 || Gvar.var_555 == Gvar.var_225) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "装備しているDISCは";
            Gvar.comments_row2 = "はずさないと能力を消せません。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051();
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_2301 == 0 && Gvar.var_225 == Gvar.var_2300) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "それは現在使用中のDISCです。";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051();
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        if (Gvar.var_233[Gvar.var_225].Var13 >= 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "このDISCの能力は、特別なパワーで";
            Gvar.comments_row2 = "守られているようだ。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051();
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.var_2006 = 0;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1289 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_2373 = Gvar.var_225;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.strengthen_item_name = Gvar.item_name;
        await Func.func051();
        Gvar.var_1208 = 2;
        Gvar.belongings_item_list = Gvar.var_1289;
        Gvar.var_2374 = 157;
        Gvar.var_2375 = 2;
        Gvar.var_2376 = Gvar.var_233[Gvar.var_225].Var19;
        await Func.func368(); // アイテム配列変え関数??
        return;
}

export {func525}


async function func526(this: any) {
    Adap.dbgprt(526);
    Gvar.var_2375 = Gvar.var_2375 + 19;
    Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2375] = 0;
    Gvar.var_2377 = 20;
    Gvar.var_2378 = 21;
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        if (Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2377] == 0 && Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2378] != 0) {
            Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2377] = Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2378];
            Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2378] = 0;
            Gvar.var_2377 = 20;
            Gvar.var_2378 = 21;
            cnt1 = -1;
            continue;
        }
        Gvar.var_2377++;
        Gvar.var_2378++;
    }
    Gvar.var_233[Gvar.var_2373].Var19 = Gvar.var_233[Gvar.var_2373].Var19 - 1;
    if (Gvar.var_233[Gvar.var_2373].Var19 <= 1) {
        Gvar.var_233[Gvar.var_2373].Var19 = 1;
    }
    Gvar.var_233[Gvar.var_2373].Var5 = Gvar.var_233[Gvar.var_2373].Var5 + 1;
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "" + Gvar.strengthen_item_name + "の";
    Gvar.comments_row2 = "能力を１つ消去した。";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_225 = Gvar.var_2300;
    if (Gvar.var_2301 == 1) {
        Gvar.var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
    }
    if (Gvar.var_2301 == 2) {
        Gvar.var_234 = 1;
    }
    Gvar.belongings_item_list = 310;
    await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
    if (Gvar.var_2254 == 1) {
        Gvar.var_2254 = 0;
        await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
    }
    Gvar.var_217 = 1;
    Gvar.var_1667 = 0;
    Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
    Gvar.var_234 = 0;
    await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
    return;
}

export {func526}


async function func527(this: any) {
    Adap.dbgprt(527);
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func080(); // 各キー入力確認
    if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
        if (Gvar.var_2375 == Gvar.var_2376) {
            Gvar.var_2375 = 2;
            Gvar.var_2374 = 157;
            await Func.func337(); // メッセージ関係呼び出し
            await Stand.func527();
            return;
        }
        Gvar.var_2375 = Gvar.var_2375 + 1;
        Gvar.var_2374 = Gvar.var_2374 + 20;

        Adap.DSPLAY(100); // アイテム選択時の効果音
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        await Stand.func527();
        return;
    }
    if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
        if (Gvar.var_2375 == 2) {
            Gvar.var_2375 = Gvar.var_2376;
            Gvar.var_2374 = (Gvar.var_2376 - 2) * 20 + 157;
            await Func.func337(); // メッセージ関係呼び出し
            await Stand.func527();
            return;
        }
        Gvar.var_2375 = Gvar.var_2375 - 1;
        Gvar.var_2374 = Gvar.var_2374 - 20;

        Adap.DSPLAY(100); // アイテム選択時の効果音
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        await Stand.func527();
        return;
    }
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
        Gvar.var_1208 = 0;

        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Stand.func526();
        return;
    }
    if (Gvar.key_X_on == 1) {

        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        Gvar.var_1208 = 0;
        Gvar.var_198 = 0;
        Gvar.var_2006 = 1;
        Gvar.item_page_number = 1;
        Gvar.Y_axis_item_position = 45;
        Gvar.var_225 = 1;
        Gvar.var_223 = Gvar.var_224 + 10;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        await Func.func051();
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
    }
    await Stand.func527();
    return;
}

export {func527}



// ボーイIIマン発動時の能力消去選択処理
async function func528(this: any) {
    Adap.dbgprt(528);
    Adap.color(0, 0, 0);

    Adap.gmode(4, null, null, 100);
    Adap.pos(5, 35);
    Adap.gcopy(12, 0, 0, 332, Gvar.var_801 - 30);
    Adap.color(255, 255, 255);
    Adap.line(9, 37, 330, 37);
    Adap.line(9, Gvar.var_801, 330, Gvar.var_801);
    Adap.line(8, 38, 8, Gvar.var_801 - 2);
    Adap.line(332, 38, 332, Gvar.var_801 - 2);
    Adap.pset(9, 38);
    Adap.pset(331, 38);
    Adap.pset(9, Gvar.var_801 - 1);
    Adap.pset(331, Gvar.var_801 - 1);
    Adap.gmode(2, null, null, null);
    Adap.pos(285, 45);
    Adap.gcopy(9, 360, 0, 40, 20);
    Adap.pos(20, 45);
    Gvar.belongings_item_list = Gvar.var_1289;
    await Func.func492(); // アイテムリスト呼び出し
    Adap.pos(70, 55);

    Adap.font(Gvar.font_type = "ＭＳ Ｐゴシック", Gvar.font_size = 16, Gvar.font_style = 1);
    Adap.color(0, 255, 0);
    if (Gvar.item_modified_value == 0) {
        Adap.mes("" + Gvar.item_name + " ★" + Gvar.number_of_abilities);
    }
    if (Gvar.item_modified_value > 0) {
        Adap.mes("" + Gvar.item_name + "+" + Gvar.item_modified_value + " ★" + Gvar.number_of_abilities);
    }
    Adap.pos(30, 90);

    Adap.font("ＭＳ Ｐゴシック", 14, 1);
    Adap.color(255, 255, 255);
    Adap.mes("消去する能力を選んでください");
    Adap.pos(30, 110);

    Adap.font("ＭＳ Ｐゴシック", 12, 1);
    Adap.color(200, 200, 200);
    Adap.mes("※最初から備わっている能力は消去できません");
    Gvar.track_number = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_810 + Gvar.free_space_value; ++cnt1) {
        Adap.pos(35, Gvar.track_number * 20 + 120);
        Adap.color(255, 255, 255);
        if (Gvar.track_number == 1) {
            Adap.color(180, 180, 180);
        }

        Adap.font("MS UI ゴシック", 12, 1);
        Adap.mes("" + Gvar.track_number + "：");
        Gvar.track_number = Gvar.track_number + 1;
    }
    Gvar.track_number = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_810 + Gvar.free_space_value; ++cnt1) {
        Adap.pos(53, Gvar.track_number * 20 + 120);
        Gvar.belongings_item_list = Gvar.var_811[Gvar.track_number];
        await Func.func492(); // アイテムリスト呼び出し
        Adap.color(255, 255, 255);
        if (Gvar.var_812 == 1) {
            Adap.color(255, 255, 0);
        }
        if (Gvar.var_812 == 2) {
            Adap.color(255, 180, 90);
        }
        if (Gvar.var_812 == 3) {
            Adap.color(0, 255, 0);
        }
        if (Gvar.var_812 == 4) {
            Adap.color(240, 0, 240);
        }
        if (Gvar.track_number == 1) {
            Adap.color(180, 180, 180);
        }

        Adap.font("ＭＳ ゴシック", 14, 1);
        if (Gvar.var_813[Gvar.track_number] != "") {
            Adap.mes("" + Gvar.var_813[Gvar.track_number]);
        }
        if (Gvar.var_813[Gvar.track_number] == "") {
            Adap.mes("空き");
        }
        Gvar.track_number = Gvar.track_number + 1;
    }
    Adap.color(255, 255, 255);

    Adap.font(Gvar.font_type = "ＭＳ Ｐゴシック", Gvar.font_size = 16, Gvar.font_style = 1);
    Adap.pos(15, Gvar.var_2374);
    Adap.mes(">");
    Adap.pos(16, Gvar.var_2374);
    Adap.mes(">");
    Adap.pos(17, Gvar.var_2374);
    Adap.mes(">");
    return;
}

export {func528}
