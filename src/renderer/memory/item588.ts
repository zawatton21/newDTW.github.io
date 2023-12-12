import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 588 J・ガイルのdiscの効果
async function item588(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "Ｊガイルの気分になって大声で叫んだ。";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_2208 = Adap.rnd(3);
        Gvar.enemy_list = Gvar.var_1034;
        if (Gvar.enemy_list == 0) {
            Gvar.enemy_list = 5;
        }
        await Func.func626(); // 敵リスト
        Gvar.var_2209 = Gvar.enemy_name;
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        if (Gvar.var_2208 == 0) {
            Gvar.comments_row1a = "「" + Gvar.var_2209 + "は";
            Gvar.comments_row2a = "　おまえらのために死んだ」";
        }
        if (Gvar.var_2208 == 1) {
            Gvar.comments_row1a = "「青春を犠牲にして俺を追い続けたのに";
            Gvar.comments_row2a = "　途中で挫折するとは」";
        }
        if (Gvar.var_2208 == 2) {
            Gvar.comments_row1a = "「お前らの仲間にあの世であったら";
            Gvar.comments_row2a = "　聞かせてもらうといい…」";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        if (Gvar.var_2208 == 0) {
            Gvar.comments_row1a = "「おまえらが いなけりゃ";
            Gvar.comments_row2a = "　死ななかったかもなぁ！」";
        }
        if (Gvar.var_2208 == 1) {
            Gvar.comments_row1a = "「なんとつまらない・・・";
            Gvar.comments_row2a = "　さびしい人生よ！！！」";
        }
        if (Gvar.var_2208 == 2) {
            Gvar.comments_row1a = "「どーやってオレに";
            Gvar.comments_row2a = "　殺してもらったかをなぁああ～ッ！」";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "全ての敵が目を覚ました！";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_2210 = 1;
        for (let cnt2 = 0; cnt2 < Gvar.var_97; ++cnt2) {
            if (Gvar.var_83[Gvar.var_2210].Var0 != 0 || Gvar.var_83[Gvar.var_2210].Var31 != 4 || Gvar.var_83[Gvar.var_2210].Var0 != 0) {
            }
            if (Gvar.var_83[Gvar.var_2210].Var25 >= 50) {
                Gvar.var_83[Gvar.var_2210].Var25 -= 2;
                if (Gvar.var_83[Gvar.var_2210].Var25 < 50) {
                    Gvar.var_83[Gvar.var_2210].Var25 = 0;
                }
            }
            if (Gvar.var_83[Gvar.var_2210].Var25 < 50) {
                Gvar.var_83[Gvar.var_2210].Var25 += 2;
                if (Gvar.var_83[Gvar.var_2210].Var25 >= 50) {
                    Gvar.var_83[Gvar.var_2210].Var25 = 49;
                }
            }
            Gvar.var_83[Gvar.var_2210].Var12 = 0;
            Gvar.var_2210++;
        }
        return;
}

export {item588}
