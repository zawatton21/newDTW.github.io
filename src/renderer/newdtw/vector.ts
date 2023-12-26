import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import {item401} from "../stand/item401"
import * as Main from '../newdtw/index'

// ディアボロのカーソルによる移動処理関係

// Cキーを押した際のその場所での旋回処理
async function func010(this: any) {
        Adap.dbgprt(10);
        Gvar.var_263 = Adap.dim(10);
        Gvar.var_264 = Gvar.var_66 - 1;
        if (Gvar.var_264 < 0) {
            Gvar.var_264 = 0;
        }
        Gvar.var_265 = Gvar.var_66 + 1;
        if (Gvar.var_265 > Gvar.var_33) {
            Gvar.var_265 = Gvar.var_33;
        }
        Gvar.var_266 = Gvar.var_67 - 1;
        if (Gvar.var_266 < 0) {
            Gvar.var_266 = 0;
        }
        Gvar.var_267 = Gvar.var_67 + 1;
        if (Gvar.var_267 > Gvar.var_34) {
            Gvar.var_267 = Gvar.var_34;
        }
        await Main.func011();
}

export {func010}


async function func011(this: any) {
    Adap.dbgprt(11);
    Gvar.var_268 = 0;

    if (Gvar.equip_disc[316] == 0) {
        if (Gvar.var_127 == 0 && Gvar.var_132 == 0) {
            if (Gvar.var_263[0] == 0 && Gvar.var_263[1] == 0 && Gvar.var_82[Gvar.var_264][Gvar.var_267] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_267];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 1;
                        Gvar.var_263[1] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[2] == 0 && Gvar.var_82[Gvar.var_66][Gvar.var_267] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_66][Gvar.var_267];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 2;
                        Gvar.var_263[2] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[3] == 0 && Gvar.var_82[Gvar.var_265][Gvar.var_267] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_267];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 3;
                        Gvar.var_263[3] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[4] == 0 && Gvar.var_82[Gvar.var_264][Gvar.var_67] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_67];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 4;
                        Gvar.var_263[4] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[6] == 0 && Gvar.var_82[Gvar.var_265][Gvar.var_67] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_67];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 6;
                        Gvar.var_263[6] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[7] == 0 && Gvar.var_82[Gvar.var_264][Gvar.var_266] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_266];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 7;
                        Gvar.var_263[7] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[8] == 0 && Gvar.var_82[Gvar.var_66][Gvar.var_266] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_66][Gvar.var_266];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 8;
                        Gvar.var_263[8] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[9] == 0 && Gvar.var_82[Gvar.var_265][Gvar.var_266] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_266];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var31 != 5 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 9;
                        Gvar.var_263[9] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0) {
                if (Gvar.var_263[1] == 1 || Gvar.var_263[2] == 1 || Gvar.var_263[3] == 1 || Gvar.var_263[4] == 1 || Gvar.var_263[6] == 1 || Gvar.var_263[7] == 1 || Gvar.var_263[8] == 1 || Gvar.var_263[9] == 1) {
                    Gvar.var_268 = 0;
                    Gvar.var_263 = Adap.dim(10);
                    await Main.func011();
                    return;
                }
            }
        }
    }
    if (Gvar.equip_disc[316] == 1) {
        if (Gvar.var_127 == 0 && Gvar.var_132 == 0) {
            if (Gvar.var_263[0] == 0 && Gvar.var_263[1] == 0 && Gvar.var_82[Gvar.var_264][Gvar.var_267] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_267];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 1;
                        Gvar.var_263[1] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[2] == 0 && Gvar.var_82[Gvar.var_66][Gvar.var_267] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_66][Gvar.var_267];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 2;
                        Gvar.var_263[2] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[3] == 0 && Gvar.var_82[Gvar.var_265][Gvar.var_267] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_267];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 3;
                        Gvar.var_263[3] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[4] == 0 && Gvar.var_82[Gvar.var_264][Gvar.var_67] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_67];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 4;
                        Gvar.var_263[4] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[6] == 0 && Gvar.var_82[Gvar.var_265][Gvar.var_67] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_67];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 6;
                        Gvar.var_263[6] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[7] == 0 && Gvar.var_82[Gvar.var_264][Gvar.var_266] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_266];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 7;
                        Gvar.var_263[7] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[8] == 0 && Gvar.var_82[Gvar.var_66][Gvar.var_266] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_66][Gvar.var_266];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 8;
                        Gvar.var_263[8] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0 && Gvar.var_263[9] == 0 && Gvar.var_82[Gvar.var_265][Gvar.var_266] > 0) {
                Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_266];
                if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                    if (Gvar.var_83[Gvar.var_269].Var0 != 50) {
                        Gvar.var_199 = 9;
                        Gvar.var_263[9] = 1;
                        Gvar.var_263[0] = 1;
                        Gvar.var_268 = Gvar.var_269;
                    }
                }
            }
            if (Gvar.var_263[0] == 0) {
                if (Gvar.var_263[1] == 1 || Gvar.var_263[2] == 1 || Gvar.var_263[3] == 1 || Gvar.var_263[4] == 1 || Gvar.var_263[6] == 1 || Gvar.var_263[7] == 1 || Gvar.var_263[8] == 1 || Gvar.var_263[9] == 1) {
                    Gvar.var_268 = 0;
                    Gvar.var_263 = Adap.dim(10);
                    await Main.func011();
                    return;
                }
            }
        }
    }
    await Main.func012();
}

export {func011}


