import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func075(this: any) {
        Adap.dbgprt(75);
        Gvar.var_271 = 1;
        Gvar.var_594 = 1;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1 && Gvar.current_floor == 12) {
            Gvar.comments_row1 = "注意せよ！ この階は";
            Gvar.comments_row2 = "「エンヤ婆」によって守られている！";
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2 && Gvar.current_floor == 30) {
            Gvar.comments_row1 = "注意せよ！ この階は";
            Gvar.comments_row2 = "「ﾚｸｲｴﾑ･ｼﾞｮﾙﾉ」によって守られている！";
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3 && Gvar.current_floor == 99) {
            Gvar.comments_row1 = "注意せよ！ この階は";
            Gvar.comments_row2 = "「ウンガロ」によって守られている！";
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5 && Gvar.current_floor == Gvar.var_20) {
            Gvar.comments_row1 = "注意せよ！ この階は";
            Gvar.comments_row2 = "「" + Gvar.var_24 + "」によって守られている！";
        }
        if (Gvar.special_floor == 1) { // 虹村屋敷
            Gvar.comments_row1 = "注意せよ！ この階は";
            Gvar.comments_row2 = "「虹村形兆」によって守られている！";
        }
        if (Gvar.special_floor == 2) { // 杜王町埠頭
            Gvar.comments_row1 = "注意せよ！ この階は";
            Gvar.comments_row2 = "「チリペッパー」によって守られている！";
        }
        if (Gvar.special_floor == 3) { // 吉良屋敷
            Gvar.comments_row1 = "注意せよ！ この階は";
            Gvar.comments_row2 = "「吉良吉影」によって守られている！";
        }
        if (Gvar.special_floor == 4) { // 没特殊階層「星屑の十字軍」ボスは承太郎
            Gvar.comments_row1 = "注意せよ！ この階は";
            Gvar.comments_row2 = "「承太郎」によって守られている！";
        }
        if (Gvar.special_floor == 5) { // 没特殊階層「ビンの中」ボスは毒グモ
            Gvar.comments_row1 = "注意せよ！ この階は";
            Gvar.comments_row2 = "「毒グモ」によって守られている！";
        }
        if (Gvar.special_floor == 6) { // 没特殊階層「ナチス実験施設」ボスはサンタナ
            Gvar.comments_row1 = "注意せよ！ この階は";
            Gvar.comments_row2 = "「サンタナ」によって守られている！";
        }
        if (Gvar.special_floor == 7) { // 広大な砂漠
            Gvar.comments_row1 = "広大な砂漠だ！";
            Gvar.comments_row2 = "";
        }
        if (Gvar.special_floor == 8) { // 幻覚の迷宮
            Gvar.comments_row1 = "幻覚の迷宮だ！";
            Gvar.comments_row2 = "";
        }
        if (Gvar.special_floor == 9) { // 幽霊部屋
            Gvar.comments_row1 = "注意せよ！ この階は";
            Gvar.comments_row2 = "「エンポリオ」によって守られている！";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Adap.DSPLAY(178);
        for (let cnt1 = 0; cnt1 < 40; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_594 = Gvar.var_594 + 1;
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
        }
        Gvar.var_271 = 0;
        Gvar.var_594 = 0;
        for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func075}
