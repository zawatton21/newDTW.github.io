import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func618(this: any) {
        Adap.dbgprt(618);
        Gvar.var_240 = 0;
        Gvar.var_2881 = Gvar.var_673;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_2882 = Adap.rnd(2);
        if (Gvar.var_2882 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "全隊戦闘態勢ッ！";
        }
        if (Gvar.var_2882 == 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "狙えェェェェェェェ～～～～～筒！";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_83[Gvar.var_2881].Var18 = 0;
        Gvar.var_2883 = Gvar.var_83[Gvar.var_2881].Var1;
        Gvar.var_2884 = Gvar.var_83[Gvar.var_2881].Var2;
        Gvar.var_2546 = 1;
        Gvar.var_1845 = 5;
        Gvar.var_2519 = Gvar.var_83[Gvar.var_2881].Var10;
        Gvar.var_2353 = Gvar.var_673;
        for (let cnt1 = 0; cnt1 < 7; ++cnt1) {
            await Func.func556(); // 敵をフロアへ出現させる処理
        }
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_1845 = 0;
        Gvar.var_2546 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理

        Adap.DSPLAY(199);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "形兆はﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ部隊を呼び出した！";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func618}
