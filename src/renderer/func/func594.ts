import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func594(this: any) {
        Adap.dbgprt(594);
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "闇の中から蘇りし者…";
        Gvar.comments_row2 = "リンプ・ビズキッド…";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "我とともに来たれ…";
        Gvar.comments_row2a = "闇とともに喜びを分かち…ぶつぶつ…";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        await Func.func050();
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_2839 = Gvar.current_floor;
        Gvar.var_2840 = Gvar.current_floor;
        if (Gvar.current_floor == 0) {
            Gvar.var_2840 = 99;
        }
        Gvar.current_floor = Adap.rnd(Gvar.var_2840);
        Gvar.current_floor = Gvar.current_floor + 1;
        await Func.func627(); // 各ダンジョンごとの出現敵設定
        // No = 0 なので、拠点(ホテル、亀、)
        if (Gvar.dungeon_number == 0 || Gvar.dungeon_number == 99) {
            Gvar.var_953 = 37;
        }
        Gvar.var_2537 = Gvar.var_953;
        Gvar.current_floor = Gvar.var_2839;
        Gvar.var_1845 = 1;
        Gvar.var_2353 = Gvar.var_673;
        await Func.func556(); // 敵をフロアへ出現させる処理
        Gvar.var_673 = Gvar.var_2353;
        Gvar.var_2537 = 0;
        Gvar.var_1845 = 0;
        if (Gvar.var_2110 != 0) {
            Adap.DSPLAY(170);
        }
        if (Gvar.var_2110 == 0) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "しかし何も起こらなかった…";
            Gvar.comments_row2a = "";
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_2197 = 1;
            return;
        }
        await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            Gvar.var_300 = 0;
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func594}
