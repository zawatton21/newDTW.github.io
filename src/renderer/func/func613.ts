import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func613(this: any) {
        Adap.dbgprt(613);
        if (Gvar.var_83[Gvar.var_673].Var12 >= 1 || Gvar.var_83[Gvar.var_673].Var13 == 1 || Gvar.var_83[Gvar.var_673].Var17 == 1 || Gvar.var_83[Gvar.var_673].Var23 == 1) {
            Gvar.var_83[Gvar.var_673].Var18 = 0;
            return;
        }
        Gvar.var_1393 = Gvar.var_673;
        Adap.gsel(19);
        Adap.color(150, 150, 150);
        Adap.boxf(0, 0, 680, 680);
        Adap.gsel(0);
        Gvar.var_271 = 1;
        Gvar.var_1392 = 1;
        Gvar.var_83[Gvar.var_673].Var18 = 0;
        Gvar.var_1165 = 1;
        Gvar.var_389 = 2;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ｸﾞﾚｲﾄﾌﾙﾃﾞｯﾄﾞの老化攻撃だ！";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
            if (Gvar.var_1392 == 11) {
        
                Adap.DSPLAY(161);
            }
            await Func.func337(); // メッセージ関係呼び出し
            Gvar.var_1392 = Gvar.var_1392 + 1;
        }
        Gvar.var_1392 = 0;
        Gvar.var_271 = 0;
        await Func.func340(); // キー入力による選択処理
        Gvar.var_389 = 0;
        if (Gvar.to_freeze >= 1) {
            await Main.func023();
        }
        if (Gvar.equip_disc[207] == 1) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "しかし 装備中のDISCによって";
            Gvar.comments_row2a = "老化攻撃を防いだ！";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_1165 = 0;
            Gvar.var_240 = 0;
            Gvar.var_83[Gvar.var_1393].Var6 = 1;
            Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            Gvar.var_2197 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        if (Gvar.nouryoku_disc_id == 202 || Gvar.shageki_disc_id == 404) {
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "しかし 装備中のDISCによって";
            Gvar.comments_row2a = "体が冷やされ 無事だった！";
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func050();
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Gvar.var_1165 = 0;
            Gvar.var_240 = 0;
            Gvar.var_83[Gvar.var_1393].Var6 = 1;
            Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
            Gvar.var_2197 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            return;
        }
        Adap.DSPLAY(164);
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "精神力が下がってしまった！";
        Gvar.comments_row2a = "";
        Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
        Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
        await Func.func050();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        Gvar.var_565 = Gvar.var_565 - 1;
        if (Gvar.var_565 < 0) {
            Gvar.var_565 = 0;
        }
        Gvar.var_1165 = 0;
        Gvar.var_240 = 0;
        Gvar.var_83[Gvar.var_1393].Var6 = 1;
        Gvar.var_2708 = 1; // 敵が攻撃してこなくなるフラグON
        Gvar.var_2197 = 1;
        for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        return;
}

export {func613}
