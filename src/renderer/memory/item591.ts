import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// Ver0.1403にて追加。No = 591 ポコロコのdiscの効果
async function item591(this: any) {
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
            Gvar.comments_row1 = "驚きだよォォ";
            Gvar.comments_row2 = "YEEEEHAAHHHッ！";
        }
        if (Gvar.var_1073 == 1) {
            Gvar.comments_row1 = "驚きだよォォ";
            Gvar.comments_row2 = "YEEEEHAAHHHッ！";
        }
        if (Gvar.var_1073 == 2) {
            Gvar.comments_row1 = "驚きだよォォ";
            Gvar.comments_row2 = "YEEEEHAAHHHッ！";
        }
        if (Gvar.var_1073 == 3) {
            Gvar.comments_row1 = "驚きだよォォ";
            Gvar.comments_row2 = "YEEEEHAAHHHッ！";
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
        // 非常にラッキーなのをアピールしたいので、レベルアップした時の効果音を何回も鳴らしたい
        Adap.DSPLAY(142); // レベルアップした時の効果音
        Gvar.var_1024 = 1; // 次の階の出現アイテム数＋6個するフラグON
        Gvar.var_111 = 1; // Gvar.var_111 命中率を上げるフラグON
        Gvar.var_157 = 1; // Gvar.var_157 倍速移動フラグON
        Gvar.var_105 = 1; // Gvar.var_105 攻撃を躱わしやすくなるフラグON  
        Gvar.var_104 = 1; // Gvar.var_104 攻撃力が上がるフラグON
        if (Gvar.var_109 == 1) {
            Gvar.var_104 = 0; // Gvar.var_104 攻撃力が上がるフラグOFF
            Gvar.var_109 = 0;
        }
        Gvar.var_172 = 1; // Gvar.var_172 発動効果が向上するフラグON
        Gvar.var_121 = 1; // Gvar.var_121 罠が見えるようになるフラグON
        return;
}

export {item591}
