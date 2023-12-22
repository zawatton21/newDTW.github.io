import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Ex from '../extra_items/index'

// No = 723 アイテム「魔法のランプ」を使用した時の効果
async function item723(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Gvar.item_message1 = "しかし何も起こらなかった…";
            return;
        }
        Gvar.var_1055 = 1;
        return;
}

export {item723}

// 魔法のランプを使用した際の動作処理
async function func447(this: any) {
    Adap.dbgprt(447);
    Gvar.var_1055 = 0;
    Gvar.var_1584 = 160;
    Gvar.var_1585 = 120;
    Gvar.var_1587 = 130;
    Gvar.var_1588 = 100;
    Gvar.var_1589 = 190;
    Gvar.var_1590 = 100;
    Gvar.var_271 = 1;
    Gvar.var_1582 = 1;
    Gvar.var_1586 = 1;
    Adap.DSPLAY(168);
    for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1586++;
    }
    Gvar.var_1586 = 0;
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "「願い事を ひとつ言え！」";
    Gvar.comments_row2 = "";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func340(); // キー入力による選択処理
    await Func.func051();
    Gvar.var_1207 = 1;
    Gvar.var_1991 = 1;
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    await Ex.func448();
}

export {func447}


// ジャッジメント召喚時のメッセージ画面カーソル処理
async function func448(this: any) {
    Adap.dbgprt(448);
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func080(); // 各キー入力確認
    if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
        if (Gvar.var_1991 == 6) {
            Gvar.var_246 = 45;
            Gvar.var_1991 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_1991 != 6) {
            Gvar.var_246 = Gvar.var_246 + 18;
            Gvar.var_1991++;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
        }
    }
    if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
        if (Gvar.var_1991 == 1) {
            Gvar.var_246 = 135;
            Gvar.var_1991 = 6;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_1991 != 1) {
            Gvar.var_246 = Gvar.var_246 - 18;
            Gvar.var_1991--;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
        }
    }
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
        Adap.DSPLAY(100); // アイテム選択時の効果音
        await Ex.func450(); // ジャッジメントの問に答え、ジャッジメントが去る時の動作処理
        return;
    }
    await Ex.func448();
    return;
}

export {func448}

// 魔法のランプでジャッジメントを召喚した時のメッセージ処理
async function func449(this: any) {
    Adap.dbgprt(449);
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(12, 37);
    Adap.gcopy(12, 0, 0, 223, 123);
    Adap.color(255, 255, 255);
    Adap.line(15, 39, 230, 39);
    Adap.line(15, 156, 230, 156);
    Adap.line(14, 40, 14, 154);
    Adap.line(232, 40, 232, 154);
    Adap.pset(15, 40);
    Adap.pset(231, 40);
    Adap.pset(15, 155);
    Adap.pset(231, 155);
    Adap.font(Gvar.font_type = "ＭＳ Ｐゴシック", Gvar.font_size = 16, Gvar.font_style = 1);
    Adap.color(255, 255, 255);
    Adap.pos(33, 47);
    Adap.mes("お金持ちになりたい");
    Adap.pos(33, 65);
    Adap.mes("満腹になりたい");
    Adap.pos(33, 83);
    Adap.mes("体力を回復させてくれ");
    Adap.pos(33, 99);
    Adap.mes("敵の動きを止めてくれ");
    Adap.pos(33, 117);
    Adap.mes("ｱﾌﾞﾄﾞｩﾙを生き返らせてくれ");
    Adap.pos(33, 135);
    Adap.mes("願いを増やしてくれ");
    Adap.color(255, 255, 255);
    Adap.font("MS ゴシック", 16, 1);
    Adap.pos(Gvar.var_245, Gvar.var_246);
    Adap.mes(">");
    Adap.pos(Gvar.var_245 + 1, Gvar.var_246);
    Adap.mes(">");
    Adap.pos(Gvar.var_245 + 2, Gvar.var_246);
    Adap.mes(">");
    return;
}

export {func449}

