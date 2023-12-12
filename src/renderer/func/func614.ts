import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func614(this: any) {
        Adap.dbgprt(614);
        if (Gvar.var_83[Gvar.var_673].Var12 >= 1 || Gvar.var_83[Gvar.var_673].Var13 == 1 || Gvar.var_83[Gvar.var_673].Var17 == 1 || Gvar.var_83[Gvar.var_673].Var23 == 1) {
            Gvar.var_83[Gvar.var_673].Var18 = 0;
            return;
        }
        Gvar.var_152 = Gvar.var_673;
        if (Gvar.var_83[Gvar.var_673].Var0 == 113) { // No = 113 DIO
            Gvar.var_151 = 5; // 時止めターン: 5
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 114) { // No = 114 最高にハイなDIO
            Gvar.var_151 = 7; // 時止めターン: 7
        }
        if (Gvar.var_83[Gvar.var_673].Var0 == 128) { // No = 128 承太郎(4部)
            Gvar.var_151 = 4; // 時止めターン: 4
        }
        // Ver0.1403にて追加。
        if (Gvar.var_83[Gvar.var_673].Var0 == 171) { // No = 171 離婚した承太郎
            Gvar.var_151 = 5; // 時止めターン: 5
        }
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「ザ・ワールド」！！";
        Gvar.comments_row2 = "時よ止まれ！";
        // Ver0.1403にて追加。No = 171 離婚した承太郎
        if (Gvar.var_83[Gvar.var_673].Var0 == 128 || Gvar.var_83[Gvar.var_673].Var0 == 171) {
            Gvar.comments_row1 = "「スタープラチナ・ザ・ワールド」！！";
            Gvar.comments_row2 = "";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();

        Adap.DSPLAY(185);
        Gvar.var_271 = 1;
        Gvar.var_1491 = 1;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1491++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1491 = 0;
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "フフフフフ…";
        Gvar.comments_row2 = "これが「世界」だ…";
        if (Gvar.var_83[Gvar.var_673].Var0 == 128) {
            Gvar.comments_row1 = "ひさしぶりに……";
            Gvar.comments_row2 = "時をとめられたぜ";
        }
        // Ver0.1403にて追加。No = 171 離婚した承太郎。
        if (Gvar.var_83[Gvar.var_673].Var0 == 171) {
            Gvar.comments_row1 = "時は最大で5秒ほど";
            Gvar.comments_row2 = "止まっている";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        Gvar.var_240 = 0;
        Gvar.var_83[Gvar.var_673].Var6 = 1;
        Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
        Gvar.var_2197 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_2392 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_2392].Var6 = 0;
            Gvar.var_83[Gvar.var_2392].Var9 = 0;
            Gvar.var_83[Gvar.var_2392].Var18 = 0;
            Gvar.var_2392 = Gvar.var_2392 + 1;
        }
        if (Gvar.nouryoku_disc_id == 100 || Gvar.nouryoku_disc_id == 111 || Gvar.nouryoku_disc_id == 398) {
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_114 = 0;
            Gvar.var_463 = 0;
            Gvar.var_464 = 0;
            Gvar.var_461 = 0;
            Gvar.var_462 = 0;
            Gvar.var_151 = 0;
            Gvar.var_152 = 0;
            Gvar.var_163 = 1;
            Gvar.var_164 = 1;
    
            Adap.DSPLAY(185);
            Gvar.var_271 = 1;
            Gvar.var_1493 = 1;
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1493++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1493 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「おれが時を止めた…」";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[12]; // Ver0.1310で値修正 6 → 12
            Gvar.var_26_x = Gvar.var_26[12]; // Ver0.1310で値修正 6 → 12
            Gvar.var_27_x = Gvar.var_27[12]; // Ver0.1310で値修正 6 → 12
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "どんな気分だ？";
            Gvar.comments_row2a = "動けねえのに背後に立たれる気分はよ？";
            Gvar.var_25_x = Gvar.var_25[12]; // Ver0.1310で値修正 6 → 12
            Gvar.var_26_x = Gvar.var_26[12]; // Ver0.1310で値修正 6 → 12
            Gvar.var_27_x = Gvar.var_27[12]; // Ver0.1310で値修正 6 → 12
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            Gvar.var_153 = 1;
            return;
        }
        return;
}

export {func614}
