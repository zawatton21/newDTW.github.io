import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func358(this: any) {
        Adap.dbgprt(358);
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_255 == 1 && Gvar.var_1613 > 1) { // var_255:入力判定[↑]

            Adap.DSPLAY(100); // アイテム選択時の効果音
            Gvar.var_1613 = Gvar.var_1613 - 1;
            Gvar.var_1612 = Gvar.var_1612 - 16;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func358();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_1613 == 1) { // var_255:入力判定[↑]

            Adap.DSPLAY(100); // アイテム選択時の効果音
            Gvar.var_1613 = 7;
            Gvar.var_1612 = 141;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func358();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_1613 < 7) { // var_259:入力判定[↓]

            Adap.DSPLAY(100); // アイテム選択時の効果音
            Gvar.var_1613 = Gvar.var_1613 + 1;
            Gvar.var_1612 = Gvar.var_1612 + 16;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func358();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_1613 == 7) { // var_259:入力判定[↓]

            Adap.DSPLAY(100); // アイテム選択時の効果音
            Gvar.var_1613 = 1;
            Gvar.var_1612 = 45;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func358();
            return;
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func359();
            await Func.func051();
            if (Gvar.var_1614 == 0) {
                Gvar.var_1615 = 1;
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_1615 = 0;
                await Func.func358();
                return;
            }
            Gvar.var_508 = 0; // Mフラグ:資料(設定画面) Func.func058
            Gvar.var_499 = 0; // Mフラグ:設定画面 Func.func056
            Gvar.var_511 = 0;
            Gvar.var_502 = 1;
            await Func.func361();
            return;
        }
        if (Gvar.key_X_on == 1) {
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_502 = 0;
            Gvar.var_508 = 1; // Mフラグ:資料(設定画面) Func.func058
            Gvar.var_499 = 1; // Mフラグ:設定画面 Func.func056
            Gvar.var_511 = 0;
            await Func.func051();
            await Func.func057();
            return;
        }
        await Func.func358();
        return;
}

export {func358}
