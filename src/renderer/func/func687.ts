import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ウンガロを倒した時のメッセージ処理
async function func687(this: any) {
        Adap.dbgprt(687);
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ｳﾝｶﾞﾛ「ウッガァ―――ッ！！」";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        Gvar.var_3092 = 1;
        for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
            if (Gvar.var_83[Gvar.var_3092].Var0 != 143 && Gvar.var_83[Gvar.var_3092].Var31 != 5) {
                Gvar.var_83[Gvar.var_3092].Var0 = 0;
                Gvar.var_3093 = Gvar.var_83[Gvar.var_3092].Var1;
                Gvar.var_3094 = Gvar.var_83[Gvar.var_3092].Var2;
                Gvar.var_82[Gvar.var_3093][Gvar.var_3094] = 0;
                for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                    Gvar.var_83[Gvar.var_3092][cnt3] = 0;
                }
            }
            Gvar.var_3092 = Gvar.var_3092 + 1;
        }
        Gvar.var_114 = 0;
        Gvar.var_463 = 0;
        Gvar.var_464 = 0;
        Gvar.var_461 = 0;
        Gvar.var_462 = 0;
        Adap.gsel(19);
        Adap.color(255, 255, 255);

        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);

        Adap.DSPLAY(192);
        Gvar.var_311 = 255;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Gvar.var_312 = 1;
        for (let cnt1 = 0; cnt1 < 51; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_311 = Gvar.var_311 - 5;
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
        }
        Gvar.var_312 = 0;
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ｳﾝｶﾞﾛ「オ…オレのスタンド";
        Gvar.comments_row2a = "【ﾎﾞﾍﾐｱﾝﾗﾌﾟｿﾃﾞｨｰ】…」";
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
        Gvar.comments_row1a = "ｳﾝｶﾞﾛ「この能力で、ダンジョン内を";
        Gvar.comments_row2a = "ジョジョのキャラクターで」";
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
        Gvar.comments_row1a = "ｳﾝｶﾞﾛ「埋め尽くしてやろうと";
        Gvar.comments_row2a = "思っていたのによォ～～」";
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
        Gvar.comments_row1a = "ｳﾝｶﾞﾛ「もうこの世界には…";
        Gvar.comments_row2a = "希望も何もねえッ…」";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        return;
}

export {func687}
