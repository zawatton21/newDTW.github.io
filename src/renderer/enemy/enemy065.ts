import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 65 虹村形兆の特殊能力
async function enemy065(this: any) {
        Gvar.var_2830 = Adap.rnd(2);
        if (Gvar.var_2830 == 0) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_2882 = Adap.rnd(6);
            if (Gvar.var_2882 == 0) {
                Gvar.comments_row1 = "全隊戦闘態勢ッ！";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_2882 == 1) {
                Gvar.comments_row1 = "お前を殺す決定には変わりはない…";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_2882 == 2) {
                Gvar.comments_row1 = "几帳面な性格でね―――";
                Gvar.comments_row2 = "必ずやると言ったらやる！";
            }
            if (Gvar.var_2882 == 3) {
                Gvar.comments_row1 = "はたして無事でいられるかなあァ";
                Gvar.comments_row2 = "―――――――ッ";
            }
            if (Gvar.var_2882 == 4) {
                Gvar.comments_row1 = "予告どおりは気分がいい～～～ッ";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_2882 == 5) {
                Gvar.comments_row1 = "キッカケを与えてやるよォ――ッ";
                Gvar.comments_row2 = "";
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            Gvar.var_83[Gvar.var_673].Var21 = 1;
            Gvar.var_411 = 1;
            for (let cnt3 = 0; cnt3 < 16; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_673].Var21 = 0;
            Gvar.var_411 = 0;
            Gvar.var_2534 = 1;
            Gvar.var_1845 = 1;
            Gvar.var_2353 = Gvar.var_673;
            await Func.func556(); // 敵をフロアへ出現させる処理
            Gvar.var_673 = Gvar.var_2353;
            Gvar.var_2534 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 == 0) {
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "攻撃開始イ―――――ッ！";
                Gvar.comments_row2a = "";
                Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
                Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                Gvar.var_2197 = 1;
                return;
            }
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "グリーンベレーッ！";
            Gvar.comments_row2a = "やれッ！";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
        }
        Gvar.var_2197 = 1;
        return;
}

export {enemy065}
