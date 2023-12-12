import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func905(this: any) {
        Adap.dbgprt(905);
        // No = 1 なので、ホテルの外
        if (Gvar.dungeon_number == 1) {
            Gvar.var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはホテルの外に出た";
        }
        // No = 2 なので、レクイエムの大迷宮
        if (Gvar.dungeon_number == 2) {
            Gvar.var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはレクイエムの大迷宮に入った";
        }
        // No = 3 なので、ディアボロの試練
        if (Gvar.dungeon_number == 3) {
            Gvar.var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛはさらなる試練に向かった";
        }
        // No = 4 なので、一巡後の世界
        if (Gvar.dungeon_number == 4) {
            Gvar.var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは一巡後の世界へ進んだ";
        }
        // No = 5 なので、鉄獄(鉄の牢獄)
        if (Gvar.dungeon_number == 5) {
            Gvar.var_3561 = "行橙ﾃﾞｨｱﾎﾞﾛは" + Gvar.var_21 + "に入った";
        }
        Adap.tcpput(Gvar.var_3561, Gvar.var_1050);
        Adap.tcpput("\n", Gvar.var_1050);
        await Func.func907();
        return;
}

export {func905}
