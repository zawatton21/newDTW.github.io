import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 201 イエローテンパランスの発動処理
async function item201(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "このオレのスタンド「黄の節制」に";
        Gvar.comments_row2 = "弱点はない！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Adap.DSPLAY(123);
        Gvar.var_271 = 1;
        Gvar.var_1310 = 1;
        Gvar.var_374 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1310++;
            if (Gvar.var_1310 == 7) {
                Gvar.var_1310 = 1;
            }
            Gvar.var_300 = 0;
        }
        Gvar.var_374 = 0;
        Gvar.var_271 = 0;
        Gvar.var_1310 = 0;
        if (Gvar.var_114 != 0) {
            if (Gvar.var_83[Gvar.var_114].Var0 == 78) {
                Gvar.var_114 = 0;
            }
        }
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "このフロアで熱と冷気に強くなった！";
        Gvar.comments_row2a = "";
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_173 = 1;
        for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item201}
