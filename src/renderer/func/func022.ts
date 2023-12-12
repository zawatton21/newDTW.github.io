import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func022(this: any) {
        Adap.dbgprt(22);
        if (Gvar.var_128 >= 1) {
            Gvar.var_281 = Gvar.var_66 - 1;
            if (Gvar.var_281 < 0) {
                Gvar.var_281 = 0;
            }
            Gvar.var_282 = Gvar.var_66 + 1;
            if (Gvar.var_282 > Gvar.var_33) {
                Gvar.var_282 = Gvar.var_33;
            }
            Gvar.var_283 = Gvar.var_67 - 1;
            if (Gvar.var_283 < 0) {
                Gvar.var_283 = 0;
            }
            Gvar.var_284 = Gvar.var_67 + 1;
            if (Gvar.var_284 > Gvar.var_34) {
                Gvar.var_284 = Gvar.var_34;
            }
            Gvar.var_457 = 0;
            Gvar.var_286 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
                if (Gvar.var_83[Gvar.var_286].Var0 == 36 && Gvar.var_83[Gvar.var_286].Var1 >= Gvar.var_281 && Gvar.var_83[Gvar.var_286].Var1 <= Gvar.var_282 && Gvar.var_83[Gvar.var_286].Var2 >= Gvar.var_283 && Gvar.var_83[Gvar.var_286].Var2 <= Gvar.var_284) {
                    if (Gvar.var_83[Gvar.var_286].Var31 == 5 && Gvar.var_83[Gvar.var_286].Var23 == 0 && Gvar.var_83[Gvar.var_286].Var17 == 0 && Gvar.var_83[Gvar.var_286].Var12 == 0 && Gvar.var_83[Gvar.var_286].Var13 == 0) {
                        Gvar.var_457 = 1;
                        break;
                    }
                }
                Gvar.var_286 = Gvar.var_286 + 1;
            }
            if (Gvar.var_457 == 1) {
                Gvar.var_83[Gvar.var_286].Var3 = 1;
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "極寒地にすむエスキモーはよお！";
                Gvar.comments_row2 = "凍傷にかかった時！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                await Func.func340(); // キー入力による選択処理
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "アザラシの肉の体内に入って";
                Gvar.comments_row2a = "治していたぜ！";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func340(); // キー入力による選択処理
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "これならどうだ――っ！！";
                Gvar.comments_row2a = "";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func340(); // キー入力による選択処理
                Adap.DSPLAY(175);
                Gvar.var_458 = 1;
                Gvar.var_271 = 1;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_458++;
                }
                Gvar.var_458 = 0;
                Gvar.var_271 = 0;
                Gvar.var_128 = 0;
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "ｽﾋﾟｰﾄﾞﾜｺﾞﾝの治療によって";
                Gvar.comments_row2a = "ﾃﾞｨｱﾎﾞﾛは動けるようになった";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func340(); // キー入力による選択処理
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "しかしｽﾋﾟｰﾄﾞﾜｺﾞﾝは";
                Gvar.comments_row2a = "ひどく憔悴してしまったようだ…";
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                await Func.func009(); // ゲーム基本動作フレーム処理
                return;
            }
        }
        Gvar.var_128++;
        if (Gvar.var_128 == 10) {
            Gvar.var_217 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは動けるようになった";
            Gvar.var_128 = 0;
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.comments_row1 = "…凍っていて動けない。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func022}
