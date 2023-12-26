import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 206 オアシスの発動処理
async function item206(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "周囲がドロドロになってきた…";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_159 = 1;
        Gvar.var_289 = Gvar.var_66 - 1;
        if (Gvar.var_289 < 0) {
            Gvar.var_289 = 0;
        }
        Gvar.var_290 = Gvar.var_66 + 1;
        if (Gvar.var_290 > Gvar.var_33) {
            Gvar.var_290 = Gvar.var_33;
        }
        Gvar.var_291 = Gvar.var_67 + 1;
        if (Gvar.var_291 > Gvar.var_34) {
            Gvar.var_291 = Gvar.var_34;
        }
        Gvar.var_292 = Gvar.var_67 - 1;
        if (Gvar.var_292 < 0) {
            Gvar.var_292 = 0;
        }
        Gvar.var_345 = 0;
        Gvar.var_346 = Adap.dim(10, 10);
        if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 0) {
            Gvar.var_347 = Gvar.var_66;
            Gvar.var_348 = Gvar.var_67;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[0][1] = Gvar.var_347;
            Gvar.var_346[0][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_289][Gvar.var_67] == 0) {
            Gvar.var_347 = Gvar.var_289;
            Gvar.var_348 = Gvar.var_67;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[4][1] = Gvar.var_347;
            Gvar.var_346[4][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_290][Gvar.var_67] == 0) {
            Gvar.var_347 = Gvar.var_290;
            Gvar.var_348 = Gvar.var_67;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[6][1] = Gvar.var_347;
            Gvar.var_346[6][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_291] == 0) {
            Gvar.var_347 = Gvar.var_66;
            Gvar.var_348 = Gvar.var_291;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[2][1] = Gvar.var_347;
            Gvar.var_346[2][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_292] == 0) {
            Gvar.var_347 = Gvar.var_66;
            Gvar.var_348 = Gvar.var_292;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[8][1] = Gvar.var_347;
            Gvar.var_346[8][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_289][Gvar.var_291] == 0) {
            Gvar.var_347 = Gvar.var_289;
            Gvar.var_348 = Gvar.var_291;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[1][1] = Gvar.var_347;
            Gvar.var_346[1][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_290][Gvar.var_291] == 0) {
            Gvar.var_347 = Gvar.var_290;
            Gvar.var_348 = Gvar.var_291;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[3][1] = Gvar.var_347;
            Gvar.var_346[3][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_289][Gvar.var_292] == 0) {
            Gvar.var_347 = Gvar.var_289;
            Gvar.var_348 = Gvar.var_292;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[7][1] = Gvar.var_347;
            Gvar.var_346[7][2] = Gvar.var_348;
        }
        if (Gvar.var_71[Gvar.var_290][Gvar.var_292] == 0) {
            Gvar.var_347 = Gvar.var_290;
            Gvar.var_348 = Gvar.var_292;
            await Func.func622();
            Gvar.var_345 = 1;
            Gvar.var_346[9][1] = Gvar.var_347;
            Gvar.var_346[9][2] = Gvar.var_348;
        }
        if (Gvar.var_345 == 1) {
    
            Adap.DSPLAY(123);
            for (let cnt3 = 0; cnt3 < 5; ++cnt3) {
                Gvar.var_349++;
                await Func.func337(); // メッセージ関係呼び出し
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_349 = 0;

            Gvar.var_346 = Adap.dim(10, 10);
        }
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item206}
