import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// NPC DIOとの会話メッセージ
async function func833(this: any) {
        Adap.dbgprt(833);
        Gvar.var_243 = 0;
        if (Gvar.var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            Gvar.var_3202 = 0;
            Gvar.var_480 = 1;
            for (let cnt2 = 0; cnt2 < Gvar.var_224; ++cnt2) {
                if (Gvar.var_233[Gvar.var_480].Var0 == 396) {
                    Gvar.var_3202 = 1;
                }
                if (Gvar.var_233[Gvar.var_480].Var0 >= 800 && Gvar.var_233[Gvar.var_480].Var0 < 900) {
                    Gvar.var_484 = 1;
                    Gvar.var_485 = Gvar.var_233[Gvar.var_480].Var6;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] == 396) {
                            Gvar.var_3202 = 1;
                        }
                        Gvar.var_484 = Gvar.var_484 + 1;
                    }
                }
                Gvar.var_480 = Gvar.var_480 + 1;
            }
            if (Gvar.var_3202 == 1) {
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "DIO「それは【ﾒｲﾄﾞ･ｲﾝ･ﾍﾌﾞﾝのDISC】！";
                Gvar.comments_row2 = "手に入れたのか…」";
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_523 = 1; // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                await Func.func340(); // キー入力による選択処理
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "DIO「ﾌﾟｯﾁよ、これで";
                Gvar.comments_row2a = "天国への扉は開かれたぞ！」";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func050();
                await Func.func340(); // キー入力による選択処理
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "【一巡後の世界】に行けるようになった！";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func050();
                await Func.func340(); // キー入力による選択処理
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "DIO「この先へは";
                Gvar.comments_row2a = "親友ﾌﾟｯﾁが導いてくれるだろう」";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func050();
                await Func.func340(); // キー入力による選択処理
                await Func.func094(); // メッセージ送りの際の効果音
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                Gvar.comments_row1a = "DIO「そうそう…";
                Gvar.comments_row2a = "ひとつ忠告しておこう」";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                await Func.func050();
                await Func.func340(); // キー入力による選択処理
            }
        }
        if (Gvar.var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "DIO「我々は【天国に行く方法】を";
            Gvar.comments_row2 = "　　　探している…」";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Gvar.var_198 = 0;
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        if (Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "DIO「【一巡後の世界】は";
            Gvar.comments_row2 = "無限に続く終わりのないダンジョンだ」";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "DIO「死ぬつもりで挑戦した方が良い」";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Gvar.var_198 = 0;
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        await Func.func834(); // ダンジョン「一巡後の世界」へ入った時の初期化処理
}

export {func833}
