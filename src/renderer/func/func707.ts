import { Gvar } from '../variable'
import * as Adap from '../adapter/index'
import * as Func from '../func/index'
import * as Main from '../newdtw/index'

async function func707(this: any) {
        Adap.dbgprt(707);
        Gvar.var_243 = 0;
        Gvar.var_1009 = 0;
        Gvar.var_449 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_447 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Gvar.var_72[Gvar.var_447][Gvar.var_449] == 1 && Gvar.var_77[Gvar.var_447][Gvar.var_449] > 0) {
                    Gvar.var_3115 = Gvar.var_77[Gvar.var_447][Gvar.var_449];
                    if (Gvar.var_78[Gvar.var_3115].Var11 == 0) {
                        Gvar.belongings_item_list = Gvar.var_78[Gvar.var_3115].Var0;
                        await Func.func492(); // アイテムリスト呼び出し
                        Gvar.var_2476 = Math.floor(Gvar.buying_price / 2);
                        Gvar.var_482 = 0;
                        Gvar.var_482 = (Gvar.var_78[Gvar.var_3115].Var3 + Gvar.var_78[Gvar.var_3115].Var4) * 50;
                        if (Gvar.var_78[Gvar.var_3115].Var0 != 800) {
                            Gvar.var_482 = Gvar.var_78[Gvar.var_3115].Var7 * 100 + Gvar.var_482;
                        }
                        if (Gvar.var_78[Gvar.var_3115].Var19 > 1) {
                            Gvar.var_482 = Gvar.var_78[Gvar.var_3115].Var19 * 500 + Gvar.var_482;
                        }
                        Gvar.var_1009 = Gvar.var_1009 + Gvar.var_2476 + Gvar.var_482;
                    }
                    if (Gvar.var_78[Gvar.var_3115].Var0 >= 800 && Gvar.var_78[Gvar.var_3115].Var0 < 900) {
                        Gvar.var_484 = 1;
                        Gvar.var_485 = Gvar.var_78[Gvar.var_3115].Var6;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 0) {
                                Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                                await Func.func492(); // アイテムリスト呼び出し
                                Gvar.var_2476 = Math.floor(Gvar.buying_price / 2);
                                Gvar.var_482 = 0;
                                Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                                if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                                    Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                                }
                                Gvar.var_1009 = Gvar.var_1009 + Gvar.var_2476 + Gvar.var_482;
                            }
                            Gvar.var_484 = Gvar.var_484 + 1;
                        }
                    }
                }
                Gvar.var_447 = Gvar.var_447 + 1;
            }
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        Gvar.var_480 = 1;
        Gvar.payment_amount = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_224; ++cnt1) {
            if (Gvar.var_233[Gvar.var_480].Var11 == 1) {
                Gvar.belongings_item_list = Gvar.var_233[Gvar.var_480].Var0;
                await Func.func492(); // アイテムリスト呼び出し
                Gvar.var_482 = 0;
                Gvar.var_482 = (Gvar.var_233[Gvar.var_480].Var3 + Gvar.var_233[Gvar.var_480].Var4) * 50;
                if (Gvar.var_233[Gvar.var_480].Var0 != 800) {
                    Gvar.var_482 = Gvar.var_233[Gvar.var_480].Var7 * 100 + Gvar.var_482;
                }
                if (Gvar.var_233[Gvar.var_480].Var19 > 1) {
                    Gvar.var_482 = Gvar.var_233[Gvar.var_480].Var19 * 500 + Gvar.var_482;
                }
                Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
            }
            if (Gvar.var_233[Gvar.var_480].Var0 >= 800 && Gvar.var_233[Gvar.var_480].Var0 < 900) {
                Gvar.var_484 = 1;
                Gvar.var_485 = Gvar.var_233[Gvar.var_480].Var6;
                for (let cnt3 = 0; cnt3 < 10; ++cnt3) {
                    if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1) {
                        Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                        await Func.func492(); // アイテムリスト呼び出し
                        Gvar.var_482 = 0;
                        Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                        if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                            Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                        }
                        Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
                    }
                    Gvar.var_484 = Gvar.var_484 + 1;
                }
            }
            Gvar.var_480 = Gvar.var_480 + 1;
        }
        Gvar.var_449 = 0;
        for (let cnt1 = 0; cnt1 < Gvar.var_32; ++cnt1) {
            Gvar.var_447 = 0;
            for (let cnt2 = 0; cnt2 < Gvar.var_31; ++cnt2) {
                if (Gvar.var_77[Gvar.var_447][Gvar.var_449] > 0 && Gvar.var_72[Gvar.var_447][Gvar.var_449] == 0) {
                    Gvar.var_3115 = Gvar.var_77[Gvar.var_447][Gvar.var_449];
                    if (Gvar.var_78[Gvar.var_3115].Var11 == 1) {
                        Gvar.belongings_item_list = Gvar.var_78[Gvar.var_3115].Var0;
                        await Func.func492(); // アイテムリスト呼び出し
                        Gvar.var_482 = 0;
                        Gvar.var_482 = (Gvar.var_78[Gvar.var_3115].Var3 + Gvar.var_78[Gvar.var_3115].Var4) * 50;
                        if (Gvar.var_78[Gvar.var_3115].Var0 != 800) {
                            Gvar.var_482 = Gvar.var_78[Gvar.var_3115].Var7 * 100 + Gvar.var_482;
                        }
                        if (Gvar.var_78[Gvar.var_3115].Var19 > 1) {
                            Gvar.var_482 = Gvar.var_78[Gvar.var_3115].Var19 * 500 + Gvar.var_482;
                        }
                        Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
                    }
                    if (Gvar.var_78[Gvar.var_3115].Var0 >= 800 && Gvar.var_78[Gvar.var_3115].Var0 < 900) {
                        Gvar.var_484 = 1;
                        Gvar.var_485 = Gvar.var_78[Gvar.var_3115].Var6;
                        for (let cnt5 = 0; cnt5 < 10; ++cnt5) {
                            if (Gvar.var_486[Gvar.var_485][Gvar.var_484][0] > 0 && Gvar.var_486[Gvar.var_485][Gvar.var_484][11] == 1) {
                                Gvar.belongings_item_list = Gvar.var_486[Gvar.var_485][Gvar.var_484][0];
                                await Func.func492(); // アイテムリスト呼び出し
                                Gvar.var_482 = 0;
                                Gvar.var_482 = (Gvar.var_486[Gvar.var_485][Gvar.var_484][3] + Gvar.var_486[Gvar.var_485][Gvar.var_484][4]) * 50;
                                if (Gvar.var_486[Gvar.var_485][Gvar.var_484][19] > 1) {
                                    Gvar.var_482 = Gvar.var_486[Gvar.var_485][Gvar.var_484][19] * 500 + Gvar.var_482;
                                }
                                Gvar.payment_amount = Gvar.payment_amount + Gvar.buying_price + Gvar.var_482;
                            }
                            Gvar.var_484 = Gvar.var_484 + 1;
                        }
                    }
                }
                Gvar.var_447 = Gvar.var_447 + 1;
            }
            Gvar.var_449 = Gvar.var_449 + 1;
        }
        Gvar.payment_amount = Gvar.payment_amount + Gvar.count_buying_price;
        Gvar.var_3116 = Gvar.var_82[Gvar.var_1000][Gvar.var_1001];
        if (Gvar.var_83[Gvar.var_3116].Var12 == 1 || Gvar.var_83[Gvar.var_3116].Var13 == 1) {
            Gvar.comments_row1 = "";
            Gvar.comments_row2 = "";
            Gvar.var_295 = "";
            Gvar.comments_row1a = "";
            Gvar.comments_row2a = "";
            Gvar.var_298 = "";
            Gvar.var_299 = 0;
            Gvar.comments_row1 = "・・・・・・・・";
            Gvar.var_198 = 1;
            Gvar.var_300 = 0;
            Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
            Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
            await Func.func047();
            for (let cnt2 = 0; cnt2 < 6; ++cnt2) {
                await Func.func337(); // メッセージ関係呼び出し
            }
            Gvar.var_217 = 1;
            await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
            return;
        }
        if (Gvar.var_1009 > 0) {
            await Func.func708(); // トニオさんに話しかけて、アイテムを売る際のメッセージ処理
            return;
        }
        if (Gvar.payment_amount > 0) {
            await Func.func709(); // トニオさんに話しかけてアイテムを購入する際のメッセージ処理
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
        Gvar.comments_row1 = "レストラン・トラサルディーへようこそ！";
        Gvar.var_198 = 1;
        Gvar.var_300 = 0;
        Gvar.var_25_x = Gvar.var_25[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_26_x = Gvar.var_26[7]; // Ver0.1310で値修正 1 → 7
        Gvar.var_27_x = Gvar.var_27[7]; // Ver0.1310で値修正 1 → 7
        await Func.func047();
        for (let cnt1 = 0; cnt1 < 6; ++cnt1) {
            await Func.func337(); // メッセージ関係呼び出し
        }
        Gvar.var_217 = 1;
        await Main.func019(); // 移動or攻撃動作中の割り込み処理 (時止め、移動速度が戻る、etc)
        return;
}

export {func707}
