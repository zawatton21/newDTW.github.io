import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 400 ハイエロファントグリーンの発動処理
async function item400(this: any) {
        if (Gvar.var_73[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_80[Gvar.var_66][Gvar.var_67] != 0 || Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ここには仕掛けられない。";
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
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        Gvar.var_337 = Gvar.var_337 + 1;
        Gvar.var_2330 = Gvar.var_337;
        Gvar.var_80[Gvar.var_66][Gvar.var_67] = Gvar.var_2330;
        Gvar.var_81[Gvar.var_2330][0] = 92;
        Gvar.var_81[Gvar.var_2330][1] = Gvar.var_66;
        Gvar.var_81[Gvar.var_2330][2] = Gvar.var_67;
        Gvar.var_81[Gvar.var_2330][4] = 1;
        Gvar.var_81[Gvar.var_2330][5] = Gvar.var_201;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "法王の結界を仕掛けた。";
        Gvar.comments_row2 = "";
        // return; Ver 0.1309 return削除。これがあるがために、「法王の結界」の罠を仕掛けるとフリーズする。
        Adap.DSPLAY(165);
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
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

export {item400}
