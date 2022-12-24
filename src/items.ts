// No = 560 仗助のdiscの効果
function item560(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_601 = rnd(4);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_601 == 0) {
            comments_row1 = "ｱﾝｼﾞｪﾛに けなされた事を思い出した";
            comments_row2 = "";
        }
        if (var_601 == 1) {
            comments_row1 = "不良に けなされた事を思い出した";
            comments_row2 = "";
        }
        if (var_601 == 2) {
            comments_row1 = "承太郎に けなされた事を思い出した";
            comments_row2 = "";
        }
        if (var_601 == 3) {
            comments_row1 = "露伴に けなされた事を思い出した";
            comments_row2 = "";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        if (var_199 == 1) {
            var_199 = 4;
        }
        if (var_199 == 7) {
            var_199 = 8;
        }
        if (var_199 == 9) {
            var_199 = 6;
        }
        if (var_199 == 3) {
            var_199 = 2;
        }
        var_139 = 1;
        return;
    });
}
// No = 561  空き のdiscの効果
function item561(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_262 == 1) {
            item_message1 = "しかし何も起こらなかった…";
            return;
        }
        var_2200 = 1;
        var_1845 = 1;
        yield func556();
        var_2200 = 0;
        var_1845 = 0;
        if (var_2110 == 0) {
            item_message1 = "しかし何も起こらなかった…";
        }
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
    });
}
// No = 562 康一のdiscの効果
function item562(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        if (current_level >= 99) {
            item_message1 = "これ以上成長できなかった…";
            return;
        }
        DSPLAY(audio_id = 142);
        var_568 = var_948[current_level];
        yield func681();
        var_2201 = 0;
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「うわオッ！」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ひょっとして成長したんですかァ！？";
        comments_row2a = "ぼく！？」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        return;
    });
}
// No = 563 ンドゥールのdiscの効果
function item563(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        var_132 = 1;
        DSPLAY(audio_id = 153);
        return;
    });
}
// No = 564 噴上裕也のdiscの効果
function item564(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「クンクンクン・・・」";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_262 == 1) {
            item_message1 = "しかし何も起こらなかった…";
            return;
        }
        var_170 = 1;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
    });
}
// No = 565 プッチ神父のdiscの効果
function item565(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_1945 = 3;
        var_1967 = var_225;
        return;
    });
}
// No = 566 ケンゾーのdiscの効果
function item566(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_1073 = rnd(4);
        if (var_1073 == 0) {
            comments_row1 = "「健康の秘訣は睡眠8時間半と";
            comments_row2 = "　毎朝一杯の尿療法」";
        }
        if (var_1073 == 1) {
            comments_row1 = "「40年前";
            comments_row2 = "　わしは輝いておったんじゃあああああ」";
        }
        if (var_1073 == 2) {
            comments_row1 = "「教祖復活じゃああああああ";
            comments_row2 = "　あああああああああああああ」";
        }
        if (var_1073 == 3) {
            comments_row1 = "「完璧なる【守りの方角】";
            comments_row2 = "これで極めたって事じゃよのオオ！」";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }

        DSPLAY(audio_id = 182);
        var_1299 = 8;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        var_105 = 1;
        return;
    });
}
// No = 567 アヴドゥルのdiscの効果
function item567(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_1945 = 1;
        var_1967 = var_225;
        return;
    });
}
// No = 568 ジョンガリ・Aのdiscの効果
function item568(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_1073 = rnd(4);
        if (var_1073 == 0) {
            comments_row1 = "「【筋肉】は信用できない";
            comments_row2 = "　ライフルは【骨】でささえる」";
        }
        if (var_1073 == 1) {
            comments_row1 = "「風が【蝿】の動きだ」";
            comments_row2 = "";
        }
        if (var_1073 == 2) {
            comments_row1 = "「我が【心】のささえを奪った復讐には";
            comments_row2 = "決着をつけなくてはならないッ!!」";
        }
        if (var_1073 == 3) {
            comments_row1 = "「15秒以内に仕留めるッ！」";
            comments_row2 = "";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }

        DSPLAY(audio_id = 182);
        var_1299 = 8;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        var_138 = 1;
        return;
    });
}
// No = 569 ポルナレフのdiscの効果
function item569(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_601 = rnd(5);
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        if (var_601 == 0) {
            comments_row1 = "ｱﾌﾞﾄﾞｩﾙが死んだ時の事を思い出した。";
            comments_row2 = "";
        }
        if (var_601 == 1) {
            comments_row1 = "ｲｷﾞｰが死んだ時の事を思い出した。";
            comments_row2 = "";
        }
        if (var_601 == 2) {
            comments_row1 = "ｼｪﾘｰが死んだ時の事を思い出した。";
            comments_row2 = "";
        }
        if (var_601 == 3) {
            comments_row1 = "ｱﾌﾞﾄﾞｩﾙが死んだ時の事を思い出した。";
            comments_row2 = "";
        }
        if (var_601 == 4) {
            comments_row1 = "階段でDIOに会った時の事を思い出した。";
            comments_row2 = "";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        if (var_601 == 0) {
            comments_row1a = "「このドグサレがァァ――――ッ!!」";
            comments_row2a = "";
        }
        if (var_601 == 1) {
            comments_row1a = "「今のおれには…";
            comments_row2a = "悲しみで泣いている時間なんかないぜ」";
        }
        if (var_601 == 2) {
            comments_row1a = "「しかるべき報いを与えてやるッ！」";
            comments_row2a = "";
        }
        if (var_601 == 3) {
            comments_row1a = "「やつの気持ちを無駄にはしない";
            comments_row2a = "　生きるために戦う……！」";
        }
        if (var_601 == 4) {
            comments_row1a = "このままではまずい…はね返さなくてな…";
            comments_row2a = "おれに勇気をくれッ！";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理

        DSPLAY(audio_id = 182);
        var_1299 = 3;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        var_104 = 1;
        if (var_109 == 1) {
            var_104 = 0;
            var_109 = 0;
        }
        return;
    });
}
// No = 570 ジョナサンのdiscの効果
function item570(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_1073 = rnd(4);
        if (var_1073 == 0) {
            comments_row1 = "「ふるえるぞハート！";
            comments_row2 = "　燃え尽きるほどヒ―――ト！！」";
        }
        if (var_1073 == 1) {
            comments_row1 = "「刻むぞ　血液のビート！」";
            comments_row2 = "";
        }
        if (var_1073 == 2) {
            comments_row1 = "「浄めてやるッ";
            comments_row2 = "　その穢れたる野望！」";
        }
        if (var_1073 == 3) {
            comments_row1 = "「たっぷり波紋を流し込んでやるッ！」";
            comments_row2 = "";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_125 = 1;
        DSPLAY(audio_id = 182);
        var_1299 = 1;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        if (var_130 != 0) {
            var_389 = 2;
            var_134 = 1;
            var_211 = 1;
            var_747 = 1;

            DSPLAY(audio_id = 105);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "吸血鬼体質で波紋呼吸をしてしまった！";
            comments_row2a = "";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            item_message1 = "酷いダメージを受けて回復しない！";
            yield func047();
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
        }
        return;
    });
}
// No = 571 ボインゴのdiscの効果
function item571(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        var_70 = 0;
        if (var_262 == 1) {
            item_message1 = "しかし何も起こらなかった…";
            return;
        }
        var_1252 = 1;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "あ…新しい予知が…現れた…ぞ…";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        DSPLAY(audio_id = 118);
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ﾃﾞｨｱﾎﾞﾛはﾀﾞﾝｼﾞｮﾝを歩いていました。";
        comments_row2a = "すると次の階で…」";
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12) {
            comments_row2a = "するとこの階で…」";
        }
        // No = 2 なので、レクイエムの大迷宮
        if (dangeon_number == 2 && current_floor == 30) {
            comments_row2a = "するとこの階で…」";
        }
        // No = 3 なので、ディアボロの試練
        if (dangeon_number == 3 && current_floor == 99) {
            comments_row2a = "するとこの階で…」";
        }
        // No = 5 なので、鉄の牢獄
        if (dangeon_number == 5 && current_floor == var_20) {
            comments_row2a = "するとこの階で…」";
        }
        yield func050();
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        DSPLAY(audio_id = 118);
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        var_2202 = rnd(13);
        // No = 4 なので、一巡後の世界
        if (dangeon_number == 4) {
            yield func458(); // 恐竜の化石に関するもの(一巡後の世界のみで効果があるようになっている)
            if (var_69 == 1) {
                var_2202 = 6;
            }
        }
        var_2203 = var_20 - 1;
        if (var_2202 == 0) {
            var_70 = 1;
            comments_row1a = "「ﾓﾝｽﾀｰﾊｳｽでﾎﾞｺﾎﾞｺに殴られて";
            comments_row2a = "リタイアだァーッ！」";
        }
        if (var_2202 == 1) {
            var_70 = 2;
            comments_row1a = "「養分を吸い取られ";
            comments_row2a = "餓死してリタイアだァーッ！」";
        }
        if (var_2202 == 2) {
            var_70 = 3;
            comments_row1a = "「体中の血を吸われて";
            comments_row2a = "リタイアだァーッ！」";
        }
        if (var_2202 == 3) {
            var_70 = 4;
            comments_row1a = "「体中を蜂の巣にされて";
            comments_row2a = "リタイアだァーッ！」";
        }
        if (var_2202 == 4) {
            var_70 = 5;
            comments_row1a = "「泥棒大成功！";
            comments_row2a = "ﾃﾞｨｱﾎﾞﾛはほんとにラッキー！」";
        }
        if (var_2202 == 5) {
            var_70 = 6;
            comments_row1a = "「トニオさんに殴られて";
            comments_row2a = "リタイアだァーッ！」";
        }
        if (var_2202 == 6) {
            var_70 = 7;
            comments_row1a = "「大部屋ﾓﾝｽﾀｰﾊｳｽだ！";
            comments_row2a = "ﾃﾞｨｱﾎﾞﾛは考えるのをやめた。」";
        }
        if (var_2202 == 7) {
            var_70 = 8;
            comments_row1a = "「ｽﾀﾝﾄﾞﾊｳｽで殺されて";
            comments_row2a = "リタイアだァーッ！」";
        }
        if (var_2202 == 8) {
            var_70 = 9;
            comments_row1a = "「輝く黄金の精神に囲まれて";
            comments_row2a = "リタイアだァーッ！」";
        }
        if (var_2202 == 9) {
            var_70 = 10;
            comments_row1a = "「囚人の群れに囲まれて";
            comments_row2a = "リタイアだァーッ！」";
        }
        if (var_2202 == 10) {
            var_70 = 11;
            comments_row1a = "「広大な砂漠で行き倒れて";
            comments_row2a = "リタイアだァーッ！」";
        }
        if (var_2202 == 11) {
            var_70 = 12;
            comments_row1a = "「どこへ行くのかわからなくて";
            comments_row2a = "リタイアだァーッ！」";
        }
        if (var_2202 == 12) {
            var_70 = 13;
            comments_row1a = "「俺が最強だぁああああ―――ッ！」";
            comments_row2a = "";
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 11) {
            comments_row1a = "「ベンキを舐めさせられて";
            comments_row2a = "リタイアだァーッ！」";
            var_70 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (dangeon_number == 2 && current_floor == 29) {
            comments_row1a = "「わけもわからず殺されて";
            comments_row2a = "リタイアだァーッ！」";
            var_70 = 0;
        }
        // No = 3 なので、ディアボロの試練
        if (dangeon_number == 3 && current_floor == 98) {
            comments_row1a = "「わけもわからず殺されて";
            comments_row2a = "リタイアだァーッ！」";
            var_70 = 0;
        }
        // No = 5 なので、鉄の牢獄
        if (dangeon_number == 5 && current_floor == var_2203) {
            comments_row1a = "「わけもわからず殺されて";
            comments_row2a = "リタイアだァーッ！」";
            var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 0) { // No = 0:エンヤホテル
            comments_row1a = "「ベンキを舐めさせられて";
            comments_row2a = "リタイアだァーッ！」";
            var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 1) { // No = 1:虹村屋敷
            comments_row1a = "「体中を蜂の巣にされて";
            comments_row2a = "リタイアだァーッ！」";
            var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 2) { // No = 2:吉良屋敷
            comments_row1a = "「爆発で粉々にされて";
            comments_row2a = "リタイアだァーッ！」";
            var_70 = 0;
        }
        // No = 1 なので、ホテルの外
        if (dangeon_number == 1 && current_floor == 12 && var_203 == 3) { // No = 3:杜王町埠頭
            comments_row1a = "「電気で黒焦げにされて";
            comments_row2a = "リタイアだァーッ！」";
            var_70 = 0;
        }
        // No = 2 なので、レクイエムの大迷宮
        if (dangeon_number == 2 && current_floor == 30) {
            comments_row1a = "「わけもわからず殺されて";
            comments_row2a = "リタイアだァーッ！」";
            var_70 = 0;
        }
        // No = 3 なので、ディアボロの試練
        if (dangeon_number == 3 && current_floor == 99) {
            comments_row1a = "「わけもわからず殺されて";
            comments_row2a = "リタイアだァーッ！」";
            var_70 = 0;
        }
        // No = 5 なので、鉄の牢獄
        if (dangeon_number == 5 && current_floor == var_20) {
            comments_row1a = "「わけもわからず殺されて";
            comments_row2a = "リタイアだァーッ！」";
            var_70 = 0;
        }
        yield func050();
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1252 = 0;
        return;
    });
}
// No = 572 承太郎のdiscの効果
function item572(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_1073 = rnd(4);
        if (var_1073 == 0) {
            comments_row1 = "「やれやれだぜ・・・」";
            comments_row2 = "";
        }
        if (var_1073 == 1) {
            comments_row1 = "「やれやれだぜ・・・」";
            comments_row2 = "";
        }
        if (var_1073 == 2) {
            comments_row1 = "「やれやれだぜ・・・」";
            comments_row2 = "";
        }
        if (var_1073 == 3) {
            comments_row1 = "「やれやれだぜ・・・」";
            comments_row2 = "";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        DSPLAY(audio_id = 182);
        var_1299 = 3;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        var_111 = 1;
        return;
    });
}
// No = 573 重ちーのdiscの効果
function item573(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        if (var_262 == 1) {
            item_message1 = "しかし何も起こらなかった…"; // var_262 = 1でなければ "ｱｲﾃﾑの場所がわかった！"
            return;
        }
        DSPLAY(audio_id = 184);
        var_100 = 1;
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
    });
}
// No = 574 エンポリオのdiscの効果
function item574(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        if (var_262 == 1) {
            item_message1 = "しかし何も起こらなかった…";
            return;
        }
        var_126 = 1;

        DSPLAY(audio_id = 134);
        return;
    });
}
// No = 575 マニッシュボーイのdiscの効果
function item575(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        if (equip_disc[351] == 1) {
            item_message1 = "装備DISCの効果によって";
            item_message2 = "眠くならなかった！";
            return;
        }
        if (var_120 == 1) {
            item_message1 = "10時間熟睡した気分になっていて";
            item_message2 = "眠くならなかった！";
            return;
        }
        if (var_120 == 0) {
            var_219 = 1;
    
            DSPLAY(audio_id = 132);
            return;
        }
    });
}
// No = 576 破裂するdiscの効果
function item576(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        var_177 = 1;
        return;
    });
}
// No = 577 ミキタカのdiscの効果
function item577(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        var_470 = 1;
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        DSPLAY(audio_id = 123);
        var_470 = 2;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 3;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 4;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 5;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 6;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 7;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 8;
        for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 9;
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        DSPLAY(audio_id = 102);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            var_470 = 10;
            yield func337(); // メッセージ関係呼び出し
            var_470 = 11;
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 12;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 13;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 14;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 15;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 16;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 17;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 18;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 19;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        DSPLAY(audio_id = 232);
        var_470 = 20;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_470 = 0;
        var_218 = 1;
        return;
    });
}
// No = 578 サンドマンのdiscの効果
function item578(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        if (var_133 == 0) {
            var_157 = 1;
            var_158 = 0;
    
            DSPLAY(audio_id = 154);
        }
        if (var_133 != 0) {
            var_133 = 0;
        }
        return;
    });
}
// No = 579 ペットショップのdiscの効果
function item579(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        if (var_262 == 1) {
            item_message1 = "しかし何も起こらなかった…";
            return;
        }
        for (let cnt2 = 0; cnt2 < 4; ++cnt2) {
            DSPLAY(audio_id = 219);
            var_1243 = 1;
            yield func337(); // メッセージ関係呼び出し
            var_1243 = 2;
            yield func337(); // メッセージ関係呼び出し
            var_1243 = 3;
            yield func337(); // メッセージ関係呼び出し
            var_1243 = 2;
            yield func337(); // メッセージ関係呼び出し
        }
        var_1243 = 0;
        DSPLAY(audio_id = 216);
        var_374 = 1;
        var_1264 = 0;
        var_774 = 160;
        var_1576 = 1;
        var_271 = 1;
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_774 = var_774 - 20;
        }
        var_1576 = 0;
        var_271 = 0;
        var_374 = 0;
        yield func499();
        return;
    });
}
// No = 580 ドッピオのdiscの効果
function item580(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        if (var_262 == 1) {
            item_message1 = "しかし何も起こらなかった…";
            return;
        }
        var_144 = 1;
        DSPLAY(audio_id = 168);
        var_1584 = 160;
        var_1585 = 160;
        var_271 = 1;
        var_1583 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1583++;
        }
        var_271 = 0;
        var_1583 = 0;
        var_116 = 0;
        var_114 = 0;
        var_126 = 0;
        var_134 = 0;
        var_135 = 0;
        var_136 = 0;
        var_137 = 0;
        var_177 = 0;
        if (var_199 == 1) {
            var_199 = 4;
        }
        if (var_199 == 7) {
            var_199 = 8;
        }
        if (var_199 == 9) {
            var_199 = 6;
        }
        if (var_199 == 3) {
            var_199 = 2;
        }
        return;
    });
}

