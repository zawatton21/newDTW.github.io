import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func513(this: any) {
        Adap.dbgprt(513);
        if (Gvar.var_2357 == 1) {
            await Func.func817();
            return;
        }
        if (Gvar.var_1949 == 0) {
            Gvar.belongings_item_list = Gvar.activated_disc_id;
            await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
            Gvar.kougeki_disc_id  = Gvar.var_2261;
        }
        Gvar.var_1254 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_2358 = Adap.rnd(5);
        if (Gvar.var_2358 == 0) {
            Gvar.comments_row1 = "よし。";
            Gvar.comments_row2 = "「今起こったことはすべて忘れる」…と。";
        }
        if (Gvar.var_2358 == 1) {
            Gvar.comments_row1 = "最低なヤツだな……";
            Gvar.comments_row2 = "おまえは使えんな…";
        }
        if (Gvar.var_2358 == 2) {
            Gvar.comments_row1 = "実にいいッ！";
            Gvar.comments_row2 = "実に気に入ったよ！";
        }
        if (Gvar.var_2358 == 3) {
            Gvar.comments_row1 = "君の性格……";
            Gvar.comments_row2 = "読者からもきっと好かれると思うよ";
        }
        if (Gvar.var_2358 == 4) {
            Gvar.comments_row1 = "たとえ平凡でも";
            Gvar.comments_row2 = "人の人生を見るのはおもしろい……";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_83[Gvar.var_2231].Var8 = 0;
        Gvar.var_1949 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func513}