// ジャッジメントの問に答え、ジャッジメントが去る時の動作処理
async function func450(this: any) {
    Adap.dbgprt(450);
    if (Gvar.var_1991 == 6) {
        await Ex.func451(); // ジャッジメントの問いに対して、願いの数を増やしてくれと選択した時の動作処理
        return;
    }
    Gvar.var_1207 = 0;
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "「Ｈａｉｌ　２　Ｕ ！」";
    Gvar.comments_row2 = "　　（君に幸あれ！）";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_271 = 1;
    Gvar.var_1582 = 0;
    Gvar.var_1586 = 1;
    Adap.DSPLAY(168);
    for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1586++;
    }
    Gvar.var_1586 = 0;
    Gvar.var_271 = 0;
    if (Gvar.var_1991 == 1) {
        await Ex.func452(); // ジャッジメントの問いに対して、お金持ちになりたいと選択した時の動作処理
        return;
    }
    if (Gvar.var_1991 == 2) {
        await Ex.func453(); // ジャッジメントの問いに対して、満腹になりたいと選択した時の動作処理
        return;
    }
    if (Gvar.var_1991 == 3) {
        await Ex.func454(); // ジャッジメントの問いに対して、体力を回復させてくれと選択した時の動作処理
        return;
    }
    if (Gvar.var_1991 == 4) {
        await Ex.func455(); // ジャッジメントの問いに対して、敵の動きをとめてくれと選択した時の動作処理
        return;
    }
    if (Gvar.var_1991 == 5) {
        await Ex.func456(); // ジャッジメントの問いに対して、アヴドゥルを生き返らせてくれと選択した時の動作処理
        return;
    }
    await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
    return;
}

export {func450}

// 願いの数を増やしてくれと選択した時の動作処理
async function func451(this: any) {
    Adap.dbgprt(451);
    Gvar.var_1207 = 0;
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "「きさま」";
    Gvar.comments_row2 = "";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func340(); // キー入力による選択処理
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "「そういう冗談は・・・！」";
    Gvar.comments_row2a = "";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func050();
    await Func.func340(); // キー入力による選択処理
    Gvar.var_199 = 8;
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        if (cnt1 == 3) {
            Gvar.var_389 = 2;
            Gvar.var_747 = 1;
            Adap.DSPLAY(105);
        }
        Gvar.var_1582++;
    }
    Gvar.var_389 = 0;
    if (Gvar.var_211 == 1) {
        Gvar.var_211 = 0;
        Gvar.var_356 = 250;
    }
    if (Gvar.var_211 >= 2) {
        Gvar.var_211 = 1;
    }
    Gvar.var_1582 = 1;
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_271 = 1;
    Gvar.var_1582 = 0;
    Gvar.var_1586 = 1;
    for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1586++;
    }
    Gvar.var_1586 = 0;
    Gvar.var_271 = 0;
    for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
    return;
}

export {func451}

// お金持ちになりたいと選択した時の動作処理
async function func452(this: any) {
    Adap.dbgprt(452);
    Adap.DSPLAY(166);
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "ザグッ！　ザグッ！　ザグッ！";
    Gvar.comments_row2a = "";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func050();
    await Func.func340(); // キー入力による選択処理
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "このフロアにお金が出現した！";
    Gvar.comments_row2a = "";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func050();
    await Func.func340(); // キー入力による選択処理
    Gvar.var_1759 = 1;
    Gvar.var_452 = 1;
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func384(); // アイテムをフロアへ追加する処理
    }
    Gvar.var_1759 = 0;
    Gvar.var_452 = 0;
    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
    return;
}

export {func452}

// 満腹になりたいと選択した時の動作処理
async function func453(this: any) {
    Adap.dbgprt(453);
    Gvar.var_1299 = 9;
    Gvar.var_271 = 1;
    Gvar.var_1297 = 1;
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1297++;
    }
    Gvar.var_271 = 0;
    Gvar.var_1297 = 0;
    Gvar.var_360 = 0;
    Gvar.var_350 = Gvar.var_567;
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "お腹が一杯になった！";
    Gvar.comments_row2a = "";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func050();
    await Func.func340(); // キー入力による選択処理
    await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
    return;
}

export {func453}

// 体力を回復させてくれと選択した時の動作処理
async function func454(this: any) {
    Adap.dbgprt(454);
    Adap.DSPLAY(143);
    Gvar.var_1299 = 5;
    Gvar.var_271 = 1;
    Gvar.var_1297 = 1;
    for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_1297++;
    }
    Gvar.var_271 = 0;
    Gvar.var_1297 = 0;
    Gvar.var_211 = Gvar.var_352;
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "体力が回復した！";
    Gvar.comments_row2a = "";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func050();
    await Func.func340(); // キー入力による選択処理
    await Ex.func457(); // ジャッジメントの問いに対して、体力を回復させてくれと選択した時、体力回復後の状態異常回復の動作処理
    await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
    return;
}

