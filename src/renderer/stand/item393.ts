import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 393 ボヘミアンラプソディの発動処理
async function item393(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.var_2352 = Adap.rnd(6);
        if (Gvar.var_97 >= 50) {
            Gvar.var_2352 = 10;
        }
        Adap.DSPLAY(118);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_2352 == 0) {
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
            Gvar.comments_row2 = "「ﾌｧﾝﾄﾑ･ﾌﾞﾗｯﾄﾞ」を読んだ";
        }
        if (Gvar.var_2352 == 1) {
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
            Gvar.comments_row2 = "「戦闘潮流」を読んだ";
        }
        if (Gvar.var_2352 == 2) {
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
            Gvar.comments_row2 = "「ｽﾀｰﾀﾞｽﾄ･ｸﾙｾｲﾀﾞｰｽ」を読んだ";
        }
        if (Gvar.var_2352 == 3) {
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
            Gvar.comments_row2 = "「ダイヤモンドは砕けない」を読んだ";
        }
        if (Gvar.var_2352 == 4) {
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
            Gvar.comments_row2 = "「黄金の風」を読んだ";
        }
        if (Gvar.var_2352 == 5) {
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは";
            Gvar.comments_row2 = "「ｽﾄｰﾝ･ｵｰｼｬﾝ」を読んだ";
        }
        if (Gvar.var_2352 == 6) {
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛ「これからはおれの時代だッ！」";
            Gvar.comments_row2 = "";
        }
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_2352 == 6) {
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_2254 == 1) {
                Gvar.var_2254 = 0;
                await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
            }
            Gvar.var_217 = 1;
            await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        Gvar.var_1584 = 0;
        Gvar.var_1585 = 0;
        Gvar.var_1587 = 0;
        Gvar.var_1588 = 0;
        Gvar.var_1589 = 0;
        Gvar.var_1590 = 0;
        await Func.func625();
        Gvar.var_1845 = 1;
        Gvar.var_2353 = Gvar.var_673;
        await Func.func556(); // 敵をフロアへ出現させる処理
        Gvar.var_2354 = 0;
        Gvar.var_1584 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1585 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 == 0) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "しかし何も起こらなかった…";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                Gvar.var_300 = 0;
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_2355 = 0;
            if (Gvar.var_2254 == 1) {
                Gvar.var_2254 = 0;
                await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
            }
            Gvar.var_217 = 1;
            await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        await Func.func625();
        Gvar.var_1845 = 1;
        Gvar.var_2353 = Gvar.var_673;
        await Func.func556(); // 敵をフロアへ出現させる処理
        Gvar.var_2354 = 0;
        Gvar.var_1587 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1588 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_1845 = 0;
        await Func.func625();
        Gvar.var_1845 = 1;
        Gvar.var_2353 = Gvar.var_673;
        await Func.func556(); // 敵をフロアへ出現させる処理
        Gvar.var_2354 = 0;
        Gvar.var_1589 = (Gvar.var_83[Gvar.var_673].Var1 - Gvar.var_66 + 4) * 40;
        Gvar.var_1590 = (Gvar.var_83[Gvar.var_673].Var2 - Gvar.var_67 + 4) * 40;
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_1845 = 0;
        Adap.DSPLAY(168);
        Gvar.var_271 = 1;
        Gvar.var_1586 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1586++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1586 = 0;
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "マンガのキャラクターが現れた！";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_2355 = 0;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item393}
