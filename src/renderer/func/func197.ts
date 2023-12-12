import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
async function func197(this: any) {
        Adap.dbgprt(197);
        Gvar.var_907 = 20;
        Adap.color(0, 0, 0);

        Adap.gmode(4, null, null, 100);
        Adap.pos(107, 70);
        Adap.gcopy(12, 0, 0, 200, 153 + Gvar.var_907);
        Adap.color(255, 255, 255);
        if (Gvar.var_900 == 1 || Gvar.var_901 == 1 || Gvar.var_902 == 1 || Gvar.var_903 == 1 || Gvar.var_904 == 1 || Gvar.var_905 == 1) {
            Adap.color(150, 150, 150);
        }
        Adap.line(110, 71, 303, 71);
        Adap.line(110, 219 + Gvar.var_907, 303, 219 + Gvar.var_907);
        Adap.line(109, 72, 109, 217 + Gvar.var_907);
        Adap.line(305, 72, 305, 217 + Gvar.var_907);
        Adap.pset(110, 72);
        Adap.pset(304, 72);
        Adap.pset(110, 218 + Gvar.var_907);
        Adap.pset(304, 218 + Gvar.var_907);

        Adap.font("ＭＳ　Ｐゴシック", 16, 1);
        Adap.color(255, 255, 255);
        if (Gvar.var_900 == 1 || Gvar.var_901 == 1 || Gvar.var_902 == 1 || Gvar.var_903 == 1 || Gvar.var_904 == 1 || Gvar.var_905 == 1) {
            Adap.color(150, 150, 150);
        }
        Adap.pos(145, 90);
        Adap.mes("ゲームスピード");
        Adap.pos(145, 110);
        Adap.mes("メッセージ色");
        Adap.pos(145, 130);
        Adap.mes("キーコンフィグ");
        Adap.pos(145, 150);
        Adap.mes("ゲームパッド");
        Adap.pos(145, 170);
        Adap.mes("画面サイズ");
        Adap.pos(145, 190);
        Adap.mes("マップ色変更");
        if (Gvar.dungeon_number == 99 || Gvar.var_637 != 0) {
            Adap.color(150, 150, 150); //灰色
        }
        Adap.pos(145, 210);
        Adap.mes("通信モード");
        Adap.color(255, 255, 255);
        if (Gvar.var_900 == 1 || Gvar.var_901 == 1 || Gvar.var_902 == 1 || Gvar.var_903 == 1 || Gvar.var_904 == 1 || Gvar.var_905 == 1) {
            Adap.color(150, 150, 150); //灰色
        }
        Adap.pos(265, 90);
        if (Gvar.var_686 == 30) {
            Adap.mes("超速");
        }
        if (Gvar.var_686 == 40) {
            Adap.mes("速い");
        }
        if (Gvar.var_686 == 50) {
            Adap.mes("標準");
        }
        if (Gvar.var_686 == 60) {
            Adap.mes("遅い");
        }
        if (Gvar.var_686 == 70) {
            Adap.mes("超遅");
        }
        Adap.color(255, 255, 255);
        if (Gvar.dungeon_number == 99) {
            Adap.color(150, 150, 150); //灰色
        }
        if (Gvar.var_900 == 1 || Gvar.var_901 == 1 || Gvar.var_902 == 1 || Gvar.var_903 == 1 || Gvar.var_904 == 1 || Gvar.var_905 == 1) {
            Adap.color(150, 150, 150); //灰色
        }
        Adap.pos(265, 210);
        if (Gvar.var_407 == 0) {
            Adap.mes("OFF");
        }
        if (Gvar.var_407 == 1) {
            Adap.mes("ON");
        }
        Adap.color(255, 255, 255);
        if (Gvar.var_899 == 0) {
            Adap.pos(112, 87);
        }
        if (Gvar.var_899 == 1) {
            Adap.pos(112, 107);
        }
        if (Gvar.var_899 == 2) {
            Adap.pos(112, 127);
        }
        if (Gvar.var_899 == 3) {
            Adap.pos(112, 147);
        }
        if (Gvar.var_899 == 4) {
            Adap.pos(112, 167);
        }
        if (Gvar.var_899 == 5) {
            Adap.pos(112, 187);
        }
        if (Gvar.var_899 == 6) {
            Adap.pos(112, 207);
        }
        Adap.gmode(2); // 透明色付きコピー。 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされない。
        if (Gvar.var_900 == 0) {
            // Adap.buffer(8)は"img1.gif"。X座標70、Y座標50から切り取り長さ X方向25、Y方向20
            // 絵:カーソルアイコン(鏃)
            Adap.gcopy(8, 70, 50, 25, 20);
        }
        return;
}

export {func197}
