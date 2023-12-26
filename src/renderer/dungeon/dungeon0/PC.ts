import { Gvar } from '../../variable'
import * as Adap from '../../adapter/index'
import * as Func from '../../func/index'
import * as Dung from '../../dungeon/index'
import * as Main from '../../newdtw/index'

// 銀行口座の設定
async function func796(this: any) {
        Adap.dbgprt(796);
        Gvar.var_1205 = 1;
        Gvar.var_3170 = 0;
        Gvar.var_3171 = 0;
        Gvar.var_3172 = 0;
        Gvar.var_3173 = 0;
        Gvar.var_3174 = 0;
        Gvar.var_3175 = 0;
        Gvar.var_3176 = 0;
        Gvar.var_3177 = 0;
        Gvar.var_3178 = 0;
        Gvar.var_3179 = 1;
        Gvar.var_3180 = 95;
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "" + Gvar.var_1032 + "G 入っています。";
        Gvar.comments_row2 = "何G 口座に入れますか？";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Dung.func798();
        return;
}

export {func796}

// 銀行口座の設定
async function func797(this: any) {
    Adap.dbgprt(797);
    Gvar.var_1205 = 2;
    Gvar.var_3170 = 0;
    Gvar.var_3171 = 0;
    Gvar.var_3172 = 0;
    Gvar.var_3173 = 0;
    Gvar.var_3174 = 0;
    Gvar.var_3175 = 0;
    Gvar.var_3176 = 0;
    Gvar.var_3177 = 0;
    Gvar.var_3178 = 0;
    Gvar.var_3179 = 1;
    Gvar.var_3180 = 95;
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "" + Gvar.var_1032 + "G 入っています。";
    Gvar.comments_row2 = "何G 口座から出しますか？";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 2; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    await Dung.func798();
    return;
}

export {func797}

// 銀行口座の設定
async function func798(this: any) {
    Adap.dbgprt(798);
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func080(); // 各キー入力確認
    if (Gvar.key_X_on == 1) {
        Gvar.var_1205 = 0;
        await Dung.func799(); // 口座へ入金、口座から出金した時の表示
    }
    if (Gvar.var_254 == 1 && Gvar.var_3179 != 6) {

        Adap.DSPLAY(100); // アイテム選択時の効果音
        Gvar.var_3179 = Gvar.var_3179 + 1;
        Gvar.var_3180 = Gvar.var_3180 - 15;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
    }
    if (Gvar.var_257 == 1 && Gvar.var_3179 != 1) {

        Adap.DSPLAY(100); // アイテム選択時の効果音
        Gvar.var_3179 = Gvar.var_3179 - 1;
        Gvar.var_3180 = Gvar.var_3180 + 15;
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
    }
    if (Gvar.var_255 == 1) { // var_255:入力判定[↑]

        Adap.DSPLAY(100); // アイテム選択時の効果音
        if (Gvar.var_3179 == 1) {
            Gvar.var_3170 = Gvar.var_3170 + 1;
            if (Gvar.var_3170 == 10) {
                Gvar.var_3170 = 0;
            }
        }
        if (Gvar.var_3179 == 2) {
            Gvar.var_3171 = Gvar.var_3171 + 1;
            if (Gvar.var_3171 == 10) {
                Gvar.var_3171 = 0;
            }
        }
        if (Gvar.var_3179 == 3) {
            Gvar.var_3172 = Gvar.var_3172 + 1;
            if (Gvar.var_3172 == 10) {
                Gvar.var_3172 = 0;
            }
        }
        if (Gvar.var_3179 == 4) {
            Gvar.var_3173 = Gvar.var_3173 + 1;
            if (Gvar.var_3173 == 10) {
                Gvar.var_3173 = 0;
            }
        }
        if (Gvar.var_3179 == 5) {
            Gvar.var_3174 = Gvar.var_3174 + 1;
            if (Gvar.var_3174 == 10) {
                Gvar.var_3174 = 0;
            }
        }
        if (Gvar.var_3179 == 6) {
            Gvar.var_3175 = Gvar.var_3175 + 1;
            if (Gvar.var_3175 == 10) {
                Gvar.var_3175 = 0;
            }
        }
        Gvar.var_3176 = Gvar.var_3175 * 100000 + Gvar.var_3174 * 10000 + Gvar.var_3173 * 1000 + Gvar.var_3172 * 100 + Gvar.var_3171 * 10 + Gvar.var_3170;
        if (Gvar.var_1205 == 1 && Gvar.var_3176 > Gvar.wallet) {
            Gvar.var_3181 = Math.floor(Gvar.wallet / 100000);
            Gvar.var_3182 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000) / 10000);
            Gvar.var_3183 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000) / 1000);
            Gvar.var_3184 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000) / 100);
            Gvar.var_3185 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100) / 10);
            Gvar.var_598 = Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100 - Gvar.var_3185 * 10;
            Gvar.var_3170 = Gvar.var_598;
            Gvar.var_3171 = Gvar.var_3185;
            Gvar.var_3172 = Gvar.var_3184;
            Gvar.var_3173 = Gvar.var_3183;
            Gvar.var_3174 = Gvar.var_3182;
            Gvar.var_3175 = Gvar.var_3181;
            Gvar.var_3176 = Gvar.wallet;
        }
        Gvar.var_3177 = Gvar.var_1032 + Gvar.var_3176;
        if (Gvar.var_1205 == 1 && Gvar.var_3177 >= 999999) {
            Gvar.var_3178 = 999999 - Gvar.var_1032;
            Gvar.var_3181 = Math.floor(Gvar.var_3178 / 100000);
            Gvar.var_3182 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000) / 10000);
            Gvar.var_3183 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000) / 1000);
            Gvar.var_3184 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000) / 100);
            Gvar.var_3185 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100) / 10);
            Gvar.var_598 = Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100 - Gvar.var_3185 * 10;
            Gvar.var_3170 = Gvar.var_598;
            Gvar.var_3171 = Gvar.var_3185;
            Gvar.var_3172 = Gvar.var_3184;
            Gvar.var_3173 = Gvar.var_3183;
            Gvar.var_3174 = Gvar.var_3182;
            Gvar.var_3175 = Gvar.var_3181;
            Gvar.var_3176 = Gvar.var_3178;
        }
        if (Gvar.var_1205 == 2 && Gvar.var_3176 > Gvar.var_1032) {
            Gvar.var_3181 = Math.floor(Gvar.var_1032 / 100000);
            Gvar.var_3182 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000) / 10000);
            Gvar.var_3183 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000) / 1000);
            Gvar.var_3184 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000) / 100);
            Gvar.var_3185 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100) / 10);
            Gvar.var_598 = Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100 - Gvar.var_3185 * 10;
            Gvar.var_3170 = Gvar.var_598;
            Gvar.var_3171 = Gvar.var_3185;
            Gvar.var_3172 = Gvar.var_3184;
            Gvar.var_3173 = Gvar.var_3183;
            Gvar.var_3174 = Gvar.var_3182;
            Gvar.var_3175 = Gvar.var_3181;
            Gvar.var_3176 = Gvar.var_1032;
        }
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
    }
    if (Gvar.var_259 == 1) { // var_259:入力判定[↓]

        Adap.DSPLAY(100); // アイテム選択時の効果音
        if (Gvar.var_3179 == 1) {
            Gvar.var_3170 = Gvar.var_3170 - 1;
            if (Gvar.var_3170 < 0) {
                Gvar.var_3170 = 9;
            }
        }
        if (Gvar.var_3179 == 2) {
            Gvar.var_3171 = Gvar.var_3171 - 1;
            if (Gvar.var_3171 < 0) {
                Gvar.var_3171 = 9;
            }
        }
        if (Gvar.var_3179 == 3) {
            Gvar.var_3172 = Gvar.var_3172 - 1;
            if (Gvar.var_3172 < 0) {
                Gvar.var_3172 = 9;
            }
        }
        if (Gvar.var_3179 == 4) {
            Gvar.var_3173 = Gvar.var_3173 - 1;
            if (Gvar.var_3173 < 0) {
                Gvar.var_3173 = 9;
            }
        }
        if (Gvar.var_3179 == 5) {
            Gvar.var_3174 = Gvar.var_3174 - 1;
            if (Gvar.var_3174 < 0) {
                Gvar.var_3174 = 9;
            }
        }
        if (Gvar.var_3179 == 6) {
            Gvar.var_3175 = Gvar.var_3175 - 1;
            if (Gvar.var_3175 < 0) {
                Gvar.var_3175 = 9;
            }
        }
        Gvar.var_3176 = Gvar.var_3175 * 100000 + Gvar.var_3174 * 10000 + Gvar.var_3173 * 1000 + Gvar.var_3172 * 100 + Gvar.var_3171 * 10 + Gvar.var_3170;
        if (Gvar.var_1205 == 1 && Gvar.var_3176 > Gvar.wallet) {
            Gvar.var_3181 = Math.floor(Gvar.wallet / 100000);
            Gvar.var_3182 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000) / 10000);
            Gvar.var_3183 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000) / 1000);
            Gvar.var_3184 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000) / 100);
            Gvar.var_3185 = Math.floor((Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100) / 10);
            Gvar.var_598 = Gvar.wallet - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100 - Gvar.var_3185 * 10;
            Gvar.var_3170 = Gvar.var_598;
            Gvar.var_3171 = Gvar.var_3185;
            Gvar.var_3172 = Gvar.var_3184;
            Gvar.var_3173 = Gvar.var_3183;
            Gvar.var_3174 = Gvar.var_3182;
            Gvar.var_3175 = Gvar.var_3181;
            Gvar.var_3176 = Gvar.wallet;
        }
        Gvar.var_3177 = Gvar.var_1032 + Gvar.var_3176;
        if (Gvar.var_1205 == 1 && Gvar.var_3177 >= 999999) {
            Gvar.var_3178 = 999999 - Gvar.var_1032;
            Gvar.var_3181 = Math.floor(Gvar.var_3178 / 100000);
            Gvar.var_3182 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000) / 10000);
            Gvar.var_3183 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000) / 1000);
            Gvar.var_3184 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000) / 100);
            Gvar.var_3185 = Math.floor((Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100) / 10);
            Gvar.var_598 = Gvar.var_3178 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100 - Gvar.var_3185 * 10;
            Gvar.var_3170 = Gvar.var_598;
            Gvar.var_3171 = Gvar.var_3185;
            Gvar.var_3172 = Gvar.var_3184;
            Gvar.var_3173 = Gvar.var_3183;
            Gvar.var_3174 = Gvar.var_3182;
            Gvar.var_3175 = Gvar.var_3181;
            Gvar.var_3176 = Gvar.var_3178;
        }
        if (Gvar.var_1205 == 2 && Gvar.var_3176 > Gvar.var_1032) {
            Gvar.var_3181 = Math.floor(Gvar.var_1032 / 100000);
            Gvar.var_3182 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000) / 10000);
            Gvar.var_3183 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000) / 1000);
            Gvar.var_3184 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000) / 100);
            Gvar.var_3185 = Math.floor((Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100) / 10);
            Gvar.var_598 = Gvar.var_1032 - Gvar.var_3181 * 100000 - Gvar.var_3182 * 10000 - Gvar.var_3183 * 1000 - Gvar.var_3184 * 100 - Gvar.var_3185 * 10;
            Gvar.var_3170 = Gvar.var_598;
            Gvar.var_3171 = Gvar.var_3185;
            Gvar.var_3172 = Gvar.var_3184;
            Gvar.var_3173 = Gvar.var_3183;
            Gvar.var_3174 = Gvar.var_3182;
            Gvar.var_3175 = Gvar.var_3181;
            Gvar.var_3176 = Gvar.var_1032;
        }
        // await Func.func337(); // メッセージ関係呼び出し
        await Func.func337(); // メッセージ関係呼び出し
    }
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
        if (Gvar.var_1205 == 1) {
            Gvar.var_1032 = Gvar.var_1032 + Gvar.var_3176;
            Gvar.wallet = Gvar.wallet - Gvar.var_3176;
            await Dung.func799(); // 口座へ入金、口座から出金した時の表示
            return;
        }
        if (Gvar.var_1205 == 2) {
            Gvar.var_1032 = Gvar.var_1032 - Gvar.var_3176;
            Gvar.wallet = Gvar.wallet + Gvar.var_3176;
            if (Gvar.wallet > 999999) {
                Gvar.wallet = 999999;
            }
            await Dung.func799(); // 口座へ入金、口座から出金した時の表示
            return;
        }
    }
    await Dung.func798();
    return;
}

