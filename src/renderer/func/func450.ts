import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func450(this: any) {
        Adap.dbgprt(450);
        if (Gvar.var_1991 == 6) {
            await Func.func451(); // ジャッジメントの問いに対して、願いの数を増やしてくれと選択した時の動作処理
            return;
        }
        Gvar.var_1207 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「Ｈａｉｌ　２　Ｕ ！」";
        Gvar.comments_row2 = "　　（君に幸あれ！）";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_271 = 1;
        Gvar.var_1582 = 0;
        Gvar.var_1586 = 1;
        Adap.DSPLAY(168);
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1586++;
        }
        Gvar.var_1586 = 0;
        Gvar.var_271 = 0;
        if (Gvar.var_1991 == 1) {
            await Func.func452(); // ジャッジメントの問いに対して、お金持ちになりたいと選択した時の動作処理
            return;
        }
        if (Gvar.var_1991 == 2) {
            await Func.func453(); // ジャッジメントの問いに対して、満腹になりたいと選択した時の動作処理
            return;
        }
        if (Gvar.var_1991 == 3) {
            await Func.func454(); // ジャッジメントの問いに対して、体力を回復させてくれと選択した時の動作処理
            return;
        }
        if (Gvar.var_1991 == 4) {
            await Func.func455(); // ジャッジメントの問いに対して、敵の動きをとめてくれと選択した時の動作処理
            return;
        }
        if (Gvar.var_1991 == 5) {
            await Func.func456(); // ジャッジメントの問いに対して、アヴドゥルを生き返らせてくれと選択した時の動作処理
            return;
        }
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func450}
