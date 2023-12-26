import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 301 ハーヴェストの発動処理
async function item301(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "アイテムを取って来いッ！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_1483 = 1;
        Gvar.var_271 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1483++;
        }
        Gvar.var_1483 = 0;
        Gvar.var_271 = 0;
        Gvar.var_2275 = Gvar.var_66 - 1;
        if (Gvar.var_2275 < 0) {
            Gvar.var_2275 = 0;
        }
        Gvar.var_2276 = Gvar.var_66 + 1;
        if (Gvar.var_2276 > Gvar.var_33) {
            Gvar.var_2276 = Gvar.var_33;
        }
        Gvar.var_2277 = Gvar.var_67 - 1;
        if (Gvar.var_2277 < 0) {
            Gvar.var_2277 = 0;
        }
        Gvar.var_2278 = Gvar.var_67 + 1;
        if (Gvar.var_2278 > Gvar.var_34) {
            Gvar.var_2278 = Gvar.var_34;
        }
        Gvar.var_347 = Gvar.var_66;
        Gvar.var_348 = Gvar.var_67;
        Gvar.var_2279 = 0;
        Gvar.var_2280 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_336; ++cnt2) {
            Gvar.var_2281 = 0;
            if (Gvar.var_78[Gvar.var_2280].Var0 != 0 && Gvar.var_78[Gvar.var_2280].Var11 == 0) {
                Gvar.var_2282 = Gvar.var_78[Gvar.var_2280].Var1;
                Gvar.var_2283 = Gvar.var_78[Gvar.var_2280].Var2;
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_347][Gvar.var_348] == 0 && Gvar.var_80[Gvar.var_347][Gvar.var_348] == 0 && Gvar.var_71[Gvar.var_347][Gvar.var_348] != 0 && Gvar.var_71[Gvar.var_347][Gvar.var_348] != 13 && Gvar.var_73[Gvar.var_347][Gvar.var_348] == 0) {
                    Gvar.var_2284 = Gvar.var_347;
                    Gvar.var_2285 = Gvar.var_348;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_2275][Gvar.var_348] == 0 && Gvar.var_80[Gvar.var_2275][Gvar.var_348] == 0 && Gvar.var_71[Gvar.var_2275][Gvar.var_348] != 0 && Gvar.var_71[Gvar.var_2275][Gvar.var_348] != 13 && Gvar.var_73[Gvar.var_2275][Gvar.var_348] == 0) {
                    Gvar.var_2284 = Gvar.var_2275;
                    Gvar.var_2285 = Gvar.var_348;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_2276][Gvar.var_348] == 0 && Gvar.var_80[Gvar.var_2276][Gvar.var_348] == 0 && Gvar.var_71[Gvar.var_2276][Gvar.var_348] != 0 && Gvar.var_71[Gvar.var_2276][Gvar.var_348] != 13 && Gvar.var_73[Gvar.var_2276][Gvar.var_348] == 0) {
                    Gvar.var_2284 = Gvar.var_2276;
                    Gvar.var_2285 = Gvar.var_348;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_347][Gvar.var_2278] == 0 && Gvar.var_80[Gvar.var_347][Gvar.var_2278] == 0 && Gvar.var_71[Gvar.var_347][Gvar.var_2278] != 0 && Gvar.var_71[Gvar.var_347][Gvar.var_2278] != 13 && Gvar.var_73[Gvar.var_347][Gvar.var_2278] == 0) {
                    Gvar.var_2284 = Gvar.var_347;
                    Gvar.var_2285 = Gvar.var_2278;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_347][Gvar.var_2277] == 0 && Gvar.var_80[Gvar.var_347][Gvar.var_2277] == 0 && Gvar.var_71[Gvar.var_347][Gvar.var_2277] != 0 && Gvar.var_71[Gvar.var_347][Gvar.var_2277] != 13 && Gvar.var_73[Gvar.var_347][Gvar.var_2277] == 0) {
                    Gvar.var_2284 = Gvar.var_347;
                    Gvar.var_2285 = Gvar.var_2277;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_2275][Gvar.var_2278] == 0 && Gvar.var_80[Gvar.var_2275][Gvar.var_2278] == 0 && Gvar.var_71[Gvar.var_2275][Gvar.var_2278] != 0 && Gvar.var_71[Gvar.var_2275][Gvar.var_2278] != 13 && Gvar.var_73[Gvar.var_2275][Gvar.var_2278] == 0) {
                    Gvar.var_2284 = Gvar.var_2275;
                    Gvar.var_2285 = Gvar.var_2278;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_2276][Gvar.var_2278] == 0 && Gvar.var_80[Gvar.var_2276][Gvar.var_2278] == 0 && Gvar.var_71[Gvar.var_2276][Gvar.var_2278] != 0 && Gvar.var_71[Gvar.var_2276][Gvar.var_2278] != 13 && Gvar.var_73[Gvar.var_2276][Gvar.var_2278] == 0) {
                    Gvar.var_2284 = Gvar.var_2276;
                    Gvar.var_2285 = Gvar.var_2278;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_2275][Gvar.var_2277] == 0 && Gvar.var_80[Gvar.var_2275][Gvar.var_2277] == 0 && Gvar.var_71[Gvar.var_2275][Gvar.var_2277] != 0 && Gvar.var_71[Gvar.var_2275][Gvar.var_2277] != 13 && Gvar.var_73[Gvar.var_2275][Gvar.var_2277] == 0) {
                    Gvar.var_2284 = Gvar.var_2275;
                    Gvar.var_2285 = Gvar.var_2277;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 0 && Gvar.var_77[Gvar.var_2276][Gvar.var_2277] == 0 && Gvar.var_80[Gvar.var_2276][Gvar.var_2277] == 0 && Gvar.var_71[Gvar.var_2276][Gvar.var_2277] != 0 && Gvar.var_71[Gvar.var_2276][Gvar.var_2277] != 13 && Gvar.var_73[Gvar.var_2276][Gvar.var_2277] == 0) {
                    Gvar.var_2284 = Gvar.var_2276;
                    Gvar.var_2285 = Gvar.var_2277;
                    Gvar.var_2281 = 1;
                }
                if (Gvar.var_2281 == 1) {
                    Gvar.var_77[Gvar.var_2284][Gvar.var_2285] = Gvar.var_77[Gvar.var_2282][Gvar.var_2283];
                    Gvar.var_78[Gvar.var_2280].Var1 = Gvar.var_2284;
                    Gvar.var_78[Gvar.var_2280].Var2 = Gvar.var_2285;
                    Gvar.var_78[Gvar.var_2280].Var9 = Gvar.var_71[Gvar.var_2284][Gvar.var_2285];
                    Gvar.var_78[Gvar.var_2280].Var10 = 1;
                    Gvar.var_77[Gvar.var_2282][Gvar.var_2283] = 0;
                    Gvar.var_2279++;
                }
                if (Gvar.var_2281 == 0) {
                    break;
                }
            }
            Gvar.var_2280 = Gvar.var_2280 + 1;
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_2279 == 0) {
            Gvar.comments_row1 = "１個も拾ってこなかったど！";
        }
        if (Gvar.var_2279 >= 1) {
            Gvar.comments_row1 = "" + Gvar.var_2279 + "個　拾ってきた。";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        if (Gvar.var_2279 >= 1) {
            Gvar.var_1489 = 1;
            Gvar.var_271 = 1;
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_1489 = 0;
            Gvar.var_271 = 0;
        }
        if (Gvar.var_2279 == 0) {
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item301}