export {func798}


// 口座へ入金、口座から出金した時の表示
async function func799(this: any) {
    Adap.dbgprt(799);
    if (Gvar.var_1205 != 0) {

        Adap.DSPLAY(207);
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        if (Gvar.var_1205 == 1) {
            Gvar.comments_row1 = "" + Gvar.var_3176 + "G 口座に入れた。";
            Gvar.var_1205 = 0;
        }
        if (Gvar.var_1205 == 2) {
            Gvar.comments_row1 = "" + Gvar.var_3176 + "G 口座から出した。";
            Gvar.var_1205 = 0;
        }
        Gvar.comments_row2 = "　　　　";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
    }
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    await Main.func009(); // ゲーム基本動作フレーム処理
    return;
}
// ↑ここまで口座設定

export {func799}

// 不明
async function func800(this: any) {
    Adap.dbgprt(800);
    Gvar.var_3186 = 10;
    Gvar.var_3187 = 120;
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(Gvar.var_3186 - 3, 37);
    Adap.gcopy(12, 0, 0, Gvar.var_3187 + 7, 53);
    Adap.color(255, 255, 255);
    Adap.line(Gvar.var_3186, 39, Gvar.var_3186 + Gvar.var_3187, 39);
    Adap.line(Gvar.var_3186, 86, Gvar.var_3186 + Gvar.var_3187, 86);
    Adap.line(Gvar.var_3186 - 1, 40, Gvar.var_3186 - 1, 84);
    Adap.line(Gvar.var_3186 + Gvar.var_3187 + 2, 40, Gvar.var_3186 + Gvar.var_3187 + 2, 84);
    Adap.pset(Gvar.var_3186, 40);
    Adap.pset(Gvar.var_3186 + Gvar.var_3187 + 1, 40);
    Adap.pset(Gvar.var_3186, 85);
    Adap.pset(Gvar.var_3186 + Gvar.var_3187 + 1, 85);
    Adap.font(Gvar.font_type = "ＭＳ Ｐゴシック", Gvar.font_size = 20, Gvar.font_style = 1);
    Adap.color(255, 255, 255);
    Adap.pos(Gvar.var_3186 + 10, 53);
    Adap.mes("" + Gvar.var_3175);
    Adap.pos(Gvar.var_3186 + 10 + 15, 53);
    Adap.mes("" + Gvar.var_3174);
    Adap.pos(Gvar.var_3186 + 10 + 30, 53);
    Adap.mes("" + Gvar.var_3173);
    Adap.pos(Gvar.var_3186 + 10 + 45, 53);
    Adap.mes("" + Gvar.var_3172);
    Adap.pos(Gvar.var_3186 + 10 + 60, 53);
    Adap.mes("" + Gvar.var_3171);
    Adap.pos(Gvar.var_3186 + 10 + 75, 53);
    Adap.mes("" + Gvar.var_3170);
    Adap.font(Gvar.font_type = "ＭＳ Ｐゴシック", Gvar.font_size = 16, Gvar.font_style = 1);
    Adap.pos(Gvar.var_3186 + 10 + 90, 55);
    Adap.mes("G");
    Adap.font(Gvar.font_type = "ＭＳ Ｐゴシック", Gvar.font_size = 20, Gvar.font_style = 1);
    Adap.color(0, 255, 0);
    Adap.pos(Gvar.var_3180, 55);
    Adap.mes("_");
    return;
}

