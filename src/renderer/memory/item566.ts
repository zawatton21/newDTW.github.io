import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 566 ケンゾーのdiscの効果
async function item566(this: any) {
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
            Gvar.comments_row1 = "「健康の秘訣は睡眠8時間半と";
            Gvar.comments_row2 = "　毎朝一杯の尿療法」";
        }
        if (Gvar.var_1073 == 1) {
            Gvar.comments_row1 = "「40年前";
            Gvar.comments_row2 = "　わしは輝いておったんじゃあああああ」";
        }
        if (Gvar.var_1073 == 2) {
            Gvar.comments_row1 = "「教祖復活じゃああああああ";
            Gvar.comments_row2 = "　あああああああああああああ」";
        }
        if (Gvar.var_1073 == 3) {
            Gvar.comments_row1 = "「完璧なる【守りの方角】";
            Gvar.comments_row2 = "これで極めたって事じゃよのオオ！」";
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
        Gvar.var_1299 = 8;
        Gvar.var_271 = 1;
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1297 = 0;
        Gvar.var_105 = 1; // Gvar.var_105 攻撃を躱わしやすくなるフラグON
        return;
}

export {item566}
