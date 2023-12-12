import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func733(this: any) {
        Adap.dbgprt(733);
        await Func.func729();
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_3125 = Adap.rnd(3);
        if (Gvar.var_2571 == 0) {
            Gvar.var_3125 = Adap.rnd(2);
        }
        if (Gvar.var_3125 == 0) {
            if (Gvar.var_1332 < 10) {
                Gvar.comments_row1 = "うう…このキズは…急所だ…！";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_1332 >= 10 && Gvar.var_1332 < 30) {
                Gvar.comments_row1 = "やめりゃあよかった!こんなﾀﾌｶﾞｲに";
                Gvar.comments_row2 = "ケンカふっかけるのはよォ！";
            }
            if (Gvar.var_1332 >= 30 && Gvar.var_1332 < 60) {
                Gvar.comments_row1 = "こんなもんカスリ傷だぜッ！";
                Gvar.comments_row2 = "…イ、イデーイデー！つ…杖！";
            }
            if (Gvar.var_1332 >= 60 && Gvar.var_1332 < 80) {
                Gvar.comments_row1 = "ここまで首をつっこんだんだ！";
                Gvar.comments_row2 = "黙っているのは性分じゃねえからな";
            }
            if (Gvar.var_1332 >= 80 && Gvar.var_1332 < 100) {
                Gvar.comments_row1 = "俺は物を盗むが";
                Gvar.comments_row2 = "こいつらは命を盗む！許せねえ！";
            }
            if (Gvar.var_1332 >= 100) {
                Gvar.comments_row1 = "この紳士に手を出すことは…";
                Gvar.comments_row2 = "このスピードワゴンが許さねえ！";
            }
        }
        if (Gvar.var_3125 == 1) {
            Gvar.var_3088 = Gvar.var_83[Gvar.var_3072].Var16;
            Gvar.var_3089 = Gvar.var_83[Gvar.var_3072].Var39;
            await Func.func682();
            if (Gvar.var_3073 < 99999) {
                Gvar.comments_row1 = "あと" + Gvar.var_3073 + "くらいで";
                Gvar.comments_row2 = "もっと強くなれる気がするぜ！";
            }
            if (Gvar.var_3073 >= 99999) {
                Gvar.comments_row1 = "おれの強さはこれが限界だ！";
                Gvar.comments_row2 = "";
            }
            await Func.func125();
        }
        if (Gvar.var_3125 == 2) {
            Gvar.enemy_list = Gvar.var_2571;
            await Func.func626();
            Gvar.var_3125 = Adap.rnd(3);
            if (Gvar.var_3125 == 0) {
                Gvar.comments_row1 = "" + Gvar.enemy_name + "は死んだッ！";
                Gvar.comments_row2 = "大げさかもしれんが世界は救われたッ！";
            }
            if (Gvar.var_3125 == 1) {
                Gvar.comments_row1 = "" + Gvar.enemy_name + "は臭えーッ！";
                Gvar.comments_row2 = "ゲロ以下のニオイがﾌﾟﾝﾌﾟﾝするぜーッ！";
            }
            if (Gvar.var_3125 == 2) {
                Gvar.comments_row1 = "気をつけな！";
                Gvar.comments_row2 = "" + Gvar.enemy_name + "はこすずるいぜ！";
            }
        }
        if (Gvar.var_83[Gvar.var_3072].Var3 == 1) {
            Gvar.comments_row1 = "礼は　戦いが終わって";
            Gvar.comments_row2 = "生きのびてから言えってんだ…";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func094(); // メッセージ送りの際の効果音
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_198 = 0;
        await Func.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func733}
