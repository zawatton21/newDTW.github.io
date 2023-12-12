import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func032(this: any) {
        Adap.dbgprt(32);
        await Func.func080(); // 各キー入力確認
        // Ver0.1401にて「Gvar.key_F_on == 1」を追加
        if (Gvar.key_Z_on == 1 || Gvar.key_X_on == 1 || Gvar.key_A_on == 1 || Gvar.key_S_on == 1 || Gvar.key_F_on == 1) {
            Gvar.var_218 = 0;
            await Func.func033(); // スティッキーフィンガーズの発動効果が切れた時の表示
            return;
        }
        if (Gvar.var_218 == 51) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.comments_row1 = "意識が…　ヤバクなって来た…";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
        }
        if (Gvar.var_218 >= 51) {
            Gvar.var_211 = Gvar.var_211 - 1;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 283;
                return;
            }
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func080(); // 各キー入力確認
                // Ver0.1401にて「Gvar.key_F_on == 1」を追加
                if (Gvar.key_Z_on == 1 || Gvar.key_X_on == 1 || Gvar.key_A_on == 1 || Gvar.key_S_on == 1 || Gvar.key_F_on == 1) {
                    Gvar.var_218 = 0;
                    await Func.func033(); // スティッキーフィンガーズの発動効果が切れた時の表示
                    break;
                }
            }
        }
        if (Gvar.var_218 >= 51 && Gvar.shageki_disc_id == 403 && Gvar.var_211 == 2) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.comments_row1 = "ﾋﾟｽﾄﾙｽﾞ「早く【ジッパー】デ";
            Gvar.comments_row2 = "　　　　体ヲ元ニ戻スンダ――――ッ！」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
        }
        return;
}

export {func032}