export {func800}

// 不明
async function func801(this: any) {
    Adap.dbgprt(801);
    Adap.DSPLAY(211);
    Gvar.var_783 = 5;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 4;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 3;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 2;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 1;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 0;
    return;
}

export {func801}


/*
ヴェネチアホテルに設置してあるPC設定
口座、アイテム手配等
*/ 
async function func802(this: any) {
    Adap.dbgprt(802);
    Gvar.var_243 = 0;
    Adap.DSPLAY(210);
    Gvar.var_783 = 1;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 2;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 3;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 4;
    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 5;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 6;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 7;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 5;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 8;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 9;
    if (Gvar.var_1014 == 0) {
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾍﾟﾘｰｺﾛ「ボス…　私です。ﾍﾟﾘｰｺﾛです」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「私ならば、今のボスのお力に";
        Gvar.comments_row2a = "　なれるでしょう…";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「私が手に入れられるｱｲﾃﾑの情報を";
        Gvar.comments_row2a = "　そのパソコンに送信します。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「少々費用はかかりますが、";
        Gvar.comments_row2a = "　必ず手に入れてみせます。";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「ｱｲﾃﾑはダンジョンの１階に";
        Gvar.comments_row2a = "　届けておきましょう」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_1014 = 1;
    }
    if (Gvar.var_991[0][1] == 0) {
        Gvar.var_1013 = 0;
    }
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    if (Gvar.var_1013 != 0) {
        Gvar.comments_row1 = "ﾍﾟﾘｰｺﾛ「ボス…何を仕入れてきましょう」";
        Gvar.comments_row2 = "";
    }
    if (Gvar.var_1013 == 0) {
        Gvar.comments_row1 = "ﾍﾟﾘｰｺﾛ「ボス…まだ何も手に入りません」";
        Gvar.comments_row2 = "";
    }
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    if (Gvar.var_1013 == 0) {
        for (let cnt2 = 0; cnt2 < 10; ++cnt2) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        await Dung.func801();
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    await Func.func340(); // キー入力による選択処理
    await Func.func051();
    Gvar.var_198 = 0;
    Gvar.var_1206 = 1;
    Gvar.var_1881 = Gvar.var_1013 * 20 + 37 + 30;
    Gvar.Y_axis_item_position = 45;
    Gvar.var_225 = 1;
    await Dung.func803();
    return;
}

export {func802}

// ヴェネチアホテルに設置してあるPC設定
async function func803(this: any) {
    Adap.dbgprt(803);
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func080(); // 各キー入力確認
    if (Gvar.key_X_on == 1) {
        Gvar.var_1206 = 0;
        Gvar.var_783 = 0;

        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Dung.func801();
        await Func.func051();
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {

        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.func051();
        await Dung.func805();
        return;
    }
    if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
        if (Gvar.var_225 != Gvar.var_1013) {
            Gvar.Y_axis_item_position = Gvar.Y_axis_item_position + 22;
            Gvar.var_225 = Gvar.var_225 + 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func803();
            return;
        }
        if (Gvar.var_225 == Gvar.var_1013) {
            Gvar.Y_axis_item_position = 45;
            Gvar.var_225 = 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // ここも間違っている?
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func803();
            return;
        }
    }
    if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
        if (Gvar.var_225 != 1) {
            Gvar.Y_axis_item_position = Gvar.Y_axis_item_position - 22;
            Gvar.var_225 = Gvar.var_225 - 1;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func803();
            return;
        }
        if (Gvar.var_225 == 1) {
            Gvar.Y_axis_item_position = 45 + (Gvar.var_1013 - 1) * 22;
            Gvar.var_225 = Gvar.var_1013;
            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func803();
            return;
        }
    }
    await Dung.func803();
    return;
}

export {func803}

