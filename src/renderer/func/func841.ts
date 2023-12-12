import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func841(this: any) {
        Adap.dbgprt(841);
        if (Gvar.var_637 >= 1) {
            Gvar.var_637 = 0;
            Adap.gsel( Gvar.window_id = 37, Gvar.window_mode = -1);
            Adap.screen_(0, 340, 340, 2);
        
            Adap.SetWindowLongA(Gvar.hwnd, -8, Gvar.var_15);
            if (Gvar.var_640 == 0) {
                Gvar.var_10 = 0;
                Adap.width(340, 340);
            }
            if (Gvar.var_640 == 1) {
                Gvar.var_640 = 0;
                Gvar.var_10 = 1;
                Adap.width(680, 680);
            }
            Adap.gsel( Gvar.window_id = 0, Gvar.window_mode = 2);
            Adap.chgdisp();
        }
        Adap.onexit(0);
        Gvar.var_3211 = 353;
        Gvar.var_3212 = 50;
        Gvar.var_3213 = Gvar.var_3211;
        Gvar.var_3214 = Gvar.var_3212 + 44;
        Gvar.var_3215 = Gvar.var_3211;
        Gvar.var_3216 = Gvar.var_3214 + 44;
        Gvar.var_3217 = Gvar.var_3213 + 44;
        Gvar.var_3218 = Gvar.var_3214;
        Gvar.var_3219 = Gvar.var_3215 + 44;
        Gvar.var_3220 = Gvar.var_3216;
        Gvar.var_3221 = Gvar.var_3219 + 44;
        Gvar.var_3222 = Gvar.var_3220;
        Gvar.var_3223 = Gvar.var_3217 + 44;
        Gvar.var_3224 = Gvar.var_3218;
        Gvar.var_3225 = Gvar.var_3223 + 44;
        Gvar.var_3226 = Gvar.var_3224;
        Gvar.var_3227 = Gvar.var_3221 + 44;
        Gvar.var_3228 = Gvar.var_3222;
        Gvar.var_3229 = Gvar.var_3225;
        Gvar.var_3230 = Gvar.var_3226 - 44;
        Gvar.var_3231 = Gvar.var_3211;
        Gvar.var_3232 = Gvar.var_3216 + 60;
        Gvar.var_3233 = 3;
        Gvar.var_3234 = 2;
        Gvar.var_3235 = Gvar.var_31 - 3;
        Gvar.var_3236 = Gvar.var_32 - 4;
        Gvar.var_3237 = Gvar.var_31 - 2;
        Gvar.var_3238 = Gvar.var_32 - 3;
        Gvar.var_3239 = Gvar.var_3231 - 5;
        Gvar.var_3240 = Gvar.var_3232 - 2;
        Gvar.var_3241 = 185;
        Gvar.var_3242 = 135;
        Gvar.var_3243 = Gvar.var_3225 + 40 + 20;
        Gvar.var_3244 = Gvar.var_3216 + 60;
        Gvar.var_869 = 1;
        await Func.func888();
        Gvar.var_869 = 0;
        await Func.func890();
        await Func.func892();
        Adap.objsize(1);
        Adap.pos(800, 800);
        Adap.button("ダミー", Func.func850);
        Adap.objsize(50);
        Adap.pos(Gvar.var_3211 + 45, Gvar.var_3212);
        Adap.combox(Gvar.var_3245, 100, "部屋\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12");
        Gvar.var_3246 = 0;
        Gvar.var_3247 = 0;
        Gvar.var_873 = 0;
        Gvar.var_3248 = 0;
        Gvar.var_3249 = 0;
        Gvar.var_3250 = 0;
        Gvar.var_3251 = 0;
        Gvar.var_3252 = 0;
        Adap.objsize(135);
        Adap.pos(Gvar.var_3229 + 44, Gvar.var_3230);
        Adap.combox(Gvar.var_3246, 100, Gvar.var_890);
        Adap.pos(Gvar.var_3225 + 44, Gvar.var_3226);
        Adap.combox(Gvar.var_873, 100, Gvar.var_874);
        Adap.pos(Gvar.var_3227 + 44, Gvar.var_3228);
        Adap.combox(Gvar.var_3249, 100, Gvar.var_886);
        Adap.objsize(60);
        Adap.pos(Gvar.var_3243, Gvar.var_3244 + 28);
        Adap.button("読込", Func.func868);
        Adap.pos(Gvar.var_3243, Gvar.var_3244 + 56);
        Adap.button("保存", Func.func872);
        Adap.pos(Gvar.var_3243, Gvar.var_3244);
        Adap.button("実行", Func.func871);
        Adap.objsize(100);
        Adap.pos(Gvar.var_3243, Gvar.var_3244 + 114);
        Gvar.var_3253 = 0;
        Adap.combox(Gvar.var_3253, 100, "フラグ変更\n未クリア(白)\nクリア済(黄)\n製作中(赤)\n完成(水色)");
        Gvar.var_3254 = 0;
        Gvar.var_3255 = 0;
        Gvar.var_3256 = 0;
        Gvar.var_3257 = 0;
        Gvar.var_3258 = 0;
        Gvar.var_3259 = 0;
        await Func.func846();
        Adap.objsize(60);
        Adap.pos(Gvar.var_3243 + 70, Gvar.var_3244 + 56);
        Adap.button("戻る", Func.func849);
        Adap.pos(Gvar.var_3243 + 70, Gvar.var_3244 + 28);
        Adap.button("初期化", Func.func865);
        Gvar.var_3260 = 0;
        Gvar.var_3261 = 0;
        Gvar.var_3262 = 0;
        await Func.func856();
        await Func.func847();
        Adap.width(340, 340);
        Gvar.y_axis_map_image = 2;
        Gvar.var_3263 = Gvar.y_axis_map_image;
        Gvar.var_3264 = 1;
        Gvar.var_3265 = 1;
        Gvar.var_3266 = 6;
        Gvar.var_3245 = 1;
        Gvar.var_3267 = 1;
        Gvar.var_3268 = 0;
        Gvar.var_3269 = 0;
        Gvar.var_3270 = 1;
        Gvar.var_3271 = 0;
        Gvar.var_3272 = "";
        Gvar.var_626 = 1;
        if (Gvar.var_3273 == 1) {
            Gvar.var_3274 = 1;
            await Func.func869();
            return;
        }
        if (Gvar.var_3273 == 0) {
            await Func.func875();
        }
        await Func.func851();
        return;
}

export {func841}
