import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 584 ヌケサクのdiscの効果
async function item584(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1264 = 0;
        Gvar.var_601 = Adap.rnd(5);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "嫌な記憶がよみがえってきた…";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        if (Gvar.var_601 == 0) {
            Gvar.comments_row1a = "「黙って引っ込んでろよ　いいな…」";
            Gvar.comments_row2a = "";
        }
        if (Gvar.var_601 == 1) {
            Gvar.comments_row1a = "「よけいなことをしてみろ";
            Gvar.comments_row2a = "おれたちが てめーを殺すぜ」";
        }
        if (Gvar.var_601 == 2) {
            Gvar.comments_row1a = "「おとなしく補欠してろヌケサク」";
            Gvar.comments_row2a = "";
        }
        if (Gvar.var_601 == 3) {
            Gvar.comments_row1a = "「きさまの能力では";
            Gvar.comments_row2a = "ジョースターたちを倒すのは無理だ」";
        }
        if (Gvar.var_601 == 4) {
            Gvar.comments_row1a = "「しょせんきさまはただの吸血鬼」";
            Gvar.comments_row2a = "";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Adap.DSPLAY(151);
        Gvar.var_1299 = 4;
        Gvar.var_271 = 1;
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1297 = 0;
        Gvar.var_109 = 1;
        if (Gvar.var_104 == 1) { // Gvar.var_104 攻撃力が上がるフラグがONであれば
            Gvar.var_104 = 0; // Gvar.var_104 攻撃力が上がるフラグOFF
            Gvar.var_109 = 0;
        }
        Adap.DSPLAY(164);
        return;
}

export {item584}
