import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// 口座へ入金、口座から出金した時の表示
async function func799(this: any) {
        Adap.dbgprt(799);
        if (Gvar.var_1205 != 0) {
    
            Adap.DSPLAY(207);
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            if (Gvar.var_1205 == 1) {
                Gvar.comments_row1 = "" + Gvar.var_3176 + "G 口座に入れた。";
                Gvar.var_1205 = 0;
            }
            if (Gvar.var_1205 == 2) {
                Gvar.comments_row1 = "" + Gvar.var_3176 + "G 口座から出した。";
                Gvar.var_1205 = 0;
            }
            Gvar.comments_row2 = "　　　　";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
        }
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func009(); // ゲーム基本動作フレーム処理
        return;
}
// ↑ここまで口座設定

export {func799}
