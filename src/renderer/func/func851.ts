import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func851(this: any) {
        Adap.dbgprt(851);

        if (Gvar.mousex > 10 && Gvar.mousex < 330 && Gvar.mousey > 10 && Gvar.mousey < 330) {
            Gvar.var_3264 = Math.floor((Gvar.mousex - 10) / 40);
            Gvar.var_3265 = Math.floor((Gvar.mousey - 10) / 40);
        }
        else {
            Gvar.var_3264 = 20;
            Gvar.var_3265 = 20;
        }
        Gvar.var_3279 = Gvar.var_66 + Gvar.var_3264 + 1;
        Gvar.var_3280 = Gvar.var_67 + Gvar.var_3265 + 1;
        Gvar.var_3281 = Math.floor((await Adap.ginfo(10) - await Adap.ginfo(12)) / 2);
        Gvar.var_3282 = Gvar.var_3281;
        Gvar.var_3283 = await Adap.ginfo(11) - 680 - Gvar.var_3282;
        Gvar.var_3284 = await Adap.ginfo(4) + Gvar.var_3281 + 10;
        Gvar.var_3285 = await Adap.ginfo(5) + Gvar.var_3283 + 10;
        Gvar.var_3286 = Gvar.var_3284 + 320;
        Gvar.var_3287 = Gvar.var_3285 + 320;
        Gvar.var_3288 = await Adap.ginfo(4) + Gvar.var_3281;
        Gvar.var_3289 = await Adap.ginfo(5) + Gvar.var_3283;
        Gvar.var_3290 = Gvar.var_3288 + 680;
        Gvar.var_3291 = Gvar.var_3289 + 680;
        await Func.func080(); // 各キー入力確認
        if (Gvar.var_254 == 1 && Gvar.var_66 > 3) {
            Gvar.var_199 = 4;
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_3279 = Gvar.var_66 + Gvar.var_3264 + 1;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func852();
            }
        }
        if (Gvar.var_257 == 1 && Gvar.var_66 < 49) {
            Gvar.var_199 = 6;
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_3279 = Gvar.var_66 + Gvar.var_3264 + 1;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func852();
            }
        }
        if (Gvar.var_255 == 1 && Gvar.var_67 > 3) { // var_255:入力判定[↑]
            Gvar.var_199 = 8;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_3280 = Gvar.var_67 + Gvar.var_3265 + 1;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func852();
            }
        }
        if (Gvar.var_259 == 1 && Gvar.var_67 < 30) { // var_259:入力判定[↓]
            Gvar.var_199 = 2;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_3280 = Gvar.var_67 + Gvar.var_3265 + 1;
            for (let cnt2 = 0; cnt2 < 2; ++cnt2) {
                await Func.func852();
            }
        }
        if (await Adap.ginfo(2) != (-1) && await Adap.ginfo(0) > Gvar.var_3288 && await Adap.ginfo(0) < Gvar.var_3290 && await Adap.ginfo(1) > Gvar.var_3289 && await Adap.ginfo(1) < Gvar.var_3291) {

            if (Gvar.mousex >= 0 && Gvar.mousex <= 10 && Gvar.var_66 > 3) {
                Gvar.var_199 = 4;
                Gvar.var_66 = Gvar.var_66 - 1;
                Gvar.var_3279 = Gvar.var_66 + Gvar.var_3264 + 1;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    await Func.func852();
                }
            }

            if (Gvar.mousex >= 330 && Gvar.mousex <= 680 && Gvar.var_66 < 49) {
                Gvar.var_199 = 6;
                Gvar.var_66 = Gvar.var_66 + 1;
                Gvar.var_3279 = Gvar.var_66 + Gvar.var_3264 + 1;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    await Func.func852();
                }
            }
            if (Gvar.mousey >= 0 && Gvar.mousey <= 10 && Gvar.var_67 > 3) {
                Gvar.var_199 = 8;
                Gvar.var_67 = Gvar.var_67 - 1;
                Gvar.var_3280 = Gvar.var_67 + Gvar.var_3265 + 1;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    await Func.func852();
                }
            }
            if (Gvar.mousey >= 330 && Gvar.mousey <= 680 && Gvar.var_67 < 30) {
                Gvar.var_199 = 2;
                Gvar.var_67 = Gvar.var_67 + 1;
                Gvar.var_3280 = Gvar.var_67 + Gvar.var_3265 + 1;
                for (let cnt3 = 0; cnt3 < 2; ++cnt3) {
                    await Func.func852();
                }
            }
        }
        Gvar.conf_keyon = Adap.getkey(1); // マウス左ボタン入力確認
        if (Gvar.conf_keyon == 1) {
            await Func.func863();
            return;
        }
        Gvar.conf_keyon = Adap.stick(null, 1);
        if (Gvar.conf_keyon == 512) {
            await Func.func862();
            return;
        }
        if (Gvar.var_3246 != Gvar.var_3247) {
            Gvar.var_3278 = Gvar.var_3292[Gvar.var_3246];
            Gvar.var_3275 = 0;
            Gvar.var_3293 = 0;
            await Func.func848();
            Gvar.var_3247 = Gvar.var_3246;
            Gvar.var_3266 = 7;
            Adap.objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
        }
        if (Gvar.var_3275 != Gvar.var_3293) {
            Gvar.var_3293 = Gvar.var_3275;
            Gvar.var_3266 = 7;
            Adap.objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
        }
        if (Gvar.var_873 != Gvar.var_3248) {
            Gvar.var_3251 = 0;
            if (Gvar.var_884[Gvar.var_873] >= 100 && Gvar.var_884[Gvar.var_873] < 400) {
                Gvar.var_3251 = 1;
            }
            if (Gvar.var_884[Gvar.var_873] >= 400 && Gvar.var_884[Gvar.var_873] < 500) {
                Gvar.var_3251 = 2;
            }
            if (Gvar.var_884[Gvar.var_873] >= 800 && Gvar.var_884[Gvar.var_873] < 900) {
                Gvar.var_3251 = 3;
            }
            if (Gvar.var_884[Gvar.var_873] == 1) {
                Gvar.var_3251 = 4;
            }
            if (Gvar.var_3252 != Gvar.var_3251 && Gvar.var_3251 == 0) {
                await Func.func845();
            }
            if (Gvar.var_3252 != Gvar.var_3251 && Gvar.var_3251 == 1) {
                await Func.func842();
            }
            if (Gvar.var_3252 != Gvar.var_3251 && Gvar.var_3251 == 2) {
                await Func.func843();
            }
            if (Gvar.var_3252 != Gvar.var_3251 && Gvar.var_3251 == 3) {
                await Func.func843();
            }
            if (Gvar.var_3252 != Gvar.var_3251 && Gvar.var_3251 == 4) {
                await Func.func844();
            }
            Gvar.var_3252 = Gvar.var_3251;
            Gvar.var_3248 = Gvar.var_873;
            if (Gvar.var_884[Gvar.var_873] != 0) {
                Gvar.var_3266 = 8;
            }
            Adap.objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
        }
        if (Gvar.var_3254 != Gvar.var_3257) {
            Gvar.var_3257 = Gvar.var_3254;
            Gvar.var_3266 = 8;
            Adap.objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
        }
        if (Gvar.var_3255 != Gvar.var_3258) {
            Gvar.var_3258 = Gvar.var_3255;
            Gvar.var_3266 = 8;
            Adap.objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
        }
        if (Gvar.var_3256 != Gvar.var_3259) {
            Gvar.var_3259 = Gvar.var_3256;
            Gvar.var_3266 = 8;
            Adap.objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
        }
        if (Gvar.var_3249 != Gvar.var_3250) {
            Gvar.var_3250 = Gvar.var_3249;
            Gvar.var_3266 = 9;
            Adap.objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
        }
        if (Gvar.var_3245 != Gvar.var_3267) {
            Gvar.var_3267 = Gvar.var_3245;
            Gvar.var_3270 = Gvar.var_3245;
            Gvar.var_3266 = 0;
            Adap.objsel(0);
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
            if (Gvar.var_3270 == 0) {
                Gvar.var_3270 = 1;
            }
        }
        if (Gvar.var_3260 != Gvar.var_3262) {
            Gvar.var_3262 = Gvar.var_3260;
            await Func.func857();
        }
        await Func.func852();
        await Func.func851();
        return;
}

export {func851}
