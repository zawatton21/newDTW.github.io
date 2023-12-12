import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 204 シアハートアタックの発動処理
async function item204(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Adap.DSPLAY(165);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "カチリ";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1389 = Gvar.var_66;
        Gvar.var_1390 = Gvar.var_67;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        Gvar.var_1993 = Gvar.var_1389 - 1;
        if (Gvar.var_1993 < 0) {
            Gvar.var_1993 = 0;
        }
        Gvar.var_1994 = Gvar.var_1389 + 1;
        Gvar.var_1995 = Gvar.var_1390 + 1;
        Gvar.var_1996 = Gvar.var_1390 - 1;
        if (Gvar.var_1996 < 0) {
            Gvar.var_1996 = 0;
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1390] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1390;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1390] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1390;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1389][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1389;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1389][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1389;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1995] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1995;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1993][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1993;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_71[Gvar.var_1994][Gvar.var_1996] == 0) {
            Gvar.var_347 = Gvar.var_1994;
            Gvar.var_348 = Gvar.var_1996;
            await Func.func622();
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1390] = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1390] = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1390] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1390] = 0;
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1995] = 0;
        }
        if (Gvar.var_77[Gvar.var_1389][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1389][Gvar.var_1996] = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1995] = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1995] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1995] = 0;
        }
        if (Gvar.var_77[Gvar.var_1993][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1993][Gvar.var_1996] = 0;
        }
        if (Gvar.var_77[Gvar.var_1994][Gvar.var_1996] > 0) {
            Gvar.var_77[Gvar.var_1994][Gvar.var_1996] = 0;
        }
        Gvar.var_199 = 2;
        Gvar.var_389 = 2;
        Gvar.var_1263 = 1;
        Adap.DSPLAY(180);
        Gvar.var_271 = 1;
        Gvar.var_1388 = 1;
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            Gvar.var_585 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_585 = 0;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1388++;
        }
        for (let cnt2 = 0; cnt2 < 24; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            if (cnt2 == 25) {
                Gvar.var_1263 = 0;
            }
            Gvar.var_1388++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1388 = 0;
        Gvar.var_1263 = 0;
        Gvar.var_403 = "ｼｱｰﾊｰﾄｱﾀｯｸが爆発した！";
        Gvar.var_2194 = 1;
        Gvar.var_2195 = 1;
        Gvar.var_2196 = 2;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1389 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1390) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                await Func.func700();
            }
            Gvar.var_209 = 0;
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        Gvar.var_2196 = 0;
        Gvar.var_2195 = 0;
        if (Gvar.var_211 == 1) {
            Gvar.var_211 = 0;
            Gvar.var_356 = 209;
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        if (Gvar.var_211 > 1) {
            Gvar.var_2198 = Math.floor(Gvar.var_211 / 2);
            if (Gvar.equip_disc[314] == 1) {
                Gvar.var_2198 = Math.floor(Gvar.var_2198 / 2);
            }
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2198;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 1;
            }
            Gvar.var_208 = Gvar.var_2198 + Gvar.var_208;
        }
        Gvar.var_389 = 0;
        Gvar.var_2199 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_2199].Var0 == 17 && Gvar.var_83[Gvar.var_2199].Var29 == 1) {
                await Func.func699();
                Gvar.var_2199 = 1;
                cnt2 = -1;
                continue;
            }
            Gvar.var_2199++;
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item204}
