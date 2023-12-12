import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func072(this: any) {
        Adap.dbgprt(72);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "神砂嵐だ！！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        if (Gvar.var_112 == 1000) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "真空状態の圧倒的破壊空間は";
            Gvar.comments_row2a = "まさに歯車的砂嵐の小宇宙！";
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
        }
        Gvar.var_582 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_582].Var8 = 1;
            Gvar.var_83[Gvar.var_582].Var12 = 0;
            Gvar.var_582 = Gvar.var_582 + 1;
        }
        await Func.func073();
        if (Gvar.var_112 == 700 || Gvar.var_112 == 1000) {
            Gvar.var_389 = 2;
            if (Gvar.var_144 != 0) {
                Gvar.var_389 = 0;
            }
        }
        if (Gvar.var_112 == 850 && Gvar.var_144 == 0) {
            Gvar.var_583 = 1;
        }
        Gvar.var_271 = 1;
        Gvar.var_584 = 1;
        if (Gvar.var_112 == 700) {
            Adap.DSPLAY(144);
        }
        if (Gvar.var_112 == 850) {
            Adap.DSPLAY(145);
        }
        if (Gvar.var_112 == 1000) {
            Adap.DSPLAY(146);
        }
        for (let cnt1 = 0; cnt1 < 15; ++cnt1) {
            Gvar.var_585 = 1;
            if (Gvar.var_112 == 1000) {
                Gvar.var_199 = 2;
            }
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_585 = 0;
            if (Gvar.var_112 == 1000) {
                Gvar.var_199 = 4;
            }
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_585 = 1;
            if (Gvar.var_112 == 1000) {
                Gvar.var_199 = 8;
            }
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_585 = 0;
            if (Gvar.var_112 == 1000) {
                Gvar.var_199 = 6;
            }
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_271 = 0;
        Gvar.var_584 = 0;
        Gvar.var_389 = 0;
        if (Gvar.var_112 == 1000) {
            Gvar.var_389 = 2;
            Gvar.var_199 = 2;
            if (Gvar.var_144 != 0) {
                Gvar.var_389 = 0;
            }
        }
        Gvar.var_583 = 0;
        Gvar.var_582 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_582].Var8 = 0;
            Gvar.var_582 = Gvar.var_582 + 1;
        }
        if (Gvar.var_112 == 700 || Gvar.var_112 == 850) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            if (Gvar.var_112 == 700) {
                Gvar.comments_row1a = "…風は収まったようだ";
            }
            if (Gvar.var_112 == 850) {
                Gvar.comments_row1a = "…さっきより強いぞ";
            }
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        if (Gvar.var_112 == 1000) {
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_586 = 1;
            Gvar.var_271 = 1;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_586 = Gvar.var_586 + 1;
                if (cnt2 == 4 || cnt2 == 6 || cnt2 == 8) {
                    Gvar.var_585 = 3;
                }
                if (cnt2 == 5 || cnt2 == 7 || cnt2 == 9) {
                    Gvar.var_585 = 0;
                }
                if (Gvar.var_586 == 4) {
                    Adap.DSPLAY(138);
                }
            }
            Gvar.var_585 = 0;
            Gvar.var_389 = 0;
            Gvar.var_211 = 0;
            Gvar.var_356 = 210;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        if (Gvar.var_112 >= 710) {
            Gvar.var_101 = 1;
            Gvar.var_102 = 1;
            Gvar.var_103 = 1;
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
}

export {func072}
