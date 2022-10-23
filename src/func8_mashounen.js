// 魔少年の問題機能?? ver0.12から追加されている
function func876() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(876);
        yield func233();
        var_65 = dim(70, 70);
        var_62 = 99;
        var_375 = 1;
        var_336 = 0;
        var_97 = 0;
        var_337 = 0;
        yield func877();
        yield func858();
        var_92 = var_3261;
        if (var_92 == 15 || var_92 == 19 || var_92 == 22 || var_92 == 11 || var_92 == 23) {
            var_103 = 1;
        }
        var_199 = 2;
        var_74[var_66][var_67] = 1;
        var_75[var_201] = 1;
        yield func017();
        yield func018();
        if (var_200 == var_201) {
            var_98 = 1;
        }
        chdir(var_30);
        onexit(1);
        var_626 = 0;
        yield func111();
        yield func076();
        for (var cnt1 = 0; cnt1 < 80; ++cnt1) {
            yield func339();
        }
        var_68 = 1;
        yield func331();
        yield func009();
        return;
    });
}
function func877() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(877);
        var_983 = sdim(3000);
        var_71 = dim(70, 70);
        var_65 = dim(70, 70);
        var_82 = dim(70, 70);
        var_77 = dim(70, 70);
        var_80 = dim(70, 70);
        var_73 = dim(70, 70);
        var_986 = dim(100);
        var_486 = dim(80, 21, 30);
        var_76 = dim(100, 5, 3);
        var_74 = dim(70, 70);
        var_75 = dim(20);
        var_83 = CharactorInfo.dim(300);
        var_78 = ItemInfo.dim(300);
        var_81 = dim(300, 7);
        yield func881();
        yield func870();
        yield func878();
        var_3474 = 1;
        for (var cnt1 = 0; cnt1 < var_97; ++cnt1) {
            if (var_83[var_3474].Var10 == var_201) {
                if (var_83[var_3474].Var0 != 101 && var_83[var_3474].Var0 != 102 && var_83[var_3474].Var0 != 103 && var_83[var_3474].Var0 != 104) {
                    var_83[var_3474].Var12 = 0;
                }
            }
            var_3474++;
        }
        return;
    });
}
function func878() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(878);
        var_764 = 0;
        var_1075 = 0;
        for (var cnt1 = 0; cnt1 < var_32; ++cnt1) {
            var_1076 = 0;
            for (var cnt2 = 0; cnt2 < 57; ++cnt2) {
                if (var_71[var_1076][var_1075] == 21 || var_71[var_1076][var_1075] == 22 || var_71[var_1076][var_1075] == 23 || var_71[var_1076][var_1075] == 24) {
                    var_71[var_1076][var_1075] = 14;
                }
                var_1076 = var_1076 + 1;
                var_764 = var_764 + 1;
            }
            var_1075 = var_1075 + 1;
        }
        return;
    });
}
function func879() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(879);
        var_336++;
        var_866 = var_336;
        var_77[var_1076][var_1075] = var_866;
        var_78[var_866].Var0 = var_1770;
        var_78[var_866].Var1 = var_1076;
        var_78[var_866].Var2 = var_1075;
        var_78[var_866].Var9 = var_71[var_1076][var_1075];
        if (var_1770 == 1) {
            var_78[var_866].Var13 = var_3342;
        }
        if (var_1770 >= 100 && var_1770 < 400) {
            var_78[var_866].Var19 = 1;
            var_78[var_866].Var20 = var_78[var_866].Var0;
            var_78[var_866].Var5 = 8;
            var_78[var_866].Var4 = var_3342;
            var_78[var_866].Var14 = 1;
            if (var_3342 == 11) {
                var_78[var_866].Var4 = 0;
                var_78[var_866].Var12 = 1;
            }
        }
        if (var_1770 >= 400 && var_1770 < 500) {
            var_78[var_866].Var3 = var_3342;
        }
        if (var_1770 >= 800 && var_1770 < 900) {
            yield func395();
            var_78[var_866].Var6 = var_858;
            var_78[var_866].Var7 = var_3342;
            var_78[var_866].Var8 = 0;
            var_486[var_858][1][0] = 0;
            var_486[var_858][2][0] = 0;
            var_486[var_858][3][0] = 0;
            var_486[var_858][4][0] = 0;
            var_486[var_858][5][0] = 0;
            var_486[var_858][6][0] = 0;
            var_486[var_858][7][0] = 0;
            var_486[var_858][8][0] = 0;
            var_486[var_858][9][0] = 0;
            var_486[var_858][10][0] = 0;
        }
        var_1771 = var_78[var_866].Var0;
        var_862[var_1771][0] = 1;
        return;
    });
}

