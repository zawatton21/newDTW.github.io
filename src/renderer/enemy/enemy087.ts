import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 87 エシディシの特殊能力
async function enemy087(this: any) {
        Gvar.var_412 = Gvar.var_673;
        if (Gvar.var_83[Gvar.var_412].Var17 != 0 || Gvar.var_83[Gvar.var_412].Var23 != 0) {
            return;
        }
        if (Gvar.var_224 == 0 || Gvar.var_97 > 90 || Gvar.var_336 > 90) {
            return;
        }
        Gvar.var_474 = 0;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            Gvar.var_475 = Adap.rnd(Gvar.var_224);
            Gvar.var_475 = Gvar.var_475 + 1;
            if (Gvar.var_476[Gvar.var_475] == 0 && Gvar.var_477[Gvar.var_475] == 0 && Gvar.var_478[Gvar.var_475] == 0 && Gvar.var_479[Gvar.var_475] == 0 && Gvar.var_233[Gvar.var_475].Var11 == 0 && Gvar.var_233[Gvar.var_475].Var0 != 641) {
                Gvar.var_474 = 1;
                break;
            }
        }
        Gvar.var_2885 = Adap.rnd(3);
        if (Gvar.var_2885 != 0) {
            Gvar.var_474 = 0;
        }
        if (Gvar.var_474 == 0) {
            return;
        }
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "くらってくたばれ";
        Gvar.comments_row2 = "「怪焔王」の流法！！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_412].Var7 = 1;
        Gvar.var_83[Gvar.var_412].Var21 = 1;
        Gvar.var_411 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 3;
        Adap.DSPLAY(128);
        Gvar.var_271 = 1;
        for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
            Gvar.var_389 = 1;
            Gvar.var_1305++;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_389 = 3;
            Gvar.var_1305++;
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 0;
        Gvar.var_83[Gvar.var_412].Var21 = 0;
        Gvar.var_271 = 0;
        Gvar.var_1305 = 0;
        Gvar.var_389 = 0;
        Gvar.var_83[Gvar.var_412].Var7 = 0;
        Gvar.var_742 = 0;
        if (Gvar.var_173 == 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "燃やす攻撃に強くなっていて平気だった";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_2197 = 1;
            return;
        }
        if (Gvar.nouryoku_disc_id == 109) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "装備DISCの効果で燃やされなかった";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_2197 = 1;
            return;
        }
        Gvar.var_225 = Gvar.var_475;
        if (Gvar.var_233[Gvar.var_225].Var0 >= 800 && Gvar.var_233[Gvar.var_225].Var0 < 900) {
            Gvar.var_455 = Gvar.var_66;
            Gvar.var_456 = Gvar.var_67;
            Gvar.var_448 = Gvar.var_66;
            Gvar.var_450 = Gvar.var_67;
            Gvar.var_1903 = 1;
            await Func.func414(); // ヤバいもの関係の容量設定？？
            Gvar.var_1903 = 0;
        }
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_475].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.target_item_name = Gvar.item_name;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            Gvar.var_233[Gvar.var_475]["Var" + cnt2] = 0;
        }
        Gvar.var_233[Gvar.var_475].Var0 = 641;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.target_item_name + "は";
        Gvar.comments_row2 = "消し炭になった！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        if (Gvar.var_128 >= 1) {
            await Func.func023();
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_2197 = 1;
        return;
}

export {enemy087}
