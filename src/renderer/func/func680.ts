import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func680(this: any) {
        Adap.dbgprt(680);
        Gvar.var_839 = Gvar.var_839 + 1;
        Gvar.var_1015 = Gvar.var_1015 + 1;
        Gvar.var_29[Gvar.var_2945][1] = Gvar.var_29[Gvar.var_2945][1] + 1;
        if (Gvar.var_29[Gvar.var_2945][1] == 40) {
            Gvar.var_29[Gvar.var_2945][2] = 5;
        }
        if (Gvar.var_29[Gvar.var_2945][1] == 30) {
            Gvar.var_29[Gvar.var_2945][2] = 4;
        }
        if (Gvar.var_29[Gvar.var_2945][1] == 20) {
            Gvar.var_29[Gvar.var_2945][2] = 3;
        }
        if (Gvar.var_29[Gvar.var_2945][1] == 10) {
            Gvar.var_29[Gvar.var_2945][2] = 2;
        }
        if (Gvar.var_29[Gvar.var_2945][1] == 1) {
            Gvar.var_29[Gvar.var_2945][2] = 1;
        }
        if (Gvar.var_568 >= 9999999) {
            Gvar.var_568 = 9999999;
        }
        if (Gvar.current_level == 99) {
            return;
        }
        for (let cnt1 = 0; cnt1 < 99; ++cnt1) {
            if (Gvar.current_level == 99) {
                break;
            }
            if (Gvar.var_568 >= Gvar.var_948[Gvar.current_level]) {
                await Func.func681();
            }
        }
        if (Gvar.var_2201 == 1) {
            await Func.func099();
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "ﾃﾞｨｱﾎﾞﾛはﾚﾍﾞﾙ" + Gvar.current_level + "に上がった！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        Gvar.var_2201 = 0;
        return;
}

export {func680}
