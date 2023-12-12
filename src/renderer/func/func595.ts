import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func595(this: any) {
        Adap.dbgprt(595);
        Gvar.var_2841 = 0;
        Gvar.var_2352 = Adap.rnd(8);
        Gvar.var_2842 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_97 + 1; ++cnt1) {
            if (Gvar.var_83[cnt1][0] != 0 && Gvar.var_83[cnt1][31] != 4 && Gvar.var_83[cnt1][31] != 5 && Gvar.var_83[cnt1][0] != 143 && Gvar.var_83[cnt1][0] != 166) {
                Gvar.var_2842 = Gvar.var_2842 + 1;
            }
        }
        if (Gvar.var_2842 >= 40) {
            Gvar.var_2352 = 7;
        }
        if (Gvar.var_97 > 150) {
            Gvar.var_2352 = 7;
        }
        Adap.DSPLAY(118);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_2352 == 0) {
            Gvar.comments_row1 = "ウンガロは";
            Gvar.comments_row2 = "「ﾌｧﾝﾄﾑ･ﾌﾞﾗｯﾄﾞ」を読んだ";
        }
        if (Gvar.var_2352 == 1) {
            Gvar.comments_row1 = "ウンガロは";
            Gvar.comments_row2 = "「戦闘潮流」を読んだ";
        }
        if (Gvar.var_2352 == 2) {
            Gvar.comments_row1 = "ウンガロは";
            Gvar.comments_row2 = "「ｽﾀｰﾀﾞｽﾄ･ｸﾙｾｲﾀﾞｰｽ」を読んだ";
        }
        if (Gvar.var_2352 == 3) {
            Gvar.comments_row1 = "ウンガロは";
            Gvar.comments_row2 = "「ダイヤモンドは砕けない」を読んだ";
        }
        if (Gvar.var_2352 == 4) {
            Gvar.comments_row1 = "ウンガロは";
            Gvar.comments_row2 = "「黄金の風」を読んだ";
        }
        if (Gvar.var_2352 == 5) {
            Gvar.comments_row1 = "ウンガロは";
            Gvar.comments_row2 = "「ｽﾄｰﾝ･ｵｰｼｬﾝ」を読んだ";
        }
        if (Gvar.var_2352 == 6) {
            Gvar.comments_row1 = "ウンガロは";
            Gvar.comments_row2 = "「７匹のヤギ」を読んだ";
        }
        if (Gvar.var_2352 == 7) {
            Gvar.comments_row1 = "ウンガロ「これからはおれの時代だッ！」";
            Gvar.comments_row2 = "";
            await Func.func094(); // メッセージ送りの際の効果音
        }
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        Gvar.var_83[Gvar.var_673].Var21 = 1;
        Gvar.var_411 = 1;
        Gvar.var_411 = 1;
        // await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 2;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 1;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 2;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 3;
        // await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 2;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 1;
        // await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 1;
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        if (Gvar.var_2352 == 7) {
            Gvar.var_2197 = 1;
            return;
        }
        Gvar.var_1584 = 0;
        Gvar.var_1585 = 0;
        Gvar.var_1587 = 0;
        Gvar.var_1588 = 0;
        Gvar.var_1589 = 0;
        Gvar.var_1590 = 0;
        await Func.func625();
        Gvar.var_1845 = 1;
        Gvar.var_2353 = Gvar.var_673;
        await Func.func556();
        Gvar.var_2354 = 0;
        Gvar.var_1584 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1585 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 == 0) {
            await Func.func625();
            Gvar.var_2519 = 1;
            Gvar.var_1845 = 5;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_2354 = 0;
            Gvar.var_1587 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1588 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 != 0) {
                Gvar.var_2841++;
            }
            await Func.func625();
            Gvar.var_2519 = 1;
            Gvar.var_1845 = 5;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_2354 = 0;
            Gvar.var_1589 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1590 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 != 0) {
                Gvar.var_2841++;
            }
            if (Gvar.var_2841 == 0) {
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "しかし何も起こらなかった…";
                Gvar.comments_row2a = "";
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_2197 = 1;
                Gvar.var_2355 = 0;
                return;
            }
        }
        if (Gvar.var_2841 == 0) {
            await Func.func625();
            Gvar.var_1845 = 1;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_2354 = 0;
            Gvar.var_1587 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1588 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_1845 = 0;
            await Func.func625();
            Gvar.var_1845 = 1;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556();
            Gvar.var_2354 = 0;
            Gvar.var_1589 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
            Gvar.var_1590 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_1845 = 0;
        }
        Gvar.var_271 = 1;
        Gvar.var_1586 = 1;

        Adap.DSPLAY(168);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1586++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1586 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        if (Gvar.var_2841 == 0) {
            if (Gvar.var_2352 != 6) {
                Gvar.comments_row1a = "マンガのキャラクターが現れた！";
            }
            if (Gvar.var_2352 == 6) {
                Gvar.comments_row1a = "メェ～～";
            }
        }
        if (Gvar.var_2841 != 0) {
            if (Gvar.var_2352 != 6) {
                Gvar.comments_row1a = "部屋内にマンガのキャラクターが増えた！";
            }
            if (Gvar.var_2352 == 6) {
                Gvar.comments_row1a = "部屋内にヤギが増えた！";
            }
        }
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_2355 = 0;
        }
        Gvar.var_2197 = 1;
        return;
}

export {func595}
