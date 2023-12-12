import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 632 アイテム「キリマンジャロの雪解け水」を使用した時の効果
async function item632(this: any) {
        Gvar.var_360 = 0;
        Gvar.var_350 = Gvar.var_350 + 10;
        if (Gvar.var_350 > Gvar.var_567) {
            Gvar.var_350 = Gvar.var_567;
        }
        Gvar.var_1214 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            Gvar.var_1256 = 1;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1256 = 2;
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1256 = 0;
        Gvar.var_127 = 0;  // 瞼が落ちるや目を切り裂かれるなどで視界が見えななくなった時のフラグOFF
        Gvar.var_132 = 0;
        Gvar.var_119 = 1;
        Gvar.var_121 = 1; // Gvar.var_121 罠が見えるようになるフラグON
        Gvar.var_120 = 1;
        if (Gvar.shageki_disc_id == 401) {
            await Func.func429();
            if (Gvar.var_233[Gvar.var_556].Var3 == 99) {
                Gvar.item_message2 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのパワーは全開だ！";
            }
            if (Gvar.var_233[Gvar.var_556].Var3 <= 98) {
                Gvar.var_233[Gvar.var_556].Var3 = Gvar.var_233[Gvar.var_556].Var3 + 5;
                if (Gvar.var_233[Gvar.var_556].Var3 >= 99) {
                    Gvar.var_233[Gvar.var_556].Var3 = 99;
                }
                Gvar.item_message2 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのｴﾈﾙｷﾞｰが増加した！";
            }
        }
        return;
}

export {item632}
