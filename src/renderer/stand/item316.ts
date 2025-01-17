import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 316 サバイバーの発動処理
async function item316(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_570 == 0) {
            Gvar.bufferid_stand_disc = 11; //Adap.buffer(11)は"img_stand0.gif"
        }
        if (Gvar.var_570 == 1) {
            Gvar.bufferid_stand_disc = 1; // Adap.buffer(1)は"img_stand1.gif"
        }
        if (Gvar.var_570 == 2) {
            Gvar.bufferid_stand_disc = 16; // Adap.buffer(16)は"img_stand2.gif"
        }
        if (Gvar.var_570 == 3) {
            Gvar.bufferid_stand_disc = 29; // Adap.buffer(29)は"img_stand3.gif"
        }
        if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "発動能力がパワーアップしている！";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
        }
        if (Gvar.var_174 == 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "地面が濡れて伝達力が上がっている！";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
        }
        Gvar.var_271 = 1;
        Gvar.var_1520 = 1;
        Adap.DSPLAY(161);
        for (let cnt2 = 0; cnt2 < 26; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1520++;
        }
        Gvar.var_1520 = 0;
        Gvar.var_271 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1992 = 1;
        Gvar.var_1993 = Gvar.var_66 - 1;
        Gvar.var_1994 = Gvar.var_66 + 1;
        Gvar.var_1995 = Gvar.var_67 + 1;
        Gvar.var_1996 = Gvar.var_67 - 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_1992].Var10 == Gvar.var_201 && Gvar.var_201 != 14) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var17 = 1;
            }
            if (Gvar.var_201 <= 12 && Gvar.var_201 != 0) {
                Gvar.var_2221 = Gvar.var_83[Gvar.var_1992].Var1;
                Gvar.var_2222 = Gvar.var_83[Gvar.var_1992].Var2;
                Gvar.var_2223 = Gvar.var_83[Gvar.var_1992].Var1 - 1;
                if (Gvar.var_2223 < 0) {
                    Gvar.var_2223 = 0;
                }
                Gvar.var_2224 = Gvar.var_83[Gvar.var_1992].Var1 + 1;
                if (Gvar.var_2224 > Gvar.var_33) {
                    Gvar.var_2224 = Gvar.var_33;
                }
                Gvar.var_2225 = Gvar.var_83[Gvar.var_1992].Var2 + 1;
                if (Gvar.var_2225 > Gvar.var_34) {
                    Gvar.var_2225 = Gvar.var_34;
                }
                Gvar.var_2226 = Gvar.var_83[Gvar.var_1992].Var2 - 1;
                if (Gvar.var_2226 < 0) {
                    Gvar.var_2226 = 0;
                }
                if (Gvar.var_83[Gvar.var_1992].Var0 != 0 && Gvar.var_71[Gvar.var_2223][Gvar.var_2222] == Gvar.var_201) {
                    Gvar.var_83[Gvar.var_1992].Var12 = 0;
                    Gvar.var_83[Gvar.var_1992].Var17 = 1;
                }
                if (Gvar.var_83[Gvar.var_1992].Var0 != 0 && Gvar.var_71[Gvar.var_2224][Gvar.var_2222] == Gvar.var_201) {
                    Gvar.var_83[Gvar.var_1992].Var12 = 0;
                    Gvar.var_83[Gvar.var_1992].Var17 = 1;
                }
                if (Gvar.var_83[Gvar.var_1992].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2225] == Gvar.var_201) {
                    Gvar.var_83[Gvar.var_1992].Var12 = 0;
                    Gvar.var_83[Gvar.var_1992].Var17 = 1;
                }
                if (Gvar.var_83[Gvar.var_1992].Var0 != 0 && Gvar.var_71[Gvar.var_2221][Gvar.var_2226] == Gvar.var_201) {
                    Gvar.var_83[Gvar.var_1992].Var12 = 0;
                    Gvar.var_83[Gvar.var_1992].Var17 = 1;
                }
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1995) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var17 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1996) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var17 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var17 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var17 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1995) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var17 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1995) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var17 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1996) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var17 = 1;
            }
            if (Gvar.var_83[Gvar.var_1992].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_1992].Var2 == Gvar.var_1996) {
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var17 = 1;
            }
            if (Gvar.var_172 == 1 || Gvar.var_174 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                Gvar.var_83[Gvar.var_1992].Var12 = 0;
                Gvar.var_83[Gvar.var_1992].Var17 = 1;
            }
            Gvar.var_1992 = Gvar.var_1992 + 1;
        }
        await Func.func135();
        Gvar.var_114 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ファイトクラブだっ！！";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item316}
