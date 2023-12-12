import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 728 赤石つき石仮面
async function item728(this: any) {
        Gvar.var_1251 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1251 = 6;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1251 = 8;
        Gvar.var_1940 = Gvar.var_199;
        Gvar.var_199 = 2;
        Gvar.var_271 = 1;
        Gvar.var_1411 = 1;
        Gvar.var_1413 = 1;
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
    
            Adap.DSPLAY(111);
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_1411++;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_1411++;
        }
        for (let cnt2 = 0; cnt2 < 17; ++cnt2) {
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_1411++;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_1411++;
        }
        Gvar.var_1411 = 0;
        Gvar.var_1413 = 0;
        Gvar.var_271 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_182 = 1;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「究極の生命体ﾃﾞｨｱﾎﾞﾛの誕生だッーっ」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_1251 = 0;
        Gvar.var_199 = Gvar.var_1940;
        return;
}

export {item728}
