import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ダンジョン内で仲間の成長したペッシに話しかけた時のメッセージ処理
async function func753(this: any) {
        Adap.dbgprt(753);
        Gvar.var_243 = 0;
        Gvar.var_3072 = Gvar.var_314;
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
                Gvar.comments_row1 = "落ちてくだけるのはウヒャハハハ";
                Gvar.comments_row2 = "俺だぁぁーーーッ！！！";
            }
            if (Gvar.var_1332 >= 10 && Gvar.var_1332 < 30) {
                Gvar.comments_row1 = "ガブッ…負けた…のか…";
                Gvar.comments_row2 = "俺は死ぬ…死ぬのか…";
            }
            if (Gvar.var_1332 >= 30 && Gvar.var_1332 < 60) {
                Gvar.comments_row1 = "栄光は…俺にある…！";
                Gvar.comments_row2 = "兄貴…見守っていてくれ…！";
            }
            if (Gvar.var_1332 >= 60 && Gvar.var_1332 < 80) {
                Gvar.comments_row1 = "グッ…落ち着くんだ！";
                Gvar.comments_row2 = "疑心暗鬼は心の弱さだ…！";
            }
            if (Gvar.var_1332 >= 80 && Gvar.var_1332 < 100) {
                Gvar.comments_row1 = "兄貴と同じ苦しみを味わうんだなァーッ！";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_1332 >= 100) {
                Gvar.comments_row1 = "償わせてやるぜッ！";
                Gvar.comments_row2 = "兄貴の意志はオイラがとげるッ！";
            }
        }
        if (Gvar.var_3125 == 2) {
            Gvar.var_3088 = Gvar.var_83[Gvar.var_3072].Var16;
            Gvar.var_3089 = Gvar.var_83[Gvar.var_3072].Var39;
            await Func.func682();
            if (Gvar.var_3073 < 99999) {
                Gvar.comments_row1 = "あと" + Gvar.var_3073 + "くらいで";
                Gvar.comments_row2 = "もっと強くなれるぜ！";
            }
            if (Gvar.var_3073 >= 99999) {
                Gvar.comments_row1 = "俺の強さはこれが限界だぜ！";
                Gvar.comments_row2 = "";
            }
            await Func.func127();
        }
        if (Gvar.var_3125 == 3) {
            Gvar.enemy_list = Gvar.var_2571;
            await Func.func626();
            Gvar.var_3125 = Adap.rnd(3);
            if (Gvar.var_3125 == 0) {
                Gvar.comments_row1 = "" + Gvar.enemy_name + "をやっちまった～♪";
                Gvar.comments_row2 = "でも思ったよりたいしたことないな";
            }
            if (Gvar.var_3125 == 1) {
                Gvar.comments_row1 = "これで俺に向かってマンモーニだなんて";
                Gvar.comments_row2 = "言えるヤツは　誰一人いねー…";
            }
            if (Gvar.var_3125 == 2) {
                Gvar.comments_row1 = "" + Gvar.enemy_name + "の";
                Gvar.comments_row2 = "心臓えぐりとってやったぜ…";
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
        Gvar.var_3137 = 1;
        Gvar.var_548 = 1; // 選択肢処理フラグON
        await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
        return;
}

export {func753}