function item581(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 582 水が熱湯になるdiscの効果
function item582(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        var_2204 = 0;
        var_2205 = 1;
        for (let cnt2 = 0; cnt2 < var_224; ++cnt2) {
            if (var_233[var_2205].Var0 == 401) {
                var_2204 = 1;
                var_233[var_2205].Var3 = 1;
            }
            var_2205++;
        }
        if (var_2204 == 1) {
    
            DSPLAY(audio_id = 175);
            var_1584 = 160;
            var_1585 = 160;
            var_271 = 1;
            var_1583 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1583++;
            }
            var_271 = 0;
            var_1583 = 0;
            item_message1 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのDISCの回数が";
            item_message2 = "残り １ になってしまった！！";
        }
        return;
    });
}
// No = 583 ディアボロのdiscの効果
function item583(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        if (var_262 == 1) {
            item_message1 = "しかし何も起こらなかった…";
            return;
        }
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ここは「退く」のだ……………";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "ここで一時「退く」のは";
        comments_row2a = "敗北ではない……………！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        item_message1 = "オレは頂点に返り咲ける能力があるッ！";
        item_message2 = "";
        var_1951 = 1;
        return;
    });
}
// No = 584 ヌケサクのdiscの効果
function item584(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        var_601 = rnd(5);
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "嫌な記憶がよみがえってきた…";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        if (var_601 == 0) {
            comments_row1a = "「黙って引っ込んでろよ　いいな…」";
            comments_row2a = "";
        }
        if (var_601 == 1) {
            comments_row1a = "「よけいなことをしてみろ";
            comments_row2a = "おれたちが てめーを殺すぜ」";
        }
        if (var_601 == 2) {
            comments_row1a = "「おとなしく補欠してろヌケサク」";
            comments_row2a = "";
        }
        if (var_601 == 3) {
            comments_row1a = "「きさまの能力では";
            comments_row2a = "ジョースターたちを倒すのは無理だ」";
        }
        if (var_601 == 4) {
            comments_row1a = "「しょせんきさまはただの吸血鬼」";
            comments_row2a = "";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        DSPLAY(audio_id = 151);
        var_1299 = 4;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        var_109 = 1;
        if (var_104 == 1) {
            var_104 = 0;
            var_109 = 0;
        }
        DSPLAY(audio_id = 164);
        return;
    });
}
// No = 585 億泰のdiscの効果
function item585(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_1073 = rnd(2);
        if (var_1073 == 0) {
            comments_row1 = "「あっ！　こりゃたまらん！";
            comments_row2 = "　　ヨダレ　ずびっ！」";
        }
        if (var_1073 == 1) {
            comments_row1 = "「うわあああああ";
            comments_row2 = "　はっ　腹が空いていくうよぉ～～っ」";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理

        DSPLAY(audio_id = 164);
        var_129 = 1;
        var_193 = 0;
        return;
    });
}
// No = 586 ペッシのdiscの効果
function item586(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        if (current_level > 1) {
            for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            var_389 = 2;
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "兄貴ィ～～　もう駄目だァ～～";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            DSPLAY(audio_id = 151);
            var_1299 = 4;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            current_level = current_level - 1;
            var_352 = var_352 - 3;
            var_211 = var_211 - 3;
            if (var_352 < 1) {
                var_352 = 1;
            }
            if (var_211 < 1) {
                var_211 = 1;
            }
            var_568 = var_948[current_level] - 1;
            var_389 = 0;
            return;
        }
        if (current_level == 1) {
            for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1264 = 0;
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "おれはもう「マンモーニ」じゃねえッ！";
            comments_row2 = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            DSPLAY(audio_id = 142);
            var_1299 = 9;
            var_271 = 1;
            var_1297 = 1;
            for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_1297++;
            }
            var_271 = 0;
            var_1297 = 0;
            var_568 = var_948[current_level];
            yield func681();
            var_2201 = 0;
            item_message1 = "ディアボロはレベルが上がった！";
            item_message2 = "";
            return;
        }
    });
}
// No = 587 吉良吉影のdiscの効果
function item587(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        var_2206 = 1;
        var_2207 = 0;
        for (let cnt2 = 0; cnt2 < var_224; ++cnt2) {
            if (var_233[var_2206].Var15 == 2) {
                var_233[var_2206].Var15 = 0;
                var_2207 = 1;
            }
            var_2206 = var_2206 + 1;
        }
        if (var_2207 == 0) {
            var_474 = 0;
            for (let cnt3 = 0; cnt3 < 50; ++cnt3) {
                var_475 = rnd(var_224);
                var_475 = var_475 + 1;
                if (var_233[var_475].Var0 >= 500 && var_233[var_475].Var0 < 800 && var_233[var_475].Var15 == 0) {
                    var_474 = 1;
                    break;
                }
                if (var_233[var_475].Var0 >= 900 && var_233[var_475].Var15 == 0) {
                    var_474 = 1;
                    break;
                }
            }
            if (var_474 == 1) {
                var_233[var_475].Var15 = 2;
            }
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "何かのｱｲﾃﾑが爆弾になったかも…";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            item_message1 = "う～む　どうだったかな……？";
            item_message2 = "自信がない…";
        }
        return;
    });
}
// No = 588 J・ガイルのdiscの効果
function item588(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "Ｊガイルの気分になって大声で叫んだ。";
        comments_row2 = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        var_2208 = rnd(3);
        enemy_list = var_1034;
        if (enemy_list == 0) {
            enemy_list = 5;
        }
        yield func626();
        var_2209 = enemy_name;
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        if (var_2208 == 0) {
            comments_row1a = "「" + var_2209 + "は";
            comments_row2a = "　おまえらのために死んだ」";
        }
        if (var_2208 == 1) {
            comments_row1a = "「青春を犠牲にして俺を追い続けたのに";
            comments_row2a = "　途中で挫折するとは」";
        }
        if (var_2208 == 2) {
            comments_row1a = "「お前らの仲間にあの世であったら";
            comments_row2a = "　聞かせてもらうといい…」";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        if (var_2208 == 0) {
            comments_row1a = "「おまえらが いなけりゃ";
            comments_row2a = "　死ななかったかもなぁ！」";
        }
        if (var_2208 == 1) {
            comments_row1a = "「なんとつまらない・・・";
            comments_row2a = "　さびしい人生よ！！！」";
        }
        if (var_2208 == 2) {
            comments_row1a = "「どーやってオレに";
            comments_row2a = "　殺してもらったかをなぁああ～ッ！」";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "全ての敵が目を覚ました！";
        comments_row2a = "";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func050();
        yield func340(); // キー入力による選択処理
        var_2210 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
            if (var_83[var_2210].Var0 != 0 || var_83[var_2210].Var31 != 4 || var_83[var_2210].Var0 != 0) {
            }
            if (var_83[var_2210].Var25 >= 50) {
                var_83[var_2210].Var25 -= 2;
                if (var_83[var_2210].Var25 < 50) {
                    var_83[var_2210].Var25 = 0;
                }
            }
            if (var_83[var_2210].Var25 < 50) {
                var_83[var_2210].Var25 += 2;
                if (var_83[var_2210].Var25 >= 50) {
                    var_83[var_2210].Var25 = 49;
                }
            }
            var_83[var_2210].Var12 = 0;
            var_2210++;
        }
        return;
    });
}
// No = 589 プロシュート兄貴のdiscの効果
function item589(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1264 = 0;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        var_1073 = rnd(2);
        if (var_1073 == 0) {
            comments_row1 = "「ブッ殺す」と心の中で思ったならッ！";
            comments_row2 = "スデに行動は終わっているんだッ！";
        }
        if (var_1073 == 1) {
            comments_row1 = "いったん食らい付いたら決して…";
            comments_row2 = "スタンド能力を解除したりはしねえッ！";
        }
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }

        DSPLAY(audio_id = 182);
        var_1299 = 8;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        var_172 = 1;
        return;
    });
}
// No = 590 ギアッチョのdiscの効果
function item590(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_1945 = 2;
        var_1967 = var_225;
        return;
    });
}
// No = 591 ポコロコのdiscの効果
function item591(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 592 ジョニィのdiscの効果
function item592(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 593 リンゴォのdiscの効果
function item593(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 594 ツェペリ男爵のdiscの効果
function item594(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 600 アイテム「ピッツァ」を使用した時の効果
function item600(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        var_2211 = 0;
        if (var_350 == var_567) {
            var_567 = var_567 + 2;
            var_2211 = 1;
            if (var_567 > 999) {
                var_567 = 999;
            }
        }
        var_350 = var_350 + 50;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        if (var_350 == var_567) {
            item_message1 = "お腹がいっぱいになった。";
        }
        if (var_2211 == 1) {
            item_message1 = "最大満腹度が" + var_567 + "になった。";
        }
        return;
    });
}

function item601(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 602 アイテム「ネアポリスのピッツァ」を使用した時の効果
function item602(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        var_2211 = 0;
        if (var_350 == var_567) {
            var_567 = var_567 + 4;
            var_2211 = 1;
            if (var_567 > 999) {
                var_567 = 999;
            }
        }
        var_350 = var_350 + 100;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        if (var_350 == var_567) {
            item_message1 = "お腹がいっぱいになった。";
        }
        if (var_2211 == 1) {
            item_message1 = "最大満腹度が" + var_567 + "になった。";
        }
        return;
    });
}
// No = 603 「腐ったピッツァ」を使用した時の効果
function item603(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (sympathy_id != 120 && sympathy_id != 124) {
            var_2212 = rnd(5);
            if (current_level == 1 && var_2212 == 4) {
                var_2212 = 3;
            }
            if (var_352 <= 5 && var_2212 == 3) {
                var_2212 = 0;
            }
            if (var_566 == 0 && var_2212 == 2) {
                var_2212 = 0;
            }
            if (var_565 == 0 && var_2212 == 0) {
                var_2212 = 0;
            }
            var_1214 = 0;
            var_389 = 2;
            if (var_2212 != 4) {
                DSPLAY(audio_id = 164);
            }
            if (var_2212 == 4) {
                DSPLAY(audio_id = 151);
            }
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
            var_360 = 0;
            var_350 = var_350 + 20;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            if (var_2212 == 0) {
                var_211 = 1;
                item_message1 = "グエッ！";
                item_message2 = "ひどいダメージを受けた！";
            }
            if (var_2212 == 1) {
                var_565 = var_565 - 3;
                if (var_565 < 0) {
                    var_565 = 0;
                }
                item_message1 = "グエッ！";
                item_message2 = "精神力が下がってしまった！";
            }
            if (var_2212 == 2) {
                var_566 = var_566 - 1;
                if (var_566 < 0) {
                    var_566 = 0;
                }
                if (var_565 > var_566) {
                    var_565 = var_566;
                }
                item_message1 = "グエエエエッ！";
                item_message2 = "最大精神力が下がってしまった！";
            }
            if (var_2212 == 3) {
                var_352 = var_352 - 5;
                if (var_352 <= 0) {
                    var_352 = 1;
                }
                var_211 = var_211 - 5;
                if (var_211 <= 0) {
                    var_211 = 1;
                }
                item_message1 = "グエエエエッ！";
                item_message2 = "最大HPが下がってしまった！";
            }
            if (var_2212 == 4) {
                current_level = current_level - 1;
                var_352 = var_352 - 3;
                var_211 = var_211 - 3;
                if (current_level < 1) {
                    current_level = 1;
                }
                if (var_352 <= 1) {
                    var_352 = 1;
                }
                if (var_211 <= 1) {
                    var_211 = 1;
                }
                var_568 = var_948[current_level] - 1;
                item_message1 = "グエエエエｴｴｴッ！";
                item_message2 = "レベルが下がってしまった！";
            }
        }
        if (sympathy_id == 120 || sympathy_id == 124) {
            var_1214 = 0;
            item_message1 = "「ンまァア～～い！」";
            item_message2 = "";
            var_360 = 0;
            var_350 = var_350 + 20;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
        }
        return;
    });
}
// No = 604 アイテム「ポルポのピッツァ」を使用した時の効果
function item604(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        var_567 = var_567 + 10;
        if (var_567 > 999) {
            var_567 = 999;
        }
        var_350 = var_567;
        item_message1 = "最大満腹度が" + var_567 + "になった。";
        if (equip_disc[396] == 0) {
            if (var_157 == 0) {
                var_133 = 1;
                var_397 = 0;
            }
            if (var_157 != 0) {
                var_157 = 0;
                var_158 = 0;
            }
            item_message2 = "お腹がいっぱいで動きが重い…";
    
            DSPLAY(audio_id = 162);
        }
        return;
    });
}
// No = 605  アイテム「焦げたピッツァ」を使用した時の効果
function item605(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        var_2211 = 0;
        if (var_350 == var_567) {
            var_567 = var_567 + 1;
            var_2211 = 1;
            if (var_567 > 999) {
                var_567 = 999;
            }
        }
        var_350 = var_350 + 10;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        if (var_350 == var_567) {
            item_message1 = "お腹がいっぱいになった。";
        }
        if (var_2211 == 1) {
            item_message1 = "最大満腹度が" + var_567 + "になった。";
        }
        return;
    });
}
// No = 630  アイテム「娼婦風スパゲッティ」を使用した時の効果
function item630(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        if (var_350 == var_567) {
            var_567 = var_567 + 1;
            if (var_567 > 999) {
                var_567 = 999;
            }
        }
        var_350 = var_350 + 20;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        var_1223 = 1;
        return;
    });
}
// No = 631 アイテム「モッツァレラチーズとトマトのサラダ」を使用した時の効果
function item631(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        if (var_350 == var_567) {
            var_567 = var_567 + 1;
            if (var_567 > 999) {
                var_567 = 999;
            }
        }
        if (var_565 == var_566) {
            item_message1 = "お腹が膨れた";
        }
        var_565 = var_566;
        var_350 = var_350 + 10;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        return;
    });
}
// No = 632 アイテム「キリマンジャロの雪解け水」を使用した時の効果
function item632(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        var_350 = var_350 + 10;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        var_1214 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            var_1256 = 1;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_1256 = 2;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
        }
        var_1256 = 0;
        var_127 = 0;
        var_132 = 0;
        var_119 = 1;
        var_121 = 1;
        var_120 = 1;
        if (shageki_disc_id == 401) {
            yield func429();
            if (var_233[var_556].Var3 == 99) {
                item_message2 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのパワーは全開だ！";
            }
            if (var_233[var_556].Var3 <= 98) {
                var_233[var_556].Var3 = var_233[var_556].Var3 + 5;
                if (var_233[var_556].Var3 >= 99) {
                    var_233[var_556].Var3 = 99;
                }
                item_message2 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのｴﾈﾙｷﾞｰが増加した！";
            }
        }
        return;
    });
}
// No = 633 アイテム「子羊背肉のリンゴソースかけ」を使用した時の効果
function item633(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1214 = 0;

        DSPLAY(audio_id = 111);
        var_1255 = 1;
        var_567 = var_567 + 10;
        if (var_567 > 999) {
            var_567 = 999;
        }
        var_350 = var_350 + 20;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        var_1579 = 1;
        var_271 = 1;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1579 = var_1579 + 1;
        }
        var_271 = 0;
        var_1579 = 0;
        var_1255 = 0;
        return;
    });
}
// No = 634 アイテム「プリン」を使用した時の効果
function item634(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_129 == 0) {
            var_360 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            if (var_133 == 0 && var_126 == 0) {
                item_message1 = "お腹がちょっと膨れた";
            }
            var_133 = 0;
            var_126 = 0;
            var_350 = var_350 + 10;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            return;
        }
        if (var_129 != 0) {
            var_360 = 0;
            if (var_350 == var_567) {
                var_567 = var_567 + 1;
                if (var_567 > 999) {
                    var_567 = 999;
                }
            }
            var_133 = 0;
            var_126 = 0;
            var_350 = var_350 + 10;
            if (var_350 > var_567) {
                var_350 = var_567;
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「デザートはプリン～～～？";
            comments_row2a = "ケッ！　おれは不良だよ…！」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「プリンなんて女子供の食う物なんて";
            comments_row2a = "チャンチャラおかしくて…」";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func050();
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「ンまぁ～～い！」";
            comments_row2a = "";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func050();
            var_1214 = 0;
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                var_1256 = 1;
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                var_1256 = 2;
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
            }
            var_1256 = 0;
            item_message1 = "このフロアでお腹が減らなくなった！";
            var_193 = 1;
            return;
        }
        return;
    });
}
// No = 635 アイテム「焦げた料理」を使用した時の効果
function item635(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        if (var_350 == var_567) {
            var_567 = var_567 + 1;
            if (var_567 > 999) {
                var_567 = 999;
            }
        }
        var_350 = var_350 + 10;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        if (var_350 == var_567) {
            item_message1 = "お腹がいっぱいになった。";
        }
        return;
    });
}
// No = 636 アイテム「サンドイッチ」を使用した時の効果
function item636(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「ピクニックに来ている気分だね…」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        var_360 = 0;
        if (var_350 == var_567) {
            var_567 = var_567 + 1;
            if (var_567 > 999) {
                var_567 = 999;
            }
        }
        var_350 = var_567;
        var_566 = var_566 + 1;
        var_565 = var_565 + 1;
        if (var_566 > 99) {
            var_566 = 99;
            var_565 = 99;
        }
        return;
    });
}

