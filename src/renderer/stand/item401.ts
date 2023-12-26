import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 401 フー・ファイターズの発動処理
async function item401(this: any) {
        Gvar.var_2341 = 0;
        Gvar.var_211 = Gvar.var_211 + 20;
        if (Gvar.var_120 == 1 || Gvar.var_174 == 1) {
            Gvar.var_211 = Gvar.var_211 + 20;
        }
        if (Gvar.var_211 >= Gvar.var_352) {
            Gvar.var_211 = Gvar.var_352;
            Gvar.var_2341 = 1;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "傷口にプランクトンを詰めた。";
        if (Gvar.var_120 == 1 || Gvar.var_174 == 1) {
            Gvar.comments_row2 = "いつもより多く回復した。";
        }
        if (Gvar.var_2341 == 1) {
            Gvar.comments_row2 = "体力が完全に回復した。";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();

        Adap.DSPLAY(143);
        Gvar.var_1299 = 5;
        Gvar.var_271 = 1;
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1297 = 0;
        Gvar.belongings_item_list = Gvar.activated_disc_id;
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        // Ver0.1401にて追加。
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item401}
