import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func005(this: any) {
        Adap.dbgprt(5);
        Adap.onexit(1);
        await Func.func229(); // セーブファイルからデータ読み出し関数
        // No = 0 なので、拠点(ホテル、亀、)
        if (Gvar.dungeon_number == 0) {
            await Func.func159(); // ヴェネチアホテルでのイベントフラグ管理処理
            return;
        }
        await Func.func107(); 
        await Func.func076(); // 各ダンジョンの絵文字読込処理
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            await Func.func339();
        }
        Gvar.var_63 = 0;
        if (Gvar.var_64 == 0) {
            Adap.onexit(1);
            Gvar.var_65[Gvar.var_66][Gvar.var_67] = 1;
            Gvar.var_68 = 1;
            await Func.func331(); // 装備 or 消費アイテムを装備または使用した際の効果においてエフェクトを伴う処理
            await Func.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        await Func.func006();
        return;
}

export {func005}
