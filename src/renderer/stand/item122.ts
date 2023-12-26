import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 122 アヌビス神の発動処理 
async function item122(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_2267 = Adap.dim(10);
        Gvar.var_143 = 1;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「どの程度の ふみ込みまで";
        Gvar.comments_row2 = "　耐えられるか 憶えるゼ！」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Adap.DSPLAY(140);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item122}



// 遠投状態(アヌビス神装備)でアイテムを投げた時の動作処理
async function func418(this: any) {
        Adap.dbgprt(418);
        Gvar.belongings_item_list = Gvar.var_1846;
        Gvar.disc_rarity = Gvar.var_1833;
        await Func.func399(); // 遠投状態で投げた時のアイテム表示
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.var_1832 + " は";
        Gvar.comments_row2 = "ナイルの川底に沈んだ。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.payment_amount = 0;
        if (Gvar.var_1850 == 1) {
            Gvar.belongings_item_list = Gvar.var_1846;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.var_482 = 0;
            Gvar.var_482 = (Gvar.var_1837 + Gvar.var_1835) * 50;
            if (Gvar.var_1846 != 800) {
                Gvar.var_482 = Gvar.var_1838 * 100 + Gvar.var_482;
            }
            if (Gvar.var_1836 > 1) {
                Gvar.var_482 = Gvar.var_1836 * 500 + Gvar.var_482;
            }
            Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
        }
        if (Gvar.var_1846 >= 800 && Gvar.var_1846 < 900) {
            Gvar.var_484 = 1;
            Gvar.var_485 = Gvar.var_1848;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1) {
                    Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                    await Func.func492(); // アイテムリスト呼び出し
                    Gvar.var_482 = 0;
                    Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                        Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                    }
                    Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
                }
                Gvar.var_484 = Gvar.var_484 + 1;
            }
        }
        Gvar.count_buying_price = Gvar.count_buying_price + Gvar.payment_amount;
        if (Gvar.var_220 == 0) { // 道具画面(メニュー画面/道具)が閉じている状態
            await Func.func430();
        }
        await Func.func433(); // アイテム配列(所持アイテム)初期化関数
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1220 = 0;
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func418}
