import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func807(this: any) {
        Adap.dbgprt(807);
        Gvar.var_1206 = 0;
        Gvar.belongings_item_list = Gvar.var_991[0][Gvar.var_225][0];
        Gvar.disc_rarity = Gvar.var_991[0][Gvar.var_225][13];
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_3188 = Gvar.item_name;
        Gvar.var_1037 = Gvar.var_1037 + 1;
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            Gvar.var_991[1][Gvar.var_1037][cnt1] = Gvar.var_991[0][Gvar.var_225][cnt1];
        }
        Gvar.var_991[1][Gvar.var_1037][11] = 0;
        Gvar.var_991[0][Gvar.var_225][0] = 0;
        Gvar.var_1957 = 0;
        Gvar.var_447 = 1;
        Gvar.var_449 = 2;
        for (let cnt1 = 0; cnt1 < Gvar.var_1013; ++cnt1) {
            if (Gvar.var_991[0][Gvar.var_447][0] == 0) {
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    Gvar.var_991[0][Gvar.var_447][cnt3] = Gvar.var_991[0][Gvar.var_449][cnt3];
                }
                Gvar.var_1957 = 1;
            }
            if (Gvar.var_1957 == 1) {
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    Gvar.var_991[0][Gvar.var_447][cnt3] = Gvar.var_991[0][Gvar.var_449][cnt3];
                }
            }
            Gvar.var_447 = Gvar.var_447 + 1;
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        Gvar.var_1013 = Gvar.var_1013 - 1;

        Adap.DSPLAY(207);
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.var_3188 + "ですね…";
        Gvar.comments_row2 = "ﾚｸｲｴﾑの大迷宮１階に必ず届けます。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func801();
        await Func.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func807}