function item637(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function item638(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 639 アイテム「カエルの丸焼き」を使用した時の効果
function item639(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        if (var_350 == var_567) {
            var_567 = var_567 + 1;
            if (var_567 > 999) {
                var_567 = 999;
            }
        }
        var_350 = var_350 + 20;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        if (var_350 == var_567) {
            item_message1 = "お腹がいっぱいになった。";
        }
        return;
    });
}
// No = 640 アイテム「焦げた食べ物」を使用した時の効果
function item640(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        if (var_350 == var_567) {
            var_567 = var_567 + 1;
            if (var_567 > 999) {
                var_567 = 999;
            }
        }
        var_350 = var_350 + 10;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        if (var_350 == var_567) {
            item_message1 = "お腹がいっぱいになった。";
        }
        return;
    });
}
// No = 641 アイテム「消し炭」を使用した時の効果
function item641(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1214 = 0;
        var_389 = 2;

        DSPLAY(audio_id = 164);
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_389 = 0;
        var_360 = 0;
        var_567 = var_567 - 10;
        if (var_567 < 1) {
            var_567 = 1;
        }
        var_350 = var_350 + 10;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        return;
    });
}

function item642(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function item643(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function item644(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function item645(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function item646(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 647 アイテム「オレンジ」を使用した時の効果
function item647(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        if (var_350 == var_567) {
            var_567 = var_567 + 1;
            if (var_567 > 999) {
                var_567 = 999;
            }
        }
        var_350 = var_350 + 20;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        if (var_350 == var_567) {
            item_message1 = "お腹がいっぱいになった。";
        }
        return;
    });
}
// No = 648 アイテム「鎌倉カスター」を使用した時の効果
function item648(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        if (var_350 == var_567) {
            var_567 = var_567 + 1;
            if (var_567 > 999) {
                var_567 = 999;
            }
        }
        var_350 = var_350 + 7;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        if (var_350 == var_567) {
            item_message1 = "お腹がいっぱいになった。";
        }
        return;
    });
}

function item649(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 650 アイテム「カエル」を使用した時の効果
function item650(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        if (var_211 == var_352) {
            var_352 = var_352 + 1;
            item_message1 = "最大HPが１あがった！";
            if (var_352 > 999) {
                var_352 = 999;
                item_message1 = "最大HPは限界まで達した！";
            }
        }
        var_211 = var_211 + 50;
        if (var_211 > var_352) {
            var_211 = var_352;
        }
        var_350 = var_350 + 5;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        return;
    });
}
// No = 651 アイテム「大きいカエル」を使用した時の効果
function item651(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        if (var_211 == var_352) {
            var_352 = var_352 + 2;
            item_message1 = "最大HPが２あがった！";
            if (var_352 > 999) {
                var_352 = 999;
                item_message1 = "最大HPは限界まで達した！";
            }
        }
        var_211 = var_211 + 100;
        if (var_211 > var_352) {
            var_211 = var_352;
        }
        var_350 = var_350 + 10;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        return;
    });
}
// No = 652 アイテム「カエルの死体」を使用した時の効果
function item652(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        if (var_211 == var_352) {
            var_352 = var_352 + 1;
            item_message1 = "最大HPが１あがった！";
            if (var_352 > 999) {
                var_352 = 999;
                item_message1 = "最大HPは限界まで達した！";
            }
        }
        var_211 = var_211 + 20;
        if (var_211 > var_352) {
            var_211 = var_352;
        }
        var_350 = var_350 + 5;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        return;
    });
}
// No = 653 アイテム「超巨大なカエル」を使用した時の効果
function item653(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        if (var_211 == var_352) {
            var_352 = var_352 + 5;
            item_message1 = "最大HPが５あがった！";
            if (var_352 > 999) {
                var_352 = 999;
                item_message1 = "最大HPは限界まで達した！";
            }
        }
        var_211 = var_352;
        var_350 = var_350 + 20;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        return;
    });
}
// No = 654 アイテム「ヤドクガエル」を使用した時の効果
function item654(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1214 = 0;
        var_1940 = var_199;
        var_199 = 2;
        var_389 = 2;
        var_747 = 1;
        var_209 = 20;
        var_360 = 0;
        var_350 = var_350 + 10;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        var_211 = var_211 - 80;
        if (var_211 <= 0) {
            var_211 = 0;
        }
        var_208 = var_208 + 80;
        if (var_211 <= 0) {
            var_211 = 0;
            var_356 = 260;
        }
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_389 = 0;
        var_199 = var_1940;
        return;
    });
}
// No = 655 アイテム「ザリガニ」を使用した時の効果
function item655(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_360 = 0;
        if (var_211 == var_352) {
            var_352 = var_352 + 1;
            item_message1 = "最大HPが１あがった！";
            if (var_352 > 999) {
                var_352 = 999;
                item_message1 = "最大HPは限界まで達した！";
            }
        }
        var_211 = var_211 + 10;
        if (var_211 > var_352) {
            var_211 = var_352;
        }
        var_350 = var_350 + 5;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        return;
    });
}
// No = 701 没アイテム「ソフト・マシーンの発動によって罠にした敵」を使用した時の効果
function item701(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_77[var_66][var_67] != 0 || var_80[var_66][var_67] != 0 || var_73[var_66][var_67] != 0) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "足元のものが邪魔で";
            comments_row2 = "うまく使えなかった。";
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            var_198 = 1;
            var_300 = 0;
            yield func047();
            return;
        }
        var_337 = var_337 + 1;
        var_80[var_66][var_67] = var_337;
        var_81[var_337][0] = 77;
        var_81[var_337][1] = var_66;
        var_81[var_337][2] = var_67;
        var_81[var_337][4] = 1;
        var_81[var_337][5] = var_71[var_66][var_67];
        var_81[var_337][6] = disc_rarity;
        enemy_list = disc_rarity;
        yield func626();
        var_2213 = enemy_name;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "" + var_2213 + "を";
        comments_row2 = "地面に出して人質にした！";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_198 = 1;
        var_300 = 0;
        yield func047();
        yield func340(); // キー入力による選択処理
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "この上にいれば";
        comments_row2a = "" + var_2213 + "から攻撃されないぞ";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        yield func047();
        return;
    });
}
// No = 712 アイテム「やばいクスリ」を使用した時の効果
function item712(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_211 = var_352;
        var_126 = 1;

        DSPLAY(audio_id = 134);
        return;
    });
}
// No = 713 アイテム「ﾎﾟﾙﾎﾟのﾗｲﾀｰ」を使用した時の効果
function item713(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_2215 = 1;
        var_1845 = 1;
        yield func556();
        var_2215 = 0;
        var_1845 = 0;
        for (let cnt2 = 0; cnt2 < 16; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}
// No = 714 アイテム「紫外線照射装置」を使用した時の効果
function item714(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2216 = var_199;
        var_199 = 2;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "そして　くらえッ！";
        comments_row2 = "新しい対吸血鬼兵器！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        DSPLAY(audio_id = 174);
        var_1245 = 1;
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1245 = 2;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1245 = 3;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1245 = 4;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1245 = 7;
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "紫外線照射装置ィィィィィィィィィィ！！";
        comments_row2a = "";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        DSPLAY(audio_id = 176);
        var_1245 = 6;
        gsel(19);
        color(254, 254, 254);
        boxf(left = 0, top1 = 0, right = 680, bottom = 680);
        gsel(0);
        var_529 = 2;
        var_403 = "スカッとするぜーッ！！";
        var_2217 = 1;
        var_2194 = 1;
        var_2196 = 3;
        var_2195 = 1;
        for (let cnt2 = 0; cnt2 < var_97; ++cnt2) {
            var_2218 = 999;
            var_2219 = 0;
            if (var_2194 != var_124) {
                var_2220 = 0;
                if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var10 == var_201 && var_201 > 0 && var_201 <= 12) {
                    var_402 = var_2194;
                    var_209 = var_2218;
                    yield func516();
                    yield func705();
                    for (let cnt5 = 0; cnt5 < 2; ++cnt5) {
                        yield func337(); // メッセージ関係呼び出し
                    }
                    var_2220 = 1;
                }
                if (var_2220 == 0) {
                    var_1993 = var_66 - 1;
                    if (var_1993 < 0) {
                        var_1993 = 0;
                    }
                    var_1994 = var_66 + 1;
                    if (var_1994 > var_33) {
                        var_1994 = var_33;
                    }
                    var_1995 = var_67 + 1;
                    if (var_1995 > var_34) {
                        var_1995 = var_34;
                    }
                    var_1996 = var_67 - 1;
                    if (var_1996 < 0) {
                        var_1996 = 0;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_66 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_67) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1995) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1993 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_83[var_2194].Var1 == var_1994 && var_83[var_2194].Var2 == var_1996) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                }
                if (var_2220 == 0 && var_201 <= 12 && var_201 != 0) {
                    var_2221 = var_83[var_2194].Var1;
                    var_2222 = var_83[var_2194].Var2;
                    var_2223 = var_83[var_2194].Var1 - 1;
                    if (var_2223 < 0) {
                        var_2223 = 0;
                    }
                    var_2224 = var_83[var_2194].Var1 + 1;
                    if (var_2224 > var_33) {
                        var_2224 = var_33;
                    }
                    var_2225 = var_83[var_2194].Var2 + 1;
                    if (var_2225 > var_34) {
                        var_2225 = var_34;
                    }
                    var_2226 = var_83[var_2194].Var2 - 1;
                    if (var_2226 < 0) {
                        var_2226 = 0;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_71[var_2223][var_2222] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_71[var_2224][var_2222] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_71[var_2221][var_2225] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                    if (var_83[var_2194].Var0 != 0 && var_83[var_2194].Var31 == 2 && var_83[var_2194].Var0 != 111 && var_71[var_2221][var_2226] == var_201) {
                        var_402 = var_2194;
                        var_209 = var_2218;
                        yield func516();
                        yield func705();
                        for (let cnt6 = 0; cnt6 < 2; ++cnt6) {
                            yield func337(); // メッセージ関係呼び出し
                        }
                        var_2220 = 1;
                    }
                }
            }
            var_2194 = var_2194 + 1;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_2220 == 0) {
            for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
        }
        var_2196 = 0;
        var_2195 = 0;
        var_529 = 0;
        var_2217 = 0;
        for (let cnt2 = 0; cnt2 < 3; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1245 = 5;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1245 = 4;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1245 = 3;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1245 = 2;
        for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1245 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_199 = var_2216;
        if (var_2220 == 1) {
            item_message1 = "スカッとするぜーッ！！";
        }
        return;
    });
}
// No = 715 アイテム「点滴」を使用した時の効果
function item715(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_271 = 1;
        var_1242 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_271 = 0;
        var_1242 = 0;
        var_360 = 0;
        var_2211 = 0;
        if (var_350 == var_567) {
            var_567 = var_567 + 1;
            var_2211 = 1;
            if (var_567 > 999) {
                var_567 = 999;
            }
        }
        var_350 = var_350 + 30;
        if (var_350 > var_567) {
            var_350 = var_567;
        }
        if (var_350 == var_567) {
            item_message1 = "「栄養補給させてもらったぜ！」";
        }
        if (var_2211 == 1) {
            item_message1 = "最大満腹度が" + var_567 + "になった。";
        }
        return;
    });
}
// No = 716 アイテム「恐竜の化石」を使用した時の効果
function item716(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (dangeon_number != 4) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "しかしここでは何も起こらなかった…";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            return;
        }
        var_70 = 99;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "遠くから声が聞こえる…";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ここに泥棒がいると";
        comments_row2a = "　電話がかかったですって…？」";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ハハハ…";
        comments_row2a = "　きっとイタズラ電話でしょう」";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}

