import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 132 レクイエムジョルノの動作処理
async function enemy132(this: any) {
        if (Gvar.var_146 >= 1 && Gvar.var_147 == Gvar.var_66 && Gvar.var_148 == Gvar.var_67) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_743 = 1; //スタンド像付与フラグON
            Adap.DSPLAY(121);
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "「ｺﾞｰﾙﾄﾞ･ｴｸｽﾍﾟﾘｴﾝｽ･ﾚｸｲｴﾑ」！";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
            Gvar.var_146 = 0;
            Gvar.var_147 = 0;
            Gvar.var_148 = 0;
            await Func.func619();
            Gvar.var_389 = 2;
            Gvar.var_1320 = 100;
            Gvar.var_1319 = 155;
            Adap.DSPLAY(200);
            Gvar.var_1316 = 1;
            Gvar.var_271 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1316++;
            }
            Gvar.var_1316 = 0;
            Gvar.var_271 = 0;
            Gvar.var_1906 = Gvar.var_66;
            Gvar.var_1907 = Gvar.var_67;
            Gvar.var_1908 = Gvar.var_66;
            Gvar.var_1909 = Gvar.var_67;
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                Gvar.var_309 = Gvar.var_66;
                Gvar.var_310 = Gvar.var_67;
                Gvar.var_66 = Gvar.var_1906;
                Gvar.var_67 = Gvar.var_1907;
                await Func.func405();
                Gvar.var_66 = Gvar.var_309;
                Gvar.var_67 = Gvar.var_310;
                if (Gvar.var_446 == 0) {
                    break;
                }
                await Func.func724();
                Gvar.var_77[Gvar.var_448][Gvar.var_450] = Gvar.var_854;
                Gvar.var_78[Gvar.var_854].Var0 = 650;
                Gvar.var_78[Gvar.var_854].Var1 = Gvar.var_448;
                Gvar.var_78[Gvar.var_854].Var2 = Gvar.var_450;
                Gvar.var_78[Gvar.var_854].Var9 = Gvar.var_71[Gvar.var_448][Gvar.var_450];
                Gvar.var_78[Gvar.var_854].Var10 = 1;
            }
            await Main.func018();
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "鉄塔がカエルに変化した！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_389 = 0;
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy132}
