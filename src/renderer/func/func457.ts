import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func457(this: any) {
        Adap.dbgprt(457);
        if (Gvar.var_565 != Gvar.var_566 || Gvar.var_133 != 0 || Gvar.var_110 != 0 || Gvar.var_109 != 0 || Gvar.var_134 != 0 || Gvar.var_126 != 0 || Gvar.var_132 != 0 || Gvar.var_127 != 0) {
            Gvar.var_565 = Gvar.var_566;
            Gvar.var_133 = 0;
            Gvar.var_110 = 0;
            Gvar.var_109 = 0;
            Gvar.var_134 = 0;
            Gvar.var_126 = 0;
            Gvar.var_132 = 0;
            Gvar.var_127 = 0;  // 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグOFF
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "状態異常が治った！";
            Gvar.comments_row2a = "";
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
        }
        return;
}

export {func457}
