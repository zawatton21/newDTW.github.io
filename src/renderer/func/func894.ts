import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func894(this: any) {
        Adap.dbgprt(894);
        Gvar.var_3511 = 6251;
        Gvar.var_3512 = await Adap.ginfo(4);
        if (Gvar.var_3512 >= 330) {
            Gvar.var_3513 = await Adap.ginfo(4) - 320 - 8;
            Gvar.var_3514 = await Adap.ginfo(5);
        }
        if (Gvar.var_3512 < 330) {
            Gvar.var_3513 = await Adap.ginfo(4) + 320 + 15;
            if (Gvar.var_10 == 1) {
                Gvar.var_3513 = Gvar.var_3513 + 200;
            }
            Gvar.var_3514 = await Adap.ginfo(5);
        }
        Gvar.var_3515 = Adap.sdim(256, 4, Gvar.length3 = null);
        Gvar.var_3516 = Adap.dim(30);

        Gvar.var_1068 = Adap.sdim(300, 30);
        Gvar.var_3517 = Adap.sdim(512 + 1);

        Gvar.var_1058 = Adap.dim(30, 30);

        Gvar.var_3518 = Adap.dim(30, 30);
        Gvar.var_3519 = Adap.dim(30);
        Gvar.var_3520 = Adap.sdim(40);
        Gvar.var_3521 = Adap.sdim(300, 40, Gvar.length3 = null);
        Gvar.var_1069 = Adap.dim(10, 40, Gvar.length3 = null, null);
        Gvar.var_1070 = Adap.sdim(100, 10, Gvar.length3 = null);
        Gvar.var_1071 = Adap.sdim(100, 10, Gvar.length3 = null);
        Gvar.var_3522 = "";
        Gvar.var_3079 = 0;
        Gvar.var_534 = 0;
        Gvar.var_624 = 0;
        Gvar.var_3523 = 0;
        Adap.screen_(33, 320, 460, 4, Gvar.var_3513, Gvar.var_3514);
        Adap.width(320, 200);
    
        Adap.SetWindowLongA(Gvar.hwnd, -8, Gvar.var_15);
        Gvar.var_3524 = (1 && 2) * (-2) - 16;
        Adap.gsel( Gvar.window_id = await Adap.ginfo(3), Gvar.window_mode = -1);

        Adap.gsel(await Adap.ginfo(3), 1);
        Adap.title("ログイン");
        Adap.cls(4);
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        Adap.pos(35, 35);
        Adap.gcopy(17, 0, 560, 280, 120);
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, 80);
        Adap.pos(0, 0);
        Adap.gcopy(12, 0, 0, 320, 200);
        Adap.font("MS ゴシック", 12);
        Adap.color(255, 255, 255);
        Adap.pos(10, 10);
        Adap.mes("ニックネーム");
        Adap.pos(10, 30);
        Adap.input(Gvar.var_40, 110, null, 10);
        Adap.pos(10, 60);
        Adap.mes("接続先アドレス");
        Adap.pos(10, 80);
        Adap.input(Gvar.var_39, 110, null, 20);
        Adap.pos(10, 110);
        Adap.mes("使用ポート");
        Adap.pos(10, 130);
        Adap.input(Gvar.var_3511, 110, null, 5);
        Adap.pos(10, 160);
        Adap.objsize(Gvar.data0 = 80, Gvar.data1 = 24);
        Adap.button("接続", Func.func895);
        stop();
}

export {func894}