async function func012(this: any) {
    Adap.dbgprt(12);
    Gvar.var_271 = 1;
    Gvar.var_272 = 1;
    Gvar.var_273 = 0;
    await Func.func337(); // メッセージ関係呼び出し
    await Func.func080(); // 各キー入力確認
    if (Gvar.var_254 == 1) {
        Gvar.var_199 = 4;
        Gvar.var_273 = 1;
    }
    if (Gvar.var_257 == 1) {
        Gvar.var_199 = 6;
        Gvar.var_273 = 1;
    }
    if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
        Gvar.var_199 = 8;
        Gvar.var_273 = 1;
    }
    if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
        Gvar.var_199 = 2;
        Gvar.var_273 = 1;
    }
    if (Gvar.var_253 == 1) {
        Gvar.var_199 = 7;
        Gvar.var_273 = 1;
    }
    if (Gvar.var_254 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
        Gvar.var_199 = 7;
        Gvar.var_273 = 1;
    }
    if (Gvar.var_256 == 1) {
        Gvar.var_199 = 9;
        Gvar.var_273 = 1;
    }
    if (Gvar.var_257 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
        Gvar.var_199 = 9;
        Gvar.var_273 = 1;
    }
    if (Gvar.var_258 == 1) {
        Gvar.var_199 = 1;
        Gvar.var_273 = 1;
    }
    if (Gvar.var_254 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
        Gvar.var_199 = 1;
        Gvar.var_273 = 1;
    }
    if (Gvar.var_260 == 1) {
        Gvar.var_199 = 3;
        Gvar.var_273 = 1;
    }
    if (Gvar.var_257 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
        Gvar.var_199 = 3;
        Gvar.var_273 = 1;
    }
    if (Gvar.var_273 == 1) {
        Gvar.var_268 = 0;
        if (Gvar.var_199 == 1 && Gvar.var_82[Gvar.var_264][Gvar.var_267] > 0) {
            Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_267];
            if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                    Gvar.var_268 = Gvar.var_269;
                }
            }
        }
        if (Gvar.var_199 == 2 && Gvar.var_82[Gvar.var_66][Gvar.var_267] > 0) {
            Gvar.var_269 = Gvar.var_82[Gvar.var_66][Gvar.var_267];
            if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                    Gvar.var_268 = Gvar.var_269;
                }
            }
        }
        if (Gvar.var_199 == 3 && Gvar.var_82[Gvar.var_265][Gvar.var_267] > 0) {
            Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_267];
            if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                    Gvar.var_268 = Gvar.var_269;
                }
            }
        }
        if (Gvar.var_199 == 4 && Gvar.var_82[Gvar.var_264][Gvar.var_67] > 0) {
            Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_67];
            if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                    Gvar.var_268 = Gvar.var_269;
                }
            }
        }
        if (Gvar.var_199 == 6 && Gvar.var_82[Gvar.var_265][Gvar.var_67] > 0) {
            Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_67];
            if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                    Gvar.var_268 = Gvar.var_269;
                }
            }
        }
        if (Gvar.var_199 == 7 && Gvar.var_82[Gvar.var_264][Gvar.var_266] > 0) {
            Gvar.var_269 = Gvar.var_82[Gvar.var_264][Gvar.var_266];
            if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                    Gvar.var_268 = Gvar.var_269;
                }
            }
        }
        if (Gvar.var_199 == 8 && Gvar.var_82[Gvar.var_66][Gvar.var_266] > 0) {
            Gvar.var_269 = Gvar.var_82[Gvar.var_66][Gvar.var_266];
            if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                    Gvar.var_268 = Gvar.var_269;
                }
            }
        }
        if (Gvar.var_199 == 9 && Gvar.var_82[Gvar.var_265][Gvar.var_266] > 0) {
            Gvar.var_269 = Gvar.var_82[Gvar.var_265][Gvar.var_266];
            if (Gvar.var_83[Gvar.var_269].Var30 == 0 || Gvar.var_119 == 1 || Gvar.sympathy_id == 166) {
                if (Gvar.var_83[Gvar.var_269].Var29 == 0 && Gvar.var_83[Gvar.var_269].Var0 != 50) {
                    Gvar.var_268 = Gvar.var_269;
                }
            }
        }
        await Func.func337(); // メッセージ関係呼び出し
    }
    if (Gvar.key_C_on == 1) { // キーC入力確認
        await Func.func051();
        Gvar.var_263[0] = 0;
        Gvar.var_268 = 0;
        await Main.func011();
        return;
    }
    if (Gvar.key_X_on == 1) {
        await Func.func051();
        Gvar.var_271 = 0;
        Gvar.var_272 = 0;
        await Main.func009(); // ゲーム基本動作フレーム処理
        return;
    }
    if (Gvar.key_Z_on == 1) {
        Gvar.var_271 = 0;
        Gvar.var_272 = 0;
        Gvar.var_243 = 1;
        await Func.func635(); // ディアボロの攻撃動作処理
        return;
    }
    if (Gvar.key_S_on == 1) { // キーS入力確認
        Gvar.var_271 = 0;
        Gvar.var_272 = 0;
        Gvar.var_225 = Gvar.var_250;
        Gvar.var_251 = 1;
        await Func.func647(); // 射撃攻撃動作処理
        return;
    }
    if (Gvar.key_A_on == 1) { // キーA入力確認
        Gvar.var_271 = 0;
        Gvar.var_272 = 0;
        Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
        Gvar.var_195 = 1;
        Gvar.var_196 = 1; // Mフラグ:メニュー画面 Func.func054
        Gvar.var_245 = 19;
        Gvar.var_246 = 45;
        Gvar.var_247 = 1;
        Gvar.var_248 = 1;
        Adap.DSPLAY(212); // メニュー画面を開く or 各設定項目を開く時の効果音
        await Func.func051();
        await Func.func053(); // メニュー画面呼び出し
        return;
    }
    // Ver0.1401にて追加。入力判定：射撃disc「フー・ファイターズ」を所持している場合に発動(F)
    if (Gvar.key_F_on == 1) {
        if (Gvar.var_224 >= 1) {
            Gvar.var_225 = 0; // Ver0.1402にて追加。必ず0からスタートすることで漏れが無くなる。
            for (let cnt2 = 0; cnt2 < 20; ++cnt2) {
                // Gvar.var_225 = Adap.rnd(Gvar.var_224); // Gvar.var_225 = 0; の方が良くない？
                // Gvar.var_225 = Gvar.var_225 + 1;
                //var_225 = Gvar.var_475;
                Gvar.var_221 = 0;
                Gvar.open_item_menue = 0; // Mフラグ:道具画面(アイテムを1つでも所持している)の表示(メニュー画面/道具) Func.func460
                Gvar.var_231 = 0;
                if (Gvar.var_233[Gvar.var_225].Var0 == 401) {
                    Gvar.activated_disc_id = Gvar.var_233[Gvar.var_225].Var0
                    await item401(); // No = 401 フー・ファイターズの発動処理
                    break;
                }
                Gvar.var_225 = Gvar.var_225 + 1; // Ver0.1402にて追加。ループの最後に1プラスする。
            }
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾌｰ･ﾌｧｲﾀｰｽﾞを持っていないぞ";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            Gvar.var_234 = 0;
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            Gvar.var_217 = 1;
            await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        if (Gvar.var_224 == 0) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "ﾌｰ･ﾌｧｲﾀｰｽﾞを持っていないぞ";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            Gvar.var_234 = 0;
            Gvar.var_220 = 0; // 道具画面(メニュー画面/道具)呼び出し確認変数？
            Gvar.var_217 = 1;
            await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        return;
    }
    await Main.func012();
    return;
}

export {func012}


