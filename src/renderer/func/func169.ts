import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func169(this: any) {
        Adap.dbgprt(169);
        Adap.redraw(0);
        await Func.func168(); // ダンジョンクリア時のスコア判定
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func339();
        }
        await Func.func080(); // 各キー入力確認
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_794 == 1 && Gvar.var_792[Gvar.var_793][Gvar.var_786][4] != 0) {
                Gvar.var_800 = 1;
                await Func.func178(); // 処理確認タイマー(3m秒)
                await Func.func171();  // 配列処理 (装備discの能力、Track等の並び替え)
                return;
            }
            if (Gvar.var_794 == 2 && Gvar.var_792[Gvar.var_793][Gvar.var_786][7] != 0) {
                Gvar.var_800 = 1;
                await Func.func178(); // 処理確認タイマー(3m秒)
                await Func.func171();  // 配列処理 (装備discの能力、Track等の並び替え)
                return;
            }
            if (Gvar.var_794 == 3 && Gvar.var_792[Gvar.var_793][Gvar.var_786][10] != 0) {
                Gvar.var_800 = 1;
                await Func.func178(); // 処理確認タイマー(3m秒)
                await Func.func171();  // 配列処理 (装備discの能力、Track等の並び替え)
                return;
            }
        }
        if (Gvar.key_X_on == 1) {
            Gvar.var_794 = 0;
            await Func.func178(); // 処理確認タイマー(3m秒)
            await Func.func166();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_794 != 3) { // var_259:入力判定[↓]
            Gvar.var_794 = Gvar.var_794 + 1;
            Gvar.var_795 = Gvar.var_795 + 15;
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func339();
            }
            await Func.func169();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_794 == 3) { // var_259:入力判定[↓]
            Gvar.var_794 = 1;
            Gvar.var_795 = 225;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func339();
            }
            await Func.func169();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_794 != 1) { // var_255:入力判定[↑]
            Gvar.var_794 = Gvar.var_794 - 1;
            Gvar.var_795 = Gvar.var_795 - 15;
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func339();
            }
            await Func.func169();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_794 == 1) { // var_255:入力判定[↑]
            Gvar.var_794 = 3;
            Gvar.var_795 = 255;
            for (let cnt2 = 0; cnt2 < 5; ++cnt2) {
                await Func.func339();
            }
            await Func.func169();
            return;
        }
        await Func.func169();
        return;
}

export {func169}
