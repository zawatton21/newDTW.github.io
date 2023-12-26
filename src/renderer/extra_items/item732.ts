import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// Ver0.1401にて追加。No = 732 ベルトのバックルを使用した時の効果
async function item732(this: any) {
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "できるわけがないッ！";
        Gvar.comments_row2 = "";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音

        // もし装備している射撃ディスクがタスクact1であれば
        if (Gvar.shageki_disc_id == 415) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ま･･････待て･･････";
            Gvar.comments_row2 = "本物があるはずだ！";
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "「『本物』の長方形は」";
            Gvar.comments_row2 = "      これでいいんだな？";


            //var_475 = Gvar.var_225;
            //var_2091 = Gvar.var_225;
            //Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
            //var_1240 = 3;
            //Gvar.base_disc_list = Gvar.var_233[Gvar.var_475].Var0;
            //Gvar.with_disc_list = Gvar.var_233[Gvar.var_2091].Var0;
            //Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
            //await Func.func492(); // アイテムリスト呼び出し
            let shageki_kaisu: number;

            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                Gvar.var_475 = Adap.rnd(Gvar.var_224);
                Gvar.var_475 = Gvar.var_475 + 1;
                if (Gvar.var_233[Gvar.var_475].Var0 == 415) {
                    shageki_kaisu = Gvar.var_233[Gvar.var_475].Var3;
                    break;
                }
            }
            
            Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
            Gvar.disc_rarity = Gvar.var_233[Gvar.var_475].Var13;
            await Func.func492(); // アイテムリスト呼び出し
            // Gvar.target_item_name = Gvar.item_name;
            //for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            //    Gvar.var_233[Gvar.var_475]["Var" + cnt2] = 0;
            //}

            Gvar.var_233[Gvar.var_475].Var0 = 414;
            Gvar.var_233[Gvar.var_475].Var3 = shageki_kaisu;
            Gvar.shageki_disc_id = 414;


            //var_233[Gvar.var_475].Var0 = 415;
            //Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;
            //Gvar.disc_rarity = Gvar.var_233[Gvar.var_475].Var13;
            //await Func.func492(); // アイテムリスト呼び出し
            //Gvar.target_item_name = Gvar.item_name;

            //var_233[Gvar.var_475].Var0 = 414;
            //var_862[414][0] = 1;
            //var_233[Gvar.var_475].Var20 = 414;
            //var_225 = Gvar.var_2091;
            //await Func.func430();
            //Gvar.belongings_item_list = Gvar.var_233[Gvar.var_475].Var0;

            //Gvar.shageki_disc_id = 414;
            Gvar.var_198 = 1; // メッセージボックス表示
            Gvar.var_300 = 0; // コメント枠表示??
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            //Gvar.comments_row1 = Gvar.comments_row1a;
            //Gvar.comments_row2 = Gvar.comments_row2a;

            //await Func.func047();
            //await Func.func050();
            Gvar.var_1572 = 1;
            Gvar.var_271 = 1;
            // Adap.DSPLAY(233);
            Adap.DSPLAY(225);

            Gvar.comments_row1 = "なんと、「タスクact1」のDISCは";
            Gvar.comments_row2 = "「タスクact2」のDISCになった！";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            //await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
                        
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                // await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1572++;
            }
            Gvar.var_1572 = 0;
            Gvar.var_271 = 0;

            //Gvar.comments_row1 = "なんと、「タスクact1」のDISCは";
            //Gvar.comments_row2 = "「タスクact2」のDISCになった！";
            //var_198 = 1;
            //var_300 = 0;
            //var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            //var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            //var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            //await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_1252 = 0;
            Gvar.var_1950 = 0;
            Gvar.var_217 = 1;
            await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        Gvar.item_message1 = "しかし何も起こらなかった…";
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        return;
}

export {item732}
