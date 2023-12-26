import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func746(this: any) {
        Adap.dbgprt(746);
        await Func.func729();
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_3133 = 0;
        Gvar.var_3125 = Adap.rnd(4);
        if (Gvar.var_2571 == 0) {
            Gvar.var_3125 = Adap.rnd(3);
        }
        if (Gvar.var_3125 == 0) {
            if (Gvar.var_130 == 0) {
                Gvar.comments_row1 = "軽い波紋を作れるようにしてやろうか？";
                Gvar.comments_row2 = "";
                Gvar.var_3133 = 1;
            }
            if (Gvar.var_130 != 0) {
                Gvar.var_3125 = Adap.rnd(3);
                if (Gvar.var_2571 == 0) {
                    Gvar.var_3125 = Adap.rnd(2);
                }
                Gvar.var_3125 = Gvar.var_3125 + 1;
            }
        }
        if (Gvar.var_3125 == 1) {
            if (Gvar.var_1332 < 10) {
                Gvar.comments_row1 = "ま…まるで親友と息子を同時に";
                Gvar.comments_row2 = "持ったような気持ちだぞ…";
            }
            if (Gvar.var_1332 >= 10 && Gvar.var_1332 < 30) {
                Gvar.comments_row1 = "ついに　ついにきたか";
                Gvar.comments_row2 = "あの予言の時が…";
            }
            if (Gvar.var_1332 >= 30 && Gvar.var_1332 < 60) {
                Gvar.comments_row1 = "やれやれ…こいつらの魂を";
                Gvar.comments_row2 = "解き放つのは骨が折れそうじゃわい";
            }
            if (Gvar.var_1332 >= 60 && Gvar.var_1332 < 80) {
                Gvar.comments_row1 = "戦いの思考２！勇気とは怖さを知る事！";
                Gvar.comments_row2 = "恐怖を我が物とすることじゃあッ！";
            }
            if (Gvar.var_1332 >= 80 && Gvar.var_1332 < 100) {
                Gvar.comments_row1 = "戦いの思考１！相手の立場になって";
                Gvar.comments_row2 = "考える…これは大事じゃぞ！";
            }
            if (Gvar.var_1332 >= 100) {
                Gvar.comments_row1 = "ゆくぞディアボロ君！";
                Gvar.comments_row2 = "ところでコルク抜きもってなぁい？";
            }
        }
        if (Gvar.var_3125 == 2) {
            Gvar.var_3088 = Gvar.var_83[Gvar.var_3072].Var16;
            Gvar.var_3089 = Gvar.var_83[Gvar.var_3072].Var39;
            await Func.func682();
            if (Gvar.var_3073 < 99999) {
                Gvar.comments_row1 = "あと" + Gvar.var_3073 + "くらいで";
                Gvar.comments_row2 = "もっと強くなれるだろう";
            }
            if (Gvar.var_3073 >= 99999) {
                Gvar.comments_row1 = "私の強さはこれが限界のようだ。";
                Gvar.comments_row2 = "";
            }
            await Func.func124();
        }
        if (Gvar.var_3125 == 3) {
            Gvar.enemy_list = Gvar.var_2571;
            await Func.func626();
            Gvar.var_3125 = Adap.rnd(3);
            if (Gvar.var_3125 == 0) {
                Gvar.comments_row1 = "" + Gvar.enemy_name + "なんぞ";
                Gvar.comments_row2 = "ノミと同類よォー！";
            }
            if (Gvar.var_3125 == 1) {
                Gvar.comments_row1 = "波紋エネルギーをぶつければ";
                Gvar.comments_row2 = "吸血鬼どもは砕け散るッ！！";
            }
            if (Gvar.var_3125 == 2) {
                Gvar.comments_row1 = "どうだディアボロ君";
                Gvar.comments_row2 = "これが「仙道」だ！";
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
        if (Gvar.var_3133 == 0) {
            Gvar.var_198 = 0;
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3134 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func746}
