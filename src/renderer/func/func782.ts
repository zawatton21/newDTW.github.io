import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func782(this: any) {
        Adap.dbgprt(782);
        Gvar.var_97 = Gvar.var_97 + 1;
        Gvar.var_762 = Gvar.var_97;
        Gvar.var_82[0][0] = Gvar.var_97;
        Gvar.var_83[Gvar.var_97].Var0 = 56;
        Gvar.var_83[Gvar.var_97].Var1 = 0;
        Gvar.var_83[Gvar.var_97].Var2 = 0;
        Gvar.var_83[Gvar.var_97].Var3 = 999;
        Gvar.var_83[Gvar.var_97].Var4 = 0;
        Gvar.var_83[Gvar.var_97].Var5 = 2;
        Gvar.var_83[Gvar.var_97].Var10 = 1;
        Gvar.var_83[Gvar.var_97].Var31 = 4;
        Gvar.var_83[Gvar.var_97].Var32 = Adap.rnd(6);
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func335();
        for (let cnt1 = 0; cnt1 < 20; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "おおっ！君が持っているのは";
        Gvar.comments_row2 = "「ﾎﾞﾍﾐｱﾝ･ﾗﾌﾟｿﾃﾞｨのDISC」！！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "よし、お礼に…";
        Gvar.comments_row2a = "君が主役のマンガを描いてやろう";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "なになに、組織のボスだった頃の";
        Gvar.comments_row2a = "絶頂だった自分を描いて欲しい？";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ちょっと待っててくれよ。";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_83[Gvar.var_761].Var21 = 1;
        Gvar.var_411 = 1;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 2;
        // await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ズババッ！";
        Gvar.comments_row2a = "ジャキィン！　シュバッ！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
            Adap.DSPLAY(127);
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 4;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 5;
            await Func.func337(); // メッセージ関係呼び出し
            Adap.DSPLAY(0);
            Gvar.var_411 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 4;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_411 = 5;
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_411 = 2;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_411 = 1;
        // await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_83[Gvar.var_761].Var21 = 0;
        Gvar.var_411 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "できたぜ。";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "タイトル？タイトルは";
        Gvar.comments_row2a = "別に決めてないな…";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_198 = 0;
        Gvar.var_217 = 1;
        Adap.DSPLAY(228);
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_3158 = 10;
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            if (Gvar.var_82[Gvar.var_3158][8] != 0) {
                Gvar.var_3159 = Gvar.var_82[Gvar.var_3158][8];
                Gvar.var_83[Gvar.var_3159].Var6 = 1;
                Gvar.var_83[Gvar.var_3159].Var1 = Gvar.var_3158;
                Gvar.var_83[Gvar.var_3159].Var2 = 9;
                Gvar.var_82[Gvar.var_3158][8] = 0;
                Gvar.var_82[Gvar.var_3158][9] = Gvar.var_3159;
                Gvar.var_83[Gvar.var_3159].Var5 = 2;
                Gvar.var_409 = 3;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_409 = 2;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_409 = 1;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_409 = 0;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_83[Gvar.var_3159].Var6 = 0;
            }
            Gvar.var_3158++;
        }
        Gvar.var_83[Gvar.var_771].Var6 = 0;
        Gvar.var_83[Gvar.var_762].Var6 = 1;
        Gvar.var_83[Gvar.var_762].Var1 = 10;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[0][0] = 0;
        Gvar.var_82[10][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 11;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[10][8] = 0;
        Gvar.var_82[11][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 12;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[11][8] = 0;
        Gvar.var_82[12][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 13;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[12][8] = 0;
        Gvar.var_82[13][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        Gvar.var_83[Gvar.var_762].Var1 = 14;
        Gvar.var_83[Gvar.var_762].Var2 = 8;
        Gvar.var_82[13][8] = 0;
        Gvar.var_82[14][8] = Gvar.var_762;
        Gvar.var_83[Gvar.var_762].Var5 = 6;
        Gvar.var_409 = 3;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 2;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 1;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_409 = 0;
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_199 = 4;
        if (Gvar.var_65[15][8] == 0) {
            Gvar.var_83[Gvar.var_762].Var1 = 15;
            Gvar.var_83[Gvar.var_762].Var2 = 8;
            Gvar.var_82[14][8] = 0;
            Gvar.var_82[15][8] = Gvar.var_762;
            Gvar.var_83[Gvar.var_762].Var5 = 6;
            Gvar.var_409 = 3;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_409 = 2;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_409 = 1;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_409 = 0;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_199 = 4;
        }
        Gvar.var_83[Gvar.var_762].Var6 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "このシュトロハイムが";
        Gvar.comments_row2 = "名づけ親(ｺﾞｯﾄﾞﾌｧｰｻﾞｰ)になってやるッ！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "そうだな…不思議のダンジョンに";
        Gvar.comments_row2a = "挑戦するディアボロ！という意味の";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "ディアボロの大冒険！というのは";
        Gvar.comments_row2a = "どうかな！？";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_198 = 0;
        await Func.func785();
        return;
}

export {func782}