// ヴェネチアホテルに設置してあるPC設定
async function func804(this: any) {
    Adap.dbgprt(804);
    Adap.color(0, 0, 0);
    Adap.gmode(4, null, null, 100);
    Adap.pos(5, 35);
    Adap.gcopy(12, 0, 0, 332, Gvar.var_1881 - 30);
    Adap.pos(5, 273);
    Adap.gcopy(12, 0, 0, 332, 62);
    Adap.color(255, 255, 255);
    Adap.line(9, 37, 330, 37);
    Adap.line(9, Gvar.var_1881, 330, Gvar.var_1881);
    Adap.line(8, 38, 8, Gvar.var_1881 - 2);
    Adap.line(332, 38, 332, Gvar.var_1881 - 2);
    Adap.pset(9, 38);
    Adap.pset(331, 38);
    Adap.pset(9, Gvar.var_1881 - 1);
    Adap.pset(331, Gvar.var_1881 - 1);
    Adap.line(9, 275, 330, 275);
    Adap.line(9, 332, 330, 332);
    Adap.line(8, 276, 8, 330);
    Adap.line(332, 276, 332, 330);
    Adap.pset(9, 276);
    Adap.pset(331, 276);
    Adap.pset(9, 331);
    Adap.pset(331, 331);
    Gvar.var_1620 = 1;
    Gvar.var_230 = 45;
    for (let cnt1 = 0; cnt1 < Gvar.var_1013; ++cnt1) {
        Gvar.var_2010 = Gvar.var_991[0][Gvar.var_1620][0];
        Gvar.var_2011 = Gvar.var_991[0][Gvar.var_1620][3];
        Gvar.var_2012 = Gvar.var_991[0][Gvar.var_1620][4];
        Gvar.var_2013 = Gvar.var_991[0][Gvar.var_1620][5];
        Gvar.var_1922 = Gvar.var_991[0][Gvar.var_1620][6];
        Gvar.var_2014 = Gvar.var_991[0][Gvar.var_1620][7];
        Gvar.var_2015 = Gvar.var_991[0][Gvar.var_1620][11];
        Gvar.var_2016 = Gvar.var_991[0][Gvar.var_1620][12];
        Gvar.var_2017 = Gvar.var_991[0][Gvar.var_1620][13];
        Gvar.var_2018 = Gvar.var_991[0][Gvar.var_1620][14];
        Gvar.var_2019 = Gvar.var_991[0][Gvar.var_1620][16];
        Gvar.var_2020 = Gvar.var_991[0][Gvar.var_1620][19];
        Gvar.belongings_item_list = Gvar.var_2010;
        Gvar.disc_rarity = Gvar.var_2017;
        await Func.func492(); // アイテムリスト呼び出し
        if (Gvar.var_2010 > 0) {
    
            Adap.font(Gvar.font_type = "ＭＳ Ｐゴシック", Gvar.font_size = 16, Gvar.font_style = 1);
            Adap.color(255, 255, 255);
            Adap.pos(40, Gvar.var_230);
            if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400) {
                Adap.color(0, 255, 0);
                Adap.mes(Gvar.item_name);
            }
            if (Gvar.belongings_item_list >= 400 && Gvar.belongings_item_list < 500) {
                Adap.color(225, 195, 145);
                Adap.mes("" + Gvar.item_name + "(" + Gvar.var_2011 + ")");
            }
            if (Gvar.belongings_item_list >= 500 && Gvar.belongings_item_list < 800) {
                Adap.color(255, 255, 255);
                Adap.mes(Gvar.item_name);
            }
            if (Gvar.belongings_item_list >= 800 && Gvar.belongings_item_list < 900) {
                Adap.color(0, 255, 255);
                Adap.mes("" + Gvar.item_name + "(" + Gvar.var_2014 + ")");
            }
            if (Gvar.belongings_item_list >= 900 && Gvar.belongings_item_list < 1000) {
                Adap.color(255, 255, 255);
                Adap.mes(Gvar.item_name);
            }
            if (Gvar.var_2015 == 1) {
                Gvar.var_1925 = 0;
                Adap.pos(260, Gvar.var_230);
                Adap.color(0, 255, 0);
                Gvar.var_482 = 0;
                Gvar.var_482 = (Gvar.var_2011 + Gvar.var_2012) * 50;
                Gvar.var_1925 = Gvar.buying_price + Gvar.var_482;
                Gvar.var_1925 = Gvar.var_1925 * Gvar.var_1036;
                Adap.mes(Gvar.var_1925);
            }
        }
        Gvar.var_1620 = Gvar.var_1620 + 1;
        Gvar.var_230 = Gvar.var_230 + 22;
    }
    Gvar.var_2023 = Gvar.var_991[0][Gvar.var_225][0];
    Gvar.var_2024 = Gvar.var_991[0][Gvar.var_225][5];
    Gvar.var_2025 = Gvar.var_991[0][Gvar.var_225][12];
    Gvar.var_2026 = Gvar.var_991[0][Gvar.var_225][13];
    Gvar.var_2027 = Gvar.var_991[0][Gvar.var_225][14];
    Gvar.var_2028 = Gvar.var_991[0][Gvar.var_225][15];
    Gvar.var_2029 = Gvar.var_991[0][Gvar.var_225][16];
    Gvar.belongings_item_list = Gvar.var_2023;
    Gvar.disc_rarity = Gvar.var_2026;
    await Func.func492(); // アイテムリスト呼び出し

    Adap.font("ＭＳ Ｐゴシック", 14, 1);
    Adap.pos(15, 283);
    Adap.color(255, 255, 255);
    if (Gvar.belongings_item_list < 100 || Gvar.belongings_item_list >= 400) {
        Adap.mes(Gvar.item_description1);
    }
    if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_2027 == 0) {
        Adap.mes("" + Gvar.item_description1);
    }
    if (Gvar.belongings_item_list >= 100 && Gvar.belongings_item_list < 400 && Gvar.var_2027 == 1) {
        Adap.mes("" + Gvar.item_description1 + "　空き容量 " + Gvar.var_2024);
    }
    Adap.color(255, 255, 255);
    Adap.mes(Gvar.effects_message);
    Adap.color(255, 255, 255);
    if (Gvar.var_812 == 1) {
        Adap.color(255, 255, 0);
    }
    if (Gvar.var_812 == 2) {
        Adap.color(255, 180, 90);
    }
    if (Gvar.var_812 == 3) {
        Adap.color(0, 255, 0);
    }
    if (Gvar.var_812 == 4) {
        Adap.color(240, 0, 240);
    }
    Adap.mes(Gvar.item_ability_description);
    Adap.color(255, 255, 255);

    Adap.font(Gvar.font_type = "ＭＳ Ｐゴシック", Gvar.font_size = 16, Gvar.font_style = 1);
    Adap.pos(15, Gvar.Y_axis_item_position);
    Adap.mes(">");
    Adap.pos(16, Gvar.Y_axis_item_position);
    Adap.mes(">");
    Adap.pos(17, Gvar.Y_axis_item_position);
    Adap.mes(">");
    return;
}

export {func804}

// ヴェネチアホテルに設置してあるPC設定
async function func805(this: any) {
    Adap.dbgprt(805);
    Gvar.var_1206 = 0;
    Gvar.belongings_item_list = Gvar.var_991[0][Gvar.var_225][0];
    Gvar.disc_rarity = Gvar.var_991[0][Gvar.var_225][13];
    await Func.func492(); // アイテムリスト呼び出し
    Gvar.var_3188 = Gvar.item_name;
    Gvar.var_482 = 0;
    Gvar.var_482 = (Gvar.var_991[0][Gvar.var_225][3] + Gvar.var_991[0][Gvar.var_225][4]) * 50;
    Gvar.var_1925 = Gvar.buying_price + Gvar.var_482;
    Gvar.var_1925 = Gvar.var_1925 * Gvar.var_1036;
    Gvar.var_3189 = Gvar.var_1925;
    if (Gvar.wallet < Gvar.var_3189) {
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "それを買うには お金が足りません。";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_3190 = Gvar.var_3189 - Gvar.wallet;
        if (Gvar.var_3190 <= Gvar.var_1032) {
            await Func.func340(); // キー入力による選択処理
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "口座のお金を足して買いますか？";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_546 = 1;
            Gvar.var_3191 = 1;
            Gvar.var_548 = 1; // 選択肢処理フラグON
            await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
            return;
        }
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_198 = 0;
        Gvar.var_1206 = 1;
        await Dung.func803();
        return;
    }
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "【" + Gvar.var_3188 + "】は";
    Gvar.comments_row2 = "" + Gvar.var_3189 + "G です。";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func051();
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.var_3192 = 1;
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func805}

// 不明
async function func806(this: any) {
    Adap.dbgprt(806);
    Gvar.wallet = Gvar.wallet - Gvar.var_3189;
    await Dung.func807();
}

export {func806}

