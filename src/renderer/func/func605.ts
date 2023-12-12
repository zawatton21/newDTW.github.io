import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func605(this: any) {
        Adap.dbgprt(605);
        Gvar.var_240 = 0;
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_743 = 1; //スタンド像付与フラグON
        Adap.DSPLAY(102);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_742 = 0;
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_2866 = 0;
        Gvar.var_2867 = Adap.rnd(8);
        if (Gvar.var_105 == 1) { // Gvar.var_105 攻撃を躱わしやすくなるフラグがONであれば
            if (Gvar.var_2867 == 2 || Gvar.var_2867 == 3) {
                Gvar.var_2867 = 0;
                Gvar.var_2868 = 1;
            }
        }
        if (Gvar.dungeon_number == 99) {
            Gvar.var_2867 = 1;
        }
        if (Gvar.var_2867 == 0) {
            Gvar.var_2866 = 1;
        }
        Gvar.var_2764 = Gvar.var_66 - 1;
        Gvar.var_2765 = Gvar.var_66 + 1;
        Gvar.var_2766 = Gvar.var_67 + 1;
        Gvar.var_2767 = Gvar.var_67 - 1;
        if (Gvar.var_2764 < 5) {
            Gvar.var_2764 = 5;
        }
        if (Gvar.var_2767 < 5) {
            Gvar.var_2767 = 5;
        }
        if (Gvar.var_2765 > Gvar.var_33) {
            Gvar.var_2765 = Gvar.var_33;
        }
        if (Gvar.var_2766 > Gvar.var_34) {
            Gvar.var_2766 = Gvar.var_34;
        }
        if (Gvar.var_71[Gvar.var_2764][Gvar.var_67] == 0) {
            Gvar.var_1449 = 4;
        }
        if (Gvar.var_71[Gvar.var_2765][Gvar.var_67] == 0) {
            Gvar.var_1449 = 6;
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_2766] == 0) {
            Gvar.var_1449 = 2;
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_2767] == 0) {
            Gvar.var_1449 = 8;
        }
        if (Gvar.var_71[Gvar.var_2764][Gvar.var_2766] == 0) {
            Gvar.var_1449 = 1;
        }
        if (Gvar.var_71[Gvar.var_2764][Gvar.var_2767] == 0) {
            Gvar.var_1449 = 7;
        }
        if (Gvar.var_71[Gvar.var_2765][Gvar.var_2766] == 0) {
            Gvar.var_1449 = 3;
        }
        if (Gvar.var_71[Gvar.var_2765][Gvar.var_2767] == 0) {
            Gvar.var_1449 = 9;
        }
        Gvar.var_1450 = 160;
        Gvar.var_1451 = 150;
        Gvar.var_1448 = 1;
        Gvar.var_1447 = 1;
        Gvar.var_271 = 1;
        for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_1447 == 4) {
                if (Gvar.var_1449 == 4) {
                    Gvar.var_199 = 4;
                }
                if (Gvar.var_1449 == 6) {
                    Gvar.var_199 = 6;
                }
                if (Gvar.var_1449 == 2) {
                    Gvar.var_199 = 2;
                }
                if (Gvar.var_1449 == 8) {
                    Gvar.var_199 = 8;
                }
                if (Gvar.var_1449 == 1) {
                    Gvar.var_199 = 1;
                }
                if (Gvar.var_1449 == 3) {
                    Gvar.var_199 = 3;
                }
                if (Gvar.var_1449 == 7) {
                    Gvar.var_199 = 7;
                }
                if (Gvar.var_1449 == 9) {
                    Gvar.var_199 = 9;
                }
                if (Gvar.var_2866 == 1) {
                    Gvar.var_672 = 157;
                    await Func.func093();
                    if (Gvar.var_2868 == 1) {
                        Gvar.var_2869 = Gvar.var_199;
                    }
                }
                if (Gvar.var_2866 == 0) {
                    await Func.func601();
                    Gvar.var_2852 = Gvar.var_209;
                    Gvar.var_747 = 1;
                    Gvar.var_389 = 2;
    
                    Adap.DSPLAY(105);
                    Gvar.comments_row1 = "";
                    Gvar.comments_row2 = "";
                    Gvar.var_295 = "";
                    Gvar.comments_row1a = "";
                    Gvar.comments_row2a = "";
                    Gvar.var_298 = "";
                    Gvar.var_299 = 0;
                    Gvar.comments_row1 = "「ダイバー・ダウン！」";
                    Gvar.comments_row2 = "" + Gvar.var_2852 + "のダメージをうけた！";
                    Gvar.var_198 = 1;
                    Gvar.var_300 = 0;
                    Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                    Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                    Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                    await Func.func047();
                    if (Gvar.var_128 >= 1) {
                        await Func.func023();
                    }
                }
            }
            if (Gvar.var_2868 == 1) {
                if (Gvar.var_199 == 1) {
                    Gvar.var_2870 = 2;
                }
                if (Gvar.var_199 == 2) {
                    Gvar.var_2870 = 3;
                }
                if (Gvar.var_199 == 3) {
                    Gvar.var_2870 = 6;
                }
                if (Gvar.var_199 == 6) {
                    Gvar.var_2870 = 9;
                }
                if (Gvar.var_199 == 9) {
                    Gvar.var_2870 = 8;
                }
                if (Gvar.var_199 == 8) {
                    Gvar.var_2870 = 7;
                }
                if (Gvar.var_199 == 7) {
                    Gvar.var_2870 = 4;
                }
                if (Gvar.var_199 == 4) {
                    Gvar.var_2870 = 1;
                }
                Gvar.var_199 = Gvar.var_2870;
                if (Gvar.var_1447 >= 6) {
                    Gvar.var_199 = Gvar.var_2869;
                }
            }
            Gvar.var_1447++;
        }
        Gvar.var_1447 = 0;
        Gvar.var_271 = 0;
        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1448 = 0;
        Gvar.var_2868 = 0;
        Gvar.var_389 = 0;
        if (Gvar.var_2866 == 0) {
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 285;
            }
        }
        return;
}

export {func605}
