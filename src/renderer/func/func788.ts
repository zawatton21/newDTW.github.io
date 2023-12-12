import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func788(this: any) {
        Adap.dbgprt(788);
        Gvar.var_532 = 1;
        Gvar.var_1454 = 1;
        Gvar.var_271 = 1;
        Gvar.var_1455 = Gvar.current_floor;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ｱﾊﾞｯｷｫ「ムーディー・ブルース！」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_3164 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.current_floor + 60; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_3165 = Adap.rnd(2);
            if (Gvar.var_3165 == 0) {
                Gvar.var_3166 = Adap.rnd(100);
                Gvar.var_3166 = Gvar.var_3166 + 150;
                for (let cnt3 = 0; cnt3 < Gvar.var_3166; ++cnt3) {
                    Gvar.var_3167 = Adap.rnd(680);
                    Gvar.var_3167 = Gvar.var_3167 - 10;
                    Gvar.var_3168 = Adap.rnd(680);
                    Gvar.var_3169 = Adap.rnd(30);
                    Gvar.var_3169 = Gvar.var_3169 + 5;
                    Adap.color(150, 150, 150);
                    Adap.line(Gvar.var_3167, Gvar.var_3168, Gvar.var_3167 + Gvar.var_3169, Gvar.var_3168);
                    Adap.line(Gvar.var_3167, Gvar.var_3168 + 1, Gvar.var_3167 + Gvar.var_3169, Gvar.var_3168 + 1);
                    Adap.line(Gvar.var_3167, Gvar.var_3168 + 30, Gvar.var_3167 + Gvar.var_3169, Gvar.var_3168 + 30);
                    Adap.color(0, 0, 0);
                    Adap.line(Gvar.var_3167, Gvar.var_3168 + 2, Gvar.var_3167 + Gvar.var_3169, Gvar.var_3168 + 2);
                }
            }
            if (cnt1 > 10) {
                Gvar.var_1455 = Gvar.var_1455 - 1;
                if (Gvar.var_1455 < 0) {
                    Gvar.var_1455 = 0;
                }
            }
            Gvar.var_1454 = Gvar.var_1454 + 1;
            Gvar.var_3164 = Gvar.var_3164 + 1;
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
        }
        Gvar.var_1454 = 0;
        Gvar.var_271 = 0;
        Gvar.var_356 = 311;
        Gvar.var_217 = 0;
        await Func.func173();
        return;
}

export {func788}