function func880() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(880);
        yield func108();
        var_3462 = 0;
        var_375 = 0;
        yield func235();
        onexit(0);
        if (var_3475 == 1) {
            chdir("問題");
            if (var_539 != 0) {
                var_3476 = "2";
                bsave(var_3336, var_3476, 1, 0);
            }
            var_539 = 0;
            var_3475 = 0;
            yield func883();
            return;
        }
        var_539 = 0;
        yield func841();
        return;
    });
}
function func881() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(881);
        notesel(var_3477);
        var_3472 = sdim(10000);
        var_3472 = bload(var_3336);
        yield func886();
        noteadd(var_3472, 0, 1);
        var_983 = "";
        var_3478 = 1;
        for (var cnt1 = 0; cnt1 < 38; ++cnt1) {
            var_3479 = noteget(var_3478);
            var_983 = var_983 + var_3479;
            var_3478 = var_3478 + 1;
        }
        for (var cnt1 = 0; cnt1 < 38; ++cnt1) {
            var_3479 = noteget(var_3478);
            var_983 = var_983 + var_3479;
            var_3478 = var_3478 + 1;
        }
        var_3480 = 39 + 38;
        var_3253 = noteget(0);
        var_201 = noteget(var_3480);
        var_3480++;
        var_3339 = noteget(var_3480);
        var_3480++;
        var_3422 = noteget(var_3480);
        var_3480++;
        var_3421 = noteget(var_3480);
        var_3480++;
        var_3424 = noteget(var_3480);
        var_3480++;
        var_3423 = noteget(var_3480);
        var_3480++;
        var_3426 = noteget(var_3480);
        var_3480++;
        var_3425 = noteget(var_3480);
        var_3480++;
        var_3428 = noteget(var_3480);
        var_3480++;
        var_3427 = noteget(var_3480);
        var_3480++;
        var_3430 = noteget(var_3480);
        var_3480++;
        var_3429 = noteget(var_3480);
        var_3480++;
        var_3432 = noteget(var_3480);
        var_3480++;
        var_3431 = noteget(var_3480);
        var_3480++;
        var_3434 = noteget(var_3480);
        var_3480++;
        var_3433 = noteget(var_3480);
        var_3480++;
        var_3436 = noteget(var_3480);
        var_3480++;
        var_3435 = noteget(var_3480);
        var_3480++;
        var_3438 = noteget(var_3480);
        var_3480++;
        var_3437 = noteget(var_3480);
        var_3480++;
        var_3440 = noteget(var_3480);
        var_3480++;
        var_3439 = noteget(var_3480);
        var_3480++;
        var_3442 = noteget(var_3480);
        var_3480++;
        var_3441 = noteget(var_3480);
        var_3480++;
        var_3444 = noteget(var_3480);
        var_3480++;
        var_3443 = noteget(var_3480);
        var_3480++;
        var_3446 = noteget(var_3480);
        var_3480++;
        var_3445 = noteget(var_3480);
        var_3480++;
        var_3448 = noteget(var_3480);
        var_3480++;
        var_3447 = noteget(var_3480);
        var_3480++;
        var_3450 = noteget(var_3480);
        var_3480++;
        var_3449 = noteget(var_3480);
        var_3480++;
        var_3452 = noteget(var_3480);
        var_3480++;
        var_3451 = noteget(var_3480);
        var_3480++;
        var_3454 = noteget(var_3480);
        var_3480++;
        var_3453 = noteget(var_3480);
        var_3480++;
        var_3456 = noteget(var_3480);
        var_3480++;
        var_3455 = noteget(var_3480);
        var_3480++;
        var_3458 = noteget(var_3480);
        var_3480++;
        var_3457 = noteget(var_3480);
        var_3480++;
        var_3460 = noteget(var_3480);
        var_3480++;
        var_3459 = noteget(var_3480);
        var_3480++;
        var_3341 = noteget(var_3480);
        var_3480++;
        var_3340 = noteget(var_3480);
        var_3480++;
        var_3343 = noteget(var_3480);
        var_3480++;
        var_3345 = noteget(var_3480);
        var_3480++;
        var_3344 = noteget(var_3480);
        var_3480++;
        var_3346 = noteget(var_3480);
        var_3480++;
        var_3348 = noteget(var_3480);
        var_3480++;
        var_3347 = noteget(var_3480);
        var_3480++;
        var_3349 = noteget(var_3480);
        var_3480++;
        var_3351 = noteget(var_3480);
        var_3480++;
        var_3350 = noteget(var_3480);
        var_3480++;
        var_3352 = noteget(var_3480);
        var_3480++;
        var_3354 = noteget(var_3480);
        var_3480++;
        var_3353 = noteget(var_3480);
        var_3480++;
        var_3355 = noteget(var_3480);
        var_3480++;
        var_3357 = noteget(var_3480);
        var_3480++;
        var_3356 = noteget(var_3480);
        var_3480++;
        var_3358 = noteget(var_3480);
        var_3480++;
        var_3360 = noteget(var_3480);
        var_3480++;
        var_3359 = noteget(var_3480);
        var_3480++;
        var_3361 = noteget(var_3480);
        var_3480++;
        var_3363 = noteget(var_3480);
        var_3480++;
        var_3362 = noteget(var_3480);
        var_3480++;
        var_3364 = noteget(var_3480);
        var_3480++;
        var_3366 = noteget(var_3480);
        var_3480++;
        var_3365 = noteget(var_3480);
        var_3480++;
        var_3367 = noteget(var_3480);
        var_3480++;
        var_3369 = noteget(var_3480);
        var_3480++;
        var_3368 = noteget(var_3480);
        var_3480++;
        var_3370 = noteget(var_3480);
        var_3480++;
        var_3372 = noteget(var_3480);
        var_3480++;
        var_3371 = noteget(var_3480);
        var_3480++;
        var_3373 = noteget(var_3480);
        var_3480++;
        var_3375 = noteget(var_3480);
        var_3480++;
        var_3374 = noteget(var_3480);
        var_3480++;
        var_3376 = noteget(var_3480);
        var_3480++;
        var_3378 = noteget(var_3480);
        var_3480++;
        var_3377 = noteget(var_3480);
        var_3480++;
        var_3379 = noteget(var_3480);
        var_3480++;
        var_3381 = noteget(var_3480);
        var_3480++;
        var_3380 = noteget(var_3480);
        var_3480++;
        var_3382 = noteget(var_3480);
        var_3480++;
        var_3384 = noteget(var_3480);
        var_3480++;
        var_3383 = noteget(var_3480);
        var_3480++;
        var_3385 = noteget(var_3480);
        var_3480++;
        var_3387 = noteget(var_3480);
        var_3480++;
        var_3386 = noteget(var_3480);
        var_3480++;
        var_3388 = noteget(var_3480);
        var_3480++;
        var_3390 = noteget(var_3480);
        var_3480++;
        var_3389 = noteget(var_3480);
        var_3480++;
        var_3391 = noteget(var_3480);
        var_3480++;
        var_3393 = noteget(var_3480);
        var_3480++;
        var_3392 = noteget(var_3480);
        var_3480++;
        var_3394 = noteget(var_3480);
        var_3480++;
        var_3396 = noteget(var_3480);
        var_3480++;
        var_3395 = noteget(var_3480);
        var_3480++;
        var_3397 = noteget(var_3480);
        var_3480++;
        var_3399 = noteget(var_3480);
        var_3480++;
        var_3398 = noteget(var_3480);
        var_3480++;
        var_3400 = noteget(var_3480);
        var_3480++;
        var_3402 = noteget(var_3480);
        var_3480++;
        var_3401 = noteget(var_3480);
        var_3480++;
        var_3404 = noteget(var_3480);
        var_3480++;
        var_3403 = noteget(var_3480);
        var_3480++;
        var_3406 = noteget(var_3480);
        var_3480++;
        var_3405 = noteget(var_3480);
        var_3480++;
        var_3408 = noteget(var_3480);
        var_3480++;
        var_3407 = noteget(var_3480);
        var_3480++;
        var_3410 = noteget(var_3480);
        var_3480++;
        var_3409 = noteget(var_3480);
        var_3480++;
        var_3412 = noteget(var_3480);
        var_3480++;
        var_3411 = noteget(var_3480);
        var_3480++;
        var_3414 = noteget(var_3480);
        var_3480++;
        var_3413 = noteget(var_3480);
        var_3480++;
        var_3416 = noteget(var_3480);
        var_3480++;
        var_3415 = noteget(var_3480);
        var_3480++;
        var_3418 = noteget(var_3480);
        var_3480++;
        var_3417 = noteget(var_3480);
        var_3480++;
        var_3420 = noteget(var_3480);
        var_3480++;
        var_3419 = noteget(var_3480);
        var_3480++;
        var_3260 = noteget(var_3480);
        var_3480++;
        var_3253 = int(var_3253);
        var_201 = int(var_201);
        var_3339 = int(var_3339);
        var_3422 = int(var_3422);
        var_3421 = int(var_3421);
        var_3424 = int(var_3424);
        var_3423 = int(var_3423);
        var_3426 = int(var_3426);
        var_3425 = int(var_3425);
        var_3428 = int(var_3428);
        var_3427 = int(var_3427);
        var_3430 = int(var_3430);
        var_3429 = int(var_3429);
        var_3432 = int(var_3432);
        var_3431 = int(var_3431);
        var_3434 = int(var_3434);
        var_3433 = int(var_3433);
        var_3436 = int(var_3436);
        var_3435 = int(var_3435);
        var_3438 = int(var_3438);
        var_3437 = int(var_3437);
        var_3440 = int(var_3440);
        var_3439 = int(var_3439);
        var_3442 = int(var_3442);
        var_3441 = int(var_3441);
        var_3444 = int(var_3444);
        var_3443 = int(var_3443);
        var_3446 = int(var_3446);
        var_3445 = int(var_3445);
        var_3448 = int(var_3448);
        var_3447 = int(var_3447);
        var_3450 = int(var_3450);
        var_3449 = int(var_3449);
        var_3452 = int(var_3452);
        var_3451 = int(var_3451);
        var_3454 = int(var_3454);
        var_3453 = int(var_3453);
        var_3456 = int(var_3456);
        var_3455 = int(var_3455);
        var_3458 = int(var_3458);
        var_3457 = int(var_3457);
        var_3460 = int(var_3460);
        var_3459 = int(var_3459);
        var_3341 = int(var_3341);
        var_3340 = int(var_3340);
        var_3343 = int(var_3343);
        var_3345 = int(var_3345);
        var_3344 = int(var_3344);
        var_3346 = int(var_3346);
        var_3348 = int(var_3348);
        var_3347 = int(var_3347);
        var_3349 = int(var_3349);
        var_3351 = int(var_3351);
        var_3350 = int(var_3350);
        var_3352 = int(var_3352);
        var_3354 = int(var_3354);
        var_3353 = int(var_3353);
        var_3355 = int(var_3355);
        var_3357 = int(var_3357);
        var_3356 = int(var_3356);
        var_3358 = int(var_3358);
        var_3360 = int(var_3360);
        var_3359 = int(var_3359);
        var_3361 = int(var_3361);
        var_3363 = int(var_3363);
        var_3362 = int(var_3362);
        var_3364 = int(var_3364);
        var_3366 = int(var_3366);
        var_3365 = int(var_3365);
        var_3367 = int(var_3367);
        var_3369 = int(var_3369);
        var_3368 = int(var_3368);
        var_3370 = int(var_3370);
        var_3372 = int(var_3372);
        var_3371 = int(var_3371);
        var_3373 = int(var_3373);
        var_3375 = int(var_3375);
        var_3374 = int(var_3374);
        var_3376 = int(var_3376);
        var_3378 = int(var_3378);
        var_3377 = int(var_3377);
        var_3379 = int(var_3379);
        var_3381 = int(var_3381);
        var_3380 = int(var_3380);
        var_3382 = int(var_3382);
        var_3384 = int(var_3384);
        var_3383 = int(var_3383);
        var_3385 = int(var_3385);
        var_3387 = int(var_3387);
        var_3386 = int(var_3386);
        var_3388 = int(var_3388);
        var_3390 = int(var_3390);
        var_3389 = int(var_3389);
        var_3391 = int(var_3391);
        var_3393 = int(var_3393);
        var_3392 = int(var_3392);
        var_3394 = int(var_3394);
        var_3396 = int(var_3396);
        var_3395 = int(var_3395);
        var_3397 = int(var_3397);
        var_3399 = int(var_3399);
        var_3398 = int(var_3398);
        var_3400 = int(var_3400);
        var_3402 = int(var_3402);
        var_3401 = int(var_3401);
        var_3404 = int(var_3404);
        var_3403 = int(var_3403);
        var_3406 = int(var_3406);
        var_3405 = int(var_3405);
        var_3408 = int(var_3408);
        var_3407 = int(var_3407);
        var_3410 = int(var_3410);
        var_3409 = int(var_3409);
        var_3412 = int(var_3412);
        var_3411 = int(var_3411);
        var_3414 = int(var_3414);
        var_3413 = int(var_3413);
        var_3416 = int(var_3416);
        var_3415 = int(var_3415);
        var_3418 = int(var_3418);
        var_3417 = int(var_3417);
        var_3420 = int(var_3420);
        var_3419 = int(var_3419);
        var_3260 = int(var_3260);
        var_3262 = var_3260;
        return;
    });
}
function func882() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(882);
        yield func108();
        var_3481 = 26;
        var_3482 = 106;
        var_3483 = var_3482;
        var_3484 = 57;
        var_3485 = 110;
        var_3486 = 1;
        var_3487 = 1;
        var_3488 = 1;
        var_3489 = 0;
        if (var_709 != 0 || var_716 != 0 || var_723 != 0) {
            var_3489 = 1;
            var_3486 = 0;
        }
        if (var_710 != 0 || var_717 != 0 || var_724 != 0) {
            var_3489 = 2;
            var_3486 = 0;
        }
        var_3490 = sdim(10000);
        dirlist(var_3490, "問題", 5);
        if (stat == 0) {
            mkdir("問題");
        }
        chdir("問題");
        yield func883();
    });
}
function func883() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(883);
        var_627 = 1;
        var_3490 = sdim(10000);
        dirlist(var_3490, "*.btq");
        notesel(var_3490);
        var_3491 = 0;
        var_3491 = noteinfo(0);
        var_3492 = Math.floor(var_3491 / 10) + 1;
        var_3493 = dim(var_3491);
        var_3494 = 0;
        var_3495 = "";
        for (var cnt1 = 0; cnt1 < var_3491; ++cnt1) {
            var_3496 = noteget(var_3494);
            var_3495 = bload(var_3496, 1);
            if (var_3495 == "0" || var_3495 == "1") {
                var_3493[var_3494] = 0;
            }
            if (var_3495 == "2") {
                var_3493[var_3494] = 1;
            }
            if (var_3495 == "3") {
                var_3493[var_3494] = 2;
            }
            if (var_3495 == "4") {
                var_3493[var_3494] = 3;
            }
            var_3494++;
        }
        yield func884();
    });
}
function func884() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(884);
        var_3497 = var_3487 * 10 - 10;
        var_3498 = var_3491 - var_3497;
        if (var_3498 >= 10) {
            var_3498 = 10;
        }
        yield func080();
        if (var_3491 > 0) {
            if (var_259 == 1) {
                if (var_3489 >= 1 && var_3486 == 0) {
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(100);
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
                if (var_3488 < 10 && var_3488 < var_3498) {
                    var_3482 = var_3482 + 20;
                    var_3488++;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(100);
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
                if (var_3488 == 10 || var_3488 >= var_3498) {
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(100);
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
            }
            if (var_255 == 1) {
                if (var_3489 >= 1 && var_3488 == 1) {
                    var_3486 = 0;
                    DSPLAY(100);
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
                if (var_3488 > 1) {
                    var_3482 = var_3482 - 20;
                    var_3488--;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(100);
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
                if (var_3488 <= 1) {
                    var_3482 = var_3483 + 20 * var_3498 - 20;
                    var_3488 = var_3498;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(100);
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
            }
            if (var_257 == 1 && var_3486 != 0) {
                if (var_3487 < var_3492) {
                    var_3487++;
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3497 = var_3487 * 10 - 10;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(100);
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
                if (var_3487 >= var_3492) {
                    var_3487 = 1;
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3497 = var_3487 * 10 - 10;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(100);
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
            }
            if (var_254 == 1 && var_3486 != 0) {
                if (var_3487 > 1) {
                    var_3487--;
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3497 = var_3487 * 10 - 10;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(100);
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
                if (var_3487 <= 1) {
                    var_3487 = var_3492;
                    var_3482 = var_3483;
                    var_3488 = 1;
                    var_3497 = var_3487 * 10 - 10;
                    var_3486 = var_3497 + var_3488;
                    DSPLAY(100);
                    yield func885();
                    yield wait(10);
                    yield func884();
                    return;
                }
            }
        }
        if (var_242 == 1) {
            DSPLAY(212);
            if (var_3486 == 0) {
                yield func178();
                yield func233();
                onexit(0);
                yield func841();
                return;
            }
            if (var_3491 > 0) {
                var_3499 = var_3486 - 1;
                var_1643 = noteget(var_3499);
                var_3336 = var_1643;
                var_3475 = 1;
                var_375 = 1;
                yield func876();
                return;
            }
        }
        if (var_239 == 1) {
            var_627 = 0;
            yield func178();
            DSPLAY(212);
            chdir(var_30);
            yield func142();
            return;
        }
        yield func885();
        yield wait(5);
        yield func884();
        return;
    });
}
function func885() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(885);
        redraw(0);
        gmode(2);
        pos(0, 0);
        gcopy(3, 0, 400, 340, 340);
        gmode(4, null, null, 100);
        pos(0, 0);
        gcopy(12, 0, 0, 340, 340);
        var_1631 = 20;
        var_1632 = 10;
        var_1633 = 300;
        var_1634 = 30;
        var_1635 = 0;
        var_1636 = 0;
        color(0, 0, 0);
        gmode(4, null, null, 100);
        pos(var_1631 - 3, var_1632 - 3);
        gcopy(12, 0, 0, var_1633 + 5, var_1634 + 5);
        gmode(2);
        color(255, 255, 255);
        line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
        line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
        line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
        line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
        pset(var_1631 - var_1635, var_1632 - var_1636);
        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
        pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
        font("ＭＳ　Ｐゴシック", 16, 1);
        pos(var_1631 + 105, var_1632 + 8);
        mes("魔少年の問題");
        if (var_3489 >= 1) {
            var_1631 = 20;
            var_1632 = 55;
            var_1633 = 115;
            var_1634 = 30;
            var_1635 = 0;
            var_1636 = 0;
            color(0, 0, 0);
            gmode(4, null, null, 100);
            pos(var_1631 - 3, var_1632 - 3);
            gcopy(12, 0, 0, var_1633 + 5, var_1634 + 5);
            gmode(2);
            color(255, 255, 255);
            line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
            line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
            line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
            line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
            pset(var_1631 - var_1635, var_1632 - var_1636);
            pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
            pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
            pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
            font("ＭＳ　Ｐゴシック", 16, 1);
            pos(var_1631 + 38, var_1632 + 8);
            mes("問題作成");
        }
        var_1631 = 20;
        var_1632 = 100;
        var_1633 = 300;
        var_1634 = 220;
        var_1635 = 0;
        var_1636 = 0;
        color(0, 0, 0);
        gmode(4, null, null, 100);
        pos(var_1631 - 3, var_1632 - 3);
        gcopy(12, 0, 0, var_1633 + 5, 220 + 5);
        gmode(2);
        color(255, 255, 255);
        line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
        line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635 - 170, var_1632 + var_1634 + var_1636);
        line(var_1631 - var_1635 + 175, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
        line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
        line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
        pset(var_1631 - var_1635, var_1632 - var_1636);
        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
        pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
        font("ＭＳ　Ｐゴシック", 16, 1);
        if (var_3487 < 10) {
            pos(var_1631 - var_1635 + 150, var_1632 + var_1634 + var_1636 - 8);
            mes("" + var_3487);
        }
        if (var_3487 >= 10) {
            pos(var_1631 - var_1635 + 145, var_1632 + var_1634 + var_1636 - 8);
            mes("" + var_3487);
        }
        color(255, 255, 255);
        var_3500 = var_3485;
        var_3494 = var_3487 * 10 - 10;
        var_3501 = var_3491 - var_3494;
        if (var_3501 >= 10) {
            var_3501 = 10;
        }
        for (var cnt1 = 0; cnt1 < var_3501; ++cnt1) {
            var_3502 = noteget(var_3494);
            getstr(var_3503, var_3502, 0, 46);
            pos(var_3484, var_3500);
            color(255, 255, 255);
            if (var_3493[var_3494] == 1) {
                color(255, 255, 0);
            }
            if (var_3493[var_3494] == 2) {
                color(255, 0, 0);
            }
            if (var_3493[var_3494] == 3) {
                color(0, 255, 255);
            }
            mes("" + var_3503);
            var_3494++;
            var_3500 = var_3500 + 20;
        }
        gmode(2);
        pos(var_3481, var_3482);
        if (var_3486 == 0) {
            pos(var_3481, 59);
        }
        gcopy(8, 70, 50, 25, 20);
        color(0, 0, 0);
        gmode(4, null, null, 100);
        pos(290, 50);
        gcopy(3, 1560, 0, 40, 45);
        gmode(2);
        pos(290, 48);
        gcopy(3, 760, 120, 40, 40);
        pos(150, 32);
        gcopy(17, 0, 920, 160, 80);
        font("ＭＳ　Ｐゴシック", 12, 1);
        color(0, 0, 0);
        pos(175, 62);
        if (var_3491 > 0) {
            mes("問題を選びな！");
        }
        if (var_3491 == 0) {
            mes("問題がないぜ");
        }
        if (var_10 >= 1) {
            yield func338();
        }
        redraw(1);
        return;
    });
}
function func886() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(886);
        var_3504 = var_3336;
        exist(var_3504);
        var_3505 = strsize;
        var_254 = "lナ2";
        var_3506 = 1;
        for (var cnt1 = 0; cnt1 < var_3505 - 1; ++cnt1) {
            var_3507 = peek(var_3472, var_3506);
            var_235 = peek(var_254, var_3506 % 4);
            var_3508 = var_3507 ^ var_235;
            var_235 = var_235 + 57 && 255;
            poke(var_254, var_3506 % 4, var_235);
            poke(var_3472, var_3506, var_3508);
            var_3506++;
        }
        return;
    });
}
function func887() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(887);
        var_3504 = var_3336;
        exist(var_3504);
        var_3505 = strsize;
        if (var_3505 < 0) {
            var_3505 = 10000;
        }
        var_254 = "lナ2";
        var_3506 = 1;
        for (var cnt1 = 0; cnt1 < var_3505 - 1; ++cnt1) {
            var_3507 = peek(var_3472, var_3506);
            var_235 = peek(var_254, var_3506 % 4);
            var_3508 = var_3507 ^ var_235;
            var_235 = var_235 + 57 && 255;
            poke(var_254, var_3506 % 4, var_235);
            poke(var_3472, var_3506, var_3508);
            var_3506++;
        }
        return;
    });
}
function func888() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(888);
        var_874 = sdim(10000);
        var_3322 = sdim(10000);
        var_884 = dim(10000);
        var_874 = "アイテム";
        var_3322 = "eeeeeeeeee";
        var_883 = 1;
        for (var cnt1 = 0; cnt1 < 150; ++cnt1) {
            yield func889();
            var_874 = var_874 + "\n" + var_489;
            if (var_232 < 10) {
                var_3322 = var_3322 + "\np" + var_232 + "eeeeeeee";
            }
            if (var_232 >= 10 && var_232 < 100) {
                var_3322 = var_3322 + "\np" + var_232 + "eeeeeee";
            }
            if (var_232 >= 100) {
                var_3322 = var_3322 + "\np" + var_232 + "eeeeee";
            }
            var_884[var_883] = var_232;
            if (var_232 == 1) {
                break;
            }
            var_883++;
        }
        return;
    });
}

