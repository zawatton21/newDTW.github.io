import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'


async function func862(this: any) {
        Adap.dbgprt(862);

        if (Gvar.mousex < 330 && Gvar.mousex > 10 && Gvar.mousey > 10 && Gvar.mousey < 330 && await Adap.ginfo(2) == 0 && await Adap.ginfo(0) > Gvar.var_3284 && await Adap.ginfo(0) < Gvar.var_3286 && await Adap.ginfo(1) > Gvar.var_3285 && await Adap.ginfo(1) < Gvar.var_3287) {
            Gvar.var_3315 = Gvar.var_3279;
            Gvar.var_3316 = Gvar.var_3280;
            if (Gvar.var_3315 < 5 || Gvar.var_3315 > 56 || Gvar.var_3316 < 5 || Gvar.var_3316 > 37) {
                await Func.func851();
                return;
            }
            if (Gvar.var_82[Gvar.var_3315][Gvar.var_3316] != 0) {
                Gvar.var_3266 = 7;
                Gvar.var_3140 = Gvar.var_82[Gvar.var_3315][Gvar.var_3316];
                Gvar.enemy_list = Gvar.var_83[Gvar.var_3140].Var0;
                Gvar.var_3317 = "p" + Gvar.enemy_list + "e";
                Gvar.var_3318 = Adap.instr(Gvar.var_3319, 0, Gvar.var_3317);
                Gvar.var_3320 = Math.floor(Gvar.var_3318 / 12);
                Gvar.var_3246 = Gvar.var_3320;
                Gvar.var_3247 = Gvar.var_3246;
                Adap.clrobj(Gvar.data0 = 2, Gvar.data1 = 2);
                Adap.objsize(135);
                Adap.pos(Gvar.var_3229 + 44, Gvar.var_3230);
                Adap.combox(Gvar.var_3246, 100, Gvar.var_890);
                Gvar.var_3275 = Gvar.var_83[Gvar.var_3140].Var16;
                Gvar.var_3293 = Gvar.var_3275;
                Gvar.var_3278 = Gvar.var_3292[Gvar.var_3246];
                await Func.func848();
                Gvar.var_3247 = Gvar.var_3246;
                Gvar.var_3266 = 7;
                Adap.objsel(0);
                await Func.func851();
                return;
            }
            if (Gvar.var_65[Gvar.var_3315][Gvar.var_3316] != 0) {
                Gvar.var_3266 = 6;
                await Func.func851();
                return;
            }
            if (Gvar.var_77[Gvar.var_3315][Gvar.var_3316] != 0) {
                Gvar.var_3266 = 8;
                Gvar.var_3140 = Gvar.var_77[Gvar.var_3315][Gvar.var_3316];
                Gvar.var_3321 = Gvar.var_78[Gvar.var_3140].Var0;
                Gvar.var_3317 = "p" + Gvar.var_3321 + "e";
                Gvar.var_3318 = Adap.instr(Gvar.var_3322, 0, Gvar.var_3317);
                Gvar.var_3320 = Math.floor(Gvar.var_3318 / 12);
                Gvar.var_873 = Gvar.var_3320;
                Gvar.var_3248 = Gvar.var_873;
                Adap.clrobj(Gvar.data0 = 3, Gvar.data1 = 3);
                Adap.objsize(135);
                Adap.pos(Gvar.var_3225 + 44, Gvar.var_3226);
                Adap.combox(Gvar.var_873, 100, Gvar.var_874);
                Gvar.var_3251 = 0;
                if (Gvar.var_3321 >= 100 && Gvar.var_3321 < 400) {
                    Gvar.var_3251 = 1;
                    Gvar.var_3254 = Gvar.var_78[Gvar.var_3140].Var4;
                    Gvar.var_3257 = Gvar.var_3254;
                }
                if (Gvar.var_3321 >= 400 && Gvar.var_3321 < 500) {
                    Gvar.var_3251 = 2;
                    Gvar.var_3255 = Gvar.var_78[Gvar.var_3140].Var3;
                    Gvar.var_3258 = Gvar.var_3255;
                }
                if (Gvar.var_3321 >= 800 && Gvar.var_3321 < 900) {
                    Gvar.var_3251 = 3;
                    Gvar.var_3255 = Gvar.var_78[Gvar.var_3140].Var7;
                    Gvar.var_3258 = Gvar.var_3255;
                }
                if (Gvar.var_3321 == 1) {
                    Gvar.var_3251 = 4;
                    Gvar.var_3256 = Math.floor(Gvar.var_78[Gvar.var_3140].Var13 / 100);
                    Gvar.var_3259 = Gvar.var_3256;
                }
                if (Gvar.var_3251 == 0) {
                    await Func.func845();
                }
                if (Gvar.var_3251 == 1) {
                    await Func.func842();
                }
                if (Gvar.var_3251 == 2) {
                    await Func.func843();
                }
                if (Gvar.var_3251 == 3) {
                    await Func.func843();
                }
                if (Gvar.var_3251 == 4) {
                    await Func.func844();
                }
                Gvar.var_3252 = Gvar.var_3251;
                await Func.func851();
                return;
            }
            if (Gvar.var_80[Gvar.var_3315][Gvar.var_3316] != 0) {
                Gvar.var_3266 = 9;
                Gvar.var_3140 = Gvar.var_80[Gvar.var_3315][Gvar.var_3316];
                Gvar.var_3323 = Gvar.var_81[Gvar.var_3140][0];
                Gvar.var_3317 = "p" + Gvar.var_3323 + "e";
                Gvar.var_3318 = Adap.instr(Gvar.var_3324, 0, Gvar.var_3317);
                Gvar.var_3320 = Math.floor(Gvar.var_3318 / 12);
                Gvar.var_3249 = Gvar.var_3320;
                Gvar.var_3250 = Gvar.var_3249;
                Adap.clrobj(Gvar.data0 = 4, Gvar.data1 = 4);
                Adap.objsize(135);
                Adap.pos(Gvar.var_3227 + 44, Gvar.var_3228);
                Adap.combox(Gvar.var_3249, 100, Gvar.var_886);
                await Func.func851();
                return;
            }
            if (Gvar.var_73[Gvar.var_3315][Gvar.var_3316] != 0) {
                Gvar.var_3266 = 5;
                await Func.func851();
                return;
            }
            if (Gvar.var_71[Gvar.var_3315][Gvar.var_3316] == 14 || Gvar.var_71[Gvar.var_3315][Gvar.var_3316] == 21 || Gvar.var_71[Gvar.var_3315][Gvar.var_3316] == 22 || Gvar.var_71[Gvar.var_3315][Gvar.var_3316] == 23 || Gvar.var_71[Gvar.var_3315][Gvar.var_3316] == 24) {
                Gvar.var_3266 = 1;
                await Func.func851();
                return;
            }
            if (Gvar.var_71[Gvar.var_3315][Gvar.var_3316] == 0) {
                Gvar.var_3266 = 2;
                await Func.func851();
                return;
            }
            if (Gvar.var_71[Gvar.var_3315][Gvar.var_3316] == 13) {
                Gvar.var_3266 = 3;
                await Func.func851();
                return;
            }
            if (Gvar.var_71[Gvar.var_3315][Gvar.var_3316] != 0 && Gvar.var_71[Gvar.var_3315][Gvar.var_3316] <= 12) {
                Gvar.var_3266 = 0;
                Gvar.var_3270 = Gvar.var_71[Gvar.var_3315][Gvar.var_3316];
                Gvar.var_3245 = Gvar.var_3270;
                Gvar.var_3267 = Gvar.var_3245;
        
                Adap.clrobj(1, 1);
                Adap.objsize(50);
                Adap.pos(Gvar.var_3211 + 45, Gvar.var_3212);
                Adap.combox(Gvar.var_3245, 100, "部屋\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12");
                await Func.func851();
                return;
            }
        }
        await Func.func851();
        return;
}

export {func862}
