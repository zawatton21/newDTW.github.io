import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {item401} from "../stand/item401"
import * as Stand from '../stand/index'
import * as Main from '../newdtw/index'

// ゲーム基本動作フレーム処理(ゲームループ処理)
// ゲーム中の複雑なフラグ処理(アイテム使用時の効果, エフェクト等)は func019 で別途処理している
async function func009(this: any) {
        Adap.dbgprt(9);
        Gvar.var_208 = 0;
        Gvar.var_209 = 0;
        Gvar.var_210 = 0;
        if (Gvar.var_211 <= 0) {
            Gvar.var_212 = 1;
        }
        if (Gvar.var_212 == 1) {
            Gvar.var_213 = 0;
            Gvar.var_214 = 0;
            await Func.func672(); // ダンジョンを抜け出す際の動作処理
            return;
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 13 && Gvar.nouryoku_disc_id != 202 && Gvar.nouryoku_disc_id != 117 && Gvar.var_125 == 0) {
            Gvar.var_216 = 1;
            Gvar.var_213 = 0;
            Gvar.var_214 = 0;
            Adap.DSPLAY(216); // ワープして逃げる時の効果音
            await Func.func499(); // ダンジョン動作処理?
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_159 == 0) {
            Gvar.var_216 = 1;
            Gvar.var_213 = 0;
            Gvar.var_214 = 0;
            Adap.DSPLAY(216); // ワープして逃げる時の効果音
            await Func.func499(); // ダンジョン動作処理?
        }
        if (Gvar.var_151 >= 1) {
            Gvar.var_217 = 1;
            Gvar.var_213 = 0;
            Gvar.var_214 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        if (Gvar.var_116 == 2) {
            Gvar.var_116 = 0;
            Gvar.var_213 = 0;
            Gvar.var_214 = 0;
            await Main.func027(); // 動けるようになった時の表示
        }
        await Func.func337(); // メッセージ関係呼び出し
        if (Gvar.var_218 >= 1 && Gvar.var_218 < 30) {
            Gvar.var_217 = 1;
            Gvar.var_213 = 0;
            Gvar.var_214 = 0;
            await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        if (Gvar.var_218 >= 30) {
            await Stand.func032();
            if (Gvar.var_211 <= 0) {
                await Main.func009(); // ゲーム基本動作フレーム処理
                return;
            }
            if (Gvar.var_218 != 0) {
                Gvar.var_217 = 1;
                Gvar.var_213 = 0;
                Gvar.var_214 = 0;
                await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                return;
            }
        }
        if (Gvar.to_freeze >= 1) {
            Gvar.var_213 = 0;
            Gvar.var_214 = 0;
            await Main.func022(); // 氷状態の動作処理
            return;
        }
        if (Gvar.var_219 >= 1) {
            Gvar.var_213 = 0;
            Gvar.var_214 = 0;
            await Main.func025(); // 寝ている時の動作処理
            return;
        }
        if (Gvar.var_178 >= 1) {
            Gvar.var_213 = 0;
            Gvar.var_214 = 0;
            await Main.func021(); // 波紋攻撃を喰らって麻痺している状態の動作処理
            return;
        }

        if (Gvar.var_213 == 1 && Gvar.var_214 == 0) {
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_213 = 0;
            Gvar.var_198 = 0;
            Gvar.var_195 = 0;
            Gvar.var_196 = 0; // Mフラグ:メニュー画面 Func.func054
            Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            Gvar.var_221 = 1;
            Gvar.var_222 = 1;
            Gvar.var_223 = Gvar.var_224 + 10;
            Gvar.var_225 = Gvar.var_226;
            // アイテム個数 Gvar.var_225 が10以下であれば
            if (Gvar.var_225 <= 10) {
                Gvar.item_page_number = 1;
                Gvar.Y_axis_item_position = (Gvar.var_225 - 1) * 22 + 45;
                Gvar.var_229 = 44;
                Gvar.var_230 = 45;
            }
            // アイテム個数 Gvar.var_225 が10より多ければ
            if (Gvar.var_225 > 10) {
                Gvar.item_page_number = 2;
                Gvar.Y_axis_item_position = (Gvar.var_225 - 11) * 22 + 45;
                Gvar.var_229 = 44;
                Gvar.var_230 = 45;
            }
            // アイテム個数 Gvar.var_225 が0であれば
            if (Gvar.var_225 == 0) {
                Gvar.item_page_number = 3;
                Gvar.Y_axis_item_position = 45;
                Gvar.var_229 = 44;
                Gvar.var_230 = 45;
                Gvar.var_231 = 1;
                Gvar.var_222 = 10;
            }

            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_225].Var0;
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音 
            await Func.func462(); // アイテムidごとに区分分け関数
            return;
        }
        Gvar.var_213 = 0;
        Gvar.var_214 = 0;
        Gvar.var_234 = 0;
        if (Gvar.var_12 == 1) {
            Gvar.conf_keyon = Adap.getkey(122); // キーA入力確認
            if (Gvar.conf_keyon == 1) {
                await Func.func184();
                return;
            }
        }
        Gvar.var_236 = Gvar.var_66;
        Gvar.var_237 = Gvar.var_67;
        // 仗助のdiscを使用した際のランダム動作処理
        if (Gvar.var_139 >= 1) {
            await Func.func079(); // 仗助のdisc、ドッピオのdiscを使用した際のランダム動作処理
            return;
        }
        // ドッピオのdiscを使用した際のランダム動作処理
        if (Gvar.var_144 >= 1) {
            await Func.func079(); // 仗助のdisc、ドッピオのdiscを使用した際のランダム動作処理
            return;
        }
        await Func.func080(false); // 各キー入力確認 OFF?
        if (Gvar.key_Shift_on == 1) { // キーShift入力確認
            await Main.func013();
            return;
        }
        if (Gvar.key_X_on == 1 && Gvar.var_71[Gvar.var_66][Gvar.var_67] != 0) {
            await Main.func014();
            return;
        }
        if (Gvar.key_X_on == 0) {
            Gvar.var_240 = 0;
            Gvar.var_241 = 0;
        }
        if (Gvar.key_Z_on == 1) { // キーZ入力確認
            Gvar.var_243 = 1;
            await Func.func635(); // ディアボロの攻撃動作処理
            return;
        }
        if (Gvar.key_A_on == 1) { // キーA入力確認
            Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            Gvar.var_195 = 1;
            Gvar.var_196 = 1; // Mフラグ:メニュー画面 Func.func054
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_247 = 1;
            Gvar.var_248 = 1;
            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051();
            await Func.func053(); // メニュー画面呼び出し
            return;
        }
        if (Gvar.key_S_on == 1) { // キーS入力確認
            Gvar.var_225 = Gvar.var_250;
            Gvar.var_251 = 1;
            await Func.func647(); // 射撃攻撃動作処理
            return;
        }
        if (Gvar.key_C_on == 1) { // キーC入力確認
            await Func.func051();
            await Main.func010(); // Cキーを押した際のその場所での旋回処理
            return;
        }
        // Ver0.1401にて追加。入力判定：射撃disc「フー・ファイターズ」を所持している場合に発動(F)
        if (Gvar.key_F_on == 1) {
            if (Gvar.var_224 >= 1) {
                Gvar.var_225 = 0; // Ver0.1402にて追加。必ず0からスタートすることで漏れが無くなる。
                for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                    // Gvar.var_225 = Adap.rnd(Gvar.var_224); // Gvar.var_225 = 0; の方が良くない？
                    // Gvar.var_225 = Gvar.var_225 + 1;
                    //var_225 = Gvar.var_475;
                    Gvar.var_221 = 0;
                    Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                    Gvar.var_231 = 0;
                    if (Gvar.var_233[Gvar.var_225].Var0 == 401) {
                        Gvar.activated_disc_id = Gvar.var_233[Gvar.var_225].Var0
                        await item401(); // No = 401 フー・ファイターズの発動処理
                        break;
                    }
                    Gvar.var_225 = Gvar.var_225 + 1; // Ver0.1402にて追加。ループの最後に1プラスする。
                }
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "ﾌｰ･ﾌｧｲﾀｰｽﾞを持っていないぞ";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                Gvar.var_234 = 0;
                Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                Gvar.var_217 = 1;
                await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                return;
            }
            if (Gvar.var_224 == 0) {
                Gvar.comments_row1 = "";
                Gvar.comments_row2 = "";
                Gvar.var_295 = "";
                Gvar.comments_row1a = "";
                Gvar.comments_row2a = "";
                Gvar.var_298 = "";
                Gvar.var_299 = 0;
                Gvar.comments_row1 = "ﾌｰ･ﾌｧｲﾀｰｽﾞを持っていないぞ";
                Gvar.var_198 = 1;
                Gvar.var_300 = 0;
                Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
                Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
                await Func.func047();
                Gvar.var_234 = 0;
                Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
                Gvar.var_217 = 1;
                await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                return;
            }
            return;
        }                
        if (Gvar.var_253 == 1) {
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 7;
            await Main.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_254 == 1 && Gvar.var_255 == 1) { // var_254:入力判定：[←] & var_255:入力判定[↑]
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 7;
            await Main.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_256 == 1) {
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 9;
            await Main.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_257 == 1 && Gvar.var_255 == 1) { // var_257:入力判定：[→] & var_255:入力判定[↑]
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 9;
            await Main.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_258 == 1) {
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 1;
            await Main.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_254 == 1 && Gvar.var_259 == 1) { // var_254:入力判定：[←] & var_259:入力判定[↓]
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 1;
            await Main.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_260 == 1) {
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 3;
            await Main.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_257 == 1 && Gvar.var_259 == 1) { // var_257:入力判定：[→] & var_259:入力判定[↓]
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 3;
            await Main.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_254 == 1) { // var_254:入力判定：[←]
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_199 = 4;
            await Main.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_257 == 1) { // var_257:入力判定：[→]
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_199 = 6;
            await Main.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 8;
            await Main.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 2;
            await Main.func015(); // ディアボロの移動処理(座標計算処理)
            return;
        }
        if (Gvar.var_261 == 1 && Gvar.var_262 == 0) { // Gvar.var_262 == 0 なので、Gvar.dungeon_number = 0 でなければ
            await Func.func044();
            return;
        }
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func009}
