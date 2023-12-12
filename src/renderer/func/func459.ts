import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func459(this: any) {
        Adap.dbgprt(459);
        Gvar.var_195 = 0;
        Gvar.var_196 = 0;
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "道具をひとつも持っていないぞ";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 3; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1240 = 0;
        Gvar.var_1999 = 0;
        Gvar.var_2000 = 0;
        Gvar.var_2001 = 0;
        Gvar.var_1950 = 0;
        Gvar.var_2002 = 0;
        Gvar.var_2003 = 0;
        Gvar.var_2004 = 0;
        Gvar.var_2005 = 0;
        Gvar.var_234 = 0;
        Gvar.var_1252 = 0;
        Gvar.var_2006 = 0;
        Gvar.var_1208 = 0;
        Gvar.var_2007 = 0;
        Gvar.var_1667 = 0;
        Gvar.var_2008 = 0;
        Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
        Gvar.var_1965 = 0;
        await Func.func009(); // ゲーム基本動作フレーム処理
        return;
}

export {func459}