export {func454}

// 敵の動きをとめてくれと選択した時の動作処理
async function func455(this: any) {
    Adap.dbgprt(455);
    Gvar.var_1992 = 1;
    Gvar.var_1993 = Gvar.var_66 - 1;
    Gvar.var_1994 = Gvar.var_66 + 1;
    Gvar.var_1995 = Gvar.var_67 + 1;
    Gvar.var_1996 = Gvar.var_67 - 1;
    Gvar.var_1997 = 0;
    for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
        if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1995) {
            Gvar.var_83[Gvar.var_1992].Var12 = 0;
            Gvar.var_83[Gvar.var_1992].Var13 = 99;
            Gvar.var_1997 = 1;
        }
        if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1996) {
            Gvar.var_83[Gvar.var_1992].Var12 = 0;
            Gvar.var_83[Gvar.var_1992].Var13 = 99;
            Gvar.var_1997 = 1;
        }
        if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_67) {
            Gvar.var_83[Gvar.var_1992].Var12 = 0;
            Gvar.var_83[Gvar.var_1992].Var13 = 99;
            Gvar.var_1997 = 1;
        }
        if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_67) {
            Gvar.var_83[Gvar.var_1992].Var12 = 0;
            Gvar.var_83[Gvar.var_1992].Var13 = 99;
            Gvar.var_1997 = 1;
        }
        if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1995) {
            Gvar.var_83[Gvar.var_1992].Var12 = 0;
            Gvar.var_83[Gvar.var_1992].Var13 = 99;
            Gvar.var_1997 = 1;
        }
        if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1995) {
            Gvar.var_83[Gvar.var_1992].Var12 = 0;
            Gvar.var_83[Gvar.var_1992].Var13 = 99;
            Gvar.var_1997 = 1;
        }
        if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1996) {
            Gvar.var_83[Gvar.var_1992].Var12 = 0;
            Gvar.var_83[Gvar.var_1992].Var13 = 99;
            Gvar.var_1997 = 1;
        }
        if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1996) {
            Gvar.var_83[Gvar.var_1992].Var12 = 0;
            Gvar.var_83[Gvar.var_1992].Var13 = 99;
            Gvar.var_1997 = 1;
        }
        Gvar.var_1992 = Gvar.var_1992 + 1;
    }
    if (Gvar.var_1997 == 1) {
        Adap.DSPLAY(126);
    }
    Gvar.var_114 = 0;
    Gvar.var_463 = 0;
    Gvar.var_464 = 0;
    Gvar.var_461 = 0;
    Gvar.var_462 = 0;
    await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
    return;
}

export {func455}

// アヴドゥルを生き返らせてくれと選択した時の動作処理
async function func456(this: any) {
    Adap.dbgprt(456);
    Adap.DSPLAY(166);
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "ザグッ！　ザグッ！　ザグッ！";
    Gvar.comments_row2a = "";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func050();
    await Func.func340(); // キー入力による選択処理
    Gvar.var_1998 = 1;
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func556(); // 敵をフロアへ出現させる処理
    }
    Gvar.var_1998 = 0;
    await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
    await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
    return;
}

export {func456}

// 体力を回復させてくれと選択した時、体力回復後の状態異常回復の動作処理
async function func457(this: any) {
    Adap.dbgprt(457);
    if (Gvar.var_565 != Gvar.var_566 || Gvar.var_133 != 0 || Gvar.var_110 != 0 || Gvar.var_109 != 0 || Gvar.var_134 != 0 || Gvar.var_126 != 0 || Gvar.var_132 != 0 || Gvar.var_127 != 0) {
        Gvar.var_565 = Gvar.var_566;
        Gvar.var_133 = 0;
        Gvar.var_110 = 0;
        Gvar.var_109 = 0;
        Gvar.var_134 = 0;
        Gvar.var_126 = 0;
        Gvar.var_132 = 0;
        Gvar.var_127 = 0;  // 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグOFF
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "状態異常が治った！";
        Gvar.comments_row2a = "";
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
    }
    return;
}

export {func457}