//アイテムの購入金額の値
function func889() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(889);
        var_489 = "";
        var_483 = 0;
        var_3509 = 0;
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 0;
            var_483 = 1;
            var_489 = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 122;
            var_483 = 1000;
            var_489 = "ｱﾇﾋﾞｽ神のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 201;
            var_483 = 900;
            var_489 = "ｲｴﾛｰﾃﾝﾊﾟﾗﾝｽのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 304;
            var_483 = 1900;
            var_489 = "ｳｪｻﾞｰﾘﾎﾟｰﾄのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 312;
            var_483 = 8200;
            var_489 = "ｴｱﾛｽﾐｽのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 103;
            var_483 = 650;
            var_489 = "ｴｺｰｽﾞACT3のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 315;
            var_483 = 2500;
            var_489 = "ｴﾋﾟﾀﾌのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 308;
            var_483 = 2200;
            var_489 = "ｴﾎﾞﾆｰ･ﾃﾞﾋﾞﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 310;
            var_483 = 1000;
            var_489 = "ｴﾝﾌﾟﾚｽのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 206;
            var_483 = 2200;
            var_489 = "ｵｱｼｽのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 317;
            var_483 = 2300;
            var_489 = "ｷｯｽのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 112;
            var_483 = 11700;
            var_489 = "ｷﾗｰ･ｸｨｰﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 102;
            var_483 = 19000;
            var_489 = "ｷﾝｸﾞ･ｸﾘﾑｿﾞﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 113;
            var_483 = 2100;
            var_489 = "ｸﾗｯｼｭのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 205;
            var_483 = 2500;
            var_489 = "ｸﾗﾌﾄﾜｰｸのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 123;
            var_483 = 11000;
            var_489 = "ｸﾘｰﾑのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 207;
            var_483 = 850;
            var_489 = "ｸﾞﾚｲﾄﾌﾙ･ﾃﾞｯﾄﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 106;
            var_483 = 4600;
            var_489 = "ｸﾚｲｼﾞｰ･DのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 115;
            var_483 = 5200;
            var_489 = "G･ｴｸｽﾍﾟﾘｴﾝｽのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 104;
            var_483 = 650;
            var_489 = "ｻﾞ･ﾊﾝﾄﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 203;
            var_483 = 1400;
            var_489 = "ｻﾞ･ﾌｰﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 111;
            var_483 = 15600;
            var_489 = "ｻﾞ･ﾜｰﾙﾄﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 316;
            var_483 = 1000;
            var_489 = "ｻﾊﾞｲﾊﾞｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 204;
            var_483 = 5300;
            var_489 = "ｼｱｰﾊｰﾄｱﾀｯｸのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 318;
            var_483 = 1000;
            var_489 = "ｼﾞｬﾝﾋﾟﾝJﾌﾗｯｼｭのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 101;
            var_483 = 14000;
            var_489 = "ｼﾙﾊﾞｰﾁｬﾘｵｯﾂのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 200;
            var_483 = 1800;
            var_489 = "ｽｰﾊﾟｰﾌﾗｲのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 100;
            var_483 = 17000;
            var_489 = "ｽﾀｰ･ﾌﾟﾗﾁﾅのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 108;
            var_483 = 16000;
            var_489 = "ｽﾃｨｯｷｰﾌｨﾝｶﾞｰｽﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 120;
            var_483 = 1700;
            var_489 = "ｽﾄｰﾝ･ﾌﾘｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 314;
            var_483 = 1200;
            var_489 = "ｽﾄﾚｲ･ｷｬｯﾄのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 119;
            var_483 = 1350;
            var_489 = "ｽﾊﾟｲｽ･ｶﾞｰﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 117;
            var_483 = 1800;
            var_489 = "ﾀﾞｰｸﾌﾞﾙｰﾑｰﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 118;
            var_483 = 1300;
            var_489 = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 311;
            var_483 = 1000;
            var_489 = "ﾁｰﾌﾟ･ﾄﾘｯｸのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 105;
            var_483 = 950;
            var_489 = "ﾁﾘﾍﾟｯﾊﾟｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 107;
            var_483 = 750;
            var_489 = "ﾃﾞｽ･13のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 303;
            var_483 = 7400;
            var_489 = "ﾄﾞﾗｺﾞﾝｽﾞﾄﾞﾘｰﾑのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 116;
            var_483 = 700;
            var_489 = "ﾊｰﾐｯﾄﾊﾟｰﾌﾟﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 301;
            var_483 = 8800;
            var_489 = "ﾊｰｳﾞｪｽﾄのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 121;
            var_483 = 1000;
            var_489 = "ﾊﾟｰﾌﾟﾙ･ﾍｲｽﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 300;
            var_483 = 1300;
            var_489 = "ﾊﾟｰﾙ･ｼﾞｬﾑのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 313;
            var_483 = 5200;
            var_489 = "ﾊｲｳｪｲ･ｽﾀｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 302;
            var_483 = 800;
            var_489 = "ﾊｲｳｪｲ･ﾄｩ･ﾍﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 395;
            var_483 = 4700;
            var_489 = "ﾊﾞｲﾂｧ･ﾀﾞｽﾄのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 319;
            var_483 = 3400;
            var_489 = "ﾎﾞｰｲIIﾏﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 202;
            var_483 = 3900;
            var_489 = "ﾎﾜｲﾄｱﾙﾊﾞﾑのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 109;
            var_483 = 13200;
            var_489 = "ﾏｼﾞｼｬﾝｽﾞﾚｯﾄﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 306;
            var_483 = 4400;
            var_489 = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 320;
            var_483 = 2000;
            var_489 = "ﾒﾀﾘｶのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 0;
            var_483 = 1;
            var_489 = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 406;
            var_483 = 550;
            var_489 = "ｴｺｰｽﾞACT1のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 405;
            var_483 = 450;
            var_489 = "ｴｺｰｽﾞACT2のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 402;
            var_483 = 800;
            var_489 = "ｴﾝﾍﾟﾗｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 403;
            var_483 = 700;
            var_489 = "ｾｯｸｽﾋﾟｽﾄﾙｽﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 411;
            var_483 = 1300;
            var_489 = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 400;
            var_483 = 900;
            var_489 = "ﾊｲｴﾛﾌｧﾝﾄｸﾞﾘｰﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 401;
            var_483 = 500;
            var_489 = "ﾌｰ･ﾌｧｲﾀｰｽﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 412;
            var_483 = 1600;
            var_489 = "ﾍﾌﾞﾝｽﾞﾄﾞｱｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 404;
            var_483 = 1100;
            var_489 = "ﾎﾙｽ神のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 408;
            var_483 = 750;
            var_489 = "ﾏﾝ･ｲﾝ･ｻﾞ･ﾐﾗｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 409;
            var_483 = 550;
            var_489 = "ﾗﾊﾞｰｽﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 0;
            var_483 = 1;
            var_489 = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 570;
            var_483 = 500;
            var_489 = "ｼﾞｮﾅｻﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 572;
            var_483 = 500;
            var_489 = "承太郎のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 569;
            var_483 = 500;
            var_489 = "ﾎﾟﾙﾅﾚﾌのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 588;
            var_483 = 400;
            var_489 = "J･ｶﾞｲﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 575;
            var_483 = 500;
            var_489 = "ﾏﾆｯｼｭﾎﾞｰｲのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 563;
            var_483 = 400;
            var_489 = "ﾝﾄﾞｩｰﾙのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 571;
            var_483 = 500;
            var_489 = "ﾎﾞｲﾝｺﾞのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 579;
            var_483 = 1500;
            var_489 = "ﾍﾟｯﾄｼｮｯﾌﾟのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 584;
            var_483 = 500;
            var_489 = "ﾇｹｻｸのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 560;
            var_483 = 400;
            var_489 = "仗助のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 562;
            var_483 = 1500;
            var_489 = "康一のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 585;
            var_483 = 500;
            var_489 = "億泰のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 573;
            var_483 = 400;
            var_489 = "重ちーのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 564;
            var_483 = 500;
            var_489 = "噴上裕也のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 577;
            var_483 = 900;
            var_489 = "ﾐｷﾀｶのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 587;
            var_483 = 500;
            var_489 = "吉良吉影のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 589;
            var_483 = 500;
            var_489 = "ﾌﾟﾛｼｭｰﾄ兄貴のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 586;
            var_483 = 900;
            var_489 = "ペッシのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 590;
            var_483 = 400;
            var_489 = "ｷﾞｱｯﾁｮのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 580;
            var_483 = 1500;
            var_489 = "ﾄﾞｯﾋﾟｵのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 565;
            var_483 = 400;
            var_489 = "ﾌﾟｯﾁ神父のDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 574;
            var_483 = 500;
            var_489 = "ｴﾝﾎﾟﾘｵのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 568;
            var_483 = 500;
            var_489 = "ｼﾞｮﾝｶﾞﾘ･AのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 566;
            var_483 = 500;
            var_489 = "ｹﾝｿﾞｰのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 576;
            var_483 = 400;
            var_489 = "破裂するDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 582;
            var_483 = 300;
            var_489 = "水が熱湯になるDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 578;
            var_483 = 1500;
            var_489 = "ｻﾝﾄﾞﾏﾝのDISC";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 0;
            var_483 = 1;
            var_489 = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 600;
            var_483 = 100;
            var_489 = "ﾋﾟｯﾂｧ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 602;
            var_483 = 400;
            var_489 = "ﾈｱﾎﾟﾘｽのﾋﾟｯﾂｧ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 604;
            var_483 = 800;
            var_489 = "ﾎﾟﾙﾎﾟのﾋﾟｯﾂｧ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 630;
            var_483 = 600;
            var_489 = "娼婦風ｽﾊﾟｹﾞｯﾃｨ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 631;
            var_483 = 600;
            var_489 = "ﾓｯﾂｧﾚﾗﾁｰｽﾞとﾄﾏﾄのｻﾗﾀﾞ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 632;
            var_483 = 600;
            var_489 = "ｷﾘﾏﾝｼﾞｬﾛの雪解け水";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 633;
            var_483 = 600;
            var_489 = "子羊背肉のﾘﾝｺﾞｿｰｽかけ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 634;
            var_483 = 600;
            var_489 = "ﾌﾟﾘﾝ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 650;
            var_483 = 200;
            var_489 = "ｶｴﾙ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 651;
            var_483 = 500;
            var_489 = "大きいｶｴﾙ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 653;
            var_483 = 1000;
            var_489 = "超巨大なｶｴﾙ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 654;
            var_483 = 100;
            var_489 = "ﾔﾄﾞｸｶﾞｴﾙ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 655;
            var_483 = 100;
            var_489 = "ｻﾞﾘｶﾞﾆ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 0;
            var_483 = 1;
            var_489 = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 800;
            var_483 = 2400;
            var_489 = "ｴﾆｸﾞﾏの紙";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 806;
            var_483 = 4600;
            var_489 = "ｶﾙﾈの死体";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 807;
            var_483 = 4600;
            var_489 = "DIOの骨";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 817;
            var_483 = 4600;
            var_489 = "乳母車";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 850;
            var_483 = 2700;
            var_489 = "波紋のツボ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 851;
            var_483 = 2500;
            var_489 = "ﾎﾙﾏｼﾞｵのﾋﾞﾝ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 852;
            var_483 = 2600;
            var_489 = "ランドセル";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 853;
            var_483 = 2800;
            var_489 = "ｻｰﾌｨｽ人形";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 854;
            var_483 = 2900;
            var_489 = "聖人の脊椎";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 801;
            var_483 = 400;
            var_489 = "形兆のDISCｹｰｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 802;
            var_483 = 400;
            var_489 = "ﾄﾗｸﾀｰのﾀｲﾔ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 803;
            var_483 = 400;
            var_489 = "ｻﾝｼﾞｪﾙﾏﾝの紙袋";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 804;
            var_483 = 400;
            var_489 = "露伴のカバン";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 0;
            var_483 = 1;
            var_489 = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 724;
            var_483 = 1500;
            var_489 = "石仮面";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 714;
            var_483 = 2000;
            var_489 = "紫外線照射装置";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 723;
            var_483 = 1500;
            var_489 = "魔法のランプ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 726;
            var_483 = 1000;
            var_489 = "鉄球";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 727;
            var_483 = 1000;
            var_489 = "ｿﾞﾝﾋﾞ馬";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 0;
            var_483 = 1;
            var_489 = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 901;
            var_483 = 360;
            var_489 = "一部のコミックス";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 906;
            var_483 = 360;
            var_489 = "二部のコミックス";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 913;
            var_483 = 390;
            var_489 = "三部のコミックス";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 929;
            var_483 = 390;
            var_489 = "四部のコミックス";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 948;
            var_483 = 388;
            var_489 = "五部のコミックス";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 964;
            var_483 = 390;
            var_489 = "ストーンオーシャン";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 981;
            var_483 = 390;
            var_489 = "STEEL BALL RUN";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 0;
            var_483 = 1;
            var_489 = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_232 = 1;
            var_483 = 1;
            var_489 = "お金";
        }
        var_3510 = var_3509;
        return;
    });
}
function func890() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(890);
        var_886 = sdim(10000);
        var_3324 = sdim(10000);
        var_3300 = dim(10000);
        var_886 = "罠";
        var_3324 = "eeeeeeeeee";
        var_883 = 1;
        for (var cnt1 = 0; cnt1 < 32; ++cnt1) {
            yield func891();
            var_886 = var_886 + "\n" + var_889;
            if (var_888 < 10) {
                var_3324 = var_3324 + "\np" + var_888 + "eeeeeeee";
            }
            if (var_888 >= 10 && var_888 < 100) {
                var_3324 = var_3324 + "\np" + var_888 + "eeeeeee";
            }
            if (var_888 >= 100) {
                var_3324 = var_3324 + "\np" + var_888 + "eeeeee";
            }
            var_3300[var_883] = var_888;
            if (var_888 == 98) {
                break;
            }
            var_883++;
        }
        return;
    });
}
function func891() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(891);
        var_3509 = 0;
        var_889 = "";
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 0;
            var_889 = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 1;
            var_889 = "ｾﾄ神の罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 3;
            var_889 = "ﾀﾞｲﾊﾞｰﾀﾞｳﾝの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 5;
            var_889 = "猫袋";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 6;
            var_889 = "ﾀﾞｰﾋﾞｰ弟の落とし穴";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 7;
            var_889 = "ﾛｰﾘﾝｸﾞｽﾄｰﾝｽﾞの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 8;
            var_889 = "ﾎﾜｲﾄｱﾙﾊﾞﾑの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 9;
            var_889 = "ｴｺｰｽﾞACT2の罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 10;
            var_889 = "ｸﾗﾌﾄﾜｰｸの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 11;
            var_889 = "ﾜﾑｳの影";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 12;
            var_889 = "DIOの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 13;
            var_889 = "ｽｶｲ･ﾊｲの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 14;
            var_889 = "ｴｺｰｽﾞACT2の罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 15;
            var_889 = "ﾍﾌﾞﾝｽﾞ･ﾄﾞｱｰの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 16;
            var_889 = "ﾄｰｷﾝｸﾞ･ﾍｯﾄﾞの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 17;
            var_889 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰの地雷";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 18;
            var_889 = "ﾊﾞｽﾃﾄ女神の罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 19;
            var_889 = "ラクガキの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 20;
            var_889 = "ｴｺｰｽﾞACT2の罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 21;
            var_889 = "ｴﾝﾌﾟﾚｽの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 22;
            var_889 = "ﾊｲｳｪｲ･ｽﾀｰの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 23;
            var_889 = "ﾜｲｱｰﾄﾞの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 25;
            var_889 = "ネズミ捕りの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 26;
            var_889 = "ﾎﾜｲﾄｽﾈｲｸの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 28;
            var_889 = "ｵｴｺﾓﾊﾞの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 95;
            var_889 = "ﾀﾞｲｱｰさんの罠";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_888 = 98;
            var_889 = "ｶﾞﾗｽの破片";
        }
        return;
    });
}
function func892() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(892);
        var_890 = sdim(10000);
        var_3319 = sdim(10000);
        var_3292 = dim(10000);
        var_890 = "敵";
        var_3319 = "eeeeeeeeee";
        var_883 = 1;
        for (var cnt1 = 0; cnt1 < 126; ++cnt1) {
            yield func893();
            var_890 = var_890 + "\n" + var_891;
            if (var_437 < 10) {
                var_3319 = var_3319 + "\np" + var_437 + "eeeeeeee";
            }
            if (var_437 >= 10 && var_437 < 100) {
                var_3319 = var_3319 + "\np" + var_437 + "eeeeeee";
            }
            if (var_437 >= 100) {
                var_3319 = var_3319 + "\np" + var_437 + "eeeeee";
            }
            var_3292[var_883] = var_437;
            if (var_437 == 37) {
                break;
            }
            var_883++;
        }
        return;
    });
}

