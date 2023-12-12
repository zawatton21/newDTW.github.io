import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func819(this: any) {
        Adap.dbgprt(819);
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_404 >= 1) {
            if (Gvar.var_259 == 1 && Gvar.var_3196 != 4) { // var_259:入力判定[↓]
                Gvar.var_246 = Gvar.var_246 + 16;
                Gvar.var_3196 = Gvar.var_3196 + 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func819();
                return;
            }
            if (Gvar.var_259 == 1 && Gvar.var_3196 == 4) { // var_259:入力判定[↓]
                Gvar.var_246 = 45;
                Gvar.var_3196 = 0;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func819();
                return;
            }
            if (Gvar.var_255 == 1 && Gvar.var_3196 != 0) { // var_255:入力判定[↑]
                Gvar.var_246 = Gvar.var_246 - 16;
                Gvar.var_3196 = Gvar.var_3196 - 1;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func819();
                return;
            }
            if (Gvar.var_255 == 1 && Gvar.var_3196 == 0) { // var_255:入力判定[↑]
                Gvar.var_246 = 109;
                Gvar.var_3196 = 4;

                Adap.DSPLAY(100); // アイテム選択時の効果音
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func819();
                return;
            }
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_3196 == 0) {
                Gvar.var_1204 = 0;
                Gvar.var_198 = 0;
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                await Func.func796();
                return;
            }
            if (Gvar.var_3196 == 1) {
                Gvar.var_1204 = 0;
                Gvar.var_198 = 0;
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                await Func.func797();
                return;
            }
            if (Gvar.var_3196 == 2) {
                Gvar.var_1204 = 0;
                Gvar.var_198 = 0;
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                await Func.func802();
                return;
            }
            if (Gvar.var_3196 == 3) {
                Gvar.var_1204 = 0;
                Gvar.var_198 = 0;
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                await Func.func809();
                return;
            }
            if (Gvar.var_3196 == 4) {
                Gvar.var_1204 = 0;
                Gvar.var_198 = 0;
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                await Func.func051();
                await Func.func813();
                return;
            }
        }
        if (Gvar.key_X_on == 1) {
            Gvar.var_1204 = 0;
            Gvar.var_198 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051();
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        await Func.func819();
        return;
}

export {func819}
