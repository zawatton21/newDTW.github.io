import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func657(this: any) {
        Adap.dbgprt(657);
        if (Gvar.var_83[Gvar.var_314].Var12 != 0 || Gvar.var_83[Gvar.var_314].Var13 != 0 || Gvar.var_83[Gvar.var_314].Var17 != 0) {
            return;
        }
        Gvar.var_412 = Gvar.var_314;
        Gvar.var_83[Gvar.var_314].Var8 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "玉美「イイイイイデェ～～～～ッ";
        Gvar.comments_row2a = "　　　前歯がハァァ―――――ッ」";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        if (Gvar.shageki_disc_id == 406) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 == 0) {
                Gvar.comments_row1 = "ちっとも罪悪感を感じなかった。";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_1073 == 1) {
                Gvar.comments_row1 = "「かあさんとお姉ちゃんに手を出すことは";
                Gvar.comments_row2 = "決してさせないぞッ！」";
            }
            if (Gvar.var_1073 == 2) {
                Gvar.comments_row1 = "「閑けさや岩にしみ入る蝉の声」";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_1073 == 3) {
                Gvar.comments_row1 = "「よし！それじゃあ明日までにキッチリ";
                Gvar.comments_row2 = "５０万持って来い！」";
            }
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            return;
        }

        Adap.DSPLAY(188);
        Gvar.var_389 = 2;
        Gvar.var_413 = Gvar.var_199;
        Gvar.var_199 = 2;
        Gvar.var_414 = 1;
        Gvar.var_271 = 1;
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_414++;
        }
        Gvar.var_389 = 0;
        Gvar.var_414 = 0;
        Gvar.var_271 = 0;
        Gvar.var_83[Gvar.var_314].Var8 = 0;
        if (Gvar.wallet < 1) {
            if (Gvar.equip_disc[396] == 0) {
                if (Gvar.var_157 == 0) { // Gvar.var_157 倍速移動フラグOFFであれば
                    Gvar.var_133 = 1;
                    Gvar.var_397 = 0;
                }
                if (Gvar.var_157 != 0) { // Gvar.var_157 倍速移動フラグOFFでなければ
                    Gvar.var_157 = 0; // Gvar.var_157 倍速移動フラグOFF
                    Gvar.var_158 = 0;
                }
            }
    
            Adap.DSPLAY(162);
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "罪悪感で体が重くなった！";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            if (Gvar.equip_disc[396] == 1) {
                await Func.func340(); // キー入力による選択処理
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "しかし装備スタンドの効果で";
                Gvar.comments_row2a = "速度は遅くならない！";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
            }
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_199 = Gvar.var_413;
        }
        if (Gvar.wallet >= 1) {
    
            Adap.DSPLAY(207);
            if (Gvar.wallet <= 500) {
                Gvar.stolen_money = Gvar.wallet;
            }
            if (Gvar.wallet > 500) {
                Gvar.stolen_money = Math.floor(Gvar.wallet / 2);
            }
            Gvar.wallet = Gvar.wallet - Gvar.stolen_money;
            Gvar.var_83[Gvar.var_412].Var26 = 1;
            Gvar.belongings_item_list = 1;
            Gvar.var_417 = Gvar.belongings_item_list;
            Gvar.var_1249 = Gvar.var_78[Gvar.var_419].Var13;
            Gvar.target_item_name = "" + Gvar.stolen_money + "G";
            Gvar.var_419 = Gvar.var_412 + 200;
            Gvar.var_78[Gvar.var_419].Var0 = 1;
            Gvar.var_78[Gvar.var_419].Var1 = 0;
            Gvar.var_78[Gvar.var_419].Var2 = 0;
            Gvar.var_78[Gvar.var_419].Var3 = 0;
            Gvar.var_78[Gvar.var_419].Var4 = 0;
            Gvar.var_78[Gvar.var_419].Var5 = 0;
            Gvar.var_78[Gvar.var_419].Var6 = 0;
            Gvar.var_78[Gvar.var_419].Var7 = 0;
            Gvar.var_78[Gvar.var_419].Var8 = 0;
            Gvar.var_78[Gvar.var_419].Var9 = 0;
            Gvar.var_78[Gvar.var_419].Var10 = 0;
            Gvar.var_78[Gvar.var_419].Var11 = 0;
            Gvar.var_78[Gvar.var_419].Var12 = 0;
            if (Gvar.var_78[Gvar.var_419].Var13 != 0) {
                Gvar.var_78[Gvar.var_419].Var13 = Gvar.var_78[Gvar.var_419].Var13 + Gvar.stolen_money;
            }
            if (Gvar.var_78[Gvar.var_419].Var13 == 0) {
                Gvar.var_78[Gvar.var_419].Var13 = Gvar.stolen_money;
            }
            Gvar.var_78[Gvar.var_419].Var14 = 0;
            Gvar.var_78[Gvar.var_419].Var15 = 0;
            Gvar.var_78[Gvar.var_419].Var16 = 0;
            Gvar.var_78[Gvar.var_419].Var17 = 0;
            Gvar.var_78[Gvar.var_419].Var18 = 0;
            Gvar.var_78[Gvar.var_419].Var19 = 0;
            Gvar.var_78[Gvar.var_419].Var20 = 0;
            Gvar.var_78[Gvar.var_419].Var21 = 0;
            Gvar.var_78[Gvar.var_419].Var22 = 0;
            Gvar.var_78[Gvar.var_419].Var23 = 0;
            Gvar.var_78[Gvar.var_419].Var24 = 0;
            Gvar.var_78[Gvar.var_419].Var25 = 0;
            Gvar.var_78[Gvar.var_419].Var26 = 0;
            Gvar.var_78[Gvar.var_419].Var27 = 0;
            Gvar.var_78[Gvar.var_419].Var28 = 0;
            Gvar.var_78[Gvar.var_419].Var29 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "罪悪感で" + Gvar.target_item_name + " 奪われた！";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_199 = Gvar.var_413;
        }
        return;
}

export {func657}
