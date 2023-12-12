import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func741(this: any) {
        Adap.dbgprt(741);
        await Func.func729();
        Gvar.var_3128 = Gvar.var_83[Gvar.var_3072].Var1;
        Gvar.var_3129 = Gvar.var_83[Gvar.var_3072].Var2;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_3130 = 0;
        Gvar.var_3125 = Adap.rnd(4);
        if (Gvar.var_2571 == 0) {
            Gvar.var_3125 = Adap.rnd(3);
        }
        if (Gvar.var_3125 == 0) {
            if (Gvar.var_180 == 0 && Gvar.var_73[Gvar.var_3128][Gvar.var_3129] == 0 && Gvar.var_80[Gvar.var_3128][Gvar.var_3129] == 0 && Gvar.var_77[Gvar.var_3128][Gvar.var_3129] == 0) {
                Gvar.comments_row1 = "ここに砂のDIOを潜ませてやろうか？";
                Gvar.comments_row2 = "";
                Gvar.var_3130 = 1;
            }
            if (Gvar.var_3130 == 0) {
                Gvar.var_3125 = Adap.rnd(3);
                if (Gvar.var_2571 == 0) {
                    Gvar.var_3125 = Adap.rnd(2);
                }
                Gvar.var_3125 = Gvar.var_3125 + 1;
            }
        }
        if (Gvar.var_3125 == 1) {
            if (Gvar.var_1332 < 10) {
                Gvar.comments_row1 = "(ガフッ…ググ…ニヤリ)";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_1332 >= 10 && Gvar.var_1332 < 30) {
                Gvar.comments_row1 = "(な…なんのトラブルもない人生を送る";
                Gvar.comments_row2 = "ハズだったのに…ミスったぜ…)";
            }
            if (Gvar.var_1332 >= 30 && Gvar.var_1332 < 60) {
                Gvar.comments_row1 = "(クソー、手加減なしの凶暴なヤツだ…)";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_1332 >= 60 && Gvar.var_1332 < 80) {
                Gvar.comments_row1 = "(やれやれ…犬好きは見殺しには";
                Gvar.comments_row2 = "できねーぜッ！)";
            }
            if (Gvar.var_1332 >= 80 && Gvar.var_1332 < 100) {
                Gvar.comments_row1 = "(うるせーな、犬の俺に聞くな！)";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_1332 >= 100) {
                Gvar.comments_row1 = "(くるなら来いッ！ブッ殺してやる！)";
                Gvar.comments_row2 = "";
            }
        }
        if (Gvar.var_3125 == 2) {
            Gvar.var_3088 = Gvar.var_83[Gvar.var_3072].Var16;
            Gvar.var_3089 = Gvar.var_83[Gvar.var_3072].Var39;
            await Func.func682();
            if (Gvar.var_3073 < 99999) {
                Gvar.comments_row1 = "(あと" + Gvar.var_3073 + "くらいで";
                Gvar.comments_row2 = "もっと強くなれる気がするぜ！)";
            }
            if (Gvar.var_3073 >= 99999) {
                Gvar.comments_row1 = "(おれの強さはこれが限界だ！)";
                Gvar.comments_row2 = "";
            }
            await Func.func128();
        }
        if (Gvar.var_3125 == 3) {
            Gvar.enemy_list = Gvar.var_2571;
            await Func.func626();
            Gvar.var_3125 = Adap.rnd(3);
            if (Gvar.var_3125 == 0) {
                Gvar.comments_row1 = "や…やった、やっつけたぞ";
                Gvar.comments_row2 = "" + Gvar.enemy_name + "め…";
            }
            if (Gvar.var_3125 == 1) {
                Gvar.comments_row1 = "かかってきやがれ";
                Gvar.comments_row2 = "" + Gvar.enemy_name + "め！";
            }
            if (Gvar.var_3125 == 2) {
                Gvar.comments_row1 = "やり～！" + Gvar.enemy_name + "め";
                Gvar.comments_row2 = "頭悪いぜッ！";
            }
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
        if (Gvar.var_3130 == 0) {
            Gvar.var_198 = 0;
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3131 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func741}