function item717(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 718 アイテム「聖なる弓矢」を使用した時の効果
function item718(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        DSPLAY(audio_id = 111);
        var_1257 = 1;
        var_1591 = 1;
        var_271 = 1;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1591 = var_1591 + 1;
        }
        var_1257 = 0;
        var_1591 = 0;
        var_271 = 0;
        yield func530();
        return;
    });
}
// No = 719 アイテム「吉良の弓矢」を使用した時の効果
function item719(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        DSPLAY(audio_id = 111);
        var_1257 = 1;
        var_1591 = 1;
        var_271 = 1;
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1591 = var_1591 + 1;
        }
        var_1257 = 0;
        var_1591 = 0;
        var_271 = 0;
        var_2228 = 1;
        yield func531();
        if (var_2228 == 0) {
            item_message1 = "" + target_item_name + "に";
            item_message2 = "新たな装備効果が発現した！";
        }
        if (var_2228 == 1) {
            item_message1 = "しかしﾃﾞｨｱﾎﾞﾛは";
            item_message2 = "矢に選ばれなかった…";
        }
        return;
    });
}
// No = 720 アイテム「ときのがくぼう」を使用した時の効果
function item720(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_163 = 1;
        var_164 = 1;
        var_153 = 0;
        var_114 = 0;
        var_463 = 0;
        var_464 = 0;
        var_461 = 0;
        var_462 = 0;
        DSPLAY(audio_id = 185);
        var_271 = 1;
        var_1491 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1491++;
        }
        var_271 = 0;
        var_1491 = 0;
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1952 = 1;
        return;
    });
}

