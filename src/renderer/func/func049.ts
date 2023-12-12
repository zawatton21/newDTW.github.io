import { Gvar } from '../variable'
import * as Adap from '../adapter/index'

async function func049(this: any) {
        Adap.dbgprt(49);
        Adap.gsel(10);
        Adap.color(0, 0, 0);
        Adap.boxf(0, 0, 340, 200);
        Adap.font(Gvar.font_type = "ＭＳ Ｐゴシック", Gvar.font_size = 16, Gvar.font_style = 1);
        Adap.pos(30, 0);

        //Adap.color1(Gvar.var_25_x, Gvar.var_26_x, Gvar.var_27_x);
        Adap.mes("");
        Adap.color1(Gvar.var_25_x, Gvar.var_26_x, Gvar.var_27_x);     
        Adap.mes(Gvar.comments_row1);
        Adap.mes(Gvar.comments_row2);
        Adap.mes(Gvar.var_295);
        Adap.color1(Gvar.var_25_x, Gvar.var_26_x, Gvar.var_27_x);
        Adap.mes(Gvar.comments_row1a);
        Adap.mes(Gvar.comments_row2a);
        Adap.mes(Gvar.var_298);
        
        Adap.gsel(0);
        return;
}

export {func049}
