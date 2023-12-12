import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 101 シルバーチャリオッツの発動処理
async function item101(this: any) {
        if (Gvar.var_420 != 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "チャリオッツは分身中だ。";
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
        Gvar.var_2299 = 1;
        Gvar.var_1845 = 1;
        await Func.func556();
        Gvar.var_83[Gvar.var_673].Var11 = 1;
        Gvar.var_2299 = 0;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "チャリオッツを出せる場所が無いぞ。";
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
        for (let cnt2 = 0; cnt2 < 7; ++cnt2) {
            Gvar.var_2299 = 1;
            Gvar.var_1845 = 1;
            await Func.func556();
            Gvar.var_83[Gvar.var_673].Var11 = 1;
            Gvar.var_2299 = 0;
            Gvar.var_1845 = 0;
        }
        Gvar.var_420 = 7;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ブラボー！";
        Gvar.comments_row2 = "おお…　ブラボー！！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            Gvar.var_1259 = 1;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1259 = 2;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1259 = 3;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1259 = 2;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1259 = 1;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "フフフ･･･";
        Gvar.comments_row2a = "感覚の目でよーく見てろ！";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            Gvar.var_1259 = 1;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1259 = 2;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1259 = 3;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1259 = 2;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1259 = 1;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1259 = 0;
        Gvar.var_199 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        for (let cnt2 = 0; cnt2 < Gvar.var_97 + 1; ++cnt2) {
            if (Gvar.var_83[Gvar.cnt2][0] == 146 && Gvar.var_83[Gvar.cnt2][31] == 5) {
                Gvar.var_83[Gvar.cnt3][11] = 0;
            }
        }
        Adap.DSPLAY(112); // 刀の切れる音 or 強化した時のシャキーン 効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "これだ！　甲冑を外したスタンド";
        Gvar.comments_row2a = "「シルバー・チャリオッツ」！";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}


export {item101}
