import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 203 ザ・フールの発動処理
async function item203(this: any) {
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
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「アッフォオオ―――――ン！」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_374 = 1;
        Gvar.var_1575 = 1;
        Gvar.var_271 = 1;
        Gvar.var_774 = 160;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_774 = 150;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_774 = 140;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_774 = 130;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_774 = 120;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_774 = 110;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_774 = 100;
        await Func.func337(); // メッセージ関係呼び出し
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            Gvar.var_774 = 102;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_774 = 104;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_774 = 106;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_774 = 108;
            for (let cnt3 = 0; cnt3 < 4; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_774 = 106;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_774 = 104;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_774 = 102;
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_774 = 100;
            Gvar.var_1574 = 1;
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1574++;
            }
            Gvar.var_1574 = 0;
        }
        for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_774 = Gvar.var_774 - 10;
        }
        Gvar.var_1575 = 0;
        Gvar.var_271 = 0;
        Gvar.var_2265 = 0;
        Gvar.var_2194 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            Gvar.var_2266 = 0;
            if (Gvar.var_83[Gvar.var_2194].Var0 != 0) {
                Gvar.var_1993 = Gvar.var_66 - 1;
                if (Gvar.var_1993 < 0) {
                    Gvar.var_1993 = 0;
                }
                Gvar.var_1994 = Gvar.var_66 + 1;
                if (Gvar.var_1994 > Gvar.var_33) {
                    Gvar.var_1994 = Gvar.var_33;
                }
                Gvar.var_1995 = Gvar.var_67 + 1;
                if (Gvar.var_1995 > Gvar.var_34) {
                    Gvar.var_1995 = Gvar.var_34;
                }
                Gvar.var_1996 = Gvar.var_67 - 1;
                if (Gvar.var_1996 < 0) {
                    Gvar.var_1996 = 0;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_67) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1995) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1993 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
                if (Gvar.var_2266 == 0 && Gvar.var_83[Gvar.var_2194].Var1 == Gvar.var_1994 && Gvar.var_83[Gvar.var_2194].Var2 == Gvar.var_1996) {
                    await Func.func521();
                    Gvar.var_2266 = 1;
                }
            }
            if (Gvar.var_2266 == 1) {
                Gvar.var_2265 = 1;
            }
            Gvar.var_2194 = Gvar.var_2194 + 1;
        }
        if (Gvar.var_2265 == 1) {
            Adap.DSPLAY(153);
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "周りの敵は目に砂が入って";
            Gvar.comments_row2a = "盲目になってしまった！";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func050();
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
        }
        Gvar.var_374 = 0;
        await Func.func499(); // ダンジョン動作処理?
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item203}
