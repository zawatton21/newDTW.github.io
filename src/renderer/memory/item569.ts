import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 569 ポルナレフのdiscの効果
async function item569(this: any) {
        for (let cnt2 = 0; cnt2 < 12; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_601 = Adap.rnd(5);
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_601 == 0) {
            Gvar.comments_row1 = "ｱﾌﾞﾄﾞｩﾙが死んだ時の事を思い出した。";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_601 == 1) {
            Gvar.comments_row1 = "ｲｷﾞｰが死んだ時の事を思い出した。";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_601 == 2) {
            Gvar.comments_row1 = "ｼｪﾘｰが死んだ時の事を思い出した。";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_601 == 3) {
            Gvar.comments_row1 = "ｱﾌﾞﾄﾞｩﾙが死んだ時の事を思い出した。";
            Gvar.comments_row2 = "";
        }
        if (Gvar.var_601 == 4) {
            Gvar.comments_row1 = "階段でDIOに会った時の事を思い出した。";
            Gvar.comments_row2 = "";
        }
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
            Gvar.comments_row1a = "「このドグサレがァァ――――ッ!!」";
            Gvar.comments_row2a = "";
        }
        if (Gvar.var_601 == 1) {
            Gvar.comments_row1a = "「今のおれには…";
            Gvar.comments_row2a = "悲しみで泣いている時間なんかないぜ」";
        }
        if (Gvar.var_601 == 2) {
            Gvar.comments_row1a = "「しかるべき報いを与えてやるッ！」";
            Gvar.comments_row2a = "";
        }
        if (Gvar.var_601 == 3) {
            Gvar.comments_row1a = "「やつの気持ちを無駄にはしない";
            Gvar.comments_row2a = "　生きるために戦う……！」";
        }
        if (Gvar.var_601 == 4) {
            Gvar.comments_row1a = "このままではまずい…はね返さなくてな…";
            Gvar.comments_row2a = "おれに勇気をくれッ！";
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理

        Adap.DSPLAY(182);
        Gvar.var_1299 = 3;
        Gvar.var_271 = 1;
        Gvar.var_1297 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1297++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1297 = 0;
        Gvar.var_104 = 1; // Gvar.var_104 攻撃力が上がるフラグON
        if (Gvar.var_109 == 1) {
            Gvar.var_104 = 0; // Gvar.var_104 攻撃力が上がるフラグOFF
            Gvar.var_109 = 0;
        }
        return;
}

export {item569}
