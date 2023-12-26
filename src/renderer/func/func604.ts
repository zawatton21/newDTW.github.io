import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func604(this: any) {
        Adap.dbgprt(604);
        Gvar.var_2862 = Adap.rnd(2);
        if (Gvar.var_2862 == 0 && Gvar.var_83[Gvar.var_673].Var0 == 30 && Gvar.var_83[Gvar.var_673].Var29 == 0) {
            Gvar.var_240 = 0;
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾎﾙ･ﾎｰｽはﾄﾄ神のﾏﾝｶﾞを読んだ。";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();

            Adap.DSPLAY(118);
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                Gvar.var_411 = 4;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_411 = 5;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
            }
            Gvar.var_411 = 6;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "ﾎﾙ･ﾎｰｽ「新しいﾍﾟｰｼﾞが現れたぞ…」";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func340(); // キー入力による選択処理

            Adap.DSPLAY(118);
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "【ﾎﾙ･ﾎｰｽの次の攻撃は…】";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func340(); // キー入力による選択処理

            Adap.DSPLAY(118);
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 <= 1) {
                Gvar.comments_row1a = "【ウオオン！";
                Gvar.comments_row2a = "　　いつもの２倍のダメージだッ！】";
                Gvar.var_83[Gvar.var_673].Var29 = 1;
            }
            if (Gvar.var_1073 == 2) {
                Gvar.comments_row1a = "【いつもの３倍ダメージだッ！";
                Gvar.comments_row2a = "　　ﾎﾙ･ﾎｰｽは本当にラッキー！】";
                Gvar.var_83[Gvar.var_673].Var29 = 2;
            }
            if (Gvar.var_1073 == 3) {
                Gvar.comments_row1a = "【いつもの半分のダメージでした…";
                Gvar.comments_row2a = "　でもくじけちゃダメだよ ﾎﾙ･ﾎｰｽ！】";
                Gvar.var_83[Gvar.var_673].Var29 = 3;
            }
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            if (Gvar.var_1073 <= 1) {
                Gvar.comments_row1a = "ﾎﾙ･ﾎｰｽ「こ…　こいつはすげえ！」";
                Gvar.comments_row2a = "　　";
            }
            if (Gvar.var_1073 == 2) {
                Gvar.comments_row1a = "ﾎﾙ･ﾎｰｽ「おれたちは無敵だッ！」";
                Gvar.comments_row2a = "";
            }
            if (Gvar.var_1073 == 3) {
                Gvar.comments_row1a = "ﾎﾙ･ﾎｰｽ「にゃんじゃああ～～～ッ";
                Gvar.comments_row2a = "　　　これは！？」";
            }
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_673].Var21 = 0;
            Gvar.var_411 = 0;
            return;
        }
        Gvar.var_240 = 0;

        Adap.DSPLAY(141);
        Gvar.var_83[Gvar.var_673].Var21 = 1;
        Gvar.var_411 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[Gvar.var_673].Var21 = 0;
        Gvar.var_411 = 0;
        Adap.DSPLAY(116);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_673].Var7 = 1;
        Gvar.var_271 = 1;
        Gvar.var_1435 = 1;
        Gvar.var_1430 = Gvar.var_83[Gvar.var_673].Var1;
        Gvar.var_1431 = Gvar.var_83[Gvar.var_673].Var2;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1435 = Gvar.var_1435 + 1;
        }
        Gvar.var_742 = 0;
        Gvar.var_271 = 0;
        Gvar.var_1435 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        Gvar.var_2862 = Adap.rnd(3);
        if (Gvar.var_2862 == 0 && Gvar.var_83[Gvar.var_673].Var0 == 46 && Gvar.var_337 < 50) {
            Gvar.var_2863 = 0;
            Gvar.var_2864 = Gvar.var_67 - 1;
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                Gvar.var_2865 = Gvar.var_66 - 1;
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    if (Gvar.var_71[Gvar.var_2865][Gvar.var_2864] != 0 && Gvar.var_71[Gvar.var_2865][Gvar.var_2864] != 13 && Gvar.var_77[Gvar.var_2865][Gvar.var_2864] == 0 && Gvar.var_80[Gvar.var_2865][Gvar.var_2864] == 0 && Gvar.var_73[Gvar.var_2865][Gvar.var_2864] == 0) {
                        Gvar.var_768 = 1;
                        Gvar.var_1728 = 1;
                        Gvar.var_2424 = 1;
                        Gvar.var_1550 = Gvar.var_2865;
                        Gvar.var_230 = Gvar.var_2864;
                        Gvar.var_2412 = 1;
                        await Func.func536();
                        Gvar.var_768 = 0;
                        Gvar.var_1728 = 0;
                        Gvar.var_2424 = 0;
                        Gvar.var_2412 = 0;
                        Gvar.var_83[Gvar.var_2611].Var22 = 1;
                        Gvar.var_83[Gvar.var_2611].Var9 = 0;
                        await Func.func337(); // メッセージ関係呼び出し
                        Gvar.var_2863 = 1;
                    }
                    Gvar.var_2865++;
                }
                Gvar.var_2864++;
            }
            if (Gvar.var_2863 == 1) {
                Gvar.var_240 = 0;
        
                Adap.DSPLAY(205);
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "「J・ガイルの旦那！」";
                Gvar.comments_row2 = "";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                await Func.func047();
                Gvar.var_83[Gvar.var_673].Var7 = 0;
                return;
            }
        }
        Gvar.var_271 = 1;
        Gvar.var_1434 = 1;
        Gvar.var_1426 = Adap.rnd(3);
        if (Gvar.var_1426 == 0) {
            Gvar.var_1427 = 160;
            Gvar.var_1428 = 0;
        }
        if (Gvar.var_1426 == 1) {
            Gvar.var_1427 = 0;
            Gvar.var_1428 = 0;
        }
        if (Gvar.var_1426 == 2) {
            Gvar.var_1427 = 320;
            Gvar.var_1428 = 0;
        }
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            if (Gvar.var_1426 == 0) {
                Gvar.var_1427 = Gvar.var_1427;
                Gvar.var_1428 = Gvar.var_1428 + 40;
            }
            if (Gvar.var_1426 == 1) {
                Gvar.var_1427 = Gvar.var_1427 + 40;
                Gvar.var_1428 = Gvar.var_1428 + 40;
            }
            if (Gvar.var_1426 == 2) {
                Gvar.var_1427 = Gvar.var_1427 - 40;
                Gvar.var_1428 = Gvar.var_1428 + 40;
            }
        }
        Gvar.var_271 = 0;
        Gvar.var_1434 = 0;
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.var_83[Gvar.var_673].Var7 = 0;
        await Func.func584(); // 射撃攻撃を受けた時の回避動作処理(弾丸を止める、燃え尽きる等)
        if (Gvar.var_2803 == 1) {
            return;
        }
        Gvar.var_747 = 1;
        Gvar.var_389 = 2;

        Adap.DSPLAY(104);
        Gvar.var_2852 = 15;
        if (Gvar.var_83[Gvar.var_673].Var0 == 30) {
            Gvar.var_2852 = 30;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 30 && Gvar.var_83[Gvar.var_673].Var29 == 1) {
            Gvar.var_2852 = 60;
            Gvar.var_83[Gvar.var_673].Var29 = 0;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 30 && Gvar.var_83[Gvar.var_673].Var29 == 2) {
            Gvar.var_2852 = 90;
            Gvar.var_83[Gvar.var_673].Var29 = 0;
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 30 && Gvar.var_83[Gvar.var_673].Var29 == 3) {
            Gvar.var_2852 = 15;
            Gvar.var_83[Gvar.var_673].Var29 = 0;
        }
        if (Gvar.var_83[Gvar.var_673].Var39 >= 2) {
            Gvar.var_2852 = (Gvar.var_83[Gvar.var_673].Var39 - 1) * 2 + Gvar.var_2852;
        }
        if (Gvar.to_freeze >= 1) {
            Gvar.var_2852 = Math.floor(Gvar.var_2852 * 3 / 2);
        }
        if (Gvar.equip_disc[205] == 1) {
            Gvar.var_2852 = Math.floor(Gvar.var_2852 * 2 / 3);
        }
        // アイテム「鉄球」を使用して射撃攻撃ダメージがアップしている場合
        if (Gvar.var_168 == 1) {
            Gvar.var_2852 = Math.floor(Gvar.var_2852 * 2 / 3);
        }
        Gvar.var_209 = Gvar.var_2852;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ｴﾝﾍﾟﾗｰの弾丸を喰らった！";
        Gvar.comments_row2 = "" + Gvar.var_2852 + "のダメージをうけた！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        if (Gvar.to_freeze >= 1) {
            await Main.func023();
        }
        for (let cnt1 = 0; cnt1 < 8; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_389 = 0;
        Gvar.var_211 = Gvar.var_211 - Gvar.var_2852;
        Gvar.var_208 = Gvar.var_208 + Gvar.var_2852;
        if (Gvar.var_211 <= 0) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 215;
            if (Gvar.var_83[Gvar.var_673].Var0 == 30) {
                Gvar.var_356 = 263;
            }
        }
        Gvar.var_240 = 0;
        return;
}

export {func604}