function item721(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 722 アイテム「ｼｰｻﾞｰのﾊﾞﾝﾀﾞﾅ」を使用した時の効果
function item722(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「シーザーは今・・・　さっき」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = comments_row1a;
        comments_row2 = comments_row2a;
        comments_row1a = "「ここで死んだ」";
        comments_row2a = "";
        yield func050();
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理

        DSPLAY(audio_id = 134);
        var_126 = 1;
        var_166 = 0;
        return;
    });
}
// No = 723 アイテム「魔法のランプ」を使用した時の効果
function item723(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_262 == 1) {
            item_message1 = "しかし何も起こらなかった…";
            return;
        }
        var_1055 = 1;
        return;
    });
}
// item_list = 724 石仮面を使用した時の効果
function item724(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_1251 = 1;
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「俺は人間をやめるぞォ――！」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        var_1251 = 2;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1251 = 4;
        var_1940 = var_199;
        var_199 = 2;
        var_271 = 1;
        var_1411 = 1;
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
            DSPLAY(audio_id = 111);
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1411++;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1411++;
        }
        for (let cnt2 = 0; cnt2 < 17; ++cnt2) {
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1411++;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1411++;
        }
        var_1411 = 0;
        var_271 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_198 = 1;
        var_300 = 0;
        var_130 = 1;
        item_message1 = "吸血鬼体質になった！";
        var_1251 = 0;
        if (var_125 != 0) {
            var_389 = 2;
            var_134 = 1;
            var_211 = 1;
            var_747 = 1;
            DSPLAY(audio_id = 105);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "吸血鬼体質で波紋呼吸をしてしまった！";
            comments_row2a = "";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            item_message1 = "酷いダメージを受けて回復しない！";
            yield func047();
            for (let cnt3 = 0; cnt3 < 15; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_389 = 0;
        }
        var_199 = var_1940;
        return;
    });
}
// item_list = 725 オレっちのコートを使用した時の効果 (なし)
function item725(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 726 アイテム「鉄球」を使用した時の効果を使用した時の効果
function item726(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        DSPLAY(audio_id = 182);
        var_1299 = 9;
        var_271 = 1;
        var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1297++;
        }
        var_271 = 0;
        var_1297 = 0;
        var_168 = 1; // アイテム「鉄球」を使用して射撃攻撃ダメージがアップしている場合のフラグ。1 = ON
        return;
    });
}
// No = 727 アイテム「ｿﾞﾝﾋﾞ馬」を使用した時の効果
function item727(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        DSPLAY(audio_id = 143);
        var_1558 = 160;
        var_1559 = 160;
        var_271 = 1;
        var_1557 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
            var_1557++;
            var_198 = 1;
            var_300 = 0;
        }
        var_271 = 0;
        var_1557 = 0;
        var_211 = var_352;
        return;
    });
}
// item_list == 728 赤石つき石仮面
function item728(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_1251 = 1;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1251 = 6;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_1251 = 8;
        var_1940 = var_199;
        var_199 = 2;
        var_271 = 1;
        var_1411 = 1;
        var_1413 = 1;
        for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
    
            DSPLAY(audio_id = 111);
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1411++;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1411++;
        }
        for (let cnt2 = 0; cnt2 < 17; ++cnt2) {
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1411++;
            // yield func337(); // メッセージ関係呼び出し
            yield func337(); // メッセージ関係呼び出し
            var_198 = 1;
            var_300 = 0;
            var_1411++;
        }
        var_1411 = 0;
        var_1413 = 0;
        var_271 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        var_198 = 1;
        var_300 = 0;
        var_182 = 1;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "「究極の生命体ﾃﾞｨｱﾎﾞﾛの誕生だッーっ」";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        var_1251 = 0;
        var_199 = var_1940;
        return;
    });
}
// No = 729 アイテム「吉良の財布」を使用した時の効果
function item729(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2229 = rnd(5);
        var_2229 = var_2229 + 1;
        var_2229 = var_2229 * 1000;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "財布の中には" + var_2229 + "G入っていた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        DSPLAY(audio_id = 207);
        wallet = wallet + var_2229;
        if (wallet > 999999) {
            wallet = 999999;
        }
        return;
    });
}
// No = 730 アイテム「大家のカバン」を使用した時の効果
function item730(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2229 = disc_rarity;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "カバンの中には" + var_2229 + "G入っていた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        DSPLAY(audio_id = 207);
        wallet = wallet + var_2229;
        if (wallet > 999999) {
            wallet = 999999;
        }
        return;
    });
}
// No = 731 アイテム「盗まれた財布」を使用した時の効果
function item731(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_2230 = rnd(5);
        var_2229 = disc_rarity;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "財布の中には" + var_2229 + "G入っていた！";
        var_198 = 1;
        var_300 = 0;
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        if (var_2230 != 0) {
            DSPLAY(audio_id = 207);
            wallet = wallet + var_2229;
            if (wallet > 999999) {
                wallet = 999999;
            }
        }
        if (var_2230 == 0) {
            yield func340(); // キー入力による選択処理
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "……と思ったら、はしっこのとこだけ";
            comments_row2a = "やぶかれたお金だった！";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            comments_row1 = comments_row1a;
            comments_row2 = comments_row2a;
            comments_row1a = "「やっ！　野郎ッ！」";
            comments_row2a = "";
            yield func050();
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
        }
        return;
    });
}
// Ver0.1401にて追加。No = 732 ベルトのバックルを使用した時の効果
function item732(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        yield func094(); // メッセージ送りの際の効果音
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "できるわけがないッ！";
        comments_row2 = "";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        yield func047();
        yield func340(); // キー入力による選択処理
        yield func094(); // メッセージ送りの際の効果音

        // もし装備している射撃ディスクがタスクact1であれば
        if (shageki_disc_id == 415) {
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "ま･･････待て･･････";
            comments_row2 = "本物があるはずだ！";
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            comments_row1 = "";
            comments_row2 = "";
            var_295 = "";
            comments_row1a = "";
            comments_row2a = "";
            var_298 = "";
            var_299 = 0;
            comments_row1 = "「『本物』の長方形は」";
            comments_row2 = "      これでいいんだな？";


            //var_475 = var_225;
            //var_2091 = var_225;
            //open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) func460
            //var_1240 = 3;
            //base_disc_list = var_233[var_475].Var0;
            //with_disc_list = var_233[var_2091].Var0;
            //belongings_item_list = var_233[var_475].Var0;
            //yield func492(); // アイテムリスト呼び出し
            let shageki_kaisu: number;

            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                var_475 = rnd(var_224);
                var_475 = var_475 + 1;
                if (var_233[var_475].Var0 == 415) {
                    shageki_kaisu = var_233[var_475].Var3;
                    break;
                }
            }
            
            belongings_item_list = var_233[var_475].Var0;
            disc_rarity = var_233[var_475].Var13;
            yield func492(); // アイテムリスト呼び出し
            // target_item_name = item_name;
            //for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            //    var_233[var_475]["Var" + cnt2] = 0;
            //}

            var_233[var_475].Var0 = 414;
            var_233[var_475].Var3 = shageki_kaisu;
            shageki_disc_id = 414;


            //var_233[var_475].Var0 = 415;
            //belongings_item_list = var_233[var_475].Var0;
            //disc_rarity = var_233[var_475].Var13;
            //yield func492(); // アイテムリスト呼び出し
            //target_item_name = item_name;

            //var_233[var_475].Var0 = 414;
            //var_862[414][0] = 1;
            //var_233[var_475].Var20 = 414;
            //var_225 = var_2091;
            //yield func430();
            //belongings_item_list = var_233[var_475].Var0;

            //shageki_disc_id = 414;
            var_198 = 1; // メッセージボックス表示
            var_300 = 0; // コメント枠表示??
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            yield func047();
            yield func340(); // キー入力による選択処理
            yield func094(); // メッセージ送りの際の効果音
            //comments_row1 = comments_row1a;
            //comments_row2 = comments_row2a;

            //yield func047();
            //yield func050();
            var_1572 = 1;
            var_271 = 1;
            // DSPLAY(audio_id = 233);
            DSPLAY(audio_id = 225);

            comments_row1 = "なんと、「タスクact1」のDISCは";
            comments_row2 = "「タスクact2」のDISCになった！";
            var_198 = 1;
            var_300 = 0;
            var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            //yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                        
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                // yield func337(); // メッセージ関係呼び出し
                yield func337(); // メッセージ関係呼び出し
                var_1572++;
            }
            var_1572 = 0;
            var_271 = 0;

            //comments_row1 = "なんと、「タスクact1」のDISCは";
            //comments_row2 = "「タスクact2」のDISCになった！";
            //var_198 = 1;
            //var_300 = 0;
            //var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
            //var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
            //var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
            //yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                yield func337(); // メッセージ関係呼び出し
            }
            var_1252 = 0;
            var_1950 = 0;
            var_217 = 1;
            yield func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        item_message1 = "しかし何も起こらなかった…";
        yield func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
    });
}

