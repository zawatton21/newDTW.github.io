import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 701 没アイテム「ソフト・マシーンの発動によって罠にした敵」を使用した時の効果
async function item701(this: any) {
        if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_80[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_73[Gvar.var_66][Gvar.var_67] != 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "足元のものが邪魔で";
            Gvar.comments_row2 = "うまく使えなかった。";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            return;
        }
        Gvar.var_337 = Gvar.var_337 + 1;
        Gvar.var_80[Gvar.var_66][Gvar.var_67] = Gvar.var_337;
        Gvar.var_81[Gvar.var_337][0] = 77;
        Gvar.var_81[Gvar.var_337][1] = Gvar.var_66;
        Gvar.var_81[Gvar.var_337][2] = Gvar.var_67;
        Gvar.var_81[Gvar.var_337][4] = 1;
        Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_66][Gvar.var_67];
        Gvar.var_81[Gvar.var_337][6] = Gvar.disc_rarity;
        Gvar.enemy_list = Gvar.disc_rarity;
        await Func.func626(); // 敵リスト
        Gvar.var_2213 = Gvar.enemy_name;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.var_2213 + "を";
        Gvar.comments_row2 = "地面に出して人質にした！";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "この上にいれば";
        Gvar.comments_row2a = "" + Gvar.var_2213 + "から攻撃されないぞ";
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        return;
}

export {item701}
