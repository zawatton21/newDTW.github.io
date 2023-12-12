import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func670(this: any) {
        Adap.dbgprt(670);
        Gvar.var_3071 = 0;
        Gvar.var_83[Gvar.var_314].Var8 = 1;

        Adap.DSPLAY(120);
        Gvar.var_271 = 1;
        Gvar.var_1387 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1387 = Gvar.var_1387 + 1;
        }
        Gvar.var_271 = 0;
        Gvar.var_1387 = 0;
        Gvar.var_83[Gvar.var_314].Var8 = 0;
        Gvar.var_3077 = Gvar.var_83[Gvar.var_314].Var1;
        Gvar.var_3078 = Gvar.var_83[Gvar.var_314].Var2;
        Gvar.var_82[Gvar.var_3077][Gvar.var_3078] = 0;
        Gvar.var_83[Gvar.var_314].Var0 = 0;
        Gvar.var_83[Gvar.var_314].Var1 = 0;
        Gvar.var_83[Gvar.var_314].Var2 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾁﾘﾍﾟｯﾊﾟｰは海水に散って消えた…";
        Gvar.comments_row2 = "";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        Gvar.var_3071 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func670}
