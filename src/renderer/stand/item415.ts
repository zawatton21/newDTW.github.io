import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 415 タスクact1の発動処理。Ver0.1401にて追加。
async function item415(this: any) {
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "『牙』だ";
        Gvar.comments_row2 = "これからは『牙』と呼ぶ！";
        await Func.func047();
        await Func.func050();

        Gvar.var_1572 = 1;
        Gvar.var_271 = 1;
        // Adap.DSPLAY(233);
        Adap.DSPLAY(225);
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1572++;
        }
        Gvar.var_1572 = 0;
        Gvar.var_271 = 0;

        Gvar.taskact1_on = 1; // Ver0.1401にて追加。タスクact1を発動したかどうかの確認フラグ

        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "素手での攻撃力が上がった！";
        Gvar.comments_row2 = "";

        await Func.func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.belongings_item_list = Gvar.activated_disc_id;
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;

}

export {item415}
