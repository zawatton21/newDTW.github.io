import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func636(this: any) {
        Adap.dbgprt(636);
        Gvar.var_1194 = 0;
        Gvar.var_347 = Gvar.var_66;
        Gvar.var_348 = Gvar.var_67;
        if (Gvar.var_126 == 1) {
            Gvar.var_288 = Adap.rnd(8);
            if (Gvar.var_288 == 0) {
                Gvar.var_199 = 4;
            }
            if (Gvar.var_288 == 1) {
                Gvar.var_199 = 6;
            }
            if (Gvar.var_288 == 2) {
                Gvar.var_199 = 8;
            }
            if (Gvar.var_288 == 3) {
                Gvar.var_199 = 2;
            }
            if (Gvar.var_288 == 4) {
                Gvar.var_199 = 1;
            }
            if (Gvar.var_288 == 5) {
                Gvar.var_199 = 3;
            }
            if (Gvar.var_288 == 6) {
                Gvar.var_199 = 7;
            }
            if (Gvar.var_288 == 7) {
                Gvar.var_199 = 9;
            }
        }
        // No = 121 パープルヘイズのDISCを装備している場合
        if (Gvar.equip_disc[121] == 1 && Gvar.var_171 == 0) {
            Gvar.var_2927 = Adap.rnd(6);
            if (Gvar.var_2927 == 1) {
                Gvar.var_288 = Adap.rnd(8);
                if (Gvar.var_288 == 0) {
                    Gvar.var_199 = 4;
                }
                if (Gvar.var_288 == 1) {
                    Gvar.var_199 = 6;
                }
                if (Gvar.var_288 == 2) {
                    Gvar.var_199 = 8;
                }
                if (Gvar.var_288 == 3) {
                    Gvar.var_199 = 2;
                }
                if (Gvar.var_288 == 4) {
                    Gvar.var_199 = 1;
                }
                if (Gvar.var_288 == 5) {
                    Gvar.var_199 = 3;
                }
                if (Gvar.var_288 == 6) {
                    Gvar.var_199 = 7;
                }
                if (Gvar.var_288 == 7) {
                    Gvar.var_199 = 9;
                }
            }
        }
        // No = 100 スタープラチナ、No = 398 スタプラザ・ワールド
        if (Gvar.kougeki_disc_id  == 100 || Gvar.kougeki_disc_id  == 398) {
            await Func.func643(); // 3方向攻撃処理?
            if (Gvar.var_1280 == 1) {
                Gvar.var_1280 = 0;
                Gvar.var_243 = 0;
                Gvar.var_217 = 1;
                await Func.func637();
                return;
            }
            Gvar.var_1280 = 0;
        }
        Gvar.var_347 = Gvar.var_66;
        Gvar.var_348 = Gvar.var_67;
        if (Gvar.var_199 == 4) {
            Gvar.var_347 = Gvar.var_347 - 1;
        }
        if (Gvar.var_199 == 6) {
            Gvar.var_347 = Gvar.var_347 + 1;
        }
        if (Gvar.var_199 == 8) {
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 2) {
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 1) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        Gvar.var_2928 = Gvar.var_347 - 1;
        Gvar.var_2929 = Gvar.var_347 + 1;
        Gvar.var_2930 = Gvar.var_348 + 1;
        Gvar.var_2931 = Gvar.var_348 - 1;
        if (Gvar.kougeki_disc_id  != 108 && Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
            Gvar.var_2932 = 0;
            if (Gvar.var_199 == 1 && Gvar.var_71[Gvar.var_347][Gvar.var_67] == 0) {
                Gvar.var_2932 = 1;
                await Func.func651(); // 攻撃動作処理
                return;
            }
            if (Gvar.var_199 == 1 && Gvar.var_71[Gvar.var_66][Gvar.var_348] == 0) {
                Gvar.var_2932 = 1;
                await Func.func651(); // 攻撃動作処理
                return;
            }
            if (Gvar.var_199 == 3 && Gvar.var_71[Gvar.var_347][Gvar.var_67] == 0) {
                Gvar.var_2932 = 1;
                await Func.func651(); // 攻撃動作処理
                return;
            }
            if (Gvar.var_199 == 3 && Gvar.var_71[Gvar.var_66][Gvar.var_348] == 0) {
                Gvar.var_2932 = 1;
                await Func.func651(); // 攻撃動作処理
                return;
            }
            if (Gvar.var_199 == 7 && Gvar.var_71[Gvar.var_347][Gvar.var_67] == 0) {
                Gvar.var_2932 = 1;
                await Func.func651(); // 攻撃動作処理
                return;
            }
            if (Gvar.var_199 == 7 && Gvar.var_71[Gvar.var_66][Gvar.var_348] == 0) {
                Gvar.var_2932 = 1;
                await Func.func651(); // 攻撃動作処理
                return;
            }
            if (Gvar.var_199 == 9 && Gvar.var_71[Gvar.var_347][Gvar.var_67] == 0) {
                Gvar.var_2932 = 1;
                await Func.func651(); // 攻撃動作処理
                return;
            }
            if (Gvar.var_199 == 9 && Gvar.var_71[Gvar.var_66][Gvar.var_348] == 0) {
                Gvar.var_2932 = 1;
                await Func.func651(); // 攻撃動作処理
                return;
            }
        }
        Gvar.var_314 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
        if (Gvar.dungeon_number == 0) {
            if (Gvar.var_66 == 16 && Gvar.var_67 == 21 && Gvar.var_199 == 8) {
                await Func.func786(); // 亀の倉庫の取説へ話しかけた時のメッセージ処理
                return;
            }
            if (Gvar.var_66 == 17 && Gvar.var_67 == 7 && Gvar.var_199 == 8) {
                await Func.func818(); // ヴェネチアホテルのPCへ話しかけた時のメッセージ処理
                return;
            }
            if (Gvar.var_66 == 16 && Gvar.var_67 == 7 && Gvar.var_199 == 8) {
                await Func.func765(); // ヴェネチアホテルの地球儀へ話しかけた時の動作処理
                return;
            }
            if (Gvar.var_66 == 15 && Gvar.var_67 == 6 && Gvar.var_199 == 6) {
                await Func.func765(); // ヴェネチアホテルの地球儀へ話しかけた時の動作処理
                return;
            }
            if (Gvar.var_66 == 15 && Gvar.var_67 == 7 && Gvar.var_199 == 4) {
                await Func.func766(); // ヴェネチアホテルのベッドの上の本に話しかけた時のメッセージ処理
                return;
            }
            if (Gvar.var_66 == 15 && Gvar.var_67 == 6 && Gvar.var_199 == 4) {
                await Func.func766(); // ヴェネチアホテルのベッドの上の本に話しかけた時のメッセージ処理
                return;
            }
            if (Gvar.var_66 == 14 && Gvar.var_67 == 8 && Gvar.var_199 == 8) {
                await Func.func766(); // ヴェネチアホテルのベッドの上の本に話しかけた時のメッセージ処理
                return;
            }
            if (Gvar.var_66 == 15 && Gvar.var_67 == 6 && Gvar.var_199 == 8) {
                await Func.func767(); // ディアボロの試練の入り口(フラグ前は壁)へ話しかけた時の動作処理
                return;
            }
            if (Gvar.var_404 == 0 && Gvar.var_66 == 12 && Gvar.var_67 == 8 && Gvar.var_199 == 8) {
                await Func.func768(); // ヴェネチアホテルのベッドへ話しかけた時のメッセージ処理
                return;
            }
            if (Gvar.var_404 == 0 && Gvar.var_66 == 13 && Gvar.var_67 == 8 && Gvar.var_199 == 8) {
                await Func.func768(); // ヴェネチアホテルのベッドへ話しかけた時のメッセージ処理
                return;
            }
            // Gvar.var_526 >= 1 ディアボロの試練解放フラグがON
            if (Gvar.var_526 >= 1 && Gvar.var_66 == 12 && Gvar.var_67 == 8 && Gvar.var_199 == 8 && Gvar.var_759 >= 2) {
                await Func.func832(); // NPC プッチ神父との会話メッセージ
                return;
            }
            // Gvar.var_526 >= 1 ディアボロの試練解放フラグがON
            if (Gvar.var_526 >= 1 && Gvar.var_66 == 13 && Gvar.var_67 == 8 && Gvar.var_199 == 8 && Gvar.var_759 >= 2) {
                await Func.func833(); // NPC DIOとの会話メッセージ
                return;
            }
        }
        if (Gvar.var_139 == 0 && Gvar.var_82[Gvar.var_347][Gvar.var_348] != 0) {
            if (Gvar.var_83[Gvar.var_314].Var31 == 4 || Gvar.var_83[Gvar.var_314].Var31 == 5) {
                if (Gvar.var_83[Gvar.var_314].Var12 != 0 || Gvar.var_83[Gvar.var_314].Var13 != 0 || Gvar.var_83[Gvar.var_314].Var17 != 0) {
                    await Func.func735();
                    return;
                }
            }
            if (Gvar.var_163 != 0 || Gvar.var_123 != 0) {
                // No = 61 ヨーヨーマッ
                if (Gvar.var_83[Gvar.var_314].Var31 == 4 || Gvar.var_83[Gvar.var_314].Var31 == 5 || Gvar.var_83[Gvar.var_314].Var0 == 61) {
                    if (Gvar.var_83[Gvar.var_314].Var0 != 50) {
                        await Func.func735();
                        return;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 50) { // Gvar.enemy_list = 50 なので元いた場所
                await Func.func651(); // 攻撃動作処理
                return;
            }
            // Gvar.enemy_list = 173 NPC ロッコ・バロッコ所長
            if (Gvar.var_83[Gvar.var_314].Var0 == 173) {
                await Func.func640();
                await Func.func835(); // NPC ロッコ・バロッコ所長に話しかけた時のメッセージ処理
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 169) { // Gvar.enemy_list = 169 なのでヤク中の少年。Gvar.enemy_list = 163にもいるので没キャラ?
                await Func.func640();
                await Func.func728();
                return;
            }
            // Gvar.enemy_list = 149 幽霊のポルナレフ
            if (Gvar.var_83[Gvar.var_314].Var0 == 149) {
                await Func.func640();
                await Func.func756(); // 亀の中の幽霊のポルナレフに話しかけた時のメッセージ処理
                return;
            }
            // Gvar.enemy_list = 108 イギー 
            if (Gvar.var_83[Gvar.var_314].Var0 == 108) {
                await Func.func640();
                await Func.func738(); // ダンジョンをうろついているイギーに話しかけた時のメッセージ処理
                return;
            }
            // Gvar.enemy_list = 130 マリリンマンソン
            if (Gvar.var_83[Gvar.var_314].Var0 == 130) {
                await Func.func640();
                await Func.func760();
                return;
            }
            // Gvar.enemy_list = 142 岸辺露伴
            if (Gvar.var_83[Gvar.var_314].Var0 == 142) {
                await Func.func640();
                await Func.func778(); // 岸辺露伴に話しかけた時のメッセージ処理
                return;
            }
            // Gvar.enemy_list = 33 トニオさん
            if (Gvar.var_83[Gvar.var_314].Var0 == 33) {
                await Func.func640();
                await Func.func707();
                return;
            }
            // Gvar.enemy_list = 36 スピードワゴン
            if (Gvar.var_83[Gvar.var_314].Var0 == 36) {
                await Func.func640();
                await Func.func730(); // ダンジョンをうろついているスピードワゴンに話しかけた際のメッセージ処理
                return;
            }
            // Gvar.enemy_list = 105 ツェッペリさん
            if (Gvar.var_83[Gvar.var_314].Var0 == 105) {
                await Func.func640();
                await Func.func743();
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 106) { // Gvar.enemy_list = 106 なのでペッシ
                await Func.func640();
                await Func.func748();
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 107) { // Gvar.enemy_list = 107 なので成長したペッシ
                await Func.func640();
                await Func.func753(); // ダンジョン内で仲間の成長したペッシに話しかけた時のメッセージ処理
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 57) { // Gvar.enemy_list = 57 なのでSPW財団の男
                await Func.func640();
                await Func.func755(); // ダンジョンをうろついているSPW財団の男に話しかけた時のメッセージ処理
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 58) { // Gvar.enemy_list = 58 なのでボインゴ
                await Func.func640();
                await Func.func758(); // ダンジョンをうろついているボインゴに話しかけた時のメッセージ処理
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 61) { // No = 61 ヨーヨーマッ
                await Func.func640();
                await Func.func759();
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 163) { // No = 163 ヤク中の少年
                await Func.func794();
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 70) { // No = 70 ダービー 没キャラ?
                // await Func.func761(); // 現在未使用。D・ダービーのみのコメント設定をしようとしていたと思われる。
                await Func.func757();// キャラに話しかけた時のメッセージ(コメントなし)
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 74) { // No = 74 サヴェジガーデン
                await Func.func640();
                await Func.func769(); // ダンジョンをうろついているサヴェジガーデン作戦の鳩へ話しかけた時の動作処理
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 75) { // No = 75 鮮血のシャボン
                await Func.func773(); // 鮮血のシャボンへ話しかけた時のメッセージ処理
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 55) { // Gvar.enemy_list = 55 なので亀
                await Func.func640();
                await Func.func161(); //亀の中に入った時の表示
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 81) { // Gvar.enemy_list = 81 なのでアバッキオ
                await Func.func640();
                await Func.func787();
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 82) { // Gvar.enemy_list = 82 なのでバーのバーテンダー 没キャラ?
                await Func.func757();// キャラに話しかけた時のメッセージ(コメントなし)
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 83) { // Gvar.enemy_list = 83 なので間田
                await Func.func640();
                await Func.func793();
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 49) { // Gvar.enemy_list = 49 なのでコピー人形
                await Func.func640();
                await Func.func725();
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var31 == 5 && Gvar.var_83[Gvar.var_314].Var0 == 6) { // Gvar.enemy_list = 6 なのでエボニーデビルの人形
                await Func.func640();
                await Func.func726();
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var31 == 5 && Gvar.var_83[Gvar.var_314].Var0 == 17) { // Gvar.enemy_list = 17 なのでシアハートアタック
                await Func.func640();
                await Func.func727();
                return;
            }
            if (Gvar.var_83[Gvar.var_314].Var31 == 5) { // Gvar.enemy_list = 5 なので小汚い浮浪者
                await Func.func640();
                await Func.func734();
                return;
            }
            // Ver0.1403にて追加。
            if (Gvar.var_83[Gvar.var_314].Var0 == 180) { // No = 180 デッドマンズ吉良
                await Func.func757();// キャラに話しかけた時のメッセージ(コメントなし)
                return;
            }
        }
        if (Gvar.var_71[Gvar.var_347][Gvar.var_348] == 0) {
            await Func.func651(); // 攻撃動作処理
            return;
        }
        if (Gvar.var_82[Gvar.var_347][Gvar.var_348] == 0 && Gvar.equip_disc[108] == 0) {
            await Func.func651(); // 攻撃動作処理
            return;
        }
        if (Gvar.var_82[Gvar.var_347][Gvar.var_348] == 0 && Gvar.equip_disc[108] == 1) {
            Gvar.var_2933 = Gvar.var_347;
            Gvar.var_2934 = Gvar.var_348;
            if (Gvar.var_199 == 4) {
                Gvar.var_347 = Gvar.var_347 - 1;
            }
            if (Gvar.var_199 == 6) {
                Gvar.var_347 = Gvar.var_347 + 1;
            }
            if (Gvar.var_199 == 8) {
                Gvar.var_348 = Gvar.var_348 - 1;
            }
            if (Gvar.var_199 == 2) {
                Gvar.var_348 = Gvar.var_348 + 1;
            }
            if (Gvar.var_199 == 1) {
                Gvar.var_347 = Gvar.var_347 - 1;
                Gvar.var_348 = Gvar.var_348 + 1;
            }
            if (Gvar.var_199 == 3) {
                Gvar.var_347 = Gvar.var_347 + 1;
                Gvar.var_348 = Gvar.var_348 + 1;
            }
            if (Gvar.var_199 == 7) {
                Gvar.var_347 = Gvar.var_347 - 1;
                Gvar.var_348 = Gvar.var_348 - 1;
            }
            if (Gvar.var_199 == 9) {
                Gvar.var_347 = Gvar.var_347 + 1;
                Gvar.var_348 = Gvar.var_348 - 1;
            }
            if (Gvar.var_347 < 0) {
                Gvar.var_347 = 0;
            }
            if (Gvar.var_347 > Gvar.var_33) {
                Gvar.var_347 = Gvar.var_33;
            }
            if (Gvar.var_348 < 0) {
                Gvar.var_348 = 0;
            }
            if (Gvar.var_348 > Gvar.var_34) {
                Gvar.var_348 = Gvar.var_34;
            }
            Gvar.var_314 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
            if (Gvar.var_71[Gvar.var_347][Gvar.var_348] == 0 || Gvar.var_82[Gvar.var_347][Gvar.var_348] == 0 || Gvar.var_83[Gvar.var_314].Var31 == 4 || Gvar.var_83[Gvar.var_314].Var31 == 5) {
                Gvar.var_347 = Gvar.var_66;
                Gvar.var_348 = Gvar.var_67;
                if (Gvar.var_199 == 4) {
                    Gvar.var_347 = Gvar.var_347 - 1;
                }
                if (Gvar.var_199 == 6) {
                    Gvar.var_347 = Gvar.var_347 + 1;
                }
                if (Gvar.var_199 == 8) {
                    Gvar.var_348 = Gvar.var_348 - 1;
                }
                if (Gvar.var_199 == 2) {
                    Gvar.var_348 = Gvar.var_348 + 1;
                }
                if (Gvar.var_199 == 1) {
                    Gvar.var_347 = Gvar.var_347 - 1;
                    Gvar.var_348 = Gvar.var_348 + 1;
                }
                if (Gvar.var_199 == 3) {
                    Gvar.var_347 = Gvar.var_347 + 1;
                    Gvar.var_348 = Gvar.var_348 + 1;
                }
                if (Gvar.var_199 == 7) {
                    Gvar.var_347 = Gvar.var_347 - 1;
                    Gvar.var_348 = Gvar.var_348 - 1;
                }
                if (Gvar.var_199 == 9) {
                    Gvar.var_347 = Gvar.var_347 + 1;
                    Gvar.var_348 = Gvar.var_348 - 1;
                }
                await Func.func651(); // 攻撃動作処理
                return;
            }
            if (Gvar.var_80[Gvar.var_2933][Gvar.var_2934] > 0) {
                Gvar.var_2935 = Gvar.var_80[Gvar.var_2933][Gvar.var_2934];
                Gvar.var_81[Gvar.var_2935][4] = 1;
            }
            Gvar.kougeki_disc_id  = 110;
            Gvar.var_750 = 1;
            Gvar.var_748 = Gvar.var_347 - Gvar.var_66 + 4;
            Gvar.var_749 = Gvar.var_348 - Gvar.var_67 + 4;
        }
        // No = 318 ジャンピンJフラッシュのDISCを装備している場合
        if (Gvar.equip_disc[318] == 1 && Gvar.var_83[Gvar.var_314].Var0 > 0) {
            Gvar.var_2936 = Adap.rnd(8);
            if (Gvar.var_2936 == 0) {
                Gvar.var_747 = 1;
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "「ジャンピン・ジャック・フラッシュ！」";
                Gvar.comments_row2 = "";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_83[Gvar.var_314].Var17 = 1;
                Gvar.var_2937 = 1;
                Gvar.var_455 = Gvar.var_347;
                Gvar.var_456 = Gvar.var_348;
                await Func.func660();
                Gvar.var_2937 = 0;
                Gvar.var_347 = Gvar.var_1894;
                Gvar.var_348 = Gvar.var_1895;
                Gvar.var_243 = 0;
                Gvar.var_217 = 1;
                await Func.func637();
                return;
            }
        }
        if (Gvar.var_1035 >= 1) {
            Gvar.var_243 = 0;
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "この恨み はらさでおくべきかァ―！";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_243 = 1;
        }
        if (Gvar.var_143 >= 1) {
            Gvar.var_314 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0;
            await Func.func626(); // 敵リスト
            Gvar.var_2267[8] = Gvar.var_2267[7];
            Gvar.var_2267[7] = Gvar.var_2267[6];
            Gvar.var_2267[6] = Gvar.var_2267[5];
            Gvar.var_2267[5] = Gvar.var_2267[4];
            Gvar.var_2267[4] = Gvar.var_2267[3];
            Gvar.var_2267[3] = Gvar.var_2267[2];
            Gvar.var_2267[2] = Gvar.var_2267[1];
            Gvar.var_2267[1] = Gvar.var_2267[0];
            Gvar.var_2267[0] = Gvar.var_83[Gvar.var_314].Var0;
            if (Gvar.var_2267[0] != 0 && Gvar.var_2267[0] == Gvar.var_2267[1]) {
                Gvar.var_143 = 2;
            }
            if (Gvar.var_143 == 2 && Gvar.var_2267[1] == Gvar.var_2267[2]) {
                Gvar.var_143 = 3;
            }
            if (Gvar.var_143 == 3 && Gvar.var_2267[2] == Gvar.var_2267[3]) {
                Gvar.var_143 = 4;
            }
            if (Gvar.var_143 == 4 && Gvar.var_2267[3] == Gvar.var_2267[4]) {
                Gvar.var_143 = 5;
            }
            if (Gvar.var_143 == 5 && Gvar.var_2267[4] == Gvar.var_2267[5]) {
                Gvar.var_143 = 6;
            }
            if (Gvar.var_143 == 6 && Gvar.var_2267[5] == Gvar.var_2267[6]) {
                Gvar.var_143 = 7;
            }
            if (Gvar.var_143 == 7 && Gvar.var_2267[6] == Gvar.var_2267[7]) {
                Gvar.var_143 = 8;
            }
            if (Gvar.var_143 == 8 && Gvar.var_2267[7] == Gvar.var_2267[8]) {
                Gvar.var_143 = 9;
            }
            if (Gvar.var_2267[0] != 0 && Gvar.var_2267[0] != Gvar.var_2267[1]) {
                Gvar.var_143 = 1;
            }
            if (Gvar.var_143 >= 2) {
                Gvar.var_243 = 0;
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                await Func.func094(); // メッセージ送りの際の効果音
                if (Gvar.var_143 == 2) {
                    Gvar.comments_row1 = "きさまの 動きやパワーは";
                    Gvar.comments_row2 = "さっきしっかり とりこんだ！";
                }
                if (Gvar.var_143 == 3) {
                    Gvar.comments_row1 = "ウシャア―――――――ッ！！";
                    Gvar.comments_row2 = "";
                }
                if (Gvar.var_143 == 4) {
                    Gvar.comments_row1 = "絶っ～～～～～～～～～対に！";
                    Gvar.comments_row2 = "負けなあああああああいィィィ";
                }
                if (Gvar.var_143 == 5) {
                    Gvar.comments_row1 = "さすが" + Gvar.enemy_name + "…";
                    Gvar.comments_row2 = "しかしその動き… スデに憶えた！";
                }
                if (Gvar.var_143 == 6) {
                    Gvar.comments_row1 = "さて～～～　今度の攻撃には";
                    Gvar.comments_row2 = "\t耐えられるかな？";
                }
                if (Gvar.var_143 == 7) {
                    Gvar.comments_row1 = "ウシャアアアアアア―――ッ";
                    Gvar.comments_row2 = "死ねエエエイ――っ！！";
                }
                if (Gvar.var_143 == 8) {
                    Gvar.comments_row1 = "とどめの とっておきのダメ押しだッ！";
                    Gvar.comments_row2 = "";
                }
                if (Gvar.var_143 == 9) {
                    Gvar.comments_row1 = "この首 もらったァ―――ッ!!";
                    Gvar.comments_row2 = "";
                }
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_243 = 1;
            }
        }
        await Func.func639(); // 敵の回避処理
        if (Gvar.var_2867 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛの攻撃は外れた";
            if (Gvar.var_2938 == 1) { // ヒラリ回避発動フラグON
                Gvar.comments_row1 = "ヒラリと攻撃をかわされた";
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            Gvar.var_2939 = 1;
            if (Gvar.equip_disc[105] == 1) { // No = 105 チリペッパーのDISCを装備している場合
                Gvar.var_1030 = Gvar.var_1030 + 1;
            }
            await Func.func651(); // 攻撃動作処理
            return;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 152) { // Gvar.enemy_list == 152 トリッシュ
            Gvar.var_2936 = Adap.rnd(4);
            if (Gvar.var_2936 == 0) {
                Gvar.var_243 = 1;
                await Func.func089(); // 各装備discごとの攻撃音設定
                for (let cnt3 = 0; cnt3 < 3; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                if (Gvar.var_83[Gvar.var_314].Var0 != 79 && Gvar.var_83[Gvar.var_314].Var23 == 0) {
                    if (Gvar.var_83[Gvar.var_314].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 > Gvar.var_67) {
                        Gvar.var_83[Gvar.var_314].Var5 = 8;
                    }
                    if (Gvar.var_83[Gvar.var_314].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 < Gvar.var_67) {
                        Gvar.var_83[Gvar.var_314].Var5 = 2;
                    }
                    if (Gvar.var_83[Gvar.var_314].Var1 < Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 == Gvar.var_67) {
                        Gvar.var_83[Gvar.var_314].Var5 = 6;
                    }
                    if (Gvar.var_83[Gvar.var_314].Var1 > Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 == Gvar.var_67) {
                        Gvar.var_83[Gvar.var_314].Var5 = 4;
                    }
                    if (Gvar.var_83[Gvar.var_314].Var1 > Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 > Gvar.var_67) {
                        Gvar.var_83[Gvar.var_314].Var5 = 7;
                    }
                    if (Gvar.var_83[Gvar.var_314].Var1 < Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 > Gvar.var_67) {
                        Gvar.var_83[Gvar.var_314].Var5 = 9;
                    }
                    if (Gvar.var_83[Gvar.var_314].Var1 > Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 < Gvar.var_67) {
                        Gvar.var_83[Gvar.var_314].Var5 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_314].Var1 < Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 < Gvar.var_67) {
                        Gvar.var_83[Gvar.var_314].Var5 = 3;
                    }
                }
                await Func.func091();
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "ﾄﾘｯｼｭはｺﾞﾑのように柔らかくなっている！";
                Gvar.comments_row2 = "";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_243 = 0;
                await Func.func529();
                Gvar.var_217 = 1;
                await Func.func637();
                return;
            }
        }
        Gvar.var_314 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
        Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0;
        await Func.func626(); // 敵リスト
        await Func.func638();
        Gvar.var_2940 = Adap.rnd(22);
        if (Gvar.var_162 == 1) {
            if (Gvar.var_2940 == 1 || Gvar.var_2940 == 2) {
                Gvar.var_2940 = 0;
            }
        }
        if (Gvar.equip_disc[106] == 1 && Gvar.var_2940 == 1) {
            Gvar.var_2940 = 0;
        }
        if (Gvar.kougeki_disc_id  == 104 && Gvar.var_129 == 0) {
            Gvar.var_2940 = 0;
        }
        if (Gvar.var_2927 == 1) {
            Gvar.var_2940 = 0;
        }
        if (Gvar.kougeki_disc_id  == 106 && Gvar.var_139 >= 1) {
            Gvar.var_2940 = 0;
        }
        if (Gvar.equip_disc[105] == 1 && Gvar.var_1030 >= 2) {
            Gvar.var_2940 = 0;
        }
        if (Gvar.var_2940 == 0) {
            Gvar.var_209 = Gvar.var_209 * 2;
            Gvar.var_1194 = 1;
        }
        // No = 123 クリームのDISC、、No = 132 レクイエムジョルノ、No = 143 ウンガロ
        // Ver0.1403にて追加。No = 171 離婚した承太郎
        if (Gvar.kougeki_disc_id  == 123 && Gvar.var_2940 == 0 && Gvar.var_83[Gvar.var_314].Var0 != 33 && Gvar.var_83[Gvar.var_314].Var0 != 34 && Gvar.var_83[Gvar.var_314].Var0 != 132 && Gvar.var_83[Gvar.var_314].Var0 != 143 && Gvar.var_83[Gvar.var_314].Var0 != 171) {
            Gvar.var_209 = 999;
        }
        Gvar.var_2927 = 0;
        if (Gvar.var_1194 == 1 && Gvar.var_162 == 1) {
            Gvar.var_2941 = 0;
            Gvar.var_243 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_2915 = Adap.rnd(5);
            await Func.func094(); // メッセージ送りの際の効果音
            if (Gvar.var_2915 == 0) {
                Gvar.comments_row1 = "なにかわからんが喰らえッ！";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_2915 == 1) {
                Gvar.comments_row1 = "帝王はこのディアボロだッ！";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_2915 == 2) {
                Gvar.comments_row1 = "お前はわたしを本気で怒らせたッ！！";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_2915 == 3) {
                Gvar.comments_row1 = "とどめだァ――――ッ！";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_2915 == 4) {
                Gvar.comments_row1 = "死んだことを後悔する時間をも";
                Gvar.comments_row2 = "与えんッ！！";
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_243 = 1;
        }
        Gvar.var_83[Gvar.var_314].Var3 = Gvar.var_83[Gvar.var_314].Var3 - Gvar.var_209;
        Gvar.var_243 = 1;
        await Func.func089(); // 各装備discごとの攻撃音設定
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_83[Gvar.var_314].Var0 != 79 && Gvar.var_83[Gvar.var_314].Var23 == 0) {
            Gvar.var_2942 = Gvar.var_83[Gvar.var_314].Var5;
            if (Gvar.var_83[Gvar.var_314].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 > Gvar.var_67) {
                Gvar.var_83[Gvar.var_314].Var5 = 8;
            }
            if (Gvar.var_83[Gvar.var_314].Var1 == Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 < Gvar.var_67) {
                Gvar.var_83[Gvar.var_314].Var5 = 2;
            }
            if (Gvar.var_83[Gvar.var_314].Var1 < Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_314].Var5 = 6;
            }
            if (Gvar.var_83[Gvar.var_314].Var1 > Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 == Gvar.var_67) {
                Gvar.var_83[Gvar.var_314].Var5 = 4;
            }
            if (Gvar.var_83[Gvar.var_314].Var1 > Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 > Gvar.var_67) {
                Gvar.var_83[Gvar.var_314].Var5 = 7;
            }
            if (Gvar.var_83[Gvar.var_314].Var1 < Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 > Gvar.var_67) {
                Gvar.var_83[Gvar.var_314].Var5 = 9;
            }
            if (Gvar.var_83[Gvar.var_314].Var1 > Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 < Gvar.var_67) {
                Gvar.var_83[Gvar.var_314].Var5 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var1 < Gvar.var_66 && Gvar.var_83[Gvar.var_314].Var2 < Gvar.var_67) {
                Gvar.var_83[Gvar.var_314].Var5 = 3;
            }
        }
        await Func.func091();
        Gvar.var_747 = 1;
        Gvar.var_83[Gvar.var_314].Var8 = 1;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            Gvar.var_83[Gvar.var_314].Var8 = 0;
            for (let cnt2 = 0; cnt2 < 1; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_83[Gvar.var_314].Var8 = 1;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        Gvar.var_314 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
        Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0;
        if (Gvar.var_83[Gvar.var_314].Var0 == 97 && Gvar.var_83[Gvar.var_314].Var31 >= 11) {
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var31;
        }
        await Func.func626(); // 敵リスト
        Gvar.var_2943 = Gvar.enemy_name;
        Gvar.var_1030 = 0;
        if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
            Gvar.enemy_name = "何者か";
        }
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾃﾞｨｱﾎﾞﾛは" + Gvar.enemy_name + "に";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        if (Gvar.var_1194 == 1) {
            Gvar.var_25_x = Gvar.var_25[12]; // Ver0.1310で値修正 6 → 12
            Gvar.var_26_x = Gvar.var_26[12]; // Ver0.1310で値修正 6 → 12
            Gvar.var_27_x = Gvar.var_27[12]; // Ver0.1310で値修正 6 → 12
        }
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.comments_row2 = "" + Gvar.var_209 + "のダメージ！";
        if (Gvar.var_209 == 999) {
            Gvar.comments_row2 = "致命的なダメージ！";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func337(); // メッセージ関係呼び出し
        // Gvar.enemy_list == 159 記憶が戻ったウェザー
        if (Gvar.var_83[Gvar.var_314].Var0 == 159 && Gvar.var_83[Gvar.var_314].Var20 == 0) {
            Gvar.var_1550 = Gvar.var_83[Gvar.var_314].Var1;
            Gvar.var_230 = Gvar.var_83[Gvar.var_314].Var2;
            Gvar.var_2413 = 1;
            Gvar.var_768 = 1;
            Gvar.var_2434 = 1;
            await Func.func536();
            Gvar.var_768 = 0;
            Gvar.var_2434 = 0;
            Gvar.var_2413 = 0;
        }
        // No= 313 ハイウェイスターのDISCを装備している場合
        if (Gvar.equip_disc[313] == 1 && Gvar.var_211 != Gvar.var_352 && Gvar.var_209 != 0) {
            Gvar.var_2944 = Adap.rnd(8);
            if (Gvar.var_2944 == 0 || Gvar.var_1194 == 1) {
        
                Adap.DSPLAY(161);
                Gvar.var_1299 = 0;
                Gvar.var_271 = 1;
                Gvar.var_1297 = 1;
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                    Gvar.var_1297++;
                }
                Gvar.var_271 = 0;
                Gvar.var_1297 = 0;
                Gvar.var_211 = Gvar.var_211 + Gvar.var_209;
                if (Gvar.var_211 >= Gvar.var_352) {
                    Gvar.var_211 = Gvar.var_352;
                }
                Gvar.comments_row1a = "" + Gvar.var_209 + "の養分を吸収した。";
                Gvar.comments_row2a = "";
                Gvar.var_2945 = Gvar.enemy_list;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
            }
        }
        // No = 61 ヨーヨーマッ
        if (Gvar.var_83[Gvar.var_314].Var0 == 61 && Gvar.var_139 >= 1) {
            Gvar.var_139 = 0;
            await Func.func038();
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 101 || Gvar.var_83[Gvar.var_314].Var0 == 102 || Gvar.var_83[Gvar.var_314].Var0 == 103 || Gvar.var_83[Gvar.var_314].Var0 == 104) {
            Gvar.var_2946 = Gvar.var_83[Gvar.var_314].Var0;
            Gvar.var_2947 = Gvar.var_83[Gvar.var_314].Var1;
            Gvar.var_2948 = Gvar.var_83[Gvar.var_314].Var2;
            Gvar.var_2949 = Gvar.var_83[Gvar.var_314].Var1 + 1;
            Gvar.var_2950 = Gvar.var_83[Gvar.var_314].Var2 + 1;
            Gvar.var_2951 = Gvar.var_83[Gvar.var_314].Var1 - 1;
            Gvar.var_2952 = Gvar.var_83[Gvar.var_314].Var2 - 1;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 13 && Gvar.var_83[Gvar.var_314].Var13 == 0 && Gvar.var_83[Gvar.var_314].Var12 == 0 && Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.shageki_disc_id != 409) {
            Gvar.var_2953 = Adap.rnd(4);
            if (Gvar.var_2953 == 0) {
                Gvar.var_83[Gvar.var_314].Var8 = 1;
                await Func.func623();
                Gvar.var_83[Gvar.var_314].Var8 = 0;
            }
        }
        // No = 317 キッスの装備discを装備している際の敵が分裂する処理
        // No = 132 レクイエムジョルノ、NO = 143 ウンガロでなければ
        // Ver0.1403にて追加。No = 171 離婚した承太郎
        if (Gvar.equip_disc[317] == 1 && Gvar.var_83[Gvar.var_314].Var0 != 13 && Gvar.var_83[Gvar.var_314].Var0 != 171 && Gvar.var_83[Gvar.var_314].Var0 != 143 && Gvar.var_83[Gvar.var_314].Var0 != 132 && Gvar.var_83[Gvar.var_314].Var0 != 20 && Gvar.var_83[Gvar.var_314].Var31 != 4 && Gvar.var_83[Gvar.var_314].Var31 != 5) {
            Gvar.var_2953 = Adap.rnd(8);
            if (Gvar.var_2953 == 0) {
                Gvar.var_1374 = Gvar.var_83[Gvar.var_314].Var0;
                if (Gvar.var_1374 == 19) {
                    Gvar.var_1374 = 90;
                }
                if (Gvar.var_1374 == 96) {
                    Gvar.var_1374 = 93;
                }
                Gvar.var_2489 = Gvar.var_83[Gvar.var_314].Var5;
                Gvar.var_83[Gvar.var_314].Var8 = 1;
                await Func.func624();
                Gvar.var_83[Gvar.var_314].Var8 = 0;
                Gvar.var_1374 = 0;
            }
        }
        Gvar.var_314 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
        Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0;
        await Func.func626(); // 敵リスト
        if (Gvar.var_83[Gvar.var_314].Var3 <= 0) {
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1 && Gvar.var_83[Gvar.var_314].Var0 == 20) { // No = 20 エンヤ婆
                await Func.func685(); // エンヤ婆を倒した時のメッセージ処理
            }
            // No = 2 なので、レクイエムの大迷宮
            if (Gvar.dungeon_number == 2 && Gvar.var_83[Gvar.var_314].Var0 == 132) { // No = 132 レクイエムジョルノ
                await Func.func686(); // レクイエムジョルノを倒した時のメッセージ処理
            }
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3 && Gvar.var_83[Gvar.var_314].Var0 == 143) { // No = 143 ウンガロ
                await Func.func687(); // ウンガロを倒した時のメッセージ処理
            }
            // No = 5 なので、鉄獄(鉄の牢獄)
            if (Gvar.dungeon_number == 5 && Gvar.var_83[Gvar.var_314].Var0 == 171) { // Ver0.1403にて修正。.Var16 >= 1000 → .Var0 == 171。No = 171 離婚した承太郎
                // Gvar.var_2921 = Gvar.var_83[Gvar.var_314].Var0; Ver 0.1403にてコメントアウト
                await Func.func633();
            }
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                Gvar.var_83[Gvar.var_314].Var11 = 1;
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_83[Gvar.var_314].Var11 = 0;
                Gvar.var_83[Gvar.var_314].Var8 = 1;
                await Func.func337(); // メッセージ関係呼び出し
            }
            if (Gvar.var_114 >= 1 && Gvar.var_314 == Gvar.var_114) {
                Gvar.var_114 = 0;
            }
            Gvar.var_83[Gvar.var_314].Var11 = 1;
            if (Gvar.var_83[Gvar.var_314].Var27 != 0) {
                Gvar.var_2954 = Gvar.var_83[Gvar.var_314].Var27;
                Gvar.var_83[Gvar.var_2954].Var28 = 0;
            }
            Gvar.var_442 = Gvar.var_83[Gvar.var_314].Var1;
            Gvar.var_443 = Gvar.var_83[Gvar.var_314].Var2;
            Gvar.var_83[Gvar.var_314].Var1 = 0;
            Gvar.var_83[Gvar.var_314].Var2 = 0;
            if (Gvar.var_83[Gvar.var_314].Var0 == 73 && Gvar.var_83[Gvar.var_314].Var20 == 0) {
                Gvar.var_1550 = Gvar.var_442;
                Gvar.var_230 = Gvar.var_443;
                if (Gvar.var_77[Gvar.var_1550][Gvar.var_230] == 0 && Gvar.var_73[Gvar.var_1550][Gvar.var_230] == 0) {
                    Gvar.var_768 = 1;
                    Gvar.var_2416 = 1;
                    await Func.func536();
                    Gvar.var_768 = 0;
                    Gvar.var_2416 = 0;
                }
            }
            if (Gvar.equip_disc[307] == 1) {
                Gvar.var_2955 = Adap.rnd(2);
                if (Gvar.var_2955 == 1) {
                    Gvar.var_2263 = Gvar.var_83[Gvar.var_314].Var0;
                }
            }
            await Func.func676();
            await Func.func340(); // キー入力による選択処理
            Gvar.var_314 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
            Gvar.enemy_list = Gvar.var_83[Gvar.var_314].Var0;
            await Func.func626(); // 敵リスト
            Gvar.var_2956 = Gvar.enemy_exp_point;
            if (Gvar.var_83[Gvar.var_314].Var39 >= 2) {
                Gvar.var_2956 = Math.floor(Gvar.var_2956 * (Gvar.var_83[Gvar.var_314].Var39 + 10) / 10);
            }
            if (Gvar.var_160 == 1) {
                Gvar.var_2956 = Math.floor(Gvar.var_2956 * 3 / 2);
            }
            if (Gvar.var_127 != 0 || Gvar.var_132 != 0) {
                Gvar.enemy_name = "何者か";
            }
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "" + Gvar.enemy_name + "をやっつけた";
            Gvar.comments_row2a = "" + Gvar.var_2956 + "の経験値を手に入れた";
            Gvar.var_2945 = Gvar.enemy_list;
            Gvar.var_1034 = Gvar.enemy_list;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            // No = 1 なので、ホテルの外
            if (Gvar.dungeon_number == 1 && Gvar.var_83[Gvar.var_314].Var0 == 20) { // No = 20 エンヤ婆
                await Func.func689();
            }
            // No = 2 なので、レクイエムの大迷宮
            if (Gvar.dungeon_number == 2 && Gvar.var_83[Gvar.var_314].Var0 == 132) { // No = 132 レクイエムジョルノ
                await Func.func689();
            }
            // No = 3 なので、ディアボロの試練
            if (Gvar.dungeon_number == 3 && Gvar.var_83[Gvar.var_314].Var0 == 143) { // No = 143 ウンガロ
                await Func.func689();
            }
            // Ver0.1403にて追加。No = 5 なので、鉄獄
            if (Gvar.dungeon_number == 5 && Gvar.var_83[Gvar.var_314].Var0 == 171) { // No = 171 離婚した承太郎
                await Func.func689();
            }
            if (Gvar.special_floor == 1 && Gvar.var_83[Gvar.var_314].Var0 == 65) { // No = 65 虹村形兆
                await Func.func688();
            }
            if (Gvar.var_175 >= 1 || Gvar.var_176 >= 1) {
                await Func.func703();
            }
            if (Gvar.var_83[Gvar.var_314].Var20 == 0) {
                if (Gvar.var_83[Gvar.var_314].Var0 == 79) {
                    Gvar.var_2957 = 1;
                    Gvar.var_2958 = Gvar.var_83[Gvar.var_314].Var5;
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 91) {
                    Gvar.var_2957 = 2;
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 92) {
                    Gvar.var_2957 = 3;
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 77) {
                    Gvar.var_2957 = 4;
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 76) {
                    Gvar.var_2957 = 5;
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 76 || Gvar.var_83[Gvar.var_314].Var0 == 77) {
                    if (Gvar.dungeon_number == 99) {
                        Gvar.var_2959 = 0;
                        if (Gvar.var_83[Gvar.var_314].Var16 == 1) {
                            Gvar.var_2959 = 1;
                        }
                        if (Gvar.var_83[Gvar.var_314].Var16 == 2) {
                            Gvar.var_2959 = 2;
                        }
                    }
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 163) {
                    Gvar.var_2538 = Gvar.var_83[Gvar.var_314].Var5;
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 6 && Gvar.var_83[Gvar.var_314].Var31 != 5) {
                    Gvar.var_186 = 165;
                    await Func.func692();
                }
                if (Gvar.var_83[Gvar.var_314].Var0 == 87) {
                    Gvar.var_186 = 164;
                    await Func.func692();
                }
            }
            Gvar.var_82[Gvar.var_347][Gvar.var_348] = 0;
            Gvar.var_83[Gvar.var_314].Var0 = 0;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_568 = Gvar.var_568 + Gvar.var_2956;
            await Func.func680();
            if (Gvar.var_2957 >= 1) {
                await Func.func690();
            }
            if (Gvar.var_2538 >= 1) {
                await Func.func691();
            }
        }
        Gvar.var_83[Gvar.var_314].Var8 = 0;
        if (Gvar.var_83[Gvar.var_314].Var13 != 0) {
            Gvar.var_460 = Gvar.var_314;
            await Func.func024();
        }
        if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
            Gvar.var_83[Gvar.var_314].Var12 = 0;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 != 0) {
            Gvar.var_2960 = 0;
            Gvar.var_2961 = 0;
            Gvar.var_2962 = 0;
            if (Gvar.var_83[Gvar.var_314].Var14 == 0 && Gvar.equip_disc[103] == 1) {
                Gvar.var_2963 = Adap.rnd(8);
                if (Gvar.var_2963 == 0 || Gvar.var_1194 == 1) {
            
                    Adap.DSPLAY(162);
                    Gvar.var_2960 = 1;
                    if (Gvar.var_83[Gvar.var_314].Var15 == 0) {
                        Gvar.var_83[Gvar.var_314].Var14 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_314].Var15 != 0) {
                        Gvar.var_83[Gvar.var_314].Var14 = 0;
                        Gvar.var_83[Gvar.var_314].Var15 = 0;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var20 != 2 && Gvar.equip_disc[319] == 1) {
                Gvar.var_2963 = Adap.rnd(8);
                if (Gvar.var_2963 == 0 || Gvar.var_1194 == 1) {
                    Gvar.var_2961 = 1;
            
                    Adap.DSPLAY(226);
                    if (Gvar.var_83[Gvar.var_314].Var20 == 1) {
                        Gvar.var_83[Gvar.var_314].Var20 = 2;
                    }
                    if (Gvar.var_83[Gvar.var_314].Var20 == 0) {
                        Gvar.var_83[Gvar.var_314].Var20 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_314].Var12 == 99) {
                        Gvar.var_83[Gvar.var_2964].Var12 = 0;
                    }
                    Gvar.var_83[Gvar.var_314].Var15 = 0;
                    Gvar.var_83[Gvar.var_314].Var30 = 0;
                    if (Gvar.var_83[Gvar.var_314].Var0 == 97) {
                        Gvar.var_83[Gvar.var_314].Var31 = 0;
                    }
                    if (Gvar.var_114 == Gvar.var_314) {
                        Gvar.var_114 = 0;
                    }
                }
            }
            if (Gvar.var_83[Gvar.var_314].Var13 == 0 && Gvar.equip_disc[202] == 1) {
                Gvar.var_2963 = Adap.rnd(8);
                if (Gvar.var_2963 == 0 || Gvar.var_1194 == 1) {
                    Gvar.var_2962 = 1;
            
                    Adap.DSPLAY(126);
                    Gvar.var_83[Gvar.var_314].Var13 = 1;
                    if (Gvar.var_114 == Gvar.var_314) {
                        Gvar.var_114 = 0;
                    }
                }
            }
            if (Gvar.var_2960 == 1 || Gvar.var_2961 == 1 || Gvar.var_2962 == 1) {
                for (let cnt3 = 0; cnt3 < 8; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.comments_row1 = Gvar.comments_row1a;
                Gvar.comments_row2 = Gvar.comments_row2a;
                if (Gvar.var_2960 == 1 && Gvar.var_2961 == 0 && Gvar.var_2962 == 0) {
                    Gvar.comments_row1a = "" + Gvar.var_2943 + "を重くした！";
                    Gvar.comments_row2a = "";
                }
                if (Gvar.var_2960 == 1 && Gvar.var_2961 == 1 && Gvar.var_2962 == 0) {
                    Gvar.comments_row1a = "" + Gvar.var_2943 + "を";
                    Gvar.comments_row2a = "重くして能力を封じた！";
                    if (Gvar.var_83[Gvar.var_314].Var20 == 2) {
                        Gvar.comments_row2a = "重くして攻撃を封じた！";
                    }
                }
                if (Gvar.var_2960 == 1 && Gvar.var_2961 == 0 && Gvar.var_2962 == 1) {
                    Gvar.comments_row1a = "" + Gvar.var_2943 + "を";
                    Gvar.comments_row2a = "重くして凍らせた！";
                }
                if (Gvar.var_2960 == 1 && Gvar.var_2961 == 1 && Gvar.var_2962 == 1) {
                    Gvar.comments_row1a = "" + Gvar.var_2943 + "を";
                    Gvar.comments_row2a = "重くして能力を封じて凍らせた！";
                    if (Gvar.var_83[Gvar.var_314].Var20 == 2) {
                        Gvar.comments_row2a = "重くして攻撃を封じて凍らせた！";
                    }
                }
                if (Gvar.var_2960 == 0 && Gvar.var_2961 == 1 && Gvar.var_2962 == 0) {
                    Gvar.comments_row1a = "" + Gvar.var_2943 + "の能力を封じた！";
                    Gvar.comments_row2a = "";
                    if (Gvar.var_83[Gvar.var_314].Var20 == 2) {
                        Gvar.comments_row1a = "" + Gvar.var_2943 + "の攻撃を封じた！";
                        Gvar.comments_row2a = "";
                    }
                }
                if (Gvar.var_2960 == 0 && Gvar.var_2961 == 1 && Gvar.var_2962 == 1) {
                    Gvar.comments_row1a = "" + Gvar.var_2943 + "の";
                    Gvar.comments_row2a = "能力を封じて凍らせた！";
                    if (Gvar.var_83[Gvar.var_314].Var20 == 2) {
                        Gvar.comments_row2a = "攻撃を封じて凍らせた！";
                    }
                }
                if (Gvar.var_2960 == 0 && Gvar.var_2961 == 0 && Gvar.var_2962 == 1) {
                    Gvar.comments_row1a = "" + Gvar.var_2943 + "を凍らせた！";
                    Gvar.comments_row2a = "";
                }
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func050();
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                await Func.func047();
            }
        }
        Gvar.var_1194 = 0;
        if (Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.var_83[Gvar.var_314].Var12 == 0 && Gvar.var_83[Gvar.var_314].Var13 == 0 && Gvar.var_83[Gvar.var_314].Var17 == 0 && Gvar.var_163 == 0 && Gvar.var_123 == 0 && Gvar.var_151 == 0) {
            if (Gvar.var_83[Gvar.var_314].Var0 == 121 && Gvar.var_83[Gvar.var_314].Var29 == 1) {
                await Func.func658(); // 敵が攻撃を受けた時の動作処理
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 6 || Gvar.var_83[Gvar.var_314].Var0 == 44 || Gvar.var_83[Gvar.var_314].Var0 == 14 || Gvar.var_83[Gvar.var_314].Var0 == 120 || Gvar.var_83[Gvar.var_314].Var0 == 133 || Gvar.var_83[Gvar.var_314].Var0 == 118 || Gvar.var_83[Gvar.var_314].Var0 == 161 || Gvar.var_83[Gvar.var_314].Var0 == 109) {
                await Func.func658(); // 敵が攻撃を受けた時の動作処理
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 9 || Gvar.var_83[Gvar.var_314].Var0 == 10 || Gvar.var_83[Gvar.var_314].Var0 == 84 || Gvar.var_83[Gvar.var_314].Var0 == 139 || Gvar.var_83[Gvar.var_314].Var0 == 138 || Gvar.var_83[Gvar.var_314].Var0 == 86 || Gvar.var_83[Gvar.var_314].Var0 == 129 || Gvar.var_83[Gvar.var_314].Var0 == 137 || Gvar.var_83[Gvar.var_314].Var0 == 143) {
                await Func.func658(); // 敵が攻撃を受けた時の動作処理
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 153) {
                await Func.func658(); // 敵が攻撃を受けた時の動作処理
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 116) {
                await Func.func657();
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 17 && Gvar.var_83[Gvar.var_314].Var3 < 2) {
                Gvar.var_2890 = Gvar.var_314;
                await Func.func698();
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 164 || Gvar.var_83[Gvar.var_314].Var0 == 165) {
                Gvar.var_1073 = Adap.rnd(3);
                if (Gvar.var_1073 == 0) {
                    Gvar.var_2965 = 1;
                    await Func.func669();
                }
            }
        }
        // Ver0.1403にて追加。No = 171 離婚した承太郎
        if (Gvar.var_83[Gvar.var_314].Var0 == 132 || Gvar.var_83[Gvar.var_314].Var0 == 143 || Gvar.var_83[Gvar.var_314].Var0 == 171) { // No = 132 レクイエムジョルノ、No = 143 ウンガロ、No = 171 離婚した承太郎
            await Func.func659(); // 敵ボスキャラの状態異常回復処理(レクイエムジョルノ、ウンガロ、離婚した承太郎)
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 116 && Gvar.var_139 >= 1) {
            Gvar.var_139 = 0;
            await Func.func039();
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 33) {
            Gvar.var_83[Gvar.var_314].Var0 = 34;
            Gvar.var_83[Gvar.var_314].Var31 = 1;
        }
        if (Gvar.var_2946 == 101 || Gvar.var_2946 == 102 || Gvar.var_2946 == 103 || Gvar.var_2946 == 104) {
            if (Gvar.var_83[Gvar.var_314].Var20 == 0 && Gvar.var_83[Gvar.var_314].Var12 != 1 && Gvar.var_83[Gvar.var_314].Var12 != 2 && Gvar.var_83[Gvar.var_314].Var12 != 3 && Gvar.var_83[Gvar.var_314].Var12 != 4 && Gvar.var_83[Gvar.var_314].Var12 != 5) {
                await Func.func702(); // 吸血鬼4兄弟に攻撃した際のメッセージ表示
            }
        }
        Gvar.var_217 = 1;
        if (Gvar.kougeki_disc_id  == 110) {
            Gvar.kougeki_disc_id  = 108;
            Gvar.var_750 = 0;
        }
        if (Gvar.equip_disc[101] == 1 && Gvar.var_2925 == 0 && Gvar.var_83[Gvar.var_314].Var0 > 0 && Gvar.var_2924 == 0 && Gvar.var_2965 == 0 && Gvar.var_128 == 0 && Gvar.var_178 == 0) {
            Gvar.var_2966 = Gvar.var_83[Gvar.var_314].Var1;
            Gvar.var_2967 = Gvar.var_83[Gvar.var_314].Var2;
            if (Gvar.var_82[Gvar.var_2966][Gvar.var_2967] != 0) {
                Gvar.var_2925 = 1;
                Gvar.var_243 = 1;
                await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                return;
            }
        }
        if (Gvar.sympathy_id == 135 && Gvar.var_341 == 1 && Gvar.var_83[Gvar.var_314].Var0 > 0 && Gvar.var_2924 == 0 && Gvar.var_2965 == 0) {
            Gvar.var_2966 = Gvar.var_83[Gvar.var_314].Var1;
            Gvar.var_2967 = Gvar.var_83[Gvar.var_314].Var2;
            if (Gvar.var_82[Gvar.var_2966][Gvar.var_2967] != 0 && Gvar.var_128 == 0 && Gvar.var_178 == 0) {
                if (Gvar.kougeki_disc_id  == 101) {
                    Gvar.var_341 = 2;
                    Gvar.var_243 = 1;
                    Gvar.kougeki_disc_id  = 122;
                    await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                    return;
                }
                if (Gvar.kougeki_disc_id  == 122) {
                    Gvar.var_341 = 2;
                    Gvar.var_243 = 1;
                    Gvar.kougeki_disc_id  = 101;
                    await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                    return;
                }
            }
        }
        Gvar.var_2924 = 0;
        Gvar.var_2965 = 0;
        if (Gvar.kougeki_disc_id  == 122 || Gvar.kougeki_disc_id  == 101) {
            Gvar.kougeki_disc_id  = Gvar.var_2923;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 > 0 && Gvar.var_83[Gvar.var_314].Var4 == 6) {
            Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2942;
        }
        if (Gvar.var_83[Gvar.var_314].Var0 == 164 || Gvar.var_83[Gvar.var_314].Var0 == 165) {
            Gvar.var_83[Gvar.var_314].Var5 = Gvar.var_2942;
        }
        if (Gvar.equip_disc[120] == 1 && Gvar.var_2926 == 1 && Gvar.var_128 == 0 && Gvar.var_178 == 0) {
            if (Gvar.kougeki_disc_id  != 100 && Gvar.kougeki_disc_id  != 398) {
                Gvar.var_2926 = 0;
                await Func.func641();
                if (Gvar.var_2968 == 1) {
                    Gvar.var_2968 = 0;
                    Gvar.var_243 = 1;
                    await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                    return;
                }
            }
            if (Gvar.kougeki_disc_id  == 100 || Gvar.kougeki_disc_id  == 398) {
                Gvar.var_2926 = 0;
                await Func.func642();
                if (Gvar.var_2968 == 1) {
                    Gvar.var_2968 = 0;
                    Gvar.var_243 = 1;
                    await Func.func636(); // ディアボロが攻撃or話しかけた時の動作処理
                    return;
                }
            }
        }
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func636}
