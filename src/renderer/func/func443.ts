import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func443(this: any) {
        Adap.dbgprt(443);
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_198 = 0;
        if (Gvar.var_220 == 1) { // 道具画面(メニュー画面/道具)が開いている状態
            Gvar.var_1965 = 1;
        }
        Gvar.item_page_number = 1;
        Gvar.Y_axis_item_position = 45;
        Gvar.var_225 = 1;
        Gvar.var_223 = Gvar.var_224 + 10;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        Gvar.open_item_menue = 1; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        await Func.func461(); // 道具画面(メニュー画面/道具)での動作処理 (アイテム表示の並び等)
        return;
}

export {func443}
