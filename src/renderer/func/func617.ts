import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func617(this: any) {
        Adap.dbgprt(617);
        Gvar.var_240 = 0;
        Gvar.var_83[Gvar.var_673].Var21 = 1;
        Gvar.var_411 = 1;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 3;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 0;
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        Gvar.var_768 = 1;
        Gvar.var_2418 = 1;
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            for (let cnt2 = 0; cnt2 < 500; ++cnt2) {
                Gvar.var_1550 = Adap.rnd(Gvar.var_33);
                Gvar.var_230 = Adap.rnd(Gvar.var_34);
                if (Gvar.var_71[Gvar.var_1550][Gvar.var_230] == Gvar.var_201 && Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_80[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_65[Gvar.var_1550][Gvar.var_230] == 0) {
                    await Func.func536();
                    break;
                }
            }
        }
        Gvar.var_768 = 0;
        Gvar.var_2418 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ケンゾーはドラゴンに手を入れた！";
        Gvar.comments_row2 = "周囲の危険が増えた気がする…";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
}

export {func617}
