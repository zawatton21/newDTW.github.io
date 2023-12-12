import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func685(this: any) {
        Adap.dbgprt(685);
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ｴﾝﾔ婆「うぽわあ―――ッ！！」";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        if (Gvar.var_123 == 0) {
            Gvar.y_axis_map_image = 10;
        }
        if (Gvar.var_123 != 0) {
            Gvar.var_396 = 10;
        }
        Gvar.var_103 = 1;
        Gvar.var_386 = 0;
        Gvar.var_3092 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_3092].Var6 = 0;
            Gvar.var_83[Gvar.var_3092].Var9 = 0;
            Gvar.var_83[Gvar.var_3092].Var11 = 0;
            Gvar.var_83[Gvar.var_3092].Var12 = 0;
            Gvar.var_83[Gvar.var_3092].Var13 = 0;
            Gvar.var_83[Gvar.var_3092].Var14 = 0;
            Gvar.var_83[Gvar.var_3092].Var15 = 0;
            Gvar.var_83[Gvar.var_3092].Var16 = 0;
            Gvar.var_83[Gvar.var_3092].Var17 = 0;
            Gvar.var_83[Gvar.var_3092].Var18 = 0;
            Gvar.var_83[Gvar.var_3092].Var19 = 0;
            if (Gvar.var_83[Gvar.var_3092].Var0 == 8 || Gvar.var_83[Gvar.var_3092].Var0 == 24 || Gvar.var_83[Gvar.var_3092].Var0 == 25) {
                Gvar.var_83[Gvar.var_3092].Var0 = 23;
            }
            Gvar.var_3092 = Gvar.var_3092 + 1;
        }
        Adap.gsel(19);
        Adap.color(255, 255, 255);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_311 = 255;
        Adap.DSPLAY(192);
        Gvar.var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_311 = Gvar.var_311 - 5;
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
        }
        Gvar.var_312 = 0;
        if (Gvar.var_404 >= 1) {
            return;
        }
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ｴﾝﾔ婆「う…　うそじゃ";
        Gvar.comments_row2a = "このわしが　こんなこと……」";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ｴﾝﾔ婆「しかし…おまえが求める物など";
        Gvar.comments_row2a = "こんなところにはないッ！」";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ｴﾝﾔ婆「せいぜい他の場所を";
        Gvar.comments_row2a = "探すんじゃなああああああ！」";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        return;
}

export {func685}
