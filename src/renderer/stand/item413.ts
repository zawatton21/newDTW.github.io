import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 413 不明disc(没discサーフィス?) の発動処理
async function item413(this: any) {
        Gvar.var_2109 = 1;
        Gvar.var_1845 = 1;
        await Func.func556();
        Gvar.var_2109 = 0;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "人形を置く場所が無いぞ。";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_234 = 0;
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_439 = Gvar.var_673;
        Gvar.var_83[Gvar.var_439].Var11 = 1;
        Gvar.var_83[Gvar.var_439].Var5 = 2;
        Gvar.var_271 = 1;
        Gvar.var_444 = 1;
        for (let cnt2 = 0; cnt2 < 25; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_444 = Gvar.var_444 + 1;
        }
        Gvar.var_271 = 0;
        Gvar.var_444 = 0;
        Gvar.var_83[Gvar.var_439].Var11 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item413}
