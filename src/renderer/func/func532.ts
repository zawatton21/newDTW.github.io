import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func532(this: any) {
        Adap.dbgprt(532);
        await Func.func335();
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ディアボロは思った…";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "幸福と言うのはこういうことだ…";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "そうなるべきだったところに…";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "戻るだけなんだ…";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ただ元に…";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.var_770 = 1;
        if (Gvar.var_190 == 1) {
            if (Gvar.var_526 == 0) {
                Gvar.var_526 = 1;
                Gvar.ivents_flag = 6; // ディアボロの試練開放イベント(岸辺露伴がヤギを追いかけるイベント)フラグ
            }
            if (Gvar.var_535 == 1) {
                Gvar.var_356 = 312;
                Gvar.var_533 = 200000;
                if (Gvar.var_526 < 2) {
                    Gvar.var_526 = 2;
                }
                Gvar.var_11 = 1;

                await Adap.bsave("00.dat", Gvar.data = Gvar.var_11, null, 80);
            }
        }
        Gvar.var_356 = 258;
        Gvar.var_212 = 1;
        Gvar.var_213 = 0;
        Gvar.var_214 = 0;
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
        Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛ　再起不能";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 40; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1200 = 1;
        Gvar.var_2400 = 345;
        Gvar.var_532 = 1;
        await Func.func673();
        return;
}

export {func532}
