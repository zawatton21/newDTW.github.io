import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'

async function func500(this: any) {
        Adap.dbgprt(500);
        Gvar.var_2239 = 0;
        Gvar.var_2240 = 1;
        for (let cnt1 = 0; cnt1 < 9; ++cnt1) {
            if (Gvar.var_199 == Gvar.var_2240) {
                if (Gvar.var_2240 == 1) {
                    Gvar.var_2241 = Gvar.var_66 + 1;
                    Gvar.var_2242 = Gvar.var_67 - 1;
                }
                if (Gvar.var_2240 == 2) {
                    Gvar.var_2241 = Gvar.var_66;
                    Gvar.var_2242 = Gvar.var_67 - 1;
                }
                if (Gvar.var_2240 == 3) {
                    Gvar.var_2241 = Gvar.var_66 - 1;
                    Gvar.var_2242 = Gvar.var_67 - 1;
                }
                if (Gvar.var_2240 == 4) {
                    Gvar.var_2241 = Gvar.var_66 + 1;
                    Gvar.var_2242 = Gvar.var_67;
                }
                if (Gvar.var_2240 == 5) {
                    Gvar.var_2241 = 0;
                    Gvar.var_2242 = 0;
                }
                if (Gvar.var_2240 == 6) {
                    Gvar.var_2241 = Gvar.var_66 - 1;
                    Gvar.var_2242 = Gvar.var_67;
                }
                if (Gvar.var_2240 == 7) {
                    Gvar.var_2241 = Gvar.var_66 + 1;
                    Gvar.var_2242 = Gvar.var_67 + 1;
                }
                if (Gvar.var_2240 == 8) {
                    Gvar.var_2241 = Gvar.var_66;
                    Gvar.var_2242 = Gvar.var_67 + 1;
                }
                if (Gvar.var_2240 == 9) {
                    Gvar.var_2241 = Gvar.var_66 - 1;
                    Gvar.var_2242 = Gvar.var_67 + 1;
                }
                if (Gvar.var_82[Gvar.var_2241][Gvar.var_2242] != 0) {
                    Gvar.var_2243 = Gvar.var_82[Gvar.var_2241][Gvar.var_2242];
                    if (Gvar.var_83[Gvar.var_2243].Var5 == Gvar.var_2240) {
                        Gvar.var_2239 = 1;
                    }
                    if (Gvar.var_83[Gvar.var_2243].Var31 == 4 || Gvar.var_83[Gvar.var_2243].Var31 == 5) {
                        Gvar.var_2239 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2243].Var0 == 23) {
                        Gvar.var_2239 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2243].Var0 == 50) {
                        Gvar.var_2239 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2243].Var0 == 19) {
                        Gvar.var_2239 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2243].Var0 == 90) {
                        Gvar.var_2239 = 0;
                    }
                    if (Gvar.var_83[Gvar.var_2243].Var0 == 79) {
                        Gvar.var_2239 = 0;
                    }
                    if (Gvar.var_2239 == 1) {
                        break;
                    }
                }
            }
            Gvar.var_2240 = Gvar.var_2240 + 1;
        }
        if (Gvar.var_2239 == 1) {
            Gvar.var_271 = 1;
            Gvar.var_1321 = 1;
            Gvar.var_2244 = Adap.rnd(3);
            Gvar.var_2244 = Gvar.var_2244 + 3;
            Gvar.var_389 = 2;
            Gvar.var_747 = 1;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.var_2245 = Adap.rnd(9);
            if (Gvar.var_2245 == 0) {
                Gvar.comments_row1 = "「おんぶして。　　ねっ！」";
            }
            if (Gvar.var_2245 == 1) {
                Gvar.comments_row1 = "「よくやるなあ～～っ！　　ねッ！」";
            }
            if (Gvar.var_2245 == 2) {
                Gvar.comments_row1 = "「危ないよ　そんな風に歩いちゃあ！」";
            }
            if (Gvar.var_2245 == 3) {
                Gvar.comments_row1 = "「必ず背中を見られるよ。　　ねっ！」";
            }
            if (Gvar.var_2245 == 4) {
                Gvar.comments_row1 = "「ﾎﾟｺﾁﾝまで干からびさせて死ぬねっ！」";
            }
            if (Gvar.var_2245 == 5) {
                Gvar.comments_row1 = "「離れねーんだよッ！」";
            }
            if (Gvar.var_2245 == 6) {
                Gvar.comments_row1 = "「ブツブツ言っちゃって…」";
            }
            if (Gvar.var_2245 == 7) {
                Gvar.comments_row1 = "「ぼくを取る方法は ないッ！」";
            }
            if (Gvar.var_2245 == 8) {
                Gvar.comments_row1 = "「もう疲れるだけだよ。」";
            }
            Gvar.comments_row2 = "" + Gvar.var_2244 + "のﾀﾞﾒｰｼﾞを受けた";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[11]; // Ver0.1310で値修正 5 → 11
            Gvar.var_26_x = Gvar.var_26[11]; // Ver0.1310で値修正 5 → 11
            Gvar.var_27_x = Gvar.var_27[11]; // Ver0.1310で値修正 5 → 11
            await Func.func047();
    
            Adap.DSPLAY(103); // 殴られた時の効果音
            for (let cnt2 = 0; cnt2 < 15; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
                Gvar.var_1321 = Gvar.var_1321 + 1;
            }
            Gvar.var_389 = 0;
            Gvar.var_271 = 0;
            Gvar.var_1321 = 0;
            Gvar.var_211 = Gvar.var_211 - Gvar.var_2244;
            Gvar.var_208 = Gvar.var_208 + Gvar.var_2244;
            if (Gvar.var_211 <= 0) {
                Gvar.var_211 = 0;
                Gvar.var_356 = 212;
            }
        }
        return;
}

export {func500}