async function func013(this: any) {
    Adap.dbgprt(13);
    await Func.func080(false); // 各キー入力確認 OFF?
    if (Gvar.var_253 == 1) {
        Gvar.var_66 = Gvar.var_66 - 1;
        Gvar.var_67 = Gvar.var_67 - 1;
        Gvar.var_199 = 7;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_254 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
        Gvar.var_66 = Gvar.var_66 - 1;
        Gvar.var_67 = Gvar.var_67 - 1;
        Gvar.var_199 = 7;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_256 == 1) {
        Gvar.var_66 = Gvar.var_66 + 1;
        Gvar.var_67 = Gvar.var_67 - 1;
        Gvar.var_199 = 9;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_257 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
        Gvar.var_66 = Gvar.var_66 + 1;
        Gvar.var_67 = Gvar.var_67 - 1;
        Gvar.var_199 = 9;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_258 == 1) {
        Gvar.var_66 = Gvar.var_66 - 1;
        Gvar.var_67 = Gvar.var_67 + 1;
        Gvar.var_199 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_254 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
        Gvar.var_66 = Gvar.var_66 - 1;
        Gvar.var_67 = Gvar.var_67 + 1;
        Gvar.var_199 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_260 == 1) {
        Gvar.var_66 = Gvar.var_66 + 1;
        Gvar.var_67 = Gvar.var_67 + 1;
        Gvar.var_199 = 3;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_257 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
        Gvar.var_66 = Gvar.var_66 + 1;
        Gvar.var_67 = Gvar.var_67 + 1;
        Gvar.var_199 = 3;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    Gvar.conf_keyon = Adap.getkey(81); // キーQ 入力確認
    if (Gvar.conf_keyon == 1) {
        await Func.func236();
        return;
    }
    await Main.func009(); // ゲーム基本動作フレーム処理
    return;
}

export {func013}


async function func014(this: any) {
    Adap.dbgprt(14);
    await Func.func080(false); // 各キー入力確認 OFF?
    Gvar.var_274 = Gvar.var_66 - 1;
    if (Gvar.var_274 < 0) {
        Gvar.var_274 = 0;
    }
    Gvar.var_275 = Gvar.var_66 + 1;
    if (Gvar.var_275 > Gvar.var_33) {
        Gvar.var_275 = Gvar.var_33;
    }
    Gvar.var_276 = Gvar.var_67 - 1;
    if (Gvar.var_276 < 0) {
        Gvar.var_276 = 0;
    }
    Gvar.var_277 = Gvar.var_67 + 1;
    if (Gvar.var_277 > Gvar.var_34) {
        Gvar.var_277 = Gvar.var_34;
    }
    Gvar.var_278 = 0;
    if (Gvar.var_240 == 1 && Gvar.key_Z_on == 0 && Gvar.key_X_on == 1) {
        if (Gvar.var_201 == 14 && Gvar.var_279 == 14) {
            if (Gvar.var_71[Gvar.var_274][Gvar.var_67] <= 12 && Gvar.var_71[Gvar.var_274][Gvar.var_67] != 0) {
                Gvar.var_278 = 1;
            }
            if (Gvar.var_71[Gvar.var_275][Gvar.var_67] <= 12 && Gvar.var_71[Gvar.var_275][Gvar.var_67] != 0) {
                Gvar.var_278 = 1;
            }
            if (Gvar.var_71[Gvar.var_66][Gvar.var_277] <= 12 && Gvar.var_71[Gvar.var_66][Gvar.var_277] != 0) {
                Gvar.var_278 = 1;
            }
            if (Gvar.var_71[Gvar.var_66][Gvar.var_276] <= 12 && Gvar.var_71[Gvar.var_66][Gvar.var_276] != 0) {
                Gvar.var_278 = 1;
            }
        }
        if (Gvar.var_201 == 14 && Gvar.var_71[Gvar.var_274][Gvar.var_67] == 14 && Gvar.var_71[Gvar.var_275][Gvar.var_67] == 14 && Gvar.var_71[Gvar.var_66][Gvar.var_277] == 14 && Gvar.var_71[Gvar.var_66][Gvar.var_276] == 14) {
            if (Gvar.var_71[Gvar.var_274][Gvar.var_277] != 14 && Gvar.var_71[Gvar.var_275][Gvar.var_277] != 14 && Gvar.var_71[Gvar.var_274][Gvar.var_276] != 14 && Gvar.var_71[Gvar.var_275][Gvar.var_276] != 14) {
                Gvar.var_278 = 1;
            }
        }
        if (Gvar.var_201 != 0 && Gvar.var_201 <= 12) {
            if (Gvar.var_73[Gvar.var_274][Gvar.var_67] != 0 && Gvar.var_199 != 6) {
                Gvar.var_278 = 1;
            }
            if (Gvar.var_73[Gvar.var_275][Gvar.var_67] != 0 && Gvar.var_199 != 4) {
                Gvar.var_278 = 1;
            }
            if (Gvar.var_73[Gvar.var_66][Gvar.var_277] != 0 && Gvar.var_199 != 8) {
                Gvar.var_278 = 1;
            }
            if (Gvar.var_73[Gvar.var_66][Gvar.var_276] != 0 && Gvar.var_199 != 2) {
                Gvar.var_278 = 1;
            }
            if (Gvar.var_80[Gvar.var_274][Gvar.var_67] != 0) {
                Gvar.var_280 = Gvar.var_80[Gvar.var_274][Gvar.var_67];
                // Gvar.var_121 罠が見えるようになるフラグON
                if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                    Gvar.var_278 = 1;
                }
            }
            if (Gvar.var_80[Gvar.var_275][Gvar.var_67] != 0) {
                Gvar.var_280 = Gvar.var_80[Gvar.var_275][Gvar.var_67];
                // Gvar.var_121 罠が見えるようになるフラグON
                if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                    Gvar.var_278 = 1;
                }
            }
            if (Gvar.var_80[Gvar.var_66][Gvar.var_277] != 0) {
                Gvar.var_280 = Gvar.var_80[Gvar.var_66][Gvar.var_277];
                // Gvar.var_121 罠が見えるようになるフラグON
                if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                    Gvar.var_278 = 1;
                }
            }
            if (Gvar.var_80[Gvar.var_66][Gvar.var_276] != 0) {
                Gvar.var_280 = Gvar.var_80[Gvar.var_66][Gvar.var_276];
                // Gvar.var_121 罠が見えるようになるフラグON
                if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                    Gvar.var_278 = 1;
                }
            }
            if (Gvar.var_80[Gvar.var_274][Gvar.var_277] != 0) {
                Gvar.var_280 = Gvar.var_80[Gvar.var_274][Gvar.var_277];
                if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                    Gvar.var_278 = 1;
                }
            }
            if (Gvar.var_80[Gvar.var_275][Gvar.var_277] != 0) {
                Gvar.var_280 = Gvar.var_80[Gvar.var_275][Gvar.var_277];
                // Gvar.var_121 罠が見えるようになるフラグON
                if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                    Gvar.var_278 = 1;
                }
            }
            if (Gvar.var_80[Gvar.var_274][Gvar.var_276] != 0) {
                Gvar.var_280 = Gvar.var_80[Gvar.var_274][Gvar.var_276];
                if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                    Gvar.var_278 = 1;
                }
            }
            if (Gvar.var_80[Gvar.var_275][Gvar.var_276] != 0) {
                Gvar.var_280 = Gvar.var_80[Gvar.var_275][Gvar.var_276];
                // Gvar.var_121 罠が見えるようになるフラグON
                if (Gvar.var_81[Gvar.var_280][4] == 1 || Gvar.var_121 == 1 || Gvar.equip_disc[303] == 1 || Gvar.equip_disc[315] == 1) {
                    Gvar.var_278 = 1;
                }
            }
        }
        if (Gvar.var_77[Gvar.var_274][Gvar.var_67] != 0 && Gvar.var_199 != 6) {
            Gvar.var_278 = 1;
        }
        if (Gvar.var_77[Gvar.var_275][Gvar.var_67] != 0 && Gvar.var_199 != 4) {
            Gvar.var_278 = 1;
        }
        if (Gvar.var_77[Gvar.var_66][Gvar.var_277] != 0 && Gvar.var_199 != 8) {
            Gvar.var_278 = 1;
        }
        if (Gvar.var_77[Gvar.var_66][Gvar.var_276] != 0 && Gvar.var_199 != 2) {
            Gvar.var_278 = 1;
        }
        if (Gvar.var_278 == 1) {
            Gvar.var_240 = 0;
            await Func.func179();
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
    }
    if (Gvar.var_253 == 1) {
        Gvar.var_66 = Gvar.var_66 - 1;
        Gvar.var_67 = Gvar.var_67 - 1;
        Gvar.var_199 = 7;
        Gvar.var_240 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_254 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
        Gvar.var_66 = Gvar.var_66 - 1;
        Gvar.var_67 = Gvar.var_67 - 1;
        Gvar.var_199 = 7;
        Gvar.var_240 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_256 == 1) {
        Gvar.var_66 = Gvar.var_66 + 1;
        Gvar.var_67 = Gvar.var_67 - 1;
        Gvar.var_199 = 9;
        Gvar.var_240 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_257 == 1 && Gvar.var_255 == 1) { // var_255:入力判定[↑]
        Gvar.var_66 = Gvar.var_66 + 1;
        Gvar.var_67 = Gvar.var_67 - 1;
        Gvar.var_199 = 9;
        Gvar.var_240 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_258 == 1) {
        Gvar.var_66 = Gvar.var_66 - 1;
        Gvar.var_67 = Gvar.var_67 + 1;
        Gvar.var_199 = 1;
        Gvar.var_240 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_254 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
        Gvar.var_66 = Gvar.var_66 - 1;
        Gvar.var_67 = Gvar.var_67 + 1;
        Gvar.var_199 = 1;
        Gvar.var_240 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_260 == 1) {
        Gvar.var_66 = Gvar.var_66 + 1;
        Gvar.var_67 = Gvar.var_67 + 1;
        Gvar.var_199 = 3;
        Gvar.var_240 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_257 == 1 && Gvar.var_259 == 1) { // var_259:入力判定[↓]
        Gvar.var_66 = Gvar.var_66 + 1;
        Gvar.var_67 = Gvar.var_67 + 1;
        Gvar.var_199 = 3;
        Gvar.var_240 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_254 == 1) {
        Gvar.var_66 = Gvar.var_66 - 1;
        Gvar.var_199 = 4;
        Gvar.var_240 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_257 == 1) {
        Gvar.var_66 = Gvar.var_66 + 1;
        Gvar.var_199 = 6;
        Gvar.var_240 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_255 == 1) { // var_255:入力判定[↑]
        Gvar.var_67 = Gvar.var_67 - 1;
        Gvar.var_199 = 8;
        Gvar.var_240 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    if (Gvar.var_259 == 1) { // var_259:入力判定[↓]
        Gvar.var_67 = Gvar.var_67 + 1;
        Gvar.var_199 = 2;
        Gvar.var_240 = 1;
        await Main.func015(); // ディアボロの移動処理(座標計算処理)
        return;
    }
    Gvar.var_281 = Gvar.var_66 - 4;
    if (Gvar.var_281 < 0) {
        Gvar.var_281 = 0;
    }
    Gvar.var_282 = Gvar.var_66 + 4;
    if (Gvar.var_282 > Gvar.var_33) {
        Gvar.var_282 = Gvar.var_33;
    }
    Gvar.var_283 = Gvar.var_67 - 4;
    if (Gvar.var_283 < 0) {
        Gvar.var_283 = 0;
    }
    Gvar.var_284 = Gvar.var_67 + 4;
    if (Gvar.var_284 > Gvar.var_34) {
        Gvar.var_284 = Gvar.var_34;
    }
    Gvar.var_285 = 0;
    Gvar.var_286 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_97; ++cnt1) {
        if (Gvar.var_83[Gvar.var_286].Var1 > Gvar.var_281 && Gvar.var_83[Gvar.var_286].Var1 < Gvar.var_282 && Gvar.var_83[Gvar.var_286].Var2 > Gvar.var_283 && Gvar.var_83[Gvar.var_286].Var2 < Gvar.var_284 && Gvar.var_83[Gvar.var_286].Var31 != 4 && Gvar.var_83[Gvar.var_286].Var31 != 5) {
            if (Gvar.var_83[Gvar.var_286].Var0 != 0 && Gvar.var_83[Gvar.var_286].Var0 != 79 && Gvar.var_83[Gvar.var_286].Var0 != 94 && Gvar.var_83[Gvar.var_286].Var29 == 0 && Gvar.var_83[Gvar.var_286].Var12 == 0 && Gvar.var_83[Gvar.var_286].Var13 == 0 && Gvar.var_83[Gvar.var_286].Var30 == 0) {
                Gvar.var_285 = 1;
                break;
            }
        }
        Gvar.var_286 = Gvar.var_286 + 1;
    }
    await Func.func080(); // 各キー入力確認
    if (Gvar.var_285 == 1) {
        Gvar.var_240 = 0;
        if (Gvar.key_Z_on == 1 && Gvar.key_X_on == 1) {
            Gvar.var_287 = 1;
            Gvar.var_241 = 1;
            for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_287 = 0;
            Gvar.var_241 = 0;
            Gvar.var_217 = 1;
            await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
    }
    if (Gvar.key_Z_on == 1 && Gvar.key_X_on == 1) {
        Gvar.var_217 = 1;
        Gvar.var_240 = 1;
        Gvar.var_241 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
    }
    Gvar.var_241 = 0;
    Gvar.var_240 = 0;
    await Main.func009(); // ゲーム基本動作フレーム処理
    return;
}

