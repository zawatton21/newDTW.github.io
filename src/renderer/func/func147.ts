import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func147(this: any) {
        Adap.dbgprt(147);
        Gvar.var_599 = 0;
        if (Gvar.var_64 == 0) {
            await Func.func178(); // 処理確認タイマー(3m秒)
            Gvar.var_726 = 1;
            Gvar.var_725 = 1;
            await Func.func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
            return;
        }
        if (Gvar.var_64 == 1) {
            await Func.func178(); // 処理確認タイマー(3m秒)
            Gvar.var_726 = 1;
            Gvar.var_725 = 1;
            Gvar.var_734 = 1;
            await Func.func144(); // ログイン画面(タイトル画面/ログイン)動作処理 (ボス日記選択等のセーブデータロード処理)
            return;
        }
        if (Gvar.var_64 == 2) {
            await Func.func178(); // 処理確認タイマー(3m秒)
            Adap.onexit(0);
            await Func.func882();
            return;
        }
        if (Gvar.var_64 == 4) {
            Adap.end();
        }
        await Func.func142();
        return;
}

export {func147}
