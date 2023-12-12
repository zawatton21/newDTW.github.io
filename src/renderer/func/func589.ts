import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func589(this: any) {
        Adap.dbgprt(589);
        Gvar.var_2830 = Adap.rnd(3);
        if (Gvar.var_2830 == 0) {
            Gvar.var_2352 = Adap.rnd(2);
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.var_2352 == 0) {
                Gvar.comments_row1 = "ﾁｮｺﾗｰﾀはｾｯｺを呼んだ！";
            }
            if (Gvar.var_2352 == 1) {
                Gvar.comments_row1 = "ﾁｮｺﾗｰﾀはｸﾞﾘｰﾝﾃﾞｨを発現させた！";
            }
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_2352 == 0) {
                Gvar.var_2525 = 1;
            }
            if (Gvar.var_2352 == 1) {
                Gvar.var_2525 = 2;
            }
            Gvar.var_1845 = 1;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_2457 = Gvar.var_673;
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_2525 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 0) {
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                if (Gvar.var_2352 == 0) {
                    Gvar.comments_row1a = "しかしｾｯｺは来なかった…";
                }
                if (Gvar.var_2352 == 1) {
                    Gvar.comments_row1a = "しかしｽﾀﾝﾄﾞを出せなかった…";
                }
                Gvar.comments_row2a = "";
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                Gvar.var_2197 = 1;
                return;
            }
            Gvar.var_1584 = (Gvar.var_83[Gvar.var_2457].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1585 = (Gvar.var_83[Gvar.var_2457].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_271 = 1;
            Gvar.var_1583 = 1;
    
            Adap.DSPLAY(168);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_1583++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1583 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            if (Gvar.var_2352 == 0) {
                Gvar.comments_row1a = "ヤツが死ぬところを撮影して来いッ！";
            }
            if (Gvar.var_2352 == 1) {
                Gvar.comments_row1a = "低いところに降りられないぞ…";
            }
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_2197 = 1;
        }
        if (Gvar.var_2830 == 1 || Gvar.var_2830 == 2) {
            Gvar.var_1563 = Gvar.var_83[Gvar.var_673].Var1;
            Gvar.var_1564 = Gvar.var_83[Gvar.var_673].Var2;
            Gvar.var_2831 = Gvar.var_673;
            Gvar.var_2832 = Gvar.var_66 - 5;
            if (Gvar.var_2832 < 0) {
                Gvar.var_2832 = 0;
            }
            Gvar.var_2833 = Gvar.var_66 + 5;
            if (Gvar.var_2833 > Gvar.var_33) {
                Gvar.var_2833 = Gvar.var_33;
            }
            Gvar.var_2834 = Gvar.var_67 + 5;
            if (Gvar.var_2834 > Gvar.var_34) {
                Gvar.var_2834 = Gvar.var_34;
            }
            Gvar.var_2835 = Gvar.var_67 - 5;
            if (Gvar.var_2835 < 0) {
                Gvar.var_2835 = 0;
            }
            Gvar.var_2836 = 1;
            Gvar.var_1565 = 0;
            Gvar.var_1568 = Adap.dim(30, 3, Gvar.length3 = null, null);
            for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
                if (Gvar.var_83[Gvar.var_2836].Var0 == 43 && Gvar.var_83[Gvar.var_2836].Var11 == 0 && Gvar.var_83[Gvar.var_2836].Var12 == 0 && Gvar.var_83[Gvar.var_2836].Var13 == 0) {
                    if (Gvar.var_83[Gvar.var_2836].Var1 >= Gvar.var_2832 && Gvar.var_83[Gvar.var_2836].Var1 <= Gvar.var_2833 && Gvar.var_83[Gvar.var_2836].Var2 >= Gvar.var_2835 && Gvar.var_83[Gvar.var_2836].Var2 <= Gvar.var_2834) {
                        Gvar.var_1565++;
                        Gvar.var_1568[Gvar.var_1565][1] = Gvar.var_83[Gvar.var_2836].Var1;
                        Gvar.var_1568[Gvar.var_1565][2] = Gvar.var_83[Gvar.var_2836].Var2;
                        Gvar.var_83[Gvar.var_2836].Var21 = 1;
                        Gvar.var_411 = 1;
                    }
                }
                Gvar.var_2836++;
            }
            if (Gvar.var_1565 >= 1) {
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "ﾁｮｺﾗｰﾀ「甘いの３つ欲しいのかッ！？」";
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
        
                Adap.DSPLAY(102);
                Gvar.var_271 = 1;
                Gvar.var_1562 = 1;
                for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1562++;
                }
                Gvar.var_271 = 0;
                Gvar.var_1562 = 0;
                Gvar.var_271 = 1;
                Gvar.var_1566 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1566++;
                }
                Gvar.var_271 = 0;
                Gvar.var_1566 = 0;
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "セッコ「ガリガリガリガリガリガリガリ」";
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                Adap.DSPLAY(196);
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    Gvar.var_411 = 2;
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_411 = 3;
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_2837 = 1;
                Gvar.var_1565 = 0;
                for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_2837].Var0 == 43 && Gvar.var_83[Gvar.var_2837].Var11 == 0 && Gvar.var_83[Gvar.var_2837].Var12 == 0 && Gvar.var_83[Gvar.var_2837].Var13 == 0) {
                        if (Gvar.var_83[Gvar.var_2837].Var1 >= Gvar.var_2832 && Gvar.var_83[Gvar.var_2837].Var1 <= Gvar.var_2833 && Gvar.var_83[Gvar.var_2837].Var2 >= Gvar.var_2835 && Gvar.var_83[Gvar.var_2837].Var2 <= Gvar.var_2834) {
                            if (Gvar.var_83[Gvar.var_2837].Var25 >= 50) {
                                Gvar.var_83[Gvar.var_2837].Var25 -= 2;
                                if (Gvar.var_83[Gvar.var_2837].Var25 < 50) {
                                    Gvar.var_83[Gvar.var_2837].Var25 = 0;
                                }
                            }
                            if (Gvar.var_83[Gvar.var_2837].Var25 < 50) {
                                Gvar.var_83[Gvar.var_2837].Var25 += 2;
                                if (Gvar.var_83[Gvar.var_2837].Var25 >= 50) {
                                    Gvar.var_83[Gvar.var_2837].Var25 = 49;
                                }
                            }
                            Gvar.var_83[Gvar.var_2837].Var21 = 0;
                            Gvar.var_411 = 0;
                        }
                    }
                    Gvar.var_2837++;
                }
        
                Adap.DSPLAY(182);
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "近くのセッコの攻撃力が上がった！";
                Gvar.comments_row2a = "";
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_2197 = 1;
            }
        }
        return;
}

export {func589}
