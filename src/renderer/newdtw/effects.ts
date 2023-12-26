import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// 波紋攻撃を喰らって麻痺している状態の動作処理s
async function func021(this: any) {
        Adap.dbgprt(21);
        Gvar.var_178++;
        if (Gvar.var_178 == 3) {
            Gvar.var_217 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは動けるようになった";
            Gvar.var_178 = 0;
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
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
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.comments_row1 = "…痺れていて動けない。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func021}



// 氷状態の動作処理
async function func022(this: any) {
        Adap.dbgprt(22);
        if (Gvar.to_freeze >= 1) {
            Gvar.var_281 = Gvar.var_66 - 1;
            if (Gvar.var_281 < 0) {
                Gvar.var_281 = 0;
            }
            Gvar.var_282 = Gvar.var_66 + 1;
            if (Gvar.var_282 > Gvar.var_33) {
                Gvar.var_282 = Gvar.var_33;
            }
            Gvar.var_283 = Gvar.var_67 - 1;
            if (Gvar.var_283 < 0) {
                Gvar.var_283 = 0;
            }
            Gvar.var_284 = Gvar.var_67 + 1;
            if (Gvar.var_284 > Gvar.var_34) {
                Gvar.var_284 = Gvar.var_34;
            }
            Gvar.var_457 = 0;
            Gvar.var_286 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
                if (Gvar.var_83[Gvar.var_286].Var0 == 36 && Gvar.var_83[Gvar.var_286].Var1 >= Gvar.var_281 && Gvar.var_83[Gvar.var_286].Var1 <= Gvar.var_282 && Gvar.var_83[Gvar.var_286].Var2 >= Gvar.var_283 && Gvar.var_83[Gvar.var_286].Var2 <= Gvar.var_284) {
                    if (Gvar.var_83[Gvar.var_286].Var31 == 5 && Gvar.var_83[Gvar.var_286].Var23 == 0 && Gvar.var_83[Gvar.var_286].Var17 == 0 && Gvar.var_83[Gvar.var_286].Var12 == 0 && Gvar.var_83[Gvar.var_286].Var13 == 0) {
                        Gvar.var_457 = 1;
                        break;
                    }
                }
                Gvar.var_286 = Gvar.var_286 + 1;
            }
            if (Gvar.var_457 == 1) {
                Gvar.var_83[Gvar.var_286].Var3 = 1;
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "極寒地にすむエスキモーはよお！";
                Gvar.comments_row2 = "凍傷にかかった時！";
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
                Gvar.comments_row1a = "アザラシの肉の体内に入って";
                Gvar.comments_row2a = "治していたぜ！";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func340(); // キー入力による選択処理
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "これならどうだ――っ！！";
                Gvar.comments_row2a = "";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func340(); // キー入力による選択処理
                Adap.DSPLAY(175);
                Gvar.var_458 = 1;
                Gvar.var_271 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_458++;
                }
                Gvar.var_458 = 0;
                Gvar.var_271 = 0;
                Gvar.to_freeze = 0;
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "ｽﾋﾟｰﾄﾞﾜｺﾞﾝの治療によって";
                Gvar.comments_row2a = "ﾃﾞｨｱﾎﾞﾛは動けるようになった";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func340(); // キー入力による選択処理
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "しかしｽﾋﾟｰﾄﾞﾜｺﾞﾝは";
                Gvar.comments_row2a = "ひどく憔悴してしまったようだ…";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                await Main.func009(); // ゲーム基本動作フレーム処理
                return;
            }
        }
        Gvar.to_freeze++;
        if (Gvar.to_freeze == 10) {
            Gvar.var_217 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは動けるようになった";
            Gvar.to_freeze = 0;
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
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
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.comments_row1 = "…凍っていて動けない。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func022}



async function func023(this: any) {
    Adap.dbgprt(23);
    Gvar.var_459 = 0;
    if (Gvar.var_459 == 0) {
        Gvar.to_freeze = 0;
    }
    return;
}

export {func023}


async function func024(this: any) {
    Adap.dbgprt(24);
    Gvar.var_459 = 0;
    if (Gvar.var_459 == 0) {
        Gvar.var_83[Gvar.var_460].Var13 = 0;
    }
    return;
}

export {func024}


async function func025(this: any) {
    Adap.dbgprt(25);
    Gvar.var_219++;
    if (Gvar.var_219 == 5) {
        Gvar.var_217 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは目を覚ました";
        Gvar.var_219 = 0;
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    Adap.DSPLAY(132);
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "…眠くて何もできない。";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_217 = 1;
    await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
    return;
}

export {func025}

// その場へ固定された時の動作処理
async function func026(this: any) {
    Adap.dbgprt(26);
    await Func.func080(); // 各キー入力確認
    if (Gvar.var_253 == 1) {
        Gvar.var_199 = 7;
    }
    if (Gvar.var_254 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
        Gvar.var_199 = 7;
    }
    if (Gvar.var_256 == 1) {
        Gvar.var_199 = 9;
    }
    if (Gvar.var_257 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
        Gvar.var_199 = 9;
    }
    if (Gvar.var_258 == 1) {
        Gvar.var_199 = 1;
    }
    if (Gvar.var_254 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
        Gvar.var_199 = 1;
    }
    if (Gvar.var_260 == 1) {
        Gvar.var_199 = 3;
    }
    if (Gvar.var_257 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
        Gvar.var_199 = 3;
    }
    if (Gvar.var_254 == 1) {
        Gvar.var_199 = 4;
    }
    if (Gvar.var_257 == 1) {
        Gvar.var_199 = 6;
    }
    if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
        Gvar.var_199 = 8;
    }
    if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
        Gvar.var_199 = 2;
    }
    if (Gvar.var_116 == 0 && Gvar.var_114 == 0) {
        Gvar.var_461 = 0;
        Gvar.var_462 = 0;
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    if (Gvar.var_66 != Gvar.var_461 || Gvar.var_67 != Gvar.var_462) {
        Gvar.var_115 = 0;
        Gvar.var_116 = 0;
        Gvar.var_114 = 0;
        Gvar.var_461 = 0;
        Gvar.var_462 = 0;
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    if (Gvar.var_83[Gvar.var_114].Var0 == 0 && Gvar.var_116 == 0) {
        Gvar.var_114 = 0;
        Gvar.var_461 = 0;
        Gvar.var_462 = 0;
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    if (Gvar.var_83[Gvar.var_114].Var0 != 0 && Gvar.var_116 == 0) {
        if (Gvar.var_83[Gvar.var_114].Var1 != Gvar.var_463 || Gvar.var_83[Gvar.var_114].Var2 != Gvar.var_464) {
            Gvar.var_114 = 0;
            Gvar.var_461 = 0;
            Gvar.var_462 = 0;
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
    }
    Gvar.var_465 = Gvar.var_66 - 1;
    if (Gvar.var_465 < 0) {
        Gvar.var_465 = 0;
    }
    Gvar.var_466 = Gvar.var_66 + 1;
    Gvar.var_467 = Gvar.var_67 + 1;
    Gvar.var_468 = Gvar.var_67 - 1;
    if (Gvar.var_468 < 0) {
        Gvar.var_468 = 0;
    }
    if (Gvar.var_199 == 4) {
        if (Gvar.var_71[Gvar.var_465][Gvar.var_67] == 0 || Gvar.var_82[Gvar.var_465][Gvar.var_67] == 13 || Gvar.var_82[Gvar.var_465][Gvar.var_67] >= 1) {
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
    }
    if (Gvar.var_199 == 6) {
        if (Gvar.var_71[Gvar.var_466][Gvar.var_67] == 0 || Gvar.var_82[Gvar.var_466][Gvar.var_67] == 13 || Gvar.var_82[Gvar.var_466][Gvar.var_67] >= 1) {
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
    }
    if (Gvar.var_199 == 2) {
        if (Gvar.var_71[Gvar.var_66][Gvar.var_467] == 0 || Gvar.var_82[Gvar.var_66][Gvar.var_467] == 13 || Gvar.var_82[Gvar.var_66][Gvar.var_467] >= 1) {
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
    }
    if (Gvar.var_199 == 8) {
        if (Gvar.var_71[Gvar.var_66][Gvar.var_468] == 0 || Gvar.var_82[Gvar.var_66][Gvar.var_468] == 13 || Gvar.var_82[Gvar.var_66][Gvar.var_468] >= 1) {
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
    }
    if (Gvar.var_199 == 1) {
        if (Gvar.var_71[Gvar.var_465][Gvar.var_467] == 0 || Gvar.var_82[Gvar.var_465][Gvar.var_467] == 13 || Gvar.var_82[Gvar.var_465][Gvar.var_467] >= 1) {
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
    }
    if (Gvar.var_199 == 3) {
        if (Gvar.var_71[Gvar.var_466][Gvar.var_467] == 0 || Gvar.var_82[Gvar.var_466][Gvar.var_467] == 13 || Gvar.var_82[Gvar.var_466][Gvar.var_467] >= 1) {
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
    }
    if (Gvar.var_199 == 7) {
        if (Gvar.var_71[Gvar.var_465][Gvar.var_468] == 0 || Gvar.var_82[Gvar.var_465][Gvar.var_468] == 13 || Gvar.var_82[Gvar.var_465][Gvar.var_468] >= 1) {
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
    }
    if (Gvar.var_199 == 9) {
        if (Gvar.var_71[Gvar.var_466][Gvar.var_468] == 0 || Gvar.var_82[Gvar.var_466][Gvar.var_468] == 13 || Gvar.var_82[Gvar.var_466][Gvar.var_468] >= 1) {
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
    }
    Gvar.var_271 = 1;
    Gvar.var_469 = 1;
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    if (Gvar.var_114 == 0) {
        Gvar.comments_row1 = "固定されて動けない！";
    }
    if (Gvar.var_114 >= 1) {
        Gvar.comments_row1 = "つかまれていて動けない！";
    }
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_469 = Gvar.var_469 + 1;
    }
    Gvar.var_271 = 0;
    Gvar.var_469 = 0;
    Gvar.var_217 = 1;
    await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
    return;
}

export {func026}


async function func027(this: any) {
    Adap.dbgprt(27);
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "動けるようになった。";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func027}


async function func028(this: any) {
    Adap.dbgprt(28);
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "透明状態ではなくなった";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func028}


async function func029(this: any) {
    Adap.dbgprt(29);
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "周囲がドロドロではなくなった";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func029}


async function func030(this: any) {
    Adap.dbgprt(30);
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "鈍足状態が治った";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func030}

async function func034(this: any) {
    Adap.dbgprt(34);
    if (Gvar.var_132 != 0) {
        return;
    }
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "盲目状態が治った";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func034}

async function func035(this: any) {
    Adap.dbgprt(35);
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "ンドゥールの気分が消えた";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func035}


async function func036(this: any) {
    Adap.dbgprt(36);
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "混乱状態が治った";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func036}


async function func037(this: any) {
    Adap.dbgprt(37);
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "冷静になった。";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func037}


// ヨーヨーマッ関係の処理
async function func038(this: any) {
    Adap.dbgprt(38);
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "ﾖｰﾖｰﾏｯ「もっとおおおおおお";
    Gvar.comments_row2 = "　私を叱ってええええええ」";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    await Func.func340(); // キー入力による選択処理
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "ﾖｰﾖｰﾏｯのあまりの臭さで";
    Gvar.comments_row2a = "正気に戻った。";
    await Func.func050();
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func038}


async function func039(this: any) {
    Adap.dbgprt(39);
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "錠前のショックで";
    Gvar.comments_row2 = "正気に戻った。";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func039}


async function func040(this: any) {
    Adap.dbgprt(40);
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    Gvar.comments_row1 = "鉄塔が消滅した。";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    return;
}

export {func040}
