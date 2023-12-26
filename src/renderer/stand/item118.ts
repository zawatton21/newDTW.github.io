import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 118 ダイバーダウンの発動処理
async function item118(this: any) {
        Gvar.var_2331 = 0;
        Gvar.var_2332 = Gvar.var_66;
        Gvar.var_2333 = Gvar.var_67;
        Gvar.var_2334 = Gvar.var_66 - 1;
        if (Gvar.var_2334 <= 0) {
            Gvar.var_2334 = 0;
        }
        Gvar.var_2335 = Gvar.var_66 + 1;
        if (Gvar.var_2335 >= Gvar.var_33) {
            Gvar.var_2335 = Gvar.var_33;
        }
        Gvar.var_2336 = Gvar.var_67 - 1;
        if (Gvar.var_2336 <= 0) {
            Gvar.var_2336 = 0;
        }
        Gvar.var_2337 = Gvar.var_67 + 1;
        if (Gvar.var_2337 >= Gvar.var_34) {
            Gvar.var_2337 = Gvar.var_34;
        }
        Gvar.var_2338 = 94;
        if (Gvar.var_71[Gvar.var_2332][Gvar.var_2333] != 0 && Gvar.var_71[Gvar.var_2332][Gvar.var_2333] != 13 && Gvar.var_73[Gvar.var_2332][Gvar.var_2333] == 0 && Gvar.var_77[Gvar.var_2332][Gvar.var_2333] == 0 && Gvar.var_80[Gvar.var_2332][Gvar.var_2333] == 0) {
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2332][Gvar.var_2333] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2332;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2333;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2332][Gvar.var_2333];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2334][Gvar.var_2333] != 0 && Gvar.var_71[Gvar.var_2334][Gvar.var_2333] != 13 && Gvar.var_73[Gvar.var_2334][Gvar.var_2333] == 0 && Gvar.var_77[Gvar.var_2334][Gvar.var_2333] == 0 && Gvar.var_80[Gvar.var_2334][Gvar.var_2333] == 0) {
            Gvar.var_2339 = Gvar.var_2334;
            Gvar.var_2340 = Gvar.var_2333;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2335][Gvar.var_2333] != 0 && Gvar.var_71[Gvar.var_2335][Gvar.var_2333] != 13 && Gvar.var_73[Gvar.var_2335][Gvar.var_2333] == 0 && Gvar.var_77[Gvar.var_2335][Gvar.var_2333] == 0 && Gvar.var_80[Gvar.var_2335][Gvar.var_2333] == 0) {
            Gvar.var_2339 = Gvar.var_2335;
            Gvar.var_2340 = Gvar.var_2333;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2332][Gvar.var_2337] != 0 && Gvar.var_71[Gvar.var_2332][Gvar.var_2337] != 13 && Gvar.var_73[Gvar.var_2332][Gvar.var_2337] == 0 && Gvar.var_77[Gvar.var_2332][Gvar.var_2337] == 0 && Gvar.var_80[Gvar.var_2332][Gvar.var_2337] == 0) {
            Gvar.var_2339 = Gvar.var_2332;
            Gvar.var_2340 = Gvar.var_2337;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2332][Gvar.var_2336] != 0 && Gvar.var_71[Gvar.var_2332][Gvar.var_2336] != 13 && Gvar.var_73[Gvar.var_2332][Gvar.var_2336] == 0 && Gvar.var_77[Gvar.var_2332][Gvar.var_2336] == 0 && Gvar.var_80[Gvar.var_2332][Gvar.var_2336] == 0) {
            Gvar.var_2339 = Gvar.var_2332;
            Gvar.var_2340 = Gvar.var_2336;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2334][Gvar.var_2337] != 0 && Gvar.var_71[Gvar.var_2334][Gvar.var_2337] != 13 && Gvar.var_73[Gvar.var_2334][Gvar.var_2337] == 0 && Gvar.var_77[Gvar.var_2334][Gvar.var_2337] == 0 && Gvar.var_80[Gvar.var_2334][Gvar.var_2337] == 0) {
            Gvar.var_2339 = Gvar.var_2334;
            Gvar.var_2340 = Gvar.var_2337;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2334][Gvar.var_2336] != 0 && Gvar.var_71[Gvar.var_2334][Gvar.var_2336] != 13 && Gvar.var_73[Gvar.var_2334][Gvar.var_2336] == 0 && Gvar.var_77[Gvar.var_2334][Gvar.var_2336] == 0 && Gvar.var_80[Gvar.var_2334][Gvar.var_2336] == 0) {
            Gvar.var_2339 = Gvar.var_2334;
            Gvar.var_2340 = Gvar.var_2336;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2335][Gvar.var_2337] != 0 && Gvar.var_71[Gvar.var_2335][Gvar.var_2337] != 13 && Gvar.var_73[Gvar.var_2335][Gvar.var_2337] == 0 && Gvar.var_77[Gvar.var_2335][Gvar.var_2337] == 0 && Gvar.var_80[Gvar.var_2335][Gvar.var_2337] == 0) {
            Gvar.var_2339 = Gvar.var_2335;
            Gvar.var_2340 = Gvar.var_2337;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_71[Gvar.var_2335][Gvar.var_2336] != 0 && Gvar.var_71[Gvar.var_2335][Gvar.var_2336] != 13 && Gvar.var_73[Gvar.var_2335][Gvar.var_2336] == 0 && Gvar.var_77[Gvar.var_2335][Gvar.var_2336] == 0 && Gvar.var_80[Gvar.var_2335][Gvar.var_2336] == 0) {
            Gvar.var_2339 = Gvar.var_2335;
            Gvar.var_2340 = Gvar.var_2336;
            Gvar.var_337 = Gvar.var_337 + 1;
            Gvar.var_80[Gvar.var_2339][Gvar.var_2340] = Gvar.var_337;
            Gvar.var_81[Gvar.var_337][0] = Gvar.var_2338;
            Gvar.var_81[Gvar.var_337][1] = Gvar.var_2339;
            Gvar.var_81[Gvar.var_337][2] = Gvar.var_2340;
            Gvar.var_81[Gvar.var_337][4] = 1;
            Gvar.var_81[Gvar.var_337][5] = Gvar.var_71[Gvar.var_2339][Gvar.var_2340];
            Gvar.var_2331 = 1;
        }
        if (Gvar.var_2331 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "この辺りには潜ませられない。";
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
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        Adap.DSPLAY(165);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "地面にダイバーダウンを潜ませた。";
        Gvar.comments_row2 = "";
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
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item118}
