import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 300 パール・ジャムの発動処理
async function item300(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "パールジャムを食べた。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_1214 = 1;
        Adap.DSPLAY(119); // 食べた時の効果音
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        Gvar.var_1214 = 0;
        Gvar.var_360 = 0;
        Gvar.var_2211 = 0;
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.var_567 = Gvar.var_567 + 1;
            Gvar.var_2211 = 1;
            if (Gvar.var_567 > 999) {
                Gvar.var_567 = 999;
            }
        }
        Gvar.var_350 = Gvar.var_350 + 50;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "お腹が少し膨らんだ";
        Gvar.comments_row2a = "";
        if (Gvar.var_350 == Gvar.var_567) {
            Gvar.comments_row1a = "お腹がいっぱいになった。";
            Gvar.comments_row2a = "";
        }
        if (Gvar.var_2211 == 1) {
            Gvar.comments_row1a = "最大満腹度が" + Gvar.var_567 + "になった。";
            Gvar.comments_row2a = "";
        }
        await Func.func047();
        await Func.func050();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
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

export {item300}
