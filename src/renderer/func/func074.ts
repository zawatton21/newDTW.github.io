import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func074(this: any) {
        Adap.dbgprt(74);
        Gvar.var_101 = 1;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Gvar.var_390 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            Gvar.var_83[Gvar.var_390].Var12 = 0;
            if (Gvar.var_96 == 8 && Gvar.var_83[Gvar.var_390].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_390].Var31 != 5) {
                Gvar.var_83[Gvar.var_390].Var17 = 1;
            }
            Gvar.var_390 = Gvar.var_390 + 1;
        }
        Adap.DSPLAY(150);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_96 == 1) {
            Gvar.comments_row1 = "モンスターハウスだ！";
            await Func.func132();
        }
        if (Gvar.var_96 == 2) {
            Gvar.comments_row1 = "ﾊﾞｯﾄﾞ･ｶﾝﾊﾟﾆｰ･ﾊｳｽ だ！";
            await Func.func130();
        }
        if (Gvar.var_96 == 3) {
            Gvar.comments_row1 = "ﾊｲｳｪｲｽﾀｰ･ﾙｰﾑ だ！";
            await Func.func131();
        }
        if (Gvar.var_96 == 4) {
            Gvar.comments_row1 = "吸血鬼ハウスだ！";
            await Func.func132();
        }
        if (Gvar.var_96 == 5) {
            Gvar.comments_row1 = "スタンドハウスだ！";
            await Func.func132();
        }
        if (Gvar.var_96 == 6) {
            Gvar.comments_row1 = "杜王町ハウスだ！";
            await Func.func129();
        }
        if (Gvar.var_96 == 7) {
            Gvar.comments_row1 = "水族館だ！";
            await Func.func133();
        }
        if (Gvar.var_96 == 8) {
            Gvar.comments_row1 = "ファイトクラブだッ！";
            await Func.func134();
        }
        if (Gvar.var_96 == 9) {
            Gvar.comments_row1 = "西戸ハウスだ！";
            await Func.func132();
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 25; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_96 = 0;
        return;
}

export {func074}
