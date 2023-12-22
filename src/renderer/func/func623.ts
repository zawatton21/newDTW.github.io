import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func623(this: any) {
        Adap.dbgprt(623);
        Gvar.var_2905 = Gvar.var_347;
        Gvar.var_2906 = Gvar.var_348;
        Gvar.var_2907 = Gvar.var_347 - 1;
        if (Gvar.var_2907 < 0) {
            Gvar.var_2907 = 0;
        }
        Gvar.var_2908 = Gvar.var_347 + 1;
        if (Gvar.var_2908 > Gvar.var_33) {
            Gvar.var_2908 = Gvar.var_33;
        }
        Gvar.var_2909 = Gvar.var_348 + 1;
        if (Gvar.var_2909 > Gvar.var_33) {
            Gvar.var_2909 = Gvar.var_33;
        }
        Gvar.var_2910 = Gvar.var_348 - 1;
        if (Gvar.var_2910 < 0) {
            Gvar.var_2910 = 0;
        }
        Gvar.var_2911 = 0;
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2907][Gvar.var_2906] != 0 && Gvar.var_71[Gvar.var_2907][Gvar.var_2906] != 13 && Gvar.var_65[Gvar.var_2907][Gvar.var_2906] == 0 && Gvar.var_82[Gvar.var_2907][Gvar.var_2906] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2907;
            Gvar.var_2913 = Gvar.var_2906;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2907][Gvar.var_2906];
            Gvar.var_1365 = 4;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2908][Gvar.var_2906] != 0 && Gvar.var_71[Gvar.var_2908][Gvar.var_2906] != 13 && Gvar.var_65[Gvar.var_2908][Gvar.var_2906] == 0 && Gvar.var_82[Gvar.var_2908][Gvar.var_2906] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2908;
            Gvar.var_2913 = Gvar.var_2906;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2908][Gvar.var_2906];
            Gvar.var_1365 = 6;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2905][Gvar.var_2909] != 0 && Gvar.var_71[Gvar.var_2905][Gvar.var_2909] != 13 && Gvar.var_65[Gvar.var_2905][Gvar.var_2909] == 0 && Gvar.var_82[Gvar.var_2905][Gvar.var_2909] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2905;
            Gvar.var_2913 = Gvar.var_2909;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2905][Gvar.var_2909];
            Gvar.var_1365 = 2;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2905][Gvar.var_2910] != 0 && Gvar.var_71[Gvar.var_2905][Gvar.var_2910] != 13 && Gvar.var_65[Gvar.var_2905][Gvar.var_2910] == 0 && Gvar.var_82[Gvar.var_2905][Gvar.var_2910] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2905;
            Gvar.var_2913 = Gvar.var_2910;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2905][Gvar.var_2910];
            Gvar.var_1365 = 8;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2907][Gvar.var_2909] != 0 && Gvar.var_71[Gvar.var_2907][Gvar.var_2909] != 13 && Gvar.var_65[Gvar.var_2907][Gvar.var_2909] == 0 && Gvar.var_82[Gvar.var_2907][Gvar.var_2909] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2907;
            Gvar.var_2913 = Gvar.var_2909;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2907][Gvar.var_2909];
            Gvar.var_1365 = 1;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2908][Gvar.var_2909] != 0 && Gvar.var_71[Gvar.var_2908][Gvar.var_2909] != 13 && Gvar.var_65[Gvar.var_2908][Gvar.var_2909] == 0 && Gvar.var_82[Gvar.var_2908][Gvar.var_2909] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2908;
            Gvar.var_2913 = Gvar.var_2909;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2908][Gvar.var_2909];
            Gvar.var_1365 = 3;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2907][Gvar.var_2910] != 0 && Gvar.var_71[Gvar.var_2907][Gvar.var_2910] != 13 && Gvar.var_65[Gvar.var_2907][Gvar.var_2910] == 0 && Gvar.var_82[Gvar.var_2907][Gvar.var_2910] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2907;
            Gvar.var_2913 = Gvar.var_2910;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2907][Gvar.var_2910];
            Gvar.var_1365 = 7;
        }
        if (Gvar.var_2911 == 0 && Gvar.var_71[Gvar.var_2908][Gvar.var_2910] != 0 && Gvar.var_71[Gvar.var_2908][Gvar.var_2910] != 13 && Gvar.var_65[Gvar.var_2908][Gvar.var_2910] == 0 && Gvar.var_82[Gvar.var_2908][Gvar.var_2910] == 0) {
            Gvar.var_2911 = 1;
            Gvar.var_2912 = Gvar.var_2908;
            Gvar.var_2913 = Gvar.var_2910;
            Gvar.var_2914 = Gvar.var_71[Gvar.var_2908][Gvar.var_2910];
            Gvar.var_1365 = 9;
        }
        if (Gvar.var_2911 == 1) {
            Gvar.var_1366 = 0;
            Gvar.var_1368 = 0;
            Gvar.var_1367 = 5;
            Gvar.var_1369 = Gvar.var_2905 - Gvar.var_66 + 4;
            Gvar.var_1370 = Gvar.var_2906 - Gvar.var_67 + 4;
            Gvar.var_271 = 1;
            Gvar.var_1364 = 1;
            Gvar.var_1371 = 1;
    
            Adap.DSPLAY(156);
            for (let cnt2 = 0; cnt2 < 8; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1364++;
            }
            Gvar.var_271 = 0;
            Gvar.var_1364 = 0;
            Gvar.var_440 = Gvar.var_2912;
            Gvar.var_441 = Gvar.var_2913;
            Gvar.var_2499 = Gvar.var_2914;
            await Func.func556(); // 敵をフロアへ出現させる処理
            Gvar.var_1371 = 0;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_2915 = Adap.rnd(9);
            if (Gvar.var_2915 == 0) {
                Gvar.comments_row1 = "マギ――――ッ！";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_2915 == 1) {
                Gvar.comments_row1 = "やっぱりわたし！";
                Gvar.comments_row2 = "わたし　わたし　わたし　わたし";
            }
            if (Gvar.var_2915 == 2) {
                Gvar.comments_row1 = "ムギ―――ッ！";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_2915 == 3) {
                Gvar.comments_row1 = "ハアァアアアアアア―――";
                Gvar.comments_row2 = "";
            }
            if (Gvar.var_2915 == 4) {
                Gvar.comments_row1 = "まんまとだまされおったな";
                Gvar.comments_row2 = "このバカタレがァーッ";
            }
            if (Gvar.var_2915 == 5) {
                Gvar.comments_row1 = "ウジュル　　　　ウジュ";
                Gvar.comments_row2 = "　　　　ウジュル";
            }
            if (Gvar.var_2915 == 6) {
                Gvar.comments_row1 = "おしい！おしい！";
                Gvar.comments_row2 = "その隣のわたしだったな";
            }
            if (Gvar.var_2915 == 7) {
                Gvar.comments_row1 = "わたあああ～～～～～～しｨｨｨｨｨ";
                Gvar.comments_row2 = "だよ～～～～～～～～～～～オン！！";
            }
            if (Gvar.var_2915 == 8) {
                Gvar.comments_row1 = "史上最弱が最も最も最も最も最も最も";
                Gvar.comments_row2 = "最も最も最も最も最も最も　恐ろしィィ";
            }
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_26_x = Gvar.var_26[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_27_x = Gvar.var_27[8]; // Ver0.1310で値修正 2 → 8
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
        }
        Gvar.var_673 = Gvar.var_1912;
        return;
}

export {func623}
