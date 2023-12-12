import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 571 ボインゴのdiscの効果
async function item571(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        Gvar.var_70 = 0;
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            Gvar.item_message1 = "しかし何も起こらなかった…";
            return;
        }
        Gvar.var_1252 = 1;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "あ…新しい予知が…現れた…ぞ…";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Adap.DSPLAY(118);
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「ﾃﾞｨｱﾎﾞﾛはﾀﾞﾝｼﾞｮﾝを歩いていました。";
        Gvar.comments_row2a = "すると次の階で…」";
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
            Gvar.comments_row2a = "するとこの階で…」";
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            Gvar.comments_row2a = "するとこの階で…」";
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
            Gvar.comments_row2a = "するとこの階で…」";
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
            Gvar.comments_row2a = "するとこの階で…」";
        }
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Adap.DSPLAY(118);
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.var_2202 = Adap.rnd(13);
        // No = 4 なので、一巡後の世界
        if (Gvar.dungeon_number == 4) {
            await Func.func458(); // 恐竜の化石に関するもの(一巡後の世界のみで効果があるようになっている)
            if (Gvar.var_69 == 1) {
                Gvar.var_2202 = 6;
            }
        }
        Gvar.var_2203 = Gvar.var_20 - 1;
        if (Gvar.var_2202 == 0) {
            Gvar.var_70 = 1;
            Gvar.comments_row1a = "「ﾓﾝｽﾀｰﾊｳｽでﾎﾞｺﾎﾞｺに殴られて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
        }
        if (Gvar.var_2202 == 1) {
            Gvar.var_70 = 2;
            Gvar.comments_row1a = "「養分を吸い取られ";
            Gvar.comments_row2a = "餓死してリタイアだァーッ！」";
        }
        if (Gvar.var_2202 == 2) {
            Gvar.var_70 = 3;
            Gvar.comments_row1a = "「体中の血を吸われて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
        }
        if (Gvar.var_2202 == 3) {
            Gvar.var_70 = 4;
            Gvar.comments_row1a = "「体中を蜂の巣にされて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
        }
        if (Gvar.var_2202 == 4) {
            Gvar.var_70 = 5;
            Gvar.comments_row1a = "「泥棒大成功！";
            Gvar.comments_row2a = "ﾃﾞｨｱﾎﾞﾛはほんとにラッキー！」";
        }
        if (Gvar.var_2202 == 5) {
            Gvar.var_70 = 6;
            Gvar.comments_row1a = "「トニオさんに殴られて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
        }
        if (Gvar.var_2202 == 6) {
            Gvar.var_70 = 7;
            Gvar.comments_row1a = "「大部屋ﾓﾝｽﾀｰﾊｳｽだ！";
            Gvar.comments_row2a = "ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。」";
        }
        if (Gvar.var_2202 == 7) {
            Gvar.var_70 = 8;
            Gvar.comments_row1a = "「ｽﾀﾝﾄﾞﾊｳｽで殺されて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
        }
        if (Gvar.var_2202 == 8) {
            Gvar.var_70 = 9;
            Gvar.comments_row1a = "「輝く黄金の精神に囲まれて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
        }
        if (Gvar.var_2202 == 9) {
            Gvar.var_70 = 10;
            Gvar.comments_row1a = "「囚人の群れに囲まれて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
        }
        if (Gvar.var_2202 == 10) {
            Gvar.var_70 = 11;
            Gvar.comments_row1a = "「広大な砂漠で行き倒れて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
        }
        if (Gvar.var_2202 == 11) {
            Gvar.var_70 = 12;
            Gvar.comments_row1a = "「どこへ行くのかわからなくて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
        }
        if (Gvar.var_2202 == 12) {
            Gvar.var_70 = 13;
            Gvar.comments_row1a = "「俺が最強だぁああああ―――ッ！」";
            Gvar.comments_row2a = "";
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 11) {
            Gvar.comments_row1a = "「ベンキを舐めさせられて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
            Gvar.var_70 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 29) {
            Gvar.comments_row1a = "「わけもわからず殺されて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
            Gvar.var_70 = 0;
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 98) {
            Gvar.comments_row1a = "「わけもわからず殺されて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
            Gvar.var_70 = 0;
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_2203) {
            Gvar.comments_row1a = "「わけもわからず殺されて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
            Gvar.var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 0) { // No = 0:エンヤホテル
            Gvar.comments_row1a = "「ベンキを舐めさせられて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
            Gvar.var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 1) { // No = 1:虹村屋敷
            Gvar.comments_row1a = "「体中を蜂の巣にされて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
            Gvar.var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 2) { // No = 2:吉良屋敷
            Gvar.comments_row1a = "「爆発で粉々にされて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
            Gvar.var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12 && Gvar.var_203 == 3) { // No = 3:杜王町埠頭
            Gvar.comments_row1a = "「電気で黒焦げにされて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
            Gvar.var_70 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            Gvar.comments_row1a = "「わけもわからず殺されて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
            Gvar.var_70 = 0;
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
            Gvar.comments_row1a = "「わけもわからず殺されて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
            Gvar.var_70 = 0;
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
            Gvar.comments_row1a = "「わけもわからず殺されて";
            Gvar.comments_row2a = "リタイアだァーッ！」";
            Gvar.var_70 = 0;
        }
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1252 = 0;
        return;
}

export {item571}
