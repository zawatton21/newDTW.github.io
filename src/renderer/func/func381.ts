import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func381(this: any) {
        Adap.dbgprt(381);
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_254 == 1) {
            if (Gvar.var_1721 == 1) {
                Gvar.var_1721 = 1;
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 2) {
                Gvar.var_1721 = 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 3) {
                Gvar.var_1721 = 2;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 4) {
                Gvar.var_1721 = 3;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 5) {
                Gvar.var_1721 = 4;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func381();
                return;
            }
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_257 == 1) {
            if (Gvar.var_1721 == 4 && Gvar.var_1707 >= 54) {
                Gvar.var_1721 = 5;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 3 && Gvar.var_1707 >= 41) {
                Gvar.var_1721 = 4;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 2 && Gvar.var_1707 >= 28) {
                Gvar.var_1721 = 3;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func381();
                return;
            }
            if (Gvar.var_1721 == 1 && Gvar.var_1707 >= 15) {
                Gvar.var_1721 = 2;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func381();
                return;
            }
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.key_X_on == 1) {
            Gvar.var_498 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func381();
        return;
}

export {func381}