// ヴェネチアホテルに設置してあるPC設定
async function func807(this: any) {
    Adap.dbgprt(807);
    Gvar.var_1206 = 0;
    Gvar.belongings_item_list = Gvar.var_991[0][Gvar.var_225][0];
    Gvar.disc_rarity = Gvar.var_991[0][Gvar.var_225][13];
    await Func.func492(); // アイテムリスト呼び出し
    Gvar.var_3188 = Gvar.item_name;
    Gvar.var_1037 = Gvar.var_1037 + 1;
    for (let cnt1 = 0; cnt1 < 30; ++cnt1) {
        Gvar.var_991[1][Gvar.var_1037][cnt1] = Gvar.var_991[0][Gvar.var_225][cnt1];
    }
    Gvar.var_991[1][Gvar.var_1037][11] = 0;
    Gvar.var_991[0][Gvar.var_225][0] = 0;
    Gvar.var_1957 = 0;
    Gvar.var_447 = 1;
    Gvar.var_449 = 2;
    for (let cnt1 = 0; cnt1 < Gvar.var_1013; ++cnt1) {
        if (Gvar.var_991[0][Gvar.var_447][0] == 0) {
            for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                Gvar.var_991[0][Gvar.var_447][cnt3] = Gvar.var_991[0][Gvar.var_449][cnt3];
            }
            Gvar.var_1957 = 1;
        }
        if (Gvar.var_1957 == 1) {
            for (let cnt3 = 0; cnt3 < 30; ++cnt3) {
                Gvar.var_991[0][Gvar.var_447][cnt3] = Gvar.var_991[0][Gvar.var_449][cnt3];
            }
        }
        Gvar.var_447 = Gvar.var_447 + 1;
        Gvar.var_449 = Gvar.var_449 + 1;
    }
    Gvar.var_1013 = Gvar.var_1013 - 1;

    Adap.DSPLAY(207);
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "" + Gvar.var_3188 + "ですね…";
    Gvar.comments_row2 = "ﾚｸｲｴﾑの大迷宮１階に必ず届けます。";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    await Dung.func801();
    await Main.func009(); // ゲーム基本動作フレーム処理
    return;
}

export {func807}

// 不明
async function func808(this: any) {
    Adap.dbgprt(808);
    Gvar.var_836 = Gvar.dungeon_number;
    Gvar.var_837 = Gvar.current_floor;
    if (Gvar.var_837 <= 3) {
        Gvar.var_1013 = 0;
    }
    if (Gvar.var_837 >= 4) {
        Gvar.var_1013 = 1;
    }
    if (Gvar.var_837 >= 8) {
        Gvar.var_1013 = 2;
    }
    if (Gvar.var_837 >= 12) {
        Gvar.var_1013 = 3;
    }
    if (Gvar.var_837 >= 15) {
        Gvar.var_1013 = 4;
    }
    if (Gvar.var_837 >= 18) {
        Gvar.var_1013 = 5;
    }
    if (Gvar.var_837 >= 20) {
        Gvar.var_1013 = 6;
    }
    if (Gvar.var_837 >= 22) {
        Gvar.var_1013 = 7;
    }
    if (Gvar.var_837 >= 25) {
        Gvar.var_1013 = 8;
    }
    Gvar.var_1036 = Adap.rnd(3);
    Gvar.var_1036 = Gvar.var_1036 + 2;
    Gvar.var_683 = 1;
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            Gvar.var_991[0][Gvar.var_683][cnt2] = 0;
        }
        Gvar.var_866 = 0;
        Gvar.var_1736 = Adap.rnd(100);
        if (Gvar.var_1736 >= 0 && Gvar.var_1736 < 5) {
            Gvar.var_1735 = 6;
        }
        if (Gvar.var_1736 >= 5 && Gvar.var_1736 < 10) {
            Gvar.var_1735 = 4;
        }
        if (Gvar.var_1736 >= 10 && Gvar.var_1736 < 60) {
            Gvar.var_1735 = 1;
        }
        if (Gvar.var_1736 >= 60 && Gvar.var_1736 < 70) {
            Gvar.var_1735 = 5;
        }
        if (Gvar.var_1736 >= 70 && Gvar.var_1736 < 85) {
            Gvar.var_1735 = 3;
        }
        if (Gvar.var_1736 >= 85 && Gvar.var_1736 < 100) {
            Gvar.var_1735 = 9;
        }
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            // No = 2 なので、レクイエムの大迷宮
            Gvar.dungeon_number = 2;
        }
        await Func.func385(); // 各ダンジョンごとの出現アイテム&出現確率管理
        if (Gvar.var_262 == 1) { // Gvar.var_262 == 1 なので、Gvar.dungeon_number = 0 であれば
            // No = 0 なので、拠点(ホテル、亀、)
            Gvar.dungeon_number = 0;
        }
        for (let cnt2 = 0; cnt2 < 30; ++cnt2) {
            Gvar.var_991[0][Gvar.var_683][cnt2] = Gvar.var_78[Gvar.var_866]["Var" + cnt2];
        }
        Gvar.var_991[0][Gvar.var_683][11] = 1;
        Gvar.var_991[0][Gvar.var_683][12] = 0;
        Gvar.var_991[0][Gvar.var_683][14] = 0;
        Gvar.var_991[0][Gvar.var_683][15] = 0;
        Gvar.var_683 = Gvar.var_683 + 1;
    }
    return;
}

export {func808}

// ヴェネチアホテルに設置してあるPC設定
async function func809(this: any) {
    Adap.dbgprt(809);
    Adap.DSPLAY(210);
    Gvar.var_783 = 1;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 2;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 3;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 4;
    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 5;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 6;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 7;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 5;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 12;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 13;
    if (Gvar.var_1039 == 0) {
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾎﾟﾙﾎﾟ「ブフゥ～～～～…」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「ボス…ダンジョンの一人旅は危険です」";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「ダンジョン内で仲間と出会えれば";
        Gvar.comments_row2a = "　冒険がグッと楽になるでしょう…」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「ブフゥ～～～…」";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「しかし問題は、";
        Gvar.comments_row2a = "　毎回必ず出会えるわけではないところ」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「私ならば、有能な人材を";
        Gvar.comments_row2a = "　あらかじめ１階に呼ぶことが可能です」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「そのための費用として";
        Gvar.comments_row2a = "　2000Gかかってしまいますが…」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「ブフゥ～～～…」";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_1039 = 1;
    }
    if (Gvar.var_1040 == 1) {
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "ﾎﾟﾙﾎﾟ「ﾚｸｲｴﾑの大迷宮１階に";
        Gvar.comments_row2 = "　　　ヒマなやつを呼んであります」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_198 = 0;
        await Dung.func812();
        return;
    }
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "ﾎﾟﾙﾎﾟ「ボス…　2000Gで";
    Gvar.comments_row2 = "　　　仲間を１階に呼んでおきますか？」";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func340(); // キー入力による選択処理
    await Func.func051();
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.var_3193 = 1;
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func809}

// ヴェネチアホテルに設置してあるPC設定
async function func810(this: any) {
    Adap.dbgprt(810);
    if (Gvar.wallet >= 2000) {

        Adap.DSPLAY(207);
        Gvar.wallet = Gvar.wallet - 2000;
        Gvar.var_1040 = 1;
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「わかりました…。手の空いている者を";
        Gvar.comments_row2 = "　ﾚｸｲｴﾑの大迷宮１階に呼んでおきます」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_198 = 0;
        await Dung.func812();
        return;
    }
    if (Gvar.wallet < 2000) {
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「おっと…";
        Gvar.comments_row2 = "　お金が足りないようですな」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_3190 = 2000 - Gvar.wallet;
        if (Gvar.var_3190 <= Gvar.var_1032) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「口座のお金を足しますか？」";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_546 = 1;
            Gvar.var_3193 = 2;
            Gvar.var_548 = 1; // 選択肢処理フラグON
            await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
            return;
        }
        Gvar.var_198 = 0;
        await Dung.func812();
        return;
    }
    await Dung.func811();
}

