import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Dung from '../dungeon/index'

async function func057(this: any) {
        Adap.dbgprt(57);
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_259 == 1 && Gvar.var_505 == 3) { // var_259:入力判定[↓]
            Gvar.var_507 = 45;
            Gvar.var_505 = 0;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func337(); // メッセージ関係呼び出し
            await Func.func057();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_505 == 2) { // var_259:入力判定[↓]
            Gvar.var_507 = Gvar.var_507 + 16;
            Gvar.var_505 = 3;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func337(); // メッセージ関係呼び出し
            await Func.func057();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_505 == 1) { // var_259:入力判定[↓]
            Gvar.var_507 = Gvar.var_507 + 16;
            Gvar.var_505 = 2;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func337(); // メッセージ関係呼び出し
            await Func.func057();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_505 == 0) { // var_259:入力判定[↓]
            Gvar.var_507 = Gvar.var_507 + 16;
            Gvar.var_505 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func337(); // メッセージ関係呼び出し
            await Func.func057();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_505 == 0) { // var_255:入力判定[↑]
            Gvar.var_507 = 93;
            Gvar.var_505 = 3;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func337(); // メッセージ関係呼び出し
            await Func.func057();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_505 == 1) { // var_255:入力判定[↑]
            Gvar.var_507 = Gvar.var_507 - 16;
            Gvar.var_505 = 0;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func337(); // メッセージ関係呼び出し
            await Func.func057();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_505 == 2) { // var_255:入力判定[↑]
            Gvar.var_507 = Gvar.var_507 - 16;
            Gvar.var_505 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func337(); // メッセージ関係呼び出し
            await Func.func057();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_505 == 3) { // var_255:入力判定[↑]
            Gvar.var_507 = Gvar.var_507 - 16;
            Gvar.var_505 = 2;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            await Func.func337(); // メッセージ関係呼び出し
            await Func.func057();
            return;
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_505 == 0 && Gvar.var_375 == 0) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                Gvar.var_512 = 1;
                Gvar.var_513 = 1;
                Gvar.var_514 = 0;
                Gvar.var_515 = 131;
                Gvar.var_516 = 88;
                await Dung.func820();
                return;
            }
            if (Gvar.var_505 == 1 && Gvar.var_375 == 0) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                Gvar.var_508 = 0; // Mフラグ:資料(設定画面) Func.func058
                Gvar.var_499 = 0; // Mフラグ:設定画面 Func.func056
                Gvar.var_502 = 5;
                await Func.func375();
                return;
            }
            if (Gvar.var_505 == 2 && Gvar.var_375 == 0) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                Gvar.var_508 = 0; // Mフラグ:資料(設定画面) Func.func058
                Gvar.var_499 = 0; // Mフラグ:設定画面 Func.func056
                Gvar.var_502 = 3;
                await Func.func371();
                return;
            }
            if (Gvar.var_505 == 3 && Gvar.var_375 == 0) {
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                await Func.func357();
                return;
            }
        }
        if (Gvar.key_X_on == 1) {
            Gvar.var_508 = 0; // Mフラグ:資料(設定画面) Func.func058
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_499 = 1; // Mフラグ:設定画面 Func.func056
            await Func.func051();
            await Func.func055();
            return;
        }
        await Func.func057();
        return;
}

export {func057}
