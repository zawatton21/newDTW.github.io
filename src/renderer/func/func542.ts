import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func542(this: any) {
        Adap.dbgprt(542);
        Gvar.var_2477 = Adap.rnd(300);
        if (Gvar.var_2464 == 1) {
            Gvar.var_2477 = 3;
        }
        if (Gvar.var_2464 == 2) {
            Gvar.var_2477 = 0;
        }
        if (Gvar.var_2464 == 3) {
            Gvar.var_2477 = 4;
        }
        if (Gvar.var_2464 == 4) {
            Gvar.var_2477 = 5;
        }
        if (Gvar.var_2464 == 5) {
            Gvar.var_2477 = 6;
        }
        if (Gvar.var_2464 >= 6) {
            Gvar.var_2477 = 7;
        }
        if (Gvar.var_2477 == 1 && Gvar.var_140 >= 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "磁力で カナヅチが飛んできた！";
            Gvar.comments_row2 = "5 のダメージを喰らった。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
            await Func.func047();
            Gvar.var_108 = 1;
            Gvar.var_271 = 1;
            Gvar.var_1406 = 1;
            Gvar.var_1408 = 1;
            Gvar.var_1407 = Adap.rnd(3);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1406 = Gvar.var_1406 + 1;
                if (Gvar.var_1406 == 6) {
            
                    Adap.DSPLAY(103); // 殴られた時の効果音
                }
            }
            Gvar.var_211 = Gvar.var_211 - 5;
            Gvar.var_208 = Gvar.var_208 + 5;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 267;
                Gvar.var_199 = 2;
            }
            Gvar.var_1406 = 0;
            Gvar.var_271 = 0;
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 3 && Gvar.var_140 >= 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "磁力で カンヅメが飛んできた！";
            Gvar.comments_row2 = "3 のダメージを喰らった。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
            await Func.func047();
            Gvar.var_108 = 1;
            Gvar.var_271 = 1;
            Gvar.var_1408 = 3;
            Gvar.var_1406 = 1;
            Gvar.var_1407 = Adap.rnd(3);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1406 = Gvar.var_1406 + 1;
                if (Gvar.var_1406 == 6) {
                    Adap.DSPLAY(157);
                }
            }
            Gvar.var_211 = Gvar.var_211 - 3;
            Gvar.var_208 = Gvar.var_208 + 3;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 268;
                Gvar.var_199 = 2;
            }
            Gvar.var_1406 = 0;
            Gvar.var_271 = 0;
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 2 && Gvar.var_140 >= 2) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "磁力で ラジカセが飛んできた！";
            Gvar.comments_row2 = "8 のダメージを喰らった。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
            await Func.func047();
            Gvar.var_108 = 1;
            Gvar.var_271 = 1;
            Gvar.var_1408 = 2;
            Gvar.var_1406 = 1;
            Gvar.var_1407 = Adap.rnd(3);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1406 = Gvar.var_1406 + 1;
                if (Gvar.var_1406 == 6) {
            
                    Adap.DSPLAY(104);
                }
            }
            Gvar.var_211 = Gvar.var_211 - 8;
            Gvar.var_208 = Gvar.var_208 + 8;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 269;
                Gvar.var_199 = 2;
            }
            Gvar.var_1406 = 0;
            Gvar.var_271 = 0;
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 0 && Gvar.var_140 >= 2) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "磁力で 刃物が飛んできた！";
            Gvar.comments_row2 = "10 のダメージを喰らった。";
            Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_108 = 1;
            Gvar.var_271 = 1;
            Gvar.var_1405 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1405 = Gvar.var_1405 + 1;
                if (Gvar.var_1405 == 6) {
            
                    Adap.DSPLAY(111);
                }
            }
            Gvar.var_211 = Gvar.var_211 - 10;
            Gvar.var_208 = Gvar.var_208 + 10;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 270;
                Gvar.var_199 = 2;
            }
            Gvar.var_1405 = 0;
            Gvar.var_271 = 0;
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 4 && Gvar.var_140 >= 3) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "磁力で 自転車が飛んできた！";
            Gvar.comments_row2 = "15 のダメージを喰らった。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
            await Func.func047();
            Gvar.var_108 = 1;
            Gvar.var_271 = 1;
            Gvar.var_1408 = 4;
            Gvar.var_1406 = 1;
            Gvar.var_1407 = Adap.rnd(3);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_1406 == 6) {
    
                    Adap.DSPLAY(105);
                }
                Gvar.var_1406 = Gvar.var_1406 + 1;
            }
            Gvar.var_211 = Gvar.var_211 - 15;
            Gvar.var_208 = Gvar.var_208 + 15;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 271;
                Gvar.var_199 = 2;
            }
            Gvar.var_1406 = 0;
            Gvar.var_271 = 0;
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 5 && Gvar.var_140 >= 4) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "磁力で アブドゥルが飛んできた！";
            Gvar.comments_row2 = "20 のダメージを喰らった。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
            await Func.func047();
            Gvar.var_108 = 1;
            Gvar.var_271 = 1;
            Gvar.var_1408 = 5;
            Gvar.var_1406 = 1;
            Gvar.var_1407 = Adap.rnd(3);
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1406 = Gvar.var_1406 + 1;
                if (Gvar.var_1406 == 6) {
            
                    Adap.DSPLAY(115);
                }
            }
            Gvar.var_211 = Gvar.var_211 - 20;
            Gvar.var_208 = Gvar.var_208 + 20;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 272;
                Gvar.var_199 = 2;
            }
            Gvar.var_1406 = 0;
            Gvar.var_271 = 0;
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 6 && Gvar.var_140 >= 5) {
            Gvar.var_2478 = Math.floor(Gvar.var_211 / 2);
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2478;
            Gvar.var_208 = Gvar.var_2478 + Gvar.var_208;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "磁力で 車が飛んできた！";
            Gvar.comments_row2 = "" + Gvar.var_2478 + "のダメージを喰らった。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
            await Func.func047();
            Gvar.var_108 = 1;
            Gvar.var_271 = 1;
            Gvar.var_1409 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1409 = Gvar.var_1409 + 1;
                if (Gvar.var_1409 == 6) {
        
                    Adap.DSPLAY(138);
                }
            }
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 273;
                Gvar.var_199 = 2;
            }
            Gvar.var_1409 = 0;
            Gvar.var_271 = 0;
            Gvar.var_108 = 0;
        }
        if (Gvar.var_2477 == 7 && Gvar.var_140 >= 6) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "はさみうちだァ――――ッ！";
            Gvar.comments_row2 = "「骨折の１､２本じゃあすみませんな」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_26_x = Gvar.var_26[10]; // Ver0.1310で値修正 4 → 10
            Gvar.var_27_x = Gvar.var_27[10]; // Ver0.1310で値修正 4 → 10
            await Func.func047();
            Gvar.var_108 = 1;
            Gvar.var_271 = 1;
            Gvar.var_1410 = 1;
            for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                if (Gvar.var_1410 == 6) {
                    Adap.DSPLAY(137);
                }
                Gvar.var_1410 = Gvar.var_1410 + 1;
            }
            if (Gvar.var_211 == 1) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 277;
                Gvar.var_199 = 2;
            }
            if (Gvar.var_211 >= 2) {
                Gvar.var_208 = Gvar.var_211 - 1 + Gvar.var_208;
                Gvar.var_211 = 1;
            }
            Gvar.var_1410 = 0;
            Gvar.var_271 = 0;
            Gvar.var_108 = 0;
        }
        return;
}

export {func542}
