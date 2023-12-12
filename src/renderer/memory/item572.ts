import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 572 承太郎のdiscの効果
async function item572(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.var_1073 = Adap.rnd(4);
        if (Gvar.var_1073 == 0) {
            Gvar.comments_row1 = "「やれやれだぜ・・・」";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_1073 == 1) {
            Gvar.comments_row1 = "「やれやれだぜ・・・」";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_1073 == 2) {
            Gvar.comments_row1 = "「やれやれだぜ・・・」";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_1073 == 3) {
            Gvar.comments_row1 = "「やれやれだぜ・・・」";
            Gvar.comments_row2 = "";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Adap.DSPLAY(182);
        Gvar.var_1299 = 3;
        Gvar.var_271 = 1;
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1297 = 0;
        Gvar.var_111 = 1; // 命中率を上げるフラグON
        return;
}

export {item572}
