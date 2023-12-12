import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func526(this: any) {
        Adap.dbgprt(526);
        Gvar.var_2375 = Gvar.var_2375 + 19;
        Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2375] = 0;
        Gvar.var_2377 = 20;
        Gvar.var_2378 = 21;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            if (Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2377] == 0 && Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2378] != 0) {
                Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2377] = Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2378];
                Gvar.var_233[Gvar.var_2373]["Var" + Gvar.var_2378] = 0;
                Gvar.var_2377 = 20;
                Gvar.var_2378 = 21;
                cnt1 = -1;
                continue;
            }
            Gvar.var_2377++;
            Gvar.var_2378++;
        }
        Gvar.var_233[Gvar.var_2373].Var19 = Gvar.var_233[Gvar.var_2373].Var19 - 1;
        if (Gvar.var_233[Gvar.var_2373].Var19 <= 1) {
            Gvar.var_233[Gvar.var_2373].Var19 = 1;
        }
        Gvar.var_233[Gvar.var_2373].Var5 = Gvar.var_233[Gvar.var_2373].Var5 + 1;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.strengthen_item_name + "の";
        Gvar.comments_row2 = "能力を１つ消去した。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_225 = Gvar.var_2300;
        if (Gvar.var_2301 == 1) {
            Gvar.var_220 = 1; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        }
        if (Gvar.var_2301 == 2) {
            Gvar.var_234 = 1;
        }
        Gvar.belongings_item_list = 310;
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        Gvar.var_1667 = 0;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        Gvar.var_234 = 0;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func526}
