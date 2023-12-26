import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func055(this: any) {
        Adap.dbgprt(55);
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_259 == 1 && Gvar.var_500 == 4) { // var_259:入力判定[↓]
            Gvar.var_246 = 45;
            Gvar.var_500 = 0;
            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ関係呼び出し
            await Func.func055();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_500 == 3) { // var_259:入力判定[↓]
            Gvar.var_246 = Gvar.var_246 + 16;
            Gvar.var_500 = 4;
            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ関係呼び出し
            await Func.func055();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_500 == 2) { // var_259:入力判定[↓]
            Gvar.var_246 = Gvar.var_246 + 16;
            Gvar.var_500 = 3;
            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ関係呼び出し
            await Func.func055();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_500 == 1) { // var_259:入力判定[↓]
            Gvar.var_246 = Gvar.var_246 + 16;
            Gvar.var_500 = 2;
            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ関係呼び出し
            await Func.func055();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_500 == 0) { // var_259:入力判定[↓]
            Gvar.var_246 = Gvar.var_246 + 16;
            Gvar.var_500 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ関係呼び出し
            await Func.func055();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_500 == 0) { // var_255:入力判定[↑]
            Gvar.var_246 = 109;
            Gvar.var_500 = 4;
            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ関係呼び出し
            await Func.func055();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_500 == 1) { // var_255:入力判定[↑]
            Gvar.var_246 = Gvar.var_246 - 16;
            Gvar.var_500 = 0;
            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ関係呼び出し
            await Func.func055();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_500 == 2) { // var_255:入力判定[↑]
            Gvar.var_246 = Gvar.var_246 - 16;
            Gvar.var_500 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ関係呼び出し
            await Func.func055();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_500 == 3) { // var_255:入力判定[↑]
            Gvar.var_246 = Gvar.var_246 - 16;
            Gvar.var_500 = 2;
            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ関係呼び出し
            await Func.func055();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_500 == 4) { // var_255:入力判定[↑]
            Gvar.var_246 = Gvar.var_246 - 16;
            Gvar.var_500 = 3;
            Adap.DSPLAY(100); // アイテム選択時の効果音

            await Func.func337(); // メッセージ関係呼び出し
            await Func.func055();
            return;
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_500 == 0 && Gvar.var_501 == 0) {
                Gvar.var_501 = 1;
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func055();
                return;
            }
            if (Gvar.var_500 == 0 && Gvar.var_501 == 1) {
                Gvar.var_501 = 0;
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func055();
                return;
            }
            if (Gvar.var_500 == 1) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                Gvar.var_499 = 0; // Mフラグ:設定画面 Func.func056
                Gvar.var_502 = 6;
                Gvar.var_503 = 1;
                Gvar.var_504 = 2;
                await Func.func378();
                return;
            }
            if (Gvar.var_500 == 2) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_505 = 0;
                Gvar.var_506 = 19;
                Gvar.var_507 = 45;
                await Func.func051();
                Gvar.var_508 = 1; // Mフラグ:資料(設定画面) Func.func058
                await Func.func057();
                return;
            }
            if (Gvar.var_500 == 3) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                Gvar.var_509 = 1;
                await Func.func193();
                return;
            }
            if (Gvar.var_500 == 4 && Gvar.var_375 == 0) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                Gvar.var_499 = 0; // Mフラグ:設定画面 Func.func056
                await Func.func234();
                return;
            }
            if (Gvar.var_500 == 4 && Gvar.var_375 == 1) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_499 = 0; // Mフラグ:設定画面 Func.func056
                await Func.func051();
                await Func.func233();
                await Func.func880();
                return;
            }
        }
        if (Gvar.key_X_on == 1) {
            Gvar.var_499 = 0; // Mフラグ:設定画面 Func.func056
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051();
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        await Func.func055();
        return;
}

export {func055}
