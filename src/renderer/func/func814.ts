import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func814(this: any) {
        Adap.dbgprt(814);
        if (Gvar.wallet >= 1000) {
    
            Adap.DSPLAY(207);
            Gvar.wallet = Gvar.wallet - 1000;
            Gvar.var_198 = 0;
            await Func.func816();
            return;
        }
        if (Gvar.wallet < 1000) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "「おや…";
            Gvar.comments_row2 = "　お金が足りないようです」";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.var_3190 = 1000 - Gvar.wallet;
            if (Gvar.var_3190 <= Gvar.var_1032) {
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "「口座のお金を足しますか？」";
                Gvar.comments_row2a = "";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func050();
                Gvar.var_245 = 19;
                Gvar.var_246 = 45;
                Gvar.var_546 = 1;
                Gvar.var_3195 = 2;
                Gvar.var_548 = 1; // 選択肢処理フラグON
                await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
                return;
            }
            Gvar.var_198 = 0;
            await Func.func817();
            return;
        }
        await Func.func815();
}

export {func814}