export {func810}

// ヴェネチアホテルに設置してあるPC設定
async function func811(this: any) {
    Adap.dbgprt(811);
    Gvar.wallet = 0;
    Gvar.var_1032 = Gvar.var_1032 - Gvar.var_3190;
    Gvar.var_1040 = 1;
    Adap.DSPLAY(207);
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "「わかりました…。手の空いている者を";
    Gvar.comments_row2 = "　ﾚｸｲｴﾑの大迷宮１階に呼んでおきます」";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func340(); // キー入力による選択処理
    Gvar.var_198 = 0;
    await Dung.func812();
    return;
}

export {func811}

// ヴェネチアホテルに設置してあるPC設定
async function func812(this: any) {
    Adap.dbgprt(812);
    Gvar.var_198 = 0;
    Adap.DSPLAY(211);
    Gvar.var_783 = 5;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 4;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 3;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 2;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 1;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 0;
    await Main.func009(); // ゲーム基本動作フレーム処理
    return;
}

export {func812}

// ヴェネチアホテルに設置してあるPC設定
async function func813(this: any) {
    Adap.dbgprt(813);
    Adap.DSPLAY(210);
    Gvar.var_783 = 1;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 2;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 3;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 4;
    for (let cnt1 = 0; cnt1 < 5; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 5;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 6;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 7;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 5;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 14;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 15;
    if (Gvar.var_830 == 0) {
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「はい…こちらはSPW財団です」";
        Gvar.comments_row2 = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「前回の冒険でやられた敵の";
        Gvar.comments_row2a = "　能力を調べることができます」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = Gvar.comments_row1a;
        Gvar.comments_row2 = Gvar.comments_row2a;
        Gvar.comments_row1a = "「調査費用は1000Gです」";
        Gvar.comments_row2a = "";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func047();
        await Func.func050();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_198 = 0;
        await Dung.func817();
        return;
    }
    Gvar.enemy_list = Gvar.var_830;
    await Func.func626();
    Gvar.var_3194 = "" + Gvar.enemy_name;
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "「はい…こちらはSPW財団です」";
    Gvar.comments_row2 = "";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    await Func.func340(); // キー入力による選択処理
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "「" + Gvar.var_3194 + "に";
    Gvar.comments_row2a = "　やられてしまったようですね？」";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    await Func.func050();
    await Func.func340(); // キー入力による選択処理
    await Func.func094(); // メッセージ送りの際の効果音
    Gvar.comments_row1 = Gvar.comments_row1a;
    Gvar.comments_row2 = Gvar.comments_row2a;
    Gvar.comments_row1a = "「1000Gの調査費で";
    Gvar.comments_row2a = "　敵の能力を調べられます」";
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    await Func.func047();
    await Func.func050();
    await Func.func340(); // キー入力による選択処理
    await Func.func051();
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_546 = 1;
    Gvar.var_3195 = 1;
    Gvar.var_548 = 1; // 選択肢処理フラグON
    await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
    return;
}

export {func813}

// ヴェネチアホテルに設置してあるPC設定
async function func814(this: any) {
    Adap.dbgprt(814);
    if (Gvar.wallet >= 1000) {

        Adap.DSPLAY(207);
        Gvar.wallet = Gvar.wallet - 1000;
        Gvar.var_198 = 0;
        await Dung.func816();
        return;
    }
    if (Gvar.wallet < 1000) {
        await Func.func094(); // メッセージ送りの際の効果音
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "「おや…";
        Gvar.comments_row2 = "　お金が足りないようです」";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        await Func.func340(); // キー入力による選択処理
        Gvar.var_3190 = 1000 - Gvar.wallet;
        if (Gvar.var_3190 <= Gvar.var_1032) {
            await Func.func094(); // メッセージ送りの際の効果音
            Gvar.comments_row1 = Gvar.comments_row1a;
            Gvar.comments_row2 = Gvar.comments_row2a;
            Gvar.comments_row1a = "「口座のお金を足しますか？」";
            Gvar.comments_row2a = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            await Func.func050();
            Gvar.var_245 = 19;
            Gvar.var_246 = 45;
            Gvar.var_546 = 1;
            Gvar.var_3195 = 2;
            Gvar.var_548 = 1; // 選択肢処理フラグON
            await Func.func839(); // ダンジョン内での動作フラグ処理 (ダンジョンへ侵入)
            return;
        }
        Gvar.var_198 = 0;
        await Dung.func817();
        return;
    }
    await Dung.func815();
}

export {func814}

// ヴェネチアホテルに設置してあるPC設定
async function func815(this: any) {
    Adap.dbgprt(815);
    Gvar.wallet = 0;

    Adap.DSPLAY(207);
    Gvar.var_1032 = Gvar.var_1032 - Gvar.var_3190;
    Gvar.var_198 = 0;
    await Dung.func816();
    return;
}

export {func815}

// ヴェネチアホテルに設置してあるPC設定
async function func816(this: any) {
    Adap.dbgprt(816);
    Gvar.var_2233 = Gvar.var_1038 + 1;
    Gvar.var_2234 = 0;
    for (let cnt1 = 0; cnt1 < Gvar.var_2233; ++cnt1) {
        if (Gvar.var_989[cnt1] == Gvar.var_830) {
            Gvar.var_2234 = 1;
            Gvar.var_1610 = cnt1;
            break;
        }
    }
    if (Gvar.var_2234 == 0) {
        Gvar.var_1038 = Gvar.var_1038 + 1;
        Gvar.var_989[Gvar.var_1038] = Gvar.var_830;
        Gvar.var_1610 = Gvar.var_1038;
    }
    Gvar.var_830 = 0;
    Gvar.var_1609 = 1;
    Gvar.var_2357 = 1;
    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
    Gvar.var_502 = 1;
    await Func.func356();
    return;
}

export {func816}

// ヴェネチアホテルに設置してあるPC設定
async function func817(this: any) {
    Adap.dbgprt(817);
    Gvar.var_2357 = 0;
    Gvar.var_198 = 0;
    Adap.DSPLAY(211);
    Gvar.var_783 = 5;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 4;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 3;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 2;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 1;
    for (let cnt1 = 0; cnt1 < 1; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_783 = 0;
    await Main.func009(); // ゲーム基本動作フレーム処理
    return;
}

export {func817}


// ヴェネチアホテルのPCへ話しかけた時のメッセージ処理
async function func818(this: any) {
    Adap.dbgprt(818);
    Gvar.var_243 = 0;
    Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
    if (Gvar.var_404 == 0) {
        Gvar.comments_row1 = "";
        Gvar.comments_row2 = "";
        Gvar.var_295 = "";
        Gvar.comments_row1a = "";
        Gvar.comments_row2a = "";
        Gvar.var_298 = "";
        Gvar.var_299 = 0;
        Gvar.comments_row1 = "パソコンが置いてある。";
        Gvar.comments_row2 = "まだ使えないようだ…";
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        await Func.func340(); // キー入力による選択処理
        await Func.func051();
        Gvar.var_198 = 0;
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    Gvar.comments_row1 = "";
    Gvar.comments_row2 = "";
    Gvar.var_295 = "";
    Gvar.comments_row1a = "";
    Gvar.comments_row2a = "";
    Gvar.var_298 = "";
    Gvar.var_299 = 0;
    Gvar.comments_row1 = "何をしますか？";
    Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
    Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
    await Func.func047();
    Gvar.var_198 = 1;
    Gvar.var_300 = 0;
    Gvar.var_245 = 19;
    Gvar.var_246 = 45;
    Gvar.var_3196 = 0;
    Gvar.var_1204 = 1;
    await Func.func051();
    await Dung.func819();
}

export {func818}

// ヴェネチアホテルに設置してあるPC設定
async function func819(this: any) {
    Adap.dbgprt(819);
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func080(); // 各キー入力確認
    if (Gvar.var_404 >= 1) {
        if (Gvar.var_259 == 1 && Gvar.var_3196 != 4) { // var_259:入力判定[↓]
            Gvar.var_246 = Gvar.var_246 + 16;
            Gvar.var_3196 = Gvar.var_3196 + 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func819();
            return;
        }
        if (Gvar.var_259 == 1 && Gvar.var_3196 == 4) { // var_259:入力判定[↓]
            Gvar.var_246 = 45;
            Gvar.var_3196 = 0;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func819();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_3196 != 0) { // var_255:入力判定[↑]
            Gvar.var_246 = Gvar.var_246 - 16;
            Gvar.var_3196 = Gvar.var_3196 - 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func819();
            return;
        }
        if (Gvar.var_255 == 1 && Gvar.var_3196 == 0) { // var_255:入力判定[↑]
            Gvar.var_246 = 109;
            Gvar.var_3196 = 4;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func819();
            return;
        }
    }
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
        if (Gvar.var_3196 == 0) {
            Gvar.var_1204 = 0;
            Gvar.var_198 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051();
            await Dung.func796();
            return;
        }
        if (Gvar.var_3196 == 1) {
            Gvar.var_1204 = 0;
            Gvar.var_198 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051();
            await Dung.func797();
            return;
        }
        if (Gvar.var_3196 == 2) {
            Gvar.var_1204 = 0;
            Gvar.var_198 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051();
            await Dung.func802();
            return;
        }
        if (Gvar.var_3196 == 3) {
            Gvar.var_1204 = 0;
            Gvar.var_198 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051();
            await Dung.func809();
            return;
        }
        if (Gvar.var_3196 == 4) {
            Gvar.var_1204 = 0;
            Gvar.var_198 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            await Func.func051();
            await Dung.func813();
            return;
        }
    }
    if (Gvar.key_X_on == 1) {
        Gvar.var_1204 = 0;
        Gvar.var_198 = 0;

        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.func051();
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    await Dung.func819();
    return;
}

export {func819}

// ヴェネチアホテルに設置してあるPC設定
async function func820(this: any) {
    Adap.dbgprt(820);
    Gvar.var_3197 = 0;
    if (Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
        Gvar.var_3197++;
    }
    if (Gvar.var_524 >= 1) { // 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
        Gvar.var_3197++;
    }
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func080(); // 各キー入力確認
    if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
        if (Gvar.var_3197 == 2 && Gvar.var_513 != 5) {
            Gvar.var_516 = Gvar.var_516 + 16;
            Gvar.var_513 = Gvar.var_513 + 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        if (Gvar.var_3197 == 2 && Gvar.var_513 == 5) {
            Gvar.var_516 = 88;
            Gvar.var_513 = 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        if (Gvar.var_3197 == 1 && Gvar.var_513 != 4) {
            Gvar.var_516 = Gvar.var_516 + 16;
            Gvar.var_513 = Gvar.var_513 + 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        if (Gvar.var_3197 == 1 && Gvar.var_513 == 4) {
            Gvar.var_516 = 88;
            Gvar.var_513 = 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        // ディアボロの試練解放フラグがON
        if (Gvar.var_526 >= 1 && Gvar.var_513 != 3) {
            Gvar.var_516 = Gvar.var_516 + 16;
            Gvar.var_513 = Gvar.var_513 + 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        // ディアボロの試練解放フラグがON
        if (Gvar.var_526 >= 1 && Gvar.var_513 == 3) {
            Gvar.var_516 = 88;
            Gvar.var_513 = 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        if (Gvar.var_404 >= 1 && Gvar.var_513 != 2) {
            Gvar.var_516 = Gvar.var_516 + 16;
            Gvar.var_513 = Gvar.var_513 + 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        if (Gvar.var_404 >= 1 && Gvar.var_513 == 2) {
            Gvar.var_516 = 88;
            Gvar.var_513 = 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
    }
    if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
        if (Gvar.var_3197 == 2 && Gvar.var_513 != 1) {
            Gvar.var_516 = Gvar.var_516 - 16;
            Gvar.var_513 = Gvar.var_513 - 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        if (Gvar.var_3197 == 2 && Gvar.var_513 == 1) {
            Gvar.var_516 = 152;
            Gvar.var_513 = 5;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        if (Gvar.var_3197 == 1 && Gvar.var_513 != 1) {
            Gvar.var_516 = Gvar.var_516 - 16;
            Gvar.var_513 = Gvar.var_513 - 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        if (Gvar.var_3197 == 1 && Gvar.var_513 == 1) {
            Gvar.var_516 = 136;
            Gvar.var_513 = 4;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        // ディアボロの試練解放フラグがON
        if (Gvar.var_526 >= 1 && Gvar.var_513 != 1) {
            Gvar.var_516 = Gvar.var_516 - 16;
            Gvar.var_513 = Gvar.var_513 - 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        // ディアボロの試練解放フラグがON
        if (Gvar.var_526 >= 1 && Gvar.var_513 == 1) {
            Gvar.var_516 = 120;
            Gvar.var_513 = 3;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        if (Gvar.var_404 >= 1 && Gvar.var_513 != 1) {
            Gvar.var_516 = Gvar.var_516 - 16;
            Gvar.var_513 = Gvar.var_513 - 1;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
        if (Gvar.var_404 >= 1 && Gvar.var_513 == 1) {
            Gvar.var_516 = 104;
            Gvar.var_513 = 2;

            Adap.DSPLAY(100); // アイテム選択時の効果音
            // await Func.func337(); // メッセージ関係呼び出し
            await Func.func337(); // メッセージ関係呼び出し
            await Dung.func820();
            return;
        }
    }
    if (Gvar.key_Z_on == 1 || Gvar.key_A_on == 1) {
        if (Gvar.var_513 == 1) {
            Gvar.var_198 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_793 = 1;
            Gvar.var_785 = 1;
            Gvar.var_786 = 1;
            Gvar.var_787 = 1;
            Gvar.var_629 = 1;
            await Dung.func821();
            await Func.func166();
            return;
        }
        if (Gvar.var_513 == 2) {
            Gvar.var_198 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_793 = 2;
            Gvar.var_785 = 1;
            Gvar.var_786 = 1;
            Gvar.var_787 = 1;
            Gvar.var_629 = 1;
            await Dung.func821();
            await Func.func166();
            return;
        }
        if (Gvar.var_513 == 3) {
            Gvar.var_198 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_793 = 3;
            Gvar.var_785 = 1;
            Gvar.var_786 = 1;
            Gvar.var_787 = 1;
            Gvar.var_629 = 1;
            await Dung.func821();
            await Func.func166();
            return;
        }
        if (Gvar.var_513 == 4) {
            // Gvar.var_524 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
            if (Gvar.var_524 == 0 && Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                Gvar.var_198 = 0;
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_793 = 4;
                Gvar.var_785 = 1;
                Gvar.var_786 = 1;
                Gvar.var_787 = 1;
                Gvar.var_629 = 1;
                await Dung.func821();
                await Func.func166();
                return;
            }
            // Gvar.var_524 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
            if (Gvar.var_524 >= 1 && Gvar.var_523 == 0) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                Gvar.var_198 = 0;
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_793 = 0;
                Gvar.var_785 = 1;
                Gvar.var_786 = 1;
                Gvar.var_787 = 1;
                Gvar.var_629 = 1;
                await Dung.func821();
                await Func.func166();
                return;
            }
            // Gvar.var_524 鉄の牢獄へ行けるようになった時のフラグ? ロッコ・バロッコ所長との会話が終わったフラグ
            if (Gvar.var_524 >= 1 && Gvar.var_523 >= 1) {  // 一巡後の世界へ行けるようになった時のフラグ? 地球儀が回転
                Gvar.var_198 = 0;
    
                Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
                Gvar.var_793 = 0;
                Gvar.var_785 = 1;
                Gvar.var_786 = 1;
                Gvar.var_787 = 1;
                Gvar.var_629 = 1;
                await Dung.func821();
                await Func.func166();
                return;
            }
        }
        if (Gvar.var_513 == 5) {
            Gvar.var_198 = 0;

            Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
            Gvar.var_793 = 4;
            Gvar.var_785 = 1;
            Gvar.var_786 = 1;
            Gvar.var_787 = 1;
            Gvar.var_629 = 1;
            await Dung.func821();
            await Func.func166();
            return;
        }
    }
    if (Gvar.key_X_on == 1) {
        Gvar.var_198 = 0;

        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        Gvar.var_512 = 0;
        await Func.func051();
        await Func.func057();
        return;
    }
    await Dung.func820();
    return;
}

export {func820}


async function func821(this: any) {
    Adap.dbgprt(821);
    Gvar.var_508 = 0; // Mフラグ:資料(設定画面) Func.func058
    Gvar.var_499 = 0; // Mフラグ:設定画面 Func.func056
    Gvar.var_980 = 1;
    Adap.gsel(19);
    Adap.color(1, 1, 1);
    Adap.boxf(0, 0, 680, 680);
    Adap.gsel(0);
    Gvar.var_311 = 0;
    Gvar.var_312 = 1;
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_311 = Gvar.var_311 + 25;
        if (Gvar.var_311 >= 255) {
            Gvar.var_311 = 255;
        }
    }
    for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    Gvar.var_311 = 255;
    Gvar.var_312 = 0;
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        Adap.redraw(0);
        await Func.func168(); // ダンジョンクリア時のスコア判定
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, Gvar.var_311);
        Adap.pos(0, 0);
        Adap.gcopy(19, 0, 0, 340, 340);
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        await  Adap.await_(Gvar.var_686);
        Gvar.var_311 = Gvar.var_311 - 25;
        if (Gvar.var_311 <= 0) {
            Gvar.var_311 = 0;
        }
    }
    return;
}

export {func821}

// ヴェネチアホテルに設置してあるPC設定
async function func822(this: any) {
    Adap.dbgprt(822);
    Adap.gsel(19);
    Adap.color(1, 1, 1);
    Adap.boxf(0, 0, 680, 680);
    Adap.gsel(0);
    Gvar.var_311 = 0;
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        Adap.redraw(0);
        await Func.func168(); // ダンジョンクリア時のスコア判定
        Adap.color(0, 0, 0);
        Adap.gmode(4, null, null, Gvar.var_311);
        Adap.pos(0, 0);
        Adap.gcopy(19, 0, 0, 340, 340);
        if (Gvar.var_10 >= 1) {
            await Func.func338();
        }
        Adap.redraw(1);
        await  Adap.await_(Gvar.var_686);
        Gvar.var_311 = Gvar.var_311 + 25;
        if (Gvar.var_311 >= 255) {
            Gvar.var_311 = 255;
        }
    }
    Gvar.var_311 = 255;
    Gvar.var_312 = 1;
    for (let cnt1 = 0; cnt1 < 4; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
    }
    for (let cnt1 = 0; cnt1 < 10; ++cnt1) {
        await Func.func337(); // メッセージ関係呼び出し
        Gvar.var_311 = Gvar.var_311 - 25;
        if (Gvar.var_311 <= 0) {
            Gvar.var_311 = 0;
        }
    }
    Gvar.var_311 = 0;
    Gvar.var_312 = 0;
    Gvar.var_508 = 1; // Mフラグ:資料(設定画面) Func.func058
    Gvar.var_499 = 1; // Mフラグ:設定画面 Func.func056
    Gvar.var_980 = 0;
    return;
}

export {func822}

// ヴェネチアホテルのPC を起動した時のメッセージフレーム
async function func823(this: any) {
    Adap.dbgprt(823);
    Gvar.var_1627 = 0;
    Adap.color(0, 0, 0);

    Adap.gmode(4, null, null, 100);
    Adap.pos(12, 37);
    Adap.gcopy(12, 0, 0, 213, 103 + Gvar.var_1627);
    Adap.color(255, 255, 255);
    if (Gvar.var_512 == 1) {
        Adap.color(150, 150, 150);
    }
    Adap.line(15, 39, 220, 39);
    Adap.line(15, 136 + Gvar.var_1627, 220, 136 + Gvar.var_1627);
    Adap.line(14, 40, 14, 134 + Gvar.var_1627);
    Adap.line(222, 40, 222, 134 + Gvar.var_1627);
    Adap.pset(15, 40);
    Adap.pset(221, 40);
    Adap.pset(15, 135 + Gvar.var_1627);
    Adap.pset(221, 135 + Gvar.var_1627);

    Adap.font(Gvar.font_type = "ＭＳ Ｐゴシック", Gvar.font_size = 16, Gvar.font_style = 1);
    Adap.color(255, 255, 255);
    Adap.pos(33, 47);
    Adap.mes("口座に入金する");
    Adap.mes("口座から引き出す");
    Adap.mes("ペリーコロと通信");
    Adap.mes("ポルポと通信");
    Adap.mes("ＳＰＷ財団と通信");
    Adap.color(255, 255, 255);
    if (Gvar.var_512 == 1) {
        Adap.color(150, 150, 150);
    }

    Adap.font("MS ゴシック", 16, 1);
    Adap.pos(Gvar.var_245, Gvar.var_246);
    Adap.mes(">");
    Adap.pos(Gvar.var_245 + 1, Gvar.var_246);
    Adap.mes(">");
    Adap.pos(Gvar.var_245 + 2, Gvar.var_246);
    Adap.mes(">");
    return;
}

export {func823}
