import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 115 Gエクスペリエンスの発動処理
async function item115(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "生まれろ…　新しい生命…";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ関係呼び出し
        }
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
            Gvar.var_2272 = 1;
            Gvar.var_1845 = 1;
            await Func.func556();
            Gvar.var_2272 = 0;
            Gvar.var_1845 = 0;
            if (Gvar.var_2110 != 0) {
                Gvar.var_2273 = Gvar.var_97;
                Gvar.var_83[Gvar.var_2273].Var21 = 1;
                Gvar.var_411 = 1;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_411 = 2;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_411 = 3;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_411 = 4;
                for (let cnt4 = 0; cnt4 < 3; ++cnt4) {
                    Gvar.var_300 = 0;
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_411 = 0;
                Gvar.var_83[Gvar.var_2273].Var21 = 0;
                Gvar.var_83[Gvar.var_2273].Var5 = 2;
            }
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item115}