export {func014}


// ディアボロの移動処理(座標計算処理)
async function func015(this: any) {
    Adap.dbgprt(15);
    if (Gvar.var_116 >= 1 || Gvar.var_114 >= 1) {
        Gvar.var_66 = Gvar.var_236;
        Gvar.var_67 = Gvar.var_237;
        await Main.func026(); // その場へ固定された時の動作処理
        return;
    }
    if (Gvar.var_126 == 1) {
        Gvar.var_66 = Gvar.var_236;
        Gvar.var_67 = Gvar.var_237;
        Gvar.var_288 = Adap.rnd(8);
        if (Gvar.var_288 == 0) {
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 7;
        }
        if (Gvar.var_288 == 1) {
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 9;
        }
        if (Gvar.var_288 == 2) {
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 1;
        }
        if (Gvar.var_288 == 3) {
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 3;
        }
        if (Gvar.var_288 == 4) {
            Gvar.var_66 = Gvar.var_66 - 1;
            Gvar.var_199 = 4;
        }
        if (Gvar.var_288 == 5) {
            Gvar.var_66 = Gvar.var_66 + 1;
            Gvar.var_199 = 6;
        }
        if (Gvar.var_288 == 6) {
            Gvar.var_67 = Gvar.var_67 - 1;
            Gvar.var_199 = 8;
        }
        if (Gvar.var_288 == 7) {
            Gvar.var_67 = Gvar.var_67 + 1;
            Gvar.var_199 = 2;
        }
    }
    // No = 0 なので、拠点(ホテル、亀、)
    if (Gvar.dungeon_number == 0 && Gvar.var_66 == 14 && Gvar.var_67 == 22 && Gvar.var_236 != 15) { // X軸14なのでロッコ・バロッコ所長?
        Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
        Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
        await Func.func162();
        return;
    }
    // No = 0 なので、拠点(ホテル、亀、)
    if (Gvar.dungeon_number == 0 && Gvar.var_66 == 12 && Gvar.var_67 == 22 && Gvar.var_199 == 8) { // X軸12なので岸辺露伴？
        Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
        Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
        await Func.func736(); // 岸辺露伴に話しかけた時の初期化処理
        return;
    }
    Gvar.var_241 = 0;
    if (Gvar.var_217 == 0) {
        if (Gvar.var_66 < 5) {
            Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
            Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        if (Gvar.var_67 < 5) {
            Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
            Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        if (Gvar.var_66 > Gvar.var_33) {
            Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
            Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        if (Gvar.var_67 > Gvar.var_34) {
            Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
            Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        Gvar.var_289 = Gvar.var_66 - 1;
        if (Gvar.var_289 < 0) {
            Gvar.var_289 = 0;
        }
        Gvar.var_290 = Gvar.var_66 + 1;
        if (Gvar.var_290 > Gvar.var_33) {
            Gvar.var_290 = Gvar.var_33;
        }
        Gvar.var_291 = Gvar.var_67 + 1;
        if (Gvar.var_291 > Gvar.var_34) {
            Gvar.var_291 = Gvar.var_34;
        }
        Gvar.var_292 = Gvar.var_67 - 1;
        if (Gvar.var_292 < 0) {
            Gvar.var_292 = 0;
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 13 && Gvar.nouryoku_disc_id != 202 && Gvar.nouryoku_disc_id != 117 && Gvar.var_125 == 0) {
            Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
            Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        await Func.func080(false); // 各キー入力確認 OFF?
        if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 0 && Gvar.var_159 == 0) {
            Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
            Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        if (Gvar.var_71[Gvar.var_66][Gvar.var_67] == 0 && Gvar.key_X_on == 1) {
            Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
            Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        if (Gvar.var_199 == 1 && Gvar.var_159 == 0) {
            if (Gvar.var_71[Gvar.var_290][Gvar.var_67] == 0 || Gvar.var_71[Gvar.var_66][Gvar.var_292] == 0) {
                Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                await Main.func009(); // ゲーム基本動作フレーム処理
                return;
            }
        }
        if (Gvar.var_199 == 3 && Gvar.var_159 == 0) {
            if (Gvar.var_71[Gvar.var_289][Gvar.var_67] == 0 || Gvar.var_71[Gvar.var_66][Gvar.var_292] == 0) {
                Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                await Main.func009(); // ゲーム基本動作フレーム処理
                return;
            }
        }
        if (Gvar.var_199 == 7 && Gvar.var_159 == 0) {
            if (Gvar.var_71[Gvar.var_290][Gvar.var_67] == 0 || Gvar.var_71[Gvar.var_66][Gvar.var_291] == 0) {
                Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                await Main.func009(); // ゲーム基本動作フレーム処理
                return;
            }
        }
        if (Gvar.var_199 == 9 && Gvar.var_159 == 0) {
            if (Gvar.var_71[Gvar.var_289][Gvar.var_67] == 0 || Gvar.var_71[Gvar.var_66][Gvar.var_291] == 0) {
                Gvar.var_66 = Gvar.var_236; // buffer指定用X座標
                Gvar.var_67 = Gvar.var_237; // buffer指定用Y座標
                await Main.func009(); // ゲーム基本動作フレーム処理
                return;
            }
        }
        if (Gvar.var_146 >= 1 && Gvar.var_236 == Gvar.var_147 && Gvar.var_237 == Gvar.var_148 && Gvar.var_139 == 0 && Gvar.var_144 == 0 && Gvar.var_123 == 0 && Gvar.var_163 == 0) {
            if (Gvar.var_82[Gvar.var_66][Gvar.var_67] != 0) {
                Gvar.var_66 = Gvar.var_147;
                Gvar.var_67 = Gvar.var_148;
                Gvar.var_236 = Gvar.var_66;
                Gvar.var_237 = Gvar.var_67;
                await Main.func009(); // ゲーム基本動作フレーム処理
                return;
            }
            Gvar.var_66 = Gvar.var_147;
            Gvar.var_67 = Gvar.var_148;
            Gvar.var_236 = Gvar.var_66;
            Gvar.var_237 = Gvar.var_67;
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "鉄塔からは出られない！";
            Gvar.comments_row2 = "";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            await Func.func047();
            Adap.DSPLAY(188);
            for (let cnt3 = 0; cnt3 < 9; ++cnt3) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            await Main.func009(); // ゲーム基本動作フレーム処理
            return;
        }
        Gvar.var_301 = 0;
        if (Gvar.var_201 != 14 && Gvar.var_71[Gvar.var_66][Gvar.var_67] >= 13 && Gvar.var_139 == 0 && Gvar.var_144 == 0 && Gvar.var_123 == 0 && Gvar.var_163 == 0) {
            if (Gvar.nouryoku_disc_id != 112 && Gvar.nouryoku_disc_id != 204 && Gvar.nouryoku_disc_id != 394 && Gvar.nouryoku_disc_id != 395) {
                Gvar.var_302 = 1;
                for (let cnt4 = 0; cnt4 < Gvar.var_97; ++cnt4) {
                    if (Gvar.var_83[Gvar.var_302].Var0 == 31 && Gvar.var_83[Gvar.var_302].Var20 == 0 && Gvar.var_83[Gvar.var_302].Var10 == Gvar.var_201 && Gvar.var_83[Gvar.var_302].Var12 == 0 && Gvar.var_83[Gvar.var_302].Var13 == 0 && Gvar.var_83[Gvar.var_302].Var14 == 0 && Gvar.var_83[Gvar.var_302].Var17 == 0 && Gvar.var_83[Gvar.var_302].Var23 == 0) {
                        Gvar.var_301 = 1;
                    }
                    Gvar.var_302 = Gvar.var_302 + 1;
                }
                if (Gvar.var_301 == 1 && Gvar.var_71[Gvar.var_66][Gvar.var_67] == 13) {
                    Gvar.var_303 = Gvar.var_66;
                    Gvar.var_304 = Gvar.var_67;
                    Gvar.var_305 = Gvar.var_66 - 1;
                    if (Gvar.var_305 < 0) {
                        Gvar.var_305 = 0;
                    }
                    Gvar.var_306 = Gvar.var_66 + 1;
                    if (Gvar.var_306 > Gvar.var_33) {
                        Gvar.var_306 = Gvar.var_33;
                    }
                    Gvar.var_307 = Gvar.var_67 + 1;
                    if (Gvar.var_307 > Gvar.var_34) {
                        Gvar.var_307 = Gvar.var_34;
                    }
                    Gvar.var_308 = Gvar.var_67 - 1;
                    if (Gvar.var_308 < 0) {
                        Gvar.var_308 = 0;
                    }
                    if (Gvar.var_71[Gvar.var_305][Gvar.var_304] == Gvar.var_201) {
                        Gvar.var_301 = 0;
                    }
                    if (Gvar.var_71[Gvar.var_306][Gvar.var_304] == Gvar.var_201) {
                        Gvar.var_301 = 0;
                    }
                    if (Gvar.var_71[Gvar.var_303][Gvar.var_307] == Gvar.var_201) {
                        Gvar.var_301 = 0;
                    }
                    if (Gvar.var_71[Gvar.var_303][Gvar.var_308] == Gvar.var_201) {
                        Gvar.var_301 = 0;
                    }
                    if (Gvar.var_71[Gvar.var_305][Gvar.var_307] == Gvar.var_201) {
                        Gvar.var_301 = 0;
                    }
                    if (Gvar.var_71[Gvar.var_305][Gvar.var_308] == Gvar.var_201) {
                        Gvar.var_301 = 0;
                    }
                    if (Gvar.var_71[Gvar.var_306][Gvar.var_307] == Gvar.var_201) {
                        Gvar.var_301 = 0;
                    }
                    if (Gvar.var_71[Gvar.var_306][Gvar.var_308] == Gvar.var_201) {
                        Gvar.var_301 = 0;
                    }
                }
                if (Gvar.var_301 == 1) {
                    Gvar.var_240 = 0;
                    Gvar.var_309 = Gvar.var_66;
                    Gvar.var_310 = Gvar.var_67;
                    Gvar.var_66 = Gvar.var_236;
                    Gvar.var_67 = Gvar.var_237;
                    if (Gvar.var_82[Gvar.var_309][Gvar.var_310] == 0) {
                        Adap.gsel(19);
                        Adap.color(255, 255, 255);
        
                        Adap.boxf(0, 0, 340, 340);
                        Adap.gsel(0);
                        Gvar.var_311 = 255;
                        Adap.DSPLAY(206);
                        Gvar.var_312 = 1;
                        await Func.func337(); // メッセージ関係呼び出し
                        Gvar.var_312 = 0;
                        Gvar.comments_row1 = "";
                        Gvar.comments_row2 = "";
                        Gvar.var_295 = "";
                        Gvar.comments_row1a = "";
                        Gvar.comments_row2a = "";
                        Gvar.var_298 = "";
                        Gvar.var_299 = 0;
                        Gvar.comments_row1 = "吉良の親父がいるため";
                        Gvar.comments_row2 = "この部屋から出ることができない！";
                        Gvar.var_198 = 1;
                        Gvar.var_300 = 0;
                        await Func.func047();
                        for (let cnt6 = 0; cnt6 < 9; ++cnt6) {
                            await Func.func337(); // メッセージ関係呼び出し
                        }
                    }
                    await Main.func009(); // ゲーム基本動作フレーム処理
                    return;
                }
            }
        }
        Gvar.var_313 = 0;
        if (Gvar.key_X_on == 1 && Gvar.var_82[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_71[Gvar.var_236][Gvar.var_237] != 0 && Gvar.var_71[Gvar.var_236][Gvar.var_237] != 13) {
            Gvar.var_314 = Gvar.var_82[Gvar.var_66][Gvar.var_67];
            Gvar.var_315 = 0;
            if (Gvar.var_83[Gvar.var_314].Var31 == 4) {
                Gvar.var_315 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var31 == 5) {
                Gvar.var_315 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 61) { // No = 61 ヨーヨーマッ
                Gvar.var_315 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 49) {
                Gvar.var_315 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 116) {
                Gvar.var_315 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var20 == 2) {
                Gvar.var_315 = 1;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 33) {
                Gvar.var_315 = 0;
            }
            if (Gvar.var_83[Gvar.var_314].Var0 == 142) {
                Gvar.var_315 = 0;
            }
            if (Gvar.var_315 == 1) {
                Gvar.var_316 = Gvar.var_83[Gvar.var_314].Var1;
                Gvar.var_317 = Gvar.var_83[Gvar.var_314].Var2;
                Gvar.var_83[Gvar.var_314].Var1 = Gvar.var_236;
                Gvar.var_83[Gvar.var_314].Var2 = Gvar.var_237;
                Gvar.var_82[Gvar.var_316][Gvar.var_317] = 0;
                Gvar.var_82[Gvar.var_236][Gvar.var_237] = Gvar.var_314;
                if (Gvar.var_199 == 4) {
                    Gvar.var_83[Gvar.var_314].Var5 = 6;
                }
                if (Gvar.var_199 == 6) {
                    Gvar.var_83[Gvar.var_314].Var5 = 4;
                }
                if (Gvar.var_199 == 8) {
                    Gvar.var_83[Gvar.var_314].Var5 = 2;
                }
                if (Gvar.var_199 == 2) {
                    Gvar.var_83[Gvar.var_314].Var5 = 8;
                }
                if (Gvar.var_199 == 1) {
                    Gvar.var_83[Gvar.var_314].Var5 = 9;
                }
                if (Gvar.var_199 == 3) {
                    Gvar.var_83[Gvar.var_314].Var5 = 7;
                }
                if (Gvar.var_199 == 7) {
                    Gvar.var_83[Gvar.var_314].Var5 = 3;
                }
                if (Gvar.var_199 == 9) {
                    Gvar.var_83[Gvar.var_314].Var5 = 1;
                }
                Gvar.var_240 = 0;
                Gvar.var_313 = Gvar.var_314;
                if (Gvar.var_83[Gvar.var_314].Var0 == 116) {
                    Gvar.var_318 = Gvar.var_314;
                }
            }
        }
        if (Gvar.var_82[Gvar.var_66][Gvar.var_67] != 0) {
            Gvar.var_319 = Gvar.var_82[Gvar.var_66][Gvar.var_67];
            if (Gvar.var_83[Gvar.var_319].Var0 != 50) {
                Gvar.var_66 = Gvar.var_236;
                Gvar.var_67 = Gvar.var_237;
                await Main.func009(); // ゲーム基本動作フレーム処理
                return;
            }
        }
        if (Gvar.var_77[Gvar.var_66][Gvar.var_67] != 0 && Gvar.var_313 == 0) {
            Gvar.var_320 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
            if (Gvar.var_78[Gvar.var_320].Var15 == 1) {
                Gvar.var_321 = Gvar.var_77[Gvar.var_66][Gvar.var_67];
                Gvar.var_66 = Gvar.var_236;
                Gvar.var_67 = Gvar.var_237;
                Gvar.var_240 = 0;
                await Func.func402();
            }
        }
    }
    await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
    return;
}

export {func015}


async function func016(this: any) {
    Adap.dbgprt(16);
    Gvar.var_65[Gvar.var_236][Gvar.var_237] = 0;
    Gvar.var_65[Gvar.var_66][Gvar.var_67] = 1;
    Gvar.var_303 = Gvar.var_66;
    Gvar.var_304 = Gvar.var_67;
    Gvar.var_305 = Gvar.var_66 - 1;
    if (Gvar.var_305 < 0) {
        Gvar.var_305 = 0;
    }
    Gvar.var_306 = Gvar.var_66 + 1;
    if (Gvar.var_306 > Gvar.var_33) {
        Gvar.var_306 = Gvar.var_33;
    }
    Gvar.var_307 = Gvar.var_67 + 1;
    if (Gvar.var_307 > Gvar.var_34) {
        Gvar.var_307 = Gvar.var_34;
    }
    Gvar.var_308 = Gvar.var_67 - 1;
    if (Gvar.var_308 < 0) {
        Gvar.var_308 = 0;
    }
    Gvar.var_279 = Gvar.var_201;
    Gvar.var_201 = Gvar.var_71[Gvar.var_303][Gvar.var_304];
    if (Gvar.var_71[Gvar.var_303][Gvar.var_304] == 13) {
        Gvar.var_201 = 14;
        if (Gvar.var_71[Gvar.var_305][Gvar.var_307] != 0 && Gvar.var_71[Gvar.var_305][Gvar.var_307] <= 12) {
            Gvar.var_201 = Gvar.var_71[Gvar.var_305][Gvar.var_307];
        }
        if (Gvar.var_71[Gvar.var_305][Gvar.var_308] != 0 && Gvar.var_71[Gvar.var_305][Gvar.var_308] <= 12) {
            Gvar.var_201 = Gvar.var_71[Gvar.var_305][Gvar.var_308];
        }
        if (Gvar.var_71[Gvar.var_306][Gvar.var_307] != 0 && Gvar.var_71[Gvar.var_306][Gvar.var_307] <= 12) {
            Gvar.var_201 = Gvar.var_71[Gvar.var_306][Gvar.var_307];
        }
        if (Gvar.var_71[Gvar.var_306][Gvar.var_308] != 0 && Gvar.var_71[Gvar.var_306][Gvar.var_308] <= 12) {
            Gvar.var_201 = Gvar.var_71[Gvar.var_306][Gvar.var_308];
        }
        if (Gvar.var_71[Gvar.var_305][Gvar.var_304] != 0 && Gvar.var_71[Gvar.var_305][Gvar.var_304] <= 12) {
            Gvar.var_201 = Gvar.var_71[Gvar.var_305][Gvar.var_304];
        }
        if (Gvar.var_71[Gvar.var_306][Gvar.var_304] != 0 && Gvar.var_71[Gvar.var_306][Gvar.var_304] <= 12) {
            Gvar.var_201 = Gvar.var_71[Gvar.var_306][Gvar.var_304];
        }
        if (Gvar.var_71[Gvar.var_303][Gvar.var_307] != 0 && Gvar.var_71[Gvar.var_303][Gvar.var_307] <= 12) {
            Gvar.var_201 = Gvar.var_71[Gvar.var_303][Gvar.var_307];
        }
        if (Gvar.var_71[Gvar.var_303][Gvar.var_308] != 0 && Gvar.var_71[Gvar.var_303][Gvar.var_308] <= 12) {
            Gvar.var_201 = Gvar.var_71[Gvar.var_303][Gvar.var_308];
        }
    }
    if (Gvar.var_71[Gvar.var_303][Gvar.var_304] != 0) {
        Gvar.var_74[Gvar.var_303][Gvar.var_304] = 2;
        if (Gvar.var_74[Gvar.var_305][Gvar.var_304] == 0)
            Gvar.var_74[Gvar.var_305][Gvar.var_304] = 1;
        if (Gvar.var_74[Gvar.var_306][Gvar.var_304] == 0)
            Gvar.var_74[Gvar.var_306][Gvar.var_304] = 1;
        if (Gvar.var_74[Gvar.var_303][Gvar.var_307] == 0)
            Gvar.var_74[Gvar.var_303][Gvar.var_307] = 1;
        if (Gvar.var_74[Gvar.var_303][Gvar.var_308] == 0)
            Gvar.var_74[Gvar.var_303][Gvar.var_308] = 1;
        if (Gvar.var_74[Gvar.var_305][Gvar.var_307] == 0)
            Gvar.var_74[Gvar.var_305][Gvar.var_307] = 1;
        if (Gvar.var_74[Gvar.var_305][Gvar.var_308] == 0)
            Gvar.var_74[Gvar.var_305][Gvar.var_308] = 1;
        if (Gvar.var_74[Gvar.var_306][Gvar.var_307] == 0)
            Gvar.var_74[Gvar.var_306][Gvar.var_307] = 1;
        if (Gvar.var_74[Gvar.var_306][Gvar.var_308] == 0)
            Gvar.var_74[Gvar.var_306][Gvar.var_308] = 1;
        Gvar.var_75[Gvar.var_201] = 1;
        if (Gvar.var_201 != Gvar.var_279 && Gvar.var_201 != 14) {
            await Main.func017();
        }
        await Main.func018();
        if (Gvar.var_200 == Gvar.var_201 && Gvar.var_201 != 14) {
            Gvar.var_98 = 1;
        }
        if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 1) {
            Gvar.var_98 = 1;
        }
        if (Gvar.var_202 == Gvar.var_201 && Gvar.var_201 != 14) {
            Gvar.var_99 = 1;
        }
        if (Gvar.var_73[Gvar.var_66][Gvar.var_67] == 2) {
            Gvar.var_99 = 1;
        }
    }
    if (Gvar.var_201 != Gvar.var_279 && Gvar.var_201 != 14) {
        Gvar.var_322 = Gvar.var_199;
    }
    if (Gvar.var_201 == 14 && Gvar.var_279 != 14) {
        Gvar.var_187 = Gvar.var_279;
        Gvar.var_323 = 0;
        if (Gvar.var_66 == Gvar.var_76[Gvar.var_279][1][1] && Gvar.var_67 == Gvar.var_76[Gvar.var_279][1][2]) {
            Gvar.var_323 = 1;
        }
        if (Gvar.var_66 == Gvar.var_76[Gvar.var_279][2][1] && Gvar.var_67 == Gvar.var_76[Gvar.var_279][2][2]) {
            Gvar.var_323 = 2;
        }
        if (Gvar.var_66 == Gvar.var_76[Gvar.var_279][3][1] && Gvar.var_67 == Gvar.var_76[Gvar.var_279][3][2]) {
            Gvar.var_323 = 3;
        }
        if (Gvar.var_66 == Gvar.var_76[Gvar.var_279][4][1] && Gvar.var_67 == Gvar.var_76[Gvar.var_279][4][2]) {
            Gvar.var_323 = 4;
        }
        if (Gvar.var_323 == 0) {
            Gvar.var_188 = Gvar.var_66;
            Gvar.var_189 = Gvar.var_67;
            Gvar.var_324 = 1;
            for (let cnt3 = 0; cnt3 < Gvar.var_97; ++cnt3) {
                if (Gvar.var_83[Gvar.var_324].Var0 != 0 && Gvar.var_83[Gvar.var_324].Var10 == Gvar.var_279) {
                    Gvar.var_83[Gvar.var_324].Var33 = 5;
                }
                Gvar.var_324++;
            }
        }
    }
    return;
}

export {func016}


async function func017(this: any) {
    Adap.dbgprt(17);
    if (Gvar.special_floor == 8) { // 幻覚の迷宮
        return;
    }
    Gvar.var_325 = 0;
    for (let cnt1 = 0; cnt1 < Gvar.var_31; ++cnt1) {
        Gvar.var_326 = 0;
        for (let cnt2 = 0; cnt2 < Gvar.var_32; ++cnt2) {
            Gvar.var_327 = Gvar.var_325 - 1;
            if (Gvar.var_327 < 0) {
                Gvar.var_327 = 0;
            }
            Gvar.var_328 = Gvar.var_325 + 1;
            if (Gvar.var_328 > Gvar.var_33) {
                Gvar.var_328 = Gvar.var_33;
            }
            Gvar.var_329 = Gvar.var_326 + 1;
            if (Gvar.var_329 > Gvar.var_34) {
                Gvar.var_329 = Gvar.var_34;
            }
            Gvar.var_330 = Gvar.var_326 - 1;
            if (Gvar.var_330 < 0) {
                Gvar.var_330 = 0;
            }
            if (Gvar.var_71[Gvar.var_327][Gvar.var_326] == Gvar.var_201 || Gvar.var_71[Gvar.var_328][Gvar.var_326] == Gvar.var_201 || Gvar.var_71[Gvar.var_325][Gvar.var_329] == Gvar.var_201 || Gvar.var_71[Gvar.var_325][Gvar.var_330] == Gvar.var_201) {
                if (Gvar.var_74[Gvar.var_325][Gvar.var_326] == 0)
                    Gvar.var_74[Gvar.var_325][Gvar.var_326] = 1;
            }
            Gvar.var_326 = Gvar.var_326 + 1;
        }
        Gvar.var_325 = Gvar.var_325 + 1;
    }
    return;
}

export {func017}


async function func018(this: any) {
    Adap.dbgprt(18);
    Gvar.var_331 = Gvar.var_66 - 1;
    if (Gvar.var_331 < 0) {
        Gvar.var_331 = 0;
    }
    Gvar.var_332 = Gvar.var_66 + 1;
    if (Gvar.var_332 > Gvar.var_33) {
        Gvar.var_332 = Gvar.var_33;
    }
    Gvar.var_333 = Gvar.var_67 + 1;
    if (Gvar.var_333 > Gvar.var_34) {
        Gvar.var_333 = Gvar.var_34;
    }
    Gvar.var_334 = Gvar.var_67 - 1;
    if (Gvar.var_334 < 0) {
        Gvar.var_334 = 0;
    }
    Gvar.var_335 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_336; ++cnt1) {
        if (Gvar.var_201 != 14 && Gvar.var_78[Gvar.var_335].Var9 == Gvar.var_201) {
            Gvar.var_78[Gvar.var_335].Var10 = 1;
        }
        if (Gvar.var_78[Gvar.var_335].Var1 >= Gvar.var_331 && Gvar.var_78[Gvar.var_335].Var1 <= Gvar.var_332 && Gvar.var_78[Gvar.var_335].Var2 <= Gvar.var_333 && Gvar.var_78[Gvar.var_335].Var2 >= Gvar.var_334) {
            Gvar.var_78[Gvar.var_335].Var10 = 1;
        }
        Gvar.var_335 = Gvar.var_335 + 1;
    }
    Gvar.var_335 = 1;
    for (let cnt1 = 0; cnt1 < Gvar.var_337; ++cnt1) {
        if (Gvar.var_81[Gvar.var_335][0] == 31 && Gvar.var_201 != 14 && Gvar.var_81[Gvar.var_335][5] == Gvar.var_201) {
            Gvar.var_81[Gvar.var_335][4] = 1;
        }
        if (Gvar.var_81[Gvar.var_335][0] == 31 && Gvar.var_81[Gvar.var_335][1] >= Gvar.var_331 && Gvar.var_81[Gvar.var_335][1] <= Gvar.var_332 && Gvar.var_81[Gvar.var_335][2] <= Gvar.var_333 && Gvar.var_81[Gvar.var_335][2] >= Gvar.var_334) {
            Gvar.var_81[Gvar.var_335][4] = 1;
        }
        Gvar.var_335 = Gvar.var_335 + 1;
    }
    return;
}

export {func018}
