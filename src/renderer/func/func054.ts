import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func054(this: any) {
        Adap.dbgprt(54);
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(12, 37);
        Adap.gcopy(12, 0, 0, 123, 53);
        Adap.color(255, 255, 255);
        Adap.line(15, 39, 130, 39);
        Adap.line(15, 86, 130, 86);
        Adap.line(14, 40, 14, 84);
        Adap.line(132, 40, 132, 84);
        Adap.pset(15, 40);
        Adap.pset(131, 40);
        Adap.pset(15, 85);
        Adap.pset(131, 85);

        Adap.font(Gvar.font_type = "ＭＳ Ｐゴシック", Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.color(255, 255, 255);
        Adap.pos(33, 47);
        Adap.mes("道具　状態");
        Adap.mes("足元　設定");
        Adap.color(255, 255, 255);

        Adap.font("MS ゴシック", 18, 1);
        Adap.pos(Gvar.var_245, Gvar.var_246);
        Adap.mes(">");
        Adap.pos(Gvar.var_245 + 1, Gvar.var_246);
        Adap.mes(">");
        Adap.pos(Gvar.var_245 + 2, Gvar.var_246);
        Adap.mes(">");
        Adap.gmode(2, null, null, null);
        return;
}

export {func054}
