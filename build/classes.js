var CharactorInfo = /** @class */ (function () {
    /*
    constructor: クラス内で使える、プロパティの設定・初期化を行うメソッドです。
    作られたインスタンスオブジェクトは、そのままでは空なので、共通するプロパティを設定し、値を代入する役割を担っています。
    参照先: https://qiita.com/TakanoriOkawa/items/7c786bcc6f44a71257a9
    */
    function CharactorInfo(Var0, Var1, Var2, Var3, Var4, Var5, Var6, Var7, Var8, Var9, Var10, Var11, Var12, Var13, Var14, Var15, Var16, Var17, Var18, Var19, Var20, Var21, Var22, Var23, Var24, Var25, Var26, Var27, Var28, Var29, Var30, Var31, Var32, Var33, Var34, Var35, Var36, Var37, Var38, Var39) {
        if (Var0 === void 0) { Var0 = 0; }
        if (Var1 === void 0) { Var1 = 0; }
        if (Var2 === void 0) { Var2 = 0; }
        if (Var3 === void 0) { Var3 = 0; }
        if (Var4 === void 0) { Var4 = 0; }
        if (Var5 === void 0) { Var5 = 0; }
        if (Var6 === void 0) { Var6 = 0; }
        if (Var7 === void 0) { Var7 = 0; }
        if (Var8 === void 0) { Var8 = 0; }
        if (Var9 === void 0) { Var9 = 0; }
        if (Var10 === void 0) { Var10 = 0; }
        if (Var11 === void 0) { Var11 = 0; }
        if (Var12 === void 0) { Var12 = 0; }
        if (Var13 === void 0) { Var13 = 0; }
        if (Var14 === void 0) { Var14 = 0; }
        if (Var15 === void 0) { Var15 = 0; }
        if (Var16 === void 0) { Var16 = 0; }
        if (Var17 === void 0) { Var17 = 0; }
        if (Var18 === void 0) { Var18 = 0; }
        if (Var19 === void 0) { Var19 = 0; }
        if (Var20 === void 0) { Var20 = 0; }
        if (Var21 === void 0) { Var21 = 0; }
        if (Var22 === void 0) { Var22 = 0; }
        if (Var23 === void 0) { Var23 = 0; }
        if (Var24 === void 0) { Var24 = 0; }
        if (Var25 === void 0) { Var25 = 0; }
        if (Var26 === void 0) { Var26 = 0; }
        if (Var27 === void 0) { Var27 = 0; }
        if (Var28 === void 0) { Var28 = 0; }
        if (Var29 === void 0) { Var29 = 0; }
        if (Var30 === void 0) { Var30 = 0; }
        if (Var31 === void 0) { Var31 = 0; }
        if (Var32 === void 0) { Var32 = 0; }
        if (Var33 === void 0) { Var33 = 0; }
        if (Var34 === void 0) { Var34 = 0; }
        if (Var35 === void 0) { Var35 = 0; }
        if (Var36 === void 0) { Var36 = 0; }
        if (Var37 === void 0) { Var37 = 0; }
        if (Var38 === void 0) { Var38 = 0; }
        if (Var39 === void 0) { Var39 = 0; }
        this.Var0 = Var0; // item_list:所持アイテムを格納する配列
        this.Var1 = Var1;
        this.Var2 = Var2;
        this.Var3 = Var3;
        this.Var4 = Var4;
        this.Var5 = Var5;
        this.Var6 = Var6;
        this.Var7 = Var7;
        this.Var8 = Var8;
        this.Var9 = Var9;
        this.Var10 = Var10;
        this.Var11 = Var11;
        this.Var12 = Var12;
        this.Var13 = Var13; // disc_rarity:装備discのレア度を格納する配列
        this.Var14 = Var14;
        this.Var15 = Var15;
        this.Var16 = Var16;
        this.Var17 = Var17;
        this.Var18 = Var18;
        this.Var19 = Var19;
        this.Var20 = Var20;
        this.Var21 = Var21;
        this.Var22 = Var22;
        this.Var23 = Var23;
        this.Var24 = Var24;
        this.Var25 = Var25;
        this.Var26 = Var26;
        this.Var27 = Var27;
        this.Var28 = Var28;
        this.Var29 = Var29;
        this.Var30 = Var30;
        this.Var31 = Var31;
        this.Var32 = Var32;
        this.Var33 = Var33;
        this.Var34 = Var34;
        this.Var35 = Var35;
        this.Var36 = Var36;
        this.Var37 = Var37;
        this.Var38 = Var38;
        this.Var39 = Var39;
    }
    CharactorInfo.Load = function (data) {
        return new CharactorInfo(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20], data[21], data[22], data[23], data[24], data[25], data[26], data[27], data[28], data[29], data[30], data[31], data[32], data[33], data[34], data[35], data[36], data[37], data[38], data[39]);
    };
    CharactorInfo.prototype.Save = function () {
        return [
            this.Var0, this.Var1, this.Var2, this.Var3, this.Var4,
            this.Var5, this.Var6, this.Var7, this.Var8, this.Var9,
            this.Var10, this.Var11, this.Var12, this.Var13, this.Var14,
            this.Var15, this.Var16, this.Var17, this.Var18, this.Var19,
            this.Var20, this.Var21, this.Var22, this.Var23, this.Var24,
            this.Var25, this.Var26, this.Var27, this.Var28, this.Var29,
            this.Var30, this.Var31, this.Var32, this.Var33, this.Var34,
            this.Var35, this.Var36, this.Var37, this.Var38, this.Var39
        ];
    };
    CharactorInfo.dim = function (num) {
        var data = [];
        for (var i = 0; i < num; i++) {
            data.push(new CharactorInfo());
        }
        return data;
    };
    return CharactorInfo;
}());
var ItemInfo = /** @class */ (function () {
    function ItemInfo(Var0, Var1, Var2, Var3, Var4, Var5, Var6, Var7, Var8, Var9, Var10, Var11, Var12, Var13, Var14, Var15, Var16, Var17, Var18, Var19, Var20, Var21, Var22, Var23, Var24, Var25, Var26, Var27, Var28, Var29) {
        if (Var0 === void 0) { Var0 = 0; }
        if (Var1 === void 0) { Var1 = 0; }
        if (Var2 === void 0) { Var2 = 0; }
        if (Var3 === void 0) { Var3 = 0; }
        if (Var4 === void 0) { Var4 = 0; }
        if (Var5 === void 0) { Var5 = 0; }
        if (Var6 === void 0) { Var6 = 0; }
        if (Var7 === void 0) { Var7 = 0; }
        if (Var8 === void 0) { Var8 = 0; }
        if (Var9 === void 0) { Var9 = 0; }
        if (Var10 === void 0) { Var10 = 0; }
        if (Var11 === void 0) { Var11 = 0; }
        if (Var12 === void 0) { Var12 = 0; }
        if (Var13 === void 0) { Var13 = 0; }
        if (Var14 === void 0) { Var14 = 0; }
        if (Var15 === void 0) { Var15 = 0; }
        if (Var16 === void 0) { Var16 = 0; }
        if (Var17 === void 0) { Var17 = 0; }
        if (Var18 === void 0) { Var18 = 0; }
        if (Var19 === void 0) { Var19 = 0; }
        if (Var20 === void 0) { Var20 = 0; }
        if (Var21 === void 0) { Var21 = 0; }
        if (Var22 === void 0) { Var22 = 0; }
        if (Var23 === void 0) { Var23 = 0; }
        if (Var24 === void 0) { Var24 = 0; }
        if (Var25 === void 0) { Var25 = 0; }
        if (Var26 === void 0) { Var26 = 0; }
        if (Var27 === void 0) { Var27 = 0; }
        if (Var28 === void 0) { Var28 = 0; }
        if (Var29 === void 0) { Var29 = 0; }
        this.Var0 = Var0; // item_list:所持アイテムを格納する配列
        this.Var1 = Var1;
        this.Var2 = Var2;
        this.Var3 = Var3;
        this.Var4 = Var4;
        this.Var5 = Var5;
        this.Var6 = Var6;
        this.Var7 = Var7;
        this.Var8 = Var8;
        this.Var9 = Var9;
        this.Var10 = Var10;
        this.Var11 = Var11;
        this.Var12 = Var12;
        this.Var13 = Var13; // disc_rarity:装備discのレア度を格納する配列
        this.Var14 = Var14;
        this.Var15 = Var15;
        this.Var16 = Var16;
        this.Var17 = Var17;
        this.Var18 = Var18;
        this.Var19 = Var19;
        this.Var20 = Var20;
        this.Var21 = Var21;
        this.Var22 = Var22;
        this.Var23 = Var23;
        this.Var24 = Var24;
        this.Var25 = Var25;
        this.Var26 = Var26;
        this.Var27 = Var27;
        this.Var28 = Var28;
        this.Var29 = Var29;
    }
    ItemInfo.Load = function (data) {
        // Ver0.1308で修正。おそらくここが間違えているが為にアイテムを保存できない？
        //return new CharactorInfo(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20], data[21], data[22], data[23], data[24], data[25], data[26], data[27], data[28], data[29]);
        return new ItemInfo(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13], data[14], data[15], data[16], data[17], data[18], data[19], data[20], data[21], data[22], data[23], data[24], data[25], data[26], data[27], data[28], data[29]);
    };
    ItemInfo.prototype.Save = function () {
        return [
            this.Var0, this.Var1, this.Var2, this.Var3, this.Var4,
            this.Var5, this.Var6, this.Var7, this.Var8, this.Var9,
            this.Var10, this.Var11, this.Var12, this.Var13, this.Var14,
            this.Var15, this.Var16, this.Var17, this.Var18, this.Var19,
            this.Var20, this.Var21, this.Var22, this.Var23, this.Var24,
            this.Var25, this.Var26, this.Var27, this.Var28, this.Var29
        ];
    };
    ItemInfo.dim = function (num) {
        var data = [];
        for (var i = 0; i < num; i++) {
            data.push(new ItemInfo());
        }
        return data;
    };
    return ItemInfo;
}());
//# sourceMappingURL=classes.js.map