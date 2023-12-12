import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func445(this: any) {
        Adap.dbgprt(445);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_1981 = Gvar.var_233[Gvar.var_225].Var0;
        if (Gvar.var_862[Gvar.var_1981][0] == 0 && Gvar.var_262 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "何かわからないので研究できない";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func051();
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.strengthen_item_name = Gvar.item_name;
        Gvar.var_1983 = 0;
        // 3部コミック
        if (Gvar.var_1950 == 3) {
            if (Gvar.var_1984 == 3 || Gvar.var_1984 == 7 || Gvar.var_1984 == 9 || Gvar.var_1984 == 10) {
                Gvar.var_1983 = 1;
            }
        }
        // 4部コミック
        if (Gvar.var_1950 == 4) {
            if (Gvar.var_1984 == 4 || Gvar.var_1984 == 7 || Gvar.var_1984 == 8 || Gvar.var_1984 == 10) {
                Gvar.var_1983 = 1;
            }
        }
        // 5部コミック
        if (Gvar.var_1950 == 5) {
            if (Gvar.var_1984 == 5 || Gvar.var_1984 == 8 || Gvar.var_1984 == 9) {
                Gvar.var_1983 = 1;
            }
        }
        // 6部コミック
        if (Gvar.var_1950 == 6) {
            if (Gvar.var_1984 == 6 || Gvar.var_1984 == 7) {
                Gvar.var_1983 = 1;
            }
        }
        // 部コミック
        if (Gvar.var_1950 == 10) {
            if (Gvar.var_1984 == 3 || Gvar.var_1984 == 4 || Gvar.var_1984 == 5 || Gvar.var_1984 == 7 || Gvar.var_1984 == 8 || Gvar.var_1984 == 9 || Gvar.var_1984 == 10 || Gvar.var_1984 == 11) {
                Gvar.var_1983 = 1;
            }
        }
        // 7部コミック
        if (Gvar.var_1950 == 7) {
            Gvar.var_1983 = 1;
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.var_1937 + "を読んだ。";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        if (Gvar.var_1983 == 0) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "" + Gvar.strengthen_item_name + "の研究は";
            Gvar.comments_row2a = "この単行本ではできなかった…";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func050();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func437();
            Gvar.var_1252 = 0;
            Gvar.var_1950 = 0;
            Gvar.var_217 = 1;
            await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.strengthen_item_name = Gvar.item_name;
        Gvar.var_1988 = Gvar.var_233[Gvar.var_225].Var7 + Gvar.var_233[Gvar.var_225].Var8;
        if (Gvar.var_1988 >= 10) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "" + Gvar.strengthen_item_name + "の";
            Gvar.comments_row2a = "容量は限界のようだ";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func050();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func437();
            Gvar.var_1252 = 0;
            Gvar.var_1950 = 0;
            Gvar.var_217 = 1;
            await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        Gvar.var_1253 = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.var_1252 = 2;
        Adap.DSPLAY(128);
        Gvar.var_1299 = 2;
        Gvar.var_271 = 1;
        Gvar.var_1297 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1297 = 0;
        Gvar.var_233[Gvar.var_225].Var7 = Gvar.var_233[Gvar.var_225].Var7 + 1;
        Adap.DSPLAY(112);　// 刀の切れる音 or 強化した時のシャキーン 効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "" + Gvar.strengthen_item_name + "の";
        Gvar.comments_row2a = "容量が増えた！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        await Func.func437();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1252 = 0;
        Gvar.var_1950 = 0;
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func445}
