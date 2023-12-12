import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 412 ヘブンズドアーの発動処理
async function item412(this: any) {
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「ヘブンズドアーッ」！！";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_2261 = Gvar.kougeki_disc_id ;
        Gvar.kougeki_disc_id  = 0;
        Gvar.var_243 = 1;
        Gvar.var_347 = Gvar.var_66;
        Gvar.var_348 = Gvar.var_67;
        if (Gvar.var_199 == 4) {
            Gvar.var_347 = Gvar.var_347 - 1;
        }
        if (Gvar.var_199 == 6) {
            Gvar.var_347 = Gvar.var_347 + 1;
        }
        if (Gvar.var_199 == 8) {
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 2) {
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 1) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_82[Gvar.var_347][Gvar.var_348] != 0) {
            Gvar.var_2231 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
            Gvar.var_2232 = 0;
            if (Gvar.var_83[Gvar.var_2231].Var23 == 0) {
                Gvar.var_2232 = 1;
            }
            if (Gvar.var_83[Gvar.var_2231].Var23 != 0) {
                Gvar.var_2232 = 2;
            }
            if (Gvar.var_83[Gvar.var_2231].Var0 == 50) {
                Gvar.var_2232 = 0;
            }
            if (Gvar.var_83[Gvar.var_2231].Var0 == 118) {
                Gvar.var_2232 = 1;
            }
            if (Gvar.var_2232 == 1) {
                Adap.DSPLAY(161);
                Gvar.var_1324 = (Gvar.var_83[Gvar.var_2231].Var1 - Gvar.var_66 + 4) * 40;
                Gvar.var_1325 = (Gvar.var_83[Gvar.var_2231].Var2 - Gvar.var_67 + 4) * 40 - 10;
                Gvar.var_271 = 1;
                Gvar.var_1323 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1323++;
                }
                Gvar.var_83[Gvar.var_2231].Var8 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1323++;
                }
                Gvar.var_271 = 0;
                Gvar.var_1323 = 0;
                Gvar.var_2233 = Gvar.var_1038 + 1;
                Gvar.var_2234 = 0;
                for (let cnt4 = 0; cnt4 < Gvar.var_2233; ++cnt4) {
                    if (Gvar.var_989[Gvar.cnt4] == Gvar.var_83[Gvar.var_2231].Var0) {
                        Gvar.var_2234 = 1;
                        Gvar.var_1610 = cnt4;
                        break;
                    }
                }
                if (Gvar.var_2234 == 0) {
                    Gvar.var_1038 = Gvar.var_1038 + 1;
                    Gvar.var_989[Gvar.var_1038] = Gvar.var_83[Gvar.var_2231].Var0;
                    Gvar.var_1610 = Gvar.var_1038;
                }
                Gvar.var_198 = 0;
                Gvar.var_1609 = 1;
                Adap.DSPLAY(100); // アイテム選択時の効果音
                Gvar.var_502 = 1;
                Adap.DSPLAY(118);
                await Func.func356();
                return;
            }
            if (Gvar.var_2232 == 2) {
                Gvar.var_1324 = (Gvar.var_83[Gvar.var_2231].Var1 - Gvar.var_66 + 4) * 40;
                Gvar.var_1325 = (Gvar.var_83[Gvar.var_2231].Var2 - Gvar.var_67 + 4) * 40 - 10;
                Gvar.var_271 = 1;
                Gvar.var_1323 = 1;
                for (let cnt4 = 0; cnt4 < 20; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_271 = 0;
                Gvar.var_1323 = 0;
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "見えてなくて効かなかった…";
                Gvar.comments_row2a = "";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func050();
            }
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.kougeki_disc_id  = Gvar.var_2261;
        Gvar.belongings_item_list = Gvar.activated_disc_id;
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item412}
