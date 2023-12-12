import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func713(this: any) {
        Adap.dbgprt(713);
        await Func.func337(); // メッセージ関係呼び出し
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_259 == 1 && Gvar.var_3118 == 1) { // var_259:入力判定[↓]
            Gvar.var_516 = Gvar.var_516 + 19;
            Gvar.var_3118 = 0;
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.var_255 == 1 && Gvar.var_3118 == 0) { // var_255:入力判定[↑]
            Gvar.var_516 = Gvar.var_516 - 19;
            Gvar.var_3118 = 1;
            await Func.func337(); // メッセージ関係呼び出し
        }
        if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
            if (Gvar.var_3118 == 1) {
                await Func.func051();
                await Func.func715();
                return;
            }
            if (Gvar.var_3118 == 0 && Gvar.payment_amount > 0) {
                await Func.func051();
                Gvar.var_198 = 0;
                Gvar.var_1202 = 0;
                for (let cnt3 = 0; cnt3 < 6; ++cnt3) {
                    await Func.func337(); // メッセージ関係呼び出し
                }
                await Func.func709(); // トニオさんに話しかけてアイテムを購入する際のメッセージ処理
                return;
            }
            if (Gvar.var_3118 == 0) {
                await Func.func051();
                await Func.func717();
                return;
            }
        }
        if (Gvar.key_X_on == 1 && Gvar.payment_amount > 0) {
            await Func.func051();
            Gvar.var_198 = 0;
            Gvar.var_1202 = 0;
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Func.func709(); // トニオさんに話しかけてアイテムを購入する際のメッセージ処理
            return;
        }
        if (Gvar.key_X_on == 1) {
            await Func.func051();
            await Func.func717();
            return;
        }
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func713();
        return;
}

export {func713}
