import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 113 クラッシュの発動処理
async function item113(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_570 == 0) {
            Gvar.bufferid_stand_disc = 11; //Adap.buffer(11)は"img_stand0.gif"
        }
        if (Gvar.var_570 == 1) {
            Gvar.bufferid_stand_disc = 1; // Adap.buffer(1)は"img_stand1.gif"
        }
        if (Gvar.var_570 == 2) {
            Gvar.bufferid_stand_disc = 16; // Adap.buffer(16)は"img_stand2.gif"
        }
        if (Gvar.var_570 == 3) {
            Gvar.bufferid_stand_disc = 29; // Adap.buffer(29)は"img_stand3.gif"
        }
        Gvar.var_1283 = 1;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「クラッシュ！くらいつけッ！」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_2261 = Gvar.kougeki_disc_id ;
        Gvar.kougeki_disc_id  = 113;
        Gvar.var_243 = 1;
        Gvar.var_347 = Gvar.var_66;
        Gvar.var_348 = Gvar.var_67;
        if (Gvar.var_199 == 4) {
            Gvar.var_347 = Gvar.var_347 - 1;
        }
        if (Gvar.var_199 == 6) {
            Gvar.var_347 = Gvar.var_347 + 1;
        }
        if (Gvar.var_199 == 8) {
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 2) {
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 1) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 3) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 + 1;
        }
        if (Gvar.var_199 == 7) {
            Gvar.var_347 = Gvar.var_347 - 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        if (Gvar.var_199 == 9) {
            Gvar.var_347 = Gvar.var_347 + 1;
            Gvar.var_348 = Gvar.var_348 - 1;
        }
        Adap.DSPLAY(104);
        if (Gvar.var_82[Gvar.var_347][Gvar.var_348] != 0) {
            Gvar.var_314 = Gvar.var_82[Gvar.var_347][Gvar.var_348];
            if (Gvar.var_83[Gvar.var_314].Var0 != 50) {
                Gvar.var_747 = 1;
                for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                await Func.func669();
            }
        }
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1283 = 0;
        Gvar.kougeki_disc_id  = Gvar.var_2261;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item113}
