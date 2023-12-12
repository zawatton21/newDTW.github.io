import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func048(this: any) {
        Adap.dbgprt(48);
        if (Gvar.var_195 == 1) {
            Gvar.var_198 = 0;
            Gvar.var_300 = 0;
            return;
        }
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 100);
        Adap.pos(20, 250);
        Adap.gcopy(12, 0, 0, 40, 64);　
        Adap.pos(60, 250);
        Adap.gcopy(12, 40, 0, 40, 64);
        Adap.pos(100, 250);
        Adap.gcopy(12, 80, 0, 40, 64);
        Adap.pos(140, 250);
        Adap.gcopy(12, 120, 0, 40, 64);
        Adap.pos(180, 250);
        Adap.gcopy(12, 160, 0, 40, 64);
        Adap.pos(220, 250);
        Adap.gcopy(12, 200, 0, 40, 64);
        Adap.pos(260, 250);
        Adap.gcopy(12, 240, 0, 40, 64);
        Adap.pos(300, 250);
        Adap.gcopy(12, 280, 0, 30, 64);
        Adap.color(255, 255, 255);
        Adap.line(23, 252, 325, 252);
        Adap.line(23, 312, 325, 312);
        Adap.line(22, 253, 22, 310);
        Adap.line(327, 253, 327, 310);
        Adap.pset(23, 253);
        Adap.pset(326, 253);
        Adap.pset(23, 311);
        Adap.pset(326, 311);
        await Func.func049(); // メッセージ処理
        Adap.gmode(2, null, null, null);
        if (Gvar.var_299 == 0) {
            Gvar.var_496 = 9;
        }
        if (Gvar.var_299 == 1) {
            Gvar.var_496 = 18;
        }
        if (Gvar.var_299 == 2) {
            Gvar.var_496 = 27;
        }
        if (Gvar.var_299 == 3) {
            Gvar.var_496 = 36;
        }
        if (Gvar.var_299 == 4) {
            Gvar.var_496 = 45;
        }
        if (Gvar.var_299 == 5) {
            Gvar.var_496 = 54;
        }
        if (Gvar.var_299 == 6) {
            Gvar.var_496 = 63;
        }
        Adap.pos(0, 252);
        Adap.gcopy(10, 0, Gvar.var_496, 40, 60);
        Adap.pos(40, 252);
        Adap.gcopy(10, 40, Gvar.var_496, 40, 60);
        Adap.pos(80, 252);
        Adap.gcopy(10, 80, Gvar.var_496, 40, 60);
        Adap.pos(120, 252);
        Adap.gcopy(10, 120, Gvar.var_496, 40, 60);
        Adap.pos(160, 252);
        Adap.gcopy(10, 160, Gvar.var_496, 40, 60);
        Adap.pos(200, 252);
        Adap.gcopy(10, 200, Gvar.var_496, 40, 60);
        Adap.pos(240, 252);
        Adap.gcopy(10, 240, Gvar.var_496, 40, 60);
        Adap.pos(280, 252);
        Adap.gcopy(10, 280, Gvar.var_496, 40, 60);
        Adap.pos(320, 252);
        Adap.gcopy(10, 320, Gvar.var_496, 40, 60);
        Adap.gmode(2, null, null, null);
        return;
}

export {func048}
