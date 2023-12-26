import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// ダンジョン内のSPW財団の男に話しかけた時のメッセージ処理
async function func755(this: any) {
        Adap.dbgprt(755);
        Gvar.var_243 = 0;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "SPW財団の男「ひとつ情報があります」";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「SPW財団の調査によると、次の階では";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_3142 = Adap.sdim(50, 20, null); 
        Gvar.var_3143 = Gvar.current_floor;
        Gvar.current_floor = Gvar.current_floor + 1;
        await Func.func627(); // 各ダンジョンごとの出現敵設定
        Gvar.var_3144 = 0;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            if (Gvar.var_977[Gvar.var_3144] == 0) {
                break;
            }
            Gvar.enemy_list = Gvar.var_977[Gvar.var_3144];
            await Func.func626();
            Gvar.var_3142[Gvar.var_3144] = Gvar.enemy_name;
            Gvar.var_3144 = Gvar.var_3144 + 1;
        }
        Gvar.current_floor = Gvar.var_3143;
        Gvar.var_3145 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_3144; ++cnt1) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "" + Gvar.var_3142[Gvar.var_3145];
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func094(); // メッセージ送りの際の効果音
            await Func.func047();
            await Func.func050();
            await Func.func340(); // キー入力による選択処理
            Gvar.var_3145 = Gvar.var_3145 + 1;
        }
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "が出現するようです。";
        Gvar.comments_row2a = "お気をつけて」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_198 = 0;
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func755}
