import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 45 敵由花子 & No = 158 敵プッツン由花子の特殊能力
async function enemy045(this: any) {
        Gvar.var_412 = Gvar.var_673;
        if (Gvar.var_224 == 0) {
            return;
        }
        Gvar.var_2885 = Adap.rnd(4);
        if (Gvar.var_2885 != 0) {
            return;
        }
        Gvar.var_474 = 0;
        for (let cnt2 = 0; cnt2 < 100; ++cnt2) {
            Gvar.var_475 = Adap.rnd(Gvar.var_224);
            Gvar.var_475 = Gvar.var_475 + 1;
            if (Gvar.var_233[Gvar.var_475].Var0 >= 100 && Gvar.var_233[Gvar.var_475].Var0 < 400 && Gvar.var_233[Gvar.var_475].Var12 != 1) {
                Gvar.var_474 = 1;
                break;
            }
        }
        if (Gvar.var_474 == 0) {
            return;
        }
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_475].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_2886 = Gvar.item_name;
        Gvar.var_2887 = 0;
        if (Gvar.var_233[Gvar.var_475].Var12 != 2) {
            if (Gvar.shageki_disc_id != 405) {
                Gvar.var_233[Gvar.var_475].Var12 = 1;
                Gvar.var_233[Gvar.var_475].Var14 = 1;
                await Func.func426();
                if (Gvar.var_553 == Gvar.var_475) {
                    Gvar.var_896 = 1;
                }
                await Func.func427();
                if (Gvar.var_554 == Gvar.var_475) {
                    Gvar.var_897 = 1;
                }
                await Func.func428();
                if (Gvar.var_555 == Gvar.var_475) {
                    Gvar.var_898 = 1;
                }
            }
            if (Gvar.shageki_disc_id == 405) {
                await Func.func426();
                await Func.func427();
                await Func.func428();
                if (Gvar.var_553 != Gvar.var_475 && Gvar.var_554 != Gvar.var_475 && Gvar.var_555 != Gvar.var_475) {
                    Gvar.var_233[Gvar.var_475].Var12 = 1;
                    Gvar.var_233[Gvar.var_475].Var14 = 1;
                }
                if (Gvar.var_553 == Gvar.var_475 || Gvar.var_554 == Gvar.var_475 || Gvar.var_555 == Gvar.var_475) {
                    Gvar.var_2887 = 2;
                }
            }
        }
        if (Gvar.var_233[Gvar.var_475].Var12 == 2) {
            Gvar.var_2887 = 1;
        }
        await Func.func619();
        Gvar.var_83[Gvar.var_412].Var21 = 1;
        if (Gvar.var_83[Gvar.var_412].Var5 == 2) {
            Gvar.var_411 = 1;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 4) {
            Gvar.var_411 = 2;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 8) {
            Gvar.var_411 = 3;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 6) {
            Gvar.var_411 = 4;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 1) {
            Gvar.var_411 = 5;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 7) {
            Gvar.var_411 = 6;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 3) {
            Gvar.var_411 = 7;
        }
        if (Gvar.var_83[Gvar.var_412].Var5 == 9) {
            Gvar.var_411 = 8;
        }
        Gvar.var_389 = 2;
        Adap.DSPLAY(220);
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            Gvar.var_2578 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_2578 = 0;
            await Func.func337(); // メッセージ関係呼び出し
        }
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 0;
        Gvar.var_83[Gvar.var_412].Var21 = 0;
        Gvar.var_389 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.var_2886 + "が";
        Gvar.comments_row2 = "呪われた！";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        if (Gvar.var_2887 == 1) {
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "･･･と思ったが、";
            Gvar.comments_row2a = "漆黒のオーラに守られて無事だった。";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
        }
        if (Gvar.var_2887 == 2) {
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "･･･と思ったが、";
            Gvar.comments_row2a = "装備DISCの効果によって呪いを防いだ！";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.var_1073 = Adap.rnd(4);
            if (Gvar.var_1073 == 0) {
                Gvar.comments_row1a = "君はもう「エコーズact2」の能力に";
                Gvar.comments_row2a = "勝つことはできない！";
            }
            if (Gvar.var_1073 == 1) {
                Gvar.comments_row1a = "「大嫌い」だ！";
                Gvar.comments_row2a = "";
            }
            if (Gvar.var_1073 == 2) {
                Gvar.comments_row1a = "言ったってわからないから";
                Gvar.comments_row2a = "こんな目に遭ったんだよ！";
            }
            if (Gvar.var_1073 == 3) {
                Gvar.comments_row1a = "僕を捕まえることはできない…！";
                Gvar.comments_row2a = "";
            }
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_2197 = 1;
        return;
}

export {enemy045}