function item733(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function item734(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function item735(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}

function item736(this: any) {
    return __awaiter(this, void 0, void 0, function* () {

    });
}
// No = 797 没アイテム「」を使用した時の効果
function item797(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        var_352 = 980;
        var_211 = 980;
        return;
    });
}
// No = 798 没アイテム「」を使用した時の効果
function item798(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (kougeki_disc_id != 0) {
            yield func426();
            if (var_233[var_553].Var4 <= 89) {
                var_233[var_553].Var4 = var_233[var_553].Var4 + 10;
                var_580 = var_580 + 10;
                var_894 = var_894 + 10;
            }
        }
        if (bougyo_disc_id != 0) {
            yield func427();
            if (var_233[var_554].Var4 <= 89) {
                var_233[var_554].Var4 = var_233[var_554].Var4 + 10;
                var_581 = var_581 + 10;
                var_895 = var_895 + 10;
            }
        }
        if (nouryoku_disc_id != 0) {
            yield func428();
            if (var_233[var_555].Var4 <= 89) {
                var_233[var_555].Var4 = var_233[var_555].Var4 + 10;
            }
        }
    });
}
// No = 799 アイテム「装備＋９９」を使用した時の効果
function item799(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (kougeki_disc_id != 0) {
            yield func426();
            var_2227 = 99 - var_233[var_553].Var4;
            var_233[var_553].Var4 = 99;
            var_580 = var_580 + var_2227;
            var_894 = var_894 + var_2227;
        }
        if (bougyo_disc_id != 0) {
            yield func427();
            var_2227 = 99 - var_233[var_554].Var4;
            var_233[var_554].Var4 = 99;
            var_581 = var_581 + var_2227;
            var_895 = var_895 + var_2227;
        }
        if (nouryoku_disc_id != 0) {
            yield func428();
            var_233[var_555].Var4 = 99;
        }
    });
}
// No = 9999 没アイテム？
function item9999(this: any) {
    return __awaiter(this, void 0, void 0, function* () {
        if (var_199 == 2) {
            var_2102 = var_66;
            var_2103 = var_67 + 1;
        }
        if (var_199 == 8) {
            var_2102 = var_66;
            var_2103 = var_67 - 1;
        }
        if (var_199 == 4) {
            var_2102 = var_66 - 1;
            var_2103 = var_67;
        }
        if (var_199 == 6) {
            var_2102 = var_66 + 1;
            var_2103 = var_67;
        }
        if (var_199 == 1) {
            var_2102 = var_66 - 1;
            var_2103 = var_67 + 1;
        }
        if (var_199 == 3) {
            var_2102 = var_66 + 1;
            var_2103 = var_67 + 1;
        }
        if (var_199 == 7) {
            var_2102 = var_66 - 1;
            var_2103 = var_67 - 1;
        }
        if (var_199 == 9) {
            var_2102 = var_66 + 1;
            var_2103 = var_67 - 1;
        }
        var_2107 = 0;
        comments_row1 = "";
        comments_row2 = "";
        var_295 = "";
        comments_row1a = "";
        comments_row2a = "";
        var_298 = "";
        var_299 = 0;
        comments_row1 = "ペラペラに空気を入れた。";
        var_25_x = var_25[7]; // Var0.1310で値修正 1 → 7
        var_26_x = var_26[7]; // Var0.1310で値修正 1 → 7
        var_27_x = var_27[7]; // Var0.1310で値修正 1 → 7
        var_198 = 1;
        var_300 = 0;
        yield func047();
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        if (var_71[var_2102][var_2103] == 0 || var_71[var_2102][var_2103] == 13 || var_82[var_2102][var_2103] != 0) {
            var_2108 = 0;
        }
        if (var_71[var_2102][var_2103] != 0 && var_71[var_2102][var_2103] != 13 && var_82[var_2102][var_2103] == 0) {
            var_2108 = 1;
        }
        if (var_2108 == 0) {
            var_2214 = disc_rarity;
            var_1845 = 1;
            yield func556();
            var_2214 = 0;
            var_1845 = 0;
            if (var_2110 == 1) {
                var_2107 = 1;
                var_199 = var_2111;
            }
            if (var_2110 == 0) {
                comments_row1 = comments_row1a;
                comments_row2 = comments_row2a;
                comments_row1a = "十分なスペースがないため";
                comments_row2a = "うまくいかなかった…";
                yield func050();
                var_198 = 1;
                var_300 = 0;
                yield func047();
                var_231 = 0;
                var_234 = 0;
                var_2040 = 0;
                return;
            }
        }
        if (var_2108 == 1) {
            var_2214 = disc_rarity;
            var_1845 = 4;
            yield func556();
            var_2214 = 0;
            var_1845 = 0;
            var_2107 = 1;
        }
        if (var_2107 == 1) {
            var_1584 = (var_83[var_673].Var1 - var_66 + 4) * 40;
            var_1585 = (var_83[var_673].Var2 - var_67 + 4) * 40;
            var_271 = 1;
            var_1583 = 1;
    
            DSPLAY(audio_id = 168);
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                yield func337(); // メッセージ関係呼び出し
                var_198 = 1;
                var_300 = 0;
                var_1583++;
            }
            var_271 = 0;
            var_1583 = 0;
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            yield func337(); // メッセージ関係呼び出し
        }
        return;
    });
}