import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

// No = 312 エアロスミスの発動処理
async function item312(this: any) {
        await Func.func506(); // discの発動をした際に、修正値を減少させる(0の時はdisc消滅させる)関数
        if (Gvar.var_172 == 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "発動能力がパワーアップしている！";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            await Func.func340(); // キー入力による選択処理
        }
        Gvar.var_2311 = Adap.dim(300);
        Gvar.var_271 = 1;
        Gvar.var_1224 = Gvar.var_199;
        Gvar.var_1225 = 5;
        Gvar.var_1517 = 160;
        Gvar.var_1518 = 140;
        for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1224 = 1;
        Gvar.var_1225 = 0;
        for (let cnt2 = 0; cnt2 < 80; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_1224 = 10;
        Gvar.var_1225 = 0;
        Gvar.var_1517 = 680;
        Gvar.var_1518 = 160;
        for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_271 = 0;
        Gvar.var_1224 = 0;
        Gvar.var_403 = "ｴｱﾛｽﾐｽの弾丸が直撃！";
        Gvar.var_2217 = 1;
        Gvar.var_2312 = Gvar.var_97 + 1;
        Gvar.var_2313 = 0;
        for (let cnt2 = 0; cnt2 < 200; ++cnt2) {
            Gvar.var_2194 = Adap.rnd(Gvar.var_2312);
            if (Gvar.var_2194 != Gvar.var_124 && Gvar.var_83[Gvar.var_2194].Var0 != 0 && Gvar.var_2311[Gvar.var_2194] == 0) {
                Gvar.var_2308 = Gvar.var_565 * 5;
                Gvar.var_2219 = Adap.rnd(3);
                Gvar.var_2308 = Gvar.var_2308 + Gvar.var_2219;
                if (Gvar.var_172 >= 1) { // Gvar.var_172 発動効果が向上するフラグがONであれば
                    Gvar.var_2308 = Gvar.var_2308 * 2;
                }
                Gvar.var_209 = Gvar.var_2308;
                Gvar.var_402 = Gvar.var_2194;
                await Func.func705();
                for (let cnt4 = 0; cnt4 < 2; ++cnt4) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                Gvar.var_2311[Gvar.var_2194] = 1;
                Gvar.var_2313 = Gvar.var_2313 + 1;
            }
            if (Gvar.var_2313 == 10) {
                break;
            }
        }
        Gvar.var_2313 = 0;
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_2217 = 0;
        if (Gvar.var_2254 == 1) {
            Gvar.var_2254 = 0;
            await Func.func508(); // スタンドパワーが力尽きて消滅した時の表示2
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {item312}
