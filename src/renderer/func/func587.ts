import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func587(this: any) {
        Adap.dbgprt(587);
        Gvar.var_2473 = 0;
        Gvar.var_2474 = 0;
        if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id == 0) {
            await Func.func426();
            if (Gvar.var_233[Gvar.var_553].Var4 != 0) {
                Gvar.var_2474 = 1;
            }
        }
        if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id != 0) {
            await Func.func427();
            if (Gvar.var_233[Gvar.var_554].Var4 != 0) {
                Gvar.var_2474 = 2;
            }
        }
        if (Gvar.kougeki_disc_id  != 0 && Gvar.bougyo_disc_id != 0) {
            await Func.func426();
            await Func.func427();
            if (Gvar.var_233[Gvar.var_553].Var4 == 0 && Gvar.var_233[Gvar.var_554].Var4 == 0) {
                Gvar.var_2474 = 0;
                Gvar.var_2473 = 0;
            }
            if (Gvar.var_233[Gvar.var_553].Var4 != 0 && Gvar.var_233[Gvar.var_554].Var4 == 0) {
                Gvar.var_2474 = 1;
            }
            if (Gvar.var_233[Gvar.var_553].Var4 == 0 && Gvar.var_233[Gvar.var_554].Var4 != 0) {
                Gvar.var_2474 = 2;
            }
            if (Gvar.var_233[Gvar.var_553].Var4 != 0 && Gvar.var_233[Gvar.var_554].Var4 != 0) {
                Gvar.var_2475 = Adap.rnd(2);
                if (Gvar.var_2475 == 0) {
                    Gvar.var_2474 = 1;
                }
                if (Gvar.var_2475 == 1) {
                    Gvar.var_2474 = 2;
                }
            }
        }
        if (Gvar.kougeki_disc_id  == 0 && Gvar.bougyo_disc_id == 0) {
            Gvar.var_2474 = 0;
            Gvar.var_2473 = 0;
        }
        if (Gvar.var_2474 == 1 && Gvar.var_233[Gvar.var_553].Var12 == 2) {
            Gvar.var_2474 = 3;
            Gvar.var_2473 = 3;
        }
        if (Gvar.var_2474 == 2 && Gvar.var_233[Gvar.var_554].Var12 == 2) {
            Gvar.var_2474 = 4;
            Gvar.var_2473 = 3;
        }
        if (Gvar.var_2474 == 1) {
            await Func.func426();
            Gvar.var_233[Gvar.var_553].Var4 = Gvar.var_233[Gvar.var_553].Var4 - 1;
            Gvar.var_580 = Gvar.var_580 - 1;
            Gvar.var_894 = Gvar.var_894 - 1;
            Gvar.var_2473 = 1;
            Gvar.belongings_item_list = Gvar.kougeki_disc_id ;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_553].Var13;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_2822 = Gvar.item_name;
        }
        if (Gvar.var_2474 == 2) {
            await Func.func427();
            Gvar.var_233[Gvar.var_554].Var4 = Gvar.var_233[Gvar.var_554].Var4 - 1;
            Gvar.var_581 = Gvar.var_581 - 1;
            Gvar.var_895 = Gvar.var_895 - 1;
            Gvar.var_2473 = 1;
            Gvar.belongings_item_list = Gvar.bougyo_disc_id;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_554].Var13;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_2822 = Gvar.item_name;
        }
        if (Gvar.var_2474 == 3) {
            await Func.func426();
            Gvar.var_233[Gvar.var_553].Var12 = 0;
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_553].Var0;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_553].Var13;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_2822 = Gvar.item_name;
        }
        if (Gvar.var_2474 == 4) {
            await Func.func427();
            Gvar.var_233[Gvar.var_554].Var12 = 0;
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_554].Var0;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_554].Var13;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_2822 = Gvar.item_name;
        }
        if (Gvar.var_2473 == 1) {
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "スタンドが溶かされている！";
            Gvar.comments_row2a = "";
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "" + Gvar.var_2822 + "は";
            Gvar.comments_row2a = "弱くなってしまった…";
            await Func.func047();
            await Func.func050();
        }
        if (Gvar.var_2473 == 3) {
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "スタンドが溶かされている！";
            Gvar.comments_row2a = "";
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "" + Gvar.var_2822 + "を";
            Gvar.comments_row2a = "守っていたオーラは消えてしまった…";
            await Func.func047();
            await Func.func050();
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func587}
