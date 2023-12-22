import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// No = 102 キングクリムゾンの発動処理
async function item102(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「キング・クリムゾン」！！";
        Gvar.comments_row2 = "我以外の時間は消し飛ぶ！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_393 = Adap.dim(10, 10);
        if (Gvar.var_123 == 0) {
            Gvar.var_396 = Gvar.y_axis_map_image; // map.gifのy軸座標指定。gcopy(5)
        }
        Gvar.var_123 = 1;
        Gvar.y_axis_map_image = 17; // map.gifのy軸座標指定。gcopy(5)
        Gvar.var_114 = 0;
        Gvar.var_463 = 0;
        Gvar.var_464 = 0;
        Gvar.var_461 = 0;
        Gvar.var_462 = 0;
        Adap.DSPLAY(185);
        Gvar.var_271 = 1;
        Gvar.var_1491 = 1;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1491++;
        }
        Gvar.var_271 = 0;
        Gvar.var_1491 = 0;
        Gvar.var_2306 = 1;
        Gvar.var_1845 = 4;
        Gvar.var_2102 = Gvar.var_66;
        Gvar.var_2103 = Gvar.var_67;
        Gvar.var_347 = Gvar.var_66;
        Gvar.var_348 = Gvar.var_67;
        await Func.func556(); // 敵をフロアへ出現させる処理
        Gvar.var_2306 = 0;
        Gvar.var_1845 = 0;
        Gvar.var_124 = Gvar.var_97;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Func.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}


export {item102}
