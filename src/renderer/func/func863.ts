import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func863(this: any) {
        Adap.dbgprt(863);

        if (Gvar.mousex >= Gvar.var_3211 && Gvar.mousex <= Gvar.var_3211 + 40 && Gvar.mousey >= Gvar.var_3212 && Gvar.mousey <= Gvar.var_3212 + 40) {
            Gvar.var_3266 = 0;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
            await Func.func851();
            return;
        }

        if (Gvar.mousex >= Gvar.var_3213 && Gvar.mousex <= Gvar.var_3213 + 40 && Gvar.mousey >= Gvar.var_3214 && Gvar.mousey <= Gvar.var_3214 + 40) {
            Gvar.var_3266 = 1;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
            await Func.func851();
            return;
        }

        if (Gvar.mousex >= Gvar.var_3215 && Gvar.mousex <= Gvar.var_3215 + 40 && Gvar.mousey >= Gvar.var_3216 && Gvar.mousey <= Gvar.var_3216 + 40) {
            Gvar.var_3266 = 2;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
            await Func.func851();
            return;
        }

        if (Gvar.mousex >= Gvar.var_3217 && Gvar.mousex <= Gvar.var_3217 + 40 && Gvar.mousey >= Gvar.var_3218 && Gvar.mousey <= Gvar.var_3218 + 40) {
            Gvar.var_3266 = 3;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
            await Func.func851();
            return;
        }

        if (Gvar.mousex >= Gvar.var_3219 && Gvar.mousex <= Gvar.var_3219 + 40 && Gvar.mousey >= Gvar.var_3220 && Gvar.mousey <= Gvar.var_3220 + 40) {
            Gvar.var_3266 = 4;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
            await Func.func851();
            return;
        }
        if (Gvar.mousex >= Gvar.var_3221 && Gvar.mousex <= Gvar.var_3221 + 40 && Gvar.mousey >= Gvar.var_3222 && Gvar.mousey <= Gvar.var_3222 + 40) {
            Gvar.var_3266 = 5;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
            await Func.func851();
            return;
        }

        if (Gvar.mousex >= Gvar.var_3223 && Gvar.mousex <= Gvar.var_3223 + 40 && Gvar.mousey >= Gvar.var_3224 && Gvar.mousey <= Gvar.var_3224 + 40) {
            Gvar.var_3266 = 6;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
            await Func.func851();
            return;
        }
        if (Gvar.mousex >= Gvar.var_3229 && Gvar.mousex <= Gvar.var_3229 + 40 && Gvar.mousey >= Gvar.var_3230 && Gvar.mousey <= Gvar.var_3230 + 40) {
            Gvar.var_3266 = 7;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
            await Func.func851();
            return;
        }

        if (Gvar.mousex >= Gvar.var_3225 && Gvar.mousex <= Gvar.var_3225 + 40 && Gvar.mousey >= Gvar.var_3226 && Gvar.mousey <= Gvar.var_3226 + 40) {
            Gvar.var_3266 = 8;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
            await Func.func851();
            return;
        }

        if (Gvar.mousex >= Gvar.var_3227 && Gvar.mousex <= Gvar.var_3227 + 40 && Gvar.mousey >= Gvar.var_3228 && Gvar.mousey <= Gvar.var_3228 + 40) {
            Gvar.var_3266 = 9;
            for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
                await Func.func852();
            }
            await Func.func851();
            return;
        }

        if (Gvar.mousex >= 362 && Gvar.mousex <= 517 && Gvar.mousey >= 206 && Gvar.mousey <= 304) {

            Gvar.var_3325 = Math.floor((Gvar.mousex - 362) / 3);
            Gvar.var_3326 = Math.floor((Gvar.mousey - 206) / 3);
            Gvar.var_66 = Gvar.var_3325;
            Gvar.var_67 = Gvar.var_3326;
            if (Gvar.var_66 < 3) {
                Gvar.var_66 = 3;
            }
            if (Gvar.var_66 > 49) {
                Gvar.var_66 = 49;
            }
            if (Gvar.var_67 < 3) {
                Gvar.var_67 = 3;
            }
            if (Gvar.var_67 > 30) {
                Gvar.var_67 = 30;
            }
            await Func.func852();
            await Func.func851();
            return;
        }

        if (Gvar.mousex < 330 && Gvar.mousex > 10 && Gvar.mousey > 10 && Gvar.mousey < 330 && await Adap.ginfo(2) != (-1) && await Adap.ginfo(0) > Gvar.var_3284 && await Adap.ginfo(0) < Gvar.var_3286 && await Adap.ginfo(1) > Gvar.var_3285 && await Adap.ginfo(1) < Gvar.var_3287) {
            Gvar.var_3315 = Gvar.var_3279;
            Gvar.var_3316 = Gvar.var_3280;
            if (Gvar.var_3315 < 5 || Gvar.var_3315 > 56 || Gvar.var_3316 < 5 || Gvar.var_3316 > 37) {
                await Func.func851();
                return;
            }
            if (Gvar.var_3266 == 0) {
                Gvar.var_71[Gvar.var_3315][Gvar.var_3316] = Gvar.var_3270;
                await Func.func864();
            }
            if (Gvar.var_3266 == 1) {
                Gvar.var_71[Gvar.var_3315][Gvar.var_3316] = 14;
                await Func.func864();
            }
            if (Gvar.var_3266 == 2) {
                if (Gvar.var_71[Gvar.var_3315][Gvar.var_3316] != 0) {
                    await Func.func866();
                    Gvar.var_71[Gvar.var_3315][Gvar.var_3316] = 0;
                    await Func.func864();
                }
            }
            if (Gvar.var_3266 == 3) {
                if (Gvar.var_71[Gvar.var_3315][Gvar.var_3316] != 13) {
                    await Func.func866();
                    Gvar.var_71[Gvar.var_3315][Gvar.var_3316] = 13;
                    await Func.func864();
                }
            }
            if (Gvar.var_3266 == 4) {
                if (Gvar.var_73[Gvar.var_3315][Gvar.var_3316] != 0 || Gvar.var_65[Gvar.var_3315][Gvar.var_3316] != 0 || Gvar.var_82[Gvar.var_3315][Gvar.var_3316] != 0 || Gvar.var_77[Gvar.var_3315][Gvar.var_3316] != 0 || Gvar.var_80[Gvar.var_3315][Gvar.var_3316] != 0) {
                    await Func.func866();
                }
            }
            if (Gvar.var_3266 >= 5) {
                if (Gvar.var_71[Gvar.var_3315][Gvar.var_3316] == 0 || Gvar.var_71[Gvar.var_3315][Gvar.var_3316] == 13) {
                    Gvar.var_3294 = 2;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        await Func.func852();
                    }
                    Gvar.var_3294 = 0;
                    await Func.func851();
                    return;
                }
            }
            if (Gvar.var_3266 == 5) {
                if (Gvar.var_73[Gvar.var_3315][Gvar.var_3316] == 0) {
                    await Func.func866();
            
                    Gvar.var_73 = Adap.dim(70, 70, null, null);
                    Gvar.var_73[Gvar.var_3315][Gvar.var_3316] = 1;
                    Gvar.var_3327 = Gvar.var_3315;
                    Gvar.var_3328 = Gvar.var_3316;
                }
            }
            if (Gvar.var_3266 == 6) {
                if (Gvar.var_65[Gvar.var_3315][Gvar.var_3316] == 0) {
                    await Func.func866();
            
                    Gvar.var_65 = Adap.dim(70, 70, null, null);
                    Gvar.var_65[Gvar.var_3315][Gvar.var_3316] = 1;
                    Gvar.var_3329 = Gvar.var_3315;
                    Gvar.var_3330 = Gvar.var_3316;
                }
            }
            if (Gvar.var_3266 == 7 && Gvar.var_3292[Gvar.var_3246] != 0) {
                Gvar.var_3331 = 0;
                if (Gvar.var_82[Gvar.var_3315][Gvar.var_3316] != 0) {
                    Gvar.var_3332 = Gvar.var_82[Gvar.var_3315][Gvar.var_3316];
                    Gvar.var_3331 = Gvar.var_83[Gvar.var_3332].Var0;
                }
                await Func.func866();
                Gvar.var_3333 = 1;
                Gvar.var_3334 = 0;
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    if (Gvar.var_83[Gvar.var_3333].Var0 == 0) {
                        Gvar.var_3334 = 1;
                        break;
                    }
                    Gvar.var_3333++;
                }
                if (Gvar.var_3334 == 0 && Gvar.var_82[Gvar.var_3315][Gvar.var_3316] == 0) {
                    Gvar.var_3294 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        await Func.func852();
                    }
                    Gvar.var_3294 = 0;
                    await Func.func851();
                    return;
                }
                Gvar.var_97 = Gvar.var_3333;
                Gvar.var_82[Gvar.var_3315][Gvar.var_3316] = Gvar.var_97;
                Gvar.var_83[Gvar.var_97].Var0 = Gvar.var_3312;
                Gvar.var_83[Gvar.var_97].Var1 = Gvar.var_3315;
                Gvar.var_83[Gvar.var_97].Var2 = Gvar.var_3316;
                Gvar.var_83[Gvar.var_97].Var16 = Gvar.var_3275;
            }
            if (Gvar.var_3266 == 8 && Gvar.var_884[Gvar.var_873] != 0) {
                Gvar.var_3331 = 0;
                if (Gvar.var_77[Gvar.var_3315][Gvar.var_3316] != 0) {
                    Gvar.var_3332 = Gvar.var_77[Gvar.var_3315][Gvar.var_3316];
                    Gvar.var_3331 = Gvar.var_78[Gvar.var_3332].Var0;
                }
                await Func.func866();
                Gvar.var_3333 = 1;
                Gvar.var_3334 = 0;
                for (let cnt3 = 0; cnt3 < 20; ++cnt3) {
                    if (Gvar.var_78[Gvar.var_3333].Var0 == 0) {
                        Gvar.var_3334 = 1;
                        break;
                    }
                    Gvar.var_3333++;
                }
                if (Gvar.var_3334 == 0 && Gvar.var_77[Gvar.var_3315][Gvar.var_3316] == 0) {
                    Gvar.var_3294 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        await Func.func852();
                    }
                    Gvar.var_3294 = 0;
                    await Func.func851();
                    return;
                }
                Gvar.var_336 = Gvar.var_3333;
                Gvar.var_77[Gvar.var_3315][Gvar.var_3316] = Gvar.var_336;
                Gvar.var_78[Gvar.var_336].Var0 = Gvar.var_3313;
                Gvar.var_78[Gvar.var_336].Var1 = Gvar.var_3315;
                Gvar.var_78[Gvar.var_336].Var2 = Gvar.var_3316;
                if (Gvar.var_78[Gvar.var_336].Var0 >= 100 && Gvar.var_78[Gvar.var_336].Var0 < 400) {
                    Gvar.var_78[Gvar.var_336].Var4 = Gvar.var_3254;
                }
                if (Gvar.var_78[Gvar.var_336].Var0 >= 400 && Gvar.var_78[Gvar.var_336].Var0 < 500) {
                    Gvar.var_78[Gvar.var_336].Var3 = Gvar.var_3255;
                    if (Gvar.var_78[Gvar.var_336].Var3 == 0) {
                        Gvar.var_78[Gvar.var_336].Var3 = 1;
                    }
                }
                if (Gvar.var_78[Gvar.var_336].Var0 >= 800 && Gvar.var_78[Gvar.var_336].Var0 < 900) {
                    Gvar.var_78[Gvar.var_336].Var7 = Gvar.var_3255;
                }
                if (Gvar.var_78[Gvar.var_336].Var0 == 1) {
                    if (Gvar.var_3256 == 0) {
                        Gvar.var_78[Gvar.var_336].Var13 = 1;
                    }
                    if (Gvar.var_3256 >= 1) {
                        Gvar.var_78[Gvar.var_336].Var13 = Gvar.var_3256 * 100;
                    }
                }
            }
            if (Gvar.var_3266 == 9 && Gvar.var_3300[Gvar.var_3249] != 0) {
                Gvar.var_3331 = 0;
                if (Gvar.var_80[Gvar.var_3315][Gvar.var_3316] != 0) {
                    Gvar.var_3332 = Gvar.var_80[Gvar.var_3315][Gvar.var_3316];
                    Gvar.var_3331 = Gvar.var_81[Gvar.var_3332][0];
                }
                await Func.func866();
                Gvar.var_3333 = 1;
                Gvar.var_3334 = 0;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (Gvar.var_81[Gvar.var_3333][0] == 0) {
                        Gvar.var_3334 = 1;
                        break;
                    }
                    Gvar.var_3333++;
                }
                if (Gvar.var_3334 == 0 && Gvar.var_80[Gvar.var_3315][Gvar.var_3316] == 0) {
                    Gvar.var_3294 = 1;
                    for (let cnt4 = 0; cnt4 < 10; ++cnt4) {
                        await Func.func852();
                    }
                    Gvar.var_3294 = 0;
                    await Func.func851();
                    return;
                }
                Gvar.var_337 = Gvar.var_3333;
                Gvar.var_80[Gvar.var_3315][Gvar.var_3316] = Gvar.var_337;
                Gvar.var_81[Gvar.var_337][0] = Gvar.var_3314;
                Gvar.var_81[Gvar.var_337][1] = Gvar.var_3315;
                Gvar.var_81[Gvar.var_337][2] = Gvar.var_3316;
            }
        }
        await Func.func852();
        Gvar.var_3294 = 0;
        await Func.func851();
        return;
}

export {func863}
