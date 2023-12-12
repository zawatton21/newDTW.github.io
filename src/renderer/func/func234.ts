import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func234(this: any) {
        Adap.dbgprt(234);
        Gvar.var_205 = 1;
        await Func.func231();
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = 255; // Ver0.1310で追加
        Gvar.var_26_x = 255; // Ver0.1310で追加
        Gvar.var_27_x = 255; // Ver0.1310で追加
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "セーブして終了します。";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_198 = 0;
        Gvar.var_300 = 0;
        if (Gvar.var_407 == 1) {
            Adap.netclose(Gvar.var_1050);
        }
        Adap.end();
}

export {func234}
