import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 131 ジョルノの特殊能力
async function enemy131(this: any) {
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
            if (Gvar.var_476[Gvar.var_475] == 0 && Gvar.var_477[Gvar.var_475] == 0 && Gvar.var_478[Gvar.var_475] == 0 && Gvar.var_479[Gvar.var_475] == 0 && Gvar.var_233[Gvar.var_475].Var11 == 0 && Gvar.var_233[Gvar.var_475].Var0 != 650 && Gvar.var_233[Gvar.var_475].Var0 != 651 && Gvar.var_233[Gvar.var_475].Var0 != 653 && Gvar.var_233[Gvar.var_475].Var0 != 654) {
                Gvar.var_474 = 1;
                break;
            }
        }
        Gvar.var_2885 = Adap.rnd(5);
        if (Gvar.var_2885 != 0) {
            Gvar.var_474 = 0;
        }
        if (Gvar.var_474 == 0) {
            return;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「ゴールド・エクスペリエンス！」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Adap.DSPLAY(121);
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_412].Var7 = 1;
        Gvar.var_743 = 1; //スタンド像付与フラグON
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_389 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_389 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[Gvar.var_412].Var7 = 0;
        Gvar.var_742 = 0;
        Gvar.var_743 = 0; //スタンド像付与フラグOFF
        if (Gvar.nouryoku_disc_id == 202) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾎﾜｲﾄｱﾙﾊﾞﾑの能力によって";
            Gvar.comments_row2 = "生命が生まれるのを防いだ！";
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
        if (Gvar.equip_disc[360] == 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "装備DISCの効果で きかなかった";
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
        Gvar.var_2892 = "";
        Gvar.var_233[Gvar.var_475].Var0 = 650;
        Gvar.var_2892 = "ｶｴﾙ";
        Adap.DSPLAY(200);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.target_item_name + "は";
        Gvar.comments_row2 = "" + Gvar.var_2892 + "に生まれ変わった！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        if (Gvar.to_freeze >= 1) {
            await Main.func023();
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_2197 = 1;
        return;
}

export {enemy131}
