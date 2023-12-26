import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func747(this: any) {
        Adap.dbgprt(747);
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "パウッ！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_742 = 1;
        Gvar.var_83[Gvar.var_3072].Var7 = 1;
        Gvar.var_271 = 1;
        for (let cnt1 = 0; cnt1 < 12; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            if (cnt1 == 3) {
                Gvar.var_1514 = 1;
                Gvar.var_747 = 1;
                Gvar.var_389 = 2;
            }
            if (cnt1 >= 3) {
                Gvar.var_1514++;
            }
        }
        Gvar.var_1514 = 0;
        Gvar.var_271 = 0;
        Gvar.var_83[Gvar.var_3072].Var7 = 0;
        Gvar.var_389 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_3135 = Adap.rnd(2);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_3135 == 0) {
            Gvar.comments_row1 = "ちょいとミスった";
            Gvar.comments_row2 = "指がスベっちゃった　いやごめん！";
            Gvar.var_211 = Math.floor(Gvar.var_211 / 2) + 1;
        }
        if (Gvar.var_3135 == 1) {
            Gvar.comments_row1 = "しばらく呼吸はできん……";
            Gvar.comments_row2 = "が……心配はいらん";
            Gvar.var_125 = 1;
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func094(); // メッセージ送りの際の効果音
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func747}
