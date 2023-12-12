import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 63 プロシュート兄貴の特殊能力
async function enemy063(this: any) {
        Gvar.var_2830 = Adap.rnd(5);
        if (Gvar.var_566 <= 0) {
            return;
        }
        if (Gvar.var_2830 == 0 || Gvar.var_2830 == 1) {
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_742 = 1;
            Gvar.var_83[Gvar.var_673].Var7 = 1;
            Gvar.var_743 = 1; //スタンド像付与フラグON
            Gvar.var_389 = 2;
            Adap.DSPLAY(121);
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "接触老化攻撃だ！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func047();
            await Func.func619();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_673].Var7 = 0;
            Gvar.var_743 = 0; //スタンド像付与フラグOFF
            if (Gvar.var_128 >= 1) {
                await Func.func023();
            }
            await Func.func340(); // キー入力による選択処理
            Gvar.var_389 = 0;
        }
        if (Gvar.var_2830 == 0 || Gvar.var_2830 == 1) {
            if (Gvar.equip_disc[207] == 1) {
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "しかし 装備中のDISCによって";
                Gvar.comments_row2a = "老化攻撃を防いだ！";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                Gvar.var_2197 = 1;
                return;
            }
            if (Gvar.nouryoku_disc_id == 202 || Gvar.shageki_disc_id == 404) {
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "しかし 装備中のDISCによって";
                Gvar.comments_row2a = "体が冷やされ 無事だった！";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                Gvar.var_2197 = 1;
                return;
            }
        }
        if (Gvar.var_2830 == 0) {
            Gvar.var_566 = Gvar.var_566 - 1;
            if (Gvar.var_566 < 0) {
                Gvar.var_566 = 0;
            }
            if (Gvar.var_565 > Gvar.var_566) {
                Gvar.var_565 = Gvar.var_566;
            }
            Adap.DSPLAY(164);
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "精神力の最大値が １下がった！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_2197 = 1;
        }
        if (Gvar.var_2830 == 1) {
            Adap.DSPLAY(164);
            Gvar.var_2903 = Adap.rnd(3);
            Gvar.var_2903 = Gvar.var_2903 + 3;
            Gvar.var_352 = Gvar.var_352 - Gvar.var_2903;
            if (Gvar.var_352 < 1) {
                Gvar.var_352 = 1;
                Gvar.var_2903 = 0;
            }
            if (Gvar.var_211 > Gvar.var_352) {
                Gvar.var_211 = Gvar.var_352;
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "最大HPが " + Gvar.var_2903 + "下がった！";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_2197 = 1;
        }
        return;
}

export {enemy063}
