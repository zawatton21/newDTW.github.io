import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// ダンジョン内で仲間になったペッシに話しかけた時のメッセージ処理
async function func752(this: any) {
        Adap.dbgprt(752);
        await Func.func729();
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
            if (Gvar.var_191 == 0) {
                Gvar.comments_row1 = "兄貴ィ！";
                Gvar.comments_row2 = "釣りでもしてみますかい？";
                Gvar.var_3130 = 1;
            }
            if (Gvar.var_191 != 0) {
                Gvar.comments_row1 = "また釣りかい？";
                Gvar.comments_row2 = "少し休ませてくれよ…";
            }
        }
        if (Gvar.var_3125 == 1) {
            if (Gvar.var_1332 < 10) {
                Gvar.comments_row1 = "ゴメンよ兄貴…";
                Gvar.comments_row2 = "俺、やっぱ足手まといだったなぁ…";
            }
            if (Gvar.var_1332 >= 10 && Gvar.var_1332 < 30) {
                Gvar.comments_row1 = "うわぁぁん！";
                Gvar.comments_row2 = "い、痛ぇーーー！";
            }
            if (Gvar.var_1332 >= 30 && Gvar.var_1332 < 60) {
                Gvar.comments_row1 = "兄貴ィ～、痛ェよ～";
                Gvar.comments_row2 = "回復してくれよォ～";
            }
            if (Gvar.var_1332 >= 60 && Gvar.var_1332 < 80) {
                Gvar.comments_row1 = "兄貴ィ～…あ、あてにしねーでくれよ";
                Gvar.comments_row2 = "俺なんかの勘をよォー";
            }
            if (Gvar.var_1332 >= 80 && Gvar.var_1332 < 100) {
                Gvar.comments_row1 = "あ、兄貴ィ～";
                Gvar.comments_row2 = "本当に行くのかい？";
            }
            if (Gvar.var_1332 >= 100) {
                Gvar.comments_row1 = "ブッ殺してやるッ！！";
                Gvar.comments_row2 = "";
            }
        }
        if (Gvar.var_3125 == 2) {
            Gvar.var_3088 = Gvar.var_83[Gvar.var_3072].Var16;
            Gvar.var_3089 = Gvar.var_83[Gvar.var_3072].Var39;
            await Func.func682();
            if (Gvar.var_3073 < 99999) {
                Gvar.comments_row1 = "あと" + Gvar.var_3073 + "くらいで";
                Gvar.comments_row2 = "もっと強くなれるよ兄貴ィッ！";
            }
            if (Gvar.var_3073 >= 99999) {
                Gvar.comments_row1 = "俺の強さはこれが限界だァ～";
                Gvar.comments_row2 = "";
            }
            await Func.func126();
        }
        if (Gvar.var_3125 == 3) {
            Gvar.enemy_list = Gvar.var_2571;
            await Func.func626();
            Gvar.var_3125 = Adap.rnd(2);
            if (Gvar.var_3125 == 0) {
                Gvar.comments_row1 = "" + Gvar.enemy_name + "を";
                Gvar.comments_row2 = "｢ブッ殺した｣！";
            }
            if (Gvar.var_3125 == 1) {
                Gvar.comments_row1 = "俺でも何とか";
                Gvar.comments_row2 = "" + Gvar.enemy_name + "を倒せたぜ！";
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
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_546 = 1;
        Gvar.var_3137 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func752}
