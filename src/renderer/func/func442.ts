import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func442(this: any) {
        Adap.dbgprt(442);
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        if (Gvar.var_225 == Gvar.var_1967 && Gvar.var_1965 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "それは今使っているDISCです。";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func340(); // キー入力による選択処理
            await Func.func051();
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
            return;
        }
        Gvar.var_1945 = 0;
        Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
        Gvar.disc_rarity = Gvar.var_233[Gvar.var_225].Var13;
        await Func.func492(); // アイテムリスト呼び出し
        Gvar.var_1969 = Gvar.item_name;
        Gvar.var_1966 = Gvar.var_225;
        await Func.func437();
        if (Gvar.var_862[565][0] == 0 && Gvar.var_375 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "なんと" + Gvar.var_1938 + "は";
            Gvar.var_862[565][0] = 1;
            await Func.func492(); // アイテムリスト呼び出し
            Gvar.comments_row2 = "ﾌﾟｯﾁ神父のDISCだった！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
        }
        Gvar.var_225 = Gvar.var_1966;
        if (Gvar.var_233[Gvar.var_225].Var12 != 1) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_1073 = Adap.rnd(6);
            if (Gvar.var_1073 == 0) {
                Gvar.comments_row1 = "「呪われるべきは このわたしだッ！」";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_1073 == 1) {
                Gvar.comments_row1 = "　　ドミネ・クオ・ヴァディス";
                Gvar.comments_row2 = "「どこへ行かれるのですか？」";
            }
            if (Gvar.var_1073 == 2) {
                Gvar.comments_row1 = "「君の質問に付き合わなきゃあ";
                Gvar.comments_row2 = "　いけないのか？」";
            }
            if (Gvar.var_1073 == 3) {
                Gvar.comments_row1 = "「ヒマつぶしなら他でやれ」";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_1073 == 4) {
                Gvar.comments_row1 = "「落ちつくんだ…";
                Gvar.comments_row2 = "　素数を数えて落ちつくんだ…」";
            }
            if (Gvar.var_1073 == 5) {
                Gvar.comments_row1 = "「聖なるものを犬にやるな」";
                Gvar.comments_row2 = "";
            }
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "何も起こらなかった…";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func050();
        }
        if (Gvar.var_233[Gvar.var_225].Var12 == 1) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "「神の御命においてしりぞけるッ！」";
            Gvar.comments_row2 = "";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            Adap.DSPLAY(192);
            Gvar.var_271 = 1;
            Gvar.var_1355 = 1;
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            for (let cnt2 = 0; cnt2 < 13; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1355++;
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
            }
            Gvar.var_271 = 0;
            Gvar.var_1355 = 0;
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "" + Gvar.var_1969 + "に";
            Gvar.comments_row2a = "かけられていた呪いが解けた。";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func050();
            Gvar.var_233[Gvar.var_225].Var12 = 0;
            await Func.func426();
            await Func.func427();
            await Func.func428();
            if (Gvar.var_225 == Gvar.var_553) {
                Gvar.var_896 = 0;
            }
            if (Gvar.var_225 == Gvar.var_554) {
                Gvar.var_897 = 0;
            }
            if (Gvar.var_225 == Gvar.var_555) {
                Gvar.var_898 = 0;
            }
            if (Gvar.var_225 == 0) {
                Gvar.var_1979 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                Gvar.var_78[Gvar.var_1979].Var12 = 0;
            }
        }
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func442}
