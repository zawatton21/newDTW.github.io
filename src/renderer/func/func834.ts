import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

// ダンジョン「一巡後の世界」へ入った時の初期化処理
async function func834(this: any) {
        Adap.dbgprt(834);
        Gvar.var_68 = 0;
        await Func.func723();
        // No = 4 なので、一巡後の世界
        Gvar.dungeon_number = 4;
        Gvar.current_floor = 1;
        if (Gvar.current_floor > Gvar.var_376) {
            Gvar.var_376 = Gvar.current_floor;
        }
        // No = 4 なので、一巡後の世界
        if (Gvar.dungeon_number == 4 && Gvar.current_floor > Gvar.dungeon4_floor) {
            Gvar.dungeon4_floor = Gvar.current_floor;
        }
        Gvar.var_405 = 0;
        Gvar.var_344 = 0;
        Gvar.var_373 = 5;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 4;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 3;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 2;
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_373 = 0;
        Gvar.var_262 = 0; // Gvar.dungeon_number = 0 確認フラグOFF
        await Func.func111();
        await Func.func182();
        // アイテム数20でなければ
        if (Gvar.var_224 != 20) {
            // アイテム数追加関数
            await Func.func062(); // ダンジョン開始時にアイテム欄へ「ネアポリスのピッツァ」を追加
        }
        await Func.func504();
        await Func.func505();
        if (Gvar.var_407 == 1) {
            await Func.func905();
        }
        if (Gvar.var_407 == 2) {
            await Func.func933();
        }
        await Func.func076(); // 各ダンジョンの絵文字読込処理
        for (let cnt1 = 0; cnt1 < 80; ++cnt1) {
            await Func.func339();
        }
        Adap.DSPLAY(101); // 階段を昇るor降りる時の効果音
        await Func.func006();
        return;
}

export {func834}