// 
function func893() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(893);
        var_3509 = 0;
        var_891 = "";
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 0;
            var_891 = "------------------";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 79;
            var_891 = "ｴｺｰｽﾞの卵";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 1;
            var_891 = "ﾔｸ中のｺﾞﾛﾂｷ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 5;
            var_891 = "小汚い浮浪者";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 147;
            var_891 = "ｼﾞｮｾﾌ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 2;
            var_891 = "ヌケサク";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 93;
            var_891 = "ｴﾝﾎﾟﾘｵ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 3;
            var_891 = "ﾀﾜｰ･ｵﾌﾞ･ｸﾞﾚｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 94;
            var_891 = "ブルりん";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 77;
            var_891 = "ｴｺｰｽﾞACT1";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 51;
            var_891 = "ﾜﾝﾁｪﾝ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 7;
            var_891 = "運命の車輪";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 9;
            var_891 = "ﾗﾊﾞｰｿｳﾙ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 39;
            var_891 = "ﾊｲｳｪｲｽﾀｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 26;
            var_891 = "ﾊｰｳﾞｪｽﾄ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 76;
            var_891 = "ｴｺｰｽﾞACT2";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 6;
            var_891 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙの人形";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 165;
            var_891 = "ｴﾎﾞﾆｰﾃﾞﾋﾞﾙ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 52;
            var_891 = "ｼﾞｬｯｸ･ｻﾞ･ﾘﾊﾟｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 141;
            var_891 = "F・F";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 134;
            var_891 = "ｼﾞｮﾘｰﾝ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 4;
            var_891 = "ﾃﾞｽ･13";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 13;
            var_891 = "ﾗﾊﾞｰｽﾞ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 101;
            var_891 = "ﾍﾟｲｼﾞ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 102;
            var_891 = "ｼﾞｮｰﾝｽﾞ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 103;
            var_891 = "ﾌﾟﾗﾝﾄ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 104;
            var_891 = "ﾎﾞｰﾝﾅﾑ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 119;
            var_891 = "ｼﾞｮｾﾌ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 99;
            var_891 = "ﾏﾝﾊｯﾀﾝﾄﾗﾝｽﾌｧｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 71;
            var_891 = "ﾄﾞｩｰﾋﾞｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 12;
            var_891 = "ｴｺｰｽﾞACT3";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 56;
            var_891 = "ｼｭﾄﾛﾊｲﾑ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 28;
            var_891 = "ｼﾞｬｯｼﾞﾒﾝﾄ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 22;
            var_891 = "ｱｳﾞﾄﾞｩﾙ人形";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 31;
            var_891 = "吉良の親父";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 148;
            var_891 = "ｴﾙﾒｪｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 131;
            var_891 = "ｼﾞｮﾙﾉ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 115;
            var_891 = "ｱｸｱ･ﾈｯｸﾚｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 11;
            var_891 = "ﾜｲｱｰﾄﾞのﾍﾞｯｸ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 45;
            var_891 = "由花子";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 29;
            var_891 = "ｸﾞﾘｰﾝ･ﾃﾞｨ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 47;
            var_891 = "億泰";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 27;
            var_891 = "ｹﾞﾌﾞ神";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 136;
            var_891 = "ｼｰｻﾞｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 38;
            var_891 = "ｱﾚｯｼｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 48;
            var_891 = "ｴｱﾛｽﾐｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 78;
            var_891 = "ｱｳﾞﾄﾞｩﾙさん";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 17;
            var_891 = "ｼｱｰﾊｰﾄｱﾀｯｸ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 46;
            var_891 = "ﾎﾙ･ﾎｰｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 125;
            var_891 = "ﾌｰｺﾞ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 14;
            var_891 = "床屋のｶｰﾝ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 69;
            var_891 = "ﾌﾞﾗﾌｫｰﾄﾞ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 59;
            var_891 = "ﾌﾟｯﾁ神父";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 145;
            var_891 = "康一";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 18;
            var_891 = "ﾌﾞﾗｯｸ･ｻﾊﾞｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 35;
            var_891 = "仗助";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 135;
            var_891 = "若ｼﾞｮｾﾌ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 10;
            var_891 = "ﾉﾄｰﾘｱｽBIG";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 95;
            var_891 = "ｽﾄﾚｲﾂｫ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 63;
            var_891 = "ﾌﾟﾛｼｭｰﾄ兄貴";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 84;
            var_891 = "ﾁｮｺﾗｰﾀ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 117;
            var_891 = "ﾁｮｺﾗｰﾀの上半身";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 43;
            var_891 = "ｾｯｺ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 85;
            var_891 = "ﾘｿﾞｯﾄ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 32;
            var_891 = "吉良吉影";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 44;
            var_891 = "ﾚｯﾄﾞﾎｯﾄﾁﾘﾍﾟｯﾊﾟｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 72;
            var_891 = "ｹﾝｿﾞｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 66;
            var_891 = "ﾀﾙｶｽ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 113;
            var_891 = "DIO";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 15;
            var_891 = "ﾍﾟｯﾄｼｮｯﾌﾟ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 123;
            var_891 = "ﾌﾞﾁｬﾗﾃｨ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 80;
            var_891 = "ﾗﾝｸﾞ･ﾗﾝｸﾞﾗｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 65;
            var_891 = "虹村形兆";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 40;
            var_891 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 41;
            var_891 = "ﾊﾞｯﾄﾞｶﾝﾊﾟﾆｰ戦車";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 42;
            var_891 = "ｱﾊﾟｯﾁ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 54;
            var_891 = "ｸﾞﾘｰﾝﾍﾞﾚｰ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 61;
            var_891 = "ﾖｰﾖｰﾏｯ";
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 21;
            var_891 = "ｽﾄﾚｲ･ｷｬｯﾄ";
        }
        if (var_3489 == 2) {
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 88;
                var_891 = "ﾄﾞﾉｳﾞｧﾝ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 138;
                var_891 = "ﾃﾞｨｵ･ﾌﾞﾗﾝﾄﾞｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 140;
                var_891 = "ｼﾞｮﾅｻﾝ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 73;
                var_891 = "ﾀﾞｲｱｰさん";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 30;
                var_891 = "禁煙中ﾎﾙ･ﾎｰｽ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 122;
                var_891 = "ﾎﾟﾙﾅﾚﾌ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 121;
                var_891 = "花京院";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 152;
                var_891 = "ﾄﾘｯｼｭ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 160;
                var_891 = "ｳｴｽﾄｳｯﾄﾞ看守";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 86;
                var_891 = "ｻﾝﾀﾅ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 155;
                var_891 = "ﾏﾗｲｱ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 156;
                var_891 = "ｳｪｻﾞｰ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 157;
                var_891 = "ｱﾅｽｲ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 144;
                var_891 = "川尻浩作";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 128;
                var_891 = "4部承太郎";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 158;
                var_891 = "ﾌﾟｯﾂﾝ由花子";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 150;
                var_891 = "康一act2!!";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 68;
                var_891 = "ﾌﾞﾁ切れた仗助";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 67;
                var_891 = "ﾌﾞﾁ切れた億泰";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 172;
                var_891 = "虫喰いでない";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 151;
                var_891 = "虫喰い";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 87;
                var_891 = "ｴｼﾃﾞｨｼ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 164;
                var_891 = "ｴｼﾃﾞｨｼの脳";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 109;
                var_891 = "ワムウ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 110;
                var_891 = "カーズ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 139;
                var_891 = "ﾘｻﾘｻ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 124;
                var_891 = "ﾐｽﾀ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 127;
                var_891 = "C-MOON";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 126;
                var_891 = "退院した花京院";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 129;
                var_891 = "ｱﾇﾋﾞｽﾎﾟﾙﾅﾚﾌ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 133;
                var_891 = "ｳﾞｧﾆﾗｱｲｽ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 64;
                var_891 = "ｷﾞｱｯﾁｮ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 137;
                var_891 = "成長した吉良";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 153;
                var_891 = "ﾏｯｸｲｨｰﾝ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 118;
                var_891 = "ｸﾘｰﾑ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 114;
                var_891 = "最高にﾊｲなDIO";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 111;
                var_891 = "究極カーズ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 120;
                var_891 = "承太郎";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 60;
                var_891 = "ｻﾞ･ﾆｭｰ神父";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 98;
                var_891 = "ｴﾝﾎﾟﾘｵ(ｳｪｻﾞｰ)";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 19;
                var_891 = "ｱﾗﾋﾞｱﾌｧｯﾂ";
            }
            var_3509++;
            if (var_883 == var_3509) {
                var_437 = 90;
                var_891 = "岩";
            }
        }
        var_3509++;
        if (var_883 == var_3509) {
            var_437 = 37;
            var_891 = "猫";
        }
        return;
    });
}
function func894() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(894);
        var_3511 = 6251;
        var_3512 = ginfo(4);
        if (var_3512 >= 330) {
            var_3513 = ginfo(4) - 320 - 8;
            var_3514 = ginfo(5);
        }
        if (var_3512 < 330) {
            var_3513 = ginfo(4) + 320 + 15;
            if (var_10 == 1) {
                var_3513 = var_3513 + 200;
            }
            var_3514 = ginfo(5);
        }
        var_3515 = sdim(256, 4);
        var_3516 = dim(30);
        var_1068 = sdim(300, 30);
        var_3517 = sdim(512 + 1);
        var_1058 = dim(30, 30);
        var_3518 = dim(30, 30);
        var_3519 = dim(30);
        var_3520 = sdim(40);
        var_3521 = sdim(300, 40);
        var_1069 = dim(10, 40);
        var_1070 = sdim(100, 10);
        var_1071 = sdim(100, 10);
        var_3522 = "";
        var_3079 = 0;
        var_534 = 0;
        var_624 = 0;
        var_3523 = 0;
        screen_(33, 320, 460, 4, var_3513, var_3514);
        width(320, 200);
        SetWindowLongA(hwnd, -8, var_15);
        var_3524 = (1 && 2) * (-2) - 16;
        gsel(ginfo(3), -1);
        gsel(ginfo(3), 1);
        title("ログイン");
        cls(4);
        gmode(2);
        pos(35, 35);
        gcopy(17, 0, 560, 280, 120);
        color(0, 0, 0);
        gmode(4, null, null, 80);
        pos(0, 0);
        gcopy(12, 0, 0, 320, 200);
        font("MS ゴシック", 12);
        color(255, 255, 255);
        pos(10, 10);
        mes("ニックネーム");
        pos(10, 30);
        input(var_40, 110, null, 10);
        pos(10, 60);
        mes("接続先アドレス");
        pos(10, 80);
        input(var_39, 110, null, 20);
        pos(10, 110);
        mes("使用ポート");
        pos(10, 130);
        input(var_3511, 110, null, 5);
        pos(10, 160);
        objsize(80, 24);
        button("接続", func895);
        stop();
    });
}
function func895() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(895);
        clrobj();
        color(0, 0, 0);
        boxf();
        gmode(2);
        pos(35, 35);
        gcopy(17, 0, 560, 280, 120);
        color(0, 0, 0);
        gmode(4, null, null, 80);
        pos(0, 0);
        gcopy(12, 0, 0, 320, 200);
        color(255, 255, 255);
        pos(10, 20);
        mes("接続中．．．");
        pos(10, 40);
        button("キャンセル", func896);
        tcpopen(var_1050, var_39, var_3511);
        if (stat) {
            gsel(33, -1);
            gsel(0, 1);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "接続に失敗した。";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            yield func009();
            return;
        }
        for (var cnt1 = 0; true; ++cnt1) {
            tcpiscon(var_1050);
            if (stat) {
                break;
            }
            yield wait(1);
        }
        if (stat != 1) {
            gsel(33, -1);
            gsel(0, 1);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "接続に失敗した。";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            yield func009();
            return;
        }
        clrobj();
        color(0, 0, 0);
        boxf();
        title("相手の情報");
        var_3525 = "相手の情報";
        width(320, 500);
        var_3513 = ginfo(4);
        var_3514 = ginfo(5) + 200;
        screen_(30, 320, 320, 4, var_3513, var_3514);
        SetWindowLongA(hwnd, -8, var_15);
        var_3524 = (1 && 2) * (-2) - 16;
        gsel(ginfo(3), -1);
        gsel(ginfo(3), 1);
        title("チャットウィンドウ");
        cls(4);
        color(0, 0, 0);
        boxf();
        var_3526 = sdim(10000);
        var_3526 = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
        pos(0, 294);
        input(var_3517, 320, 24, 50);
        var_3527 = stat;
        pos(0, 0);
        mesbox(var_3526, 320, 290, 0);
        var_3528 = stat;
        var_3529 = objinfo(var_3528, 2);
        objsel(var_3527);
        yield func898();
        if (var_3530 == 1) {
            gsel(33, -1);
            gsel(30, -1);
            gsel(0, 1);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "ここは満員だ・・・";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            yield func009();
            return;
        }
        if (var_3531 == 1) {
            var_407 = 2;
            var_536 = 1;
            var_3532 = sdim(300, 30);
            var_3533 = sdim(300, 30);
            var_3534 = sdim(300, 30);
            onkey(func901);
            gsel(33, 1);
            title("みんなの情報");
            gsel(0, 1);
            yield func331();
            yield func929();
            var_3517 = "＃ログイン＃";
            yield func900();
            yield func009();
            return;
        }
        var_407 = 1;
        onkey(func901);
        gsel(33, 1);
        gsel(0, 1);
        yield func331();
        yield func907();
        yield func009();
        return;
    });
}
function func896() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(896);
        gsel(33, -1);
        gsel(0, 1);
        yield func009();
        return;
    });
}
function func897() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(897);
        if (wparam == 8) {
            ShowWindow(var_15, 7);
            return (0);
        }
        else {
            return;
        }
    });
}
function func898() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(898);
        if (var_3535 == 0) {
            var_3536 = "初水";
        }
        if (var_3535 == 1) {
            var_3536 = "初赤";
        }
        if (var_3535 == 2) {
            var_3536 = "初青";
        }
        if (var_3535 == 3) {
            var_3536 = "初黄";
        }
        tcpput("" + var_3536 + "" + var_40, var_1050);
        tcpput("\n", var_1050);
        var_3530 = 0;
        var_3531 = 0;
        for (var cnt1 = 0; true; ++cnt1) {
            var_3537 = sdim(1024);
            tcpgetl(var_3537, 1024, var_1050);
            if (stat != 0 && var_3537 == "o2") {
                var_3531 = 1;
                break;
            }
            if (stat != 0 && var_3537 == "ok") {
                var_3531 = 0;
                break;
            }
            if (stat != 0 && var_3537 == "man") {
                var_3530 = 1;
                break;
            }
            yield wait(1);
        }
        return;
    });
}
function func899() {
    return __awaiter(this, void 0, void 0, function* () {
        dbgprt(899);
        netfail(var_1050);
        if (stat) {
            var_407 = 0;
            netclose(var_1050);
            gsel(33, -1);
            gsel(30, -1);
            gsel(0, 1);
            onkey(0);
            var_293 = "";
            var_294 = "";
            var_295 = "";
            var_296 = "";
            var_297 = "";
            var_298 = "";
            var_299 = 0;
            var_293 = "接続が切断された。";
            var_294 = "";
            var_198 = 1;
            var_300 = 0;
            yield func047();
            for (var cnt2 = 0; cnt2 < 5; ++cnt2) {
                yield func337();
            }
            return;
        }
        tcpcount(var_3538, var_1050);
        if (var_3538 != 0) {
            var_3537 = sdim(1024);
            var_3539 = sdim(1024);
            tcpgetl(var_3537, 1024, var_1050);
            var_3539 = var_3537;
            var_3540 = 0;
            var_3541 = 0;
            if (stat != 0) {
                var_3542 = strmid(var_3537, 0, 4);
                var_3543 = strmid(var_3537, 4, 250);
                if (var_3542 == "倒敵") {
                    yield func916();
                    return;
                }
                if (var_3542 == "女帝") {
                    yield func918();
                    return;
                }
                if (var_3542 == "喋背") {
                    yield func922();
                    return;
                }
                if (var_3542 == "送具") {
                    yield func913();
                    return;
                }
                if (var_3542 == "捨送") {
                    yield func908();
                    var_3541 = 1;
                }
                var_3544 = 0;
                if (var_3542 == "字水") {
                    var_3539 = "" + var_3543;
                    var_3544 = 0;
                    var_3540 = 1;
                }
                if (var_3542 == "字赤") {
                    var_3539 = "" + var_3543;
                    var_3544 = 1;
                    var_3540 = 1;
                }
                if (var_3542 == "字青") {
                    var_3539 = "" + var_3543;
                    var_3544 = 2;
                    var_3540 = 1;
                }
                if (var_3542 == "字黄") {
                    var_3539 = "" + var_3543;
                    var_3544 = 3;
                    var_3540 = 1;
                }
                if (var_3542 == "行白") {
                    var_3539 = "" + var_3543;
                    var_3544 = 0;
                }
                if (var_3542 == "行赤") {
                    var_3539 = "" + var_3543;
                    var_3544 = 1;
                }
                if (var_3542 == "行青") {
                    var_3539 = "" + var_3543;
                    var_3544 = 2;
                }
                if (var_3542 == "行黄") {
                    var_3539 = "" + var_3543;
                    var_3544 = 3;
                }
                if (var_3542 == "行水") {
                    var_3539 = "" + var_3543;
                    var_3544 = 4;
                }
                if (var_3542 == "行緑") {
                    var_3539 = "" + var_3543;
                    var_3544 = 5;
                }
                if (var_3542 == "行橙") {
                    var_3539 = "" + var_3543;
                    var_3544 = 6;
                }
                if (var_3542 == "行紫") {
                    var_3539 = "" + var_3543;
                    var_3544 = 7;
                }
                if (var_3542 == "行茶") {
                    var_3539 = "" + var_3543;
                    var_3544 = 8;
                }
                if (instr(var_3537, 0, "さんが接続しました") != (-1)) {
                    var_3544 = 6;
                    yield func907();
                }
                if (instr(var_3537, 0, "さんは切断しました") != (-1)) {
                    gsel(33);
                    var_3525 = "相手の情報";
                    title(var_3525);
                    gsel(0);
                }
                if (var_3540 == 1) {
                    notesel(var_3526);
                    var_447 = noteinfo(0);
                    if (var_447 >= 200) {
                        notedel(0);
                    }
                    var_3526 = var_3526 + "\n" + var_3539;
                    sendmsg(var_3529, 12, 0, var_3526);
                    var_447 = noteinfo(0) - 1;
                    var_449 = noteinfo(1);
                    sendmsg(var_3529, 177, var_449, var_449);
                    sendmsg(var_3529, 183, 0, 0);
                    return;
                }
                if (var_3540 == 0) {
                    var_3545 = 33;
                    var_3546 = 220;
                    var_3547 = 420;
                    var_3548 = 440;
                    var_3549 = 125;
                    gsel(33);
                }
                redraw(0);
                if (var_3541 == 0) {
                    gmode(0);
                    pos(0, var_3549);
                    gcopy(var_3545, 0, var_3549 + 20, var_3546, var_3548);
                    pos(10, var_3547);
                    color(255, 255, 255);
                    if (var_3544 == 1) {
                        color(255, 0, 0);
                    }
                    if (var_3544 == 2) {
                        color(0, 0, 255);
                    }
                    if (var_3544 == 3) {
                        color(255, 255, 0);
                    }
                    if (var_3544 == 4) {
                        color(0, 255, 255);
                    }
                    if (var_3544 == 5) {
                        color(0, 255, 0);
                    }
                    if (var_3544 == 6) {
                        color(255, 180, 90);
                    }
                    if (var_3544 == 7) {
                        color(240, 0, 240);
                    }
                    if (var_3544 == 8) {
                        color(225, 195, 145);
                    }
                    if (var_3544 == 9) {
                        color(255, 255, 255);
                    }
                    font("MS ゴシック", 12);
                    mes(var_3539);
                }
                if (var_3540 == 0) {
                    var_3233 = 5;
                    var_3550 = 3;
                    var_3231 = 255;
                    var_3232 = 150;
                    var_1631 = 245;
                    var_1632 = 140;
                    var_1633 = 65;
                    var_1634 = 65;
                    var_1635 = 0;
                    var_1636 = 0;
                    color(0, 0, 0);
                    boxf(var_1631 - 3, var_1632 - 3, var_1631 - 3 + var_1633 + 5, var_1632 - 3 + var_1634 + 7);
                    gmode(4, null, null, 100);
                    pos(var_1631 - 3, var_1632 - 3);
                    gcopy(12, 0, 0, var_1633 + 7, var_1634 + 5);
                    gmode(2);
                    color(255, 255, 255);
                    line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                    line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                    line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                    line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                    pset(var_1631 - var_1635, var_1632 - var_1636);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                    pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                    color(255, 255, 255);
                    line(var_3231 - 1, var_3232 - 1, var_3231 - 1, 9 * var_3233 + var_3232 + 1);
                    line(var_3231 - 2, var_3232 - 1, 9 * var_3233 + var_3231 + 1, var_3232 - 1);
                    line(9 * var_3233 + var_3231 + 1, var_3232 - 1, 9 * var_3233 + var_3231 + 1, 9 * var_3233 + var_3232 + 1);
                    line(var_3231 - 1, 9 * var_3233 + var_3232 + 1, 9 * var_3233 + var_3231 + 1, 9 * var_3233 + var_3232 + 1);
                    var_3551 = 0;
                    var_449 = 0;
                    for (var cnt4 = 0; cnt4 < 9; ++cnt4) {
                        var_447 = 0;
                        for (var cnt5 = 0; cnt5 < 9; ++cnt5) {
                            if (peek(var_1068[25], var_3551) == 48) {
                                color(0, 0, 0);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3233, var_447 * var_3233 + var_3232 + var_3233);
                            }
                            if (peek(var_1068[25], var_3551) == 49) {
                                color(0, 0, 255);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3233, var_447 * var_3233 + var_3232 + var_3233);
                            }
                            if (peek(var_1068[25], var_3551) == 55) {
                                color(0, 0, 150);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3233, var_447 * var_3233 + var_3232 + var_3233);
                            }
                            if (peek(var_1068[25], var_3551) == 50) {
                                color(255, 0, 255);
                                line(var_449 * var_3233 + var_3231 - 1, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231 + 4, var_447 * var_3233 + var_3232 + 4);
                                line(var_449 * var_3233 + var_3231 + 5, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232 + 4);
                            }
                            if (peek(var_1068[25], var_3551) == 51) {
                                color(0, 255, 255);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                            }
                            if (peek(var_1068[25], var_3551) == 52) {
                                color(255, 0, 0);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                            }
                            if (peek(var_1068[25], var_3551) == 53) {
                                color(0, 255, 255);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                                color(0, 0, 255);
                                pset(var_447 * var_3233 + var_3231 + 1, var_449 * var_3233 + var_3232 + 1);
                            }
                            if (peek(var_1068[25], var_3551) == 54) {
                                color(255, 255, 255);
                                pset(var_449 * var_3233 + var_3231 + 1, var_447 * var_3233 + var_3232);
                                pset(var_449 * var_3233 + var_3231 + 2, var_447 * var_3233 + var_3232);
                                pset(var_449 * var_3233 + var_3231 + 3, var_447 * var_3233 + var_3232);
                                pset(var_449 * var_3233 + var_3231 + 1, var_447 * var_3233 + var_3232 + 4);
                                pset(var_449 * var_3233 + var_3231 + 2, var_447 * var_3233 + var_3232 + 4);
                                pset(var_449 * var_3233 + var_3231 + 3, var_447 * var_3233 + var_3232 + 4);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232 + 1, var_449 * var_3233 + var_3231 + 4, var_447 * var_3233 + var_3232 + 3);
                            }
                            if (peek(var_1068[25], var_3551) == 56) {
                                color(255, 255, 0);
                                boxf(var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232, var_449 * var_3233 + var_3231 + var_3550, var_447 * var_3233 + var_3232 + var_3550);
                            }
                            if (peek(var_1068[25], var_3551) == 57) {
                                color(0, 255, 255);
                                line(var_449 * var_3233 + var_3231 - 1, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231 + 4, var_447 * var_3233 + var_3232 + 4);
                                line(var_449 * var_3233 + var_3231 + 5, var_447 * var_3233 + var_3232 - 1, var_449 * var_3233 + var_3231, var_447 * var_3233 + var_3232 + 4);
                            }
                            var_3551++;
                            var_447++;
                        }
                        var_449++;
                    }
                    if (var_62 == int(var_1068[12]) && var_62 != 0) {
                        var_536 = 1;
                    }
                    else {
                        var_536 = 0;
                    }
                    var_1631 = 10;
                    var_1632 = 10;
                    var_1633 = 300;
                    var_1634 = 110;
                    var_1635 = 0;
                    var_1636 = 0;
                    color(1, 1, 1);
                    boxf(0, 0, 320, 120);
                    color(0, 0, 0);
                    gmode(4, null, null, 100);
                    pos(var_1631 - 3, var_1632 - 3);
                    gcopy(12, 0, 0, var_1633 + 7, 110 + 5);
                    gmode(2);
                    color(255, 255, 255);
                    line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                    line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                    line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                    line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                    pset(var_1631 - var_1635, var_1632 - var_1636);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                    pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                    pos(var_1631 + 7, var_1632 + 7);
                    gcopy(3, 40, 0, 40, 40);
                    var_2607 = var_1631 + 7 + 30;
                    var_2608 = var_1631 + 7 + 24;
                    if (int(var_1068[3]) >= 10) {
                        var_2607 = var_2607 - 5;
                    }
                    font("MS ゴシック", 16, 1);
                    color(1, 1, 1);
                    pos(var_2607 - 1, var_2608);
                    mes(var_1068[3]);
                    pos(var_2607 + 1, var_2608);
                    mes(var_1068[3]);
                    pos(var_2607, var_2608 - 1);
                    mes(var_1068[3]);
                    pos(var_2607, var_2608 + 1);
                    mes(var_1068[3]);
                    color(255, 255, 255);
                    pos(var_2607, var_2608);
                    mes(var_1068[3]);
                    font("MS ゴシック", 12);
                    pos(var_1631 + 55, var_1632 + 7);
                    color(255, 255, 255);
                    mes("");
                    if (int(var_1068[12]) == 0) {
                        mes("地上");
                    }
                    if (int(var_1068[12]) == 1) {
                        mes("ホテル外 " + var_1068[10] + "階");
                    }
                    if (int(var_1068[12]) == 2) {
                        mes("大迷宮 " + var_1068[10] + "階");
                    }
                    if (int(var_1068[12]) == 3) {
                        mes("試練　" + var_1068[10] + "階");
                    }
                    if (int(var_1068[12]) == 4) {
                        mes("一巡後 " + var_1068[10] + "階");
                    }
                    if (int(var_1068[12]) >= 5) {
                        mes("");
                    }
                    var_3552 = 0;
                    var_3553 = int(var_1068[10]);
                    var_3552 = var_91 - var_3553;
                    if (var_62 != int(var_1068[12])) {
                        color(150, 150, 150);
                        mes("（別の場所）");
                    }
                    if (var_62 == int(var_1068[12])) {
                        if (var_3552 < (-2)) {
                            color(255, 0, 0);
                            var_3554 = -var_3552;
                            mes("（" + var_3554 + "こ次の階）");
                        }
                        if (var_3552 == (-2)) {
                            color(255, 255, 0);
                            mes("（2こ次の階）");
                        }
                        if (var_3552 == (-1)) {
                            color(0, 255, 255);
                            mes("（次の階）");
                        }
                        if (var_3552 == 0) {
                            color(0, 255, 255);
                            mes("（同じ階）");
                        }
                        if (var_3552 == 1) {
                            color(0, 255, 255);
                            mes("（前の階）");
                        }
                        if (var_3552 == 2) {
                            color(255, 255, 0);
                            mes("（2こ前の階）");
                        }
                        if (var_3552 > 2) {
                            color(255, 0, 0);
                            mes("（" + var_3552 + "こ前の階）");
                        }
                    }
                    pos(var_1631 + 5, var_1632 + 58);
                    color(255, 255, 255);
                    if (int(var_1068[5]) > 0) {
                        var_3555 = Math.floor(int(var_1068[4]) / int(var_1068[5]));
                    }
                    if (var_3555 < 2) {
                        color(255, 255, 255);
                    }
                    if (var_3555 >= 2 || int(var_1068[5]) < 1) {
                        color(220, 0, 0);
                    }
                    if (int(var_1068[5]) == 0) {
                        color(255, 255, 255);
                    }
                    mes("ＨＰ　　" + var_1068[5] + "/" + var_1068[4]);
                    color(255, 255, 255);
                    mes("精神力　" + var_1068[7] + "/" + var_1068[6]);
                    mes("満腹度　" + var_1068[9] + "/" + var_1068[8]);
                    mes("お金　　" + var_1068[11] + " G");
                    var_1631 = var_1631 + 4;
                    var_1632 = var_1632 + 5;
                    var_1633 = 120;
                    var_1634 = 50;
                    var_1635 = 0;
                    var_1636 = 0;
                    color(255, 255, 255);
                    line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                    line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                    line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                    line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                    pset(var_1631 - var_1635, var_1632 - var_1636);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                    pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                    pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                    var_1631 = 145;
                    var_1632 = 15;
                    var_1633 = 50;
                    var_1634 = 50;
                    var_1635 = 0;
                    var_1636 = 0;
                    var_3556 = var_1631;
                    for (var cnt4 = 0; cnt4 < 3; ++cnt4) {
                        color(255, 255, 255);
                        line(var_1631 - var_1635, var_1632 - var_1636 - 1, var_1631 + var_1633 + var_1635, var_1632 - var_1636 - 1);
                        line(var_1631 - var_1635, var_1632 + var_1634 + var_1636, var_1631 + var_1633 + var_1635, var_1632 + var_1634 + var_1636);
                        line(var_1631 - var_1635 - 1, var_1632 - var_1636, var_1631 - var_1635 - 1, var_1632 + var_1634 + var_1636 - 2);
                        line(var_1631 + var_1633 + var_1635 + 2, var_1632 - var_1636, var_1631 + var_1633 + var_1635 + 2, var_1632 + var_1634 + var_1636 - 2);
                        pset(var_1631 - var_1635, var_1632 - var_1636);
                        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 - var_1636);
                        pset(var_1631 - var_1635, var_1632 + var_1634 + var_1636 - 1);
                        pset(var_1631 + var_1633 + var_1635 + 1, var_1632 + var_1634 + var_1636 - 1);
                        var_1631 = var_1631 + 55;
                    }
                    var_3557 = 1;
                    pos(var_3556 + 5, var_1632 + 5);
                    var_575 = int(var_1068[13]);
                    yield func070();
                    if (var_575 != 0) {
                        gcopy(var_576, var_577, var_578, 40, 40);
                    }
                    color(1, 1, 1);
                    pos(var_3556 + 5 + 31, var_1632 + 5 + 30);
                    mes("" + var_1068[15]);
                    pos(var_3556 + 5 + 33, var_1632 + 5 + 30);
                    mes("" + var_1068[15]);
                    pos(var_3556 + 5 + 32, var_1632 + 5 + 29);
                    mes("" + var_1068[15]);
                    pos(var_3556 + 5 + 32, var_1632 + 5 + 31);
                    mes("" + var_1068[15]);
                    color(0, 255, 0);
                    pos(var_3556 + 5 + 32, var_1632 + 5 + 30);
                    mes("" + var_1068[15]);
                    pos(var_3556 + 60, var_1632 + 5);
                    var_575 = int(var_1068[16]);
                    yield func070();
                    if (var_575 != 0) {
                        gcopy(var_576, var_577, var_578, 40, 40);
                    }
                    color(1, 1, 1);
                    pos(var_3556 + 60 + 31, var_1632 + 5 + 30);
                    mes("" + var_1068[18]);
                    pos(var_3556 + 60 + 33, var_1632 + 5 + 30);
                    mes("" + var_1068[18]);
                    pos(var_3556 + 60 + 32, var_1632 + 5 + 29);
                    mes("" + var_1068[18]);
                    pos(var_3556 + 60 + 32, var_1632 + 5 + 31);
                    mes("" + var_1068[18]);
                    color(0, 255, 0);
                    pos(var_3556 + 60 + 32, var_1632 + 5 + 30);
                    mes("" + var_1068[18]);
                    pos(var_3556 + 115, var_1632 + 5);
                    var_575 = int(var_1068[19]);
                    yield func070();
                    if (var_575 != 0) {
                        gcopy(var_576, var_577, var_578, 40, 40);
                    }
                    var_3557 = 0;
                    pos(var_3556 - 10, var_1632 + 5 + 50);
                    color(255, 255, 0);
                    var_3558 = int(var_1068[13]);
                    yield func924();
                    if (int(var_1068[13]) == 0) {
                        mes("[攻] なし");
                    }
                    if (int(var_1068[13]) != 0) {
                        if (int(var_1068[14]) == 0) {
                            mes("[攻] " + var_3559);
                        }
                        if (int(var_1068[14]) != 0) {
                            mes("[攻] " + var_3559 + "+" + var_1068[14]);
                        }
                    }
                    color(255, 180, 90);
                    var_3558 = int(var_1068[16]);
                    yield func924();
                    if (int(var_1068[16]) == 0) {
                        mes("[防] なし");
                    }
                    if (int(var_1068[16]) != 0) {
                        if (int(var_1068[17]) == 0) {
                            mes("[防] " + var_3559);
                        }
                        if (int(var_1068[17]) != 0) {
                            mes("[防] " + var_3559 + "+" + var_1068[17]);
                        }
                    }
                    color(240, 0, 240);
                    var_3558 = int(var_1068[19]);
                    yield func924();
                    if (int(var_1068[19]) == 0) {
                        mes("[能] なし");
                    }
                    if (int(var_1068[19]) != 0) {
                        if (int(var_1068[20]) == 0) {
                            mes("[能] " + var_3559);
                        }
                        if (int(var_1068[20]) != 0) {
                            mes("[能] " + var_3559 + "+" + var_1068[20]);
                        }
                    }
                    color(225, 195, 145);
                    var_3558 = int(var_1068[2]);
                    yield func924();
                    if (int(var_1068[2]) == 0) {
                        mes("[射] なし");
                    }
                    if (int(var_1068[2]) != 0) {
                        if (int(var_1068[21]) == 0) {
                            mes("[射] " + var_3559);
                        }
                        if (int(var_1068[21]) != 0) {
                            mes("[射] " + var_3559 + "(" + var_1068[21] + ")");
                        }
                    }
                }
                redraw(1);
            }
        }
        return;
    });
}